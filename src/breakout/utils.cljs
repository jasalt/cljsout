(ns breakout.utils
  (:require [cljs.pprint :refer [pprint]])
  )

(defn log [msg]
  (.log js/console (pprint msg))
  )

(defn get-window-size []
  [(.-innerWidth js/window) (.-innerHeight js/window)])

;;TODO
;; (defn calc-bricks [bricks]
;;   "Return vector of all brick (top-left corner) locations."
;;   (let [level [[true true true true true true]
;;                [true true true nil nil true true true]
;;                [nil nil true true true]]]
;;     (loop [row level x-offset 0]
;;       )
;;     )
;;   )
