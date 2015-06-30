(ns ^:figwheel-always breakout.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require
     [cljs.core.async :refer [put! chan <!]]
     [clojure.string :as s]

     [quil.core :as q :include-macros true]
     [quil.middleware :as m]

     [goog.dom :as dom]

     [breakout.utils :refer [log get-window-size]]
     [breakout.input :refer [setup-input]]
     [breakout.levels :refer [get-level]]
     [breakout.logic :refer [update-state]]
     [breakout.draw :refer [draw-state]]
     ))

(enable-console-print!)

(defonce properties {:width 400
                     :height 500})

(defonce init-state
  {:angle 0
   :level (get-level 1)
   :ball {:x 0.5, :y 0.5, :angle 0, :slow false}
   :paddle 0.5
   })

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
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (log "Starting")
  init-state
  )

(q/defsketch game-sketch
  :host "game"
  :size [(properties :width)
         (properties :height)]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])

