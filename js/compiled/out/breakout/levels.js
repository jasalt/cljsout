// Compiled by ClojureScript 1.7.145 {}
goog.provide('breakout.levels');
goog.require('cljs.core');
goog.require('breakout.utils');
breakout.levels.levels = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n--------\n--------\n ------","\n ------\n--------\n  ----","\n ------\n---  ---\n  ----"], null);
breakout.levels.parse_level_str = (function breakout$levels$parse_level_str(level_str){
var clean_str = cljs.core.rest.call(null,level_str);
var G__28176 = clean_str;
var vec__28177 = G__28176;
var c = cljs.core.nth.call(null,vec__28177,(0),null);
var rest = cljs.core.nthnext.call(null,vec__28177,(1));
var level = cljs.core.PersistentVector.EMPTY;
var row = cljs.core.PersistentVector.EMPTY;
var G__28176__$1 = G__28176;
var level__$1 = level;
var row__$1 = row;
while(true){
var vec__28178 = G__28176__$1;
var c__$1 = cljs.core.nth.call(null,vec__28178,(0),null);
var rest__$1 = cljs.core.nthnext.call(null,vec__28178,(1));
var level__$2 = level__$1;
var row__$2 = row__$1;
if(cljs.core.truth_(rest__$1)){
var pred__28179 = cljs.core._EQ_;
var expr__28180 = c__$1;
if(cljs.core.truth_(pred__28179.call(null,"-",expr__28180))){
var G__28182 = rest__$1;
var G__28183 = level__$2;
var G__28184 = cljs.core.conj.call(null,row__$2,true);
G__28176__$1 = G__28182;
level__$1 = G__28183;
row__$1 = G__28184;
continue;
} else {
if(cljs.core.truth_(pred__28179.call(null," ",expr__28180))){
var G__28185 = rest__$1;
var G__28186 = level__$2;
var G__28187 = cljs.core.conj.call(null,row__$2,null);
G__28176__$1 = G__28185;
level__$1 = G__28186;
row__$1 = G__28187;
continue;
} else {
if(cljs.core.truth_(pred__28179.call(null,"\n",expr__28180))){
var G__28188 = rest__$1;
var G__28189 = cljs.core.conj.call(null,level__$2,row__$2);
var G__28190 = cljs.core.PersistentVector.EMPTY;
G__28176__$1 = G__28188;
level__$1 = G__28189;
row__$1 = G__28190;
continue;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28180)].join('')));
}
}
}
} else {
return cljs.core.conj.call(null,level__$2,cljs.core.conj.call(null,row__$2,true));
}
break;
}
});
breakout.levels.brick_y_offset = (35);
breakout.levels.brick_x_offset = (35);
breakout.levels.parse_level = (function breakout$levels$parse_level(brick_vec){

return cljs.core.filter.call(null,cljs.core.identity,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,(function (idy,row){
return cljs.core.map_indexed.call(null,(function (idx,brick){
if(cljs.core.truth_(brick)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((idx + (1)) * breakout.levels.brick_x_offset),(((3) + idy) * breakout.levels.brick_y_offset)], null);
} else {
return null;
}
}),row);
}),brick_vec)));
});
breakout.levels.get_level = (function breakout$levels$get_level(num){

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [typeof num === 'number'], null)], null);

return breakout.levels.parse_level.call(null,breakout.levels.parse_level_str.call(null,cljs.core.nth.call(null,breakout.levels.levels,(num - (1)))));
});

//# sourceMappingURL=levels.js.map?rel=1446755790004