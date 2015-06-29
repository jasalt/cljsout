(ns ^:figwheel-always breakout.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require
     [cljs.core.async :refer [put! chan <!]]
     
     [quil.core :as q :include-macros true]
     [quil.middleware :as m]
     
     [goog.dom :as dom]

     [breakout.utils :refer [log]]
     [breakout.input :refer [setup-input]]
     [breakout.logic :refer [update-state]]
     [breakout.draw :refer [draw-state]]
     ))

(enable-console-print!)

(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(defn setup []
  (q/frame-rate 5)
  (q/color-mode :hsb)
  {:color 0
   :angle 0})

(q/defsketch game-sketch
  :host "game"
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
