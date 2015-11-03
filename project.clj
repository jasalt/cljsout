(defproject breakout "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [com.cemerick/clojurescript.test "0.3.3"]
                 [reagi "0.10.1"         ;; FRP library based on core.async
                  :exclusions [[com.cemerick/piggieback] [org.clojure/clojure]]]
                 [rm-hull/monet "0.2.2"] ;; Canvas library
                 [reagent "0.5.1"]       ;; React.js

                 ;; Cider repl setup
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [weasel "0.7.0"]]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :plugins [;; [lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.4.1" :exclusions [org.codehaus.plexus/plexus-utils]]]
  :source-paths ["src"]
  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel { :on-jsload "breakout.core/on-js-reload"
                                   }
                        :compiler {:main breakout.core
                                   :asset-path "js/compiled/out"
                                   :output-to "resources/public/js/compiled/breakout.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}
                       {:id "min"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/compiled/breakout.js"
                                   :main breakout.core
                                   :optimizations :advanced
                                   :pretty-print false}}]}

  :figwheel {:http-server-root "public" ;; default and assumes "resources"
             :server-port 3449 ;; default
             :css-dirs ["resources/public/css"] ;; watch and update CSS
             ;;:repl true
             :nrepl-port 7888
             :open-file-command "ec"
             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"
             })
