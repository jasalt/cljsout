(ns ^:figwheel-always breakout.core
    (:require
     [cljs.core.async :refer [put! chan <!]]
     [clojure.string :as s]

     [goog.dom :as dom]

     [breakout.utils :refer [log]]
     [breakout.config :refer [window] :as config]
     [breakout.input :as input]

     [breakout.logic :refer [update-state]]
     [breakout.draw :refer [draw-state]]
     ))

(enable-console-print!)

(defn on-js-reload []
  ;; optionally touch your game-state to force rerendering depending on
  ;; your application
  ;; (swap! game-state update-in [:__figwheel_counter] inc)
  )

(defn stop-loop []
  nil
  )
(defn continue-loop []
  nil
  )

(defn setup []
  (input/set-pause-listener)
  config/init-state
  )

