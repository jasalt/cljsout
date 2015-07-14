;; Define game entities.
;; Imitating Clojure Reactive Programming book example.
(ns breakout.entities
  (:require
   [breakout.utils :refer [log str-float]]
   [clojure.string :as s]
   [monet.canvas :as canvas]
   [monet.geometry :as geom]))

(defn pad-entity [pad]
  (canvas/entity {:x (@pad :x)
                  :y (@pad :y)}
                 (fn [value] ;; Update
                   (-> value
                       (assoc :x (@pad :x))
                       (assoc :y (@pad :y))))
                 (fn [ctx val] ;; Draw
                   (-> ctx
                       (canvas/fill-style "red")
                       (canvas/fill-rect {:x (:x val) :y (:y val)
                                          :w 50 :h 10})))))

(defn move-right! [pad]
  "Move pad right."
  (swap! pad update-in [:x] inc))

(defn move-left! [pad]
  "Move pad right."
  (swap! pad update-in [:x] dec))

(defn move-to! [pad pos]
  "Move pad to given position."
  (swap! pad assoc :x pos))

(declare move-ball! mirror-horizontal! mirror-vertical!)
(defn ball-entity [monet-canvas ball pad]
  (canvas/entity {:x (@ball :x)
                  :y (@ball :y)
                  :angle (@ball :angle)}
                 (fn [value]
                   ;; Remove after out of view
                   (let [ball-x (@ball :x)
                         ball-y (@ball :y)
                         border-bottom (.-height (:canvas monet-canvas))
                         border-top 0
                         border-right (.-width (:canvas monet-canvas))
                         border-left 0]
                     (cond ;; Handle Wall collisions
                       (> ball-y border-bottom) (mirror-horizontal! ball)
                       (< ball-y border-top) (mirror-horizontal! ball)
                       (< ball-x border-left) (mirror-vertical! ball)
                       (> ball-x border-right) (mirror-vertical! ball)
                       (geom/collision? @ball @pad) (mirror-vertical! ball)
                       )
                     )
                   (move-ball! ball)
                   (-> value
                       (assoc :x (@ball :x))
                       (assoc :y (@ball :y))
                       (assoc :angle (@ball :angle))))
                 (fn [ctx val]
                   (-> ctx
                       (canvas/fill-style "blue")
                       (canvas/fill-rect {:x (:x val) :y (:y val)
                                          :w 3 :h 3})

                       ;;(canvas/text {:text
                       ;;  (str "a: " (:angle val)) :x 2 :y 170})
                       (canvas/text {:text
                                     (str-float (:x val)) :x 2 :y 180})
                       ;;(canvas/text {:text
                       ;;  (str "y: " (:y val)) :x 2 :y 190})
                       ))))

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

(defn mirror-vertical! [ball]
  "Handle vertical collision by changing ball angle."
  (let [angle (@ball :angle)]
    (swap! ball assoc :angle (- angle (+ Math/PI (* 2 angle))))))

(defn mirror-horizontal! [ball]
  "Handle horizontal collision by changing ball angle."
  (let [angle (@ball :angle)]
    (swap! ball assoc :angle (- angle))))
