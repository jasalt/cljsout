// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16358__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16358__auto__){
return or__16358__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16358__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37212_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37212_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37217 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37218 = null;
var count__37219 = (0);
var i__37220 = (0);
while(true){
if((i__37220 < count__37219)){
var n = cljs.core._nth.call(null,chunk__37218,i__37220);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37221 = seq__37217;
var G__37222 = chunk__37218;
var G__37223 = count__37219;
var G__37224 = (i__37220 + (1));
seq__37217 = G__37221;
chunk__37218 = G__37222;
count__37219 = G__37223;
i__37220 = G__37224;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37217);
if(temp__4425__auto__){
var seq__37217__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37217__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__37217__$1);
var G__37225 = cljs.core.chunk_rest.call(null,seq__37217__$1);
var G__37226 = c__17161__auto__;
var G__37227 = cljs.core.count.call(null,c__17161__auto__);
var G__37228 = (0);
seq__37217 = G__37225;
chunk__37218 = G__37226;
count__37219 = G__37227;
i__37220 = G__37228;
continue;
} else {
var n = cljs.core.first.call(null,seq__37217__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37229 = cljs.core.next.call(null,seq__37217__$1);
var G__37230 = null;
var G__37231 = (0);
var G__37232 = (0);
seq__37217 = G__37229;
chunk__37218 = G__37230;
count__37219 = G__37231;
i__37220 = G__37232;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37271_37278 = cljs.core.seq.call(null,deps);
var chunk__37272_37279 = null;
var count__37273_37280 = (0);
var i__37274_37281 = (0);
while(true){
if((i__37274_37281 < count__37273_37280)){
var dep_37282 = cljs.core._nth.call(null,chunk__37272_37279,i__37274_37281);
topo_sort_helper_STAR_.call(null,dep_37282,(depth + (1)),state);

var G__37283 = seq__37271_37278;
var G__37284 = chunk__37272_37279;
var G__37285 = count__37273_37280;
var G__37286 = (i__37274_37281 + (1));
seq__37271_37278 = G__37283;
chunk__37272_37279 = G__37284;
count__37273_37280 = G__37285;
i__37274_37281 = G__37286;
continue;
} else {
var temp__4425__auto___37287 = cljs.core.seq.call(null,seq__37271_37278);
if(temp__4425__auto___37287){
var seq__37271_37288__$1 = temp__4425__auto___37287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37271_37288__$1)){
var c__17161__auto___37289 = cljs.core.chunk_first.call(null,seq__37271_37288__$1);
var G__37290 = cljs.core.chunk_rest.call(null,seq__37271_37288__$1);
var G__37291 = c__17161__auto___37289;
var G__37292 = cljs.core.count.call(null,c__17161__auto___37289);
var G__37293 = (0);
seq__37271_37278 = G__37290;
chunk__37272_37279 = G__37291;
count__37273_37280 = G__37292;
i__37274_37281 = G__37293;
continue;
} else {
var dep_37294 = cljs.core.first.call(null,seq__37271_37288__$1);
topo_sort_helper_STAR_.call(null,dep_37294,(depth + (1)),state);

var G__37295 = cljs.core.next.call(null,seq__37271_37288__$1);
var G__37296 = null;
var G__37297 = (0);
var G__37298 = (0);
seq__37271_37278 = G__37295;
chunk__37272_37279 = G__37296;
count__37273_37280 = G__37297;
i__37274_37281 = G__37298;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37275){
var vec__37277 = p__37275;
var x = cljs.core.nth.call(null,vec__37277,(0),null);
var xs = cljs.core.nthnext.call(null,vec__37277,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37277,x,xs,get_deps__$1){
return (function (p1__37233_SHARP_){
return clojure.set.difference.call(null,p1__37233_SHARP_,x);
});})(vec__37277,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37311 = cljs.core.seq.call(null,provides);
var chunk__37312 = null;
var count__37313 = (0);
var i__37314 = (0);
while(true){
if((i__37314 < count__37313)){
var prov = cljs.core._nth.call(null,chunk__37312,i__37314);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37315_37323 = cljs.core.seq.call(null,requires);
var chunk__37316_37324 = null;
var count__37317_37325 = (0);
var i__37318_37326 = (0);
while(true){
if((i__37318_37326 < count__37317_37325)){
var req_37327 = cljs.core._nth.call(null,chunk__37316_37324,i__37318_37326);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37327,prov);

var G__37328 = seq__37315_37323;
var G__37329 = chunk__37316_37324;
var G__37330 = count__37317_37325;
var G__37331 = (i__37318_37326 + (1));
seq__37315_37323 = G__37328;
chunk__37316_37324 = G__37329;
count__37317_37325 = G__37330;
i__37318_37326 = G__37331;
continue;
} else {
var temp__4425__auto___37332 = cljs.core.seq.call(null,seq__37315_37323);
if(temp__4425__auto___37332){
var seq__37315_37333__$1 = temp__4425__auto___37332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37315_37333__$1)){
var c__17161__auto___37334 = cljs.core.chunk_first.call(null,seq__37315_37333__$1);
var G__37335 = cljs.core.chunk_rest.call(null,seq__37315_37333__$1);
var G__37336 = c__17161__auto___37334;
var G__37337 = cljs.core.count.call(null,c__17161__auto___37334);
var G__37338 = (0);
seq__37315_37323 = G__37335;
chunk__37316_37324 = G__37336;
count__37317_37325 = G__37337;
i__37318_37326 = G__37338;
continue;
} else {
var req_37339 = cljs.core.first.call(null,seq__37315_37333__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37339,prov);

var G__37340 = cljs.core.next.call(null,seq__37315_37333__$1);
var G__37341 = null;
var G__37342 = (0);
var G__37343 = (0);
seq__37315_37323 = G__37340;
chunk__37316_37324 = G__37341;
count__37317_37325 = G__37342;
i__37318_37326 = G__37343;
continue;
}
} else {
}
}
break;
}

var G__37344 = seq__37311;
var G__37345 = chunk__37312;
var G__37346 = count__37313;
var G__37347 = (i__37314 + (1));
seq__37311 = G__37344;
chunk__37312 = G__37345;
count__37313 = G__37346;
i__37314 = G__37347;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37311);
if(temp__4425__auto__){
var seq__37311__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37311__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__37311__$1);
var G__37348 = cljs.core.chunk_rest.call(null,seq__37311__$1);
var G__37349 = c__17161__auto__;
var G__37350 = cljs.core.count.call(null,c__17161__auto__);
var G__37351 = (0);
seq__37311 = G__37348;
chunk__37312 = G__37349;
count__37313 = G__37350;
i__37314 = G__37351;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37311__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37319_37352 = cljs.core.seq.call(null,requires);
var chunk__37320_37353 = null;
var count__37321_37354 = (0);
var i__37322_37355 = (0);
while(true){
if((i__37322_37355 < count__37321_37354)){
var req_37356 = cljs.core._nth.call(null,chunk__37320_37353,i__37322_37355);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37356,prov);

var G__37357 = seq__37319_37352;
var G__37358 = chunk__37320_37353;
var G__37359 = count__37321_37354;
var G__37360 = (i__37322_37355 + (1));
seq__37319_37352 = G__37357;
chunk__37320_37353 = G__37358;
count__37321_37354 = G__37359;
i__37322_37355 = G__37360;
continue;
} else {
var temp__4425__auto___37361__$1 = cljs.core.seq.call(null,seq__37319_37352);
if(temp__4425__auto___37361__$1){
var seq__37319_37362__$1 = temp__4425__auto___37361__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37319_37362__$1)){
var c__17161__auto___37363 = cljs.core.chunk_first.call(null,seq__37319_37362__$1);
var G__37364 = cljs.core.chunk_rest.call(null,seq__37319_37362__$1);
var G__37365 = c__17161__auto___37363;
var G__37366 = cljs.core.count.call(null,c__17161__auto___37363);
var G__37367 = (0);
seq__37319_37352 = G__37364;
chunk__37320_37353 = G__37365;
count__37321_37354 = G__37366;
i__37322_37355 = G__37367;
continue;
} else {
var req_37368 = cljs.core.first.call(null,seq__37319_37362__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37368,prov);

var G__37369 = cljs.core.next.call(null,seq__37319_37362__$1);
var G__37370 = null;
var G__37371 = (0);
var G__37372 = (0);
seq__37319_37352 = G__37369;
chunk__37320_37353 = G__37370;
count__37321_37354 = G__37371;
i__37322_37355 = G__37372;
continue;
}
} else {
}
}
break;
}

var G__37373 = cljs.core.next.call(null,seq__37311__$1);
var G__37374 = null;
var G__37375 = (0);
var G__37376 = (0);
seq__37311 = G__37373;
chunk__37312 = G__37374;
count__37313 = G__37375;
i__37314 = G__37376;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37381_37385 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37382_37386 = null;
var count__37383_37387 = (0);
var i__37384_37388 = (0);
while(true){
if((i__37384_37388 < count__37383_37387)){
var ns_37389 = cljs.core._nth.call(null,chunk__37382_37386,i__37384_37388);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37389);

var G__37390 = seq__37381_37385;
var G__37391 = chunk__37382_37386;
var G__37392 = count__37383_37387;
var G__37393 = (i__37384_37388 + (1));
seq__37381_37385 = G__37390;
chunk__37382_37386 = G__37391;
count__37383_37387 = G__37392;
i__37384_37388 = G__37393;
continue;
} else {
var temp__4425__auto___37394 = cljs.core.seq.call(null,seq__37381_37385);
if(temp__4425__auto___37394){
var seq__37381_37395__$1 = temp__4425__auto___37394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37381_37395__$1)){
var c__17161__auto___37396 = cljs.core.chunk_first.call(null,seq__37381_37395__$1);
var G__37397 = cljs.core.chunk_rest.call(null,seq__37381_37395__$1);
var G__37398 = c__17161__auto___37396;
var G__37399 = cljs.core.count.call(null,c__17161__auto___37396);
var G__37400 = (0);
seq__37381_37385 = G__37397;
chunk__37382_37386 = G__37398;
count__37383_37387 = G__37399;
i__37384_37388 = G__37400;
continue;
} else {
var ns_37401 = cljs.core.first.call(null,seq__37381_37395__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37401);

var G__37402 = cljs.core.next.call(null,seq__37381_37395__$1);
var G__37403 = null;
var G__37404 = (0);
var G__37405 = (0);
seq__37381_37385 = G__37402;
chunk__37382_37386 = G__37403;
count__37383_37387 = G__37404;
i__37384_37388 = G__37405;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16358__auto__ = goog.require__;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37406__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37407__i = 0, G__37407__a = new Array(arguments.length -  0);
while (G__37407__i < G__37407__a.length) {G__37407__a[G__37407__i] = arguments[G__37407__i + 0]; ++G__37407__i;}
  args = new cljs.core.IndexedSeq(G__37407__a,0);
} 
return G__37406__delegate.call(this,args);};
G__37406.cljs$lang$maxFixedArity = 0;
G__37406.cljs$lang$applyTo = (function (arglist__37408){
var args = cljs.core.seq(arglist__37408);
return G__37406__delegate(args);
});
G__37406.cljs$core$IFn$_invoke$arity$variadic = G__37406__delegate;
return G__37406;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37410 = cljs.core._EQ_;
var expr__37411 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37410.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37411))){
var path_parts = ((function (pred__37410,expr__37411){
return (function (p1__37409_SHARP_){
return clojure.string.split.call(null,p1__37409_SHARP_,/[\/\\]/);
});})(pred__37410,expr__37411))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__37410,expr__37411){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e37413){if((e37413 instanceof Error)){
var e = e37413;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37413;

}
}})());
});
;})(path_parts,sep,root,pred__37410,expr__37411))
} else {
if(cljs.core.truth_(pred__37410.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37411))){
return ((function (pred__37410,expr__37411){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__37410,expr__37411){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__37410,expr__37411))
);

return deferred.addErrback(((function (deferred,pred__37410,expr__37411){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__37410,expr__37411))
);
});
;})(pred__37410,expr__37411))
} else {
return ((function (pred__37410,expr__37411){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37410,expr__37411))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37414,callback){
var map__37417 = p__37414;
var map__37417__$1 = ((((!((map__37417 == null)))?((((map__37417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37417):map__37417);
var file_msg = map__37417__$1;
var request_url = cljs.core.get.call(null,map__37417__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37417,map__37417__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37417,map__37417__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__){
return (function (state_37441){
var state_val_37442 = (state_37441[(1)]);
if((state_val_37442 === (7))){
var inst_37437 = (state_37441[(2)]);
var state_37441__$1 = state_37441;
var statearr_37443_37463 = state_37441__$1;
(statearr_37443_37463[(2)] = inst_37437);

(statearr_37443_37463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37442 === (1))){
var state_37441__$1 = state_37441;
var statearr_37444_37464 = state_37441__$1;
(statearr_37444_37464[(2)] = null);

(statearr_37444_37464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37442 === (4))){
var inst_37421 = (state_37441[(7)]);
var inst_37421__$1 = (state_37441[(2)]);
var state_37441__$1 = (function (){var statearr_37445 = state_37441;
(statearr_37445[(7)] = inst_37421__$1);

return statearr_37445;
})();
if(cljs.core.truth_(inst_37421__$1)){
var statearr_37446_37465 = state_37441__$1;
(statearr_37446_37465[(1)] = (5));

} else {
var statearr_37447_37466 = state_37441__$1;
(statearr_37447_37466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37442 === (6))){
var state_37441__$1 = state_37441;
var statearr_37448_37467 = state_37441__$1;
(statearr_37448_37467[(2)] = null);

(statearr_37448_37467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37442 === (3))){
var inst_37439 = (state_37441[(2)]);
var state_37441__$1 = state_37441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37441__$1,inst_37439);
} else {
if((state_val_37442 === (2))){
var state_37441__$1 = state_37441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37441__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37442 === (11))){
var inst_37433 = (state_37441[(2)]);
var state_37441__$1 = (function (){var statearr_37449 = state_37441;
(statearr_37449[(8)] = inst_37433);

return statearr_37449;
})();
var statearr_37450_37468 = state_37441__$1;
(statearr_37450_37468[(2)] = null);

(statearr_37450_37468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37442 === (9))){
var inst_37427 = (state_37441[(9)]);
var inst_37425 = (state_37441[(10)]);
var inst_37429 = inst_37427.call(null,inst_37425);
var state_37441__$1 = state_37441;
var statearr_37451_37469 = state_37441__$1;
(statearr_37451_37469[(2)] = inst_37429);

(statearr_37451_37469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37442 === (5))){
var inst_37421 = (state_37441[(7)]);
var inst_37423 = figwheel.client.file_reloading.blocking_load.call(null,inst_37421);
var state_37441__$1 = state_37441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37441__$1,(8),inst_37423);
} else {
if((state_val_37442 === (10))){
var inst_37425 = (state_37441[(10)]);
var inst_37431 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37425);
var state_37441__$1 = state_37441;
var statearr_37452_37470 = state_37441__$1;
(statearr_37452_37470[(2)] = inst_37431);

(statearr_37452_37470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37442 === (8))){
var inst_37421 = (state_37441[(7)]);
var inst_37427 = (state_37441[(9)]);
var inst_37425 = (state_37441[(2)]);
var inst_37426 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37427__$1 = cljs.core.get.call(null,inst_37426,inst_37421);
var state_37441__$1 = (function (){var statearr_37453 = state_37441;
(statearr_37453[(9)] = inst_37427__$1);

(statearr_37453[(10)] = inst_37425);

return statearr_37453;
})();
if(cljs.core.truth_(inst_37427__$1)){
var statearr_37454_37471 = state_37441__$1;
(statearr_37454_37471[(1)] = (9));

} else {
var statearr_37455_37472 = state_37441__$1;
(statearr_37455_37472[(1)] = (10));

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
});})(c__19561__auto__))
;
return ((function (switch__19496__auto__,c__19561__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19497__auto__ = null;
var figwheel$client$file_reloading$state_machine__19497__auto____0 = (function (){
var statearr_37459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37459[(0)] = figwheel$client$file_reloading$state_machine__19497__auto__);

(statearr_37459[(1)] = (1));

return statearr_37459;
});
var figwheel$client$file_reloading$state_machine__19497__auto____1 = (function (state_37441){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_37441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e37460){if((e37460 instanceof Object)){
var ex__19500__auto__ = e37460;
var statearr_37461_37473 = state_37441;
(statearr_37461_37473[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37474 = state_37441;
state_37441 = G__37474;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19497__auto__ = function(state_37441){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19497__auto____1.call(this,state_37441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19497__auto____0;
figwheel$client$file_reloading$state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19497__auto____1;
return figwheel$client$file_reloading$state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__))
})();
var state__19563__auto__ = (function (){var statearr_37462 = f__19562__auto__.call(null);
(statearr_37462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_37462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__))
);

return c__19561__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37475,callback){
var map__37478 = p__37475;
var map__37478__$1 = ((((!((map__37478 == null)))?((((map__37478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37478):map__37478);
var file_msg = map__37478__$1;
var namespace = cljs.core.get.call(null,map__37478__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37478,map__37478__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37478,map__37478__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37480){
var map__37483 = p__37480;
var map__37483__$1 = ((((!((map__37483 == null)))?((((map__37483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37483):map__37483);
var file_msg = map__37483__$1;
var namespace = cljs.core.get.call(null,map__37483__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16346__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16346__auto__){
var or__16358__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
var or__16358__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16358__auto____$1)){
return or__16358__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16346__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37485,callback){
var map__37488 = p__37485;
var map__37488__$1 = ((((!((map__37488 == null)))?((((map__37488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37488):map__37488);
var file_msg = map__37488__$1;
var request_url = cljs.core.get.call(null,map__37488__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37488__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19561__auto___37576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto___37576,out){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto___37576,out){
return (function (state_37558){
var state_val_37559 = (state_37558[(1)]);
if((state_val_37559 === (1))){
var inst_37536 = cljs.core.nth.call(null,files,(0),null);
var inst_37537 = cljs.core.nthnext.call(null,files,(1));
var inst_37538 = files;
var state_37558__$1 = (function (){var statearr_37560 = state_37558;
(statearr_37560[(7)] = inst_37537);

(statearr_37560[(8)] = inst_37536);

(statearr_37560[(9)] = inst_37538);

return statearr_37560;
})();
var statearr_37561_37577 = state_37558__$1;
(statearr_37561_37577[(2)] = null);

(statearr_37561_37577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (2))){
var inst_37541 = (state_37558[(10)]);
var inst_37538 = (state_37558[(9)]);
var inst_37541__$1 = cljs.core.nth.call(null,inst_37538,(0),null);
var inst_37542 = cljs.core.nthnext.call(null,inst_37538,(1));
var inst_37543 = (inst_37541__$1 == null);
var inst_37544 = cljs.core.not.call(null,inst_37543);
var state_37558__$1 = (function (){var statearr_37562 = state_37558;
(statearr_37562[(11)] = inst_37542);

(statearr_37562[(10)] = inst_37541__$1);

return statearr_37562;
})();
if(inst_37544){
var statearr_37563_37578 = state_37558__$1;
(statearr_37563_37578[(1)] = (4));

} else {
var statearr_37564_37579 = state_37558__$1;
(statearr_37564_37579[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (3))){
var inst_37556 = (state_37558[(2)]);
var state_37558__$1 = state_37558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37558__$1,inst_37556);
} else {
if((state_val_37559 === (4))){
var inst_37541 = (state_37558[(10)]);
var inst_37546 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37541);
var state_37558__$1 = state_37558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37558__$1,(7),inst_37546);
} else {
if((state_val_37559 === (5))){
var inst_37552 = cljs.core.async.close_BANG_.call(null,out);
var state_37558__$1 = state_37558;
var statearr_37565_37580 = state_37558__$1;
(statearr_37565_37580[(2)] = inst_37552);

(statearr_37565_37580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (6))){
var inst_37554 = (state_37558[(2)]);
var state_37558__$1 = state_37558;
var statearr_37566_37581 = state_37558__$1;
(statearr_37566_37581[(2)] = inst_37554);

(statearr_37566_37581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37559 === (7))){
var inst_37542 = (state_37558[(11)]);
var inst_37548 = (state_37558[(2)]);
var inst_37549 = cljs.core.async.put_BANG_.call(null,out,inst_37548);
var inst_37538 = inst_37542;
var state_37558__$1 = (function (){var statearr_37567 = state_37558;
(statearr_37567[(12)] = inst_37549);

(statearr_37567[(9)] = inst_37538);

return statearr_37567;
})();
var statearr_37568_37582 = state_37558__$1;
(statearr_37568_37582[(2)] = null);

(statearr_37568_37582[(1)] = (2));


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
});})(c__19561__auto___37576,out))
;
return ((function (switch__19496__auto__,c__19561__auto___37576,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19497__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19497__auto____0 = (function (){
var statearr_37572 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37572[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19497__auto__);

(statearr_37572[(1)] = (1));

return statearr_37572;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19497__auto____1 = (function (state_37558){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_37558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e37573){if((e37573 instanceof Object)){
var ex__19500__auto__ = e37573;
var statearr_37574_37583 = state_37558;
(statearr_37574_37583[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37584 = state_37558;
state_37558 = G__37584;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19497__auto__ = function(state_37558){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19497__auto____1.call(this,state_37558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19497__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19497__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto___37576,out))
})();
var state__19563__auto__ = (function (){var statearr_37575 = f__19562__auto__.call(null);
(statearr_37575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto___37576);

return statearr_37575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto___37576,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37585,opts){
var map__37589 = p__37585;
var map__37589__$1 = ((((!((map__37589 == null)))?((((map__37589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37589):map__37589);
var eval_body__$1 = cljs.core.get.call(null,map__37589__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37589__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16346__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16346__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16346__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37591){var e = e37591;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37592_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37592_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37597){
var vec__37598 = p__37597;
var k = cljs.core.nth.call(null,vec__37598,(0),null);
var v = cljs.core.nth.call(null,vec__37598,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37599){
var vec__37600 = p__37599;
var k = cljs.core.nth.call(null,vec__37600,(0),null);
var v = cljs.core.nth.call(null,vec__37600,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37604,p__37605){
var map__37852 = p__37604;
var map__37852__$1 = ((((!((map__37852 == null)))?((((map__37852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37852):map__37852);
var opts = map__37852__$1;
var before_jsload = cljs.core.get.call(null,map__37852__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37852__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37852__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37853 = p__37605;
var map__37853__$1 = ((((!((map__37853 == null)))?((((map__37853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37853):map__37853);
var msg = map__37853__$1;
var files = cljs.core.get.call(null,map__37853__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37853__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37853__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19562__auto__ = (function (){var switch__19496__auto__ = ((function (c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38006){
var state_val_38007 = (state_38006[(1)]);
if((state_val_38007 === (7))){
var inst_37869 = (state_38006[(7)]);
var inst_37867 = (state_38006[(8)]);
var inst_37868 = (state_38006[(9)]);
var inst_37870 = (state_38006[(10)]);
var inst_37875 = cljs.core._nth.call(null,inst_37868,inst_37870);
var inst_37876 = figwheel.client.file_reloading.eval_body.call(null,inst_37875,opts);
var inst_37877 = (inst_37870 + (1));
var tmp38008 = inst_37869;
var tmp38009 = inst_37867;
var tmp38010 = inst_37868;
var inst_37867__$1 = tmp38009;
var inst_37868__$1 = tmp38010;
var inst_37869__$1 = tmp38008;
var inst_37870__$1 = inst_37877;
var state_38006__$1 = (function (){var statearr_38011 = state_38006;
(statearr_38011[(7)] = inst_37869__$1);

(statearr_38011[(8)] = inst_37867__$1);

(statearr_38011[(11)] = inst_37876);

(statearr_38011[(9)] = inst_37868__$1);

(statearr_38011[(10)] = inst_37870__$1);

return statearr_38011;
})();
var statearr_38012_38098 = state_38006__$1;
(statearr_38012_38098[(2)] = null);

(statearr_38012_38098[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (20))){
var inst_37910 = (state_38006[(12)]);
var inst_37918 = figwheel.client.file_reloading.sort_files.call(null,inst_37910);
var state_38006__$1 = state_38006;
var statearr_38013_38099 = state_38006__$1;
(statearr_38013_38099[(2)] = inst_37918);

(statearr_38013_38099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (27))){
var state_38006__$1 = state_38006;
var statearr_38014_38100 = state_38006__$1;
(statearr_38014_38100[(2)] = null);

(statearr_38014_38100[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (1))){
var inst_37859 = (state_38006[(13)]);
var inst_37856 = before_jsload.call(null,files);
var inst_37857 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37858 = (function (){return ((function (inst_37859,inst_37856,inst_37857,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37601_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37601_SHARP_);
});
;})(inst_37859,inst_37856,inst_37857,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37859__$1 = cljs.core.filter.call(null,inst_37858,files);
var inst_37860 = cljs.core.not_empty.call(null,inst_37859__$1);
var state_38006__$1 = (function (){var statearr_38015 = state_38006;
(statearr_38015[(13)] = inst_37859__$1);

(statearr_38015[(14)] = inst_37857);

(statearr_38015[(15)] = inst_37856);

return statearr_38015;
})();
if(cljs.core.truth_(inst_37860)){
var statearr_38016_38101 = state_38006__$1;
(statearr_38016_38101[(1)] = (2));

} else {
var statearr_38017_38102 = state_38006__$1;
(statearr_38017_38102[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (24))){
var state_38006__$1 = state_38006;
var statearr_38018_38103 = state_38006__$1;
(statearr_38018_38103[(2)] = null);

(statearr_38018_38103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (39))){
var inst_37960 = (state_38006[(16)]);
var state_38006__$1 = state_38006;
var statearr_38019_38104 = state_38006__$1;
(statearr_38019_38104[(2)] = inst_37960);

(statearr_38019_38104[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (46))){
var inst_38001 = (state_38006[(2)]);
var state_38006__$1 = state_38006;
var statearr_38020_38105 = state_38006__$1;
(statearr_38020_38105[(2)] = inst_38001);

(statearr_38020_38105[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (4))){
var inst_37904 = (state_38006[(2)]);
var inst_37905 = cljs.core.List.EMPTY;
var inst_37906 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37905);
var inst_37907 = (function (){return ((function (inst_37904,inst_37905,inst_37906,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37602_SHARP_){
var and__16346__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37602_SHARP_);
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37602_SHARP_));
} else {
return and__16346__auto__;
}
});
;})(inst_37904,inst_37905,inst_37906,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37908 = cljs.core.filter.call(null,inst_37907,files);
var inst_37909 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37910 = cljs.core.concat.call(null,inst_37908,inst_37909);
var state_38006__$1 = (function (){var statearr_38021 = state_38006;
(statearr_38021[(12)] = inst_37910);

(statearr_38021[(17)] = inst_37906);

(statearr_38021[(18)] = inst_37904);

return statearr_38021;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38022_38106 = state_38006__$1;
(statearr_38022_38106[(1)] = (16));

} else {
var statearr_38023_38107 = state_38006__$1;
(statearr_38023_38107[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (15))){
var inst_37894 = (state_38006[(2)]);
var state_38006__$1 = state_38006;
var statearr_38024_38108 = state_38006__$1;
(statearr_38024_38108[(2)] = inst_37894);

(statearr_38024_38108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (21))){
var inst_37920 = (state_38006[(19)]);
var inst_37920__$1 = (state_38006[(2)]);
var inst_37921 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37920__$1);
var state_38006__$1 = (function (){var statearr_38025 = state_38006;
(statearr_38025[(19)] = inst_37920__$1);

return statearr_38025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38006__$1,(22),inst_37921);
} else {
if((state_val_38007 === (31))){
var inst_38004 = (state_38006[(2)]);
var state_38006__$1 = state_38006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38006__$1,inst_38004);
} else {
if((state_val_38007 === (32))){
var inst_37960 = (state_38006[(16)]);
var inst_37965 = inst_37960.cljs$lang$protocol_mask$partition0$;
var inst_37966 = (inst_37965 & (64));
var inst_37967 = inst_37960.cljs$core$ISeq$;
var inst_37968 = (inst_37966) || (inst_37967);
var state_38006__$1 = state_38006;
if(cljs.core.truth_(inst_37968)){
var statearr_38026_38109 = state_38006__$1;
(statearr_38026_38109[(1)] = (35));

} else {
var statearr_38027_38110 = state_38006__$1;
(statearr_38027_38110[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (40))){
var inst_37981 = (state_38006[(20)]);
var inst_37980 = (state_38006[(2)]);
var inst_37981__$1 = cljs.core.get.call(null,inst_37980,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37982 = cljs.core.get.call(null,inst_37980,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37983 = cljs.core.not_empty.call(null,inst_37981__$1);
var state_38006__$1 = (function (){var statearr_38028 = state_38006;
(statearr_38028[(20)] = inst_37981__$1);

(statearr_38028[(21)] = inst_37982);

return statearr_38028;
})();
if(cljs.core.truth_(inst_37983)){
var statearr_38029_38111 = state_38006__$1;
(statearr_38029_38111[(1)] = (41));

} else {
var statearr_38030_38112 = state_38006__$1;
(statearr_38030_38112[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (33))){
var state_38006__$1 = state_38006;
var statearr_38031_38113 = state_38006__$1;
(statearr_38031_38113[(2)] = false);

(statearr_38031_38113[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (13))){
var inst_37880 = (state_38006[(22)]);
var inst_37884 = cljs.core.chunk_first.call(null,inst_37880);
var inst_37885 = cljs.core.chunk_rest.call(null,inst_37880);
var inst_37886 = cljs.core.count.call(null,inst_37884);
var inst_37867 = inst_37885;
var inst_37868 = inst_37884;
var inst_37869 = inst_37886;
var inst_37870 = (0);
var state_38006__$1 = (function (){var statearr_38032 = state_38006;
(statearr_38032[(7)] = inst_37869);

(statearr_38032[(8)] = inst_37867);

(statearr_38032[(9)] = inst_37868);

(statearr_38032[(10)] = inst_37870);

return statearr_38032;
})();
var statearr_38033_38114 = state_38006__$1;
(statearr_38033_38114[(2)] = null);

(statearr_38033_38114[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (22))){
var inst_37928 = (state_38006[(23)]);
var inst_37923 = (state_38006[(24)]);
var inst_37920 = (state_38006[(19)]);
var inst_37924 = (state_38006[(25)]);
var inst_37923__$1 = (state_38006[(2)]);
var inst_37924__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37923__$1);
var inst_37925 = (function (){var all_files = inst_37920;
var res_SINGLEQUOTE_ = inst_37923__$1;
var res = inst_37924__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37928,inst_37923,inst_37920,inst_37924,inst_37923__$1,inst_37924__$1,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37603_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37603_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37928,inst_37923,inst_37920,inst_37924,inst_37923__$1,inst_37924__$1,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37926 = cljs.core.filter.call(null,inst_37925,inst_37923__$1);
var inst_37927 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37928__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37927);
var inst_37929 = cljs.core.not_empty.call(null,inst_37928__$1);
var state_38006__$1 = (function (){var statearr_38034 = state_38006;
(statearr_38034[(23)] = inst_37928__$1);

(statearr_38034[(24)] = inst_37923__$1);

(statearr_38034[(26)] = inst_37926);

(statearr_38034[(25)] = inst_37924__$1);

return statearr_38034;
})();
if(cljs.core.truth_(inst_37929)){
var statearr_38035_38115 = state_38006__$1;
(statearr_38035_38115[(1)] = (23));

} else {
var statearr_38036_38116 = state_38006__$1;
(statearr_38036_38116[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (36))){
var state_38006__$1 = state_38006;
var statearr_38037_38117 = state_38006__$1;
(statearr_38037_38117[(2)] = false);

(statearr_38037_38117[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (41))){
var inst_37981 = (state_38006[(20)]);
var inst_37985 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37986 = cljs.core.map.call(null,inst_37985,inst_37981);
var inst_37987 = cljs.core.pr_str.call(null,inst_37986);
var inst_37988 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_37987)].join('');
var inst_37989 = figwheel.client.utils.log.call(null,inst_37988);
var state_38006__$1 = state_38006;
var statearr_38038_38118 = state_38006__$1;
(statearr_38038_38118[(2)] = inst_37989);

(statearr_38038_38118[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (43))){
var inst_37982 = (state_38006[(21)]);
var inst_37992 = (state_38006[(2)]);
var inst_37993 = cljs.core.not_empty.call(null,inst_37982);
var state_38006__$1 = (function (){var statearr_38039 = state_38006;
(statearr_38039[(27)] = inst_37992);

return statearr_38039;
})();
if(cljs.core.truth_(inst_37993)){
var statearr_38040_38119 = state_38006__$1;
(statearr_38040_38119[(1)] = (44));

} else {
var statearr_38041_38120 = state_38006__$1;
(statearr_38041_38120[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (29))){
var inst_37928 = (state_38006[(23)]);
var inst_37923 = (state_38006[(24)]);
var inst_37960 = (state_38006[(16)]);
var inst_37920 = (state_38006[(19)]);
var inst_37926 = (state_38006[(26)]);
var inst_37924 = (state_38006[(25)]);
var inst_37956 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37959 = (function (){var all_files = inst_37920;
var res_SINGLEQUOTE_ = inst_37923;
var res = inst_37924;
var files_not_loaded = inst_37926;
var dependencies_that_loaded = inst_37928;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37928,inst_37923,inst_37960,inst_37920,inst_37926,inst_37924,inst_37956,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37958){
var map__38042 = p__37958;
var map__38042__$1 = ((((!((map__38042 == null)))?((((map__38042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38042):map__38042);
var namespace = cljs.core.get.call(null,map__38042__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37928,inst_37923,inst_37960,inst_37920,inst_37926,inst_37924,inst_37956,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37960__$1 = cljs.core.group_by.call(null,inst_37959,inst_37926);
var inst_37962 = (inst_37960__$1 == null);
var inst_37963 = cljs.core.not.call(null,inst_37962);
var state_38006__$1 = (function (){var statearr_38044 = state_38006;
(statearr_38044[(16)] = inst_37960__$1);

(statearr_38044[(28)] = inst_37956);

return statearr_38044;
})();
if(inst_37963){
var statearr_38045_38121 = state_38006__$1;
(statearr_38045_38121[(1)] = (32));

} else {
var statearr_38046_38122 = state_38006__$1;
(statearr_38046_38122[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (44))){
var inst_37982 = (state_38006[(21)]);
var inst_37995 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37982);
var inst_37996 = cljs.core.pr_str.call(null,inst_37995);
var inst_37997 = [cljs.core.str("not required: "),cljs.core.str(inst_37996)].join('');
var inst_37998 = figwheel.client.utils.log.call(null,inst_37997);
var state_38006__$1 = state_38006;
var statearr_38047_38123 = state_38006__$1;
(statearr_38047_38123[(2)] = inst_37998);

(statearr_38047_38123[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (6))){
var inst_37901 = (state_38006[(2)]);
var state_38006__$1 = state_38006;
var statearr_38048_38124 = state_38006__$1;
(statearr_38048_38124[(2)] = inst_37901);

(statearr_38048_38124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (28))){
var inst_37926 = (state_38006[(26)]);
var inst_37953 = (state_38006[(2)]);
var inst_37954 = cljs.core.not_empty.call(null,inst_37926);
var state_38006__$1 = (function (){var statearr_38049 = state_38006;
(statearr_38049[(29)] = inst_37953);

return statearr_38049;
})();
if(cljs.core.truth_(inst_37954)){
var statearr_38050_38125 = state_38006__$1;
(statearr_38050_38125[(1)] = (29));

} else {
var statearr_38051_38126 = state_38006__$1;
(statearr_38051_38126[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (25))){
var inst_37924 = (state_38006[(25)]);
var inst_37940 = (state_38006[(2)]);
var inst_37941 = cljs.core.not_empty.call(null,inst_37924);
var state_38006__$1 = (function (){var statearr_38052 = state_38006;
(statearr_38052[(30)] = inst_37940);

return statearr_38052;
})();
if(cljs.core.truth_(inst_37941)){
var statearr_38053_38127 = state_38006__$1;
(statearr_38053_38127[(1)] = (26));

} else {
var statearr_38054_38128 = state_38006__$1;
(statearr_38054_38128[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (34))){
var inst_37975 = (state_38006[(2)]);
var state_38006__$1 = state_38006;
if(cljs.core.truth_(inst_37975)){
var statearr_38055_38129 = state_38006__$1;
(statearr_38055_38129[(1)] = (38));

} else {
var statearr_38056_38130 = state_38006__$1;
(statearr_38056_38130[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (17))){
var state_38006__$1 = state_38006;
var statearr_38057_38131 = state_38006__$1;
(statearr_38057_38131[(2)] = recompile_dependents);

(statearr_38057_38131[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (3))){
var state_38006__$1 = state_38006;
var statearr_38058_38132 = state_38006__$1;
(statearr_38058_38132[(2)] = null);

(statearr_38058_38132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (12))){
var inst_37897 = (state_38006[(2)]);
var state_38006__$1 = state_38006;
var statearr_38059_38133 = state_38006__$1;
(statearr_38059_38133[(2)] = inst_37897);

(statearr_38059_38133[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (2))){
var inst_37859 = (state_38006[(13)]);
var inst_37866 = cljs.core.seq.call(null,inst_37859);
var inst_37867 = inst_37866;
var inst_37868 = null;
var inst_37869 = (0);
var inst_37870 = (0);
var state_38006__$1 = (function (){var statearr_38060 = state_38006;
(statearr_38060[(7)] = inst_37869);

(statearr_38060[(8)] = inst_37867);

(statearr_38060[(9)] = inst_37868);

(statearr_38060[(10)] = inst_37870);

return statearr_38060;
})();
var statearr_38061_38134 = state_38006__$1;
(statearr_38061_38134[(2)] = null);

(statearr_38061_38134[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (23))){
var inst_37928 = (state_38006[(23)]);
var inst_37923 = (state_38006[(24)]);
var inst_37920 = (state_38006[(19)]);
var inst_37926 = (state_38006[(26)]);
var inst_37924 = (state_38006[(25)]);
var inst_37931 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37933 = (function (){var all_files = inst_37920;
var res_SINGLEQUOTE_ = inst_37923;
var res = inst_37924;
var files_not_loaded = inst_37926;
var dependencies_that_loaded = inst_37928;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37928,inst_37923,inst_37920,inst_37926,inst_37924,inst_37931,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37932){
var map__38062 = p__37932;
var map__38062__$1 = ((((!((map__38062 == null)))?((((map__38062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38062):map__38062);
var request_url = cljs.core.get.call(null,map__38062__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37928,inst_37923,inst_37920,inst_37926,inst_37924,inst_37931,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37934 = cljs.core.reverse.call(null,inst_37928);
var inst_37935 = cljs.core.map.call(null,inst_37933,inst_37934);
var inst_37936 = cljs.core.pr_str.call(null,inst_37935);
var inst_37937 = figwheel.client.utils.log.call(null,inst_37936);
var state_38006__$1 = (function (){var statearr_38064 = state_38006;
(statearr_38064[(31)] = inst_37931);

return statearr_38064;
})();
var statearr_38065_38135 = state_38006__$1;
(statearr_38065_38135[(2)] = inst_37937);

(statearr_38065_38135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (35))){
var state_38006__$1 = state_38006;
var statearr_38066_38136 = state_38006__$1;
(statearr_38066_38136[(2)] = true);

(statearr_38066_38136[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (19))){
var inst_37910 = (state_38006[(12)]);
var inst_37916 = figwheel.client.file_reloading.expand_files.call(null,inst_37910);
var state_38006__$1 = state_38006;
var statearr_38067_38137 = state_38006__$1;
(statearr_38067_38137[(2)] = inst_37916);

(statearr_38067_38137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (11))){
var state_38006__$1 = state_38006;
var statearr_38068_38138 = state_38006__$1;
(statearr_38068_38138[(2)] = null);

(statearr_38068_38138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (9))){
var inst_37899 = (state_38006[(2)]);
var state_38006__$1 = state_38006;
var statearr_38069_38139 = state_38006__$1;
(statearr_38069_38139[(2)] = inst_37899);

(statearr_38069_38139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (5))){
var inst_37869 = (state_38006[(7)]);
var inst_37870 = (state_38006[(10)]);
var inst_37872 = (inst_37870 < inst_37869);
var inst_37873 = inst_37872;
var state_38006__$1 = state_38006;
if(cljs.core.truth_(inst_37873)){
var statearr_38070_38140 = state_38006__$1;
(statearr_38070_38140[(1)] = (7));

} else {
var statearr_38071_38141 = state_38006__$1;
(statearr_38071_38141[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (14))){
var inst_37880 = (state_38006[(22)]);
var inst_37889 = cljs.core.first.call(null,inst_37880);
var inst_37890 = figwheel.client.file_reloading.eval_body.call(null,inst_37889,opts);
var inst_37891 = cljs.core.next.call(null,inst_37880);
var inst_37867 = inst_37891;
var inst_37868 = null;
var inst_37869 = (0);
var inst_37870 = (0);
var state_38006__$1 = (function (){var statearr_38072 = state_38006;
(statearr_38072[(7)] = inst_37869);

(statearr_38072[(8)] = inst_37867);

(statearr_38072[(9)] = inst_37868);

(statearr_38072[(32)] = inst_37890);

(statearr_38072[(10)] = inst_37870);

return statearr_38072;
})();
var statearr_38073_38142 = state_38006__$1;
(statearr_38073_38142[(2)] = null);

(statearr_38073_38142[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (45))){
var state_38006__$1 = state_38006;
var statearr_38074_38143 = state_38006__$1;
(statearr_38074_38143[(2)] = null);

(statearr_38074_38143[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (26))){
var inst_37928 = (state_38006[(23)]);
var inst_37923 = (state_38006[(24)]);
var inst_37920 = (state_38006[(19)]);
var inst_37926 = (state_38006[(26)]);
var inst_37924 = (state_38006[(25)]);
var inst_37943 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37945 = (function (){var all_files = inst_37920;
var res_SINGLEQUOTE_ = inst_37923;
var res = inst_37924;
var files_not_loaded = inst_37926;
var dependencies_that_loaded = inst_37928;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37928,inst_37923,inst_37920,inst_37926,inst_37924,inst_37943,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37944){
var map__38075 = p__37944;
var map__38075__$1 = ((((!((map__38075 == null)))?((((map__38075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38075):map__38075);
var namespace = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37928,inst_37923,inst_37920,inst_37926,inst_37924,inst_37943,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37946 = cljs.core.map.call(null,inst_37945,inst_37924);
var inst_37947 = cljs.core.pr_str.call(null,inst_37946);
var inst_37948 = figwheel.client.utils.log.call(null,inst_37947);
var inst_37949 = (function (){var all_files = inst_37920;
var res_SINGLEQUOTE_ = inst_37923;
var res = inst_37924;
var files_not_loaded = inst_37926;
var dependencies_that_loaded = inst_37928;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37928,inst_37923,inst_37920,inst_37926,inst_37924,inst_37943,inst_37945,inst_37946,inst_37947,inst_37948,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37928,inst_37923,inst_37920,inst_37926,inst_37924,inst_37943,inst_37945,inst_37946,inst_37947,inst_37948,state_val_38007,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37950 = setTimeout(inst_37949,(10));
var state_38006__$1 = (function (){var statearr_38077 = state_38006;
(statearr_38077[(33)] = inst_37943);

(statearr_38077[(34)] = inst_37948);

return statearr_38077;
})();
var statearr_38078_38144 = state_38006__$1;
(statearr_38078_38144[(2)] = inst_37950);

(statearr_38078_38144[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (16))){
var state_38006__$1 = state_38006;
var statearr_38079_38145 = state_38006__$1;
(statearr_38079_38145[(2)] = reload_dependents);

(statearr_38079_38145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (38))){
var inst_37960 = (state_38006[(16)]);
var inst_37977 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37960);
var state_38006__$1 = state_38006;
var statearr_38080_38146 = state_38006__$1;
(statearr_38080_38146[(2)] = inst_37977);

(statearr_38080_38146[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (30))){
var state_38006__$1 = state_38006;
var statearr_38081_38147 = state_38006__$1;
(statearr_38081_38147[(2)] = null);

(statearr_38081_38147[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (10))){
var inst_37880 = (state_38006[(22)]);
var inst_37882 = cljs.core.chunked_seq_QMARK_.call(null,inst_37880);
var state_38006__$1 = state_38006;
if(inst_37882){
var statearr_38082_38148 = state_38006__$1;
(statearr_38082_38148[(1)] = (13));

} else {
var statearr_38083_38149 = state_38006__$1;
(statearr_38083_38149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (18))){
var inst_37914 = (state_38006[(2)]);
var state_38006__$1 = state_38006;
if(cljs.core.truth_(inst_37914)){
var statearr_38084_38150 = state_38006__$1;
(statearr_38084_38150[(1)] = (19));

} else {
var statearr_38085_38151 = state_38006__$1;
(statearr_38085_38151[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (42))){
var state_38006__$1 = state_38006;
var statearr_38086_38152 = state_38006__$1;
(statearr_38086_38152[(2)] = null);

(statearr_38086_38152[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (37))){
var inst_37972 = (state_38006[(2)]);
var state_38006__$1 = state_38006;
var statearr_38087_38153 = state_38006__$1;
(statearr_38087_38153[(2)] = inst_37972);

(statearr_38087_38153[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (8))){
var inst_37880 = (state_38006[(22)]);
var inst_37867 = (state_38006[(8)]);
var inst_37880__$1 = cljs.core.seq.call(null,inst_37867);
var state_38006__$1 = (function (){var statearr_38088 = state_38006;
(statearr_38088[(22)] = inst_37880__$1);

return statearr_38088;
})();
if(inst_37880__$1){
var statearr_38089_38154 = state_38006__$1;
(statearr_38089_38154[(1)] = (10));

} else {
var statearr_38090_38155 = state_38006__$1;
(statearr_38090_38155[(1)] = (11));

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
}
});})(c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19496__auto__,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19497__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19497__auto____0 = (function (){
var statearr_38094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38094[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19497__auto__);

(statearr_38094[(1)] = (1));

return statearr_38094;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19497__auto____1 = (function (state_38006){
while(true){
var ret_value__19498__auto__ = (function (){try{while(true){
var result__19499__auto__ = switch__19496__auto__.call(null,state_38006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19499__auto__;
}
break;
}
}catch (e38095){if((e38095 instanceof Object)){
var ex__19500__auto__ = e38095;
var statearr_38096_38156 = state_38006;
(statearr_38096_38156[(5)] = ex__19500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38157 = state_38006;
state_38006 = G__38157;
continue;
} else {
return ret_value__19498__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19497__auto__ = function(state_38006){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19497__auto____1.call(this,state_38006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19497__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19497__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19497__auto__;
})()
;})(switch__19496__auto__,c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19563__auto__ = (function (){var statearr_38097 = f__19562__auto__.call(null);
(statearr_38097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19561__auto__);

return statearr_38097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19563__auto__);
});})(c__19561__auto__,map__37852,map__37852__$1,opts,before_jsload,on_jsload,reload_dependents,map__37853,map__37853__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19561__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38160,link){
var map__38163 = p__38160;
var map__38163__$1 = ((((!((map__38163 == null)))?((((map__38163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38163):map__38163);
var file = cljs.core.get.call(null,map__38163__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__38163,map__38163__$1,file){
return (function (p1__38158_SHARP_,p2__38159_SHARP_){
if(cljs.core._EQ_.call(null,p1__38158_SHARP_,p2__38159_SHARP_)){
return p1__38158_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__38163,map__38163__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38169){
var map__38170 = p__38169;
var map__38170__$1 = ((((!((map__38170 == null)))?((((map__38170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38170):map__38170);
var match_length = cljs.core.get.call(null,map__38170__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38170__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38165_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38165_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args38172 = [];
var len__17416__auto___38175 = arguments.length;
var i__17417__auto___38176 = (0);
while(true){
if((i__17417__auto___38176 < len__17416__auto___38175)){
args38172.push((arguments[i__17417__auto___38176]));

var G__38177 = (i__17417__auto___38176 + (1));
i__17417__auto___38176 = G__38177;
continue;
} else {
}
break;
}

var G__38174 = args38172.length;
switch (G__38174) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38172.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38179_SHARP_,p2__38180_SHARP_){
return cljs.core.assoc.call(null,p1__38179_SHARP_,cljs.core.get.call(null,p2__38180_SHARP_,key),p2__38180_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__38181){
var map__38184 = p__38181;
var map__38184__$1 = ((((!((map__38184 == null)))?((((map__38184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38184):map__38184);
var f_data = map__38184__$1;
var file = cljs.core.get.call(null,map__38184__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38186,files_msg){
var map__38193 = p__38186;
var map__38193__$1 = ((((!((map__38193 == null)))?((((map__38193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38193):map__38193);
var opts = map__38193__$1;
var on_cssload = cljs.core.get.call(null,map__38193__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__38195_38199 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__38196_38200 = null;
var count__38197_38201 = (0);
var i__38198_38202 = (0);
while(true){
if((i__38198_38202 < count__38197_38201)){
var f_38203 = cljs.core._nth.call(null,chunk__38196_38200,i__38198_38202);
figwheel.client.file_reloading.reload_css_file.call(null,f_38203);

var G__38204 = seq__38195_38199;
var G__38205 = chunk__38196_38200;
var G__38206 = count__38197_38201;
var G__38207 = (i__38198_38202 + (1));
seq__38195_38199 = G__38204;
chunk__38196_38200 = G__38205;
count__38197_38201 = G__38206;
i__38198_38202 = G__38207;
continue;
} else {
var temp__4425__auto___38208 = cljs.core.seq.call(null,seq__38195_38199);
if(temp__4425__auto___38208){
var seq__38195_38209__$1 = temp__4425__auto___38208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38195_38209__$1)){
var c__17161__auto___38210 = cljs.core.chunk_first.call(null,seq__38195_38209__$1);
var G__38211 = cljs.core.chunk_rest.call(null,seq__38195_38209__$1);
var G__38212 = c__17161__auto___38210;
var G__38213 = cljs.core.count.call(null,c__17161__auto___38210);
var G__38214 = (0);
seq__38195_38199 = G__38211;
chunk__38196_38200 = G__38212;
count__38197_38201 = G__38213;
i__38198_38202 = G__38214;
continue;
} else {
var f_38215 = cljs.core.first.call(null,seq__38195_38209__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_38215);

var G__38216 = cljs.core.next.call(null,seq__38195_38209__$1);
var G__38217 = null;
var G__38218 = (0);
var G__38219 = (0);
seq__38195_38199 = G__38216;
chunk__38196_38200 = G__38217;
count__38197_38201 = G__38218;
i__38198_38202 = G__38219;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__38193,map__38193__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__38193,map__38193__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1446755807454