;; Initialize game
(ns ^:figwheel-always breakout.core
    (:require
     [clojure.set :as set]
     [monet.canvas :as canvas]
     [reagi.core :as r]

     [breakout.game :refer [game-canvas ball-entity pad-entity]]
     [breakout.utils :refer [log]]
     [breakout.entities :as entities]
     
     ;;[breakout.input]
     
     
     ))

(enable-console-print!) ;; Route prints to console

(canvas/add-entity game-canvas :ball-entity ball-entity)
(canvas/add-entity game-canvas :pad-entity pad-entity)
(canvas/draw-loop game-canvas)

;; Game is stopped when starting up to avoid unnecessary calculation.
;;(canvas/stop-updating game-canvas)

(defn pause! []
  (if @(:updating? game-canvas)
    (canvas/stop-updating game-canvas)
    (canvas/start-updating game-canvas)))

(defn on-js-reload []
  ;; optionally touch your game-state to force rerendering depending on
  ;; your application
  ;; (swap! game-state update-in [:__figwheel_counter] inc)
  )


