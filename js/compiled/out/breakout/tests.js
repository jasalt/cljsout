// Compiled by ClojureScript 1.7.145 {}
goog.provide('breakout.tests');
goog.require('cljs.core');
goog.require('cemerick.cljs.test');
goog.require('breakout.core');
goog.require('breakout.levels');
goog.require('breakout.utils');
breakout.tests.levels_get_level = (function breakout$tests$levels_get_level(){
return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),breakout.tests.levels_get_level);
});

breakout.tests.levels_get_level = cljs.core.with_meta.call(null,breakout.tests.levels_get_level,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/js/dev/cljsout/src/breakout/tests.cljs",new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"end-line","end-line",1837326455),12,new cljs.core.Keyword(null,"end-column","end-column",1425389514),26], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("breakout.tests","levels-get-level","breakout.tests/levels-get-level",-1676680887,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/js/dev/cljsout/src/breakout/tests.cljs",new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"end-line","end-line",1837326455),12,new cljs.core.Keyword(null,"end-column","end-column",1425389514),26], null)),new cljs.core.Keyword(null,"test","test",577538877),(function breakout$tests$levels_get_level_test(test_ctx__28751__auto__){
var _test_ctx = test_ctx__28751__auto__;
var async_QMARK___28666__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));
var _STAR_test_ctx_STAR_28948 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___28666__auto__)?null:_test_ctx);

try{try{var _test_ctx_28959__$1 = _test_ctx;
var async_QMARK___28666__auto___28960__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_28959__$1)));
var _STAR_test_ctx_STAR_28950_28961 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___28666__auto___28960__$1)?null:_test_ctx_28959__$1);

try{try{try{var values__28686__auto___28962 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,true,true,true,true,true,true], null)], null)),breakout.levels.parse_level_str.call(null,cljs.core.get.call(null,breakout.levels.levels,(0))));
var result__28687__auto___28963 = cljs.core.apply.call(null,cljs.core._EQ_,values__28686__auto___28962);
if((result__28687__auto___28963 instanceof cemerick.cljs.test.TestContext)){
throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else {
}

if(cljs.core.truth_(result__28687__auto___28963)){
cemerick.cljs.test.do_report.call(null,_test_ctx_28959__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("levels","parse-level-str","levels/parse-level-str",-699018889,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("levels","levels","levels/levels",-282094037,null),(0))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,true,true,true,true,true,true], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__28686__auto___28962),new cljs.core.Keyword(null,"message","message",-406056002),"First level parses correctly"], null));
} else {
cemerick.cljs.test.do_report.call(null,_test_ctx_28959__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("levels","parse-level-str","levels/parse-level-str",-699018889,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("levels","levels","levels/levels",-282094037,null),(0))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,true,true,true,true,true,true], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__28686__auto___28962)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"First level parses correctly"], null));
}

}catch (e28952){if((e28952 instanceof Error)){
var t__28723__auto___28964 = e28952;
cemerick.cljs.test.do_report.call(null,_test_ctx_28959__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("levels","parse-level-str","levels/parse-level-str",-699018889,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("levels","levels","levels/levels",-282094037,null),(0))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,true,true,true,true,true,true], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__28723__auto___28964,new cljs.core.Keyword(null,"message","message",-406056002),"First level parses correctly"], null));
} else {
throw e28952;

}
}}catch (e28951){if((e28951 instanceof Error)){
var e__28667__auto___28965 = e28951;
if(cljs.core.truth_(async_QMARK___28666__auto___28960__$1)){
cemerick.cljs.test.done_STAR_.call(null,_test_ctx_28959__$1,e__28667__auto___28965);
} else {
throw e__28667__auto___28965;
}
} else {
throw e28951;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_28950_28961;
}
var _test_ctx_28966__$1 = _test_ctx;
var async_QMARK___28666__auto___28967__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_28966__$1)));
var _STAR_test_ctx_STAR_28953_28968 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___28666__auto___28967__$1)?null:_test_ctx_28966__$1);

try{try{try{var values__28686__auto___28969 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true,true,true,true], null)], null)),breakout.levels.parse_level_str.call(null,cljs.core.get.call(null,breakout.levels.levels,(1))));
var result__28687__auto___28970 = cljs.core.apply.call(null,cljs.core._EQ_,values__28686__auto___28969);
if((result__28687__auto___28970 instanceof cemerick.cljs.test.TestContext)){
throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else {
}

if(cljs.core.truth_(result__28687__auto___28970)){
cemerick.cljs.test.do_report.call(null,_test_ctx_28966__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("levels","parse-level-str","levels/parse-level-str",-699018889,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("levels","levels","levels/levels",-282094037,null),(1))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true,true,true,true], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__28686__auto___28969),new cljs.core.Keyword(null,"message","message",-406056002),"Second level parses correctly"], null));
} else {
cemerick.cljs.test.do_report.call(null,_test_ctx_28966__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("levels","parse-level-str","levels/parse-level-str",-699018889,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("levels","levels","levels/levels",-282094037,null),(1))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true,true,true,true], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__28686__auto___28969)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Second level parses correctly"], null));
}

}catch (e28955){if((e28955 instanceof Error)){
var t__28723__auto___28971 = e28955;
cemerick.cljs.test.do_report.call(null,_test_ctx_28966__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("levels","parse-level-str","levels/parse-level-str",-699018889,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("levels","levels","levels/levels",-282094037,null),(1))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true,true,true,true], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__28723__auto___28971,new cljs.core.Keyword(null,"message","message",-406056002),"Second level parses correctly"], null));
} else {
throw e28955;

}
}}catch (e28954){if((e28954 instanceof Error)){
var e__28667__auto___28972 = e28954;
if(cljs.core.truth_(async_QMARK___28666__auto___28967__$1)){
cemerick.cljs.test.done_STAR_.call(null,_test_ctx_28966__$1,e__28667__auto___28972);
} else {
throw e__28667__auto___28972;
}
} else {
throw e28954;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_28953_28968;
}
var _test_ctx__$1 = _test_ctx;
var async_QMARK___28666__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));
var _STAR_test_ctx_STAR_28956 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___28666__auto____$1)?null:_test_ctx__$1);

try{try{try{var values__28686__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,null,null,true,true,true], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true,true,true,true], null)], null)),breakout.levels.parse_level_str.call(null,cljs.core.get.call(null,breakout.levels.levels,(2))));
var result__28687__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__28686__auto__);
if((result__28687__auto__ instanceof cemerick.cljs.test.TestContext)){
throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else {
}

if(cljs.core.truth_(result__28687__auto__)){
cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("levels","parse-level-str","levels/parse-level-str",-699018889,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("levels","levels","levels/levels",-282094037,null),(2))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,null,null,true,true,true], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true,true,true,true], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__28686__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"Third level parses correctly"], null));
} else {
cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("levels","parse-level-str","levels/parse-level-str",-699018889,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("levels","levels","levels/levels",-282094037,null),(2))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,null,null,true,true,true], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true,true,true,true], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__28686__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Third level parses correctly"], null));
}

return result__28687__auto__;
}catch (e28958){if((e28958 instanceof Error)){
var t__28723__auto__ = e28958;
return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("levels","parse-level-str","levels/parse-level-str",-699018889,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("levels","levels","levels/levels",-282094037,null),(2))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,true,true,true,true,true,true], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true,true,null,null,true,true,true], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true,true,true,true], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__28723__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"Third level parses correctly"], null));
} else {
throw e28958;

}
}}catch (e28957){if((e28957 instanceof Error)){
var e__28667__auto__ = e28957;
if(cljs.core.truth_(async_QMARK___28666__auto____$1)){
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__28667__auto__);
} else {
throw e__28667__auto__;
}
} else {
throw e28957;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_28956;
}}catch (e28949){if((e28949 instanceof Error)){
var e__28667__auto__ = e28949;
if(cljs.core.truth_(async_QMARK___28666__auto__)){
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__28667__auto__);
} else {
throw e__28667__auto__;
}
} else {
throw e28949;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_28948;
}})], null)));

cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"breakout.tests","breakout.tests",-169728078,null),new cljs.core.Symbol("breakout.tests","levels-get-level","breakout.tests/levels-get-level",-1676680887,null),breakout.tests.levels_get_level);

breakout.tests.scale_value = (function breakout$tests$scale_value(){
return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),breakout.tests.scale_value);
});

breakout.tests.scale_value = cljs.core.with_meta.call(null,breakout.tests.scale_value,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/js/dev/cljsout/src/breakout/tests.cljs",new cljs.core.Keyword(null,"line","line",212345235),43,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"end-line","end-line",1837326455),43,new cljs.core.Keyword(null,"end-column","end-column",1425389514),21], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("breakout.tests","scale-value","breakout.tests/scale-value",-257189500,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/js/dev/cljsout/src/breakout/tests.cljs",new cljs.core.Keyword(null,"line","line",212345235),43,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"end-line","end-line",1837326455),43,new cljs.core.Keyword(null,"end-column","end-column",1425389514),21], null)),new cljs.core.Keyword(null,"test","test",577538877),(function breakout$tests$scale_value_test(test_ctx__28751__auto__){
var _test_ctx = test_ctx__28751__auto__;
var async_QMARK___28666__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));
var _STAR_test_ctx_STAR_28984 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___28666__auto__)?null:_test_ctx);

try{try{var _test_ctx_28995__$1 = _test_ctx;
var async_QMARK___28666__auto___28996__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_28995__$1)));
var _STAR_test_ctx_STAR_28986_28997 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___28666__auto___28996__$1)?null:_test_ctx_28995__$1);

try{try{try{var values__28686__auto___28998 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,breakout.utils.scale_value.call(null,20.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.0,30.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(500)], null))),0.0);
var result__28687__auto___28999 = cljs.core.apply.call(null,cljs.core._EQ_,values__28686__auto___28998);
if((result__28687__auto___28999 instanceof cemerick.cljs.test.TestContext)){
throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else {
}

if(cljs.core.truth_(result__28687__auto___28999)){
cemerick.cljs.test.do_report.call(null,_test_ctx_28995__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0,cljs.core.list(new cljs.core.Symbol("utils","scale-value","utils/scale-value",-1162568107,null),20.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.0,30.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(500)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__28686__auto___28998),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cemerick.cljs.test.do_report.call(null,_test_ctx_28995__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0,cljs.core.list(new cljs.core.Symbol("utils","scale-value","utils/scale-value",-1162568107,null),20.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.0,30.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(500)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__28686__auto___28998)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e28988){if((e28988 instanceof Error)){
var t__28723__auto___29000 = e28988;
cemerick.cljs.test.do_report.call(null,_test_ctx_28995__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),0.0,cljs.core.list(new cljs.core.Symbol("utils","scale-value","utils/scale-value",-1162568107,null),20.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.0,30.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(500)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__28723__auto___29000,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
throw e28988;

}
}}catch (e28987){if((e28987 instanceof Error)){
var e__28667__auto___29001 = e28987;
if(cljs.core.truth_(async_QMARK___28666__auto___28996__$1)){
cemerick.cljs.test.done_STAR_.call(null,_test_ctx_28995__$1,e__28667__auto___29001);
} else {
throw e__28667__auto___29001;
}
} else {
throw e28987;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_28986_28997;
}
var _test_ctx_29002__$1 = _test_ctx;
var async_QMARK___28666__auto___29003__$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx_29002__$1)));
var _STAR_test_ctx_STAR_28989_29004 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___28666__auto___29003__$1)?null:_test_ctx_29002__$1);

try{try{try{var values__28686__auto___29005 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,breakout.utils.scale_value.call(null,30.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.0,30.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(500)], null))),500.0);
var result__28687__auto___29006 = cljs.core.apply.call(null,cljs.core._EQ_,values__28686__auto___29005);
if((result__28687__auto___29006 instanceof cemerick.cljs.test.TestContext)){
throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else {
}

if(cljs.core.truth_(result__28687__auto___29006)){
cemerick.cljs.test.do_report.call(null,_test_ctx_29002__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),500.0,cljs.core.list(new cljs.core.Symbol("utils","scale-value","utils/scale-value",-1162568107,null),30.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.0,30.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(500)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__28686__auto___29005),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cemerick.cljs.test.do_report.call(null,_test_ctx_29002__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),500.0,cljs.core.list(new cljs.core.Symbol("utils","scale-value","utils/scale-value",-1162568107,null),30.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.0,30.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(500)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__28686__auto___29005)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e28991){if((e28991 instanceof Error)){
var t__28723__auto___29007 = e28991;
cemerick.cljs.test.do_report.call(null,_test_ctx_29002__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),500.0,cljs.core.list(new cljs.core.Symbol("utils","scale-value","utils/scale-value",-1162568107,null),30.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.0,30.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(500)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__28723__auto___29007,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
throw e28991;

}
}}catch (e28990){if((e28990 instanceof Error)){
var e__28667__auto___29008 = e28990;
if(cljs.core.truth_(async_QMARK___28666__auto___29003__$1)){
cemerick.cljs.test.done_STAR_.call(null,_test_ctx_29002__$1,e__28667__auto___29008);
} else {
throw e__28667__auto___29008;
}
} else {
throw e28990;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_28989_29004;
}
var _test_ctx__$1 = _test_ctx;
var async_QMARK___28666__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));
var _STAR_test_ctx_STAR_28992 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___28666__auto____$1)?null:_test_ctx__$1);

try{try{try{var values__28686__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,breakout.utils.scale_value.call(null,10.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-20.0,20.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(200)], null))),175.0);
var result__28687__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__28686__auto__);
if((result__28687__auto__ instanceof cemerick.cljs.test.TestContext)){
throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else {
}

if(cljs.core.truth_(result__28687__auto__)){
cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),175.0,cljs.core.list(new cljs.core.Symbol("utils","scale-value","utils/scale-value",-1162568107,null),10.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-20.0,20.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(200)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__28686__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),175.0,cljs.core.list(new cljs.core.Symbol("utils","scale-value","utils/scale-value",-1162568107,null),10.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-20.0,20.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(200)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__28686__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__28687__auto__;
}catch (e28994){if((e28994 instanceof Error)){
var t__28723__auto__ = e28994;
return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),175.0,cljs.core.list(new cljs.core.Symbol("utils","scale-value","utils/scale-value",-1162568107,null),10.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-20.0,20.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(200)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__28723__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
throw e28994;

}
}}catch (e28993){if((e28993 instanceof Error)){
var e__28667__auto__ = e28993;
if(cljs.core.truth_(async_QMARK___28666__auto____$1)){
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__28667__auto__);
} else {
throw e__28667__auto__;
}
} else {
throw e28993;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_28992;
}}catch (e28985){if((e28985 instanceof Error)){
var e__28667__auto__ = e28985;
if(cljs.core.truth_(async_QMARK___28666__auto__)){
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__28667__auto__);
} else {
throw e__28667__auto__;
}
} else {
throw e28985;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_28984;
}})], null)));

cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"breakout.tests","breakout.tests",-169728078,null),new cljs.core.Symbol("breakout.tests","scale-value","breakout.tests/scale-value",-257189500,null),breakout.tests.scale_value);


//# sourceMappingURL=tests.js.map?rel=1446755790982