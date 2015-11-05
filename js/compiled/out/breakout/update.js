// Compiled by ClojureScript 1.7.145 {}
goog.provide('breakout.update');
goog.require('cljs.core');
goog.require('monet.canvas');
goog.require('monet.geometry');
breakout.update.move_right_BANG_ = (function breakout$update$move_right_BANG_(pad){

return cljs.core.swap_BANG_.call(null,pad,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.inc);
});
breakout.update.move_left_BANG_ = (function breakout$update$move_left_BANG_(pad){

return cljs.core.swap_BANG_.call(null,pad,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.dec);
});
breakout.update.move_to_BANG_ = (function breakout$update$move_to_BANG_(pos){

return cljs.core.swap_BANG_.call(null,breakout.core.pad,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),pos);
});
breakout.update.ball_speed = (200);
breakout.update.calculate_x = (function breakout$update$calculate_x(angle){

return (breakout.update.ball_speed * ((Math.cos(angle) * Math.PI) / (180)));
});
breakout.update.calculate_y = (function breakout$update$calculate_y(angle){

return (breakout.update.ball_speed * ((Math.sin(angle) * Math.PI) / (180)));
});
breakout.update.move_ball_BANG_ = (function breakout$update$move_ball_BANG_(ball){

return cljs.core.swap_BANG_.call(null,ball,(function (xy){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,xy,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),(function (p1__38887_SHARP_){
return (p1__38887_SHARP_ + breakout.update.calculate_x.call(null,cljs.core.deref.call(null,ball).call(null,new cljs.core.Keyword(null,"angle","angle",1622094254))));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),(function (p1__38888_SHARP_){
return (p1__38888_SHARP_ + breakout.update.calculate_y.call(null,cljs.core.deref.call(null,ball).call(null,new cljs.core.Keyword(null,"angle","angle",1622094254))));
}));
}));
});
breakout.update.mirror_vertical_BANG_ = (function breakout$update$mirror_vertical_BANG_(ball){

var angle = cljs.core.deref.call(null,ball).call(null,new cljs.core.Keyword(null,"angle","angle",1622094254));
return cljs.core.swap_BANG_.call(null,ball,cljs.core.assoc,new cljs.core.Keyword(null,"angle","angle",1622094254),(angle - (Math.PI + ((2) * angle))));
});
breakout.update.mirror_horizontal_BANG_ = (function breakout$update$mirror_horizontal_BANG_(ball){

var angle = cljs.core.deref.call(null,ball).call(null,new cljs.core.Keyword(null,"angle","angle",1622094254));
return cljs.core.swap_BANG_.call(null,ball,cljs.core.assoc,new cljs.core.Keyword(null,"angle","angle",1622094254),(- angle));
});
if(typeof breakout.update.tell_hud !== 'undefined'){
} else {
breakout.update.tell_hud = (function breakout$update$tell_hud(p1__38889_SHARP_){
return breakout.hud.tell_hud.call(null,p1__38889_SHARP_);
});
}
if(typeof breakout.update.get_bricks !== 'undefined'){
} else {
breakout.update.get_bricks = (function breakout$update$get_bricks(){
return breakout.core.get_bricks.call(null);
});
}
if(typeof breakout.update.build_level !== 'undefined'){
} else {
breakout.update.build_level = (function breakout$update$build_level(p1__38890_SHARP_){
return breakout.core.build_level.call(null,p1__38890_SHARP_);
});
}
breakout.update.check_brick_collisions = (function breakout$update$check_brick_collisions(monet_canvas,ball){
var bricks = breakout.update.get_bricks.call(null);
var colliding_brick = cljs.core.some.call(null,((function (bricks){
return (function (p1__38891_SHARP_){
if(cljs.core.truth_(monet.geometry.collision_QMARK_.call(null,cljs.core.deref.call(null,ball),cljs.core.second.call(null,p1__38891_SHARP_)))){
return p1__38891_SHARP_;
} else {
return null;
}
});})(bricks))
,bricks);
if(cljs.core.truth_(colliding_brick)){
cljs.core.underive.call(null,cljs.core.first.call(null,colliding_brick),new cljs.core.Keyword("breakout.core","brick","breakout.core/brick",-1997858234));

monet.canvas.remove_entity.call(null,monet_canvas,cljs.core.first.call(null,colliding_brick));

if(cljs.core.truth_(cljs.core.descendants.call(null,new cljs.core.Keyword("breakout.core","brick","breakout.core/brick",-1997858234)))){
} else {
breakout.update.build_level.call(null,(2));
}

breakout.update.tell_hud.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bricks","bricks",1203539429),(cljs.core.count.call(null,bricks) - (1)),new cljs.core.Keyword(null,"last-brick","last-brick",1191751820),colliding_brick], null));

var from_brick_center_38892 = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ball) - (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(colliding_brick) + (15)));
if(((10) < from_brick_center_38892)){
breakout.update.mirror_vertical_BANG_.call(null,ball);
} else {
breakout.update.mirror_horizontal_BANG_.call(null,ball);
}
} else {
}

return ball;
});
breakout.update.ball = (function breakout$update$ball(value,monet_canvas,ball__$1,pad){

var ball_x_38894 = cljs.core.deref.call(null,ball__$1).call(null,new cljs.core.Keyword(null,"x","x",2099068185));
var ball_y_38895 = cljs.core.deref.call(null,ball__$1).call(null,new cljs.core.Keyword(null,"y","y",-1757859776));
var border_bottom_38896 = new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(monet_canvas).height;
var border_top_38897 = (0);
var border_right_38898 = new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(monet_canvas).width;
var border_left_38899 = (0);
if((ball_y_38895 > border_bottom_38896)){
breakout.update.mirror_horizontal_BANG_.call(null,ball__$1);
} else {
if((ball_y_38895 < border_top_38897)){
breakout.update.mirror_horizontal_BANG_.call(null,ball__$1);
} else {
if((ball_x_38894 < border_left_38899)){
breakout.update.mirror_vertical_BANG_.call(null,ball__$1);
} else {
if((ball_x_38894 > border_right_38898)){
breakout.update.mirror_vertical_BANG_.call(null,ball__$1);
} else {
if(cljs.core.truth_(monet.geometry.collision_QMARK_.call(null,cljs.core.deref.call(null,ball__$1),cljs.core.update_in.call(null,cljs.core.deref.call(null,pad),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),((function (ball_x_38894,ball_y_38895,border_bottom_38896,border_top_38897,border_right_38898,border_left_38899){
return (function (p1__38893_SHARP_){
return (p1__38893_SHARP_ - (cljs.core.deref.call(null,pad).call(null,new cljs.core.Keyword(null,"w","w",354169001)) / (2)));
});})(ball_x_38894,ball_y_38895,border_bottom_38896,border_top_38897,border_right_38898,border_left_38899))
)))){
breakout.update.mirror_horizontal_BANG_.call(null,ball__$1);
} else {
breakout.update.check_brick_collisions.call(null,monet_canvas,ball__$1);

}
}
}
}
}

breakout.update.move_ball_BANG_.call(null,ball__$1);

var new_state = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,value,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.deref.call(null,ball__$1).call(null,new cljs.core.Keyword(null,"x","x",2099068185))),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.deref.call(null,ball__$1).call(null,new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.deref.call(null,ball__$1).call(null,new cljs.core.Keyword(null,"angle","angle",1622094254)));
return new_state;
});

//# sourceMappingURL=update.js.map?rel=1446756622686