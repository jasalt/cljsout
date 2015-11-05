// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36229 = cljs.core._EQ_;
var expr__36230 = (function (){var or__16358__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36229.call(null,"true",expr__36230))){
return true;
} else {
if(cljs.core.truth_(pred__36229.call(null,"false",expr__36230))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36230)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36232__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__36232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36233__i = 0, G__36233__a = new Array(arguments.length -  0);
while (G__36233__i < G__36233__a.length) {G__36233__a[G__36233__i] = arguments[G__36233__i + 0]; ++G__36233__i;}
  args = new cljs.core.IndexedSeq(G__36233__a,0);
} 
return G__36232__delegate.call(this,args);};
G__36232.cljs$lang$maxFixedArity = 0;
G__36232.cljs$lang$applyTo = (function (arglist__36234){
var args = cljs.core.seq(arglist__36234);
return G__36232__delegate(args);
});
G__36232.cljs$core$IFn$_invoke$arity$variadic = G__36232__delegate;
return G__36232;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36235){
var map__36238 = p__36235;
var map__36238__$1 = ((((!((map__36238 == null)))?((((map__36238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36238):map__36238);
var message = cljs.core.get.call(null,map__36238__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36238__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16358__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16346__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16346__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16346__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19561__auto___36400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___36400,ch){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___36400,ch){
return (function (state_36369){
var state_val_36370 = (state_36369[(1)]);
if((state_val_36370 === (7))){
var inst_36365 = (state_36369[(2)]);
var state_36369__$1 = state_36369;
var statearr_36371_36401 = state_36369__$1;
(statearr_36371_36401[(2)] = inst_36365);

(statearr_36371_36401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (1))){
var state_36369__$1 = state_36369;
var statearr_36372_36402 = state_36369__$1;
(statearr_36372_36402[(2)] = null);

(statearr_36372_36402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (4))){
var inst_36322 = (state_36369[(7)]);
var inst_36322__$1 = (state_36369[(2)]);
var state_36369__$1 = (function (){var statearr_36373 = state_36369;
(statearr_36373[(7)] = inst_36322__$1);

return statearr_36373;
})();
if(cljs.core.truth_(inst_36322__$1)){
var statearr_36374_36403 = state_36369__$1;
(statearr_36374_36403[(1)] = (5));

} else {
var statearr_36375_36404 = state_36369__$1;
(statearr_36375_36404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (15))){
var inst_36329 = (state_36369[(8)]);
var inst_36344 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36329);
var inst_36345 = cljs.core.first.call(null,inst_36344);
var inst_36346 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36345);
var inst_36347 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36346)].join('');
var inst_36348 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36347);
var state_36369__$1 = state_36369;
var statearr_36376_36405 = state_36369__$1;
(statearr_36376_36405[(2)] = inst_36348);

(statearr_36376_36405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (13))){
var inst_36353 = (state_36369[(2)]);
var state_36369__$1 = state_36369;
var statearr_36377_36406 = state_36369__$1;
(statearr_36377_36406[(2)] = inst_36353);

(statearr_36377_36406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (6))){
var state_36369__$1 = state_36369;
var statearr_36378_36407 = state_36369__$1;
(statearr_36378_36407[(2)] = null);

(statearr_36378_36407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (17))){
var inst_36351 = (state_36369[(2)]);
var state_36369__$1 = state_36369;
var statearr_36379_36408 = state_36369__$1;
(statearr_36379_36408[(2)] = inst_36351);

(statearr_36379_36408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (3))){
var inst_36367 = (state_36369[(2)]);
var state_36369__$1 = state_36369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36369__$1,inst_36367);
} else {
if((state_val_36370 === (12))){
var inst_36328 = (state_36369[(9)]);
var inst_36342 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36328,opts);
var state_36369__$1 = state_36369;
if(cljs.core.truth_(inst_36342)){
var statearr_36380_36409 = state_36369__$1;
(statearr_36380_36409[(1)] = (15));

} else {
var statearr_36381_36410 = state_36369__$1;
(statearr_36381_36410[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (2))){
var state_36369__$1 = state_36369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36369__$1,(4),ch);
} else {
if((state_val_36370 === (11))){
var inst_36329 = (state_36369[(8)]);
var inst_36334 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36335 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36329);
var inst_36336 = cljs.core.async.timeout.call(null,(1000));
var inst_36337 = [inst_36335,inst_36336];
var inst_36338 = (new cljs.core.PersistentVector(null,2,(5),inst_36334,inst_36337,null));
var state_36369__$1 = state_36369;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36369__$1,(14),inst_36338);
} else {
if((state_val_36370 === (9))){
var inst_36329 = (state_36369[(8)]);
var inst_36355 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36356 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36329);
var inst_36357 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36356);
var inst_36358 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36357)].join('');
var inst_36359 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36358);
var state_36369__$1 = (function (){var statearr_36382 = state_36369;
(statearr_36382[(10)] = inst_36355);

return statearr_36382;
})();
var statearr_36383_36411 = state_36369__$1;
(statearr_36383_36411[(2)] = inst_36359);

(statearr_36383_36411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (5))){
var inst_36322 = (state_36369[(7)]);
var inst_36324 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36325 = (new cljs.core.PersistentArrayMap(null,2,inst_36324,null));
var inst_36326 = (new cljs.core.PersistentHashSet(null,inst_36325,null));
var inst_36327 = figwheel.client.focus_msgs.call(null,inst_36326,inst_36322);
var inst_36328 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36327);
var inst_36329 = cljs.core.first.call(null,inst_36327);
var inst_36330 = figwheel.client.autoload_QMARK_.call(null);
var state_36369__$1 = (function (){var statearr_36384 = state_36369;
(statearr_36384[(9)] = inst_36328);

(statearr_36384[(8)] = inst_36329);

return statearr_36384;
})();
if(cljs.core.truth_(inst_36330)){
var statearr_36385_36412 = state_36369__$1;
(statearr_36385_36412[(1)] = (8));

} else {
var statearr_36386_36413 = state_36369__$1;
(statearr_36386_36413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (14))){
var inst_36340 = (state_36369[(2)]);
var state_36369__$1 = state_36369;
var statearr_36387_36414 = state_36369__$1;
(statearr_36387_36414[(2)] = inst_36340);

(statearr_36387_36414[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (16))){
var state_36369__$1 = state_36369;
var statearr_36388_36415 = state_36369__$1;
(statearr_36388_36415[(2)] = null);

(statearr_36388_36415[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (10))){
var inst_36361 = (state_36369[(2)]);
var state_36369__$1 = (function (){var statearr_36389 = state_36369;
(statearr_36389[(11)] = inst_36361);

return statearr_36389;
})();
var statearr_36390_36416 = state_36369__$1;
(statearr_36390_36416[(2)] = null);

(statearr_36390_36416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (8))){
var inst_36328 = (state_36369[(9)]);
var inst_36332 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36328,opts);
var state_36369__$1 = state_36369;
if(cljs.core.truth_(inst_36332)){
var statearr_36391_36417 = state_36369__$1;
(statearr_36391_36417[(1)] = (11));

} else {
var statearr_36392_36418 = state_36369__$1;
(statearr_36392_36418[(1)] = (12));

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
});})(c__19561__auto___36400,ch))
;
return ((function (switch__19496__auto__,c__19561__auto___36400,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19497__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19497__auto____0 = (function (){
var statearr_36396 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36396[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19497__auto__);

(statearr_36396[(1)] = (1));

return statearr_36396;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19497__auto____1 = (function (state_36369){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_36369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e36397){if((e36397 instanceof Object)){
var ex__19500__auto__ = e36397;
var statearr_36398_36419 = state_36369;
(statearr_36398_36419[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36420 = state_36369;
state_36369 = G__36420;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19497__auto__ = function(state_36369){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19497__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19497__auto____1.call(this,state_36369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19497__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19497__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___36400,ch))
})();
var state__19563__auto__ = (function (){var statearr_36399 = f__19562__auto__.call(null);
(statearr_36399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___36400);

return statearr_36399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___36400,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36421_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36421_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36428 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36428){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_36426 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_36427 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_36426,_STAR_print_newline_STAR_36427,base_path_36428){
return (function() { 
var G__36429__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__36429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36430__i = 0, G__36430__a = new Array(arguments.length -  0);
while (G__36430__i < G__36430__a.length) {G__36430__a[G__36430__i] = arguments[G__36430__i + 0]; ++G__36430__i;}
  args = new cljs.core.IndexedSeq(G__36430__a,0);
} 
return G__36429__delegate.call(this,args);};
G__36429.cljs$lang$maxFixedArity = 0;
G__36429.cljs$lang$applyTo = (function (arglist__36431){
var args = cljs.core.seq(arglist__36431);
return G__36429__delegate(args);
});
G__36429.cljs$core$IFn$_invoke$arity$variadic = G__36429__delegate;
return G__36429;
})()
;})(_STAR_print_fn_STAR_36426,_STAR_print_newline_STAR_36427,base_path_36428))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36427;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36426;
}}catch (e36425){if((e36425 instanceof Error)){
var e = e36425;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36428], null));
} else {
var e = e36425;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36428))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36432){
var map__36439 = p__36432;
var map__36439__$1 = ((((!((map__36439 == null)))?((((map__36439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36439):map__36439);
var opts = map__36439__$1;
var build_id = cljs.core.get.call(null,map__36439__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36439,map__36439__$1,opts,build_id){
return (function (p__36441){
var vec__36442 = p__36441;
var map__36443 = cljs.core.nth.call(null,vec__36442,(0),null);
var map__36443__$1 = ((((!((map__36443 == null)))?((((map__36443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36443):map__36443);
var msg = map__36443__$1;
var msg_name = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36442,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36442,map__36443,map__36443__$1,msg,msg_name,_,map__36439,map__36439__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36442,map__36443,map__36443__$1,msg,msg_name,_,map__36439,map__36439__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36439,map__36439__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36449){
var vec__36450 = p__36449;
var map__36451 = cljs.core.nth.call(null,vec__36450,(0),null);
var map__36451__$1 = ((((!((map__36451 == null)))?((((map__36451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36451):map__36451);
var msg = map__36451__$1;
var msg_name = cljs.core.get.call(null,map__36451__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36450,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36453){
var map__36463 = p__36453;
var map__36463__$1 = ((((!((map__36463 == null)))?((((map__36463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36463):map__36463);
var on_compile_warning = cljs.core.get.call(null,map__36463__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36463__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36463,map__36463__$1,on_compile_warning,on_compile_fail){
return (function (p__36465){
var vec__36466 = p__36465;
var map__36467 = cljs.core.nth.call(null,vec__36466,(0),null);
var map__36467__$1 = ((((!((map__36467 == null)))?((((map__36467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36467):map__36467);
var msg = map__36467__$1;
var msg_name = cljs.core.get.call(null,map__36467__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36466,(1));
var pred__36469 = cljs.core._EQ_;
var expr__36470 = msg_name;
if(cljs.core.truth_(pred__36469.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36470))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36469.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36470))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36463,map__36463__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__,msg_hist,msg_names,msg){
return (function (state_36686){
var state_val_36687 = (state_36686[(1)]);
if((state_val_36687 === (7))){
var inst_36610 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
if(cljs.core.truth_(inst_36610)){
var statearr_36688_36734 = state_36686__$1;
(statearr_36688_36734[(1)] = (8));

} else {
var statearr_36689_36735 = state_36686__$1;
(statearr_36689_36735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (20))){
var inst_36680 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36690_36736 = state_36686__$1;
(statearr_36690_36736[(2)] = inst_36680);

(statearr_36690_36736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (27))){
var inst_36676 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36691_36737 = state_36686__$1;
(statearr_36691_36737[(2)] = inst_36676);

(statearr_36691_36737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (1))){
var inst_36603 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36686__$1 = state_36686;
if(cljs.core.truth_(inst_36603)){
var statearr_36692_36738 = state_36686__$1;
(statearr_36692_36738[(1)] = (2));

} else {
var statearr_36693_36739 = state_36686__$1;
(statearr_36693_36739[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (24))){
var inst_36678 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36694_36740 = state_36686__$1;
(statearr_36694_36740[(2)] = inst_36678);

(statearr_36694_36740[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (4))){
var inst_36684 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36686__$1,inst_36684);
} else {
if((state_val_36687 === (15))){
var inst_36682 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36695_36741 = state_36686__$1;
(statearr_36695_36741[(2)] = inst_36682);

(statearr_36695_36741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (21))){
var inst_36641 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36696_36742 = state_36686__$1;
(statearr_36696_36742[(2)] = inst_36641);

(statearr_36696_36742[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (31))){
var inst_36665 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36686__$1 = state_36686;
if(cljs.core.truth_(inst_36665)){
var statearr_36697_36743 = state_36686__$1;
(statearr_36697_36743[(1)] = (34));

} else {
var statearr_36698_36744 = state_36686__$1;
(statearr_36698_36744[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (32))){
var inst_36674 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36699_36745 = state_36686__$1;
(statearr_36699_36745[(2)] = inst_36674);

(statearr_36699_36745[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (33))){
var inst_36663 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36700_36746 = state_36686__$1;
(statearr_36700_36746[(2)] = inst_36663);

(statearr_36700_36746[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (13))){
var inst_36624 = figwheel.client.heads_up.clear.call(null);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36686__$1,(16),inst_36624);
} else {
if((state_val_36687 === (22))){
var inst_36645 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36646 = figwheel.client.heads_up.append_message.call(null,inst_36645);
var state_36686__$1 = state_36686;
var statearr_36701_36747 = state_36686__$1;
(statearr_36701_36747[(2)] = inst_36646);

(statearr_36701_36747[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (36))){
var inst_36672 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36702_36748 = state_36686__$1;
(statearr_36702_36748[(2)] = inst_36672);

(statearr_36702_36748[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (29))){
var inst_36656 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36703_36749 = state_36686__$1;
(statearr_36703_36749[(2)] = inst_36656);

(statearr_36703_36749[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (6))){
var inst_36605 = (state_36686[(7)]);
var state_36686__$1 = state_36686;
var statearr_36704_36750 = state_36686__$1;
(statearr_36704_36750[(2)] = inst_36605);

(statearr_36704_36750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (28))){
var inst_36652 = (state_36686[(2)]);
var inst_36653 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36654 = figwheel.client.heads_up.display_warning.call(null,inst_36653);
var state_36686__$1 = (function (){var statearr_36705 = state_36686;
(statearr_36705[(8)] = inst_36652);

return statearr_36705;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36686__$1,(29),inst_36654);
} else {
if((state_val_36687 === (25))){
var inst_36650 = figwheel.client.heads_up.clear.call(null);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36686__$1,(28),inst_36650);
} else {
if((state_val_36687 === (34))){
var inst_36667 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36686__$1,(37),inst_36667);
} else {
if((state_val_36687 === (17))){
var inst_36632 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36706_36751 = state_36686__$1;
(statearr_36706_36751[(2)] = inst_36632);

(statearr_36706_36751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (3))){
var inst_36622 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36686__$1 = state_36686;
if(cljs.core.truth_(inst_36622)){
var statearr_36707_36752 = state_36686__$1;
(statearr_36707_36752[(1)] = (13));

} else {
var statearr_36708_36753 = state_36686__$1;
(statearr_36708_36753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (12))){
var inst_36618 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36709_36754 = state_36686__$1;
(statearr_36709_36754[(2)] = inst_36618);

(statearr_36709_36754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (2))){
var inst_36605 = (state_36686[(7)]);
var inst_36605__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36686__$1 = (function (){var statearr_36710 = state_36686;
(statearr_36710[(7)] = inst_36605__$1);

return statearr_36710;
})();
if(cljs.core.truth_(inst_36605__$1)){
var statearr_36711_36755 = state_36686__$1;
(statearr_36711_36755[(1)] = (5));

} else {
var statearr_36712_36756 = state_36686__$1;
(statearr_36712_36756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (23))){
var inst_36648 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36686__$1 = state_36686;
if(cljs.core.truth_(inst_36648)){
var statearr_36713_36757 = state_36686__$1;
(statearr_36713_36757[(1)] = (25));

} else {
var statearr_36714_36758 = state_36686__$1;
(statearr_36714_36758[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (35))){
var state_36686__$1 = state_36686;
var statearr_36715_36759 = state_36686__$1;
(statearr_36715_36759[(2)] = null);

(statearr_36715_36759[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (19))){
var inst_36643 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36686__$1 = state_36686;
if(cljs.core.truth_(inst_36643)){
var statearr_36716_36760 = state_36686__$1;
(statearr_36716_36760[(1)] = (22));

} else {
var statearr_36717_36761 = state_36686__$1;
(statearr_36717_36761[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (11))){
var inst_36614 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36718_36762 = state_36686__$1;
(statearr_36718_36762[(2)] = inst_36614);

(statearr_36718_36762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (9))){
var inst_36616 = figwheel.client.heads_up.clear.call(null);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36686__$1,(12),inst_36616);
} else {
if((state_val_36687 === (5))){
var inst_36607 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36686__$1 = state_36686;
var statearr_36719_36763 = state_36686__$1;
(statearr_36719_36763[(2)] = inst_36607);

(statearr_36719_36763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (14))){
var inst_36634 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36686__$1 = state_36686;
if(cljs.core.truth_(inst_36634)){
var statearr_36720_36764 = state_36686__$1;
(statearr_36720_36764[(1)] = (18));

} else {
var statearr_36721_36765 = state_36686__$1;
(statearr_36721_36765[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (26))){
var inst_36658 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36686__$1 = state_36686;
if(cljs.core.truth_(inst_36658)){
var statearr_36722_36766 = state_36686__$1;
(statearr_36722_36766[(1)] = (30));

} else {
var statearr_36723_36767 = state_36686__$1;
(statearr_36723_36767[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (16))){
var inst_36626 = (state_36686[(2)]);
var inst_36627 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36628 = figwheel.client.format_messages.call(null,inst_36627);
var inst_36629 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36630 = figwheel.client.heads_up.display_error.call(null,inst_36628,inst_36629);
var state_36686__$1 = (function (){var statearr_36724 = state_36686;
(statearr_36724[(9)] = inst_36626);

return statearr_36724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36686__$1,(17),inst_36630);
} else {
if((state_val_36687 === (30))){
var inst_36660 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36661 = figwheel.client.heads_up.display_warning.call(null,inst_36660);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36686__$1,(33),inst_36661);
} else {
if((state_val_36687 === (10))){
var inst_36620 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36725_36768 = state_36686__$1;
(statearr_36725_36768[(2)] = inst_36620);

(statearr_36725_36768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (18))){
var inst_36636 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36637 = figwheel.client.format_messages.call(null,inst_36636);
var inst_36638 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36639 = figwheel.client.heads_up.display_error.call(null,inst_36637,inst_36638);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36686__$1,(21),inst_36639);
} else {
if((state_val_36687 === (37))){
var inst_36669 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36726_36769 = state_36686__$1;
(statearr_36726_36769[(2)] = inst_36669);

(statearr_36726_36769[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (8))){
var inst_36612 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36686__$1,(11),inst_36612);
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
});})(c__19561__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19496__auto__,c__19561__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19497__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19497__auto____0 = (function (){
var statearr_36730 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36730[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19497__auto__);

(statearr_36730[(1)] = (1));

return statearr_36730;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19497__auto____1 = (function (state_36686){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_36686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e36731){if((e36731 instanceof Object)){
var ex__19500__auto__ = e36731;
var statearr_36732_36770 = state_36686;
(statearr_36732_36770[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36771 = state_36686;
state_36686 = G__36771;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19497__auto__ = function(state_36686){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19497__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19497__auto____1.call(this,state_36686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19497__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19497__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__,msg_hist,msg_names,msg))
})();
var state__19563__auto__ = (function (){var statearr_36733 = f__19562__auto__.call(null);
(statearr_36733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_36733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__,msg_hist,msg_names,msg))
);

return c__19561__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19561__auto___36834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___36834,ch){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___36834,ch){
return (function (state_36817){
var state_val_36818 = (state_36817[(1)]);
if((state_val_36818 === (1))){
var state_36817__$1 = state_36817;
var statearr_36819_36835 = state_36817__$1;
(statearr_36819_36835[(2)] = null);

(statearr_36819_36835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (2))){
var state_36817__$1 = state_36817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36817__$1,(4),ch);
} else {
if((state_val_36818 === (3))){
var inst_36815 = (state_36817[(2)]);
var state_36817__$1 = state_36817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36817__$1,inst_36815);
} else {
if((state_val_36818 === (4))){
var inst_36805 = (state_36817[(7)]);
var inst_36805__$1 = (state_36817[(2)]);
var state_36817__$1 = (function (){var statearr_36820 = state_36817;
(statearr_36820[(7)] = inst_36805__$1);

return statearr_36820;
})();
if(cljs.core.truth_(inst_36805__$1)){
var statearr_36821_36836 = state_36817__$1;
(statearr_36821_36836[(1)] = (5));

} else {
var statearr_36822_36837 = state_36817__$1;
(statearr_36822_36837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (5))){
var inst_36805 = (state_36817[(7)]);
var inst_36807 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36805);
var state_36817__$1 = state_36817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36817__$1,(8),inst_36807);
} else {
if((state_val_36818 === (6))){
var state_36817__$1 = state_36817;
var statearr_36823_36838 = state_36817__$1;
(statearr_36823_36838[(2)] = null);

(statearr_36823_36838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (7))){
var inst_36813 = (state_36817[(2)]);
var state_36817__$1 = state_36817;
var statearr_36824_36839 = state_36817__$1;
(statearr_36824_36839[(2)] = inst_36813);

(statearr_36824_36839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (8))){
var inst_36809 = (state_36817[(2)]);
var state_36817__$1 = (function (){var statearr_36825 = state_36817;
(statearr_36825[(8)] = inst_36809);

return statearr_36825;
})();
var statearr_36826_36840 = state_36817__$1;
(statearr_36826_36840[(2)] = null);

(statearr_36826_36840[(1)] = (2));


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
});})(c__19561__auto___36834,ch))
;
return ((function (switch__19496__auto__,c__19561__auto___36834,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19497__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19497__auto____0 = (function (){
var statearr_36830 = [null,null,null,null,null,null,null,null,null];
(statearr_36830[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19497__auto__);

(statearr_36830[(1)] = (1));

return statearr_36830;
});
var figwheel$client$heads_up_plugin_$_state_machine__19497__auto____1 = (function (state_36817){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_36817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e36831){if((e36831 instanceof Object)){
var ex__19500__auto__ = e36831;
var statearr_36832_36841 = state_36817;
(statearr_36832_36841[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36842 = state_36817;
state_36817 = G__36842;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19497__auto__ = function(state_36817){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19497__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19497__auto____1.call(this,state_36817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19497__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19497__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___36834,ch))
})();
var state__19563__auto__ = (function (){var statearr_36833 = f__19562__auto__.call(null);
(statearr_36833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___36834);

return statearr_36833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___36834,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__){
return (function (state_36863){
var state_val_36864 = (state_36863[(1)]);
if((state_val_36864 === (1))){
var inst_36858 = cljs.core.async.timeout.call(null,(3000));
var state_36863__$1 = state_36863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36863__$1,(2),inst_36858);
} else {
if((state_val_36864 === (2))){
var inst_36860 = (state_36863[(2)]);
var inst_36861 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36863__$1 = (function (){var statearr_36865 = state_36863;
(statearr_36865[(7)] = inst_36860);

return statearr_36865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36863__$1,inst_36861);
} else {
return null;
}
}
});})(c__19561__auto__))
;
return ((function (switch__19496__auto__,c__19561__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19497__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19497__auto____0 = (function (){
var statearr_36869 = [null,null,null,null,null,null,null,null];
(statearr_36869[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19497__auto__);

(statearr_36869[(1)] = (1));

return statearr_36869;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19497__auto____1 = (function (state_36863){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_36863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e36870){if((e36870 instanceof Object)){
var ex__19500__auto__ = e36870;
var statearr_36871_36873 = state_36863;
(statearr_36871_36873[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36874 = state_36863;
state_36863 = G__36874;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19497__auto__ = function(state_36863){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19497__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19497__auto____1.call(this,state_36863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19497__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19497__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__))
})();
var state__19563__auto__ = (function (){var statearr_36872 = f__19562__auto__.call(null);
(statearr_36872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_36872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__))
);

return c__19561__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36875){
var map__36882 = p__36875;
var map__36882__$1 = ((((!((map__36882 == null)))?((((map__36882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36882):map__36882);
var ed = map__36882__$1;
var formatted_exception = cljs.core.get.call(null,map__36882__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36882__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36882__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36884_36888 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36885_36889 = null;
var count__36886_36890 = (0);
var i__36887_36891 = (0);
while(true){
if((i__36887_36891 < count__36886_36890)){
var msg_36892 = cljs.core._nth.call(null,chunk__36885_36889,i__36887_36891);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36892);

var G__36893 = seq__36884_36888;
var G__36894 = chunk__36885_36889;
var G__36895 = count__36886_36890;
var G__36896 = (i__36887_36891 + (1));
seq__36884_36888 = G__36893;
chunk__36885_36889 = G__36894;
count__36886_36890 = G__36895;
i__36887_36891 = G__36896;
continue;
} else {
var temp__4425__auto___36897 = cljs.core.seq.call(null,seq__36884_36888);
if(temp__4425__auto___36897){
var seq__36884_36898__$1 = temp__4425__auto___36897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36884_36898__$1)){
var c__17161__auto___36899 = cljs.core.chunk_first.call(null,seq__36884_36898__$1);
var G__36900 = cljs.core.chunk_rest.call(null,seq__36884_36898__$1);
var G__36901 = c__17161__auto___36899;
var G__36902 = cljs.core.count.call(null,c__17161__auto___36899);
var G__36903 = (0);
seq__36884_36888 = G__36900;
chunk__36885_36889 = G__36901;
count__36886_36890 = G__36902;
i__36887_36891 = G__36903;
continue;
} else {
var msg_36904 = cljs.core.first.call(null,seq__36884_36898__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36904);

var G__36905 = cljs.core.next.call(null,seq__36884_36898__$1);
var G__36906 = null;
var G__36907 = (0);
var G__36908 = (0);
seq__36884_36888 = G__36905;
chunk__36885_36889 = G__36906;
count__36886_36890 = G__36907;
i__36887_36891 = G__36908;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36909){
var map__36912 = p__36909;
var map__36912__$1 = ((((!((map__36912 == null)))?((((map__36912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36912):map__36912);
var w = map__36912__$1;
var message = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16346__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16346__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16346__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36920 = cljs.core.seq.call(null,plugins);
var chunk__36921 = null;
var count__36922 = (0);
var i__36923 = (0);
while(true){
if((i__36923 < count__36922)){
var vec__36924 = cljs.core._nth.call(null,chunk__36921,i__36923);
var k = cljs.core.nth.call(null,vec__36924,(0),null);
var plugin = cljs.core.nth.call(null,vec__36924,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36926 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36920,chunk__36921,count__36922,i__36923,pl_36926,vec__36924,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36926.call(null,msg_hist);
});})(seq__36920,chunk__36921,count__36922,i__36923,pl_36926,vec__36924,k,plugin))
);
} else {
}

var G__36927 = seq__36920;
var G__36928 = chunk__36921;
var G__36929 = count__36922;
var G__36930 = (i__36923 + (1));
seq__36920 = G__36927;
chunk__36921 = G__36928;
count__36922 = G__36929;
i__36923 = G__36930;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36920);
if(temp__4425__auto__){
var seq__36920__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36920__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__36920__$1);
var G__36931 = cljs.core.chunk_rest.call(null,seq__36920__$1);
var G__36932 = c__17161__auto__;
var G__36933 = cljs.core.count.call(null,c__17161__auto__);
var G__36934 = (0);
seq__36920 = G__36931;
chunk__36921 = G__36932;
count__36922 = G__36933;
i__36923 = G__36934;
continue;
} else {
var vec__36925 = cljs.core.first.call(null,seq__36920__$1);
var k = cljs.core.nth.call(null,vec__36925,(0),null);
var plugin = cljs.core.nth.call(null,vec__36925,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36935 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36920,chunk__36921,count__36922,i__36923,pl_36935,vec__36925,k,plugin,seq__36920__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36935.call(null,msg_hist);
});})(seq__36920,chunk__36921,count__36922,i__36923,pl_36935,vec__36925,k,plugin,seq__36920__$1,temp__4425__auto__))
);
} else {
}

var G__36936 = cljs.core.next.call(null,seq__36920__$1);
var G__36937 = null;
var G__36938 = (0);
var G__36939 = (0);
seq__36920 = G__36936;
chunk__36921 = G__36937;
count__36922 = G__36938;
i__36923 = G__36939;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36940 = [];
var len__17416__auto___36943 = arguments.length;
var i__17417__auto___36944 = (0);
while(true){
if((i__17417__auto___36944 < len__17416__auto___36943)){
args36940.push((arguments[i__17417__auto___36944]));

var G__36945 = (i__17417__auto___36944 + (1));
i__17417__auto___36944 = G__36945;
continue;
} else {
}
break;
}

var G__36942 = args36940.length;
switch (G__36942) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36940.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17423__auto__ = [];
var len__17416__auto___36951 = arguments.length;
var i__17417__auto___36952 = (0);
while(true){
if((i__17417__auto___36952 < len__17416__auto___36951)){
args__17423__auto__.push((arguments[i__17417__auto___36952]));

var G__36953 = (i__17417__auto___36952 + (1));
i__17417__auto___36952 = G__36953;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((0) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17424__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36948){
var map__36949 = p__36948;
var map__36949__$1 = ((((!((map__36949 == null)))?((((map__36949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36949):map__36949);
var opts = map__36949__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36947){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36947));
});

//# sourceMappingURL=client.js.map?rel=1446755806096