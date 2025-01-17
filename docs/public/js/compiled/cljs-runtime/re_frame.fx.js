goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__36397 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36398 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36398);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___36508 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___36508)){
var new_db_36510 = temp__5804__auto___36508;
var fexpr__36401_36511 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36401_36511.cljs$core$IFn$_invoke$arity$1 ? fexpr__36401_36511.cljs$core$IFn$_invoke$arity$1(new_db_36510) : fexpr__36401_36511.call(null,new_db_36510));
} else {
}

var seq__36402 = cljs.core.seq(effects_without_db);
var chunk__36403 = null;
var count__36404 = (0);
var i__36405 = (0);
while(true){
if((i__36405 < count__36404)){
var vec__36417 = chunk__36403.cljs$core$IIndexed$_nth$arity$2(null,i__36405);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(1),null);
var temp__5802__auto___36512 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36512)){
var effect_fn_36513 = temp__5802__auto___36512;
(effect_fn_36513.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36513.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36513.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36514 = seq__36402;
var G__36515 = chunk__36403;
var G__36516 = count__36404;
var G__36517 = (i__36405 + (1));
seq__36402 = G__36514;
chunk__36403 = G__36515;
count__36404 = G__36516;
i__36405 = G__36517;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36402);
if(temp__5804__auto__){
var seq__36402__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36402__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36402__$1);
var G__36518 = cljs.core.chunk_rest(seq__36402__$1);
var G__36519 = c__5568__auto__;
var G__36520 = cljs.core.count(c__5568__auto__);
var G__36521 = (0);
seq__36402 = G__36518;
chunk__36403 = G__36519;
count__36404 = G__36520;
i__36405 = G__36521;
continue;
} else {
var vec__36422 = cljs.core.first(seq__36402__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36422,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36422,(1),null);
var temp__5802__auto___36522 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36522)){
var effect_fn_36523 = temp__5802__auto___36522;
(effect_fn_36523.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36523.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36523.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36524 = cljs.core.next(seq__36402__$1);
var G__36525 = null;
var G__36526 = (0);
var G__36527 = (0);
seq__36402 = G__36524;
chunk__36403 = G__36525;
count__36404 = G__36526;
i__36405 = G__36527;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__35918__auto___36529 = re_frame.interop.now();
var duration__35919__auto___36530 = (end__35918__auto___36529 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35919__auto___36530,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__35918__auto___36529);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36397);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___36533 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___36533)){
var new_db_36535 = temp__5804__auto___36533;
var fexpr__36426_36536 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36426_36536.cljs$core$IFn$_invoke$arity$1 ? fexpr__36426_36536.cljs$core$IFn$_invoke$arity$1(new_db_36535) : fexpr__36426_36536.call(null,new_db_36535));
} else {
}

var seq__36427 = cljs.core.seq(effects_without_db);
var chunk__36428 = null;
var count__36429 = (0);
var i__36430 = (0);
while(true){
if((i__36430 < count__36429)){
var vec__36440 = chunk__36428.cljs$core$IIndexed$_nth$arity$2(null,i__36430);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36440,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36440,(1),null);
var temp__5802__auto___36537 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36537)){
var effect_fn_36538 = temp__5802__auto___36537;
(effect_fn_36538.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36538.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36538.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36539 = seq__36427;
var G__36540 = chunk__36428;
var G__36541 = count__36429;
var G__36542 = (i__36430 + (1));
seq__36427 = G__36539;
chunk__36428 = G__36540;
count__36429 = G__36541;
i__36430 = G__36542;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36427);
if(temp__5804__auto__){
var seq__36427__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36427__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36427__$1);
var G__36544 = cljs.core.chunk_rest(seq__36427__$1);
var G__36545 = c__5568__auto__;
var G__36546 = cljs.core.count(c__5568__auto__);
var G__36547 = (0);
seq__36427 = G__36544;
chunk__36428 = G__36545;
count__36429 = G__36546;
i__36430 = G__36547;
continue;
} else {
var vec__36445 = cljs.core.first(seq__36427__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36445,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36445,(1),null);
var temp__5802__auto___36548 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36548)){
var effect_fn_36550 = temp__5802__auto___36548;
(effect_fn_36550.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36550.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36550.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36551 = cljs.core.next(seq__36427__$1);
var G__36552 = null;
var G__36553 = (0);
var G__36554 = (0);
seq__36427 = G__36551;
chunk__36428 = G__36552;
count__36429 = G__36553;
i__36430 = G__36554;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__36451){
var map__36453 = p__36451;
var map__36453__$1 = cljs.core.__destructure_map(map__36453);
var effect = map__36453__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__36455 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36456 = null;
var count__36457 = (0);
var i__36458 = (0);
while(true){
if((i__36458 < count__36457)){
var effect = chunk__36456.cljs$core$IIndexed$_nth$arity$2(null,i__36458);
re_frame.fx.dispatch_later(effect);


var G__36557 = seq__36455;
var G__36558 = chunk__36456;
var G__36559 = count__36457;
var G__36560 = (i__36458 + (1));
seq__36455 = G__36557;
chunk__36456 = G__36558;
count__36457 = G__36559;
i__36458 = G__36560;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36455);
if(temp__5804__auto__){
var seq__36455__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36455__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36455__$1);
var G__36562 = cljs.core.chunk_rest(seq__36455__$1);
var G__36563 = c__5568__auto__;
var G__36564 = cljs.core.count(c__5568__auto__);
var G__36565 = (0);
seq__36455 = G__36562;
chunk__36456 = G__36563;
count__36457 = G__36564;
i__36458 = G__36565;
continue;
} else {
var effect = cljs.core.first(seq__36455__$1);
re_frame.fx.dispatch_later(effect);


var G__36567 = cljs.core.next(seq__36455__$1);
var G__36568 = null;
var G__36569 = (0);
var G__36570 = (0);
seq__36455 = G__36567;
chunk__36456 = G__36568;
count__36457 = G__36569;
i__36458 = G__36570;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__36471 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__36472 = null;
var count__36473 = (0);
var i__36474 = (0);
while(true){
if((i__36474 < count__36473)){
var vec__36481 = chunk__36472.cljs$core$IIndexed$_nth$arity$2(null,i__36474);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36481,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36481,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___36573 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36573)){
var effect_fn_36574 = temp__5802__auto___36573;
(effect_fn_36574.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36574.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36574.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36575 = seq__36471;
var G__36576 = chunk__36472;
var G__36577 = count__36473;
var G__36578 = (i__36474 + (1));
seq__36471 = G__36575;
chunk__36472 = G__36576;
count__36473 = G__36577;
i__36474 = G__36578;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36471);
if(temp__5804__auto__){
var seq__36471__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36471__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36471__$1);
var G__36579 = cljs.core.chunk_rest(seq__36471__$1);
var G__36580 = c__5568__auto__;
var G__36581 = cljs.core.count(c__5568__auto__);
var G__36582 = (0);
seq__36471 = G__36579;
chunk__36472 = G__36580;
count__36473 = G__36581;
i__36474 = G__36582;
continue;
} else {
var vec__36484 = cljs.core.first(seq__36471__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36484,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36484,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___36584 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36584)){
var effect_fn_36585 = temp__5802__auto___36584;
(effect_fn_36585.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36585.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36585.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36588 = cljs.core.next(seq__36471__$1);
var G__36589 = null;
var G__36590 = (0);
var G__36591 = (0);
seq__36471 = G__36588;
chunk__36472 = G__36589;
count__36473 = G__36590;
i__36474 = G__36591;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__36487 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36488 = null;
var count__36489 = (0);
var i__36490 = (0);
while(true){
if((i__36490 < count__36489)){
var event = chunk__36488.cljs$core$IIndexed$_nth$arity$2(null,i__36490);
re_frame.router.dispatch(event);


var G__36593 = seq__36487;
var G__36594 = chunk__36488;
var G__36595 = count__36489;
var G__36596 = (i__36490 + (1));
seq__36487 = G__36593;
chunk__36488 = G__36594;
count__36489 = G__36595;
i__36490 = G__36596;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36487);
if(temp__5804__auto__){
var seq__36487__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36487__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36487__$1);
var G__36600 = cljs.core.chunk_rest(seq__36487__$1);
var G__36601 = c__5568__auto__;
var G__36602 = cljs.core.count(c__5568__auto__);
var G__36603 = (0);
seq__36487 = G__36600;
chunk__36488 = G__36601;
count__36489 = G__36602;
i__36490 = G__36603;
continue;
} else {
var event = cljs.core.first(seq__36487__$1);
re_frame.router.dispatch(event);


var G__36606 = cljs.core.next(seq__36487__$1);
var G__36607 = null;
var G__36608 = (0);
var G__36609 = (0);
seq__36487 = G__36606;
chunk__36488 = G__36607;
count__36489 = G__36608;
i__36490 = G__36609;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__36493 = cljs.core.seq(value);
var chunk__36494 = null;
var count__36495 = (0);
var i__36496 = (0);
while(true){
if((i__36496 < count__36495)){
var event = chunk__36494.cljs$core$IIndexed$_nth$arity$2(null,i__36496);
clear_event(event);


var G__36610 = seq__36493;
var G__36611 = chunk__36494;
var G__36612 = count__36495;
var G__36613 = (i__36496 + (1));
seq__36493 = G__36610;
chunk__36494 = G__36611;
count__36495 = G__36612;
i__36496 = G__36613;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36493);
if(temp__5804__auto__){
var seq__36493__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36493__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36493__$1);
var G__36616 = cljs.core.chunk_rest(seq__36493__$1);
var G__36617 = c__5568__auto__;
var G__36618 = cljs.core.count(c__5568__auto__);
var G__36619 = (0);
seq__36493 = G__36616;
chunk__36494 = G__36617;
count__36495 = G__36618;
i__36496 = G__36619;
continue;
} else {
var event = cljs.core.first(seq__36493__$1);
clear_event(event);


var G__36620 = cljs.core.next(seq__36493__$1);
var G__36621 = null;
var G__36622 = (0);
var G__36623 = (0);
seq__36493 = G__36620;
chunk__36494 = G__36621;
count__36495 = G__36622;
i__36496 = G__36623;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
