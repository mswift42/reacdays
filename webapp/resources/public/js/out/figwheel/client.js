// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__15993,args){var map__15995 = p__15993;var map__15995__$1 = ((cljs.core.seq_QMARK_.call(null,map__15995))?cljs.core.apply.call(null,cljs.core.hash_map,map__15995):map__15995);var debug = cljs.core.get.call(null,map__15995__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__15993,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__15993,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__15996){
var p__15993 = cljs.core.first(arglist__15996);
var args = cljs.core.rest(arglist__15996);
return log__delegate(p__15993,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__15997){var map__15999 = p__15997;var map__15999__$1 = ((cljs.core.seq_QMARK_.call(null,map__15999))?cljs.core.apply.call(null,cljs.core.hash_map,map__15999):map__15999);var websocket_url = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__16000,callback){var map__16002 = p__16000;var map__16002__$1 = ((cljs.core.seq_QMARK_.call(null,map__16002))?cljs.core.apply.call(null,cljs.core.hash_map,map__16002):map__16002);var msg = map__16002__$1;var dependency_file = cljs.core.get.call(null,map__16002__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__16002__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__16002__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__8734__auto__ = dependency_file;if(cljs.core.truth_(or__8734__auto__))
{return or__8734__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__16002,map__16002__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__16002,map__16002__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__16003,p__16004){var map__16007 = p__16003;var map__16007__$1 = ((cljs.core.seq_QMARK_.call(null,map__16007))?cljs.core.apply.call(null,cljs.core.hash_map,map__16007):map__16007);var opts = map__16007__$1;var url_rewriter = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__16008 = p__16004;var map__16008__$1 = ((cljs.core.seq_QMARK_.call(null,map__16008))?cljs.core.apply.call(null,cljs.core.hash_map,map__16008):map__16008);var d = map__16008__$1;var file = cljs.core.get.call(null,map__16008__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__16009,p__16010){var map__16052 = p__16009;var map__16052__$1 = ((cljs.core.seq_QMARK_.call(null,map__16052))?cljs.core.apply.call(null,cljs.core.hash_map,map__16052):map__16052);var opts = map__16052__$1;var on_jsload = cljs.core.get.call(null,map__16052__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__16052__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__16053 = p__16010;var map__16053__$1 = ((cljs.core.seq_QMARK_.call(null,map__16053))?cljs.core.apply.call(null,cljs.core.hash_map,map__16053):map__16053);var files = cljs.core.get.call(null,map__16053__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11604__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto__,map__16052,map__16052__$1,opts,on_jsload,before_jsload,map__16053,map__16053__$1,files){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto__,map__16052,map__16052__$1,opts,on_jsload,before_jsload,map__16053,map__16053__$1,files){
return (function (state_16076){var state_val_16077 = (state_16076[(1)]);if((state_val_16077 === (6)))
{var inst_16058 = (state_16076[(7)]);var inst_16067 = (state_16076[(2)]);var inst_16068 = cljs.core.PersistentVector.EMPTY_NODE;var inst_16069 = [inst_16058];var inst_16070 = (new cljs.core.PersistentVector(null,1,(5),inst_16068,inst_16069,null));var inst_16071 = cljs.core.apply.call(null,on_jsload,inst_16070);var state_16076__$1 = (function (){var statearr_16078 = state_16076;(statearr_16078[(8)] = inst_16067);
return statearr_16078;
})();var statearr_16079_16093 = state_16076__$1;(statearr_16079_16093[(2)] = inst_16071);
(statearr_16079_16093[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16077 === (5)))
{var inst_16074 = (state_16076[(2)]);var state_16076__$1 = state_16076;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16076__$1,inst_16074);
} else
{if((state_val_16077 === (4)))
{var state_16076__$1 = state_16076;var statearr_16080_16094 = state_16076__$1;(statearr_16080_16094[(2)] = null);
(statearr_16080_16094[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16077 === (3)))
{var inst_16058 = (state_16076[(7)]);var inst_16061 = console.debug("Figwheel: loaded these files");var inst_16062 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_16058);var inst_16063 = cljs.core.prn_str.call(null,inst_16062);var inst_16064 = console.log(inst_16063);var inst_16065 = cljs.core.async.timeout.call(null,(10));var state_16076__$1 = (function (){var statearr_16081 = state_16076;(statearr_16081[(9)] = inst_16061);
(statearr_16081[(10)] = inst_16064);
return statearr_16081;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16076__$1,(6),inst_16065);
} else
{if((state_val_16077 === (2)))
{var inst_16058 = (state_16076[(7)]);var inst_16058__$1 = (state_16076[(2)]);var inst_16059 = cljs.core.not_empty.call(null,inst_16058__$1);var state_16076__$1 = (function (){var statearr_16082 = state_16076;(statearr_16082[(7)] = inst_16058__$1);
return statearr_16082;
})();if(cljs.core.truth_(inst_16059))
{var statearr_16083_16095 = state_16076__$1;(statearr_16083_16095[(1)] = (3));
} else
{var statearr_16084_16096 = state_16076__$1;(statearr_16084_16096[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16077 === (1)))
{var inst_16054 = before_jsload.call(null,files);var inst_16055 = figwheel.client.add_request_urls.call(null,opts,files);var inst_16056 = figwheel.client.load_all_js_files.call(null,inst_16055);var state_16076__$1 = (function (){var statearr_16085 = state_16076;(statearr_16085[(11)] = inst_16054);
return statearr_16085;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16076__$1,(2),inst_16056);
} else
{return null;
}
}
}
}
}
}
});})(c__11604__auto__,map__16052,map__16052__$1,opts,on_jsload,before_jsload,map__16053,map__16053__$1,files))
;return ((function (switch__11548__auto__,c__11604__auto__,map__16052,map__16052__$1,opts,on_jsload,before_jsload,map__16053,map__16053__$1,files){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_16089 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16089[(0)] = state_machine__11549__auto__);
(statearr_16089[(1)] = (1));
return statearr_16089;
});
var state_machine__11549__auto____1 = (function (state_16076){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_16076);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e16090){if((e16090 instanceof Object))
{var ex__11552__auto__ = e16090;var statearr_16091_16097 = state_16076;(statearr_16091_16097[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16076);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16090;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16098 = state_16076;
state_16076 = G__16098;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_16076){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_16076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto__,map__16052,map__16052__$1,opts,on_jsload,before_jsload,map__16053,map__16053__$1,files))
})();var state__11606__auto__ = (function (){var statearr_16092 = f__11605__auto__.call(null);(statearr_16092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);
return statearr_16092;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto__,map__16052,map__16052__$1,opts,on_jsload,before_jsload,map__16053,map__16053__$1,files))
);
return c__11604__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__16099,link_href){var map__16101 = p__16099;var map__16101__$1 = ((cljs.core.seq_QMARK_.call(null,map__16101))?cljs.core.apply.call(null,cljs.core.hash_map,map__16101):map__16101);var request_url = cljs.core.get.call(null,map__16101__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__16101__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__11604__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto__,parent){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto__,parent){
return (function (state_16122){var state_val_16123 = (state_16122[(1)]);if((state_val_16123 === (2)))
{var inst_16119 = (state_16122[(2)]);var inst_16120 = parent.removeChild(orig_link);var state_16122__$1 = (function (){var statearr_16124 = state_16122;(statearr_16124[(7)] = inst_16119);
return statearr_16124;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16122__$1,inst_16120);
} else
{if((state_val_16123 === (1)))
{var inst_16117 = cljs.core.async.timeout.call(null,(200));var state_16122__$1 = state_16122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16122__$1,(2),inst_16117);
} else
{return null;
}
}
});})(c__11604__auto__,parent))
;return ((function (switch__11548__auto__,c__11604__auto__,parent){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_16128 = [null,null,null,null,null,null,null,null];(statearr_16128[(0)] = state_machine__11549__auto__);
(statearr_16128[(1)] = (1));
return statearr_16128;
});
var state_machine__11549__auto____1 = (function (state_16122){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_16122);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e16129){if((e16129 instanceof Object))
{var ex__11552__auto__ = e16129;var statearr_16130_16132 = state_16122;(statearr_16130_16132[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16122);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16129;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16133 = state_16122;
state_16122 = G__16133;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_16122){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_16122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto__,parent))
})();var state__11606__auto__ = (function (){var statearr_16131 = f__11605__auto__.call(null);(statearr_16131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);
return statearr_16131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto__,parent))
);
return c__11604__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__16134){var map__16136 = p__16134;var map__16136__$1 = ((cljs.core.seq_QMARK_.call(null,map__16136))?cljs.core.apply.call(null,cljs.core.hash_map,map__16136):map__16136);var f_data = map__16136__$1;var request_url = cljs.core.get.call(null,map__16136__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__16136__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__16137,files_msg){var map__16159 = p__16137;var map__16159__$1 = ((cljs.core.seq_QMARK_.call(null,map__16159))?cljs.core.apply.call(null,cljs.core.hash_map,map__16159):map__16159);var opts = map__16159__$1;var on_cssload = cljs.core.get.call(null,map__16159__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__16160_16180 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__16161_16181 = null;var count__16162_16182 = (0);var i__16163_16183 = (0);while(true){
if((i__16163_16183 < count__16162_16182))
{var f_16184 = cljs.core._nth.call(null,chunk__16161_16181,i__16163_16183);figwheel.client.reload_css_file.call(null,f_16184);
{
var G__16185 = seq__16160_16180;
var G__16186 = chunk__16161_16181;
var G__16187 = count__16162_16182;
var G__16188 = (i__16163_16183 + (1));
seq__16160_16180 = G__16185;
chunk__16161_16181 = G__16186;
count__16162_16182 = G__16187;
i__16163_16183 = G__16188;
continue;
}
} else
{var temp__4126__auto___16189 = cljs.core.seq.call(null,seq__16160_16180);if(temp__4126__auto___16189)
{var seq__16160_16190__$1 = temp__4126__auto___16189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16160_16190__$1))
{var c__9504__auto___16191 = cljs.core.chunk_first.call(null,seq__16160_16190__$1);{
var G__16192 = cljs.core.chunk_rest.call(null,seq__16160_16190__$1);
var G__16193 = c__9504__auto___16191;
var G__16194 = cljs.core.count.call(null,c__9504__auto___16191);
var G__16195 = (0);
seq__16160_16180 = G__16192;
chunk__16161_16181 = G__16193;
count__16162_16182 = G__16194;
i__16163_16183 = G__16195;
continue;
}
} else
{var f_16196 = cljs.core.first.call(null,seq__16160_16190__$1);figwheel.client.reload_css_file.call(null,f_16196);
{
var G__16197 = cljs.core.next.call(null,seq__16160_16190__$1);
var G__16198 = null;
var G__16199 = (0);
var G__16200 = (0);
seq__16160_16180 = G__16197;
chunk__16161_16181 = G__16198;
count__16162_16182 = G__16199;
i__16163_16183 = G__16200;
continue;
}
}
} else
{}
}
break;
}
var c__11604__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11604__auto__,map__16159,map__16159__$1,opts,on_cssload){
return (function (){var f__11605__auto__ = (function (){var switch__11548__auto__ = ((function (c__11604__auto__,map__16159,map__16159__$1,opts,on_cssload){
return (function (state_16170){var state_val_16171 = (state_16170[(1)]);if((state_val_16171 === (2)))
{var inst_16166 = (state_16170[(2)]);var inst_16167 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_16168 = on_cssload.call(null,inst_16167);var state_16170__$1 = (function (){var statearr_16172 = state_16170;(statearr_16172[(7)] = inst_16166);
return statearr_16172;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16170__$1,inst_16168);
} else
{if((state_val_16171 === (1)))
{var inst_16164 = cljs.core.async.timeout.call(null,(100));var state_16170__$1 = state_16170;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16170__$1,(2),inst_16164);
} else
{return null;
}
}
});})(c__11604__auto__,map__16159,map__16159__$1,opts,on_cssload))
;return ((function (switch__11548__auto__,c__11604__auto__,map__16159,map__16159__$1,opts,on_cssload){
return (function() {
var state_machine__11549__auto__ = null;
var state_machine__11549__auto____0 = (function (){var statearr_16176 = [null,null,null,null,null,null,null,null];(statearr_16176[(0)] = state_machine__11549__auto__);
(statearr_16176[(1)] = (1));
return statearr_16176;
});
var state_machine__11549__auto____1 = (function (state_16170){while(true){
var ret_value__11550__auto__ = (function (){try{while(true){
var result__11551__auto__ = switch__11548__auto__.call(null,state_16170);if(cljs.core.keyword_identical_QMARK_.call(null,result__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11551__auto__;
}
break;
}
}catch (e16177){if((e16177 instanceof Object))
{var ex__11552__auto__ = e16177;var statearr_16178_16201 = state_16170;(statearr_16178_16201[(5)] = ex__11552__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16170);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16177;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16202 = state_16170;
state_16170 = G__16202;
continue;
}
} else
{return ret_value__11550__auto__;
}
break;
}
});
state_machine__11549__auto__ = function(state_16170){
switch(arguments.length){
case 0:
return state_machine__11549__auto____0.call(this);
case 1:
return state_machine__11549__auto____1.call(this,state_16170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11549__auto____0;
state_machine__11549__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11549__auto____1;
return state_machine__11549__auto__;
})()
;})(switch__11548__auto__,c__11604__auto__,map__16159,map__16159__$1,opts,on_cssload))
})();var state__11606__auto__ = (function (){var statearr_16179 = f__11605__auto__.call(null);(statearr_16179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);
return statearr_16179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11606__auto__);
});})(c__11604__auto__,map__16159,map__16159__$1,opts,on_cssload))
);
return c__11604__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__16203){var map__16208 = p__16203;var map__16208__$1 = ((cljs.core.seq_QMARK_.call(null,map__16208))?cljs.core.apply.call(null,cljs.core.hash_map,map__16208):map__16208);var opts = map__16208__$1;var on_compile_fail = cljs.core.get.call(null,map__16208__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__16208__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__16208__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__16208__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__16208,map__16208__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__16209 = cljs.core._EQ_;var expr__16210 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__16209.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__16210)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__16209.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__16210)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__16209.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__16210)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__16208,map__16208__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__16208,map__16208__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__16208,map__16208__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__16208,map__16208__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__16208,map__16208__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__16208,map__16208__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__16208,map__16208__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__16208,map__16208__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__16208,map__16208__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj16215 = {"detail":url};return obj16215;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__16216){var map__16218 = p__16216;var map__16218__$1 = ((cljs.core.seq_QMARK_.call(null,map__16218))?cljs.core.apply.call(null,cljs.core.hash_map,map__16218):map__16218);var class$ = cljs.core.get.call(null,map__16218__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__16218__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__16219){var map__16225 = p__16219;var map__16225__$1 = ((cljs.core.seq_QMARK_.call(null,map__16225))?cljs.core.apply.call(null,cljs.core.hash_map,map__16225):map__16225);var ed = map__16225__$1;var exception_data = cljs.core.get.call(null,map__16225__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__16225__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__16226_16230 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__16227_16231 = null;var count__16228_16232 = (0);var i__16229_16233 = (0);while(true){
if((i__16229_16233 < count__16228_16232))
{var msg_16234 = cljs.core._nth.call(null,chunk__16227_16231,i__16229_16233);console.log(msg_16234);
{
var G__16235 = seq__16226_16230;
var G__16236 = chunk__16227_16231;
var G__16237 = count__16228_16232;
var G__16238 = (i__16229_16233 + (1));
seq__16226_16230 = G__16235;
chunk__16227_16231 = G__16236;
count__16228_16232 = G__16237;
i__16229_16233 = G__16238;
continue;
}
} else
{var temp__4126__auto___16239 = cljs.core.seq.call(null,seq__16226_16230);if(temp__4126__auto___16239)
{var seq__16226_16240__$1 = temp__4126__auto___16239;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16226_16240__$1))
{var c__9504__auto___16241 = cljs.core.chunk_first.call(null,seq__16226_16240__$1);{
var G__16242 = cljs.core.chunk_rest.call(null,seq__16226_16240__$1);
var G__16243 = c__9504__auto___16241;
var G__16244 = cljs.core.count.call(null,c__9504__auto___16241);
var G__16245 = (0);
seq__16226_16230 = G__16242;
chunk__16227_16231 = G__16243;
count__16228_16232 = G__16244;
i__16229_16233 = G__16245;
continue;
}
} else
{var msg_16246 = cljs.core.first.call(null,seq__16226_16240__$1);console.log(msg_16246);
{
var G__16247 = cljs.core.next.call(null,seq__16226_16240__$1);
var G__16248 = null;
var G__16249 = (0);
var G__16250 = (0);
seq__16226_16230 = G__16247;
chunk__16227_16231 = G__16248;
count__16228_16232 = G__16249;
i__16229_16233 = G__16250;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__8734__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__8734__auto__))
{return or__8734__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__16251){var map__16253 = p__16251;var map__16253__$1 = ((cljs.core.seq_QMARK_.call(null,map__16253))?cljs.core.apply.call(null,cljs.core.hash_map,map__16253):map__16253);var opts = map__16253__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__16251 = null;if (arguments.length > 0) {
  p__16251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__16251);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__16254){
var p__16251 = cljs.core.seq(arglist__16254);
return watch_and_reload__delegate(p__16251);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map