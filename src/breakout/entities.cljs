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
  (canvas/entity {:x (shape-x ball)
                  :y (shape-y ball)
                  :angle (shape-angle ball)}
                 (fn [value]
                   ;; Remove after out of view
                   ;; (when (not
                   ;;        (geom/contained?
                   ;;         {:x 0 :y 0
                   ;;          :w (.-width (:canvas monet-canvas))
                   ;;          :h (.-height (:canvas monet-canvas))}
                   ;;         {:x (shape-x shape)
                   ;;          :y (shape-y shape)
                   ;;          :r 1}))
                   ;;   (canvas/remove-entity monet-canvas key))
                   ;;(move-ball! ball)
                   (-> value
                       (assoc :x (shape-x ball))
                       (assoc :y (shape-y ball))
                       (assoc :angle (shape-angle ball))))
                 (fn [ctx val]
                   (-> ctx
                       canvas/save
                       (canvas/translate (:x val) (:y val))
                       (canvas/rotate (:angle val))
                       (canvas/fill-style "blue")
                       (canvas/circle {:x 100 :y 100 :r 100})
                       canvas/restore))))

(def speed 200)
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
  (let [pos (:pos ball)]
    (swap! pos (fn [xy]
                 (-> xy
                     (update-in [:x]
                                #(+ % (calculate-x
                                       (shape-angle ball))))
                     (update-in [:y]
                                #(+ % (calculate-y
                                       (shape-angle ball)))))))
    ))

(defn move-right! [pad]
  "Move pad right."
  (swap! pad (fn [xy]
               (-> xy (update-in [:x] inc)))))

(defn move-left! [pad]
  "Move pad right."
  (swap! pad (fn [xy]
               (-> xy
                   (update-in [:x] dec)))))
