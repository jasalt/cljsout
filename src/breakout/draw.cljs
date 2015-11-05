;; Draw functions for game entities
(ns breakout.draw
  (:require
   [monet.canvas :as canvas]
   [clojure.string :as s]
   [breakout.utils :refer [log str-float get-canvas-size]]))

(defn brick [ctx {:keys [x y w h]} val]
  (-> ctx
      canvas/save
      (canvas/stroke-style "green")
      (canvas/stroke-width h)
      (canvas/translate x y)
      (canvas/begin-path)
      (canvas/move-to 0 0)
      (canvas/line-to w 0)
      (canvas/stroke)
      canvas/restore))

(defn ball [ctx v]
  (-> ctx
      (canvas/fill-style "blue")
      (canvas/fill-rect (dissoc v :angle))))

(defn pad [ctx {:keys [x y w h]} val]
  (-> ctx
      canvas/save
      (canvas/stroke-style "red")
      (canvas/stroke-width h)
      (canvas/translate x y)
      (canvas/begin-path)
      (canvas/move-to (- (/ w 2)) 0)
      (canvas/line-to (/ w 2) 0)
      (canvas/stroke)
      canvas/restore))
