;; Initialize game
(ns ^:figwheel-always breakout.core
    (:require
     [clojure.set :as set]
     [monet.canvas :as canvas]
     [reagi.core :as r]

     ;;TODO cleanup and order properly
     [breakout.input]
     [breakout.game :refer [game-canvas ball-entity pad-entity]]
     [breakout.utils :refer [log]]
     [breakout.entities :as entities]
     ))

(enable-console-print!) ;; Route prints to console

(defn init! []
  (canvas/add-entity game-canvas :ball-entity ball-entity)
  (canvas/add-entity game-canvas :pad-entity pad-entity)
  )

(defn start! []
  (canvas/draw-loop game-canvas))

(defn pause! []
  (if @(:updating? game-canvas)
    (canvas/stop-updating game-canvas)
    (canvas/start-updating game-canvas)))

;;(pause!)

(defn on-js-reload []
  ;; optionally touch your game-state to force rerendering depending on
  ;; your application
  ;; (swap! game-state update-in [:__figwheel_counter] inc)
  )

(set! (.-onload js/window) init!)
