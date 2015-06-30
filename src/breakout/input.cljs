(ns breakout.input
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [put! chan <!]]
   [goog.dom :as dom]
   [goog.events :as events]
   [breakout.utils :refer [log]]

   ))

(defonce input-state (atom {:stopped nil}))

(defn listen [el type]
  "Listen to dom element events and put them into channel."
  (let [out (chan)]
    (events/listen el type
                   (fn [e] (put! out e)))
    out))

(defn set-pause-listener []
  "Set listener for ui button."
  (let [input-chan (listen (dom/getElement "uiBtn") "click")]
    (log "Add input chan")
    (log input-chan)
    (go (while true
          (let [event (<! input-chan)]
            (log event)
            (if (@input-state :stopped)
              (do (breakout.core/continue-loop)
                  (swap! input-state assoc :stopped nil)
                  (log @input-state)
                  )
              (do (breakout.core/stop-loop)
                  (swap! input-state assoc :stopped true)
                  (log @input-state)
                  ))))
        )
    )
  )
