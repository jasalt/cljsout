(ns breakout.logic
  (:require [breakout.utils :refer [log]])
  )
(defonce debug-state (atom {}))
(defn update-state [state]
  (log state)
  (reset! debug-state state)
  ;;(update-in state [:angle] #(+ (:angle state) 0.1))
  (assoc state :angle (+ (:angle state) 0.1))
  )
