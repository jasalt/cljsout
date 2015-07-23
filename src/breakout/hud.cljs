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
         (r/reduce (fn [coll event] (merge coll event)))
         (r/sample 50)
         (r/map #(reset! hud-state %)))
    in-stream))

(defn accelerometer-view []
  [:div
   [:h2 "Debug"]
   [:h3 "Input"]
   [:p (let [mouse-state (-> @config :input :mouse :active)]
         [:input {:type "checkbox" :checked mouse-state
                  :on-change #(set-input :mouse (not mouse-state))}])
    " Mouse X " (:mouse @hud-state)]

   [:p (let [orientation-state (-> @config :input :orientation :active)]
         [:input {:type "checkbox" :checked orientation-state
                  :on-change #(set-input :orientation (not orientation-state))}])
    " Orientation "
    (when-let [x-val (:orientation @hud-state)]
      (str "X " (:scaled x-val) " Raw " (:unscaled (:orientation @hud-state))))]
   
   [:h2 "Entities"]
   [:p "Pad X " (str (:pad @hud-state))]
   (let [{:keys [x y a]} (:ball @hud-state)]
    [:p "Ball " (str "X " x " Y " y " Angle " a)])
   [:p "Brick count " (str (:bricks @hud-state))]
   [:p "Last " (str (:last-brick @hud-state))]
   ])

(defn tell-hud [msg]
  "Tell hud about some event."
  (r/deliver hud-update-stream msg))

(dom/render-component
 [accelerometer-view]
 (.getElementById js/document "hud"))
