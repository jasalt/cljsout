// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async32189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32189 = (function (fn_handler,f,meta32190){
this.fn_handler = fn_handler;
this.f = f;
this.meta32190 = meta32190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32191,meta32190__$1){
var self__ = this;
var _32191__$1 = this;
return (new cljs.core.async.t_cljs$core$async32189(self__.fn_handler,self__.f,meta32190__$1));
});

cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32191){
var self__ = this;
var _32191__$1 = this;
return self__.meta32190;
});

cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta32190","meta32190",684492903,null)], null);
});

cljs.core.async.t_cljs$core$async32189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32189";

cljs.core.async.t_cljs$core$async32189.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async32189");
});

cljs.core.async.__GT_t_cljs$core$async32189 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async32189(fn_handler__$1,f__$1,meta32190){
return (new cljs.core.async.t_cljs$core$async32189(fn_handler__$1,f__$1,meta32190));
});

}

return (new cljs.core.async.t_cljs$core$async32189(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args32194 = [];
var len__17416__auto___32197 = arguments.length;
var i__17417__auto___32198 = (0);
while(true){
if((i__17417__auto___32198 < len__17416__auto___32197)){
args32194.push((arguments[i__17417__auto___32198]));

var G__32199 = (i__17417__auto___32198 + (1));
i__17417__auto___32198 = G__32199;
continue;
} else {
}
break;
}

var G__32196 = args32194.length;
switch (G__32196) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32194.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args32201 = [];
var len__17416__auto___32204 = arguments.length;
var i__17417__auto___32205 = (0);
while(true){
if((i__17417__auto___32205 < len__17416__auto___32204)){
args32201.push((arguments[i__17417__auto___32205]));

var G__32206 = (i__17417__auto___32205 + (1));
i__17417__auto___32205 = G__32206;
continue;
} else {
}
break;
}

var G__32203 = args32201.length;
switch (G__32203) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32201.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32208 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32208);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32208,ret){
return (function (){
return fn1.call(null,val_32208);
});})(val_32208,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args32209 = [];
var len__17416__auto___32212 = arguments.length;
var i__17417__auto___32213 = (0);
while(true){
if((i__17417__auto___32213 < len__17416__auto___32212)){
args32209.push((arguments[i__17417__auto___32213]));

var G__32214 = (i__17417__auto___32213 + (1));
i__17417__auto___32213 = G__32214;
continue;
} else {
}
break;
}

var G__32211 = args32209.length;
switch (G__32211) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32209.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17261__auto___32216 = n;
var x_32217 = (0);
while(true){
if((x_32217 < n__17261__auto___32216)){
(a[x_32217] = (0));

var G__32218 = (x_32217 + (1));
x_32217 = G__32218;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32219 = (i + (1));
i = G__32219;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32223 = (function (alt_flag,flag,meta32224){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32224 = meta32224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32225,meta32224__$1){
var self__ = this;
var _32225__$1 = this;
return (new cljs.core.async.t_cljs$core$async32223(self__.alt_flag,self__.flag,meta32224__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32225){
var self__ = this;
var _32225__$1 = this;
return self__.meta32224;
});})(flag))
;

cljs.core.async.t_cljs$core$async32223.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32223.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32223.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32223.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32224","meta32224",1481838380,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32223";

cljs.core.async.t_cljs$core$async32223.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async32223");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32223 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32223(alt_flag__$1,flag__$1,meta32224){
return (new cljs.core.async.t_cljs$core$async32223(alt_flag__$1,flag__$1,meta32224));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32223(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32229 = (function (alt_handler,flag,cb,meta32230){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32230 = meta32230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32231,meta32230__$1){
var self__ = this;
var _32231__$1 = this;
return (new cljs.core.async.t_cljs$core$async32229(self__.alt_handler,self__.flag,self__.cb,meta32230__$1));
});

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32231){
var self__ = this;
var _32231__$1 = this;
return self__.meta32230;
});

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32230","meta32230",1420975021,null)], null);
});

cljs.core.async.t_cljs$core$async32229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32229";

cljs.core.async.t_cljs$core$async32229.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async32229");
});

cljs.core.async.__GT_t_cljs$core$async32229 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32229(alt_handler__$1,flag__$1,cb__$1,meta32230){
return (new cljs.core.async.t_cljs$core$async32229(alt_handler__$1,flag__$1,cb__$1,meta32230));
});

}

return (new cljs.core.async.t_cljs$core$async32229(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32232_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32232_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32233_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32233_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16358__auto__ = wport;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32234 = (i + (1));
i = G__32234;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16358__auto__ = ret;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16346__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16346__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17423__auto__ = [];
var len__17416__auto___32240 = arguments.length;
var i__17417__auto___32241 = (0);
while(true){
if((i__17417__auto___32241 < len__17416__auto___32240)){
args__17423__auto__.push((arguments[i__17417__auto___32241]));

var G__32242 = (i__17417__auto___32241 + (1));
i__17417__auto___32241 = G__32242;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32237){
var map__32238 = p__32237;
var map__32238__$1 = ((((!((map__32238 == null)))?((((map__32238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32238):map__32238);
var opts = map__32238__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32235){
var G__32236 = cljs.core.first.call(null,seq32235);
var seq32235__$1 = cljs.core.next.call(null,seq32235);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32236,seq32235__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args32243 = [];
var len__17416__auto___32293 = arguments.length;
var i__17417__auto___32294 = (0);
while(true){
if((i__17417__auto___32294 < len__17416__auto___32293)){
args32243.push((arguments[i__17417__auto___32294]));

var G__32295 = (i__17417__auto___32294 + (1));
i__17417__auto___32294 = G__32295;
continue;
} else {
}
break;
}

var G__32245 = args32243.length;
switch (G__32245) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32243.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19561__auto___32297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___32297){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___32297){
return (function (state_32269){
var state_val_32270 = (state_32269[(1)]);
if((state_val_32270 === (7))){
var inst_32265 = (state_32269[(2)]);
var state_32269__$1 = state_32269;
var statearr_32271_32298 = state_32269__$1;
(statearr_32271_32298[(2)] = inst_32265);

(statearr_32271_32298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (1))){
var state_32269__$1 = state_32269;
var statearr_32272_32299 = state_32269__$1;
(statearr_32272_32299[(2)] = null);

(statearr_32272_32299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (4))){
var inst_32248 = (state_32269[(7)]);
var inst_32248__$1 = (state_32269[(2)]);
var inst_32249 = (inst_32248__$1 == null);
var state_32269__$1 = (function (){var statearr_32273 = state_32269;
(statearr_32273[(7)] = inst_32248__$1);

return statearr_32273;
})();
if(cljs.core.truth_(inst_32249)){
var statearr_32274_32300 = state_32269__$1;
(statearr_32274_32300[(1)] = (5));

} else {
var statearr_32275_32301 = state_32269__$1;
(statearr_32275_32301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (13))){
var state_32269__$1 = state_32269;
var statearr_32276_32302 = state_32269__$1;
(statearr_32276_32302[(2)] = null);

(statearr_32276_32302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (6))){
var inst_32248 = (state_32269[(7)]);
var state_32269__$1 = state_32269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32269__$1,(11),to,inst_32248);
} else {
if((state_val_32270 === (3))){
var inst_32267 = (state_32269[(2)]);
var state_32269__$1 = state_32269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32269__$1,inst_32267);
} else {
if((state_val_32270 === (12))){
var state_32269__$1 = state_32269;
var statearr_32277_32303 = state_32269__$1;
(statearr_32277_32303[(2)] = null);

(statearr_32277_32303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (2))){
var state_32269__$1 = state_32269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32269__$1,(4),from);
} else {
if((state_val_32270 === (11))){
var inst_32258 = (state_32269[(2)]);
var state_32269__$1 = state_32269;
if(cljs.core.truth_(inst_32258)){
var statearr_32278_32304 = state_32269__$1;
(statearr_32278_32304[(1)] = (12));

} else {
var statearr_32279_32305 = state_32269__$1;
(statearr_32279_32305[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (9))){
var state_32269__$1 = state_32269;
var statearr_32280_32306 = state_32269__$1;
(statearr_32280_32306[(2)] = null);

(statearr_32280_32306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (5))){
var state_32269__$1 = state_32269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32281_32307 = state_32269__$1;
(statearr_32281_32307[(1)] = (8));

} else {
var statearr_32282_32308 = state_32269__$1;
(statearr_32282_32308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (14))){
var inst_32263 = (state_32269[(2)]);
var state_32269__$1 = state_32269;
var statearr_32283_32309 = state_32269__$1;
(statearr_32283_32309[(2)] = inst_32263);

(statearr_32283_32309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (10))){
var inst_32255 = (state_32269[(2)]);
var state_32269__$1 = state_32269;
var statearr_32284_32310 = state_32269__$1;
(statearr_32284_32310[(2)] = inst_32255);

(statearr_32284_32310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32270 === (8))){
var inst_32252 = cljs.core.async.close_BANG_.call(null,to);
var state_32269__$1 = state_32269;
var statearr_32285_32311 = state_32269__$1;
(statearr_32285_32311[(2)] = inst_32252);

(statearr_32285_32311[(1)] = (10));


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
});})(c__19561__auto___32297))
;
return ((function (switch__19496__auto__,c__19561__auto___32297){
return (function() {
var cljs$core$async$state_machine__19497__auto__ = null;
var cljs$core$async$state_machine__19497__auto____0 = (function (){
var statearr_32289 = [null,null,null,null,null,null,null,null];
(statearr_32289[(0)] = cljs$core$async$state_machine__19497__auto__);

(statearr_32289[(1)] = (1));

return statearr_32289;
});
var cljs$core$async$state_machine__19497__auto____1 = (function (state_32269){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_32269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e32290){if((e32290 instanceof Object)){
var ex__19500__auto__ = e32290;
var statearr_32291_32312 = state_32269;
(statearr_32291_32312[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32313 = state_32269;
state_32269 = G__32313;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$state_machine__19497__auto__ = function(state_32269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19497__auto____1.call(this,state_32269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19497__auto____0;
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19497__auto____1;
return cljs$core$async$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___32297))
})();
var state__19563__auto__ = (function (){var statearr_32292 = f__19562__auto__.call(null);
(statearr_32292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___32297);

return statearr_32292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___32297))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32497){
var vec__32498 = p__32497;
var v = cljs.core.nth.call(null,vec__32498,(0),null);
var p = cljs.core.nth.call(null,vec__32498,(1),null);
var job = vec__32498;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19561__auto___32680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___32680,res,vec__32498,v,p,job,jobs,results){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___32680,res,vec__32498,v,p,job,jobs,results){
return (function (state_32503){
var state_val_32504 = (state_32503[(1)]);
if((state_val_32504 === (1))){
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32503__$1,(2),res,v);
} else {
if((state_val_32504 === (2))){
var inst_32500 = (state_32503[(2)]);
var inst_32501 = cljs.core.async.close_BANG_.call(null,res);
var state_32503__$1 = (function (){var statearr_32505 = state_32503;
(statearr_32505[(7)] = inst_32500);

return statearr_32505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32503__$1,inst_32501);
} else {
return null;
}
}
});})(c__19561__auto___32680,res,vec__32498,v,p,job,jobs,results))
;
return ((function (switch__19496__auto__,c__19561__auto___32680,res,vec__32498,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0 = (function (){
var statearr_32509 = [null,null,null,null,null,null,null,null];
(statearr_32509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__);

(statearr_32509[(1)] = (1));

return statearr_32509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1 = (function (state_32503){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_32503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e32510){if((e32510 instanceof Object)){
var ex__19500__auto__ = e32510;
var statearr_32511_32681 = state_32503;
(statearr_32511_32681[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32682 = state_32503;
state_32503 = G__32682;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__ = function(state_32503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1.call(this,state_32503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___32680,res,vec__32498,v,p,job,jobs,results))
})();
var state__19563__auto__ = (function (){var statearr_32512 = f__19562__auto__.call(null);
(statearr_32512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___32680);

return statearr_32512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___32680,res,vec__32498,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32513){
var vec__32514 = p__32513;
var v = cljs.core.nth.call(null,vec__32514,(0),null);
var p = cljs.core.nth.call(null,vec__32514,(1),null);
var job = vec__32514;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17261__auto___32683 = n;
var __32684 = (0);
while(true){
if((__32684 < n__17261__auto___32683)){
var G__32515_32685 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32515_32685) {
case "compute":
var c__19561__auto___32687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32684,c__19561__auto___32687,G__32515_32685,n__17261__auto___32683,jobs,results,process,async){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (__32684,c__19561__auto___32687,G__32515_32685,n__17261__auto___32683,jobs,results,process,async){
return (function (state_32528){
var state_val_32529 = (state_32528[(1)]);
if((state_val_32529 === (1))){
var state_32528__$1 = state_32528;
var statearr_32530_32688 = state_32528__$1;
(statearr_32530_32688[(2)] = null);

(statearr_32530_32688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (2))){
var state_32528__$1 = state_32528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32528__$1,(4),jobs);
} else {
if((state_val_32529 === (3))){
var inst_32526 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32528__$1,inst_32526);
} else {
if((state_val_32529 === (4))){
var inst_32518 = (state_32528[(2)]);
var inst_32519 = process.call(null,inst_32518);
var state_32528__$1 = state_32528;
if(cljs.core.truth_(inst_32519)){
var statearr_32531_32689 = state_32528__$1;
(statearr_32531_32689[(1)] = (5));

} else {
var statearr_32532_32690 = state_32528__$1;
(statearr_32532_32690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (5))){
var state_32528__$1 = state_32528;
var statearr_32533_32691 = state_32528__$1;
(statearr_32533_32691[(2)] = null);

(statearr_32533_32691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (6))){
var state_32528__$1 = state_32528;
var statearr_32534_32692 = state_32528__$1;
(statearr_32534_32692[(2)] = null);

(statearr_32534_32692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (7))){
var inst_32524 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
var statearr_32535_32693 = state_32528__$1;
(statearr_32535_32693[(2)] = inst_32524);

(statearr_32535_32693[(1)] = (3));


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
});})(__32684,c__19561__auto___32687,G__32515_32685,n__17261__auto___32683,jobs,results,process,async))
;
return ((function (__32684,switch__19496__auto__,c__19561__auto___32687,G__32515_32685,n__17261__auto___32683,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0 = (function (){
var statearr_32539 = [null,null,null,null,null,null,null];
(statearr_32539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__);

(statearr_32539[(1)] = (1));

return statearr_32539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1 = (function (state_32528){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_32528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e32540){if((e32540 instanceof Object)){
var ex__19500__auto__ = e32540;
var statearr_32541_32694 = state_32528;
(statearr_32541_32694[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32695 = state_32528;
state_32528 = G__32695;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__ = function(state_32528){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1.call(this,state_32528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__;
})()
;})(__32684,switch__19496__auto__,c__19561__auto___32687,G__32515_32685,n__17261__auto___32683,jobs,results,process,async))
})();
var state__19563__auto__ = (function (){var statearr_32542 = f__19562__auto__.call(null);
(statearr_32542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___32687);

return statearr_32542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(__32684,c__19561__auto___32687,G__32515_32685,n__17261__auto___32683,jobs,results,process,async))
);


break;
case "async":
var c__19561__auto___32696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32684,c__19561__auto___32696,G__32515_32685,n__17261__auto___32683,jobs,results,process,async){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (__32684,c__19561__auto___32696,G__32515_32685,n__17261__auto___32683,jobs,results,process,async){
return (function (state_32555){
var state_val_32556 = (state_32555[(1)]);
if((state_val_32556 === (1))){
var state_32555__$1 = state_32555;
var statearr_32557_32697 = state_32555__$1;
(statearr_32557_32697[(2)] = null);

(statearr_32557_32697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (2))){
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(4),jobs);
} else {
if((state_val_32556 === (3))){
var inst_32553 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32555__$1,inst_32553);
} else {
if((state_val_32556 === (4))){
var inst_32545 = (state_32555[(2)]);
var inst_32546 = async.call(null,inst_32545);
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32546)){
var statearr_32558_32698 = state_32555__$1;
(statearr_32558_32698[(1)] = (5));

} else {
var statearr_32559_32699 = state_32555__$1;
(statearr_32559_32699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (5))){
var state_32555__$1 = state_32555;
var statearr_32560_32700 = state_32555__$1;
(statearr_32560_32700[(2)] = null);

(statearr_32560_32700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (6))){
var state_32555__$1 = state_32555;
var statearr_32561_32701 = state_32555__$1;
(statearr_32561_32701[(2)] = null);

(statearr_32561_32701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (7))){
var inst_32551 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32562_32702 = state_32555__$1;
(statearr_32562_32702[(2)] = inst_32551);

(statearr_32562_32702[(1)] = (3));


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
});})(__32684,c__19561__auto___32696,G__32515_32685,n__17261__auto___32683,jobs,results,process,async))
;
return ((function (__32684,switch__19496__auto__,c__19561__auto___32696,G__32515_32685,n__17261__auto___32683,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0 = (function (){
var statearr_32566 = [null,null,null,null,null,null,null];
(statearr_32566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__);

(statearr_32566[(1)] = (1));

return statearr_32566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1 = (function (state_32555){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_32555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e32567){if((e32567 instanceof Object)){
var ex__19500__auto__ = e32567;
var statearr_32568_32703 = state_32555;
(statearr_32568_32703[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32704 = state_32555;
state_32555 = G__32704;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__ = function(state_32555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1.call(this,state_32555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__;
})()
;})(__32684,switch__19496__auto__,c__19561__auto___32696,G__32515_32685,n__17261__auto___32683,jobs,results,process,async))
})();
var state__19563__auto__ = (function (){var statearr_32569 = f__19562__auto__.call(null);
(statearr_32569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___32696);

return statearr_32569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(__32684,c__19561__auto___32696,G__32515_32685,n__17261__auto___32683,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32705 = (__32684 + (1));
__32684 = G__32705;
continue;
} else {
}
break;
}

var c__19561__auto___32706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___32706,jobs,results,process,async){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___32706,jobs,results,process,async){
return (function (state_32591){
var state_val_32592 = (state_32591[(1)]);
if((state_val_32592 === (1))){
var state_32591__$1 = state_32591;
var statearr_32593_32707 = state_32591__$1;
(statearr_32593_32707[(2)] = null);

(statearr_32593_32707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (2))){
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32591__$1,(4),from);
} else {
if((state_val_32592 === (3))){
var inst_32589 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32591__$1,inst_32589);
} else {
if((state_val_32592 === (4))){
var inst_32572 = (state_32591[(7)]);
var inst_32572__$1 = (state_32591[(2)]);
var inst_32573 = (inst_32572__$1 == null);
var state_32591__$1 = (function (){var statearr_32594 = state_32591;
(statearr_32594[(7)] = inst_32572__$1);

return statearr_32594;
})();
if(cljs.core.truth_(inst_32573)){
var statearr_32595_32708 = state_32591__$1;
(statearr_32595_32708[(1)] = (5));

} else {
var statearr_32596_32709 = state_32591__$1;
(statearr_32596_32709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (5))){
var inst_32575 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32591__$1 = state_32591;
var statearr_32597_32710 = state_32591__$1;
(statearr_32597_32710[(2)] = inst_32575);

(statearr_32597_32710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (6))){
var inst_32572 = (state_32591[(7)]);
var inst_32577 = (state_32591[(8)]);
var inst_32577__$1 = cljs.core.async.chan.call(null,(1));
var inst_32578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32579 = [inst_32572,inst_32577__$1];
var inst_32580 = (new cljs.core.PersistentVector(null,2,(5),inst_32578,inst_32579,null));
var state_32591__$1 = (function (){var statearr_32598 = state_32591;
(statearr_32598[(8)] = inst_32577__$1);

return statearr_32598;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32591__$1,(8),jobs,inst_32580);
} else {
if((state_val_32592 === (7))){
var inst_32587 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
var statearr_32599_32711 = state_32591__$1;
(statearr_32599_32711[(2)] = inst_32587);

(statearr_32599_32711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (8))){
var inst_32577 = (state_32591[(8)]);
var inst_32582 = (state_32591[(2)]);
var state_32591__$1 = (function (){var statearr_32600 = state_32591;
(statearr_32600[(9)] = inst_32582);

return statearr_32600;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32591__$1,(9),results,inst_32577);
} else {
if((state_val_32592 === (9))){
var inst_32584 = (state_32591[(2)]);
var state_32591__$1 = (function (){var statearr_32601 = state_32591;
(statearr_32601[(10)] = inst_32584);

return statearr_32601;
})();
var statearr_32602_32712 = state_32591__$1;
(statearr_32602_32712[(2)] = null);

(statearr_32602_32712[(1)] = (2));


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
});})(c__19561__auto___32706,jobs,results,process,async))
;
return ((function (switch__19496__auto__,c__19561__auto___32706,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0 = (function (){
var statearr_32606 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32606[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__);

(statearr_32606[(1)] = (1));

return statearr_32606;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1 = (function (state_32591){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_32591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e32607){if((e32607 instanceof Object)){
var ex__19500__auto__ = e32607;
var statearr_32608_32713 = state_32591;
(statearr_32608_32713[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32714 = state_32591;
state_32591 = G__32714;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__ = function(state_32591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1.call(this,state_32591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___32706,jobs,results,process,async))
})();
var state__19563__auto__ = (function (){var statearr_32609 = f__19562__auto__.call(null);
(statearr_32609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___32706);

return statearr_32609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___32706,jobs,results,process,async))
);


var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__,jobs,results,process,async){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__,jobs,results,process,async){
return (function (state_32647){
var state_val_32648 = (state_32647[(1)]);
if((state_val_32648 === (7))){
var inst_32643 = (state_32647[(2)]);
var state_32647__$1 = state_32647;
var statearr_32649_32715 = state_32647__$1;
(statearr_32649_32715[(2)] = inst_32643);

(statearr_32649_32715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (20))){
var state_32647__$1 = state_32647;
var statearr_32650_32716 = state_32647__$1;
(statearr_32650_32716[(2)] = null);

(statearr_32650_32716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (1))){
var state_32647__$1 = state_32647;
var statearr_32651_32717 = state_32647__$1;
(statearr_32651_32717[(2)] = null);

(statearr_32651_32717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (4))){
var inst_32612 = (state_32647[(7)]);
var inst_32612__$1 = (state_32647[(2)]);
var inst_32613 = (inst_32612__$1 == null);
var state_32647__$1 = (function (){var statearr_32652 = state_32647;
(statearr_32652[(7)] = inst_32612__$1);

return statearr_32652;
})();
if(cljs.core.truth_(inst_32613)){
var statearr_32653_32718 = state_32647__$1;
(statearr_32653_32718[(1)] = (5));

} else {
var statearr_32654_32719 = state_32647__$1;
(statearr_32654_32719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (15))){
var inst_32625 = (state_32647[(8)]);
var state_32647__$1 = state_32647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32647__$1,(18),to,inst_32625);
} else {
if((state_val_32648 === (21))){
var inst_32638 = (state_32647[(2)]);
var state_32647__$1 = state_32647;
var statearr_32655_32720 = state_32647__$1;
(statearr_32655_32720[(2)] = inst_32638);

(statearr_32655_32720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (13))){
var inst_32640 = (state_32647[(2)]);
var state_32647__$1 = (function (){var statearr_32656 = state_32647;
(statearr_32656[(9)] = inst_32640);

return statearr_32656;
})();
var statearr_32657_32721 = state_32647__$1;
(statearr_32657_32721[(2)] = null);

(statearr_32657_32721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (6))){
var inst_32612 = (state_32647[(7)]);
var state_32647__$1 = state_32647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32647__$1,(11),inst_32612);
} else {
if((state_val_32648 === (17))){
var inst_32633 = (state_32647[(2)]);
var state_32647__$1 = state_32647;
if(cljs.core.truth_(inst_32633)){
var statearr_32658_32722 = state_32647__$1;
(statearr_32658_32722[(1)] = (19));

} else {
var statearr_32659_32723 = state_32647__$1;
(statearr_32659_32723[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (3))){
var inst_32645 = (state_32647[(2)]);
var state_32647__$1 = state_32647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32647__$1,inst_32645);
} else {
if((state_val_32648 === (12))){
var inst_32622 = (state_32647[(10)]);
var state_32647__$1 = state_32647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32647__$1,(14),inst_32622);
} else {
if((state_val_32648 === (2))){
var state_32647__$1 = state_32647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32647__$1,(4),results);
} else {
if((state_val_32648 === (19))){
var state_32647__$1 = state_32647;
var statearr_32660_32724 = state_32647__$1;
(statearr_32660_32724[(2)] = null);

(statearr_32660_32724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (11))){
var inst_32622 = (state_32647[(2)]);
var state_32647__$1 = (function (){var statearr_32661 = state_32647;
(statearr_32661[(10)] = inst_32622);

return statearr_32661;
})();
var statearr_32662_32725 = state_32647__$1;
(statearr_32662_32725[(2)] = null);

(statearr_32662_32725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (9))){
var state_32647__$1 = state_32647;
var statearr_32663_32726 = state_32647__$1;
(statearr_32663_32726[(2)] = null);

(statearr_32663_32726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (5))){
var state_32647__$1 = state_32647;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32664_32727 = state_32647__$1;
(statearr_32664_32727[(1)] = (8));

} else {
var statearr_32665_32728 = state_32647__$1;
(statearr_32665_32728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (14))){
var inst_32627 = (state_32647[(11)]);
var inst_32625 = (state_32647[(8)]);
var inst_32625__$1 = (state_32647[(2)]);
var inst_32626 = (inst_32625__$1 == null);
var inst_32627__$1 = cljs.core.not.call(null,inst_32626);
var state_32647__$1 = (function (){var statearr_32666 = state_32647;
(statearr_32666[(11)] = inst_32627__$1);

(statearr_32666[(8)] = inst_32625__$1);

return statearr_32666;
})();
if(inst_32627__$1){
var statearr_32667_32729 = state_32647__$1;
(statearr_32667_32729[(1)] = (15));

} else {
var statearr_32668_32730 = state_32647__$1;
(statearr_32668_32730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (16))){
var inst_32627 = (state_32647[(11)]);
var state_32647__$1 = state_32647;
var statearr_32669_32731 = state_32647__$1;
(statearr_32669_32731[(2)] = inst_32627);

(statearr_32669_32731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (10))){
var inst_32619 = (state_32647[(2)]);
var state_32647__$1 = state_32647;
var statearr_32670_32732 = state_32647__$1;
(statearr_32670_32732[(2)] = inst_32619);

(statearr_32670_32732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (18))){
var inst_32630 = (state_32647[(2)]);
var state_32647__$1 = state_32647;
var statearr_32671_32733 = state_32647__$1;
(statearr_32671_32733[(2)] = inst_32630);

(statearr_32671_32733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32648 === (8))){
var inst_32616 = cljs.core.async.close_BANG_.call(null,to);
var state_32647__$1 = state_32647;
var statearr_32672_32734 = state_32647__$1;
(statearr_32672_32734[(2)] = inst_32616);

(statearr_32672_32734[(1)] = (10));


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
});})(c__19561__auto__,jobs,results,process,async))
;
return ((function (switch__19496__auto__,c__19561__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0 = (function (){
var statearr_32676 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32676[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__);

(statearr_32676[(1)] = (1));

return statearr_32676;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1 = (function (state_32647){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_32647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e32677){if((e32677 instanceof Object)){
var ex__19500__auto__ = e32677;
var statearr_32678_32735 = state_32647;
(statearr_32678_32735[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32736 = state_32647;
state_32647 = G__32736;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__ = function(state_32647){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1.call(this,state_32647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__,jobs,results,process,async))
})();
var state__19563__auto__ = (function (){var statearr_32679 = f__19562__auto__.call(null);
(statearr_32679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_32679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__,jobs,results,process,async))
);

return c__19561__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args32737 = [];
var len__17416__auto___32740 = arguments.length;
var i__17417__auto___32741 = (0);
while(true){
if((i__17417__auto___32741 < len__17416__auto___32740)){
args32737.push((arguments[i__17417__auto___32741]));

var G__32742 = (i__17417__auto___32741 + (1));
i__17417__auto___32741 = G__32742;
continue;
} else {
}
break;
}

var G__32739 = args32737.length;
switch (G__32739) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32737.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args32744 = [];
var len__17416__auto___32747 = arguments.length;
var i__17417__auto___32748 = (0);
while(true){
if((i__17417__auto___32748 < len__17416__auto___32747)){
args32744.push((arguments[i__17417__auto___32748]));

var G__32749 = (i__17417__auto___32748 + (1));
i__17417__auto___32748 = G__32749;
continue;
} else {
}
break;
}

var G__32746 = args32744.length;
switch (G__32746) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32744.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args32751 = [];
var len__17416__auto___32804 = arguments.length;
var i__17417__auto___32805 = (0);
while(true){
if((i__17417__auto___32805 < len__17416__auto___32804)){
args32751.push((arguments[i__17417__auto___32805]));

var G__32806 = (i__17417__auto___32805 + (1));
i__17417__auto___32805 = G__32806;
continue;
} else {
}
break;
}

var G__32753 = args32751.length;
switch (G__32753) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32751.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19561__auto___32808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___32808,tc,fc){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___32808,tc,fc){
return (function (state_32779){
var state_val_32780 = (state_32779[(1)]);
if((state_val_32780 === (7))){
var inst_32775 = (state_32779[(2)]);
var state_32779__$1 = state_32779;
var statearr_32781_32809 = state_32779__$1;
(statearr_32781_32809[(2)] = inst_32775);

(statearr_32781_32809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (1))){
var state_32779__$1 = state_32779;
var statearr_32782_32810 = state_32779__$1;
(statearr_32782_32810[(2)] = null);

(statearr_32782_32810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (4))){
var inst_32756 = (state_32779[(7)]);
var inst_32756__$1 = (state_32779[(2)]);
var inst_32757 = (inst_32756__$1 == null);
var state_32779__$1 = (function (){var statearr_32783 = state_32779;
(statearr_32783[(7)] = inst_32756__$1);

return statearr_32783;
})();
if(cljs.core.truth_(inst_32757)){
var statearr_32784_32811 = state_32779__$1;
(statearr_32784_32811[(1)] = (5));

} else {
var statearr_32785_32812 = state_32779__$1;
(statearr_32785_32812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (13))){
var state_32779__$1 = state_32779;
var statearr_32786_32813 = state_32779__$1;
(statearr_32786_32813[(2)] = null);

(statearr_32786_32813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (6))){
var inst_32756 = (state_32779[(7)]);
var inst_32762 = p.call(null,inst_32756);
var state_32779__$1 = state_32779;
if(cljs.core.truth_(inst_32762)){
var statearr_32787_32814 = state_32779__$1;
(statearr_32787_32814[(1)] = (9));

} else {
var statearr_32788_32815 = state_32779__$1;
(statearr_32788_32815[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (3))){
var inst_32777 = (state_32779[(2)]);
var state_32779__$1 = state_32779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32779__$1,inst_32777);
} else {
if((state_val_32780 === (12))){
var state_32779__$1 = state_32779;
var statearr_32789_32816 = state_32779__$1;
(statearr_32789_32816[(2)] = null);

(statearr_32789_32816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (2))){
var state_32779__$1 = state_32779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32779__$1,(4),ch);
} else {
if((state_val_32780 === (11))){
var inst_32756 = (state_32779[(7)]);
var inst_32766 = (state_32779[(2)]);
var state_32779__$1 = state_32779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32779__$1,(8),inst_32766,inst_32756);
} else {
if((state_val_32780 === (9))){
var state_32779__$1 = state_32779;
var statearr_32790_32817 = state_32779__$1;
(statearr_32790_32817[(2)] = tc);

(statearr_32790_32817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (5))){
var inst_32759 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32760 = cljs.core.async.close_BANG_.call(null,fc);
var state_32779__$1 = (function (){var statearr_32791 = state_32779;
(statearr_32791[(8)] = inst_32759);

return statearr_32791;
})();
var statearr_32792_32818 = state_32779__$1;
(statearr_32792_32818[(2)] = inst_32760);

(statearr_32792_32818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (14))){
var inst_32773 = (state_32779[(2)]);
var state_32779__$1 = state_32779;
var statearr_32793_32819 = state_32779__$1;
(statearr_32793_32819[(2)] = inst_32773);

(statearr_32793_32819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (10))){
var state_32779__$1 = state_32779;
var statearr_32794_32820 = state_32779__$1;
(statearr_32794_32820[(2)] = fc);

(statearr_32794_32820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (8))){
var inst_32768 = (state_32779[(2)]);
var state_32779__$1 = state_32779;
if(cljs.core.truth_(inst_32768)){
var statearr_32795_32821 = state_32779__$1;
(statearr_32795_32821[(1)] = (12));

} else {
var statearr_32796_32822 = state_32779__$1;
(statearr_32796_32822[(1)] = (13));

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
});})(c__19561__auto___32808,tc,fc))
;
return ((function (switch__19496__auto__,c__19561__auto___32808,tc,fc){
return (function() {
var cljs$core$async$state_machine__19497__auto__ = null;
var cljs$core$async$state_machine__19497__auto____0 = (function (){
var statearr_32800 = [null,null,null,null,null,null,null,null,null];
(statearr_32800[(0)] = cljs$core$async$state_machine__19497__auto__);

(statearr_32800[(1)] = (1));

return statearr_32800;
});
var cljs$core$async$state_machine__19497__auto____1 = (function (state_32779){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_32779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e32801){if((e32801 instanceof Object)){
var ex__19500__auto__ = e32801;
var statearr_32802_32823 = state_32779;
(statearr_32802_32823[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32824 = state_32779;
state_32779 = G__32824;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$state_machine__19497__auto__ = function(state_32779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19497__auto____1.call(this,state_32779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19497__auto____0;
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19497__auto____1;
return cljs$core$async$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___32808,tc,fc))
})();
var state__19563__auto__ = (function (){var statearr_32803 = f__19562__auto__.call(null);
(statearr_32803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___32808);

return statearr_32803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___32808,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__){
return (function (state_32871){
var state_val_32872 = (state_32871[(1)]);
if((state_val_32872 === (1))){
var inst_32857 = init;
var state_32871__$1 = (function (){var statearr_32873 = state_32871;
(statearr_32873[(7)] = inst_32857);

return statearr_32873;
})();
var statearr_32874_32889 = state_32871__$1;
(statearr_32874_32889[(2)] = null);

(statearr_32874_32889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (2))){
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32871__$1,(4),ch);
} else {
if((state_val_32872 === (3))){
var inst_32869 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32871__$1,inst_32869);
} else {
if((state_val_32872 === (4))){
var inst_32860 = (state_32871[(8)]);
var inst_32860__$1 = (state_32871[(2)]);
var inst_32861 = (inst_32860__$1 == null);
var state_32871__$1 = (function (){var statearr_32875 = state_32871;
(statearr_32875[(8)] = inst_32860__$1);

return statearr_32875;
})();
if(cljs.core.truth_(inst_32861)){
var statearr_32876_32890 = state_32871__$1;
(statearr_32876_32890[(1)] = (5));

} else {
var statearr_32877_32891 = state_32871__$1;
(statearr_32877_32891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (5))){
var inst_32857 = (state_32871[(7)]);
var state_32871__$1 = state_32871;
var statearr_32878_32892 = state_32871__$1;
(statearr_32878_32892[(2)] = inst_32857);

(statearr_32878_32892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (6))){
var inst_32857 = (state_32871[(7)]);
var inst_32860 = (state_32871[(8)]);
var inst_32864 = f.call(null,inst_32857,inst_32860);
var inst_32857__$1 = inst_32864;
var state_32871__$1 = (function (){var statearr_32879 = state_32871;
(statearr_32879[(7)] = inst_32857__$1);

return statearr_32879;
})();
var statearr_32880_32893 = state_32871__$1;
(statearr_32880_32893[(2)] = null);

(statearr_32880_32893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (7))){
var inst_32867 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
var statearr_32881_32894 = state_32871__$1;
(statearr_32881_32894[(2)] = inst_32867);

(statearr_32881_32894[(1)] = (3));


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
});})(c__19561__auto__))
;
return ((function (switch__19496__auto__,c__19561__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19497__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19497__auto____0 = (function (){
var statearr_32885 = [null,null,null,null,null,null,null,null,null];
(statearr_32885[(0)] = cljs$core$async$reduce_$_state_machine__19497__auto__);

(statearr_32885[(1)] = (1));

return statearr_32885;
});
var cljs$core$async$reduce_$_state_machine__19497__auto____1 = (function (state_32871){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_32871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e32886){if((e32886 instanceof Object)){
var ex__19500__auto__ = e32886;
var statearr_32887_32895 = state_32871;
(statearr_32887_32895[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32896 = state_32871;
state_32871 = G__32896;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19497__auto__ = function(state_32871){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19497__auto____1.call(this,state_32871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19497__auto____0;
cljs$core$async$reduce_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19497__auto____1;
return cljs$core$async$reduce_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__))
})();
var state__19563__auto__ = (function (){var statearr_32888 = f__19562__auto__.call(null);
(statearr_32888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_32888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__))
);

return c__19561__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args32897 = [];
var len__17416__auto___32949 = arguments.length;
var i__17417__auto___32950 = (0);
while(true){
if((i__17417__auto___32950 < len__17416__auto___32949)){
args32897.push((arguments[i__17417__auto___32950]));

var G__32951 = (i__17417__auto___32950 + (1));
i__17417__auto___32950 = G__32951;
continue;
} else {
}
break;
}

var G__32899 = args32897.length;
switch (G__32899) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32897.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__){
return (function (state_32924){
var state_val_32925 = (state_32924[(1)]);
if((state_val_32925 === (7))){
var inst_32906 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32926_32953 = state_32924__$1;
(statearr_32926_32953[(2)] = inst_32906);

(statearr_32926_32953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (1))){
var inst_32900 = cljs.core.seq.call(null,coll);
var inst_32901 = inst_32900;
var state_32924__$1 = (function (){var statearr_32927 = state_32924;
(statearr_32927[(7)] = inst_32901);

return statearr_32927;
})();
var statearr_32928_32954 = state_32924__$1;
(statearr_32928_32954[(2)] = null);

(statearr_32928_32954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (4))){
var inst_32901 = (state_32924[(7)]);
var inst_32904 = cljs.core.first.call(null,inst_32901);
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32924__$1,(7),ch,inst_32904);
} else {
if((state_val_32925 === (13))){
var inst_32918 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32929_32955 = state_32924__$1;
(statearr_32929_32955[(2)] = inst_32918);

(statearr_32929_32955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (6))){
var inst_32909 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
if(cljs.core.truth_(inst_32909)){
var statearr_32930_32956 = state_32924__$1;
(statearr_32930_32956[(1)] = (8));

} else {
var statearr_32931_32957 = state_32924__$1;
(statearr_32931_32957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (3))){
var inst_32922 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32924__$1,inst_32922);
} else {
if((state_val_32925 === (12))){
var state_32924__$1 = state_32924;
var statearr_32932_32958 = state_32924__$1;
(statearr_32932_32958[(2)] = null);

(statearr_32932_32958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (2))){
var inst_32901 = (state_32924[(7)]);
var state_32924__$1 = state_32924;
if(cljs.core.truth_(inst_32901)){
var statearr_32933_32959 = state_32924__$1;
(statearr_32933_32959[(1)] = (4));

} else {
var statearr_32934_32960 = state_32924__$1;
(statearr_32934_32960[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (11))){
var inst_32915 = cljs.core.async.close_BANG_.call(null,ch);
var state_32924__$1 = state_32924;
var statearr_32935_32961 = state_32924__$1;
(statearr_32935_32961[(2)] = inst_32915);

(statearr_32935_32961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (9))){
var state_32924__$1 = state_32924;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32936_32962 = state_32924__$1;
(statearr_32936_32962[(1)] = (11));

} else {
var statearr_32937_32963 = state_32924__$1;
(statearr_32937_32963[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (5))){
var inst_32901 = (state_32924[(7)]);
var state_32924__$1 = state_32924;
var statearr_32938_32964 = state_32924__$1;
(statearr_32938_32964[(2)] = inst_32901);

(statearr_32938_32964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (10))){
var inst_32920 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32939_32965 = state_32924__$1;
(statearr_32939_32965[(2)] = inst_32920);

(statearr_32939_32965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (8))){
var inst_32901 = (state_32924[(7)]);
var inst_32911 = cljs.core.next.call(null,inst_32901);
var inst_32901__$1 = inst_32911;
var state_32924__$1 = (function (){var statearr_32940 = state_32924;
(statearr_32940[(7)] = inst_32901__$1);

return statearr_32940;
})();
var statearr_32941_32966 = state_32924__$1;
(statearr_32941_32966[(2)] = null);

(statearr_32941_32966[(1)] = (2));


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
});})(c__19561__auto__))
;
return ((function (switch__19496__auto__,c__19561__auto__){
return (function() {
var cljs$core$async$state_machine__19497__auto__ = null;
var cljs$core$async$state_machine__19497__auto____0 = (function (){
var statearr_32945 = [null,null,null,null,null,null,null,null];
(statearr_32945[(0)] = cljs$core$async$state_machine__19497__auto__);

(statearr_32945[(1)] = (1));

return statearr_32945;
});
var cljs$core$async$state_machine__19497__auto____1 = (function (state_32924){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_32924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e32946){if((e32946 instanceof Object)){
var ex__19500__auto__ = e32946;
var statearr_32947_32967 = state_32924;
(statearr_32947_32967[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32968 = state_32924;
state_32924 = G__32968;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$state_machine__19497__auto__ = function(state_32924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19497__auto____1.call(this,state_32924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19497__auto____0;
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19497__auto____1;
return cljs$core$async$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__))
})();
var state__19563__auto__ = (function (){var statearr_32948 = f__19562__auto__.call(null);
(statearr_32948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_32948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__))
);

return c__19561__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17013__auto__ = (((_ == null))?null:_);
var m__17014__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,_);
} else {
var m__17014__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17014__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,ch);
} else {
var m__17014__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m);
} else {
var m__17014__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33190 = (function (mult,ch,cs,meta33191){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33191 = meta33191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33192,meta33191__$1){
var self__ = this;
var _33192__$1 = this;
return (new cljs.core.async.t_cljs$core$async33190(self__.mult,self__.ch,self__.cs,meta33191__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33192){
var self__ = this;
var _33192__$1 = this;
return self__.meta33191;
});})(cs))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33190.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33191","meta33191",1997397260,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33190";

cljs.core.async.t_cljs$core$async33190.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async33190");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33190 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33190(mult__$1,ch__$1,cs__$1,meta33191){
return (new cljs.core.async.t_cljs$core$async33190(mult__$1,ch__$1,cs__$1,meta33191));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33190(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19561__auto___33411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___33411,cs,m,dchan,dctr,done){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___33411,cs,m,dchan,dctr,done){
return (function (state_33323){
var state_val_33324 = (state_33323[(1)]);
if((state_val_33324 === (7))){
var inst_33319 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33325_33412 = state_33323__$1;
(statearr_33325_33412[(2)] = inst_33319);

(statearr_33325_33412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (20))){
var inst_33224 = (state_33323[(7)]);
var inst_33234 = cljs.core.first.call(null,inst_33224);
var inst_33235 = cljs.core.nth.call(null,inst_33234,(0),null);
var inst_33236 = cljs.core.nth.call(null,inst_33234,(1),null);
var state_33323__$1 = (function (){var statearr_33326 = state_33323;
(statearr_33326[(8)] = inst_33235);

return statearr_33326;
})();
if(cljs.core.truth_(inst_33236)){
var statearr_33327_33413 = state_33323__$1;
(statearr_33327_33413[(1)] = (22));

} else {
var statearr_33328_33414 = state_33323__$1;
(statearr_33328_33414[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (27))){
var inst_33266 = (state_33323[(9)]);
var inst_33271 = (state_33323[(10)]);
var inst_33264 = (state_33323[(11)]);
var inst_33195 = (state_33323[(12)]);
var inst_33271__$1 = cljs.core._nth.call(null,inst_33264,inst_33266);
var inst_33272 = cljs.core.async.put_BANG_.call(null,inst_33271__$1,inst_33195,done);
var state_33323__$1 = (function (){var statearr_33329 = state_33323;
(statearr_33329[(10)] = inst_33271__$1);

return statearr_33329;
})();
if(cljs.core.truth_(inst_33272)){
var statearr_33330_33415 = state_33323__$1;
(statearr_33330_33415[(1)] = (30));

} else {
var statearr_33331_33416 = state_33323__$1;
(statearr_33331_33416[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (1))){
var state_33323__$1 = state_33323;
var statearr_33332_33417 = state_33323__$1;
(statearr_33332_33417[(2)] = null);

(statearr_33332_33417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (24))){
var inst_33224 = (state_33323[(7)]);
var inst_33241 = (state_33323[(2)]);
var inst_33242 = cljs.core.next.call(null,inst_33224);
var inst_33204 = inst_33242;
var inst_33205 = null;
var inst_33206 = (0);
var inst_33207 = (0);
var state_33323__$1 = (function (){var statearr_33333 = state_33323;
(statearr_33333[(13)] = inst_33205);

(statearr_33333[(14)] = inst_33204);

(statearr_33333[(15)] = inst_33206);

(statearr_33333[(16)] = inst_33241);

(statearr_33333[(17)] = inst_33207);

return statearr_33333;
})();
var statearr_33334_33418 = state_33323__$1;
(statearr_33334_33418[(2)] = null);

(statearr_33334_33418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (39))){
var state_33323__$1 = state_33323;
var statearr_33338_33419 = state_33323__$1;
(statearr_33338_33419[(2)] = null);

(statearr_33338_33419[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (4))){
var inst_33195 = (state_33323[(12)]);
var inst_33195__$1 = (state_33323[(2)]);
var inst_33196 = (inst_33195__$1 == null);
var state_33323__$1 = (function (){var statearr_33339 = state_33323;
(statearr_33339[(12)] = inst_33195__$1);

return statearr_33339;
})();
if(cljs.core.truth_(inst_33196)){
var statearr_33340_33420 = state_33323__$1;
(statearr_33340_33420[(1)] = (5));

} else {
var statearr_33341_33421 = state_33323__$1;
(statearr_33341_33421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (15))){
var inst_33205 = (state_33323[(13)]);
var inst_33204 = (state_33323[(14)]);
var inst_33206 = (state_33323[(15)]);
var inst_33207 = (state_33323[(17)]);
var inst_33220 = (state_33323[(2)]);
var inst_33221 = (inst_33207 + (1));
var tmp33335 = inst_33205;
var tmp33336 = inst_33204;
var tmp33337 = inst_33206;
var inst_33204__$1 = tmp33336;
var inst_33205__$1 = tmp33335;
var inst_33206__$1 = tmp33337;
var inst_33207__$1 = inst_33221;
var state_33323__$1 = (function (){var statearr_33342 = state_33323;
(statearr_33342[(13)] = inst_33205__$1);

(statearr_33342[(18)] = inst_33220);

(statearr_33342[(14)] = inst_33204__$1);

(statearr_33342[(15)] = inst_33206__$1);

(statearr_33342[(17)] = inst_33207__$1);

return statearr_33342;
})();
var statearr_33343_33422 = state_33323__$1;
(statearr_33343_33422[(2)] = null);

(statearr_33343_33422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (21))){
var inst_33245 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33347_33423 = state_33323__$1;
(statearr_33347_33423[(2)] = inst_33245);

(statearr_33347_33423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (31))){
var inst_33271 = (state_33323[(10)]);
var inst_33275 = done.call(null,null);
var inst_33276 = cljs.core.async.untap_STAR_.call(null,m,inst_33271);
var state_33323__$1 = (function (){var statearr_33348 = state_33323;
(statearr_33348[(19)] = inst_33275);

return statearr_33348;
})();
var statearr_33349_33424 = state_33323__$1;
(statearr_33349_33424[(2)] = inst_33276);

(statearr_33349_33424[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (32))){
var inst_33263 = (state_33323[(20)]);
var inst_33266 = (state_33323[(9)]);
var inst_33264 = (state_33323[(11)]);
var inst_33265 = (state_33323[(21)]);
var inst_33278 = (state_33323[(2)]);
var inst_33279 = (inst_33266 + (1));
var tmp33344 = inst_33263;
var tmp33345 = inst_33264;
var tmp33346 = inst_33265;
var inst_33263__$1 = tmp33344;
var inst_33264__$1 = tmp33345;
var inst_33265__$1 = tmp33346;
var inst_33266__$1 = inst_33279;
var state_33323__$1 = (function (){var statearr_33350 = state_33323;
(statearr_33350[(20)] = inst_33263__$1);

(statearr_33350[(9)] = inst_33266__$1);

(statearr_33350[(11)] = inst_33264__$1);

(statearr_33350[(22)] = inst_33278);

(statearr_33350[(21)] = inst_33265__$1);

return statearr_33350;
})();
var statearr_33351_33425 = state_33323__$1;
(statearr_33351_33425[(2)] = null);

(statearr_33351_33425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (40))){
var inst_33291 = (state_33323[(23)]);
var inst_33295 = done.call(null,null);
var inst_33296 = cljs.core.async.untap_STAR_.call(null,m,inst_33291);
var state_33323__$1 = (function (){var statearr_33352 = state_33323;
(statearr_33352[(24)] = inst_33295);

return statearr_33352;
})();
var statearr_33353_33426 = state_33323__$1;
(statearr_33353_33426[(2)] = inst_33296);

(statearr_33353_33426[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (33))){
var inst_33282 = (state_33323[(25)]);
var inst_33284 = cljs.core.chunked_seq_QMARK_.call(null,inst_33282);
var state_33323__$1 = state_33323;
if(inst_33284){
var statearr_33354_33427 = state_33323__$1;
(statearr_33354_33427[(1)] = (36));

} else {
var statearr_33355_33428 = state_33323__$1;
(statearr_33355_33428[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (13))){
var inst_33214 = (state_33323[(26)]);
var inst_33217 = cljs.core.async.close_BANG_.call(null,inst_33214);
var state_33323__$1 = state_33323;
var statearr_33356_33429 = state_33323__$1;
(statearr_33356_33429[(2)] = inst_33217);

(statearr_33356_33429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (22))){
var inst_33235 = (state_33323[(8)]);
var inst_33238 = cljs.core.async.close_BANG_.call(null,inst_33235);
var state_33323__$1 = state_33323;
var statearr_33357_33430 = state_33323__$1;
(statearr_33357_33430[(2)] = inst_33238);

(statearr_33357_33430[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (36))){
var inst_33282 = (state_33323[(25)]);
var inst_33286 = cljs.core.chunk_first.call(null,inst_33282);
var inst_33287 = cljs.core.chunk_rest.call(null,inst_33282);
var inst_33288 = cljs.core.count.call(null,inst_33286);
var inst_33263 = inst_33287;
var inst_33264 = inst_33286;
var inst_33265 = inst_33288;
var inst_33266 = (0);
var state_33323__$1 = (function (){var statearr_33358 = state_33323;
(statearr_33358[(20)] = inst_33263);

(statearr_33358[(9)] = inst_33266);

(statearr_33358[(11)] = inst_33264);

(statearr_33358[(21)] = inst_33265);

return statearr_33358;
})();
var statearr_33359_33431 = state_33323__$1;
(statearr_33359_33431[(2)] = null);

(statearr_33359_33431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (41))){
var inst_33282 = (state_33323[(25)]);
var inst_33298 = (state_33323[(2)]);
var inst_33299 = cljs.core.next.call(null,inst_33282);
var inst_33263 = inst_33299;
var inst_33264 = null;
var inst_33265 = (0);
var inst_33266 = (0);
var state_33323__$1 = (function (){var statearr_33360 = state_33323;
(statearr_33360[(27)] = inst_33298);

(statearr_33360[(20)] = inst_33263);

(statearr_33360[(9)] = inst_33266);

(statearr_33360[(11)] = inst_33264);

(statearr_33360[(21)] = inst_33265);

return statearr_33360;
})();
var statearr_33361_33432 = state_33323__$1;
(statearr_33361_33432[(2)] = null);

(statearr_33361_33432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (43))){
var state_33323__$1 = state_33323;
var statearr_33362_33433 = state_33323__$1;
(statearr_33362_33433[(2)] = null);

(statearr_33362_33433[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (29))){
var inst_33307 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33363_33434 = state_33323__$1;
(statearr_33363_33434[(2)] = inst_33307);

(statearr_33363_33434[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (44))){
var inst_33316 = (state_33323[(2)]);
var state_33323__$1 = (function (){var statearr_33364 = state_33323;
(statearr_33364[(28)] = inst_33316);

return statearr_33364;
})();
var statearr_33365_33435 = state_33323__$1;
(statearr_33365_33435[(2)] = null);

(statearr_33365_33435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (6))){
var inst_33255 = (state_33323[(29)]);
var inst_33254 = cljs.core.deref.call(null,cs);
var inst_33255__$1 = cljs.core.keys.call(null,inst_33254);
var inst_33256 = cljs.core.count.call(null,inst_33255__$1);
var inst_33257 = cljs.core.reset_BANG_.call(null,dctr,inst_33256);
var inst_33262 = cljs.core.seq.call(null,inst_33255__$1);
var inst_33263 = inst_33262;
var inst_33264 = null;
var inst_33265 = (0);
var inst_33266 = (0);
var state_33323__$1 = (function (){var statearr_33366 = state_33323;
(statearr_33366[(30)] = inst_33257);

(statearr_33366[(20)] = inst_33263);

(statearr_33366[(29)] = inst_33255__$1);

(statearr_33366[(9)] = inst_33266);

(statearr_33366[(11)] = inst_33264);

(statearr_33366[(21)] = inst_33265);

return statearr_33366;
})();
var statearr_33367_33436 = state_33323__$1;
(statearr_33367_33436[(2)] = null);

(statearr_33367_33436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (28))){
var inst_33263 = (state_33323[(20)]);
var inst_33282 = (state_33323[(25)]);
var inst_33282__$1 = cljs.core.seq.call(null,inst_33263);
var state_33323__$1 = (function (){var statearr_33368 = state_33323;
(statearr_33368[(25)] = inst_33282__$1);

return statearr_33368;
})();
if(inst_33282__$1){
var statearr_33369_33437 = state_33323__$1;
(statearr_33369_33437[(1)] = (33));

} else {
var statearr_33370_33438 = state_33323__$1;
(statearr_33370_33438[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (25))){
var inst_33266 = (state_33323[(9)]);
var inst_33265 = (state_33323[(21)]);
var inst_33268 = (inst_33266 < inst_33265);
var inst_33269 = inst_33268;
var state_33323__$1 = state_33323;
if(cljs.core.truth_(inst_33269)){
var statearr_33371_33439 = state_33323__$1;
(statearr_33371_33439[(1)] = (27));

} else {
var statearr_33372_33440 = state_33323__$1;
(statearr_33372_33440[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (34))){
var state_33323__$1 = state_33323;
var statearr_33373_33441 = state_33323__$1;
(statearr_33373_33441[(2)] = null);

(statearr_33373_33441[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (17))){
var state_33323__$1 = state_33323;
var statearr_33374_33442 = state_33323__$1;
(statearr_33374_33442[(2)] = null);

(statearr_33374_33442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (3))){
var inst_33321 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33323__$1,inst_33321);
} else {
if((state_val_33324 === (12))){
var inst_33250 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33375_33443 = state_33323__$1;
(statearr_33375_33443[(2)] = inst_33250);

(statearr_33375_33443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (2))){
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33323__$1,(4),ch);
} else {
if((state_val_33324 === (23))){
var state_33323__$1 = state_33323;
var statearr_33376_33444 = state_33323__$1;
(statearr_33376_33444[(2)] = null);

(statearr_33376_33444[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (35))){
var inst_33305 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33377_33445 = state_33323__$1;
(statearr_33377_33445[(2)] = inst_33305);

(statearr_33377_33445[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (19))){
var inst_33224 = (state_33323[(7)]);
var inst_33228 = cljs.core.chunk_first.call(null,inst_33224);
var inst_33229 = cljs.core.chunk_rest.call(null,inst_33224);
var inst_33230 = cljs.core.count.call(null,inst_33228);
var inst_33204 = inst_33229;
var inst_33205 = inst_33228;
var inst_33206 = inst_33230;
var inst_33207 = (0);
var state_33323__$1 = (function (){var statearr_33378 = state_33323;
(statearr_33378[(13)] = inst_33205);

(statearr_33378[(14)] = inst_33204);

(statearr_33378[(15)] = inst_33206);

(statearr_33378[(17)] = inst_33207);

return statearr_33378;
})();
var statearr_33379_33446 = state_33323__$1;
(statearr_33379_33446[(2)] = null);

(statearr_33379_33446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (11))){
var inst_33224 = (state_33323[(7)]);
var inst_33204 = (state_33323[(14)]);
var inst_33224__$1 = cljs.core.seq.call(null,inst_33204);
var state_33323__$1 = (function (){var statearr_33380 = state_33323;
(statearr_33380[(7)] = inst_33224__$1);

return statearr_33380;
})();
if(inst_33224__$1){
var statearr_33381_33447 = state_33323__$1;
(statearr_33381_33447[(1)] = (16));

} else {
var statearr_33382_33448 = state_33323__$1;
(statearr_33382_33448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (9))){
var inst_33252 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33383_33449 = state_33323__$1;
(statearr_33383_33449[(2)] = inst_33252);

(statearr_33383_33449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (5))){
var inst_33202 = cljs.core.deref.call(null,cs);
var inst_33203 = cljs.core.seq.call(null,inst_33202);
var inst_33204 = inst_33203;
var inst_33205 = null;
var inst_33206 = (0);
var inst_33207 = (0);
var state_33323__$1 = (function (){var statearr_33384 = state_33323;
(statearr_33384[(13)] = inst_33205);

(statearr_33384[(14)] = inst_33204);

(statearr_33384[(15)] = inst_33206);

(statearr_33384[(17)] = inst_33207);

return statearr_33384;
})();
var statearr_33385_33450 = state_33323__$1;
(statearr_33385_33450[(2)] = null);

(statearr_33385_33450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (14))){
var state_33323__$1 = state_33323;
var statearr_33386_33451 = state_33323__$1;
(statearr_33386_33451[(2)] = null);

(statearr_33386_33451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (45))){
var inst_33313 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33387_33452 = state_33323__$1;
(statearr_33387_33452[(2)] = inst_33313);

(statearr_33387_33452[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (26))){
var inst_33255 = (state_33323[(29)]);
var inst_33309 = (state_33323[(2)]);
var inst_33310 = cljs.core.seq.call(null,inst_33255);
var state_33323__$1 = (function (){var statearr_33388 = state_33323;
(statearr_33388[(31)] = inst_33309);

return statearr_33388;
})();
if(inst_33310){
var statearr_33389_33453 = state_33323__$1;
(statearr_33389_33453[(1)] = (42));

} else {
var statearr_33390_33454 = state_33323__$1;
(statearr_33390_33454[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (16))){
var inst_33224 = (state_33323[(7)]);
var inst_33226 = cljs.core.chunked_seq_QMARK_.call(null,inst_33224);
var state_33323__$1 = state_33323;
if(inst_33226){
var statearr_33391_33455 = state_33323__$1;
(statearr_33391_33455[(1)] = (19));

} else {
var statearr_33392_33456 = state_33323__$1;
(statearr_33392_33456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (38))){
var inst_33302 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33393_33457 = state_33323__$1;
(statearr_33393_33457[(2)] = inst_33302);

(statearr_33393_33457[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (30))){
var state_33323__$1 = state_33323;
var statearr_33394_33458 = state_33323__$1;
(statearr_33394_33458[(2)] = null);

(statearr_33394_33458[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (10))){
var inst_33205 = (state_33323[(13)]);
var inst_33207 = (state_33323[(17)]);
var inst_33213 = cljs.core._nth.call(null,inst_33205,inst_33207);
var inst_33214 = cljs.core.nth.call(null,inst_33213,(0),null);
var inst_33215 = cljs.core.nth.call(null,inst_33213,(1),null);
var state_33323__$1 = (function (){var statearr_33395 = state_33323;
(statearr_33395[(26)] = inst_33214);

return statearr_33395;
})();
if(cljs.core.truth_(inst_33215)){
var statearr_33396_33459 = state_33323__$1;
(statearr_33396_33459[(1)] = (13));

} else {
var statearr_33397_33460 = state_33323__$1;
(statearr_33397_33460[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (18))){
var inst_33248 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33398_33461 = state_33323__$1;
(statearr_33398_33461[(2)] = inst_33248);

(statearr_33398_33461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (42))){
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33323__$1,(45),dchan);
} else {
if((state_val_33324 === (37))){
var inst_33282 = (state_33323[(25)]);
var inst_33291 = (state_33323[(23)]);
var inst_33195 = (state_33323[(12)]);
var inst_33291__$1 = cljs.core.first.call(null,inst_33282);
var inst_33292 = cljs.core.async.put_BANG_.call(null,inst_33291__$1,inst_33195,done);
var state_33323__$1 = (function (){var statearr_33399 = state_33323;
(statearr_33399[(23)] = inst_33291__$1);

return statearr_33399;
})();
if(cljs.core.truth_(inst_33292)){
var statearr_33400_33462 = state_33323__$1;
(statearr_33400_33462[(1)] = (39));

} else {
var statearr_33401_33463 = state_33323__$1;
(statearr_33401_33463[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (8))){
var inst_33206 = (state_33323[(15)]);
var inst_33207 = (state_33323[(17)]);
var inst_33209 = (inst_33207 < inst_33206);
var inst_33210 = inst_33209;
var state_33323__$1 = state_33323;
if(cljs.core.truth_(inst_33210)){
var statearr_33402_33464 = state_33323__$1;
(statearr_33402_33464[(1)] = (10));

} else {
var statearr_33403_33465 = state_33323__$1;
(statearr_33403_33465[(1)] = (11));

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
});})(c__19561__auto___33411,cs,m,dchan,dctr,done))
;
return ((function (switch__19496__auto__,c__19561__auto___33411,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19497__auto__ = null;
var cljs$core$async$mult_$_state_machine__19497__auto____0 = (function (){
var statearr_33407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33407[(0)] = cljs$core$async$mult_$_state_machine__19497__auto__);

(statearr_33407[(1)] = (1));

return statearr_33407;
});
var cljs$core$async$mult_$_state_machine__19497__auto____1 = (function (state_33323){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_33323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e33408){if((e33408 instanceof Object)){
var ex__19500__auto__ = e33408;
var statearr_33409_33466 = state_33323;
(statearr_33409_33466[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33467 = state_33323;
state_33323 = G__33467;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19497__auto__ = function(state_33323){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19497__auto____1.call(this,state_33323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19497__auto____0;
cljs$core$async$mult_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19497__auto____1;
return cljs$core$async$mult_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___33411,cs,m,dchan,dctr,done))
})();
var state__19563__auto__ = (function (){var statearr_33410 = f__19562__auto__.call(null);
(statearr_33410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___33411);

return statearr_33410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___33411,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args33468 = [];
var len__17416__auto___33471 = arguments.length;
var i__17417__auto___33472 = (0);
while(true){
if((i__17417__auto___33472 < len__17416__auto___33471)){
args33468.push((arguments[i__17417__auto___33472]));

var G__33473 = (i__17417__auto___33472 + (1));
i__17417__auto___33472 = G__33473;
continue;
} else {
}
break;
}

var G__33470 = args33468.length;
switch (G__33470) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33468.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,ch);
} else {
var m__17014__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,ch);
} else {
var m__17014__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m);
} else {
var m__17014__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,state_map);
} else {
var m__17014__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,mode);
} else {
var m__17014__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17423__auto__ = [];
var len__17416__auto___33485 = arguments.length;
var i__17417__auto___33486 = (0);
while(true){
if((i__17417__auto___33486 < len__17416__auto___33485)){
args__17423__auto__.push((arguments[i__17417__auto___33486]));

var G__33487 = (i__17417__auto___33486 + (1));
i__17417__auto___33486 = G__33487;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((3) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17424__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33479){
var map__33480 = p__33479;
var map__33480__$1 = ((((!((map__33480 == null)))?((((map__33480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33480):map__33480);
var opts = map__33480__$1;
var statearr_33482_33488 = state;
(statearr_33482_33488[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__33480,map__33480__$1,opts){
return (function (val){
var statearr_33483_33489 = state;
(statearr_33483_33489[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33480,map__33480__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_33484_33490 = state;
(statearr_33484_33490[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33475){
var G__33476 = cljs.core.first.call(null,seq33475);
var seq33475__$1 = cljs.core.next.call(null,seq33475);
var G__33477 = cljs.core.first.call(null,seq33475__$1);
var seq33475__$2 = cljs.core.next.call(null,seq33475__$1);
var G__33478 = cljs.core.first.call(null,seq33475__$2);
var seq33475__$3 = cljs.core.next.call(null,seq33475__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33476,G__33477,G__33478,seq33475__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33654 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33655){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33655 = meta33655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33656,meta33655__$1){
var self__ = this;
var _33656__$1 = this;
return (new cljs.core.async.t_cljs$core$async33654(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33655__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33656){
var self__ = this;
var _33656__$1 = this;
return self__.meta33655;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33654.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33654.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33654.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33654.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33654.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33654.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33654.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33654.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33654.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33655","meta33655",-2034498461,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33654";

cljs.core.async.t_cljs$core$async33654.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async33654");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33654 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33654(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33655){
return (new cljs.core.async.t_cljs$core$async33654(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33655));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33654(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19561__auto___33817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___33817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___33817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33754){
var state_val_33755 = (state_33754[(1)]);
if((state_val_33755 === (7))){
var inst_33672 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33756_33818 = state_33754__$1;
(statearr_33756_33818[(2)] = inst_33672);

(statearr_33756_33818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (20))){
var inst_33684 = (state_33754[(7)]);
var state_33754__$1 = state_33754;
var statearr_33757_33819 = state_33754__$1;
(statearr_33757_33819[(2)] = inst_33684);

(statearr_33757_33819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (27))){
var state_33754__$1 = state_33754;
var statearr_33758_33820 = state_33754__$1;
(statearr_33758_33820[(2)] = null);

(statearr_33758_33820[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (1))){
var inst_33660 = (state_33754[(8)]);
var inst_33660__$1 = calc_state.call(null);
var inst_33662 = (inst_33660__$1 == null);
var inst_33663 = cljs.core.not.call(null,inst_33662);
var state_33754__$1 = (function (){var statearr_33759 = state_33754;
(statearr_33759[(8)] = inst_33660__$1);

return statearr_33759;
})();
if(inst_33663){
var statearr_33760_33821 = state_33754__$1;
(statearr_33760_33821[(1)] = (2));

} else {
var statearr_33761_33822 = state_33754__$1;
(statearr_33761_33822[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (24))){
var inst_33714 = (state_33754[(9)]);
var inst_33707 = (state_33754[(10)]);
var inst_33728 = (state_33754[(11)]);
var inst_33728__$1 = inst_33707.call(null,inst_33714);
var state_33754__$1 = (function (){var statearr_33762 = state_33754;
(statearr_33762[(11)] = inst_33728__$1);

return statearr_33762;
})();
if(cljs.core.truth_(inst_33728__$1)){
var statearr_33763_33823 = state_33754__$1;
(statearr_33763_33823[(1)] = (29));

} else {
var statearr_33764_33824 = state_33754__$1;
(statearr_33764_33824[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (4))){
var inst_33675 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
if(cljs.core.truth_(inst_33675)){
var statearr_33765_33825 = state_33754__$1;
(statearr_33765_33825[(1)] = (8));

} else {
var statearr_33766_33826 = state_33754__$1;
(statearr_33766_33826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (15))){
var inst_33701 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
if(cljs.core.truth_(inst_33701)){
var statearr_33767_33827 = state_33754__$1;
(statearr_33767_33827[(1)] = (19));

} else {
var statearr_33768_33828 = state_33754__$1;
(statearr_33768_33828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (21))){
var inst_33706 = (state_33754[(12)]);
var inst_33706__$1 = (state_33754[(2)]);
var inst_33707 = cljs.core.get.call(null,inst_33706__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33708 = cljs.core.get.call(null,inst_33706__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33709 = cljs.core.get.call(null,inst_33706__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33754__$1 = (function (){var statearr_33769 = state_33754;
(statearr_33769[(13)] = inst_33708);

(statearr_33769[(12)] = inst_33706__$1);

(statearr_33769[(10)] = inst_33707);

return statearr_33769;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33754__$1,(22),inst_33709);
} else {
if((state_val_33755 === (31))){
var inst_33736 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
if(cljs.core.truth_(inst_33736)){
var statearr_33770_33829 = state_33754__$1;
(statearr_33770_33829[(1)] = (32));

} else {
var statearr_33771_33830 = state_33754__$1;
(statearr_33771_33830[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (32))){
var inst_33713 = (state_33754[(14)]);
var state_33754__$1 = state_33754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33754__$1,(35),out,inst_33713);
} else {
if((state_val_33755 === (33))){
var inst_33706 = (state_33754[(12)]);
var inst_33684 = inst_33706;
var state_33754__$1 = (function (){var statearr_33772 = state_33754;
(statearr_33772[(7)] = inst_33684);

return statearr_33772;
})();
var statearr_33773_33831 = state_33754__$1;
(statearr_33773_33831[(2)] = null);

(statearr_33773_33831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (13))){
var inst_33684 = (state_33754[(7)]);
var inst_33691 = inst_33684.cljs$lang$protocol_mask$partition0$;
var inst_33692 = (inst_33691 & (64));
var inst_33693 = inst_33684.cljs$core$ISeq$;
var inst_33694 = (inst_33692) || (inst_33693);
var state_33754__$1 = state_33754;
if(cljs.core.truth_(inst_33694)){
var statearr_33774_33832 = state_33754__$1;
(statearr_33774_33832[(1)] = (16));

} else {
var statearr_33775_33833 = state_33754__$1;
(statearr_33775_33833[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (22))){
var inst_33714 = (state_33754[(9)]);
var inst_33713 = (state_33754[(14)]);
var inst_33712 = (state_33754[(2)]);
var inst_33713__$1 = cljs.core.nth.call(null,inst_33712,(0),null);
var inst_33714__$1 = cljs.core.nth.call(null,inst_33712,(1),null);
var inst_33715 = (inst_33713__$1 == null);
var inst_33716 = cljs.core._EQ_.call(null,inst_33714__$1,change);
var inst_33717 = (inst_33715) || (inst_33716);
var state_33754__$1 = (function (){var statearr_33776 = state_33754;
(statearr_33776[(9)] = inst_33714__$1);

(statearr_33776[(14)] = inst_33713__$1);

return statearr_33776;
})();
if(cljs.core.truth_(inst_33717)){
var statearr_33777_33834 = state_33754__$1;
(statearr_33777_33834[(1)] = (23));

} else {
var statearr_33778_33835 = state_33754__$1;
(statearr_33778_33835[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (36))){
var inst_33706 = (state_33754[(12)]);
var inst_33684 = inst_33706;
var state_33754__$1 = (function (){var statearr_33779 = state_33754;
(statearr_33779[(7)] = inst_33684);

return statearr_33779;
})();
var statearr_33780_33836 = state_33754__$1;
(statearr_33780_33836[(2)] = null);

(statearr_33780_33836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (29))){
var inst_33728 = (state_33754[(11)]);
var state_33754__$1 = state_33754;
var statearr_33781_33837 = state_33754__$1;
(statearr_33781_33837[(2)] = inst_33728);

(statearr_33781_33837[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (6))){
var state_33754__$1 = state_33754;
var statearr_33782_33838 = state_33754__$1;
(statearr_33782_33838[(2)] = false);

(statearr_33782_33838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (28))){
var inst_33724 = (state_33754[(2)]);
var inst_33725 = calc_state.call(null);
var inst_33684 = inst_33725;
var state_33754__$1 = (function (){var statearr_33783 = state_33754;
(statearr_33783[(15)] = inst_33724);

(statearr_33783[(7)] = inst_33684);

return statearr_33783;
})();
var statearr_33784_33839 = state_33754__$1;
(statearr_33784_33839[(2)] = null);

(statearr_33784_33839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (25))){
var inst_33750 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33785_33840 = state_33754__$1;
(statearr_33785_33840[(2)] = inst_33750);

(statearr_33785_33840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (34))){
var inst_33748 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33786_33841 = state_33754__$1;
(statearr_33786_33841[(2)] = inst_33748);

(statearr_33786_33841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (17))){
var state_33754__$1 = state_33754;
var statearr_33787_33842 = state_33754__$1;
(statearr_33787_33842[(2)] = false);

(statearr_33787_33842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (3))){
var state_33754__$1 = state_33754;
var statearr_33788_33843 = state_33754__$1;
(statearr_33788_33843[(2)] = false);

(statearr_33788_33843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (12))){
var inst_33752 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33754__$1,inst_33752);
} else {
if((state_val_33755 === (2))){
var inst_33660 = (state_33754[(8)]);
var inst_33665 = inst_33660.cljs$lang$protocol_mask$partition0$;
var inst_33666 = (inst_33665 & (64));
var inst_33667 = inst_33660.cljs$core$ISeq$;
var inst_33668 = (inst_33666) || (inst_33667);
var state_33754__$1 = state_33754;
if(cljs.core.truth_(inst_33668)){
var statearr_33789_33844 = state_33754__$1;
(statearr_33789_33844[(1)] = (5));

} else {
var statearr_33790_33845 = state_33754__$1;
(statearr_33790_33845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (23))){
var inst_33713 = (state_33754[(14)]);
var inst_33719 = (inst_33713 == null);
var state_33754__$1 = state_33754;
if(cljs.core.truth_(inst_33719)){
var statearr_33791_33846 = state_33754__$1;
(statearr_33791_33846[(1)] = (26));

} else {
var statearr_33792_33847 = state_33754__$1;
(statearr_33792_33847[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (35))){
var inst_33739 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
if(cljs.core.truth_(inst_33739)){
var statearr_33793_33848 = state_33754__$1;
(statearr_33793_33848[(1)] = (36));

} else {
var statearr_33794_33849 = state_33754__$1;
(statearr_33794_33849[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (19))){
var inst_33684 = (state_33754[(7)]);
var inst_33703 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33684);
var state_33754__$1 = state_33754;
var statearr_33795_33850 = state_33754__$1;
(statearr_33795_33850[(2)] = inst_33703);

(statearr_33795_33850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (11))){
var inst_33684 = (state_33754[(7)]);
var inst_33688 = (inst_33684 == null);
var inst_33689 = cljs.core.not.call(null,inst_33688);
var state_33754__$1 = state_33754;
if(inst_33689){
var statearr_33796_33851 = state_33754__$1;
(statearr_33796_33851[(1)] = (13));

} else {
var statearr_33797_33852 = state_33754__$1;
(statearr_33797_33852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (9))){
var inst_33660 = (state_33754[(8)]);
var state_33754__$1 = state_33754;
var statearr_33798_33853 = state_33754__$1;
(statearr_33798_33853[(2)] = inst_33660);

(statearr_33798_33853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (5))){
var state_33754__$1 = state_33754;
var statearr_33799_33854 = state_33754__$1;
(statearr_33799_33854[(2)] = true);

(statearr_33799_33854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (14))){
var state_33754__$1 = state_33754;
var statearr_33800_33855 = state_33754__$1;
(statearr_33800_33855[(2)] = false);

(statearr_33800_33855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (26))){
var inst_33714 = (state_33754[(9)]);
var inst_33721 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33714);
var state_33754__$1 = state_33754;
var statearr_33801_33856 = state_33754__$1;
(statearr_33801_33856[(2)] = inst_33721);

(statearr_33801_33856[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (16))){
var state_33754__$1 = state_33754;
var statearr_33802_33857 = state_33754__$1;
(statearr_33802_33857[(2)] = true);

(statearr_33802_33857[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (38))){
var inst_33744 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33803_33858 = state_33754__$1;
(statearr_33803_33858[(2)] = inst_33744);

(statearr_33803_33858[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (30))){
var inst_33708 = (state_33754[(13)]);
var inst_33714 = (state_33754[(9)]);
var inst_33707 = (state_33754[(10)]);
var inst_33731 = cljs.core.empty_QMARK_.call(null,inst_33707);
var inst_33732 = inst_33708.call(null,inst_33714);
var inst_33733 = cljs.core.not.call(null,inst_33732);
var inst_33734 = (inst_33731) && (inst_33733);
var state_33754__$1 = state_33754;
var statearr_33804_33859 = state_33754__$1;
(statearr_33804_33859[(2)] = inst_33734);

(statearr_33804_33859[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (10))){
var inst_33660 = (state_33754[(8)]);
var inst_33680 = (state_33754[(2)]);
var inst_33681 = cljs.core.get.call(null,inst_33680,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33682 = cljs.core.get.call(null,inst_33680,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33683 = cljs.core.get.call(null,inst_33680,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33684 = inst_33660;
var state_33754__$1 = (function (){var statearr_33805 = state_33754;
(statearr_33805[(16)] = inst_33681);

(statearr_33805[(17)] = inst_33682);

(statearr_33805[(18)] = inst_33683);

(statearr_33805[(7)] = inst_33684);

return statearr_33805;
})();
var statearr_33806_33860 = state_33754__$1;
(statearr_33806_33860[(2)] = null);

(statearr_33806_33860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (18))){
var inst_33698 = (state_33754[(2)]);
var state_33754__$1 = state_33754;
var statearr_33807_33861 = state_33754__$1;
(statearr_33807_33861[(2)] = inst_33698);

(statearr_33807_33861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (37))){
var state_33754__$1 = state_33754;
var statearr_33808_33862 = state_33754__$1;
(statearr_33808_33862[(2)] = null);

(statearr_33808_33862[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33755 === (8))){
var inst_33660 = (state_33754[(8)]);
var inst_33677 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33660);
var state_33754__$1 = state_33754;
var statearr_33809_33863 = state_33754__$1;
(statearr_33809_33863[(2)] = inst_33677);

(statearr_33809_33863[(1)] = (10));


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
});})(c__19561__auto___33817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19496__auto__,c__19561__auto___33817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19497__auto__ = null;
var cljs$core$async$mix_$_state_machine__19497__auto____0 = (function (){
var statearr_33813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33813[(0)] = cljs$core$async$mix_$_state_machine__19497__auto__);

(statearr_33813[(1)] = (1));

return statearr_33813;
});
var cljs$core$async$mix_$_state_machine__19497__auto____1 = (function (state_33754){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_33754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e33814){if((e33814 instanceof Object)){
var ex__19500__auto__ = e33814;
var statearr_33815_33864 = state_33754;
(statearr_33815_33864[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33865 = state_33754;
state_33754 = G__33865;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19497__auto__ = function(state_33754){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19497__auto____1.call(this,state_33754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19497__auto____0;
cljs$core$async$mix_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19497__auto____1;
return cljs$core$async$mix_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___33817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19563__auto__ = (function (){var statearr_33816 = f__19562__auto__.call(null);
(statearr_33816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___33817);

return statearr_33816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___33817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17013__auto__ = (((p == null))?null:p);
var m__17014__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17014__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17013__auto__ = (((p == null))?null:p);
var m__17014__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,p,v,ch);
} else {
var m__17014__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args33866 = [];
var len__17416__auto___33869 = arguments.length;
var i__17417__auto___33870 = (0);
while(true){
if((i__17417__auto___33870 < len__17416__auto___33869)){
args33866.push((arguments[i__17417__auto___33870]));

var G__33871 = (i__17417__auto___33870 + (1));
i__17417__auto___33870 = G__33871;
continue;
} else {
}
break;
}

var G__33868 = args33866.length;
switch (G__33868) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33866.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17013__auto__ = (((p == null))?null:p);
var m__17014__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,p);
} else {
var m__17014__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17013__auto__ = (((p == null))?null:p);
var m__17014__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,p,v);
} else {
var m__17014__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args33874 = [];
var len__17416__auto___33999 = arguments.length;
var i__17417__auto___34000 = (0);
while(true){
if((i__17417__auto___34000 < len__17416__auto___33999)){
args33874.push((arguments[i__17417__auto___34000]));

var G__34001 = (i__17417__auto___34000 + (1));
i__17417__auto___34000 = G__34001;
continue;
} else {
}
break;
}

var G__33876 = args33874.length;
switch (G__33876) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33874.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16358__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16358__auto__,mults){
return (function (p1__33873_SHARP_){
if(cljs.core.truth_(p1__33873_SHARP_.call(null,topic))){
return p1__33873_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33873_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16358__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33877 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33878){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33878 = meta33878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33879,meta33878__$1){
var self__ = this;
var _33879__$1 = this;
return (new cljs.core.async.t_cljs$core$async33877(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33878__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33879){
var self__ = this;
var _33879__$1 = this;
return self__.meta33878;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33877.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33877.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33877.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async33877.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33877.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33877.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33877.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33877.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33878","meta33878",1606748930,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33877";

cljs.core.async.t_cljs$core$async33877.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async33877");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33877 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33877(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33878){
return (new cljs.core.async.t_cljs$core$async33877(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33878));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33877(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19561__auto___34003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___34003,mults,ensure_mult,p){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___34003,mults,ensure_mult,p){
return (function (state_33951){
var state_val_33952 = (state_33951[(1)]);
if((state_val_33952 === (7))){
var inst_33947 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
var statearr_33953_34004 = state_33951__$1;
(statearr_33953_34004[(2)] = inst_33947);

(statearr_33953_34004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (20))){
var state_33951__$1 = state_33951;
var statearr_33954_34005 = state_33951__$1;
(statearr_33954_34005[(2)] = null);

(statearr_33954_34005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (1))){
var state_33951__$1 = state_33951;
var statearr_33955_34006 = state_33951__$1;
(statearr_33955_34006[(2)] = null);

(statearr_33955_34006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (24))){
var inst_33930 = (state_33951[(7)]);
var inst_33939 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33930);
var state_33951__$1 = state_33951;
var statearr_33956_34007 = state_33951__$1;
(statearr_33956_34007[(2)] = inst_33939);

(statearr_33956_34007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (4))){
var inst_33882 = (state_33951[(8)]);
var inst_33882__$1 = (state_33951[(2)]);
var inst_33883 = (inst_33882__$1 == null);
var state_33951__$1 = (function (){var statearr_33957 = state_33951;
(statearr_33957[(8)] = inst_33882__$1);

return statearr_33957;
})();
if(cljs.core.truth_(inst_33883)){
var statearr_33958_34008 = state_33951__$1;
(statearr_33958_34008[(1)] = (5));

} else {
var statearr_33959_34009 = state_33951__$1;
(statearr_33959_34009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (15))){
var inst_33924 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
var statearr_33960_34010 = state_33951__$1;
(statearr_33960_34010[(2)] = inst_33924);

(statearr_33960_34010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (21))){
var inst_33944 = (state_33951[(2)]);
var state_33951__$1 = (function (){var statearr_33961 = state_33951;
(statearr_33961[(9)] = inst_33944);

return statearr_33961;
})();
var statearr_33962_34011 = state_33951__$1;
(statearr_33962_34011[(2)] = null);

(statearr_33962_34011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (13))){
var inst_33906 = (state_33951[(10)]);
var inst_33908 = cljs.core.chunked_seq_QMARK_.call(null,inst_33906);
var state_33951__$1 = state_33951;
if(inst_33908){
var statearr_33963_34012 = state_33951__$1;
(statearr_33963_34012[(1)] = (16));

} else {
var statearr_33964_34013 = state_33951__$1;
(statearr_33964_34013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (22))){
var inst_33936 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
if(cljs.core.truth_(inst_33936)){
var statearr_33965_34014 = state_33951__$1;
(statearr_33965_34014[(1)] = (23));

} else {
var statearr_33966_34015 = state_33951__$1;
(statearr_33966_34015[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (6))){
var inst_33882 = (state_33951[(8)]);
var inst_33930 = (state_33951[(7)]);
var inst_33932 = (state_33951[(11)]);
var inst_33930__$1 = topic_fn.call(null,inst_33882);
var inst_33931 = cljs.core.deref.call(null,mults);
var inst_33932__$1 = cljs.core.get.call(null,inst_33931,inst_33930__$1);
var state_33951__$1 = (function (){var statearr_33967 = state_33951;
(statearr_33967[(7)] = inst_33930__$1);

(statearr_33967[(11)] = inst_33932__$1);

return statearr_33967;
})();
if(cljs.core.truth_(inst_33932__$1)){
var statearr_33968_34016 = state_33951__$1;
(statearr_33968_34016[(1)] = (19));

} else {
var statearr_33969_34017 = state_33951__$1;
(statearr_33969_34017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (25))){
var inst_33941 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
var statearr_33970_34018 = state_33951__$1;
(statearr_33970_34018[(2)] = inst_33941);

(statearr_33970_34018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (17))){
var inst_33906 = (state_33951[(10)]);
var inst_33915 = cljs.core.first.call(null,inst_33906);
var inst_33916 = cljs.core.async.muxch_STAR_.call(null,inst_33915);
var inst_33917 = cljs.core.async.close_BANG_.call(null,inst_33916);
var inst_33918 = cljs.core.next.call(null,inst_33906);
var inst_33892 = inst_33918;
var inst_33893 = null;
var inst_33894 = (0);
var inst_33895 = (0);
var state_33951__$1 = (function (){var statearr_33971 = state_33951;
(statearr_33971[(12)] = inst_33893);

(statearr_33971[(13)] = inst_33892);

(statearr_33971[(14)] = inst_33894);

(statearr_33971[(15)] = inst_33895);

(statearr_33971[(16)] = inst_33917);

return statearr_33971;
})();
var statearr_33972_34019 = state_33951__$1;
(statearr_33972_34019[(2)] = null);

(statearr_33972_34019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (3))){
var inst_33949 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33951__$1,inst_33949);
} else {
if((state_val_33952 === (12))){
var inst_33926 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
var statearr_33973_34020 = state_33951__$1;
(statearr_33973_34020[(2)] = inst_33926);

(statearr_33973_34020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (2))){
var state_33951__$1 = state_33951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33951__$1,(4),ch);
} else {
if((state_val_33952 === (23))){
var state_33951__$1 = state_33951;
var statearr_33974_34021 = state_33951__$1;
(statearr_33974_34021[(2)] = null);

(statearr_33974_34021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (19))){
var inst_33882 = (state_33951[(8)]);
var inst_33932 = (state_33951[(11)]);
var inst_33934 = cljs.core.async.muxch_STAR_.call(null,inst_33932);
var state_33951__$1 = state_33951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33951__$1,(22),inst_33934,inst_33882);
} else {
if((state_val_33952 === (11))){
var inst_33892 = (state_33951[(13)]);
var inst_33906 = (state_33951[(10)]);
var inst_33906__$1 = cljs.core.seq.call(null,inst_33892);
var state_33951__$1 = (function (){var statearr_33975 = state_33951;
(statearr_33975[(10)] = inst_33906__$1);

return statearr_33975;
})();
if(inst_33906__$1){
var statearr_33976_34022 = state_33951__$1;
(statearr_33976_34022[(1)] = (13));

} else {
var statearr_33977_34023 = state_33951__$1;
(statearr_33977_34023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (9))){
var inst_33928 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
var statearr_33978_34024 = state_33951__$1;
(statearr_33978_34024[(2)] = inst_33928);

(statearr_33978_34024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (5))){
var inst_33889 = cljs.core.deref.call(null,mults);
var inst_33890 = cljs.core.vals.call(null,inst_33889);
var inst_33891 = cljs.core.seq.call(null,inst_33890);
var inst_33892 = inst_33891;
var inst_33893 = null;
var inst_33894 = (0);
var inst_33895 = (0);
var state_33951__$1 = (function (){var statearr_33979 = state_33951;
(statearr_33979[(12)] = inst_33893);

(statearr_33979[(13)] = inst_33892);

(statearr_33979[(14)] = inst_33894);

(statearr_33979[(15)] = inst_33895);

return statearr_33979;
})();
var statearr_33980_34025 = state_33951__$1;
(statearr_33980_34025[(2)] = null);

(statearr_33980_34025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (14))){
var state_33951__$1 = state_33951;
var statearr_33984_34026 = state_33951__$1;
(statearr_33984_34026[(2)] = null);

(statearr_33984_34026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (16))){
var inst_33906 = (state_33951[(10)]);
var inst_33910 = cljs.core.chunk_first.call(null,inst_33906);
var inst_33911 = cljs.core.chunk_rest.call(null,inst_33906);
var inst_33912 = cljs.core.count.call(null,inst_33910);
var inst_33892 = inst_33911;
var inst_33893 = inst_33910;
var inst_33894 = inst_33912;
var inst_33895 = (0);
var state_33951__$1 = (function (){var statearr_33985 = state_33951;
(statearr_33985[(12)] = inst_33893);

(statearr_33985[(13)] = inst_33892);

(statearr_33985[(14)] = inst_33894);

(statearr_33985[(15)] = inst_33895);

return statearr_33985;
})();
var statearr_33986_34027 = state_33951__$1;
(statearr_33986_34027[(2)] = null);

(statearr_33986_34027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (10))){
var inst_33893 = (state_33951[(12)]);
var inst_33892 = (state_33951[(13)]);
var inst_33894 = (state_33951[(14)]);
var inst_33895 = (state_33951[(15)]);
var inst_33900 = cljs.core._nth.call(null,inst_33893,inst_33895);
var inst_33901 = cljs.core.async.muxch_STAR_.call(null,inst_33900);
var inst_33902 = cljs.core.async.close_BANG_.call(null,inst_33901);
var inst_33903 = (inst_33895 + (1));
var tmp33981 = inst_33893;
var tmp33982 = inst_33892;
var tmp33983 = inst_33894;
var inst_33892__$1 = tmp33982;
var inst_33893__$1 = tmp33981;
var inst_33894__$1 = tmp33983;
var inst_33895__$1 = inst_33903;
var state_33951__$1 = (function (){var statearr_33987 = state_33951;
(statearr_33987[(12)] = inst_33893__$1);

(statearr_33987[(13)] = inst_33892__$1);

(statearr_33987[(14)] = inst_33894__$1);

(statearr_33987[(17)] = inst_33902);

(statearr_33987[(15)] = inst_33895__$1);

return statearr_33987;
})();
var statearr_33988_34028 = state_33951__$1;
(statearr_33988_34028[(2)] = null);

(statearr_33988_34028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (18))){
var inst_33921 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
var statearr_33989_34029 = state_33951__$1;
(statearr_33989_34029[(2)] = inst_33921);

(statearr_33989_34029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (8))){
var inst_33894 = (state_33951[(14)]);
var inst_33895 = (state_33951[(15)]);
var inst_33897 = (inst_33895 < inst_33894);
var inst_33898 = inst_33897;
var state_33951__$1 = state_33951;
if(cljs.core.truth_(inst_33898)){
var statearr_33990_34030 = state_33951__$1;
(statearr_33990_34030[(1)] = (10));

} else {
var statearr_33991_34031 = state_33951__$1;
(statearr_33991_34031[(1)] = (11));

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
});})(c__19561__auto___34003,mults,ensure_mult,p))
;
return ((function (switch__19496__auto__,c__19561__auto___34003,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19497__auto__ = null;
var cljs$core$async$state_machine__19497__auto____0 = (function (){
var statearr_33995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33995[(0)] = cljs$core$async$state_machine__19497__auto__);

(statearr_33995[(1)] = (1));

return statearr_33995;
});
var cljs$core$async$state_machine__19497__auto____1 = (function (state_33951){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_33951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e33996){if((e33996 instanceof Object)){
var ex__19500__auto__ = e33996;
var statearr_33997_34032 = state_33951;
(statearr_33997_34032[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34033 = state_33951;
state_33951 = G__34033;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$state_machine__19497__auto__ = function(state_33951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19497__auto____1.call(this,state_33951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19497__auto____0;
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19497__auto____1;
return cljs$core$async$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___34003,mults,ensure_mult,p))
})();
var state__19563__auto__ = (function (){var statearr_33998 = f__19562__auto__.call(null);
(statearr_33998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___34003);

return statearr_33998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___34003,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args34034 = [];
var len__17416__auto___34037 = arguments.length;
var i__17417__auto___34038 = (0);
while(true){
if((i__17417__auto___34038 < len__17416__auto___34037)){
args34034.push((arguments[i__17417__auto___34038]));

var G__34039 = (i__17417__auto___34038 + (1));
i__17417__auto___34038 = G__34039;
continue;
} else {
}
break;
}

var G__34036 = args34034.length;
switch (G__34036) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34034.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args34041 = [];
var len__17416__auto___34044 = arguments.length;
var i__17417__auto___34045 = (0);
while(true){
if((i__17417__auto___34045 < len__17416__auto___34044)){
args34041.push((arguments[i__17417__auto___34045]));

var G__34046 = (i__17417__auto___34045 + (1));
i__17417__auto___34045 = G__34046;
continue;
} else {
}
break;
}

var G__34043 = args34041.length;
switch (G__34043) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34041.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args34048 = [];
var len__17416__auto___34119 = arguments.length;
var i__17417__auto___34120 = (0);
while(true){
if((i__17417__auto___34120 < len__17416__auto___34119)){
args34048.push((arguments[i__17417__auto___34120]));

var G__34121 = (i__17417__auto___34120 + (1));
i__17417__auto___34120 = G__34121;
continue;
} else {
}
break;
}

var G__34050 = args34048.length;
switch (G__34050) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34048.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19561__auto___34123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___34123,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___34123,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34089){
var state_val_34090 = (state_34089[(1)]);
if((state_val_34090 === (7))){
var state_34089__$1 = state_34089;
var statearr_34091_34124 = state_34089__$1;
(statearr_34091_34124[(2)] = null);

(statearr_34091_34124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (1))){
var state_34089__$1 = state_34089;
var statearr_34092_34125 = state_34089__$1;
(statearr_34092_34125[(2)] = null);

(statearr_34092_34125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (4))){
var inst_34053 = (state_34089[(7)]);
var inst_34055 = (inst_34053 < cnt);
var state_34089__$1 = state_34089;
if(cljs.core.truth_(inst_34055)){
var statearr_34093_34126 = state_34089__$1;
(statearr_34093_34126[(1)] = (6));

} else {
var statearr_34094_34127 = state_34089__$1;
(statearr_34094_34127[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (15))){
var inst_34085 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34095_34128 = state_34089__$1;
(statearr_34095_34128[(2)] = inst_34085);

(statearr_34095_34128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (13))){
var inst_34078 = cljs.core.async.close_BANG_.call(null,out);
var state_34089__$1 = state_34089;
var statearr_34096_34129 = state_34089__$1;
(statearr_34096_34129[(2)] = inst_34078);

(statearr_34096_34129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (6))){
var state_34089__$1 = state_34089;
var statearr_34097_34130 = state_34089__$1;
(statearr_34097_34130[(2)] = null);

(statearr_34097_34130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (3))){
var inst_34087 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34089__$1,inst_34087);
} else {
if((state_val_34090 === (12))){
var inst_34075 = (state_34089[(8)]);
var inst_34075__$1 = (state_34089[(2)]);
var inst_34076 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34075__$1);
var state_34089__$1 = (function (){var statearr_34098 = state_34089;
(statearr_34098[(8)] = inst_34075__$1);

return statearr_34098;
})();
if(cljs.core.truth_(inst_34076)){
var statearr_34099_34131 = state_34089__$1;
(statearr_34099_34131[(1)] = (13));

} else {
var statearr_34100_34132 = state_34089__$1;
(statearr_34100_34132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (2))){
var inst_34052 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34053 = (0);
var state_34089__$1 = (function (){var statearr_34101 = state_34089;
(statearr_34101[(9)] = inst_34052);

(statearr_34101[(7)] = inst_34053);

return statearr_34101;
})();
var statearr_34102_34133 = state_34089__$1;
(statearr_34102_34133[(2)] = null);

(statearr_34102_34133[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (11))){
var inst_34053 = (state_34089[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34089,(10),Object,null,(9));
var inst_34062 = chs__$1.call(null,inst_34053);
var inst_34063 = done.call(null,inst_34053);
var inst_34064 = cljs.core.async.take_BANG_.call(null,inst_34062,inst_34063);
var state_34089__$1 = state_34089;
var statearr_34103_34134 = state_34089__$1;
(statearr_34103_34134[(2)] = inst_34064);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34089__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (9))){
var inst_34053 = (state_34089[(7)]);
var inst_34066 = (state_34089[(2)]);
var inst_34067 = (inst_34053 + (1));
var inst_34053__$1 = inst_34067;
var state_34089__$1 = (function (){var statearr_34104 = state_34089;
(statearr_34104[(10)] = inst_34066);

(statearr_34104[(7)] = inst_34053__$1);

return statearr_34104;
})();
var statearr_34105_34135 = state_34089__$1;
(statearr_34105_34135[(2)] = null);

(statearr_34105_34135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (5))){
var inst_34073 = (state_34089[(2)]);
var state_34089__$1 = (function (){var statearr_34106 = state_34089;
(statearr_34106[(11)] = inst_34073);

return statearr_34106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34089__$1,(12),dchan);
} else {
if((state_val_34090 === (14))){
var inst_34075 = (state_34089[(8)]);
var inst_34080 = cljs.core.apply.call(null,f,inst_34075);
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34089__$1,(16),out,inst_34080);
} else {
if((state_val_34090 === (16))){
var inst_34082 = (state_34089[(2)]);
var state_34089__$1 = (function (){var statearr_34107 = state_34089;
(statearr_34107[(12)] = inst_34082);

return statearr_34107;
})();
var statearr_34108_34136 = state_34089__$1;
(statearr_34108_34136[(2)] = null);

(statearr_34108_34136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (10))){
var inst_34057 = (state_34089[(2)]);
var inst_34058 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34089__$1 = (function (){var statearr_34109 = state_34089;
(statearr_34109[(13)] = inst_34057);

return statearr_34109;
})();
var statearr_34110_34137 = state_34089__$1;
(statearr_34110_34137[(2)] = inst_34058);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34089__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (8))){
var inst_34071 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34111_34138 = state_34089__$1;
(statearr_34111_34138[(2)] = inst_34071);

(statearr_34111_34138[(1)] = (5));


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
});})(c__19561__auto___34123,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19496__auto__,c__19561__auto___34123,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19497__auto__ = null;
var cljs$core$async$state_machine__19497__auto____0 = (function (){
var statearr_34115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34115[(0)] = cljs$core$async$state_machine__19497__auto__);

(statearr_34115[(1)] = (1));

return statearr_34115;
});
var cljs$core$async$state_machine__19497__auto____1 = (function (state_34089){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_34089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e34116){if((e34116 instanceof Object)){
var ex__19500__auto__ = e34116;
var statearr_34117_34139 = state_34089;
(statearr_34117_34139[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34140 = state_34089;
state_34089 = G__34140;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$state_machine__19497__auto__ = function(state_34089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19497__auto____1.call(this,state_34089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19497__auto____0;
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19497__auto____1;
return cljs$core$async$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___34123,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19563__auto__ = (function (){var statearr_34118 = f__19562__auto__.call(null);
(statearr_34118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___34123);

return statearr_34118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___34123,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args34142 = [];
var len__17416__auto___34198 = arguments.length;
var i__17417__auto___34199 = (0);
while(true){
if((i__17417__auto___34199 < len__17416__auto___34198)){
args34142.push((arguments[i__17417__auto___34199]));

var G__34200 = (i__17417__auto___34199 + (1));
i__17417__auto___34199 = G__34200;
continue;
} else {
}
break;
}

var G__34144 = args34142.length;
switch (G__34144) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34142.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19561__auto___34202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___34202,out){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___34202,out){
return (function (state_34174){
var state_val_34175 = (state_34174[(1)]);
if((state_val_34175 === (7))){
var inst_34154 = (state_34174[(7)]);
var inst_34153 = (state_34174[(8)]);
var inst_34153__$1 = (state_34174[(2)]);
var inst_34154__$1 = cljs.core.nth.call(null,inst_34153__$1,(0),null);
var inst_34155 = cljs.core.nth.call(null,inst_34153__$1,(1),null);
var inst_34156 = (inst_34154__$1 == null);
var state_34174__$1 = (function (){var statearr_34176 = state_34174;
(statearr_34176[(9)] = inst_34155);

(statearr_34176[(7)] = inst_34154__$1);

(statearr_34176[(8)] = inst_34153__$1);

return statearr_34176;
})();
if(cljs.core.truth_(inst_34156)){
var statearr_34177_34203 = state_34174__$1;
(statearr_34177_34203[(1)] = (8));

} else {
var statearr_34178_34204 = state_34174__$1;
(statearr_34178_34204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34175 === (1))){
var inst_34145 = cljs.core.vec.call(null,chs);
var inst_34146 = inst_34145;
var state_34174__$1 = (function (){var statearr_34179 = state_34174;
(statearr_34179[(10)] = inst_34146);

return statearr_34179;
})();
var statearr_34180_34205 = state_34174__$1;
(statearr_34180_34205[(2)] = null);

(statearr_34180_34205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34175 === (4))){
var inst_34146 = (state_34174[(10)]);
var state_34174__$1 = state_34174;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34174__$1,(7),inst_34146);
} else {
if((state_val_34175 === (6))){
var inst_34170 = (state_34174[(2)]);
var state_34174__$1 = state_34174;
var statearr_34181_34206 = state_34174__$1;
(statearr_34181_34206[(2)] = inst_34170);

(statearr_34181_34206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34175 === (3))){
var inst_34172 = (state_34174[(2)]);
var state_34174__$1 = state_34174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34174__$1,inst_34172);
} else {
if((state_val_34175 === (2))){
var inst_34146 = (state_34174[(10)]);
var inst_34148 = cljs.core.count.call(null,inst_34146);
var inst_34149 = (inst_34148 > (0));
var state_34174__$1 = state_34174;
if(cljs.core.truth_(inst_34149)){
var statearr_34183_34207 = state_34174__$1;
(statearr_34183_34207[(1)] = (4));

} else {
var statearr_34184_34208 = state_34174__$1;
(statearr_34184_34208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34175 === (11))){
var inst_34146 = (state_34174[(10)]);
var inst_34163 = (state_34174[(2)]);
var tmp34182 = inst_34146;
var inst_34146__$1 = tmp34182;
var state_34174__$1 = (function (){var statearr_34185 = state_34174;
(statearr_34185[(10)] = inst_34146__$1);

(statearr_34185[(11)] = inst_34163);

return statearr_34185;
})();
var statearr_34186_34209 = state_34174__$1;
(statearr_34186_34209[(2)] = null);

(statearr_34186_34209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34175 === (9))){
var inst_34154 = (state_34174[(7)]);
var state_34174__$1 = state_34174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34174__$1,(11),out,inst_34154);
} else {
if((state_val_34175 === (5))){
var inst_34168 = cljs.core.async.close_BANG_.call(null,out);
var state_34174__$1 = state_34174;
var statearr_34187_34210 = state_34174__$1;
(statearr_34187_34210[(2)] = inst_34168);

(statearr_34187_34210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34175 === (10))){
var inst_34166 = (state_34174[(2)]);
var state_34174__$1 = state_34174;
var statearr_34188_34211 = state_34174__$1;
(statearr_34188_34211[(2)] = inst_34166);

(statearr_34188_34211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34175 === (8))){
var inst_34146 = (state_34174[(10)]);
var inst_34155 = (state_34174[(9)]);
var inst_34154 = (state_34174[(7)]);
var inst_34153 = (state_34174[(8)]);
var inst_34158 = (function (){var cs = inst_34146;
var vec__34151 = inst_34153;
var v = inst_34154;
var c = inst_34155;
return ((function (cs,vec__34151,v,c,inst_34146,inst_34155,inst_34154,inst_34153,state_val_34175,c__19561__auto___34202,out){
return (function (p1__34141_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34141_SHARP_);
});
;})(cs,vec__34151,v,c,inst_34146,inst_34155,inst_34154,inst_34153,state_val_34175,c__19561__auto___34202,out))
})();
var inst_34159 = cljs.core.filterv.call(null,inst_34158,inst_34146);
var inst_34146__$1 = inst_34159;
var state_34174__$1 = (function (){var statearr_34189 = state_34174;
(statearr_34189[(10)] = inst_34146__$1);

return statearr_34189;
})();
var statearr_34190_34212 = state_34174__$1;
(statearr_34190_34212[(2)] = null);

(statearr_34190_34212[(1)] = (2));


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
});})(c__19561__auto___34202,out))
;
return ((function (switch__19496__auto__,c__19561__auto___34202,out){
return (function() {
var cljs$core$async$state_machine__19497__auto__ = null;
var cljs$core$async$state_machine__19497__auto____0 = (function (){
var statearr_34194 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34194[(0)] = cljs$core$async$state_machine__19497__auto__);

(statearr_34194[(1)] = (1));

return statearr_34194;
});
var cljs$core$async$state_machine__19497__auto____1 = (function (state_34174){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_34174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e34195){if((e34195 instanceof Object)){
var ex__19500__auto__ = e34195;
var statearr_34196_34213 = state_34174;
(statearr_34196_34213[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34214 = state_34174;
state_34174 = G__34214;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$state_machine__19497__auto__ = function(state_34174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19497__auto____1.call(this,state_34174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19497__auto____0;
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19497__auto____1;
return cljs$core$async$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___34202,out))
})();
var state__19563__auto__ = (function (){var statearr_34197 = f__19562__auto__.call(null);
(statearr_34197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___34202);

return statearr_34197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___34202,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args34215 = [];
var len__17416__auto___34264 = arguments.length;
var i__17417__auto___34265 = (0);
while(true){
if((i__17417__auto___34265 < len__17416__auto___34264)){
args34215.push((arguments[i__17417__auto___34265]));

var G__34266 = (i__17417__auto___34265 + (1));
i__17417__auto___34265 = G__34266;
continue;
} else {
}
break;
}

var G__34217 = args34215.length;
switch (G__34217) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34215.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19561__auto___34268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___34268,out){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___34268,out){
return (function (state_34241){
var state_val_34242 = (state_34241[(1)]);
if((state_val_34242 === (7))){
var inst_34223 = (state_34241[(7)]);
var inst_34223__$1 = (state_34241[(2)]);
var inst_34224 = (inst_34223__$1 == null);
var inst_34225 = cljs.core.not.call(null,inst_34224);
var state_34241__$1 = (function (){var statearr_34243 = state_34241;
(statearr_34243[(7)] = inst_34223__$1);

return statearr_34243;
})();
if(inst_34225){
var statearr_34244_34269 = state_34241__$1;
(statearr_34244_34269[(1)] = (8));

} else {
var statearr_34245_34270 = state_34241__$1;
(statearr_34245_34270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (1))){
var inst_34218 = (0);
var state_34241__$1 = (function (){var statearr_34246 = state_34241;
(statearr_34246[(8)] = inst_34218);

return statearr_34246;
})();
var statearr_34247_34271 = state_34241__$1;
(statearr_34247_34271[(2)] = null);

(statearr_34247_34271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (4))){
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34241__$1,(7),ch);
} else {
if((state_val_34242 === (6))){
var inst_34236 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34248_34272 = state_34241__$1;
(statearr_34248_34272[(2)] = inst_34236);

(statearr_34248_34272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (3))){
var inst_34238 = (state_34241[(2)]);
var inst_34239 = cljs.core.async.close_BANG_.call(null,out);
var state_34241__$1 = (function (){var statearr_34249 = state_34241;
(statearr_34249[(9)] = inst_34238);

return statearr_34249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34241__$1,inst_34239);
} else {
if((state_val_34242 === (2))){
var inst_34218 = (state_34241[(8)]);
var inst_34220 = (inst_34218 < n);
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34220)){
var statearr_34250_34273 = state_34241__$1;
(statearr_34250_34273[(1)] = (4));

} else {
var statearr_34251_34274 = state_34241__$1;
(statearr_34251_34274[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (11))){
var inst_34218 = (state_34241[(8)]);
var inst_34228 = (state_34241[(2)]);
var inst_34229 = (inst_34218 + (1));
var inst_34218__$1 = inst_34229;
var state_34241__$1 = (function (){var statearr_34252 = state_34241;
(statearr_34252[(8)] = inst_34218__$1);

(statearr_34252[(10)] = inst_34228);

return statearr_34252;
})();
var statearr_34253_34275 = state_34241__$1;
(statearr_34253_34275[(2)] = null);

(statearr_34253_34275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (9))){
var state_34241__$1 = state_34241;
var statearr_34254_34276 = state_34241__$1;
(statearr_34254_34276[(2)] = null);

(statearr_34254_34276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (5))){
var state_34241__$1 = state_34241;
var statearr_34255_34277 = state_34241__$1;
(statearr_34255_34277[(2)] = null);

(statearr_34255_34277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (10))){
var inst_34233 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34256_34278 = state_34241__$1;
(statearr_34256_34278[(2)] = inst_34233);

(statearr_34256_34278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (8))){
var inst_34223 = (state_34241[(7)]);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34241__$1,(11),out,inst_34223);
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
});})(c__19561__auto___34268,out))
;
return ((function (switch__19496__auto__,c__19561__auto___34268,out){
return (function() {
var cljs$core$async$state_machine__19497__auto__ = null;
var cljs$core$async$state_machine__19497__auto____0 = (function (){
var statearr_34260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34260[(0)] = cljs$core$async$state_machine__19497__auto__);

(statearr_34260[(1)] = (1));

return statearr_34260;
});
var cljs$core$async$state_machine__19497__auto____1 = (function (state_34241){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_34241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e34261){if((e34261 instanceof Object)){
var ex__19500__auto__ = e34261;
var statearr_34262_34279 = state_34241;
(statearr_34262_34279[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34280 = state_34241;
state_34241 = G__34280;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$state_machine__19497__auto__ = function(state_34241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19497__auto____1.call(this,state_34241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19497__auto____0;
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19497__auto____1;
return cljs$core$async$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___34268,out))
})();
var state__19563__auto__ = (function (){var statearr_34263 = f__19562__auto__.call(null);
(statearr_34263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___34268);

return statearr_34263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___34268,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34288 = (function (map_LT_,f,ch,meta34289){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34289 = meta34289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34290,meta34289__$1){
var self__ = this;
var _34290__$1 = this;
return (new cljs.core.async.t_cljs$core$async34288(self__.map_LT_,self__.f,self__.ch,meta34289__$1));
});

cljs.core.async.t_cljs$core$async34288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34290){
var self__ = this;
var _34290__$1 = this;
return self__.meta34289;
});

cljs.core.async.t_cljs$core$async34288.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34288.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34288.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34291 = (function (map_LT_,f,ch,meta34289,_,fn1,meta34292){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34289 = meta34289;
this._ = _;
this.fn1 = fn1;
this.meta34292 = meta34292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34293,meta34292__$1){
var self__ = this;
var _34293__$1 = this;
return (new cljs.core.async.t_cljs$core$async34291(self__.map_LT_,self__.f,self__.ch,self__.meta34289,self__._,self__.fn1,meta34292__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34293){
var self__ = this;
var _34293__$1 = this;
return self__.meta34292;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34281_SHARP_){
return f1.call(null,(((p1__34281_SHARP_ == null))?null:self__.f.call(null,p1__34281_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34291.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34289","meta34289",1499280122,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34288","cljs.core.async/t_cljs$core$async34288",-1000862967,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34292","meta34292",2075789232,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34291";

cljs.core.async.t_cljs$core$async34291.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async34291");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34291 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34291(map_LT___$1,f__$1,ch__$1,meta34289__$1,___$2,fn1__$1,meta34292){
return (new cljs.core.async.t_cljs$core$async34291(map_LT___$1,f__$1,ch__$1,meta34289__$1,___$2,fn1__$1,meta34292));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34291(self__.map_LT_,self__.f,self__.ch,self__.meta34289,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16346__auto__ = ret;
if(cljs.core.truth_(and__16346__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16346__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34288.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34289","meta34289",1499280122,null)], null);
});

cljs.core.async.t_cljs$core$async34288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34288";

cljs.core.async.t_cljs$core$async34288.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async34288");
});

cljs.core.async.__GT_t_cljs$core$async34288 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34288(map_LT___$1,f__$1,ch__$1,meta34289){
return (new cljs.core.async.t_cljs$core$async34288(map_LT___$1,f__$1,ch__$1,meta34289));
});

}

return (new cljs.core.async.t_cljs$core$async34288(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34297 = (function (map_GT_,f,ch,meta34298){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34298 = meta34298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34299,meta34298__$1){
var self__ = this;
var _34299__$1 = this;
return (new cljs.core.async.t_cljs$core$async34297(self__.map_GT_,self__.f,self__.ch,meta34298__$1));
});

cljs.core.async.t_cljs$core$async34297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34299){
var self__ = this;
var _34299__$1 = this;
return self__.meta34298;
});

cljs.core.async.t_cljs$core$async34297.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34297.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34297.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34298","meta34298",67514186,null)], null);
});

cljs.core.async.t_cljs$core$async34297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34297";

cljs.core.async.t_cljs$core$async34297.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async34297");
});

cljs.core.async.__GT_t_cljs$core$async34297 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34297(map_GT___$1,f__$1,ch__$1,meta34298){
return (new cljs.core.async.t_cljs$core$async34297(map_GT___$1,f__$1,ch__$1,meta34298));
});

}

return (new cljs.core.async.t_cljs$core$async34297(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34303 = (function (filter_GT_,p,ch,meta34304){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34304 = meta34304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34305,meta34304__$1){
var self__ = this;
var _34305__$1 = this;
return (new cljs.core.async.t_cljs$core$async34303(self__.filter_GT_,self__.p,self__.ch,meta34304__$1));
});

cljs.core.async.t_cljs$core$async34303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34305){
var self__ = this;
var _34305__$1 = this;
return self__.meta34304;
});

cljs.core.async.t_cljs$core$async34303.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34303.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34303.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34303.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34304","meta34304",-79153195,null)], null);
});

cljs.core.async.t_cljs$core$async34303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34303";

cljs.core.async.t_cljs$core$async34303.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async34303");
});

cljs.core.async.__GT_t_cljs$core$async34303 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34303(filter_GT___$1,p__$1,ch__$1,meta34304){
return (new cljs.core.async.t_cljs$core$async34303(filter_GT___$1,p__$1,ch__$1,meta34304));
});

}

return (new cljs.core.async.t_cljs$core$async34303(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args34306 = [];
var len__17416__auto___34350 = arguments.length;
var i__17417__auto___34351 = (0);
while(true){
if((i__17417__auto___34351 < len__17416__auto___34350)){
args34306.push((arguments[i__17417__auto___34351]));

var G__34352 = (i__17417__auto___34351 + (1));
i__17417__auto___34351 = G__34352;
continue;
} else {
}
break;
}

var G__34308 = args34306.length;
switch (G__34308) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34306.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19561__auto___34354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___34354,out){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___34354,out){
return (function (state_34329){
var state_val_34330 = (state_34329[(1)]);
if((state_val_34330 === (7))){
var inst_34325 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
var statearr_34331_34355 = state_34329__$1;
(statearr_34331_34355[(2)] = inst_34325);

(statearr_34331_34355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (1))){
var state_34329__$1 = state_34329;
var statearr_34332_34356 = state_34329__$1;
(statearr_34332_34356[(2)] = null);

(statearr_34332_34356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (4))){
var inst_34311 = (state_34329[(7)]);
var inst_34311__$1 = (state_34329[(2)]);
var inst_34312 = (inst_34311__$1 == null);
var state_34329__$1 = (function (){var statearr_34333 = state_34329;
(statearr_34333[(7)] = inst_34311__$1);

return statearr_34333;
})();
if(cljs.core.truth_(inst_34312)){
var statearr_34334_34357 = state_34329__$1;
(statearr_34334_34357[(1)] = (5));

} else {
var statearr_34335_34358 = state_34329__$1;
(statearr_34335_34358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (6))){
var inst_34311 = (state_34329[(7)]);
var inst_34316 = p.call(null,inst_34311);
var state_34329__$1 = state_34329;
if(cljs.core.truth_(inst_34316)){
var statearr_34336_34359 = state_34329__$1;
(statearr_34336_34359[(1)] = (8));

} else {
var statearr_34337_34360 = state_34329__$1;
(statearr_34337_34360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (3))){
var inst_34327 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34329__$1,inst_34327);
} else {
if((state_val_34330 === (2))){
var state_34329__$1 = state_34329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34329__$1,(4),ch);
} else {
if((state_val_34330 === (11))){
var inst_34319 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
var statearr_34338_34361 = state_34329__$1;
(statearr_34338_34361[(2)] = inst_34319);

(statearr_34338_34361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (9))){
var state_34329__$1 = state_34329;
var statearr_34339_34362 = state_34329__$1;
(statearr_34339_34362[(2)] = null);

(statearr_34339_34362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (5))){
var inst_34314 = cljs.core.async.close_BANG_.call(null,out);
var state_34329__$1 = state_34329;
var statearr_34340_34363 = state_34329__$1;
(statearr_34340_34363[(2)] = inst_34314);

(statearr_34340_34363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (10))){
var inst_34322 = (state_34329[(2)]);
var state_34329__$1 = (function (){var statearr_34341 = state_34329;
(statearr_34341[(8)] = inst_34322);

return statearr_34341;
})();
var statearr_34342_34364 = state_34329__$1;
(statearr_34342_34364[(2)] = null);

(statearr_34342_34364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (8))){
var inst_34311 = (state_34329[(7)]);
var state_34329__$1 = state_34329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34329__$1,(11),out,inst_34311);
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
});})(c__19561__auto___34354,out))
;
return ((function (switch__19496__auto__,c__19561__auto___34354,out){
return (function() {
var cljs$core$async$state_machine__19497__auto__ = null;
var cljs$core$async$state_machine__19497__auto____0 = (function (){
var statearr_34346 = [null,null,null,null,null,null,null,null,null];
(statearr_34346[(0)] = cljs$core$async$state_machine__19497__auto__);

(statearr_34346[(1)] = (1));

return statearr_34346;
});
var cljs$core$async$state_machine__19497__auto____1 = (function (state_34329){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_34329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e34347){if((e34347 instanceof Object)){
var ex__19500__auto__ = e34347;
var statearr_34348_34365 = state_34329;
(statearr_34348_34365[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34366 = state_34329;
state_34329 = G__34366;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$state_machine__19497__auto__ = function(state_34329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19497__auto____1.call(this,state_34329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19497__auto____0;
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19497__auto____1;
return cljs$core$async$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___34354,out))
})();
var state__19563__auto__ = (function (){var statearr_34349 = f__19562__auto__.call(null);
(statearr_34349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___34354);

return statearr_34349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___34354,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34367 = [];
var len__17416__auto___34370 = arguments.length;
var i__17417__auto___34371 = (0);
while(true){
if((i__17417__auto___34371 < len__17416__auto___34370)){
args34367.push((arguments[i__17417__auto___34371]));

var G__34372 = (i__17417__auto___34371 + (1));
i__17417__auto___34371 = G__34372;
continue;
} else {
}
break;
}

var G__34369 = args34367.length;
switch (G__34369) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34367.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__){
return (function (state_34539){
var state_val_34540 = (state_34539[(1)]);
if((state_val_34540 === (7))){
var inst_34535 = (state_34539[(2)]);
var state_34539__$1 = state_34539;
var statearr_34541_34582 = state_34539__$1;
(statearr_34541_34582[(2)] = inst_34535);

(statearr_34541_34582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (20))){
var inst_34505 = (state_34539[(7)]);
var inst_34516 = (state_34539[(2)]);
var inst_34517 = cljs.core.next.call(null,inst_34505);
var inst_34491 = inst_34517;
var inst_34492 = null;
var inst_34493 = (0);
var inst_34494 = (0);
var state_34539__$1 = (function (){var statearr_34542 = state_34539;
(statearr_34542[(8)] = inst_34493);

(statearr_34542[(9)] = inst_34494);

(statearr_34542[(10)] = inst_34516);

(statearr_34542[(11)] = inst_34491);

(statearr_34542[(12)] = inst_34492);

return statearr_34542;
})();
var statearr_34543_34583 = state_34539__$1;
(statearr_34543_34583[(2)] = null);

(statearr_34543_34583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (1))){
var state_34539__$1 = state_34539;
var statearr_34544_34584 = state_34539__$1;
(statearr_34544_34584[(2)] = null);

(statearr_34544_34584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (4))){
var inst_34480 = (state_34539[(13)]);
var inst_34480__$1 = (state_34539[(2)]);
var inst_34481 = (inst_34480__$1 == null);
var state_34539__$1 = (function (){var statearr_34545 = state_34539;
(statearr_34545[(13)] = inst_34480__$1);

return statearr_34545;
})();
if(cljs.core.truth_(inst_34481)){
var statearr_34546_34585 = state_34539__$1;
(statearr_34546_34585[(1)] = (5));

} else {
var statearr_34547_34586 = state_34539__$1;
(statearr_34547_34586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (15))){
var state_34539__$1 = state_34539;
var statearr_34551_34587 = state_34539__$1;
(statearr_34551_34587[(2)] = null);

(statearr_34551_34587[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (21))){
var state_34539__$1 = state_34539;
var statearr_34552_34588 = state_34539__$1;
(statearr_34552_34588[(2)] = null);

(statearr_34552_34588[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (13))){
var inst_34493 = (state_34539[(8)]);
var inst_34494 = (state_34539[(9)]);
var inst_34491 = (state_34539[(11)]);
var inst_34492 = (state_34539[(12)]);
var inst_34501 = (state_34539[(2)]);
var inst_34502 = (inst_34494 + (1));
var tmp34548 = inst_34493;
var tmp34549 = inst_34491;
var tmp34550 = inst_34492;
var inst_34491__$1 = tmp34549;
var inst_34492__$1 = tmp34550;
var inst_34493__$1 = tmp34548;
var inst_34494__$1 = inst_34502;
var state_34539__$1 = (function (){var statearr_34553 = state_34539;
(statearr_34553[(8)] = inst_34493__$1);

(statearr_34553[(9)] = inst_34494__$1);

(statearr_34553[(14)] = inst_34501);

(statearr_34553[(11)] = inst_34491__$1);

(statearr_34553[(12)] = inst_34492__$1);

return statearr_34553;
})();
var statearr_34554_34589 = state_34539__$1;
(statearr_34554_34589[(2)] = null);

(statearr_34554_34589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (22))){
var state_34539__$1 = state_34539;
var statearr_34555_34590 = state_34539__$1;
(statearr_34555_34590[(2)] = null);

(statearr_34555_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (6))){
var inst_34480 = (state_34539[(13)]);
var inst_34489 = f.call(null,inst_34480);
var inst_34490 = cljs.core.seq.call(null,inst_34489);
var inst_34491 = inst_34490;
var inst_34492 = null;
var inst_34493 = (0);
var inst_34494 = (0);
var state_34539__$1 = (function (){var statearr_34556 = state_34539;
(statearr_34556[(8)] = inst_34493);

(statearr_34556[(9)] = inst_34494);

(statearr_34556[(11)] = inst_34491);

(statearr_34556[(12)] = inst_34492);

return statearr_34556;
})();
var statearr_34557_34591 = state_34539__$1;
(statearr_34557_34591[(2)] = null);

(statearr_34557_34591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (17))){
var inst_34505 = (state_34539[(7)]);
var inst_34509 = cljs.core.chunk_first.call(null,inst_34505);
var inst_34510 = cljs.core.chunk_rest.call(null,inst_34505);
var inst_34511 = cljs.core.count.call(null,inst_34509);
var inst_34491 = inst_34510;
var inst_34492 = inst_34509;
var inst_34493 = inst_34511;
var inst_34494 = (0);
var state_34539__$1 = (function (){var statearr_34558 = state_34539;
(statearr_34558[(8)] = inst_34493);

(statearr_34558[(9)] = inst_34494);

(statearr_34558[(11)] = inst_34491);

(statearr_34558[(12)] = inst_34492);

return statearr_34558;
})();
var statearr_34559_34592 = state_34539__$1;
(statearr_34559_34592[(2)] = null);

(statearr_34559_34592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (3))){
var inst_34537 = (state_34539[(2)]);
var state_34539__$1 = state_34539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34539__$1,inst_34537);
} else {
if((state_val_34540 === (12))){
var inst_34525 = (state_34539[(2)]);
var state_34539__$1 = state_34539;
var statearr_34560_34593 = state_34539__$1;
(statearr_34560_34593[(2)] = inst_34525);

(statearr_34560_34593[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (2))){
var state_34539__$1 = state_34539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34539__$1,(4),in$);
} else {
if((state_val_34540 === (23))){
var inst_34533 = (state_34539[(2)]);
var state_34539__$1 = state_34539;
var statearr_34561_34594 = state_34539__$1;
(statearr_34561_34594[(2)] = inst_34533);

(statearr_34561_34594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (19))){
var inst_34520 = (state_34539[(2)]);
var state_34539__$1 = state_34539;
var statearr_34562_34595 = state_34539__$1;
(statearr_34562_34595[(2)] = inst_34520);

(statearr_34562_34595[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (11))){
var inst_34505 = (state_34539[(7)]);
var inst_34491 = (state_34539[(11)]);
var inst_34505__$1 = cljs.core.seq.call(null,inst_34491);
var state_34539__$1 = (function (){var statearr_34563 = state_34539;
(statearr_34563[(7)] = inst_34505__$1);

return statearr_34563;
})();
if(inst_34505__$1){
var statearr_34564_34596 = state_34539__$1;
(statearr_34564_34596[(1)] = (14));

} else {
var statearr_34565_34597 = state_34539__$1;
(statearr_34565_34597[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (9))){
var inst_34527 = (state_34539[(2)]);
var inst_34528 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34539__$1 = (function (){var statearr_34566 = state_34539;
(statearr_34566[(15)] = inst_34527);

return statearr_34566;
})();
if(cljs.core.truth_(inst_34528)){
var statearr_34567_34598 = state_34539__$1;
(statearr_34567_34598[(1)] = (21));

} else {
var statearr_34568_34599 = state_34539__$1;
(statearr_34568_34599[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (5))){
var inst_34483 = cljs.core.async.close_BANG_.call(null,out);
var state_34539__$1 = state_34539;
var statearr_34569_34600 = state_34539__$1;
(statearr_34569_34600[(2)] = inst_34483);

(statearr_34569_34600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (14))){
var inst_34505 = (state_34539[(7)]);
var inst_34507 = cljs.core.chunked_seq_QMARK_.call(null,inst_34505);
var state_34539__$1 = state_34539;
if(inst_34507){
var statearr_34570_34601 = state_34539__$1;
(statearr_34570_34601[(1)] = (17));

} else {
var statearr_34571_34602 = state_34539__$1;
(statearr_34571_34602[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (16))){
var inst_34523 = (state_34539[(2)]);
var state_34539__$1 = state_34539;
var statearr_34572_34603 = state_34539__$1;
(statearr_34572_34603[(2)] = inst_34523);

(statearr_34572_34603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (10))){
var inst_34494 = (state_34539[(9)]);
var inst_34492 = (state_34539[(12)]);
var inst_34499 = cljs.core._nth.call(null,inst_34492,inst_34494);
var state_34539__$1 = state_34539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34539__$1,(13),out,inst_34499);
} else {
if((state_val_34540 === (18))){
var inst_34505 = (state_34539[(7)]);
var inst_34514 = cljs.core.first.call(null,inst_34505);
var state_34539__$1 = state_34539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34539__$1,(20),out,inst_34514);
} else {
if((state_val_34540 === (8))){
var inst_34493 = (state_34539[(8)]);
var inst_34494 = (state_34539[(9)]);
var inst_34496 = (inst_34494 < inst_34493);
var inst_34497 = inst_34496;
var state_34539__$1 = state_34539;
if(cljs.core.truth_(inst_34497)){
var statearr_34573_34604 = state_34539__$1;
(statearr_34573_34604[(1)] = (10));

} else {
var statearr_34574_34605 = state_34539__$1;
(statearr_34574_34605[(1)] = (11));

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
});})(c__19561__auto__))
;
return ((function (switch__19496__auto__,c__19561__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19497__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19497__auto____0 = (function (){
var statearr_34578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34578[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19497__auto__);

(statearr_34578[(1)] = (1));

return statearr_34578;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19497__auto____1 = (function (state_34539){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_34539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e34579){if((e34579 instanceof Object)){
var ex__19500__auto__ = e34579;
var statearr_34580_34606 = state_34539;
(statearr_34580_34606[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34607 = state_34539;
state_34539 = G__34607;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19497__auto__ = function(state_34539){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19497__auto____1.call(this,state_34539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19497__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19497__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__))
})();
var state__19563__auto__ = (function (){var statearr_34581 = f__19562__auto__.call(null);
(statearr_34581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_34581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__))
);

return c__19561__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34608 = [];
var len__17416__auto___34611 = arguments.length;
var i__17417__auto___34612 = (0);
while(true){
if((i__17417__auto___34612 < len__17416__auto___34611)){
args34608.push((arguments[i__17417__auto___34612]));

var G__34613 = (i__17417__auto___34612 + (1));
i__17417__auto___34612 = G__34613;
continue;
} else {
}
break;
}

var G__34610 = args34608.length;
switch (G__34610) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34608.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args34615 = [];
var len__17416__auto___34618 = arguments.length;
var i__17417__auto___34619 = (0);
while(true){
if((i__17417__auto___34619 < len__17416__auto___34618)){
args34615.push((arguments[i__17417__auto___34619]));

var G__34620 = (i__17417__auto___34619 + (1));
i__17417__auto___34619 = G__34620;
continue;
} else {
}
break;
}

var G__34617 = args34615.length;
switch (G__34617) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34615.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args34622 = [];
var len__17416__auto___34673 = arguments.length;
var i__17417__auto___34674 = (0);
while(true){
if((i__17417__auto___34674 < len__17416__auto___34673)){
args34622.push((arguments[i__17417__auto___34674]));

var G__34675 = (i__17417__auto___34674 + (1));
i__17417__auto___34674 = G__34675;
continue;
} else {
}
break;
}

var G__34624 = args34622.length;
switch (G__34624) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34622.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19561__auto___34677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___34677,out){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___34677,out){
return (function (state_34648){
var state_val_34649 = (state_34648[(1)]);
if((state_val_34649 === (7))){
var inst_34643 = (state_34648[(2)]);
var state_34648__$1 = state_34648;
var statearr_34650_34678 = state_34648__$1;
(statearr_34650_34678[(2)] = inst_34643);

(statearr_34650_34678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (1))){
var inst_34625 = null;
var state_34648__$1 = (function (){var statearr_34651 = state_34648;
(statearr_34651[(7)] = inst_34625);

return statearr_34651;
})();
var statearr_34652_34679 = state_34648__$1;
(statearr_34652_34679[(2)] = null);

(statearr_34652_34679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (4))){
var inst_34628 = (state_34648[(8)]);
var inst_34628__$1 = (state_34648[(2)]);
var inst_34629 = (inst_34628__$1 == null);
var inst_34630 = cljs.core.not.call(null,inst_34629);
var state_34648__$1 = (function (){var statearr_34653 = state_34648;
(statearr_34653[(8)] = inst_34628__$1);

return statearr_34653;
})();
if(inst_34630){
var statearr_34654_34680 = state_34648__$1;
(statearr_34654_34680[(1)] = (5));

} else {
var statearr_34655_34681 = state_34648__$1;
(statearr_34655_34681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (6))){
var state_34648__$1 = state_34648;
var statearr_34656_34682 = state_34648__$1;
(statearr_34656_34682[(2)] = null);

(statearr_34656_34682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (3))){
var inst_34645 = (state_34648[(2)]);
var inst_34646 = cljs.core.async.close_BANG_.call(null,out);
var state_34648__$1 = (function (){var statearr_34657 = state_34648;
(statearr_34657[(9)] = inst_34645);

return statearr_34657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34648__$1,inst_34646);
} else {
if((state_val_34649 === (2))){
var state_34648__$1 = state_34648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34648__$1,(4),ch);
} else {
if((state_val_34649 === (11))){
var inst_34628 = (state_34648[(8)]);
var inst_34637 = (state_34648[(2)]);
var inst_34625 = inst_34628;
var state_34648__$1 = (function (){var statearr_34658 = state_34648;
(statearr_34658[(7)] = inst_34625);

(statearr_34658[(10)] = inst_34637);

return statearr_34658;
})();
var statearr_34659_34683 = state_34648__$1;
(statearr_34659_34683[(2)] = null);

(statearr_34659_34683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (9))){
var inst_34628 = (state_34648[(8)]);
var state_34648__$1 = state_34648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34648__$1,(11),out,inst_34628);
} else {
if((state_val_34649 === (5))){
var inst_34625 = (state_34648[(7)]);
var inst_34628 = (state_34648[(8)]);
var inst_34632 = cljs.core._EQ_.call(null,inst_34628,inst_34625);
var state_34648__$1 = state_34648;
if(inst_34632){
var statearr_34661_34684 = state_34648__$1;
(statearr_34661_34684[(1)] = (8));

} else {
var statearr_34662_34685 = state_34648__$1;
(statearr_34662_34685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (10))){
var inst_34640 = (state_34648[(2)]);
var state_34648__$1 = state_34648;
var statearr_34663_34686 = state_34648__$1;
(statearr_34663_34686[(2)] = inst_34640);

(statearr_34663_34686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34649 === (8))){
var inst_34625 = (state_34648[(7)]);
var tmp34660 = inst_34625;
var inst_34625__$1 = tmp34660;
var state_34648__$1 = (function (){var statearr_34664 = state_34648;
(statearr_34664[(7)] = inst_34625__$1);

return statearr_34664;
})();
var statearr_34665_34687 = state_34648__$1;
(statearr_34665_34687[(2)] = null);

(statearr_34665_34687[(1)] = (2));


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
});})(c__19561__auto___34677,out))
;
return ((function (switch__19496__auto__,c__19561__auto___34677,out){
return (function() {
var cljs$core$async$state_machine__19497__auto__ = null;
var cljs$core$async$state_machine__19497__auto____0 = (function (){
var statearr_34669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34669[(0)] = cljs$core$async$state_machine__19497__auto__);

(statearr_34669[(1)] = (1));

return statearr_34669;
});
var cljs$core$async$state_machine__19497__auto____1 = (function (state_34648){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_34648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e34670){if((e34670 instanceof Object)){
var ex__19500__auto__ = e34670;
var statearr_34671_34688 = state_34648;
(statearr_34671_34688[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34689 = state_34648;
state_34648 = G__34689;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$state_machine__19497__auto__ = function(state_34648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19497__auto____1.call(this,state_34648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19497__auto____0;
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19497__auto____1;
return cljs$core$async$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___34677,out))
})();
var state__19563__auto__ = (function (){var statearr_34672 = f__19562__auto__.call(null);
(statearr_34672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___34677);

return statearr_34672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___34677,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34690 = [];
var len__17416__auto___34760 = arguments.length;
var i__17417__auto___34761 = (0);
while(true){
if((i__17417__auto___34761 < len__17416__auto___34760)){
args34690.push((arguments[i__17417__auto___34761]));

var G__34762 = (i__17417__auto___34761 + (1));
i__17417__auto___34761 = G__34762;
continue;
} else {
}
break;
}

var G__34692 = args34690.length;
switch (G__34692) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34690.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19561__auto___34764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___34764,out){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___34764,out){
return (function (state_34730){
var state_val_34731 = (state_34730[(1)]);
if((state_val_34731 === (7))){
var inst_34726 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34732_34765 = state_34730__$1;
(statearr_34732_34765[(2)] = inst_34726);

(statearr_34732_34765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (1))){
var inst_34693 = (new Array(n));
var inst_34694 = inst_34693;
var inst_34695 = (0);
var state_34730__$1 = (function (){var statearr_34733 = state_34730;
(statearr_34733[(7)] = inst_34694);

(statearr_34733[(8)] = inst_34695);

return statearr_34733;
})();
var statearr_34734_34766 = state_34730__$1;
(statearr_34734_34766[(2)] = null);

(statearr_34734_34766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (4))){
var inst_34698 = (state_34730[(9)]);
var inst_34698__$1 = (state_34730[(2)]);
var inst_34699 = (inst_34698__$1 == null);
var inst_34700 = cljs.core.not.call(null,inst_34699);
var state_34730__$1 = (function (){var statearr_34735 = state_34730;
(statearr_34735[(9)] = inst_34698__$1);

return statearr_34735;
})();
if(inst_34700){
var statearr_34736_34767 = state_34730__$1;
(statearr_34736_34767[(1)] = (5));

} else {
var statearr_34737_34768 = state_34730__$1;
(statearr_34737_34768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (15))){
var inst_34720 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34738_34769 = state_34730__$1;
(statearr_34738_34769[(2)] = inst_34720);

(statearr_34738_34769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (13))){
var state_34730__$1 = state_34730;
var statearr_34739_34770 = state_34730__$1;
(statearr_34739_34770[(2)] = null);

(statearr_34739_34770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (6))){
var inst_34695 = (state_34730[(8)]);
var inst_34716 = (inst_34695 > (0));
var state_34730__$1 = state_34730;
if(cljs.core.truth_(inst_34716)){
var statearr_34740_34771 = state_34730__$1;
(statearr_34740_34771[(1)] = (12));

} else {
var statearr_34741_34772 = state_34730__$1;
(statearr_34741_34772[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (3))){
var inst_34728 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34730__$1,inst_34728);
} else {
if((state_val_34731 === (12))){
var inst_34694 = (state_34730[(7)]);
var inst_34718 = cljs.core.vec.call(null,inst_34694);
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34730__$1,(15),out,inst_34718);
} else {
if((state_val_34731 === (2))){
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34730__$1,(4),ch);
} else {
if((state_val_34731 === (11))){
var inst_34710 = (state_34730[(2)]);
var inst_34711 = (new Array(n));
var inst_34694 = inst_34711;
var inst_34695 = (0);
var state_34730__$1 = (function (){var statearr_34742 = state_34730;
(statearr_34742[(10)] = inst_34710);

(statearr_34742[(7)] = inst_34694);

(statearr_34742[(8)] = inst_34695);

return statearr_34742;
})();
var statearr_34743_34773 = state_34730__$1;
(statearr_34743_34773[(2)] = null);

(statearr_34743_34773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (9))){
var inst_34694 = (state_34730[(7)]);
var inst_34708 = cljs.core.vec.call(null,inst_34694);
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34730__$1,(11),out,inst_34708);
} else {
if((state_val_34731 === (5))){
var inst_34698 = (state_34730[(9)]);
var inst_34703 = (state_34730[(11)]);
var inst_34694 = (state_34730[(7)]);
var inst_34695 = (state_34730[(8)]);
var inst_34702 = (inst_34694[inst_34695] = inst_34698);
var inst_34703__$1 = (inst_34695 + (1));
var inst_34704 = (inst_34703__$1 < n);
var state_34730__$1 = (function (){var statearr_34744 = state_34730;
(statearr_34744[(11)] = inst_34703__$1);

(statearr_34744[(12)] = inst_34702);

return statearr_34744;
})();
if(cljs.core.truth_(inst_34704)){
var statearr_34745_34774 = state_34730__$1;
(statearr_34745_34774[(1)] = (8));

} else {
var statearr_34746_34775 = state_34730__$1;
(statearr_34746_34775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (14))){
var inst_34723 = (state_34730[(2)]);
var inst_34724 = cljs.core.async.close_BANG_.call(null,out);
var state_34730__$1 = (function (){var statearr_34748 = state_34730;
(statearr_34748[(13)] = inst_34723);

return statearr_34748;
})();
var statearr_34749_34776 = state_34730__$1;
(statearr_34749_34776[(2)] = inst_34724);

(statearr_34749_34776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (10))){
var inst_34714 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34750_34777 = state_34730__$1;
(statearr_34750_34777[(2)] = inst_34714);

(statearr_34750_34777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (8))){
var inst_34703 = (state_34730[(11)]);
var inst_34694 = (state_34730[(7)]);
var tmp34747 = inst_34694;
var inst_34694__$1 = tmp34747;
var inst_34695 = inst_34703;
var state_34730__$1 = (function (){var statearr_34751 = state_34730;
(statearr_34751[(7)] = inst_34694__$1);

(statearr_34751[(8)] = inst_34695);

return statearr_34751;
})();
var statearr_34752_34778 = state_34730__$1;
(statearr_34752_34778[(2)] = null);

(statearr_34752_34778[(1)] = (2));


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
});})(c__19561__auto___34764,out))
;
return ((function (switch__19496__auto__,c__19561__auto___34764,out){
return (function() {
var cljs$core$async$state_machine__19497__auto__ = null;
var cljs$core$async$state_machine__19497__auto____0 = (function (){
var statearr_34756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34756[(0)] = cljs$core$async$state_machine__19497__auto__);

(statearr_34756[(1)] = (1));

return statearr_34756;
});
var cljs$core$async$state_machine__19497__auto____1 = (function (state_34730){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_34730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e34757){if((e34757 instanceof Object)){
var ex__19500__auto__ = e34757;
var statearr_34758_34779 = state_34730;
(statearr_34758_34779[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34780 = state_34730;
state_34730 = G__34780;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$state_machine__19497__auto__ = function(state_34730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19497__auto____1.call(this,state_34730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19497__auto____0;
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19497__auto____1;
return cljs$core$async$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___34764,out))
})();
var state__19563__auto__ = (function (){var statearr_34759 = f__19562__auto__.call(null);
(statearr_34759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___34764);

return statearr_34759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___34764,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34781 = [];
var len__17416__auto___34855 = arguments.length;
var i__17417__auto___34856 = (0);
while(true){
if((i__17417__auto___34856 < len__17416__auto___34855)){
args34781.push((arguments[i__17417__auto___34856]));

var G__34857 = (i__17417__auto___34856 + (1));
i__17417__auto___34856 = G__34857;
continue;
} else {
}
break;
}

var G__34783 = args34781.length;
switch (G__34783) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34781.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19561__auto___34859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___34859,out){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___34859,out){
return (function (state_34825){
var state_val_34826 = (state_34825[(1)]);
if((state_val_34826 === (7))){
var inst_34821 = (state_34825[(2)]);
var state_34825__$1 = state_34825;
var statearr_34827_34860 = state_34825__$1;
(statearr_34827_34860[(2)] = inst_34821);

(statearr_34827_34860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34826 === (1))){
var inst_34784 = [];
var inst_34785 = inst_34784;
var inst_34786 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34825__$1 = (function (){var statearr_34828 = state_34825;
(statearr_34828[(7)] = inst_34786);

(statearr_34828[(8)] = inst_34785);

return statearr_34828;
})();
var statearr_34829_34861 = state_34825__$1;
(statearr_34829_34861[(2)] = null);

(statearr_34829_34861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34826 === (4))){
var inst_34789 = (state_34825[(9)]);
var inst_34789__$1 = (state_34825[(2)]);
var inst_34790 = (inst_34789__$1 == null);
var inst_34791 = cljs.core.not.call(null,inst_34790);
var state_34825__$1 = (function (){var statearr_34830 = state_34825;
(statearr_34830[(9)] = inst_34789__$1);

return statearr_34830;
})();
if(inst_34791){
var statearr_34831_34862 = state_34825__$1;
(statearr_34831_34862[(1)] = (5));

} else {
var statearr_34832_34863 = state_34825__$1;
(statearr_34832_34863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34826 === (15))){
var inst_34815 = (state_34825[(2)]);
var state_34825__$1 = state_34825;
var statearr_34833_34864 = state_34825__$1;
(statearr_34833_34864[(2)] = inst_34815);

(statearr_34833_34864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34826 === (13))){
var state_34825__$1 = state_34825;
var statearr_34834_34865 = state_34825__$1;
(statearr_34834_34865[(2)] = null);

(statearr_34834_34865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34826 === (6))){
var inst_34785 = (state_34825[(8)]);
var inst_34810 = inst_34785.length;
var inst_34811 = (inst_34810 > (0));
var state_34825__$1 = state_34825;
if(cljs.core.truth_(inst_34811)){
var statearr_34835_34866 = state_34825__$1;
(statearr_34835_34866[(1)] = (12));

} else {
var statearr_34836_34867 = state_34825__$1;
(statearr_34836_34867[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34826 === (3))){
var inst_34823 = (state_34825[(2)]);
var state_34825__$1 = state_34825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34825__$1,inst_34823);
} else {
if((state_val_34826 === (12))){
var inst_34785 = (state_34825[(8)]);
var inst_34813 = cljs.core.vec.call(null,inst_34785);
var state_34825__$1 = state_34825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34825__$1,(15),out,inst_34813);
} else {
if((state_val_34826 === (2))){
var state_34825__$1 = state_34825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34825__$1,(4),ch);
} else {
if((state_val_34826 === (11))){
var inst_34793 = (state_34825[(10)]);
var inst_34789 = (state_34825[(9)]);
var inst_34803 = (state_34825[(2)]);
var inst_34804 = [];
var inst_34805 = inst_34804.push(inst_34789);
var inst_34785 = inst_34804;
var inst_34786 = inst_34793;
var state_34825__$1 = (function (){var statearr_34837 = state_34825;
(statearr_34837[(11)] = inst_34803);

(statearr_34837[(12)] = inst_34805);

(statearr_34837[(7)] = inst_34786);

(statearr_34837[(8)] = inst_34785);

return statearr_34837;
})();
var statearr_34838_34868 = state_34825__$1;
(statearr_34838_34868[(2)] = null);

(statearr_34838_34868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34826 === (9))){
var inst_34785 = (state_34825[(8)]);
var inst_34801 = cljs.core.vec.call(null,inst_34785);
var state_34825__$1 = state_34825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34825__$1,(11),out,inst_34801);
} else {
if((state_val_34826 === (5))){
var inst_34793 = (state_34825[(10)]);
var inst_34789 = (state_34825[(9)]);
var inst_34786 = (state_34825[(7)]);
var inst_34793__$1 = f.call(null,inst_34789);
var inst_34794 = cljs.core._EQ_.call(null,inst_34793__$1,inst_34786);
var inst_34795 = cljs.core.keyword_identical_QMARK_.call(null,inst_34786,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34796 = (inst_34794) || (inst_34795);
var state_34825__$1 = (function (){var statearr_34839 = state_34825;
(statearr_34839[(10)] = inst_34793__$1);

return statearr_34839;
})();
if(cljs.core.truth_(inst_34796)){
var statearr_34840_34869 = state_34825__$1;
(statearr_34840_34869[(1)] = (8));

} else {
var statearr_34841_34870 = state_34825__$1;
(statearr_34841_34870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34826 === (14))){
var inst_34818 = (state_34825[(2)]);
var inst_34819 = cljs.core.async.close_BANG_.call(null,out);
var state_34825__$1 = (function (){var statearr_34843 = state_34825;
(statearr_34843[(13)] = inst_34818);

return statearr_34843;
})();
var statearr_34844_34871 = state_34825__$1;
(statearr_34844_34871[(2)] = inst_34819);

(statearr_34844_34871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34826 === (10))){
var inst_34808 = (state_34825[(2)]);
var state_34825__$1 = state_34825;
var statearr_34845_34872 = state_34825__$1;
(statearr_34845_34872[(2)] = inst_34808);

(statearr_34845_34872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34826 === (8))){
var inst_34793 = (state_34825[(10)]);
var inst_34789 = (state_34825[(9)]);
var inst_34785 = (state_34825[(8)]);
var inst_34798 = inst_34785.push(inst_34789);
var tmp34842 = inst_34785;
var inst_34785__$1 = tmp34842;
var inst_34786 = inst_34793;
var state_34825__$1 = (function (){var statearr_34846 = state_34825;
(statearr_34846[(14)] = inst_34798);

(statearr_34846[(7)] = inst_34786);

(statearr_34846[(8)] = inst_34785__$1);

return statearr_34846;
})();
var statearr_34847_34873 = state_34825__$1;
(statearr_34847_34873[(2)] = null);

(statearr_34847_34873[(1)] = (2));


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
});})(c__19561__auto___34859,out))
;
return ((function (switch__19496__auto__,c__19561__auto___34859,out){
return (function() {
var cljs$core$async$state_machine__19497__auto__ = null;
var cljs$core$async$state_machine__19497__auto____0 = (function (){
var statearr_34851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34851[(0)] = cljs$core$async$state_machine__19497__auto__);

(statearr_34851[(1)] = (1));

return statearr_34851;
});
var cljs$core$async$state_machine__19497__auto____1 = (function (state_34825){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_34825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e34852){if((e34852 instanceof Object)){
var ex__19500__auto__ = e34852;
var statearr_34853_34874 = state_34825;
(statearr_34853_34874[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34875 = state_34825;
state_34825 = G__34875;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
cljs$core$async$state_machine__19497__auto__ = function(state_34825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19497__auto____1.call(this,state_34825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19497__auto____0;
cljs$core$async$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19497__auto____1;
return cljs$core$async$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___34859,out))
})();
var state__19563__auto__ = (function (){var statearr_34854 = f__19562__auto__.call(null);
(statearr_34854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___34859);

return statearr_34854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___34859,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1446755799641