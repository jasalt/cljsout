(ns breakout.tests
  (:require-macros
   [cemerick.cljs.test :refer (is deftest with-test run-tests
                                  testing test-var)])
  (:require [cemerick.cljs.test :as t]
            [breakout.core :as core]
            [breakout.levels :as levels]
            [breakout.utils :as utils]
            ))

(deftest levels-get-level
  (is (= (levels/parse-level-str (get levels/levels 0)) [[true true true true true true true true]
                                     [true true true true true true true true]
                                     [nil  true true true true true true]])
      "First level parses correctly")
  (is (= (levels/parse-level-str (get levels/levels 1)) [[nil  true true true true true true]
                                     [true true true true true true true true]
                                     [nil  nil  true true true true]])
      "Second level parses correctly")
  (is (= (levels/parse-level-str (get levels/levels 2)) [[nil  true true true true true true]
                                     [true true true nil  nil  true true true]
                                     [nil  nil  true true true true]])
      "Third level parses correctly"))

;; "TODO Proper output should be tested as well with handled side effects.."
;; (deftest draw-->px-pos
;;   (testing "that some bad inputs throw an exception"
;;     (is (thrown? js/Error (draw/->px-pos [1 1 1])))
;;     (is (thrown? js/Error (draw/->px-pos 1 2 3)))
;;     (is (thrown? js/Error (draw/->px-pos 1 1.1)))
;;     (is (thrown? js/Error (draw/->px-pos 1.1 1)))))

;; (deftest move-ball
;;   (testing "ball position calculations"
;;     (let [old-ball {:x 0.5, :y 0.5, :angle 0, :slow false}
;;           new-ball (logic/move-ball old-ball)]
;;       (is (not (= old-ball new-ball)) "ball position should always change")
;;       )
;;     )
;;   )

(deftest scale-value
  (is (= 0.0   (utils/scale-value 20.0 [20.0 30.0] [0 500])))
  (is (= 500.0 (utils/scale-value 30.0 [20.0 30.0] [0 500])))
  )
