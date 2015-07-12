(ns ^:figwheel-always breakout.core
    (:require
     [cljs.core.async :refer [put! chan <!]]
     [clojure.string :as s]

     [goog.dom :as dom]

     [breakout.utils :refer [log]]
     [monet.canvas :as canvas]
     [clojure.set :as set]
     [breakout.entities :as entities
      :refer [move-forward! rotate-left! ;; move-backward!
              rotate-right! add-ball!]]
     [reagi.core :as r]
     ;;[breakout.config :refer [window] :as config]
     ;;[breakout.input :as input]

     ;;[breakout.logic :refer [update-state]]
     ;;[breakout.draw :refer [draw-state]]
     ))

(enable-console-print!)

(def canvas-dom (.getElementById js/document "game"))
(def game-canvas (canvas/init canvas-dom "2d"))
;; (def ctx-dom (.getCtx canvas-dom))
(def pad (entities/shape-data
          (/ (.-width (:canvas game-canvas)) 2)
          (/ (.-height (:canvas game-canvas)) 2)
          100))

(def pad-entity (entities/pad-entity pad))

(canvas/add-entity game-canvas :pad-entity pad-entity)
(canvas/draw-loop game-canvas)



;; Keys that control the game

(def UP    38)
(def RIGHT 39)
(def LEFT  37)
(def BALL  32) ;; space
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
(filter-map #{RIGHT} move-forward! pad)
(filter-map #{LEFT} move-forward! pad)
;;(filter-map #{BALL} pad)
;;(filter-map #{PAUSE} pad)




(defn on-js-reload []
  ;; optionally touch your game-state to force rerendering depending on
  ;; your application
  ;; (swap! game-state update-in [:__figwheel_counter] inc)
  )
