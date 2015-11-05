// Compiled by ClojureScript 1.7.145 {}
goog.provide('breakout.input');
goog.require('cljs.core');
goog.require('reagi.core');
goog.require('monet.canvas');
goog.require('goog.events');
goog.require('breakout.utils');
goog.require('breakout.update');
breakout.input.pause_BANG_ = (function breakout$input$pause_BANG_(){
return breakout.core.pause_BANG_.call(null);
});
breakout.input.UP = (38);
breakout.input.RIGHT = (39);
breakout.input.LEFT = (37);
breakout.input.SPACE = (32);
breakout.input.PAUSE = (80);
breakout.input.keydown_stream = (function breakout$input$keydown_stream(){
var out = reagi.core.events.call(null);
document.onkeydown = ((function (out){
return (function (p1__28193_SHARP_){
return reagi.core.deliver.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breakout.input","down","breakout.input/down",1765857719),p1__28193_SHARP_.keyCode], null));
});})(out))
;

return out;
});
breakout.input.keyup_stream = (function breakout$input$keyup_stream(){
var out = reagi.core.events.call(null);
document.onkeyup = ((function (out){
return (function (p1__28194_SHARP_){
return reagi.core.deliver.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breakout.input","up","breakout.input/up",1138318866),p1__28194_SHARP_.keyCode], null));
});})(out))
;

return out;
});
breakout.input.active_keys_stream = reagi.core.sample.call(null,(25),reagi.core.reduce.call(null,(function (acc,p__28195){
var vec__28196 = p__28195;
var event_type = cljs.core.nth.call(null,vec__28196,(0),null);
var key_code = cljs.core.nth.call(null,vec__28196,(1),null);
var pred__28197 = cljs.core._EQ_;
var expr__28198 = event_type;
if(cljs.core.truth_(pred__28197.call(null,new cljs.core.Keyword("breakout.input","down","breakout.input/down",1765857719),expr__28198))){
return cljs.core.conj.call(null,acc,key_code);
} else {
if(cljs.core.truth_(pred__28197.call(null,new cljs.core.Keyword("breakout.input","up","breakout.input/up",1138318866),expr__28198))){
return cljs.core.disj.call(null,acc,key_code);
} else {
return acc;
}
}
}),cljs.core.PersistentHashSet.EMPTY,reagi.core.merge.call(null,breakout.input.keydown_stream.call(null),breakout.input.keyup_stream.call(null))));
reagi.core.map.call(null,(function (){
return breakout.input.pause_BANG_.call(null);
}),reagi.core.throttle.call(null,(100),reagi.core.filter.call(null,cljs.core.partial.call(null,cljs.core.some,cljs.core.PersistentHashSet.fromArray([breakout.input.PAUSE,breakout.input.SPACE], true)),breakout.input.active_keys_stream)));
if(typeof breakout.input.mouse_move_stream !== 'undefined'){
} else {
breakout.input.mouse_move_stream = reagi.core.events.call(null);
}
breakout.input.start_mouse_listener = (function breakout$input$start_mouse_listener(){
cljs.core.println.call(null,"Starting mouse listener");

var game_canvas = document.getElementById("game");
return game_canvas.onmousemove = ((function (game_canvas){
return (function (p1__28200_SHARP_){
return reagi.core.deliver.call(null,breakout.input.mouse_move_stream,p1__28200_SHARP_.clientX);
});})(game_canvas))
;
});
breakout.input.stop_mouse_listener = (function breakout$input$stop_mouse_listener(){
cljs.core.println.call(null,"Stopping mouse listener");

var game_canvas = document.getElementById("game");
return game_canvas.onmousemove = null;
});
breakout.input.mouse_x_offset = (Math.ceil(document.getElementById("game").getBoundingClientRect().left) - (1));
breakout.input.mouse_position_stream = reagi.core.map.call(null,(function (p1__28201_SHARP_){
return (p1__28201_SHARP_ - breakout.input.mouse_x_offset);
}),reagi.core.uniq.call(null,breakout.input.mouse_move_stream));
if(typeof breakout.input.orientation_change_stream !== 'undefined'){
} else {
breakout.input.orientation_change_stream = reagi.core.events.call(null);
}
breakout.input.read_orientation_event = (function breakout$input$read_orientation_event(e){

return reagi.core.deliver.call(null,breakout.input.orientation_change_stream,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gamma","gamma",1883969687),e.gamma,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),e.alpha,new cljs.core.Keyword(null,"beta","beta",455605892),e.beta], null));
});
breakout.input.start_orientation_listener = (function breakout$input$start_orientation_listener(){
cljs.core.println.call(null,"Starting orientation listener");

return window.addEventListener("deviceorientation",breakout.input.read_orientation_event,false);
});
breakout.input.stop_orientation_listener = (function breakout$input$stop_orientation_listener(){
cljs.core.println.call(null,"Stopping orientation listener");

return window.removeEventListener("deviceorientation",breakout.input.read_orientation_event,false);
});
if(typeof breakout.input.orientation_stream !== 'undefined'){
} else {
breakout.input.orientation_stream = reagi.core.map.call(null,(function (p1__28202_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"scaled","scaled",-1947949285),new cljs.core.Keyword(null,"unscaled","unscaled",-796967341)],[Math.floor(breakout.utils.scale_value.call(null,p1__28202_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-30),(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(300)], null))),breakout.utils.str_float.call(null,p1__28202_SHARP_,(2))]);
}),reagi.core.uniq.call(null,reagi.core.map.call(null,new cljs.core.Keyword(null,"gamma","gamma",1883969687),breakout.input.orientation_change_stream)));
}
if(typeof breakout.input.pad_position_stream !== 'undefined'){
} else {
breakout.input.pad_position_stream = reagi.core.map.call(null,(function (p1__28203_SHARP_){
return breakout.update.move_to_BANG_.call(null,p1__28203_SHARP_);
}),reagi.core.merge.call(null,breakout.input.mouse_position_stream,reagi.core.map.call(null,new cljs.core.Keyword(null,"scaled","scaled",-1947949285),breakout.input.orientation_stream)));
}
breakout.input.initial_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),false,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425),(function (new_state){
if(cljs.core.truth_(new_state)){
return breakout.input.start_mouse_listener.call(null);
} else {
return breakout.input.stop_mouse_listener.call(null);
}
})], null),new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),false,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425),(function (new_state){
if(cljs.core.truth_(new_state)){
return breakout.input.start_orientation_listener.call(null);
} else {
return breakout.input.stop_orientation_listener.call(null);
}
})], null)], null),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"running","running",1554969103),true], null)], null);
if(typeof breakout.input.config !== 'undefined'){
} else {
breakout.input.config = cljs.core.atom.call(null,breakout.input.initial_config);
}
breakout.input.default_inputs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972)], null);
breakout.input.set_config = (function breakout$input$set_config(var_args){
var args__17423__auto__ = [];
var len__17416__auto___28206 = arguments.length;
var i__17417__auto___28207 = (0);
while(true){
if((i__17417__auto___28207 < len__17416__auto___28206)){
args__17423__auto__.push((arguments[i__17417__auto___28207]));

var G__28208 = (i__17417__auto___28207 + (1));
i__17417__auto___28207 = G__28208;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return breakout.input.set_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

breakout.input.set_config.cljs$core$IFn$_invoke$arity$variadic = (function (new_state,path){

var path_vec = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,path);
return cljs.core.swap_BANG_.call(null,breakout.input.config,cljs.core.assoc_in,path_vec,new_state);
});

breakout.input.set_config.cljs$lang$maxFixedArity = (1);

breakout.input.set_config.cljs$lang$applyTo = (function (seq28204){
var G__28205 = cljs.core.first.call(null,seq28204);
var seq28204__$1 = cljs.core.next.call(null,seq28204);
return breakout.input.set_config.cljs$core$IFn$_invoke$arity$variadic(G__28205,seq28204__$1);
});
breakout.input.set_input = (function breakout$input$set_input(input_type,new_state){

var toggle_fn = new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425).cljs$core$IFn$_invoke$arity$1(input_type.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,breakout.input.config))));
breakout.input.set_config.call(null,new_state,new cljs.core.Keyword(null,"input","input",556931961),input_type,new cljs.core.Keyword(null,"active","active",1895962068));

return toggle_fn.call(null,new_state);
});
breakout.input.set_initial_inputs_BANG_ = (function breakout$input$set_initial_inputs_BANG_(){
var seq__28213 = cljs.core.seq.call(null,breakout.input.default_inputs);
var chunk__28214 = null;
var count__28215 = (0);
var i__28216 = (0);
while(true){
if((i__28216 < count__28215)){
var input = cljs.core._nth.call(null,chunk__28214,i__28216);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(input.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,breakout.input.config)))))){
breakout.input.set_input.call(null,input,true);
} else {
cljs.core.print.call(null,[cljs.core.str(input),cljs.core.str(" already active, skipping")].join(''));
}

var G__28217 = seq__28213;
var G__28218 = chunk__28214;
var G__28219 = count__28215;
var G__28220 = (i__28216 + (1));
seq__28213 = G__28217;
chunk__28214 = G__28218;
count__28215 = G__28219;
i__28216 = G__28220;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28213);
if(temp__4425__auto__){
var seq__28213__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28213__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__28213__$1);
var G__28221 = cljs.core.chunk_rest.call(null,seq__28213__$1);
var G__28222 = c__17161__auto__;
var G__28223 = cljs.core.count.call(null,c__17161__auto__);
var G__28224 = (0);
seq__28213 = G__28221;
chunk__28214 = G__28222;
count__28215 = G__28223;
i__28216 = G__28224;
continue;
} else {
var input = cljs.core.first.call(null,seq__28213__$1);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(input.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,breakout.input.config)))))){
breakout.input.set_input.call(null,input,true);
} else {
cljs.core.print.call(null,[cljs.core.str(input),cljs.core.str(" already active, skipping")].join(''));
}

var G__28225 = cljs.core.next.call(null,seq__28213__$1);
var G__28226 = null;
var G__28227 = (0);
var G__28228 = (0);
seq__28213 = G__28225;
chunk__28214 = G__28226;
count__28215 = G__28227;
i__28216 = G__28228;
continue;
}
} else {
return null;
}
}
break;
}
});
window.onload = setTimeout(breakout.input.set_initial_inputs_BANG_,(1000));

//# sourceMappingURL=input.js.map?rel=1446755790106