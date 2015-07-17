;; Game entity factories
;; Set initial data and update & draw fn's.
(ns breakout.entities
  (:require
   [breakout.utils :refer [log str-float get-canvas-size]]
   [breakout.physics :as p]

   [clojure.string :as s]
   [monet.canvas :as canvas]
   ))

(defn pad-entity [pad]
  (canvas/entity @pad
                 (fn [value] ;; Update
                   ;; TODO get input state from sliding buffer on every draw?
                   (-> value
                       (assoc :x (@pad :x))
                       (assoc :y (@pad :y))))
                 (fn [ctx {:keys [x y w h]} val] ;; Draw
                   (-> ctx
                       (canvas/text
                        {:text (str "pad " (str-float x)) :x 2 :y 50})

                       canvas/save

                       (canvas/stroke-style "red")
                       (canvas/stroke-width h)
                       (canvas/translate x y)
                       (canvas/begin-path)
                       (canvas/move-to (- (/ w 2)) 0)
                       (canvas/line-to (/ w 2) 0)
                       (canvas/stroke)
                       
                       canvas/restore))))

(defn ball-entity [monet-canvas ball pad]
  (canvas/entity @ball
                 (fn [value]
                   ;; Remove after out of view
                   (p/check-ball-collisions monet-canvas ball pad)
                   (p/move-ball! ball)
                   (-> value
                       (assoc :x (@ball :x))
                       (assoc :y (@ball :y))
                       (assoc :angle (@ball :angle))))
                 (fn [ctx {:keys [x y w h angle] :as v} val]
                   (-> ctx
                       (canvas/fill-style "blue")
                       (canvas/fill-rect (dissoc v :angle))
                       
                       (canvas/fill-style "gray")
                       (canvas/text
                        {:text (str "x " (str-float x)) :x 2 :y 20})
                       (canvas/text
                        {:text (str "y " (str-float y)) :x 2 :y 30})
                       (canvas/text
                        {:text (str "angle " (str-float angle)) :x 2 :y 40})
                       ;;(canvas/text {:text
                       ;;  (str "y: " (:y val)) :x 2 :y 190})
                       ))))

(defn make-brick-entity [canvas entity-key
                         {pos-x :x pos-y :y}]
  (canvas/entity {:x pos-x :y pos-y
                  :w 30 :h 10}
                 (fn [value] ;; Update
                   ;; TODO
                   value
                   )
                 (fn [ctx {:keys [x y w h]} val] ;; Draw
                   (-> ctx
                       canvas/save

                       (canvas/stroke-style "green")
                       (canvas/stroke-width h)

                       (canvas/translate x y)
                       (canvas/begin-path)
                       (canvas/move-to 0 0)
                       (canvas/line-to w 0)
                       (canvas/stroke)

                       canvas/restore
                       ;; (canvas/font-style "8px Arial")
                       ;; (canvas/text
                       ;;  {:text (str (str-float (:x val) 0)" "
                       ;;              (str-float (:y val) 0))
                       ;;   :x (+ (:x val) 1) :y (+ (:y val) 8)})
                       ))))
