;; Define game entities.
;; Imitating Clojure Reactive Programming book example.
(ns breakout.entities
  (:require
   [breakout.utils :refer [log]]
   [monet.canvas :as canvas]
   [monet.geometry :as geom]))

(defn shape-x [shape]
  (-> shape :pos deref :x))

(defn shape-y [shape]
  (-> shape :pos deref :y))

(defn shape-angle [shape]
  @(:angle shape))

(defn shape-data [x y angle]
  {:pos   (atom {:x x :y y})
   :angle (atom angle)
   }
  )

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

(declare move-ball!)
(defn ball-entity [monet-canvas ball]
  (canvas/entity {:x (@ball :x)
                  :y (@ball :y)
                  :angle (@ball :angle)}
                 (fn [value]
                   ;; Remove after out of view
                   (if (not
                        (geom/contained?
                         {:x 0 :y 0
                          :w (.-width (:canvas monet-canvas))
                          :h (.-height (:canvas monet-canvas))}
                         {:x (@ball :x)
                          :y (@ball :y)
                          :r 5}))
                     nil
                     (move-ball! ball)
                     )
                   (-> value
                       (assoc :x (@ball :x))
                       (assoc :y (@ball :y))
                       (assoc :angle (@ball :angle))))
                 (fn [ctx val]
                   (-> ctx
                       (canvas/fill-style "blue")
                       (canvas/fill-rect {:x (:x val) :y (:y val)
                                          :w 3 :h 3})))))

(def speed 100)
(defn calculate-x [angle]
  (* speed (/ (* (Math/cos angle)
                 Math/PI)
              180)))
(defn calculate-y [angle]
  (* speed (/ (* (Math/sin angle)
                 Math/PI)
              180)))

(defn move-ball! [ball]
  ;; TODO move function for ball
  (swap! ball (fn [xy]
                (-> xy
                    (update-in [:x]
                               #(+ % (calculate-x
                                      (@ball :angle))))
                    (update-in [:y]
                               #(+ % (calculate-y
                                      (@ball :angle)))))))
  )

(defn check-border-collisions [ball])

(defn move-right! [pad]
  "Move pad right."
  (swap! pad (fn [xy]
               (-> xy (update-in [:x] inc)))))

(defn move-left! [pad]
  "Move pad right."
  (swap! pad (fn [xy]
               (-> xy
                   (update-in [:x] dec)))))
