// Compiled by ClojureScript 0.0-2371
goog.provide('webapp.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
if(typeof webapp.core.app_state !== 'undefined')
{} else
{webapp.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, what is the message? "], null));
}
webapp.core.page = (function page(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,webapp.core.app_state).call(null,new cljs.core.Keyword(null,"text","text",-1790561697)),"Some Text"], null);
});
webapp.core.home = (function home(){new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.top-bar","nav.top-bar",-878216441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-topbar.role","data-topbar.role",1188818623),"navigation"], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Days - Do all your stuff"], null);
});
webapp.core.main = (function main(){reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.core.page], null),document.getElementById("app"));
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.core.home], null),document.getElementById("home"));
});

//# sourceMappingURL=core.js.map