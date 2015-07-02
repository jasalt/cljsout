;; Draw stuff to screen
(ns breakout.draw
  (:require
   [quil.core :as q :include-macros true]
   [quil.middleware :as m]
   [breakout.config :refer [window game]]
   [breakout.utils :refer [log]]
   [breakout.logic :as logic]
   ))

(defn draw-ball [[x y]]
  (q/fill "red")
  (let [size (game :ball-size)]
    (q/rect (- x (/ size 2)) (- y (/ size 2)) size size))
  )

;;(defn draw-bricks [])

;; (defn draw-tile [x y]
;;   (q/fill "red")
;;   (q/rect x y 50 7))

(defn draw-brick [x y]
  (let [color [255 50 255]]
    (apply q/fill color)
    (apply q/stroke color)
    )
  (q/rect x y 10 5)
  )

(defn draw-bricks [bricks]
  (doseq [row bricks r (range (count bricks))]
    ;;(logic/calc-bricks bricks)
    nil
    )
  )

(defn draw-pad [x]
  (q/fill 0 0 0)
  (q/stroke "red")
  (q/rect x (- (window :game-height) 5)
          (game :pad-size) 1))

(defn draw-game [state]
  "Draw game in 100 x 160 size."
  ;; (draw-ball (->px-pos ((state :ball) :x)
  ;;                      ((state :ball) :y)))
  (draw-pad (state :pad))
  ;; (draw-bricks (state :bricks))
  )

(defn draw-hud [state]
  "Draw score display."
  (q/fill 0)
  (q/stroke 0)
  (q/rect 0 0 (window :game-width) (window :menu-height))
  (q/fill 255)
  (q/text-font "monospace" (- (window :menu-height) 2))
  (q/text "TODO Score     and Level      and ..."
          2 (dec (window :menu-height))))

(defn draw-state [state]
  "Draw all canvas content"
  ;;(q/scale (window :scale-factor))
  ;;(q/background 80)

  (draw-game state)


  ;; (let [angle (:angle state)
  ;;       x (* 150 (q/cos angle))
  ;;       y (* 150 (q/sin angle))]

  ;;   (q/with-translation [(/ (q/width) 2)
  ;;                        (/ (q/height) 2)]

  ;;     (draw-pad x 200)
  ;;     (q/ellipse x y 10 10)
  ;;     ))
  )
