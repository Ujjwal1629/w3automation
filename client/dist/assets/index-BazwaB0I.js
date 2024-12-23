function hp(t,n){for(var i=0;i<n.length;i++){const r=n[i];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const o=Object.getOwnPropertyDescriptor(r,s);o&&Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();function pp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rd={exports:{}},es={},sd={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=Symbol.for("react.element"),mp=Symbol.for("react.portal"),fp=Symbol.for("react.fragment"),xp=Symbol.for("react.strict_mode"),gp=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),bp=Symbol.for("react.suspense"),wp=Symbol.for("react.memo"),Sp=Symbol.for("react.lazy"),ga=Symbol.iterator;function Ep(t){return t===null||typeof t!="object"?null:(t=ga&&t[ga]||t["@@iterator"],typeof t=="function"?t:null)}var od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ld=Object.assign,ad={};function On(t,n,i){this.props=t,this.context=n,this.refs=ad,this.updater=i||od}On.prototype.isReactComponent={};On.prototype.setState=function(t,n){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,n,"setState")};On.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cd(){}cd.prototype=On.prototype;function pl(t,n,i){this.props=t,this.context=n,this.refs=ad,this.updater=i||od}var ml=pl.prototype=new cd;ml.constructor=pl;ld(ml,On.prototype);ml.isPureReactComponent=!0;var ja=Array.isArray,dd=Object.prototype.hasOwnProperty,fl={current:null},ud={key:!0,ref:!0,__self:!0,__source:!0};function hd(t,n,i){var r,s={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)dd.call(n,r)&&!ud.hasOwnProperty(r)&&(s[r]=n[r]);var a=arguments.length-2;if(a===1)s.children=i;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Di,type:t,key:o,ref:l,props:s,_owner:fl.current}}function Cp(t,n){return{$$typeof:Di,type:t.type,key:n,ref:t.ref,props:t.props,_owner:t._owner}}function xl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Di}function kp(t){var n={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return n[i]})}var va=/\/+/g;function Ts(t,n){return typeof t=="object"&&t!==null&&t.key!=null?kp(""+t.key):n.toString(36)}function or(t,n,i,r,s){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Di:case mp:l=!0}}if(l)return l=t,s=s(l),t=r===""?"."+Ts(l,0):r,ja(s)?(i="",t!=null&&(i=t.replace(va,"$&/")+"/"),or(s,n,i,"",function(d){return d})):s!=null&&(xl(s)&&(s=Cp(s,i+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(va,"$&/")+"/")+t)),n.push(s)),1;if(l=0,r=r===""?".":r+":",ja(t))for(var a=0;a<t.length;a++){o=t[a];var c=r+Ts(o,a);l+=or(o,n,i,c,s)}else if(c=Ep(t),typeof c=="function")for(t=c.call(t),a=0;!(o=t.next()).done;)o=o.value,c=r+Ts(o,a++),l+=or(o,n,i,c,s);else if(o==="object")throw n=String(t),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function zi(t,n,i){if(t==null)return t;var r=[],s=0;return or(t,r,"","",function(o){return n.call(i,o,s++)}),r}function Tp(t){if(t._status===-1){var n=t._result;n=n(),n.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var me={current:null},lr={transition:null},Pp={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:lr,ReactCurrentOwner:fl};function pd(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:zi,forEach:function(t,n,i){zi(t,function(){n.apply(this,arguments)},i)},count:function(t){var n=0;return zi(t,function(){n++}),n},toArray:function(t){return zi(t,function(n){return n})||[]},only:function(t){if(!xl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};R.Component=On;R.Fragment=fp;R.Profiler=gp;R.PureComponent=pl;R.StrictMode=xp;R.Suspense=bp;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;R.act=pd;R.cloneElement=function(t,n,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ld({},t.props),s=t.key,o=t.ref,l=t._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=fl.current),n.key!==void 0&&(s=""+n.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in n)dd.call(n,c)&&!ud.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&a!==void 0?a[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=i;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Di,type:t.type,key:s,ref:o,props:r,_owner:l}};R.createContext=function(t){return t={$$typeof:vp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jp,_context:t},t.Consumer=t};R.createElement=hd;R.createFactory=function(t){var n=hd.bind(null,t);return n.type=t,n};R.createRef=function(){return{current:null}};R.forwardRef=function(t){return{$$typeof:yp,render:t}};R.isValidElement=xl;R.lazy=function(t){return{$$typeof:Sp,_payload:{_status:-1,_result:t},_init:Tp}};R.memo=function(t,n){return{$$typeof:wp,type:t,compare:n===void 0?null:n}};R.startTransition=function(t){var n=lr.transition;lr.transition={};try{t()}finally{lr.transition=n}};R.unstable_act=pd;R.useCallback=function(t,n){return me.current.useCallback(t,n)};R.useContext=function(t){return me.current.useContext(t)};R.useDebugValue=function(){};R.useDeferredValue=function(t){return me.current.useDeferredValue(t)};R.useEffect=function(t,n){return me.current.useEffect(t,n)};R.useId=function(){return me.current.useId()};R.useImperativeHandle=function(t,n,i){return me.current.useImperativeHandle(t,n,i)};R.useInsertionEffect=function(t,n){return me.current.useInsertionEffect(t,n)};R.useLayoutEffect=function(t,n){return me.current.useLayoutEffect(t,n)};R.useMemo=function(t,n){return me.current.useMemo(t,n)};R.useReducer=function(t,n,i){return me.current.useReducer(t,n,i)};R.useRef=function(t){return me.current.useRef(t)};R.useState=function(t){return me.current.useState(t)};R.useSyncExternalStore=function(t,n,i){return me.current.useSyncExternalStore(t,n,i)};R.useTransition=function(){return me.current.useTransition()};R.version="18.3.1";sd.exports=R;var S=sd.exports;const nt=pp(S),Ip=hp({__proto__:null,default:nt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=S,Ap=Symbol.for("react.element"),Op=Symbol.for("react.fragment"),Np=Object.prototype.hasOwnProperty,Rp=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mp={key:!0,ref:!0,__self:!0,__source:!0};function md(t,n,i){var r,s={},o=null,l=null;i!==void 0&&(o=""+i),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Np.call(n,r)&&!Mp.hasOwnProperty(r)&&(s[r]=n[r]);if(t&&t.defaultProps)for(r in n=t.defaultProps,n)s[r]===void 0&&(s[r]=n[r]);return{$$typeof:Ap,type:t,key:o,ref:l,props:s,_owner:Rp.current}}es.Fragment=Op;es.jsx=md;es.jsxs=md;rd.exports=es;var e=rd.exports,so={},fd={exports:{}},Pe={},xd={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function n(I,O){var N=I.length;I.push(O);e:for(;0<N;){var G=N-1>>>1,te=I[G];if(0<s(te,O))I[G]=O,I[N]=te,N=G;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var O=I[0],N=I.pop();if(N!==O){I[0]=N;e:for(var G=0,te=I.length,Ji=te>>>1;G<Ji;){var Lt=2*(G+1)-1,ks=I[Lt],Bt=Lt+1,Ui=I[Bt];if(0>s(ks,N))Bt<te&&0>s(Ui,ks)?(I[G]=Ui,I[Bt]=N,G=Bt):(I[G]=ks,I[Lt]=N,G=Lt);else if(Bt<te&&0>s(Ui,N))I[G]=Ui,I[Bt]=N,G=Bt;else break e}}return O}function s(I,O){var N=I.sortIndex-O.sortIndex;return N!==0?N:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var c=[],d=[],u=1,h=null,x=3,b=!1,g=!1,j=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(I){for(var O=i(d);O!==null;){if(O.callback===null)r(d);else if(O.startTime<=I)r(d),O.sortIndex=O.expirationTime,n(c,O);else break;O=i(d)}}function w(I){if(j=!1,f(I),!g)if(i(c)!==null)g=!0,Es(C);else{var O=i(d);O!==null&&Cs(w,O.startTime-I)}}function C(I,O){g=!1,j&&(j=!1,m(D),D=-1),b=!0;var N=x;try{for(f(O),h=i(c);h!==null&&(!(h.expirationTime>O)||I&&!Le());){var G=h.callback;if(typeof G=="function"){h.callback=null,x=h.priorityLevel;var te=G(h.expirationTime<=O);O=t.unstable_now(),typeof te=="function"?h.callback=te:h===i(c)&&r(c),f(O)}else r(c);h=i(c)}if(h!==null)var Ji=!0;else{var Lt=i(d);Lt!==null&&Cs(w,Lt.startTime-O),Ji=!1}return Ji}finally{h=null,x=N,b=!1}}var k=!1,P=null,D=-1,U=5,M=-1;function Le(){return!(t.unstable_now()-M<U)}function Fn(){if(P!==null){var I=t.unstable_now();M=I;var O=!0;try{O=P(!0,I)}finally{O?Wn():(k=!1,P=null)}}else k=!1}var Wn;if(typeof p=="function")Wn=function(){p(Fn)};else if(typeof MessageChannel<"u"){var xa=new MessageChannel,up=xa.port2;xa.port1.onmessage=Fn,Wn=function(){up.postMessage(null)}}else Wn=function(){v(Fn,0)};function Es(I){P=I,k||(k=!0,Wn())}function Cs(I,O){D=v(function(){I(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||b||(g=!0,Es(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return i(c)},t.unstable_next=function(I){switch(x){case 1:case 2:case 3:var O=3;break;default:O=x}var N=x;x=O;try{return I()}finally{x=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var N=x;x=I;try{return O()}finally{x=N}},t.unstable_scheduleCallback=function(I,O,N){var G=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?G+N:G):N=G,I){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=N+te,I={id:u++,callback:O,priorityLevel:I,startTime:N,expirationTime:te,sortIndex:-1},N>G?(I.sortIndex=N,n(d,I),i(c)===null&&I===i(d)&&(j?(m(D),D=-1):j=!0,Cs(w,N-G))):(I.sortIndex=te,n(c,I),g||b||(g=!0,Es(C))),I},t.unstable_shouldYield=Le,t.unstable_wrapCallback=function(I){var O=x;return function(){var N=x;x=O;try{return I.apply(this,arguments)}finally{x=N}}}})(gd);xd.exports=gd;var Lp=xd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp=S,Te=Lp;function E(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jd=new Set,di={};function Zt(t,n){Cn(t,n),Cn(t+"Capture",n)}function Cn(t,n){for(di[t]=n,t=0;t<n.length;t++)jd.add(n[t])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oo=Object.prototype.hasOwnProperty,Fp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ya={},ba={};function Wp(t){return oo.call(ba,t)?!0:oo.call(ya,t)?!1:Fp.test(t)?ba[t]=!0:(ya[t]=!0,!1)}function Jp(t,n,i,r){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Up(t,n,i,r){if(n===null||typeof n>"u"||Jp(t,n,i,r))return!0;if(r)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(t,n,i,r,s,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=i,this.propertyName=t,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){oe[t]=new fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];oe[n]=new fe(n,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){oe[t]=new fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){oe[t]=new fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){oe[t]=new fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){oe[t]=new fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){oe[t]=new fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){oe[t]=new fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){oe[t]=new fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var gl=/[\-:]([a-z])/g;function jl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(gl,jl);oe[n]=new fe(n,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(gl,jl);oe[n]=new fe(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(gl,jl);oe[n]=new fe(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){oe[t]=new fe(t,1,!1,t.toLowerCase(),null,!1,!1)});oe.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){oe[t]=new fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function vl(t,n,i,r){var s=oe.hasOwnProperty(n)?oe[n]:null;(s!==null?s.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Up(n,i,s,r)&&(i=null),r||s===null?Wp(n)&&(i===null?t.removeAttribute(n):t.setAttribute(n,""+i)):s.mustUseProperty?t[s.propertyName]=i===null?s.type===3?!1:"":i:(n=s.attributeName,r=s.attributeNamespace,i===null?t.removeAttribute(n):(s=s.type,i=s===3||s===4&&i===!0?"":""+i,r?t.setAttributeNS(r,n,i):t.setAttribute(n,i))))}var ct=Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_i=Symbol.for("react.element"),ln=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),yl=Symbol.for("react.strict_mode"),lo=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),bl=Symbol.for("react.forward_ref"),ao=Symbol.for("react.suspense"),co=Symbol.for("react.suspense_list"),wl=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),bd=Symbol.for("react.offscreen"),wa=Symbol.iterator;function Jn(t){return t===null||typeof t!="object"?null:(t=wa&&t[wa]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,Ps;function Xn(t){if(Ps===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Ps=n&&n[1]||""}return`
`+Ps+t}var Is=!1;function Ds(t,n){if(!t||Is)return"";Is=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(t,[],n)}else{try{n.call()}catch(d){r=d}t.call(n.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=r.stack.split(`
`),l=s.length-1,a=o.length-1;1<=l&&0<=a&&s[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==o[a]){var c=`
`+s[l].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=l&&0<=a);break}}}finally{Is=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?Xn(t):""}function zp(t){switch(t.tag){case 5:return Xn(t.type);case 16:return Xn("Lazy");case 13:return Xn("Suspense");case 19:return Xn("SuspenseList");case 0:case 2:case 15:return t=Ds(t.type,!1),t;case 11:return t=Ds(t.type.render,!1),t;case 1:return t=Ds(t.type,!0),t;default:return""}}function uo(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case an:return"Fragment";case ln:return"Portal";case lo:return"Profiler";case yl:return"StrictMode";case ao:return"Suspense";case co:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yd:return(t.displayName||"Context")+".Consumer";case vd:return(t._context.displayName||"Context")+".Provider";case bl:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wl:return n=t.displayName||null,n!==null?n:uo(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return uo(t(n))}catch{}}return null}function _p(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uo(n);case 8:return n===yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function It(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wd(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qp(t){var n=wd(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),r=""+t[n];if(!t.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,o=i.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(t,n,{enumerable:i.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qi(t){t._valueTracker||(t._valueTracker=qp(t))}function Sd(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),r="";return t&&(r=wd(t)?t.checked?"true":"false":t.value),t=r,t!==i?(n.setValue(t),!0):!1}function Sr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ho(t,n){var i=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function Sa(t,n){var i=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;i=It(n.value!=null?n.value:i),t._wrapperState={initialChecked:r,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ed(t,n){n=n.checked,n!=null&&vl(t,"checked",n,!1)}function po(t,n){Ed(t,n);var i=It(n.value),r=n.type;if(i!=null)r==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?mo(t,n.type,i):n.hasOwnProperty("defaultValue")&&mo(t,n.type,It(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Ea(t,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,i||n===t.value||(t.value=n),t.defaultValue=n}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function mo(t,n,i){(n!=="number"||Sr(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var Kn=Array.isArray;function vn(t,n,i,r){if(t=t.options,n){n={};for(var s=0;s<i.length;s++)n["$"+i[s]]=!0;for(i=0;i<t.length;i++)s=n.hasOwnProperty("$"+t[i].value),t[i].selected!==s&&(t[i].selected=s),s&&r&&(t[i].defaultSelected=!0)}else{for(i=""+It(i),n=null,s=0;s<t.length;s++){if(t[s].value===i){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}n!==null||t[s].disabled||(n=t[s])}n!==null&&(n.selected=!0)}}function fo(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ca(t,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(E(92));if(Kn(i)){if(1<i.length)throw Error(E(93));i=i[0]}n=i}n==null&&(n=""),i=n}t._wrapperState={initialValue:It(i)}}function Cd(t,n){var i=It(n.value),r=It(n.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),n.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),r!=null&&(t.defaultValue=""+r)}function ka(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function kd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xo(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?kd(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hi,Td=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,r,s){MSApp.execUnsafeLocalFunction(function(){return t(n,i,r,s)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Hi=Hi||document.createElement("div"),Hi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Hi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function ui(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hp=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(t){Hp.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),ei[n]=ei[t]})});function Pd(t,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||ei.hasOwnProperty(t)&&ei[t]?(""+n).trim():n+"px"}function Id(t,n){t=t.style;for(var i in n)if(n.hasOwnProperty(i)){var r=i.indexOf("--")===0,s=Pd(i,n[i],r);i==="float"&&(i="cssFloat"),r?t.setProperty(i,s):t[i]=s}}var Vp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function go(t,n){if(n){if(Vp[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function jo(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vo=null;function Sl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yo=null,yn=null,bn=null;function Ta(t){if(t=Ni(t)){if(typeof yo!="function")throw Error(E(280));var n=t.stateNode;n&&(n=ss(n),yo(t.stateNode,t.type,n))}}function Dd(t){yn?bn?bn.push(t):bn=[t]:yn=t}function Ad(){if(yn){var t=yn,n=bn;if(bn=yn=null,Ta(t),n)for(t=0;t<n.length;t++)Ta(n[t])}}function Od(t,n){return t(n)}function Nd(){}var As=!1;function Rd(t,n,i){if(As)return t(n,i);As=!0;try{return Od(t,n,i)}finally{As=!1,(yn!==null||bn!==null)&&(Nd(),Ad())}}function hi(t,n){var i=t.stateNode;if(i===null)return null;var r=ss(i);if(r===null)return null;i=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(E(231,n,typeof i));return i}var bo=!1;if(rt)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){bo=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{bo=!1}function $p(t,n,i,r,s,o,l,a,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(i,d)}catch(u){this.onError(u)}}var ti=!1,Er=null,Cr=!1,wo=null,Gp={onError:function(t){ti=!0,Er=t}};function Xp(t,n,i,r,s,o,l,a,c){ti=!1,Er=null,$p.apply(Gp,arguments)}function Kp(t,n,i,r,s,o,l,a,c){if(Xp.apply(this,arguments),ti){if(ti){var d=Er;ti=!1,Er=null}else throw Error(E(198));Cr||(Cr=!0,wo=d)}}function en(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function Md(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Pa(t){if(en(t)!==t)throw Error(E(188))}function Qp(t){var n=t.alternate;if(!n){if(n=en(t),n===null)throw Error(E(188));return n!==t?null:t}for(var i=t,r=n;;){var s=i.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){i=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===i)return Pa(s),t;if(o===r)return Pa(s),n;o=o.sibling}throw Error(E(188))}if(i.return!==r.return)i=s,r=o;else{for(var l=!1,a=s.child;a;){if(a===i){l=!0,i=s,r=o;break}if(a===r){l=!0,r=s,i=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===i){l=!0,i=o,r=s;break}if(a===r){l=!0,r=o,i=s;break}a=a.sibling}if(!l)throw Error(E(189))}}if(i.alternate!==r)throw Error(E(190))}if(i.tag!==3)throw Error(E(188));return i.stateNode.current===i?t:n}function Ld(t){return t=Qp(t),t!==null?Bd(t):null}function Bd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Bd(t);if(n!==null)return n;t=t.sibling}return null}var Fd=Te.unstable_scheduleCallback,Ia=Te.unstable_cancelCallback,Yp=Te.unstable_shouldYield,Zp=Te.unstable_requestPaint,X=Te.unstable_now,em=Te.unstable_getCurrentPriorityLevel,El=Te.unstable_ImmediatePriority,Wd=Te.unstable_UserBlockingPriority,kr=Te.unstable_NormalPriority,tm=Te.unstable_LowPriority,Jd=Te.unstable_IdlePriority,ts=null,Xe=null;function nm(t){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(ts,t,void 0,(t.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:sm,im=Math.log,rm=Math.LN2;function sm(t){return t>>>=0,t===0?32:31-(im(t)/rm|0)|0}var Vi=64,$i=4194304;function Qn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tr(t,n){var i=t.pendingLanes;if(i===0)return 0;var r=0,s=t.suspendedLanes,o=t.pingedLanes,l=i&268435455;if(l!==0){var a=l&~s;a!==0?r=Qn(a):(o&=l,o!==0&&(r=Qn(o)))}else l=i&~s,l!==0?r=Qn(l):o!==0&&(r=Qn(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&s)&&(s=r&-r,o=n&-n,s>=o||s===16&&(o&4194240)!==0))return n;if(r&4&&(r|=i&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=r;0<n;)i=31-Ue(n),s=1<<i,r|=t[i],n&=~s;return r}function om(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lm(t,n){for(var i=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-Ue(o),a=1<<l,c=s[l];c===-1?(!(a&i)||a&r)&&(s[l]=om(a,n)):c<=n&&(t.expiredLanes|=a),o&=~a}}function So(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ud(){var t=Vi;return Vi<<=1,!(Vi&4194240)&&(Vi=64),t}function Os(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function Ai(t,n,i){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Ue(n),t[n]=i}function am(t,n){var i=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<i;){var s=31-Ue(i),o=1<<s;n[s]=0,r[s]=-1,t[s]=-1,i&=~o}}function Cl(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var r=31-Ue(i),s=1<<r;s&n|t[r]&n&&(t[r]|=n),i&=~s}}var B=0;function zd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _d,kl,qd,Hd,Vd,Eo=!1,Gi=[],yt=null,bt=null,wt=null,pi=new Map,mi=new Map,mt=[],cm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Da(t,n){switch(t){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":pi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(n.pointerId)}}function zn(t,n,i,r,s,o){return t===null||t.nativeEvent!==o?(t={blockedOn:n,domEventName:i,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},n!==null&&(n=Ni(n),n!==null&&kl(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),t)}function dm(t,n,i,r,s){switch(n){case"focusin":return yt=zn(yt,t,n,i,r,s),!0;case"dragenter":return bt=zn(bt,t,n,i,r,s),!0;case"mouseover":return wt=zn(wt,t,n,i,r,s),!0;case"pointerover":var o=s.pointerId;return pi.set(o,zn(pi.get(o)||null,t,n,i,r,s)),!0;case"gotpointercapture":return o=s.pointerId,mi.set(o,zn(mi.get(o)||null,t,n,i,r,s)),!0}return!1}function $d(t){var n=Jt(t.target);if(n!==null){var i=en(n);if(i!==null){if(n=i.tag,n===13){if(n=Md(i),n!==null){t.blockedOn=n,Vd(t.priority,function(){qd(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ar(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Co(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);vo=r,i.target.dispatchEvent(r),vo=null}else return n=Ni(i),n!==null&&kl(n),t.blockedOn=i,!1;n.shift()}return!0}function Aa(t,n,i){ar(t)&&i.delete(n)}function um(){Eo=!1,yt!==null&&ar(yt)&&(yt=null),bt!==null&&ar(bt)&&(bt=null),wt!==null&&ar(wt)&&(wt=null),pi.forEach(Aa),mi.forEach(Aa)}function _n(t,n){t.blockedOn===n&&(t.blockedOn=null,Eo||(Eo=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,um)))}function fi(t){function n(s){return _n(s,t)}if(0<Gi.length){_n(Gi[0],t);for(var i=1;i<Gi.length;i++){var r=Gi[i];r.blockedOn===t&&(r.blockedOn=null)}}for(yt!==null&&_n(yt,t),bt!==null&&_n(bt,t),wt!==null&&_n(wt,t),pi.forEach(n),mi.forEach(n),i=0;i<mt.length;i++)r=mt[i],r.blockedOn===t&&(r.blockedOn=null);for(;0<mt.length&&(i=mt[0],i.blockedOn===null);)$d(i),i.blockedOn===null&&mt.shift()}var wn=ct.ReactCurrentBatchConfig,Pr=!0;function hm(t,n,i,r){var s=B,o=wn.transition;wn.transition=null;try{B=1,Tl(t,n,i,r)}finally{B=s,wn.transition=o}}function pm(t,n,i,r){var s=B,o=wn.transition;wn.transition=null;try{B=4,Tl(t,n,i,r)}finally{B=s,wn.transition=o}}function Tl(t,n,i,r){if(Pr){var s=Co(t,n,i,r);if(s===null)zs(t,n,r,Ir,i),Da(t,r);else if(dm(s,t,n,i,r))r.stopPropagation();else if(Da(t,r),n&4&&-1<cm.indexOf(t)){for(;s!==null;){var o=Ni(s);if(o!==null&&_d(o),o=Co(t,n,i,r),o===null&&zs(t,n,r,Ir,i),o===s)break;s=o}s!==null&&r.stopPropagation()}else zs(t,n,r,null,i)}}var Ir=null;function Co(t,n,i,r){if(Ir=null,t=Sl(r),t=Jt(t),t!==null)if(n=en(t),n===null)t=null;else if(i=n.tag,i===13){if(t=Md(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Ir=t,null}function Gd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(em()){case El:return 1;case Wd:return 4;case kr:case tm:return 16;case Jd:return 536870912;default:return 16}default:return 16}}var gt=null,Pl=null,cr=null;function Xd(){if(cr)return cr;var t,n=Pl,i=n.length,r,s="value"in gt?gt.value:gt.textContent,o=s.length;for(t=0;t<i&&n[t]===s[t];t++);var l=i-t;for(r=1;r<=l&&n[i-r]===s[o-r];r++);return cr=s.slice(t,1<r?1-r:void 0)}function dr(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xi(){return!0}function Oa(){return!1}function Ie(t){function n(i,r,s,o,l){this._reactName=i,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(i=t[a],this[a]=i?i(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xi:Oa,this.isPropagationStopped=Oa,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),n}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Ie(Nn),Oi=H({},Nn,{view:0,detail:0}),mm=Ie(Oi),Ns,Rs,qn,ns=H({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qn&&(qn&&t.type==="mousemove"?(Ns=t.screenX-qn.screenX,Rs=t.screenY-qn.screenY):Rs=Ns=0,qn=t),Ns)},movementY:function(t){return"movementY"in t?t.movementY:Rs}}),Na=Ie(ns),fm=H({},ns,{dataTransfer:0}),xm=Ie(fm),gm=H({},Oi,{relatedTarget:0}),Ms=Ie(gm),jm=H({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=Ie(jm),ym=H({},Nn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bm=Ie(ym),wm=H({},Nn,{data:0}),Ra=Ie(wm),Sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function km(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Cm[t])?!!n[t]:!1}function Dl(){return km}var Tm=H({},Oi,{key:function(t){if(t.key){var n=Sm[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=dr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Em[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dl,charCode:function(t){return t.type==="keypress"?dr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pm=Ie(Tm),Im=H({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ma=Ie(Im),Dm=H({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dl}),Am=Ie(Dm),Om=H({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nm=Ie(Om),Rm=H({},ns,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mm=Ie(Rm),Lm=[9,13,27,32],Al=rt&&"CompositionEvent"in window,ni=null;rt&&"documentMode"in document&&(ni=document.documentMode);var Bm=rt&&"TextEvent"in window&&!ni,Kd=rt&&(!Al||ni&&8<ni&&11>=ni),La=" ",Ba=!1;function Qd(t,n){switch(t){case"keyup":return Lm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cn=!1;function Fm(t,n){switch(t){case"compositionend":return Yd(n);case"keypress":return n.which!==32?null:(Ba=!0,La);case"textInput":return t=n.data,t===La&&Ba?null:t;default:return null}}function Wm(t,n){if(cn)return t==="compositionend"||!Al&&Qd(t,n)?(t=Xd(),cr=Pl=gt=null,cn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kd&&n.locale!=="ko"?null:n.data;default:return null}}var Jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fa(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Jm[t.type]:n==="textarea"}function Zd(t,n,i,r){Dd(r),n=Dr(n,"onChange"),0<n.length&&(i=new Il("onChange","change",null,i,r),t.push({event:i,listeners:n}))}var ii=null,xi=null;function Um(t){du(t,0)}function is(t){var n=hn(t);if(Sd(n))return t}function zm(t,n){if(t==="change")return n}var eu=!1;if(rt){var Ls;if(rt){var Bs="oninput"in document;if(!Bs){var Wa=document.createElement("div");Wa.setAttribute("oninput","return;"),Bs=typeof Wa.oninput=="function"}Ls=Bs}else Ls=!1;eu=Ls&&(!document.documentMode||9<document.documentMode)}function Ja(){ii&&(ii.detachEvent("onpropertychange",tu),xi=ii=null)}function tu(t){if(t.propertyName==="value"&&is(xi)){var n=[];Zd(n,xi,t,Sl(t)),Rd(Um,n)}}function _m(t,n,i){t==="focusin"?(Ja(),ii=n,xi=i,ii.attachEvent("onpropertychange",tu)):t==="focusout"&&Ja()}function qm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return is(xi)}function Hm(t,n){if(t==="click")return is(n)}function Vm(t,n){if(t==="input"||t==="change")return is(n)}function $m(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var _e=typeof Object.is=="function"?Object.is:$m;function gi(t,n){if(_e(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),r=Object.keys(n);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var s=i[r];if(!oo.call(n,s)||!_e(t[s],n[s]))return!1}return!0}function Ua(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function za(t,n){var i=Ua(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=n&&r>=n)return{node:i,offset:n-t};t=r}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ua(i)}}function nu(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?nu(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function iu(){for(var t=window,n=Sr();n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Sr(t.document)}return n}function Ol(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Gm(t){var n=iu(),i=t.focusedElem,r=t.selectionRange;if(n!==i&&i&&i.ownerDocument&&nu(i.ownerDocument.documentElement,i)){if(r!==null&&Ol(i)){if(n=r.start,t=r.end,t===void 0&&(t=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(t,i.value.length);else if(t=(n=i.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var s=i.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!t.extend&&o>r&&(s=r,r=o,o=s),s=za(i,o);var l=za(i,r);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),t.removeAllRanges(),o>r?(t.addRange(n),t.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),t.addRange(n)))}}for(n=[],t=i;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)t=n[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xm=rt&&"documentMode"in document&&11>=document.documentMode,dn=null,ko=null,ri=null,To=!1;function _a(t,n,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;To||dn==null||dn!==Sr(r)||(r=dn,"selectionStart"in r&&Ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ri&&gi(ri,r)||(ri=r,r=Dr(ko,"onSelect"),0<r.length&&(n=new Il("onSelect","select",null,n,i),t.push({event:n,listeners:r}),n.target=dn)))}function Ki(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var un={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionend:Ki("Transition","TransitionEnd")},Fs={},ru={};rt&&(ru=document.createElement("div").style,"AnimationEvent"in window||(delete un.animationend.animation,delete un.animationiteration.animation,delete un.animationstart.animation),"TransitionEvent"in window||delete un.transitionend.transition);function rs(t){if(Fs[t])return Fs[t];if(!un[t])return t;var n=un[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in ru)return Fs[t]=n[i];return t}var su=rs("animationend"),ou=rs("animationiteration"),lu=rs("animationstart"),au=rs("transitionend"),cu=new Map,qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(t,n){cu.set(t,n),Zt(n,[t])}for(var Ws=0;Ws<qa.length;Ws++){var Js=qa[Ws],Km=Js.toLowerCase(),Qm=Js[0].toUpperCase()+Js.slice(1);At(Km,"on"+Qm)}At(su,"onAnimationEnd");At(ou,"onAnimationIteration");At(lu,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(au,"onTransitionEnd");Cn("onMouseEnter",["mouseout","mouseover"]);Cn("onMouseLeave",["mouseout","mouseover"]);Cn("onPointerEnter",["pointerout","pointerover"]);Cn("onPointerLeave",["pointerout","pointerover"]);Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ym=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function Ha(t,n,i){var r=t.type||"unknown-event";t.currentTarget=i,Kp(r,n,void 0,t),t.currentTarget=null}function du(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],s=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==o&&s.isPropagationStopped())break e;Ha(s,a,d),o=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,d=a.currentTarget,a=a.listener,c!==o&&s.isPropagationStopped())break e;Ha(s,a,d),o=c}}}if(Cr)throw t=wo,Cr=!1,wo=null,t}function W(t,n){var i=n[Oo];i===void 0&&(i=n[Oo]=new Set);var r=t+"__bubble";i.has(r)||(uu(n,t,2,!1),i.add(r))}function Us(t,n,i){var r=0;n&&(r|=4),uu(i,t,r,n)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function ji(t){if(!t[Qi]){t[Qi]=!0,jd.forEach(function(i){i!=="selectionchange"&&(Ym.has(i)||Us(i,!1,t),Us(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Qi]||(n[Qi]=!0,Us("selectionchange",!1,n))}}function uu(t,n,i,r){switch(Gd(n)){case 1:var s=hm;break;case 4:s=pm;break;default:s=Tl}i=s.bind(null,n,i,t),s=void 0,!bo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(n,i,{capture:!0,passive:s}):t.addEventListener(n,i,!0):s!==void 0?t.addEventListener(n,i,{passive:s}):t.addEventListener(n,i,!1)}function zs(t,n,i,r,s){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;a!==null;){if(l=Jt(a),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Rd(function(){var d=o,u=Sl(i),h=[];e:{var x=cu.get(t);if(x!==void 0){var b=Il,g=t;switch(t){case"keypress":if(dr(i)===0)break e;case"keydown":case"keyup":b=Pm;break;case"focusin":g="focus",b=Ms;break;case"focusout":g="blur",b=Ms;break;case"beforeblur":case"afterblur":b=Ms;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Am;break;case su:case ou:case lu:b=vm;break;case au:b=Nm;break;case"scroll":b=mm;break;case"wheel":b=Mm;break;case"copy":case"cut":case"paste":b=bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ma}var j=(n&4)!==0,v=!j&&t==="scroll",m=j?x!==null?x+"Capture":null:x;j=[];for(var p=d,f;p!==null;){f=p;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,m!==null&&(w=hi(p,m),w!=null&&j.push(vi(p,w,f)))),v)break;p=p.return}0<j.length&&(x=new b(x,g,null,i,u),h.push({event:x,listeners:j}))}}if(!(n&7)){e:{if(x=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",x&&i!==vo&&(g=i.relatedTarget||i.fromElement)&&(Jt(g)||g[st]))break e;if((b||x)&&(x=u.window===u?u:(x=u.ownerDocument)?x.defaultView||x.parentWindow:window,b?(g=i.relatedTarget||i.toElement,b=d,g=g?Jt(g):null,g!==null&&(v=en(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(b=null,g=d),b!==g)){if(j=Na,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(j=Ma,w="onPointerLeave",m="onPointerEnter",p="pointer"),v=b==null?x:hn(b),f=g==null?x:hn(g),x=new j(w,p+"leave",b,i,u),x.target=v,x.relatedTarget=f,w=null,Jt(u)===d&&(j=new j(m,p+"enter",g,i,u),j.target=f,j.relatedTarget=v,w=j),v=w,b&&g)t:{for(j=b,m=g,p=0,f=j;f;f=on(f))p++;for(f=0,w=m;w;w=on(w))f++;for(;0<p-f;)j=on(j),p--;for(;0<f-p;)m=on(m),f--;for(;p--;){if(j===m||m!==null&&j===m.alternate)break t;j=on(j),m=on(m)}j=null}else j=null;b!==null&&Va(h,x,b,j,!1),g!==null&&v!==null&&Va(h,v,g,j,!0)}}e:{if(x=d?hn(d):window,b=x.nodeName&&x.nodeName.toLowerCase(),b==="select"||b==="input"&&x.type==="file")var C=zm;else if(Fa(x))if(eu)C=Vm;else{C=qm;var k=_m}else(b=x.nodeName)&&b.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(C=Hm);if(C&&(C=C(t,d))){Zd(h,C,i,u);break e}k&&k(t,x,d),t==="focusout"&&(k=x._wrapperState)&&k.controlled&&x.type==="number"&&mo(x,"number",x.value)}switch(k=d?hn(d):window,t){case"focusin":(Fa(k)||k.contentEditable==="true")&&(dn=k,ko=d,ri=null);break;case"focusout":ri=ko=dn=null;break;case"mousedown":To=!0;break;case"contextmenu":case"mouseup":case"dragend":To=!1,_a(h,i,u);break;case"selectionchange":if(Xm)break;case"keydown":case"keyup":_a(h,i,u)}var P;if(Al)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else cn?Qd(t,i)&&(D="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(D="onCompositionStart");D&&(Kd&&i.locale!=="ko"&&(cn||D!=="onCompositionStart"?D==="onCompositionEnd"&&cn&&(P=Xd()):(gt=u,Pl="value"in gt?gt.value:gt.textContent,cn=!0)),k=Dr(d,D),0<k.length&&(D=new Ra(D,t,null,i,u),h.push({event:D,listeners:k}),P?D.data=P:(P=Yd(i),P!==null&&(D.data=P)))),(P=Bm?Fm(t,i):Wm(t,i))&&(d=Dr(d,"onBeforeInput"),0<d.length&&(u=new Ra("onBeforeInput","beforeinput",null,i,u),h.push({event:u,listeners:d}),u.data=P))}du(h,n)})}function vi(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Dr(t,n){for(var i=n+"Capture",r=[];t!==null;){var s=t,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=hi(t,i),o!=null&&r.unshift(vi(t,o,s)),o=hi(t,n),o!=null&&r.push(vi(t,o,s))),t=t.return}return r}function on(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Va(t,n,i,r,s){for(var o=n._reactName,l=[];i!==null&&i!==r;){var a=i,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,s?(c=hi(i,o),c!=null&&l.unshift(vi(i,c,a))):s||(c=hi(i,o),c!=null&&l.push(vi(i,c,a)))),i=i.return}l.length!==0&&t.push({event:n,listeners:l})}var Zm=/\r\n?/g,ef=/\u0000|\uFFFD/g;function $a(t){return(typeof t=="string"?t:""+t).replace(Zm,`
`).replace(ef,"")}function Yi(t,n,i){if(n=$a(n),$a(t)!==n&&i)throw Error(E(425))}function Ar(){}var Po=null,Io=null;function Do(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ao=typeof setTimeout=="function"?setTimeout:void 0,tf=typeof clearTimeout=="function"?clearTimeout:void 0,Ga=typeof Promise=="function"?Promise:void 0,nf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ga<"u"?function(t){return Ga.resolve(null).then(t).catch(rf)}:Ao;function rf(t){setTimeout(function(){throw t})}function _s(t,n){var i=n,r=0;do{var s=i.nextSibling;if(t.removeChild(i),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(r===0){t.removeChild(s),fi(n);return}r--}else i!=="$"&&i!=="$?"&&i!=="$!"||r++;i=s}while(i);fi(n)}function St(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Xa(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return t;n--}else i==="/$"&&n++}t=t.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Rn,yi="__reactProps$"+Rn,st="__reactContainer$"+Rn,Oo="__reactEvents$"+Rn,sf="__reactListeners$"+Rn,of="__reactHandles$"+Rn;function Jt(t){var n=t[Ge];if(n)return n;for(var i=t.parentNode;i;){if(n=i[st]||i[Ge]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=Xa(t);t!==null;){if(i=t[Ge])return i;t=Xa(t)}return n}t=i,i=t.parentNode}return null}function Ni(t){return t=t[Ge]||t[st],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function ss(t){return t[yi]||null}var No=[],pn=-1;function Ot(t){return{current:t}}function J(t){0>pn||(t.current=No[pn],No[pn]=null,pn--)}function F(t,n){pn++,No[pn]=t.current,t.current=n}var Dt={},de=Ot(Dt),je=Ot(!1),$t=Dt;function kn(t,n){var i=t.type.contextTypes;if(!i)return Dt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in i)s[o]=n[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=s),s}function ve(t){return t=t.childContextTypes,t!=null}function Or(){J(je),J(de)}function Ka(t,n,i){if(de.current!==Dt)throw Error(E(168));F(de,n),F(je,i)}function hu(t,n,i){var r=t.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return i;r=r.getChildContext();for(var s in r)if(!(s in n))throw Error(E(108,_p(t)||"Unknown",s));return H({},i,r)}function Nr(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dt,$t=de.current,F(de,t),F(je,je.current),!0}function Qa(t,n,i){var r=t.stateNode;if(!r)throw Error(E(169));i?(t=hu(t,n,$t),r.__reactInternalMemoizedMergedChildContext=t,J(je),J(de),F(de,t)):J(je),F(je,i)}var Ze=null,os=!1,qs=!1;function pu(t){Ze===null?Ze=[t]:Ze.push(t)}function lf(t){os=!0,pu(t)}function Nt(){if(!qs&&Ze!==null){qs=!0;var t=0,n=B;try{var i=Ze;for(B=1;t<i.length;t++){var r=i[t];do r=r(!0);while(r!==null)}Ze=null,os=!1}catch(s){throw Ze!==null&&(Ze=Ze.slice(t+1)),Fd(El,Nt),s}finally{B=n,qs=!1}}return null}var mn=[],fn=0,Rr=null,Mr=0,De=[],Ae=0,Gt=null,et=1,tt="";function Ft(t,n){mn[fn++]=Mr,mn[fn++]=Rr,Rr=t,Mr=n}function mu(t,n,i){De[Ae++]=et,De[Ae++]=tt,De[Ae++]=Gt,Gt=t;var r=et;t=tt;var s=32-Ue(r)-1;r&=~(1<<s),i+=1;var o=32-Ue(n)+s;if(30<o){var l=s-s%5;o=(r&(1<<l)-1).toString(32),r>>=l,s-=l,et=1<<32-Ue(n)+s|i<<s|r,tt=o+t}else et=1<<o|i<<s|r,tt=t}function Nl(t){t.return!==null&&(Ft(t,1),mu(t,1,0))}function Rl(t){for(;t===Rr;)Rr=mn[--fn],mn[fn]=null,Mr=mn[--fn],mn[fn]=null;for(;t===Gt;)Gt=De[--Ae],De[Ae]=null,tt=De[--Ae],De[Ae]=null,et=De[--Ae],De[Ae]=null}var Ce=null,Ee=null,z=!1,Je=null;function fu(t,n){var i=Oe(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=t,n=t.deletions,n===null?(t.deletions=[i],t.flags|=16):n.push(i)}function Ya(t,n){switch(t.tag){case 5:var i=t.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Ce=t,Ee=St(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Ce=t,Ee=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Gt!==null?{id:et,overflow:tt}:null,t.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=Oe(18,null,null,0),i.stateNode=n,i.return=t,t.child=i,Ce=t,Ee=null,!0):!1;default:return!1}}function Ro(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mo(t){if(z){var n=Ee;if(n){var i=n;if(!Ya(t,n)){if(Ro(t))throw Error(E(418));n=St(i.nextSibling);var r=Ce;n&&Ya(t,n)?fu(r,i):(t.flags=t.flags&-4097|2,z=!1,Ce=t)}}else{if(Ro(t))throw Error(E(418));t.flags=t.flags&-4097|2,z=!1,Ce=t}}}function Za(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ce=t}function Zi(t){if(t!==Ce)return!1;if(!z)return Za(t),z=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Do(t.type,t.memoizedProps)),n&&(n=Ee)){if(Ro(t))throw xu(),Error(E(418));for(;n;)fu(t,n),n=St(n.nextSibling)}if(Za(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(n===0){Ee=St(t.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}t=t.nextSibling}Ee=null}}else Ee=Ce?St(t.stateNode.nextSibling):null;return!0}function xu(){for(var t=Ee;t;)t=St(t.nextSibling)}function Tn(){Ee=Ce=null,z=!1}function Ml(t){Je===null?Je=[t]:Je.push(t)}var af=ct.ReactCurrentBatchConfig;function Hn(t,n,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(E(309));var r=i.stateNode}if(!r)throw Error(E(147,t));var s=r,o=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=s.refs;l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof t!="string")throw Error(E(284));if(!i._owner)throw Error(E(290,t))}return t}function er(t,n){throw t=Object.prototype.toString.call(n),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function ec(t){var n=t._init;return n(t._payload)}function gu(t){function n(m,p){if(t){var f=m.deletions;f===null?(m.deletions=[p],m.flags|=16):f.push(p)}}function i(m,p){if(!t)return null;for(;p!==null;)n(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function s(m,p){return m=Tt(m,p),m.index=0,m.sibling=null,m}function o(m,p,f){return m.index=f,t?(f=m.alternate,f!==null?(f=f.index,f<p?(m.flags|=2,p):f):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,f,w){return p===null||p.tag!==6?(p=Qs(f,m.mode,w),p.return=m,p):(p=s(p,f),p.return=m,p)}function c(m,p,f,w){var C=f.type;return C===an?u(m,p,f.props.children,w,f.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ht&&ec(C)===p.type)?(w=s(p,f.props),w.ref=Hn(m,p,f),w.return=m,w):(w=gr(f.type,f.key,f.props,null,m.mode,w),w.ref=Hn(m,p,f),w.return=m,w)}function d(m,p,f,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=Ys(f,m.mode,w),p.return=m,p):(p=s(p,f.children||[]),p.return=m,p)}function u(m,p,f,w,C){return p===null||p.tag!==7?(p=Ht(f,m.mode,w,C),p.return=m,p):(p=s(p,f),p.return=m,p)}function h(m,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Qs(""+p,m.mode,f),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _i:return f=gr(p.type,p.key,p.props,null,m.mode,f),f.ref=Hn(m,null,p),f.return=m,f;case ln:return p=Ys(p,m.mode,f),p.return=m,p;case ht:var w=p._init;return h(m,w(p._payload),f)}if(Kn(p)||Jn(p))return p=Ht(p,m.mode,f,null),p.return=m,p;er(m,p)}return null}function x(m,p,f,w){var C=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:a(m,p,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _i:return f.key===C?c(m,p,f,w):null;case ln:return f.key===C?d(m,p,f,w):null;case ht:return C=f._init,x(m,p,C(f._payload),w)}if(Kn(f)||Jn(f))return C!==null?null:u(m,p,f,w,null);er(m,f)}return null}function b(m,p,f,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(f)||null,a(p,m,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case _i:return m=m.get(w.key===null?f:w.key)||null,c(p,m,w,C);case ln:return m=m.get(w.key===null?f:w.key)||null,d(p,m,w,C);case ht:var k=w._init;return b(m,p,f,k(w._payload),C)}if(Kn(w)||Jn(w))return m=m.get(f)||null,u(p,m,w,C,null);er(p,w)}return null}function g(m,p,f,w){for(var C=null,k=null,P=p,D=p=0,U=null;P!==null&&D<f.length;D++){P.index>D?(U=P,P=null):U=P.sibling;var M=x(m,P,f[D],w);if(M===null){P===null&&(P=U);break}t&&P&&M.alternate===null&&n(m,P),p=o(M,p,D),k===null?C=M:k.sibling=M,k=M,P=U}if(D===f.length)return i(m,P),z&&Ft(m,D),C;if(P===null){for(;D<f.length;D++)P=h(m,f[D],w),P!==null&&(p=o(P,p,D),k===null?C=P:k.sibling=P,k=P);return z&&Ft(m,D),C}for(P=r(m,P);D<f.length;D++)U=b(P,m,D,f[D],w),U!==null&&(t&&U.alternate!==null&&P.delete(U.key===null?D:U.key),p=o(U,p,D),k===null?C=U:k.sibling=U,k=U);return t&&P.forEach(function(Le){return n(m,Le)}),z&&Ft(m,D),C}function j(m,p,f,w){var C=Jn(f);if(typeof C!="function")throw Error(E(150));if(f=C.call(f),f==null)throw Error(E(151));for(var k=C=null,P=p,D=p=0,U=null,M=f.next();P!==null&&!M.done;D++,M=f.next()){P.index>D?(U=P,P=null):U=P.sibling;var Le=x(m,P,M.value,w);if(Le===null){P===null&&(P=U);break}t&&P&&Le.alternate===null&&n(m,P),p=o(Le,p,D),k===null?C=Le:k.sibling=Le,k=Le,P=U}if(M.done)return i(m,P),z&&Ft(m,D),C;if(P===null){for(;!M.done;D++,M=f.next())M=h(m,M.value,w),M!==null&&(p=o(M,p,D),k===null?C=M:k.sibling=M,k=M);return z&&Ft(m,D),C}for(P=r(m,P);!M.done;D++,M=f.next())M=b(P,m,D,M.value,w),M!==null&&(t&&M.alternate!==null&&P.delete(M.key===null?D:M.key),p=o(M,p,D),k===null?C=M:k.sibling=M,k=M);return t&&P.forEach(function(Fn){return n(m,Fn)}),z&&Ft(m,D),C}function v(m,p,f,w){if(typeof f=="object"&&f!==null&&f.type===an&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case _i:e:{for(var C=f.key,k=p;k!==null;){if(k.key===C){if(C=f.type,C===an){if(k.tag===7){i(m,k.sibling),p=s(k,f.props.children),p.return=m,m=p;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ht&&ec(C)===k.type){i(m,k.sibling),p=s(k,f.props),p.ref=Hn(m,k,f),p.return=m,m=p;break e}i(m,k);break}else n(m,k);k=k.sibling}f.type===an?(p=Ht(f.props.children,m.mode,w,f.key),p.return=m,m=p):(w=gr(f.type,f.key,f.props,null,m.mode,w),w.ref=Hn(m,p,f),w.return=m,m=w)}return l(m);case ln:e:{for(k=f.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){i(m,p.sibling),p=s(p,f.children||[]),p.return=m,m=p;break e}else{i(m,p);break}else n(m,p);p=p.sibling}p=Ys(f,m.mode,w),p.return=m,m=p}return l(m);case ht:return k=f._init,v(m,p,k(f._payload),w)}if(Kn(f))return g(m,p,f,w);if(Jn(f))return j(m,p,f,w);er(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(i(m,p.sibling),p=s(p,f),p.return=m,m=p):(i(m,p),p=Qs(f,m.mode,w),p.return=m,m=p),l(m)):i(m,p)}return v}var Pn=gu(!0),ju=gu(!1),Lr=Ot(null),Br=null,xn=null,Ll=null;function Bl(){Ll=xn=Br=null}function Fl(t){var n=Lr.current;J(Lr),t._currentValue=n}function Lo(t,n,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===i)break;t=t.return}}function Sn(t,n){Br=t,Ll=xn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&n&&(ge=!0),t.firstContext=null)}function Re(t){var n=t._currentValue;if(Ll!==t)if(t={context:t,memoizedValue:n,next:null},xn===null){if(Br===null)throw Error(E(308));xn=t,Br.dependencies={lanes:0,firstContext:t}}else xn=xn.next=t;return n}var Ut=null;function Wl(t){Ut===null?Ut=[t]:Ut.push(t)}function vu(t,n,i,r){var s=n.interleaved;return s===null?(i.next=i,Wl(n)):(i.next=s.next,s.next=i),n.interleaved=i,ot(t,r)}function ot(t,n){t.lanes|=n;var i=t.alternate;for(i!==null&&(i.lanes|=n),i=t,t=t.return;t!==null;)t.childLanes|=n,i=t.alternate,i!==null&&(i.childLanes|=n),i=t,t=t.return;return i.tag===3?i.stateNode:null}var pt=!1;function Jl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function it(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Et(t,n,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var s=r.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),r.pending=n,ot(t,i)}return s=r.interleaved,s===null?(n.next=n,Wl(r)):(n.next=s.next,s.next=n),r.interleaved=n,ot(t,i)}function ur(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,Cl(t,i)}}function tc(t,n){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var s=null,o=null;if(i=i.firstBaseUpdate,i!==null){do{var l={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};o===null?s=o=l:o=o.next=l,i=i.next}while(i!==null);o===null?s=o=n:o=o.next=n}else s=o=n;i={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}function Fr(t,n,i,r){var s=t.updateQueue;pt=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,d=c.next;c.next=null,l===null?o=d:l.next=d,l=c;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=d:a.next=d,u.lastBaseUpdate=c))}if(o!==null){var h=s.baseState;l=0,u=d=c=null,a=o;do{var x=a.lane,b=a.eventTime;if((r&x)===x){u!==null&&(u=u.next={eventTime:b,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,j=a;switch(x=n,b=i,j.tag){case 1:if(g=j.payload,typeof g=="function"){h=g.call(b,h,x);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=j.payload,x=typeof g=="function"?g.call(b,h,x):g,x==null)break e;h=H({},h,x);break e;case 2:pt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,x=s.effects,x===null?s.effects=[a]:x.push(a))}else b={eventTime:b,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(d=u=b,c=h):u=u.next=b,l|=x;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;x=a,a=x.next,x.next=null,s.lastBaseUpdate=x,s.shared.pending=null}}while(!0);if(u===null&&(c=h),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=u,n=s.shared.interleaved,n!==null){s=n;do l|=s.lane,s=s.next;while(s!==n)}else o===null&&(s.shared.lanes=0);Kt|=l,t.lanes=l,t.memoizedState=h}}function nc(t,n,i){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var r=t[n],s=r.callback;if(s!==null){if(r.callback=null,r=i,typeof s!="function")throw Error(E(191,s));s.call(r)}}}var Ri={},Ke=Ot(Ri),bi=Ot(Ri),wi=Ot(Ri);function zt(t){if(t===Ri)throw Error(E(174));return t}function Ul(t,n){switch(F(wi,n),F(bi,t),F(Ke,Ri),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:xo(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=xo(n,t)}J(Ke),F(Ke,n)}function In(){J(Ke),J(bi),J(wi)}function bu(t){zt(wi.current);var n=zt(Ke.current),i=xo(n,t.type);n!==i&&(F(bi,t),F(Ke,i))}function zl(t){bi.current===t&&(J(Ke),J(bi))}var _=Ot(0);function Wr(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hs=[];function _l(){for(var t=0;t<Hs.length;t++)Hs[t]._workInProgressVersionPrimary=null;Hs.length=0}var hr=ct.ReactCurrentDispatcher,Vs=ct.ReactCurrentBatchConfig,Xt=0,q=null,Y=null,ne=null,Jr=!1,si=!1,Si=0,cf=0;function le(){throw Error(E(321))}function ql(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!_e(t[i],n[i]))return!1;return!0}function Hl(t,n,i,r,s,o){if(Xt=o,q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,hr.current=t===null||t.memoizedState===null?pf:mf,t=i(r,s),si){o=0;do{if(si=!1,Si=0,25<=o)throw Error(E(301));o+=1,ne=Y=null,n.updateQueue=null,hr.current=ff,t=i(r,s)}while(si)}if(hr.current=Ur,n=Y!==null&&Y.next!==null,Xt=0,ne=Y=q=null,Jr=!1,n)throw Error(E(300));return t}function Vl(){var t=Si!==0;return Si=0,t}function Ve(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?q.memoizedState=ne=t:ne=ne.next=t,ne}function Me(){if(Y===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=Y.next;var n=ne===null?q.memoizedState:ne.next;if(n!==null)ne=n,Y=t;else{if(t===null)throw Error(E(310));Y=t,t={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ne===null?q.memoizedState=ne=t:ne=ne.next=t}return ne}function Ei(t,n){return typeof n=="function"?n(t):n}function $s(t){var n=Me(),i=n.queue;if(i===null)throw Error(E(311));i.lastRenderedReducer=t;var r=Y,s=r.baseQueue,o=i.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}r.baseQueue=s=o,i.pending=null}if(s!==null){o=s.next,r=r.baseState;var a=l=null,c=null,d=o;do{var u=d.lane;if((Xt&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var h={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=h,l=r):c=c.next=h,q.lanes|=u,Kt|=u}d=d.next}while(d!==null&&d!==o);c===null?l=r:c.next=a,_e(r,n.memoizedState)||(ge=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=c,i.lastRenderedState=r}if(t=i.interleaved,t!==null){s=t;do o=s.lane,q.lanes|=o,Kt|=o,s=s.next;while(s!==t)}else s===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Gs(t){var n=Me(),i=n.queue;if(i===null)throw Error(E(311));i.lastRenderedReducer=t;var r=i.dispatch,s=i.pending,o=n.memoizedState;if(s!==null){i.pending=null;var l=s=s.next;do o=t(o,l.action),l=l.next;while(l!==s);_e(o,n.memoizedState)||(ge=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),i.lastRenderedState=o}return[o,r]}function wu(){}function Su(t,n){var i=q,r=Me(),s=n(),o=!_e(r.memoizedState,s);if(o&&(r.memoizedState=s,ge=!0),r=r.queue,$l(ku.bind(null,i,r,t),[t]),r.getSnapshot!==n||o||ne!==null&&ne.memoizedState.tag&1){if(i.flags|=2048,Ci(9,Cu.bind(null,i,r,s,n),void 0,null),ie===null)throw Error(E(349));Xt&30||Eu(i,n,s)}return s}function Eu(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function Cu(t,n,i,r){n.value=i,n.getSnapshot=r,Tu(n)&&Pu(t)}function ku(t,n,i){return i(function(){Tu(n)&&Pu(t)})}function Tu(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!_e(t,i)}catch{return!0}}function Pu(t){var n=ot(t,1);n!==null&&ze(n,t,1,-1)}function ic(t){var n=Ve();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:t},n.queue=t,t=t.dispatch=hf.bind(null,q,t),[n.memoizedState,t]}function Ci(t,n,i,r){return t={tag:t,create:n,destroy:i,deps:r,next:null},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.lastEffect=t.next=t):(i=n.lastEffect,i===null?n.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,n.lastEffect=t)),t}function Iu(){return Me().memoizedState}function pr(t,n,i,r){var s=Ve();q.flags|=t,s.memoizedState=Ci(1|n,i,void 0,r===void 0?null:r)}function ls(t,n,i,r){var s=Me();r=r===void 0?null:r;var o=void 0;if(Y!==null){var l=Y.memoizedState;if(o=l.destroy,r!==null&&ql(r,l.deps)){s.memoizedState=Ci(n,i,o,r);return}}q.flags|=t,s.memoizedState=Ci(1|n,i,o,r)}function rc(t,n){return pr(8390656,8,t,n)}function $l(t,n){return ls(2048,8,t,n)}function Du(t,n){return ls(4,2,t,n)}function Au(t,n){return ls(4,4,t,n)}function Ou(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Nu(t,n,i){return i=i!=null?i.concat([t]):null,ls(4,4,Ou.bind(null,n,t),i)}function Gl(){}function Ru(t,n){var i=Me();n=n===void 0?null:n;var r=i.memoizedState;return r!==null&&n!==null&&ql(n,r[1])?r[0]:(i.memoizedState=[t,n],t)}function Mu(t,n){var i=Me();n=n===void 0?null:n;var r=i.memoizedState;return r!==null&&n!==null&&ql(n,r[1])?r[0]:(t=t(),i.memoizedState=[t,n],t)}function Lu(t,n,i){return Xt&21?(_e(i,n)||(i=Ud(),q.lanes|=i,Kt|=i,t.baseState=!0),n):(t.baseState&&(t.baseState=!1,ge=!0),t.memoizedState=i)}function df(t,n){var i=B;B=i!==0&&4>i?i:4,t(!0);var r=Vs.transition;Vs.transition={};try{t(!1),n()}finally{B=i,Vs.transition=r}}function Bu(){return Me().memoizedState}function uf(t,n,i){var r=kt(t);if(i={lane:r,action:i,hasEagerState:!1,eagerState:null,next:null},Fu(t))Wu(n,i);else if(i=vu(t,n,i,r),i!==null){var s=pe();ze(i,t,r,s),Ju(i,n,r)}}function hf(t,n,i){var r=kt(t),s={lane:r,action:i,hasEagerState:!1,eagerState:null,next:null};if(Fu(t))Wu(n,s);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,i);if(s.hasEagerState=!0,s.eagerState=a,_e(a,l)){var c=n.interleaved;c===null?(s.next=s,Wl(n)):(s.next=c.next,c.next=s),n.interleaved=s;return}}catch{}finally{}i=vu(t,n,s,r),i!==null&&(s=pe(),ze(i,t,r,s),Ju(i,n,r))}}function Fu(t){var n=t.alternate;return t===q||n!==null&&n===q}function Wu(t,n){si=Jr=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Ju(t,n,i){if(i&4194240){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,Cl(t,i)}}var Ur={readContext:Re,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},pf={readContext:Re,useCallback:function(t,n){return Ve().memoizedState=[t,n===void 0?null:n],t},useContext:Re,useEffect:rc,useImperativeHandle:function(t,n,i){return i=i!=null?i.concat([t]):null,pr(4194308,4,Ou.bind(null,n,t),i)},useLayoutEffect:function(t,n){return pr(4194308,4,t,n)},useInsertionEffect:function(t,n){return pr(4,2,t,n)},useMemo:function(t,n){var i=Ve();return n=n===void 0?null:n,t=t(),i.memoizedState=[t,n],t},useReducer:function(t,n,i){var r=Ve();return n=i!==void 0?i(n):n,r.memoizedState=r.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},r.queue=t,t=t.dispatch=uf.bind(null,q,t),[r.memoizedState,t]},useRef:function(t){var n=Ve();return t={current:t},n.memoizedState=t},useState:ic,useDebugValue:Gl,useDeferredValue:function(t){return Ve().memoizedState=t},useTransition:function(){var t=ic(!1),n=t[0];return t=df.bind(null,t[1]),Ve().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,i){var r=q,s=Ve();if(z){if(i===void 0)throw Error(E(407));i=i()}else{if(i=n(),ie===null)throw Error(E(349));Xt&30||Eu(r,n,i)}s.memoizedState=i;var o={value:i,getSnapshot:n};return s.queue=o,rc(ku.bind(null,r,o,t),[t]),r.flags|=2048,Ci(9,Cu.bind(null,r,o,i,n),void 0,null),i},useId:function(){var t=Ve(),n=ie.identifierPrefix;if(z){var i=tt,r=et;i=(r&~(1<<32-Ue(r)-1)).toString(32)+i,n=":"+n+"R"+i,i=Si++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=cf++,n=":"+n+"r"+i.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},mf={readContext:Re,useCallback:Ru,useContext:Re,useEffect:$l,useImperativeHandle:Nu,useInsertionEffect:Du,useLayoutEffect:Au,useMemo:Mu,useReducer:$s,useRef:Iu,useState:function(){return $s(Ei)},useDebugValue:Gl,useDeferredValue:function(t){var n=Me();return Lu(n,Y.memoizedState,t)},useTransition:function(){var t=$s(Ei)[0],n=Me().memoizedState;return[t,n]},useMutableSource:wu,useSyncExternalStore:Su,useId:Bu,unstable_isNewReconciler:!1},ff={readContext:Re,useCallback:Ru,useContext:Re,useEffect:$l,useImperativeHandle:Nu,useInsertionEffect:Du,useLayoutEffect:Au,useMemo:Mu,useReducer:Gs,useRef:Iu,useState:function(){return Gs(Ei)},useDebugValue:Gl,useDeferredValue:function(t){var n=Me();return Y===null?n.memoizedState=t:Lu(n,Y.memoizedState,t)},useTransition:function(){var t=Gs(Ei)[0],n=Me().memoizedState;return[t,n]},useMutableSource:wu,useSyncExternalStore:Su,useId:Bu,unstable_isNewReconciler:!1};function Fe(t,n){if(t&&t.defaultProps){n=H({},n),t=t.defaultProps;for(var i in t)n[i]===void 0&&(n[i]=t[i]);return n}return n}function Bo(t,n,i,r){n=t.memoizedState,i=i(r,n),i=i==null?n:H({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var as={isMounted:function(t){return(t=t._reactInternals)?en(t)===t:!1},enqueueSetState:function(t,n,i){t=t._reactInternals;var r=pe(),s=kt(t),o=it(r,s);o.payload=n,i!=null&&(o.callback=i),n=Et(t,o,s),n!==null&&(ze(n,t,s,r),ur(n,t,s))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var r=pe(),s=kt(t),o=it(r,s);o.tag=1,o.payload=n,i!=null&&(o.callback=i),n=Et(t,o,s),n!==null&&(ze(n,t,s,r),ur(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=pe(),r=kt(t),s=it(i,r);s.tag=2,n!=null&&(s.callback=n),n=Et(t,s,r),n!==null&&(ze(n,t,r,i),ur(n,t,r))}};function sc(t,n,i,r,s,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!gi(i,r)||!gi(s,o):!0}function Uu(t,n,i){var r=!1,s=Dt,o=n.contextType;return typeof o=="object"&&o!==null?o=Re(o):(s=ve(n)?$t:de.current,r=n.contextTypes,o=(r=r!=null)?kn(t,s):Dt),n=new n(i,o),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=as,t.stateNode=n,n._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=o),n}function oc(t,n,i,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,r),n.state!==t&&as.enqueueReplaceState(n,n.state,null)}function Fo(t,n,i,r){var s=t.stateNode;s.props=i,s.state=t.memoizedState,s.refs={},Jl(t);var o=n.contextType;typeof o=="object"&&o!==null?s.context=Re(o):(o=ve(n)?$t:de.current,s.context=kn(t,o)),s.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Bo(t,n,o,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&as.enqueueReplaceState(s,s.state,null),Fr(t,i,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Dn(t,n){try{var i="",r=n;do i+=zp(r),r=r.return;while(r);var s=i}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:n,stack:s,digest:null}}function Xs(t,n,i){return{value:t,source:null,stack:i??null,digest:n??null}}function Wo(t,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var xf=typeof WeakMap=="function"?WeakMap:Map;function zu(t,n,i){i=it(-1,i),i.tag=3,i.payload={element:null};var r=n.value;return i.callback=function(){_r||(_r=!0,Xo=r),Wo(t,n)},i}function _u(t,n,i){i=it(-1,i),i.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;i.payload=function(){return r(s)},i.callback=function(){Wo(t,n)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(i.callback=function(){Wo(t,n),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),i}function lc(t,n,i){var r=t.pingCache;if(r===null){r=t.pingCache=new xf;var s=new Set;r.set(n,s)}else s=r.get(n),s===void 0&&(s=new Set,r.set(n,s));s.has(i)||(s.add(i),t=Df.bind(null,t,n,i),n.then(t,t))}function ac(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function cc(t,n,i,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===n?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=it(-1,1),n.tag=2,Et(i,n,1))),i.lanes|=1),t)}var gf=ct.ReactCurrentOwner,ge=!1;function ue(t,n,i,r){n.child=t===null?ju(n,null,i,r):Pn(n,t.child,i,r)}function dc(t,n,i,r,s){i=i.render;var o=n.ref;return Sn(n,s),r=Hl(t,n,i,r,o,s),i=Vl(),t!==null&&!ge?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s,lt(t,n,s)):(z&&i&&Nl(n),n.flags|=1,ue(t,n,r,s),n.child)}function uc(t,n,i,r,s){if(t===null){var o=i.type;return typeof o=="function"&&!na(o)&&o.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=o,qu(t,n,o,r,s)):(t=gr(i.type,null,r,n,n.mode,s),t.ref=n.ref,t.return=n,n.child=t)}if(o=t.child,!(t.lanes&s)){var l=o.memoizedProps;if(i=i.compare,i=i!==null?i:gi,i(l,r)&&t.ref===n.ref)return lt(t,n,s)}return n.flags|=1,t=Tt(o,r),t.ref=n.ref,t.return=n,n.child=t}function qu(t,n,i,r,s){if(t!==null){var o=t.memoizedProps;if(gi(o,r)&&t.ref===n.ref)if(ge=!1,n.pendingProps=r=o,(t.lanes&s)!==0)t.flags&131072&&(ge=!0);else return n.lanes=t.lanes,lt(t,n,s)}return Jo(t,n,i,r,s)}function Hu(t,n,i){var r=n.pendingProps,s=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(jn,Se),Se|=i;else{if(!(i&1073741824))return t=o!==null?o.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,F(jn,Se),Se|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:i,F(jn,Se),Se|=r}else o!==null?(r=o.baseLanes|i,n.memoizedState=null):r=i,F(jn,Se),Se|=r;return ue(t,n,s,i),n.child}function Vu(t,n){var i=n.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Jo(t,n,i,r,s){var o=ve(i)?$t:de.current;return o=kn(n,o),Sn(n,s),i=Hl(t,n,i,r,o,s),r=Vl(),t!==null&&!ge?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s,lt(t,n,s)):(z&&r&&Nl(n),n.flags|=1,ue(t,n,i,s),n.child)}function hc(t,n,i,r,s){if(ve(i)){var o=!0;Nr(n)}else o=!1;if(Sn(n,s),n.stateNode===null)mr(t,n),Uu(n,i,r),Fo(n,i,r,s),r=!0;else if(t===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var c=l.context,d=i.contextType;typeof d=="object"&&d!==null?d=Re(d):(d=ve(i)?$t:de.current,d=kn(n,d));var u=i.getDerivedStateFromProps,h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==d)&&oc(n,l,r,d),pt=!1;var x=n.memoizedState;l.state=x,Fr(n,r,l,s),c=n.memoizedState,a!==r||x!==c||je.current||pt?(typeof u=="function"&&(Bo(n,i,u,r),c=n.memoizedState),(a=pt||sc(n,i,a,r,x,c,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),l.props=r,l.state=c,l.context=d,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,yu(t,n),a=n.memoizedProps,d=n.type===n.elementType?a:Fe(n.type,a),l.props=d,h=n.pendingProps,x=l.context,c=i.contextType,typeof c=="object"&&c!==null?c=Re(c):(c=ve(i)?$t:de.current,c=kn(n,c));var b=i.getDerivedStateFromProps;(u=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||x!==c)&&oc(n,l,r,c),pt=!1,x=n.memoizedState,l.state=x,Fr(n,r,l,s);var g=n.memoizedState;a!==h||x!==g||je.current||pt?(typeof b=="function"&&(Bo(n,i,b,r),g=n.memoizedState),(d=pt||sc(n,i,d,r,x,g,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,c)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),l.props=r,l.state=g,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(n.flags|=1024),r=!1)}return Uo(t,n,i,r,o,s)}function Uo(t,n,i,r,s,o){Vu(t,n);var l=(n.flags&128)!==0;if(!r&&!l)return s&&Qa(n,i,!1),lt(t,n,o);r=n.stateNode,gf.current=n;var a=l&&typeof i.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,t!==null&&l?(n.child=Pn(n,t.child,null,o),n.child=Pn(n,null,a,o)):ue(t,n,a,o),n.memoizedState=r.state,s&&Qa(n,i,!0),n.child}function $u(t){var n=t.stateNode;n.pendingContext?Ka(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Ka(t,n.context,!1),Ul(t,n.containerInfo)}function pc(t,n,i,r,s){return Tn(),Ml(s),n.flags|=256,ue(t,n,i,r),n.child}var zo={dehydrated:null,treeContext:null,retryLane:0};function _o(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gu(t,n,i){var r=n.pendingProps,s=_.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(o=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),F(_,s&1),t===null)return Mo(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(n.mode&1?t.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,t=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=us(l,r,0,null),t=Ht(t,r,i,null),o.return=n,t.return=n,o.sibling=t,n.child=o,n.child.memoizedState=_o(i),n.memoizedState=zo,t):Xl(n,l));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return jf(t,n,l,r,a,s,i);if(o){o=r.fallback,l=n.mode,s=t.child,a=s.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&n.child!==s?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=Tt(s,c),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?o=Tt(a,o):(o=Ht(o,l,i,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=t.child.memoizedState,l=l===null?_o(i):{baseLanes:l.baseLanes|i,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~i,n.memoizedState=zo,r}return o=t.child,t=o.sibling,r=Tt(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=i),r.return=n,r.sibling=null,t!==null&&(i=n.deletions,i===null?(n.deletions=[t],n.flags|=16):i.push(t)),n.child=r,n.memoizedState=null,r}function Xl(t,n){return n=us({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function tr(t,n,i,r){return r!==null&&Ml(r),Pn(n,t.child,null,i),t=Xl(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function jf(t,n,i,r,s,o,l){if(i)return n.flags&256?(n.flags&=-257,r=Xs(Error(E(422))),tr(t,n,l,r)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(o=r.fallback,s=n.mode,r=us({mode:"visible",children:r.children},s,0,null),o=Ht(o,s,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Pn(n,t.child,null,l),n.child.memoizedState=_o(l),n.memoizedState=zo,o);if(!(n.mode&1))return tr(t,n,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=Xs(o,r,void 0),tr(t,n,l,r)}if(a=(l&t.childLanes)!==0,ge||a){if(r=ie,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,ot(t,s),ze(r,t,s,-1))}return ta(),r=Xs(Error(E(421))),tr(t,n,l,r)}return s.data==="$?"?(n.flags|=128,n.child=t.child,n=Af.bind(null,t),s._reactRetry=n,null):(t=o.treeContext,Ee=St(s.nextSibling),Ce=n,z=!0,Je=null,t!==null&&(De[Ae++]=et,De[Ae++]=tt,De[Ae++]=Gt,et=t.id,tt=t.overflow,Gt=n),n=Xl(n,r.children),n.flags|=4096,n)}function mc(t,n,i){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Lo(t.return,n,i)}function Ks(t,n,i,r,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:s}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=i,o.tailMode=s)}function Xu(t,n,i){var r=n.pendingProps,s=r.revealOrder,o=r.tail;if(ue(t,n,r.children,i),r=_.current,r&2)r=r&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mc(t,i,n);else if(t.tag===19)mc(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(F(_,r),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(i=n.child,s=null;i!==null;)t=i.alternate,t!==null&&Wr(t)===null&&(s=i),i=i.sibling;i=s,i===null?(s=n.child,n.child=null):(s=i.sibling,i.sibling=null),Ks(n,!1,s,i,o);break;case"backwards":for(i=null,s=n.child,n.child=null;s!==null;){if(t=s.alternate,t!==null&&Wr(t)===null){n.child=s;break}t=s.sibling,s.sibling=i,i=s,s=t}Ks(n,!0,i,null,o);break;case"together":Ks(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function mr(t,n){!(n.mode&1)&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function lt(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Kt|=n.lanes,!(i&n.childLanes))return null;if(t!==null&&n.child!==t.child)throw Error(E(153));if(n.child!==null){for(t=n.child,i=Tt(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=Tt(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function vf(t,n,i){switch(n.tag){case 3:$u(n),Tn();break;case 5:bu(n);break;case 1:ve(n.type)&&Nr(n);break;case 4:Ul(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,s=n.memoizedProps.value;F(Lr,r._currentValue),r._currentValue=s;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(_,_.current&1),n.flags|=128,null):i&n.child.childLanes?Gu(t,n,i):(F(_,_.current&1),t=lt(t,n,i),t!==null?t.sibling:null);F(_,_.current&1);break;case 19:if(r=(i&n.childLanes)!==0,t.flags&128){if(r)return Xu(t,n,i);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),F(_,_.current),r)break;return null;case 22:case 23:return n.lanes=0,Hu(t,n,i)}return lt(t,n,i)}var Ku,qo,Qu,Yu;Ku=function(t,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};qo=function(){};Qu=function(t,n,i,r){var s=t.memoizedProps;if(s!==r){t=n.stateNode,zt(Ke.current);var o=null;switch(i){case"input":s=ho(t,s),r=ho(t,r),o=[];break;case"select":s=H({},s,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":s=fo(t,s),r=fo(t,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ar)}go(i,r);var l;i=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(l in a)a.hasOwnProperty(l)&&(i||(i={}),i[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(di.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(a=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(i||(i={}),i[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(i||(i={}),i[l]=c[l])}else i||(o||(o=[]),o.push(d,i)),i=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(di.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&W("scroll",t),o||a===c||(o=[])):(o=o||[]).push(d,c))}i&&(o=o||[]).push("style",i);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};Yu=function(t,n,i,r){i!==r&&(n.flags|=4)};function Vn(t,n){if(!z)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ae(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(n)for(var s=t.child;s!==null;)i|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)i|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=i,n}function yf(t,n,i){var r=n.pendingProps;switch(Rl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(n),null;case 1:return ve(n.type)&&Or(),ae(n),null;case 3:return r=n.stateNode,In(),J(je),J(de),_l(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zi(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Je!==null&&(Yo(Je),Je=null))),qo(t,n),ae(n),null;case 5:zl(n);var s=zt(wi.current);if(i=n.type,t!==null&&n.stateNode!=null)Qu(t,n,i,r,s),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return ae(n),null}if(t=zt(Ke.current),Zi(n)){r=n.stateNode,i=n.type;var o=n.memoizedProps;switch(r[Ge]=n,r[yi]=o,t=(n.mode&1)!==0,i){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(s=0;s<Yn.length;s++)W(Yn[s],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Sa(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Ca(r,o),W("invalid",r)}go(i,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,a,t),s=["children",""+a]):di.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(i){case"input":qi(r),Ea(r,o,!0);break;case"textarea":qi(r),ka(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ar)}r=s,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kd(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=l.createElement(i,{is:r.is}):(t=l.createElement(i),i==="select"&&(l=t,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):t=l.createElementNS(t,i),t[Ge]=n,t[yi]=r,Ku(t,n,!1,!1),n.stateNode=t;e:{switch(l=jo(i,r),i){case"dialog":W("cancel",t),W("close",t),s=r;break;case"iframe":case"object":case"embed":W("load",t),s=r;break;case"video":case"audio":for(s=0;s<Yn.length;s++)W(Yn[s],t);s=r;break;case"source":W("error",t),s=r;break;case"img":case"image":case"link":W("error",t),W("load",t),s=r;break;case"details":W("toggle",t),s=r;break;case"input":Sa(t,r),s=ho(t,r),W("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=H({},r,{value:void 0}),W("invalid",t);break;case"textarea":Ca(t,r),s=fo(t,r),W("invalid",t);break;default:s=r}go(i,s),a=s;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?Id(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Td(t,c)):o==="children"?typeof c=="string"?(i!=="textarea"||c!=="")&&ui(t,c):typeof c=="number"&&ui(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(di.hasOwnProperty(o)?c!=null&&o==="onScroll"&&W("scroll",t):c!=null&&vl(t,o,c,l))}switch(i){case"input":qi(t),Ea(t,r,!1);break;case"textarea":qi(t),ka(t);break;case"option":r.value!=null&&t.setAttribute("value",""+It(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?vn(t,!!r.multiple,o,!1):r.defaultValue!=null&&vn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ar)}switch(i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ae(n),null;case 6:if(t&&n.stateNode!=null)Yu(t,n,t.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(i=zt(wi.current),zt(Ke.current),Zi(n)){if(r=n.stateNode,i=n.memoizedProps,r[Ge]=n,(o=r.nodeValue!==i)&&(t=Ce,t!==null))switch(t.tag){case 3:Yi(r.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,i,(t.mode&1)!==0)}o&&(n.flags|=4)}else r=(i.nodeType===9?i:i.ownerDocument).createTextNode(r),r[Ge]=n,n.stateNode=r}return ae(n),null;case 13:if(J(_),r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(z&&Ee!==null&&n.mode&1&&!(n.flags&128))xu(),Tn(),n.flags|=98560,o=!1;else if(o=Zi(n),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(E(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[Ge]=n}else Tn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ae(n),o=!1}else Je!==null&&(Yo(Je),Je=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(t===null||_.current&1?Z===0&&(Z=3):ta())),n.updateQueue!==null&&(n.flags|=4),ae(n),null);case 4:return In(),qo(t,n),t===null&&ji(n.stateNode.containerInfo),ae(n),null;case 10:return Fl(n.type._context),ae(n),null;case 17:return ve(n.type)&&Or(),ae(n),null;case 19:if(J(_),o=n.memoizedState,o===null)return ae(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)Vn(o,!1);else{if(Z!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(l=Wr(t),l!==null){for(n.flags|=128,Vn(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=i,i=n.child;i!==null;)o=i,t=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return F(_,_.current&1|2),n.child}t=t.sibling}o.tail!==null&&X()>An&&(n.flags|=128,r=!0,Vn(o,!1),n.lanes=4194304)}else{if(!r)if(t=Wr(l),t!==null){if(n.flags|=128,r=!0,i=t.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Vn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!z)return ae(n),null}else 2*X()-o.renderingStartTime>An&&i!==1073741824&&(n.flags|=128,r=!0,Vn(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(i=o.last,i!==null?i.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=X(),n.sibling=null,i=_.current,F(_,r?i&1|2:i&1),n):(ae(n),null);case 22:case 23:return ea(),r=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Se&1073741824&&(ae(n),n.subtreeFlags&6&&(n.flags|=8192)):ae(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function bf(t,n){switch(Rl(n),n.tag){case 1:return ve(n.type)&&Or(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return In(),J(je),J(de),_l(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 5:return zl(n),null;case 13:if(J(_),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(E(340));Tn()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(_),null;case 4:return In(),null;case 10:return Fl(n.type._context),null;case 22:case 23:return ea(),null;case 24:return null;default:return null}}var nr=!1,ce=!1,wf=typeof WeakSet=="function"?WeakSet:Set,T=null;function gn(t,n){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(r){$(t,n,r)}else i.current=null}function Ho(t,n,i){try{i()}catch(r){$(t,n,r)}}var fc=!1;function Sf(t,n){if(Po=Pr,t=iu(),Ol(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{i.nodeType,o.nodeType}catch{i=null;break e}var l=0,a=-1,c=-1,d=0,u=0,h=t,x=null;t:for(;;){for(var b;h!==i||s!==0&&h.nodeType!==3||(a=l+s),h!==o||r!==0&&h.nodeType!==3||(c=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(b=h.firstChild)!==null;)x=h,h=b;for(;;){if(h===t)break t;if(x===i&&++d===s&&(a=l),x===o&&++u===r&&(c=l),(b=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=b}i=a===-1||c===-1?null:{start:a,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Io={focusedElem:t,selectionRange:i},Pr=!1,T=n;T!==null;)if(n=T,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,T=t;else for(;T!==null;){n=T;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var j=g.memoizedProps,v=g.memoizedState,m=n.stateNode,p=m.getSnapshotBeforeUpdate(n.elementType===n.type?j:Fe(n.type,j),v);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){$(n,n.return,w)}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}return g=fc,fc=!1,g}function oi(t,n,i){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var o=s.destroy;s.destroy=void 0,o!==void 0&&Ho(n,i,o)}s=s.next}while(s!==r)}}function cs(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var r=i.create;i.destroy=r()}i=i.next}while(i!==n)}}function Vo(t){var n=t.ref;if(n!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof n=="function"?n(t):n.current=t}}function Zu(t){var n=t.alternate;n!==null&&(t.alternate=null,Zu(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[Ge],delete n[yi],delete n[Oo],delete n[sf],delete n[of])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function eh(t){return t.tag===5||t.tag===3||t.tag===4}function xc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $o(t,n,i){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(t,n):i.insertBefore(t,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(t,i)):(n=i,n.appendChild(t)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Ar));else if(r!==4&&(t=t.child,t!==null))for($o(t,n,i),t=t.sibling;t!==null;)$o(t,n,i),t=t.sibling}function Go(t,n,i){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Go(t,n,i),t=t.sibling;t!==null;)Go(t,n,i),t=t.sibling}var re=null,We=!1;function dt(t,n,i){for(i=i.child;i!==null;)th(t,n,i),i=i.sibling}function th(t,n,i){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(ts,i)}catch{}switch(i.tag){case 5:ce||gn(i,n);case 6:var r=re,s=We;re=null,dt(t,n,i),re=r,We=s,re!==null&&(We?(t=re,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):re.removeChild(i.stateNode));break;case 18:re!==null&&(We?(t=re,i=i.stateNode,t.nodeType===8?_s(t.parentNode,i):t.nodeType===1&&_s(t,i),fi(t)):_s(re,i.stateNode));break;case 4:r=re,s=We,re=i.stateNode.containerInfo,We=!0,dt(t,n,i),re=r,We=s;break;case 0:case 11:case 14:case 15:if(!ce&&(r=i.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ho(i,n,l),s=s.next}while(s!==r)}dt(t,n,i);break;case 1:if(!ce&&(gn(i,n),r=i.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=i.memoizedProps,r.state=i.memoizedState,r.componentWillUnmount()}catch(a){$(i,n,a)}dt(t,n,i);break;case 21:dt(t,n,i);break;case 22:i.mode&1?(ce=(r=ce)||i.memoizedState!==null,dt(t,n,i),ce=r):dt(t,n,i);break;default:dt(t,n,i)}}function gc(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new wf),n.forEach(function(r){var s=Of.bind(null,t,r);i.has(r)||(i.add(r),r.then(s,s))})}}function Be(t,n){var i=n.deletions;if(i!==null)for(var r=0;r<i.length;r++){var s=i[r];try{var o=t,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,We=!1;break e;case 3:re=a.stateNode.containerInfo,We=!0;break e;case 4:re=a.stateNode.containerInfo,We=!0;break e}a=a.return}if(re===null)throw Error(E(160));th(o,l,s),re=null,We=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){$(s,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)nh(n,t),n=n.sibling}function nh(t,n){var i=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Be(n,t),He(t),r&4){try{oi(3,t,t.return),cs(3,t)}catch(j){$(t,t.return,j)}try{oi(5,t,t.return)}catch(j){$(t,t.return,j)}}break;case 1:Be(n,t),He(t),r&512&&i!==null&&gn(i,i.return);break;case 5:if(Be(n,t),He(t),r&512&&i!==null&&gn(i,i.return),t.flags&32){var s=t.stateNode;try{ui(s,"")}catch(j){$(t,t.return,j)}}if(r&4&&(s=t.stateNode,s!=null)){var o=t.memoizedProps,l=i!==null?i.memoizedProps:o,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ed(s,o),jo(a,l);var d=jo(a,o);for(l=0;l<c.length;l+=2){var u=c[l],h=c[l+1];u==="style"?Id(s,h):u==="dangerouslySetInnerHTML"?Td(s,h):u==="children"?ui(s,h):vl(s,u,h,d)}switch(a){case"input":po(s,o);break;case"textarea":Cd(s,o);break;case"select":var x=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?vn(s,!!o.multiple,b,!1):x!==!!o.multiple&&(o.defaultValue!=null?vn(s,!!o.multiple,o.defaultValue,!0):vn(s,!!o.multiple,o.multiple?[]:"",!1))}s[yi]=o}catch(j){$(t,t.return,j)}}break;case 6:if(Be(n,t),He(t),r&4){if(t.stateNode===null)throw Error(E(162));s=t.stateNode,o=t.memoizedProps;try{s.nodeValue=o}catch(j){$(t,t.return,j)}}break;case 3:if(Be(n,t),He(t),r&4&&i!==null&&i.memoizedState.isDehydrated)try{fi(n.containerInfo)}catch(j){$(t,t.return,j)}break;case 4:Be(n,t),He(t);break;case 13:Be(n,t),He(t),s=t.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(Yl=X())),r&4&&gc(t);break;case 22:if(u=i!==null&&i.memoizedState!==null,t.mode&1?(ce=(d=ce)||u,Be(n,t),ce=d):Be(n,t),He(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(T=t,u=t.child;u!==null;){for(h=T=u;T!==null;){switch(x=T,b=x.child,x.tag){case 0:case 11:case 14:case 15:oi(4,x,x.return);break;case 1:gn(x,x.return);var g=x.stateNode;if(typeof g.componentWillUnmount=="function"){r=x,i=x.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(j){$(r,i,j)}}break;case 5:gn(x,x.return);break;case 22:if(x.memoizedState!==null){vc(h);continue}}b!==null?(b.return=x,T=b):vc(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{s=h.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Pd("display",l))}catch(j){$(t,t.return,j)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(j){$(t,t.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Be(n,t),He(t),r&4&&gc(t);break;case 21:break;default:Be(n,t),He(t)}}function He(t){var n=t.flags;if(n&2){try{e:{for(var i=t.return;i!==null;){if(eh(i)){var r=i;break e}i=i.return}throw Error(E(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ui(s,""),r.flags&=-33);var o=xc(t);Go(t,o,s);break;case 3:case 4:var l=r.stateNode.containerInfo,a=xc(t);$o(t,a,l);break;default:throw Error(E(161))}}catch(c){$(t,t.return,c)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ef(t,n,i){T=t,ih(t)}function ih(t,n,i){for(var r=(t.mode&1)!==0;T!==null;){var s=T,o=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||nr;if(!l){var a=s.alternate,c=a!==null&&a.memoizedState!==null||ce;a=nr;var d=ce;if(nr=l,(ce=c)&&!d)for(T=s;T!==null;)l=T,c=l.child,l.tag===22&&l.memoizedState!==null?yc(s):c!==null?(c.return=l,T=c):yc(s);for(;o!==null;)T=o,ih(o),o=o.sibling;T=s,nr=a,ce=d}jc(t)}else s.subtreeFlags&8772&&o!==null?(o.return=s,T=o):jc(t)}}function jc(t){for(;T!==null;){var n=T;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ce||cs(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ce)if(i===null)r.componentDidMount();else{var s=n.elementType===n.type?i.memoizedProps:Fe(n.type,i.memoizedProps);r.componentDidUpdate(s,i.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&nc(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}nc(n,l,i)}break;case 5:var a=n.stateNode;if(i===null&&n.flags&4){i=a;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&i.focus();break;case"img":c.src&&(i.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&fi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ce||n.flags&512&&Vo(n)}catch(x){$(n,n.return,x)}}if(n===t){T=null;break}if(i=n.sibling,i!==null){i.return=n.return,T=i;break}T=n.return}}function vc(t){for(;T!==null;){var n=T;if(n===t){T=null;break}var i=n.sibling;if(i!==null){i.return=n.return,T=i;break}T=n.return}}function yc(t){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{cs(4,n)}catch(c){$(n,i,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var s=n.return;try{r.componentDidMount()}catch(c){$(n,s,c)}}var o=n.return;try{Vo(n)}catch(c){$(n,o,c)}break;case 5:var l=n.return;try{Vo(n)}catch(c){$(n,l,c)}}}catch(c){$(n,n.return,c)}if(n===t){T=null;break}var a=n.sibling;if(a!==null){a.return=n.return,T=a;break}T=n.return}}var Cf=Math.ceil,zr=ct.ReactCurrentDispatcher,Kl=ct.ReactCurrentOwner,Ne=ct.ReactCurrentBatchConfig,L=0,ie=null,K=null,se=0,Se=0,jn=Ot(0),Z=0,ki=null,Kt=0,ds=0,Ql=0,li=null,xe=null,Yl=0,An=1/0,Ye=null,_r=!1,Xo=null,Ct=null,ir=!1,jt=null,qr=0,ai=0,Ko=null,fr=-1,xr=0;function pe(){return L&6?X():fr!==-1?fr:fr=X()}function kt(t){return t.mode&1?L&2&&se!==0?se&-se:af.transition!==null?(xr===0&&(xr=Ud()),xr):(t=B,t!==0||(t=window.event,t=t===void 0?16:Gd(t.type)),t):1}function ze(t,n,i,r){if(50<ai)throw ai=0,Ko=null,Error(E(185));Ai(t,i,r),(!(L&2)||t!==ie)&&(t===ie&&(!(L&2)&&(ds|=i),Z===4&&ft(t,se)),ye(t,r),i===1&&L===0&&!(n.mode&1)&&(An=X()+500,os&&Nt()))}function ye(t,n){var i=t.callbackNode;lm(t,n);var r=Tr(t,t===ie?se:0);if(r===0)i!==null&&Ia(i),t.callbackNode=null,t.callbackPriority=0;else if(n=r&-r,t.callbackPriority!==n){if(i!=null&&Ia(i),n===1)t.tag===0?lf(bc.bind(null,t)):pu(bc.bind(null,t)),nf(function(){!(L&6)&&Nt()}),i=null;else{switch(zd(r)){case 1:i=El;break;case 4:i=Wd;break;case 16:i=kr;break;case 536870912:i=Jd;break;default:i=kr}i=uh(i,rh.bind(null,t))}t.callbackPriority=n,t.callbackNode=i}}function rh(t,n){if(fr=-1,xr=0,L&6)throw Error(E(327));var i=t.callbackNode;if(En()&&t.callbackNode!==i)return null;var r=Tr(t,t===ie?se:0);if(r===0)return null;if(r&30||r&t.expiredLanes||n)n=Hr(t,r);else{n=r;var s=L;L|=2;var o=oh();(ie!==t||se!==n)&&(Ye=null,An=X()+500,qt(t,n));do try{Pf();break}catch(a){sh(t,a)}while(!0);Bl(),zr.current=o,L=s,K!==null?n=0:(ie=null,se=0,n=Z)}if(n!==0){if(n===2&&(s=So(t),s!==0&&(r=s,n=Qo(t,s))),n===1)throw i=ki,qt(t,0),ft(t,r),ye(t,X()),i;if(n===6)ft(t,r);else{if(s=t.current.alternate,!(r&30)&&!kf(s)&&(n=Hr(t,r),n===2&&(o=So(t),o!==0&&(r=o,n=Qo(t,o))),n===1))throw i=ki,qt(t,0),ft(t,r),ye(t,X()),i;switch(t.finishedWork=s,t.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:Wt(t,xe,Ye);break;case 3:if(ft(t,r),(r&130023424)===r&&(n=Yl+500-X(),10<n)){if(Tr(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){pe(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Ao(Wt.bind(null,t,xe,Ye),n);break}Wt(t,xe,Ye);break;case 4:if(ft(t,r),(r&4194240)===r)break;for(n=t.eventTimes,s=-1;0<r;){var l=31-Ue(r);o=1<<l,l=n[l],l>s&&(s=l),r&=~o}if(r=s,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cf(r/1960))-r,10<r){t.timeoutHandle=Ao(Wt.bind(null,t,xe,Ye),r);break}Wt(t,xe,Ye);break;case 5:Wt(t,xe,Ye);break;default:throw Error(E(329))}}}return ye(t,X()),t.callbackNode===i?rh.bind(null,t):null}function Qo(t,n){var i=li;return t.current.memoizedState.isDehydrated&&(qt(t,n).flags|=256),t=Hr(t,n),t!==2&&(n=xe,xe=i,n!==null&&Yo(n)),t}function Yo(t){xe===null?xe=t:xe.push.apply(xe,t)}function kf(t){for(var n=t;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var r=0;r<i.length;r++){var s=i[r],o=s.getSnapshot;s=s.value;try{if(!_e(o(),s))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ft(t,n){for(n&=~Ql,n&=~ds,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var i=31-Ue(n),r=1<<i;t[i]=-1,n&=~r}}function bc(t){if(L&6)throw Error(E(327));En();var n=Tr(t,0);if(!(n&1))return ye(t,X()),null;var i=Hr(t,n);if(t.tag!==0&&i===2){var r=So(t);r!==0&&(n=r,i=Qo(t,r))}if(i===1)throw i=ki,qt(t,0),ft(t,n),ye(t,X()),i;if(i===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Wt(t,xe,Ye),ye(t,X()),null}function Zl(t,n){var i=L;L|=1;try{return t(n)}finally{L=i,L===0&&(An=X()+500,os&&Nt())}}function Qt(t){jt!==null&&jt.tag===0&&!(L&6)&&En();var n=L;L|=1;var i=Ne.transition,r=B;try{if(Ne.transition=null,B=1,t)return t()}finally{B=r,Ne.transition=i,L=n,!(L&6)&&Nt()}}function ea(){Se=jn.current,J(jn)}function qt(t,n){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,tf(i)),K!==null)for(i=K.return;i!==null;){var r=i;switch(Rl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Or();break;case 3:In(),J(je),J(de),_l();break;case 5:zl(r);break;case 4:In();break;case 13:J(_);break;case 19:J(_);break;case 10:Fl(r.type._context);break;case 22:case 23:ea()}i=i.return}if(ie=t,K=t=Tt(t.current,null),se=Se=n,Z=0,ki=null,Ql=ds=Kt=0,xe=li=null,Ut!==null){for(n=0;n<Ut.length;n++)if(i=Ut[n],r=i.interleaved,r!==null){i.interleaved=null;var s=r.next,o=i.pending;if(o!==null){var l=o.next;o.next=s,r.next=l}i.pending=r}Ut=null}return t}function sh(t,n){do{var i=K;try{if(Bl(),hr.current=Ur,Jr){for(var r=q.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Jr=!1}if(Xt=0,ne=Y=q=null,si=!1,Si=0,Kl.current=null,i===null||i.return===null){Z=1,ki=n,K=null;break}e:{var o=t,l=i.return,a=i,c=n;if(n=se,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var x=u.alternate;x?(u.updateQueue=x.updateQueue,u.memoizedState=x.memoizedState,u.lanes=x.lanes):(u.updateQueue=null,u.memoizedState=null)}var b=ac(l);if(b!==null){b.flags&=-257,cc(b,l,a,o,n),b.mode&1&&lc(o,d,n),n=b,c=d;var g=n.updateQueue;if(g===null){var j=new Set;j.add(c),n.updateQueue=j}else g.add(c);break e}else{if(!(n&1)){lc(o,d,n),ta();break e}c=Error(E(426))}}else if(z&&a.mode&1){var v=ac(l);if(v!==null){!(v.flags&65536)&&(v.flags|=256),cc(v,l,a,o,n),Ml(Dn(c,a));break e}}o=c=Dn(c,a),Z!==4&&(Z=2),li===null?li=[o]:li.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var m=zu(o,c,n);tc(o,m);break e;case 1:a=c;var p=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ct===null||!Ct.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=_u(o,a,n);tc(o,w);break e}}o=o.return}while(o!==null)}ah(i)}catch(C){n=C,K===i&&i!==null&&(K=i=i.return);continue}break}while(!0)}function oh(){var t=zr.current;return zr.current=Ur,t===null?Ur:t}function ta(){(Z===0||Z===3||Z===2)&&(Z=4),ie===null||!(Kt&268435455)&&!(ds&268435455)||ft(ie,se)}function Hr(t,n){var i=L;L|=2;var r=oh();(ie!==t||se!==n)&&(Ye=null,qt(t,n));do try{Tf();break}catch(s){sh(t,s)}while(!0);if(Bl(),L=i,zr.current=r,K!==null)throw Error(E(261));return ie=null,se=0,Z}function Tf(){for(;K!==null;)lh(K)}function Pf(){for(;K!==null&&!Yp();)lh(K)}function lh(t){var n=dh(t.alternate,t,Se);t.memoizedProps=t.pendingProps,n===null?ah(t):K=n,Kl.current=null}function ah(t){var n=t;do{var i=n.alternate;if(t=n.return,n.flags&32768){if(i=bf(i,n),i!==null){i.flags&=32767,K=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Z=6,K=null;return}}else if(i=yf(i,n,Se),i!==null){K=i;return}if(n=n.sibling,n!==null){K=n;return}K=n=t}while(n!==null);Z===0&&(Z=5)}function Wt(t,n,i){var r=B,s=Ne.transition;try{Ne.transition=null,B=1,If(t,n,i,r)}finally{Ne.transition=s,B=r}return null}function If(t,n,i,r){do En();while(jt!==null);if(L&6)throw Error(E(327));i=t.finishedWork;var s=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var o=i.lanes|i.childLanes;if(am(t,o),t===ie&&(K=ie=null,se=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||ir||(ir=!0,uh(kr,function(){return En(),null})),o=(i.flags&15990)!==0,i.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var l=B;B=1;var a=L;L|=4,Kl.current=null,Sf(t,i),nh(i,t),Gm(Io),Pr=!!Po,Io=Po=null,t.current=i,Ef(i),Zp(),L=a,B=l,Ne.transition=o}else t.current=i;if(ir&&(ir=!1,jt=t,qr=s),o=t.pendingLanes,o===0&&(Ct=null),nm(i.stateNode),ye(t,X()),n!==null)for(r=t.onRecoverableError,i=0;i<n.length;i++)s=n[i],r(s.value,{componentStack:s.stack,digest:s.digest});if(_r)throw _r=!1,t=Xo,Xo=null,t;return qr&1&&t.tag!==0&&En(),o=t.pendingLanes,o&1?t===Ko?ai++:(ai=0,Ko=t):ai=0,Nt(),null}function En(){if(jt!==null){var t=zd(qr),n=Ne.transition,i=B;try{if(Ne.transition=null,B=16>t?16:t,jt===null)var r=!1;else{if(t=jt,jt=null,qr=0,L&6)throw Error(E(331));var s=L;for(L|=4,T=t.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(T=d;T!==null;){var u=T;switch(u.tag){case 0:case 11:case 15:oi(8,u,o)}var h=u.child;if(h!==null)h.return=u,T=h;else for(;T!==null;){u=T;var x=u.sibling,b=u.return;if(Zu(u),u===d){T=null;break}if(x!==null){x.return=b,T=x;break}T=b}}}var g=o.alternate;if(g!==null){var j=g.child;if(j!==null){g.child=null;do{var v=j.sibling;j.sibling=null,j=v}while(j!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:oi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,T=m;break e}T=o.return}}var p=t.current;for(T=p;T!==null;){l=T;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,T=f;else e:for(l=p;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cs(9,a)}}catch(C){$(a,a.return,C)}if(a===l){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(L=s,Nt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(ts,t)}catch{}r=!0}return r}finally{B=i,Ne.transition=n}}return!1}function wc(t,n,i){n=Dn(i,n),n=zu(t,n,1),t=Et(t,n,1),n=pe(),t!==null&&(Ai(t,1,n),ye(t,n))}function $(t,n,i){if(t.tag===3)wc(t,t,i);else for(;n!==null;){if(n.tag===3){wc(n,t,i);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){t=Dn(i,t),t=_u(n,t,1),n=Et(n,t,1),t=pe(),n!==null&&(Ai(n,1,t),ye(n,t));break}}n=n.return}}function Df(t,n,i){var r=t.pingCache;r!==null&&r.delete(n),n=pe(),t.pingedLanes|=t.suspendedLanes&i,ie===t&&(se&i)===i&&(Z===4||Z===3&&(se&130023424)===se&&500>X()-Yl?qt(t,0):Ql|=i),ye(t,n)}function ch(t,n){n===0&&(t.mode&1?(n=$i,$i<<=1,!($i&130023424)&&($i=4194304)):n=1);var i=pe();t=ot(t,n),t!==null&&(Ai(t,n,i),ye(t,i))}function Af(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),ch(t,i)}function Of(t,n){var i=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(i=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),ch(t,i)}var dh;dh=function(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps||je.current)ge=!0;else{if(!(t.lanes&i)&&!(n.flags&128))return ge=!1,vf(t,n,i);ge=!!(t.flags&131072)}else ge=!1,z&&n.flags&1048576&&mu(n,Mr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;mr(t,n),t=n.pendingProps;var s=kn(n,de.current);Sn(n,i),s=Hl(null,n,r,t,s,i);var o=Vl();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(r)?(o=!0,Nr(n)):o=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Jl(n),s.updater=as,n.stateNode=s,s._reactInternals=n,Fo(n,r,t,i),n=Uo(null,n,r,!0,o,i)):(n.tag=0,z&&o&&Nl(n),ue(null,n,s,i),n=n.child),n;case 16:r=n.elementType;e:{switch(mr(t,n),t=n.pendingProps,s=r._init,r=s(r._payload),n.type=r,s=n.tag=Rf(r),t=Fe(r,t),s){case 0:n=Jo(null,n,r,t,i);break e;case 1:n=hc(null,n,r,t,i);break e;case 11:n=dc(null,n,r,t,i);break e;case 14:n=uc(null,n,r,Fe(r.type,t),i);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Fe(r,s),Jo(t,n,r,s,i);case 1:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Fe(r,s),hc(t,n,r,s,i);case 3:e:{if($u(n),t===null)throw Error(E(387));r=n.pendingProps,o=n.memoizedState,s=o.element,yu(t,n),Fr(n,r,null,i);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){s=Dn(Error(E(423)),n),n=pc(t,n,r,i,s);break e}else if(r!==s){s=Dn(Error(E(424)),n),n=pc(t,n,r,i,s);break e}else for(Ee=St(n.stateNode.containerInfo.firstChild),Ce=n,z=!0,Je=null,i=ju(n,null,r,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Tn(),r===s){n=lt(t,n,i);break e}ue(t,n,r,i)}n=n.child}return n;case 5:return bu(n),t===null&&Mo(n),r=n.type,s=n.pendingProps,o=t!==null?t.memoizedProps:null,l=s.children,Do(r,s)?l=null:o!==null&&Do(r,o)&&(n.flags|=32),Vu(t,n),ue(t,n,l,i),n.child;case 6:return t===null&&Mo(n),null;case 13:return Gu(t,n,i);case 4:return Ul(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Pn(n,null,r,i):ue(t,n,r,i),n.child;case 11:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Fe(r,s),dc(t,n,r,s,i);case 7:return ue(t,n,n.pendingProps,i),n.child;case 8:return ue(t,n,n.pendingProps.children,i),n.child;case 12:return ue(t,n,n.pendingProps.children,i),n.child;case 10:e:{if(r=n.type._context,s=n.pendingProps,o=n.memoizedProps,l=s.value,F(Lr,r._currentValue),r._currentValue=l,o!==null)if(_e(o.value,l)){if(o.children===s.children&&!je.current){n=lt(t,n,i);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=it(-1,i&-i),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}o.lanes|=i,c=o.alternate,c!==null&&(c.lanes|=i),Lo(o.return,i,n),a.lanes|=i;break}c=c.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=i,a=l.alternate,a!==null&&(a.lanes|=i),Lo(l,i,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ue(t,n,s.children,i),n=n.child}return n;case 9:return s=n.type,r=n.pendingProps.children,Sn(n,i),s=Re(s),r=r(s),n.flags|=1,ue(t,n,r,i),n.child;case 14:return r=n.type,s=Fe(r,n.pendingProps),s=Fe(r.type,s),uc(t,n,r,s,i);case 15:return qu(t,n,n.type,n.pendingProps,i);case 17:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Fe(r,s),mr(t,n),n.tag=1,ve(r)?(t=!0,Nr(n)):t=!1,Sn(n,i),Uu(n,r,s),Fo(n,r,s,i),Uo(null,n,r,!0,t,i);case 19:return Xu(t,n,i);case 22:return Hu(t,n,i)}throw Error(E(156,n.tag))};function uh(t,n){return Fd(t,n)}function Nf(t,n,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(t,n,i,r){return new Nf(t,n,i,r)}function na(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rf(t){if(typeof t=="function")return na(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bl)return 11;if(t===wl)return 14}return 2}function Tt(t,n){var i=t.alternate;return i===null?(i=Oe(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function gr(t,n,i,r,s,o){var l=2;if(r=t,typeof t=="function")na(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case an:return Ht(i.children,s,o,n);case yl:l=8,s|=8;break;case lo:return t=Oe(12,i,n,s|2),t.elementType=lo,t.lanes=o,t;case ao:return t=Oe(13,i,n,s),t.elementType=ao,t.lanes=o,t;case co:return t=Oe(19,i,n,s),t.elementType=co,t.lanes=o,t;case bd:return us(i,s,o,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vd:l=10;break e;case yd:l=9;break e;case bl:l=11;break e;case wl:l=14;break e;case ht:l=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return n=Oe(l,i,n,s),n.elementType=t,n.type=r,n.lanes=o,n}function Ht(t,n,i,r){return t=Oe(7,t,r,n),t.lanes=i,t}function us(t,n,i,r){return t=Oe(22,t,r,n),t.elementType=bd,t.lanes=i,t.stateNode={isHidden:!1},t}function Qs(t,n,i){return t=Oe(6,t,null,n),t.lanes=i,t}function Ys(t,n,i){return n=Oe(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Mf(t,n,i,r,s){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Os(0),this.expirationTimes=Os(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Os(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ia(t,n,i,r,s,o,l,a,c){return t=new Mf(t,n,i,a,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Oe(3,null,null,n),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(o),t}function Lf(t,n,i){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ln,key:r==null?null:""+r,children:t,containerInfo:n,implementation:i}}function hh(t){if(!t)return Dt;t=t._reactInternals;e:{if(en(t)!==t||t.tag!==1)throw Error(E(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(t.tag===1){var i=t.type;if(ve(i))return hu(t,i,n)}return n}function ph(t,n,i,r,s,o,l,a,c){return t=ia(i,r,!0,t,s,o,l,a,c),t.context=hh(null),i=t.current,r=pe(),s=kt(i),o=it(r,s),o.callback=n??null,Et(i,o,s),t.current.lanes=s,Ai(t,s,r),ye(t,r),t}function hs(t,n,i,r){var s=n.current,o=pe(),l=kt(s);return i=hh(i),n.context===null?n.context=i:n.pendingContext=i,n=it(o,l),n.payload={element:t},r=r===void 0?null:r,r!==null&&(n.callback=r),t=Et(s,n,l),t!==null&&(ze(t,s,l,o),ur(t,s,l)),l}function Vr(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sc(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function ra(t,n){Sc(t,n),(t=t.alternate)&&Sc(t,n)}function Bf(){return null}var mh=typeof reportError=="function"?reportError:function(t){console.error(t)};function sa(t){this._internalRoot=t}ps.prototype.render=sa.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(E(409));hs(t,n,null,null)};ps.prototype.unmount=sa.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Qt(function(){hs(null,t,null,null)}),n[st]=null}};function ps(t){this._internalRoot=t}ps.prototype.unstable_scheduleHydration=function(t){if(t){var n=Hd();t={blockedOn:null,target:t,priority:n};for(var i=0;i<mt.length&&n!==0&&n<mt[i].priority;i++);mt.splice(i,0,t),i===0&&$d(t)}};function oa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ms(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ec(){}function Ff(t,n,i,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var d=Vr(l);o.call(d)}}var l=ph(n,r,t,0,null,!1,!1,"",Ec);return t._reactRootContainer=l,t[st]=l.current,ji(t.nodeType===8?t.parentNode:t),Qt(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var d=Vr(c);a.call(d)}}var c=ia(t,0,!1,null,null,!1,!1,"",Ec);return t._reactRootContainer=c,t[st]=c.current,ji(t.nodeType===8?t.parentNode:t),Qt(function(){hs(n,c,i,r)}),c}function fs(t,n,i,r,s){var o=i._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var a=s;s=function(){var c=Vr(l);a.call(c)}}hs(n,l,t,s)}else l=Ff(i,n,t,s,r);return Vr(l)}_d=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var i=Qn(n.pendingLanes);i!==0&&(Cl(n,i|1),ye(n,X()),!(L&6)&&(An=X()+500,Nt()))}break;case 13:Qt(function(){var r=ot(t,1);if(r!==null){var s=pe();ze(r,t,1,s)}}),ra(t,1)}};kl=function(t){if(t.tag===13){var n=ot(t,134217728);if(n!==null){var i=pe();ze(n,t,134217728,i)}ra(t,134217728)}};qd=function(t){if(t.tag===13){var n=kt(t),i=ot(t,n);if(i!==null){var r=pe();ze(i,t,n,r)}ra(t,n)}};Hd=function(){return B};Vd=function(t,n){var i=B;try{return B=t,n()}finally{B=i}};yo=function(t,n,i){switch(n){case"input":if(po(t,i),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var r=i[n];if(r!==t&&r.form===t.form){var s=ss(r);if(!s)throw Error(E(90));Sd(r),po(r,s)}}}break;case"textarea":Cd(t,i);break;case"select":n=i.value,n!=null&&vn(t,!!i.multiple,n,!1)}};Od=Zl;Nd=Qt;var Wf={usingClientEntryPoint:!1,Events:[Ni,hn,ss,Dd,Ad,Zl]},$n={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jf={bundleType:$n.bundleType,version:$n.version,rendererPackageName:$n.rendererPackageName,rendererConfig:$n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ld(t),t===null?null:t.stateNode},findFiberByHostInstance:$n.findFiberByHostInstance||Bf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rr.isDisabled&&rr.supportsFiber)try{ts=rr.inject(Jf),Xe=rr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wf;Pe.createPortal=function(t,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oa(n))throw Error(E(200));return Lf(t,n,null,i)};Pe.createRoot=function(t,n){if(!oa(t))throw Error(E(299));var i=!1,r="",s=mh;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=ia(t,1,!1,null,null,i,!1,r,s),t[st]=n.current,ji(t.nodeType===8?t.parentNode:t),new sa(n)};Pe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Ld(n),t=t===null?null:t.stateNode,t};Pe.flushSync=function(t){return Qt(t)};Pe.hydrate=function(t,n,i){if(!ms(n))throw Error(E(200));return fs(null,t,n,!0,i)};Pe.hydrateRoot=function(t,n,i){if(!oa(t))throw Error(E(405));var r=i!=null&&i.hydratedSources||null,s=!1,o="",l=mh;if(i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onRecoverableError!==void 0&&(l=i.onRecoverableError)),n=ph(n,null,t,1,i??null,s,!1,o,l),t[st]=n.current,ji(t),r)for(t=0;t<r.length;t++)i=r[t],s=i._getVersion,s=s(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,s]:n.mutableSourceEagerHydrationData.push(i,s);return new ps(n)};Pe.render=function(t,n,i){if(!ms(n))throw Error(E(200));return fs(null,t,n,!1,i)};Pe.unmountComponentAtNode=function(t){if(!ms(t))throw Error(E(40));return t._reactRootContainer?(Qt(function(){fs(null,null,t,!1,function(){t._reactRootContainer=null,t[st]=null})}),!0):!1};Pe.unstable_batchedUpdates=Zl;Pe.unstable_renderSubtreeIntoContainer=function(t,n,i,r){if(!ms(i))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return fs(t,n,i,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function fh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fh)}catch(t){console.error(t)}}fh(),fd.exports=Pe;var Uf=fd.exports,Cc=Uf;so.createRoot=Cc.createRoot,so.hydrateRoot=Cc.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ti(){return Ti=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},Ti.apply(this,arguments)}var vt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(vt||(vt={}));const kc="popstate";function zf(t){t===void 0&&(t={});function n(r,s){let{pathname:o,search:l,hash:a}=r.location;return Zo("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(r,s){return typeof s=="string"?s:$r(s)}return qf(n,i,null,t)}function Q(t,n){if(t===!1||t===null||typeof t>"u")throw new Error(n)}function xh(t,n){if(!t){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function _f(){return Math.random().toString(36).substr(2,8)}function Tc(t,n){return{usr:t.state,key:t.key,idx:n}}function Zo(t,n,i,r){return i===void 0&&(i=null),Ti({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof n=="string"?Mn(n):n,{state:i,key:n&&n.key||r||_f()})}function $r(t){let{pathname:n="/",search:i="",hash:r=""}=t;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Mn(t){let n={};if(t){let i=t.indexOf("#");i>=0&&(n.hash=t.substr(i),t=t.substr(0,i));let r=t.indexOf("?");r>=0&&(n.search=t.substr(r),t=t.substr(0,r)),t&&(n.pathname=t)}return n}function qf(t,n,i,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:o=!1}=r,l=s.history,a=vt.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(Ti({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function h(){a=vt.Pop;let v=u(),m=v==null?null:v-d;d=v,c&&c({action:a,location:j.location,delta:m})}function x(v,m){a=vt.Push;let p=Zo(j.location,v,m);d=u()+1;let f=Tc(p,d),w=j.createHref(p);try{l.pushState(f,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(w)}o&&c&&c({action:a,location:j.location,delta:1})}function b(v,m){a=vt.Replace;let p=Zo(j.location,v,m);d=u();let f=Tc(p,d),w=j.createHref(p);l.replaceState(f,"",w),o&&c&&c({action:a,location:j.location,delta:0})}function g(v){let m=s.location.origin!=="null"?s.location.origin:s.location.href,p=typeof v=="string"?v:$r(v);return p=p.replace(/ $/,"%20"),Q(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let j={get action(){return a},get location(){return t(s,l)},listen(v){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(kc,h),c=v,()=>{s.removeEventListener(kc,h),c=null}},createHref(v){return n(s,v)},createURL:g,encodeLocation(v){let m=g(v);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:b,go(v){return l.go(v)}};return j}var Pc;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Pc||(Pc={}));function Hf(t,n,i){return i===void 0&&(i="/"),Vf(t,n,i,!1)}function Vf(t,n,i,r){let s=typeof n=="string"?Mn(n):n,o=la(s.pathname||"/",i);if(o==null)return null;let l=gh(t);$f(l);let a=null;for(let c=0;a==null&&c<l.length;++c){let d=rx(o);a=nx(l[c],d,r)}return a}function gh(t,n,i,r){n===void 0&&(n=[]),i===void 0&&(i=[]),r===void 0&&(r="");let s=(o,l,a)=>{let c={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(Q(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Pt([r,c.relativePath]),u=i.concat(c);o.children&&o.children.length>0&&(Q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),gh(o.children,n,u,d)),!(o.path==null&&!o.index)&&n.push({path:d,score:ex(d,o.index),routesMeta:u})};return t.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))s(o,l);else for(let c of jh(o.path))s(o,l,c)}),n}function jh(t){let n=t.split("/");if(n.length===0)return[];let[i,...r]=n,s=i.endsWith("?"),o=i.replace(/\?$/,"");if(r.length===0)return s?[o,""]:[o];let l=jh(r.join("/")),a=[];return a.push(...l.map(c=>c===""?o:[o,c].join("/"))),s&&a.push(...l),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function $f(t){t.sort((n,i)=>n.score!==i.score?i.score-n.score:tx(n.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}const Gf=/^:[\w-]+$/,Xf=3,Kf=2,Qf=1,Yf=10,Zf=-2,Ic=t=>t==="*";function ex(t,n){let i=t.split("/"),r=i.length;return i.some(Ic)&&(r+=Zf),n&&(r+=Kf),i.filter(s=>!Ic(s)).reduce((s,o)=>s+(Gf.test(o)?Xf:o===""?Qf:Yf),r)}function tx(t,n){return t.length===n.length&&t.slice(0,-1).every((r,s)=>r===n[s])?t[t.length-1]-n[n.length-1]:0}function nx(t,n,i){let{routesMeta:r}=t,s={},o="/",l=[];for(let a=0;a<r.length;++a){let c=r[a],d=a===r.length-1,u=o==="/"?n:n.slice(o.length)||"/",h=Dc({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),x=c.route;if(!h&&d&&i&&!r[r.length-1].route.index&&(h=Dc({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},u)),!h)return null;Object.assign(s,h.params),l.push({params:s,pathname:Pt([o,h.pathname]),pathnameBase:ax(Pt([o,h.pathnameBase])),route:x}),h.pathnameBase!=="/"&&(o=Pt([o,h.pathnameBase]))}return l}function Dc(t,n){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,r]=ix(t.path,t.caseSensitive,t.end),s=n.match(i);if(!s)return null;let o=s[0],l=o.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((d,u,h)=>{let{paramName:x,isOptional:b}=u;if(x==="*"){let j=a[h]||"";l=o.slice(0,o.length-j.length).replace(/(.)\/+$/,"$1")}const g=a[h];return b&&!g?d[x]=void 0:d[x]=(g||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:l,pattern:t}}function ix(t,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),xh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),r]}function rx(t){try{return t.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return xh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),t}}function la(t,n){if(n==="/")return t;if(!t.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,r=t.charAt(i);return r&&r!=="/"?null:t.slice(i)||"/"}function sx(t,n){n===void 0&&(n="/");let{pathname:i,search:r="",hash:s=""}=typeof t=="string"?Mn(t):t;return{pathname:i?i.startsWith("/")?i:ox(i,n):n,search:cx(r),hash:dx(s)}}function ox(t,n){let i=n.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function Zs(t,n,i,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lx(t){return t.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function vh(t,n){let i=lx(t);return n?i.map((r,s)=>s===i.length-1?r.pathname:r.pathnameBase):i.map(r=>r.pathnameBase)}function yh(t,n,i,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Mn(t):(s=Ti({},t),Q(!s.pathname||!s.pathname.includes("?"),Zs("?","pathname","search",s)),Q(!s.pathname||!s.pathname.includes("#"),Zs("#","pathname","hash",s)),Q(!s.search||!s.search.includes("#"),Zs("#","search","hash",s)));let o=t===""||s.pathname==="",l=o?"/":s.pathname,a;if(l==null)a=i;else{let h=n.length-1;if(!r&&l.startsWith("..")){let x=l.split("/");for(;x[0]==="..";)x.shift(),h-=1;s.pathname=x.join("/")}a=h>=0?n[h]:"/"}let c=sx(s,a),d=l&&l!=="/"&&l.endsWith("/"),u=(o||l===".")&&i.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Pt=t=>t.join("/").replace(/\/\/+/g,"/"),ax=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ux(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bh=["post","put","patch","delete"];new Set(bh);const hx=["get",...bh];new Set(hx);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pi(){return Pi=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},Pi.apply(this,arguments)}const aa=S.createContext(null),px=S.createContext(null),tn=S.createContext(null),xs=S.createContext(null),nn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),wh=S.createContext(null);function mx(t,n){let{relative:i}=n===void 0?{}:n;Mi()||Q(!1);let{basename:r,navigator:s}=S.useContext(tn),{hash:o,pathname:l,search:a}=Eh(t,{relative:i}),c=l;return r!=="/"&&(c=l==="/"?r:Pt([r,l])),s.createHref({pathname:c,search:a,hash:o})}function Mi(){return S.useContext(xs)!=null}function Li(){return Mi()||Q(!1),S.useContext(xs).location}function Sh(t){S.useContext(tn).static||S.useLayoutEffect(t)}function rn(){let{isDataRoute:t}=S.useContext(nn);return t?Tx():fx()}function fx(){Mi()||Q(!1);let t=S.useContext(aa),{basename:n,future:i,navigator:r}=S.useContext(tn),{matches:s}=S.useContext(nn),{pathname:o}=Li(),l=JSON.stringify(vh(s,i.v7_relativeSplatPath)),a=S.useRef(!1);return Sh(()=>{a.current=!0}),S.useCallback(function(d,u){if(u===void 0&&(u={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let h=yh(d,JSON.parse(l),o,u.relative==="path");t==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:Pt([n,h.pathname])),(u.replace?r.replace:r.push)(h,u.state,u)},[n,r,l,o,t])}function Eh(t,n){let{relative:i}=n===void 0?{}:n,{future:r}=S.useContext(tn),{matches:s}=S.useContext(nn),{pathname:o}=Li(),l=JSON.stringify(vh(s,r.v7_relativeSplatPath));return S.useMemo(()=>yh(t,JSON.parse(l),o,i==="path"),[t,l,o,i])}function xx(t,n){return gx(t,n)}function gx(t,n,i,r){Mi()||Q(!1);let{navigator:s}=S.useContext(tn),{matches:o}=S.useContext(nn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Li(),u;if(n){var h;let v=typeof n=="string"?Mn(n):n;c==="/"||(h=v.pathname)!=null&&h.startsWith(c)||Q(!1),u=v}else u=d;let x=u.pathname||"/",b=x;if(c!=="/"){let v=c.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=Hf(t,{pathname:b}),j=wx(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Pt([c,s.encodeLocation?s.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:Pt([c,s.encodeLocation?s.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,i,r);return n&&j?S.createElement(xs.Provider,{value:{location:Pi({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:vt.Pop}},j):j}function jx(){let t=kx(),n=ux(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},n),i?S.createElement("pre",{style:s},i):null,null)}const vx=S.createElement(jx,null);class yx extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?S.createElement(nn.Provider,{value:this.props.routeContext},S.createElement(wh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bx(t){let{routeContext:n,match:i,children:r}=t,s=S.useContext(aa);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),S.createElement(nn.Provider,{value:n},r)}function wx(t,n,i,r){var s;if(n===void 0&&(n=[]),i===void 0&&(i=null),r===void 0&&(r=null),t==null){var o;if(!i)return null;if(i.errors)t=i.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let l=t,a=(s=i)==null?void 0:s.errors;if(a!=null){let u=l.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);u>=0||Q(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(i&&r&&r.v7_partialHydration)for(let u=0;u<l.length;u++){let h=l[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=u),h.route.id){let{loaderData:x,errors:b}=i,g=h.route.loader&&x[h.route.id]===void 0&&(!b||b[h.route.id]===void 0);if(h.route.lazy||g){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,h,x)=>{let b,g=!1,j=null,v=null;i&&(b=a&&h.route.id?a[h.route.id]:void 0,j=h.route.errorElement||vx,c&&(d<0&&x===0?(g=!0,v=null):d===x&&(g=!0,v=h.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,x+1)),p=()=>{let f;return b?f=j:g?f=v:h.route.Component?f=S.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=u,S.createElement(bx,{match:h,routeContext:{outlet:u,matches:m,isDataRoute:i!=null},children:f})};return i&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?S.createElement(yx,{location:i.location,revalidation:i.revalidation,component:j,error:b,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Ch=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Ch||{}),Gr=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Gr||{});function Sx(t){let n=S.useContext(aa);return n||Q(!1),n}function Ex(t){let n=S.useContext(px);return n||Q(!1),n}function Cx(t){let n=S.useContext(nn);return n||Q(!1),n}function kh(t){let n=Cx(),i=n.matches[n.matches.length-1];return i.route.id||Q(!1),i.route.id}function kx(){var t;let n=S.useContext(wh),i=Ex(Gr.UseRouteError),r=kh(Gr.UseRouteError);return n!==void 0?n:(t=i.errors)==null?void 0:t[r]}function Tx(){let{router:t}=Sx(Ch.UseNavigateStable),n=kh(Gr.UseNavigateStable),i=S.useRef(!1);return Sh(()=>{i.current=!0}),S.useCallback(function(s,o){o===void 0&&(o={}),i.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Pi({fromRouteId:n},o)))},[t,n])}function $e(t){Q(!1)}function Px(t){let{basename:n="/",children:i=null,location:r,navigationType:s=vt.Pop,navigator:o,static:l=!1,future:a}=t;Mi()&&Q(!1);let c=n.replace(/^\/*/,"/"),d=S.useMemo(()=>({basename:c,navigator:o,static:l,future:Pi({v7_relativeSplatPath:!1},a)}),[c,a,o,l]);typeof r=="string"&&(r=Mn(r));let{pathname:u="/",search:h="",hash:x="",state:b=null,key:g="default"}=r,j=S.useMemo(()=>{let v=la(u,c);return v==null?null:{location:{pathname:v,search:h,hash:x,state:b,key:g},navigationType:s}},[c,u,h,x,b,g,s]);return j==null?null:S.createElement(tn.Provider,{value:d},S.createElement(xs.Provider,{children:i,value:j}))}function Th(t){let{children:n,location:i}=t;return xx(el(n),i)}new Promise(()=>{});function el(t,n){n===void 0&&(n=[]);let i=[];return S.Children.forEach(t,(r,s)=>{if(!S.isValidElement(r))return;let o=[...n,s];if(r.type===S.Fragment){i.push.apply(i,el(r.props.children,o));return}r.type!==$e&&Q(!1),!r.props.index||!r.props.children||Q(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=el(r.props.children,o)),i.push(l)}),i}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},tl.apply(this,arguments)}function Ix(t,n){if(t==null)return{};var i={},r=Object.keys(t),s,o;for(o=0;o<r.length;o++)s=r[o],!(n.indexOf(s)>=0)&&(i[s]=t[s]);return i}function Dx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ax(t,n){return t.button===0&&(!n||n==="_self")&&!Dx(t)}const Ox=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nx="6";try{window.__reactRouterVersion=Nx}catch{}const Rx="startTransition",Ac=Ip[Rx];function Mx(t){let{basename:n,children:i,future:r,window:s}=t,o=S.useRef();o.current==null&&(o.current=zf({window:s,v5Compat:!0}));let l=o.current,[a,c]=S.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},u=S.useCallback(h=>{d&&Ac?Ac(()=>c(h)):c(h)},[c,d]);return S.useLayoutEffect(()=>l.listen(u),[l,u]),S.createElement(Px,{basename:n,children:i,location:a.location,navigationType:a.action,navigator:l,future:r})}const Lx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ca=S.forwardRef(function(n,i){let{onClick:r,relative:s,reloadDocument:o,replace:l,state:a,target:c,to:d,preventScrollReset:u,viewTransition:h}=n,x=Ix(n,Ox),{basename:b}=S.useContext(tn),g,j=!1;if(typeof d=="string"&&Bx.test(d)&&(g=d,Lx))try{let f=new URL(window.location.href),w=d.startsWith("//")?new URL(f.protocol+d):new URL(d),C=la(w.pathname,b);w.origin===f.origin&&C!=null?d=C+w.search+w.hash:j=!0}catch{}let v=mx(d,{relative:s}),m=Fx(d,{replace:l,state:a,target:c,preventScrollReset:u,relative:s,viewTransition:h});function p(f){r&&r(f),f.defaultPrevented||m(f)}return S.createElement("a",tl({},x,{href:g||v,onClick:j||o?r:p,ref:i,target:c}))});var Oc;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Oc||(Oc={}));var Nc;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Nc||(Nc={}));function Fx(t,n){let{target:i,replace:r,state:s,preventScrollReset:o,relative:l,viewTransition:a}=n===void 0?{}:n,c=rn(),d=Li(),u=Eh(t,{relative:l});return S.useCallback(h=>{if(Ax(h,i)){h.preventDefault();let x=r!==void 0?r:$r(d)===$r(u);c(t,{replace:x,state:s,preventScrollReset:o,relative:l,viewTransition:a})}},[d,c,u,r,s,i,t,o,l,a])}function gs(){const t=rn(),[n,i]=S.useState(!1),[r,s]=S.useState(""),o=[{title:"Java Basics",step:1,route:"/Selenium/Intro"},{title:"Variables",step:2,route:"/Selenium/Variables"},{title:"Data Types",step:3,route:"/Selenium/DataTypes"},{title:"Java Operations",step:4,route:"/Selenium/JavaOperation"},{title:"Java Strings",step:5,route:"/Selenium/JavaStrings"},{title:"Java Methods",step:6,route:"/Selenium/JavaMethods"},{title:"Java Arrays",step:7,route:"/Selenium/JavaArrays"},{title:"Java Abstraction",step:8,route:"/Selenium/JavaAbstraction"},{title:"Java Conditions",step:9,route:"/Selenium/JavaConditions"},{title:"Java APIs",step:10,route:"/Selenium/JavaAPIs"},{title:"Java Constructor",step:11,route:"/Selenium/JavaConstructor"},{title:"Data Type Conversion",step:12,route:"/Selenium/DataTypeConversion"},{title:"Encapsulation",step:13,route:"/Selenium/Encapsulation"},{title:"Enum in Java",step:14,route:"/Selenium/EnumInJava"},{title:"Exception Handling",step:15,route:"/Selenium/ExceptionHandlingInJava"},{title:"File Handling",step:16,route:"/Selenium/FileHandlingInJava"},{title:"Inheritance",step:17,route:"/Selenium/InheritanceDocument"},{title:"Java Iteration",step:18,route:"/Selenium/JavaIteration"},{title:"POI",step:19,route:"/Selenium/Poi"},{title:"Polymorphism",step:20,route:"/Selenium/Polymorphism"},{title:"Selenium Alerts",step:21,route:"/Selenium/SeleniumAlertsTheory"},{title:"CDP in Selenium",step:22,route:"/Selenium/CdpSeleniumTheory"},{title:"Data Driven Framework",step:23,route:"/Selenium/DataDrivenFramework"},{title:"Docker in Selenium",step:24,route:"/Selenium/DockerInSelenium"},{title:"Extent Reports",step:25,route:"/Selenium/ExtentReportsInSelenium"},{title:"Handling Web Elements",step:26,route:"/Selenium/HandlingWebElements"},{title:"Window Handling",step:27,route:"/Selenium/HandlingWindowInSelenium"},{title:"Is Element Present",step:28,route:"/Selenium/IsElementPresentInSelenium"},{title:"iFrames in Selenium",step:29,route:"/Selenium/HandlingIFramesInSelenium"},{title:"JavaScript Executor",step:30,route:"/Selenium/JavaScriptExecutorInSelenium"},{title:"Log4j",step:31,route:"/Selenium/Log4jInSelenium"},{title:"Page Object Model",step:32,route:"/Selenium/PageObjectModelInSelenium"},{title:"Relative Locators",step:33,route:"/Selenium/RelativeLocatorsInSelenium"},{title:"ReportNG",step:34,route:"/Selenium/ReportNGInSelenium"},{title:"Screenshots",step:35,route:"/Selenium/ScreenshotsInSelenium"},{title:"Action APIs",step:36,route:"/Selenium/ActionAPIsInSelenium"},{title:"Selenium Grid",step:37,route:"/Selenium/SeleniumGrid"},{title:"Selenium Select",step:38,route:"/Selenium/SeleniumSelect"},{title:"Selenium Waits",step:39,route:"/Selenium/SeleniumWaits"},{title:"XPath",step:40,route:"/Selenium/SeleniumXPath"},{title:"TestNG",step:41,route:"/Selenium/TestNGFramework"}],l=c=>{if(c.key==="Enter"){const d=r.toLowerCase(),u=o.find(h=>h.title.toLowerCase().includes(d));u&&(t(u.route),s(""))}},a=()=>{i(!n)};return e.jsxs("nav",{className:"navbar",children:[e.jsxs("div",{className:"main-nav",children:[e.jsx("a",{href:"/",className:"logo",children:"JourneyToAutomation"}),e.jsxs("button",{className:`hamburger ${n?"active":""}`,onClick:a,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("div",{className:`nav-links ${n?"active":""}`,children:[e.jsx("div",{className:"search-container",children:e.jsx("input",{type:"search",placeholder:"Search JourneyToAutomation",value:r,onChange:c=>s(c.target.value),onKeyPress:l})}),e.jsxs("div",{className:"nav-buttons",children:[e.jsx("button",{onClick:()=>window.open("https://courses.journeytoautomation.org/store"),children:"Courses"}),e.jsx("button",{children:"Contact Us"}),e.jsx("button",{children:"About Us"})]})]})]}),e.jsxs("div",{className:"sub-nav",children:[e.jsx("a",{onClick:()=>t("/Selenium"),children:"SELENIUM WITH JAVA"}),e.jsx("a",{onClick:()=>t("/Playwright"),children:"PLAYWRIGHT"}),e.jsx("a",{onClick:()=>t("/InterviewQuestions"),children:"INTERVIEW QUESTIONS"}),e.jsx("a",{onClick:()=>t("/"),children:"API TESTING"})]})]})}/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ph=(...t)=>t.filter((n,i,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=S.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:s="",children:o,iconNode:l,...a},c)=>S.createElement("svg",{ref:c,...Jx,width:n,height:n,stroke:t,strokeWidth:r?Number(i)*24/Number(n):i,className:Ph("lucide",s),...a},[...l.map(([d,u])=>S.createElement(d,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=(t,n)=>{const i=S.forwardRef(({className:r,...s},o)=>S.createElement(Ux,{ref:o,iconNode:n,className:Ph(`lucide-${Wx(t)}`,r),...s}));return i.displayName=`${t}`,i};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=ee("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=ee("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=ee("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=ee("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=ee("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=ee("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=ee("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=ee("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=ee("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=ee("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=ee("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=ee("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=ee("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=ee("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=ee("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=ee("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=ee("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=ee("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=ee("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),eg=`
  .learning-pathways {
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%);
  }

  .pathways-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    color: #1a1a1a;
  }

  .section-title h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .section-title p {
    font-size: 1.1rem;
    color: #666;
  }

  .frameworks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .framework-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .framework-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  .framework-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
  }

  .framework-card.selenium::before { background: #43B02A; }
  .framework-card.playwright::before { background: #45ba4b; }
  .framework-card.api::before { background: #FF6B6B; }
  .framework-card.cypress::before { background: #24B9B9; }

  .framework-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .framework-icon {
    width: 48px;
    height: 48px;
    padding: 10px;
    border-radius: 12px;
    margin-right: 1rem;
  }

  .selenium .framework-icon { background: #e8f5e9; color: #43B02A; }
  .playwright .framework-icon { background: #e8f5e9; color: #45ba4b; }
  .api .framework-icon { background: #ffe8e8; color: #FF6B6B; }
  .cypress .framework-icon { background: #e3f8f8; color: #24B9B9; }

  .framework-title {
    margin: 0;
    font-size: 1.5rem;
    color: #1a1a1a;
  }

  .topics-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .topic-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    color: #4a4a4a;
  }

  .topic-item svg {
    margin-right: 0.75rem;
    width: 16px;
    height: 16px;
    color: #43B02A;
  }

  .start-learning-btn {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    background: transparent;
    border: 2px solid #1a1a1a;
    border-radius: 8px;
    color: #1a1a1a;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .start-learning-btn:hover {
    background: #1a1a1a;
    color: white;
  }

  .progress-bar {
    width: 100%;
    height: 6px;
    background: #eee;
    border-radius: 3px;
    margin-top: 1rem;
  }

  .progress-fill {
    height: 100%;
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  .selenium .progress-fill { background: #43B02A; }
  .playwright .progress-fill { background: #45ba4b; }
  .api .progress-fill { background: #FF6B6B; }
  .cypress .progress-fill { background: #24B9B9; }
`,tg={selenium:{path:"/Selenium",title:"Selenium with Java",description:"Master web automation with the industry standard tool"},playwright:{path:"/Playwright",title:"Playwright",description:"Modern automation for modern web apps"},api:{path:"/",title:"API Testing",description:"Learn REST API automation fundamentals"},cypress:{path:"/",title:"Cypress",description:"Modern, all-in-one testing framework"},interview:{path:"/",title:"Interview Questions",description:"Prepare for automation testing interviews"}},ng=()=>{const t=rn(),[n,i]=S.useState(null),r=o=>{var a;const l=(a=tg[o])==null?void 0:a.path;l&&(window.scrollTo(0,0),t(l))},s=[{id:"selenium",title:"Selenium WebDriver",icon:e.jsx(Rc,{}),completionRate:85,topics:["WebDriver Setup & Configuration","Element Location Strategies","Advanced Interactions & Waits","Framework Design & Best Practices"]},{id:"playwright",title:"Playwright",icon:e.jsx(Mc,{}),completionRate:75,topics:["Auto-waiting & Web-first Assertions","Network Interception & Mocking","Parallel Testing & Fixtures","Visual Testing & Screenshots"]},{id:"api",title:"API Testing",icon:e.jsx(Rc,{}),completionRate:90,topics:["REST API Fundamentals","Request/Response Validation","Authentication & Authorization","Performance Testing Basics"]},{id:"cypress",title:"Cypress",icon:e.jsx(Mc,{}),completionRate:80,topics:["Modern Web Testing Approach","Real-time Test Execution","Network Stubbing & Spying","Custom Commands & Plugins"]}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:eg}),e.jsx("section",{className:"learning-pathways",children:e.jsxs("div",{className:"pathways-container",children:[e.jsxs("div",{className:"section-title",children:[e.jsx("h2",{children:"Choose Your Learning Path"}),e.jsx("p",{children:"Master test automation with our comprehensive, hands-on Tutorials"})]}),e.jsx("div",{className:"frameworks-grid",children:s.map(o=>e.jsxs("div",{className:`framework-card ${o.id}`,onMouseEnter:()=>i(o.id),onMouseLeave:()=>i(null),children:[e.jsxs("div",{className:"framework-header",children:[e.jsx("div",{className:"framework-icon",children:o.icon}),e.jsx("h3",{className:"framework-title",children:o.title})]}),e.jsx("ul",{className:"topics-list",children:o.topics.map((l,a)=>e.jsxs("li",{className:"topic-item",children:[e.jsx(Hx,{size:16}),l]},a))}),e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:n===o.id?`${o.completionRate}%`:"0%"}})}),e.jsx("button",{className:"start-learning-btn",onClick:()=>r(o.id),children:"Start Learning"})]},o.id))})]})})]})},ig={selenium:`
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FirstTest {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.example.com");
        // Start automating!
    }
}`,playwright:`
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.example.com');
  // Start automating!
})();`,api:`
import io.restassured.RestAssured;
import org.testng.annotations.Test;

public class APITest {
    @Test
    public void testAPI() {
        RestAssured.given()
            .get("https://api.example.com/data")
            .then()
            .statusCode(200);
    }
}`,cypress:`
describe('My First Test', () => {
  it('Visits example website', () => {
    cy.visit('https://www.example.com')
    // Start automating with Cypress!
    cy.get('.element').should('be.visible')
    cy.contains('Welcome').click()
  })
})`,interview:`
Q1: How do you handle dynamic elements in Selenium?
---------------------------------------------------
✓ Solution:
We use WebDriverWait to implement explicit waits. This ensures the element is in a clickable state before interacting with it.

Example:
WebDriverWait wait = new WebDriverWait(driver, 10);
WebElement element = wait.until(
    ExpectedConditions.elementToBeClickable(By.id("dynamicId"))
);

💡 Key Points:
• Prevents flaky tests due to timing issues
• Better than Thread.sleep()
• Maximum wait time of 10 seconds
• Throws TimeoutException if element isn't found
`},Lc=["Search Selenium","Search Playwright","Search API Testing","Search Cypress","Search Interview Questions"],Bc={selenium:{path:"/Selenium",title:"Selenium with Java",description:"Master web automation with the industry standard tool"},playwright:{path:"/Playwright",title:"Playwright",description:"Modern automation for modern web apps"},api:{path:"/",title:"API Testing",description:"Learn REST API automation fundamentals"},cypress:{path:"/",title:"Cypress",description:"Modern, all-in-one testing framework"},interview:{path:"/",title:"Interview Questions",description:"Prepare for automation testing interviews"}};function rg(){const t=rn(),[n,i]=S.useState("selenium"),[r,s]=S.useState(""),[o,l]=S.useState(""),[a,c]=S.useState(0),[d,u]=S.useState(0),h=S.useRef(null),x=Object.entries(Bc).filter(([j,v])=>{const m=r.toLowerCase();return v.title.toLowerCase().includes(m)||v.description.toLowerCase().includes(m)}),b=()=>{var v;const j=(v=Bc[n])==null?void 0:v.path;j&&(window.scrollTo(0,0),t(j))},g=j=>{s(j.target.value),x.length===1&&i(x[0][0])};return S.useEffect(()=>{const j=Lc[a];if(d<j.length){const v=setTimeout(()=>{l(m=>m+j[d]),u(m=>m+1)},100);return()=>clearTimeout(v)}else{const v=setTimeout(()=>{c(m=>(m+1)%Lc.length),u(0),l("")},2e3);return()=>clearTimeout(v)}},[d,a]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"home",children:[e.jsx("div",{className:"hero-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"hero-content",children:[e.jsxs("h1",{children:["Learn ",e.jsx("span",{className:"highlight",children:"Test Automation"}),e.jsx("br",{}),"Today"]}),e.jsx("p",{className:"subtitle",children:"Learn industry-leading automation tools and frameworks through our interactive modules."}),e.jsxs("div",{className:"search-bar",children:[e.jsx("input",{type:"text",value:r,onChange:g,placeholder:o||"Search topics...",className:"search-input"}),e.jsx(Ih,{className:"search-icon"})]})]}),e.jsx("div",{className:"topics-container",children:e.jsx("div",{className:"topics-scroll-wrapper",children:e.jsx("div",{className:"topics-grid",ref:h,children:x.map(([j,v])=>e.jsxs("div",{className:`topic-card ${n===j?"selected":""}`,onClick:()=>i(j),children:[j==="selenium"&&e.jsx(Dh,{className:"topic-icon"}),j==="playwright"&&e.jsx(nl,{className:"topic-icon"}),j==="api"&&e.jsx(ci,{className:"topic-icon"}),j==="cypress"&&e.jsx(nl,{className:"topic-icon"}),j==="interview"&&e.jsx(ci,{className:"topic-icon"}),e.jsx("h2",{children:v.title}),e.jsx("p",{children:v.description})]},j))})})}),e.jsxs("div",{className:"code-example-section",children:[e.jsxs("div",{className:"example-header",children:[e.jsx(Kx,{className:"play-icon"}),e.jsx("h3",{children:"Try it yourself"})]}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:ig[n]})}),e.jsx("button",{className:"start-button",onClick:b,children:"Start Learning"})]})]})}),e.jsx(ng,{})]})})}function Ah(t,n){return function(){return t.apply(n,arguments)}}const{toString:sg}=Object.prototype,{getPrototypeOf:da}=Object,js=(t=>n=>{const i=sg.call(n);return t[i]||(t[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),qe=t=>(t=t.toLowerCase(),n=>js(n)===t),vs=t=>n=>typeof n===t,{isArray:Ln}=Array,Ii=vs("undefined");function og(t){return t!==null&&!Ii(t)&&t.constructor!==null&&!Ii(t.constructor)&&ke(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Oh=qe("ArrayBuffer");function lg(t){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(t):n=t&&t.buffer&&Oh(t.buffer),n}const ag=vs("string"),ke=vs("function"),Nh=vs("number"),ys=t=>t!==null&&typeof t=="object",cg=t=>t===!0||t===!1,jr=t=>{if(js(t)!=="object")return!1;const n=da(t);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},dg=qe("Date"),ug=qe("File"),hg=qe("Blob"),pg=qe("FileList"),mg=t=>ys(t)&&ke(t.pipe),fg=t=>{let n;return t&&(typeof FormData=="function"&&t instanceof FormData||ke(t.append)&&((n=js(t))==="formdata"||n==="object"&&ke(t.toString)&&t.toString()==="[object FormData]"))},xg=qe("URLSearchParams"),[gg,jg,vg,yg]=["ReadableStream","Request","Response","Headers"].map(qe),bg=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bi(t,n,{allOwnKeys:i=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Ln(t))for(r=0,s=t.length;r<s;r++)n.call(null,t[r],r,t);else{const o=i?Object.getOwnPropertyNames(t):Object.keys(t),l=o.length;let a;for(r=0;r<l;r++)a=o[r],n.call(null,t[a],a,t)}}function Rh(t,n){n=n.toLowerCase();const i=Object.keys(t);let r=i.length,s;for(;r-- >0;)if(s=i[r],n===s.toLowerCase())return s;return null}const _t=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Mh=t=>!Ii(t)&&t!==_t;function il(){const{caseless:t}=Mh(this)&&this||{},n={},i=(r,s)=>{const o=t&&Rh(n,s)||s;jr(n[o])&&jr(r)?n[o]=il(n[o],r):jr(r)?n[o]=il({},r):Ln(r)?n[o]=r.slice():n[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Bi(arguments[r],i);return n}const wg=(t,n,i,{allOwnKeys:r}={})=>(Bi(n,(s,o)=>{i&&ke(s)?t[o]=Ah(s,i):t[o]=s},{allOwnKeys:r}),t),Sg=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Eg=(t,n,i,r)=>{t.prototype=Object.create(n.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:n.prototype}),i&&Object.assign(t.prototype,i)},Cg=(t,n,i,r)=>{let s,o,l;const a={};if(n=n||{},t==null)return n;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)l=s[o],(!r||r(l,t,n))&&!a[l]&&(n[l]=t[l],a[l]=!0);t=i!==!1&&da(t)}while(t&&(!i||i(t,n))&&t!==Object.prototype);return n},kg=(t,n,i)=>{t=String(t),(i===void 0||i>t.length)&&(i=t.length),i-=n.length;const r=t.indexOf(n,i);return r!==-1&&r===i},Tg=t=>{if(!t)return null;if(Ln(t))return t;let n=t.length;if(!Nh(n))return null;const i=new Array(n);for(;n-- >0;)i[n]=t[n];return i},Pg=(t=>n=>t&&n instanceof t)(typeof Uint8Array<"u"&&da(Uint8Array)),Ig=(t,n)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const o=s.value;n.call(t,o[0],o[1])}},Dg=(t,n)=>{let i;const r=[];for(;(i=t.exec(n))!==null;)r.push(i);return r},Ag=qe("HTMLFormElement"),Og=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,r,s){return r.toUpperCase()+s}),Fc=(({hasOwnProperty:t})=>(n,i)=>t.call(n,i))(Object.prototype),Ng=qe("RegExp"),Lh=(t,n)=>{const i=Object.getOwnPropertyDescriptors(t),r={};Bi(i,(s,o)=>{let l;(l=n(s,o,t))!==!1&&(r[o]=l||s)}),Object.defineProperties(t,r)},Rg=t=>{Lh(t,(n,i)=>{if(ke(t)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const r=t[i];if(ke(r)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},Mg=(t,n)=>{const i={},r=s=>{s.forEach(o=>{i[o]=!0})};return Ln(t)?r(t):r(String(t).split(n)),i},Lg=()=>{},Bg=(t,n)=>t!=null&&Number.isFinite(t=+t)?t:n,eo="abcdefghijklmnopqrstuvwxyz",Wc="0123456789",Bh={DIGIT:Wc,ALPHA:eo,ALPHA_DIGIT:eo+eo.toUpperCase()+Wc},Fg=(t=16,n=Bh.ALPHA_DIGIT)=>{let i="";const{length:r}=n;for(;t--;)i+=n[Math.random()*r|0];return i};function Wg(t){return!!(t&&ke(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Jg=t=>{const n=new Array(10),i=(r,s)=>{if(ys(r)){if(n.indexOf(r)>=0)return;if(!("toJSON"in r)){n[s]=r;const o=Ln(r)?[]:{};return Bi(r,(l,a)=>{const c=i(l,s+1);!Ii(c)&&(o[a]=c)}),n[s]=void 0,o}}return r};return i(t,0)},Ug=qe("AsyncFunction"),zg=t=>t&&(ys(t)||ke(t))&&ke(t.then)&&ke(t.catch),Fh=((t,n)=>t?setImmediate:n?((i,r)=>(_t.addEventListener("message",({source:s,data:o})=>{s===_t&&o===i&&r.length&&r.shift()()},!1),s=>{r.push(s),_t.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",ke(_t.postMessage)),_g=typeof queueMicrotask<"u"?queueMicrotask.bind(_t):typeof process<"u"&&process.nextTick||Fh,y={isArray:Ln,isArrayBuffer:Oh,isBuffer:og,isFormData:fg,isArrayBufferView:lg,isString:ag,isNumber:Nh,isBoolean:cg,isObject:ys,isPlainObject:jr,isReadableStream:gg,isRequest:jg,isResponse:vg,isHeaders:yg,isUndefined:Ii,isDate:dg,isFile:ug,isBlob:hg,isRegExp:Ng,isFunction:ke,isStream:mg,isURLSearchParams:xg,isTypedArray:Pg,isFileList:pg,forEach:Bi,merge:il,extend:wg,trim:bg,stripBOM:Sg,inherits:Eg,toFlatObject:Cg,kindOf:js,kindOfTest:qe,endsWith:kg,toArray:Tg,forEachEntry:Ig,matchAll:Dg,isHTMLForm:Ag,hasOwnProperty:Fc,hasOwnProp:Fc,reduceDescriptors:Lh,freezeMethods:Rg,toObjectSet:Mg,toCamelCase:Og,noop:Lg,toFiniteNumber:Bg,findKey:Rh,global:_t,isContextDefined:Mh,ALPHABET:Bh,generateString:Fg,isSpecCompliantForm:Wg,toJSONObject:Jg,isAsyncFn:Ug,isThenable:zg,setImmediate:Fh,asap:_g};function A(t,n,i,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}y.inherits(A,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:y.toJSONObject(this.config),code:this.code,status:this.status}}});const Wh=A.prototype,Jh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Jh[t]={value:t}});Object.defineProperties(A,Jh);Object.defineProperty(Wh,"isAxiosError",{value:!0});A.from=(t,n,i,r,s,o)=>{const l=Object.create(Wh);return y.toFlatObject(t,l,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),A.call(l,t.message,n,i,r,s),l.cause=t,l.name=t.name,o&&Object.assign(l,o),l};const qg=null;function rl(t){return y.isPlainObject(t)||y.isArray(t)}function Uh(t){return y.endsWith(t,"[]")?t.slice(0,-2):t}function Jc(t,n,i){return t?t.concat(n).map(function(s,o){return s=Uh(s),!i&&o?"["+s+"]":s}).join(i?".":""):n}function Hg(t){return y.isArray(t)&&!t.some(rl)}const Vg=y.toFlatObject(y,{},null,function(n){return/^is[A-Z]/.test(n)});function bs(t,n,i){if(!y.isObject(t))throw new TypeError("target must be an object");n=n||new FormData,i=y.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(j,v){return!y.isUndefined(v[j])});const r=i.metaTokens,s=i.visitor||u,o=i.dots,l=i.indexes,c=(i.Blob||typeof Blob<"u"&&Blob)&&y.isSpecCompliantForm(n);if(!y.isFunction(s))throw new TypeError("visitor must be a function");function d(g){if(g===null)return"";if(y.isDate(g))return g.toISOString();if(!c&&y.isBlob(g))throw new A("Blob is not supported. Use a Buffer instead.");return y.isArrayBuffer(g)||y.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,j,v){let m=g;if(g&&!v&&typeof g=="object"){if(y.endsWith(j,"{}"))j=r?j:j.slice(0,-2),g=JSON.stringify(g);else if(y.isArray(g)&&Hg(g)||(y.isFileList(g)||y.endsWith(j,"[]"))&&(m=y.toArray(g)))return j=Uh(j),m.forEach(function(f,w){!(y.isUndefined(f)||f===null)&&n.append(l===!0?Jc([j],w,o):l===null?j:j+"[]",d(f))}),!1}return rl(g)?!0:(n.append(Jc(v,j,o),d(g)),!1)}const h=[],x=Object.assign(Vg,{defaultVisitor:u,convertValue:d,isVisitable:rl});function b(g,j){if(!y.isUndefined(g)){if(h.indexOf(g)!==-1)throw Error("Circular reference detected in "+j.join("."));h.push(g),y.forEach(g,function(m,p){(!(y.isUndefined(m)||m===null)&&s.call(n,m,y.isString(p)?p.trim():p,j,x))===!0&&b(m,j?j.concat(p):[p])}),h.pop()}}if(!y.isObject(t))throw new TypeError("data must be an object");return b(t),n}function Uc(t){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return n[r]})}function ua(t,n){this._pairs=[],t&&bs(t,this,n)}const zh=ua.prototype;zh.append=function(n,i){this._pairs.push([n,i])};zh.toString=function(n){const i=n?function(r){return n.call(this,r,Uc)}:Uc;return this._pairs.map(function(s){return i(s[0])+"="+i(s[1])},"").join("&")};function $g(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _h(t,n,i){if(!n)return t;const r=i&&i.encode||$g,s=i&&i.serialize;let o;if(s?o=s(n,i):o=y.isURLSearchParams(n)?n.toString():new ua(n,i).toString(r),o){const l=t.indexOf("#");l!==-1&&(t=t.slice(0,l)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class zc{constructor(){this.handlers=[]}use(n,i,r){return this.handlers.push({fulfilled:n,rejected:i,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){y.forEach(this.handlers,function(r){r!==null&&n(r)})}}const qh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gg=typeof URLSearchParams<"u"?URLSearchParams:ua,Xg=typeof FormData<"u"?FormData:null,Kg=typeof Blob<"u"?Blob:null,Qg={isBrowser:!0,classes:{URLSearchParams:Gg,FormData:Xg,Blob:Kg},protocols:["http","https","file","blob","url","data"]},ha=typeof window<"u"&&typeof document<"u",sl=typeof navigator=="object"&&navigator||void 0,Yg=ha&&(!sl||["ReactNative","NativeScript","NS"].indexOf(sl.product)<0),Zg=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ej=ha&&window.location.href||"http://localhost",tj=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ha,hasStandardBrowserEnv:Yg,hasStandardBrowserWebWorkerEnv:Zg,navigator:sl,origin:ej},Symbol.toStringTag,{value:"Module"})),be={...tj,...Qg};function nj(t,n){return bs(t,new be.classes.URLSearchParams,Object.assign({visitor:function(i,r,s,o){return be.isNode&&y.isBuffer(i)?(this.append(r,i.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},n))}function ij(t){return y.matchAll(/\w+|\[(\w*)]/g,t).map(n=>n[0]==="[]"?"":n[1]||n[0])}function rj(t){const n={},i=Object.keys(t);let r;const s=i.length;let o;for(r=0;r<s;r++)o=i[r],n[o]=t[o];return n}function Hh(t){function n(i,r,s,o){let l=i[o++];if(l==="__proto__")return!0;const a=Number.isFinite(+l),c=o>=i.length;return l=!l&&y.isArray(s)?s.length:l,c?(y.hasOwnProp(s,l)?s[l]=[s[l],r]:s[l]=r,!a):((!s[l]||!y.isObject(s[l]))&&(s[l]=[]),n(i,r,s[l],o)&&y.isArray(s[l])&&(s[l]=rj(s[l])),!a)}if(y.isFormData(t)&&y.isFunction(t.entries)){const i={};return y.forEachEntry(t,(r,s)=>{n(ij(r),s,i,0)}),i}return null}function sj(t,n,i){if(y.isString(t))try{return(n||JSON.parse)(t),y.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const Fi={transitional:qh,adapter:["xhr","http","fetch"],transformRequest:[function(n,i){const r=i.getContentType()||"",s=r.indexOf("application/json")>-1,o=y.isObject(n);if(o&&y.isHTMLForm(n)&&(n=new FormData(n)),y.isFormData(n))return s?JSON.stringify(Hh(n)):n;if(y.isArrayBuffer(n)||y.isBuffer(n)||y.isStream(n)||y.isFile(n)||y.isBlob(n)||y.isReadableStream(n))return n;if(y.isArrayBufferView(n))return n.buffer;if(y.isURLSearchParams(n))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return nj(n,this.formSerializer).toString();if((a=y.isFileList(n))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return bs(a?{"files[]":n}:n,c&&new c,this.formSerializer)}}return o||s?(i.setContentType("application/json",!1),sj(n)):n}],transformResponse:[function(n){const i=this.transitional||Fi.transitional,r=i&&i.forcedJSONParsing,s=this.responseType==="json";if(y.isResponse(n)||y.isReadableStream(n))return n;if(n&&y.isString(n)&&(r&&!this.responseType||s)){const l=!(i&&i.silentJSONParsing)&&s;try{return JSON.parse(n)}catch(a){if(l)throw a.name==="SyntaxError"?A.from(a,A.ERR_BAD_RESPONSE,this,null,this.response):a}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:be.classes.FormData,Blob:be.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};y.forEach(["delete","get","head","post","put","patch"],t=>{Fi.headers[t]={}});const oj=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lj=t=>{const n={};let i,r,s;return t&&t.split(`
`).forEach(function(l){s=l.indexOf(":"),i=l.substring(0,s).trim().toLowerCase(),r=l.substring(s+1).trim(),!(!i||n[i]&&oj[i])&&(i==="set-cookie"?n[i]?n[i].push(r):n[i]=[r]:n[i]=n[i]?n[i]+", "+r:r)}),n},_c=Symbol("internals");function Gn(t){return t&&String(t).trim().toLowerCase()}function vr(t){return t===!1||t==null?t:y.isArray(t)?t.map(vr):String(t)}function aj(t){const n=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=i.exec(t);)n[r[1]]=r[2];return n}const cj=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function to(t,n,i,r,s){if(y.isFunction(r))return r.call(this,n,i);if(s&&(n=i),!!y.isString(n)){if(y.isString(r))return n.indexOf(r)!==-1;if(y.isRegExp(r))return r.test(n)}}function dj(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,i,r)=>i.toUpperCase()+r)}function uj(t,n){const i=y.toCamelCase(" "+n);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+i,{value:function(s,o,l){return this[r].call(this,n,s,o,l)},configurable:!0})})}class we{constructor(n){n&&this.set(n)}set(n,i,r){const s=this;function o(a,c,d){const u=Gn(c);if(!u)throw new Error("header name must be a non-empty string");const h=y.findKey(s,u);(!h||s[h]===void 0||d===!0||d===void 0&&s[h]!==!1)&&(s[h||c]=vr(a))}const l=(a,c)=>y.forEach(a,(d,u)=>o(d,u,c));if(y.isPlainObject(n)||n instanceof this.constructor)l(n,i);else if(y.isString(n)&&(n=n.trim())&&!cj(n))l(lj(n),i);else if(y.isHeaders(n))for(const[a,c]of n.entries())o(c,a,r);else n!=null&&o(i,n,r);return this}get(n,i){if(n=Gn(n),n){const r=y.findKey(this,n);if(r){const s=this[r];if(!i)return s;if(i===!0)return aj(s);if(y.isFunction(i))return i.call(this,s,r);if(y.isRegExp(i))return i.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,i){if(n=Gn(n),n){const r=y.findKey(this,n);return!!(r&&this[r]!==void 0&&(!i||to(this,this[r],r,i)))}return!1}delete(n,i){const r=this;let s=!1;function o(l){if(l=Gn(l),l){const a=y.findKey(r,l);a&&(!i||to(r,r[a],a,i))&&(delete r[a],s=!0)}}return y.isArray(n)?n.forEach(o):o(n),s}clear(n){const i=Object.keys(this);let r=i.length,s=!1;for(;r--;){const o=i[r];(!n||to(this,this[o],o,n,!0))&&(delete this[o],s=!0)}return s}normalize(n){const i=this,r={};return y.forEach(this,(s,o)=>{const l=y.findKey(r,o);if(l){i[l]=vr(s),delete i[o];return}const a=n?dj(o):String(o).trim();a!==o&&delete i[o],i[a]=vr(s),r[a]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const i=Object.create(null);return y.forEach(this,(r,s)=>{r!=null&&r!==!1&&(i[s]=n&&y.isArray(r)?r.join(", "):r)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,i])=>n+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...i){const r=new this(n);return i.forEach(s=>r.set(s)),r}static accessor(n){const r=(this[_c]=this[_c]={accessors:{}}).accessors,s=this.prototype;function o(l){const a=Gn(l);r[a]||(uj(s,l),r[a]=!0)}return y.isArray(n)?n.forEach(o):o(n),this}}we.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.reduceDescriptors(we.prototype,({value:t},n)=>{let i=n[0].toUpperCase()+n.slice(1);return{get:()=>t,set(r){this[i]=r}}});y.freezeMethods(we);function no(t,n){const i=this||Fi,r=n||i,s=we.from(r.headers);let o=r.data;return y.forEach(t,function(a){o=a.call(i,o,s.normalize(),n?n.status:void 0)}),s.normalize(),o}function Vh(t){return!!(t&&t.__CANCEL__)}function Bn(t,n,i){A.call(this,t??"canceled",A.ERR_CANCELED,n,i),this.name="CanceledError"}y.inherits(Bn,A,{__CANCEL__:!0});function $h(t,n,i){const r=i.config.validateStatus;!i.status||!r||r(i.status)?t(i):n(new A("Request failed with status code "+i.status,[A.ERR_BAD_REQUEST,A.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function hj(t){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return n&&n[1]||""}function pj(t,n){t=t||10;const i=new Array(t),r=new Array(t);let s=0,o=0,l;return n=n!==void 0?n:1e3,function(c){const d=Date.now(),u=r[o];l||(l=d),i[s]=c,r[s]=d;let h=o,x=0;for(;h!==s;)x+=i[h++],h=h%t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),d-l<n)return;const b=u&&d-u;return b?Math.round(x*1e3/b):void 0}}function mj(t,n){let i=0,r=1e3/n,s,o;const l=(d,u=Date.now())=>{i=u,s=null,o&&(clearTimeout(o),o=null),t.apply(null,d)};return[(...d)=>{const u=Date.now(),h=u-i;h>=r?l(d,u):(s=d,o||(o=setTimeout(()=>{o=null,l(s)},r-h)))},()=>s&&l(s)]}const Xr=(t,n,i=3)=>{let r=0;const s=pj(50,250);return mj(o=>{const l=o.loaded,a=o.lengthComputable?o.total:void 0,c=l-r,d=s(c),u=l<=a;r=l;const h={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:d||void 0,estimated:d&&a&&u?(a-l)/d:void 0,event:o,lengthComputable:a!=null,[n?"download":"upload"]:!0};t(h)},i)},qc=(t,n)=>{const i=t!=null;return[r=>n[0]({lengthComputable:i,total:t,loaded:r}),n[1]]},Hc=t=>(...n)=>y.asap(()=>t(...n)),fj=be.hasStandardBrowserEnv?function(){const n=be.navigator&&/(msie|trident)/i.test(be.navigator.userAgent),i=document.createElement("a");let r;function s(o){let l=o;return n&&(i.setAttribute("href",l),l=i.href),i.setAttribute("href",l),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return r=s(window.location.href),function(l){const a=y.isString(l)?s(l):l;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),xj=be.hasStandardBrowserEnv?{write(t,n,i,r,s,o){const l=[t+"="+encodeURIComponent(n)];y.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),y.isString(r)&&l.push("path="+r),y.isString(s)&&l.push("domain="+s),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read(t){const n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function gj(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function jj(t,n){return n?t.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):t}function Gh(t,n){return t&&!gj(n)?jj(t,n):n}const Vc=t=>t instanceof we?{...t}:t;function Yt(t,n){n=n||{};const i={};function r(d,u,h){return y.isPlainObject(d)&&y.isPlainObject(u)?y.merge.call({caseless:h},d,u):y.isPlainObject(u)?y.merge({},u):y.isArray(u)?u.slice():u}function s(d,u,h){if(y.isUndefined(u)){if(!y.isUndefined(d))return r(void 0,d,h)}else return r(d,u,h)}function o(d,u){if(!y.isUndefined(u))return r(void 0,u)}function l(d,u){if(y.isUndefined(u)){if(!y.isUndefined(d))return r(void 0,d)}else return r(void 0,u)}function a(d,u,h){if(h in n)return r(d,u);if(h in t)return r(void 0,d)}const c={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:a,headers:(d,u)=>s(Vc(d),Vc(u),!0)};return y.forEach(Object.keys(Object.assign({},t,n)),function(u){const h=c[u]||s,x=h(t[u],n[u],u);y.isUndefined(x)&&h!==a||(i[u]=x)}),i}const Xh=t=>{const n=Yt({},t);let{data:i,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:l,auth:a}=n;n.headers=l=we.from(l),n.url=_h(Gh(n.baseURL,n.url),t.params,t.paramsSerializer),a&&l.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(y.isFormData(i)){if(be.hasStandardBrowserEnv||be.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((c=l.getContentType())!==!1){const[d,...u]=c?c.split(";").map(h=>h.trim()).filter(Boolean):[];l.setContentType([d||"multipart/form-data",...u].join("; "))}}if(be.hasStandardBrowserEnv&&(r&&y.isFunction(r)&&(r=r(n)),r||r!==!1&&fj(n.url))){const d=s&&o&&xj.read(o);d&&l.set(s,d)}return n},vj=typeof XMLHttpRequest<"u",yj=vj&&function(t){return new Promise(function(i,r){const s=Xh(t);let o=s.data;const l=we.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:d}=s,u,h,x,b,g;function j(){b&&b(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let v=new XMLHttpRequest;v.open(s.method.toUpperCase(),s.url,!0),v.timeout=s.timeout;function m(){if(!v)return;const f=we.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:f,config:t,request:v};$h(function(P){i(P),j()},function(P){r(P),j()},C),v=null}"onloadend"in v?v.onloadend=m:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(m)},v.onabort=function(){v&&(r(new A("Request aborted",A.ECONNABORTED,t,v)),v=null)},v.onerror=function(){r(new A("Network Error",A.ERR_NETWORK,t,v)),v=null},v.ontimeout=function(){let w=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const C=s.transitional||qh;s.timeoutErrorMessage&&(w=s.timeoutErrorMessage),r(new A(w,C.clarifyTimeoutError?A.ETIMEDOUT:A.ECONNABORTED,t,v)),v=null},o===void 0&&l.setContentType(null),"setRequestHeader"in v&&y.forEach(l.toJSON(),function(w,C){v.setRequestHeader(C,w)}),y.isUndefined(s.withCredentials)||(v.withCredentials=!!s.withCredentials),a&&a!=="json"&&(v.responseType=s.responseType),d&&([x,g]=Xr(d,!0),v.addEventListener("progress",x)),c&&v.upload&&([h,b]=Xr(c),v.upload.addEventListener("progress",h),v.upload.addEventListener("loadend",b)),(s.cancelToken||s.signal)&&(u=f=>{v&&(r(!f||f.type?new Bn(null,t,v):f),v.abort(),v=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const p=hj(s.url);if(p&&be.protocols.indexOf(p)===-1){r(new A("Unsupported protocol "+p+":",A.ERR_BAD_REQUEST,t));return}v.send(o||null)})},bj=(t,n)=>{const{length:i}=t=t?t.filter(Boolean):[];if(n||i){let r=new AbortController,s;const o=function(d){if(!s){s=!0,a();const u=d instanceof Error?d:this.reason;r.abort(u instanceof A?u:new Bn(u instanceof Error?u.message:u))}};let l=n&&setTimeout(()=>{l=null,o(new A(`timeout ${n} of ms exceeded`,A.ETIMEDOUT))},n);const a=()=>{t&&(l&&clearTimeout(l),l=null,t.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),t=null)};t.forEach(d=>d.addEventListener("abort",o));const{signal:c}=r;return c.unsubscribe=()=>y.asap(a),c}},wj=function*(t,n){let i=t.byteLength;if(i<n){yield t;return}let r=0,s;for(;r<i;)s=r+n,yield t.slice(r,s),r=s},Sj=async function*(t,n){for await(const i of Ej(t))yield*wj(i,n)},Ej=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const n=t.getReader();try{for(;;){const{done:i,value:r}=await n.read();if(i)break;yield r}}finally{await n.cancel()}},$c=(t,n,i,r)=>{const s=Sj(t,n);let o=0,l,a=c=>{l||(l=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:d,value:u}=await s.next();if(d){a(),c.close();return}let h=u.byteLength;if(i){let x=o+=h;i(x)}c.enqueue(new Uint8Array(u))}catch(d){throw a(d),d}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},ws=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Kh=ws&&typeof ReadableStream=="function",Cj=ws&&(typeof TextEncoder=="function"?(t=>n=>t.encode(n))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Qh=(t,...n)=>{try{return!!t(...n)}catch{return!1}},kj=Kh&&Qh(()=>{let t=!1;const n=new Request(be.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!n}),Gc=64*1024,ol=Kh&&Qh(()=>y.isReadableStream(new Response("").body)),Kr={stream:ol&&(t=>t.body)};ws&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!Kr[n]&&(Kr[n]=y.isFunction(t[n])?i=>i[n]():(i,r)=>{throw new A(`Response type '${n}' is not supported`,A.ERR_NOT_SUPPORT,r)})})})(new Response);const Tj=async t=>{if(t==null)return 0;if(y.isBlob(t))return t.size;if(y.isSpecCompliantForm(t))return(await new Request(be.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(y.isArrayBufferView(t)||y.isArrayBuffer(t))return t.byteLength;if(y.isURLSearchParams(t)&&(t=t+""),y.isString(t))return(await Cj(t)).byteLength},Pj=async(t,n)=>{const i=y.toFiniteNumber(t.getContentLength());return i??Tj(n)},Ij=ws&&(async t=>{let{url:n,method:i,data:r,signal:s,cancelToken:o,timeout:l,onDownloadProgress:a,onUploadProgress:c,responseType:d,headers:u,withCredentials:h="same-origin",fetchOptions:x}=Xh(t);d=d?(d+"").toLowerCase():"text";let b=bj([s,o&&o.toAbortSignal()],l),g;const j=b&&b.unsubscribe&&(()=>{b.unsubscribe()});let v;try{if(c&&kj&&i!=="get"&&i!=="head"&&(v=await Pj(u,r))!==0){let C=new Request(n,{method:"POST",body:r,duplex:"half"}),k;if(y.isFormData(r)&&(k=C.headers.get("content-type"))&&u.setContentType(k),C.body){const[P,D]=qc(v,Xr(Hc(c)));r=$c(C.body,Gc,P,D)}}y.isString(h)||(h=h?"include":"omit");const m="credentials"in Request.prototype;g=new Request(n,{...x,signal:b,method:i.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:m?h:void 0});let p=await fetch(g);const f=ol&&(d==="stream"||d==="response");if(ol&&(a||f&&j)){const C={};["status","statusText","headers"].forEach(U=>{C[U]=p[U]});const k=y.toFiniteNumber(p.headers.get("content-length")),[P,D]=a&&qc(k,Xr(Hc(a),!0))||[];p=new Response($c(p.body,Gc,P,()=>{D&&D(),j&&j()}),C)}d=d||"text";let w=await Kr[y.findKey(Kr,d)||"text"](p,t);return!f&&j&&j(),await new Promise((C,k)=>{$h(C,k,{data:w,headers:we.from(p.headers),status:p.status,statusText:p.statusText,config:t,request:g})})}catch(m){throw j&&j(),m&&m.name==="TypeError"&&/fetch/i.test(m.message)?Object.assign(new A("Network Error",A.ERR_NETWORK,t,g),{cause:m.cause||m}):A.from(m,m&&m.code,t,g)}}),ll={http:qg,xhr:yj,fetch:Ij};y.forEach(ll,(t,n)=>{if(t){try{Object.defineProperty(t,"name",{value:n})}catch{}Object.defineProperty(t,"adapterName",{value:n})}});const Xc=t=>`- ${t}`,Dj=t=>y.isFunction(t)||t===null||t===!1,Yh={getAdapter:t=>{t=y.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let o=0;o<n;o++){i=t[o];let l;if(r=i,!Dj(i)&&(r=ll[(l=String(i)).toLowerCase()],r===void 0))throw new A(`Unknown adapter '${l}'`);if(r)break;s[l||"#"+o]=r}if(!r){const o=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=n?o.length>1?`since :
`+o.map(Xc).join(`
`):" "+Xc(o[0]):"as no adapter specified";throw new A("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:ll};function io(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Bn(null,t)}function Kc(t){return io(t),t.headers=we.from(t.headers),t.data=no.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Yh.getAdapter(t.adapter||Fi.adapter)(t).then(function(r){return io(t),r.data=no.call(t,t.transformResponse,r),r.headers=we.from(r.headers),r},function(r){return Vh(r)||(io(t),r&&r.response&&(r.response.data=no.call(t,t.transformResponse,r.response),r.response.headers=we.from(r.response.headers))),Promise.reject(r)})}const Zh="1.7.7",pa={};["object","boolean","number","function","string","symbol"].forEach((t,n)=>{pa[t]=function(r){return typeof r===t||"a"+(n<1?"n ":" ")+t}});const Qc={};pa.transitional=function(n,i,r){function s(o,l){return"[Axios v"+Zh+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,a)=>{if(n===!1)throw new A(s(l," has been removed"+(i?" in "+i:"")),A.ERR_DEPRECATED);return i&&!Qc[l]&&(Qc[l]=!0,console.warn(s(l," has been deprecated since v"+i+" and will be removed in the near future"))),n?n(o,l,a):!0}};function Aj(t,n,i){if(typeof t!="object")throw new A("options must be an object",A.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const o=r[s],l=n[o];if(l){const a=t[o],c=a===void 0||l(a,o,t);if(c!==!0)throw new A("option "+o+" must be "+c,A.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new A("Unknown option "+o,A.ERR_BAD_OPTION)}}const al={assertOptions:Aj,validators:pa},ut=al.validators;class Vt{constructor(n){this.defaults=n,this.interceptors={request:new zc,response:new zc}}async request(n,i){try{return await this._request(n,i)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(n,i){typeof n=="string"?(i=i||{},i.url=n):i=n||{},i=Yt(this.defaults,i);const{transitional:r,paramsSerializer:s,headers:o}=i;r!==void 0&&al.assertOptions(r,{silentJSONParsing:ut.transitional(ut.boolean),forcedJSONParsing:ut.transitional(ut.boolean),clarifyTimeoutError:ut.transitional(ut.boolean)},!1),s!=null&&(y.isFunction(s)?i.paramsSerializer={serialize:s}:al.assertOptions(s,{encode:ut.function,serialize:ut.function},!0)),i.method=(i.method||this.defaults.method||"get").toLowerCase();let l=o&&y.merge(o.common,o[i.method]);o&&y.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),i.headers=we.concat(l,o);const a=[];let c=!0;this.interceptors.request.forEach(function(j){typeof j.runWhen=="function"&&j.runWhen(i)===!1||(c=c&&j.synchronous,a.unshift(j.fulfilled,j.rejected))});const d=[];this.interceptors.response.forEach(function(j){d.push(j.fulfilled,j.rejected)});let u,h=0,x;if(!c){const g=[Kc.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,d),x=g.length,u=Promise.resolve(i);h<x;)u=u.then(g[h++],g[h++]);return u}x=a.length;let b=i;for(h=0;h<x;){const g=a[h++],j=a[h++];try{b=g(b)}catch(v){j.call(this,v);break}}try{u=Kc.call(this,b)}catch(g){return Promise.reject(g)}for(h=0,x=d.length;h<x;)u=u.then(d[h++],d[h++]);return u}getUri(n){n=Yt(this.defaults,n);const i=Gh(n.baseURL,n.url);return _h(i,n.params,n.paramsSerializer)}}y.forEach(["delete","get","head","options"],function(n){Vt.prototype[n]=function(i,r){return this.request(Yt(r||{},{method:n,url:i,data:(r||{}).data}))}});y.forEach(["post","put","patch"],function(n){function i(r){return function(o,l,a){return this.request(Yt(a||{},{method:n,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}Vt.prototype[n]=i(),Vt.prototype[n+"Form"]=i(!0)});class ma{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(o){i=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const l=new Promise(a=>{r.subscribe(a),o=a}).then(s);return l.cancel=function(){r.unsubscribe(o)},l},n(function(o,l,a){r.reason||(r.reason=new Bn(o,l,a),i(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const i=this._listeners.indexOf(n);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const n=new AbortController,i=r=>{n.abort(r)};return this.subscribe(i),n.signal.unsubscribe=()=>this.unsubscribe(i),n.signal}static source(){let n;return{token:new ma(function(s){n=s}),cancel:n}}}function Oj(t){return function(i){return t.apply(null,i)}}function Nj(t){return y.isObject(t)&&t.isAxiosError===!0}const cl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(cl).forEach(([t,n])=>{cl[n]=t});function ep(t){const n=new Vt(t),i=Ah(Vt.prototype.request,n);return y.extend(i,Vt.prototype,n,{allOwnKeys:!0}),y.extend(i,n,null,{allOwnKeys:!0}),i.create=function(s){return ep(Yt(t,s))},i}const V=ep(Fi);V.Axios=Vt;V.CanceledError=Bn;V.CancelToken=ma;V.isCancel=Vh;V.VERSION=Zh;V.toFormData=bs;V.AxiosError=A;V.Cancel=V.CanceledError;V.all=function(n){return Promise.all(n)};V.spread=Oj;V.isAxiosError=Nj;V.mergeConfig=Yt;V.AxiosHeaders=we;V.formToJSON=t=>Hh(y.isHTMLForm(t)?new FormData(t):t);V.getAdapter=Yh.getAdapter;V.HttpStatusCode=cl;V.default=V;let Rj={data:""},Mj=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Rj,Lj=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Bj=/\/\*[^]*?\*\/|  +/g,Yc=/\n+/g,xt=(t,n)=>{let i="",r="",s="";for(let o in t){let l=t[o];o[0]=="@"?o[1]=="i"?i=o+" "+l+";":r+=o[1]=="f"?xt(l,o):o+"{"+xt(l,o[1]=="k"?"":n)+"}":typeof l=="object"?r+=xt(l,n?n.replace(/([^,])+/g,a=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,a):a?a+" "+c:c)):o):l!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=xt.p?xt.p(o,l):o+":"+l+";")}return i+(n&&s?n+"{"+s+"}":s)+r},Qe={},tp=t=>{if(typeof t=="object"){let n="";for(let i in t)n+=i+tp(t[i]);return n}return t},Fj=(t,n,i,r,s)=>{let o=tp(t),l=Qe[o]||(Qe[o]=(c=>{let d=0,u=11;for(;d<c.length;)u=101*u+c.charCodeAt(d++)>>>0;return"go"+u})(o));if(!Qe[l]){let c=o!==t?t:(d=>{let u,h,x=[{}];for(;u=Lj.exec(d.replace(Bj,""));)u[4]?x.shift():u[3]?(h=u[3].replace(Yc," ").trim(),x.unshift(x[0][h]=x[0][h]||{})):x[0][u[1]]=u[2].replace(Yc," ").trim();return x[0]})(t);Qe[l]=xt(s?{["@keyframes "+l]:c}:c,i?"":"."+l)}let a=i&&Qe.g?Qe.g:null;return i&&(Qe.g=Qe[l]),((c,d,u,h)=>{h?d.data=d.data.replace(h,c):d.data.indexOf(c)===-1&&(d.data=u?c+d.data:d.data+c)})(Qe[l],n,r,a),l},Wj=(t,n,i)=>t.reduce((r,s,o)=>{let l=n[o];if(l&&l.call){let a=l(i),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;l=c?"."+c:a&&typeof a=="object"?a.props?"":xt(a,""):a===!1?"":a}return r+s+(l??"")},"");function Ss(t){let n=this||{},i=t.call?t(n.p):t;return Fj(i.unshift?i.raw?Wj(i,[].slice.call(arguments,1),n.p):i.reduce((r,s)=>Object.assign(r,s&&s.call?s(n.p):s),{}):i,Mj(n.target),n.g,n.o,n.k)}let np,dl,ul;Ss.bind({g:1});let at=Ss.bind({k:1});function Jj(t,n,i,r){xt.p=n,np=t,dl=i,ul=r}function Rt(t,n){let i=this||{};return function(){let r=arguments;function s(o,l){let a=Object.assign({},o),c=a.className||s.className;i.p=Object.assign({theme:dl&&dl()},a),i.o=/ *go\d+/.test(c),a.className=Ss.apply(i,r)+(c?" "+c:"");let d=t;return t[0]&&(d=a.as||t,delete a.as),ul&&d[0]&&ul(a),np(d,a)}return s}}var Uj=t=>typeof t=="function",Qr=(t,n)=>Uj(t)?t(n):t,zj=(()=>{let t=0;return()=>(++t).toString()})(),ip=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}})(),_j=20,yr=new Map,qj=1e3,Zc=t=>{if(yr.has(t))return;let n=setTimeout(()=>{yr.delete(t),sn({type:4,toastId:t})},qj);yr.set(t,n)},Hj=t=>{let n=yr.get(t);n&&clearTimeout(n)},hl=(t,n)=>{switch(n.type){case 0:return{...t,toasts:[n.toast,...t.toasts].slice(0,_j)};case 1:return n.toast.id&&Hj(n.toast.id),{...t,toasts:t.toasts.map(o=>o.id===n.toast.id?{...o,...n.toast}:o)};case 2:let{toast:i}=n;return t.toasts.find(o=>o.id===i.id)?hl(t,{type:1,toast:i}):hl(t,{type:0,toast:i});case 3:let{toastId:r}=n;return r?Zc(r):t.toasts.forEach(o=>{Zc(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===r||r===void 0?{...o,visible:!1}:o)};case 4:return n.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==n.toastId)};case 5:return{...t,pausedAt:n.time};case 6:let s=n.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},br=[],wr={toasts:[],pausedAt:void 0},sn=t=>{wr=hl(wr,t),br.forEach(n=>{n(wr)})},Vj={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$j=(t={})=>{let[n,i]=S.useState(wr);S.useEffect(()=>(br.push(i),()=>{let s=br.indexOf(i);s>-1&&br.splice(s,1)}),[n]);let r=n.toasts.map(s=>{var o,l;return{...t,...t[s.type],...s,duration:s.duration||((o=t[s.type])==null?void 0:o.duration)||(t==null?void 0:t.duration)||Vj[s.type],style:{...t.style,...(l=t[s.type])==null?void 0:l.style,...s.style}}});return{...n,toasts:r}},Gj=(t,n="blank",i)=>({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...i,id:(i==null?void 0:i.id)||zj()}),Wi=t=>(n,i)=>{let r=Gj(n,t,i);return sn({type:2,toast:r}),r.id},he=(t,n)=>Wi("blank")(t,n);he.error=Wi("error");he.success=Wi("success");he.loading=Wi("loading");he.custom=Wi("custom");he.dismiss=t=>{sn({type:3,toastId:t})};he.remove=t=>sn({type:4,toastId:t});he.promise=(t,n,i)=>{let r=he.loading(n.loading,{...i,...i==null?void 0:i.loading});return t.then(s=>(he.success(Qr(n.success,s),{id:r,...i,...i==null?void 0:i.success}),s)).catch(s=>{he.error(Qr(n.error,s),{id:r,...i,...i==null?void 0:i.error})}),t};var Xj=(t,n)=>{sn({type:1,toast:{id:t,height:n}})},Kj=()=>{sn({type:5,time:Date.now()})},Qj=t=>{let{toasts:n,pausedAt:i}=$j(t);S.useEffect(()=>{if(i)return;let o=Date.now(),l=n.map(a=>{if(a.duration===1/0)return;let c=(a.duration||0)+a.pauseDuration-(o-a.createdAt);if(c<0){a.visible&&he.dismiss(a.id);return}return setTimeout(()=>he.dismiss(a.id),c)});return()=>{l.forEach(a=>a&&clearTimeout(a))}},[n,i]);let r=S.useCallback(()=>{i&&sn({type:6,time:Date.now()})},[i]),s=S.useCallback((o,l)=>{let{reverseOrder:a=!1,gutter:c=8,defaultPosition:d}=l||{},u=n.filter(b=>(b.position||d)===(o.position||d)&&b.height),h=u.findIndex(b=>b.id===o.id),x=u.filter((b,g)=>g<h&&b.visible).length;return u.filter(b=>b.visible).slice(...a?[x+1]:[0,x]).reduce((b,g)=>b+(g.height||0)+c,0)},[n]);return{toasts:n,handlers:{updateHeight:Xj,startPause:Kj,endPause:r,calculateOffset:s}}},Yj=at`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Zj=at`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ev=at`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,tv=Rt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Yj} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Zj} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ev} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,nv=at`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,iv=Rt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${nv} 1s linear infinite;
`,rv=at`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,sv=at`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ov=Rt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${rv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${sv} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,lv=Rt("div")`
  position: absolute;
`,av=Rt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,cv=at`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,dv=Rt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${cv} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,uv=({toast:t})=>{let{icon:n,type:i,iconTheme:r}=t;return n!==void 0?typeof n=="string"?S.createElement(dv,null,n):n:i==="blank"?null:S.createElement(av,null,S.createElement(iv,{...r}),i!=="loading"&&S.createElement(lv,null,i==="error"?S.createElement(tv,{...r}):S.createElement(ov,{...r})))},hv=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,pv=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,mv="0%{opacity:0;} 100%{opacity:1;}",fv="0%{opacity:1;} 100%{opacity:0;}",xv=Rt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,gv=Rt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,jv=(t,n)=>{let i=t.includes("top")?1:-1,[r,s]=ip()?[mv,fv]:[hv(i),pv(i)];return{animation:n?`${at(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${at(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},vv=S.memo(({toast:t,position:n,style:i,children:r})=>{let s=t.height?jv(t.position||n||"top-center",t.visible):{opacity:0},o=S.createElement(uv,{toast:t}),l=S.createElement(gv,{...t.ariaProps},Qr(t.message,t));return S.createElement(xv,{className:t.className,style:{...s,...i,...t.style}},typeof r=="function"?r({icon:o,message:l}):S.createElement(S.Fragment,null,o,l))});Jj(S.createElement);var yv=({id:t,className:n,style:i,onHeightUpdate:r,children:s})=>{let o=S.useCallback(l=>{if(l){let a=()=>{let c=l.getBoundingClientRect().height;r(t,c)};a(),new MutationObserver(a).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return S.createElement("div",{ref:o,className:n,style:i},s)},bv=(t,n)=>{let i=t.includes("top"),r=i?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ip()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${n*(i?1:-1)}px)`,...r,...s}},wv=Ss`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,sr=16,Sv=({reverseOrder:t,position:n="top-center",toastOptions:i,gutter:r,children:s,containerStyle:o,containerClassName:l})=>{let{toasts:a,handlers:c}=Qj(i);return S.createElement("div",{style:{position:"fixed",zIndex:9999,top:sr,left:sr,right:sr,bottom:sr,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},a.map(d=>{let u=d.position||n,h=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:n}),x=bv(u,h);return S.createElement(yv,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?wv:"",style:x},d.type==="custom"?Qr(d.message,d):s?s(d):S.createElement(vv,{toast:d,position:u}))}))},ed=he;const rp="/assets/logo-D7vIHjWw.png";var sp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},td=nt.createContext&&nt.createContext(sp),Ev=["attr","size","title"];function Cv(t,n){if(t==null)return{};var i=kv(t,n),r,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)r=o[s],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function kv(t,n){if(t==null)return{};var i={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(n.indexOf(r)>=0)continue;i[r]=t[r]}return i}function Yr(){return Yr=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},Yr.apply(this,arguments)}function nd(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,r)}return i}function Zr(t){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?nd(Object(i),!0).forEach(function(r){Tv(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):nd(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function Tv(t,n,i){return n=Pv(n),n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function Pv(t){var n=Iv(t,"string");return typeof n=="symbol"?n:n+""}function Iv(t,n){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function op(t){return t&&t.map((n,i)=>nt.createElement(n.tag,Zr({key:i},n.attr),op(n.child)))}function Mt(t){return n=>nt.createElement(Dv,Yr({attr:Zr({},t.attr)},n),op(t.child))}function Dv(t){var n=i=>{var{attr:r,size:s,title:o}=t,l=Cv(t,Ev),a=s||i.size||"1em",c;return i.className&&(c=i.className),t.className&&(c=(c?c+" ":"")+t.className),nt.createElement("svg",Yr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,l,{className:c,style:Zr(Zr({color:t.color||i.color},i.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&nt.createElement("title",null,o),t.children)};return td!==void 0?nt.createElement(td.Consumer,null,i=>n(i)):n(sp)}function Av(t){return Mt({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function lp(t){return Mt({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(t)}function Ov(t){return Mt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}function Nv(t){return Mt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(t)}function Rv(t){return Mt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(t)}function ap(t){return Mt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(t)}function Mv(t){return Mt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}function cp(t){return Mt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"},child:[]},{tag:"path",attr:{d:"M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"},child:[]}]})(t)}function Lv(){const t=rn(),[n,i]=S.useState({name:"",email:"",password:""}),r=async s=>{s.preventDefault();const{name:o,email:l,password:a}=n;try{const c=await V.post("/register",{email:l,password:a,name:o});c.error?he.error(c.error):(i({}),he.success("Registration successful"),t("/login"))}catch(c){console.log(c)}};return e.jsxs("section",{className:"register",children:[e.jsxs(ca,{to:"/",children:[" ",e.jsx("img",{src:rp,alt:"",className:"logo"})]}),e.jsxs("div",{className:"register-container",children:[e.jsx("div",{className:"register-details",children:e.jsxs("h1",{children:["Become an Automation Engineer! ",e.jsx("br",{}),"Enroll now💚"]})}),e.jsxs("div",{className:"registration",children:[e.jsx("div",{className:"sign-up",children:e.jsx("h1",{className:"sign-up-head",children:"Create Your Account"})}),e.jsxs("button",{className:"google",children:["Continue with Google ",e.jsx(lp,{})]}),e.jsxs("form",{onSubmit:r,className:"sign-up-form",children:[e.jsxs("div",{className:"sign-up-name",children:[e.jsx("span",{children:e.jsx(Mv,{})}),e.jsx("input",{type:"text",placeholder:"Enter your name",value:n.name,onChange:s=>i({...n,name:s.target.value})})]}),e.jsxs("div",{className:"sign-up-mail",children:[e.jsx("span",{children:e.jsx(cp,{})}),e.jsx("input",{type:"email",placeholder:"Enter your email",value:n.email,onChange:s=>i({...n,email:s.target.value})})]}),e.jsxs("div",{className:"sign-up-password",children:[e.jsx("span",{children:e.jsx(ap,{})}),e.jsx("input",{type:"password",placeholder:"Enter your password",value:n.password,onChange:s=>i({...n,password:s.target.value})})]}),e.jsx("div",{className:"sign-up-links",children:e.jsx("label",{htmlFor:"",className:"forgot",children:"Forgot your password?"})}),e.jsx("button",{className:"signup",type:"submit",children:"Sign up"})]})]})]})]})}function Bv(){const t=rn(),[n,i]=S.useState({email:"",password:""}),r=async s=>{s.preventDefault();const{email:o,password:l}=n;try{const{data:a}=await V.post("/dashboard",{email:o,password:l});a.error?ed.error(a.error):(i({}),ed.success("Login successful"),t("/"))}catch{}};return e.jsxs("section",{className:"login",children:[e.jsx(ca,{to:"/",children:e.jsx("img",{src:rp,alt:"",className:"logo"})}),e.jsxs("div",{className:"login-container",children:[e.jsxs("h1",{className:"login-title",children:["Welcome back😀 ",e.jsx("br",{})," Please login using your credentials"]}),e.jsxs("div",{className:"login-content",children:[e.jsx("div",{className:"login-head",children:e.jsx("h1",{children:"Log in to your account"})}),e.jsxs("button",{className:"google1",children:["Continue with Google ",e.jsx(lp,{})]}),e.jsxs("form",{onSubmit:r,className:"login-form",children:[e.jsxs("div",{className:"login-mail",children:[e.jsx("span",{children:e.jsx(cp,{})}),e.jsx("input",{type:"email",placeholder:"Enter your email",value:n.email,onChange:s=>i({...n,email:s.target.value})})]}),e.jsxs("div",{className:"login-password",children:[e.jsx("span",{children:e.jsx(ap,{})}),e.jsx("input",{type:"password",placeholder:"Enter your password",value:n.password,onChange:s=>i({...n,password:s.target.value})})]}),e.jsx("div",{className:"login-links",children:e.jsx("label",{htmlFor:"",className:"forgot",children:"Forgot your password?"})}),e.jsx("button",{className:"signup",type:"submit",children:"Log In"})]})]})]})]})}function Fv(){const t=[{id:1,name:"Rakesh",dateCreated:"2/04/2023",status:"Active"},{id:1,name:"Manish",dateCreated:"2/04/2023",status:"Inactive"},{id:1,name:"Rohit",dateCreated:"2/04/2023",status:"Active"},{id:1,name:"Saurav",dateCreated:"2/04/2023",status:"Inactive"},{id:1,name:"Prince",dateCreated:"2/04/2023",status:"Inactive"}];return e.jsxs("div",{className:"dashboard",children:[e.jsx("h1",{children:"Dashboard"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Date created"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:t.map((n,i)=>e.jsxs("tr",{children:[e.jsx("td",{children:i+1}),e.jsx("td",{children:n.name}),e.jsx("td",{children:n.dateCreated}),e.jsx("td",{children:n.status})]},n.id))})]})]})}const Wv="/assets/java1-BRFGGCGl.png",Jv="/assets/java2-CbWgCtix.png",Uv="/assets/java3-CDW33hWP.png",zv="/assets/java4-Cjm3AWYx.png";function _v(){return e.jsxs("div",{className:"Java",children:[e.jsx("h1",{children:"Presentation to Java"}),e.jsx("p",{children:"Java is an object-oriented, class-based high-level programming language that aims to have the fewest possible number of execution dependencies. It is a general-purpose language that seeks to let application developers type in once, and run anywhere (WORA), implying that compiled Java code can run on all platforms that support Java without the need for recompilation."}),e.jsx("h1",{children:"Overview"}),e.jsx("p",{children:"Initially designed by Sun Microsystems and released in 1995, it has since evolved significantly and is now maintained by Oracle Corporation. Simplicity, portability, stability, and security are some of the attributes making it a popular choice for building a variety of applications ranging from mobile apps to large-scale enterprise systems."}),e.jsx("h1",{children:"Key Highlights of Java"}),e.jsx("h4",{children:"Simple and Familiar"}),e.jsxs("p",{children:["The syntax of Java is mostly derived from C++ with simpler object-oriented facilities with fewer low-level features.",e.jsx("br",{}),"The language avoids complexities like those found in C++, such as pointers and operator overloading, making it easier to learn and use."]}),e.jsx("h4",{children:"Object-Oriented"}),e.jsxs("p",{children:["In Java everything is an object thus it is just purely object-oriented. This helps in arranging the program into a set of objects communicating via methods.",e.jsx("br",{}),"Key principles include encapsulation, inheritance, and polymorphism."]}),e.jsx("h4",{children:"Independence from a Particular Platform"}),e.jsxs("p",{children:["At both the source level and the binary level Java achieves independence from any particular platform.",e.jsx("br",{}),"For instance, Java compiler converts Java code into bytecode which can be executed on whatever platform through Java Virtual Machine (JVM) without minding about the underlying architecture."]}),e.jsx("h4",{children:"Robust and Secure"}),e.jsxs("p",{children:["In addition to having strong memory management system alongside automatic garbage collection feature, early checking for possible errors is also preferred in Java. ",e.jsx("br",{}),"Through this language, explicit pointer usage is avoided yielding a secure environment where inner JVM provides a robust security architecture for all java programs."]}),e.jsx("h4",{children:"Multithreaded"}),e.jsx("p",{children:"Multithreading support of java enables multiple threads of execution to run concurrently and enhance performance of applications especially those that are computationally intensive."}),e.jsx("h4",{children:"High Performance"}),e.jsxs("p",{children:["Though interpreted languages are generally slower than compiled ones, Java bytecode is almost native code in terms of performance. ",e.jsx("br",{}),"This involves converting bytecode to native machine code at runtime by Just-In-Time (JIT) compilers to optimize its performance."]}),e.jsx("h4",{children:"Distributed"}),e.jsx("p",{children:"Java TCP/IP and HTTP/FTP protocols are supported in full via abundant libraries, making distributed computing a reality."}),e.jsx("h4",{children:"Dynamic"}),e.jsx("p",{children:"Java is capable of dynamically linking new class libraries, methods, and objects that provide for its adaptability and extendibility."}),e.jsx("h1",{children:"Java Architecture"}),e.jsx("p",{children:"Java architecture details:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Java Development Kit (JDK)"}),e.jsx("p",{children:"The JDK is a feature-rich software development kit necessary for developing Java applications that comprise the Java Runtime Environment (JRE), an interpreter/loader (Java), a compiler (Javac), an archiver (Jar), a documentation generator (Javadoc), and other tools used in Java programming."}),e.jsx("li",{children:"Java Runtime Environment (JRE)"}),e.jsx("p",{children:"Libraries, and Java Virtual Machine (JVM) among others are some of the features that make JRE run Java programs without any need for special hardware, operating systems, or any other explicit support such as compilers or debuggers."}),e.jsx("li",{children:"Java Virtual Machine (JVM)"}),e.jsxs("p",{children:["JVM is an abstract computing machine enabling a computer to execute a computer program written in Java language; it has three notions: there is specification, implementation, and instance. ",e.jsx("br",{}),"It converts bytecode into machine code and provides the runtime environment needed for running Java applications."]})]}),e.jsx("h1",{children:"Different Versions of Java"}),e.jsx("p",{children:"Java has three main editions:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Java SE (Java Standard Edition)"}),e.jsx("p",{children:"The core aspects of the Java programming language are provided by Java SE. It is responsible for defining everything from low-level classes and objects that are used in network, security, database connection, graphical user interface (GUI) development, and XML parsing."}),e.jsx("li",{children:"Java EE (Java Enterprise Edition)"}),e.jsx("p",{children:"On top of Java SE, this provides an API and a runtime environment for building large-scale, multi-tiered, scalable, reliable, and secure internet applications."}),e.jsx("li",{children:"Java ME (Java Micro Edition)"}),e.jsx("p",{children:"This is a robust and flexible java platform for mobile devices and embedded systems. It is a subset of java SE that provides libraries and APIs specifically designed for use with embedded systems and mobile devices."})]}),e.jsx("h1",{children:"Important Concepts in Java"}),e.jsx("h4",{children:"Classes And Objects"}),e.jsxs("p",{children:["Classes act as blueprints for objects that contain data type structure plus operating methods. ",e.jsx("br",{})," Objects are created using the keyword ‘new’ as instances of classes."]}),e.jsx("h4",{children:"Inheritance"}),e.jsx("p",{children:"By inheriting properties and behaviours from another class, inheritance lets a new class be developed that enhances code reuse as well as the method overriding"}),e.jsx("h4",{children:"Polymorphism"}),e.jsx("p",{children:"With polymorphism, one interface can do many things for different types of objects; these actions are based on the situation."}),e.jsx("h4",{children:"Abstraction"}),e.jsx("p",{children:"Abstraction is all about hiding the intricate details and showing only relevant features of the object to reduce complexity. It has done using abstract classes and interfaces."}),e.jsx("h4",{children:"Encapsulation"}),e.jsx("p",{children:"Data (variables) and code (methods) are bound together as a single unit under encapsulation, whereby the data is made private and hence not visible to the outside world while it can be accessed through public methods."}),e.jsx("h1",{children:"Conclusion"}),e.jsx("p",{children:"Java is defying the odds as far as adaptability is concerned, and its position on this remains strong. No wonder it is one of the most portable, secure, and stable programming languages that enjoys widespread appeal for various applications. Java’s fundamental principles and functionalities should be understood by anyone who wishes to advance in computer programming or software development generally"})]})}const qv=()=>e.jsxs("div",{className:"JavaVariables",children:[e.jsx("h1",{children:"Types of Java Variables"}),e.jsx("p",{children:"Your browser type will tell you which programming language you are using. Java variables are not quite defined. In this way, they do much more than holding values of data; they are an integral part of the programming language. The kind of data that can be held in a particular variable is determined by its type."}),e.jsx("h2",{children:"Variable Types"}),e.jsx("p",{children:"Different groups have their role to play in the language, such as Variable types:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Local Variables"}),e.jsx("li",{children:"Instance Variables (Non-Static Fields)"}),e.jsx("li",{children:"Class Variables (Static Fields)"})]}),e.jsx("h2",{children:"Local Variables"}),e.jsx("p",{children:"Local variables are declared within methods, constructors, or blocks and are created when these entities are constructed but are lost once they are finished. Before using a local variable, it is important to assign it an initial value, as it does not have any default value."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`
public class LocalVariableExample {
    public void display() {
        int localVar = 10; // Local variable
        System.out.println("Local variable: " + localVar);
    }

    public static void main(String[] args) {
        LocalVariableExample example = new LocalVariableExample();
        example.display();
    }
}
`})}),e.jsx("h2",{children:"Instance Variables"}),e.jsx("p",{children:"Instance variables are declared within a class but outside the methods, constructors, or blocks. They are created when an object is instantiated from the class and are destroyed after losing their association with that object. Each instance owns its copy of all instance variables. They do not need to be initialized as they take default values."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`
public class InstanceVariableExample {
    int instanceVar; // Instance variable
    public static void main(String[] args) {
        InstanceVariableExample example = new InstanceVariableExample();
        System.out.println("Instance variable: " + example.instanceVar); // Default value 0
    }
}
`})}),e.jsx("h2",{children:"Class Variables (Static Fields)"}),e.jsxs("p",{children:["Static fields in a class are also called member fields. They are declared outside methods, constructors, or blocks with the",e.jsx("code",{children:"static"})," keyword. Only one instance of a class is created, and all objects share the same copy of the static variable. They can be accessed directly through the class name without requiring an object."]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`
public class StaticVariableExample {
    static int staticVar; // Static variable
    public static void main(String[] args) {
        System.out.println("Static variable: " + StaticVariableExample.staticVar); // Default value 0
    }
}
`})}),e.jsx("h2",{children:"Naming Conventions"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Variable names must begin with A-Z, dollar sign, or underscore."}),e.jsx("li",{children:"Following characters can be a combination of letters, numbers, dollar signs, and underscores."}),e.jsx("li",{children:"Variable names are case-sensitive in Java."}),e.jsxs("li",{children:["They cannot be Java keywords like ",e.jsx("code",{children:"int"}),", ",e.jsx("code",{children:"class"}),", or ",e.jsx("code",{children:"public"}),"."]})]}),e.jsx("h2",{children:"Variables Initialization"}),e.jsx("p",{children:"A variable must be assigned a value before it is usable in Java. If an uninitialized variable is referenced in code, the compiler will generate an error message."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`
public class VariableInitialization {
    public static void main(String[] args) {
        int uninitializedVar;
        // System.out.println(uninitializedVar); // This will cause a compile-time error
        int initializedVar = 5;
        System.out.println("Initialized variable: " + initializedVar);
    }
}
`})}),e.jsx("h2",{children:"Final Variables"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"final"})," keyword is used to declare constant variables, meaning they retain their values throughout their lifetime and cannot be changed after initialization."]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`
public class FinalVariableExample {
    public static void main(String[] args) {
        final int finalVar = 10;
        // finalVar = 20; // This will cause a compile-time error
        System.out.println("Final variable: " + finalVar);
    }
}
`})}),e.jsx("h2",{children:"Variable Scope"}),e.jsx("p",{children:"The scope of a variable refers to the section of code where the variable is accessible:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Local variables:"})," Accessible only within their own block, method, or constructor."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Instance variables:"})," Accessible from all methods, constructors, or blocks in the class."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Class variables:"})," Accessible by both static and non-static methods within the class."]})]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`
public class VariableScopeExample {
    int instanceVar = 10; // Instance variable
    static int staticVar = 20; // Static variable
    
    public void display() {
        int localVar = 30; // Local variable
        System.out.println("Local variable: " + localVar);
        System.out.println("Instance variable: " + instanceVar);
        System.out.println("Static variable: " + staticVar);
    }

    public static void main(String[] args) {
        VariableScopeExample example = new VariableScopeExample();
        example.display();
    }
}
`})}),e.jsx("p",{children:"Understanding Java variables and their scope is crucial for writing good code and ensuring correctness. The scope and behavior of each type of variable are essential for data storage and retrieval in Java programs."})]}),Hv=()=>e.jsxs("div",{className:"dataTypes",children:[e.jsx("h1",{children:"Java Data Types"}),e.jsx("p",{children:"Java is a strictly typed language, which means that every variable must be declared before it can be used. Data types specify the size and type of values that can be stored in an identifier. In Java, data types are divided into two broad categories: primitive data types and reference (or non-primitive) data types."}),e.jsx("h2",{children:"A. Primitive Data Types"}),e.jsx("p",{children:"Java primitive data types are eight in number, each with its own purpose:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Byte"})," ",e.jsx("br",{}),"Size: 8-bit ",e.jsx("br",{}),"Range: -128 to 127 ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"byte byteVar = 100;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Short"})," ",e.jsx("br",{}),"Size: 16-bit ",e.jsx("br",{}),"Range: -32,768 to 32,767 ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"short shortVar = 10000;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Int"})," ",e.jsx("br",{}),"Size: 32-bit ",e.jsx("br",{}),"Range: -2^31 to 2^31 - 1 ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"int intVar = 100000;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Long"})," ",e.jsx("br",{}),"Size: 64-bit ",e.jsx("br",{}),"Range: -2^63 to 2^63 - 1 ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"long longVar = 100000L;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Float"})," ",e.jsx("br",{}),"Size: 32-bit floating point ",e.jsx("br",{}),"Range: ±3.40282347E+38F ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"float floatVar = 234.5f;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Double"})," ",e.jsx("br",{}),"Size: 64-bit floating point ",e.jsx("br",{}),"Range: ±1.79769313486231570E+308 ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"double doubleVar = 123.456;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boolean"})," ",e.jsx("br",{}),"Size: 1-bit ",e.jsx("br",{}),"Range: true or false ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"boolean boolVar = true;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Char"})," ",e.jsx("br",{}),"Size: 16-bit Unicode character ",e.jsx("br",{}),"Range: '\\u0000' (0) to '\\uffff' (65,535) ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"char charVar = 'A';"})]})]}),e.jsx("h2",{children:"B. Non-Primitive Data Types"}),e.jsx("p",{children:"Reference data types refer to objects, and they include classes, interfaces, arrays, and strings among others."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Classes"})," ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"MyClass myObject = new MyClass(10);"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Interfaces"})," ",e.jsx("br",{}),"Example: ",e.jsxs("code",{children:["interface MyInterface ","{"," void myMethod(); ","}"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arrays"})," ",e.jsx("br",{}),"Example: ",e.jsxs("code",{children:["int[] arrayVar = ","{1, 2, 3, 4, 5}",";"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Strings"})," ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:'String stringVar = "Hello, World!";'})]})]}),e.jsx("h2",{children:"Program to Illustrate Primitive and Reference Data Types in Java"}),e.jsx("pre",{children:`public class DataTypeExample {
    public static void main(String[] args) {
        // Primitive data types
        int num = 10; 
        double salary = 2500.50;
        char grade = 'A'; 
        boolean isActive = true; 

        // Reference data types
        String name = "John Doe"; 
        int[] numbers = {1, 2, 3, 4, 5}; 

        // Printing values
        System.out.println("Primitive Data Types:");
        System.out.println("Integer: " + num);
        System.out.println("Double: " + salary);
        System.out.println("Character: " + grade);
        System.out.println("Boolean: " + isActive);

        System.out.println("\\nReference Data Types:");
        System.out.println("String: " + name);
        System.out.print("Array of Integers: ");
        for (int number : numbers) {
            System.out.print(number + " ");
        }
        System.out.println();
    }
}`})]}),Vv=()=>e.jsxs("div",{className:"javaOperators",children:[e.jsx("h1",{children:"Operators in Java"}),e.jsx("p",{children:"Java has special symbols known as operators that perform certain functions on values and variables. These are basic parts of any programming language, and they allow the manipulation of data as well as variables. There is a wide range of operation types (including arithmetic, and logical) that Java provides with its set of operators."}),e.jsx("h2",{children:"Types of Operators in Java"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Arithmetic Operator"}),e.jsx("li",{children:"Relational Operator"}),e.jsx("li",{children:"Logical Operator"}),e.jsx("li",{children:"Assignment Operator"}),e.jsx("li",{children:"Bitwise Operator"}),e.jsx("li",{children:"Unary Operator"}),e.jsx("li",{children:"Instance of Operator"}),e.jsx("li",{children:"Conditional Operator"})]}),e.jsx("h2",{children:"1. Arithmetic Operator"}),e.jsx("p",{children:"Arithmetic operators are used to perform basic arithmetic operations like addition, subtraction, multiplication, and division."}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Addition (+): ",e.jsx("code",{children:"a + b"})]}),e.jsxs("li",{children:["Subtraction (-): ",e.jsx("code",{children:"a - b"})]}),e.jsxs("li",{children:["Multiplication (*): ",e.jsx("code",{children:"a * b"})]}),e.jsxs("li",{children:["Division (/): ",e.jsx("code",{children:"a / b"})]}),e.jsxs("li",{children:["Modulus (%): ",e.jsx("code",{children:"a % b"})]}),e.jsxs("li",{children:["Increment (++): ",e.jsx("code",{children:"a++"})," or ",e.jsx("code",{children:"b++"})]}),e.jsxs("li",{children:["Decrement (--): ",e.jsx("code",{children:"a--"})," or ",e.jsx("code",{children:"b--"})]})]}),e.jsx("pre",{children:`Example:
int a = 10;
int b = 5;
int sum = a + b;  // 15
int difference = a - b;  // 5
int product = a * b;  // 50
int quotient = a / b;  // 2
int remainder = a % b;  // 0`}),e.jsx("h2",{children:"2. Relational Operator"}),e.jsx("p",{children:"Relational operators compare values and determine relationships like equality, greater or lesser."}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Equal (==): ",e.jsx("code",{children:"a == b"})]}),e.jsxs("li",{children:["Not Equal (!=): ",e.jsx("code",{children:"a != b"})]}),e.jsxs("li",{children:["Less Than (<): ",e.jsx("code",{children:"a < b"})]}),e.jsxs("li",{children:["Greater Than (>): ",e.jsx("code",{children:"a > b"})]}),e.jsxs("li",{children:["Less Than Equal to (<=): ",e.jsx("code",{children:"a <= b"})]}),e.jsxs("li",{children:["Greater Than Equal to (>=): ",e.jsx("code",{children:"a >= b"})]})]}),e.jsx("pre",{children:`Example:
int a = 10;
int b = 5;
boolean result1 = (a == b); // false
boolean result2 = (a != b); // true`}),e.jsx("h2",{children:"3. Logical Operator"}),e.jsx("p",{children:"Logical operators are used to form complex conditional expressions."}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Logical AND (&&): ",e.jsx("code",{children:"a && b"})]}),e.jsxs("li",{children:["Logical OR (||): ",e.jsx("code",{children:"a || b"})]}),e.jsxs("li",{children:["Logical NOT (!): ",e.jsx("code",{children:"!a"})]})]}),e.jsx("pre",{children:`Example:
boolean x = true;
boolean y = false;
boolean result1 = (x && y); // false
boolean result2 = (x || y); // true
boolean result3 = !x; // false`}),e.jsx("h2",{children:"4. Assignment Operator"}),e.jsx("p",{children:"Assignment operators assign values to variables."}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Assignment (=): ",e.jsx("code",{children:"a = b"})]}),e.jsxs("li",{children:["Addition Assignment (+=): ",e.jsx("code",{children:"a += b"})]}),e.jsxs("li",{children:["Subtraction Assignment (-=): ",e.jsx("code",{children:"a -= b"})]}),e.jsxs("li",{children:["Multiplication Assignment (*=): ",e.jsx("code",{children:"a *= b"})]}),e.jsxs("li",{children:["Division Assignment (/=): ",e.jsx("code",{children:"a /= b"})]})]}),e.jsx("pre",{children:`Example:
int a = 10;
a += 5;  // 15
a -= 3;  // 12
a *= 2;  // 24
a /= 4;  // 6`}),e.jsx("h2",{children:"5. Bitwise Operator"}),e.jsx("p",{children:"Bitwise operators perform operations on bits."}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Bitwise AND (&): ",e.jsx("code",{children:"a & b"})]}),e.jsxs("li",{children:["Bitwise OR (|): ",e.jsx("code",{children:"a | b"})]}),e.jsxs("li",{children:["Bitwise NOT (~): ",e.jsx("code",{children:"~a"})]}),e.jsxs("li",{children:["Bitwise XOR (^): ",e.jsx("code",{children:"a ^ b"})]})]}),e.jsx("pre",{children:`Example:
int a = 5;  // 0101 in binary
int b = 3;  // 0011 in binary
int result1 = a & b; // 0001 (1 in decimal)
int result2 = a | b; // 0111 (7 in decimal)`}),e.jsx("h2",{children:"6. Unary Operator"}),e.jsx("p",{children:"Unary operators perform operations on a single operand."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Unary Plus (+): Indicates a positive value"}),e.jsx("li",{children:"Unary Minus (-): Negates a value"}),e.jsx("li",{children:"Increment (++): Increases value by 1"}),e.jsx("li",{children:"Decrement (--): Decreases value by 1"})]}),e.jsx("pre",{children:`Example:
int a = 10;
a++;  // 11
a--;  // 10`}),e.jsx("h2",{children:"7. Instance of Operator"}),e.jsx("p",{children:"Used to check if an object is an instance of a specific class or subclass."}),e.jsx("pre",{children:`Example:
String str = "Hello";
boolean result = str instanceof String;
System.out.println("str instanceof String -> " + result); // true`}),e.jsx("h2",{children:"8. Conditional Operator"}),e.jsx("p",{children:"The ternary operator is a shorthand for the if-else statement."}),e.jsx("pre",{children:`Example:
int k = 10, l = 20;
int max = (k > l) ? k : l;
System.out.println("max -> " + max); // 20`})]}),$v=()=>e.jsxs("div",{className:"javaStrings",children:[e.jsx("h1",{children:"Java Strings"}),e.jsx("p",{children:"Strings in Java are objects that represent a sequence of characters. Java provides the `String` class to create and manipulate strings. Strings are immutable, which means once a string is created, it cannot be changed."}),e.jsx("h2",{children:"Creating Strings"}),e.jsx("p",{children:"In Java, there are two main ways to create strings:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using string literals: ",e.jsx("code",{children:'String str = "Hello";'})]}),e.jsxs("li",{children:["Using the `new` keyword: ",e.jsx("code",{children:'String str = new String("Hello");'})]})]}),e.jsx("h2",{children:"Common String Methods"}),e.jsx("p",{children:"The `String` class provides many useful methods for working with strings. Some of the most commonly used methods are:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"length()"}),": Returns the length of the string. ",e.jsx("code",{children:"str.length()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"charAt()"}),": Returns the character at the specified index. ",e.jsx("code",{children:"str.charAt(0)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"substring()"}),": Returns a new string that is a substring of the original string. ",e.jsx("code",{children:"str.substring(1, 4)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"indexOf()"}),": Returns the index of the first occurrence of the specified character. ",e.jsx("code",{children:"str.indexOf('e')"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"toLowerCase()"}),": Converts all characters in the string to lowercase. ",e.jsx("code",{children:"str.toLowerCase()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"toUpperCase()"}),": Converts all characters in the string to uppercase. ",e.jsx("code",{children:"str.toUpperCase()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"trim()"}),": Removes any leading and trailing whitespace from the string. ",e.jsx("code",{children:"str.trim()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"replace()"}),": Replaces occurrences of a specified character or substring with another character or substring. ",e.jsx("code",{children:"str.replace('l', 'p')"})]})]}),e.jsx("h2",{children:"String Concatenation"}),e.jsxs("p",{children:["You can concatenate strings in Java using the ",e.jsx("code",{children:"+"})," operator or the ",e.jsx("code",{children:"concat()"})," method."]}),e.jsx("pre",{children:`String str1 = "Hello";
String str2 = "World";
String result = str1 + " " + str2;  // Hello World
String result2 = str1.concat(" ").concat(str2);  // Hello World`}),e.jsx("h2",{children:"Immutable Strings"}),e.jsx("p",{children:"As mentioned earlier, strings in Java are immutable. This means that whenever you modify a string, a new `String` object is created, and the original string remains unchanged. For example:"}),e.jsx("pre",{children:`String str = "Hello";
str = str + " World";  // A new String object is created with the value "Hello World"`}),e.jsx("h2",{children:"StringBuilder and StringBuffer"}),e.jsx("p",{children:"If you need to modify a string frequently, it's better to use `StringBuilder` or `StringBuffer`. These classes provide mutable strings."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"StringBuilder"}),": More efficient than `String` for concatenating strings, but it is not thread-safe."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"StringBuffer"}),": Similar to `StringBuilder` but is thread-safe, meaning it can be used in a multithreaded environment."]})]}),e.jsx("pre",{children:`StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb.toString());  // Hello World`}),e.jsx("h2",{children:"Comparing Strings"}),e.jsx("p",{children:"In Java, you can compare strings using the `equals()` method or the `compareTo()` method."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"equals()"}),": Compares two strings for equality. ",e.jsx("code",{children:'str.equals("Hello")'})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"compareTo()"}),": Compares two strings lexicographically. ",e.jsx("code",{children:'str.compareTo("Hello")'})]})]}),e.jsx("pre",{children:`String str1 = "Hello";
String str2 = "World";
boolean isEqual = str1.equals(str2);  // false
int comparison = str1.compareTo(str2);  // Negative if str1 is less than str2, 0 if equal, positive if greater`}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Strings are a fundamental part of Java programming. Understanding how to create and manipulate strings is essential for effective coding in Java. By using the provided methods, concatenation techniques, and tools like `StringBuilder` and `StringBuffer`, you can efficiently manage string operations in your Java applications."})]}),Gv=()=>e.jsxs("div",{className:"javaMethods",children:[e.jsx("h1",{children:"Java Methods"}),e.jsx("p",{children:"Methods in Java are small pieces of code that perform specific tasks. They are essential in Java programming as they help make the code reusable, modular, and maintainable."}),e.jsx("h2",{children:"Table of Contents"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Method Declaration"}),e.jsx("li",{children:"Method Invocation"}),e.jsx("li",{children:"Parameters and Return Values"}),e.jsx("li",{children:"Method Overloading"}),e.jsx("li",{children:"Static Methods"}),e.jsx("li",{children:"Recursive Methods"}),e.jsx("li",{children:"Access Modifiers"}),e.jsx("li",{children:"Return Type"}),e.jsx("li",{children:"Conclusion"})]}),e.jsx("h2",{children:"1. Method Declaration"}),e.jsx("p",{children:"A method declaration shows the return type, name, and parameters of the method. The body of the method contains instructions that will be executed when the method is called."}),e.jsx("pre",{children:`returnType methodName(parameters) {
    // method body
}`}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:`public class Example {
    void printMessage() {
        System.out.println("Hello, World!");
    }
}`}),e.jsx("h2",{children:"2. Method Invocation"}),e.jsx("p",{children:"Methods are called using dot notation on an object or directly within the class if it is static."}),e.jsx("pre",{children:`public class Example {
    void printMessage() {
        System.out.println("Hello, World!");
    }

    public static void main(String[] args) {
        Example example = new Example();
        example.printMessage();  // Invokes the printMessage method
    }
}`}),e.jsx("h2",{children:"3. Parameters and Return Values"}),e.jsx("p",{children:"Methods can take arguments and give back results after execution. Parameters allow information to be transferred from one part of a program to another, while the return value lets you collect information."}),e.jsx("pre",{children:`public class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator calculator = new Calculator();
        int result = calculator.add(5, 3);
        System.out.println("Sum: " + result);
    }
}`}),e.jsx("h2",{children:"4. Method Overloading"}),e.jsx("p",{children:"Java allows method overloading, which means a class can define multiple methods with the same name but different parameter lists. This enhances readability and supports compile-time polymorphism."}),e.jsx("pre",{children:`public class OverloadedMethods {
    void display(int a) {
        System.out.println("Argument: " + a);
    }

    void display(int a, int b) {
        System.out.println("Arguments: " + a + " and " + b);
    }

    void display(double a) {
        System.out.println("Double Argument: " + a);
    }

    public static void main(String[] args) {
        OverloadedMethods om = new OverloadedMethods();
        om.display(5);
        om.display(5, 10);
        om.display(5.5);
    }
}`}),e.jsx("h2",{children:"5. Static Methods"}),e.jsx("p",{children:"Static methods belong to a class rather than any particular instance object. They do not require an object to be created before calling."}),e.jsx("pre",{children:`public class StaticExample {
    static void printMessage() {
        System.out.println("Hello from a static method!");
    }

    public static void main(String[] args) {
        StaticExample.printMessage();
    }
}`}),e.jsx("h2",{children:"6. Recursive Methods"}),e.jsx("p",{children:"Recursive methods solve problems by calling themselves. They are useful for problems like tree traversal, Fibonacci series, and factorial computation."}),e.jsx("pre",{children:`public class RecursionExample {
    int factorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    public static void main(String[] args) {
        RecursionExample example = new RecursionExample();
        int result = example.factorial(5);
        System.out.println("Factorial: " + result);
    }
}`}),e.jsx("h2",{children:"7. Access Modifiers"}),e.jsx("p",{children:"Access modifiers determine the visibility of methods. Java has four access levels: public, protected, default, and private."}),e.jsx("pre",{children:`public class AccessModifiersExample {
    public void publicMethod() {
        System.out.println("Public method");
    }

    protected void protectedMethod() {
        System.out.println("Protected method");
    }

    void defaultMethod() {
        System.out.println("Default method");
    }

    private void privateMethod() {
        System.out.println("Private method");
    }

    public static void main(String[] args) {
        AccessModifiersExample example = new AccessModifiersExample();
        example.publicMethod();
        example.protectedMethod();
        example.defaultMethod();
        example.privateMethod();
    }
}`}),e.jsx("h2",{children:"8. Return Type"}),e.jsx("p",{children:"The return type defines what kind of value a method will return. If a method does not return a value, it uses the `void` keyword."}),e.jsx("pre",{children:`public class ReturnTypeExample {
    int add(int a, int b) {
        return a + b;
    }

    void displayMessage() {
        System.out.println("This is a void method.");
    }

    public static void main(String[] args) {
        ReturnTypeExample example = new ReturnTypeExample();
        int sum = example.add(5, 3);
        System.out.println("Sum: " + sum);
        example.displayMessage();
    }
}`}),e.jsx("h2",{children:"9. Conclusion"}),e.jsx("p",{children:"Methods in Java are vital for writing reusable and maintainable code. A solid understanding of how to declare, invoke, overload, and manage access to methods will significantly improve your Java programming."})]}),Xv=()=>e.jsxs("div",{className:"javaArrays",children:[e.jsx("h1",{children:"Java Arrays"}),e.jsx("p",{children:"Java arrays are an important way of storing a sequential, fixed-size collection of elements of the same type. This guide discusses array basics such as declaration, initialization, accessing elements, and common operations."}),e.jsx("h2",{children:"Table of Contents"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Arrays",e.jsxs("ul",{children:[e.jsx("li",{children:"Declaration and Initialization"}),e.jsx("li",{children:"Accessing Elements of Array"}),e.jsx("li",{children:"Operations Performed on Arrays"})]})]}),e.jsxs("li",{children:["Multi-Dimensional Arrays",e.jsxs("ul",{children:[e.jsxs("li",{children:["Two-Dimensional",e.jsxs("ul",{children:[e.jsx("li",{children:"Declaration and Initialization"}),e.jsx("li",{children:"Accessing and Modifying Elements"}),e.jsx("li",{children:"Looping through a Two-Dimensional Array"})]})]}),e.jsxs("li",{children:["Three-Dimensional",e.jsx("ul",{children:e.jsx("li",{children:"Declaration and Initialization"})})]})]})]}),e.jsxs("li",{children:["ArrayList",e.jsxs("ul",{children:[e.jsx("li",{children:"Basic Operations on ArrayList"}),e.jsx("li",{children:"ArrayList Methods"}),e.jsx("li",{children:"Advantages"}),e.jsx("li",{children:"Disadvantages of ArrayList"}),e.jsx("li",{children:"Example of ArrayList"})]})]}),e.jsx("li",{children:"Conclusion"})]}),e.jsx("h2",{children:"1. Arrays"}),e.jsx("h3",{children:"Declaration and Initialization"}),e.jsx("p",{children:"There are various ways to declare and initialize arrays:"}),e.jsx("pre",{children:`int[] numbers;  // Preferred
int numbers[];  // Valid but less common`}),e.jsx("pre",{children:"numbers = new int[5];  // Creates an array of integers with 5 elements"}),e.jsx("h3",{children:"Accessing Elements of Array"}),e.jsx("p",{children:"Indexing starts from 0:"}),e.jsx("pre",{children:`int[] numbers = {10, 20, 30, 40, 50};
int firstNumber = numbers[0];  // Access the first element
numbers[1] = 25;  // Change the second element`}),e.jsx("h3",{children:"Operations Performed on Arrays"}),e.jsx("p",{children:"Some common operations include:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Finding Length:"})," ",e.jsx("code",{children:"int length = numbers.length;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Copying:"}),e.jsx("pre",{children:`int[] copy = new int[numbers.length];
System.arraycopy(numbers, 0, copy, 0, numbers.length);`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sorting:"})," ",e.jsx("code",{children:"Arrays.sort(numbers);"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Searching in Array:"})," ",e.jsx("code",{children:"Arrays.binarySearch(numbers, 25);"})]})]}),e.jsx("h2",{children:"2. Multi-Dimensional Arrays"}),e.jsx("h3",{children:"Two-Dimensional Arrays"}),e.jsx("p",{children:"Two-dimensional arrays are grids of data stored in the form of an array of arrays."}),e.jsx("pre",{children:`int[][] matrix = {
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 9}
};`}),e.jsx("h3",{children:"Accessing and Modifying Elements"}),e.jsx("pre",{children:`int value = matrix[1][2];  // Accessing element 6
matrix[0][0] = 10;  // Modifying element 1`}),e.jsx("h3",{children:"Looping through a Two-Dimensional Array"}),e.jsx("pre",{children:`for (int i = 0; i < matrix.length; i++) {
  for (int j = 0; j < matrix[i].length; j++) {
    System.out.print(matrix[i][j] + " ");
  }
  System.out.println();
}`}),e.jsx("h3",{children:"Three-Dimensional Arrays"}),e.jsx("pre",{children:`int[][][] threeDArray = {
  {
    {1, 2},
    {3, 4}
  },
  {
    {5, 6},
    {7, 8}
  }
};`}),e.jsx("h2",{children:"3. ArrayList"}),e.jsx("p",{children:"An ArrayList is a resizable array that is part of the java.util package. It can grow or shrink dynamically as elements are added or removed."}),e.jsx("pre",{children:`ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");`}),e.jsx("h3",{children:"Basic Operations on ArrayList"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Adding Elements:"})," ",e.jsx("code",{children:'fruits.add("Orange");'})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessing Elements:"})," ",e.jsx("code",{children:"fruits.get(0);"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Removing Elements:"})," ",e.jsx("code",{children:"fruits.remove(1);"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Checking Size:"})," ",e.jsx("code",{children:"fruits.size();"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Clearing:"})," ",e.jsx("code",{children:"fruits.clear();"})]})]}),e.jsx("h3",{children:"ArrayList Methods"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"isEmpty()"}),": Checks if the list is empty."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"contains()"}),": Checks if the list contains the specified element."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"indexOf()"}),": Returns the index of the first occurrence of the specified element."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"addAll()"}),": Adds all elements of a collection to the ArrayList."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"toArray()"}),": Converts ArrayList to an array of objects."]})]}),e.jsx("h2",{children:"4. Conclusion"}),e.jsx("p",{children:"Arrays and ArrayLists in Java are essential for managing collections of elements. Arrays are fixed in size, whereas ArrayLists are dynamic. Understanding the manipulation of these data structures is crucial for efficient Java programming."})]}),Kv=()=>e.jsxs("div",{className:"javaAbstraction",children:[e.jsx("h1",{children:"Abstraction in Java"}),e.jsx("p",{children:"Abstraction is the process of hiding internal details and showing only the essential features of an object. It reduces complexity and allows the programmer to focus on interacting with objects rather than their inner workings."}),e.jsx("h2",{children:"Table of Contents"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Abstraction"}),e.jsx("li",{children:"Abstract Classes"}),e.jsx("li",{children:"Interfaces"}),e.jsx("li",{children:"Difference Between Interfaces and Abstract Classes"}),e.jsx("li",{children:"Key Features of Abstraction"}),e.jsx("li",{children:"Advantages of Abstraction"}),e.jsx("li",{children:"Disadvantages of Abstraction"}),e.jsx("li",{children:"When to Utilize Abstraction"}),e.jsx("li",{children:"Conclusion"})]}),e.jsx("h2",{children:"1. Abstraction"}),e.jsx("p",{children:"Abstraction allows you to focus on the what of an object rather than the how. It hides implementation details while exposing only necessary information."}),e.jsx("pre",{children:`// Abstract class
abstract class Animal {
  public abstract void animalSound(); // Abstract method
  public void sleep() { System.out.println("Zzz"); }  // Regular method
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}

class Main {
  public static void main(String[] args) {
    Pig myPig = new Pig(); // Create a Pig object
    myPig.animalSound();
    myPig.sleep();
  }
}`}),e.jsx("h2",{children:"2. Abstract Classes"}),e.jsx("p",{children:"In Java, abstract classes cannot be instantiated directly. They can have both abstract methods (without a body) and regular methods."}),e.jsx("pre",{children:`abstract class Shape {
  String color;
  abstract double area(); // Abstract method
  public abstract String toString();  // Abstract method

  public Shape(String color) {
    this.color = color;
  }

  public String getColor() { return color; }  // Regular method
}

class Circle extends Shape {
  double radius;
  public Circle(String color, double radius) {
    super(color);
    this.radius = radius;
  }

  @Override
  double area() { return Math.PI * Math.pow(radius, 2); }
  @Override
  public String toString() { return "Circle color is " + super.getColor() + " and area is: " + area(); }
}`}),e.jsx("h2",{children:"3. Interfaces"}),e.jsx("p",{children:"An interface is a reference type in Java that contains abstract methods, constants, default methods, static methods, and nested types. Unlike abstract classes, interfaces cannot have instance fields or constructors."}),e.jsx("pre",{children:`interface Shape {
  double calculateArea();  // Abstract method
}

class Circle implements Shape {
  private double radius;
  public Circle(double radius) { this.radius = radius; }

  public double calculateArea() { return Math.PI * radius * radius; }
}

class Rectangle implements Shape {
  private double length, width;
  public Rectangle(double length, double width) {
    this.length = length;
    this.width = width;
  }

  public double calculateArea() { return length * width; }
}`}),e.jsx("h2",{children:"4. Difference Between Abstract Classes and Interfaces"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Abstract Classes"}),e.jsx("th",{children:"Interfaces"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Can have both abstract and regular methods."}),e.jsx("td",{children:"Can only contain abstract methods (until Java 8 introduces default and static methods)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Can have instance variables."}),e.jsx("td",{children:"Cannot have instance variables, only constants."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Supports single inheritance."}),e.jsx("td",{children:"Supports multiple inheritance."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Allows constructors."}),e.jsx("td",{children:"Does not allow constructors."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Members can have any access modifier."}),e.jsx("td",{children:"Members are public by default."})]})]})]}),e.jsx("h2",{children:"5. Key Features of Abstraction"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Simplifies code by hiding complex implementation details."}),e.jsx("li",{children:"Improves flexibility by allowing changes in implementation without affecting the users of the class."}),e.jsx("li",{children:"Encourages code reusability across different parts of an application."}),e.jsx("li",{children:"Facilitates maintainability by separating concerns and reducing dependencies."})]}),e.jsx("h2",{children:"6. Advantages of Abstraction"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Helps secure programs by exposing only relevant details."}),e.jsx("li",{children:"Allows internal changes without affecting the user interface."}),e.jsx("li",{children:"Improves code maintainability and reuse."}),e.jsx("li",{children:"Offers modularity and easier debugging."}),e.jsx("li",{children:"Enhances security by preventing access to internal class details."})]}),e.jsx("h2",{children:"7. Disadvantages of Abstraction"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Can make understanding the system more difficult."}),e.jsx("li",{children:"Overuse can lead to increased complexity and performance issues."}),e.jsx("li",{children:"Debugging can be harder due to the layers of abstraction."})]}),e.jsx("h2",{children:"8. When to Utilize Abstraction"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use abstract classes when you want to provide a common base with default behavior."}),e.jsx("li",{children:"Use interfaces when you need multiple inheritance or to define a contract for a class without dictating its implementation."})]}),e.jsx("h2",{children:"9. Conclusion"}),e.jsx("p",{children:"Abstraction in Java simplifies complexity by separating interface from implementation. Abstract classes and interfaces are essential tools for managing code organization, flexibility, and reusability. Utilizing abstraction helps developers save time by focusing on high-level design rather than low-level implementation."})]}),Qv=()=>e.jsxs("div",{className:"JavaConditions",children:[e.jsx("h1",{children:"Conditional Statements in Java"}),e.jsxs("section",{children:[e.jsx("h2",{children:"1. If Statement"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"if"})," statement executes a block of code if a specified condition is true."]}),e.jsx("pre",{children:e.jsx("code",{children:`int age = 18;
if (age >= 18) {
  System.out.println("You are eligible to vote.");
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"2. If-Else Statement"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"if-else"})," statement executes one block of code if a specified condition is true and another block if it is false."]}),e.jsx("pre",{children:e.jsx("code",{children:`int age = 16;
if (age >= 18) {
  System.out.println("You are eligible to vote.");
} else {
  System.out.println("You are not eligible to vote.");
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"3. If-Else-If Ladder"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"if-else-if"})," ladder allows you to test multiple conditions sequentially until one returns true, then the corresponding block is executed."]}),e.jsx("pre",{children:e.jsx("code",{children:`int score = 85;
if (score >= 90) {
  System.out.println("Grade: A");
} else if (score >= 80) {
  System.out.println("Grade: B");
} else if (score >= 70) {
  System.out.println("Grade: C");
} else {
  System.out.println("Grade: D");
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"4. Nested-If Statement"}),e.jsxs("p",{children:["A nested ",e.jsx("code",{children:"if"})," statement is an ",e.jsx("code",{children:"if"})," statement inside another ",e.jsx("code",{children:"if"})," statement."]}),e.jsx("pre",{children:e.jsx("code",{children:`int number = 10;
if (number > 0) {
  System.out.println("The number is positive.");
  if (number % 2 == 0) {
    System.out.println("The number is even.");
  } else {
    System.out.println("The number is odd.");
  }
} else if (number < 0) {
  System.out.println("The number is negative.");
} else {
  System.out.println("The number is zero.");
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"5. Switch Statement"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"switch"})," statement enables one block of code among many to be executed based on the value of a variable or expression."]}),e.jsx("pre",{children:e.jsx("code",{children:`int day = 3;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  case 4:
    System.out.println("Thursday");
    break;
  case 5:
    System.out.println("Friday");
    break;
  case 6:
    System.out.println("Saturday");
    break;
  case 7:
    System.out.println("Sunday");
    break;
  default:
    System.out.println("Invalid day");
    break;
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Summary"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"If statement:"})," Executes a block of code if a condition is true."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"If-else statement:"})," Executes one block of code if the condition is true, and another block if false."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"If-else-if ladder:"})," Tests multiple conditions sequentially."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Nested if statement:"})," Allows checking multiple related conditions in nested form."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Switch statement:"})," Executes one block of code out of many based on the value of a variable or expression."]})]})]})]}),Yv=()=>e.jsxs("div",{className:"javaApis",children:[e.jsx("h1",{children:"APIs in Java"}),e.jsx("p",{children:"A Java API (Application Programming Interface) is a collection of classes, methods, and interfaces supplied by a library that enables interaction with other programs. Java APIs can be used to connect with libraries or frameworks through web services, with one of the most frequent uses being the development of RESTful web services."}),e.jsx("h2",{children:"Key Concepts"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Endpoints:"})," URLs through which clients interact with the API."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HTTP Methods:"})," Actions performed on resources (GET, POST, PUT, DELETE)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Request and Response:"})," Data sent to and received from the server."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Status Codes:"})," Communicates the result of an HTTP request (e.g., 200 OK, 404 Not Found)."]})]}),e.jsx("h2",{children:"Java API Components"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Java Compiler:"})," Converts user-written code into bytecode."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Java Virtual Machine (JVM):"})," Processes bytecode and produces output."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Java API:"})," Provides pre-built software components for connecting with software platforms or components."]})]}),e.jsx("h2",{children:"Building a RESTful API in Java Using Spring Boot"}),e.jsx("h3",{children:"1. Set Up Your Development Environment"}),e.jsx("p",{children:"Ensure you have the following:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Java Development Kit (JDK):"})," Installed on your machine."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"IDE:"})," Like IntelliJ IDEA, Eclipse, or NetBeans."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Build Tool:"})," Maven or Gradle for dependency management."]})]}),e.jsx("h3",{children:"2. Generate a New Spring Boot Project"}),e.jsxs("p",{children:["Use ",e.jsx("a",{href:"https://start.spring.io/",children:"Spring Initializr"})," to generate a Spring Boot project:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Project: Maven Project"}),e.jsx("li",{children:"Language: Java"}),e.jsx("li",{children:"Spring Boot: Choose the latest stable version"}),e.jsx("li",{children:"Group: com.example"}),e.jsx("li",{children:"Artifact: demo"}),e.jsx("li",{children:'Dependencies: Add "Spring Web" for RESTful services'})]}),e.jsx("h3",{children:"3. Project Structure"}),e.jsx("pre",{children:`demo
├── src
│   └── main
│       ├── java
│       │   └── com
│       │       └── example
│       │           └── demo
│       │               ├── DemoApplication.java
│       │               ├── controller
│       │               │   └── UserController.java
│       │               └── model
│       │                   └── User.java
│       └── resources
│           └── application.properties
└── pom.xml`}),e.jsx("h3",{children:"4. Application Entry Point"}),e.jsx("pre",{children:`// DemoApplication.java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }
}`}),e.jsx("h3",{children:"5. Creating the Model"}),e.jsx("pre",{children:`// User.java
package com.example.demo.model;

public class User {
  private Long id;
  private String name;
  private String email;

  // Constructors, Getters, and Setters
  public User() {}

  public User(Long id, String name, String email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}`}),e.jsx("h3",{children:"6. Building the Controller"}),e.jsx("pre",{children:`// UserController.java
package com.example.demo.controller;

import com.example.demo.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
  private List<User> users = new ArrayList<>();

  // Get all users
  @GetMapping
  public List<User> getAllUsers() {
    return users;
  }

  // Get user by ID
  @GetMapping("/{id}")
  public User getUserById(@PathVariable Long id) {
    return users.stream()
                .filter(user -> user.getId().equals(id))
                .findFirst()
                .orElse(null);
  }

  // Create a new user
  @PostMapping
  public User createUser(@RequestBody User user) {
    users.add(user);
    return user;
  }

  // Update an existing user
  @PutMapping("/{id}")
  public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
    User existingUser = users.stream()
                             .filter(user -> user.getId().equals(id))
                             .findFirst()
                             .orElse(null);
    if (existingUser != null) {
      existingUser.setName(updatedUser.getName());
      existingUser.setEmail(updatedUser.getEmail());
    }
    return existingUser;
  }

  // Delete a user by ID
  @DeleteMapping("/{id}")
  public String deleteUser(@PathVariable Long id) {
    boolean removed = users.removeIf(user -> user.getId().equals(id));
    return removed ? "User deleted successfully" : "User not found";
  }
}`}),e.jsx("h3",{children:"7. Run and Test the API"}),e.jsx("p",{children:"Run the application and test the API using Postman or curl:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"GET all users:"})," ",e.jsx("code",{children:"GET http://localhost:8080/api/users"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"GET user by ID:"})," ",e.jsx("code",{children:"GET http://localhost:8080/api/users"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"POST create user:"})," ",e.jsx("code",{children:"POST http://localhost:8080/api/users"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"PUT update user:"})," ",e.jsx("code",{children:"PUT http://localhost:8080/api/users"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DELETE user:"})," ",e.jsx("code",{children:"DELETE http://localhost:8080/api/users"})]})]}),e.jsx("h2",{children:"Advantages of Using Java APIs"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Expedites development by providing pre-defined classes and packages."}),e.jsx("li",{children:"Supports high automation levels, enabling efficient workflows."}),e.jsx("li",{children:"Flexible data access and seamless integration across platforms."}),e.jsx("li",{children:"Improves service delivery by reducing time-to-market."})]}),e.jsx("h2",{children:"Types of Java APIs"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Public Java APIs:"})," Part of the JDK and free to use."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Private Java APIs:"})," Developed internally by organizations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Partner Java APIs:"})," Available for authorized partners."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Composite Java APIs:"})," Combine different types of APIs, often for microservices."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Web Java APIs:"})," Enable browser-based applications via HTTP protocol."]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Developing a REST API with Java using Spring Boot is powerful and simple. The framework's annotations and conventions make it easy to build scalable RESTful web services. Although this example shows basic CRUD operations, you can extend it with validation, exception handling, and database integration as needed."})]}),Zv=()=>e.jsxs("div",{className:"JavaConstructor",children:[e.jsx("h1",{children:"Java Constructors"}),e.jsx("h2",{children:"1. Constructors in Java"}),e.jsx("p",{children:"Constructors are special methods in Java used to initialize objects. They are called when an instance of a class is created and have no return type. The name of the constructor must match the class name."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
        class Main {
          private String name;

          // Constructor
          Main() {
            System.out.println("Constructor Called:");
            name = "Programiz";
          }

          public static void main(String[] args) {
            Main obj = new Main(); // Constructor is invoked
            System.out.println("The name is " + obj.name);
          }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        Constructor Called:
        The name is Programiz
        `}),e.jsx("h2",{children:"2. Types of Constructors"}),e.jsx("h3",{children:"i. Default Constructor"}),e.jsx("p",{children:"The default constructor is provided by the Java compiler if no constructor is defined in the class. It initializes object fields with default values."}),e.jsx("pre",{children:`
        class Main {
          int a;
          boolean b;

          public static void main(String[] args) {
            Main obj = new Main(); // Calls default constructor
            System.out.println("a = " + obj.a); // Default values
            System.out.println("b = " + obj.b);
          }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        a = 0
        b = false
        `}),e.jsx("h3",{children:"ii. Parameterized Constructor"}),e.jsx("p",{children:"A parameterized constructor allows you to pass values when creating an object, which will initialize object fields with those values."}),e.jsx("pre",{children:`
        class Main {
          String language;

          // Constructor with a parameter
          Main(String lang) {
            language = lang;
          }

          public static void main(String[] args) {
            Main obj1 = new Main("Java");
            Main obj2 = new Main("Python");
          }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        Java Programming Language
        Python Programming Language
        `}),e.jsx("h3",{children:"iii. Constructor Overloading"}),e.jsx("p",{children:"Constructor overloading allows a class to have multiple constructors with different parameter lists."}),e.jsx("pre",{children:`
        class Main {
          String language;

          // No-argument constructor
          Main() {
            this.language = "Java";
          }

          // Parameterized constructor
          Main(String language) {
            this.language = language;
          }

          public void getName() {
            System.out.println("Programming Language: " + this.language);
          }

          public static void main(String[] args) {
            Main obj1 = new Main();
            Main obj2 = new Main("Python");

            obj1.getName();
            obj2.getName();
          }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        Programming Language: Java
        Programming Language: Python
        `}),e.jsx("h2",{children:'3. Using "this" Keyword'}),e.jsx("p",{children:'The "this" keyword refers to the current object in Java. It can be used to differentiate between instance variables and parameters with the same name, or to call one constructor from another.'}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
        public class Car {
          String color;
          String model;
          int year;

          // Parameterized constructor
          public Car(String color, String model, int year) {
            this.color = color;
            this.model = model;
            this.year = year;
          }

          // Overloaded constructor using this
          public Car(String model) {
            this("Unknown", model, 0);
          }

          public void display() {
            System.out.println("Color: " + this.color);
            System.out.println("Model: " + this.model);
            System.out.println("Year: " + this.year);
          }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        Color: Red
        Model: Tesla Model 3
        Year: 2021

        Color: Unknown
        Model: Ford Mustang
        Year: 0
        `}),e.jsx("h2",{children:"4. No-Argument Constructor"}),e.jsx("p",{children:"A no-argument constructor does not accept any parameters. It is explicitly defined and does not automatically get created by the compiler if other constructors are defined."}),e.jsx("pre",{children:`
        class Main {
          int i;

          // No-argument constructor
          Main() {
            i = 5;
          }

          public static void main(String[] args) {
            Main obj = new Main();
            System.out.println("Value of i: " + obj.i);
          }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        Value of i: 5
        `}),e.jsx("h2",{children:"5. Copy Constructor"}),e.jsx("p",{children:"A copy constructor creates an object by copying another object's values. Though Java doesn’t have a built-in copy constructor, you can create one manually."}),e.jsx("pre",{children:`
        public class Car {
          String color;
          String model;
          int year;

          // Parameterized constructor
          public Car(String color, String model, int year) {
            this.color = color;
            this.model = model;
            this.year = year;
          }

          // Copy constructor
          public Car(Car other) {
            this.color = other.color;
            this.model = other.model;
            this.year = other.year;
          }
        }
        `})]}),ey=()=>e.jsxs("div",{className:"DataTypeConversion",children:[e.jsx("h1",{children:"Conversion of Data Type in Java"}),e.jsx("p",{children:"Data type conversion is a process of altering data into another type. There are two types of type casting in Java: implicit and explicit."}),e.jsx("h2",{children:"1. Implicit Type Conversion (Widening)"}),e.jsx("p",{children:"This happens by default when the smaller data type is converted to a larger data type. This process is also known as widening conversion because the target data type can store all the values of the original."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Examples of Widening:"})," byte to short, int, long, float, or double; int to long, float, or double, etc."]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
        public class ImplicitTypeConversion {
          public static void main(String[] args) {
            int intValue = 100;
            double doubleValue = intValue; // Implicit conversion from int to double
            System.out.println("Int value: " + intValue);
            System.out.println("Double value: " + doubleValue);
          }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        Int value: 100
        Double value: 100.0
        `}),e.jsx("h2",{children:"2. Explicit Type Conversion (Narrowing)"}),e.jsx("p",{children:"Explicit conversion is needed to convert a bigger data type into a smaller one, and it may result in loss of information or precision. This is known as narrowing conversion."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Examples of Narrowing:"})," double to float, long to int, etc."]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
        public class ExplicitTypeConversion {
          public static void main(String[] args) {
            double doubleValue = 100.04;
            int intValue = (int) doubleValue; // Explicit conversion from double to int
            System.out.println("Double value: " + doubleValue);
            System.out.println("Int value: " + intValue);
          }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        Double value: 100.04
        Int value: 100
        `}),e.jsx("h2",{children:"3. Conversion Between Primitive Types and Wrapper Classes"}),e.jsx("p",{children:"In Java, every primitive data type has a corresponding wrapper class that provides methods for converting between primitive types and strings."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
        public class WrapperConversion {
          public static void main(String[] args) {
            int intValue = 100;
            String stringValue = Integer.toString(intValue); // Convert int to String
            int parsedIntValue = Integer.parseInt(stringValue); // Convert String to int
            System.out.println("String value: " + stringValue);
            System.out.println("Parsed int value: " + parsedIntValue);
          }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        String value: 100
        Parsed int value: 100
        `}),e.jsx("h2",{children:"4. Type Conversion with Casting and Methods"}),e.jsx("p",{children:"Java provides various methods to convert data types, especially between numbers and strings."}),e.jsx("h3",{children:"Converting Strings to Numbers:"}),e.jsx("pre",{children:`
        public class StringToNumberConversion {
          public static void main(String[] args) {
            String numberString = "1234";
            int intValue = Integer.parseInt(numberString);
            double doubleValue = Double.parseDouble(numberString);
            System.out.println("Int value: " + intValue);
            System.out.println("Double value: " + doubleValue);
          }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        Int value: 1234
        Double value: 1234.0
        `}),e.jsx("h2",{children:"5. Casting Between Objects"}),e.jsx("p",{children:"Casting between objects is used when you need to treat an object of a subclass as an object of its superclass or vice versa."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
        class Animal {
          void makeSound() {
            System.out.println("Animal makes a sound");
          }
        }

        class Dog extends Animal {
          void bark() {
            System.out.println("Dog barks");
          }
        }

        public class ObjectCasting {
          public static void main(String[] args) {
            Animal animal = new Dog(); // Upcasting
            animal.makeSound(); // Allowed

            // Downcasting
            if (animal instanceof Dog) {
              Dog dog = (Dog) animal;
              dog.bark(); // Allowed
            }
          }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        Animal makes a sound
        Dog barks
        `}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Data type conversion is crucial in Java, especially when dealing with different types of data. Implicit and explicit conversions both play an important role in ensuring smooth type handling."})]}),ty=()=>e.jsxs("div",{className:"Encapsulation",children:[e.jsx("h1",{children:"Encapsulation in Java OOPS"}),e.jsx("h2",{children:"1. Encapsulation"}),e.jsx("p",{children:"Encapsulation is the process in which data is packaged together. It combines code with information and acts as a shelter that protects the data from other codes outside of it."}),e.jsx("p",{children:"For example, in an object-oriented program, encapsulation ensures that the variables or data in a class are not directly accessible from outside the class. Access is granted only through member functions of the class where the variables are declared."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
        public class Person {
            // Private fields
            private String name;
            private int age;

            // Public getter for name
            public String getName() {
                return name;
            }

            // Public setter for name
            public void setName(String name) {
                this.name = name;
            }

            // Public getter for age
            public int getAge() {
                return age;
            }

            // Public setter for age
            public void setAge(int age) {
                if (age > 0) {
                    this.age = age;
                }
            }
        }

        public class Main {
            public static void main(String[] args) {
                // Creating an instance of Person
                Person person = new Person();

                // Setting values using setter methods
                person.setName("John Doe");
                person.setAge(25);

                // Getting values using getter methods
                System.out.println("Name: " + person.getName());
                System.out.println("Age: " + person.getAge());
            }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        Name: John Doe
        Age: 25
        `}),e.jsx("h2",{children:"2. Benefits of Encapsulation"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Information Hiding"}),": Limits accessibility to data members and hides implementation details."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enhanced Adaptability"}),": Allows class variables to be read-only or write-only as needed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reusability"}),": Encapsulation improves reusability and is easy to modify for new requirements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Easy Testing"}),": Encapsulated code can be unit tested easily."]})]}),e.jsx("h2",{children:"3. Drawbacks of Encapsulation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"If not used properly, it can lead to increased complexity."}),e.jsx("li",{children:"May limit flexibility in implementation."})]}),e.jsx("h2",{children:"4. Achieving Encapsulation in Java"}),e.jsx("p",{children:"Encapsulation is achieved by:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Declaring the variables of a class as private."}),e.jsx("li",{children:"Providing public getter and setter methods to access and update the private variables."})]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
        public class BankAccount {
            private double balance;

            public BankAccount(double initialBalance) {
                if (initialBalance > 0) {
                    this.balance = initialBalance;
                }
            }

            public double getBalance() {
                return balance;
            }

            public void deposit(double amount) {
                if (amount > 0) {
                    balance += amount;
                }
            }

            public void withdraw(double amount) {
                if (amount > 0 && amount <= balance) {
                    balance -= amount;
                }
            }
        }

        public class Main {
            public static void main(String[] args) {
                BankAccount account = new BankAccount(1000.0);
                account.deposit(500.0);
                account.withdraw(200.0);

                System.out.println("Current balance: " + account.getBalance());
            }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        Current balance: 1300.0
        `}),e.jsx("h2",{children:"5. Key Points"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Encapsulation"}),": Protects internal object details from external access."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Data Hiding"}),": Declaring variables private to restrict access."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Access Control"}),": Using public methods to control data access and validation."]})]}),e.jsx("h2",{children:"6. Conclusion"}),e.jsx("p",{children:"Encapsulation ensures the protection and correct usage of data, enabling programmers to create flexible, reusable, and safe code."})]}),ny=()=>e.jsxs("div",{className:"EnumInJava",children:[e.jsx("h1",{children:"Enum in Java"}),e.jsx("p",{children:"In Java, an Enum is a special data type that allows developers to define a set of constants with fixed values. These constant names can be used wherever predefined values are required."}),e.jsx("h2",{children:"Syntax and Usage"}),e.jsx("p",{children:"An enum is defined as:"}),e.jsx("pre",{children:`
        enum Season {
          WINTER, SPRING, SUMMER, AUTUMN
        }
        `}),e.jsx("p",{children:"In this example:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["The Enum is named ",e.jsx("strong",{children:"Season"}),"."]}),e.jsxs("li",{children:["The members of the Enum are ",e.jsx("strong",{children:"WINTER, SPRING, SUMMER,"})," and ",e.jsx("strong",{children:"AUTUMN"}),"."]})]}),e.jsx("h2",{children:"Characteristics of Enums"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"A fixed set of constants"}),": Enums allow for a group of constants exclusive among themselves."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Instance Creation"}),": Enums are final and immutable, and cannot be instantiated using the ",e.jsx("code",{children:"new"})," keyword."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Methods and Constructors"}),": Enums can have constructors and methods."]})]}),e.jsx("h2",{children:"Enum Example"}),e.jsx("pre",{children:`
        enum Season {
          WINTER("Cold"),
          SPRING("Mild"),
          SUMMER("Hot"),
          AUTUMN("Cool");

          private String description;

          Season(String description) {
            this.description = description;
          }

          public String getDescription() {
            return description;
          }
        }

        public class EnumExample {
          public static void main(String[] args) {
            Season myFavoriteSeason = Season.SUMMER;
            System.out.println("My favorite season is " + myFavoriteSeason);
            System.out.println("Description: " + myFavoriteSeason.getDescription());

            for (Season season : Season.values()) {
              System.out.println(season + ": " + season.getDescription());
            }
          }
        }
        `}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:`
        My favorite season is SUMMER
        Description: Hot
        WINTER: Cold
        SPRING: Mild
        SUMMER: Hot
        AUTUMN: Cool
        `}),e.jsx("h2",{children:"Advantages of Enums"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Readability and Maintainability"}),": Enums enhance code readability by using meaningful names for constants."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Type Safety"}),": Enums are type-safe, ensuring only valid constants are used."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Static Checking"}),": Compile-time checking prevents errors related to invalid constant values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Switch Statement Support"}),": Enums work well with Java's ",e.jsx("code",{children:"switch"})," statements, simplifying logic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Constants and Behaviours Together"}),": Enums can encapsulate data and behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Singleton-like Behavior"}),": Only one instance of each enum value exists in the JVM."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enum Sets and Maps"}),": Java provides efficient collections like ",e.jsx("code",{children:"EnumSet"})," and ",e.jsx("code",{children:"EnumMap"})," for working with Enums."]})]}),e.jsx("h2",{children:"Disadvantages of Enums"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Limited Extensibility"}),": Enum constants are fixed at compile time and cannot be changed at runtime."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Namespace Pollution"}),": A large number of constants may pollute the namespace."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memory Overhead"}),": Enums use more memory than simple constants."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not Suitable for Large Data Sets"}),": Enums are best suited for small, well-defined groups of constants."]})]}),e.jsx("h2",{children:"When to Use Enums"}),e.jsxs("ul",{children:[e.jsx("li",{children:"When you have a small, well-defined group of constants that are unlikely to change."}),e.jsx("li",{children:"When you want to improve code readability and type safety."}),e.jsx("li",{children:"When you want to use methods and fields along with constants."})]}),e.jsx("h2",{children:"When to Avoid Enums"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Avoid Enums for large or frequently changing data sets."}),e.jsx("li",{children:"Avoid Enums if the constant set is not clearly defined or may frequently change."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Java Enums are a powerful way to define fixed sets of constants with behaviors and fields. They improve code clarity, type safety, and maintainability, but should be used cautiously for cases where extensibility and memory efficiency are important."})]}),iy=()=>e.jsxs("div",{className:"ExceptionHandlingInJava",children:[e.jsx("h1",{children:"Exception Handling in Java"}),e.jsxs("p",{children:["Exception handling in Java is a mechanism that ensures the normal flow of the program, even when runtime errors occur. Five keywords: ",e.jsx("strong",{children:"try"}),", ",e.jsx("strong",{children:"catch"}),", ",e.jsx("strong",{children:"finally"}),", ",e.jsx("strong",{children:"throw"}),", and ",e.jsx("strong",{children:"throws"})," are used in exception handling."]}),e.jsx("h2",{children:"Keywords"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"try:"})," The code that may result in an exception being thrown is enclosed in the try block."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"catch:"})," This block deals with exceptions and should always follow a try clause."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"finally:"})," Irrespective of whether an exception occurs, this section runs certain cleanup codes such as closing files or releasing resources."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"throw:"})," It explicitly raises an error condition or extends the default behavior by throwing exceptions at runtime."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"throws:"})," Declares exceptions that a method can throw, reducing memory usage by defining potential exceptions during compilation."]})]}),e.jsx("h2",{children:"Example"}),e.jsx("pre",{children:`
        public class ExceptionHandlingExample {
          public static void main(String[] args) {
            try {
              int data = 50 / 0; // Code that may throw an exception
            } catch (ArithmeticException e) {
              System.out.println("Exception caught: Division by zero!"); // Handling the exception
            } finally {
              System.out.println("Finally block is always executed."); // Cleanup code
            }
            System.out.println("Rest of the code...");
          }
        }
        `}),e.jsx("p",{children:"Explanation:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"try:"})," The code that may throw an exception."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"catch:"})," Catches the ",e.jsx("code",{children:"ArithmeticException"})," and prints an error message."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"finally:"})," Executes regardless of the exception."]}),e.jsxs("li",{children:["The program continues after the ",e.jsx("code",{children:"try-catch-finally"})," block."]})]}),e.jsx("h2",{children:"Multiple Catch Blocks"}),e.jsx("p",{children:"A single try block can have multiple catch blocks to handle different types of exceptions:"}),e.jsx("pre",{children:`
        public class MultipleCatchExample {
          public static void main(String[] args) {
            try {
              int[] arr = new int[5];
              arr[5] = 30 / 0; // Code that causes exceptions
            } catch (ArithmeticException e) {
              System.out.println("Arithmetic Exception caught: " + e.getMessage());
            } catch (ArrayIndexOutOfBoundsException e) {
              System.out.println("Array Index Out of Bounds Exception caught: " + e.getMessage());
            } catch (Exception e) {
              System.out.println("General Exception caught: " + e.getMessage());
            }
            System.out.println("Rest of the code...");
          }
        }
        `}),e.jsx("h2",{children:"Nested Try-Catch Blocks"}),e.jsx("p",{children:"Try blocks can be nested in Java, where a try block may appear within another:"}),e.jsx("pre",{children:`
        public class NestedTryCatchExample {
          public static void main(String[] args) {
            try {
              try {
                int data = 50 / 0; // Inner try block
              } catch (ArithmeticException e) {
                System.out.println("Inner try-catch block: " + e.getMessage());
              }
              int[] arr = new int[5];
              arr[5] = 10; // Outer try block
            } catch (ArrayIndexOutOfBoundsException e) {
              System.out.println("Outer try-catch block: " + e.getMessage());
            }
            System.out.println("Rest of the code...");
          }
        }
        `}),e.jsx("h2",{children:"Throw and Throws"}),e.jsx("h3",{children:"Throw"}),e.jsx("p",{children:"This keyword is used to throw an exception explicitly:"}),e.jsx("pre",{children:`
        public class ThrowExample {
          static void checkAge(int age) {
            if (age < 18) {
              throw new ArithmeticException("Access denied - You must be at least 18 years old.");
            } else {
              System.out.println("Access granted - You are old enough!");
            }
          }
          public static void main(String[] args) {
            checkAge(15);
          }
        }
        `}),e.jsx("h3",{children:"Throws"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"throws"})," keyword appears in the method signature to indicate that a method can generate exceptions:"]}),e.jsx("pre",{children:`
        import java.io.IOException;

        public class ThrowsExample {
          static void method() throws IOException {
            throw new IOException("Device error");
          }
          public static void main(String[] args) {
            try {
              method();
            } catch (IOException e) {
              System.out.println("Exception caught: " + e.getMessage());
            }
          }
        }
        `}),e.jsx("h2",{children:"Custom Exceptions"}),e.jsxs("p",{children:["In Java, custom exceptions can be created by extending the ",e.jsx("code",{children:"Exception"})," class:"]}),e.jsx("pre",{children:`
        class MyCustomException extends Exception {
          public MyCustomException(String message) {
            super(message);
          }
        }

        public class CustomExceptionExample {
          static void validate(int age) throws MyCustomException {
            if (age < 18) {
              throw new MyCustomException("Not valid age for voting");
            } else {
              System.out.println("Welcome to vote");
            }
          }
          public static void main(String[] args) {
            try {
              validate(15);
            } catch (MyCustomException e) {
              System.out.println("Exception caught: " + e.getMessage());
            }
          }
        }
        `}),e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["For robust and error-tolerant programming in Java, exception handling is essential. By using ",e.jsx("code",{children:"try"}),", ",e.jsx("code",{children:"catch"}),", ",e.jsx("code",{children:"finally"}),", ",e.jsx("code",{children:"throw"}),", and ",e.jsx("code",{children:"throws"}),", we can handle errors gracefully, ensuring smooth program execution even during unexpected events."]})]}),ry=()=>e.jsxs("div",{className:"FileHandlingInJava",children:[e.jsx("h1",{children:"File Handling in Java"}),e.jsxs("p",{children:["File handling in Java is a crucial part of several programs, which allows them to read and write files. The ",e.jsx("code",{children:"java.io"})," package has various classes and methods for file handling."]}),e.jsx("h2",{children:"Elements of Basic File Operations"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Creating a File"}),e.jsx("li",{children:"Writing to a File"}),e.jsx("li",{children:"Reading from a File"}),e.jsx("li",{children:"Appending to a File"}),e.jsx("li",{children:"Deleting Files"})]}),e.jsx("h2",{children:"1. Creating a File"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"File"})," class is the base for file handling in Java. It provides methods to create, delete, and get information about files and directories."]}),e.jsx("pre",{children:`
        import java.io.File;
        import java.io.IOException;

        public class CreateFileExample {
          public static void main(String[] args) {
            try {
              File file = new File("example.txt");
              if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
              } else {
                System.out.println("File already exists.");
              }
            } catch (IOException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
            }
          }
        }
        `}),e.jsx("h2",{children:"2. Writing to Files"}),e.jsxs("p",{children:["For writing to files, we use ",e.jsx("code",{children:"FileWriter"}),", ",e.jsx("code",{children:"BufferedWriter"}),", and ",e.jsx("code",{children:"PrintWriter"}),"."]}),e.jsx("h3",{children:"Example Using FileWriter and BufferedWriter"}),e.jsx("pre",{children:`
        import java.io.FileWriter;
        import java.io.BufferedWriter;
        import java.io.IOException;

        public class WriteFileExample {
          public static void main(String[] args) {
            try (FileWriter fw = new FileWriter("example.txt");
                BufferedWriter bw = new BufferedWriter(fw)) {
              bw.write("Hello, this is a test file!");
              System.out.println("Successfully wrote to the file.");
            } catch (IOException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
            }
          }
        }
        `}),e.jsx("h3",{children:"Example Using PrintWriter"}),e.jsx("pre",{children:`
        import java.io.PrintWriter;
        import java.io.IOException;

        public class PrintWriterExample {
          public static void main(String[] args) {
            try (PrintWriter pw = new PrintWriter("example.txt")) {
              pw.println("Hello, this is a test file!");
              pw.printf("Formatted number: %.2f%n", 123.456);
              System.out.println("Successfully wrote to the file.");
            } catch (IOException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
            }
          }
        }
        `}),e.jsx("h2",{children:"3. Reading from Files"}),e.jsxs("p",{children:["We use ",e.jsx("code",{children:"FileReader"})," and ",e.jsx("code",{children:"BufferedReader"})," or ",e.jsx("code",{children:"Scanner"})," to read from files."]}),e.jsx("h3",{children:"Example Using FileReader and BufferedReader"}),e.jsx("pre",{children:`
        import java.io.FileReader;
        import java.io.BufferedReader;
        import java.io.IOException;

        public class ReadFileExample {
          public static void main(String[] args) {
            try (FileReader fr = new FileReader("example.txt");
                BufferedReader br = new BufferedReader(fr)) {
              String line;
              while ((line = br.readLine()) != null) {
                System.out.println(line);
              }
            } catch (IOException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
            }
          }
        }
        `}),e.jsx("h3",{children:"Example Using Scanner"}),e.jsx("pre",{children:`
        import java.io.File;
        import java.io.FileNotFoundException;
        import java.util.Scanner;

        public class ReadFileWithScanner {
          public static void main(String[] args) {
            try {
              File file = new File("example.txt");
              Scanner scanner = new Scanner(file);
              while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                System.out.println(line);
              }
              scanner.close();
            } catch (FileNotFoundException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
            }
          }
        }
        `}),e.jsx("h2",{children:"4. Appending to Files"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"FileWriter"})," with the second argument set to ",e.jsx("code",{children:"true"})," to append to a file."]}),e.jsx("pre",{children:`
        import java.io.FileWriter;
        import java.io.IOException;

        public class AppendFileExample {
          public static void main(String[] args) {
            try (FileWriter fw = new FileWriter("example.txt", true)) {
              fw.write("\\nAppending text to the existing file.");
              System.out.println("Successfully appended to the file.");
            } catch (IOException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
            }
          }
        }
        `}),e.jsx("h2",{children:"5. Deleting Files"}),e.jsxs("p",{children:["Use the ",e.jsx("code",{children:"delete()"})," method of the ",e.jsx("code",{children:"File"})," class to delete a file."]}),e.jsx("pre",{children:`
        import java.io.File;

        public class DeleteFileExample {
          public static void main(String[] args) {
            File myFile = new File("example.txt");
            if (myFile.delete()) {
              System.out.println("Deleted the file: " + myFile.getName());
            } else {
              System.out.println("Failed to delete the file.");
            }
          }
        }
        `}),e.jsx("h2",{children:"Additional File Handling Operations"}),e.jsx("h3",{children:"Check if the File Exists"}),e.jsx("pre",{children:`
        import java.io.File;

        public class FileExistExample {
          public static void main(String[] args) {
            File myFile = new File("example.txt");
            if (myFile.exists()) {
              System.out.println("File exists.");
            } else {
              System.out.println("File does not exist.");
            }
          }
        }
        `}),e.jsx("h3",{children:"Getting File Information"}),e.jsx("pre",{children:`
        import java.io.File;

        public class FileInfoExample {
          public static void main(String[] args) {
            File myFile = new File("example.txt");
            if (myFile.exists()) {
              System.out.println("File name: " + myFile.getName());
              System.out.println("Absolute path: " + myFile.getAbsolutePath());
              System.out.println("Writeable: " + myFile.canWrite());
              System.out.println("Readable: " + myFile.canRead());
              System.out.println("File size in bytes: " + myFile.length());
            } else {
              System.out.println("The file does not exist.");
            }
          }
        }
        `}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Java file handling is a powerful feature that allows applications to interact with the filesystem. Understanding these basic operations is key to managing files in Java programs."})]}),sy=()=>e.jsxs("div",{className:"InheritanceDocument",children:[e.jsx("h1",{children:"Inheritance"}),e.jsx("h2",{children:"1. Inheritance - Basic Concepts"}),e.jsx("p",{children:"In Java, OOP’s core concepts include inheritance. It enables a new class to have the properties and behaviors (fields and methods) of an existing class. The inherited-from class is referred to as the base class or parent class while the inheriting class is called derived or child class."}),e.jsx("p",{children:"Inheritance is used:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code Reusability: The code written in the Superclass is common to all subclasses. Child classes can directly use the parent class code."}),e.jsx("li",{children:"Method Overriding: Method Overriding is achievable only through Inheritance. It is one of the ways by which Java achieves Run Time Polymorphism."}),e.jsx("li",{children:"Abstraction: The concept of abstract where we do not have to provide all details, is achieved through inheritance. Abstraction only shows the functionality to the user."})]}),e.jsx("h2",{children:"2. Types of Inheritance"}),e.jsx("p",{children:"Java supports single inheritance and multilevel inheritance. Classes in Java do not support multiple inheritances to avoid confusion or complexities."}),e.jsx("h3",{children:"Single Inheritance:"}),e.jsx("p",{children:"A class inherits from only one superclass."}),e.jsx("p",{children:e.jsx("strong",{children:"Single Inheritance Example:"})}),e.jsx("pre",{children:`class Animal {
  void eat() {
    System.out.println("eating...");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("barking...");
  }
}

class TestInheritance {
  public static void main(String args[]) {
    Dog d = new Dog();
    d.bark();
    d.eat();
  }
}`}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:`barking...
eating...`}),e.jsx("h3",{children:"Multilevel Inheritance:"}),e.jsx("p",{children:"A subclass can be derived from a superclass which can also be derived from a superclass itself."}),e.jsx("p",{children:e.jsx("strong",{children:"Multilevel Inheritance Example:"})}),e.jsx("pre",{children:`class Animal {
  void eat() {
    System.out.println("eating...");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("barking...");
  }
}

class BabyDog extends Dog {
  void weep() {
    System.out.println("weeping...");
  }
}

class TestInheritance2 {
  public static void main(String args[]) {
    BabyDog d = new BabyDog();
    d.weep();
    d.bark();
    d.eat();
  }
}`}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:`weeping...
barking...
eating...`}),e.jsx("h3",{children:"Hierarchical Inheritance:"}),e.jsx("p",{children:"In hierarchical inheritance, multiple subclasses extend from a single superclass."}),e.jsx("p",{children:e.jsx("strong",{children:"Hierarchical Inheritance Example:"})}),e.jsx("pre",{children:`class Animal {
  void eat() {
    System.out.println("eating...");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("barking...");
  }
}

class Cat extends Animal {
  void meow() {
    System.out.println("meowing...");
  }
}

class TestInheritance3 {
  public static void main(String args[]) {
    Cat c = new Cat();
    c.meow();
    c.eat();
    //c.bark(); // Compile-time Error
  }
}`}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:`meowing...
eating...`}),e.jsx("h3",{children:"Multiple Inheritance:"}),e.jsx("p",{children:"In multiple inheritance, a single subclass extends from multiple super-classes. But in Java, multiple Inheritance is not supported through class. To reduce the complexity and simplify the language, multiple inheritance is not supported in Java."}),e.jsx("p",{children:e.jsx("strong",{children:"Multiple Inheritance Example:"})}),e.jsx("pre",{children:`class A {
  void msg() {
    System.out.println("Hello");
  }
}

class B {
  void msg() {
    System.out.println("Welcome");
  }
}

// class C extends A, B { // This will cause a compile-time error
//   public static void main(String args[]) {
//     C obj = new C();
//     obj.msg(); // Which msg() method would be invoked?
//   }
//}`}),e.jsx("p",{children:"This will Show: Compile-time error."}),e.jsx("h3",{children:"Hybrid Inheritance:"}),e.jsx("p",{children:"Hybrid inheritance is a combination of two or more types of inheritance."}),e.jsx("p",{children:e.jsx("strong",{children:"Hybrid Inheritance Example:"})}),e.jsx("pre",{children:`class Parents {
  public void displayParents() {
    System.out.println("Two Parents");
  }
}

interface Mother {
  public void show();
}

interface Father {
  public void show();
}

public class Child extends Parents implements Mother, Father {
  public void show() {
    System.out.println("Mother and Father are parents");
  }

  public void displayChild() {
    System.out.println("Mother and Father have one child");
  }

  public static void main(String args[]) {
    Child obj = new Child();
    System.out.println("Implementation of Hybrid Inheritance in Java");
    obj.show();
    obj.displayChild();
  }
}`}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:`Implementation of Hybrid Inheritance in Java
Mother and Father are parents
Mother and Father have one child`}),e.jsx("h2",{children:"3. The “super” Keyword"}),e.jsx("p",{children:"The immediate parent’s object could be pointed by this keyword. This reference can be used to access superclass constructors and methods too."}),e.jsx("p",{children:e.jsx("strong",{children:"Example:"})}),e.jsx("pre",{children:`class Animal {
  // method in the superclass
  public void eat() {
    System.out.println("I can eat");
  }
}

// Dog inherits Animal
class Dog extends Animal {
  // overriding the eat() method
  @Override
  public void eat() {
    // call method of superclass
    super.eat();
    System.out.println("I eat dog food");
  }

  // new method in subclass
  public void bark() {
    System.out.println("I can bark");
  }
}

class Main {
  public static void main(String[] args) {
    // create an object of the subclass
    Dog labrador = new Dog();
    // call the eat() method
    labrador.eat();
    labrador.bark();
  }
}`}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:`I can eat
I eat dog food
I can bark`}),e.jsx("h2",{children:"4. Constructor in Inheritance"}),e.jsx("p",{children:"The first thing that happens when a subclass is created is calling its parent constructor so as to establish values for instance variables in the parent instance variables."}),e.jsx("p",{children:e.jsx("strong",{children:"Example:"})}),e.jsx("pre",{children:`class Animal {
  public Animal() {
    System.out.println("Animal is created");
  }
}

class Dog extends Animal {
  public Dog() {
    super(); // Calls the constructor of Animal class
    System.out.println("Dog is created");
  }
}

public class Main {
  public static void main(String[] args) {
    Dog myDog = new Dog();
  }
}`}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:`Animal is created
Dog is created`}),e.jsx("h2",{children:"5. Method Overriding"}),e.jsx("p",{children:"A subclass provides a definition for the method in the superclass that is being inherited from it, and this is called method overriding. The inherited methods are overridden so that they have the same name, return type, and arguments."}),e.jsx("p",{children:e.jsx("strong",{children:"Example:"})}),e.jsx("pre",{children:`class Animal {
  // method in the superclass
  public void eat() {
    System.out.println("I can eat");
  }
}

// Dog inherits Animal
class Dog extends Animal {
  // overriding the eat() method
  @Override
  public void eat() {
    System.out.println("I eat dog food");
  }

  // new method in subclass
  public void bark() {
    System.out.println("I can bark");
  }
}

class Main {
  public static void main(String[] args) {
    // create an object of the subclass
    Dog labrador = new Dog();
    // call the eat() method
    labrador.eat();
    labrador.bark();
  }
}`}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:`I eat dog food
I can bark`}),e.jsx("h2",{children:"6. Conclusion"}),e.jsx("p",{children:"Inheritance is a powerful feature of Object-Oriented Programming (OOP) in Java that enables code reusability and method overriding, among other benefits. By understanding and implementing inheritance, developers can create more modular and maintainable code structures."})]}),oy=()=>e.jsxs("div",{className:"JavaIteration",children:[e.jsx("h1",{children:"Java Iteration Statements"}),e.jsx("p",{children:"Iteration statements are also called loops. These types of statements are used to perform a block of code repeatedly as long as a certain condition is true. Java offers different kinds of iteration statements for dealing with various looping requirements which are:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"For Loop"}),e.jsx("li",{children:"While Loop"}),e.jsx("li",{children:"Do-While Loop"}),e.jsx("li",{children:"Nested Loops"}),e.jsx("li",{children:"Break / Continue Statement"}),e.jsx("li",{children:"Conclusion"})]}),e.jsx("h2",{children:"1. For Loop"}),e.jsx("p",{children:"For loop is applied if you know how many iterations that will be done. It consists of three parts: initialization, condition and increment/decrement."}),e.jsx("h3",{children:"Syntax:"}),e.jsx("pre",{children:e.jsx("code",{children:`for (initialization; condition; increment/decrement) {
    // block of code to be executed
}`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`for (int i = 0; i < 5; i++) {
    System.out.println("Value of i: " + i);
}`})}),e.jsx("h2",{children:"2. While Loop"}),e.jsx("p",{children:"The while loop is employed when you don’t have any idea about the number of times something could repeat and it depends on an expression that determines the completion or termination of the statement itself."}),e.jsx("h3",{children:"Syntax:"}),e.jsx("pre",{children:e.jsx("code",{children:`while (condition) {
    // block of code to be executed
}`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`int i = 0;
while (i < 5) {
    System.out.println("Value of i: " + i);
    i++;
}`})}),e.jsx("h2",{children:"3. Do-While Loop"}),e.jsx("p",{children:"Do-while loop functions similar to a while loop but it evaluates the expression after executing the statements within it hence ensuring that at least one execution happens before exiting."}),e.jsx("h3",{children:"Syntax:"}),e.jsx("pre",{children:e.jsx("code",{children:`do {
    // block of code to be executed
} while (condition);`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`int i = 0;
do {
    System.out.println("Value of i: " + i);
    i++;
} while (i < 5);`})}),e.jsx("h2",{children:"4. Break / Continue Statements"}),e.jsx("h3",{children:"The Statement Break"}),e.jsx("p",{children:"This statement is used to immediately terminate the loop and then leave the loop body."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.println("i: " + i);
}`})}),e.jsx("h3",{children:"The Statement Continue"}),e.jsx("p",{children:"The continue statement skips the current iteration of the loop and continues with the next iteration."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    System.out.println("i: " + i);
}`})}),e.jsx("h2",{children:"5. Nested Loops"}),e.jsx("p",{children:"Looping can occur within other loops, such as in working with multi-dimensional arrays or intricate iterative processes."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.println("i = " + i + ", j = " + j);
    }
}`})}),e.jsx("h2",{children:"6. Conclusion"}),e.jsx("p",{children:"Iteration statements in Java are essential for performing repetitive tasks efficiently. Java provides a variety of loops to suit different scenarios, from fixed iteration counts to conditionally controlled loops."})]}),ly=()=>e.jsxs("div",{className:"Poi",children:[e.jsx("h1",{children:"POI in Java"}),e.jsx("p",{children:"POI in Java is usually associated with the Apache POI library, a powerful open-source offering from Apache Software Foundation that enables Java programs to create, read, and manipulate Microsoft Office documents such as Excel spreadsheets, Word documents, and PowerPoint presentations."}),e.jsx("h2",{children:"Apache POI Components"}),e.jsxs("ul",{children:[e.jsx("li",{children:"HSSF (Horrible Spreadsheet Format): Deals with Excel '97(-2007) file format (.xls)."}),e.jsx("li",{children:"XSSF (XML Spreadsheet Format): Handles Excel 2007 OOXML (.xlsx) file format."}),e.jsx("li",{children:"HWPF (Horrible Word Processor Format): Manages Word '97(-2007) file format (.doc)."}),e.jsx("li",{children:"XWPF (XML Word Processor Format): Handles Word 2007 OOXML (.docx) file format."}),e.jsx("li",{children:"HSLF (Horrible Slide Layout Format): Controls PowerPoint '97(-2007) file format (.ppt)."}),e.jsx("li",{children:"XSLF (XML Slide Layout Format): Handles PowerPoint 2007 OOXML (.pptx) file format."})]}),e.jsx("h2",{children:"Importance of POI in Java"}),e.jsx("h3",{children:"1. Microsoft Office Formats Handling"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Excel Manipulation:"})," POI enables Java applications to create, read, edit, and write Excel files (.xls and .xlsx)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Word and PowerPoint Integration:"})," POI also supports reading and writing Word documents (doc, docx) and PowerPoint presentations (ppt, pptx)."]})]}),e.jsx("h3",{children:"2. Integration with Java Ecosystem"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Seamless Integration:"})," POI works well with Java frameworks like Spring, Hibernate, and Java EE technologies."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cross-Platform Compatibility:"})," Java's platform independence ensures applications using POI can run on multiple operating systems."]})]}),e.jsx("h3",{children:"3. Automation and Reporting"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Automated Data Processing:"})," Repetitive tasks like data entry or report generation can be automated using POI."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Formatting and Customization:"})," POI allows developers to programmatically add formatting, formulas, and charts to Excel files."]})]}),e.jsx("h3",{children:"4. Community and Support"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Active Community:"})," POI has a large and active developer community that ensures continuous updates and improvements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Documentation and Resources:"})," Comprehensive APIs, tutorials, and examples make it easy for developers to use POI."]})]}),e.jsx("h3",{children:"5. Business Applications"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Enterprise Solutions:"})," Many enterprise applications rely on POI for managing and processing Office documents."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Compatibility and Standards:"})," POI ensures compatibility with Microsoft Office standards, making it a reliable choice for document management."]})]}),e.jsx("h2",{children:"Example of Apache POI in Java (XSSF for Excel)"}),e.jsx("p",{children:"To create a simple Excel spreadsheet using Apache POI (XSSF for .xlsx files):"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Add Apache POI Dependency:"})," Include the following dependencies in your Maven pom.xml:",e.jsx("pre",{children:`<dependency>
  <groupId>org.apache.poi</groupId>
  <artifactId>poi</artifactId>
  <version>5.2.3</version>
</dependency>
<dependency>
  <groupId>org.apache.poi</groupId>
  <artifactId>poi-ooxml</artifactId>
  <version>5.2.3</version>
</dependency>`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Create an Excel File:"})," Example code to create an Excel file in Java:",e.jsx("pre",{children:`import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.io.FileOutputStream;
import java.io.IOException;

public class ExcelWriter {
  public static void main(String[] args) {
    try (Workbook workbook = new XSSFWorkbook()) {
      Sheet sheet = workbook.createSheet("Employee Data");

      // Creating header row
      Row headerRow = sheet.createRow(0);
      headerRow.createCell(0).setCellValue("ID");
      headerRow.createCell(1).setCellValue("Name");
      headerRow.createCell(2).setCellValue("Age");

      // Creating data rows
      Row dataRow1 = sheet.createRow(1);
      dataRow1.createCell(0).setCellValue(1);
      dataRow1.createCell(1).setCellValue("John Doe");
      dataRow1.createCell(2).setCellValue(30);

      Row dataRow2 = sheet.createRow(2);
      dataRow2.createCell(0).setCellValue(2);
      dataRow2.createCell(1).setCellValue("Jane Smith");
      dataRow2.createCell(2).setCellValue(28);

      // Writing workbook to file
      try (FileOutputStream fileOut = new FileOutputStream("employee.xlsx")) {
        workbook.write(fileOut);
        System.out.println("Excel file has been created successfully!");
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}`})]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Apache POI is an essential library for Java developers working with Microsoft Office documents, offering a flexible and comprehensive API for handling Excel, Word, and PowerPoint files. Despite some challenges, such as a long learning curve and memory consumption, it remains a popular choice due to its robustness, active community support, and wide adoption in enterprise applications."})]}),ay=()=>e.jsxs("div",{className:"Polymorphism",children:[e.jsx("h1",{children:"Polymorphism in Java"}),e.jsx("h2",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Polymorphism"}),e.jsx("li",{children:"Types of Polymorphism"}),e.jsx("li",{children:"Compile-Time Polymorphism"}),e.jsx("ul",{children:e.jsx("li",{children:"Sub-types of Compile-Time Polymorphism"})}),e.jsx("li",{children:"Run-Time Polymorphism"}),e.jsx("ul",{children:e.jsx("li",{children:"Sub-types of Run-Time Polymorphism"})}),e.jsx("li",{children:"Key features of Polymorphism"}),e.jsx("li",{children:"Using Polymorphism in Practice"}),e.jsx("li",{children:"Advantages of Polymorphism"}),e.jsx("li",{children:"Disadvantages of Polymorphism"}),e.jsx("li",{children:"Conclusion"})]}),e.jsx("h2",{children:"Polymorphism"}),e.jsx("p",{children:"Polymorphism in Java is a notable concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. By allowing methods to be defined in a superclass and overridden in subclasses, it provides the flexibility and expansibility necessary for software design."}),e.jsx("pre",{children:`// Animal.java 
class Animal { 
    public void makeSound() { 
        System.out.println("Some sound"); 
    } 
} 

// Dog.java 
class Dog extends Animal { 
    @Override 
    public void makeSound() { 
        System.out.println("Bark"); 
    } 
} 

// Cat.java 
class Cat extends Animal { 
    @Override 
    public void makeSound() { 
        System.out.println("Meow"); 
    } 
} 

// Main.java 
public class Main { 
    public static void main(String[] args) { 
        Animal myDog = new Dog(); 
        Animal myCat = new Cat(); 

        myDog.makeSound();  // Outputs: Bark 
        myCat.makeSound();  // Outputs: Meow 
    } 
}`}),e.jsx("h2",{children:"Types of Polymorphism in Java"}),e.jsxs("p",{children:["There are two types of polymorphism:",e.jsxs("ul",{children:[e.jsx("li",{children:"Compile-time Polymorphism (Method Overloading)"}),e.jsx("li",{children:"Run-time Polymorphism (Method Overriding)"})]})]}),e.jsx("h3",{children:"Compile-time Polymorphism (Method Overloading)"}),e.jsx("p",{children:"Method overloading is a form of polymorphism occurring at compile time. A class can have more than one method with the same name if their parameter lists differ. The compiler determines which method will be invoked based on the method signature."}),e.jsx("pre",{children:`// Example of Method Overloading
class Helper {
    static int Multiply(int a, int b) {
        return a * b;
    }

    static double Multiply(double a, double b) {
        return a * b;
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(Helper.Multiply(2, 4));  // Output: 8
        System.out.println(Helper.Multiply(5.5, 6.3));  // Output: 34.65
    }
}`}),e.jsx("h3",{children:"Run-time Polymorphism (Method Overriding)"}),e.jsx("p",{children:"Method overriding allows a subclass to provide its own implementation of a method that is already defined in its superclass. The object referred to at runtime decides the method that will be called."}),e.jsx("pre",{children:`// Example of Method Overriding
class Parent {
    void Print() {
        System.out.println("parent class");
    }
}

class subclass1 extends Parent {
    void Print() {
        System.out.println("subclass1");
    }
}

class subclass2 extends Parent {
    void Print() {
        System.out.println("subclass2");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent a;
        a = new subclass1();
        a.Print();  // Output: subclass1
        a = new subclass2();
        a.Print();  // Output: subclass2
    }
}`}),e.jsx("h2",{children:"Key Features of Polymorphism"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code Reusability"}),e.jsx("li",{children:"Flexibility"}),e.jsx("li",{children:"Interface Implementation"})]}),e.jsx("h2",{children:"Advantages of Polymorphism"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Enhances code reusability"}),e.jsx("li",{children:"Reduces the amount of code written"}),e.jsx("li",{children:"Allows dynamic binding"}),e.jsx("li",{children:"Enables generic code"})]}),e.jsx("h2",{children:"Disadvantages of Polymorphism"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Difficult to determine the behavior of polymorphic objects"}),e.jsx("li",{children:"May result in performance issues"})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Polymorphism is a fundamental concept in object-oriented programming that allows objects to be treated as instances of their superclass or interface. It enhances code reuse, extensibility, and maintainability, making it a powerful tool for Java developers."})]}),cy=()=>e.jsxs("div",{className:"SeleniumAlertsTheory",children:[e.jsx("h1",{children:"Handling Alerts in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsxs("p",{children:["Alerts in Selenium are pop-up messages that can appear during automation testing to get the user’s attention. Selenium provides an interface called ",e.jsx("strong",{children:"Alert"})," to interact with these alerts. There are different types of alerts that can be handled using Selenium, each serving a unique purpose."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Types of Alerts in Selenium"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Simple Alert:"})," Shows only a message with an ‘OK’ button."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confirmation Alert:"})," Displays a message with ‘OK’ and ‘Cancel’ options for the user to confirm or dismiss the action."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Prompt Alert:"})," Provides a message box with ‘OK’ and ‘Cancel’ options and allows users to input text."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Common Methods to Handle Alerts"}),e.jsxs("p",{children:["Selenium provides several methods to interact with alerts using the ",e.jsx("strong",{children:"Alert"})," interface:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"accept():"})," Clicks on the 'OK' button of the alert."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"dismiss():"})," Clicks on the 'Cancel' button of the alert."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"getText():"})," Retrieves the text from the alert box."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"sendKeys(String input):"})," Sends text input to the alert (used for prompt alerts)."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Steps to Handle Alerts"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Trigger the alert:"})," Perform the action that causes the alert to appear."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Switch to the alert:"})," Use ",e.jsx("code",{children:"switchTo().alert()"})," to focus on the alert."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Perform operations:"})," Use methods like ",e.jsx("code",{children:"accept()"}),", ",e.jsx("code",{children:"dismiss()"}),", ",e.jsx("code",{children:"getText()"}),", or ",e.jsx("code",{children:"sendKeys()"})," to interact with the alert."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Continue execution:"})," After handling the alert, proceed with the test script execution."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["Handling alerts in Selenium is crucial for automated web testing. By switching the context of the WebDriver to the alert, you can perform actions such as accepting or dismissing the alert, reading the alert text, or entering data into a prompt alert. Selenium’s ",e.jsx("strong",{children:"Alert"})," interface provides a simple way to handle various types of pop-ups such as JavaScript alerts, modal dialogs, and more."]})]})]}),dy=()=>e.jsxs("div",{className:"CdpSeleniumTheory",children:[e.jsx("h1",{children:"CDP (Chrome DevTools Protocol) in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"The Chrome DevTools Protocol (CDP) is a set of tools that allows you to control, inspect, and debug Chromium-based browsers. In Selenium WebDriver, CDP is supported, enabling you to extend browser control beyond regular WebDriver actions. CDP features allow interception of network traffic, logging to the console, collecting performance metrics, and much more."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why Use CDP with Selenium?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Network Interception:"})," Modify network traffic and browse pages with ease."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Console Logs:"})," Record and analyze browser console logs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance Metrics:"})," Measure page load time and rendering performance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Emulating Conditions:"})," Simulate different conditions like offline mode or varying network speeds."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Screenshot and PDF Generation:"})," Capture images of web pages or create PDFs."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Setting Up CDP with Selenium"}),e.jsx("p",{children:"To use CDP with Selenium, a connection to the Chrome DevTools Protocol must be established. This allows commands to be issued to the browser and events to be received."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Install WebDriver and establish a connection for DevTools communication."}),e.jsx("li",{children:"Activate relevant domains such as Network or Performance."}),e.jsx("li",{children:"Control the browser using CDP commands and receive events."})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example: Network Interception Using CDP"}),e.jsx("p",{children:"Below is a simple example of using CDP to intercept network traffic:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.devtools.DevTools;
import org.openqa.selenium.devtools.v116.network.Network;

public class CDPExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        DevTools devTools = ((ChromeDriver) driver).getDevTools();
        devTools.createSession();

        devTools.send(Network.enable(Optional.empty(), Optional.empty(), Optional.empty()));

        // Add request listener
        devTools.addListener(Network.requestWillBeSent(), request -> {
            System.out.println("Request URL: " + request.getRequest().getUrl());
        });

        // Navigate to a webpage
        driver.get("https://example.com");

        // Close the browser
        driver.quit();
    }
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"CDP integration with Selenium enables advanced browser automation capabilities beyond what the regular WebDriver API offers. By utilizing CDP, testers can intercept network traffic, capture console logs, simulate network conditions, and gather performance metrics. This enhances the depth and flexibility of automated test scripts, making them more powerful for real-world testing scenarios."})]})]}),uy=()=>e.jsxs("div",{className:"DataDrivenFramework",children:[e.jsx("h1",{children:"Data-Driven Framework in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"A Data-Driven Framework in Selenium allows running the same test cases multiple times with different sets of data. Instead of hardcoding test data into test scripts, data is stored externally in files like Excel, CSV, or databases. This increases test coverage and flexibility."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Description of Data-Driven Framework"}),e.jsx("p",{children:"Data-Driven Framework helps in reading test data from external sources like Excel, CSV, databases, XML, or JSON files. This approach enhances test reusability and allows easy management of test data without modifying the core test logic."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Sources of Data"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Excel Files:"})," Structured and easy to manage datasets."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CSV Files:"})," Simple format but lacks organization features."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Databases:"})," Suitable for large applications requiring data accuracy."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"XML Files:"})," Hierarchical data structure for complex data."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"JSON Files:"})," Ideal for web applications and APIs due to minimal structure."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reusability:"})," Test scripts are reusable with different inputs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Separation of Data:"})," Test data and scripts are kept apart."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scalability:"})," Easily scale by adding more data sources."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Improved Coverage:"})," Run more scenarios and edge cases with various datasets."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Maintainability:"})," Changes in test data do not require changes in test scripts."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Disadvantages"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Initial Setup:"})," Requires setting up logic to read from multiple external data sources."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance Overhead:"})," Opening large external files can slow down performance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Change in Data Structure:"})," Changing data format requires updating the data reading logic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Debugging:"})," Test failures can be harder to debug due to separation of data and test logic."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Implementation Example"}),e.jsx("p",{children:"Here is a sample implementation of a Data-Driven Framework using Selenium with Java:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class DataDrivenTest {
    private WebDriver driver;

    @DataProvider(name = "loginData")
    public Object[][] loginDataProvider() {
        // Logic to fetch data from Excel file
    }

    @Test(dataProvider = "loginData")
    public void testLogin(String username, String password) {
        driver = new ChromeDriver();
        driver.get("https://example.com/login");
        // Perform login and assert results
        driver.quit();
    }
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"The Data-Driven Framework in Selenium enhances flexibility, reusability, and scalability in test automation by separating test data from test scripts. Using external data sources like Excel, CSV, or databases allows testers to execute the same test with multiple datasets, increasing test coverage and effectiveness."})]})]}),hy=()=>e.jsxs("div",{className:"DockerInSelenium",children:[e.jsx("h1",{children:"Docker in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Docker is a tool that simplifies the deployment of applications by packaging them in lightweight, portable containers. In Selenium testing, Docker containers allow tests to run in isolated environments with specific configurations, enabling better quality assurance. The containers contain the Selenium server and the browser being tested, offering a consistent environment for executing Selenium tests."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why Use Docker?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Transient Containers:"})," Containers are temporary and live within a predefined environment, which can be destroyed after the tests are done, ensuring a clean slate for every test run."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cross-Browser Testing:"})," Docker containers enable cross-browser testing, making it easy to run tests on multiple browser-OS combinations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parallel Testing:"})," Docker containers allow for parallel testing, reducing execution time and increasing testing efficiency."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Types of Docker Set-Up"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Single-Node Setup:"})," Runs a Selenium Hub and a browser in a single container, suitable for local testing environments."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Distributed Grid Setup:"})," Uses multiple Docker containers with a Selenium Grid Hub and browser nodes, allowing for large-scale testing across different browsers and operating systems."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages of Docker"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Seclusion:"})," Docker creates isolated containers that prevent changes from affecting other environments."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Uniformity:"})," Docker ensures a consistent environment for every test run."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flexibility:"})," Easily add or remove nodes for the Selenium Grid based on the target load."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessibility:"})," Docker containers can run on any platform that supports Docker."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Efficient Setup:"})," Test environments can be quickly set up and torn down, reducing time and resources."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Disadvantages of Docker"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Complexity:"})," Team members may require training to work with Docker containers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Resource Overhead:"})," Running multiple containers in parallel may lead to resource congestion."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Networking Issues:"})," Docker containers communicating across networks may experience delays or failures."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Limited GUI:"})," Debugging tests that require a graphical interface can be challenging in Docker containers."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Syntax and Basic Operations"}),e.jsx("h3",{children:"1. Installing Docker"}),e.jsx("p",{children:"Ensure that Docker is installed on your machine by following the instructions on the Docker website."}),e.jsx("h3",{children:"2. Commands to Set Up Selenium Grid"}),e.jsx("pre",{children:e.jsx("code",{children:"docker pull selenium/hub docker pull selenium/node-chrome docker pull selenium/node-firefox docker run -d -p 4444:4444 --name selenium-hub selenium/hub docker run -d --name chrome -e HUB_HOST=selenium-hub --link selenium-hub:hub selenium/node-chrome docker run -d --name firefox -e HUB_HOST=selenium-hub --link selenium-hub:hub selenium/node-firefox"})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example: Running Selenium Tests in Docker"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.*;

public class DockerSeleniumTest {
    private WebDriver driver;

    @BeforeMethod
    @Parameters({"browser"})
    public void setUp(String browser) throws MalformedURLException {
        DesiredCapabilities capabilities;
        if (browser.equalsIgnoreCase("chrome")) {
            capabilities = DesiredCapabilities.chrome();
        } else if (browser.equalsIgnoreCase("firefox")) {
            capabilities = DesiredCapabilities.firefox();
        } else {
            throw new IllegalArgumentException("Invalid browser: " + browser);
        }
        driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities);
    }

    @Test
    public void testTitle() {
        driver.get("https://www.example.com");
        Assert.assertEquals(driver.getTitle(), "Example Domain");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Best Practices for Running Selenium Tests in Docker"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use containers as microservices to reduce their size and improve flexibility."}),e.jsx("li",{children:"Set up and tear down the test environment for each run to ensure clean and consistent results."}),e.jsx("li",{children:"Run tests in parallel to save time and fully utilize the underlying hardware."})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Docker in Selenium allows for scalable and efficient test automation by creating isolated and consistent test environments. While there is some learning curve and resource overhead, Docker's ability to enhance parallel testing, cross-browser testing, and environment setup makes it a powerful tool for Selenium-based frameworks."})]})]}),py=()=>e.jsxs("div",{className:"ExtentReportsInSelenium",children:[e.jsx("h1",{children:"Extent Reports in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Extent Reports is an open-source library for generating detailed, customizable test reports in automation testing. Widely used with Selenium, it provides enhanced features compared to standard reports, making it a preferred tool for many organizations. Extent Reports can be integrated with various frameworks like TestNG, JUnit, and more, offering features such as screenshots, logs, and theme customization."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages of Extent Reports"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Open Source:"})," Extent Reports is free to use."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pictorial Representation:"})," It provides a visual representation of test results."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Customization:"})," Reports can be tailored to specific requirements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Media Attachments:"})," Allows screenshots and logs to be added for detailed summaries."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Framework Integration:"})," Easily integrates with frameworks like JUnit, TestNG, and more."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CI Tool Support:"})," Can be configured with CI tools like Jenkins and Bamboo."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Types of Reports"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Basic HTML Reports:"})," Provide comprehensive test results, including test logs and execution details."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Interactive Reports:"})," Customized reports with themes like Dark and Standard, offering filters and tabs for results such as passed, failed, or skipped."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Real-Time Reports:"})," Display live updates during test execution, allowing you to monitor the progress in real-time."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages of Extent Reports"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Accurate Reporting:"})," Detailed insights on test steps, screenshots, and logs for each stage."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Customization and Themes:"})," Various styles and themes to customize reports to your needs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Framework Support:"})," Supports multiple frameworks like TestNG, JUnit, and Cucumber."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Media Support:"})," Includes support for screenshots and videos in reports."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Real-Time Data:"})," Offers live updates on test execution."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Disadvantages of Extent Reports"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Learning Curve:"})," Some features may be challenging for beginners to grasp."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance Overhead:"})," Generating extensive reports with logs and media attachments may slow down performance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Third-Party Dependency:"})," Requires external libraries for full functionality."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Configuration Time:"})," Initial setup and configuration can be time-consuming compared to simpler tools."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Using Extent Reports in Selenium"}),e.jsxs("p",{children:["The two main classes used in Extent Reports are ",e.jsx("strong",{children:"ExtentReports"})," and ",e.jsx("strong",{children:"ExtentTest"}),"."]}),e.jsx("pre",{children:e.jsx("code",{children:`ExtentReports reports = new ExtentReports("Path to store HTML report", true/false);
ExtentTest test = reports.startTest("TestName");

test.log(LogStatus.PASS, "Test Passed");
test.log(LogStatus.FAIL, "Test Failed");
reports.endTest();
reports.flush();`})}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"log"})," method logs test steps, and test status can be set as PASS, FAIL, SKIP, or INFO. The ",e.jsx("strong",{children:"flush"})," method generates the final report."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example of Extent Reports with Selenium and Java"}),e.jsx("pre",{children:e.jsx("code",{children:`import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;

public class ExtentReportsExample {
    private WebDriver driver;
    private ExtentReports extentReports;
    private ExtentTest test;

    @BeforeClass
    public void setUpReport() {
        ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter("extentReports.html");
        extentReports = new ExtentReports();
        extentReports.attachReporter(htmlReporter);
    }

    @BeforeMethod
    public void setUp() {
        driver = new ChromeDriver();
    }

    @Test
    public void validateGoogleHomePage() {
        test = extentReports.createTest("validateGoogleHomePage", "Test to validate Google Home Page");
        driver.get("https://www.google.com");
        test.log(Status.INFO, "Navigated to Google");

        String title = driver.getTitle();
        test.log(Status.INFO, "Title fetched: " + title);

        Assert.assertEquals(title, "Google");
        test.log(Status.PASS, "Title is correct");
    }

    @AfterMethod
    public void tearDown() {
        driver.quit();
    }

    @AfterClass
    public void tearDownReport() {
        extentReports.flush();
    }
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Extent Reports is a highly flexible and powerful tool for generating detailed and interactive reports in Selenium automation projects. While it offers several advanced features, it may take some time to set up and configure. Nonetheless, the comprehensive and customizable reports it generates make it a valuable tool in any automation testing framework."})]})]}),my=()=>e.jsxs("div",{className:"HandlingWebElements",children:[e.jsx("h1",{children:"Handling Web Elements in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"What are Web Elements?"}),e.jsxs("p",{children:["Web elements are components on a web page, such as text boxes, checkboxes, buttons, dropdowns, radio buttons, web forms, and more. These elements can be identified by attributes like ",e.jsx("code",{children:"id"}),", ",e.jsx("code",{children:"className"}),", ",e.jsx("code",{children:"name"}),", or ",e.jsx("code",{children:"xpath"}),". With Selenium, tasks like clicking buttons or filling text boxes can be automated by interacting with these elements."]}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement element = driver.findElement(By.id("TextBox"));
element.sendKeys("stqatools");

driver.findElement(By.id("TextBox")).sendKeys("stqatools");`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Common WebDriver Commands for Web Elements"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sendKeys:"})," Automatically types content into editable fields."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"isDisplayed:"})," Checks if an element is visible on the screen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"isEnabled:"})," Verifies if an element is enabled or disabled."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"isSelected:"})," Determines if an element is selected, used for checkboxes or radio buttons."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"getText:"})," Retrieves the text from a web element."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"click:"})," Simulates clicking on buttons, hyperlinks, or checkboxes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"findElement:"})," Identifies a single web element."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"findElements:"})," Identifies a list of web elements matching the criteria."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Locating Web Elements"}),e.jsx("p",{children:"You can locate web elements using various locator strategies in Selenium:"}),e.jsx("pre",{children:e.jsx("code",{children:`// By ID
WebElement elementById = driver.findElement(By.id("element_id"));

// By Name
WebElement elementByName = driver.findElement(By.name("element_name"));

// By XPath
WebElement elementByXPath = driver.findElement(By.xpath("//tag[@attribute='value']"));

// By CSS Selector
WebElement elementByCssSelector = driver.findElement(By.cssSelector("css.selector"));`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Performing Actions on Web Elements"}),e.jsxs("p",{children:["Various actions can be performed on web elements in Selenium, such as typing into text boxes, clicking buttons, or checking if elements are visible or enabled. By using appropriate locators like ",e.jsx("code",{children:"id"})," or ",e.jsx("code",{children:"xpath"}),", you can interact with web elements and automate browser activities."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Waiting for Web Elements"}),e.jsx("p",{children:"In some cases, it may be necessary to wait for elements to become visible or interactable. Selenium provides explicit waits for these scenarios:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebDriverWait wait = new WebDriverWait(driver, 10);
WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("element_id")));`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example: Handling Web Elements in Selenium"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.List;

public class SeleniumExample {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.google.com");

        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.sendKeys("Selenium WebDriver");
        searchBox.submit();

        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.id("search")));

        List<WebElement> results = driver.findElements(By.cssSelector("h3"));
        for (WebElement result : results) {
            System.out.println(result.getText());
        }

        driver.quit();
    }
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Selenium enables automation of browser actions by interacting with web elements like text boxes, buttons, and links. With proper locators, WebDriver commands, and wait mechanisms, you can effectively handle various elements on a web page to perform automated testing tasks."})]})]}),fy=()=>e.jsxs("div",{className:"HandlingWindowInSelenium",children:[e.jsx("h1",{children:"Handling Windows in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Window handling in Selenium allows users to manage multiple browser windows or tabs within a web application. This functionality is essential when automating scenarios that require interacting with pop-ups, multiple tabs, or windows that require switching between them to perform actions."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why Window Handling is Important"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Multi-Window Scenarios:"})," Many web applications open new windows or tabs (e.g., for login, payments, etc.), where Selenium must switch focus to interact with these elements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Automation Tasks:"})," Automated scripts often deal with multiple active windows or tabs and need to switch between them to complete tasks."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Selenium WebDriver Methods for Window Handles"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"getWindowHandle():"})," Returns the unique window handle of the currently active window."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"getWindowHandles():"})," Returns all the window handles opened by the WebDriver."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"switchTo().window():"})," Switches the focus of WebDriver to a specified window using its window handle."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Basic Steps for Window Handling in Selenium"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Open the main window and perform actions."}),e.jsx("li",{children:"Trigger the new window/tab."}),e.jsxs("li",{children:["Retrieve the window handles using ",e.jsx("code",{children:"getWindowHandles()"}),"."]}),e.jsxs("li",{children:["Switch to the desired window using ",e.jsx("code",{children:"switchTo().window()"}),"."]}),e.jsx("li",{children:"Perform actions in the new window/tab."}),e.jsx("li",{children:"Close the window and switch back to the main window."})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example: Handling Multiple Windows in Selenium"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.Set;

public class WindowHandlingExample {
    public static void main(String[] args) {
        // Set up WebDriver
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/main-page");

        // Store the current window handle (main window)
        String mainWindowHandle = driver.getWindowHandle();

        // Click a link that opens a new window
        driver.findElement(By.id("openNewWindowButton")).click();

        // Get all window handles
        Set<String> allWindowHandles = driver.getWindowHandles();

        // Switch to the new window
        for (String handle : allWindowHandles) {
            if (!handle.equals(mainWindowHandle)) {
                driver.switchTo().window(handle);
                break;
            }
        }

        // Perform actions in the new window
        WebElement newWindowElement = driver.findElement(By.id("newWindowElement"));
        System.out.println("Text in new window: " + newWindowElement.getText());

        // Close the new window
        driver.close();

        // Switch back to the main window
        driver.switchTo().window(mainWindowHandle);

        // Perform actions in the main window
        WebElement mainElement = driver.findElement(By.id("mainElement"));
        System.out.println("Text in main window: " + mainElement.getText());

        // Close the browser
        driver.quit();
    }
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Handling Multiple Windows in Complicated Scenarios"}),e.jsx("p",{children:"Here’s an example of handling nested windows where multiple windows are opened in sequence:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.ArrayList;
import java.util.Set;

public class MultipleWindowHandlingExample {
    public static void main(String[] args) {
        // Set up WebDriver
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/page-with-multiple-windows");

        // Store the current window handle
        String mainWindowHandle = driver.getWindowHandle();

        // Click a link to open the first new window
        driver.findElement(By.id("openFirstWindowButton")).click();

        // Get all window handles
        Set<String> windowHandles = driver.getWindowHandles();
        ArrayList<String> handlesList = new ArrayList<>(windowHandles);

        // Switch to the first new window
        driver.switchTo().window(handlesList.get(1));

        // Perform actions in the first new window
        WebElement firstWindowElement = driver.findElement(By.id("firstWindowElement"));
        System.out.println("Text in first new window: " + firstWindowElement.getText());

        // Open another window from the first window
        driver.findElement(By.id("openSecondWindowButton")).click();

        // Refresh window handles list
        windowHandles = driver.getWindowHandles();
        handlesList = new ArrayList<>(windowHandles);

        // Switch to the second new window
        driver.switchTo().window(handlesList.get(2));

        // Perform actions in the second new window
        WebElement secondWindowElement = driver.findElement(By.id("secondWindowElement"));
        System.out.println("Text in second new window: " + secondWindowElement.getText());

        // Close the second new window and switch back to the first
        driver.close();
        driver.switchTo().window(handlesList.get(1));

        // Close the first new window and switch back to the main window
        driver.close();
        driver.switchTo().window(mainWindowHandle);

        // Perform actions in the main window and close the browser
        WebElement mainElement = driver.findElement(By.id("mainElement"));
        System.out.println("Text in main window: " + mainElement.getText());
        driver.quit();
    }
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["Window handling is a vital feature in Selenium WebDriver when automating scenarios involving multiple browser windows or tabs. With methods like ",e.jsx("code",{children:"getWindowHandle()"}),", ",e.jsx("code",{children:"getWindowHandles()"}),", and ",e.jsx("code",{children:"switchTo().window()"}),", you can effectively switch between windows, perform operations, and navigate complex workflows with ease."]})]})]}),xy=()=>e.jsxs("div",{className:"IsElementPresentInSelenium",children:[e.jsx("h1",{children:"isElementPresent in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"isElementPresent"})," method in Selenium is a custom function often defined in test automation scripts to verify the presence of elements on a webpage. While Selenium WebDriver doesn't include this method by default, developers create it to avoid errors like ",e.jsx("code",{children:"NoSuchElementException"}),", which occur when trying to interact with missing elements."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Main Objectives of isElementPresent"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Dynamic Content:"})," Helps handle elements that load asynchronously, avoiding exceptions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Conditional Actions:"})," Allows actions based on the presence or absence of elements (e.g., clicking a button only if it exists)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Robust Test Scripts:"})," Ensures scripts can handle various page states gracefully."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Approaches to Implement isElementPresent"}),e.jsx("p",{children:"The isElementPresent method can be implemented in two common ways:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Using findElements Method:"})," Uses a list to check for the presence of elements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using WebDriverWait with ExpectedConditions:"})," Waits for a specific condition to be met, such as element visibility."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"1. Using findElements Method"}),e.jsx("pre",{children:e.jsx("code",{children:`public boolean isElementPresent(By locator) {
    List<WebElement> elements = driver.findElements(locator);
    return !elements.isEmpty();
}`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.List;

public class ElementPresenceCheck {
    public static WebDriver driver;
    public static void main(String[] args) {
        driver = new ChromeDriver();
        driver.get("https://example.com");

        // Define the locator for the element to check
        By locator = By.id("elementId");

        // Check if the element is present
        boolean isPresent = isElementPresent(locator);
        if (isPresent) {
            System.out.println("Element is present.");
        } else {
            System.out.println("Element is not present.");
        }

        driver.quit();
    }

    public static boolean isElementPresent(By locator) {
        List<WebElement> elements = driver.findElements(locator);
        return !elements.isEmpty();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This example checks for the presence of an element by returning ",e.jsx("code",{children:"true"})," if the element is found and ",e.jsx("code",{children:"false"})," if it isn't."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"2. Using WebDriverWait with ExpectedConditions"}),e.jsx("pre",{children:e.jsx("code",{children:`public boolean isElementPresent(By locator, WebDriver driver, int timeoutInSeconds) {
    try {
        WebDriverWait wait = new WebDriverWait(driver, timeoutInSeconds);
        wait.until(ExpectedConditions.presenceOfElementLocated(locator));
        return true;
    } catch (Exception e) {
        return false;
    }
}`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ElementPresenceWithWaitCheck {
    public static WebDriver driver;
    public static void main(String[] args) {
        driver = new ChromeDriver();
        driver.get("https://example.com");

        // Define the locator for the element to check
        By locator = By.id("elementId");

        // Check if the element is present with a wait
        boolean isPresent = isElementPresent(locator, driver, 10);
        if (isPresent) {
            System.out.println("Element is present.");
        } else {
            System.out.println("Element is not present.");
        }

        driver.quit();
    }

    public static boolean isElementPresent(By locator, WebDriver driver, int timeoutInSeconds) {
        try {
            WebDriverWait wait = new WebDriverWait(driver, timeoutInSeconds);
            wait.until(ExpectedConditions.presenceOfElementLocated(locator));
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This method waits for an element to become present on the page, returning ",e.jsx("code",{children:"true"})," if it is found within the specified timeout period."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"isElementPresent"})," method in Selenium is useful for handling dynamic content, making scripts more robust and reducing errors like ",e.jsx("code",{children:"NoSuchElementException"}),". By using techniques like ",e.jsx("code",{children:"findElements"})," or ",e.jsx("code",{children:"WebDriverWait"})," with ",e.jsx("code",{children:"ExpectedConditions"}),", testers can ensure that their scripts interact only with elements that are present and ready for action, improving test reliability."]})]})]}),gy=()=>e.jsxs("div",{className:"HandlingIFramesInSelenium",children:[e.jsx("h1",{children:"Handling IFrames in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"IFrames (Inline Frames) are HTML documents embedded within another HTML document on the same web page. They are often used to display content like advertisements, videos, or web applications. Selenium WebDriver treats each iframe as a separate document, requiring switching the WebDriver’s focus to the iframe to interact with elements inside it."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Importance of Handling IFrames in Selenium"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Isolation:"})," IFrames allow embedding content that is not part of the main document."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Different Context:"})," When switching to an iframe, Selenium focuses on the iframe content, allowing interaction with the elements inside."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Switching Back to Main Document:"})," After interacting with the iframe, it’s crucial to switch back to the main document for further actions."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Ways to Handle IFrames in Selenium"}),e.jsx("p",{children:"There are three main ways to switch to an iframe:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"By Index:"})," Switch to an iframe using its index (zero-based)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"By Name or ID:"})," Switch to an iframe using its ",e.jsx("code",{children:"name"})," or ",e.jsx("code",{children:"id"})," attributes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"By WebElement:"})," Switch to an iframe using a ",e.jsx("code",{children:"WebElement"})," representing the iframe."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example 1: Switching to an IFrame by Index"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HandleIFrameByIndex {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/page-with-iframe");

        // Switch to the iframe by index
        driver.switchTo().frame(0);

        // Interact with elements inside the iframe
        WebElement iframeElement = driver.findElement(By.id("insideIframeElement"));
        System.out.println("Text inside iframe: " + iframeElement.getText());

        // Switch back to the main document
        driver.switchTo().defaultContent();

        // Close the browser
        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," The script navigates to a webpage with an iframe, switches to the iframe using its index, interacts with elements inside, and switches back to the main document."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example 2: Switching to an IFrame by Name or ID"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HandleIFrameByNameOrID {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/page-with-iframe");

        // Switch to the iframe by its name or ID
        driver.switchTo().frame("iframeName");

        // Interact with elements inside the iframe
        WebElement iframeButton = driver.findElement(By.id("iframeButton"));
        iframeButton.click();

        // Switch back to the main document
        driver.switchTo().defaultContent();

        // Close the browser
        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This example shows switching to an iframe by its name or ID, interacting with a button inside the iframe, and switching back to the main document."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example 3: Switching to an IFrame by WebElement"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HandleIFrameByWebElement {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/page-with-iframe");

        // Locate the iframe using a WebElement
        WebElement iframeElement = driver.findElement(By.xpath("//iframe[@id='iframeID']"));

        // Switch to the iframe using the WebElement
        driver.switchTo().frame(iframeElement);

        // Interact with elements inside the iframe
        WebElement textInsideIframe = driver.findElement(By.id("textInsideIframe"));
        System.out.println("Text inside iframe: " + textInsideIframe.getText());

        // Switch back to the main document
        driver.switchTo().defaultContent();

        // Close the browser
        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This example demonstrates switching to an iframe using a WebElement, interacting with text inside the iframe, and switching back to the main document."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Handling Nested IFrames"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HandleNestedIFrames {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/page-with-nested-iframes");

        // Switch to the parent iframe
        driver.switchTo().frame("parentIframe");

        // Switch to the child iframe inside the parent iframe
        driver.switchTo().frame("childIframe");

        // Interact with elements inside the child iframe
        WebElement childFrameElement = driver.findElement(By.id("childFrameElement"));
        System.out.println("Text inside child iframe: " + childFrameElement.getText());

        // Switch back to the parent iframe
        driver.switchTo().parentFrame();

        // Switch back to the main document
        driver.switchTo().defaultContent();

        // Close the browser
        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This example handles nested iframes, switching from the parent to the child iframe, interacting with elements, and returning to the main document."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["Handling iframes in Selenium is essential when automating interactions with web pages containing embedded content. By using methods like ",e.jsx("code",{children:"switchTo().frame()"})," and ",e.jsx("code",{children:"switchTo().defaultContent()"}),", testers can seamlessly switch between iframes and the main document, ensuring comprehensive test coverage for complex web applications."]})]})]}),jy=()=>e.jsxs("div",{className:"JavaScriptExecutorInSelenium",children:[e.jsx("h1",{children:"JavaScriptExecutor in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"JavaScriptExecutor is an interface in Selenium WebDriver that allows execution of JavaScript code within the browser context. It is particularly useful for performing tasks that are not supported directly by Selenium WebDriver, such as interacting with hidden elements, scrolling, and directly manipulating the DOM."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why Use JavaScriptExecutor in Selenium?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Bypass Limitations:"})," JavaScriptExecutor helps bypass limitations in WebDriver, such as interacting with hidden or inaccessible elements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Direct DOM Manipulation:"})," It allows direct interaction with the Document Object Model (DOM), providing more control over page elements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Faster Execution:"})," JavaScriptExecutor communicates directly with the browser’s JavaScript engine, often leading to faster performance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Advanced Scenarios:"})," Useful in scenarios that require advanced user interactions or script executions not possible with standard WebDriver commands."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"JavaScriptExecutor Interface Methods"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"executeScript(String script, Object... args):"})," Executes JavaScript code in the context of the current frame or window."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"executeAsyncScript(String script, Object... args):"})," Executes JavaScript asynchronously and blocks the WebDriver until the callback is returned."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Basic Syntax of JavaScriptExecutor in Selenium"}),e.jsx("pre",{children:e.jsx("code",{children:`JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("your JavaScript code here");`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example 1: Scrolling a Web Page"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class JavaScriptExecutorScrollExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/long-page");

        // Cast WebDriver to JavascriptExecutor
        JavascriptExecutor js = (JavascriptExecutor) driver;

        // Find the element to scroll to
        WebElement element = driver.findElement(By.id("targetElement"));

        // Scroll to the element using JavaScriptExecutor
        js.executeScript("arguments[0].scrollIntoView(true);", element);

        System.out.println("Scrolled to element: " + element.getText());

        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This script scrolls down to an element using JavaScriptExecutor and confirms the scrolling by printing the text of the element."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example 2: Clicking on a Hidden Element"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class JavaScriptExecutorClickExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/hidden-button");

        JavascriptExecutor js = (JavascriptExecutor) driver;

        // Click on a hidden button using JavaScriptExecutor
        js.executeScript("document.getElementById('hiddenButton').click();");

        System.out.println("Hidden button clicked successfully.");
        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This example shows how to click a hidden button using JavaScriptExecutor, bypassing limitations of standard WebDriver methods."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example 3: Retrieving Page Title Using JavaScriptExecutor"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class JavaScriptExecutorRetrieveExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");

        JavascriptExecutor js = (JavascriptExecutor) driver;

        // Retrieve the page title using JavaScriptExecutor
        String pageTitle = (String) js.executeScript("return document.title;");
        System.out.println("Page title is: " + pageTitle);

        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This script retrieves the page title using JavaScriptExecutor and prints it to the console."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example 4: Changing Background Color of an Element"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class JavaScriptExecutorModifyExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");

        JavascriptExecutor js = (JavascriptExecutor) driver;

        // Locate the element to change background color
        WebElement element = driver.findElement(By.id("elementID"));

        // Change the background color of the element using JavaScriptExecutor
        js.executeScript("arguments[0].style.backgroundColor = 'yellow';", element);

        System.out.println("Background color changed successfully.");
        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This script changes the background color of an element using JavaScriptExecutor."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"JavaScriptExecutor is an essential feature in Selenium WebDriver, offering advanced control over web page elements that may otherwise be inaccessible. It allows direct manipulation of the DOM, facilitates scrolling, clicks hidden elements, retrieves data, and executes custom JavaScript. By mastering JavaScriptExecutor, testers can create more robust, flexible, and efficient automation scripts."})]})]}),vy=()=>e.jsxs("div",{className:"Log4jInSelenium",children:[e.jsx("h1",{children:"Log4j in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Log4j is a centralized logging framework used in Java applications. When combined with Selenium, Log4j allows for proper logging of actions and events during automation testing, making it easier to debug complex scenarios or failed tests."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Components of Log4j"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Logger:"})," Stores and captures all logging information during test execution."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Appenders:"})," Retrieves logging information from the logger and writes it to a specified file or console."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Layout:"})," Formats the log messages in a specific pattern, such as text, HTML, or XML."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Log Levels"}),e.jsx("p",{children:"Log4j provides various log levels to categorize log messages:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ALL:"})," Includes all log messages."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DEBUG:"})," Logs detailed debugging information."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"INFO:"})," Logs general information about the application's progress."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"WARN:"})," Logs warning messages about potential issues."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ERROR:"})," Logs error events that might not stop execution."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"FATAL:"})," Logs critical errors that may crash the application."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why Use Log4j with Selenium?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Debugging:"})," Assists in troubleshooting test failures and errors."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test Reports:"})," Logs can be used to generate detailed test reports."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Track Execution Flow:"})," Monitors the execution process of test cases."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Logging Levels:"})," Provides customizable logging levels such as INFO, DEBUG, and ERROR."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Log4j Setup with Selenium"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Add Log4j Dependency:"})," Add Log4j dependencies to the `pom.xml` if using Maven."]}),e.jsx("pre",{children:e.jsx("code",{children:`<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-core</artifactId>
  <version>2.20.0</version>
</dependency>
<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-api</artifactId>
  <version>2.20.0</version>
</dependency>`})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Create Log4j Configuration File:"})," Create a `log4j2.properties` file for configuring the logger, appenders, and layout."]}),e.jsx("pre",{children:e.jsx("code",{children:`# Root logger configuration
rootLogger.level = info
rootLogger.appenderRefs = stdout, file
rootLogger.appenderRef.stdout.ref = ConsoleAppender
rootLogger.appenderRef.file.ref = FileAppender

# Console appender configuration
appender.console.type = Console
appender.console.name = ConsoleAppender
appender.console.layout.type = PatternLayout
appender.console.layout.pattern = %d{yyyy-MM-dd HH:mm:ss} [%t] %-5level %logger{36} - %msg%n

# File appender configuration
appender.file.type = File
appender.file.name = FileAppender
appender.file.fileName = logs/selenium-log4j.log
appender.file.layout.type = PatternLayout
appender.file.layout.pattern = %d{yyyy-MM-dd HH:mm:ss} [%t] %-5level %logger{36} - %msg%n`})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Implement Log4j in Test Scripts:"})," Use Log4j in Selenium test scripts to log actions and errors."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example: Log4j in Selenium Test Script"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Log4jExample {
    private static final Logger logger = LogManager.getLogger(Log4jExample.class);

    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        logger.info("Browser launched");

        driver.get("https://example.com");
        logger.info("Navigated to example.com");

        try {
            WebElement element = driver.findElement(By.id("elementId"));
            logger.info("Element found");
            element.click();
            logger.info("Clicked on element");
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage(), e);
        } finally {
            driver.quit();
            logger.info("Browser closed");
        }
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," The example logs browser actions like launching, navigating, interacting with elements, and closing the browser. In case of errors, it logs an error message with the exception stack trace."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Log4j enhances Selenium test scripts by capturing detailed logs about test execution. It simplifies debugging, tracks test progress, and provides detailed error information, making automation testing more efficient and effective."})]})]}),yy=()=>e.jsxs("div",{className:"PageObjectModelInSelenium",children:[e.jsx("h1",{children:"Page Object Model (POM) in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Selenium utilizes the Page Object Model (POM) as a pattern that enables the creation of a web elements’ object repository. It fosters test code segregation from UI interaction and provides a way of writing the code in a structured manner. With POM, all elements and actions of a page are bundled into a single class, making the code more understandable, reusable, and modifiable."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Types of POMs"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Basic POM:"})," A single class is designated for every web page, containing methods and properties for web elements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Factory POM:"})," Combines the Factory Design Pattern with POM, dynamically creating page objects based on conditions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fluent POM:"})," Uses fluent interfaces to make the API for web elements more readable and easier to use by chaining methods."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages of Page Object Model (POM)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Separation of Concerns:"})," Enhances project organization by separating webpage-specific code from test scripts."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reusability:"})," Promotes reusability by allowing different scenarios to use the same page objects."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ease of Maintenance:"})," Simplifies updates since only page object classes need to be modified if the UI changes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Improved Readability:"})," Reduces clutter in test scripts, making them easier to read and maintain."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Encapsulation:"})," Hides the internal logic of application interactions, wrapping all page-related actions in classes."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Disadvantages of Page Object Model (POM)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Initial Setup Overhead:"})," Requires significant effort to set up page classes compared to simpler automation approaches."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Complexity:"})," Managing many page classes can become complicated in large applications."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Maintenance of Page Objects:"})," Changes in web page design can necessitate updates to multiple page classes."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Syntax and Basic Operations with POM"}),e.jsx("h3",{children:"Create a Page Object Class"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LoginPage {
    private WebDriver driver;
    
    // Locators for web elements
    private By usernameField = By.id("username");
    private By passwordField = By.id("password");
    private By loginButton = By.id("loginButton");
    
    // Constructor
    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }
    
    // Methods to interact with the page
    public void enterUsername(String username) {
        driver.findElement(usernameField).sendKeys(username);
    }
    
    public void enterPassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
    }
    
    public void clickLoginButton() {
        driver.findElement(loginButton).click();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," The LoginPage class contains locators and methods for interacting with the login page elements."]}),e.jsx("h3",{children:"Create a Test Class Using the Page Object"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class LoginTest {
    private WebDriver driver;
    private LoginPage loginPage;

    @BeforeMethod
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        driver = new ChromeDriver();
        loginPage = new LoginPage(driver);
        driver.get("https://example.com/login");
    }

    @Test
    public void testSuccessfulLogin() {
        loginPage.enterUsername("testuser");
        loginPage.enterPassword("testpassword");
        loginPage.clickLoginButton();

        // Validate successful login
        String actualTitle = driver.getTitle();
        Assert.assertEquals(actualTitle, "Dashboard", "Login failed!");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," The test class uses the LoginPage object to perform login actions and verify the result."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"What is Page Factory in Selenium?"}),e.jsx("p",{children:"Page Factory is an extension of the Page Object Model (POM) that simplifies the initialization of page objects and the management of web elements using an annotation-based approach. It helps reduce boilerplate code and improves readability by allowing testers to declare web elements using the @FindBy annotation."}),e.jsx("pre",{children:e.jsx("code",{children:`@FindBy(id = "elementId") 
WebElement element;`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"The Page Object Model (POM) is a fundamental design pattern in Selenium test automation that significantly enhances the maintainability, scalability, and organization of test scripts. By creating dedicated classes for web pages, POM effectively separates test logic from UI interactions, making tests more robust and easier to maintain."})]})]}),by=()=>e.jsxs("div",{className:"RelativeLocatorsInSelenium",children:[e.jsx("h1",{children:"Relative Locators in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Relative Locators (or Friendly Locators) in Selenium allow you to find elements on a web page based on the position of other elements relative to them. Introduced in Selenium 4, this feature enhances the versatility of element location, making it easier for developers to understand and interact with the page structure visually."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why Use Relative Locators?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Improves Readability:"})," Provides clear positioning of elements with phrases like ‘above’ and ‘below’, enhancing code comprehension."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flexibility:"})," Detects elements based on visual layout, accommodating changes in IDs or classes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Better Handling of Dynamic Content:"})," Useful for elements generated dynamically whose relative positions remain constant."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Syntax of Relative Locators in Selenium with Java"}),e.jsxs("p",{children:["Relative locators are performed using the ",e.jsx("code",{children:"RelativeLocator"})," class with the following properties:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"above:"})," Locate an element positioned above another."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"below:"})," Locate an element positioned below another."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"toLeftOf:"})," Locate an element on the left of another."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"toRightOf:"})," Locate an element on the right of another."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"near:"})," Locate an element in proximity to another element (default is 50 pixels)."]})]}),e.jsx("p",{children:"Basic Syntax:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement element = driver.findElement(
    RelativeLocator.with(By.tagName("tagName")).above(anotherElement)
);`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example of Relative Locators"}),e.jsx("h3",{children:"HTML Structure"}),e.jsx("pre",{children:e.jsx("code",{children:`<html>
<body>
    <div>
        <input id="username" type="text" name="username">
    </div>
    <div>
        <label id="passwordLabel">Password:</label>
        <input id="password" type="password" name="password">
    </div>
    <div>
        <button id="submit" type="submit">Submit</button>
    </div>
</body>
</html>`})}),e.jsx("h3",{children:"Example: Locating the Password Field"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.locators.RelativeLocator;

public class RelativeLocatorExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com"); // Replace with your actual URL

        // Locate the 'Password' label element
        WebElement passwordLabel = driver.findElement(By.id("passwordLabel"));

        // Locate the 'Password' input field using a relative locator
        WebElement passwordField = driver.findElement(
            RelativeLocator.with(By.tagName("input")).below(passwordLabel)
        );

        // Interact with the 'Password' input field
        passwordField.sendKeys("mySecurePassword");

        // Locate the 'Submit' button using a relative locator
        WebElement submitButton = driver.findElement(
            RelativeLocator.with(By.tagName("button")).below(passwordField)
        );
        submitButton.click();

        // Close the browser
        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," The example demonstrates how to locate the password field and the submit button using relative locators based on their position relative to other elements."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example: Elements to the Left and Right"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.locators.RelativeLocator;

public class RelativeLocatorLeftRightExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com"); // Replace with your actual URL

        // Locate the 'Password' input field using its ID
        WebElement passwordField = driver.findElement(By.id("password"));

        // Locate the 'Password' label to the left of the 'Password' input field
        WebElement passwordLabel = driver.findElement(
            RelativeLocator.with(By.tagName("label")).toLeftOf(passwordField)
        );
        System.out.println("Password Label Text: " + passwordLabel.getText());

        // Locate the 'Submit' button to the right of the 'Password' input field
        WebElement submitButton = driver.findElement(
            RelativeLocator.with(By.tagName("button")).toRightOf(passwordField)
        );
        System.out.println("Submit Button Text: " + submitButton.getText());

        // Close the browser
        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This example shows how to locate elements based on their positions relative to one another (to the left or right)."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Relative Locators enhance element location in Selenium by considering the proximity of elements. This feature is particularly beneficial for dynamic content and improves code readability. By employing relative locators, developers can create more understandable and flexible Selenium scripts."})]})]}),wy=()=>e.jsxs("div",{className:"ReportNGInSelenium",children:[e.jsx("h1",{children:"ReportNG in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"ReportNG is a plugin that simplifies reporting in TestNG, a widely used testing framework in Java. It enhances standard TestNG reports by producing sophisticated and well-structured visual reports in HTML format, making it particularly useful for Selenium projects."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"ReportNG Overview"}),e.jsx("p",{children:"ReportNG is an extendable TestNG reporting plugin that offers an index structure similar to default index reports on HTML and XML. The goal is to produce reports that are easy to read and visually appealing."}),e.jsx("h3",{children:"Report Formats"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"HTML Reports:"})," A high-level overview of test results, including pass/fail counts, error messages, and stack traces."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"XML Reports:"})," A logical summary designed for use with CI tools or other programs."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages of ReportNG"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Improved Comprehensibility:"})," Generates more readable reports with bolded and organized details."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Easy to Incorporate:"})," Simple to deploy in existing TestNG projects with minimal configuration."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Customizable:"})," HTML reports can be altered to better present information."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Integration with CI/CD Tools:"})," XML reports enable integration with CI/CD tools like Jenkins and Bamboo."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Drawbacks of ReportNG"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Basic Features:"})," Offers limited reporting capabilities compared to tools like Extent Reports or Allure Reports."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Discontinued:"})," ReportNG is now obsolete and may not be compatible with newer versions of TestNG or Java."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Needs Extra Configuration:"})," Requires dependency and listener configuration in the TestNG XML file."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Lack of Native Embedded Screenshots:"})," Cannot integrate screenshots into reports like some modern tools."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Step by Step Guide to Use ReportNG with Selenium and TestNG"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Include ReportNG Dependencies:"})," Add the relevant dependencies to your Maven `pom.xml` or download the JAR files.",e.jsx("pre",{children:e.jsx("code",{children:`<dependencies>
    <dependency>
        <groupId>org.uncommons</groupId>
        <artifactId>reportng</artifactId>
        <version>1.1.4</version>
    </dependency>
    <dependency>
        <groupId>com.google.inject</groupId>
        <artifactId>guice</artifactId>
        <version>4.2.2</version>
    </dependency>
    <dependency>
        <groupId>org.apache.velocity</groupId>
        <artifactId>velocity</artifactId>
        <version>1.7</version>
    </dependency>
</dependencies>`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modify TestNG to Use ReportNG:"})," Update your `testng.xml` file to include ReportNG listeners.",e.jsx("pre",{children:e.jsx("code",{children:`<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="Selenium Test Suite">
    <listeners>
        <listener class-name="org.uncommons.reportng.HTMLReporter" />
        <listener class-name="org.uncommons.reportng.JUnitXMLReporter" />
    </listeners>
    <test name="Sample Tests">
        <classes>
            <class name="com.example.tests.SampleTest" />
        </classes>
    </test>
</suite>`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Practice Selenium Testing with TestNG:"})," Implement a sample Selenium test using ReportNG.",e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class SampleTest {
    private WebDriver driver;

    @BeforeMethod
    public void setUp() {
        driver = new ChromeDriver();
    }

    @Test
    public void googleSearchTest() {
        driver.get("https://www.google.com");
        String title = driver.getTitle();
        Assert.assertEquals(title, "Google", "Title should be 'Google'");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}`})})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Output"}),e.jsx("p",{children:"Upon executing the `testng.xml` file, ReportNG generates HTML and XML reports inside the `test-output` folder of the project."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Report Location:"})," ",e.jsx("code",{children:"test-output/html/index.html"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"ReportNG enhances TestNG reports, providing clear and comprehensible summaries in HTML format. Although it may not have the extensive features of more advanced reporting tools, its ease of integration and readability make it suitable for small to medium-sized projects."})]})]}),Sy=()=>e.jsxs("div",{className:"ScreenshotsInSelenium",children:[e.jsx("h1",{children:"Screenshots in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Taking screenshots is one of the most appreciated features of Selenium. It allows testers to capture a static image of the page actively being tested at any moment during automation testing. This feature is beneficial for debugging performance issues by providing visual evidence of the state of the web application at various times during its execution."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Which Screenshot Features Are Provided by Selenium?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Debugging and Troubleshooting:"})," Screenshots help trace the causes of failure when a test case fails."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Visual Validation:"})," Checks whether relevant objects are properly displayed on the interface."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reporting:"})," Enhances test reports by showing how screens appeared compared to expectations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Documentation:"})," Captures images of the automation design process and how it was structured and planned."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"How to Take Screenshots in Selenium"}),e.jsxs("p",{children:["In Selenium WebDriver, screenshots can be taken using the ",e.jsx("code",{children:"TakesScreenshot"})," interface. This interface has a method named ",e.jsx("code",{children:"getScreenshotAs()"})," that captures and writes the screenshot to a specified location."]}),e.jsx("pre",{children:e.jsx("code",{children:"File file = ((TakesScreenshot) driver);"})}),e.jsx("p",{children:"Some scenarios where screenshots are handy include:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"When the application crashes or behaves unexpectedly."}),e.jsx("li",{children:"When a test fails an assertion."}),e.jsx("li",{children:"When the test has trouble finding elements on a webpage."}),e.jsx("li",{children:"When the test times out waiting for elements to load."})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Basic Syntax for Taking Screenshots in Selenium"}),e.jsx("pre",{children:e.jsx("code",{children:`// Cast the WebDriver instance to TakesScreenshot
TakesScreenshot screenshot = (TakesScreenshot) driver;
// Call getScreenshotAs method to create an image file
File srcFile = screenshot.getScreenshotAs(OutputType.FILE);
// Move the image file to a new destination
File destFile = new File("/path/to/screenshot.png");
// Copy the file to the desired location
FileUtils.copyFile(srcFile, destFile);`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example of Taking a Screenshot in Selenium WebDriver"}),e.jsx("pre",{children:e.jsx("code",{children:`// Java program to take a screenshot in Selenium WebDriver
import java.io.*;

class GFG {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "driver path");
        driver = new ChromeDriver();
        driver.get("https://www.google.co.in");
        WebElement Element = driver.findElement(By.xpath("//input[@name='q']"));
        MakeBorder(Element);
        Thread.sleep(2000);
        TakeScreenshot("GooglePage");
        driver.quit();
    }

    public static void TakeScreenshot(String FileName) throws IOException {
        File File = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(File, new File("image location" + FileName + ".jpeg"));
    }

    public static void MakeBorder(WebElement Element) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].style.border = '3px solid red'", Element);
    }
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Capturing a Screenshot of a Web Page"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.OutputType;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;

public class ScreenshotExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");

        TakesScreenshot screenshot = (TakesScreenshot) driver;
        File srcFile = screenshot.getScreenshotAs(OutputType.FILE);
        File destFile = new File("screenshot.png");

        try {
            FileUtils.copyFile(srcFile, destFile);
            System.out.println("Screenshot taken and saved at: " + destFile.getAbsolutePath());
        } catch (IOException e) {
            System.out.println("Failed to save screenshot: " + e.getMessage());
        }

        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," The example demonstrates how to set up the WebDriver, capture a screenshot, and save it to a specified location."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advanced Example: Taking a Screenshot of a Specific Element"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;

public class ElementScreenshotExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");
        
        WebElement element = driver.findElement(By.id("elementId"));
        File srcFile = element.getScreenshotAs(OutputType.FILE);
        File destFile = new File("elementScreenshot.png");

        try {
            FileUtils.copyFile(srcFile, destFile);
            System.out.println("Element screenshot taken and saved at: " + destFile.getAbsolutePath());
        } catch (IOException e) {
            System.out.println("Failed to save element screenshot: " + e.getMessage());
        }

        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This example shows how to capture a screenshot of a specific element instead of the entire page."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Using getScreenshotAs with Different Output Types"}),e.jsxs("p",{children:["Selenium’s ",e.jsx("code",{children:"getScreenshotAs()"})," method can also save screenshots in various formats, such as PNG, JPEG, or GIF based on the ",e.jsx("code",{children:"OutputType"})," interface:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"OutputType.FILE:"})," Saves the screenshot as a File."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OutputType.BYTES:"})," Retrieves the screenshot as an array of bytes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OutputType.BASE64:"})," Returns the image encoded in Base64 format."]})]}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class ScreenshotBase64Example {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");
        
        TakesScreenshot screenshot = (TakesScreenshot) driver;
        String base64Screenshot = screenshot.getScreenshotAs(OutputType.BASE64);
        System.out.println("Base64 Screenshot String: " + base64Screenshot);
        
        driver.quit();
    }
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This example demonstrates how to capture a screenshot as a Base64 string, useful for reporting purposes or sending images over the network without writing to disk."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Taking screenshots in Selenium WebDriver is a powerful feature that enhances test automation by allowing testers to visually validate tests, improve workflows for fixing issues, and enhance reporting. Selenium provides capabilities to capture screenshots of entire pages, specific elements, or save them in various formats. This functionality is crucial for creating comprehensive automation scripts that effectively report on the state and behavior of the web UI."})]})]}),Ey=()=>e.jsxs("div",{className:"ActionAPIsInSelenium",children:[e.jsx("h1",{children:"APIs to Implement Action in Java Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsxs("p",{children:["Action APIs have been provided by Selenium to emulate complicated user interactions on the browser, such as keyboard input, mouse movements, hovering over elements, and drag-and-drop actions. These are part of Selenium’s Actions class, which is used to build and run a sequence of actions. The class is particularly useful for automating tasks that cannot be achieved using simple WebDriver commands like ",e.jsx("code",{children:"click()"})," and ",e.jsx("code",{children:"sendKeys()"}),"."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Important Methods Used in ‘Actions’ Class"}),e.jsx("p",{children:"Below are some frequently used methods in the Actions class:"}),e.jsx("h3",{children:"1. ClickAndHold(), Release()"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"clickAndHold()"})," method allows you to press down on an element, and ",e.jsx("code",{children:"release()"})," lets go of the mouse button. This is essential for dragging elements."]}),e.jsx("pre",{children:e.jsx("code",{children:`Actions actions = new Actions(driver);
actions.clickAndHold(element).perform();`})}),e.jsx("h4",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ClickAndHoldExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/drag-and-drop");
        WebElement sourceElement = driver.findElement(By.id("source"));
        Actions actions = new Actions(driver);
        actions.clickAndHold(sourceElement).perform();
        actions.release().perform();
        driver.quit();
    }
}`})}),e.jsx("h3",{children:"2. DoubleClick()"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"doubleClick()"})," method enables a double-click operation on any object or target component."]}),e.jsx("pre",{children:e.jsx("code",{children:"actions.doubleClick(element).perform();"})}),e.jsx("h4",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class DoubleClickExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/double-click");
        WebElement elementToDoubleClick = driver.findElement(By.id("button"));
        Actions actions = new Actions(driver);
        actions.doubleClick(elementToDoubleClick).perform();
        driver.quit();
    }
}`})}),e.jsx("h3",{children:"3. contextClick()"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"contextClick()"})," method performs a right-click action on an element."]}),e.jsx("pre",{children:e.jsx("code",{children:"actions.contextClick(element).perform();"})}),e.jsx("h4",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ContextClickExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/context-menu");
        WebElement elementToRightClick = driver.findElement(By.id("menuItem"));
        Actions actions = new Actions(driver);
        actions.contextClick(elementToRightClick).perform();
        driver.quit();
    }
}`})}),e.jsx("h3",{children:"4. moveToElement()"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"moveToElement()"})," method moves the mouse to the center of a specified element, commonly used for hover actions."]}),e.jsx("pre",{children:e.jsx("code",{children:"actions.moveToElement(element).perform();"})}),e.jsx("h4",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class MoveToElementExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/hover-menu");
        WebElement menuElement = driver.findElement(By.id("menu"));
        Actions actions = new Actions(driver);
        actions.moveToElement(menuElement).perform();
        driver.quit();
    }
}`})}),e.jsx("h3",{children:"5. dragAndDrop()"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"dragAndDrop()"})," method performs a drag-and-drop operation from a source element to a target element."]}),e.jsx("pre",{children:e.jsx("code",{children:"actions.dragAndDrop(sourceElement, targetElement).perform();"})}),e.jsx("h4",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class DragAndDropExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/drag-drop");
        WebElement sourceElement = driver.findElement(By.id("draggable"));
        WebElement targetElement = driver.findElement(By.id("droppable"));
        Actions actions = new Actions(driver);
        actions.dragAndDrop(sourceElement, targetElement).perform();
        driver.quit();
    }
}`})}),e.jsx("h3",{children:"6. sendKeys()"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"sendKeys()"})," method is used to simulate keyboard input."]}),e.jsx("pre",{children:e.jsx("code",{children:"actions.sendKeys(Keys.ENTER).perform();"})}),e.jsx("h4",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class SendKeysExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/text-input");
        WebElement inputField = driver.findElement(By.id("inputBox"));
        Actions actions = new Actions(driver);
        actions.sendKeys(inputField, "Hello, Selenium!").perform();
        driver.quit();
    }
}`})}),e.jsx("h3",{children:"7. keyDown() and keyUp()"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"keyDown()"})," and ",e.jsx("code",{children:"keyUp()"})," methods simulate pressing and releasing modifier keys (like Control, Shift, etc.)."]}),e.jsx("pre",{children:e.jsx("code",{children:"actions.moveToElement(element1).click().moveToElement(element2).click().build().perform();"})}),e.jsx("h4",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.Keys;

public class KeyDownKeyUpExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/text-input");
        WebElement inputField = driver.findElement(By.id("inputBox"));
        Actions actions = new Actions(driver);
        actions.sendKeys(inputField, "Sample text")
            .keyDown(Keys.CONTROL)
            .sendKeys("a")
            .keyUp(Keys.CONTROL)
            .perform();
        driver.quit();
    }
}`})}),e.jsx("h3",{children:"8. Composite Actions"}),e.jsx("p",{children:"Composite actions involve combining multiple actions into a single sequence, such as dragging and dropping an element or hovering over an element and clicking a sub-menu."}),e.jsx("pre",{children:e.jsx("code",{children:"actions.moveToElement(element1).click().moveToElement(element2).click().build().perform();"})}),e.jsx("h4",{children:"Full Example: Combining Actions"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class CombinedActionsExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");
        Actions actions = new Actions(driver);
        WebElement element1 = driver.findElement(By.id("element1"));
        WebElement element2 = driver.findElement(By.id("element2"));
        actions.moveToElement(element1)
            .click()
            .clickAndHold()
            .moveToElement(element2)
            .release()
            .build()
            .perform();
        driver.quit();
    }
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"In automating mouse and keyboard events of web applications with Selenium, the Actions class plays an essential role. It involves various methods like click, mouse hover, double-click, context click, and drag-and-drop, allowing for simulations performed by web elements. The Actions class enables interaction with webpages as if real-time users were testing or verifying complex interactions. This means software behavior can be monitored under real user conditions for verification and optimization of user experience."})]})]}),Cy=()=>e.jsxs("div",{className:"SeleniumGrid",children:[e.jsx("h1",{children:"Selenium Grid"}),e.jsx("section",{children:e.jsx("p",{children:"Selenium Grid is frequently used alongside Selenium to run tests on multiple machines and browsers. It proves useful for distributed testing, enabling testing across various platforms simultaneously, which enhances speed and efficiency. Selenium Grid facilitates the execution of Selenium tests on remote machines, utilizing a proxy server managed by a Selenium server. This setup allows the maintenance of different browser configurations centrally, enabling parallel testing against various browser versions, thus facilitating cross-browser testing. The architecture follows a client-server model, where the server is referred to as the Hub, and it interacts with multiple clients (Nodes)."})}),e.jsxs("section",{children:[e.jsx("h2",{children:"Types of Selenium Grid"}),e.jsx("h3",{children:"1. Standalone Mode"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Description:"})," Both Hub and Node services are merged into a single process.",e.jsx("br",{}),e.jsx("strong",{children:"Usage:"})," Ideal for basic test configurations or local testing, used when tests are not required to run on multiple machines simultaneously."]}),e.jsx("h3",{children:"2. Hub and Node Architecture"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Description:"})," The Hub acts as the central control unit for test execution, while Nodes are the machines being tested.",e.jsx("br",{}),e.jsx("strong",{children:"Usage:"})," Effective for extensive testing environments requiring tests on different browsers and machines."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Need for Selenium Grid"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Open Source:"})," Selenium Grid is open-source, allowing teams to use it free of charge."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Convenient for Cross Browser Testing:"})," Facilitates testing across multiple browsers, accommodating diverse user preferences."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Supports Different Versions of Browsers:"})," Easily set up multiple browser versions for thorough testing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Facilitates Parallel Testing:"})," Enables the execution of tests in parallel, reducing wait times for results and updates."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Elements of Selenium Grid"}),e.jsx("p",{children:"Some important features of Selenium Grid 4 include:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Architectural Support:"})," Supports six processes for various deployments, including Router, Distributor, Session Map, New Session Queue, Node, and Event Bus."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Different Grid Roles:"})," Can be set up in three configurations: Standalone, Classic Grid (Hub and Node), and Fully Distributed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Docker Support:"})," Full support for Docker, allowing easy containerization of tests."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scalability:"})," Manages resources across multiple sites, enhancing observability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"GraphQL Query Support:"})," Enables API queries for session, node, and grid details."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Support for Customizing a Node:"})," Nodes can be customized for specific test execution needs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Support for External Data Store:"})," Caches information from running sessions in external data stores."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Components of Grid"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Router:"})," Entry point for incoming requests, forwarding them to the appropriate components."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Event Bus:"})," Facilitates internal communication between components."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Distributor:"})," Manages Node registration, capabilities, and session requests."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Session Queue:"})," Holds incoming session requests in a FIFO manner."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Session Map:"})," Maps session IDs to Nodes for fast routing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Node:"})," Executes test cases in a distributed system."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages of Grid"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Simultaneous or Parallel Execution:"})," Allows for various test cases to run on different machines simultaneously."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cross Platform Testing:"})," Ensures coverage of multiple browsers and operating systems."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use of Test Resources:"})," Optimizes resource utilization by engaging multiple machines."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scalability:"})," Easily extended by adding new nodes."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Disadvantages of Grid"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Installation Complexity:"})," Setting up a Grid can be complex and may require significant resources."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dependence on Network:"})," Execution can be hampered by communication issues between Hub and Nodes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hardware Costs:"})," Supporting multiple machines and installations can be costly."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Syntax and Basic Operations with Selenium Grid"}),e.jsx("h3",{children:"1. Setting Up Selenium Grid"}),e.jsx("p",{children:"To start the Hub and Nodes, use the following commands:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Start the Hub
java -jar selenium-server-standalone-x.xx.x.jar -role hub

// Start Nodes
java -jar selenium-server-standalone-x.xx.x.jar -role node -hub http://localhost:4444/grid/register`})}),e.jsx("h3",{children:"2. Example of Parallel Test Execution Using Selenium Grid"}),e.jsx("p",{children:"TestNG Configuration:"}),e.jsx("pre",{children:e.jsx("code",{children:`<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="GridSuite" parallel="tests" thread-count="2">
    <test name="ChromeTests">
        <classes>
            <class name="com.example.tests.LoginTest" />
        </classes>
    </test>
    <test name="FirefoxTests">
        <classes>
            <class name="com.example.tests.LoginTest" />
        </classes>
    </test>
</suite>`})}),e.jsx("h4",{children:"Test Class Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;
import java.net.MalformedURLException;
import java.net.URL;

public class LoginTest {
    private WebDriver driver;

    @BeforeMethod
    @Parameters({"browser"})
    public void setUp(String browser) throws MalformedURLException {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        if (browser.equalsIgnoreCase("chrome")) {
            capabilities.setCapability("browserName", "chrome");
        } else if (browser.equalsIgnoreCase("firefox")) {
            capabilities.setCapability("browserName", "firefox");
        }
        driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities);
    }

    @Test
    public void testLogin() {
        driver.get("https://example.com/login");
        // Perform login actions
        String actualTitle = driver.getTitle();
        Assert.assertEquals(actualTitle, "Dashboard", "Login failed!");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Selenium Grid is an extension for Selenium applications that enables the deployment and running of applications on different machines with various browsers simultaneously. This greatly speeds up the testing process and increases the overall efficiency of the testing system, allowing for tests across different environments."})]})]}),ky=()=>e.jsxs("div",{className:"SeleniumSelect",children:[e.jsx("h1",{children:"What is Selenium Select Class?"}),e.jsxs("p",{children:["In Selenium WebDriver, the Select class is crucial for working with dropdown elements in web applications. It provides several methods to select and deselect options from a dropdown, simplifying the automation of form submissions or other user interactions. The Select class is part of the ",e.jsx("code",{children:"org.openqa.selenium.support.ui"})," package and is employed for managing HTML elements on web pages. It offers functions for selecting an option by its index, value, or visible text, getting all available options, and retrieving the selected option."]}),e.jsx("h2",{children:"How to Use the Select Class in Selenium?"}),e.jsx("p",{children:"Selenium's Select class allows you to choose values from a dropdown list. It supports selection based on text, index, value, and can handle selecting or deselecting multiple elements."}),e.jsx("h2",{children:"Selecting Multiple Items in a Dropdown"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"multiple"})," select attribute is a boolean expression that allows for selecting multiple options at once. Different operating systems have different keys for this:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"For Mac:"})," Hold down the COMMAND button to select more than one item."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For Windows:"})," Press the CTRL button to select multiple items."]})]}),e.jsxs("p",{children:["Use the ",e.jsx("code",{children:"isMultiple"})," method to determine if the dropdown allows multiple selections, returning true or false."]}),e.jsx("h2",{children:"Methods in the Select Class"}),e.jsx("h3",{children:"1. selectByVisibleText"}),e.jsxs("p",{children:["Selects an option based on the visible text. ",e.jsx("br",{}),e.jsx("code",{children:'dropdown.selectByVisibleText("Option Text");'})]}),e.jsx("h3",{children:"2. selectByIndex"}),e.jsxs("p",{children:["Selects an option based on its index. ",e.jsx("br",{}),e.jsx("code",{children:"dropdown.selectByIndex(1);"})]}),e.jsx("h3",{children:"3. selectByValue"}),e.jsxs("p",{children:["Selects an option based on its value attribute. ",e.jsx("br",{}),e.jsx("code",{children:'dropdown.selectByValue("optionValue");'})]}),e.jsx("h3",{children:"4. getOptions"}),e.jsxs("p",{children:["Retrieves all options in the element as a list of WebElements. ",e.jsx("br",{}),e.jsx("code",{children:"List options = dropdown.getOptions();"})]}),e.jsx("h3",{children:"5. getFirstSelectedOption"}),e.jsxs("p",{children:["Retrieves the currently selected option. ",e.jsx("br",{}),e.jsx("code",{children:"WebElement selectedOption = dropdown.getFirstSelectedOption();"})]}),e.jsx("h3",{children:"6. deselectAll"}),e.jsxs("p",{children:["Deselects all selected options if the dropdown allows multiple selections. ",e.jsx("br",{}),e.jsx("code",{children:"dropdown.deselectAll();"})]}),e.jsx("h2",{children:"Handling Dropdowns in Selenium"}),e.jsx("h3",{children:"Steps to Handle Dropdowns:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Import Necessary Packages"}),e.jsx("li",{children:"Set Up WebDriver"}),e.jsx("li",{children:"Locate the Dropdown Element"}),e.jsx("li",{children:"Create a Select Object"})]}),e.jsx("h3",{children:"Example of Using the Select Class"}),e.jsx("p",{children:"Here is an example demonstrating how to use the Select class in Selenium WebDriver with Java to handle a dropdown:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import java.util.List;

public class DropdownExample {
    public static void main(String[] args) {
        // Set up the WebDriver
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        WebDriver driver = new ChromeDriver();
        
        // Navigate to the webpage
        driver.get("http://example.com"); // Replace with your URL
        
        // Locate the dropdown element
        WebElement dropdownElement = driver.findElement(By.id("dropdownID")); // Replace with actual ID
        
        // Create a Select object
        Select dropdown = new Select(dropdownElement);
        
        // Select options
        dropdown.selectByVisibleText("Option Text"); // Replace with the visible text
        dropdown.selectByIndex(1); // Replace with the index
        dropdown.selectByValue("optionValue"); // Replace with the value attribute
        
        // Get the selected option
        WebElement selectedOption = dropdown.getFirstSelectedOption();
        System.out.println("Selected option: " + selectedOption.getText());
        
        // Get all options
        List<WebElement> allOptions = dropdown.getOptions();
        for (WebElement option : allOptions) {
            System.out.println(option.getText());
        }
        
        // Deselect all options (if the dropdown is multi-select)
        dropdown.deselectAll();
        
        // Close the browser
        driver.quit();
    }
}`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"The Select class is a powerful tool for handling dropdowns in Selenium. It provides several methods for selecting options from a dropdown menu. The appropriate method to handle dropdowns in Selenium depends on the specific requirements of the project."})]}),Ty=()=>e.jsxs("div",{className:"SeleniumWaits",children:[e.jsx("h1",{children:"Selenium Waits"}),e.jsx("p",{children:"Waits in Selenium are key components that execute test cases, functioning on commands that load a page. The idea behind Selenium waits is to make the pages less chatty and steadier, offering various wait options relevant to different conditions. This ensures that scripts do not fail during the automation testing process."}),e.jsx("h2",{children:"Why Use Waits in Selenium?"}),e.jsxs("p",{children:["Most modern front-end applications are built on Ajax or JavaScript frameworks, which take time to load elements on a web page. If you try to locate an element that hasn't loaded yet, you'll encounter an ",e.jsx("code",{children:"ElementNotVisibleException"}),". Waits are crucial for synchronizing test scripts with the behavior of web applications, helping to manage dynamic content and slow loading times."]}),e.jsx("p",{children:"Selenium provides three types of waits: Implicit Wait, Explicit Wait, and Fluent Wait, each serving different purposes."}),e.jsx("h2",{children:"When to Use Wait Commands?"}),e.jsx("p",{children:"Wait commands are essential for synchronizing automation scripts with dynamic web elements. Use them in the following scenarios:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Element Interaction:"})," Implement waits when clicking buttons, entering text, or selecting options to ensure actions occur only after elements are fully loaded."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Handling Asynchronous Calls:"})," Manage asynchronous requests like AJAX calls, allowing the script to pause until these requests are complete."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Post Page Navigation:"})," Use waits after page navigation commands, enabling elements to load entirely before proceeding."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Managing Dynamic Content:"})," Apply waits when dealing with dynamically generated elements or those that appear after specific events."]})]}),e.jsx("h2",{children:"Implicit Waits"}),e.jsxs("p",{children:["Implicit Wait instructs the WebDriver to wait for a specified duration before throwing a ",e.jsx("code",{children:"NoSuchElementException"}),". It is set globally and remains active throughout the WebDriver instance's lifecycle."]}),e.jsx("h3",{children:"How Does it Work?"}),e.jsx("p",{children:"When you initialize an Implicit Wait, Selenium waits for the defined duration during attempts to locate an element. If the element isn't found immediately, Selenium pauses the script for the stipulated time."}),e.jsx("h3",{children:"Why Use Implicit Wait?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Global Application:"})," Applies universally across the WebDriver instance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Preemptive Waiting:"})," Handles potential delays proactively, minimizing exceptions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Streamlined Scripting:"})," Simplifies scripting by automatically waiting for a specific period."]})]}),e.jsx("h4",{children:"Syntax:"}),e.jsx("p",{children:e.jsx("code",{children:"driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));"})}),e.jsx("h3",{children:"Example of Implicit Wait:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class ImplicitWaitExample {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("http://example.com");
        WebElement element = driver.findElement(By.id("elementID"));
        element.click();
        driver.quit();
    }
}`})}),e.jsx("h2",{children:"Explicit Waits"}),e.jsxs("p",{children:["Explicit Waits are specific conditions implemented through the ",e.jsx("code",{children:"WebDriverWait"})," class. This allows you to wait for a specific condition to occur before proceeding with execution."]}),e.jsx("h3",{children:"How Does it Work?"}),e.jsxs("p",{children:["The Explicit Wait uses the ",e.jsx("code",{children:"WebDriverWait"})," class and the ",e.jsx("code",{children:"ExpectedConditions"})," module to define wait conditions, ensuring the script proceeds only when the specified conditions are met."]}),e.jsx("h3",{children:"Why Use Explicit Wait?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Precision:"})," Targets specific conditions, providing more control over waits."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Condition-based Waiting:"})," Waits for conditions beyond element presence, making it adaptable."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Timeout Control:"})," Offers maximum timeout duration, ensuring the script continues if conditions aren't met."]})]}),e.jsx("h4",{children:"Syntax:"}),e.jsx("p",{children:e.jsx("code",{children:'WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10)); WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("elementID")));'})}),e.jsx("h3",{children:"Example of Explicit Wait:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class ExplicitWaitExample {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.get("http://example.com");
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("elementID")));
        element.click();
        driver.quit();
    }
}`})}),e.jsx("h2",{children:"Fluent Wait"}),e.jsx("p",{children:"Fluent Wait is similar to Explicit Wait but offers more flexibility, allowing you to specify polling frequency and which exceptions to ignore."}),e.jsx("h3",{children:"How Does it Work?"}),e.jsxs("p",{children:["Fluent Wait operates through the ",e.jsx("code",{children:"FluentWait"})," class, enabling users to create customized waiting strategies by defining maximum wait times, polling intervals, and ignored exceptions."]}),e.jsx("h3",{children:"Why Use Fluent Wait?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Adaptability:"})," Adjusts polling frequency for elements with inconsistent load times."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Exception Handling:"})," Allows overlooking specific exceptions during the wait."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Customizable:"})," Offers control over wait duration and frequency."]})]}),e.jsx("h4",{children:"Syntax:"}),e.jsx("p",{children:e.jsx("code",{children:`  FluentWait wait = new FluentWait<>(driver)
          .withTimeout(Duration.ofSeconds(30))
          .pollingEvery(Duration.ofSeconds(5))
          .ignoring(NoSuchElementException.class);`})}),e.jsx("h3",{children:"Example of Fluent Wait:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import java.time.Duration;

public class FluentWaitExample {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.get("http://example.com");
        FluentWait<WebDriver> wait = new FluentWait<>(driver)
            .withTimeout(Duration.ofSeconds(30))
            .pollingEvery(Duration.ofSeconds(5))
            .ignoring(NoSuchElementException.class);
        WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("elementID")));
        element.click();
        driver.quit();
    }
}`})}),e.jsx("h2",{children:"Differences Between Implicit, Explicit, and Fluent Waits"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Scope"}),e.jsx("th",{children:"Flexibility"}),e.jsx("th",{children:"Use Case"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Implicit Wait"}),e.jsx("td",{children:"Applied to all elements in the script."}),e.jsx("td",{children:"Less flexible; waits for a certain time."}),e.jsx("td",{children:"Simple test cases without complications."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Explicit Wait"}),e.jsx("td",{children:"Used for specific elements and conditions."}),e.jsx("td",{children:"More flexible with specific conditions."}),e.jsx("td",{children:"Several steps before an object becomes visible."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Fluent Wait"}),e.jsx("td",{children:"Particular elements with customization."}),e.jsx("td",{children:"Most flexible with polling frequency."}),e.jsx("td",{children:"Better control over visibility conditions."})]})]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Selenium waits are essential for creating robust test scripts. They enable synchronization between scripts and dynamic web elements, reducing dependencies. Understanding and effectively utilizing Implicit, Explicit, and Fluent waits can significantly enhance the reliability of Selenium WebDriver test scripts in Java."})]}),Py=()=>e.jsxs("div",{className:"SeleniumXPath",children:[e.jsx("h1",{children:"Selenium XPath"}),e.jsx("p",{children:"XPath is a query language used for querying elements within XML and HTML documents. When other CSS locators (like ID, Class, etc.) that identify elements or unique attributes are not available, XPath becomes the preferred locator. Selenium XPath follows an XML path to navigate through the HTML structure of a web page."}),e.jsx("p",{children:"When a web page loads in a browser, it creates a Document Object Model (DOM) structure. To locate any dynamic web element among created DOMs, you can use an XPath expression/command."}),e.jsx("h2",{children:"Why Use Selenium XPath?"}),e.jsx("p",{children:"Automated testing has become a viable alternative to manual testing as the number of browser types and versions continues to rise. Selenium WebDriver provides a free set of open-source APIs for automating web application testing. The WebDriver code library offers a method for finding dynamic web elements using locators such as XPath, ID, class, or CSS selectors."}),e.jsx("h2",{children:"Syntax of XPath"}),e.jsx("p",{children:"XPath in Selenium provides many essential functions and axes to write effective XPath locators:"}),e.jsx("pre",{children:e.jsx("code",{children:"XPath = //tagname[@Attribute = 'Value']"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"//"}),": to select the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"tagname"}),": tag name of a specific node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"@"}),": to select the attribute."]}),e.jsxs("li",{children:[e.jsx("code",{children:"attribute"}),": the attribute name of the node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"value"}),": the value of the node."]})]}),e.jsx("h2",{children:"Different Types of XPath"}),e.jsx("h3",{children:"Absolute XPath"}),e.jsx("p",{children:"Absolute XPath locates an element starting from the root node (HTML) up to the desired element. However, if there is any change in the node or tag along the defined XPath expression, it may fail to find the element."}),e.jsx("h4",{children:"Absolute XPath Syntax:"}),e.jsx("pre",{children:e.jsx("code",{children:"Absolute XPath: /html/body/div[1]/div/div[2]/header/div/div[2]/a/img"})}),e.jsx("h4",{children:"Example of Absolute XPath:"}),e.jsx("pre",{children:e.jsx("code",{children:'WebElement element = driver.findElement(By.xpath("/html/body/div[2]/div/div[1]/h1"));'})}),e.jsx("h3",{children:"Relative XPath"}),e.jsx("p",{children:"Relative XPath does not need to start from the root node and is more robust against changes in the DOM structure."}),e.jsx("h4",{children:"Relative XPath Syntax:"}),e.jsx("pre",{children:e.jsx("code",{children:"Relative XPath: //*[contains(@id, 'block-perfecto-main-menu')]/ul/li[6]/a"})}),e.jsx("h4",{children:"Example of Relative XPath:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement element = driver.findElement(By.xpath("//div[@class='example']/h1"));`})}),e.jsx("h2",{children:"Differences Between Absolute and Relative XPaths"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Absolute XPath starts from the root and is specific, while Relative XPath begins from a specific point in the DOM."}),e.jsx("li",{children:"Absolute XPath is brittle; changes in the DOM can break it, whereas Relative XPath is more flexible and adaptable."}),e.jsx("li",{children:"Relative XPath is generally shorter and easier to maintain than Absolute XPath."})]}),e.jsx("h2",{children:"Chained XPath in Selenium"}),e.jsx("p",{children:"Chained XPath allows you to use multiple XPath expressions together to locate an element that cannot be uniquely identified with a single XPath."}),e.jsx("h4",{children:"Example of Chained XPath:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebDriver driver = new ChromeDriver();
driver.get("http://www.yourwebsite.com");
WebElement parentDiv = driver.findElement(By.xpath("//*[@id='parent']"));
WebElement submitButton = parentDiv.findElement(By.xpath(".//button[text()='Submit']"));
submitButton.click();`})}),e.jsx("h2",{children:"XPath Axes"}),e.jsx("p",{children:"XPath axes allow flexible navigation of elements in XML or HTML documents. They define relationships between the current node and other nodes in the document."}),e.jsx("h3",{children:"Common XPath Axes:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"ancestor"}),": Selects all ancestors of the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"child"}),": Selects all children of the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"descendant"}),": Selects all descendants of the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"following"}),": Selects everything after the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"preceding"}),": Selects all nodes that appear before the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"parent"}),": Selects the parent of the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"self"}),": Selects the current node."]})]}),e.jsx("h3",{children:"Examples of XPath Axes:"}),e.jsx("h4",{children:"Using Ancestor Axis:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement ancestorElement = driver.findElement(By.xpath("//input[@id='username']/ancestor::div"));`})}),e.jsx("h4",{children:"Using Child Axis:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement childElement = driver.findElement(By.xpath("//div[@class='example']/child::h1"));`})}),e.jsx("h4",{children:"Using Descendant Axis:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement descendantElement = driver.findElement(By.xpath("//div[@class='example']/descendant::p"));`})}),e.jsx("h2",{children:"Types of XPath Locators"}),e.jsx("p",{children:"XPath locators are essential for identifying elements on a webpage. Common types include:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["By ID: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[@id='username']"));`})]}),e.jsxs("li",{children:["By Class Name: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[@class='login-button']"));`})]}),e.jsxs("li",{children:["By Name: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[@name='password']"));`})]}),e.jsxs("li",{children:["By Tag Name: ",e.jsx("code",{children:'driver.findElement(By.xpath("//p"));'})]}),e.jsxs("li",{children:["By Text: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[text()='Submit']"));`})]}),e.jsxs("li",{children:["Using Contains: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[contains(@href,'google.com')]"));`})]}),e.jsxs("li",{children:["Using Starts-with: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[starts-with(@id,'user')]"));`})]}),e.jsxs("li",{children:["Using Ends-with: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[ends-with(@id,'name')]"));`})]})]}),e.jsx("h2",{children:"Dynamic XPath in Selenium"}),e.jsx("p",{children:"Dynamic XPath refers to XPath expressions for dynamic WebElements whose attributes frequently change. These XPath locators are adaptable, eliminating the need for constant updates."}),e.jsx("h3",{children:"Examples of Dynamic XPath:"}),e.jsx("h4",{children:"Using Contains:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement element = driver.findElement(By.xpath("//input[contains(@id, 'user')]"));`})}),e.jsx("h4",{children:"Using Logical Operators:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement elementOr = driver.findElement(By.xpath("//input[@id='username' or @name='username']"));`})}),e.jsx("h2",{children:"Best Practices for Using XPath"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use Relative XPath for flexibility and maintainability."}),e.jsx("li",{children:"Opt for meaningful attributes like ID and name."}),e.jsx("li",{children:"Avoid Absolute XPath to prevent brittleness."}),e.jsx("li",{children:"Keep XPath expressions simple and readable."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"By mastering XPath, you can create robust and maintainable Selenium test scripts that accurately interact with web elements. XPath provides the flexibility and power essential for effective web automation testing."})]}),Iy=()=>e.jsxs("div",{className:"TestNGFramework",children:[e.jsx("h1",{children:"TestNG Framework in Selenium"}),e.jsx("p",{children:"TestNG is not merely an American invention; it was created by the same people behind JUnit and NUnit, but it is better. “NG” stands for ‘Next Generation’, signifying that this framework surpasses previous frameworks. Writing tests now extends beyond unit tests to include integration tests as part of Selenium automation testing in Java, which is why TestNG was created."}),e.jsx("h2",{children:"What is TestNG?"}),e.jsx("p",{children:"TestNG offers organized features like annotations, data-driven testing, test case organization, and parallel execution, which assist in managing and conducting your Selenium tests optimally."}),e.jsx("h2",{children:"Advantages of Using TestNG in Selenium"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Test cases can be organized into groups for easier handling of test suites."}),e.jsx("li",{children:"Concurrent testing reduces the time required to run the entire test suite."}),e.jsxs("li",{children:["Provides a variety of test annotations, such as ",e.jsx("code",{children:"@BeforeSuite"}),", ",e.jsx("code",{children:"@AfterSuite"}),", ",e.jsx("code",{children:"@BeforeTest"}),", ",e.jsx("code",{children:"@AfterTest"}),", ",e.jsx("code",{children:"@BeforeMethod"}),", ",e.jsx("code",{children:"@AfterMethod"}),", etc."]}),e.jsx("li",{children:"Allows independent execution of test cases with multiple test data parameters."}),e.jsx("li",{children:"Good reporting and logging capabilities assist in troubleshooting test issues."})]}),e.jsx("h2",{children:"Key Features of TestNG"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Annotations:"})," Simplifies test configuration with annotations like ",e.jsx("code",{children:"@Test"}),", ",e.jsx("code",{children:"@BeforeMethod"}),", ",e.jsx("code",{children:"@AfterMethod"}),", ",e.jsx("code",{children:"@BeforeClass"}),", ",e.jsx("code",{children:"@AfterClass"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test Configuration:"})," Allows definitions of tests using XML files."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test Suite:"})," Executes multiple tests within the same execution framework."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Data-Driven Testing:"})," Executes parameterized tests using data providers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reporting:"})," Generates standard reports in HTML or XML format without tester involvement."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assertions:"})," Provides various assertion types for testing purposes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Integration:"})," Easily integrates with build tools like Maven and Jenkins."]})]}),e.jsx("h2",{children:"Benefits of TestNG Compared to JUnit"}),e.jsxs("ul",{children:[e.jsx("li",{children:"TestNG allows configuration and execution in various ways, including parallel execution."}),e.jsx("li",{children:"Advanced features for report creation, grouping of tests, and non-sequential test execution with dependencies are available."}),e.jsx("li",{children:"DataProvider annotation in TestNG facilitates data-driven tests, unlike JUnit."}),e.jsx("li",{children:"TestNG provides detailed HTML reports summarizing test execution, while JUnit typically generates less informative text reports."}),e.jsxs("li",{children:["Offers advanced annotations like ",e.jsx("code",{children:"@BeforeSuite"}),", ",e.jsx("code",{children:"@AfterSuite"}),", ",e.jsx("code",{children:"@BeforeGroups"}),", and ",e.jsx("code",{children:"@AfterGroups"}),"."]})]}),e.jsx("h2",{children:"Need for TestNG with Selenium"}),e.jsx("p",{children:"Due to interdependencies, Selenium lacks a standard testing practice for results. The TestNG framework enables users to:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Adhere to a necessary report structure."}),e.jsx("li",{children:"State the total number of test cases executed, successes, failures, and untested cases."}),e.jsx("li",{children:"Organize test cases by converting them into a testing XML file."}),e.jsx("li",{children:"Utilize invocation count to perform multiple tests without writing loops."}),e.jsx("li",{children:"Facilitate cross-browser testing."}),e.jsx("li",{children:"Use easy-to-understand annotations."})]}),e.jsx("h2",{children:"TestNG Annotations"}),e.jsx("p",{children:"An annotation tag contains information about methods, classes, or suites and determines the execution strategy of test cases. Here’s a list of important annotations in TestNG:"}),e.jsx("h3",{children:"@Test"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"@Test"})," annotation encapsulates the test case logic and triggers the automation run."]}),e.jsx("pre",{children:e.jsx("code",{children:`@Test
public void setupTestNG() {
    System.out.println("This is a test annotation method");
}`})}),e.jsx("h3",{children:"Attributes of @Test:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"description"}),": States what the test case does."]}),e.jsxs("li",{children:[e.jsx("code",{children:"priority"}),": Arranges the sequence of test methods."]}),e.jsxs("li",{children:[e.jsx("code",{children:"dependsOnMethods"}),": Indicates dependencies between test methods."]}),e.jsxs("li",{children:[e.jsx("code",{children:"enabled"}),": Determines whether to execute the test case."]}),e.jsxs("li",{children:[e.jsx("code",{children:"groups"}),": Combines test cases into units."]})]}),e.jsx("h3",{children:"@BeforeMethod and @AfterMethod"}),e.jsx("p",{children:"These annotations are used to execute code before and after each test method."}),e.jsx("pre",{children:e.jsxs("code",{children:[`@BeforeMethod
public void doLogin() {
    // Code to do login
}`,`{@AfterMethod
public void doLogout() {
    // Code to do logout
}`,"`"]})}),e.jsx("h3",{children:"@BeforeClass and @AfterClass"}),e.jsx("p",{children:"These annotations execute once before and after the first test method in a class."}),e.jsx("pre",{children:e.jsxs("code",{children:[`@BeforeClass
public void navigateUrl() {
    // Code to navigate to URL
}`,`{@AfterClass
public void tearDown() {
    // Code to close the browser
}`,"`"]})}),e.jsx("h3",{children:"@BeforeTest and @AfterTest"}),e.jsx("p",{children:"These annotations run before and after test methods in a class."}),e.jsx("h3",{children:"@BeforeSuite and @AfterSuite"}),e.jsx("p",{children:"These annotations run before and after any test method in a class."}),e.jsx("h3",{children:"@BeforeGroups and @AfterGroups"}),e.jsx("p",{children:"These annotations run before and after a specific group of test cases."}),e.jsx("pre",{children:e.jsx("code",{children:`@BeforeGroups("groupName")
public void startGroupExecution() {
    // Code to execute before a particular group of test cases
}`})}),e.jsx("h2",{children:"Execution Order of Annotations"}),e.jsx("p",{children:"The execution order of TestNG annotations is:"}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("code",{children:"@BeforeSuite"})," → ",e.jsx("code",{children:"@BeforeTest"})," → ",e.jsx("code",{children:"@BeforeClass"})," → ",e.jsx("code",{children:"@BeforeMethod"})," → ",e.jsx("code",{children:"@Test"})," → ",e.jsx("code",{children:"@AfterMethod"})," → ",e.jsx("code",{children:"@AfterClass"})," → ",e.jsx("code",{children:"@AfterTest"})," → ",e.jsx("code",{children:"@AfterSuite"})]})}),e.jsx("h2",{children:"Setting Up TestNG in a Selenium Project"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Add TestNG Dependency:"}),e.jsx("pre",{children:e.jsx("code",{children:`<dependency>
  <groupId>org.testng</groupId>
  <artifactId>testng</artifactId>
  <version>7.8.0</version>
  <scope>test</scope>
</dependency>`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Create a Simple TestNG Test Class:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class TestNGExample {
    WebDriver driver;

    @BeforeClass
    public void setUp() {
        // Initialize WebDriver and open the browser
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://example.com");
    }

    @Test
    public void testTitle() {
        // Get the title of the page
        String title = driver.getTitle();
        System.out.println("Page Title: " + title);
        Assert.assertEquals(title, "Example Domain");
    }

    @Test
    public void testElementPresence() {
        // Find an element by its ID
        WebElement element = driver.findElement(By.id("exampleElementId"));
        Assert.assertTrue(element.isDisplayed(), "Element is not displayed.");
    }

    @AfterClass
    public void tearDown() {
        // Close the browser
        if (driver != null) {
            driver.quit();
        }
    }
}`})})]})]}),e.jsx("h2",{children:"Running the TestNG Test"}),e.jsxs("p",{children:["To run the TestNG test, right-click on the test class and select “Run As” -",">"," “TestNG Test” in your IDE. Alternatively, you can run it on the command line or using a Maven build tool."]}),e.jsx("h2",{children:"TestNG XML File Structure"}),e.jsx("p",{children:"Here’s a sample template for using TestNG XML configuration file:"}),e.jsx("pre",{children:e.jsx("code",{children:`<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="Example Suite">
    <test name="Example Test">
        <classes>
            <class name="TestNGExample"/>
        </classes>
    </test>
</suite>`})}),e.jsx("h2",{children:"Advanced Features of TestNG"}),e.jsx("h3",{children:"Data-Driven Testing with DataProviders"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class DataProviderExample {
    @DataProvider(name = "loginData")
    public Object[][] dataProviderMethod() {
        return new Object[][] {{"user1", "pass1"}, {"user2", "pass2"}, {"user3", "pass3"}};
    }

    @Test(dataProvider = "loginData")
    public void testLogin(String username, String password) {
        System.out.println("Username: " + username + ", Password: " + password);
        // Implement login functionality and assertions here
    }
}`})}),e.jsx("h3",{children:"Parallel Test Execution"}),e.jsx("pre",{children:e.jsx("code",{children:`<suite name="Parallel Suite" parallel="methods" thread-count="3">
    <test name="Parallel Test">
        <classes>
            <class name="ParallelTestExample"/>
        </classes>
    </test>
</suite>`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"The TestNG framework simplifies Selenium automation tests through organized test cases, reduced execution time via parallel execution, and structured XML configurations. Its extensive features, such as annotations and reporting, make it an ideal choice for test automation in Selenium."})]});function fa(){const t=n=>{n.preventDefault()};return e.jsxs("footer",{className:"main-footer",children:[e.jsx("div",{className:"footer-top",children:e.jsxs("div",{className:"footer-container",children:[e.jsxs("div",{className:"newsletter-section",children:[e.jsx("h2",{children:"Stay Updated with Latest Tutorials"}),e.jsx("p",{children:"Get the latest automation testing tips and tutorials directly in your inbox"}),e.jsx("form",{onSubmit:t,className:"newsletter-form",children:e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"email",placeholder:"Enter your email"}),e.jsxs("button",{type:"submit",children:[e.jsx(Yx,{size:20}),e.jsx("span",{children:"Subscribe"})]})]})})]}),e.jsxs("div",{className:"footer-content",children:[e.jsxs("div",{className:"footer-section",children:[e.jsx("h3",{children:"About Us"}),e.jsx("p",{children:"Empowering professionals with cutting-edge automation testing knowledge. Our platform offers comprehensive courses designed for all skill levels, from beginners to advanced practitioners."}),e.jsxs("div",{className:"social-links",children:[e.jsx("a",{href:"https://www.linkedin.com/in/hemant-gandhi254/",className:"social-btn",target:"_blank",rel:"noopener noreferrer",children:e.jsx(Ov,{})}),e.jsx("a",{href:"https://github.com/hemantgandhi1",className:"social-btn",target:"_blank",rel:"noopener noreferrer",children:e.jsx(Av,{})}),e.jsx("a",{href:"https://x.com/Journeytoauto",className:"social-btn",target:"_blank",rel:"noopener noreferrer",children:e.jsx(Nv,{})}),e.jsx("a",{href:"https://www.youtube.com/@Journeytoautomation",className:"social-btn",target:"_blank",rel:"noopener noreferrer",children:e.jsx(Rv,{})})]})]}),e.jsxs("div",{className:"footer-section",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"quick-links",children:[e.jsxs("li",{children:[e.jsx(Zn,{size:16}),e.jsx("a",{href:"/",children:"Home"})]}),e.jsxs("li",{children:[e.jsx(Zn,{size:16}),e.jsx("a",{href:"https://courses.journeytoautomation.org/store",children:"Courses"})]}),e.jsxs("li",{children:[e.jsx(Zn,{size:16}),e.jsx("a",{href:"/",children:"Tutorials"})]}),e.jsxs("li",{children:[e.jsx(Zn,{size:16}),e.jsx("a",{href:"/",children:"Contact"})]})]})]}),e.jsxs("div",{className:"footer-section",children:[e.jsx("h3",{children:"Popular Courses"}),e.jsxs("ul",{className:"course-links",children:[e.jsx("li",{children:e.jsx("a",{href:"/selenium",children:"Selenium Master Course"})}),e.jsx("li",{children:e.jsx("a",{href:"/playwright",children:"Playwright Testing"})}),e.jsx("li",{children:e.jsx("a",{href:"/",children:"Cypress Automation"})}),e.jsx("li",{children:e.jsx("a",{href:"/",children:"API Testing"})})]})]}),e.jsxs("div",{className:"footer-section",children:[e.jsx("h3",{children:"Contact Us"}),e.jsxs("ul",{className:"contact-info",children:[e.jsxs("li",{children:[e.jsx(Gx,{size:18}),e.jsx("span",{children:"New Delhi, 110001"})]}),e.jsxs("li",{children:[e.jsx($x,{size:18}),e.jsx("a",{href:"mailto:gandhihemant10@gmail.com",children:"journeytoautomation@gmail.com"})]}),e.jsxs("li",{children:[e.jsx(Xx,{size:18}),e.jsx("span",{children:"+91 XXX XXX XXXX"})]})]})]})]})]})}),e.jsx("div",{className:"footer-bottom",children:e.jsx("div",{className:"footer-container",children:e.jsxs("div",{className:"bottom-content",children:[e.jsx("div",{className:"copyright",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," JourneyToAutomation. All rights reserved."]})}),e.jsxs("div",{className:"bottom-links",children:[e.jsx("a",{href:"/privacy",children:"Privacy Policy"}),e.jsx("a",{href:"/terms",children:"Terms of Use"}),e.jsx("a",{href:"/faq",children:"FAQ"})]}),e.jsx("div",{className:"credits",children:e.jsxs("p",{children:["Developed/Designed by ",e.jsx("a",{href:"#",className:"developer-link",children:"JourneyToAutomation"})]})})]})})})]})}function Dy(){const[t,n]=S.useState(0),[i,r]=S.useState(!1),s=rn();S.useEffect(()=>{const d=()=>{r(window.innerWidth<=768)};return d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]);const o=["Intro","Java","Variables","DataTypes","JavaOperation","JavaStrings","JavaMethods","JavaArrays","JavaAbstraction","JavaConditions","JavaAPIs","JavaConstructor","DataTypeConversion","Encapsulation","EnumInJava","ExceptionHandlingInJava","FileHandlingInJava","InheritanceDocument","JavaIteration","Poi","Polymorphism","SeleniumAlertsTheory","CdpSeleniumTheory","DataDrivenFramework","DockerInSelenium","ExtentReportsInSelenium","HandlingWebElements","HandlingWindowInSelenium","IsElementPresentInSelenium","HandlingIFramesInSelenium","JavaScriptExecutorInSelenium","Log4jInSelenium","PageObjectModelInSelenium","RelativeLocatorsInSelenium","ReportNGInSelenium","ScreenshotsInSelenium","ActionAPIsInSelenium","SeleniumGrid","SeleniumSelect","SeleniumWaits","SeleniumXPath","TestNGFramework"],l=(d,u)=>{d.preventDefault(),n(u),s(`/Selenium/${o[u]}`),document.getElementById("main-page").scrollIntoView({behavior:"smooth"})},a=()=>{if(t<o.length-1){const d=t+1;n(d),s(`/Selenium/${o[d]}`)}},c=()=>{if(t>0){const d=t-1;n(d),s(`/Selenium/${o[d]}`)}};return e.jsxs("div",{children:[e.jsx(gs,{}),e.jsxs("div",{className:"main",children:[e.jsx("div",{className:`container-left ${i?"hidden":""}`,children:e.jsx("div",{className:"container-leftt",children:e.jsxs("div",{className:"container-links",children:[e.jsx("h1",{children:"Selenium With Java"}),o.map((d,u)=>e.jsx("a",{className:"links",href:`#${d}-section`,onClick:h=>l(h,u),children:d.replace(/([A-Z])/g," $1").trim()},u))]})})}),e.jsxs("div",{className:"main-container",children:[e.jsxs("div",{className:"container-head",children:[e.jsx("button",{className:"prev",onClick:c,children:"Prev"}),e.jsx("button",{className:"next",onClick:a,children:"Next"})]}),e.jsxs("div",{className:"main-page",id:"main-page",children:[t===0&&e.jsxs("div",{id:"Selenium-Java-Intro",className:"IntroJava",children:[e.jsx("h1",{children:"What is Selenium?"}),e.jsx("p",{children:"Selenium is a free (open source) automated testing framework used to validate web applications across different browsers. It offers a plethora of tools that are specially designed to cater to the automated testing of web applications. One of the best things about Selenium is that it supports a variety of programming languages like Java, C#, Python, Ruby, etc. So, developers can write their test scripts in any one of these languages."}),e.jsx("br",{}),e.jsx("h1",{children:"Why Choose Selenium with Java?"}),e.jsxs("p",{children:["Java is regarded as the most widely used and powerful programming language around the world due to its robustness, ease of use and it creates versatility. ",e.jsx("br",{}),e.jsxs("span",{style:{fontWeight:"bold"},children:["Advantages of using Java Selenium -"," "]}),e.jsx("br",{}),"Platform independence - Java code can execute on any device if that device supports the Java Virtual Machine (JVM). Extensive Documentation: Java comes with detailed documentation and a vast community that offers adequate resources to get support. Integration with Testing Frameworks Java seamlessly integrates standard testing frameworks (like JUnit and TestNG), that improve automation of test cases."]}),e.jsx("h1",{children:"Setting Up the Environment"}),e.jsx("p",{children:"First, we must prepare a development environment for testing Selenium tests."}),e.jsx("ul",{className:"list-items",children:"Installing Java"}),e.jsxs("li",{className:"list-item",children:["Downloading the newest JDK (Java Development Kit) from the"," ",e.jsx("a",{href:"https://www.oracle.com/in/java/technologies/downloads/",children:"Oracle website"})]}),e.jsx("li",{className:"list-item",children:"Install as per the instructions for your OS."}),e.jsx("li",{className:"list-item",children:"Set the environment variable JAVA_HOME to the JDK installation directory."}),e.jsx("li",{className:"list-item",children:"To confirm that Java has installed open command prompt and type java -version."}),e.jsx("ul",{className:"list-items",children:"Setting Up Eclipse IDE"}),e.jsxs("li",{className:"list-item",children:["To begin, download and install the Eclipse IDE for Java Developers from"," ",e.jsx("a",{href:"https://www.eclipse.org/downloads/packages/release/kepler/sr1/eclipse-ide-java-developers",children:"here"}),"."]}),e.jsx("li",{className:"list-item",children:"Open Eclipse 2. Create a new workspace."}),e.jsx("ul",{className:"list-items",children:"Adding Selenium Libraries"}),e.jsxs("li",{className:"list-item",children:["Good! The latest Selenium WebDriver Java client can be downloaded here from the official website of"," ",e.jsx("a",{href:"",children:"Selenium"}),"."]}),e.jsx("li",{className:"list-item",children:"Unzip the downloaded ZIP file and you will get some JAR files as part of this to include in your project using Eclipse."}),e.jsx("li",{className:"list-item",children:"Right-click on your project > Build Path > Configure Build Path."}),e.jsx("li",{className:"list-item",children:"Click on Add External JARs and select the Selenium JAR files."}),e.jsx("h1",{children:"Your First Selenium Test"}),e.jsx("h4",{children:"The basic structure of a Selenium Test"}),e.jsx("p",{children:"Generally, the steps that a typical Selenium test in Java makes are to"}),e.jsxs("ol",{className:"list-items",children:[e.jsx("li",{className:"list-item",children:"Set up the WebDriver."}),e.jsx("li",{className:"list-item",children:"Navigate to the target."}),e.jsx("li",{className:"list-item",children:"Do actions on web elements."}),e.jsx("li",{className:"list-item",children:"Validate the results."}),e.jsx("li",{className:"list-item",children:"Close the browser."})]}),e.jsx("h4",{children:"Example: Automating a Google Search"}),e.jsx("img",{className:"img-selenium",src:Wv,alt:""}),e.jsx("h1",{children:"Selenium WebDriver Basics"}),e.jsx("h4",{children:"Locating Web Elements"}),e.jsx("p",{children:"The Selenium locators are the various approaches that search or identify any element in a webpage."}),e.jsxs("ol",{className:"list-items",children:[e.jsx("li",{className:"list-item",children:"By.id"}),e.jsx("li",{className:"list-item",children:"By.name"}),e.jsx("li",{className:"list-item",children:"By.className"}),e.jsx("li",{className:"list-item",children:"By.tagName"}),e.jsx("li",{className:"list-item",children:"By.linkText"}),e.jsx("li",{className:"list-item",children:"By.partialLinkText"}),e.jsx("li",{className:"list-item",children:"By.xpath"}),e.jsx("li",{className:"list-item",children:"By.cssSelector"})]}),e.jsx("ul",{className:"list-items",children:"Performing Actions on Web Elements."}),e.jsx("li",{className:"list-item",children:"sendKeys(): To type text in an input field."}),e.jsx("li",{className:"list-item",children:"click (): The user clicks a button or link."}),e.jsx("li",{className:"list-item",children:"getText(): Get the text of an element."}),e.jsx("ul",{className:"list-items",children:"Handling WebDriver Exceptions"}),e.jsx("li",{className:"list-item",children:"Common exceptions include"}),e.jsx("li",{className:"list-item",children:"NoSuchElementException: No element was found"}),e.jsx("li",{className:"list-item",children:"TimeoutException: Operation timed out"}),e.jsx("li",{className:"list-item",children:"StaleElementReferenceException: Element is no longer attached to the DOM."}),e.jsx("h1",{children:"Advanced Selenium Concepts"}),e.jsx("h4",{children:"> Handling Alerts and Pop-ups"}),e.jsx("img",{className:"img-selenium",src:Jv,alt:""}),e.jsx("h4",{children:"> Working with Multiple Windows and Frames"}),e.jsx("img",{className:"img-selenium",src:Uv,alt:""}),e.jsx("h4",{children:"> Implicit and Explicit Waits"}),e.jsx("img",{className:"img-selenium",src:zv,alt:""}),e.jsx("h1",{children:"In the realm of Selenium Testing"}),e.jsxs("p",{children:["Page Object Model (POM)- Organize your tests as per interaction with the page relative to the logic of a test."," ",e.jsx("br",{}),e.jsx("span",{style:{fontWeight:"bold"},children:"Independence:"})," All tests should be independent of each other to prevent bad test-writing practices where a failure in one part causes several downstream failures. ",e.jsx("br",{}),e.jsx("span",{style:{fontWeight:"bold"},children:"Silent Waits:"})," Use practical wait strategies for dynamic content, such as setting Expected Wait or Page Load times.",e.jsx("br",{}),e.jsx("span",{style:{fontWeight:"bold"},children:"Assertions:"})," ","Validate test outputs using assertions to establish the significance and reliability of each test."]}),e.jsx("h1",{children:"Conclusion"}),e.jsx("p",{children:"There are other ways to do this also, e.g., using JSoup, but you can use the Selenium + Java combo for testing web applications; it is simple, a very powerful combination, and creating them at will in no time! Creating robust and maintainable test scripts by Misagh Moayyed Introduction. Written test automation is a great way to verify the expected behavior of an application. No matter whether you are only starting to learn Selenium or would like a comprehensive tutorial on mastering Selenium with Java."})]}),t===1&&e.jsx(_v,{}),t===2&&e.jsx(qv,{}),t===3&&e.jsx(Hv,{}),t===4&&e.jsx(Vv,{}),t===5&&e.jsx($v,{}),t===6&&e.jsx(Gv,{}),t===7&&e.jsx(Xv,{}),t===8&&e.jsx(Kv,{}),t===9&&e.jsx(Qv,{}),t===10&&e.jsx(Yv,{}),t===11&&e.jsx(Zv,{}),t===12&&e.jsx(ey,{}),t===13&&e.jsx(ty,{}),t===14&&e.jsx(ny,{}),t===15&&e.jsx(iy,{}),t===16&&e.jsx(ry,{}),t===17&&e.jsx(sy,{}),t===18&&e.jsx(oy,{}),t===19&&e.jsx(ly,{}),t===20&&e.jsx(ay,{}),t===21&&e.jsx(cy,{}),t===22&&e.jsx(dy,{}),t===23&&e.jsx(uy,{}),t===24&&e.jsx(hy,{}),t===25&&e.jsx(py,{}),t===26&&e.jsx(my,{}),t===27&&e.jsx(fy,{}),t===28&&e.jsx(xy,{}),t===29&&e.jsx(gy,{}),t===30&&e.jsx(jy,{}),t===31&&e.jsx(vy,{}),t===32&&e.jsx(yy,{}),t===33&&e.jsx(by,{}),t===34&&e.jsx(wy,{}),t===35&&e.jsx(Sy,{}),t===36&&e.jsx(Ey,{}),t===37&&e.jsx(Cy,{}),t===38&&e.jsx(ky,{}),t===39&&e.jsx(Ty,{}),t===40&&e.jsx(Py,{}),t===41&&e.jsx(Iy,{})]})]})]}),e.jsx(fa,{})]})}const Ay=()=>e.jsxs("div",{className:"ArraysInJavaScript",children:[e.jsx("h1",{children:"Arrays in JavaScript"}),e.jsx("p",{children:"An array in JavaScript is a data structure that allows you to store multiple values in a single variable. Arrays can hold any data type and can dynamically resize. They are zero-indexed, meaning the first element is at index 0."}),e.jsx("h2",{children:"Creating Arrays"}),e.jsxs("p",{children:["Arrays can be created using square brackets ",e.jsx("code",{children:"[]"})," or the ",e.jsx("code",{children:"Array"})," constructor."]}),e.jsx("pre",{children:e.jsx("code",{children:`// Using square brackets
const numbers = [1, 2, 3, 4, 5];

// Using the Array constructor
const fruits = new Array('Apple', 'Banana', 'Orange');`})}),e.jsx("h2",{children:"Accessing Array Elements"}),e.jsx("p",{children:"You can access array elements using their index. Remember, arrays are zero-indexed, so the first element is at index 0."}),e.jsx("pre",{children:e.jsx("code",{children:`const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Orange`})}),e.jsx("h2",{children:"Common Array Methods"}),e.jsx("p",{children:"Here are some of the most commonly used array methods in JavaScript:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"push()"}),": Adds one or more elements to the end of an array.",e.jsx("pre",{children:e.jsx("code",{children:`const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"pop()"}),": Removes the last element from an array.",e.jsx("pre",{children:e.jsx("code",{children:`const numbers = [1, 2, 3, 4];
numbers.pop();
console.log(numbers); // Output: [1, 2, 3]`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"shift()"}),": Removes the first element from an array.",e.jsx("pre",{children:e.jsx("code",{children:`const fruits = ['Apple', 'Banana', 'Orange'];
fruits.shift();
console.log(fruits); // Output: ['Banana', 'Orange']`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"unshift()"}),": Adds one or more elements to the beginning of an array.",e.jsx("pre",{children:e.jsx("code",{children:`const fruits = ['Banana', 'Orange'];
fruits.unshift('Apple');
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange']`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"map()"}),": Creates a new array with the results of calling a function on every element.",e.jsx("pre",{children:e.jsx("code",{children:`const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"filter()"}),": Creates a new array with all elements that pass a test.",e.jsx("pre",{children:e.jsx("code",{children:`const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"reduce()"}),": Reduces the array to a single value by applying a function to each element.",e.jsx("pre",{children:e.jsx("code",{children:`const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 10`})})]})]}),e.jsx("h2",{children:"Looping Through Arrays"}),e.jsxs("p",{children:["You can loop through arrays using various methods like ",e.jsx("code",{children:"for"}),", ",e.jsx("code",{children:"forEach"}),", and ",e.jsx("code",{children:"for...of"}),"."]}),e.jsx("pre",{children:e.jsx("code",{children:`const fruits = ['Apple', 'Banana', 'Orange'];

// Using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using forEach method
fruits.forEach(fruit => console.log(fruit));

// Using for...of loop
for (let fruit of fruits) {
  console.log(fruit);
}`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Arrays in JavaScript are powerful and versatile data structures that allow you to store and manipulate collections of values efficiently. By using various array methods, you can perform operations like adding, removing, or transforming elements with ease."})]}),Oy=()=>e.jsxs("div",{className:"ClassOOPS",children:[e.jsx("h1",{children:"Class in JavaScript"}),e.jsx("p",{children:"A class in JavaScript can be regarded as a template for object creation. It contains the data (also called properties) and the functions (methods) that manipulate that data, allowing easier management as a single unit."}),e.jsx("p",{children:"JavaScript classes are better ways of creating objects and working with inheritance. Although classes in JavaScript resemble those in typical object-oriented programming languages such as Java or C++, the implementation does not use a class mechanism and is prototype-based."}),e.jsx("h2",{children:"Formulation of a Class"}),e.jsx("p",{children:"Understanding a class in JavaScript makes it easy to create components that can be utilized multiple times by grouping related methods and properties."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Constructor Method:"})," This is an instance function invoked whenever a new instance of the class is created."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Methods:"})," Operations executed in the context of an instance of that class."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inheritance:"})," Classes can inherit from parent classes, utilizing their methods and properties."]})]}),e.jsx("h2",{children:"Advantages of Classes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code Reusability: Multiple instances of a class can be created for reuse."}),e.jsx("li",{children:"Inheritance: Allows one object to gain properties of another."}),e.jsx("li",{children:"Encapsulation: Combines related data and functions under one class, improving modularity."}),e.jsx("li",{children:"Readability and Structure: Enhances the structure of JavaScript, aiding developers familiar with OOP."})]}),e.jsx("h2",{children:"Disadvantages of Classes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Complexity: Adds layers of complexity compared to simpler functions or object literals."}),e.jsxs("li",{children:["Limited Private Fields: JavaScript supports private methods/fields using ",e.jsx("code",{children:"#"}),", but it's still not widely adopted."]}),e.jsx("li",{children:"Performance: Classes may introduce performance overhead due to inheritance dependencies."})]}),e.jsx("h2",{children:"Example Class in JavaScript"}),e.jsx("pre",{children:e.jsx("code",{children:`class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return \`Car: \${this.brand} \${this.model}, Year: \${this.year}\`;
  }

  startCar() {
    return \`\${this.brand} \${this.model} is starting...\`;
  }
}

// Create an instance of the Car class
let myCar = new Car('Toyota', 'Corolla', 2020);

// Output
console.log(myCar.displayInfo());  // Output: Car: Toyota Corolla, Year: 2020
console.log(myCar.startCar());     // Output: Toyota Corolla is starting...`})}),e.jsx("h2",{children:"Inheritance with Classes"}),e.jsx("p",{children:"Classes in JavaScript support inheritance where child classes derive from parent classes and extend their behavior."}),e.jsx("pre",{children:e.jsx("code",{children:`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a noise.\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return \`\${this.name} barks.\`;
  }
}

let dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.speak()); // Output: Buddy barks.`})}),e.jsx("h2",{children:"Use Cases for Classes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Creating multiple objects with shared properties (e.g., Car objects, User profiles)."}),e.jsx("li",{children:"Inheritance: Implementing parent-child class relationships (e.g., Animal-Dog)."}),e.jsx("li",{children:"Encapsulating logic: Separate logic in classes (e.g., Product class in an e-commerce application)."}),e.jsx("li",{children:"Component-Based UI Libraries: Classes are commonly used in frameworks like React for creating UI components."})]})]}),Ny=()=>e.jsxs("div",{className:"ConditionsInJavaScript",children:[e.jsx("h1",{children:"Conditions in JavaScript"}),e.jsx("p",{children:"Whenever conditions are incorporated in computer languages, they act as a control flow mechanism for how the program proceeds. Conditions allow the use of constructs such as if, else, else if, switch, and the ternary operator, enabling the execution of different blocks of code based on specified conditions."}),e.jsx("h2",{children:"1. if Statement"}),e.jsx("p",{children:"The if statement executes a block of code if a specified condition is true."}),e.jsx("pre",{children:e.jsx("code",{children:`if (condition) {
  // code to execute if condition is true
}`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let temperature = 35;
if (temperature > 30) {
  console.log("It's a hot day!");
}`})}),e.jsxs("p",{children:["Output: ",e.jsx("code",{children:"It's a hot day!"})]}),e.jsx("h2",{children:"2. if-else Statement"}),e.jsx("p",{children:"The if-else statement provides an alternative block of code if the condition is false."}),e.jsx("pre",{children:e.jsx("code",{children:`if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let age = 17;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}`})}),e.jsxs("p",{children:["Output: ",e.jsx("code",{children:"You are too young to vote."})]}),e.jsx("h2",{children:"3. if-else if-else Statement"}),e.jsx("p",{children:"The if-else if-else statement is used when multiple conditions need to be checked sequentially."}),e.jsx("pre",{children:e.jsx("code",{children:`if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition2 is true
} else {
  // code to execute if neither condition is true
}`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let score = 78;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}`})}),e.jsxs("p",{children:["Output: ",e.jsx("code",{children:"Grade: C"})]}),e.jsx("h2",{children:"4. switch Statement"}),e.jsx("p",{children:"The switch statement evaluates an expression and executes the matching case block."}),e.jsx("pre",{children:e.jsx("code",{children:`switch (expression) {
  case value1:
    // code if expression === value1
    break;
  case value2:
    // code if expression === value2
    break;
  default:
    // code if no cases match
}`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}`})}),e.jsxs("p",{children:["Output: ",e.jsx("code",{children:"Wednesday"})]}),e.jsx("h2",{children:"5. Conditional (Ternary) Operator"}),e.jsx("p",{children:"The conditional operator provides a shorthand for if-else statements."}),e.jsx("pre",{children:e.jsx("code",{children:"condition ? expressionIfTrue : expressionIfFalse;"})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let age = 20;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote yet.";
console.log(canVote);`})}),e.jsxs("p",{children:["Output: ",e.jsx("code",{children:"Yes, you can vote."})]}),e.jsx("h2",{children:"6. Logical Operators with Conditions"}),e.jsx("p",{children:"Logical operators such as && (AND), || (OR), and ! (NOT) can combine multiple conditions."}),e.jsx("pre",{children:e.jsx("code",{children:`let hasID = true;
let isAdult = true;
if (hasID && isAdult) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}`})}),e.jsxs("p",{children:["Output: ",e.jsx("code",{children:"Access granted."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"JavaScript conditions give developers the flexibility to control the flow of their programs by handling various scenarios based on logical comparisons."})]}),Ry=()=>e.jsxs("div",{className:"EncapsulationInJavaScript",children:[e.jsx("h1",{children:"Encapsulation"}),e.jsx("p",{children:"Encapsulation in Object-Oriented Programming (OOP) is the concept of bounding data (i.e., attributes/properties) and methods (i.e., functions/behaviors) of an object in a single entity or class while forbidding the exposure of some components of the object. The object’s state is said to be encapsulated in such a way that it shields and hides its operational data while allowing only a small amount of it to be exposed to control interface interaction with that object."}),e.jsx("p",{children:"In JavaScript, encapsulation enables us to manage the availability of different properties of an object so that they can only be affected or altered by the methods of that object and not in any other manner."}),e.jsx("h2",{children:"Explanation of Encapsulation in JavaScript"}),e.jsx("p",{children:"Encapsulation can be implemented in such a way that certain properties and/or methods are private and are not accessible by any external means. Restricting access through public methods provides the necessary discipline to maintain the validity of the objects."}),e.jsx("p",{children:"Techniques to achieve encapsulation in JavaScript:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Closure-based encapsulation (before ES6)"}),e.jsxs("li",{children:["Private fields and methods using the ",e.jsx("code",{children:"#"})," syntax (ES6 and beyond)"]})]}),e.jsx("p",{children:"Encapsulation helps conceal the internal mechanisms of an object while providing only the necessary interface for interaction, ensuring that the process of data and code maintenance is simplified and improving the modularity of the designed object."}),e.jsx("h2",{children:"Key Concepts of Encapsulation"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Data Hiding:"})," Preventing certain properties of an object from being tampered with by not exposing them directly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Public Interface:"})," Exposing specific methods to interact with the object, controlling how and when properties can be accessed or modified."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Controlled Access:"})," Ensuring that internal data can only be modified in a controlled way, typically through setter and getter methods."]})]}),e.jsx("h2",{children:"Advantages of Encapsulation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Data Integrity: Unauthorized changes to the data are prevented, ensuring protection against data loss."}),e.jsx("li",{children:"Modularity: Encourages modular coding, making it easier to comprehend and maintain."}),e.jsx("li",{children:"Security: Protects information held in data members from unauthorized access or changes."}),e.jsx("li",{children:"Improved Maintenance: Simplifies maintenance as external code cannot alter internal implementation."}),e.jsx("li",{children:"Flexibility: Allows internal changes without affecting user interactions."})]}),e.jsx("h2",{children:"Disadvantages of Encapsulation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Increased Complexity: Can introduce complexity by requiring additional getter and setter methods."}),e.jsx("li",{children:"Performance Overhead: The cost of data hiding and access methods may impact performance."}),e.jsx("li",{children:"Complicated Debugging: Encapsulated elements may complicate error tracking due to limited visibility."}),e.jsx("li",{children:"Overhead for Small Projects: Encapsulation may be excessive for simple projects."})]}),e.jsx("h2",{children:"Implementation of Encapsulation in JavaScript"}),e.jsx("h3",{children:"A. Encapsulation Using Closures (Pre-ES6)"}),e.jsx("p",{children:"Before ES6, encapsulation was often achieved using closures. By defining variables inside the constructor function, properties are kept private."}),e.jsx("pre",{children:e.jsx("code",{children:`function BankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  this.getBalance = function() {
    return balance; // Public method
  };
  this.deposit = function(amount) {
    if (amount > 0) {
      balance += amount; // Modify private variable
    }
  };
  this.withdraw = function(amount) {
    if (amount <= balance) {
      balance -= amount; // Modify private variable
    } else {
      console.log('Insufficient funds');
    }
  };
}`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`const account = new BankAccount(1000);
console.log(account.getBalance()); // Output: 1000
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
console.log(account.balance); // Output: undefined (not accessible)`})}),e.jsx("h3",{children:"B. Encapsulation Using ES6 Private Fields (#)"}),e.jsxs("p",{children:["ES2020 introduced private fields using the ",e.jsx("code",{children:"#"})," syntax, providing a native way to define private properties in classes."]}),e.jsx("pre",{children:e.jsx("code",{children:`class BankAccount {
  #balance; // Private field
  constructor(initialBalance) {
    this.#balance = initialBalance; // Assign initial balance
  }
  getBalance() {
    return this.#balance; // Public method
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount; // Modify private field
    }
  }
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount; // Modify private field
    } else {
      console.log('Insufficient funds');
    }
  }
}`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`const account = new BankAccount(1000);
console.log(account.getBalance()); // Output: 1000
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class`})}),e.jsx("h2",{children:"Use Cases of Encapsulation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Banking Applications: Concealing sensitive data like account balance and transaction history."}),e.jsx("li",{children:"User Authentication Systems: Hiding user passwords and exposing methods for password hashing and validation."}),e.jsx("li",{children:"Component Libraries: Concealing internal state of components in UI frameworks like React."}),e.jsx("li",{children:"Data Validation: Ensuring data integrity by controlling how data can be modified."}),e.jsx("li",{children:"Game Development: Controlling player stats and attributes through specific operations."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Encapsulation in JavaScript is central to OOP, enhancing security, modularity, and code maintainability by limiting external access to object properties. By implementing encapsulation, developers can write secure, organized, and maintainable code that ensures consistent behavior of objects throughout an application's lifecycle."}),e.jsx("h3",{children:"Key Points:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Encapsulation is the practice of bundling data and methods into a single entity while hiding internal properties."}),e.jsx("li",{children:"It promotes data integrity, security, and better maintainability by controlling how external code interacts with object properties."}),e.jsx("li",{children:"JavaScript achieves encapsulation through closure-based methods and native private fields (using #)."}),e.jsx("li",{children:"While encapsulation adds complexity, it provides numerous benefits in larger, modular systems where data integrity and controlled access are essential."})]})]}),My=()=>e.jsxs("div",{className:"FunctionsInJavaScript",children:[e.jsx("h1",{children:"Functions in JavaScript"}),e.jsx("p",{children:"Functions are a fundamental feature of JavaScript, allowing you to encapsulate code for reuse, modularity, and better organization. Here’s a detailed look at functions in JavaScript, including their syntax, examples, output, and explanations."}),e.jsx("h2",{children:"1. Function Declaration"}),e.jsx("p",{children:e.jsx("strong",{children:"Syntax:"})}),e.jsx("pre",{children:e.jsx("code",{children:`function functionName(parameters) {
  // code to be executed
  return value; // optional
}`})}),e.jsx("p",{children:e.jsx("strong",{children:"Example:"})}),e.jsx("pre",{children:e.jsx("code",{children:`function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));`})}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:e.jsx("code",{children:"Hello, Alice!"})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Function Declaration: Defines a function named greet that takes one parameter, name."}),e.jsx("li",{children:"Return Statement: Returns a greeting string that includes the provided name."}),e.jsx("li",{children:'Calling the Function: greet("Alice") calls the function and logs the returned value.'})]}),e.jsx("h2",{children:"2. Function Expression"}),e.jsx("p",{children:"A function expression creates a function and assigns it to a variable. It can be named or anonymous."}),e.jsx("p",{children:e.jsx("strong",{children:"Syntax:"})}),e.jsx("pre",{children:e.jsx("code",{children:`const functionName = function(parameters) {
  // code to be executed
  return value; // optional
};`})}),e.jsx("p",{children:e.jsx("strong",{children:"Example:"})}),e.jsx("pre",{children:e.jsx("code",{children:`const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(5, 3));`})}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:e.jsx("code",{children:"15"})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Function Expression: Defines a function assigned to the variable multiply."}),e.jsx("li",{children:"Calling the Function: multiply(5, 3) calls the function and logs the product of 5 and 3."})]}),e.jsx("h2",{children:"3. Arrow Functions"}),e.jsxs("p",{children:["Arrow functions provide a more concise syntax and do not have their own ",e.jsx("code",{children:"this"})," context. They are especially useful for inline functions and callbacks."]}),e.jsx("p",{children:e.jsx("strong",{children:"Syntax:"})}),e.jsx("pre",{children:e.jsx("code",{children:`const functionName = (parameters) => {
  // code to be executed
  return value; // optional
};`})}),e.jsx("p",{children:e.jsx("strong",{children:"Example:"})}),e.jsx("pre",{children:e.jsx("code",{children:`const add = (a, b) => a + b;
console.log(add(2, 4));`})}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:e.jsx("code",{children:"6"})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Arrow Function: Defines a function assigned to the variable add with a concise syntax."}),e.jsx("li",{children:"Implicit Return: For single expressions, the return statement is implied."}),e.jsx("li",{children:"Calling the Function: add(2, 4) logs the sum of 2 and 4."})]}),e.jsx("h2",{children:"4. Immediately Invoked Function Expression (IIFE)"}),e.jsx("p",{children:"An IIFE is a function that runs immediately after its definition. It's useful for creating a private scope."}),e.jsx("p",{children:e.jsx("strong",{children:"Syntax:"})}),e.jsx("pre",{children:e.jsx("code",{children:`(function() {
  // code to be executed
})();`})}),e.jsx("p",{children:e.jsx("strong",{children:"Example:"})}),e.jsx("pre",{children:e.jsx("code",{children:`(function() {
  let message = "IIFE executed!";
  console.log(message);
})();`})}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:e.jsx("code",{children:"IIFE executed!"})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"IIFE: Defines and immediately executes a function."}),e.jsx("li",{children:"Scope: Variables inside the IIFE are private to the function and cannot be accessed outside."})]}),e.jsx("h2",{children:"5. Function with Default Parameters"}),e.jsx("p",{children:"Functions can have default parameters, which are used if no argument is passed for that parameter."}),e.jsx("p",{children:e.jsx("strong",{children:"Syntax:"})}),e.jsx("pre",{children:e.jsx("code",{children:`function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // code to be executed
}`})}),e.jsx("p",{children:e.jsx("strong",{children:"Example:"})}),e.jsx("pre",{children:e.jsx("code",{children:`function greet(name = "Guest") {
  return "Hello, " + name + "!";
}
console.log(greet());
console.log(greet("Bob"));`})}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsxs("pre",{children:[e.jsx("code",{children:"Hello, Guest!"}),e.jsx("code",{children:"Hello, Bob!"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:'Default Parameter: name = "Guest" provides a default value if no argument is passed.'}),e.jsx("li",{children:'Calling the Function: greet() uses the default parameter, while greet("Bob") overrides it.'})]}),e.jsx("h2",{children:"6. Function with Rest Parameters"}),e.jsx("p",{children:"Rest parameters allow a function to accept an indefinite number of arguments as an array."}),e.jsx("p",{children:e.jsx("strong",{children:"Syntax:"})}),e.jsx("pre",{children:e.jsx("code",{children:`function functionName(...restParams) {
  // code to be executed
}`})}),e.jsx("p",{children:e.jsx("strong",{children:"Example:"})}),e.jsx("pre",{children:e.jsx("code",{children:`function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));`})}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:e.jsx("code",{children:"10"})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Rest Parameters: ...numbers collect all arguments into an array."}),e.jsx("li",{children:"Using reduce: Calculates the sum of all numbers in the array."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Functions in JavaScript are crucial for organizing and reusing code efficiently. Function Declarations and Function Expressions provide flexibility in defining and assigning functions. Arrow Functions offer a concise syntax and are ideal for short functions, particularly as callbacks. Immediately Invoked Function Expressions (IIFEs) create a private scope and execute immediately, useful for encapsulating code. Default Parameters simplify handling of optional arguments, while Rest Parameters handle variable numbers of arguments elegantly. Mastery of these function types enhances code readability, maintainability, and functionality in JavaScript applications."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Function Declaration: Classic way to define functions, with functionName and parameters."}),e.jsx("li",{children:"Function Expression: Defines a function assigned to a variable."}),e.jsx("li",{children:"Arrow Function: Concise syntax, useful for callbacks, with implicit return."}),e.jsx("li",{children:"IIFE: Immediately invokes a function, creating a private scope."}),e.jsx("li",{children:"Default Parameters: Provides default values if arguments are not supplied."}),e.jsx("li",{children:"Rest Parameters: Collects multiple arguments into an array, useful for variable-length arguments."})]}),e.jsx("p",{children:"Understanding these various ways to define and use functions helps in writing flexible and maintainable JavaScript code."})]}),Ly=()=>e.jsxs("div",{className:"InheritanceInOOP",children:[e.jsx("h1",{children:"Inheritance in OOP"}),e.jsx("p",{children:"In Object-Oriented Programming (OOP), inheritance is the mechanism by which one class (called the child class or subclass) inherits properties and methods from another class (called the parent class or superclass). This allows for the reusability of code and promotes a hierarchical relationship between objects."}),e.jsx("p",{children:"In JavaScript, inheritance allows a subclass to access the properties and methods of a parent class, reducing redundancy by sharing common functionality across classes."}),e.jsx("h2",{children:"Explanation of Inheritance in JavaScript"}),e.jsxs("p",{children:["Inheritance in JavaScript enables one object (or class) to inherit the properties and methods of another. This is done using the ",e.jsx("code",{children:"extends"})," keyword in ES6 classes or using prototypal inheritance in earlier versions of JavaScript. Through inheritance, you can create a child class that extends a parent class, adding or modifying functionality without duplicating code."]}),e.jsx("p",{children:"JavaScript supports two primary forms of inheritance:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Class-based inheritance: Introduced in ES6, where classes extend other classes."}),e.jsx("li",{children:"Prototypal inheritance: A more flexible inheritance mechanism where objects inherit directly from other objects."})]}),e.jsx("h2",{children:"Types of Inheritance"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Single Inheritance: A subclass inherits from one superclass. This is the most common form of inheritance in JavaScript."}),e.jsx("li",{children:"Multilevel Inheritance: A subclass inherits from a superclass which also has a superclass, forming a vertical inheritance chain."}),e.jsx("li",{children:"Hierarchical Inheritance: Multiple subclasses inherit from a single parent class."}),e.jsx("li",{children:"Multiple Inheritance (Does Not apply In JavaScript): A subclass is allowed to have more than one superclass. This can be simulated using mixins."}),e.jsx("li",{children:"Hybrid Inheritance: A combination of multiple inheritance types (not directly supported in JavaScript but can be simulated)."})]}),e.jsx("h3",{children:"Advantages of Inheritance"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code Reusability: Child classes can reuse code from parent classes."}),e.jsx("li",{children:"Simplifies Maintenance: Changes in parent classes can propagate to child classes."}),e.jsx("li",{children:"Extensibility: Child classes can override parent methods and define new behaviors."}),e.jsx("li",{children:"Logical Hierarchy: Creates a clear structure that mirrors real-life relationships."})]}),e.jsx("h3",{children:"Disadvantages of Inheritance"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Increased Complexity: Can complicate class structures and relationships."}),e.jsx("li",{children:"Tight Coupling: Changes in parent classes can affect all child classes."}),e.jsx("li",{children:"Overridden Methods: Method overriding can introduce bugs if not managed carefully."}),e.jsx("li",{children:"Performance Overhead: Accessing inherited properties can be slower in deep inheritance chains."})]}),e.jsx("h2",{children:"Implementation of Inheritance in JavaScript"}),e.jsx("h3",{children:"A. ES6 Class-Based Inheritance"}),e.jsxs("p",{children:["In modern JavaScript, specifically ES6 and beyond, inheritance is present in the language in the form of classes and the ",e.jsx("code",{children:"extends"})," keyword."]}),e.jsx("pre",{children:e.jsx("code",{children:`class ParentClass {
  constructor(param1) {
    this.property1 = param1;
  }
  parentMethod() {
    // Parent class method logic
  }
}

class ChildClass extends ParentClass {
  constructor(param1, param2) {
    super(param1); // Call parent constructor
    this.property2 = param2;
  }
  childMethod() {
    // Child class method logic
  }
}`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return \`\${this.name} makes a sound.\`;
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }
  // Overriding the parent class method
  speak() {
    return \`\${this.name}, the \${this.breed}, barks!\`;
  }
}

// Creating an instance of Dog
const dog = new Dog('Buddy', 'Golden Retriever');

// Accessing inherited and overridden methods
console.log(dog.speak()); // Output: Buddy, the Golden Retriever, barks!`})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Parent Class (Animal): Defines a class named Animal, which has a name property and a speak method."}),e.jsx("li",{children:"Child Class (Dog): The Dog class inherits from the Animal class, adding a breed property and overriding the speak method."}),e.jsxs("li",{children:[e.jsx("code",{children:"super()"}),": This calls the parent class constructor (Animal) to initialize the name property."]}),e.jsx("li",{children:"Method Overriding: The Dog class overrides the speak method to provide a more specific implementation."})]}),e.jsx("h3",{children:"B. Prototypal Inheritance (Pre-ES6)"}),e.jsx("p",{children:"Before ES6 introduced class and extends, prototypal inheritance was practiced, where objects inherited from other objects using prototypes."}),e.jsx("pre",{children:e.jsx("code",{children:`function ParentClass(param1) {
  this.property1 = param1;
}

ParentClass.prototype.parentMethod = function() {
  // Parent class method logic
};

function ChildClass(param1, param2) {
  ParentClass.call(this, param1); // Inherit parent properties
  this.property2 = param2;
}

ChildClass.prototype = Object.create(ParentClass.prototype); // Inherit parent methods
ChildClass.prototype.constructor = ChildClass;

ChildClass.prototype.childMethod = function() {
  // Child class method logic
}`})}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Parent constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return \`\${this.name} makes a sound.\`;
};

// Child constructor function inheriting from Animal
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Inherit methods from Animal's prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Overriding the speak method
Dog.prototype.speak = function() {
  return \`\${this.name}, the \${this.breed}, barks!\`;
};

// Creating an instance of Dog
const dog = new Dog('Buddy', 'Golden Retriever');

// Accessing inherited and overridden methods
console.log(dog.speak()); // Output: Buddy, the Golden Retriever, barks!`})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Prototype Chain: The Dog object inherits properties and methods from the Animal object."}),e.jsxs("li",{children:[e.jsx("code",{children:"call()"})," Method: Calls the Animal constructor, passing the name property to the Dog constructor."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.create()"}),": Creates a new object with Animal.prototype as its prototype, ensuring that Dog inherits the methods."]}),e.jsx("li",{children:"Method Overriding: The speak method in the Dog prototype overrides the speak method in Animal.prototype."})]}),e.jsx("h2",{children:"Use Cases of Inheritance in JavaScript"}),e.jsxs("ul",{children:[e.jsx("li",{children:"User Management System: A user class can handle attributes like username and email, while Admin and Member subclasses can inherit from the User class."}),e.jsx("li",{children:"E-commerce System: The Product class can define properties like name and price, while Electronics and Clothing subclasses can extend the Product class to add specific features."}),e.jsx("li",{children:"Game Development: The Entity class can define common characteristics, while Player and Enemy classes can inherit from Entity, defining unique attributes and actions."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Inheritance in JavaScript allows for the sharing of common properties and methods among classes, promoting code reuse and reducing redundancy. Understanding the different types of inheritance and their implementations enhances the design of object-oriented applications in JavaScript, making code more maintainable and logical."}),e.jsxs("ul",{children:[e.jsx("li",{children:"This mechanism allows the child class to inherit properties and methods from the parent class."}),e.jsx("li",{children:"Single Inheritance is the most common type of inheritance in JavaScript."})]})]}),dp=()=>e.jsxs("div",{className:"JavaScriptOverview",children:[e.jsx("h1",{children:"JavaScript"}),e.jsx("p",{children:"JavaScript is a commonly used programming language based on prototyping and is also used for web page design. In both ways, the JavaScript program can be executed on the client side (in-browser) and the server side (like in Node.js). This language allows you to build interactive web pages by altering the Document Object Model (DOM), providing events, and sending requests to other servers via APIs."}),e.jsx("p",{children:"JavaScript is a high-level, interpreted programming language primarily used for building dynamic and interactive web applications. It was created by Brendan Eich in 1995 while working for Netscape, and it has since evolved into one of the core technologies of the web, alongside HTML and CSS."}),e.jsx("h2",{children:"Key Characteristics of JavaScript:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Client-Side Scripting: JavaScript enables interactive web pages and can manipulate the DOM, handle API events, and update content without reloading."}),e.jsx("li",{children:"Server-Side Scripting: With Node.js, JavaScript can also be used on the server to handle business logic and database management."}),e.jsx("li",{children:"Prototype-Based Object-Oriented Programming: JavaScript uses prototype-based inheritance instead of classical inheritance."}),e.jsx("li",{children:"Dynamic and Loosely Typed: Variables can change types, allowing flexibility in coding."}),e.jsx("li",{children:"First-Class Functions: Functions can be assigned to variables, passed as arguments, and returned from other functions."}),e.jsx("li",{children:"Asynchronous and Event Driven: JavaScript handles asynchronous requests using callbacks, promises, or async/await."}),e.jsx("li",{children:"Cross-Browser Functionality: JavaScript can run on all browsers and platforms, often using tools like Babel for transpilation."})]}),e.jsx("h2",{children:"Primary Components of JavaScript:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"DOM Modification:"})," JavaScript communicates with the DOM to dynamically change web pages.",e.jsx("pre",{children:e.jsx("code",{children:'document.getElementById("myElement").innerHTML = "Hello, JavaScript!";'})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Event Management:"})," JavaScript detects user actions like clicks and form submissions.",e.jsx("pre",{children:e.jsx("code",{children:`document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"AJAX and Fetch API:"})," JavaScript makes asynchronous requests without reloading the page.",e.jsx("pre",{children:e.jsx("code",{children:`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Asynchronous Operations:"})," JavaScript can handle background operations, keeping applications responsive.",e.jsx("pre",{children:e.jsx("code",{children:`async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Object-Oriented Programming (OOP):"})," JavaScript supports OOP through objects and prototypes.",e.jsx("pre",{children:e.jsx("code",{children:`class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  start() {
    console.log(\`\${this.brand} \${this.model} started\`);
  }
}
let myCar = new Car("Toyota", "Corolla");
myCar.start(); // "Toyota Corolla started"`})})]})]}),e.jsx("h2",{children:"Advantages of JavaScript:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Interactivity: Enables dynamic web pages with user interactions and animations."}),e.jsx("li",{children:"Cross-Platform: Works on all modern browsers and devices."}),e.jsx("li",{children:"Rich Ecosystem: Offers numerous libraries and frameworks (e.g., React, Angular, Vue.js)."}),e.jsx("li",{children:"Full-Stack: With Node.js, it can be used on both client and server sides."}),e.jsx("li",{children:"Huge Community: A large developer community provides ample resources and support."})]}),e.jsx("h2",{children:"Limitations of JavaScript:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Browser Dependence: Variability in execution across different browsers."}),e.jsx("li",{children:"Security: Client-side nature can expose applications to cross-site scripting vulnerabilities."}),e.jsx("li",{children:"Single-Threaded: Performance issues can arise for resource-intensive applications."})]}),e.jsx("h2",{children:"Use Cases:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Web Development: Creating dynamic websites with real-time updates."}),e.jsx("li",{children:"Mobile Apps: Frameworks like React Native enable mobile app development."}),e.jsx("li",{children:"Server-Side Programming: Node.js facilitates server-side JavaScript."}),e.jsx("li",{children:"Game Development: Libraries like Phaser.js enable web-based game development."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"JavaScript is a powerful and flexible language that has become indispensable for modern web development. Its ease of use, combined with powerful features for asynchronous programming, object-oriented design, and cross-platform execution, makes it an essential tool for developers. JavaScript is essential for building dynamic web applications, offering capabilities for everything from DOM manipulation and event handling to asynchronous programming and server-side logic. Understanding the basics will help you write more complex scripts as your knowledge expands."})]}),By=()=>e.jsxs("div",{className:"JavaScriptPrimitivesAndObjects",children:[e.jsx("h1",{children:"JavaScript Primitives and Objects"}),e.jsx("p",{children:"JavaScript classifies values into two categories: Primitives and Non-Primitives. These categories merit understanding because they differ in how they are stored, manipulated, and compared."}),e.jsx("h2",{children:"Primitives"}),e.jsx("p",{children:"Primitives are the first level and simplest type of data. They are fixed, meaning their values are constant and cannot be altered once they are created. However, the variable can be reassigned to a different primitive value."}),e.jsx("h3",{children:"Types of Primitive Values"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"String:"})," Characters grouped together.",e.jsx("pre",{children:e.jsx("code",{children:'let str = "Hello";'})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Number:"})," Both whole and decimal numbers.",e.jsx("pre",{children:e.jsx("code",{children:"let num = 42;"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boolean:"})," Logical values, true or false.",e.jsx("pre",{children:e.jsx("code",{children:"let isTrue = true;"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Null:"})," Represents an absent object.",e.jsx("pre",{children:e.jsx("code",{children:"let emptyValue = null;"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Undefined:"})," Declared variable without a value.",e.jsx("pre",{children:e.jsx("code",{children:"let uninitialized;"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"BigInt:"})," Whole numbers larger than the Number type can safely represent.",e.jsx("pre",{children:e.jsx("code",{children:"let bigNum = 123456789123456789123456789n;"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Symbol:"})," A unique identifier.",e.jsx("pre",{children:e.jsx("code",{children:"let uniqueKey = Symbol('id');"})})]})]}),e.jsx("h3",{children:"Characteristics of Primitives"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Immutable: Once created, primitive values cannot be changed."}),e.jsx("li",{children:"Stored by value: Retained in memory as the actual value."}),e.jsx("li",{children:"Copying: A primitive variable can be copied, resulting in independent variables."})]}),e.jsx("h2",{children:"Objects"}),e.jsx("p",{children:"Unlike primitives, objects are more complex data forms in JavaScript. Objects are mutable, meaning their properties can be altered. An object is a collection of one or more key-value pairs."}),e.jsx("h3",{children:"Types of Objects"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Object Literals:"})," The simplest form of JavaScript objects.",e.jsx("pre",{children:e.jsx("code",{children:'let person = { name: "John", age: 30 };'})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arrays:"})," Ordered collections of elements.",e.jsx("pre",{children:e.jsx("code",{children:"let arr = [1, 2, 3, 4];"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Functions:"})," First-class objects that can be assigned to variables.",e.jsx("pre",{children:e.jsx("code",{children:'function greet() { console.log("Hello!"); }'})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Date Objects:"})," For manipulating dates and times.",e.jsx("pre",{children:e.jsx("code",{children:"let today = new Date();"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Custom Objects:"})," Created by specifying methods and properties.",e.jsx("pre",{children:e.jsx("code",{children:"function Car(make, model) { this.make = make; this.model = model; }"})})]})]}),e.jsx("h3",{children:"Characteristics of Objects"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Mutable: Properties can be changed after the object is created."}),e.jsx("li",{children:"Stored by reference: Objects are stored in memory as references."}),e.jsx("li",{children:"Copying: Copying an object variable does not duplicate the object but copies its reference."})]}),e.jsx("h2",{children:"Example with Explanation"}),e.jsx("h3",{children:"Primitives Example"}),e.jsx("pre",{children:e.jsx("code",{children:`let a = 10;
let b = a; // Copying the value of 'a' into 'b'
console.log(a); // Output: 10
console.log(b); // Output: 10
b = 20; // Changing 'b' does not affect 'a'
console.log(a); // Output: 10
console.log(b); // Output: 20`})}),e.jsx("h3",{children:"Objects Example"}),e.jsx("pre",{children:e.jsx("code",{children:`let obj1 = {name: "John"};
let obj2 = obj1; // Copying the reference of obj1 into obj2
console.log(obj1.name); // Output: "John"
console.log(obj2.name); // Output: "John"
obj2.name = "Doe"; // Changing obj2 affects obj1
console.log(obj1.name); // Output: "Doe"
console.log(obj2.name); // Output: "Doe"`})}),e.jsx("h2",{children:"Difference Between Primitives and Objects"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Aspect"}),e.jsx("th",{children:"Primitives"}),e.jsx("th",{children:"Objects"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Data Type"}),e.jsx("td",{children:"String, Number, Boolean, Null, Undefined, BigInt, Symbol"}),e.jsx("td",{children:"Arrays, Functions, Custom objects, Date, Object literals"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Mutability"}),e.jsx("td",{children:"Immutable"}),e.jsx("td",{children:"Mutable"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Storage"}),e.jsx("td",{children:"Stored by value"}),e.jsx("td",{children:"Stored by reference"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Copying"}),e.jsx("td",{children:"Creates an independent copy"}),e.jsx("td",{children:"Copies the reference"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Size"}),e.jsx("td",{children:"Fixed-size"}),e.jsx("td",{children:"Dynamic size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Operations"}),e.jsx("td",{children:"Creates a new value"}),e.jsx("td",{children:"Modifies the same object"})]})]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"In JavaScript, understanding the distinction between primitives and objects is crucial for effective coding."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Primitives are simple, immutable data types that are stored and copied by value."}),e.jsx("li",{children:"Objects are complex and mutable, stored and copied by reference, allowing multiple variables to point to the same object."})]}),e.jsx("p",{children:"In summary, primitives are ideal for representing simple, standalone values, while objects are essential for handling complex data, enabling efficient data manipulation and real-world modeling. Understanding when to use each type and how they behave is key to mastering JavaScript programming."})]}),Fy=()=>e.jsxs("div",{className:"JavaScriptLoops",children:[e.jsx("h1",{children:"Loops in JavaScript"}),e.jsx("p",{children:"In JavaScript, loops can be defined in several ways to carry out repetitive actions. Each type of loop has its own advantages and disadvantages in application."}),e.jsx("h2",{children:"1. for Loop"}),e.jsx("p",{children:"When the number of iterations can be counted prior, a for loop is most preferred. It consists of an initialization, a condition, and an update expression."}),e.jsx("pre",{children:e.jsx("code",{children:`for (initialization; condition; update) {
  // code to be executed
}`})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`for (let i = 0; i < 5; i++) {
  console.log(i);
}`})}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:e.jsx("code",{children:`0
1
2
3
4`})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Initialization: ",e.jsx("code",{children:"let i = 0"})," — Controls the index with a pre-condition of 0."]}),e.jsxs("li",{children:["Condition: ",e.jsx("code",{children:"i < 5"})," — The loop should continue as long as the value of i is less than 5."]}),e.jsxs("li",{children:["Update: ",e.jsx("code",{children:"i++"})," — Increments i by one in each iteration."]}),e.jsxs("li",{children:["Code Block: ",e.jsx("code",{children:"console.log(i)"})," displays the current value of i in the loop."]})]}),e.jsx("h2",{children:"2. while Loop"}),e.jsx("p",{children:"The while loop executes a code block as long as the specified condition is true. It is helpful when the number of iterations cannot be predetermined."}),e.jsx("pre",{children:e.jsx("code",{children:`while (condition) {
  // code to be executed
}`})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`})}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:e.jsx("code",{children:`0
1
2
3
4`})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Condition: ",e.jsx("code",{children:"i < 5"})," — As long as this condition holds, the loop will continue."]}),e.jsxs("li",{children:["Code Block: ",e.jsx("code",{children:"console.log(i)"})," displays the value of i, followed by ",e.jsx("code",{children:"i++"})," to increment i."]})]}),e.jsx("h2",{children:"3. do...while Loop"}),e.jsx("p",{children:"The do…while loop differs from the usual while loop by executing the code block at least once before checking the condition."}),e.jsx("pre",{children:e.jsx("code",{children:`do {
  // code to be executed
} while (condition);`})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`})}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:e.jsx("code",{children:`0
1
2
3
4`})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code Block: Executes once before the condition is checked."}),e.jsxs("li",{children:["Condition: ",e.jsx("code",{children:"i < 5"})," — The loop continues as long as this condition is true."]})]}),e.jsx("h2",{children:"4. for...in Loop"}),e.jsx("p",{children:"The for...in loop is used to iterate over the enumerable properties of an object."}),e.jsx("pre",{children:e.jsx("code",{children:`for (let key in object) {
  // code to be executed
}`})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let person = {
  name: "John",
  age: 30,
  city: "New York"
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}`})}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:e.jsx("code",{children:`name: John
age: 30
city: New York`})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Key: Represents the property name."}),e.jsxs("li",{children:[e.jsx("code",{children:"person[key]"}),": Accesses the property value of the object."]})]}),e.jsx("h2",{children:"5. for...of Loop"}),e.jsx("p",{children:"The for...of loop is used to iterate over iterable objects such as arrays, strings, or collections."}),e.jsx("pre",{children:e.jsx("code",{children:`for (let item of iterable) {
  // code to be executed
}`})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}`})}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:e.jsx("code",{children:`apple
banana
cherry`})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsx("ul",{children:e.jsx("li",{children:"Item: Represents each value in the iterable object."})}),e.jsx("h2",{children:"6. Array.prototype.forEach Method"}),e.jsx("p",{children:"The forEach method is an array method that executes a provided function once for each array element, serving as an alternative to for loops specifically for arrays."}),e.jsx("pre",{children:e.jsx("code",{children:`array.forEach(function(element, index, array) {
  // code to be executed
});`})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});`})}),e.jsx("p",{children:"Output:"}),e.jsx("pre",{children:e.jsx("code",{children:`1
2
3
4
5`})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Element: Each value in the array."}),e.jsx("li",{children:"Function: Executes once for each element in the array."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["In JavaScript, loops are essential for executing repetitive tasks efficiently. The ",e.jsx("code",{children:"for"})," loop is ideal for known iteration counts, while the ",e.jsx("code",{children:"while"})," loop suits scenarios with uncertain iteration counts. The ",e.jsx("code",{children:"do...while"})," loop guarantees at least one execution before checking the condition. For iterating over object properties, use the ",e.jsx("code",{children:"for...in"})," loop, and for iterable collections like arrays, the ",e.jsx("code",{children:"for...of"})," loop is effective. Additionally, the ",e.jsx("code",{children:"forEach"})," method offers a streamlined way to iterate over array elements."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"for Loop:"})," Best when the number of iterations is known."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"while Loop:"})," Useful for loops where the number of iterations is not known in advance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"do...while Loop:"})," Ensures the loop block runs at least once."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for...in Loop:"})," Iterates over enumerable properties of objects."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for...of Loop:"})," Iterates over iterable objects like arrays and strings."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"forEach Method:"})," Provides a concise way to iterate over arrays."]})]}),e.jsx("p",{children:"Understanding these loops allows you to handle various programming tasks efficiently, from simple iterations to complex data processing."})]}),Wy=()=>e.jsxs("div",{className:"NodeInstallation",children:[e.jsx("h1",{children:"Node.js Installation Steps"}),e.jsx("p",{children:"Node.js is a server-side JavaScript environment that is fast and free. It is quite useful as it is based on the V8 engine developed by Chrome and is intended to develop network applications, APIs, and more. This article describes how to install Node.js on various operating systems, check the installation, and create a Node.js development environment."}),e.jsx("h2",{children:"Prerequisites"}),e.jsx("p",{children:"Before proceeding with the installation of Node.js, please check the following system requirements:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Operating System:"})," Windows 7 upwards, macOS 10.12 upwards, or any modern version of Linux."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Administrator Privileges:"})," Required for installing any program onto the system."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Internet:"})," A stable internet connection is required for downloading Node.js."]})]}),e.jsx("h2",{children:"How to Go About the Installation"}),e.jsx("p",{children:"There are a variety of procedures to install Node.js that depend on the user interface operating system. The two basic methods are:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Using the Official Installer downloaded from the official site."}),e.jsx("li",{children:"Using Node Version Manager (nvm)."})]}),e.jsx("h3",{children:"Using the Official Installer Downloaded from the Official Site"}),e.jsx("h4",{children:"Windows"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Download the Installer:"}),e.jsx("ul",{children:e.jsx("li",{children:"Download the Windows Installer (.msi) for the LTS (Long Term Support) version from the official Node.js download page."})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Run the Installer:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Double-click the downloaded .msi file."}),e.jsx("li",{children:"Follow the on-screen instructions:"}),e.jsx("li",{children:"License Agreement: Accept the terms."}),e.jsx("li",{children:"Destination Folder: Choose the installation path or use the default."}),e.jsx("li",{children:"Custom Setup: Select components to install (default options are usually sufficient)."}),e.jsx("li",{children:"Install: Proceed with the installation."})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Complete Installation:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Click Finish once the installation is complete."}),e.jsx("li",{children:"The installer may prompt you to install additional tools (like Chocolatey). You can choose to install them or skip them."})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Verify Installation:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Open Command Prompt or PowerShell."}),e.jsx("li",{children:"Run the following commands:"}),e.jsx("pre",{children:e.jsx("code",{children:`node -v
npm -v`})}),e.jsx("li",{children:"You should see the version numbers of Node.js and npm displayed."})]})]})]}),e.jsx("h4",{children:"macOS"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Download the Installer:"}),e.jsx("ul",{children:e.jsx("li",{children:"Download the macOS Installer (.pkg) for the LTS version from the Node.js official download page."})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Run the Installer:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Open the downloaded .pkg file."}),e.jsx("li",{children:"Follow the installation wizard:"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Verify Installation:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Open Terminal."}),e.jsx("li",{children:"Run the following commands:"}),e.jsx("pre",{children:e.jsx("code",{children:`node -v
npm -v`})}),e.jsx("li",{children:"The terminal should display the versions of Node.js and npm."})]})]})]}),e.jsx("h4",{children:"Linux"}),e.jsx("p",{children:"The installation process varies slightly depending on your Linux distribution. Below are instructions for Debian-based (like Ubuntu) and Red Hat-based (like Fedora) systems."}),e.jsx("h5",{children:"Debian-based (Ubuntu, etc.)"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Update Package Index:",e.jsx("pre",{children:e.jsx("code",{children:"sudo apt update"})})]}),e.jsxs("li",{children:["Install Node.js and npm:",e.jsxs("ul",{children:[e.jsxs("li",{children:["Option 1: Using apt (May not have the latest version)",e.jsx("pre",{children:e.jsx("code",{children:"sudo apt install nodejs npm"})})]}),e.jsxs("li",{children:["Option 2: Using the NodeSource Repository (Recommended for Latest Versions)",e.jsx("pre",{children:e.jsx("code",{children:`curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs`})})]})]})]}),e.jsxs("li",{children:["Verify Installation:",e.jsx("pre",{children:e.jsx("code",{children:`node -v
npm -v`})})]})]}),e.jsx("h5",{children:"Red Hat-based (Fedora, CentOS, etc.)"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Add NodeSource Repository:",e.jsx("pre",{children:e.jsx("code",{children:"curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -"})})]}),e.jsxs("li",{children:["Install Node.js and npm:",e.jsx("pre",{children:e.jsx("code",{children:"sudo dnf install -y nodejs"})})]}),e.jsxs("li",{children:["Verify Installation:",e.jsx("pre",{children:e.jsx("code",{children:`node -v
npm -v`})})]})]}),e.jsx("h3",{children:"Using Node Version Manager (nvm)"}),e.jsx("p",{children:"Node Version Manager (nvm) allows you to install and manage multiple Node.js versions on the same machine."}),e.jsx("h4",{children:"Benefits of Using nvm"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Multiple Versions: Easily install and switch between different Node.js versions."}),e.jsx("li",{children:"Per-Project Versions: Assign specific Node.js versions to individual projects."}),e.jsx("li",{children:"Simplified Upgrades: Upgrade Node.js without affecting other projects."})]}),e.jsx("h4",{children:"Installation Steps (macOS and Linux)"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Install nvm:",e.jsx("pre",{children:e.jsx("code",{children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash"})})]}),e.jsxs("li",{children:["Load nvm into Your Shell Session:",e.jsx("pre",{children:e.jsx("code",{children:`export NVM_DIR="$([ -z "XDG_CONFIG_HOME" ] && printf %s "HOME/.nvm" || printf %s "XDG_CONFIG_HOME/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"`})})]}),e.jsxs("li",{children:["Verify nvm Installation:",e.jsx("pre",{children:e.jsx("code",{children:"nvm --version"})})]}),e.jsxs("li",{children:["Install Node.js Using nvm:",e.jsxs("ul",{children:[e.jsxs("li",{children:["Install the Latest LTS Version:",e.jsx("pre",{children:e.jsx("code",{children:"nvm install --lts"})})]}),e.jsxs("li",{children:["Install a Specific Version (e.g., v18.16.0):",e.jsx("pre",{children:e.jsx("code",{children:"nvm install 18.16.0"})})]})]})]}),e.jsxs("li",{children:["Set a Default Node.js Version:",e.jsx("pre",{children:e.jsx("code",{children:`nvm use 18.16.0
nvm alias default 18.16.0`})})]}),e.jsxs("li",{children:["Verify Node.js and npm Installation:",e.jsx("pre",{children:e.jsx("code",{children:`node -v
npm -v`})})]})]}),e.jsx("h4",{children:"Installation Steps (Windows)"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Download nvm-windows: Visit the nvm-windows GitHub repository and download the latest nvm-setup.zip."}),e.jsxs("li",{children:["Install nvm-windows:",e.jsxs("ul",{children:[e.jsx("li",{children:"Extract the .zip file and run nvm-setup.exe."}),e.jsx("li",{children:"Follow the installation wizard."})]})]}),e.jsxs("li",{children:["Verify nvm Installation:",e.jsx("pre",{children:e.jsx("code",{children:"nvm version"})})]}),e.jsxs("li",{children:["Install Node.js Using nvm-windows:",e.jsxs("ul",{children:[e.jsxs("li",{children:["List Available Node.js Versions:",e.jsx("pre",{children:e.jsx("code",{children:"nvm list available"})})]}),e.jsxs("li",{children:["Install a Specific Version (e.g., v18.16.0):",e.jsx("pre",{children:e.jsx("code",{children:"nvm install 18.16.0"})})]}),e.jsxs("li",{children:["Use a Node.js Version:",e.jsx("pre",{children:e.jsx("code",{children:"nvm use 18.16.0"})})]})]})]}),e.jsxs("li",{children:["Verify Node.js and npm Installation:",e.jsx("pre",{children:e.jsx("code",{children:`node -v
npm -v`})})]})]}),e.jsx("h3",{children:"Verifying the Installation"}),e.jsx("p",{children:"After installing Node.js, it's essential to verify that the installation was successful."}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Check Node.js Version:",e.jsx("pre",{children:e.jsx("code",{children:"node -v"})})]}),e.jsxs("li",{children:["Check npm Version:",e.jsx("pre",{children:e.jsx("code",{children:"npm -v"})})]}),e.jsxs("li",{children:["Run a Simple Node.js Script:",e.jsx("pre",{children:e.jsx("code",{children:'console.log("Node.js is installed correctly!");'})})]})]}),e.jsx("h3",{children:"Post-Installation: Setting Up Your Development Environment"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Install a Code Editor: Visual Studio Code (VS Code)."}),e.jsxs("li",{children:["Initialize a New Node.js Project:",e.jsx("pre",{children:e.jsx("code",{children:`mkdir my-node-app
cd my-node-app
npm init`})})]}),e.jsxs("li",{children:["Install Essential npm Packages:",e.jsx("pre",{children:e.jsx("code",{children:"npm install express"})})]}),e.jsxs("li",{children:["Create a Basic Server in app.js:",e.jsx("pre",{children:e.jsx("code",{children:`const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});
app.listen(port, () => {
  console.log(\`Server is running at http://localhost:\${port}\`);
});`})})]})]}),e.jsx("h3",{children:"Troubleshooting Common Issues"}),e.jsx("p",{children:"1. Node or npm Commands Not Found:"}),e.jsx("p",{children:"2. Permission Issues When Installing Packages Globally:"}),e.jsx("p",{children:"3. Incompatible Node.js Version:"}),e.jsx("p",{children:"4. Network Issues During Installation:"}),e.jsx("h3",{children:"Additional Resources"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Official Node.js Documentation: ",e.jsx("a",{href:"https://nodejs.org/en/docs/",children:"Node.js Docs"})]}),e.jsxs("li",{children:["nvm GitHub Repository: ",e.jsx("a",{href:"https://github.com/nvm-sh/nvm",children:"nvm"})]}),e.jsxs("li",{children:["npm Documentation: ",e.jsx("a",{href:"https://docs.npmjs.com/",children:"npm Docs"})]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Installing Node.js is the first step toward developing powerful server-side applications using JavaScript. This guide provides the necessary steps to get you up and running, whether you choose the straightforward official installer or the flexible Node Version Manager (nvm). After installation, setting up a development environment will pave the way for efficient and effective development."})]}),Jy=()=>e.jsxs("div",{className:"BuiltInObjects",children:[e.jsx("h1",{children:"Built-in Objects in JavaScript"}),e.jsx("p",{children:"JavaScript is equipped with ready-made objects that facilitate various operations without requiring much additional code. These include Date, Math, Number, String, Boolean, Array, Object, etc. Their main goal is to accommodate various data types and operations for the programmer's ease."}),e.jsx("h2",{children:"1. Date Object"}),e.jsx("p",{children:"The Date object in JavaScript allows for date and time operations. It enables getting and setting dates, times, and even performing arithmetic operations with dates."}),e.jsx("pre",{children:e.jsx("code",{children:`let date = new Date(); // Gets current date and time
let specificDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);`})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let currentDate = new Date();
let specificDate = new Date(2024, 8, 18, 14, 30, 0);
console.log(currentDate);
console.log(specificDate);`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Advantages:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Makes date manipulation easier (getting, setting, comparing)."}),e.jsx("li",{children:"No need to worry about time zones."})]}),e.jsx("strong",{children:"Disadvantages:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Date formatting can be challenging, often requiring libraries like Moment.js."}),e.jsx("li",{children:"Management of time zones is limited."})]})]}),e.jsx("h2",{children:"2. Math Object"}),e.jsx("p",{children:"The Math object provides functions for performing basic mathematical operations, such as rounding numbers, finding max or min values, generating random numbers, etc."}),e.jsx("pre",{children:e.jsx("code",{children:"Math.method();"})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let randomNum = Math.random();
let rounded = Math.round(7.5);
let maxNum = Math.max(3, 6, 1);
console.log(randomNum);
console.log(rounded);
console.log(maxNum);`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Advantages:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Provides easy-to-use mathematical functions."}),e.jsx("li",{children:"Built-in constants like Math.PI simplify calculations."})]}),e.jsx("strong",{children:"Disadvantages:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"No support for complex calculations."}),e.jsx("li",{children:"External libraries may be needed for advanced math."})]})]}),e.jsx("h2",{children:"3. Number Object"}),e.jsx("p",{children:"The Number object is used to work with numbers. It provides methods to test number properties and to parse strings into numbers."}),e.jsx("pre",{children:e.jsx("code",{children:"Number.method();"})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let num = 123.456;
let isInteger = Number.isInteger(num);
let parsedInt = Number.parseInt("100.99");
let fixedNum = num.toFixed(2);
console.log(isInteger);
console.log(parsedInt);
console.log(fixedNum);`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Advantages:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Helps in validating and formatting numbers."}),e.jsx("li",{children:"Supports safe operations on finite numbers."})]}),e.jsx("strong",{children:"Disadvantages:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Doesn’t support extreme precision for large numbers."}),e.jsx("li",{children:"External libraries may be needed for complex manipulations."})]})]}),e.jsx("h2",{children:"4. Boolean Object"}),e.jsx("p",{children:"The Boolean object represents two logical values: true or false. It can cast other types of data into their boolean forms."}),e.jsx("pre",{children:e.jsx("code",{children:"let boolValue = Boolean(expression);"})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let isTrue = Boolean(1);
let isFalse = Boolean(0);
let boolFromString = Boolean("");
console.log(isTrue);
console.log(isFalse);
console.log(boolFromString);`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Advantages:"}),e.jsx("ul",{children:e.jsx("li",{children:"Easy handling of truthy and falsy values in conditionals."})}),e.jsx("strong",{children:"Disadvantages:"}),e.jsx("ul",{children:e.jsx("li",{children:"Can be confusing when evaluating non-boolean values."})})]}),e.jsx("h2",{children:"5. String Object"}),e.jsx("p",{children:"The String object is used for text computation and has methods for searching, replacing, cutting, joining, and formatting text."}),e.jsx("pre",{children:e.jsx("code",{children:'let str = "example";'})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let sentence = "Hello, JavaScript!";
let upper = sentence.toUpperCase();
let subStr = sentence.substring(7, 17);
let replaced = sentence.replace("JavaScript", "World");
console.log(upper);
console.log(subStr);
console.log(replaced);`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Advantages:"}),e.jsx("ul",{children:e.jsx("li",{children:"Multiple options for string manipulation."})}),e.jsx("strong",{children:"Disadvantages:"}),e.jsx("ul",{children:e.jsx("li",{children:"Modification leads to new strings since they are immutable."})})]}),e.jsx("h2",{children:"6. Array Object"}),e.jsx("p",{children:"An Array object stores a collection of values and is dynamic in nature, allowing for various data types and providing many functions to modify data."}),e.jsx("pre",{children:e.jsx("code",{children:"let arr = [element1, element2, ...];"})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`let numbers = [1, 2, 3, 4];
let length = numbers.length;
let reversed = numbers.reverse();
console.log(length);
console.log(reversed);`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Advantages:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Easy to collect and change information."}),e.jsx("li",{children:"Includes useful methods like map(), filter(), and reduce()."})]}),e.jsx("strong",{children:"Disadvantages:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Large arrays may lead to performance issues."}),e.jsx("li",{children:"No direct method to handle multidimensional arrays."})]})]}),e.jsx("h2",{children:"Summary Table"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Object"}),e.jsx("th",{children:"Purpose"}),e.jsx("th",{children:"Example"}),e.jsx("th",{children:"Advantages"}),e.jsx("th",{children:"Disadvantages"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Date"}),e.jsx("td",{children:"Working with dates and times"}),e.jsx("td",{children:e.jsx("code",{children:"new Date()"})}),e.jsx("td",{children:"Simplifies date and time handling"}),e.jsx("td",{children:"Date formatting is complex"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Math"}),e.jsx("td",{children:"Provides mathematical functions"}),e.jsx("td",{children:e.jsx("code",{children:"Math.round(7.5)"})}),e.jsx("td",{children:"Built-in math functions"}),e.jsx("td",{children:"Limited to basic math functions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Number"}),e.jsx("td",{children:"Handling numbers, formatting, and parsing"}),e.jsx("td",{children:e.jsx("code",{children:"Number.isInteger(5)"})}),e.jsx("td",{children:"Validates and formats numbers"}),e.jsx("td",{children:"Doesn’t handle large numbers well"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Boolean"}),e.jsx("td",{children:"Represents true or false values"}),e.jsx("td",{children:e.jsx("code",{children:"Boolean(1)"})}),e.jsx("td",{children:"Useful for conditional logic"}),e.jsx("td",{children:"Confusing truthy/falsy evaluation"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"String"}),e.jsx("td",{children:"Manipulating and formatting text"}),e.jsx("td",{children:e.jsx("code",{children:"toUpperCase()"})}),e.jsx("td",{children:"Versatile methods for string manipulation"}),e.jsx("td",{children:"Strings are immutable"})]})]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["JavaScript's built-in objects, such as ",e.jsx("code",{children:"Date"}),", ",e.jsx("code",{children:"Math"}),", ",e.jsx("code",{children:"Number"}),", ",e.jsx("code",{children:"Boolean"}),", ",e.jsx("code",{children:"String"}),", and ",e.jsx("code",{children:"Array"}),", provide essential functionality for handling various data types and operations. These objects simplify complex tasks and offer powerful methods, making coding more efficient. Despite some limitations, they are indispensable for effective programming."]})]}),Uy=()=>e.jsxs("div",{className:"ObjectsInOOP",children:[e.jsx("h1",{children:"Objects in OOP"}),e.jsx("p",{children:"In programming languages that use object-oriented programming (OOP), an object is an instance of a class, similar to a physical (real-world) object that contains attributes (data/properties) and behaviors (methods/functions). JavaScript treats objects as an OOP language, enabling better relationships between code, functions, and data objects."}),e.jsx("h2",{children:"Objects in JavaScript"}),e.jsx("p",{children:"An object refers to a collection of properties, where each property is defined by a key-value pair. Object methods are functions bound to an object, allowing manipulation of its attributes."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Properties:"})," Characteristics of the object (e.g., Name, Age)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Methods:"})," Blocks of code that act on an object’s attributes (e.g., getName(), calculateAge())."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Encapsulation:"})," Objects bundle data and methods that modify that data together."]})]}),e.jsx("h2",{children:"Key Concepts"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Encapsulation:"})," Objects contain data along with methods that operate on that data."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reusability:"})," Objects can be reused in other parts of the codebase."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Abstraction:"})," Users can utilize objects without needing to understand their implementation."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inheritance:"})," Properties and methods can be inherited from other objects (prototypal inheritance)."]})]}),e.jsx("h2",{children:"Advantages of OOP Objects"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Modularity: Objects simplify complex systems into manageable units."}),e.jsx("li",{children:"Code Reusability: Objects can be reused across the codebase."}),e.jsx("li",{children:"Encapsulation: Objects encapsulate data and methods for cleaner code."}),e.jsx("li",{children:"Abstraction: Implementation details are hidden from users."}),e.jsx("li",{children:"Inheritance: Create more specific objects without rewriting code."})]}),e.jsx("h2",{children:"Disadvantages of Objects"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Performance Overhead: Accessing properties in deep hierarchies can incur overhead."}),e.jsx("li",{children:"Memory Usage: Creating too many objects increases memory consumption."}),e.jsx("li",{children:"Complexity in Large Applications: Managing numerous objects can become problematic."}),e.jsx("li",{children:"Prototypal Inheritance Complexity: Understanding prototypal inheritance may be challenging."})]}),e.jsx("h2",{children:"Implementation of Objects in JavaScript"}),e.jsx("h3",{children:"A. Object Literals"}),e.jsx("p",{children:"Constructing objects using the syntax of object literals:"}),e.jsx("pre",{children:e.jsx("code",{children:`const objectName = {
  property1: value1,
  property2: value2,
  method1: function() {
    // method logic
  }
};`})}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2021,
  getDetails: function() {
    return \`\${this.brand} \${this.model}, Year: \${this.year}\`;
  }
};

console.log(car.brand); // Output: Toyota
console.log(car.getDetails()); // Output: Toyota Corolla, Year: 2021`})}),e.jsx("h3",{children:"B. Constructor Functions for Creating Objects"}),e.jsx("p",{children:"Using a constructor function to create objects:"}),e.jsx("pre",{children:e.jsx("code",{children:`function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getDetails = function() {
    return \`\${this.name} is \${this.age} years old.\`;
  };
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.getDetails()); // Output: Alice is 30 years old.
console.log(person2.getDetails()); // Output: Bob is 25 years old.`})}),e.jsx("h3",{children:"C. Prototypes and Prototypal Inheritance"}),e.jsx("p",{children:"Example of prototypical inheritance:"}),e.jsx("pre",{children:e.jsx("code",{children:`function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return \`\${this.name} makes a sound.\`;
};

const dog = new Animal('Buddy');
console.log(dog.speak()); // Output: Buddy makes a sound.`})}),e.jsx("h3",{children:"D. ES6 Classes for Object Creation"}),e.jsx("p",{children:"Using ES6 class syntax:"}),e.jsx("pre",{children:e.jsx("code",{children:`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return \`\${this.name} is \${this.age} years old.\`;
  }
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.getDetails()); // Output: Alice is 30 years old.
console.log(person2.getDetails()); // Output: Bob is 25 years old.`})}),e.jsx("h2",{children:"Use Cases of Objects in JavaScript"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Structured Code: Useful in complex applications such as e-commerce, social networks, and online games."}),e.jsx("li",{children:"API Response Manipulation: Objects are used to encode API responses in JSON format."}),e.jsx("li",{children:"Component-Based UI Libraries: JavaScript objects are crucial in libraries like React."}),e.jsx("li",{children:"Data Encapsulation: Objects represent specific domains and their attributes."})]}),e.jsx("h2",{children:"Real World Example: Object-oriented Design"}),e.jsx("p",{children:"Implementing a Library Management System:"}),e.jsx("pre",{children:e.jsx("code",{children:`class Book {
  constructor(title, author, available) {
    this.title = title;
    this.author = author;
    this.available = available;
  }

  borrowBook() {
    if (this.available) {
      this.available = false;
      return \`\${this.title} has been borrowed.\`;
    } else {
      return \`\${this.title} is currently unavailable.\`;
    }
  }

  returnBook() {
    this.available = true;
    return \`\${this.title} has been returned.\`;
  }
}

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', true);
const book2 = new Book('1984', 'George Orwell', false);

console.log(book1.borrowBook()); // Output: The Great Gatsby has been borrowed.
console.log(book2.borrowBook()); // Output: 1984 is currently unavailable.
console.log(book1.returnBook()); // Output: The Great Gatsby has been returned.`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"In conclusion, object-oriented programming (OOP) in JavaScript provides a robust framework for building scalable and maintainable applications. By utilizing objects, developers can encapsulate data and functionality, promoting code reuse and modular design. JavaScript's prototypal inheritance allows for flexible object creation and extension, enabling developers to create complex hierarchies while maintaining performance. The use of ES6 classes further simplifies the syntax and enhances readability, making OOP concepts more accessible. Additionally, features like encapsulation and polymorphism foster better organization of code, facilitating collaboration among teams. Overall, mastering OOP in JavaScript not only enhances coding efficiency but also aligns with modern development practices, allowing for the creation of dynamic and interactive web applications."})]}),zy=()=>e.jsxs("div",{className:"OperatorsAndExpressions",children:[e.jsx("h1",{children:"Operators and Expressions in JavaScript"}),e.jsx("p",{children:"In JavaScript, operators are symbols or keywords used to perform operations on values (operands). Expressions are any valid combination of literals, variables, operators, and functions that can be evaluated to produce a value."}),e.jsx("h2",{children:"1. Arithmetic Operators"}),e.jsx("p",{children:"Arithmetic operators are used to perform basic mathematical operations."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Sign"}),e.jsx("th",{children:"Name"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"+"}),e.jsx("td",{children:"Addition"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"-"}),e.jsx("td",{children:"Subtraction"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"*"}),e.jsx("td",{children:"Multiplication"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/"}),e.jsx("td",{children:"Division"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"%"}),e.jsx("td",{children:"Modulus"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"**"}),e.jsx("td",{children:"Exponentiation"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"++"}),e.jsx("td",{children:"Increment"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"--"}),e.jsx("td",{children:"Decrement"})]})]})]}),e.jsx("pre",{children:e.jsx("code",{children:`let a = 10;
let b = 3;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus
let power = a ** b; // Exponentiation`})}),e.jsx("p",{children:"Example Output:"}),e.jsx("pre",{children:e.jsx("code",{children:`console.log("Sum: " + (a + b)); // Output: 13
console.log("Difference: " + (a - b)); // Output: 7
console.log("Product: " + (a * b)); // Output: 30
console.log("Quotient: " + (a / b)); // Output: 3.3333333333333335
console.log("Remainder: " + (a % b)); // Output: 1
console.log("Power: " + (a ** b)); // Output: 1000`})}),e.jsx("h2",{children:"2. Assignment Operators"}),e.jsx("p",{children:"Assignment operators are used to assign values to variables."}),e.jsx("pre",{children:e.jsx("code",{children:`let a = 10;
a += 5; // Equivalent to: a = a + 5;
a -= 3; // Equivalent to: a = a - 3;`})}),e.jsx("p",{children:"Example Output:"}),e.jsx("pre",{children:e.jsx("code",{children:`let a = 10;
a += 5; // a = 10 + 5
console.log("a after += 5: " + a); // Output: 15
a *= 2; // a = 15 * 2
console.log("a after *= 2: " + a); // Output: 30
a %= 7; // a = 30 % 7
console.log("a after %= 7: " + a); // Output: 2`})}),e.jsx("h2",{children:"3. Comparison Operators"}),e.jsx("p",{children:"Comparison operators are used to compare two values and return a Boolean (true or false)."}),e.jsx("pre",{children:e.jsx("code",{children:`let x = 10;
let y = 5;
let isEqual = x == y; // Equal to
let isStrictEqual = x === y; // Strict equal to`})}),e.jsx("p",{children:"Example Output:"}),e.jsx("pre",{children:e.jsx("code",{children:`console.log(x == y); // Output: false
console.log(x === y); // Output: false
console.log(x > y); // Output: true
console.log(x <= 10); // Output: true
console.log(x != y); // Output: true`})}),e.jsx("h2",{children:"4. Logical Operators"}),e.jsx("p",{children:"Logical operators are used to combine multiple conditions."}),e.jsx("pre",{children:e.jsx("code",{children:`let a = true;
let b = false;
let result1 = a && b; // Logical AND
let result2 = a || b; // Logical OR
let result3 = !a; // Logical NOT`})}),e.jsx("p",{children:"Example Output:"}),e.jsx("pre",{children:e.jsx("code",{children:`console.log(a && b); // Output: false
console.log(a || b); // Output: true
console.log(!a); // Output: false`})}),e.jsx("h2",{children:"5. String Operators"}),e.jsx("p",{children:"String operators are used to manipulate and concatenate strings."}),e.jsx("pre",{children:e.jsx("code",{children:`let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;`})}),e.jsx("p",{children:"Example Output:"}),e.jsx("pre",{children:e.jsx("code",{children:'console.log(fullName); // Output: "John Doe"'})}),e.jsx("h2",{children:"6. Conditional (Ternary) Operator"}),e.jsx("p",{children:"The ternary operator is a shorthand for if-else conditions."}),e.jsx("pre",{children:e.jsx("code",{children:`let age = 18;
let canVote = age >= 18 ? "Yes" : "No";`})}),e.jsx("p",{children:"Example Output:"}),e.jsx("pre",{children:e.jsx("code",{children:'console.log(canVote); // Output: "Yes"'})}),e.jsx("h2",{children:"7. Type Operators"}),e.jsx("p",{children:"Type operators are used to determine or change the type of a variable."}),e.jsx("pre",{children:e.jsx("code",{children:`let x = 42;
console.log(typeof x); // Output: "number"`})}),e.jsx("p",{children:"Example Output:"}),e.jsx("pre",{children:e.jsx("code",{children:`let arr = [1, 2, 3];
console.log(arr instanceof Array); // Output: true`})}),e.jsx("h2",{children:"8. Bitwise Operators"}),e.jsx("p",{children:"Bitwise operators are used to perform bit-level operations on integers."}),e.jsx("pre",{children:e.jsx("code",{children:`let a = 5; // 101 in binary
let b = 3; // 011 in binary
let result = a & b; // AND`})}),e.jsx("h2",{children:"Expressions in JavaScript"}),e.jsx("p",{children:"In JavaScript, an expression is any valid unit of code that resolves to a value. This includes values (like numbers or strings), variables, operators, and function calls. Expressions are the building blocks of JavaScript code because they produce values, which can be assigned to variables, passed to functions, or used in various other ways."}),e.jsx("h2",{children:"Types of Expressions in JavaScript"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Primary Expressions:"})," Literal values and constants."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arithmetic Expressions:"})," Perform calculations using arithmetic operators."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"String Expressions:"})," Use concatenation to create strings."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Logical Expressions:"})," Evaluate multiple conditions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Comparison Expressions:"})," Compare values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Function Expressions:"})," Define reusable functions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Conditional (Ternary) Expressions:"})," Provide shorthand for conditional logic."]})]}),e.jsx("h3",{children:"1. Primary Expressions"}),e.jsx("pre",{children:e.jsx("code",{children:`42;
"Hello, World!";
true;
null;
undefined;`})}),e.jsx("h3",{children:"2. Arithmetic Expressions"}),e.jsx("pre",{children:e.jsx("code",{children:`let result = (10 + 5) * 2 - 3 / 1;
console.log(result); // Output: 29`})}),e.jsx("h3",{children:"3. String Expressions"}),e.jsx("pre",{children:e.jsx("code",{children:`let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"`})}),e.jsx("h3",{children:"4. Logical Expressions"}),e.jsx("pre",{children:e.jsx("code",{children:`let a = true;
let b = false;
let result = a && b;
console.log(result); // Output: false`})}),e.jsx("h3",{children:"5. Comparison Expressions"}),e.jsx("pre",{children:e.jsx("code",{children:`let x = 10;
let y = 5;
let comparison = x > y;
console.log(comparison); // Output: true`})}),e.jsx("h3",{children:"6. Function Expressions"}),e.jsx("pre",{children:e.jsx("code",{children:`let greet = function(name) {
  return "Hello, " + name + "!";
};
console.log(greet("John")); // Output: "Hello, John!"`})}),e.jsx("h3",{children:"7. Conditional (Ternary) Expressions"}),e.jsx("pre",{children:e.jsx("code",{children:`let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Operators in JavaScript are vital for manipulating data and controlling logic within programs. They include arithmetic operators for calculations, assignment operators for combining assignments with arithmetic, and comparison operators for evaluating relationships between values. Logical operators handle complex conditions, while string operators manage text manipulation. The conditional (ternary) operator provides a compact way to implement conditional logic, and type operators help with type checking. Bitwise operators perform operations on binary data, and comma operators allow for evaluating multiple expressions. Mastering these operators is essential for creating dynamic and efficient JavaScript applications."}),e.jsx("p",{children:"Expressions in JavaScript are fundamental components that evaluate to produce values. They encompass a range of types, including primary expressions (literals and constants), arithmetic and string expressions for calculations and text manipulation, and logical and comparison expressions for decision-making and value comparison. Function expressions define reusable code blocks, while conditional (ternary) expressions offer concise conditional logic. Object and array expressions manage complex data structures, and assignment expressions combine value assignment with evaluation. Mastering these expressions enables you to build dynamic, efficient, and effective JavaScript applications by leveraging the language's versatile and powerful features."})]}),_y=()=>e.jsxs("div",{className:"Polymorphism",children:[e.jsx("h1",{children:"Polymorphism in OOP"}),e.jsx("p",{children:"Polymorphism in OOP means different objects respond to the same method in different manners. Simplifying these terms, polymorphism enables a single interface to work with many different forms (data types, classes, or functions). The term polymorphism means having many forms and hence polymorphism in OOP facilitates a class where a particular method can be implemented on multiple objects, where each of the objects behaves differently."}),e.jsx("h2",{children:"Kinds of Polymorphism"}),e.jsx("h3",{children:"1. Compile-time Polymorphism or Static Polymorphism"}),e.jsx("p",{children:"This aspect of object-oriented programming determines the parameter values during program compilation. Most of the time, it is achieved via method overloading (same name of the method but with different specifications of arguments). However, JavaScript does not allow such method overloading."}),e.jsx("h3",{children:"2. Run time Polymorphism or Dynamic Polymorphism"}),e.jsx("p",{children:"In this case, behavior is settled at run time. It is most often realized by employing overriding methods (the reimplementation of the base class function in the descendant class)."}),e.jsx("h2",{children:"Advantages of Polymorphism"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code Reusability: Encourages code accessibility and flexibility."}),e.jsx("li",{children:"Extensibility: Easier to add features without tampering with the superclass."}),e.jsx("li",{children:"Maintainability: Reduces the amount of code and simplifies control."}),e.jsx("li",{children:"Decoupling: Reduces dependency of classes on each other."})]}),e.jsx("h2",{children:"Disadvantages of Polymorphism"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Performance Overhead: May have performance overhead in determining the appropriate method at runtime."}),e.jsx("li",{children:"Complexity: Can lead to confusion about which method implementation is invoked."}),e.jsx("li",{children:"Debugging Difficulty: Errors are likely at runtime, making it hard to identify issues."})]}),e.jsx("h2",{children:"Implementation of Polymorphism"}),e.jsx("h3",{children:"A. Method Overriding (Runtime Polymorphism)"}),e.jsx("pre",{children:e.jsx("code",{children:`class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    return \`\${this.name} makes a sound.\`;
  }
}
class Dog extends Animal {
  sound() {
    return \`\${this.name} barks.\`;
  }
}
class Cat extends Animal {
  sound() {
    return \`\${this.name} meows.\`;
  }
}
const myDog = new Dog('Buddy');
const myCat = new Cat('Whiskers');
console.log(myDog.sound()); // Output: Buddy barks.
console.log(myCat.sound()); // Output: Whiskers meows.`})}),e.jsx("h3",{children:"B. Simulating Method Overloading (Compile-time Polymorphism)"}),e.jsx("pre",{children:e.jsx("code",{children:`class Calculator {
  calculate(a, b, operator = '+') {
    if (arguments.length === 2) {
      return a + b; // Default behavior: addition
    } else if (arguments.length === 3) {
      switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 'Invalid operator';
      }
    }
  }
}
const calc = new Calculator();
console.log(calc.calculate(5, 3)); // Output: 8
console.log(calc.calculate(5, 3, '-')); // Output: 2`})}),e.jsx("h2",{children:"Use Cases of Polymorphism in JavaScript"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"User Interface Components:"})," A component class defines common behavior, with subclasses implementing their render methods."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Data Processing System:"})," Different types of data can be processed with a common method that behaves differently for each data type."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Payment Gateway System:"})," Different payment classes redefine the processPayment method according to their specific payment method."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shape Rendering in Graphics:"})," Different shapes extend a base class and implement their draw methods to project themselves."]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Polymorphism in JavaScript allows for a more generalized method implementation, where the effect differs based on the object it is called upon. It enhances code design by encouraging method overriding and simulating method overloading, making it easier to write flexible, reusable, and maintainable code. By leveraging polymorphism, developers can design systems where new functionality can be easily added without modifying existing code, thereby adhering to the Open-Closed Principle in software design."}),e.jsx("h2",{children:"Key Points"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Polymorphism defines the ability to implement a single method in different forms depending on the type of object."}),e.jsx("li",{children:"Method Overriding (runtime polymorphism) allows child classes to provide specific implementations of a method inherited from a parent class."}),e.jsx("li",{children:"Method Overloading is not natively supported in JavaScript but can be simulated by handling arguments dynamically within a method."}),e.jsx("li",{children:"Advantages include code reusability, flexibility, and extensibility, while disadvantages include potential performance overhead and increased complexity."})]})]}),qy=()=>e.jsxs("div",{className:"StaticMethods",children:[e.jsx("h1",{children:"Static Methods in OOP"}),e.jsx("h2",{children:"Definition of Static Methods in OOP"}),e.jsxs("p",{children:["In Object-Oriented Programming (OOP), a static method is a type of method that is associated with the class itself, instead of being part of the instances of the class. This means that a static method does not require an instance of the class to be created; it can be called directly on the class itself. In JavaScript, static methods are defined using the ",e.jsx("code",{children:"static"})," keyword."]}),e.jsx("h2",{children:"Explanation of Static Methods in JavaScript"}),e.jsxs("p",{children:["A static method is invoked on a class rather than on an object instance. Static methods do not have access to instance variables (defined using ",e.jsx("code",{children:"this"}),") since they are purely class methods, not instance methods. They can be efficiently applied to utility methods where it is not necessary to create an instance of the class."]}),e.jsx("h2",{children:"Key Characteristics"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"No Access to Instance Data:"})," Static methods cannot access or alter properties that apply to instances of the class."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Over Class Level Usage:"})," They work at the class level and are used for housekeeping functions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessed via the Class Name:"})," You invoke a static method by the name of the class, not the name of its instance."]})]}),e.jsx("h2",{children:"Advantages of Static Methods"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Utility Functions: Ideal for utility or helper functions."}),e.jsx("li",{children:"No Creation of Object: Static methods are called without creating an instance of the class."}),e.jsx("li",{children:"Functionalities Of Class Level: They encapsulate functions logically related to a class."}),e.jsx("li",{children:"Reusable: Static methods can be reused across the application."})]}),e.jsx("h2",{children:"Disadvantages of Static Methods"}),e.jsxs("ul",{children:[e.jsx("li",{children:"No Access to Instance Data: They cannot access instance properties."}),e.jsx("li",{children:"No Extensibility: It can be tricky to modify behaviors in subclasses."}),e.jsx("li",{children:"May Lead to Tight Coupling: Too many static methods can create interdependencies."}),e.jsx("li",{children:"Global-Like Behavior: They behave like global functions since they do not require class instances."})]}),e.jsx("h2",{children:"Implementation of Static Methods in JavaScript"}),e.jsx("h3",{children:"A. Static Methods Definition in ES6 Class"}),e.jsx("pre",{children:e.jsx("code",{children:`class MathHelper {
  static add(a, b) {
    return a + b;
  }
  static square(n) {
    return n * n;
  }
}
console.log(MathHelper.add(5, 3)); // Output: 8
console.log(MathHelper.square(4)); // Output: 16`})}),e.jsx("h3",{children:"B. Static Methods and Inheritance"}),e.jsx("pre",{children:e.jsx("code",{children:`class Animal {
  static makeSound() {
    return 'Animals make sounds.';
  }
}
class Dog extends Animal {
  static bark() {
    return 'Dogs bark.';
  }
}
console.log(Animal.makeSound()); // Output: Animals make sounds.
console.log(Dog.makeSound()); // Output: Animals make sounds.
console.log(Dog.bark()); // Output: Dogs bark.`})}),e.jsx("h2",{children:"Static Methods and Their Uses in JavaScript"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Utility and Helper Methods: Suitable for helper functions."}),e.jsx("li",{children:"Factory Methods: Used in creating objects dynamically."}),e.jsx("li",{children:"Validation: Useful for validation exercises."}),e.jsx("li",{children:"Service Classes: Commonly used in utility service classes."})]}),e.jsx("h2",{children:"Practical Example: User Authentication System"}),e.jsx("pre",{children:e.jsx("code",{children:`class UserManager {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  static isValidEmail(email) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
  }
  getUserDetails() {
    return \`User: \${this.username}, Email: \${this.email}\`;
  }
}
const user = new UserManager('john_doe', 'john@example.com');
console.log(UserManager.isValidEmail(user.email)); // Output: true
console.log(user.getUserDetails()); // Output: User: john_doe, Email: john@example.com`})}),e.jsx("h2",{children:"Static Properties"}),e.jsx("pre",{children:e.jsx("code",{children:`class Counter {
  static count = 0;
  constructor() {
    Counter.count++;
  }
  static getCount() {
    return Counter.count;
  }
}
const counter1 = new Counter();
const counter2 = new Counter();
console.log(Counter.getCount()); // Output: 2`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Static methods in JavaScript are useful for defining utility functions and class-level functionalities that do not require instance data. They enhance the modularity of code and encapsulate functions logically related to a class, facilitating a more organized and efficient code structure."}),e.jsx("h2",{children:"Key Points"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Static methods belong to the class itself and cannot access instance properties."}),e.jsx("li",{children:"They are ideal for utility functions, data validation, and class-level functionality."}),e.jsx("li",{children:"Static methods can be inherited by child classes, making them flexible for shared behaviors."}),e.jsx("li",{children:"Proper use of static methods helps in structuring code that is clean and maintainable."})]})]}),Hy=()=>e.jsxs("div",{className:"StringsInJavaScript",children:[e.jsx("h1",{children:"Strings in JavaScript"}),e.jsx("h2",{children:"String Creation"}),e.jsx("h3",{children:"1. String Literals"}),e.jsxs("p",{children:["You can create a string using single quotes (",e.jsx("code",{children:"'"}),"), double quotes (",e.jsx("code",{children:'"'}),"), or backticks (",e.jsx("code",{children:"`"}),")."]}),e.jsx("pre",{children:e.jsx("code",{children:`let singleQuoteString = 'Hello, world!';
let doubleQuoteString = "Hello, world!";
let templateString = \`Hello, world!\`;`})}),e.jsx("h3",{children:"2. String Constructor"}),e.jsx("p",{children:"You can also create a string using the String constructor, though it's less common:"}),e.jsx("pre",{children:e.jsx("code",{children:'let stringObject = new String("Hello, world!");'})}),e.jsx("h2",{children:"String Properties and Methods"}),e.jsx("p",{children:"Strings in JavaScript are immutable, meaning they cannot be changed once created. Instead, string methods return new strings."}),e.jsx("h3",{children:"Basic String Methods"}),e.jsx("h4",{children:"1. (.length)"}),e.jsx("pre",{children:e.jsx("code",{children:`let text = "JavaScript";
console.log(text.length); // Output: 10`})}),e.jsx("p",{children:"Returns the length of the string."}),e.jsx("h4",{children:"2. (.charAt(index))"}),e.jsx("pre",{children:e.jsx("code",{children:'console.log(text.charAt(4)); // Output: "S"'})}),e.jsx("p",{children:"Returns the character at a specified index."}),e.jsx("h4",{children:"3. (.concat(string2, string3, ...))"}),e.jsx("pre",{children:e.jsx("code",{children:`let part1 = "Hello, ";
let part2 = "world!";
let message = part1.concat(part2);
console.log(message); // Output: "Hello, world!"`})}),e.jsx("p",{children:"Combines multiple strings into one."}),e.jsx("h4",{children:"4. (.indexOf(searchValue, startIndex))"}),e.jsx("pre",{children:e.jsx("code",{children:`let text = "JavaScript is fun";
console.log(text.indexOf("is")); // Output: 11`})}),e.jsx("p",{children:"Returns the index of the first occurrence of a specified value."}),e.jsx("h4",{children:"5. (.slice(start, end))"}),e.jsx("pre",{children:e.jsx("code",{children:'console.log(text.slice(4, 10)); // Output: "Script"'})}),e.jsx("p",{children:"Extracts a part of a string and returns it as a new string."}),e.jsx("h4",{children:"6. (.split(separator))"}),e.jsx("pre",{children:e.jsx("code",{children:`let text = "apple,banana,cherry";
let fruits = text.split(",");
console.log(fruits); // Output: ["apple", "banana", "cherry"]`})}),e.jsx("p",{children:"Splits a string into an array of substrings based on a separator."}),e.jsx("h4",{children:"7. (.toLowerCase() and .toUpperCase())"}),e.jsx("pre",{children:e.jsx("code",{children:`console.log(text.toLowerCase()); // Output: "javascript"
console.log(text.toUpperCase()); // Output: "JAVASCRIPT"`})}),e.jsx("p",{children:"Convert a string to lowercase or uppercase."}),e.jsx("h4",{children:"8. (.trim())"}),e.jsx("pre",{children:e.jsx("code",{children:`let text = " Hello, world! ";
console.log(text.trim()); // Output: "Hello, world!"`})}),e.jsx("p",{children:"Removes whitespace from both ends of a string."}),e.jsx("h2",{children:"Template Literals"}),e.jsx("p",{children:"Template literals (enclosed in backticks) provide a more flexible way to handle strings, allowing for multi-line strings and embedded expressions."}),e.jsx("pre",{children:e.jsx("code",{children:'let name = "Alice";\nlet message = `Hello, ${name}! Welcome to JavaScript.`;\nconsole.log(message); // Output: "Hello, Alice! Welcome to JavaScript."'})}),e.jsx("h2",{children:"String Immutability"}),e.jsx("p",{children:"Strings in JavaScript are immutable, meaning that once a string is created, it cannot be modified."}),e.jsx("pre",{children:e.jsx("code",{children:`let original = "JavaScript";
let modified = original.replace("Script", "Script Language");
console.log(original); // Output: "JavaScript"
console.log(modified); // Output: "JavaScript Language"`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Strings in JavaScript are essential for handling text, offering a variety of methods to manipulate and analyze content. They can be created using literals or the String constructor, and are immutable, meaning operations on strings return new strings rather than modifying the original. Key methods include .length, .charAt(), .concat(), .indexOf(), .slice(), .split(), .toLowerCase(), .toUpperCase(), and .trim(). Template literals, using backticks, provide a powerful way to embed expressions and handle multi-line strings. Mastery of these string operations enhances text processing and dynamic content generation, making JavaScript programming more effective and flexible."})]}),Vy=()=>e.jsxs("div",{className:"VariablesInJavaScript",children:[e.jsx("h1",{children:"Variables in JavaScript"}),e.jsx("p",{children:"Variables in JavaScript aid in holding a value that can be intentionally fetched and worked on in the inside code. A variable is a value that can be changed at runtime, which means it’s not a constant. JavaScript allows the creation of variables in different ways, and knowing how to do so improves the cleanliness and efficiency of your code."}),e.jsx("h2",{children:"Variable Declarations"}),e.jsxs("p",{children:["In JavaScript, three keywords are used to declare variables: ",e.jsx("code",{children:"var"}),", ",e.jsx("code",{children:"let"}),", and ",e.jsx("code",{children:"const"}),". Each has different rules regarding scope."]}),e.jsx("h3",{children:"Basic Structure for Declaration:"}),e.jsx("pre",{children:e.jsx("code",{children:`var variableName; // Variable declared using var
let variableName; // Variable declared using let
const variableName; // Constant variable declared using const`})}),e.jsx("p",{children:"You can also initialize a variable in its declaration:"}),e.jsx("pre",{children:e.jsx("code",{children:"let age = 25; // Declares a variable 'age' and assigns it the value 25"})}),e.jsx("h2",{children:"Types of Variables"}),e.jsxs("h3",{children:["1. ",e.jsx("code",{children:"var"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Scope:"})," Function-scoped or global-scoped."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hoisting:"})," Variables are hoisted but not initialized, defaulting to ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reassignment:"})," Can be reassigned and redeclared."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Initialization Requirement:"})," Can be declared without initialization."]})]}),e.jsx("pre",{children:e.jsx("code",{children:`console.log(x); // undefined
var x = 10;
console.log(x); // 10`})}),e.jsxs("h3",{children:["2. ",e.jsx("code",{children:"let"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Scope:"})," Block-scoped."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hoisting:"})," Hoisted but not initialized; accessing it before declaration results in a ReferenceError."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reassignment:"})," Can be reassigned but not redeclared within the same scope."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Initialization Requirement:"})," Can be declared without initialization."]})]}),e.jsx("pre",{children:e.jsx("code",{children:`let y = 20;
y = 30; // Reassigning the value of y
console.log(y); // 30`})}),e.jsxs("h3",{children:["3. ",e.jsx("code",{children:"const"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Scope:"})," Block-scoped."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hoisting:"})," Hoisted but remains in the temporal dead zone until declared."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reassignment:"})," Cannot be reassigned after initial assignment, but contents of objects/arrays can be modified."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Initialization Requirement:"})," Must be initialized at the time of declaration."]})]}),e.jsx("pre",{children:e.jsx("code",{children:`const z = 50;
// z = 60; // This will throw an error: "Assignment to constant variable."`})}),e.jsx("h2",{children:"Variable Naming Rules"}),e.jsx("h3",{children:"1. Allowed Characters"}),e.jsx("p",{children:"Variable names can only contain letters, numbers, underscores, and dollar signs, and must start with a letter, underscore, or dollar sign."}),e.jsx("pre",{children:e.jsx("code",{children:`let name; // Valid
let _age; // Valid
let $salary; // Valid
let 2ndPlace; // Invalid (cannot start with a number)`})}),e.jsx("h3",{children:"2. Case Sensitivity"}),e.jsx("p",{children:"Variable names are case-sensitive."}),e.jsx("pre",{children:e.jsx("code",{children:`let name = "John";
let Name = "Doe";
console.log(name); // John
console.log(Name); // Doe`})}),e.jsx("h3",{children:"3. Reserved Keywords"}),e.jsx("p",{children:"You cannot use JavaScript-reserved keywords as variable names."}),e.jsx("pre",{children:e.jsx("code",{children:`// let if = 10; // Invalid because "if" is a reserved keyword
let myIf = 10; // Valid`})}),e.jsx("h3",{children:"4. Descriptive Names"}),e.jsx("p",{children:"Use meaningful names to improve code readability."}),e.jsx("h2",{children:"Variable Example"}),e.jsx("pre",{children:e.jsx("code",{children:`// Declaring variables using var, let, and const
var x = 10;
let y = 20;
const z = 30;

console.log("Before block scope:");
console.log(x); // 10
console.log(y); // 20
console.log(z); // 30

// Block scope using let and const
if (true) {
  var x = 40; // Re-declares the variable x
  let y = 50; // Block-scoped variable
  const z = 60; // Block-scoped constant
  console.log("Inside block scope:");
  console.log(x); // 40
  console.log(y); // 50
  console.log(z); // 60
}

console.log("After block scope:");
console.log(x); // 40
console.log(y); // 20
console.log(z); // 30`})}),e.jsx("h2",{children:"Output"}),e.jsx("pre",{children:`Before block scope:
10
20
30
Inside block scope:
40
50
60
After block scope:
40
20
30`}),e.jsx("h2",{children:"Summary of Differences"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Feature"}),e.jsx("th",{children:"var"}),e.jsx("th",{children:"let"}),e.jsx("th",{children:"const"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Scope"}),e.jsx("td",{children:"Function-scoped or global"}),e.jsx("td",{children:"Block-scoped"}),e.jsx("td",{children:"Block-scoped"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Hoisting"}),e.jsx("td",{children:"Hoisted, initialized as undefined"}),e.jsx("td",{children:"Hoisted, but not initialized"}),e.jsx("td",{children:"Hoisted, but not initialized"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Reassignment"}),e.jsx("td",{children:"Can be reassigned and redeclared"}),e.jsx("td",{children:"Can be reassigned, not redeclared"}),e.jsx("td",{children:"Cannot be reassigned"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Initialization"}),e.jsx("td",{children:"Optional"}),e.jsx("td",{children:"Optional"}),e.jsx("td",{children:"Required"})]})]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["In summary, ",e.jsx("code",{children:"var"})," has a function or global scope and allows redeclaration, which can lead to bugs. ",e.jsx("code",{children:"let"})," provides block scope and is safer because it doesn't allow redeclaration in the same scope. ",e.jsx("code",{children:"const"})," is also block-scoped but is used for variables that should not be reassigned, making it useful for constants or objects that you don’t want to overwrite. Understanding how to properly use ",e.jsx("code",{children:"var"}),", ",e.jsx("code",{children:"let"}),", and ",e.jsx("code",{children:"const"})," in JavaScript helps in managing variable scope, preventing bugs, and writing cleaner, more readable code."]})]}),$y=()=>e.jsxs("div",{className:"AbstractionInJavaScript",children:[e.jsx("h1",{children:"Abstraction"}),e.jsx("p",{children:"In Object-Oriented Programming (OOP), abstraction is the concept of hiding the internal implementation details of an object and exposing only the necessary functionality to the outside world. It focuses on providing a simplified interface to the user, keeping complexity hidden. This allows users to interact with the object without needing to understand its internal workings."}),e.jsx("p",{children:"In JavaScript, abstraction can be achieved by defining methods and properties that are necessary for external use while keeping internal logic hidden using closures or private fields (introduced in ES6+). By doing so, you separate the what (functionality exposed) from the how (internal implementation)."}),e.jsx("h2",{children:"Explanation of Abstraction in JavaScript"}),e.jsx("p",{children:"In JavaScript, abstraction can be implemented using several techniques:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Encapsulation (grouping related data and methods inside a class)."}),e.jsxs("li",{children:["Private methods and fields (using closures or ",e.jsx("code",{children:"#"})," in modern JavaScript)."]}),e.jsx("li",{children:"Public API (exposing only what the object wants the user to interact with)."})]}),e.jsx("p",{children:"Abstraction helps hide unnecessary details from the user and provides only the required interface. This improves the modularity and readability of the code while protecting the object’s integrity by preventing external tampering with internal data."}),e.jsx("h2",{children:"Types of Abstraction"}),e.jsx("p",{children:"There are two primary types of abstraction in OOP:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Data Abstraction:"})," Hides internal data structures or implementation details and provides access to only relevant data through controlled interfaces."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Control Abstraction:"})," Hides the logic or control flow behind high-level operations, exposing only essential behavior to the user."]})]}),e.jsx("h3",{children:"1. Data Abstraction"}),e.jsx("p",{children:"Data abstraction focuses on hiding the internal state and allowing access to data only through public methods. This is done by encapsulating the data and exposing only the necessary operations to manipulate the data."}),e.jsx("pre",{children:e.jsx("code",{children:`class Person {
  #age; // Private field
  constructor(name, age) {
    this.name = name;
    this.#age = age; // Private
  }

  // Public method to get the age (controlled access)
  getAge() {
    return this.#age;
  }

  // Public method to set the age (controlled access)
  setAge(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    }
  }
}`})}),e.jsx("h3",{children:"Example: Bank Account"}),e.jsx("pre",{children:e.jsx("code",{children:`class BankAccount {
  #balance; // Private balance field
  constructor(accountNumber, initialBalance) {
    this.accountNumber = accountNumber;
    this.#balance = initialBalance;
  }

  // Public method to check balance
  checkBalance() {
    return \`Balance: $\${this.#balance}\`;
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return \`Deposited: $\${amount}\`;
    }
    return 'Deposit amount must be positive';
  }

  // Public method to withdraw money
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      return \`Withdrew: $\${amount}\`;
    }
    return 'Insufficient funds';
  }
}

// Create a BankAccount instance
const myAccount = new BankAccount('12345', 1000);
console.log(myAccount.checkBalance()); // Output: Balance: $1000
console.log(myAccount.deposit(500)); // Output: Deposited: $500
console.log(myAccount.checkBalance()); // Output: Balance: $1500
console.log(myAccount.withdraw(200)); // Output: Withdrew: $200
console.log(myAccount.checkBalance()); // Output: Balance: $1300
// Trying to access private field directly (not allowed)
console.log(myAccount.#balance); // Error: Private field '#balance' must be declared in an enclosing class`})}),e.jsx("h3",{children:"Explanation:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Private Data: The ",e.jsx("code",{children:"#balance"})," field is private and cannot be accessed directly from outside the class, demonstrating data abstraction."]}),e.jsxs("li",{children:["Controlled Access: The methods ",e.jsx("code",{children:"checkBalance()"}),", ",e.jsx("code",{children:"deposit()"}),", and ",e.jsx("code",{children:"withdraw()"})," provide controlled access to the private balance field, ensuring the security and integrity of the data."]}),e.jsx("li",{children:"Abstraction: The user doesn’t need to know how the balance is stored or modified internally, making the system easier to use."})]}),e.jsx("h3",{children:"2. Control Abstraction"}),e.jsx("p",{children:"Control abstraction hides the complex control flow (such as loops, decision-making, and algorithms) behind high-level methods or functions that perform specific tasks. The user interacts with the abstracted method without needing to understand how it works internally."}),e.jsx("pre",{children:e.jsx("code",{children:`class CoffeeMachine {
  start() {
    this.boilWater();
    this.grindCoffee();
    this.brew();
    return 'Your coffee is ready!';
  }

  // Private methods for the internal processes
  boilWater() {
    console.log('Boiling water...');
  }

  grindCoffee() {
    console.log('Grinding coffee beans...');
  }

  brew() {
    console.log('Brewing the coffee...');
  }
}`})}),e.jsx("h3",{children:"Explanation:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Control Flow Abstraction: The complex steps involved in brewing coffee are hidden from the user. The user interacts only with the ",e.jsx("code",{children:"start()"})," method, which abstracts the detailed control flow behind making coffee."]}),e.jsxs("li",{children:["Abstraction: The user doesn’t need to know how the machine heats the water or brews the coffee; they simply call ",e.jsx("code",{children:"start()"})," and wait for their coffee to be ready."]})]}),e.jsx("h2",{children:"Advantages of Abstraction"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Simplified Interface: Abstraction provides a simplified interface, making it easier for users to interact with complex systems."}),e.jsx("li",{children:"Encapsulation: By combining abstraction with encapsulation, we hide implementation details and protect the internal state of the object from unwanted modifications."}),e.jsx("li",{children:"Improved Code Maintainability: By abstracting implementation details, the internal logic can be modified or refactored without impacting the external interface."}),e.jsx("li",{children:"Security: Since only relevant details are exposed, abstraction increases the security of the data by restricting access to the internal workings."})]}),e.jsx("h2",{children:"Disadvantages of Abstraction"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Complexity in Design: Designing systems with abstraction requires careful planning to decide what to expose and what to hide, which can increase complexity."}),e.jsx("li",{children:"Performance Overhead: Abstraction might introduce a small performance overhead as it requires additional method calls or layers of logic to access internal details."}),e.jsx("li",{children:"Limited Access: Over-abstraction can sometimes lead to limited flexibility, as it hides useful implementation details that might be required for advanced use cases."})]}),e.jsx("h2",{children:"Implementation of Abstraction in JavaScript"}),e.jsx("h3",{children:"A. Abstraction Using Closures"}),e.jsx("p",{children:"One way to achieve abstraction in JavaScript (before ES6) is by using closures. By defining private variables and methods inside a function, they become inaccessible to the outside world, while still providing controlled access through public methods."}),e.jsx("pre",{children:e.jsx("code",{children:`function ClassName() {
  let privateProperty = 'Private';

  function privateMethod() {
    return 'This is private';
  }

  return {
    publicMethod: function() {
      return privateMethod() + ' and accessible through a public method.';
    }
  };
}`})}),e.jsx("h3",{children:"B. Abstraction Using ES6 Private Fields (#)"}),e.jsxs("p",{children:["ES6 introduced private fields using the symbol ",e.jsx("code",{children:"#"}),", making it possible to create truly private properties in classes."]}),e.jsx("pre",{children:e.jsx("code",{children:`class Car {
  #fuelLevel;

  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.#fuelLevel = 100; // Initial fuel level
  }

  // Public method to drive the car
  drive(distance) {
    if (this.#fuelLevel > 0) {
      this.#fuelLevel -= distance * 0.1;
      return \`\${this.brand} \${this.model} drove \${distance} km. Remaining fuel: \${this.#fuelLevel.toFixed(2)}%\`;
    } else {
      return \`\${this.brand} \${this.model} has no fuel left.\`;
    }
  }

  // Public method to refuel the car
  refillFuel() {
    this.#fuelLevel = 100;
    return \`\${this.brand} \${this.model} has been refueled.\`;
  }
}

const myCar = new Car('Honda', 'Civic');
console.log(myCar.drive(50)); // Output: Honda Civic drove 50 km. Remaining fuel: 95.00%
console.log(myCar.refillFuel()); // Output: Honda Civic has been refueled.
console.log(myCar.drive(100)); // Output: Honda Civic drove 100 km. Remaining fuel: 90.00%
console.log(myCar.#fuelLevel); // Error: Private field '#fuelLevel' must be declared in an enclosing class`})}),e.jsx("h2",{children:"Use Cases of Abstraction"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ATM:"})," An ATM allows users to withdraw cash or check their account balance without knowing how the transaction is processed internally."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Library Management System:"})," Users can borrow and return books without understanding the complexities of the underlying processes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Payment Gateway System:"})," Users can make payments without knowing the internal workings of the payment processing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Game Development:"})," Users can interact with the game without understanding the complex algorithms behind the scenes."]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Abstraction in JavaScript is a crucial OOP concept that helps simplify complex systems by hiding internal implementation details and exposing only necessary methods and properties. By using techniques like closures or ES6 private fields, JavaScript can implement abstraction, ensuring that internal logic remains hidden while providing users with a clean, user-friendly interface to interact with. Abstraction helps developers build complex systems that are easier to use, secure, and maintainable while also protecting the internal state of the application."}),e.jsx("h3",{children:"Key Points:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Abstraction hides the implementation details and provides a simple interface for interacting with objects."}),e.jsx("li",{children:"It can be implemented in JavaScript using closures (before ES6) or private fields (ES6+)."}),e.jsx("li",{children:"It promotes modularity, security, and maintainability by separating the what from the how."}),e.jsx("li",{children:"In a real-world scenario like the Library Management System, abstraction makes it easier to interact with the system without exposing unnecessary complexities."})]})]}),id=[{path:"JavaScriptOverview",component:e.jsx(dp,{})},{path:"VariablesInJavaScript",component:e.jsx(Vy,{})},{path:"StringsInJavaScript",component:e.jsx(Hy,{})},{path:"ObjectsInOOP",component:e.jsx(Uy,{})},{path:"BuiltInObjects",component:e.jsx(Jy,{})},{path:"JavaScriptLoops",component:e.jsx(Fy,{})},{path:"JavaScriptPrimitivesAndObjects",component:e.jsx(By,{})},{path:"OperatorsAndExpressions",component:e.jsx(zy,{})},{path:"ConditionsInJavaScript",component:e.jsx(Ny,{})},{path:"EncapsulationInJavaScript",component:e.jsx(Ry,{})},{path:"FunctionsInJavaScript",component:e.jsx(My,{})},{path:"InheritanceInOOP",component:e.jsx(Ly,{})},{path:"AbstractionInJavaScript",component:e.jsx($y,{})},{path:"ClassOOPS",component:e.jsx(Oy,{})},{path:"ArraysInJavaScript",component:e.jsx(Ay,{})},{path:"StaticMethods",component:e.jsx(qy,{})},{path:"Polymorphism",component:e.jsx(_y,{})},{path:"NodeInstallation",component:e.jsx(Wy,{})}];function Gy(){const[t,n]=S.useState(!1);return Li(),S.useEffect(()=>{const i=()=>{n(window.innerWidth<=768)};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),e.jsxs("div",{className:"Playwright",children:[e.jsx(gs,{}),e.jsxs("div",{className:"main",children:[e.jsx("div",{className:`container-left ${t?"hidden":""}`,children:e.jsx("div",{className:"container-leftt",children:e.jsxs("div",{className:"container-links",children:[e.jsx("h1",{children:"Playwright"}),id.map((i,r)=>e.jsx(ca,{className:"links",to:i.path,children:i.path.replace(/([A-Z])/g," $1").trim()},r))]})})}),e.jsx("div",{className:"main-container",children:e.jsx("div",{className:"main-page",children:e.jsxs(Th,{children:[e.jsx($e,{path:"/",element:e.jsx(dp,{})}),id.map((i,r)=>e.jsx($e,{path:`/${i.path}`,element:i.component},r))]})})})]}),e.jsx(fa,{})]})}const Xy="/assets/video1-B-Sfx63a.mp4",ro=[{id:1,name:"Sarthak Gupta",role:"QA Lead",text:"The Selenium Master course transformed our testing process. The practical examples and in-depth explanations made complex concepts easy to understand.",rating:5,course:"Selenium Master Course",type:"text"},{id:2,name:"Ujjwal Singh",role:"Senior Automation Tester",text:"I went from manual testing to automation expert in just 3 months. The Playwright course content is top-notch and always up-to-date with latest practices.",rating:5,course:"Playwright Testing",type:"text"},{id:3,name:"Rahul Kumar",role:"Test Automation Engineer",text:"The API testing course provided invaluable insights into modern testing practices. The hands-on projects really helped cement my understanding.",rating:5,course:"API Testing Masterclass",type:"text"},{id:4,name:"Vishvesh Kushwaha",role:"DevOps Engineer",text:"Cypress course was exactly what our team needed. Clear explanations, real-world examples, and excellent support from the instructors.",rating:5,course:"Cypress Automation",type:"text"},{id:5,name:"Ankita Sharma",role:"Automation Architect",videoUrl:Xy,course:"Advanced Automation Strategies",type:"video"},{id:6,name:"Manoj Kumar",role:"Senior QA Engineer",videoUrl:"https://www.example.com/video2.mp4",course:"Load Testing Mastery",type:"video"}];function Ky(){const[t,n]=S.useState(0),[i,r]=S.useState(!1),s=()=>{i||(r(!0),n(l=>l===0?ro.length-1:l-1),setTimeout(()=>r(!1),500))},o=()=>{i||(r(!0),n(l=>l===ro.length-1?0:l+1),setTimeout(()=>r(!1),500))};return e.jsx("section",{className:"testimonials-section",children:e.jsxs("div",{className:"testimonials-container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"What Our Students Say"}),e.jsx("p",{children:"Join thousands of successful automation engineers who transformed their careers with us"})]}),e.jsxs("div",{className:"testimonials-carousel",children:[e.jsx("button",{className:"nav-button prev",onClick:s,children:e.jsx(_x,{size:24})}),e.jsx("button",{className:"nav-button next",onClick:o,children:e.jsx(Zn,{size:24})}),e.jsx("div",{className:"testimonials-wrapper",children:ro.map((l,a)=>e.jsx("div",{className:`testimonial-card ${a===t?"active":""}`,style:{transform:`translateX(${(a-t)*100}%)`,opacity:a===t?1:0,zIndex:a===t?1:0},children:l.type==="text"?e.jsxs(e.Fragment,{children:[e.jsx(Qx,{className:"quote-icon",size:40}),e.jsxs("div",{className:"testimonial-content",children:[e.jsx("p",{className:"testimonial-text",children:l.text}),e.jsx("div",{className:"rating",children:[...Array(l.rating)].map((c,d)=>e.jsx(Zx,{className:"star",size:16,fill:"#FFD700",color:"#FFD700"},d))}),e.jsx("div",{className:"course-tag",children:l.course})]}),e.jsx("div",{className:"testimonial-author",children:e.jsxs("div",{className:"author-info",children:[e.jsx("h4",{children:l.name}),e.jsx("p",{children:l.role})]})})]}):e.jsxs("div",{className:"video-testimonial",children:[e.jsxs("video",{controls:!0,className:"testimonial-video",children:[e.jsx("source",{src:l.videoUrl,type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsx("div",{className:"testimonial-author",children:e.jsxs("div",{className:"author-info",children:[e.jsx("h4",{children:l.name}),e.jsx("p",{children:l.role})]})})]})},l.id))})]})]})})}const Qy=()=>{var d;const[t,n]=S.useState(null),[i,r]=S.useState({}),[s,o]=S.useState(""),l=[{id:1,title:"Java Fundamentals",icon:e.jsx(nl,{size:32}),description:"Core Java concepts and programming fundamentals",questions:[{question:"What makes the Java platform independent?",answer:"Java works on the principle of writing once and running anywhere. Once a Java program is written, it is compiled into byte code, which can then be run on any Java Virtual Machine or JVM. Different operating systems and hardware architectures have JVMs custom-designed for themselves, making code agnostic to the underlying hardware and OS."},{question:"Explain the concept of OOP in Java.",answer:"Java is an Object-Oriented Programming (OOP) language that organizes data and behavior in objects. Key concepts include: Encapsulation (bundling data and methods), Abstraction (hiding complexity), Inheritance (allowing new classes to inherit properties), and Polymorphism (enabling objects to be treated as instances of their parent class)."}]},{id:2,title:"Selenium Basics",icon:e.jsx(Dh,{size:32}),description:"Essential Selenium WebDriver concepts",questions:[{question:"What is Selenium and what are its components?",answer:"Selenium is a tool for automating web browser interactions. Components include: Selenium WebDriver (allows direct browser interaction), Selenium IDE (browser extension for record-and-playback), and Selenium Grid (distributes tests across multiple machines)."},{question:"Explain different locators in Selenium WebDriver.",answer:"Selenium WebDriver provides various locators: ID, Name, Class Name, Tag Name, Link Text, Partial Link Text, CSS Selector, and XPath. Each serves different purposes in identifying elements on a webpage."}]},{id:3,title:"Advanced Automation",icon:e.jsx(ci,{size:32}),description:"Advanced testing frameworks and practices",questions:[{question:"What is the Page Object Model (POM)?",answer:"Page Object Model is a design pattern that creates object repositories for web UI elements. It reduces code duplication and improves test maintenance. Each web page has a corresponding Page Class containing web element locators and methods to interact with them."}]},{id:4,title:"JavaScript",icon:e.jsx(Vx,{size:32}),description:"Modern JavaScript concepts and features",questions:[{question:"What are the different data types in JavaScript?",answer:"JavaScript has Primitive Types (String, Number, Boolean, Undefined, Null, Symbol, BigInt) and Non-Primitive Types (Object, which includes arrays and functions)."},{question:"Explain promises and async/await in JavaScript.",answer:"Promises represent a value that may be available now, in the future, or never. They handle asynchronous operations using .then() and .catch() methods. Async/await is a syntactic sugar over promises that makes asynchronous code look synchronous, making it easier to read and maintain."},{question:"What is event delegation in JavaScript?",answer:"Event delegation is a pattern where a single event listener is added to a parent element to handle events on multiple child elements. This improves performance by reducing the number of event listeners needed."}]},{id:5,title:"Playwright",icon:e.jsx(ci,{size:32}),description:"Modern browser automation with Playwright",questions:[{question:"What is Playwright and why is it used?",answer:"Playwright is an open-source browser automation tool by Microsoft that enables end-to-end testing of web applications across multiple browsers (Chromium, Firefox, WebKit). It supports modern JavaScript frameworks and allows for cross-browser and cross-platform testing with a single API."},{question:"How do you handle different types of waits in Playwright?",answer:"Playwright has built-in automatic waiting for elements to be actionable. You can use explicit waits like page.waitForSelector() for elements, page.waitForTimeout() for time-based waits, and page.waitForLoadState() for network activity."},{question:"What are locators in Playwright and how do you use them?",answer:"Locators in Playwright are used to find and interact with elements on a page. They automatically handle waiting for elements to be actionable. Common locators include page.getByText(), page.getByRole(), page.getByLabel(), page.getByTestId(), and page.getByTitle()."}]}],a=u=>{r(h=>({...h,[u]:!h[u]}))},c=s?l.map(u=>({...u,questions:u.questions.filter(h=>h.question.toLowerCase().includes(s.toLowerCase())||h.answer.toLowerCase().includes(s.toLowerCase()))})).filter(u=>u.questions.length>0):l;return e.jsxs("span",{children:[e.jsx(gs,{}),e.jsx("div",{className:"interview-qa home",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"hero-section",children:e.jsxs("div",{className:"hero-content",children:[e.jsxs("h1",{children:["Technical Interview ",e.jsx("span",{className:"highlight",children:"Questions"})]}),e.jsx("p",{className:"subtitle",children:"Master your next technical interview with comprehensive Q&A"}),e.jsxs("div",{className:"search-bar",children:[e.jsx("input",{type:"text",placeholder:"Search questions...",value:s,onChange:u=>o(u.target.value)}),e.jsx(Ih,{className:"search-icon"})]})]})}),e.jsx("div",{className:"topics-container",children:e.jsx("div",{className:"topics-scroll-wrapper",children:e.jsx("div",{className:"topics-grid",children:c.map(u=>e.jsxs("div",{className:`topic-card ${t===u.id?"selected":""}`,onClick:()=>n(u.id),children:[e.jsx("div",{className:"topic-icon",children:u.icon}),e.jsx("h2",{children:u.title}),e.jsx("p",{children:u.description})]},u.id))})})}),t&&e.jsxs("div",{className:"qa-section",children:[e.jsxs("div",{className:"section-header",children:[e.jsx(ci,{className:"header-icon"}),e.jsx("h3",{children:"Interview Questions"})]}),e.jsx("div",{className:"questions-container",children:(d=c.find(u=>u.id===t))==null?void 0:d.questions.map((u,h)=>e.jsxs("div",{className:`qa-card ${i[h]?"expanded":""}`,onClick:()=>a(h),children:[e.jsxs("div",{className:"question-header",children:[e.jsx("h4",{children:u.question}),i[h]?e.jsx(qx,{className:"chevron-icon"}):e.jsx(zx,{className:"chevron-icon"})]}),i[h]&&e.jsx("div",{className:"answer",children:u.answer})]},h))})]})]})})]})};V.defaults.baseURL="http://localhost:8000";V.defaults.withCredentials=!0;function Yy(){return e.jsxs("div",{className:"route",children:[e.jsx(Sv,{position:"bottom-right",toastOptions:{duration:3e3}}),e.jsxs(Th,{children:[e.jsx($e,{path:"/",element:e.jsx(Zy,{})}),e.jsx($e,{path:"/register",element:e.jsx(Lv,{})}),e.jsx($e,{path:"/login",element:e.jsx(Bv,{})}),e.jsx($e,{path:"/dashboard",element:e.jsx(Fv,{})}),e.jsx($e,{path:"/Selenium/*",element:e.jsx(Dy,{})}),e.jsx($e,{path:"/Playwright/*",element:e.jsx(Gy,{})}),e.jsx($e,{path:"/InterviewQuestions/*",element:e.jsx(Qy,{})})]})]})}function Zy(){return e.jsxs("div",{className:"app",children:[e.jsx("div",{children:e.jsx(gs,{})}),e.jsx(rg,{}),e.jsx(Ky,{}),e.jsx(fa,{})]})}so.createRoot(document.getElementById("root")).render(e.jsx(nt.StrictMode,{children:e.jsx(Mx,{children:e.jsx(Yy,{})})}));
