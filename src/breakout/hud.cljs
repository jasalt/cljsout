;; Use DOM for showing game state notifications and debug info.
(ns breakout.hud
  (:require
   [reagi.core :as r]
   [reagent.core :as dom]
   [breakout.input :as input]
   [breakout.input :refer [config set-input]]
   [breakout.utils :refer [timeout rand-char]]
   [cljs.core.async :refer [chan close!]]
   )
  (:require-macros
   [cljs.core.async.macros :as m :refer [go]])
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

(defn debug-view []
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
 [debug-view]
 (.getElementById js/document "hud"))


(defonce overlay-text (dom/atom ""))

(defn game-overlay []
  [:h1 @overlay-text]
  )

(dom/render-component
 [game-overlay]
 (.getElementById js/document "gameOverlayText")
 )



(defn set-text [text]
  (reset! overlay-text text))

(defn startup-title-animation []
  "Run fancy startup title animation."
  (let [game-name "BREAKOUT"]
    (set-text "It's")
    (go
      (loop [[matched unmatched] [[] (vec game-name)]]
        (<! (timeout 30))
        (when-not (empty? unmatched)
          (let [random-part (repeatedly (count unmatched) rand-char)]
            (set-text (apply str (concat matched random-part)))
            (if (or (= (rand-int 3) 1)
                    (= (first random-part) (first unmatched)))
              (recur [(conj matched (first unmatched)) ;; If match
                      (rest unmatched)])
              (recur [matched ;; Else
                      unmatched])))))
      (set-text game-name)
      (doseq [i (range 2)]
        (<! (timeout 200))
        (set-text nil)
        (<! (timeout 200))
        (set-text game-name)
        )
      (<! (timeout 400))
      (set-text "TIME!")
      (<! (timeout 600))
      (set-text nil)
      )))
