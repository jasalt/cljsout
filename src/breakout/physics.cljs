;; View control logic for entities.
(ns breakout.physics
  (:require [breakout.utils :refer [get-canvas-size]]
            [monet.geometry :as geom]
            )

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

(def ball-speed 50) ;; TODO speed increase bug.

(defn calculate-x [angle]
  "Calculate movement vector y component."
  (* ball-speed (/ (* (Math/cos angle)
                      Math/PI)
                   180)))
(defn calculate-y [angle]
  "Calculate movement vector y component."
  (* ball-speed (/ (* (Math/sin angle)
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

(defn mirror-vertical! [ball]
  "Handle vertical collision by changing ball angle. TODO fix"
  (let [angle (@ball :angle)]
    (swap! ball assoc :angle (- angle (+ Math/PI (* 2 angle))))))

(defn mirror-horizontal! [ball]
  "Handle horizontal collision by changing ball angle."
  (let [angle (@ball :angle)]
    (swap! ball assoc :angle (- angle))))


(defn check-ball-collisions [monet-canvas ball pad]
  "Check if ball collides somewhere and change it's angle accordingly."
  (let [ball-x (@ball :x)
        ball-y (@ball :y)
        border-bottom (.-height (:canvas monet-canvas))
        border-top 0
        border-right (.-width (:canvas monet-canvas))
        border-left 0]
    (cond
      ;; Check borders
      (> ball-y border-bottom) (mirror-horizontal! ball)
      (< ball-y border-top) (mirror-horizontal! ball)
      (< ball-x border-left) (mirror-vertical! ball)
      (> ball-x border-right) (mirror-vertical! ball)

      (geom/collision? @ball (update-in @pad [:x] #(- % (/ (@pad :w) 2))))
      (mirror-horizontal! ball) ;; TODO bounce properly on some direction
      
      :else
      (let [game-entities (breakout.game/game-canvas :entities)
            brick-keys (descendants ::breakout.game/brick)
            ;; Access as js property for performance. TODO find a better way?
            bricks (map #(vector % ((aget game-entities (str %)) :value))
                                brick-keys)
            colliding-bricks (filter #(geom/collision? @ball (second %)) bricks)
            ]
        (when-not (empty? colliding-bricks) (print colliding-bricks))
        )
      ;; map all bricks
      ;; check collision and calculate nearest side to decide.
      )
    
    )
  ;;(get  (breakout.game/game-canvas :entities) "::brick8")
  ;; Check bricks
  ;;(let [brick-keywords (descendants ::breakout.game/brick)])
  ;; - Query bricks from game-canvas?
  

  )
