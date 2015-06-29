(ns breakout.utils)

(defn log [msg]
  (.log js/console "Logging")
  (.log js/console msg)
  )

(defonce config {:max-width 500
                 :max-height 500})

(defn get-window-size []
  (let [w-width (.-innerWidth js/window)
        w-height (.-innerWidth js/window)
        c-width (config :max-width)
        c-height (config :max-height)
        width (if (< w-width c-width) w-width c-width)
        height (if (< w-height c-height) w-height c-height)]
    (log (str "w " width "h" height))
    [width height])
  )
