(ns breakout.levels)

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

(defn- parse-level [level-str]
  (loop [[c & rest] (clojure.string/trim level-str)
         level []
         row []]
    (if rest
      (condp = c
        \newline (recur rest (conj level row) [])
        \-       (recur rest level (conj row true))
        \space   (recur rest level (conj row nil))
        )
      (conj level row))))

(defn get-level [num]
  "Return level by number."
  {:pre [(number? num)]}
  (parse-level (nth levels (+ num 1)))
  )
