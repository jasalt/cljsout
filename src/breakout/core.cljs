(ns ^:figwheel-always breakout.core
    (:require
     [quil.core :as q :include-macros true]
     [breakout.draw :as d]
     [quil.middleware :as m]
     [goog.dom :as dom]
     [goog.events :as events]
     [cljs.core.async :refer [put! chan <!]])
    (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(defn setup []
                                        ; Set frame rate to 30 frames per second.
  (q/frame-rate 5)
                                        ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
                                        ; setup function returns initial state. It contains
                                        ; circle color and position.
  {:color 0
   :angle 0})

(defn update-state [state]
                                        ; Update sketch state by changing circle color and position.
  {:color (mod (+ (:color state) 0.7) 255)
   :angle (+ (:angle state) 0.1)})


(defn draw-state [state]
  (q/background 50)
  
  (doseq [x (range 10 400 60)
          y (range 20 100 15)] (d/tile x y))

  (q/fill (:color state) 255 255)
  
  (let [angle (:angle state)
        x (* 150 (q/cos angle))
        y (* 150 (q/sin angle))]
                                        ; Move origin point to the center of the sketch.
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
                                        ; Draw the circle.
      (d/pad x 200)
      (q/ellipse x y 100 100)
      ))
  )

(q/defsketch game-sketch
  :host "game"
  :size [500 500]
                                        ; setup function called only once, during sketch initialization.
  :setup setup
                                        ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
                                        ; This sketch uses functional-mode middleware.
                                        ; Check quil wiki for more info about middlewares and particularly
                                        ; fun-mode.
  :middleware [m/fun-mode])
