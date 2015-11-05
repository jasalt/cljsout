;; Initialize game
(ns ^:figwheel-always breakout.core
    (:require
     [clojure.set :as set]
     [monet.canvas :as canvas]
     [reagi.core :as r]
     [weasel.repl :as repl]
     
     ;;TODO cleanup and order properly
     
     [breakout.utils :refer [log]]
     [breakout.entities :as entities]
     [breakout.levels :refer [get-level]]
     ))

(enable-console-print!) ;; Route prints to console

(repl/connect "ws://localhost:9001" :print :console)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Setup game area and entities

(defonce preferences {:pad {:width 30 :height 15}
                      :ball {:size 3}})

(defonce canvas-dom (.getElementById js/document "game"))
(defonce game-canvas (canvas/init canvas-dom "2d"))

;; Initial values for game entities
(def pad (atom {:x (/ (.-width (:canvas game-canvas)) 2)
                :y (- (.-height (:canvas game-canvas)) 20)
                :w 50 :h 3
                }))

(def ball (atom {:x (/ (.-width (:canvas game-canvas)) 3)
                 :y (/ (.-height (:canvas game-canvas)) 3)
                 :w 3 :h 3
                 :angle (* Math/PI 1.6)}))

(def pad-entity (entities/pad-entity pad))
(def ball-entity (entities/ball-entity game-canvas ball pad))

;; Brick id's are stored as ::breakout.game/brick descendants

(defn add-brick! [canvas x y]
  (let [entity-key (gensym :brick)
        brick (entities/make-brick-entity canvas
                                          entity-key
                                          {:x x :y y})]
    (derive entity-key ::brick)
    (canvas/add-entity game-canvas entity-key brick)
    ))

(defn build-level [level-number]
  (let [bricks (get-level level-number)]
    (doseq [[pos-x pos-y] bricks]
      (add-brick! game-canvas pos-x pos-y)
      )
    ))

(defn remove-brick! [brick-key]
  (canvas/remove-entity game-canvas brick-key)
  (underive brick-key ::breakout.game/brick)

  ;; Change level 
  (when-not (descendants ::brick)
    (build-level 2) ;; TODO
    ))

(defn get-bricks []
  "Return all active bricks."
  (when-let [brick-keys (descendants ::breakout.game/brick)]
    (map #(vector % ((aget (game-canvas :entities) (str %)) :value))
         brick-keys))
  )

;;;;(add-brick! game-canvas (* 35 pos-x) (* 25 pos-y))
;;(build-level 1)

;;;;;;;;;;;;;;;;;;;; Initialize and control game loop

(defn init! []
  (build-level 1)
  (canvas/add-entity game-canvas :ball-entity ball-entity)
  (canvas/add-entity game-canvas :pad-entity pad-entity)
  ;; (breakout.hud/startup-title-animation)
  )

(defn start! []
  (canvas/draw-loop game-canvas))

(defn pause! []
  (if @(:updating? game-canvas)
    (canvas/stop-updating game-canvas)
    (canvas/start-updating game-canvas)))

;;(pause!)

(defn on-js-reload []
  ;; optionally touch your game-state to force rerendering depending on
  ;; your application
  ;; (swap! game-state update-in [:__figwheel_counter] inc)
  )

(set! (.-onload js/window) init!)
