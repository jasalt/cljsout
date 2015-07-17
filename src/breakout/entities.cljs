;; Game entity factories
;; Set initial data and update & draw fn's.
(ns breakout.entities
  (:require
   [breakout.utils :refer [log str-float get-canvas-size]]
   [breakout.physics :as p]
   
   [clojure.string :as s]
   [monet.canvas :as canvas]
   [monet.geometry :as geom]
   ))

(defn pad-entity [pad]
  (canvas/entity {:x (@pad :x)
                  :y (@pad :y)}
                 (fn [value] ;; Update
                   (-> value
                       (assoc :x (@pad :x))
                       (assoc :y (@pad :y))))
                 (fn [ctx val] ;; Draw
                   (-> ctx
                       (canvas/fill-style "gray")
                       ;; (canvas/fill-rect {:x (:x val) :y (:y val)
                       ;;                    :w 50 :h 10})
                       (canvas/text
                        {:text (str "pad " (str-float (:x val))) :x 2 :y 50})

                       canvas/save
                       
                       (canvas/stroke-style "red")
                       (canvas/stroke-width 3)
                       
                       (canvas/translate (:x val) (:y val))
                       (canvas/begin-path)
                       (canvas/move-to -25 0)
                       (canvas/line-to 25 0)
                       (canvas/stroke)
                       canvas/restore))))

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
                       (> ball-y border-bottom) (p/mirror-horizontal! ball)
                       (< ball-y border-top) (p/mirror-horizontal! ball)
                       (< ball-x border-left) (p/mirror-vertical! ball)
                       (> ball-x border-right) (p/mirror-vertical! ball)
                       (geom/collision? @ball @pad) (p/mirror-vertical! ball)
                       )
                     )
                   (p/move-ball! ball)
                   (-> value
                       (assoc :x (@ball :x))
                       (assoc :y (@ball :y))
                       (assoc :angle (@ball :angle))))
                 (fn [ctx val]
                   (-> ctx
                       (canvas/fill-style "blue")
                       (canvas/fill-rect {:x (:x val) :y (:y val)
                                          :w 3 :h 3})

                       (canvas/fill-style "gray")
                       (canvas/text
                        {:text (str "x " (str-float (:x val))) :x 2 :y 20})
                       (canvas/text
                        {:text (str "y " (str-float (:y val))) :x 2 :y 30})
                       (canvas/text
                        {:text (str "angle " (str-float (:angle val))) :x 2 :y 40})
                       ;;(canvas/text {:text
                       ;;  (str "y: " (:y val)) :x 2 :y 190})
                       ))))

(defn make-brick-entity [canvas entity-key
                         {pos-x :x pos-y :y}]
  (canvas/entity {:x pos-x
                  :y pos-y}
                 (fn [value] ;; Update
                   ;; TODO
                   value
                   )
                 (fn [ctx val] ;; Draw
                   (-> ctx
                       canvas/save
                       
                       (canvas/stroke-style "green")
                       (canvas/stroke-width 10)
                       
                       (canvas/translate (:x val) (:y val))
                       (canvas/begin-path)
                       (canvas/move-to 0 0)
                       (canvas/line-to 30 0)
                       (canvas/stroke)
                       
                       canvas/restore
                       ;; (canvas/font-style "8px Arial")
                       ;; (canvas/text
                       ;;  {:text (str (str-float (:x val) 0)" "
                       ;;              (str-float (:y val) 0))
                       ;;   :x (+ (:x val) 1) :y (+ (:y val) 8)})
                       ))))
