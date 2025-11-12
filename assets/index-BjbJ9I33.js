function aC(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const l in n)if(l!=="default"&&!(l in e)){const s=Object.getOwnPropertyDescriptor(n,l);s&&Object.defineProperty(e,l,s.get?s:{enumerable:!0,get:()=>n[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}})();function Qn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hh={exports:{}},Bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $1;function iC(){if($1)return Bl;$1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,l,s){var d=null;if(s!==void 0&&(d=""+s),l.key!==void 0&&(d=""+l.key),"key"in l){s={};for(var p in l)p!=="key"&&(s[p]=l[p])}else s=l;return l=s.ref,{$$typeof:e,type:n,key:d,ref:l!==void 0?l:null,props:s}}return Bl.Fragment=t,Bl.jsx=r,Bl.jsxs=r,Bl}var U1;function oC(){return U1||(U1=1,hh.exports=iC()),hh.exports}var u=oC(),mh={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1;function lC(){if(H1)return je;H1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function w(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,A={};function O(D,V,ae){this.props=D,this.context=V,this.refs=A,this.updater=ae||j}O.prototype.isReactComponent={},O.prototype.setState=function(D,V){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,V,"setState")},O.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function k(){}k.prototype=O.prototype;function T(D,V,ae){this.props=D,this.context=V,this.refs=A,this.updater=ae||j}var C=T.prototype=new k;C.constructor=T,S(C,O.prototype),C.isPureReactComponent=!0;var _=Array.isArray,M={H:null,A:null,T:null,S:null,V:null},R=Object.prototype.hasOwnProperty;function U(D,V,ae,re,se,Se){return ae=Se.ref,{$$typeof:e,type:D,key:V,ref:ae!==void 0?ae:null,props:Se}}function F(D,V){return U(D.type,V,void 0,void 0,void 0,D.props)}function te(D){return typeof D=="object"&&D!==null&&D.$$typeof===e}function ie(D){var V={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ae){return V[ae]})}var Z=/\/+/g;function J(D,V){return typeof D=="object"&&D!==null&&D.key!=null?ie(""+D.key):V.toString(36)}function he(){}function ge(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(he,he):(D.status="pending",D.then(function(V){D.status==="pending"&&(D.status="fulfilled",D.value=V)},function(V){D.status==="pending"&&(D.status="rejected",D.reason=V)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ye(D,V,ae,re,se){var Se=typeof D;(Se==="undefined"||Se==="boolean")&&(D=null);var ve=!1;if(D===null)ve=!0;else switch(Se){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(D.$$typeof){case e:case t:ve=!0;break;case g:return ve=D._init,ye(ve(D._payload),V,ae,re,se)}}if(ve)return se=se(D),ve=re===""?"."+J(D,0):re,_(se)?(ae="",ve!=null&&(ae=ve.replace(Z,"$&/")+"/"),ye(se,V,ae,"",function(Q){return Q})):se!=null&&(te(se)&&(se=F(se,ae+(se.key==null||D&&D.key===se.key?"":(""+se.key).replace(Z,"$&/")+"/")+ve)),V.push(se)),1;ve=0;var Ue=re===""?".":re+":";if(_(D))for(var He=0;He<D.length;He++)re=D[He],Se=Ue+J(re,He),ve+=ye(re,V,ae,Se,se);else if(He=w(D),typeof He=="function")for(D=He.call(D),He=0;!(re=D.next()).done;)re=re.value,Se=Ue+J(re,He++),ve+=ye(re,V,ae,Se,se);else if(Se==="object"){if(typeof D.then=="function")return ye(ge(D),V,ae,re,se);throw V=String(D),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ve}function $(D,V,ae){if(D==null)return D;var re=[],se=0;return ye(D,re,"","",function(Se){return V.call(ae,Se,se++)}),re}function K(D){if(D._status===-1){var V=D._result;V=V(),V.then(function(ae){(D._status===0||D._status===-1)&&(D._status=1,D._result=ae)},function(ae){(D._status===0||D._status===-1)&&(D._status=2,D._result=ae)}),D._status===-1&&(D._status=0,D._result=V)}if(D._status===1)return D._result.default;throw D._result}var ne=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function oe(){}return je.Children={map:$,forEach:function(D,V,ae){$(D,function(){V.apply(this,arguments)},ae)},count:function(D){var V=0;return $(D,function(){V++}),V},toArray:function(D){return $(D,function(V){return V})||[]},only:function(D){if(!te(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},je.Component=O,je.Fragment=r,je.Profiler=l,je.PureComponent=T,je.StrictMode=n,je.Suspense=h,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,je.__COMPILER_RUNTIME={__proto__:null,c:function(D){return M.H.useMemoCache(D)}},je.cache=function(D){return function(){return D.apply(null,arguments)}},je.cloneElement=function(D,V,ae){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var re=S({},D.props),se=D.key,Se=void 0;if(V!=null)for(ve in V.ref!==void 0&&(Se=void 0),V.key!==void 0&&(se=""+V.key),V)!R.call(V,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&V.ref===void 0||(re[ve]=V[ve]);var ve=arguments.length-2;if(ve===1)re.children=ae;else if(1<ve){for(var Ue=Array(ve),He=0;He<ve;He++)Ue[He]=arguments[He+2];re.children=Ue}return U(D.type,se,void 0,void 0,Se,re)},je.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:s,_context:D},D},je.createElement=function(D,V,ae){var re,se={},Se=null;if(V!=null)for(re in V.key!==void 0&&(Se=""+V.key),V)R.call(V,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(se[re]=V[re]);var ve=arguments.length-2;if(ve===1)se.children=ae;else if(1<ve){for(var Ue=Array(ve),He=0;He<ve;He++)Ue[He]=arguments[He+2];se.children=Ue}if(D&&D.defaultProps)for(re in ve=D.defaultProps,ve)se[re]===void 0&&(se[re]=ve[re]);return U(D,Se,void 0,void 0,null,se)},je.createRef=function(){return{current:null}},je.forwardRef=function(D){return{$$typeof:p,render:D}},je.isValidElement=te,je.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:K}},je.memo=function(D,V){return{$$typeof:m,type:D,compare:V===void 0?null:V}},je.startTransition=function(D){var V=M.T,ae={};M.T=ae;try{var re=D(),se=M.S;se!==null&&se(ae,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(oe,ne)}catch(Se){ne(Se)}finally{M.T=V}},je.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},je.use=function(D){return M.H.use(D)},je.useActionState=function(D,V,ae){return M.H.useActionState(D,V,ae)},je.useCallback=function(D,V){return M.H.useCallback(D,V)},je.useContext=function(D){return M.H.useContext(D)},je.useDebugValue=function(){},je.useDeferredValue=function(D,V){return M.H.useDeferredValue(D,V)},je.useEffect=function(D,V,ae){var re=M.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(D,V)},je.useId=function(){return M.H.useId()},je.useImperativeHandle=function(D,V,ae){return M.H.useImperativeHandle(D,V,ae)},je.useInsertionEffect=function(D,V){return M.H.useInsertionEffect(D,V)},je.useLayoutEffect=function(D,V){return M.H.useLayoutEffect(D,V)},je.useMemo=function(D,V){return M.H.useMemo(D,V)},je.useOptimistic=function(D,V){return M.H.useOptimistic(D,V)},je.useReducer=function(D,V,ae){return M.H.useReducer(D,V,ae)},je.useRef=function(D){return M.H.useRef(D)},je.useState=function(D){return M.H.useState(D)},je.useSyncExternalStore=function(D,V,ae){return M.H.useSyncExternalStore(D,V,ae)},je.useTransition=function(){return M.H.useTransition()},je.version="19.1.1",je}var Y1;function No(){return Y1||(Y1=1,mh.exports=lC()),mh.exports}var b=No();const fA=Qn(b),sC=aC({__proto__:null,default:fA},[b]);var gh={exports:{}},Il={},vh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1;function cC(){return G1||(G1=1,(function(e){function t($,K){var ne=$.length;$.push(K);e:for(;0<ne;){var oe=ne-1>>>1,D=$[oe];if(0<l(D,K))$[oe]=K,$[ne]=D,ne=oe;else break e}}function r($){return $.length===0?null:$[0]}function n($){if($.length===0)return null;var K=$[0],ne=$.pop();if(ne!==K){$[0]=ne;e:for(var oe=0,D=$.length,V=D>>>1;oe<V;){var ae=2*(oe+1)-1,re=$[ae],se=ae+1,Se=$[se];if(0>l(re,ne))se<D&&0>l(Se,re)?($[oe]=Se,$[se]=ne,oe=se):($[oe]=re,$[ae]=ne,oe=ae);else if(se<D&&0>l(Se,ne))$[oe]=Se,$[se]=ne,oe=se;else break e}}return K}function l($,K){var ne=$.sortIndex-K.sortIndex;return ne!==0?ne:$.id-K.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var d=Date,p=d.now();e.unstable_now=function(){return d.now()-p}}var h=[],m=[],g=1,x=null,w=3,j=!1,S=!1,A=!1,O=!1,k=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function _($){for(var K=r(m);K!==null;){if(K.callback===null)n(m);else if(K.startTime<=$)n(m),K.sortIndex=K.expirationTime,t(h,K);else break;K=r(m)}}function M($){if(A=!1,_($),!S)if(r(h)!==null)S=!0,R||(R=!0,J());else{var K=r(m);K!==null&&ye(M,K.startTime-$)}}var R=!1,U=-1,F=5,te=-1;function ie(){return O?!0:!(e.unstable_now()-te<F)}function Z(){if(O=!1,R){var $=e.unstable_now();te=$;var K=!0;try{e:{S=!1,A&&(A=!1,T(U),U=-1),j=!0;var ne=w;try{t:{for(_($),x=r(h);x!==null&&!(x.expirationTime>$&&ie());){var oe=x.callback;if(typeof oe=="function"){x.callback=null,w=x.priorityLevel;var D=oe(x.expirationTime<=$);if($=e.unstable_now(),typeof D=="function"){x.callback=D,_($),K=!0;break t}x===r(h)&&n(h),_($)}else n(h);x=r(h)}if(x!==null)K=!0;else{var V=r(m);V!==null&&ye(M,V.startTime-$),K=!1}}break e}finally{x=null,w=ne,j=!1}K=void 0}}finally{K?J():R=!1}}}var J;if(typeof C=="function")J=function(){C(Z)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ge=he.port2;he.port1.onmessage=Z,J=function(){ge.postMessage(null)}}else J=function(){k(Z,0)};function ye($,K){U=k(function(){$(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_next=function($){switch(w){case 1:case 2:case 3:var K=3;break;default:K=w}var ne=w;w=K;try{return $()}finally{w=ne}},e.unstable_requestPaint=function(){O=!0},e.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ne=w;w=$;try{return K()}finally{w=ne}},e.unstable_scheduleCallback=function($,K,ne){var oe=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?oe+ne:oe):ne=oe,$){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ne+D,$={id:g++,callback:K,priorityLevel:$,startTime:ne,expirationTime:D,sortIndex:-1},ne>oe?($.sortIndex=ne,t(m,$),r(h)===null&&$===r(m)&&(A?(T(U),U=-1):A=!0,ye(M,ne-oe))):($.sortIndex=D,t(h,$),S||j||(S=!0,R||(R=!0,J()))),$},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function($){var K=w;return function(){var ne=w;w=K;try{return $.apply(this,arguments)}finally{w=ne}}}})(xh)),xh}var K1;function uC(){return K1||(K1=1,vh.exports=cC()),vh.exports}var yh={exports:{}},Vt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1;function dC(){if(W1)return Vt;W1=1;var e=No();function t(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var n={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},l=Symbol.for("react.portal");function s(h,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:h,containerInfo:m,implementation:g}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,Vt.createPortal=function(h,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return s(h,m,null,g)},Vt.flushSync=function(h){var m=d.T,g=n.p;try{if(d.T=null,n.p=2,h)return h()}finally{d.T=m,n.p=g,n.d.f()}},Vt.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,n.d.C(h,m))},Vt.prefetchDNS=function(h){typeof h=="string"&&n.d.D(h)},Vt.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var g=m.as,x=p(g,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,j=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?n.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:j}):g==="script"&&n.d.X(h,{crossOrigin:x,integrity:w,fetchPriority:j,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Vt.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=p(m.as,m.crossOrigin);n.d.M(h,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&n.d.M(h)},Vt.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=p(g,m.crossOrigin);n.d.L(h,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Vt.preloadModule=function(h,m){if(typeof h=="string")if(m){var g=p(m.as,m.crossOrigin);n.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else n.d.m(h)},Vt.requestFormReset=function(h){n.d.r(h)},Vt.unstable_batchedUpdates=function(h,m){return h(m)},Vt.useFormState=function(h,m,g){return d.H.useFormState(h,m,g)},Vt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Vt.version="19.1.1",Vt}var V1;function pA(){if(V1)return yh.exports;V1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),yh.exports=dC(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X1;function fC(){if(X1)return Il;X1=1;var e=uC(),t=No(),r=pA();function n(a){var o="https://react.dev/errors/"+a;if(1<arguments.length){o+="?args[]="+encodeURIComponent(arguments[1]);for(var c=2;c<arguments.length;c++)o+="&args[]="+encodeURIComponent(arguments[c])}return"Minified React error #"+a+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function s(a){var o=a,c=a;if(a.alternate)for(;o.return;)o=o.return;else{a=o;do o=a,(o.flags&4098)!==0&&(c=o.return),a=o.return;while(a)}return o.tag===3?c:null}function d(a){if(a.tag===13){var o=a.memoizedState;if(o===null&&(a=a.alternate,a!==null&&(o=a.memoizedState)),o!==null)return o.dehydrated}return null}function p(a){if(s(a)!==a)throw Error(n(188))}function h(a){var o=a.alternate;if(!o){if(o=s(a),o===null)throw Error(n(188));return o!==a?null:a}for(var c=a,f=o;;){var v=c.return;if(v===null)break;var y=v.alternate;if(y===null){if(f=v.return,f!==null){c=f;continue}break}if(v.child===y.child){for(y=v.child;y;){if(y===c)return p(v),a;if(y===f)return p(v),o;y=y.sibling}throw Error(n(188))}if(c.return!==f.return)c=v,f=y;else{for(var E=!1,N=v.child;N;){if(N===c){E=!0,c=v,f=y;break}if(N===f){E=!0,f=v,c=y;break}N=N.sibling}if(!E){for(N=y.child;N;){if(N===c){E=!0,c=y,f=v;break}if(N===f){E=!0,f=y,c=v;break}N=N.sibling}if(!E)throw Error(n(189))}}if(c.alternate!==f)throw Error(n(190))}if(c.tag!==3)throw Error(n(188));return c.stateNode.current===c?a:o}function m(a){var o=a.tag;if(o===5||o===26||o===27||o===6)return a;for(a=a.child;a!==null;){if(o=m(a),o!==null)return o;a=a.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),C=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function J(a){return a===null||typeof a!="object"?null:(a=Z&&a[Z]||a["@@iterator"],typeof a=="function"?a:null)}var he=Symbol.for("react.client.reference");function ge(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===he?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case S:return"Fragment";case O:return"Profiler";case A:return"StrictMode";case M:return"Suspense";case R:return"SuspenseList";case te:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case j:return"Portal";case C:return(a.displayName||"Context")+".Provider";case T:return(a._context.displayName||"Context")+".Consumer";case _:var o=a.render;return a=a.displayName,a||(a=o.displayName||o.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case U:return o=a.displayName||null,o!==null?o:ge(a.type)||"Memo";case F:o=a._payload,a=a._init;try{return ge(a(o))}catch{}}return null}var ye=Array.isArray,$=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},oe=[],D=-1;function V(a){return{current:a}}function ae(a){0>D||(a.current=oe[D],oe[D]=null,D--)}function re(a,o){D++,oe[D]=a.current,a.current=o}var se=V(null),Se=V(null),ve=V(null),Ue=V(null);function He(a,o){switch(re(ve,o),re(Se,a),re(se,null),o.nodeType){case 9:case 11:a=(a=o.documentElement)&&(a=a.namespaceURI)?m1(a):0;break;default:if(a=o.tagName,o=o.namespaceURI)o=m1(o),a=g1(o,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}ae(se),re(se,a)}function Q(){ae(se),ae(Se),ae(ve)}function Ae(a){a.memoizedState!==null&&re(Ue,a);var o=se.current,c=g1(o,a.type);o!==c&&(re(Se,a),re(se,c))}function Ce(a){Se.current===a&&(ae(se),ae(Se)),Ue.current===a&&(ae(Ue),Pl._currentValue=ne)}var ee=Object.prototype.hasOwnProperty,Ct=e.unstable_scheduleCallback,Le=e.unstable_cancelCallback,Qt=e.unstable_shouldYield,Jt=e.unstable_requestPaint,Tt=e.unstable_now,_s=e.unstable_getCurrentPriorityLevel,Xv=e.unstable_ImmediatePriority,Fv=e.unstable_UserBlockingPriority,Ps=e.unstable_NormalPriority,I5=e.unstable_LowPriority,Zv=e.unstable_IdlePriority,q5=e.log,$5=e.unstable_setDisableYieldValue,$o=null,gr=null;function ia(a){if(typeof q5=="function"&&$5(a),gr&&typeof gr.setStrictMode=="function")try{gr.setStrictMode($o,a)}catch{}}var vr=Math.clz32?Math.clz32:Y5,U5=Math.log,H5=Math.LN2;function Y5(a){return a>>>=0,a===0?32:31-(U5(a)/H5|0)|0}var Ds=256,zs=4194304;function Ia(a){var o=a&42;if(o!==0)return o;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function Rs(a,o,c){var f=a.pendingLanes;if(f===0)return 0;var v=0,y=a.suspendedLanes,E=a.pingedLanes;a=a.warmLanes;var N=f&134217727;return N!==0?(f=N&~y,f!==0?v=Ia(f):(E&=N,E!==0?v=Ia(E):c||(c=N&~a,c!==0&&(v=Ia(c))))):(N=f&~y,N!==0?v=Ia(N):E!==0?v=Ia(E):c||(c=f&~a,c!==0&&(v=Ia(c)))),v===0?0:o!==0&&o!==v&&(o&y)===0&&(y=v&-v,c=o&-o,y>=c||y===32&&(c&4194048)!==0)?o:v}function Uo(a,o){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&o)===0}function G5(a,o){switch(a){case 1:case 2:case 4:case 8:case 64:return o+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qv(){var a=Ds;return Ds<<=1,(Ds&4194048)===0&&(Ds=256),a}function Jv(){var a=zs;return zs<<=1,(zs&62914560)===0&&(zs=4194304),a}function rf(a){for(var o=[],c=0;31>c;c++)o.push(a);return o}function Ho(a,o){a.pendingLanes|=o,o!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function K5(a,o,c,f,v,y){var E=a.pendingLanes;a.pendingLanes=c,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=c,a.entangledLanes&=c,a.errorRecoveryDisabledLanes&=c,a.shellSuspendCounter=0;var N=a.entanglements,P=a.expirationTimes,I=a.hiddenUpdates;for(c=E&~c;0<c;){var G=31-vr(c),X=1<<G;N[G]=0,P[G]=-1;var q=I[G];if(q!==null)for(I[G]=null,G=0;G<q.length;G++){var H=q[G];H!==null&&(H.lane&=-536870913)}c&=~X}f!==0&&ex(a,f,0),y!==0&&v===0&&a.tag!==0&&(a.suspendedLanes|=y&~(E&~o))}function ex(a,o,c){a.pendingLanes|=o,a.suspendedLanes&=~o;var f=31-vr(o);a.entangledLanes|=o,a.entanglements[f]=a.entanglements[f]|1073741824|c&4194090}function tx(a,o){var c=a.entangledLanes|=o;for(a=a.entanglements;c;){var f=31-vr(c),v=1<<f;v&o|a[f]&o&&(a[f]|=o),c&=~v}}function nf(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function af(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function rx(){var a=K.p;return a!==0?a:(a=window.event,a===void 0?32:z1(a.type))}function W5(a,o){var c=K.p;try{return K.p=a,o()}finally{K.p=c}}var oa=Math.random().toString(36).slice(2),Kt="__reactFiber$"+oa,ir="__reactProps$"+oa,ki="__reactContainer$"+oa,of="__reactEvents$"+oa,V5="__reactListeners$"+oa,X5="__reactHandles$"+oa,nx="__reactResources$"+oa,Yo="__reactMarker$"+oa;function lf(a){delete a[Kt],delete a[ir],delete a[of],delete a[V5],delete a[X5]}function Ni(a){var o=a[Kt];if(o)return o;for(var c=a.parentNode;c;){if(o=c[ki]||c[Kt]){if(c=o.alternate,o.child!==null||c!==null&&c.child!==null)for(a=b1(a);a!==null;){if(c=a[Kt])return c;a=b1(a)}return o}a=c,c=a.parentNode}return null}function Ci(a){if(a=a[Kt]||a[ki]){var o=a.tag;if(o===5||o===6||o===13||o===26||o===27||o===3)return a}return null}function Go(a){var o=a.tag;if(o===5||o===26||o===27||o===6)return a.stateNode;throw Error(n(33))}function Ti(a){var o=a[nx];return o||(o=a[nx]={hoistableStyles:new Map,hoistableScripts:new Map}),o}function Mt(a){a[Yo]=!0}var ax=new Set,ix={};function qa(a,o){Mi(a,o),Mi(a+"Capture",o)}function Mi(a,o){for(ix[a]=o,a=0;a<o.length;a++)ax.add(o[a])}var F5=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ox={},lx={};function Z5(a){return ee.call(lx,a)?!0:ee.call(ox,a)?!1:F5.test(a)?lx[a]=!0:(ox[a]=!0,!1)}function Ls(a,o,c){if(Z5(o))if(c===null)a.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":a.removeAttribute(o);return;case"boolean":var f=o.toLowerCase().slice(0,5);if(f!=="data-"&&f!=="aria-"){a.removeAttribute(o);return}}a.setAttribute(o,""+c)}}function Bs(a,o,c){if(c===null)a.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(o);return}a.setAttribute(o,""+c)}}function bn(a,o,c,f){if(f===null)a.removeAttribute(c);else{switch(typeof f){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(c);return}a.setAttributeNS(o,c,""+f)}}var sf,sx;function _i(a){if(sf===void 0)try{throw Error()}catch(c){var o=c.stack.trim().match(/\n( *(at )?)/);sf=o&&o[1]||"",sx=-1<c.stack.indexOf(`
    at`)?" (<anonymous>)":-1<c.stack.indexOf("@")?"@unknown:0:0":""}return`
`+sf+a+sx}var cf=!1;function uf(a,o){if(!a||cf)return"";cf=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var f={DetermineComponentFrameRoot:function(){try{if(o){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(H){var q=H}Reflect.construct(a,[],X)}else{try{X.call()}catch(H){q=H}a.call(X.prototype)}}else{try{throw Error()}catch(H){q=H}(X=a())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};f.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var v=Object.getOwnPropertyDescriptor(f.DetermineComponentFrameRoot,"name");v&&v.configurable&&Object.defineProperty(f.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var y=f.DetermineComponentFrameRoot(),E=y[0],N=y[1];if(E&&N){var P=E.split(`
`),I=N.split(`
`);for(v=f=0;f<P.length&&!P[f].includes("DetermineComponentFrameRoot");)f++;for(;v<I.length&&!I[v].includes("DetermineComponentFrameRoot");)v++;if(f===P.length||v===I.length)for(f=P.length-1,v=I.length-1;1<=f&&0<=v&&P[f]!==I[v];)v--;for(;1<=f&&0<=v;f--,v--)if(P[f]!==I[v]){if(f!==1||v!==1)do if(f--,v--,0>v||P[f]!==I[v]){var G=`
`+P[f].replace(" at new "," at ");return a.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",a.displayName)),G}while(1<=f&&0<=v);break}}}finally{cf=!1,Error.prepareStackTrace=c}return(c=a?a.displayName||a.name:"")?_i(c):""}function Q5(a){switch(a.tag){case 26:case 27:case 5:return _i(a.type);case 16:return _i("Lazy");case 13:return _i("Suspense");case 19:return _i("SuspenseList");case 0:case 15:return uf(a.type,!1);case 11:return uf(a.type.render,!1);case 1:return uf(a.type,!0);case 31:return _i("Activity");default:return""}}function cx(a){try{var o="";do o+=Q5(a),a=a.return;while(a);return o}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}function Mr(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function ux(a){var o=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function J5(a){var o=ux(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,o),f=""+a[o];if(!a.hasOwnProperty(o)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var v=c.get,y=c.set;return Object.defineProperty(a,o,{configurable:!0,get:function(){return v.call(this)},set:function(E){f=""+E,y.call(this,E)}}),Object.defineProperty(a,o,{enumerable:c.enumerable}),{getValue:function(){return f},setValue:function(E){f=""+E},stopTracking:function(){a._valueTracker=null,delete a[o]}}}}function Is(a){a._valueTracker||(a._valueTracker=J5(a))}function dx(a){if(!a)return!1;var o=a._valueTracker;if(!o)return!0;var c=o.getValue(),f="";return a&&(f=ux(a)?a.checked?"true":"false":a.value),a=f,a!==c?(o.setValue(a),!0):!1}function qs(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var eN=/[\n"\\]/g;function _r(a){return a.replace(eN,function(o){return"\\"+o.charCodeAt(0).toString(16)+" "})}function df(a,o,c,f,v,y,E,N){a.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?a.type=E:a.removeAttribute("type"),o!=null?E==="number"?(o===0&&a.value===""||a.value!=o)&&(a.value=""+Mr(o)):a.value!==""+Mr(o)&&(a.value=""+Mr(o)):E!=="submit"&&E!=="reset"||a.removeAttribute("value"),o!=null?ff(a,E,Mr(o)):c!=null?ff(a,E,Mr(c)):f!=null&&a.removeAttribute("value"),v==null&&y!=null&&(a.defaultChecked=!!y),v!=null&&(a.checked=v&&typeof v!="function"&&typeof v!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?a.name=""+Mr(N):a.removeAttribute("name")}function fx(a,o,c,f,v,y,E,N){if(y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(a.type=y),o!=null||c!=null){if(!(y!=="submit"&&y!=="reset"||o!=null))return;c=c!=null?""+Mr(c):"",o=o!=null?""+Mr(o):c,N||o===a.value||(a.value=o),a.defaultValue=o}f=f??v,f=typeof f!="function"&&typeof f!="symbol"&&!!f,a.checked=N?a.checked:!!f,a.defaultChecked=!!f,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(a.name=E)}function ff(a,o,c){o==="number"&&qs(a.ownerDocument)===a||a.defaultValue===""+c||(a.defaultValue=""+c)}function Pi(a,o,c,f){if(a=a.options,o){o={};for(var v=0;v<c.length;v++)o["$"+c[v]]=!0;for(c=0;c<a.length;c++)v=o.hasOwnProperty("$"+a[c].value),a[c].selected!==v&&(a[c].selected=v),v&&f&&(a[c].defaultSelected=!0)}else{for(c=""+Mr(c),o=null,v=0;v<a.length;v++){if(a[v].value===c){a[v].selected=!0,f&&(a[v].defaultSelected=!0);return}o!==null||a[v].disabled||(o=a[v])}o!==null&&(o.selected=!0)}}function px(a,o,c){if(o!=null&&(o=""+Mr(o),o!==a.value&&(a.value=o),c==null)){a.defaultValue!==o&&(a.defaultValue=o);return}a.defaultValue=c!=null?""+Mr(c):""}function hx(a,o,c,f){if(o==null){if(f!=null){if(c!=null)throw Error(n(92));if(ye(f)){if(1<f.length)throw Error(n(93));f=f[0]}c=f}c==null&&(c=""),o=c}c=Mr(o),a.defaultValue=c,f=a.textContent,f===c&&f!==""&&f!==null&&(a.value=f)}function Di(a,o){if(o){var c=a.firstChild;if(c&&c===a.lastChild&&c.nodeType===3){c.nodeValue=o;return}}a.textContent=o}var tN=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mx(a,o,c){var f=o.indexOf("--")===0;c==null||typeof c=="boolean"||c===""?f?a.setProperty(o,""):o==="float"?a.cssFloat="":a[o]="":f?a.setProperty(o,c):typeof c!="number"||c===0||tN.has(o)?o==="float"?a.cssFloat=c:a[o]=(""+c).trim():a[o]=c+"px"}function gx(a,o,c){if(o!=null&&typeof o!="object")throw Error(n(62));if(a=a.style,c!=null){for(var f in c)!c.hasOwnProperty(f)||o!=null&&o.hasOwnProperty(f)||(f.indexOf("--")===0?a.setProperty(f,""):f==="float"?a.cssFloat="":a[f]="");for(var v in o)f=o[v],o.hasOwnProperty(v)&&c[v]!==f&&mx(a,v,f)}else for(var y in o)o.hasOwnProperty(y)&&mx(a,y,o[y])}function pf(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rN=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nN=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $s(a){return nN.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}var hf=null;function mf(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var zi=null,Ri=null;function vx(a){var o=Ci(a);if(o&&(a=o.stateNode)){var c=a[ir]||null;e:switch(a=o.stateNode,o.type){case"input":if(df(a,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name),o=c.name,c.type==="radio"&&o!=null){for(c=a;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll('input[name="'+_r(""+o)+'"][type="radio"]'),o=0;o<c.length;o++){var f=c[o];if(f!==a&&f.form===a.form){var v=f[ir]||null;if(!v)throw Error(n(90));df(f,v.value,v.defaultValue,v.defaultValue,v.checked,v.defaultChecked,v.type,v.name)}}for(o=0;o<c.length;o++)f=c[o],f.form===a.form&&dx(f)}break e;case"textarea":px(a,c.value,c.defaultValue);break e;case"select":o=c.value,o!=null&&Pi(a,!!c.multiple,o,!1)}}}var gf=!1;function xx(a,o,c){if(gf)return a(o,c);gf=!0;try{var f=a(o);return f}finally{if(gf=!1,(zi!==null||Ri!==null)&&(Ec(),zi&&(o=zi,a=Ri,Ri=zi=null,vx(o),a)))for(o=0;o<a.length;o++)vx(a[o])}}function Ko(a,o){var c=a.stateNode;if(c===null)return null;var f=c[ir]||null;if(f===null)return null;c=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(a=a.type,f=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!f;break e;default:a=!1}if(a)return null;if(c&&typeof c!="function")throw Error(n(231,o,typeof c));return c}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vf=!1;if(wn)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){vf=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{vf=!1}var la=null,xf=null,Us=null;function yx(){if(Us)return Us;var a,o=xf,c=o.length,f,v="value"in la?la.value:la.textContent,y=v.length;for(a=0;a<c&&o[a]===v[a];a++);var E=c-a;for(f=1;f<=E&&o[c-f]===v[y-f];f++);return Us=v.slice(a,1<f?1-f:void 0)}function Hs(a){var o=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&o===13&&(a=13)):a=o,a===10&&(a=13),32<=a||a===13?a:0}function Ys(){return!0}function bx(){return!1}function or(a){function o(c,f,v,y,E){this._reactName=c,this._targetInst=v,this.type=f,this.nativeEvent=y,this.target=E,this.currentTarget=null;for(var N in a)a.hasOwnProperty(N)&&(c=a[N],this[N]=c?c(y):y[N]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Ys:bx,this.isPropagationStopped=bx,this}return g(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),o}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=or($a),Vo=g({},$a,{view:0,detail:0}),aN=or(Vo),yf,bf,Xo,Ks=g({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==Xo&&(Xo&&a.type==="mousemove"?(yf=a.screenX-Xo.screenX,bf=a.screenY-Xo.screenY):bf=yf=0,Xo=a),yf)},movementY:function(a){return"movementY"in a?a.movementY:bf}}),wx=or(Ks),iN=g({},Ks,{dataTransfer:0}),oN=or(iN),lN=g({},Vo,{relatedTarget:0}),wf=or(lN),sN=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),cN=or(sN),uN=g({},$a,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),dN=or(uN),fN=g({},$a,{data:0}),jx=or(fN),pN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gN(a){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(a):(a=mN[a])?!!o[a]:!1}function jf(){return gN}var vN=g({},Vo,{key:function(a){if(a.key){var o=pN[a.key]||a.key;if(o!=="Unidentified")return o}return a.type==="keypress"?(a=Hs(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?hN[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(a){return a.type==="keypress"?Hs(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?Hs(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),xN=or(vN),yN=g({},Ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sx=or(yN),bN=g({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),wN=or(bN),jN=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),SN=or(jN),AN=g({},Ks,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),ON=or(AN),EN=g({},$a,{newState:0,oldState:0}),kN=or(EN),NN=[9,13,27,32],Sf=wn&&"CompositionEvent"in window,Fo=null;wn&&"documentMode"in document&&(Fo=document.documentMode);var CN=wn&&"TextEvent"in window&&!Fo,Ax=wn&&(!Sf||Fo&&8<Fo&&11>=Fo),Ox=" ",Ex=!1;function kx(a,o){switch(a){case"keyup":return NN.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nx(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Li=!1;function TN(a,o){switch(a){case"compositionend":return Nx(o);case"keypress":return o.which!==32?null:(Ex=!0,Ox);case"textInput":return a=o.data,a===Ox&&Ex?null:a;default:return null}}function MN(a,o){if(Li)return a==="compositionend"||!Sf&&kx(a,o)?(a=yx(),Us=xf=la=null,Li=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Ax&&o.locale!=="ko"?null:o.data;default:return null}}var _N={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cx(a){var o=a&&a.nodeName&&a.nodeName.toLowerCase();return o==="input"?!!_N[a.type]:o==="textarea"}function Tx(a,o,c,f){zi?Ri?Ri.push(f):Ri=[f]:zi=f,o=_c(o,"onChange"),0<o.length&&(c=new Gs("onChange","change",null,c,f),a.push({event:c,listeners:o}))}var Zo=null,Qo=null;function PN(a){u1(a,0)}function Ws(a){var o=Go(a);if(dx(o))return a}function Mx(a,o){if(a==="change")return o}var _x=!1;if(wn){var Af;if(wn){var Of="oninput"in document;if(!Of){var Px=document.createElement("div");Px.setAttribute("oninput","return;"),Of=typeof Px.oninput=="function"}Af=Of}else Af=!1;_x=Af&&(!document.documentMode||9<document.documentMode)}function Dx(){Zo&&(Zo.detachEvent("onpropertychange",zx),Qo=Zo=null)}function zx(a){if(a.propertyName==="value"&&Ws(Qo)){var o=[];Tx(o,Qo,a,mf(a)),xx(PN,o)}}function DN(a,o,c){a==="focusin"?(Dx(),Zo=o,Qo=c,Zo.attachEvent("onpropertychange",zx)):a==="focusout"&&Dx()}function zN(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return Ws(Qo)}function RN(a,o){if(a==="click")return Ws(o)}function LN(a,o){if(a==="input"||a==="change")return Ws(o)}function BN(a,o){return a===o&&(a!==0||1/a===1/o)||a!==a&&o!==o}var xr=typeof Object.is=="function"?Object.is:BN;function Jo(a,o){if(xr(a,o))return!0;if(typeof a!="object"||a===null||typeof o!="object"||o===null)return!1;var c=Object.keys(a),f=Object.keys(o);if(c.length!==f.length)return!1;for(f=0;f<c.length;f++){var v=c[f];if(!ee.call(o,v)||!xr(a[v],o[v]))return!1}return!0}function Rx(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Lx(a,o){var c=Rx(a);a=0;for(var f;c;){if(c.nodeType===3){if(f=a+c.textContent.length,a<=o&&f>=o)return{node:c,offset:o-a};a=f}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=Rx(c)}}function Bx(a,o){return a&&o?a===o?!0:a&&a.nodeType===3?!1:o&&o.nodeType===3?Bx(a,o.parentNode):"contains"in a?a.contains(o):a.compareDocumentPosition?!!(a.compareDocumentPosition(o)&16):!1:!1}function Ix(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var o=qs(a.document);o instanceof a.HTMLIFrameElement;){try{var c=typeof o.contentWindow.location.href=="string"}catch{c=!1}if(c)a=o.contentWindow;else break;o=qs(a.document)}return o}function Ef(a){var o=a&&a.nodeName&&a.nodeName.toLowerCase();return o&&(o==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||o==="textarea"||a.contentEditable==="true")}var IN=wn&&"documentMode"in document&&11>=document.documentMode,Bi=null,kf=null,el=null,Nf=!1;function qx(a,o,c){var f=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Nf||Bi==null||Bi!==qs(f)||(f=Bi,"selectionStart"in f&&Ef(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),el&&Jo(el,f)||(el=f,f=_c(kf,"onSelect"),0<f.length&&(o=new Gs("onSelect","select",null,o,c),a.push({event:o,listeners:f}),o.target=Bi)))}function Ua(a,o){var c={};return c[a.toLowerCase()]=o.toLowerCase(),c["Webkit"+a]="webkit"+o,c["Moz"+a]="moz"+o,c}var Ii={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},Cf={},$x={};wn&&($x=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function Ha(a){if(Cf[a])return Cf[a];if(!Ii[a])return a;var o=Ii[a],c;for(c in o)if(o.hasOwnProperty(c)&&c in $x)return Cf[a]=o[c];return a}var Ux=Ha("animationend"),Hx=Ha("animationiteration"),Yx=Ha("animationstart"),qN=Ha("transitionrun"),$N=Ha("transitionstart"),UN=Ha("transitioncancel"),Gx=Ha("transitionend"),Kx=new Map,Tf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tf.push("scrollEnd");function Zr(a,o){Kx.set(a,o),qa(o,[a])}var Wx=new WeakMap;function Pr(a,o){if(typeof a=="object"&&a!==null){var c=Wx.get(a);return c!==void 0?c:(o={value:a,source:o,stack:cx(o)},Wx.set(a,o),o)}return{value:a,source:o,stack:cx(o)}}var Dr=[],qi=0,Mf=0;function Vs(){for(var a=qi,o=Mf=qi=0;o<a;){var c=Dr[o];Dr[o++]=null;var f=Dr[o];Dr[o++]=null;var v=Dr[o];Dr[o++]=null;var y=Dr[o];if(Dr[o++]=null,f!==null&&v!==null){var E=f.pending;E===null?v.next=v:(v.next=E.next,E.next=v),f.pending=v}y!==0&&Vx(c,v,y)}}function Xs(a,o,c,f){Dr[qi++]=a,Dr[qi++]=o,Dr[qi++]=c,Dr[qi++]=f,Mf|=f,a.lanes|=f,a=a.alternate,a!==null&&(a.lanes|=f)}function _f(a,o,c,f){return Xs(a,o,c,f),Fs(a)}function $i(a,o){return Xs(a,null,null,o),Fs(a)}function Vx(a,o,c){a.lanes|=c;var f=a.alternate;f!==null&&(f.lanes|=c);for(var v=!1,y=a.return;y!==null;)y.childLanes|=c,f=y.alternate,f!==null&&(f.childLanes|=c),y.tag===22&&(a=y.stateNode,a===null||a._visibility&1||(v=!0)),a=y,y=y.return;return a.tag===3?(y=a.stateNode,v&&o!==null&&(v=31-vr(c),a=y.hiddenUpdates,f=a[v],f===null?a[v]=[o]:f.push(o),o.lane=c|536870912),y):null}function Fs(a){if(50<Ol)throw Ol=0,Bp=null,Error(n(185));for(var o=a.return;o!==null;)a=o,o=a.return;return a.tag===3?a.stateNode:null}var Ui={};function HN(a,o,c,f){this.tag=a,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yr(a,o,c,f){return new HN(a,o,c,f)}function Pf(a){return a=a.prototype,!(!a||!a.isReactComponent)}function jn(a,o){var c=a.alternate;return c===null?(c=yr(a.tag,o,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=o,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=a.flags&65011712,c.childLanes=a.childLanes,c.lanes=a.lanes,c.child=a.child,c.memoizedProps=a.memoizedProps,c.memoizedState=a.memoizedState,c.updateQueue=a.updateQueue,o=a.dependencies,c.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},c.sibling=a.sibling,c.index=a.index,c.ref=a.ref,c.refCleanup=a.refCleanup,c}function Xx(a,o){a.flags&=65011714;var c=a.alternate;return c===null?(a.childLanes=0,a.lanes=o,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,o=c.dependencies,a.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),a}function Zs(a,o,c,f,v,y){var E=0;if(f=a,typeof a=="function")Pf(a)&&(E=1);else if(typeof a=="string")E=G4(a,c,se.current)?26:a==="html"||a==="head"||a==="body"?27:5;else e:switch(a){case te:return a=yr(31,c,o,v),a.elementType=te,a.lanes=y,a;case S:return Ya(c.children,v,y,o);case A:E=8,v|=24;break;case O:return a=yr(12,c,o,v|2),a.elementType=O,a.lanes=y,a;case M:return a=yr(13,c,o,v),a.elementType=M,a.lanes=y,a;case R:return a=yr(19,c,o,v),a.elementType=R,a.lanes=y,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case k:case C:E=10;break e;case T:E=9;break e;case _:E=11;break e;case U:E=14;break e;case F:E=16,f=null;break e}E=29,c=Error(n(130,a===null?"null":typeof a,"")),f=null}return o=yr(E,c,o,v),o.elementType=a,o.type=f,o.lanes=y,o}function Ya(a,o,c,f){return a=yr(7,a,f,o),a.lanes=c,a}function Df(a,o,c){return a=yr(6,a,null,o),a.lanes=c,a}function zf(a,o,c){return o=yr(4,a.children!==null?a.children:[],a.key,o),o.lanes=c,o.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},o}var Hi=[],Yi=0,Qs=null,Js=0,zr=[],Rr=0,Ga=null,Sn=1,An="";function Ka(a,o){Hi[Yi++]=Js,Hi[Yi++]=Qs,Qs=a,Js=o}function Fx(a,o,c){zr[Rr++]=Sn,zr[Rr++]=An,zr[Rr++]=Ga,Ga=a;var f=Sn;a=An;var v=32-vr(f)-1;f&=~(1<<v),c+=1;var y=32-vr(o)+v;if(30<y){var E=v-v%5;y=(f&(1<<E)-1).toString(32),f>>=E,v-=E,Sn=1<<32-vr(o)+v|c<<v|f,An=y+a}else Sn=1<<y|c<<v|f,An=a}function Rf(a){a.return!==null&&(Ka(a,1),Fx(a,1,0))}function Lf(a){for(;a===Qs;)Qs=Hi[--Yi],Hi[Yi]=null,Js=Hi[--Yi],Hi[Yi]=null;for(;a===Ga;)Ga=zr[--Rr],zr[Rr]=null,An=zr[--Rr],zr[Rr]=null,Sn=zr[--Rr],zr[Rr]=null}var er=null,lt=null,ze=!1,Wa=null,cn=!1,Bf=Error(n(519));function Va(a){var o=Error(n(418,""));throw nl(Pr(o,a)),Bf}function Zx(a){var o=a.stateNode,c=a.type,f=a.memoizedProps;switch(o[Kt]=a,o[ir]=f,c){case"dialog":Me("cancel",o),Me("close",o);break;case"iframe":case"object":case"embed":Me("load",o);break;case"video":case"audio":for(c=0;c<kl.length;c++)Me(kl[c],o);break;case"source":Me("error",o);break;case"img":case"image":case"link":Me("error",o),Me("load",o);break;case"details":Me("toggle",o);break;case"input":Me("invalid",o),fx(o,f.value,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name,!0),Is(o);break;case"select":Me("invalid",o);break;case"textarea":Me("invalid",o),hx(o,f.value,f.defaultValue,f.children),Is(o)}c=f.children,typeof c!="string"&&typeof c!="number"&&typeof c!="bigint"||o.textContent===""+c||f.suppressHydrationWarning===!0||h1(o.textContent,c)?(f.popover!=null&&(Me("beforetoggle",o),Me("toggle",o)),f.onScroll!=null&&Me("scroll",o),f.onScrollEnd!=null&&Me("scrollend",o),f.onClick!=null&&(o.onclick=Pc),o=!0):o=!1,o||Va(a)}function Qx(a){for(er=a.return;er;)switch(er.tag){case 5:case 13:cn=!1;return;case 27:case 3:cn=!0;return;default:er=er.return}}function tl(a){if(a!==er)return!1;if(!ze)return Qx(a),ze=!0,!1;var o=a.tag,c;if((c=o!==3&&o!==27)&&((c=o===5)&&(c=a.type,c=!(c!=="form"&&c!=="button")||eh(a.type,a.memoizedProps)),c=!c),c&&lt&&Va(a),Qx(a),o===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(n(317));e:{for(a=a.nextSibling,o=0;a;){if(a.nodeType===8)if(c=a.data,c==="/$"){if(o===0){lt=Jr(a.nextSibling);break e}o--}else c!=="$"&&c!=="$!"&&c!=="$?"||o++;a=a.nextSibling}lt=null}}else o===27?(o=lt,Sa(a.type)?(a=ah,ah=null,lt=a):lt=o):lt=er?Jr(a.stateNode.nextSibling):null;return!0}function rl(){lt=er=null,ze=!1}function Jx(){var a=Wa;return a!==null&&(cr===null?cr=a:cr.push.apply(cr,a),Wa=null),a}function nl(a){Wa===null?Wa=[a]:Wa.push(a)}var If=V(null),Xa=null,On=null;function sa(a,o,c){re(If,o._currentValue),o._currentValue=c}function En(a){a._currentValue=If.current,ae(If)}function qf(a,o,c){for(;a!==null;){var f=a.alternate;if((a.childLanes&o)!==o?(a.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),a===c)break;a=a.return}}function $f(a,o,c,f){var v=a.child;for(v!==null&&(v.return=a);v!==null;){var y=v.dependencies;if(y!==null){var E=v.child;y=y.firstContext;e:for(;y!==null;){var N=y;y=v;for(var P=0;P<o.length;P++)if(N.context===o[P]){y.lanes|=c,N=y.alternate,N!==null&&(N.lanes|=c),qf(y.return,c,a),f||(E=null);break e}y=N.next}}else if(v.tag===18){if(E=v.return,E===null)throw Error(n(341));E.lanes|=c,y=E.alternate,y!==null&&(y.lanes|=c),qf(E,c,a),E=null}else E=v.child;if(E!==null)E.return=v;else for(E=v;E!==null;){if(E===a){E=null;break}if(v=E.sibling,v!==null){v.return=E.return,E=v;break}E=E.return}v=E}}function al(a,o,c,f){a=null;for(var v=o,y=!1;v!==null;){if(!y){if((v.flags&524288)!==0)y=!0;else if((v.flags&262144)!==0)break}if(v.tag===10){var E=v.alternate;if(E===null)throw Error(n(387));if(E=E.memoizedProps,E!==null){var N=v.type;xr(v.pendingProps.value,E.value)||(a!==null?a.push(N):a=[N])}}else if(v===Ue.current){if(E=v.alternate,E===null)throw Error(n(387));E.memoizedState.memoizedState!==v.memoizedState.memoizedState&&(a!==null?a.push(Pl):a=[Pl])}v=v.return}a!==null&&$f(o,a,c,f),o.flags|=262144}function ec(a){for(a=a.firstContext;a!==null;){if(!xr(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Fa(a){Xa=a,On=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function Wt(a){return ey(Xa,a)}function tc(a,o){return Xa===null&&Fa(a),ey(a,o)}function ey(a,o){var c=o._currentValue;if(o={context:o,memoizedValue:c,next:null},On===null){if(a===null)throw Error(n(308));On=o,a.dependencies={lanes:0,firstContext:o},a.flags|=524288}else On=On.next=o;return c}var YN=typeof AbortController<"u"?AbortController:function(){var a=[],o=this.signal={aborted:!1,addEventListener:function(c,f){a.push(f)}};this.abort=function(){o.aborted=!0,a.forEach(function(c){return c()})}},GN=e.unstable_scheduleCallback,KN=e.unstable_NormalPriority,wt={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uf(){return{controller:new YN,data:new Map,refCount:0}}function il(a){a.refCount--,a.refCount===0&&GN(KN,function(){a.controller.abort()})}var ol=null,Hf=0,Gi=0,Ki=null;function WN(a,o){if(ol===null){var c=ol=[];Hf=0,Gi=Gp(),Ki={status:"pending",value:void 0,then:function(f){c.push(f)}}}return Hf++,o.then(ty,ty),o}function ty(){if(--Hf===0&&ol!==null){Ki!==null&&(Ki.status="fulfilled");var a=ol;ol=null,Gi=0,Ki=null;for(var o=0;o<a.length;o++)(0,a[o])()}}function VN(a,o){var c=[],f={status:"pending",value:null,reason:null,then:function(v){c.push(v)}};return a.then(function(){f.status="fulfilled",f.value=o;for(var v=0;v<c.length;v++)(0,c[v])(o)},function(v){for(f.status="rejected",f.reason=v,v=0;v<c.length;v++)(0,c[v])(void 0)}),f}var ry=$.S;$.S=function(a,o){typeof o=="object"&&o!==null&&typeof o.then=="function"&&WN(a,o),ry!==null&&ry(a,o)};var Za=V(null);function Yf(){var a=Za.current;return a!==null?a:Fe.pooledCache}function rc(a,o){o===null?re(Za,Za.current):re(Za,o.pool)}function ny(){var a=Yf();return a===null?null:{parent:wt._currentValue,pool:a}}var ll=Error(n(460)),ay=Error(n(474)),nc=Error(n(542)),Gf={then:function(){}};function iy(a){return a=a.status,a==="fulfilled"||a==="rejected"}function ac(){}function oy(a,o,c){switch(c=a[c],c===void 0?a.push(o):c!==o&&(o.then(ac,ac),o=c),o.status){case"fulfilled":return o.value;case"rejected":throw a=o.reason,sy(a),a;default:if(typeof o.status=="string")o.then(ac,ac);else{if(a=Fe,a!==null&&100<a.shellSuspendCounter)throw Error(n(482));a=o,a.status="pending",a.then(function(f){if(o.status==="pending"){var v=o;v.status="fulfilled",v.value=f}},function(f){if(o.status==="pending"){var v=o;v.status="rejected",v.reason=f}})}switch(o.status){case"fulfilled":return o.value;case"rejected":throw a=o.reason,sy(a),a}throw sl=o,ll}}var sl=null;function ly(){if(sl===null)throw Error(n(459));var a=sl;return sl=null,a}function sy(a){if(a===ll||a===nc)throw Error(n(483))}var ca=!1;function Kf(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wf(a,o){a=a.updateQueue,o.updateQueue===a&&(o.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function ua(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function da(a,o,c){var f=a.updateQueue;if(f===null)return null;if(f=f.shared,(Be&2)!==0){var v=f.pending;return v===null?o.next=o:(o.next=v.next,v.next=o),f.pending=o,o=Fs(a),Vx(a,null,c),o}return Xs(a,f,o,c),Fs(a)}function cl(a,o,c){if(o=o.updateQueue,o!==null&&(o=o.shared,(c&4194048)!==0)){var f=o.lanes;f&=a.pendingLanes,c|=f,o.lanes=c,tx(a,c)}}function Vf(a,o){var c=a.updateQueue,f=a.alternate;if(f!==null&&(f=f.updateQueue,c===f)){var v=null,y=null;if(c=c.firstBaseUpdate,c!==null){do{var E={lane:c.lane,tag:c.tag,payload:c.payload,callback:null,next:null};y===null?v=y=E:y=y.next=E,c=c.next}while(c!==null);y===null?v=y=o:y=y.next=o}else v=y=o;c={baseState:f.baseState,firstBaseUpdate:v,lastBaseUpdate:y,shared:f.shared,callbacks:f.callbacks},a.updateQueue=c;return}a=c.lastBaseUpdate,a===null?c.firstBaseUpdate=o:a.next=o,c.lastBaseUpdate=o}var Xf=!1;function ul(){if(Xf){var a=Ki;if(a!==null)throw a}}function dl(a,o,c,f){Xf=!1;var v=a.updateQueue;ca=!1;var y=v.firstBaseUpdate,E=v.lastBaseUpdate,N=v.shared.pending;if(N!==null){v.shared.pending=null;var P=N,I=P.next;P.next=null,E===null?y=I:E.next=I,E=P;var G=a.alternate;G!==null&&(G=G.updateQueue,N=G.lastBaseUpdate,N!==E&&(N===null?G.firstBaseUpdate=I:N.next=I,G.lastBaseUpdate=P))}if(y!==null){var X=v.baseState;E=0,G=I=P=null,N=y;do{var q=N.lane&-536870913,H=q!==N.lane;if(H?(_e&q)===q:(f&q)===q){q!==0&&q===Gi&&(Xf=!0),G!==null&&(G=G.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var be=a,me=N;q=o;var Ke=c;switch(me.tag){case 1:if(be=me.payload,typeof be=="function"){X=be.call(Ke,X,q);break e}X=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=me.payload,q=typeof be=="function"?be.call(Ke,X,q):be,q==null)break e;X=g({},X,q);break e;case 2:ca=!0}}q=N.callback,q!==null&&(a.flags|=64,H&&(a.flags|=8192),H=v.callbacks,H===null?v.callbacks=[q]:H.push(q))}else H={lane:q,tag:N.tag,payload:N.payload,callback:N.callback,next:null},G===null?(I=G=H,P=X):G=G.next=H,E|=q;if(N=N.next,N===null){if(N=v.shared.pending,N===null)break;H=N,N=H.next,H.next=null,v.lastBaseUpdate=H,v.shared.pending=null}}while(!0);G===null&&(P=X),v.baseState=P,v.firstBaseUpdate=I,v.lastBaseUpdate=G,y===null&&(v.shared.lanes=0),ya|=E,a.lanes=E,a.memoizedState=X}}function cy(a,o){if(typeof a!="function")throw Error(n(191,a));a.call(o)}function uy(a,o){var c=a.callbacks;if(c!==null)for(a.callbacks=null,a=0;a<c.length;a++)cy(c[a],o)}var Wi=V(null),ic=V(0);function dy(a,o){a=Pn,re(ic,a),re(Wi,o),Pn=a|o.baseLanes}function Ff(){re(ic,Pn),re(Wi,Wi.current)}function Zf(){Pn=ic.current,ae(Wi),ae(ic)}var fa=0,Oe=null,Ye=null,vt=null,oc=!1,Vi=!1,Qa=!1,lc=0,fl=0,Xi=null,XN=0;function ut(){throw Error(n(321))}function Qf(a,o){if(o===null)return!1;for(var c=0;c<o.length&&c<a.length;c++)if(!xr(a[c],o[c]))return!1;return!0}function Jf(a,o,c,f,v,y){return fa=y,Oe=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,$.H=a===null||a.memoizedState===null?Vy:Xy,Qa=!1,y=c(f,v),Qa=!1,Vi&&(y=py(o,c,f,v)),fy(a),y}function fy(a){$.H=pc;var o=Ye!==null&&Ye.next!==null;if(fa=0,vt=Ye=Oe=null,oc=!1,fl=0,Xi=null,o)throw Error(n(300));a===null||_t||(a=a.dependencies,a!==null&&ec(a)&&(_t=!0))}function py(a,o,c,f){Oe=a;var v=0;do{if(Vi&&(Xi=null),fl=0,Vi=!1,25<=v)throw Error(n(301));if(v+=1,vt=Ye=null,a.updateQueue!=null){var y=a.updateQueue;y.lastEffect=null,y.events=null,y.stores=null,y.memoCache!=null&&(y.memoCache.index=0)}$.H=r4,y=o(c,f)}while(Vi);return y}function FN(){var a=$.H,o=a.useState()[0];return o=typeof o.then=="function"?pl(o):o,a=a.useState()[0],(Ye!==null?Ye.memoizedState:null)!==a&&(Oe.flags|=1024),o}function ep(){var a=lc!==0;return lc=0,a}function tp(a,o,c){o.updateQueue=a.updateQueue,o.flags&=-2053,a.lanes&=~c}function rp(a){if(oc){for(a=a.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}oc=!1}fa=0,vt=Ye=Oe=null,Vi=!1,fl=lc=0,Xi=null}function lr(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Oe.memoizedState=vt=a:vt=vt.next=a,vt}function xt(){if(Ye===null){var a=Oe.alternate;a=a!==null?a.memoizedState:null}else a=Ye.next;var o=vt===null?Oe.memoizedState:vt.next;if(o!==null)vt=o,Ye=a;else{if(a===null)throw Oe.alternate===null?Error(n(467)):Error(n(310));Ye=a,a={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},vt===null?Oe.memoizedState=vt=a:vt=vt.next=a}return vt}function np(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pl(a){var o=fl;return fl+=1,Xi===null&&(Xi=[]),a=oy(Xi,a,o),o=Oe,(vt===null?o.memoizedState:vt.next)===null&&(o=o.alternate,$.H=o===null||o.memoizedState===null?Vy:Xy),a}function sc(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return pl(a);if(a.$$typeof===C)return Wt(a)}throw Error(n(438,String(a)))}function ap(a){var o=null,c=Oe.updateQueue;if(c!==null&&(o=c.memoCache),o==null){var f=Oe.alternate;f!==null&&(f=f.updateQueue,f!==null&&(f=f.memoCache,f!=null&&(o={data:f.data.map(function(v){return v.slice()}),index:0})))}if(o==null&&(o={data:[],index:0}),c===null&&(c=np(),Oe.updateQueue=c),c.memoCache=o,c=o.data[o.index],c===void 0)for(c=o.data[o.index]=Array(a),f=0;f<a;f++)c[f]=ie;return o.index++,c}function kn(a,o){return typeof o=="function"?o(a):o}function cc(a){var o=xt();return ip(o,Ye,a)}function ip(a,o,c){var f=a.queue;if(f===null)throw Error(n(311));f.lastRenderedReducer=c;var v=a.baseQueue,y=f.pending;if(y!==null){if(v!==null){var E=v.next;v.next=y.next,y.next=E}o.baseQueue=v=y,f.pending=null}if(y=a.baseState,v===null)a.memoizedState=y;else{o=v.next;var N=E=null,P=null,I=o,G=!1;do{var X=I.lane&-536870913;if(X!==I.lane?(_e&X)===X:(fa&X)===X){var q=I.revertLane;if(q===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),X===Gi&&(G=!0);else if((fa&q)===q){I=I.next,q===Gi&&(G=!0);continue}else X={lane:0,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},P===null?(N=P=X,E=y):P=P.next=X,Oe.lanes|=q,ya|=q;X=I.action,Qa&&c(y,X),y=I.hasEagerState?I.eagerState:c(y,X)}else q={lane:X,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},P===null?(N=P=q,E=y):P=P.next=q,Oe.lanes|=X,ya|=X;I=I.next}while(I!==null&&I!==o);if(P===null?E=y:P.next=N,!xr(y,a.memoizedState)&&(_t=!0,G&&(c=Ki,c!==null)))throw c;a.memoizedState=y,a.baseState=E,a.baseQueue=P,f.lastRenderedState=y}return v===null&&(f.lanes=0),[a.memoizedState,f.dispatch]}function op(a){var o=xt(),c=o.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=a;var f=c.dispatch,v=c.pending,y=o.memoizedState;if(v!==null){c.pending=null;var E=v=v.next;do y=a(y,E.action),E=E.next;while(E!==v);xr(y,o.memoizedState)||(_t=!0),o.memoizedState=y,o.baseQueue===null&&(o.baseState=y),c.lastRenderedState=y}return[y,f]}function hy(a,o,c){var f=Oe,v=xt(),y=ze;if(y){if(c===void 0)throw Error(n(407));c=c()}else c=o();var E=!xr((Ye||v).memoizedState,c);E&&(v.memoizedState=c,_t=!0),v=v.queue;var N=vy.bind(null,f,v,a);if(hl(2048,8,N,[a]),v.getSnapshot!==o||E||vt!==null&&vt.memoizedState.tag&1){if(f.flags|=2048,Fi(9,uc(),gy.bind(null,f,v,c,o),null),Fe===null)throw Error(n(349));y||(fa&124)!==0||my(f,o,c)}return c}function my(a,o,c){a.flags|=16384,a={getSnapshot:o,value:c},o=Oe.updateQueue,o===null?(o=np(),Oe.updateQueue=o,o.stores=[a]):(c=o.stores,c===null?o.stores=[a]:c.push(a))}function gy(a,o,c,f){o.value=c,o.getSnapshot=f,xy(o)&&yy(a)}function vy(a,o,c){return c(function(){xy(o)&&yy(a)})}function xy(a){var o=a.getSnapshot;a=a.value;try{var c=o();return!xr(a,c)}catch{return!0}}function yy(a){var o=$i(a,2);o!==null&&Ar(o,a,2)}function lp(a){var o=lr();if(typeof a=="function"){var c=a;if(a=c(),Qa){ia(!0);try{c()}finally{ia(!1)}}}return o.memoizedState=o.baseState=a,o.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:a},o}function by(a,o,c,f){return a.baseState=c,ip(a,Ye,typeof f=="function"?f:kn)}function ZN(a,o,c,f,v){if(fc(a))throw Error(n(485));if(a=o.action,a!==null){var y={payload:v,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){y.listeners.push(E)}};$.T!==null?c(!0):y.isTransition=!1,f(y),c=o.pending,c===null?(y.next=o.pending=y,wy(o,y)):(y.next=c.next,o.pending=c.next=y)}}function wy(a,o){var c=o.action,f=o.payload,v=a.state;if(o.isTransition){var y=$.T,E={};$.T=E;try{var N=c(v,f),P=$.S;P!==null&&P(E,N),jy(a,o,N)}catch(I){sp(a,o,I)}finally{$.T=y}}else try{y=c(v,f),jy(a,o,y)}catch(I){sp(a,o,I)}}function jy(a,o,c){c!==null&&typeof c=="object"&&typeof c.then=="function"?c.then(function(f){Sy(a,o,f)},function(f){return sp(a,o,f)}):Sy(a,o,c)}function Sy(a,o,c){o.status="fulfilled",o.value=c,Ay(o),a.state=c,o=a.pending,o!==null&&(c=o.next,c===o?a.pending=null:(c=c.next,o.next=c,wy(a,c)))}function sp(a,o,c){var f=a.pending;if(a.pending=null,f!==null){f=f.next;do o.status="rejected",o.reason=c,Ay(o),o=o.next;while(o!==f)}a.action=null}function Ay(a){a=a.listeners;for(var o=0;o<a.length;o++)(0,a[o])()}function Oy(a,o){return o}function Ey(a,o){if(ze){var c=Fe.formState;if(c!==null){e:{var f=Oe;if(ze){if(lt){t:{for(var v=lt,y=cn;v.nodeType!==8;){if(!y){v=null;break t}if(v=Jr(v.nextSibling),v===null){v=null;break t}}y=v.data,v=y==="F!"||y==="F"?v:null}if(v){lt=Jr(v.nextSibling),f=v.data==="F!";break e}}Va(f)}f=!1}f&&(o=c[0])}}return c=lr(),c.memoizedState=c.baseState=o,f={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oy,lastRenderedState:o},c.queue=f,c=Gy.bind(null,Oe,f),f.dispatch=c,f=lp(!1),y=pp.bind(null,Oe,!1,f.queue),f=lr(),v={state:o,dispatch:null,action:a,pending:null},f.queue=v,c=ZN.bind(null,Oe,v,y,c),v.dispatch=c,f.memoizedState=a,[o,c,!1]}function ky(a){var o=xt();return Ny(o,Ye,a)}function Ny(a,o,c){if(o=ip(a,o,Oy)[0],a=cc(kn)[0],typeof o=="object"&&o!==null&&typeof o.then=="function")try{var f=pl(o)}catch(E){throw E===ll?nc:E}else f=o;o=xt();var v=o.queue,y=v.dispatch;return c!==o.memoizedState&&(Oe.flags|=2048,Fi(9,uc(),QN.bind(null,v,c),null)),[f,y,a]}function QN(a,o){a.action=o}function Cy(a){var o=xt(),c=Ye;if(c!==null)return Ny(o,c,a);xt(),o=o.memoizedState,c=xt();var f=c.queue.dispatch;return c.memoizedState=a,[o,f,!1]}function Fi(a,o,c,f){return a={tag:a,create:c,deps:f,inst:o,next:null},o=Oe.updateQueue,o===null&&(o=np(),Oe.updateQueue=o),c=o.lastEffect,c===null?o.lastEffect=a.next=a:(f=c.next,c.next=a,a.next=f,o.lastEffect=a),a}function uc(){return{destroy:void 0,resource:void 0}}function Ty(){return xt().memoizedState}function dc(a,o,c,f){var v=lr();f=f===void 0?null:f,Oe.flags|=a,v.memoizedState=Fi(1|o,uc(),c,f)}function hl(a,o,c,f){var v=xt();f=f===void 0?null:f;var y=v.memoizedState.inst;Ye!==null&&f!==null&&Qf(f,Ye.memoizedState.deps)?v.memoizedState=Fi(o,y,c,f):(Oe.flags|=a,v.memoizedState=Fi(1|o,y,c,f))}function My(a,o){dc(8390656,8,a,o)}function _y(a,o){hl(2048,8,a,o)}function Py(a,o){return hl(4,2,a,o)}function Dy(a,o){return hl(4,4,a,o)}function zy(a,o){if(typeof o=="function"){a=a();var c=o(a);return function(){typeof c=="function"?c():o(null)}}if(o!=null)return a=a(),o.current=a,function(){o.current=null}}function Ry(a,o,c){c=c!=null?c.concat([a]):null,hl(4,4,zy.bind(null,o,a),c)}function cp(){}function Ly(a,o){var c=xt();o=o===void 0?null:o;var f=c.memoizedState;return o!==null&&Qf(o,f[1])?f[0]:(c.memoizedState=[a,o],a)}function By(a,o){var c=xt();o=o===void 0?null:o;var f=c.memoizedState;if(o!==null&&Qf(o,f[1]))return f[0];if(f=a(),Qa){ia(!0);try{a()}finally{ia(!1)}}return c.memoizedState=[f,o],f}function up(a,o,c){return c===void 0||(fa&1073741824)!==0?a.memoizedState=o:(a.memoizedState=c,a=$b(),Oe.lanes|=a,ya|=a,c)}function Iy(a,o,c,f){return xr(c,o)?c:Wi.current!==null?(a=up(a,c,f),xr(a,o)||(_t=!0),a):(fa&42)===0?(_t=!0,a.memoizedState=c):(a=$b(),Oe.lanes|=a,ya|=a,o)}function qy(a,o,c,f,v){var y=K.p;K.p=y!==0&&8>y?y:8;var E=$.T,N={};$.T=N,pp(a,!1,o,c);try{var P=v(),I=$.S;if(I!==null&&I(N,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var G=VN(P,f);ml(a,o,G,Sr(a))}else ml(a,o,f,Sr(a))}catch(X){ml(a,o,{then:function(){},status:"rejected",reason:X},Sr())}finally{K.p=y,$.T=E}}function JN(){}function dp(a,o,c,f){if(a.tag!==5)throw Error(n(476));var v=$y(a).queue;qy(a,v,o,ne,c===null?JN:function(){return Uy(a),c(f)})}function $y(a){var o=a.memoizedState;if(o!==null)return o;o={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:ne},next:null};var c={};return o.next={memoizedState:c,baseState:c,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:c},next:null},a.memoizedState=o,a=a.alternate,a!==null&&(a.memoizedState=o),o}function Uy(a){var o=$y(a).next.queue;ml(a,o,{},Sr())}function fp(){return Wt(Pl)}function Hy(){return xt().memoizedState}function Yy(){return xt().memoizedState}function e4(a){for(var o=a.return;o!==null;){switch(o.tag){case 24:case 3:var c=Sr();a=ua(c);var f=da(o,a,c);f!==null&&(Ar(f,o,c),cl(f,o,c)),o={cache:Uf()},a.payload=o;return}o=o.return}}function t4(a,o,c){var f=Sr();c={lane:f,revertLane:0,action:c,hasEagerState:!1,eagerState:null,next:null},fc(a)?Ky(o,c):(c=_f(a,o,c,f),c!==null&&(Ar(c,a,f),Wy(c,o,f)))}function Gy(a,o,c){var f=Sr();ml(a,o,c,f)}function ml(a,o,c,f){var v={lane:f,revertLane:0,action:c,hasEagerState:!1,eagerState:null,next:null};if(fc(a))Ky(o,v);else{var y=a.alternate;if(a.lanes===0&&(y===null||y.lanes===0)&&(y=o.lastRenderedReducer,y!==null))try{var E=o.lastRenderedState,N=y(E,c);if(v.hasEagerState=!0,v.eagerState=N,xr(N,E))return Xs(a,o,v,0),Fe===null&&Vs(),!1}catch{}finally{}if(c=_f(a,o,v,f),c!==null)return Ar(c,a,f),Wy(c,o,f),!0}return!1}function pp(a,o,c,f){if(f={lane:2,revertLane:Gp(),action:f,hasEagerState:!1,eagerState:null,next:null},fc(a)){if(o)throw Error(n(479))}else o=_f(a,c,f,2),o!==null&&Ar(o,a,2)}function fc(a){var o=a.alternate;return a===Oe||o!==null&&o===Oe}function Ky(a,o){Vi=oc=!0;var c=a.pending;c===null?o.next=o:(o.next=c.next,c.next=o),a.pending=o}function Wy(a,o,c){if((c&4194048)!==0){var f=o.lanes;f&=a.pendingLanes,c|=f,o.lanes=c,tx(a,c)}}var pc={readContext:Wt,use:sc,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut},Vy={readContext:Wt,use:sc,useCallback:function(a,o){return lr().memoizedState=[a,o===void 0?null:o],a},useContext:Wt,useEffect:My,useImperativeHandle:function(a,o,c){c=c!=null?c.concat([a]):null,dc(4194308,4,zy.bind(null,o,a),c)},useLayoutEffect:function(a,o){return dc(4194308,4,a,o)},useInsertionEffect:function(a,o){dc(4,2,a,o)},useMemo:function(a,o){var c=lr();o=o===void 0?null:o;var f=a();if(Qa){ia(!0);try{a()}finally{ia(!1)}}return c.memoizedState=[f,o],f},useReducer:function(a,o,c){var f=lr();if(c!==void 0){var v=c(o);if(Qa){ia(!0);try{c(o)}finally{ia(!1)}}}else v=o;return f.memoizedState=f.baseState=v,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:v},f.queue=a,a=a.dispatch=t4.bind(null,Oe,a),[f.memoizedState,a]},useRef:function(a){var o=lr();return a={current:a},o.memoizedState=a},useState:function(a){a=lp(a);var o=a.queue,c=Gy.bind(null,Oe,o);return o.dispatch=c,[a.memoizedState,c]},useDebugValue:cp,useDeferredValue:function(a,o){var c=lr();return up(c,a,o)},useTransition:function(){var a=lp(!1);return a=qy.bind(null,Oe,a.queue,!0,!1),lr().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,o,c){var f=Oe,v=lr();if(ze){if(c===void 0)throw Error(n(407));c=c()}else{if(c=o(),Fe===null)throw Error(n(349));(_e&124)!==0||my(f,o,c)}v.memoizedState=c;var y={value:c,getSnapshot:o};return v.queue=y,My(vy.bind(null,f,y,a),[a]),f.flags|=2048,Fi(9,uc(),gy.bind(null,f,y,c,o),null),c},useId:function(){var a=lr(),o=Fe.identifierPrefix;if(ze){var c=An,f=Sn;c=(f&~(1<<32-vr(f)-1)).toString(32)+c,o="«"+o+"R"+c,c=lc++,0<c&&(o+="H"+c.toString(32)),o+="»"}else c=XN++,o="«"+o+"r"+c.toString(32)+"»";return a.memoizedState=o},useHostTransitionStatus:fp,useFormState:Ey,useActionState:Ey,useOptimistic:function(a){var o=lr();o.memoizedState=o.baseState=a;var c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return o.queue=c,o=pp.bind(null,Oe,!0,c),c.dispatch=o,[a,o]},useMemoCache:ap,useCacheRefresh:function(){return lr().memoizedState=e4.bind(null,Oe)}},Xy={readContext:Wt,use:sc,useCallback:Ly,useContext:Wt,useEffect:_y,useImperativeHandle:Ry,useInsertionEffect:Py,useLayoutEffect:Dy,useMemo:By,useReducer:cc,useRef:Ty,useState:function(){return cc(kn)},useDebugValue:cp,useDeferredValue:function(a,o){var c=xt();return Iy(c,Ye.memoizedState,a,o)},useTransition:function(){var a=cc(kn)[0],o=xt().memoizedState;return[typeof a=="boolean"?a:pl(a),o]},useSyncExternalStore:hy,useId:Hy,useHostTransitionStatus:fp,useFormState:ky,useActionState:ky,useOptimistic:function(a,o){var c=xt();return by(c,Ye,a,o)},useMemoCache:ap,useCacheRefresh:Yy},r4={readContext:Wt,use:sc,useCallback:Ly,useContext:Wt,useEffect:_y,useImperativeHandle:Ry,useInsertionEffect:Py,useLayoutEffect:Dy,useMemo:By,useReducer:op,useRef:Ty,useState:function(){return op(kn)},useDebugValue:cp,useDeferredValue:function(a,o){var c=xt();return Ye===null?up(c,a,o):Iy(c,Ye.memoizedState,a,o)},useTransition:function(){var a=op(kn)[0],o=xt().memoizedState;return[typeof a=="boolean"?a:pl(a),o]},useSyncExternalStore:hy,useId:Hy,useHostTransitionStatus:fp,useFormState:Cy,useActionState:Cy,useOptimistic:function(a,o){var c=xt();return Ye!==null?by(c,Ye,a,o):(c.baseState=a,[a,c.queue.dispatch])},useMemoCache:ap,useCacheRefresh:Yy},Zi=null,gl=0;function hc(a){var o=gl;return gl+=1,Zi===null&&(Zi=[]),oy(Zi,a,o)}function vl(a,o){o=o.props.ref,a.ref=o!==void 0?o:null}function mc(a,o){throw o.$$typeof===x?Error(n(525)):(a=Object.prototype.toString.call(o),Error(n(31,a==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":a)))}function Fy(a){var o=a._init;return o(a._payload)}function Zy(a){function o(L,z){if(a){var B=L.deletions;B===null?(L.deletions=[z],L.flags|=16):B.push(z)}}function c(L,z){if(!a)return null;for(;z!==null;)o(L,z),z=z.sibling;return null}function f(L){for(var z=new Map;L!==null;)L.key!==null?z.set(L.key,L):z.set(L.index,L),L=L.sibling;return z}function v(L,z){return L=jn(L,z),L.index=0,L.sibling=null,L}function y(L,z,B){return L.index=B,a?(B=L.alternate,B!==null?(B=B.index,B<z?(L.flags|=67108866,z):B):(L.flags|=67108866,z)):(L.flags|=1048576,z)}function E(L){return a&&L.alternate===null&&(L.flags|=67108866),L}function N(L,z,B,W){return z===null||z.tag!==6?(z=Df(B,L.mode,W),z.return=L,z):(z=v(z,B),z.return=L,z)}function P(L,z,B,W){var ce=B.type;return ce===S?G(L,z,B.props.children,W,B.key):z!==null&&(z.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===F&&Fy(ce)===z.type)?(z=v(z,B.props),vl(z,B),z.return=L,z):(z=Zs(B.type,B.key,B.props,null,L.mode,W),vl(z,B),z.return=L,z)}function I(L,z,B,W){return z===null||z.tag!==4||z.stateNode.containerInfo!==B.containerInfo||z.stateNode.implementation!==B.implementation?(z=zf(B,L.mode,W),z.return=L,z):(z=v(z,B.children||[]),z.return=L,z)}function G(L,z,B,W,ce){return z===null||z.tag!==7?(z=Ya(B,L.mode,W,ce),z.return=L,z):(z=v(z,B),z.return=L,z)}function X(L,z,B){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Df(""+z,L.mode,B),z.return=L,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return B=Zs(z.type,z.key,z.props,null,L.mode,B),vl(B,z),B.return=L,B;case j:return z=zf(z,L.mode,B),z.return=L,z;case F:var W=z._init;return z=W(z._payload),X(L,z,B)}if(ye(z)||J(z))return z=Ya(z,L.mode,B,null),z.return=L,z;if(typeof z.then=="function")return X(L,hc(z),B);if(z.$$typeof===C)return X(L,tc(L,z),B);mc(L,z)}return null}function q(L,z,B,W){var ce=z!==null?z.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ce!==null?null:N(L,z,""+B,W);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return B.key===ce?P(L,z,B,W):null;case j:return B.key===ce?I(L,z,B,W):null;case F:return ce=B._init,B=ce(B._payload),q(L,z,B,W)}if(ye(B)||J(B))return ce!==null?null:G(L,z,B,W,null);if(typeof B.then=="function")return q(L,z,hc(B),W);if(B.$$typeof===C)return q(L,z,tc(L,B),W);mc(L,B)}return null}function H(L,z,B,W,ce){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return L=L.get(B)||null,N(z,L,""+W,ce);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case w:return L=L.get(W.key===null?B:W.key)||null,P(z,L,W,ce);case j:return L=L.get(W.key===null?B:W.key)||null,I(z,L,W,ce);case F:var ke=W._init;return W=ke(W._payload),H(L,z,B,W,ce)}if(ye(W)||J(W))return L=L.get(B)||null,G(z,L,W,ce,null);if(typeof W.then=="function")return H(L,z,B,hc(W),ce);if(W.$$typeof===C)return H(L,z,B,tc(z,W),ce);mc(z,W)}return null}function be(L,z,B,W){for(var ce=null,ke=null,pe=z,xe=z=0,Dt=null;pe!==null&&xe<B.length;xe++){pe.index>xe?(Dt=pe,pe=null):Dt=pe.sibling;var Pe=q(L,pe,B[xe],W);if(Pe===null){pe===null&&(pe=Dt);break}a&&pe&&Pe.alternate===null&&o(L,pe),z=y(Pe,z,xe),ke===null?ce=Pe:ke.sibling=Pe,ke=Pe,pe=Dt}if(xe===B.length)return c(L,pe),ze&&Ka(L,xe),ce;if(pe===null){for(;xe<B.length;xe++)pe=X(L,B[xe],W),pe!==null&&(z=y(pe,z,xe),ke===null?ce=pe:ke.sibling=pe,ke=pe);return ze&&Ka(L,xe),ce}for(pe=f(pe);xe<B.length;xe++)Dt=H(pe,L,xe,B[xe],W),Dt!==null&&(a&&Dt.alternate!==null&&pe.delete(Dt.key===null?xe:Dt.key),z=y(Dt,z,xe),ke===null?ce=Dt:ke.sibling=Dt,ke=Dt);return a&&pe.forEach(function(Na){return o(L,Na)}),ze&&Ka(L,xe),ce}function me(L,z,B,W){if(B==null)throw Error(n(151));for(var ce=null,ke=null,pe=z,xe=z=0,Dt=null,Pe=B.next();pe!==null&&!Pe.done;xe++,Pe=B.next()){pe.index>xe?(Dt=pe,pe=null):Dt=pe.sibling;var Na=q(L,pe,Pe.value,W);if(Na===null){pe===null&&(pe=Dt);break}a&&pe&&Na.alternate===null&&o(L,pe),z=y(Na,z,xe),ke===null?ce=Na:ke.sibling=Na,ke=Na,pe=Dt}if(Pe.done)return c(L,pe),ze&&Ka(L,xe),ce;if(pe===null){for(;!Pe.done;xe++,Pe=B.next())Pe=X(L,Pe.value,W),Pe!==null&&(z=y(Pe,z,xe),ke===null?ce=Pe:ke.sibling=Pe,ke=Pe);return ze&&Ka(L,xe),ce}for(pe=f(pe);!Pe.done;xe++,Pe=B.next())Pe=H(pe,L,xe,Pe.value,W),Pe!==null&&(a&&Pe.alternate!==null&&pe.delete(Pe.key===null?xe:Pe.key),z=y(Pe,z,xe),ke===null?ce=Pe:ke.sibling=Pe,ke=Pe);return a&&pe.forEach(function(nC){return o(L,nC)}),ze&&Ka(L,xe),ce}function Ke(L,z,B,W){if(typeof B=="object"&&B!==null&&B.type===S&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case w:e:{for(var ce=B.key;z!==null;){if(z.key===ce){if(ce=B.type,ce===S){if(z.tag===7){c(L,z.sibling),W=v(z,B.props.children),W.return=L,L=W;break e}}else if(z.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===F&&Fy(ce)===z.type){c(L,z.sibling),W=v(z,B.props),vl(W,B),W.return=L,L=W;break e}c(L,z);break}else o(L,z);z=z.sibling}B.type===S?(W=Ya(B.props.children,L.mode,W,B.key),W.return=L,L=W):(W=Zs(B.type,B.key,B.props,null,L.mode,W),vl(W,B),W.return=L,L=W)}return E(L);case j:e:{for(ce=B.key;z!==null;){if(z.key===ce)if(z.tag===4&&z.stateNode.containerInfo===B.containerInfo&&z.stateNode.implementation===B.implementation){c(L,z.sibling),W=v(z,B.children||[]),W.return=L,L=W;break e}else{c(L,z);break}else o(L,z);z=z.sibling}W=zf(B,L.mode,W),W.return=L,L=W}return E(L);case F:return ce=B._init,B=ce(B._payload),Ke(L,z,B,W)}if(ye(B))return be(L,z,B,W);if(J(B)){if(ce=J(B),typeof ce!="function")throw Error(n(150));return B=ce.call(B),me(L,z,B,W)}if(typeof B.then=="function")return Ke(L,z,hc(B),W);if(B.$$typeof===C)return Ke(L,z,tc(L,B),W);mc(L,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,z!==null&&z.tag===6?(c(L,z.sibling),W=v(z,B),W.return=L,L=W):(c(L,z),W=Df(B,L.mode,W),W.return=L,L=W),E(L)):c(L,z)}return function(L,z,B,W){try{gl=0;var ce=Ke(L,z,B,W);return Zi=null,ce}catch(pe){if(pe===ll||pe===nc)throw pe;var ke=yr(29,pe,null,L.mode);return ke.lanes=W,ke.return=L,ke}finally{}}}var Qi=Zy(!0),Qy=Zy(!1),Lr=V(null),un=null;function pa(a){var o=a.alternate;re(jt,jt.current&1),re(Lr,a),un===null&&(o===null||Wi.current!==null||o.memoizedState!==null)&&(un=a)}function Jy(a){if(a.tag===22){if(re(jt,jt.current),re(Lr,a),un===null){var o=a.alternate;o!==null&&o.memoizedState!==null&&(un=a)}}else ha()}function ha(){re(jt,jt.current),re(Lr,Lr.current)}function Nn(a){ae(Lr),un===a&&(un=null),ae(jt)}var jt=V(0);function gc(a){for(var o=a;o!==null;){if(o.tag===13){var c=o.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||nh(c)))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break;for(;o.sibling===null;){if(o.return===null||o.return===a)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}function hp(a,o,c,f){o=a.memoizedState,c=c(f,o),c=c==null?o:g({},o,c),a.memoizedState=c,a.lanes===0&&(a.updateQueue.baseState=c)}var mp={enqueueSetState:function(a,o,c){a=a._reactInternals;var f=Sr(),v=ua(f);v.payload=o,c!=null&&(v.callback=c),o=da(a,v,f),o!==null&&(Ar(o,a,f),cl(o,a,f))},enqueueReplaceState:function(a,o,c){a=a._reactInternals;var f=Sr(),v=ua(f);v.tag=1,v.payload=o,c!=null&&(v.callback=c),o=da(a,v,f),o!==null&&(Ar(o,a,f),cl(o,a,f))},enqueueForceUpdate:function(a,o){a=a._reactInternals;var c=Sr(),f=ua(c);f.tag=2,o!=null&&(f.callback=o),o=da(a,f,c),o!==null&&(Ar(o,a,c),cl(o,a,c))}};function eb(a,o,c,f,v,y,E){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(f,y,E):o.prototype&&o.prototype.isPureReactComponent?!Jo(c,f)||!Jo(v,y):!0}function tb(a,o,c,f){a=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(c,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(c,f),o.state!==a&&mp.enqueueReplaceState(o,o.state,null)}function Ja(a,o){var c=o;if("ref"in o){c={};for(var f in o)f!=="ref"&&(c[f]=o[f])}if(a=a.defaultProps){c===o&&(c=g({},c));for(var v in a)c[v]===void 0&&(c[v]=a[v])}return c}var vc=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var o=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(o))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)};function rb(a){vc(a)}function nb(a){console.error(a)}function ab(a){vc(a)}function xc(a,o){try{var c=a.onUncaughtError;c(o.value,{componentStack:o.stack})}catch(f){setTimeout(function(){throw f})}}function ib(a,o,c){try{var f=a.onCaughtError;f(c.value,{componentStack:c.stack,errorBoundary:o.tag===1?o.stateNode:null})}catch(v){setTimeout(function(){throw v})}}function gp(a,o,c){return c=ua(c),c.tag=3,c.payload={element:null},c.callback=function(){xc(a,o)},c}function ob(a){return a=ua(a),a.tag=3,a}function lb(a,o,c,f){var v=c.type.getDerivedStateFromError;if(typeof v=="function"){var y=f.value;a.payload=function(){return v(y)},a.callback=function(){ib(o,c,f)}}var E=c.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(a.callback=function(){ib(o,c,f),typeof v!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var N=f.stack;this.componentDidCatch(f.value,{componentStack:N!==null?N:""})})}function n4(a,o,c,f,v){if(c.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){if(o=c.alternate,o!==null&&al(o,c,v,!0),c=Lr.current,c!==null){switch(c.tag){case 13:return un===null?qp():c.alternate===null&&st===0&&(st=3),c.flags&=-257,c.flags|=65536,c.lanes=v,f===Gf?c.flags|=16384:(o=c.updateQueue,o===null?c.updateQueue=new Set([f]):o.add(f),Up(a,f,v)),!1;case 22:return c.flags|=65536,f===Gf?c.flags|=16384:(o=c.updateQueue,o===null?(o={transitions:null,markerInstances:null,retryQueue:new Set([f])},c.updateQueue=o):(c=o.retryQueue,c===null?o.retryQueue=new Set([f]):c.add(f)),Up(a,f,v)),!1}throw Error(n(435,c.tag))}return Up(a,f,v),qp(),!1}if(ze)return o=Lr.current,o!==null?((o.flags&65536)===0&&(o.flags|=256),o.flags|=65536,o.lanes=v,f!==Bf&&(a=Error(n(422),{cause:f}),nl(Pr(a,c)))):(f!==Bf&&(o=Error(n(423),{cause:f}),nl(Pr(o,c))),a=a.current.alternate,a.flags|=65536,v&=-v,a.lanes|=v,f=Pr(f,c),v=gp(a.stateNode,f,v),Vf(a,v),st!==4&&(st=2)),!1;var y=Error(n(520),{cause:f});if(y=Pr(y,c),Al===null?Al=[y]:Al.push(y),st!==4&&(st=2),o===null)return!0;f=Pr(f,c),c=o;do{switch(c.tag){case 3:return c.flags|=65536,a=v&-v,c.lanes|=a,a=gp(c.stateNode,f,a),Vf(c,a),!1;case 1:if(o=c.type,y=c.stateNode,(c.flags&128)===0&&(typeof o.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ba===null||!ba.has(y))))return c.flags|=65536,v&=-v,c.lanes|=v,v=ob(v),lb(v,a,c,f),Vf(c,v),!1}c=c.return}while(c!==null);return!1}var sb=Error(n(461)),_t=!1;function qt(a,o,c,f){o.child=a===null?Qy(o,null,c,f):Qi(o,a.child,c,f)}function cb(a,o,c,f,v){c=c.render;var y=o.ref;if("ref"in f){var E={};for(var N in f)N!=="ref"&&(E[N]=f[N])}else E=f;return Fa(o),f=Jf(a,o,c,E,y,v),N=ep(),a!==null&&!_t?(tp(a,o,v),Cn(a,o,v)):(ze&&N&&Rf(o),o.flags|=1,qt(a,o,f,v),o.child)}function ub(a,o,c,f,v){if(a===null){var y=c.type;return typeof y=="function"&&!Pf(y)&&y.defaultProps===void 0&&c.compare===null?(o.tag=15,o.type=y,db(a,o,y,f,v)):(a=Zs(c.type,null,f,o,o.mode,v),a.ref=o.ref,a.return=o,o.child=a)}if(y=a.child,!Ap(a,v)){var E=y.memoizedProps;if(c=c.compare,c=c!==null?c:Jo,c(E,f)&&a.ref===o.ref)return Cn(a,o,v)}return o.flags|=1,a=jn(y,f),a.ref=o.ref,a.return=o,o.child=a}function db(a,o,c,f,v){if(a!==null){var y=a.memoizedProps;if(Jo(y,f)&&a.ref===o.ref)if(_t=!1,o.pendingProps=f=y,Ap(a,v))(a.flags&131072)!==0&&(_t=!0);else return o.lanes=a.lanes,Cn(a,o,v)}return vp(a,o,c,f,v)}function fb(a,o,c){var f=o.pendingProps,v=f.children,y=a!==null?a.memoizedState:null;if(f.mode==="hidden"){if((o.flags&128)!==0){if(f=y!==null?y.baseLanes|c:c,a!==null){for(v=o.child=a.child,y=0;v!==null;)y=y|v.lanes|v.childLanes,v=v.sibling;o.childLanes=y&~f}else o.childLanes=0,o.child=null;return pb(a,o,f,c)}if((c&536870912)!==0)o.memoizedState={baseLanes:0,cachePool:null},a!==null&&rc(o,y!==null?y.cachePool:null),y!==null?dy(o,y):Ff(),Jy(o);else return o.lanes=o.childLanes=536870912,pb(a,o,y!==null?y.baseLanes|c:c,c)}else y!==null?(rc(o,y.cachePool),dy(o,y),ha(),o.memoizedState=null):(a!==null&&rc(o,null),Ff(),ha());return qt(a,o,v,c),o.child}function pb(a,o,c,f){var v=Yf();return v=v===null?null:{parent:wt._currentValue,pool:v},o.memoizedState={baseLanes:c,cachePool:v},a!==null&&rc(o,null),Ff(),Jy(o),a!==null&&al(a,o,f,!0),null}function yc(a,o){var c=o.ref;if(c===null)a!==null&&a.ref!==null&&(o.flags|=4194816);else{if(typeof c!="function"&&typeof c!="object")throw Error(n(284));(a===null||a.ref!==c)&&(o.flags|=4194816)}}function vp(a,o,c,f,v){return Fa(o),c=Jf(a,o,c,f,void 0,v),f=ep(),a!==null&&!_t?(tp(a,o,v),Cn(a,o,v)):(ze&&f&&Rf(o),o.flags|=1,qt(a,o,c,v),o.child)}function hb(a,o,c,f,v,y){return Fa(o),o.updateQueue=null,c=py(o,f,c,v),fy(a),f=ep(),a!==null&&!_t?(tp(a,o,y),Cn(a,o,y)):(ze&&f&&Rf(o),o.flags|=1,qt(a,o,c,y),o.child)}function mb(a,o,c,f,v){if(Fa(o),o.stateNode===null){var y=Ui,E=c.contextType;typeof E=="object"&&E!==null&&(y=Wt(E)),y=new c(f,y),o.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,y.updater=mp,o.stateNode=y,y._reactInternals=o,y=o.stateNode,y.props=f,y.state=o.memoizedState,y.refs={},Kf(o),E=c.contextType,y.context=typeof E=="object"&&E!==null?Wt(E):Ui,y.state=o.memoizedState,E=c.getDerivedStateFromProps,typeof E=="function"&&(hp(o,c,E,f),y.state=o.memoizedState),typeof c.getDerivedStateFromProps=="function"||typeof y.getSnapshotBeforeUpdate=="function"||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(E=y.state,typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount(),E!==y.state&&mp.enqueueReplaceState(y,y.state,null),dl(o,f,y,v),ul(),y.state=o.memoizedState),typeof y.componentDidMount=="function"&&(o.flags|=4194308),f=!0}else if(a===null){y=o.stateNode;var N=o.memoizedProps,P=Ja(c,N);y.props=P;var I=y.context,G=c.contextType;E=Ui,typeof G=="object"&&G!==null&&(E=Wt(G));var X=c.getDerivedStateFromProps;G=typeof X=="function"||typeof y.getSnapshotBeforeUpdate=="function",N=o.pendingProps!==N,G||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(N||I!==E)&&tb(o,y,f,E),ca=!1;var q=o.memoizedState;y.state=q,dl(o,f,y,v),ul(),I=o.memoizedState,N||q!==I||ca?(typeof X=="function"&&(hp(o,c,X,f),I=o.memoizedState),(P=ca||eb(o,c,P,f,q,I,E))?(G||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(o.flags|=4194308)):(typeof y.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=I),y.props=f,y.state=I,y.context=E,f=P):(typeof y.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{y=o.stateNode,Wf(a,o),E=o.memoizedProps,G=Ja(c,E),y.props=G,X=o.pendingProps,q=y.context,I=c.contextType,P=Ui,typeof I=="object"&&I!==null&&(P=Wt(I)),N=c.getDerivedStateFromProps,(I=typeof N=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(E!==X||q!==P)&&tb(o,y,f,P),ca=!1,q=o.memoizedState,y.state=q,dl(o,f,y,v),ul();var H=o.memoizedState;E!==X||q!==H||ca||a!==null&&a.dependencies!==null&&ec(a.dependencies)?(typeof N=="function"&&(hp(o,c,N,f),H=o.memoizedState),(G=ca||eb(o,c,G,f,q,H,P)||a!==null&&a.dependencies!==null&&ec(a.dependencies))?(I||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(f,H,P),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(f,H,P)),typeof y.componentDidUpdate=="function"&&(o.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof y.componentDidUpdate!="function"||E===a.memoizedProps&&q===a.memoizedState||(o.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||E===a.memoizedProps&&q===a.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=H),y.props=f,y.state=H,y.context=P,f=G):(typeof y.componentDidUpdate!="function"||E===a.memoizedProps&&q===a.memoizedState||(o.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||E===a.memoizedProps&&q===a.memoizedState||(o.flags|=1024),f=!1)}return y=f,yc(a,o),f=(o.flags&128)!==0,y||f?(y=o.stateNode,c=f&&typeof c.getDerivedStateFromError!="function"?null:y.render(),o.flags|=1,a!==null&&f?(o.child=Qi(o,a.child,null,v),o.child=Qi(o,null,c,v)):qt(a,o,c,v),o.memoizedState=y.state,a=o.child):a=Cn(a,o,v),a}function gb(a,o,c,f){return rl(),o.flags|=256,qt(a,o,c,f),o.child}var xp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yp(a){return{baseLanes:a,cachePool:ny()}}function bp(a,o,c){return a=a!==null?a.childLanes&~c:0,o&&(a|=Br),a}function vb(a,o,c){var f=o.pendingProps,v=!1,y=(o.flags&128)!==0,E;if((E=y)||(E=a!==null&&a.memoizedState===null?!1:(jt.current&2)!==0),E&&(v=!0,o.flags&=-129),E=(o.flags&32)!==0,o.flags&=-33,a===null){if(ze){if(v?pa(o):ha(),ze){var N=lt,P;if(P=N){e:{for(P=N,N=cn;P.nodeType!==8;){if(!N){N=null;break e}if(P=Jr(P.nextSibling),P===null){N=null;break e}}N=P}N!==null?(o.memoizedState={dehydrated:N,treeContext:Ga!==null?{id:Sn,overflow:An}:null,retryLane:536870912,hydrationErrors:null},P=yr(18,null,null,0),P.stateNode=N,P.return=o,o.child=P,er=o,lt=null,P=!0):P=!1}P||Va(o)}if(N=o.memoizedState,N!==null&&(N=N.dehydrated,N!==null))return nh(N)?o.lanes=32:o.lanes=536870912,null;Nn(o)}return N=f.children,f=f.fallback,v?(ha(),v=o.mode,N=bc({mode:"hidden",children:N},v),f=Ya(f,v,c,null),N.return=o,f.return=o,N.sibling=f,o.child=N,v=o.child,v.memoizedState=yp(c),v.childLanes=bp(a,E,c),o.memoizedState=xp,f):(pa(o),wp(o,N))}if(P=a.memoizedState,P!==null&&(N=P.dehydrated,N!==null)){if(y)o.flags&256?(pa(o),o.flags&=-257,o=jp(a,o,c)):o.memoizedState!==null?(ha(),o.child=a.child,o.flags|=128,o=null):(ha(),v=f.fallback,N=o.mode,f=bc({mode:"visible",children:f.children},N),v=Ya(v,N,c,null),v.flags|=2,f.return=o,v.return=o,f.sibling=v,o.child=f,Qi(o,a.child,null,c),f=o.child,f.memoizedState=yp(c),f.childLanes=bp(a,E,c),o.memoizedState=xp,o=v);else if(pa(o),nh(N)){if(E=N.nextSibling&&N.nextSibling.dataset,E)var I=E.dgst;E=I,f=Error(n(419)),f.stack="",f.digest=E,nl({value:f,source:null,stack:null}),o=jp(a,o,c)}else if(_t||al(a,o,c,!1),E=(c&a.childLanes)!==0,_t||E){if(E=Fe,E!==null&&(f=c&-c,f=(f&42)!==0?1:nf(f),f=(f&(E.suspendedLanes|c))!==0?0:f,f!==0&&f!==P.retryLane))throw P.retryLane=f,$i(a,f),Ar(E,a,f),sb;N.data==="$?"||qp(),o=jp(a,o,c)}else N.data==="$?"?(o.flags|=192,o.child=a.child,o=null):(a=P.treeContext,lt=Jr(N.nextSibling),er=o,ze=!0,Wa=null,cn=!1,a!==null&&(zr[Rr++]=Sn,zr[Rr++]=An,zr[Rr++]=Ga,Sn=a.id,An=a.overflow,Ga=o),o=wp(o,f.children),o.flags|=4096);return o}return v?(ha(),v=f.fallback,N=o.mode,P=a.child,I=P.sibling,f=jn(P,{mode:"hidden",children:f.children}),f.subtreeFlags=P.subtreeFlags&65011712,I!==null?v=jn(I,v):(v=Ya(v,N,c,null),v.flags|=2),v.return=o,f.return=o,f.sibling=v,o.child=f,f=v,v=o.child,N=a.child.memoizedState,N===null?N=yp(c):(P=N.cachePool,P!==null?(I=wt._currentValue,P=P.parent!==I?{parent:I,pool:I}:P):P=ny(),N={baseLanes:N.baseLanes|c,cachePool:P}),v.memoizedState=N,v.childLanes=bp(a,E,c),o.memoizedState=xp,f):(pa(o),c=a.child,a=c.sibling,c=jn(c,{mode:"visible",children:f.children}),c.return=o,c.sibling=null,a!==null&&(E=o.deletions,E===null?(o.deletions=[a],o.flags|=16):E.push(a)),o.child=c,o.memoizedState=null,c)}function wp(a,o){return o=bc({mode:"visible",children:o},a.mode),o.return=a,a.child=o}function bc(a,o){return a=yr(22,a,null,o),a.lanes=0,a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},a}function jp(a,o,c){return Qi(o,a.child,null,c),a=wp(o,o.pendingProps.children),a.flags|=2,o.memoizedState=null,a}function xb(a,o,c){a.lanes|=o;var f=a.alternate;f!==null&&(f.lanes|=o),qf(a.return,o,c)}function Sp(a,o,c,f,v){var y=a.memoizedState;y===null?a.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:c,tailMode:v}:(y.isBackwards=o,y.rendering=null,y.renderingStartTime=0,y.last=f,y.tail=c,y.tailMode=v)}function yb(a,o,c){var f=o.pendingProps,v=f.revealOrder,y=f.tail;if(qt(a,o,f.children,c),f=jt.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(a!==null&&(a.flags&128)!==0)e:for(a=o.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&xb(a,c,o);else if(a.tag===19)xb(a,c,o);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break e;for(;a.sibling===null;){if(a.return===null||a.return===o)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}f&=1}switch(re(jt,f),v){case"forwards":for(c=o.child,v=null;c!==null;)a=c.alternate,a!==null&&gc(a)===null&&(v=c),c=c.sibling;c=v,c===null?(v=o.child,o.child=null):(v=c.sibling,c.sibling=null),Sp(o,!1,v,c,y);break;case"backwards":for(c=null,v=o.child,o.child=null;v!==null;){if(a=v.alternate,a!==null&&gc(a)===null){o.child=v;break}a=v.sibling,v.sibling=c,c=v,v=a}Sp(o,!0,c,null,y);break;case"together":Sp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Cn(a,o,c){if(a!==null&&(o.dependencies=a.dependencies),ya|=o.lanes,(c&o.childLanes)===0)if(a!==null){if(al(a,o,c,!1),(c&o.childLanes)===0)return null}else return null;if(a!==null&&o.child!==a.child)throw Error(n(153));if(o.child!==null){for(a=o.child,c=jn(a,a.pendingProps),o.child=c,c.return=o;a.sibling!==null;)a=a.sibling,c=c.sibling=jn(a,a.pendingProps),c.return=o;c.sibling=null}return o.child}function Ap(a,o){return(a.lanes&o)!==0?!0:(a=a.dependencies,!!(a!==null&&ec(a)))}function a4(a,o,c){switch(o.tag){case 3:He(o,o.stateNode.containerInfo),sa(o,wt,a.memoizedState.cache),rl();break;case 27:case 5:Ae(o);break;case 4:He(o,o.stateNode.containerInfo);break;case 10:sa(o,o.type,o.memoizedProps.value);break;case 13:var f=o.memoizedState;if(f!==null)return f.dehydrated!==null?(pa(o),o.flags|=128,null):(c&o.child.childLanes)!==0?vb(a,o,c):(pa(o),a=Cn(a,o,c),a!==null?a.sibling:null);pa(o);break;case 19:var v=(a.flags&128)!==0;if(f=(c&o.childLanes)!==0,f||(al(a,o,c,!1),f=(c&o.childLanes)!==0),v){if(f)return yb(a,o,c);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),re(jt,jt.current),f)break;return null;case 22:case 23:return o.lanes=0,fb(a,o,c);case 24:sa(o,wt,a.memoizedState.cache)}return Cn(a,o,c)}function bb(a,o,c){if(a!==null)if(a.memoizedProps!==o.pendingProps)_t=!0;else{if(!Ap(a,c)&&(o.flags&128)===0)return _t=!1,a4(a,o,c);_t=(a.flags&131072)!==0}else _t=!1,ze&&(o.flags&1048576)!==0&&Fx(o,Js,o.index);switch(o.lanes=0,o.tag){case 16:e:{a=o.pendingProps;var f=o.elementType,v=f._init;if(f=v(f._payload),o.type=f,typeof f=="function")Pf(f)?(a=Ja(f,a),o.tag=1,o=mb(null,o,f,a,c)):(o.tag=0,o=vp(null,o,f,a,c));else{if(f!=null){if(v=f.$$typeof,v===_){o.tag=11,o=cb(null,o,f,a,c);break e}else if(v===U){o.tag=14,o=ub(null,o,f,a,c);break e}}throw o=ge(f)||f,Error(n(306,o,""))}}return o;case 0:return vp(a,o,o.type,o.pendingProps,c);case 1:return f=o.type,v=Ja(f,o.pendingProps),mb(a,o,f,v,c);case 3:e:{if(He(o,o.stateNode.containerInfo),a===null)throw Error(n(387));f=o.pendingProps;var y=o.memoizedState;v=y.element,Wf(a,o),dl(o,f,null,c);var E=o.memoizedState;if(f=E.cache,sa(o,wt,f),f!==y.cache&&$f(o,[wt],c,!0),ul(),f=E.element,y.isDehydrated)if(y={element:f,isDehydrated:!1,cache:E.cache},o.updateQueue.baseState=y,o.memoizedState=y,o.flags&256){o=gb(a,o,f,c);break e}else if(f!==v){v=Pr(Error(n(424)),o),nl(v),o=gb(a,o,f,c);break e}else{switch(a=o.stateNode.containerInfo,a.nodeType){case 9:a=a.body;break;default:a=a.nodeName==="HTML"?a.ownerDocument.body:a}for(lt=Jr(a.firstChild),er=o,ze=!0,Wa=null,cn=!0,c=Qy(o,null,f,c),o.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling}else{if(rl(),f===v){o=Cn(a,o,c);break e}qt(a,o,f,c)}o=o.child}return o;case 26:return yc(a,o),a===null?(c=A1(o.type,null,o.pendingProps,null))?o.memoizedState=c:ze||(c=o.type,a=o.pendingProps,f=Dc(ve.current).createElement(c),f[Kt]=o,f[ir]=a,Ut(f,c,a),Mt(f),o.stateNode=f):o.memoizedState=A1(o.type,a.memoizedProps,o.pendingProps,a.memoizedState),null;case 27:return Ae(o),a===null&&ze&&(f=o.stateNode=w1(o.type,o.pendingProps,ve.current),er=o,cn=!0,v=lt,Sa(o.type)?(ah=v,lt=Jr(f.firstChild)):lt=v),qt(a,o,o.pendingProps.children,c),yc(a,o),a===null&&(o.flags|=4194304),o.child;case 5:return a===null&&ze&&((v=f=lt)&&(f=_4(f,o.type,o.pendingProps,cn),f!==null?(o.stateNode=f,er=o,lt=Jr(f.firstChild),cn=!1,v=!0):v=!1),v||Va(o)),Ae(o),v=o.type,y=o.pendingProps,E=a!==null?a.memoizedProps:null,f=y.children,eh(v,y)?f=null:E!==null&&eh(v,E)&&(o.flags|=32),o.memoizedState!==null&&(v=Jf(a,o,FN,null,null,c),Pl._currentValue=v),yc(a,o),qt(a,o,f,c),o.child;case 6:return a===null&&ze&&((a=c=lt)&&(c=P4(c,o.pendingProps,cn),c!==null?(o.stateNode=c,er=o,lt=null,a=!0):a=!1),a||Va(o)),null;case 13:return vb(a,o,c);case 4:return He(o,o.stateNode.containerInfo),f=o.pendingProps,a===null?o.child=Qi(o,null,f,c):qt(a,o,f,c),o.child;case 11:return cb(a,o,o.type,o.pendingProps,c);case 7:return qt(a,o,o.pendingProps,c),o.child;case 8:return qt(a,o,o.pendingProps.children,c),o.child;case 12:return qt(a,o,o.pendingProps.children,c),o.child;case 10:return f=o.pendingProps,sa(o,o.type,f.value),qt(a,o,f.children,c),o.child;case 9:return v=o.type._context,f=o.pendingProps.children,Fa(o),v=Wt(v),f=f(v),o.flags|=1,qt(a,o,f,c),o.child;case 14:return ub(a,o,o.type,o.pendingProps,c);case 15:return db(a,o,o.type,o.pendingProps,c);case 19:return yb(a,o,c);case 31:return f=o.pendingProps,c=o.mode,f={mode:f.mode,children:f.children},a===null?(c=bc(f,c),c.ref=o.ref,o.child=c,c.return=o,o=c):(c=jn(a.child,f),c.ref=o.ref,o.child=c,c.return=o,o=c),o;case 22:return fb(a,o,c);case 24:return Fa(o),f=Wt(wt),a===null?(v=Yf(),v===null&&(v=Fe,y=Uf(),v.pooledCache=y,y.refCount++,y!==null&&(v.pooledCacheLanes|=c),v=y),o.memoizedState={parent:f,cache:v},Kf(o),sa(o,wt,v)):((a.lanes&c)!==0&&(Wf(a,o),dl(o,null,null,c),ul()),v=a.memoizedState,y=o.memoizedState,v.parent!==f?(v={parent:f,cache:f},o.memoizedState=v,o.lanes===0&&(o.memoizedState=o.updateQueue.baseState=v),sa(o,wt,f)):(f=y.cache,sa(o,wt,f),f!==v.cache&&$f(o,[wt],c,!0))),qt(a,o,o.pendingProps.children,c),o.child;case 29:throw o.pendingProps}throw Error(n(156,o.tag))}function Tn(a){a.flags|=4}function wb(a,o){if(o.type!=="stylesheet"||(o.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!C1(o)){if(o=Lr.current,o!==null&&((_e&4194048)===_e?un!==null:(_e&62914560)!==_e&&(_e&536870912)===0||o!==un))throw sl=Gf,ay;a.flags|=8192}}function wc(a,o){o!==null&&(a.flags|=4),a.flags&16384&&(o=a.tag!==22?Jv():536870912,a.lanes|=o,ro|=o)}function xl(a,o){if(!ze)switch(a.tailMode){case"hidden":o=a.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?a.tail=null:c.sibling=null;break;case"collapsed":c=a.tail;for(var f=null;c!==null;)c.alternate!==null&&(f=c),c=c.sibling;f===null?o||a.tail===null?a.tail=null:a.tail.sibling=null:f.sibling=null}}function at(a){var o=a.alternate!==null&&a.alternate.child===a.child,c=0,f=0;if(o)for(var v=a.child;v!==null;)c|=v.lanes|v.childLanes,f|=v.subtreeFlags&65011712,f|=v.flags&65011712,v.return=a,v=v.sibling;else for(v=a.child;v!==null;)c|=v.lanes|v.childLanes,f|=v.subtreeFlags,f|=v.flags,v.return=a,v=v.sibling;return a.subtreeFlags|=f,a.childLanes=c,o}function i4(a,o,c){var f=o.pendingProps;switch(Lf(o),o.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(o),null;case 1:return at(o),null;case 3:return c=o.stateNode,f=null,a!==null&&(f=a.memoizedState.cache),o.memoizedState.cache!==f&&(o.flags|=2048),En(wt),Q(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(a===null||a.child===null)&&(tl(o)?Tn(o):a===null||a.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Jx())),at(o),null;case 26:return c=o.memoizedState,a===null?(Tn(o),c!==null?(at(o),wb(o,c)):(at(o),o.flags&=-16777217)):c?c!==a.memoizedState?(Tn(o),at(o),wb(o,c)):(at(o),o.flags&=-16777217):(a.memoizedProps!==f&&Tn(o),at(o),o.flags&=-16777217),null;case 27:Ce(o),c=ve.current;var v=o.type;if(a!==null&&o.stateNode!=null)a.memoizedProps!==f&&Tn(o);else{if(!f){if(o.stateNode===null)throw Error(n(166));return at(o),null}a=se.current,tl(o)?Zx(o):(a=w1(v,f,c),o.stateNode=a,Tn(o))}return at(o),null;case 5:if(Ce(o),c=o.type,a!==null&&o.stateNode!=null)a.memoizedProps!==f&&Tn(o);else{if(!f){if(o.stateNode===null)throw Error(n(166));return at(o),null}if(a=se.current,tl(o))Zx(o);else{switch(v=Dc(ve.current),a){case 1:a=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:a=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":a=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":a=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":a=v.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof f.is=="string"?v.createElement("select",{is:f.is}):v.createElement("select"),f.multiple?a.multiple=!0:f.size&&(a.size=f.size);break;default:a=typeof f.is=="string"?v.createElement(c,{is:f.is}):v.createElement(c)}}a[Kt]=o,a[ir]=f;e:for(v=o.child;v!==null;){if(v.tag===5||v.tag===6)a.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===o)break e;for(;v.sibling===null;){if(v.return===null||v.return===o)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}o.stateNode=a;e:switch(Ut(a,c,f),c){case"button":case"input":case"select":case"textarea":a=!!f.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Tn(o)}}return at(o),o.flags&=-16777217,null;case 6:if(a&&o.stateNode!=null)a.memoizedProps!==f&&Tn(o);else{if(typeof f!="string"&&o.stateNode===null)throw Error(n(166));if(a=ve.current,tl(o)){if(a=o.stateNode,c=o.memoizedProps,f=null,v=er,v!==null)switch(v.tag){case 27:case 5:f=v.memoizedProps}a[Kt]=o,a=!!(a.nodeValue===c||f!==null&&f.suppressHydrationWarning===!0||h1(a.nodeValue,c)),a||Va(o)}else a=Dc(a).createTextNode(f),a[Kt]=o,o.stateNode=a}return at(o),null;case 13:if(f=o.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(v=tl(o),f!==null&&f.dehydrated!==null){if(a===null){if(!v)throw Error(n(318));if(v=o.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(n(317));v[Kt]=o}else rl(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;at(o),v=!1}else v=Jx(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=v),v=!0;if(!v)return o.flags&256?(Nn(o),o):(Nn(o),null)}if(Nn(o),(o.flags&128)!==0)return o.lanes=c,o;if(c=f!==null,a=a!==null&&a.memoizedState!==null,c){f=o.child,v=null,f.alternate!==null&&f.alternate.memoizedState!==null&&f.alternate.memoizedState.cachePool!==null&&(v=f.alternate.memoizedState.cachePool.pool);var y=null;f.memoizedState!==null&&f.memoizedState.cachePool!==null&&(y=f.memoizedState.cachePool.pool),y!==v&&(f.flags|=2048)}return c!==a&&c&&(o.child.flags|=8192),wc(o,o.updateQueue),at(o),null;case 4:return Q(),a===null&&Xp(o.stateNode.containerInfo),at(o),null;case 10:return En(o.type),at(o),null;case 19:if(ae(jt),v=o.memoizedState,v===null)return at(o),null;if(f=(o.flags&128)!==0,y=v.rendering,y===null)if(f)xl(v,!1);else{if(st!==0||a!==null&&(a.flags&128)!==0)for(a=o.child;a!==null;){if(y=gc(a),y!==null){for(o.flags|=128,xl(v,!1),a=y.updateQueue,o.updateQueue=a,wc(o,a),o.subtreeFlags=0,a=c,c=o.child;c!==null;)Xx(c,a),c=c.sibling;return re(jt,jt.current&1|2),o.child}a=a.sibling}v.tail!==null&&Tt()>Ac&&(o.flags|=128,f=!0,xl(v,!1),o.lanes=4194304)}else{if(!f)if(a=gc(y),a!==null){if(o.flags|=128,f=!0,a=a.updateQueue,o.updateQueue=a,wc(o,a),xl(v,!0),v.tail===null&&v.tailMode==="hidden"&&!y.alternate&&!ze)return at(o),null}else 2*Tt()-v.renderingStartTime>Ac&&c!==536870912&&(o.flags|=128,f=!0,xl(v,!1),o.lanes=4194304);v.isBackwards?(y.sibling=o.child,o.child=y):(a=v.last,a!==null?a.sibling=y:o.child=y,v.last=y)}return v.tail!==null?(o=v.tail,v.rendering=o,v.tail=o.sibling,v.renderingStartTime=Tt(),o.sibling=null,a=jt.current,re(jt,f?a&1|2:a&1),o):(at(o),null);case 22:case 23:return Nn(o),Zf(),f=o.memoizedState!==null,a!==null?a.memoizedState!==null!==f&&(o.flags|=8192):f&&(o.flags|=8192),f?(c&536870912)!==0&&(o.flags&128)===0&&(at(o),o.subtreeFlags&6&&(o.flags|=8192)):at(o),c=o.updateQueue,c!==null&&wc(o,c.retryQueue),c=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048),a!==null&&ae(Za),null;case 24:return c=null,a!==null&&(c=a.memoizedState.cache),o.memoizedState.cache!==c&&(o.flags|=2048),En(wt),at(o),null;case 25:return null;case 30:return null}throw Error(n(156,o.tag))}function o4(a,o){switch(Lf(o),o.tag){case 1:return a=o.flags,a&65536?(o.flags=a&-65537|128,o):null;case 3:return En(wt),Q(),a=o.flags,(a&65536)!==0&&(a&128)===0?(o.flags=a&-65537|128,o):null;case 26:case 27:case 5:return Ce(o),null;case 13:if(Nn(o),a=o.memoizedState,a!==null&&a.dehydrated!==null){if(o.alternate===null)throw Error(n(340));rl()}return a=o.flags,a&65536?(o.flags=a&-65537|128,o):null;case 19:return ae(jt),null;case 4:return Q(),null;case 10:return En(o.type),null;case 22:case 23:return Nn(o),Zf(),a!==null&&ae(Za),a=o.flags,a&65536?(o.flags=a&-65537|128,o):null;case 24:return En(wt),null;case 25:return null;default:return null}}function jb(a,o){switch(Lf(o),o.tag){case 3:En(wt),Q();break;case 26:case 27:case 5:Ce(o);break;case 4:Q();break;case 13:Nn(o);break;case 19:ae(jt);break;case 10:En(o.type);break;case 22:case 23:Nn(o),Zf(),a!==null&&ae(Za);break;case 24:En(wt)}}function yl(a,o){try{var c=o.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var v=f.next;c=v;do{if((c.tag&a)===a){f=void 0;var y=c.create,E=c.inst;f=y(),E.destroy=f}c=c.next}while(c!==v)}}catch(N){Ve(o,o.return,N)}}function ma(a,o,c){try{var f=o.updateQueue,v=f!==null?f.lastEffect:null;if(v!==null){var y=v.next;f=y;do{if((f.tag&a)===a){var E=f.inst,N=E.destroy;if(N!==void 0){E.destroy=void 0,v=o;var P=c,I=N;try{I()}catch(G){Ve(v,P,G)}}}f=f.next}while(f!==y)}}catch(G){Ve(o,o.return,G)}}function Sb(a){var o=a.updateQueue;if(o!==null){var c=a.stateNode;try{uy(o,c)}catch(f){Ve(a,a.return,f)}}}function Ab(a,o,c){c.props=Ja(a.type,a.memoizedProps),c.state=a.memoizedState;try{c.componentWillUnmount()}catch(f){Ve(a,o,f)}}function bl(a,o){try{var c=a.ref;if(c!==null){switch(a.tag){case 26:case 27:case 5:var f=a.stateNode;break;case 30:f=a.stateNode;break;default:f=a.stateNode}typeof c=="function"?a.refCleanup=c(f):c.current=f}}catch(v){Ve(a,o,v)}}function dn(a,o){var c=a.ref,f=a.refCleanup;if(c!==null)if(typeof f=="function")try{f()}catch(v){Ve(a,o,v)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof c=="function")try{c(null)}catch(v){Ve(a,o,v)}else c.current=null}function Ob(a){var o=a.type,c=a.memoizedProps,f=a.stateNode;try{e:switch(o){case"button":case"input":case"select":case"textarea":c.autoFocus&&f.focus();break e;case"img":c.src?f.src=c.src:c.srcSet&&(f.srcset=c.srcSet)}}catch(v){Ve(a,a.return,v)}}function Op(a,o,c){try{var f=a.stateNode;k4(f,a.type,c,o),f[ir]=o}catch(v){Ve(a,a.return,v)}}function Eb(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&Sa(a.type)||a.tag===4}function Ep(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||Eb(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&Sa(a.type)||a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function kp(a,o,c){var f=a.tag;if(f===5||f===6)a=a.stateNode,o?(c.nodeType===9?c.body:c.nodeName==="HTML"?c.ownerDocument.body:c).insertBefore(a,o):(o=c.nodeType===9?c.body:c.nodeName==="HTML"?c.ownerDocument.body:c,o.appendChild(a),c=c._reactRootContainer,c!=null||o.onclick!==null||(o.onclick=Pc));else if(f!==4&&(f===27&&Sa(a.type)&&(c=a.stateNode,o=null),a=a.child,a!==null))for(kp(a,o,c),a=a.sibling;a!==null;)kp(a,o,c),a=a.sibling}function jc(a,o,c){var f=a.tag;if(f===5||f===6)a=a.stateNode,o?c.insertBefore(a,o):c.appendChild(a);else if(f!==4&&(f===27&&Sa(a.type)&&(c=a.stateNode),a=a.child,a!==null))for(jc(a,o,c),a=a.sibling;a!==null;)jc(a,o,c),a=a.sibling}function kb(a){var o=a.stateNode,c=a.memoizedProps;try{for(var f=a.type,v=o.attributes;v.length;)o.removeAttributeNode(v[0]);Ut(o,f,c),o[Kt]=a,o[ir]=c}catch(y){Ve(a,a.return,y)}}var Mn=!1,dt=!1,Np=!1,Nb=typeof WeakSet=="function"?WeakSet:Set,Pt=null;function l4(a,o){if(a=a.containerInfo,Qp=qc,a=Ix(a),Ef(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else e:{c=(c=a.ownerDocument)&&c.defaultView||window;var f=c.getSelection&&c.getSelection();if(f&&f.rangeCount!==0){c=f.anchorNode;var v=f.anchorOffset,y=f.focusNode;f=f.focusOffset;try{c.nodeType,y.nodeType}catch{c=null;break e}var E=0,N=-1,P=-1,I=0,G=0,X=a,q=null;t:for(;;){for(var H;X!==c||v!==0&&X.nodeType!==3||(N=E+v),X!==y||f!==0&&X.nodeType!==3||(P=E+f),X.nodeType===3&&(E+=X.nodeValue.length),(H=X.firstChild)!==null;)q=X,X=H;for(;;){if(X===a)break t;if(q===c&&++I===v&&(N=E),q===y&&++G===f&&(P=E),(H=X.nextSibling)!==null)break;X=q,q=X.parentNode}X=H}c=N===-1||P===-1?null:{start:N,end:P}}else c=null}c=c||{start:0,end:0}}else c=null;for(Jp={focusedElem:a,selectionRange:c},qc=!1,Pt=o;Pt!==null;)if(o=Pt,a=o.child,(o.subtreeFlags&1024)!==0&&a!==null)a.return=o,Pt=a;else for(;Pt!==null;){switch(o=Pt,y=o.alternate,a=o.flags,o.tag){case 0:break;case 11:case 15:break;case 1:if((a&1024)!==0&&y!==null){a=void 0,c=o,v=y.memoizedProps,y=y.memoizedState,f=c.stateNode;try{var be=Ja(c.type,v,c.elementType===c.type);a=f.getSnapshotBeforeUpdate(be,y),f.__reactInternalSnapshotBeforeUpdate=a}catch(me){Ve(c,c.return,me)}}break;case 3:if((a&1024)!==0){if(a=o.stateNode.containerInfo,c=a.nodeType,c===9)rh(a);else if(c===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":rh(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(n(163))}if(a=o.sibling,a!==null){a.return=o.return,Pt=a;break}Pt=o.return}}function Cb(a,o,c){var f=c.flags;switch(c.tag){case 0:case 11:case 15:ga(a,c),f&4&&yl(5,c);break;case 1:if(ga(a,c),f&4)if(a=c.stateNode,o===null)try{a.componentDidMount()}catch(E){Ve(c,c.return,E)}else{var v=Ja(c.type,o.memoizedProps);o=o.memoizedState;try{a.componentDidUpdate(v,o,a.__reactInternalSnapshotBeforeUpdate)}catch(E){Ve(c,c.return,E)}}f&64&&Sb(c),f&512&&bl(c,c.return);break;case 3:if(ga(a,c),f&64&&(a=c.updateQueue,a!==null)){if(o=null,c.child!==null)switch(c.child.tag){case 27:case 5:o=c.child.stateNode;break;case 1:o=c.child.stateNode}try{uy(a,o)}catch(E){Ve(c,c.return,E)}}break;case 27:o===null&&f&4&&kb(c);case 26:case 5:ga(a,c),o===null&&f&4&&Ob(c),f&512&&bl(c,c.return);break;case 12:ga(a,c);break;case 13:ga(a,c),f&4&&_b(a,c),f&64&&(a=c.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(c=g4.bind(null,c),D4(a,c))));break;case 22:if(f=c.memoizedState!==null||Mn,!f){o=o!==null&&o.memoizedState!==null||dt,v=Mn;var y=dt;Mn=f,(dt=o)&&!y?va(a,c,(c.subtreeFlags&8772)!==0):ga(a,c),Mn=v,dt=y}break;case 30:break;default:ga(a,c)}}function Tb(a){var o=a.alternate;o!==null&&(a.alternate=null,Tb(o)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(o=a.stateNode,o!==null&&lf(o)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var et=null,sr=!1;function _n(a,o,c){for(c=c.child;c!==null;)Mb(a,o,c),c=c.sibling}function Mb(a,o,c){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount($o,c)}catch{}switch(c.tag){case 26:dt||dn(c,o),_n(a,o,c),c.memoizedState?c.memoizedState.count--:c.stateNode&&(c=c.stateNode,c.parentNode.removeChild(c));break;case 27:dt||dn(c,o);var f=et,v=sr;Sa(c.type)&&(et=c.stateNode,sr=!1),_n(a,o,c),Cl(c.stateNode),et=f,sr=v;break;case 5:dt||dn(c,o);case 6:if(f=et,v=sr,et=null,_n(a,o,c),et=f,sr=v,et!==null)if(sr)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(c.stateNode)}catch(y){Ve(c,o,y)}else try{et.removeChild(c.stateNode)}catch(y){Ve(c,o,y)}break;case 18:et!==null&&(sr?(a=et,y1(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,c.stateNode),Ll(a)):y1(et,c.stateNode));break;case 4:f=et,v=sr,et=c.stateNode.containerInfo,sr=!0,_n(a,o,c),et=f,sr=v;break;case 0:case 11:case 14:case 15:dt||ma(2,c,o),dt||ma(4,c,o),_n(a,o,c);break;case 1:dt||(dn(c,o),f=c.stateNode,typeof f.componentWillUnmount=="function"&&Ab(c,o,f)),_n(a,o,c);break;case 21:_n(a,o,c);break;case 22:dt=(f=dt)||c.memoizedState!==null,_n(a,o,c),dt=f;break;default:_n(a,o,c)}}function _b(a,o){if(o.memoizedState===null&&(a=o.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{Ll(a)}catch(c){Ve(o,o.return,c)}}function s4(a){switch(a.tag){case 13:case 19:var o=a.stateNode;return o===null&&(o=a.stateNode=new Nb),o;case 22:return a=a.stateNode,o=a._retryCache,o===null&&(o=a._retryCache=new Nb),o;default:throw Error(n(435,a.tag))}}function Cp(a,o){var c=s4(a);o.forEach(function(f){var v=v4.bind(null,a,f);c.has(f)||(c.add(f),f.then(v,v))})}function br(a,o){var c=o.deletions;if(c!==null)for(var f=0;f<c.length;f++){var v=c[f],y=a,E=o,N=E;e:for(;N!==null;){switch(N.tag){case 27:if(Sa(N.type)){et=N.stateNode,sr=!1;break e}break;case 5:et=N.stateNode,sr=!1;break e;case 3:case 4:et=N.stateNode.containerInfo,sr=!0;break e}N=N.return}if(et===null)throw Error(n(160));Mb(y,E,v),et=null,sr=!1,y=v.alternate,y!==null&&(y.return=null),v.return=null}if(o.subtreeFlags&13878)for(o=o.child;o!==null;)Pb(o,a),o=o.sibling}var Qr=null;function Pb(a,o){var c=a.alternate,f=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:br(o,a),wr(a),f&4&&(ma(3,a,a.return),yl(3,a),ma(5,a,a.return));break;case 1:br(o,a),wr(a),f&512&&(dt||c===null||dn(c,c.return)),f&64&&Mn&&(a=a.updateQueue,a!==null&&(f=a.callbacks,f!==null&&(c=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=c===null?f:c.concat(f))));break;case 26:var v=Qr;if(br(o,a),wr(a),f&512&&(dt||c===null||dn(c,c.return)),f&4){var y=c!==null?c.memoizedState:null;if(f=a.memoizedState,c===null)if(f===null)if(a.stateNode===null){e:{f=a.type,c=a.memoizedProps,v=v.ownerDocument||v;t:switch(f){case"title":y=v.getElementsByTagName("title")[0],(!y||y[Yo]||y[Kt]||y.namespaceURI==="http://www.w3.org/2000/svg"||y.hasAttribute("itemprop"))&&(y=v.createElement(f),v.head.insertBefore(y,v.querySelector("head > title"))),Ut(y,f,c),y[Kt]=a,Mt(y),f=y;break e;case"link":var E=k1("link","href",v).get(f+(c.href||""));if(E){for(var N=0;N<E.length;N++)if(y=E[N],y.getAttribute("href")===(c.href==null||c.href===""?null:c.href)&&y.getAttribute("rel")===(c.rel==null?null:c.rel)&&y.getAttribute("title")===(c.title==null?null:c.title)&&y.getAttribute("crossorigin")===(c.crossOrigin==null?null:c.crossOrigin)){E.splice(N,1);break t}}y=v.createElement(f),Ut(y,f,c),v.head.appendChild(y);break;case"meta":if(E=k1("meta","content",v).get(f+(c.content||""))){for(N=0;N<E.length;N++)if(y=E[N],y.getAttribute("content")===(c.content==null?null:""+c.content)&&y.getAttribute("name")===(c.name==null?null:c.name)&&y.getAttribute("property")===(c.property==null?null:c.property)&&y.getAttribute("http-equiv")===(c.httpEquiv==null?null:c.httpEquiv)&&y.getAttribute("charset")===(c.charSet==null?null:c.charSet)){E.splice(N,1);break t}}y=v.createElement(f),Ut(y,f,c),v.head.appendChild(y);break;default:throw Error(n(468,f))}y[Kt]=a,Mt(y),f=y}a.stateNode=f}else N1(v,a.type,a.stateNode);else a.stateNode=E1(v,f,a.memoizedProps);else y!==f?(y===null?c.stateNode!==null&&(c=c.stateNode,c.parentNode.removeChild(c)):y.count--,f===null?N1(v,a.type,a.stateNode):E1(v,f,a.memoizedProps)):f===null&&a.stateNode!==null&&Op(a,a.memoizedProps,c.memoizedProps)}break;case 27:br(o,a),wr(a),f&512&&(dt||c===null||dn(c,c.return)),c!==null&&f&4&&Op(a,a.memoizedProps,c.memoizedProps);break;case 5:if(br(o,a),wr(a),f&512&&(dt||c===null||dn(c,c.return)),a.flags&32){v=a.stateNode;try{Di(v,"")}catch(H){Ve(a,a.return,H)}}f&4&&a.stateNode!=null&&(v=a.memoizedProps,Op(a,v,c!==null?c.memoizedProps:v)),f&1024&&(Np=!0);break;case 6:if(br(o,a),wr(a),f&4){if(a.stateNode===null)throw Error(n(162));f=a.memoizedProps,c=a.stateNode;try{c.nodeValue=f}catch(H){Ve(a,a.return,H)}}break;case 3:if(Lc=null,v=Qr,Qr=zc(o.containerInfo),br(o,a),Qr=v,wr(a),f&4&&c!==null&&c.memoizedState.isDehydrated)try{Ll(o.containerInfo)}catch(H){Ve(a,a.return,H)}Np&&(Np=!1,Db(a));break;case 4:f=Qr,Qr=zc(a.stateNode.containerInfo),br(o,a),wr(a),Qr=f;break;case 12:br(o,a),wr(a);break;case 13:br(o,a),wr(a),a.child.flags&8192&&a.memoizedState!==null!=(c!==null&&c.memoizedState!==null)&&(zp=Tt()),f&4&&(f=a.updateQueue,f!==null&&(a.updateQueue=null,Cp(a,f)));break;case 22:v=a.memoizedState!==null;var P=c!==null&&c.memoizedState!==null,I=Mn,G=dt;if(Mn=I||v,dt=G||P,br(o,a),dt=G,Mn=I,wr(a),f&8192)e:for(o=a.stateNode,o._visibility=v?o._visibility&-2:o._visibility|1,v&&(c===null||P||Mn||dt||ei(a)),c=null,o=a;;){if(o.tag===5||o.tag===26){if(c===null){P=c=o;try{if(y=P.stateNode,v)E=y.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{N=P.stateNode;var X=P.memoizedProps.style,q=X!=null&&X.hasOwnProperty("display")?X.display:null;N.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){Ve(P,P.return,H)}}}else if(o.tag===6){if(c===null){P=o;try{P.stateNode.nodeValue=v?"":P.memoizedProps}catch(H){Ve(P,P.return,H)}}}else if((o.tag!==22&&o.tag!==23||o.memoizedState===null||o===a)&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;c===o&&(c=null),o=o.return}c===o&&(c=null),o.sibling.return=o.return,o=o.sibling}f&4&&(f=a.updateQueue,f!==null&&(c=f.retryQueue,c!==null&&(f.retryQueue=null,Cp(a,c))));break;case 19:br(o,a),wr(a),f&4&&(f=a.updateQueue,f!==null&&(a.updateQueue=null,Cp(a,f)));break;case 30:break;case 21:break;default:br(o,a),wr(a)}}function wr(a){var o=a.flags;if(o&2){try{for(var c,f=a.return;f!==null;){if(Eb(f)){c=f;break}f=f.return}if(c==null)throw Error(n(160));switch(c.tag){case 27:var v=c.stateNode,y=Ep(a);jc(a,y,v);break;case 5:var E=c.stateNode;c.flags&32&&(Di(E,""),c.flags&=-33);var N=Ep(a);jc(a,N,E);break;case 3:case 4:var P=c.stateNode.containerInfo,I=Ep(a);kp(a,I,P);break;default:throw Error(n(161))}}catch(G){Ve(a,a.return,G)}a.flags&=-3}o&4096&&(a.flags&=-4097)}function Db(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var o=a;Db(o),o.tag===5&&o.flags&1024&&o.stateNode.reset(),a=a.sibling}}function ga(a,o){if(o.subtreeFlags&8772)for(o=o.child;o!==null;)Cb(a,o.alternate,o),o=o.sibling}function ei(a){for(a=a.child;a!==null;){var o=a;switch(o.tag){case 0:case 11:case 14:case 15:ma(4,o,o.return),ei(o);break;case 1:dn(o,o.return);var c=o.stateNode;typeof c.componentWillUnmount=="function"&&Ab(o,o.return,c),ei(o);break;case 27:Cl(o.stateNode);case 26:case 5:dn(o,o.return),ei(o);break;case 22:o.memoizedState===null&&ei(o);break;case 30:ei(o);break;default:ei(o)}a=a.sibling}}function va(a,o,c){for(c=c&&(o.subtreeFlags&8772)!==0,o=o.child;o!==null;){var f=o.alternate,v=a,y=o,E=y.flags;switch(y.tag){case 0:case 11:case 15:va(v,y,c),yl(4,y);break;case 1:if(va(v,y,c),f=y,v=f.stateNode,typeof v.componentDidMount=="function")try{v.componentDidMount()}catch(I){Ve(f,f.return,I)}if(f=y,v=f.updateQueue,v!==null){var N=f.stateNode;try{var P=v.shared.hiddenCallbacks;if(P!==null)for(v.shared.hiddenCallbacks=null,v=0;v<P.length;v++)cy(P[v],N)}catch(I){Ve(f,f.return,I)}}c&&E&64&&Sb(y),bl(y,y.return);break;case 27:kb(y);case 26:case 5:va(v,y,c),c&&f===null&&E&4&&Ob(y),bl(y,y.return);break;case 12:va(v,y,c);break;case 13:va(v,y,c),c&&E&4&&_b(v,y);break;case 22:y.memoizedState===null&&va(v,y,c),bl(y,y.return);break;case 30:break;default:va(v,y,c)}o=o.sibling}}function Tp(a,o){var c=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),a=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(a=o.memoizedState.cachePool.pool),a!==c&&(a!=null&&a.refCount++,c!=null&&il(c))}function Mp(a,o){a=null,o.alternate!==null&&(a=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==a&&(o.refCount++,a!=null&&il(a))}function fn(a,o,c,f){if(o.subtreeFlags&10256)for(o=o.child;o!==null;)zb(a,o,c,f),o=o.sibling}function zb(a,o,c,f){var v=o.flags;switch(o.tag){case 0:case 11:case 15:fn(a,o,c,f),v&2048&&yl(9,o);break;case 1:fn(a,o,c,f);break;case 3:fn(a,o,c,f),v&2048&&(a=null,o.alternate!==null&&(a=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==a&&(o.refCount++,a!=null&&il(a)));break;case 12:if(v&2048){fn(a,o,c,f),a=o.stateNode;try{var y=o.memoizedProps,E=y.id,N=y.onPostCommit;typeof N=="function"&&N(E,o.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(P){Ve(o,o.return,P)}}else fn(a,o,c,f);break;case 13:fn(a,o,c,f);break;case 23:break;case 22:y=o.stateNode,E=o.alternate,o.memoizedState!==null?y._visibility&2?fn(a,o,c,f):wl(a,o):y._visibility&2?fn(a,o,c,f):(y._visibility|=2,Ji(a,o,c,f,(o.subtreeFlags&10256)!==0)),v&2048&&Tp(E,o);break;case 24:fn(a,o,c,f),v&2048&&Mp(o.alternate,o);break;default:fn(a,o,c,f)}}function Ji(a,o,c,f,v){for(v=v&&(o.subtreeFlags&10256)!==0,o=o.child;o!==null;){var y=a,E=o,N=c,P=f,I=E.flags;switch(E.tag){case 0:case 11:case 15:Ji(y,E,N,P,v),yl(8,E);break;case 23:break;case 22:var G=E.stateNode;E.memoizedState!==null?G._visibility&2?Ji(y,E,N,P,v):wl(y,E):(G._visibility|=2,Ji(y,E,N,P,v)),v&&I&2048&&Tp(E.alternate,E);break;case 24:Ji(y,E,N,P,v),v&&I&2048&&Mp(E.alternate,E);break;default:Ji(y,E,N,P,v)}o=o.sibling}}function wl(a,o){if(o.subtreeFlags&10256)for(o=o.child;o!==null;){var c=a,f=o,v=f.flags;switch(f.tag){case 22:wl(c,f),v&2048&&Tp(f.alternate,f);break;case 24:wl(c,f),v&2048&&Mp(f.alternate,f);break;default:wl(c,f)}o=o.sibling}}var jl=8192;function eo(a){if(a.subtreeFlags&jl)for(a=a.child;a!==null;)Rb(a),a=a.sibling}function Rb(a){switch(a.tag){case 26:eo(a),a.flags&jl&&a.memoizedState!==null&&W4(Qr,a.memoizedState,a.memoizedProps);break;case 5:eo(a);break;case 3:case 4:var o=Qr;Qr=zc(a.stateNode.containerInfo),eo(a),Qr=o;break;case 22:a.memoizedState===null&&(o=a.alternate,o!==null&&o.memoizedState!==null?(o=jl,jl=16777216,eo(a),jl=o):eo(a));break;default:eo(a)}}function Lb(a){var o=a.alternate;if(o!==null&&(a=o.child,a!==null)){o.child=null;do o=a.sibling,a.sibling=null,a=o;while(a!==null)}}function Sl(a){var o=a.deletions;if((a.flags&16)!==0){if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];Pt=f,Ib(f,a)}Lb(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Bb(a),a=a.sibling}function Bb(a){switch(a.tag){case 0:case 11:case 15:Sl(a),a.flags&2048&&ma(9,a,a.return);break;case 3:Sl(a);break;case 12:Sl(a);break;case 22:var o=a.stateNode;a.memoizedState!==null&&o._visibility&2&&(a.return===null||a.return.tag!==13)?(o._visibility&=-3,Sc(a)):Sl(a);break;default:Sl(a)}}function Sc(a){var o=a.deletions;if((a.flags&16)!==0){if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];Pt=f,Ib(f,a)}Lb(a)}for(a=a.child;a!==null;){switch(o=a,o.tag){case 0:case 11:case 15:ma(8,o,o.return),Sc(o);break;case 22:c=o.stateNode,c._visibility&2&&(c._visibility&=-3,Sc(o));break;default:Sc(o)}a=a.sibling}}function Ib(a,o){for(;Pt!==null;){var c=Pt;switch(c.tag){case 0:case 11:case 15:ma(8,c,o);break;case 23:case 22:if(c.memoizedState!==null&&c.memoizedState.cachePool!==null){var f=c.memoizedState.cachePool.pool;f!=null&&f.refCount++}break;case 24:il(c.memoizedState.cache)}if(f=c.child,f!==null)f.return=c,Pt=f;else e:for(c=a;Pt!==null;){f=Pt;var v=f.sibling,y=f.return;if(Tb(f),f===c){Pt=null;break e}if(v!==null){v.return=y,Pt=v;break e}Pt=y}}}var c4={getCacheForType:function(a){var o=Wt(wt),c=o.data.get(a);return c===void 0&&(c=a(),o.data.set(a,c)),c}},u4=typeof WeakMap=="function"?WeakMap:Map,Be=0,Fe=null,Te=null,_e=0,Ie=0,jr=null,xa=!1,to=!1,_p=!1,Pn=0,st=0,ya=0,ti=0,Pp=0,Br=0,ro=0,Al=null,cr=null,Dp=!1,zp=0,Ac=1/0,Oc=null,ba=null,$t=0,wa=null,no=null,ao=0,Rp=0,Lp=null,qb=null,Ol=0,Bp=null;function Sr(){if((Be&2)!==0&&_e!==0)return _e&-_e;if($.T!==null){var a=Gi;return a!==0?a:Gp()}return rx()}function $b(){Br===0&&(Br=(_e&536870912)===0||ze?Qv():536870912);var a=Lr.current;return a!==null&&(a.flags|=32),Br}function Ar(a,o,c){(a===Fe&&(Ie===2||Ie===9)||a.cancelPendingCommit!==null)&&(io(a,0),ja(a,_e,Br,!1)),Ho(a,c),((Be&2)===0||a!==Fe)&&(a===Fe&&((Be&2)===0&&(ti|=c),st===4&&ja(a,_e,Br,!1)),pn(a))}function Ub(a,o,c){if((Be&6)!==0)throw Error(n(327));var f=!c&&(o&124)===0&&(o&a.expiredLanes)===0||Uo(a,o),v=f?p4(a,o):$p(a,o,!0),y=f;do{if(v===0){to&&!f&&ja(a,o,0,!1);break}else{if(c=a.current.alternate,y&&!d4(c)){v=$p(a,o,!1),y=!1;continue}if(v===2){if(y=o,a.errorRecoveryDisabledLanes&y)var E=0;else E=a.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){o=E;e:{var N=a;v=Al;var P=N.current.memoizedState.isDehydrated;if(P&&(io(N,E).flags|=256),E=$p(N,E,!1),E!==2){if(_p&&!P){N.errorRecoveryDisabledLanes|=y,ti|=y,v=4;break e}y=cr,cr=v,y!==null&&(cr===null?cr=y:cr.push.apply(cr,y))}v=E}if(y=!1,v!==2)continue}}if(v===1){io(a,0),ja(a,o,0,!0);break}e:{switch(f=a,y=v,y){case 0:case 1:throw Error(n(345));case 4:if((o&4194048)!==o)break;case 6:ja(f,o,Br,!xa);break e;case 2:cr=null;break;case 3:case 5:break;default:throw Error(n(329))}if((o&62914560)===o&&(v=zp+300-Tt(),10<v)){if(ja(f,o,Br,!xa),Rs(f,0,!0)!==0)break e;f.timeoutHandle=v1(Hb.bind(null,f,c,cr,Oc,Dp,o,Br,ti,ro,xa,y,2,-0,0),v);break e}Hb(f,c,cr,Oc,Dp,o,Br,ti,ro,xa,y,0,-0,0)}}break}while(!0);pn(a)}function Hb(a,o,c,f,v,y,E,N,P,I,G,X,q,H){if(a.timeoutHandle=-1,X=o.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(_l={stylesheets:null,count:0,unsuspend:K4},Rb(o),X=V4(),X!==null)){a.cancelPendingCommit=X(Fb.bind(null,a,o,y,c,f,v,E,N,P,G,1,q,H)),ja(a,y,E,!I);return}Fb(a,o,y,c,f,v,E,N,P)}function d4(a){for(var o=a;;){var c=o.tag;if((c===0||c===11||c===15)&&o.flags&16384&&(c=o.updateQueue,c!==null&&(c=c.stores,c!==null)))for(var f=0;f<c.length;f++){var v=c[f],y=v.getSnapshot;v=v.value;try{if(!xr(y(),v))return!1}catch{return!1}}if(c=o.child,o.subtreeFlags&16384&&c!==null)c.return=o,o=c;else{if(o===a)break;for(;o.sibling===null;){if(o.return===null||o.return===a)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ja(a,o,c,f){o&=~Pp,o&=~ti,a.suspendedLanes|=o,a.pingedLanes&=~o,f&&(a.warmLanes|=o),f=a.expirationTimes;for(var v=o;0<v;){var y=31-vr(v),E=1<<y;f[y]=-1,v&=~E}c!==0&&ex(a,c,o)}function Ec(){return(Be&6)===0?(El(0),!1):!0}function Ip(){if(Te!==null){if(Ie===0)var a=Te.return;else a=Te,On=Xa=null,rp(a),Zi=null,gl=0,a=Te;for(;a!==null;)jb(a.alternate,a),a=a.return;Te=null}}function io(a,o){var c=a.timeoutHandle;c!==-1&&(a.timeoutHandle=-1,C4(c)),c=a.cancelPendingCommit,c!==null&&(a.cancelPendingCommit=null,c()),Ip(),Fe=a,Te=c=jn(a.current,null),_e=o,Ie=0,jr=null,xa=!1,to=Uo(a,o),_p=!1,ro=Br=Pp=ti=ya=st=0,cr=Al=null,Dp=!1,(o&8)!==0&&(o|=o&32);var f=a.entangledLanes;if(f!==0)for(a=a.entanglements,f&=o;0<f;){var v=31-vr(f),y=1<<v;o|=a[v],f&=~y}return Pn=o,Vs(),c}function Yb(a,o){Oe=null,$.H=pc,o===ll||o===nc?(o=ly(),Ie=3):o===ay?(o=ly(),Ie=4):Ie=o===sb?8:o!==null&&typeof o=="object"&&typeof o.then=="function"?6:1,jr=o,Te===null&&(st=1,xc(a,Pr(o,a.current)))}function Gb(){var a=$.H;return $.H=pc,a===null?pc:a}function Kb(){var a=$.A;return $.A=c4,a}function qp(){st=4,xa||(_e&4194048)!==_e&&Lr.current!==null||(to=!0),(ya&134217727)===0&&(ti&134217727)===0||Fe===null||ja(Fe,_e,Br,!1)}function $p(a,o,c){var f=Be;Be|=2;var v=Gb(),y=Kb();(Fe!==a||_e!==o)&&(Oc=null,io(a,o)),o=!1;var E=st;e:do try{if(Ie!==0&&Te!==null){var N=Te,P=jr;switch(Ie){case 8:Ip(),E=6;break e;case 3:case 2:case 9:case 6:Lr.current===null&&(o=!0);var I=Ie;if(Ie=0,jr=null,oo(a,N,P,I),c&&to){E=0;break e}break;default:I=Ie,Ie=0,jr=null,oo(a,N,P,I)}}f4(),E=st;break}catch(G){Yb(a,G)}while(!0);return o&&a.shellSuspendCounter++,On=Xa=null,Be=f,$.H=v,$.A=y,Te===null&&(Fe=null,_e=0,Vs()),E}function f4(){for(;Te!==null;)Wb(Te)}function p4(a,o){var c=Be;Be|=2;var f=Gb(),v=Kb();Fe!==a||_e!==o?(Oc=null,Ac=Tt()+500,io(a,o)):to=Uo(a,o);e:do try{if(Ie!==0&&Te!==null){o=Te;var y=jr;t:switch(Ie){case 1:Ie=0,jr=null,oo(a,o,y,1);break;case 2:case 9:if(iy(y)){Ie=0,jr=null,Vb(o);break}o=function(){Ie!==2&&Ie!==9||Fe!==a||(Ie=7),pn(a)},y.then(o,o);break e;case 3:Ie=7;break e;case 4:Ie=5;break e;case 7:iy(y)?(Ie=0,jr=null,Vb(o)):(Ie=0,jr=null,oo(a,o,y,7));break;case 5:var E=null;switch(Te.tag){case 26:E=Te.memoizedState;case 5:case 27:var N=Te;if(!E||C1(E)){Ie=0,jr=null;var P=N.sibling;if(P!==null)Te=P;else{var I=N.return;I!==null?(Te=I,kc(I)):Te=null}break t}}Ie=0,jr=null,oo(a,o,y,5);break;case 6:Ie=0,jr=null,oo(a,o,y,6);break;case 8:Ip(),st=6;break e;default:throw Error(n(462))}}h4();break}catch(G){Yb(a,G)}while(!0);return On=Xa=null,$.H=f,$.A=v,Be=c,Te!==null?0:(Fe=null,_e=0,Vs(),st)}function h4(){for(;Te!==null&&!Qt();)Wb(Te)}function Wb(a){var o=bb(a.alternate,a,Pn);a.memoizedProps=a.pendingProps,o===null?kc(a):Te=o}function Vb(a){var o=a,c=o.alternate;switch(o.tag){case 15:case 0:o=hb(c,o,o.pendingProps,o.type,void 0,_e);break;case 11:o=hb(c,o,o.pendingProps,o.type.render,o.ref,_e);break;case 5:rp(o);default:jb(c,o),o=Te=Xx(o,Pn),o=bb(c,o,Pn)}a.memoizedProps=a.pendingProps,o===null?kc(a):Te=o}function oo(a,o,c,f){On=Xa=null,rp(o),Zi=null,gl=0;var v=o.return;try{if(n4(a,v,o,c,_e)){st=1,xc(a,Pr(c,a.current)),Te=null;return}}catch(y){if(v!==null)throw Te=v,y;st=1,xc(a,Pr(c,a.current)),Te=null;return}o.flags&32768?(ze||f===1?a=!0:to||(_e&536870912)!==0?a=!1:(xa=a=!0,(f===2||f===9||f===3||f===6)&&(f=Lr.current,f!==null&&f.tag===13&&(f.flags|=16384))),Xb(o,a)):kc(o)}function kc(a){var o=a;do{if((o.flags&32768)!==0){Xb(o,xa);return}a=o.return;var c=i4(o.alternate,o,Pn);if(c!==null){Te=c;return}if(o=o.sibling,o!==null){Te=o;return}Te=o=a}while(o!==null);st===0&&(st=5)}function Xb(a,o){do{var c=o4(a.alternate,a);if(c!==null){c.flags&=32767,Te=c;return}if(c=a.return,c!==null&&(c.flags|=32768,c.subtreeFlags=0,c.deletions=null),!o&&(a=a.sibling,a!==null)){Te=a;return}Te=a=c}while(a!==null);st=6,Te=null}function Fb(a,o,c,f,v,y,E,N,P){a.cancelPendingCommit=null;do Nc();while($t!==0);if((Be&6)!==0)throw Error(n(327));if(o!==null){if(o===a.current)throw Error(n(177));if(y=o.lanes|o.childLanes,y|=Mf,K5(a,c,y,E,N,P),a===Fe&&(Te=Fe=null,_e=0),no=o,wa=a,ao=c,Rp=y,Lp=v,qb=f,(o.subtreeFlags&10256)!==0||(o.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,x4(Ps,function(){return t1(),null})):(a.callbackNode=null,a.callbackPriority=0),f=(o.flags&13878)!==0,(o.subtreeFlags&13878)!==0||f){f=$.T,$.T=null,v=K.p,K.p=2,E=Be,Be|=4;try{l4(a,o,c)}finally{Be=E,K.p=v,$.T=f}}$t=1,Zb(),Qb(),Jb()}}function Zb(){if($t===1){$t=0;var a=wa,o=no,c=(o.flags&13878)!==0;if((o.subtreeFlags&13878)!==0||c){c=$.T,$.T=null;var f=K.p;K.p=2;var v=Be;Be|=4;try{Pb(o,a);var y=Jp,E=Ix(a.containerInfo),N=y.focusedElem,P=y.selectionRange;if(E!==N&&N&&N.ownerDocument&&Bx(N.ownerDocument.documentElement,N)){if(P!==null&&Ef(N)){var I=P.start,G=P.end;if(G===void 0&&(G=I),"selectionStart"in N)N.selectionStart=I,N.selectionEnd=Math.min(G,N.value.length);else{var X=N.ownerDocument||document,q=X&&X.defaultView||window;if(q.getSelection){var H=q.getSelection(),be=N.textContent.length,me=Math.min(P.start,be),Ke=P.end===void 0?me:Math.min(P.end,be);!H.extend&&me>Ke&&(E=Ke,Ke=me,me=E);var L=Lx(N,me),z=Lx(N,Ke);if(L&&z&&(H.rangeCount!==1||H.anchorNode!==L.node||H.anchorOffset!==L.offset||H.focusNode!==z.node||H.focusOffset!==z.offset)){var B=X.createRange();B.setStart(L.node,L.offset),H.removeAllRanges(),me>Ke?(H.addRange(B),H.extend(z.node,z.offset)):(B.setEnd(z.node,z.offset),H.addRange(B))}}}}for(X=[],H=N;H=H.parentNode;)H.nodeType===1&&X.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<X.length;N++){var W=X[N];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}qc=!!Qp,Jp=Qp=null}finally{Be=v,K.p=f,$.T=c}}a.current=o,$t=2}}function Qb(){if($t===2){$t=0;var a=wa,o=no,c=(o.flags&8772)!==0;if((o.subtreeFlags&8772)!==0||c){c=$.T,$.T=null;var f=K.p;K.p=2;var v=Be;Be|=4;try{Cb(a,o.alternate,o)}finally{Be=v,K.p=f,$.T=c}}$t=3}}function Jb(){if($t===4||$t===3){$t=0,Jt();var a=wa,o=no,c=ao,f=qb;(o.subtreeFlags&10256)!==0||(o.flags&10256)!==0?$t=5:($t=0,no=wa=null,e1(a,a.pendingLanes));var v=a.pendingLanes;if(v===0&&(ba=null),af(c),o=o.stateNode,gr&&typeof gr.onCommitFiberRoot=="function")try{gr.onCommitFiberRoot($o,o,void 0,(o.current.flags&128)===128)}catch{}if(f!==null){o=$.T,v=K.p,K.p=2,$.T=null;try{for(var y=a.onRecoverableError,E=0;E<f.length;E++){var N=f[E];y(N.value,{componentStack:N.stack})}}finally{$.T=o,K.p=v}}(ao&3)!==0&&Nc(),pn(a),v=a.pendingLanes,(c&4194090)!==0&&(v&42)!==0?a===Bp?Ol++:(Ol=0,Bp=a):Ol=0,El(0)}}function e1(a,o){(a.pooledCacheLanes&=o)===0&&(o=a.pooledCache,o!=null&&(a.pooledCache=null,il(o)))}function Nc(a){return Zb(),Qb(),Jb(),t1()}function t1(){if($t!==5)return!1;var a=wa,o=Rp;Rp=0;var c=af(ao),f=$.T,v=K.p;try{K.p=32>c?32:c,$.T=null,c=Lp,Lp=null;var y=wa,E=ao;if($t=0,no=wa=null,ao=0,(Be&6)!==0)throw Error(n(331));var N=Be;if(Be|=4,Bb(y.current),zb(y,y.current,E,c),Be=N,El(0,!1),gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot($o,y)}catch{}return!0}finally{K.p=v,$.T=f,e1(a,o)}}function r1(a,o,c){o=Pr(c,o),o=gp(a.stateNode,o,2),a=da(a,o,2),a!==null&&(Ho(a,2),pn(a))}function Ve(a,o,c){if(a.tag===3)r1(a,a,c);else for(;o!==null;){if(o.tag===3){r1(o,a,c);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))){a=Pr(c,a),c=ob(2),f=da(o,c,2),f!==null&&(lb(c,f,o,a),Ho(f,2),pn(f));break}}o=o.return}}function Up(a,o,c){var f=a.pingCache;if(f===null){f=a.pingCache=new u4;var v=new Set;f.set(o,v)}else v=f.get(o),v===void 0&&(v=new Set,f.set(o,v));v.has(c)||(_p=!0,v.add(c),a=m4.bind(null,a,o,c),o.then(a,a))}function m4(a,o,c){var f=a.pingCache;f!==null&&f.delete(o),a.pingedLanes|=a.suspendedLanes&c,a.warmLanes&=~c,Fe===a&&(_e&c)===c&&(st===4||st===3&&(_e&62914560)===_e&&300>Tt()-zp?(Be&2)===0&&io(a,0):Pp|=c,ro===_e&&(ro=0)),pn(a)}function n1(a,o){o===0&&(o=Jv()),a=$i(a,o),a!==null&&(Ho(a,o),pn(a))}function g4(a){var o=a.memoizedState,c=0;o!==null&&(c=o.retryLane),n1(a,c)}function v4(a,o){var c=0;switch(a.tag){case 13:var f=a.stateNode,v=a.memoizedState;v!==null&&(c=v.retryLane);break;case 19:f=a.stateNode;break;case 22:f=a.stateNode._retryCache;break;default:throw Error(n(314))}f!==null&&f.delete(o),n1(a,c)}function x4(a,o){return Ct(a,o)}var Cc=null,lo=null,Hp=!1,Tc=!1,Yp=!1,ri=0;function pn(a){a!==lo&&a.next===null&&(lo===null?Cc=lo=a:lo=lo.next=a),Tc=!0,Hp||(Hp=!0,b4())}function El(a,o){if(!Yp&&Tc){Yp=!0;do for(var c=!1,f=Cc;f!==null;){if(a!==0){var v=f.pendingLanes;if(v===0)var y=0;else{var E=f.suspendedLanes,N=f.pingedLanes;y=(1<<31-vr(42|a)+1)-1,y&=v&~(E&~N),y=y&201326741?y&201326741|1:y?y|2:0}y!==0&&(c=!0,l1(f,y))}else y=_e,y=Rs(f,f===Fe?y:0,f.cancelPendingCommit!==null||f.timeoutHandle!==-1),(y&3)===0||Uo(f,y)||(c=!0,l1(f,y));f=f.next}while(c);Yp=!1}}function y4(){a1()}function a1(){Tc=Hp=!1;var a=0;ri!==0&&(N4()&&(a=ri),ri=0);for(var o=Tt(),c=null,f=Cc;f!==null;){var v=f.next,y=i1(f,o);y===0?(f.next=null,c===null?Cc=v:c.next=v,v===null&&(lo=c)):(c=f,(a!==0||(y&3)!==0)&&(Tc=!0)),f=v}El(a)}function i1(a,o){for(var c=a.suspendedLanes,f=a.pingedLanes,v=a.expirationTimes,y=a.pendingLanes&-62914561;0<y;){var E=31-vr(y),N=1<<E,P=v[E];P===-1?((N&c)===0||(N&f)!==0)&&(v[E]=G5(N,o)):P<=o&&(a.expiredLanes|=N),y&=~N}if(o=Fe,c=_e,c=Rs(a,a===o?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),f=a.callbackNode,c===0||a===o&&(Ie===2||Ie===9)||a.cancelPendingCommit!==null)return f!==null&&f!==null&&Le(f),a.callbackNode=null,a.callbackPriority=0;if((c&3)===0||Uo(a,c)){if(o=c&-c,o===a.callbackPriority)return o;switch(f!==null&&Le(f),af(c)){case 2:case 8:c=Fv;break;case 32:c=Ps;break;case 268435456:c=Zv;break;default:c=Ps}return f=o1.bind(null,a),c=Ct(c,f),a.callbackPriority=o,a.callbackNode=c,o}return f!==null&&f!==null&&Le(f),a.callbackPriority=2,a.callbackNode=null,2}function o1(a,o){if($t!==0&&$t!==5)return a.callbackNode=null,a.callbackPriority=0,null;var c=a.callbackNode;if(Nc()&&a.callbackNode!==c)return null;var f=_e;return f=Rs(a,a===Fe?f:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),f===0?null:(Ub(a,f,o),i1(a,Tt()),a.callbackNode!=null&&a.callbackNode===c?o1.bind(null,a):null)}function l1(a,o){if(Nc())return null;Ub(a,o,!0)}function b4(){T4(function(){(Be&6)!==0?Ct(Xv,y4):a1()})}function Gp(){return ri===0&&(ri=Qv()),ri}function s1(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:$s(""+a)}function c1(a,o){var c=o.ownerDocument.createElement("input");return c.name=o.name,c.value=o.value,a.id&&c.setAttribute("form",a.id),o.parentNode.insertBefore(c,o),a=new FormData(a),c.parentNode.removeChild(c),a}function w4(a,o,c,f,v){if(o==="submit"&&c&&c.stateNode===v){var y=s1((v[ir]||null).action),E=f.submitter;E&&(o=(o=E[ir]||null)?s1(o.formAction):E.getAttribute("formAction"),o!==null&&(y=o,E=null));var N=new Gs("action","action",null,f,v);a.push({event:N,listeners:[{instance:null,listener:function(){if(f.defaultPrevented){if(ri!==0){var P=E?c1(v,E):new FormData(v);dp(c,{pending:!0,data:P,method:v.method,action:y},null,P)}}else typeof y=="function"&&(N.preventDefault(),P=E?c1(v,E):new FormData(v),dp(c,{pending:!0,data:P,method:v.method,action:y},y,P))},currentTarget:v}]})}}for(var Kp=0;Kp<Tf.length;Kp++){var Wp=Tf[Kp],j4=Wp.toLowerCase(),S4=Wp[0].toUpperCase()+Wp.slice(1);Zr(j4,"on"+S4)}Zr(Ux,"onAnimationEnd"),Zr(Hx,"onAnimationIteration"),Zr(Yx,"onAnimationStart"),Zr("dblclick","onDoubleClick"),Zr("focusin","onFocus"),Zr("focusout","onBlur"),Zr(qN,"onTransitionRun"),Zr($N,"onTransitionStart"),Zr(UN,"onTransitionCancel"),Zr(Gx,"onTransitionEnd"),Mi("onMouseEnter",["mouseout","mouseover"]),Mi("onMouseLeave",["mouseout","mouseover"]),Mi("onPointerEnter",["pointerout","pointerover"]),Mi("onPointerLeave",["pointerout","pointerover"]),qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl));function u1(a,o){o=(o&4)!==0;for(var c=0;c<a.length;c++){var f=a[c],v=f.event;f=f.listeners;e:{var y=void 0;if(o)for(var E=f.length-1;0<=E;E--){var N=f[E],P=N.instance,I=N.currentTarget;if(N=N.listener,P!==y&&v.isPropagationStopped())break e;y=N,v.currentTarget=I;try{y(v)}catch(G){vc(G)}v.currentTarget=null,y=P}else for(E=0;E<f.length;E++){if(N=f[E],P=N.instance,I=N.currentTarget,N=N.listener,P!==y&&v.isPropagationStopped())break e;y=N,v.currentTarget=I;try{y(v)}catch(G){vc(G)}v.currentTarget=null,y=P}}}}function Me(a,o){var c=o[of];c===void 0&&(c=o[of]=new Set);var f=a+"__bubble";c.has(f)||(d1(o,a,2,!1),c.add(f))}function Vp(a,o,c){var f=0;o&&(f|=4),d1(c,a,f,o)}var Mc="_reactListening"+Math.random().toString(36).slice(2);function Xp(a){if(!a[Mc]){a[Mc]=!0,ax.forEach(function(c){c!=="selectionchange"&&(A4.has(c)||Vp(c,!1,a),Vp(c,!0,a))});var o=a.nodeType===9?a:a.ownerDocument;o===null||o[Mc]||(o[Mc]=!0,Vp("selectionchange",!1,o))}}function d1(a,o,c,f){switch(z1(o)){case 2:var v=Z4;break;case 8:v=Q4;break;default:v=ch}c=v.bind(null,o,c,a),v=void 0,!vf||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(v=!0),f?v!==void 0?a.addEventListener(o,c,{capture:!0,passive:v}):a.addEventListener(o,c,!0):v!==void 0?a.addEventListener(o,c,{passive:v}):a.addEventListener(o,c,!1)}function Fp(a,o,c,f,v){var y=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var E=f.tag;if(E===3||E===4){var N=f.stateNode.containerInfo;if(N===v)break;if(E===4)for(E=f.return;E!==null;){var P=E.tag;if((P===3||P===4)&&E.stateNode.containerInfo===v)return;E=E.return}for(;N!==null;){if(E=Ni(N),E===null)return;if(P=E.tag,P===5||P===6||P===26||P===27){f=y=E;continue e}N=N.parentNode}}f=f.return}xx(function(){var I=y,G=mf(c),X=[];e:{var q=Kx.get(a);if(q!==void 0){var H=Gs,be=a;switch(a){case"keypress":if(Hs(c)===0)break e;case"keydown":case"keyup":H=xN;break;case"focusin":be="focus",H=wf;break;case"focusout":be="blur",H=wf;break;case"beforeblur":case"afterblur":H=wf;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=wx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=oN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=wN;break;case Ux:case Hx:case Yx:H=cN;break;case Gx:H=SN;break;case"scroll":case"scrollend":H=aN;break;case"wheel":H=ON;break;case"copy":case"cut":case"paste":H=dN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Sx;break;case"toggle":case"beforetoggle":H=kN}var me=(o&4)!==0,Ke=!me&&(a==="scroll"||a==="scrollend"),L=me?q!==null?q+"Capture":null:q;me=[];for(var z=I,B;z!==null;){var W=z;if(B=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||B===null||L===null||(W=Ko(z,L),W!=null&&me.push(Nl(z,W,B))),Ke)break;z=z.return}0<me.length&&(q=new H(q,be,null,c,G),X.push({event:q,listeners:me}))}}if((o&7)===0){e:{if(q=a==="mouseover"||a==="pointerover",H=a==="mouseout"||a==="pointerout",q&&c!==hf&&(be=c.relatedTarget||c.fromElement)&&(Ni(be)||be[ki]))break e;if((H||q)&&(q=G.window===G?G:(q=G.ownerDocument)?q.defaultView||q.parentWindow:window,H?(be=c.relatedTarget||c.toElement,H=I,be=be?Ni(be):null,be!==null&&(Ke=s(be),me=be.tag,be!==Ke||me!==5&&me!==27&&me!==6)&&(be=null)):(H=null,be=I),H!==be)){if(me=wx,W="onMouseLeave",L="onMouseEnter",z="mouse",(a==="pointerout"||a==="pointerover")&&(me=Sx,W="onPointerLeave",L="onPointerEnter",z="pointer"),Ke=H==null?q:Go(H),B=be==null?q:Go(be),q=new me(W,z+"leave",H,c,G),q.target=Ke,q.relatedTarget=B,W=null,Ni(G)===I&&(me=new me(L,z+"enter",be,c,G),me.target=B,me.relatedTarget=Ke,W=me),Ke=W,H&&be)t:{for(me=H,L=be,z=0,B=me;B;B=so(B))z++;for(B=0,W=L;W;W=so(W))B++;for(;0<z-B;)me=so(me),z--;for(;0<B-z;)L=so(L),B--;for(;z--;){if(me===L||L!==null&&me===L.alternate)break t;me=so(me),L=so(L)}me=null}else me=null;H!==null&&f1(X,q,H,me,!1),be!==null&&Ke!==null&&f1(X,Ke,be,me,!0)}}e:{if(q=I?Go(I):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var ce=Mx;else if(Cx(q))if(_x)ce=LN;else{ce=zN;var ke=DN}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?I&&pf(I.elementType)&&(ce=Mx):ce=RN;if(ce&&(ce=ce(a,I))){Tx(X,ce,c,G);break e}ke&&ke(a,q,I),a==="focusout"&&I&&q.type==="number"&&I.memoizedProps.value!=null&&ff(q,"number",q.value)}switch(ke=I?Go(I):window,a){case"focusin":(Cx(ke)||ke.contentEditable==="true")&&(Bi=ke,kf=I,el=null);break;case"focusout":el=kf=Bi=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,qx(X,c,G);break;case"selectionchange":if(IN)break;case"keydown":case"keyup":qx(X,c,G)}var pe;if(Sf)e:{switch(a){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Li?kx(a,c)&&(xe="onCompositionEnd"):a==="keydown"&&c.keyCode===229&&(xe="onCompositionStart");xe&&(Ax&&c.locale!=="ko"&&(Li||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Li&&(pe=yx()):(la=G,xf="value"in la?la.value:la.textContent,Li=!0)),ke=_c(I,xe),0<ke.length&&(xe=new jx(xe,a,null,c,G),X.push({event:xe,listeners:ke}),pe?xe.data=pe:(pe=Nx(c),pe!==null&&(xe.data=pe)))),(pe=CN?TN(a,c):MN(a,c))&&(xe=_c(I,"onBeforeInput"),0<xe.length&&(ke=new jx("onBeforeInput","beforeinput",null,c,G),X.push({event:ke,listeners:xe}),ke.data=pe)),w4(X,a,I,c,G)}u1(X,o)})}function Nl(a,o,c){return{instance:a,listener:o,currentTarget:c}}function _c(a,o){for(var c=o+"Capture",f=[];a!==null;){var v=a,y=v.stateNode;if(v=v.tag,v!==5&&v!==26&&v!==27||y===null||(v=Ko(a,c),v!=null&&f.unshift(Nl(a,v,y)),v=Ko(a,o),v!=null&&f.push(Nl(a,v,y))),a.tag===3)return f;a=a.return}return[]}function so(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function f1(a,o,c,f,v){for(var y=o._reactName,E=[];c!==null&&c!==f;){var N=c,P=N.alternate,I=N.stateNode;if(N=N.tag,P!==null&&P===f)break;N!==5&&N!==26&&N!==27||I===null||(P=I,v?(I=Ko(c,y),I!=null&&E.unshift(Nl(c,I,P))):v||(I=Ko(c,y),I!=null&&E.push(Nl(c,I,P)))),c=c.return}E.length!==0&&a.push({event:o,listeners:E})}var O4=/\r\n?/g,E4=/\u0000|\uFFFD/g;function p1(a){return(typeof a=="string"?a:""+a).replace(O4,`
`).replace(E4,"")}function h1(a,o){return o=p1(o),p1(a)===o}function Pc(){}function Ge(a,o,c,f,v,y){switch(c){case"children":typeof f=="string"?o==="body"||o==="textarea"&&f===""||Di(a,f):(typeof f=="number"||typeof f=="bigint")&&o!=="body"&&Di(a,""+f);break;case"className":Bs(a,"class",f);break;case"tabIndex":Bs(a,"tabindex",f);break;case"dir":case"role":case"viewBox":case"width":case"height":Bs(a,c,f);break;case"style":gx(a,f,y);break;case"data":if(o!=="object"){Bs(a,"data",f);break}case"src":case"href":if(f===""&&(o!=="a"||c!=="href")){a.removeAttribute(c);break}if(f==null||typeof f=="function"||typeof f=="symbol"||typeof f=="boolean"){a.removeAttribute(c);break}f=$s(""+f),a.setAttribute(c,f);break;case"action":case"formAction":if(typeof f=="function"){a.setAttribute(c,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof y=="function"&&(c==="formAction"?(o!=="input"&&Ge(a,o,"name",v.name,v,null),Ge(a,o,"formEncType",v.formEncType,v,null),Ge(a,o,"formMethod",v.formMethod,v,null),Ge(a,o,"formTarget",v.formTarget,v,null)):(Ge(a,o,"encType",v.encType,v,null),Ge(a,o,"method",v.method,v,null),Ge(a,o,"target",v.target,v,null)));if(f==null||typeof f=="symbol"||typeof f=="boolean"){a.removeAttribute(c);break}f=$s(""+f),a.setAttribute(c,f);break;case"onClick":f!=null&&(a.onclick=Pc);break;case"onScroll":f!=null&&Me("scroll",a);break;case"onScrollEnd":f!=null&&Me("scrollend",a);break;case"dangerouslySetInnerHTML":if(f!=null){if(typeof f!="object"||!("__html"in f))throw Error(n(61));if(c=f.__html,c!=null){if(v.children!=null)throw Error(n(60));a.innerHTML=c}}break;case"multiple":a.multiple=f&&typeof f!="function"&&typeof f!="symbol";break;case"muted":a.muted=f&&typeof f!="function"&&typeof f!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(f==null||typeof f=="function"||typeof f=="boolean"||typeof f=="symbol"){a.removeAttribute("xlink:href");break}c=$s(""+f),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",c);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":f!=null&&typeof f!="function"&&typeof f!="symbol"?a.setAttribute(c,""+f):a.removeAttribute(c);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":f&&typeof f!="function"&&typeof f!="symbol"?a.setAttribute(c,""):a.removeAttribute(c);break;case"capture":case"download":f===!0?a.setAttribute(c,""):f!==!1&&f!=null&&typeof f!="function"&&typeof f!="symbol"?a.setAttribute(c,f):a.removeAttribute(c);break;case"cols":case"rows":case"size":case"span":f!=null&&typeof f!="function"&&typeof f!="symbol"&&!isNaN(f)&&1<=f?a.setAttribute(c,f):a.removeAttribute(c);break;case"rowSpan":case"start":f==null||typeof f=="function"||typeof f=="symbol"||isNaN(f)?a.removeAttribute(c):a.setAttribute(c,f);break;case"popover":Me("beforetoggle",a),Me("toggle",a),Ls(a,"popover",f);break;case"xlinkActuate":bn(a,"http://www.w3.org/1999/xlink","xlink:actuate",f);break;case"xlinkArcrole":bn(a,"http://www.w3.org/1999/xlink","xlink:arcrole",f);break;case"xlinkRole":bn(a,"http://www.w3.org/1999/xlink","xlink:role",f);break;case"xlinkShow":bn(a,"http://www.w3.org/1999/xlink","xlink:show",f);break;case"xlinkTitle":bn(a,"http://www.w3.org/1999/xlink","xlink:title",f);break;case"xlinkType":bn(a,"http://www.w3.org/1999/xlink","xlink:type",f);break;case"xmlBase":bn(a,"http://www.w3.org/XML/1998/namespace","xml:base",f);break;case"xmlLang":bn(a,"http://www.w3.org/XML/1998/namespace","xml:lang",f);break;case"xmlSpace":bn(a,"http://www.w3.org/XML/1998/namespace","xml:space",f);break;case"is":Ls(a,"is",f);break;case"innerText":case"textContent":break;default:(!(2<c.length)||c[0]!=="o"&&c[0]!=="O"||c[1]!=="n"&&c[1]!=="N")&&(c=rN.get(c)||c,Ls(a,c,f))}}function Zp(a,o,c,f,v,y){switch(c){case"style":gx(a,f,y);break;case"dangerouslySetInnerHTML":if(f!=null){if(typeof f!="object"||!("__html"in f))throw Error(n(61));if(c=f.__html,c!=null){if(v.children!=null)throw Error(n(60));a.innerHTML=c}}break;case"children":typeof f=="string"?Di(a,f):(typeof f=="number"||typeof f=="bigint")&&Di(a,""+f);break;case"onScroll":f!=null&&Me("scroll",a);break;case"onScrollEnd":f!=null&&Me("scrollend",a);break;case"onClick":f!=null&&(a.onclick=Pc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ix.hasOwnProperty(c))e:{if(c[0]==="o"&&c[1]==="n"&&(v=c.endsWith("Capture"),o=c.slice(2,v?c.length-7:void 0),y=a[ir]||null,y=y!=null?y[c]:null,typeof y=="function"&&a.removeEventListener(o,y,v),typeof f=="function")){typeof y!="function"&&y!==null&&(c in a?a[c]=null:a.hasAttribute(c)&&a.removeAttribute(c)),a.addEventListener(o,f,v);break e}c in a?a[c]=f:f===!0?a.setAttribute(c,""):Ls(a,c,f)}}}function Ut(a,o,c){switch(o){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",a),Me("load",a);var f=!1,v=!1,y;for(y in c)if(c.hasOwnProperty(y)){var E=c[y];if(E!=null)switch(y){case"src":f=!0;break;case"srcSet":v=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,o));default:Ge(a,o,y,E,c,null)}}v&&Ge(a,o,"srcSet",c.srcSet,c,null),f&&Ge(a,o,"src",c.src,c,null);return;case"input":Me("invalid",a);var N=y=E=v=null,P=null,I=null;for(f in c)if(c.hasOwnProperty(f)){var G=c[f];if(G!=null)switch(f){case"name":v=G;break;case"type":E=G;break;case"checked":P=G;break;case"defaultChecked":I=G;break;case"value":y=G;break;case"defaultValue":N=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(n(137,o));break;default:Ge(a,o,f,G,c,null)}}fx(a,y,N,P,I,E,v,!1),Is(a);return;case"select":Me("invalid",a),f=E=y=null;for(v in c)if(c.hasOwnProperty(v)&&(N=c[v],N!=null))switch(v){case"value":y=N;break;case"defaultValue":E=N;break;case"multiple":f=N;default:Ge(a,o,v,N,c,null)}o=y,c=E,a.multiple=!!f,o!=null?Pi(a,!!f,o,!1):c!=null&&Pi(a,!!f,c,!0);return;case"textarea":Me("invalid",a),y=v=f=null;for(E in c)if(c.hasOwnProperty(E)&&(N=c[E],N!=null))switch(E){case"value":f=N;break;case"defaultValue":v=N;break;case"children":y=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(n(91));break;default:Ge(a,o,E,N,c,null)}hx(a,f,v,y),Is(a);return;case"option":for(P in c)if(c.hasOwnProperty(P)&&(f=c[P],f!=null))switch(P){case"selected":a.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Ge(a,o,P,f,c,null)}return;case"dialog":Me("beforetoggle",a),Me("toggle",a),Me("cancel",a),Me("close",a);break;case"iframe":case"object":Me("load",a);break;case"video":case"audio":for(f=0;f<kl.length;f++)Me(kl[f],a);break;case"image":Me("error",a),Me("load",a);break;case"details":Me("toggle",a);break;case"embed":case"source":case"link":Me("error",a),Me("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in c)if(c.hasOwnProperty(I)&&(f=c[I],f!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,o));default:Ge(a,o,I,f,c,null)}return;default:if(pf(o)){for(G in c)c.hasOwnProperty(G)&&(f=c[G],f!==void 0&&Zp(a,o,G,f,c,void 0));return}}for(N in c)c.hasOwnProperty(N)&&(f=c[N],f!=null&&Ge(a,o,N,f,c,null))}function k4(a,o,c,f){switch(o){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var v=null,y=null,E=null,N=null,P=null,I=null,G=null;for(H in c){var X=c[H];if(c.hasOwnProperty(H)&&X!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":P=X;default:f.hasOwnProperty(H)||Ge(a,o,H,null,f,X)}}for(var q in f){var H=f[q];if(X=c[q],f.hasOwnProperty(q)&&(H!=null||X!=null))switch(q){case"type":y=H;break;case"name":v=H;break;case"checked":I=H;break;case"defaultChecked":G=H;break;case"value":E=H;break;case"defaultValue":N=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(n(137,o));break;default:H!==X&&Ge(a,o,q,H,f,X)}}df(a,E,N,P,I,G,y,v);return;case"select":H=E=N=q=null;for(y in c)if(P=c[y],c.hasOwnProperty(y)&&P!=null)switch(y){case"value":break;case"multiple":H=P;default:f.hasOwnProperty(y)||Ge(a,o,y,null,f,P)}for(v in f)if(y=f[v],P=c[v],f.hasOwnProperty(v)&&(y!=null||P!=null))switch(v){case"value":q=y;break;case"defaultValue":N=y;break;case"multiple":E=y;default:y!==P&&Ge(a,o,v,y,f,P)}o=N,c=E,f=H,q!=null?Pi(a,!!c,q,!1):!!f!=!!c&&(o!=null?Pi(a,!!c,o,!0):Pi(a,!!c,c?[]:"",!1));return;case"textarea":H=q=null;for(N in c)if(v=c[N],c.hasOwnProperty(N)&&v!=null&&!f.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Ge(a,o,N,null,f,v)}for(E in f)if(v=f[E],y=c[E],f.hasOwnProperty(E)&&(v!=null||y!=null))switch(E){case"value":q=v;break;case"defaultValue":H=v;break;case"children":break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(n(91));break;default:v!==y&&Ge(a,o,E,v,f,y)}px(a,q,H);return;case"option":for(var be in c)if(q=c[be],c.hasOwnProperty(be)&&q!=null&&!f.hasOwnProperty(be))switch(be){case"selected":a.selected=!1;break;default:Ge(a,o,be,null,f,q)}for(P in f)if(q=f[P],H=c[P],f.hasOwnProperty(P)&&q!==H&&(q!=null||H!=null))switch(P){case"selected":a.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Ge(a,o,P,q,f,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in c)q=c[me],c.hasOwnProperty(me)&&q!=null&&!f.hasOwnProperty(me)&&Ge(a,o,me,null,f,q);for(I in f)if(q=f[I],H=c[I],f.hasOwnProperty(I)&&q!==H&&(q!=null||H!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(n(137,o));break;default:Ge(a,o,I,q,f,H)}return;default:if(pf(o)){for(var Ke in c)q=c[Ke],c.hasOwnProperty(Ke)&&q!==void 0&&!f.hasOwnProperty(Ke)&&Zp(a,o,Ke,void 0,f,q);for(G in f)q=f[G],H=c[G],!f.hasOwnProperty(G)||q===H||q===void 0&&H===void 0||Zp(a,o,G,q,f,H);return}}for(var L in c)q=c[L],c.hasOwnProperty(L)&&q!=null&&!f.hasOwnProperty(L)&&Ge(a,o,L,null,f,q);for(X in f)q=f[X],H=c[X],!f.hasOwnProperty(X)||q===H||q==null&&H==null||Ge(a,o,X,q,f,H)}var Qp=null,Jp=null;function Dc(a){return a.nodeType===9?a:a.ownerDocument}function m1(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g1(a,o){if(a===0)switch(o){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&o==="foreignObject"?0:a}function eh(a,o){return a==="textarea"||a==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.children=="bigint"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var th=null;function N4(){var a=window.event;return a&&a.type==="popstate"?a===th?!1:(th=a,!0):(th=null,!1)}var v1=typeof setTimeout=="function"?setTimeout:void 0,C4=typeof clearTimeout=="function"?clearTimeout:void 0,x1=typeof Promise=="function"?Promise:void 0,T4=typeof queueMicrotask=="function"?queueMicrotask:typeof x1<"u"?function(a){return x1.resolve(null).then(a).catch(M4)}:v1;function M4(a){setTimeout(function(){throw a})}function Sa(a){return a==="head"}function y1(a,o){var c=o,f=0,v=0;do{var y=c.nextSibling;if(a.removeChild(c),y&&y.nodeType===8)if(c=y.data,c==="/$"){if(0<f&&8>f){c=f;var E=a.ownerDocument;if(c&1&&Cl(E.documentElement),c&2&&Cl(E.body),c&4)for(c=E.head,Cl(c),E=c.firstChild;E;){var N=E.nextSibling,P=E.nodeName;E[Yo]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&E.rel.toLowerCase()==="stylesheet"||c.removeChild(E),E=N}}if(v===0){a.removeChild(y),Ll(o);return}v--}else c==="$"||c==="$?"||c==="$!"?v++:f=c.charCodeAt(0)-48;else f=0;c=y}while(c);Ll(o)}function rh(a){var o=a.firstChild;for(o&&o.nodeType===10&&(o=o.nextSibling);o;){var c=o;switch(o=o.nextSibling,c.nodeName){case"HTML":case"HEAD":case"BODY":rh(c),lf(c);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(c.rel.toLowerCase()==="stylesheet")continue}a.removeChild(c)}}function _4(a,o,c,f){for(;a.nodeType===1;){var v=c;if(a.nodeName.toLowerCase()!==o.toLowerCase()){if(!f&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(f){if(!a[Yo])switch(o){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(y=a.getAttribute("rel"),y==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(y!==v.rel||a.getAttribute("href")!==(v.href==null||v.href===""?null:v.href)||a.getAttribute("crossorigin")!==(v.crossOrigin==null?null:v.crossOrigin)||a.getAttribute("title")!==(v.title==null?null:v.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(y=a.getAttribute("src"),(y!==(v.src==null?null:v.src)||a.getAttribute("type")!==(v.type==null?null:v.type)||a.getAttribute("crossorigin")!==(v.crossOrigin==null?null:v.crossOrigin))&&y&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(o==="input"&&a.type==="hidden"){var y=v.name==null?null:""+v.name;if(v.type==="hidden"&&a.getAttribute("name")===y)return a}else return a;if(a=Jr(a.nextSibling),a===null)break}return null}function P4(a,o,c){if(o==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!c||(a=Jr(a.nextSibling),a===null))return null;return a}function nh(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState==="complete"}function D4(a,o){var c=a.ownerDocument;if(a.data!=="$?"||c.readyState==="complete")o();else{var f=function(){o(),c.removeEventListener("DOMContentLoaded",f)};c.addEventListener("DOMContentLoaded",f),a._reactRetry=f}}function Jr(a){for(;a!=null;a=a.nextSibling){var o=a.nodeType;if(o===1||o===3)break;if(o===8){if(o=a.data,o==="$"||o==="$!"||o==="$?"||o==="F!"||o==="F")break;if(o==="/$")return null}}return a}var ah=null;function b1(a){a=a.previousSibling;for(var o=0;a;){if(a.nodeType===8){var c=a.data;if(c==="$"||c==="$!"||c==="$?"){if(o===0)return a;o--}else c==="/$"&&o++}a=a.previousSibling}return null}function w1(a,o,c){switch(o=Dc(c),a){case"html":if(a=o.documentElement,!a)throw Error(n(452));return a;case"head":if(a=o.head,!a)throw Error(n(453));return a;case"body":if(a=o.body,!a)throw Error(n(454));return a;default:throw Error(n(451))}}function Cl(a){for(var o=a.attributes;o.length;)a.removeAttributeNode(o[0]);lf(a)}var Ir=new Map,j1=new Set;function zc(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var Dn=K.d;K.d={f:z4,r:R4,D:L4,C:B4,L:I4,m:q4,X:U4,S:$4,M:H4};function z4(){var a=Dn.f(),o=Ec();return a||o}function R4(a){var o=Ci(a);o!==null&&o.tag===5&&o.type==="form"?Uy(o):Dn.r(a)}var co=typeof document>"u"?null:document;function S1(a,o,c){var f=co;if(f&&typeof o=="string"&&o){var v=_r(o);v='link[rel="'+a+'"][href="'+v+'"]',typeof c=="string"&&(v+='[crossorigin="'+c+'"]'),j1.has(v)||(j1.add(v),a={rel:a,crossOrigin:c,href:o},f.querySelector(v)===null&&(o=f.createElement("link"),Ut(o,"link",a),Mt(o),f.head.appendChild(o)))}}function L4(a){Dn.D(a),S1("dns-prefetch",a,null)}function B4(a,o){Dn.C(a,o),S1("preconnect",a,o)}function I4(a,o,c){Dn.L(a,o,c);var f=co;if(f&&a&&o){var v='link[rel="preload"][as="'+_r(o)+'"]';o==="image"&&c&&c.imageSrcSet?(v+='[imagesrcset="'+_r(c.imageSrcSet)+'"]',typeof c.imageSizes=="string"&&(v+='[imagesizes="'+_r(c.imageSizes)+'"]')):v+='[href="'+_r(a)+'"]';var y=v;switch(o){case"style":y=uo(a);break;case"script":y=fo(a)}Ir.has(y)||(a=g({rel:"preload",href:o==="image"&&c&&c.imageSrcSet?void 0:a,as:o},c),Ir.set(y,a),f.querySelector(v)!==null||o==="style"&&f.querySelector(Tl(y))||o==="script"&&f.querySelector(Ml(y))||(o=f.createElement("link"),Ut(o,"link",a),Mt(o),f.head.appendChild(o)))}}function q4(a,o){Dn.m(a,o);var c=co;if(c&&a){var f=o&&typeof o.as=="string"?o.as:"script",v='link[rel="modulepreload"][as="'+_r(f)+'"][href="'+_r(a)+'"]',y=v;switch(f){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":y=fo(a)}if(!Ir.has(y)&&(a=g({rel:"modulepreload",href:a},o),Ir.set(y,a),c.querySelector(v)===null)){switch(f){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(c.querySelector(Ml(y)))return}f=c.createElement("link"),Ut(f,"link",a),Mt(f),c.head.appendChild(f)}}}function $4(a,o,c){Dn.S(a,o,c);var f=co;if(f&&a){var v=Ti(f).hoistableStyles,y=uo(a);o=o||"default";var E=v.get(y);if(!E){var N={loading:0,preload:null};if(E=f.querySelector(Tl(y)))N.loading=5;else{a=g({rel:"stylesheet",href:a,"data-precedence":o},c),(c=Ir.get(y))&&ih(a,c);var P=E=f.createElement("link");Mt(P),Ut(P,"link",a),P._p=new Promise(function(I,G){P.onload=I,P.onerror=G}),P.addEventListener("load",function(){N.loading|=1}),P.addEventListener("error",function(){N.loading|=2}),N.loading|=4,Rc(E,o,f)}E={type:"stylesheet",instance:E,count:1,state:N},v.set(y,E)}}}function U4(a,o){Dn.X(a,o);var c=co;if(c&&a){var f=Ti(c).hoistableScripts,v=fo(a),y=f.get(v);y||(y=c.querySelector(Ml(v)),y||(a=g({src:a,async:!0},o),(o=Ir.get(v))&&oh(a,o),y=c.createElement("script"),Mt(y),Ut(y,"link",a),c.head.appendChild(y)),y={type:"script",instance:y,count:1,state:null},f.set(v,y))}}function H4(a,o){Dn.M(a,o);var c=co;if(c&&a){var f=Ti(c).hoistableScripts,v=fo(a),y=f.get(v);y||(y=c.querySelector(Ml(v)),y||(a=g({src:a,async:!0,type:"module"},o),(o=Ir.get(v))&&oh(a,o),y=c.createElement("script"),Mt(y),Ut(y,"link",a),c.head.appendChild(y)),y={type:"script",instance:y,count:1,state:null},f.set(v,y))}}function A1(a,o,c,f){var v=(v=ve.current)?zc(v):null;if(!v)throw Error(n(446));switch(a){case"meta":case"title":return null;case"style":return typeof c.precedence=="string"&&typeof c.href=="string"?(o=uo(c.href),c=Ti(v).hoistableStyles,f=c.get(o),f||(f={type:"style",instance:null,count:0,state:null},c.set(o,f)),f):{type:"void",instance:null,count:0,state:null};case"link":if(c.rel==="stylesheet"&&typeof c.href=="string"&&typeof c.precedence=="string"){a=uo(c.href);var y=Ti(v).hoistableStyles,E=y.get(a);if(E||(v=v.ownerDocument||v,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},y.set(a,E),(y=v.querySelector(Tl(a)))&&!y._p&&(E.instance=y,E.state.loading=5),Ir.has(a)||(c={rel:"preload",as:"style",href:c.href,crossOrigin:c.crossOrigin,integrity:c.integrity,media:c.media,hrefLang:c.hrefLang,referrerPolicy:c.referrerPolicy},Ir.set(a,c),y||Y4(v,a,c,E.state))),o&&f===null)throw Error(n(528,""));return E}if(o&&f!==null)throw Error(n(529,""));return null;case"script":return o=c.async,c=c.src,typeof c=="string"&&o&&typeof o!="function"&&typeof o!="symbol"?(o=fo(c),c=Ti(v).hoistableScripts,f=c.get(o),f||(f={type:"script",instance:null,count:0,state:null},c.set(o,f)),f):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,a))}}function uo(a){return'href="'+_r(a)+'"'}function Tl(a){return'link[rel="stylesheet"]['+a+"]"}function O1(a){return g({},a,{"data-precedence":a.precedence,precedence:null})}function Y4(a,o,c,f){a.querySelector('link[rel="preload"][as="style"]['+o+"]")?f.loading=1:(o=a.createElement("link"),f.preload=o,o.addEventListener("load",function(){return f.loading|=1}),o.addEventListener("error",function(){return f.loading|=2}),Ut(o,"link",c),Mt(o),a.head.appendChild(o))}function fo(a){return'[src="'+_r(a)+'"]'}function Ml(a){return"script[async]"+a}function E1(a,o,c){if(o.count++,o.instance===null)switch(o.type){case"style":var f=a.querySelector('style[data-href~="'+_r(c.href)+'"]');if(f)return o.instance=f,Mt(f),f;var v=g({},c,{"data-href":c.href,"data-precedence":c.precedence,href:null,precedence:null});return f=(a.ownerDocument||a).createElement("style"),Mt(f),Ut(f,"style",v),Rc(f,c.precedence,a),o.instance=f;case"stylesheet":v=uo(c.href);var y=a.querySelector(Tl(v));if(y)return o.state.loading|=4,o.instance=y,Mt(y),y;f=O1(c),(v=Ir.get(v))&&ih(f,v),y=(a.ownerDocument||a).createElement("link"),Mt(y);var E=y;return E._p=new Promise(function(N,P){E.onload=N,E.onerror=P}),Ut(y,"link",f),o.state.loading|=4,Rc(y,c.precedence,a),o.instance=y;case"script":return y=fo(c.src),(v=a.querySelector(Ml(y)))?(o.instance=v,Mt(v),v):(f=c,(v=Ir.get(y))&&(f=g({},c),oh(f,v)),a=a.ownerDocument||a,v=a.createElement("script"),Mt(v),Ut(v,"link",f),a.head.appendChild(v),o.instance=v);case"void":return null;default:throw Error(n(443,o.type))}else o.type==="stylesheet"&&(o.state.loading&4)===0&&(f=o.instance,o.state.loading|=4,Rc(f,c.precedence,a));return o.instance}function Rc(a,o,c){for(var f=c.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),v=f.length?f[f.length-1]:null,y=v,E=0;E<f.length;E++){var N=f[E];if(N.dataset.precedence===o)y=N;else if(y!==v)break}y?y.parentNode.insertBefore(a,y.nextSibling):(o=c.nodeType===9?c.head:c,o.insertBefore(a,o.firstChild))}function ih(a,o){a.crossOrigin==null&&(a.crossOrigin=o.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=o.referrerPolicy),a.title==null&&(a.title=o.title)}function oh(a,o){a.crossOrigin==null&&(a.crossOrigin=o.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=o.referrerPolicy),a.integrity==null&&(a.integrity=o.integrity)}var Lc=null;function k1(a,o,c){if(Lc===null){var f=new Map,v=Lc=new Map;v.set(c,f)}else v=Lc,f=v.get(c),f||(f=new Map,v.set(c,f));if(f.has(a))return f;for(f.set(a,null),c=c.getElementsByTagName(a),v=0;v<c.length;v++){var y=c[v];if(!(y[Yo]||y[Kt]||a==="link"&&y.getAttribute("rel")==="stylesheet")&&y.namespaceURI!=="http://www.w3.org/2000/svg"){var E=y.getAttribute(o)||"";E=a+E;var N=f.get(E);N?N.push(y):f.set(E,[y])}}return f}function N1(a,o,c){a=a.ownerDocument||a,a.head.insertBefore(c,o==="title"?a.querySelector("head > title"):null)}function G4(a,o,c){if(c===1||o.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof o.precedence!="string"||typeof o.href!="string"||o.href==="")break;return!0;case"link":if(typeof o.rel!="string"||typeof o.href!="string"||o.href===""||o.onLoad||o.onError)break;switch(o.rel){case"stylesheet":return a=o.disabled,typeof o.precedence=="string"&&a==null;default:return!0}case"script":if(o.async&&typeof o.async!="function"&&typeof o.async!="symbol"&&!o.onLoad&&!o.onError&&o.src&&typeof o.src=="string")return!0}return!1}function C1(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}var _l=null;function K4(){}function W4(a,o,c){if(_l===null)throw Error(n(475));var f=_l;if(o.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var v=uo(c.href),y=a.querySelector(Tl(v));if(y){a=y._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(f.count++,f=Bc.bind(f),a.then(f,f)),o.state.loading|=4,o.instance=y,Mt(y);return}y=a.ownerDocument||a,c=O1(c),(v=Ir.get(v))&&ih(c,v),y=y.createElement("link"),Mt(y);var E=y;E._p=new Promise(function(N,P){E.onload=N,E.onerror=P}),Ut(y,"link",c),o.instance=y}f.stylesheets===null&&(f.stylesheets=new Map),f.stylesheets.set(o,a),(a=o.state.preload)&&(o.state.loading&3)===0&&(f.count++,o=Bc.bind(f),a.addEventListener("load",o),a.addEventListener("error",o))}}function V4(){if(_l===null)throw Error(n(475));var a=_l;return a.stylesheets&&a.count===0&&lh(a,a.stylesheets),0<a.count?function(o){var c=setTimeout(function(){if(a.stylesheets&&lh(a,a.stylesheets),a.unsuspend){var f=a.unsuspend;a.unsuspend=null,f()}},6e4);return a.unsuspend=o,function(){a.unsuspend=null,clearTimeout(c)}}:null}function Bc(){if(this.count--,this.count===0){if(this.stylesheets)lh(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var Ic=null;function lh(a,o){a.stylesheets=null,a.unsuspend!==null&&(a.count++,Ic=new Map,o.forEach(X4,a),Ic=null,Bc.call(a))}function X4(a,o){if(!(o.state.loading&4)){var c=Ic.get(a);if(c)var f=c.get(null);else{c=new Map,Ic.set(a,c);for(var v=a.querySelectorAll("link[data-precedence],style[data-precedence]"),y=0;y<v.length;y++){var E=v[y];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(c.set(E.dataset.precedence,E),f=E)}f&&c.set(null,f)}v=o.instance,E=v.getAttribute("data-precedence"),y=c.get(E)||f,y===f&&c.set(null,v),c.set(E,v),this.count++,f=Bc.bind(this),v.addEventListener("load",f),v.addEventListener("error",f),y?y.parentNode.insertBefore(v,y.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(v,a.firstChild)),o.state.loading|=4}}var Pl={$$typeof:C,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function F4(a,o,c,f,v,y,E,N){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rf(0),this.hiddenUpdates=rf(null),this.identifierPrefix=f,this.onUncaughtError=v,this.onCaughtError=y,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function T1(a,o,c,f,v,y,E,N,P,I,G,X){return a=new F4(a,o,c,E,N,P,I,X),o=1,y===!0&&(o|=24),y=yr(3,null,null,o),a.current=y,y.stateNode=a,o=Uf(),o.refCount++,a.pooledCache=o,o.refCount++,y.memoizedState={element:f,isDehydrated:c,cache:o},Kf(y),a}function M1(a){return a?(a=Ui,a):Ui}function _1(a,o,c,f,v,y){v=M1(v),f.context===null?f.context=v:f.pendingContext=v,f=ua(o),f.payload={element:c},y=y===void 0?null:y,y!==null&&(f.callback=y),c=da(a,f,o),c!==null&&(Ar(c,a,o),cl(c,a,o))}function P1(a,o){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var c=a.retryLane;a.retryLane=c!==0&&c<o?c:o}}function sh(a,o){P1(a,o),(a=a.alternate)&&P1(a,o)}function D1(a){if(a.tag===13){var o=$i(a,67108864);o!==null&&Ar(o,a,67108864),sh(a,67108864)}}var qc=!0;function Z4(a,o,c,f){var v=$.T;$.T=null;var y=K.p;try{K.p=2,ch(a,o,c,f)}finally{K.p=y,$.T=v}}function Q4(a,o,c,f){var v=$.T;$.T=null;var y=K.p;try{K.p=8,ch(a,o,c,f)}finally{K.p=y,$.T=v}}function ch(a,o,c,f){if(qc){var v=uh(f);if(v===null)Fp(a,o,f,$c,c),R1(a,f);else if(eC(v,a,o,c,f))f.stopPropagation();else if(R1(a,f),o&4&&-1<J4.indexOf(a)){for(;v!==null;){var y=Ci(v);if(y!==null)switch(y.tag){case 3:if(y=y.stateNode,y.current.memoizedState.isDehydrated){var E=Ia(y.pendingLanes);if(E!==0){var N=y;for(N.pendingLanes|=2,N.entangledLanes|=2;E;){var P=1<<31-vr(E);N.entanglements[1]|=P,E&=~P}pn(y),(Be&6)===0&&(Ac=Tt()+500,El(0))}}break;case 13:N=$i(y,2),N!==null&&Ar(N,y,2),Ec(),sh(y,2)}if(y=uh(f),y===null&&Fp(a,o,f,$c,c),y===v)break;v=y}v!==null&&f.stopPropagation()}else Fp(a,o,f,null,c)}}function uh(a){return a=mf(a),dh(a)}var $c=null;function dh(a){if($c=null,a=Ni(a),a!==null){var o=s(a);if(o===null)a=null;else{var c=o.tag;if(c===13){if(a=d(o),a!==null)return a;a=null}else if(c===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;a=null}else o!==a&&(a=null)}}return $c=a,null}function z1(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_s()){case Xv:return 2;case Fv:return 8;case Ps:case I5:return 32;case Zv:return 268435456;default:return 32}default:return 32}}var fh=!1,Aa=null,Oa=null,Ea=null,Dl=new Map,zl=new Map,ka=[],J4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R1(a,o){switch(a){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":Dl.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":zl.delete(o.pointerId)}}function Rl(a,o,c,f,v,y){return a===null||a.nativeEvent!==y?(a={blockedOn:o,domEventName:c,eventSystemFlags:f,nativeEvent:y,targetContainers:[v]},o!==null&&(o=Ci(o),o!==null&&D1(o)),a):(a.eventSystemFlags|=f,o=a.targetContainers,v!==null&&o.indexOf(v)===-1&&o.push(v),a)}function eC(a,o,c,f,v){switch(o){case"focusin":return Aa=Rl(Aa,a,o,c,f,v),!0;case"dragenter":return Oa=Rl(Oa,a,o,c,f,v),!0;case"mouseover":return Ea=Rl(Ea,a,o,c,f,v),!0;case"pointerover":var y=v.pointerId;return Dl.set(y,Rl(Dl.get(y)||null,a,o,c,f,v)),!0;case"gotpointercapture":return y=v.pointerId,zl.set(y,Rl(zl.get(y)||null,a,o,c,f,v)),!0}return!1}function L1(a){var o=Ni(a.target);if(o!==null){var c=s(o);if(c!==null){if(o=c.tag,o===13){if(o=d(c),o!==null){a.blockedOn=o,W5(a.priority,function(){if(c.tag===13){var f=Sr();f=nf(f);var v=$i(c,f);v!==null&&Ar(v,c,f),sh(c,f)}});return}}else if(o===3&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}a.blockedOn=null}function Uc(a){if(a.blockedOn!==null)return!1;for(var o=a.targetContainers;0<o.length;){var c=uh(a.nativeEvent);if(c===null){c=a.nativeEvent;var f=new c.constructor(c.type,c);hf=f,c.target.dispatchEvent(f),hf=null}else return o=Ci(c),o!==null&&D1(o),a.blockedOn=c,!1;o.shift()}return!0}function B1(a,o,c){Uc(a)&&c.delete(o)}function tC(){fh=!1,Aa!==null&&Uc(Aa)&&(Aa=null),Oa!==null&&Uc(Oa)&&(Oa=null),Ea!==null&&Uc(Ea)&&(Ea=null),Dl.forEach(B1),zl.forEach(B1)}function Hc(a,o){a.blockedOn===o&&(a.blockedOn=null,fh||(fh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tC)))}var Yc=null;function I1(a){Yc!==a&&(Yc=a,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Yc===a&&(Yc=null);for(var o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],v=a[o+2];if(typeof f!="function"){if(dh(f||c)===null)continue;break}var y=Ci(c);y!==null&&(a.splice(o,3),o-=3,dp(y,{pending:!0,data:v,method:c.method,action:f},f,v))}}))}function Ll(a){function o(P){return Hc(P,a)}Aa!==null&&Hc(Aa,a),Oa!==null&&Hc(Oa,a),Ea!==null&&Hc(Ea,a),Dl.forEach(o),zl.forEach(o);for(var c=0;c<ka.length;c++){var f=ka[c];f.blockedOn===a&&(f.blockedOn=null)}for(;0<ka.length&&(c=ka[0],c.blockedOn===null);)L1(c),c.blockedOn===null&&ka.shift();if(c=(a.ownerDocument||a).$$reactFormReplay,c!=null)for(f=0;f<c.length;f+=3){var v=c[f],y=c[f+1],E=v[ir]||null;if(typeof y=="function")E||I1(c);else if(E){var N=null;if(y&&y.hasAttribute("formAction")){if(v=y,E=y[ir]||null)N=E.formAction;else if(dh(v)!==null)continue}else N=E.action;typeof N=="function"?c[f+1]=N:(c.splice(f,3),f-=3),I1(c)}}}function ph(a){this._internalRoot=a}Gc.prototype.render=ph.prototype.render=function(a){var o=this._internalRoot;if(o===null)throw Error(n(409));var c=o.current,f=Sr();_1(c,f,a,o,null,null)},Gc.prototype.unmount=ph.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var o=a.containerInfo;_1(a.current,2,null,a,null,null),Ec(),o[ki]=null}};function Gc(a){this._internalRoot=a}Gc.prototype.unstable_scheduleHydration=function(a){if(a){var o=rx();a={blockedOn:null,target:a,priority:o};for(var c=0;c<ka.length&&o!==0&&o<ka[c].priority;c++);ka.splice(c,0,a),c===0&&L1(a)}};var q1=t.version;if(q1!=="19.1.1")throw Error(n(527,q1,"19.1.1"));K.findDOMNode=function(a){var o=a._reactInternals;if(o===void 0)throw typeof a.render=="function"?Error(n(188)):(a=Object.keys(a).join(","),Error(n(268,a)));return a=h(o),a=a!==null?m(a):null,a=a===null?null:a.stateNode,a};var rC={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{$o=Kc.inject(rC),gr=Kc}catch{}}return Il.createRoot=function(a,o){if(!l(a))throw Error(n(299));var c=!1,f="",v=rb,y=nb,E=ab,N=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(v=o.onUncaughtError),o.onCaughtError!==void 0&&(y=o.onCaughtError),o.onRecoverableError!==void 0&&(E=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(N=o.unstable_transitionCallbacks)),o=T1(a,1,!1,null,null,c,f,v,y,E,N,null),a[ki]=o.current,Xp(a),new ph(o)},Il.hydrateRoot=function(a,o,c){if(!l(a))throw Error(n(299));var f=!1,v="",y=rb,E=nb,N=ab,P=null,I=null;return c!=null&&(c.unstable_strictMode===!0&&(f=!0),c.identifierPrefix!==void 0&&(v=c.identifierPrefix),c.onUncaughtError!==void 0&&(y=c.onUncaughtError),c.onCaughtError!==void 0&&(E=c.onCaughtError),c.onRecoverableError!==void 0&&(N=c.onRecoverableError),c.unstable_transitionCallbacks!==void 0&&(P=c.unstable_transitionCallbacks),c.formState!==void 0&&(I=c.formState)),o=T1(a,1,!0,o,c??null,f,v,y,E,N,P,I),o.context=M1(null),c=o.current,f=Sr(),f=nf(f),v=ua(f),v.callback=null,da(c,v,f),c=f,o.current.lanes=c,Ho(o,c),pn(o),a[ki]=o.current,Xp(a),new Gc(o)},Il.version="19.1.1",Il}var F1;function pC(){if(F1)return gh.exports;F1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),gh.exports=fC(),gh.exports}var hC=pC();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Z1="popstate";function mC(e={}){function t(n,l){let{pathname:s,search:d,hash:p}=n.location;return rg("",{pathname:s,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(n,l){return typeof l=="string"?l:Ql(l)}return vC(t,r,null,e)}function rt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function rn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gC(){return Math.random().toString(36).substring(2,10)}function Q1(e,t){return{usr:e.state,key:e.key,idx:t}}function rg(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Co(t):t,state:r,key:t&&t.key||n||gC()}}function Ql({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Co(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function vC(e,t,r,n={}){let{window:l=document.defaultView,v5Compat:s=!1}=n,d=l.history,p="POP",h=null,m=g();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function g(){return(d.state||{idx:null}).idx}function x(){p="POP";let O=g(),k=O==null?null:O-m;m=O,h&&h({action:p,location:A.location,delta:k})}function w(O,k){p="PUSH";let T=rg(A.location,O,k);m=g()+1;let C=Q1(T,m),_=A.createHref(T);try{d.pushState(C,"",_)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;l.location.assign(_)}s&&h&&h({action:p,location:A.location,delta:1})}function j(O,k){p="REPLACE";let T=rg(A.location,O,k);m=g();let C=Q1(T,m),_=A.createHref(T);d.replaceState(C,"",_),s&&h&&h({action:p,location:A.location,delta:0})}function S(O){return xC(O)}let A={get action(){return p},get location(){return e(l,d)},listen(O){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(Z1,x),h=O,()=>{l.removeEventListener(Z1,x),h=null}},createHref(O){return t(l,O)},createURL:S,encodeLocation(O){let k=S(O);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:w,replace:j,go(O){return d.go(O)}};return A}function xC(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),rt(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Ql(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function hA(e,t,r="/"){return yC(e,t,r,!1)}function yC(e,t,r,n){let l=typeof t=="string"?Co(t):t,s=Yn(l.pathname||"/",r);if(s==null)return null;let d=mA(e);bC(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let m=MC(s);p=CC(d[h],m,n)}return p}function mA(e,t=[],r=[],n="",l=!1){let s=(d,p,h=l,m)=>{let g={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(n)&&h)return;rt(g.relativePath.startsWith(n),`Absolute route path "${g.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(n.length)}let x=$n([n,g.relativePath]),w=r.concat(g);d.children&&d.children.length>0&&(rt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),mA(d.children,t,w,x,h)),!(d.path==null&&!d.index)&&t.push({path:x,score:kC(x,d.index),routesMeta:w})};return e.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))s(d,p);else for(let h of gA(d.path))s(d,p,!0,h)}),t}function gA(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,l=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return l?[s,""]:[s];let d=gA(n.join("/")),p=[];return p.push(...d.map(h=>h===""?s:[s,h].join("/"))),l&&p.push(...d),p.map(h=>e.startsWith("/")&&h===""?"/":h)}function bC(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:NC(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var wC=/^:[\w-]+$/,jC=3,SC=2,AC=1,OC=10,EC=-2,J1=e=>e==="*";function kC(e,t){let r=e.split("/"),n=r.length;return r.some(J1)&&(n+=EC),t&&(n+=SC),r.filter(l=>!J1(l)).reduce((l,s)=>l+(wC.test(s)?jC:s===""?AC:OC),n)}function NC(e,t){return e.length===t.length&&e.slice(0,-1).every((n,l)=>n===t[l])?e[e.length-1]-t[t.length-1]:0}function CC(e,t,r=!1){let{routesMeta:n}=e,l={},s="/",d=[];for(let p=0;p<n.length;++p){let h=n[p],m=p===n.length-1,g=s==="/"?t:t.slice(s.length)||"/",x=gu({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},g),w=h.route;if(!x&&m&&r&&!n[n.length-1].route.index&&(x=gu({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),d.push({params:l,pathname:$n([s,x.pathname]),pathnameBase:zC($n([s,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(s=$n([s,x.pathnameBase]))}return d}function gu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=TC(e.path,e.caseSensitive,e.end),l=t.match(r);if(!l)return null;let s=l[0],d=s.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:n.reduce((m,{paramName:g,isOptional:x},w)=>{if(g==="*"){let S=p[w]||"";d=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const j=p[w];return x&&!j?m[g]=void 0:m[g]=(j||"").replace(/%2F/g,"/"),m},{}),pathname:s,pathnameBase:d,pattern:e}}function TC(e,t=!1,r=!0){rn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h)=>(n.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),n]}function MC(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return rn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Yn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function _C(e,t="/"){let{pathname:r,search:n="",hash:l=""}=typeof e=="string"?Co(e):e;return{pathname:r?r.startsWith("/")?r:PC(r,t):t,search:RC(n),hash:LC(l)}}function PC(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function bh(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function DC(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function i0(e){let t=DC(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function o0(e,t,r,n=!1){let l;typeof e=="string"?l=Co(e):(l={...e},rt(!l.pathname||!l.pathname.includes("?"),bh("?","pathname","search",l)),rt(!l.pathname||!l.pathname.includes("#"),bh("#","pathname","hash",l)),rt(!l.search||!l.search.includes("#"),bh("#","search","hash",l)));let s=e===""||l.pathname==="",d=s?"/":l.pathname,p;if(d==null)p=r;else{let x=t.length-1;if(!n&&d.startsWith("..")){let w=d.split("/");for(;w[0]==="..";)w.shift(),x-=1;l.pathname=w.join("/")}p=x>=0?t[x]:"/"}let h=_C(l,p),m=d&&d!=="/"&&d.endsWith("/"),g=(s||d===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(m||g)&&(h.pathname+="/"),h}var $n=e=>e.join("/").replace(/\/\/+/g,"/"),zC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),RC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,LC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function BC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var vA=["POST","PUT","PATCH","DELETE"];new Set(vA);var IC=["GET",...vA];new Set(IC);var To=b.createContext(null);To.displayName="DataRouter";var dd=b.createContext(null);dd.displayName="DataRouterState";b.createContext(!1);var xA=b.createContext({isTransitioning:!1});xA.displayName="ViewTransition";var qC=b.createContext(new Map);qC.displayName="Fetchers";var $C=b.createContext(null);$C.displayName="Await";var ln=b.createContext(null);ln.displayName="Navigation";var fs=b.createContext(null);fs.displayName="Location";var Vr=b.createContext({outlet:null,matches:[],isDataRoute:!1});Vr.displayName="Route";var l0=b.createContext(null);l0.displayName="RouteError";function UC(e,{relative:t}={}){rt(Mo(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=b.useContext(ln),{hash:l,pathname:s,search:d}=ps(e,{relative:t}),p=s;return r!=="/"&&(p=s==="/"?r:$n([r,s])),n.createHref({pathname:p,search:d,hash:l})}function Mo(){return b.useContext(fs)!=null}function gt(){return rt(Mo(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(fs).location}var yA="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bA(e){b.useContext(ln).static||b.useLayoutEffect(e)}function it(){let{isDataRoute:e}=b.useContext(Vr);return e?a6():HC()}function HC(){rt(Mo(),"useNavigate() may be used only in the context of a <Router> component.");let e=b.useContext(To),{basename:t,navigator:r}=b.useContext(ln),{matches:n}=b.useContext(Vr),{pathname:l}=gt(),s=JSON.stringify(i0(n)),d=b.useRef(!1);return bA(()=>{d.current=!0}),b.useCallback((h,m={})=>{if(rn(d.current,yA),!d.current)return;if(typeof h=="number"){r.go(h);return}let g=o0(h,JSON.parse(s),l,m.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:$n([t,g.pathname])),(m.replace?r.replace:r.push)(g,m.state,m)},[t,r,s,l,e])}var YC=b.createContext(null);function GC(e){let t=b.useContext(Vr).outlet;return t&&b.createElement(YC.Provider,{value:e},t)}function KC(){let{matches:e}=b.useContext(Vr),t=e[e.length-1];return t?t.params:{}}function ps(e,{relative:t}={}){let{matches:r}=b.useContext(Vr),{pathname:n}=gt(),l=JSON.stringify(i0(r));return b.useMemo(()=>o0(e,JSON.parse(l),n,t==="path"),[e,l,n,t])}function WC(e,t){return wA(e,t)}function wA(e,t,r,n,l){rt(Mo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=b.useContext(ln),{matches:d}=b.useContext(Vr),p=d[d.length-1],h=p?p.params:{},m=p?p.pathname:"/",g=p?p.pathnameBase:"/",x=p&&p.route;{let T=x&&x.path||"";jA(m,!x||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let w=gt(),j;if(t){let T=typeof t=="string"?Co(t):t;rt(g==="/"||T.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${T.pathname}" was given in the \`location\` prop.`),j=T}else j=w;let S=j.pathname||"/",A=S;if(g!=="/"){let T=g.replace(/^\//,"").split("/");A="/"+S.replace(/^\//,"").split("/").slice(T.length).join("/")}let O=hA(e,{pathname:A});rn(x||O!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),rn(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=QC(O&&O.map(T=>Object.assign({},T,{params:Object.assign({},h,T.params),pathname:$n([g,s.encodeLocation?s.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?g:$n([g,s.encodeLocation?s.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),d,r,n,l);return t&&k?b.createElement(fs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},k):k}function VC(){let e=n6(),t=BC(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:n},s={padding:"2px 4px",backgroundColor:n},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:s},"ErrorBoundary")," or"," ",b.createElement("code",{style:s},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:l},r):null,d)}var XC=b.createElement(VC,null),FC=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?b.createElement(Vr.Provider,{value:this.props.routeContext},b.createElement(l0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ZC({routeContext:e,match:t,children:r}){let n=b.useContext(To);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(Vr.Provider,{value:e},r)}function QC(e,t=[],r=null,n=null,l=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,d=r?.errors;if(d!=null){let m=s.findIndex(g=>g.route.id&&d?.[g.route.id]!==void 0);rt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let p=!1,h=-1;if(r)for(let m=0;m<s.length;m++){let g=s[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=m),g.route.id){let{loaderData:x,errors:w}=r,j=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!w||w[g.route.id]===void 0);if(g.route.lazy||j){p=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((m,g,x)=>{let w,j=!1,S=null,A=null;r&&(w=d&&g.route.id?d[g.route.id]:void 0,S=g.route.errorElement||XC,p&&(h<0&&x===0?(jA("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,A=null):h===x&&(j=!0,A=g.route.hydrateFallbackElement||null)));let O=t.concat(s.slice(0,x+1)),k=()=>{let T;return w?T=S:j?T=A:g.route.Component?T=b.createElement(g.route.Component,null):g.route.element?T=g.route.element:T=m,b.createElement(ZC,{match:g,routeContext:{outlet:m,matches:O,isDataRoute:r!=null},children:T})};return r&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?b.createElement(FC,{location:r.location,revalidation:r.revalidation,component:S,error:w,children:k(),routeContext:{outlet:null,matches:O,isDataRoute:!0},unstable_onError:n}):k()},null)}function s0(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JC(e){let t=b.useContext(To);return rt(t,s0(e)),t}function e6(e){let t=b.useContext(dd);return rt(t,s0(e)),t}function t6(e){let t=b.useContext(Vr);return rt(t,s0(e)),t}function c0(e){let t=t6(e),r=t.matches[t.matches.length-1];return rt(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function r6(){return c0("useRouteId")}function n6(){let e=b.useContext(l0),t=e6("useRouteError"),r=c0("useRouteError");return e!==void 0?e:t.errors?.[r]}function a6(){let{router:e}=JC("useNavigate"),t=c0("useNavigate"),r=b.useRef(!1);return bA(()=>{r.current=!0}),b.useCallback(async(l,s={})=>{rn(r.current,yA),r.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:t,...s}))},[e,t])}var ew={};function jA(e,t,r){!t&&!ew[e]&&(ew[e]=!0,rn(!1,r))}b.memo(i6);function i6({routes:e,future:t,state:r,unstable_onError:n}){return wA(e,void 0,r,n,t)}function o6({to:e,replace:t,state:r,relative:n}){rt(Mo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=b.useContext(ln);rn(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=b.useContext(Vr),{pathname:d}=gt(),p=it(),h=o0(e,i0(s),d,n==="path"),m=JSON.stringify(h);return b.useEffect(()=>{p(JSON.parse(m),{replace:t,state:r,relative:n})},[p,m,n,t,r]),null}function fd(e){return GC(e.context)}function ue(e){rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function l6({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:l,static:s=!1}){rt(!Mo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),p=b.useMemo(()=>({basename:d,navigator:l,static:s,future:{}}),[d,l,s]);typeof r=="string"&&(r=Co(r));let{pathname:h="/",search:m="",hash:g="",state:x=null,key:w="default"}=r,j=b.useMemo(()=>{let S=Yn(h,d);return S==null?null:{location:{pathname:S,search:m,hash:g,state:x,key:w},navigationType:n}},[d,h,m,g,x,w,n]);return rn(j!=null,`<Router basename="${d}"> is not able to match the URL "${h}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:b.createElement(ln.Provider,{value:p},b.createElement(fs.Provider,{children:t,value:j}))}function s6({children:e,location:t}){return WC(ng(e),t)}function ng(e,t=[]){let r=[];return b.Children.forEach(e,(n,l)=>{if(!b.isValidElement(n))return;let s=[...t,l];if(n.type===b.Fragment){r.push.apply(r,ng(n.props.children,s));return}rt(n.type===ue,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),rt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let d={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(d.children=ng(n.props.children,s)),r.push(d)}),r}var du="get",fu="application/x-www-form-urlencoded";function pd(e){return e!=null&&typeof e.tagName=="string"}function c6(e){return pd(e)&&e.tagName.toLowerCase()==="button"}function u6(e){return pd(e)&&e.tagName.toLowerCase()==="form"}function d6(e){return pd(e)&&e.tagName.toLowerCase()==="input"}function f6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function p6(e,t){return e.button===0&&(!t||t==="_self")&&!f6(e)}var Wc=null;function h6(){if(Wc===null)try{new FormData(document.createElement("form"),0),Wc=!1}catch{Wc=!0}return Wc}var m6=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wh(e){return e!=null&&!m6.has(e)?(rn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fu}"`),null):e}function g6(e,t){let r,n,l,s,d;if(u6(e)){let p=e.getAttribute("action");n=p?Yn(p,t):null,r=e.getAttribute("method")||du,l=wh(e.getAttribute("enctype"))||fu,s=new FormData(e)}else if(c6(e)||d6(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||p.getAttribute("action");if(n=h?Yn(h,t):null,r=e.getAttribute("formmethod")||p.getAttribute("method")||du,l=wh(e.getAttribute("formenctype"))||wh(p.getAttribute("enctype"))||fu,s=new FormData(p,e),!h6()){let{name:m,type:g,value:x}=e;if(g==="image"){let w=m?`${m}.`:"";s.append(`${w}x`,"0"),s.append(`${w}y`,"0")}else m&&s.append(m,x)}}else{if(pd(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=du,n=null,l=fu,d=e}return s&&l==="text/plain"&&(d=s,s=void 0),{action:n,method:r.toLowerCase(),encType:l,formData:s,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function u0(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function v6(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&Yn(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function x6(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function y6(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function b6(e,t,r){let n=await Promise.all(e.map(async l=>{let s=t.routes[l.route.id];if(s){let d=await x6(s,r);return d.links?d.links():[]}return[]}));return A6(n.flat(1).filter(y6).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function tw(e,t,r,n,l,s){let d=(h,m)=>r[m]?h.route.id!==r[m].route.id:!0,p=(h,m)=>r[m].pathname!==h.pathname||r[m].route.path?.endsWith("*")&&r[m].params["*"]!==h.params["*"];return s==="assets"?t.filter((h,m)=>d(h,m)||p(h,m)):s==="data"?t.filter((h,m)=>{let g=n.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(d(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function w6(e,t,{includeHydrateFallback:r}={}){return j6(e.map(n=>{let l=t.routes[n.route.id];if(!l)return[];let s=[l.module];return l.clientActionModule&&(s=s.concat(l.clientActionModule)),l.clientLoaderModule&&(s=s.concat(l.clientLoaderModule)),r&&l.hydrateFallbackModule&&(s=s.concat(l.hydrateFallbackModule)),l.imports&&(s=s.concat(l.imports)),s}).flat(1))}function j6(e){return[...new Set(e)]}function S6(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function A6(e,t){let r=new Set;return new Set(t),e.reduce((n,l)=>{let s=JSON.stringify(S6(l));return r.has(s)||(r.add(s),n.push({key:s,link:l})),n},[])}function SA(){let e=b.useContext(To);return u0(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function O6(){let e=b.useContext(dd);return u0(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var d0=b.createContext(void 0);d0.displayName="FrameworkContext";function AA(){let e=b.useContext(d0);return u0(e,"You must render this element inside a <HydratedRouter> element"),e}function E6(e,t){let r=b.useContext(d0),[n,l]=b.useState(!1),[s,d]=b.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:g,onTouchStart:x}=t,w=b.useRef(null);b.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let A=k=>{k.forEach(T=>{d(T.isIntersecting)})},O=new IntersectionObserver(A,{threshold:.5});return w.current&&O.observe(w.current),()=>{O.disconnect()}}},[e]),b.useEffect(()=>{if(n){let A=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(A)}}},[n]);let j=()=>{l(!0)},S=()=>{l(!1),d(!1)};return r?e!=="intent"?[s,w,{}]:[s,w,{onFocus:ql(p,j),onBlur:ql(h,S),onMouseEnter:ql(m,j),onMouseLeave:ql(g,S),onTouchStart:ql(x,j)}]:[!1,w,{}]}function ql(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function k6({page:e,...t}){let{router:r}=SA(),n=b.useMemo(()=>hA(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?b.createElement(C6,{page:e,matches:n,...t}):null}function N6(e){let{manifest:t,routeModules:r}=AA(),[n,l]=b.useState([]);return b.useEffect(()=>{let s=!1;return b6(e,t,r).then(d=>{s||l(d)}),()=>{s=!0}},[e,t,r]),n}function C6({page:e,matches:t,...r}){let n=gt(),{manifest:l,routeModules:s}=AA(),{basename:d}=SA(),{loaderData:p,matches:h}=O6(),m=b.useMemo(()=>tw(e,t,h,l,n,"data"),[e,t,h,l,n]),g=b.useMemo(()=>tw(e,t,h,l,n,"assets"),[e,t,h,l,n]),x=b.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let S=new Set,A=!1;if(t.forEach(k=>{let T=l.routes[k.route.id];!T||!T.hasLoader||(!m.some(C=>C.route.id===k.route.id)&&k.route.id in p&&s[k.route.id]?.shouldRevalidate||T.hasClientLoader?A=!0:S.add(k.route.id))}),S.size===0)return[];let O=v6(e,d,"data");return A&&S.size>0&&O.searchParams.set("_routes",t.filter(k=>S.has(k.route.id)).map(k=>k.route.id).join(",")),[O.pathname+O.search]},[d,p,n,l,m,t,e,s]),w=b.useMemo(()=>w6(g,l),[g,l]),j=N6(g);return b.createElement(b.Fragment,null,x.map(S=>b.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...r})),w.map(S=>b.createElement("link",{key:S,rel:"modulepreload",href:S,...r})),j.map(({key:S,link:A})=>b.createElement("link",{key:S,nonce:r.nonce,...A})))}function T6(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var OA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{OA&&(window.__reactRouterVersion="7.9.1")}catch{}function M6({basename:e,children:t,window:r}){let n=b.useRef();n.current==null&&(n.current=mC({window:r,v5Compat:!0}));let l=n.current,[s,d]=b.useState({action:l.action,location:l.location}),p=b.useCallback(h=>{b.startTransition(()=>d(h))},[d]);return b.useLayoutEffect(()=>l.listen(p),[l,p]),b.createElement(l6,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:l})}var EA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,we=b.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:l,reloadDocument:s,replace:d,state:p,target:h,to:m,preventScrollReset:g,viewTransition:x,...w},j){let{basename:S}=b.useContext(ln),A=typeof m=="string"&&EA.test(m),O,k=!1;if(typeof m=="string"&&A&&(O=m,OA))try{let te=new URL(window.location.href),ie=m.startsWith("//")?new URL(te.protocol+m):new URL(m),Z=Yn(ie.pathname,S);ie.origin===te.origin&&Z!=null?m=Z+ie.search+ie.hash:k=!0}catch{rn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let T=UC(m,{relative:l}),[C,_,M]=E6(n,w),R=D6(m,{replace:d,state:p,target:h,preventScrollReset:g,relative:l,viewTransition:x});function U(te){t&&t(te),te.defaultPrevented||R(te)}let F=b.createElement("a",{...w,...M,href:O||T,onClick:k||s?t:U,ref:T6(j,_),target:h,"data-discover":!A&&r==="render"?"true":void 0});return C&&!A?b.createElement(b.Fragment,null,F,b.createElement(k6,{page:T})):F});we.displayName="Link";var Jl=b.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:l=!1,style:s,to:d,viewTransition:p,children:h,...m},g){let x=ps(d,{relative:m.relative}),w=gt(),j=b.useContext(dd),{navigator:S,basename:A}=b.useContext(ln),O=j!=null&&I6(x)&&p===!0,k=S.encodeLocation?S.encodeLocation(x).pathname:x.pathname,T=w.pathname,C=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;r||(T=T.toLowerCase(),C=C?C.toLowerCase():null,k=k.toLowerCase()),C&&A&&(C=Yn(C,A)||C);const _=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let M=T===k||!l&&T.startsWith(k)&&T.charAt(_)==="/",R=C!=null&&(C===k||!l&&C.startsWith(k)&&C.charAt(k.length)==="/"),U={isActive:M,isPending:R,isTransitioning:O},F=M?t:void 0,te;typeof n=="function"?te=n(U):te=[n,M?"active":null,R?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let ie=typeof s=="function"?s(U):s;return b.createElement(we,{...m,"aria-current":F,className:te,ref:g,style:ie,to:d,viewTransition:p},typeof h=="function"?h(U):h)});Jl.displayName="NavLink";var _6=b.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:l,state:s,method:d=du,action:p,onSubmit:h,relative:m,preventScrollReset:g,viewTransition:x,...w},j)=>{let S=L6(),A=B6(p,{relative:m}),O=d.toLowerCase()==="get"?"get":"post",k=typeof p=="string"&&EA.test(p),T=C=>{if(h&&h(C),C.defaultPrevented)return;C.preventDefault();let _=C.nativeEvent.submitter,M=_?.getAttribute("formmethod")||d;S(_||C.currentTarget,{fetcherKey:t,method:M,navigate:r,replace:l,state:s,relative:m,preventScrollReset:g,viewTransition:x})};return b.createElement("form",{ref:j,method:O,action:A,onSubmit:n?h:T,...w,"data-discover":!k&&e==="render"?"true":void 0})});_6.displayName="Form";function P6(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kA(e){let t=b.useContext(To);return rt(t,P6(e)),t}function D6(e,{target:t,replace:r,state:n,preventScrollReset:l,relative:s,viewTransition:d}={}){let p=it(),h=gt(),m=ps(e,{relative:s});return b.useCallback(g=>{if(p6(g,t)){g.preventDefault();let x=r!==void 0?r:Ql(h)===Ql(m);p(e,{replace:x,state:n,preventScrollReset:l,relative:s,viewTransition:d})}},[h,p,m,r,n,t,e,l,s,d])}var z6=0,R6=()=>`__${String(++z6)}__`;function L6(){let{router:e}=kA("useSubmit"),{basename:t}=b.useContext(ln),r=r6();return b.useCallback(async(n,l={})=>{let{action:s,method:d,encType:p,formData:h,body:m}=g6(n,t);if(l.navigate===!1){let g=l.fetcherKey||R6();await e.fetch(g,r,l.action||s,{preventScrollReset:l.preventScrollReset,formData:h,body:m,formMethod:l.method||d,formEncType:l.encType||p,flushSync:l.flushSync})}else await e.navigate(l.action||s,{preventScrollReset:l.preventScrollReset,formData:h,body:m,formMethod:l.method||d,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,t,r])}function B6(e,{relative:t}={}){let{basename:r}=b.useContext(ln),n=b.useContext(Vr);rt(n,"useFormAction must be used inside a RouteContext");let[l]=n.matches.slice(-1),s={...ps(e||".",{relative:t})},d=gt();if(e==null){s.search=d.search;let p=new URLSearchParams(s.search),h=p.getAll("index");if(h.some(g=>g==="")){p.delete("index"),h.filter(x=>x).forEach(x=>p.append("index",x));let g=p.toString();s.search=g?`?${g}`:""}}return(!e||e===".")&&l.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(s.pathname=s.pathname==="/"?r:$n([r,s.pathname])),Ql(s)}function I6(e,{relative:t}={}){let r=b.useContext(xA);rt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=kA("useViewTransitionState"),l=ps(e,{relative:t});if(!r.isTransitioning)return!1;let s=Yn(r.currentLocation.pathname,n)||r.currentLocation.pathname,d=Yn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return gu(l.pathname,d)!=null||gu(l.pathname,s)!=null}var f0=pA();const q6=b.createContext(null);function $6({children:e}){const[t,r]=b.useState(null),[n,l]=b.useState(!1),[s,d]=b.useState(!1),p={user:t,setUser:r,isAuthenticated:n,setIsAuthenticated:l,loading:s,setLoading:d};return u.jsx(q6.Provider,{value:p,children:e})}function U6(){const{pathname:e,key:t}=gt(),r=b.useRef({});return b.useEffect(()=>{const n=r.current[t];if(n!==void 0){requestAnimationFrame(()=>{window.scrollTo({top:n,behavior:"auto"})});return}requestAnimationFrame(()=>{window.scrollTo({top:0,behavior:"smooth"})});const l=()=>{r.current[t]=window.scrollY};return window.addEventListener("beforeunload",l),()=>window.removeEventListener("beforeunload",l)},[e,t]),null}function H6(){const[e,t]=b.useState(!1),[r,n]=b.useState(!1),[l,s]=b.useState(window.innerWidth<=800),[d,p]=b.useState(!1),h=b.useRef(null),m=b.useRef(null),g=b.useRef(null),x=gt();return b.useEffect(()=>{const w=()=>s(window.innerWidth<=800);return window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]),b.useEffect(()=>{t(!1),n(!1)},[x]),b.useEffect(()=>{const w=j=>{h.current&&!h.current.contains(j.target)&&!m.current?.contains(j.target)&&(t(!1),n(!1))};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),b.useEffect(()=>{let w=window.scrollY,j=!1,S;const A=()=>{j||(window.requestAnimationFrame(()=>{const O=window.scrollY;O>w+10?p(!0):O<w-5&&p(!1),w=O>0?O:0,j=!1}),j=!0),clearTimeout(S),S=setTimeout(()=>p(!1),300)};return window.addEventListener("scroll",A),()=>{window.removeEventListener("scroll",A),clearTimeout(S)}},[]),b.useEffect(()=>{r?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")},[r]),u.jsxs("header",{className:`tm-header ${d?"hidden":""}`,children:[u.jsxs("nav",{className:"tm-nav",ref:h,children:[u.jsxs(we,{to:"/",className:"tm-logo",onClick:()=>t(!1),children:[u.jsx("span",{className:"logo-yellow",children:"HG’s"}),u.jsx("span",{className:"logo-blue",children:"TalentMinds"})]}),!l&&u.jsx("div",{className:"tm-center",children:u.jsxs("div",{className:"tm-search",children:[u.jsx("input",{type:"text",placeholder:"Search for courses, mentors, skills..."}),u.jsx("button",{className:"tm-search-btn","aria-label":"Search",children:"🔍"})]})}),u.jsxs("div",{className:`tm-links ${e?"open":""}`,children:[u.jsxs(we,{to:"/explore",onClick:()=>t(!1),children:[u.jsx("div",{className:"tm-explore-icon",children:[...Array(9)].map((w,j)=>u.jsx("span",{className:"tm-dot-waffle"},j))}),u.jsx("span",{children:"Explore"})]}),u.jsx(we,{to:"/resources",onClick:()=>t(!1),children:"Resources"}),u.jsx(we,{to:"/business",onClick:()=>t(!1),children:"For Business"}),u.jsxs("div",{className:"tm-more-area",onMouseEnter:()=>!l&&n(!0),onMouseLeave:()=>!l&&n(!1),children:[u.jsxs("button",{className:"tm-more-btn",onClick:()=>l?n(!r):null,ref:m,children:["More ",u.jsx("span",{className:"tm-more-arrow",children:r?"▲":"▼"})]}),r&&u.jsxs("div",{className:`tm-more-dropdown ${l?"mobile":"desktop"}`,ref:g,children:[u.jsx(we,{to:"/reviews",onClick:()=>n(!1),children:"Learner Stories"}),u.jsx(we,{to:"/hire",onClick:()=>n(!1),children:"Hire Talent"}),u.jsx(we,{to:"/become-mentor",onClick:()=>n(!1),children:"Become a Mentor"}),u.jsx(we,{to:"/partnerships",onClick:()=>n(!1),children:"Partnerships"}),u.jsx(we,{to:"/scholarships",onClick:()=>n(!1),children:"Scholarships"}),u.jsx(we,{to:"/faq",onClick:()=>n(!1),children:"FAQ"}),u.jsx(we,{to:"/support",onClick:()=>n(!1),children:"Support"})]})]}),u.jsx(we,{to:"/login",className:"tm-login-btn",onClick:()=>t(!1),children:"Login"})]}),u.jsxs("button",{className:"tm-hamburger",onClick:()=>t(!e),"aria-label":"Menu",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})]}),u.jsx("style",{children:`
        .tm-header {
          background: #fff;
          border-bottom: 1px solid #dee2e6;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          transition: transform 0.4s ease, opacity 0.3s ease;
        }
        .tm-header.hidden {
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
        }
        .tm-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1300px;
          margin: 0 auto;
          height: 70px;
          padding: 0 24px;
        }
        .tm-logo {
          font-size: 1.6rem;
          font-weight: 700;
          display: flex;
          align-items: center;
        }
        .logo-yellow { color: #fbbf24; margin-right: 5px; }
        .logo-blue { color: #2563eb; }
        .tm-center { flex: 1; display: flex; justify-content: center; }
        .tm-search {
          display: flex;
          align-items: center;
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 20px;
          overflow: hidden;
          width: 400px;
          max-width: 100%;
        }
        .tm-search input {
          flex: 1;
          border: none;
          background: transparent;
          padding: 10px 15px;
          font-size: 0.95rem;
          outline: none;
        }
        .tm-search-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .tm-search-btn:hover { background: #1e40af; }

        /* LINKS */
        .tm-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .tm-links a {
          color: #495057;
          font-weight: 500;
          text-decoration: none;
        }
        .tm-links a:hover { color: #2563eb; }

        /* MORE MENU */
        .tm-more-area { position: relative; }
        .tm-more-btn {
          background: none;
          border: none;
          color: #495057;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .tm-more-btn:hover { color: #2563eb; }

        /* Dropdown — fixed to prevent layout shift */
        .tm-more-dropdown {
          position: fixed !important;
          top: 70px; /* Just below header */
          right: 120px; /* Adjust based on your layout */
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          min-width: 220px;
          z-index: 10000;
          overflow: hidden;
          max-height: calc(100vh - 100px);
        }
        .tm-more-dropdown a {
          padding: 10px 18px;
          color: #212529;
          white-space: nowrap;
          text-decoration: none;
        }
        .tm-more-dropdown a:hover {
          background: #f8f9fa;
          color: #2563eb;
        }

        /* Disable body scroll when dropdown open */
        body.no-scroll { overflow: hidden; }

        /* LOGIN */
        .tm-login-btn {
          color: #212529;
          padding: 9px 20px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .tm-login-btn:hover {
          background: #eff6ff;
          color: #2563eb;
        }

        /* HAMBURGER */
        .tm-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .tm-hamburger span {
          width: 25px;
          height: 2px;
          background: #2563eb;
        }

        /* RESPONSIVE */
        @media (max-width: 800px) {
          .tm-center { display: none; }
          .tm-links {
            display: none;
            flex-direction: column;
            background: #fff;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            padding: 20px;
            gap: 16px;
            box-shadow: 0 6px 18px rgba(0,0,0,0.08);
            z-index: 9999;
            height: calc(100vh - 70px);
            overflow-y: auto;
          }
          .tm-links.open { display: flex; }
          .tm-hamburger { display: flex; }
        }
      `})]})}function Y6(){return u.jsxs("footer",{className:"tm-footer",children:[u.jsxs("div",{className:"tm-footer-container",children:[u.jsxs("div",{className:"tm-footer-content",children:[u.jsxs("div",{className:"tm-footer-brand",children:[u.jsxs(we,{to:"/",className:"tm-footer-logo",children:[u.jsx("span",{className:"logo-yellow",children:"HG's"}),u.jsx("span",{className:"logo-white",children:"TalentMinds"})]}),u.jsx("p",{children:"Empowering careers through expert-led online learning and industry-recognized certifications."}),u.jsxs("div",{className:"tm-footer-socials",children:[u.jsx("a",{href:"#","aria-label":"Twitter",children:u.jsx("svg",{width:"18",height:"18",fill:"#b6c6e3",children:u.jsx("circle",{cx:"9",cy:"9",r:"8"})})}),u.jsx("a",{href:"#","aria-label":"LinkedIn",children:u.jsx("svg",{width:"18",height:"18",fill:"#b6c6e3",children:u.jsx("rect",{x:"3",y:"3",width:"12",height:"12"})})}),u.jsx("a",{href:"#","aria-label":"GitHub",children:u.jsx("svg",{width:"18",height:"18",fill:"#b6c6e3",children:u.jsx("polygon",{points:"3,3 15,9 3,15"})})})]})]}),u.jsxs("div",{className:"tm-footer-links",children:[u.jsxs("div",{className:"tm-footer-col",children:[u.jsx("h4",{children:"Learning"}),u.jsx(we,{to:"/courses",children:"All Courses"}),u.jsx(we,{to:"/skills",children:"Skill Tracks"}),u.jsx(we,{to:"/certifications",children:"Certifications"}),u.jsx(we,{to:"/enterprise",children:"Enterprise"})]}),u.jsxs("div",{className:"tm-footer-col",children:[u.jsx("h4",{children:"Resources"}),u.jsx(we,{to:"/blog",children:"Blog"}),u.jsx(we,{to:"/guides",children:"Guides"}),u.jsx(we,{to:"/tutorials",children:"Tutorials"}),u.jsx(we,{to:"/webinars",children:"Webinars"})]}),u.jsxs("div",{className:"tm-footer-col",children:[u.jsx("h4",{children:"Company"}),u.jsx(we,{to:"/about",children:"About Us"}),u.jsx(we,{to:"/careers",children:"Careers"}),u.jsx(we,{to:"/contact",children:"Contact"}),u.jsx(we,{to:"/press",children:"Press"})]}),u.jsxs("div",{className:"tm-footer-col",children:[u.jsx("h4",{children:"Support"}),u.jsx(we,{to:"/help",children:"Help Center"}),u.jsx(we,{to:"/faq",children:"FAQ"}),u.jsx(we,{to:"/terms",children:"Terms"}),u.jsx(we,{to:"/privacy",children:"Privacy"})]})]})]}),u.jsxs("div",{className:"tm-footer-bottom",children:[u.jsx("span",{children:"© 2025 TalentMinds. All rights reserved."}),u.jsxs("div",{className:"tm-footer-bottom-links",children:[u.jsx(we,{to:"/terms",children:"Terms"}),u.jsx(we,{to:"/privacy",children:"Privacy"}),u.jsx(we,{to:"/cookies",children:"Cookies"})]})]})]}),u.jsx("style",{children:`
        .tm-footer {
          background: #181a20;
          color: #b6c6e3;
          width: 100%;
          padding: 60px 24px 0;
        }

        .tm-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        .tm-footer-content {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: 64px;
          padding-bottom: 48px;
        }

        .tm-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tm-footer-logo {
          font-size: 1.6rem;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .logo-yellow {
          color: #fbbf24;
        }

        .logo-white {
          color: #fff;
        }

        .tm-footer-brand p {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.6;
          max-width: 400px;
        }

        .tm-footer-socials {
          display: flex;
          gap: 16px;
        }

        .tm-footer-socials a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #23263a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
        }

        .tm-footer-socials a:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        .tm-footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .tm-footer-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .tm-footer-col h4 {
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .tm-footer-col a {
          color: #94a3b8;
          font-size: 0.95rem;
          text-decoration: none;
          transition: 0.2s;
        }

        .tm-footer-col a:hover {
          color: #fff;
          transform: translateX(3px);
        }

        .tm-footer-bottom {
          border-top: 1px solid #23263a;
          padding: 24px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .tm-footer-bottom-links {
          display: flex;
          gap: 20px;
        }

        .tm-footer-bottom-links a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .tm-footer-bottom-links a:hover {
          color: #fff;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .tm-footer-content {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }

          .tm-footer-brand {
            align-items: center;
          }

          .tm-footer-socials {
            justify-content: center;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .tm-footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            text-align: center;
          }

          .tm-footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .tm-footer-bottom-links {
            justify-content: center;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .tm-footer-links {
            grid-template-columns: 1fr;
          }

          .tm-footer-col {
            align-items: center;
          }

          .tm-footer-logo {
            font-size: 1.4rem;
          }
        }
      `})]})}function G6(){return u.jsxs(u.Fragment,{children:[u.jsx(H6,{}),u.jsx(fd,{})," ",u.jsx(Y6,{})]})}/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),W6=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase()),rw=e=>{const t=W6(e);return t.charAt(0).toUpperCase()+t.slice(1)},NA=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim(),V6=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:l="",children:s,iconNode:d,...p},h)=>b.createElement("svg",{ref:h,...X6,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:NA("lucide",l),...!s&&!V6(p)&&{"aria-hidden":"true"},...p},[...d.map(([m,g])=>b.createElement(m,g)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(e,t)=>{const r=b.forwardRef(({className:n,...l},s)=>b.createElement(F6,{ref:s,iconNode:t,className:NA(`lucide-${K6(rw(e))}`,`lucide-${e}`,n),...l}));return r.displayName=rw(e),r};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Si=Ee("bell",Z6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],hs=Ee("book-open",Q6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],eT=Ee("briefcase",J6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],hd=Ee("chart-column",tT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],CA=Ee("chevron-down",rT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],TA=Ee("chevron-up",nT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],md=Ee("circle-check-big",aT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],oT=Ee("circle-play",iT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],sT=Ee("circle-question-mark",lT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],uT=Ee("circle-x",cT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],p0=Ee("clipboard-list",dT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],MA=Ee("clock",fT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],hT=Ee("dollar-sign",pT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ag=Ee("eye-off",mT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ig=Ee("eye",gT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],xT=Ee("funnel",vT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],bT=Ee("info",yT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],h0=Ee("layout-dashboard",wT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],m0=Ee("lock",jT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],g0=Ee("log-out",ST);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],OT=Ee("mail",AT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],v0=Ee("menu",ET);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],og=Ee("message-square",kT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],CT=Ee("phone",NT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],MT=Ee("save",TT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],PT=Ee("search",_T);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],x0=Ee("settings",DT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],RT=Ee("shield",zT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],nw=Ee("shopping-cart",LT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],IT=Ee("square-pen",BT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],$T=Ee("thumbs-up",qT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],HT=Ee("trash-2",UT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],y0=Ee("triangle-alert",YT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],_A=Ee("user-check",GT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],PA=Ee("user-x",KT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],gd=Ee("user",WT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],DA=Ee("users",VT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],FT=Ee("x",XT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],QT=Ee("zap",ZT);function JT({open:e,onClose:t,onLogout:r}){const n=it(),l=gt(),s=()=>typeof window<"u"&&window.matchMedia("(max-width: 992px)").matches;b.useEffect(()=>{s()&&t()},[l.pathname]);const d=[{to:"/admin/dashboard",icon:h0,label:"Dashboard"},{to:"/admin/users",icon:DA,label:"Manage Users"},{to:"/admin/courses",icon:hs,label:"Manage Courses"},{to:"/admin/mentors",icon:p0,label:"Mentor Requests"},{to:"/admin/reports",icon:hd,label:"Reports"},{to:"/admin/notifications",icon:Si,label:"Notifications"},{to:"/admin/settings",icon:x0,label:"Settings"}];return u.jsxs("aside",{className:"admin-sidebar",children:[u.jsxs("div",{className:"sidebar-header",children:[u.jsx("div",{className:"logo",children:"⚙️"}),u.jsx("h2",{className:"title",children:"Admin Hub"})]}),u.jsxs("nav",{className:"nav",children:[u.jsx("div",{className:"nav-group-title",children:"Main Menu"}),d.map(({to:p,icon:h,label:m})=>u.jsxs(Jl,{to:p,className:({isActive:g})=>`nav-item ${g?"active":""}`,onClick:()=>s()&&t(),children:[u.jsx(h,{size:18}),u.jsx("span",{children:m})]},p))]}),u.jsx("div",{className:"bottom",children:u.jsxs("button",{className:"logout",onClick:()=>{r(),n("/login")},children:[u.jsx(g0,{size:16})," Logout"]})}),u.jsx("style",{jsx:"true",children:`
        .admin-sidebar {
          height: 100%;
          width: 100%;
          background: linear-gradient(180deg, #0f172a, #1e293b);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logo {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #1d4ed8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }
        .title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #e2e8f0;
        }
        .nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 10px 10px;
          overflow-y: auto;
        }
        .nav-group-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8;
          padding: 14px 14px 4px 14px;
          text-transform: uppercase;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          color: #cbd5e1;
          text-decoration: none;
          border-radius: 8px;
          transition: 0.2s;
        }
        .nav-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }
        .nav-item.active {
          background: rgba(37, 99, 235, 0.2);
          color: #fff;
          box-shadow: inset 3px 0 0 #3b82f6;
        }
        .bottom {
          padding: 16px 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logout {
          background: #ef4444;
          color: #fff;
          border: none;
          width: 100%;
          padding: 12px 12px;
          border-radius: 8px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
        }
        .logout:hover {
          background: #dc2626;
        }
      `})]})}function eM({onMenuClick:e}){return u.jsxs("header",{className:"admin-navbar",children:[u.jsxs("div",{className:"left",children:[u.jsx("button",{className:"menu-btn",onClick:e,"aria-label":"Toggle Sidebar",children:u.jsx(v0,{size:20})}),u.jsx("h2",{children:"Admin Console"})]}),u.jsxs("div",{className:"right",children:[u.jsx("input",{className:"search",placeholder:"Search users, courses..."}),u.jsx("button",{className:"notify",title:"Notifications",children:"🔔"}),u.jsx("img",{className:"avatar",alt:"Admin",src:"https://i.pravatar.cc/80?img=12"})]}),u.jsx("style",{children:`
        .admin-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          padding: 12px 20px;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          transition: background 0.2s;
          color: #1e3a8a;
        }
        .menu-btn:hover {
          background: #eff6ff;
        }
        .admin-navbar h2 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: 0.2px;
          color: #0f172a;
        }
        .right {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .search {
          width: 260px;
          max-width: 42vw;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 8px 12px;
          outline: none;
          transition: all 0.2s;
        }
        .search:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }
        .notify {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 8px 10px;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.2s;
        }
        .notify:hover {
          background: #dbeafe;
        }
        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #e2e8f0;
        }
        @media (max-width: 640px) {
          .search {
            display: none;
          }
        }
      `})]})}function tM(){const e=it(),t=gt(),[r,n]=b.useState(()=>{try{const k=localStorage.getItem("admin");return k?JSON.parse(k):null}catch{return null}}),[l,s]=b.useState(!0),[d,p]=b.useState(()=>typeof window<"u"?window.matchMedia("(max-width: 992px)").matches:!1),[h,m]=b.useState(!1),[g,x]=b.useState(!1);b.useEffect(()=>{r?s(!1):e("/login",{replace:!0})},[r,e]),b.useEffect(()=>{const k=window.matchMedia("(max-width: 992px)"),T=C=>{p(C.matches),C.matches&&(m(!1),x(!1))};return k.addEventListener("change",T),()=>k.removeEventListener("change",T)},[]),b.useEffect(()=>(d&&(document.body.style.overflow=g?"hidden":""),()=>document.body.style.overflow=""),[d,g]),b.useEffect(()=>{window.scrollTo(0,0),d&&x(!1)},[t.pathname,d]);const w=()=>{localStorage.removeItem("admin"),n(null),s(!0),e("/login",{replace:!0})},S=(()=>{if(!r)return"Admin";if(r.firstName)return r.firstName;if(r.name)return r.name;if(r.email){const T=r.email.split("@")[0].split(/[._-]/)[0];return T.charAt(0).toUpperCase()+T.slice(1)}return"Admin"})();if(l||!r)return u.jsx("div",{style:ni.loading,children:"Loading Admin Dashboard…"});const A=260,O=!d&&h?A:0;return u.jsxs("div",{style:{...ni.wrapper,"--desktop-sidebar-width":`${A}px`},children:[u.jsx("aside",{style:{...ni.sidebarShell,transform:d?g?"translateX(0)":"translateX(-100%)":h?"translateX(0)":"translateX(calc(-1 * var(--desktop-sidebar-width)))"},children:u.jsx(JT,{open:d?g:h,onClose:()=>x(!1),onLogout:w})}),d&&g&&u.jsx("div",{onClick:()=>x(!1),style:ni.backdrop,"aria-hidden":"true"}),u.jsx(eM,{onMenuClick:()=>d?x(k=>!k):m(k=>!k),adminName:S}),u.jsxs("div",{style:{...ni.page,marginLeft:O},children:[u.jsx("main",{style:ni.main,children:u.jsx(fd,{})}),u.jsxs("footer",{style:ni.footer,children:["© ",new Date().getFullYear()," TalentMinds · Admin Control Center"]})]})]})}const ni={wrapper:{minHeight:"100vh",background:"#f8fafc"},loading:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:"#1e40af",background:"#f1f5f9"},sidebarShell:{position:"fixed",left:0,top:64,bottom:0,width:"var(--desktop-sidebar-width)",backgroundColor:"#0f172a",zIndex:2001,transition:"transform .3s ease"},backdrop:{position:"fixed",inset:0,background:"rgba(2,6,23,0.55)",zIndex:2e3,backdropFilter:"blur(2px)"},page:{flex:1,display:"flex",flexDirection:"column",minHeight:"100vh",transition:"margin-left .3s ease"},main:{flex:1,padding:"20px 24px",maxWidth:1300,width:"100%",margin:"0 auto"},footer:{padding:"12px 20px",textAlign:"center",fontSize:".85rem",color:"#64748b",borderTop:"1px solid #e2e8f0",background:"#f8fafc"}};function rM({open:e=!1,onClose:t=()=>{},onLogout:r=()=>{}}){const n=it(),l=gt(),s=()=>typeof window<"u"&&window.matchMedia("(max-width: 992px)").matches;b.useEffect(()=>{s()&&t()},[l.pathname]);const d=[{to:"/dashboard",icon:h0,label:"Dashboard",exact:!0},{to:"/dashboard/my-courses",icon:hs,label:"My Courses"},{to:"/dashboard/assignments",icon:p0,label:"Assignments"},{to:"/dashboard/grades",icon:hd,label:"Grades & Progress"},{to:"/dashboard/discussions",icon:og,label:"Discussions"},{to:"/dashboard/notifications",icon:Si,label:"Alerts"},{to:"/dashboard/My-Cart",icon:nw,label:"My Cart"}],p=[{to:"/dashboard/profile",icon:gd,label:"My Profile"},{to:"/dashboard/settings",icon:x0,label:"Settings"},{to:"/dashboard/support",icon:sT,label:"Help & Support"},{to:"/dashboard/my-cart",icon:nw,label:"My Cart"}],h=()=>{s()&&t()};return u.jsxs("aside",{className:`learner-sidebar ${e?"open":""}`,children:[u.jsxs("div",{className:"sidebar-header",children:[u.jsx("div",{className:"logo",children:"🎓"}),u.jsx("h2",{className:"title",children:"Learner Hub"})]}),u.jsxs("nav",{className:"nav",children:[u.jsx("div",{className:"nav-group-title",children:"Main Menu"}),d.map(({to:m,icon:g,label:x,exact:w})=>u.jsxs(Jl,{to:m,end:w,className:({isActive:j})=>`nav-item ${j?"active":""}`,onClick:h,children:[u.jsx(g,{size:18}),u.jsx("span",{children:x})]},m)),u.jsx("div",{className:"nav-group-title",children:"Account"}),p.map(({to:m,icon:g,label:x})=>u.jsxs(Jl,{to:m,className:({isActive:w})=>`nav-item ${w?"active":""}`,onClick:h,children:[u.jsx(g,{size:18}),u.jsx("span",{children:x})]},m))]}),u.jsx("div",{className:"bottom",children:u.jsxs("button",{className:"logout",onClick:()=>{r(),n("/login")},children:[u.jsx(g0,{size:16})," Logout"]})}),u.jsx("style",{jsx:"true",children:`
        /* Sidebar container styles */
        .learner-sidebar { 
          height: 100%; 
          width: 100%; /* Important: The containing element (sidebarShell) controls width */
          background: linear-gradient(180deg, #0f172a, #1e293b); 
          color:#fff; 
          display:flex; 
          flex-direction:column; 
          justify-content:space-between; 
          box-shadow: 2px 0 10px rgba(0,0,0,0.15); /* Subtle shadow for depth */
        }
        
        /* Sidebar Header (Logo/Title) */
        .sidebar-header{ 
          display:flex; 
          align-items:center; 
          gap:10px; 
          padding:18px 20px; 
          border-bottom:1px solid rgba(255,255,255,.1); 
        }
        .logo{ 
          width:40px;
          height:40px;
          border-radius:8px;
          background:#2563eb; /* Primary blue color */
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:1.4rem; 
        }
        .title{ 
          font-size:1.1rem; 
          font-weight:800; 
          color: #e2e8f0; /* Light text color */
        }
        
        /* Navigation area */
        .nav{ 
          flex:1; 
          display:flex; 
          flex-direction:column; 
          padding:10px 10px; 
          overflow-y:auto; 
          overflow-x:hidden;
        }

        /* Navigation Group Title */
        .nav-group-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8; /* Subtle gray for category titles */
          padding: 14px 14px 4px 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        /* Individual Nav Link */
        .nav-item{ 
          display:flex; 
          align-items:center; 
          gap:12px; 
          padding:12px 14px; 
          color:#cbd5e1; /* Default link color */
          text-decoration:none; 
          border-radius:8px; 
          font-weight:500; 
          transition:background .2s, color .2s; 
        }
        .nav-item:hover{ 
          background:rgba(255,255,255,.08); 
          color: #fff;
        }
        .nav-item.active{ 
          background:rgba(37,99,235,.2); 
          color:#fff; 
          font-weight:600; 
          box-shadow: inset 3px 0 0 #3b82f6; /* Highlight bar */
        }
        
        /* Bottom Section (Logout) */
        .bottom{ 
          padding:16px 10px; 
          border-top:1px solid rgba(255,255,255,.1); 
        }
        .logout{ 
          background:#ef4444; /* Red color for logout */
          color:#fff; 
          border:none; 
          width:100%; 
          padding:12px 12px; 
          border-radius:8px; 
          font-weight:700; 
          display:flex; 
          align-items:center; 
          justify-content:center; 
          gap:8px; 
          cursor:pointer; 
          transition:background .2s; 
        }
        .logout:hover{ 
          background:#dc2626; 
        }

        /* Mobile specific styles for the drawer effect (inherited from LearnerLayout, but here for completeness) */
        @media (max-width: 992px){
          .learner-sidebar{ 
             /* The LearnerLayout will control the fixed position and transform */
             box-shadow:4px 0 16px rgba(0,0,0,.4); /* Stronger shadow on mobile */
          }
        }
      `})]})}function nM(){const e=it(),t=gt(),[r,n]=b.useState(()=>{try{const C=localStorage.getItem("learner");return C?JSON.parse(C):null}catch(C){return console.error("Failed to parse learner data from localStorage",C),null}}),[l,s]=b.useState(!0),[d,p]=b.useState(!1),[h,m]=b.useState(()=>typeof window<"u"?window.matchMedia("(max-width: 992px)").matches:!1),[g,x]=b.useState(!1),[w,j]=b.useState(!1);b.useEffect(()=>{r?s(!1):e("/login",{replace:!0})},[r,e]),b.useEffect(()=>{if(typeof window>"u")return;const C=window.matchMedia("(max-width: 992px)"),_=M=>{m(M.matches),M.matches&&x(!1),j(!1)};return C.addEventListener("change",_),_(C),()=>C.removeEventListener("change",_)},[]),b.useEffect(()=>(h&&(document.body.style.overflow=w?"hidden":""),()=>{document.body.style.overflow=""}),[h,w]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"}),p(!1),h&&j(!1)},[t.pathname,h]);function S(){localStorage.removeItem("learner"),n(null),s(!0)}const O=(()=>{if(!r)return"Learner";if(r.firstName)return r.firstName;if(r.fullName)return r.fullName.split(" ")[0];if(r.email){const C=r.email.split("@")[0],_=C.split(/[. _-]/).filter(R=>R.length>0);let M=_.length>0?_[0]:C;return M.charAt(0).toUpperCase()+M.slice(1)}return"Learner"})();if(l||!r)return u.jsx("div",{style:ur.loading,children:"Loading Dashboard…"});const k=260,T=!h&&g?k:0;return u.jsxs("div",{style:{...ur.wrapper,"--desktop-sidebar-width":`${k}px`},children:[u.jsxs("header",{style:ur.header,children:[u.jsxs("div",{style:ur.brandArea,children:[u.jsx("button",{onClick:()=>{h?j(C=>!C):x(C=>!C)},style:ur.iconBtn,"aria-label":"Toggle sidebar",children:u.jsx(v0,{size:22})}),u.jsx(we,{to:"/dashboard",style:ur.logoLink,children:"LEARNER HUB"})]}),u.jsxs("div",{style:ur.headerRight,children:[u.jsxs("span",{style:ur.welcome,children:["Hello, ",O," 👋"]}),u.jsx("div",{style:ur.avatar,onClick:()=>p(C=>!C),"aria-controls":"quick-nav-menu","aria-expanded":d,children:(O?.[0]||"L").toUpperCase()})]})]}),u.jsx("aside",{style:{...ur.sidebarShell,transform:h?w?"translateX(0)":"translateX(-100%)":g?"translateX(0)":"translateX(calc(-1 * var(--desktop-sidebar-width)))"},children:u.jsx(rM,{open:h?w:g,onClose:()=>j(!1),onLogout:S})}),h&&w&&u.jsx("div",{onClick:()=>j(!1),style:ur.backdrop,"aria-hidden":"true"}),u.jsxs("div",{style:{...ur.page,marginLeft:T},children:[u.jsx("main",{style:ur.main,onClick:()=>{d&&p(!1)},children:u.jsx(fd,{})}),u.jsxs("footer",{style:ur.footer,children:["© ",new Date().getFullYear()," Learning Platform · All rights reserved"]})]})]})}const ur={wrapper:{minHeight:"100vh",background:"#f8fafc",display:"flex",paddingTop:"64px",position:"relative"},loading:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f1f5f9",color:"#0f4f9f",fontWeight:800},header:{height:"64px",position:"fixed",top:0,left:0,right:0,zIndex:1001,background:"#fff",borderBottom:"1px solid #e2e8f0",boxShadow:"0 1px 6px rgba(0,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px"},brandArea:{display:"flex",alignItems:"center",gap:12},iconBtn:{background:"none",border:"none",cursor:"pointer",color:"#0f4f9f",padding:6,borderRadius:8},logoLink:{fontWeight:900,fontSize:"1.1rem",color:"#0f4f9f",textDecoration:"none"},headerRight:{display:"flex",alignItems:"center",gap:10},welcome:{color:"#475569",fontSize:".95rem",fontWeight:700},avatar:{width:38,height:38,borderRadius:"50%",background:"#0f4f9f",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,cursor:"pointer"},sidebarShell:{position:"fixed",left:0,top:"64px",bottom:0,width:"var(--desktop-sidebar-width)",zIndex:2001,transition:"transform .3s ease",backgroundColor:"#0f172a"},backdrop:{position:"fixed",inset:0,background:"rgba(2,6,23,0.55)",zIndex:2e3,backdropFilter:"blur(2px)"},page:{flex:1,display:"flex",flexDirection:"column",minHeight:"calc(100vh - 64px)",transition:"margin-left .3s ease"},main:{flex:1,padding:20,maxWidth:1250,width:"100%",margin:"0 auto"},footer:{padding:"12px 20px",textAlign:"center",fontSize:".85rem",color:"#64748b",borderTop:"1px solid #e2e8f0",background:"#f8fafc"}};function aM({open:e,onClose:t,onLogout:r}){const n=it(),l=gt(),s=()=>typeof window<"u"&&window.matchMedia("(max-width: 992px)").matches;b.useEffect(()=>{s()&&t()},[l.pathname]);const d=[{to:"/trainer/dashboard",icon:h0,label:"Dashboard"},{to:"/trainer/my-courses",icon:hs,label:"My Courses"},{to:"/trainer/course-management",icon:p0,label:"Course Management"},{to:"/trainer/student-progress",icon:DA,label:"Student Progress"},{to:"/trainer/earnings",icon:hd,label:"Earnings"},{to:"/trainer/notifications",icon:Si,label:"Notifications"},{to:"/trainer/settings",icon:x0,label:"Settings"}];return u.jsxs("aside",{className:"trainer-sidebar",children:[u.jsxs("div",{className:"sidebar-header",children:[u.jsx("div",{className:"logo",children:"🧑‍🏫"}),u.jsx("h2",{className:"title",children:"Trainer Hub"})]}),u.jsxs("nav",{className:"nav",children:[u.jsx("div",{className:"nav-group-title",children:"Main Menu"}),d.map(({to:p,icon:h,label:m})=>u.jsxs(Jl,{to:p,className:({isActive:g})=>`nav-item ${g?"active":""}`,onClick:()=>s()&&t(),children:[u.jsx(h,{size:18}),u.jsx("span",{children:m})]},p))]}),u.jsx("div",{className:"bottom",children:u.jsxs("button",{className:"logout",onClick:()=>{r(),n("/login")},children:[u.jsx(g0,{size:16})," Logout"]})}),u.jsx("style",{jsx:"true",children:`
        .trainer-sidebar {
          height: 100%;
          width: 100%;
          background: linear-gradient(180deg, #0f172a, #1e293b);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logo {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #1d4ed8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }
        .title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #e2e8f0;
        }
        .nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 10px 10px;
          overflow-y: auto;
        }
        .nav-group-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8;
          padding: 14px 14px 4px 14px;
          text-transform: uppercase;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          color: #cbd5e1;
          text-decoration: none;
          border-radius: 8px;
          transition: 0.2s;
        }
        .nav-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }
        .nav-item.active {
          background: rgba(37, 99, 235, 0.2);
          color: #fff;
          box-shadow: inset 3px 0 0 #3b82f6;
        }
        .bottom {
          padding: 16px 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logout {
          background: #ef4444;
          color: #fff;
          border: none;
          width: 100%;
          padding: 12px 12px;
          border-radius: 8px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
        }
        .logout:hover {
          background: #dc2626;
        }
      `})]})}function iM({onMenuClick:e,trainerName:t="Trainer"}){return u.jsxs("header",{style:zn.header,children:[u.jsxs("div",{style:zn.left,children:[u.jsx("button",{onClick:e,"aria-label":"Toggle Sidebar",style:zn.iconBtn,children:u.jsx(v0,{size:22})}),u.jsx("span",{style:zn.logoText,children:"TRAINER HUB"})]}),u.jsxs("div",{style:zn.right,children:[u.jsx("div",{style:zn.searchWrapper,children:u.jsx("input",{type:"text",placeholder:"Search learners, courses...",style:zn.searchInput})}),u.jsx("button",{style:zn.iconBtn,"aria-label":"Notifications",children:u.jsx(Si,{size:20})}),u.jsx("div",{style:zn.avatar,children:t?t.charAt(0).toUpperCase():"T"})]})]})}const zn={header:{height:"64px",position:"fixed",top:0,left:0,right:0,background:"#fff",borderBottom:"1px solid #e2e8f0",boxShadow:"0 1px 6px rgba(0,0,0,0.05)",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px"},left:{display:"flex",alignItems:"center",gap:12},iconBtn:{background:"none",border:"none",cursor:"pointer",color:"#0f4f9f",padding:6,borderRadius:8},logoText:{fontWeight:900,fontSize:"1.1rem",color:"#0f4f9f",letterSpacing:.5},right:{display:"flex",alignItems:"center",gap:14},searchWrapper:{background:"#f1f5f9",borderRadius:8,padding:"6px 10px",display:"flex",alignItems:"center",gap:6},searchInput:{border:"none",outline:"none",background:"transparent",fontSize:"0.9rem",color:"#334155",width:200},avatar:{width:36,height:36,borderRadius:"50%",background:"#0f4f9f",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,cursor:"pointer",userSelect:"none"}};function oM(){const e=it(),t=gt(),[r,n]=b.useState(()=>{try{const k=localStorage.getItem("trainer");return k?JSON.parse(k):null}catch{return null}}),[l,s]=b.useState(!0),[d,p]=b.useState(typeof window<"u"?window.matchMedia("(max-width: 992px)").matches:!1),[h,m]=b.useState(!1),[g,x]=b.useState(!1);b.useEffect(()=>{r?s(!1):e("/login",{replace:!0})},[r,e]),b.useEffect(()=>{const k=window.matchMedia("(max-width: 992px)"),T=C=>{p(C.matches),C.matches&&(m(!1),x(!1))};return k.addEventListener("change",T),()=>k.removeEventListener("change",T)},[]),b.useEffect(()=>(d&&(document.body.style.overflow=g?"hidden":""),()=>document.body.style.overflow=""),[d,g]),b.useEffect(()=>{window.scrollTo(0,0),d&&x(!1)},[t.pathname,d]);const w=()=>{localStorage.removeItem("trainer"),n(null),s(!0),e("/login",{replace:!0})},S=(()=>{if(!r)return"Trainer";if(r.firstName)return r.firstName;if(r.name)return r.name;if(r.email){const k=r.email.split("@")[0];return k.charAt(0).toUpperCase()+k.slice(1)}return"Trainer"})();if(l||!r)return u.jsx("div",{style:ai.loading,children:"Loading Trainer Dashboard…"});const A=260,O=!d&&h?A:0;return u.jsxs("div",{style:{...ai.wrapper,"--desktop-sidebar-width":`${A}px`},children:[u.jsx(iM,{onMenuClick:()=>d?x(k=>!k):m(k=>!k),trainerName:S}),u.jsx("aside",{style:{...ai.sidebarShell,transform:d?g?"translateX(0)":"translateX(-100%)":h?"translateX(0)":"translateX(calc(-1 * var(--desktop-sidebar-width)))"},children:u.jsx(aM,{open:d?g:h,onClose:()=>x(!1),onLogout:w})}),d&&g&&u.jsx("div",{onClick:()=>x(!1),style:ai.backdrop,"aria-hidden":"true"}),u.jsxs("div",{style:{...ai.page,marginLeft:O},children:[u.jsx("main",{style:ai.main,children:u.jsx(fd,{})}),u.jsxs("footer",{style:ai.footer,children:["© ",new Date().getFullYear()," TalentMinds · Trainer Console"]})]})]})}const ai={wrapper:{minHeight:"100vh",background:"#f8fafc",display:"flex",flexDirection:"column"},loading:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:"#1e40af",background:"#f1f5f9"},sidebarShell:{position:"fixed",left:0,top:64,bottom:0,width:"var(--desktop-sidebar-width)",backgroundColor:"#0f172a",zIndex:2001,transition:"transform .3s ease"},backdrop:{position:"fixed",inset:0,background:"rgba(2,6,23,0.55)",zIndex:2e3,backdropFilter:"blur(2px)"},page:{flex:1,display:"flex",flexDirection:"column",minHeight:"100vh",transition:"margin-left .3s ease",paddingTop:"80px"},main:{flex:1,padding:"20px 24px",maxWidth:1300,width:"100%",margin:"0 auto"},footer:{padding:"12px 20px",textAlign:"center",fontSize:".85rem",color:"#64748b",borderTop:"1px solid #e2e8f0",background:"#f8fafc"}},jh=[{heading:"Get Certified. Get Ahead.",stats:["8,000,000+ Careers advanced","1,500+ Live classes every month","85% Report career success"],image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",primaryButton:"Explore Programs",secondaryButton:"For Businesses",primaryLink:"/explore-programs",secondaryLink:"/business"},{heading:"Advance Your Career With Professional Courses",stats:["Learn from Industry Experts","Flexible Online Learning","Real-World Projects"],image:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",primaryButton:"Browse Courses",secondaryButton:"Learn More",primaryLink:"/browse-all-courses",secondaryLink:"/learn-more-about-us"},{heading:"Empower Your Team With Enterprise Learning",stats:["Custom Learning Paths","Analytics & Insights","Dedicated Support"],image:"https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80",primaryButton:"Get Started",secondaryButton:"Learn More",primaryLink:"/business",secondaryLink:"/learn-more-about-us"}];function lM(){const e=it(),[t,r]=b.useState(0),n=b.useRef(null),[l,s]=b.useState(!1);b.useEffect(()=>(d(),()=>p()),[]);function d(){p(),n.current=setInterval(()=>{h()},7e3)}function p(){n.current&&(clearInterval(n.current),n.current=null)}function h(){s(!0),setTimeout(()=>{r(x=>(x+1)%jh.length),s(!1)},300)}function m(x){s(!0),setTimeout(()=>{r(x),s(!1)},300)}const g=jh[t];return u.jsxs("section",{className:"hero-section",onMouseEnter:p,onMouseLeave:d,children:[u.jsxs("div",{className:`hero-wrapper ${l?"fade":""}`,children:[u.jsxs("div",{className:"hero-left",children:[u.jsx("h1",{children:g.heading}),u.jsx("ul",{className:"hero-stats",children:g.stats.map((x,w)=>u.jsxs("li",{children:[u.jsx("span",{className:"check",children:"✔"})," ",x]},w))}),u.jsxs("div",{className:"hero-buttons",children:[u.jsx("button",{className:"primary-btn",onClick:()=>e(g.primaryLink),children:g.primaryButton}),u.jsx("button",{className:"secondary-btn",onClick:()=>e(g.secondaryLink),children:g.secondaryButton})]})]}),u.jsx("div",{className:"hero-right",children:u.jsx("img",{src:g.image,alt:g.heading,loading:"lazy",onError:x=>x.target.src="https://via.placeholder.com/600x400?text=Image+Unavailable"})})]}),u.jsx("div",{className:"hero-dots",children:jh.map((x,w)=>u.jsx("button",{className:`dot ${w===t?"active":""}`,onClick:()=>m(w)},w))}),u.jsx("style",{children:`
        .hero-section {
          width: 100%;
          background: #fff;
          overflow: hidden;
          padding: 60px 20px 40px;
          position: relative;
          margin-top:60px
        }

        .hero-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          transition: opacity 0.5s ease-in-out;
        }

        .hero-wrapper.fade {
          opacity: 0;
        }

        .hero-left {
          flex: 1;
          max-width: 550px;
        }

        .hero-left h1 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .hero-stats {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
          font-size: 1.1rem;
          color: #334155;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .check {
          color: #10b981;
          margin-right: 8px;
          font-weight: bold;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primary-btn {
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .primary-btn:hover {
          background: #1d4ed8;
        }

        .secondary-btn {
          background: transparent;
          color: #2563eb;
          border: 2px solid #2563eb;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .secondary-btn:hover {
          background: #eff6ff;
        }

        .hero-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-right img {
          width: 100%;
          max-width: 540px;
          height: auto;
          min-height: 320px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          transition: transform 0.6s ease;
        }

        .hero-section:hover .hero-right img {
          transform: scale(1.03);
        }

        .hero-dots {
          margin-top: 24px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #cbd5e1;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #2563eb;
          border-color: #2563eb;
        }

        @media (max-width: 900px) {
          .hero-wrapper {
            flex-direction: column-reverse;
            text-align: center;
          }
          .hero-right img {
            max-width: 420px;
            min-height: 260px;
          }
          .hero-left h1 {
            font-size: 2rem;
          }
          .hero-stats {
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .hero-left h1 {
            font-size: 1.6rem;
          }
          .primary-btn, .secondary-btn {
            font-size: 0.9rem;
            padding: 10px 18px;
          }
        }
      `})]})}const lg=[{name:"Google",logo:"https://logo.clearbit.com/google.com"},{name:"Amazon",logo:"https://logo.clearbit.com/amazon.com"},{name:"Microsoft",logo:"https://logo.clearbit.com/microsoft.com"},{name:"Accenture",logo:"https://logo.clearbit.com/accenture.com"},{name:"Capgemini",logo:"https://logo.clearbit.com/capgemini.com"},{name:"Cognizant",logo:"https://logo.clearbit.com/cognizant.com"},{name:"TCS",logo:"https://logo.clearbit.com/tcs.com"},{name:"Infosys",logo:"https://logo.clearbit.com/infosys.com"},{name:"Wipro",logo:"https://logo.clearbit.com/wipro.com"},{name:"IBM",logo:"https://logo.clearbit.com/ibm.com"},{name:"HCLTech",logo:"https://logo.clearbit.com/hcltech.com"}],sM=lg.concat(lg),cM=lg.length;function uM(){const e={"--logo-count":cM};return u.jsxs("div",{className:"marquee-wrapper",children:[u.jsxs("div",{className:"marquee-inner wrap",children:[u.jsx("h2",{className:"marquee-title",children:"Trusted by TalentMinds Alumni at these Top Companies"}),u.jsx("div",{className:"marquee","aria-hidden":"true",style:e,children:u.jsx("div",{className:"track",children:sM.map((t,r)=>u.jsx("div",{className:"logo",children:u.jsx("img",{src:t.logo,alt:t.name,title:t.name,loading:"lazy"})},r))})})]}),u.jsx("style",{children:`
        /* Setup CSS Variables for dynamic width and animation */
        :root {
          --marquee-speed: 28s; /* Total time to complete one loop */
          --logo-gap: 36px;
          --logo-count: 11; /* Default count if JS fails, but JS overrides this */
        }
        .marquee-wrapper { 
            padding: 48px 0; 
            background: #f8fafc; 
            overflow: hidden; 
            user-select: none; /* Prevent selection */
        }
        .wrap { 
            max-width:1300px; /* Slightly wider wrap for more logos to show */
            margin:0 auto; 
            padding: 0 16px; 
            box-sizing:border-box; 
        }
        .marquee-title { 
            color:#0f172a; 
            font-size:1.6rem; 
            font-weight:700; 
            margin:0 0 30px; 
            text-align:center; /* Centered title is more common for this section */
        }

        .marquee { 
            overflow:hidden; 
            width:100%; 
        }
        
        .track {
          display:flex;
          flex-wrap: nowrap; 
          align-items:center;
          gap: var(--logo-gap);
          /* CRITICAL FIX: Calculates the width needed for one full cycle (2x logo set) */
          width: calc((var(--logo-width, 140px) + var(--logo-gap)) * var(--logo-count) * 2); 
          animation: scroll var(--marquee-speed) linear infinite;
        }

        /* PAUSE ON HOVER */
        .marquee:hover .track {
            animation-play-state: paused;
        }

        .logo { 
            flex: 0 0 auto; 
            display:flex; 
            align-items:center; 
            justify-content:center;
            padding: 0 10px; /* Added internal padding for hover area */
        }
        
        .logo img { 
            height:48px; 
            width:auto; 
            max-width: 140px; /* Set a max width for large logos */
            object-fit:contain; 
            display:block; 
            filter: grayscale(100%); /* Mute the colors */
            opacity: 0.4; /* Soften the logos */
            transition: all 0.3s ease;
        }

        .logo img:hover {
            filter: grayscale(0%); /* Restore color on hover */
            opacity: 1; /* Full opacity on hover */
            cursor: pointer;
        }

        @keyframes scroll {
          /* Translates the full width of one set of logos */
          0% { transform: translateX(0); }
          100% { 
            transform: translateX(calc(-1 * (var(--logo-width, 140px) + var(--logo-gap)) * var(--logo-count))); 
          }
        }

        /* responsive */
        @media (max-width: 1000px) {
           .marquee-title { font-size:1.4rem; }
        }
        @media (max-width: 900px) {
          :root { --logo-gap: 24px; --marquee-speed: 24s; }
          .logo img { height:40px; }
          .marquee-title { font-size:1.25rem; margin-bottom: 20px; }
        }

        @media (max-width: 420px) {
          :root { --logo-gap: 16px; --marquee-speed: 20s; }
          .logo img { height:34px; }
          .marquee-wrapper { padding: 28px 0; }
        }
      `})]})}const Rn=[{name:"Sai Shashank",role:"Full Stack Developer at Wipro",text:"TalentMinds transformed my technical foundation. The full-stack program was practical, and the mentors ensured I could build scalable applications confidently.",image:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80"},{name:"Yugendar G",role:"Java Backend Developer at Hypergrid Technology Pvt. Ltd.",text:"The real-time backend projects and mentor sessions helped me strengthen my Java and Spring Boot skills, which directly contributed to my job success.",image:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80"},{name:"Manikanta",role:"Frontend Developer at HealthOnus",text:"TalentMinds helped me master frontend development from scratch. The React projects, design reviews, and guidance shaped my portfolio beautifully.",image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80"},{name:"Sai Kiran",role:"Full Stack Developer at Hypergrid Technology Pvt. Ltd.",text:"The project-based approach and deep mentor involvement made me confident in both frontend and backend stacks. I landed my dream role fast!",image:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80"}];function dM(){const[e,t]=b.useState(0),[r,n]=b.useState(!1),l=b.useRef();b.useEffect(()=>(r||(l.current=setInterval(()=>{t(d=>(d+1)%Rn.length)},6e3)),()=>clearInterval(l.current)),[r]);const s=d=>{t(p=>(p+d+Rn.length)%Rn.length)};return u.jsxs("section",{className:"tm-testimonials-section",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[u.jsx("div",{className:"tm-bg-gradient"}),u.jsx("h2",{className:"tm-testimonials-title",children:"What Our Learners Say"}),u.jsxs("div",{className:"tm-testimonials-carousel",children:[u.jsx("button",{className:"tm-arrow tm-arrow-left",onClick:()=>s(-1),children:"‹"}),u.jsxs("div",{className:"tm-testimonial-card slide-in",children:[u.jsx("div",{className:"tm-img-wrap",children:u.jsx("img",{src:Rn[e].image,alt:Rn[e].name,className:"tm-testimonial-img"})}),u.jsxs("p",{className:"tm-testimonial-text",children:["“",Rn[e].text,"”"]}),u.jsxs("div",{className:"tm-testimonial-meta",children:[u.jsx("span",{className:"tm-testimonial-name",children:Rn[e].name}),u.jsx("span",{className:"tm-testimonial-role",children:Rn[e].role})]})]},e),u.jsx("button",{className:"tm-arrow tm-arrow-right",onClick:()=>s(1),children:"›"})]}),u.jsx("div",{className:"tm-dots",children:Rn.map((d,p)=>u.jsx("span",{className:`tm-dot${p===e?" active":""}`,onClick:()=>t(p)},p))}),u.jsx("style",{children:`
        .tm-testimonials-section {
          position: relative;
          overflow: hidden;
          padding: 120px 20px;
          text-align: center;
          font-family: 'Inter', sans-serif;
          color: #0f172a;
          z-index: 1;
        }

        .tm-bg-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 20%, #e0f2fe, transparent 40%),
                      radial-gradient(circle at 80% 80%, #fde68a, transparent 40%),
                      linear-gradient(120deg, #e0f2fe, #fffaf0, #fef3c7);
          background-size: 250% 250%;
          animation: gradientShift 15s ease infinite;
          z-index: -2;
          opacity: 0.95;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .tm-testimonials-title {
          font-size: 2.7rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 70px;
          text-shadow: 0 2px 8px rgba(11, 77, 163, 0.2);
        }

        .tm-testimonials-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .tm-testimonial-card {
          background: rgba(255, 255, 255, 0.96);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.15);
          padding: 50px 30px;
          max-width: 420px;
          text-align: center;
          transition: all 0.4s ease;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tm-testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(11, 77, 163, 0.25);
        }

        .slide-in {
          animation: slideIn 0.8s ease-in-out;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tm-img-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-bottom: 25px;
        }

        .tm-testimonial-img {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #0b4da3;
          box-shadow: 0 0 25px rgba(11, 77, 163, 0.25);
          background: #fff;
        }

        .tm-testimonial-text {
          font-size: 1.1rem;
          color: #1e293b;
          margin-bottom: 25px;
          line-height: 1.6;
          font-style: italic;
          max-width: 360px;
        }

        .tm-testimonial-name {
          font-weight: 700;
          color: #0b4da3;
          font-size: 1.1rem;
          display: block;
          margin-top: 5px;
        }

        .tm-testimonial-role {
          color: #f59e42;
          font-size: 0.95rem;
          display: block;
          margin-top: 3px;
        }

        .tm-arrow {
          background: rgba(255, 255, 255, 0.85);
          border: none;
          border-radius: 50%;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: #0b4da3;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tm-arrow:hover {
          background: #0b4da3;
          color: #fff;
          transform: scale(1.1);
        }

        .tm-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 40px;
        }

        .tm-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tm-dot.active {
          background: #f59e42;
          transform: scale(1.3);
        }

        @media (max-width: 768px) {
          .tm-testimonials-title { font-size: 2.1rem; }
          .tm-testimonial-card { max-width: 90%; padding: 35px 20px; }
          .tm-testimonial-img { width: 90px; height: 90px; }
        }
      `})]})}const fM=[{name:"Udemy",logo:"https://logo.clearbit.com/udemy.com",rating:4.7},{name:"Coursera",logo:"https://logo.clearbit.com/coursera.org",rating:4.8},{name:"Trustpilot",logo:"https://logo.clearbit.com/trustpilot.com",rating:4.9}];function pM(){const[r,n]=b.useState(0),[l,s]=b.useState(0),[d,p]=b.useState(!1);b.useEffect(()=>{const m=document.querySelector(".lt-section");new IntersectionObserver(x=>{x[0].isIntersecting&&p(!0)},{threshold:.2}).observe(m)},[]),b.useEffect(()=>{if(!d)return;const g=setInterval(()=>{n(x=>x<125e3?Math.min(x+Math.ceil((125e3-x)/30),125e3):125e3),s(x=>x<95?Math.min(x+Math.ceil((95-x)/10),95):95)},40);return()=>clearInterval(g)},[d]);const h=m=>m===0?"00,000":m.toLocaleString();return u.jsxs("section",{className:`lt-section ${d?"visible":""}`,children:[u.jsxs("div",{className:"lt-container",children:[u.jsxs("h2",{className:"lt-title",children:["Trusted by"," ",u.jsx("span",{className:"lt-highlight",children:u.jsxs("span",{className:"lt-count",children:[h(r),"+"]})})," ","Learners Worldwide"]}),u.jsx("p",{className:"lt-subtitle",children:"Empowering professionals across 100+ countries with world-class tech and business skills."}),u.jsxs("div",{className:"lt-metrics-bar",children:[u.jsxs("div",{className:"lt-metric-item",children:[u.jsxs("span",{className:"lt-metric-number",children:[l,"+"]}),u.jsx("p",{className:"lt-metric-label",children:"Hiring Partners"})]}),u.jsx("div",{className:"lt-separator"}),u.jsxs("div",{className:"lt-metric-item",children:[u.jsx("span",{className:"lt-metric-number",children:"95%"}),u.jsx("p",{className:"lt-metric-label",children:"Career Success Rate"})]}),u.jsx("div",{className:"lt-separator"}),u.jsxs("div",{className:"lt-metric-item",children:[u.jsx("span",{className:"lt-metric-number",children:"2M+"}),u.jsx("p",{className:"lt-metric-label",children:"Hours of Learning Delivered"})]})]}),u.jsx("h3",{className:"lt-ratings-title",children:"Rated Excellent on Leading Platforms"}),u.jsx("div",{className:"lt-ratings",children:fM.map((m,g)=>u.jsxs("div",{className:"lt-rating-card",children:[u.jsxs("div",{className:"lt-rating-score",children:[m.rating," ",u.jsx("span",{className:"lt-star",children:"★"})]}),u.jsxs("div",{className:"lt-rating-logo",children:[u.jsx("img",{src:m.logo,alt:m.name,onError:x=>x.target.src="https://via.placeholder.com/100x40?text=Logo"}),u.jsx("span",{children:m.name})]})]},g))})]}),u.jsx("style",{children:`
        .lt-section {
          background: radial-gradient(circle at top right, #e0f2fe, #f8fafc);
          text-align: center;
          padding: 90px 20px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease-out;
        }
        .lt-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .lt-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .lt-title {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 10px;
        }
        .lt-subtitle {
          font-size: 1.2rem;
          color: #475569;
          margin-bottom: 50px;
        }
        .lt-highlight {
          color: #f59e0b;
        }
        .lt-count {
          font-variant-numeric: tabular-nums;
          font-weight: 900;
        }

        /* --- Metrics --- */
        .lt-metrics-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }
        .lt-metric-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 180px;
        }
        .lt-metric-number {
          font-size: 3rem;
          font-weight: 800;
          color: #2563eb;
          line-height: 1.1;
        }
        .lt-metric-label {
          color: #475569;
          font-size: 1.05rem;
          margin-top: 5px;
        }
        .lt-separator {
          width: 1px;
          height: 70px;
          background: #cbd5e1;
        }

        /* --- Ratings --- */
        .lt-ratings-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 25px;
        }
        .lt-ratings {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 35px;
          flex-wrap: wrap;
        }
        .lt-rating-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(11, 77, 163, 0.1);
          padding: 26px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
        }
        .lt-rating-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.15);
        }
        .lt-rating-score {
          font-size: 2.2rem;
          font-weight: 700;
          color: #0b4da3;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 10px;
        }
        .lt-star {
          color: #f59e0b;
        }
        .lt-rating-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .lt-rating-logo img {
          height: 32px;
          width: auto;
          border-radius: 6px;
        }
        .lt-rating-logo span {
          color: #1e293b;
          font-weight: 600;
          font-size: 1rem;
        }

        /* --- Responsiveness --- */
        @media (max-width: 768px) {
          .lt-title { font-size: 2rem; }
          .lt-metric-number { font-size: 2.3rem; }
          .lt-metrics-bar { gap: 30px; }
          .lt-separator { display: none; }
          .lt-rating-card { padding: 22px 28px; }
        }
        @media (max-width: 480px) {
          .lt-section { padding: 60px 20px; }
          .lt-title { font-size: 1.8rem; }
          .lt-subtitle { font-size: 1rem; }
          .lt-metric-number { font-size: 2rem; }
        }
      `})]})}function hM(){return u.jsxs("section",{className:"sb-banner-section",children:[u.jsxs("div",{className:"sb-banner-content",children:[u.jsxs("div",{className:"sb-banner-left",children:[u.jsxs("div",{className:"sb-banner-brand",children:[u.jsx("span",{className:"sb-logo-main",children:"HG's"}),u.jsx("span",{className:"sb-logo-highlight",children:"TalentMinds"}),u.jsx("span",{className:"sb-logo-divider",children:"|"}),u.jsx("span",{className:"sb-logo-boost",children:"SkillBoost"})]}),u.jsxs("h2",{children:["Boost Your Skills with"," ",u.jsx("span",{className:"sb-highlight",children:"Free, Career-Ready Programs"})]}),u.jsx("p",{children:"Explore 300+ expert-led courses designed to elevate your career. Learn in-demand skills for free and stay ahead in today’s job market."}),u.jsx("a",{href:"/courses?free=true",className:"sb-banner-btn",children:"Explore Free Programs →"})]}),u.jsx("div",{className:"sb-banner-right",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",alt:"Learning and Skill Growth",className:"sb-banner-img"})})]}),u.jsx("style",{children:`
        .sb-banner-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
          border-radius: 20px;
          border: 1.5px solid #dbeafe;
          box-shadow: 0 4px 24px rgba(37, 99, 235, 0.12);
          margin: 60px auto;
          max-width: 1200px;
          overflow: hidden;
        }

        .sb-banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 64px 72px;
          gap: 48px;
        }

        .sb-banner-left {
          flex: 1.2;
        }

        .sb-banner-brand {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 1.7rem;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .sb-logo-main {
          color: #fbbf24;
          font-weight: 900;
        }

        .sb-logo-highlight {
          color: #2563eb;
          font-weight: 900;
        }

        .sb-logo-divider {
          color: #94a3b8;
          font-weight: 600;
        }

        .sb-logo-boost {
          color: #f97316;
          font-weight: 800;
        }

        .sb-banner-left h2 {
          font-size: 2.4rem;
          color: #1e3a8a;
          font-weight: 800;
          margin-bottom: 18px;
          line-height: 1.2;
        }

        .sb-highlight {
          color: #2563eb;
        }

        .sb-banner-left p {
          font-size: 1.15rem;
          color: #334155;
          margin-bottom: 32px;
          max-width: 560px;
          line-height: 1.6;
        }

        .sb-banner-btn {
          background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 14px 36px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(37,99,235,0.25);
          transition: all 0.25s ease;
          display: inline-block;
        }

        .sb-banner-btn:hover {
          background: linear-gradient(90deg, #1d4ed8 0%, #3b82f6 100%);
          transform: translateY(-2px);
        }

        .sb-banner-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .sb-banner-img {
          width: 100%;
          max-width: 400px;
          height: auto;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 6px 28px rgba(37,99,235,0.2);
          transition: transform 0.3s ease;
        }

        .sb-banner-img:hover {
          transform: scale(1.03);
        }

        /* RESPONSIVE */
        @media (max-width: 950px) {
          .sb-banner-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 40px 10vw;
          }

          .sb-banner-left {
            flex: unset;
          }

          .sb-banner-img {
            width: 100%;
            max-width: 420px;
            height: auto;
            margin-top: 16px;
          }

          .sb-banner-left p {
            margin: 0 auto 28px;
          }
        }

        @media (max-width: 600px) {
          .sb-banner-section {
            margin: 32px 0;
          }

          .sb-banner-content {
            padding: 28px 6vw;
          }

          .sb-banner-brand {
            font-size: 1.2rem;
            justify-content: center;
          }

          .sb-banner-left h2 {
            font-size: 1.5rem;
          }

          .sb-banner-left p {
            font-size: 1rem;
          }

          .sb-banner-btn {
            font-size: 1rem;
            padding: 12px 28px;
          }
        }
      `})]})}const mM=[{icon:"👨‍🏫",title:"Learn from Industry Experts",description:"All our courses are designed and delivered by top professionals from global tech companies and startups.",color:"#0b4da3"},{icon:"💻",title:"Hands-on Project Learning",description:"Build portfolio-ready real-world projects. Every course includes interactive labs and case studies.",color:"#f59e0b"},{icon:"🎓",title:"Globally Recognized Certification",description:"Earn certificates verified by leading organizations and share them directly on LinkedIn or your CV.",color:"#10b981"},{icon:"🚀",title:"Career-Focused Learning Path",description:"Get personalized learning plans and interview prep with career mentors who help you achieve your goals.",color:"#8b5cf6"}];function gM(){return b.useEffect(()=>{const e=document.querySelectorAll(".vp-card"),t=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&n.target.classList.add("visible")})},{threshold:.2});e.forEach(r=>t.observe(r))},[]),u.jsxs("section",{className:"vp-section",children:[u.jsxs("div",{className:"vp-container",children:[u.jsx("h2",{className:"vp-title",children:"Why Professionals Choose TalentMinds"}),u.jsx("p",{className:"vp-subtitle",children:"An online learning platform designed for career transformation — combining expert-led content, real-world practice, and personalized mentorship."}),u.jsx("div",{className:"vp-grid",children:mM.map((e,t)=>u.jsxs("div",{className:"vp-card fade-up",children:[u.jsx("div",{className:"vp-icon-wrap",style:{backgroundColor:e.color},children:u.jsx("span",{className:"vp-icon",children:e.icon})}),u.jsx("h3",{className:"vp-card-title",children:e.title}),u.jsx("p",{className:"vp-card-description",children:e.description})]},t))})]}),u.jsx("style",{children:`
        .vp-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7faff 100%);
          padding: 80px 20px;
          text-align: center;
          overflow: hidden;
        }
        .vp-container { max-width: 1200px; margin: 0 auto; }
        .vp-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 15px;
        }
        .vp-subtitle {
          font-size: 1.15rem;
          color: #4b5563;
          margin-bottom: 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .vp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }
        .vp-card {
          background: #fff;
          padding: 30px;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 20px rgba(11, 77, 163, 0.05);
          text-align: left;
          transition: all 0.6s ease, opacity 0.6s ease;
          opacity: 0;
          transform: translateY(30px);
        }
        .vp-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .vp-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          color: #fff;
          font-size: 1.6rem;
        }
        .vp-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #111827;
        }
        .vp-card-description {
          color: #4b5563;
          font-size: 0.98rem;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .vp-title { font-size: 2rem; }
          .vp-subtitle { font-size: 1rem; }
          .vp-card { text-align: center; }
          .vp-icon-wrap { margin: 0 auto 15px; }
        }
      `})]})}const vM=[{metric:"₹9.6 LPA",description:"Average starting salary of graduates",icon:"💼"},{metric:"92%",description:"Placed within 6 months of course completion",icon:"📈"},{metric:"200+",description:"Top hiring partners worldwide",icon:"🏢"},{metric:"1.2M+",description:"Learners advanced their careers with TalentMinds",icon:"🌍"}];function xM(){const e=it();return b.useEffect(()=>{const t=document.querySelectorAll(".co-item"),r=new IntersectionObserver(n=>{n.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},{threshold:.2});t.forEach(n=>r.observe(n))},[]),u.jsxs("section",{className:"co-section",children:[u.jsxs("div",{className:"co-container",children:[u.jsx("h2",{className:"co-title",children:"Career Outcomes That Define Success"}),u.jsx("p",{className:"co-subtitle",children:"We don’t just teach — we empower transformation. Discover how HG’s TalentMinds learners are getting placed, promoted, and leading innovation globally."}),u.jsx("div",{className:"co-grid",children:vM.map((t,r)=>u.jsxs("div",{className:"co-item fade-up",children:[u.jsx("div",{className:"co-icon",children:t.icon}),u.jsxs("div",{children:[u.jsx("h3",{className:"co-metric",children:t.metric}),u.jsx("p",{className:"co-description",children:t.description})]})]},r))}),u.jsx("button",{className:"co-cta-btn",onClick:()=>e("placement-report"),children:"View Full Placement Report →"})]}),u.jsx("style",{children:`
        .co-section {
          background: linear-gradient(135deg, #0b4da3, #2563eb);
          color: #fff;
          padding: 90px 20px;
          text-align: center;
        }
        .co-container { max-width: 1100px; margin: 0 auto; }
        .co-title { font-size: 2.4rem; font-weight: 800; margin-bottom: 10px; }
        .co-subtitle { color: #dbeafe; font-size: 1.1rem; margin-bottom: 60px; line-height: 1.6; }

        .co-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }
        .co-item {
          background: rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 28px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-align: left;
          transition: all 0.6s ease;
          opacity: 0;
          transform: translateY(40px);
        }
        .co-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .co-icon {
          font-size: 2.5rem;
          background: #fbbf24;
          color: #0b4da3;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .co-metric { font-size: 1.8rem; font-weight: 700; color: #fbbf24; }
        .co-description { font-size: 1rem; color: #e0f2fe; margin-top: 4px; }

        .co-cta-btn {
          background: #fbbf24;
          color: #0b4da3;
          border: none;
          padding: 16px 40px;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          box-shadow: 0 6px 18px rgba(251,191,36,0.4);
        }
        .co-cta-btn:hover { background: #facc15; transform: translateY(-3px); }

        @media (max-width: 700px) {
          .co-title { font-size: 2rem; }
          .co-grid { gap: 20px; }
          .co-icon { width: 60px; height: 60px; font-size: 2rem; }
        }
      `})]})}const Sh=[{name:"Google",logo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"},{name:"Amazon",logo:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"},{name:"Accenture",logo:"https://upload.wikimedia.org/wikipedia/commons/5/59/Accenture.svg"},{name:"Microsoft",logo:"https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"},{name:"IBM",logo:"https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"},{name:"Deloitte",logo:"https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg"},{name:"KPMG",logo:"https://upload.wikimedia.org/wikipedia/commons/8/8e/KPMG_logo.svg"},{name:"TCS",logo:"https://upload.wikimedia.org/wikipedia/commons/5/52/Tata_Consultancy_Services_Logo.svg"},{name:"Infosys",logo:"https://upload.wikimedia.org/wikipedia/commons/8/8e/Infosys_logo.svg"},{name:"Capgemini",logo:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Capgemini_201x_logo.svg"}];function yM(){const[e,t]=b.useState([]);b.useEffect(()=>{const n=document.querySelectorAll(".te-logo-card"),l=new IntersectionObserver(s=>{s.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")})},{threshold:.1});n.forEach(s=>l.observe(s))},[]);const r=n=>{t(l=>[...l,n])};return u.jsxs("section",{className:"te-section",children:[u.jsxs("div",{className:"te-container",children:[u.jsx("h2",{className:"te-title",children:"Our Learners Work With Leading Global Employers"}),u.jsx("p",{className:"te-subtitle",children:"Trusted by recruiters and global enterprises for job-ready, project-proven talent."}),u.jsx("div",{className:"te-logos-grid",children:Sh.map((n,l)=>u.jsxs("div",{className:"te-logo-card fade-up",children:[!e.includes(l)&&u.jsx("div",{className:"te-logo-skeleton"}),u.jsx("img",{src:n.logo,alt:n.name,loading:"lazy",onLoad:()=>r(l),onError:s=>{s.target.onerror=null,s.target.src=`https://via.placeholder.com/120x60?text=${n.name}`},style:{display:e.includes(l)?"block":"none"}})]},l))}),u.jsx("div",{className:"te-scroll-container",children:u.jsx("div",{className:"te-scroll-track",children:Sh.concat(Sh).map((n,l)=>u.jsx("div",{className:"te-scroll-logo",children:u.jsx("img",{src:n.logo,alt:n.name,onError:s=>{s.target.onerror=null,s.target.src=`https://via.placeholder.com/120x60?text=${n.name}`}})},l))})})]}),u.jsx("style",{children:`
        /* --- Section --- */
        .te-section {
          background: linear-gradient(180deg, #ffffff 0%, #f0f5fa 100%);
          padding: 90px 20px;
          text-align: center;
          overflow: hidden;
        }

        .te-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .te-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 10px;
        }

        .te-subtitle {
          color: #475569;
          font-size: 1.1rem;
          margin-bottom: 50px;
        }

        /* --- Grid (Desktop) --- */
        .te-logos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 35px;
          justify-items: center;
          align-items: center;
          transition: all 0.3s ease;
        }

        .te-logo-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          width: 160px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .te-logo-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .te-logo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(11, 77, 163, 0.15);
          border-color: #2563eb;
        }

        .te-logo-card img {
          max-width: 120px;
          max-height: 60px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .te-logo-card:hover img {
          filter: grayscale(0%);
          opacity: 1;
        }

        /* --- Skeleton --- */
        .te-logo-skeleton {
          position: absolute;
          width: 60%;
          height: 30%;
          background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
          background-size: 200% 100%;
          border-radius: 8px;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* --- Mobile Scrolling --- */
        .te-scroll-container {
          display: none;
          position: relative;
          overflow: hidden;
          margin-top: 40px;
        }

        .te-scroll-track {
          display: flex;
          align-items: center;
          animation: scrollTrack 25s linear infinite;
          width: max-content;
        }

        @keyframes scrollTrack {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .te-scroll-logo {
          flex: 0 0 auto;
          margin: 0 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .te-scroll-logo img {
          max-height: 60px;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .te-scroll-logo img:hover {
          filter: grayscale(0%);
          opacity: 1;
        }

        /* --- Responsive --- */
        @media (max-width: 850px) {
          .te-logos-grid { display: none; }
          .te-scroll-container { display: block; }
          .te-title { font-size: 2rem; }
        }

        @media (max-width: 480px) {
          .te-section { padding: 60px 15px; }
          .te-scroll-logo img { max-height: 50px; }
        }
      `})]})}function zA(){const e=["https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg","https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg","https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg","https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_logo.svg","https://upload.wikimedia.org/wikipedia/commons/1/19/Infosys_logo.svg"],t=[{name:"Ritika Sharma",role:"Data Analyst, Amazon",story:"After completing the Data Science program, Ritika transitioned from a teaching role to a data analytics position at Amazon with a 120% salary increase."},{name:"Mohammed Arif",role:"AI Engineer, Microsoft",story:"Arif upskilled through the AI & ML Essentials course, securing an AI Engineer position at Microsoft within 5 months of graduation."},{name:"Priya Menon",role:"UX Designer, IBM",story:"Priya completed the UI/UX specialization and now leads design initiatives at IBM’s innovation hub in Bengaluru."}];return u.jsxs("section",{className:"placement-page",children:[u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"TalentMinds Placement & Career Success Report"}),u.jsx("p",{className:"subtitle",children:"Discover the measurable impact of HG’s TalentMinds learning programs — where real skills meet real outcomes."}),u.jsxs("div",{className:"metrics",children:[u.jsxs("div",{className:"metric",children:[u.jsx("h3",{children:"₹9.6 LPA"}),u.jsx("p",{children:"Average CTC for placed learners"})]}),u.jsxs("div",{className:"metric",children:[u.jsx("h3",{children:"92%"}),u.jsx("p",{children:"Placement rate within 6 months"})]}),u.jsxs("div",{className:"metric",children:[u.jsx("h3",{children:"200+"}),u.jsx("p",{children:"Active hiring partners"})]}),u.jsxs("div",{className:"metric",children:[u.jsx("h3",{children:"1.2M+"}),u.jsx("p",{children:"Careers accelerated globally"})]})]}),u.jsx("h2",{children:"Alumni Success Stories"}),u.jsx("div",{className:"alumni-grid",children:t.map((r,n)=>u.jsxs("div",{className:"alumni-card",children:[u.jsx("h4",{children:r.name}),u.jsx("p",{className:"role",children:r.role}),u.jsxs("p",{className:"story",children:["“",r.story,"”"]})]},n))}),u.jsx("h2",{children:"Our Top Hiring Partners"}),u.jsx("div",{className:"logos",children:e.map((r,n)=>u.jsx("img",{src:r,alt:"Partner logo"},n))}),u.jsx("button",{className:"download-btn",onClick:()=>alert("📄 Downloading the official 2025 Placement Report..."),children:"Download Full Placement Report (PDF) →"})]}),u.jsx("style",{children:`
        .placement-page {
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        .container { max-width: 1150px; margin: 0 auto; }
        h1 { color: #0b4da3; font-size: 2.6rem; font-weight: 800; margin-bottom: 10px; }
        .subtitle { color: #475569; font-size: 1.1rem; margin-bottom: 50px; }

        .metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-bottom: 70px;
        }
        .metric {
          background: #fff;
          border-radius: 14px;
          padding: 30px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }
        .metric h3 { color: #2563eb; font-size: 2rem; font-weight: 800; }
        .metric p { color: #475569; margin-top: 4px; }

        .alumni-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin: 40px 0 60px;
        }
        .alumni-card {
          background: #fff;
          border-radius: 14px;
          padding: 25px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          text-align: left;
        }
        .alumni-card h4 { color: #0b4da3; margin-bottom: 4px; }
        .role { color: #2563eb; font-weight: 600; margin-bottom: 8px; }
        .story { color: #475569; font-style: italic; }

        .logos {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
          margin: 30px 0 60px;
        }
        .logos img {
          width: 120px;
          height: auto;
          filter: grayscale(1);
          opacity: 0.9;
          transition: all 0.3s ease;
        }
        .logos img:hover { filter: grayscale(0); opacity: 1; }

        .download-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 16px 38px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 18px rgba(37,99,235,0.4);
        }
        .download-btn:hover {
          background: #1d4ed8;
          transform: translateY(-3px);
        }

        @media (max-width: 700px) {
          h1 { font-size: 2rem; }
          .metric h3 { font-size: 1.6rem; }
        }
      `})]})}const aw=[{icon:"📝",title:"Enroll in Your Path",desc:"Choose your career-aligned learning path curated by experts in tech and leadership."},{icon:"💡",title:"Learn by Doing",desc:"Build hands-on projects, case studies, and simulations to apply what you learn immediately."},{icon:"🎯",title:"Get Mentored",desc:"Work 1-on-1 with real industry professionals who guide you through challenges and code reviews."},{icon:"🚀",title:"Launch Your Career",desc:"Leverage our placement network, resume sessions, and mock interviews to land your dream job."}];function bM(){return u.jsxs("section",{className:"lj-section",children:[u.jsxs("div",{className:"lj-container",children:[u.jsx("h2",{className:"lj-title",children:"How TalentMinds Works"}),u.jsx("p",{className:"lj-subtitle",children:"A step-by-step journey designed to transform learners into job-ready professionals."}),u.jsx("div",{className:"lj-grid",children:aw.map((e,t)=>u.jsxs("div",{className:"lj-card",children:[u.jsx("div",{className:"lj-icon",children:e.icon}),u.jsx("h3",{children:e.title}),u.jsx("p",{children:e.desc}),t<aw.length-1&&u.jsx("div",{className:"lj-arrow",children:"→"})]},t))})]}),u.jsx("style",{children:`
        .lj-section {
          background: linear-gradient(180deg, #ffffff 0%, #f0f4ff 100%);
          padding: 90px 20px;
          text-align: center;
        }
        .lj-container { max-width: 1200px; margin: 0 auto; }
        .lj-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 10px;
        }
        .lj-subtitle {
          font-size: 1.15rem;
          color: #475569;
          margin-bottom: 60px;
        }
        .lj-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: stretch;
          gap: 40px;
          position: relative;
        }
        .lj-card {
          background: #fff;
          border-radius: 16px;
          padding: 30px 24px;
          max-width: 260px;
          box-shadow: 0 6px 18px rgba(11, 77, 163, 0.08);
          position: relative;
          transition: all 0.3s ease;
        }
        .lj-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(37, 99, 235, 0.15);
        }
        .lj-icon {
          font-size: 42px;
          margin-bottom: 15px;
        }
        .lj-card h3 {
          color: #0b4da3;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .lj-card p {
          color: #475569;
          font-size: 1rem;
          line-height: 1.5;
        }
        .lj-arrow {
          position: absolute;
          right: -25px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 28px;
          color: #2563eb;
          font-weight: 700;
        }
        @media (max-width: 900px) {
          .lj-grid { flex-direction: column; align-items: center; }
          .lj-card { max-width: 90%; }
          .lj-arrow { display: none; }
        }
      `})]})}const wM=[{name:"Anusha",role:"Senior Network Engineer & Cloud Mentor | SIFY Technologies Pvt. Ltd.",exp:"8+ Years of Experience",image:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"},{name:"Sai Kiran",role:"Full Stack Mentor | Hypergrid Technologies Pvt. Ltd.",exp:"6+ Years of Experience",image:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80"},{name:"Manikanta",role:"Frontend Mentor | Health On Us",exp:"5+ Years of Experience",image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80"},{name:"Yugendar",role:"Java Backend Mentor | Hypergrid Technologies Pvt. Ltd.",exp:"7+ Years of Experience",image:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80"},{name:"Sai Shashank",role:"Full Stack Engineering Mentor | Olive Crypto Pvt. Ltd.",exp:"9+ Years of Experience",image:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80"}];function jM(){return u.jsxs("section",{className:"ms-section",children:[u.jsxs("div",{className:"ms-container",children:[u.jsx("h2",{className:"ms-title",children:"Learn from Our Expert Mentors"}),u.jsx("p",{className:"ms-subtitle",children:"Our mentors are real-world professionals who’ve guided hundreds of learners to excel in their careers with hands-on expertise and personalized coaching."}),u.jsx("div",{className:"ms-grid",children:wM.map((e,t)=>u.jsxs("div",{className:"ms-card",children:[u.jsx("div",{className:"ms-image-wrap",children:u.jsx("img",{src:e.image,alt:e.name})}),u.jsx("h3",{children:e.name}),u.jsx("p",{className:"ms-role",children:e.role}),u.jsx("p",{className:"ms-exp",children:e.exp})]},t))})]}),u.jsx("style",{children:`
        .ms-section {
          background: linear-gradient(180deg, #f9fbff 0%, #eef4ff 100%);
          text-align: center;
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
        }

        .ms-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ms-title {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 15px;
          background: linear-gradient(90deg, #0b4da3 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ms-subtitle {
          color: #475569;
          margin-bottom: 60px;
          font-size: 1.15rem;
          line-height: 1.6;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
        }

        .ms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 35px;
          justify-items: center;
        }

        .ms-card {
          background: #fff;
          border-radius: 18px;
          padding: 28px 20px;
          box-shadow: 0 8px 22px rgba(11,77,163,0.08);
          transition: all 0.4s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .ms-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(37,99,235,0.1), rgba(245,158,66,0.1));
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .ms-card:hover {
          transform: translateY(-10px);
          border-color: #2563eb;
          box-shadow: 0 14px 30px rgba(37,99,235,0.15);
        }

        .ms-card:hover::before {
          opacity: 1;
        }

        .ms-image-wrap {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 18px;
          border: 3px solid #2563eb;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .ms-card:hover .ms-image-wrap {
          transform: scale(1.05);
          border-color: #f59e42;
        }

        .ms-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ms-card h3 {
          font-weight: 700;
          color: #0b4da3;
          font-size: 1.2rem;
          margin-bottom: 6px;
          position: relative;
          z-index: 1;
        }

        .ms-role {
          color: #334155;
          font-size: 0.95rem;
          margin-bottom: 6px;
          font-weight: 500;
        }

        .ms-exp {
          color: #f59e42;
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .ms-title { font-size: 2.1rem; }
          .ms-subtitle { font-size: 1rem; }
        }

        @media (max-width: 480px) {
          .ms-card { padding: 20px 12px; }
          .ms-image-wrap { width: 110px; height: 110px; }
          .ms-title { font-size: 1.8rem; }
        }
      `})]})}const SM="/LMSTalentMindsUI/assets/TalentMindsCertificate-Bt7fCmKG.png";function AM(){const e=b.useRef(null),t=b.useRef(null);return b.useEffect(()=>{const r=e.current;if(!r)return;const n=new IntersectionObserver(l=>l.forEach(s=>{s.isIntersecting&&r.classList.add("visible")}),{threshold:.2});return n.observe(r),()=>n.disconnect()},[]),b.useEffect(()=>{const r=s=>{const d=t.current;if(d){const p=d.querySelector(".cs-cert-mockup"),h=d.getBoundingClientRect(),m=(s.clientX-h.left)/h.width-.5,g=(s.clientY-h.top)/h.height-.5;p.style.transform=`scale(1.05) rotateX(${-g*5}deg) rotateY(${m*5}deg)`;const x=d.querySelector(".cs-glow");x.style.transform=`translate(${m*30}px, ${g*30}px)`}},n=()=>{const s=t.current;if(s){const d=s.querySelector(".cs-cert-mockup");d.style.transform="scale(1.0) rotateX(0deg) rotateY(0deg)";const p=s.querySelector(".cs-glow");p.style.transform="translate(0, 0)"}},l=t.current;return l&&(l.addEventListener("mousemove",r),l.addEventListener("mouseleave",n)),()=>{l&&(l.removeEventListener("mousemove",r),l.removeEventListener("mouseleave",n))}},[]),u.jsxs("section",{ref:e,className:"cs-section",children:[u.jsxs("div",{className:"cs-container",children:[u.jsxs("div",{className:"cs-content",children:[u.jsx("p",{className:"cs-tagline",children:"Certification of Excellence"}),u.jsxs("h2",{className:"cs-title",children:["Your Success, ",u.jsx("span",{className:"highlight-text",children:"Officially Recognized"})]}),u.jsx("p",{className:"cs-desc",children:"Earn the **HG's Talent Minds Everywhere** Certification, a benchmark for industry readiness. Our credentials are not just pieces of paper; they are a verifiable proof of mastery, respected by leading employers globally."}),u.jsxs("div",{className:"cs-badges",children:[u.jsxs("div",{className:"cs-badge",children:[u.jsx("span",{children:"🔒"})," Blockchain Verified"]}),u.jsxs("div",{className:"cs-badge",children:[u.jsx("span",{children:"🌐"})," Globally Recognized"]}),u.jsxs("div",{className:"cs-badge",children:[u.jsx("span",{children:"🤝"})," Industry Partnered"]})]}),u.jsx("div",{className:"cs-cta-block",children:u.jsxs("p",{className:"cs-cta-text",children:["Ready to demonstrate your expertise?",u.jsx("a",{href:"/partnerships",className:"cs-cta-link",children:"See our Global Recognition Partners"})]})})]}),u.jsxs("div",{ref:t,className:"cs-image",children:[u.jsx("div",{className:"cs-glow"}),u.jsx("div",{className:"cs-cert-mockup",children:u.jsx("img",{src:SM,alt:"HG's Talent Minds Everywhere Professional Certification Diploma"})})]})]}),u.jsx("style",{children:`
                /* (All your existing internal CSS is here...) */
                .cs-section {
                    position: relative;
                    background: linear-gradient(135deg, #0b1e3a 0%, #172d53 60%, #0b1e3a 100%);
                    color: #fff;
                    padding: 100px 20px;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(60px);
                    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .cs-section.visible { 
                    opacity: 1; 
                    transform: translateY(0); 
                }
                .cs-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    max-width: 1200px;
                    margin: 0 auto;
                    flex-wrap: wrap;
                    gap: 50px;
                    position: relative;
                    z-index: 2;
                }
                .cs-content { 
                    flex: 1; 
                    min-width: 300px;
                    max-width: 550px; 
                }
                .cs-tagline {
                    color: #facc15;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 10px;
                }
                .cs-title {
                    font-size: 2.8rem;
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    text-shadow: 0 3px 10px rgba(0,0,0,0.3);
                }
                .cs-title .highlight-text {
                    background: linear-gradient(90deg, #fde047 0%, #fbbf24 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .cs-desc {
                    color: #e0e7ff;
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 40px; 
                }
                .cs-badges {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    margin-bottom: 30px; 
                }
                .cs-badge {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 50px;
                    padding: 8px 18px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: background 0.3s ease;
                }
                .cs-badge span {
                    color: #fbbf24;
                    font-size: 1.1rem;
                }
                .cs-badge:hover {
                    background: rgba(255, 255, 255, 0.15);
                }
                .cs-cta-block {
                    margin-top: 20px;
                    padding: 15px 0;
                }
                .cs-cta-text {
                    font-size: 1rem;
                    color: #ccc;
                }
                .cs-cta-link {
                    color: #fbbf24; 
                    font-weight: 700;
                    text-decoration: none;
                    border-bottom: 2px solid rgba(251, 191, 36, 0.5);
                    transition: border-bottom-color 0.3s ease;
                }
                .cs-cta-link:hover {
                    border-bottom-color: #fde047;
                }
                .cs-image {
                    flex: 1;
                    min-width: 320px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    perspective: 1500px; 
                    padding: 30px; 
                    height: auto; 
                    max-width: 600px; 
                }
                .cs-glow {
                    position: absolute;
                    width: 80%;
                    height: 80%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 60%);
                    filter: blur(50px);
                    transition: transform 0.4s ease;
                    z-index: 0;
                }
                .cs-cert-mockup {
                    position: relative; 
                    width: 100%; 
                    height: auto;
                    transform-style: preserve-3d;
                    transition: transform 0.4s ease;
                    z-index: 1;
                    margin: 0 auto;
                }
                .cs-image img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7); 
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    will-change: transform;
                }
                @media (max-width: 900px) {
                    .cs-container { 
                        flex-direction: column; 
                        text-align: center; 
                        gap: 30px;
                    }
                    .cs-content { 
                        max-width: 100%; 
                    }
                    .cs-title { 
                        font-size: 2.2rem; 
                    }
                    .cs-desc { 
                        font-size: 1rem; 
                    }
                    .cs-badges { 
                        justify-content: center; 
                    }
                    .cs-image {
                        padding: 0;
                        margin-top: 30px;
                        max-width: 400px; 
                        height: auto; 
                    }
                }
                @media (max-width: 600px) {
                    .cs-title { font-size: 1.8rem; }
                    .cs-glow { filter: blur(30px); }
                }
            `})]})}function OM(){const e=b.useRef(null),t=b.useRef(null);return b.useEffect(()=>{const n=e.current;if(!n)return;const l=new IntersectionObserver(s=>{s.forEach(d=>{d.isIntersecting&&n.classList.add("visible")})},{threshold:.2});return l.observe(n),()=>l.disconnect()},[]),b.useEffect(()=>{const n=d=>{const p=t.current;if(p){const h=p.querySelector("img"),m=p.getBoundingClientRect(),g=(d.clientX-m.left)/m.width-.5,x=(d.clientY-m.top)/m.height-.5;h.style.transform=`scale(1.05) rotateX(${-x*5}deg) rotateY(${g*5}deg)`;const w=p.querySelector(".ct-img-glow");w.style.transform=`translate(${g*20}px, ${x*20}px)`}},l=()=>{const d=t.current;if(d){const p=d.querySelector("img");p.style.transform="scale(1.01) rotateX(0deg) rotateY(0deg)";const h=d.querySelector(".ct-img-glow");h.style.transform="translate(0, 0)"}},s=t.current;if(s){s.addEventListener("mousemove",n),s.addEventListener("mouseleave",l);const d=s.querySelector("img");d.style.transform="scale(1.01)"}return()=>{s&&(s.removeEventListener("mousemove",n),s.removeEventListener("mouseleave",l))}},[]),u.jsxs("section",{ref:e,className:"ct-section",children:[u.jsx("div",{className:"ct-overlay"}),u.jsxs("div",{className:"ct-container",children:[u.jsxs("div",{className:"ct-content",children:[u.jsxs("h2",{className:"ct-title",children:["Unleash Potential with ",u.jsx("span",{className:"highlight-text",children:"HG's Talent Minds Everywhere"})]}),u.jsx("p",{className:"ct-subtitle",children:"Instantly transform your organization with **hyper-personalized** corporate training. Our expert-led, outcome-driven programs deliver a guaranteed ROI by focusing on **measurable business objectives** and future-proofing your workforce."}),u.jsxs("div",{className:"ct-features",children:[u.jsxs("div",{className:"ct-feature",children:[u.jsx("span",{children:"🚀"})," Guaranteed ROI & Measurable Outcomes"]}),u.jsxs("div",{className:"ct-feature",children:[u.jsx("span",{children:"🧠"})," AI-Driven Personalization"]}),u.jsxs("div",{className:"ct-feature",children:[u.jsx("span",{children:"💼"})," Executive Skill Acceleration"]})]}),u.jsx("button",{className:"ct-btn",children:"Start Your Transformation →"})]}),u.jsxs("div",{ref:t,className:"ct-image",children:[u.jsx("div",{className:"ct-img-glow"}),u.jsx("img",{src:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&h=700&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Teams collaborating in a modern office, representing corporate training and upskilling"})]})]}),u.jsx("style",{children:`
        .ct-section {
          position: relative;
          /* Deeper, more aggressive blue gradient */
          background: linear-gradient(135deg, #0b1e3a 0%, #1e3a8a 50%, #2563eb 100%);
          color: #fff;
          padding: 120px 20px; /* More vertical space */
          overflow: hidden;
          opacity: 0;
          transform: translateY(80px);
          transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); /* Smoother, more dramatic transition */
        }

        .ct-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ct-overlay {
          position: absolute;
          inset: 0;
          /* Subtler, more concentrated central glow */
          background: radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 65%);
          z-index: 0;
        }

        .ct-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1300px; /* Wider container */
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 60px; /* Larger gap */
          position: relative;
          z-index: 1;
        }

        .ct-content {
          flex: 1;
          min-width: 320px;
        }

        .ct-title {
          font-size: 3.2rem; /* Larger, bolder title */
          font-weight: 900;
          margin-bottom: 25px;
          line-height: 1.15;
          text-shadow: 0 4px 10px rgba(0,0,0,0.3); /* Add depth to title */
        }

        .highlight-text {
          background: linear-gradient(90deg, #fde047 0%, #fbbf24 100%); /* Brighter gold highlight */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ct-subtitle {
          font-size: 1.3rem; /* Larger subtitle */
          color: #e0e7ff;
          margin-bottom: 50px; /* More spacing */
          max-width: 650px;
          line-height: 1.7;
        }
        
        .ct-subtitle strong {
            font-weight: 700;
            color: #fff; /* Ensure bold text stands out */
        }

        .ct-features {
          display: flex;
          flex-wrap: wrap;
          gap: 20px; /* Larger gap for features */
          margin-bottom: 50px;
        }

        .ct-feature {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px; /* More rounded */
          padding: 12px 20px; /* Larger padding */
          font-weight: 700;
          font-size: 1.05rem;
          color: #facc15;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.4s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .ct-feature:hover {
          transform: translateY(-3px) scale(1.02); /* More dynamic hover */
          background: rgba(255,255,255,0.15);
          box-shadow: 0 8px 15px rgba(0,0,0,0.2);
        }

        .ct-btn {
          background: linear-gradient(90deg, #f59e42 0%, #fbbf24 100%);
          color: #0b1e3a; /* Darker text for high contrast */
          padding: 18px 50px; /* Larger button */
          border: none;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1.2rem;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3), 0 0 40px rgba(255, 191, 0, 0.4); /* Stronger shadow/glow */
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-transform: uppercase;
        }

        .ct-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.4), 0 0 50px rgba(255, 215, 0, 0.6);
        }

        .ct-image {
          flex: 1;
          min-width: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          /* Crucial for 3D/tilt effect */
          perspective: 1000px;
          padding: 20px; /* Padding for the glow to breathe */
        }

        .ct-img-glow {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 16px;
            background: rgba(255, 191, 0, 0.2); /* Soft internal glow color */
            filter: blur(40px);
            opacity: 0.6;
            transition: transform 0.4s ease;
            z-index: 1;
        }

        .ct-image img {
          position: relative;
          z-index: 2;
          width: 550px; /* Larger image */
          max-width: 100%;
          border-radius: 18px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.5); /* Stronger shadow */
          border: 4px solid rgba(255,255,255,0.2); /* More prominent border */
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          background: #333; /* Dark background for empty space */
          will-change: transform;
          transform-style: preserve-3d; /* Enable 3D rotation */
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .ct-title { font-size: 2.8rem; }
          .ct-subtitle { font-size: 1.15rem; }
          .ct-image img { width: 450px; }
        }

        @media (max-width: 900px) {
          .ct-container { flex-direction: column; text-align: center; }
          .ct-title { font-size: 2.5rem; }
          .ct-subtitle { font-size: 1.1rem; margin: 0 auto 35px; }
          .ct-features { justify-content: center; }
          .ct-image { padding: 0; margin-top: 40px; }
          .ct-image img { width: 90%; }
          .ct-img-glow { display: none; } /* Hide 3D elements on small screens for performance/simplicity */
        }

        @media (max-width: 600px) {
          .ct-section { padding: 80px 15px; }
          .ct-title { font-size: 2rem; }
          .ct-subtitle { font-size: 1rem; }
          .ct-btn { width: 100%; padding: 16px 0; font-size: 1.1rem; }
          .ct-feature { font-size: 0.95rem; }
        }
      `})]})}function EM(){return b.useEffect(()=>{const e=document.querySelectorAll(".cs2-grid img"),t=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&n.target.classList.add("visible")})},{threshold:.2});e.forEach(r=>t.observe(r))},[]),u.jsxs("section",{className:"cs2-section",children:[u.jsxs("div",{className:"cs2-container",children:[u.jsx("h2",{className:"cs2-title",children:"A Thriving Community of Learners"}),u.jsx("p",{className:"cs2-subtitle",children:"Connect, collaborate, and grow with thousands of learners and mentors across the world."}),u.jsxs("div",{className:"cs2-grid",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=60",alt:"Collaborative learners"}),u.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60",alt:"Networking learners"}),u.jsx("img",{src:"https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=900&q=60",alt:"Learning together"})]}),u.jsx("button",{className:"cs2-btn",children:"Join Our Community →"})]}),u.jsx("style",{children:`
        .cs2-section {
          background: linear-gradient(180deg, #f9fafc 0%, #eef4ff 100%);
          text-align: center;
          padding: 90px 20px;
          overflow: hidden;
        }
        .cs2-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .cs2-title {
          font-size: 2.3rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 15px;
        }
        .cs2-subtitle {
          color: #475569;
          margin-bottom: 40px;
          font-size: 1.1rem;
        }
        .cs2-grid {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }
        .cs2-grid img {
          width: 340px;
          height: 220px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(11,77,163,0.1);
          transform: translateY(40px);
          opacity: 0;
          transition: all 0.8s ease;
        }
        .cs2-grid img.visible {
          transform: translateY(0);
          opacity: 1;
        }
        .cs2-grid img:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(37,99,235,0.2);
        }
        .cs2-btn {
          background: linear-gradient(90deg, #0b4da3 0%, #2563eb 100%);
          color: #fff;
          padding: 14px 34px;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cs2-btn:hover {
          background: #083b7a;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .cs2-grid img {
            width: 300px;
            height: 200px;
          }
        }
        @media (max-width: 600px) {
          .cs2-title { font-size: 2rem; }
          .cs2-grid img { width: 90%; height: auto; }
        }
      `})]})}function kM(){return u.jsxs("div",{className:"tm-home",children:[u.jsx(lM,{}),u.jsx("div",{className:"tm-marquee",children:u.jsx(uM,{})}),u.jsx(gM,{}),u.jsx(bM,{}),u.jsx(xM,{}),u.jsx(jM,{}),u.jsx(AM,{}),u.jsx(yM,{}),u.jsx(OM,{}),u.jsx(EM,{}),u.jsx(pM,{}),u.jsx(zA,{}),u.jsx(dM,{}),u.jsx(hM,{}),u.jsx("style",{children:`
        .tm-home {
          background: #f8fafc;
          font-family: "Open Sans", "Inter", sans-serif;
          color: #0f172a;
        }

        .tm-marquee {
          background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%);
          padding: 32px 0 24px 0;
          margin-bottom: 32px;
        }

        @media (max-width: 768px) {
          .tm-courses-title { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
          .tm-btn { width: 100%; }
        }
      `})]})}const NM=[];function CM(){const[e,t]=b.useState(""),[r,n]=b.useState("All"),[l,s]=b.useState("popular"),[d,p]=b.useState(4);let h=NM.filter(m=>(r==="All"||m.category===r)&&m.title.toLowerCase().includes(e.toLowerCase()));return l==="price-low"?h.sort((m,g)=>m.price-g.price):l==="price-high"?h.sort((m,g)=>g.price-m.price):l==="rating"?h.sort((m,g)=>g.rating-m.rating):l==="popular"&&h.sort((m,g)=>g.students-m.students),u.jsxs("div",{className:"explore-page",children:[u.jsxs("section",{className:"why-talentminds wrap",children:[u.jsx("h2",{children:"Why Choose HG’s TalentMinds?"}),u.jsxs("p",{className:"intro",children:["In a world full of online learning platforms, ",u.jsx("strong",{children:"TalentMinds stands apart"})," — blending technology, mentorship, and career growth into a complete learning journey. We don’t just teach skills — we help you transform your career."]}),u.jsxs("div",{className:"why-grid",children:[u.jsxs("div",{className:"why-card",children:[u.jsx("h3",{children:"🎓 Expert-Led Learning"}),u.jsx("p",{children:"Learn directly from top mentors who work at leading tech companies. Every course is designed and reviewed by industry professionals — so you’re always learning what truly matters."})]}),u.jsxs("div",{className:"why-card",children:[u.jsx("h3",{children:"🧩 Real-World Projects"}),u.jsx("p",{children:"Apply your knowledge on real, job-ready projects and case studies. Build a portfolio that proves your skills to employers."})]}),u.jsxs("div",{className:"why-card",children:[u.jsx("h3",{children:"🚀 Career Acceleration"}),u.jsxs("p",{children:["Get resume reviews, interview prep, and direct job referrals through our ",u.jsx("strong",{children:"Career Launch Program"}),"."]})]}),u.jsxs("div",{className:"why-card",children:[u.jsx("h3",{children:"🌍 Global Learner Network"}),u.jsx("p",{children:"Join 60,000+ learners and mentors across 50+ countries via our TalentMinds Community Hub."})]}),u.jsxs("div",{className:"why-card",children:[u.jsx("h3",{children:"💡 Personalized Learning Path"}),u.jsx("p",{children:"Adaptive learning plans based on your goals — beginner, upskilling professional, or career switcher."})]}),u.jsxs("div",{className:"why-card",children:[u.jsx("h3",{children:"🏆 Recognized Certification"}),u.jsx("p",{children:"Earn globally recognized certificates endorsed by hiring partners to showcase your expertise."})]})]})]}),u.jsx("style",{children:`
        /* ... all your existing styles ... */

        /* === Why TalentMinds New Styles === */
        .why-talentminds {
          background: linear-gradient(135deg, #ecfeff, #f0fdfa);
          padding: 80px 20px;
          border-radius: 40px;
          text-align: center;
          margin-top: 60px;
        }
        .why-talentminds h2 { color: #0f172a; font-size: 2rem; font-weight: 800; margin-bottom: 20px; }
        .why-talentminds .intro { color: #475569; max-width: 700px; margin: 0 auto 50px; font-size: 1.1rem; line-height: 1.8; }
        .why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
        .why-card { background: white; padding: 24px; border-radius: 16px; box-shadow: 0 8px 20px rgba(0,0,0,0.05); transition: transform .25s ease, box-shadow .25s ease; text-align: left; }
        .why-card:hover { transform: translateY(-6px); box-shadow: 0 12px 28px rgba(0,0,0,0.08); }
        .why-card h3 { color: #0ea5a7; margin-bottom: 10px; font-size: 1.15rem; font-weight: 700; }
        .why-card p { color: #475569; line-height: 1.6; font-size: 0.97rem; }
      `})]})}function TM(){const[e,t]=b.useState(""),[r,n]=b.useState("All"),[l,s]=b.useState(6),d={section:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",backgroundColor:"#f8fafc",padding:"60px 20px",color:"#1e293b",marginTop:"30px"},heading:{textAlign:"center",fontSize:"2.4rem",fontWeight:"700",marginBottom:"20px",color:"#0f172a"},subheading:{textAlign:"center",fontSize:"1.1rem",maxWidth:"850px",margin:"0 auto 50px",color:"#475569",lineHeight:"1.6"},controls:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"15px",marginBottom:"40px"},searchInput:{padding:"12px 18px",borderRadius:"8px",border:"1px solid #cbd5e1",fontSize:"1rem",width:"280px",outline:"none"},categorySelect:{padding:"12px 18px",borderRadius:"8px",border:"1px solid #cbd5e1",fontSize:"1rem",outline:"none",background:"#fff",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"25px",maxWidth:"1200px",margin:"0 auto"},card:{backgroundColor:"#fff",borderRadius:"12px",padding:"25px",boxShadow:"0 4px 10px rgba(0,0,0,0.08)",transition:"all 0.3s ease"},cardHover:{transform:"translateY(-5px)",boxShadow:"0 8px 16px rgba(0,0,0,0.15)"},cardTitle:{fontSize:"1.25rem",color:"#2563eb",fontWeight:"600",marginBottom:"10px"},cardText:{fontSize:"0.95rem",color:"#475569",lineHeight:"1.6"},divider:{width:"80px",height:"3px",backgroundColor:"#2563eb",margin:"12px auto 40px",borderRadius:"4px"},loadMoreBtn:{display:"block",margin:"40px auto 0",background:"#2563eb",color:"#fff",border:"none",borderRadius:"8px",padding:"12px 28px",fontWeight:"600",cursor:"pointer",transition:"background 0.3s ease"},footer:{marginTop:"60px",textAlign:"center",color:"#64748b",fontSize:"0.9rem",lineHeight:"1.6"}},p=[{title:"AI & Machine Learning Program",text:"Hands-on Generative AI and NLP using TensorFlow + OpenAI.",category:"AI & Machine Learning"},{title:"Data Analytics & Business Intelligence",text:"Power BI and Tableau projects turning data into business insights.",category:"Data & Analytics"},{title:"Cybersecurity Professional Training",text:"Ethical hacking, SOC analysis, and CompTIA Security+.",category:"Cybersecurity"},{title:"Cloud & DevOps Bootcamp",text:"AWS, Azure, Docker and CI/CD deployment pipelines.",category:"Cloud & DevOps"},{title:"Digital Marketing Certification",text:"SEO, SEM and Google Analytics for modern marketers.",category:"Business & Marketing"},{title:"Project & Product Management",text:"PMI®, Scrum and PRINCE2® certification prep.",category:"Management"},{title:"AI Engineer Career Playbook (Free Guide)",text:"Download career roadmaps and AI transition guides.",category:"Free Resources"},{title:"Free Micro Courses Library",text:"Access 500+ short courses for continuous upskilling.",category:"Free Courses"},{title:"Enterprise Learning Hub+",text:"Corporate AI-driven training with analytics dashboards.",category:"Enterprise Solutions"},{title:"Leadership Acceleration Program",text:"Upskill managers for digital strategy and innovation.",category:"Enterprise Solutions"},{title:"Career Transformation Webinar Series",text:"Weekly sessions from industry mentors and recruiters.",category:"Free Resources"},{title:"Advanced Data Engineering",text:"Big data pipelines with Spark, Kafka and Airflow.",category:"Data & Analytics"}],h=["All","AI & Machine Learning","Data & Analytics","Cybersecurity","Cloud & DevOps","Management","Business & Marketing","Enterprise Solutions","Free Courses","Free Resources"],m=p.filter(w=>{const j=r==="All"||w.category===r,S=w.title.toLowerCase().includes(e.toLowerCase())||w.text.toLowerCase().includes(e.toLowerCase());return j&&S}),g=m.slice(0,l),x=l<m.length;return u.jsxs("section",{style:d.section,children:[u.jsx("h1",{style:d.heading,children:"HG’s TalentMinds Resource Hub"}),u.jsx("p",{style:d.subheading,children:"Search, filter and explore our latest learning tracks, enterprise solutions, and free career resources designed to help you lead in the AI era."}),u.jsxs("div",{style:d.controls,children:[u.jsx("input",{type:"text",placeholder:"Search resources...",value:e,onChange:w=>t(w.target.value),style:d.searchInput}),u.jsx("select",{value:r,onChange:w=>n(w.target.value),style:d.categorySelect,children:h.map(w=>u.jsx("option",{children:w},w))})]}),u.jsx("div",{style:d.divider}),u.jsx("div",{style:d.grid,children:g.length>0?g.map((w,j)=>u.jsxs("div",{style:d.card,onMouseEnter:S=>Object.assign(S.currentTarget.style,d.cardHover),onMouseLeave:S=>Object.assign(S.currentTarget.style,{transform:"none",boxShadow:"0 4px 10px rgba(0,0,0,0.08)"}),children:[u.jsx("h3",{style:d.cardTitle,children:w.title}),u.jsx("p",{style:d.cardText,children:w.text}),u.jsxs("p",{style:{fontSize:"0.85rem",color:"#64748b",marginTop:"10px",fontStyle:"italic"},children:["Category: ",w.category]})]},j)):u.jsx("p",{style:{textAlign:"center",gridColumn:"1 / -1",color:"#64748b",fontSize:"1rem"},children:"No matching resources found."})}),x&&u.jsx("button",{style:d.loadMoreBtn,onClick:()=>s(w=>w+3),children:"Load More"}),u.jsxs("p",{style:d.footer,children:["© 2025 ",u.jsx("strong",{children:"HG’s TalentMinds"}),". All Rights Reserved.",u.jsx("br",{}),"Certification names such as PMP®, ITIL®, PRINCE2®, CISSP®, AWS®, and Scrum® are trademarks of their respective owners.",u.jsx("br",{}),"HG’s TalentMinds empowers global professionals and enterprises through AI-powered learning and digital transformation."]})]})}function MM(){const[e,t]=b.useState(!1),[r,n]=b.useState({name:"",email:"",company:"",interest:""}),l=d=>n({...r,[d.target.name]:d.target.value}),s=d=>{d.preventDefault(),alert(`✅  Thanks, ${r.name}! A member of the HG’s TalentMinds enterprise team will contact you at ${r.email} within 24 hours.`),t(!1)};return u.jsxs("section",{className:"business",children:[u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"Transform Your Workforce with HG’s TalentMinds Corporate Solutions"}),u.jsxs("p",{className:"subtitle",children:["Build a future-ready organization through ",u.jsx("strong",{children:"AI-driven learning, adaptive analytics,"})," and ",u.jsx("strong",{children:"scalable enterprise enablement."}),"From upskilling engineers to empowering executives, TalentMinds delivers measurable impact across the talent lifecycle."]}),u.jsxs("div",{className:"grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🎯  Intelligence-Based Learning Paths"}),u.jsx("p",{children:"Role-mapped curricula powered by data. Whether you’re reskilling cloud engineers or training cybersecurity analysts, every learner follows a personalized AI-curated path aligned with business goals."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🧑‍🏫  Expert-Led Bootcamps + Mentorship"}),u.jsx("p",{children:"Blended programs delivered live by certified practitioners and industry leaders. Each participant receives 1-to-1 mentor feedback and access to a dedicated success coach."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🛠️  Applied Projects & Labs"}),u.jsx("p",{children:"Teams practice on simulated enterprise systems—AI models, CI/CD pipelines, SOC dashboards—turning theoretical knowledge into job-ready expertise."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🌍  Global Roll-Out at Speed"}),u.jsx("p",{children:"Deployed in 70 + countries with multi-language content, 24 × 7 cloud access, and compliance with corporate security and GDPR standards."})]}),u.jsxs("div",{className:"card highlight-card",children:[u.jsx("h3",{children:"📊  Enterprise Intelligence Dashboard"}),u.jsx("p",{children:"Real-time insight into learner engagement, certification progress, and ROI. Track skill gaps, benchmark departments, and link learning outcomes to performance metrics."})]})]}),u.jsx("button",{className:"cta-btn",onClick:()=>t(!0),children:"Book a Strategy Consultation →"}),u.jsxs("div",{className:"stats",children:[u.jsx("h2",{children:"🚀  Measurable Results, Proven at Scale"}),u.jsx("p",{className:"stats-subtitle",children:"Organizations partnering with TalentMinds achieve faster innovation, reduced attrition, and tangible revenue impact."}),u.jsxs("div",{className:"stats-grid",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("h3",{children:"210 K +"}),u.jsx("p",{children:"Employees upskilled worldwide"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("h3",{children:"40 %"}),u.jsx("p",{children:"Reduction in time-to-productivity"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("h3",{children:"3 : 1"}),u.jsx("p",{children:"Average CLTV : CAC ratio for enterprise clients"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("h3",{children:"88 %"}),u.jsx("p",{children:"Managers reporting measurable ROI"})]})]})]}),u.jsxs("div",{className:"testimonial-section",children:[u.jsx("h2",{children:"💬  What Our Enterprise Partners Say"}),u.jsxs("div",{className:"testimonial-grid",children:[u.jsxs("div",{className:"testimonial-card",children:[u.jsx("p",{children:"“HG’s TalentMinds equipped our 5 000 + engineers with AI and data-engineering skills in under six months—productivity went up 33 %.”"}),u.jsx("span",{children:"— Rita Menon, CTO • TechNova Global"})]}),u.jsxs("div",{className:"testimonial-card",children:[u.jsx("p",{children:"“Their analytics dashboard changed the way we measure learning ROI. We now correlate training outcomes directly with project delivery KPIs.”"}),u.jsx("span",{children:"— Luis Martinez, Director of L&D • Siemens Digital"})]}),u.jsxs("div",{className:"testimonial-card",children:[u.jsx("p",{children:"“TalentMinds became our strategic partner for continuous reskilling—excellent content, enterprise-grade support, and clear business results.”"}),u.jsx("span",{children:"— Akira Sato, VP People Ops • Fujitech Systems"})]})]})]}),u.jsxs("div",{className:"growth-section",children:[u.jsx("h2",{children:"📈  Sustainable Growth & Market Leadership"}),u.jsx("p",{className:"growth-subtitle",children:"Our business model is built on long-term enterprise relationships, recurring revenue, and product innovation that scales with AI adoption trends."}),u.jsxs("div",{className:"metric-grid",children:[u.jsxs("div",{className:"metric-card",children:[u.jsx("h4",{children:"💵  92 % Recurring ARR"}),u.jsx("p",{children:"Multi-year contracts across tech, BFSI, and manufacturing sectors create stable, predictable revenue streams."})]}),u.jsxs("div",{className:"metric-card",children:[u.jsx("h4",{children:"🤖  AI-First Product Roadmap"}),u.jsx("p",{children:"Continuous integration of generative AI for adaptive learning, assessment automation, and skill forecasting."})]}),u.jsxs("div",{className:"metric-card",children:[u.jsx("h4",{children:"🌱  ESG & Diversity Commitment"}),u.jsx("p",{children:"48 % of learners enrolled through our social-impact initiatives belong to under-represented communities in tech."})]})]})]})]}),e&&u.jsx("div",{className:"modal-overlay",children:u.jsxs("div",{className:"modal",children:[u.jsx("h2",{children:"Book a Demo / Consultation"}),u.jsx("p",{children:"Tell us a little about your organization and we’ll craft a personalized upskilling proposal."}),u.jsxs("form",{onSubmit:s,children:[u.jsx("input",{name:"name",placeholder:"Your Name",value:r.name,onChange:l,required:!0}),u.jsx("input",{name:"email",type:"email",placeholder:"Work Email",value:r.email,onChange:l,required:!0}),u.jsx("input",{name:"company",placeholder:"Company Name",value:r.company,onChange:l,required:!0}),u.jsxs("select",{name:"interest",value:r.interest,onChange:l,required:!0,children:[u.jsx("option",{value:"",children:"Select Interest Area"}),u.jsx("option",{children:"AI & Data Transformation"}),u.jsx("option",{children:"Cloud & DevOps Modernization"}),u.jsx("option",{children:"Cybersecurity Enablement"}),u.jsx("option",{children:"Leadership & Agile Culture"})]}),u.jsx("button",{className:"submit-btn",type:"submit",children:"Submit Request →"})]}),u.jsx("button",{className:"close-btn",onClick:()=>t(!1),children:"✕"})]})}),u.jsx("style",{children:`
        .business {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg,#e0f2fe,#bfdbfe);
          padding: 100px 20px;
          text-align: center;
          marginTop:"30px";

        }
        .container{max-width:1200px;margin:0 auto;}
        h1{color:#0b4da3;font-size:2.6rem;font-weight:800;margin-bottom:20px;}
        .subtitle{color:#475569;max-width:850px;margin:0 auto 60px;font-size:1.15rem;line-height:1.8;}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:25px;margin-bottom:60px;}
        .card{background:#fff;padding:25px 20px;border-radius:16px;border:1px solid #dbeafe;
              box-shadow:0 6px 20px rgba(11,77,163,0.08);text-align:left;transition:.3s;}
        .card:hover{transform:translateY(-6px);box-shadow:0 10px 28px rgba(37,99,235,0.2);}
        .highlight-card{border:2px solid #2563eb;background:#eff6ff;}
        .cta-btn{background:#2563eb;color:#fff;border:none;padding:16px 40px;border-radius:10px;font-weight:700;
                 font-size:1.1rem;cursor:pointer;box-shadow:0 6px 18px rgba(37,99,235,0.4);transition:.3s;}
        .cta-btn:hover{background:#1d4ed8;}
        .stats{margin-top:100px;background:#fff;border-radius:20px;padding:70px 25px;box-shadow:0 8px 30px rgba(0,0,0,.05);}
        .stats h2{color:#0b4da3;font-size:2rem;margin-bottom:15px;}
        .stats-subtitle{color:#475569;max-width:700px;margin:0 auto 40px;}
        .stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;}
        .stat-card{background:#eff6ff;border-radius:12px;padding:25px;}
        .stat-card h3{color:#2563eb;font-size:2rem;margin-bottom:6px;}
        .testimonial-section{margin-top:100px;}
        .testimonial-section h2{color:#0b4da3;font-size:2rem;margin-bottom:30px;}
        .testimonial-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:25px;}
        .testimonial-card{background:#fff;border-radius:16px;padding:25px 20px;
                          box-shadow:0 6px 20px rgba(37,99,235,.1);font-style:italic;}
        .testimonial-card span{display:block;color:#2563eb;font-weight:600;margin-top:10px;}
        .growth-section{padding:80px 20px 60px;margin-top:80px;background:#fff;border-radius:20px;
                        box-shadow:0 10px 30px rgba(0,0,0,.05);}
        .growth-section h2{color:#0b4da3;font-size:2.2rem;font-weight:800;margin-bottom:10px;}
        .growth-subtitle{color:#475569;max-width:700px;margin:0 auto 40px;}
        .metric-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;}
        .metric-card{background:#f1f5f9;padding:20px;border-radius:12px;text-align:left;border-left:5px solid #2563eb;}
        .metric-card h4{color:#1d4ed8;font-weight:700;margin-bottom:6px;}
        /* Modal */
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;justify-content:center;
                       align-items:center;z-index:1000;}
        .modal{background:#fff;padding:30px;border-radius:12px;width:95%;max-width:450px;position:relative;text-align:left;}
        .modal h2{color:#0b4da3;margin-bottom:8px;}
        .modal p{color:#475569;margin-bottom:15px;}
        .modal input,.modal select{width:100%;margin-bottom:12px;padding:12px;border:1px solid #cbd5e1;
                                   border-radius:8px;font-size:1rem;}
        .submit-btn{background:#2563eb;color:#fff;border:none;padding:12px 24px;border-radius:8px;
                    cursor:pointer;font-weight:600;}
        .submit-btn:hover{background:#1d4ed8;}
        .close-btn{position:absolute;top:12px;right:16px;background:none;border:none;font-size:1.3rem;
                   cursor:pointer;color:#475569;}
        @media(max-width:768px){h1{font-size:2rem;}.cta-btn{padding:14px 28px;font-size:1rem;}
          .grid,.stats-grid,.testimonial-grid,.metric-grid{grid-template-columns:1fr;}
          .stats,.growth-section{padding:50px 15px;}}
      `})]})}function _M(){const e=[{name:"Aarav Gupta",role:"Software Engineer at Infosys",review:"TalentMinds helped me transition from a non-tech background into a software engineering career. The mentors were truly world-class!"},{name:"Priya Sharma",role:"Data Analyst at Amazon",review:"The Data Science program gave me real-world exposure through projects and case studies. I could apply what I learned at work instantly."},{name:"Rohit Menon",role:"DevOps Engineer at Capgemini",review:"Their DevOps course and placement support helped me land a job within 3 months of completion. Thank you TalentMinds!"}];return u.jsxs("section",{className:"reviews",children:[u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"Learner Success Stories"}),u.jsx("p",{className:"subtitle",children:"Hear from professionals who transformed their careers through our mentor-led learning experience."}),u.jsx("div",{className:"grid",children:e.map((t,r)=>u.jsxs("div",{className:"card",children:[u.jsxs("p",{className:"quote",children:["“",t.review,"”"]}),u.jsx("h3",{children:t.name}),u.jsx("span",{children:t.role})]},r))})]}),u.jsx("style",{children:`
        .reviews {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 80px 20px;
        }
        h1 {
          color: #0b4da3;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #475569;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 22px;
          box-shadow: 0 6px 20px rgba(11,77,163,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(37,99,235,0.15);
        }
        .quote {
          color: #334155;
          font-size: 1rem;
          font-style: italic;
          margin-bottom: 16px;
          line-height: 1.6;
        }
        h3 {
          color: #0b4da3;
          margin-bottom: 4px;
        }
        span {
          color: #64748b;
          font-size: 0.9rem;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
        }
      `})]})}function PM(){return u.jsxs("section",{className:"hire",children:[u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"Hire Industry-Ready Talent"}),u.jsx("p",{className:"subtitle",children:"Access pre-vetted professionals trained in the latest technologies through TalentMinds programs."}),u.jsxs("div",{className:"grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"✅ Verified Skills"}),u.jsx("p",{children:"All our graduates undergo project-based assessments ensuring real-world competency in modern tools."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"💼 Job-Ready Candidates"}),u.jsx("p",{children:"Hire candidates trained in full-stack development, data science, cloud, DevOps, and cybersecurity."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"⚙️ Simplified Hiring Process"}),u.jsx("p",{children:"Get curated candidate lists, schedule interviews, and onboard effortlessly through our portal."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🌍 Global Talent Pool"}),u.jsx("p",{children:"Partner with TalentMinds to access skilled professionals from across regions and time zones."})]})]}),u.jsx("button",{className:"cta-btn",children:"Post a Job →"})]}),u.jsx("style",{children:`
        .hire {
          min-height: 100vh;
          background: linear-gradient(135deg, #ecfdf5, #d1fae5);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 80px 20px;
        }
        h1 {
          color: #065f46;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #374151;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          padding: 28px 20px;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(6,95,70,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(6,95,70,0.15);
        }
        h3 {
          color: #047857;
          margin-bottom: 10px;
        }
        p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cta-btn {
          background: #10b981;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          background: #059669;
        }
      `})]})}function DM(){return u.jsxs("section",{className:"partner",children:[u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"Partner with TalentMinds"}),u.jsx("p",{className:"subtitle",children:"Collaborate with us to deliver next-generation learning experiences, research projects, and corporate training."}),u.jsxs("div",{className:"grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🏫 Academic Partnerships"}),u.jsx("p",{children:"Integrate our programs with your university curriculum to make students job-ready from day one."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🤝 Corporate Alliances"}),u.jsx("p",{children:"Co-create specialized upskilling pathways tailored to your company’s evolving skill demands."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"💡 Innovation Collaborations"}),u.jsx("p",{children:"Work with us on joint projects, research, and community events focused on future technologies."})]})]}),u.jsx("button",{className:"cta-btn",children:"Become a Partner →"})]}),u.jsx("style",{children:`
        .partner {
          min-height: 100vh;
          background: linear-gradient(135deg, #ede9fe, #ddd6fe);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 80px 20px;
        }
        h1 {
          color: #5b21b6;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #4b5563;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          padding: 28px 20px;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(91,33,182,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(91,33,182,0.15);
        }
        h3 {
          color: #6d28d9;
          margin-bottom: 10px;
        }
        p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cta-btn {
          background: #7c3aed;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          background: #6d28d9;
        }
      `})]})}function zM(){return u.jsxs("section",{className:"scholar",children:[u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"Scholarships & Financial Aid"}),u.jsx("p",{className:"subtitle",children:"TalentMinds believes in accessible learning for all. Explore our merit-based scholarships and financial assistance options."}),u.jsxs("div",{className:"grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🏅 Merit-Based Scholarships"}),u.jsx("p",{children:"Earn up to 50% fee waiver based on your academic performance or professional achievements."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🌍 Women in Tech Initiative"}),u.jsx("p",{children:"Encouraging women professionals to build careers in technology through specialized learning support."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"💸 Financial Assistance"}),u.jsx("p",{children:"Easy payment plans and no-cost EMI options available for all major programs."})]})]}),u.jsx("button",{className:"cta-btn",children:"Apply Now →"})]}),u.jsx("style",{children:`
        .scholar {
          min-height: 100vh;
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 80px 20px;
        }
        h1 {
          color: #92400e;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #78350f;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          padding: 28px 20px;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(146,64,14,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(146,64,14,0.15);
        }
        h3 {
          color: #b45309;
          margin-bottom: 10px;
        }
        p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cta-btn {
          background: #f59e0b;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          background: #d97706;
        }
      `})]})}function RM(){const[e,t]=b.useState(null),r=[{q:"What is TalentMinds?",a:"TalentMinds is an online learning platform offering mentor-led programs in technology, business, and professional development. We bridge the gap between education and employability."},{q:"Are the courses self-paced or live?",a:"TalentMinds offers both — self-paced modules for flexibility and live mentor-led sessions for interactive, guided learning experiences."},{q:"Will I receive a certificate after completion?",a:"Yes. Learners who complete the required coursework and assessments earn an industry-recognized TalentMinds Certificate."},{q:"Do you provide job assistance?",a:"Yes! Our Career Accelerator Program offers résumé workshops, interview training, and placement opportunities with hiring partners."},{q:"Can businesses integrate TalentMinds with internal systems?",a:"Absolutely. Our LMS supports API-based integrations with HR, analytics, and enterprise training systems."}],n=l=>{t(e===l?null:l)};return u.jsxs("section",{className:"faq-page",children:[u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"Frequently Asked Questions"}),u.jsx("p",{className:"subtitle",children:"Find answers to the most common questions about TalentMinds learning programs, support, and partnerships."}),u.jsx("div",{className:"faq-list",children:r.map((l,s)=>u.jsxs("div",{className:`faq-item ${e===s?"open":""}`,onClick:()=>n(s),children:[u.jsxs("div",{className:"faq-question",children:[u.jsx("h3",{children:l.q}),u.jsx("span",{children:e===s?"−":"+"})]}),u.jsx("div",{className:"faq-answer",children:u.jsx("p",{children:l.a})})]},s))})]}),u.jsx("style",{children:`
        .faq-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.6rem;
          color: #0b4da3;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #475569;
          max-width: 750px;
          margin: 0 auto 50px;
        }
        .faq-list {
          max-width: 900px;
          margin: 0 auto;
          text-align: left;
        }
        .faq-item {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(11,77,163,0.08);
          margin-bottom: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          font-weight: 700;
          color: #0b4da3;
          background: #f8fafc;
          transition: background 0.3s ease;
        }
        .faq-item:hover .faq-question {
          background: #eff6ff;
        }
        .faq-question span {
          font-size: 1.5rem;
          color: #2563eb;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          padding: 0 20px;
          transition: all 0.4s ease;
          background: white;
        }
        .faq-item.open .faq-answer {
          max-height: 300px;
          padding: 16px 20px 20px;
        }
        .faq-answer p {
          color: #334155;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .faq-question h3 { font-size: 1rem; }
        }
      `})]})}function LM(){const[e,t]=b.useState({name:"",email:"",message:""}),r=l=>{t({...e,[l.target.name]:l.target.value})},n=l=>{l.preventDefault(),alert("Support request submitted! Our team will contact you soon."),t({name:"",email:"",message:""})};return u.jsxs("section",{className:"support-page",children:[u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"We’re Here to Help"}),u.jsx("p",{className:"subtitle",children:"Need assistance? Our support team is available 24/7 to resolve your queries and technical issues."}),u.jsxs("div",{className:"grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"📞 Contact Us"}),u.jsxs("p",{children:["Email: ",u.jsx("strong",{children:"support@talentminds.io"})]}),u.jsxs("p",{children:["Phone: ",u.jsx("strong",{children:"+91 98765 43210"})]}),u.jsx("p",{children:"Working Hours: Mon–Sat, 9 AM to 7 PM (IST)"})]}),u.jsxs("div",{className:"card form-card",children:[u.jsx("h3",{children:"🧾 Raise a Support Ticket"}),u.jsxs("form",{onSubmit:n,children:[u.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:e.name,onChange:r,required:!0}),u.jsx("input",{type:"email",name:"email",placeholder:"Your Email",value:e.email,onChange:r,required:!0}),u.jsx("textarea",{name:"message",placeholder:"Describe your issue...",value:e.message,onChange:r,required:!0}),u.jsx("button",{type:"submit",children:"Submit Ticket"})]})]})]}),u.jsxs("div",{className:"quick-links",children:[u.jsx("h3",{children:"🔗 Quick Help"}),u.jsxs("ul",{children:[u.jsxs("li",{children:["📚 ",u.jsx("a",{href:"/faq",children:"Read the FAQ"})]}),u.jsxs("li",{children:["🎓 ",u.jsx("a",{href:"/courses",children:"Explore Courses"})]}),u.jsxs("li",{children:["💬 ",u.jsx("a",{href:"/contact",children:"Contact Support"})]})]})]})]}),u.jsx("style",{children:`
        .support-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #ecfdf5, #d1fae5);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.6rem;
          color: #065f46;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #374151;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(6,95,70,0.08);
          padding: 30px 20px;
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(6,95,70,0.15);
        }
        h3 {
          color: #047857;
          margin-bottom: 10px;
        }
        p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
        }
        input, textarea {
          padding: 10px 12px;
          border: 1px solid #a7f3d0;
          border-radius: 8px;
          font-size: 0.95rem;
          outline: none;
          transition: border 0.2s ease;
        }
        input:focus, textarea:focus {
          border-color: #10b981;
        }
        textarea {
          resize: none;
          min-height: 100px;
        }
        button {
          background: #10b981;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        button:hover {
          background: #059669;
        }
        .quick-links {
          background: #f0fdf4;
          border-radius: 12px;
          padding: 20px;
          max-width: 700px;
          margin: 0 auto;
        }
        .quick-links h3 {
          color: #047857;
          margin-bottom: 10px;
        }
        .quick-links ul {
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .quick-links a {
          color: #065f46;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .quick-links a:hover {
          color: #10b981;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
        }
      `})]})}function BM(){return u.jsx("section",{className:"mentor-hero",children:u.jsxs("div",{className:"mentor-hero-content",children:[u.jsx("h1",{children:"Share Your Knowledge. Inspire Learners. Become a Mentor."}),u.jsx("p",{children:"Join our growing mentor community and help shape the future of learners worldwide."}),u.jsx("a",{href:"#mentor-form",className:"mentor-cta-btn",children:"Apply Now"})]})})}const IM=[{title:"Make an Impact",desc:"Guide learners and help them achieve their career goals."},{title:"Grow Your Network",desc:"Connect with professionals, educators, and industry leaders."},{title:"Flexible Engagement",desc:"Choose how and when you contribute as a mentor."}];function qM(){return u.jsxs("section",{className:"mentor-benefits",children:[u.jsx("h2",{children:"Why Become a Mentor?"}),u.jsx("div",{className:"mentor-benefits-grid",children:IM.map((e,t)=>u.jsxs("div",{className:"mentor-benefit-card",children:[u.jsx("h3",{children:e.title}),u.jsx("p",{children:e.desc})]},t))})]})}const $M=[{step:"1",title:"Apply Online",desc:"Fill out a quick application form."},{step:"2",title:"Get Reviewed",desc:"Our team will review your application."},{step:"3",title:"Start Mentoring",desc:"Once approved, begin mentoring learners!"}];function UM(){return u.jsxs("section",{className:"mentor-process",children:[u.jsx("h2",{children:"How It Works"}),u.jsx("div",{className:"mentor-process-steps",children:$M.map((e,t)=>u.jsxs("div",{className:"mentor-step",children:[u.jsx("span",{className:"mentor-step-number",children:e.step}),u.jsx("h3",{children:e.title}),u.jsx("p",{children:e.desc})]},t))})]})}function HM(){const[e,t]=b.useState({firstName:"",lastName:"",email:"",password:"",phone:"",expertiseIn:"",qualification:"",experience:""}),[r,n]=b.useState(!1),l=d=>{t({...e,[d.target.name]:d.target.value})},s=d=>{d.preventDefault(),n(!0),console.log("Mentor Application:",e),t({firstName:"",lastName:"",email:"",password:"",phone:"",expertiseIn:"",qualification:"",experience:""})};return u.jsxs("section",{className:"mentor-form-section",id:"mentor-form",children:[u.jsxs("div",{className:"mentor-form-card",children:[u.jsx("h2",{children:"Become a Mentor at HG's TalentMinds LMS"}),u.jsx("p",{className:"mentor-form-subtitle",children:"Share your expertise and guide learners worldwide 🚀"}),r?u.jsxs("div",{className:"mentor-success-msg",children:[u.jsx("h2",{children:"✅ Thank you for applying!"}),u.jsxs("p",{children:["Your application has been received. ",u.jsx("br",{}),"Our team will review and contact you soon. ",u.jsx("br",{}),"Meanwhile, explore our mentor resources and community!"]})]}):u.jsxs("form",{className:"mentor-form",onSubmit:s,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",name:"firstName",value:e.firstName,onChange:l,placeholder:" ",required:!0}),u.jsx("label",{children:"First Name *"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",name:"lastName",value:e.lastName,onChange:l,placeholder:" "}),u.jsx("label",{children:"Last Name"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"email",name:"email",value:e.email,onChange:l,placeholder:" ",required:!0}),u.jsx("label",{children:"Email *"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"password",name:"password",value:e.password,onChange:l,placeholder:" ",required:!0,minLength:6}),u.jsx("label",{children:"Password *"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",name:"phone",value:e.phone,onChange:l,placeholder:" ",pattern:"^[0-9]{10,15}$"}),u.jsx("label",{children:"Phone"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",name:"expertiseIn",value:e.expertiseIn,onChange:l,placeholder:" ",required:!0}),u.jsx("label",{children:"Area of Expertise *"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",name:"qualification",value:e.qualification,onChange:l,placeholder:" "}),u.jsx("label",{children:"Qualification"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",name:"experience",value:e.experience,onChange:l,placeholder:" "}),u.jsx("label",{children:"Experience (years)"})]}),u.jsx("button",{type:"submit",className:"mentor-cta-btn",children:"Submit Application"})]})]}),u.jsx("style",{children:`
        .mentor-form-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #f9fafb;
          padding: 40px 20px;
        }
        .mentor-form-card {
          background: #fff;
          padding: 40px 32px;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          width: 100%;
          max-width: 520px;
          text-align: center;
        }
        .mentor-form-card h2 {
          font-size: 1.8rem;
          margin-bottom: 8px;
          color: #111827;
        }
        .mentor-form-subtitle {
          color: #6b7280;
          margin-bottom: 28px;
          font-size: 0.95rem;
        }
        .mentor-form {
          text-align: left;
        }
        .form-group {
          position: relative;
          margin-bottom: 20px;
        }
        .form-group input {
          width: 100%;
          padding: 14px 12px;
          border: 1.5px solid #d1d5db;
          border-radius: 8px;
          outline: none;
          background: #f9fafb;
          transition: all 0.2s;
          font-size: 1rem;
        }
        .form-group input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
        }
        .form-group label {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          font-size: 0.95rem;
          color: #9ca3af;
          transition: 0.2s;
          background: #fff;
          padding: 0 4px;
        }
        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 0.75rem;
          color: #2563eb;
        }
        .mentor-cta-btn {
          width: 100%;
          padding: 14px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }
        .mentor-cta-btn:hover {
          background: #1e40af;
        }
        .mentor-success-msg {
          background: #f8fafc;
          border-radius: 14px;
          box-shadow: 0 2px 12px rgba(37,99,235,0.08);
          padding: 32px 24px;
          margin-top: 32px;
          text-align: center;
          color: #2563eb;
        }
        .mentor-success-msg h2 {
          margin-bottom: 12px;
          font-size: 1.5rem;
          font-weight: 800;
        }
        .mentor-success-msg p {
          color: #374151;
          font-size: 1.08rem;
        }
      `})]})}function YM(){return u.jsxs("div",{children:[u.jsx(BM,{}),u.jsx(qM,{}),u.jsx(UM,{}),u.jsx(HM,{})]})}function GM(){const e=it(),t=[{id:"fullstack",title:"Full Stack Development",description:"Master front-end and back-end technologies. Learn React, Node.js, Express, and MongoDB by building real-world applications from scratch.",image:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg"},{id:"datascience",title:"Data Science & AI",description:"Explore data analytics, machine learning, and AI models. Learn Python, Pandas, TensorFlow, and gain expertise in predictive modeling.",image:"https://img.freepik.com/free-photo/artificial-intelligence-digital-transformation-concept_53876-124677.jpg"},{id:"cybersecurity",title:"Cybersecurity & Ethical Hacking",description:"Understand the world of security and ethical hacking. Learn to identify threats, protect systems, and perform penetration testing safely.",image:"https://img.freepik.com/free-photo/cyber-security-concept-digital-padlock-with-binary-data_53876-104097.jpg"},{id:"cloud-devops",title:"Cloud Computing & DevOps",description:"Get hands-on experience with AWS, Azure, Docker, Kubernetes, and CI/CD pipelines. Build scalable and automated solutions for enterprises.",image:"https://img.freepik.com/free-photo/devops-engineer-working-computer-multiple-screens_482257-21656.jpg"}];return u.jsxs("section",{className:"explore-page",children:[u.jsxs("div",{className:"explore-container",children:[u.jsx("h1",{children:"Explore Our Learning Programs"}),u.jsxs("p",{className:"intro",children:["At ",u.jsx("strong",{children:"HG’s TalentMinds"}),", we bridge the gap between learning and industry. Each program combines expert mentorship, hands-on projects, and globally recognized certifications to help you become career-ready."]}),u.jsx("div",{className:"program-grid",children:t.map(r=>u.jsxs("div",{className:"program-card",children:[u.jsx("img",{src:r.image,alt:r.title}),u.jsxs("div",{className:"program-content",children:[u.jsx("h3",{children:r.title}),u.jsx("p",{children:r.description}),u.jsx("button",{onClick:()=>e(`/programs/${r.id}`),className:"join-btn",children:"Join Program →"})]})]},r.id))}),u.jsxs("div",{className:"highlights",children:[u.jsxs("div",{className:"highlight",children:[u.jsx("h4",{children:"🎓 Industry-Recognized Certificates"}),u.jsx("p",{children:"Gain credentials trusted by top companies — boost your résumé and stand out in interviews."})]}),u.jsxs("div",{className:"highlight",children:[u.jsx("h4",{children:"🧑‍🏫 Expert Mentorship"}),u.jsx("p",{children:"Learn from experienced mentors and industry professionals who guide your journey personally."})]}),u.jsxs("div",{className:"highlight",children:[u.jsx("h4",{children:"⚙️ Real-World Projects"}),u.jsx("p",{children:"Apply what you learn through hands-on labs, assignments, and hackathons designed by experts."})]}),u.jsxs("div",{className:"highlight",children:[u.jsx("h4",{children:"🌍 Community & Networking"}),u.jsx("p",{children:"Join a global network of learners, developers, and professionals. Grow, collaborate, and share ideas."})]})]}),u.jsxs("div",{className:"cta-section",children:[u.jsx("h2",{children:"Start Your Learning Journey Today 🚀"}),u.jsx("p",{children:"Pick a program, build skills that matter, and become part of the HG’s TalentMinds tech community."}),u.jsx("button",{onClick:()=>{window.scrollTo({top:0,behavior:"instant"}),e("/")},className:"back-btn",children:"← Back to Home"})]})]}),u.jsx("style",{children:`
        .explore-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #fff7ed, #fde68a);
          font-family: 'Inter', sans-serif;
          padding: 60px 20px;
          display: flex;
          justify-content: center;
        }

        .explore-container {
          width: 100%;
          max-width: 1200px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          padding: 50px 40px;
          text-align: center;
        }

        h1 {
          font-size: 2.8rem;
          color: #1f2937;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .intro {
          font-size: 1.15rem;
          color: #4b5563;
          max-width: 800px;
          margin: 0 auto 50px;
          line-height: 1.8;
        }

        .program-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .program-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          overflow: hidden;
          text-align: left;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .program-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .program-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .program-card h3 {
          color: #f59e0b;
          font-size: 1.3rem;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .program-card p {
          color: #475569;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .join-btn {
          background: #f59e0b;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          align-self: flex-start;
          transition: background 0.25s ease, transform 0.2s ease;
        }

        .join-btn:hover {
          background: #d97706;
          transform: translateY(-2px);
        }

        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
        }

        .highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }

        .highlight {
          background: #fffbea;
          border: 1px solid #fde68a;
          border-radius: 14px;
          padding: 20px;
          text-align: left;
        }

        .highlight h4 {
          color: #b45309;
          font-size: 1.15rem;
          margin-bottom: 10px;
        }

        .highlight p {
          color: #444;
          line-height: 1.6;
        }

        .cta-section {
          background: #fff7ed;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .cta-section h2 {
          color: #1f2937;
          font-size: 2rem;
          margin-bottom: 16px;
        }

        .cta-section p {
          color: #4b5563;
          font-size: 1.1rem;
          margin-bottom: 30px;
        }

        .back-btn {
          background: #f59e0b;
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease;
        }

        .back-btn:hover {
          background: #d97706;
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }
          .intro {
            font-size: 1rem;
          }
          .cta-section h2 {
            font-size: 1.5rem;
          }
        }
      `})]})}function KM(){const e=it();return u.jsxs("section",{className:"page",children:[u.jsx("h1",{children:"Join the Global TalentMinds Community"}),u.jsx("p",{children:"Connect, learn, and grow with professionals and mentors around the world."}),u.jsx("button",{onClick:()=>{window.scrollTo({top:0,behavior:"instant"}),e("/")},className:"back-btn",children:"← Back to Home"}),u.jsx("style",{children:`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 40px;
        }
        h1 {
          font-size: 2.8rem;
          color: #1e3a8a;
          margin-bottom: 20px;
        }
        p {
          max-width: 600px;
          font-size: 1.2rem;
          color: #374151;
        }
        .back-btn {
          margin-top: 40px;
          background: #2563eb;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .back-btn:hover {
          background: #1d4ed8;
        }
      `})]})}function WM(){const e=it();return u.jsxs("section",{className:"page",children:[u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"About TalentMinds"}),u.jsx("p",{className:"subtitle",children:"We are a global learning platform dedicated to bridging the gap between academic education and real-world employability."}),u.jsxs("div",{className:"grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🌱 Our Mission"}),u.jsx("p",{children:"To empower individuals and organizations with cutting-edge skills that drive growth, innovation, and success in the digital age."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"👩‍🏫 Learning That Works"}),u.jsx("p",{children:"Our programs blend mentor guidance, hands-on projects, and live learning to ensure every learner becomes job-ready."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🌍 Our Impact"}),u.jsx("p",{children:"Over 8 million learners and 1,500+ companies trust TalentMinds to deliver measurable career and business outcomes."})]})]}),u.jsxs("div",{className:"cta",children:[u.jsx("h2",{children:"Discover the future of learning with TalentMinds 🚀"}),u.jsx("button",{onClick:()=>e("/explore-programs"),className:"cta-btn",children:"Explore Programs →"}),u.jsx("button",{onClick:()=>{window.scrollTo({top:0,behavior:"instant"}),e("/")},className:"back-btn",children:"← Back to Home"})]})]}),u.jsx("style",{children:`
        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #dcfce7, #bbf7d0);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.8rem;
          color: #166534;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          font-size: 1.15rem;
          color: #14532d;
          max-width: 750px;
          margin: 0 auto 50px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 22px;
          box-shadow: 0 6px 20px rgba(22,101,52,0.1);
          transition: all 0.3s ease;
          text-align: left;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(22,101,52,0.15);
        }
        .card h3 {
          color: #15803d;
          margin-bottom: 10px;
        }
        .card p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cta h2 {
          color: #14532d;
          font-size: 1.6rem;
          margin-bottom: 30px;
        }
        .cta-btn {
          background: #16a34a;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          margin-right: 10px;
          transition: background 0.3s ease;
        }
        .cta-btn:hover {
          background: #15803d;
        }
        .back-btn {
          background: transparent;
          color: #14532d;
          border: 2px solid #16a34a;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-btn:hover {
          background: #dcfce7;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .cta h2 { font-size: 1.3rem; }
        }
      `})]})}function VM(){const e=it(),t=[{title:"Full Stack Development Bootcamp",desc:"Become a complete web developer. Learn HTML, CSS, React, Node.js, Express & MongoDB through hands-on projects.",duration:"6 Months",level:"Beginner to Advanced",learners:"12,000+ learners"},{title:"Data Science & Machine Learning Program",desc:"Master Python, Pandas, Machine Learning, Deep Learning, and AI — with practical real-world datasets.",duration:"8 Months",level:"Intermediate",learners:"9,500+ learners"},{title:"Cybersecurity & Ethical Hacking Certification",desc:"Understand network security, penetration testing, risk management, and tools like Wireshark & Metasploit.",duration:"5 Months",level:"Beginner to Pro",learners:"7,800+ learners"},{title:"Cloud Computing & DevOps Mastery",desc:"Work with AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines to automate enterprise deployments.",duration:"7 Months",level:"Intermediate to Advanced",learners:"6,200+ learners"}];return u.jsxs("section",{className:"browse-page",children:[u.jsxs("div",{className:"browse-container",children:[u.jsx("h1",{children:"Browse Our Courses"}),u.jsx("p",{className:"browse-subtitle",children:"Choose from our top-rated career programs designed by industry experts and delivered through live, mentor-led learning."}),u.jsx("div",{className:"course-grid",children:t.map((r,n)=>u.jsxs("div",{className:"course-card",children:[u.jsx("h3",{children:r.title}),u.jsx("p",{children:r.desc}),u.jsxs("div",{className:"meta",children:[u.jsxs("span",{children:["⏳ ",r.duration]}),u.jsxs("span",{children:["📈 ",r.level]}),u.jsxs("span",{children:["👩‍🎓 ",r.learners]})]}),u.jsx("button",{className:"enroll-btn",onClick:()=>e("/login"),children:"Enroll Now →"})]},n))}),u.jsx("button",{onClick:()=>{window.scrollTo({top:0,behavior:"instant"}),e("/")},className:"back-btn",children:"← Back to Home"})]}),u.jsx("style",{children:`
        .browse-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #eef2ff, #e0e7ff);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .browse-container {
          max-width: 1150px;
          width: 100%;
        }
        h1 {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 16px;
        }
        .browse-subtitle {
          font-size: 1.1rem;
          color: #475569;
          max-width: 700px;
          margin: 0 auto 50px;
        }
        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }
        .course-card {
          background: #fff;
          padding: 25px 20px;
          border-radius: 14px;
          box-shadow: 0 6px 20px rgba(11,77,163,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(37,99,235,0.15);
        }
        .course-card h3 {
          color: #0b4da3;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .course-card p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }
        .enroll-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .enroll-btn:hover {
          background: #1d4ed8;
        }
        .back-btn {
          margin-top: 50px;
          background: #0b4da3;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .back-btn:hover {
          background: #09377a;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .course-card { padding: 20px; }
        }
      `})]})}function XM(){const e=it();return u.jsxs("section",{className:"page",children:[u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"TalentMinds for Business"}),u.jsx("p",{className:"subtitle",children:"Empower your workforce with customized learning paths, expert-led sessions, and performance-driven upskilling programs."}),u.jsxs("div",{className:"grid",children:[u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🏢 Tailored Learning Paths"}),u.jsx("p",{children:"Create personalized training programs aligned with your organization’s goals, from onboarding to leadership development."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"📊 Measurable Outcomes"}),u.jsx("p",{children:"Track learning progress, certifications, and ROI with real-time analytics dashboards designed for enterprise insights."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🧑‍🏫 Industry-Expert Trainers"}),u.jsx("p",{children:"Deliver training from mentors with proven expertise across cloud, full stack, data science, and emerging technologies."})]}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"🌍 Scalable Global Platform"}),u.jsx("p",{children:"Our LMS supports distributed teams with multilingual content, custom branding, and cloud scalability."})]})]}),u.jsxs("div",{className:"cta",children:[u.jsx("h2",{children:"Accelerate your workforce transformation with TalentMinds 🚀"}),u.jsx("button",{onClick:()=>e("/contact"),className:"cta-btn",children:"Request a Demo →"}),u.jsx("button",{onClick:()=>{window.scrollTo({top:0,behavior:"instant"}),e("/")},className:"back-btn",children:"← Back to Home"})]})]}),u.jsx("style",{children:`
        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #ede9fe, #ddd6fe);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.8rem;
          color: #4c1d95;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          font-size: 1.15rem;
          color: #3730a3;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 22px;
          box-shadow: 0 6px 20px rgba(76,29,149,0.1);
          transition: all 0.3s ease;
          text-align: left;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(76,29,149,0.15);
        }
        .card h3 {
          color: #5b21b6;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        .card p {
          color: #374151;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .cta h2 {
          color: #4c1d95;
          font-size: 1.6rem;
          margin-bottom: 30px;
        }
        .cta-btn {
          background: #7c3aed;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          margin-right: 10px;
          transition: background 0.3s ease;
        }
        .cta-btn:hover {
          background: #6d28d9;
        }
        .back-btn {
          background: transparent;
          color: #4c1d95;
          border: 2px solid #7c3aed;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-btn:hover {
          background: #ede9fe;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .cta h2 { font-size: 1.3rem; }
        }
      `})]})}function FM(){return u.jsxs("section",{className:"program-details-page",children:[u.jsxs("div",{className:"program-details-container",children:[u.jsx("h1",{children:"Full Stack Web Development Program"}),u.jsx("img",{src:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901785.jpg",alt:"Full Stack Development",className:"program-banner"}),u.jsxs("p",{className:"intro",children:["Become a ",u.jsx("strong",{children:"Full Stack Developer"})," through HG’s TalentMinds. Learn to build complete web applications using modern frameworks like React, Node.js, and MongoDB."]}),u.jsxs("div",{className:"details-grid",children:[u.jsxs("div",{children:[u.jsx("h3",{children:"💻 What You’ll Learn"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Frontend development with React"}),u.jsx("li",{children:"Backend with Node.js & Express"}),u.jsx("li",{children:"Database design with MongoDB"}),u.jsx("li",{children:"Version control & deployment with Git & CI/CD"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{children:"🎯 Outcomes"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Build real-world full-stack projects"}),u.jsx("li",{children:"Get certified as a Full Stack Developer"}),u.jsx("li",{children:"Career support for tech placements"})]})]})]}),u.jsxs("section",{className:"why-talentminds wrap",children:[u.jsx("h2",{children:"Why Choose HG’s TalentMinds?"}),u.jsx("p",{className:"intro",children:"We offer the perfect blend of mentorship, projects, and real hiring connections."}),u.jsxs("div",{className:"why-grid",children:[u.jsxs("div",{className:"why-card",children:[u.jsx("h3",{children:"👩‍🏫 Mentorship"}),u.jsx("p",{children:"Learn from experienced developers."})]}),u.jsxs("div",{className:"why-card",children:[u.jsx("h3",{children:"🧩 Projects"}),u.jsx("p",{children:"Build job-ready apps and showcase your skills."})]}),u.jsxs("div",{className:"why-card",children:[u.jsx("h3",{children:"🏆 Certification"}),u.jsx("p",{children:"Globally recognized credentials."})]})]})]})]}),u.jsx("style",{children:`
        .program-details-page { background: linear-gradient(135deg,#fff7ed,#fde68a);min-height:100vh;display:flex;justify-content:center;padding:60px 20px;font-family:'Inter',sans-serif;}
        .program-details-container{background:#fff;border-radius:20px;box-shadow:0 8px 24px rgba(0,0,0,0.08);padding:50px;max-width:1000px;width:100%;text-align:center;}
        .program-banner{width:100%;height:300px;object-fit:cover;border-radius:12px;margin:20px 0 40px;}
        .intro{color:#4b5563;font-size:1.1rem;line-height:1.8;margin-bottom:40px;}
        .details-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;text-align:left;}
        .why-talentminds{background:linear-gradient(135deg,#ecfeff,#f0fdfa);padding:60px 20px;border-radius:30px;margin-top:50px;}
        .why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;}
        .why-card{background:#fff;padding:20px;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.05);}
      `})]})}function ZM(){const e=it();return u.jsxs("section",{className:"program-details-page",children:[u.jsxs("div",{className:"program-details-container",children:[u.jsx("h1",{children:"Data Science & AI Program"}),u.jsx("img",{src:"https://img.freepik.com/free-photo/artificial-intelligence-digital-transformation-concept_53876-124677.jpg",alt:"Data Science & AI",className:"program-banner"}),u.jsxs("p",{className:"intro",children:["Master the world of ",u.jsx("strong",{children:"Data Science and Artificial Intelligence"})," through HG’s TalentMinds. Learn Python, Pandas, TensorFlow, and advanced machine learning algorithms to turn data into insights."]}),u.jsxs("div",{className:"details-grid",children:[u.jsxs("div",{children:[u.jsx("h3",{children:"📊 What You’ll Learn"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Python programming & data manipulation"}),u.jsx("li",{children:"Machine Learning, Deep Learning, and NLP"}),u.jsx("li",{children:"Data visualization using Matplotlib & Seaborn"}),u.jsx("li",{children:"Model deployment and performance tracking"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{children:"🎓 Outcomes"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Certified Data Science professional"}),u.jsx("li",{children:"Hands-on ML projects and Kaggle-ready portfolio"}),u.jsx("li",{children:"Career support and interview preparation"})]})]})]}),u.jsx("button",{onClick:()=>e("/explore-programs"),className:"back-btn",children:"← Back to Explore Programs"})]}),u.jsx("style",{children:`
        .program-details-page { background: linear-gradient(135deg,#fff7ed,#fde68a);min-height:100vh;display:flex;justify-content:center;padding:60px 20px;font-family:'Inter',sans-serif;}
        .program-details-container{background:#fff;border-radius:20px;box-shadow:0 8px 24px rgba(0,0,0,0.08);padding:50px;max-width:1000px;width:100%;text-align:center;}
        .program-banner{width:100%;height:300px;object-fit:cover;border-radius:12px;margin:20px 0 40px;}
        h1{color:#1f2937;font-size:2.4rem;font-weight:800;}
        .intro{color:#4b5563;font-size:1.1rem;line-height:1.8;margin-bottom:40px;}
        .details-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;text-align:left;}
        h3{color:#b45309;margin-bottom:12px;}
        ul{color:#444;line-height:1.8;padding-left:20px;}
        .back-btn{margin-top:40px;background:#f59e0b;color:white;border:none;padding:12px 28px;border-radius:8px;font-weight:600;cursor:pointer;transition:background 0.25s ease;}
        .back-btn:hover{background:#d97706;}
      `})]})}function QM(){const e=it();return u.jsxs("section",{className:"program-details-page",children:[u.jsxs("div",{className:"program-details-container",children:[u.jsx("h1",{children:"Cybersecurity & Ethical Hacking Program"}),u.jsx("img",{src:"https://img.freepik.com/free-photo/cyber-security-concept-digital-padlock-with-binary-data_53876-104097.jpg",alt:"Cybersecurity & Ethical Hacking",className:"program-banner"}),u.jsxs("p",{className:"intro",children:["The ",u.jsx("strong",{children:"HG’s TalentMinds Cybersecurity & Ethical Hacking Program"}),"is built for aspiring ethical hackers and security professionals. Learn to identify, prevent, and respond to cyber threats while protecting organizations from real-world attacks."]}),u.jsxs("div",{className:"details-grid",children:[u.jsxs("div",{children:[u.jsx("h3",{children:"🔐 What You’ll Learn"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Foundations of cybersecurity and ethical hacking"}),u.jsx("li",{children:"Network security, firewalls, and VPNs"}),u.jsx("li",{children:"Vulnerability assessment & penetration testing (VAPT)"}),u.jsx("li",{children:"Security tools like Metasploit, Wireshark, and Burp Suite"}),u.jsx("li",{children:"Incident response and system hardening"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{children:"🎯 Outcomes"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Certified Ethical Hacker-level skills"}),u.jsx("li",{children:"Ability to secure real-world applications and systems"}),u.jsx("li",{children:"Hands-on cybersecurity project portfolio"}),u.jsx("li",{children:"Job-ready skills for roles like SOC Analyst or Pen Tester"})]})]})]}),u.jsx("button",{onClick:()=>e("/explore-programs"),className:"back-btn",children:"← Back to Explore Programs"})]}),u.jsx("style",{children:`
        .program-details-page {
          background: linear-gradient(135deg, #fff7ed, #fde68a);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          padding: 60px 20px;
          font-family: 'Inter', sans-serif;
        }

        .program-details-container {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          padding: 50px;
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .program-banner {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          margin: 20px 0 40px;
        }

        h1 {
          color: #1f2937;
          font-size: 2.4rem;
          font-weight: 800;
        }

        .intro {
          color: #4b5563;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          text-align: left;
        }

        h3 {
          color: #b45309;
          margin-bottom: 12px;
        }

        ul {
          color: #444;
          line-height: 1.8;
          padding-left: 20px;
        }

        .back-btn {
          margin-top: 40px;
          background: #f59e0b;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .back-btn:hover {
          background: #d97706;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }
          .intro {
            font-size: 1rem;
          }
        }
      `})]})}function JM(){const e=it();return u.jsxs("section",{className:"program-details-page",children:[u.jsxs("div",{className:"program-details-container",children:[u.jsx("h1",{children:"Cloud Computing & DevOps Program"}),u.jsx("img",{src:"https://img.freepik.com/free-photo/devops-engineer-working-computer-multiple-screens_482257-21656.jpg",alt:"Cloud Computing & DevOps",className:"program-banner"}),u.jsxs("p",{className:"intro",children:["The ",u.jsx("strong",{children:"HG’s TalentMinds Cloud & DevOps Program"}),"empowers you to design scalable systems, manage deployments, and automate workflows using modern cloud platforms like AWS, Azure, and Google Cloud."]}),u.jsxs("div",{className:"details-grid",children:[u.jsxs("div",{children:[u.jsx("h3",{children:"☁️ What You’ll Learn"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Cloud architecture principles (AWS, Azure, GCP)"}),u.jsx("li",{children:"CI/CD pipelines using Jenkins and GitHub Actions"}),u.jsx("li",{children:"Containerization with Docker and Kubernetes"}),u.jsx("li",{children:"Infrastructure as Code (Terraform, CloudFormation)"}),u.jsx("li",{children:"Monitoring & scaling using Prometheus and Grafana"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{children:"🏆 Outcomes"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Certified Cloud & DevOps Practitioner credentials"}),u.jsx("li",{children:"Hands-on deployment experience across environments"}),u.jsx("li",{children:"Practical project portfolio for interviews"}),u.jsx("li",{children:"In-demand DevOps engineer skills"})]})]})]}),u.jsx("button",{onClick:()=>e("/explore-programs"),className:"back-btn",children:"← Back to Explore Programs"})]}),u.jsx("style",{children:`
        .program-details-page {
          background: linear-gradient(135deg, #fff7ed, #fde68a);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          padding: 60px 20px;
          font-family: 'Inter', sans-serif;
        }

        .program-details-container {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          padding: 50px;
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .program-banner {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          margin: 20px 0 40px;
        }

        h1 {
          color: #1f2937;
          font-size: 2.4rem;
          font-weight: 800;
        }

        .intro {
          color: #4b5563;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          text-align: left;
        }

        h3 {
          color: #b45309;
          margin-bottom: 12px;
        }

        ul {
          color: #444;
          line-height: 1.8;
          padding-left: 20px;
        }

        .back-btn {
          margin-top: 40px;
          background: #f59e0b;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .back-btn:hover {
          background: #d97706;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }
          .intro {
            font-size: 1rem;
          }
        }
      `})]})}const sg=[{title:"Modern Frontend Engineering",subtitle:"Master scalable UI architecture using React 18 and Tailwind CSS.",image:"https://images.unsplash.com/photo-1581276879432-15a19d654956?auto=format&fit=crop&w=900&q=60",slug:"modern-frontend-engineering",instructor:"Sarah Johnson",category:"Frontend Development",duration:"8 weeks",level:"Intermediate",description:"This course guides learners through modern frontend development practices, covering React hooks, component design patterns, and Tailwind-based UI systems."},{title:"AI-Powered Web Apps",subtitle:"Learn to build intelligent web experiences using OpenAI, LangChain, and vector databases.",image:"https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=900&q=60",slug:"ai-powered-web-apps",instructor:"Michael Chen",category:"Artificial Intelligence",duration:"10 weeks",level:"Advanced",description:"Explore how to integrate generative AI and language models into modern web applications using OpenAI APIs, LangChain, and embeddings-based search."},{title:"Next-Gen Mobile Development",subtitle:"Create seamless cross-platform apps using React Native and Expo.",image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",slug:"nextgen-mobile-development",instructor:"Lisa Brown",category:"Mobile Development",duration:"6 weeks",level:"Beginner",description:"Build, test, and deploy mobile apps for iOS and Android from a single codebase using React Native, Expo, and modern design systems."}],e8=e=>{switch(e.toLowerCase().trim()){case"our talent pick":return{background:"linear-gradient(90deg, #0b4da3 0%, #38bdf8 100%)",icon:"⭐",color:"#fff"};case"top trainer":return{background:"#f59e42",icon:"🏆",color:"#212121"};case"trending":return{background:"#10b981",icon:"🔥",color:"#fff"};case"new":return{background:"#ef4444",icon:"✨",color:"#fff"};case"certificate included":return{background:"#8b5cf6",icon:"📜",color:"#fff"};case"live class":return{background:"#f97316",icon:"🔴",color:"#fff"};default:return{background:"#6b7280",icon:"🏷️",color:"#fff"}}};function t8({course:e}){const t=e?.students??0,r=e?.rating??0,n=e?.price??0,l=e?.subtitle??"",s=e?.slug??"",d=e?.title??"Untitled Course",p=e?.image??"https://via.placeholder.com/300x160?text=No+Image",h=e?.badges??(e?.ourTalent?["Our Talent Pick"]:[]);return u.jsxs("article",{className:"tm-course-card",children:[u.jsx(we,{to:`/courses/${s}`,children:u.jsxs("div",{className:"tm-thumb",children:[u.jsx("img",{src:p,alt:d,loading:"lazy"}),u.jsx("div",{className:"tm-badge-container",children:h.map((m,g)=>{const x=e8(m);return u.jsxs("span",{className:"tm-badge",style:{background:x.background,color:x.color},children:[m," ",u.jsx("span",{className:"tm-badge-icon",children:x.icon})]},g)})})]})}),u.jsxs("div",{className:"tm-body",children:[u.jsx("h3",{className:"tm-title",children:u.jsx(we,{to:`/courses/${s}`,children:d})}),u.jsx("p",{className:"tm-sub",children:l}),u.jsxs("div",{className:"tm-meta",children:[u.jsxs("span",{className:"tm-rating",children:[u.jsx("span",{className:"star",children:"★"})," ",r]}),u.jsxs("span",{className:"tm-students",children:[t.toLocaleString()," learners"]})]}),u.jsxs("div",{className:"tm-bottom",children:[u.jsx("span",{className:`tm-price ${n===0?"free":""}`,children:n===0?"Free":`₹${n}`}),u.jsx(we,{to:`/courses/${s}`,className:"tm-enroll",children:"View Course"})]})]}),u.jsx("style",{children:`
        .tm-course-card {
          border-radius: 12px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.2s;
          height: 100%;
        }

        .tm-course-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 24px rgba(11,77,163,0.15);
        }

        .tm-thumb {
          position: relative;
          height: 180px;
          background: #f6f7fb;
          overflow: hidden;
        }

        .tm-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .tm-course-card:hover img {
          transform: scale(1.05);
        }

        /* BADGE CONTAINER STYLING */
        .tm-badge-container {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            flex-wrap: wrap; 
            gap: 8px; 
            z-index: 10;
        }

        .tm-badge {
          /* Background and color are set via inline styles from getBadgeStyle */
          font-size: 13px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 4px;
          letter-spacing: 0.3px;
          white-space: nowrap;
          text-transform: capitalize; 
        }

        .tm-badge-icon {
          font-size: 14px;
        }
        /* END BADGE STYLING */

        .tm-body {
          padding: 18px 16px 16px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .tm-title {
          margin: 0 0 8px;
          font-size: 19px;
          color: #0b4da3;
          font-weight: 700;
          line-height: 1.3;
        }

        .tm-title a {
          color: inherit;
          text-decoration: none;
        }

        .tm-sub {
          margin: 0 0 12px;
          color: #4b5563;
          font-size: 15px;
          min-height: 36px;
        }

        .tm-meta {
          display: flex;
          gap: 12px;
          align-items: center;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 14px;
        }

        .tm-rating {
          color: #f59e42;
          font-weight: 600;
        }

        .tm-students {
          color: #6b7280;
        }

        .tm-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .tm-price {
          font-size: 17px;
          font-weight: 700;
          color: #0b4da3;
        }

        .tm-price.free {
          color: #059669;
        }

        .tm-enroll {
          display: inline-block;
          padding: 8px 18px;
          background: #0b4da3;
          color: #fff;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          font-size: 15px;
          transition: background 0.2s ease;
        }

        .tm-enroll:hover {
          background: #083b7a;
        }
      `})]})}function r8({courses:e}){return u.jsxs("section",{className:"tm-grid",children:[e.map(t=>u.jsx(t8,{course:t},t.id)),u.jsx("style",{children:`
        .tm-grid { max-width:1100px; margin:30px auto; display:grid; gap:18px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); padding:0 18px; }
      `})]})}function n8(){return new URLSearchParams(gt().search)}function a8(){const t=n8().get("search")||"",[r,n]=b.useState(t),[l,s]=b.useState("All"),[d,p]=b.useState("all"),h=b.useMemo(()=>["All",...Array.from(new Set(sg.map(g=>g.category)))],[]),m=b.useMemo(()=>sg.filter(g=>!(l!=="All"&&g.category!==l||d==="free"&&g.price!==0||d==="paid"&&g.price===0||r&&!`${g.title} ${g.subtitle} ${g.category}`.toLowerCase().includes(r.toLowerCase()))),[l,d,r]);return u.jsx("div",{style:{padding:"28px 0"},children:u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 18px"},children:[u.jsx("h2",{style:{marginBottom:6},children:"All courses"}),u.jsx("p",{style:{color:"#6b7280",marginTop:0},children:"Filter and find the right course for you"}),u.jsxs("div",{style:{display:"flex",gap:12,marginTop:18,marginBottom:18,flexWrap:"wrap"},children:[u.jsx("input",{value:r,onChange:g=>n(g.target.value),placeholder:"Search courses...",style:{padding:10,borderRadius:6,border:"1px solid #e6e9ef",minWidth:220}}),u.jsx("select",{value:l,onChange:g=>s(g.target.value),style:{padding:10,borderRadius:6,border:"1px solid #e6e9ef"},children:h.map(g=>u.jsx("option",{value:g,children:g},g))}),u.jsxs("select",{value:d,onChange:g=>p(g.target.value),style:{padding:10,borderRadius:6,border:"1px solid #e6e9ef"},children:[u.jsx("option",{value:"all",children:"All prices"}),u.jsx("option",{value:"free",children:"Free"}),u.jsx("option",{value:"paid",children:"Paid"})]})]}),u.jsx(r8,{courses:m}),m.length===0&&u.jsx("p",{style:{textAlign:"center",color:"#6b7280"},children:"No courses match your filters."})]})})}function i8(){const{slug:e}=KC(),t=sg.find(r=>r.slug===e);return b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]),t?u.jsx("div",{style:{maxWidth:1200,margin:"40px auto",padding:"0 20px"},children:u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 340px",gap:30,alignItems:"flex-start"},children:[u.jsxs("div",{children:[u.jsx("img",{src:t.image,alt:t.title,onError:r=>r.target.src="https://via.placeholder.com/800x400?text=Image+Unavailable",style:{width:"100%",borderRadius:10,objectFit:"cover",maxHeight:400,boxShadow:"0 3px 12px rgba(0,0,0,0.1)"}}),u.jsx("h1",{style:{marginTop:20,color:"#0b4da3"},children:t.title}),u.jsx("p",{style:{color:"#4b5563",fontSize:"1.05rem"},children:t.subtitle}),u.jsx("h3",{style:{marginTop:30,color:"#1e293b"},children:"📘 About this Course"}),u.jsx("p",{style:{color:"#374151",lineHeight:1.7,marginTop:8},children:t.description||"This comprehensive course helps you master both fundamentals and advanced concepts through hands-on projects, quizzes, and practical exercises — preparing you for real-world applications and certifications."}),u.jsx("h3",{style:{marginTop:30,color:"#1e293b"},children:"🎯 What You'll Learn"}),u.jsx("ul",{style:{marginTop:12,color:"#374151",lineHeight:1.7},children:t.modules&&t.modules.length>0?t.modules.map(r=>u.jsxs("li",{children:[r.title," — ",u.jsx("small",{children:r.duration})]},r.id)):u.jsxs(u.Fragment,{children:[u.jsx("li",{children:"Understand key concepts with practical demonstrations"}),u.jsx("li",{children:"Hands-on projects and assignments"}),u.jsx("li",{children:"Build real-world applications step-by-step"}),u.jsx("li",{children:"Learn from industry experts and mentors"})]})}),u.jsx("h3",{style:{marginTop:30,color:"#1e293b"},children:"👨‍🏫 Instructor"}),u.jsxs("p",{style:{color:"#475569"},children:[u.jsx("strong",{children:t.instructor||"John Doe"})," — Senior Trainer with 10+ years of industry experience. Specializes in enterprise-grade projects and advanced tools used in modern IT companies."]}),u.jsx("h3",{style:{marginTop:30,color:"#1e293b"},children:"⭐ Student Reviews"}),u.jsxs("p",{style:{color:"#475569"},children:["Average Rating: ",u.jsx("strong",{children:t.rating})," / 5.0 — Trusted by"," ",u.jsx("strong",{children:t.students.toLocaleString()})," learners worldwide."]}),u.jsx(we,{to:"/",style:{display:"inline-block",marginTop:30,color:"#2563eb",fontWeight:600,textDecoration:"none"},children:"← Back to All Courses"})]}),u.jsxs("aside",{style:{border:"1px solid #e6e9ef",padding:20,borderRadius:10,boxShadow:"0 3px 10px rgba(0,0,0,0.05)",background:"#fff",position:"sticky",top:80},children:[u.jsx("img",{src:t.image,alt:t.title,onError:r=>r.target.src="https://via.placeholder.com/400x250?text=Course+Preview",style:{width:"100%",borderRadius:8,objectFit:"cover",marginBottom:16}}),u.jsx("div",{style:{fontWeight:700,fontSize:22,color:"#111827",marginBottom:6},children:t.price===0?"Free":`₹${t.price}`}),u.jsxs("div",{style:{color:"#6b7280",marginBottom:8},children:["⭐ ",t.rating," | ",t.students.toLocaleString()," learners"]}),u.jsx("button",{style:{width:"100%",background:"linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)",color:"#fff",padding:"12px 0",fontSize:"1rem",fontWeight:700,border:"none",borderRadius:6,cursor:"pointer",marginBottom:14,transition:"0.2s"},onMouseEnter:r=>r.target.style.background="linear-gradient(90deg, #1d4ed8 0%, #0ea5e9 100%)",onMouseLeave:r=>r.target.style.background="linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)",children:"Enroll Now"}),u.jsxs("div",{style:{background:"#f8fafc",borderRadius:8,padding:"10px 12px",fontSize:"0.95rem",color:"#475569"},children:["🎓 Lifetime access",u.jsx("br",{}),"🧾 Certificate on completion",u.jsx("br",{}),"💻 Hands-on projects",u.jsx("br",{}),"💬 24/7 mentor support"]})]})]})}):u.jsxs("div",{style:{padding:"80px 20px",textAlign:"center"},children:[u.jsx("h2",{style:{fontSize:"2rem",color:"#0b4da3"},children:"Oops! Course Not Found 😕"}),u.jsx("p",{style:{color:"#6b7280",marginTop:10},children:"The course you’re looking for isn’t available right now. It may have been removed or updated."}),u.jsx(we,{to:"/",style:{display:"inline-block",marginTop:24,background:"#2563eb",color:"#fff",padding:"10px 24px",borderRadius:6,textDecoration:"none",fontWeight:600},children:"← Back to Courses"})]})}function o8(){return u.jsx("div",{style:{padding:"40px 18px"},children:u.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[u.jsx("h2",{children:"Contact us"}),u.jsxs("p",{children:["For sales or partnerships, write to us at ",u.jsx("strong",{children:"hgtalentminds@gmail.com"})]}),u.jsxs("form",{style:{display:"grid",gap:10,marginTop:14},children:[u.jsx("input",{placeholder:"Your name",style:{padding:10,borderRadius:6,border:"1px solid #e6e9ef"}}),u.jsx("input",{placeholder:"Your email",style:{padding:10,borderRadius:6,border:"1px solid #e6e9ef"}}),u.jsx("textarea",{placeholder:"How can we help?",style:{padding:10,borderRadius:6,border:"1px solid #e6e9ef"},rows:6}),u.jsx("button",{style:{padding:"10px 14px",background:"#0b4da3",color:"white",borderRadius:6,border:"none",cursor:"pointer"},children:"Send message"})]})]})})}const Ah=[{id:"Student",label:"Student",icon:gd},{id:"trainer",label:"Mentor",icon:eT},{id:"admin",label:"Admin",icon:RT}];function l8(){const e=it(),[t,r]=b.useState("email"),[n,l]=b.useState(Ah[0].id),[s,d]=b.useState({email:"",phone:"",password:""}),[p,h]=b.useState(!1),[m,g]=b.useState(""),[x,w]=b.useState(!1),[j,S]=b.useState(!1),A=_=>{const{name:M,value:R}=_.target;d(U=>({...U,[M]:R}))},O=_=>l(_),k=()=>r(_=>_==="email"?"phone":"email"),T=_=>{if(_.preventDefault(),g(""),!(t==="email"?s.email.trim():s.phone.trim())){g(`${t==="email"?"Email":"Phone number"} is required.`);return}if(!s.password.trim()){g("Password is required.");return}S(!0),setTimeout(()=>{const R={id:"1",firstName:"John",lastName:"Doe",email:s.email||"admin@talentminds.com",role:n};localStorage.setItem(n,JSON.stringify(R)),w(!0),S(!1),setTimeout(()=>{const U={...R,role:n,isAdmin:n==="admin"};localStorage.setItem("user",JSON.stringify(U)),localStorage.setItem(n,JSON.stringify(R)),console.log("Login success:",U),n==="learner"?e("/dashboard",{replace:!0}):n==="trainer"?e("/trainer/dashboard",{replace:!0}):n==="admin"?e("/admin/dashboard",{replace:!0}):e("/",{replace:!0})},1e3)},1e3)},C=Ah.find(_=>_.id===n);return u.jsxs("div",{className:"auth-bg",children:[u.jsx("div",{className:"auth-container",children:u.jsxs("div",{className:"auth-modal",children:[u.jsx("h1",{children:"Welcome Back 👋"}),u.jsxs("p",{className:"subtitle",children:["Sign in to your ",u.jsx("b",{children:C.label})," dashboard."]}),u.jsx("div",{className:"role-selection",children:Ah.map(_=>{const M=_.icon;return u.jsxs("div",{className:`role-card ${n===_.id?"active":""}`,onClick:()=>O(_.id),children:[u.jsx(M,{size:16}),u.jsx("span",{children:_.label})]},_.id)})}),u.jsxs("form",{onSubmit:T,children:[t==="email"?u.jsxs("div",{className:"form-group",children:[u.jsx(OT,{className:"icon",size:18}),u.jsx("input",{type:"email",name:"email",value:s.email,onChange:A,placeholder:" ",required:!0}),u.jsx("label",{children:"Email Address"})]}):u.jsxs("div",{className:"form-group",children:[u.jsx(CT,{className:"icon",size:18}),u.jsx("input",{type:"tel",name:"phone",value:s.phone,onChange:A,placeholder:" ",required:!0}),u.jsx("label",{children:"Phone Number"})]}),u.jsx("div",{className:"switch-type",onClick:k,children:t==="email"?"Use Phone Instead":"Use Email Instead"}),u.jsxs("div",{className:"form-group",children:[u.jsx(m0,{className:"icon",size:18}),u.jsx("input",{type:p?"text":"password",name:"password",value:s.password,onChange:A,placeholder:" ",required:!0}),u.jsx("label",{children:"Password"}),u.jsx("button",{type:"button",className:"eye-btn",onClick:()=>h(_=>!_),"aria-label":"Toggle Password",children:p?u.jsx(ag,{size:18}):u.jsx(ig,{size:18})})]}),m&&u.jsxs("p",{className:"error-msg",children:["⚠️ ",m]}),x&&u.jsx("p",{className:"success-msg",children:"✅ Login successful — redirecting..."}),u.jsx("button",{type:"submit",className:"login-btn",disabled:j,children:j?"Signing in...":`Continue as ${C.label}`})]}),u.jsxs("div",{className:"divider",children:[u.jsx("span",{className:"line"}),u.jsx("span",{children:"or sign in with"}),u.jsx("span",{className:"line"})]}),u.jsx("div",{className:"social-login-row",children:[{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google"},{src:"https://www.svgrepo.com/show/448234/linkedin.svg",alt:"LinkedIn"},{src:"https://www.svgrepo.com/show/512317/github-142.svg",alt:"GitHub"},{src:"https://www.svgrepo.com/show/303115/facebook-3-logo.svg",alt:"Facebook"}].map((_,M)=>u.jsx("button",{className:"social",type:"button",title:_.alt,children:u.jsx("img",{src:_.src,alt:_.alt})},M))}),u.jsxs("div",{className:"signup-link",children:["New to ",u.jsx("b",{children:"TalentMinds"}),"? ",u.jsx(we,{to:"/signup",children:"Create an account"})]})]})}),u.jsx("style",{children:`
        .auth-bg {
          background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow-y: auto;
        }
        .auth-container {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 40px 16px;
        }
        .auth-modal {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          width: 100%;
          max-width: 440px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        h1 { text-align: center; margin-bottom: 8px; font-size: 1.7rem; font-weight: 700; }
        .subtitle { text-align: center; color: #6b7280; margin-bottom: 20px; }
        .role-selection { display: flex; gap: 10px; margin-bottom: 20px; }
        .role-card {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.2s;
          font-size: 0.9rem;
        }
        .role-card.active {
          background: #2563eb;
          color: #fff;
          border-color: #2563eb;
        }
        .form-group {
          position: relative;
          margin-bottom: 18px;
        }
        .form-group input {
          width: 100%;
          padding: 12px 12px 12px 38px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
        }
        .form-group input:focus {
          border-color: #2563eb;
        }
        .form-group label {
          position: absolute;
          left: 38px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          background: #fff;
          padding: 0 4px;
          transition: 0.2s;
          pointer-events: none;
        }
        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 0.8rem;
          color: #2563eb;
        }
        .icon {
          position: absolute;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          color: #9ca3af;
        }
        .eye-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #6b7280;
        }
        .switch-type {
          text-align: right;
          color: #2563eb;
          font-size: 0.85rem;
          cursor: pointer;
          margin-bottom: 10px;
        }
        .login-btn {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          font-size: 1rem;
          transition: 0.2s;
        }
        .login-btn:hover { background: #1e4ed8; }
        .error-msg { color: #dc2626; text-align: center; font-weight: 600; }
        .success-msg { color: #16a34a; text-align: center; font-weight: 600; }
        .divider { display: flex; align-items: center; justify-content: center; margin: 20px 0; gap: 10px; color: #6b7280; font-size: 0.9rem; }
        .divider .line { flex: 1; height: 1px; background: #e5e7eb; }
        .social-login-row { display: flex; justify-content: space-between; gap: 10px; }
        .social {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: #fff;
          cursor: pointer;
          transition: 0.2s;
        }
        .social:hover { background: #f3f4f6; }
        .social img { width: 22px; height: 22px; }
        .signup-link { text-align: center; margin-top: 20px; font-size: 0.9rem; }
        .signup-link a { color: #2563eb; font-weight: 600; text-decoration: none; }
        @media (max-width: 600px) {
          .auth-modal { padding: 24px; }
          .auth-container { padding-top: 60px; }
        }
      `})]})}const iw=[{id:"learner",label:"Learner Account"},{id:"trainer",label:"Mentor / Instructor"},{id:"admin",label:"Admin Access"}];function s8(){const[e,t]=b.useState(iw[0]),[r,n]=b.useState({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:"",expertise:"",yearsExperience:"",linkedInUrl:"",bio:"",resume:"",adminCode:""}),[l,s]=b.useState(!1),[d,p]=b.useState(!1),[h,m]=b.useState(""),[g,x]=b.useState(!1),[w,j]=b.useState(!1),S=O=>{const{name:k,value:T,files:C}=O.target;n({...r,[k]:C?C[0]:T})},A=O=>{O.preventDefault(),m(""),x(!1);const k=e.id,T=["firstName","lastName","email","phone","password"];if(k==="learner"){if(T.some(C=>!r[C]))return m("Please fill in all required fields.");if(r.password!==r.confirmPassword)return m("Passwords do not match.")}else if(k==="trainer"){if(!r.firstName||!r.lastName||!r.email||!r.expertise)return m("Please complete all required fields.")}else if(k==="admin"){if(!r.adminCode.trim())return m("Access Code is required for admin registration.");if(r.adminCode!=="TALENTMINDS-ACCESS")return m("Invalid access code.")}j(!0),setTimeout(()=>{x(!0),j(!1),n({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:"",expertise:"",yearsExperience:"",linkedInUrl:"",bio:"",resume:"",adminCode:""})},1e3)};return u.jsxs("div",{className:"auth-bg",children:[u.jsx("div",{className:"auth-container",children:u.jsxs("div",{className:"auth-modal",children:[u.jsx("h1",{children:"Create Your TalentMinds Account"}),u.jsx("p",{className:"subtitle",children:"Choose your account type to begin your journey."}),u.jsx("div",{className:"role-card-selection",children:iw.map(O=>u.jsx("div",{className:`role-card ${e.id===O.id?"active":""}`,onClick:()=>t(O),children:O.label},O.id))}),u.jsxs("form",{onSubmit:A,children:[u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",name:"firstName",value:r.firstName,onChange:S,placeholder:" ",required:!0}),u.jsx("label",{children:"First Name"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",name:"lastName",value:r.lastName,onChange:S,placeholder:" ",required:!0}),u.jsx("label",{children:"Last Name"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"email",name:"email",value:r.email,onChange:S,placeholder:" ",required:!0}),u.jsx("label",{children:"Email Address"})]}),e.id==="learner"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"tel",name:"phone",value:r.phone,onChange:S,placeholder:" ",required:!0}),u.jsx("label",{children:"Mobile Number"})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:l?"text":"password",name:"password",value:r.password,onChange:S,placeholder:" ",required:!0}),u.jsx("label",{children:"Create Password"}),u.jsx("button",{type:"button",className:"eye-btn",onClick:()=>s(!l),children:l?u.jsx(ag,{size:18}):u.jsx(ig,{size:18})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:d?"text":"password",name:"confirmPassword",value:r.confirmPassword,onChange:S,placeholder:" ",required:!0}),u.jsx("label",{children:"Confirm Password"}),u.jsx("button",{type:"button",className:"eye-btn",onClick:()=>p(!d),children:d?u.jsx(ag,{size:18}):u.jsx(ig,{size:18})})]})]})]}),e.id==="trainer"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",name:"expertise",value:r.expertise,onChange:S,placeholder:" ",required:!0}),u.jsx("label",{children:"Area of Expertise"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"number",name:"yearsExperience",value:r.yearsExperience,onChange:S,placeholder:" "}),u.jsx("label",{children:"Years of Experience"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"url",name:"linkedInUrl",value:r.linkedInUrl,onChange:S,placeholder:" "}),u.jsx("label",{children:"LinkedIn Profile (optional)"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("textarea",{name:"bio",value:r.bio,onChange:S,placeholder:" ",rows:"3"}),u.jsx("label",{children:"Short Bio"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"file",name:"resume",onChange:S,accept:".pdf,.doc,.docx"}),u.jsx("label",{children:"Upload Resume / CV"})]})]}),e.id==="admin"&&u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",name:"adminCode",value:r.adminCode,onChange:S,placeholder:" ",required:!0}),u.jsx("label",{children:"Admin Access Code"})]}),h&&u.jsxs("p",{className:"error-msg",children:["⚠️ ",h]}),g&&u.jsxs("p",{className:"success-msg",children:["✅ ",e.label," signup successful!"," ",u.jsx(we,{to:"/login",children:"Go to Login"}),"."]}),u.jsx("button",{className:"signup-btn",type:"submit",disabled:w,children:w?"Submitting...":`Register as ${e.label}`})]}),u.jsxs("div",{className:"divider",children:[u.jsx("span",{className:"line"}),u.jsx("span",{children:"or sign up with"}),u.jsx("span",{className:"line"})]}),u.jsx("div",{className:"social-login-row",children:[{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google"},{src:"https://www.svgrepo.com/show/448234/linkedin.svg",alt:"LinkedIn"},{src:"https://www.svgrepo.com/show/512317/github-142.svg",alt:"GitHub"},{src:"https://www.svgrepo.com/show/303115/facebook-3-logo.svg",alt:"Facebook"}].map((O,k)=>u.jsx("button",{className:"social",type:"button",title:O.alt,children:u.jsx("img",{src:O.src,alt:O.alt})},k))}),u.jsxs("div",{className:"login-link",children:["Already have an account? ",u.jsx(we,{to:"/login",children:"Sign in"})]})]})}),u.jsx("style",{children:`
        .auth-bg {
          background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-Top:40px;
          overflow-y: auto;
        }
        .auth-container { width: 100%; display: flex; justify-content: center; padding: 40px 16px; }
        .auth-modal {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        h1 { text-align: center; font-size: 1.7rem; font-weight: 700; margin-bottom: 6px; }
        .subtitle { text-align: center; color: #6b7280; margin-bottom: 20px; }
        .role-card-selection { display: flex; justify-content: space-between; margin-bottom: 20px; }
        .role-card { flex: 1; text-align: center; padding: 10px; border: 1px solid #d1d5db; border-radius: 8px; cursor: pointer; font-size: 0.9rem; transition: 0.2s; margin: 0 5px; }
        .role-card.active { background: #2563eb; color: #fff; border-color: #2563eb; }
        .form-row { display: flex; gap: 10px; }
        .form-group { position: relative; margin-bottom: 16px; flex: 1; }
        .form-group input, .form-group textarea {
          width: 100%; padding: 12px 12px 12px 10px; border: 1px solid #d1d5db;
          border-radius: 8px; font-size: 1rem; outline: none; resize: none;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: #2563eb; }
        .form-group label {
          position: absolute; top: 50%; left: 12px; transform: translateY(-50%);
          color: #9ca3af; background: #fff; padding: 0 4px; transition: 0.2s;
          pointer-events: none;
        }
        .form-group input:focus + label, .form-group input:not(:placeholder-shown) + label,
        .form-group textarea:focus + label, .form-group textarea:not(:placeholder-shown) + label {
          top: -8px; font-size: 0.8rem; color: #2563eb;
        }
        .eye-btn { position: absolute; right: 10px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer; color: #6b7280;
        }
        .signup-btn {
          width: 100%; padding: 12px; background: #2563eb; border: none; color: #fff;
          font-weight: 700; border-radius: 8px; cursor: pointer; font-size: 1rem;
        }
        .signup-btn:hover { background: #1e4ed8; }
        .error-msg { color: #dc2626; text-align: center; font-weight: 600; }
        .success-msg { color: #16a34a; text-align: center; font-weight: 600; }
        .divider { display: flex; align-items: center; justify-content: center; margin: 20px 0; gap: 10px; color: #6b7280; font-size: 0.9rem; }
        .divider .line { flex: 1; height: 1px; background: #e5e7eb; }
        .social-login-row { display: flex; justify-content: space-between; gap: 10px; }
        .social { flex: 1; display: flex; justify-content: center; align-items: center;
          border: 1px solid #e5e7eb; border-radius: 8px; background: #fff;
          height: 42px; cursor: pointer; transition: 0.2s;
        }
        .social:hover { background: #f3f4f6; }
        .social img { width: 22px; height: 22px; }
        .login-link { text-align: center; margin-top: 18px; font-size: 0.9rem; }
        .login-link a { color: #2563eb; font-weight: 600; text-decoration: none; }
        @media (max-width: 600px) { .auth-modal { padding: 24px; } .form-row { flex-direction: column; } }
      `})]})}function c8(){const e=gt(),{email:t="va****@gmail.com",phone:r="98*****21"}=e.state||{},[n,l]=b.useState(["","","","","",""]),[s,d]=b.useState(""),[p,h]=b.useState(!1),[m,g]=b.useState(30);b.useEffect(()=>{if(m>0){const S=setInterval(()=>g(A=>A-1),1e3);return()=>clearInterval(S)}},[m]);const x=(S,A)=>{const O=S.target.value.replace(/[^0-9]/g,"");if(O.length>1)return;const k=[...n];k[A]=O,l(k),O&&A<n.length-1&&document.getElementById(`otp-input-${A+1}`).focus()},w=S=>{S.preventDefault();const A=n.join("");if(A.length!==6){d("Please enter a 6-digit OTP.");return}d(""),h(!0),console.log("Entered OTP:",A),setTimeout(()=>{window.location.href="/dashboard"},1500)},j=()=>{g(30),l(["","","","","",""]),console.log("Resending OTP...")};return u.jsxs("div",{className:"otp-container",children:[u.jsxs("div",{className:"otp-box",children:[u.jsx("h1",{children:"🔐 Verify Your Account"}),u.jsxs("p",{className:"subtitle",children:["Enter the 6-digit OTP sent to ",u.jsx("br",{}),u.jsx("span",{className:"highlight",children:t||r})]}),u.jsxs("form",{onSubmit:w,children:[u.jsx("div",{className:"otp-inputs",children:n.map((S,A)=>u.jsx("input",{id:`otp-input-${A}`,type:"text",maxLength:"1",value:S,onChange:O=>x(O,A)},A))}),s&&u.jsx("p",{className:"error-msg",children:s}),p&&u.jsx("p",{className:"success-msg",children:"✅ OTP Verified! Redirecting..."}),u.jsx("button",{className:"verify-btn",type:"submit",children:"Verify OTP"})]}),u.jsx("div",{className:"resend-section",children:m>0?u.jsxs("p",{className:"timer",children:["⏳ Resend OTP in ",m,"s"]}):u.jsx("a",{href:"#",onClick:j,className:"resend-link",children:"🔄 Resend OTP"})}),u.jsx("p",{className:"info-msg",children:"Didn’t receive the code? Check your spam folder or ensure your phone has network coverage 📡"})]}),u.jsx("style",{children:`
        * { box-sizing: border-box; margin:0; padding:0; font-family: 'Inter', sans-serif; }
        .otp-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #2563eb, #38bdf8);
          padding: 20px;
        }
        .otp-box {
          background: #fff;
          padding: 40px 32px;
          border-radius: 20px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          text-align: center;
          width: 100%;
          max-width: 420px;
          animation: fadeIn 0.6s ease-in-out;
        }
        .otp-box h1 {
          font-size: 1.8rem;
          margin-bottom: 12px;
          color: #111827;
        }
        .subtitle {
          color: #6b7280;
          margin-bottom: 20px;
          font-size: 1rem;
        }
        .highlight {
          font-weight: 600;
          color: #2563eb;
        }
        .otp-inputs {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          gap: 10px;
        }
        .otp-inputs input {
          width: 50px;
          height: 55px;
          font-size: 1.5rem;
          text-align: center;
          border: 2px solid #d1d5db;
          border-radius: 12px;
          background: #f9fafb;
          outline: none;
          transition: 0.2s;
        }
        .otp-inputs input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 8px rgba(37,99,235,0.3);
        }
        .verify-btn {
          width: 100%;
          padding: 14px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }
        .verify-btn:hover { background: #1e40af; transform: scale(1.02); }
        .resend-section {
          margin-top: 16px;
        }
        .timer {
          color: #6b7280;
          font-size: 0.9rem;
        }
        .resend-link {
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.95rem;
        }
        .resend-link:hover { text-decoration: underline; }
        .info-msg {
          margin-top: 16px;
          font-size: 0.85rem;
          color: #6b7280;
        }
        .error-msg {
          color: #dc2626;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .success-msg {
          margin-bottom: 12px;
          color: green;
          font-weight: 600;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media(max-width: 480px) {
          .otp-inputs { gap: 6px; }
          .otp-inputs input { width: 42px; height: 45px; font-size: 1.2rem; }
        }
      `})]})}function u8(){const e=it(),[t,r]=b.useState(""),[n,l]=b.useState(""),[s,d]=b.useState(!1),[p,h]=b.useState(!1);function m(){return String(Math.floor(1e5+Math.random()*9e5))}const g=x=>{if(x.preventDefault(),l(""),!t.trim()||!/^\S+@\S+\.\S+$/.test(t.trim())){l("Please enter a valid email address.");return}d(!0);const w=m();sessionStorage.setItem("tm_reset_otp",w),sessionStorage.setItem("tm_reset_email",t.trim()),console.log("Simulated OTP (ForgotPasswordPage):",w),setTimeout(()=>{h(!0),d(!1),e("/reset-otp-verify",{state:{email:t.trim()}})},800)};return u.jsxs("div",{className:"fp-page",children:[u.jsxs("div",{className:"fp-left",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop&s=5a6c7e6a1a6c1a6e6d6a1a6c",alt:"learning"}),u.jsx("div",{className:"fp-left-center",children:u.jsxs("div",{className:"fp-badge",children:[u.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:[u.jsx("rect",{width:"24",height:"24",rx:"8",fill:"url(#g)"}),u.jsx("path",{d:"M8 12.5l2 2 6-6",stroke:"#fff",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("defs",{children:u.jsxs("linearGradient",{id:"g",x1:"0",x2:"1",y1:"0",y2:"1",children:[u.jsx("stop",{offset:"0",stopColor:"#2563eb"}),u.jsx("stop",{offset:"1",stopColor:"#06b6d4"})]})})]}),u.jsx("h2",{children:"TalentMinds"}),u.jsx("p",{children:"Reset password & get back to learning"})]})})]}),u.jsx("div",{className:"fp-right",children:u.jsxs("div",{className:"fp-card",children:[u.jsx("h1",{children:"Forgot Password?"}),u.jsx("p",{className:"fp-sub",children:"Enter your email — we'll send a verification code to reset your password."}),u.jsxs("form",{onSubmit:g,noValidate:!0,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("input",{id:"email",name:"email",type:"email",value:t,onChange:x=>r(x.target.value),placeholder:" ",required:!0}),u.jsx("label",{htmlFor:"email",children:"Email"})]}),n&&u.jsx("div",{className:"fp-error",children:n}),p&&u.jsx("div",{className:"fp-success",children:"Verification code sent. Redirecting…"}),u.jsx("button",{type:"submit",className:"fp-cta",disabled:s,children:s?"Sending…":"Send Verification Code"})]}),u.jsx("div",{className:"fp-hint",children:"Tip: This demo accepts any email. The simulated OTP is printed in the browser console for testing."})]})}),u.jsx("style",{children:`
        .fp-page { display:flex; min-height:100vh; font-family:Inter, system-ui, Arial; }
        .fp-left { flex:1; position:relative; display:flex; align-items:center; justify-content:center; overflow:hidden; }
        .fp-left img { width:100%; height:100vh; object-fit:cover; filter:brightness(0.45); transform:scale(1.03); transition:transform .6s ease; }
        .fp-left:hover img { transform:scale(1.04); }
        .fp-left-center {
          position:absolute;
          inset:0;
          display:flex;
          align-items:center;
          justify-content:center;
          pointer-events:none;
        }
        .fp-badge {
          pointer-events:auto;
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          backdrop-filter: blur(6px);
          border-radius:14px;
          padding:28px;
          text-align:center;
          color:#fff;
          box-shadow: 0 12px 40px rgba(2,6,23,0.5);
          max-width:360px;
          transform: translateY(-10px);
        }
        .fp-badge svg { display:block; margin:0 auto 10px; }
        .fp-badge h2 { margin:0 0 6px; font-size:1.4rem; letter-spacing:0.2px; }
        .fp-badge p { margin:0; opacity:0.95; font-size:0.95rem; }

        .fp-right { flex:1; display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg,#f7fbff,#ffffff); padding:48px 24px; }
        .fp-card { width:100%; max-width:520px; background:#fff; padding:38px; border-radius:14px; box-shadow:0 20px 60px rgba(2,6,23,0.06); }
        .fp-card h1 { margin:0 0 6px; font-size:1.6rem; color:#0f172a; }
        .fp-sub { margin:0 0 18px; color:#374151; }

        .form-group { position:relative; margin-bottom:16px; }
        .form-group input { width:100%; padding:14px 12px; border:1.5px solid #e6eefc; border-radius:10px; outline:none; background:#fff; font-size:0.98rem; }
        .form-group input:focus { border-color:#2563eb; box-shadow:0 6px 24px rgba(37,99,235,0.08); }
        .form-group label { position:absolute; top:-10px; left:12px; background:#fff; padding:0 6px; color:#475569; font-size:0.78rem; }

        .fp-cta { width:100%; padding:12px; background:linear-gradient(90deg,#2563eb,#38bdf8); color:#fff; border:none; border-radius:10px; font-weight:700; cursor:pointer; }
        .fp-cta:disabled { opacity:0.7; cursor:default; }

        .fp-error { color:#b91c1c; background:#fff5f5; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:600; }
        .fp-success { color:#065f46; background:#ecfdf5; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:600; }

        .fp-hint { margin-top:14px; color:#6b7280; font-size:0.9rem; }

        @media(max-width:900px) {
          .fp-page { flex-direction:column; }
          .fp-left{ height:200px; }
          .fp-left img{ height:200px; }
          .fp-left-center { align-items:flex-start; padding-top:18px; }
          .fp-badge { transform:none; padding:18px; max-width:320px; }
          .fp-right { padding:28px 16px; }
        }
      `})]})}function d8(){const e=gt(),t=it(),r=e?.state?.email||sessionStorage.getItem("tm_reset_email")||"",[n]=b.useState(r),[l,s]=b.useState(""),[d,p]=b.useState(""),[h,m]=b.useState(!1),[g,x]=b.useState(!1),[w,j]=b.useState("");b.useEffect(()=>{const O=sessionStorage.getItem("tm_reset_otp");O&&(j("A code was sent (demo). Check console for OTP."),console.log("Simulated OTP (ResetOtpVerifyPage):",O))},[]);const S=O=>{if(O.preventDefault(),p(""),!l.trim()){p("Enter the verification code.");return}m(!0),setTimeout(()=>{const k=sessionStorage.getItem("tm_reset_otp");k&&l.trim()===k?(sessionStorage.removeItem("tm_reset_otp"),t("/reset-password",{state:{email:n}})):p("Invalid code. Try again."),m(!1)},600)},A=()=>{p(""),x(!0),setTimeout(()=>{const O=String(Math.floor(1e5+Math.random()*9e5));sessionStorage.setItem("tm_reset_otp",O),console.log("Resent simulated OTP (ResetOtpVerifyPage):",O),x(!1),j("New code sent (demo). Check console for OTP.")},700)};return u.jsxs("div",{className:"otp-page",children:[u.jsxs("div",{className:"otp-card",children:[u.jsx("h1",{children:"Enter Verification Code"}),u.jsxs("p",{className:"otp-desc",children:["We sent a 6‑digit code to ",u.jsx("strong",{children:n||"your email"}),". Enter it below."]}),u.jsxs("form",{onSubmit:S,className:"otp-form",children:[u.jsx("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",maxLength:6,value:l,onChange:O=>s(O.target.value.replace(/\D/g,"")),placeholder:"------",className:"otp-input",required:!0}),w&&u.jsx("div",{className:"otp-hint",children:w}),d&&u.jsx("div",{className:"otp-error",children:d}),u.jsx("button",{className:"otp-cta",type:"submit",disabled:h,children:h?"Verifying…":"Verify & Continue"})]}),u.jsxs("div",{className:"otp-actions",children:[u.jsx("button",{className:"resend-btn",type:"button",onClick:A,disabled:g,children:g?"Resending…":"Resend Code"}),u.jsx("button",{className:"back-btn",type:"button",onClick:()=>t(-1),children:"Back"})]})]}),u.jsx("style",{children:`
        .otp-page { min-height:100vh; display:flex; align-items:center; justify-content:center; font-family:Inter, system-ui; background:linear-gradient(180deg,#f8fbff,#fff); padding:32px; }
        .otp-card { width:100%; max-width:520px; background:#fff; padding:28px; border-radius:12px; box-shadow:0 18px 50px rgba(2,6,23,0.06); text-align:center; }
        .otp-card h1 { margin:0 0 6px; font-size:1.4rem; color:#0f172a; }
        .otp-desc { color:#475569; margin-bottom:16px; }
        .otp-form { display:flex; flex-direction:column; gap:12px; align-items:center; }
        .otp-input { font-size:1.6rem; letter-spacing:12px; text-align:center; padding:12px 18px; width:240px; border-radius:10px; border:1.5px solid #e6eefc; outline:none; }
        .otp-input:focus { border-color:#2563eb; box-shadow:0 0 0 6px rgba(37,99,235,0.04); }
        .otp-hint { color:#374151; font-size:0.9rem; margin-top:6px; }
        .otp-error { color:#b91c1c; background:#fff5f5; padding:10px 12px; border-radius:8px; width:100%; margin-top:6px; font-weight:600; }
        .otp-cta { width:100%; max-width:320px; padding:12px; background:linear-gradient(90deg,#2563eb,#38bdf8); color:#fff; border:none; border-radius:10px; font-weight:700; cursor:pointer; }
        .otp-actions { display:flex; gap:12px; justify-content:center; margin-top:12px; }
        .resend-btn, .back-btn { background:transparent; border:none; color:#2563eb; cursor:pointer; font-weight:700; }
        .resend-btn[disabled]{ opacity:0.6; cursor:default; }
        @media(max-width:480px) { .otp-input{ width:200px; letter-spacing:10px; } }
      `})]})}function f8(e=""){let t=0;return e.length>=8&&t++,/[A-Z]/.test(e)&&t++,/[0-9]/.test(e)&&t++,/[^A-Za-z0-9]/.test(e)&&t++,t}function p8(){const e=it();gt()?.state?.email||sessionStorage.getItem("tm_reset_email");const[r,n]=b.useState(""),[l,s]=b.useState(""),[d,p]=b.useState(""),[h,m]=b.useState(!1),[g,x]=b.useState(!1),w=f8(r),j=["Very weak","Weak","Fair","Good","Strong"][w],S=A=>{if(A.preventDefault(),p(""),r.length<8){p("Password must be at least 8 characters.");return}if(r!==l){p("Passwords do not match.");return}m(!0),setTimeout(()=>{m(!1),x(!0),sessionStorage.removeItem("tm_reset_email"),sessionStorage.removeItem("tm_reset_otp"),setTimeout(()=>e("/login"),1200)},900)};return u.jsxs("div",{className:"reset-page",children:[u.jsxs("div",{className:"reset-card",children:[u.jsx("h1",{children:"Create a New Password"}),u.jsx("p",{className:"reset-desc",children:"Make sure your new password is strong and unique."}),u.jsxs("form",{onSubmit:S,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("input",{id:"password",type:"password",value:r,onChange:A=>n(A.target.value),placeholder:" ",required:!0}),u.jsx("label",{htmlFor:"password",children:"New Password"})]}),u.jsxs("div",{className:"strength-row",children:[u.jsx("div",{className:`strength-bar s-${w}`}),u.jsx("div",{className:"strength-label",children:j})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{id:"confirm",type:"password",value:l,onChange:A=>s(A.target.value),placeholder:" ",required:!0}),u.jsx("label",{htmlFor:"confirm",children:"Confirm Password"})]}),d&&u.jsx("div",{className:"reset-error",children:d}),g&&u.jsx("div",{className:"reset-success",children:"Password updated. Redirecting to login…"}),u.jsx("button",{className:"reset-cta",type:"submit",disabled:h,children:h?"Updating…":"Update Password"})]})]}),u.jsx("style",{children:`
        .reset-page { min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg,#f8fbff,#fff); font-family:Inter, system-ui; padding:28px; }
        .reset-card { width:100%; max-width:520px; background:#fff; padding:28px; border-radius:12px; box-shadow:0 18px 50px rgba(2,6,23,0.06); }
        .reset-card h1 { margin:0 0 6px; font-size:1.4rem; color:#0f172a; }
        .reset-desc { color:#475569; margin-bottom:12px; }

        .form-group { position:relative; margin-bottom:12px; }
        .form-group input { width:100%; padding:14px 12px; border:1.5px solid #e6eefc; border-radius:10px; outline:none; font-size:0.98rem; }
        .form-group input:focus { border-color:#2563eb; box-shadow:0 0 0 6px rgba(37,99,235,0.04); }
        .form-group label { position:absolute; top:-10px; left:12px; background:#fff; padding:0 6px; color:#475569; font-size:0.78rem; }

        .strength-row { display:flex; align-items:center; gap:12px; margin-bottom:10px; }
        .strength-bar { flex:1; height:10px; border-radius:8px; background:#f1f5f9; overflow:hidden; position:relative; }
        .strength-bar::after { content:''; position:absolute; left:0; top:0; bottom:0; width:0%; background:linear-gradient(90deg,#f43f5e,#f59e0b,#10b981); transition:width 0.3s; }
        .s-0::after { width:6%; background:#ef4444; }
        .s-1::after { width:28%; background:#f97316; }
        .s-2::after { width:52%; background:#f59e0b; }
        .s-3::after { width:76%; background:#10b981; }
        .s-4::after { width:100%; background:linear-gradient(90deg,#10b981,#06b6d4); }
        .strength-label { width:96px; text-align:right; color:#475569; font-size:0.9rem; }

        .reset-error { color:#b91c1c; background:#fff5f5; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:600; }
        .reset-success { color:#065f46; background:#ecfdf5; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:600; }

        .reset-cta { width:100%; padding:12px; background:linear-gradient(90deg,#2563eb,#38bdf8); color:#fff; border:none; border-radius:10px; font-weight:700; cursor:pointer; }
        @media(max-width:480px) { .strength-label{ display:none; } }
      `})]})}function h8(){const e={container:{padding:"30px",background:"#f8fafc"},title:{fontSize:"2.2rem",fontWeight:800,color:"#1e293b",marginBottom:"30px"},cardGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"25px",marginBottom:"40px"},card:{background:"#fff",padding:"25px",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",borderLeft:"5px solid"},cardTitle:{margin:"0 0 10px 0",fontSize:"1.2rem",fontWeight:700,display:"flex",alignItems:"center",gap:"10px"},cardValue:{fontSize:"2rem",fontWeight:900,color:"#0f4f9f"},activitySection:{background:"#fff",padding:"25px",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},activityTitle:{fontSize:"1.5rem",fontWeight:700,color:"#1e293b",marginBottom:"15px"},activityItem:{padding:"15px 0",borderBottom:"1px dashed #e2e8f0",display:"flex",justifyContent:"space-between",alignItems:"center"},activityText:{color:"#475569",fontSize:"1rem"},activityDate:{color:"#94a3b8",fontSize:".9rem"}};return u.jsxs("div",{style:e.container,children:[u.jsx("h1",{style:e.title,children:"Your Learning Hub Summary 👋"}),u.jsxs("div",{style:e.cardGrid,children:[u.jsxs("div",{style:{...e.card,borderLeftColor:"#0f4f9f"},children:[u.jsxs("h3",{style:e.cardTitle,children:[u.jsx(hs,{size:24,color:"#0f4f9f"})," Active Courses"]}),u.jsx("p",{style:e.cardValue,children:"4"}),u.jsx("span",{style:{color:"#64748b"},children:"Keep up the great work!"})]}),u.jsxs("div",{style:{...e.card,borderLeftColor:"#ef4444"},children:[u.jsxs("h3",{style:e.cardTitle,children:[u.jsx(y0,{size:24,color:"#ef4444"})," Pending Assignments"]}),u.jsx("p",{style:{...e.cardValue,color:"#ef4444"},children:"2"}),u.jsx("span",{style:{color:"#64748b"},children:"Deadlines approaching this week."})]}),u.jsxs("div",{style:{...e.card,borderLeftColor:"#10b981"},children:[u.jsxs("h3",{style:e.cardTitle,children:[u.jsx(hd,{size:24,color:"#10b981"})," Overall Progress"]}),u.jsx("p",{style:{...e.cardValue,color:"#10b981"},children:"85%"}),u.jsx("span",{style:{color:"#64748b"},children:"View detailed grade reports."})]})]}),u.jsxs("div",{style:e.activitySection,children:[u.jsx("h2",{style:e.activityTitle,children:"Recent Activity & Deadlines"}),u.jsxs("div",{style:e.activityItem,children:[u.jsx("span",{style:e.activityText,children:"**Assignment:** Web Dev Module 5 Quiz is due."}),u.jsx("span",{style:e.activityDate,children:"Today, 11:59 PM"})]}),u.jsxs("div",{style:e.activityItem,children:[u.jsx("span",{style:e.activityText,children:"**New Grade:** Received B+ on Data Structures Midterm."}),u.jsx("span",{style:e.activityDate,children:"2 hours ago"})]}),u.jsxs("div",{style:e.activityItem,children:[u.jsx("span",{style:e.activityText,children:"**Course Announcement:** History lecture rescheduled to 3 PM."}),u.jsx("span",{style:e.activityDate,children:"Yesterday"})]}),u.jsxs("div",{style:e.activityItem,children:[u.jsx("span",{style:e.activityText,children:'**Discussion:** New reply in "Context API usage" thread.'}),u.jsx("span",{style:e.activityDate,children:"3 days ago"})]}),u.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:u.jsx("a",{href:"/dashboard/notifications",style:{color:"#0f4f9f",textDecoration:"none",fontWeight:600},children:"View all notifications →"})})]})]})}function m8(){const e=[{title:"Introduction to Web Development",instructor:"J. Smith",progress:75,status:"Active",color:"#0f4f9f"},{title:"Advanced Data Structures & Algorithms",instructor:"Dr. K. Lee",progress:32,status:"Active",color:"#f97316"},{title:"Modern European History",instructor:"Prof. A. Bell",progress:98,status:"Finishing",color:"#10b981"},{title:"Calculus I: Limits and Derivatives",instructor:"T. Jones",progress:5,status:"Starting",color:"#64748b"}],t={container:{padding:"30px"},title:{fontSize:"2.2rem",fontWeight:800,color:"#1e293b",marginBottom:"30px"},courseGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"25px"},courseCard:{background:"#fff",padding:"20px",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",height:"100%"},courseTitle:{fontSize:"1.4rem",fontWeight:700,color:"#1e293b",marginBottom:"5px"},instructor:{color:"#64748b",fontSize:".9rem",marginBottom:"15px"},progressLabel:{fontWeight:600,color:"#475569",marginBottom:"5px"},progressBarContainer:{height:"10px",background:"#e2e8f0",borderRadius:"5px",marginBottom:"20px"},progressBar:(r,n)=>({width:`${r}%`,height:"100%",background:n,borderRadius:"5px",transition:"width 0.5s"}),button:r=>({background:r,color:"#fff",border:"none",padding:"10px 15px",borderRadius:"8px",cursor:"pointer",fontWeight:700,marginTop:"auto",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"}),statusTag:r=>({padding:"4px 10px",borderRadius:"4px",background:r,color:"#fff",fontSize:".8rem",fontWeight:700,alignSelf:"flex-start",marginBottom:"10px"})};return u.jsxs("div",{style:t.container,children:[u.jsx("h1",{style:t.title,children:"My Enrolled Courses"}),u.jsx("div",{style:t.courseGrid,children:e.map((r,n)=>u.jsxs("div",{style:t.courseCard,children:[u.jsx("span",{style:t.statusTag(r.color),children:r.status}),u.jsx("h2",{style:t.courseTitle,children:r.title}),u.jsxs("p",{style:t.instructor,children:["Instructor: ",r.instructor]}),u.jsxs("p",{style:t.progressLabel,children:["Progress: ",r.progress,"%"]}),u.jsx("div",{style:t.progressBarContainer,children:u.jsx("div",{style:t.progressBar(r.progress,r.color)})}),u.jsxs("button",{style:t.button(r.color),onClick:()=>console.log(`Navigating to ${r.title} details`),children:[u.jsx(QT,{size:18})," Continue Learning"]})]},n))})]})}const ii={title:"Mastering React Hooks and Advanced Concepts",instructor:"Jane Doe",duration:"12.5 hours",lessonsCompleted:8,totalLessons:15,modules:[{name:"Introduction to Hooks",lessons:[{title:"What are Hooks?",completed:!0},{title:"useState and useEffect",completed:!0}]},{name:"Advanced State Management",lessons:[{title:"useReducer Deep Dive",completed:!0},{title:"The Context API",completed:!1}]}]};function g8(){const[e,t]=b.useState(ii.modules[0].name),r=Math.round(ii.lessonsCompleted/ii.totalLessons*100),n={container:{padding:"30px"},header:{marginBottom:"30px",background:"#0f4f9f",color:"#fff",padding:"30px",borderRadius:"12px"},title:{fontSize:"2.5rem",fontWeight:800,margin:0},meta:{display:"flex",gap:"20px",fontSize:"1rem",marginTop:"10px"},progressBox:{background:"#fff",color:"#1e293b",padding:"15px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",marginTop:"20px"},moduleTitle:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 20px",background:"#e2e8f0",cursor:"pointer",borderRadius:"8px",marginBottom:"5px"},lessonItem:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 30px",borderLeft:"3px solid #cbd5e1",cursor:"pointer",transition:"background 0.2s"}};return u.jsxs("div",{style:n.container,children:[u.jsxs("div",{style:n.header,children:[u.jsx("h1",{style:n.title,children:ii.title}),u.jsxs("div",{style:n.meta,children:[u.jsxs("span",{children:["By ",ii.instructor]}),u.jsxs("span",{children:[u.jsx(MA,{size:16,style:{verticalAlign:"middle",marginRight:"5px"}})," ",ii.duration," total"]})]}),u.jsxs("div",{style:n.progressBox,children:[u.jsxs("p",{style:{margin:"0 0 5px 0",fontWeight:700},children:["Your Progress: ",r,"%"]}),u.jsx("div",{style:{height:"8px",background:"#e2e8f0",borderRadius:"4px"},children:u.jsx("div",{style:{width:`${r}%`,height:"100%",background:"#22c55e",borderRadius:"4px",transition:"width 0.5s"}})})]})]}),u.jsx("h2",{style:{fontSize:"1.8rem",color:"#1e293b",marginBottom:"20px"},children:"Course Curriculum"}),ii.modules.map((l,s)=>u.jsxs("div",{style:{marginBottom:"10px",border:"1px solid #e2e8f0",borderRadius:"8px",overflow:"hidden"},children:[u.jsxs("div",{style:n.moduleTitle,onClick:()=>t(e===l.name?null:l.name),children:[u.jsxs("span",{style:{fontWeight:700,color:"#1e293b"},children:[s+1,". ",l.name]}),e===l.name?u.jsx(TA,{size:20}):u.jsx(CA,{size:20})]}),e===l.name&&u.jsx("div",{style:{background:"#f8fafc"},children:l.lessons.map((d,p)=>u.jsxs("div",{style:{...n.lessonItem,background:d.completed?"#f0f9ff":"#fff"},children:[d.completed?u.jsx(md,{size:18,color:"#22c55e"}):u.jsx(oT,{size:18,color:"#94a3b8"}),u.jsxs("span",{children:["Lesson ",p+1,": ",d.title]})]},p))})]},s))]})}function v8(){return u.jsx("div",{className:"assignments-page",children:u.jsx("h1",{children:"Assignments"})})}function x8(){const e=[{title:"Best practices for using useEffect dependencies array",course:"Web Development",author:"Alex J.",replies:12,likes:5,time:"2h ago",new:!0},{title:"Proof of concept for Kruskal's Algorithm",course:"Data Structures",author:"Dr. Lee",replies:8,likes:3,time:"1d ago",new:!1},{title:"Seeking resources for primary sources on WWI",course:"European History",author:"Student X",replies:3,likes:1,time:"3d ago",new:!1}],t={container:{padding:"30px"},title:{fontSize:"2.2rem",fontWeight:800,color:"#1e293b",marginBottom:"30px",display:"flex",alignItems:"center",gap:"10px"},threadList:{display:"flex",flexDirection:"column",gap:"15px"},threadItem:r=>({padding:"20px",background:"#fff",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",borderLeft:r?"5px solid #0f4f9f":"5px solid #e2e8f0",display:"flex",justifyContent:"space-between",cursor:"pointer",transition:"box-shadow 0.2s"}),content:{flex:1},threadTitle:{margin:"0 0 5px 0",fontSize:"1.2rem",fontWeight:700,color:"#0f4f9f"},meta:{fontSize:".9rem",color:"#64748b",display:"flex",gap:"15px",alignItems:"center",marginTop:"5px"},stats:{width:"150px",display:"flex",gap:"15px",justifyContent:"flex-end",alignItems:"center",flexShrink:0},statItem:{display:"flex",alignItems:"center",gap:"5px",fontSize:".9rem",fontWeight:600,color:"#475569"},newTag:{background:"#ef4444",color:"#fff",padding:"3px 8px",borderRadius:"4px",fontSize:".75rem",fontWeight:700,marginLeft:"10px"}};return u.jsxs("div",{style:t.container,children:[u.jsxs("h1",{style:t.title,children:[u.jsx(og,{size:30})," Discussion Forums"]}),u.jsx("div",{style:t.threadList,children:e.map((r,n)=>u.jsxs("div",{style:t.threadItem(r.new),children:[u.jsxs("div",{style:t.content,children:[u.jsxs("h3",{style:t.threadTitle,children:[r.title,r.new&&u.jsx("span",{style:t.newTag,children:"NEW"})]}),u.jsxs("p",{style:t.meta,children:[u.jsx("span",{style:{color:"#1e293b",fontWeight:600},children:r.course}),u.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[u.jsx(gd,{size:16})," ",r.author]}),u.jsx("span",{children:r.time})]})]}),u.jsxs("div",{style:t.stats,children:[u.jsxs("div",{style:t.statItem,children:[u.jsx(og,{size:18,color:"#2563eb"}),u.jsx("span",{children:r.replies})]}),u.jsxs("div",{style:t.statItem,children:[u.jsx($T,{size:18,color:"#10b981"}),u.jsx("span",{children:r.likes})]})]})]},n))}),u.jsx("div",{style:{textAlign:"center",marginTop:"30px"},children:u.jsx("button",{style:{background:"#0f4f9f",color:"#fff",border:"none",padding:"12px 25px",borderRadius:"8px",cursor:"pointer",fontWeight:700},children:"Start New Discussion"})})]})}function y8(){const e=[{id:1,type:"grade",message:"You received a grade of **A** on the Web Dev Final Quiz.",time:"5 minutes ago",icon:md,color:"#10b981"},{id:2,type:"announcement",message:"New **Course Announcement** posted in Data Structures.",time:"1 hour ago",icon:y0,color:"#f97316"}],t={container:{padding:"30px"},title:{fontSize:"2.2rem",fontWeight:800,color:"#1e293b",marginBottom:"25px"},list:{marginTop:"20px"},item:{display:"flex",alignItems:"flex-start",gap:"15px",padding:"15px",background:"#fff",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.04)",marginBottom:"10px",borderLeft:"4px solid",cursor:"pointer",transition:"box-shadow 0.2s"},message:{flex:1,fontSize:"1rem"},time:{fontSize:".8rem",color:"#64748b"}};return u.jsxs("div",{style:t.container,children:[u.jsx("h1",{style:t.title,children:"Notifications & Alerts"}),u.jsx("div",{style:{textAlign:"right",marginBottom:"15px"},children:u.jsx("button",{style:{background:"#94a3b8",color:"#fff",border:"none",padding:"8px 15px",borderRadius:"6px",cursor:"pointer"},children:"Mark All as Read"})}),u.jsx("div",{style:t.list,children:e.map(r=>u.jsxs("div",{style:{...t.item,borderLeftColor:r.color},children:[u.jsx(r.icon,{size:20,color:r.color,style:{flexShrink:0}}),u.jsxs("div",{style:t.message,children:[u.jsx("span",{dangerouslySetInnerHTML:{__html:r.message.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}}),u.jsx("div",{style:t.time,children:r.time})]})]},r.id))})]})}function b8(){const[e,t]=b.useState("Web Development"),r=[{course:"Web Development",overall:"92.5%",grade:"A",items:[{name:"HTML Basics Quiz",score:"10/10",weight:"5%",color:"#10b981"},{name:"CSS Layout Project",score:"95/100",weight:"25%",color:"#0f4f9f"},{name:"Module 5 Quiz",score:"N/A",weight:"5%",color:"#f97316"}]},{course:"Data Structures",overall:"85.0%",grade:"B+",items:[{name:"Midterm Exam",score:"79/100",weight:"40%",color:"#0f4f9f"},{name:"Assignment 1: Linked Lists",score:"90/100",weight:"20%",color:"#10b981"}]}],n={container:{padding:"30px"},title:{fontSize:"2.2rem",fontWeight:800,color:"#1e293b",marginBottom:"30px"},courseCard:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",marginBottom:"20px",overflow:"hidden"},courseHeader:d=>({display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 25px",background:"#f1f5f9",cursor:"pointer",borderLeft:`5px solid ${d}`}),courseName:{fontSize:"1.4rem",fontWeight:700,color:"#1e293b",margin:0},overallGrade:{fontSize:"1.8rem",fontWeight:900,color:"#10b981"},gradeDetails:{padding:"20px 25px",background:"#fff"},itemRow:d=>({display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid #f8fafc"}),itemName:{fontWeight:600,color:"#475569",flex:2},itemScore:d=>({fontWeight:700,color:d,width:"100px",textAlign:"right"}),itemWeight:{color:"#94a3b8",width:"80px",textAlign:"right"}},l=d=>d.includes("A")?"#10b981":d.includes("B")?"#2563eb":d.includes("C")?"#f97316":"#ef4444",s=d=>{if(d==="N/A")return"#f97316";const[p,h]=d.split("/").map(m=>parseFloat(m.trim()));return h&&p/h>=.9?"#10b981":h&&p/h>=.8?"#2563eb":"#ef4444"};return u.jsxs("div",{style:n.container,children:[u.jsx("h1",{style:n.title,children:"My Course Grades"}),r.map((d,p)=>u.jsxs("div",{style:n.courseCard,children:[u.jsxs("div",{style:n.courseHeader(l(d.grade)),onClick:()=>t(e===d.course?null:d.course),children:[u.jsxs("div",{children:[u.jsx("h2",{style:n.courseName,children:d.course}),u.jsxs("p",{style:{margin:0,color:"#64748b",fontSize:".9rem"},children:["Overall Average: ",d.overall]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px"},children:[u.jsx("span",{style:{...n.overallGrade,color:l(d.grade)},children:d.grade}),e===d.course?u.jsx(TA,{size:24,color:"#475569"}):u.jsx(CA,{size:24,color:"#475569"})]})]}),e===d.course&&u.jsxs("div",{style:n.gradeDetails,children:[u.jsxs("div",{style:{...n.itemRow(),fontWeight:700,borderBottom:"1px solid #e2e8f0",marginBottom:"5px"},children:[u.jsx("span",{style:n.itemName,children:"Item Name"}),u.jsx("span",{style:n.itemWeight,children:"Weight"}),u.jsx("span",{style:{...n.itemScore(),color:"#1e293b"},children:"Score"})]}),d.items.map((h,m)=>u.jsxs("div",{style:n.itemRow(s(h.score)),children:[u.jsx("span",{style:n.itemName,children:h.name}),u.jsx("span",{style:n.itemWeight,children:h.weight}),u.jsx("span",{style:n.itemScore(s(h.score)),children:h.score})]},m))]})]},p))]})}function w8(){const[e,t]=b.useState(!1),[r,n]=b.useState({firstName:"Alex",lastName:"Johnson",email:"alex.johnson@example.com",phone:"555-123-4567",bio:"Avid learner of web development and data science."}),l={container:{padding:"30px",background:"#fff",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},title:{fontSize:"2.2rem",fontWeight:800,color:"#0f4f9f",marginBottom:"25px"},card:{marginBottom:"20px",padding:"15px",border:"1px solid #e2e8f0",borderRadius:"8px"},label:{fontWeight:600,color:"#475569",display:"flex",alignItems:"center",gap:"8px",marginBottom:"5px"},value:{fontSize:"1rem",color:"#1e293b"},button:{background:e?"#ef4444":"#0f4f9f",color:"#fff",border:"none",padding:"10px 18px",borderRadius:"8px",cursor:"pointer",transition:"background 0.2s"},input:{width:"100%",padding:"10px",border:"1px solid #ccc",borderRadius:"6px",marginTop:"5px"}},s=()=>{t(!1)},d=p=>{const{name:h,value:m}=p.target;n(g=>({...g,[h]:m}))};return u.jsxs("div",{style:l.container,children:[u.jsx("h1",{style:l.title,children:"My Profile"}),u.jsxs("div",{style:l.card,children:[u.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}),u.jsxs("div",{style:{marginTop:"20px"},children:[u.jsx("label",{style:l.label,children:"Bio"}),e?u.jsx("textarea",{name:"bio",value:r.bio,onChange:d,style:{...l.input,height:"100px"}}):u.jsx("p",{style:l.value,children:r.bio})]})]}),u.jsx("div",{style:{textAlign:"right"},children:u.jsx("button",{style:l.button,onClick:()=>e?s():t(!0),children:e?"Save Changes":"Edit Profile"})})]})}function j8(){const[e,t]=b.useState({emailNotifications:!0,darkMode:!1}),r={container:{padding:"30px",background:"#fff",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},title:{fontSize:"2.2rem",fontWeight:800,color:"#0f4f9f",marginBottom:"25px"},sectionTitle:{fontSize:"1.4rem",color:"#1e293b",borderBottom:"1px solid #e2e8f0",paddingBottom:"10px",marginBottom:"20px",marginTop:"20px"},settingItem:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 0",borderBottom:"1px solid #f1f5f9"},label:{fontWeight:600,color:"#475569",display:"flex",alignItems:"center",gap:"10px"}},n=(l,s)=>{t(d=>({...d,[l]:s}))};return u.jsxs("div",{style:r.container,children:[u.jsx("h1",{style:r.title,children:"Settings"}),u.jsxs("h2",{style:r.sectionTitle,children:[u.jsx(Si,{size:20})," Notification Preferences"]}),u.jsxs("div",{style:r.settingItem,children:[u.jsx("span",{style:r.label,children:"Receive email notifications for new grades"}),u.jsx("input",{type:"checkbox",checked:e.emailNotifications,onChange:l=>n("emailNotifications",l.target.checked)})]}),u.jsxs("h2",{style:r.sectionTitle,children:[u.jsx(m0,{size:20})," Account & Privacy"]}),u.jsxs("div",{style:r.settingItem,children:[u.jsx("span",{style:r.label,children:"Change Password"}),u.jsx("button",{style:{background:"#2563eb",color:"#fff",border:"none",padding:"8px 15px",borderRadius:"6px",cursor:"pointer"},children:"Update"})]})]})}function S8(){const e=[{id:1,title:"Mastering React Hooks (2025)",price:49.99},{id:2,title:"Financial Modeling for Beginners",price:99.99}],t=e.reduce((s,d)=>s+d.price,0),r=t*.05,n=t+r,l={container:{padding:"30px",background:"#f8fafc",display:"flex",gap:"30px",alignItems:"flex-start"},left:{flex:3,background:"#fff",padding:"20px",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},right:{flex:1,background:"#fff",padding:"20px",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",position:"sticky",top:"84px"},title:{fontSize:"2.2rem",fontWeight:800,color:"#0f4f9f",marginBottom:"25px"},item:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 0",borderBottom:"1px solid #e2e8f0"},checkoutBtn:{background:"#22c55e",color:"#fff",border:"none",width:"100%",padding:"12px",borderRadius:"8px",fontWeight:700,cursor:"pointer",marginTop:"20px"}};return u.jsxs("div",{style:l.container,children:[u.jsxs("div",{style:l.left,children:[u.jsxs("h1",{style:l.title,children:["Shopping Cart (",e.length," Items)"]}),e.map(s=>u.jsxs("div",{style:l.item,children:[u.jsx("div",{style:{flex:1},children:u.jsx("h3",{style:{margin:0,color:"#1e293b"},children:s.title})}),u.jsxs("div",{style:{fontWeight:700,color:"#0f4f9f",width:"100px",textAlign:"right"},children:["$",s.price.toFixed(2)]}),u.jsx("button",{style:{background:"none",border:"none",color:"#ef4444",cursor:"pointer",paddingLeft:"15px"},children:u.jsx(FT,{size:20})})]},s.id))]}),u.jsxs("div",{style:l.right,children:[u.jsx("h2",{style:{fontSize:"1.5rem",color:"#1e293b",marginBottom:"15px"},children:"Order Summary"}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:800,fontSize:"1.2rem",color:"#0f4f9f"},children:[u.jsx("span",{children:"Total:"}),u.jsxs("span",{children:["$",n.toFixed(2)]})]}),u.jsxs("button",{style:l.checkoutBtn,children:[u.jsx(hT,{size:20,style:{verticalAlign:"middle",marginRight:"5px"}})," Proceed to Checkout"]})]})]})}function Vc({title:e,value:t,delta:r,icon:n}){const l=r>=0;return u.jsxs("div",{className:"stat-card",children:[u.jsxs("div",{className:"top",children:[u.jsx("span",{className:"icon",children:n}),u.jsx("h4",{children:e})]}),u.jsxs("div",{className:"bottom",children:[u.jsx("h2",{children:t}),u.jsxs("span",{className:`delta ${l?"up":"down"}`,children:[l?"▲":"▼"," ",Math.abs(r),"%"]})]}),u.jsx("style",{children:`
        .stat-card {
          background:#fff;
          border:1px solid #e2e8f0;
          border-radius:14px;
          padding:16px 18px;
          box-shadow:0 1px 3px rgba(0,0,0,0.05);
          display:flex;
          flex-direction:column;
          gap:10px;
        }
        .top { display:flex; align-items:center; gap:10px; }
        .icon { font-size:1.5rem; }
        .top h4 { margin:0; font-size:.95rem; font-weight:600; color:#475569; }
        .bottom { display:flex; justify-content:space-between; align-items:center; }
        .bottom h2 { margin:0; font-size:1.5rem; font-weight:800; color:#0f172a; }
        .delta { font-weight:700; font-size:.85rem; }
        .up { color:#16a34a; }
        .down { color:#dc2626; }
      `})]})}function A8(){const e=[{label:"Mon",value:15},{label:"Tue",value:22},{label:"Wed",value:19},{label:"Thu",value:28},{label:"Fri",value:31},{label:"Sat",value:25},{label:"Sun",value:18}];return u.jsxs("div",{className:"dash",children:[u.jsx("h1",{children:"Trainer Overview"}),u.jsx("p",{className:"sub",children:"Insights into your teaching performance."}),u.jsxs("div",{className:"stats",children:[u.jsx(Vc,{title:"Total Learners",value:"860",delta:5.2,icon:"🎓"}),u.jsx(Vc,{title:"Active Courses",value:"12",delta:3.4,icon:"📘"}),u.jsx(Vc,{title:"Average Rating",value:"4.8★",delta:1.1,icon:"⭐"}),u.jsx(Vc,{title:"Pending Reviews",value:"6",delta:-2.3,icon:"📝"})]}),u.jsxs("div",{className:"cards",children:[u.jsxs("section",{className:"panel",children:[u.jsxs("div",{className:"panel-head",children:[u.jsx("h3",{children:"Weekly Engagement"}),u.jsx("span",{className:"hint",children:"Last 7 days"})]}),u.jsx("div",{className:"bar-chart",children:e.map(t=>u.jsxs("div",{className:"bar-wrap",title:`${t.label}: ${t.value}`,children:[u.jsx("div",{className:"bar",style:{height:`${t.value*6}px`}}),u.jsx("span",{className:"lbl",children:t.label})]},t.label))})]}),u.jsxs("section",{className:"panel",children:[u.jsxs("div",{className:"panel-head",children:[u.jsx("h3",{children:"Top Performing Courses"}),u.jsx("span",{className:"hint",children:"Based on enrollments"})]}),u.jsx("ul",{className:"list",children:[{name:"React Fundamentals",enroll:420},{name:"Python for ML",enroll:350},{name:"Advanced JS",enroll:280},{name:"SQL for Analysts",enroll:220}].map(t=>u.jsxs("li",{className:"li",children:[u.jsx("span",{children:t.name}),u.jsx("span",{className:"pill",children:t.enroll})]},t.name))})]})]}),u.jsx("style",{children:`
        .dash h1 { margin:0 0 2px; font-size:1.45rem; font-weight:800;  }
        .sub { color:#64748b; margin:0 0 16px; }
        .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin:12px 0 18px; }
        .cards { display:grid; grid-template-columns:2fr 1fr; gap:14px; }
        .panel { background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:14px; }
        .panel-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; }
        .hint { color:#64748b; font-size:.85rem; }
        .bar-chart { display:flex; align-items:flex-end; gap:12px; height:200px; padding:10px 4px 0; }
        .bar-wrap { display:flex; flex-direction:column; align-items:center; gap:6px; }
        .bar { width:22px; background:linear-gradient(180deg, #60a5fa, #2563eb); border-radius:6px 6px 0 0; }
        .lbl { font-size:.8rem; color:#475569; }
        .list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
        .li { display:flex; justify-content:space-between; align-items:center; padding:10px; border:1px solid #e2e8f0; border-radius:10px; }
        .pill { background:#eef2ff; color:#3730a3; padding:4px 10px; border-radius:999px; border:1px solid #c7d2fe; font-weight:700; }
        @media (max-width: 1200px) { .stats { grid-template-columns:repeat(2,1fr); } .cards { grid-template-columns:1fr; } }
      `})]})}function O8(){const e=gt(),[t,r]=b.useState(()=>{const T=localStorage.getItem("trainerCourses");return T?JSON.parse(T):[]}),n={title:"",description:"",category:"",tags:"",level:"Beginner",duration:"",capacity:"",prerequisites:"",objectives:"",modules:[],startDate:"",thumbnail:"",status:"Draft"},[l,s]=b.useState(n),[d,p]=b.useState(null),[h,m]=b.useState("");b.useEffect(()=>{if(e.state?.editIndex!==void 0){const T=e.state.editIndex,C=JSON.parse(localStorage.getItem("trainerCourses")||"[]");C[T]&&(s({...C[T],tags:(C[T].tags||[]).join(", ")}),p(T),g("Editing existing course ✏️"))}},[e.state]);const g=T=>{m(T),setTimeout(()=>m(""),2500)},x=T=>{const{name:C,value:_}=T.target;s(M=>({...M,[C]:_}))},w=T=>{const C=T.target.files?.[0];if(!C)return;const _=new FileReader;_.onloadend=()=>s(M=>({...M,thumbnail:_.result})),_.readAsDataURL(C)},j=()=>{s(T=>({...T,modules:[...T.modules,{title:"",lessons:""}]}))},S=(T,C,_)=>{s(M=>({...M,modules:M.modules.map((R,U)=>U===T?{...R,[C]:_}:R)}))},A=T=>{s(C=>({...C,modules:C.modules.filter((_,M)=>M!==T)}))},O=()=>{s(n),p(null)},k=T=>{if(T.preventDefault(),!l.title.trim()||!l.description.trim()){g("Please enter title & description!");return}const C={...l,tags:(l.tags||"").split(",").map(_=>_.trim()).filter(Boolean)};if(d!==null){const _=[...t];_[d]=C,r(_),localStorage.setItem("trainerCourses",JSON.stringify(_)),g("Course updated successfully ✅")}else{const _=[...t,C];r(_),localStorage.setItem("trainerCourses",JSON.stringify(_)),g("Course added successfully 🎉")}O()};return u.jsxs("div",{className:"page",children:[u.jsxs("header",{className:"banner",children:[u.jsx("h1",{children:"🎓 Course Management"}),u.jsx("p",{children:"Create, organize, and publish your training courses. Trainers manage course details here — no pricing, just learning."})]}),h&&u.jsx("div",{className:"toast",children:h}),u.jsxs("form",{className:"form",onSubmit:k,children:[u.jsx("h2",{children:d!==null?"Edit Course":"Add New Course"}),u.jsxs("div",{className:"grid",children:[u.jsxs("div",{className:"left",children:[u.jsx("label",{children:"Course Title"}),u.jsx("input",{name:"title",value:l.title,onChange:x,placeholder:"e.g. Full Stack Development Bootcamp",required:!0}),u.jsx("label",{children:"Description"}),u.jsx("textarea",{name:"description",value:l.description,onChange:x,placeholder:"Brief overview of the course content",rows:"3",required:!0}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:[u.jsx("label",{children:"Category"}),u.jsx("input",{name:"category",value:l.category,onChange:x,placeholder:"e.g. Web Development"})]}),u.jsxs("div",{children:[u.jsx("label",{children:"Level"}),u.jsxs("select",{name:"level",value:l.level,onChange:x,children:[u.jsx("option",{children:"Beginner"}),u.jsx("option",{children:"Intermediate"}),u.jsx("option",{children:"Advanced"})]})]})]}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:[u.jsx("label",{children:"Duration (hours)"}),u.jsx("input",{name:"duration",value:l.duration,onChange:x,placeholder:"e.g. 10"})]}),u.jsxs("div",{children:[u.jsx("label",{children:"Capacity (students)"}),u.jsx("input",{name:"capacity",value:l.capacity,onChange:x,placeholder:"e.g. 40"})]})]}),u.jsx("label",{children:"Start Date"}),u.jsx("input",{type:"date",name:"startDate",value:l.startDate,onChange:x}),u.jsx("label",{children:"Prerequisites"}),u.jsx("input",{name:"prerequisites",value:l.prerequisites,onChange:x,placeholder:"e.g. Basic Programming Knowledge"}),u.jsx("label",{children:"Learning Objectives"}),u.jsx("textarea",{name:"objectives",value:l.objectives,onChange:x,rows:"2",placeholder:"List what learners will achieve"}),u.jsx("label",{children:"Tags (comma separated)"}),u.jsx("input",{name:"tags",value:l.tags,onChange:x,placeholder:"e.g. JavaScript, React"})]}),u.jsxs("div",{className:"right",children:[u.jsx("label",{children:"Modules"}),u.jsxs("div",{className:"modules",children:[l.modules.map((T,C)=>u.jsxs("div",{className:"module-row",children:[u.jsx("input",{placeholder:"Module Title",value:T.title,onChange:_=>S(C,"title",_.target.value)}),u.jsx("input",{placeholder:"No. of Lessons",value:T.lessons,onChange:_=>S(C,"lessons",_.target.value)}),u.jsx("button",{type:"button",className:"remove",onClick:()=>A(C),children:"✖"})]},C)),u.jsx("button",{type:"button",className:"btn-outline",onClick:j,children:"+ Add Module"})]}),u.jsx("label",{children:"Thumbnail"}),u.jsxs("div",{className:"thumb-upload",children:[l.thumbnail?u.jsx("img",{src:l.thumbnail,alt:"thumb"}):u.jsx("div",{className:"placeholder",children:"No Image"}),u.jsx("input",{type:"file",accept:"image/*",onChange:w})]}),u.jsx("label",{children:"Status"}),u.jsxs("select",{name:"status",value:l.status,onChange:x,children:[u.jsx("option",{children:"Draft"}),u.jsx("option",{children:"Published"})]})]})]}),u.jsxs("div",{className:"actions",children:[u.jsx("button",{type:"submit",className:"btn-primary",children:d!==null?"Update Course":"Add Course"}),u.jsx("button",{type:"button",className:"btn-reset",onClick:O,children:"Reset"})]})]}),u.jsx("style",{children:`
        .page {
          background: #f8fafc;
          min-height: 100vh;
          padding-bottom: 50px;
          font-family: "Inter", system-ui;
        }
        .banner {
          background: linear-gradient(120deg, #2563eb, #1e40af);
          color: #fff;
          padding: 30px 24px;
          border-radius: 0 0 30px 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .banner h1 {
          margin: 0 0 6px;
          font-size: 1.8rem;
          font-weight: 800;
        }
        .banner p {
          max-width: 800px;
          color: #e2e8f0;
        }
        .toast {
          background: #16a34a;
          color: #fff;
          padding: 10px 16px;
          border-radius: 10px;
          margin: 20px auto;
          width: fit-content;
          font-weight: 600;
          animation: fadeInOut 2.5s ease;
        }
        @keyframes fadeInOut {
          0%,100%{opacity:0;transform:translateY(-10px);}
          10%,90%{opacity:1;transform:translateY(0);}
        }
        .form {
          background: rgba(255,255,255,0.95);
          margin: 20px auto;
          max-width: 1100px;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.06);
          padding: 24px;
        }
        h2 { color:#1e293b; margin-bottom: 16px; }
        .grid { display:flex; flex-wrap:wrap; gap:24px; }
        .left { flex:2; min-width: 320px; display:flex; flex-direction:column; gap:10px; }
        .right { flex:1; min-width: 250px; display:flex; flex-direction:column; gap:10px; }
        input, textarea, select {
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          font-size: 0.95rem;
          outline:none;
          transition: all .2s;
        }
        input:focus, textarea:focus, select:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37,99,235,0.1);
        }
        .row { display:flex; gap:10px; }
        .modules { display:flex; flex-direction:column; gap:8px; }
        .module-row {
          display:flex; gap:8px; align-items:center;
          animation: fadeIn .3s ease;
        }
        @keyframes fadeIn {
          from{opacity:0;transform:translateY(-5px);} to{opacity:1;transform:translateY(0);}
        }
        .remove {
          background:#ef4444; border:none; color:#fff;
          padding:6px 10px; border-radius:8px; cursor:pointer;
        }
        .thumb-upload {
          position:relative;
          border:2px dashed #94a3b8;
          border-radius:12px;
          height:150px;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }
        .thumb-upload img {
          width:100%;
          height:100%;
          object-fit:cover;
        }
        .thumb-upload input {
          position:absolute;
          inset:0;
          opacity:0;
          cursor:pointer;
        }
        .placeholder { color:#94a3b8; }
        .btn-primary {
          background:#2563eb;
          color:white;
          border:none;
          padding:12px 20px;
          border-radius:10px;
          font-weight:700;
          cursor:pointer;
          transition: background .2s;
        }
        .btn-primary:hover { background:#1e40af; }
        .btn-reset {
          background:#e2e8f0;
          color:#1e293b;
          border:none;
          padding:12px 20px;
          border-radius:10px;
          cursor:pointer;
          font-weight:600;
        }
        .btn-outline {
          background:none;
          border:1px dashed #94a3b8;
          border-radius:8px;
          padding:8px;
          color:#334155;
          font-weight:600;
          cursor:pointer;
        }
        .actions {
          display:flex;
          gap:10px;
          margin-top:20px;
        }
        @media(max-width:900px){ .grid{flex-direction:column;} }
      `})]})}function E8(){const[e,t]=b.useState([]),r=it();b.useEffect(()=>{const l=localStorage.getItem("trainerCourses");l&&t(JSON.parse(l))},[]);const n=l=>{if(!window.confirm("Remove this course?"))return;const s=e.filter((d,p)=>p!==l);t(s),localStorage.setItem("trainerCourses",JSON.stringify(s))};return u.jsxs("div",{className:"courses",children:[u.jsx("h1",{children:"My Courses"}),u.jsx("p",{className:"sub",children:"Manage your published and draft courses."}),e.length===0?u.jsxs("div",{className:"empty",children:[u.jsx("p",{children:"No courses found."}),u.jsxs("p",{children:["Go to"," ",u.jsx("button",{className:"link-btn",onClick:()=>r("/trainer/course-management"),children:"Course Management"})," ","to add your first course!"]}),u.jsx("button",{className:"edit",onClick:()=>r("/trainer/course-management",{state:{editIndex:i}}),children:"Edit"})]}):u.jsx("div",{className:"grid",children:e.map((l,s)=>u.jsxs("div",{className:"card",children:[l.thumbnail?u.jsx("img",{src:l.thumbnail,alt:l.title,className:"thumb"}):u.jsx("div",{className:"thumb placeholder",children:"No Image"}),u.jsxs("div",{className:"card-body",children:[u.jsxs("div",{className:"header",children:[u.jsx("h3",{children:l.title}),u.jsx("span",{className:`status ${l.status.toLowerCase()}`,children:l.status})]}),u.jsxs("p",{className:"meta",children:[l.category," • ",l.level," • ",l.duration?`${l.duration} hrs`:"—"]}),u.jsx("p",{className:"desc",children:l.description}),u.jsxs("div",{className:"info-row",children:[l.startDate&&u.jsxs("span",{className:"tag",children:["Starts: ",l.startDate]}),l.capacity&&u.jsxs("span",{className:"tag",children:["Seats: ",l.capacity]}),Array.isArray(l.tags)&&l.tags.slice(0,3).map((d,p)=>u.jsx("span",{className:"tag",children:d},p))]}),u.jsxs("div",{className:"card-actions",children:[u.jsx("button",{onClick:()=>{r("/trainer/course-management")},className:"edit",children:"Edit"}),u.jsx("button",{onClick:()=>n(s),className:"delete",children:"Delete"})]})]})]},s))}),u.jsx("style",{children:`
        .courses { padding:20px; font-family:Inter,system-ui,Arial; }
        .sub { color:#64748b; margin-bottom:16px; }
        .grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:16px; }
        .card { background:white; border-radius:12px; overflow:hidden; border:1px solid #e6eef8; display:flex; flex-direction:column; }
        .thumb { height:150px; width:100%; object-fit:cover; }
        .card-body { padding:12px; display:flex; flex-direction:column; gap:8px; }
        .header { display:flex; justify-content:space-between; align-items:center; }
        .header h3 { margin:0; font-size:1rem; }
        .meta { color:#64748b; font-size:0.85rem; }
        .desc { color:#334155; }
        .tag { background:#f1f5f9; padding:4px 8px; border-radius:6px; color:#334155; margin-right:6px; display:inline-block; }
        .info-row { display:flex; gap:8px; flex-wrap:wrap; }
        .card-actions { display:flex; gap:8px; margin-top:8px; }
        .edit { flex:1; background:#3b82f6; color:white; border:none; padding:8px; border-radius:8px; cursor:pointer; }
        .delete { flex:1; background:#ef4444; color:white; border:none; padding:8px; border-radius:8px; cursor:pointer; }
        .empty { background:white; padding:28px; border-radius:12px; border:1px dashed #cbd5e1; text-align:center; }
        .link-btn { background:none; border:none; color:#2563eb; cursor:pointer; font-weight:700; text-decoration:underline; }
      `})]})}function k8(){const e=[{name:"Alice Johnson",course:"React Fundamentals",progress:88},{name:"David Lee",course:"Python for ML",progress:76},{name:"Sara White",course:"SQL Basics",progress:91}];return u.jsxs("div",{children:[u.jsx("h1",{children:"Student Progress"}),u.jsx("p",{className:"sub",children:"Monitor learner performance across your courses."}),u.jsxs("table",{className:"tbl",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Student"}),u.jsx("th",{children:"Course"}),u.jsx("th",{children:"Progress"})]})}),u.jsx("tbody",{children:e.map((t,r)=>u.jsxs("tr",{children:[u.jsx("td",{children:t.name}),u.jsx("td",{children:t.course}),u.jsx("td",{children:u.jsxs("span",{className:"bar",style:{width:`${t.progress}%`},children:[t.progress,"%"]})})]},r))})]}),u.jsx("style",{children:`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:14px;}
        .tbl {width:100%;border-collapse:collapse;background:#fff;border:1px solid #e2e8f0;border-radius:10px;}
        .tbl th, .tbl td {padding:10px 12px;border-bottom:1px solid #e2e8f0;text-align:left;}
        .bar {display:inline-block;height:8px;background:#2563eb;color:#fff;border-radius:999px;font-size:.8rem;text-align:right;padding-right:6px;}
      `})]})}function RA(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(r=RA(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function $e(){for(var e,t,r=0,n="",l=arguments.length;r<l;r++)(e=arguments[r])&&(t=RA(e))&&(n&&(n+=" "),n+=t);return n}var N8=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"];function b0(e){if(typeof e!="string")return!1;var t=N8;return t.includes(e)}var C8=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"];function LA(e){if(typeof e!="string")return!1;var t=C8;return t.includes(e)}function BA(e){return typeof e=="string"&&e.startsWith("data-")}function nn(e){var t=Object.entries(e).filter(r=>{var[n]=r;return LA(n)||BA(n)});return Object.fromEntries(t)}function ms(e){if(e==null)return null;if(b.isValidElement(e)&&typeof e.props=="object"&&e.props!==null){var t=e.props;return nn(t)}return typeof e=="object"&&!Array.isArray(e)?nn(e):null}function nr(e){var t=Object.entries(e).filter(r=>{var[n]=r;return LA(n)||BA(n)||b0(n)});return Object.fromEntries(t)}function T8(e){return e==null?null:b.isValidElement(e)?nr(e.props):typeof e=="object"&&!Array.isArray(e)?nr(e):null}var M8=["children","width","height","viewBox","className","style","title","desc"];function cg(){return cg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},cg.apply(null,arguments)}function _8(e,t){if(e==null)return{};var r,n,l=P8(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function P8(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var w0=b.forwardRef((e,t)=>{var{children:r,width:n,height:l,viewBox:s,className:d,style:p,title:h,desc:m}=e,g=_8(e,M8),x=s||{width:n,height:l,x:0,y:0},w=$e("recharts-surface",d);return b.createElement("svg",cg({},nr(g),{className:w,width:n,height:l,style:p,viewBox:"".concat(x.x," ").concat(x.y," ").concat(x.width," ").concat(x.height),ref:t}),b.createElement("title",null,h),b.createElement("desc",null,m),r)}),D8=["children","className"];function ug(){return ug=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ug.apply(null,arguments)}function z8(e,t){if(e==null)return{};var r,n,l=R8(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function R8(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var Gr=b.forwardRef((e,t)=>{var{children:r,className:n}=e,l=z8(e,D8),s=$e("recharts-layer",n);return b.createElement("g",ug({className:s},nr(l),{ref:t}),r)}),IA=b.createContext(null),L8=()=>b.useContext(IA);function Ze(e){return function(){return e}}const qA=Math.cos,vu=Math.sin,sn=Math.sqrt,xu=Math.PI,vd=2*xu,dg=Math.PI,fg=2*dg,oi=1e-6,B8=fg-oi;function $A(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=arguments[t]+e[t]}function I8(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return $A;const r=10**t;return function(n){this._+=n[0];for(let l=1,s=n.length;l<s;++l)this._+=Math.round(arguments[l]*r)/r+n[l]}}class q8{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?$A:I8(t)}moveTo(t,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,r){this._append`L${this._x1=+t},${this._y1=+r}`}quadraticCurveTo(t,r,n,l){this._append`Q${+t},${+r},${this._x1=+n},${this._y1=+l}`}bezierCurveTo(t,r,n,l,s,d){this._append`C${+t},${+r},${+n},${+l},${this._x1=+s},${this._y1=+d}`}arcTo(t,r,n,l,s){if(t=+t,r=+r,n=+n,l=+l,s=+s,s<0)throw new Error(`negative radius: ${s}`);let d=this._x1,p=this._y1,h=n-t,m=l-r,g=d-t,x=p-r,w=g*g+x*x;if(this._x1===null)this._append`M${this._x1=t},${this._y1=r}`;else if(w>oi)if(!(Math.abs(x*h-m*g)>oi)||!s)this._append`L${this._x1=t},${this._y1=r}`;else{let j=n-d,S=l-p,A=h*h+m*m,O=j*j+S*S,k=Math.sqrt(A),T=Math.sqrt(w),C=s*Math.tan((dg-Math.acos((A+w-O)/(2*k*T)))/2),_=C/T,M=C/k;Math.abs(_-1)>oi&&this._append`L${t+_*g},${r+_*x}`,this._append`A${s},${s},0,0,${+(x*j>g*S)},${this._x1=t+M*h},${this._y1=r+M*m}`}}arc(t,r,n,l,s,d){if(t=+t,r=+r,n=+n,d=!!d,n<0)throw new Error(`negative radius: ${n}`);let p=n*Math.cos(l),h=n*Math.sin(l),m=t+p,g=r+h,x=1^d,w=d?l-s:s-l;this._x1===null?this._append`M${m},${g}`:(Math.abs(this._x1-m)>oi||Math.abs(this._y1-g)>oi)&&this._append`L${m},${g}`,n&&(w<0&&(w=w%fg+fg),w>B8?this._append`A${n},${n},0,1,${x},${t-p},${r-h}A${n},${n},0,1,${x},${this._x1=m},${this._y1=g}`:w>oi&&this._append`A${n},${n},0,${+(w>=dg)},${x},${this._x1=t+n*Math.cos(s)},${this._y1=r+n*Math.sin(s)}`)}rect(t,r,n,l){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}h${n=+n}v${+l}h${-n}Z`}toString(){return this._}}function j0(e){let t=3;return e.digits=function(r){if(!arguments.length)return t;if(r==null)t=null;else{const n=Math.floor(r);if(!(n>=0))throw new RangeError(`invalid digits: ${r}`);t=n}return e},()=>new q8(t)}function S0(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function UA(e){this._context=e}UA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function xd(e){return new UA(e)}function HA(e){return e[0]}function YA(e){return e[1]}function GA(e,t){var r=Ze(!0),n=null,l=xd,s=null,d=j0(p);e=typeof e=="function"?e:e===void 0?HA:Ze(e),t=typeof t=="function"?t:t===void 0?YA:Ze(t);function p(h){var m,g=(h=S0(h)).length,x,w=!1,j;for(n==null&&(s=l(j=d())),m=0;m<=g;++m)!(m<g&&r(x=h[m],m,h))===w&&((w=!w)?s.lineStart():s.lineEnd()),w&&s.point(+e(x,m,h),+t(x,m,h));if(j)return s=null,j+""||null}return p.x=function(h){return arguments.length?(e=typeof h=="function"?h:Ze(+h),p):e},p.y=function(h){return arguments.length?(t=typeof h=="function"?h:Ze(+h),p):t},p.defined=function(h){return arguments.length?(r=typeof h=="function"?h:Ze(!!h),p):r},p.curve=function(h){return arguments.length?(l=h,n!=null&&(s=l(n)),p):l},p.context=function(h){return arguments.length?(h==null?n=s=null:s=l(n=h),p):n},p}function Xc(e,t,r){var n=null,l=Ze(!0),s=null,d=xd,p=null,h=j0(m);e=typeof e=="function"?e:e===void 0?HA:Ze(+e),t=typeof t=="function"?t:Ze(t===void 0?0:+t),r=typeof r=="function"?r:r===void 0?YA:Ze(+r);function m(x){var w,j,S,A=(x=S0(x)).length,O,k=!1,T,C=new Array(A),_=new Array(A);for(s==null&&(p=d(T=h())),w=0;w<=A;++w){if(!(w<A&&l(O=x[w],w,x))===k)if(k=!k)j=w,p.areaStart(),p.lineStart();else{for(p.lineEnd(),p.lineStart(),S=w-1;S>=j;--S)p.point(C[S],_[S]);p.lineEnd(),p.areaEnd()}k&&(C[w]=+e(O,w,x),_[w]=+t(O,w,x),p.point(n?+n(O,w,x):C[w],r?+r(O,w,x):_[w]))}if(T)return p=null,T+""||null}function g(){return GA().defined(l).curve(d).context(s)}return m.x=function(x){return arguments.length?(e=typeof x=="function"?x:Ze(+x),n=null,m):e},m.x0=function(x){return arguments.length?(e=typeof x=="function"?x:Ze(+x),m):e},m.x1=function(x){return arguments.length?(n=x==null?null:typeof x=="function"?x:Ze(+x),m):n},m.y=function(x){return arguments.length?(t=typeof x=="function"?x:Ze(+x),r=null,m):t},m.y0=function(x){return arguments.length?(t=typeof x=="function"?x:Ze(+x),m):t},m.y1=function(x){return arguments.length?(r=x==null?null:typeof x=="function"?x:Ze(+x),m):r},m.lineX0=m.lineY0=function(){return g().x(e).y(t)},m.lineY1=function(){return g().x(e).y(r)},m.lineX1=function(){return g().x(n).y(t)},m.defined=function(x){return arguments.length?(l=typeof x=="function"?x:Ze(!!x),m):l},m.curve=function(x){return arguments.length?(d=x,s!=null&&(p=d(s)),m):d},m.context=function(x){return arguments.length?(x==null?s=p=null:p=d(s=x),m):s},m}class KA{constructor(t,r){this._context=t,this._x=r}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,r){switch(t=+t,r=+r,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,r,t,r):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+r)/2,t,this._y0,t,r);break}}this._x0=t,this._y0=r}}function $8(e){return new KA(e,!0)}function U8(e){return new KA(e,!1)}const A0={draw(e,t){const r=sn(t/xu);e.moveTo(r,0),e.arc(0,0,r,0,vd)}},H8={draw(e,t){const r=sn(t/5)/2;e.moveTo(-3*r,-r),e.lineTo(-r,-r),e.lineTo(-r,-3*r),e.lineTo(r,-3*r),e.lineTo(r,-r),e.lineTo(3*r,-r),e.lineTo(3*r,r),e.lineTo(r,r),e.lineTo(r,3*r),e.lineTo(-r,3*r),e.lineTo(-r,r),e.lineTo(-3*r,r),e.closePath()}},WA=sn(1/3),Y8=WA*2,G8={draw(e,t){const r=sn(t/Y8),n=r*WA;e.moveTo(0,-r),e.lineTo(n,0),e.lineTo(0,r),e.lineTo(-n,0),e.closePath()}},K8={draw(e,t){const r=sn(t),n=-r/2;e.rect(n,n,r,r)}},W8=.8908130915292852,VA=vu(xu/10)/vu(7*xu/10),V8=vu(vd/10)*VA,X8=-qA(vd/10)*VA,F8={draw(e,t){const r=sn(t*W8),n=V8*r,l=X8*r;e.moveTo(0,-r),e.lineTo(n,l);for(let s=1;s<5;++s){const d=vd*s/5,p=qA(d),h=vu(d);e.lineTo(h*r,-p*r),e.lineTo(p*n-h*l,h*n+p*l)}e.closePath()}},Oh=sn(3),Z8={draw(e,t){const r=-sn(t/(Oh*3));e.moveTo(0,r*2),e.lineTo(-Oh*r,-r),e.lineTo(Oh*r,-r),e.closePath()}},qr=-.5,$r=sn(3)/2,pg=1/sn(12),Q8=(pg/2+1)*3,J8={draw(e,t){const r=sn(t/Q8),n=r/2,l=r*pg,s=n,d=r*pg+r,p=-s,h=d;e.moveTo(n,l),e.lineTo(s,d),e.lineTo(p,h),e.lineTo(qr*n-$r*l,$r*n+qr*l),e.lineTo(qr*s-$r*d,$r*s+qr*d),e.lineTo(qr*p-$r*h,$r*p+qr*h),e.lineTo(qr*n+$r*l,qr*l-$r*n),e.lineTo(qr*s+$r*d,qr*d-$r*s),e.lineTo(qr*p+$r*h,qr*h-$r*p),e.closePath()}};function e_(e,t){let r=null,n=j0(l);e=typeof e=="function"?e:Ze(e||A0),t=typeof t=="function"?t:Ze(t===void 0?64:+t);function l(){let s;if(r||(r=s=n()),e.apply(this,arguments).draw(r,+t.apply(this,arguments)),s)return r=null,s+""||null}return l.type=function(s){return arguments.length?(e=typeof s=="function"?s:Ze(s),l):e},l.size=function(s){return arguments.length?(t=typeof s=="function"?s:Ze(+s),l):t},l.context=function(s){return arguments.length?(r=s??null,l):r},l}function yu(){}function bu(e,t,r){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+r)/6)}function XA(e){this._context=e}XA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:bu(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:bu(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function t_(e){return new XA(e)}function FA(e){this._context=e}FA.prototype={areaStart:yu,areaEnd:yu,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:bu(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function r_(e){return new FA(e)}function ZA(e){this._context=e}ZA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var r=(this._x0+4*this._x1+e)/6,n=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(r,n):this._context.moveTo(r,n);break;case 3:this._point=4;default:bu(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function n_(e){return new ZA(e)}function QA(e){this._context=e}QA.prototype={areaStart:yu,areaEnd:yu,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function a_(e){return new QA(e)}function ow(e){return e<0?-1:1}function lw(e,t,r){var n=e._x1-e._x0,l=t-e._x1,s=(e._y1-e._y0)/(n||l<0&&-0),d=(r-e._y1)/(l||n<0&&-0),p=(s*l+d*n)/(n+l);return(ow(s)+ow(d))*Math.min(Math.abs(s),Math.abs(d),.5*Math.abs(p))||0}function sw(e,t){var r=e._x1-e._x0;return r?(3*(e._y1-e._y0)/r-t)/2:t}function Eh(e,t,r){var n=e._x0,l=e._y0,s=e._x1,d=e._y1,p=(s-n)/3;e._context.bezierCurveTo(n+p,l+p*t,s-p,d-p*r,s,d)}function wu(e){this._context=e}wu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Eh(this,this._t0,sw(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var r=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Eh(this,sw(this,r=lw(this,e,t)),r);break;default:Eh(this,this._t0,r=lw(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=r}}};function JA(e){this._context=new eO(e)}(JA.prototype=Object.create(wu.prototype)).point=function(e,t){wu.prototype.point.call(this,t,e)};function eO(e){this._context=e}eO.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,r,n,l,s){this._context.bezierCurveTo(t,e,n,r,s,l)}};function i_(e){return new wu(e)}function o_(e){return new JA(e)}function tO(e){this._context=e}tO.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,r=e.length;if(r)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),r===2)this._context.lineTo(e[1],t[1]);else for(var n=cw(e),l=cw(t),s=0,d=1;d<r;++s,++d)this._context.bezierCurveTo(n[0][s],l[0][s],n[1][s],l[1][s],e[d],t[d]);(this._line||this._line!==0&&r===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function cw(e){var t,r=e.length-1,n,l=new Array(r),s=new Array(r),d=new Array(r);for(l[0]=0,s[0]=2,d[0]=e[0]+2*e[1],t=1;t<r-1;++t)l[t]=1,s[t]=4,d[t]=4*e[t]+2*e[t+1];for(l[r-1]=2,s[r-1]=7,d[r-1]=8*e[r-1]+e[r],t=1;t<r;++t)n=l[t]/s[t-1],s[t]-=n,d[t]-=n*d[t-1];for(l[r-1]=d[r-1]/s[r-1],t=r-2;t>=0;--t)l[t]=(d[t]-l[t+1])/s[t];for(s[r-1]=(e[r]+l[r-1])/2,t=0;t<r-1;++t)s[t]=2*e[t+1]-l[t+1];return[l,s]}function l_(e){return new tO(e)}function yd(e,t){this._context=e,this._t=t}yd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var r=this._x*(1-this._t)+e*this._t;this._context.lineTo(r,this._y),this._context.lineTo(r,t)}break}}this._x=e,this._y=t}};function s_(e){return new yd(e,.5)}function c_(e){return new yd(e,0)}function u_(e){return new yd(e,1)}function bo(e,t){if((d=e.length)>1)for(var r=1,n,l,s=e[t[0]],d,p=s.length;r<d;++r)for(l=s,s=e[t[r]],n=0;n<p;++n)s[n][1]+=s[n][0]=isNaN(l[n][1])?l[n][0]:l[n][1]}function hg(e){for(var t=e.length,r=new Array(t);--t>=0;)r[t]=t;return r}function d_(e,t){return e[t]}function f_(e){const t=[];return t.key=e,t}function p_(){var e=Ze([]),t=hg,r=bo,n=d_;function l(s){var d=Array.from(e.apply(this,arguments),f_),p,h=d.length,m=-1,g;for(const x of s)for(p=0,++m;p<h;++p)(d[p][m]=[0,+n(x,d[p].key,m,s)]).data=x;for(p=0,g=S0(t(d));p<h;++p)d[g[p]].index=p;return r(d,g),d}return l.keys=function(s){return arguments.length?(e=typeof s=="function"?s:Ze(Array.from(s)),l):e},l.value=function(s){return arguments.length?(n=typeof s=="function"?s:Ze(+s),l):n},l.order=function(s){return arguments.length?(t=s==null?hg:typeof s=="function"?s:Ze(Array.from(s)),l):t},l.offset=function(s){return arguments.length?(r=s??bo,l):r},l}function h_(e,t){if((n=e.length)>0){for(var r,n,l=0,s=e[0].length,d;l<s;++l){for(d=r=0;r<n;++r)d+=e[r][l][1]||0;if(d)for(r=0;r<n;++r)e[r][l][1]/=d}bo(e,t)}}function m_(e,t){if((l=e.length)>0){for(var r=0,n=e[t[0]],l,s=n.length;r<s;++r){for(var d=0,p=0;d<l;++d)p+=e[d][r][1]||0;n[r][1]+=n[r][0]=-p/2}bo(e,t)}}function g_(e,t){if(!(!((d=e.length)>0)||!((s=(l=e[t[0]]).length)>0))){for(var r=0,n=1,l,s,d;n<s;++n){for(var p=0,h=0,m=0;p<d;++p){for(var g=e[t[p]],x=g[n][1]||0,w=g[n-1][1]||0,j=(x-w)/2,S=0;S<p;++S){var A=e[t[S]],O=A[n][1]||0,k=A[n-1][1]||0;j+=O-k}h+=x,m+=j*x}l[n-1][1]+=l[n-1][0]=r,h&&(r-=m/h)}l[n-1][1]+=l[n-1][0]=r,bo(e,t)}}var kh={},Nh={},uw;function v_(){return uw||(uw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==="__proto__"}e.isUnsafeProperty=t})(Nh)),Nh}var Ch={},dw;function rO(){return dw||(dw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){switch(typeof r){case"number":case"symbol":return!1;case"string":return r.includes(".")||r.includes("[")||r.includes("]")}}e.isDeepKey=t})(Ch)),Ch}var Th={},fw;function O0(){return fw||(fw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="string"||typeof r=="symbol"?r:Object.is(r?.valueOf?.(),-0)?"-0":String(r)}e.toKey=t})(Th)),Th}var Mh={},_h={},pw;function x_(){return pw||(pw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){if(r==null)return"";if(typeof r=="string")return r;if(Array.isArray(r))return r.map(t).join(",");const n=String(r);return n==="0"&&Object.is(Number(r),-0)?"-0":n}e.toString=t})(_h)),_h}var hw;function E0(){return hw||(hw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=x_(),r=O0();function n(l){if(Array.isArray(l))return l.map(r.toKey);if(typeof l=="symbol")return[l];l=t.toString(l);const s=[],d=l.length;if(d===0)return s;let p=0,h="",m="",g=!1;for(l.charCodeAt(0)===46&&(s.push(""),p++);p<d;){const x=l[p];m?x==="\\"&&p+1<d?(p++,h+=l[p]):x===m?m="":h+=x:g?x==='"'||x==="'"?m=x:x==="]"?(g=!1,s.push(h),h=""):h+=x:x==="["?(g=!0,h&&(s.push(h),h="")):x==="."?h&&(s.push(h),h=""):h+=x,p++}return h&&s.push(h),s}e.toPath=n})(Mh)),Mh}var mw;function k0(){return mw||(mw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=v_(),r=rO(),n=O0(),l=E0();function s(p,h,m){if(p==null)return m;switch(typeof h){case"string":{if(t.isUnsafeProperty(h))return m;const g=p[h];return g===void 0?r.isDeepKey(h)?s(p,l.toPath(h),m):m:g}case"number":case"symbol":{typeof h=="number"&&(h=n.toKey(h));const g=p[h];return g===void 0?m:g}default:{if(Array.isArray(h))return d(p,h,m);if(Object.is(h?.valueOf(),-0)?h="-0":h=String(h),t.isUnsafeProperty(h))return m;const g=p[h];return g===void 0?m:g}}}function d(p,h,m){if(h.length===0)return m;let g=p;for(let x=0;x<h.length;x++){if(g==null||t.isUnsafeProperty(h[x]))return m;g=g[h[x]]}return g===void 0?m:g}e.get=s})(kh)),kh}var Ph,gw;function y_(){return gw||(gw=1,Ph=k0().get),Ph}var b_=y_();const wo=Qn(b_);var pr=e=>e===0?0:e>0?1:-1,an=e=>typeof e=="number"&&e!=+e,Gn=e=>typeof e=="string"&&e.indexOf("%")===e.length-1,de=e=>(typeof e=="number"||e instanceof Number)&&!an(e),vn=e=>de(e)||typeof e=="string",w_=0,es=e=>{var t=++w_;return"".concat(e||"").concat(t)},on=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!de(t)&&typeof t!="string")return n;var s;if(Gn(t)){if(r==null)return n;var d=t.indexOf("%");s=r*parseFloat(t.slice(0,d))/100}else s=+t;return an(s)&&(s=n),l&&r!=null&&s>r&&(s=r),s},nO=e=>{if(!Array.isArray(e))return!1;for(var t=e.length,r={},n=0;n<t;n++)if(!r[e[n]])r[e[n]]=!0;else return!0;return!1};function ct(e,t,r){return de(e)&&de(t)?e+r*(t-e):t}function aO(e,t,r){if(!(!e||!e.length))return e.find(n=>n&&(typeof t=="function"?t(n):wo(n,t))===r)}var nt=e=>e===null||typeof e>"u",gs=e=>nt(e)?e:"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));function j_(e){return e!=null}function _o(){}var S_=["type","size","sizeType"];function mg(){return mg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},mg.apply(null,arguments)}function vw(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function xw(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?vw(Object(r),!0).forEach(function(n){A_(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vw(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function A_(e,t,r){return(t=O_(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O_(e){var t=E_(e,"string");return typeof t=="symbol"?t:t+""}function E_(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k_(e,t){if(e==null)return{};var r,n,l=N_(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function N_(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var iO={symbolCircle:A0,symbolCross:H8,symbolDiamond:G8,symbolSquare:K8,symbolStar:F8,symbolTriangle:Z8,symbolWye:J8},C_=Math.PI/180,T_=e=>{var t="symbol".concat(gs(e));return iO[t]||A0},M_=(e,t,r)=>{if(t==="area")return e;switch(r){case"cross":return 5*e*e/9;case"diamond":return .5*e*e/Math.sqrt(3);case"square":return e*e;case"star":{var n=18*C_;return 1.25*e*e*(Math.tan(n)-Math.tan(n*2)*Math.tan(n)**2)}case"triangle":return Math.sqrt(3)*e*e/4;case"wye":return(21-10*Math.sqrt(3))*e*e/8;default:return Math.PI*e*e/4}},__=(e,t)=>{iO["symbol".concat(gs(e))]=t},N0=e=>{var{type:t="circle",size:r=64,sizeType:n="area"}=e,l=k_(e,S_),s=xw(xw({},l),{},{type:t,size:r,sizeType:n}),d="circle";typeof t=="string"&&(d=t);var p=()=>{var w=T_(d),j=e_().type(w).size(M_(r,n,d)),S=j();if(S!==null)return S},{className:h,cx:m,cy:g}=s,x=nr(s);return de(m)&&de(g)&&de(r)?b.createElement("path",mg({},x,{className:$e("recharts-symbols",h),transform:"translate(".concat(m,", ").concat(g,")"),d:p()})):null};N0.registerSymbol=__;var oO=e=>"radius"in e&&"startAngle"in e&&"endAngle"in e,C0=(e,t)=>{if(!e||typeof e=="function"||typeof e=="boolean")return null;var r=e;if(b.isValidElement(e)&&(r=e.props),typeof r!="object"&&typeof r!="function")return null;var n={};return Object.keys(r).forEach(l=>{b0(l)&&(n[l]=(s=>r[l](r,s)))}),n},P_=(e,t,r)=>n=>(e(t,r,n),null),bd=(e,t,r)=>{if(e===null||typeof e!="object"&&typeof e!="function")return null;var n=null;return Object.keys(e).forEach(l=>{var s=e[l];b0(l)&&typeof s=="function"&&(n||(n={}),n[l]=P_(s,t,r))}),n};function yw(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function D_(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?yw(Object(r),!0).forEach(function(n){z_(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):yw(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function z_(e,t,r){return(t=R_(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R_(e){var t=L_(e,"string");return typeof t=="symbol"?t:t+""}function L_(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gt(e,t){var r=D_({},e),n=t,l=Object.keys(t),s=l.reduce((d,p)=>(d[p]===void 0&&n[p]!==void 0&&(d[p]=n[p]),d),r);return s}function ju(){return ju=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ju.apply(null,arguments)}function bw(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function B_(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?bw(Object(r),!0).forEach(function(n){I_(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):bw(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function I_(e,t,r){return(t=q_(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q_(e){var t=$_(e,"string");return typeof t=="symbol"?t:t+""}function $_(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Hr=32,U_={align:"center",iconSize:14,inactiveColor:"#ccc",layout:"horizontal",verticalAlign:"middle"};function H_(e){var{data:t,iconType:r,inactiveColor:n}=e,l=Hr/2,s=Hr/6,d=Hr/3,p=t.inactive?n:t.color,h=r??t.type;if(h==="none")return null;if(h==="plainline"){var m;return b.createElement("line",{strokeWidth:4,fill:"none",stroke:p,strokeDasharray:(m=t.payload)===null||m===void 0?void 0:m.strokeDasharray,x1:0,y1:l,x2:Hr,y2:l,className:"recharts-legend-icon"})}if(h==="line")return b.createElement("path",{strokeWidth:4,fill:"none",stroke:p,d:"M0,".concat(l,"h").concat(d,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(2*d,",").concat(l,`
            H`).concat(Hr,"M").concat(2*d,",").concat(l,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(d,",").concat(l),className:"recharts-legend-icon"});if(h==="rect")return b.createElement("path",{stroke:"none",fill:p,d:"M0,".concat(Hr/8,"h").concat(Hr,"v").concat(Hr*3/4,"h").concat(-Hr,"z"),className:"recharts-legend-icon"});if(b.isValidElement(t.legendIcon)){var g=B_({},t);return delete g.legendIcon,b.cloneElement(t.legendIcon,g)}return b.createElement(N0,{fill:p,cx:l,cy:l,size:Hr,sizeType:"diameter",type:h})}function Y_(e){var{payload:t,iconSize:r,layout:n,formatter:l,inactiveColor:s,iconType:d}=e,p={x:0,y:0,width:Hr,height:Hr},h={display:n==="horizontal"?"inline-block":"block",marginRight:10},m={display:"inline-block",verticalAlign:"middle",marginRight:4};return t.map((g,x)=>{var w=g.formatter||l,j=$e({"recharts-legend-item":!0,["legend-item-".concat(x)]:!0,inactive:g.inactive});if(g.type==="none")return null;var S=g.inactive?s:g.color,A=w?w(g.value,g,x):g.value;return b.createElement("li",ju({className:j,style:h,key:"legend-item-".concat(x)},bd(e,g,x)),b.createElement(w0,{width:r,height:r,viewBox:p,style:m,"aria-label":"".concat(A," legend icon")},b.createElement(H_,{data:g,iconType:d,inactiveColor:s})),b.createElement("span",{className:"recharts-legend-item-text",style:{color:S}},A))})}var G_=e=>{var t=Gt(e,U_),{payload:r,layout:n,align:l}=t;if(!r||!r.length)return null;var s={padding:0,margin:0,textAlign:n==="horizontal"?l:"left"};return b.createElement("ul",{className:"recharts-default-legend",style:s},b.createElement(Y_,ju({},t,{payload:r})))},Dh={},zh={},ww;function K_(){return ww||(ww=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n){const l=new Map;for(let s=0;s<r.length;s++){const d=r[s],p=n(d);l.has(p)||l.set(p,d)}return Array.from(l.values())}e.uniqBy=t})(zh)),zh}var Rh={},jw;function lO(){return jw||(jw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r}e.identity=t})(Rh)),Rh}var Lh={},Bh={},Ih={},Sw;function W_(){return Sw||(Sw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return Number.isSafeInteger(r)&&r>=0}e.isLength=t})(Ih)),Ih}var Aw;function T0(){return Aw||(Aw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=W_();function r(n){return n!=null&&typeof n!="function"&&t.isLength(n.length)}e.isArrayLike=r})(Bh)),Bh}var qh={},Ow;function V_(){return Ow||(Ow=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="object"&&r!==null}e.isObjectLike=t})(qh)),qh}var Ew;function X_(){return Ew||(Ew=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=T0(),r=V_();function n(l){return r.isObjectLike(l)&&t.isArrayLike(l)}e.isArrayLikeObject=n})(Lh)),Lh}var $h={},Uh={},kw;function F_(){return kw||(kw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=k0();function r(n){return function(l){return t.get(l,n)}}e.property=r})(Uh)),Uh}var Hh={},Yh={},Gh={},Kh={},Nw;function sO(){return Nw||(Nw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r!==null&&(typeof r=="object"||typeof r=="function")}e.isObject=t})(Kh)),Kh}var Wh={},Cw;function cO(){return Cw||(Cw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==null||typeof r!="object"&&typeof r!="function"}e.isPrimitive=t})(Wh)),Wh}var Vh={},Tw;function uO(){return Tw||(Tw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n){return r===n||Number.isNaN(r)&&Number.isNaN(n)}e.eq=t})(Vh)),Vh}var Mw;function Z_(){return Mw||(Mw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=sO(),r=cO(),n=uO();function l(g,x,w){return typeof w!="function"?l(g,x,()=>{}):s(g,x,function j(S,A,O,k,T,C){const _=w(S,A,O,k,T,C);return _!==void 0?!!_:s(S,A,j,C)},new Map)}function s(g,x,w,j){if(x===g)return!0;switch(typeof x){case"object":return d(g,x,w,j);case"function":return Object.keys(x).length>0?s(g,{...x},w,j):n.eq(g,x);default:return t.isObject(g)?typeof x=="string"?x==="":!0:n.eq(g,x)}}function d(g,x,w,j){if(x==null)return!0;if(Array.isArray(x))return h(g,x,w,j);if(x instanceof Map)return p(g,x,w,j);if(x instanceof Set)return m(g,x,w,j);const S=Object.keys(x);if(g==null)return S.length===0;if(S.length===0)return!0;if(j?.has(x))return j.get(x)===g;j?.set(x,g);try{for(let A=0;A<S.length;A++){const O=S[A];if(!r.isPrimitive(g)&&!(O in g)||x[O]===void 0&&g[O]!==void 0||x[O]===null&&g[O]!==null||!w(g[O],x[O],O,g,x,j))return!1}return!0}finally{j?.delete(x)}}function p(g,x,w,j){if(x.size===0)return!0;if(!(g instanceof Map))return!1;for(const[S,A]of x.entries()){const O=g.get(S);if(w(O,A,S,g,x,j)===!1)return!1}return!0}function h(g,x,w,j){if(x.length===0)return!0;if(!Array.isArray(g))return!1;const S=new Set;for(let A=0;A<x.length;A++){const O=x[A];let k=!1;for(let T=0;T<g.length;T++){if(S.has(T))continue;const C=g[T];let _=!1;if(w(C,O,A,g,x,j)&&(_=!0),_){S.add(T),k=!0;break}}if(!k)return!1}return!0}function m(g,x,w,j){return x.size===0?!0:g instanceof Set?h([...g],[...x],w,j):!1}e.isMatchWith=l,e.isSetMatch=m})(Gh)),Gh}var _w;function dO(){return _w||(_w=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Z_();function r(n,l){return t.isMatchWith(n,l,()=>{})}e.isMatch=r})(Yh)),Yh}var Xh={},Fh={},Zh={},Pw;function Q_(){return Pw||(Pw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return Object.getOwnPropertySymbols(r).filter(n=>Object.prototype.propertyIsEnumerable.call(r,n))}e.getSymbols=t})(Zh)),Zh}var Qh={},Dw;function fO(){return Dw||(Dw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(r)}e.getTag=t})(Qh)),Qh}var Jh={},zw;function pO(){return zw||(zw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t="[object RegExp]",r="[object String]",n="[object Number]",l="[object Boolean]",s="[object Arguments]",d="[object Symbol]",p="[object Date]",h="[object Map]",m="[object Set]",g="[object Array]",x="[object Function]",w="[object ArrayBuffer]",j="[object Object]",S="[object Error]",A="[object DataView]",O="[object Uint8Array]",k="[object Uint8ClampedArray]",T="[object Uint16Array]",C="[object Uint32Array]",_="[object BigUint64Array]",M="[object Int8Array]",R="[object Int16Array]",U="[object Int32Array]",F="[object BigInt64Array]",te="[object Float32Array]",ie="[object Float64Array]";e.argumentsTag=s,e.arrayBufferTag=w,e.arrayTag=g,e.bigInt64ArrayTag=F,e.bigUint64ArrayTag=_,e.booleanTag=l,e.dataViewTag=A,e.dateTag=p,e.errorTag=S,e.float32ArrayTag=te,e.float64ArrayTag=ie,e.functionTag=x,e.int16ArrayTag=R,e.int32ArrayTag=U,e.int8ArrayTag=M,e.mapTag=h,e.numberTag=n,e.objectTag=j,e.regexpTag=t,e.setTag=m,e.stringTag=r,e.symbolTag=d,e.uint16ArrayTag=T,e.uint32ArrayTag=C,e.uint8ArrayTag=O,e.uint8ClampedArrayTag=k})(Jh)),Jh}var em={},Rw;function J_(){return Rw||(Rw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}e.isTypedArray=t})(em)),em}var Lw;function hO(){return Lw||(Lw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Q_(),r=fO(),n=pO(),l=cO(),s=J_();function d(g,x){return p(g,void 0,g,new Map,x)}function p(g,x,w,j=new Map,S=void 0){const A=S?.(g,x,w,j);if(A!==void 0)return A;if(l.isPrimitive(g))return g;if(j.has(g))return j.get(g);if(Array.isArray(g)){const O=new Array(g.length);j.set(g,O);for(let k=0;k<g.length;k++)O[k]=p(g[k],k,w,j,S);return Object.hasOwn(g,"index")&&(O.index=g.index),Object.hasOwn(g,"input")&&(O.input=g.input),O}if(g instanceof Date)return new Date(g.getTime());if(g instanceof RegExp){const O=new RegExp(g.source,g.flags);return O.lastIndex=g.lastIndex,O}if(g instanceof Map){const O=new Map;j.set(g,O);for(const[k,T]of g)O.set(k,p(T,k,w,j,S));return O}if(g instanceof Set){const O=new Set;j.set(g,O);for(const k of g)O.add(p(k,void 0,w,j,S));return O}if(typeof Buffer<"u"&&Buffer.isBuffer(g))return g.subarray();if(s.isTypedArray(g)){const O=new(Object.getPrototypeOf(g)).constructor(g.length);j.set(g,O);for(let k=0;k<g.length;k++)O[k]=p(g[k],k,w,j,S);return O}if(g instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&g instanceof SharedArrayBuffer)return g.slice(0);if(g instanceof DataView){const O=new DataView(g.buffer.slice(0),g.byteOffset,g.byteLength);return j.set(g,O),h(O,g,w,j,S),O}if(typeof File<"u"&&g instanceof File){const O=new File([g],g.name,{type:g.type});return j.set(g,O),h(O,g,w,j,S),O}if(typeof Blob<"u"&&g instanceof Blob){const O=new Blob([g],{type:g.type});return j.set(g,O),h(O,g,w,j,S),O}if(g instanceof Error){const O=new g.constructor;return j.set(g,O),O.message=g.message,O.name=g.name,O.stack=g.stack,O.cause=g.cause,h(O,g,w,j,S),O}if(g instanceof Boolean){const O=new Boolean(g.valueOf());return j.set(g,O),h(O,g,w,j,S),O}if(g instanceof Number){const O=new Number(g.valueOf());return j.set(g,O),h(O,g,w,j,S),O}if(g instanceof String){const O=new String(g.valueOf());return j.set(g,O),h(O,g,w,j,S),O}if(typeof g=="object"&&m(g)){const O=Object.create(Object.getPrototypeOf(g));return j.set(g,O),h(O,g,w,j,S),O}return g}function h(g,x,w=g,j,S){const A=[...Object.keys(x),...t.getSymbols(x)];for(let O=0;O<A.length;O++){const k=A[O],T=Object.getOwnPropertyDescriptor(g,k);(T==null||T.writable)&&(g[k]=p(x[k],k,w,j,S))}}function m(g){switch(r.getTag(g)){case n.argumentsTag:case n.arrayTag:case n.arrayBufferTag:case n.dataViewTag:case n.booleanTag:case n.dateTag:case n.float32ArrayTag:case n.float64ArrayTag:case n.int8ArrayTag:case n.int16ArrayTag:case n.int32ArrayTag:case n.mapTag:case n.numberTag:case n.objectTag:case n.regexpTag:case n.setTag:case n.stringTag:case n.symbolTag:case n.uint8ArrayTag:case n.uint8ClampedArrayTag:case n.uint16ArrayTag:case n.uint32ArrayTag:return!0;default:return!1}}e.cloneDeepWith=d,e.cloneDeepWithImpl=p,e.copyProperties=h})(Fh)),Fh}var Bw;function eP(){return Bw||(Bw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=hO();function r(n){return t.cloneDeepWithImpl(n,void 0,n,new Map,void 0)}e.cloneDeep=r})(Xh)),Xh}var Iw;function tP(){return Iw||(Iw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=dO(),r=eP();function n(l){return l=r.cloneDeep(l),s=>t.isMatch(s,l)}e.matches=n})(Hh)),Hh}var tm={},rm={},nm={},qw;function rP(){return qw||(qw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=hO(),r=pO();function n(l,s){return t.cloneDeepWith(l,(d,p,h,m)=>{const g=s?.(d,p,h,m);if(g!==void 0)return g;if(typeof l=="object")switch(Object.prototype.toString.call(l)){case r.numberTag:case r.stringTag:case r.booleanTag:{const x=new l.constructor(l?.valueOf());return t.copyProperties(x,l),x}case r.argumentsTag:{const x={};return t.copyProperties(x,l),x.length=l.length,x[Symbol.iterator]=l[Symbol.iterator],x}default:return}})}e.cloneDeepWith=n})(nm)),nm}var $w;function nP(){return $w||($w=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=rP();function r(n){return t.cloneDeepWith(n)}e.cloneDeep=r})(rm)),rm}var am={},im={},Uw;function mO(){return Uw||(Uw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=/^(?:0|[1-9]\d*)$/;function r(n,l=Number.MAX_SAFE_INTEGER){switch(typeof n){case"number":return Number.isInteger(n)&&n>=0&&n<l;case"symbol":return!1;case"string":return t.test(n)}}e.isIndex=r})(im)),im}var om={},Hw;function aP(){return Hw||(Hw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=fO();function r(n){return n!==null&&typeof n=="object"&&t.getTag(n)==="[object Arguments]"}e.isArguments=r})(om)),om}var Yw;function iP(){return Yw||(Yw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=rO(),r=mO(),n=aP(),l=E0();function s(d,p){let h;if(Array.isArray(p)?h=p:typeof p=="string"&&t.isDeepKey(p)&&d?.[p]==null?h=l.toPath(p):h=[p],h.length===0)return!1;let m=d;for(let g=0;g<h.length;g++){const x=h[g];if((m==null||!Object.hasOwn(m,x))&&!((Array.isArray(m)||n.isArguments(m))&&r.isIndex(x)&&x<m.length))return!1;m=m[x]}return!0}e.has=s})(am)),am}var Gw;function oP(){return Gw||(Gw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=dO(),r=O0(),n=nP(),l=k0(),s=iP();function d(p,h){switch(typeof p){case"object":{Object.is(p?.valueOf(),-0)&&(p="-0");break}case"number":{p=r.toKey(p);break}}return h=n.cloneDeep(h),function(m){const g=l.get(m,p);return g===void 0?s.has(m,p):h===void 0?g===void 0:t.isMatch(g,h)}}e.matchesProperty=d})(tm)),tm}var Kw;function lP(){return Kw||(Kw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=lO(),r=F_(),n=tP(),l=oP();function s(d){if(d==null)return t.identity;switch(typeof d){case"function":return d;case"object":return Array.isArray(d)&&d.length===2?l.matchesProperty(d[0],d[1]):n.matches(d);case"string":case"symbol":case"number":return r.property(d)}}e.iteratee=s})($h)),$h}var Ww;function sP(){return Ww||(Ww=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=K_(),r=lO(),n=X_(),l=lP();function s(d,p=r.identity){return n.isArrayLikeObject(d)?t.uniqBy(Array.from(d),l.iteratee(p)):[]}e.uniqBy=s})(Dh)),Dh}var lm,Vw;function cP(){return Vw||(Vw=1,lm=sP().uniqBy),lm}var uP=cP();const Xw=Qn(uP);function gO(e,t,r){return t===!0?Xw(e,r):typeof t=="function"?Xw(e,t):e}var sm={exports:{}},cm={},um={exports:{}},dm={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fw;function dP(){if(Fw)return dm;Fw=1;var e=No();function t(x,w){return x===w&&(x!==0||1/x===1/w)||x!==x&&w!==w}var r=typeof Object.is=="function"?Object.is:t,n=e.useState,l=e.useEffect,s=e.useLayoutEffect,d=e.useDebugValue;function p(x,w){var j=w(),S=n({inst:{value:j,getSnapshot:w}}),A=S[0].inst,O=S[1];return s(function(){A.value=j,A.getSnapshot=w,h(A)&&O({inst:A})},[x,j,w]),l(function(){return h(A)&&O({inst:A}),x(function(){h(A)&&O({inst:A})})},[x]),d(j),j}function h(x){var w=x.getSnapshot;x=x.value;try{var j=w();return!r(x,j)}catch{return!0}}function m(x,w){return w()}var g=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:p;return dm.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:g,dm}var Zw;function fP(){return Zw||(Zw=1,um.exports=dP()),um.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qw;function pP(){if(Qw)return cm;Qw=1;var e=No(),t=fP();function r(m,g){return m===g&&(m!==0||1/m===1/g)||m!==m&&g!==g}var n=typeof Object.is=="function"?Object.is:r,l=t.useSyncExternalStore,s=e.useRef,d=e.useEffect,p=e.useMemo,h=e.useDebugValue;return cm.useSyncExternalStoreWithSelector=function(m,g,x,w,j){var S=s(null);if(S.current===null){var A={hasValue:!1,value:null};S.current=A}else A=S.current;S=p(function(){function k(R){if(!T){if(T=!0,C=R,R=w(R),j!==void 0&&A.hasValue){var U=A.value;if(j(U,R))return _=U}return _=R}if(U=_,n(C,R))return U;var F=w(R);return j!==void 0&&j(U,F)?(C=R,U):(C=R,_=F)}var T=!1,C,_,M=x===void 0?null:x;return[function(){return k(g())},M===null?void 0:function(){return k(M())}]},[g,x,w,j]);var O=l(m,S[0],S[1]);return d(function(){A.hasValue=!0,A.value=O},[O]),h(O),O},cm}var Jw;function hP(){return Jw||(Jw=1,sm.exports=pP()),sm.exports}var mP=hP(),M0=b.createContext(null),gP=e=>e,ot=()=>{var e=b.useContext(M0);return e?e.store.dispatch:gP},pu=()=>{},vP=()=>pu,xP=(e,t)=>e===t;function fe(e){var t=b.useContext(M0);return mP.useSyncExternalStoreWithSelector(t?t.subscription.addNestedSub:vP,t?t.store.getState:pu,t?t.store.getState:pu,t?e:pu,xP)}function yP(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function bP(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function wP(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var e2=e=>Array.isArray(e)?e:[e];function jP(e){const t=Array.isArray(e[0])?e[0]:e;return wP(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function SP(e,t){const r=[],{length:n}=e;for(let l=0;l<n;l++)r.push(e[l].apply(null,t));return r}var AP=class{constructor(e){this.value=e}deref(){return this.value}},OP=typeof WeakRef<"u"?WeakRef:AP,EP=0,t2=1;function Fc(){return{s:EP,v:void 0,o:null,p:null}}function vO(e,t={}){let r=Fc();const{resultEqualityCheck:n}=t;let l,s=0;function d(){let p=r;const{length:h}=arguments;for(let x=0,w=h;x<w;x++){const j=arguments[x];if(typeof j=="function"||typeof j=="object"&&j!==null){let S=p.o;S===null&&(p.o=S=new WeakMap);const A=S.get(j);A===void 0?(p=Fc(),S.set(j,p)):p=A}else{let S=p.p;S===null&&(p.p=S=new Map);const A=S.get(j);A===void 0?(p=Fc(),S.set(j,p)):p=A}}const m=p;let g;if(p.s===t2)g=p.v;else if(g=e.apply(null,arguments),s++,n){const x=l?.deref?.()??l;x!=null&&n(x,g)&&(g=x,s!==0&&s--),l=typeof g=="object"&&g!==null||typeof g=="function"?new OP(g):g}return m.s=t2,m.v=g,g}return d.clearCache=()=>{r=Fc(),d.resetResultsCount()},d.resultsCount=()=>s,d.resetResultsCount=()=>{s=0},d}function kP(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...l)=>{let s=0,d=0,p,h={},m=l.pop();typeof m=="object"&&(h=m,m=l.pop()),yP(m,`createSelector expects an output function after the inputs, but received: [${typeof m}]`);const g={...r,...h},{memoize:x,memoizeOptions:w=[],argsMemoize:j=vO,argsMemoizeOptions:S=[]}=g,A=e2(w),O=e2(S),k=jP(l),T=x(function(){return s++,m.apply(null,arguments)},...A),C=j(function(){d++;const M=SP(k,arguments);return p=T.apply(null,M),p},...O);return Object.assign(C,{resultFunc:m,memoizedResultFunc:T,dependencies:k,dependencyRecomputations:()=>d,resetDependencyRecomputations:()=>{d=0},lastResult:()=>p,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:x,argsMemoize:j})};return Object.assign(n,{withTypes:()=>n}),n}var Y=kP(vO),NP=Object.assign((e,t=Y)=>{bP(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(s=>e[s]);return t(n,(...s)=>s.reduce((d,p,h)=>(d[r[h]]=p,d),{}))},{withTypes:()=>NP}),fm={},pm={},hm={},r2;function CP(){return r2||(r2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return typeof n=="symbol"?1:n===null?2:n===void 0?3:n!==n?4:0}const r=(n,l,s)=>{if(n!==l){const d=t(n),p=t(l);if(d===p&&d===0){if(n<l)return s==="desc"?1:-1;if(n>l)return s==="desc"?-1:1}return s==="desc"?p-d:d-p}return 0};e.compareValues=r})(hm)),hm}var mm={},gm={},n2;function xO(){return n2||(n2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="symbol"||r instanceof Symbol}e.isSymbol=t})(gm)),gm}var a2;function TP(){return a2||(a2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=xO(),r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function l(s,d){return Array.isArray(s)?!1:typeof s=="number"||typeof s=="boolean"||s==null||t.isSymbol(s)?!0:typeof s=="string"&&(n.test(s)||!r.test(s))||d!=null&&Object.hasOwn(d,s)}e.isKey=l})(mm)),mm}var i2;function MP(){return i2||(i2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=CP(),r=TP(),n=E0();function l(s,d,p,h){if(s==null)return[];p=h?void 0:p,Array.isArray(s)||(s=Object.values(s)),Array.isArray(d)||(d=d==null?[null]:[d]),d.length===0&&(d=[null]),Array.isArray(p)||(p=p==null?[]:[p]),p=p.map(j=>String(j));const m=(j,S)=>{let A=j;for(let O=0;O<S.length&&A!=null;++O)A=A[S[O]];return A},g=(j,S)=>S==null||j==null?S:typeof j=="object"&&"key"in j?Object.hasOwn(S,j.key)?S[j.key]:m(S,j.path):typeof j=="function"?j(S):Array.isArray(j)?m(S,j):typeof S=="object"?S[j]:S,x=d.map(j=>(Array.isArray(j)&&j.length===1&&(j=j[0]),j==null||typeof j=="function"||Array.isArray(j)||r.isKey(j)?j:{key:j,path:n.toPath(j)}));return s.map(j=>({original:j,criteria:x.map(S=>g(S,j))})).slice().sort((j,S)=>{for(let A=0;A<x.length;A++){const O=t.compareValues(j.criteria[A],S.criteria[A],p[A]);if(O!==0)return O}return 0}).map(j=>j.original)}e.orderBy=l})(pm)),pm}var vm={},o2;function _P(){return o2||(o2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n=1){const l=[],s=Math.floor(n),d=(p,h)=>{for(let m=0;m<p.length;m++){const g=p[m];Array.isArray(g)&&h<s?d(g,h+1):l.push(g)}};return d(r,0),l}e.flatten=t})(vm)),vm}var xm={},l2;function yO(){return l2||(l2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=mO(),r=T0(),n=sO(),l=uO();function s(d,p,h){return n.isObject(h)&&(typeof p=="number"&&r.isArrayLike(h)&&t.isIndex(p)&&p<h.length||typeof p=="string"&&p in h)?l.eq(h[p],d):!1}e.isIterateeCall=s})(xm)),xm}var s2;function PP(){return s2||(s2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=MP(),r=_P(),n=yO();function l(s,...d){const p=d.length;return p>1&&n.isIterateeCall(s,d[0],d[1])?d=[]:p>2&&n.isIterateeCall(d[0],d[1],d[2])&&(d=[d[0]]),t.orderBy(s,r.flatten(d),["asc"])}e.sortBy=l})(fm)),fm}var ym,c2;function DP(){return c2||(c2=1,ym=PP().sortBy),ym}var zP=DP();const wd=Qn(zP);var bO=e=>e.legend.settings,RP=e=>e.legend.size,LP=e=>e.legend.payload,BP=Y([LP,bO],(e,t)=>{var{itemSorter:r}=t,n=e.flat(1);return r?wd(n,r):n});function IP(){return fe(BP)}var Zc=1;function wO(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],[t,r]=b.useState({height:0,left:0,top:0,width:0}),n=b.useCallback(l=>{if(l!=null){var s=l.getBoundingClientRect(),d={height:s.height,left:s.left,top:s.top,width:s.width};(Math.abs(d.height-t.height)>Zc||Math.abs(d.left-t.left)>Zc||Math.abs(d.top-t.top)>Zc||Math.abs(d.width-t.width)>Zc)&&r({height:d.height,left:d.left,top:d.top,width:d.width})}},[t.width,t.height,t.top,t.left,...e]);return[t,n]}function Ht(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var qP=typeof Symbol=="function"&&Symbol.observable||"@@observable",u2=qP,bm=()=>Math.random().toString(36).substring(7).split("").join("."),$P={INIT:`@@redux/INIT${bm()}`,REPLACE:`@@redux/REPLACE${bm()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${bm()}`},Su=$P;function _0(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function jO(e,t,r){if(typeof e!="function")throw new Error(Ht(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(Ht(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(Ht(1));return r(jO)(e,t)}let n=e,l=t,s=new Map,d=s,p=0,h=!1;function m(){d===s&&(d=new Map,s.forEach((O,k)=>{d.set(k,O)}))}function g(){if(h)throw new Error(Ht(3));return l}function x(O){if(typeof O!="function")throw new Error(Ht(4));if(h)throw new Error(Ht(5));let k=!0;m();const T=p++;return d.set(T,O),function(){if(k){if(h)throw new Error(Ht(6));k=!1,m(),d.delete(T),s=null}}}function w(O){if(!_0(O))throw new Error(Ht(7));if(typeof O.type>"u")throw new Error(Ht(8));if(typeof O.type!="string")throw new Error(Ht(17));if(h)throw new Error(Ht(9));try{h=!0,l=n(l,O)}finally{h=!1}return(s=d).forEach(T=>{T()}),O}function j(O){if(typeof O!="function")throw new Error(Ht(10));n=O,w({type:Su.REPLACE})}function S(){const O=x;return{subscribe(k){if(typeof k!="object"||k===null)throw new Error(Ht(11));function T(){const _=k;_.next&&_.next(g())}return T(),{unsubscribe:O(T)}},[u2](){return this}}}return w({type:Su.INIT}),{dispatch:w,subscribe:x,getState:g,replaceReducer:j,[u2]:S}}function UP(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:Su.INIT})>"u")throw new Error(Ht(12));if(typeof r(void 0,{type:Su.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ht(13))})}function SO(e){const t=Object.keys(e),r={};for(let s=0;s<t.length;s++){const d=t[s];typeof e[d]=="function"&&(r[d]=e[d])}const n=Object.keys(r);let l;try{UP(r)}catch(s){l=s}return function(d={},p){if(l)throw l;let h=!1;const m={};for(let g=0;g<n.length;g++){const x=n[g],w=r[x],j=d[x],S=w(j,p);if(typeof S>"u")throw p&&p.type,new Error(Ht(14));m[x]=S,h=h||S!==j}return h=h||n.length!==Object.keys(d).length,h?m:d}}function Au(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function HP(...e){return t=>(r,n)=>{const l=t(r,n);let s=()=>{throw new Error(Ht(15))};const d={getState:l.getState,dispatch:(h,...m)=>s(h,...m)},p=e.map(h=>h(d));return s=Au(...p)(l.dispatch),{...l,dispatch:s}}}function AO(e){return _0(e)&&"type"in e&&typeof e.type=="string"}var OO=Symbol.for("immer-nothing"),d2=Symbol.for("immer-draftable"),Tr=Symbol.for("immer-state");function en(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ts=Object.getPrototypeOf;function gi(e){return!!e&&!!e[Tr]}function Kn(e){return e?EO(e)||Array.isArray(e)||!!e[d2]||!!e.constructor?.[d2]||vs(e)||Sd(e):!1}var YP=Object.prototype.constructor.toString(),f2=new WeakMap;function EO(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(r===Object)return!0;if(typeof r!="function")return!1;let n=f2.get(r);return n===void 0&&(n=Function.toString.call(r),f2.set(r,n)),n===YP}function Ou(e,t,r=!0){jd(e)===0?(r?Reflect.ownKeys(e):Object.keys(e)).forEach(l=>{t(l,e[l],e)}):e.forEach((n,l)=>t(l,n,e))}function jd(e){const t=e[Tr];return t?t.type_:Array.isArray(e)?1:vs(e)?2:Sd(e)?3:0}function gg(e,t){return jd(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function kO(e,t,r){const n=jd(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function GP(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function vs(e){return e instanceof Map}function Sd(e){return e instanceof Set}function li(e){return e.copy_||e.base_}function vg(e,t){if(vs(e))return new Map(e);if(Sd(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=EO(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[Tr];let l=Reflect.ownKeys(n);for(let s=0;s<l.length;s++){const d=l[s],p=n[d];p.writable===!1&&(p.writable=!0,p.configurable=!0),(p.get||p.set)&&(n[d]={configurable:!0,writable:!0,enumerable:p.enumerable,value:e[d]})}return Object.create(ts(e),n)}else{const n=ts(e);if(n!==null&&r)return{...e};const l=Object.create(n);return Object.assign(l,e)}}function P0(e,t=!1){return Ad(e)||gi(e)||!Kn(e)||(jd(e)>1&&Object.defineProperties(e,{set:Qc,add:Qc,clear:Qc,delete:Qc}),Object.freeze(e),t&&Object.values(e).forEach(r=>P0(r,!0))),e}function KP(){en(2)}var Qc={value:KP};function Ad(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var WP={};function vi(e){const t=WP[e];return t||en(0,e),t}var rs;function NO(){return rs}function VP(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function p2(e,t){t&&(vi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function xg(e){yg(e),e.drafts_.forEach(XP),e.drafts_=null}function yg(e){e===rs&&(rs=e.parent_)}function h2(e){return rs=VP(rs,e)}function XP(e){const t=e[Tr];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function m2(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[Tr].modified_&&(xg(t),en(4)),Kn(e)&&(e=Eu(t,e),t.parent_||ku(t,e)),t.patches_&&vi("Patches").generateReplacementPatches_(r[Tr].base_,e,t.patches_,t.inversePatches_)):e=Eu(t,r,[]),xg(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==OO?e:void 0}function Eu(e,t,r){if(Ad(t))return t;const n=e.immer_.shouldUseStrictIteration(),l=t[Tr];if(!l)return Ou(t,(s,d)=>g2(e,l,t,s,d,r),n),t;if(l.scope_!==e)return t;if(!l.modified_)return ku(e,l.base_,!0),l.base_;if(!l.finalized_){l.finalized_=!0,l.scope_.unfinalizedDrafts_--;const s=l.copy_;let d=s,p=!1;l.type_===3&&(d=new Set(s),s.clear(),p=!0),Ou(d,(h,m)=>g2(e,l,s,h,m,r,p),n),ku(e,s,!1),r&&e.patches_&&vi("Patches").generatePatches_(l,r,e.patches_,e.inversePatches_)}return l.copy_}function g2(e,t,r,n,l,s,d){if(l==null||typeof l!="object"&&!d)return;const p=Ad(l);if(!(p&&!d)){if(gi(l)){const h=s&&t&&t.type_!==3&&!gg(t.assigned_,n)?s.concat(n):void 0,m=Eu(e,l,h);if(kO(r,n,m),gi(m))e.canAutoFreeze_=!1;else return}else d&&r.add(l);if(Kn(l)&&!p){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[n]===l&&p)return;Eu(e,l),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&(vs(r)?r.has(n):Object.prototype.propertyIsEnumerable.call(r,n))&&ku(e,l)}}}function ku(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&P0(t,r)}function FP(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:NO(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let l=n,s=D0;r&&(l=[n],s=ns);const{revoke:d,proxy:p}=Proxy.revocable(l,s);return n.draft_=p,n.revoke_=d,p}var D0={get(e,t){if(t===Tr)return e;const r=li(e);if(!gg(r,t))return ZP(e,r,t);const n=r[t];return e.finalized_||!Kn(n)?n:n===wm(e.base_,t)?(jm(e),e.copy_[t]=wg(n,e)):n},has(e,t){return t in li(e)},ownKeys(e){return Reflect.ownKeys(li(e))},set(e,t,r){const n=CO(li(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const l=wm(li(e),t),s=l?.[Tr];if(s&&s.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(GP(r,l)&&(r!==void 0||gg(e.base_,t)))return!0;jm(e),bg(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return wm(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,jm(e),bg(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=li(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){en(11)},getPrototypeOf(e){return ts(e.base_)},setPrototypeOf(){en(12)}},ns={};Ou(D0,(e,t)=>{ns[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});ns.deleteProperty=function(e,t){return ns.set.call(this,e,t,void 0)};ns.set=function(e,t,r){return D0.set.call(this,e[0],t,r,e[0])};function wm(e,t){const r=e[Tr];return(r?li(r):e)[t]}function ZP(e,t,r){const n=CO(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}function CO(e,t){if(!(t in e))return;let r=ts(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=ts(r)}}function bg(e){e.modified_||(e.modified_=!0,e.parent_&&bg(e.parent_))}function jm(e){e.copy_||(e.copy_=vg(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var QP=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const s=r;r=t;const d=this;return function(h=s,...m){return d.produce(h,g=>r.call(this,g,...m))}}typeof r!="function"&&en(6),n!==void 0&&typeof n!="function"&&en(7);let l;if(Kn(t)){const s=h2(this),d=wg(t,void 0);let p=!0;try{l=r(d),p=!1}finally{p?xg(s):yg(s)}return p2(s,n),m2(l,s)}else if(!t||typeof t!="object"){if(l=r(t),l===void 0&&(l=t),l===OO&&(l=void 0),this.autoFreeze_&&P0(l,!0),n){const s=[],d=[];vi("Patches").generateReplacementPatches_(t,l,s,d),n(s,d)}return l}else en(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(d,...p)=>this.produceWithPatches(d,h=>t(h,...p));let n,l;return[this.produce(t,r,(d,p)=>{n=d,l=p}),n,l]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Kn(e)||en(8),gi(e)&&(e=Un(e));const t=h2(this),r=wg(e,void 0);return r[Tr].isManual_=!0,yg(t),r}finishDraft(e,t){const r=e&&e[Tr];(!r||!r.isManual_)&&en(9);const{scope_:n}=r;return p2(n,t),m2(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const l=t[r];if(l.path.length===0&&l.op==="replace"){e=l.value;break}}r>-1&&(t=t.slice(r+1));const n=vi("Patches").applyPatches_;return gi(e)?n(e,t):this.produce(e,l=>n(l,t))}};function wg(e,t){const r=vs(e)?vi("MapSet").proxyMap_(e,t):Sd(e)?vi("MapSet").proxySet_(e,t):FP(e,t);return(t?t.scope_:NO()).drafts_.push(r),r}function Un(e){return gi(e)||en(10,e),TO(e)}function TO(e){if(!Kn(e)||Ad(e))return e;const t=e[Tr];let r,n=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=vg(e,t.scope_.immer_.useStrictShallowCopy_),n=t.scope_.immer_.shouldUseStrictIteration()}else r=vg(e,!0);return Ou(r,(l,s)=>{kO(r,l,TO(s))},n),t&&(t.finalized_=!1),r}var jg=new QP,MO=jg.produce,JP=jg.setUseStrictIteration.bind(jg);function _O(e){return({dispatch:r,getState:n})=>l=>s=>typeof s=="function"?s(r,n,e):l(s)}var eD=_O(),tD=_O,rD=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Au:Au.apply(null,arguments)};function Kr(e,t){function r(...n){if(t){let l=t(...n);if(!l)throw new Error(Cr(0));return{type:e,payload:l.payload,..."meta"in l&&{meta:l.meta},..."error"in l&&{error:l.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>AO(n)&&n.type===e,r}var PO=class Xl extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Xl.prototype)}static get[Symbol.species](){return Xl}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Xl(...t[0].concat(this)):new Xl(...t.concat(this))}};function v2(e){return Kn(e)?MO(e,()=>{}):e}function Jc(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function nD(e){return typeof e=="boolean"}var aD=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:l=!0,actionCreatorCheck:s=!0}=t??{};let d=new PO;return r&&(nD(r)?d.push(eD):d.push(tD(r.extraArgument))),d},DO="RTK_autoBatch",At=()=>e=>({payload:e,meta:{[DO]:!0}}),x2=e=>t=>{setTimeout(t,e)},zO=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let l=!0,s=!1,d=!1;const p=new Set,h=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:x2(10):e.type==="callback"?e.queueNotification:x2(e.timeout),m=()=>{d=!1,s&&(s=!1,p.forEach(g=>g()))};return Object.assign({},n,{subscribe(g){const x=()=>l&&g(),w=n.subscribe(x);return p.add(g),()=>{w(),p.delete(g)}},dispatch(g){try{return l=!g?.meta?.[DO],s=!l,s&&(d||(d=!0,h(m))),n.dispatch(g)}finally{l=!0}}})},iD=e=>function(r){const{autoBatch:n=!0}=r??{};let l=new PO(e);return n&&l.push(zO(typeof n=="object"?n:void 0)),l};function oD(e){const t=aD(),{reducer:r=void 0,middleware:n,devTools:l=!0,preloadedState:s=void 0,enhancers:d=void 0}=e||{};let p;if(typeof r=="function")p=r;else if(_0(r))p=SO(r);else throw new Error(Cr(1));let h;typeof n=="function"?h=n(t):h=t();let m=Au;l&&(m=rD({trace:!1,...typeof l=="object"&&l}));const g=HP(...h),x=iD(g);let w=typeof d=="function"?d(x):x();const j=m(...w);return jO(p,s,j)}function RO(e){const t={},r=[];let n;const l={addCase(s,d){const p=typeof s=="string"?s:s.type;if(!p)throw new Error(Cr(28));if(p in t)throw new Error(Cr(29));return t[p]=d,l},addAsyncThunk(s,d){return d.pending&&(t[s.pending.type]=d.pending),d.rejected&&(t[s.rejected.type]=d.rejected),d.fulfilled&&(t[s.fulfilled.type]=d.fulfilled),d.settled&&r.push({matcher:s.settled,reducer:d.settled}),l},addMatcher(s,d){return r.push({matcher:s,reducer:d}),l},addDefaultCase(s){return n=s,l}};return e(l),[t,r,n]}JP(!1);function lD(e){return typeof e=="function"}function sD(e,t){let[r,n,l]=RO(t),s;if(lD(e))s=()=>v2(e());else{const p=v2(e);s=()=>p}function d(p=s(),h){let m=[r[h.type],...n.filter(({matcher:g})=>g(h)).map(({reducer:g})=>g)];return m.filter(g=>!!g).length===0&&(m=[l]),m.reduce((g,x)=>{if(x)if(gi(g)){const j=x(g,h);return j===void 0?g:j}else{if(Kn(g))return MO(g,w=>x(w,h));{const w=x(g,h);if(w===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return w}}return g},p)}return d.getInitialState=s,d}var cD="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",uD=(e=21)=>{let t="",r=e;for(;r--;)t+=cD[Math.random()*64|0];return t},dD=Symbol.for("rtk-slice-createasyncthunk");function fD(e,t){return`${e}/${t}`}function pD({creators:e}={}){const t=e?.asyncThunk?.[dD];return function(n){const{name:l,reducerPath:s=l}=n;if(!l)throw new Error(Cr(11));const d=(typeof n.reducers=="function"?n.reducers(mD()):n.reducers)||{},p=Object.keys(d),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},m={addCase(C,_){const M=typeof C=="string"?C:C.type;if(!M)throw new Error(Cr(12));if(M in h.sliceCaseReducersByType)throw new Error(Cr(13));return h.sliceCaseReducersByType[M]=_,m},addMatcher(C,_){return h.sliceMatchers.push({matcher:C,reducer:_}),m},exposeAction(C,_){return h.actionCreators[C]=_,m},exposeCaseReducer(C,_){return h.sliceCaseReducersByName[C]=_,m}};p.forEach(C=>{const _=d[C],M={reducerName:C,type:fD(l,C),createNotation:typeof n.reducers=="function"};vD(_)?yD(M,_,m,t):gD(M,_,m)});function g(){const[C={},_=[],M=void 0]=typeof n.extraReducers=="function"?RO(n.extraReducers):[n.extraReducers],R={...C,...h.sliceCaseReducersByType};return sD(n.initialState,U=>{for(let F in R)U.addCase(F,R[F]);for(let F of h.sliceMatchers)U.addMatcher(F.matcher,F.reducer);for(let F of _)U.addMatcher(F.matcher,F.reducer);M&&U.addDefaultCase(M)})}const x=C=>C,w=new Map,j=new WeakMap;let S;function A(C,_){return S||(S=g()),S(C,_)}function O(){return S||(S=g()),S.getInitialState()}function k(C,_=!1){function M(U){let F=U[C];return typeof F>"u"&&_&&(F=Jc(j,M,O)),F}function R(U=x){const F=Jc(w,_,()=>new WeakMap);return Jc(F,U,()=>{const te={};for(const[ie,Z]of Object.entries(n.selectors??{}))te[ie]=hD(Z,U,()=>Jc(j,U,O),_);return te})}return{reducerPath:C,getSelectors:R,get selectors(){return R(M)},selectSlice:M}}const T={name:l,reducer:A,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:O,...k(s),injectInto(C,{reducerPath:_,...M}={}){const R=_??s;return C.inject({reducerPath:R,reducer:A},M),{...T,...k(R,!0)}}};return T}}function hD(e,t,r,n){function l(s,...d){let p=t(s);return typeof p>"u"&&n&&(p=r()),e(p,...d)}return l.unwrapped=e,l}var mr=pD();function mD(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function gD({type:e,reducerName:t,createNotation:r},n,l){let s,d;if("reducer"in n){if(r&&!xD(n))throw new Error(Cr(17));s=n.reducer,d=n.prepare}else s=n;l.addCase(e,s).exposeCaseReducer(t,s).exposeAction(t,d?Kr(e,d):Kr(e))}function vD(e){return e._reducerDefinitionType==="asyncThunk"}function xD(e){return e._reducerDefinitionType==="reducerWithPrepare"}function yD({type:e,reducerName:t},r,n,l){if(!l)throw new Error(Cr(18));const{payloadCreator:s,fulfilled:d,pending:p,rejected:h,settled:m,options:g}=r,x=l(e,s,g);n.exposeAction(t,x),d&&n.addCase(x.fulfilled,d),p&&n.addCase(x.pending,p),h&&n.addCase(x.rejected,h),m&&n.addMatcher(x.settled,m),n.exposeCaseReducer(t,{fulfilled:d||eu,pending:p||eu,rejected:h||eu,settled:m||eu})}function eu(){}var bD="task",LO="listener",BO="completed",z0="cancelled",wD=`task-${z0}`,jD=`task-${BO}`,Sg=`${LO}-${z0}`,SD=`${LO}-${BO}`,Od=class{constructor(e){this.code=e,this.message=`${bD} ${z0} (reason: ${e})`}name="TaskAbortError";message},R0=(e,t)=>{if(typeof e!="function")throw new TypeError(Cr(32))},Nu=()=>{},IO=(e,t=Nu)=>(e.catch(t),e),qO=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),fi=(e,t)=>{const r=e.signal;r.aborted||("reason"in r||Object.defineProperty(r,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t))},pi=e=>{if(e.aborted){const{reason:t}=e;throw new Od(t)}};function $O(e,t){let r=Nu;return new Promise((n,l)=>{const s=()=>l(new Od(e.reason));if(e.aborted){s();return}r=qO(e,s),t.finally(()=>r()).then(n,l)}).finally(()=>{r=Nu})}var AD=async(e,t)=>{try{return await Promise.resolve(),{status:"ok",value:await e()}}catch(r){return{status:r instanceof Od?"cancelled":"rejected",error:r}}finally{t?.()}},Cu=e=>t=>IO($O(e,t).then(r=>(pi(e),r))),UO=e=>{const t=Cu(e);return r=>t(new Promise(n=>setTimeout(n,r)))},{assign:xo}=Object,y2={},Ed="listenerMiddleware",OD=(e,t)=>{const r=n=>qO(e,()=>fi(n,e.reason));return(n,l)=>{R0(n);const s=new AbortController;r(s);const d=AD(async()=>{pi(e),pi(s.signal);const p=await n({pause:Cu(s.signal),delay:UO(s.signal),signal:s.signal});return pi(s.signal),p},()=>fi(s,jD));return l?.autoJoin&&t.push(d.catch(Nu)),{result:Cu(e)(d),cancel(){fi(s,wD)}}}},ED=(e,t)=>{const r=async(n,l)=>{pi(t);let s=()=>{};const p=[new Promise((h,m)=>{let g=e({predicate:n,effect:(x,w)=>{w.unsubscribe(),h([x,w.getState(),w.getOriginalState()])}});s=()=>{g(),m()}})];l!=null&&p.push(new Promise(h=>setTimeout(h,l,null)));try{const h=await $O(t,Promise.race(p));return pi(t),h}finally{s()}};return(n,l)=>IO(r(n,l))},HO=e=>{let{type:t,actionCreator:r,matcher:n,predicate:l,effect:s}=e;if(t)l=Kr(t).match;else if(r)t=r.type,l=r.match;else if(n)l=n;else if(!l)throw new Error(Cr(21));return R0(s),{predicate:l,type:t,effect:s}},YO=xo(e=>{const{type:t,predicate:r,effect:n}=HO(e);return{id:uD(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(Cr(22))}}},{withTypes:()=>YO}),b2=(e,t)=>{const{type:r,effect:n,predicate:l}=HO(t);return Array.from(e.values()).find(s=>(typeof r=="string"?s.type===r:s.predicate===l)&&s.effect===n)},Ag=e=>{e.pending.forEach(t=>{fi(t,Sg)})},kD=(e,t)=>()=>{for(const r of t.keys())Ag(r);e.clear()},w2=(e,t,r)=>{try{e(t,r)}catch(n){setTimeout(()=>{throw n},0)}},GO=xo(Kr(`${Ed}/add`),{withTypes:()=>GO}),ND=Kr(`${Ed}/removeAll`),KO=xo(Kr(`${Ed}/remove`),{withTypes:()=>KO}),CD=(...e)=>{console.error(`${Ed}/error`,...e)},xs=(e={})=>{const t=new Map,r=new Map,n=j=>{const S=r.get(j)??0;r.set(j,S+1)},l=j=>{const S=r.get(j)??1;S===1?r.delete(j):r.set(j,S-1)},{extra:s,onError:d=CD}=e;R0(d);const p=j=>(j.unsubscribe=()=>t.delete(j.id),t.set(j.id,j),S=>{j.unsubscribe(),S?.cancelActive&&Ag(j)}),h=j=>{const S=b2(t,j)??YO(j);return p(S)};xo(h,{withTypes:()=>h});const m=j=>{const S=b2(t,j);return S&&(S.unsubscribe(),j.cancelActive&&Ag(S)),!!S};xo(m,{withTypes:()=>m});const g=async(j,S,A,O)=>{const k=new AbortController,T=ED(h,k.signal),C=[];try{j.pending.add(k),n(j),await Promise.resolve(j.effect(S,xo({},A,{getOriginalState:O,condition:(_,M)=>T(_,M).then(Boolean),take:T,delay:UO(k.signal),pause:Cu(k.signal),extra:s,signal:k.signal,fork:OD(k.signal,C),unsubscribe:j.unsubscribe,subscribe:()=>{t.set(j.id,j)},cancelActiveListeners:()=>{j.pending.forEach((_,M,R)=>{_!==k&&(fi(_,Sg),R.delete(_))})},cancel:()=>{fi(k,Sg),j.pending.delete(k)},throwIfCancelled:()=>{pi(k.signal)}})))}catch(_){_ instanceof Od||w2(d,_,{raisedBy:"effect"})}finally{await Promise.all(C),fi(k,SD),l(j),j.pending.delete(k)}},x=kD(t,r);return{middleware:j=>S=>A=>{if(!AO(A))return S(A);if(GO.match(A))return h(A.payload);if(ND.match(A)){x();return}if(KO.match(A))return m(A.payload);let O=j.getState();const k=()=>{if(O===y2)throw new Error(Cr(23));return O};let T;try{if(T=S(A),t.size>0){const C=j.getState(),_=Array.from(t.values());for(const M of _){let R=!1;try{R=M.predicate(A,C,O)}catch(U){R=!1,w2(d,U,{raisedBy:"predicate"})}R&&g(M,A,j,k)}}}finally{O=y2}return T},startListening:h,stopListening:m,clearListeners:x}};function Cr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var TD={layoutType:"horizontal",width:0,height:0,margin:{top:5,right:5,bottom:5,left:5},scale:1},WO=mr({name:"chartLayout",initialState:TD,reducers:{setLayout(e,t){e.layoutType=t.payload},setChartSize(e,t){e.width=t.payload.width,e.height=t.payload.height},setMargin(e,t){var r,n,l,s;e.margin.top=(r=t.payload.top)!==null&&r!==void 0?r:0,e.margin.right=(n=t.payload.right)!==null&&n!==void 0?n:0,e.margin.bottom=(l=t.payload.bottom)!==null&&l!==void 0?l:0,e.margin.left=(s=t.payload.left)!==null&&s!==void 0?s:0},setScale(e,t){e.scale=t.payload}}}),{setMargin:MD,setLayout:_D,setChartSize:PD,setScale:DD}=WO.actions,zD=WO.reducer;function VO(e,t,r){return Array.isArray(e)&&e&&t+r!==0?e.slice(t,r+1):e}function j2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function go(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j2(Object(r),!0).forEach(function(n){RD(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function RD(e,t,r){return(t=LD(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function LD(e){var t=BD(e,"string");return typeof t=="symbol"?t:t+""}function BD(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Lt(e,t,r){return nt(e)||nt(t)?r:vn(t)?wo(e,t,r):typeof t=="function"?t(e):r}var ID=(e,t,r)=>{if(t&&r){var{width:n,height:l}=r,{align:s,verticalAlign:d,layout:p}=t;if((p==="vertical"||p==="horizontal"&&d==="middle")&&s!=="center"&&de(e[s]))return go(go({},e),{},{[s]:e[s]+(n||0)});if((p==="horizontal"||p==="vertical"&&s==="center")&&d!=="middle"&&de(e[d]))return go(go({},e),{},{[d]:e[d]+(l||0)})}return e},za=(e,t)=>e==="horizontal"&&t==="xAxis"||e==="vertical"&&t==="yAxis"||e==="centric"&&t==="angleAxis"||e==="radial"&&t==="radiusAxis",XO=(e,t,r,n)=>{if(n)return e.map(p=>p.coordinate);var l,s,d=e.map(p=>(p.coordinate===t&&(l=!0),p.coordinate===r&&(s=!0),p.coordinate));return l||d.push(t),s||d.push(r),d},FO=(e,t,r)=>{if(!e)return null;var{duplicateDomain:n,type:l,range:s,scale:d,realScaleType:p,isCategorical:h,categoricalDomain:m,tickCount:g,ticks:x,niceTicks:w,axisType:j}=e;if(!d)return null;var S=p==="scaleBand"&&d.bandwidth?d.bandwidth()/2:2,A=l==="category"&&d.bandwidth?d.bandwidth()/S:0;if(A=j==="angleAxis"&&s&&s.length>=2?pr(s[0]-s[1])*2*A:A,x||w){var O=(x||w||[]).map((k,T)=>{var C=n?n.indexOf(k):k;return{coordinate:d(C)+A,value:k,offset:A,index:T}});return O.filter(k=>!an(k.coordinate))}return h&&m?m.map((k,T)=>({coordinate:d(k)+A,value:k,index:T,offset:A})):d.ticks&&g!=null?d.ticks(g).map((k,T)=>({coordinate:d(k)+A,value:k,offset:A,index:T})):d.domain().map((k,T)=>({coordinate:d(k)+A,value:n?n[k]:k,index:T,offset:A}))},S2=1e-4,qD=e=>{var t=e.domain();if(!(!t||t.length<=2)){var r=t.length,n=e.range(),l=Math.min(n[0],n[1])-S2,s=Math.max(n[0],n[1])+S2,d=e(t[0]),p=e(t[r-1]);(d<l||d>s||p<l||p>s)&&e.domain([t[0],t[r-1]])}},$D=(e,t)=>{if(!t||t.length!==2||!de(t[0])||!de(t[1]))return e;var r=Math.min(t[0],t[1]),n=Math.max(t[0],t[1]),l=[e[0],e[1]];return(!de(e[0])||e[0]<r)&&(l[0]=r),(!de(e[1])||e[1]>n)&&(l[1]=n),l[0]>n&&(l[0]=n),l[1]<r&&(l[1]=r),l},UD=e=>{var t=e.length;if(!(t<=0))for(var r=0,n=e[0].length;r<n;++r)for(var l=0,s=0,d=0;d<t;++d){var p=an(e[d][r][1])?e[d][r][0]:e[d][r][1];p>=0?(e[d][r][0]=l,e[d][r][1]=l+p,l=e[d][r][1]):(e[d][r][0]=s,e[d][r][1]=s+p,s=e[d][r][1])}},HD=e=>{var t=e.length;if(!(t<=0))for(var r=0,n=e[0].length;r<n;++r)for(var l=0,s=0;s<t;++s){var d=an(e[s][r][1])?e[s][r][0]:e[s][r][1];d>=0?(e[s][r][0]=l,e[s][r][1]=l+d,l=e[s][r][1]):(e[s][r][0]=0,e[s][r][1]=0)}},YD={sign:UD,expand:h_,none:bo,silhouette:m_,wiggle:g_,positive:HD},GD=(e,t,r)=>{var n=YD[r],l=p_().keys(t).value((s,d)=>Number(Lt(s,d,0))).order(hg).offset(n);return l(e)};function KD(e){return e==null?void 0:String(e)}function A2(e){var{axis:t,ticks:r,bandSize:n,entry:l,index:s,dataKey:d}=e;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!nt(l[t.dataKey])){var p=aO(r,"value",l[t.dataKey]);if(p)return p.coordinate+n/2}return r[s]?r[s].coordinate+n/2:null}var h=Lt(l,nt(d)?t.dataKey:d);return nt(h)?null:t.scale(h)}var O2=e=>{var{axis:t,ticks:r,offset:n,bandSize:l,entry:s,index:d}=e;if(t.type==="category")return r[d]?r[d].coordinate+n:null;var p=Lt(s,t.dataKey,t.scale.domain()[d]);return nt(p)?null:t.scale(p)-l/2+n},WD=e=>{var{numericAxis:t}=e,r=t.scale.domain();if(t.type==="number"){var n=Math.min(r[0],r[1]),l=Math.max(r[0],r[1]);return n<=0&&l>=0?0:l<0?l:n}return r[0]},VD=e=>{var t=e.flat(2).filter(de);return[Math.min(...t),Math.max(...t)]},XD=e=>[e[0]===1/0?0:e[0],e[1]===-1/0?0:e[1]],FD=(e,t,r)=>{if(e!=null)return XD(Object.keys(e).reduce((n,l)=>{var s=e[l],{stackedData:d}=s,p=d.reduce((h,m)=>{var g=VO(m,t,r),x=VD(g);return[Math.min(h[0],x[0]),Math.max(h[1],x[1])]},[1/0,-1/0]);return[Math.min(p[0],n[0]),Math.max(p[1],n[1])]},[1/0,-1/0]))},E2=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,k2=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,jo=(e,t,r)=>{if(e&&e.scale&&e.scale.bandwidth){var n=e.scale.bandwidth();if(!r||n>0)return n}if(e&&t&&t.length>=2){for(var l=wd(t,g=>g.coordinate),s=1/0,d=1,p=l.length;d<p;d++){var h=l[d],m=l[d-1];s=Math.min((h.coordinate||0)-(m.coordinate||0),s)}return s===1/0?0:s}return r?void 0:0};function N2(e){var{tooltipEntrySettings:t,dataKey:r,payload:n,value:l,name:s}=e;return go(go({},t),{},{dataKey:r,payload:n,value:l,name:s})}function kd(e,t){if(e)return String(e);if(typeof t=="string")return t}var ZD=(e,t)=>{if(t==="horizontal")return e.chartX;if(t==="vertical")return e.chartY},QD=(e,t)=>t==="centric"?e.angle:e.radius,Jn=e=>e.layout.width,ea=e=>e.layout.height,JD=e=>e.layout.scale,ZO=e=>e.layout.margin,Nd=Y(e=>e.cartesianAxis.xAxis,e=>Object.values(e)),Cd=Y(e=>e.cartesianAxis.yAxis,e=>Object.values(e)),ez="data-recharts-item-index",tz="data-recharts-item-data-key",ys=60;function C2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function tu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?C2(Object(r),!0).forEach(function(n){rz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function rz(e,t,r){return(t=nz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function nz(e){var t=az(e,"string");return typeof t=="symbol"?t:t+""}function az(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var iz=e=>e.brush.height;function oz(e){var t=Cd(e);return t.reduce((r,n)=>{if(n.orientation==="left"&&!n.mirror&&!n.hide){var l=typeof n.width=="number"?n.width:ys;return r+l}return r},0)}function lz(e){var t=Cd(e);return t.reduce((r,n)=>{if(n.orientation==="right"&&!n.mirror&&!n.hide){var l=typeof n.width=="number"?n.width:ys;return r+l}return r},0)}function sz(e){var t=Nd(e);return t.reduce((r,n)=>n.orientation==="top"&&!n.mirror&&!n.hide?r+n.height:r,0)}function cz(e){var t=Nd(e);return t.reduce((r,n)=>n.orientation==="bottom"&&!n.mirror&&!n.hide?r+n.height:r,0)}var Bt=Y([Jn,ea,ZO,iz,oz,lz,sz,cz,bO,RP],(e,t,r,n,l,s,d,p,h,m)=>{var g={left:(r.left||0)+l,right:(r.right||0)+s},x={top:(r.top||0)+d,bottom:(r.bottom||0)+p},w=tu(tu({},x),g),j=w.bottom;w.bottom+=n,w=ID(w,h,m);var S=e-w.left-w.right,A=t-w.top-w.bottom;return tu(tu({brushBottom:j},w),{},{width:Math.max(S,0),height:Math.max(A,0)})}),uz=Y(Bt,e=>({x:e.left,y:e.top,width:e.width,height:e.height})),L0=Y(Jn,ea,(e,t)=>({x:0,y:0,width:e,height:t})),dz=b.createContext(null),Zt=()=>b.useContext(dz)!=null,Td=e=>e.brush,Md=Y([Td,Bt,ZO],(e,t,r)=>({height:e.height,x:de(e.x)?e.x:t.left,y:de(e.y)?e.y:t.top+t.height+t.brushBottom-(r?.bottom||0),width:de(e.width)?e.width:t.width})),Sm={},Am={},Om={},T2;function fz(){return T2||(T2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n,{signal:l,edges:s}={}){let d,p=null;const h=s!=null&&s.includes("leading"),m=s==null||s.includes("trailing"),g=()=>{p!==null&&(r.apply(d,p),d=void 0,p=null)},x=()=>{m&&g(),A()};let w=null;const j=()=>{w!=null&&clearTimeout(w),w=setTimeout(()=>{w=null,x()},n)},S=()=>{w!==null&&(clearTimeout(w),w=null)},A=()=>{S(),d=void 0,p=null},O=()=>{g()},k=function(...T){if(l?.aborted)return;d=this,p=T;const C=w==null;j(),h&&C&&g()};return k.schedule=j,k.cancel=A,k.flush=O,l?.addEventListener("abort",A,{once:!0}),k}e.debounce=t})(Om)),Om}var M2;function pz(){return M2||(M2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=fz();function r(n,l=0,s={}){typeof s!="object"&&(s={});const{leading:d=!1,trailing:p=!0,maxWait:h}=s,m=Array(2);d&&(m[0]="leading"),p&&(m[1]="trailing");let g,x=null;const w=t.debounce(function(...A){g=n.apply(this,A),x=null},l,{edges:m}),j=function(...A){return h!=null&&(x===null&&(x=Date.now()),Date.now()-x>=h)?(g=n.apply(this,A),x=Date.now(),w.cancel(),w.schedule(),g):(w.apply(this,A),g)},S=()=>(w.flush(),g);return j.cancel=w.cancel,j.flush=S,j}e.debounce=r})(Am)),Am}var _2;function hz(){return _2||(_2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=pz();function r(n,l=0,s={}){const{leading:d=!0,trailing:p=!0}=s;return t.debounce(n,l,{leading:d,maxWait:l,trailing:p})}e.throttle=r})(Sm)),Sm}var Em,P2;function mz(){return P2||(P2=1,Em=hz().throttle),Em}var gz=mz();const vz=Qn(gz);var Tu=function(t,r){for(var n=arguments.length,l=new Array(n>2?n-2:0),s=2;s<n;s++)l[s-2]=arguments[s]},QO=(e,t,r)=>{var{width:n="100%",height:l="100%",aspect:s,maxHeight:d}=r,p=Gn(n)?e:Number(n),h=Gn(l)?t:Number(l);return s&&s>0&&(p?h=p/s:h&&(p=h*s),d&&h!=null&&h>d&&(h=d)),{calculatedWidth:p,calculatedHeight:h}},xz={width:0,height:0,overflow:"visible"},yz={width:0,overflowX:"visible"},bz={height:0,overflowY:"visible"},wz={},jz=e=>{var{width:t,height:r}=e,n=Gn(t),l=Gn(r);return n&&l?xz:n?yz:l?bz:wz};function Sz(e){var{width:t,height:r,aspect:n}=e,l=t,s=r;return l===void 0&&s===void 0?(l="100%",s="100%"):l===void 0?l=n&&n>0?void 0:"100%":s===void 0&&(s=n&&n>0?void 0:"100%"),{width:l,height:s}}function mt(e){return Number.isFinite(e)}function xn(e){return typeof e=="number"&&e>0&&Number.isFinite(e)}function Og(){return Og=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Og.apply(null,arguments)}function D2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function z2(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?D2(Object(r),!0).forEach(function(n){Az(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Az(e,t,r){return(t=Oz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Oz(e){var t=Ez(e,"string");return typeof t=="symbol"?t:t+""}function Ez(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var JO=b.createContext({width:-1,height:-1});function kz(e){return xn(e.width)&&xn(e.height)}function eE(e){var{children:t,width:r,height:n}=e,l=b.useMemo(()=>({width:r,height:n}),[r,n]);return kz(l)?b.createElement(JO.Provider,{value:l},t):null}var B0=()=>b.useContext(JO),Nz=b.forwardRef((e,t)=>{var{aspect:r,initialDimension:n={width:-1,height:-1},width:l,height:s,minWidth:d=0,minHeight:p,maxHeight:h,children:m,debounce:g=0,id:x,className:w,onResize:j,style:S={}}=e,A=b.useRef(null),O=b.useRef();O.current=j,b.useImperativeHandle(t,()=>A.current);var[k,T]=b.useState({containerWidth:n.width,containerHeight:n.height}),C=b.useCallback((F,te)=>{T(ie=>{var Z=Math.round(F),J=Math.round(te);return ie.containerWidth===Z&&ie.containerHeight===J?ie:{containerWidth:Z,containerHeight:J}})},[]);b.useEffect(()=>{if(A.current==null||typeof ResizeObserver>"u")return _o;var F=J=>{var he,{width:ge,height:ye}=J[0].contentRect;C(ge,ye),(he=O.current)===null||he===void 0||he.call(O,ge,ye)};g>0&&(F=vz(F,g,{trailing:!0,leading:!1}));var te=new ResizeObserver(F),{width:ie,height:Z}=A.current.getBoundingClientRect();return C(ie,Z),te.observe(A.current),()=>{te.disconnect()}},[C,g]);var{containerWidth:_,containerHeight:M}=k;Tu(!r||r>0,"The aspect(%s) must be greater than zero.",r);var{calculatedWidth:R,calculatedHeight:U}=QO(_,M,{width:l,height:s,aspect:r,maxHeight:h});return Tu(R!=null&&R>0||U!=null&&U>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,R,U,l,s,d,p,r),b.createElement("div",{id:x?"".concat(x):void 0,className:$e("recharts-responsive-container",w),style:z2(z2({},S),{},{width:l,height:s,minWidth:d,minHeight:p,maxHeight:h}),ref:A},b.createElement("div",{style:jz({width:l,height:s})},b.createElement(eE,{width:R,height:U},m)))}),Eg=b.forwardRef((e,t)=>{var r=B0();if(xn(r.width)&&xn(r.height))return e.children;var{width:n,height:l}=Sz({width:e.width,height:e.height,aspect:e.aspect}),{calculatedWidth:s,calculatedHeight:d}=QO(void 0,void 0,{width:n,height:l,aspect:e.aspect,maxHeight:e.maxHeight});return de(s)&&de(d)?b.createElement(eE,{width:s,height:d},e.children):b.createElement(Nz,Og({},e,{width:n,height:l,ref:t}))});function tE(e){if(e)return{x:e.x,y:e.y,upperWidth:"upperWidth"in e?e.upperWidth:e.width,lowerWidth:"lowerWidth"in e?e.lowerWidth:e.width,width:e.width,height:e.height}}var _d=()=>{var e,t=Zt(),r=fe(uz),n=fe(Md),l=(e=fe(Td))===null||e===void 0?void 0:e.padding;return!t||!n||!l?r:{width:n.width-l.left-l.right,height:n.height-l.top-l.bottom,x:l.left,y:l.top}},Cz={top:0,bottom:0,left:0,right:0,width:0,height:0,brushBottom:0},rE=()=>{var e;return(e=fe(Bt))!==null&&e!==void 0?e:Cz},I0=()=>fe(Jn),q0=()=>fe(ea),Tz=()=>fe(e=>e.layout.margin),Re=e=>e.layout.layoutType,bs=()=>fe(Re),Mz=()=>{var e=bs();return e!==void 0},Pd=e=>{var t=ot(),r=Zt(),{width:n,height:l}=e,s=B0(),d=n,p=l;return s&&(d=s.width>0?s.width:n,p=s.height>0?s.height:l),b.useEffect(()=>{!r&&xn(d)&&xn(p)&&t(PD({width:d,height:p}))},[t,r,d,p]),null},_z={settings:{layout:"horizontal",align:"center",verticalAlign:"middle",itemSorter:"value"},size:{width:0,height:0},payload:[]},nE=mr({name:"legend",initialState:_z,reducers:{setLegendSize(e,t){e.size.width=t.payload.width,e.size.height=t.payload.height},setLegendSettings(e,t){e.settings.align=t.payload.align,e.settings.layout=t.payload.layout,e.settings.verticalAlign=t.payload.verticalAlign,e.settings.itemSorter=t.payload.itemSorter},addLegendPayload:{reducer(e,t){e.payload.push(t.payload)},prepare:At()},removeLegendPayload:{reducer(e,t){var r=Un(e).payload.indexOf(t.payload);r>-1&&e.payload.splice(r,1)},prepare:At()}}}),{setLegendSize:R2,setLegendSettings:Pz,addLegendPayload:Dz,removeLegendPayload:zz}=nE.actions,Rz=nE.reducer,Lz=["contextPayload"];function kg(){return kg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},kg.apply(null,arguments)}function L2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function So(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?L2(Object(r),!0).forEach(function(n){Bz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Bz(e,t,r){return(t=Iz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Iz(e){var t=qz(e,"string");return typeof t=="symbol"?t:t+""}function qz(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $z(e,t){if(e==null)return{};var r,n,l=Uz(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function Uz(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Hz(e){return e.value}function Yz(e){var{contextPayload:t}=e,r=$z(e,Lz),n=gO(t,e.payloadUniqBy,Hz),l=So(So({},r),{},{payload:n});return b.isValidElement(e.content)?b.cloneElement(e.content,l):typeof e.content=="function"?b.createElement(e.content,l):b.createElement(G_,l)}function Gz(e,t,r,n,l,s){var{layout:d,align:p,verticalAlign:h}=t,m,g;return(!e||(e.left===void 0||e.left===null)&&(e.right===void 0||e.right===null))&&(p==="center"&&d==="vertical"?m={left:((n||0)-s.width)/2}:m=p==="right"?{right:r&&r.right||0}:{left:r&&r.left||0}),(!e||(e.top===void 0||e.top===null)&&(e.bottom===void 0||e.bottom===null))&&(h==="middle"?g={top:((l||0)-s.height)/2}:g=h==="bottom"?{bottom:r&&r.bottom||0}:{top:r&&r.top||0}),So(So({},m),g)}function Kz(e){var t=ot();return b.useEffect(()=>{t(Pz(e))},[t,e]),null}function Wz(e){var t=ot();return b.useEffect(()=>(t(R2(e)),()=>{t(R2({width:0,height:0}))}),[t,e]),null}function Vz(e,t,r,n){return e==="vertical"&&de(t)?{height:t}:e==="horizontal"?{width:r||n}:null}var Xz={align:"center",iconSize:14,itemSorter:"value",layout:"horizontal",verticalAlign:"bottom"};function aE(e){var t=Gt(e,Xz),r=IP(),n=L8(),l=Tz(),{width:s,height:d,wrapperStyle:p,portal:h}=t,[m,g]=wO([r]),x=I0(),w=q0();if(x==null||w==null)return null;var j=x-(l?.left||0)-(l?.right||0),S=Vz(t.layout,d,s,j),A=h?p:So(So({position:"absolute",width:S?.width||s||"auto",height:S?.height||d||"auto"},Gz(p,t,l,x,w,m)),p),O=h??n;if(O==null||r==null)return null;var k=b.createElement("div",{className:"recharts-legend-wrapper",style:A,ref:g},b.createElement(Kz,{layout:t.layout,align:t.align,verticalAlign:t.verticalAlign,itemSorter:t.itemSorter}),b.createElement(Wz,{width:m.width,height:m.height}),b.createElement(Yz,kg({},t,S,{margin:l,chartWidth:x,chartHeight:w,contextPayload:r})));return f0.createPortal(k,O)}aE.displayName="Legend";function Ng(){return Ng=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ng.apply(null,arguments)}function B2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function km(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?B2(Object(r),!0).forEach(function(n){Fz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Fz(e,t,r){return(t=Zz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Zz(e){var t=Qz(e,"string");return typeof t=="symbol"?t:t+""}function Qz(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Jz(e){return Array.isArray(e)&&vn(e[0])&&vn(e[1])?e.join(" ~ "):e}var eR=e=>{var{separator:t=" : ",contentStyle:r={},itemStyle:n={},labelStyle:l={},payload:s,formatter:d,itemSorter:p,wrapperClassName:h,labelClassName:m,label:g,labelFormatter:x,accessibilityLayer:w=!1}=e,j=()=>{if(s&&s.length){var M={padding:0,margin:0},R=(p?wd(s,p):s).map((U,F)=>{if(U.type==="none")return null;var te=U.formatter||d||Jz,{value:ie,name:Z}=U,J=ie,he=Z;if(te){var ge=te(ie,Z,U,F,s);if(Array.isArray(ge))[J,he]=ge;else if(ge!=null)J=ge;else return null}var ye=km({display:"block",paddingTop:4,paddingBottom:4,color:U.color||"#000"},n);return b.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(F),style:ye},vn(he)?b.createElement("span",{className:"recharts-tooltip-item-name"},he):null,vn(he)?b.createElement("span",{className:"recharts-tooltip-item-separator"},t):null,b.createElement("span",{className:"recharts-tooltip-item-value"},J),b.createElement("span",{className:"recharts-tooltip-item-unit"},U.unit||""))});return b.createElement("ul",{className:"recharts-tooltip-item-list",style:M},R)}return null},S=km({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},r),A=km({margin:0},l),O=!nt(g),k=O?g:"",T=$e("recharts-default-tooltip",h),C=$e("recharts-tooltip-label",m);O&&x&&s!==void 0&&s!==null&&(k=x(g,s));var _=w?{role:"status","aria-live":"assertive"}:{};return b.createElement("div",Ng({className:T,style:S},_),b.createElement("p",{className:C,style:A},b.isValidElement(k)?k:"".concat(k)),j())},$l="recharts-tooltip-wrapper",tR={visibility:"hidden"};function rR(e){var{coordinate:t,translateX:r,translateY:n}=e;return $e($l,{["".concat($l,"-right")]:de(r)&&t&&de(t.x)&&r>=t.x,["".concat($l,"-left")]:de(r)&&t&&de(t.x)&&r<t.x,["".concat($l,"-bottom")]:de(n)&&t&&de(t.y)&&n>=t.y,["".concat($l,"-top")]:de(n)&&t&&de(t.y)&&n<t.y})}function I2(e){var{allowEscapeViewBox:t,coordinate:r,key:n,offsetTopLeft:l,position:s,reverseDirection:d,tooltipDimension:p,viewBox:h,viewBoxDimension:m}=e;if(s&&de(s[n]))return s[n];var g=r[n]-p-(l>0?l:0),x=r[n]+l;if(t[n])return d[n]?g:x;var w=h[n];if(w==null)return 0;if(d[n]){var j=g,S=w;return j<S?Math.max(x,w):Math.max(g,w)}if(m==null)return 0;var A=x+p,O=w+m;return A>O?Math.max(g,w):Math.max(x,w)}function nR(e){var{translateX:t,translateY:r,useTranslate3d:n}=e;return{transform:n?"translate3d(".concat(t,"px, ").concat(r,"px, 0)"):"translate(".concat(t,"px, ").concat(r,"px)")}}function aR(e){var{allowEscapeViewBox:t,coordinate:r,offsetTopLeft:n,position:l,reverseDirection:s,tooltipBox:d,useTranslate3d:p,viewBox:h}=e,m,g,x;return d.height>0&&d.width>0&&r?(g=I2({allowEscapeViewBox:t,coordinate:r,key:"x",offsetTopLeft:n,position:l,reverseDirection:s,tooltipDimension:d.width,viewBox:h,viewBoxDimension:h.width}),x=I2({allowEscapeViewBox:t,coordinate:r,key:"y",offsetTopLeft:n,position:l,reverseDirection:s,tooltipDimension:d.height,viewBox:h,viewBoxDimension:h.height}),m=nR({translateX:g,translateY:x,useTranslate3d:p})):m=tR,{cssProperties:m,cssClasses:rR({translateX:g,translateY:x,coordinate:r})}}function q2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function ru(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?q2(Object(r),!0).forEach(function(n){Cg(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Cg(e,t,r){return(t=iR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function iR(e){var t=oR(e,"string");return typeof t=="symbol"?t:t+""}function oR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class lR extends b.PureComponent{constructor(){super(...arguments),Cg(this,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}),Cg(this,"handleKeyDown",t=>{if(t.key==="Escape"){var r,n,l,s;this.setState({dismissed:!0,dismissedAtCoordinate:{x:(r=(n=this.props.coordinate)===null||n===void 0?void 0:n.x)!==null&&r!==void 0?r:0,y:(l=(s=this.props.coordinate)===null||s===void 0?void 0:s.y)!==null&&l!==void 0?l:0}})}})}componentDidMount(){document.addEventListener("keydown",this.handleKeyDown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}componentDidUpdate(){var t,r;this.state.dismissed&&(((t=this.props.coordinate)===null||t===void 0?void 0:t.x)!==this.state.dismissedAtCoordinate.x||((r=this.props.coordinate)===null||r===void 0?void 0:r.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}render(){var{active:t,allowEscapeViewBox:r,animationDuration:n,animationEasing:l,children:s,coordinate:d,hasPayload:p,isAnimationActive:h,offset:m,position:g,reverseDirection:x,useTranslate3d:w,viewBox:j,wrapperStyle:S,lastBoundingBox:A,innerRef:O,hasPortalFromProps:k}=this.props,{cssClasses:T,cssProperties:C}=aR({allowEscapeViewBox:r,coordinate:d,offsetTopLeft:m,position:g,reverseDirection:x,tooltipBox:{height:A.height,width:A.width},useTranslate3d:w,viewBox:j}),_=k?{}:ru(ru({transition:h&&t?"transform ".concat(n,"ms ").concat(l):void 0},C),{},{pointerEvents:"none",visibility:!this.state.dismissed&&t&&p?"visible":"hidden",position:"absolute",top:0,left:0}),M=ru(ru({},_),{},{visibility:!this.state.dismissed&&t&&p?"visible":"hidden"},S);return b.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",tabIndex:-1,className:T,style:M,ref:O},s)}}var sR=()=>!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout),Ai={devToolsEnabled:!1,isSsr:sR()},iE=()=>{var e;return(e=fe(t=>t.rootProps.accessibilityLayer))!==null&&e!==void 0?e:!0};function Tg(){return Tg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Tg.apply(null,arguments)}function $2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function U2(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?$2(Object(r),!0).forEach(function(n){cR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function cR(e,t,r){return(t=uR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function uR(e){var t=dR(e,"string");return typeof t=="symbol"?t:t+""}function dR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var H2={curveBasisClosed:r_,curveBasisOpen:n_,curveBasis:t_,curveBumpX:$8,curveBumpY:U8,curveLinearClosed:a_,curveLinear:xd,curveMonotoneX:i_,curveMonotoneY:o_,curveNatural:l_,curveStep:s_,curveStepAfter:u_,curveStepBefore:c_},Mu=e=>mt(e.x)&&mt(e.y),Y2=e=>e.base!=null&&Mu(e.base)&&Mu(e),Ul=e=>e.x,Hl=e=>e.y,fR=(e,t)=>{if(typeof e=="function")return e;var r="curve".concat(gs(e));return(r==="curveMonotone"||r==="curveBump")&&t?H2["".concat(r).concat(t==="vertical"?"Y":"X")]:H2[r]||xd},pR=e=>{var{type:t="linear",points:r=[],baseLine:n,layout:l,connectNulls:s=!1}=e,d=fR(t,l),p=s?r.filter(Mu):r,h;if(Array.isArray(n)){var m=r.map((j,S)=>U2(U2({},j),{},{base:n[S]}));l==="vertical"?h=Xc().y(Hl).x1(Ul).x0(j=>j.base.x):h=Xc().x(Ul).y1(Hl).y0(j=>j.base.y);var g=h.defined(Y2).curve(d),x=s?m.filter(Y2):m;return g(x)}l==="vertical"&&de(n)?h=Xc().y(Hl).x1(Ul).x0(n):de(n)?h=Xc().x(Ul).y1(Hl).y0(n):h=GA().x(Ul).y(Hl);var w=h.defined(Mu).curve(d);return w(p)},oE=e=>{var{className:t,points:r,path:n,pathRef:l}=e;if((!r||!r.length)&&!n)return null;var s=r&&r.length?pR(e):n;return b.createElement("path",Tg({},nn(e),C0(e),{className:$e("recharts-curve",t),d:s===null?void 0:s,ref:l}))},hR=["x","y","top","left","width","height","className"];function Mg(){return Mg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Mg.apply(null,arguments)}function G2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function mR(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?G2(Object(r),!0).forEach(function(n){gR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function gR(e,t,r){return(t=vR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function vR(e){var t=xR(e,"string");return typeof t=="symbol"?t:t+""}function xR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function yR(e,t){if(e==null)return{};var r,n,l=bR(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function bR(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var wR=(e,t,r,n,l,s)=>"M".concat(e,",").concat(l,"v").concat(n,"M").concat(s,",").concat(t,"h").concat(r),jR=e=>{var{x:t=0,y:r=0,top:n=0,left:l=0,width:s=0,height:d=0,className:p}=e,h=yR(e,hR),m=mR({x:t,y:r,top:n,left:l,width:s,height:d},h);return!de(t)||!de(r)||!de(s)||!de(d)||!de(n)||!de(l)?null:b.createElement("path",Mg({},nr(m),{className:$e("recharts-cross",p),d:wR(t,r,s,d,n,l)}))};function SR(e,t,r,n){var l=n/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-l:r.left+.5,y:e==="horizontal"?r.top+.5:t.y-l,width:e==="horizontal"?n:r.width-1,height:e==="horizontal"?r.height-1:n}}function K2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function W2(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?K2(Object(r),!0).forEach(function(n){AR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function AR(e,t,r){return(t=OR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function OR(e){var t=ER(e,"string");return typeof t=="symbol"?t:t+""}function ER(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var kR=e=>e.replace(/([A-Z])/g,t=>"-".concat(t.toLowerCase())),lE=(e,t,r)=>e.map(n=>"".concat(kR(n)," ").concat(t,"ms ").concat(r)).join(","),NR=(e,t)=>[Object.keys(e),Object.keys(t)].reduce((r,n)=>r.filter(l=>n.includes(l))),as=(e,t)=>Object.keys(t).reduce((r,n)=>W2(W2({},r),{},{[n]:e(n,t[n])}),{});function V2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function St(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?V2(Object(r),!0).forEach(function(n){CR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function CR(e,t,r){return(t=TR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function TR(e){var t=MR(e,"string");return typeof t=="symbol"?t:t+""}function MR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var _u=(e,t,r)=>e+(t-e)*r,_g=e=>{var{from:t,to:r}=e;return t!==r},sE=(e,t,r)=>{var n=as((l,s)=>{if(_g(s)){var[d,p]=e(s.from,s.to,s.velocity);return St(St({},s),{},{from:d,velocity:p})}return s},t);return r<1?as((l,s)=>_g(s)?St(St({},s),{},{velocity:_u(s.velocity,n[l].velocity,r),from:_u(s.from,n[l].from,r)}):s,t):sE(e,n,r-1)};function _R(e,t,r,n,l,s){var d,p=n.reduce((w,j)=>St(St({},w),{},{[j]:{from:e[j],velocity:0,to:t[j]}}),{}),h=()=>as((w,j)=>j.from,p),m=()=>!Object.values(p).filter(_g).length,g=null,x=w=>{d||(d=w);var j=w-d,S=j/r.dt;p=sE(r,p,S),l(St(St(St({},e),t),h())),d=w,m()||(g=s.setTimeout(x))};return()=>(g=s.setTimeout(x),()=>{var w;(w=g)===null||w===void 0||w()})}function PR(e,t,r,n,l,s,d){var p=null,h=l.reduce((x,w)=>St(St({},x),{},{[w]:[e[w],t[w]]}),{}),m,g=x=>{m||(m=x);var w=(x-m)/n,j=as((A,O)=>_u(...O,r(w)),h);if(s(St(St(St({},e),t),j)),w<1)p=d.setTimeout(g);else{var S=as((A,O)=>_u(...O,r(1)),h);s(St(St(St({},e),t),S))}};return()=>(p=d.setTimeout(g),()=>{var x;(x=p)===null||x===void 0||x()})}const DR=(e,t,r,n,l,s)=>{var d=NR(e,t);return r==null?()=>(l(St(St({},e),t)),()=>{}):r.isStepper===!0?_R(e,t,r,d,l,s):PR(e,t,r,n,d,l,s)};var Pu=1e-4,cE=(e,t)=>[0,3*e,3*t-6*e,3*e-3*t+1],uE=(e,t)=>e.map((r,n)=>r*t**n).reduce((r,n)=>r+n),X2=(e,t)=>r=>{var n=cE(e,t);return uE(n,r)},zR=(e,t)=>r=>{var n=cE(e,t),l=[...n.map((s,d)=>s*d).slice(1),0];return uE(l,r)},RR=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(r.length===1)switch(r[0]){case"linear":return[0,0,1,1];case"ease":return[.25,.1,.25,1];case"ease-in":return[.42,0,1,1];case"ease-out":return[.42,0,.58,1];case"ease-in-out":return[0,0,.58,1];default:{var l,s=r[0].split("(");if(s[0]==="cubic-bezier"&&((l=s[1])===null||l===void 0?void 0:l.split(")")[0].split(",").length)===4){var d=s[1].split(")")[0].split(",").map(p=>parseFloat(p));return[d[0],d[1],d[2],d[3]]}}}return r.length===4?r:[0,0,1,1]},LR=(e,t,r,n)=>{var l=X2(e,r),s=X2(t,n),d=zR(e,r),p=m=>m>1?1:m<0?0:m,h=m=>{for(var g=m>1?1:m,x=g,w=0;w<8;++w){var j=l(x)-g,S=d(x);if(Math.abs(j-g)<Pu||S<Pu)return s(x);x=p(x-j/S)}return s(x)};return h.isStepper=!1,h},F2=function(){return LR(...RR(...arguments))},BR=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{stiff:r=100,damping:n=8,dt:l=17}=t,s=(d,p,h)=>{var m=-(d-p)*r,g=h*n,x=h+(m-g)*l/1e3,w=h*l/1e3+d;return Math.abs(w-p)<Pu&&Math.abs(x)<Pu?[p,0]:[w,x]};return s.isStepper=!0,s.dt=l,s},IR=e=>{if(typeof e=="string")switch(e){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return F2(e);case"spring":return BR();default:if(e.split("(")[0]==="cubic-bezier")return F2(e)}return typeof e=="function"?e:null};function qR(e){var t,r=()=>null,n=!1,l=null,s=d=>{if(!n){if(Array.isArray(d)){if(!d.length)return;var p=d,[h,...m]=p;if(typeof h=="number"){l=e.setTimeout(s.bind(null,m),h);return}s(h),l=e.setTimeout(s.bind(null,m));return}typeof d=="string"&&(t=d,r(t)),typeof d=="object"&&(t=d,r(t)),typeof d=="function"&&d()}};return{stop:()=>{n=!0},start:d=>{n=!1,l&&(l(),l=null),s(d)},subscribe:d=>(r=d,()=>{r=()=>null}),getTimeoutController:()=>e}}class $R{setTimeout(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=performance.now(),l=null,s=d=>{d-n>=r?t(d):typeof requestAnimationFrame=="function"&&(l=requestAnimationFrame(s))};return l=requestAnimationFrame(s),()=>{l!=null&&cancelAnimationFrame(l)}}}function UR(){return qR(new $R)}var HR=b.createContext(UR);function YR(e,t){var r=b.useContext(HR);return b.useMemo(()=>t??r(e),[e,t,r])}var GR={begin:0,duration:1e3,easing:"ease",isActive:!0,canBegin:!0,onAnimationEnd:()=>{},onAnimationStart:()=>{}},Z2={t:0},Nm={t:1};function Dd(e){var t=Gt(e,GR),{isActive:r,canBegin:n,duration:l,easing:s,begin:d,onAnimationEnd:p,onAnimationStart:h,children:m}=t,g=YR(t.animationId,t.animationManager),[x,w]=b.useState(r?Z2:Nm),j=b.useRef(null);return b.useEffect(()=>{r||w(Nm)},[r]),b.useEffect(()=>{if(!r||!n)return _o;var S=DR(Z2,Nm,IR(s),l,w,g.getTimeoutController()),A=()=>{j.current=S()};return g.start([h,d,A,l,p]),()=>{g.stop(),j.current&&j.current(),p()}},[r,n,l,s,d,h,p,g]),m(x.t)}function zd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"animation-",r=b.useRef(es(t)),n=b.useRef(e);return n.current!==e&&(r.current=es(t),n.current=e),r.current}var KR=["radius"],WR=["radius"];function Q2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function J2(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Q2(Object(r),!0).forEach(function(n){VR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function VR(e,t,r){return(t=XR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function XR(e){var t=FR(e,"string");return typeof t=="symbol"?t:t+""}function FR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Du(){return Du=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Du.apply(null,arguments)}function ej(e,t){if(e==null)return{};var r,n,l=ZR(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function ZR(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var tj=(e,t,r,n,l)=>{var s=Math.min(Math.abs(r)/2,Math.abs(n)/2),d=n>=0?1:-1,p=r>=0?1:-1,h=n>=0&&r>=0||n<0&&r<0?1:0,m;if(s>0&&l instanceof Array){for(var g=[0,0,0,0],x=0,w=4;x<w;x++)g[x]=l[x]>s?s:l[x];m="M".concat(e,",").concat(t+d*g[0]),g[0]>0&&(m+="A ".concat(g[0],",").concat(g[0],",0,0,").concat(h,",").concat(e+p*g[0],",").concat(t)),m+="L ".concat(e+r-p*g[1],",").concat(t),g[1]>0&&(m+="A ".concat(g[1],",").concat(g[1],",0,0,").concat(h,`,
        `).concat(e+r,",").concat(t+d*g[1])),m+="L ".concat(e+r,",").concat(t+n-d*g[2]),g[2]>0&&(m+="A ".concat(g[2],",").concat(g[2],",0,0,").concat(h,`,
        `).concat(e+r-p*g[2],",").concat(t+n)),m+="L ".concat(e+p*g[3],",").concat(t+n),g[3]>0&&(m+="A ".concat(g[3],",").concat(g[3],",0,0,").concat(h,`,
        `).concat(e,",").concat(t+n-d*g[3])),m+="Z"}else if(s>0&&l===+l&&l>0){var j=Math.min(s,l);m="M ".concat(e,",").concat(t+d*j,`
            A `).concat(j,",").concat(j,",0,0,").concat(h,",").concat(e+p*j,",").concat(t,`
            L `).concat(e+r-p*j,",").concat(t,`
            A `).concat(j,",").concat(j,",0,0,").concat(h,",").concat(e+r,",").concat(t+d*j,`
            L `).concat(e+r,",").concat(t+n-d*j,`
            A `).concat(j,",").concat(j,",0,0,").concat(h,",").concat(e+r-p*j,",").concat(t+n,`
            L `).concat(e+p*j,",").concat(t+n,`
            A `).concat(j,",").concat(j,",0,0,").concat(h,",").concat(e,",").concat(t+n-d*j," Z")}else m="M ".concat(e,",").concat(t," h ").concat(r," v ").concat(n," h ").concat(-r," Z");return m},rj={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},dE=e=>{var t=Gt(e,rj),r=b.useRef(null),[n,l]=b.useState(-1);b.useEffect(()=>{if(r.current&&r.current.getTotalLength)try{var K=r.current.getTotalLength();K&&l(K)}catch{}},[]);var{x:s,y:d,width:p,height:h,radius:m,className:g}=t,{animationEasing:x,animationDuration:w,animationBegin:j,isAnimationActive:S,isUpdateAnimationActive:A}=t,O=b.useRef(p),k=b.useRef(h),T=b.useRef(s),C=b.useRef(d),_=b.useMemo(()=>({x:s,y:d,width:p,height:h,radius:m}),[s,d,p,h,m]),M=zd(_,"rectangle-");if(s!==+s||d!==+d||p!==+p||h!==+h||p===0||h===0)return null;var R=$e("recharts-rectangle",g);if(!A){var U=nr(t),{radius:F}=U,te=ej(U,KR);return b.createElement("path",Du({},te,{radius:typeof m=="number"?m:void 0,className:R,d:tj(s,d,p,h,m)}))}var ie=O.current,Z=k.current,J=T.current,he=C.current,ge="0px ".concat(n===-1?1:n,"px"),ye="".concat(n,"px 0px"),$=lE(["strokeDasharray"],w,typeof x=="string"?x:rj.animationEasing);return b.createElement(Dd,{animationId:M,key:M,canBegin:n>0,duration:w,easing:x,isActive:A,begin:j},K=>{var ne=ct(ie,p,K),oe=ct(Z,h,K),D=ct(J,s,K),V=ct(he,d,K);r.current&&(O.current=ne,k.current=oe,T.current=D,C.current=V);var ae;S?K>0?ae={transition:$,strokeDasharray:ye}:ae={strokeDasharray:ge}:ae={strokeDasharray:ye};var re=nr(t),{radius:se}=re,Se=ej(re,WR);return b.createElement("path",Du({},Se,{radius:typeof m=="number"?m:void 0,className:R,d:tj(D,V,ne,oe,m),ref:r,style:J2(J2({},ae),t.style)}))})};function nj(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function aj(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?nj(Object(r),!0).forEach(function(n){QR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nj(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function QR(e,t,r){return(t=JR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function JR(e){var t=e9(e,"string");return typeof t=="symbol"?t:t+""}function e9(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var zu=Math.PI/180,t9=e=>e*180/Math.PI,Yt=(e,t,r,n)=>({x:e+Math.cos(-zu*n)*r,y:t+Math.sin(-zu*n)*r}),r9=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(t-(n.left||0)-(n.right||0)),Math.abs(r-(n.top||0)-(n.bottom||0)))/2},n9=(e,t)=>{var{x:r,y:n}=e,{x:l,y:s}=t;return Math.sqrt((r-l)**2+(n-s)**2)},a9=(e,t)=>{var{x:r,y:n}=e,{cx:l,cy:s}=t,d=n9({x:r,y:n},{x:l,y:s});if(d<=0)return{radius:d,angle:0};var p=(r-l)/d,h=Math.acos(p);return n>s&&(h=2*Math.PI-h),{radius:d,angle:t9(h),angleInRadian:h}},i9=e=>{var{startAngle:t,endAngle:r}=e,n=Math.floor(t/360),l=Math.floor(r/360),s=Math.min(n,l);return{startAngle:t-s*360,endAngle:r-s*360}},o9=(e,t)=>{var{startAngle:r,endAngle:n}=t,l=Math.floor(r/360),s=Math.floor(n/360),d=Math.min(l,s);return e+d*360},l9=(e,t)=>{var{chartX:r,chartY:n}=e,{radius:l,angle:s}=a9({x:r,y:n},t),{innerRadius:d,outerRadius:p}=t;if(l<d||l>p||l===0)return null;var{startAngle:h,endAngle:m}=i9(t),g=s,x;if(h<=m){for(;g>m;)g-=360;for(;g<h;)g+=360;x=g>=h&&g<=m}else{for(;g>h;)g-=360;for(;g<m;)g+=360;x=g>=m&&g<=h}return x?aj(aj({},t),{},{radius:l,angle:o9(g,t)}):null};function fE(e){var{cx:t,cy:r,radius:n,startAngle:l,endAngle:s}=e,d=Yt(t,r,n,l),p=Yt(t,r,n,s);return{points:[d,p],cx:t,cy:r,radius:n,startAngle:l,endAngle:s}}function Pg(){return Pg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Pg.apply(null,arguments)}var s9=(e,t)=>{var r=pr(t-e),n=Math.min(Math.abs(t-e),359.999);return r*n},nu=e=>{var{cx:t,cy:r,radius:n,angle:l,sign:s,isExternal:d,cornerRadius:p,cornerIsExternal:h}=e,m=p*(d?1:-1)+n,g=Math.asin(p/m)/zu,x=h?l:l+s*g,w=Yt(t,r,m,x),j=Yt(t,r,n,x),S=h?l-s*g:l,A=Yt(t,r,m*Math.cos(g*zu),S);return{center:w,circleTangency:j,lineTangency:A,theta:g}},pE=e=>{var{cx:t,cy:r,innerRadius:n,outerRadius:l,startAngle:s,endAngle:d}=e,p=s9(s,d),h=s+p,m=Yt(t,r,l,s),g=Yt(t,r,l,h),x="M ".concat(m.x,",").concat(m.y,`
    A `).concat(l,",").concat(l,`,0,
    `).concat(+(Math.abs(p)>180),",").concat(+(s>h),`,
    `).concat(g.x,",").concat(g.y,`
  `);if(n>0){var w=Yt(t,r,n,s),j=Yt(t,r,n,h);x+="L ".concat(j.x,",").concat(j.y,`
            A `).concat(n,",").concat(n,`,0,
            `).concat(+(Math.abs(p)>180),",").concat(+(s<=h),`,
            `).concat(w.x,",").concat(w.y," Z")}else x+="L ".concat(t,",").concat(r," Z");return x},c9=e=>{var{cx:t,cy:r,innerRadius:n,outerRadius:l,cornerRadius:s,forceCornerRadius:d,cornerIsExternal:p,startAngle:h,endAngle:m}=e,g=pr(m-h),{circleTangency:x,lineTangency:w,theta:j}=nu({cx:t,cy:r,radius:l,angle:h,sign:g,cornerRadius:s,cornerIsExternal:p}),{circleTangency:S,lineTangency:A,theta:O}=nu({cx:t,cy:r,radius:l,angle:m,sign:-g,cornerRadius:s,cornerIsExternal:p}),k=p?Math.abs(h-m):Math.abs(h-m)-j-O;if(k<0)return d?"M ".concat(w.x,",").concat(w.y,`
        a`).concat(s,",").concat(s,",0,0,1,").concat(s*2,`,0
        a`).concat(s,",").concat(s,",0,0,1,").concat(-s*2,`,0
      `):pE({cx:t,cy:r,innerRadius:n,outerRadius:l,startAngle:h,endAngle:m});var T="M ".concat(w.x,",").concat(w.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(g<0),",").concat(x.x,",").concat(x.y,`
    A`).concat(l,",").concat(l,",0,").concat(+(k>180),",").concat(+(g<0),",").concat(S.x,",").concat(S.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(g<0),",").concat(A.x,",").concat(A.y,`
  `);if(n>0){var{circleTangency:C,lineTangency:_,theta:M}=nu({cx:t,cy:r,radius:n,angle:h,sign:g,isExternal:!0,cornerRadius:s,cornerIsExternal:p}),{circleTangency:R,lineTangency:U,theta:F}=nu({cx:t,cy:r,radius:n,angle:m,sign:-g,isExternal:!0,cornerRadius:s,cornerIsExternal:p}),te=p?Math.abs(h-m):Math.abs(h-m)-M-F;if(te<0&&s===0)return"".concat(T,"L").concat(t,",").concat(r,"Z");T+="L".concat(U.x,",").concat(U.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(g<0),",").concat(R.x,",").concat(R.y,`
      A`).concat(n,",").concat(n,",0,").concat(+(te>180),",").concat(+(g>0),",").concat(C.x,",").concat(C.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(g<0),",").concat(_.x,",").concat(_.y,"Z")}else T+="L".concat(t,",").concat(r,"Z");return T},u9={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},hE=e=>{var t=Gt(e,u9),{cx:r,cy:n,innerRadius:l,outerRadius:s,cornerRadius:d,forceCornerRadius:p,cornerIsExternal:h,startAngle:m,endAngle:g,className:x}=t;if(s<l||m===g)return null;var w=$e("recharts-sector",x),j=s-l,S=on(d,j,0,!0),A;return S>0&&Math.abs(m-g)<360?A=c9({cx:r,cy:n,innerRadius:l,outerRadius:s,cornerRadius:Math.min(S,j/2),forceCornerRadius:p,cornerIsExternal:h,startAngle:m,endAngle:g}):A=pE({cx:r,cy:n,innerRadius:l,outerRadius:s,startAngle:m,endAngle:g}),b.createElement("path",Pg({},nr(t),{className:w,d:A}))};function d9(e,t,r){if(e==="horizontal")return[{x:t.x,y:r.top},{x:t.x,y:r.top+r.height}];if(e==="vertical")return[{x:r.left,y:t.y},{x:r.left+r.width,y:t.y}];if(oO(t)){if(e==="centric"){var{cx:n,cy:l,innerRadius:s,outerRadius:d,angle:p}=t,h=Yt(n,l,s,p),m=Yt(n,l,d,p);return[{x:h.x,y:h.y},{x:m.x,y:m.y}]}return fE(t)}}var Cm={},Tm={},Mm={},ij;function f9(){return ij||(ij=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=xO();function r(n){return t.isSymbol(n)?NaN:Number(n)}e.toNumber=r})(Mm)),Mm}var oj;function p9(){return oj||(oj=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=f9();function r(n){return n?(n=t.toNumber(n),n===1/0||n===-1/0?(n<0?-1:1)*Number.MAX_VALUE:n===n?n:0):n===0?n:0}e.toFinite=r})(Tm)),Tm}var lj;function h9(){return lj||(lj=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=yO(),r=p9();function n(l,s,d){d&&typeof d!="number"&&t.isIterateeCall(l,s,d)&&(s=d=void 0),l=r.toFinite(l),s===void 0?(s=l,l=0):s=r.toFinite(s),d=d===void 0?l<s?1:-1:r.toFinite(d);const p=Math.max(Math.ceil((s-l)/(d||1)),0),h=new Array(p);for(let m=0;m<p;m++)h[m]=l,l+=d;return h}e.range=n})(Cm)),Cm}var _m,sj;function m9(){return sj||(sj=1,_m=h9().range),_m}var g9=m9();const mE=Qn(g9);function _a(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function v9(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function $0(e){let t,r,n;e.length!==2?(t=_a,r=(p,h)=>_a(e(p),h),n=(p,h)=>e(p)-h):(t=e===_a||e===v9?e:x9,r=e,n=e);function l(p,h,m=0,g=p.length){if(m<g){if(t(h,h)!==0)return g;do{const x=m+g>>>1;r(p[x],h)<0?m=x+1:g=x}while(m<g)}return m}function s(p,h,m=0,g=p.length){if(m<g){if(t(h,h)!==0)return g;do{const x=m+g>>>1;r(p[x],h)<=0?m=x+1:g=x}while(m<g)}return m}function d(p,h,m=0,g=p.length){const x=l(p,h,m,g-1);return x>m&&n(p[x-1],h)>-n(p[x],h)?x-1:x}return{left:l,center:d,right:s}}function x9(){return 0}function gE(e){return e===null?NaN:+e}function*y9(e,t){for(let r of e)r!=null&&(r=+r)>=r&&(yield r)}const b9=$0(_a),ws=b9.right;$0(gE).center;class cj extends Map{constructor(t,r=S9){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:r}}),t!=null)for(const[n,l]of t)this.set(n,l)}get(t){return super.get(uj(this,t))}has(t){return super.has(uj(this,t))}set(t,r){return super.set(w9(this,t),r)}delete(t){return super.delete(j9(this,t))}}function uj({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):r}function w9({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):(e.set(n,r),r)}function j9({_intern:e,_key:t},r){const n=t(r);return e.has(n)&&(r=e.get(n),e.delete(n)),r}function S9(e){return e!==null&&typeof e=="object"?e.valueOf():e}function A9(e=_a){if(e===_a)return vE;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,r)=>{const n=e(t,r);return n||n===0?n:(e(r,r)===0)-(e(t,t)===0)}}function vE(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const O9=Math.sqrt(50),E9=Math.sqrt(10),k9=Math.sqrt(2);function Ru(e,t,r){const n=(t-e)/Math.max(0,r),l=Math.floor(Math.log10(n)),s=n/Math.pow(10,l),d=s>=O9?10:s>=E9?5:s>=k9?2:1;let p,h,m;return l<0?(m=Math.pow(10,-l)/d,p=Math.round(e*m),h=Math.round(t*m),p/m<e&&++p,h/m>t&&--h,m=-m):(m=Math.pow(10,l)*d,p=Math.round(e/m),h=Math.round(t/m),p*m<e&&++p,h*m>t&&--h),h<p&&.5<=r&&r<2?Ru(e,t,r*2):[p,h,m]}function Dg(e,t,r){if(t=+t,e=+e,r=+r,!(r>0))return[];if(e===t)return[e];const n=t<e,[l,s,d]=n?Ru(t,e,r):Ru(e,t,r);if(!(s>=l))return[];const p=s-l+1,h=new Array(p);if(n)if(d<0)for(let m=0;m<p;++m)h[m]=(s-m)/-d;else for(let m=0;m<p;++m)h[m]=(s-m)*d;else if(d<0)for(let m=0;m<p;++m)h[m]=(l+m)/-d;else for(let m=0;m<p;++m)h[m]=(l+m)*d;return h}function zg(e,t,r){return t=+t,e=+e,r=+r,Ru(e,t,r)[2]}function Rg(e,t,r){t=+t,e=+e,r=+r;const n=t<e,l=n?zg(t,e,r):zg(e,t,r);return(n?-1:1)*(l<0?1/-l:l)}function dj(e,t){let r;for(const n of e)n!=null&&(r<n||r===void 0&&n>=n)&&(r=n);return r}function fj(e,t){let r;for(const n of e)n!=null&&(r>n||r===void 0&&n>=n)&&(r=n);return r}function xE(e,t,r=0,n=1/0,l){if(t=Math.floor(t),r=Math.floor(Math.max(0,r)),n=Math.floor(Math.min(e.length-1,n)),!(r<=t&&t<=n))return e;for(l=l===void 0?vE:A9(l);n>r;){if(n-r>600){const h=n-r+1,m=t-r+1,g=Math.log(h),x=.5*Math.exp(2*g/3),w=.5*Math.sqrt(g*x*(h-x)/h)*(m-h/2<0?-1:1),j=Math.max(r,Math.floor(t-m*x/h+w)),S=Math.min(n,Math.floor(t+(h-m)*x/h+w));xE(e,t,j,S,l)}const s=e[t];let d=r,p=n;for(Yl(e,r,t),l(e[n],s)>0&&Yl(e,r,n);d<p;){for(Yl(e,d,p),++d,--p;l(e[d],s)<0;)++d;for(;l(e[p],s)>0;)--p}l(e[r],s)===0?Yl(e,r,p):(++p,Yl(e,p,n)),p<=t&&(r=p+1),t<=p&&(n=p-1)}return e}function Yl(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function N9(e,t,r){if(e=Float64Array.from(y9(e)),!(!(n=e.length)||isNaN(t=+t))){if(t<=0||n<2)return fj(e);if(t>=1)return dj(e);var n,l=(n-1)*t,s=Math.floor(l),d=dj(xE(e,s).subarray(0,s+1)),p=fj(e.subarray(s+1));return d+(p-d)*(l-s)}}function C9(e,t,r=gE){if(!(!(n=e.length)||isNaN(t=+t))){if(t<=0||n<2)return+r(e[0],0,e);if(t>=1)return+r(e[n-1],n-1,e);var n,l=(n-1)*t,s=Math.floor(l),d=+r(e[s],s,e),p=+r(e[s+1],s+1,e);return d+(p-d)*(l-s)}}function T9(e,t,r){e=+e,t=+t,r=(l=arguments.length)<2?(t=e,e=0,1):l<3?1:+r;for(var n=-1,l=Math.max(0,Math.ceil((t-e)/r))|0,s=new Array(l);++n<l;)s[n]=e+n*r;return s}function Xr(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function ta(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const Lg=Symbol("implicit");function U0(){var e=new cj,t=[],r=[],n=Lg;function l(s){let d=e.get(s);if(d===void 0){if(n!==Lg)return n;e.set(s,d=t.push(s)-1)}return r[d%r.length]}return l.domain=function(s){if(!arguments.length)return t.slice();t=[],e=new cj;for(const d of s)e.has(d)||e.set(d,t.push(d)-1);return l},l.range=function(s){return arguments.length?(r=Array.from(s),l):r.slice()},l.unknown=function(s){return arguments.length?(n=s,l):n},l.copy=function(){return U0(t,r).unknown(n)},Xr.apply(l,arguments),l}function H0(){var e=U0().unknown(void 0),t=e.domain,r=e.range,n=0,l=1,s,d,p=!1,h=0,m=0,g=.5;delete e.unknown;function x(){var w=t().length,j=l<n,S=j?l:n,A=j?n:l;s=(A-S)/Math.max(1,w-h+m*2),p&&(s=Math.floor(s)),S+=(A-S-s*(w-h))*g,d=s*(1-h),p&&(S=Math.round(S),d=Math.round(d));var O=T9(w).map(function(k){return S+s*k});return r(j?O.reverse():O)}return e.domain=function(w){return arguments.length?(t(w),x()):t()},e.range=function(w){return arguments.length?([n,l]=w,n=+n,l=+l,x()):[n,l]},e.rangeRound=function(w){return[n,l]=w,n=+n,l=+l,p=!0,x()},e.bandwidth=function(){return d},e.step=function(){return s},e.round=function(w){return arguments.length?(p=!!w,x()):p},e.padding=function(w){return arguments.length?(h=Math.min(1,m=+w),x()):h},e.paddingInner=function(w){return arguments.length?(h=Math.min(1,w),x()):h},e.paddingOuter=function(w){return arguments.length?(m=+w,x()):m},e.align=function(w){return arguments.length?(g=Math.max(0,Math.min(1,w)),x()):g},e.copy=function(){return H0(t(),[n,l]).round(p).paddingInner(h).paddingOuter(m).align(g)},Xr.apply(x(),arguments)}function yE(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return yE(t())},e}function M9(){return yE(H0.apply(null,arguments).paddingInner(1))}function Y0(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function bE(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}function js(){}var is=.7,Lu=1/is,yo="\\s*([+-]?\\d+)\\s*",os="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",gn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",_9=/^#([0-9a-f]{3,8})$/,P9=new RegExp(`^rgb\\(${yo},${yo},${yo}\\)$`),D9=new RegExp(`^rgb\\(${gn},${gn},${gn}\\)$`),z9=new RegExp(`^rgba\\(${yo},${yo},${yo},${os}\\)$`),R9=new RegExp(`^rgba\\(${gn},${gn},${gn},${os}\\)$`),L9=new RegExp(`^hsl\\(${os},${gn},${gn}\\)$`),B9=new RegExp(`^hsla\\(${os},${gn},${gn},${os}\\)$`),pj={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Y0(js,ls,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:hj,formatHex:hj,formatHex8:I9,formatHsl:q9,formatRgb:mj,toString:mj});function hj(){return this.rgb().formatHex()}function I9(){return this.rgb().formatHex8()}function q9(){return wE(this).formatHsl()}function mj(){return this.rgb().formatRgb()}function ls(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=_9.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?gj(t):r===3?new hr(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?au(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?au(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=P9.exec(e))?new hr(t[1],t[2],t[3],1):(t=D9.exec(e))?new hr(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=z9.exec(e))?au(t[1],t[2],t[3],t[4]):(t=R9.exec(e))?au(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=L9.exec(e))?yj(t[1],t[2]/100,t[3]/100,1):(t=B9.exec(e))?yj(t[1],t[2]/100,t[3]/100,t[4]):pj.hasOwnProperty(e)?gj(pj[e]):e==="transparent"?new hr(NaN,NaN,NaN,0):null}function gj(e){return new hr(e>>16&255,e>>8&255,e&255,1)}function au(e,t,r,n){return n<=0&&(e=t=r=NaN),new hr(e,t,r,n)}function $9(e){return e instanceof js||(e=ls(e)),e?(e=e.rgb(),new hr(e.r,e.g,e.b,e.opacity)):new hr}function Bg(e,t,r,n){return arguments.length===1?$9(e):new hr(e,t,r,n??1)}function hr(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}Y0(hr,Bg,bE(js,{brighter(e){return e=e==null?Lu:Math.pow(Lu,e),new hr(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?is:Math.pow(is,e),new hr(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new hr(hi(this.r),hi(this.g),hi(this.b),Bu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:vj,formatHex:vj,formatHex8:U9,formatRgb:xj,toString:xj}));function vj(){return`#${ci(this.r)}${ci(this.g)}${ci(this.b)}`}function U9(){return`#${ci(this.r)}${ci(this.g)}${ci(this.b)}${ci((isNaN(this.opacity)?1:this.opacity)*255)}`}function xj(){const e=Bu(this.opacity);return`${e===1?"rgb(":"rgba("}${hi(this.r)}, ${hi(this.g)}, ${hi(this.b)}${e===1?")":`, ${e})`}`}function Bu(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function hi(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function ci(e){return e=hi(e),(e<16?"0":"")+e.toString(16)}function yj(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new tn(e,t,r,n)}function wE(e){if(e instanceof tn)return new tn(e.h,e.s,e.l,e.opacity);if(e instanceof js||(e=ls(e)),!e)return new tn;if(e instanceof tn)return e;e=e.rgb();var t=e.r/255,r=e.g/255,n=e.b/255,l=Math.min(t,r,n),s=Math.max(t,r,n),d=NaN,p=s-l,h=(s+l)/2;return p?(t===s?d=(r-n)/p+(r<n)*6:r===s?d=(n-t)/p+2:d=(t-r)/p+4,p/=h<.5?s+l:2-s-l,d*=60):p=h>0&&h<1?0:d,new tn(d,p,h,e.opacity)}function H9(e,t,r,n){return arguments.length===1?wE(e):new tn(e,t,r,n??1)}function tn(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}Y0(tn,H9,bE(js,{brighter(e){return e=e==null?Lu:Math.pow(Lu,e),new tn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?is:Math.pow(is,e),new tn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,l=2*r-n;return new hr(Pm(e>=240?e-240:e+120,l,n),Pm(e,l,n),Pm(e<120?e+240:e-120,l,n),this.opacity)},clamp(){return new tn(bj(this.h),iu(this.s),iu(this.l),Bu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Bu(this.opacity);return`${e===1?"hsl(":"hsla("}${bj(this.h)}, ${iu(this.s)*100}%, ${iu(this.l)*100}%${e===1?")":`, ${e})`}`}}));function bj(e){return e=(e||0)%360,e<0?e+360:e}function iu(e){return Math.max(0,Math.min(1,e||0))}function Pm(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}const G0=e=>()=>e;function Y9(e,t){return function(r){return e+r*t}}function G9(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(n){return Math.pow(e+n*t,r)}}function K9(e){return(e=+e)==1?jE:function(t,r){return r-t?G9(t,r,e):G0(isNaN(t)?r:t)}}function jE(e,t){var r=t-e;return r?Y9(e,r):G0(isNaN(e)?t:e)}const wj=(function e(t){var r=K9(t);function n(l,s){var d=r((l=Bg(l)).r,(s=Bg(s)).r),p=r(l.g,s.g),h=r(l.b,s.b),m=jE(l.opacity,s.opacity);return function(g){return l.r=d(g),l.g=p(g),l.b=h(g),l.opacity=m(g),l+""}}return n.gamma=e,n})(1);function W9(e,t){t||(t=[]);var r=e?Math.min(t.length,e.length):0,n=t.slice(),l;return function(s){for(l=0;l<r;++l)n[l]=e[l]*(1-s)+t[l]*s;return n}}function V9(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function X9(e,t){var r=t?t.length:0,n=e?Math.min(r,e.length):0,l=new Array(n),s=new Array(r),d;for(d=0;d<n;++d)l[d]=Po(e[d],t[d]);for(;d<r;++d)s[d]=t[d];return function(p){for(d=0;d<n;++d)s[d]=l[d](p);return s}}function F9(e,t){var r=new Date;return e=+e,t=+t,function(n){return r.setTime(e*(1-n)+t*n),r}}function Iu(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}function Z9(e,t){var r={},n={},l;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(l in t)l in e?r[l]=Po(e[l],t[l]):n[l]=t[l];return function(s){for(l in r)n[l]=r[l](s);return n}}var Ig=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Dm=new RegExp(Ig.source,"g");function Q9(e){return function(){return e}}function J9(e){return function(t){return e(t)+""}}function e7(e,t){var r=Ig.lastIndex=Dm.lastIndex=0,n,l,s,d=-1,p=[],h=[];for(e=e+"",t=t+"";(n=Ig.exec(e))&&(l=Dm.exec(t));)(s=l.index)>r&&(s=t.slice(r,s),p[d]?p[d]+=s:p[++d]=s),(n=n[0])===(l=l[0])?p[d]?p[d]+=l:p[++d]=l:(p[++d]=null,h.push({i:d,x:Iu(n,l)})),r=Dm.lastIndex;return r<t.length&&(s=t.slice(r),p[d]?p[d]+=s:p[++d]=s),p.length<2?h[0]?J9(h[0].x):Q9(t):(t=h.length,function(m){for(var g=0,x;g<t;++g)p[(x=h[g]).i]=x.x(m);return p.join("")})}function Po(e,t){var r=typeof t,n;return t==null||r==="boolean"?G0(t):(r==="number"?Iu:r==="string"?(n=ls(t))?(t=n,wj):e7:t instanceof ls?wj:t instanceof Date?F9:V9(t)?W9:Array.isArray(t)?X9:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Z9:Iu)(e,t)}function K0(e,t){return e=+e,t=+t,function(r){return Math.round(e*(1-r)+t*r)}}function t7(e,t){t===void 0&&(t=e,e=Po);for(var r=0,n=t.length-1,l=t[0],s=new Array(n<0?0:n);r<n;)s[r]=e(l,l=t[++r]);return function(d){var p=Math.max(0,Math.min(n-1,Math.floor(d*=n)));return s[p](d-p)}}function r7(e){return function(){return e}}function qu(e){return+e}var jj=[0,1];function rr(e){return e}function qg(e,t){return(t-=e=+e)?function(r){return(r-e)/t}:r7(isNaN(t)?NaN:.5)}function n7(e,t){var r;return e>t&&(r=e,e=t,t=r),function(n){return Math.max(e,Math.min(t,n))}}function a7(e,t,r){var n=e[0],l=e[1],s=t[0],d=t[1];return l<n?(n=qg(l,n),s=r(d,s)):(n=qg(n,l),s=r(s,d)),function(p){return s(n(p))}}function i7(e,t,r){var n=Math.min(e.length,t.length)-1,l=new Array(n),s=new Array(n),d=-1;for(e[n]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++d<n;)l[d]=qg(e[d],e[d+1]),s[d]=r(t[d],t[d+1]);return function(p){var h=ws(e,p,1,n)-1;return s[h](l[h](p))}}function Ss(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Rd(){var e=jj,t=jj,r=Po,n,l,s,d=rr,p,h,m;function g(){var w=Math.min(e.length,t.length);return d!==rr&&(d=n7(e[0],e[w-1])),p=w>2?i7:a7,h=m=null,x}function x(w){return w==null||isNaN(w=+w)?s:(h||(h=p(e.map(n),t,r)))(n(d(w)))}return x.invert=function(w){return d(l((m||(m=p(t,e.map(n),Iu)))(w)))},x.domain=function(w){return arguments.length?(e=Array.from(w,qu),g()):e.slice()},x.range=function(w){return arguments.length?(t=Array.from(w),g()):t.slice()},x.rangeRound=function(w){return t=Array.from(w),r=K0,g()},x.clamp=function(w){return arguments.length?(d=w?!0:rr,g()):d!==rr},x.interpolate=function(w){return arguments.length?(r=w,g()):r},x.unknown=function(w){return arguments.length?(s=w,x):s},function(w,j){return n=w,l=j,g()}}function W0(){return Rd()(rr,rr)}function o7(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function $u(e,t){if((r=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var r,n=e.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+e.slice(r+1)]}function Ao(e){return e=$u(Math.abs(e)),e?e[1]:NaN}function l7(e,t){return function(r,n){for(var l=r.length,s=[],d=0,p=e[0],h=0;l>0&&p>0&&(h+p+1>n&&(p=Math.max(1,n-h)),s.push(r.substring(l-=p,l+p)),!((h+=p+1)>n));)p=e[d=(d+1)%e.length];return s.reverse().join(t)}}function s7(e){return function(t){return t.replace(/[0-9]/g,function(r){return e[+r]})}}var c7=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ss(e){if(!(t=c7.exec(e)))throw new Error("invalid format: "+e);var t;return new V0({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}ss.prototype=V0.prototype;function V0(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}V0.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function u7(e){e:for(var t=e.length,r=1,n=-1,l;r<t;++r)switch(e[r]){case".":n=l=r;break;case"0":n===0&&(n=r),l=r;break;default:if(!+e[r])break e;n>0&&(n=0);break}return n>0?e.slice(0,n)+e.slice(l+1):e}var SE;function d7(e,t){var r=$u(e,t);if(!r)return e+"";var n=r[0],l=r[1],s=l-(SE=Math.max(-8,Math.min(8,Math.floor(l/3)))*3)+1,d=n.length;return s===d?n:s>d?n+new Array(s-d+1).join("0"):s>0?n.slice(0,s)+"."+n.slice(s):"0."+new Array(1-s).join("0")+$u(e,Math.max(0,t+s-1))[0]}function Sj(e,t){var r=$u(e,t);if(!r)return e+"";var n=r[0],l=r[1];return l<0?"0."+new Array(-l).join("0")+n:n.length>l+1?n.slice(0,l+1)+"."+n.slice(l+1):n+new Array(l-n.length+2).join("0")}const Aj={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:o7,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Sj(e*100,t),r:Sj,s:d7,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Oj(e){return e}var Ej=Array.prototype.map,kj=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function f7(e){var t=e.grouping===void 0||e.thousands===void 0?Oj:l7(Ej.call(e.grouping,Number),e.thousands+""),r=e.currency===void 0?"":e.currency[0]+"",n=e.currency===void 0?"":e.currency[1]+"",l=e.decimal===void 0?".":e.decimal+"",s=e.numerals===void 0?Oj:s7(Ej.call(e.numerals,String)),d=e.percent===void 0?"%":e.percent+"",p=e.minus===void 0?"−":e.minus+"",h=e.nan===void 0?"NaN":e.nan+"";function m(x){x=ss(x);var w=x.fill,j=x.align,S=x.sign,A=x.symbol,O=x.zero,k=x.width,T=x.comma,C=x.precision,_=x.trim,M=x.type;M==="n"?(T=!0,M="g"):Aj[M]||(C===void 0&&(C=12),_=!0,M="g"),(O||w==="0"&&j==="=")&&(O=!0,w="0",j="=");var R=A==="$"?r:A==="#"&&/[boxX]/.test(M)?"0"+M.toLowerCase():"",U=A==="$"?n:/[%p]/.test(M)?d:"",F=Aj[M],te=/[defgprs%]/.test(M);C=C===void 0?6:/[gprs]/.test(M)?Math.max(1,Math.min(21,C)):Math.max(0,Math.min(20,C));function ie(Z){var J=R,he=U,ge,ye,$;if(M==="c")he=F(Z)+he,Z="";else{Z=+Z;var K=Z<0||1/Z<0;if(Z=isNaN(Z)?h:F(Math.abs(Z),C),_&&(Z=u7(Z)),K&&+Z==0&&S!=="+"&&(K=!1),J=(K?S==="("?S:p:S==="-"||S==="("?"":S)+J,he=(M==="s"?kj[8+SE/3]:"")+he+(K&&S==="("?")":""),te){for(ge=-1,ye=Z.length;++ge<ye;)if($=Z.charCodeAt(ge),48>$||$>57){he=($===46?l+Z.slice(ge+1):Z.slice(ge))+he,Z=Z.slice(0,ge);break}}}T&&!O&&(Z=t(Z,1/0));var ne=J.length+Z.length+he.length,oe=ne<k?new Array(k-ne+1).join(w):"";switch(T&&O&&(Z=t(oe+Z,oe.length?k-he.length:1/0),oe=""),j){case"<":Z=J+Z+he+oe;break;case"=":Z=J+oe+Z+he;break;case"^":Z=oe.slice(0,ne=oe.length>>1)+J+Z+he+oe.slice(ne);break;default:Z=oe+J+Z+he;break}return s(Z)}return ie.toString=function(){return x+""},ie}function g(x,w){var j=m((x=ss(x),x.type="f",x)),S=Math.max(-8,Math.min(8,Math.floor(Ao(w)/3)))*3,A=Math.pow(10,-S),O=kj[8+S/3];return function(k){return j(A*k)+O}}return{format:m,formatPrefix:g}}var ou,X0,AE;p7({thousands:",",grouping:[3],currency:["$",""]});function p7(e){return ou=f7(e),X0=ou.format,AE=ou.formatPrefix,ou}function h7(e){return Math.max(0,-Ao(Math.abs(e)))}function m7(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Ao(t)/3)))*3-Ao(Math.abs(e)))}function g7(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Ao(t)-Ao(e))+1}function OE(e,t,r,n){var l=Rg(e,t,r),s;switch(n=ss(n??",f"),n.type){case"s":{var d=Math.max(Math.abs(e),Math.abs(t));return n.precision==null&&!isNaN(s=m7(l,d))&&(n.precision=s),AE(n,d)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(s=g7(l,Math.max(Math.abs(e),Math.abs(t))))&&(n.precision=s-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(s=h7(l))&&(n.precision=s-(n.type==="%")*2);break}}return X0(n)}function Ra(e){var t=e.domain;return e.ticks=function(r){var n=t();return Dg(n[0],n[n.length-1],r??10)},e.tickFormat=function(r,n){var l=t();return OE(l[0],l[l.length-1],r??10,n)},e.nice=function(r){r==null&&(r=10);var n=t(),l=0,s=n.length-1,d=n[l],p=n[s],h,m,g=10;for(p<d&&(m=d,d=p,p=m,m=l,l=s,s=m);g-- >0;){if(m=zg(d,p,r),m===h)return n[l]=d,n[s]=p,t(n);if(m>0)d=Math.floor(d/m)*m,p=Math.ceil(p/m)*m;else if(m<0)d=Math.ceil(d*m)/m,p=Math.floor(p*m)/m;else break;h=m}return e},e}function EE(){var e=W0();return e.copy=function(){return Ss(e,EE())},Xr.apply(e,arguments),Ra(e)}function kE(e){var t;function r(n){return n==null||isNaN(n=+n)?t:n}return r.invert=r,r.domain=r.range=function(n){return arguments.length?(e=Array.from(n,qu),r):e.slice()},r.unknown=function(n){return arguments.length?(t=n,r):t},r.copy=function(){return kE(e).unknown(t)},e=arguments.length?Array.from(e,qu):[0,1],Ra(r)}function NE(e,t){e=e.slice();var r=0,n=e.length-1,l=e[r],s=e[n],d;return s<l&&(d=r,r=n,n=d,d=l,l=s,s=d),e[r]=t.floor(l),e[n]=t.ceil(s),e}function Nj(e){return Math.log(e)}function Cj(e){return Math.exp(e)}function v7(e){return-Math.log(-e)}function x7(e){return-Math.exp(-e)}function y7(e){return isFinite(e)?+("1e"+e):e<0?0:e}function b7(e){return e===10?y7:e===Math.E?Math.exp:t=>Math.pow(e,t)}function w7(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function Tj(e){return(t,r)=>-e(-t,r)}function F0(e){const t=e(Nj,Cj),r=t.domain;let n=10,l,s;function d(){return l=w7(n),s=b7(n),r()[0]<0?(l=Tj(l),s=Tj(s),e(v7,x7)):e(Nj,Cj),t}return t.base=function(p){return arguments.length?(n=+p,d()):n},t.domain=function(p){return arguments.length?(r(p),d()):r()},t.ticks=p=>{const h=r();let m=h[0],g=h[h.length-1];const x=g<m;x&&([m,g]=[g,m]);let w=l(m),j=l(g),S,A;const O=p==null?10:+p;let k=[];if(!(n%1)&&j-w<O){if(w=Math.floor(w),j=Math.ceil(j),m>0){for(;w<=j;++w)for(S=1;S<n;++S)if(A=w<0?S/s(-w):S*s(w),!(A<m)){if(A>g)break;k.push(A)}}else for(;w<=j;++w)for(S=n-1;S>=1;--S)if(A=w>0?S/s(-w):S*s(w),!(A<m)){if(A>g)break;k.push(A)}k.length*2<O&&(k=Dg(m,g,O))}else k=Dg(w,j,Math.min(j-w,O)).map(s);return x?k.reverse():k},t.tickFormat=(p,h)=>{if(p==null&&(p=10),h==null&&(h=n===10?"s":","),typeof h!="function"&&(!(n%1)&&(h=ss(h)).precision==null&&(h.trim=!0),h=X0(h)),p===1/0)return h;const m=Math.max(1,n*p/t.ticks().length);return g=>{let x=g/s(Math.round(l(g)));return x*n<n-.5&&(x*=n),x<=m?h(g):""}},t.nice=()=>r(NE(r(),{floor:p=>s(Math.floor(l(p))),ceil:p=>s(Math.ceil(l(p)))})),t}function CE(){const e=F0(Rd()).domain([1,10]);return e.copy=()=>Ss(e,CE()).base(e.base()),Xr.apply(e,arguments),e}function Mj(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function _j(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function Z0(e){var t=1,r=e(Mj(t),_j(t));return r.constant=function(n){return arguments.length?e(Mj(t=+n),_j(t)):t},Ra(r)}function TE(){var e=Z0(Rd());return e.copy=function(){return Ss(e,TE()).constant(e.constant())},Xr.apply(e,arguments)}function Pj(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function j7(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function S7(e){return e<0?-e*e:e*e}function Q0(e){var t=e(rr,rr),r=1;function n(){return r===1?e(rr,rr):r===.5?e(j7,S7):e(Pj(r),Pj(1/r))}return t.exponent=function(l){return arguments.length?(r=+l,n()):r},Ra(t)}function J0(){var e=Q0(Rd());return e.copy=function(){return Ss(e,J0()).exponent(e.exponent())},Xr.apply(e,arguments),e}function A7(){return J0.apply(null,arguments).exponent(.5)}function Dj(e){return Math.sign(e)*e*e}function O7(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function ME(){var e=W0(),t=[0,1],r=!1,n;function l(s){var d=O7(e(s));return isNaN(d)?n:r?Math.round(d):d}return l.invert=function(s){return e.invert(Dj(s))},l.domain=function(s){return arguments.length?(e.domain(s),l):e.domain()},l.range=function(s){return arguments.length?(e.range((t=Array.from(s,qu)).map(Dj)),l):t.slice()},l.rangeRound=function(s){return l.range(s).round(!0)},l.round=function(s){return arguments.length?(r=!!s,l):r},l.clamp=function(s){return arguments.length?(e.clamp(s),l):e.clamp()},l.unknown=function(s){return arguments.length?(n=s,l):n},l.copy=function(){return ME(e.domain(),t).round(r).clamp(e.clamp()).unknown(n)},Xr.apply(l,arguments),Ra(l)}function _E(){var e=[],t=[],r=[],n;function l(){var d=0,p=Math.max(1,t.length);for(r=new Array(p-1);++d<p;)r[d-1]=C9(e,d/p);return s}function s(d){return d==null||isNaN(d=+d)?n:t[ws(r,d)]}return s.invertExtent=function(d){var p=t.indexOf(d);return p<0?[NaN,NaN]:[p>0?r[p-1]:e[0],p<r.length?r[p]:e[e.length-1]]},s.domain=function(d){if(!arguments.length)return e.slice();e=[];for(let p of d)p!=null&&!isNaN(p=+p)&&e.push(p);return e.sort(_a),l()},s.range=function(d){return arguments.length?(t=Array.from(d),l()):t.slice()},s.unknown=function(d){return arguments.length?(n=d,s):n},s.quantiles=function(){return r.slice()},s.copy=function(){return _E().domain(e).range(t).unknown(n)},Xr.apply(s,arguments)}function PE(){var e=0,t=1,r=1,n=[.5],l=[0,1],s;function d(h){return h!=null&&h<=h?l[ws(n,h,0,r)]:s}function p(){var h=-1;for(n=new Array(r);++h<r;)n[h]=((h+1)*t-(h-r)*e)/(r+1);return d}return d.domain=function(h){return arguments.length?([e,t]=h,e=+e,t=+t,p()):[e,t]},d.range=function(h){return arguments.length?(r=(l=Array.from(h)).length-1,p()):l.slice()},d.invertExtent=function(h){var m=l.indexOf(h);return m<0?[NaN,NaN]:m<1?[e,n[0]]:m>=r?[n[r-1],t]:[n[m-1],n[m]]},d.unknown=function(h){return arguments.length&&(s=h),d},d.thresholds=function(){return n.slice()},d.copy=function(){return PE().domain([e,t]).range(l).unknown(s)},Xr.apply(Ra(d),arguments)}function DE(){var e=[.5],t=[0,1],r,n=1;function l(s){return s!=null&&s<=s?t[ws(e,s,0,n)]:r}return l.domain=function(s){return arguments.length?(e=Array.from(s),n=Math.min(e.length,t.length-1),l):e.slice()},l.range=function(s){return arguments.length?(t=Array.from(s),n=Math.min(e.length,t.length-1),l):t.slice()},l.invertExtent=function(s){var d=t.indexOf(s);return[e[d-1],e[d]]},l.unknown=function(s){return arguments.length?(r=s,l):r},l.copy=function(){return DE().domain(e).range(t).unknown(r)},Xr.apply(l,arguments)}const zm=new Date,Rm=new Date;function Ot(e,t,r,n){function l(s){return e(s=arguments.length===0?new Date:new Date(+s)),s}return l.floor=s=>(e(s=new Date(+s)),s),l.ceil=s=>(e(s=new Date(s-1)),t(s,1),e(s),s),l.round=s=>{const d=l(s),p=l.ceil(s);return s-d<p-s?d:p},l.offset=(s,d)=>(t(s=new Date(+s),d==null?1:Math.floor(d)),s),l.range=(s,d,p)=>{const h=[];if(s=l.ceil(s),p=p==null?1:Math.floor(p),!(s<d)||!(p>0))return h;let m;do h.push(m=new Date(+s)),t(s,p),e(s);while(m<s&&s<d);return h},l.filter=s=>Ot(d=>{if(d>=d)for(;e(d),!s(d);)d.setTime(d-1)},(d,p)=>{if(d>=d)if(p<0)for(;++p<=0;)for(;t(d,-1),!s(d););else for(;--p>=0;)for(;t(d,1),!s(d););}),r&&(l.count=(s,d)=>(zm.setTime(+s),Rm.setTime(+d),e(zm),e(Rm),Math.floor(r(zm,Rm))),l.every=s=>(s=Math.floor(s),!isFinite(s)||!(s>0)?null:s>1?l.filter(n?d=>n(d)%s===0:d=>l.count(0,d)%s===0):l)),l}const Uu=Ot(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Uu.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?Ot(t=>{t.setTime(Math.floor(t/e)*e)},(t,r)=>{t.setTime(+t+r*e)},(t,r)=>(r-t)/e):Uu);Uu.range;const In=1e3,Yr=In*60,qn=Yr*60,Wn=qn*24,ev=Wn*7,zj=Wn*30,Lm=Wn*365,ui=Ot(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*In)},(e,t)=>(t-e)/In,e=>e.getUTCSeconds());ui.range;const tv=Ot(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*In)},(e,t)=>{e.setTime(+e+t*Yr)},(e,t)=>(t-e)/Yr,e=>e.getMinutes());tv.range;const rv=Ot(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Yr)},(e,t)=>(t-e)/Yr,e=>e.getUTCMinutes());rv.range;const nv=Ot(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*In-e.getMinutes()*Yr)},(e,t)=>{e.setTime(+e+t*qn)},(e,t)=>(t-e)/qn,e=>e.getHours());nv.range;const av=Ot(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*qn)},(e,t)=>(t-e)/qn,e=>e.getUTCHours());av.range;const As=Ot(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Yr)/Wn,e=>e.getDate()-1);As.range;const Ld=Ot(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Wn,e=>e.getUTCDate()-1);Ld.range;const zE=Ot(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Wn,e=>Math.floor(e/Wn));zE.range;function Oi(e){return Ot(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,r)=>{t.setDate(t.getDate()+r*7)},(t,r)=>(r-t-(r.getTimezoneOffset()-t.getTimezoneOffset())*Yr)/ev)}const Bd=Oi(0),Hu=Oi(1),E7=Oi(2),k7=Oi(3),Oo=Oi(4),N7=Oi(5),C7=Oi(6);Bd.range;Hu.range;E7.range;k7.range;Oo.range;N7.range;C7.range;function Ei(e){return Ot(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCDate(t.getUTCDate()+r*7)},(t,r)=>(r-t)/ev)}const Id=Ei(0),Yu=Ei(1),T7=Ei(2),M7=Ei(3),Eo=Ei(4),_7=Ei(5),P7=Ei(6);Id.range;Yu.range;T7.range;M7.range;Eo.range;_7.range;P7.range;const iv=Ot(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());iv.range;const ov=Ot(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());ov.range;const Vn=Ot(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Vn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Ot(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,r)=>{t.setFullYear(t.getFullYear()+r*e)});Vn.range;const Xn=Ot(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Xn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Ot(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCFullYear(t.getUTCFullYear()+r*e)});Xn.range;function RE(e,t,r,n,l,s){const d=[[ui,1,In],[ui,5,5*In],[ui,15,15*In],[ui,30,30*In],[s,1,Yr],[s,5,5*Yr],[s,15,15*Yr],[s,30,30*Yr],[l,1,qn],[l,3,3*qn],[l,6,6*qn],[l,12,12*qn],[n,1,Wn],[n,2,2*Wn],[r,1,ev],[t,1,zj],[t,3,3*zj],[e,1,Lm]];function p(m,g,x){const w=g<m;w&&([m,g]=[g,m]);const j=x&&typeof x.range=="function"?x:h(m,g,x),S=j?j.range(m,+g+1):[];return w?S.reverse():S}function h(m,g,x){const w=Math.abs(g-m)/x,j=$0(([,,O])=>O).right(d,w);if(j===d.length)return e.every(Rg(m/Lm,g/Lm,x));if(j===0)return Uu.every(Math.max(Rg(m,g,x),1));const[S,A]=d[w/d[j-1][2]<d[j][2]/w?j-1:j];return S.every(A)}return[p,h]}const[D7,z7]=RE(Xn,ov,Id,zE,av,rv),[R7,L7]=RE(Vn,iv,Bd,As,nv,tv);function Bm(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Im(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Gl(e,t,r){return{y:e,m:t,d:r,H:0,M:0,S:0,L:0}}function B7(e){var t=e.dateTime,r=e.date,n=e.time,l=e.periods,s=e.days,d=e.shortDays,p=e.months,h=e.shortMonths,m=Kl(l),g=Wl(l),x=Kl(s),w=Wl(s),j=Kl(d),S=Wl(d),A=Kl(p),O=Wl(p),k=Kl(h),T=Wl(h),C={a:K,A:ne,b:oe,B:D,c:null,d:$j,e:$j,f:lL,g:vL,G:yL,H:aL,I:iL,j:oL,L:LE,m:sL,M:cL,p:V,q:ae,Q:Yj,s:Gj,S:uL,u:dL,U:fL,V:pL,w:hL,W:mL,x:null,X:null,y:gL,Y:xL,Z:bL,"%":Hj},_={a:re,A:se,b:Se,B:ve,c:null,d:Uj,e:Uj,f:AL,g:DL,G:RL,H:wL,I:jL,j:SL,L:IE,m:OL,M:EL,p:Ue,q:He,Q:Yj,s:Gj,S:kL,u:NL,U:CL,V:TL,w:ML,W:_L,x:null,X:null,y:PL,Y:zL,Z:LL,"%":Hj},M={a:ie,A:Z,b:J,B:he,c:ge,d:Ij,e:Ij,f:eL,g:Bj,G:Lj,H:qj,I:qj,j:F7,L:J7,m:X7,M:Z7,p:te,q:V7,Q:rL,s:nL,S:Q7,u:H7,U:Y7,V:G7,w:U7,W:K7,x:ye,X:$,y:Bj,Y:Lj,Z:W7,"%":tL};C.x=R(r,C),C.X=R(n,C),C.c=R(t,C),_.x=R(r,_),_.X=R(n,_),_.c=R(t,_);function R(Q,Ae){return function(Ce){var ee=[],Ct=-1,Le=0,Qt=Q.length,Jt,Tt,_s;for(Ce instanceof Date||(Ce=new Date(+Ce));++Ct<Qt;)Q.charCodeAt(Ct)===37&&(ee.push(Q.slice(Le,Ct)),(Tt=Rj[Jt=Q.charAt(++Ct)])!=null?Jt=Q.charAt(++Ct):Tt=Jt==="e"?" ":"0",(_s=Ae[Jt])&&(Jt=_s(Ce,Tt)),ee.push(Jt),Le=Ct+1);return ee.push(Q.slice(Le,Ct)),ee.join("")}}function U(Q,Ae){return function(Ce){var ee=Gl(1900,void 0,1),Ct=F(ee,Q,Ce+="",0),Le,Qt;if(Ct!=Ce.length)return null;if("Q"in ee)return new Date(ee.Q);if("s"in ee)return new Date(ee.s*1e3+("L"in ee?ee.L:0));if(Ae&&!("Z"in ee)&&(ee.Z=0),"p"in ee&&(ee.H=ee.H%12+ee.p*12),ee.m===void 0&&(ee.m="q"in ee?ee.q:0),"V"in ee){if(ee.V<1||ee.V>53)return null;"w"in ee||(ee.w=1),"Z"in ee?(Le=Im(Gl(ee.y,0,1)),Qt=Le.getUTCDay(),Le=Qt>4||Qt===0?Yu.ceil(Le):Yu(Le),Le=Ld.offset(Le,(ee.V-1)*7),ee.y=Le.getUTCFullYear(),ee.m=Le.getUTCMonth(),ee.d=Le.getUTCDate()+(ee.w+6)%7):(Le=Bm(Gl(ee.y,0,1)),Qt=Le.getDay(),Le=Qt>4||Qt===0?Hu.ceil(Le):Hu(Le),Le=As.offset(Le,(ee.V-1)*7),ee.y=Le.getFullYear(),ee.m=Le.getMonth(),ee.d=Le.getDate()+(ee.w+6)%7)}else("W"in ee||"U"in ee)&&("w"in ee||(ee.w="u"in ee?ee.u%7:"W"in ee?1:0),Qt="Z"in ee?Im(Gl(ee.y,0,1)).getUTCDay():Bm(Gl(ee.y,0,1)).getDay(),ee.m=0,ee.d="W"in ee?(ee.w+6)%7+ee.W*7-(Qt+5)%7:ee.w+ee.U*7-(Qt+6)%7);return"Z"in ee?(ee.H+=ee.Z/100|0,ee.M+=ee.Z%100,Im(ee)):Bm(ee)}}function F(Q,Ae,Ce,ee){for(var Ct=0,Le=Ae.length,Qt=Ce.length,Jt,Tt;Ct<Le;){if(ee>=Qt)return-1;if(Jt=Ae.charCodeAt(Ct++),Jt===37){if(Jt=Ae.charAt(Ct++),Tt=M[Jt in Rj?Ae.charAt(Ct++):Jt],!Tt||(ee=Tt(Q,Ce,ee))<0)return-1}else if(Jt!=Ce.charCodeAt(ee++))return-1}return ee}function te(Q,Ae,Ce){var ee=m.exec(Ae.slice(Ce));return ee?(Q.p=g.get(ee[0].toLowerCase()),Ce+ee[0].length):-1}function ie(Q,Ae,Ce){var ee=j.exec(Ae.slice(Ce));return ee?(Q.w=S.get(ee[0].toLowerCase()),Ce+ee[0].length):-1}function Z(Q,Ae,Ce){var ee=x.exec(Ae.slice(Ce));return ee?(Q.w=w.get(ee[0].toLowerCase()),Ce+ee[0].length):-1}function J(Q,Ae,Ce){var ee=k.exec(Ae.slice(Ce));return ee?(Q.m=T.get(ee[0].toLowerCase()),Ce+ee[0].length):-1}function he(Q,Ae,Ce){var ee=A.exec(Ae.slice(Ce));return ee?(Q.m=O.get(ee[0].toLowerCase()),Ce+ee[0].length):-1}function ge(Q,Ae,Ce){return F(Q,t,Ae,Ce)}function ye(Q,Ae,Ce){return F(Q,r,Ae,Ce)}function $(Q,Ae,Ce){return F(Q,n,Ae,Ce)}function K(Q){return d[Q.getDay()]}function ne(Q){return s[Q.getDay()]}function oe(Q){return h[Q.getMonth()]}function D(Q){return p[Q.getMonth()]}function V(Q){return l[+(Q.getHours()>=12)]}function ae(Q){return 1+~~(Q.getMonth()/3)}function re(Q){return d[Q.getUTCDay()]}function se(Q){return s[Q.getUTCDay()]}function Se(Q){return h[Q.getUTCMonth()]}function ve(Q){return p[Q.getUTCMonth()]}function Ue(Q){return l[+(Q.getUTCHours()>=12)]}function He(Q){return 1+~~(Q.getUTCMonth()/3)}return{format:function(Q){var Ae=R(Q+="",C);return Ae.toString=function(){return Q},Ae},parse:function(Q){var Ae=U(Q+="",!1);return Ae.toString=function(){return Q},Ae},utcFormat:function(Q){var Ae=R(Q+="",_);return Ae.toString=function(){return Q},Ae},utcParse:function(Q){var Ae=U(Q+="",!0);return Ae.toString=function(){return Q},Ae}}}var Rj={"-":"",_:" ",0:"0"},It=/^\s*\d+/,I7=/^%/,q7=/[\\^$*+?|[\]().{}]/g;function De(e,t,r){var n=e<0?"-":"",l=(n?-e:e)+"",s=l.length;return n+(s<r?new Array(r-s+1).join(t)+l:l)}function $7(e){return e.replace(q7,"\\$&")}function Kl(e){return new RegExp("^(?:"+e.map($7).join("|")+")","i")}function Wl(e){return new Map(e.map((t,r)=>[t.toLowerCase(),r]))}function U7(e,t,r){var n=It.exec(t.slice(r,r+1));return n?(e.w=+n[0],r+n[0].length):-1}function H7(e,t,r){var n=It.exec(t.slice(r,r+1));return n?(e.u=+n[0],r+n[0].length):-1}function Y7(e,t,r){var n=It.exec(t.slice(r,r+2));return n?(e.U=+n[0],r+n[0].length):-1}function G7(e,t,r){var n=It.exec(t.slice(r,r+2));return n?(e.V=+n[0],r+n[0].length):-1}function K7(e,t,r){var n=It.exec(t.slice(r,r+2));return n?(e.W=+n[0],r+n[0].length):-1}function Lj(e,t,r){var n=It.exec(t.slice(r,r+4));return n?(e.y=+n[0],r+n[0].length):-1}function Bj(e,t,r){var n=It.exec(t.slice(r,r+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),r+n[0].length):-1}function W7(e,t,r){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r,r+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),r+n[0].length):-1}function V7(e,t,r){var n=It.exec(t.slice(r,r+1));return n?(e.q=n[0]*3-3,r+n[0].length):-1}function X7(e,t,r){var n=It.exec(t.slice(r,r+2));return n?(e.m=n[0]-1,r+n[0].length):-1}function Ij(e,t,r){var n=It.exec(t.slice(r,r+2));return n?(e.d=+n[0],r+n[0].length):-1}function F7(e,t,r){var n=It.exec(t.slice(r,r+3));return n?(e.m=0,e.d=+n[0],r+n[0].length):-1}function qj(e,t,r){var n=It.exec(t.slice(r,r+2));return n?(e.H=+n[0],r+n[0].length):-1}function Z7(e,t,r){var n=It.exec(t.slice(r,r+2));return n?(e.M=+n[0],r+n[0].length):-1}function Q7(e,t,r){var n=It.exec(t.slice(r,r+2));return n?(e.S=+n[0],r+n[0].length):-1}function J7(e,t,r){var n=It.exec(t.slice(r,r+3));return n?(e.L=+n[0],r+n[0].length):-1}function eL(e,t,r){var n=It.exec(t.slice(r,r+6));return n?(e.L=Math.floor(n[0]/1e3),r+n[0].length):-1}function tL(e,t,r){var n=I7.exec(t.slice(r,r+1));return n?r+n[0].length:-1}function rL(e,t,r){var n=It.exec(t.slice(r));return n?(e.Q=+n[0],r+n[0].length):-1}function nL(e,t,r){var n=It.exec(t.slice(r));return n?(e.s=+n[0],r+n[0].length):-1}function $j(e,t){return De(e.getDate(),t,2)}function aL(e,t){return De(e.getHours(),t,2)}function iL(e,t){return De(e.getHours()%12||12,t,2)}function oL(e,t){return De(1+As.count(Vn(e),e),t,3)}function LE(e,t){return De(e.getMilliseconds(),t,3)}function lL(e,t){return LE(e,t)+"000"}function sL(e,t){return De(e.getMonth()+1,t,2)}function cL(e,t){return De(e.getMinutes(),t,2)}function uL(e,t){return De(e.getSeconds(),t,2)}function dL(e){var t=e.getDay();return t===0?7:t}function fL(e,t){return De(Bd.count(Vn(e)-1,e),t,2)}function BE(e){var t=e.getDay();return t>=4||t===0?Oo(e):Oo.ceil(e)}function pL(e,t){return e=BE(e),De(Oo.count(Vn(e),e)+(Vn(e).getDay()===4),t,2)}function hL(e){return e.getDay()}function mL(e,t){return De(Hu.count(Vn(e)-1,e),t,2)}function gL(e,t){return De(e.getFullYear()%100,t,2)}function vL(e,t){return e=BE(e),De(e.getFullYear()%100,t,2)}function xL(e,t){return De(e.getFullYear()%1e4,t,4)}function yL(e,t){var r=e.getDay();return e=r>=4||r===0?Oo(e):Oo.ceil(e),De(e.getFullYear()%1e4,t,4)}function bL(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+De(t/60|0,"0",2)+De(t%60,"0",2)}function Uj(e,t){return De(e.getUTCDate(),t,2)}function wL(e,t){return De(e.getUTCHours(),t,2)}function jL(e,t){return De(e.getUTCHours()%12||12,t,2)}function SL(e,t){return De(1+Ld.count(Xn(e),e),t,3)}function IE(e,t){return De(e.getUTCMilliseconds(),t,3)}function AL(e,t){return IE(e,t)+"000"}function OL(e,t){return De(e.getUTCMonth()+1,t,2)}function EL(e,t){return De(e.getUTCMinutes(),t,2)}function kL(e,t){return De(e.getUTCSeconds(),t,2)}function NL(e){var t=e.getUTCDay();return t===0?7:t}function CL(e,t){return De(Id.count(Xn(e)-1,e),t,2)}function qE(e){var t=e.getUTCDay();return t>=4||t===0?Eo(e):Eo.ceil(e)}function TL(e,t){return e=qE(e),De(Eo.count(Xn(e),e)+(Xn(e).getUTCDay()===4),t,2)}function ML(e){return e.getUTCDay()}function _L(e,t){return De(Yu.count(Xn(e)-1,e),t,2)}function PL(e,t){return De(e.getUTCFullYear()%100,t,2)}function DL(e,t){return e=qE(e),De(e.getUTCFullYear()%100,t,2)}function zL(e,t){return De(e.getUTCFullYear()%1e4,t,4)}function RL(e,t){var r=e.getUTCDay();return e=r>=4||r===0?Eo(e):Eo.ceil(e),De(e.getUTCFullYear()%1e4,t,4)}function LL(){return"+0000"}function Hj(){return"%"}function Yj(e){return+e}function Gj(e){return Math.floor(+e/1e3)}var po,$E,UE;BL({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function BL(e){return po=B7(e),$E=po.format,po.parse,UE=po.utcFormat,po.utcParse,po}function IL(e){return new Date(e)}function qL(e){return e instanceof Date?+e:+new Date(+e)}function lv(e,t,r,n,l,s,d,p,h,m){var g=W0(),x=g.invert,w=g.domain,j=m(".%L"),S=m(":%S"),A=m("%I:%M"),O=m("%I %p"),k=m("%a %d"),T=m("%b %d"),C=m("%B"),_=m("%Y");function M(R){return(h(R)<R?j:p(R)<R?S:d(R)<R?A:s(R)<R?O:n(R)<R?l(R)<R?k:T:r(R)<R?C:_)(R)}return g.invert=function(R){return new Date(x(R))},g.domain=function(R){return arguments.length?w(Array.from(R,qL)):w().map(IL)},g.ticks=function(R){var U=w();return e(U[0],U[U.length-1],R??10)},g.tickFormat=function(R,U){return U==null?M:m(U)},g.nice=function(R){var U=w();return(!R||typeof R.range!="function")&&(R=t(U[0],U[U.length-1],R??10)),R?w(NE(U,R)):g},g.copy=function(){return Ss(g,lv(e,t,r,n,l,s,d,p,h,m))},g}function $L(){return Xr.apply(lv(R7,L7,Vn,iv,Bd,As,nv,tv,ui,$E).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function UL(){return Xr.apply(lv(D7,z7,Xn,ov,Id,Ld,av,rv,ui,UE).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function qd(){var e=0,t=1,r,n,l,s,d=rr,p=!1,h;function m(x){return x==null||isNaN(x=+x)?h:d(l===0?.5:(x=(s(x)-r)*l,p?Math.max(0,Math.min(1,x)):x))}m.domain=function(x){return arguments.length?([e,t]=x,r=s(e=+e),n=s(t=+t),l=r===n?0:1/(n-r),m):[e,t]},m.clamp=function(x){return arguments.length?(p=!!x,m):p},m.interpolator=function(x){return arguments.length?(d=x,m):d};function g(x){return function(w){var j,S;return arguments.length?([j,S]=w,d=x(j,S),m):[d(0),d(1)]}}return m.range=g(Po),m.rangeRound=g(K0),m.unknown=function(x){return arguments.length?(h=x,m):h},function(x){return s=x,r=x(e),n=x(t),l=r===n?0:1/(n-r),m}}function La(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function HE(){var e=Ra(qd()(rr));return e.copy=function(){return La(e,HE())},ta.apply(e,arguments)}function YE(){var e=F0(qd()).domain([1,10]);return e.copy=function(){return La(e,YE()).base(e.base())},ta.apply(e,arguments)}function GE(){var e=Z0(qd());return e.copy=function(){return La(e,GE()).constant(e.constant())},ta.apply(e,arguments)}function sv(){var e=Q0(qd());return e.copy=function(){return La(e,sv()).exponent(e.exponent())},ta.apply(e,arguments)}function HL(){return sv.apply(null,arguments).exponent(.5)}function KE(){var e=[],t=rr;function r(n){if(n!=null&&!isNaN(n=+n))return t((ws(e,n,1)-1)/(e.length-1))}return r.domain=function(n){if(!arguments.length)return e.slice();e=[];for(let l of n)l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(_a),r},r.interpolator=function(n){return arguments.length?(t=n,r):t},r.range=function(){return e.map((n,l)=>t(l/(e.length-1)))},r.quantiles=function(n){return Array.from({length:n+1},(l,s)=>N9(e,s/n))},r.copy=function(){return KE(t).domain(e)},ta.apply(r,arguments)}function $d(){var e=0,t=.5,r=1,n=1,l,s,d,p,h,m=rr,g,x=!1,w;function j(A){return isNaN(A=+A)?w:(A=.5+((A=+g(A))-s)*(n*A<n*s?p:h),m(x?Math.max(0,Math.min(1,A)):A))}j.domain=function(A){return arguments.length?([e,t,r]=A,l=g(e=+e),s=g(t=+t),d=g(r=+r),p=l===s?0:.5/(s-l),h=s===d?0:.5/(d-s),n=s<l?-1:1,j):[e,t,r]},j.clamp=function(A){return arguments.length?(x=!!A,j):x},j.interpolator=function(A){return arguments.length?(m=A,j):m};function S(A){return function(O){var k,T,C;return arguments.length?([k,T,C]=O,m=t7(A,[k,T,C]),j):[m(0),m(.5),m(1)]}}return j.range=S(Po),j.rangeRound=S(K0),j.unknown=function(A){return arguments.length?(w=A,j):w},function(A){return g=A,l=A(e),s=A(t),d=A(r),p=l===s?0:.5/(s-l),h=s===d?0:.5/(d-s),n=s<l?-1:1,j}}function WE(){var e=Ra($d()(rr));return e.copy=function(){return La(e,WE())},ta.apply(e,arguments)}function VE(){var e=F0($d()).domain([.1,1,10]);return e.copy=function(){return La(e,VE()).base(e.base())},ta.apply(e,arguments)}function XE(){var e=Z0($d());return e.copy=function(){return La(e,XE()).constant(e.constant())},ta.apply(e,arguments)}function cv(){var e=Q0($d());return e.copy=function(){return La(e,cv()).exponent(e.exponent())},ta.apply(e,arguments)}function YL(){return cv.apply(null,arguments).exponent(.5)}const Fl=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:H0,scaleDiverging:WE,scaleDivergingLog:VE,scaleDivergingPow:cv,scaleDivergingSqrt:YL,scaleDivergingSymlog:XE,scaleIdentity:kE,scaleImplicit:Lg,scaleLinear:EE,scaleLog:CE,scaleOrdinal:U0,scalePoint:M9,scalePow:J0,scaleQuantile:_E,scaleQuantize:PE,scaleRadial:ME,scaleSequential:HE,scaleSequentialLog:YE,scaleSequentialPow:sv,scaleSequentialQuantile:KE,scaleSequentialSqrt:HL,scaleSequentialSymlog:GE,scaleSqrt:A7,scaleSymlog:TE,scaleThreshold:DE,scaleTime:$L,scaleUtc:UL,tickFormat:OE},Symbol.toStringTag,{value:"Module"}));var Ba=e=>e.chartData,GL=Y([Ba],e=>{var t=e.chartData!=null?e.chartData.length-1:0;return{chartData:e.chartData,computedData:e.computedData,dataEndIndex:t,dataStartIndex:0}}),Ud=(e,t,r,n)=>n?GL(e):Ba(e);function xi(e){if(Array.isArray(e)&&e.length===2){var[t,r]=e;if(mt(t)&&mt(r))return!0}return!1}function Kj(e,t,r){return r?e:[Math.min(e[0],t[0]),Math.max(e[1],t[1])]}function FE(e,t){if(t&&typeof e!="function"&&Array.isArray(e)&&e.length===2){var[r,n]=e,l,s;if(mt(r))l=r;else if(typeof r=="function")return;if(mt(n))s=n;else if(typeof n=="function")return;var d=[l,s];if(xi(d))return d}}function KL(e,t,r){if(!(!r&&t==null)){if(typeof e=="function"&&t!=null)try{var n=e(t,r);if(xi(n))return Kj(n,t,r)}catch{}if(Array.isArray(e)&&e.length===2){var[l,s]=e,d,p;if(l==="auto")t!=null&&(d=Math.min(...t));else if(de(l))d=l;else if(typeof l=="function")try{t!=null&&(d=l(t?.[0]))}catch{}else if(typeof l=="string"&&E2.test(l)){var h=E2.exec(l);if(h==null||t==null)d=void 0;else{var m=+h[1];d=t[0]-m}}else d=t?.[0];if(s==="auto")t!=null&&(p=Math.max(...t));else if(de(s))p=s;else if(typeof s=="function")try{t!=null&&(p=s(t?.[1]))}catch{}else if(typeof s=="string"&&k2.test(s)){var g=k2.exec(s);if(g==null||t==null)p=void 0;else{var x=+g[1];p=t[1]+x}}else p=t?.[1];var w=[d,p];if(xi(w))return t==null?w:Kj(w,t,r)}}}var Do=1e9,WL={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},dv,tt=!0,Wr="[DecimalError] ",mi=Wr+"Invalid argument: ",uv=Wr+"Exponent out of range: ",zo=Math.floor,si=Math.pow,VL=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Nr,zt=1e7,Je=7,ZE=9007199254740991,Gu=zo(ZE/Je),le={};le.absoluteValue=le.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};le.comparedTo=le.cmp=function(e){var t,r,n,l,s=this;if(e=new s.constructor(e),s.s!==e.s)return s.s||-e.s;if(s.e!==e.e)return s.e>e.e^s.s<0?1:-1;for(n=s.d.length,l=e.d.length,t=0,r=n<l?n:l;t<r;++t)if(s.d[t]!==e.d[t])return s.d[t]>e.d[t]^s.s<0?1:-1;return n===l?0:n>l^s.s<0?1:-1};le.decimalPlaces=le.dp=function(){var e=this,t=e.d.length-1,r=(t-e.e)*Je;if(t=e.d[t],t)for(;t%10==0;t/=10)r--;return r<0?0:r};le.dividedBy=le.div=function(e){return Hn(this,new this.constructor(e))};le.dividedToIntegerBy=le.idiv=function(e){var t=this,r=t.constructor;return Xe(Hn(t,new r(e),0,1),r.precision)};le.equals=le.eq=function(e){return!this.cmp(e)};le.exponent=function(){return bt(this)};le.greaterThan=le.gt=function(e){return this.cmp(e)>0};le.greaterThanOrEqualTo=le.gte=function(e){return this.cmp(e)>=0};le.isInteger=le.isint=function(){return this.e>this.d.length-2};le.isNegative=le.isneg=function(){return this.s<0};le.isPositive=le.ispos=function(){return this.s>0};le.isZero=function(){return this.s===0};le.lessThan=le.lt=function(e){return this.cmp(e)<0};le.lessThanOrEqualTo=le.lte=function(e){return this.cmp(e)<1};le.logarithm=le.log=function(e){var t,r=this,n=r.constructor,l=n.precision,s=l+5;if(e===void 0)e=new n(10);else if(e=new n(e),e.s<1||e.eq(Nr))throw Error(Wr+"NaN");if(r.s<1)throw Error(Wr+(r.s?"NaN":"-Infinity"));return r.eq(Nr)?new n(0):(tt=!1,t=Hn(cs(r,s),cs(e,s),s),tt=!0,Xe(t,l))};le.minus=le.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?e3(t,e):QE(t,(e.s=-e.s,e))};le.modulo=le.mod=function(e){var t,r=this,n=r.constructor,l=n.precision;if(e=new n(e),!e.s)throw Error(Wr+"NaN");return r.s?(tt=!1,t=Hn(r,e,0,1).times(e),tt=!0,r.minus(t)):Xe(new n(r),l)};le.naturalExponential=le.exp=function(){return JE(this)};le.naturalLogarithm=le.ln=function(){return cs(this)};le.negated=le.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};le.plus=le.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?QE(t,e):e3(t,(e.s=-e.s,e))};le.precision=le.sd=function(e){var t,r,n,l=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(mi+e);if(t=bt(l)+1,n=l.d.length-1,r=n*Je+1,n=l.d[n],n){for(;n%10==0;n/=10)r--;for(n=l.d[0];n>=10;n/=10)r++}return e&&t>r?t:r};le.squareRoot=le.sqrt=function(){var e,t,r,n,l,s,d,p=this,h=p.constructor;if(p.s<1){if(!p.s)return new h(0);throw Error(Wr+"NaN")}for(e=bt(p),tt=!1,l=Math.sqrt(+p),l==0||l==1/0?(t=mn(p.d),(t.length+e)%2==0&&(t+="0"),l=Math.sqrt(t),e=zo((e+1)/2)-(e<0||e%2),l==1/0?t="5e"+e:(t=l.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),n=new h(t)):n=new h(l.toString()),r=h.precision,l=d=r+3;;)if(s=n,n=s.plus(Hn(p,s,d+2)).times(.5),mn(s.d).slice(0,d)===(t=mn(n.d)).slice(0,d)){if(t=t.slice(d-3,d+1),l==d&&t=="4999"){if(Xe(s,r+1,0),s.times(s).eq(p)){n=s;break}}else if(t!="9999")break;d+=4}return tt=!0,Xe(n,r)};le.times=le.mul=function(e){var t,r,n,l,s,d,p,h,m,g=this,x=g.constructor,w=g.d,j=(e=new x(e)).d;if(!g.s||!e.s)return new x(0);for(e.s*=g.s,r=g.e+e.e,h=w.length,m=j.length,h<m&&(s=w,w=j,j=s,d=h,h=m,m=d),s=[],d=h+m,n=d;n--;)s.push(0);for(n=m;--n>=0;){for(t=0,l=h+n;l>n;)p=s[l]+j[n]*w[l-n-1]+t,s[l--]=p%zt|0,t=p/zt|0;s[l]=(s[l]+t)%zt|0}for(;!s[--d];)s.pop();return t?++r:s.shift(),e.d=s,e.e=r,tt?Xe(e,x.precision):e};le.toDecimalPlaces=le.todp=function(e,t){var r=this,n=r.constructor;return r=new n(r),e===void 0?r:(yn(e,0,Do),t===void 0?t=n.rounding:yn(t,0,8),Xe(r,e+bt(r)+1,t))};le.toExponential=function(e,t){var r,n=this,l=n.constructor;return e===void 0?r=yi(n,!0):(yn(e,0,Do),t===void 0?t=l.rounding:yn(t,0,8),n=Xe(new l(n),e+1,t),r=yi(n,!0,e+1)),r};le.toFixed=function(e,t){var r,n,l=this,s=l.constructor;return e===void 0?yi(l):(yn(e,0,Do),t===void 0?t=s.rounding:yn(t,0,8),n=Xe(new s(l),e+bt(l)+1,t),r=yi(n.abs(),!1,e+bt(n)+1),l.isneg()&&!l.isZero()?"-"+r:r)};le.toInteger=le.toint=function(){var e=this,t=e.constructor;return Xe(new t(e),bt(e)+1,t.rounding)};le.toNumber=function(){return+this};le.toPower=le.pow=function(e){var t,r,n,l,s,d,p=this,h=p.constructor,m=12,g=+(e=new h(e));if(!e.s)return new h(Nr);if(p=new h(p),!p.s){if(e.s<1)throw Error(Wr+"Infinity");return p}if(p.eq(Nr))return p;if(n=h.precision,e.eq(Nr))return Xe(p,n);if(t=e.e,r=e.d.length-1,d=t>=r,s=p.s,d){if((r=g<0?-g:g)<=ZE){for(l=new h(Nr),t=Math.ceil(n/Je+4),tt=!1;r%2&&(l=l.times(p),Vj(l.d,t)),r=zo(r/2),r!==0;)p=p.times(p),Vj(p.d,t);return tt=!0,e.s<0?new h(Nr).div(l):Xe(l,n)}}else if(s<0)throw Error(Wr+"NaN");return s=s<0&&e.d[Math.max(t,r)]&1?-1:1,p.s=1,tt=!1,l=e.times(cs(p,n+m)),tt=!0,l=JE(l),l.s=s,l};le.toPrecision=function(e,t){var r,n,l=this,s=l.constructor;return e===void 0?(r=bt(l),n=yi(l,r<=s.toExpNeg||r>=s.toExpPos)):(yn(e,1,Do),t===void 0?t=s.rounding:yn(t,0,8),l=Xe(new s(l),e,t),r=bt(l),n=yi(l,e<=r||r<=s.toExpNeg,e)),n};le.toSignificantDigits=le.tosd=function(e,t){var r=this,n=r.constructor;return e===void 0?(e=n.precision,t=n.rounding):(yn(e,1,Do),t===void 0?t=n.rounding:yn(t,0,8)),Xe(new n(r),e,t)};le.toString=le.valueOf=le.val=le.toJSON=le[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=bt(e),r=e.constructor;return yi(e,t<=r.toExpNeg||t>=r.toExpPos)};function QE(e,t){var r,n,l,s,d,p,h,m,g=e.constructor,x=g.precision;if(!e.s||!t.s)return t.s||(t=new g(e)),tt?Xe(t,x):t;if(h=e.d,m=t.d,d=e.e,l=t.e,h=h.slice(),s=d-l,s){for(s<0?(n=h,s=-s,p=m.length):(n=m,l=d,p=h.length),d=Math.ceil(x/Je),p=d>p?d+1:p+1,s>p&&(s=p,n.length=1),n.reverse();s--;)n.push(0);n.reverse()}for(p=h.length,s=m.length,p-s<0&&(s=p,n=m,m=h,h=n),r=0;s;)r=(h[--s]=h[s]+m[s]+r)/zt|0,h[s]%=zt;for(r&&(h.unshift(r),++l),p=h.length;h[--p]==0;)h.pop();return t.d=h,t.e=l,tt?Xe(t,x):t}function yn(e,t,r){if(e!==~~e||e<t||e>r)throw Error(mi+e)}function mn(e){var t,r,n,l=e.length-1,s="",d=e[0];if(l>0){for(s+=d,t=1;t<l;t++)n=e[t]+"",r=Je-n.length,r&&(s+=Ca(r)),s+=n;d=e[t],n=d+"",r=Je-n.length,r&&(s+=Ca(r))}else if(d===0)return"0";for(;d%10===0;)d/=10;return s+d}var Hn=(function(){function e(n,l){var s,d=0,p=n.length;for(n=n.slice();p--;)s=n[p]*l+d,n[p]=s%zt|0,d=s/zt|0;return d&&n.unshift(d),n}function t(n,l,s,d){var p,h;if(s!=d)h=s>d?1:-1;else for(p=h=0;p<s;p++)if(n[p]!=l[p]){h=n[p]>l[p]?1:-1;break}return h}function r(n,l,s){for(var d=0;s--;)n[s]-=d,d=n[s]<l[s]?1:0,n[s]=d*zt+n[s]-l[s];for(;!n[0]&&n.length>1;)n.shift()}return function(n,l,s,d){var p,h,m,g,x,w,j,S,A,O,k,T,C,_,M,R,U,F,te=n.constructor,ie=n.s==l.s?1:-1,Z=n.d,J=l.d;if(!n.s)return new te(n);if(!l.s)throw Error(Wr+"Division by zero");for(h=n.e-l.e,U=J.length,M=Z.length,j=new te(ie),S=j.d=[],m=0;J[m]==(Z[m]||0);)++m;if(J[m]>(Z[m]||0)&&--h,s==null?T=s=te.precision:d?T=s+(bt(n)-bt(l))+1:T=s,T<0)return new te(0);if(T=T/Je+2|0,m=0,U==1)for(g=0,J=J[0],T++;(m<M||g)&&T--;m++)C=g*zt+(Z[m]||0),S[m]=C/J|0,g=C%J|0;else{for(g=zt/(J[0]+1)|0,g>1&&(J=e(J,g),Z=e(Z,g),U=J.length,M=Z.length),_=U,A=Z.slice(0,U),O=A.length;O<U;)A[O++]=0;F=J.slice(),F.unshift(0),R=J[0],J[1]>=zt/2&&++R;do g=0,p=t(J,A,U,O),p<0?(k=A[0],U!=O&&(k=k*zt+(A[1]||0)),g=k/R|0,g>1?(g>=zt&&(g=zt-1),x=e(J,g),w=x.length,O=A.length,p=t(x,A,w,O),p==1&&(g--,r(x,U<w?F:J,w))):(g==0&&(p=g=1),x=J.slice()),w=x.length,w<O&&x.unshift(0),r(A,x,O),p==-1&&(O=A.length,p=t(J,A,U,O),p<1&&(g++,r(A,U<O?F:J,O))),O=A.length):p===0&&(g++,A=[0]),S[m++]=g,p&&A[0]?A[O++]=Z[_]||0:(A=[Z[_]],O=1);while((_++<M||A[0]!==void 0)&&T--)}return S[0]||S.shift(),j.e=h,Xe(j,d?s+bt(j)+1:s)}})();function JE(e,t){var r,n,l,s,d,p,h=0,m=0,g=e.constructor,x=g.precision;if(bt(e)>16)throw Error(uv+bt(e));if(!e.s)return new g(Nr);for(tt=!1,p=x,d=new g(.03125);e.abs().gte(.1);)e=e.times(d),m+=5;for(n=Math.log(si(2,m))/Math.LN10*2+5|0,p+=n,r=l=s=new g(Nr),g.precision=p;;){if(l=Xe(l.times(e),p),r=r.times(++h),d=s.plus(Hn(l,r,p)),mn(d.d).slice(0,p)===mn(s.d).slice(0,p)){for(;m--;)s=Xe(s.times(s),p);return g.precision=x,t==null?(tt=!0,Xe(s,x)):s}s=d}}function bt(e){for(var t=e.e*Je,r=e.d[0];r>=10;r/=10)t++;return t}function qm(e,t,r){if(t>e.LN10.sd())throw tt=!0,r&&(e.precision=r),Error(Wr+"LN10 precision limit exceeded");return Xe(new e(e.LN10),t)}function Ca(e){for(var t="";e--;)t+="0";return t}function cs(e,t){var r,n,l,s,d,p,h,m,g,x=1,w=10,j=e,S=j.d,A=j.constructor,O=A.precision;if(j.s<1)throw Error(Wr+(j.s?"NaN":"-Infinity"));if(j.eq(Nr))return new A(0);if(t==null?(tt=!1,m=O):m=t,j.eq(10))return t==null&&(tt=!0),qm(A,m);if(m+=w,A.precision=m,r=mn(S),n=r.charAt(0),s=bt(j),Math.abs(s)<15e14){for(;n<7&&n!=1||n==1&&r.charAt(1)>3;)j=j.times(e),r=mn(j.d),n=r.charAt(0),x++;s=bt(j),n>1?(j=new A("0."+r),s++):j=new A(n+"."+r.slice(1))}else return h=qm(A,m+2,O).times(s+""),j=cs(new A(n+"."+r.slice(1)),m-w).plus(h),A.precision=O,t==null?(tt=!0,Xe(j,O)):j;for(p=d=j=Hn(j.minus(Nr),j.plus(Nr),m),g=Xe(j.times(j),m),l=3;;){if(d=Xe(d.times(g),m),h=p.plus(Hn(d,new A(l),m)),mn(h.d).slice(0,m)===mn(p.d).slice(0,m))return p=p.times(2),s!==0&&(p=p.plus(qm(A,m+2,O).times(s+""))),p=Hn(p,new A(x),m),A.precision=O,t==null?(tt=!0,Xe(p,O)):p;p=h,l+=2}}function Wj(e,t){var r,n,l;for((r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),n=0;t.charCodeAt(n)===48;)++n;for(l=t.length;t.charCodeAt(l-1)===48;)--l;if(t=t.slice(n,l),t){if(l-=n,r=r-n-1,e.e=zo(r/Je),e.d=[],n=(r+1)%Je,r<0&&(n+=Je),n<l){for(n&&e.d.push(+t.slice(0,n)),l-=Je;n<l;)e.d.push(+t.slice(n,n+=Je));t=t.slice(n),n=Je-t.length}else n-=l;for(;n--;)t+="0";if(e.d.push(+t),tt&&(e.e>Gu||e.e<-Gu))throw Error(uv+r)}else e.s=0,e.e=0,e.d=[0];return e}function Xe(e,t,r){var n,l,s,d,p,h,m,g,x=e.d;for(d=1,s=x[0];s>=10;s/=10)d++;if(n=t-d,n<0)n+=Je,l=t,m=x[g=0];else{if(g=Math.ceil((n+1)/Je),s=x.length,g>=s)return e;for(m=s=x[g],d=1;s>=10;s/=10)d++;n%=Je,l=n-Je+d}if(r!==void 0&&(s=si(10,d-l-1),p=m/s%10|0,h=t<0||x[g+1]!==void 0||m%s,h=r<4?(p||h)&&(r==0||r==(e.s<0?3:2)):p>5||p==5&&(r==4||h||r==6&&(n>0?l>0?m/si(10,d-l):0:x[g-1])%10&1||r==(e.s<0?8:7))),t<1||!x[0])return h?(s=bt(e),x.length=1,t=t-s-1,x[0]=si(10,(Je-t%Je)%Je),e.e=zo(-t/Je)||0):(x.length=1,x[0]=e.e=e.s=0),e;if(n==0?(x.length=g,s=1,g--):(x.length=g+1,s=si(10,Je-n),x[g]=l>0?(m/si(10,d-l)%si(10,l)|0)*s:0),h)for(;;)if(g==0){(x[0]+=s)==zt&&(x[0]=1,++e.e);break}else{if(x[g]+=s,x[g]!=zt)break;x[g--]=0,s=1}for(n=x.length;x[--n]===0;)x.pop();if(tt&&(e.e>Gu||e.e<-Gu))throw Error(uv+bt(e));return e}function e3(e,t){var r,n,l,s,d,p,h,m,g,x,w=e.constructor,j=w.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new w(e),tt?Xe(t,j):t;if(h=e.d,x=t.d,n=t.e,m=e.e,h=h.slice(),d=m-n,d){for(g=d<0,g?(r=h,d=-d,p=x.length):(r=x,n=m,p=h.length),l=Math.max(Math.ceil(j/Je),p)+2,d>l&&(d=l,r.length=1),r.reverse(),l=d;l--;)r.push(0);r.reverse()}else{for(l=h.length,p=x.length,g=l<p,g&&(p=l),l=0;l<p;l++)if(h[l]!=x[l]){g=h[l]<x[l];break}d=0}for(g&&(r=h,h=x,x=r,t.s=-t.s),p=h.length,l=x.length-p;l>0;--l)h[p++]=0;for(l=x.length;l>d;){if(h[--l]<x[l]){for(s=l;s&&h[--s]===0;)h[s]=zt-1;--h[s],h[l]+=zt}h[l]-=x[l]}for(;h[--p]===0;)h.pop();for(;h[0]===0;h.shift())--n;return h[0]?(t.d=h,t.e=n,tt?Xe(t,j):t):new w(0)}function yi(e,t,r){var n,l=bt(e),s=mn(e.d),d=s.length;return t?(r&&(n=r-d)>0?s=s.charAt(0)+"."+s.slice(1)+Ca(n):d>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(l<0?"e":"e+")+l):l<0?(s="0."+Ca(-l-1)+s,r&&(n=r-d)>0&&(s+=Ca(n))):l>=d?(s+=Ca(l+1-d),r&&(n=r-l-1)>0&&(s=s+"."+Ca(n))):((n=l+1)<d&&(s=s.slice(0,n)+"."+s.slice(n)),r&&(n=r-d)>0&&(l+1===d&&(s+="."),s+=Ca(n))),e.s<0?"-"+s:s}function Vj(e,t){if(e.length>t)return e.length=t,!0}function t3(e){var t,r,n;function l(s){var d=this;if(!(d instanceof l))return new l(s);if(d.constructor=l,s instanceof l){d.s=s.s,d.e=s.e,d.d=(s=s.d)?s.slice():s;return}if(typeof s=="number"){if(s*0!==0)throw Error(mi+s);if(s>0)d.s=1;else if(s<0)s=-s,d.s=-1;else{d.s=0,d.e=0,d.d=[0];return}if(s===~~s&&s<1e7){d.e=0,d.d=[s];return}return Wj(d,s.toString())}else if(typeof s!="string")throw Error(mi+s);if(s.charCodeAt(0)===45?(s=s.slice(1),d.s=-1):d.s=1,VL.test(s))Wj(d,s);else throw Error(mi+s)}if(l.prototype=le,l.ROUND_UP=0,l.ROUND_DOWN=1,l.ROUND_CEIL=2,l.ROUND_FLOOR=3,l.ROUND_HALF_UP=4,l.ROUND_HALF_DOWN=5,l.ROUND_HALF_EVEN=6,l.ROUND_HALF_CEIL=7,l.ROUND_HALF_FLOOR=8,l.clone=t3,l.config=l.set=XL,e===void 0&&(e={}),e)for(n=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<n.length;)e.hasOwnProperty(r=n[t++])||(e[r]=this[r]);return l.config(e),l}function XL(e){if(!e||typeof e!="object")throw Error(Wr+"Object expected");var t,r,n,l=["precision",1,Do,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<l.length;t+=3)if((n=e[r=l[t]])!==void 0)if(zo(n)===n&&n>=l[t+1]&&n<=l[t+2])this[r]=n;else throw Error(mi+r+": "+n);if((n=e[r="LN10"])!==void 0)if(n==Math.LN10)this[r]=new this(n);else throw Error(mi+r+": "+n);return this}var dv=t3(WL);Nr=new dv(1);const qe=dv;var FL=e=>e,r3={},n3=e=>e===r3,Xj=e=>function t(){return arguments.length===0||arguments.length===1&&n3(arguments.length<=0?void 0:arguments[0])?t:e(...arguments)},a3=(e,t)=>e===1?t:Xj(function(){for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];var s=n.filter(d=>d!==r3).length;return s>=e?t(...n):a3(e-s,Xj(function(){for(var d=arguments.length,p=new Array(d),h=0;h<d;h++)p[h]=arguments[h];var m=n.map(g=>n3(g)?p.shift():g);return t(...m,...p)}))}),Hd=e=>a3(e.length,e),$g=(e,t)=>{for(var r=[],n=e;n<t;++n)r[n-e]=n;return r},ZL=Hd((e,t)=>Array.isArray(t)?t.map(e):Object.keys(t).map(r=>t[r]).map(e)),QL=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(!r.length)return FL;var l=r.reverse(),s=l[0],d=l.slice(1);return function(){return d.reduce((p,h)=>h(p),s(...arguments))}},Ug=e=>Array.isArray(e)?e.reverse():e.split("").reverse().join(""),i3=e=>{var t=null,r=null;return function(){for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return t&&l.every((d,p)=>{var h;return d===((h=t)===null||h===void 0?void 0:h[p])})||(t=l,r=e(...l)),r}};function o3(e){var t;return e===0?t=1:t=Math.floor(new qe(e).abs().log(10).toNumber())+1,t}function l3(e,t,r){for(var n=new qe(e),l=0,s=[];n.lt(t)&&l<1e5;)s.push(n.toNumber()),n=n.add(r),l++;return s}Hd((e,t,r)=>{var n=+e,l=+t;return n+r*(l-n)});Hd((e,t,r)=>{var n=t-+e;return n=n||1/0,(r-e)/n});Hd((e,t,r)=>{var n=t-+e;return n=n||1/0,Math.max(0,Math.min(1,(r-e)/n))});var s3=e=>{var[t,r]=e,[n,l]=[t,r];return t>r&&([n,l]=[r,t]),[n,l]},c3=(e,t,r)=>{if(e.lte(0))return new qe(0);var n=o3(e.toNumber()),l=new qe(10).pow(n),s=e.div(l),d=n!==1?.05:.1,p=new qe(Math.ceil(s.div(d).toNumber())).add(r).mul(d),h=p.mul(l);return t?new qe(h.toNumber()):new qe(Math.ceil(h.toNumber()))},JL=(e,t,r)=>{var n=new qe(1),l=new qe(e);if(!l.isint()&&r){var s=Math.abs(e);s<1?(n=new qe(10).pow(o3(e)-1),l=new qe(Math.floor(l.div(n).toNumber())).mul(n)):s>1&&(l=new qe(Math.floor(e)))}else e===0?l=new qe(Math.floor((t-1)/2)):r||(l=new qe(Math.floor(e)));var d=Math.floor((t-1)/2),p=QL(ZL(h=>l.add(new qe(h-d).mul(n)).toNumber()),$g);return p(0,t)},u3=function(t,r,n,l){var s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((r-t)/(n-1)))return{step:new qe(0),tickMin:new qe(0),tickMax:new qe(0)};var d=c3(new qe(r).sub(t).div(n-1),l,s),p;t<=0&&r>=0?p=new qe(0):(p=new qe(t).add(r).div(2),p=p.sub(new qe(p).mod(d)));var h=Math.ceil(p.sub(t).div(d).toNumber()),m=Math.ceil(new qe(r).sub(p).div(d).toNumber()),g=h+m+1;return g>n?u3(t,r,n,l,s+1):(g<n&&(m=r>0?m+(n-g):m,h=r>0?h:h+(n-g)),{step:d,tickMin:p.sub(new qe(h).mul(d)),tickMax:p.add(new qe(m).mul(d))})};function eB(e){var[t,r]=e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(n,2),[d,p]=s3([t,r]);if(d===-1/0||p===1/0){var h=p===1/0?[d,...$g(0,n-1).map(()=>1/0)]:[...$g(0,n-1).map(()=>-1/0),p];return t>r?Ug(h):h}if(d===p)return JL(d,n,l);var{step:m,tickMin:g,tickMax:x}=u3(d,p,s,l,0),w=l3(g,x.add(new qe(.1).mul(m)),m);return t>r?Ug(w):w}function tB(e,t){var[r,n]=e,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,[s,d]=s3([r,n]);if(s===-1/0||d===1/0)return[r,n];if(s===d)return[s];var p=Math.max(t,2),h=c3(new qe(d).sub(s).div(p-1),l,0),m=[...l3(new qe(s),new qe(d),h),d];return l===!1&&(m=m.map(g=>Math.round(g))),r>n?Ug(m):m}var rB=i3(eB),nB=i3(tB),d3=e=>e.rootProps.maxBarSize,aB=e=>e.rootProps.barGap,f3=e=>e.rootProps.barCategoryGap,iB=e=>e.rootProps.barSize,Yd=e=>e.rootProps.stackOffset,fv=e=>e.options.chartName,pv=e=>e.rootProps.syncId,p3=e=>e.rootProps.syncMethod,hv=e=>e.options.eventEmitter,Rt={grid:-100,barBackground:-50,area:100,cursorRectangle:200,bar:300,line:400,axis:500,scatter:600,activeBar:1e3,cursorLine:1100,activeDot:1200,label:2e3},Ln={allowDuplicatedCategory:!0,angleAxisId:0,reversed:!1,scale:"auto",tick:!0,type:"category"},kr={allowDataOverflow:!1,allowDuplicatedCategory:!0,radiusAxisId:0,scale:"auto",tick:!0,tickCount:5,type:"number"},Gd=(e,t)=>{if(!(!e||!t))return e!=null&&e.reversed?[t[1],t[0]]:t},oB={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:!1,dataKey:void 0,domain:void 0,id:Ln.angleAxisId,includeHidden:!1,name:void 0,reversed:Ln.reversed,scale:Ln.scale,tick:Ln.tick,tickCount:void 0,ticks:void 0,type:Ln.type,unit:void 0},lB={allowDataOverflow:kr.allowDataOverflow,allowDecimals:!1,allowDuplicatedCategory:kr.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:kr.radiusAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:kr.scale,tick:kr.tick,tickCount:kr.tickCount,ticks:void 0,type:kr.type,unit:void 0},sB={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:Ln.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:Ln.angleAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:Ln.scale,tick:Ln.tick,tickCount:void 0,ticks:void 0,type:"number",unit:void 0},cB={allowDataOverflow:kr.allowDataOverflow,allowDecimals:!1,allowDuplicatedCategory:kr.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:kr.radiusAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:kr.scale,tick:kr.tick,tickCount:kr.tickCount,ticks:void 0,type:"category",unit:void 0},mv=(e,t)=>e.polarAxis.angleAxis[t]!=null?e.polarAxis.angleAxis[t]:e.layout.layoutType==="radial"?sB:oB,gv=(e,t)=>e.polarAxis.radiusAxis[t]!=null?e.polarAxis.radiusAxis[t]:e.layout.layoutType==="radial"?cB:lB,Kd=e=>e.polarOptions,vv=Y([Jn,ea,Bt],r9),h3=Y([Kd,vv],(e,t)=>{if(e!=null)return on(e.innerRadius,t,0)}),m3=Y([Kd,vv],(e,t)=>{if(e!=null)return on(e.outerRadius,t,t*.8)}),uB=e=>{if(e==null)return[0,0];var{startAngle:t,endAngle:r}=e;return[t,r]},g3=Y([Kd],uB);Y([mv,g3],Gd);var v3=Y([vv,h3,m3],(e,t,r)=>{if(!(e==null||t==null||r==null))return[t,r]});Y([gv,v3],Gd);var x3=Y([Re,Kd,h3,m3,Jn,ea],(e,t,r,n,l,s)=>{if(!(e!=="centric"&&e!=="radial"||t==null||r==null||n==null)){var{cx:d,cy:p,startAngle:h,endAngle:m}=t;return{cx:on(d,l,l/2),cy:on(p,s,s/2),innerRadius:r,outerRadius:n,startAngle:h,endAngle:m,clockWise:!1}}}),Et=(e,t)=>t,Wd=(e,t,r)=>r;function xv(e){return e?.id}function y3(e,t,r){var{chartData:n=[]}=t,{allowDuplicatedCategory:l,dataKey:s}=r,d=new Map;return e.forEach(p=>{var h,m=(h=p.data)!==null&&h!==void 0?h:n;if(!(m==null||m.length===0)){var g=xv(p);m.forEach((x,w)=>{var j=s==null||l?w:String(Lt(x,s,null)),S=Lt(x,p.dataKey,0),A;d.has(j)?A=d.get(j):A={},Object.assign(A,{[g]:S}),d.set(j,A)})}}),Array.from(d.values())}function Vd(e){return e.stackId!=null&&e.dataKey!=null}var Xd=(e,t)=>e===t?!0:e==null||t==null?!1:e[0]===t[0]&&e[1]===t[1];function Fd(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===0&&t.length===0?!0:e===t}function dB(e,t){if(e.length===t.length){for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return!1}var kt=e=>{var t=Re(e);return t==="horizontal"?"xAxis":t==="vertical"?"yAxis":t==="centric"?"angleAxis":"radiusAxis"},Ro=e=>e.tooltip.settings.axisId;function Fj(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function Ku(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Fj(Object(r),!0).forEach(function(n){fB(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fj(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function fB(e,t,r){return(t=pB(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pB(e){var t=hB(e,"string");return typeof t=="symbol"?t:t+""}function hB(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Hg=[0,"auto"],Or={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:void 0,height:30,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"bottom",padding:{left:0,right:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"category",unit:void 0},b3=(e,t)=>e.cartesianAxis.xAxis[t],ra=(e,t)=>{var r=b3(e,t);return r??Or},Er={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:Hg,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"left",padding:{top:0,bottom:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"number",unit:void 0,width:ys},w3=(e,t)=>e.cartesianAxis.yAxis[t],na=(e,t)=>{var r=w3(e,t);return r??Er},mB={domain:[0,"auto"],includeHidden:!1,reversed:!1,allowDataOverflow:!1,allowDuplicatedCategory:!1,dataKey:void 0,id:0,name:"",range:[64,64],scale:"auto",type:"number",unit:""},yv=(e,t)=>{var r=e.cartesianAxis.zAxis[t];return r??mB},ar=(e,t,r)=>{switch(t){case"xAxis":return ra(e,r);case"yAxis":return na(e,r);case"zAxis":return yv(e,r);case"angleAxis":return mv(e,r);case"radiusAxis":return gv(e,r);default:throw new Error("Unexpected axis type: ".concat(t))}},gB=(e,t,r)=>{switch(t){case"xAxis":return ra(e,r);case"yAxis":return na(e,r);default:throw new Error("Unexpected axis type: ".concat(t))}},Os=(e,t,r)=>{switch(t){case"xAxis":return ra(e,r);case"yAxis":return na(e,r);case"angleAxis":return mv(e,r);case"radiusAxis":return gv(e,r);default:throw new Error("Unexpected axis type: ".concat(t))}},j3=e=>e.graphicalItems.cartesianItems.some(t=>t.type==="bar")||e.graphicalItems.polarItems.some(t=>t.type==="radialBar");function S3(e,t){return r=>{switch(e){case"xAxis":return"xAxisId"in r&&r.xAxisId===t;case"yAxis":return"yAxisId"in r&&r.yAxisId===t;case"zAxis":return"zAxisId"in r&&r.zAxisId===t;case"angleAxis":return"angleAxisId"in r&&r.angleAxisId===t;case"radiusAxis":return"radiusAxisId"in r&&r.radiusAxisId===t;default:return!1}}}var Zd=e=>e.graphicalItems.cartesianItems,vB=Y([Et,Wd],S3),A3=(e,t,r)=>e.filter(r).filter(n=>t?.includeHidden===!0?!0:!n.hide),Es=Y([Zd,ar,vB],A3,{memoizeOptions:{resultEqualityCheck:Fd}}),O3=Y([Es],e=>e.filter(t=>t.type==="area"||t.type==="bar").filter(Vd)),E3=e=>e.filter(t=>!("stackId"in t)||t.stackId===void 0),xB=Y([Es],E3),k3=e=>e.map(t=>t.data).filter(Boolean).flat(1),yB=Y([Es],k3,{memoizeOptions:{resultEqualityCheck:Fd}}),N3=(e,t)=>{var{chartData:r=[],dataStartIndex:n,dataEndIndex:l}=t;return e.length>0?e:r.slice(n,l+1)},bv=Y([yB,Ud],N3),C3=(e,t,r)=>t?.dataKey!=null?e.map(n=>({value:Lt(n,t.dataKey)})):r.length>0?r.map(n=>n.dataKey).flatMap(n=>e.map(l=>({value:Lt(l,n)}))):e.map(n=>({value:n})),Qd=Y([bv,ar,Es],C3);function T3(e,t){switch(e){case"xAxis":return t.direction==="x";case"yAxis":return t.direction==="y";default:return!1}}function hu(e){if(vn(e)||e instanceof Date){var t=Number(e);if(mt(t))return t}}function Zj(e){if(Array.isArray(e)){var t=[hu(e[0]),hu(e[1])];return xi(t)?t:void 0}var r=hu(e);if(r!=null)return[r,r]}function Fn(e){return e.map(hu).filter(j_)}function bB(e,t,r){return!r||typeof t!="number"||an(t)?[]:r.length?Fn(r.flatMap(n=>{var l=Lt(e,n.dataKey),s,d;if(Array.isArray(l)?[s,d]=l:s=d=l,!(!mt(s)||!mt(d)))return[t-s,t+d]})):[]}var Nt=e=>{var t=kt(e),r=Ro(e);return Os(e,t,r)},M3=Y([Nt],e=>e?.dataKey),wB=Y([O3,Ud,Nt],y3),_3=(e,t,r)=>{var n={},l=t.reduce((s,d)=>(d.stackId==null||(s[d.stackId]==null&&(s[d.stackId]=[]),s[d.stackId].push(d)),s),n);return Object.fromEntries(Object.entries(l).map(s=>{var[d,p]=s,h=p.map(xv);return[d,{stackedData:GD(e,h,r),graphicalItems:p}]}))},Yg=Y([wB,O3,Yd],_3),P3=(e,t,r,n)=>{var{dataStartIndex:l,dataEndIndex:s}=t;if(n==null&&r!=="zAxis"){var d=FD(e,l,s);if(!(d!=null&&d[0]===0&&d[1]===0))return d}},jB=Y([ar],e=>e.allowDataOverflow),wv=e=>{var t;if(e==null||!("domain"in e))return Hg;if(e.domain!=null)return e.domain;if(e.ticks!=null){if(e.type==="number"){var r=Fn(e.ticks);return[Math.min(...r),Math.max(...r)]}if(e.type==="category")return e.ticks.map(String)}return(t=e?.domain)!==null&&t!==void 0?t:Hg},D3=Y([ar],wv),z3=Y([D3,jB],FE),SB=Y([Yg,Ba,Et,z3],P3,{memoizeOptions:{resultEqualityCheck:Xd}}),jv=e=>e.errorBars,AB=(e,t,r)=>e.flatMap(n=>t[n.id]).filter(Boolean).filter(n=>T3(r,n)),Wu=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var l=r.filter(Boolean);if(l.length!==0){var s=l.flat(),d=Math.min(...s),p=Math.max(...s);return[d,p]}},R3=(e,t,r,n,l)=>{var s,d;if(r.length>0&&e.forEach(p=>{r.forEach(h=>{var m,g,x=(m=n[h.id])===null||m===void 0?void 0:m.filter(k=>T3(l,k)),w=Lt(p,(g=t.dataKey)!==null&&g!==void 0?g:h.dataKey),j=bB(p,w,x);if(j.length>=2){var S=Math.min(...j),A=Math.max(...j);(s==null||S<s)&&(s=S),(d==null||A>d)&&(d=A)}var O=Zj(w);O!=null&&(s=s==null?O[0]:Math.min(s,O[0]),d=d==null?O[1]:Math.max(d,O[1]))})}),t?.dataKey!=null&&e.forEach(p=>{var h=Zj(Lt(p,t.dataKey));h!=null&&(s=s==null?h[0]:Math.min(s,h[0]),d=d==null?h[1]:Math.max(d,h[1]))}),mt(s)&&mt(d))return[s,d]},OB=Y([bv,ar,xB,jv,Et],R3,{memoizeOptions:{resultEqualityCheck:Xd}});function EB(e){var{value:t}=e;if(vn(t)||t instanceof Date)return t}var kB=(e,t,r)=>{var n=e.map(EB).filter(l=>l!=null);return r&&(t.dataKey==null||t.allowDuplicatedCategory&&nO(n))?mE(0,e.length):t.allowDuplicatedCategory?n:Array.from(new Set(n))},L3=e=>e.referenceElements.dots,Lo=(e,t,r)=>e.filter(n=>n.ifOverflow==="extendDomain").filter(n=>t==="xAxis"?n.xAxisId===r:n.yAxisId===r),NB=Y([L3,Et,Wd],Lo),B3=e=>e.referenceElements.areas,CB=Y([B3,Et,Wd],Lo),I3=e=>e.referenceElements.lines,TB=Y([I3,Et,Wd],Lo),q3=(e,t)=>{var r=Fn(e.map(n=>t==="xAxis"?n.x:n.y));if(r.length!==0)return[Math.min(...r),Math.max(...r)]},MB=Y(NB,Et,q3),$3=(e,t)=>{var r=Fn(e.flatMap(n=>[t==="xAxis"?n.x1:n.y1,t==="xAxis"?n.x2:n.y2]));if(r.length!==0)return[Math.min(...r),Math.max(...r)]},_B=Y([CB,Et],$3);function PB(e){var t;if(e.x!=null)return Fn([e.x]);var r=(t=e.segment)===null||t===void 0?void 0:t.map(n=>n.x);return r==null||r.length===0?[]:Fn(r)}function DB(e){var t;if(e.y!=null)return Fn([e.y]);var r=(t=e.segment)===null||t===void 0?void 0:t.map(n=>n.y);return r==null||r.length===0?[]:Fn(r)}var U3=(e,t)=>{var r=e.flatMap(n=>t==="xAxis"?PB(n):DB(n));if(r.length!==0)return[Math.min(...r),Math.max(...r)]},zB=Y([TB,Et],U3),RB=Y(MB,zB,_B,(e,t,r)=>Wu(e,r,t)),H3=(e,t,r,n,l,s,d,p)=>{if(r!=null)return r;var h=d==="vertical"&&p==="xAxis"||d==="horizontal"&&p==="yAxis",m=h?Wu(n,s,l):Wu(s,l);return KL(t,m,e.allowDataOverflow)},LB=Y([ar,D3,z3,SB,OB,RB,Re,Et],H3,{memoizeOptions:{resultEqualityCheck:Xd}}),BB=[0,1],Y3=(e,t,r,n,l,s,d)=>{if(!((e==null||r==null||r.length===0)&&d===void 0)){var{dataKey:p,type:h}=e,m=za(t,s);if(m&&p==null){var g;return mE(0,(g=r?.length)!==null&&g!==void 0?g:0)}return h==="category"?kB(n,e,m):l==="expand"?BB:d}},Sv=Y([ar,Re,bv,Qd,Yd,Et,LB],Y3),G3=(e,t,r,n,l)=>{if(e!=null){var{scale:s,type:d}=e;if(s==="auto")return t==="radial"&&l==="radiusAxis"?"band":t==="radial"&&l==="angleAxis"?"linear":d==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0||n.indexOf("ComposedChart")>=0&&!r)?"point":d==="category"?"band":"linear";if(typeof s=="string"){var p="scale".concat(gs(s));return p in Fl?p:"point"}}},ks=Y([ar,Re,j3,fv,Et],G3);function IB(e){if(e!=null){if(e in Fl)return Fl[e]();var t="scale".concat(gs(e));if(t in Fl)return Fl[t]()}}function Av(e,t,r,n){if(!(r==null||n==null)){if(typeof e.scale=="function")return e.scale.copy().domain(r).range(n);var l=IB(t);if(l!=null){var s=l.domain(r).range(n);return qD(s),s}}}var K3=(e,t,r)=>{var n=wv(t);if(!(r!=="auto"&&r!=="linear")){if(t!=null&&t.tickCount&&Array.isArray(n)&&(n[0]==="auto"||n[1]==="auto")&&xi(e))return rB(e,t.tickCount,t.allowDecimals);if(t!=null&&t.tickCount&&t.type==="number"&&xi(e))return nB(e,t.tickCount,t.allowDecimals)}},Ov=Y([Sv,Os,ks],K3),W3=(e,t,r,n)=>{if(n!=="angleAxis"&&e?.type==="number"&&xi(t)&&Array.isArray(r)&&r.length>0){var l=t[0],s=r[0],d=t[1],p=r[r.length-1];return[Math.min(l,s),Math.max(d,p)]}return t},qB=Y([ar,Sv,Ov,Et],W3),$B=Y(Qd,ar,(e,t)=>{if(!(!t||t.type!=="number")){var r=1/0,n=Array.from(Fn(e.map(p=>p.value))).sort((p,h)=>p-h);if(n.length<2)return 1/0;var l=n[n.length-1]-n[0];if(l===0)return 1/0;for(var s=0;s<n.length-1;s++){var d=n[s+1]-n[s];r=Math.min(r,d)}return r/l}}),V3=Y($B,Re,f3,Bt,(e,t,r,n)=>n,(e,t,r,n,l)=>{if(!mt(e))return 0;var s=t==="vertical"?n.height:n.width;if(l==="gap")return e*s/2;if(l==="no-gap"){var d=on(r,e*s),p=e*s/2;return p-d-(p-d)/s*d}return 0}),UB=(e,t)=>{var r=ra(e,t);return r==null||typeof r.padding!="string"?0:V3(e,"xAxis",t,r.padding)},HB=(e,t)=>{var r=na(e,t);return r==null||typeof r.padding!="string"?0:V3(e,"yAxis",t,r.padding)},YB=Y(ra,UB,(e,t)=>{var r,n;if(e==null)return{left:0,right:0};var{padding:l}=e;return typeof l=="string"?{left:t,right:t}:{left:((r=l.left)!==null&&r!==void 0?r:0)+t,right:((n=l.right)!==null&&n!==void 0?n:0)+t}}),GB=Y(na,HB,(e,t)=>{var r,n;if(e==null)return{top:0,bottom:0};var{padding:l}=e;return typeof l=="string"?{top:t,bottom:t}:{top:((r=l.top)!==null&&r!==void 0?r:0)+t,bottom:((n=l.bottom)!==null&&n!==void 0?n:0)+t}}),KB=Y([Bt,YB,Md,Td,(e,t,r)=>r],(e,t,r,n,l)=>{var{padding:s}=n;return l?[s.left,r.width-s.right]:[e.left+t.left,e.left+e.width-t.right]}),WB=Y([Bt,Re,GB,Md,Td,(e,t,r)=>r],(e,t,r,n,l,s)=>{var{padding:d}=l;return s?[n.height-d.bottom,d.top]:t==="horizontal"?[e.top+e.height-r.bottom,e.top+r.top]:[e.top+r.top,e.top+e.height-r.bottom]}),Ns=(e,t,r,n)=>{var l;switch(t){case"xAxis":return KB(e,r,n);case"yAxis":return WB(e,r,n);case"zAxis":return(l=yv(e,r))===null||l===void 0?void 0:l.range;case"angleAxis":return g3(e);case"radiusAxis":return v3(e,r);default:return}},X3=Y([ar,Ns],Gd),Bo=Y([ar,ks,qB,X3],Av);Y([Es,jv,Et],AB);function F3(e,t){return e.id<t.id?-1:e.id>t.id?1:0}var Jd=(e,t)=>t,ef=(e,t,r)=>r,VB=Y(Nd,Jd,ef,(e,t,r)=>e.filter(n=>n.orientation===t).filter(n=>n.mirror===r).sort(F3)),XB=Y(Cd,Jd,ef,(e,t,r)=>e.filter(n=>n.orientation===t).filter(n=>n.mirror===r).sort(F3)),Z3=(e,t)=>({width:e.width,height:t.height}),FB=(e,t)=>{var r=typeof t.width=="number"?t.width:ys;return{width:r,height:e.height}},Q3=Y(Bt,ra,Z3),ZB=(e,t,r)=>{switch(t){case"top":return e.top;case"bottom":return r-e.bottom;default:return 0}},QB=(e,t,r)=>{switch(t){case"left":return e.left;case"right":return r-e.right;default:return 0}},JB=Y(ea,Bt,VB,Jd,ef,(e,t,r,n,l)=>{var s={},d;return r.forEach(p=>{var h=Z3(t,p);d==null&&(d=ZB(t,n,e));var m=n==="top"&&!l||n==="bottom"&&l;s[p.id]=d-Number(m)*h.height,d+=(m?-1:1)*h.height}),s}),eI=Y(Jn,Bt,XB,Jd,ef,(e,t,r,n,l)=>{var s={},d;return r.forEach(p=>{var h=FB(t,p);d==null&&(d=QB(t,n,e));var m=n==="left"&&!l||n==="right"&&l;s[p.id]=d-Number(m)*h.width,d+=(m?-1:1)*h.width}),s}),tI=(e,t)=>{var r=ra(e,t);if(r!=null)return JB(e,r.orientation,r.mirror)},rI=Y([Bt,ra,tI,(e,t)=>t],(e,t,r,n)=>{if(t!=null){var l=r?.[n];return l==null?{x:e.left,y:0}:{x:e.left,y:l}}}),nI=(e,t)=>{var r=na(e,t);if(r!=null)return eI(e,r.orientation,r.mirror)},aI=Y([Bt,na,nI,(e,t)=>t],(e,t,r,n)=>{if(t!=null){var l=r?.[n];return l==null?{x:0,y:e.top}:{x:l,y:e.top}}}),J3=Y(Bt,na,(e,t)=>{var r=typeof t.width=="number"?t.width:ys;return{width:r,height:e.height}}),Qj=(e,t,r)=>{switch(t){case"xAxis":return Q3(e,r).width;case"yAxis":return J3(e,r).height;default:return}},ek=(e,t,r,n)=>{if(r!=null){var{allowDuplicatedCategory:l,type:s,dataKey:d}=r,p=za(e,n),h=t.map(m=>m.value);if(d&&p&&s==="category"&&l&&nO(h))return h}},Ev=Y([Re,Qd,ar,Et],ek),tk=(e,t,r,n)=>{if(!(r==null||r.dataKey==null)){var{type:l,scale:s}=r,d=za(e,n);if(d&&(l==="number"||s!=="auto"))return t.map(p=>p.value)}},kv=Y([Re,Qd,Os,Et],tk),Jj=Y([Re,gB,ks,Bo,Ev,kv,Ns,Ov,Et],(e,t,r,n,l,s,d,p,h)=>{if(t!=null){var m=za(e,h);return{angle:t.angle,interval:t.interval,minTickGap:t.minTickGap,orientation:t.orientation,tick:t.tick,tickCount:t.tickCount,tickFormatter:t.tickFormatter,ticks:t.ticks,type:t.type,unit:t.unit,axisType:h,categoricalDomain:s,duplicateDomain:l,isCategorical:m,niceTicks:p,range:d,realScaleType:r,scale:n}}}),iI=(e,t,r,n,l,s,d,p,h)=>{if(!(t==null||n==null)){var m=za(e,h),{type:g,ticks:x,tickCount:w}=t,j=r==="scaleBand"&&typeof n.bandwidth=="function"?n.bandwidth()/2:2,S=g==="category"&&n.bandwidth?n.bandwidth()/j:0;S=h==="angleAxis"&&s!=null&&s.length>=2?pr(s[0]-s[1])*2*S:S;var A=x||l;if(A){var O=A.map((k,T)=>{var C=d?d.indexOf(k):k;return{index:T,coordinate:n(C)+S,value:k,offset:S}});return O.filter(k=>mt(k.coordinate))}return m&&p?p.map((k,T)=>({coordinate:n(k)+S,value:k,index:T,offset:S})).filter(k=>mt(k.coordinate)):n.ticks?n.ticks(w).map(k=>({coordinate:n(k)+S,value:k,offset:S})):n.domain().map((k,T)=>({coordinate:n(k)+S,value:d?d[k]:k,index:T,offset:S}))}},rk=Y([Re,Os,ks,Bo,Ov,Ns,Ev,kv,Et],iI),oI=(e,t,r,n,l,s,d)=>{if(!(t==null||r==null||n==null||n[0]===n[1])){var p=za(e,d),{tickCount:h}=t,m=0;return m=d==="angleAxis"&&n?.length>=2?pr(n[0]-n[1])*2*m:m,p&&s?s.map((g,x)=>({coordinate:r(g)+m,value:g,index:x,offset:m})):r.ticks?r.ticks(h).map(g=>({coordinate:r(g)+m,value:g,offset:m})):r.domain().map((g,x)=>({coordinate:r(g)+m,value:l?l[g]:g,index:x,offset:m}))}},Pa=Y([Re,Os,Bo,Ns,Ev,kv,Et],oI),Da=Y(ar,Bo,(e,t)=>{if(!(e==null||t==null))return Ku(Ku({},e),{},{scale:t})}),lI=Y([ar,ks,Sv,X3],Av);Y((e,t,r)=>yv(e,r),lI,(e,t)=>{if(!(e==null||t==null))return Ku(Ku({},e),{},{scale:t})});var sI=Y([Re,Nd,Cd],(e,t,r)=>{switch(e){case"horizontal":return t.some(n=>n.reversed)?"right-to-left":"left-to-right";case"vertical":return r.some(n=>n.reversed)?"bottom-to-top":"top-to-bottom";case"centric":case"radial":return"left-to-right";default:return}}),nk=e=>e.options.defaultTooltipEventType,ak=e=>e.options.validateTooltipEventTypes;function ik(e,t,r){if(e==null)return t;var n=e?"axis":"item";return r==null?t:r.includes(n)?n:t}function Nv(e,t){var r=nk(e),n=ak(e);return ik(t,r,n)}function cI(e){return fe(t=>Nv(t,e))}var ok=(e,t)=>{var r,n=Number(t);if(!(an(n)||t==null))return n>=0?e==null||(r=e[n])===null||r===void 0?void 0:r.value:void 0},uI=e=>e.tooltip.settings,Ma={active:!1,index:null,dataKey:void 0,coordinate:void 0},dI={itemInteraction:{click:Ma,hover:Ma},axisInteraction:{click:Ma,hover:Ma},keyboardInteraction:Ma,syncInteraction:{active:!1,index:null,dataKey:void 0,label:void 0,coordinate:void 0,sourceViewBox:void 0},tooltipItemPayloads:[],settings:{shared:void 0,trigger:"hover",axisId:0,active:!1,defaultIndex:void 0}},lk=mr({name:"tooltip",initialState:dI,reducers:{addTooltipEntrySettings:{reducer(e,t){e.tooltipItemPayloads.push(t.payload)},prepare:At()},removeTooltipEntrySettings:{reducer(e,t){var r=Un(e).tooltipItemPayloads.indexOf(t.payload);r>-1&&e.tooltipItemPayloads.splice(r,1)},prepare:At()},setTooltipSettingsState(e,t){e.settings=t.payload},setActiveMouseOverItemIndex(e,t){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.itemInteraction.hover.active=!0,e.itemInteraction.hover.index=t.payload.activeIndex,e.itemInteraction.hover.dataKey=t.payload.activeDataKey,e.itemInteraction.hover.coordinate=t.payload.activeCoordinate},mouseLeaveChart(e){e.itemInteraction.hover.active=!1,e.axisInteraction.hover.active=!1},mouseLeaveItem(e){e.itemInteraction.hover.active=!1},setActiveClickItemIndex(e,t){e.syncInteraction.active=!1,e.itemInteraction.click.active=!0,e.keyboardInteraction.active=!1,e.itemInteraction.click.index=t.payload.activeIndex,e.itemInteraction.click.dataKey=t.payload.activeDataKey,e.itemInteraction.click.coordinate=t.payload.activeCoordinate},setMouseOverAxisIndex(e,t){e.syncInteraction.active=!1,e.axisInteraction.hover.active=!0,e.keyboardInteraction.active=!1,e.axisInteraction.hover.index=t.payload.activeIndex,e.axisInteraction.hover.dataKey=t.payload.activeDataKey,e.axisInteraction.hover.coordinate=t.payload.activeCoordinate},setMouseClickAxisIndex(e,t){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.axisInteraction.click.active=!0,e.axisInteraction.click.index=t.payload.activeIndex,e.axisInteraction.click.dataKey=t.payload.activeDataKey,e.axisInteraction.click.coordinate=t.payload.activeCoordinate},setSyncInteraction(e,t){e.syncInteraction=t.payload},setKeyboardInteraction(e,t){e.keyboardInteraction.active=t.payload.active,e.keyboardInteraction.index=t.payload.activeIndex,e.keyboardInteraction.coordinate=t.payload.activeCoordinate,e.keyboardInteraction.dataKey=t.payload.activeDataKey}}}),{addTooltipEntrySettings:fI,removeTooltipEntrySettings:pI,setTooltipSettingsState:hI,setActiveMouseOverItemIndex:sk,mouseLeaveItem:mI,mouseLeaveChart:ck,setActiveClickItemIndex:gI,setMouseOverAxisIndex:uk,setMouseClickAxisIndex:vI,setSyncInteraction:Gg,setKeyboardInteraction:Kg}=lk.actions,xI=lk.reducer;function eS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function lu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?eS(Object(r),!0).forEach(function(n){yI(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function yI(e,t,r){return(t=bI(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bI(e){var t=wI(e,"string");return typeof t=="symbol"?t:t+""}function wI(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jI(e,t,r){return t==="axis"?r==="click"?e.axisInteraction.click:e.axisInteraction.hover:r==="click"?e.itemInteraction.click:e.itemInteraction.hover}function SI(e){return e.index!=null}var dk=(e,t,r,n)=>{if(t==null)return Ma;var l=jI(e,t,r);if(l==null)return Ma;if(l.active)return l;if(e.keyboardInteraction.active)return e.keyboardInteraction;if(e.syncInteraction.active&&e.syncInteraction.index!=null)return e.syncInteraction;var s=e.settings.active===!0;if(SI(l)){if(s)return lu(lu({},l),{},{active:!0})}else if(n!=null)return{active:!0,coordinate:void 0,dataKey:void 0,index:n};return lu(lu({},Ma),{},{coordinate:l.coordinate})},Cv=(e,t)=>{var r=e?.index;if(r==null)return null;var n=Number(r);if(!mt(n))return r;var l=0,s=1/0;return t.length>0&&(s=t.length-1),String(Math.max(l,Math.min(n,s)))},fk=(e,t,r,n,l,s,d,p)=>{if(!(s==null||p==null)){var h=d[0],m=h==null?void 0:p(h.positions,s);if(m!=null)return m;var g=l?.[Number(s)];if(g)switch(r){case"horizontal":return{x:g.coordinate,y:(n.top+t)/2};default:return{x:(n.left+e)/2,y:g.coordinate}}}},pk=(e,t,r,n)=>{if(t==="axis")return e.tooltipItemPayloads;if(e.tooltipItemPayloads.length===0)return[];var l;return r==="hover"?l=e.itemInteraction.hover.dataKey:l=e.itemInteraction.click.dataKey,l==null&&n!=null?[e.tooltipItemPayloads[0]]:e.tooltipItemPayloads.filter(s=>{var d;return((d=s.settings)===null||d===void 0?void 0:d.dataKey)===l})},Cs=e=>e.options.tooltipPayloadSearcher,Io=e=>e.tooltip;function tS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function rS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?tS(Object(r),!0).forEach(function(n){AI(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function AI(e,t,r){return(t=OI(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function OI(e){var t=EI(e,"string");return typeof t=="symbol"?t:t+""}function EI(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function kI(e,t){return e??t}var hk=(e,t,r,n,l,s,d)=>{if(!(t==null||s==null)){var{chartData:p,computedData:h,dataStartIndex:m,dataEndIndex:g}=r,x=[];return e.reduce((w,j)=>{var S,{dataDefinedOnItem:A,settings:O}=j,k=kI(A,p),T=Array.isArray(k)?VO(k,m,g):k,C=(S=O?.dataKey)!==null&&S!==void 0?S:n,_=O?.nameKey,M;if(n&&Array.isArray(T)&&!Array.isArray(T[0])&&d==="axis"?M=aO(T,n,l):M=s(T,t,h,_),Array.isArray(M))M.forEach(U=>{var F=rS(rS({},O),{},{name:U.name,unit:U.unit,color:void 0,fill:void 0});w.push(N2({tooltipEntrySettings:F,dataKey:U.dataKey,payload:U.payload,value:Lt(U.payload,U.dataKey),name:U.name}))});else{var R;w.push(N2({tooltipEntrySettings:O,dataKey:C,payload:M,value:Lt(M,C),name:(R=Lt(M,_))!==null&&R!==void 0?R:O?.name}))}return w},x)}},Tv=Y([Nt,Re,j3,fv,kt],G3),NI=Y([e=>e.graphicalItems.cartesianItems,e=>e.graphicalItems.polarItems],(e,t)=>[...e,...t]),CI=Y([kt,Ro],S3),Ts=Y([NI,Nt,CI],A3,{memoizeOptions:{resultEqualityCheck:Fd}}),TI=Y([Ts],e=>e.filter(Vd)),MI=Y([Ts],k3,{memoizeOptions:{resultEqualityCheck:Fd}}),qo=Y([MI,Ba],N3),_I=Y([TI,Ba,Nt],y3),Mv=Y([qo,Nt,Ts],C3),mk=Y([Nt],wv),PI=Y([Nt],e=>e.allowDataOverflow),gk=Y([mk,PI],FE),DI=Y([Ts],e=>e.filter(Vd)),zI=Y([_I,DI,Yd],_3),RI=Y([zI,Ba,kt,gk],P3),LI=Y([Ts],E3),BI=Y([qo,Nt,LI,jv,kt],R3,{memoizeOptions:{resultEqualityCheck:Xd}}),II=Y([L3,kt,Ro],Lo),qI=Y([II,kt],q3),$I=Y([B3,kt,Ro],Lo),UI=Y([$I,kt],$3),HI=Y([I3,kt,Ro],Lo),YI=Y([HI,kt],U3),GI=Y([qI,YI,UI],Wu),KI=Y([Nt,mk,gk,RI,BI,GI,Re,kt],H3),vk=Y([Nt,Re,qo,Mv,Yd,kt,KI],Y3),WI=Y([vk,Nt,Tv],K3),VI=Y([Nt,vk,WI,kt],W3),xk=e=>{var t=kt(e),r=Ro(e),n=!1;return Ns(e,t,r,n)},yk=Y([Nt,xk],Gd),bk=Y([Nt,Tv,VI,yk],Av),XI=Y([Re,Mv,Nt,kt],ek),FI=Y([Re,Mv,Nt,kt],tk),ZI=(e,t,r,n,l,s,d,p)=>{if(t){var{type:h}=t,m=za(e,p);if(n){var g=r==="scaleBand"&&n.bandwidth?n.bandwidth()/2:2,x=h==="category"&&n.bandwidth?n.bandwidth()/g:0;return x=p==="angleAxis"&&l!=null&&l?.length>=2?pr(l[0]-l[1])*2*x:x,m&&d?d.map((w,j)=>({coordinate:n(w)+x,value:w,index:j,offset:x})):n.domain().map((w,j)=>({coordinate:n(w)+x,value:s?s[w]:w,index:j,offset:x}))}}},aa=Y([Re,Nt,Tv,bk,xk,XI,FI,kt],ZI),_v=Y([nk,ak,uI],(e,t,r)=>ik(r.shared,e,t)),wk=e=>e.tooltip.settings.trigger,Pv=e=>e.tooltip.settings.defaultIndex,tf=Y([Io,_v,wk,Pv],dk),bi=Y([tf,qo],Cv),jk=Y([aa,bi],ok),Sk=Y([tf],e=>{if(e)return e.dataKey}),Ak=Y([Io,_v,wk,Pv],pk),QI=Y([Jn,ea,Re,Bt,aa,Pv,Ak,Cs],fk),JI=Y([tf,QI],(e,t)=>e!=null&&e.coordinate?e.coordinate:t),eq=Y([tf],e=>e.active),tq=Y([Ak,bi,Ba,M3,jk,Cs,_v],hk),rq=Y([tq],e=>{if(e!=null){var t=e.map(r=>r.payload).filter(r=>r!=null);return Array.from(new Set(t))}});function nS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function aS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?nS(Object(r),!0).forEach(function(n){nq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function nq(e,t,r){return(t=aq(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function aq(e){var t=iq(e,"string");return typeof t=="symbol"?t:t+""}function iq(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var oq=()=>fe(Nt),lq=()=>{var e=oq(),t=fe(aa),r=fe(bk);return jo(!e||!r?void 0:aS(aS({},e),{},{scale:r}),t)};function iS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function ho(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?iS(Object(r),!0).forEach(function(n){sq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):iS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function sq(e,t,r){return(t=cq(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function cq(e){var t=uq(e,"string");return typeof t=="symbol"?t:t+""}function uq(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var dq=(e,t,r,n)=>{var l=t.find(s=>s&&s.index===r);if(l){if(e==="horizontal")return{x:l.coordinate,y:n.chartY};if(e==="vertical")return{x:n.chartX,y:l.coordinate}}return{x:0,y:0}},fq=(e,t,r,n)=>{var l=t.find(m=>m&&m.index===r);if(l){if(e==="centric"){var s=l.coordinate,{radius:d}=n;return ho(ho(ho({},n),Yt(n.cx,n.cy,d,s)),{},{angle:s,radius:d})}var p=l.coordinate,{angle:h}=n;return ho(ho(ho({},n),Yt(n.cx,n.cy,p,h)),{},{angle:h,radius:p})}return{angle:0,clockWise:!1,cx:0,cy:0,endAngle:0,innerRadius:0,outerRadius:0,radius:0,startAngle:0,x:0,y:0}};function pq(e,t){var{chartX:r,chartY:n}=e;return r>=t.left&&r<=t.left+t.width&&n>=t.top&&n<=t.top+t.height}var Ok=(e,t,r,n,l)=>{var s,d=-1,p=(s=t?.length)!==null&&s!==void 0?s:0;if(p<=1||e==null)return 0;if(n==="angleAxis"&&l!=null&&Math.abs(Math.abs(l[1]-l[0])-360)<=1e-6)for(var h=0;h<p;h++){var m=h>0?r[h-1].coordinate:r[p-1].coordinate,g=r[h].coordinate,x=h>=p-1?r[0].coordinate:r[h+1].coordinate,w=void 0;if(pr(g-m)!==pr(x-g)){var j=[];if(pr(x-g)===pr(l[1]-l[0])){w=x;var S=g+l[1]-l[0];j[0]=Math.min(S,(S+m)/2),j[1]=Math.max(S,(S+m)/2)}else{w=m;var A=x+l[1]-l[0];j[0]=Math.min(g,(A+g)/2),j[1]=Math.max(g,(A+g)/2)}var O=[Math.min(g,(w+g)/2),Math.max(g,(w+g)/2)];if(e>O[0]&&e<=O[1]||e>=j[0]&&e<=j[1]){({index:d}=r[h]);break}}else{var k=Math.min(m,x),T=Math.max(m,x);if(e>(k+g)/2&&e<=(T+g)/2){({index:d}=r[h]);break}}}else if(t){for(var C=0;C<p;C++)if(C===0&&e<=(t[C].coordinate+t[C+1].coordinate)/2||C>0&&C<p-1&&e>(t[C].coordinate+t[C-1].coordinate)/2&&e<=(t[C].coordinate+t[C+1].coordinate)/2||C===p-1&&e>(t[C].coordinate+t[C-1].coordinate)/2){({index:d}=t[C]);break}}return d},hq=()=>fe(fv),Dv=(e,t)=>t,Ek=(e,t,r)=>r,zv=(e,t,r,n)=>n,mq=Y(aa,e=>wd(e,t=>t.coordinate)),Rv=Y([Io,Dv,Ek,zv],dk),kk=Y([Rv,qo],Cv),gq=(e,t,r)=>{if(t!=null){var n=Io(e);return t==="axis"?r==="hover"?n.axisInteraction.hover.dataKey:n.axisInteraction.click.dataKey:r==="hover"?n.itemInteraction.hover.dataKey:n.itemInteraction.click.dataKey}},Nk=Y([Io,Dv,Ek,zv],pk),Vu=Y([Jn,ea,Re,Bt,aa,zv,Nk,Cs],fk),vq=Y([Rv,Vu],(e,t)=>{var r;return(r=e.coordinate)!==null&&r!==void 0?r:t}),Ck=Y([aa,kk],ok),xq=Y([Nk,kk,Ba,M3,Ck,Cs,Dv],hk),yq=Y([Rv],e=>({isActive:e.active,activeIndex:e.index})),bq=(e,t,r,n,l,s,d)=>{if(!(!e||!r||!n||!l)&&pq(e,d)){var p=ZD(e,t),h=Ok(p,s,l,r,n),m=dq(t,l,h,e);return{activeIndex:String(h),activeCoordinate:m}}},wq=(e,t,r,n,l,s,d)=>{if(!(!e||!n||!l||!s||!r)){var p=l9(e,r);if(p){var h=QD(p,t),m=Ok(h,d,s,n,l),g=fq(t,s,m,p);return{activeIndex:String(m),activeCoordinate:g}}}},jq=(e,t,r,n,l,s,d,p)=>{if(!(!e||!t||!n||!l||!s))return t==="horizontal"||t==="vertical"?bq(e,t,n,l,s,d,p):wq(e,t,r,n,l,s,d)},Sq=Y(e=>e.zIndex.zIndexMap,(e,t)=>t,(e,t,r)=>r,(e,t,r)=>{if(t!=null){var n=e[t];if(n!=null)return r?n.panoramaElementId:n.elementId}}),Aq=Y(e=>e.zIndex.zIndexMap,e=>{var t=Object.keys(e).map(n=>parseInt(n,10)).concat(Object.values(Rt)),r=Array.from(new Set(t));return r.sort((n,l)=>n-l)},{memoizeOptions:{resultEqualityCheck:dB}});function oS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function lS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?oS(Object(r),!0).forEach(function(n){Oq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Oq(e,t,r){return(t=Eq(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Eq(e){var t=kq(e,"string");return typeof t=="symbol"?t:t+""}function kq(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Nq={},Cq={zIndexMap:Object.values(Rt).reduce((e,t)=>lS(lS({},e),{},{[t]:{elementId:void 0,panoramaElementId:void 0,consumers:0}}),Nq)},Tq=new Set(Object.values(Rt));function Mq(e){return Tq.has(e)}var Tk=mr({name:"zIndex",initialState:Cq,reducers:{registerZIndexPortal:{reducer:(e,t)=>{var{zIndex:r}=t.payload;e.zIndexMap[r]?e.zIndexMap[r].consumers+=1:e.zIndexMap[r]={consumers:1,elementId:void 0,panoramaElementId:void 0}},prepare:At()},unregisterZIndexPortal:{reducer:(e,t)=>{var{zIndex:r}=t.payload;e.zIndexMap[r]&&(e.zIndexMap[r].consumers-=1,e.zIndexMap[r].consumers<=0&&!Mq(r)&&delete e.zIndexMap[r])},prepare:At()},registerZIndexPortalId:{reducer:(e,t)=>{var{zIndex:r,elementId:n,isPanorama:l}=t.payload;e.zIndexMap[r]?l?e.zIndexMap[r].panoramaElementId=n:e.zIndexMap[r].elementId=n:e.zIndexMap[r]={consumers:0,elementId:l?void 0:n,panoramaElementId:l?n:void 0}},prepare:At()},unregisterZIndexPortalId:{reducer:(e,t)=>{var{zIndex:r}=t.payload;e.zIndexMap[r]&&(t.payload.isPanorama?e.zIndexMap[r].panoramaElementId=void 0:e.zIndexMap[r].elementId=void 0)},prepare:At()}}}),{registerZIndexPortal:_q,unregisterZIndexPortal:Pq,registerZIndexPortalId:Dq,unregisterZIndexPortalId:zq}=Tk.actions,Rq=Tk.reducer;function Fr(e){var{zIndex:t,children:r}=e,n=Mz(),l=n&&t!==void 0&&t!==0,s=Zt(),d=ot();b.useLayoutEffect(()=>l?(d(_q({zIndex:t})),()=>{d(Pq({zIndex:t}))}):_o,[d,t,l]);var p=fe(m=>Sq(m,t,s));if(!l)return r;if(!p)return null;var h=document.getElementById(p);return h?f0.createPortal(r,h):null}function Wg(){return Wg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Wg.apply(null,arguments)}function sS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function su(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?sS(Object(r),!0).forEach(function(n){Lq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Lq(e,t,r){return(t=Bq(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Bq(e){var t=Iq(e,"string");return typeof t=="symbol"?t:t+""}function Iq(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qq(e){var{cursor:t,cursorComp:r,cursorProps:n}=e;return b.isValidElement(t)?b.cloneElement(t,n):b.createElement(r,n)}function $q(e){var t,{coordinate:r,payload:n,index:l,offset:s,tooltipAxisBandSize:d,layout:p,cursor:h,tooltipEventType:m,chartName:g}=e,x=r,w=n,j=l;if(!h||!x||g!=="ScatterChart"&&m!=="axis")return null;var S,A,O;if(g==="ScatterChart")S=x,A=jR,O=Rt.cursorLine;else if(g==="BarChart")S=SR(p,x,s,d),A=dE,O=Rt.cursorRectangle;else if(p==="radial"&&oO(x)){var{cx:k,cy:T,radius:C,startAngle:_,endAngle:M}=fE(x);S={cx:k,cy:T,startAngle:_,endAngle:M,innerRadius:C,outerRadius:C},A=hE,O=Rt.cursorLine}else S={points:d9(p,x,s)},A=oE,O=Rt.cursorLine;var R=typeof h=="object"&&"className"in h?h.className:void 0,U=su(su(su(su({stroke:"#ccc",pointerEvents:"none"},s),S),ms(h)),{},{payload:w,payloadIndex:j,className:$e("recharts-tooltip-cursor",R)});return b.createElement(Fr,{zIndex:(t=e.zIndex)!==null&&t!==void 0?t:O},b.createElement(qq,{cursor:h,cursorComp:A,cursorProps:U}))}function Uq(e){var t=lq(),r=rE(),n=bs(),l=hq();return t==null||r==null||n==null||l==null?null:b.createElement($q,Wg({},e,{offset:r,layout:n,tooltipAxisBandSize:t,chartName:l}))}var Mk=b.createContext(null),Hq=()=>b.useContext(Mk),$m={exports:{}},cS;function Yq(){return cS||(cS=1,(function(e){var t=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function l(h,m,g){this.fn=h,this.context=m,this.once=g||!1}function s(h,m,g,x,w){if(typeof g!="function")throw new TypeError("The listener must be a function");var j=new l(g,x||h,w),S=r?r+m:m;return h._events[S]?h._events[S].fn?h._events[S]=[h._events[S],j]:h._events[S].push(j):(h._events[S]=j,h._eventsCount++),h}function d(h,m){--h._eventsCount===0?h._events=new n:delete h._events[m]}function p(){this._events=new n,this._eventsCount=0}p.prototype.eventNames=function(){var m=[],g,x;if(this._eventsCount===0)return m;for(x in g=this._events)t.call(g,x)&&m.push(r?x.slice(1):x);return Object.getOwnPropertySymbols?m.concat(Object.getOwnPropertySymbols(g)):m},p.prototype.listeners=function(m){var g=r?r+m:m,x=this._events[g];if(!x)return[];if(x.fn)return[x.fn];for(var w=0,j=x.length,S=new Array(j);w<j;w++)S[w]=x[w].fn;return S},p.prototype.listenerCount=function(m){var g=r?r+m:m,x=this._events[g];return x?x.fn?1:x.length:0},p.prototype.emit=function(m,g,x,w,j,S){var A=r?r+m:m;if(!this._events[A])return!1;var O=this._events[A],k=arguments.length,T,C;if(O.fn){switch(O.once&&this.removeListener(m,O.fn,void 0,!0),k){case 1:return O.fn.call(O.context),!0;case 2:return O.fn.call(O.context,g),!0;case 3:return O.fn.call(O.context,g,x),!0;case 4:return O.fn.call(O.context,g,x,w),!0;case 5:return O.fn.call(O.context,g,x,w,j),!0;case 6:return O.fn.call(O.context,g,x,w,j,S),!0}for(C=1,T=new Array(k-1);C<k;C++)T[C-1]=arguments[C];O.fn.apply(O.context,T)}else{var _=O.length,M;for(C=0;C<_;C++)switch(O[C].once&&this.removeListener(m,O[C].fn,void 0,!0),k){case 1:O[C].fn.call(O[C].context);break;case 2:O[C].fn.call(O[C].context,g);break;case 3:O[C].fn.call(O[C].context,g,x);break;case 4:O[C].fn.call(O[C].context,g,x,w);break;default:if(!T)for(M=1,T=new Array(k-1);M<k;M++)T[M-1]=arguments[M];O[C].fn.apply(O[C].context,T)}}return!0},p.prototype.on=function(m,g,x){return s(this,m,g,x,!1)},p.prototype.once=function(m,g,x){return s(this,m,g,x,!0)},p.prototype.removeListener=function(m,g,x,w){var j=r?r+m:m;if(!this._events[j])return this;if(!g)return d(this,j),this;var S=this._events[j];if(S.fn)S.fn===g&&(!w||S.once)&&(!x||S.context===x)&&d(this,j);else{for(var A=0,O=[],k=S.length;A<k;A++)(S[A].fn!==g||w&&!S[A].once||x&&S[A].context!==x)&&O.push(S[A]);O.length?this._events[j]=O.length===1?O[0]:O:d(this,j)}return this},p.prototype.removeAllListeners=function(m){var g;return m?(g=r?r+m:m,this._events[g]&&d(this,g)):(this._events=new n,this._eventsCount=0),this},p.prototype.off=p.prototype.removeListener,p.prototype.addListener=p.prototype.on,p.prefixed=r,p.EventEmitter=p,e.exports=p})($m)),$m.exports}var Gq=Yq();const Kq=Qn(Gq);var us=new Kq,Vg="recharts.syncEvent.tooltip",uS="recharts.syncEvent.brush";function _k(e,t){if(t){var r=Number.parseInt(t,10);if(!an(r))return e?.[r]}}var Wq={chartName:"",tooltipPayloadSearcher:void 0,eventEmitter:void 0,defaultTooltipEventType:"axis"},Pk=mr({name:"options",initialState:Wq,reducers:{createEventEmitter:e=>{e.eventEmitter==null&&(e.eventEmitter=Symbol("rechartsEventEmitter"))}}}),Vq=Pk.reducer,{createEventEmitter:Xq}=Pk.actions;function Fq(e){return e.tooltip.syncInteraction}var Zq={chartData:void 0,computedData:void 0,dataStartIndex:0,dataEndIndex:0},Dk=mr({name:"chartData",initialState:Zq,reducers:{setChartData(e,t){if(e.chartData=t.payload,t.payload==null){e.dataStartIndex=0,e.dataEndIndex=0;return}t.payload.length>0&&e.dataEndIndex!==t.payload.length-1&&(e.dataEndIndex=t.payload.length-1)},setComputedData(e,t){e.computedData=t.payload},setDataStartEndIndexes(e,t){var{startIndex:r,endIndex:n}=t.payload;r!=null&&(e.dataStartIndex=r),n!=null&&(e.dataEndIndex=n)}}}),{setChartData:dS,setDataStartEndIndexes:Qq,setComputedData:YW}=Dk.actions,Jq=Dk.reducer,e$=["x","y"];function fS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function mo(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?fS(Object(r),!0).forEach(function(n){t$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function t$(e,t,r){return(t=r$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r$(e){var t=n$(e,"string");return typeof t=="symbol"?t:t+""}function n$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function a$(e,t){if(e==null)return{};var r,n,l=i$(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function i$(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function o$(){var e=fe(pv),t=fe(hv),r=ot(),n=fe(p3),l=fe(aa),s=bs(),d=_d(),p=fe(h=>h.rootProps.className);b.useEffect(()=>{if(e==null)return _o;var h=(m,g,x)=>{if(t!==x&&e===m){if(n==="index"){var w;if(d&&g!==null&&g!==void 0&&(w=g.payload)!==null&&w!==void 0&&w.coordinate&&g.payload.sourceViewBox){var j=g.payload.coordinate,{x:S,y:A}=j,O=a$(j,e$),{x:k,y:T,width:C,height:_}=g.payload.sourceViewBox,M=mo(mo({},O),{},{x:d.x+(C?(S-k)/C:0)*d.width,y:d.y+(_?(A-T)/_:0)*d.height});r(mo(mo({},g),{},{payload:mo(mo({},g.payload),{},{coordinate:M})}))}else r(g);return}if(l!=null){var R;if(typeof n=="function"){var U={activeTooltipIndex:g.payload.index==null?void 0:Number(g.payload.index),isTooltipActive:g.payload.active,activeIndex:g.payload.index==null?void 0:Number(g.payload.index),activeLabel:g.payload.label,activeDataKey:g.payload.dataKey,activeCoordinate:g.payload.coordinate},F=n(l,U);R=l[F]}else n==="value"&&(R=l.find($=>String($.value)===g.payload.label));var{coordinate:te}=g.payload;if(R==null||g.payload.active===!1||te==null||d==null){r(Gg({active:!1,coordinate:void 0,dataKey:void 0,index:null,label:void 0,sourceViewBox:void 0}));return}var{x:ie,y:Z}=te,J=Math.min(ie,d.x+d.width),he=Math.min(Z,d.y+d.height),ge={x:s==="horizontal"?R.coordinate:J,y:s==="horizontal"?he:R.coordinate},ye=Gg({active:g.payload.active,coordinate:ge,dataKey:g.payload.dataKey,index:String(R.index),label:g.payload.label,sourceViewBox:g.payload.sourceViewBox});r(ye)}}};return us.on(Vg,h),()=>{us.off(Vg,h)}},[p,r,t,e,n,l,s,d])}function l$(){var e=fe(pv),t=fe(hv),r=ot();b.useEffect(()=>{if(e==null)return _o;var n=(l,s,d)=>{t!==d&&e===l&&r(Qq(s))};return us.on(uS,n),()=>{us.off(uS,n)}},[r,t,e])}function s$(){var e=ot();b.useEffect(()=>{e(Xq())},[e]),o$(),l$()}function c$(e,t,r,n,l,s){var d=fe(j=>gq(j,e,t)),p=fe(hv),h=fe(pv),m=fe(p3),g=fe(Fq),x=g?.active,w=_d();b.useEffect(()=>{if(!x&&h!=null&&p!=null){var j=Gg({active:s,coordinate:r,dataKey:d,index:l,label:typeof n=="number"?String(n):n,sourceViewBox:w});us.emit(Vg,h,j,p)}},[x,r,d,l,n,p,h,m,s,w])}function pS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function hS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?pS(Object(r),!0).forEach(function(n){u$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function u$(e,t,r){return(t=d$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d$(e){var t=f$(e,"string");return typeof t=="symbol"?t:t+""}function f$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function p$(e){return e.dataKey}function h$(e,t){return b.isValidElement(e)?b.cloneElement(e,t):typeof e=="function"?b.createElement(e,t):b.createElement(eR,t)}var mS=[],m$={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",axisId:0,contentStyle:{},cursor:!0,filterNull:!0,isAnimationActive:!Ai.isSsr,itemSorter:"name",itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,wrapperStyle:{}};function Xg(e){var t,r,n=Gt(e,m$),{active:l,allowEscapeViewBox:s,animationDuration:d,animationEasing:p,content:h,filterNull:m,isAnimationActive:g,offset:x,payloadUniqBy:w,position:j,reverseDirection:S,useTranslate3d:A,wrapperStyle:O,cursor:k,shared:T,trigger:C,defaultIndex:_,portal:M,axisId:R}=n,U=ot(),F=typeof _=="number"?String(_):_;b.useEffect(()=>{U(hI({shared:T,trigger:C,axisId:R,active:l,defaultIndex:F}))},[U,T,C,R,l,F]);var te=_d(),ie=iE(),Z=cI(T),{activeIndex:J,isActive:he}=(t=fe(Ue=>yq(Ue,Z,C,F)))!==null&&t!==void 0?t:{},ge=fe(Ue=>xq(Ue,Z,C,F)),ye=fe(Ue=>Ck(Ue,Z,C,F)),$=fe(Ue=>vq(Ue,Z,C,F)),K=ge,ne=Hq(),oe=(r=l??he)!==null&&r!==void 0?r:!1,[D,V]=wO([K,oe]),ae=Z==="axis"?ye:void 0;c$(Z,C,$,ae,J,oe);var re=M??ne;if(re==null||te==null||Z==null)return null;var se=K??mS;oe||(se=mS),m&&se.length&&(se=gO(se.filter(Ue=>Ue.value!=null&&(Ue.hide!==!0||n.includeHidden)),w,p$));var Se=se.length>0,ve=b.createElement(lR,{allowEscapeViewBox:s,animationDuration:d,animationEasing:p,isAnimationActive:g,active:oe,coordinate:$,hasPayload:Se,offset:x,position:j,reverseDirection:S,useTranslate3d:A,viewBox:te,wrapperStyle:O,lastBoundingBox:D,innerRef:V,hasPortalFromProps:!!M},h$(h,hS(hS({},n),{},{payload:se,label:ae,active:oe,activeIndex:J,coordinate:$,accessibilityLayer:ie})));return b.createElement(b.Fragment,null,f0.createPortal(ve,re),oe&&b.createElement(Uq,{cursor:k,tooltipEventType:Z,coordinate:$,payload:se,index:J}))}var zk=e=>null;zk.displayName="Cell";function g$(e,t,r){return(t=v$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v$(e){var t=x$(e,"string");return typeof t=="symbol"?t:t+""}function x$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class y${constructor(t){g$(this,"cache",new Map),this.maxSize=t}get(t){var r=this.cache.get(t);return r!==void 0&&(this.cache.delete(t),this.cache.set(t,r)),r}set(t,r){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxSize){var n=this.cache.keys().next().value;this.cache.delete(n)}this.cache.set(t,r)}clear(){this.cache.clear()}size(){return this.cache.size}}function gS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function b$(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?gS(Object(r),!0).forEach(function(n){w$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):gS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function w$(e,t,r){return(t=j$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j$(e){var t=S$(e,"string");return typeof t=="symbol"?t:t+""}function S$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var A$={cacheSize:2e3,enableCache:!0},Rk=b$({},A$),vS=new y$(Rk.cacheSize),O$={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},xS="recharts_measurement_span";function E$(e,t){var r=t.fontSize||"",n=t.fontFamily||"",l=t.fontWeight||"",s=t.fontStyle||"",d=t.letterSpacing||"",p=t.textTransform||"";return"".concat(e,"|").concat(r,"|").concat(n,"|").concat(l,"|").concat(s,"|").concat(d,"|").concat(p)}var yS=(e,t)=>{try{var r=document.getElementById(xS);r||(r=document.createElement("span"),r.setAttribute("id",xS),r.setAttribute("aria-hidden","true"),document.body.appendChild(r)),Object.assign(r.style,O$,t),r.textContent="".concat(e);var n=r.getBoundingClientRect();return{width:n.width,height:n.height}}catch{return{width:0,height:0}}},Zl=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||Ai.isSsr)return{width:0,height:0};if(!Rk.enableCache)return yS(t,r);var n=E$(t,r),l=vS.get(n);if(l)return l;var s=yS(t,r);return vS.set(n,s),s},bS=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,wS=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,k$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,N$=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,Lk={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},C$=Object.keys(Lk),vo="NaN";function T$(e,t){return e*Lk[t]}class fr{static parse(t){var r,[,n,l]=(r=N$.exec(t))!==null&&r!==void 0?r:[];return new fr(parseFloat(n),l??"")}constructor(t,r){this.num=t,this.unit=r,this.num=t,this.unit=r,an(t)&&(this.unit=""),r!==""&&!k$.test(r)&&(this.num=NaN,this.unit=""),C$.includes(r)&&(this.num=T$(t,r),this.unit="px")}add(t){return this.unit!==t.unit?new fr(NaN,""):new fr(this.num+t.num,this.unit)}subtract(t){return this.unit!==t.unit?new fr(NaN,""):new fr(this.num-t.num,this.unit)}multiply(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new fr(NaN,""):new fr(this.num*t.num,this.unit||t.unit)}divide(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new fr(NaN,""):new fr(this.num/t.num,this.unit||t.unit)}toString(){return"".concat(this.num).concat(this.unit)}isNaN(){return an(this.num)}}function Bk(e){if(e.includes(vo))return vo;for(var t=e;t.includes("*")||t.includes("/");){var r,[,n,l,s]=(r=bS.exec(t))!==null&&r!==void 0?r:[],d=fr.parse(n??""),p=fr.parse(s??""),h=l==="*"?d.multiply(p):d.divide(p);if(h.isNaN())return vo;t=t.replace(bS,h.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var m,[,g,x,w]=(m=wS.exec(t))!==null&&m!==void 0?m:[],j=fr.parse(g??""),S=fr.parse(w??""),A=x==="+"?j.add(S):j.subtract(S);if(A.isNaN())return vo;t=t.replace(wS,A.toString())}return t}var jS=/\(([^()]*)\)/;function M$(e){for(var t=e,r;(r=jS.exec(t))!=null;){var[,n]=r;t=t.replace(jS,Bk(n))}return t}function _$(e){var t=e.replace(/\s+/g,"");return t=M$(t),t=Bk(t),t}function P$(e){try{return _$(e)}catch{return vo}}function Um(e){var t=P$(e.slice(5,-1));return t===vo?"":t}var D$=["x","y","lineHeight","capHeight","fill","scaleToFit","textAnchor","verticalAnchor"],z$=["dx","dy","angle","className","breakAll"];function Fg(){return Fg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fg.apply(null,arguments)}function SS(e,t){if(e==null)return{};var r,n,l=R$(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function R$(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var Ik=/[ \f\n\r\t\v\u2028\u2029]+/,qk=e=>{var{children:t,breakAll:r,style:n}=e;try{var l=[];nt(t)||(r?l=t.toString().split(""):l=t.toString().split(Ik));var s=l.map(p=>({word:p,width:Zl(p,n).width})),d=r?0:Zl(" ",n).width;return{wordsWithComputedWidth:s,spaceWidth:d}}catch{return null}};function L$(e){return e==="start"||e==="middle"||e==="end"||e==="inherit"}var $k=(e,t,r,n)=>e.reduce((l,s)=>{var{word:d,width:p}=s,h=l[l.length-1];if(h&&p!=null&&(t==null||n||h.width+p+r<Number(t)))h.words.push(d),h.width+=p+r;else{var m={words:[d],width:p};l.push(m)}return l},[]),Uk=e=>e.reduce((t,r)=>t.width>r.width?t:r),B$="…",AS=(e,t,r,n,l,s,d,p)=>{var h=e.slice(0,t),m=qk({breakAll:r,style:n,children:h+B$});if(!m)return[!1,[]];var g=$k(m.wordsWithComputedWidth,s,d,p),x=g.length>l||Uk(g).width>Number(s);return[x,g]},I$=(e,t,r,n,l)=>{var{maxLines:s,children:d,style:p,breakAll:h}=e,m=de(s),g=String(d),x=$k(t,n,r,l);if(!m||l)return x;var w=x.length>s||Uk(x).width>Number(n);if(!w)return x;for(var j=0,S=g.length-1,A=0,O;j<=S&&A<=g.length-1;){var k=Math.floor((j+S)/2),T=k-1,[C,_]=AS(g,T,h,p,s,n,r,l),[M]=AS(g,k,h,p,s,n,r,l);if(!C&&!M&&(j=k+1),C&&M&&(S=k-1),!C&&M){O=_;break}A++}return O||x},OS=e=>{var t=nt(e)?[]:e.toString().split(Ik);return[{words:t,width:void 0}]},q$=e=>{var{width:t,scaleToFit:r,children:n,style:l,breakAll:s,maxLines:d}=e;if((t||r)&&!Ai.isSsr){var p,h,m=qk({breakAll:s,children:n,style:l});if(m){var{wordsWithComputedWidth:g,spaceWidth:x}=m;p=g,h=x}else return OS(n);return I$({breakAll:s,children:n,maxLines:d,style:l},p,h,t,!!r)}return OS(n)},Hk="#808080",$$={breakAll:!1,capHeight:"0.71em",fill:Hk,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},Lv=b.forwardRef((e,t)=>{var r=Gt(e,$$),{x:n,y:l,lineHeight:s,capHeight:d,fill:p,scaleToFit:h,textAnchor:m,verticalAnchor:g}=r,x=SS(r,D$),w=b.useMemo(()=>q$({breakAll:x.breakAll,children:x.children,maxLines:x.maxLines,scaleToFit:h,style:x.style,width:x.width}),[x.breakAll,x.children,x.maxLines,h,x.style,x.width]),{dx:j,dy:S,angle:A,className:O,breakAll:k}=x,T=SS(x,z$);if(!vn(n)||!vn(l)||w.length===0)return null;var C=Number(n)+(de(j)?j:0),_=Number(l)+(de(S)?S:0);if(!mt(C)||!mt(_))return null;var M;switch(g){case"start":M=Um("calc(".concat(d,")"));break;case"middle":M=Um("calc(".concat((w.length-1)/2," * -").concat(s," + (").concat(d," / 2))"));break;default:M=Um("calc(".concat(w.length-1," * -").concat(s,")"));break}var R=[];if(h){var U=w[0].width,{width:F}=x;R.push("scale(".concat(de(F)&&de(U)?F/U:1,")"))}return A&&R.push("rotate(".concat(A,", ").concat(C,", ").concat(_,")")),R.length&&(T.transform=R.join(" ")),b.createElement("text",Fg({},nr(T),{ref:t,x:C,y:_,className:$e("recharts-text",O),textAnchor:m,fill:p.includes("url")?Hk:p}),w.map((te,ie)=>{var Z=te.words.join(k?"":" ");return b.createElement("tspan",{x:C,dy:ie===0?M:s,key:"".concat(Z,"-").concat(ie)},Z)}))});Lv.displayName="Text";var U$=["labelRef"];function H$(e,t){if(e==null)return{};var r,n,l=Y$(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function Y$(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function ES(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function ht(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ES(Object(r),!0).forEach(function(n){G$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ES(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function G$(e,t,r){return(t=K$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K$(e){var t=W$(e,"string");return typeof t=="symbol"?t:t+""}function W$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bn(){return Bn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Bn.apply(null,arguments)}var Yk=b.createContext(null),V$=e=>{var{x:t,y:r,upperWidth:n,lowerWidth:l,width:s,height:d,children:p}=e,h=b.useMemo(()=>({x:t,y:r,upperWidth:n,lowerWidth:l,width:s,height:d}),[t,r,n,l,s,d]);return b.createElement(Yk.Provider,{value:h},p)},Gk=()=>{var e=b.useContext(Yk),t=_d();return e||tE(t)},X$=b.createContext(null),F$=()=>{var e=b.useContext(X$),t=fe(x3);return e||t},Z$=e=>{var{value:t,formatter:r}=e,n=nt(e.children)?t:e.children;return typeof r=="function"?r(n):n},Bv=e=>e!=null&&typeof e=="function",Q$=(e,t)=>{var r=pr(t-e),n=Math.min(Math.abs(t-e),360);return r*n},J$=(e,t,r,n,l)=>{var{offset:s,className:d}=e,{cx:p,cy:h,innerRadius:m,outerRadius:g,startAngle:x,endAngle:w,clockWise:j}=l,S=(m+g)/2,A=Q$(x,w),O=A>=0?1:-1,k,T;switch(t){case"insideStart":k=x+O*s,T=j;break;case"insideEnd":k=w-O*s,T=!j;break;case"end":k=w+O*s,T=j;break;default:throw new Error("Unsupported position ".concat(t))}T=A<=0?T:!T;var C=Yt(p,h,S,k),_=Yt(p,h,S,k+(T?1:-1)*359),M="M".concat(C.x,",").concat(C.y,`
    A`).concat(S,",").concat(S,",0,1,").concat(T?0:1,`,
    `).concat(_.x,",").concat(_.y),R=nt(e.id)?es("recharts-radial-line-"):e.id;return b.createElement("text",Bn({},n,{dominantBaseline:"central",className:$e("recharts-radial-bar-label",d)}),b.createElement("defs",null,b.createElement("path",{id:R,d:M})),b.createElement("textPath",{xlinkHref:"#".concat(R)},r))},eU=(e,t,r)=>{var{cx:n,cy:l,innerRadius:s,outerRadius:d,startAngle:p,endAngle:h}=e,m=(p+h)/2;if(r==="outside"){var{x:g,y:x}=Yt(n,l,d+t,m);return{x:g,y:x,textAnchor:g>=n?"start":"end",verticalAnchor:"middle"}}if(r==="center")return{x:n,y:l,textAnchor:"middle",verticalAnchor:"middle"};if(r==="centerTop")return{x:n,y:l,textAnchor:"middle",verticalAnchor:"start"};if(r==="centerBottom")return{x:n,y:l,textAnchor:"middle",verticalAnchor:"end"};var w=(s+d)/2,{x:j,y:S}=Yt(n,l,w,m);return{x:j,y:S,textAnchor:"middle",verticalAnchor:"middle"}},Zg=e=>"cx"in e&&de(e.cx),tU=(e,t)=>{var{parentViewBox:r,offset:n,position:l}=e,s;r!=null&&!Zg(r)&&(s=r);var{x:d,y:p,upperWidth:h,lowerWidth:m,height:g}=t,x=d,w=d+(h-m)/2,j=(x+w)/2,S=(h+m)/2,A=x+h/2,O=g>=0?1:-1,k=O*n,T=O>0?"end":"start",C=O>0?"start":"end",_=h>=0?1:-1,M=_*n,R=_>0?"end":"start",U=_>0?"start":"end";if(l==="top"){var F={x:x+h/2,y:p-k,textAnchor:"middle",verticalAnchor:T};return ht(ht({},F),s?{height:Math.max(p-s.y,0),width:h}:{})}if(l==="bottom"){var te={x:w+m/2,y:p+g+k,textAnchor:"middle",verticalAnchor:C};return ht(ht({},te),s?{height:Math.max(s.y+s.height-(p+g),0),width:m}:{})}if(l==="left"){var ie={x:j-M,y:p+g/2,textAnchor:R,verticalAnchor:"middle"};return ht(ht({},ie),s?{width:Math.max(ie.x-s.x,0),height:g}:{})}if(l==="right"){var Z={x:j+S+M,y:p+g/2,textAnchor:U,verticalAnchor:"middle"};return ht(ht({},Z),s?{width:Math.max(s.x+s.width-Z.x,0),height:g}:{})}var J=s?{width:S,height:g}:{};return l==="insideLeft"?ht({x:j+M,y:p+g/2,textAnchor:U,verticalAnchor:"middle"},J):l==="insideRight"?ht({x:j+S-M,y:p+g/2,textAnchor:R,verticalAnchor:"middle"},J):l==="insideTop"?ht({x:x+h/2,y:p+k,textAnchor:"middle",verticalAnchor:C},J):l==="insideBottom"?ht({x:w+m/2,y:p+g-k,textAnchor:"middle",verticalAnchor:T},J):l==="insideTopLeft"?ht({x:x+M,y:p+k,textAnchor:U,verticalAnchor:C},J):l==="insideTopRight"?ht({x:x+h-M,y:p+k,textAnchor:R,verticalAnchor:C},J):l==="insideBottomLeft"?ht({x:w+M,y:p+g-k,textAnchor:U,verticalAnchor:T},J):l==="insideBottomRight"?ht({x:w+m-M,y:p+g-k,textAnchor:R,verticalAnchor:T},J):l&&typeof l=="object"&&(de(l.x)||Gn(l.x))&&(de(l.y)||Gn(l.y))?ht({x:d+on(l.x,S),y:p+on(l.y,g),textAnchor:"end",verticalAnchor:"end"},J):ht({x:A,y:p+g/2,textAnchor:"middle",verticalAnchor:"middle"},J)},rU={offset:5,zIndex:Rt.label};function Ta(e){var t=Gt(e,rU),{viewBox:r,position:n,value:l,children:s,content:d,className:p="",textBreakAll:h,labelRef:m}=t,g=F$(),x=Gk(),w=n==="center"?x:g??x,j,S,A;if(r==null?j=w:Zg(r)?j=r:j=tE(r),!j||nt(l)&&nt(s)&&!b.isValidElement(d)&&typeof d!="function")return null;var O=ht(ht({},t),{},{viewBox:j});if(b.isValidElement(d)){var{labelRef:k}=O,T=H$(O,U$);return b.cloneElement(d,T)}if(typeof d=="function"){if(S=b.createElement(d,O),b.isValidElement(S))return S}else S=Z$(t);var C=nr(t);if(Zg(j)){if(n==="insideStart"||n==="insideEnd"||n==="end")return J$(t,n,S,C,j);A=eU(j,t.offset,t.position)}else A=tU(t,j);return b.createElement(Fr,{zIndex:t.zIndex},b.createElement(Lv,Bn({ref:m,className:$e("recharts-label",p)},C,A,{textAnchor:L$(C.textAnchor)?C.textAnchor:A.textAnchor,breakAll:h}),S))}Ta.displayName="Label";var nU=(e,t,r)=>{if(!e)return null;var n={viewBox:t,labelRef:r};return e===!0?b.createElement(Ta,Bn({key:"label-implicit"},n)):vn(e)?b.createElement(Ta,Bn({key:"label-implicit",value:e},n)):b.isValidElement(e)?e.type===Ta?b.cloneElement(e,ht({key:"label-implicit"},n)):b.createElement(Ta,Bn({key:"label-implicit",content:e},n)):Bv(e)?b.createElement(Ta,Bn({key:"label-implicit",content:e},n)):e&&typeof e=="object"?b.createElement(Ta,Bn({},e,{key:"label-implicit"},n)):null};function aU(e){var{label:t,labelRef:r}=e,n=Gk();return nU(t,n,r)||null}var Hm={},Ym={},kS;function iU(){return kS||(kS=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r[r.length-1]}e.last=t})(Ym)),Ym}var Gm={},NS;function oU(){return NS||(NS=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return Array.isArray(r)?r:Array.from(r)}e.toArray=t})(Gm)),Gm}var CS;function lU(){return CS||(CS=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=iU(),r=oU(),n=T0();function l(s){if(n.isArrayLike(s))return t.last(r.toArray(s))}e.last=l})(Hm)),Hm}var Km,TS;function sU(){return TS||(TS=1,Km=lU().last),Km}var cU=sU();const uU=Qn(cU);var dU=["valueAccessor"],fU=["dataKey","clockWise","id","textBreakAll","zIndex"];function Xu(){return Xu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Xu.apply(null,arguments)}function MS(e,t){if(e==null)return{};var r,n,l=pU(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function pU(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var hU=e=>Array.isArray(e.value)?uU(e.value):e.value,Kk=b.createContext(void 0),Wk=Kk.Provider,Vk=b.createContext(void 0);Vk.Provider;function mU(){return b.useContext(Kk)}function gU(){return b.useContext(Vk)}function mu(e){var{valueAccessor:t=hU}=e,r=MS(e,dU),{dataKey:n,clockWise:l,id:s,textBreakAll:d,zIndex:p}=r,h=MS(r,fU),m=mU(),g=gU(),x=m||g;return!x||!x.length?null:b.createElement(Fr,{zIndex:p??Rt.label},b.createElement(Gr,{className:"recharts-label-list"},x.map((w,j)=>{var S,A=nt(n)?t(w,j):Lt(w&&w.payload,n),O=nt(s)?{}:{id:"".concat(s,"-").concat(j)};return b.createElement(Ta,Xu({key:"label-".concat(j)},nr(w),h,O,{fill:(S=r.fill)!==null&&S!==void 0?S:w.fill,parentViewBox:w.parentViewBox,value:A,textBreakAll:d,viewBox:w.viewBox,index:j,zIndex:0}))})))}mu.displayName="LabelList";function Xk(e){var{label:t}=e;return t?t===!0?b.createElement(mu,{key:"labelList-implicit"}):b.isValidElement(t)||Bv(t)?b.createElement(mu,{key:"labelList-implicit",content:t}):typeof t=="object"?b.createElement(mu,Xu({key:"labelList-implicit"},t,{type:String(t.type)})):null:null}function Qg(){return Qg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Qg.apply(null,arguments)}var Fk=e=>{var{cx:t,cy:r,r:n,className:l}=e,s=$e("recharts-dot",l);return de(t)&&de(r)&&de(n)?b.createElement("circle",Qg({},nn(e),C0(e),{className:s,cx:t,cy:r,r:n})):null},vU={radiusAxis:{},angleAxis:{}},Zk=mr({name:"polarAxis",initialState:vU,reducers:{addRadiusAxis(e,t){e.radiusAxis[t.payload.id]=t.payload},removeRadiusAxis(e,t){delete e.radiusAxis[t.payload.id]},addAngleAxis(e,t){e.angleAxis[t.payload.id]=t.payload},removeAngleAxis(e,t){delete e.angleAxis[t.payload.id]}}}),{addRadiusAxis:GW,removeRadiusAxis:KW,addAngleAxis:WW,removeAngleAxis:VW}=Zk.actions,xU=Zk.reducer,Wm={exports:{}},We={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _S;function yU(){if(_S)return We;_S=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.for("react.view_transition"),j=Symbol.for("react.client.reference");function S(A){if(typeof A=="object"&&A!==null){var O=A.$$typeof;switch(O){case e:switch(A=A.type,A){case r:case l:case n:case h:case m:case w:return A;default:switch(A=A&&A.$$typeof,A){case d:case p:case x:case g:return A;case s:return A;default:return O}}case t:return O}}}return We.ContextConsumer=s,We.ContextProvider=d,We.Element=e,We.ForwardRef=p,We.Fragment=r,We.Lazy=x,We.Memo=g,We.Portal=t,We.Profiler=l,We.StrictMode=n,We.Suspense=h,We.SuspenseList=m,We.isContextConsumer=function(A){return S(A)===s},We.isContextProvider=function(A){return S(A)===d},We.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===e},We.isForwardRef=function(A){return S(A)===p},We.isFragment=function(A){return S(A)===r},We.isLazy=function(A){return S(A)===x},We.isMemo=function(A){return S(A)===g},We.isPortal=function(A){return S(A)===t},We.isProfiler=function(A){return S(A)===l},We.isStrictMode=function(A){return S(A)===n},We.isSuspense=function(A){return S(A)===h},We.isSuspenseList=function(A){return S(A)===m},We.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===r||A===l||A===n||A===h||A===m||typeof A=="object"&&A!==null&&(A.$$typeof===x||A.$$typeof===g||A.$$typeof===d||A.$$typeof===s||A.$$typeof===p||A.$$typeof===j||A.getModuleId!==void 0)},We.typeOf=S,We}var PS;function bU(){return PS||(PS=1,Wm.exports=yU()),Wm.exports}var wU=bU(),DS=e=>typeof e=="string"?e:e?e.displayName||e.name||"Component":"",zS=null,Vm=null,Qk=e=>{if(e===zS&&Array.isArray(Vm))return Vm;var t=[];return b.Children.forEach(e,r=>{nt(r)||(wU.isFragment(r)?t=t.concat(Qk(r.props.children)):t.push(r))}),Vm=t,zS=e,t};function jU(e,t){var r=[],n=[];return Array.isArray(t)?n=t.map(l=>DS(l)):n=[DS(t)],Qk(e).forEach(l=>{var s=wo(l,"type.displayName")||wo(l,"type.name");s&&n.indexOf(s)!==-1&&r.push(l)}),r}var Jk=e=>e&&typeof e=="object"&&"clipDot"in e?!!e.clipDot:!0,Xm={},RS;function SU(){return RS||(RS=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){if(typeof r!="object"||r==null)return!1;if(Object.getPrototypeOf(r)===null)return!0;if(Object.prototype.toString.call(r)!=="[object Object]"){const l=r[Symbol.toStringTag];return l==null||!Object.getOwnPropertyDescriptor(r,Symbol.toStringTag)?.writable?!1:r.toString()===`[object ${l}]`}let n=r;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(r)===n}e.isPlainObject=t})(Xm)),Xm}var Fm,LS;function AU(){return LS||(LS=1,Fm=SU().isPlainObject),Fm}var OU=AU();const EU=Qn(OU);function BS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function IS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?BS(Object(r),!0).forEach(function(n){kU(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):BS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function kU(e,t,r){return(t=NU(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function NU(e){var t=CU(e,"string");return typeof t=="symbol"?t:t+""}function CU(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Fu(){return Fu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fu.apply(null,arguments)}var qS=(e,t,r,n,l)=>{var s=r-n,d;return d="M ".concat(e,",").concat(t),d+="L ".concat(e+r,",").concat(t),d+="L ".concat(e+r-s/2,",").concat(t+l),d+="L ".concat(e+r-s/2-n,",").concat(t+l),d+="L ".concat(e,",").concat(t," Z"),d},TU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},MU=e=>{var t=Gt(e,TU),{x:r,y:n,upperWidth:l,lowerWidth:s,height:d,className:p}=t,{animationEasing:h,animationDuration:m,animationBegin:g,isUpdateAnimationActive:x}=t,w=b.useRef(null),[j,S]=b.useState(-1),A=b.useRef(l),O=b.useRef(s),k=b.useRef(d),T=b.useRef(r),C=b.useRef(n),_=zd(e,"trapezoid-");if(b.useEffect(()=>{if(w.current&&w.current.getTotalLength)try{var ge=w.current.getTotalLength();ge&&S(ge)}catch{}},[]),r!==+r||n!==+n||l!==+l||s!==+s||d!==+d||l===0&&s===0||d===0)return null;var M=$e("recharts-trapezoid",p);if(!x)return b.createElement("g",null,b.createElement("path",Fu({},nr(t),{className:M,d:qS(r,n,l,s,d)})));var R=A.current,U=O.current,F=k.current,te=T.current,ie=C.current,Z="0px ".concat(j===-1?1:j,"px"),J="".concat(j,"px 0px"),he=lE(["strokeDasharray"],m,h);return b.createElement(Dd,{animationId:_,key:_,canBegin:j>0,duration:m,easing:h,isActive:x,begin:g},ge=>{var ye=ct(R,l,ge),$=ct(U,s,ge),K=ct(F,d,ge),ne=ct(te,r,ge),oe=ct(ie,n,ge);w.current&&(A.current=ye,O.current=$,k.current=K,T.current=ne,C.current=oe);var D=ge>0?{transition:he,strokeDasharray:J}:{strokeDasharray:Z};return b.createElement("path",Fu({},nr(t),{className:M,d:qS(ne,oe,ye,$,K),ref:w,style:IS(IS({},D),t.style)}))})},_U=["option","shapeType","propTransformer","activeClassName","isActive"];function PU(e,t){if(e==null)return{};var r,n,l=DU(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function DU(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function $S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function Zu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?$S(Object(r),!0).forEach(function(n){zU(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$S(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function zU(e,t,r){return(t=RU(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function RU(e){var t=LU(e,"string");return typeof t=="symbol"?t:t+""}function LU(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function BU(e,t){return Zu(Zu({},t),e)}function IU(e,t){return e==="symbols"}function US(e){var{shapeType:t,elementProps:r}=e;switch(t){case"rectangle":return b.createElement(dE,r);case"trapezoid":return b.createElement(MU,r);case"sector":return b.createElement(hE,r);case"symbols":if(IU(t))return b.createElement(N0,r);break;case"curve":return b.createElement(oE,r);default:return null}}function qU(e){return b.isValidElement(e)?e.props:e}function e5(e){var{option:t,shapeType:r,propTransformer:n=BU,activeClassName:l="recharts-active-shape",isActive:s}=e,d=PU(e,_U),p;if(b.isValidElement(t))p=b.cloneElement(t,Zu(Zu({},d),qU(t)));else if(typeof t=="function")p=t(d);else if(EU(t)&&typeof t!="boolean"){var h=n(t,d);p=b.createElement(US,{shapeType:r,elementProps:h})}else{var m=d;p=b.createElement(US,{shapeType:r,elementProps:m})}return s?b.createElement(Gr,{className:l},p):p}var t5=(e,t)=>{var r=ot();return(n,l)=>s=>{e?.(n,l,s),r(sk({activeIndex:String(l),activeDataKey:t,activeCoordinate:n.tooltipPosition}))}},r5=e=>{var t=ot();return(r,n)=>l=>{e?.(r,n,l),t(mI())}},n5=(e,t)=>{var r=ot();return(n,l)=>s=>{e?.(n,l,s),r(gI({activeIndex:String(l),activeDataKey:t,activeCoordinate:n.tooltipPosition}))}};function a5(e){var{fn:t,args:r}=e,n=ot(),l=Zt();return b.useLayoutEffect(()=>{if(!l){var s=t(r);return n(fI(s)),()=>{n(pI(s))}}},[t,r,n,l]),null}function i5(e){var{legendPayload:t}=e,r=ot(),n=Zt();return b.useLayoutEffect(()=>n?_o:(r(Dz(t)),()=>{r(zz(t))}),[r,n,t]),null}var Zm,$U=()=>{var[e]=b.useState(()=>es("uid-"));return e},UU=(Zm=sC.useId)!==null&&Zm!==void 0?Zm:$U;function o5(e,t){var r=UU();return t||(e?"".concat(e,"-").concat(r):r)}var HU=b.createContext(void 0),l5=e=>{var{id:t,type:r,children:n}=e,l=o5("recharts-".concat(r),t);return b.createElement(HU.Provider,{value:l},n(l))},YU={cartesianItems:[],polarItems:[]},s5=mr({name:"graphicalItems",initialState:YU,reducers:{addCartesianGraphicalItem:{reducer(e,t){e.cartesianItems.push(t.payload)},prepare:At()},replaceCartesianGraphicalItem:{reducer(e,t){var{prev:r,next:n}=t.payload,l=Un(e).cartesianItems.indexOf(r);l>-1&&(e.cartesianItems[l]=n)},prepare:At()},removeCartesianGraphicalItem:{reducer(e,t){var r=Un(e).cartesianItems.indexOf(t.payload);r>-1&&e.cartesianItems.splice(r,1)},prepare:At()},addPolarGraphicalItem:{reducer(e,t){e.polarItems.push(t.payload)},prepare:At()},removePolarGraphicalItem:{reducer(e,t){var r=Un(e).polarItems.indexOf(t.payload);r>-1&&e.polarItems.splice(r,1)},prepare:At()}}}),{addCartesianGraphicalItem:GU,replaceCartesianGraphicalItem:KU,removeCartesianGraphicalItem:WU,addPolarGraphicalItem:XW,removePolarGraphicalItem:FW}=s5.actions,VU=s5.reducer;function c5(e){var t=ot(),r=b.useRef(null);return b.useLayoutEffect(()=>{r.current===null?t(GU(e)):r.current!==e&&t(KU({prev:r.current,next:e})),r.current=e},[t,e]),b.useLayoutEffect(()=>()=>{r.current&&(t(WU(r.current)),r.current=null)},[t]),null}var XU=["points"];function HS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function Qm(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?HS(Object(r),!0).forEach(function(n){FU(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):HS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function FU(e,t,r){return(t=ZU(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ZU(e){var t=QU(e,"string");return typeof t=="symbol"?t:t+""}function QU(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qu(){return Qu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Qu.apply(null,arguments)}function JU(e,t){if(e==null)return{};var r,n,l=eH(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function eH(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function tH(e){var{option:t,dotProps:r,className:n}=e;if(b.isValidElement(t))return b.cloneElement(t,r);if(typeof t=="function")return t(r);var l=$e(n,typeof t!="boolean"?t.className:""),s=r??{},{points:d}=s,p=JU(s,XU);return b.createElement(Fk,Qu({},p,{className:l}))}function rH(e,t){return e==null?!1:t?!0:e.length===1}function nH(e){var{points:t,dot:r,className:n,dotClassName:l,dataKey:s,baseProps:d,needClip:p,clipPathId:h,zIndex:m=Rt.scatter}=e;if(!rH(t,r))return null;var g=Jk(r),x=T8(r),w=t.map((S,A)=>{var O,k,T=Qm(Qm(Qm({r:3},d),x),{},{index:A,cx:(O=S.x)!==null&&O!==void 0?O:void 0,cy:(k=S.y)!==null&&k!==void 0?k:void 0,dataKey:s,value:S.value,payload:S.payload,points:t});return b.createElement(tH,{key:"dot-".concat(A),option:r,dotProps:T,className:l})}),j={};return p&&h!=null&&(j.clipPath="url(#clipPath-".concat(g?"":"dots-").concat(h,")")),b.createElement(Fr,{zIndex:m},b.createElement(Gr,Qu({className:n},j),w))}function YS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function GS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?YS(Object(r),!0).forEach(function(n){aH(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):YS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function aH(e,t,r){return(t=iH(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function iH(e){var t=oH(e,"string");return typeof t=="symbol"?t:t+""}function oH(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var lH={xAxis:{},yAxis:{},zAxis:{}},u5=mr({name:"cartesianAxis",initialState:lH,reducers:{addXAxis:{reducer(e,t){e.xAxis[t.payload.id]=t.payload},prepare:At()},removeXAxis:{reducer(e,t){delete e.xAxis[t.payload.id]},prepare:At()},addYAxis:{reducer(e,t){e.yAxis[t.payload.id]=t.payload},prepare:At()},removeYAxis:{reducer(e,t){delete e.yAxis[t.payload.id]},prepare:At()},addZAxis:{reducer(e,t){e.zAxis[t.payload.id]=t.payload},prepare:At()},removeZAxis:{reducer(e,t){delete e.zAxis[t.payload.id]},prepare:At()},updateYAxisWidth(e,t){var{id:r,width:n}=t.payload,l=e.yAxis[r];if(l){var s=l.widthHistory||[];if(s.length===3&&s[0]===s[2]&&n===s[1]&&n!==l.width&&Math.abs(n-s[0])<=1)return;var d=[...s,n].slice(-3);e.yAxis[r]=GS(GS({},e.yAxis[r]),{},{width:n,widthHistory:d})}}}}),{addXAxis:sH,removeXAxis:cH,addYAxis:uH,removeYAxis:dH,addZAxis:ZW,removeZAxis:QW,updateYAxisWidth:fH}=u5.actions,pH=u5.reducer,hH=Y([Bt],e=>({top:e.top,bottom:e.bottom,left:e.left,right:e.right})),mH=Y([hH,Jn,ea],(e,t,r)=>{if(!(!e||t==null||r==null))return{x:e.left,y:e.top,width:Math.max(0,t-e.left-e.right),height:Math.max(0,r-e.top-e.bottom)}}),Iv=()=>fe(mH),gH=()=>fe(rq);function KS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function Jm(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?KS(Object(r),!0).forEach(function(n){vH(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):KS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function vH(e,t,r){return(t=xH(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function xH(e){var t=yH(e,"string");return typeof t=="symbol"?t:t+""}function yH(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var bH=e=>{var{point:t,childIndex:r,mainColor:n,activeDot:l,dataKey:s}=e;if(l===!1||t.x==null||t.y==null)return null;var d={index:r,dataKey:s,cx:t.x,cy:t.y,r:4,fill:n??"none",strokeWidth:2,stroke:"#fff",payload:t.payload,value:t.value},p=Jm(Jm(Jm({},d),ms(l)),C0(l)),h;return b.isValidElement(l)?h=b.cloneElement(l,p):typeof l=="function"?h=l(p):h=b.createElement(Fk,p),b.createElement(Gr,{className:"recharts-active-dot"},h)};function wH(e){var{points:t,mainColor:r,activeDot:n,itemDataKey:l,zIndex:s=Rt.activeDot}=e,d=fe(bi),p=gH();if(t==null||p==null)return null;var h=t.find(m=>p.includes(m.payload));return nt(h)?null:b.createElement(Fr,{zIndex:s},b.createElement(bH,{point:h,childIndex:Number(d),mainColor:r,dataKey:l,activeDot:n}))}var jH="Invariant failed";function SH(e,t){throw new Error(jH)}var AH=["x","y"];function Jg(){return Jg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Jg.apply(null,arguments)}function WS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function Vl(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?WS(Object(r),!0).forEach(function(n){OH(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):WS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function OH(e,t,r){return(t=EH(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function EH(e){var t=kH(e,"string");return typeof t=="symbol"?t:t+""}function kH(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function NH(e,t){if(e==null)return{};var r,n,l=CH(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function CH(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function TH(e,t){var{x:r,y:n}=e,l=NH(e,AH),s="".concat(r),d=parseInt(s,10),p="".concat(n),h=parseInt(p,10),m="".concat(t.height||l.height),g=parseInt(m,10),x="".concat(t.width||l.width),w=parseInt(x,10);return Vl(Vl(Vl(Vl(Vl({},t),l),d?{x:d}:{}),h?{y:h}:{}),{},{height:g,width:w,name:t.name,radius:t.radius})}function Ju(e){return b.createElement(e5,Jg({shapeType:"rectangle",propTransformer:TH,activeClassName:"recharts-active-bar"},e))}var MH=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(n,l)=>{if(de(t))return t;var s=de(n)||nt(n);return s?t(n,l):(s||SH(),r)}},_H={},d5=mr({name:"errorBars",initialState:_H,reducers:{addErrorBar:(e,t)=>{var{itemId:r,errorBar:n}=t.payload;e[r]||(e[r]=[]),e[r].push(n)},replaceErrorBar:(e,t)=>{var{itemId:r,prev:n,next:l}=t.payload;e[r]&&(e[r]=e[r].map(s=>s.dataKey===n.dataKey&&s.direction===n.direction?l:s))},removeErrorBar:(e,t)=>{var{itemId:r,errorBar:n}=t.payload;e[r]&&(e[r]=e[r].filter(l=>l.dataKey!==n.dataKey||l.direction!==n.direction))}}}),{addErrorBar:JW,replaceErrorBar:eV,removeErrorBar:tV}=d5.actions,PH=d5.reducer,DH=["children"];function zH(e,t){if(e==null)return{};var r,n,l=RH(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function RH(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var LH={data:[],xAxisId:"xAxis-0",yAxisId:"yAxis-0",dataPointFormatter:()=>({x:0,y:0,value:0}),errorBarOffset:0},BH=b.createContext(LH);function f5(e){var{children:t}=e,r=zH(e,DH);return b.createElement(BH.Provider,{value:r},t)}function qv(e,t){var r,n,l=fe(m=>ra(m,e)),s=fe(m=>na(m,t)),d=(r=l?.allowDataOverflow)!==null&&r!==void 0?r:Or.allowDataOverflow,p=(n=s?.allowDataOverflow)!==null&&n!==void 0?n:Er.allowDataOverflow,h=d||p;return{needClip:h,needClipX:d,needClipY:p}}function p5(e){var{xAxisId:t,yAxisId:r,clipPathId:n}=e,l=Iv(),{needClipX:s,needClipY:d,needClip:p}=qv(t,r);if(!p||!l)return null;var{x:h,y:m,width:g,height:x}=l;return b.createElement("clipPath",{id:"clipPath-".concat(n)},b.createElement("rect",{x:s?h:h-g/2,y:d?m:m-x/2,width:s?g:g*2,height:d?x:x*2}))}function IH(e,t){return e&&typeof e=="object"&&"zIndex"in e&&typeof e.zIndex=="number"&&mt(e.zIndex)?e.zIndex:t}var qH=["onMouseEnter","onMouseLeave","onClick"],$H=["value","background","tooltipPosition"],UH=["id"],HH=["onMouseEnter","onClick","onMouseLeave"];function Zn(){return Zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Zn.apply(null,arguments)}function VS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function tr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?VS(Object(r),!0).forEach(function(n){YH(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):VS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function YH(e,t,r){return(t=GH(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function GH(e){var t=KH(e,"string");return typeof t=="symbol"?t:t+""}function KH(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ed(e,t){if(e==null)return{};var r,n,l=WH(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function WH(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var VH=e=>{var{dataKey:t,name:r,fill:n,legendType:l,hide:s}=e;return[{inactive:s,dataKey:t,type:l,color:n,value:kd(r,t),payload:e}]};function XH(e){var{dataKey:t,stroke:r,strokeWidth:n,fill:l,name:s,hide:d,unit:p}=e;return{dataDefinedOnItem:void 0,positions:void 0,settings:{stroke:r,strokeWidth:n,fill:l,dataKey:t,nameKey:void 0,name:kd(s,t),hide:d,type:e.tooltipType,color:e.fill,unit:p}}}function FH(e){var t=fe(bi),{data:r,dataKey:n,background:l,allOtherBarProps:s}=e,{onMouseEnter:d,onMouseLeave:p,onClick:h}=s,m=ed(s,qH),g=t5(d,n),x=r5(p),w=n5(h,n);if(!l||r==null)return null;var j=ms(l);return b.createElement(Fr,{zIndex:IH(l,Rt.barBackground)},r.map((S,A)=>{var{value:O,background:k,tooltipPosition:T}=S,C=ed(S,$H);if(!k)return null;var _=g(S,A),M=x(S,A),R=w(S,A),U=tr(tr(tr(tr(tr({option:l,isActive:String(A)===t},C),{},{fill:"#eee"},k),j),bd(m,S,A)),{},{onMouseEnter:_,onMouseLeave:M,onClick:R,dataKey:n,index:A,className:"recharts-bar-background-rectangle"});return b.createElement(Ju,Zn({key:"background-bar-".concat(A)},U))}))}function ZH(e){var{showLabels:t,children:r,rects:n}=e,l=n?.map(s=>{var d={x:s.x,y:s.y,width:s.width,lowerWidth:s.width,upperWidth:s.width,height:s.height};return tr(tr({},d),{},{value:s.value,payload:s.payload,parentViewBox:s.parentViewBox,viewBox:d,fill:s.fill})});return b.createElement(Wk,{value:t?l:void 0},r)}function QH(e){var{shape:t,activeBar:r,baseProps:n,entry:l,index:s,dataKey:d}=e,p=fe(bi),h=fe(Sk),m=r&&String(s)===p&&(h==null||d===h),g=m?r:t;return m?b.createElement(Fr,{zIndex:Rt.activeBar},b.createElement(Ju,Zn({},n,{name:String(n.name)},l,{isActive:m,option:g,index:s,dataKey:d}))):b.createElement(Ju,Zn({},n,{name:String(n.name)},l,{isActive:m,option:g,index:s,dataKey:d}))}function JH(e){var{shape:t,baseProps:r,entry:n,index:l,dataKey:s}=e;return b.createElement(Ju,Zn({},r,{name:String(r.name)},n,{isActive:!1,option:t,index:l,dataKey:s}))}function eY(e){var t,{data:r,props:n}=e,l=(t=nn(n))!==null&&t!==void 0?t:{},{id:s}=l,d=ed(l,UH),{shape:p,dataKey:h,activeBar:m}=n,{onMouseEnter:g,onClick:x,onMouseLeave:w}=n,j=ed(n,HH),S=t5(g,h),A=r5(w),O=n5(x,h);return r?b.createElement(b.Fragment,null,r.map((k,T)=>b.createElement(Gr,Zn({key:"rectangle-".concat(k?.x,"-").concat(k?.y,"-").concat(k?.value,"-").concat(T),className:"recharts-bar-rectangle"},bd(j,k,T),{onMouseEnter:S(k,T),onMouseLeave:A(k,T),onClick:O(k,T)}),m?b.createElement(QH,{shape:p,activeBar:m,baseProps:d,entry:k,index:T,dataKey:h}):b.createElement(JH,{shape:p,baseProps:d,entry:k,index:T,dataKey:h})))):null}function tY(e){var{props:t,previousRectanglesRef:r}=e,{data:n,layout:l,isAnimationActive:s,animationBegin:d,animationDuration:p,animationEasing:h,onAnimationEnd:m,onAnimationStart:g}=t,x=r.current,w=zd(t,"recharts-bar-"),[j,S]=b.useState(!1),A=!j,O=b.useCallback(()=>{typeof m=="function"&&m(),S(!1)},[m]),k=b.useCallback(()=>{typeof g=="function"&&g(),S(!0)},[g]);return b.createElement(ZH,{showLabels:A,rects:n},b.createElement(Dd,{animationId:w,begin:d,duration:p,isActive:s,easing:h,onAnimationEnd:O,onAnimationStart:k,key:w},T=>{var C=T===1?n:n?.map((_,M)=>{var R=x&&x[M];if(R)return tr(tr({},_),{},{x:ct(R.x,_.x,T),y:ct(R.y,_.y,T),width:ct(R.width,_.width,T),height:ct(R.height,_.height,T)});if(l==="horizontal"){var U=ct(0,_.height,T),F=ct(_.stackedBarStart,_.y,T);return tr(tr({},_),{},{y:F,height:U})}var te=ct(0,_.width,T),ie=ct(_.stackedBarStart,_.x,T);return tr(tr({},_),{},{width:te,x:ie})});return T>0&&(r.current=C??null),C==null?null:b.createElement(Gr,null,b.createElement(eY,{props:t,data:C}))}),b.createElement(Xk,{label:t.label}),t.children)}function rY(e){var t=b.useRef(null);return b.createElement(tY,{previousRectanglesRef:t,props:e})}var h5=0,nY=(e,t)=>{var r=Array.isArray(e.value)?e.value[1]:e.value;return{x:e.x,y:e.y,value:r,errorVal:Lt(e,t)}};class aY extends b.PureComponent{render(){var{hide:t,data:r,dataKey:n,className:l,xAxisId:s,yAxisId:d,needClip:p,background:h,id:m}=this.props;if(t||r==null)return null;var g=$e("recharts-bar",l),x=m;return b.createElement(Gr,{className:g,id:m},p&&b.createElement("defs",null,b.createElement(p5,{clipPathId:x,xAxisId:s,yAxisId:d})),b.createElement(Gr,{className:"recharts-bar-rectangles",clipPath:p?"url(#clipPath-".concat(x,")"):void 0},b.createElement(FH,{data:r,dataKey:n,background:h,allOtherBarProps:this.props}),b.createElement(rY,this.props)))}}var iY={activeBar:!1,animationBegin:0,animationDuration:400,animationEasing:"ease",hide:!1,isAnimationActive:!Ai.isSsr,legendType:"rect",minPointSize:h5,xAxisId:0,yAxisId:0,zIndex:Rt.bar};function oY(e){var{xAxisId:t,yAxisId:r,hide:n,legendType:l,minPointSize:s,activeBar:d,animationBegin:p,animationDuration:h,animationEasing:m,isAnimationActive:g}=e,{needClip:x}=qv(t,r),w=bs(),j=Zt(),S=jU(e.children,zk),A=fe(T=>DY(T,t,r,j,e.id,S));if(w!=="vertical"&&w!=="horizontal")return null;var O,k=A?.[0];return k==null||k.height==null||k.width==null?O=0:O=w==="vertical"?k.height/2:k.width/2,b.createElement(f5,{xAxisId:t,yAxisId:r,data:A,dataPointFormatter:nY,errorBarOffset:O},b.createElement(aY,Zn({},e,{layout:w,needClip:x,data:A,xAxisId:t,yAxisId:r,hide:n,legendType:l,minPointSize:s,activeBar:d,animationBegin:p,animationDuration:h,animationEasing:m,isAnimationActive:g})))}function lY(e){var{layout:t,barSettings:{dataKey:r,minPointSize:n},pos:l,bandSize:s,xAxis:d,yAxis:p,xAxisTicks:h,yAxisTicks:m,stackedData:g,displayedData:x,offset:w,cells:j,parentViewBox:S,dataStartIndex:A}=e,O=t==="horizontal"?p:d,k=g?O.scale.domain():null,T=WD({numericAxis:O}),C=O.scale(T);return x.map((_,M)=>{var R,U,F,te,ie,Z;g?R=$D(g[M+A],k):(R=Lt(_,r),Array.isArray(R)||(R=[T,R]));var J=MH(n,h5)(R[1],M);if(t==="horizontal"){var he,[ge,ye]=[p.scale(R[0]),p.scale(R[1])];U=O2({axis:d,ticks:h,bandSize:s,offset:l.offset,entry:_,index:M}),F=(he=ye??ge)!==null&&he!==void 0?he:void 0,te=l.size;var $=ge-ye;if(ie=an($)?0:$,Z={x:U,y:w.top,width:te,height:w.height},Math.abs(J)>0&&Math.abs(ie)<Math.abs(J)){var K=pr(ie||J)*(Math.abs(J)-Math.abs(ie));F-=K,ie+=K}}else{var[ne,oe]=[d.scale(R[0]),d.scale(R[1])];if(U=ne,F=O2({axis:p,ticks:m,bandSize:s,offset:l.offset,entry:_,index:M}),te=oe-ne,ie=l.size,Z={x:w.left,y:F,width:w.width,height:ie},Math.abs(J)>0&&Math.abs(te)<Math.abs(J)){var D=pr(te||J)*(Math.abs(J)-Math.abs(te));te+=D}}if(U==null||F==null||te==null||ie==null)return null;var V=tr(tr({},_),{},{stackedBarStart:C,x:U,y:F,width:te,height:ie,value:g?R:R[1],payload:_,background:Z,tooltipPosition:{x:U+te/2,y:F+ie/2},parentViewBox:S},j&&j[M]&&j[M].props);return V}).filter(Boolean)}function sY(e){var t=Gt(e,iY),r=Zt();return b.createElement(l5,{id:t.id,type:"bar"},n=>b.createElement(b.Fragment,null,b.createElement(i5,{legendPayload:VH(t)}),b.createElement(a5,{fn:XH,args:t}),b.createElement(c5,{type:"bar",id:n,data:void 0,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,stackId:KD(t.stackId),hide:t.hide,barSize:t.barSize,minPointSize:t.minPointSize,maxBarSize:t.maxBarSize,isPanorama:r}),b.createElement(Fr,{zIndex:t.zIndex},b.createElement(oY,Zn({},t,{id:n})))))}var td=b.memo(sY);td.displayName="Bar";function XS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function cu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?XS(Object(r),!0).forEach(function(n){cY(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):XS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function cY(e,t,r){return(t=uY(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function uY(e){var t=dY(e,"string");return typeof t=="symbol"?t:t+""}function dY(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var fY=(e,t)=>t,pY=(e,t,r)=>r,hY=(e,t,r,n)=>n,mY=(e,t,r,n,l)=>l,Ms=Y([Zd,mY],(e,t)=>e.filter(r=>r.type==="bar").find(r=>r.id===t)),gY=Y([Ms],e=>e?.maxBarSize),vY=(e,t,r,n,l,s)=>s,FS=(e,t,r)=>{var n=r??e;if(!nt(n))return on(n,t,0)},xY=Y([Re,Zd,fY,pY,hY],(e,t,r,n,l)=>t.filter(s=>e==="horizontal"?s.xAxisId===r:s.yAxisId===n).filter(s=>s.isPanorama===l).filter(s=>s.hide===!1).filter(s=>s.type==="bar")),yY=(e,t,r,n)=>{var l=Re(e);return l==="horizontal"?Yg(e,"yAxis",r,n):Yg(e,"xAxis",t,n)},bY=(e,t,r)=>{var n=Re(e);return n==="horizontal"?Qj(e,"xAxis",t):Qj(e,"yAxis",r)},wY=(e,t,r)=>{var n={},l=e.filter(Vd),s=e.filter(m=>m.stackId==null),d=l.reduce((m,g)=>(m[g.stackId]||(m[g.stackId]=[]),m[g.stackId].push(g),m),n),p=Object.entries(d).map(m=>{var[g,x]=m,w=x.map(S=>S.dataKey),j=FS(t,r,x[0].barSize);return{stackId:g,dataKeys:w,barSize:j}}),h=s.map(m=>{var g=[m.dataKey].filter(w=>w!=null),x=FS(t,r,m.barSize);return{stackId:void 0,dataKeys:g,barSize:x}});return[...p,...h]},jY=Y([xY,iB,bY],wY),SY=(e,t,r,n,l)=>{var s,d,p=Ms(e,t,r,n,l);if(p!=null){var h=Re(e),m=d3(e),{maxBarSize:g}=p,x=nt(g)?m:g,w,j;return h==="horizontal"?(w=Da(e,"xAxis",t,n),j=Pa(e,"xAxis",t,n)):(w=Da(e,"yAxis",r,n),j=Pa(e,"yAxis",r,n)),(s=(d=jo(w,j,!0))!==null&&d!==void 0?d:x)!==null&&s!==void 0?s:0}},m5=(e,t,r,n)=>{var l=Re(e),s,d;return l==="horizontal"?(s=Da(e,"xAxis",t,n),d=Pa(e,"xAxis",t,n)):(s=Da(e,"yAxis",r,n),d=Pa(e,"yAxis",r,n)),jo(s,d)};function AY(e,t,r,n,l){var s=n.length;if(!(s<1)){var d=on(e,r,0,!0),p,h=[];if(mt(n[0].barSize)){var m=!1,g=r/s,x=n.reduce((k,T)=>k+(T.barSize||0),0);x+=(s-1)*d,x>=r&&(x-=(s-1)*d,d=0),x>=r&&g>0&&(m=!0,g*=.9,x=s*g);var w=(r-x)/2>>0,j={offset:w-d,size:0};p=n.reduce((k,T)=>{var C,_={stackId:T.stackId,dataKeys:T.dataKeys,position:{offset:j.offset+j.size+d,size:m?g:(C=T.barSize)!==null&&C!==void 0?C:0}},M=[...k,_];return j=M[M.length-1].position,M},h)}else{var S=on(t,r,0,!0);r-2*S-(s-1)*d<=0&&(d=0);var A=(r-2*S-(s-1)*d)/s;A>1&&(A>>=0);var O=mt(l)?Math.min(A,l):A;p=n.reduce((k,T,C)=>[...k,{stackId:T.stackId,dataKeys:T.dataKeys,position:{offset:S+(A+d)*C+(A-O)/2,size:O}}],h)}return p}}var OY=(e,t,r,n,l,s,d)=>{var p=nt(d)?t:d,h=AY(r,n,l!==s?l:s,e,p);return l!==s&&h!=null&&(h=h.map(m=>cu(cu({},m),{},{position:cu(cu({},m.position),{},{offset:m.position.offset-l/2})}))),h},EY=Y([jY,d3,aB,f3,SY,m5,gY],OY),kY=(e,t,r,n)=>Da(e,"xAxis",t,n),NY=(e,t,r,n)=>Da(e,"yAxis",r,n),CY=(e,t,r,n)=>Pa(e,"xAxis",t,n),TY=(e,t,r,n)=>Pa(e,"yAxis",r,n),MY=Y([EY,Ms],(e,t)=>{if(!(e==null||t==null)){var r=e.find(n=>n.stackId===t.stackId&&t.dataKey!=null&&n.dataKeys.includes(t.dataKey));if(r!=null)return r.position}}),_Y=(e,t)=>{var r=xv(t);if(!(!e||r==null||t==null)){var{stackId:n}=t;if(n!=null){var l=e[n];if(l){var{stackedData:s}=l;if(s)return s.find(d=>d.key===r)}}}},PY=Y([yY,Ms],_Y),DY=Y([Bt,L0,kY,NY,CY,TY,MY,Re,Ud,m5,PY,Ms,vY],(e,t,r,n,l,s,d,p,h,m,g,x,w)=>{var{chartData:j,dataStartIndex:S,dataEndIndex:A}=h;if(!(x==null||d==null||t==null||p!=="horizontal"&&p!=="vertical"||r==null||n==null||l==null||s==null||m==null)){var{data:O}=x,k;if(O!=null&&O.length>0?k=O:k=j?.slice(S,A+1),k!=null)return lY({layout:p,barSettings:x,pos:d,parentViewBox:t,bandSize:m,xAxis:r,yAxis:n,xAxisTicks:l,yAxisTicks:s,stackedData:g,displayedData:k,offset:e,cells:w,dataStartIndex:S})}}),zY=e=>{var{chartData:t}=e,r=ot(),n=Zt();return b.useEffect(()=>n?()=>{}:(r(dS(t)),()=>{r(dS(void 0))}),[t,r,n]),null},ZS={x:0,y:0,width:0,height:0,padding:{top:0,right:0,bottom:0,left:0}},g5=mr({name:"brush",initialState:ZS,reducers:{setBrushSettings(e,t){return t.payload==null?ZS:t.payload}}}),{setBrushSettings:rV}=g5.actions,RY=g5.reducer;function LY(e,t,r){return(t=BY(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function BY(e){var t=IY(e,"string");return typeof t=="symbol"?t:t+""}function IY(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class $v{static create(t){return new $v(t)}constructor(t){this.scale=t}get domain(){return this.scale.domain}get range(){return this.scale.range}get rangeMin(){return this.range()[0]}get rangeMax(){return this.range()[1]}get bandwidth(){return this.scale.bandwidth}apply(t){var{bandAware:r,position:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t!==void 0){if(n)switch(n){case"start":return this.scale(t);case"middle":{var l=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+l}case"end":{var s=this.bandwidth?this.bandwidth():0;return this.scale(t)+s}default:return this.scale(t)}if(r){var d=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+d}return this.scale(t)}}isInRange(t){var r=this.range(),n=r[0],l=r[r.length-1];return n<=l?t>=n&&t<=l:t>=l&&t<=n}}LY($v,"EPS",1e-4);function qY(e){return(e%180+180)%180}var $Y=function(t){var{width:r,height:n}=t,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=qY(l),d=s*Math.PI/180,p=Math.atan(n/r),h=d>p&&d<Math.PI-p?n/Math.sin(d):r/Math.cos(d);return Math.abs(h)},UY={dots:[],areas:[],lines:[]},v5=mr({name:"referenceElements",initialState:UY,reducers:{addDot:(e,t)=>{e.dots.push(t.payload)},removeDot:(e,t)=>{var r=Un(e).dots.findIndex(n=>n===t.payload);r!==-1&&e.dots.splice(r,1)},addArea:(e,t)=>{e.areas.push(t.payload)},removeArea:(e,t)=>{var r=Un(e).areas.findIndex(n=>n===t.payload);r!==-1&&e.areas.splice(r,1)},addLine:(e,t)=>{e.lines.push(t.payload)},removeLine:(e,t)=>{var r=Un(e).lines.findIndex(n=>n===t.payload);r!==-1&&e.lines.splice(r,1)}}}),{addDot:nV,removeDot:aV,addArea:iV,removeArea:oV,addLine:lV,removeLine:sV}=v5.actions,HY=v5.reducer,YY=b.createContext(void 0),GY=e=>{var{children:t}=e,[r]=b.useState("".concat(es("recharts"),"-clip")),n=Iv();if(n==null)return null;var{x:l,y:s,width:d,height:p}=n;return b.createElement(YY.Provider,{value:r},b.createElement("defs",null,b.createElement("clipPath",{id:r},b.createElement("rect",{x:l,y:s,height:p,width:d}))),t)};function ko(e,t){for(var r in e)if({}.hasOwnProperty.call(e,r)&&(!{}.hasOwnProperty.call(t,r)||e[r]!==t[r]))return!1;for(var n in t)if({}.hasOwnProperty.call(t,n)&&!{}.hasOwnProperty.call(e,n))return!1;return!0}function x5(e,t){if(t<1)return[];if(t===1)return e;for(var r=[],n=0;n<e.length;n+=t)r.push(e[n]);return r}function KY(e,t,r){var n={width:e.width+t.width,height:e.height+t.height};return $Y(n,r)}function WY(e,t,r){var n=r==="width",{x:l,y:s,width:d,height:p}=e;return t===1?{start:n?l:s,end:n?l+d:s+p}:{start:n?l+d:s+p,end:n?l:s}}function rd(e,t,r,n,l){if(e*t<e*n||e*t>e*l)return!1;var s=r();return e*(t-e*s/2-n)>=0&&e*(t+e*s/2-l)<=0}function VY(e,t){return x5(e,t+1)}function XY(e,t,r,n,l){for(var s=(n||[]).slice(),{start:d,end:p}=t,h=0,m=1,g=d,x=function(){var S=n?.[h];if(S===void 0)return{v:x5(n,m)};var A=h,O,k=()=>(O===void 0&&(O=r(S,A)),O),T=S.coordinate,C=h===0||rd(e,T,k,g,p);C||(h=0,g=d,m+=1),C&&(g=T+e*(k()/2+l),h+=m)},w;m<=s.length;)if(w=x(),w)return w.v;return[]}function QS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function Xt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?QS(Object(r),!0).forEach(function(n){FY(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):QS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function FY(e,t,r){return(t=ZY(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ZY(e){var t=QY(e,"string");return typeof t=="symbol"?t:t+""}function QY(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function JY(e,t,r,n,l){for(var s=(n||[]).slice(),d=s.length,{start:p}=t,{end:h}=t,m=function(w){var j=s[w],S,A=()=>(S===void 0&&(S=r(j,w)),S);if(w===d-1){var O=e*(j.coordinate+e*A()/2-h);s[w]=j=Xt(Xt({},j),{},{tickCoord:O>0?j.coordinate-O*e:j.coordinate})}else s[w]=j=Xt(Xt({},j),{},{tickCoord:j.coordinate});if(j.tickCoord!=null){var k=rd(e,j.tickCoord,A,p,h);k&&(h=j.tickCoord-e*(A()/2+l),s[w]=Xt(Xt({},j),{},{isShow:!0}))}},g=d-1;g>=0;g--)m(g);return s}function eG(e,t,r,n,l,s){var d=(n||[]).slice(),p=d.length,{start:h,end:m}=t;if(s){var g=n[p-1],x=r(g,p-1),w=e*(g.coordinate+e*x/2-m);if(d[p-1]=g=Xt(Xt({},g),{},{tickCoord:w>0?g.coordinate-w*e:g.coordinate}),g.tickCoord!=null){var j=rd(e,g.tickCoord,()=>x,h,m);j&&(m=g.tickCoord-e*(x/2+l),d[p-1]=Xt(Xt({},g),{},{isShow:!0}))}}for(var S=s?p-1:p,A=function(T){var C=d[T],_,M=()=>(_===void 0&&(_=r(C,T)),_);if(T===0){var R=e*(C.coordinate-e*M()/2-h);d[T]=C=Xt(Xt({},C),{},{tickCoord:R<0?C.coordinate-R*e:C.coordinate})}else d[T]=C=Xt(Xt({},C),{},{tickCoord:C.coordinate});if(C.tickCoord!=null){var U=rd(e,C.tickCoord,M,h,m);U&&(h=C.tickCoord+e*(M()/2+l),d[T]=Xt(Xt({},C),{},{isShow:!0}))}},O=0;O<S;O++)A(O);return d}function Uv(e,t,r){var{tick:n,ticks:l,viewBox:s,minTickGap:d,orientation:p,interval:h,tickFormatter:m,unit:g,angle:x}=e;if(!l||!l.length||!n)return[];if(de(h)||Ai.isSsr){var w;return(w=VY(l,de(h)?h:0))!==null&&w!==void 0?w:[]}var j=[],S=p==="top"||p==="bottom"?"width":"height",A=g&&S==="width"?Zl(g,{fontSize:t,letterSpacing:r}):{width:0,height:0},O=(C,_)=>{var M=typeof m=="function"?m(C.value,_):C.value;return S==="width"?KY(Zl(M,{fontSize:t,letterSpacing:r}),A,x):Zl(M,{fontSize:t,letterSpacing:r})[S]},k=l.length>=2?pr(l[1].coordinate-l[0].coordinate):1,T=WY(s,k,S);return h==="equidistantPreserveStart"?XY(k,T,O,l,d):(h==="preserveStart"||h==="preserveStartEnd"?j=eG(k,T,O,l,d,h==="preserveStartEnd"):j=JY(k,T,O,l,d),j.filter(C=>C.isShow))}var tG=e=>{var{ticks:t,label:r,labelGapWithTick:n=5,tickSize:l=0,tickMargin:s=0}=e,d=0;if(t){Array.from(t).forEach(g=>{if(g){var x=g.getBoundingClientRect();x.width>d&&(d=x.width)}});var p=r?r.getBoundingClientRect().width:0,h=l+s,m=d+h+p+(r?n:0);return Math.round(m)}return 0},rG=["axisLine","width","height","className","hide","ticks","axisType"],nG=["viewBox"],aG=["viewBox"];function e0(e,t){if(e==null)return{};var r,n,l=iG(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function iG(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wi.apply(null,arguments)}function JS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function yt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?JS(Object(r),!0).forEach(function(n){oG(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):JS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function oG(e,t,r){return(t=lG(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function lG(e){var t=sG(e,"string");return typeof t=="symbol"?t:t+""}function sG(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Hv={x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd",zIndex:Rt.axis};function cG(e){var{x:t,y:r,width:n,height:l,orientation:s,mirror:d,axisLine:p,otherSvgProps:h}=e;if(!p)return null;var m=yt(yt(yt({},h),nn(p)),{},{fill:"none"});if(s==="top"||s==="bottom"){var g=+(s==="top"&&!d||s==="bottom"&&d);m=yt(yt({},m),{},{x1:t,y1:r+g*l,x2:t+n,y2:r+g*l})}else{var x=+(s==="left"&&!d||s==="right"&&d);m=yt(yt({},m),{},{x1:t+x*n,y1:r,x2:t+x*n,y2:r+l})}return b.createElement("line",wi({},m,{className:$e("recharts-cartesian-axis-line",wo(p,"className"))}))}function uG(e,t,r,n,l,s,d,p,h){var m,g,x,w,j,S,A=p?-1:1,O=e.tickSize||d,k=de(e.tickCoord)?e.tickCoord:e.coordinate;switch(s){case"top":m=g=e.coordinate,w=r+ +!p*l,x=w-A*O,S=x-A*h,j=k;break;case"left":x=w=e.coordinate,g=t+ +!p*n,m=g-A*O,j=m-A*h,S=k;break;case"right":x=w=e.coordinate,g=t+ +p*n,m=g+A*O,j=m+A*h,S=k;break;default:m=g=e.coordinate,w=r+ +p*l,x=w+A*O,S=x+A*h,j=k;break}return{line:{x1:m,y1:x,x2:g,y2:w},tick:{x:j,y:S}}}function dG(e,t){switch(e){case"left":return t?"start":"end";case"right":return t?"end":"start";default:return"middle"}}function fG(e,t){switch(e){case"left":case"right":return"middle";case"top":return t?"start":"end";default:return t?"end":"start"}}function pG(e){var{option:t,tickProps:r,value:n}=e,l,s=$e(r.className,"recharts-cartesian-axis-tick-value");if(b.isValidElement(t))l=b.cloneElement(t,yt(yt({},r),{},{className:s}));else if(typeof t=="function")l=t(yt(yt({},r),{},{className:s}));else{var d="recharts-cartesian-axis-tick-value";typeof t!="boolean"&&(d=$e(d,t?.className)),l=b.createElement(Lv,wi({},r,{className:d}),n)}return l}var hG=b.forwardRef((e,t)=>{var{ticks:r=[],tick:n,tickLine:l,stroke:s,tickFormatter:d,unit:p,padding:h,tickTextProps:m,orientation:g,mirror:x,x:w,y:j,width:S,height:A,tickSize:O,tickMargin:k,fontSize:T,letterSpacing:C,getTicksConfig:_,events:M,axisType:R}=e,U=Uv(yt(yt({},_),{},{ticks:r}),T,C),F=dG(g,x),te=fG(g,x),ie=nn(_),Z=ms(n),J={};typeof l=="object"&&(J=l);var he=yt(yt({},ie),{},{fill:"none"},J),ge=U.map(K=>yt({entry:K},uG(K,w,j,S,A,g,O,x,k))),ye=ge.map(K=>{var{entry:ne,line:oe}=K;return b.createElement(Gr,{className:"recharts-cartesian-axis-tick",key:"tick-".concat(ne.value,"-").concat(ne.coordinate,"-").concat(ne.tickCoord)},l&&b.createElement("line",wi({},he,oe,{className:$e("recharts-cartesian-axis-tick-line",wo(l,"className"))})))}),$=ge.map((K,ne)=>{var{entry:oe,tick:D}=K,V=yt(yt(yt(yt({textAnchor:F,verticalAnchor:te},ie),{},{stroke:"none",fill:s},Z),D),{},{index:ne,payload:oe,visibleTicksCount:U.length,tickFormatter:d,padding:h},m);return b.createElement(Gr,wi({className:"recharts-cartesian-axis-tick-label",key:"tick-label-".concat(oe.value,"-").concat(oe.coordinate,"-").concat(oe.tickCoord)},bd(M,oe,ne)),n&&b.createElement(pG,{option:n,tickProps:V,value:"".concat(typeof d=="function"?d(oe.value,ne):oe.value).concat(p||"")}))});return b.createElement("g",{className:"recharts-cartesian-axis-ticks recharts-".concat(R,"-ticks")},$.length>0&&b.createElement(Fr,{zIndex:Rt.label},b.createElement("g",{className:"recharts-cartesian-axis-tick-labels recharts-".concat(R,"-tick-labels"),ref:t},$)),ye.length>0&&b.createElement("g",{className:"recharts-cartesian-axis-tick-lines recharts-".concat(R,"-tick-lines")},ye))}),mG=b.forwardRef((e,t)=>{var{axisLine:r,width:n,height:l,className:s,hide:d,ticks:p,axisType:h}=e,m=e0(e,rG),[g,x]=b.useState(""),[w,j]=b.useState(""),S=b.useRef(null);b.useImperativeHandle(t,()=>({getCalculatedWidth:()=>{var O;return tG({ticks:S.current,label:(O=e.labelRef)===null||O===void 0?void 0:O.current,labelGapWithTick:5,tickSize:e.tickSize,tickMargin:e.tickMargin})}}));var A=b.useCallback(O=>{if(O){var k=O.getElementsByClassName("recharts-cartesian-axis-tick-value");S.current=k;var T=k[0];if(T){var C=window.getComputedStyle(T),_=C.fontSize,M=C.letterSpacing;(_!==g||M!==w)&&(x(_),j(M))}}},[g,w]);return d||n!=null&&n<=0||l!=null&&l<=0?null:b.createElement(Fr,{zIndex:e.zIndex},b.createElement(Gr,{className:$e("recharts-cartesian-axis",s)},b.createElement(cG,{x:e.x,y:e.y,width:n,height:l,orientation:e.orientation,mirror:e.mirror,axisLine:r,otherSvgProps:nn(e)}),b.createElement(hG,{ref:A,axisType:h,events:m,fontSize:g,getTicksConfig:e,height:e.height,letterSpacing:w,mirror:e.mirror,orientation:e.orientation,padding:e.padding,stroke:e.stroke,tick:e.tick,tickFormatter:e.tickFormatter,tickLine:e.tickLine,tickMargin:e.tickMargin,tickSize:e.tickSize,tickTextProps:e.tickTextProps,ticks:p,unit:e.unit,width:e.width,x:e.x,y:e.y}),b.createElement(V$,{x:e.x,y:e.y,width:e.width,height:e.height,lowerWidth:e.width,upperWidth:e.width},b.createElement(aU,{label:e.label,labelRef:e.labelRef}),e.children)))}),gG=b.memo(mG,(e,t)=>{var{viewBox:r}=e,n=e0(e,nG),{viewBox:l}=t,s=e0(t,aG);return ko(r,l)&&ko(n,s)}),Yv=b.forwardRef((e,t)=>{var r=Gt(e,Hv);return b.createElement(gG,wi({},r,{ref:t}))});Yv.displayName="CartesianAxis";var vG=["x1","y1","x2","y2","key"],xG=["offset"],yG=["xAxisId","yAxisId"],bG=["xAxisId","yAxisId"];function eA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function Ft(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?eA(Object(r),!0).forEach(function(n){wG(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function wG(e,t,r){return(t=jG(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function jG(e){var t=SG(e,"string");return typeof t=="symbol"?t:t+""}function SG(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function di(){return di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},di.apply(null,arguments)}function nd(e,t){if(e==null)return{};var r,n,l=AG(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function AG(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var OG=e=>{var{fill:t}=e;if(!t||t==="none")return null;var{fillOpacity:r,x:n,y:l,width:s,height:d,ry:p}=e;return b.createElement("rect",{x:n,y:l,ry:p,width:s,height:d,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function y5(e){var{option:t,lineItemProps:r}=e,n;if(b.isValidElement(t))n=b.cloneElement(t,r);else if(typeof t=="function")n=t(r);else{var l,{x1:s,y1:d,x2:p,y2:h,key:m}=r,g=nd(r,vG),x=(l=nn(g))!==null&&l!==void 0?l:{},{offset:w}=x,j=nd(x,xG);n=b.createElement("line",di({},j,{x1:s,y1:d,x2:p,y2:h,fill:"none",key:m}))}return n}function EG(e){var{x:t,width:r,horizontal:n=!0,horizontalPoints:l}=e;if(!n||!l||!l.length)return null;var{xAxisId:s,yAxisId:d}=e,p=nd(e,yG),h=l.map((m,g)=>{var x=Ft(Ft({},p),{},{x1:t,y1:m,x2:t+r,y2:m,key:"line-".concat(g),index:g});return b.createElement(y5,{key:"line-".concat(g),option:n,lineItemProps:x})});return b.createElement("g",{className:"recharts-cartesian-grid-horizontal"},h)}function kG(e){var{y:t,height:r,vertical:n=!0,verticalPoints:l}=e;if(!n||!l||!l.length)return null;var{xAxisId:s,yAxisId:d}=e,p=nd(e,bG),h=l.map((m,g)=>{var x=Ft(Ft({},p),{},{x1:m,y1:t,x2:m,y2:t+r,key:"line-".concat(g),index:g});return b.createElement(y5,{option:n,lineItemProps:x,key:"line-".concat(g)})});return b.createElement("g",{className:"recharts-cartesian-grid-vertical"},h)}function NG(e){var{horizontalFill:t,fillOpacity:r,x:n,y:l,width:s,height:d,horizontalPoints:p,horizontal:h=!0}=e;if(!h||!t||!t.length||p==null)return null;var m=p.map(x=>Math.round(x+l-l)).sort((x,w)=>x-w);l!==m[0]&&m.unshift(0);var g=m.map((x,w)=>{var j=!m[w+1],S=j?l+d-x:m[w+1]-x;if(S<=0)return null;var A=w%t.length;return b.createElement("rect",{key:"react-".concat(w),y:x,x:n,height:S,width:s,stroke:"none",fill:t[A],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return b.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},g)}function CG(e){var{vertical:t=!0,verticalFill:r,fillOpacity:n,x:l,y:s,width:d,height:p,verticalPoints:h}=e;if(!t||!r||!r.length)return null;var m=h.map(x=>Math.round(x+l-l)).sort((x,w)=>x-w);l!==m[0]&&m.unshift(0);var g=m.map((x,w)=>{var j=!m[w+1],S=j?l+d-x:m[w+1]-x;if(S<=0)return null;var A=w%r.length;return b.createElement("rect",{key:"react-".concat(w),x,y:s,width:S,height:p,stroke:"none",fill:r[A],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return b.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},g)}var TG=(e,t)=>{var{xAxis:r,width:n,height:l,offset:s}=e;return XO(Uv(Ft(Ft(Ft({},Hv),r),{},{ticks:FO(r),viewBox:{x:0,y:0,width:n,height:l}})),s.left,s.left+s.width,t)},MG=(e,t)=>{var{yAxis:r,width:n,height:l,offset:s}=e;return XO(Uv(Ft(Ft(Ft({},Hv),r),{},{ticks:FO(r),viewBox:{x:0,y:0,width:n,height:l}})),s.top,s.top+s.height,t)},_G={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[],xAxisId:0,yAxisId:0,syncWithTicks:!1,zIndex:Rt.grid};function ad(e){var t=I0(),r=q0(),n=rE(),l=Ft(Ft({},Gt(e,_G)),{},{x:de(e.x)?e.x:n.left,y:de(e.y)?e.y:n.top,width:de(e.width)?e.width:n.width,height:de(e.height)?e.height:n.height}),{xAxisId:s,yAxisId:d,x:p,y:h,width:m,height:g,syncWithTicks:x,horizontalValues:w,verticalValues:j}=l,S=Zt(),A=fe(te=>Jj(te,"xAxis",s,S)),O=fe(te=>Jj(te,"yAxis",d,S));if(!xn(m)||!xn(g)||!de(p)||!de(h))return null;var k=l.verticalCoordinatesGenerator||TG,T=l.horizontalCoordinatesGenerator||MG,{horizontalPoints:C,verticalPoints:_}=l;if((!C||!C.length)&&typeof T=="function"){var M=w&&w.length,R=T({yAxis:O?Ft(Ft({},O),{},{ticks:M?w:O.ticks}):void 0,width:t??m,height:r??g,offset:n},M?!0:x);Tu(Array.isArray(R),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof R,"]")),Array.isArray(R)&&(C=R)}if((!_||!_.length)&&typeof k=="function"){var U=j&&j.length,F=k({xAxis:A?Ft(Ft({},A),{},{ticks:U?j:A.ticks}):void 0,width:t??m,height:r??g,offset:n},U?!0:x);Tu(Array.isArray(F),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof F,"]")),Array.isArray(F)&&(_=F)}return b.createElement(Fr,{zIndex:l.zIndex},b.createElement("g",{className:"recharts-cartesian-grid"},b.createElement(OG,{fill:l.fill,fillOpacity:l.fillOpacity,x:l.x,y:l.y,width:l.width,height:l.height,ry:l.ry}),b.createElement(NG,di({},l,{horizontalPoints:C})),b.createElement(CG,di({},l,{verticalPoints:_})),b.createElement(EG,di({},l,{offset:n,horizontalPoints:C,xAxis:A,yAxis:O})),b.createElement(kG,di({},l,{offset:n,verticalPoints:_,xAxis:A,yAxis:O}))))}ad.displayName="CartesianGrid";var b5=(e,t,r,n)=>Da(e,"xAxis",t,n),w5=(e,t,r,n)=>Pa(e,"xAxis",t,n),j5=(e,t,r,n)=>Da(e,"yAxis",r,n),S5=(e,t,r,n)=>Pa(e,"yAxis",r,n),PG=Y([Re,b5,j5,w5,S5],(e,t,r,n,l)=>za(e,"xAxis")?jo(t,n,!1):jo(r,l,!1)),DG=(e,t,r,n,l)=>l;function zG(e){return e.type==="line"}var RG=Y([Zd,DG],(e,t)=>e.filter(zG).find(r=>r.id===t)),LG=Y([Re,b5,j5,w5,S5,RG,PG,Ud],(e,t,r,n,l,s,d,p)=>{var{chartData:h,dataStartIndex:m,dataEndIndex:g}=p;if(!(s==null||t==null||r==null||n==null||l==null||n.length===0||l.length===0||d==null)){var{dataKey:x,data:w}=s,j;if(w!=null&&w.length>0?j=w:j=h?.slice(m,g+1),j!=null)return aK({layout:e,xAxis:t,yAxis:r,xAxisTicks:n,yAxisTicks:l,dataKey:x,bandSize:d,displayedData:j})}});function BG(e){var t=ms(e),r=3,n=2;if(t!=null){var{r:l,strokeWidth:s}=t,d=Number(l),p=Number(s);return(Number.isNaN(d)||d<0)&&(d=r),(Number.isNaN(p)||p<0)&&(p=n),{r:d,strokeWidth:p}}return{r,strokeWidth:n}}var IG=["id"],qG=["type","layout","connectNulls","needClip","shape"],$G=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function ds(){return ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ds.apply(null,arguments)}function tA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function hn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?tA(Object(r),!0).forEach(function(n){UG(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function UG(e,t,r){return(t=HG(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function HG(e){var t=YG(e,"string");return typeof t=="symbol"?t:t+""}function YG(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gv(e,t){if(e==null)return{};var r,n,l=GG(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function GG(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var KG=e=>{var{dataKey:t,name:r,stroke:n,legendType:l,hide:s}=e;return[{inactive:s,dataKey:t,type:l,color:n,value:kd(r,t),payload:e}]};function WG(e){var{dataKey:t,data:r,stroke:n,strokeWidth:l,fill:s,name:d,hide:p,unit:h}=e;return{dataDefinedOnItem:r,positions:void 0,settings:{stroke:n,strokeWidth:l,fill:s,dataKey:t,nameKey:void 0,name:kd(d,t),hide:p,type:e.tooltipType,color:e.stroke,unit:h}}}var A5=(e,t)=>"".concat(t,"px ").concat(e-t,"px");function VG(e,t){for(var r=e.length%2!==0?[...e,0]:e,n=[],l=0;l<t;++l)n=[...n,...r];return n}var XG=(e,t,r)=>{var n=r.reduce((x,w)=>x+w);if(!n)return A5(t,e);for(var l=Math.floor(e/n),s=e%n,d=t-e,p=[],h=0,m=0;h<r.length;m+=r[h],++h)if(m+r[h]>s){p=[...r.slice(0,h),s-m];break}var g=p.length%2===0?[0,d]:[d];return[...VG(r,l),...p,...g].map(x=>"".concat(x,"px")).join(", ")};function FG(e){var{clipPathId:t,points:r,props:n}=e,{dot:l,dataKey:s,needClip:d}=n,{id:p}=n,h=Gv(n,IG),m=nn(h);return b.createElement(nH,{points:r,dot:l,className:"recharts-line-dots",dotClassName:"recharts-line-dot",dataKey:s,baseProps:m,needClip:d,clipPathId:t})}function ZG(e){var{showLabels:t,children:r,points:n}=e,l=b.useMemo(()=>n?.map(s=>{var d,p,h={x:(d=s.x)!==null&&d!==void 0?d:0,y:(p=s.y)!==null&&p!==void 0?p:0,width:0,lowerWidth:0,upperWidth:0,height:0};return hn(hn({},h),{},{value:s.value,payload:s.payload,viewBox:h,parentViewBox:void 0,fill:void 0})}),[n]);return b.createElement(Wk,{value:t?l:void 0},r)}function rA(e){var{clipPathId:t,pathRef:r,points:n,strokeDasharray:l,props:s}=e,{type:d,layout:p,connectNulls:h,needClip:m,shape:g}=s,x=Gv(s,qG),w=hn(hn({},nr(x)),{},{fill:"none",className:"recharts-line-curve",clipPath:m?"url(#clipPath-".concat(t,")"):void 0,points:n,type:d,layout:p,connectNulls:h,strokeDasharray:l??s.strokeDasharray});return b.createElement(b.Fragment,null,n?.length>1&&b.createElement(e5,ds({shapeType:"curve",option:g},w,{pathRef:r})),b.createElement(FG,{points:n,clipPathId:t,props:s}))}function QG(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch{return 0}}function JG(e){var{clipPathId:t,props:r,pathRef:n,previousPointsRef:l,longestAnimatedLengthRef:s}=e,{points:d,strokeDasharray:p,isAnimationActive:h,animationBegin:m,animationDuration:g,animationEasing:x,animateNewValues:w,width:j,height:S,onAnimationEnd:A,onAnimationStart:O}=r,k=l.current,T=zd(r,"recharts-line-"),[C,_]=b.useState(!1),M=!C,R=b.useCallback(()=>{typeof A=="function"&&A(),_(!1)},[A]),U=b.useCallback(()=>{typeof O=="function"&&O(),_(!0)},[O]),F=QG(n.current),te=s.current;return b.createElement(ZG,{points:d,showLabels:M},r.children,b.createElement(Dd,{animationId:T,begin:m,duration:g,isActive:h,easing:x,onAnimationEnd:R,onAnimationStart:U,key:T},ie=>{var Z=ct(te,F+te,ie),J=Math.min(Z,F),he;if(h)if(p){var ge="".concat(p).split(/[,\s]+/gim).map(K=>parseFloat(K));he=XG(J,F,ge)}else he=A5(F,J);else he=p==null?void 0:String(p);if(k){var ye=k.length/d.length,$=ie===1?d:d.map((K,ne)=>{var oe=Math.floor(ne*ye);if(k[oe]){var D=k[oe];return hn(hn({},K),{},{x:ct(D.x,K.x,ie),y:ct(D.y,K.y,ie)})}return w?hn(hn({},K),{},{x:ct(j*2,K.x,ie),y:ct(S/2,K.y,ie)}):hn(hn({},K),{},{x:K.x,y:K.y})});return l.current=$,b.createElement(rA,{props:r,points:$,clipPathId:t,pathRef:n,strokeDasharray:he})}return ie>0&&F>0&&(l.current=d,s.current=J),b.createElement(rA,{props:r,points:d,clipPathId:t,pathRef:n,strokeDasharray:he})}),b.createElement(Xk,{label:r.label}))}function eK(e){var{clipPathId:t,props:r}=e,n=b.useRef(null),l=b.useRef(0),s=b.useRef(null);return b.createElement(JG,{props:r,clipPathId:t,previousPointsRef:n,longestAnimatedLengthRef:l,pathRef:s})}var tK=(e,t)=>{var r,n;return{x:(r=e.x)!==null&&r!==void 0?r:void 0,y:(n=e.y)!==null&&n!==void 0?n:void 0,value:e.value,errorVal:Lt(e.payload,t)}};class rK extends b.Component{render(){var{hide:t,dot:r,points:n,className:l,xAxisId:s,yAxisId:d,top:p,left:h,width:m,height:g,id:x,needClip:w,zIndex:j}=this.props;if(t)return null;var S=$e("recharts-line",l),A=x,{r:O,strokeWidth:k}=BG(r),T=Jk(r),C=O*2+k;return b.createElement(Fr,{zIndex:j},b.createElement(Gr,{className:S},w&&b.createElement("defs",null,b.createElement(p5,{clipPathId:A,xAxisId:s,yAxisId:d}),!T&&b.createElement("clipPath",{id:"clipPath-dots-".concat(A)},b.createElement("rect",{x:h-C/2,y:p-C/2,width:m+C,height:g+C}))),b.createElement(f5,{xAxisId:s,yAxisId:d,data:n,dataPointFormatter:tK,errorBarOffset:0},b.createElement(eK,{props:this.props,clipPathId:A}))),b.createElement(wH,{activeDot:this.props.activeDot,points:n,mainColor:this.props.stroke,itemDataKey:this.props.dataKey}))}}var O5={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:!Ai.isSsr,label:!1,legendType:"line",stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0,zIndex:Rt.line};function nK(e){var t=Gt(e,O5),{activeDot:r,animateNewValues:n,animationBegin:l,animationDuration:s,animationEasing:d,connectNulls:p,dot:h,hide:m,isAnimationActive:g,label:x,legendType:w,xAxisId:j,yAxisId:S,id:A}=t,O=Gv(t,$G),{needClip:k}=qv(j,S),T=Iv(),C=bs(),_=Zt(),M=fe(ie=>LG(ie,j,S,_,A));if(C!=="horizontal"&&C!=="vertical"||M==null||T==null)return null;var{height:R,width:U,x:F,y:te}=T;return b.createElement(rK,ds({},O,{id:A,connectNulls:p,dot:h,activeDot:r,animateNewValues:n,animationBegin:l,animationDuration:s,animationEasing:d,isAnimationActive:g,hide:m,label:x,legendType:w,xAxisId:j,yAxisId:S,points:M,layout:C,height:R,width:U,left:F,top:te,needClip:k}))}function aK(e){var{layout:t,xAxis:r,yAxis:n,xAxisTicks:l,yAxisTicks:s,dataKey:d,bandSize:p,displayedData:h}=e;return h.map((m,g)=>{var x=Lt(m,d);if(t==="horizontal"){var w=A2({axis:r,ticks:l,bandSize:p,entry:m,index:g}),j=nt(x)?null:n.scale(x);return{x:w,y:j,value:x,payload:m}}var S=nt(x)?null:r.scale(x),A=A2({axis:n,ticks:s,bandSize:p,entry:m,index:g});return S==null||A==null?null:{x:S,y:A,value:x,payload:m}}).filter(Boolean)}function iK(e){var t=Gt(e,O5),r=Zt();return b.createElement(l5,{id:t.id,type:"line"},n=>b.createElement(b.Fragment,null,b.createElement(i5,{legendPayload:KG(t)}),b.createElement(a5,{fn:WG,args:t}),b.createElement(c5,{type:"line",id:n,data:t.data,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,hide:t.hide,isPanorama:r}),b.createElement(nK,ds({},t,{id:n}))))}var E5=b.memo(iK);E5.displayName="Line";var oK=["dangerouslySetInnerHTML","ticks"],lK=["id"],sK=["domain"],cK=["domain"];function t0(){return t0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t0.apply(null,arguments)}function id(e,t){if(e==null)return{};var r,n,l=uK(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function uK(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function dK(e){var t=ot();return b.useLayoutEffect(()=>(t(sH(e)),()=>{t(cH(e))}),[e,t]),null}var fK=e=>{var{xAxisId:t,className:r}=e,n=fe(L0),l=Zt(),s="xAxis",d=fe(O=>Bo(O,s,t,l)),p=fe(O=>rk(O,s,t,l)),h=fe(O=>Q3(O,t)),m=fe(O=>rI(O,t)),g=fe(O=>b3(O,t));if(h==null||m==null||g==null)return null;var{dangerouslySetInnerHTML:x,ticks:w}=e,j=id(e,oK),{id:S}=g,A=id(g,lK);return b.createElement(Yv,t0({},j,A,{scale:d,x:m.x,y:m.y,width:h.width,height:h.height,className:$e("recharts-".concat(s," ").concat(s),r),viewBox:n,ticks:p,axisType:s}))},pK={allowDataOverflow:Or.allowDataOverflow,allowDecimals:Or.allowDecimals,allowDuplicatedCategory:Or.allowDuplicatedCategory,height:Or.height,hide:!1,mirror:Or.mirror,orientation:Or.orientation,padding:Or.padding,reversed:Or.reversed,scale:Or.scale,tickCount:Or.tickCount,type:Or.type,xAxisId:0},hK=e=>{var t,r,n,l,s,d=Gt(e,pK);return b.createElement(b.Fragment,null,b.createElement(dK,{interval:(t=d.interval)!==null&&t!==void 0?t:"preserveEnd",id:d.xAxisId,scale:d.scale,type:d.type,padding:d.padding,allowDataOverflow:d.allowDataOverflow,domain:d.domain,dataKey:d.dataKey,allowDuplicatedCategory:d.allowDuplicatedCategory,allowDecimals:d.allowDecimals,tickCount:d.tickCount,includeHidden:(r=d.includeHidden)!==null&&r!==void 0?r:!1,reversed:d.reversed,ticks:d.ticks,height:d.height,orientation:d.orientation,mirror:d.mirror,hide:d.hide,unit:d.unit,name:d.name,angle:(n=d.angle)!==null&&n!==void 0?n:0,minTickGap:(l=d.minTickGap)!==null&&l!==void 0?l:5,tick:(s=d.tick)!==null&&s!==void 0?s:!0,tickFormatter:d.tickFormatter}),b.createElement(fK,d))},mK=(e,t)=>{var{domain:r}=e,n=id(e,sK),{domain:l}=t,s=id(t,cK);return ko(n,s)?Array.isArray(r)&&r.length===2&&Array.isArray(l)&&l.length===2?r[0]===l[0]&&r[1]===l[1]:ko({domain:r},{domain:l}):!1},od=b.memo(hK,mK);od.displayName="XAxis";var gK=["dangerouslySetInnerHTML","ticks"],vK=["id"],xK=["domain"],yK=["domain"];function r0(){return r0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r0.apply(null,arguments)}function ld(e,t){if(e==null)return{};var r,n,l=bK(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function bK(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function wK(e){var t=ot();return b.useLayoutEffect(()=>(t(uH(e)),()=>{t(dH(e))}),[e,t]),null}var jK=e=>{var{yAxisId:t,className:r,width:n,label:l}=e,s=b.useRef(null),d=b.useRef(null),p=fe(L0),h=Zt(),m=ot(),g="yAxis",x=fe(M=>Bo(M,g,t,h)),w=fe(M=>J3(M,t)),j=fe(M=>aI(M,t)),S=fe(M=>rk(M,g,t,h)),A=fe(M=>w3(M,t));if(b.useLayoutEffect(()=>{if(!(n!=="auto"||!w||Bv(l)||b.isValidElement(l)||A==null)){var M=s.current;if(M){var R=M.getCalculatedWidth();Math.round(w.width)!==Math.round(R)&&m(fH({id:t,width:R}))}}},[S,w,m,l,t,n,A]),w==null||j==null||A==null)return null;var{dangerouslySetInnerHTML:O,ticks:k}=e,T=ld(e,gK),{id:C}=A,_=ld(A,vK);return b.createElement(Yv,r0({},T,_,{ref:s,labelRef:d,scale:x,x:j.x,y:j.y,tickTextProps:n==="auto"?{width:void 0}:{width:n},width:w.width,height:w.height,className:$e("recharts-".concat(g," ").concat(g),r),viewBox:p,ticks:S,axisType:g}))},SK={allowDataOverflow:Er.allowDataOverflow,allowDecimals:Er.allowDecimals,allowDuplicatedCategory:Er.allowDuplicatedCategory,hide:!1,mirror:Er.mirror,orientation:Er.orientation,padding:Er.padding,reversed:Er.reversed,scale:Er.scale,tickCount:Er.tickCount,type:Er.type,width:Er.width,yAxisId:0},AK=e=>{var t,r,n,l,s,d=Gt(e,SK);return b.createElement(b.Fragment,null,b.createElement(wK,{interval:(t=d.interval)!==null&&t!==void 0?t:"preserveEnd",id:d.yAxisId,scale:d.scale,type:d.type,domain:d.domain,allowDataOverflow:d.allowDataOverflow,dataKey:d.dataKey,allowDuplicatedCategory:d.allowDuplicatedCategory,allowDecimals:d.allowDecimals,tickCount:d.tickCount,padding:d.padding,includeHidden:(r=d.includeHidden)!==null&&r!==void 0?r:!1,reversed:d.reversed,ticks:d.ticks,width:d.width,orientation:d.orientation,mirror:d.mirror,hide:d.hide,unit:d.unit,name:d.name,angle:(n=d.angle)!==null&&n!==void 0?n:0,minTickGap:(l=d.minTickGap)!==null&&l!==void 0?l:5,tick:(s=d.tick)!==null&&s!==void 0?s:!0,tickFormatter:d.tickFormatter}),b.createElement(jK,d))},OK=(e,t)=>{var{domain:r}=e,n=ld(e,xK),{domain:l}=t,s=ld(t,yK);return ko(n,s)?Array.isArray(r)&&r.length===2&&Array.isArray(l)&&l.length===2?r[0]===l[0]&&r[1]===l[1]:ko({domain:r},{domain:l}):!1},sd=b.memo(AK,OK);sd.displayName="YAxis";var eg={exports:{}},tg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nA;function EK(){if(nA)return tg;nA=1;var e=No();function t(h,m){return h===m&&(h!==0||1/h===1/m)||h!==h&&m!==m}var r=typeof Object.is=="function"?Object.is:t,n=e.useSyncExternalStore,l=e.useRef,s=e.useEffect,d=e.useMemo,p=e.useDebugValue;return tg.useSyncExternalStoreWithSelector=function(h,m,g,x,w){var j=l(null);if(j.current===null){var S={hasValue:!1,value:null};j.current=S}else S=j.current;j=d(function(){function O(M){if(!k){if(k=!0,T=M,M=x(M),w!==void 0&&S.hasValue){var R=S.value;if(w(R,M))return C=R}return C=M}if(R=C,r(T,M))return R;var U=x(M);return w!==void 0&&w(R,U)?(T=M,R):(T=M,C=U)}var k=!1,T,C,_=g===void 0?null:g;return[function(){return O(m())},_===null?void 0:function(){return O(_())}]},[m,g,x,w]);var A=n(h,j[0],j[1]);return s(function(){S.hasValue=!0,S.value=A},[A]),p(A),A},tg}var aA;function kK(){return aA||(aA=1,eg.exports=EK()),eg.exports}kK();function NK(e){e()}function CK(){let e=null,t=null;return{clear(){e=null,t=null},notify(){NK(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const l=t={callback:r,next:null,prev:t};return l.prev?l.prev.next=l:e=l,function(){!n||e===null||(n=!1,l.next?l.next.prev=l.prev:t=l.prev,l.prev?l.prev.next=l.next:e=l.next)}}}}var iA={notify(){},get:()=>[]};function TK(e,t){let r,n=iA,l=0,s=!1;function d(A){g();const O=n.subscribe(A);let k=!1;return()=>{k||(k=!0,O(),x())}}function p(){n.notify()}function h(){S.onStateChange&&S.onStateChange()}function m(){return s}function g(){l++,r||(r=e.subscribe(h),n=CK())}function x(){l--,r&&l===0&&(r(),r=void 0,n.clear(),n=iA)}function w(){s||(s=!0,g())}function j(){s&&(s=!1,x())}const S={addNestedSub:d,notifyNestedSubs:p,handleChangeWrapper:h,isSubscribed:m,trySubscribe:w,tryUnsubscribe:j,getListeners:()=>n};return S}var MK=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_K=MK(),PK=()=>typeof navigator<"u"&&navigator.product==="ReactNative",DK=PK(),zK=()=>_K||DK?b.useLayoutEffect:b.useEffect,RK=zK(),LK=Symbol.for("react-redux-context"),BK=typeof globalThis<"u"?globalThis:{};function IK(){if(!b.createContext)return{};const e=BK[LK]??=new Map;let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var qK=IK();function $K(e){const{children:t,context:r,serverState:n,store:l}=e,s=b.useMemo(()=>{const h=TK(l);return{store:l,subscription:h,getServerState:n?()=>n:void 0}},[l,n]),d=b.useMemo(()=>l.getState(),[l]);RK(()=>{const{subscription:h}=s;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),d!==l.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[s,d]);const p=r||qK;return b.createElement(p.Provider,{value:s},t)}var UK=$K,HK=(e,t)=>t,Kv=Y([HK,Re,x3,kt,yk,aa,mq,Bt],jq),Wv=e=>{var t=e.currentTarget.getBoundingClientRect(),r=t.width/e.currentTarget.offsetWidth,n=t.height/e.currentTarget.offsetHeight;return{chartX:Math.round((e.clientX-t.left)/r),chartY:Math.round((e.clientY-t.top)/n)}},k5=Kr("mouseClick"),N5=xs();N5.startListening({actionCreator:k5,effect:(e,t)=>{var r=e.payload,n=Kv(t.getState(),Wv(r));n?.activeIndex!=null&&t.dispatch(vI({activeIndex:n.activeIndex,activeDataKey:void 0,activeCoordinate:n.activeCoordinate}))}});var n0=Kr("mouseMove"),C5=xs();C5.startListening({actionCreator:n0,effect:(e,t)=>{var r=e.payload,n=t.getState(),l=Nv(n,n.tooltip.settings.shared),s=Kv(n,Wv(r));l==="axis"&&(s?.activeIndex!=null?t.dispatch(uk({activeIndex:s.activeIndex,activeDataKey:void 0,activeCoordinate:s.activeCoordinate})):t.dispatch(ck()))}});var oA={accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,barSize:void 0,className:void 0,maxBarSize:void 0,stackOffset:"none",syncId:void 0,syncMethod:"index",baseValue:void 0},T5=mr({name:"rootProps",initialState:oA,reducers:{updateOptions:(e,t)=>{var r;e.accessibilityLayer=t.payload.accessibilityLayer,e.barCategoryGap=t.payload.barCategoryGap,e.barGap=(r=t.payload.barGap)!==null&&r!==void 0?r:oA.barGap,e.barSize=t.payload.barSize,e.maxBarSize=t.payload.maxBarSize,e.stackOffset=t.payload.stackOffset,e.syncId=t.payload.syncId,e.syncMethod=t.payload.syncMethod,e.className=t.payload.className,e.baseValue=t.payload.baseValue}}}),YK=T5.reducer,{updateOptions:GK}=T5.actions,M5=mr({name:"polarOptions",initialState:null,reducers:{updatePolarOptions:(e,t)=>t.payload}}),{updatePolarOptions:cV}=M5.actions,KK=M5.reducer,_5=Kr("keyDown"),P5=Kr("focus"),Vv=xs();Vv.startListening({actionCreator:_5,effect:(e,t)=>{var r=t.getState(),n=r.rootProps.accessibilityLayer!==!1;if(n){var{keyboardInteraction:l}=r.tooltip,s=e.payload;if(!(s!=="ArrowRight"&&s!=="ArrowLeft"&&s!=="Enter")){var d=Number(Cv(l,qo(r))),p=aa(r);if(s==="Enter"){var h=Vu(r,"axis","hover",String(l.index));t.dispatch(Kg({active:!l.active,activeIndex:l.index,activeDataKey:l.dataKey,activeCoordinate:h}));return}var m=sI(r),g=m==="left-to-right"?1:-1,x=s==="ArrowRight"?1:-1,w=d+x*g;if(!(p==null||w>=p.length||w<0)){var j=Vu(r,"axis","hover",String(w));t.dispatch(Kg({active:!0,activeIndex:w.toString(),activeDataKey:void 0,activeCoordinate:j}))}}}}});Vv.startListening({actionCreator:P5,effect:(e,t)=>{var r=t.getState(),n=r.rootProps.accessibilityLayer!==!1;if(n){var{keyboardInteraction:l}=r.tooltip;if(!l.active&&l.index==null){var s="0",d=Vu(r,"axis","hover",String(s));t.dispatch(Kg({activeDataKey:void 0,active:!0,activeIndex:s,activeCoordinate:d}))}}}});var Ur=Kr("externalEvent"),D5=xs();D5.startListening({actionCreator:Ur,effect:(e,t)=>{if(e.payload.handler!=null){var r=t.getState(),n={activeCoordinate:JI(r),activeDataKey:Sk(r),activeIndex:bi(r),activeLabel:jk(r),activeTooltipIndex:bi(r),isTooltipActive:eq(r)};e.payload.handler(n,e.payload.reactEvent)}}});var WK=Y([Io],e=>e.tooltipItemPayloads),VK=Y([WK,Cs,(e,t,r)=>t,(e,t,r)=>r],(e,t,r,n)=>{var l=e.find(p=>p.settings.dataKey===n);if(l!=null){var{positions:s}=l;if(s!=null){var d=t(s,r);return d}}}),z5=Kr("touchMove"),R5=xs();R5.startListening({actionCreator:z5,effect:(e,t)=>{var r=e.payload;if(!(r.touches==null||r.touches.length===0)){var n=t.getState(),l=Nv(n,n.tooltip.settings.shared);if(l==="axis"){var s=Kv(n,Wv({clientX:r.touches[0].clientX,clientY:r.touches[0].clientY,currentTarget:r.currentTarget}));s?.activeIndex!=null&&t.dispatch(uk({activeIndex:s.activeIndex,activeDataKey:void 0,activeCoordinate:s.activeCoordinate}))}else if(l==="item"){var d,p=r.touches[0];if(document.elementFromPoint==null)return;var h=document.elementFromPoint(p.clientX,p.clientY);if(!h||!h.getAttribute)return;var m=h.getAttribute(ez),g=(d=h.getAttribute(tz))!==null&&d!==void 0?d:void 0,x=VK(t.getState(),m,g);t.dispatch(sk({activeDataKey:g,activeIndex:m,activeCoordinate:x}))}}}});var XK=SO({brush:RY,cartesianAxis:pH,chartData:Jq,errorBars:PH,graphicalItems:VU,layout:zD,legend:Rz,options:Vq,polarAxis:xU,polarOptions:KK,referenceElements:HY,rootProps:YK,tooltip:xI,zIndex:Rq}),FK=function(t){return oD({reducer:XK,preloadedState:t,middleware:r=>r({serializableCheck:!1}).concat([N5.middleware,C5.middleware,Vv.middleware,D5.middleware,R5.middleware]),enhancers:r=>{var n=r;return typeof r=="function"&&(n=r()),n.concat(zO({type:"raf"}))},devTools:Ai.devToolsEnabled})};function ZK(e){var{preloadedState:t,children:r,reduxStoreName:n}=e,l=Zt(),s=b.useRef(null);if(l)return r;s.current==null&&(s.current=FK(t));var d=M0;return b.createElement(UK,{context:d,store:s.current},r)}function QK(e){var{layout:t,margin:r}=e,n=ot(),l=Zt();return b.useEffect(()=>{l||(n(_D(t)),n(MD(r)))},[n,l,t,r]),null}function JK(e){var t=ot();return b.useEffect(()=>{t(GK(e))},[t,e]),null}function lA(e){var{zIndex:t,isPanorama:r}=e,n=r?"recharts-zindex-panorama-":"recharts-zindex-",l=o5("".concat(n).concat(t)),s=ot();return b.useLayoutEffect(()=>(s(Dq({zIndex:t,elementId:l,isPanorama:r})),()=>{s(zq({zIndex:t,isPanorama:r}))}),[s,t,l,r]),b.createElement("g",{id:l})}function sA(e){var{children:t,isPanorama:r}=e,n=fe(Aq);if(!n||n.length===0)return t;var l=n.filter(d=>d<0),s=n.filter(d=>d>0);return b.createElement(b.Fragment,null,l.map(d=>b.createElement(lA,{key:d,zIndex:d,isPanorama:r})),t,s.map(d=>b.createElement(lA,{key:d,zIndex:d,isPanorama:r})))}var eW=["children"];function tW(e,t){if(e==null)return{};var r,n,l=rW(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function rW(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function cd(){return cd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},cd.apply(null,arguments)}var nW={width:"100%",height:"100%",display:"block"},aW=b.forwardRef((e,t)=>{var r=I0(),n=q0(),l=iE();if(!xn(r)||!xn(n))return null;var{children:s,otherAttributes:d,title:p,desc:h}=e,m,g;return d!=null&&(typeof d.tabIndex=="number"?m=d.tabIndex:m=l?0:void 0,typeof d.role=="string"?g=d.role:g=l?"application":void 0),b.createElement(w0,cd({},d,{title:p,desc:h,role:g,tabIndex:m,width:r,height:n,style:nW,ref:t}),s)}),iW=e=>{var{children:t}=e,r=fe(Md);if(!r)return null;var{width:n,height:l,y:s,x:d}=r;return b.createElement(w0,{width:n,height:l,x:d,y:s},t)},cA=b.forwardRef((e,t)=>{var{children:r}=e,n=tW(e,eW),l=Zt();return l?b.createElement(iW,null,b.createElement(sA,{isPanorama:!0},r)):b.createElement(aW,cd({ref:t},n),b.createElement(sA,{isPanorama:!1},r))});function oW(){var e=ot(),[t,r]=b.useState(null),n=fe(JD);return b.useEffect(()=>{if(t!=null){var l=t.getBoundingClientRect(),s=l.width/t.offsetWidth;mt(s)&&s!==n&&e(DD(s))}},[t,e,n]),r}function uA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function lW(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?uA(Object(r),!0).forEach(function(n){sW(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):uA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function sW(e,t,r){return(t=cW(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function cW(e){var t=uW(e,"string");return typeof t=="symbol"?t:t+""}function uW(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ji(){return ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ji.apply(null,arguments)}var dW=()=>(s$(),null);function ud(e){if(typeof e=="number")return e;if(typeof e=="string"){var t=parseFloat(e);if(!Number.isNaN(t))return t}return 0}var fW=b.forwardRef((e,t)=>{var r,n,l=b.useRef(null),[s,d]=b.useState({containerWidth:ud((r=e.style)===null||r===void 0?void 0:r.width),containerHeight:ud((n=e.style)===null||n===void 0?void 0:n.height)}),p=b.useCallback((m,g)=>{d(x=>{var w=Math.round(m),j=Math.round(g);return x.containerWidth===w&&x.containerHeight===j?x:{containerWidth:w,containerHeight:j}})},[]),h=b.useCallback(m=>{if(typeof t=="function"&&t(m),m!=null&&typeof ResizeObserver<"u"){var{width:g,height:x}=m.getBoundingClientRect();p(g,x);var w=S=>{var{width:A,height:O}=S[0].contentRect;p(A,O)},j=new ResizeObserver(w);j.observe(m),l.current=j}},[t,p]);return b.useEffect(()=>()=>{var m=l.current;m?.disconnect()},[p]),b.createElement(b.Fragment,null,b.createElement(Pd,{width:s.containerWidth,height:s.containerHeight}),b.createElement("div",ji({ref:h},e)))}),pW=b.forwardRef((e,t)=>{var{width:r,height:n}=e,[l,s]=b.useState({containerWidth:ud(r),containerHeight:ud(n)}),d=b.useCallback((h,m)=>{s(g=>{var x=Math.round(h),w=Math.round(m);return g.containerWidth===x&&g.containerHeight===w?g:{containerWidth:x,containerHeight:w}})},[]),p=b.useCallback(h=>{if(typeof t=="function"&&t(h),h!=null){var{width:m,height:g}=h.getBoundingClientRect();d(m,g)}},[t,d]);return b.createElement(b.Fragment,null,b.createElement(Pd,{width:l.containerWidth,height:l.containerHeight}),b.createElement("div",ji({ref:p},e)))}),hW=b.forwardRef((e,t)=>{var{width:r,height:n}=e;return b.createElement(b.Fragment,null,b.createElement(Pd,{width:r,height:n}),b.createElement("div",ji({ref:t},e)))}),mW=b.forwardRef((e,t)=>{var{width:r,height:n}=e;return Gn(r)||Gn(n)?b.createElement(pW,ji({},e,{ref:t})):b.createElement(hW,ji({},e,{ref:t}))});function gW(e){return e===!0?fW:mW}var vW=b.forwardRef((e,t)=>{var{children:r,className:n,height:l,onClick:s,onContextMenu:d,onDoubleClick:p,onMouseDown:h,onMouseEnter:m,onMouseLeave:g,onMouseMove:x,onMouseUp:w,onTouchEnd:j,onTouchMove:S,onTouchStart:A,style:O,width:k,responsive:T,dispatchTouchEvents:C=!0}=e,_=b.useRef(null),M=ot(),[R,U]=b.useState(null),[F,te]=b.useState(null),ie=oW(),Z=B0(),J=Z?.width>0?Z.width:k,he=Z?.height>0?Z.height:l,ge=b.useCallback(Q=>{ie(Q),typeof t=="function"&&t(Q),U(Q),te(Q),Q!=null&&(_.current=Q)},[ie,t,U,te]),ye=b.useCallback(Q=>{M(k5(Q)),M(Ur({handler:s,reactEvent:Q}))},[M,s]),$=b.useCallback(Q=>{M(n0(Q)),M(Ur({handler:m,reactEvent:Q}))},[M,m]),K=b.useCallback(Q=>{M(ck()),M(Ur({handler:g,reactEvent:Q}))},[M,g]),ne=b.useCallback(Q=>{M(n0(Q)),M(Ur({handler:x,reactEvent:Q}))},[M,x]),oe=b.useCallback(()=>{M(P5())},[M]),D=b.useCallback(Q=>{M(_5(Q.key))},[M]),V=b.useCallback(Q=>{M(Ur({handler:d,reactEvent:Q}))},[M,d]),ae=b.useCallback(Q=>{M(Ur({handler:p,reactEvent:Q}))},[M,p]),re=b.useCallback(Q=>{M(Ur({handler:h,reactEvent:Q}))},[M,h]),se=b.useCallback(Q=>{M(Ur({handler:w,reactEvent:Q}))},[M,w]),Se=b.useCallback(Q=>{M(Ur({handler:A,reactEvent:Q}))},[M,A]),ve=b.useCallback(Q=>{C&&M(z5(Q)),M(Ur({handler:S,reactEvent:Q}))},[M,C,S]),Ue=b.useCallback(Q=>{M(Ur({handler:j,reactEvent:Q}))},[M,j]),He=gW(T);return b.createElement(Mk.Provider,{value:R},b.createElement(IA.Provider,{value:F},b.createElement(He,{width:J??O?.width,height:he??O?.height,className:$e("recharts-wrapper",n),style:lW({position:"relative",cursor:"default",width:J,height:he},O),onClick:ye,onContextMenu:V,onDoubleClick:ae,onFocus:oe,onKeyDown:D,onMouseDown:re,onMouseEnter:$,onMouseLeave:K,onMouseMove:ne,onMouseUp:se,onTouchEnd:Ue,onTouchMove:ve,onTouchStart:Se,ref:ge},b.createElement(dW,null),r)))}),xW=["width","height","responsive","children","className","style","compact","title","desc"];function yW(e,t){if(e==null)return{};var r,n,l=bW(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function bW(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var wW=b.forwardRef((e,t)=>{var{width:r,height:n,responsive:l,children:s,className:d,style:p,compact:h,title:m,desc:g}=e,x=yW(e,xW),w=nn(x);return h?b.createElement(b.Fragment,null,b.createElement(Pd,{width:r,height:n}),b.createElement(cA,{otherAttributes:w,title:m,desc:g},s)):b.createElement(vW,{className:d,style:p,width:r,height:n,responsive:l??!1,onClick:e.onClick,onMouseLeave:e.onMouseLeave,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseDown:e.onMouseDown,onMouseUp:e.onMouseUp,onContextMenu:e.onContextMenu,onDoubleClick:e.onDoubleClick,onTouchStart:e.onTouchStart,onTouchMove:e.onTouchMove,onTouchEnd:e.onTouchEnd},b.createElement(cA,{otherAttributes:w,title:m,desc:g,ref:t},b.createElement(GY,null,s)))});function a0(){return a0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a0.apply(null,arguments)}var jW={top:5,right:5,bottom:5,left:5},SW={accessibilityLayer:!0,layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:jW,reverseStackOrder:!1,syncMethod:"index",responsive:!1},L5=b.forwardRef(function(t,r){var n,l=Gt(t.categoricalChartProps,SW),{chartName:s,defaultTooltipEventType:d,validateTooltipEventTypes:p,tooltipPayloadSearcher:h,categoricalChartProps:m}=t,g={chartName:s,defaultTooltipEventType:d,validateTooltipEventTypes:p,tooltipPayloadSearcher:h,eventEmitter:void 0};return b.createElement(ZK,{preloadedState:{options:g},reduxStoreName:(n=m.id)!==null&&n!==void 0?n:s},b.createElement(zY,{chartData:m.data}),b.createElement(QK,{layout:l.layout,margin:l.margin}),b.createElement(JK,{baseValue:l.baseValue,accessibilityLayer:l.accessibilityLayer,barCategoryGap:l.barCategoryGap,maxBarSize:l.maxBarSize,stackOffset:l.stackOffset,barGap:l.barGap,barSize:l.barSize,syncId:l.syncId,syncMethod:l.syncMethod,className:l.className}),b.createElement(wW,a0({},l,{ref:r})))}),AW=["axis"],OW=b.forwardRef((e,t)=>b.createElement(L5,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:AW,tooltipPayloadSearcher:_k,categoricalChartProps:e,ref:t})),EW=["axis","item"],B5=b.forwardRef((e,t)=>b.createElement(L5,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:EW,tooltipPayloadSearcher:_k,categoricalChartProps:e,ref:t}));function kW(){const e=[{month:"May",earnings:320},{month:"Jun",earnings:420},{month:"Jul",earnings:510},{month:"Aug",earnings:590},{month:"Sep",earnings:640},{month:"Oct",earnings:700}];return u.jsxs("div",{children:[u.jsx("h1",{children:"Earnings Overview"}),u.jsx("p",{className:"sub",children:"Track monthly payouts and revenue trends."}),u.jsx("div",{className:"chart",children:u.jsx(Eg,{width:"100%",height:280,children:u.jsxs(B5,{data:e,children:[u.jsx(ad,{strokeDasharray:"3 3"}),u.jsx(od,{dataKey:"month"}),u.jsx(sd,{}),u.jsx(Xg,{}),u.jsx(td,{dataKey:"earnings",fill:"#2563eb",name:"Earnings ($)"})]})})}),u.jsx("style",{children:`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:18px;}
        .chart {background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:16px;}
      `})]})}function NW(){return u.jsxs("div",{children:[u.jsx("h1",{children:"Discussions"}),u.jsx("p",{className:"sub",children:"Engage with your learners in topic discussions."}),u.jsx("div",{className:"msg",children:"Forum integration coming soon."}),u.jsx("style",{children:`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:6px;}
        .sub {color:#64748b;margin-bottom:12px;}
        .msg {background:#f8fafc;border:1px dashed #cbd5e1;border-radius:10px;padding:18px;}
      `})]})}function CW(){const e=[{title:"Assignment Deadline Extended",desc:"React Project submission deadline moved to Nov 12.",date:"Nov 10, 2025"},{title:"New Enrollment",desc:"John Doe enrolled in 'Advanced JS Concepts'.",date:"Nov 9, 2025"},{title:"Payment Received",desc:"You received $120 for October earnings.",date:"Nov 8, 2025"}];return u.jsxs("div",{children:[u.jsx("h1",{children:"Notifications"}),u.jsx("p",{className:"sub",children:"Recent alerts and updates related to your courses."}),u.jsx("div",{className:"list",children:e.map((t,r)=>u.jsxs("div",{className:"item",children:[u.jsxs("div",{className:"txt",children:[u.jsx("h4",{children:t.title}),u.jsx("p",{children:t.desc})]}),u.jsx("span",{className:"date",children:t.date})]},r))}),u.jsx("style",{children:`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:16px;}
        .list {display:flex;flex-direction:column;gap:12px;}
        .item {background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:14px 18px;display:flex;justify-content:space-between;}
        .txt h4 {margin:0 0 2px;font-weight:700;}
        .txt p {margin:0;color:#475569;font-size:.9rem;}
        .date {color:#94a3b8;font-size:.85rem;}
      `})]})}function TW(){return u.jsxs("div",{children:[u.jsx("h1",{children:"Settings"}),u.jsx("p",{className:"sub",children:"Manage your account and teaching preferences."}),u.jsxs("div",{className:"card",children:[u.jsx("h3",{children:"Profile Visibility"}),u.jsxs("label",{children:[u.jsx("input",{type:"checkbox",defaultChecked:!0})," Show profile publicly"]})]}),u.jsx("style",{children:`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:16px;}
        .card {background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;}
        label {display:flex;align-items:center;gap:8px;margin-top:10px;font-size:.95rem;}
      `})]})}function MW(){return u.jsxs("div",{children:[u.jsx("h1",{children:"My Profile"}),u.jsx("p",{className:"sub",children:"View and edit your trainer information."}),u.jsxs("div",{className:"profile",children:[u.jsx("img",{src:"https://i.pravatar.cc/120?img=9",alt:"Profile"}),u.jsxs("div",{children:[u.jsx("h3",{children:"John Doe"}),u.jsx("p",{children:"Email: john.doe@example.com"}),u.jsx("p",{children:"Expertise: Web Development"})]})]}),u.jsx("style",{children:`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:14px;}
        .profile {display:flex;gap:16px;align-items:center;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;}
        img {width:80px;height:80px;border-radius:50%;border:2px solid #cbd5e1;}
      `})]})}function uu({title:e,value:t,delta:r,icon:n}){const l=r>=0;return u.jsxs("div",{className:"stat",children:[u.jsxs("div",{className:"stat-top",children:[u.jsx("div",{className:"stat-icon",children:n}),u.jsxs("div",{className:`delta ${l?"up":"down"}`,children:[l?"↑":"↓"," ",Math.abs(r),"%"]})]}),u.jsx("div",{className:"stat-title",children:e}),u.jsx("div",{className:"stat-value",children:t}),u.jsx("style",{children:`
        .stat { background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:16px; box-shadow:0 1px 2px rgba(0,0,0,.04); }
        .stat-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
        .stat-icon { font-size:22px; }
        .delta { font-size:.8rem; padding:4px 8px; border-radius:999px; }
        .delta.up { background:#ecfeff; color:#0369a1; border:1px solid #a5f3fc; }
        .delta.down { background:#fef2f2; color:#991b1b; border:1px solid #fecaca; }
        .stat-title { color:#334155; font-size:.9rem; }
        .stat-value { font-size:1.6rem; font-weight:800; letter-spacing:.3px; }
      `})]})}function dA(){const e=[{label:"Mon",value:32},{label:"Tue",value:48},{label:"Wed",value:44},{label:"Thu",value:61},{label:"Fri",value:52},{label:"Sat",value:39},{label:"Sun",value:27}];return u.jsxs("div",{className:"dash",children:[u.jsx("h1",{children:"Overview"}),u.jsx("p",{className:"sub",children:"Key metrics for your LMS at a glance."}),u.jsxs("div",{className:"stats",children:[u.jsx(uu,{title:"Total Learners",value:"12,048",delta:4.2,icon:"🎓"}),u.jsx(uu,{title:"Active Mentors",value:"82",delta:1.1,icon:"🧑‍🏫"}),u.jsx(uu,{title:"Courses Published",value:"214",delta:2.9,icon:"📘"}),u.jsx(uu,{title:"Pending Requests",value:"7",delta:-12,icon:"⏳"})]}),u.jsxs("div",{className:"cards",children:[u.jsxs("section",{className:"panel",children:[u.jsxs("div",{className:"panel-head",children:[u.jsx("h3",{children:"Weekly Enrollments"}),u.jsx("span",{className:"hint",children:"Last 7 days"})]}),u.jsx("div",{className:"bar-chart",children:e.map(t=>u.jsxs("div",{className:"bar-wrap",title:`${t.label}: ${t.value}`,children:[u.jsx("div",{className:"bar",style:{height:`${t.value*2.2}px`}}),u.jsx("span",{className:"lbl",children:t.label})]},t.label))})]}),u.jsxs("section",{className:"panel",children:[u.jsxs("div",{className:"panel-head",children:[u.jsx("h3",{children:"Top Courses"}),u.jsx("span",{className:"hint",children:"Most enrolled"})]}),u.jsx("ul",{className:"list",children:[{name:"React Fundamentals",enroll:1280},{name:"Data Structures in JS",enroll:1094},{name:"SQL for Analysts",enroll:968},{name:"Python for ML",enroll:902}].map(t=>u.jsxs("li",{className:"li",children:[u.jsx("span",{children:t.name}),u.jsx("span",{className:"pill",children:t.enroll})]},t.name))})]})]}),u.jsx("style",{children:`
        .dash h1 { margin:0 0 2px; font-size:1.45rem; font-weight:800; }
        .sub { color:#64748b; margin:0 0 16px; }
        .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin:12px 0 18px; }
        .cards { display:grid; grid-template-columns:2fr 1fr; gap:14px; }
        .panel { background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:14px; }
        .panel-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; }
        .hint { color:#64748b; font-size:.85rem; }
        .bar-chart { display:flex; align-items:flex-end; gap:12px; height:200px; padding:10px 4px 0; }
        .bar-wrap { display:flex; flex-direction:column; align-items:center; gap:6px; }
        .bar { width:22px; background:linear-gradient(180deg, #60a5fa, #2563eb); border-radius:6px 6px 0 0; }
        .lbl { font-size:.8rem; color:#475569; }
        .list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
        .li { display:flex; justify-content:space-between; align-items:center; padding:10px; border:1px solid #e2e8f0; border-radius:10px; }
        .pill { background:#eef2ff; color:#3730a3; padding:4px 10px; border-radius:999px; border:1px solid #c7d2fe; font-weight:700; }
        @media (max-width: 1200px) { .stats { grid-template-columns:repeat(2,1fr); } .cards { grid-template-columns:1fr; } }
      `})]})}function _W(){const[e,t]=b.useState([]),[r,n]=b.useState(""),[l,s]=b.useState("all");b.useEffect(()=>{t([{id:1,name:"Alex Johnson",email:"alex.j@example.com",role:"Learner",status:"Active"},{id:2,name:"Sarah Kim",email:"sarah.k@example.com",role:"Mentor",status:"Pending"},{id:3,name:"Mark Chen",email:"mark.chen@example.com",role:"Learner",status:"Active"},{id:4,name:"Priya Patel",email:"priya.p@example.com",role:"Admin",status:"Suspended"},{id:5,name:"Daniel Lee",email:"daniel.l@example.com",role:"Mentor",status:"Active"}])},[]);const d=e.filter(p=>{const h=p.name.toLowerCase().includes(r.toLowerCase())||p.email.toLowerCase().includes(r.toLowerCase()),m=l==="all"||p.status.toLowerCase()===l.toLowerCase();return h&&m});return u.jsxs("div",{style:Qe.container,children:[u.jsx("h1",{style:Qe.heading,children:"Manage Users"}),u.jsx("p",{style:Qe.subheading,children:"View, filter, and manage all platform users"}),u.jsxs("div",{style:Qe.controls,children:[u.jsxs("div",{style:Qe.searchBox,children:[u.jsx(PT,{size:18,color:"#64748b"}),u.jsx("input",{type:"text",placeholder:"Search users...",style:Qe.input,value:r,onChange:p=>n(p.target.value)})]}),u.jsxs("div",{style:Qe.filterBox,children:[u.jsx(xT,{size:18,color:"#475569"}),u.jsxs("select",{style:Qe.select,value:l,onChange:p=>s(p.target.value),children:[u.jsx("option",{value:"all",children:"All"}),u.jsx("option",{value:"Active",children:"Active"}),u.jsx("option",{value:"Pending",children:"Pending"}),u.jsx("option",{value:"Suspended",children:"Suspended"})]})]})]}),u.jsxs("div",{style:Qe.tableWrapper,children:[u.jsxs("table",{style:Qe.table,children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{style:Qe.th,children:"Name"}),u.jsx("th",{style:Qe.th,children:"Email"}),u.jsx("th",{style:Qe.th,children:"Role"}),u.jsx("th",{style:Qe.th,children:"Status"}),u.jsx("th",{style:Qe.th,children:"Actions"})]})}),u.jsx("tbody",{children:d.map(p=>u.jsxs("tr",{style:Qe.tr,children:[u.jsx("td",{style:Qe.td,children:p.name}),u.jsx("td",{style:Qe.td,children:p.email}),u.jsx("td",{style:Qe.td,children:p.role}),u.jsx("td",{style:Qe.td,children:u.jsx("span",{style:{...Qe.badge,...PW(p.status)},children:p.status})}),u.jsxs("td",{style:Qe.td,children:[u.jsx("button",{style:Qe.actionBtn,title:"Approve",children:u.jsx(_A,{size:16})}),u.jsx("button",{style:{...Qe.actionBtn,color:"#dc2626"},title:"Suspend",children:u.jsx(PA,{size:16})})]})]},p.id))})]}),d.length===0&&u.jsx("div",{style:Qe.noData,children:"No users match your criteria."})]})]})}const PW=e=>{switch(e){case"Active":return{background:"#dcfce7",color:"#16a34a"};case"Pending":return{background:"#fef9c3",color:"#ca8a04"};case"Suspended":return{background:"#fee2e2",color:"#dc2626"};default:return{background:"#e2e8f0",color:"#475569"}}},Qe={container:{display:"flex",flexDirection:"column",gap:20},heading:{fontSize:"1.5rem",fontWeight:800,color:"#0f172a"},subheading:{color:"#64748b",fontSize:"0.95rem",marginBottom:10},controls:{display:"flex",gap:10,alignItems:"center",marginBottom:20},searchBox:{display:"flex",alignItems:"center",gap:8,background:"#f1f5f9",borderRadius:8,padding:"8px 12px",flex:1},input:{border:"none",background:"transparent",outline:"none",flex:1,fontSize:"0.95rem"},filterBox:{display:"flex",alignItems:"center",background:"#fff",border:"1px solid #e2e8f0",borderRadius:8,padding:"6px 10px",gap:6},select:{border:"none",outline:"none",background:"transparent",fontSize:"0.9rem",color:"#334155"},tableWrapper:{background:"#fff",borderRadius:12,boxShadow:"0 2px 8px rgba(0,0,0,0.05)",border:"1px solid #e2e8f0",overflowX:"auto"},table:{width:"100%",borderCollapse:"collapse"},th:{textAlign:"left",padding:"12px 16px",background:"#f8fafc",color:"#475569",fontSize:"0.9rem",borderBottom:"1px solid #e2e8f0"},tr:{borderBottom:"1px solid #f1f5f9"},td:{padding:"12px 16px",color:"#1e293b",fontSize:"0.95rem",verticalAlign:"middle"},badge:{display:"inline-block",fontSize:"0.8rem",fontWeight:600,padding:"4px 10px",borderRadius:"12px"},actionBtn:{background:"none",border:"none",color:"#1e40af",cursor:"pointer",marginRight:"8px"},noData:{textAlign:"center",color:"#64748b",padding:"20px"}};function DW(){const[e,t]=b.useState([]);b.useEffect(()=>{t([{id:1,title:"React Essentials",instructor:"Alex Johnson",category:"Web Development",status:"Published"},{id:2,title:"Python for Data Science",instructor:"Sarah Kim",category:"Data Science",status:"Pending Review"},{id:3,title:"UI/UX Design Masterclass",instructor:"Priya Patel",category:"Design",status:"Published"}])},[]);const r=l=>t(s=>s.filter(d=>d.id!==l)),n=l=>t(s=>s.map(d=>d.id===l?{...d,status:"Published"}:d));return u.jsxs("div",{style:ft.container,children:[u.jsx("h1",{style:ft.heading,children:"Manage Courses"}),u.jsx("p",{style:ft.subheading,children:"View, approve, and manage all uploaded courses."}),u.jsxs("div",{style:ft.tableWrapper,children:[u.jsxs("table",{style:ft.table,children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{style:ft.th,children:"Course"}),u.jsx("th",{style:ft.th,children:"Instructor"}),u.jsx("th",{style:ft.th,children:"Category"}),u.jsx("th",{style:ft.th,children:"Status"}),u.jsx("th",{style:ft.th,children:"Actions"})]})}),u.jsx("tbody",{children:e.map(l=>u.jsxs("tr",{style:ft.tr,children:[u.jsxs("td",{style:ft.td,children:[u.jsx(hs,{size:16,style:{marginRight:8,color:"#2563eb"}}),l.title]}),u.jsx("td",{style:ft.td,children:l.instructor}),u.jsx("td",{style:ft.td,children:l.category}),u.jsx("td",{style:ft.td,children:u.jsx("span",{style:{...ft.badge,...zW(l.status)},children:l.status})}),u.jsx("td",{style:ft.td,children:l.status==="Pending Review"?u.jsxs("button",{style:ft.approveBtn,onClick:()=>n(l.id),children:[u.jsx(md,{size:16})," Approve"]}):u.jsxs(u.Fragment,{children:[u.jsxs("button",{style:ft.editBtn,children:[u.jsx(IT,{size:16})," Edit"]}),u.jsxs("button",{style:ft.deleteBtn,onClick:()=>r(l.id),children:[u.jsx(HT,{size:16})," Delete"]})]})})]},l.id))})]}),e.length===0&&u.jsx("div",{style:ft.noData,children:"No courses available."})]})]})}const zW=e=>{switch(e){case"Published":return{background:"#dcfce7",color:"#16a34a"};case"Pending Review":return{background:"#fef9c3",color:"#ca8a04"};default:return{background:"#e2e8f0",color:"#475569"}}},ft={container:{display:"flex",flexDirection:"column",gap:20},heading:{fontSize:"1.5rem",fontWeight:800,color:"#0f172a"},subheading:{color:"#64748b",fontSize:"0.95rem"},tableWrapper:{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",overflowX:"auto"},table:{width:"100%",borderCollapse:"collapse"},th:{textAlign:"left",padding:"12px 16px",background:"#f8fafc",color:"#475569",fontSize:"0.9rem",borderBottom:"1px solid #e2e8f0"},tr:{borderBottom:"1px solid #f1f5f9"},td:{padding:"12px 16px",color:"#1e293b",fontSize:"0.95rem",verticalAlign:"middle"},badge:{fontWeight:600,fontSize:"0.8rem",borderRadius:"12px",padding:"4px 10px"},approveBtn:{background:"#16a34a",color:"#fff",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer"},editBtn:{background:"#2563eb",color:"#fff",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer",marginRight:6},deleteBtn:{background:"#dc2626",color:"#fff",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer"},noData:{textAlign:"center",color:"#64748b",padding:20}};function RW(){const[e,t]=b.useState([]);b.useEffect(()=>{t([{id:1,name:"Sarah Kim",email:"sarah.k@example.com",expertise:"Web Development",status:"Pending"},{id:2,name:"John Smith",email:"john.s@example.com",expertise:"Data Science",status:"Pending"},{id:3,name:"Priya Patel",email:"priya.p@example.com",expertise:"UI/UX Design",status:"Approved"}])},[]);const r=l=>t(s=>s.map(d=>d.id===l?{...d,status:"Approved"}:d)),n=l=>t(s=>s.map(d=>d.id===l?{...d,status:"Rejected"}:d));return u.jsxs("div",{style:pt.container,children:[u.jsx("h1",{style:pt.heading,children:"Mentor Requests"}),u.jsx("p",{style:pt.subheading,children:"Review and approve mentor onboarding requests."}),u.jsxs("div",{style:pt.tableWrapper,children:[u.jsxs("table",{style:pt.table,children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{style:pt.th,children:"Name"}),u.jsx("th",{style:pt.th,children:"Email"}),u.jsx("th",{style:pt.th,children:"Expertise"}),u.jsx("th",{style:pt.th,children:"Status"}),u.jsx("th",{style:pt.th,children:"Actions"})]})}),u.jsx("tbody",{children:e.map(l=>u.jsxs("tr",{style:pt.tr,children:[u.jsx("td",{style:pt.td,children:l.name}),u.jsx("td",{style:pt.td,children:l.email}),u.jsx("td",{style:pt.td,children:l.expertise}),u.jsx("td",{style:pt.td,children:u.jsx("span",{style:{...pt.badge,...LW(l.status)},children:l.status})}),u.jsx("td",{style:pt.td,children:l.status==="Pending"?u.jsxs(u.Fragment,{children:[u.jsxs("button",{style:pt.approveBtn,onClick:()=>r(l.id),children:[u.jsx(_A,{size:16})," Approve"]}),u.jsxs("button",{style:pt.rejectBtn,onClick:()=>n(l.id),children:[u.jsx(PA,{size:16})," Reject"]})]}):u.jsxs("button",{style:pt.viewBtn,children:[u.jsx(MA,{size:16})," View"]})})]},l.id))})]}),e.length===0&&u.jsx("div",{style:pt.noData,children:"No mentor requests available."})]})]})}const LW=e=>{switch(e){case"Approved":return{background:"#dcfce7",color:"#16a34a"};case"Pending":return{background:"#fef9c3",color:"#ca8a04"};case"Rejected":return{background:"#fee2e2",color:"#dc2626"};default:return{}}},pt={container:{display:"flex",flexDirection:"column",gap:20},heading:{fontSize:"1.5rem",fontWeight:800,color:"#0f172a"},subheading:{color:"#64748b",fontSize:"0.95rem"},tableWrapper:{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",overflowX:"auto"},table:{width:"100%",borderCollapse:"collapse"},th:{textAlign:"left",padding:"12px 16px",background:"#f8fafc",color:"#475569",fontSize:"0.9rem",borderBottom:"1px solid #e2e8f0"},tr:{borderBottom:"1px solid #f1f5f9"},td:{padding:"12px 16px",color:"#1e293b",fontSize:"0.95rem"},badge:{fontWeight:600,fontSize:"0.8rem",borderRadius:"12px",padding:"4px 10px"},approveBtn:{background:"#16a34a",color:"#fff",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer",marginRight:8},rejectBtn:{background:"#dc2626",color:"#fff",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer"},viewBtn:{background:"#2563eb",color:"#fff",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer"},noData:{textAlign:"center",color:"#64748b",padding:20}};function BW(){const e=[{month:"May",users:320},{month:"Jun",users:460},{month:"Jul",users:540},{month:"Aug",users:720},{month:"Sep",users:810},{month:"Oct",users:940}],t=[{month:"May",revenue:5400,profit:1900},{month:"Jun",revenue:6900,profit:2500},{month:"Jul",revenue:8800,profit:3100},{month:"Aug",revenue:10400,profit:3600},{month:"Sep",revenue:11200,profit:4e3},{month:"Oct",revenue:12100,profit:4400}],r=[{course:"React Basics",learners:480},{course:"Data Science",learners:420},{course:"Python ML",learners:390},{course:"SQL Essentials",learners:330},{course:"UI Design",learners:270}];return u.jsxs("div",{className:"reports",children:[u.jsx("h1",{children:"Reports & Analytics"}),u.jsx("p",{className:"subtitle",children:"Track user growth, enrollment trends, and platform revenue."}),u.jsxs("div",{className:"chart-card",children:[u.jsx("h3",{children:"User Growth (Last 6 Months)"}),u.jsx(Eg,{width:"100%",height:280,children:u.jsxs(OW,{data:e,children:[u.jsx(ad,{strokeDasharray:"3 3"}),u.jsx(od,{dataKey:"month"}),u.jsx(sd,{}),u.jsx(Xg,{}),u.jsx(E5,{type:"monotone",dataKey:"users",stroke:"#2563eb",strokeWidth:3,dot:{r:5}})]})})]}),u.jsxs("div",{className:"chart-card",children:[u.jsx("h3",{children:"Revenue Summary"}),u.jsx(Eg,{width:"100%",height:280,children:u.jsxs(B5,{data:t,children:[u.jsx(ad,{strokeDasharray:"3 3"}),u.jsx(od,{dataKey:"month"}),u.jsx(sd,{}),u.jsx(Xg,{}),u.jsx(aE,{}),u.jsx(td,{dataKey:"revenue",fill:"#60a5fa",name:"Revenue ($)"}),u.jsx(td,{dataKey:"profit",fill:"#2563eb",name:"Profit ($)"})]})})]}),u.jsxs("div",{className:"chart-card",children:[u.jsx("h3",{children:"Top Enrolled Courses"}),u.jsxs("table",{className:"data-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Course"}),u.jsx("th",{children:"Learners"})]})}),u.jsx("tbody",{children:r.map(n=>u.jsxs("tr",{children:[u.jsx("td",{children:n.course}),u.jsx("td",{children:n.learners})]},n.course))})]})]}),u.jsx("style",{children:`
        .reports {
          padding: 10px 4px;
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        h1 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 800;
        }
        .subtitle {
          color: #64748b;
          margin-bottom: 22px;
          font-size: 0.95rem;
        }
        .chart-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 18px;
          margin-bottom: 22px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .chart-card h3 {
          margin: 0 0 12px;
          font-size: 1.05rem;
          font-weight: 700;
          color: #1e293b;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }
        .data-table th, .data-table td {
          border-bottom: 1px solid #e2e8f0;
          text-align: left;
          padding: 10px 8px;
        }
        .data-table th {
          background: #f8fafc;
          color: #475569;
          font-weight: 600;
        }
        .data-table tr:hover {
          background: #f1f5f9;
        }
      `})]})}function IW(){const[e,t]=b.useState([{id:1,type:"info",title:"System Maintenance Scheduled",message:"The LMS will undergo maintenance on Nov 15, 2025, from 1:00–3:00 AM.",date:"Nov 10, 2025",read:!1},{id:2,type:"success",title:"New Course Approved",message:"‘React Essentials’ course has been successfully approved.",date:"Nov 9, 2025",read:!1},{id:3,type:"warning",title:"Pending Mentor Request",message:"2 new mentors are waiting for admin approval.",date:"Nov 8, 2025",read:!0},{id:4,type:"error",title:"Payment Gateway Issue",message:"Some transactions failed due to gateway timeout.",date:"Nov 6, 2025",read:!0}]),r=()=>{t(s=>s.map(d=>({...d,read:!0})))},n=s=>{t(d=>d.map(p=>p.id===s?{...p,read:!0}:p))},l={info:u.jsx(bT,{size:18,color:"#2563eb"}),success:u.jsx(md,{size:18,color:"#16a34a"}),warning:u.jsx(y0,{size:18,color:"#f59e0b"}),error:u.jsx(uT,{size:18,color:"#dc2626"})};return u.jsxs("div",{style:dr.container,children:[u.jsx("h1",{style:dr.heading,children:"Notifications Center"}),u.jsx("p",{style:dr.subheading,children:"View system alerts, approvals, and recent activities."}),u.jsx("div",{style:dr.actions,children:u.jsx("button",{style:dr.markAllBtn,onClick:r,children:"Mark All as Read"})}),u.jsxs("div",{style:dr.list,children:[e.map(s=>u.jsxs("div",{style:{...dr.notification,background:s.read?"#f9fafb":"#e0f2fe",borderLeft:`4px solid ${qW(s.type)}`},onClick:()=>n(s.id),children:[u.jsx("div",{style:dr.icon,children:l[s.type]}),u.jsxs("div",{style:dr.content,children:[u.jsxs("div",{style:dr.titleRow,children:[u.jsx("h3",{style:dr.title,children:s.title}),u.jsx("span",{style:dr.date,children:s.date})]}),u.jsx("p",{style:dr.message,children:s.message})]})]},s.id)),e.length===0&&u.jsxs("div",{style:dr.empty,children:[u.jsx(Si,{size:22,color:"#94a3b8"}),u.jsx("p",{children:"No notifications to display."})]})]})]})}const qW=e=>{switch(e){case"success":return"#16a34a";case"warning":return"#f59e0b";case"error":return"#dc2626";default:return"#2563eb"}},dr={container:{display:"flex",flexDirection:"column",gap:16},heading:{fontSize:"1.5rem",fontWeight:800,color:"#0f172a"},subheading:{color:"#64748b",fontSize:"0.95rem"},actions:{display:"flex",justifyContent:"flex-end",marginTop:8},markAllBtn:{background:"#2563eb",color:"#fff",border:"none",borderRadius:8,padding:"8px 14px",fontSize:"0.9rem",fontWeight:600,cursor:"pointer"},list:{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",overflow:"hidden"},notification:{display:"flex",alignItems:"flex-start",gap:12,padding:"16px 18px",cursor:"pointer",transition:"background 0.2s ease",borderBottom:"1px solid #f1f5f9"},icon:{flexShrink:0,marginTop:4},content:{flex:1},titleRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},title:{fontSize:"1rem",fontWeight:700,color:"#0f172a"},date:{fontSize:"0.8rem",color:"#94a3b8"},message:{fontSize:"0.9rem",color:"#475569",margin:0},empty:{textAlign:"center",padding:"40px 20px",color:"#64748b"}};function $W(){const[e,t]=b.useState({name:"Alex Johnson",email:"alex.admin@talentminds.com",theme:"light",notifications:!0,language:"en",password:"",confirmPassword:""}),r=l=>{const{name:s,value:d,type:p,checked:h}=l.target;t(m=>({...m,[s]:p==="checkbox"?h:d}))},n=l=>{l.preventDefault(),alert("✅ Settings saved successfully!")};return u.jsxs("div",{style:Ne.container,children:[u.jsx("h1",{style:Ne.heading,children:"Admin Settings"}),u.jsx("p",{style:Ne.subheading,children:"Manage your account and platform preferences."}),u.jsxs("form",{style:Ne.form,onSubmit:n,children:[u.jsxs("div",{style:Ne.section,children:[u.jsxs("h2",{style:Ne.sectionTitle,children:[u.jsx(gd,{size:18,style:Ne.icon})," Profile Information"]}),u.jsxs("div",{style:Ne.formRow,children:[u.jsxs("div",{style:Ne.formGroup,children:[u.jsx("label",{style:Ne.label,children:"Full Name"}),u.jsx("input",{type:"text",name:"name",value:e.name,onChange:r,style:Ne.input})]}),u.jsxs("div",{style:Ne.formGroup,children:[u.jsx("label",{style:Ne.label,children:"Email Address"}),u.jsx("input",{type:"email",name:"email",value:e.email,onChange:r,style:Ne.input})]})]})]}),u.jsxs("div",{style:Ne.section,children:[u.jsxs("h2",{style:Ne.sectionTitle,children:[u.jsx(Si,{size:18,style:Ne.icon})," Platform Preferences"]}),u.jsxs("div",{style:Ne.formRow,children:[u.jsxs("div",{style:Ne.formGroup,children:[u.jsx("label",{style:Ne.label,children:"Theme"}),u.jsxs("select",{name:"theme",value:e.theme,onChange:r,style:Ne.select,children:[u.jsx("option",{value:"light",children:"Light Mode"}),u.jsx("option",{value:"dark",children:"Dark Mode"})]})]}),u.jsxs("div",{style:Ne.formGroup,children:[u.jsx("label",{style:Ne.label,children:"Language"}),u.jsxs("select",{name:"language",value:e.language,onChange:r,style:Ne.select,children:[u.jsx("option",{value:"en",children:"English"}),u.jsx("option",{value:"es",children:"Spanish"}),u.jsx("option",{value:"de",children:"German"}),u.jsx("option",{value:"fr",children:"French"})]})]})]}),u.jsxs("label",{style:Ne.checkbox,children:[u.jsx("input",{type:"checkbox",name:"notifications",checked:e.notifications,onChange:r,style:Ne.checkboxInput}),"Enable Email Notifications"]})]}),u.jsxs("div",{style:Ne.section,children:[u.jsxs("h2",{style:Ne.sectionTitle,children:[u.jsx(m0,{size:18,style:Ne.icon})," Security Settings"]}),u.jsxs("div",{style:Ne.formRow,children:[u.jsxs("div",{style:Ne.formGroup,children:[u.jsx("label",{style:Ne.label,children:"New Password"}),u.jsx("input",{type:"password",name:"password",value:e.password,onChange:r,style:Ne.input,placeholder:"••••••••"})]}),u.jsxs("div",{style:Ne.formGroup,children:[u.jsx("label",{style:Ne.label,children:"Confirm Password"}),u.jsx("input",{type:"password",name:"confirmPassword",value:e.confirmPassword,onChange:r,style:Ne.input,placeholder:"••••••••"})]})]})]}),u.jsx("div",{style:Ne.buttonRow,children:u.jsxs("button",{type:"submit",style:Ne.saveBtn,children:[u.jsx(MT,{size:18})," Save Changes"]})})]})]})}const Ne={container:{display:"flex",flexDirection:"column",gap:20},heading:{fontSize:"1.5rem",fontWeight:800,color:"#0f172a"},subheading:{color:"#64748b",fontSize:"0.95rem",marginBottom:10},form:{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",padding:"20px",display:"flex",flexDirection:"column",gap:20},section:{borderBottom:"1px solid #f1f5f9",paddingBottom:16},sectionTitle:{display:"flex",alignItems:"center",gap:8,fontSize:"1.05rem",fontWeight:700,color:"#0f172a",marginBottom:14},icon:{color:"#2563eb"},formRow:{display:"flex",flexWrap:"wrap",gap:16},formGroup:{flex:1,display:"flex",flexDirection:"column",gap:6},label:{color:"#475569",fontWeight:600,fontSize:"0.9rem"},input:{border:"1px solid #e2e8f0",borderRadius:8,padding:"10px 12px",fontSize:"0.95rem",outline:"none"},select:{border:"1px solid #e2e8f0",borderRadius:8,padding:"10px 12px",fontSize:"0.95rem",background:"#fff"},checkbox:{display:"flex",alignItems:"center",gap:10,marginTop:10,fontSize:"0.9rem",color:"#334155"},checkboxInput:{width:16,height:16},buttonRow:{display:"flex",justifyContent:"flex-end"},saveBtn:{background:"#2563eb",color:"#fff",border:"none",borderRadius:8,padding:"10px 18px",fontWeight:700,display:"flex",alignItems:"center",gap:8,cursor:"pointer",transition:"background 0.2s"}},UW=()=>u.jsxs("div",{style:{textAlign:"center",padding:"120px 20px",background:"#f8fafc",minHeight:"70vh"},children:[u.jsx("h1",{style:{color:"#0b4da3",fontSize:"2.5rem",fontWeight:"800"},children:"404 - Page Not Found"}),u.jsx("p",{style:{color:"#475569",marginTop:"10px",fontSize:"1.1rem"},children:"Oops! The page you’re looking for doesn’t exist or has been moved."})]});function HW(){return u.jsxs(s6,{children:[u.jsxs(ue,{element:u.jsx(G6,{}),children:[u.jsx(ue,{path:"/",element:u.jsx(kM,{})}),u.jsx(ue,{path:"/explore",element:u.jsx(CM,{})}),u.jsx(ue,{path:"/resources",element:u.jsx(TM,{})}),u.jsx(ue,{path:"/business",element:u.jsx(MM,{})}),u.jsx(ue,{path:"/reviews",element:u.jsx(_M,{})}),u.jsx(ue,{path:"/hire",element:u.jsx(PM,{})}),u.jsx(ue,{path:"/become-mentor",element:u.jsx(YM,{})}),u.jsx(ue,{path:"/placement-report",element:u.jsx(zA,{})}),u.jsx(ue,{path:"/partnerships",element:u.jsx(DM,{})}),u.jsx(ue,{path:"/scholarships",element:u.jsx(zM,{})}),u.jsx(ue,{path:"/faq",element:u.jsx(RM,{})}),u.jsx(ue,{path:"/support",element:u.jsx(LM,{})}),u.jsx(ue,{path:"/courses",element:u.jsx(a8,{})}),u.jsx(ue,{path:"/courses/:slug",element:u.jsx(i8,{})}),u.jsx(ue,{path:"/contact",element:u.jsx(o8,{})}),u.jsx(ue,{path:"/login",element:u.jsx(l8,{})}),u.jsx(ue,{path:"/signup",element:u.jsx(s8,{})}),u.jsx(ue,{path:"/verify-otp",element:u.jsx(c8,{})}),u.jsx(ue,{path:"/forgot-password",element:u.jsx(u8,{})}),u.jsx(ue,{path:"/reset-otp-verify",element:u.jsx(d8,{})}),u.jsx(ue,{path:"/reset-password",element:u.jsx(p8,{})}),u.jsx(ue,{path:"/explore-programs",element:u.jsx(GM,{})}),u.jsx(ue,{path:"/join-learning-community",element:u.jsx(KM,{})}),u.jsx(ue,{path:"/learn-more-about-us",element:u.jsx(WM,{})}),u.jsx(ue,{path:"/browse-all-courses",element:u.jsx(VM,{})}),u.jsx(ue,{path:"/business-solutions",element:u.jsx(XM,{})}),u.jsx(ue,{path:"/programs/fullstack",element:u.jsx(FM,{})}),u.jsx(ue,{path:"/programs/datascience",element:u.jsx(ZM,{})}),u.jsx(ue,{path:"/programs/cybersecurity",element:u.jsx(QM,{})}),u.jsx(ue,{path:"/programs/cloud-devops",element:u.jsx(JM,{})}),u.jsx(ue,{path:"/start",element:u.jsx(o6,{to:"/login",replace:!0})})]}),u.jsxs(ue,{path:"/dashboard",element:u.jsx(nM,{}),children:[u.jsx(ue,{index:!0,element:u.jsx(h8,{})}),u.jsx(ue,{path:"my-courses",element:u.jsx(m8,{})}),u.jsx(ue,{path:"course/:id",element:u.jsx(g8,{})}),u.jsx(ue,{path:"assignments",element:u.jsx(v8,{})}),u.jsx(ue,{path:"discussions",element:u.jsx(x8,{})}),u.jsx(ue,{path:"notifications",element:u.jsx(y8,{})}),u.jsx(ue,{path:"grades",element:u.jsx(b8,{})}),u.jsx(ue,{path:"profile",element:u.jsx(w8,{})}),u.jsx(ue,{path:"settings",element:u.jsx(j8,{})}),u.jsx(ue,{path:"cart",element:u.jsx(S8,{})})]}),u.jsxs(ue,{path:"/trainer",element:u.jsx(oM,{}),children:[u.jsx(ue,{path:"dashboard",element:u.jsx(A8,{})}),u.jsx(ue,{path:"/trainer/my-courses",element:u.jsx(E8,{})}),u.jsx(ue,{path:"/trainer/course-management",element:u.jsx(O8,{})}),u.jsx(ue,{path:"student-progress",element:u.jsx(k8,{})}),u.jsx(ue,{path:"earnings",element:u.jsx(kW,{})}),u.jsx(ue,{path:"discussions",element:u.jsx(NW,{})}),u.jsx(ue,{path:"notifications",element:u.jsx(CW,{})}),u.jsx(ue,{path:"settings",element:u.jsx(TW,{})}),u.jsx(ue,{path:"profile",element:u.jsx(MW,{})})]}),u.jsxs(ue,{path:"/admin",element:u.jsx(tM,{}),children:[u.jsx(ue,{index:!0,element:u.jsx(dA,{})}),u.jsx(ue,{path:"dashboard",element:u.jsx(dA,{})}),u.jsx(ue,{path:"users",element:u.jsx(_W,{})}),u.jsx(ue,{path:"courses",element:u.jsx(DW,{})}),u.jsx(ue,{path:"mentors",element:u.jsx(RW,{})}),u.jsx(ue,{path:"reports",element:u.jsx(BW,{})}),u.jsx(ue,{path:"notifications",element:u.jsx(IW,{})}),u.jsx(ue,{path:"settings",element:u.jsx($W,{})})]}),u.jsx(ue,{path:"*",element:u.jsx(UW,{})})]})}"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");hC.createRoot(document.getElementById("root")).render(u.jsx(fA.StrictMode,{children:u.jsx($6,{children:u.jsxs(M6,{basename:"/LMSTalentMindsUI/",children:[u.jsx(U6,{})," ",u.jsx(HW,{})]})})}));
