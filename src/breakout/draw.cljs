;; Draw stuff to screen
(ns breakout.draw
  (:require
   [quil.core :as q :include-macros true]
   [quil.middleware :as m]
   [breakout.config :refer [window]]
   ))

;; TODO require instead? (without stackoverflowerror)
;;(defonce prefs breakout.core/prefs)

;; (defn ->px-pos
;;   "Transform game object position in range 0.0 - 1.0 into screen pixel position.
;;   Takes vector of two number elements or two number parameters.
;;   Return value is vector [x y]."
;;   ([tuple]
;;    {:pre [(vector? tuple) (= 2 (count tuple))]}
;;    (let [[x y] (->px-pos (first tuple) (second tuple))]
;;      [x y])) ([x y]
;;               {:pre [(number? x) (number? y)
;;                      ;;(<= x 1.0) (<= y 1.0)
;;                      ;;(>= x 0.0) (>= y 0.0)
;;                      ]}
;;               (let [w (prefs :window-width)
;;                     h (prefs :window-height)]
;;                 [(* w x) (* h y)])))

;; (defn ->px [x]
;;   "Transform size in range 0.0 - 1.0 into screen pixel dimensions."
;;   {:pre [(number? x)]}
;;   (let [w (prefs :window-width)
;;         h (prefs :window-height)]
;;     [(* w x) (* h y)]))

;; (defn draw-ball [[x y]]
;;   (q/fill "red")
;;   (let [size (prefs :ball-size)]
;;     (q/rect (- x (/ size 2)) (- y (/ size 2)) size size))
;;   )

;;(defn draw-bricks [])

;; (defn draw-tile [x y]
;;   (q/fill "red")
;;   (q/rect x y 50 7))

;; (defn draw-pad [x y]
;;   (q/fill "red")
;;   (q/rect x y 60 10))

(defn draw-game [state]
  "Draw game in 100 x 160 size."
  (q/fill 200)
  (q/rect 0 0 (window :game-width) (window :game-height))
  ;; (draw-ball (->px-pos ((state :ball) :x)
  ;;                      ((state :ball) :y)))
  )

(defn draw-hud [state]
  "Draw score display."
  (q/fill 0)
  (q/rect 0 0 (window :game-width) (window :menu-height))
  (q/fill 255)
  (q/text-font "monospace" (- (window :menu-height) 2))
  (q/text "TODO Score     and Level      and ..."
          2 (dec (window :menu-height))))

(defn draw-state [state]
  "Draw all canvas content"
  (q/scale (window :scale-factor))
  (q/background 200)
  
  (q/with-translation [(window :padding) (window :padding)]
    (draw-game state))

  (q/with-translation [(window :padding) (+ (* 2 (window :padding))
                                            (window :game-height))]
    (draw-hud state))

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
