// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('breakout.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__38385__delegate = function (x){
if(cljs.core.truth_(breakout.core.on_js_reload)){
return cljs.core.apply.call(null,breakout.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'breakout.core/on-js-reload' is missing");
}
};
var G__38385 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__38388__i = 0, G__38388__a = new Array(arguments.length -  0);
while (G__38388__i < G__38388__a.length) {G__38388__a[G__38388__i] = arguments[G__38388__i + 0]; ++G__38388__i;}
  x = new cljs.core.IndexedSeq(G__38388__a,0);
} 
return G__38385__delegate.call(this,x);};
G__38385.cljs$lang$maxFixedArity = 0;
G__38385.cljs$lang$applyTo = (function (arglist__38391){
var x = cljs.core.seq(arglist__38391);
return G__38385__delegate(x);
});
G__38385.cljs$core$IFn$_invoke$arity$variadic = G__38385__delegate;
return G__38385;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1446755808482