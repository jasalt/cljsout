;; Level descriptions, parser and utilities
(ns breakout.levels
  (:require [breakout.utils :refer [log]])
  )

(def levels
  [;;1
   "
--------
--------
 ------"
   ;;2
   "
 ------
--------
  ----"
   ;;3
   "
 ------
---  ---
  ----"
   ])

(defn- parse-level-str [level-str]
  (let [clean-str (rest level-str)]
    (loop [[c & rest] clean-str
           level []
           row []]
      (if rest
        (condp = c
          \-       (recur rest level (conj row true))
          \space   (recur rest level (conj row nil))
          \newline (recur rest (conj level row) [])
          )
        (conj level (conj row true))))))

(def brick-y-offset 35)
(def brick-x-offset 35)

(defn- parse-level [brick-vec]
  "Transform brick-vec into vector of brick top-left bottom-right coordinates."
  (->> (map-indexed
        (fn [idy row]
          (map-indexed
           (fn [idx brick]
             (when brick
               [(* (inc idx) brick-x-offset) (* (+ 3 idy) brick-y-offset)])
             ) row)
          ) brick-vec)
       (apply concat) ;; Concatenate bricks from different rows.
       (filter identity) ;; Remove nil bricks
       ))

(defn get-level [num]
  "Return level by number."
  {:pre [(number? num)]}
  (-> (nth levels (dec num))
      parse-level-str
      parse-level))
