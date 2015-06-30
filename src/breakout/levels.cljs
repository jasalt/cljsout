(ns breakout.levels
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
  (:require [cemerick.cljs.test :as t])
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

(defn- parse-level [level-str]
  (let [clean-str (clojure.string/trim level-str)]
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

(deftest test-get-level
  (is (= (get-level 1) [[true true true true true true true true]
                        [true true true true true true true true]
                        [nil  true true true true true true]])
      "First level parses correctly")
  (comment(is (= (get-level 2) [[nil  true true true true true true]
                                [true true true true true true true true]
                                [nil  nil  true true true true]])
              "Second level parses correctly")
          (is (= (get-level 3) [[nil  true true true true true true]
                                [true true true nil  nil  true true true]
                                [nil  nil  true true true true]])
              "Third level parses correctly"))
  )
