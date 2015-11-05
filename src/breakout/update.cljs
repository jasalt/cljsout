;; Control logic
(ns breakout.update
  (:require
   [monet.canvas :as canvas]
   [monet.geometry :as geom]
   ))

;; Avoid circular dependency of require
(defonce tell-hud #(breakout.hud.tell-hud %))
(defonce get-bricks #(breakout.core.get-bricks))
(defonce remove-brick! #(breakout.core.remove-brick! %))

(defn move-right! [pad]
  "Move pad right."
  (swap! pad update-in [:x] inc))

(defn move-left! [pad]
  "Move pad right."
  (swap! pad update-in [:x] dec))

(defn move-to! [pos]
  "Move pad to given position.
   TODO Smooth out"
  (swap! breakout.core.pad assoc :x pos))

(def ball-speed 100) ;; TODO speed increase bug.

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

(defn check-brick-collisions [monet-canvas ball]
  (let [bricks (get-bricks)
        colliding-brick (some #(if (geom/collision? @ball (second %)) %)
                              bricks)]
    (when colliding-brick
      ;;(js* "debugger;")
      (remove-brick! (first colliding-brick))
      (tell-hud {:bricks (- (count bricks) 1)
                 :last-brick colliding-brick})
      ;; TODO very raw.
      (let [from-brick-center (- (:x ball) (:x colliding-brick))]
        (print (str from-brick-center))
        (if (< 14 from-brick-center)
          (mirror-vertical! ball)
          (mirror-horizontal! ball)
          )
        )
      ;; jos distance keskelle on pidempi kuin puoli leveyttä -> vertical-mirror
      ;;(print (nearest-side @ball colliding-brick))
      )
    ;;TODO calculate nearest side and mirror ball angle accordingly
    ball
    )
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

      ;; Check pad
      (geom/collision? @ball (update-in @pad [:x] #(- % (/ (@pad :w) 2))))
      (mirror-horizontal! ball) ;; TODO bounce properly on some direction

      :else;; ball
      (check-brick-collisions monet-canvas ball)
      )))

(defn ball [value monet-canvas ball pad]
  ;; Remove after out of view
  (check-ball-collisions monet-canvas ball pad)
  (move-ball! ball)
  (let [new-state (-> value
                      (assoc :x (@ball :x))
                      (assoc :y (@ball :y))
                      (assoc :angle (@ball :angle)))]
    
    new-state))
