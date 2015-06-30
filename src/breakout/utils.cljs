(ns breakout.utils
  (:require [cljs.pprint :refer [pprint]])
  )

(defn log [msg]
  (.log js/console (pprint msg))
  )

(defn get-window-size []
  [(.-innerWidth js/window) (.-innerHeight js/window)])
    


