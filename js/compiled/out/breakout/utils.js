// Compiled by ClojureScript 1.7.145 {}
goog.provide('breakout.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
breakout.utils.game_canvas = (function breakout$utils$game_canvas(){
return cljs.core.identity.call(null,breakout.game.game_canvas);
});
breakout.utils.log = (function breakout$utils$log(msg){
return console.log(cljs.pprint.pprint.call(null,msg));
});
/**
 * Convert float to str rounded to n decimals (default 1).
 */
breakout.utils.str_float = (function breakout$utils$str_float(var_args){
var args28153 = [];
var len__17416__auto___28156 = arguments.length;
var i__17417__auto___28157 = (0);
while(true){
if((i__17417__auto___28157 < len__17416__auto___28156)){
args28153.push((arguments[i__17417__auto___28157]));

var G__28158 = (i__17417__auto___28157 + (1));
i__17417__auto___28157 = G__28158;
continue;
} else {
}
break;
}

var G__28155 = args28153.length;
switch (G__28155) {
case 2:
return breakout.utils.str_float.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return breakout.utils.str_float.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28153.length)].join('')));

}
});

breakout.utils.str_float.cljs$core$IFn$_invoke$arity$2 = (function (x,n){
if(cljs.core.truth_(x)){
return goog.string.format([cljs.core.str("%."),cljs.core.str(n),cljs.core.str("f")].join(''),x);
} else {
return null;
}
});

breakout.utils.str_float.cljs$core$IFn$_invoke$arity$1 = (function (x){
return breakout.utils.str_float.call(null,x,(1));
});

breakout.utils.str_float.cljs$lang$maxFixedArity = 2;
breakout.utils.get_window_size = (function breakout$utils$get_window_size(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null);
});
breakout.utils.get_canvas_size = (function breakout$utils$get_canvas_size(){
var canvas = breakout.utils.game_canvas.call(null).call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);
});
breakout.utils.scale_value = (function breakout$utils$scale_value(x,p__28160,p__28161){
var vec__28164 = p__28160;
var x_min = cljs.core.nth.call(null,vec__28164,(0),null);
var x_max = cljs.core.nth.call(null,vec__28164,(1),null);
var vec__28165 = p__28161;
var to_min = cljs.core.nth.call(null,vec__28165,(0),null);
var to_max = cljs.core.nth.call(null,vec__28165,(1),null);

var portion = (Math.abs((x - x_min)) / (x_max - x_min));
return (to_min + (portion * (to_max - to_min)));
});
breakout.utils.timeout = (function breakout$utils$timeout(ms){
var c = cljs.core.async.chan.call(null);
setTimeout(((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
,ms);

return c;
});
breakout.utils.rand_char = (function breakout$utils$rand_char(){

return cljs.core.char$.call(null,((33) + cljs.core.rand_int.call(null,(57))));
});

//# sourceMappingURL=utils.js.map?rel=1446755789967