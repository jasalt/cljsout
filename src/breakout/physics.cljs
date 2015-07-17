;; View control logic for entities.
(ns breakout.physics
  (:require [breakout.utils :refer [get-canvas-size]])
  )

(defn move-right! [pad]
  "Move pad right."
  (swap! pad update-in [:x] inc))

(defn move-left! [pad]
  "Move pad right."
  (swap! pad update-in [:x] dec))

(defn move-to! [pad pos]
  "Move pad to given position."
  (swap! pad assoc :x pos))


(def speed 150)

(defn calculate-x [angle]
  "Calculate movement vector y component."
  (* speed (/ (* (Math/cos angle)
                 Math/PI)
              180)))
(defn calculate-y [angle]
  "Calculate movement vector y component."
  (* speed (/ (* (Math/sin angle)
                 Math/PI)
              180)))

(defn move-ball! [ball]
  "Move ball one step forward."
  (swap! ball (fn [xy]
                (-> xy
                    (update-in [:x]
                               #(+ % (calculate-x
                                      (@ball :angle))))
                    (update-in [:y]
                               #(+ % (calculate-y
                                      (@ball :angle)))))))
  )

(defn ball-collides? [ball-x ball-y rect-tl rect-br]
  "Check if ball collides given rect defined by top-left and bottom-right.
   Return collision position keyword (:right :top :bottom :left) or nil."
  nil
  )

(defn check-ball-collisions [ball]
  ;; Check borders
  (let [cv breakout.game/game-canvas
        [border-w border-h] (get-canvas-size)
        ]
    )
  ;; Check pad
  (let [pad-l breakout.game/pad-entity])
  
  ;; Check bricks
  ;;(let [brick-keywords (descendants ::breakout.game/brick)])
  ;; - Query bricks from game-canvas?
  ;;(keys (get  (js->clj (breakout.game/game-canvas :entities)) ":brick8"))
  
  )

(defn mirror-vertical! [ball]
  "Handle vertical collision by changing ball angle. TODO fix"
  (let [angle (@ball :angle)]
    (swap! ball assoc :angle (- angle (+ Math/PI (* 2 angle))))))

(defn mirror-horizontal! [ball]
  "Handle horizontal collision by changing ball angle."
  (let [angle (@ball :angle)]
    (swap! ball assoc :angle (- angle))))
