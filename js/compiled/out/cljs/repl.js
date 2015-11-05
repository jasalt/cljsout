// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32062_32076 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32063_32077 = null;
var count__32064_32078 = (0);
var i__32065_32079 = (0);
while(true){
if((i__32065_32079 < count__32064_32078)){
var f_32080 = cljs.core._nth.call(null,chunk__32063_32077,i__32065_32079);
cljs.core.println.call(null,"  ",f_32080);

var G__32081 = seq__32062_32076;
var G__32082 = chunk__32063_32077;
var G__32083 = count__32064_32078;
var G__32084 = (i__32065_32079 + (1));
seq__32062_32076 = G__32081;
chunk__32063_32077 = G__32082;
count__32064_32078 = G__32083;
i__32065_32079 = G__32084;
continue;
} else {
var temp__4425__auto___32085 = cljs.core.seq.call(null,seq__32062_32076);
if(temp__4425__auto___32085){
var seq__32062_32086__$1 = temp__4425__auto___32085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32062_32086__$1)){
var c__17161__auto___32087 = cljs.core.chunk_first.call(null,seq__32062_32086__$1);
var G__32088 = cljs.core.chunk_rest.call(null,seq__32062_32086__$1);
var G__32089 = c__17161__auto___32087;
var G__32090 = cljs.core.count.call(null,c__17161__auto___32087);
var G__32091 = (0);
seq__32062_32076 = G__32088;
chunk__32063_32077 = G__32089;
count__32064_32078 = G__32090;
i__32065_32079 = G__32091;
continue;
} else {
var f_32092 = cljs.core.first.call(null,seq__32062_32086__$1);
cljs.core.println.call(null,"  ",f_32092);

var G__32093 = cljs.core.next.call(null,seq__32062_32086__$1);
var G__32094 = null;
var G__32095 = (0);
var G__32096 = (0);
seq__32062_32076 = G__32093;
chunk__32063_32077 = G__32094;
count__32064_32078 = G__32095;
i__32065_32079 = G__32096;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32097 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16358__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32097);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32097)))?cljs.core.second.call(null,arglists_32097):arglists_32097));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32066 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32067 = null;
var count__32068 = (0);
var i__32069 = (0);
while(true){
if((i__32069 < count__32068)){
var vec__32070 = cljs.core._nth.call(null,chunk__32067,i__32069);
var name = cljs.core.nth.call(null,vec__32070,(0),null);
var map__32071 = cljs.core.nth.call(null,vec__32070,(1),null);
var map__32071__$1 = ((((!((map__32071 == null)))?((((map__32071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32071):map__32071);
var doc = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32098 = seq__32066;
var G__32099 = chunk__32067;
var G__32100 = count__32068;
var G__32101 = (i__32069 + (1));
seq__32066 = G__32098;
chunk__32067 = G__32099;
count__32068 = G__32100;
i__32069 = G__32101;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32066);
if(temp__4425__auto__){
var seq__32066__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32066__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__32066__$1);
var G__32102 = cljs.core.chunk_rest.call(null,seq__32066__$1);
var G__32103 = c__17161__auto__;
var G__32104 = cljs.core.count.call(null,c__17161__auto__);
var G__32105 = (0);
seq__32066 = G__32102;
chunk__32067 = G__32103;
count__32068 = G__32104;
i__32069 = G__32105;
continue;
} else {
var vec__32073 = cljs.core.first.call(null,seq__32066__$1);
var name = cljs.core.nth.call(null,vec__32073,(0),null);
var map__32074 = cljs.core.nth.call(null,vec__32073,(1),null);
var map__32074__$1 = ((((!((map__32074 == null)))?((((map__32074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32074):map__32074);
var doc = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32106 = cljs.core.next.call(null,seq__32066__$1);
var G__32107 = null;
var G__32108 = (0);
var G__32109 = (0);
seq__32066 = G__32106;
chunk__32067 = G__32107;
count__32068 = G__32108;
i__32069 = G__32109;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1446755796656