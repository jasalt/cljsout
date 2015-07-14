(ns breakout.game
  (:require
   [clojure.set :as set]
   [monet.canvas :as canvas]
   [reagi.core :as r]

   [breakout.utils :refer [log]]
   [breakout.entities :as entities]
   [breakout.levels :refer [get-level]]
   ))

;; (def init-state
;;   {:angle 0
;;    :bricks (get-level 3)
;;    :ball {:x 0.5, :y 0.5, :vx 0, :vy 0, :slow false}
;;    :pad 40
;;    }
;;   )

;; (def game {:ball-size 2
;;            :pad-size 20})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Setup game area and entities

(def canvas-dom (.getElementById js/document "game"))
(def game-canvas (canvas/init canvas-dom "2d"))

;; Initial values for game entities
(def pad (atom {:x (/ (.-width (:canvas game-canvas)) 2)
                :y (- (.-height (:canvas game-canvas)) 20)}))

(def ball (atom {:x (/ (.-width (:canvas game-canvas)) 3)
                 :y (/ (.-height (:canvas game-canvas)) 3)
                 :angle (* Math/PI 1.6)}))

(def pad-entity (entities/pad-entity pad))
(def ball-entity (entities/ball-entity game-canvas ball pad))


(defn add-brick! [canvas x y]
  (let [entity-key (gensym :brick)
        brick (entities/make-brick-entity canvas
                                          entity-key
                                          {:x x :y y})]
    (canvas/add-entity game-canvas entity-key brick)
    )
  )

(defn build-level [level-number]
  (let [bricks (get-level 1)]
    (doseq [row bricks pos-y (range 3 6)]
      (doseq [brick bricks pos-x (range 1 9)]
        (add-brick! game-canvas (* 35 pos-x) (* 25 pos-y))
        )
      )
    )
  )

(build-level 1)
