(ns ^:figwheel-always breakout.core
    (:require
     [cljs.core.async :refer [put! chan <!]]
     [clojure.string :as s]

     [goog.dom :as dom]

     [breakout.utils :refer [log]]
     [monet.canvas :as canvas]
     [clojure.set :as set]
     [breakout.entities :as entities
      :refer [move-forward! rotate-left! ;; move-backward!
              rotate-right! add-ball!]
      ]
     ;;[breakout.config :refer [window] :as config]
     ;;[breakout.input :as input]

     ;;[breakout.logic :refer [update-state]]
     ;;[breakout.draw :refer [draw-state]]
     ))

(enable-console-print!)

(def canvas-dom (.getElementById js/document "game"))
(def game-canvas (canvas/init canvas-dom "2d"))
;; (def ctx-dom (.getCtx canvas-dom))
(def pad (entities/shape-data
          (/ (.-width (:canvas game-canvas)) 2)
          (/ (.-height (:canvas game-canvas)) 2)
          100
          ))

(def pad-entity (entities/pad-entity pad))

(canvas/add-entity game-canvas :pad-entity pad-entity)
(canvas/draw-loop game-canvas)


(defn on-js-reload []
  ;; optionally touch your game-state to force rerendering depending on
  ;; your application
  ;; (swap! game-state update-in [:__figwheel_counter] inc)
  )
