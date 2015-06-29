;; Draw stuff to screen
(ns breakout.draw
    (:require
     [quil.core :as q :include-macros true]
     [quil.middleware :as m]))

(defn draw-tile [x y]
  (q/fill "red")
  (q/rect x y 50 7))

(defn draw-pad [x y]
  (q/fill "red")
  (q/rect x y 60 10))

(defn draw-state [state]
  (q/background 50)
  
  (doseq [x (range 10 400 60)
          y (range 20 100 15)] (draw-tile x y))

  (q/fill (:color state) 255 255)
  
  (let [angle (:angle state)
        x (* 150 (q/cos angle))
        y (* 150 (q/sin angle))]
                                        
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
                                        
      (draw-pad x 200)
      (q/ellipse x y 10 10)
      ))
  )
