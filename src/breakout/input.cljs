(ns breakout.input
  (:require
   [reagi.core :as r]
   [monet.canvas :as canvas]
   [goog.events :as g-events]
   [breakout.utils :refer [scale-value str-float]]
   [breakout.physics :refer [move-to! move-right! move-left!]]
   ))

;; Avoid circular dependency of require
(def pause! #(breakout.core.pause!))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Setup controls

(def UP    38)
(def RIGHT 39)
(def LEFT  37)
(def SPACE 32)
(def PAUSE 80) ;; p

;;;; TODO Separate streams for keydowns and keyups

(defn keydown-stream []
  (let [out (r/events)]
    (set! (.-onkeydown js/document)
          #(r/deliver out [::down (.-keyCode %)]))
    out))

(defn keyup-stream []
  (let [out (r/events)]
    (set! (.-onkeyup js/document)
          #(r/deliver out [::up (.-keyCode %)]))
    out))

;;Merge key events into single event stream that
;;reduces active keys into set and gets updated every 25 ms.

(def active-keys-stream
  (->> (r/merge (keydown-stream) (keyup-stream))
       (r/reduce (fn [acc [event-type key-code]]
                   (condp = event-type
                     ::down (conj acc key-code)
                     ::up (disj acc key-code)
                     acc))
                 #{})
       (r/sample 25)))

;; (defn filter-map [pred f & args]
;;   "Helper function for responding to active keys with actions.
;;    Takes key type predicate and function with args thats evaluated.
;;    Eg: (filter-map #{RIGHT} move-right! pad)"
;;   (->> active-keys-stream
;;        (r/filter (partial some pred))
;;        (r/map (fn [_] (apply f args)))))

(->> active-keys-stream
     (r/filter (partial some #{PAUSE SPACE}))
     (r/throttle 100) ;; simple debounce
     (r/map #(pause!)))

;;(filter-map #{RIGHT} move-right! pad)
;;(filter-map #{LEFT} move-left! pad)
;;(filter-map #{SPACE} move-ball! ball)


;;;; Mouse position

(defonce mouse-move-stream (r/events))

(defn start-mouse-listener []
  (println "Starting mouse listener")
  (let [game-canvas (.getElementById js/document "game")]
    (set! (.-onmousemove game-canvas)
          #(r/deliver mouse-move-stream (.-clientX %)))))

(defn stop-mouse-listener []
  (println "Stopping mouse listener")
  (let [game-canvas (.getElementById js/document "game")]
    ;;(.removeEventListener game-canvas put-to-mouse-stream)
    (set! (.-onmousemove game-canvas) nil)))

;; Canvas x-offset will be subtracted from read mouse x values.
(def mouse-x-offset
  (- (.ceil js/Math (.-left (.getBoundingClientRect
                             (.getElementById js/document "game")))) 1))

(def mouse-position-stream
  (->> mouse-move-stream
       (r/uniq) ;; Drop duplicate events
       (r/map #(- % mouse-x-offset))))


;;;;;;;; Device Orientation

;; Capture deviceorientation event gamma values
(defonce orientation-change-stream (r/events))

(defn read-orientation-event [e]
  "Need to use named function to allow removing event listener."
  (r/deliver orientation-change-stream {:gamma (.-gamma e)
                                        :alpha (.-alpha e)
                                        :beta (.-beta e)}))
(defn start-orientation-listener []
  (println "Starting orientation listener")
  (.addEventListener js/window "deviceorientation"
                     read-orientation-event false))

(defn stop-orientation-listener []
  (println "Stopping orientation listener")
  (.removeEventListener js/window
                        "deviceorientation"
                        read-orientation-event false))

;; Cleanup and normalize orientation changes
;; TODO calibrate/optimize for different devices
;; -30 - 30 android phone
;; -15 - 15 macbook pro 2011
(defonce orientation-stream
  (->> orientation-change-stream
       (r/map :gamma)
       (r/uniq)
       (r/map #(hash-map :scaled (->> (scale-value % [-30 30] [0 300])
                                      (.floor js/Math))
                         :unscaled (str-float % 2)))))

;; Aggregate pad positions from streams that provide them
(defonce pad-position-stream
  (->> (r/merge mouse-position-stream
                (->> orientation-stream (r/map :scaled)))
       ;; (r/map #(move-to! breakout.game/pad %))
       ))
