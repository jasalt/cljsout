;; Utility functions
(ns breakout.utils
  (:require [cljs.pprint :refer [pprint]]
            [goog.string :as gstring]
            [goog.string.format]
            [cljs.core.async :refer [chan close!]]
            )
  (:require-macros
   [cljs.core.async.macros :as m :refer [go]])
  )

;; Avoid circular dependency of require
(def game-canvas #(identity breakout.game.game-canvas))

(defn log [msg]
  (.log js/console (pprint msg))
  )

(defn str-float
  "Convert float to str rounded to n decimals (default 1)."
  ([x n]
   (if x (gstring/format (str "%."n"f") x)))
  ([x] (str-float x 1))
  )

(defn get-window-size []
  [(.-innerWidth js/window) (.-innerHeight js/window)])

(defn get-canvas-size []
  (let [canvas ((game-canvas) :canvas)]
    [(.-width canvas) (.-height canvas)]
    ))

(defn scale-value [x [x-min x-max] [to-min to-max]]
  "Scale given value thats between x-min and x-max to range to-min to-max.
   TODO bug-ridden"
  (let [portion (/ (.abs js/Math (- x x-min)) (- x-max x-min))]
    (+ to-min (* portion (- to-max to-min)))))

(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))

(defn rand-char []
  "Get random ascii character from range 33 - 90"
  (char (+ 33 (rand-int 57))))
