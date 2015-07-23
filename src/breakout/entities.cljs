;; Game entity factories
;; Set initial data and update & draw fn's.
(ns breakout.entities
  (:require
   [monet.canvas :as canvas]
   [clojure.string :as s]
   [reagi.core :as r]
   
   [breakout.utils :refer [log str-float get-canvas-size]]
   [breakout.physics :as p]
   [breakout.hud :refer [tell-hud]]
   ))

(defn pad-entity [pad]
  (canvas/entity @pad
                 (fn [value] ;; Update
                   ;; TODO get input state from sliding buffer on every draw?
                   (let [new-state (-> value
                                       (assoc :x (@pad :x))
                                       (assoc :y (@pad :y)))]
                     (tell-hud {:pad (new-state :x)})
                     new-state))
                 (fn [ctx {:keys [x y w h]} val] ;; Draw
                   (-> ctx
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
                   (let [new-state (-> value
                             (assoc :x (@ball :x))
                             (assoc :y (@ball :y))
                             (assoc :angle (@ball :angle)))]
                     (tell-hud {:ball {:x (str-float (new-state :x))
                                       :y (str-float (new-state :y))
                                       :a (str-float (new-state :angle))}})
                     new-state
                     )
                   )
                 (fn [ctx v]
                   (-> ctx
                       (canvas/fill-style "blue")
                       (canvas/fill-rect (dissoc v :angle))
                       
                       ;; (canvas/fill-style "gray")
                       ;; (canvas/text
                       ;;  {:text (str "x " (str-float x)) :x 2 :y 20})
                       ;; (canvas/text
                       ;;  {:text (str "y " (str-float y)) :x 2 :y 30})
                       ;; (canvas/text
                       ;;  {:text (str "angle " (str-float angle)) :x 2 :y 40})
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
