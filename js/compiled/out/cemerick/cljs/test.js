// Compiled by ClojureScript 1.7.145 {}
goog.provide('cemerick.cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
cemerick.cljs.test._STAR_test_print_fn_STAR_ = null;
cemerick.cljs.test._STAR_entry_point_STAR_ = true;
cemerick.cljs.test._STAR_test_ctx_STAR_ = null;
cemerick.cljs.test.init_test_environment_STAR_ = (function cemerick$cljs$test$init_test_environment_STAR_(aux_data){
return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0)], null),(cljs.core.truth_(cemerick.cljs.test._STAR_test_print_fn_STAR_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143),cemerick.cljs.test._STAR_test_print_fn_STAR_], null):null)),new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128),cljs.core.List.EMPTY),aux_data));
});
cemerick.cljs.test.init_test_environment = (function cemerick$cljs$test$init_test_environment(){
var G__31244 = cemerick.cljs.test.init_test_environment_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786),cljs.core.List.EMPTY], null));
cljs.core.swap_BANG_.call(null,G__31244,cljs.core.assoc,new cljs.core.Keyword(null,"async","async",1050769601),cemerick.cljs.test.init_test_environment_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY));

return G__31244;
});
cemerick.cljs.test.registered_tests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_test_hooks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_fixtures = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.register_test_BANG_ = (function cemerick$cljs$test$register_test_BANG_(ns,name,fn){
return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_tests,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null),cljs.core.assoc,name,fn);
});
cemerick.cljs.test.register_test_ns_hook_BANG_ = (function cemerick$cljs$test$register_test_ns_hook_BANG_(ns,name){
return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_test_hooks,cljs.core.assoc,ns,name);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cemerick.cljs.test.TestContext = (function (test_env,test_name,__meta,__extmap,__hash){
this.test_env = test_env;
this.test_name = test_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16972__auto__,k__16973__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
return cljs.core._lookup.call(null,this__16972__auto____$1,k__16973__auto__,null);
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16974__auto__,k31246,else__16975__auto__){
var self__ = this;
var this__16974__auto____$1 = this;
var G__31248 = (((k31246 instanceof cljs.core.Keyword))?k31246.fqn:null);
switch (G__31248) {
case "test-env":
return self__.test_env;

break;
case "test-name":
return self__.test_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31246,else__16975__auto__);

}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16986__auto__,writer__16987__auto__,opts__16988__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
var pr_pair__16989__auto__ = ((function (this__16986__auto____$1){
return (function (keyval__16990__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16987__auto__,cljs.core.pr_writer,""," ","",opts__16988__auto__,keyval__16990__auto__);
});})(this__16986__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16987__auto__,pr_pair__16989__auto__,"#cemerick.cljs.test.TestContext{",", ","}",opts__16988__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",-540228992),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",-675595913),self__.test_name],null))], null),self__.__extmap));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IIterable$ = true;

cemerick.cljs.test.TestContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31245){
var self__ = this;
var G__31245__$1 = this;
return (new cljs.core.RecordIter((0),G__31245__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-env","test-env",-540228992),new cljs.core.Keyword(null,"test-name","test-name",-675595913)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return self__.__meta;
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16966__auto__){
var self__ = this;
var this__16966__auto____$1 = this;
return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16976__auto__){
var self__ = this;
var this__16976__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16967__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
var h__16793__auto__ = self__.__hash;
if(!((h__16793__auto__ == null))){
return h__16793__auto__;
} else {
var h__16793__auto____$1 = cljs.core.hash_imap.call(null,this__16967__auto____$1);
self__.__hash = h__16793__auto____$1;

return h__16793__auto____$1;
}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16968__auto__,other__16969__auto__){
var self__ = this;
var this__16968__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16346__auto__ = other__16969__auto__;
if(cljs.core.truth_(and__16346__auto__)){
var and__16346__auto____$1 = (this__16968__auto____$1.constructor === other__16969__auto__.constructor);
if(and__16346__auto____$1){
return cljs.core.equiv_map.call(null,this__16968__auto____$1,other__16969__auto__);
} else {
return and__16346__auto____$1;
}
} else {
return and__16346__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16981__auto__,k__16982__auto__){
var self__ = this;
var this__16981__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-env","test-env",-540228992),null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),null], null), null),k__16982__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16981__auto____$1),self__.__meta),k__16982__auto__);
} else {
return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16982__auto__)),null));
}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16979__auto__,k__16980__auto__,G__31245){
var self__ = this;
var this__16979__auto____$1 = this;
var pred__31249 = cljs.core.keyword_identical_QMARK_;
var expr__31250 = k__16980__auto__;
if(cljs.core.truth_(pred__31249.call(null,new cljs.core.Keyword(null,"test-env","test-env",-540228992),expr__31250))){
return (new cemerick.cljs.test.TestContext(G__31245,self__.test_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31249.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),expr__31250))){
return (new cemerick.cljs.test.TestContext(self__.test_env,G__31245,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16980__auto__,G__31245),null));
}
}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",-540228992),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",-675595913),self__.test_name],null))], null),self__.__extmap));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16971__auto__,G__31245){
var self__ = this;
var this__16971__auto____$1 = this;
return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,G__31245,self__.__extmap,self__.__hash));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16977__auto__,entry__16978__auto__){
var self__ = this;
var this__16977__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16978__auto__)){
return cljs.core._assoc.call(null,this__16977__auto____$1,cljs.core._nth.call(null,entry__16978__auto__,(0)),cljs.core._nth.call(null,entry__16978__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16977__auto____$1,entry__16978__auto__);
}
});

cemerick.cljs.test.TestContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-env","test-env",1100302535,null),new cljs.core.Symbol(null,"test-name","test-name",964935614,null)], null);
});

cemerick.cljs.test.TestContext.cljs$lang$type = true;

cemerick.cljs.test.TestContext.cljs$lang$ctorPrSeq = (function (this__17006__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.cljs.test/TestContext");
});

cemerick.cljs.test.TestContext.cljs$lang$ctorPrWriter = (function (this__17006__auto__,writer__17007__auto__){
return cljs.core._write.call(null,writer__17007__auto__,"cemerick.cljs.test/TestContext");
});

cemerick.cljs.test.__GT_TestContext = (function cemerick$cljs$test$__GT_TestContext(test_env,test_name){
return (new cemerick.cljs.test.TestContext(test_env,test_name,null,null,null));
});

cemerick.cljs.test.map__GT_TestContext = (function cemerick$cljs$test$map__GT_TestContext(G__31247){
return (new cemerick.cljs.test.TestContext(new cljs.core.Keyword(null,"test-env","test-env",-540228992).cljs$core$IFn$_invoke$arity$1(G__31247),new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(G__31247),null,cljs.core.dissoc.call(null,G__31247,new cljs.core.Keyword(null,"test-env","test-env",-540228992),new cljs.core.Keyword(null,"test-name","test-name",-675595913)),null));
});

cemerick.cljs.test.maybe_deref = (function cemerick$cljs$test$maybe_deref(x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
cemerick.cljs.test.testing_complete_QMARK_ = (function cemerick$cljs$test$testing_complete_QMARK_(test_env){
var map__31257 = cemerick.cljs.test.maybe_deref.call(null,test_env);
var map__31257__$1 = ((((!((map__31257 == null)))?((((map__31257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31257):map__31257);
var remaining = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312));
var running = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558));
var async = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"async","async",1050769601));
var and__16346__auto__ = cljs.core.empty_QMARK_.call(null,remaining);
if(and__16346__auto__){
var and__16346__auto____$1 = cljs.core.empty_QMARK_.call(null,running);
if(and__16346__auto____$1){
var or__16358__auto__ = (async == null);
if(or__16358__auto__){
return or__16358__auto__;
} else {
return cemerick$cljs$test$testing_complete_QMARK_.call(null,async);
}
} else {
return and__16346__auto____$1;
}
} else {
return and__16346__auto__;
}
});
/**
 * Registers a watcher on the :async testing (sub)environment provided by
 * [test-env]; when its key metrics (:test, :pass, :fail, :error) change,
 * [callback] will be called with [test-env].  The watcher will be removed when all
 * tests are complete.
 * 
 * If [test-env] is already complete, [callback] will be called with it as an
 * argument immediately, and no watcher will be registered.
 */
cemerick.cljs.test.on_async_progress = (function cemerick$cljs$test$on_async_progress(test_env,callback){
if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env))){
setTimeout((function (){
return callback.call(null,test_env);
}),(1));
} else {
cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.maybe_deref.call(null,test_env)),cljs.core.gensym.call(null,"on-progress"),(function (key,ref,old,new$){
var vec__31261 = cljs.core.map.call(null,(function (p1__31259_SHARP_){
return cljs.core.select_keys.call(null,p1__31259_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"error","error",-978969032)], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old,new$], null));
var oldv = cljs.core.nth.call(null,vec__31261,(0),null);
var newv = cljs.core.nth.call(null,vec__31261,(1),null);
var complete_QMARK_ = cemerick.cljs.test.testing_complete_QMARK_.call(null,new$);
if(cljs.core.truth_((function (){var or__16358__auto__ = complete_QMARK_;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core.not_EQ_.call(null,oldv,newv);
}
})())){
callback.call(null,cemerick.cljs.test.maybe_deref.call(null,test_env));
} else {
}

if(cljs.core.truth_(complete_QMARK_)){
return cljs.core.remove_watch.call(null,ref,key);
} else {
return null;
}
}));
}

return test_env;
});
goog.exportSymbol('cemerick.cljs.test.on_async_progress', cemerick.cljs.test.on_async_progress);
/**
 * Same as `on-async-progress`, but will only call [callback] when all tests are complete.
 */
cemerick.cljs.test.on_testing_complete = (function cemerick$cljs$test$on_testing_complete(test_env,callback){
return cemerick.cljs.test.on_async_progress.call(null,test_env,(function (test_env__$1){
if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env__$1))){
return callback.call(null,test_env__$1);
} else {
return null;
}
}));
});
goog.exportSymbol('cemerick.cljs.test.on_testing_complete', cemerick.cljs.test.on_testing_complete);
/**
 * Returns a string representation of the current test.  Renders names
 *   in the test environment's ::test-functions list, then the source file and line of
 *   current assertion.
 */
cemerick.cljs.test.testing_vars_str = (function cemerick$cljs$test$testing_vars_str(p__31262){
var map__31265 = p__31262;
var map__31265__$1 = ((((!((map__31265 == null)))?((((map__31265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31265):map__31265);
var m = map__31265__$1;
var file = cljs.core.get.call(null,map__31265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31265__$1,new cljs.core.Keyword(null,"line","line",212345235));
var test_env = cljs.core.get.call(null,map__31265__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var test_name = cljs.core.get.call(null,map__31265__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));
return [cljs.core.str(cljs.core.pr_str.call(null,(function (){var or__16358__auto__ = cljs.core.seq.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))));
if(or__16358__auto__){
return or__16358__auto__;
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,test_name);
}
})())),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str(")")].join('');
});
/**
 * Returns a string representation of the current test context as represented in
 *   the [test-env]'s ::test-contexts list. Joins strings in that list with
 *   spaces.
 */
cemerick.cljs.test.testing_contexts_str = (function cemerick$cljs$test$testing_contexts_str(test_env){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))));
});
/**
 * Increments the named counter in the [test-env] atom.
 */
cemerick.cljs.test.inc_report_counter = (function cemerick$cljs$test$inc_report_counter(test_env,name){
return cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),cljs.core.fnil.call(null,cljs.core.inc,(0)));
});
if(typeof cemerick.cljs.test.report !== 'undefined'){
} else {
/**
 * Generic reporting function, may be overridden to plug in
 * different report formats (e.g., TAP, JUnit).  Assertions such as
 * 'is' call 'report' to indicate results.  The argument given to
 * 'report' will be a map with a :type key.  See the documentation at
 * the top of test_is.clj for more information on the types of
 * arguments for 'report'.
 */
cemerick.cljs.test.report = (function (){var method_table__17271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17275__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cemerick.cljs.test","report"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17275__auto__,method_table__17271__auto__,prefer_table__17272__auto__,method_cache__17273__auto__,cached_hierarchy__17274__auto__));
})();
}
cemerick.cljs.test.file_and_line = (function cemerick$cljs$test$file_and_line(error){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),error.fileName,new cljs.core.Keyword(null,"line","line",212345235),error.lineNumber], null);
});
/**
 * Add file and line information to a test result and call report.
 * If you are writing a custom assert-expr method, call this function
 * to pass test results to report.
 */
cemerick.cljs.test.do_report = (function cemerick$cljs$test$do_report(var_args){
var args31267 = [];
var len__17416__auto___31274 = arguments.length;
var i__17417__auto___31275 = (0);
while(true){
if((i__17417__auto___31275 < len__17416__auto___31274)){
args31267.push((arguments[i__17417__auto___31275]));

var G__31276 = (i__17417__auto___31275 + (1));
i__17417__auto___31275 = G__31276;
continue;
} else {
}
break;
}

var G__31269 = args31267.length;
switch (G__31269) {
case 2:
return cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31267.length)].join('')));

}
});

cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$2 = (function (p__31270,m){
var map__31271 = p__31270;
var map__31271__$1 = ((((!((map__31271 == null)))?((((map__31271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31271):map__31271);
var test_ctx = map__31271__$1;
var test_env = cljs.core.get.call(null,map__31271__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var test_name = cljs.core.get.call(null,map__31271__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));
if((test_ctx instanceof cemerick.cljs.test.TestContext)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null))))].join('')));
}

return cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,m,test_ctx));
});

cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1 = (function (m){
return cemerick.cljs.test.report.call(null,(function (){var G__31273 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m).fqn:null);
switch (G__31273) {
case "fail":
return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,Error()),m);

break;
case "error":
return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)),m);

break;
default:
return m;

}
})());
});

cemerick.cljs.test.do_report.cljs$lang$maxFixedArity = 2;
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31279){
var map__31280 = p__31279;
var map__31280__$1 = ((((!((map__31280 == null)))?((((map__31280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31280):map__31280);
var m = map__31280__$1;
var test_env = cljs.core.get.call(null,map__31280__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var _STAR_print_fn_STAR_31282 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__16358__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{return cljs.core.prn.call(null,m);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31282;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__31283){
var map__31284 = p__31283;
var map__31284__$1 = ((((!((map__31284 == null)))?((((map__31284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31284):map__31284);
var m = map__31284__$1;
var test_env = cljs.core.get.call(null,map__31284__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var _STAR_print_fn_STAR_31286 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__16358__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{return cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"pass","pass",1574159993));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31286;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (p__31287){
var map__31288 = p__31287;
var map__31288__$1 = ((((!((map__31288 == null)))?((((map__31288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31288):map__31288);
var m = map__31288__$1;
var test_env = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var _STAR_print_fn_STAR_31290 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__16358__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"fail","fail",1706214930));

cljs.core.println.call(null,"\nFAIL in",cemerick.cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))){
cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else {
}

var temp__4425__auto___31291 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto___31291)){
var message_31292 = temp__4425__auto___31291;
cljs.core.println.call(null,message_31292);
} else {
}

cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));

return cljs.core.println.call(null,"  actual:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31290;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"error","error",-978969032),(function (p__31293){
var map__31294 = p__31293;
var map__31294__$1 = ((((!((map__31294 == null)))?((((map__31294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31294):map__31294);
var m = map__31294__$1;
var test_env = cljs.core.get.call(null,map__31294__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var _STAR_print_fn_STAR_31296 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__16358__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"error","error",-978969032));

cljs.core.println.call(null,"\nERROR in",cemerick.cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))){
cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else {
}

var temp__4425__auto___31297 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto___31297)){
var message_31298 = temp__4425__auto___31297;
cljs.core.println.call(null,message_31298);
} else {
}

cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));

cljs.core.print.call(null,"  actual: ");

var actual = new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m);
if((actual instanceof Error)){
return cljs.core.println.call(null,actual.stack);
} else {
return cljs.core.prn.call(null,actual);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31296;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709),(function (p__31299){
var map__31300 = p__31299;
var map__31300__$1 = ((((!((map__31300 == null)))?((((map__31300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31300):map__31300);
var m = map__31300__$1;
var test_env = cljs.core.get.call(null,map__31300__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var _STAR_print_fn_STAR_31302 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__16358__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709));

cljs.core.println.call(null,"\nWARNING in",cemerick.cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))){
cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else {
}

var temp__4425__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var message = temp__4425__auto__;
return cljs.core.println.call(null,message);
} else {
return null;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31302;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"summary","summary",380847952),(function (p__31303){
var map__31304 = p__31303;
var map__31304__$1 = ((((!((map__31304 == null)))?((((map__31304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31304):map__31304);
var test_env = map__31304__$1;
var test = cljs.core.get.call(null,map__31304__$1,new cljs.core.Keyword(null,"test","test",577538877));
var pass = cljs.core.get.call(null,map__31304__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var fail = cljs.core.get.call(null,map__31304__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.call(null,map__31304__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var async = cljs.core.get.call(null,map__31304__$1,new cljs.core.Keyword(null,"async","async",1050769601));
var _STAR_print_fn_STAR_31306 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__16358__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{var pending_count = (function (){var and__16346__auto__ = cljs.core.not.call(null,cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env));
if(and__16346__auto__){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,cljs.core.juxt.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312),new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)).call(null,cljs.core.deref.call(null,async))));
} else {
return and__16346__auto__;
}
})();
cljs.core.println.call(null,"\nRan",test,(cljs.core.truth_(pending_count)?"synchronous":""),"tests containing",((pass + fail) + error),"assertions.");

cljs.core.println.call(null,"Testing complete:",fail,"failures,",error,"errors.");

if(cljs.core.truth_(pending_count)){
return cljs.core.println.call(null,"Waiting on",pending_count,[cljs.core.str("asynchronous test"),cljs.core.str((((pending_count > (1)))?"s":null)),cljs.core.str(" to complete.")].join(''));
} else {
return null;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31306;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),(function (p__31307){
var map__31308 = p__31307;
var map__31308__$1 = ((((!((map__31308 == null)))?((((map__31308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31308):map__31308);
var m = map__31308__$1;
var ns = cljs.core.get.call(null,map__31308__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var test_env = cljs.core.get.call(null,map__31308__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var async = cljs.core.get.call(null,map__31308__$1,new cljs.core.Keyword(null,"async","async",1050769601));
var _STAR_print_fn_STAR_31310 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__16358__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{return cljs.core.println.call(null,"\nTesting",ns,(cljs.core.truth_(async)?"(async)":""));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31310;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),(function (p__31311){
var map__31312 = p__31311;
var map__31312__$1 = ((((!((map__31312 == null)))?((((map__31312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31312):map__31312);
var m = map__31312__$1;
var test_env = cljs.core.get.call(null,map__31312__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),(function (p__31314){
var map__31315 = p__31314;
var map__31315__$1 = ((((!((map__31315 == null)))?((((map__31315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31315):map__31315);
var m = map__31315__$1;
var test_env = cljs.core.get.call(null,map__31315__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),(function (p__31317){
var map__31318 = p__31317;
var map__31318__$1 = ((((!((map__31318 == null)))?((((map__31318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31318):map__31318);
var m = map__31318__$1;
var test_env = cljs.core.get.call(null,map__31318__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
return null;
}));
/**
 * Wrap test runs in a fixture function to perform setup and
 *   teardown. Using a fixture-type of :each wraps every test
 *   individually, while :once wraps the whole run in a single function.
 */
cemerick.cljs.test.register_fixtures_BANG_ = (function cemerick$cljs$test$register_fixtures_BANG_(var_args){
var args__17423__auto__ = [];
var len__17416__auto___31323 = arguments.length;
var i__17417__auto___31324 = (0);
while(true){
if((i__17417__auto___31324 < len__17416__auto___31323)){
args__17423__auto__.push((arguments[i__17417__auto___31324]));

var G__31325 = (i__17417__auto___31324 + (1));
i__17417__auto___31324 = G__31325;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((2) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((2)),(0))):null);
return cemerick.cljs.test.register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17424__auto__);
});

cemerick.cljs.test.register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ns_sym,fixture_type,fixture_fns){
return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_fixtures,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_sym,fixture_type], null),cljs.core.constantly.call(null,fixture_fns));
});

cemerick.cljs.test.register_fixtures_BANG_.cljs$lang$maxFixedArity = (2);

cemerick.cljs.test.register_fixtures_BANG_.cljs$lang$applyTo = (function (seq31320){
var G__31321 = cljs.core.first.call(null,seq31320);
var seq31320__$1 = cljs.core.next.call(null,seq31320);
var G__31322 = cljs.core.first.call(null,seq31320__$1);
var seq31320__$2 = cljs.core.next.call(null,seq31320__$1);
return cemerick.cljs.test.register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31321,G__31322,seq31320__$2);
});
/**
 * The default, empty, fixture function.  Just calls its argument.
 */
cemerick.cljs.test.default_fixture = (function cemerick$cljs$test$default_fixture(f){
return f.call(null);
});
/**
 * Composes two fixture functions, creating a new fixture function
 *   that combines their behavior.
 */
cemerick.cljs.test.compose_fixtures = (function cemerick$cljs$test$compose_fixtures(f1,f2){
return (function (g){
return f1.call(null,(function (){
return f2.call(null,g);
}));
});
});
/**
 * Composes a collection of fixtures, in order.  Always returns a valid
 *   fixture function, even if the collection is empty.
 */
cemerick.cljs.test.join_fixtures = (function cemerick$cljs$test$join_fixtures(fixtures){
return cljs.core.reduce.call(null,cemerick.cljs.test.compose_fixtures,cemerick.cljs.test.default_fixture,fixtures);
});
cemerick.cljs.test.async_test_QMARK_ = (function cemerick$cljs$test$async_test_QMARK_(test_fn){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,test_fn)));
});
cemerick.cljs.test.test_async_fn = (function cemerick$cljs$test$test_async_fn(async_test_env,test_name,test_fn){
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),test_fn,new cljs.core.Keyword(null,"test-env","test-env",-540228992),async_test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name], null));

cemerick.cljs.test.inc_report_counter.call(null,async_test_env,new cljs.core.Keyword(null,"test","test",577538877));

return test_fn.call(null,(new cemerick.cljs.test.TestContext(async_test_env,test_name,null,null,null)));
});
cemerick.cljs.test.start_next_async_test = (function cemerick$cljs$test$start_next_async_test(async_test_env){
var next_test = cljs.core.atom.call(null,(function (){
return null;
}));
cljs.core.swap_BANG_.call(null,async_test_env,((function (next_test){
return (function (env){
var temp__4423__auto__ = (function (){var and__16346__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(env));
if(and__16346__auto__){
return cljs.core.first.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312).cljs$core$IFn$_invoke$arity$1(env));
} else {
return and__16346__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var vec__31327 = temp__4423__auto__;
var name = cljs.core.nth.call(null,vec__31327,(0),null);
var testfn = cljs.core.nth.call(null,vec__31327,(1),null);
cljs.core.reset_BANG_.call(null,next_test,testfn);

var ns_31328 = cljs.core.namespace.call(null,name);
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,async_test_env)),ns_31328)){
} else {
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns_31328,new cljs.core.Keyword(null,"test-env","test-env",-540228992),async_test_env,new cljs.core.Keyword(null,"async","async",1050769601),true], null));

cljs.core.alter_meta_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),ns_31328);
}

return cljs.core.update_in.call(null,cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312)], null),cljs.core.dissoc,name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)], null),cljs.core.assoc,name,(new Date()));
} else {
return env;
}
});})(next_test))
);

setTimeout(((function (next_test){
return (function (){
return cljs.core.deref.call(null,next_test).call(null);
});})(next_test))
,(1));

return async_test_env;
});
/**
 * Removes framework-internal bits from a test environment for more pleasant human viewing.
 */
cemerick.cljs.test.squelch_internals = (function cemerick$cljs$test$squelch_internals(test_env){
var G__31333 = test_env;
cljs.core.swap_BANG_.call(null,G__31333,((function (G__31333){
return (function (p1__31329_SHARP_){
return cljs.core.reduce.call(null,((function (G__31333){
return (function (env,p__31334){
var vec__31335 = p__31334;
var k = cljs.core.nth.call(null,vec__31335,(0),null);
var v = cljs.core.nth.call(null,vec__31335,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,k),cljs.core.namespace.call(null,new cljs.core.Keyword("cemerick.cljs.test","foo","cemerick.cljs.test/foo",-1669146357)))){
return env;
} else {
return cljs.core.assoc.call(null,env,k,v);
}
});})(G__31333))
,cljs.core.PersistentArrayMap.EMPTY,p1__31329_SHARP_);
});})(G__31333))
);

return G__31333;
});
cemerick.cljs.test.finish_test_entry_point = (function cemerick$cljs$test$finish_test_entry_point(entry_point_QMARK_,test_env){
if(cljs.core.truth_(entry_point_QMARK_)){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))))){
cljs.core.swap_BANG_.call(null,test_env,cljs.core.dissoc,new cljs.core.Keyword(null,"async","async",1050769601));
} else {
cemerick.cljs.test.start_next_async_test.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)));
}

return cljs.core.deref.call(null,cemerick.cljs.test.squelch_internals.call(null,test_env));
} else {
return test_env;
}
});
cemerick.cljs.test.schedule_async_test = (function cemerick$cljs$test$schedule_async_test(async_test_env,test_name,test_fn){
cljs.core.swap_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312)], null),cljs.core.fnil.call(null,cljs.core.assoc,cljs.core.sorted_map.call(null)),test_name,cljs.core.with_meta.call(null,(function (){
return cemerick.cljs.test.test_async_fn.call(null,async_test_env,test_name,test_fn);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),test_name], null)));

return async_test_env;
});
cemerick.cljs.test.done_STAR_ = (function cemerick$cljs$test$done_STAR_(var_args){
var args31336 = [];
var len__17416__auto___31345 = arguments.length;
var i__17417__auto___31346 = (0);
while(true){
if((i__17417__auto___31346 < len__17416__auto___31345)){
args31336.push((arguments[i__17417__auto___31346]));

var G__31347 = (i__17417__auto___31346 + (1));
i__17417__auto___31346 = G__31347;
continue;
} else {
}
break;
}

var G__31338 = args31336.length;
switch (G__31338) {
case 2:
return cemerick.cljs.test.done_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cemerick.cljs.test.done_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31336.length)].join('')));

}
});

cemerick.cljs.test.done_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p__31339,error){
var map__31340 = p__31339;
var map__31340__$1 = ((((!((map__31340 == null)))?((((map__31340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31340):map__31340);
var test_ctx = map__31340__$1;
var test_env = cljs.core.get.call(null,map__31340__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var test_name = cljs.core.get.call(null,map__31340__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));
if((test_ctx instanceof cemerick.cljs.test.TestContext)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null))))].join('')));
}

cemerick.cljs.test.do_report.call(null,cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),error], null),test_ctx)));

return cemerick.cljs.test.done_STAR_.call(null,test_ctx);
});

cemerick.cljs.test.done_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p__31342){
var map__31343 = p__31342;
var map__31343__$1 = ((((!((map__31343 == null)))?((((map__31343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31343):map__31343);
var test_ctx = map__31343__$1;
var async_test_env = cljs.core.get.call(null,map__31343__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var test_name = cljs.core.get.call(null,map__31343__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));
if((test_ctx instanceof cemerick.cljs.test.TestContext)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null))))].join('')));
}

var first_call_QMARK_ = cljs.core.atom.call(null,false);
cljs.core.swap_BANG_.call(null,async_test_env,((function (first_call_QMARK_,map__31343,map__31343__$1,test_ctx,async_test_env,test_name){
return (function (env){
cljs.core.reset_BANG_.call(null,first_call_QMARK_,cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558).cljs$core$IFn$_invoke$arity$1(env),test_name));

return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)], null),cljs.core.dissoc,test_name);
});})(first_call_QMARK_,map__31343,map__31343__$1,test_ctx,async_test_env,test_name))
);

if(cljs.core.truth_(cljs.core.deref.call(null,first_call_QMARK_))){
cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),test_name], null),test_ctx));

if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,async_test_env))){
cemerick.cljs.test.squelch_internals.call(null,async_test_env);
} else {
cemerick.cljs.test.start_next_async_test.call(null,async_test_env);
}
} else {
cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709),new cljs.core.Keyword(null,"message","message",-406056002),"`(done)` called multiple times to signal end-of-test"], null),test_ctx));
}

return async_test_env;
});

cemerick.cljs.test.done_STAR_.cljs$lang$maxFixedArity = 2;
cemerick.cljs.test.stop = (function cemerick$cljs$test$stop(async_test_env){
return cljs.core.swap_BANG_.call(null,async_test_env,cljs.core.assoc,new cljs.core.Keyword(null,"stop","stop",-2140911342),true);
});
/**
 * If v has a function in its :test metadata, calls that function,
 *   conjing its name into the test environment's ::test-functions list.
 * 
 *   Note that this is the implementation of `test-var` in clojure.test,
 *   which is a macro in clojurescript.test.  See `cemerick.cljs.test/test-var`
 *   in the Clojure file for `test-var`.
 */
cemerick.cljs.test.test_function = (function cemerick$cljs$test$test_function(var_args){
var args31349 = [];
var len__17416__auto___31356 = arguments.length;
var i__17417__auto___31357 = (0);
while(true){
if((i__17417__auto___31357 < len__17416__auto___31356)){
args31349.push((arguments[i__17417__auto___31357]));

var G__31358 = (i__17417__auto___31357 + (1));
i__17417__auto___31357 = G__31358;
continue;
} else {
}
break;
}

var G__31351 = args31349.length;
switch (G__31351) {
case 1:
return cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31349.length)].join('')));

}
});

cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),v);
});

cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 = (function (test_env,v){
var entry_point_QMARK___28788__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;
var _STAR_entry_point_STAR_31352 = cemerick.cljs.test._STAR_entry_point_STAR_;
cemerick.cljs.test._STAR_entry_point_STAR_ = false;

try{if(cljs.core.fn_QMARK_.call(null,v)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("test-var must be passed the function to be tested (not a symbol naming it)"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var map__31353_31360 = cljs.core.meta.call(null,v);
var map__31353_31361__$1 = ((((!((map__31353_31360 == null)))?((((map__31353_31360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31353_31360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31353_31360):map__31353_31360);
var t_31362 = cljs.core.get.call(null,map__31353_31361__$1,new cljs.core.Keyword(null,"test","test",577538877));
var test_name_31363 = cljs.core.get.call(null,map__31353_31361__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var async_QMARK__31364 = cljs.core.get.call(null,map__31353_31361__$1,new cljs.core.Keyword(null,"async","async",1050769601));
if(cljs.core.truth_(t_31362)){
if(cljs.core.truth_(async_QMARK__31364)){
cemerick.cljs.test.schedule_async_test.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),test_name_31363,t_31362);
} else {
try{cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786)], null),cljs.core.conj,(function (){var or__16358__auto__ = test_name_31363;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return v;
}
})());

cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_31363], null));

cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"test","test",577538877));

try{t_31362.call(null,(new cemerick.cljs.test.TestContext(test_env,test_name_31363,null,null,null)));
}catch (e31355){if((e31355 instanceof Error)){
var e_31365 = e31355;
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_31363,new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),e_31365], null));
} else {
throw e31355;

}
}
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_31363], null));
}finally {cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786)], null),cljs.core.pop);
}}
} else {
}

return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___28788__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_31352;
}});

cemerick.cljs.test.test_function.cljs$lang$maxFixedArity = 2;
/**
 * Calls test-var on every var interned in the namespace, with fixtures.
 */
cemerick.cljs.test.test_all_vars = (function cemerick$cljs$test$test_all_vars(var_args){
var args31369 = [];
var len__17416__auto___31377 = arguments.length;
var i__17417__auto___31378 = (0);
while(true){
if((i__17417__auto___31378 < len__17416__auto___31377)){
args31369.push((arguments[i__17417__auto___31378]));

var G__31379 = (i__17417__auto___31378 + (1));
i__17417__auto___31378 = G__31379;
continue;
} else {
}
break;
}

var G__31371 = args31369.length;
switch (G__31371) {
case 1:
return cemerick.cljs.test.test_all_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cemerick.cljs.test.test_all_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31369.length)].join('')));

}
});

cemerick.cljs.test.test_all_vars.cljs$core$IFn$_invoke$arity$1 = (function (ns_sym){
return cemerick.cljs.test.test_all_vars.call(null,cemerick.cljs.test.init_test_environment.call(null),ns_sym);
});

cemerick.cljs.test.test_all_vars.cljs$core$IFn$_invoke$arity$2 = (function (test_env,ns_sym){
var entry_point_QMARK___28788__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;
var _STAR_entry_point_STAR_31372 = cemerick.cljs.test._STAR_entry_point_STAR_;
cemerick.cljs.test._STAR_entry_point_STAR_ = false;

try{var tests_31381 = cljs.core.filter.call(null,((function (_STAR_entry_point_STAR_31372,entry_point_QMARK___28788__auto__){
return (function (p1__31366_SHARP_){
return new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__31366_SHARP_));
});})(_STAR_entry_point_STAR_31372,entry_point_QMARK___28788__auto__))
,cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests),ns_sym)));
var once_fixture_fn_31382 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));
var each_fixture_fn_31383 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));
once_fixture_fn_31382.call(null,((function (once_fixture_fn_31382,each_fixture_fn_31383,tests_31381,_STAR_entry_point_STAR_31372,entry_point_QMARK___28788__auto__){
return (function (){
var seq__31373 = cljs.core.seq.call(null,cljs.core.remove.call(null,cemerick.cljs.test.async_test_QMARK_,tests_31381));
var chunk__31374 = null;
var count__31375 = (0);
var i__31376 = (0);
while(true){
if((i__31376 < count__31375)){
var v = cljs.core._nth.call(null,chunk__31374,i__31376);
each_fixture_fn_31383.call(null,((function (seq__31373,chunk__31374,count__31375,i__31376,v,once_fixture_fn_31382,each_fixture_fn_31383,tests_31381,_STAR_entry_point_STAR_31372,entry_point_QMARK___28788__auto__){
return (function (){
return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__31373,chunk__31374,count__31375,i__31376,v,once_fixture_fn_31382,each_fixture_fn_31383,tests_31381,_STAR_entry_point_STAR_31372,entry_point_QMARK___28788__auto__))
);

var G__31384 = seq__31373;
var G__31385 = chunk__31374;
var G__31386 = count__31375;
var G__31387 = (i__31376 + (1));
seq__31373 = G__31384;
chunk__31374 = G__31385;
count__31375 = G__31386;
i__31376 = G__31387;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31373);
if(temp__4425__auto__){
var seq__31373__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31373__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__31373__$1);
var G__31388 = cljs.core.chunk_rest.call(null,seq__31373__$1);
var G__31389 = c__17161__auto__;
var G__31390 = cljs.core.count.call(null,c__17161__auto__);
var G__31391 = (0);
seq__31373 = G__31388;
chunk__31374 = G__31389;
count__31375 = G__31390;
i__31376 = G__31391;
continue;
} else {
var v = cljs.core.first.call(null,seq__31373__$1);
each_fixture_fn_31383.call(null,((function (seq__31373,chunk__31374,count__31375,i__31376,v,seq__31373__$1,temp__4425__auto__,once_fixture_fn_31382,each_fixture_fn_31383,tests_31381,_STAR_entry_point_STAR_31372,entry_point_QMARK___28788__auto__){
return (function (){
return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__31373,chunk__31374,count__31375,i__31376,v,seq__31373__$1,temp__4425__auto__,once_fixture_fn_31382,each_fixture_fn_31383,tests_31381,_STAR_entry_point_STAR_31372,entry_point_QMARK___28788__auto__))
);

var G__31392 = cljs.core.next.call(null,seq__31373__$1);
var G__31393 = null;
var G__31394 = (0);
var G__31395 = (0);
seq__31373 = G__31392;
chunk__31374 = G__31393;
count__31375 = G__31394;
i__31376 = G__31395;
continue;
}
} else {
return null;
}
}
break;
}
});})(once_fixture_fn_31382,each_fixture_fn_31383,tests_31381,_STAR_entry_point_STAR_31372,entry_point_QMARK___28788__auto__))
);

cljs.core.reduce.call(null,((function (tests_31381,_STAR_entry_point_STAR_31372,entry_point_QMARK___28788__auto__){
return (function (p1__31367_SHARP_,p2__31368_SHARP_){
return cljs.core.apply.call(null,cemerick.cljs.test.schedule_async_test,p1__31367_SHARP_,p2__31368_SHARP_);
});})(tests_31381,_STAR_entry_point_STAR_31372,entry_point_QMARK___28788__auto__))
,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"test","test",577538877)),cljs.core.meta),cljs.core.filter.call(null,cemerick.cljs.test.async_test_QMARK_,tests_31381)));

return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___28788__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_31372;
}});

cemerick.cljs.test.test_all_vars.cljs$lang$maxFixedArity = 2;
/**
 * If the namespace defines a function named test-ns-hook, calls that.
 *   Otherwise, calls test-all-vars on the namespace.  'ns' is a
 *   namespace object or a symbol.
 * 
 *   Internally binds *report-counters* to an atom initialized to
 *   *inital-report-counters*.  Returns the final, dereferenced state of
 *   *report-counters*.
 */
cemerick.cljs.test.test_ns = (function cemerick$cljs$test$test_ns(var_args){
var args31396 = [];
var len__17416__auto___31400 = arguments.length;
var i__17417__auto___31401 = (0);
while(true){
if((i__17417__auto___31401 < len__17416__auto___31400)){
args31396.push((arguments[i__17417__auto___31401]));

var G__31402 = (i__17417__auto___31401 + (1));
i__17417__auto___31401 = G__31402;
continue;
} else {
}
break;
}

var G__31398 = args31396.length;
switch (G__31398) {
case 1:
return cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31396.length)].join('')));

}
});

cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns_sym){
return cemerick.cljs.test.test_ns.call(null,cemerick.cljs.test.init_test_environment.call(null),ns_sym);
});

cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (test_env,ns_sym){
var entry_point_QMARK___28788__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;
var _STAR_entry_point_STAR_31399 = cemerick.cljs.test._STAR_entry_point_STAR_;
cemerick.cljs.test._STAR_entry_point_STAR_ = false;

try{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env], null));

var temp__4423__auto___31404 = cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_test_hooks),ns_sym);
if(cljs.core.truth_(temp__4423__auto___31404)){
var test_hook_31405 = temp__4423__auto___31404;
test_hook_31405.call(null,test_env);
} else {
cemerick.cljs.test.test_all_vars.call(null,test_env,ns_sym);
}

cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env], null));

return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___28788__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_31399;
}});

cemerick.cljs.test.test_ns.cljs$lang$maxFixedArity = 2;
cemerick.cljs.test.print_summary = (function cemerick$cljs$test$print_summary(env){
return cemerick.cljs.test.do_report.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));
});
cemerick.cljs.test.async_test_summary = (function cemerick$cljs$test$async_test_summary(test_env){
var async_test_env = cemerick.cljs.test.maybe_deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(test_env));
var tests = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(async_test_env);
if((tests > (0))){
return cemerick.cljs.test.print_summary.call(null,cljs.core.merge_with.call(null,cljs.core._PLUS_,test_env,async_test_env));
} else {
return null;
}
});
cemerick.cljs.test.test_summary = (function cemerick$cljs$test$test_summary(test_env){
var test_env__$1 = cemerick.cljs.test.maybe_deref.call(null,test_env);
cemerick.cljs.test.print_summary.call(null,test_env__$1);

return cemerick.cljs.test.on_testing_complete.call(null,test_env__$1,cemerick.cljs.test.async_test_summary);
});
/**
 * Runs all tests in the given namespaces; prints results.
 *   Defaults to current namespace if none given.  Returns a map
 *   summarizing test results.
 */
cemerick.cljs.test.run_tests_STAR_ = (function cemerick$cljs$test$run_tests_STAR_(var_args){
var args__17423__auto__ = [];
var len__17416__auto___31413 = arguments.length;
var i__17417__auto___31414 = (0);
while(true){
if((i__17417__auto___31414 < len__17416__auto___31413)){
args__17423__auto__.push((arguments[i__17417__auto___31414]));

var G__31415 = (i__17417__auto___31414 + (1));
i__17417__auto___31414 = G__31415;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((0) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((0)),(0))):null);
return cemerick.cljs.test.run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__17424__auto__);
});
goog.exportSymbol('cemerick.cljs.test.run_tests_STAR_', cemerick.cljs.test.run_tests_STAR_);

cemerick.cljs.test.run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (namespaces){
var vec__31407 = (((cljs.core.first.call(null,namespaces) instanceof cljs.core.Atom))?namespaces:cljs.core.cons.call(null,cemerick.cljs.test.init_test_environment.call(null),namespaces));
var test_env = cljs.core.nth.call(null,vec__31407,(0),null);
var namespaces__$1 = cljs.core.nthnext.call(null,vec__31407,(1));
var entry_point_QMARK___28788__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;
var _STAR_entry_point_STAR_31408 = cemerick.cljs.test._STAR_entry_point_STAR_;
cemerick.cljs.test._STAR_entry_point_STAR_ = false;

try{var seq__31409_31416 = cljs.core.seq.call(null,cljs.core.distinct.call(null,namespaces__$1));
var chunk__31410_31417 = null;
var count__31411_31418 = (0);
var i__31412_31419 = (0);
while(true){
if((i__31412_31419 < count__31411_31418)){
var ns_31420 = cljs.core._nth.call(null,chunk__31410_31417,i__31412_31419);
cemerick.cljs.test.test_ns.call(null,test_env,ns_31420);

var G__31421 = seq__31409_31416;
var G__31422 = chunk__31410_31417;
var G__31423 = count__31411_31418;
var G__31424 = (i__31412_31419 + (1));
seq__31409_31416 = G__31421;
chunk__31410_31417 = G__31422;
count__31411_31418 = G__31423;
i__31412_31419 = G__31424;
continue;
} else {
var temp__4425__auto___31425 = cljs.core.seq.call(null,seq__31409_31416);
if(temp__4425__auto___31425){
var seq__31409_31426__$1 = temp__4425__auto___31425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31409_31426__$1)){
var c__17161__auto___31427 = cljs.core.chunk_first.call(null,seq__31409_31426__$1);
var G__31428 = cljs.core.chunk_rest.call(null,seq__31409_31426__$1);
var G__31429 = c__17161__auto___31427;
var G__31430 = cljs.core.count.call(null,c__17161__auto___31427);
var G__31431 = (0);
seq__31409_31416 = G__31428;
chunk__31410_31417 = G__31429;
count__31411_31418 = G__31430;
i__31412_31419 = G__31431;
continue;
} else {
var ns_31432 = cljs.core.first.call(null,seq__31409_31426__$1);
cemerick.cljs.test.test_ns.call(null,test_env,ns_31432);

var G__31433 = cljs.core.next.call(null,seq__31409_31426__$1);
var G__31434 = null;
var G__31435 = (0);
var G__31436 = (0);
seq__31409_31416 = G__31433;
chunk__31410_31417 = G__31434;
count__31411_31418 = G__31435;
i__31412_31419 = G__31436;
continue;
}
} else {
}
}
break;
}

cemerick.cljs.test.test_summary.call(null,test_env);

return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___28788__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_31408;
}});

cemerick.cljs.test.run_tests_STAR_.cljs$lang$maxFixedArity = (0);

cemerick.cljs.test.run_tests_STAR_.cljs$lang$applyTo = (function (seq31406){
return cemerick.cljs.test.run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31406));
});
/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
cemerick.cljs.test.run_all_tests = (function cemerick$cljs$test$run_all_tests(var_args){
var args31438 = [];
var len__17416__auto___31441 = arguments.length;
var i__17417__auto___31442 = (0);
while(true){
if((i__17417__auto___31442 < len__17416__auto___31441)){
args31438.push((arguments[i__17417__auto___31442]));

var G__31443 = (i__17417__auto___31442 + (1));
i__17417__auto___31442 = G__31443;
continue;
} else {
}
break;
}

var G__31440 = args31438.length;
switch (G__31440) {
case 0:
return cemerick.cljs.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cemerick.cljs.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31438.length)].join('')));

}
});
goog.exportSymbol('cemerick.cljs.test.run_all_tests', cemerick.cljs.test.run_all_tests);

cemerick.cljs.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests)));
});

cemerick.cljs.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (re){
return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.filter.call(null,(function (p1__31437_SHARP_){
return cljs.core.re_matches.call(null,re,cljs.core.name.call(null,p1__31437_SHARP_));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests))));
});

cemerick.cljs.test.run_all_tests.cljs$lang$maxFixedArity = 1;
/**
 * Returns true if the given test summary indicates all tests
 *   were successful, false otherwise.
 */
cemerick.cljs.test.successful_QMARK_ = (function cemerick$cljs$test$successful_QMARK_(test_env){
var map__31447 = cemerick.cljs.test.maybe_deref.call(null,test_env);
var map__31447__$1 = ((((!((map__31447 == null)))?((((map__31447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31447):map__31447);
var fail = cljs.core.get.call(null,map__31447__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.call(null,map__31447__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var async = cljs.core.get.call(null,map__31447__$1,new cljs.core.Keyword(null,"async","async",1050769601));
var and__16346__auto__ = cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env);
if(cljs.core.truth_(and__16346__auto__)){
var and__16346__auto____$1 = ((function (){var or__16358__auto__ = fail;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return (0);
}
})() === (0));
if(and__16346__auto____$1){
var and__16346__auto____$2 = ((function (){var or__16358__auto__ = error;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return (0);
}
})() === (0));
if(and__16346__auto____$2){
var or__16358__auto__ = (async == null);
if(or__16358__auto__){
return or__16358__auto__;
} else {
return cemerick$cljs$test$successful_QMARK_.call(null,async);
}
} else {
return and__16346__auto____$2;
}
} else {
return and__16346__auto____$1;
}
} else {
return and__16346__auto__;
}
});
goog.exportSymbol('cemerick.cljs.test.successful_QMARK_', cemerick.cljs.test.successful_QMARK_);
cemerick.cljs.test.set_print_fn_BANG_ = (function cemerick$cljs$test$set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('cemerick.cljs.test.set_print_fn_BANG_', cemerick.cljs.test.set_print_fn_BANG_);

//# sourceMappingURL=test.js.map?rel=1446755793863