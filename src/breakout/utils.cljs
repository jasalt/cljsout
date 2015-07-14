(ns breakout.utils
  (:require [cljs.pprint :refer [pprint]]
            [goog.string :as gstring]
            [goog.string.format])
  )

(defn log [msg]
  (.log js/console (pprint msg))
  )

(defn str-float 
  "Convert float to str rounded to n decimals (default 1)."
  ([x n] (gstring/format (str "%."n"f") x))
  ([x] (str-float x 1))
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
