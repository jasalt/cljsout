;; Debug some values in DOM.
(ns breakout.hud
  (:require
   [reagi.core :as r]
   [reagent.core :as dom]
   [breakout.input :as input]
   [breakout.config :refer [config set-input]]
   )
  )

(defonce hud-state
  (dom/atom
   {:accelerometer "[Waiting for input values]"}))

;; UI atom gets updated by stream that is thorttled.
(defonce hud-update-stream
  (let [in-stream (r/events) ;; Entity values are delivered to this stream
        mouse-stream (->> input/mouse-position-stream
                          (r/map #(hash-map :mouse %)))
        orientation-stream (->> input/orientation-stream
                                (r/map #(hash-map :orientation %)))]
    (->> (r/merge mouse-stream orientation-stream in-stream)
         ;;TODO zip merge-with merge
         (r/reduce (fn [coll event] (merge coll event)) {:orientation 0 :mouse 0 :pad 0})
         (r/sample 50)
         (r/map #(reset! hud-state %)))
    in-stream
    ))

(defn accelerometer-view []
  [:div
   [:h2 "Debug"]
   [:h3 "Input"]
   [:p (let [mouse-state (-> @config :input :mouse :active)]
         [:input {:type "checkbox" :checked mouse-state
                  :on-change #(set-input :mouse (not mouse-state))}])
    " Mouse " (:mouse @hud-state)]
   
   [:p (let [orientation-state (-> @config :input :orientation :active)]
         [:input {:type "checkbox" :checked orientation-state
                  :on-change #(set-input :orientation (not orientation-state))}])
    " Orientation"
    [:p "Raw " (:unscaled (:orientation @hud-state))]
    [:p "Scaled " (:scaled (:orientation @hud-state))]
    ]
   [:h2 "Entities"]
   [:p "Pad " (str (:pad @hud-state))]
   ])

(dom/render-component
 [accelerometer-view]
 (.getElementById js/document "hud"))
