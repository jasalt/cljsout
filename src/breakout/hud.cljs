;; Debug some values in DOM.
(ns breakout.hud
  (:require [reagent.core :as r])
  )

(defonce hud-state
  (r/atom
   {:accelerometer "[Waiting for accelerometer values]"}))

(defn accelerometer-view []
  [:p (str (:accelerometer @hud-state))
   ])

(r/render-component
 [accelerometer-view]
 (.getElementById js/document "hud"))

