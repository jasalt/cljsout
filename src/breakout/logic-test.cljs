(ns breakout.logic-test
  (:require-macros
   [cemerick.cljs.test :refer (is deftest with-test run-tests
                                  testing test-var)])
  (:require [cemerick.cljs.test :as t]
            [breakout.logic :as logic]))

(deftest move-ball
  (testing "ball position calculations"
    (let [old-ball {:x 0.5, :y 0.5, :angle 0, :slow false}
          new-ball (logic/move-ball old-ball)]
      (is (not (= old-ball new-ball)) "ball position should always change")
      
      )
    )
  )
