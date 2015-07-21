(ns breakout.input
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [reagi.core :as r]
   [monet.canvas :as canvas]
   [breakout.game :refer [game-canvas canvas-dom ball pad]]
   [breakout.utils :refer [log]]
   [goog.events :as g-events]
   ;;[breakout.physics :refer [move-ball! move-left! move-right! move-to!]]
   [breakout.utils :refer [scale-value str-float]]
   ;;[breakout.hud :refer [hud-state]]
   ))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Setup controls

(def UP    38)
(def RIGHT 39)
(def LEFT  37)
(def SPACE 32)
(def PAUSE 80) ;; p

;;;; Separate streams for keydowns and keyups

;; (defn keydown-stream []
;;   (let [out (r/events)]
;;     (set! (.-onkeydown js/document)
;;           #(r/deliver out [::down (.-keyCode %)]))
;;     out))

;; (defn keyup-stream []
;;   (let [out (r/events)]
;;     (set! (.-onkeyup js/document)
;;           #(r/deliver out [::up (.-keyCode %)]))
;;     out))

;; Merge key events into single event stream that
;; reduces active keys into set and gets updated every 25 ms.

;; (def active-keys-stream
;;   (->> (r/merge (keydown-stream) (keyup-stream))
;;        (r/reduce (fn [acc [event-type key-code]]
;;                    (condp = event-type
;;                      ::down (conj acc key-code)
;;                      ::up (disj acc key-code)
;;                      acc))
;;                  #{})
;;        (r/sample 25)))

;; (defn filter-map [pred f & args]
;;   "Helper function for responding to active keys with actions.
;;    Takes key type predicate and function with args thats evaluated.
;;    Eg: (filter-map #{RIGHT} move-right! pad)"
;;   (->> active-keys-stream
;;        (r/filter (partial some pred))
;;        (r/map (fn [_] (apply f args)))))

(defn pause! []
  (if @(:updating? game-canvas)
    (canvas/stop-updating game-canvas)
    (canvas/start-updating game-canvas)))

;; (->> active-keys-stream
;;      (r/filter (partial some #{PAUSE}))
;;      (r/throttle 100) ;; simple debounce
;;      (r/map pause!))

;;(filter-map #{RIGHT} move-right! pad)
;;(filter-map #{LEFT} move-left! pad)
;;(filter-map #{SPACE} move-ball! ball)

;;;; Pad control with mouse and orientation

(defonce mouse-move-stream (r/events 100))

(defn start-mouse-listener []
 (let [game-canvas (.getElementById js/document "game")]
   (set! (.-onmousemove game-canvas) #(r/deliver mouse-move-stream (.-clientX %)))))

(defn stop-mouse-listener []
  (let [game-canvas (.getElementById js/document "game")]
    ;;(.removeEventListener game-canvas put-to-mouse-stream)
    (set! (.-onmousemove game-canvas) nil)))

(start-mouse-listener)

(def mouse-position-stream
  (->> mouse-move-stream
       (r/uniq) ;; Drop duplicate events
       
       ))

(defonce orientation-source (r/events))
(defn set-orientation-listener []
  (.addEventListener js/window "deviceorientation"
                     #(r/deliver orientation-source
                                 {:alpha (.-alpha %)
                                  ;;:beta  (.-beta %)
                                  :gamma (.-gamma %)}) false))
(set-orientation-listener)

(defn orientation-stream []
  ;; Normalize orientation stream values
  (let [chan (r/events)]
    (->> ;;(r/subscribe chan orientation-source)
     orientation-source
     (r/uniq) ;; Drop duplicate events
     (r/map #(do
               (let [gamma (:gamma %)
                     scaled-val (scale-value gamma [-30 30] [0 300])]
                 scaled-val

                 ;; (move-to! pad scaled-val)
                 )
               ))
     )
    chan
    ))


