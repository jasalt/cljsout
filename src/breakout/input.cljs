(ns breakout.input
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [reagi.core :as r]
   [monet.canvas :as canvas]
   [breakout.game :refer [game-canvas ball pad]]
   [breakout.utils :refer [log]]
   [breakout.entities :refer [move-ball! move-left! move-right! move-to!]]
   ))

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

(defn mouse-move-stream []
  (let [out (r/events [::x 50])
        game-canvas (.getElementById js/document "game")]
    (set! (.-onmousemove game-canvas)
          #(r/deliver out (.-clientX %)))
    out))

(def mouse-position-stream
  (->> (mouse-move-stream)
       (r/uniq) ;; Drop duplicate events
       (r/map #(do ;;(log (str "pad: " %))
                 (move-to! pad %)
                 ;;(swap! pad assoc :x %)
                 ))
       
       ))

;;(filter-map #{UP} pad)
(filter-map #{RIGHT} move-right! pad)
(filter-map #{LEFT} move-left! pad)
(filter-map #{SPACE} move-ball! ball)
;;(filter-map #{PAUSE} pad)

