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
                       canvas/save
                       ;;(canvas/translate (:x val) (:y val))
                       (canvas/fill-style "red")
                       (canvas/fill-rect {:x (:x val) :y (:y val)
                                            :w 50 :h 10})
                       ;;(canvas/begin-path)
                       ;;(canvas/move-to 50 0)
                       ;;(canvas/line-to 0 -15)
                       ;;(canvas/line-to 0 15)
                       ;;(canvas/fill)
                       canvas/restore))))

(declare move-ball!)
(defn make-ball-entity [monet-canvas key shape]
  (canvas/entity {:x (shape-x shape)
                  :y (shape-y shape)
                  :angle (shape-angle shape)}
                 (fn [value]
                   ;; Remove after out of view
                   (when (not
                          (geom/contained?
                           {:x 0 :y 0
                            :w (.-width (:canvas monet-canvas))
                            :h (.-height (:canvas monet-canvas))}
                           {:x (shape-x shape)
                            :y (shape-y shape)
                            :r 5}))
                     (canvas/remove-entity monet-canvas key))
                   (move-ball! shape)
                   (-> value
                       (assoc :x (shape-x shape))
                       (assoc :y (shape-y shape))
                       (assoc :angle (shape-angle shape))))
                 (fn [ctx val]
                   (-> ctx
                       canvas/save
                       (canvas/translate (:x val) (:y val))
                       (canvas/rotate (:angle val))
                       (canvas/fill-style "red")
                       (canvas/circle {:x 10 :y 0 :r 5})
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
                                       (shape-angle ball)))))))))

(defn move-right! [pad]
  "Move pad right."
  (swap! pad (fn [xy]
               (-> xy (update-in [:x] inc)))))

(defn move-left! [pad]
  "Move pad right."
  (swap! pad (fn [xy]
               (-> xy
                   (update-in [:x] dec)))))

(defn add-ball! [monet-canvas]
  "Creates ball entity. Ball gets a unique key so it can be removed.
   TODO create bricks with unique key used for breaking."
  (let [entity-key (keyword (gensym "ball"))
        data (shape-data 10
                         10
                         0) ;; TODO
        ball (make-ball-entity monet-canvas entity-key data)]
    (log "Adding ball")
    (canvas/add-entity monet-canvas entity-key ball)))
