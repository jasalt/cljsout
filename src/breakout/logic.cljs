(ns breakout.logic)

(defn update-state [state]
  {:color (mod (+ (:color state) 0.7) 255)
   :angle (+ (:angle state) 0.1)})
