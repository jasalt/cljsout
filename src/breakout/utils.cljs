(ns breakout.utils)

(defn log [msg]
  (.log js/console "Logging")
  (.log js/console msg)
  )
