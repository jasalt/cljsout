;; Game entity factories
;; Set initial data and update & draw fn's.
(ns breakout.draw
  (:require
   [monet.canvas :as canvas]
   [clojure.string :as s]

   [breakout.utils :refer [log str-float get-canvas-size]]

   ))

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

      canvas/restore
      ;; (canvas/font-style "8px Arial")
      ;; (canvas/text
      ;;  {:text (str (str-float (:x val) 0)" "
      ;;              (str-float (:y val) 0))
      ;;   :x (+ (:x val) 1) :y (+ (:y val) 8)})
      ))

(defn ball [ctx v]
  (-> ctx
      (canvas/fill-style "blue")
      (canvas/fill-rect (dissoc v :angle))
      ))


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
