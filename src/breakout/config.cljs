(ns breakout.config
  (:require [breakout.levels :refer [get-level]]))

(defonce window {:game-width 100
                 :game-height 160
                 :padding 2 ;; on all sides
                 :menu-height 8 ;; on bottom
                 :frame-rate 15
                 :scale-factor 3 ;; TODO calculate with utils/get-window-size
                 })

(def init-state
  {:angle 0
   :level (get-level 1)
   :ball {:x 0.5, :y 0.5, :vx 0, :vy 0, :slow false}
   :paddle 0.5
   }
  )

(def game {:ball-size 2})

