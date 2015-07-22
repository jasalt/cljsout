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
(defonce ui-update-stream
  (let [merged-stream (r/events)
        mouse-stream (->> input/mouse-position-stream
                          (r/map #(hash-map :mouse %)))
        orientation-stream (->> input/orientation-stream
                                (r/map #(hash-map :orientation %)))]
    (->> (r/merge mouse-stream orientation-stream)
         ;;(r/map print) ;;reduce
         ;;(r/map #(do (print %) %))
         (r/reduce (fn [coll event] (merge coll event)) {:orientation 0 :mouse 0})
         (r/sample 100)
         (r/map #(reset! hud-state %))
         )
    )
  )


(defn accelerometer-view []
  [:div
   [:p "Mouse " (:mouse @hud-state)]
   [:p "Orientation raw " (:unscaled (:orientation @hud-state))]
   [:p "Orientation scaled " (:scaled (:orientation @hud-state))]]

  )

(dom/render-component
 [accelerometer-view]
 (.getElementById js/document "hud"))
