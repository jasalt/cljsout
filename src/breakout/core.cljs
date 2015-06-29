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

(defonce properties (let [[width height] (get-window-size)]
                      {:width width
                       :height height}))

(defonce game-state
  (atom {:color 0
         :angle 0
         }))

(defn on-js-reload []
  ;; optionally touch your game-state to force rerendering depending on
  ;; your application
  ;; (swap! game-state update-in [:__figwheel_counter] inc)
  )

(defn setup []
  (q/frame-rate 5)
  (q/color-mode :hsb)
  game-state
  )

(q/defsketch game-sketch
  :host "game"
  :size [(properties :width)
         (properties :height)]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])

