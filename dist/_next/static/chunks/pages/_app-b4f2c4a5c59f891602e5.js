_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"1mXj":function(e,t,r){(function(e){!function(t){"use strict";function r(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function u(e,t,r){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function c(e){var t="undefined"==typeof e?"undefined":S(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,n,s,d,p){p=p||[];var h=(s=s||[]).slice(0);if("undefined"!=typeof d){if(n){if("function"==typeof n&&n(h,d))return;if("object"===("undefined"==typeof n?"undefined":S(n))){if(n.prefilter&&n.prefilter(h,d))return;if(n.normalize){var g=n.normalize(h,d,e,t);g&&(e=g[0],t=g[1])}}}h.push(d)}"regexp"===c(e)&&"regexp"===c(t)&&(e=e.toString(),t=t.toString());var v="undefined"==typeof e?"undefined":S(e),y="undefined"==typeof t?"undefined":S(t),m="undefined"!==v||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),b="undefined"!==y||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!m&&b)r(new i(h,t));else if(!b&&m)r(new a(h,e));else if(c(e)!==c(t))r(new o(h,e,t));else if("date"===c(e)&&e-t!==0)r(new o(h,e,t));else if("object"===v&&null!==e&&null!==t)if(p.filter((function(t){return t.lhs===e})).length)e!==t&&r(new o(h,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?r(new u(h,w,new a(void 0,e[w]))):l(e[w],t[w],r,n,h,w,p);for(;w<t.length;)r(new u(h,w,new i(void 0,t[w++])))}else{var x=Object.keys(e),j=Object.keys(t);x.forEach((function(o,i){var a=j.indexOf(o);a>=0?(l(e[o],t[o],r,n,h,o,p),j=f(j,a)):l(e[o],void 0,r,n,h,o,p)})),j.forEach((function(e){l(void 0,t[e],r,n,h,e,p)}))}p.length=p.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||r(new o(h,e,t)))}function s(e,t,r,n){return n=n||[],l(e,t,(function(e){e&&n.push(e)}),r),n.length?n:void 0}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":delete i[n.path[o]];break;case"E":case"N":i[n.path[o]]=n.rhs}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":t=f(t,r);break;case"E":case"N":t[r]=n.rhs}return t}(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e){return"color: "+D[e].color+"; font-weight: bold"}function h(e,t,r,n){var o=s(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach((function(e){var t=e.kind,n=function(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"\u2192",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}(e);r.log.apply(r,["%c "+D[t].text,p(t)].concat(k(n)))})):r.log("\u2014\u2014 no diff \u2014\u2014");try{r.groupEnd()}catch(e){r.log("\u2014\u2014 diff end \u2014\u2014 ")}}function g(e,t,r,n){switch("undefined"==typeof e?"undefined":S(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,k(r)):e[n];case"function":return e(t);default:return e}}function v(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,a=t.collapsed,u=t.colors,f=t.level,c=t.diff,l="undefined"==typeof t.titleFormatter;e.forEach((function(o,s){var d=o.started,p=o.startedTime,v=o.action,y=o.prevState,m=o.error,b=o.took,w=o.nextState,j=e[s+1];j&&(w=j.prevState,b=j.started-d);var S=n(v),k="function"==typeof a?a((function(){return w}),v,o):a,E=x(p),D=u.title?"color: "+u.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(D),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,E,b);try{k?u.title&&l?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):u.title&&l?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=g(f,S,[y],"prevState"),P=g(f,S,[S],"action"),_=g(f,S,[m,y],"error"),C=g(f,S,[w],"nextState");if(N)if(u.prevState){var T="color: "+u.prevState(y)+"; font-weight: bold";r[N]("%c prev state",T,y)}else r[N]("prev state",y);if(P)if(u.action){var F="color: "+u.action(S)+"; font-weight: bold";r[P]("%c action    ",F,S)}else r[P]("action    ",S);if(m&&_)if(u.error){var M="color: "+u.error(m,y)+"; font-weight: bold;";r[_]("%c error     ",M,m)}else r[_]("error     ",m);if(C)if(u.nextState){var L="color: "+u.nextState(w)+"; font-weight: bold";r[C]("%c next state",L,w)}else r[C]("next state",w);c&&h(y,w,r,k);try{r.groupEnd()}catch(e){r.log("\u2014\u2014 log end \u2014\u2014")}}))}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},A,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,u=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var f=[];return function(e){var r=e.getState;return function(e){return function(c){if("function"==typeof i&&!i(r,c))return e(c);var l={};f.push(l),l.started=j.now(),l.startedTime=new Date,l.prevState=n(r()),l.action=c;var s=void 0;if(a)try{s=e(c)}catch(e){l.error=o(e)}else s=e(c);l.took=j.now()-l.started,l.nextState=n(r());var d=t.diff&&"function"==typeof u?u(r,c):t.diff;if(v(f,Object.assign({},t,{diff:d})),f.length=0,l.error)throw l.error;return s}}}}var m,b,w=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},x=function(e){return w(e.getHours(),2)+":"+w(e.getMinutes(),2)+":"+w(e.getSeconds(),2)+"."+w(e.getMilliseconds(),3)},j="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},E=[];m="object"===("undefined"==typeof e?"undefined":S(e))&&e?e:"undefined"!=typeof window?window:{},(b=m.DeepDiff)&&E.push((function(){"undefined"!=typeof b&&m.DeepDiff===s&&(m.DeepDiff=b,b=void 0)})),r(o,n),r(i,n),r(a,n),r(u,n),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:function(e,t,r){e&&t&&l(e,t,(function(n){r&&!r(e,t,n)||d(e,t,n)}))},enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":case"E":i[n.path[o]]=n.lhs;break;case"N":delete i[n.path[o]]}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":case"E":t[r]=n.lhs;break;case"N":t=f(t,r)}return t}(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof b},enumerable:!0},noConflict:{value:function(){return E&&(E.forEach((function(e){e()})),E=null),s},enumerable:!0}});var D={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},A={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?y()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=A,t.createLogger=y,t.logger=O,t.default=O,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,r("yLpj"))},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("hUgY")}])},RRVJ:function(e,t,r){},hUgY:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=(r("q4sD"),r("RRVJ"),r("/MKj")),a=r("i7Pf"),u=r("a3WO");var f=r("BsWD");var c;r("1mXj");var l=function(e){if(Array.isArray(e))return Object(u.a)(e)}(c=Object(a.c)({serializableCheck:{ignoredActions:["soraDemo/setSora","soraDemo/setLocalMediaStream","soraDemo/setRemoteMediaStream","soraDemo/setFakeContentsGainNode"],ignoredPaths:["immutable","fakeContents"]},immutableCheck:{ignoredPaths:["immutable","fakeContents"]}}))||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||Object(f.a)(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=r("T+WR"),d=Object(a.a)({reducer:s.a,middleware:l,devTools:!0}),p=o.a.createElement;t.default=function(e){var t=e.Component,r=e.pageProps;return p(i.a,{store:d},p(t,r))}},q4sD:function(e,t,r){}},[[0,0,2,1,4,6]]]);