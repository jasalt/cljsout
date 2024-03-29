# ClojureScript breakout clone

![cljsout](https://github.com/jasalt/cljsout/assets/2306521/16b3c842-11a0-446b-ae30-04503e79bf27)

2015 learning project on #{functional reactive game} programming. Input from mouse, keyboard and device accelerometer is handled with event streams provided by reagi/coreasync. Game is drawn on 2D canvas with monet library. HUD is drawn on DOM with reagent/react.js. Accelerometer used to work with 2011 Macbook Pro but nowadays works only on mobile devices.

# Try it out
There is a working build in branch `gh-pages`.

```
git clone git@github.com:jasalt/cljsout.git
cd cljsout
git checkout gh-pages
python -m http.server
```
Then open http://localhost:8000/.

# Development & Building

**Does not build anymore** as Reagi library got abandoned around 2014 and depends on older core/async version etc. There is a fork from 2018 that might work https://github.com/chourave/reagi/tree/release-0.11.0 but requires loading it in custom way with Leiningen `project.clj`. Converting this project plus 2018 Reagi fork to more modern `deps.edn` does not seem to be worth it.

1) Clone repo and navigate to project folder
2) run `lein figwheel dev`
3) Open http://localhost:3449 after jvm has warmed up.

# License

GPLv3
 
