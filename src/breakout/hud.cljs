;; Debug some values in DOM.
(ns breakout.hud
  (:require
   [reagi.core :as r]
   [reagent.core :as dom]
   [breakout.input :as input]
   )
  )

(defonce hud-state
  (dom/atom
   {:accelerometer "[Waiting for accelerometer values]"}))

;; UI atom gets updated by stream that is thorttled.
(def ui-update-stream
  (->> input/mouse-position-stream
       (r/map print)
   )
  )


(defn accelerometer-view []
  [:p (str (:accelerometer @hud-state))
   ])

(dom/render-component
 [accelerometer-view]
 (.getElementById js/document "hud"))
