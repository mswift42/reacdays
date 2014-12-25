// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16369 = (function (f,fn_handler,meta16370){
this.f = f;
this.fn_handler = fn_handler;
this.meta16370 = meta16370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16369.cljs$lang$type = true;
cljs.core.async.t16369.cljs$lang$ctorStr = "cljs.core.async/t16369";
cljs.core.async.t16369.cljs$lang$ctorPrWriter = (function (this__9311__auto__,writer__9312__auto__,opt__9313__auto__){return cljs.core._write.call(null,writer__9312__auto__,"cljs.core.async/t16369");
});
cljs.core.async.t16369.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16371){var self__ = this;
var _16371__$1 = this;return self__.meta16370;
});
cljs.core.async.t16369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16371,meta16370__$1){var self__ = this;
var _16371__$1 = this;return (new cljs.core.async.t16369(self__.f,self__.fn_handler,meta16370__$1));
});
cljs.core.async.__GT_t16369 = (function __GT_t16369(f__$1,fn_handler__$1,meta16370){return (new cljs.core.async.t16369(f__$1,fn_handler__$1,meta16370));
});
}
return (new cljs.core.async.t16369(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16373 = buff;if(G__16373)
{var bit__9398__auto__ = null;if(cljs.core.truth_((function (){var or__8734__auto__ = bit__9398__auto__;if(cljs.core.truth_(or__8734__auto__))
{return or__8734__auto__;
} else
{return G__16373.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16373.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16373);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16373);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_16374 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16374);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_16374,ret){
return (function (){return fn1.call(null,val_16374);
});})(val_16374,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9604__auto___16375 = n;var x_16376 = (0);while(true){
if((x_16376 < n__9604__auto___16375))
{(a[x_16376] = (0));
{
var G__16377 = (x_16376 + (1));
x_16376 = G__16377;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__16378 = (i + (1));
i = G__16378;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16382 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16382 = (function (flag,alt_flag,meta16383){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16383 = meta16383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16382.cljs$lang$type = true;
cljs.core.async.t16382.cljs$lang$ctorStr = "cljs.core.async/t16382";
cljs.core.async.t16382.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9311__auto__,writer__9312__auto__,opt__9313__auto__){return cljs.core._write.call(null,writer__9312__auto__,"cljs.core.async/t16382");
});})(flag))
;
cljs.core.async.t16382.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t16382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t16382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16384){var self__ = this;
var _16384__$1 = this;return self__.meta16383;
});})(flag))
;
cljs.core.async.t16382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16384,meta16383__$1){var self__ = this;
var _16384__$1 = this;return (new cljs.core.async.t16382(self__.flag,self__.alt_flag,meta16383__$1));
});})(flag))
;
cljs.core.async.__GT_t16382 = ((function (flag){
return (function __GT_t16382(flag__$1,alt_flag__$1,meta16383){return (new cljs.core.async.t16382(flag__$1,alt_flag__$1,meta16383));
});})(flag))
;
}
return (new cljs.core.async.t16382(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16388 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16388 = (function (cb,flag,alt_handler,meta16389){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16389 = meta16389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16388.cljs$lang$type = true;
cljs.core.async.t16388.cljs$lang$ctorStr = "cljs.core.async/t16388";
cljs.core.async.t16388.cljs$lang$ctorPrWriter = (function (this__9311__auto__,writer__9312__auto__,opt__9313__auto__){return cljs.core._write.call(null,writer__9312__auto__,"cljs.core.async/t16388");
});
cljs.core.async.t16388.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16390){var self__ = this;
var _16390__$1 = this;return self__.meta16389;
});
cljs.core.async.t16388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16390,meta16389__$1){var self__ = this;
var _16390__$1 = this;return (new cljs.core.async.t16388(self__.cb,self__.flag,self__.alt_handler,meta16389__$1));
});
cljs.core.async.__GT_t16388 = (function __GT_t16388(cb__$1,flag__$1,alt_handler__$1,meta16389){return (new cljs.core.async.t16388(cb__$1,flag__$1,alt_handler__$1,meta16389));
});
}
return (new cljs.core.async.t16388(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16391_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16391_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16392_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16392_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8734__auto__ = wport;if(cljs.core.truth_(or__8734__auto__))
{return or__8734__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16393 = (i + (1));
i = G__16393;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8734__auto__ = ret;if(cljs.core.truth_(or__8734__auto__))
{return or__8734__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__8722__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8722__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8722__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__16394){var map__16396 = p__16394;var map__16396__$1 = ((cljs.core.seq_QMARK_.call(null,map__16396))?cljs.core.apply.call(null,cljs.core.hash_map,map__16396):map__16396);var opts = map__16396__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16394 = null;if (arguments.length > 1) {
  p__16394 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16394);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16397){
var ports = cljs.core.first(arglist__16397);
var p__16394 = cljs.core.rest(arglist__16397);
return alts_BANG___delegate(ports,p__16394);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11604__auto___16492 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___16492){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___16492){
return (function (state_16468){var state_val_16469 = (state_16468[(1)]);if((state_val_16469 === (7)))
{var inst_16464 = (state_16468[(2)]);var state_16468__$1 = state_16468;var statearr_16470_16493 = state_16468__$1;(statearr_16470_16493[(2)] = inst_16464);
(statearr_16470_16493[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16469 === (1)))
{var state_16468__$1 = state_16468;var statearr_16471_16494 = state_16468__$1;(statearr_16471_16494[(2)] = null);
(statearr_16471_16494[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16469 === (4)))
{var inst_16447 = (state_16468[(7)]);var inst_16447__$1 = (state_16468[(2)]);var inst_16448 = (inst_16447__$1 == null);var state_16468__$1 = (function (){var statearr_16472 = state_16468;(statearr_16472[(7)] = inst_16447__$1);
return statearr_16472;
})();if(cljs.core.truth_(inst_16448))
{var statearr_16473_16495 = state_16468__$1;(statearr_16473_16495[(1)] = (5));
} else
{var statearr_16474_16496 = state_16468__$1;(statearr_16474_16496[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16469 === (13)))
{var state_16468__$1 = state_16468;var statearr_16475_16497 = state_16468__$1;(statearr_16475_16497[(2)] = null);
(statearr_16475_16497[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16469 === (6)))
{var inst_16447 = (state_16468[(7)]);var state_16468__$1 = state_16468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16468__$1,(11),to,inst_16447);
} else
{if((state_val_16469 === (3)))
{var inst_16466 = (state_16468[(2)]);var state_16468__$1 = state_16468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16468__$1,inst_16466);
} else
{if((state_val_16469 === (12)))
{var state_16468__$1 = state_16468;var statearr_16476_16498 = state_16468__$1;(statearr_16476_16498[(2)] = null);
(statearr_16476_16498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16469 === (2)))
{var state_16468__$1 = state_16468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16468__$1,(4),from);
} else
{if((state_val_16469 === (11)))
{var inst_16457 = (state_16468[(2)]);var state_16468__$1 = state_16468;if(cljs.core.truth_(inst_16457))
{var statearr_16477_16499 = state_16468__$1;(statearr_16477_16499[(1)] = (12));
} else
{var statearr_16478_16500 = state_16468__$1;(statearr_16478_16500[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16469 === (9)))
{var state_16468__$1 = state_16468;var statearr_16479_16501 = state_16468__$1;(statearr_16479_16501[(2)] = null);
(statearr_16479_16501[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16469 === (5)))
{var state_16468__$1 = state_16468;if(cljs.core.truth_(close_QMARK_))
{var statearr_16480_16502 = state_16468__$1;(statearr_16480_16502[(1)] = (8));
} else
{var statearr_16481_16503 = state_16468__$1;(statearr_16481_16503[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16469 === (14)))
{var inst_16462 = (state_16468[(2)]);var state_16468__$1 = state_16468;var statearr_16482_16504 = state_16468__$1;(statearr_16482_16504[(2)] = inst_16462);
(statearr_16482_16504[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16469 === (10)))
{var inst_16454 = (state_16468[(2)]);var state_16468__$1 = state_16468;var statearr_16483_16505 = state_16468__$1;(statearr_16483_16505[(2)] = inst_16454);
(statearr_16483_16505[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16469 === (8)))
{var inst_16451 = cljs.core.async.close_BANG_.call(null,to);var state_16468__$1 = state_16468;var statearr_16484_16506 = state_16468__$1;(statearr_16484_16506[(2)] = inst_16451);
(statearr_16484_16506[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto___16492))
;return ((function (switch__11548__auto__,c__11604__auto___16492){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_16488 = [null,null,null,null,null,null,null,null];(statearr_16488[(0)] = state_machine__11549__auto__);
(statearr_16488[(1)] = (1));
return statearr_16488;
});
var state_machine__11549__auto____1 = (function (state_16468){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_16468);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e16489){if((e16489 instanceof Object))
{var ex__11552__auto__ = e16489;var statearr_16490_16507 = state_16468;(statearr_16490_16507[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16468);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16489;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16508 = state_16468;
state_16468 = G__16508;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_16468){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_16468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___16492))
})();var state__11606__auto__ = (function (){var statearr_16491 = f__11605__auto__.call(null);(statearr_16491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___16492);
return statearr_16491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___16492))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__16692){var vec__16693 = p__16692;var v = cljs.core.nth.call(null,vec__16693,(0),null);var p = cljs.core.nth.call(null,vec__16693,(1),null);var job = vec__16693;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11604__auto___16875 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___16875,res,vec__16693,v,p,job,jobs,results){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___16875,res,vec__16693,v,p,job,jobs,results){
return (function (state_16698){var state_val_16699 = (state_16698[(1)]);if((state_val_16699 === (2)))
{var inst_16695 = (state_16698[(2)]);var inst_16696 = cljs.core.async.close_BANG_.call(null,res);var state_16698__$1 = (function (){var statearr_16700 = state_16698;(statearr_16700[(7)] = inst_16695);
return statearr_16700;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16698__$1,inst_16696);
} else
{if((state_val_16699 === (1)))
{var state_16698__$1 = state_16698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16698__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11604__auto___16875,res,vec__16693,v,p,job,jobs,results))
;return ((function (switch__11548__auto__,c__11604__auto___16875,res,vec__16693,v,p,job,jobs,results){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_16704 = [null,null,null,null,null,null,null,null];(statearr_16704[(0)] = state_machine__11549__auto__);
(statearr_16704[(1)] = (1));
return statearr_16704;
});
var state_machine__11549__auto____1 = (function (state_16698){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_16698);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e16705){if((e16705 instanceof Object))
{var ex__11552__auto__ = e16705;var statearr_16706_16876 = state_16698;(statearr_16706_16876[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16698);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16705;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16877 = state_16698;
state_16698 = G__16877;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_16698){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_16698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___16875,res,vec__16693,v,p,job,jobs,results))
})();var state__11606__auto__ = (function (){var statearr_16707 = f__11605__auto__.call(null);(statearr_16707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___16875);
return statearr_16707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___16875,res,vec__16693,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__16708){var vec__16709 = p__16708;var v = cljs.core.nth.call(null,vec__16709,(0),null);var p = cljs.core.nth.call(null,vec__16709,(1),null);var job = vec__16709;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__9604__auto___16878 = n;var __16879 = (0);while(true){
if((__16879 < n__9604__auto___16878))
{var G__16710_16880 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__16710_16880) {
case "async":
var c__11604__auto___16882 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__16879,c__11604__auto___16882,G__16710_16880,n__9604__auto___16878,jobs,results,process,async){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (__16879,c__11604__auto___16882,G__16710_16880,n__9604__auto___16878,jobs,results,process,async){
return (function (state_16723){var state_val_16724 = (state_16723[(1)]);if((state_val_16724 === (7)))
{var inst_16719 = (state_16723[(2)]);var state_16723__$1 = state_16723;var statearr_16725_16883 = state_16723__$1;(statearr_16725_16883[(2)] = inst_16719);
(statearr_16725_16883[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16724 === (6)))
{var state_16723__$1 = state_16723;var statearr_16726_16884 = state_16723__$1;(statearr_16726_16884[(2)] = null);
(statearr_16726_16884[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16724 === (5)))
{var state_16723__$1 = state_16723;var statearr_16727_16885 = state_16723__$1;(statearr_16727_16885[(2)] = null);
(statearr_16727_16885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16724 === (4)))
{var inst_16713 = (state_16723[(2)]);var inst_16714 = async.call(null,inst_16713);var state_16723__$1 = state_16723;if(cljs.core.truth_(inst_16714))
{var statearr_16728_16886 = state_16723__$1;(statearr_16728_16886[(1)] = (5));
} else
{var statearr_16729_16887 = state_16723__$1;(statearr_16729_16887[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16724 === (3)))
{var inst_16721 = (state_16723[(2)]);var state_16723__$1 = state_16723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16723__$1,inst_16721);
} else
{if((state_val_16724 === (2)))
{var state_16723__$1 = state_16723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16723__$1,(4),jobs);
} else
{if((state_val_16724 === (1)))
{var state_16723__$1 = state_16723;var statearr_16730_16888 = state_16723__$1;(statearr_16730_16888[(2)] = null);
(statearr_16730_16888[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__16879,c__11604__auto___16882,G__16710_16880,n__9604__auto___16878,jobs,results,process,async))
;return ((function (__16879,switch__11548__auto__,c__11604__auto___16882,G__16710_16880,n__9604__auto___16878,jobs,results,process,async){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_16734 = [null,null,null,null,null,null,null];(statearr_16734[(0)] = state_machine__11549__auto__);
(statearr_16734[(1)] = (1));
return statearr_16734;
});
var state_machine__11549__auto____1 = (function (state_16723){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_16723);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e16735){if((e16735 instanceof Object))
{var ex__11552__auto__ = e16735;var statearr_16736_16889 = state_16723;(statearr_16736_16889[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16723);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16735;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16890 = state_16723;
state_16723 = G__16890;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_16723){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_16723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(__16879,switch__11548__auto__,c__11604__auto___16882,G__16710_16880,n__9604__auto___16878,jobs,results,process,async))
})();var state__11606__auto__ = (function (){var statearr_16737 = f__11605__auto__.call(null);(statearr_16737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___16882);
return statearr_16737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(__16879,c__11604__auto___16882,G__16710_16880,n__9604__auto___16878,jobs,results,process,async))
);

break;
case "compute":
var c__11604__auto___16891 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__16879,c__11604__auto___16891,G__16710_16880,n__9604__auto___16878,jobs,results,process,async){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (__16879,c__11604__auto___16891,G__16710_16880,n__9604__auto___16878,jobs,results,process,async){
return (function (state_16750){var state_val_16751 = (state_16750[(1)]);if((state_val_16751 === (7)))
{var inst_16746 = (state_16750[(2)]);var state_16750__$1 = state_16750;var statearr_16752_16892 = state_16750__$1;(statearr_16752_16892[(2)] = inst_16746);
(statearr_16752_16892[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16751 === (6)))
{var state_16750__$1 = state_16750;var statearr_16753_16893 = state_16750__$1;(statearr_16753_16893[(2)] = null);
(statearr_16753_16893[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16751 === (5)))
{var state_16750__$1 = state_16750;var statearr_16754_16894 = state_16750__$1;(statearr_16754_16894[(2)] = null);
(statearr_16754_16894[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16751 === (4)))
{var inst_16740 = (state_16750[(2)]);var inst_16741 = process.call(null,inst_16740);var state_16750__$1 = state_16750;if(cljs.core.truth_(inst_16741))
{var statearr_16755_16895 = state_16750__$1;(statearr_16755_16895[(1)] = (5));
} else
{var statearr_16756_16896 = state_16750__$1;(statearr_16756_16896[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16751 === (3)))
{var inst_16748 = (state_16750[(2)]);var state_16750__$1 = state_16750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16750__$1,inst_16748);
} else
{if((state_val_16751 === (2)))
{var state_16750__$1 = state_16750;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16750__$1,(4),jobs);
} else
{if((state_val_16751 === (1)))
{var state_16750__$1 = state_16750;var statearr_16757_16897 = state_16750__$1;(statearr_16757_16897[(2)] = null);
(statearr_16757_16897[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__16879,c__11604__auto___16891,G__16710_16880,n__9604__auto___16878,jobs,results,process,async))
;return ((function (__16879,switch__11548__auto__,c__11604__auto___16891,G__16710_16880,n__9604__auto___16878,jobs,results,process,async){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_16761 = [null,null,null,null,null,null,null];(statearr_16761[(0)] = state_machine__11549__auto__);
(statearr_16761[(1)] = (1));
return statearr_16761;
});
var state_machine__11549__auto____1 = (function (state_16750){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_16750);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e16762){if((e16762 instanceof Object))
{var ex__11552__auto__ = e16762;var statearr_16763_16898 = state_16750;(statearr_16763_16898[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16750);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16762;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16899 = state_16750;
state_16750 = G__16899;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_16750){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_16750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(__16879,switch__11548__auto__,c__11604__auto___16891,G__16710_16880,n__9604__auto___16878,jobs,results,process,async))
})();var state__11606__auto__ = (function (){var statearr_16764 = f__11605__auto__.call(null);(statearr_16764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___16891);
return statearr_16764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(__16879,c__11604__auto___16891,G__16710_16880,n__9604__auto___16878,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__16900 = (__16879 + (1));
__16879 = G__16900;
continue;
}
} else
{}
break;
}
var c__11604__auto___16901 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___16901,jobs,results,process,async){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___16901,jobs,results,process,async){
return (function (state_16786){var state_val_16787 = (state_16786[(1)]);if((state_val_16787 === (9)))
{var inst_16779 = (state_16786[(2)]);var state_16786__$1 = (function (){var statearr_16788 = state_16786;(statearr_16788[(7)] = inst_16779);
return statearr_16788;
})();var statearr_16789_16902 = state_16786__$1;(statearr_16789_16902[(2)] = null);
(statearr_16789_16902[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16787 === (8)))
{var inst_16772 = (state_16786[(8)]);var inst_16777 = (state_16786[(2)]);var state_16786__$1 = (function (){var statearr_16790 = state_16786;(statearr_16790[(9)] = inst_16777);
return statearr_16790;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16786__$1,(9),results,inst_16772);
} else
{if((state_val_16787 === (7)))
{var inst_16782 = (state_16786[(2)]);var state_16786__$1 = state_16786;var statearr_16791_16903 = state_16786__$1;(statearr_16791_16903[(2)] = inst_16782);
(statearr_16791_16903[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16787 === (6)))
{var inst_16767 = (state_16786[(10)]);var inst_16772 = (state_16786[(8)]);var inst_16772__$1 = cljs.core.async.chan.call(null,(1));var inst_16773 = cljs.core.PersistentVector.EMPTY_NODE;var inst_16774 = [inst_16767,inst_16772__$1];var inst_16775 = (new cljs.core.PersistentVector(null,2,(5),inst_16773,inst_16774,null));var state_16786__$1 = (function (){var statearr_16792 = state_16786;(statearr_16792[(8)] = inst_16772__$1);
return statearr_16792;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16786__$1,(8),jobs,inst_16775);
} else
{if((state_val_16787 === (5)))
{var inst_16770 = cljs.core.async.close_BANG_.call(null,jobs);var state_16786__$1 = state_16786;var statearr_16793_16904 = state_16786__$1;(statearr_16793_16904[(2)] = inst_16770);
(statearr_16793_16904[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16787 === (4)))
{var inst_16767 = (state_16786[(10)]);var inst_16767__$1 = (state_16786[(2)]);var inst_16768 = (inst_16767__$1 == null);var state_16786__$1 = (function (){var statearr_16794 = state_16786;(statearr_16794[(10)] = inst_16767__$1);
return statearr_16794;
})();if(cljs.core.truth_(inst_16768))
{var statearr_16795_16905 = state_16786__$1;(statearr_16795_16905[(1)] = (5));
} else
{var statearr_16796_16906 = state_16786__$1;(statearr_16796_16906[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16787 === (3)))
{var inst_16784 = (state_16786[(2)]);var state_16786__$1 = state_16786;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16786__$1,inst_16784);
} else
{if((state_val_16787 === (2)))
{var state_16786__$1 = state_16786;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16786__$1,(4),from);
} else
{if((state_val_16787 === (1)))
{var state_16786__$1 = state_16786;var statearr_16797_16907 = state_16786__$1;(statearr_16797_16907[(2)] = null);
(statearr_16797_16907[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___16901,jobs,results,process,async))
;return ((function (switch__11548__auto__,c__11604__auto___16901,jobs,results,process,async){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_16801 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16801[(0)] = state_machine__11549__auto__);
(statearr_16801[(1)] = (1));
return statearr_16801;
});
var state_machine__11549__auto____1 = (function (state_16786){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_16786);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e16802){if((e16802 instanceof Object))
{var ex__11552__auto__ = e16802;var statearr_16803_16908 = state_16786;(statearr_16803_16908[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16786);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16802;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16909 = state_16786;
state_16786 = G__16909;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_16786){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_16786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___16901,jobs,results,process,async))
})();var state__11606__auto__ = (function (){var statearr_16804 = f__11605__auto__.call(null);(statearr_16804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___16901);
return statearr_16804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___16901,jobs,results,process,async))
);
var c__11604__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto__,jobs,results,process,async){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto__,jobs,results,process,async){
return (function (state_16842){var state_val_16843 = (state_16842[(1)]);if((state_val_16843 === (7)))
{var inst_16838 = (state_16842[(2)]);var state_16842__$1 = state_16842;var statearr_16844_16910 = state_16842__$1;(statearr_16844_16910[(2)] = inst_16838);
(statearr_16844_16910[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (20)))
{var state_16842__$1 = state_16842;var statearr_16845_16911 = state_16842__$1;(statearr_16845_16911[(2)] = null);
(statearr_16845_16911[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (1)))
{var state_16842__$1 = state_16842;var statearr_16846_16912 = state_16842__$1;(statearr_16846_16912[(2)] = null);
(statearr_16846_16912[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (4)))
{var inst_16807 = (state_16842[(7)]);var inst_16807__$1 = (state_16842[(2)]);var inst_16808 = (inst_16807__$1 == null);var state_16842__$1 = (function (){var statearr_16847 = state_16842;(statearr_16847[(7)] = inst_16807__$1);
return statearr_16847;
})();if(cljs.core.truth_(inst_16808))
{var statearr_16848_16913 = state_16842__$1;(statearr_16848_16913[(1)] = (5));
} else
{var statearr_16849_16914 = state_16842__$1;(statearr_16849_16914[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (15)))
{var inst_16820 = (state_16842[(8)]);var state_16842__$1 = state_16842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16842__$1,(18),to,inst_16820);
} else
{if((state_val_16843 === (21)))
{var inst_16833 = (state_16842[(2)]);var state_16842__$1 = state_16842;var statearr_16850_16915 = state_16842__$1;(statearr_16850_16915[(2)] = inst_16833);
(statearr_16850_16915[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (13)))
{var inst_16835 = (state_16842[(2)]);var state_16842__$1 = (function (){var statearr_16851 = state_16842;(statearr_16851[(9)] = inst_16835);
return statearr_16851;
})();var statearr_16852_16916 = state_16842__$1;(statearr_16852_16916[(2)] = null);
(statearr_16852_16916[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (6)))
{var inst_16807 = (state_16842[(7)]);var state_16842__$1 = state_16842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16842__$1,(11),inst_16807);
} else
{if((state_val_16843 === (17)))
{var inst_16828 = (state_16842[(2)]);var state_16842__$1 = state_16842;if(cljs.core.truth_(inst_16828))
{var statearr_16853_16917 = state_16842__$1;(statearr_16853_16917[(1)] = (19));
} else
{var statearr_16854_16918 = state_16842__$1;(statearr_16854_16918[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (3)))
{var inst_16840 = (state_16842[(2)]);var state_16842__$1 = state_16842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16842__$1,inst_16840);
} else
{if((state_val_16843 === (12)))
{var inst_16817 = (state_16842[(10)]);var state_16842__$1 = state_16842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16842__$1,(14),inst_16817);
} else
{if((state_val_16843 === (2)))
{var state_16842__$1 = state_16842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16842__$1,(4),results);
} else
{if((state_val_16843 === (19)))
{var state_16842__$1 = state_16842;var statearr_16855_16919 = state_16842__$1;(statearr_16855_16919[(2)] = null);
(statearr_16855_16919[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (11)))
{var inst_16817 = (state_16842[(2)]);var state_16842__$1 = (function (){var statearr_16856 = state_16842;(statearr_16856[(10)] = inst_16817);
return statearr_16856;
})();var statearr_16857_16920 = state_16842__$1;(statearr_16857_16920[(2)] = null);
(statearr_16857_16920[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (9)))
{var state_16842__$1 = state_16842;var statearr_16858_16921 = state_16842__$1;(statearr_16858_16921[(2)] = null);
(statearr_16858_16921[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (5)))
{var state_16842__$1 = state_16842;if(cljs.core.truth_(close_QMARK_))
{var statearr_16859_16922 = state_16842__$1;(statearr_16859_16922[(1)] = (8));
} else
{var statearr_16860_16923 = state_16842__$1;(statearr_16860_16923[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (14)))
{var inst_16822 = (state_16842[(11)]);var inst_16820 = (state_16842[(8)]);var inst_16820__$1 = (state_16842[(2)]);var inst_16821 = (inst_16820__$1 == null);var inst_16822__$1 = cljs.core.not.call(null,inst_16821);var state_16842__$1 = (function (){var statearr_16861 = state_16842;(statearr_16861[(11)] = inst_16822__$1);
(statearr_16861[(8)] = inst_16820__$1);
return statearr_16861;
})();if(inst_16822__$1)
{var statearr_16862_16924 = state_16842__$1;(statearr_16862_16924[(1)] = (15));
} else
{var statearr_16863_16925 = state_16842__$1;(statearr_16863_16925[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (16)))
{var inst_16822 = (state_16842[(11)]);var state_16842__$1 = state_16842;var statearr_16864_16926 = state_16842__$1;(statearr_16864_16926[(2)] = inst_16822);
(statearr_16864_16926[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (10)))
{var inst_16814 = (state_16842[(2)]);var state_16842__$1 = state_16842;var statearr_16865_16927 = state_16842__$1;(statearr_16865_16927[(2)] = inst_16814);
(statearr_16865_16927[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (18)))
{var inst_16825 = (state_16842[(2)]);var state_16842__$1 = state_16842;var statearr_16866_16928 = state_16842__$1;(statearr_16866_16928[(2)] = inst_16825);
(statearr_16866_16928[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16843 === (8)))
{var inst_16811 = cljs.core.async.close_BANG_.call(null,to);var state_16842__$1 = state_16842;var statearr_16867_16929 = state_16842__$1;(statearr_16867_16929[(2)] = inst_16811);
(statearr_16867_16929[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto__,jobs,results,process,async))
;return ((function (switch__11548__auto__,c__11604__auto__,jobs,results,process,async){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_16871 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16871[(0)] = state_machine__11549__auto__);
(statearr_16871[(1)] = (1));
return statearr_16871;
});
var state_machine__11549__auto____1 = (function (state_16842){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_16842);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e16872){if((e16872 instanceof Object))
{var ex__11552__auto__ = e16872;var statearr_16873_16930 = state_16842;(statearr_16873_16930[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16842);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16872;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16931 = state_16842;
state_16842 = G__16931;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_16842){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_16842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto__,jobs,results,process,async))
})();var state__11606__auto__ = (function (){var statearr_16874 = f__11605__auto__.call(null);(statearr_16874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);
return statearr_16874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto__,jobs,results,process,async))
);
return c__11604__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11604__auto___17032 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___17032,tc,fc){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___17032,tc,fc){
return (function (state_17007){var state_val_17008 = (state_17007[(1)]);if((state_val_17008 === (7)))
{var inst_17003 = (state_17007[(2)]);var state_17007__$1 = state_17007;var statearr_17009_17033 = state_17007__$1;(statearr_17009_17033[(2)] = inst_17003);
(statearr_17009_17033[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17008 === (1)))
{var state_17007__$1 = state_17007;var statearr_17010_17034 = state_17007__$1;(statearr_17010_17034[(2)] = null);
(statearr_17010_17034[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17008 === (4)))
{var inst_16984 = (state_17007[(7)]);var inst_16984__$1 = (state_17007[(2)]);var inst_16985 = (inst_16984__$1 == null);var state_17007__$1 = (function (){var statearr_17011 = state_17007;(statearr_17011[(7)] = inst_16984__$1);
return statearr_17011;
})();if(cljs.core.truth_(inst_16985))
{var statearr_17012_17035 = state_17007__$1;(statearr_17012_17035[(1)] = (5));
} else
{var statearr_17013_17036 = state_17007__$1;(statearr_17013_17036[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17008 === (13)))
{var state_17007__$1 = state_17007;var statearr_17014_17037 = state_17007__$1;(statearr_17014_17037[(2)] = null);
(statearr_17014_17037[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17008 === (6)))
{var inst_16984 = (state_17007[(7)]);var inst_16990 = p.call(null,inst_16984);var state_17007__$1 = state_17007;if(cljs.core.truth_(inst_16990))
{var statearr_17015_17038 = state_17007__$1;(statearr_17015_17038[(1)] = (9));
} else
{var statearr_17016_17039 = state_17007__$1;(statearr_17016_17039[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17008 === (3)))
{var inst_17005 = (state_17007[(2)]);var state_17007__$1 = state_17007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17007__$1,inst_17005);
} else
{if((state_val_17008 === (12)))
{var state_17007__$1 = state_17007;var statearr_17017_17040 = state_17007__$1;(statearr_17017_17040[(2)] = null);
(statearr_17017_17040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17008 === (2)))
{var state_17007__$1 = state_17007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17007__$1,(4),ch);
} else
{if((state_val_17008 === (11)))
{var inst_16984 = (state_17007[(7)]);var inst_16994 = (state_17007[(2)]);var state_17007__$1 = state_17007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17007__$1,(8),inst_16994,inst_16984);
} else
{if((state_val_17008 === (9)))
{var state_17007__$1 = state_17007;var statearr_17018_17041 = state_17007__$1;(statearr_17018_17041[(2)] = tc);
(statearr_17018_17041[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17008 === (5)))
{var inst_16987 = cljs.core.async.close_BANG_.call(null,tc);var inst_16988 = cljs.core.async.close_BANG_.call(null,fc);var state_17007__$1 = (function (){var statearr_17019 = state_17007;(statearr_17019[(8)] = inst_16987);
return statearr_17019;
})();var statearr_17020_17042 = state_17007__$1;(statearr_17020_17042[(2)] = inst_16988);
(statearr_17020_17042[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17008 === (14)))
{var inst_17001 = (state_17007[(2)]);var state_17007__$1 = state_17007;var statearr_17021_17043 = state_17007__$1;(statearr_17021_17043[(2)] = inst_17001);
(statearr_17021_17043[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17008 === (10)))
{var state_17007__$1 = state_17007;var statearr_17022_17044 = state_17007__$1;(statearr_17022_17044[(2)] = fc);
(statearr_17022_17044[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17008 === (8)))
{var inst_16996 = (state_17007[(2)]);var state_17007__$1 = state_17007;if(cljs.core.truth_(inst_16996))
{var statearr_17023_17045 = state_17007__$1;(statearr_17023_17045[(1)] = (12));
} else
{var statearr_17024_17046 = state_17007__$1;(statearr_17024_17046[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto___17032,tc,fc))
;return ((function (switch__11548__auto__,c__11604__auto___17032,tc,fc){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_17028 = [null,null,null,null,null,null,null,null,null];(statearr_17028[(0)] = state_machine__11549__auto__);
(statearr_17028[(1)] = (1));
return statearr_17028;
});
var state_machine__11549__auto____1 = (function (state_17007){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_17007);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e17029){if((e17029 instanceof Object))
{var ex__11552__auto__ = e17029;var statearr_17030_17047 = state_17007;(statearr_17030_17047[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17007);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17029;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17048 = state_17007;
state_17007 = G__17048;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_17007){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_17007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___17032,tc,fc))
})();var state__11606__auto__ = (function (){var statearr_17031 = f__11605__auto__.call(null);(statearr_17031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___17032);
return statearr_17031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___17032,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11604__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto__){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto__){
return (function (state_17095){var state_val_17096 = (state_17095[(1)]);if((state_val_17096 === (7)))
{var inst_17091 = (state_17095[(2)]);var state_17095__$1 = state_17095;var statearr_17097_17113 = state_17095__$1;(statearr_17097_17113[(2)] = inst_17091);
(statearr_17097_17113[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17096 === (6)))
{var inst_17081 = (state_17095[(7)]);var inst_17084 = (state_17095[(8)]);var inst_17088 = f.call(null,inst_17081,inst_17084);var inst_17081__$1 = inst_17088;var state_17095__$1 = (function (){var statearr_17098 = state_17095;(statearr_17098[(7)] = inst_17081__$1);
return statearr_17098;
})();var statearr_17099_17114 = state_17095__$1;(statearr_17099_17114[(2)] = null);
(statearr_17099_17114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17096 === (5)))
{var inst_17081 = (state_17095[(7)]);var state_17095__$1 = state_17095;var statearr_17100_17115 = state_17095__$1;(statearr_17100_17115[(2)] = inst_17081);
(statearr_17100_17115[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17096 === (4)))
{var inst_17084 = (state_17095[(8)]);var inst_17084__$1 = (state_17095[(2)]);var inst_17085 = (inst_17084__$1 == null);var state_17095__$1 = (function (){var statearr_17101 = state_17095;(statearr_17101[(8)] = inst_17084__$1);
return statearr_17101;
})();if(cljs.core.truth_(inst_17085))
{var statearr_17102_17116 = state_17095__$1;(statearr_17102_17116[(1)] = (5));
} else
{var statearr_17103_17117 = state_17095__$1;(statearr_17103_17117[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17096 === (3)))
{var inst_17093 = (state_17095[(2)]);var state_17095__$1 = state_17095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17095__$1,inst_17093);
} else
{if((state_val_17096 === (2)))
{var state_17095__$1 = state_17095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17095__$1,(4),ch);
} else
{if((state_val_17096 === (1)))
{var inst_17081 = init;var state_17095__$1 = (function (){var statearr_17104 = state_17095;(statearr_17104[(7)] = inst_17081);
return statearr_17104;
})();var statearr_17105_17118 = state_17095__$1;(statearr_17105_17118[(2)] = null);
(statearr_17105_17118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__11604__auto__))
;return ((function (switch__11548__auto__,c__11604__auto__){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_17109 = [null,null,null,null,null,null,null,null,null];(statearr_17109[(0)] = state_machine__11549__auto__);
(statearr_17109[(1)] = (1));
return statearr_17109;
});
var state_machine__11549__auto____1 = (function (state_17095){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_17095);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e17110){if((e17110 instanceof Object))
{var ex__11552__auto__ = e17110;var statearr_17111_17119 = state_17095;(statearr_17111_17119[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17095);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17110;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17120 = state_17095;
state_17095 = G__17120;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_17095){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_17095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto__))
})();var state__11606__auto__ = (function (){var statearr_17112 = f__11605__auto__.call(null);(statearr_17112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);
return statearr_17112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto__))
);
return c__11604__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11604__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto__){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto__){
return (function (state_17194){var state_val_17195 = (state_17194[(1)]);if((state_val_17195 === (7)))
{var inst_17176 = (state_17194[(2)]);var state_17194__$1 = state_17194;var statearr_17196_17219 = state_17194__$1;(statearr_17196_17219[(2)] = inst_17176);
(statearr_17196_17219[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17195 === (1)))
{var inst_17170 = cljs.core.seq.call(null,coll);var inst_17171 = inst_17170;var state_17194__$1 = (function (){var statearr_17197 = state_17194;(statearr_17197[(7)] = inst_17171);
return statearr_17197;
})();var statearr_17198_17220 = state_17194__$1;(statearr_17198_17220[(2)] = null);
(statearr_17198_17220[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17195 === (4)))
{var inst_17171 = (state_17194[(7)]);var inst_17174 = cljs.core.first.call(null,inst_17171);var state_17194__$1 = state_17194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17194__$1,(7),ch,inst_17174);
} else
{if((state_val_17195 === (13)))
{var inst_17188 = (state_17194[(2)]);var state_17194__$1 = state_17194;var statearr_17199_17221 = state_17194__$1;(statearr_17199_17221[(2)] = inst_17188);
(statearr_17199_17221[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17195 === (6)))
{var inst_17179 = (state_17194[(2)]);var state_17194__$1 = state_17194;if(cljs.core.truth_(inst_17179))
{var statearr_17200_17222 = state_17194__$1;(statearr_17200_17222[(1)] = (8));
} else
{var statearr_17201_17223 = state_17194__$1;(statearr_17201_17223[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17195 === (3)))
{var inst_17192 = (state_17194[(2)]);var state_17194__$1 = state_17194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17194__$1,inst_17192);
} else
{if((state_val_17195 === (12)))
{var state_17194__$1 = state_17194;var statearr_17202_17224 = state_17194__$1;(statearr_17202_17224[(2)] = null);
(statearr_17202_17224[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17195 === (2)))
{var inst_17171 = (state_17194[(7)]);var state_17194__$1 = state_17194;if(cljs.core.truth_(inst_17171))
{var statearr_17203_17225 = state_17194__$1;(statearr_17203_17225[(1)] = (4));
} else
{var statearr_17204_17226 = state_17194__$1;(statearr_17204_17226[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17195 === (11)))
{var inst_17185 = cljs.core.async.close_BANG_.call(null,ch);var state_17194__$1 = state_17194;var statearr_17205_17227 = state_17194__$1;(statearr_17205_17227[(2)] = inst_17185);
(statearr_17205_17227[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17195 === (9)))
{var state_17194__$1 = state_17194;if(cljs.core.truth_(close_QMARK_))
{var statearr_17206_17228 = state_17194__$1;(statearr_17206_17228[(1)] = (11));
} else
{var statearr_17207_17229 = state_17194__$1;(statearr_17207_17229[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17195 === (5)))
{var inst_17171 = (state_17194[(7)]);var state_17194__$1 = state_17194;var statearr_17208_17230 = state_17194__$1;(statearr_17208_17230[(2)] = inst_17171);
(statearr_17208_17230[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17195 === (10)))
{var inst_17190 = (state_17194[(2)]);var state_17194__$1 = state_17194;var statearr_17209_17231 = state_17194__$1;(statearr_17209_17231[(2)] = inst_17190);
(statearr_17209_17231[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17195 === (8)))
{var inst_17171 = (state_17194[(7)]);var inst_17181 = cljs.core.next.call(null,inst_17171);var inst_17171__$1 = inst_17181;var state_17194__$1 = (function (){var statearr_17210 = state_17194;(statearr_17210[(7)] = inst_17171__$1);
return statearr_17210;
})();var statearr_17211_17232 = state_17194__$1;(statearr_17211_17232[(2)] = null);
(statearr_17211_17232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto__))
;return ((function (switch__11548__auto__,c__11604__auto__){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_17215 = [null,null,null,null,null,null,null,null];(statearr_17215[(0)] = state_machine__11549__auto__);
(statearr_17215[(1)] = (1));
return statearr_17215;
});
var state_machine__11549__auto____1 = (function (state_17194){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_17194);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e17216){if((e17216 instanceof Object))
{var ex__11552__auto__ = e17216;var statearr_17217_17233 = state_17194;(statearr_17217_17233[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17194);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17216;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17234 = state_17194;
state_17194 = G__17234;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_17194){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_17194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto__))
})();var state__11606__auto__ = (function (){var statearr_17218 = f__11605__auto__.call(null);(statearr_17218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);
return statearr_17218;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto__))
);
return c__11604__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj17236 = {};return obj17236;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8722__auto__ = _;if(and__8722__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8722__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__9371__auto__ = (((_ == null))?null:_);return (function (){var or__8734__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj17238 = {};return obj17238;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8722__auto__ = m;if(and__8722__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8722__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__9371__auto__ = (((m == null))?null:m);return (function (){var or__8734__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8722__auto__ = m;if(and__8722__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8722__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__9371__auto__ = (((m == null))?null:m);return (function (){var or__8734__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8722__auto__ = m;if(and__8722__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8722__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__9371__auto__ = (((m == null))?null:m);return (function (){var or__8734__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17460 = (function (cs,ch,mult,meta17461){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17461 = meta17461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17460.cljs$lang$type = true;
cljs.core.async.t17460.cljs$lang$ctorStr = "cljs.core.async/t17460";
cljs.core.async.t17460.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9311__auto__,writer__9312__auto__,opt__9313__auto__){return cljs.core._write.call(null,writer__9312__auto__,"cljs.core.async/t17460");
});})(cs))
;
cljs.core.async.t17460.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17460.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17460.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17460.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17460.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17460.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17462){var self__ = this;
var _17462__$1 = this;return self__.meta17461;
});})(cs))
;
cljs.core.async.t17460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17462,meta17461__$1){var self__ = this;
var _17462__$1 = this;return (new cljs.core.async.t17460(self__.cs,self__.ch,self__.mult,meta17461__$1));
});})(cs))
;
cljs.core.async.__GT_t17460 = ((function (cs){
return (function __GT_t17460(cs__$1,ch__$1,mult__$1,meta17461){return (new cljs.core.async.t17460(cs__$1,ch__$1,mult__$1,meta17461));
});})(cs))
;
}
return (new cljs.core.async.t17460(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11604__auto___17681 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___17681,cs,m,dchan,dctr,done){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___17681,cs,m,dchan,dctr,done){
return (function (state_17593){var state_val_17594 = (state_17593[(1)]);if((state_val_17594 === (7)))
{var inst_17589 = (state_17593[(2)]);var state_17593__$1 = state_17593;var statearr_17595_17682 = state_17593__$1;(statearr_17595_17682[(2)] = inst_17589);
(statearr_17595_17682[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (20)))
{var inst_17494 = (state_17593[(7)]);var inst_17504 = cljs.core.first.call(null,inst_17494);var inst_17505 = cljs.core.nth.call(null,inst_17504,(0),null);var inst_17506 = cljs.core.nth.call(null,inst_17504,(1),null);var state_17593__$1 = (function (){var statearr_17596 = state_17593;(statearr_17596[(8)] = inst_17505);
return statearr_17596;
})();if(cljs.core.truth_(inst_17506))
{var statearr_17597_17683 = state_17593__$1;(statearr_17597_17683[(1)] = (22));
} else
{var statearr_17598_17684 = state_17593__$1;(statearr_17598_17684[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (27)))
{var inst_17534 = (state_17593[(9)]);var inst_17536 = (state_17593[(10)]);var inst_17465 = (state_17593[(11)]);var inst_17541 = (state_17593[(12)]);var inst_17541__$1 = cljs.core._nth.call(null,inst_17534,inst_17536);var inst_17542 = cljs.core.async.put_BANG_.call(null,inst_17541__$1,inst_17465,done);var state_17593__$1 = (function (){var statearr_17599 = state_17593;(statearr_17599[(12)] = inst_17541__$1);
return statearr_17599;
})();if(cljs.core.truth_(inst_17542))
{var statearr_17600_17685 = state_17593__$1;(statearr_17600_17685[(1)] = (30));
} else
{var statearr_17601_17686 = state_17593__$1;(statearr_17601_17686[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (1)))
{var state_17593__$1 = state_17593;var statearr_17602_17687 = state_17593__$1;(statearr_17602_17687[(2)] = null);
(statearr_17602_17687[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (24)))
{var inst_17494 = (state_17593[(7)]);var inst_17511 = (state_17593[(2)]);var inst_17512 = cljs.core.next.call(null,inst_17494);var inst_17474 = inst_17512;var inst_17475 = null;var inst_17476 = (0);var inst_17477 = (0);var state_17593__$1 = (function (){var statearr_17603 = state_17593;(statearr_17603[(13)] = inst_17511);
(statearr_17603[(14)] = inst_17474);
(statearr_17603[(15)] = inst_17477);
(statearr_17603[(16)] = inst_17476);
(statearr_17603[(17)] = inst_17475);
return statearr_17603;
})();var statearr_17604_17688 = state_17593__$1;(statearr_17604_17688[(2)] = null);
(statearr_17604_17688[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (39)))
{var state_17593__$1 = state_17593;var statearr_17608_17689 = state_17593__$1;(statearr_17608_17689[(2)] = null);
(statearr_17608_17689[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (4)))
{var inst_17465 = (state_17593[(11)]);var inst_17465__$1 = (state_17593[(2)]);var inst_17466 = (inst_17465__$1 == null);var state_17593__$1 = (function (){var statearr_17609 = state_17593;(statearr_17609[(11)] = inst_17465__$1);
return statearr_17609;
})();if(cljs.core.truth_(inst_17466))
{var statearr_17610_17690 = state_17593__$1;(statearr_17610_17690[(1)] = (5));
} else
{var statearr_17611_17691 = state_17593__$1;(statearr_17611_17691[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (15)))
{var inst_17474 = (state_17593[(14)]);var inst_17477 = (state_17593[(15)]);var inst_17476 = (state_17593[(16)]);var inst_17475 = (state_17593[(17)]);var inst_17490 = (state_17593[(2)]);var inst_17491 = (inst_17477 + (1));var tmp17605 = inst_17474;var tmp17606 = inst_17476;var tmp17607 = inst_17475;var inst_17474__$1 = tmp17605;var inst_17475__$1 = tmp17607;var inst_17476__$1 = tmp17606;var inst_17477__$1 = inst_17491;var state_17593__$1 = (function (){var statearr_17612 = state_17593;(statearr_17612[(18)] = inst_17490);
(statearr_17612[(14)] = inst_17474__$1);
(statearr_17612[(15)] = inst_17477__$1);
(statearr_17612[(16)] = inst_17476__$1);
(statearr_17612[(17)] = inst_17475__$1);
return statearr_17612;
})();var statearr_17613_17692 = state_17593__$1;(statearr_17613_17692[(2)] = null);
(statearr_17613_17692[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (21)))
{var inst_17515 = (state_17593[(2)]);var state_17593__$1 = state_17593;var statearr_17617_17693 = state_17593__$1;(statearr_17617_17693[(2)] = inst_17515);
(statearr_17617_17693[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (31)))
{var inst_17541 = (state_17593[(12)]);var inst_17545 = done.call(null,null);var inst_17546 = cljs.core.async.untap_STAR_.call(null,m,inst_17541);var state_17593__$1 = (function (){var statearr_17618 = state_17593;(statearr_17618[(19)] = inst_17545);
return statearr_17618;
})();var statearr_17619_17694 = state_17593__$1;(statearr_17619_17694[(2)] = inst_17546);
(statearr_17619_17694[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (32)))
{var inst_17533 = (state_17593[(20)]);var inst_17534 = (state_17593[(9)]);var inst_17535 = (state_17593[(21)]);var inst_17536 = (state_17593[(10)]);var inst_17548 = (state_17593[(2)]);var inst_17549 = (inst_17536 + (1));var tmp17614 = inst_17533;var tmp17615 = inst_17534;var tmp17616 = inst_17535;var inst_17533__$1 = tmp17614;var inst_17534__$1 = tmp17615;var inst_17535__$1 = tmp17616;var inst_17536__$1 = inst_17549;var state_17593__$1 = (function (){var statearr_17620 = state_17593;(statearr_17620[(20)] = inst_17533__$1);
(statearr_17620[(9)] = inst_17534__$1);
(statearr_17620[(21)] = inst_17535__$1);
(statearr_17620[(10)] = inst_17536__$1);
(statearr_17620[(22)] = inst_17548);
return statearr_17620;
})();var statearr_17621_17695 = state_17593__$1;(statearr_17621_17695[(2)] = null);
(statearr_17621_17695[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (40)))
{var inst_17561 = (state_17593[(23)]);var inst_17565 = done.call(null,null);var inst_17566 = cljs.core.async.untap_STAR_.call(null,m,inst_17561);var state_17593__$1 = (function (){var statearr_17622 = state_17593;(statearr_17622[(24)] = inst_17565);
return statearr_17622;
})();var statearr_17623_17696 = state_17593__$1;(statearr_17623_17696[(2)] = inst_17566);
(statearr_17623_17696[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (33)))
{var inst_17552 = (state_17593[(25)]);var inst_17554 = cljs.core.chunked_seq_QMARK_.call(null,inst_17552);var state_17593__$1 = state_17593;if(inst_17554)
{var statearr_17624_17697 = state_17593__$1;(statearr_17624_17697[(1)] = (36));
} else
{var statearr_17625_17698 = state_17593__$1;(statearr_17625_17698[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (13)))
{var inst_17484 = (state_17593[(26)]);var inst_17487 = cljs.core.async.close_BANG_.call(null,inst_17484);var state_17593__$1 = state_17593;var statearr_17626_17699 = state_17593__$1;(statearr_17626_17699[(2)] = inst_17487);
(statearr_17626_17699[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (22)))
{var inst_17505 = (state_17593[(8)]);var inst_17508 = cljs.core.async.close_BANG_.call(null,inst_17505);var state_17593__$1 = state_17593;var statearr_17627_17700 = state_17593__$1;(statearr_17627_17700[(2)] = inst_17508);
(statearr_17627_17700[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (36)))
{var inst_17552 = (state_17593[(25)]);var inst_17556 = cljs.core.chunk_first.call(null,inst_17552);var inst_17557 = cljs.core.chunk_rest.call(null,inst_17552);var inst_17558 = cljs.core.count.call(null,inst_17556);var inst_17533 = inst_17557;var inst_17534 = inst_17556;var inst_17535 = inst_17558;var inst_17536 = (0);var state_17593__$1 = (function (){var statearr_17628 = state_17593;(statearr_17628[(20)] = inst_17533);
(statearr_17628[(9)] = inst_17534);
(statearr_17628[(21)] = inst_17535);
(statearr_17628[(10)] = inst_17536);
return statearr_17628;
})();var statearr_17629_17701 = state_17593__$1;(statearr_17629_17701[(2)] = null);
(statearr_17629_17701[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (41)))
{var inst_17552 = (state_17593[(25)]);var inst_17568 = (state_17593[(2)]);var inst_17569 = cljs.core.next.call(null,inst_17552);var inst_17533 = inst_17569;var inst_17534 = null;var inst_17535 = (0);var inst_17536 = (0);var state_17593__$1 = (function (){var statearr_17630 = state_17593;(statearr_17630[(27)] = inst_17568);
(statearr_17630[(20)] = inst_17533);
(statearr_17630[(9)] = inst_17534);
(statearr_17630[(21)] = inst_17535);
(statearr_17630[(10)] = inst_17536);
return statearr_17630;
})();var statearr_17631_17702 = state_17593__$1;(statearr_17631_17702[(2)] = null);
(statearr_17631_17702[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (43)))
{var state_17593__$1 = state_17593;var statearr_17632_17703 = state_17593__$1;(statearr_17632_17703[(2)] = null);
(statearr_17632_17703[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (29)))
{var inst_17577 = (state_17593[(2)]);var state_17593__$1 = state_17593;var statearr_17633_17704 = state_17593__$1;(statearr_17633_17704[(2)] = inst_17577);
(statearr_17633_17704[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (44)))
{var inst_17586 = (state_17593[(2)]);var state_17593__$1 = (function (){var statearr_17634 = state_17593;(statearr_17634[(28)] = inst_17586);
return statearr_17634;
})();var statearr_17635_17705 = state_17593__$1;(statearr_17635_17705[(2)] = null);
(statearr_17635_17705[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (6)))
{var inst_17525 = (state_17593[(29)]);var inst_17524 = cljs.core.deref.call(null,cs);var inst_17525__$1 = cljs.core.keys.call(null,inst_17524);var inst_17526 = cljs.core.count.call(null,inst_17525__$1);var inst_17527 = cljs.core.reset_BANG_.call(null,dctr,inst_17526);var inst_17532 = cljs.core.seq.call(null,inst_17525__$1);var inst_17533 = inst_17532;var inst_17534 = null;var inst_17535 = (0);var inst_17536 = (0);var state_17593__$1 = (function (){var statearr_17636 = state_17593;(statearr_17636[(30)] = inst_17527);
(statearr_17636[(20)] = inst_17533);
(statearr_17636[(9)] = inst_17534);
(statearr_17636[(21)] = inst_17535);
(statearr_17636[(29)] = inst_17525__$1);
(statearr_17636[(10)] = inst_17536);
return statearr_17636;
})();var statearr_17637_17706 = state_17593__$1;(statearr_17637_17706[(2)] = null);
(statearr_17637_17706[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (28)))
{var inst_17552 = (state_17593[(25)]);var inst_17533 = (state_17593[(20)]);var inst_17552__$1 = cljs.core.seq.call(null,inst_17533);var state_17593__$1 = (function (){var statearr_17638 = state_17593;(statearr_17638[(25)] = inst_17552__$1);
return statearr_17638;
})();if(inst_17552__$1)
{var statearr_17639_17707 = state_17593__$1;(statearr_17639_17707[(1)] = (33));
} else
{var statearr_17640_17708 = state_17593__$1;(statearr_17640_17708[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (25)))
{var inst_17535 = (state_17593[(21)]);var inst_17536 = (state_17593[(10)]);var inst_17538 = (inst_17536 < inst_17535);var inst_17539 = inst_17538;var state_17593__$1 = state_17593;if(cljs.core.truth_(inst_17539))
{var statearr_17641_17709 = state_17593__$1;(statearr_17641_17709[(1)] = (27));
} else
{var statearr_17642_17710 = state_17593__$1;(statearr_17642_17710[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (34)))
{var state_17593__$1 = state_17593;var statearr_17643_17711 = state_17593__$1;(statearr_17643_17711[(2)] = null);
(statearr_17643_17711[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (17)))
{var state_17593__$1 = state_17593;var statearr_17644_17712 = state_17593__$1;(statearr_17644_17712[(2)] = null);
(statearr_17644_17712[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (3)))
{var inst_17591 = (state_17593[(2)]);var state_17593__$1 = state_17593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17593__$1,inst_17591);
} else
{if((state_val_17594 === (12)))
{var inst_17520 = (state_17593[(2)]);var state_17593__$1 = state_17593;var statearr_17645_17713 = state_17593__$1;(statearr_17645_17713[(2)] = inst_17520);
(statearr_17645_17713[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (2)))
{var state_17593__$1 = state_17593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17593__$1,(4),ch);
} else
{if((state_val_17594 === (23)))
{var state_17593__$1 = state_17593;var statearr_17646_17714 = state_17593__$1;(statearr_17646_17714[(2)] = null);
(statearr_17646_17714[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (35)))
{var inst_17575 = (state_17593[(2)]);var state_17593__$1 = state_17593;var statearr_17647_17715 = state_17593__$1;(statearr_17647_17715[(2)] = inst_17575);
(statearr_17647_17715[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (19)))
{var inst_17494 = (state_17593[(7)]);var inst_17498 = cljs.core.chunk_first.call(null,inst_17494);var inst_17499 = cljs.core.chunk_rest.call(null,inst_17494);var inst_17500 = cljs.core.count.call(null,inst_17498);var inst_17474 = inst_17499;var inst_17475 = inst_17498;var inst_17476 = inst_17500;var inst_17477 = (0);var state_17593__$1 = (function (){var statearr_17648 = state_17593;(statearr_17648[(14)] = inst_17474);
(statearr_17648[(15)] = inst_17477);
(statearr_17648[(16)] = inst_17476);
(statearr_17648[(17)] = inst_17475);
return statearr_17648;
})();var statearr_17649_17716 = state_17593__$1;(statearr_17649_17716[(2)] = null);
(statearr_17649_17716[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (11)))
{var inst_17474 = (state_17593[(14)]);var inst_17494 = (state_17593[(7)]);var inst_17494__$1 = cljs.core.seq.call(null,inst_17474);var state_17593__$1 = (function (){var statearr_17650 = state_17593;(statearr_17650[(7)] = inst_17494__$1);
return statearr_17650;
})();if(inst_17494__$1)
{var statearr_17651_17717 = state_17593__$1;(statearr_17651_17717[(1)] = (16));
} else
{var statearr_17652_17718 = state_17593__$1;(statearr_17652_17718[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (9)))
{var inst_17522 = (state_17593[(2)]);var state_17593__$1 = state_17593;var statearr_17653_17719 = state_17593__$1;(statearr_17653_17719[(2)] = inst_17522);
(statearr_17653_17719[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (5)))
{var inst_17472 = cljs.core.deref.call(null,cs);var inst_17473 = cljs.core.seq.call(null,inst_17472);var inst_17474 = inst_17473;var inst_17475 = null;var inst_17476 = (0);var inst_17477 = (0);var state_17593__$1 = (function (){var statearr_17654 = state_17593;(statearr_17654[(14)] = inst_17474);
(statearr_17654[(15)] = inst_17477);
(statearr_17654[(16)] = inst_17476);
(statearr_17654[(17)] = inst_17475);
return statearr_17654;
})();var statearr_17655_17720 = state_17593__$1;(statearr_17655_17720[(2)] = null);
(statearr_17655_17720[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (14)))
{var state_17593__$1 = state_17593;var statearr_17656_17721 = state_17593__$1;(statearr_17656_17721[(2)] = null);
(statearr_17656_17721[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (45)))
{var inst_17583 = (state_17593[(2)]);var state_17593__$1 = state_17593;var statearr_17657_17722 = state_17593__$1;(statearr_17657_17722[(2)] = inst_17583);
(statearr_17657_17722[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (26)))
{var inst_17525 = (state_17593[(29)]);var inst_17579 = (state_17593[(2)]);var inst_17580 = cljs.core.seq.call(null,inst_17525);var state_17593__$1 = (function (){var statearr_17658 = state_17593;(statearr_17658[(31)] = inst_17579);
return statearr_17658;
})();if(inst_17580)
{var statearr_17659_17723 = state_17593__$1;(statearr_17659_17723[(1)] = (42));
} else
{var statearr_17660_17724 = state_17593__$1;(statearr_17660_17724[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (16)))
{var inst_17494 = (state_17593[(7)]);var inst_17496 = cljs.core.chunked_seq_QMARK_.call(null,inst_17494);var state_17593__$1 = state_17593;if(inst_17496)
{var statearr_17661_17725 = state_17593__$1;(statearr_17661_17725[(1)] = (19));
} else
{var statearr_17662_17726 = state_17593__$1;(statearr_17662_17726[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (38)))
{var inst_17572 = (state_17593[(2)]);var state_17593__$1 = state_17593;var statearr_17663_17727 = state_17593__$1;(statearr_17663_17727[(2)] = inst_17572);
(statearr_17663_17727[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (30)))
{var state_17593__$1 = state_17593;var statearr_17664_17728 = state_17593__$1;(statearr_17664_17728[(2)] = null);
(statearr_17664_17728[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (10)))
{var inst_17477 = (state_17593[(15)]);var inst_17475 = (state_17593[(17)]);var inst_17483 = cljs.core._nth.call(null,inst_17475,inst_17477);var inst_17484 = cljs.core.nth.call(null,inst_17483,(0),null);var inst_17485 = cljs.core.nth.call(null,inst_17483,(1),null);var state_17593__$1 = (function (){var statearr_17665 = state_17593;(statearr_17665[(26)] = inst_17484);
return statearr_17665;
})();if(cljs.core.truth_(inst_17485))
{var statearr_17666_17729 = state_17593__$1;(statearr_17666_17729[(1)] = (13));
} else
{var statearr_17667_17730 = state_17593__$1;(statearr_17667_17730[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (18)))
{var inst_17518 = (state_17593[(2)]);var state_17593__$1 = state_17593;var statearr_17668_17731 = state_17593__$1;(statearr_17668_17731[(2)] = inst_17518);
(statearr_17668_17731[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (42)))
{var state_17593__$1 = state_17593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17593__$1,(45),dchan);
} else
{if((state_val_17594 === (37)))
{var inst_17552 = (state_17593[(25)]);var inst_17465 = (state_17593[(11)]);var inst_17561 = (state_17593[(23)]);var inst_17561__$1 = cljs.core.first.call(null,inst_17552);var inst_17562 = cljs.core.async.put_BANG_.call(null,inst_17561__$1,inst_17465,done);var state_17593__$1 = (function (){var statearr_17669 = state_17593;(statearr_17669[(23)] = inst_17561__$1);
return statearr_17669;
})();if(cljs.core.truth_(inst_17562))
{var statearr_17670_17732 = state_17593__$1;(statearr_17670_17732[(1)] = (39));
} else
{var statearr_17671_17733 = state_17593__$1;(statearr_17671_17733[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17594 === (8)))
{var inst_17477 = (state_17593[(15)]);var inst_17476 = (state_17593[(16)]);var inst_17479 = (inst_17477 < inst_17476);var inst_17480 = inst_17479;var state_17593__$1 = state_17593;if(cljs.core.truth_(inst_17480))
{var statearr_17672_17734 = state_17593__$1;(statearr_17672_17734[(1)] = (10));
} else
{var statearr_17673_17735 = state_17593__$1;(statearr_17673_17735[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto___17681,cs,m,dchan,dctr,done))
;return ((function (switch__11548__auto__,c__11604__auto___17681,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_17677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17677[(0)] = state_machine__11549__auto__);
(statearr_17677[(1)] = (1));
return statearr_17677;
});
var state_machine__11549__auto____1 = (function (state_17593){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_17593);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e17678){if((e17678 instanceof Object))
{var ex__11552__auto__ = e17678;var statearr_17679_17736 = state_17593;(statearr_17679_17736[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17593);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17678;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17737 = state_17593;
state_17593 = G__17737;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_17593){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_17593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___17681,cs,m,dchan,dctr,done))
})();var state__11606__auto__ = (function (){var statearr_17680 = f__11605__auto__.call(null);(statearr_17680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___17681);
return statearr_17680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___17681,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj17739 = {};return obj17739;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8722__auto__ = m;if(and__8722__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8722__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__9371__auto__ = (((m == null))?null:m);return (function (){var or__8734__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8722__auto__ = m;if(and__8722__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8722__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__9371__auto__ = (((m == null))?null:m);return (function (){var or__8734__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8722__auto__ = m;if(and__8722__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8722__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__9371__auto__ = (((m == null))?null:m);return (function (){var or__8734__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8722__auto__ = m;if(and__8722__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8722__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__9371__auto__ = (((m == null))?null:m);return (function (){var or__8734__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8722__auto__ = m;if(and__8722__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8722__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__9371__auto__ = (((m == null))?null:m);return (function (){var or__8734__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__17740){var map__17745 = p__17740;var map__17745__$1 = ((cljs.core.seq_QMARK_.call(null,map__17745))?cljs.core.apply.call(null,cljs.core.hash_map,map__17745):map__17745);var opts = map__17745__$1;var statearr_17746_17749 = state;(statearr_17746_17749[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__17745,map__17745__$1,opts){
return (function (val){var statearr_17747_17750 = state;(statearr_17747_17750[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17745,map__17745__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_17748_17751 = state;(statearr_17748_17751[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__17740 = null;if (arguments.length > 3) {
  p__17740 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__17740);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__17752){
var state = cljs.core.first(arglist__17752);
arglist__17752 = cljs.core.next(arglist__17752);
var cont_block = cljs.core.first(arglist__17752);
arglist__17752 = cljs.core.next(arglist__17752);
var ports = cljs.core.first(arglist__17752);
var p__17740 = cljs.core.rest(arglist__17752);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__17740);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t17872 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17872 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17873){
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
this.meta17873 = meta17873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17872.cljs$lang$type = true;
cljs.core.async.t17872.cljs$lang$ctorStr = "cljs.core.async/t17872";
cljs.core.async.t17872.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9311__auto__,writer__9312__auto__,opt__9313__auto__){return cljs.core._write.call(null,writer__9312__auto__,"cljs.core.async/t17872");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17872.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17872.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17872.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17872.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17872.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17872.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17872.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17874){var self__ = this;
var _17874__$1 = this;return self__.meta17873;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17874,meta17873__$1){var self__ = this;
var _17874__$1 = this;return (new cljs.core.async.t17872(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17873__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17872 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17872(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17873){return (new cljs.core.async.t17872(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17873));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17872(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11604__auto___17991 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___17991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___17991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17944){var state_val_17945 = (state_17944[(1)]);if((state_val_17945 === (7)))
{var inst_17888 = (state_17944[(7)]);var inst_17893 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17888);var state_17944__$1 = state_17944;var statearr_17946_17992 = state_17944__$1;(statearr_17946_17992[(2)] = inst_17893);
(statearr_17946_17992[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (20)))
{var inst_17903 = (state_17944[(8)]);var state_17944__$1 = state_17944;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17944__$1,(23),out,inst_17903);
} else
{if((state_val_17945 === (1)))
{var inst_17878 = (state_17944[(9)]);var inst_17878__$1 = calc_state.call(null);var inst_17879 = cljs.core.seq_QMARK_.call(null,inst_17878__$1);var state_17944__$1 = (function (){var statearr_17947 = state_17944;(statearr_17947[(9)] = inst_17878__$1);
return statearr_17947;
})();if(inst_17879)
{var statearr_17948_17993 = state_17944__$1;(statearr_17948_17993[(1)] = (2));
} else
{var statearr_17949_17994 = state_17944__$1;(statearr_17949_17994[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (24)))
{var inst_17896 = (state_17944[(10)]);var inst_17888 = inst_17896;var state_17944__$1 = (function (){var statearr_17950 = state_17944;(statearr_17950[(7)] = inst_17888);
return statearr_17950;
})();var statearr_17951_17995 = state_17944__$1;(statearr_17951_17995[(2)] = null);
(statearr_17951_17995[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (4)))
{var inst_17878 = (state_17944[(9)]);var inst_17884 = (state_17944[(2)]);var inst_17885 = cljs.core.get.call(null,inst_17884,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17886 = cljs.core.get.call(null,inst_17884,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17887 = cljs.core.get.call(null,inst_17884,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_17888 = inst_17878;var state_17944__$1 = (function (){var statearr_17952 = state_17944;(statearr_17952[(11)] = inst_17886);
(statearr_17952[(7)] = inst_17888);
(statearr_17952[(12)] = inst_17885);
(statearr_17952[(13)] = inst_17887);
return statearr_17952;
})();var statearr_17953_17996 = state_17944__$1;(statearr_17953_17996[(2)] = null);
(statearr_17953_17996[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (15)))
{var state_17944__$1 = state_17944;var statearr_17954_17997 = state_17944__$1;(statearr_17954_17997[(2)] = null);
(statearr_17954_17997[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (21)))
{var inst_17896 = (state_17944[(10)]);var inst_17888 = inst_17896;var state_17944__$1 = (function (){var statearr_17955 = state_17944;(statearr_17955[(7)] = inst_17888);
return statearr_17955;
})();var statearr_17956_17998 = state_17944__$1;(statearr_17956_17998[(2)] = null);
(statearr_17956_17998[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (13)))
{var inst_17940 = (state_17944[(2)]);var state_17944__$1 = state_17944;var statearr_17957_17999 = state_17944__$1;(statearr_17957_17999[(2)] = inst_17940);
(statearr_17957_17999[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (22)))
{var inst_17938 = (state_17944[(2)]);var state_17944__$1 = state_17944;var statearr_17958_18000 = state_17944__$1;(statearr_17958_18000[(2)] = inst_17938);
(statearr_17958_18000[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (6)))
{var inst_17942 = (state_17944[(2)]);var state_17944__$1 = state_17944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17944__$1,inst_17942);
} else
{if((state_val_17945 === (25)))
{var state_17944__$1 = state_17944;var statearr_17959_18001 = state_17944__$1;(statearr_17959_18001[(2)] = null);
(statearr_17959_18001[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (17)))
{var inst_17918 = (state_17944[(14)]);var state_17944__$1 = state_17944;var statearr_17960_18002 = state_17944__$1;(statearr_17960_18002[(2)] = inst_17918);
(statearr_17960_18002[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (3)))
{var inst_17878 = (state_17944[(9)]);var state_17944__$1 = state_17944;var statearr_17961_18003 = state_17944__$1;(statearr_17961_18003[(2)] = inst_17878);
(statearr_17961_18003[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (12)))
{var inst_17899 = (state_17944[(15)]);var inst_17904 = (state_17944[(16)]);var inst_17918 = (state_17944[(14)]);var inst_17918__$1 = inst_17899.call(null,inst_17904);var state_17944__$1 = (function (){var statearr_17962 = state_17944;(statearr_17962[(14)] = inst_17918__$1);
return statearr_17962;
})();if(cljs.core.truth_(inst_17918__$1))
{var statearr_17963_18004 = state_17944__$1;(statearr_17963_18004[(1)] = (17));
} else
{var statearr_17964_18005 = state_17944__$1;(statearr_17964_18005[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (2)))
{var inst_17878 = (state_17944[(9)]);var inst_17881 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17878);var state_17944__$1 = state_17944;var statearr_17965_18006 = state_17944__$1;(statearr_17965_18006[(2)] = inst_17881);
(statearr_17965_18006[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (23)))
{var inst_17929 = (state_17944[(2)]);var state_17944__$1 = state_17944;if(cljs.core.truth_(inst_17929))
{var statearr_17966_18007 = state_17944__$1;(statearr_17966_18007[(1)] = (24));
} else
{var statearr_17967_18008 = state_17944__$1;(statearr_17967_18008[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (19)))
{var inst_17926 = (state_17944[(2)]);var state_17944__$1 = state_17944;if(cljs.core.truth_(inst_17926))
{var statearr_17968_18009 = state_17944__$1;(statearr_17968_18009[(1)] = (20));
} else
{var statearr_17969_18010 = state_17944__$1;(statearr_17969_18010[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (11)))
{var inst_17903 = (state_17944[(8)]);var inst_17909 = (inst_17903 == null);var state_17944__$1 = state_17944;if(cljs.core.truth_(inst_17909))
{var statearr_17970_18011 = state_17944__$1;(statearr_17970_18011[(1)] = (14));
} else
{var statearr_17971_18012 = state_17944__$1;(statearr_17971_18012[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (9)))
{var inst_17896 = (state_17944[(10)]);var inst_17896__$1 = (state_17944[(2)]);var inst_17897 = cljs.core.get.call(null,inst_17896__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17898 = cljs.core.get.call(null,inst_17896__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17899 = cljs.core.get.call(null,inst_17896__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_17944__$1 = (function (){var statearr_17972 = state_17944;(statearr_17972[(17)] = inst_17898);
(statearr_17972[(15)] = inst_17899);
(statearr_17972[(10)] = inst_17896__$1);
return statearr_17972;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_17944__$1,(10),inst_17897);
} else
{if((state_val_17945 === (5)))
{var inst_17888 = (state_17944[(7)]);var inst_17891 = cljs.core.seq_QMARK_.call(null,inst_17888);var state_17944__$1 = state_17944;if(inst_17891)
{var statearr_17973_18013 = state_17944__$1;(statearr_17973_18013[(1)] = (7));
} else
{var statearr_17974_18014 = state_17944__$1;(statearr_17974_18014[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (14)))
{var inst_17904 = (state_17944[(16)]);var inst_17911 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17904);var state_17944__$1 = state_17944;var statearr_17975_18015 = state_17944__$1;(statearr_17975_18015[(2)] = inst_17911);
(statearr_17975_18015[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (26)))
{var inst_17934 = (state_17944[(2)]);var state_17944__$1 = state_17944;var statearr_17976_18016 = state_17944__$1;(statearr_17976_18016[(2)] = inst_17934);
(statearr_17976_18016[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (16)))
{var inst_17914 = (state_17944[(2)]);var inst_17915 = calc_state.call(null);var inst_17888 = inst_17915;var state_17944__$1 = (function (){var statearr_17977 = state_17944;(statearr_17977[(7)] = inst_17888);
(statearr_17977[(18)] = inst_17914);
return statearr_17977;
})();var statearr_17978_18017 = state_17944__$1;(statearr_17978_18017[(2)] = null);
(statearr_17978_18017[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (10)))
{var inst_17903 = (state_17944[(8)]);var inst_17904 = (state_17944[(16)]);var inst_17902 = (state_17944[(2)]);var inst_17903__$1 = cljs.core.nth.call(null,inst_17902,(0),null);var inst_17904__$1 = cljs.core.nth.call(null,inst_17902,(1),null);var inst_17905 = (inst_17903__$1 == null);var inst_17906 = cljs.core._EQ_.call(null,inst_17904__$1,change);var inst_17907 = (inst_17905) || (inst_17906);var state_17944__$1 = (function (){var statearr_17979 = state_17944;(statearr_17979[(8)] = inst_17903__$1);
(statearr_17979[(16)] = inst_17904__$1);
return statearr_17979;
})();if(cljs.core.truth_(inst_17907))
{var statearr_17980_18018 = state_17944__$1;(statearr_17980_18018[(1)] = (11));
} else
{var statearr_17981_18019 = state_17944__$1;(statearr_17981_18019[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (18)))
{var inst_17898 = (state_17944[(17)]);var inst_17899 = (state_17944[(15)]);var inst_17904 = (state_17944[(16)]);var inst_17921 = cljs.core.empty_QMARK_.call(null,inst_17899);var inst_17922 = inst_17898.call(null,inst_17904);var inst_17923 = cljs.core.not.call(null,inst_17922);var inst_17924 = (inst_17921) && (inst_17923);var state_17944__$1 = state_17944;var statearr_17982_18020 = state_17944__$1;(statearr_17982_18020[(2)] = inst_17924);
(statearr_17982_18020[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17945 === (8)))
{var inst_17888 = (state_17944[(7)]);var state_17944__$1 = state_17944;var statearr_17983_18021 = state_17944__$1;(statearr_17983_18021[(2)] = inst_17888);
(statearr_17983_18021[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto___17991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11548__auto__,c__11604__auto___17991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_17987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17987[(0)] = state_machine__11549__auto__);
(statearr_17987[(1)] = (1));
return statearr_17987;
});
var state_machine__11549__auto____1 = (function (state_17944){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_17944);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e17988){if((e17988 instanceof Object))
{var ex__11552__auto__ = e17988;var statearr_17989_18022 = state_17944;(statearr_17989_18022[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17944);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17988;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18023 = state_17944;
state_17944 = G__18023;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_17944){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_17944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___17991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11606__auto__ = (function (){var statearr_17990 = f__11605__auto__.call(null);(statearr_17990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___17991);
return statearr_17990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___17991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj18025 = {};return obj18025;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8722__auto__ = p;if(and__8722__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8722__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__9371__auto__ = (((p == null))?null:p);return (function (){var or__8734__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8722__auto__ = p;if(and__8722__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8722__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__9371__auto__ = (((p == null))?null:p);return (function (){var or__8734__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8722__auto__ = p;if(and__8722__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8722__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__9371__auto__ = (((p == null))?null:p);return (function (){var or__8734__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8722__auto__ = p;if(and__8722__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8722__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__9371__auto__ = (((p == null))?null:p);return (function (){var or__8734__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9371__auto__)]);if(or__8734__auto__)
{return or__8734__auto__;
} else
{var or__8734__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8734__auto____$1)
{return or__8734__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__8734__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8734__auto__))
{return or__8734__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8734__auto__,mults){
return (function (p1__18026_SHARP_){if(cljs.core.truth_(p1__18026_SHARP_.call(null,topic)))
{return p1__18026_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18026_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8734__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18149 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18150){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18150 = meta18150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18149.cljs$lang$type = true;
cljs.core.async.t18149.cljs$lang$ctorStr = "cljs.core.async/t18149";
cljs.core.async.t18149.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9311__auto__,writer__9312__auto__,opt__9313__auto__){return cljs.core._write.call(null,writer__9312__auto__,"cljs.core.async/t18149");
});})(mults,ensure_mult))
;
cljs.core.async.t18149.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18149.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18149.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18149.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18149.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18149.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18151){var self__ = this;
var _18151__$1 = this;return self__.meta18150;
});})(mults,ensure_mult))
;
cljs.core.async.t18149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18151,meta18150__$1){var self__ = this;
var _18151__$1 = this;return (new cljs.core.async.t18149(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18150__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18149 = ((function (mults,ensure_mult){
return (function __GT_t18149(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18150){return (new cljs.core.async.t18149(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18150));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18149(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11604__auto___18271 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___18271,mults,ensure_mult,p){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___18271,mults,ensure_mult,p){
return (function (state_18223){var state_val_18224 = (state_18223[(1)]);if((state_val_18224 === (7)))
{var inst_18219 = (state_18223[(2)]);var state_18223__$1 = state_18223;var statearr_18225_18272 = state_18223__$1;(statearr_18225_18272[(2)] = inst_18219);
(statearr_18225_18272[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (20)))
{var state_18223__$1 = state_18223;var statearr_18226_18273 = state_18223__$1;(statearr_18226_18273[(2)] = null);
(statearr_18226_18273[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (1)))
{var state_18223__$1 = state_18223;var statearr_18227_18274 = state_18223__$1;(statearr_18227_18274[(2)] = null);
(statearr_18227_18274[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (24)))
{var inst_18202 = (state_18223[(7)]);var inst_18211 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18202);var state_18223__$1 = state_18223;var statearr_18228_18275 = state_18223__$1;(statearr_18228_18275[(2)] = inst_18211);
(statearr_18228_18275[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (4)))
{var inst_18154 = (state_18223[(8)]);var inst_18154__$1 = (state_18223[(2)]);var inst_18155 = (inst_18154__$1 == null);var state_18223__$1 = (function (){var statearr_18229 = state_18223;(statearr_18229[(8)] = inst_18154__$1);
return statearr_18229;
})();if(cljs.core.truth_(inst_18155))
{var statearr_18230_18276 = state_18223__$1;(statearr_18230_18276[(1)] = (5));
} else
{var statearr_18231_18277 = state_18223__$1;(statearr_18231_18277[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (15)))
{var inst_18196 = (state_18223[(2)]);var state_18223__$1 = state_18223;var statearr_18232_18278 = state_18223__$1;(statearr_18232_18278[(2)] = inst_18196);
(statearr_18232_18278[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (21)))
{var inst_18216 = (state_18223[(2)]);var state_18223__$1 = (function (){var statearr_18233 = state_18223;(statearr_18233[(9)] = inst_18216);
return statearr_18233;
})();var statearr_18234_18279 = state_18223__$1;(statearr_18234_18279[(2)] = null);
(statearr_18234_18279[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (13)))
{var inst_18178 = (state_18223[(10)]);var inst_18180 = cljs.core.chunked_seq_QMARK_.call(null,inst_18178);var state_18223__$1 = state_18223;if(inst_18180)
{var statearr_18235_18280 = state_18223__$1;(statearr_18235_18280[(1)] = (16));
} else
{var statearr_18236_18281 = state_18223__$1;(statearr_18236_18281[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (22)))
{var inst_18208 = (state_18223[(2)]);var state_18223__$1 = state_18223;if(cljs.core.truth_(inst_18208))
{var statearr_18237_18282 = state_18223__$1;(statearr_18237_18282[(1)] = (23));
} else
{var statearr_18238_18283 = state_18223__$1;(statearr_18238_18283[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (6)))
{var inst_18204 = (state_18223[(11)]);var inst_18202 = (state_18223[(7)]);var inst_18154 = (state_18223[(8)]);var inst_18202__$1 = topic_fn.call(null,inst_18154);var inst_18203 = cljs.core.deref.call(null,mults);var inst_18204__$1 = cljs.core.get.call(null,inst_18203,inst_18202__$1);var state_18223__$1 = (function (){var statearr_18239 = state_18223;(statearr_18239[(11)] = inst_18204__$1);
(statearr_18239[(7)] = inst_18202__$1);
return statearr_18239;
})();if(cljs.core.truth_(inst_18204__$1))
{var statearr_18240_18284 = state_18223__$1;(statearr_18240_18284[(1)] = (19));
} else
{var statearr_18241_18285 = state_18223__$1;(statearr_18241_18285[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (25)))
{var inst_18213 = (state_18223[(2)]);var state_18223__$1 = state_18223;var statearr_18242_18286 = state_18223__$1;(statearr_18242_18286[(2)] = inst_18213);
(statearr_18242_18286[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (17)))
{var inst_18178 = (state_18223[(10)]);var inst_18187 = cljs.core.first.call(null,inst_18178);var inst_18188 = cljs.core.async.muxch_STAR_.call(null,inst_18187);var inst_18189 = cljs.core.async.close_BANG_.call(null,inst_18188);var inst_18190 = cljs.core.next.call(null,inst_18178);var inst_18164 = inst_18190;var inst_18165 = null;var inst_18166 = (0);var inst_18167 = (0);var state_18223__$1 = (function (){var statearr_18243 = state_18223;(statearr_18243[(12)] = inst_18165);
(statearr_18243[(13)] = inst_18164);
(statearr_18243[(14)] = inst_18167);
(statearr_18243[(15)] = inst_18189);
(statearr_18243[(16)] = inst_18166);
return statearr_18243;
})();var statearr_18244_18287 = state_18223__$1;(statearr_18244_18287[(2)] = null);
(statearr_18244_18287[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (3)))
{var inst_18221 = (state_18223[(2)]);var state_18223__$1 = state_18223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18223__$1,inst_18221);
} else
{if((state_val_18224 === (12)))
{var inst_18198 = (state_18223[(2)]);var state_18223__$1 = state_18223;var statearr_18245_18288 = state_18223__$1;(statearr_18245_18288[(2)] = inst_18198);
(statearr_18245_18288[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (2)))
{var state_18223__$1 = state_18223;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18223__$1,(4),ch);
} else
{if((state_val_18224 === (23)))
{var state_18223__$1 = state_18223;var statearr_18246_18289 = state_18223__$1;(statearr_18246_18289[(2)] = null);
(statearr_18246_18289[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (19)))
{var inst_18204 = (state_18223[(11)]);var inst_18154 = (state_18223[(8)]);var inst_18206 = cljs.core.async.muxch_STAR_.call(null,inst_18204);var state_18223__$1 = state_18223;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18223__$1,(22),inst_18206,inst_18154);
} else
{if((state_val_18224 === (11)))
{var inst_18178 = (state_18223[(10)]);var inst_18164 = (state_18223[(13)]);var inst_18178__$1 = cljs.core.seq.call(null,inst_18164);var state_18223__$1 = (function (){var statearr_18247 = state_18223;(statearr_18247[(10)] = inst_18178__$1);
return statearr_18247;
})();if(inst_18178__$1)
{var statearr_18248_18290 = state_18223__$1;(statearr_18248_18290[(1)] = (13));
} else
{var statearr_18249_18291 = state_18223__$1;(statearr_18249_18291[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (9)))
{var inst_18200 = (state_18223[(2)]);var state_18223__$1 = state_18223;var statearr_18250_18292 = state_18223__$1;(statearr_18250_18292[(2)] = inst_18200);
(statearr_18250_18292[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (5)))
{var inst_18161 = cljs.core.deref.call(null,mults);var inst_18162 = cljs.core.vals.call(null,inst_18161);var inst_18163 = cljs.core.seq.call(null,inst_18162);var inst_18164 = inst_18163;var inst_18165 = null;var inst_18166 = (0);var inst_18167 = (0);var state_18223__$1 = (function (){var statearr_18251 = state_18223;(statearr_18251[(12)] = inst_18165);
(statearr_18251[(13)] = inst_18164);
(statearr_18251[(14)] = inst_18167);
(statearr_18251[(16)] = inst_18166);
return statearr_18251;
})();var statearr_18252_18293 = state_18223__$1;(statearr_18252_18293[(2)] = null);
(statearr_18252_18293[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (14)))
{var state_18223__$1 = state_18223;var statearr_18256_18294 = state_18223__$1;(statearr_18256_18294[(2)] = null);
(statearr_18256_18294[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (16)))
{var inst_18178 = (state_18223[(10)]);var inst_18182 = cljs.core.chunk_first.call(null,inst_18178);var inst_18183 = cljs.core.chunk_rest.call(null,inst_18178);var inst_18184 = cljs.core.count.call(null,inst_18182);var inst_18164 = inst_18183;var inst_18165 = inst_18182;var inst_18166 = inst_18184;var inst_18167 = (0);var state_18223__$1 = (function (){var statearr_18257 = state_18223;(statearr_18257[(12)] = inst_18165);
(statearr_18257[(13)] = inst_18164);
(statearr_18257[(14)] = inst_18167);
(statearr_18257[(16)] = inst_18166);
return statearr_18257;
})();var statearr_18258_18295 = state_18223__$1;(statearr_18258_18295[(2)] = null);
(statearr_18258_18295[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (10)))
{var inst_18165 = (state_18223[(12)]);var inst_18164 = (state_18223[(13)]);var inst_18167 = (state_18223[(14)]);var inst_18166 = (state_18223[(16)]);var inst_18172 = cljs.core._nth.call(null,inst_18165,inst_18167);var inst_18173 = cljs.core.async.muxch_STAR_.call(null,inst_18172);var inst_18174 = cljs.core.async.close_BANG_.call(null,inst_18173);var inst_18175 = (inst_18167 + (1));var tmp18253 = inst_18165;var tmp18254 = inst_18164;var tmp18255 = inst_18166;var inst_18164__$1 = tmp18254;var inst_18165__$1 = tmp18253;var inst_18166__$1 = tmp18255;var inst_18167__$1 = inst_18175;var state_18223__$1 = (function (){var statearr_18259 = state_18223;(statearr_18259[(12)] = inst_18165__$1);
(statearr_18259[(13)] = inst_18164__$1);
(statearr_18259[(14)] = inst_18167__$1);
(statearr_18259[(16)] = inst_18166__$1);
(statearr_18259[(17)] = inst_18174);
return statearr_18259;
})();var statearr_18260_18296 = state_18223__$1;(statearr_18260_18296[(2)] = null);
(statearr_18260_18296[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (18)))
{var inst_18193 = (state_18223[(2)]);var state_18223__$1 = state_18223;var statearr_18261_18297 = state_18223__$1;(statearr_18261_18297[(2)] = inst_18193);
(statearr_18261_18297[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18224 === (8)))
{var inst_18167 = (state_18223[(14)]);var inst_18166 = (state_18223[(16)]);var inst_18169 = (inst_18167 < inst_18166);var inst_18170 = inst_18169;var state_18223__$1 = state_18223;if(cljs.core.truth_(inst_18170))
{var statearr_18262_18298 = state_18223__$1;(statearr_18262_18298[(1)] = (10));
} else
{var statearr_18263_18299 = state_18223__$1;(statearr_18263_18299[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto___18271,mults,ensure_mult,p))
;return ((function (switch__11548__auto__,c__11604__auto___18271,mults,ensure_mult,p){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_18267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18267[(0)] = state_machine__11549__auto__);
(statearr_18267[(1)] = (1));
return statearr_18267;
});
var state_machine__11549__auto____1 = (function (state_18223){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_18223);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e18268){if((e18268 instanceof Object))
{var ex__11552__auto__ = e18268;var statearr_18269_18300 = state_18223;(statearr_18269_18300[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18223);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18268;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18301 = state_18223;
state_18223 = G__18301;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_18223){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_18223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___18271,mults,ensure_mult,p))
})();var state__11606__auto__ = (function (){var statearr_18270 = f__11605__auto__.call(null);(statearr_18270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___18271);
return statearr_18270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___18271,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11604__auto___18438 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___18438,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___18438,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18408){var state_val_18409 = (state_18408[(1)]);if((state_val_18409 === (7)))
{var state_18408__$1 = state_18408;var statearr_18410_18439 = state_18408__$1;(statearr_18410_18439[(2)] = null);
(statearr_18410_18439[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18409 === (1)))
{var state_18408__$1 = state_18408;var statearr_18411_18440 = state_18408__$1;(statearr_18411_18440[(2)] = null);
(statearr_18411_18440[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18409 === (4)))
{var inst_18372 = (state_18408[(7)]);var inst_18374 = (inst_18372 < cnt);var state_18408__$1 = state_18408;if(cljs.core.truth_(inst_18374))
{var statearr_18412_18441 = state_18408__$1;(statearr_18412_18441[(1)] = (6));
} else
{var statearr_18413_18442 = state_18408__$1;(statearr_18413_18442[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18409 === (15)))
{var inst_18404 = (state_18408[(2)]);var state_18408__$1 = state_18408;var statearr_18414_18443 = state_18408__$1;(statearr_18414_18443[(2)] = inst_18404);
(statearr_18414_18443[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18409 === (13)))
{var inst_18397 = cljs.core.async.close_BANG_.call(null,out);var state_18408__$1 = state_18408;var statearr_18415_18444 = state_18408__$1;(statearr_18415_18444[(2)] = inst_18397);
(statearr_18415_18444[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18409 === (6)))
{var state_18408__$1 = state_18408;var statearr_18416_18445 = state_18408__$1;(statearr_18416_18445[(2)] = null);
(statearr_18416_18445[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18409 === (3)))
{var inst_18406 = (state_18408[(2)]);var state_18408__$1 = state_18408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18408__$1,inst_18406);
} else
{if((state_val_18409 === (12)))
{var inst_18394 = (state_18408[(8)]);var inst_18394__$1 = (state_18408[(2)]);var inst_18395 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18394__$1);var state_18408__$1 = (function (){var statearr_18417 = state_18408;(statearr_18417[(8)] = inst_18394__$1);
return statearr_18417;
})();if(cljs.core.truth_(inst_18395))
{var statearr_18418_18446 = state_18408__$1;(statearr_18418_18446[(1)] = (13));
} else
{var statearr_18419_18447 = state_18408__$1;(statearr_18419_18447[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18409 === (2)))
{var inst_18371 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18372 = (0);var state_18408__$1 = (function (){var statearr_18420 = state_18408;(statearr_18420[(9)] = inst_18371);
(statearr_18420[(7)] = inst_18372);
return statearr_18420;
})();var statearr_18421_18448 = state_18408__$1;(statearr_18421_18448[(2)] = null);
(statearr_18421_18448[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18409 === (11)))
{var inst_18372 = (state_18408[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18408,(10),Object,null,(9));var inst_18381 = chs__$1.call(null,inst_18372);var inst_18382 = done.call(null,inst_18372);var inst_18383 = cljs.core.async.take_BANG_.call(null,inst_18381,inst_18382);var state_18408__$1 = state_18408;var statearr_18422_18449 = state_18408__$1;(statearr_18422_18449[(2)] = inst_18383);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18408__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18409 === (9)))
{var inst_18372 = (state_18408[(7)]);var inst_18385 = (state_18408[(2)]);var inst_18386 = (inst_18372 + (1));var inst_18372__$1 = inst_18386;var state_18408__$1 = (function (){var statearr_18423 = state_18408;(statearr_18423[(7)] = inst_18372__$1);
(statearr_18423[(10)] = inst_18385);
return statearr_18423;
})();var statearr_18424_18450 = state_18408__$1;(statearr_18424_18450[(2)] = null);
(statearr_18424_18450[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18409 === (5)))
{var inst_18392 = (state_18408[(2)]);var state_18408__$1 = (function (){var statearr_18425 = state_18408;(statearr_18425[(11)] = inst_18392);
return statearr_18425;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18408__$1,(12),dchan);
} else
{if((state_val_18409 === (14)))
{var inst_18394 = (state_18408[(8)]);var inst_18399 = cljs.core.apply.call(null,f,inst_18394);var state_18408__$1 = state_18408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18408__$1,(16),out,inst_18399);
} else
{if((state_val_18409 === (16)))
{var inst_18401 = (state_18408[(2)]);var state_18408__$1 = (function (){var statearr_18426 = state_18408;(statearr_18426[(12)] = inst_18401);
return statearr_18426;
})();var statearr_18427_18451 = state_18408__$1;(statearr_18427_18451[(2)] = null);
(statearr_18427_18451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18409 === (10)))
{var inst_18376 = (state_18408[(2)]);var inst_18377 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18408__$1 = (function (){var statearr_18428 = state_18408;(statearr_18428[(13)] = inst_18376);
return statearr_18428;
})();var statearr_18429_18452 = state_18408__$1;(statearr_18429_18452[(2)] = inst_18377);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18408__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18409 === (8)))
{var inst_18390 = (state_18408[(2)]);var state_18408__$1 = state_18408;var statearr_18430_18453 = state_18408__$1;(statearr_18430_18453[(2)] = inst_18390);
(statearr_18430_18453[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto___18438,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11548__auto__,c__11604__auto___18438,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_18434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18434[(0)] = state_machine__11549__auto__);
(statearr_18434[(1)] = (1));
return statearr_18434;
});
var state_machine__11549__auto____1 = (function (state_18408){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_18408);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e18435){if((e18435 instanceof Object))
{var ex__11552__auto__ = e18435;var statearr_18436_18454 = state_18408;(statearr_18436_18454[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18408);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18435;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18455 = state_18408;
state_18408 = G__18455;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_18408){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_18408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___18438,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11606__auto__ = (function (){var statearr_18437 = f__11605__auto__.call(null);(statearr_18437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___18438);
return statearr_18437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___18438,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11604__auto___18563 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___18563,out){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___18563,out){
return (function (state_18539){var state_val_18540 = (state_18539[(1)]);if((state_val_18540 === (7)))
{var inst_18519 = (state_18539[(7)]);var inst_18518 = (state_18539[(8)]);var inst_18518__$1 = (state_18539[(2)]);var inst_18519__$1 = cljs.core.nth.call(null,inst_18518__$1,(0),null);var inst_18520 = cljs.core.nth.call(null,inst_18518__$1,(1),null);var inst_18521 = (inst_18519__$1 == null);var state_18539__$1 = (function (){var statearr_18541 = state_18539;(statearr_18541[(9)] = inst_18520);
(statearr_18541[(7)] = inst_18519__$1);
(statearr_18541[(8)] = inst_18518__$1);
return statearr_18541;
})();if(cljs.core.truth_(inst_18521))
{var statearr_18542_18564 = state_18539__$1;(statearr_18542_18564[(1)] = (8));
} else
{var statearr_18543_18565 = state_18539__$1;(statearr_18543_18565[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18540 === (1)))
{var inst_18510 = cljs.core.vec.call(null,chs);var inst_18511 = inst_18510;var state_18539__$1 = (function (){var statearr_18544 = state_18539;(statearr_18544[(10)] = inst_18511);
return statearr_18544;
})();var statearr_18545_18566 = state_18539__$1;(statearr_18545_18566[(2)] = null);
(statearr_18545_18566[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18540 === (4)))
{var inst_18511 = (state_18539[(10)]);var state_18539__$1 = state_18539;return cljs.core.async.ioc_alts_BANG_.call(null,state_18539__$1,(7),inst_18511);
} else
{if((state_val_18540 === (6)))
{var inst_18535 = (state_18539[(2)]);var state_18539__$1 = state_18539;var statearr_18546_18567 = state_18539__$1;(statearr_18546_18567[(2)] = inst_18535);
(statearr_18546_18567[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18540 === (3)))
{var inst_18537 = (state_18539[(2)]);var state_18539__$1 = state_18539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18539__$1,inst_18537);
} else
{if((state_val_18540 === (2)))
{var inst_18511 = (state_18539[(10)]);var inst_18513 = cljs.core.count.call(null,inst_18511);var inst_18514 = (inst_18513 > (0));var state_18539__$1 = state_18539;if(cljs.core.truth_(inst_18514))
{var statearr_18548_18568 = state_18539__$1;(statearr_18548_18568[(1)] = (4));
} else
{var statearr_18549_18569 = state_18539__$1;(statearr_18549_18569[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18540 === (11)))
{var inst_18511 = (state_18539[(10)]);var inst_18528 = (state_18539[(2)]);var tmp18547 = inst_18511;var inst_18511__$1 = tmp18547;var state_18539__$1 = (function (){var statearr_18550 = state_18539;(statearr_18550[(10)] = inst_18511__$1);
(statearr_18550[(11)] = inst_18528);
return statearr_18550;
})();var statearr_18551_18570 = state_18539__$1;(statearr_18551_18570[(2)] = null);
(statearr_18551_18570[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18540 === (9)))
{var inst_18519 = (state_18539[(7)]);var state_18539__$1 = state_18539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18539__$1,(11),out,inst_18519);
} else
{if((state_val_18540 === (5)))
{var inst_18533 = cljs.core.async.close_BANG_.call(null,out);var state_18539__$1 = state_18539;var statearr_18552_18571 = state_18539__$1;(statearr_18552_18571[(2)] = inst_18533);
(statearr_18552_18571[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18540 === (10)))
{var inst_18531 = (state_18539[(2)]);var state_18539__$1 = state_18539;var statearr_18553_18572 = state_18539__$1;(statearr_18553_18572[(2)] = inst_18531);
(statearr_18553_18572[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18540 === (8)))
{var inst_18520 = (state_18539[(9)]);var inst_18511 = (state_18539[(10)]);var inst_18519 = (state_18539[(7)]);var inst_18518 = (state_18539[(8)]);var inst_18523 = (function (){var c = inst_18520;var v = inst_18519;var vec__18516 = inst_18518;var cs = inst_18511;return ((function (c,v,vec__18516,cs,inst_18520,inst_18511,inst_18519,inst_18518,state_val_18540,c__11604__auto___18563,out){
return (function (p1__18456_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18456_SHARP_);
});
;})(c,v,vec__18516,cs,inst_18520,inst_18511,inst_18519,inst_18518,state_val_18540,c__11604__auto___18563,out))
})();var inst_18524 = cljs.core.filterv.call(null,inst_18523,inst_18511);var inst_18511__$1 = inst_18524;var state_18539__$1 = (function (){var statearr_18554 = state_18539;(statearr_18554[(10)] = inst_18511__$1);
return statearr_18554;
})();var statearr_18555_18573 = state_18539__$1;(statearr_18555_18573[(2)] = null);
(statearr_18555_18573[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto___18563,out))
;return ((function (switch__11548__auto__,c__11604__auto___18563,out){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_18559 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18559[(0)] = state_machine__11549__auto__);
(statearr_18559[(1)] = (1));
return statearr_18559;
});
var state_machine__11549__auto____1 = (function (state_18539){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_18539);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e18560){if((e18560 instanceof Object))
{var ex__11552__auto__ = e18560;var statearr_18561_18574 = state_18539;(statearr_18561_18574[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18539);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18560;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18575 = state_18539;
state_18539 = G__18575;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_18539){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_18539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___18563,out))
})();var state__11606__auto__ = (function (){var statearr_18562 = f__11605__auto__.call(null);(statearr_18562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___18563);
return statearr_18562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___18563,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11604__auto___18668 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___18668,out){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___18668,out){
return (function (state_18645){var state_val_18646 = (state_18645[(1)]);if((state_val_18646 === (7)))
{var inst_18627 = (state_18645[(7)]);var inst_18627__$1 = (state_18645[(2)]);var inst_18628 = (inst_18627__$1 == null);var inst_18629 = cljs.core.not.call(null,inst_18628);var state_18645__$1 = (function (){var statearr_18647 = state_18645;(statearr_18647[(7)] = inst_18627__$1);
return statearr_18647;
})();if(inst_18629)
{var statearr_18648_18669 = state_18645__$1;(statearr_18648_18669[(1)] = (8));
} else
{var statearr_18649_18670 = state_18645__$1;(statearr_18649_18670[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18646 === (1)))
{var inst_18622 = (0);var state_18645__$1 = (function (){var statearr_18650 = state_18645;(statearr_18650[(8)] = inst_18622);
return statearr_18650;
})();var statearr_18651_18671 = state_18645__$1;(statearr_18651_18671[(2)] = null);
(statearr_18651_18671[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18646 === (4)))
{var state_18645__$1 = state_18645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18645__$1,(7),ch);
} else
{if((state_val_18646 === (6)))
{var inst_18640 = (state_18645[(2)]);var state_18645__$1 = state_18645;var statearr_18652_18672 = state_18645__$1;(statearr_18652_18672[(2)] = inst_18640);
(statearr_18652_18672[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18646 === (3)))
{var inst_18642 = (state_18645[(2)]);var inst_18643 = cljs.core.async.close_BANG_.call(null,out);var state_18645__$1 = (function (){var statearr_18653 = state_18645;(statearr_18653[(9)] = inst_18642);
return statearr_18653;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18645__$1,inst_18643);
} else
{if((state_val_18646 === (2)))
{var inst_18622 = (state_18645[(8)]);var inst_18624 = (inst_18622 < n);var state_18645__$1 = state_18645;if(cljs.core.truth_(inst_18624))
{var statearr_18654_18673 = state_18645__$1;(statearr_18654_18673[(1)] = (4));
} else
{var statearr_18655_18674 = state_18645__$1;(statearr_18655_18674[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18646 === (11)))
{var inst_18622 = (state_18645[(8)]);var inst_18632 = (state_18645[(2)]);var inst_18633 = (inst_18622 + (1));var inst_18622__$1 = inst_18633;var state_18645__$1 = (function (){var statearr_18656 = state_18645;(statearr_18656[(8)] = inst_18622__$1);
(statearr_18656[(10)] = inst_18632);
return statearr_18656;
})();var statearr_18657_18675 = state_18645__$1;(statearr_18657_18675[(2)] = null);
(statearr_18657_18675[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18646 === (9)))
{var state_18645__$1 = state_18645;var statearr_18658_18676 = state_18645__$1;(statearr_18658_18676[(2)] = null);
(statearr_18658_18676[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18646 === (5)))
{var state_18645__$1 = state_18645;var statearr_18659_18677 = state_18645__$1;(statearr_18659_18677[(2)] = null);
(statearr_18659_18677[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18646 === (10)))
{var inst_18637 = (state_18645[(2)]);var state_18645__$1 = state_18645;var statearr_18660_18678 = state_18645__$1;(statearr_18660_18678[(2)] = inst_18637);
(statearr_18660_18678[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18646 === (8)))
{var inst_18627 = (state_18645[(7)]);var state_18645__$1 = state_18645;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18645__$1,(11),out,inst_18627);
} else
{return null;
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
});})(c__11604__auto___18668,out))
;return ((function (switch__11548__auto__,c__11604__auto___18668,out){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_18664 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18664[(0)] = state_machine__11549__auto__);
(statearr_18664[(1)] = (1));
return statearr_18664;
});
var state_machine__11549__auto____1 = (function (state_18645){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_18645);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e18665){if((e18665 instanceof Object))
{var ex__11552__auto__ = e18665;var statearr_18666_18679 = state_18645;(statearr_18666_18679[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18645);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18665;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18680 = state_18645;
state_18645 = G__18680;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_18645){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_18645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___18668,out))
})();var state__11606__auto__ = (function (){var statearr_18667 = f__11605__auto__.call(null);(statearr_18667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___18668);
return statearr_18667;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___18668,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t18688 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18688 = (function (ch,f,map_LT_,meta18689){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18689 = meta18689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18688.cljs$lang$type = true;
cljs.core.async.t18688.cljs$lang$ctorStr = "cljs.core.async/t18688";
cljs.core.async.t18688.cljs$lang$ctorPrWriter = (function (this__9311__auto__,writer__9312__auto__,opt__9313__auto__){return cljs.core._write.call(null,writer__9312__auto__,"cljs.core.async/t18688");
});
cljs.core.async.t18688.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18688.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t18688.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18688.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t18691 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18691 = (function (fn1,_,meta18689,ch,f,map_LT_,meta18692){
this.fn1 = fn1;
this._ = _;
this.meta18689 = meta18689;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18692 = meta18692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18691.cljs$lang$type = true;
cljs.core.async.t18691.cljs$lang$ctorStr = "cljs.core.async/t18691";
cljs.core.async.t18691.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9311__auto__,writer__9312__auto__,opt__9313__auto__){return cljs.core._write.call(null,writer__9312__auto__,"cljs.core.async/t18691");
});})(___$1))
;
cljs.core.async.t18691.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t18691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__18681_SHARP_){return f1.call(null,(((p1__18681_SHARP_ == null))?null:self__.f.call(null,p1__18681_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t18691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18693){var self__ = this;
var _18693__$1 = this;return self__.meta18692;
});})(___$1))
;
cljs.core.async.t18691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18693,meta18692__$1){var self__ = this;
var _18693__$1 = this;return (new cljs.core.async.t18691(self__.fn1,self__._,self__.meta18689,self__.ch,self__.f,self__.map_LT_,meta18692__$1));
});})(___$1))
;
cljs.core.async.__GT_t18691 = ((function (___$1){
return (function __GT_t18691(fn1__$1,___$2,meta18689__$1,ch__$2,f__$2,map_LT___$2,meta18692){return (new cljs.core.async.t18691(fn1__$1,___$2,meta18689__$1,ch__$2,f__$2,map_LT___$2,meta18692));
});})(___$1))
;
}
return (new cljs.core.async.t18691(fn1,___$1,self__.meta18689,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8722__auto__ = ret;if(cljs.core.truth_(and__8722__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8722__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t18688.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18688.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18688.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t18688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18690){var self__ = this;
var _18690__$1 = this;return self__.meta18689;
});
cljs.core.async.t18688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18690,meta18689__$1){var self__ = this;
var _18690__$1 = this;return (new cljs.core.async.t18688(self__.ch,self__.f,self__.map_LT_,meta18689__$1));
});
cljs.core.async.__GT_t18688 = (function __GT_t18688(ch__$1,f__$1,map_LT___$1,meta18689){return (new cljs.core.async.t18688(ch__$1,f__$1,map_LT___$1,meta18689));
});
}
return (new cljs.core.async.t18688(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t18697 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18697 = (function (ch,f,map_GT_,meta18698){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18698 = meta18698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18697.cljs$lang$type = true;
cljs.core.async.t18697.cljs$lang$ctorStr = "cljs.core.async/t18697";
cljs.core.async.t18697.cljs$lang$ctorPrWriter = (function (this__9311__auto__,writer__9312__auto__,opt__9313__auto__){return cljs.core._write.call(null,writer__9312__auto__,"cljs.core.async/t18697");
});
cljs.core.async.t18697.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18697.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t18697.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18697.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18697.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18697.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18699){var self__ = this;
var _18699__$1 = this;return self__.meta18698;
});
cljs.core.async.t18697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18699,meta18698__$1){var self__ = this;
var _18699__$1 = this;return (new cljs.core.async.t18697(self__.ch,self__.f,self__.map_GT_,meta18698__$1));
});
cljs.core.async.__GT_t18697 = (function __GT_t18697(ch__$1,f__$1,map_GT___$1,meta18698){return (new cljs.core.async.t18697(ch__$1,f__$1,map_GT___$1,meta18698));
});
}
return (new cljs.core.async.t18697(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t18703 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18703 = (function (ch,p,filter_GT_,meta18704){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18704 = meta18704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18703.cljs$lang$type = true;
cljs.core.async.t18703.cljs$lang$ctorStr = "cljs.core.async/t18703";
cljs.core.async.t18703.cljs$lang$ctorPrWriter = (function (this__9311__auto__,writer__9312__auto__,opt__9313__auto__){return cljs.core._write.call(null,writer__9312__auto__,"cljs.core.async/t18703");
});
cljs.core.async.t18703.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18703.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t18703.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18703.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18703.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18703.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18703.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t18703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18705){var self__ = this;
var _18705__$1 = this;return self__.meta18704;
});
cljs.core.async.t18703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18705,meta18704__$1){var self__ = this;
var _18705__$1 = this;return (new cljs.core.async.t18703(self__.ch,self__.p,self__.filter_GT_,meta18704__$1));
});
cljs.core.async.__GT_t18703 = (function __GT_t18703(ch__$1,p__$1,filter_GT___$1,meta18704){return (new cljs.core.async.t18703(ch__$1,p__$1,filter_GT___$1,meta18704));
});
}
return (new cljs.core.async.t18703(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11604__auto___18788 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___18788,out){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___18788,out){
return (function (state_18767){var state_val_18768 = (state_18767[(1)]);if((state_val_18768 === (7)))
{var inst_18763 = (state_18767[(2)]);var state_18767__$1 = state_18767;var statearr_18769_18789 = state_18767__$1;(statearr_18769_18789[(2)] = inst_18763);
(statearr_18769_18789[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18768 === (1)))
{var state_18767__$1 = state_18767;var statearr_18770_18790 = state_18767__$1;(statearr_18770_18790[(2)] = null);
(statearr_18770_18790[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18768 === (4)))
{var inst_18749 = (state_18767[(7)]);var inst_18749__$1 = (state_18767[(2)]);var inst_18750 = (inst_18749__$1 == null);var state_18767__$1 = (function (){var statearr_18771 = state_18767;(statearr_18771[(7)] = inst_18749__$1);
return statearr_18771;
})();if(cljs.core.truth_(inst_18750))
{var statearr_18772_18791 = state_18767__$1;(statearr_18772_18791[(1)] = (5));
} else
{var statearr_18773_18792 = state_18767__$1;(statearr_18773_18792[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18768 === (6)))
{var inst_18749 = (state_18767[(7)]);var inst_18754 = p.call(null,inst_18749);var state_18767__$1 = state_18767;if(cljs.core.truth_(inst_18754))
{var statearr_18774_18793 = state_18767__$1;(statearr_18774_18793[(1)] = (8));
} else
{var statearr_18775_18794 = state_18767__$1;(statearr_18775_18794[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18768 === (3)))
{var inst_18765 = (state_18767[(2)]);var state_18767__$1 = state_18767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18767__$1,inst_18765);
} else
{if((state_val_18768 === (2)))
{var state_18767__$1 = state_18767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18767__$1,(4),ch);
} else
{if((state_val_18768 === (11)))
{var inst_18757 = (state_18767[(2)]);var state_18767__$1 = state_18767;var statearr_18776_18795 = state_18767__$1;(statearr_18776_18795[(2)] = inst_18757);
(statearr_18776_18795[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18768 === (9)))
{var state_18767__$1 = state_18767;var statearr_18777_18796 = state_18767__$1;(statearr_18777_18796[(2)] = null);
(statearr_18777_18796[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18768 === (5)))
{var inst_18752 = cljs.core.async.close_BANG_.call(null,out);var state_18767__$1 = state_18767;var statearr_18778_18797 = state_18767__$1;(statearr_18778_18797[(2)] = inst_18752);
(statearr_18778_18797[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18768 === (10)))
{var inst_18760 = (state_18767[(2)]);var state_18767__$1 = (function (){var statearr_18779 = state_18767;(statearr_18779[(8)] = inst_18760);
return statearr_18779;
})();var statearr_18780_18798 = state_18767__$1;(statearr_18780_18798[(2)] = null);
(statearr_18780_18798[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18768 === (8)))
{var inst_18749 = (state_18767[(7)]);var state_18767__$1 = state_18767;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18767__$1,(11),out,inst_18749);
} else
{return null;
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
});})(c__11604__auto___18788,out))
;return ((function (switch__11548__auto__,c__11604__auto___18788,out){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_18784 = [null,null,null,null,null,null,null,null,null];(statearr_18784[(0)] = state_machine__11549__auto__);
(statearr_18784[(1)] = (1));
return statearr_18784;
});
var state_machine__11549__auto____1 = (function (state_18767){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_18767);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e18785){if((e18785 instanceof Object))
{var ex__11552__auto__ = e18785;var statearr_18786_18799 = state_18767;(statearr_18786_18799[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18767);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18785;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18800 = state_18767;
state_18767 = G__18800;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_18767){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_18767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___18788,out))
})();var state__11606__auto__ = (function (){var statearr_18787 = f__11605__auto__.call(null);(statearr_18787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___18788);
return statearr_18787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___18788,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11604__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto__){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto__){
return (function (state_18966){var state_val_18967 = (state_18966[(1)]);if((state_val_18967 === (7)))
{var inst_18962 = (state_18966[(2)]);var state_18966__$1 = state_18966;var statearr_18968_19009 = state_18966__$1;(statearr_18968_19009[(2)] = inst_18962);
(statearr_18968_19009[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (20)))
{var inst_18932 = (state_18966[(7)]);var inst_18943 = (state_18966[(2)]);var inst_18944 = cljs.core.next.call(null,inst_18932);var inst_18918 = inst_18944;var inst_18919 = null;var inst_18920 = (0);var inst_18921 = (0);var state_18966__$1 = (function (){var statearr_18969 = state_18966;(statearr_18969[(8)] = inst_18943);
(statearr_18969[(9)] = inst_18918);
(statearr_18969[(10)] = inst_18920);
(statearr_18969[(11)] = inst_18919);
(statearr_18969[(12)] = inst_18921);
return statearr_18969;
})();var statearr_18970_19010 = state_18966__$1;(statearr_18970_19010[(2)] = null);
(statearr_18970_19010[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (1)))
{var state_18966__$1 = state_18966;var statearr_18971_19011 = state_18966__$1;(statearr_18971_19011[(2)] = null);
(statearr_18971_19011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (4)))
{var inst_18907 = (state_18966[(13)]);var inst_18907__$1 = (state_18966[(2)]);var inst_18908 = (inst_18907__$1 == null);var state_18966__$1 = (function (){var statearr_18972 = state_18966;(statearr_18972[(13)] = inst_18907__$1);
return statearr_18972;
})();if(cljs.core.truth_(inst_18908))
{var statearr_18973_19012 = state_18966__$1;(statearr_18973_19012[(1)] = (5));
} else
{var statearr_18974_19013 = state_18966__$1;(statearr_18974_19013[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (15)))
{var state_18966__$1 = state_18966;var statearr_18978_19014 = state_18966__$1;(statearr_18978_19014[(2)] = null);
(statearr_18978_19014[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (21)))
{var state_18966__$1 = state_18966;var statearr_18979_19015 = state_18966__$1;(statearr_18979_19015[(2)] = null);
(statearr_18979_19015[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (13)))
{var inst_18918 = (state_18966[(9)]);var inst_18920 = (state_18966[(10)]);var inst_18919 = (state_18966[(11)]);var inst_18921 = (state_18966[(12)]);var inst_18928 = (state_18966[(2)]);var inst_18929 = (inst_18921 + (1));var tmp18975 = inst_18918;var tmp18976 = inst_18920;var tmp18977 = inst_18919;var inst_18918__$1 = tmp18975;var inst_18919__$1 = tmp18977;var inst_18920__$1 = tmp18976;var inst_18921__$1 = inst_18929;var state_18966__$1 = (function (){var statearr_18980 = state_18966;(statearr_18980[(14)] = inst_18928);
(statearr_18980[(9)] = inst_18918__$1);
(statearr_18980[(10)] = inst_18920__$1);
(statearr_18980[(11)] = inst_18919__$1);
(statearr_18980[(12)] = inst_18921__$1);
return statearr_18980;
})();var statearr_18981_19016 = state_18966__$1;(statearr_18981_19016[(2)] = null);
(statearr_18981_19016[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (22)))
{var state_18966__$1 = state_18966;var statearr_18982_19017 = state_18966__$1;(statearr_18982_19017[(2)] = null);
(statearr_18982_19017[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (6)))
{var inst_18907 = (state_18966[(13)]);var inst_18916 = f.call(null,inst_18907);var inst_18917 = cljs.core.seq.call(null,inst_18916);var inst_18918 = inst_18917;var inst_18919 = null;var inst_18920 = (0);var inst_18921 = (0);var state_18966__$1 = (function (){var statearr_18983 = state_18966;(statearr_18983[(9)] = inst_18918);
(statearr_18983[(10)] = inst_18920);
(statearr_18983[(11)] = inst_18919);
(statearr_18983[(12)] = inst_18921);
return statearr_18983;
})();var statearr_18984_19018 = state_18966__$1;(statearr_18984_19018[(2)] = null);
(statearr_18984_19018[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (17)))
{var inst_18932 = (state_18966[(7)]);var inst_18936 = cljs.core.chunk_first.call(null,inst_18932);var inst_18937 = cljs.core.chunk_rest.call(null,inst_18932);var inst_18938 = cljs.core.count.call(null,inst_18936);var inst_18918 = inst_18937;var inst_18919 = inst_18936;var inst_18920 = inst_18938;var inst_18921 = (0);var state_18966__$1 = (function (){var statearr_18985 = state_18966;(statearr_18985[(9)] = inst_18918);
(statearr_18985[(10)] = inst_18920);
(statearr_18985[(11)] = inst_18919);
(statearr_18985[(12)] = inst_18921);
return statearr_18985;
})();var statearr_18986_19019 = state_18966__$1;(statearr_18986_19019[(2)] = null);
(statearr_18986_19019[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (3)))
{var inst_18964 = (state_18966[(2)]);var state_18966__$1 = state_18966;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18966__$1,inst_18964);
} else
{if((state_val_18967 === (12)))
{var inst_18952 = (state_18966[(2)]);var state_18966__$1 = state_18966;var statearr_18987_19020 = state_18966__$1;(statearr_18987_19020[(2)] = inst_18952);
(statearr_18987_19020[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (2)))
{var state_18966__$1 = state_18966;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18966__$1,(4),in$);
} else
{if((state_val_18967 === (23)))
{var inst_18960 = (state_18966[(2)]);var state_18966__$1 = state_18966;var statearr_18988_19021 = state_18966__$1;(statearr_18988_19021[(2)] = inst_18960);
(statearr_18988_19021[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (19)))
{var inst_18947 = (state_18966[(2)]);var state_18966__$1 = state_18966;var statearr_18989_19022 = state_18966__$1;(statearr_18989_19022[(2)] = inst_18947);
(statearr_18989_19022[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (11)))
{var inst_18932 = (state_18966[(7)]);var inst_18918 = (state_18966[(9)]);var inst_18932__$1 = cljs.core.seq.call(null,inst_18918);var state_18966__$1 = (function (){var statearr_18990 = state_18966;(statearr_18990[(7)] = inst_18932__$1);
return statearr_18990;
})();if(inst_18932__$1)
{var statearr_18991_19023 = state_18966__$1;(statearr_18991_19023[(1)] = (14));
} else
{var statearr_18992_19024 = state_18966__$1;(statearr_18992_19024[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (9)))
{var inst_18954 = (state_18966[(2)]);var inst_18955 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_18966__$1 = (function (){var statearr_18993 = state_18966;(statearr_18993[(15)] = inst_18954);
return statearr_18993;
})();if(cljs.core.truth_(inst_18955))
{var statearr_18994_19025 = state_18966__$1;(statearr_18994_19025[(1)] = (21));
} else
{var statearr_18995_19026 = state_18966__$1;(statearr_18995_19026[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (5)))
{var inst_18910 = cljs.core.async.close_BANG_.call(null,out);var state_18966__$1 = state_18966;var statearr_18996_19027 = state_18966__$1;(statearr_18996_19027[(2)] = inst_18910);
(statearr_18996_19027[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (14)))
{var inst_18932 = (state_18966[(7)]);var inst_18934 = cljs.core.chunked_seq_QMARK_.call(null,inst_18932);var state_18966__$1 = state_18966;if(inst_18934)
{var statearr_18997_19028 = state_18966__$1;(statearr_18997_19028[(1)] = (17));
} else
{var statearr_18998_19029 = state_18966__$1;(statearr_18998_19029[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (16)))
{var inst_18950 = (state_18966[(2)]);var state_18966__$1 = state_18966;var statearr_18999_19030 = state_18966__$1;(statearr_18999_19030[(2)] = inst_18950);
(statearr_18999_19030[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18967 === (10)))
{var inst_18919 = (state_18966[(11)]);var inst_18921 = (state_18966[(12)]);var inst_18926 = cljs.core._nth.call(null,inst_18919,inst_18921);var state_18966__$1 = state_18966;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18966__$1,(13),out,inst_18926);
} else
{if((state_val_18967 === (18)))
{var inst_18932 = (state_18966[(7)]);var inst_18941 = cljs.core.first.call(null,inst_18932);var state_18966__$1 = state_18966;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18966__$1,(20),out,inst_18941);
} else
{if((state_val_18967 === (8)))
{var inst_18920 = (state_18966[(10)]);var inst_18921 = (state_18966[(12)]);var inst_18923 = (inst_18921 < inst_18920);var inst_18924 = inst_18923;var state_18966__$1 = state_18966;if(cljs.core.truth_(inst_18924))
{var statearr_19000_19031 = state_18966__$1;(statearr_19000_19031[(1)] = (10));
} else
{var statearr_19001_19032 = state_18966__$1;(statearr_19001_19032[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto__))
;return ((function (switch__11548__auto__,c__11604__auto__){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_19005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19005[(0)] = state_machine__11549__auto__);
(statearr_19005[(1)] = (1));
return statearr_19005;
});
var state_machine__11549__auto____1 = (function (state_18966){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_18966);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e19006){if((e19006 instanceof Object))
{var ex__11552__auto__ = e19006;var statearr_19007_19033 = state_18966;(statearr_19007_19033[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18966);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19006;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19034 = state_18966;
state_18966 = G__19034;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_18966){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_18966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto__))
})();var state__11606__auto__ = (function (){var statearr_19008 = f__11605__auto__.call(null);(statearr_19008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);
return statearr_19008;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto__))
);
return c__11604__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11604__auto___19131 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___19131,out){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___19131,out){
return (function (state_19106){var state_val_19107 = (state_19106[(1)]);if((state_val_19107 === (7)))
{var inst_19101 = (state_19106[(2)]);var state_19106__$1 = state_19106;var statearr_19108_19132 = state_19106__$1;(statearr_19108_19132[(2)] = inst_19101);
(statearr_19108_19132[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19107 === (1)))
{var inst_19083 = null;var state_19106__$1 = (function (){var statearr_19109 = state_19106;(statearr_19109[(7)] = inst_19083);
return statearr_19109;
})();var statearr_19110_19133 = state_19106__$1;(statearr_19110_19133[(2)] = null);
(statearr_19110_19133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19107 === (4)))
{var inst_19086 = (state_19106[(8)]);var inst_19086__$1 = (state_19106[(2)]);var inst_19087 = (inst_19086__$1 == null);var inst_19088 = cljs.core.not.call(null,inst_19087);var state_19106__$1 = (function (){var statearr_19111 = state_19106;(statearr_19111[(8)] = inst_19086__$1);
return statearr_19111;
})();if(inst_19088)
{var statearr_19112_19134 = state_19106__$1;(statearr_19112_19134[(1)] = (5));
} else
{var statearr_19113_19135 = state_19106__$1;(statearr_19113_19135[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19107 === (6)))
{var state_19106__$1 = state_19106;var statearr_19114_19136 = state_19106__$1;(statearr_19114_19136[(2)] = null);
(statearr_19114_19136[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19107 === (3)))
{var inst_19103 = (state_19106[(2)]);var inst_19104 = cljs.core.async.close_BANG_.call(null,out);var state_19106__$1 = (function (){var statearr_19115 = state_19106;(statearr_19115[(9)] = inst_19103);
return statearr_19115;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19106__$1,inst_19104);
} else
{if((state_val_19107 === (2)))
{var state_19106__$1 = state_19106;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19106__$1,(4),ch);
} else
{if((state_val_19107 === (11)))
{var inst_19086 = (state_19106[(8)]);var inst_19095 = (state_19106[(2)]);var inst_19083 = inst_19086;var state_19106__$1 = (function (){var statearr_19116 = state_19106;(statearr_19116[(10)] = inst_19095);
(statearr_19116[(7)] = inst_19083);
return statearr_19116;
})();var statearr_19117_19137 = state_19106__$1;(statearr_19117_19137[(2)] = null);
(statearr_19117_19137[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19107 === (9)))
{var inst_19086 = (state_19106[(8)]);var state_19106__$1 = state_19106;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19106__$1,(11),out,inst_19086);
} else
{if((state_val_19107 === (5)))
{var inst_19083 = (state_19106[(7)]);var inst_19086 = (state_19106[(8)]);var inst_19090 = cljs.core._EQ_.call(null,inst_19086,inst_19083);var state_19106__$1 = state_19106;if(inst_19090)
{var statearr_19119_19138 = state_19106__$1;(statearr_19119_19138[(1)] = (8));
} else
{var statearr_19120_19139 = state_19106__$1;(statearr_19120_19139[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19107 === (10)))
{var inst_19098 = (state_19106[(2)]);var state_19106__$1 = state_19106;var statearr_19121_19140 = state_19106__$1;(statearr_19121_19140[(2)] = inst_19098);
(statearr_19121_19140[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19107 === (8)))
{var inst_19083 = (state_19106[(7)]);var tmp19118 = inst_19083;var inst_19083__$1 = tmp19118;var state_19106__$1 = (function (){var statearr_19122 = state_19106;(statearr_19122[(7)] = inst_19083__$1);
return statearr_19122;
})();var statearr_19123_19141 = state_19106__$1;(statearr_19123_19141[(2)] = null);
(statearr_19123_19141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto___19131,out))
;return ((function (switch__11548__auto__,c__11604__auto___19131,out){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_19127 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19127[(0)] = state_machine__11549__auto__);
(statearr_19127[(1)] = (1));
return statearr_19127;
});
var state_machine__11549__auto____1 = (function (state_19106){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_19106);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e19128){if((e19128 instanceof Object))
{var ex__11552__auto__ = e19128;var statearr_19129_19142 = state_19106;(statearr_19129_19142[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19106);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19128;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19143 = state_19106;
state_19106 = G__19143;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_19106){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_19106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___19131,out))
})();var state__11606__auto__ = (function (){var statearr_19130 = f__11605__auto__.call(null);(statearr_19130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___19131);
return statearr_19130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___19131,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11604__auto___19278 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___19278,out){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___19278,out){
return (function (state_19248){var state_val_19249 = (state_19248[(1)]);if((state_val_19249 === (7)))
{var inst_19244 = (state_19248[(2)]);var state_19248__$1 = state_19248;var statearr_19250_19279 = state_19248__$1;(statearr_19250_19279[(2)] = inst_19244);
(statearr_19250_19279[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19249 === (1)))
{var inst_19211 = (new Array(n));var inst_19212 = inst_19211;var inst_19213 = (0);var state_19248__$1 = (function (){var statearr_19251 = state_19248;(statearr_19251[(7)] = inst_19213);
(statearr_19251[(8)] = inst_19212);
return statearr_19251;
})();var statearr_19252_19280 = state_19248__$1;(statearr_19252_19280[(2)] = null);
(statearr_19252_19280[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19249 === (4)))
{var inst_19216 = (state_19248[(9)]);var inst_19216__$1 = (state_19248[(2)]);var inst_19217 = (inst_19216__$1 == null);var inst_19218 = cljs.core.not.call(null,inst_19217);var state_19248__$1 = (function (){var statearr_19253 = state_19248;(statearr_19253[(9)] = inst_19216__$1);
return statearr_19253;
})();if(inst_19218)
{var statearr_19254_19281 = state_19248__$1;(statearr_19254_19281[(1)] = (5));
} else
{var statearr_19255_19282 = state_19248__$1;(statearr_19255_19282[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19249 === (15)))
{var inst_19238 = (state_19248[(2)]);var state_19248__$1 = state_19248;var statearr_19256_19283 = state_19248__$1;(statearr_19256_19283[(2)] = inst_19238);
(statearr_19256_19283[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19249 === (13)))
{var state_19248__$1 = state_19248;var statearr_19257_19284 = state_19248__$1;(statearr_19257_19284[(2)] = null);
(statearr_19257_19284[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19249 === (6)))
{var inst_19213 = (state_19248[(7)]);var inst_19234 = (inst_19213 > (0));var state_19248__$1 = state_19248;if(cljs.core.truth_(inst_19234))
{var statearr_19258_19285 = state_19248__$1;(statearr_19258_19285[(1)] = (12));
} else
{var statearr_19259_19286 = state_19248__$1;(statearr_19259_19286[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19249 === (3)))
{var inst_19246 = (state_19248[(2)]);var state_19248__$1 = state_19248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19248__$1,inst_19246);
} else
{if((state_val_19249 === (12)))
{var inst_19212 = (state_19248[(8)]);var inst_19236 = cljs.core.vec.call(null,inst_19212);var state_19248__$1 = state_19248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19248__$1,(15),out,inst_19236);
} else
{if((state_val_19249 === (2)))
{var state_19248__$1 = state_19248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19248__$1,(4),ch);
} else
{if((state_val_19249 === (11)))
{var inst_19228 = (state_19248[(2)]);var inst_19229 = (new Array(n));var inst_19212 = inst_19229;var inst_19213 = (0);var state_19248__$1 = (function (){var statearr_19260 = state_19248;(statearr_19260[(10)] = inst_19228);
(statearr_19260[(7)] = inst_19213);
(statearr_19260[(8)] = inst_19212);
return statearr_19260;
})();var statearr_19261_19287 = state_19248__$1;(statearr_19261_19287[(2)] = null);
(statearr_19261_19287[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19249 === (9)))
{var inst_19212 = (state_19248[(8)]);var inst_19226 = cljs.core.vec.call(null,inst_19212);var state_19248__$1 = state_19248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19248__$1,(11),out,inst_19226);
} else
{if((state_val_19249 === (5)))
{var inst_19221 = (state_19248[(11)]);var inst_19216 = (state_19248[(9)]);var inst_19213 = (state_19248[(7)]);var inst_19212 = (state_19248[(8)]);var inst_19220 = (inst_19212[inst_19213] = inst_19216);var inst_19221__$1 = (inst_19213 + (1));var inst_19222 = (inst_19221__$1 < n);var state_19248__$1 = (function (){var statearr_19262 = state_19248;(statearr_19262[(11)] = inst_19221__$1);
(statearr_19262[(12)] = inst_19220);
return statearr_19262;
})();if(cljs.core.truth_(inst_19222))
{var statearr_19263_19288 = state_19248__$1;(statearr_19263_19288[(1)] = (8));
} else
{var statearr_19264_19289 = state_19248__$1;(statearr_19264_19289[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19249 === (14)))
{var inst_19241 = (state_19248[(2)]);var inst_19242 = cljs.core.async.close_BANG_.call(null,out);var state_19248__$1 = (function (){var statearr_19266 = state_19248;(statearr_19266[(13)] = inst_19241);
return statearr_19266;
})();var statearr_19267_19290 = state_19248__$1;(statearr_19267_19290[(2)] = inst_19242);
(statearr_19267_19290[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19249 === (10)))
{var inst_19232 = (state_19248[(2)]);var state_19248__$1 = state_19248;var statearr_19268_19291 = state_19248__$1;(statearr_19268_19291[(2)] = inst_19232);
(statearr_19268_19291[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19249 === (8)))
{var inst_19221 = (state_19248[(11)]);var inst_19212 = (state_19248[(8)]);var tmp19265 = inst_19212;var inst_19212__$1 = tmp19265;var inst_19213 = inst_19221;var state_19248__$1 = (function (){var statearr_19269 = state_19248;(statearr_19269[(7)] = inst_19213);
(statearr_19269[(8)] = inst_19212__$1);
return statearr_19269;
})();var statearr_19270_19292 = state_19248__$1;(statearr_19270_19292[(2)] = null);
(statearr_19270_19292[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto___19278,out))
;return ((function (switch__11548__auto__,c__11604__auto___19278,out){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_19274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19274[(0)] = state_machine__11549__auto__);
(statearr_19274[(1)] = (1));
return statearr_19274;
});
var state_machine__11549__auto____1 = (function (state_19248){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_19248);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e19275){if((e19275 instanceof Object))
{var ex__11552__auto__ = e19275;var statearr_19276_19293 = state_19248;(statearr_19276_19293[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19248);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19275;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19294 = state_19248;
state_19248 = G__19294;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_19248){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_19248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___19278,out))
})();var state__11606__auto__ = (function (){var statearr_19277 = f__11605__auto__.call(null);(statearr_19277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___19278);
return statearr_19277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___19278,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11604__auto___19437 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto___19437,out){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto___19437,out){
return (function (state_19407){var state_val_19408 = (state_19407[(1)]);if((state_val_19408 === (7)))
{var inst_19403 = (state_19407[(2)]);var state_19407__$1 = state_19407;var statearr_19409_19438 = state_19407__$1;(statearr_19409_19438[(2)] = inst_19403);
(statearr_19409_19438[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19408 === (1)))
{var inst_19366 = [];var inst_19367 = inst_19366;var inst_19368 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_19407__$1 = (function (){var statearr_19410 = state_19407;(statearr_19410[(7)] = inst_19367);
(statearr_19410[(8)] = inst_19368);
return statearr_19410;
})();var statearr_19411_19439 = state_19407__$1;(statearr_19411_19439[(2)] = null);
(statearr_19411_19439[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19408 === (4)))
{var inst_19371 = (state_19407[(9)]);var inst_19371__$1 = (state_19407[(2)]);var inst_19372 = (inst_19371__$1 == null);var inst_19373 = cljs.core.not.call(null,inst_19372);var state_19407__$1 = (function (){var statearr_19412 = state_19407;(statearr_19412[(9)] = inst_19371__$1);
return statearr_19412;
})();if(inst_19373)
{var statearr_19413_19440 = state_19407__$1;(statearr_19413_19440[(1)] = (5));
} else
{var statearr_19414_19441 = state_19407__$1;(statearr_19414_19441[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19408 === (15)))
{var inst_19397 = (state_19407[(2)]);var state_19407__$1 = state_19407;var statearr_19415_19442 = state_19407__$1;(statearr_19415_19442[(2)] = inst_19397);
(statearr_19415_19442[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19408 === (13)))
{var state_19407__$1 = state_19407;var statearr_19416_19443 = state_19407__$1;(statearr_19416_19443[(2)] = null);
(statearr_19416_19443[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19408 === (6)))
{var inst_19367 = (state_19407[(7)]);var inst_19392 = inst_19367.length;var inst_19393 = (inst_19392 > (0));var state_19407__$1 = state_19407;if(cljs.core.truth_(inst_19393))
{var statearr_19417_19444 = state_19407__$1;(statearr_19417_19444[(1)] = (12));
} else
{var statearr_19418_19445 = state_19407__$1;(statearr_19418_19445[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19408 === (3)))
{var inst_19405 = (state_19407[(2)]);var state_19407__$1 = state_19407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19407__$1,inst_19405);
} else
{if((state_val_19408 === (12)))
{var inst_19367 = (state_19407[(7)]);var inst_19395 = cljs.core.vec.call(null,inst_19367);var state_19407__$1 = state_19407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19407__$1,(15),out,inst_19395);
} else
{if((state_val_19408 === (2)))
{var state_19407__$1 = state_19407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19407__$1,(4),ch);
} else
{if((state_val_19408 === (11)))
{var inst_19371 = (state_19407[(9)]);var inst_19375 = (state_19407[(10)]);var inst_19385 = (state_19407[(2)]);var inst_19386 = [];var inst_19387 = inst_19386.push(inst_19371);var inst_19367 = inst_19386;var inst_19368 = inst_19375;var state_19407__$1 = (function (){var statearr_19419 = state_19407;(statearr_19419[(11)] = inst_19387);
(statearr_19419[(7)] = inst_19367);
(statearr_19419[(8)] = inst_19368);
(statearr_19419[(12)] = inst_19385);
return statearr_19419;
})();var statearr_19420_19446 = state_19407__$1;(statearr_19420_19446[(2)] = null);
(statearr_19420_19446[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19408 === (9)))
{var inst_19367 = (state_19407[(7)]);var inst_19383 = cljs.core.vec.call(null,inst_19367);var state_19407__$1 = state_19407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19407__$1,(11),out,inst_19383);
} else
{if((state_val_19408 === (5)))
{var inst_19371 = (state_19407[(9)]);var inst_19375 = (state_19407[(10)]);var inst_19368 = (state_19407[(8)]);var inst_19375__$1 = f.call(null,inst_19371);var inst_19376 = cljs.core._EQ_.call(null,inst_19375__$1,inst_19368);var inst_19377 = cljs.core.keyword_identical_QMARK_.call(null,inst_19368,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_19378 = (inst_19376) || (inst_19377);var state_19407__$1 = (function (){var statearr_19421 = state_19407;(statearr_19421[(10)] = inst_19375__$1);
return statearr_19421;
})();if(cljs.core.truth_(inst_19378))
{var statearr_19422_19447 = state_19407__$1;(statearr_19422_19447[(1)] = (8));
} else
{var statearr_19423_19448 = state_19407__$1;(statearr_19423_19448[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19408 === (14)))
{var inst_19400 = (state_19407[(2)]);var inst_19401 = cljs.core.async.close_BANG_.call(null,out);var state_19407__$1 = (function (){var statearr_19425 = state_19407;(statearr_19425[(13)] = inst_19400);
return statearr_19425;
})();var statearr_19426_19449 = state_19407__$1;(statearr_19426_19449[(2)] = inst_19401);
(statearr_19426_19449[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19408 === (10)))
{var inst_19390 = (state_19407[(2)]);var state_19407__$1 = state_19407;var statearr_19427_19450 = state_19407__$1;(statearr_19427_19450[(2)] = inst_19390);
(statearr_19427_19450[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19408 === (8)))
{var inst_19371 = (state_19407[(9)]);var inst_19375 = (state_19407[(10)]);var inst_19367 = (state_19407[(7)]);var inst_19380 = inst_19367.push(inst_19371);var tmp19424 = inst_19367;var inst_19367__$1 = tmp19424;var inst_19368 = inst_19375;var state_19407__$1 = (function (){var statearr_19428 = state_19407;(statearr_19428[(14)] = inst_19380);
(statearr_19428[(7)] = inst_19367__$1);
(statearr_19428[(8)] = inst_19368);
return statearr_19428;
})();var statearr_19429_19451 = state_19407__$1;(statearr_19429_19451[(2)] = null);
(statearr_19429_19451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__11604__auto___19437,out))
;return ((function (switch__11548__auto__,c__11604__auto___19437,out){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_19433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19433[(0)] = state_machine__11549__auto__);
(statearr_19433[(1)] = (1));
return statearr_19433;
});
var state_machine__11549__auto____1 = (function (state_19407){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_19407);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e19434){if((e19434 instanceof Object))
{var ex__11552__auto__ = e19434;var statearr_19435_19452 = state_19407;(statearr_19435_19452[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19407);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19434;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19453 = state_19407;
state_19407 = G__19453;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_19407){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_19407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto___19437,out))
})();var state__11606__auto__ = (function (){var statearr_19436 = f__11605__auto__.call(null);(statearr_19436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___19437);
return statearr_19436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto___19437,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map