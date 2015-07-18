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


(defn collides-side? [obj obj2]
  "Check if ball collides given rect defined by top-left and bottom-right.
   Return collision position keyword (:right :top :bottom :left) or nil."
  ;;ball-x ball-y tl-x tl-y br-x br-y
  (let [br (geom/bottom-right obj)
        tl (geom/top-left obj)
        br2 (geom/bottom-right obj2)
        tl2 (geom/top-left obj2)]
    (and 
     ;;If the tops are higher than the bottoms
     (and (< (:y tl) (:y br2))
          (< (:y tl2) (:y br)))
     ;;And the lefts are "lefter" than the rights
     (and (< (:x tl) (:x br2))
          (< (:x tl2) (:x br)))))
  
  ;;TODO check collision side
  ;; horizontal or if x is far from center
  )

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
            ;; Access as js property for performance.
            brick-entities (map #(aget game-entities (str %)) brick-keys)
            ]
        brick-entities
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
