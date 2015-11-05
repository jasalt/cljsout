// Compiled by ClojureScript 1.7.145 {}
goog.provide('monet.geometry');
goog.require('cljs.core');
monet.geometry.distance = (function monet$geometry$distance(origin,target){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(target) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(origin));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(target) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(origin));
var dir_x = ((cljs.core._EQ_.call(null,(0),dx))?dx:(dx / Math.abs(dx)));
var dir_y = ((cljs.core._EQ_.call(null,(0),dy))?dy:(dy / Math.abs(dy)));
var dist = Math.sqrt((Math.pow(dx,(2)) + Math.pow(dy,(2))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"delta","delta",108939957),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),dx,new cljs.core.Keyword(null,"y","y",-1757859776),dy], null),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),dir_x,new cljs.core.Keyword(null,"y","y",-1757859776),dir_y], null),new cljs.core.Keyword(null,"dist","dist",-1401837144),dist], null);
});
monet.geometry.bottom_right = (function monet$geometry$bottom_right(p__29072){
var map__29075 = p__29072;
var map__29075__$1 = ((((!((map__29075 == null)))?((((map__29075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29075):map__29075);
var x = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var r = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_(r)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + r),new cljs.core.Keyword(null,"y","y",-1757859776),(y + r)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + w),new cljs.core.Keyword(null,"y","y",-1757859776),(y + h)], null);
}
});
monet.geometry.top_left = (function monet$geometry$top_left(p__29077){
var map__29080 = p__29077;
var map__29080__$1 = ((((!((map__29080 == null)))?((((map__29080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29080):map__29080);
var x = cljs.core.get.call(null,map__29080__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__29080__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__29080__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_(r)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - r),new cljs.core.Keyword(null,"y","y",-1757859776),(y - r)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
}
});
monet.geometry.in_radius_QMARK_ = (function monet$geometry$in_radius_QMARK_(origin,obj,radius){
var map__29084 = monet.geometry.distance.call(null,origin,obj);
var map__29084__$1 = ((((!((map__29084 == null)))?((((map__29084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29084):map__29084);
var dist = cljs.core.get.call(null,map__29084__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
return (dist < radius);
});
monet.geometry.collision_QMARK_ = (function monet$geometry$collision_QMARK_(obj,obj2){
var br = monet.geometry.bottom_right.call(null,obj);
var tl = monet.geometry.top_left.call(null,obj);
var br2 = monet.geometry.bottom_right.call(null,obj2);
var tl2 = monet.geometry.top_left.call(null,obj2);
return (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tl) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(br2))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tl2) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(br)))) && (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tl) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(br2))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tl2) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(br))));
});
monet.geometry.contained_QMARK_ = (function monet$geometry$contained_QMARK_(container,obj){
var cbr = monet.geometry.bottom_right.call(null,container);
var ctl = monet.geometry.top_left.call(null,container);
var br = monet.geometry.bottom_right.call(null,obj);
var tl = monet.geometry.top_left.call(null,obj);
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ctl) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tl))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ctl) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tl)))) && (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cbr) > new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(br))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cbr) > new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(br))));
});
monet.geometry.in_bounds_QMARK_ = (function monet$geometry$in_bounds_QMARK_(obj,x2,y2){
var br = monet.geometry.bottom_right.call(null,obj);
var tl = monet.geometry.top_left.call(null,obj);
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tl) < x2)) && ((x2 < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(br)))) && (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tl) < y2)) && ((y2 < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(br))));
});

//# sourceMappingURL=geometry.js.map?rel=1446755791289