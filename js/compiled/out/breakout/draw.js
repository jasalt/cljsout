// Compiled by ClojureScript 1.7.145 {}
goog.provide('breakout.draw');
goog.require('cljs.core');
goog.require('monet.canvas');
goog.require('clojure.string');
goog.require('breakout.utils');
breakout.draw.brick = (function breakout$draw$brick(ctx,p__28606,val){
var map__28609 = p__28606;
var map__28609__$1 = ((((!((map__28609 == null)))?((((map__28609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28609):map__28609);
var x = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"h","h",1109658740));
return monet.canvas.restore.call(null,monet.canvas.stroke.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,monet.canvas.translate.call(null,monet.canvas.stroke_width.call(null,monet.canvas.stroke_style.call(null,monet.canvas.save.call(null,ctx),"green"),h),x,y)),(0),(0)),w,(0))));
});
breakout.draw.ball = (function breakout$draw$ball(ctx,v){
return monet.canvas.fill_rect.call(null,monet.canvas.fill_style.call(null,ctx,"blue"),cljs.core.dissoc.call(null,v,new cljs.core.Keyword(null,"angle","angle",1622094254)));
});
breakout.draw.pad = (function breakout$draw$pad(ctx,p__28611,val){
var map__28614 = p__28611;
var map__28614__$1 = ((((!((map__28614 == null)))?((((map__28614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28614):map__28614);
var x = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword(null,"h","h",1109658740));
return monet.canvas.restore.call(null,monet.canvas.stroke.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,monet.canvas.translate.call(null,monet.canvas.stroke_width.call(null,monet.canvas.stroke_style.call(null,monet.canvas.save.call(null,ctx),"red"),h),x,y)),(- (w / (2))),(0)),(w / (2)),(0))));
});

//# sourceMappingURL=draw.js.map?rel=1446755790432