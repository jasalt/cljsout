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
