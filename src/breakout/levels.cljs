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

(defn get-level [num]
  "Return level by number."
  {:pre [(number? num)]}
  (parse-level (nth levels (dec num))))


