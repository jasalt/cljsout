// Compiled by ClojureScript 1.7.145 {}
goog.provide('breakout.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('breakout.draw');
goog.require('breakout.update');
goog.require('breakout.levels');
goog.require('weasel.repl');
goog.require('breakout.hud');
goog.require('reagi.core');
goog.require('breakout.utils');
goog.require('monet.canvas');
cljs.core.enable_console_print_BANG_.call(null);
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"console","console",1228072057));
if(typeof breakout.core.dimensions !== 'undefined'){
} else {
breakout.core.dimensions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pad","pad",-36734541),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(4)], null),new cljs.core.Keyword(null,"ball","ball",542859139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)], null);
}
if(typeof breakout.core.canvas_dom !== 'undefined'){
} else {
breakout.core.canvas_dom = document.getElementById("game");
}
if(typeof breakout.core.game_canvas !== 'undefined'){
} else {
breakout.core.game_canvas = monet.canvas.init.call(null,breakout.core.canvas_dom,"2d");
}
breakout.core.make_pad_entity = (function breakout$core$make_pad_entity(pad){
return monet.canvas.entity.call(null,cljs.core.deref.call(null,pad),(function (old_state){
var new_state = cljs.core.assoc.call(null,old_state,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.deref.call(null,pad).call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
breakout.hud.tell_hud.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pad","pad",-36734541),new_state.call(null,new cljs.core.Keyword(null,"x","x",2099068185))], null));

return new_state;
}),breakout.draw.pad);
});
breakout.core.make_ball_entity = (function breakout$core$make_ball_entity(monet_canvas,ball,pad){
return monet.canvas.entity.call(null,cljs.core.deref.call(null,ball),(function (old_state){
var new_state = breakout.update.ball.call(null,old_state,monet_canvas,ball,pad);
breakout.hud.tell_hud.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ball","ball",542859139),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),breakout.utils.str_float.call(null,new_state.call(null,new cljs.core.Keyword(null,"x","x",2099068185))),new cljs.core.Keyword(null,"y","y",-1757859776),breakout.utils.str_float.call(null,new_state.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Keyword(null,"a","a",-2123407586),breakout.utils.str_float.call(null,new_state.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254)))], null)], null));

return new_state;
}),breakout.draw.ball);
});
breakout.core.make_brick_entity = (function breakout$core$make_brick_entity(canvas,entity_key,p__38903){
var map__38906 = p__38903;
var map__38906__$1 = ((((!((map__38906 == null)))?((((map__38906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38906):map__38906);
var pos_x = cljs.core.get.call(null,map__38906__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var pos_y = cljs.core.get.call(null,map__38906__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return monet.canvas.entity.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),pos_x,new cljs.core.Keyword(null,"y","y",-1757859776),pos_y,new cljs.core.Keyword(null,"w","w",354169001),(30),new cljs.core.Keyword(null,"h","h",1109658740),(10)], null),null,breakout.draw.brick);
});
breakout.core.pad = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(breakout.core.game_canvas).width / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(breakout.core.game_canvas).height - (20)),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pad","pad",-36734541).cljs$core$IFn$_invoke$arity$1(breakout.core.dimensions)),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pad","pad",-36734541).cljs$core$IFn$_invoke$arity$1(breakout.core.dimensions))], null));
breakout.core.ball = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(breakout.core.game_canvas).width / (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(breakout.core.game_canvas).height / (3)),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ball","ball",542859139).cljs$core$IFn$_invoke$arity$1(breakout.core.dimensions)),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ball","ball",542859139).cljs$core$IFn$_invoke$arity$1(breakout.core.dimensions)),new cljs.core.Keyword(null,"angle","angle",1622094254),(Math.PI * 1.6)], null));
breakout.core.pad_entity = breakout.core.make_pad_entity.call(null,breakout.core.pad);
breakout.core.ball_entity = breakout.core.make_ball_entity.call(null,breakout.core.game_canvas,breakout.core.ball,breakout.core.pad);
breakout.core.add_brick_BANG_ = (function breakout$core$add_brick_BANG_(canvas,x,y){
var entity_key = cljs.core.gensym.call(null,new cljs.core.Keyword(null,"brick","brick",895065736));
var brick = breakout.core.make_brick_entity.call(null,canvas,entity_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
cljs.core.derive.call(null,entity_key,new cljs.core.Keyword("breakout.core","brick","breakout.core/brick",-1997858234));

return monet.canvas.add_entity.call(null,breakout.core.game_canvas,entity_key,brick);
});
breakout.core.build_level = (function breakout$core$build_level(level_number){
var bricks = breakout.levels.get_level.call(null,level_number);
var seq__38914 = cljs.core.seq.call(null,bricks);
var chunk__38915 = null;
var count__38916 = (0);
var i__38917 = (0);
while(true){
if((i__38917 < count__38916)){
var vec__38918 = cljs.core._nth.call(null,chunk__38915,i__38917);
var pos_x = cljs.core.nth.call(null,vec__38918,(0),null);
var pos_y = cljs.core.nth.call(null,vec__38918,(1),null);
breakout.core.add_brick_BANG_.call(null,breakout.core.game_canvas,pos_x,pos_y);

var G__38920 = seq__38914;
var G__38921 = chunk__38915;
var G__38922 = count__38916;
var G__38923 = (i__38917 + (1));
seq__38914 = G__38920;
chunk__38915 = G__38921;
count__38916 = G__38922;
i__38917 = G__38923;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38914);
if(temp__4425__auto__){
var seq__38914__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38914__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__38914__$1);
var G__38924 = cljs.core.chunk_rest.call(null,seq__38914__$1);
var G__38925 = c__17161__auto__;
var G__38926 = cljs.core.count.call(null,c__17161__auto__);
var G__38927 = (0);
seq__38914 = G__38924;
chunk__38915 = G__38925;
count__38916 = G__38926;
i__38917 = G__38927;
continue;
} else {
var vec__38919 = cljs.core.first.call(null,seq__38914__$1);
var pos_x = cljs.core.nth.call(null,vec__38919,(0),null);
var pos_y = cljs.core.nth.call(null,vec__38919,(1),null);
breakout.core.add_brick_BANG_.call(null,breakout.core.game_canvas,pos_x,pos_y);

var G__38928 = cljs.core.next.call(null,seq__38914__$1);
var G__38929 = null;
var G__38930 = (0);
var G__38931 = (0);
seq__38914 = G__38928;
chunk__38915 = G__38929;
count__38916 = G__38930;
i__38917 = G__38931;
continue;
}
} else {
return null;
}
}
break;
}
});
breakout.core.get_bricks = (function breakout$core$get_bricks(){

var temp__4425__auto__ = cljs.core.descendants.call(null,new cljs.core.Keyword("breakout.core","brick","breakout.core/brick",-1997858234));
if(cljs.core.truth_(temp__4425__auto__)){
var brick_keys = temp__4425__auto__;
return cljs.core.map.call(null,((function (brick_keys,temp__4425__auto__){
return (function (p1__38932_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__38932_SHARP_,(breakout.core.game_canvas.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403))[[cljs.core.str(p1__38932_SHARP_)].join('')]).call(null,new cljs.core.Keyword(null,"value","value",305978217))],null));
});})(brick_keys,temp__4425__auto__))
,brick_keys);
} else {
return null;
}
});
breakout.core.init_BANG_ = (function breakout$core$init_BANG_(){
breakout.core.build_level.call(null,(2));

monet.canvas.add_entity.call(null,breakout.core.game_canvas,new cljs.core.Keyword(null,"ball-entity","ball-entity",721681538),breakout.core.ball_entity);

return monet.canvas.add_entity.call(null,breakout.core.game_canvas,new cljs.core.Keyword(null,"pad-entity","pad-entity",-527470329),breakout.core.pad_entity);
});
breakout.core.start_BANG_ = (function breakout$core$start_BANG_(){
return monet.canvas.draw_loop.call(null,breakout.core.game_canvas);
});
breakout.core.pause_BANG_ = (function breakout$core$pause_BANG_(){
if(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(breakout.core.game_canvas)))){
return monet.canvas.stop_updating.call(null,breakout.core.game_canvas);
} else {
return monet.canvas.start_updating.call(null,breakout.core.game_canvas);
}
});
breakout.core.on_js_reload = (function breakout$core$on_js_reload(){
return null;
});
window.onload = breakout.core.init_BANG_;

//# sourceMappingURL=core.js.map?rel=1446756728511