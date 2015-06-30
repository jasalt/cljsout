(ns breakout.tests
  (:require-macros
   [cemerick.cljs.test :refer (is deftest with-test run-tests
                                  testing test-var)])
  (:require [cemerick.cljs.test :as t]
            [breakout.core :as core]
            [breakout.levels :as levels]
            [breakout.draw :as draw]
            ))

(deftest levels-get-level
  (is (= (levels/get-level 1) [[true true true true true true true true]
                               [true true true true true true true true]
                               [nil  true true true true true true]])
      "First level parses correctly")
  (is (= (levels/get-level 2) [[nil  true true true true true true]
                               [true true true true true true true true]
                               [nil  nil  true true true true]])
      "Second level parses correctly")
  (is (= (levels/get-level 3) [[nil  true true true true true true]
                               [true true true nil  nil  true true true]
                               [nil  nil  true true true true]])
      "Third level parses correctly"))

;; "TODO Proper output should be tested as well with handled side effects.."
(deftest draw-to-pixel-position
  (testing "that some bad inputs throw an exception"
    (is (thrown? js/Error (draw/to-pixel-position [1 1 1])))
    (is (thrown? js/Error (draw/to-pixel-position 1 2 3)))
    (is (thrown? js/Error (draw/to-pixel-position 1 1.1)))
    (is (thrown? js/Error (draw/to-pixel-position 1.1 1)))))
