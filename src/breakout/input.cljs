(ns breakout.input
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [reagi.core :as r]
   [monet.canvas :as canvas]
   [breakout.game :refer [game-canvas canvas-dom ball pad]]
   [breakout.utils :refer [log]]
   [breakout.entities :refer [move-ball! move-left! move-right! move-to!]]
   [breakout.utils :refer [scale-value str-float]]
   [breakout.hud :refer [hud-state]]
   ))

;; Canvas x-offset will be subtracted from read mouse x values.
(def mouse-x-offset (.ceil js/Math (.-left (.getBoundingClientRect canvas-dom))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Setup controls

(def UP    38)
(def RIGHT 39)
(def LEFT  37)
(def SPACE 32)
(def PAUSE 80) ;; p

;;;; Separate streams for keydowns and keyups

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

;; Merge key events into single event stream that
;; reduces active keys into set and gets updated every 25 ms.

(def active-keys-stream
  (->> (r/merge (keydown-stream) (keyup-stream))
       (r/reduce (fn [acc [event-type key-code]]
                   (condp = event-type
                     ::down (conj acc key-code)
                     ::up (disj acc key-code)
                     acc))
                 #{})
       (r/sample 25)))

(defn filter-map [pred f & args]
  "Helper function for responding to active keys with actions.
   Takes key type predicate and function with args thats evaluated.
   Eg: (filter-map #{RIGHT} move-right! pad)"
  (->> active-keys-stream
       (r/filter (partial some pred))
       (r/map (fn [_] (apply f args)))))

(defn pause! [_]
  (if @(:updating? game-canvas)
    (canvas/stop-updating game-canvas)
    (canvas/start-updating game-canvas)))

(->> active-keys-stream
     (r/filter (partial some #{PAUSE}))
     (r/throttle 100) ;; simple debounce
     (r/map pause!))

;;(filter-map #{UP} pad)
(filter-map #{RIGHT} move-right! pad)
(filter-map #{LEFT} move-left! pad)
(filter-map #{SPACE} move-ball! ball)
;;(filter-map #{PAUSE} pad)

;;;; Pad control with mouse and orientation

(defn mouse-move-stream []
  (let [out (r/events 100)
        game-canvas (.getElementById js/document "game")]
    (set! (.-onmousemove game-canvas)
          #(r/deliver out (.-clientX %)))
    out))

(def mouse-position-stream
  (->> (mouse-move-stream)
       (r/uniq) ;; Drop duplicate events
       (r/map #(move-to! pad (- % mouse-x-offset)))
       ))

(defn orientation-stream []
  (let [out (r/events)]
    (.addEventListener js/window "deviceorientation"
                       #(r/deliver out {:alpha (.-alpha %)
                                        ;;:beta  (.-beta %)
                                        :gamma (.-gamma %)})
                       false)
    out))

(defonce orientations-stream
  (->> (orientation-stream)
       (r/uniq) ;; Drop duplicate events
       (r/map #(do
                 (let [gamma (:gamma %)
                       scaled-val (scale-value gamma [-30 30] [0 300])]
                   (swap! hud-state assoc :accelerometer
                          (map str-float [gamma scaled-val]))
                   (move-to! pad scaled-val))
                 ))
       ))
