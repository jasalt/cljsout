;; Draw stuff to screen
(ns breakout.draw
  (:require
   [quil.core :as q :include-macros true]
   [quil.middleware :as m]
   ;;[breakout.core :as core]
   ))

(defn ->px-pos 
  "Transform game object position in range 0.0 - 1.0 into screen pixel position.
  Takes vector of two number elements or two number parameters.
  Return value is vector [x y]."
  ([tuple]
   {:pre [(vector? tuple) (= 2 (count tuple))]}
   (let [[x y] (->px-pos (first tuple) (second tuple))]
     [x y])) ([x y]
   {:pre [(number? x) (number? y)
          ;;(<= x 1.0) (<= y 1.0)
          ;;(>= x 0.0) (>= y 0.0)
          ]}
   (let [w (breakout.core/properties :width)
         h (breakout.core/properties :height)]
     [(* w x) (* h y)])))

(defn draw-ball [[x y]]
  (q/fill "red")
  (let [w 5
        h 5]
    (q/rect (- x (/ w 2)) (- y (/ h 2)) 5 5))
  )

;;(defn draw-bricks [])

(defn draw-tile [x y]
  (q/fill "red")
  (q/rect x y 50 7))

(defn draw-pad [x y]
  (q/fill "red")
  (q/rect x y 60 10))

(defn draw-state [state]
  (q/background 50)

  (q/fill (:color state) 255 255)
  (draw-ball (->px-pos ((state :ball) :x)
                        ((state :ball) :y)))
  
  ;; (let [level (state :level)]
  ;;   (doseq [row level y (range 10 (count level) 20)]
  ;;     (doseq [brick row x (range 10 400 60)]
  ;;       (if (nil? brick) (draw-tile x y))
  ;;       )
  ;;     ))
  
  ;; (let [angle (:angle state)
  ;;       x (* 150 (q/cos angle))
  ;;       y (* 150 (q/sin angle))]

  ;;   (q/with-translation [(/ (q/width) 2)
  ;;                        (/ (q/height) 2)]

  ;;     (draw-pad x 200)
  ;;     (q/ellipse x y 10 10)
  ;;     ))
  )
