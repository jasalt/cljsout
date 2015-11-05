// Compiled by ClojureScript 1.7.145 {}
goog.provide('reagi.core');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.async');

/**
 * @interface
 */
reagi.core.Signal = function(){};

/**
 * True if the signal's value will no longer change.
 */
reagi.core.complete_QMARK_ = (function reagi$core$complete_QMARK_(signal){
if((!((signal == null))) && (!((signal.reagi$core$Signal$complete_QMARK_$arity$1 == null)))){
return signal.reagi$core$Signal$complete_QMARK_$arity$1(signal);
} else {
var x__17013__auto__ = (((signal == null))?null:signal);
var m__17014__auto__ = (reagi.core.complete_QMARK_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,signal);
} else {
var m__17014__auto____$1 = (reagi.core.complete_QMARK_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,signal);
} else {
throw cljs.core.missing_protocol.call(null,"Signal.complete?",signal);
}
}
}
});

/**
 * True if the object is a behavior or event stream.
 */
reagi.core.signal_QMARK_ = (function reagi$core$signal_QMARK_(x){
if(!((x == null))){
if((false) || (x.reagi$core$Signal$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagi.core.Signal,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagi.core.Signal,x);
}
});

/**
 * @interface
 */
reagi.core.Boxed = function(){};

/**
 * Unbox a boxed value.
 */
reagi.core.unbox = (function reagi$core$unbox(x){
if((!((x == null))) && (!((x.reagi$core$Boxed$unbox$arity$1 == null)))){
return x.reagi$core$Boxed$unbox$arity$1(x);
} else {
var x__17013__auto__ = (((x == null))?null:x);
var m__17014__auto__ = (reagi.core.unbox[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,x);
} else {
var m__17014__auto____$1 = (reagi.core.unbox["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Boxed.unbox",x);
}
}
}
});


/**
* @constructor
 * @implements {reagi.core.Boxed}
*/
reagi.core.Completed = (function (x){
this.x = x;
})
reagi.core.Completed.prototype.reagi$core$Boxed$ = true;

reagi.core.Completed.prototype.reagi$core$Boxed$unbox$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

reagi.core.Completed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null);
});

reagi.core.Completed.cljs$lang$type = true;

reagi.core.Completed.cljs$lang$ctorStr = "reagi.core/Completed";

reagi.core.Completed.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"reagi.core/Completed");
});

reagi.core.__GT_Completed = (function reagi$core$__GT_Completed(x){
return (new reagi.core.Completed(x));
});

/**
 * Wraps x to guarantee that it will be the last value in a behavior or event
 *   stream. The value of x will be cached, and any values after x will be
 *   ignored.
 */
reagi.core.completed = (function reagi$core$completed(x){
return (new reagi.core.Completed(x));
});
/**
 * Box a value to ensure it can be sent through a channel.
 */
reagi.core.box = (function reagi$core$box(x){
if((x instanceof reagi.core.Completed)){
return x;
} else {
if(typeof reagi.core.t_reagi$core29093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {reagi.core.Boxed}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core29093 = (function (box,x,meta29094){
this.box = box;
this.x = x;
this.meta29094 = meta29094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core29093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29095,meta29094__$1){
var self__ = this;
var _29095__$1 = this;
return (new reagi.core.t_reagi$core29093(self__.box,self__.x,meta29094__$1));
});

reagi.core.t_reagi$core29093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29095){
var self__ = this;
var _29095__$1 = this;
return self__.meta29094;
});

reagi.core.t_reagi$core29093.prototype.reagi$core$Boxed$ = true;

reagi.core.t_reagi$core29093.prototype.reagi$core$Boxed$unbox$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

reagi.core.t_reagi$core29093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"box","box",-1123515375,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Box a value to ensure it can be sent through a channel."], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta29094","meta29094",-1560754562,null)], null);
});

reagi.core.t_reagi$core29093.cljs$lang$type = true;

reagi.core.t_reagi$core29093.cljs$lang$ctorStr = "reagi.core/t_reagi$core29093";

reagi.core.t_reagi$core29093.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"reagi.core/t_reagi$core29093");
});

reagi.core.__GT_t_reagi$core29093 = (function reagi$core$box_$___GT_t_reagi$core29093(box__$1,x__$1,meta29094){
return (new reagi.core.t_reagi$core29093(box__$1,x__$1,meta29094));
});

}

return (new reagi.core.t_reagi$core29093(reagi$core$box,x,cljs.core.PersistentArrayMap.EMPTY));
}
});
(reagi.core.Boxed["_"] = true);

(reagi.core.unbox["_"] = (function (x){
return x;
}));

/**
* @constructor
 * @implements {reagi.core.Signal}
 * @implements {cljs.core.IDeref}
*/
reagi.core.Behavior = (function (func,cache){
this.func = func;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.Behavior.prototype.cljs$core$IDeref$_deref$arity$1 = (function (behavior){
var self__ = this;
var behavior__$1 = this;
return reagi.core.unbox.call(null,cljs.core.swap_BANG_.call(null,self__.cache,((function (behavior__$1){
return (function (p1__29096_SHARP_){
if((p1__29096_SHARP_ instanceof reagi.core.Completed)){
return p1__29096_SHARP_;
} else {
return self__.func.call(null);
}
});})(behavior__$1))
));
});

reagi.core.Behavior.prototype.reagi$core$Signal$ = true;

reagi.core.Behavior.prototype.reagi$core$Signal$complete_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.call(null,self__.cache) instanceof reagi.core.Completed);
});

reagi.core.Behavior.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

reagi.core.Behavior.cljs$lang$type = true;

reagi.core.Behavior.cljs$lang$ctorStr = "reagi.core/Behavior";

reagi.core.Behavior.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"reagi.core/Behavior");
});

reagi.core.__GT_Behavior = (function reagi$core$__GT_Behavior(func,cache){
return (new reagi.core.Behavior(func,cache));
});

/**
 * Takes a zero-argument function and yields a Behavior object that will
 *   evaluate the function each time it is dereferenced. See: behavior.
 */
reagi.core.behavior_call = (function reagi$core$behavior_call(func){
return (new reagi.core.Behavior(func,cljs.core.atom.call(null,null)));
});
/**
 * Return true if the object is a behavior.
 */
reagi.core.behavior_QMARK_ = (function reagi$core$behavior_QMARK_(x){
return (x instanceof reagi.core.Behavior);
});
/**
 * A behavior that tracks the current time in seconds.
 */
reagi.core.time = reagi.core.behavior_call.call(null,(function (){
return ((new Date()).getTime() / 1000.0);
}));
/**
 * Return a behavior that tracks the time in seconds from when it was created.
 */
reagi.core.delta = (function reagi$core$delta(){
var t = cljs.core.deref.call(null,reagi.core.time);
return reagi.core.behavior_call.call(null,((function (t){
return (function (){
return (cljs.core.deref.call(null,reagi.core.time) - t);
});})(t))
);
});

/**
 * @interface
 */
reagi.core.Observable = function(){};

/**
 * Return a write-only core.async channel. Any elements send to the port will
 *  be distributed to the listener channels in parallel. Each listener must
 *  accept before the next item is distributed.
 */
reagi.core.port = (function reagi$core$port(ob){
if((!((ob == null))) && (!((ob.reagi$core$Observable$port$arity$1 == null)))){
return ob.reagi$core$Observable$port$arity$1(ob);
} else {
var x__17013__auto__ = (((ob == null))?null:ob);
var m__17014__auto__ = (reagi.core.port[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,ob);
} else {
var m__17014__auto____$1 = (reagi.core.port["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,ob);
} else {
throw cljs.core.missing_protocol.call(null,"Observable.port",ob);
}
}
}
});

/**
 * Add a listener channel to the observable. The channel will be closed
 *  when the port of the observable is closed. Returns the channel.
 * 
 *  Any events sent to the channel will be boxed to protect the channel from
 *  nils. To listen for unboxed events, use subscribe.
 */
reagi.core.listen = (function reagi$core$listen(ob,ch){
if((!((ob == null))) && (!((ob.reagi$core$Observable$listen$arity$2 == null)))){
return ob.reagi$core$Observable$listen$arity$2(ob,ch);
} else {
var x__17013__auto__ = (((ob == null))?null:ob);
var m__17014__auto__ = (reagi.core.listen[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,ob,ch);
} else {
var m__17014__auto____$1 = (reagi.core.listen["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,ob,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Observable.listen",ob);
}
}
}
});

/**
 * A version of clojure.core.async/mult that fixes ASYNC-64.
 *   This can be removed once a fix is released for core.async.
 */
reagi.core.mult_STAR_ = (function reagi$core$mult_STAR_(ch){
var state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.PersistentArrayMap.EMPTY], null));
var m = (function (){
if(typeof reagi.core.t_reagi$core29332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core29332 = (function (mult_STAR_,ch,state,meta29333){
this.mult_STAR_ = mult_STAR_;
this.ch = ch;
this.state = state;
this.meta29333 = meta29333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagi.core.t_reagi$core29332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state){
return (function (_29334,meta29333__$1){
var self__ = this;
var _29334__$1 = this;
return (new reagi.core.t_reagi$core29332(self__.mult_STAR_,self__.ch,self__.state,meta29333__$1));
});})(state))
;

reagi.core.t_reagi$core29332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state){
return (function (_29334){
var self__ = this;
var _29334__$1 = this;
return self__.meta29333;
});})(state))
;

reagi.core.t_reagi$core29332.prototype.cljs$core$async$Mux$ = true;

reagi.core.t_reagi$core29332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(state))
;

reagi.core.t_reagi$core29332.prototype.cljs$core$async$Mult$ = true;

reagi.core.t_reagi$core29332.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (state){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
var add_ch = ((function (___$1,state){
return (function (p__29336){
var vec__29337 = p__29336;
var o_QMARK_ = cljs.core.nth.call(null,vec__29337,(0),null);
var cs = cljs.core.nth.call(null,vec__29337,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o_QMARK_,(cljs.core.truth_(o_QMARK_)?cljs.core.assoc.call(null,cs,ch__$1,close_QMARK_):cs)], null);
});})(___$1,state))
;
var vec__29335 = cljs.core.swap_BANG_.call(null,self__.state,add_ch);
var open_QMARK_ = cljs.core.nth.call(null,vec__29335,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__29335,(1),null);
if(cljs.core.truth_(open_QMARK_)){
} else {
cljs.core.async.close_BANG_.call(null,ch__$1);
}

return null;
});})(state))
;

reagi.core.t_reagi$core29332.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (state){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__29338){
var vec__29339 = p__29338;
var open_QMARK_ = cljs.core.nth.call(null,vec__29339,(0),null);
var cs = cljs.core.nth.call(null,vec__29339,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.dissoc.call(null,cs,ch__$1)], null);
});})(___$1,state))
);

return null;
});})(state))
;

reagi.core.t_reagi$core29332.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__29340){
var vec__29341 = p__29340;
var open_QMARK_ = cljs.core.nth.call(null,vec__29341,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__29341,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null);
});})(___$1,state))
);
});})(state))
;

reagi.core.t_reagi$core29332.getBasis = ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult*","mult*",-731771795,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"A version of clojure.core.async/mult that fixes ASYNC-64.\n  This can be removed once a fix is released for core.async."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta29333","meta29333",-154080659,null)], null);
});})(state))
;

reagi.core.t_reagi$core29332.cljs$lang$type = true;

reagi.core.t_reagi$core29332.cljs$lang$ctorStr = "reagi.core/t_reagi$core29332";

reagi.core.t_reagi$core29332.cljs$lang$ctorPrWriter = ((function (state){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"reagi.core/t_reagi$core29332");
});})(state))
;

reagi.core.__GT_t_reagi$core29332 = ((function (state){
return (function reagi$core$mult_STAR__$___GT_t_reagi$core29332(mult_STAR___$1,ch__$1,state__$1,meta29333){
return (new reagi.core.t_reagi$core29332(mult_STAR___$1,ch__$1,state__$1,meta29333));
});})(state))
;

}

return (new reagi.core.t_reagi$core29332(reagi$core$mult_STAR_,ch,state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (state,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(state,m,dchan,dctr))
;
var c__19561__auto___29567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___29567,state,m,dchan,dctr,done){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___29567,state,m,dchan,dctr,done){
return (function (state_29478){
var state_val_29479 = (state_29478[(1)]);
if((state_val_29479 === (7))){
var inst_29474 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29480_29568 = state_29478__$1;
(statearr_29480_29568[(2)] = inst_29474);

(statearr_29480_29568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (20))){
var inst_29378 = (state_29478[(7)]);
var inst_29388 = cljs.core.first.call(null,inst_29378);
var inst_29389 = cljs.core.nth.call(null,inst_29388,(0),null);
var inst_29390 = cljs.core.nth.call(null,inst_29388,(1),null);
var state_29478__$1 = (function (){var statearr_29481 = state_29478;
(statearr_29481[(8)] = inst_29389);

return statearr_29481;
})();
if(cljs.core.truth_(inst_29390)){
var statearr_29482_29569 = state_29478__$1;
(statearr_29482_29569[(1)] = (22));

} else {
var statearr_29483_29570 = state_29478__$1;
(statearr_29483_29570[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (27))){
var inst_29426 = (state_29478[(9)]);
var inst_29344 = (state_29478[(10)]);
var inst_29421 = (state_29478[(11)]);
var inst_29419 = (state_29478[(12)]);
var inst_29426__$1 = cljs.core._nth.call(null,inst_29419,inst_29421);
var inst_29427 = cljs.core.async.put_BANG_.call(null,inst_29426__$1,inst_29344,done);
var state_29478__$1 = (function (){var statearr_29484 = state_29478;
(statearr_29484[(9)] = inst_29426__$1);

return statearr_29484;
})();
if(cljs.core.truth_(inst_29427)){
var statearr_29485_29571 = state_29478__$1;
(statearr_29485_29571[(1)] = (30));

} else {
var statearr_29486_29572 = state_29478__$1;
(statearr_29486_29572[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (1))){
var state_29478__$1 = state_29478;
var statearr_29487_29573 = state_29478__$1;
(statearr_29487_29573[(2)] = null);

(statearr_29487_29573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (24))){
var inst_29378 = (state_29478[(7)]);
var inst_29395 = (state_29478[(2)]);
var inst_29396 = cljs.core.next.call(null,inst_29378);
var inst_29358 = inst_29396;
var inst_29359 = null;
var inst_29360 = (0);
var inst_29361 = (0);
var state_29478__$1 = (function (){var statearr_29488 = state_29478;
(statearr_29488[(13)] = inst_29395);

(statearr_29488[(14)] = inst_29359);

(statearr_29488[(15)] = inst_29358);

(statearr_29488[(16)] = inst_29361);

(statearr_29488[(17)] = inst_29360);

return statearr_29488;
})();
var statearr_29489_29574 = state_29478__$1;
(statearr_29489_29574[(2)] = null);

(statearr_29489_29574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (39))){
var state_29478__$1 = state_29478;
var statearr_29493_29575 = state_29478__$1;
(statearr_29493_29575[(2)] = null);

(statearr_29493_29575[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (4))){
var inst_29344 = (state_29478[(10)]);
var inst_29344__$1 = (state_29478[(2)]);
var inst_29345 = (inst_29344__$1 == null);
var state_29478__$1 = (function (){var statearr_29494 = state_29478;
(statearr_29494[(10)] = inst_29344__$1);

return statearr_29494;
})();
if(cljs.core.truth_(inst_29345)){
var statearr_29495_29576 = state_29478__$1;
(statearr_29495_29576[(1)] = (5));

} else {
var statearr_29496_29577 = state_29478__$1;
(statearr_29496_29577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (15))){
var inst_29359 = (state_29478[(14)]);
var inst_29358 = (state_29478[(15)]);
var inst_29361 = (state_29478[(16)]);
var inst_29360 = (state_29478[(17)]);
var inst_29374 = (state_29478[(2)]);
var inst_29375 = (inst_29361 + (1));
var tmp29490 = inst_29359;
var tmp29491 = inst_29358;
var tmp29492 = inst_29360;
var inst_29358__$1 = tmp29491;
var inst_29359__$1 = tmp29490;
var inst_29360__$1 = tmp29492;
var inst_29361__$1 = inst_29375;
var state_29478__$1 = (function (){var statearr_29497 = state_29478;
(statearr_29497[(18)] = inst_29374);

(statearr_29497[(14)] = inst_29359__$1);

(statearr_29497[(15)] = inst_29358__$1);

(statearr_29497[(16)] = inst_29361__$1);

(statearr_29497[(17)] = inst_29360__$1);

return statearr_29497;
})();
var statearr_29498_29578 = state_29478__$1;
(statearr_29498_29578[(2)] = null);

(statearr_29498_29578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (21))){
var inst_29399 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29502_29579 = state_29478__$1;
(statearr_29502_29579[(2)] = inst_29399);

(statearr_29502_29579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (31))){
var inst_29426 = (state_29478[(9)]);
var inst_29430 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_29431 = cljs.core.async.untap_STAR_.call(null,m,inst_29426);
var state_29478__$1 = (function (){var statearr_29503 = state_29478;
(statearr_29503[(19)] = inst_29430);

return statearr_29503;
})();
var statearr_29504_29580 = state_29478__$1;
(statearr_29504_29580[(2)] = inst_29431);

(statearr_29504_29580[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (32))){
var inst_29418 = (state_29478[(20)]);
var inst_29420 = (state_29478[(21)]);
var inst_29421 = (state_29478[(11)]);
var inst_29419 = (state_29478[(12)]);
var inst_29433 = (state_29478[(2)]);
var inst_29434 = (inst_29421 + (1));
var tmp29499 = inst_29418;
var tmp29500 = inst_29420;
var tmp29501 = inst_29419;
var inst_29418__$1 = tmp29499;
var inst_29419__$1 = tmp29501;
var inst_29420__$1 = tmp29500;
var inst_29421__$1 = inst_29434;
var state_29478__$1 = (function (){var statearr_29505 = state_29478;
(statearr_29505[(20)] = inst_29418__$1);

(statearr_29505[(22)] = inst_29433);

(statearr_29505[(21)] = inst_29420__$1);

(statearr_29505[(11)] = inst_29421__$1);

(statearr_29505[(12)] = inst_29419__$1);

return statearr_29505;
})();
var statearr_29506_29581 = state_29478__$1;
(statearr_29506_29581[(2)] = null);

(statearr_29506_29581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (40))){
var inst_29446 = (state_29478[(23)]);
var inst_29450 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_29451 = cljs.core.async.untap_STAR_.call(null,m,inst_29446);
var state_29478__$1 = (function (){var statearr_29507 = state_29478;
(statearr_29507[(24)] = inst_29450);

return statearr_29507;
})();
var statearr_29508_29582 = state_29478__$1;
(statearr_29508_29582[(2)] = inst_29451);

(statearr_29508_29582[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (33))){
var inst_29437 = (state_29478[(25)]);
var inst_29439 = cljs.core.chunked_seq_QMARK_.call(null,inst_29437);
var state_29478__$1 = state_29478;
if(inst_29439){
var statearr_29509_29583 = state_29478__$1;
(statearr_29509_29583[(1)] = (36));

} else {
var statearr_29510_29584 = state_29478__$1;
(statearr_29510_29584[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (13))){
var inst_29368 = (state_29478[(26)]);
var inst_29371 = cljs.core.async.close_BANG_.call(null,inst_29368);
var state_29478__$1 = state_29478;
var statearr_29511_29585 = state_29478__$1;
(statearr_29511_29585[(2)] = inst_29371);

(statearr_29511_29585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (22))){
var inst_29389 = (state_29478[(8)]);
var inst_29392 = cljs.core.async.close_BANG_.call(null,inst_29389);
var state_29478__$1 = state_29478;
var statearr_29512_29586 = state_29478__$1;
(statearr_29512_29586[(2)] = inst_29392);

(statearr_29512_29586[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (36))){
var inst_29437 = (state_29478[(25)]);
var inst_29441 = cljs.core.chunk_first.call(null,inst_29437);
var inst_29442 = cljs.core.chunk_rest.call(null,inst_29437);
var inst_29443 = cljs.core.count.call(null,inst_29441);
var inst_29418 = inst_29442;
var inst_29419 = inst_29441;
var inst_29420 = inst_29443;
var inst_29421 = (0);
var state_29478__$1 = (function (){var statearr_29513 = state_29478;
(statearr_29513[(20)] = inst_29418);

(statearr_29513[(21)] = inst_29420);

(statearr_29513[(11)] = inst_29421);

(statearr_29513[(12)] = inst_29419);

return statearr_29513;
})();
var statearr_29514_29587 = state_29478__$1;
(statearr_29514_29587[(2)] = null);

(statearr_29514_29587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (41))){
var inst_29437 = (state_29478[(25)]);
var inst_29453 = (state_29478[(2)]);
var inst_29454 = cljs.core.next.call(null,inst_29437);
var inst_29418 = inst_29454;
var inst_29419 = null;
var inst_29420 = (0);
var inst_29421 = (0);
var state_29478__$1 = (function (){var statearr_29515 = state_29478;
(statearr_29515[(27)] = inst_29453);

(statearr_29515[(20)] = inst_29418);

(statearr_29515[(21)] = inst_29420);

(statearr_29515[(11)] = inst_29421);

(statearr_29515[(12)] = inst_29419);

return statearr_29515;
})();
var statearr_29516_29588 = state_29478__$1;
(statearr_29516_29588[(2)] = null);

(statearr_29516_29588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (43))){
var state_29478__$1 = state_29478;
var statearr_29517_29589 = state_29478__$1;
(statearr_29517_29589[(2)] = null);

(statearr_29517_29589[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (29))){
var inst_29462 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29518_29590 = state_29478__$1;
(statearr_29518_29590[(2)] = inst_29462);

(statearr_29518_29590[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (44))){
var inst_29471 = (state_29478[(2)]);
var state_29478__$1 = (function (){var statearr_29519 = state_29478;
(statearr_29519[(28)] = inst_29471);

return statearr_29519;
})();
var statearr_29520_29591 = state_29478__$1;
(statearr_29520_29591[(2)] = null);

(statearr_29520_29591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (6))){
var inst_29410 = (state_29478[(29)]);
var inst_29408 = cljs.core.deref.call(null,state);
var inst_29409 = cljs.core.second.call(null,inst_29408);
var inst_29410__$1 = cljs.core.keys.call(null,inst_29409);
var inst_29411 = cljs.core.count.call(null,inst_29410__$1);
var inst_29412 = cljs.core.reset_BANG_.call(null,dctr,inst_29411);
var inst_29417 = cljs.core.seq.call(null,inst_29410__$1);
var inst_29418 = inst_29417;
var inst_29419 = null;
var inst_29420 = (0);
var inst_29421 = (0);
var state_29478__$1 = (function (){var statearr_29521 = state_29478;
(statearr_29521[(29)] = inst_29410__$1);

(statearr_29521[(20)] = inst_29418);

(statearr_29521[(21)] = inst_29420);

(statearr_29521[(11)] = inst_29421);

(statearr_29521[(30)] = inst_29412);

(statearr_29521[(12)] = inst_29419);

return statearr_29521;
})();
var statearr_29522_29592 = state_29478__$1;
(statearr_29522_29592[(2)] = null);

(statearr_29522_29592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (28))){
var inst_29418 = (state_29478[(20)]);
var inst_29437 = (state_29478[(25)]);
var inst_29437__$1 = cljs.core.seq.call(null,inst_29418);
var state_29478__$1 = (function (){var statearr_29523 = state_29478;
(statearr_29523[(25)] = inst_29437__$1);

return statearr_29523;
})();
if(inst_29437__$1){
var statearr_29524_29593 = state_29478__$1;
(statearr_29524_29593[(1)] = (33));

} else {
var statearr_29525_29594 = state_29478__$1;
(statearr_29525_29594[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (25))){
var inst_29420 = (state_29478[(21)]);
var inst_29421 = (state_29478[(11)]);
var inst_29423 = (inst_29421 < inst_29420);
var inst_29424 = inst_29423;
var state_29478__$1 = state_29478;
if(cljs.core.truth_(inst_29424)){
var statearr_29526_29595 = state_29478__$1;
(statearr_29526_29595[(1)] = (27));

} else {
var statearr_29527_29596 = state_29478__$1;
(statearr_29527_29596[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (34))){
var state_29478__$1 = state_29478;
var statearr_29528_29597 = state_29478__$1;
(statearr_29528_29597[(2)] = null);

(statearr_29528_29597[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (17))){
var state_29478__$1 = state_29478;
var statearr_29529_29598 = state_29478__$1;
(statearr_29529_29598[(2)] = null);

(statearr_29529_29598[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (3))){
var inst_29476 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29478__$1,inst_29476);
} else {
if((state_val_29479 === (12))){
var inst_29404 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29530_29599 = state_29478__$1;
(statearr_29530_29599[(2)] = inst_29404);

(statearr_29530_29599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (2))){
var state_29478__$1 = state_29478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29478__$1,(4),ch);
} else {
if((state_val_29479 === (23))){
var state_29478__$1 = state_29478;
var statearr_29531_29600 = state_29478__$1;
(statearr_29531_29600[(2)] = null);

(statearr_29531_29600[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (35))){
var inst_29460 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29532_29601 = state_29478__$1;
(statearr_29532_29601[(2)] = inst_29460);

(statearr_29532_29601[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (19))){
var inst_29378 = (state_29478[(7)]);
var inst_29382 = cljs.core.chunk_first.call(null,inst_29378);
var inst_29383 = cljs.core.chunk_rest.call(null,inst_29378);
var inst_29384 = cljs.core.count.call(null,inst_29382);
var inst_29358 = inst_29383;
var inst_29359 = inst_29382;
var inst_29360 = inst_29384;
var inst_29361 = (0);
var state_29478__$1 = (function (){var statearr_29533 = state_29478;
(statearr_29533[(14)] = inst_29359);

(statearr_29533[(15)] = inst_29358);

(statearr_29533[(16)] = inst_29361);

(statearr_29533[(17)] = inst_29360);

return statearr_29533;
})();
var statearr_29534_29602 = state_29478__$1;
(statearr_29534_29602[(2)] = null);

(statearr_29534_29602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (11))){
var inst_29358 = (state_29478[(15)]);
var inst_29378 = (state_29478[(7)]);
var inst_29378__$1 = cljs.core.seq.call(null,inst_29358);
var state_29478__$1 = (function (){var statearr_29535 = state_29478;
(statearr_29535[(7)] = inst_29378__$1);

return statearr_29535;
})();
if(inst_29378__$1){
var statearr_29536_29603 = state_29478__$1;
(statearr_29536_29603[(1)] = (16));

} else {
var statearr_29537_29604 = state_29478__$1;
(statearr_29537_29604[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (9))){
var inst_29406 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29538_29605 = state_29478__$1;
(statearr_29538_29605[(2)] = inst_29406);

(statearr_29538_29605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (5))){
var inst_29344 = (state_29478[(10)]);
var inst_29349 = (function (){var val = inst_29344;
return ((function (val,inst_29344,state_val_29479,c__19561__auto___29567,state,m,dchan,dctr,done){
return (function (p__29348){
var vec__29539 = p__29348;
var _ = cljs.core.nth.call(null,vec__29539,(0),null);
var cs = cljs.core.nth.call(null,vec__29539,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cs], null);
});
;})(val,inst_29344,state_val_29479,c__19561__auto___29567,state,m,dchan,dctr,done))
})();
var inst_29350 = cljs.core.swap_BANG_.call(null,state,inst_29349);
var inst_29351 = cljs.core.nth.call(null,inst_29350,(0),null);
var inst_29352 = cljs.core.nth.call(null,inst_29350,(1),null);
var inst_29357 = cljs.core.seq.call(null,inst_29352);
var inst_29358 = inst_29357;
var inst_29359 = null;
var inst_29360 = (0);
var inst_29361 = (0);
var state_29478__$1 = (function (){var statearr_29540 = state_29478;
(statearr_29540[(31)] = inst_29351);

(statearr_29540[(14)] = inst_29359);

(statearr_29540[(15)] = inst_29358);

(statearr_29540[(16)] = inst_29361);

(statearr_29540[(17)] = inst_29360);

return statearr_29540;
})();
var statearr_29541_29606 = state_29478__$1;
(statearr_29541_29606[(2)] = null);

(statearr_29541_29606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (14))){
var state_29478__$1 = state_29478;
var statearr_29542_29607 = state_29478__$1;
(statearr_29542_29607[(2)] = null);

(statearr_29542_29607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (45))){
var inst_29468 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29543_29608 = state_29478__$1;
(statearr_29543_29608[(2)] = inst_29468);

(statearr_29543_29608[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (26))){
var inst_29410 = (state_29478[(29)]);
var inst_29464 = (state_29478[(2)]);
var inst_29465 = cljs.core.seq.call(null,inst_29410);
var state_29478__$1 = (function (){var statearr_29544 = state_29478;
(statearr_29544[(32)] = inst_29464);

return statearr_29544;
})();
if(inst_29465){
var statearr_29545_29609 = state_29478__$1;
(statearr_29545_29609[(1)] = (42));

} else {
var statearr_29546_29610 = state_29478__$1;
(statearr_29546_29610[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (16))){
var inst_29378 = (state_29478[(7)]);
var inst_29380 = cljs.core.chunked_seq_QMARK_.call(null,inst_29378);
var state_29478__$1 = state_29478;
if(inst_29380){
var statearr_29547_29611 = state_29478__$1;
(statearr_29547_29611[(1)] = (19));

} else {
var statearr_29548_29612 = state_29478__$1;
(statearr_29548_29612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (38))){
var inst_29457 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29549_29613 = state_29478__$1;
(statearr_29549_29613[(2)] = inst_29457);

(statearr_29549_29613[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (30))){
var state_29478__$1 = state_29478;
var statearr_29550_29614 = state_29478__$1;
(statearr_29550_29614[(2)] = null);

(statearr_29550_29614[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (10))){
var inst_29359 = (state_29478[(14)]);
var inst_29361 = (state_29478[(16)]);
var inst_29367 = cljs.core._nth.call(null,inst_29359,inst_29361);
var inst_29368 = cljs.core.nth.call(null,inst_29367,(0),null);
var inst_29369 = cljs.core.nth.call(null,inst_29367,(1),null);
var state_29478__$1 = (function (){var statearr_29551 = state_29478;
(statearr_29551[(26)] = inst_29368);

return statearr_29551;
})();
if(cljs.core.truth_(inst_29369)){
var statearr_29552_29615 = state_29478__$1;
(statearr_29552_29615[(1)] = (13));

} else {
var statearr_29553_29616 = state_29478__$1;
(statearr_29553_29616[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (18))){
var inst_29402 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29554_29617 = state_29478__$1;
(statearr_29554_29617[(2)] = inst_29402);

(statearr_29554_29617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (42))){
var state_29478__$1 = state_29478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29478__$1,(45),dchan);
} else {
if((state_val_29479 === (37))){
var inst_29446 = (state_29478[(23)]);
var inst_29344 = (state_29478[(10)]);
var inst_29437 = (state_29478[(25)]);
var inst_29446__$1 = cljs.core.first.call(null,inst_29437);
var inst_29447 = cljs.core.async.put_BANG_.call(null,inst_29446__$1,inst_29344,done);
var state_29478__$1 = (function (){var statearr_29555 = state_29478;
(statearr_29555[(23)] = inst_29446__$1);

return statearr_29555;
})();
if(cljs.core.truth_(inst_29447)){
var statearr_29556_29618 = state_29478__$1;
(statearr_29556_29618[(1)] = (39));

} else {
var statearr_29557_29619 = state_29478__$1;
(statearr_29557_29619[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (8))){
var inst_29361 = (state_29478[(16)]);
var inst_29360 = (state_29478[(17)]);
var inst_29363 = (inst_29361 < inst_29360);
var inst_29364 = inst_29363;
var state_29478__$1 = state_29478;
if(cljs.core.truth_(inst_29364)){
var statearr_29558_29620 = state_29478__$1;
(statearr_29558_29620[(1)] = (10));

} else {
var statearr_29559_29621 = state_29478__$1;
(statearr_29559_29621[(1)] = (11));

}

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
});})(c__19561__auto___29567,state,m,dchan,dctr,done))
;
return ((function (switch__19496__auto__,c__19561__auto___29567,state,m,dchan,dctr,done){
return (function() {
var reagi$core$mult_STAR__$_state_machine__19497__auto__ = null;
var reagi$core$mult_STAR__$_state_machine__19497__auto____0 = (function (){
var statearr_29563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29563[(0)] = reagi$core$mult_STAR__$_state_machine__19497__auto__);

(statearr_29563[(1)] = (1));

return statearr_29563;
});
var reagi$core$mult_STAR__$_state_machine__19497__auto____1 = (function (state_29478){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_29478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e29564){if((e29564 instanceof Object)){
var ex__19500__auto__ = e29564;
var statearr_29565_29622 = state_29478;
(statearr_29565_29622[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29623 = state_29478;
state_29478 = G__29623;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$mult_STAR__$_state_machine__19497__auto__ = function(state_29478){
switch(arguments.length){
case 0:
return reagi$core$mult_STAR__$_state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$mult_STAR__$_state_machine__19497__auto____1.call(this,state_29478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mult_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mult_STAR__$_state_machine__19497__auto____0;
reagi$core$mult_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mult_STAR__$_state_machine__19497__auto____1;
return reagi$core$mult_STAR__$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___29567,state,m,dchan,dctr,done))
})();
var state__19563__auto__ = (function (){var statearr_29566 = f__19562__auto__.call(null);
(statearr_29566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___29567);

return statearr_29566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___29567,state,m,dchan,dctr,done))
);


return m;
});
/**
 * Protect a collection of child objects from being GCed before the parent.
 */
reagi.core.depend_on = (function reagi$core$depend_on(parent,children){
return null;
});
reagi.core.deref_events = (function reagi$core$deref_events(head){
var temp__4423__auto__ = cljs.core.deref.call(null,head);
if(cljs.core.truth_(temp__4423__auto__)){
var hd = temp__4423__auto__;
return reagi.core.unbox.call(null,hd);
} else {
return undefined;
}
});

/**
 * @interface
 */
reagi.core.Disposable = function(){};

/**
 * Clean up any resources an object has before it goes out of scope. In
 *  Clojure this is called automatically when the object is finalized. In
 *  ClojureScript this must be called manually.
 */
reagi.core.dispose = (function reagi$core$dispose(x){
if((!((x == null))) && (!((x.reagi$core$Disposable$dispose$arity$1 == null)))){
return x.reagi$core$Disposable$dispose$arity$1(x);
} else {
var x__17013__auto__ = (((x == null))?null:x);
var m__17014__auto__ = (reagi.core.dispose[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,x);
} else {
var m__17014__auto____$1 = (reagi.core.dispose["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Disposable.dispose",x);
}
}
}
});

/**
 * Add a function to be called when the object is disposed.
 */
reagi.core.on_dispose = (function reagi$core$on_dispose(x,f){
if((!((x == null))) && (!((x.reagi$core$Disposable$on_dispose$arity$2 == null)))){
return x.reagi$core$Disposable$on_dispose$arity$2(x,f);
} else {
var x__17013__auto__ = (((x == null))?null:x);
var m__17014__auto__ = (reagi.core.on_dispose[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,x,f);
} else {
var m__17014__auto____$1 = (reagi.core.on_dispose["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,x,f);
} else {
throw cljs.core.missing_protocol.call(null,"Disposable.on-dispose",x);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IPending}
 * @implements {reagi.core.Signal}
 * @implements {cljs.core.IDeref}
 * @implements {reagi.core.Disposable}
 * @implements {reagi.core.Observable}
*/
reagi.core.Events = (function (ch,mult,head,closed,disposers){
this.ch = ch;
this.mult = mult;
this.head = head;
this.closed = closed;
this.disposers = disposers;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32769;
})
reagi.core.Events.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return !((cljs.core.deref.call(null,self__.head) == null));
});

reagi.core.Events.prototype.cljs$core$IDeref$_deref$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return reagi.core.deref_events.call(null,self__.head);
});

reagi.core.Events.prototype.call = (function (self__,msg){
var self__ = this;
var self____$1 = this;
var stream = self____$1;
var c__19561__auto___29679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___29679,stream,self____$1){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___29679,stream,self____$1){
return (function (state_29629){
var state_val_29630 = (state_29629[(1)]);
if((state_val_29630 === (1))){
var inst_29625 = reagi.core.box.call(null,msg);
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29629__$1,(2),self__.ch,inst_29625);
} else {
if((state_val_29630 === (2))){
var inst_29627 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29629__$1,inst_29627);
} else {
return null;
}
}
});})(c__19561__auto___29679,stream,self____$1))
;
return ((function (switch__19496__auto__,c__19561__auto___29679,stream,self____$1){
return (function() {
var reagi$core$state_machine__19497__auto__ = null;
var reagi$core$state_machine__19497__auto____0 = (function (){
var statearr_29634 = [null,null,null,null,null,null,null];
(statearr_29634[(0)] = reagi$core$state_machine__19497__auto__);

(statearr_29634[(1)] = (1));

return statearr_29634;
});
var reagi$core$state_machine__19497__auto____1 = (function (state_29629){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_29629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e29635){if((e29635 instanceof Object)){
var ex__19500__auto__ = e29635;
var statearr_29636_29680 = state_29629;
(statearr_29636_29680[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29681 = state_29629;
state_29629 = G__29681;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$state_machine__19497__auto__ = function(state_29629){
switch(arguments.length){
case 0:
return reagi$core$state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$state_machine__19497__auto____1.call(this,state_29629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__19497__auto____0;
reagi$core$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__19497__auto____1;
return reagi$core$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___29679,stream,self____$1))
})();
var state__19563__auto__ = (function (){var statearr_29637 = f__19562__auto__.call(null);
(statearr_29637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___29679);

return statearr_29637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___29679,stream,self____$1))
);


return stream;
});

reagi.core.Events.prototype.apply = (function (self__,args29624){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29624)));
});

reagi.core.Events.prototype.cljs$core$IFn$_invoke$arity$1 = (function (msg){
var self__ = this;
var stream = this;
var c__19561__auto___29682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___29682,stream){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___29682,stream){
return (function (state_29642){
var state_val_29643 = (state_29642[(1)]);
if((state_val_29643 === (1))){
var inst_29638 = reagi.core.box.call(null,msg);
var state_29642__$1 = state_29642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29642__$1,(2),self__.ch,inst_29638);
} else {
if((state_val_29643 === (2))){
var inst_29640 = (state_29642[(2)]);
var state_29642__$1 = state_29642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29642__$1,inst_29640);
} else {
return null;
}
}
});})(c__19561__auto___29682,stream))
;
return ((function (switch__19496__auto__,c__19561__auto___29682,stream){
return (function() {
var reagi$core$state_machine__19497__auto__ = null;
var reagi$core$state_machine__19497__auto____0 = (function (){
var statearr_29647 = [null,null,null,null,null,null,null];
(statearr_29647[(0)] = reagi$core$state_machine__19497__auto__);

(statearr_29647[(1)] = (1));

return statearr_29647;
});
var reagi$core$state_machine__19497__auto____1 = (function (state_29642){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_29642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e29648){if((e29648 instanceof Object)){
var ex__19500__auto__ = e29648;
var statearr_29649_29683 = state_29642;
(statearr_29649_29683[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29684 = state_29642;
state_29642 = G__29684;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$state_machine__19497__auto__ = function(state_29642){
switch(arguments.length){
case 0:
return reagi$core$state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$state_machine__19497__auto____1.call(this,state_29642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__19497__auto____0;
reagi$core$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__19497__auto____1;
return reagi$core$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___29682,stream))
})();
var state__19563__auto__ = (function (){var statearr_29650 = f__19562__auto__.call(null);
(statearr_29650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___29682);

return statearr_29650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___29682,stream))
);


return stream;
});

reagi.core.Events.prototype.reagi$core$Observable$ = true;

reagi.core.Events.prototype.reagi$core$Observable$port$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});

reagi.core.Events.prototype.reagi$core$Observable$listen$arity$2 = (function (_,channel){
var self__ = this;
var ___$1 = this;
var c__19561__auto___29685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___29685,___$1){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___29685,___$1){
return (function (state_29660){
var state_val_29661 = (state_29660[(1)]);
if((state_val_29661 === (1))){
var inst_29651 = (state_29660[(7)]);
var inst_29651__$1 = cljs.core.deref.call(null,self__.head);
var state_29660__$1 = (function (){var statearr_29662 = state_29660;
(statearr_29662[(7)] = inst_29651__$1);

return statearr_29662;
})();
if(cljs.core.truth_(inst_29651__$1)){
var statearr_29663_29686 = state_29660__$1;
(statearr_29663_29686[(1)] = (2));

} else {
var statearr_29664_29687 = state_29660__$1;
(statearr_29664_29687[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (2))){
var inst_29651 = (state_29660[(7)]);
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29660__$1,(5),channel,inst_29651);
} else {
if((state_val_29661 === (3))){
var state_29660__$1 = state_29660;
var statearr_29665_29688 = state_29660__$1;
(statearr_29665_29688[(2)] = null);

(statearr_29665_29688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (4))){
var inst_29657 = (state_29660[(2)]);
var inst_29658 = cljs.core.async.tap.call(null,self__.mult,channel);
var state_29660__$1 = (function (){var statearr_29666 = state_29660;
(statearr_29666[(8)] = inst_29657);

return statearr_29666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29660__$1,inst_29658);
} else {
if((state_val_29661 === (5))){
var inst_29654 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
var statearr_29667_29689 = state_29660__$1;
(statearr_29667_29689[(2)] = inst_29654);

(statearr_29667_29689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__19561__auto___29685,___$1))
;
return ((function (switch__19496__auto__,c__19561__auto___29685,___$1){
return (function() {
var reagi$core$state_machine__19497__auto__ = null;
var reagi$core$state_machine__19497__auto____0 = (function (){
var statearr_29671 = [null,null,null,null,null,null,null,null,null];
(statearr_29671[(0)] = reagi$core$state_machine__19497__auto__);

(statearr_29671[(1)] = (1));

return statearr_29671;
});
var reagi$core$state_machine__19497__auto____1 = (function (state_29660){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_29660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e29672){if((e29672 instanceof Object)){
var ex__19500__auto__ = e29672;
var statearr_29673_29690 = state_29660;
(statearr_29673_29690[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29691 = state_29660;
state_29660 = G__29691;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$state_machine__19497__auto__ = function(state_29660){
switch(arguments.length){
case 0:
return reagi$core$state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$state_machine__19497__auto____1.call(this,state_29660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__19497__auto____0;
reagi$core$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__19497__auto____1;
return reagi$core$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___29685,___$1))
})();
var state__19563__auto__ = (function (){var statearr_29674 = f__19562__auto__.call(null);
(statearr_29674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___29685);

return statearr_29674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___29685,___$1))
);


return channel;
});

reagi.core.Events.prototype.reagi$core$Signal$ = true;

reagi.core.Events.prototype.reagi$core$Signal$complete_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__16358__auto__ = cljs.core.deref.call(null,self__.closed);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return (cljs.core.deref.call(null,self__.head) instanceof reagi.core.Completed);
}
});

reagi.core.Events.prototype.reagi$core$Disposable$ = true;

reagi.core.Events.prototype.reagi$core$Disposable$dispose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var seq__29675_29692 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.disposers));
var chunk__29676_29693 = null;
var count__29677_29694 = (0);
var i__29678_29695 = (0);
while(true){
if((i__29678_29695 < count__29677_29694)){
var d_29696 = cljs.core._nth.call(null,chunk__29676_29693,i__29678_29695);
d_29696.call(null);

var G__29697 = seq__29675_29692;
var G__29698 = chunk__29676_29693;
var G__29699 = count__29677_29694;
var G__29700 = (i__29678_29695 + (1));
seq__29675_29692 = G__29697;
chunk__29676_29693 = G__29698;
count__29677_29694 = G__29699;
i__29678_29695 = G__29700;
continue;
} else {
var temp__4425__auto___29701 = cljs.core.seq.call(null,seq__29675_29692);
if(temp__4425__auto___29701){
var seq__29675_29702__$1 = temp__4425__auto___29701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29675_29702__$1)){
var c__17161__auto___29703 = cljs.core.chunk_first.call(null,seq__29675_29702__$1);
var G__29704 = cljs.core.chunk_rest.call(null,seq__29675_29702__$1);
var G__29705 = c__17161__auto___29703;
var G__29706 = cljs.core.count.call(null,c__17161__auto___29703);
var G__29707 = (0);
seq__29675_29692 = G__29704;
chunk__29676_29693 = G__29705;
count__29677_29694 = G__29706;
i__29678_29695 = G__29707;
continue;
} else {
var d_29708 = cljs.core.first.call(null,seq__29675_29702__$1);
d_29708.call(null);

var G__29709 = cljs.core.next.call(null,seq__29675_29702__$1);
var G__29710 = null;
var G__29711 = (0);
var G__29712 = (0);
seq__29675_29692 = G__29709;
chunk__29676_29693 = G__29710;
count__29677_29694 = G__29711;
i__29678_29695 = G__29712;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.close_BANG_.call(null,self__.ch);
});

reagi.core.Events.prototype.reagi$core$Disposable$on_dispose$arity$2 = (function (_,d){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.disposers,cljs.core.conj,d);
});

reagi.core.Events.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.Symbol(null,"disposers","disposers",-1899395189,null)], null);
});

reagi.core.Events.cljs$lang$type = true;

reagi.core.Events.cljs$lang$ctorStr = "reagi.core/Events";

reagi.core.Events.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"reagi.core/Events");
});

reagi.core.__GT_Events = (function reagi$core$__GT_Events(ch,mult,head,closed,disposers){
return (new reagi.core.Events(ch,mult,head,closed,disposers));
});

reagi.core.no_op = (function reagi$core$no_op(){
return null;
});
reagi.core.no_value = (new Object());
reagi.core.no_value_QMARK_ = (function reagi$core$no_value_QMARK_(x){
return (x === reagi.core.no_value);
});
/**
 * Create a referential stream of events. An initial value may optionally be
 *   supplied, otherwise the stream will be unrealized until the first value is
 *   pushed to it. Event streams will deref to the latest value pushed to the
 *   stream.
 */
reagi.core.events = (function reagi$core$events(var_args){
var args29713 = [];
var len__17416__auto___29763 = arguments.length;
var i__17417__auto___29764 = (0);
while(true){
if((i__17417__auto___29764 < len__17416__auto___29763)){
args29713.push((arguments[i__17417__auto___29764]));

var G__29765 = (i__17417__auto___29764 + (1));
i__17417__auto___29764 = G__29765;
continue;
} else {
}
break;
}

var G__29715 = args29713.length;
switch (G__29715) {
case 0:
return reagi.core.events.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagi.core.events.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29713.length)].join('')));

}
});

reagi.core.events.cljs$core$IFn$_invoke$arity$0 = (function (){
return reagi.core.events.call(null,reagi.core.no_value);
});

reagi.core.events.cljs$core$IFn$_invoke$arity$1 = (function (init){
var in$ = cljs.core.async.chan.call(null);
var closed = cljs.core.atom.call(null,false);
var head = cljs.core.atom.call(null,(cljs.core.truth_(reagi.core.no_value_QMARK_.call(null,init))?null:reagi.core.box.call(null,init)));
var out = cljs.core.async.chan.call(null);
var mult = reagi.core.mult_STAR_.call(null,out);
var c__19561__auto___29767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___29767,in$,closed,head,out,mult){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___29767,in$,closed,head,out,mult){
return (function (state_29739){
var state_val_29740 = (state_29739[(1)]);
if((state_val_29740 === (7))){
var inst_29725 = (state_29739[(7)]);
var inst_29725__$1 = (state_29739[(2)]);
var state_29739__$1 = (function (){var statearr_29741 = state_29739;
(statearr_29741[(7)] = inst_29725__$1);

return statearr_29741;
})();
if(cljs.core.truth_(inst_29725__$1)){
var statearr_29742_29768 = state_29739__$1;
(statearr_29742_29768[(1)] = (8));

} else {
var statearr_29743_29769 = state_29739__$1;
(statearr_29743_29769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (1))){
var inst_29716 = init;
var state_29739__$1 = (function (){var statearr_29744 = state_29739;
(statearr_29744[(8)] = inst_29716);

return statearr_29744;
})();
var statearr_29745_29770 = state_29739__$1;
(statearr_29745_29770[(2)] = null);

(statearr_29745_29770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (4))){
var inst_29720 = cljs.core.async.close_BANG_.call(null,in$);
var state_29739__$1 = state_29739;
var statearr_29746_29771 = state_29739__$1;
(statearr_29746_29771[(2)] = inst_29720);

(statearr_29746_29771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (6))){
var inst_29723 = (state_29739[(2)]);
var state_29739__$1 = (function (){var statearr_29747 = state_29739;
(statearr_29747[(9)] = inst_29723);

return statearr_29747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29739__$1,(7),in$);
} else {
if((state_val_29740 === (3))){
var inst_29735 = (state_29739[(2)]);
var inst_29736 = cljs.core.async.close_BANG_.call(null,out);
var inst_29737 = cljs.core.reset_BANG_.call(null,closed,true);
var state_29739__$1 = (function (){var statearr_29748 = state_29739;
(statearr_29748[(10)] = inst_29736);

(statearr_29748[(11)] = inst_29735);

return statearr_29748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29739__$1,inst_29737);
} else {
if((state_val_29740 === (2))){
var inst_29716 = (state_29739[(8)]);
var inst_29718 = (inst_29716 instanceof reagi.core.Completed);
var state_29739__$1 = state_29739;
if(cljs.core.truth_(inst_29718)){
var statearr_29749_29772 = state_29739__$1;
(statearr_29749_29772[(1)] = (4));

} else {
var statearr_29750_29773 = state_29739__$1;
(statearr_29750_29773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (11))){
var inst_29725 = (state_29739[(7)]);
var inst_29728 = (state_29739[(2)]);
var inst_29729 = cljs.core.reset_BANG_.call(null,head,inst_29725);
var inst_29716 = inst_29725;
var state_29739__$1 = (function (){var statearr_29751 = state_29739;
(statearr_29751[(12)] = inst_29729);

(statearr_29751[(8)] = inst_29716);

(statearr_29751[(13)] = inst_29728);

return statearr_29751;
})();
var statearr_29752_29774 = state_29739__$1;
(statearr_29752_29774[(2)] = null);

(statearr_29752_29774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (9))){
var state_29739__$1 = state_29739;
var statearr_29753_29775 = state_29739__$1;
(statearr_29753_29775[(2)] = null);

(statearr_29753_29775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (5))){
var state_29739__$1 = state_29739;
var statearr_29754_29776 = state_29739__$1;
(statearr_29754_29776[(2)] = null);

(statearr_29754_29776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (10))){
var inst_29733 = (state_29739[(2)]);
var state_29739__$1 = state_29739;
var statearr_29755_29777 = state_29739__$1;
(statearr_29755_29777[(2)] = inst_29733);

(statearr_29755_29777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (8))){
var inst_29725 = (state_29739[(7)]);
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29739__$1,(11),out,inst_29725);
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
});})(c__19561__auto___29767,in$,closed,head,out,mult))
;
return ((function (switch__19496__auto__,c__19561__auto___29767,in$,closed,head,out,mult){
return (function() {
var reagi$core$state_machine__19497__auto__ = null;
var reagi$core$state_machine__19497__auto____0 = (function (){
var statearr_29759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29759[(0)] = reagi$core$state_machine__19497__auto__);

(statearr_29759[(1)] = (1));

return statearr_29759;
});
var reagi$core$state_machine__19497__auto____1 = (function (state_29739){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_29739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e29760){if((e29760 instanceof Object)){
var ex__19500__auto__ = e29760;
var statearr_29761_29778 = state_29739;
(statearr_29761_29778[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29779 = state_29739;
state_29739 = G__29779;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$state_machine__19497__auto__ = function(state_29739){
switch(arguments.length){
case 0:
return reagi$core$state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$state_machine__19497__auto____1.call(this,state_29739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__19497__auto____0;
reagi$core$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__19497__auto____1;
return reagi$core$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___29767,in$,closed,head,out,mult))
})();
var state__19563__auto__ = (function (){var statearr_29762 = f__19562__auto__.call(null);
(statearr_29762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___29767);

return statearr_29762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___29767,in$,closed,head,out,mult))
);


return (new reagi.core.Events(in$,mult,head,closed,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});

reagi.core.events.cljs$lang$maxFixedArity = 1;
/**
 * Return true if the object is a stream of events.
 */
reagi.core.events_QMARK_ = (function reagi$core$events_QMARK_(x){
return (x instanceof reagi.core.Events);
});
/**
 * Create a completed event stream for a single value.
 */
reagi.core.once = (function reagi$core$once(value){
return reagi.core.events.call(null,reagi.core.completed.call(null,value));
});
/**
 * Deliver one or more messages to an event stream.
 */
reagi.core.deliver = (function reagi$core$deliver(var_args){
var args29780 = [];
var len__17416__auto___29790 = arguments.length;
var i__17417__auto___29791 = (0);
while(true){
if((i__17417__auto___29791 < len__17416__auto___29790)){
args29780.push((arguments[i__17417__auto___29791]));

var G__29792 = (i__17417__auto___29791 + (1));
i__17417__auto___29791 = G__29792;
continue;
} else {
}
break;
}

var G__29785 = args29780.length;
switch (G__29785) {
case 1:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17435__auto__ = (new cljs.core.IndexedSeq(args29780.slice((2)),(0)));
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17435__auto__);

}
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return null;
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$2 = (function (stream,msg){
return stream.call(null,msg);
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic = (function (stream,msg,msgs){
var seq__29786 = cljs.core.seq.call(null,cljs.core.cons.call(null,msg,msgs));
var chunk__29787 = null;
var count__29788 = (0);
var i__29789 = (0);
while(true){
if((i__29789 < count__29788)){
var m = cljs.core._nth.call(null,chunk__29787,i__29789);
stream.call(null,m);

var G__29794 = seq__29786;
var G__29795 = chunk__29787;
var G__29796 = count__29788;
var G__29797 = (i__29789 + (1));
seq__29786 = G__29794;
chunk__29787 = G__29795;
count__29788 = G__29796;
i__29789 = G__29797;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29786);
if(temp__4425__auto__){
var seq__29786__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29786__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__29786__$1);
var G__29798 = cljs.core.chunk_rest.call(null,seq__29786__$1);
var G__29799 = c__17161__auto__;
var G__29800 = cljs.core.count.call(null,c__17161__auto__);
var G__29801 = (0);
seq__29786 = G__29798;
chunk__29787 = G__29799;
count__29788 = G__29800;
i__29789 = G__29801;
continue;
} else {
var m = cljs.core.first.call(null,seq__29786__$1);
stream.call(null,m);

var G__29802 = cljs.core.next.call(null,seq__29786__$1);
var G__29803 = null;
var G__29804 = (0);
var G__29805 = (0);
seq__29786 = G__29802;
chunk__29787 = G__29803;
count__29788 = G__29804;
i__29789 = G__29805;
continue;
}
} else {
return null;
}
}
break;
}
});

reagi.core.deliver.cljs$lang$applyTo = (function (seq29781){
var G__29782 = cljs.core.first.call(null,seq29781);
var seq29781__$1 = cljs.core.next.call(null,seq29781);
var G__29783 = cljs.core.first.call(null,seq29781__$1);
var seq29781__$2 = cljs.core.next.call(null,seq29781__$1);
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic(G__29782,G__29783,seq29781__$2);
});

reagi.core.deliver.cljs$lang$maxFixedArity = (2);
/**
 * Deliver events on an event stream to a core.async channel. Returns the
 *   channel.
 * 
 *   The events from the stream cannot include nil. The channel will be closed when
 *   the event stream is complete.
 */
reagi.core.subscribe = (function reagi$core$subscribe(stream,channel){
reagi.core.listen.call(null,stream,cljs.core.async.map_GT_.call(null,reagi.core.unbox,channel));

reagi.core.depend_on.call(null,channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return channel;
});
reagi.core.close_all_BANG_ = (function reagi$core$close_all_BANG_(chs){
var seq__29810 = cljs.core.seq.call(null,chs);
var chunk__29811 = null;
var count__29812 = (0);
var i__29813 = (0);
while(true){
if((i__29813 < count__29812)){
var ch = cljs.core._nth.call(null,chunk__29811,i__29813);
cljs.core.async.close_BANG_.call(null,ch);

var G__29814 = seq__29810;
var G__29815 = chunk__29811;
var G__29816 = count__29812;
var G__29817 = (i__29813 + (1));
seq__29810 = G__29814;
chunk__29811 = G__29815;
count__29812 = G__29816;
i__29813 = G__29817;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29810);
if(temp__4425__auto__){
var seq__29810__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29810__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__29810__$1);
var G__29818 = cljs.core.chunk_rest.call(null,seq__29810__$1);
var G__29819 = c__17161__auto__;
var G__29820 = cljs.core.count.call(null,c__17161__auto__);
var G__29821 = (0);
seq__29810 = G__29818;
chunk__29811 = G__29819;
count__29812 = G__29820;
i__29813 = G__29821;
continue;
} else {
var ch = cljs.core.first.call(null,seq__29810__$1);
cljs.core.async.close_BANG_.call(null,ch);

var G__29822 = cljs.core.next.call(null,seq__29810__$1);
var G__29823 = null;
var G__29824 = (0);
var G__29825 = (0);
seq__29810 = G__29822;
chunk__29811 = G__29823;
count__29812 = G__29824;
i__29813 = G__29825;
continue;
}
} else {
return null;
}
}
break;
}
});
reagi.core.listen_all = (function reagi$core$listen_all(streams){
return cljs.core.mapv.call(null,(function (p1__29826_SHARP_){
return reagi.core.listen.call(null,p1__29826_SHARP_,cljs.core.async.chan.call(null));
}),streams);
});
reagi.core.connect_port = (function reagi$core$connect_port(var_args){
var args__17423__auto__ = [];
var len__17416__auto___29830 = arguments.length;
var i__17417__auto___29831 = (0);
while(true){
if((i__17417__auto___29831 < len__17416__auto___29830)){
args__17423__auto__.push((arguments[i__17417__auto___29831]));

var G__29832 = (i__17417__auto___29831 + (1));
i__17417__auto___29831 = G__29832;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((2) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((2)),(0))):null);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17424__auto__);
});

reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic = (function (stream,f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagi.core.port.call(null,stream)], null)));
});

reagi.core.connect_port.cljs$lang$maxFixedArity = (2);

reagi.core.connect_port.cljs$lang$applyTo = (function (seq29827){
var G__29828 = cljs.core.first.call(null,seq29827);
var seq29827__$1 = cljs.core.next.call(null,seq29827);
var G__29829 = cljs.core.first.call(null,seq29827__$1);
var seq29827__$2 = cljs.core.next.call(null,seq29827__$1);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic(G__29828,G__29829,seq29827__$2);
});
/**
 * Combine multiple streams into one. All events from the input streams are
 *   pushed to the returned stream.
 */
reagi.core.merge = (function reagi$core$merge(var_args){
var args__17423__auto__ = [];
var len__17416__auto___29835 = arguments.length;
var i__17417__auto___29836 = (0);
while(true){
if((i__17417__auto___29836 < len__17416__auto___29835)){
args__17423__auto__.push((arguments[i__17417__auto___29836]));

var G__29837 = (i__17417__auto___29836 + (1));
i__17417__auto___29836 = G__29837;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((0) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((0)),(0))):null);
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__17424__auto__);
});

reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__29834 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__29834,cljs.core.async.pipe,cljs.core.async.merge.call(null,chs));

reagi.core.on_dispose.call(null,G__29834,((function (G__29834,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__29834,chs))
);

reagi.core.depend_on.call(null,G__29834,streams);

return G__29834;
});

reagi.core.merge.cljs$lang$maxFixedArity = (0);

reagi.core.merge.cljs$lang$applyTo = (function (seq29833){
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29833));
});
reagi.core.zip_ch = (function reagi$core$zip_ch(ins,out){
var index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i], null);
}),ins));
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__,index){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__,index){
return (function (state_29946){
var state_val_29947 = (state_29946[(1)]);
if((state_val_29947 === (7))){
var inst_29919 = (state_29946[(7)]);
var inst_29918 = (state_29946[(2)]);
var inst_29919__$1 = cljs.core.nth.call(null,inst_29918,(0),null);
var inst_29920 = cljs.core.nth.call(null,inst_29918,(1),null);
var state_29946__$1 = (function (){var statearr_29949 = state_29946;
(statearr_29949[(8)] = inst_29920);

(statearr_29949[(7)] = inst_29919__$1);

return statearr_29949;
})();
if(cljs.core.truth_(inst_29919__$1)){
var statearr_29950_29976 = state_29946__$1;
(statearr_29950_29976[(1)] = (8));

} else {
var statearr_29951_29977 = state_29946__$1;
(statearr_29951_29977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (1))){
var inst_29907 = cljs.core.constantly.call(null,reagi.core.no_value);
var inst_29908 = cljs.core.mapv.call(null,inst_29907,ins);
var inst_29909 = cljs.core.set.call(null,ins);
var inst_29910 = inst_29908;
var inst_29911 = inst_29909;
var state_29946__$1 = (function (){var statearr_29952 = state_29946;
(statearr_29952[(9)] = inst_29911);

(statearr_29952[(10)] = inst_29910);

return statearr_29952;
})();
var statearr_29953_29978 = state_29946__$1;
(statearr_29953_29978[(2)] = null);

(statearr_29953_29978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (4))){
var inst_29911 = (state_29946[(9)]);
var inst_29916 = cljs.core.vec.call(null,inst_29911);
var state_29946__$1 = state_29946;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29946__$1,(7),inst_29916);
} else {
if((state_val_29947 === (13))){
var inst_29911 = (state_29946[(9)]);
var inst_29924 = (state_29946[(11)]);
var inst_29932 = (state_29946[(2)]);
var tmp29948 = inst_29911;
var inst_29910 = inst_29924;
var inst_29911__$1 = tmp29948;
var state_29946__$1 = (function (){var statearr_29954 = state_29946;
(statearr_29954[(9)] = inst_29911__$1);

(statearr_29954[(10)] = inst_29910);

(statearr_29954[(12)] = inst_29932);

return statearr_29954;
})();
var statearr_29955_29979 = state_29946__$1;
(statearr_29955_29979[(2)] = null);

(statearr_29955_29979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (6))){
var inst_29942 = (state_29946[(2)]);
var state_29946__$1 = state_29946;
var statearr_29956_29980 = state_29946__$1;
(statearr_29956_29980[(2)] = inst_29942);

(statearr_29956_29980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (3))){
var inst_29944 = (state_29946[(2)]);
var state_29946__$1 = state_29946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29946__$1,inst_29944);
} else {
if((state_val_29947 === (12))){
var inst_29924 = (state_29946[(11)]);
var inst_29928 = reagi.core.box.call(null,inst_29924);
var state_29946__$1 = state_29946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29946__$1,(14),out,inst_29928);
} else {
if((state_val_29947 === (2))){
var inst_29911 = (state_29946[(9)]);
var inst_29913 = cljs.core.seq.call(null,inst_29911);
var state_29946__$1 = state_29946;
if(inst_29913){
var statearr_29958_29981 = state_29946__$1;
(statearr_29958_29981[(1)] = (4));

} else {
var statearr_29959_29982 = state_29946__$1;
(statearr_29959_29982[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (11))){
var state_29946__$1 = state_29946;
var statearr_29960_29983 = state_29946__$1;
(statearr_29960_29983[(2)] = null);

(statearr_29960_29983[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (9))){
var inst_29920 = (state_29946[(8)]);
var inst_29911 = (state_29946[(9)]);
var inst_29910 = (state_29946[(10)]);
var inst_29935 = cljs.core.disj.call(null,inst_29911,inst_29920);
var tmp29957 = inst_29910;
var inst_29910__$1 = tmp29957;
var inst_29911__$1 = inst_29935;
var state_29946__$1 = (function (){var statearr_29961 = state_29946;
(statearr_29961[(9)] = inst_29911__$1);

(statearr_29961[(10)] = inst_29910__$1);

return statearr_29961;
})();
var statearr_29962_29984 = state_29946__$1;
(statearr_29962_29984[(2)] = null);

(statearr_29962_29984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (5))){
var inst_29940 = cljs.core.async.close_BANG_.call(null,out);
var state_29946__$1 = state_29946;
var statearr_29963_29985 = state_29946__$1;
(statearr_29963_29985[(2)] = inst_29940);

(statearr_29963_29985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (14))){
var inst_29930 = (state_29946[(2)]);
var state_29946__$1 = state_29946;
var statearr_29964_29986 = state_29946__$1;
(statearr_29964_29986[(2)] = inst_29930);

(statearr_29964_29986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (10))){
var inst_29938 = (state_29946[(2)]);
var state_29946__$1 = state_29946;
var statearr_29965_29987 = state_29946__$1;
(statearr_29965_29987[(2)] = inst_29938);

(statearr_29965_29987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (8))){
var inst_29920 = (state_29946[(8)]);
var inst_29919 = (state_29946[(7)]);
var inst_29924 = (state_29946[(11)]);
var inst_29910 = (state_29946[(10)]);
var inst_29922 = index.call(null,inst_29920);
var inst_29923 = reagi.core.unbox.call(null,inst_29919);
var inst_29924__$1 = cljs.core.assoc.call(null,inst_29910,inst_29922,inst_29923);
var inst_29925 = cljs.core.some.call(null,reagi.core.no_value_QMARK_,inst_29924__$1);
var state_29946__$1 = (function (){var statearr_29966 = state_29946;
(statearr_29966[(11)] = inst_29924__$1);

return statearr_29966;
})();
if(cljs.core.truth_(inst_29925)){
var statearr_29967_29988 = state_29946__$1;
(statearr_29967_29988[(1)] = (11));

} else {
var statearr_29968_29989 = state_29946__$1;
(statearr_29968_29989[(1)] = (12));

}

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
});})(c__19561__auto__,index))
;
return ((function (switch__19496__auto__,c__19561__auto__,index){
return (function() {
var reagi$core$zip_ch_$_state_machine__19497__auto__ = null;
var reagi$core$zip_ch_$_state_machine__19497__auto____0 = (function (){
var statearr_29972 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29972[(0)] = reagi$core$zip_ch_$_state_machine__19497__auto__);

(statearr_29972[(1)] = (1));

return statearr_29972;
});
var reagi$core$zip_ch_$_state_machine__19497__auto____1 = (function (state_29946){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_29946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e29973){if((e29973 instanceof Object)){
var ex__19500__auto__ = e29973;
var statearr_29974_29990 = state_29946;
(statearr_29974_29990[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29991 = state_29946;
state_29946 = G__29991;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$zip_ch_$_state_machine__19497__auto__ = function(state_29946){
switch(arguments.length){
case 0:
return reagi$core$zip_ch_$_state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$zip_ch_$_state_machine__19497__auto____1.call(this,state_29946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$zip_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$zip_ch_$_state_machine__19497__auto____0;
reagi$core$zip_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$zip_ch_$_state_machine__19497__auto____1;
return reagi$core$zip_ch_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__,index))
})();
var state__19563__auto__ = (function (){var statearr_29975 = f__19562__auto__.call(null);
(statearr_29975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_29975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__,index))
);

return c__19561__auto__;
});
/**
 * Combine multiple streams into one. On an event from any input stream, a
 *   vector will be pushed to the returned stream containing the latest events
 *   of all input streams.
 */
reagi.core.zip = (function reagi$core$zip(var_args){
var args__17423__auto__ = [];
var len__17416__auto___29994 = arguments.length;
var i__17417__auto___29995 = (0);
while(true){
if((i__17417__auto___29995 < len__17416__auto___29994)){
args__17423__auto__.push((arguments[i__17417__auto___29995]));

var G__29996 = (i__17417__auto___29995 + (1));
i__17417__auto___29995 = G__29996;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((0) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((0)),(0))):null);
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__17424__auto__);
});

reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__29993 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__29993,reagi.core.zip_ch,chs);

reagi.core.on_dispose.call(null,G__29993,((function (G__29993,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__29993,chs))
);

reagi.core.depend_on.call(null,G__29993,streams);

return G__29993;
});

reagi.core.zip.cljs$lang$maxFixedArity = (0);

reagi.core.zip.cljs$lang$applyTo = (function (seq29992){
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29992));
});
reagi.core.mapcat_ch = (function reagi$core$mapcat_ch(f,in$,out){
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__){
return (function (state_30152){
var state_val_30153 = (state_30152[(1)]);
if((state_val_30153 === (7))){
var inst_30148 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30154_30191 = state_30152__$1;
(statearr_30154_30191[(2)] = inst_30148);

(statearr_30154_30191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (20))){
var inst_30120 = (state_30152[(7)]);
var inst_30132 = (state_30152[(2)]);
var inst_30133 = cljs.core.next.call(null,inst_30120);
var inst_30105 = inst_30133;
var inst_30106 = null;
var inst_30107 = (0);
var inst_30108 = (0);
var state_30152__$1 = (function (){var statearr_30155 = state_30152;
(statearr_30155[(8)] = inst_30105);

(statearr_30155[(9)] = inst_30108);

(statearr_30155[(10)] = inst_30132);

(statearr_30155[(11)] = inst_30107);

(statearr_30155[(12)] = inst_30106);

return statearr_30155;
})();
var statearr_30156_30192 = state_30152__$1;
(statearr_30156_30192[(2)] = null);

(statearr_30156_30192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (1))){
var state_30152__$1 = state_30152;
var statearr_30157_30193 = state_30152__$1;
(statearr_30157_30193[(2)] = null);

(statearr_30157_30193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (4))){
var inst_30096 = (state_30152[(13)]);
var inst_30096__$1 = (state_30152[(2)]);
var state_30152__$1 = (function (){var statearr_30161 = state_30152;
(statearr_30161[(13)] = inst_30096__$1);

return statearr_30161;
})();
if(cljs.core.truth_(inst_30096__$1)){
var statearr_30162_30194 = state_30152__$1;
(statearr_30162_30194[(1)] = (5));

} else {
var statearr_30163_30195 = state_30152__$1;
(statearr_30163_30195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (15))){
var state_30152__$1 = state_30152;
var statearr_30164_30196 = state_30152__$1;
(statearr_30164_30196[(2)] = null);

(statearr_30164_30196[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (13))){
var inst_30105 = (state_30152[(8)]);
var inst_30108 = (state_30152[(9)]);
var inst_30107 = (state_30152[(11)]);
var inst_30106 = (state_30152[(12)]);
var inst_30116 = (state_30152[(2)]);
var inst_30117 = (inst_30108 + (1));
var tmp30158 = inst_30105;
var tmp30159 = inst_30107;
var tmp30160 = inst_30106;
var inst_30105__$1 = tmp30158;
var inst_30106__$1 = tmp30160;
var inst_30107__$1 = tmp30159;
var inst_30108__$1 = inst_30117;
var state_30152__$1 = (function (){var statearr_30165 = state_30152;
(statearr_30165[(8)] = inst_30105__$1);

(statearr_30165[(9)] = inst_30108__$1);

(statearr_30165[(14)] = inst_30116);

(statearr_30165[(11)] = inst_30107__$1);

(statearr_30165[(12)] = inst_30106__$1);

return statearr_30165;
})();
var statearr_30166_30197 = state_30152__$1;
(statearr_30166_30197[(2)] = null);

(statearr_30166_30197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (6))){
var inst_30146 = cljs.core.async.close_BANG_.call(null,out);
var state_30152__$1 = state_30152;
var statearr_30167_30198 = state_30152__$1;
(statearr_30167_30198[(2)] = inst_30146);

(statearr_30167_30198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (17))){
var inst_30120 = (state_30152[(7)]);
var inst_30124 = cljs.core.chunk_first.call(null,inst_30120);
var inst_30125 = cljs.core.chunk_rest.call(null,inst_30120);
var inst_30126 = cljs.core.count.call(null,inst_30124);
var inst_30105 = inst_30125;
var inst_30106 = inst_30124;
var inst_30107 = inst_30126;
var inst_30108 = (0);
var state_30152__$1 = (function (){var statearr_30168 = state_30152;
(statearr_30168[(8)] = inst_30105);

(statearr_30168[(9)] = inst_30108);

(statearr_30168[(11)] = inst_30107);

(statearr_30168[(12)] = inst_30106);

return statearr_30168;
})();
var statearr_30169_30199 = state_30152__$1;
(statearr_30169_30199[(2)] = null);

(statearr_30169_30199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (3))){
var inst_30150 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30152__$1,inst_30150);
} else {
if((state_val_30153 === (12))){
var inst_30141 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30170_30200 = state_30152__$1;
(statearr_30170_30200[(2)] = inst_30141);

(statearr_30170_30200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (2))){
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30152__$1,(4),in$);
} else {
if((state_val_30153 === (19))){
var inst_30136 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30171_30201 = state_30152__$1;
(statearr_30171_30201[(2)] = inst_30136);

(statearr_30171_30201[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (11))){
var inst_30105 = (state_30152[(8)]);
var inst_30120 = (state_30152[(7)]);
var inst_30120__$1 = cljs.core.seq.call(null,inst_30105);
var state_30152__$1 = (function (){var statearr_30172 = state_30152;
(statearr_30172[(7)] = inst_30120__$1);

return statearr_30172;
})();
if(inst_30120__$1){
var statearr_30173_30202 = state_30152__$1;
(statearr_30173_30202[(1)] = (14));

} else {
var statearr_30174_30203 = state_30152__$1;
(statearr_30174_30203[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (9))){
var inst_30143 = (state_30152[(2)]);
var state_30152__$1 = (function (){var statearr_30175 = state_30152;
(statearr_30175[(15)] = inst_30143);

return statearr_30175;
})();
var statearr_30176_30204 = state_30152__$1;
(statearr_30176_30204[(2)] = null);

(statearr_30176_30204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (5))){
var inst_30096 = (state_30152[(13)]);
var inst_30098 = reagi.core.unbox.call(null,inst_30096);
var inst_30099 = f.call(null,inst_30098);
var inst_30104 = cljs.core.seq.call(null,inst_30099);
var inst_30105 = inst_30104;
var inst_30106 = null;
var inst_30107 = (0);
var inst_30108 = (0);
var state_30152__$1 = (function (){var statearr_30177 = state_30152;
(statearr_30177[(8)] = inst_30105);

(statearr_30177[(9)] = inst_30108);

(statearr_30177[(11)] = inst_30107);

(statearr_30177[(12)] = inst_30106);

return statearr_30177;
})();
var statearr_30178_30205 = state_30152__$1;
(statearr_30178_30205[(2)] = null);

(statearr_30178_30205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (14))){
var inst_30120 = (state_30152[(7)]);
var inst_30122 = cljs.core.chunked_seq_QMARK_.call(null,inst_30120);
var state_30152__$1 = state_30152;
if(inst_30122){
var statearr_30179_30206 = state_30152__$1;
(statearr_30179_30206[(1)] = (17));

} else {
var statearr_30180_30207 = state_30152__$1;
(statearr_30180_30207[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (16))){
var inst_30139 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30181_30208 = state_30152__$1;
(statearr_30181_30208[(2)] = inst_30139);

(statearr_30181_30208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (10))){
var inst_30108 = (state_30152[(9)]);
var inst_30106 = (state_30152[(12)]);
var inst_30113 = cljs.core._nth.call(null,inst_30106,inst_30108);
var inst_30114 = reagi.core.box.call(null,inst_30113);
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30152__$1,(13),out,inst_30114);
} else {
if((state_val_30153 === (18))){
var inst_30120 = (state_30152[(7)]);
var inst_30129 = cljs.core.first.call(null,inst_30120);
var inst_30130 = reagi.core.box.call(null,inst_30129);
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30152__$1,(20),out,inst_30130);
} else {
if((state_val_30153 === (8))){
var inst_30108 = (state_30152[(9)]);
var inst_30107 = (state_30152[(11)]);
var inst_30110 = (inst_30108 < inst_30107);
var inst_30111 = inst_30110;
var state_30152__$1 = state_30152;
if(cljs.core.truth_(inst_30111)){
var statearr_30182_30209 = state_30152__$1;
(statearr_30182_30209[(1)] = (10));

} else {
var statearr_30183_30210 = state_30152__$1;
(statearr_30183_30210[(1)] = (11));

}

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
});})(c__19561__auto__))
;
return ((function (switch__19496__auto__,c__19561__auto__){
return (function() {
var reagi$core$mapcat_ch_$_state_machine__19497__auto__ = null;
var reagi$core$mapcat_ch_$_state_machine__19497__auto____0 = (function (){
var statearr_30187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30187[(0)] = reagi$core$mapcat_ch_$_state_machine__19497__auto__);

(statearr_30187[(1)] = (1));

return statearr_30187;
});
var reagi$core$mapcat_ch_$_state_machine__19497__auto____1 = (function (state_30152){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_30152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e30188){if((e30188 instanceof Object)){
var ex__19500__auto__ = e30188;
var statearr_30189_30211 = state_30152;
(statearr_30189_30211[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30212 = state_30152;
state_30152 = G__30212;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$mapcat_ch_$_state_machine__19497__auto__ = function(state_30152){
switch(arguments.length){
case 0:
return reagi$core$mapcat_ch_$_state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$mapcat_ch_$_state_machine__19497__auto____1.call(this,state_30152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$mapcat_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mapcat_ch_$_state_machine__19497__auto____0;
reagi$core$mapcat_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mapcat_ch_$_state_machine__19497__auto____1;
return reagi$core$mapcat_ch_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__))
})();
var state__19563__auto__ = (function (){var statearr_30190 = f__19562__auto__.call(null);
(statearr_30190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_30190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__))
);

return c__19561__auto__;
});
/**
 * Mapcat a function over a stream.
 */
reagi.core.mapcat = (function reagi$core$mapcat(var_args){
var args30213 = [];
var len__17416__auto___30220 = arguments.length;
var i__17417__auto___30221 = (0);
while(true){
if((i__17417__auto___30221 < len__17416__auto___30220)){
args30213.push((arguments[i__17417__auto___30221]));

var G__30222 = (i__17417__auto___30221 + (1));
i__17417__auto___30221 = G__30222;
continue;
} else {
}
break;
}

var G__30218 = args30213.length;
switch (G__30218) {
case 2:
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17435__auto__ = (new cljs.core.IndexedSeq(args30213.slice((2)),(0)));
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17435__auto__);

}
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__30219 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__30219,reagi.core.mapcat_ch,f,ch);

reagi.core.on_dispose.call(null,G__30219,((function (G__30219,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__30219,ch))
);

reagi.core.depend_on.call(null,G__30219,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__30219;
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic = (function (f,stream,streams){
return reagi.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.apply,f),cljs.core.apply.call(null,reagi.core.zip,stream,streams));
});

reagi.core.mapcat.cljs$lang$applyTo = (function (seq30214){
var G__30215 = cljs.core.first.call(null,seq30214);
var seq30214__$1 = cljs.core.next.call(null,seq30214);
var G__30216 = cljs.core.first.call(null,seq30214__$1);
var seq30214__$2 = cljs.core.next.call(null,seq30214__$1);
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(G__30215,G__30216,seq30214__$2);
});

reagi.core.mapcat.cljs$lang$maxFixedArity = (2);
/**
 * Map a function over a stream.
 */
reagi.core.map = (function reagi$core$map(var_args){
var args__17423__auto__ = [];
var len__17416__auto___30226 = arguments.length;
var i__17417__auto___30227 = (0);
while(true){
if((i__17417__auto___30227 < len__17416__auto___30226)){
args__17423__auto__.push((arguments[i__17417__auto___30227]));

var G__30228 = (i__17417__auto___30227 + (1));
i__17417__auto___30227 = G__30228;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

reagi.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (f,streams){
return cljs.core.apply.call(null,reagi.core.mapcat,cljs.core.comp.call(null,cljs.core.list,f),streams);
});

reagi.core.map.cljs$lang$maxFixedArity = (1);

reagi.core.map.cljs$lang$applyTo = (function (seq30224){
var G__30225 = cljs.core.first.call(null,seq30224);
var seq30224__$1 = cljs.core.next.call(null,seq30224);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic(G__30225,seq30224__$1);
});
/**
 * Filter a stream by a predicate.
 */
reagi.core.filter = (function reagi$core$filter(pred,stream){
return reagi.core.mapcat.call(null,(function (p1__30229_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__30229_SHARP_))){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__30229_SHARP_);
} else {
return null;
}
}),stream);
});
/**
 * Remove all items in a stream the predicate matches.
 */
reagi.core.remove = (function reagi$core$remove(pred,stream){
return reagi.core.filter.call(null,cljs.core.complement.call(null,pred),stream);
});
/**
 * Constantly map the same value over an event stream.
 */
reagi.core.constantly = (function reagi$core$constantly(value,stream){
return reagi.core.map.call(null,cljs.core.constantly.call(null,value),stream);
});
reagi.core.reduce_ch = (function reagi$core$reduce_ch(f,init,in$,out){
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__){
return (function (state_30301){
var state_val_30302 = (state_30301[(1)]);
if((state_val_30302 === (7))){
var inst_30297 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30303_30324 = state_30301__$1;
(statearr_30303_30324[(2)] = inst_30297);

(statearr_30303_30324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (1))){
var inst_30277 = init;
var state_30301__$1 = (function (){var statearr_30304 = state_30301;
(statearr_30304[(7)] = inst_30277);

return statearr_30304;
})();
var statearr_30305_30325 = state_30301__$1;
(statearr_30305_30325[(2)] = null);

(statearr_30305_30325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (4))){
var inst_30280 = (state_30301[(8)]);
var inst_30280__$1 = (state_30301[(2)]);
var state_30301__$1 = (function (){var statearr_30306 = state_30301;
(statearr_30306[(8)] = inst_30280__$1);

return statearr_30306;
})();
if(cljs.core.truth_(inst_30280__$1)){
var statearr_30307_30326 = state_30301__$1;
(statearr_30307_30326[(1)] = (5));

} else {
var statearr_30308_30327 = state_30301__$1;
(statearr_30308_30327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (6))){
var inst_30295 = cljs.core.async.close_BANG_.call(null,out);
var state_30301__$1 = state_30301;
var statearr_30309_30328 = state_30301__$1;
(statearr_30309_30328[(2)] = inst_30295);

(statearr_30309_30328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (3))){
var inst_30299 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30301__$1,inst_30299);
} else {
if((state_val_30302 === (2))){
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30301__$1,(4),in$);
} else {
if((state_val_30302 === (11))){
var inst_30289 = (state_30301[(9)]);
var inst_30292 = (state_30301[(2)]);
var inst_30277 = inst_30289;
var state_30301__$1 = (function (){var statearr_30310 = state_30301;
(statearr_30310[(7)] = inst_30277);

(statearr_30310[(10)] = inst_30292);

return statearr_30310;
})();
var statearr_30311_30329 = state_30301__$1;
(statearr_30311_30329[(2)] = null);

(statearr_30311_30329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (9))){
var inst_30277 = (state_30301[(7)]);
var inst_30280 = (state_30301[(8)]);
var inst_30286 = reagi.core.unbox.call(null,inst_30280);
var inst_30287 = f.call(null,inst_30277,inst_30286);
var state_30301__$1 = state_30301;
var statearr_30312_30330 = state_30301__$1;
(statearr_30312_30330[(2)] = inst_30287);

(statearr_30312_30330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (5))){
var inst_30277 = (state_30301[(7)]);
var inst_30282 = reagi.core.no_value_QMARK_.call(null,inst_30277);
var state_30301__$1 = state_30301;
if(cljs.core.truth_(inst_30282)){
var statearr_30313_30331 = state_30301__$1;
(statearr_30313_30331[(1)] = (8));

} else {
var statearr_30314_30332 = state_30301__$1;
(statearr_30314_30332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (10))){
var inst_30289 = (state_30301[(9)]);
var inst_30289__$1 = (state_30301[(2)]);
var inst_30290 = reagi.core.box.call(null,inst_30289__$1);
var state_30301__$1 = (function (){var statearr_30315 = state_30301;
(statearr_30315[(9)] = inst_30289__$1);

return statearr_30315;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30301__$1,(11),out,inst_30290);
} else {
if((state_val_30302 === (8))){
var inst_30280 = (state_30301[(8)]);
var inst_30284 = reagi.core.unbox.call(null,inst_30280);
var state_30301__$1 = state_30301;
var statearr_30316_30333 = state_30301__$1;
(statearr_30316_30333[(2)] = inst_30284);

(statearr_30316_30333[(1)] = (10));


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
});})(c__19561__auto__))
;
return ((function (switch__19496__auto__,c__19561__auto__){
return (function() {
var reagi$core$reduce_ch_$_state_machine__19497__auto__ = null;
var reagi$core$reduce_ch_$_state_machine__19497__auto____0 = (function (){
var statearr_30320 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30320[(0)] = reagi$core$reduce_ch_$_state_machine__19497__auto__);

(statearr_30320[(1)] = (1));

return statearr_30320;
});
var reagi$core$reduce_ch_$_state_machine__19497__auto____1 = (function (state_30301){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_30301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e30321){if((e30321 instanceof Object)){
var ex__19500__auto__ = e30321;
var statearr_30322_30334 = state_30301;
(statearr_30322_30334[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30335 = state_30301;
state_30301 = G__30335;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$reduce_ch_$_state_machine__19497__auto__ = function(state_30301){
switch(arguments.length){
case 0:
return reagi$core$reduce_ch_$_state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$reduce_ch_$_state_machine__19497__auto____1.call(this,state_30301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$reduce_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$reduce_ch_$_state_machine__19497__auto____0;
reagi$core$reduce_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$reduce_ch_$_state_machine__19497__auto____1;
return reagi$core$reduce_ch_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__))
})();
var state__19563__auto__ = (function (){var statearr_30323 = f__19562__auto__.call(null);
(statearr_30323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_30323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__))
);

return c__19561__auto__;
});
/**
 * Create a new stream by applying a function to the previous return value and
 *   the current value of the source stream.
 */
reagi.core.reduce = (function reagi$core$reduce(var_args){
var args30336 = [];
var len__17416__auto___30340 = arguments.length;
var i__17417__auto___30341 = (0);
while(true){
if((i__17417__auto___30341 < len__17416__auto___30340)){
args30336.push((arguments[i__17417__auto___30341]));

var G__30342 = (i__17417__auto___30341 + (1));
i__17417__auto___30341 = G__30342;
continue;
} else {
}
break;
}

var G__30338 = args30336.length;
switch (G__30338) {
case 2:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30336.length)].join('')));

}
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
return reagi.core.reduce.call(null,f,reagi.core.no_value,stream);
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__30339 = reagi.core.events.call(null,init);
reagi.core.connect_port.call(null,G__30339,reagi.core.reduce_ch,f,init,ch);

reagi.core.on_dispose.call(null,G__30339,((function (G__30339,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__30339,ch))
);

reagi.core.depend_on.call(null,G__30339,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__30339;
});

reagi.core.reduce.cljs$lang$maxFixedArity = 3;
/**
 * Return an accumulating count of the items in a stream.
 */
reagi.core.count = (function reagi$core$count(stream){
return reagi.core.reduce.call(null,(function (x,_){
return (x + (1));
}),(0),stream);
});
/**
 * Change an initial value based on an event stream of functions.
 */
reagi.core.accum = (function reagi$core$accum(init,stream){
return reagi.core.reduce.call(null,(function (p1__30345_SHARP_,p2__30344_SHARP_){
return p2__30344_SHARP_.call(null,p1__30345_SHARP_);
}),init,stream);
});
reagi.core.empty_queue = cljs.core.PersistentQueue.EMPTY;
/**
 * Buffer all the events in the stream. A maximum buffer size may be specified,
 *   in which case the buffer will contain only the last n items. It's recommended
 *   that a buffer size is specified, otherwise the buffer will grow without limit.
 */
reagi.core.buffer = (function reagi$core$buffer(var_args){
var args30346 = [];
var len__17416__auto___30349 = arguments.length;
var i__17417__auto___30350 = (0);
while(true){
if((i__17417__auto___30350 < len__17416__auto___30349)){
args30346.push((arguments[i__17417__auto___30350]));

var G__30351 = (i__17417__auto___30350 + (1));
i__17417__auto___30350 = G__30351;
continue;
} else {
}
break;
}

var G__30348 = args30346.length;
switch (G__30348) {
case 1:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30346.length)].join('')));

}
});

reagi.core.buffer.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return reagi.core.reduce.call(null,cljs.core.conj,reagi.core.empty_queue,stream);
});

reagi.core.buffer.cljs$core$IFn$_invoke$arity$2 = (function (n,stream){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

return reagi.core.reduce.call(null,(function (q,x){
return cljs.core.conj.call(null,(((cljs.core.count.call(null,q) >= n))?cljs.core.pop.call(null,q):q),x);
}),reagi.core.empty_queue,stream);
});

reagi.core.buffer.cljs$lang$maxFixedArity = 2;
reagi.core.uniq_ch = (function reagi$core$uniq_ch(in$,out){
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__){
return (function (state_30434){
var state_val_30435 = (state_30434[(1)]);
if((state_val_30435 === (7))){
var inst_30430 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30436_30461 = state_30434__$1;
(statearr_30436_30461[(2)] = inst_30430);

(statearr_30436_30461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (1))){
var inst_30407 = reagi.core.no_value;
var state_30434__$1 = (function (){var statearr_30437 = state_30434;
(statearr_30437[(7)] = inst_30407);

return statearr_30437;
})();
var statearr_30438_30462 = state_30434__$1;
(statearr_30438_30462[(2)] = null);

(statearr_30438_30462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (4))){
var inst_30410 = (state_30434[(8)]);
var inst_30410__$1 = (state_30434[(2)]);
var state_30434__$1 = (function (){var statearr_30439 = state_30434;
(statearr_30439[(8)] = inst_30410__$1);

return statearr_30439;
})();
if(cljs.core.truth_(inst_30410__$1)){
var statearr_30440_30463 = state_30434__$1;
(statearr_30440_30463[(1)] = (5));

} else {
var statearr_30441_30464 = state_30434__$1;
(statearr_30441_30464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (13))){
var inst_30412 = (state_30434[(9)]);
var inst_30425 = (state_30434[(2)]);
var inst_30407 = inst_30412;
var state_30434__$1 = (function (){var statearr_30442 = state_30434;
(statearr_30442[(7)] = inst_30407);

(statearr_30442[(10)] = inst_30425);

return statearr_30442;
})();
var statearr_30443_30465 = state_30434__$1;
(statearr_30443_30465[(2)] = null);

(statearr_30443_30465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (6))){
var inst_30428 = cljs.core.async.close_BANG_.call(null,out);
var state_30434__$1 = state_30434;
var statearr_30444_30466 = state_30434__$1;
(statearr_30444_30466[(2)] = inst_30428);

(statearr_30444_30466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (3))){
var inst_30432 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30434__$1,inst_30432);
} else {
if((state_val_30435 === (12))){
var state_30434__$1 = state_30434;
var statearr_30445_30467 = state_30434__$1;
(statearr_30445_30467[(2)] = null);

(statearr_30445_30467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (2))){
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30434__$1,(4),in$);
} else {
if((state_val_30435 === (11))){
var inst_30412 = (state_30434[(9)]);
var inst_30420 = reagi.core.box.call(null,inst_30412);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30434__$1,(14),out,inst_30420);
} else {
if((state_val_30435 === (9))){
var inst_30407 = (state_30434[(7)]);
var inst_30412 = (state_30434[(9)]);
var inst_30416 = cljs.core.not_EQ_.call(null,inst_30412,inst_30407);
var state_30434__$1 = state_30434;
var statearr_30446_30468 = state_30434__$1;
(statearr_30446_30468[(2)] = inst_30416);

(statearr_30446_30468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (5))){
var inst_30407 = (state_30434[(7)]);
var inst_30413 = (state_30434[(11)]);
var inst_30410 = (state_30434[(8)]);
var inst_30412 = reagi.core.unbox.call(null,inst_30410);
var inst_30413__$1 = reagi.core.no_value_QMARK_.call(null,inst_30407);
var state_30434__$1 = (function (){var statearr_30447 = state_30434;
(statearr_30447[(11)] = inst_30413__$1);

(statearr_30447[(9)] = inst_30412);

return statearr_30447;
})();
if(cljs.core.truth_(inst_30413__$1)){
var statearr_30448_30469 = state_30434__$1;
(statearr_30448_30469[(1)] = (8));

} else {
var statearr_30449_30470 = state_30434__$1;
(statearr_30449_30470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (14))){
var inst_30422 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30450_30471 = state_30434__$1;
(statearr_30450_30471[(2)] = inst_30422);

(statearr_30450_30471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (10))){
var inst_30418 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
if(cljs.core.truth_(inst_30418)){
var statearr_30451_30472 = state_30434__$1;
(statearr_30451_30472[(1)] = (11));

} else {
var statearr_30452_30473 = state_30434__$1;
(statearr_30452_30473[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (8))){
var inst_30413 = (state_30434[(11)]);
var state_30434__$1 = state_30434;
var statearr_30453_30474 = state_30434__$1;
(statearr_30453_30474[(2)] = inst_30413);

(statearr_30453_30474[(1)] = (10));


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
});})(c__19561__auto__))
;
return ((function (switch__19496__auto__,c__19561__auto__){
return (function() {
var reagi$core$uniq_ch_$_state_machine__19497__auto__ = null;
var reagi$core$uniq_ch_$_state_machine__19497__auto____0 = (function (){
var statearr_30457 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30457[(0)] = reagi$core$uniq_ch_$_state_machine__19497__auto__);

(statearr_30457[(1)] = (1));

return statearr_30457;
});
var reagi$core$uniq_ch_$_state_machine__19497__auto____1 = (function (state_30434){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_30434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e30458){if((e30458 instanceof Object)){
var ex__19500__auto__ = e30458;
var statearr_30459_30475 = state_30434;
(statearr_30459_30475[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30476 = state_30434;
state_30434 = G__30476;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$uniq_ch_$_state_machine__19497__auto__ = function(state_30434){
switch(arguments.length){
case 0:
return reagi$core$uniq_ch_$_state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$uniq_ch_$_state_machine__19497__auto____1.call(this,state_30434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$uniq_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$uniq_ch_$_state_machine__19497__auto____0;
reagi$core$uniq_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$uniq_ch_$_state_machine__19497__auto____1;
return reagi$core$uniq_ch_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__))
})();
var state__19563__auto__ = (function (){var statearr_30460 = f__19562__auto__.call(null);
(statearr_30460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_30460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__))
);

return c__19561__auto__;
});
/**
 * Remove any successive duplicates from the stream.
 */
reagi.core.uniq = (function reagi$core$uniq(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__30478 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__30478,reagi.core.uniq_ch,ch);

reagi.core.on_dispose.call(null,G__30478,((function (G__30478,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__30478,ch))
);

reagi.core.depend_on.call(null,G__30478,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__30478;
});
/**
 * Incoming events cycle a sequence of values. Useful for switching between
 *   states.
 */
reagi.core.cycle = (function reagi$core$cycle(values,stream){
return reagi.core.map.call(null,cljs.core.first,reagi.core.reduce.call(null,(function (xs,_){
return cljs.core.next.call(null,xs);
}),cljs.core.cycle.call(null,values),stream));
});
reagi.core.time_ms = (function reagi$core$time_ms(){
return (new Date()).getTime();
});
reagi.core.throttle_ch = (function reagi$core$throttle_ch(timeout_ms,in$,out){
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__){
return (function (state_30546){
var state_val_30547 = (state_30546[(1)]);
if((state_val_30547 === (7))){
var inst_30542 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30548_30569 = state_30546__$1;
(statearr_30548_30569[(2)] = inst_30542);

(statearr_30548_30569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (1))){
var inst_30524 = (0);
var state_30546__$1 = (function (){var statearr_30549 = state_30546;
(statearr_30549[(7)] = inst_30524);

return statearr_30549;
})();
var statearr_30550_30570 = state_30546__$1;
(statearr_30550_30570[(2)] = null);

(statearr_30550_30570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (4))){
var inst_30527 = (state_30546[(8)]);
var inst_30527__$1 = (state_30546[(2)]);
var state_30546__$1 = (function (){var statearr_30551 = state_30546;
(statearr_30551[(8)] = inst_30527__$1);

return statearr_30551;
})();
if(cljs.core.truth_(inst_30527__$1)){
var statearr_30552_30571 = state_30546__$1;
(statearr_30552_30571[(1)] = (5));

} else {
var statearr_30553_30572 = state_30546__$1;
(statearr_30553_30572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (6))){
var inst_30540 = cljs.core.async.close_BANG_.call(null,out);
var state_30546__$1 = state_30546;
var statearr_30554_30573 = state_30546__$1;
(statearr_30554_30573[(2)] = inst_30540);

(statearr_30554_30573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (3))){
var inst_30544 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30546__$1,inst_30544);
} else {
if((state_val_30547 === (2))){
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(4),in$);
} else {
if((state_val_30547 === (11))){
var inst_30534 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30555_30574 = state_30546__$1;
(statearr_30555_30574[(2)] = inst_30534);

(statearr_30555_30574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (9))){
var state_30546__$1 = state_30546;
var statearr_30556_30575 = state_30546__$1;
(statearr_30556_30575[(2)] = null);

(statearr_30556_30575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (5))){
var inst_30529 = (state_30546[(9)]);
var inst_30524 = (state_30546[(7)]);
var inst_30529__$1 = reagi.core.time_ms.call(null);
var inst_30530 = (inst_30529__$1 - inst_30524);
var inst_30531 = (inst_30530 >= timeout_ms);
var state_30546__$1 = (function (){var statearr_30557 = state_30546;
(statearr_30557[(9)] = inst_30529__$1);

return statearr_30557;
})();
if(cljs.core.truth_(inst_30531)){
var statearr_30558_30576 = state_30546__$1;
(statearr_30558_30576[(1)] = (8));

} else {
var statearr_30559_30577 = state_30546__$1;
(statearr_30559_30577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (10))){
var inst_30529 = (state_30546[(9)]);
var inst_30537 = (state_30546[(2)]);
var inst_30524 = inst_30529;
var state_30546__$1 = (function (){var statearr_30560 = state_30546;
(statearr_30560[(10)] = inst_30537);

(statearr_30560[(7)] = inst_30524);

return statearr_30560;
})();
var statearr_30561_30578 = state_30546__$1;
(statearr_30561_30578[(2)] = null);

(statearr_30561_30578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (8))){
var inst_30527 = (state_30546[(8)]);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30546__$1,(11),out,inst_30527);
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
});})(c__19561__auto__))
;
return ((function (switch__19496__auto__,c__19561__auto__){
return (function() {
var reagi$core$throttle_ch_$_state_machine__19497__auto__ = null;
var reagi$core$throttle_ch_$_state_machine__19497__auto____0 = (function (){
var statearr_30565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30565[(0)] = reagi$core$throttle_ch_$_state_machine__19497__auto__);

(statearr_30565[(1)] = (1));

return statearr_30565;
});
var reagi$core$throttle_ch_$_state_machine__19497__auto____1 = (function (state_30546){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_30546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e30566){if((e30566 instanceof Object)){
var ex__19500__auto__ = e30566;
var statearr_30567_30579 = state_30546;
(statearr_30567_30579[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30580 = state_30546;
state_30546 = G__30580;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$throttle_ch_$_state_machine__19497__auto__ = function(state_30546){
switch(arguments.length){
case 0:
return reagi$core$throttle_ch_$_state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$throttle_ch_$_state_machine__19497__auto____1.call(this,state_30546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$throttle_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$throttle_ch_$_state_machine__19497__auto____0;
reagi$core$throttle_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$throttle_ch_$_state_machine__19497__auto____1;
return reagi$core$throttle_ch_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__))
})();
var state__19563__auto__ = (function (){var statearr_30568 = f__19562__auto__.call(null);
(statearr_30568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_30568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__))
);

return c__19561__auto__;
});
/**
 * Remove any events in a stream that occur too soon after the prior event.
 *   The timeout is specified in milliseconds.
 */
reagi.core.throttle = (function reagi$core$throttle(timeout_ms,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__30582 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__30582,reagi.core.throttle_ch,timeout_ms,ch);

reagi.core.on_dispose.call(null,G__30582,((function (G__30582,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__30582,ch))
);

reagi.core.depend_on.call(null,G__30582,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__30582;
});
reagi.core.run_sampler = (function reagi$core$run_sampler(ref,interval,stop,out){
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__){
return (function (state_30692){
var state_val_30693 = (state_30692[(1)]);
if((state_val_30693 === (7))){
var inst_30687 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30694_30723 = state_30692__$1;
(statearr_30694_30723[(2)] = inst_30687);

(statearr_30694_30723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (1))){
var state_30692__$1 = state_30692;
var statearr_30695_30724 = state_30692__$1;
(statearr_30695_30724[(2)] = null);

(statearr_30695_30724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (4))){
var inst_30660 = (state_30692[(2)]);
var inst_30661 = cljs.core.nth.call(null,inst_30660,(0),null);
var inst_30662 = cljs.core.nth.call(null,inst_30660,(1),null);
var inst_30663 = cljs.core.not_EQ_.call(null,inst_30662,stop);
var state_30692__$1 = (function (){var statearr_30696 = state_30692;
(statearr_30696[(7)] = inst_30661);

return statearr_30696;
})();
if(inst_30663){
var statearr_30697_30725 = state_30692__$1;
(statearr_30697_30725[(1)] = (5));

} else {
var statearr_30698_30726 = state_30692__$1;
(statearr_30698_30726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (15))){
var state_30692__$1 = state_30692;
var statearr_30699_30727 = state_30692__$1;
(statearr_30699_30727[(2)] = null);

(statearr_30699_30727[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (13))){
var inst_30674 = (state_30692[(8)]);
var state_30692__$1 = state_30692;
var statearr_30700_30728 = state_30692__$1;
(statearr_30700_30728[(2)] = inst_30674);

(statearr_30700_30728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (6))){
var state_30692__$1 = state_30692;
var statearr_30701_30729 = state_30692__$1;
(statearr_30701_30729[(2)] = null);

(statearr_30701_30729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (17))){
var inst_30684 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30702_30730 = state_30692__$1;
(statearr_30702_30730[(2)] = inst_30684);

(statearr_30702_30730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (3))){
var inst_30689 = (state_30692[(2)]);
var inst_30690 = cljs.core.async.close_BANG_.call(null,out);
var state_30692__$1 = (function (){var statearr_30703 = state_30692;
(statearr_30703[(9)] = inst_30689);

return statearr_30703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30692__$1,inst_30690);
} else {
if((state_val_30693 === (12))){
var inst_30676 = reagi.core.complete_QMARK_.call(null,ref);
var state_30692__$1 = state_30692;
var statearr_30704_30731 = state_30692__$1;
(statearr_30704_30731[(2)] = inst_30676);

(statearr_30704_30731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (2))){
var inst_30655 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30656 = cljs.core.async.timeout.call(null,interval);
var inst_30657 = [stop,inst_30656];
var inst_30658 = (new cljs.core.PersistentVector(null,2,(5),inst_30655,inst_30657,null));
var state_30692__$1 = state_30692;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30692__$1,(4),inst_30658);
} else {
if((state_val_30693 === (11))){
var inst_30671 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30705_30732 = state_30692__$1;
(statearr_30705_30732[(2)] = inst_30671);

(statearr_30705_30732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (9))){
var inst_30665 = (state_30692[(10)]);
var inst_30669 = reagi.core.box.call(null,inst_30665);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30692__$1,(11),out,inst_30669);
} else {
if((state_val_30693 === (5))){
var inst_30665 = (state_30692[(10)]);
var inst_30665__$1 = cljs.core.deref.call(null,ref);
var inst_30666 = (void 0 === inst_30665__$1);
var state_30692__$1 = (function (){var statearr_30706 = state_30692;
(statearr_30706[(10)] = inst_30665__$1);

return statearr_30706;
})();
if(cljs.core.truth_(inst_30666)){
var statearr_30707_30733 = state_30692__$1;
(statearr_30707_30733[(1)] = (8));

} else {
var statearr_30708_30734 = state_30692__$1;
(statearr_30708_30734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (14))){
var inst_30679 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30679)){
var statearr_30709_30735 = state_30692__$1;
(statearr_30709_30735[(1)] = (15));

} else {
var statearr_30710_30736 = state_30692__$1;
(statearr_30710_30736[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (16))){
var state_30692__$1 = state_30692;
var statearr_30711_30737 = state_30692__$1;
(statearr_30711_30737[(2)] = null);

(statearr_30711_30737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (10))){
var inst_30674 = (state_30692[(8)]);
var inst_30673 = (state_30692[(2)]);
var inst_30674__$1 = reagi.core.signal_QMARK_.call(null,ref);
var state_30692__$1 = (function (){var statearr_30712 = state_30692;
(statearr_30712[(8)] = inst_30674__$1);

(statearr_30712[(11)] = inst_30673);

return statearr_30712;
})();
if(cljs.core.truth_(inst_30674__$1)){
var statearr_30713_30738 = state_30692__$1;
(statearr_30713_30738[(1)] = (12));

} else {
var statearr_30714_30739 = state_30692__$1;
(statearr_30714_30739[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (8))){
var state_30692__$1 = state_30692;
var statearr_30715_30740 = state_30692__$1;
(statearr_30715_30740[(2)] = null);

(statearr_30715_30740[(1)] = (10));


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
});})(c__19561__auto__))
;
return ((function (switch__19496__auto__,c__19561__auto__){
return (function() {
var reagi$core$run_sampler_$_state_machine__19497__auto__ = null;
var reagi$core$run_sampler_$_state_machine__19497__auto____0 = (function (){
var statearr_30719 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30719[(0)] = reagi$core$run_sampler_$_state_machine__19497__auto__);

(statearr_30719[(1)] = (1));

return statearr_30719;
});
var reagi$core$run_sampler_$_state_machine__19497__auto____1 = (function (state_30692){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_30692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e30720){if((e30720 instanceof Object)){
var ex__19500__auto__ = e30720;
var statearr_30721_30741 = state_30692;
(statearr_30721_30741[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30742 = state_30692;
state_30692 = G__30742;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$run_sampler_$_state_machine__19497__auto__ = function(state_30692){
switch(arguments.length){
case 0:
return reagi$core$run_sampler_$_state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$run_sampler_$_state_machine__19497__auto____1.call(this,state_30692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$run_sampler_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$run_sampler_$_state_machine__19497__auto____0;
reagi$core$run_sampler_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$run_sampler_$_state_machine__19497__auto____1;
return reagi$core$run_sampler_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__))
})();
var state__19563__auto__ = (function (){var statearr_30722 = f__19562__auto__.call(null);
(statearr_30722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_30722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__))
);

return c__19561__auto__;
});
/**
 * Turn a reference into an event stream by deref-ing it at fixed intervals.
 *   The interval time is specified in milliseconds.
 */
reagi.core.sample = (function reagi$core$sample(interval_ms,reference){
var stop = cljs.core.async.chan.call(null);
var G__30744 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__30744,reagi.core.run_sampler,reference,interval_ms,stop);

reagi.core.on_dispose.call(null,G__30744,((function (G__30744,stop){
return (function (){
return cljs.core.async.close_BANG_.call(null,stop);
});})(G__30744,stop))
);

return G__30744;
});
/**
 * Returns a channel that will complete unrealized after specified number of
 *   milliseconds.
 */
reagi.core.wait = (function reagi$core$wait(time_ms){
var stream = reagi.core.events.call(null);
var c__19561__auto___30777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___30777,stream){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___30777,stream){
return (function (state_30767){
var state_val_30768 = (state_30767[(1)]);
if((state_val_30768 === (1))){
var inst_30761 = cljs.core.async.timeout.call(null,time_ms);
var state_30767__$1 = state_30767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30767__$1,(2),inst_30761);
} else {
if((state_val_30768 === (2))){
var inst_30763 = (state_30767[(2)]);
var inst_30764 = reagi.core.port.call(null,stream);
var inst_30765 = cljs.core.async.close_BANG_.call(null,inst_30764);
var state_30767__$1 = (function (){var statearr_30769 = state_30767;
(statearr_30769[(7)] = inst_30763);

return statearr_30769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30767__$1,inst_30765);
} else {
return null;
}
}
});})(c__19561__auto___30777,stream))
;
return ((function (switch__19496__auto__,c__19561__auto___30777,stream){
return (function() {
var reagi$core$wait_$_state_machine__19497__auto__ = null;
var reagi$core$wait_$_state_machine__19497__auto____0 = (function (){
var statearr_30773 = [null,null,null,null,null,null,null,null];
(statearr_30773[(0)] = reagi$core$wait_$_state_machine__19497__auto__);

(statearr_30773[(1)] = (1));

return statearr_30773;
});
var reagi$core$wait_$_state_machine__19497__auto____1 = (function (state_30767){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_30767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e30774){if((e30774 instanceof Object)){
var ex__19500__auto__ = e30774;
var statearr_30775_30778 = state_30767;
(statearr_30775_30778[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30779 = state_30767;
state_30767 = G__30779;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$wait_$_state_machine__19497__auto__ = function(state_30767){
switch(arguments.length){
case 0:
return reagi$core$wait_$_state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$wait_$_state_machine__19497__auto____1.call(this,state_30767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$wait_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$wait_$_state_machine__19497__auto____0;
reagi$core$wait_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$wait_$_state_machine__19497__auto____1;
return reagi$core$wait_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___30777,stream))
})();
var state__19563__auto__ = (function (){var statearr_30776 = f__19562__auto__.call(null);
(statearr_30776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___30777);

return statearr_30776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___30777,stream))
);


return stream;
});
reagi.core.join_ch = (function reagi$core$join_ch(chs,out){
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__){
return (function (state_30966){
var state_val_30967 = (state_30966[(1)]);
if((state_val_30967 === (7))){
var inst_30911 = (state_30966[(7)]);
var state_30966__$1 = state_30966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30966__$1,(9),inst_30911);
} else {
if((state_val_30967 === (20))){
var inst_30938 = (state_30966[(8)]);
var state_30966__$1 = state_30966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30966__$1,(22),inst_30938);
} else {
if((state_val_30967 === (1))){
var inst_30902 = cljs.core.seq.call(null,chs);
var inst_30903 = inst_30902;
var inst_30904 = null;
var inst_30905 = (0);
var inst_30906 = (0);
var state_30966__$1 = (function (){var statearr_30968 = state_30966;
(statearr_30968[(9)] = inst_30905);

(statearr_30968[(10)] = inst_30904);

(statearr_30968[(11)] = inst_30903);

(statearr_30968[(12)] = inst_30906);

return statearr_30968;
})();
var statearr_30969_31016 = state_30966__$1;
(statearr_30969_31016[(2)] = null);

(statearr_30969_31016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (24))){
var state_30966__$1 = state_30966;
var statearr_30970_31017 = state_30966__$1;
(statearr_30970_31017[(2)] = null);

(statearr_30970_31017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (4))){
var inst_30904 = (state_30966[(10)]);
var inst_30906 = (state_30966[(12)]);
var inst_30911 = cljs.core._nth.call(null,inst_30904,inst_30906);
var state_30966__$1 = (function (){var statearr_30971 = state_30966;
(statearr_30971[(7)] = inst_30911);

return statearr_30971;
})();
var statearr_30972_31018 = state_30966__$1;
(statearr_30972_31018[(2)] = null);

(statearr_30972_31018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (15))){
var state_30966__$1 = state_30966;
var statearr_30973_31019 = state_30966__$1;
(statearr_30973_31019[(2)] = null);

(statearr_30973_31019[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (21))){
var inst_30929 = (state_30966[(13)]);
var inst_30952 = (state_30966[(2)]);
var inst_30953 = cljs.core.next.call(null,inst_30929);
var inst_30903 = inst_30953;
var inst_30904 = null;
var inst_30905 = (0);
var inst_30906 = (0);
var state_30966__$1 = (function (){var statearr_30974 = state_30966;
(statearr_30974[(14)] = inst_30952);

(statearr_30974[(9)] = inst_30905);

(statearr_30974[(10)] = inst_30904);

(statearr_30974[(11)] = inst_30903);

(statearr_30974[(12)] = inst_30906);

return statearr_30974;
})();
var statearr_30975_31020 = state_30966__$1;
(statearr_30975_31020[(2)] = null);

(statearr_30975_31020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (13))){
var inst_30919 = (state_30966[(2)]);
var state_30966__$1 = (function (){var statearr_30976 = state_30966;
(statearr_30976[(15)] = inst_30919);

return statearr_30976;
})();
var statearr_30977_31021 = state_30966__$1;
(statearr_30977_31021[(2)] = null);

(statearr_30977_31021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (22))){
var inst_30941 = (state_30966[(16)]);
var inst_30941__$1 = (state_30966[(2)]);
var state_30966__$1 = (function (){var statearr_30978 = state_30966;
(statearr_30978[(16)] = inst_30941__$1);

return statearr_30978;
})();
if(cljs.core.truth_(inst_30941__$1)){
var statearr_30979_31022 = state_30966__$1;
(statearr_30979_31022[(1)] = (23));

} else {
var statearr_30980_31023 = state_30966__$1;
(statearr_30980_31023[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (6))){
var inst_30961 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
var statearr_30981_31024 = state_30966__$1;
(statearr_30981_31024[(2)] = inst_30961);

(statearr_30981_31024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (25))){
var inst_30950 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
var statearr_30982_31025 = state_30966__$1;
(statearr_30982_31025[(2)] = inst_30950);

(statearr_30982_31025[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (17))){
var inst_30929 = (state_30966[(13)]);
var inst_30933 = cljs.core.chunk_first.call(null,inst_30929);
var inst_30934 = cljs.core.chunk_rest.call(null,inst_30929);
var inst_30935 = cljs.core.count.call(null,inst_30933);
var inst_30903 = inst_30934;
var inst_30904 = inst_30933;
var inst_30905 = inst_30935;
var inst_30906 = (0);
var state_30966__$1 = (function (){var statearr_30983 = state_30966;
(statearr_30983[(9)] = inst_30905);

(statearr_30983[(10)] = inst_30904);

(statearr_30983[(11)] = inst_30903);

(statearr_30983[(12)] = inst_30906);

return statearr_30983;
})();
var statearr_30984_31026 = state_30966__$1;
(statearr_30984_31026[(2)] = null);

(statearr_30984_31026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (3))){
var inst_30963 = (state_30966[(2)]);
var inst_30964 = cljs.core.async.close_BANG_.call(null,out);
var state_30966__$1 = (function (){var statearr_30985 = state_30966;
(statearr_30985[(17)] = inst_30963);

return statearr_30985;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30966__$1,inst_30964);
} else {
if((state_val_30967 === (12))){
var inst_30923 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
var statearr_30986_31027 = state_30966__$1;
(statearr_30986_31027[(2)] = inst_30923);

(statearr_30986_31027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (2))){
var inst_30905 = (state_30966[(9)]);
var inst_30906 = (state_30966[(12)]);
var inst_30908 = (inst_30906 < inst_30905);
var inst_30909 = inst_30908;
var state_30966__$1 = state_30966;
if(cljs.core.truth_(inst_30909)){
var statearr_30987_31028 = state_30966__$1;
(statearr_30987_31028[(1)] = (4));

} else {
var statearr_30988_31029 = state_30966__$1;
(statearr_30988_31029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (23))){
var inst_30941 = (state_30966[(16)]);
var inst_30943 = reagi.core.unbox.call(null,inst_30941);
var inst_30944 = reagi.core.box.call(null,inst_30943);
var state_30966__$1 = state_30966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30966__$1,(26),out,inst_30944);
} else {
if((state_val_30967 === (19))){
var inst_30956 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
var statearr_30989_31030 = state_30966__$1;
(statearr_30989_31030[(2)] = inst_30956);

(statearr_30989_31030[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (11))){
var state_30966__$1 = state_30966;
var statearr_30990_31031 = state_30966__$1;
(statearr_30990_31031[(2)] = null);

(statearr_30990_31031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (9))){
var inst_30914 = (state_30966[(18)]);
var inst_30914__$1 = (state_30966[(2)]);
var state_30966__$1 = (function (){var statearr_30991 = state_30966;
(statearr_30991[(18)] = inst_30914__$1);

return statearr_30991;
})();
if(cljs.core.truth_(inst_30914__$1)){
var statearr_30992_31032 = state_30966__$1;
(statearr_30992_31032[(1)] = (10));

} else {
var statearr_30993_31033 = state_30966__$1;
(statearr_30993_31033[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (5))){
var inst_30929 = (state_30966[(13)]);
var inst_30903 = (state_30966[(11)]);
var inst_30929__$1 = cljs.core.seq.call(null,inst_30903);
var state_30966__$1 = (function (){var statearr_30994 = state_30966;
(statearr_30994[(13)] = inst_30929__$1);

return statearr_30994;
})();
if(inst_30929__$1){
var statearr_30995_31034 = state_30966__$1;
(statearr_30995_31034[(1)] = (14));

} else {
var statearr_30996_31035 = state_30966__$1;
(statearr_30996_31035[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (14))){
var inst_30929 = (state_30966[(13)]);
var inst_30931 = cljs.core.chunked_seq_QMARK_.call(null,inst_30929);
var state_30966__$1 = state_30966;
if(inst_30931){
var statearr_30997_31036 = state_30966__$1;
(statearr_30997_31036[(1)] = (17));

} else {
var statearr_30998_31037 = state_30966__$1;
(statearr_30998_31037[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (26))){
var inst_30946 = (state_30966[(2)]);
var state_30966__$1 = (function (){var statearr_30999 = state_30966;
(statearr_30999[(19)] = inst_30946);

return statearr_30999;
})();
var statearr_31000_31038 = state_30966__$1;
(statearr_31000_31038[(2)] = null);

(statearr_31000_31038[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (16))){
var inst_30959 = (state_30966[(2)]);
var state_30966__$1 = state_30966;
var statearr_31001_31039 = state_30966__$1;
(statearr_31001_31039[(2)] = inst_30959);

(statearr_31001_31039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (10))){
var inst_30914 = (state_30966[(18)]);
var inst_30916 = reagi.core.unbox.call(null,inst_30914);
var inst_30917 = reagi.core.box.call(null,inst_30916);
var state_30966__$1 = state_30966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30966__$1,(13),out,inst_30917);
} else {
if((state_val_30967 === (18))){
var inst_30929 = (state_30966[(13)]);
var inst_30938 = cljs.core.first.call(null,inst_30929);
var state_30966__$1 = (function (){var statearr_31005 = state_30966;
(statearr_31005[(8)] = inst_30938);

return statearr_31005;
})();
var statearr_31006_31040 = state_30966__$1;
(statearr_31006_31040[(2)] = null);

(statearr_31006_31040[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30967 === (8))){
var inst_30905 = (state_30966[(9)]);
var inst_30904 = (state_30966[(10)]);
var inst_30903 = (state_30966[(11)]);
var inst_30906 = (state_30966[(12)]);
var inst_30925 = (state_30966[(2)]);
var inst_30926 = (inst_30906 + (1));
var tmp31002 = inst_30905;
var tmp31003 = inst_30904;
var tmp31004 = inst_30903;
var inst_30903__$1 = tmp31004;
var inst_30904__$1 = tmp31003;
var inst_30905__$1 = tmp31002;
var inst_30906__$1 = inst_30926;
var state_30966__$1 = (function (){var statearr_31007 = state_30966;
(statearr_31007[(20)] = inst_30925);

(statearr_31007[(9)] = inst_30905__$1);

(statearr_31007[(10)] = inst_30904__$1);

(statearr_31007[(11)] = inst_30903__$1);

(statearr_31007[(12)] = inst_30906__$1);

return statearr_31007;
})();
var statearr_31008_31041 = state_30966__$1;
(statearr_31008_31041[(2)] = null);

(statearr_31008_31041[(1)] = (2));


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
});})(c__19561__auto__))
;
return ((function (switch__19496__auto__,c__19561__auto__){
return (function() {
var reagi$core$join_ch_$_state_machine__19497__auto__ = null;
var reagi$core$join_ch_$_state_machine__19497__auto____0 = (function (){
var statearr_31012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31012[(0)] = reagi$core$join_ch_$_state_machine__19497__auto__);

(statearr_31012[(1)] = (1));

return statearr_31012;
});
var reagi$core$join_ch_$_state_machine__19497__auto____1 = (function (state_30966){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_30966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e31013){if((e31013 instanceof Object)){
var ex__19500__auto__ = e31013;
var statearr_31014_31042 = state_30966;
(statearr_31014_31042[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31043 = state_30966;
state_30966 = G__31043;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$join_ch_$_state_machine__19497__auto__ = function(state_30966){
switch(arguments.length){
case 0:
return reagi$core$join_ch_$_state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$join_ch_$_state_machine__19497__auto____1.call(this,state_30966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$join_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$join_ch_$_state_machine__19497__auto____0;
reagi$core$join_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$join_ch_$_state_machine__19497__auto____1;
return reagi$core$join_ch_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__))
})();
var state__19563__auto__ = (function (){var statearr_31015 = f__19562__auto__.call(null);
(statearr_31015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_31015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__))
);

return c__19561__auto__;
});
/**
 * Join several streams together. Events are delivered from the first stream
 *   until it is completed, then the next stream, until all streams are complete.
 */
reagi.core.join = (function reagi$core$join(var_args){
var args__17423__auto__ = [];
var len__17416__auto___31046 = arguments.length;
var i__17417__auto___31047 = (0);
while(true){
if((i__17417__auto___31047 < len__17416__auto___31046)){
args__17423__auto__.push((arguments[i__17417__auto___31047]));

var G__31048 = (i__17417__auto___31047 + (1));
i__17417__auto___31047 = G__31048;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((0) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((0)),(0))):null);
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(argseq__17424__auto__);
});

reagi.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__31045 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__31045,reagi.core.join_ch,chs);

reagi.core.on_dispose.call(null,G__31045,((function (G__31045,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__31045,chs))
);

reagi.core.depend_on.call(null,G__31045,streams);

return G__31045;
});

reagi.core.join.cljs$lang$maxFixedArity = (0);

reagi.core.join.cljs$lang$applyTo = (function (seq31044){
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31044));
});
reagi.core.flatten_ch = (function reagi$core$flatten_ch(in$,valve,out){
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__){
return (function (state_31185){
var state_val_31186 = (state_31185[(1)]);
if((state_val_31186 === (7))){
var inst_31149 = (state_31185[(7)]);
var inst_31147 = (state_31185[(2)]);
var inst_31148 = cljs.core.nth.call(null,inst_31147,(0),null);
var inst_31149__$1 = cljs.core.nth.call(null,inst_31147,(1),null);
var inst_31150 = (inst_31149__$1 === valve);
var state_31185__$1 = (function (){var statearr_31187 = state_31185;
(statearr_31187[(8)] = inst_31148);

(statearr_31187[(7)] = inst_31149__$1);

return statearr_31187;
})();
if(cljs.core.truth_(inst_31150)){
var statearr_31188_31219 = state_31185__$1;
(statearr_31188_31219[(1)] = (8));

} else {
var statearr_31189_31220 = state_31185__$1;
(statearr_31189_31220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (1))){
var inst_31134 = [in$];
var inst_31135 = [null];
var inst_31136 = cljs.core.PersistentHashMap.fromArrays(inst_31134,inst_31135);
var inst_31137 = inst_31136;
var state_31185__$1 = (function (){var statearr_31190 = state_31185;
(statearr_31190[(9)] = inst_31137);

return statearr_31190;
})();
var statearr_31191_31221 = state_31185__$1;
(statearr_31191_31221[(2)] = null);

(statearr_31191_31221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (4))){
var inst_31137 = (state_31185[(9)]);
var inst_31143 = cljs.core.keys.call(null,inst_31137);
var inst_31144 = cljs.core.vec.call(null,inst_31143);
var inst_31145 = cljs.core.conj.call(null,inst_31144,valve);
var state_31185__$1 = state_31185;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31185__$1,(7),inst_31145);
} else {
if((state_val_31186 === (15))){
var inst_31148 = (state_31185[(8)]);
var inst_31164 = reagi.core.unbox.call(null,inst_31148);
var inst_31165 = reagi.core.box.call(null,inst_31164);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31185__$1,(17),out,inst_31165);
} else {
if((state_val_31186 === (13))){
var inst_31175 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31193_31222 = state_31185__$1;
(statearr_31193_31222[(2)] = inst_31175);

(statearr_31193_31222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (6))){
var inst_31180 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31194_31223 = state_31185__$1;
(statearr_31194_31223[(2)] = inst_31180);

(statearr_31194_31223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (17))){
var inst_31137 = (state_31185[(9)]);
var inst_31167 = (state_31185[(2)]);
var tmp31192 = inst_31137;
var inst_31137__$1 = tmp31192;
var state_31185__$1 = (function (){var statearr_31195 = state_31185;
(statearr_31195[(9)] = inst_31137__$1);

(statearr_31195[(10)] = inst_31167);

return statearr_31195;
})();
var statearr_31196_31224 = state_31185__$1;
(statearr_31196_31224[(2)] = null);

(statearr_31196_31224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (3))){
var inst_31182 = (state_31185[(2)]);
var inst_31183 = cljs.core.async.close_BANG_.call(null,out);
var state_31185__$1 = (function (){var statearr_31197 = state_31185;
(statearr_31197[(11)] = inst_31182);

return statearr_31197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31185__$1,inst_31183);
} else {
if((state_val_31186 === (12))){
var inst_31137 = (state_31185[(9)]);
var inst_31149 = (state_31185[(7)]);
var inst_31172 = cljs.core.dissoc.call(null,inst_31137,inst_31149);
var inst_31137__$1 = inst_31172;
var state_31185__$1 = (function (){var statearr_31198 = state_31185;
(statearr_31198[(9)] = inst_31137__$1);

return statearr_31198;
})();
var statearr_31199_31225 = state_31185__$1;
(statearr_31199_31225[(2)] = null);

(statearr_31199_31225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (2))){
var inst_31137 = (state_31185[(9)]);
var inst_31139 = cljs.core.empty_QMARK_.call(null,inst_31137);
var inst_31140 = !(inst_31139);
var state_31185__$1 = state_31185;
if(inst_31140){
var statearr_31200_31226 = state_31185__$1;
(statearr_31200_31226[(1)] = (4));

} else {
var statearr_31201_31227 = state_31185__$1;
(statearr_31201_31227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (11))){
var inst_31149 = (state_31185[(7)]);
var inst_31156 = (inst_31149 === in$);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31156)){
var statearr_31202_31228 = state_31185__$1;
(statearr_31202_31228[(1)] = (14));

} else {
var statearr_31203_31229 = state_31185__$1;
(statearr_31203_31229[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (9))){
var inst_31148 = (state_31185[(8)]);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31148)){
var statearr_31204_31230 = state_31185__$1;
(statearr_31204_31230[(1)] = (11));

} else {
var statearr_31205_31231 = state_31185__$1;
(statearr_31205_31231[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (5))){
var state_31185__$1 = state_31185;
var statearr_31206_31232 = state_31185__$1;
(statearr_31206_31232[(2)] = null);

(statearr_31206_31232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (14))){
var inst_31137 = (state_31185[(9)]);
var inst_31148 = (state_31185[(8)]);
var inst_31158 = reagi.core.unbox.call(null,inst_31148);
var inst_31159 = cljs.core.async.chan.call(null);
var inst_31160 = reagi.core.listen.call(null,inst_31158,inst_31159);
var inst_31161 = cljs.core.assoc.call(null,inst_31137,inst_31160,inst_31158);
var inst_31137__$1 = inst_31161;
var state_31185__$1 = (function (){var statearr_31207 = state_31185;
(statearr_31207[(9)] = inst_31137__$1);

return statearr_31207;
})();
var statearr_31208_31233 = state_31185__$1;
(statearr_31208_31233[(2)] = null);

(statearr_31208_31233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (16))){
var inst_31170 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31209_31234 = state_31185__$1;
(statearr_31209_31234[(2)] = inst_31170);

(statearr_31209_31234[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (10))){
var inst_31177 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31210_31235 = state_31185__$1;
(statearr_31210_31235[(2)] = inst_31177);

(statearr_31210_31235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (8))){
var inst_31137 = (state_31185[(9)]);
var inst_31152 = cljs.core.keys.call(null,inst_31137);
var inst_31153 = reagi.core.close_all_BANG_.call(null,inst_31152);
var state_31185__$1 = state_31185;
var statearr_31211_31236 = state_31185__$1;
(statearr_31211_31236[(2)] = inst_31153);

(statearr_31211_31236[(1)] = (10));


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
});})(c__19561__auto__))
;
return ((function (switch__19496__auto__,c__19561__auto__){
return (function() {
var reagi$core$flatten_ch_$_state_machine__19497__auto__ = null;
var reagi$core$flatten_ch_$_state_machine__19497__auto____0 = (function (){
var statearr_31215 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31215[(0)] = reagi$core$flatten_ch_$_state_machine__19497__auto__);

(statearr_31215[(1)] = (1));

return statearr_31215;
});
var reagi$core$flatten_ch_$_state_machine__19497__auto____1 = (function (state_31185){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_31185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e31216){if((e31216 instanceof Object)){
var ex__19500__auto__ = e31216;
var statearr_31217_31237 = state_31185;
(statearr_31217_31237[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31238 = state_31185;
state_31185 = G__31238;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
reagi$core$flatten_ch_$_state_machine__19497__auto__ = function(state_31185){
switch(arguments.length){
case 0:
return reagi$core$flatten_ch_$_state_machine__19497__auto____0.call(this);
case 1:
return reagi$core$flatten_ch_$_state_machine__19497__auto____1.call(this,state_31185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagi$core$flatten_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$flatten_ch_$_state_machine__19497__auto____0;
reagi$core$flatten_ch_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$flatten_ch_$_state_machine__19497__auto____1;
return reagi$core$flatten_ch_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__))
})();
var state__19563__auto__ = (function (){var statearr_31218 = f__19562__auto__.call(null);
(statearr_31218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_31218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__))
);

return c__19561__auto__;
});
/**
 * Flatten a stream of streams into a stream that contains all the values of
 *   its components.
 */
reagi.core.flatten = (function reagi$core$flatten(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var valve = cljs.core.async.chan.call(null);
var G__31240 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__31240,reagi.core.flatten_ch,ch,valve);

reagi.core.on_dispose.call(null,G__31240,((function (G__31240,ch,valve){
return (function (){
return cljs.core.async.close_BANG_.call(null,valve);
});})(G__31240,ch,valve))
);

reagi.core.depend_on.call(null,G__31240,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__31240;
});

//# sourceMappingURL=core.js.map?rel=1446755793105