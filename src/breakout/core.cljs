(ns ^:figwheel-always breakout.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require
     [cljs.core.async :refer [put! chan <!]]
     [clojure.string :as s]

     [quil.core :as q :include-macros true]
     [quil.middleware :as m]

     [goog.dom :as dom]

     [breakout.utils :refer [log]]
     [breakout.config :refer [window] :as config]
     [breakout.input :as input]

     [breakout.logic :refer [update-state]]
     [breakout.draw :refer [draw-state]]
     ))

(enable-console-print!)



(defn on-js-reload []
  ;; optionally touch your game-state to force rerendering depending on
  ;; your application
  ;; (swap! game-state update-in [:__figwheel_counter] inc)
  )

(defn stop-loop []
  (q/with-sketch (q/get-sketch-by-id "game") (q/no-loop))
  )
(defn continue-loop []
  (q/with-sketch (q/get-sketch-by-id "game") (q/start-loop))
  )

(defn setup []
  (q/frame-rate (window :frame-rate))
  (q/color-mode :hsb)
  (input/set-pause-listener)
  config/init-state
  )

(q/defsketch game-sketch
  :host "game"
  :size [(* (window :scale-factor) (window :game-width))
         (* (window :scale-factor) (window :game-height))]
  :setup setup
  :update update-state
  :draw draw-state
  :mouse-moved input/mouse-moved
  :middleware [m/fun-mode])
