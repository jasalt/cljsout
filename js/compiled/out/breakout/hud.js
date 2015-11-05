// Compiled by ClojureScript 1.7.145 {}
goog.provide('breakout.hud');
goog.require('cljs.core');
goog.require('reagi.core');
goog.require('reagent.core');
goog.require('breakout.input');
goog.require('breakout.utils');
goog.require('cljs.core.async');
if(typeof breakout.hud.hud_state !== 'undefined'){
} else {
breakout.hud.hud_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accelerometer","accelerometer",10662678),"[Waiting for input values]"], null));
}
if(typeof breakout.hud.hud_update_stream !== 'undefined'){
} else {
breakout.hud.hud_update_stream = (function (){var in_stream = reagi.core.events.call(null);
var mouse_stream = reagi.core.map.call(null,((function (in_stream){
return (function (p1__28231_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mouse","mouse",478628972)],[p1__28231_SHARP_]);
});})(in_stream))
,breakout.input.mouse_position_stream);
var orientation_stream = reagi.core.map.call(null,((function (in_stream,mouse_stream){
return (function (p1__28232_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"orientation","orientation",623557579)],[p1__28232_SHARP_]);
});})(in_stream,mouse_stream))
,breakout.input.orientation_stream);
reagi.core.map.call(null,((function (in_stream,mouse_stream,orientation_stream){
return (function (p1__28233_SHARP_){
return cljs.core.reset_BANG_.call(null,breakout.hud.hud_state,p1__28233_SHARP_);
});})(in_stream,mouse_stream,orientation_stream))
,reagi.core.sample.call(null,(50),reagi.core.reduce.call(null,((function (in_stream,mouse_stream,orientation_stream){
return (function (coll,event){
return cljs.core.merge.call(null,coll,event);
});})(in_stream,mouse_stream,orientation_stream))
,reagi.core.merge.call(null,mouse_stream,orientation_stream,in_stream))));

return in_stream;
})();
}
breakout.hud.debug_view = (function breakout$hud$debug_view(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Debug"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Input"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var mouse_state = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,breakout.input.config))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),mouse_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (mouse_state){
return (function (){
return breakout.input.set_input.call(null,new cljs.core.Keyword(null,"mouse","mouse",478628972),cljs.core.not.call(null,mouse_state));
});})(mouse_state))
], null)], null);
})()," Mouse X ",new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,breakout.hud.hud_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var orientation_state = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,breakout.input.config))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),orientation_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (orientation_state){
return (function (){
return breakout.input.set_input.call(null,new cljs.core.Keyword(null,"orientation","orientation",623557579),cljs.core.not.call(null,orientation_state));
});})(orientation_state))
], null)], null);
})()," Orientation ",(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,breakout.hud.hud_state));
if(cljs.core.truth_(temp__4425__auto__)){
var x_val = temp__4425__auto__;
return [cljs.core.str("X "),cljs.core.str(new cljs.core.Keyword(null,"scaled","scaled",-1947949285).cljs$core$IFn$_invoke$arity$1(x_val)),cljs.core.str(" Raw "),cljs.core.str(new cljs.core.Keyword(null,"unscaled","unscaled",-796967341).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,breakout.hud.hud_state))))].join('');
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Entities"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Pad X ",[cljs.core.str(new cljs.core.Keyword(null,"pad","pad",-36734541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,breakout.hud.hud_state)))].join('')], null),(function (){var map__28236 = new cljs.core.Keyword(null,"ball","ball",542859139).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,breakout.hud.hud_state));
var map__28236__$1 = ((((!((map__28236 == null)))?((((map__28236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28236):map__28236);
var x = cljs.core.get.call(null,map__28236__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28236__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var a = cljs.core.get.call(null,map__28236__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Ball ",[cljs.core.str("X "),cljs.core.str(x),cljs.core.str(" Y "),cljs.core.str(y),cljs.core.str(" Angle "),cljs.core.str(a)].join('')], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Brick count ",[cljs.core.str(new cljs.core.Keyword(null,"bricks","bricks",1203539429).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,breakout.hud.hud_state)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Last ",[cljs.core.str(new cljs.core.Keyword(null,"last-brick","last-brick",1191751820).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,breakout.hud.hud_state)))].join('')], null)], null);
});
breakout.hud.tell_hud = (function breakout$hud$tell_hud(msg){

return reagi.core.deliver.call(null,breakout.hud.hud_update_stream,msg);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [breakout.hud.debug_view], null),document.getElementById("hud"));
if(typeof breakout.hud.overlay_text !== 'undefined'){
} else {
breakout.hud.overlay_text = reagent.core.atom.call(null,"");
}
breakout.hud.game_overlay = (function breakout$hud$game_overlay(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.deref.call(null,breakout.hud.overlay_text)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [breakout.hud.game_overlay], null),document.getElementById("gameOverlayText"));
breakout.hud.set_text = (function breakout$hud$set_text(text){
return cljs.core.reset_BANG_.call(null,breakout.hud.overlay_text,text);
});
breakout.hud.startup_title_animation = (function breakout$hud$startup_title_animation(){

var game_name = "BREAKOUT";
breakout.hud.set_text.call(null,"It's");

var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__,game_name){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__,game_name){
return (function (state_28524){
var state_val_28525 = (state_28524[(1)]);
if((state_val_28525 === (7))){
var inst_28456 = (state_28524[(2)]);
var state_28524__$1 = state_28524;
var statearr_28526_28578 = state_28524__$1;
(statearr_28526_28578[(2)] = inst_28456);

(statearr_28526_28578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (20))){
var inst_28510 = (state_28524[(2)]);
var state_28524__$1 = state_28524;
var statearr_28527_28579 = state_28524__$1;
(statearr_28527_28579[(2)] = inst_28510);

(statearr_28527_28579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (27))){
var inst_28521 = (state_28524[(2)]);
var inst_28522 = breakout.hud.set_text.call(null,null);
var state_28524__$1 = (function (){var statearr_28528 = state_28524;
(statearr_28528[(7)] = inst_28521);

return statearr_28528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28524__$1,inst_28522);
} else {
if((state_val_28525 === (1))){
var inst_28411 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28412 = cljs.core.PersistentVector.EMPTY;
var inst_28413 = cljs.core.vec.call(null,game_name);
var inst_28414 = [inst_28412,inst_28413];
var inst_28415 = (new cljs.core.PersistentVector(null,2,(5),inst_28411,inst_28414,null));
var inst_28416 = cljs.core.nth.call(null,inst_28415,(0),null);
var inst_28417 = cljs.core.nth.call(null,inst_28415,(1),null);
var inst_28418 = inst_28415;
var state_28524__$1 = (function (){var statearr_28529 = state_28524;
(statearr_28529[(8)] = inst_28418);

(statearr_28529[(9)] = inst_28417);

(statearr_28529[(10)] = inst_28416);

return statearr_28529;
})();
var statearr_28530_28580 = state_28524__$1;
(statearr_28530_28580[(2)] = null);

(statearr_28530_28580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (24))){
var inst_28498 = (state_28524[(2)]);
var inst_28499 = breakout.hud.set_text.call(null,null);
var inst_28500 = breakout.utils.timeout.call(null,(200));
var state_28524__$1 = (function (){var statearr_28531 = state_28524;
(statearr_28531[(11)] = inst_28499);

(statearr_28531[(12)] = inst_28498);

return statearr_28531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28524__$1,(25),inst_28500);
} else {
if((state_val_28525 === (4))){
var inst_28422 = (state_28524[(13)]);
var inst_28425 = (state_28524[(2)]);
var inst_28426 = cljs.core.empty_QMARK_.call(null,inst_28422);
var state_28524__$1 = (function (){var statearr_28532 = state_28524;
(statearr_28532[(14)] = inst_28425);

return statearr_28532;
})();
if(inst_28426){
var statearr_28533_28581 = state_28524__$1;
(statearr_28533_28581[(1)] = (5));

} else {
var statearr_28534_28582 = state_28524__$1;
(statearr_28534_28582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (15))){
var inst_28512 = (state_28524[(2)]);
var state_28524__$1 = state_28524;
var statearr_28535_28583 = state_28524__$1;
(statearr_28535_28583[(2)] = inst_28512);

(statearr_28535_28583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (21))){
var inst_28486 = (state_28524[(15)]);
var inst_28490 = cljs.core.chunk_first.call(null,inst_28486);
var inst_28491 = cljs.core.chunk_rest.call(null,inst_28486);
var inst_28492 = cljs.core.count.call(null,inst_28490);
var inst_28466 = inst_28491;
var inst_28467 = inst_28490;
var inst_28468 = inst_28492;
var inst_28469 = (0);
var state_28524__$1 = (function (){var statearr_28536 = state_28524;
(statearr_28536[(16)] = inst_28467);

(statearr_28536[(17)] = inst_28469);

(statearr_28536[(18)] = inst_28468);

(statearr_28536[(19)] = inst_28466);

return statearr_28536;
})();
var statearr_28537_28584 = state_28524__$1;
(statearr_28537_28584[(2)] = null);

(statearr_28537_28584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (13))){
var inst_28467 = (state_28524[(16)]);
var inst_28469 = (state_28524[(17)]);
var inst_28474 = cljs.core._nth.call(null,inst_28467,inst_28469);
var inst_28475 = breakout.utils.timeout.call(null,(200));
var state_28524__$1 = (function (){var statearr_28538 = state_28524;
(statearr_28538[(20)] = inst_28474);

return statearr_28538;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28524__$1,(16),inst_28475);
} else {
if((state_val_28525 === (22))){
var inst_28486 = (state_28524[(15)]);
var inst_28495 = cljs.core.first.call(null,inst_28486);
var inst_28496 = breakout.utils.timeout.call(null,(200));
var state_28524__$1 = (function (){var statearr_28539 = state_28524;
(statearr_28539[(21)] = inst_28495);

return statearr_28539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28524__$1,(24),inst_28496);
} else {
if((state_val_28525 === (6))){
var inst_28422 = (state_28524[(13)]);
var inst_28421 = (state_28524[(22)]);
var inst_28429 = cljs.core.count.call(null,inst_28422);
var inst_28430 = cljs.core.repeatedly.call(null,inst_28429,breakout.utils.rand_char);
var inst_28431 = cljs.core.concat.call(null,inst_28421,inst_28430);
var inst_28432 = cljs.core.apply.call(null,cljs.core.str,inst_28431);
var inst_28433 = breakout.hud.set_text.call(null,inst_28432);
var inst_28434 = cljs.core.rand_int.call(null,(3));
var inst_28435 = cljs.core._EQ_.call(null,inst_28434,(1));
var inst_28436 = cljs.core.first.call(null,inst_28430);
var inst_28437 = cljs.core.first.call(null,inst_28422);
var inst_28438 = cljs.core._EQ_.call(null,inst_28436,inst_28437);
var inst_28439 = (inst_28435) || (inst_28438);
var state_28524__$1 = (function (){var statearr_28543 = state_28524;
(statearr_28543[(23)] = inst_28433);

return statearr_28543;
})();
if(cljs.core.truth_(inst_28439)){
var statearr_28544_28585 = state_28524__$1;
(statearr_28544_28585[(1)] = (8));

} else {
var statearr_28545_28586 = state_28524__$1;
(statearr_28545_28586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (25))){
var inst_28486 = (state_28524[(15)]);
var inst_28502 = (state_28524[(2)]);
var inst_28503 = breakout.hud.set_text.call(null,game_name);
var inst_28504 = cljs.core.next.call(null,inst_28486);
var inst_28466 = inst_28504;
var inst_28467 = null;
var inst_28468 = (0);
var inst_28469 = (0);
var state_28524__$1 = (function (){var statearr_28546 = state_28524;
(statearr_28546[(16)] = inst_28467);

(statearr_28546[(24)] = inst_28502);

(statearr_28546[(17)] = inst_28469);

(statearr_28546[(25)] = inst_28503);

(statearr_28546[(18)] = inst_28468);

(statearr_28546[(19)] = inst_28466);

return statearr_28546;
})();
var statearr_28547_28587 = state_28524__$1;
(statearr_28547_28587[(2)] = null);

(statearr_28547_28587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (17))){
var inst_28467 = (state_28524[(16)]);
var inst_28469 = (state_28524[(17)]);
var inst_28468 = (state_28524[(18)]);
var inst_28466 = (state_28524[(19)]);
var inst_28481 = (state_28524[(2)]);
var inst_28482 = breakout.hud.set_text.call(null,game_name);
var inst_28483 = (inst_28469 + (1));
var tmp28540 = inst_28467;
var tmp28541 = inst_28468;
var tmp28542 = inst_28466;
var inst_28466__$1 = tmp28542;
var inst_28467__$1 = tmp28540;
var inst_28468__$1 = tmp28541;
var inst_28469__$1 = inst_28483;
var state_28524__$1 = (function (){var statearr_28548 = state_28524;
(statearr_28548[(16)] = inst_28467__$1);

(statearr_28548[(26)] = inst_28482);

(statearr_28548[(17)] = inst_28469__$1);

(statearr_28548[(18)] = inst_28468__$1);

(statearr_28548[(27)] = inst_28481);

(statearr_28548[(19)] = inst_28466__$1);

return statearr_28548;
})();
var statearr_28549_28588 = state_28524__$1;
(statearr_28549_28588[(2)] = null);

(statearr_28549_28588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (3))){
var inst_28458 = (state_28524[(2)]);
var inst_28459 = breakout.hud.set_text.call(null,game_name);
var inst_28464 = cljs.core.range.call(null,(2));
var inst_28465 = cljs.core.seq.call(null,inst_28464);
var inst_28466 = inst_28465;
var inst_28467 = null;
var inst_28468 = (0);
var inst_28469 = (0);
var state_28524__$1 = (function (){var statearr_28550 = state_28524;
(statearr_28550[(16)] = inst_28467);

(statearr_28550[(28)] = inst_28459);

(statearr_28550[(17)] = inst_28469);

(statearr_28550[(18)] = inst_28468);

(statearr_28550[(29)] = inst_28458);

(statearr_28550[(19)] = inst_28466);

return statearr_28550;
})();
var statearr_28551_28589 = state_28524__$1;
(statearr_28551_28589[(2)] = null);

(statearr_28551_28589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (12))){
var inst_28514 = (state_28524[(2)]);
var inst_28515 = breakout.utils.timeout.call(null,(400));
var state_28524__$1 = (function (){var statearr_28552 = state_28524;
(statearr_28552[(30)] = inst_28514);

return statearr_28552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28524__$1,(26),inst_28515);
} else {
if((state_val_28525 === (2))){
var inst_28418 = (state_28524[(8)]);
var inst_28421 = cljs.core.nth.call(null,inst_28418,(0),null);
var inst_28422 = cljs.core.nth.call(null,inst_28418,(1),null);
var inst_28423 = breakout.utils.timeout.call(null,(30));
var state_28524__$1 = (function (){var statearr_28553 = state_28524;
(statearr_28553[(13)] = inst_28422);

(statearr_28553[(22)] = inst_28421);

return statearr_28553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28524__$1,(4),inst_28423);
} else {
if((state_val_28525 === (23))){
var inst_28507 = (state_28524[(2)]);
var state_28524__$1 = state_28524;
var statearr_28554_28590 = state_28524__$1;
(statearr_28554_28590[(2)] = inst_28507);

(statearr_28554_28590[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (19))){
var state_28524__$1 = state_28524;
var statearr_28555_28591 = state_28524__$1;
(statearr_28555_28591[(2)] = null);

(statearr_28555_28591[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (11))){
var inst_28469 = (state_28524[(17)]);
var inst_28468 = (state_28524[(18)]);
var inst_28471 = (inst_28469 < inst_28468);
var inst_28472 = inst_28471;
var state_28524__$1 = state_28524;
if(cljs.core.truth_(inst_28472)){
var statearr_28556_28592 = state_28524__$1;
(statearr_28556_28592[(1)] = (13));

} else {
var statearr_28557_28593 = state_28524__$1;
(statearr_28557_28593[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (9))){
var inst_28422 = (state_28524[(13)]);
var inst_28421 = (state_28524[(22)]);
var inst_28449 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28450 = [inst_28421,inst_28422];
var inst_28451 = (new cljs.core.PersistentVector(null,2,(5),inst_28449,inst_28450,null));
var inst_28418 = inst_28451;
var state_28524__$1 = (function (){var statearr_28558 = state_28524;
(statearr_28558[(8)] = inst_28418);

return statearr_28558;
})();
var statearr_28559_28594 = state_28524__$1;
(statearr_28559_28594[(2)] = null);

(statearr_28559_28594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (5))){
var state_28524__$1 = state_28524;
var statearr_28560_28595 = state_28524__$1;
(statearr_28560_28595[(2)] = null);

(statearr_28560_28595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (14))){
var inst_28486 = (state_28524[(15)]);
var inst_28466 = (state_28524[(19)]);
var inst_28486__$1 = cljs.core.seq.call(null,inst_28466);
var state_28524__$1 = (function (){var statearr_28561 = state_28524;
(statearr_28561[(15)] = inst_28486__$1);

return statearr_28561;
})();
if(inst_28486__$1){
var statearr_28562_28596 = state_28524__$1;
(statearr_28562_28596[(1)] = (18));

} else {
var statearr_28563_28597 = state_28524__$1;
(statearr_28563_28597[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (26))){
var inst_28517 = (state_28524[(2)]);
var inst_28518 = breakout.hud.set_text.call(null,"TIME!");
var inst_28519 = breakout.utils.timeout.call(null,(600));
var state_28524__$1 = (function (){var statearr_28564 = state_28524;
(statearr_28564[(31)] = inst_28518);

(statearr_28564[(32)] = inst_28517);

return statearr_28564;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28524__$1,(27),inst_28519);
} else {
if((state_val_28525 === (16))){
var inst_28477 = (state_28524[(2)]);
var inst_28478 = breakout.hud.set_text.call(null,null);
var inst_28479 = breakout.utils.timeout.call(null,(200));
var state_28524__$1 = (function (){var statearr_28565 = state_28524;
(statearr_28565[(33)] = inst_28478);

(statearr_28565[(34)] = inst_28477);

return statearr_28565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28524__$1,(17),inst_28479);
} else {
if((state_val_28525 === (10))){
var inst_28454 = (state_28524[(2)]);
var state_28524__$1 = state_28524;
var statearr_28566_28598 = state_28524__$1;
(statearr_28566_28598[(2)] = inst_28454);

(statearr_28566_28598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (18))){
var inst_28486 = (state_28524[(15)]);
var inst_28488 = cljs.core.chunked_seq_QMARK_.call(null,inst_28486);
var state_28524__$1 = state_28524;
if(inst_28488){
var statearr_28567_28599 = state_28524__$1;
(statearr_28567_28599[(1)] = (21));

} else {
var statearr_28568_28600 = state_28524__$1;
(statearr_28568_28600[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (8))){
var inst_28422 = (state_28524[(13)]);
var inst_28421 = (state_28524[(22)]);
var inst_28441 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28442 = cljs.core.first.call(null,inst_28422);
var inst_28443 = cljs.core.conj.call(null,inst_28421,inst_28442);
var inst_28444 = cljs.core.rest.call(null,inst_28422);
var inst_28445 = [inst_28443,inst_28444];
var inst_28446 = (new cljs.core.PersistentVector(null,2,(5),inst_28441,inst_28445,null));
var inst_28418 = inst_28446;
var state_28524__$1 = (function (){var statearr_28569 = state_28524;
(statearr_28569[(8)] = inst_28418);

return statearr_28569;
})();
var statearr_28570_28601 = state_28524__$1;
(statearr_28570_28601[(2)] = null);

(statearr_28570_28601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19561__auto__,game_name))
;
return ((function (switch__19496__auto__,c__19561__auto__,game_name){
return (function() {
var breakout$hud$startup_title_animation_$_state_machine__19497__auto__ = null;
var breakout$hud$startup_title_animation_$_state_machine__19497__auto____0 = (function (){
var statearr_28574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28574[(0)] = breakout$hud$startup_title_animation_$_state_machine__19497__auto__);

(statearr_28574[(1)] = (1));

return statearr_28574;
});
var breakout$hud$startup_title_animation_$_state_machine__19497__auto____1 = (function (state_28524){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_28524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e28575){if((e28575 instanceof Object)){
var ex__19500__auto__ = e28575;
var statearr_28576_28602 = state_28524;
(statearr_28576_28602[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28603 = state_28524;
state_28524 = G__28603;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
breakout$hud$startup_title_animation_$_state_machine__19497__auto__ = function(state_28524){
switch(arguments.length){
case 0:
return breakout$hud$startup_title_animation_$_state_machine__19497__auto____0.call(this);
case 1:
return breakout$hud$startup_title_animation_$_state_machine__19497__auto____1.call(this,state_28524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
breakout$hud$startup_title_animation_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = breakout$hud$startup_title_animation_$_state_machine__19497__auto____0;
breakout$hud$startup_title_animation_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = breakout$hud$startup_title_animation_$_state_machine__19497__auto____1;
return breakout$hud$startup_title_animation_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__,game_name))
})();
var state__19563__auto__ = (function (){var statearr_28577 = f__19562__auto__.call(null);
(statearr_28577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_28577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__,game_name))
);

return c__19561__auto__;
});

//# sourceMappingURL=hud.js.map?rel=1446755790378