(ns breakout.logic
  (:require [breakout.utils :refer [log]])
  )
(defonce debug-state (atom {}))

;;TODO
(defn calculate-brick-positions [level]
  "Return vector of all brick (top-left corner) locations."
  (let [level [[true true true true true true]
               [true true true nil nil true true true]
               [nil nil true true true]]]
    (loop [row level x-offset 0]
      )
    )
  )

(defn move-ball [ball]
  ;; move in angle to new pos
  ;; Slow moves 0.01, Fast 0.05
  (let [x (ball :x)
        y (ball :y)
        angle (ball :angle)
        new-x 0.2
        new-y (if (< y 1) (+ y 0.001) (- y 0.001))
        new-slow :false]
    (-> ball
        (assoc :y new-y)
        (assoc :x new-x)
        )
    ) 
  )

(defn update-state [state]
  (log state)
  (reset! debug-state state)
  ;;(update-in state [:angle] #(+ (:angle state) 0.1))
  (assoc state :angle (+ (:angle state) 0.1))
  (assoc state :ball (move-ball (state :ball)))
  )
