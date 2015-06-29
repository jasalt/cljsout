(ns breakout.draw
    (:require
     [quil.core :as q :include-macros true]
     [quil.middleware :as m]
     ))

(defn tile [x y]
  (q/fill "red")
  (q/rect x y 50 7)
  )

(defn pad [x y]
  (q/fill "red")
  (q/rect x y 60 10)
  )

(defn draw-state [state]
  (q/background 50)
  
  (doseq [x (range 10 400 60)
          y (range 20 100 15)] (d/tile x y))

  (q/fill (:color state) 255 255)
  
  (let [angle (:angle state)
        x (* 150 (q/cos angle))
        y (* 150 (q/sin angle))]
                                        ; Move origin point to the center of the sketch.
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
                                        ; Draw the circle.
      (d/pad x 200)
      (q/ellipse x y 100 100)
      ))
  )
