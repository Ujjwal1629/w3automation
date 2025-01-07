function Um(r,o){for(var a=0;a<o.length;a++){const d=o[a];if(typeof d!="string"&&!Array.isArray(d)){for(const u in d)if(u!=="default"&&!(u in r)){const h=Object.getOwnPropertyDescriptor(d,u);h&&Object.defineProperty(r,u,h.get?h:{enumerable:!0,get:()=>d[u]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function a(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(u){if(u.ep)return;u.ep=!0;const h=a(u);fetch(u.href,h)}})();function Xu(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Rl={exports:{}},$i={},Ml={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lu;function zm(){if(lu)return te;lu=1;var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.iterator;function R(w){return w===null||typeof w!="object"?null:(w=S&&w[S]||w["@@iterator"],typeof w=="function"?w:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,D={};function T(w,O,ee){this.props=w,this.context=O,this.refs=D,this.updater=ee||z}T.prototype.isReactComponent={},T.prototype.setState=function(w,O){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,O,"setState")},T.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function V(){}V.prototype=T.prototype;function Y(w,O,ee){this.props=w,this.context=O,this.refs=D,this.updater=ee||z}var X=Y.prototype=new V;X.constructor=Y,L(X,T.prototype),X.isPureReactComponent=!0;var ie=Array.isArray,re=Object.prototype.hasOwnProperty,fe={current:null},be={key:!0,ref:!0,__self:!0,__source:!0};function Re(w,O,ee){var ne,oe={},le=null,ue=null;if(O!=null)for(ne in O.ref!==void 0&&(ue=O.ref),O.key!==void 0&&(le=""+O.key),O)re.call(O,ne)&&!be.hasOwnProperty(ne)&&(oe[ne]=O[ne]);var ce=arguments.length-2;if(ce===1)oe.children=ee;else if(1<ce){for(var xe=Array(ce),et=0;et<ce;et++)xe[et]=arguments[et+2];oe.children=xe}if(w&&w.defaultProps)for(ne in ce=w.defaultProps,ce)oe[ne]===void 0&&(oe[ne]=ce[ne]);return{$$typeof:r,type:w,key:le,ref:ue,props:oe,_owner:fe.current}}function ht(w,O){return{$$typeof:r,type:w.type,key:O,ref:w.ref,props:w.props,_owner:w._owner}}function At(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function mn(w){var O={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ee){return O[ee]})}var wt=/\/+/g;function Ze(w,O){return typeof w=="object"&&w!==null&&w.key!=null?mn(""+w.key):O.toString(36)}function pt(w,O,ee,ne,oe){var le=typeof w;(le==="undefined"||le==="boolean")&&(w=null);var ue=!1;if(w===null)ue=!0;else switch(le){case"string":case"number":ue=!0;break;case"object":switch(w.$$typeof){case r:case o:ue=!0}}if(ue)return ue=w,oe=oe(ue),w=ne===""?"."+Ze(ue,0):ne,ie(oe)?(ee="",w!=null&&(ee=w.replace(wt,"$&/")+"/"),pt(oe,O,ee,"",function(et){return et})):oe!=null&&(At(oe)&&(oe=ht(oe,ee+(!oe.key||ue&&ue.key===oe.key?"":(""+oe.key).replace(wt,"$&/")+"/")+w)),O.push(oe)),1;if(ue=0,ne=ne===""?".":ne+":",ie(w))for(var ce=0;ce<w.length;ce++){le=w[ce];var xe=ne+Ze(le,ce);ue+=pt(le,O,ee,xe,oe)}else if(xe=R(w),typeof xe=="function")for(w=xe.call(w),ce=0;!(le=w.next()).done;)le=le.value,xe=ne+Ze(le,ce++),ue+=pt(le,O,ee,xe,oe);else if(le==="object")throw O=String(w),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return ue}function St(w,O,ee){if(w==null)return w;var ne=[],oe=0;return pt(w,ne,"","",function(le){return O.call(ee,le,oe++)}),ne}function He(w){if(w._status===-1){var O=w._result;O=O(),O.then(function(ee){(w._status===0||w._status===-1)&&(w._status=1,w._result=ee)},function(ee){(w._status===0||w._status===-1)&&(w._status=2,w._result=ee)}),w._status===-1&&(w._status=0,w._result=O)}if(w._status===1)return w._result.default;throw w._result}var we={current:null},F={transition:null},K={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:F,ReactCurrentOwner:fe};function U(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:St,forEach:function(w,O,ee){St(w,function(){O.apply(this,arguments)},ee)},count:function(w){var O=0;return St(w,function(){O++}),O},toArray:function(w){return St(w,function(O){return O})||[]},only:function(w){if(!At(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},te.Component=T,te.Fragment=a,te.Profiler=u,te.PureComponent=Y,te.StrictMode=d,te.Suspense=g,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,te.act=U,te.cloneElement=function(w,O,ee){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var ne=L({},w.props),oe=w.key,le=w.ref,ue=w._owner;if(O!=null){if(O.ref!==void 0&&(le=O.ref,ue=fe.current),O.key!==void 0&&(oe=""+O.key),w.type&&w.type.defaultProps)var ce=w.type.defaultProps;for(xe in O)re.call(O,xe)&&!be.hasOwnProperty(xe)&&(ne[xe]=O[xe]===void 0&&ce!==void 0?ce[xe]:O[xe])}var xe=arguments.length-2;if(xe===1)ne.children=ee;else if(1<xe){ce=Array(xe);for(var et=0;et<xe;et++)ce[et]=arguments[et+2];ne.children=ce}return{$$typeof:r,type:w.type,key:oe,ref:le,props:ne,_owner:ue}},te.createContext=function(w){return w={$$typeof:m,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:h,_context:w},w.Consumer=w},te.createElement=Re,te.createFactory=function(w){var O=Re.bind(null,w);return O.type=w,O},te.createRef=function(){return{current:null}},te.forwardRef=function(w){return{$$typeof:f,render:w}},te.isValidElement=At,te.lazy=function(w){return{$$typeof:y,_payload:{_status:-1,_result:w},_init:He}},te.memo=function(w,O){return{$$typeof:v,type:w,compare:O===void 0?null:O}},te.startTransition=function(w){var O=F.transition;F.transition={};try{w()}finally{F.transition=O}},te.unstable_act=U,te.useCallback=function(w,O){return we.current.useCallback(w,O)},te.useContext=function(w){return we.current.useContext(w)},te.useDebugValue=function(){},te.useDeferredValue=function(w){return we.current.useDeferredValue(w)},te.useEffect=function(w,O){return we.current.useEffect(w,O)},te.useId=function(){return we.current.useId()},te.useImperativeHandle=function(w,O,ee){return we.current.useImperativeHandle(w,O,ee)},te.useInsertionEffect=function(w,O){return we.current.useInsertionEffect(w,O)},te.useLayoutEffect=function(w,O){return we.current.useLayoutEffect(w,O)},te.useMemo=function(w,O){return we.current.useMemo(w,O)},te.useReducer=function(w,O,ee){return we.current.useReducer(w,O,ee)},te.useRef=function(w){return we.current.useRef(w)},te.useState=function(w){return we.current.useState(w)},te.useSyncExternalStore=function(w,O,ee){return we.current.useSyncExternalStore(w,O,ee)},te.useTransition=function(){return we.current.useTransition()},te.version="18.3.1",te}var au;function ra(){return au||(au=1,Ml.exports=zm()),Ml.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cu;function _m(){if(cu)return $i;cu=1;var r=ra(),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function m(f,g,v){var y,S={},R=null,z=null;v!==void 0&&(R=""+v),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(z=g.ref);for(y in g)d.call(g,y)&&!h.hasOwnProperty(y)&&(S[y]=g[y]);if(f&&f.defaultProps)for(y in g=f.defaultProps,g)S[y]===void 0&&(S[y]=g[y]);return{$$typeof:o,type:f,key:R,ref:z,props:S,_owner:u.current}}return $i.Fragment=a,$i.jsx=m,$i.jsxs=m,$i}var du;function qm(){return du||(du=1,Rl.exports=_m()),Rl.exports}var e=qm(),I=ra();const Ut=Xu(I),Hm=Um({__proto__:null,default:Ut},[I]);var xs={},Ll={exports:{}},Qe={},Bl={exports:{}},Fl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu;function Vm(){return uu||(uu=1,function(r){function o(F,K){var U=F.length;F.push(K);e:for(;0<U;){var w=U-1>>>1,O=F[w];if(0<u(O,K))F[w]=K,F[U]=O,U=w;else break e}}function a(F){return F.length===0?null:F[0]}function d(F){if(F.length===0)return null;var K=F[0],U=F.pop();if(U!==K){F[0]=U;e:for(var w=0,O=F.length,ee=O>>>1;w<ee;){var ne=2*(w+1)-1,oe=F[ne],le=ne+1,ue=F[le];if(0>u(oe,U))le<O&&0>u(ue,oe)?(F[w]=ue,F[le]=U,w=le):(F[w]=oe,F[ne]=U,w=ne);else if(le<O&&0>u(ue,U))F[w]=ue,F[le]=U,w=le;else break e}}return K}function u(F,K){var U=F.sortIndex-K.sortIndex;return U!==0?U:F.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var m=Date,f=m.now();r.unstable_now=function(){return m.now()-f}}var g=[],v=[],y=1,S=null,R=3,z=!1,L=!1,D=!1,T=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(F){for(var K=a(v);K!==null;){if(K.callback===null)d(v);else if(K.startTime<=F)d(v),K.sortIndex=K.expirationTime,o(g,K);else break;K=a(v)}}function ie(F){if(D=!1,X(F),!L)if(a(g)!==null)L=!0,He(re);else{var K=a(v);K!==null&&we(ie,K.startTime-F)}}function re(F,K){L=!1,D&&(D=!1,V(Re),Re=-1),z=!0;var U=R;try{for(X(K),S=a(g);S!==null&&(!(S.expirationTime>K)||F&&!mn());){var w=S.callback;if(typeof w=="function"){S.callback=null,R=S.priorityLevel;var O=w(S.expirationTime<=K);K=r.unstable_now(),typeof O=="function"?S.callback=O:S===a(g)&&d(g),X(K)}else d(g);S=a(g)}if(S!==null)var ee=!0;else{var ne=a(v);ne!==null&&we(ie,ne.startTime-K),ee=!1}return ee}finally{S=null,R=U,z=!1}}var fe=!1,be=null,Re=-1,ht=5,At=-1;function mn(){return!(r.unstable_now()-At<ht)}function wt(){if(be!==null){var F=r.unstable_now();At=F;var K=!0;try{K=be(!0,F)}finally{K?Ze():(fe=!1,be=null)}}else fe=!1}var Ze;if(typeof Y=="function")Ze=function(){Y(wt)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,St=pt.port2;pt.port1.onmessage=wt,Ze=function(){St.postMessage(null)}}else Ze=function(){T(wt,0)};function He(F){be=F,fe||(fe=!0,Ze())}function we(F,K){Re=T(function(){F(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_continueExecution=function(){L||z||(L=!0,He(re))},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ht=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return a(g)},r.unstable_next=function(F){switch(R){case 1:case 2:case 3:var K=3;break;default:K=R}var U=R;R=K;try{return F()}finally{R=U}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(F,K){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var U=R;R=F;try{return K()}finally{R=U}},r.unstable_scheduleCallback=function(F,K,U){var w=r.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?w+U:w):U=w,F){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=U+O,F={id:y++,callback:K,priorityLevel:F,startTime:U,expirationTime:O,sortIndex:-1},U>w?(F.sortIndex=U,o(v,F),a(g)===null&&F===a(v)&&(D?(V(Re),Re=-1):D=!0,we(ie,U-w))):(F.sortIndex=O,o(g,F),L||z||(L=!0,He(re))),F},r.unstable_shouldYield=mn,r.unstable_wrapCallback=function(F){var K=R;return function(){var U=R;R=K;try{return F.apply(this,arguments)}finally{R=U}}}}(Fl)),Fl}var hu;function Gm(){return hu||(hu=1,Bl.exports=Vm()),Bl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu;function $m(){if(pu)return Qe;pu=1;var r=ra(),o=Gm();function a(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,u={};function h(t,n){m(t,n),m(t+"Capture",n)}function m(t,n){for(u[t]=n,t=0;t<n.length;t++)d.add(n[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},S={};function R(t){return g.call(S,t)?!0:g.call(y,t)?!1:v.test(t)?S[t]=!0:(y[t]=!0,!1)}function z(t,n,i,s){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L(t,n,i,s){if(n===null||typeof n>"u"||z(t,n,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function D(t,n,i,s,l,c,p){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=i,this.propertyName=t,this.type=n,this.sanitizeURL=c,this.removeEmptyString=p}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){T[t]=new D(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];T[n]=new D(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){T[t]=new D(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){T[t]=new D(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){T[t]=new D(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){T[t]=new D(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){T[t]=new D(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){T[t]=new D(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){T[t]=new D(t,5,!1,t.toLowerCase(),null,!1,!1)});var V=/[\-:]([a-z])/g;function Y(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(V,Y);T[n]=new D(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(V,Y);T[n]=new D(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(V,Y);T[n]=new D(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){T[t]=new D(t,1,!1,t.toLowerCase(),null,!1,!1)}),T.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){T[t]=new D(t,1,!1,t.toLowerCase(),null,!0,!0)});function X(t,n,i,s){var l=T.hasOwnProperty(n)?T[n]:null;(l!==null?l.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(L(n,i,l,s)&&(i=null),s||l===null?R(n)&&(i===null?t.removeAttribute(n):t.setAttribute(n,""+i)):l.mustUseProperty?t[l.propertyName]=i===null?l.type===3?!1:"":i:(n=l.attributeName,s=l.attributeNamespace,i===null?t.removeAttribute(n):(l=l.type,i=l===3||l===4&&i===!0?"":""+i,s?t.setAttributeNS(s,n,i):t.setAttribute(n,i))))}var ie=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),fe=Symbol.for("react.portal"),be=Symbol.for("react.fragment"),Re=Symbol.for("react.strict_mode"),ht=Symbol.for("react.profiler"),At=Symbol.for("react.provider"),mn=Symbol.for("react.context"),wt=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),pt=Symbol.for("react.suspense_list"),St=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),F=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,w;function O(t){if(w===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);w=n&&n[1]||""}return`
`+w+t}var ee=!1;function ne(t,n){if(!t||ee)return"";ee=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(k){var s=k}Reflect.construct(t,[],n)}else{try{n.call()}catch(k){s=k}t.call(n.prototype)}else{try{throw Error()}catch(k){s=k}t()}}catch(k){if(k&&s&&typeof k.stack=="string"){for(var l=k.stack.split(`
`),c=s.stack.split(`
`),p=l.length-1,x=c.length-1;1<=p&&0<=x&&l[p]!==c[x];)x--;for(;1<=p&&0<=x;p--,x--)if(l[p]!==c[x]){if(p!==1||x!==1)do if(p--,x--,0>x||l[p]!==c[x]){var j=`
`+l[p].replace(" at new "," at ");return t.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",t.displayName)),j}while(1<=p&&0<=x);break}}}finally{ee=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?O(t):""}function oe(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=ne(t.type,!1),t;case 11:return t=ne(t.type.render,!1),t;case 1:return t=ne(t.type,!0),t;default:return""}}function le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case be:return"Fragment";case fe:return"Portal";case ht:return"Profiler";case Re:return"StrictMode";case Ze:return"Suspense";case pt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mn:return(t.displayName||"Context")+".Consumer";case At:return(t._context.displayName||"Context")+".Provider";case wt:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case St:return n=t.displayName||null,n!==null?n:le(t.type)||"Memo";case He:n=t._payload,t=t._init;try{return le(t(n))}catch{}}return null}function ue(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(n);case 8:return n===Re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t){var n=xe(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,c=i.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(p){s=""+p,c.call(this,p)}}),Object.defineProperty(t,n,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(p){s=""+p},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function or(t){t._valueTracker||(t._valueTracker=et(t))}function pa(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),s="";return t&&(s=xe(t)?t.checked?"true":"false":t.value),t=s,t!==i?(n.setValue(t),!0):!1}function lr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Js(t,n){var i=n.checked;return U({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function ma(t,n){var i=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;i=ce(n.value!=null?n.value:i),t._wrapperState={initialChecked:s,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fa(t,n){n=n.checked,n!=null&&X(t,"checked",n,!1)}function Us(t,n){fa(t,n);var i=ce(n.value),s=n.type;if(i!=null)s==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(s==="submit"||s==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?zs(t,n.type,i):n.hasOwnProperty("defaultValue")&&zs(t,n.type,ce(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function xa(t,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,i||n===t.value||(t.value=n),t.defaultValue=n}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function zs(t,n,i){(n!=="number"||lr(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var ci=Array.isArray;function Mn(t,n,i,s){if(t=t.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=n.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&s&&(t[i].defaultSelected=!0)}else{for(i=""+ce(i),n=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function _s(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(a(91));return U({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ga(t,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(a(92));if(ci(i)){if(1<i.length)throw Error(a(93));i=i[0]}n=i}n==null&&(n=""),i=n}t._wrapperState={initialValue:ce(i)}}function ja(t,n){var i=ce(n.value),s=ce(n.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),n.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),s!=null&&(t.defaultValue=""+s)}function va(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function ya(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qs(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?ya(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ar,ba=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,s,l){MSApp.execUnsafeLocalFunction(function(){return t(n,i,s,l)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ar.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function di(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vh=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(t){Vh.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),ui[n]=ui[t]})});function wa(t,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||ui.hasOwnProperty(t)&&ui[t]?(""+n).trim():n+"px"}function Sa(t,n){t=t.style;for(var i in n)if(n.hasOwnProperty(i)){var s=i.indexOf("--")===0,l=wa(i,n[i],s);i==="float"&&(i="cssFloat"),s?t.setProperty(i,l):t[i]=l}}var Gh=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hs(t,n){if(n){if(Gh[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(a(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(a(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(n.style!=null&&typeof n.style!="object")throw Error(a(62))}}function Vs(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gs=null;function $s(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xs=null,Ln=null,Bn=null;function Ea(t){if(t=Ni(t)){if(typeof Xs!="function")throw Error(a(280));var n=t.stateNode;n&&(n=Ar(n),Xs(t.stateNode,t.type,n))}}function Ca(t){Ln?Bn?Bn.push(t):Bn=[t]:Ln=t}function ka(){if(Ln){var t=Ln,n=Bn;if(Bn=Ln=null,Ea(t),n)for(t=0;t<n.length;t++)Ea(n[t])}}function Ta(t,n){return t(n)}function Pa(){}var Ks=!1;function Ia(t,n,i){if(Ks)return t(n,i);Ks=!0;try{return Ta(t,n,i)}finally{Ks=!1,(Ln!==null||Bn!==null)&&(Pa(),ka())}}function hi(t,n){var i=t.stateNode;if(i===null)return null;var s=Ar(i);if(s===null)return null;i=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(a(231,n,typeof i));return i}var Qs=!1;if(f)try{var pi={};Object.defineProperty(pi,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{Qs=!1}function $h(t,n,i,s,l,c,p,x,j){var k=Array.prototype.slice.call(arguments,3);try{n.apply(i,k)}catch(N){this.onError(N)}}var mi=!1,cr=null,dr=!1,Ys=null,Xh={onError:function(t){mi=!0,cr=t}};function Kh(t,n,i,s,l,c,p,x,j){mi=!1,cr=null,$h.apply(Xh,arguments)}function Qh(t,n,i,s,l,c,p,x,j){if(Kh.apply(this,arguments),mi){if(mi){var k=cr;mi=!1,cr=null}else throw Error(a(198));dr||(dr=!0,Ys=k)}}function fn(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function Da(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Aa(t){if(fn(t)!==t)throw Error(a(188))}function Yh(t){var n=t.alternate;if(!n){if(n=fn(t),n===null)throw Error(a(188));return n!==t?null:t}for(var i=t,s=n;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(s=l.return,s!==null){i=s;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return Aa(l),t;if(c===s)return Aa(l),n;c=c.sibling}throw Error(a(188))}if(i.return!==s.return)i=l,s=c;else{for(var p=!1,x=l.child;x;){if(x===i){p=!0,i=l,s=c;break}if(x===s){p=!0,s=l,i=c;break}x=x.sibling}if(!p){for(x=c.child;x;){if(x===i){p=!0,i=c,s=l;break}if(x===s){p=!0,s=c,i=l;break}x=x.sibling}if(!p)throw Error(a(189))}}if(i.alternate!==s)throw Error(a(190))}if(i.tag!==3)throw Error(a(188));return i.stateNode.current===i?t:n}function Oa(t){return t=Yh(t),t!==null?Na(t):null}function Na(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Na(t);if(n!==null)return n;t=t.sibling}return null}var Ra=o.unstable_scheduleCallback,Ma=o.unstable_cancelCallback,Zh=o.unstable_shouldYield,ep=o.unstable_requestPaint,Ee=o.unstable_now,tp=o.unstable_getCurrentPriorityLevel,Zs=o.unstable_ImmediatePriority,La=o.unstable_UserBlockingPriority,ur=o.unstable_NormalPriority,np=o.unstable_LowPriority,Ba=o.unstable_IdlePriority,hr=null,Et=null;function ip(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(hr,t,void 0,(t.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:op,rp=Math.log,sp=Math.LN2;function op(t){return t>>>=0,t===0?32:31-(rp(t)/sp|0)|0}var pr=64,mr=4194304;function fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fr(t,n){var i=t.pendingLanes;if(i===0)return 0;var s=0,l=t.suspendedLanes,c=t.pingedLanes,p=i&268435455;if(p!==0){var x=p&~l;x!==0?s=fi(x):(c&=p,c!==0&&(s=fi(c)))}else p=i&~l,p!==0?s=fi(p):c!==0&&(s=fi(c));if(s===0)return 0;if(n!==0&&n!==s&&!(n&l)&&(l=s&-s,c=n&-n,l>=c||l===16&&(c&4194240)!==0))return n;if(s&4&&(s|=i&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=s;0<n;)i=31-mt(n),l=1<<i,s|=t[i],n&=~l;return s}function lp(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ap(t,n){for(var i=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes;0<c;){var p=31-mt(c),x=1<<p,j=l[p];j===-1?(!(x&i)||x&s)&&(l[p]=lp(x,n)):j<=n&&(t.expiredLanes|=x),c&=~x}}function eo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fa(){var t=pr;return pr<<=1,!(pr&4194240)&&(pr=64),t}function to(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function xi(t,n,i){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-mt(n),t[n]=i}function cp(t,n){var i=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var s=t.eventTimes;for(t=t.expirationTimes;0<i;){var l=31-mt(i),c=1<<l;n[l]=0,s[l]=-1,t[l]=-1,i&=~c}}function no(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var s=31-mt(i),l=1<<s;l&n|t[s]&n&&(t[s]|=n),i&=~l}}var de=0;function Wa(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ja,io,Ua,za,_a,ro=!1,xr=[],_t=null,qt=null,Ht=null,gi=new Map,ji=new Map,Vt=[],dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qa(t,n){switch(t){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":gi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(n.pointerId)}}function vi(t,n,i,s,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:i,eventSystemFlags:s,nativeEvent:c,targetContainers:[l]},n!==null&&(n=Ni(n),n!==null&&io(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function up(t,n,i,s,l){switch(n){case"focusin":return _t=vi(_t,t,n,i,s,l),!0;case"dragenter":return qt=vi(qt,t,n,i,s,l),!0;case"mouseover":return Ht=vi(Ht,t,n,i,s,l),!0;case"pointerover":var c=l.pointerId;return gi.set(c,vi(gi.get(c)||null,t,n,i,s,l)),!0;case"gotpointercapture":return c=l.pointerId,ji.set(c,vi(ji.get(c)||null,t,n,i,s,l)),!0}return!1}function Ha(t){var n=xn(t.target);if(n!==null){var i=fn(n);if(i!==null){if(n=i.tag,n===13){if(n=Da(i),n!==null){t.blockedOn=n,_a(t.priority,function(){Ua(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gr(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=oo(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var s=new i.constructor(i.type,i);Gs=s,i.target.dispatchEvent(s),Gs=null}else return n=Ni(i),n!==null&&io(n),t.blockedOn=i,!1;n.shift()}return!0}function Va(t,n,i){gr(t)&&i.delete(n)}function hp(){ro=!1,_t!==null&&gr(_t)&&(_t=null),qt!==null&&gr(qt)&&(qt=null),Ht!==null&&gr(Ht)&&(Ht=null),gi.forEach(Va),ji.forEach(Va)}function yi(t,n){t.blockedOn===n&&(t.blockedOn=null,ro||(ro=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,hp)))}function bi(t){function n(l){return yi(l,t)}if(0<xr.length){yi(xr[0],t);for(var i=1;i<xr.length;i++){var s=xr[i];s.blockedOn===t&&(s.blockedOn=null)}}for(_t!==null&&yi(_t,t),qt!==null&&yi(qt,t),Ht!==null&&yi(Ht,t),gi.forEach(n),ji.forEach(n),i=0;i<Vt.length;i++)s=Vt[i],s.blockedOn===t&&(s.blockedOn=null);for(;0<Vt.length&&(i=Vt[0],i.blockedOn===null);)Ha(i),i.blockedOn===null&&Vt.shift()}var Fn=ie.ReactCurrentBatchConfig,jr=!0;function pp(t,n,i,s){var l=de,c=Fn.transition;Fn.transition=null;try{de=1,so(t,n,i,s)}finally{de=l,Fn.transition=c}}function mp(t,n,i,s){var l=de,c=Fn.transition;Fn.transition=null;try{de=4,so(t,n,i,s)}finally{de=l,Fn.transition=c}}function so(t,n,i,s){if(jr){var l=oo(t,n,i,s);if(l===null)Eo(t,n,s,vr,i),qa(t,s);else if(up(l,t,n,i,s))s.stopPropagation();else if(qa(t,s),n&4&&-1<dp.indexOf(t)){for(;l!==null;){var c=Ni(l);if(c!==null&&Ja(c),c=oo(t,n,i,s),c===null&&Eo(t,n,s,vr,i),c===l)break;l=c}l!==null&&s.stopPropagation()}else Eo(t,n,s,null,i)}}var vr=null;function oo(t,n,i,s){if(vr=null,t=$s(s),t=xn(t),t!==null)if(n=fn(t),n===null)t=null;else if(i=n.tag,i===13){if(t=Da(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return vr=t,null}function Ga(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tp()){case Zs:return 1;case La:return 4;case ur:case np:return 16;case Ba:return 536870912;default:return 16}default:return 16}}var Gt=null,lo=null,yr=null;function $a(){if(yr)return yr;var t,n=lo,i=n.length,s,l="value"in Gt?Gt.value:Gt.textContent,c=l.length;for(t=0;t<i&&n[t]===l[t];t++);var p=i-t;for(s=1;s<=p&&n[i-s]===l[c-s];s++);return yr=l.slice(t,1<s?1-s:void 0)}function br(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function wr(){return!0}function Xa(){return!1}function tt(t){function n(i,s,l,c,p){this._reactName=i,this._targetInst=l,this.type=s,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var x in t)t.hasOwnProperty(x)&&(i=t[x],this[x]=i?i(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?wr:Xa,this.isPropagationStopped=Xa,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),n}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=tt(Wn),wi=U({},Wn,{view:0,detail:0}),fp=tt(wi),co,uo,Si,Sr=U({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Si&&(Si&&t.type==="mousemove"?(co=t.screenX-Si.screenX,uo=t.screenY-Si.screenY):uo=co=0,Si=t),co)},movementY:function(t){return"movementY"in t?t.movementY:uo}}),Ka=tt(Sr),xp=U({},Sr,{dataTransfer:0}),gp=tt(xp),jp=U({},wi,{relatedTarget:0}),ho=tt(jp),vp=U({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),yp=tt(vp),bp=U({},Wn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wp=tt(bp),Sp=U({},Wn,{data:0}),Qa=tt(Sp),Ep={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tp(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=kp[t])?!!n[t]:!1}function po(){return Tp}var Pp=U({},wi,{key:function(t){if(t.key){var n=Ep[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=br(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(t){return t.type==="keypress"?br(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?br(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ip=tt(Pp),Dp=U({},Sr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ya=tt(Dp),Ap=U({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),Op=tt(Ap),Np=U({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rp=tt(Np),Mp=U({},Sr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lp=tt(Mp),Bp=[9,13,27,32],mo=f&&"CompositionEvent"in window,Ei=null;f&&"documentMode"in document&&(Ei=document.documentMode);var Fp=f&&"TextEvent"in window&&!Ei,Za=f&&(!mo||Ei&&8<Ei&&11>=Ei),ec=" ",tc=!1;function nc(t,n){switch(t){case"keyup":return Bp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ic(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jn=!1;function Wp(t,n){switch(t){case"compositionend":return ic(n);case"keypress":return n.which!==32?null:(tc=!0,ec);case"textInput":return t=n.data,t===ec&&tc?null:t;default:return null}}function Jp(t,n){if(Jn)return t==="compositionend"||!mo&&nc(t,n)?(t=$a(),yr=lo=Gt=null,Jn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Za&&n.locale!=="ko"?null:n.data;default:return null}}var Up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Up[t.type]:n==="textarea"}function sc(t,n,i,s){Ca(s),n=Pr(n,"onChange"),0<n.length&&(i=new ao("onChange","change",null,i,s),t.push({event:i,listeners:n}))}var Ci=null,ki=null;function zp(t){Sc(t,0)}function Er(t){var n=Hn(t);if(pa(n))return t}function _p(t,n){if(t==="change")return n}var oc=!1;if(f){var fo;if(f){var xo="oninput"in document;if(!xo){var lc=document.createElement("div");lc.setAttribute("oninput","return;"),xo=typeof lc.oninput=="function"}fo=xo}else fo=!1;oc=fo&&(!document.documentMode||9<document.documentMode)}function ac(){Ci&&(Ci.detachEvent("onpropertychange",cc),ki=Ci=null)}function cc(t){if(t.propertyName==="value"&&Er(ki)){var n=[];sc(n,ki,t,$s(t)),Ia(zp,n)}}function qp(t,n,i){t==="focusin"?(ac(),Ci=n,ki=i,Ci.attachEvent("onpropertychange",cc)):t==="focusout"&&ac()}function Hp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Er(ki)}function Vp(t,n){if(t==="click")return Er(n)}function Gp(t,n){if(t==="input"||t==="change")return Er(n)}function $p(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ft=typeof Object.is=="function"?Object.is:$p;function Ti(t,n){if(ft(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),s=Object.keys(n);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var l=i[s];if(!g.call(n,l)||!ft(t[l],n[l]))return!1}return!0}function dc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uc(t,n){var i=dc(t);t=0;for(var s;i;){if(i.nodeType===3){if(s=t+i.textContent.length,t<=n&&s>=n)return{node:i,offset:n-t};t=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=dc(i)}}function hc(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?hc(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function pc(){for(var t=window,n=lr();n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=lr(t.document)}return n}function go(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Xp(t){var n=pc(),i=t.focusedElem,s=t.selectionRange;if(n!==i&&i&&i.ownerDocument&&hc(i.ownerDocument.documentElement,i)){if(s!==null&&go(i)){if(n=s.start,t=s.end,t===void 0&&(t=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(t,i.value.length);else if(t=(n=i.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var l=i.textContent.length,c=Math.min(s.start,l);s=s.end===void 0?c:Math.min(s.end,l),!t.extend&&c>s&&(l=s,s=c,c=l),l=uc(i,c);var p=uc(i,s);l&&p&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==p.node||t.focusOffset!==p.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),t.removeAllRanges(),c>s?(t.addRange(n),t.extend(p.node,p.offset)):(n.setEnd(p.node,p.offset),t.addRange(n)))}}for(n=[],t=i;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)t=n[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kp=f&&"documentMode"in document&&11>=document.documentMode,Un=null,jo=null,Pi=null,vo=!1;function mc(t,n,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;vo||Un==null||Un!==lr(s)||(s=Un,"selectionStart"in s&&go(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Pi&&Ti(Pi,s)||(Pi=s,s=Pr(jo,"onSelect"),0<s.length&&(n=new ao("onSelect","select",null,n,i),t.push({event:n,listeners:s}),n.target=Un)))}function Cr(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var zn={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},yo={},fc={};f&&(fc=document.createElement("div").style,"AnimationEvent"in window||(delete zn.animationend.animation,delete zn.animationiteration.animation,delete zn.animationstart.animation),"TransitionEvent"in window||delete zn.transitionend.transition);function kr(t){if(yo[t])return yo[t];if(!zn[t])return t;var n=zn[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in fc)return yo[t]=n[i];return t}var xc=kr("animationend"),gc=kr("animationiteration"),jc=kr("animationstart"),vc=kr("transitionend"),yc=new Map,bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(t,n){yc.set(t,n),h(n,[t])}for(var bo=0;bo<bc.length;bo++){var wo=bc[bo],Qp=wo.toLowerCase(),Yp=wo[0].toUpperCase()+wo.slice(1);$t(Qp,"on"+Yp)}$t(xc,"onAnimationEnd"),$t(gc,"onAnimationIteration"),$t(jc,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(vc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function wc(t,n,i){var s=t.type||"unknown-event";t.currentTarget=i,Qh(s,n,void 0,t),t.currentTarget=null}function Sc(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var s=t[i],l=s.event;s=s.listeners;e:{var c=void 0;if(n)for(var p=s.length-1;0<=p;p--){var x=s[p],j=x.instance,k=x.currentTarget;if(x=x.listener,j!==c&&l.isPropagationStopped())break e;wc(l,x,k),c=j}else for(p=0;p<s.length;p++){if(x=s[p],j=x.instance,k=x.currentTarget,x=x.listener,j!==c&&l.isPropagationStopped())break e;wc(l,x,k),c=j}}}if(dr)throw t=Ys,dr=!1,Ys=null,t}function pe(t,n){var i=n[Do];i===void 0&&(i=n[Do]=new Set);var s=t+"__bubble";i.has(s)||(Ec(n,t,2,!1),i.add(s))}function So(t,n,i){var s=0;n&&(s|=4),Ec(i,t,s,n)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function Di(t){if(!t[Tr]){t[Tr]=!0,d.forEach(function(i){i!=="selectionchange"&&(Zp.has(i)||So(i,!1,t),So(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Tr]||(n[Tr]=!0,So("selectionchange",!1,n))}}function Ec(t,n,i,s){switch(Ga(n)){case 1:var l=pp;break;case 4:l=mp;break;default:l=so}i=l.bind(null,n,i,t),l=void 0,!Qs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(n,i,{capture:!0,passive:l}):t.addEventListener(n,i,!0):l!==void 0?t.addEventListener(n,i,{passive:l}):t.addEventListener(n,i,!1)}function Eo(t,n,i,s,l){var c=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var p=s.tag;if(p===3||p===4){var x=s.stateNode.containerInfo;if(x===l||x.nodeType===8&&x.parentNode===l)break;if(p===4)for(p=s.return;p!==null;){var j=p.tag;if((j===3||j===4)&&(j=p.stateNode.containerInfo,j===l||j.nodeType===8&&j.parentNode===l))return;p=p.return}for(;x!==null;){if(p=xn(x),p===null)return;if(j=p.tag,j===5||j===6){s=c=p;continue e}x=x.parentNode}}s=s.return}Ia(function(){var k=c,N=$s(i),M=[];e:{var A=yc.get(t);if(A!==void 0){var W=ao,_=t;switch(t){case"keypress":if(br(i)===0)break e;case"keydown":case"keyup":W=Ip;break;case"focusin":_="focus",W=ho;break;case"focusout":_="blur",W=ho;break;case"beforeblur":case"afterblur":W=ho;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Op;break;case xc:case gc:case jc:W=yp;break;case vc:W=Rp;break;case"scroll":W=fp;break;case"wheel":W=Lp;break;case"copy":case"cut":case"paste":W=wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Ya}var q=(n&4)!==0,Ce=!q&&t==="scroll",E=q?A!==null?A+"Capture":null:A;q=[];for(var b=k,C;b!==null;){C=b;var B=C.stateNode;if(C.tag===5&&B!==null&&(C=B,E!==null&&(B=hi(b,E),B!=null&&q.push(Ai(b,B,C)))),Ce)break;b=b.return}0<q.length&&(A=new W(A,_,null,i,N),M.push({event:A,listeners:q}))}}if(!(n&7)){e:{if(A=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",A&&i!==Gs&&(_=i.relatedTarget||i.fromElement)&&(xn(_)||_[Ot]))break e;if((W||A)&&(A=N.window===N?N:(A=N.ownerDocument)?A.defaultView||A.parentWindow:window,W?(_=i.relatedTarget||i.toElement,W=k,_=_?xn(_):null,_!==null&&(Ce=fn(_),_!==Ce||_.tag!==5&&_.tag!==6)&&(_=null)):(W=null,_=k),W!==_)){if(q=Ka,B="onMouseLeave",E="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(q=Ya,B="onPointerLeave",E="onPointerEnter",b="pointer"),Ce=W==null?A:Hn(W),C=_==null?A:Hn(_),A=new q(B,b+"leave",W,i,N),A.target=Ce,A.relatedTarget=C,B=null,xn(N)===k&&(q=new q(E,b+"enter",_,i,N),q.target=C,q.relatedTarget=Ce,B=q),Ce=B,W&&_)t:{for(q=W,E=_,b=0,C=q;C;C=_n(C))b++;for(C=0,B=E;B;B=_n(B))C++;for(;0<b-C;)q=_n(q),b--;for(;0<C-b;)E=_n(E),C--;for(;b--;){if(q===E||E!==null&&q===E.alternate)break t;q=_n(q),E=_n(E)}q=null}else q=null;W!==null&&Cc(M,A,W,q,!1),_!==null&&Ce!==null&&Cc(M,Ce,_,q,!0)}}e:{if(A=k?Hn(k):window,W=A.nodeName&&A.nodeName.toLowerCase(),W==="select"||W==="input"&&A.type==="file")var H=_p;else if(rc(A))if(oc)H=Gp;else{H=Hp;var G=qp}else(W=A.nodeName)&&W.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(H=Vp);if(H&&(H=H(t,k))){sc(M,H,i,N);break e}G&&G(t,A,k),t==="focusout"&&(G=A._wrapperState)&&G.controlled&&A.type==="number"&&zs(A,"number",A.value)}switch(G=k?Hn(k):window,t){case"focusin":(rc(G)||G.contentEditable==="true")&&(Un=G,jo=k,Pi=null);break;case"focusout":Pi=jo=Un=null;break;case"mousedown":vo=!0;break;case"contextmenu":case"mouseup":case"dragend":vo=!1,mc(M,i,N);break;case"selectionchange":if(Kp)break;case"keydown":case"keyup":mc(M,i,N)}var $;if(mo)e:{switch(t){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Jn?nc(t,i)&&(Q="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Q="onCompositionStart");Q&&(Za&&i.locale!=="ko"&&(Jn||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Jn&&($=$a()):(Gt=N,lo="value"in Gt?Gt.value:Gt.textContent,Jn=!0)),G=Pr(k,Q),0<G.length&&(Q=new Qa(Q,t,null,i,N),M.push({event:Q,listeners:G}),$?Q.data=$:($=ic(i),$!==null&&(Q.data=$)))),($=Fp?Wp(t,i):Jp(t,i))&&(k=Pr(k,"onBeforeInput"),0<k.length&&(N=new Qa("onBeforeInput","beforeinput",null,i,N),M.push({event:N,listeners:k}),N.data=$))}Sc(M,n)})}function Ai(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Pr(t,n){for(var i=n+"Capture",s=[];t!==null;){var l=t,c=l.stateNode;l.tag===5&&c!==null&&(l=c,c=hi(t,i),c!=null&&s.unshift(Ai(t,c,l)),c=hi(t,n),c!=null&&s.push(Ai(t,c,l))),t=t.return}return s}function _n(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cc(t,n,i,s,l){for(var c=n._reactName,p=[];i!==null&&i!==s;){var x=i,j=x.alternate,k=x.stateNode;if(j!==null&&j===s)break;x.tag===5&&k!==null&&(x=k,l?(j=hi(i,c),j!=null&&p.unshift(Ai(i,j,x))):l||(j=hi(i,c),j!=null&&p.push(Ai(i,j,x)))),i=i.return}p.length!==0&&t.push({event:n,listeners:p})}var em=/\r\n?/g,tm=/\u0000|\uFFFD/g;function kc(t){return(typeof t=="string"?t:""+t).replace(em,`
`).replace(tm,"")}function Ir(t,n,i){if(n=kc(n),kc(t)!==n&&i)throw Error(a(425))}function Dr(){}var Co=null,ko=null;function To(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Po=typeof setTimeout=="function"?setTimeout:void 0,nm=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,im=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(t){return Tc.resolve(null).then(t).catch(rm)}:Po;function rm(t){setTimeout(function(){throw t})}function Io(t,n){var i=n,s=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(s===0){t.removeChild(l),bi(n);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=l}while(i);bi(n)}function Xt(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Pc(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return t;n--}else i==="/$"&&n++}t=t.previousSibling}return null}var qn=Math.random().toString(36).slice(2),Ct="__reactFiber$"+qn,Oi="__reactProps$"+qn,Ot="__reactContainer$"+qn,Do="__reactEvents$"+qn,sm="__reactListeners$"+qn,om="__reactHandles$"+qn;function xn(t){var n=t[Ct];if(n)return n;for(var i=t.parentNode;i;){if(n=i[Ot]||i[Ct]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=Pc(t);t!==null;){if(i=t[Ct])return i;t=Pc(t)}return n}t=i,i=t.parentNode}return null}function Ni(t){return t=t[Ct]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(a(33))}function Ar(t){return t[Oi]||null}var Ao=[],Vn=-1;function Kt(t){return{current:t}}function me(t){0>Vn||(t.current=Ao[Vn],Ao[Vn]=null,Vn--)}function he(t,n){Vn++,Ao[Vn]=t.current,t.current=n}var Qt={},Be=Kt(Qt),Ve=Kt(!1),gn=Qt;function Gn(t,n){var i=t.type.contextTypes;if(!i)return Qt;var s=t.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var l={},c;for(c in i)l[c]=n[c];return s&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=l),l}function Ge(t){return t=t.childContextTypes,t!=null}function Or(){me(Ve),me(Be)}function Ic(t,n,i){if(Be.current!==Qt)throw Error(a(168));he(Be,n),he(Ve,i)}function Dc(t,n,i){var s=t.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var l in s)if(!(l in n))throw Error(a(108,ue(t)||"Unknown",l));return U({},i,s)}function Nr(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qt,gn=Be.current,he(Be,t),he(Ve,Ve.current),!0}function Ac(t,n,i){var s=t.stateNode;if(!s)throw Error(a(169));i?(t=Dc(t,n,gn),s.__reactInternalMemoizedMergedChildContext=t,me(Ve),me(Be),he(Be,t)):me(Ve),he(Ve,i)}var Nt=null,Rr=!1,Oo=!1;function Oc(t){Nt===null?Nt=[t]:Nt.push(t)}function lm(t){Rr=!0,Oc(t)}function Yt(){if(!Oo&&Nt!==null){Oo=!0;var t=0,n=de;try{var i=Nt;for(de=1;t<i.length;t++){var s=i[t];do s=s(!0);while(s!==null)}Nt=null,Rr=!1}catch(l){throw Nt!==null&&(Nt=Nt.slice(t+1)),Ra(Zs,Yt),l}finally{de=n,Oo=!1}}return null}var $n=[],Xn=0,Mr=null,Lr=0,ot=[],lt=0,jn=null,Rt=1,Mt="";function vn(t,n){$n[Xn++]=Lr,$n[Xn++]=Mr,Mr=t,Lr=n}function Nc(t,n,i){ot[lt++]=Rt,ot[lt++]=Mt,ot[lt++]=jn,jn=t;var s=Rt;t=Mt;var l=32-mt(s)-1;s&=~(1<<l),i+=1;var c=32-mt(n)+l;if(30<c){var p=l-l%5;c=(s&(1<<p)-1).toString(32),s>>=p,l-=p,Rt=1<<32-mt(n)+l|i<<l|s,Mt=c+t}else Rt=1<<c|i<<l|s,Mt=t}function No(t){t.return!==null&&(vn(t,1),Nc(t,1,0))}function Ro(t){for(;t===Mr;)Mr=$n[--Xn],$n[Xn]=null,Lr=$n[--Xn],$n[Xn]=null;for(;t===jn;)jn=ot[--lt],ot[lt]=null,Mt=ot[--lt],ot[lt]=null,Rt=ot[--lt],ot[lt]=null}var nt=null,it=null,ge=!1,xt=null;function Rc(t,n){var i=ut(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=t,n=t.deletions,n===null?(t.deletions=[i],t.flags|=16):n.push(i)}function Mc(t,n){switch(t.tag){case 5:var i=t.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,nt=t,it=Xt(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,nt=t,it=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=jn!==null?{id:Rt,overflow:Mt}:null,t.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=ut(18,null,null,0),i.stateNode=n,i.return=t,t.child=i,nt=t,it=null,!0):!1;default:return!1}}function Mo(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lo(t){if(ge){var n=it;if(n){var i=n;if(!Mc(t,n)){if(Mo(t))throw Error(a(418));n=Xt(i.nextSibling);var s=nt;n&&Mc(t,n)?Rc(s,i):(t.flags=t.flags&-4097|2,ge=!1,nt=t)}}else{if(Mo(t))throw Error(a(418));t.flags=t.flags&-4097|2,ge=!1,nt=t}}}function Lc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nt=t}function Br(t){if(t!==nt)return!1;if(!ge)return Lc(t),ge=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!To(t.type,t.memoizedProps)),n&&(n=it)){if(Mo(t))throw Bc(),Error(a(418));for(;n;)Rc(t,n),n=Xt(n.nextSibling)}if(Lc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(n===0){it=Xt(t.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}t=t.nextSibling}it=null}}else it=nt?Xt(t.stateNode.nextSibling):null;return!0}function Bc(){for(var t=it;t;)t=Xt(t.nextSibling)}function Kn(){it=nt=null,ge=!1}function Bo(t){xt===null?xt=[t]:xt.push(t)}var am=ie.ReactCurrentBatchConfig;function Ri(t,n,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(a(309));var s=i.stateNode}if(!s)throw Error(a(147,t));var l=s,c=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===c?n.ref:(n=function(p){var x=l.refs;p===null?delete x[c]:x[c]=p},n._stringRef=c,n)}if(typeof t!="string")throw Error(a(284));if(!i._owner)throw Error(a(290,t))}return t}function Fr(t,n){throw t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Fc(t){var n=t._init;return n(t._payload)}function Wc(t){function n(E,b){if(t){var C=E.deletions;C===null?(E.deletions=[b],E.flags|=16):C.push(b)}}function i(E,b){if(!t)return null;for(;b!==null;)n(E,b),b=b.sibling;return null}function s(E,b){for(E=new Map;b!==null;)b.key!==null?E.set(b.key,b):E.set(b.index,b),b=b.sibling;return E}function l(E,b){return E=ln(E,b),E.index=0,E.sibling=null,E}function c(E,b,C){return E.index=C,t?(C=E.alternate,C!==null?(C=C.index,C<b?(E.flags|=2,b):C):(E.flags|=2,b)):(E.flags|=1048576,b)}function p(E){return t&&E.alternate===null&&(E.flags|=2),E}function x(E,b,C,B){return b===null||b.tag!==6?(b=Pl(C,E.mode,B),b.return=E,b):(b=l(b,C),b.return=E,b)}function j(E,b,C,B){var H=C.type;return H===be?N(E,b,C.props.children,B,C.key):b!==null&&(b.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===He&&Fc(H)===b.type)?(B=l(b,C.props),B.ref=Ri(E,b,C),B.return=E,B):(B=as(C.type,C.key,C.props,null,E.mode,B),B.ref=Ri(E,b,C),B.return=E,B)}function k(E,b,C,B){return b===null||b.tag!==4||b.stateNode.containerInfo!==C.containerInfo||b.stateNode.implementation!==C.implementation?(b=Il(C,E.mode,B),b.return=E,b):(b=l(b,C.children||[]),b.return=E,b)}function N(E,b,C,B,H){return b===null||b.tag!==7?(b=Tn(C,E.mode,B,H),b.return=E,b):(b=l(b,C),b.return=E,b)}function M(E,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Pl(""+b,E.mode,C),b.return=E,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case re:return C=as(b.type,b.key,b.props,null,E.mode,C),C.ref=Ri(E,null,b),C.return=E,C;case fe:return b=Il(b,E.mode,C),b.return=E,b;case He:var B=b._init;return M(E,B(b._payload),C)}if(ci(b)||K(b))return b=Tn(b,E.mode,C,null),b.return=E,b;Fr(E,b)}return null}function A(E,b,C,B){var H=b!==null?b.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return H!==null?null:x(E,b,""+C,B);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case re:return C.key===H?j(E,b,C,B):null;case fe:return C.key===H?k(E,b,C,B):null;case He:return H=C._init,A(E,b,H(C._payload),B)}if(ci(C)||K(C))return H!==null?null:N(E,b,C,B,null);Fr(E,C)}return null}function W(E,b,C,B,H){if(typeof B=="string"&&B!==""||typeof B=="number")return E=E.get(C)||null,x(b,E,""+B,H);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case re:return E=E.get(B.key===null?C:B.key)||null,j(b,E,B,H);case fe:return E=E.get(B.key===null?C:B.key)||null,k(b,E,B,H);case He:var G=B._init;return W(E,b,C,G(B._payload),H)}if(ci(B)||K(B))return E=E.get(C)||null,N(b,E,B,H,null);Fr(b,B)}return null}function _(E,b,C,B){for(var H=null,G=null,$=b,Q=b=0,Ne=null;$!==null&&Q<C.length;Q++){$.index>Q?(Ne=$,$=null):Ne=$.sibling;var ae=A(E,$,C[Q],B);if(ae===null){$===null&&($=Ne);break}t&&$&&ae.alternate===null&&n(E,$),b=c(ae,b,Q),G===null?H=ae:G.sibling=ae,G=ae,$=Ne}if(Q===C.length)return i(E,$),ge&&vn(E,Q),H;if($===null){for(;Q<C.length;Q++)$=M(E,C[Q],B),$!==null&&(b=c($,b,Q),G===null?H=$:G.sibling=$,G=$);return ge&&vn(E,Q),H}for($=s(E,$);Q<C.length;Q++)Ne=W($,E,Q,C[Q],B),Ne!==null&&(t&&Ne.alternate!==null&&$.delete(Ne.key===null?Q:Ne.key),b=c(Ne,b,Q),G===null?H=Ne:G.sibling=Ne,G=Ne);return t&&$.forEach(function(an){return n(E,an)}),ge&&vn(E,Q),H}function q(E,b,C,B){var H=K(C);if(typeof H!="function")throw Error(a(150));if(C=H.call(C),C==null)throw Error(a(151));for(var G=H=null,$=b,Q=b=0,Ne=null,ae=C.next();$!==null&&!ae.done;Q++,ae=C.next()){$.index>Q?(Ne=$,$=null):Ne=$.sibling;var an=A(E,$,ae.value,B);if(an===null){$===null&&($=Ne);break}t&&$&&an.alternate===null&&n(E,$),b=c(an,b,Q),G===null?H=an:G.sibling=an,G=an,$=Ne}if(ae.done)return i(E,$),ge&&vn(E,Q),H;if($===null){for(;!ae.done;Q++,ae=C.next())ae=M(E,ae.value,B),ae!==null&&(b=c(ae,b,Q),G===null?H=ae:G.sibling=ae,G=ae);return ge&&vn(E,Q),H}for($=s(E,$);!ae.done;Q++,ae=C.next())ae=W($,E,Q,ae.value,B),ae!==null&&(t&&ae.alternate!==null&&$.delete(ae.key===null?Q:ae.key),b=c(ae,b,Q),G===null?H=ae:G.sibling=ae,G=ae);return t&&$.forEach(function(Jm){return n(E,Jm)}),ge&&vn(E,Q),H}function Ce(E,b,C,B){if(typeof C=="object"&&C!==null&&C.type===be&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case re:e:{for(var H=C.key,G=b;G!==null;){if(G.key===H){if(H=C.type,H===be){if(G.tag===7){i(E,G.sibling),b=l(G,C.props.children),b.return=E,E=b;break e}}else if(G.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===He&&Fc(H)===G.type){i(E,G.sibling),b=l(G,C.props),b.ref=Ri(E,G,C),b.return=E,E=b;break e}i(E,G);break}else n(E,G);G=G.sibling}C.type===be?(b=Tn(C.props.children,E.mode,B,C.key),b.return=E,E=b):(B=as(C.type,C.key,C.props,null,E.mode,B),B.ref=Ri(E,b,C),B.return=E,E=B)}return p(E);case fe:e:{for(G=C.key;b!==null;){if(b.key===G)if(b.tag===4&&b.stateNode.containerInfo===C.containerInfo&&b.stateNode.implementation===C.implementation){i(E,b.sibling),b=l(b,C.children||[]),b.return=E,E=b;break e}else{i(E,b);break}else n(E,b);b=b.sibling}b=Il(C,E.mode,B),b.return=E,E=b}return p(E);case He:return G=C._init,Ce(E,b,G(C._payload),B)}if(ci(C))return _(E,b,C,B);if(K(C))return q(E,b,C,B);Fr(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,b!==null&&b.tag===6?(i(E,b.sibling),b=l(b,C),b.return=E,E=b):(i(E,b),b=Pl(C,E.mode,B),b.return=E,E=b),p(E)):i(E,b)}return Ce}var Qn=Wc(!0),Jc=Wc(!1),Wr=Kt(null),Jr=null,Yn=null,Fo=null;function Wo(){Fo=Yn=Jr=null}function Jo(t){var n=Wr.current;me(Wr),t._currentValue=n}function Uo(t,n,i){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===i)break;t=t.return}}function Zn(t,n){Jr=t,Fo=Yn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&n&&($e=!0),t.firstContext=null)}function at(t){var n=t._currentValue;if(Fo!==t)if(t={context:t,memoizedValue:n,next:null},Yn===null){if(Jr===null)throw Error(a(308));Yn=t,Jr.dependencies={lanes:0,firstContext:t}}else Yn=Yn.next=t;return n}var yn=null;function zo(t){yn===null?yn=[t]:yn.push(t)}function Uc(t,n,i,s){var l=n.interleaved;return l===null?(i.next=i,zo(n)):(i.next=l.next,l.next=i),n.interleaved=i,Lt(t,s)}function Lt(t,n){t.lanes|=n;var i=t.alternate;for(i!==null&&(i.lanes|=n),i=t,t=t.return;t!==null;)t.childLanes|=n,i=t.alternate,i!==null&&(i.childLanes|=n),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Zt=!1;function _o(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bt(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function en(t,n,i){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,se&2){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,Lt(t,i)}return l=s.interleaved,l===null?(n.next=n,zo(s)):(n.next=l.next,l.next=n),s.interleaved=n,Lt(t,i)}function Ur(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,no(t,i)}}function _c(t,n){var i=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var p={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};c===null?l=c=p:c=c.next=p,i=i.next}while(i!==null);c===null?l=c=n:c=c.next=n}else l=c=n;i={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:s.shared,effects:s.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}function zr(t,n,i,s){var l=t.updateQueue;Zt=!1;var c=l.firstBaseUpdate,p=l.lastBaseUpdate,x=l.shared.pending;if(x!==null){l.shared.pending=null;var j=x,k=j.next;j.next=null,p===null?c=k:p.next=k,p=j;var N=t.alternate;N!==null&&(N=N.updateQueue,x=N.lastBaseUpdate,x!==p&&(x===null?N.firstBaseUpdate=k:x.next=k,N.lastBaseUpdate=j))}if(c!==null){var M=l.baseState;p=0,N=k=j=null,x=c;do{var A=x.lane,W=x.eventTime;if((s&A)===A){N!==null&&(N=N.next={eventTime:W,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var _=t,q=x;switch(A=n,W=i,q.tag){case 1:if(_=q.payload,typeof _=="function"){M=_.call(W,M,A);break e}M=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=q.payload,A=typeof _=="function"?_.call(W,M,A):_,A==null)break e;M=U({},M,A);break e;case 2:Zt=!0}}x.callback!==null&&x.lane!==0&&(t.flags|=64,A=l.effects,A===null?l.effects=[x]:A.push(x))}else W={eventTime:W,lane:A,tag:x.tag,payload:x.payload,callback:x.callback,next:null},N===null?(k=N=W,j=M):N=N.next=W,p|=A;if(x=x.next,x===null){if(x=l.shared.pending,x===null)break;A=x,x=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);if(N===null&&(j=M),l.baseState=j,l.firstBaseUpdate=k,l.lastBaseUpdate=N,n=l.shared.interleaved,n!==null){l=n;do p|=l.lane,l=l.next;while(l!==n)}else c===null&&(l.shared.lanes=0);Sn|=p,t.lanes=p,t.memoizedState=M}}function qc(t,n,i){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var s=t[n],l=s.callback;if(l!==null){if(s.callback=null,s=i,typeof l!="function")throw Error(a(191,l));l.call(s)}}}var Mi={},kt=Kt(Mi),Li=Kt(Mi),Bi=Kt(Mi);function bn(t){if(t===Mi)throw Error(a(174));return t}function qo(t,n){switch(he(Bi,n),he(Li,t),he(kt,Mi),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:qs(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=qs(n,t)}me(kt),he(kt,n)}function ei(){me(kt),me(Li),me(Bi)}function Hc(t){bn(Bi.current);var n=bn(kt.current),i=qs(n,t.type);n!==i&&(he(Li,t),he(kt,i))}function Ho(t){Li.current===t&&(me(kt),me(Li))}var je=Kt(0);function _r(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vo=[];function Go(){for(var t=0;t<Vo.length;t++)Vo[t]._workInProgressVersionPrimary=null;Vo.length=0}var qr=ie.ReactCurrentDispatcher,$o=ie.ReactCurrentBatchConfig,wn=0,ve=null,Pe=null,Ae=null,Hr=!1,Fi=!1,Wi=0,cm=0;function Fe(){throw Error(a(321))}function Xo(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!ft(t[i],n[i]))return!1;return!0}function Ko(t,n,i,s,l,c){if(wn=c,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,qr.current=t===null||t.memoizedState===null?pm:mm,t=i(s,l),Fi){c=0;do{if(Fi=!1,Wi=0,25<=c)throw Error(a(301));c+=1,Ae=Pe=null,n.updateQueue=null,qr.current=fm,t=i(s,l)}while(Fi)}if(qr.current=$r,n=Pe!==null&&Pe.next!==null,wn=0,Ae=Pe=ve=null,Hr=!1,n)throw Error(a(300));return t}function Qo(){var t=Wi!==0;return Wi=0,t}function Tt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ve.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function ct(){if(Pe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var n=Ae===null?ve.memoizedState:Ae.next;if(n!==null)Ae=n,Pe=t;else{if(t===null)throw Error(a(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Ae===null?ve.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function Ji(t,n){return typeof n=="function"?n(t):n}function Yo(t){var n=ct(),i=n.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=t;var s=Pe,l=s.baseQueue,c=i.pending;if(c!==null){if(l!==null){var p=l.next;l.next=c.next,c.next=p}s.baseQueue=l=c,i.pending=null}if(l!==null){c=l.next,s=s.baseState;var x=p=null,j=null,k=c;do{var N=k.lane;if((wn&N)===N)j!==null&&(j=j.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),s=k.hasEagerState?k.eagerState:t(s,k.action);else{var M={lane:N,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};j===null?(x=j=M,p=s):j=j.next=M,ve.lanes|=N,Sn|=N}k=k.next}while(k!==null&&k!==c);j===null?p=s:j.next=x,ft(s,n.memoizedState)||($e=!0),n.memoizedState=s,n.baseState=p,n.baseQueue=j,i.lastRenderedState=s}if(t=i.interleaved,t!==null){l=t;do c=l.lane,ve.lanes|=c,Sn|=c,l=l.next;while(l!==t)}else l===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Zo(t){var n=ct(),i=n.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=t;var s=i.dispatch,l=i.pending,c=n.memoizedState;if(l!==null){i.pending=null;var p=l=l.next;do c=t(c,p.action),p=p.next;while(p!==l);ft(c,n.memoizedState)||($e=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,s]}function Vc(){}function Gc(t,n){var i=ve,s=ct(),l=n(),c=!ft(s.memoizedState,l);if(c&&(s.memoizedState=l,$e=!0),s=s.queue,el(Kc.bind(null,i,s,t),[t]),s.getSnapshot!==n||c||Ae!==null&&Ae.memoizedState.tag&1){if(i.flags|=2048,Ui(9,Xc.bind(null,i,s,l,n),void 0,null),Oe===null)throw Error(a(349));wn&30||$c(i,n,l)}return l}function $c(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function Xc(t,n,i,s){n.value=i,n.getSnapshot=s,Qc(n)&&Yc(t)}function Kc(t,n,i){return i(function(){Qc(n)&&Yc(t)})}function Qc(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!ft(t,i)}catch{return!0}}function Yc(t){var n=Lt(t,1);n!==null&&yt(n,t,1,-1)}function Zc(t){var n=Tt();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n.queue=t,t=t.dispatch=hm.bind(null,ve,t),[n.memoizedState,t]}function Ui(t,n,i,s){return t={tag:t,create:n,destroy:i,deps:s,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=t.next=t):(i=n.lastEffect,i===null?n.lastEffect=t.next=t:(s=i.next,i.next=t,t.next=s,n.lastEffect=t)),t}function ed(){return ct().memoizedState}function Vr(t,n,i,s){var l=Tt();ve.flags|=t,l.memoizedState=Ui(1|n,i,void 0,s===void 0?null:s)}function Gr(t,n,i,s){var l=ct();s=s===void 0?null:s;var c=void 0;if(Pe!==null){var p=Pe.memoizedState;if(c=p.destroy,s!==null&&Xo(s,p.deps)){l.memoizedState=Ui(n,i,c,s);return}}ve.flags|=t,l.memoizedState=Ui(1|n,i,c,s)}function td(t,n){return Vr(8390656,8,t,n)}function el(t,n){return Gr(2048,8,t,n)}function nd(t,n){return Gr(4,2,t,n)}function id(t,n){return Gr(4,4,t,n)}function rd(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function sd(t,n,i){return i=i!=null?i.concat([t]):null,Gr(4,4,rd.bind(null,n,t),i)}function tl(){}function od(t,n){var i=ct();n=n===void 0?null:n;var s=i.memoizedState;return s!==null&&n!==null&&Xo(n,s[1])?s[0]:(i.memoizedState=[t,n],t)}function ld(t,n){var i=ct();n=n===void 0?null:n;var s=i.memoizedState;return s!==null&&n!==null&&Xo(n,s[1])?s[0]:(t=t(),i.memoizedState=[t,n],t)}function ad(t,n,i){return wn&21?(ft(i,n)||(i=Fa(),ve.lanes|=i,Sn|=i,t.baseState=!0),n):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=i)}function dm(t,n){var i=de;de=i!==0&&4>i?i:4,t(!0);var s=$o.transition;$o.transition={};try{t(!1),n()}finally{de=i,$o.transition=s}}function cd(){return ct().memoizedState}function um(t,n,i){var s=sn(t);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},dd(t))ud(n,i);else if(i=Uc(t,n,i,s),i!==null){var l=_e();yt(i,t,s,l),hd(i,n,s)}}function hm(t,n,i){var s=sn(t),l={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(dd(t))ud(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,x=c(p,i);if(l.hasEagerState=!0,l.eagerState=x,ft(x,p)){var j=n.interleaved;j===null?(l.next=l,zo(n)):(l.next=j.next,j.next=l),n.interleaved=l;return}}catch{}finally{}i=Uc(t,n,l,s),i!==null&&(l=_e(),yt(i,t,s,l),hd(i,n,s))}}function dd(t){var n=t.alternate;return t===ve||n!==null&&n===ve}function ud(t,n){Fi=Hr=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function hd(t,n,i){if(i&4194240){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,no(t,i)}}var $r={readContext:at,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},pm={readContext:at,useCallback:function(t,n){return Tt().memoizedState=[t,n===void 0?null:n],t},useContext:at,useEffect:td,useImperativeHandle:function(t,n,i){return i=i!=null?i.concat([t]):null,Vr(4194308,4,rd.bind(null,n,t),i)},useLayoutEffect:function(t,n){return Vr(4194308,4,t,n)},useInsertionEffect:function(t,n){return Vr(4,2,t,n)},useMemo:function(t,n){var i=Tt();return n=n===void 0?null:n,t=t(),i.memoizedState=[t,n],t},useReducer:function(t,n,i){var s=Tt();return n=i!==void 0?i(n):n,s.memoizedState=s.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},s.queue=t,t=t.dispatch=um.bind(null,ve,t),[s.memoizedState,t]},useRef:function(t){var n=Tt();return t={current:t},n.memoizedState=t},useState:Zc,useDebugValue:tl,useDeferredValue:function(t){return Tt().memoizedState=t},useTransition:function(){var t=Zc(!1),n=t[0];return t=dm.bind(null,t[1]),Tt().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,i){var s=ve,l=Tt();if(ge){if(i===void 0)throw Error(a(407));i=i()}else{if(i=n(),Oe===null)throw Error(a(349));wn&30||$c(s,n,i)}l.memoizedState=i;var c={value:i,getSnapshot:n};return l.queue=c,td(Kc.bind(null,s,c,t),[t]),s.flags|=2048,Ui(9,Xc.bind(null,s,c,i,n),void 0,null),i},useId:function(){var t=Tt(),n=Oe.identifierPrefix;if(ge){var i=Mt,s=Rt;i=(s&~(1<<32-mt(s)-1)).toString(32)+i,n=":"+n+"R"+i,i=Wi++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=cm++,n=":"+n+"r"+i.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},mm={readContext:at,useCallback:od,useContext:at,useEffect:el,useImperativeHandle:sd,useInsertionEffect:nd,useLayoutEffect:id,useMemo:ld,useReducer:Yo,useRef:ed,useState:function(){return Yo(Ji)},useDebugValue:tl,useDeferredValue:function(t){var n=ct();return ad(n,Pe.memoizedState,t)},useTransition:function(){var t=Yo(Ji)[0],n=ct().memoizedState;return[t,n]},useMutableSource:Vc,useSyncExternalStore:Gc,useId:cd,unstable_isNewReconciler:!1},fm={readContext:at,useCallback:od,useContext:at,useEffect:el,useImperativeHandle:sd,useInsertionEffect:nd,useLayoutEffect:id,useMemo:ld,useReducer:Zo,useRef:ed,useState:function(){return Zo(Ji)},useDebugValue:tl,useDeferredValue:function(t){var n=ct();return Pe===null?n.memoizedState=t:ad(n,Pe.memoizedState,t)},useTransition:function(){var t=Zo(Ji)[0],n=ct().memoizedState;return[t,n]},useMutableSource:Vc,useSyncExternalStore:Gc,useId:cd,unstable_isNewReconciler:!1};function gt(t,n){if(t&&t.defaultProps){n=U({},n),t=t.defaultProps;for(var i in t)n[i]===void 0&&(n[i]=t[i]);return n}return n}function nl(t,n,i,s){n=t.memoizedState,i=i(s,n),i=i==null?n:U({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Xr={isMounted:function(t){return(t=t._reactInternals)?fn(t)===t:!1},enqueueSetState:function(t,n,i){t=t._reactInternals;var s=_e(),l=sn(t),c=Bt(s,l);c.payload=n,i!=null&&(c.callback=i),n=en(t,c,l),n!==null&&(yt(n,t,l,s),Ur(n,t,l))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var s=_e(),l=sn(t),c=Bt(s,l);c.tag=1,c.payload=n,i!=null&&(c.callback=i),n=en(t,c,l),n!==null&&(yt(n,t,l,s),Ur(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=_e(),s=sn(t),l=Bt(i,s);l.tag=2,n!=null&&(l.callback=n),n=en(t,l,s),n!==null&&(yt(n,t,s,i),Ur(n,t,s))}};function pd(t,n,i,s,l,c,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,p):n.prototype&&n.prototype.isPureReactComponent?!Ti(i,s)||!Ti(l,c):!0}function md(t,n,i){var s=!1,l=Qt,c=n.contextType;return typeof c=="object"&&c!==null?c=at(c):(l=Ge(n)?gn:Be.current,s=n.contextTypes,c=(s=s!=null)?Gn(t,l):Qt),n=new n(i,c),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Xr,t.stateNode=n,n._reactInternals=t,s&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=c),n}function fd(t,n,i,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,s),n.state!==t&&Xr.enqueueReplaceState(n,n.state,null)}function il(t,n,i,s){var l=t.stateNode;l.props=i,l.state=t.memoizedState,l.refs={},_o(t);var c=n.contextType;typeof c=="object"&&c!==null?l.context=at(c):(c=Ge(n)?gn:Be.current,l.context=Gn(t,c)),l.state=t.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(nl(t,n,c,i),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Xr.enqueueReplaceState(l,l.state,null),zr(t,i,l,s),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,n){try{var i="",s=n;do i+=oe(s),s=s.return;while(s);var l=i}catch(c){l=`
Error generating stack: `+c.message+`
`+c.stack}return{value:t,source:n,stack:l,digest:null}}function rl(t,n,i){return{value:t,source:null,stack:i??null,digest:n??null}}function sl(t,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var xm=typeof WeakMap=="function"?WeakMap:Map;function xd(t,n,i){i=Bt(-1,i),i.tag=3,i.payload={element:null};var s=n.value;return i.callback=function(){ns||(ns=!0,yl=s),sl(t,n)},i}function gd(t,n,i){i=Bt(-1,i),i.tag=3;var s=t.type.getDerivedStateFromError;if(typeof s=="function"){var l=n.value;i.payload=function(){return s(l)},i.callback=function(){sl(t,n)}}var c=t.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(i.callback=function(){sl(t,n),typeof s!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})}),i}function jd(t,n,i){var s=t.pingCache;if(s===null){s=t.pingCache=new xm;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(i)||(l.add(i),t=Dm.bind(null,t,n,i),n.then(t,t))}function vd(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function yd(t,n,i,s,l){return t.mode&1?(t.flags|=65536,t.lanes=l,t):(t===n?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Bt(-1,1),n.tag=2,en(i,n,1))),i.lanes|=1),t)}var gm=ie.ReactCurrentOwner,$e=!1;function ze(t,n,i,s){n.child=t===null?Jc(n,null,i,s):Qn(n,t.child,i,s)}function bd(t,n,i,s,l){i=i.render;var c=n.ref;return Zn(n,l),s=Ko(t,n,i,s,c,l),i=Qo(),t!==null&&!$e?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~l,Ft(t,n,l)):(ge&&i&&No(n),n.flags|=1,ze(t,n,s,l),n.child)}function wd(t,n,i,s,l){if(t===null){var c=i.type;return typeof c=="function"&&!Tl(c)&&c.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=c,Sd(t,n,c,s,l)):(t=as(i.type,null,s,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!(t.lanes&l)){var p=c.memoizedProps;if(i=i.compare,i=i!==null?i:Ti,i(p,s)&&t.ref===n.ref)return Ft(t,n,l)}return n.flags|=1,t=ln(c,s),t.ref=n.ref,t.return=n,n.child=t}function Sd(t,n,i,s,l){if(t!==null){var c=t.memoizedProps;if(Ti(c,s)&&t.ref===n.ref)if($e=!1,n.pendingProps=s=c,(t.lanes&l)!==0)t.flags&131072&&($e=!0);else return n.lanes=t.lanes,Ft(t,n,l)}return ol(t,n,i,s,l)}function Ed(t,n,i){var s=n.pendingProps,l=s.children,c=t!==null?t.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(ii,rt),rt|=i;else{if(!(i&1073741824))return t=c!==null?c.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,he(ii,rt),rt|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=c!==null?c.baseLanes:i,he(ii,rt),rt|=s}else c!==null?(s=c.baseLanes|i,n.memoizedState=null):s=i,he(ii,rt),rt|=s;return ze(t,n,l,i),n.child}function Cd(t,n){var i=n.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function ol(t,n,i,s,l){var c=Ge(i)?gn:Be.current;return c=Gn(n,c),Zn(n,l),i=Ko(t,n,i,s,c,l),s=Qo(),t!==null&&!$e?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~l,Ft(t,n,l)):(ge&&s&&No(n),n.flags|=1,ze(t,n,i,l),n.child)}function kd(t,n,i,s,l){if(Ge(i)){var c=!0;Nr(n)}else c=!1;if(Zn(n,l),n.stateNode===null)Qr(t,n),md(n,i,s),il(n,i,s,l),s=!0;else if(t===null){var p=n.stateNode,x=n.memoizedProps;p.props=x;var j=p.context,k=i.contextType;typeof k=="object"&&k!==null?k=at(k):(k=Ge(i)?gn:Be.current,k=Gn(n,k));var N=i.getDerivedStateFromProps,M=typeof N=="function"||typeof p.getSnapshotBeforeUpdate=="function";M||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(x!==s||j!==k)&&fd(n,p,s,k),Zt=!1;var A=n.memoizedState;p.state=A,zr(n,s,p,l),j=n.memoizedState,x!==s||A!==j||Ve.current||Zt?(typeof N=="function"&&(nl(n,i,N,s),j=n.memoizedState),(x=Zt||pd(n,i,x,s,A,j,k))?(M||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=j),p.props=s,p.state=j,p.context=k,s=x):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{p=n.stateNode,zc(t,n),x=n.memoizedProps,k=n.type===n.elementType?x:gt(n.type,x),p.props=k,M=n.pendingProps,A=p.context,j=i.contextType,typeof j=="object"&&j!==null?j=at(j):(j=Ge(i)?gn:Be.current,j=Gn(n,j));var W=i.getDerivedStateFromProps;(N=typeof W=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(x!==M||A!==j)&&fd(n,p,s,j),Zt=!1,A=n.memoizedState,p.state=A,zr(n,s,p,l);var _=n.memoizedState;x!==M||A!==_||Ve.current||Zt?(typeof W=="function"&&(nl(n,i,W,s),_=n.memoizedState),(k=Zt||pd(n,i,k,s,A,_,j)||!1)?(N||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(s,_,j),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(s,_,j)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||x===t.memoizedProps&&A===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&A===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=_),p.props=s,p.state=_,p.context=j,s=k):(typeof p.componentDidUpdate!="function"||x===t.memoizedProps&&A===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&A===t.memoizedState||(n.flags|=1024),s=!1)}return ll(t,n,i,s,c,l)}function ll(t,n,i,s,l,c){Cd(t,n);var p=(n.flags&128)!==0;if(!s&&!p)return l&&Ac(n,i,!1),Ft(t,n,c);s=n.stateNode,gm.current=n;var x=p&&typeof i.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,t!==null&&p?(n.child=Qn(n,t.child,null,c),n.child=Qn(n,null,x,c)):ze(t,n,x,c),n.memoizedState=s.state,l&&Ac(n,i,!0),n.child}function Td(t){var n=t.stateNode;n.pendingContext?Ic(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Ic(t,n.context,!1),qo(t,n.containerInfo)}function Pd(t,n,i,s,l){return Kn(),Bo(l),n.flags|=256,ze(t,n,i,s),n.child}var al={dehydrated:null,treeContext:null,retryLane:0};function cl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Id(t,n,i){var s=n.pendingProps,l=je.current,c=!1,p=(n.flags&128)!==0,x;if((x=p)||(x=t!==null&&t.memoizedState===null?!1:(l&2)!==0),x?(c=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),he(je,l&1),t===null)return Lo(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(n.mode&1?t.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(p=s.children,t=s.fallback,c?(s=n.mode,c=n.child,p={mode:"hidden",children:p},!(s&1)&&c!==null?(c.childLanes=0,c.pendingProps=p):c=cs(p,s,0,null),t=Tn(t,s,i,null),c.return=n,t.return=n,c.sibling=t,n.child=c,n.child.memoizedState=cl(i),n.memoizedState=al,t):dl(n,p));if(l=t.memoizedState,l!==null&&(x=l.dehydrated,x!==null))return jm(t,n,p,s,x,l,i);if(c){c=s.fallback,p=n.mode,l=t.child,x=l.sibling;var j={mode:"hidden",children:s.children};return!(p&1)&&n.child!==l?(s=n.child,s.childLanes=0,s.pendingProps=j,n.deletions=null):(s=ln(l,j),s.subtreeFlags=l.subtreeFlags&14680064),x!==null?c=ln(x,c):(c=Tn(c,p,i,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,p=t.child.memoizedState,p=p===null?cl(i):{baseLanes:p.baseLanes|i,cachePool:null,transitions:p.transitions},c.memoizedState=p,c.childLanes=t.childLanes&~i,n.memoizedState=al,s}return c=t.child,t=c.sibling,s=ln(c,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=i),s.return=n,s.sibling=null,t!==null&&(i=n.deletions,i===null?(n.deletions=[t],n.flags|=16):i.push(t)),n.child=s,n.memoizedState=null,s}function dl(t,n){return n=cs({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function Kr(t,n,i,s){return s!==null&&Bo(s),Qn(n,t.child,null,i),t=dl(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function jm(t,n,i,s,l,c,p){if(i)return n.flags&256?(n.flags&=-257,s=rl(Error(a(422))),Kr(t,n,p,s)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(c=s.fallback,l=n.mode,s=cs({mode:"visible",children:s.children},l,0,null),c=Tn(c,l,p,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,n.mode&1&&Qn(n,t.child,null,p),n.child.memoizedState=cl(p),n.memoizedState=al,c);if(!(n.mode&1))return Kr(t,n,p,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var x=s.dgst;return s=x,c=Error(a(419)),s=rl(c,s,void 0),Kr(t,n,p,s)}if(x=(p&t.childLanes)!==0,$e||x){if(s=Oe,s!==null){switch(p&-p){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(s.suspendedLanes|p)?0:l,l!==0&&l!==c.retryLane&&(c.retryLane=l,Lt(t,l),yt(s,t,l,-1))}return kl(),s=rl(Error(a(421))),Kr(t,n,p,s)}return l.data==="$?"?(n.flags|=128,n.child=t.child,n=Am.bind(null,t),l._reactRetry=n,null):(t=c.treeContext,it=Xt(l.nextSibling),nt=n,ge=!0,xt=null,t!==null&&(ot[lt++]=Rt,ot[lt++]=Mt,ot[lt++]=jn,Rt=t.id,Mt=t.overflow,jn=n),n=dl(n,s.children),n.flags|=4096,n)}function Dd(t,n,i){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Uo(t.return,n,i)}function ul(t,n,i,s,l){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:l}:(c.isBackwards=n,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=i,c.tailMode=l)}function Ad(t,n,i){var s=n.pendingProps,l=s.revealOrder,c=s.tail;if(ze(t,n,s.children,i),s=je.current,s&2)s=s&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dd(t,i,n);else if(t.tag===19)Dd(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}if(he(je,s),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(i=n.child,l=null;i!==null;)t=i.alternate,t!==null&&_r(t)===null&&(l=i),i=i.sibling;i=l,i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),ul(n,!1,l,i,c);break;case"backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&_r(t)===null){n.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}ul(n,!0,i,null,c);break;case"together":ul(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Qr(t,n){!(n.mode&1)&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function Ft(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Sn|=n.lanes,!(i&n.childLanes))return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,i=ln(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=ln(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function vm(t,n,i){switch(n.tag){case 3:Td(n),Kn();break;case 5:Hc(n);break;case 1:Ge(n.type)&&Nr(n);break;case 4:qo(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,l=n.memoizedProps.value;he(Wr,s._currentValue),s._currentValue=l;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(he(je,je.current&1),n.flags|=128,null):i&n.child.childLanes?Id(t,n,i):(he(je,je.current&1),t=Ft(t,n,i),t!==null?t.sibling:null);he(je,je.current&1);break;case 19:if(s=(i&n.childLanes)!==0,t.flags&128){if(s)return Ad(t,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),he(je,je.current),s)break;return null;case 22:case 23:return n.lanes=0,Ed(t,n,i)}return Ft(t,n,i)}var Od,hl,Nd,Rd;Od=function(t,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},hl=function(){},Nd=function(t,n,i,s){var l=t.memoizedProps;if(l!==s){t=n.stateNode,bn(kt.current);var c=null;switch(i){case"input":l=Js(t,l),s=Js(t,s),c=[];break;case"select":l=U({},l,{value:void 0}),s=U({},s,{value:void 0}),c=[];break;case"textarea":l=_s(t,l),s=_s(t,s),c=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(t.onclick=Dr)}Hs(i,s);var p;i=null;for(k in l)if(!s.hasOwnProperty(k)&&l.hasOwnProperty(k)&&l[k]!=null)if(k==="style"){var x=l[k];for(p in x)x.hasOwnProperty(p)&&(i||(i={}),i[p]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(u.hasOwnProperty(k)?c||(c=[]):(c=c||[]).push(k,null));for(k in s){var j=s[k];if(x=l!=null?l[k]:void 0,s.hasOwnProperty(k)&&j!==x&&(j!=null||x!=null))if(k==="style")if(x){for(p in x)!x.hasOwnProperty(p)||j&&j.hasOwnProperty(p)||(i||(i={}),i[p]="");for(p in j)j.hasOwnProperty(p)&&x[p]!==j[p]&&(i||(i={}),i[p]=j[p])}else i||(c||(c=[]),c.push(k,i)),i=j;else k==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,x=x?x.__html:void 0,j!=null&&x!==j&&(c=c||[]).push(k,j)):k==="children"?typeof j!="string"&&typeof j!="number"||(c=c||[]).push(k,""+j):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(u.hasOwnProperty(k)?(j!=null&&k==="onScroll"&&pe("scroll",t),c||x===j||(c=[])):(c=c||[]).push(k,j))}i&&(c=c||[]).push("style",i);var k=c;(n.updateQueue=k)&&(n.flags|=4)}},Rd=function(t,n,i,s){i!==s&&(n.flags|=4)};function zi(t,n){if(!ge)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,s=0;if(n)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=i,n}function ym(t,n,i){var s=n.pendingProps;switch(Ro(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return Ge(n.type)&&Or(),We(n),null;case 3:return s=n.stateNode,ei(),me(Ve),me(Be),Go(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Br(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,xt!==null&&(Sl(xt),xt=null))),hl(t,n),We(n),null;case 5:Ho(n);var l=bn(Bi.current);if(i=n.type,t!==null&&n.stateNode!=null)Nd(t,n,i,s,l),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(a(166));return We(n),null}if(t=bn(kt.current),Br(n)){s=n.stateNode,i=n.type;var c=n.memoizedProps;switch(s[Ct]=n,s[Oi]=c,t=(n.mode&1)!==0,i){case"dialog":pe("cancel",s),pe("close",s);break;case"iframe":case"object":case"embed":pe("load",s);break;case"video":case"audio":for(l=0;l<Ii.length;l++)pe(Ii[l],s);break;case"source":pe("error",s);break;case"img":case"image":case"link":pe("error",s),pe("load",s);break;case"details":pe("toggle",s);break;case"input":ma(s,c),pe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!c.multiple},pe("invalid",s);break;case"textarea":ga(s,c),pe("invalid",s)}Hs(i,c),l=null;for(var p in c)if(c.hasOwnProperty(p)){var x=c[p];p==="children"?typeof x=="string"?s.textContent!==x&&(c.suppressHydrationWarning!==!0&&Ir(s.textContent,x,t),l=["children",x]):typeof x=="number"&&s.textContent!==""+x&&(c.suppressHydrationWarning!==!0&&Ir(s.textContent,x,t),l=["children",""+x]):u.hasOwnProperty(p)&&x!=null&&p==="onScroll"&&pe("scroll",s)}switch(i){case"input":or(s),xa(s,c,!0);break;case"textarea":or(s),va(s);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(s.onclick=Dr)}s=l,n.updateQueue=s,s!==null&&(n.flags|=4)}else{p=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ya(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=p.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof s.is=="string"?t=p.createElement(i,{is:s.is}):(t=p.createElement(i),i==="select"&&(p=t,s.multiple?p.multiple=!0:s.size&&(p.size=s.size))):t=p.createElementNS(t,i),t[Ct]=n,t[Oi]=s,Od(t,n,!1,!1),n.stateNode=t;e:{switch(p=Vs(i,s),i){case"dialog":pe("cancel",t),pe("close",t),l=s;break;case"iframe":case"object":case"embed":pe("load",t),l=s;break;case"video":case"audio":for(l=0;l<Ii.length;l++)pe(Ii[l],t);l=s;break;case"source":pe("error",t),l=s;break;case"img":case"image":case"link":pe("error",t),pe("load",t),l=s;break;case"details":pe("toggle",t),l=s;break;case"input":ma(t,s),l=Js(t,s),pe("invalid",t);break;case"option":l=s;break;case"select":t._wrapperState={wasMultiple:!!s.multiple},l=U({},s,{value:void 0}),pe("invalid",t);break;case"textarea":ga(t,s),l=_s(t,s),pe("invalid",t);break;default:l=s}Hs(i,l),x=l;for(c in x)if(x.hasOwnProperty(c)){var j=x[c];c==="style"?Sa(t,j):c==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&ba(t,j)):c==="children"?typeof j=="string"?(i!=="textarea"||j!=="")&&di(t,j):typeof j=="number"&&di(t,""+j):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?j!=null&&c==="onScroll"&&pe("scroll",t):j!=null&&X(t,c,j,p))}switch(i){case"input":or(t),xa(t,s,!1);break;case"textarea":or(t),va(t);break;case"option":s.value!=null&&t.setAttribute("value",""+ce(s.value));break;case"select":t.multiple=!!s.multiple,c=s.value,c!=null?Mn(t,!!s.multiple,c,!1):s.defaultValue!=null&&Mn(t,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=Dr)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return We(n),null;case 6:if(t&&n.stateNode!=null)Rd(t,n,t.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(a(166));if(i=bn(Bi.current),bn(kt.current),Br(n)){if(s=n.stateNode,i=n.memoizedProps,s[Ct]=n,(c=s.nodeValue!==i)&&(t=nt,t!==null))switch(t.tag){case 3:Ir(s.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ir(s.nodeValue,i,(t.mode&1)!==0)}c&&(n.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[Ct]=n,n.stateNode=s}return We(n),null;case 13:if(me(je),s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&it!==null&&n.mode&1&&!(n.flags&128))Bc(),Kn(),n.flags|=98560,c=!1;else if(c=Br(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[Ct]=n}else Kn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else xt!==null&&(Sl(xt),xt=null),c=!0;if(!c)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(s=s!==null,s!==(t!==null&&t.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(t===null||je.current&1?Ie===0&&(Ie=3):kl())),n.updateQueue!==null&&(n.flags|=4),We(n),null);case 4:return ei(),hl(t,n),t===null&&Di(n.stateNode.containerInfo),We(n),null;case 10:return Jo(n.type._context),We(n),null;case 17:return Ge(n.type)&&Or(),We(n),null;case 19:if(me(je),c=n.memoizedState,c===null)return We(n),null;if(s=(n.flags&128)!==0,p=c.rendering,p===null)if(s)zi(c,!1);else{if(Ie!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(p=_r(t),p!==null){for(n.flags|=128,zi(c,!1),s=p.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=i,i=n.child;i!==null;)c=i,t=s,c.flags&=14680066,p=c.alternate,p===null?(c.childLanes=0,c.lanes=t,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=p.childLanes,c.lanes=p.lanes,c.child=p.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=p.memoizedProps,c.memoizedState=p.memoizedState,c.updateQueue=p.updateQueue,c.type=p.type,t=p.dependencies,c.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return he(je,je.current&1|2),n.child}t=t.sibling}c.tail!==null&&Ee()>ri&&(n.flags|=128,s=!0,zi(c,!1),n.lanes=4194304)}else{if(!s)if(t=_r(p),t!==null){if(n.flags|=128,s=!0,i=t.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),zi(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!ge)return We(n),null}else 2*Ee()-c.renderingStartTime>ri&&i!==1073741824&&(n.flags|=128,s=!0,zi(c,!1),n.lanes=4194304);c.isBackwards?(p.sibling=n.child,n.child=p):(i=c.last,i!==null?i.sibling=p:n.child=p,c.last=p)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Ee(),n.sibling=null,i=je.current,he(je,s?i&1|2:i&1),n):(We(n),null);case 22:case 23:return Cl(),s=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?rt&1073741824&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),null;case 24:return null;case 25:return null}throw Error(a(156,n.tag))}function bm(t,n){switch(Ro(n),n.tag){case 1:return Ge(n.type)&&Or(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ei(),me(Ve),me(Be),Go(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 5:return Ho(n),null;case 13:if(me(je),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Kn()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return me(je),null;case 4:return ei(),null;case 10:return Jo(n.type._context),null;case 22:case 23:return Cl(),null;case 24:return null;default:return null}}var Yr=!1,Je=!1,wm=typeof WeakSet=="function"?WeakSet:Set,J=null;function ni(t,n){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){Se(t,n,s)}else i.current=null}function pl(t,n,i){try{i()}catch(s){Se(t,n,s)}}var Md=!1;function Sm(t,n){if(Co=jr,t=pc(),go(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var l=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break e}var p=0,x=-1,j=-1,k=0,N=0,M=t,A=null;t:for(;;){for(var W;M!==i||l!==0&&M.nodeType!==3||(x=p+l),M!==c||s!==0&&M.nodeType!==3||(j=p+s),M.nodeType===3&&(p+=M.nodeValue.length),(W=M.firstChild)!==null;)A=M,M=W;for(;;){if(M===t)break t;if(A===i&&++k===l&&(x=p),A===c&&++N===s&&(j=p),(W=M.nextSibling)!==null)break;M=A,A=M.parentNode}M=W}i=x===-1||j===-1?null:{start:x,end:j}}else i=null}i=i||{start:0,end:0}}else i=null;for(ko={focusedElem:t,selectionRange:i},jr=!1,J=n;J!==null;)if(n=J,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,J=t;else for(;J!==null;){n=J;try{var _=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var q=_.memoizedProps,Ce=_.memoizedState,E=n.stateNode,b=E.getSnapshotBeforeUpdate(n.elementType===n.type?q:gt(n.type,q),Ce);E.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var C=n.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(B){Se(n,n.return,B)}if(t=n.sibling,t!==null){t.return=n.return,J=t;break}J=n.return}return _=Md,Md=!1,_}function _i(t,n,i){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&t)===t){var c=l.destroy;l.destroy=void 0,c!==void 0&&pl(n,i,c)}l=l.next}while(l!==s)}}function Zr(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var s=i.create;i.destroy=s()}i=i.next}while(i!==n)}}function ml(t){var n=t.ref;if(n!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof n=="function"?n(t):n.current=t}}function Ld(t){var n=t.alternate;n!==null&&(t.alternate=null,Ld(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[Ct],delete n[Oi],delete n[Do],delete n[sm],delete n[om])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bd(t){return t.tag===5||t.tag===3||t.tag===4}function Fd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fl(t,n,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(t,n):i.insertBefore(t,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(t,i)):(n=i,n.appendChild(t)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Dr));else if(s!==4&&(t=t.child,t!==null))for(fl(t,n,i),t=t.sibling;t!==null;)fl(t,n,i),t=t.sibling}function xl(t,n,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(s!==4&&(t=t.child,t!==null))for(xl(t,n,i),t=t.sibling;t!==null;)xl(t,n,i),t=t.sibling}var Me=null,jt=!1;function tn(t,n,i){for(i=i.child;i!==null;)Wd(t,n,i),i=i.sibling}function Wd(t,n,i){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(hr,i)}catch{}switch(i.tag){case 5:Je||ni(i,n);case 6:var s=Me,l=jt;Me=null,tn(t,n,i),Me=s,jt=l,Me!==null&&(jt?(t=Me,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):Me.removeChild(i.stateNode));break;case 18:Me!==null&&(jt?(t=Me,i=i.stateNode,t.nodeType===8?Io(t.parentNode,i):t.nodeType===1&&Io(t,i),bi(t)):Io(Me,i.stateNode));break;case 4:s=Me,l=jt,Me=i.stateNode.containerInfo,jt=!0,tn(t,n,i),Me=s,jt=l;break;case 0:case 11:case 14:case 15:if(!Je&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var c=l,p=c.destroy;c=c.tag,p!==void 0&&(c&2||c&4)&&pl(i,n,p),l=l.next}while(l!==s)}tn(t,n,i);break;case 1:if(!Je&&(ni(i,n),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(x){Se(i,n,x)}tn(t,n,i);break;case 21:tn(t,n,i);break;case 22:i.mode&1?(Je=(s=Je)||i.memoizedState!==null,tn(t,n,i),Je=s):tn(t,n,i);break;default:tn(t,n,i)}}function Jd(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new wm),n.forEach(function(s){var l=Om.bind(null,t,s);i.has(s)||(i.add(s),s.then(l,l))})}}function vt(t,n){var i=n.deletions;if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];try{var c=t,p=n,x=p;e:for(;x!==null;){switch(x.tag){case 5:Me=x.stateNode,jt=!1;break e;case 3:Me=x.stateNode.containerInfo,jt=!0;break e;case 4:Me=x.stateNode.containerInfo,jt=!0;break e}x=x.return}if(Me===null)throw Error(a(160));Wd(c,p,l),Me=null,jt=!1;var j=l.alternate;j!==null&&(j.return=null),l.return=null}catch(k){Se(l,n,k)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ud(n,t),n=n.sibling}function Ud(t,n){var i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vt(n,t),Pt(t),s&4){try{_i(3,t,t.return),Zr(3,t)}catch(q){Se(t,t.return,q)}try{_i(5,t,t.return)}catch(q){Se(t,t.return,q)}}break;case 1:vt(n,t),Pt(t),s&512&&i!==null&&ni(i,i.return);break;case 5:if(vt(n,t),Pt(t),s&512&&i!==null&&ni(i,i.return),t.flags&32){var l=t.stateNode;try{di(l,"")}catch(q){Se(t,t.return,q)}}if(s&4&&(l=t.stateNode,l!=null)){var c=t.memoizedProps,p=i!==null?i.memoizedProps:c,x=t.type,j=t.updateQueue;if(t.updateQueue=null,j!==null)try{x==="input"&&c.type==="radio"&&c.name!=null&&fa(l,c),Vs(x,p);var k=Vs(x,c);for(p=0;p<j.length;p+=2){var N=j[p],M=j[p+1];N==="style"?Sa(l,M):N==="dangerouslySetInnerHTML"?ba(l,M):N==="children"?di(l,M):X(l,N,M,k)}switch(x){case"input":Us(l,c);break;case"textarea":ja(l,c);break;case"select":var A=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!c.multiple;var W=c.value;W!=null?Mn(l,!!c.multiple,W,!1):A!==!!c.multiple&&(c.defaultValue!=null?Mn(l,!!c.multiple,c.defaultValue,!0):Mn(l,!!c.multiple,c.multiple?[]:"",!1))}l[Oi]=c}catch(q){Se(t,t.return,q)}}break;case 6:if(vt(n,t),Pt(t),s&4){if(t.stateNode===null)throw Error(a(162));l=t.stateNode,c=t.memoizedProps;try{l.nodeValue=c}catch(q){Se(t,t.return,q)}}break;case 3:if(vt(n,t),Pt(t),s&4&&i!==null&&i.memoizedState.isDehydrated)try{bi(n.containerInfo)}catch(q){Se(t,t.return,q)}break;case 4:vt(n,t),Pt(t);break;case 13:vt(n,t),Pt(t),l=t.child,l.flags&8192&&(c=l.memoizedState!==null,l.stateNode.isHidden=c,!c||l.alternate!==null&&l.alternate.memoizedState!==null||(vl=Ee())),s&4&&Jd(t);break;case 22:if(N=i!==null&&i.memoizedState!==null,t.mode&1?(Je=(k=Je)||N,vt(n,t),Je=k):vt(n,t),Pt(t),s&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!N&&t.mode&1)for(J=t,N=t.child;N!==null;){for(M=J=N;J!==null;){switch(A=J,W=A.child,A.tag){case 0:case 11:case 14:case 15:_i(4,A,A.return);break;case 1:ni(A,A.return);var _=A.stateNode;if(typeof _.componentWillUnmount=="function"){s=A,i=A.return;try{n=s,_.props=n.memoizedProps,_.state=n.memoizedState,_.componentWillUnmount()}catch(q){Se(s,i,q)}}break;case 5:ni(A,A.return);break;case 22:if(A.memoizedState!==null){qd(M);continue}}W!==null?(W.return=A,J=W):qd(M)}N=N.sibling}e:for(N=null,M=t;;){if(M.tag===5){if(N===null){N=M;try{l=M.stateNode,k?(c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(x=M.stateNode,j=M.memoizedProps.style,p=j!=null&&j.hasOwnProperty("display")?j.display:null,x.style.display=wa("display",p))}catch(q){Se(t,t.return,q)}}}else if(M.tag===6){if(N===null)try{M.stateNode.nodeValue=k?"":M.memoizedProps}catch(q){Se(t,t.return,q)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===t)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===t)break e;for(;M.sibling===null;){if(M.return===null||M.return===t)break e;N===M&&(N=null),M=M.return}N===M&&(N=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:vt(n,t),Pt(t),s&4&&Jd(t);break;case 21:break;default:vt(n,t),Pt(t)}}function Pt(t){var n=t.flags;if(n&2){try{e:{for(var i=t.return;i!==null;){if(Bd(i)){var s=i;break e}i=i.return}throw Error(a(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(di(l,""),s.flags&=-33);var c=Fd(t);xl(t,c,l);break;case 3:case 4:var p=s.stateNode.containerInfo,x=Fd(t);fl(t,x,p);break;default:throw Error(a(161))}}catch(j){Se(t,t.return,j)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Em(t,n,i){J=t,zd(t)}function zd(t,n,i){for(var s=(t.mode&1)!==0;J!==null;){var l=J,c=l.child;if(l.tag===22&&s){var p=l.memoizedState!==null||Yr;if(!p){var x=l.alternate,j=x!==null&&x.memoizedState!==null||Je;x=Yr;var k=Je;if(Yr=p,(Je=j)&&!k)for(J=l;J!==null;)p=J,j=p.child,p.tag===22&&p.memoizedState!==null?Hd(l):j!==null?(j.return=p,J=j):Hd(l);for(;c!==null;)J=c,zd(c),c=c.sibling;J=l,Yr=x,Je=k}_d(t)}else l.subtreeFlags&8772&&c!==null?(c.return=l,J=c):_d(t)}}function _d(t){for(;J!==null;){var n=J;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Je||Zr(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!Je)if(i===null)s.componentDidMount();else{var l=n.elementType===n.type?i.memoizedProps:gt(n.type,i.memoizedProps);s.componentDidUpdate(l,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var c=n.updateQueue;c!==null&&qc(n,c,s);break;case 3:var p=n.updateQueue;if(p!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}qc(n,p,i)}break;case 5:var x=n.stateNode;if(i===null&&n.flags&4){i=x;var j=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&i.focus();break;case"img":j.src&&(i.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var k=n.alternate;if(k!==null){var N=k.memoizedState;if(N!==null){var M=N.dehydrated;M!==null&&bi(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Je||n.flags&512&&ml(n)}catch(A){Se(n,n.return,A)}}if(n===t){J=null;break}if(i=n.sibling,i!==null){i.return=n.return,J=i;break}J=n.return}}function qd(t){for(;J!==null;){var n=J;if(n===t){J=null;break}var i=n.sibling;if(i!==null){i.return=n.return,J=i;break}J=n.return}}function Hd(t){for(;J!==null;){var n=J;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Zr(4,n)}catch(j){Se(n,i,j)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var l=n.return;try{s.componentDidMount()}catch(j){Se(n,l,j)}}var c=n.return;try{ml(n)}catch(j){Se(n,c,j)}break;case 5:var p=n.return;try{ml(n)}catch(j){Se(n,p,j)}}}catch(j){Se(n,n.return,j)}if(n===t){J=null;break}var x=n.sibling;if(x!==null){x.return=n.return,J=x;break}J=n.return}}var Cm=Math.ceil,es=ie.ReactCurrentDispatcher,gl=ie.ReactCurrentOwner,dt=ie.ReactCurrentBatchConfig,se=0,Oe=null,ke=null,Le=0,rt=0,ii=Kt(0),Ie=0,qi=null,Sn=0,ts=0,jl=0,Hi=null,Xe=null,vl=0,ri=1/0,Wt=null,ns=!1,yl=null,nn=null,is=!1,rn=null,rs=0,Vi=0,bl=null,ss=-1,os=0;function _e(){return se&6?Ee():ss!==-1?ss:ss=Ee()}function sn(t){return t.mode&1?se&2&&Le!==0?Le&-Le:am.transition!==null?(os===0&&(os=Fa()),os):(t=de,t!==0||(t=window.event,t=t===void 0?16:Ga(t.type)),t):1}function yt(t,n,i,s){if(50<Vi)throw Vi=0,bl=null,Error(a(185));xi(t,i,s),(!(se&2)||t!==Oe)&&(t===Oe&&(!(se&2)&&(ts|=i),Ie===4&&on(t,Le)),Ke(t,s),i===1&&se===0&&!(n.mode&1)&&(ri=Ee()+500,Rr&&Yt()))}function Ke(t,n){var i=t.callbackNode;ap(t,n);var s=fr(t,t===Oe?Le:0);if(s===0)i!==null&&Ma(i),t.callbackNode=null,t.callbackPriority=0;else if(n=s&-s,t.callbackPriority!==n){if(i!=null&&Ma(i),n===1)t.tag===0?lm(Gd.bind(null,t)):Oc(Gd.bind(null,t)),im(function(){!(se&6)&&Yt()}),i=null;else{switch(Wa(s)){case 1:i=Zs;break;case 4:i=La;break;case 16:i=ur;break;case 536870912:i=Ba;break;default:i=ur}i=tu(i,Vd.bind(null,t))}t.callbackPriority=n,t.callbackNode=i}}function Vd(t,n){if(ss=-1,os=0,se&6)throw Error(a(327));var i=t.callbackNode;if(si()&&t.callbackNode!==i)return null;var s=fr(t,t===Oe?Le:0);if(s===0)return null;if(s&30||s&t.expiredLanes||n)n=ls(t,s);else{n=s;var l=se;se|=2;var c=Xd();(Oe!==t||Le!==n)&&(Wt=null,ri=Ee()+500,Cn(t,n));do try{Pm();break}catch(x){$d(t,x)}while(!0);Wo(),es.current=c,se=l,ke!==null?n=0:(Oe=null,Le=0,n=Ie)}if(n!==0){if(n===2&&(l=eo(t),l!==0&&(s=l,n=wl(t,l))),n===1)throw i=qi,Cn(t,0),on(t,s),Ke(t,Ee()),i;if(n===6)on(t,s);else{if(l=t.current.alternate,!(s&30)&&!km(l)&&(n=ls(t,s),n===2&&(c=eo(t),c!==0&&(s=c,n=wl(t,c))),n===1))throw i=qi,Cn(t,0),on(t,s),Ke(t,Ee()),i;switch(t.finishedWork=l,t.finishedLanes=s,n){case 0:case 1:throw Error(a(345));case 2:kn(t,Xe,Wt);break;case 3:if(on(t,s),(s&130023424)===s&&(n=vl+500-Ee(),10<n)){if(fr(t,0)!==0)break;if(l=t.suspendedLanes,(l&s)!==s){_e(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=Po(kn.bind(null,t,Xe,Wt),n);break}kn(t,Xe,Wt);break;case 4:if(on(t,s),(s&4194240)===s)break;for(n=t.eventTimes,l=-1;0<s;){var p=31-mt(s);c=1<<p,p=n[p],p>l&&(l=p),s&=~c}if(s=l,s=Ee()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Cm(s/1960))-s,10<s){t.timeoutHandle=Po(kn.bind(null,t,Xe,Wt),s);break}kn(t,Xe,Wt);break;case 5:kn(t,Xe,Wt);break;default:throw Error(a(329))}}}return Ke(t,Ee()),t.callbackNode===i?Vd.bind(null,t):null}function wl(t,n){var i=Hi;return t.current.memoizedState.isDehydrated&&(Cn(t,n).flags|=256),t=ls(t,n),t!==2&&(n=Xe,Xe=i,n!==null&&Sl(n)),t}function Sl(t){Xe===null?Xe=t:Xe.push.apply(Xe,t)}function km(t){for(var n=t;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var l=i[s],c=l.getSnapshot;l=l.value;try{if(!ft(c(),l))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function on(t,n){for(n&=~jl,n&=~ts,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var i=31-mt(n),s=1<<i;t[i]=-1,n&=~s}}function Gd(t){if(se&6)throw Error(a(327));si();var n=fr(t,0);if(!(n&1))return Ke(t,Ee()),null;var i=ls(t,n);if(t.tag!==0&&i===2){var s=eo(t);s!==0&&(n=s,i=wl(t,s))}if(i===1)throw i=qi,Cn(t,0),on(t,n),Ke(t,Ee()),i;if(i===6)throw Error(a(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,kn(t,Xe,Wt),Ke(t,Ee()),null}function El(t,n){var i=se;se|=1;try{return t(n)}finally{se=i,se===0&&(ri=Ee()+500,Rr&&Yt())}}function En(t){rn!==null&&rn.tag===0&&!(se&6)&&si();var n=se;se|=1;var i=dt.transition,s=de;try{if(dt.transition=null,de=1,t)return t()}finally{de=s,dt.transition=i,se=n,!(se&6)&&Yt()}}function Cl(){rt=ii.current,me(ii)}function Cn(t,n){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,nm(i)),ke!==null)for(i=ke.return;i!==null;){var s=i;switch(Ro(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Or();break;case 3:ei(),me(Ve),me(Be),Go();break;case 5:Ho(s);break;case 4:ei();break;case 13:me(je);break;case 19:me(je);break;case 10:Jo(s.type._context);break;case 22:case 23:Cl()}i=i.return}if(Oe=t,ke=t=ln(t.current,null),Le=rt=n,Ie=0,qi=null,jl=ts=Sn=0,Xe=Hi=null,yn!==null){for(n=0;n<yn.length;n++)if(i=yn[n],s=i.interleaved,s!==null){i.interleaved=null;var l=s.next,c=i.pending;if(c!==null){var p=c.next;c.next=l,s.next=p}i.pending=s}yn=null}return t}function $d(t,n){do{var i=ke;try{if(Wo(),qr.current=$r,Hr){for(var s=ve.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}Hr=!1}if(wn=0,Ae=Pe=ve=null,Fi=!1,Wi=0,gl.current=null,i===null||i.return===null){Ie=1,qi=n,ke=null;break}e:{var c=t,p=i.return,x=i,j=n;if(n=Le,x.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var k=j,N=x,M=N.tag;if(!(N.mode&1)&&(M===0||M===11||M===15)){var A=N.alternate;A?(N.updateQueue=A.updateQueue,N.memoizedState=A.memoizedState,N.lanes=A.lanes):(N.updateQueue=null,N.memoizedState=null)}var W=vd(p);if(W!==null){W.flags&=-257,yd(W,p,x,c,n),W.mode&1&&jd(c,k,n),n=W,j=k;var _=n.updateQueue;if(_===null){var q=new Set;q.add(j),n.updateQueue=q}else _.add(j);break e}else{if(!(n&1)){jd(c,k,n),kl();break e}j=Error(a(426))}}else if(ge&&x.mode&1){var Ce=vd(p);if(Ce!==null){!(Ce.flags&65536)&&(Ce.flags|=256),yd(Ce,p,x,c,n),Bo(ti(j,x));break e}}c=j=ti(j,x),Ie!==4&&(Ie=2),Hi===null?Hi=[c]:Hi.push(c),c=p;do{switch(c.tag){case 3:c.flags|=65536,n&=-n,c.lanes|=n;var E=xd(c,j,n);_c(c,E);break e;case 1:x=j;var b=c.type,C=c.stateNode;if(!(c.flags&128)&&(typeof b.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(nn===null||!nn.has(C)))){c.flags|=65536,n&=-n,c.lanes|=n;var B=gd(c,x,n);_c(c,B);break e}}c=c.return}while(c!==null)}Qd(i)}catch(H){n=H,ke===i&&i!==null&&(ke=i=i.return);continue}break}while(!0)}function Xd(){var t=es.current;return es.current=$r,t===null?$r:t}function kl(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Oe===null||!(Sn&268435455)&&!(ts&268435455)||on(Oe,Le)}function ls(t,n){var i=se;se|=2;var s=Xd();(Oe!==t||Le!==n)&&(Wt=null,Cn(t,n));do try{Tm();break}catch(l){$d(t,l)}while(!0);if(Wo(),se=i,es.current=s,ke!==null)throw Error(a(261));return Oe=null,Le=0,Ie}function Tm(){for(;ke!==null;)Kd(ke)}function Pm(){for(;ke!==null&&!Zh();)Kd(ke)}function Kd(t){var n=eu(t.alternate,t,rt);t.memoizedProps=t.pendingProps,n===null?Qd(t):ke=n,gl.current=null}function Qd(t){var n=t;do{var i=n.alternate;if(t=n.return,n.flags&32768){if(i=bm(i,n),i!==null){i.flags&=32767,ke=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ie=6,ke=null;return}}else if(i=ym(i,n,rt),i!==null){ke=i;return}if(n=n.sibling,n!==null){ke=n;return}ke=n=t}while(n!==null);Ie===0&&(Ie=5)}function kn(t,n,i){var s=de,l=dt.transition;try{dt.transition=null,de=1,Im(t,n,i,s)}finally{dt.transition=l,de=s}return null}function Im(t,n,i,s){do si();while(rn!==null);if(se&6)throw Error(a(327));i=t.finishedWork;var l=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(a(177));t.callbackNode=null,t.callbackPriority=0;var c=i.lanes|i.childLanes;if(cp(t,c),t===Oe&&(ke=Oe=null,Le=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||is||(is=!0,tu(ur,function(){return si(),null})),c=(i.flags&15990)!==0,i.subtreeFlags&15990||c){c=dt.transition,dt.transition=null;var p=de;de=1;var x=se;se|=4,gl.current=null,Sm(t,i),Ud(i,t),Xp(ko),jr=!!Co,ko=Co=null,t.current=i,Em(i),ep(),se=x,de=p,dt.transition=c}else t.current=i;if(is&&(is=!1,rn=t,rs=l),c=t.pendingLanes,c===0&&(nn=null),ip(i.stateNode),Ke(t,Ee()),n!==null)for(s=t.onRecoverableError,i=0;i<n.length;i++)l=n[i],s(l.value,{componentStack:l.stack,digest:l.digest});if(ns)throw ns=!1,t=yl,yl=null,t;return rs&1&&t.tag!==0&&si(),c=t.pendingLanes,c&1?t===bl?Vi++:(Vi=0,bl=t):Vi=0,Yt(),null}function si(){if(rn!==null){var t=Wa(rs),n=dt.transition,i=de;try{if(dt.transition=null,de=16>t?16:t,rn===null)var s=!1;else{if(t=rn,rn=null,rs=0,se&6)throw Error(a(331));var l=se;for(se|=4,J=t.current;J!==null;){var c=J,p=c.child;if(J.flags&16){var x=c.deletions;if(x!==null){for(var j=0;j<x.length;j++){var k=x[j];for(J=k;J!==null;){var N=J;switch(N.tag){case 0:case 11:case 15:_i(8,N,c)}var M=N.child;if(M!==null)M.return=N,J=M;else for(;J!==null;){N=J;var A=N.sibling,W=N.return;if(Ld(N),N===k){J=null;break}if(A!==null){A.return=W,J=A;break}J=W}}}var _=c.alternate;if(_!==null){var q=_.child;if(q!==null){_.child=null;do{var Ce=q.sibling;q.sibling=null,q=Ce}while(q!==null)}}J=c}}if(c.subtreeFlags&2064&&p!==null)p.return=c,J=p;else e:for(;J!==null;){if(c=J,c.flags&2048)switch(c.tag){case 0:case 11:case 15:_i(9,c,c.return)}var E=c.sibling;if(E!==null){E.return=c.return,J=E;break e}J=c.return}}var b=t.current;for(J=b;J!==null;){p=J;var C=p.child;if(p.subtreeFlags&2064&&C!==null)C.return=p,J=C;else e:for(p=b;J!==null;){if(x=J,x.flags&2048)try{switch(x.tag){case 0:case 11:case 15:Zr(9,x)}}catch(H){Se(x,x.return,H)}if(x===p){J=null;break e}var B=x.sibling;if(B!==null){B.return=x.return,J=B;break e}J=x.return}}if(se=l,Yt(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(hr,t)}catch{}s=!0}return s}finally{de=i,dt.transition=n}}return!1}function Yd(t,n,i){n=ti(i,n),n=xd(t,n,1),t=en(t,n,1),n=_e(),t!==null&&(xi(t,1,n),Ke(t,n))}function Se(t,n,i){if(t.tag===3)Yd(t,t,i);else for(;n!==null;){if(n.tag===3){Yd(n,t,i);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(nn===null||!nn.has(s))){t=ti(i,t),t=gd(n,t,1),n=en(n,t,1),t=_e(),n!==null&&(xi(n,1,t),Ke(n,t));break}}n=n.return}}function Dm(t,n,i){var s=t.pingCache;s!==null&&s.delete(n),n=_e(),t.pingedLanes|=t.suspendedLanes&i,Oe===t&&(Le&i)===i&&(Ie===4||Ie===3&&(Le&130023424)===Le&&500>Ee()-vl?Cn(t,0):jl|=i),Ke(t,n)}function Zd(t,n){n===0&&(t.mode&1?(n=mr,mr<<=1,!(mr&130023424)&&(mr=4194304)):n=1);var i=_e();t=Lt(t,n),t!==null&&(xi(t,n,i),Ke(t,i))}function Am(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),Zd(t,i)}function Om(t,n){var i=0;switch(t.tag){case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:s=t.stateNode;break;default:throw Error(a(314))}s!==null&&s.delete(n),Zd(t,i)}var eu;eu=function(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps||Ve.current)$e=!0;else{if(!(t.lanes&i)&&!(n.flags&128))return $e=!1,vm(t,n,i);$e=!!(t.flags&131072)}else $e=!1,ge&&n.flags&1048576&&Nc(n,Lr,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;Qr(t,n),t=n.pendingProps;var l=Gn(n,Be.current);Zn(n,i),l=Ko(null,n,s,t,l,i);var c=Qo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ge(s)?(c=!0,Nr(n)):c=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,_o(n),l.updater=Xr,n.stateNode=l,l._reactInternals=n,il(n,s,t,i),n=ll(null,n,s,!0,c,i)):(n.tag=0,ge&&c&&No(n),ze(null,n,l,i),n=n.child),n;case 16:s=n.elementType;e:{switch(Qr(t,n),t=n.pendingProps,l=s._init,s=l(s._payload),n.type=s,l=n.tag=Rm(s),t=gt(s,t),l){case 0:n=ol(null,n,s,t,i);break e;case 1:n=kd(null,n,s,t,i);break e;case 11:n=bd(null,n,s,t,i);break e;case 14:n=wd(null,n,s,gt(s.type,t),i);break e}throw Error(a(306,s,""))}return n;case 0:return s=n.type,l=n.pendingProps,l=n.elementType===s?l:gt(s,l),ol(t,n,s,l,i);case 1:return s=n.type,l=n.pendingProps,l=n.elementType===s?l:gt(s,l),kd(t,n,s,l,i);case 3:e:{if(Td(n),t===null)throw Error(a(387));s=n.pendingProps,c=n.memoizedState,l=c.element,zc(t,n),zr(n,s,null,i);var p=n.memoizedState;if(s=p.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){l=ti(Error(a(423)),n),n=Pd(t,n,s,i,l);break e}else if(s!==l){l=ti(Error(a(424)),n),n=Pd(t,n,s,i,l);break e}else for(it=Xt(n.stateNode.containerInfo.firstChild),nt=n,ge=!0,xt=null,i=Jc(n,null,s,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Kn(),s===l){n=Ft(t,n,i);break e}ze(t,n,s,i)}n=n.child}return n;case 5:return Hc(n),t===null&&Lo(n),s=n.type,l=n.pendingProps,c=t!==null?t.memoizedProps:null,p=l.children,To(s,l)?p=null:c!==null&&To(s,c)&&(n.flags|=32),Cd(t,n),ze(t,n,p,i),n.child;case 6:return t===null&&Lo(n),null;case 13:return Id(t,n,i);case 4:return qo(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Qn(n,null,s,i):ze(t,n,s,i),n.child;case 11:return s=n.type,l=n.pendingProps,l=n.elementType===s?l:gt(s,l),bd(t,n,s,l,i);case 7:return ze(t,n,n.pendingProps,i),n.child;case 8:return ze(t,n,n.pendingProps.children,i),n.child;case 12:return ze(t,n,n.pendingProps.children,i),n.child;case 10:e:{if(s=n.type._context,l=n.pendingProps,c=n.memoizedProps,p=l.value,he(Wr,s._currentValue),s._currentValue=p,c!==null)if(ft(c.value,p)){if(c.children===l.children&&!Ve.current){n=Ft(t,n,i);break e}}else for(c=n.child,c!==null&&(c.return=n);c!==null;){var x=c.dependencies;if(x!==null){p=c.child;for(var j=x.firstContext;j!==null;){if(j.context===s){if(c.tag===1){j=Bt(-1,i&-i),j.tag=2;var k=c.updateQueue;if(k!==null){k=k.shared;var N=k.pending;N===null?j.next=j:(j.next=N.next,N.next=j),k.pending=j}}c.lanes|=i,j=c.alternate,j!==null&&(j.lanes|=i),Uo(c.return,i,n),x.lanes|=i;break}j=j.next}}else if(c.tag===10)p=c.type===n.type?null:c.child;else if(c.tag===18){if(p=c.return,p===null)throw Error(a(341));p.lanes|=i,x=p.alternate,x!==null&&(x.lanes|=i),Uo(p,i,n),p=c.sibling}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===n){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}ze(t,n,l.children,i),n=n.child}return n;case 9:return l=n.type,s=n.pendingProps.children,Zn(n,i),l=at(l),s=s(l),n.flags|=1,ze(t,n,s,i),n.child;case 14:return s=n.type,l=gt(s,n.pendingProps),l=gt(s.type,l),wd(t,n,s,l,i);case 15:return Sd(t,n,n.type,n.pendingProps,i);case 17:return s=n.type,l=n.pendingProps,l=n.elementType===s?l:gt(s,l),Qr(t,n),n.tag=1,Ge(s)?(t=!0,Nr(n)):t=!1,Zn(n,i),md(n,s,l),il(n,s,l,i),ll(null,n,s,!0,t,i);case 19:return Ad(t,n,i);case 22:return Ed(t,n,i)}throw Error(a(156,n.tag))};function tu(t,n){return Ra(t,n)}function Nm(t,n,i,s){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(t,n,i,s){return new Nm(t,n,i,s)}function Tl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rm(t){if(typeof t=="function")return Tl(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wt)return 11;if(t===St)return 14}return 2}function ln(t,n){var i=t.alternate;return i===null?(i=ut(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function as(t,n,i,s,l,c){var p=2;if(s=t,typeof t=="function")Tl(t)&&(p=1);else if(typeof t=="string")p=5;else e:switch(t){case be:return Tn(i.children,l,c,n);case Re:p=8,l|=8;break;case ht:return t=ut(12,i,n,l|2),t.elementType=ht,t.lanes=c,t;case Ze:return t=ut(13,i,n,l),t.elementType=Ze,t.lanes=c,t;case pt:return t=ut(19,i,n,l),t.elementType=pt,t.lanes=c,t;case we:return cs(i,l,c,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case At:p=10;break e;case mn:p=9;break e;case wt:p=11;break e;case St:p=14;break e;case He:p=16,s=null;break e}throw Error(a(130,t==null?t:typeof t,""))}return n=ut(p,i,n,l),n.elementType=t,n.type=s,n.lanes=c,n}function Tn(t,n,i,s){return t=ut(7,t,s,n),t.lanes=i,t}function cs(t,n,i,s){return t=ut(22,t,s,n),t.elementType=we,t.lanes=i,t.stateNode={isHidden:!1},t}function Pl(t,n,i){return t=ut(6,t,null,n),t.lanes=i,t}function Il(t,n,i){return n=ut(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Mm(t,n,i,s,l){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=to(0),this.expirationTimes=to(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=to(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Dl(t,n,i,s,l,c,p,x,j){return t=new Mm(t,n,i,x,j),n===1?(n=1,c===!0&&(n|=8)):n=0,c=ut(3,null,null,n),t.current=c,c.stateNode=t,c.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},_o(c),t}function Lm(t,n,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:s==null?null:""+s,children:t,containerInfo:n,implementation:i}}function nu(t){if(!t)return Qt;t=t._reactInternals;e:{if(fn(t)!==t||t.tag!==1)throw Error(a(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(a(171))}if(t.tag===1){var i=t.type;if(Ge(i))return Dc(t,i,n)}return n}function iu(t,n,i,s,l,c,p,x,j){return t=Dl(i,s,!0,t,l,c,p,x,j),t.context=nu(null),i=t.current,s=_e(),l=sn(i),c=Bt(s,l),c.callback=n??null,en(i,c,l),t.current.lanes=l,xi(t,l,s),Ke(t,s),t}function ds(t,n,i,s){var l=n.current,c=_e(),p=sn(l);return i=nu(i),n.context===null?n.context=i:n.pendingContext=i,n=Bt(c,p),n.payload={element:t},s=s===void 0?null:s,s!==null&&(n.callback=s),t=en(l,n,p),t!==null&&(yt(t,l,p,c),Ur(t,l,p)),p}function us(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ru(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Al(t,n){ru(t,n),(t=t.alternate)&&ru(t,n)}var su=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ol(t){this._internalRoot=t}hs.prototype.render=Ol.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));ds(t,n,null,null)},hs.prototype.unmount=Ol.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;En(function(){ds(null,t,null,null)}),n[Ot]=null}};function hs(t){this._internalRoot=t}hs.prototype.unstable_scheduleHydration=function(t){if(t){var n=za();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Vt.length&&n!==0&&n<Vt[i].priority;i++);Vt.splice(i,0,t),i===0&&Ha(t)}};function Nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ps(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ou(){}function Bm(t,n,i,s,l){if(l){if(typeof s=="function"){var c=s;s=function(){var k=us(p);c.call(k)}}var p=iu(n,s,t,0,null,!1,!1,"",ou);return t._reactRootContainer=p,t[Ot]=p.current,Di(t.nodeType===8?t.parentNode:t),En(),p}for(;l=t.lastChild;)t.removeChild(l);if(typeof s=="function"){var x=s;s=function(){var k=us(j);x.call(k)}}var j=Dl(t,0,!1,null,null,!1,!1,"",ou);return t._reactRootContainer=j,t[Ot]=j.current,Di(t.nodeType===8?t.parentNode:t),En(function(){ds(n,j,i,s)}),j}function ms(t,n,i,s,l){var c=i._reactRootContainer;if(c){var p=c;if(typeof l=="function"){var x=l;l=function(){var j=us(p);x.call(j)}}ds(n,p,t,l)}else p=Bm(i,n,t,l,s);return us(p)}Ja=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var i=fi(n.pendingLanes);i!==0&&(no(n,i|1),Ke(n,Ee()),!(se&6)&&(ri=Ee()+500,Yt()))}break;case 13:En(function(){var s=Lt(t,1);if(s!==null){var l=_e();yt(s,t,1,l)}}),Al(t,1)}},io=function(t){if(t.tag===13){var n=Lt(t,134217728);if(n!==null){var i=_e();yt(n,t,134217728,i)}Al(t,134217728)}},Ua=function(t){if(t.tag===13){var n=sn(t),i=Lt(t,n);if(i!==null){var s=_e();yt(i,t,n,s)}Al(t,n)}},za=function(){return de},_a=function(t,n){var i=de;try{return de=t,n()}finally{de=i}},Xs=function(t,n,i){switch(n){case"input":if(Us(t,i),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var s=i[n];if(s!==t&&s.form===t.form){var l=Ar(s);if(!l)throw Error(a(90));pa(s),Us(s,l)}}}break;case"textarea":ja(t,i);break;case"select":n=i.value,n!=null&&Mn(t,!!i.multiple,n,!1)}},Ta=El,Pa=En;var Fm={usingClientEntryPoint:!1,Events:[Ni,Hn,Ar,Ca,ka,El]},Gi={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wm={bundleType:Gi.bundleType,version:Gi.version,rendererPackageName:Gi.rendererPackageName,rendererConfig:Gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Oa(t),t===null?null:t.stateNode},findFiberByHostInstance:Gi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fs.isDisabled&&fs.supportsFiber)try{hr=fs.inject(Wm),Et=fs}catch{}}return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fm,Qe.createPortal=function(t,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nl(n))throw Error(a(200));return Lm(t,n,null,i)},Qe.createRoot=function(t,n){if(!Nl(t))throw Error(a(299));var i=!1,s="",l=su;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Dl(t,1,!1,null,null,i,!1,s,l),t[Ot]=n.current,Di(t.nodeType===8?t.parentNode:t),new Ol(n)},Qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=Oa(n),t=t===null?null:t.stateNode,t},Qe.flushSync=function(t){return En(t)},Qe.hydrate=function(t,n,i){if(!ps(n))throw Error(a(200));return ms(null,t,n,!0,i)},Qe.hydrateRoot=function(t,n,i){if(!Nl(t))throw Error(a(405));var s=i!=null&&i.hydratedSources||null,l=!1,c="",p=su;if(i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),n=iu(n,null,t,1,i??null,l,!1,c,p),t[Ot]=n.current,Di(t),s)for(t=0;t<s.length;t++)i=s[t],l=i._getVersion,l=l(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,l]:n.mutableSourceEagerHydrationData.push(i,l);return new hs(n)},Qe.render=function(t,n,i){if(!ps(n))throw Error(a(200));return ms(null,t,n,!1,i)},Qe.unmountComponentAtNode=function(t){if(!ps(t))throw Error(a(40));return t._reactRootContainer?(En(function(){ms(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1},Qe.unstable_batchedUpdates=El,Qe.unstable_renderSubtreeIntoContainer=function(t,n,i,s){if(!ps(i))throw Error(a(200));if(t==null||t._reactInternals===void 0)throw Error(a(38));return ms(t,n,i,!1,s)},Qe.version="18.3.1-next-f1338f8080-20240426",Qe}var mu;function Ku(){if(mu)return Ll.exports;mu=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Ll.exports=$m(),Ll.exports}var fu;function Xm(){if(fu)return xs;fu=1;var r=Ku();return xs.createRoot=r.createRoot,xs.hydrateRoot=r.hydrateRoot,xs}var Km=Xm();const Qm=Xu(Km);Ku();/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yi(){return Yi=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(r[d]=a[d])}return r},Yi.apply(this,arguments)}var dn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(dn||(dn={}));const xu="popstate";function Ym(r){r===void 0&&(r={});function o(d,u){let{pathname:h,search:m,hash:f}=d.location;return Hl("",{pathname:h,search:m,hash:f},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function a(d,u){return typeof u=="string"?u:Es(u)}return ef(o,a,null,r)}function Te(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Qu(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Zm(){return Math.random().toString(36).substr(2,8)}function gu(r,o){return{usr:r.state,key:r.key,idx:o}}function Hl(r,o,a,d){return a===void 0&&(a=null),Yi({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof o=="string"?oi(o):o,{state:a,key:o&&o.key||d||Zm()})}function Es(r){let{pathname:o="/",search:a="",hash:d=""}=r;return a&&a!=="?"&&(o+=a.charAt(0)==="?"?a:"?"+a),d&&d!=="#"&&(o+=d.charAt(0)==="#"?d:"#"+d),o}function oi(r){let o={};if(r){let a=r.indexOf("#");a>=0&&(o.hash=r.substr(a),r=r.substr(0,a));let d=r.indexOf("?");d>=0&&(o.search=r.substr(d),r=r.substr(0,d)),r&&(o.pathname=r)}return o}function ef(r,o,a,d){d===void 0&&(d={});let{window:u=document.defaultView,v5Compat:h=!1}=d,m=u.history,f=dn.Pop,g=null,v=y();v==null&&(v=0,m.replaceState(Yi({},m.state,{idx:v}),""));function y(){return(m.state||{idx:null}).idx}function S(){f=dn.Pop;let T=y(),V=T==null?null:T-v;v=T,g&&g({action:f,location:D.location,delta:V})}function R(T,V){f=dn.Push;let Y=Hl(D.location,T,V);v=y()+1;let X=gu(Y,v),ie=D.createHref(Y);try{m.pushState(X,"",ie)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;u.location.assign(ie)}h&&g&&g({action:f,location:D.location,delta:1})}function z(T,V){f=dn.Replace;let Y=Hl(D.location,T,V);v=y();let X=gu(Y,v),ie=D.createHref(Y);m.replaceState(X,"",ie),h&&g&&g({action:f,location:D.location,delta:0})}function L(T){let V=u.location.origin!=="null"?u.location.origin:u.location.href,Y=typeof T=="string"?T:Es(T);return Y=Y.replace(/ $/,"%20"),Te(V,"No window.location.(origin|href) available to create URL for href: "+Y),new URL(Y,V)}let D={get action(){return f},get location(){return r(u,m)},listen(T){if(g)throw new Error("A history only accepts one active listener");return u.addEventListener(xu,S),g=T,()=>{u.removeEventListener(xu,S),g=null}},createHref(T){return o(u,T)},createURL:L,encodeLocation(T){let V=L(T);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:R,replace:z,go(T){return m.go(T)}};return D}var ju;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(ju||(ju={}));function tf(r,o,a){return a===void 0&&(a="/"),nf(r,o,a)}function nf(r,o,a,d){let u=typeof o=="string"?oi(o):o,h=sa(u.pathname||"/",a);if(h==null)return null;let m=Yu(r);rf(m);let f=null;for(let g=0;f==null&&g<m.length;++g){let v=xf(h);f=pf(m[g],v)}return f}function Yu(r,o,a,d){o===void 0&&(o=[]),a===void 0&&(a=[]),d===void 0&&(d="");let u=(h,m,f)=>{let g={relativePath:f===void 0?h.path||"":f,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};g.relativePath.startsWith("/")&&(Te(g.relativePath.startsWith(d),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(d.length));let v=un([d,g.relativePath]),y=a.concat(g);h.children&&h.children.length>0&&(Te(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),Yu(h.children,o,y,v)),!(h.path==null&&!h.index)&&o.push({path:v,score:uf(v,h.index),routesMeta:y})};return r.forEach((h,m)=>{var f;if(h.path===""||!((f=h.path)!=null&&f.includes("?")))u(h,m);else for(let g of Zu(h.path))u(h,m,g)}),o}function Zu(r){let o=r.split("/");if(o.length===0)return[];let[a,...d]=o,u=a.endsWith("?"),h=a.replace(/\?$/,"");if(d.length===0)return u?[h,""]:[h];let m=Zu(d.join("/")),f=[];return f.push(...m.map(g=>g===""?h:[h,g].join("/"))),u&&f.push(...m),f.map(g=>r.startsWith("/")&&g===""?"/":g)}function rf(r){r.sort((o,a)=>o.score!==a.score?a.score-o.score:hf(o.routesMeta.map(d=>d.childrenIndex),a.routesMeta.map(d=>d.childrenIndex)))}const sf=/^:[\w-]+$/,of=3,lf=2,af=1,cf=10,df=-2,vu=r=>r==="*";function uf(r,o){let a=r.split("/"),d=a.length;return a.some(vu)&&(d+=df),o&&(d+=lf),a.filter(u=>!vu(u)).reduce((u,h)=>u+(sf.test(h)?of:h===""?af:cf),d)}function hf(r,o){return r.length===o.length&&r.slice(0,-1).every((d,u)=>d===o[u])?r[r.length-1]-o[o.length-1]:0}function pf(r,o,a){let{routesMeta:d}=r,u={},h="/",m=[];for(let f=0;f<d.length;++f){let g=d[f],v=f===d.length-1,y=h==="/"?o:o.slice(h.length)||"/",S=mf({path:g.relativePath,caseSensitive:g.caseSensitive,end:v},y),R=g.route;if(!S)return null;Object.assign(u,S.params),m.push({params:u,pathname:un([h,S.pathname]),pathnameBase:yf(un([h,S.pathnameBase])),route:R}),S.pathnameBase!=="/"&&(h=un([h,S.pathnameBase]))}return m}function mf(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[a,d]=ff(r.path,r.caseSensitive,r.end),u=o.match(a);if(!u)return null;let h=u[0],m=h.replace(/(.)\/+$/,"$1"),f=u.slice(1);return{params:d.reduce((v,y,S)=>{let{paramName:R,isOptional:z}=y;if(R==="*"){let D=f[S]||"";m=h.slice(0,h.length-D.length).replace(/(.)\/+$/,"$1")}const L=f[S];return z&&!L?v[R]=void 0:v[R]=(L||"").replace(/%2F/g,"/"),v},{}),pathname:h,pathnameBase:m,pattern:r}}function ff(r,o,a){o===void 0&&(o=!1),a===void 0&&(a=!0),Qu(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let d=[],u="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,f,g)=>(d.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(d.push({paramName:"*"}),u+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?u+="\\/*$":r!==""&&r!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,o?void 0:"i"),d]}function xf(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Qu(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+o+").")),r}}function sa(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let a=o.endsWith("/")?o.length-1:o.length,d=r.charAt(a);return d&&d!=="/"?null:r.slice(a)||"/"}function gf(r,o){o===void 0&&(o="/");let{pathname:a,search:d="",hash:u=""}=typeof r=="string"?oi(r):r;return{pathname:a?a.startsWith("/")?a:jf(a,o):o,search:bf(d),hash:wf(u)}}function jf(r,o){let a=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(u=>{u===".."?a.length>1&&a.pop():u!=="."&&a.push(u)}),a.length>1?a.join("/"):"/"}function Wl(r,o,a,d){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+o+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vf(r){return r.filter((o,a)=>a===0||o.route.path&&o.route.path.length>0)}function eh(r,o){let a=vf(r);return o?a.map((d,u)=>u===a.length-1?d.pathname:d.pathnameBase):a.map(d=>d.pathnameBase)}function th(r,o,a,d){d===void 0&&(d=!1);let u;typeof r=="string"?u=oi(r):(u=Yi({},r),Te(!u.pathname||!u.pathname.includes("?"),Wl("?","pathname","search",u)),Te(!u.pathname||!u.pathname.includes("#"),Wl("#","pathname","hash",u)),Te(!u.search||!u.search.includes("#"),Wl("#","search","hash",u)));let h=r===""||u.pathname==="",m=h?"/":u.pathname,f;if(m==null)f=a;else{let S=o.length-1;if(!d&&m.startsWith("..")){let R=m.split("/");for(;R[0]==="..";)R.shift(),S-=1;u.pathname=R.join("/")}f=S>=0?o[S]:"/"}let g=gf(u,f),v=m&&m!=="/"&&m.endsWith("/"),y=(h||m===".")&&a.endsWith("/");return!g.pathname.endsWith("/")&&(v||y)&&(g.pathname+="/"),g}const un=r=>r.join("/").replace(/\/\/+/g,"/"),yf=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),bf=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,wf=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Sf(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const nh=["post","put","patch","delete"];new Set(nh);const Ef=["get",...nh];new Set(Ef);/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zi(){return Zi=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(r[d]=a[d])}return r},Zi.apply(this,arguments)}const oa=I.createContext(null),Cf=I.createContext(null),An=I.createContext(null),As=I.createContext(null),On=I.createContext({outlet:null,matches:[],isDataRoute:!1}),ih=I.createContext(null);function kf(r,o){let{relative:a}=o===void 0?{}:o;tr()||Te(!1);let{basename:d,navigator:u}=I.useContext(An),{hash:h,pathname:m,search:f}=sh(r,{relative:a}),g=m;return d!=="/"&&(g=m==="/"?d:un([d,m])),u.createHref({pathname:g,search:f,hash:h})}function tr(){return I.useContext(As)!=null}function nr(){return tr()||Te(!1),I.useContext(As).location}function rh(r){I.useContext(An).static||I.useLayoutEffect(r)}function Nn(){let{isDataRoute:r}=I.useContext(On);return r?Wf():Tf()}function Tf(){tr()||Te(!1);let r=I.useContext(oa),{basename:o,future:a,navigator:d}=I.useContext(An),{matches:u}=I.useContext(On),{pathname:h}=nr(),m=JSON.stringify(eh(u,a.v7_relativeSplatPath)),f=I.useRef(!1);return rh(()=>{f.current=!0}),I.useCallback(function(v,y){if(y===void 0&&(y={}),!f.current)return;if(typeof v=="number"){d.go(v);return}let S=th(v,JSON.parse(m),h,y.relative==="path");r==null&&o!=="/"&&(S.pathname=S.pathname==="/"?o:un([o,S.pathname])),(y.replace?d.replace:d.push)(S,y.state,y)},[o,d,m,h,r])}function sh(r,o){let{relative:a}=o===void 0?{}:o,{future:d}=I.useContext(An),{matches:u}=I.useContext(On),{pathname:h}=nr(),m=JSON.stringify(eh(u,d.v7_relativeSplatPath));return I.useMemo(()=>th(r,JSON.parse(m),h,a==="path"),[r,m,h,a])}function Pf(r,o){return If(r,o)}function If(r,o,a,d){tr()||Te(!1);let{navigator:u}=I.useContext(An),{matches:h}=I.useContext(On),m=h[h.length-1],f=m?m.params:{};m&&m.pathname;let g=m?m.pathnameBase:"/";m&&m.route;let v=nr(),y;if(o){var S;let T=typeof o=="string"?oi(o):o;g==="/"||(S=T.pathname)!=null&&S.startsWith(g)||Te(!1),y=T}else y=v;let R=y.pathname||"/",z=R;if(g!=="/"){let T=g.replace(/^\//,"").split("/");z="/"+R.replace(/^\//,"").split("/").slice(T.length).join("/")}let L=tf(r,{pathname:z}),D=Rf(L&&L.map(T=>Object.assign({},T,{params:Object.assign({},f,T.params),pathname:un([g,u.encodeLocation?u.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?g:un([g,u.encodeLocation?u.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),h,a,d);return o&&D?I.createElement(As.Provider,{value:{location:Zi({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:dn.Pop}},D):D}function Df(){let r=Ff(),o=Sf(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),a=r instanceof Error?r.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},o),a?I.createElement("pre",{style:u},a):null,null)}const Af=I.createElement(Df,null);class Of extends I.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,a){return a.location!==o.location||a.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:a.error,location:a.location,revalidation:o.revalidation||a.revalidation}}componentDidCatch(o,a){console.error("React Router caught the following error during render",o,a)}render(){return this.state.error!==void 0?I.createElement(On.Provider,{value:this.props.routeContext},I.createElement(ih.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Nf(r){let{routeContext:o,match:a,children:d}=r,u=I.useContext(oa);return u&&u.static&&u.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=a.route.id),I.createElement(On.Provider,{value:o},d)}function Rf(r,o,a,d){var u;if(o===void 0&&(o=[]),a===void 0&&(a=null),d===void 0&&(d=null),r==null){var h;if(!a)return null;if(a.errors)r=a.matches;else if((h=d)!=null&&h.v7_partialHydration&&o.length===0&&!a.initialized&&a.matches.length>0)r=a.matches;else return null}let m=r,f=(u=a)==null?void 0:u.errors;if(f!=null){let y=m.findIndex(S=>S.route.id&&(f==null?void 0:f[S.route.id])!==void 0);y>=0||Te(!1),m=m.slice(0,Math.min(m.length,y+1))}let g=!1,v=-1;if(a&&d&&d.v7_partialHydration)for(let y=0;y<m.length;y++){let S=m[y];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(v=y),S.route.id){let{loaderData:R,errors:z}=a,L=S.route.loader&&R[S.route.id]===void 0&&(!z||z[S.route.id]===void 0);if(S.route.lazy||L){g=!0,v>=0?m=m.slice(0,v+1):m=[m[0]];break}}}return m.reduceRight((y,S,R)=>{let z,L=!1,D=null,T=null;a&&(z=f&&S.route.id?f[S.route.id]:void 0,D=S.route.errorElement||Af,g&&(v<0&&R===0?(L=!0,T=null):v===R&&(L=!0,T=S.route.hydrateFallbackElement||null)));let V=o.concat(m.slice(0,R+1)),Y=()=>{let X;return z?X=D:L?X=T:S.route.Component?X=I.createElement(S.route.Component,null):S.route.element?X=S.route.element:X=y,I.createElement(Nf,{match:S,routeContext:{outlet:y,matches:V,isDataRoute:a!=null},children:X})};return a&&(S.route.ErrorBoundary||S.route.errorElement||R===0)?I.createElement(Of,{location:a.location,revalidation:a.revalidation,component:D,error:z,children:Y(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):Y()},null)}var oh=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(oh||{}),Cs=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(Cs||{});function Mf(r){let o=I.useContext(oa);return o||Te(!1),o}function Lf(r){let o=I.useContext(Cf);return o||Te(!1),o}function Bf(r){let o=I.useContext(On);return o||Te(!1),o}function lh(r){let o=Bf(),a=o.matches[o.matches.length-1];return a.route.id||Te(!1),a.route.id}function Ff(){var r;let o=I.useContext(ih),a=Lf(Cs.UseRouteError),d=lh(Cs.UseRouteError);return o!==void 0?o:(r=a.errors)==null?void 0:r[d]}function Wf(){let{router:r}=Mf(oh.UseNavigateStable),o=lh(Cs.UseNavigateStable),a=I.useRef(!1);return rh(()=>{a.current=!0}),I.useCallback(function(u,h){h===void 0&&(h={}),a.current&&(typeof u=="number"?r.navigate(u):r.navigate(u,Zi({fromRouteId:o},h)))},[r,o])}const yu={};function Jf(r,o){yu[o]||(yu[o]=!0,console.warn(o))}const bu=(r,o,a)=>Jf(r,"⚠️ React Router Future Flag Warning: "+o+". "+("You can use the `"+r+"` future flag to opt-in early. ")+("For more information, see "+a+"."));function Uf(r,o){(r==null?void 0:r.v7_startTransition)===void 0&&bu("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(r==null?void 0:r.v7_relativeSplatPath)===void 0&&!o&&bu("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Dt(r){Te(!1)}function zf(r){let{basename:o="/",children:a=null,location:d,navigationType:u=dn.Pop,navigator:h,static:m=!1,future:f}=r;tr()&&Te(!1);let g=o.replace(/^\/*/,"/"),v=I.useMemo(()=>({basename:g,navigator:h,static:m,future:Zi({v7_relativeSplatPath:!1},f)}),[g,f,h,m]);typeof d=="string"&&(d=oi(d));let{pathname:y="/",search:S="",hash:R="",state:z=null,key:L="default"}=d,D=I.useMemo(()=>{let T=sa(y,g);return T==null?null:{location:{pathname:T,search:S,hash:R,state:z,key:L},navigationType:u}},[g,y,S,R,z,L,u]);return D==null?null:I.createElement(An.Provider,{value:v},I.createElement(As.Provider,{children:a,value:D}))}function ah(r){let{children:o,location:a}=r;return Pf(Vl(o),a)}new Promise(()=>{});function Vl(r,o){o===void 0&&(o=[]);let a=[];return I.Children.forEach(r,(d,u)=>{if(!I.isValidElement(d))return;let h=[...o,u];if(d.type===I.Fragment){a.push.apply(a,Vl(d.props.children,h));return}d.type!==Dt&&Te(!1),!d.props.index||!d.props.children||Te(!1);let m={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(m.children=Vl(d.props.children,h)),a.push(m)}),a}/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gl(){return Gl=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(r[d]=a[d])}return r},Gl.apply(this,arguments)}function _f(r,o){if(r==null)return{};var a={},d=Object.keys(r),u,h;for(h=0;h<d.length;h++)u=d[h],!(o.indexOf(u)>=0)&&(a[u]=r[u]);return a}function qf(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Hf(r,o){return r.button===0&&(!o||o==="_self")&&!qf(r)}const Vf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Gf="6";try{window.__reactRouterVersion=Gf}catch{}const $f="startTransition",wu=Hm[$f];function Xf(r){let{basename:o,children:a,future:d,window:u}=r,h=I.useRef();h.current==null&&(h.current=Ym({window:u,v5Compat:!0}));let m=h.current,[f,g]=I.useState({action:m.action,location:m.location}),{v7_startTransition:v}=d||{},y=I.useCallback(S=>{v&&wu?wu(()=>g(S)):g(S)},[g,v]);return I.useLayoutEffect(()=>m.listen(y),[m,y]),I.useEffect(()=>Uf(d),[d]),I.createElement(zf,{basename:o,children:a,location:f.location,navigationType:f.action,navigator:m,future:d})}const Kf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,la=I.forwardRef(function(o,a){let{onClick:d,relative:u,reloadDocument:h,replace:m,state:f,target:g,to:v,preventScrollReset:y,viewTransition:S}=o,R=_f(o,Vf),{basename:z}=I.useContext(An),L,D=!1;if(typeof v=="string"&&Qf.test(v)&&(L=v,Kf))try{let X=new URL(window.location.href),ie=v.startsWith("//")?new URL(X.protocol+v):new URL(v),re=sa(ie.pathname,z);ie.origin===X.origin&&re!=null?v=re+ie.search+ie.hash:D=!0}catch{}let T=kf(v,{relative:u}),V=Yf(v,{replace:m,state:f,target:g,preventScrollReset:y,relative:u,viewTransition:S});function Y(X){d&&d(X),X.defaultPrevented||V(X)}return I.createElement("a",Gl({},R,{href:L||T,onClick:D||h?d:Y,ref:a,target:g}))});var Su;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Su||(Su={}));var Eu;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Eu||(Eu={}));function Yf(r,o){let{target:a,replace:d,state:u,preventScrollReset:h,relative:m,viewTransition:f}=o===void 0?{}:o,g=Nn(),v=nr(),y=sh(r,{relative:m});return I.useCallback(S=>{if(Hf(S,a)){S.preventDefault();let R=d!==void 0?d:Es(v)===Es(y);g(r,{replace:R,state:u,preventScrollReset:h,relative:m,viewTransition:f})}},[v,g,y,d,u,a,r,h,m,f])}function Os(){const r=Nn(),[o,a]=I.useState(!1),[d,u]=I.useState(""),h=[{title:"Java Basics",step:1,route:"/Selenium/Intro"},{title:"Variables",step:2,route:"/Selenium/Variables"},{title:"Data Types",step:3,route:"/Selenium/DataTypes"},{title:"Java Operations",step:4,route:"/Selenium/JavaOperation"},{title:"Java Strings",step:5,route:"/Selenium/JavaStrings"},{title:"Java Methods",step:6,route:"/Selenium/JavaMethods"},{title:"Java Arrays",step:7,route:"/Selenium/JavaArrays"},{title:"Java Abstraction",step:8,route:"/Selenium/JavaAbstraction"},{title:"Java Conditions",step:9,route:"/Selenium/JavaConditions"},{title:"Java APIs",step:10,route:"/Selenium/JavaAPIs"},{title:"Java Constructor",step:11,route:"/Selenium/JavaConstructor"},{title:"Data Type Conversion",step:12,route:"/Selenium/DataTypeConversion"},{title:"Encapsulation",step:13,route:"/Selenium/Encapsulation"},{title:"Enum in Java",step:14,route:"/Selenium/EnumInJava"},{title:"Exception Handling",step:15,route:"/Selenium/ExceptionHandlingInJava"},{title:"File Handling",step:16,route:"/Selenium/FileHandlingInJava"},{title:"Inheritance",step:17,route:"/Selenium/InheritanceDocument"},{title:"Java Iteration",step:18,route:"/Selenium/JavaIteration"},{title:"POI",step:19,route:"/Selenium/Poi"},{title:"Polymorphism",step:20,route:"/Selenium/Polymorphism"},{title:"Selenium Alerts",step:21,route:"/Selenium/SeleniumAlertsTheory"},{title:"CDP in Selenium",step:22,route:"/Selenium/CdpSeleniumTheory"},{title:"Data Driven Framework",step:23,route:"/Selenium/DataDrivenFramework"},{title:"Docker in Selenium",step:24,route:"/Selenium/DockerInSelenium"},{title:"Extent Reports",step:25,route:"/Selenium/ExtentReportsInSelenium"},{title:"Handling Web Elements",step:26,route:"/Selenium/HandlingWebElements"},{title:"Window Handling",step:27,route:"/Selenium/HandlingWindowInSelenium"},{title:"Is Element Present",step:28,route:"/Selenium/IsElementPresentInSelenium"},{title:"iFrames in Selenium",step:29,route:"/Selenium/HandlingIFramesInSelenium"},{title:"JavaScript Executor",step:30,route:"/Selenium/JavaScriptExecutorInSelenium"},{title:"Log4j",step:31,route:"/Selenium/Log4jInSelenium"},{title:"Page Object Model",step:32,route:"/Selenium/PageObjectModelInSelenium"},{title:"Relative Locators",step:33,route:"/Selenium/RelativeLocatorsInSelenium"},{title:"ReportNG",step:34,route:"/Selenium/ReportNGInSelenium"},{title:"Screenshots",step:35,route:"/Selenium/ScreenshotsInSelenium"},{title:"Action APIs",step:36,route:"/Selenium/ActionAPIsInSelenium"},{title:"Selenium Grid",step:37,route:"/Selenium/SeleniumGrid"},{title:"Selenium Select",step:38,route:"/Selenium/SeleniumSelect"},{title:"Selenium Waits",step:39,route:"/Selenium/SeleniumWaits"},{title:"XPath",step:40,route:"/Selenium/SeleniumXPath"},{title:"TestNG",step:41,route:"/Selenium/TestNGFramework"}],m=g=>{if(g.key==="Enter"){const v=d.toLowerCase(),y=h.find(S=>S.title.toLowerCase().includes(v));y&&(r(y.route),u(""))}},f=()=>{a(!o)};return e.jsxs("nav",{className:"navbar",children:[e.jsxs("div",{className:"main-nav",children:[e.jsx("a",{href:"/",className:"logo",children:"JourneyToAutomation"}),e.jsxs("button",{className:`hamburger ${o?"active":""}`,onClick:f,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("div",{className:`nav-links ${o?"active":""}`,children:[e.jsx("div",{className:"search-container",children:e.jsx("input",{type:"search",placeholder:"Search JourneyToAutomation",value:d,onChange:g=>u(g.target.value),onKeyPress:m})}),e.jsxs("div",{className:"nav-buttons",children:[e.jsx("button",{onClick:()=>window.open("https://courses.journeytoautomation.org/store"),children:"Courses"}),e.jsx("button",{children:"Contact Us"}),e.jsx("button",{children:"About Us"})]})]})]}),e.jsxs("div",{className:"sub-nav",children:[e.jsx("a",{onClick:()=>r("/Selenium"),children:"SELENIUM WITH JAVA"}),e.jsx("a",{onClick:()=>r("/Playwright"),children:"PLAYWRIGHT"}),e.jsx("a",{onClick:()=>r("/InterviewQuestions"),children:"INTERVIEW QUESTIONS"}),e.jsx("a",{onClick:()=>r("/"),children:"API TESTING"})]})]})}/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ch=(...r)=>r.filter((o,a,d)=>!!o&&o.trim()!==""&&d.indexOf(o)===a).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ex={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=I.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:d,className:u="",children:h,iconNode:m,...f},g)=>I.createElement("svg",{ref:g,...ex,width:o,height:o,stroke:r,strokeWidth:d?Number(a)*24/Number(o):a,className:ch("lucide",u),...f},[...m.map(([v,y])=>I.createElement(v,y)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=(r,o)=>{const a=I.forwardRef(({className:d,...u},h)=>I.createElement(tx,{ref:h,iconNode:o,className:ch(`lucide-${Zf(r)}`,d),...u}));return a.displayName=`${r}`,a};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=De("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=De("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=De("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=De("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=De("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=De("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=De("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=De("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=De("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=De("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=De("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=De("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=De("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=De("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=De("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=De("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=De("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=De("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=De("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),mx=`
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
`,fx={selenium:{path:"/Selenium",title:"Selenium with Java",description:"Master web automation with the industry standard tool"},playwright:{path:"/Playwright",title:"Playwright",description:"Modern automation for modern web apps"},api:{path:"/",title:"API Testing",description:"Learn REST API automation fundamentals"},cypress:{path:"/",title:"Cypress",description:"Modern, all-in-one testing framework"},interview:{path:"/",title:"Interview Questions",description:"Prepare for automation testing interviews"}},xx=()=>{const r=Nn(),[o,a]=I.useState(null),d=h=>{var f;const m=(f=fx[h])==null?void 0:f.path;m&&(window.scrollTo(0,0),r(m))},u=[{id:"selenium",title:"Selenium WebDriver",icon:e.jsx(Cu,{}),completionRate:85,topics:["WebDriver Setup & Configuration","Element Location Strategies","Advanced Interactions & Waits","Framework Design & Best Practices"]},{id:"playwright",title:"Playwright",icon:e.jsx(ku,{}),completionRate:75,topics:["Auto-waiting & Web-first Assertions","Network Interception & Mocking","Parallel Testing & Fixtures","Visual Testing & Screenshots"]},{id:"api",title:"API Testing",icon:e.jsx(Cu,{}),completionRate:90,topics:["REST API Fundamentals","Request/Response Validation","Authentication & Authorization","Performance Testing Basics"]},{id:"cypress",title:"Cypress",icon:e.jsx(ku,{}),completionRate:80,topics:["Modern Web Testing Approach","Real-time Test Execution","Network Stubbing & Spying","Custom Commands & Plugins"]}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:mx}),e.jsx("section",{className:"learning-pathways",children:e.jsxs("div",{className:"pathways-container",children:[e.jsxs("div",{className:"section-title",children:[e.jsx("h2",{children:"Choose Your Learning Path"}),e.jsx("p",{children:"Master test automation with our comprehensive, hands-on Tutorials"})]}),e.jsx("div",{className:"frameworks-grid",children:u.map(h=>e.jsxs("div",{className:`framework-card ${h.id}`,onMouseEnter:()=>a(h.id),onMouseLeave:()=>a(null),children:[e.jsxs("div",{className:"framework-header",children:[e.jsx("div",{className:"framework-icon",children:h.icon}),e.jsx("h3",{className:"framework-title",children:h.title})]}),e.jsx("ul",{className:"topics-list",children:h.topics.map((m,f)=>e.jsxs("li",{className:"topic-item",children:[e.jsx(sx,{size:16}),m]},f))}),e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:o===h.id?`${h.completionRate}%`:"0%"}})}),e.jsx("button",{className:"start-learning-btn",onClick:()=>d(h.id),children:"Start Learning"})]},h.id))})]})})]})},gx={selenium:`
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
`},Tu=["Search Selenium","Search Playwright","Search API Testing","Search Cypress","Search Interview Questions"],Pu={selenium:{path:"/Selenium",title:"Selenium with Java",description:"Master web automation with the industry standard tool"},playwright:{path:"/Playwright",title:"Playwright",description:"Modern automation for modern web apps"},api:{path:"/",title:"API Testing",description:"Learn REST API automation fundamentals"},cypress:{path:"/",title:"Cypress",description:"Modern, all-in-one testing framework"},interview:{path:"/",title:"Interview Questions",description:"Prepare for automation testing interviews"}};function jx(){const r=Nn(),[o,a]=I.useState("selenium"),[d,u]=I.useState(""),[h,m]=I.useState(""),[f,g]=I.useState(0),[v,y]=I.useState(0),S=I.useRef(null),R=Object.entries(Pu).filter(([D,T])=>{const V=d.toLowerCase();return T.title.toLowerCase().includes(V)||T.description.toLowerCase().includes(V)}),z=()=>{var T;const D=(T=Pu[o])==null?void 0:T.path;D&&(window.scrollTo(0,0),r(D))},L=D=>{u(D.target.value),R.length===1&&a(R[0][0])};return I.useEffect(()=>{const D=Tu[f];if(v<D.length){const T=setTimeout(()=>{m(V=>V+D[v]),y(V=>V+1)},100);return()=>clearTimeout(T)}else{const T=setTimeout(()=>{g(V=>(V+1)%Tu.length),y(0),m("")},2e3);return()=>clearTimeout(T)}},[v,f]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"home",children:[e.jsx("div",{className:"hero-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"hero-content",children:[e.jsxs("h1",{children:["Learn ",e.jsx("span",{className:"highlight",children:"Test Automation"}),e.jsx("br",{}),"Today"]}),e.jsx("p",{className:"subtitle",children:"Learn industry-leading automation tools and frameworks through our interactive modules."}),e.jsxs("div",{className:"search-bar",children:[e.jsx("input",{type:"text",value:d,onChange:L,placeholder:h||"Search topics...",className:"search-input"}),e.jsx(dh,{className:"search-icon"})]})]}),e.jsx("div",{className:"topics-container",children:e.jsx("div",{className:"topics-scroll-wrapper",children:e.jsx("div",{className:"topics-grid",ref:S,children:R.map(([D,T])=>e.jsxs("div",{className:`topic-card ${o===D?"selected":""}`,onClick:()=>a(D),children:[D==="selenium"&&e.jsx(uh,{className:"topic-icon"}),D==="playwright"&&e.jsx($l,{className:"topic-icon"}),D==="api"&&e.jsx(Qi,{className:"topic-icon"}),D==="cypress"&&e.jsx($l,{className:"topic-icon"}),D==="interview"&&e.jsx(Qi,{className:"topic-icon"}),e.jsx("h2",{children:T.title}),e.jsx("p",{children:T.description})]},D))})})}),e.jsxs("div",{className:"code-example-section",children:[e.jsxs("div",{className:"example-header",children:[e.jsx(dx,{className:"play-icon"}),e.jsx("h3",{children:"Try it yourself"})]}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:gx[o]})}),e.jsx("button",{className:"start-button",onClick:z,children:"Start Learning"})]})]})}),e.jsx(xx,{})]})})}function hh(r,o){return function(){return r.apply(o,arguments)}}const{toString:vx}=Object.prototype,{getPrototypeOf:aa}=Object,Ns=(r=>o=>{const a=vx.call(o);return r[a]||(r[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),bt=r=>(r=r.toLowerCase(),o=>Ns(o)===r),Rs=r=>o=>typeof o===r,{isArray:li}=Array,er=Rs("undefined");function yx(r){return r!==null&&!er(r)&&r.constructor!==null&&!er(r.constructor)&&st(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const ph=bt("ArrayBuffer");function bx(r){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(r):o=r&&r.buffer&&ph(r.buffer),o}const wx=Rs("string"),st=Rs("function"),mh=Rs("number"),Ms=r=>r!==null&&typeof r=="object",Sx=r=>r===!0||r===!1,js=r=>{if(Ns(r)!=="object")return!1;const o=aa(r);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},Ex=bt("Date"),Cx=bt("File"),kx=bt("Blob"),Tx=bt("FileList"),Px=r=>Ms(r)&&st(r.pipe),Ix=r=>{let o;return r&&(typeof FormData=="function"&&r instanceof FormData||st(r.append)&&((o=Ns(r))==="formdata"||o==="object"&&st(r.toString)&&r.toString()==="[object FormData]"))},Dx=bt("URLSearchParams"),[Ax,Ox,Nx,Rx]=["ReadableStream","Request","Response","Headers"].map(bt),Mx=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ir(r,o,{allOwnKeys:a=!1}={}){if(r===null||typeof r>"u")return;let d,u;if(typeof r!="object"&&(r=[r]),li(r))for(d=0,u=r.length;d<u;d++)o.call(null,r[d],d,r);else{const h=a?Object.getOwnPropertyNames(r):Object.keys(r),m=h.length;let f;for(d=0;d<m;d++)f=h[d],o.call(null,r[f],f,r)}}function fh(r,o){o=o.toLowerCase();const a=Object.keys(r);let d=a.length,u;for(;d-- >0;)if(u=a[d],o===u.toLowerCase())return u;return null}const Pn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,xh=r=>!er(r)&&r!==Pn;function Xl(){const{caseless:r}=xh(this)&&this||{},o={},a=(d,u)=>{const h=r&&fh(o,u)||u;js(o[h])&&js(d)?o[h]=Xl(o[h],d):js(d)?o[h]=Xl({},d):li(d)?o[h]=d.slice():o[h]=d};for(let d=0,u=arguments.length;d<u;d++)arguments[d]&&ir(arguments[d],a);return o}const Lx=(r,o,a,{allOwnKeys:d}={})=>(ir(o,(u,h)=>{a&&st(u)?r[h]=hh(u,a):r[h]=u},{allOwnKeys:d}),r),Bx=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),Fx=(r,o,a,d)=>{r.prototype=Object.create(o.prototype,d),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:o.prototype}),a&&Object.assign(r.prototype,a)},Wx=(r,o,a,d)=>{let u,h,m;const f={};if(o=o||{},r==null)return o;do{for(u=Object.getOwnPropertyNames(r),h=u.length;h-- >0;)m=u[h],(!d||d(m,r,o))&&!f[m]&&(o[m]=r[m],f[m]=!0);r=a!==!1&&aa(r)}while(r&&(!a||a(r,o))&&r!==Object.prototype);return o},Jx=(r,o,a)=>{r=String(r),(a===void 0||a>r.length)&&(a=r.length),a-=o.length;const d=r.indexOf(o,a);return d!==-1&&d===a},Ux=r=>{if(!r)return null;if(li(r))return r;let o=r.length;if(!mh(o))return null;const a=new Array(o);for(;o-- >0;)a[o]=r[o];return a},zx=(r=>o=>r&&o instanceof r)(typeof Uint8Array<"u"&&aa(Uint8Array)),_x=(r,o)=>{const d=(r&&r[Symbol.iterator]).call(r);let u;for(;(u=d.next())&&!u.done;){const h=u.value;o.call(r,h[0],h[1])}},qx=(r,o)=>{let a;const d=[];for(;(a=r.exec(o))!==null;)d.push(a);return d},Hx=bt("HTMLFormElement"),Vx=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(a,d,u){return d.toUpperCase()+u}),Iu=(({hasOwnProperty:r})=>(o,a)=>r.call(o,a))(Object.prototype),Gx=bt("RegExp"),gh=(r,o)=>{const a=Object.getOwnPropertyDescriptors(r),d={};ir(a,(u,h)=>{let m;(m=o(u,h,r))!==!1&&(d[h]=m||u)}),Object.defineProperties(r,d)},$x=r=>{gh(r,(o,a)=>{if(st(r)&&["arguments","caller","callee"].indexOf(a)!==-1)return!1;const d=r[a];if(st(d)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},Xx=(r,o)=>{const a={},d=u=>{u.forEach(h=>{a[h]=!0})};return li(r)?d(r):d(String(r).split(o)),a},Kx=()=>{},Qx=(r,o)=>r!=null&&Number.isFinite(r=+r)?r:o,Jl="abcdefghijklmnopqrstuvwxyz",Du="0123456789",jh={DIGIT:Du,ALPHA:Jl,ALPHA_DIGIT:Jl+Jl.toUpperCase()+Du},Yx=(r=16,o=jh.ALPHA_DIGIT)=>{let a="";const{length:d}=o;for(;r--;)a+=o[Math.random()*d|0];return a};function Zx(r){return!!(r&&st(r.append)&&r[Symbol.toStringTag]==="FormData"&&r[Symbol.iterator])}const eg=r=>{const o=new Array(10),a=(d,u)=>{if(Ms(d)){if(o.indexOf(d)>=0)return;if(!("toJSON"in d)){o[u]=d;const h=li(d)?[]:{};return ir(d,(m,f)=>{const g=a(m,u+1);!er(g)&&(h[f]=g)}),o[u]=void 0,h}}return d};return a(r,0)},tg=bt("AsyncFunction"),ng=r=>r&&(Ms(r)||st(r))&&st(r.then)&&st(r.catch),vh=((r,o)=>r?setImmediate:o?((a,d)=>(Pn.addEventListener("message",({source:u,data:h})=>{u===Pn&&h===a&&d.length&&d.shift()()},!1),u=>{d.push(u),Pn.postMessage(a,"*")}))(`axios@${Math.random()}`,[]):a=>setTimeout(a))(typeof setImmediate=="function",st(Pn.postMessage)),ig=typeof queueMicrotask<"u"?queueMicrotask.bind(Pn):typeof process<"u"&&process.nextTick||vh,P={isArray:li,isArrayBuffer:ph,isBuffer:yx,isFormData:Ix,isArrayBufferView:bx,isString:wx,isNumber:mh,isBoolean:Sx,isObject:Ms,isPlainObject:js,isReadableStream:Ax,isRequest:Ox,isResponse:Nx,isHeaders:Rx,isUndefined:er,isDate:Ex,isFile:Cx,isBlob:kx,isRegExp:Gx,isFunction:st,isStream:Px,isURLSearchParams:Dx,isTypedArray:zx,isFileList:Tx,forEach:ir,merge:Xl,extend:Lx,trim:Mx,stripBOM:Bx,inherits:Fx,toFlatObject:Wx,kindOf:Ns,kindOfTest:bt,endsWith:Jx,toArray:Ux,forEachEntry:_x,matchAll:qx,isHTMLForm:Hx,hasOwnProperty:Iu,hasOwnProp:Iu,reduceDescriptors:gh,freezeMethods:$x,toObjectSet:Xx,toCamelCase:Vx,noop:Kx,toFiniteNumber:Qx,findKey:fh,global:Pn,isContextDefined:xh,ALPHABET:jh,generateString:Yx,isSpecCompliantForm:Zx,toJSONObject:eg,isAsyncFn:tg,isThenable:ng,setImmediate:vh,asap:ig};function Z(r,o,a,d,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",o&&(this.code=o),a&&(this.config=a),d&&(this.request=d),u&&(this.response=u,this.status=u.status?u.status:null)}P.inherits(Z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}});const yh=Z.prototype,bh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{bh[r]={value:r}});Object.defineProperties(Z,bh);Object.defineProperty(yh,"isAxiosError",{value:!0});Z.from=(r,o,a,d,u,h)=>{const m=Object.create(yh);return P.toFlatObject(r,m,function(g){return g!==Error.prototype},f=>f!=="isAxiosError"),Z.call(m,r.message,o,a,d,u),m.cause=r,m.name=r.name,h&&Object.assign(m,h),m};const rg=null;function Kl(r){return P.isPlainObject(r)||P.isArray(r)}function wh(r){return P.endsWith(r,"[]")?r.slice(0,-2):r}function Au(r,o,a){return r?r.concat(o).map(function(u,h){return u=wh(u),!a&&h?"["+u+"]":u}).join(a?".":""):o}function sg(r){return P.isArray(r)&&!r.some(Kl)}const og=P.toFlatObject(P,{},null,function(o){return/^is[A-Z]/.test(o)});function Ls(r,o,a){if(!P.isObject(r))throw new TypeError("target must be an object");o=o||new FormData,a=P.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(D,T){return!P.isUndefined(T[D])});const d=a.metaTokens,u=a.visitor||y,h=a.dots,m=a.indexes,g=(a.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(o);if(!P.isFunction(u))throw new TypeError("visitor must be a function");function v(L){if(L===null)return"";if(P.isDate(L))return L.toISOString();if(!g&&P.isBlob(L))throw new Z("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(L)||P.isTypedArray(L)?g&&typeof Blob=="function"?new Blob([L]):Buffer.from(L):L}function y(L,D,T){let V=L;if(L&&!T&&typeof L=="object"){if(P.endsWith(D,"{}"))D=d?D:D.slice(0,-2),L=JSON.stringify(L);else if(P.isArray(L)&&sg(L)||(P.isFileList(L)||P.endsWith(D,"[]"))&&(V=P.toArray(L)))return D=wh(D),V.forEach(function(X,ie){!(P.isUndefined(X)||X===null)&&o.append(m===!0?Au([D],ie,h):m===null?D:D+"[]",v(X))}),!1}return Kl(L)?!0:(o.append(Au(T,D,h),v(L)),!1)}const S=[],R=Object.assign(og,{defaultVisitor:y,convertValue:v,isVisitable:Kl});function z(L,D){if(!P.isUndefined(L)){if(S.indexOf(L)!==-1)throw Error("Circular reference detected in "+D.join("."));S.push(L),P.forEach(L,function(V,Y){(!(P.isUndefined(V)||V===null)&&u.call(o,V,P.isString(Y)?Y.trim():Y,D,R))===!0&&z(V,D?D.concat(Y):[Y])}),S.pop()}}if(!P.isObject(r))throw new TypeError("data must be an object");return z(r),o}function Ou(r){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(d){return o[d]})}function ca(r,o){this._pairs=[],r&&Ls(r,this,o)}const Sh=ca.prototype;Sh.append=function(o,a){this._pairs.push([o,a])};Sh.toString=function(o){const a=o?function(d){return o.call(this,d,Ou)}:Ou;return this._pairs.map(function(u){return a(u[0])+"="+a(u[1])},"").join("&")};function lg(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Eh(r,o,a){if(!o)return r;const d=a&&a.encode||lg;P.isFunction(a)&&(a={serialize:a});const u=a&&a.serialize;let h;if(u?h=u(o,a):h=P.isURLSearchParams(o)?o.toString():new ca(o,a).toString(d),h){const m=r.indexOf("#");m!==-1&&(r=r.slice(0,m)),r+=(r.indexOf("?")===-1?"?":"&")+h}return r}class Nu{constructor(){this.handlers=[]}use(o,a,d){return this.handlers.push({fulfilled:o,rejected:a,synchronous:d?d.synchronous:!1,runWhen:d?d.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){P.forEach(this.handlers,function(d){d!==null&&o(d)})}}const Ch={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ag=typeof URLSearchParams<"u"?URLSearchParams:ca,cg=typeof FormData<"u"?FormData:null,dg=typeof Blob<"u"?Blob:null,ug={isBrowser:!0,classes:{URLSearchParams:ag,FormData:cg,Blob:dg},protocols:["http","https","file","blob","url","data"]},da=typeof window<"u"&&typeof document<"u",Ql=typeof navigator=="object"&&navigator||void 0,hg=da&&(!Ql||["ReactNative","NativeScript","NS"].indexOf(Ql.product)<0),pg=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mg=da&&window.location.href||"http://localhost",fg=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:da,hasStandardBrowserEnv:hg,hasStandardBrowserWebWorkerEnv:pg,navigator:Ql,origin:mg},Symbol.toStringTag,{value:"Module"})),Ue={...fg,...ug};function xg(r,o){return Ls(r,new Ue.classes.URLSearchParams,Object.assign({visitor:function(a,d,u,h){return Ue.isNode&&P.isBuffer(a)?(this.append(d,a.toString("base64")),!1):h.defaultVisitor.apply(this,arguments)}},o))}function gg(r){return P.matchAll(/\w+|\[(\w*)]/g,r).map(o=>o[0]==="[]"?"":o[1]||o[0])}function jg(r){const o={},a=Object.keys(r);let d;const u=a.length;let h;for(d=0;d<u;d++)h=a[d],o[h]=r[h];return o}function kh(r){function o(a,d,u,h){let m=a[h++];if(m==="__proto__")return!0;const f=Number.isFinite(+m),g=h>=a.length;return m=!m&&P.isArray(u)?u.length:m,g?(P.hasOwnProp(u,m)?u[m]=[u[m],d]:u[m]=d,!f):((!u[m]||!P.isObject(u[m]))&&(u[m]=[]),o(a,d,u[m],h)&&P.isArray(u[m])&&(u[m]=jg(u[m])),!f)}if(P.isFormData(r)&&P.isFunction(r.entries)){const a={};return P.forEachEntry(r,(d,u)=>{o(gg(d),u,a,0)}),a}return null}function vg(r,o,a){if(P.isString(r))try{return(o||JSON.parse)(r),P.trim(r)}catch(d){if(d.name!=="SyntaxError")throw d}return(0,JSON.stringify)(r)}const rr={transitional:Ch,adapter:["xhr","http","fetch"],transformRequest:[function(o,a){const d=a.getContentType()||"",u=d.indexOf("application/json")>-1,h=P.isObject(o);if(h&&P.isHTMLForm(o)&&(o=new FormData(o)),P.isFormData(o))return u?JSON.stringify(kh(o)):o;if(P.isArrayBuffer(o)||P.isBuffer(o)||P.isStream(o)||P.isFile(o)||P.isBlob(o)||P.isReadableStream(o))return o;if(P.isArrayBufferView(o))return o.buffer;if(P.isURLSearchParams(o))return a.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let f;if(h){if(d.indexOf("application/x-www-form-urlencoded")>-1)return xg(o,this.formSerializer).toString();if((f=P.isFileList(o))||d.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return Ls(f?{"files[]":o}:o,g&&new g,this.formSerializer)}}return h||u?(a.setContentType("application/json",!1),vg(o)):o}],transformResponse:[function(o){const a=this.transitional||rr.transitional,d=a&&a.forcedJSONParsing,u=this.responseType==="json";if(P.isResponse(o)||P.isReadableStream(o))return o;if(o&&P.isString(o)&&(d&&!this.responseType||u)){const m=!(a&&a.silentJSONParsing)&&u;try{return JSON.parse(o)}catch(f){if(m)throw f.name==="SyntaxError"?Z.from(f,Z.ERR_BAD_RESPONSE,this,null,this.response):f}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ue.classes.FormData,Blob:Ue.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],r=>{rr.headers[r]={}});const yg=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bg=r=>{const o={};let a,d,u;return r&&r.split(`
`).forEach(function(m){u=m.indexOf(":"),a=m.substring(0,u).trim().toLowerCase(),d=m.substring(u+1).trim(),!(!a||o[a]&&yg[a])&&(a==="set-cookie"?o[a]?o[a].push(d):o[a]=[d]:o[a]=o[a]?o[a]+", "+d:d)}),o},Ru=Symbol("internals");function Xi(r){return r&&String(r).trim().toLowerCase()}function vs(r){return r===!1||r==null?r:P.isArray(r)?r.map(vs):String(r)}function wg(r){const o=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let d;for(;d=a.exec(r);)o[d[1]]=d[2];return o}const Sg=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function Ul(r,o,a,d,u){if(P.isFunction(d))return d.call(this,o,a);if(u&&(o=a),!!P.isString(o)){if(P.isString(d))return o.indexOf(d)!==-1;if(P.isRegExp(d))return d.test(o)}}function Eg(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,a,d)=>a.toUpperCase()+d)}function Cg(r,o){const a=P.toCamelCase(" "+o);["get","set","has"].forEach(d=>{Object.defineProperty(r,d+a,{value:function(u,h,m){return this[d].call(this,o,u,h,m)},configurable:!0})})}class Ye{constructor(o){o&&this.set(o)}set(o,a,d){const u=this;function h(f,g,v){const y=Xi(g);if(!y)throw new Error("header name must be a non-empty string");const S=P.findKey(u,y);(!S||u[S]===void 0||v===!0||v===void 0&&u[S]!==!1)&&(u[S||g]=vs(f))}const m=(f,g)=>P.forEach(f,(v,y)=>h(v,y,g));if(P.isPlainObject(o)||o instanceof this.constructor)m(o,a);else if(P.isString(o)&&(o=o.trim())&&!Sg(o))m(bg(o),a);else if(P.isHeaders(o))for(const[f,g]of o.entries())h(g,f,d);else o!=null&&h(a,o,d);return this}get(o,a){if(o=Xi(o),o){const d=P.findKey(this,o);if(d){const u=this[d];if(!a)return u;if(a===!0)return wg(u);if(P.isFunction(a))return a.call(this,u,d);if(P.isRegExp(a))return a.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,a){if(o=Xi(o),o){const d=P.findKey(this,o);return!!(d&&this[d]!==void 0&&(!a||Ul(this,this[d],d,a)))}return!1}delete(o,a){const d=this;let u=!1;function h(m){if(m=Xi(m),m){const f=P.findKey(d,m);f&&(!a||Ul(d,d[f],f,a))&&(delete d[f],u=!0)}}return P.isArray(o)?o.forEach(h):h(o),u}clear(o){const a=Object.keys(this);let d=a.length,u=!1;for(;d--;){const h=a[d];(!o||Ul(this,this[h],h,o,!0))&&(delete this[h],u=!0)}return u}normalize(o){const a=this,d={};return P.forEach(this,(u,h)=>{const m=P.findKey(d,h);if(m){a[m]=vs(u),delete a[h];return}const f=o?Eg(h):String(h).trim();f!==h&&delete a[h],a[f]=vs(u),d[f]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const a=Object.create(null);return P.forEach(this,(d,u)=>{d!=null&&d!==!1&&(a[u]=o&&P.isArray(d)?d.join(", "):d)}),a}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,a])=>o+": "+a).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...a){const d=new this(o);return a.forEach(u=>d.set(u)),d}static accessor(o){const d=(this[Ru]=this[Ru]={accessors:{}}).accessors,u=this.prototype;function h(m){const f=Xi(m);d[f]||(Cg(u,m),d[f]=!0)}return P.isArray(o)?o.forEach(h):h(o),this}}Ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(Ye.prototype,({value:r},o)=>{let a=o[0].toUpperCase()+o.slice(1);return{get:()=>r,set(d){this[a]=d}}});P.freezeMethods(Ye);function zl(r,o){const a=this||rr,d=o||a,u=Ye.from(d.headers);let h=d.data;return P.forEach(r,function(f){h=f.call(a,h,u.normalize(),o?o.status:void 0)}),u.normalize(),h}function Th(r){return!!(r&&r.__CANCEL__)}function ai(r,o,a){Z.call(this,r??"canceled",Z.ERR_CANCELED,o,a),this.name="CanceledError"}P.inherits(ai,Z,{__CANCEL__:!0});function Ph(r,o,a){const d=a.config.validateStatus;!a.status||!d||d(a.status)?r(a):o(new Z("Request failed with status code "+a.status,[Z.ERR_BAD_REQUEST,Z.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))}function kg(r){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return o&&o[1]||""}function Tg(r,o){r=r||10;const a=new Array(r),d=new Array(r);let u=0,h=0,m;return o=o!==void 0?o:1e3,function(g){const v=Date.now(),y=d[h];m||(m=v),a[u]=g,d[u]=v;let S=h,R=0;for(;S!==u;)R+=a[S++],S=S%r;if(u=(u+1)%r,u===h&&(h=(h+1)%r),v-m<o)return;const z=y&&v-y;return z?Math.round(R*1e3/z):void 0}}function Pg(r,o){let a=0,d=1e3/o,u,h;const m=(v,y=Date.now())=>{a=y,u=null,h&&(clearTimeout(h),h=null),r.apply(null,v)};return[(...v)=>{const y=Date.now(),S=y-a;S>=d?m(v,y):(u=v,h||(h=setTimeout(()=>{h=null,m(u)},d-S)))},()=>u&&m(u)]}const ks=(r,o,a=3)=>{let d=0;const u=Tg(50,250);return Pg(h=>{const m=h.loaded,f=h.lengthComputable?h.total:void 0,g=m-d,v=u(g),y=m<=f;d=m;const S={loaded:m,total:f,progress:f?m/f:void 0,bytes:g,rate:v||void 0,estimated:v&&f&&y?(f-m)/v:void 0,event:h,lengthComputable:f!=null,[o?"download":"upload"]:!0};r(S)},a)},Mu=(r,o)=>{const a=r!=null;return[d=>o[0]({lengthComputable:a,total:r,loaded:d}),o[1]]},Lu=r=>(...o)=>P.asap(()=>r(...o)),Ig=Ue.hasStandardBrowserEnv?((r,o)=>a=>(a=new URL(a,Ue.origin),r.protocol===a.protocol&&r.host===a.host&&(o||r.port===a.port)))(new URL(Ue.origin),Ue.navigator&&/(msie|trident)/i.test(Ue.navigator.userAgent)):()=>!0,Dg=Ue.hasStandardBrowserEnv?{write(r,o,a,d,u,h){const m=[r+"="+encodeURIComponent(o)];P.isNumber(a)&&m.push("expires="+new Date(a).toGMTString()),P.isString(d)&&m.push("path="+d),P.isString(u)&&m.push("domain="+u),h===!0&&m.push("secure"),document.cookie=m.join("; ")},read(r){const o=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return o?decodeURIComponent(o[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ag(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function Og(r,o){return o?r.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):r}function Ih(r,o){return r&&!Ag(o)?Og(r,o):o}const Bu=r=>r instanceof Ye?{...r}:r;function Dn(r,o){o=o||{};const a={};function d(v,y,S,R){return P.isPlainObject(v)&&P.isPlainObject(y)?P.merge.call({caseless:R},v,y):P.isPlainObject(y)?P.merge({},y):P.isArray(y)?y.slice():y}function u(v,y,S,R){if(P.isUndefined(y)){if(!P.isUndefined(v))return d(void 0,v,S,R)}else return d(v,y,S,R)}function h(v,y){if(!P.isUndefined(y))return d(void 0,y)}function m(v,y){if(P.isUndefined(y)){if(!P.isUndefined(v))return d(void 0,v)}else return d(void 0,y)}function f(v,y,S){if(S in o)return d(v,y);if(S in r)return d(void 0,v)}const g={url:h,method:h,data:h,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:f,headers:(v,y,S)=>u(Bu(v),Bu(y),S,!0)};return P.forEach(Object.keys(Object.assign({},r,o)),function(y){const S=g[y]||u,R=S(r[y],o[y],y);P.isUndefined(R)&&S!==f||(a[y]=R)}),a}const Dh=r=>{const o=Dn({},r);let{data:a,withXSRFToken:d,xsrfHeaderName:u,xsrfCookieName:h,headers:m,auth:f}=o;o.headers=m=Ye.from(m),o.url=Eh(Ih(o.baseURL,o.url),r.params,r.paramsSerializer),f&&m.set("Authorization","Basic "+btoa((f.username||"")+":"+(f.password?unescape(encodeURIComponent(f.password)):"")));let g;if(P.isFormData(a)){if(Ue.hasStandardBrowserEnv||Ue.hasStandardBrowserWebWorkerEnv)m.setContentType(void 0);else if((g=m.getContentType())!==!1){const[v,...y]=g?g.split(";").map(S=>S.trim()).filter(Boolean):[];m.setContentType([v||"multipart/form-data",...y].join("; "))}}if(Ue.hasStandardBrowserEnv&&(d&&P.isFunction(d)&&(d=d(o)),d||d!==!1&&Ig(o.url))){const v=u&&h&&Dg.read(h);v&&m.set(u,v)}return o},Ng=typeof XMLHttpRequest<"u",Rg=Ng&&function(r){return new Promise(function(a,d){const u=Dh(r);let h=u.data;const m=Ye.from(u.headers).normalize();let{responseType:f,onUploadProgress:g,onDownloadProgress:v}=u,y,S,R,z,L;function D(){z&&z(),L&&L(),u.cancelToken&&u.cancelToken.unsubscribe(y),u.signal&&u.signal.removeEventListener("abort",y)}let T=new XMLHttpRequest;T.open(u.method.toUpperCase(),u.url,!0),T.timeout=u.timeout;function V(){if(!T)return;const X=Ye.from("getAllResponseHeaders"in T&&T.getAllResponseHeaders()),re={data:!f||f==="text"||f==="json"?T.responseText:T.response,status:T.status,statusText:T.statusText,headers:X,config:r,request:T};Ph(function(be){a(be),D()},function(be){d(be),D()},re),T=null}"onloadend"in T?T.onloadend=V:T.onreadystatechange=function(){!T||T.readyState!==4||T.status===0&&!(T.responseURL&&T.responseURL.indexOf("file:")===0)||setTimeout(V)},T.onabort=function(){T&&(d(new Z("Request aborted",Z.ECONNABORTED,r,T)),T=null)},T.onerror=function(){d(new Z("Network Error",Z.ERR_NETWORK,r,T)),T=null},T.ontimeout=function(){let ie=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const re=u.transitional||Ch;u.timeoutErrorMessage&&(ie=u.timeoutErrorMessage),d(new Z(ie,re.clarifyTimeoutError?Z.ETIMEDOUT:Z.ECONNABORTED,r,T)),T=null},h===void 0&&m.setContentType(null),"setRequestHeader"in T&&P.forEach(m.toJSON(),function(ie,re){T.setRequestHeader(re,ie)}),P.isUndefined(u.withCredentials)||(T.withCredentials=!!u.withCredentials),f&&f!=="json"&&(T.responseType=u.responseType),v&&([R,L]=ks(v,!0),T.addEventListener("progress",R)),g&&T.upload&&([S,z]=ks(g),T.upload.addEventListener("progress",S),T.upload.addEventListener("loadend",z)),(u.cancelToken||u.signal)&&(y=X=>{T&&(d(!X||X.type?new ai(null,r,T):X),T.abort(),T=null)},u.cancelToken&&u.cancelToken.subscribe(y),u.signal&&(u.signal.aborted?y():u.signal.addEventListener("abort",y)));const Y=kg(u.url);if(Y&&Ue.protocols.indexOf(Y)===-1){d(new Z("Unsupported protocol "+Y+":",Z.ERR_BAD_REQUEST,r));return}T.send(h||null)})},Mg=(r,o)=>{const{length:a}=r=r?r.filter(Boolean):[];if(o||a){let d=new AbortController,u;const h=function(v){if(!u){u=!0,f();const y=v instanceof Error?v:this.reason;d.abort(y instanceof Z?y:new ai(y instanceof Error?y.message:y))}};let m=o&&setTimeout(()=>{m=null,h(new Z(`timeout ${o} of ms exceeded`,Z.ETIMEDOUT))},o);const f=()=>{r&&(m&&clearTimeout(m),m=null,r.forEach(v=>{v.unsubscribe?v.unsubscribe(h):v.removeEventListener("abort",h)}),r=null)};r.forEach(v=>v.addEventListener("abort",h));const{signal:g}=d;return g.unsubscribe=()=>P.asap(f),g}},Lg=function*(r,o){let a=r.byteLength;if(a<o){yield r;return}let d=0,u;for(;d<a;)u=d+o,yield r.slice(d,u),d=u},Bg=async function*(r,o){for await(const a of Fg(r))yield*Lg(a,o)},Fg=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const o=r.getReader();try{for(;;){const{done:a,value:d}=await o.read();if(a)break;yield d}}finally{await o.cancel()}},Fu=(r,o,a,d)=>{const u=Bg(r,o);let h=0,m,f=g=>{m||(m=!0,d&&d(g))};return new ReadableStream({async pull(g){try{const{done:v,value:y}=await u.next();if(v){f(),g.close();return}let S=y.byteLength;if(a){let R=h+=S;a(R)}g.enqueue(new Uint8Array(y))}catch(v){throw f(v),v}},cancel(g){return f(g),u.return()}},{highWaterMark:2})},Bs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ah=Bs&&typeof ReadableStream=="function",Wg=Bs&&(typeof TextEncoder=="function"?(r=>o=>r.encode(o))(new TextEncoder):async r=>new Uint8Array(await new Response(r).arrayBuffer())),Oh=(r,...o)=>{try{return!!r(...o)}catch{return!1}},Jg=Ah&&Oh(()=>{let r=!1;const o=new Request(Ue.origin,{body:new ReadableStream,method:"POST",get duplex(){return r=!0,"half"}}).headers.has("Content-Type");return r&&!o}),Wu=64*1024,Yl=Ah&&Oh(()=>P.isReadableStream(new Response("").body)),Ts={stream:Yl&&(r=>r.body)};Bs&&(r=>{["text","arrayBuffer","blob","formData","stream"].forEach(o=>{!Ts[o]&&(Ts[o]=P.isFunction(r[o])?a=>a[o]():(a,d)=>{throw new Z(`Response type '${o}' is not supported`,Z.ERR_NOT_SUPPORT,d)})})})(new Response);const Ug=async r=>{if(r==null)return 0;if(P.isBlob(r))return r.size;if(P.isSpecCompliantForm(r))return(await new Request(Ue.origin,{method:"POST",body:r}).arrayBuffer()).byteLength;if(P.isArrayBufferView(r)||P.isArrayBuffer(r))return r.byteLength;if(P.isURLSearchParams(r)&&(r=r+""),P.isString(r))return(await Wg(r)).byteLength},zg=async(r,o)=>{const a=P.toFiniteNumber(r.getContentLength());return a??Ug(o)},_g=Bs&&(async r=>{let{url:o,method:a,data:d,signal:u,cancelToken:h,timeout:m,onDownloadProgress:f,onUploadProgress:g,responseType:v,headers:y,withCredentials:S="same-origin",fetchOptions:R}=Dh(r);v=v?(v+"").toLowerCase():"text";let z=Mg([u,h&&h.toAbortSignal()],m),L;const D=z&&z.unsubscribe&&(()=>{z.unsubscribe()});let T;try{if(g&&Jg&&a!=="get"&&a!=="head"&&(T=await zg(y,d))!==0){let re=new Request(o,{method:"POST",body:d,duplex:"half"}),fe;if(P.isFormData(d)&&(fe=re.headers.get("content-type"))&&y.setContentType(fe),re.body){const[be,Re]=Mu(T,ks(Lu(g)));d=Fu(re.body,Wu,be,Re)}}P.isString(S)||(S=S?"include":"omit");const V="credentials"in Request.prototype;L=new Request(o,{...R,signal:z,method:a.toUpperCase(),headers:y.normalize().toJSON(),body:d,duplex:"half",credentials:V?S:void 0});let Y=await fetch(L);const X=Yl&&(v==="stream"||v==="response");if(Yl&&(f||X&&D)){const re={};["status","statusText","headers"].forEach(ht=>{re[ht]=Y[ht]});const fe=P.toFiniteNumber(Y.headers.get("content-length")),[be,Re]=f&&Mu(fe,ks(Lu(f),!0))||[];Y=new Response(Fu(Y.body,Wu,be,()=>{Re&&Re(),D&&D()}),re)}v=v||"text";let ie=await Ts[P.findKey(Ts,v)||"text"](Y,r);return!X&&D&&D(),await new Promise((re,fe)=>{Ph(re,fe,{data:ie,headers:Ye.from(Y.headers),status:Y.status,statusText:Y.statusText,config:r,request:L})})}catch(V){throw D&&D(),V&&V.name==="TypeError"&&/fetch/i.test(V.message)?Object.assign(new Z("Network Error",Z.ERR_NETWORK,r,L),{cause:V.cause||V}):Z.from(V,V&&V.code,r,L)}}),Zl={http:rg,xhr:Rg,fetch:_g};P.forEach(Zl,(r,o)=>{if(r){try{Object.defineProperty(r,"name",{value:o})}catch{}Object.defineProperty(r,"adapterName",{value:o})}});const Ju=r=>`- ${r}`,qg=r=>P.isFunction(r)||r===null||r===!1,Nh={getAdapter:r=>{r=P.isArray(r)?r:[r];const{length:o}=r;let a,d;const u={};for(let h=0;h<o;h++){a=r[h];let m;if(d=a,!qg(a)&&(d=Zl[(m=String(a)).toLowerCase()],d===void 0))throw new Z(`Unknown adapter '${m}'`);if(d)break;u[m||"#"+h]=d}if(!d){const h=Object.entries(u).map(([f,g])=>`adapter ${f} `+(g===!1?"is not supported by the environment":"is not available in the build"));let m=o?h.length>1?`since :
`+h.map(Ju).join(`
`):" "+Ju(h[0]):"as no adapter specified";throw new Z("There is no suitable adapter to dispatch the request "+m,"ERR_NOT_SUPPORT")}return d},adapters:Zl};function _l(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new ai(null,r)}function Uu(r){return _l(r),r.headers=Ye.from(r.headers),r.data=zl.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),Nh.getAdapter(r.adapter||rr.adapter)(r).then(function(d){return _l(r),d.data=zl.call(r,r.transformResponse,d),d.headers=Ye.from(d.headers),d},function(d){return Th(d)||(_l(r),d&&d.response&&(d.response.data=zl.call(r,r.transformResponse,d.response),d.response.headers=Ye.from(d.response.headers))),Promise.reject(d)})}const Rh="1.7.9",Fs={};["object","boolean","number","function","string","symbol"].forEach((r,o)=>{Fs[r]=function(d){return typeof d===r||"a"+(o<1?"n ":" ")+r}});const zu={};Fs.transitional=function(o,a,d){function u(h,m){return"[Axios v"+Rh+"] Transitional option '"+h+"'"+m+(d?". "+d:"")}return(h,m,f)=>{if(o===!1)throw new Z(u(m," has been removed"+(a?" in "+a:"")),Z.ERR_DEPRECATED);return a&&!zu[m]&&(zu[m]=!0,console.warn(u(m," has been deprecated since v"+a+" and will be removed in the near future"))),o?o(h,m,f):!0}};Fs.spelling=function(o){return(a,d)=>(console.warn(`${d} is likely a misspelling of ${o}`),!0)};function Hg(r,o,a){if(typeof r!="object")throw new Z("options must be an object",Z.ERR_BAD_OPTION_VALUE);const d=Object.keys(r);let u=d.length;for(;u-- >0;){const h=d[u],m=o[h];if(m){const f=r[h],g=f===void 0||m(f,h,r);if(g!==!0)throw new Z("option "+h+" must be "+g,Z.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new Z("Unknown option "+h,Z.ERR_BAD_OPTION)}}const ys={assertOptions:Hg,validators:Fs},It=ys.validators;class In{constructor(o){this.defaults=o,this.interceptors={request:new Nu,response:new Nu}}async request(o,a){try{return await this._request(o,a)}catch(d){if(d instanceof Error){let u={};Error.captureStackTrace?Error.captureStackTrace(u):u=new Error;const h=u.stack?u.stack.replace(/^.+\n/,""):"";try{d.stack?h&&!String(d.stack).endsWith(h.replace(/^.+\n.+\n/,""))&&(d.stack+=`
`+h):d.stack=h}catch{}}throw d}}_request(o,a){typeof o=="string"?(a=a||{},a.url=o):a=o||{},a=Dn(this.defaults,a);const{transitional:d,paramsSerializer:u,headers:h}=a;d!==void 0&&ys.assertOptions(d,{silentJSONParsing:It.transitional(It.boolean),forcedJSONParsing:It.transitional(It.boolean),clarifyTimeoutError:It.transitional(It.boolean)},!1),u!=null&&(P.isFunction(u)?a.paramsSerializer={serialize:u}:ys.assertOptions(u,{encode:It.function,serialize:It.function},!0)),ys.assertOptions(a,{baseUrl:It.spelling("baseURL"),withXsrfToken:It.spelling("withXSRFToken")},!0),a.method=(a.method||this.defaults.method||"get").toLowerCase();let m=h&&P.merge(h.common,h[a.method]);h&&P.forEach(["delete","get","head","post","put","patch","common"],L=>{delete h[L]}),a.headers=Ye.concat(m,h);const f=[];let g=!0;this.interceptors.request.forEach(function(D){typeof D.runWhen=="function"&&D.runWhen(a)===!1||(g=g&&D.synchronous,f.unshift(D.fulfilled,D.rejected))});const v=[];this.interceptors.response.forEach(function(D){v.push(D.fulfilled,D.rejected)});let y,S=0,R;if(!g){const L=[Uu.bind(this),void 0];for(L.unshift.apply(L,f),L.push.apply(L,v),R=L.length,y=Promise.resolve(a);S<R;)y=y.then(L[S++],L[S++]);return y}R=f.length;let z=a;for(S=0;S<R;){const L=f[S++],D=f[S++];try{z=L(z)}catch(T){D.call(this,T);break}}try{y=Uu.call(this,z)}catch(L){return Promise.reject(L)}for(S=0,R=v.length;S<R;)y=y.then(v[S++],v[S++]);return y}getUri(o){o=Dn(this.defaults,o);const a=Ih(o.baseURL,o.url);return Eh(a,o.params,o.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(o){In.prototype[o]=function(a,d){return this.request(Dn(d||{},{method:o,url:a,data:(d||{}).data}))}});P.forEach(["post","put","patch"],function(o){function a(d){return function(h,m,f){return this.request(Dn(f||{},{method:o,headers:d?{"Content-Type":"multipart/form-data"}:{},url:h,data:m}))}}In.prototype[o]=a(),In.prototype[o+"Form"]=a(!0)});class ua{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(h){a=h});const d=this;this.promise.then(u=>{if(!d._listeners)return;let h=d._listeners.length;for(;h-- >0;)d._listeners[h](u);d._listeners=null}),this.promise.then=u=>{let h;const m=new Promise(f=>{d.subscribe(f),h=f}).then(u);return m.cancel=function(){d.unsubscribe(h)},m},o(function(h,m,f){d.reason||(d.reason=new ai(h,m,f),a(d.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const a=this._listeners.indexOf(o);a!==-1&&this._listeners.splice(a,1)}toAbortSignal(){const o=new AbortController,a=d=>{o.abort(d)};return this.subscribe(a),o.signal.unsubscribe=()=>this.unsubscribe(a),o.signal}static source(){let o;return{token:new ua(function(u){o=u}),cancel:o}}}function Vg(r){return function(a){return r.apply(null,a)}}function Gg(r){return P.isObject(r)&&r.isAxiosError===!0}const ea={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ea).forEach(([r,o])=>{ea[o]=r});function Mh(r){const o=new In(r),a=hh(In.prototype.request,o);return P.extend(a,In.prototype,o,{allOwnKeys:!0}),P.extend(a,o,null,{allOwnKeys:!0}),a.create=function(u){return Mh(Dn(r,u))},a}const ye=Mh(rr);ye.Axios=In;ye.CanceledError=ai;ye.CancelToken=ua;ye.isCancel=Th;ye.VERSION=Rh;ye.toFormData=Ls;ye.AxiosError=Z;ye.Cancel=ye.CanceledError;ye.all=function(o){return Promise.all(o)};ye.spread=Vg;ye.isAxiosError=Gg;ye.mergeConfig=Dn;ye.AxiosHeaders=Ye;ye.formToJSON=r=>kh(P.isHTMLForm(r)?new FormData(r):r);ye.getAdapter=Nh.getAdapter;ye.HttpStatusCode=ea;ye.default=ye;let $g={data:""},Xg=r=>typeof window=="object"?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||$g,Kg=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Qg=/\/\*[^]*?\*\/|  +/g,_u=/\n+/g,cn=(r,o)=>{let a="",d="",u="";for(let h in r){let m=r[h];h[0]=="@"?h[1]=="i"?a=h+" "+m+";":d+=h[1]=="f"?cn(m,h):h+"{"+cn(m,h[1]=="k"?"":o)+"}":typeof m=="object"?d+=cn(m,o?o.replace(/([^,])+/g,f=>h.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,g=>/&/.test(g)?g.replace(/&/g,f):f?f+" "+g:g)):h):m!=null&&(h=/^--/.test(h)?h:h.replace(/[A-Z]/g,"-$&").toLowerCase(),u+=cn.p?cn.p(h,m):h+":"+m+";")}return a+(o&&u?o+"{"+u+"}":u)+d},Jt={},Lh=r=>{if(typeof r=="object"){let o="";for(let a in r)o+=a+Lh(r[a]);return o}return r},Yg=(r,o,a,d,u)=>{let h=Lh(r),m=Jt[h]||(Jt[h]=(g=>{let v=0,y=11;for(;v<g.length;)y=101*y+g.charCodeAt(v++)>>>0;return"go"+y})(h));if(!Jt[m]){let g=h!==r?r:(v=>{let y,S,R=[{}];for(;y=Kg.exec(v.replace(Qg,""));)y[4]?R.shift():y[3]?(S=y[3].replace(_u," ").trim(),R.unshift(R[0][S]=R[0][S]||{})):R[0][y[1]]=y[2].replace(_u," ").trim();return R[0]})(r);Jt[m]=cn(u?{["@keyframes "+m]:g}:g,a?"":"."+m)}let f=a&&Jt.g?Jt.g:null;return a&&(Jt.g=Jt[m]),((g,v,y,S)=>{S?v.data=v.data.replace(S,g):v.data.indexOf(g)===-1&&(v.data=y?g+v.data:v.data+g)})(Jt[m],o,d,f),m},Zg=(r,o,a)=>r.reduce((d,u,h)=>{let m=o[h];if(m&&m.call){let f=m(a),g=f&&f.props&&f.props.className||/^go/.test(f)&&f;m=g?"."+g:f&&typeof f=="object"?f.props?"":cn(f,""):f===!1?"":f}return d+u+(m??"")},"");function Ws(r){let o=this||{},a=r.call?r(o.p):r;return Yg(a.unshift?a.raw?Zg(a,[].slice.call(arguments,1),o.p):a.reduce((d,u)=>Object.assign(d,u&&u.call?u(o.p):u),{}):a,Xg(o.target),o.g,o.o,o.k)}let Bh,ta,na;Ws.bind({g:1});let zt=Ws.bind({k:1});function ej(r,o,a,d){cn.p=o,Bh=r,ta=a,na=d}function hn(r,o){let a=this||{};return function(){let d=arguments;function u(h,m){let f=Object.assign({},h),g=f.className||u.className;a.p=Object.assign({theme:ta&&ta()},f),a.o=/ *go\d+/.test(g),f.className=Ws.apply(a,d)+(g?" "+g:"");let v=r;return r[0]&&(v=f.as||r,delete f.as),na&&v[0]&&na(f),Bh(v,f)}return u}}var tj=r=>typeof r=="function",Ps=(r,o)=>tj(r)?r(o):r,nj=(()=>{let r=0;return()=>(++r).toString()})(),Fh=(()=>{let r;return()=>{if(r===void 0&&typeof window<"u"){let o=matchMedia("(prefers-reduced-motion: reduce)");r=!o||o.matches}return r}})(),ij=20,bs=new Map,rj=1e3,qu=r=>{if(bs.has(r))return;let o=setTimeout(()=>{bs.delete(r),Rn({type:4,toastId:r})},rj);bs.set(r,o)},sj=r=>{let o=bs.get(r);o&&clearTimeout(o)},ia=(r,o)=>{switch(o.type){case 0:return{...r,toasts:[o.toast,...r.toasts].slice(0,ij)};case 1:return o.toast.id&&sj(o.toast.id),{...r,toasts:r.toasts.map(h=>h.id===o.toast.id?{...h,...o.toast}:h)};case 2:let{toast:a}=o;return r.toasts.find(h=>h.id===a.id)?ia(r,{type:1,toast:a}):ia(r,{type:0,toast:a});case 3:let{toastId:d}=o;return d?qu(d):r.toasts.forEach(h=>{qu(h.id)}),{...r,toasts:r.toasts.map(h=>h.id===d||d===void 0?{...h,visible:!1}:h)};case 4:return o.toastId===void 0?{...r,toasts:[]}:{...r,toasts:r.toasts.filter(h=>h.id!==o.toastId)};case 5:return{...r,pausedAt:o.time};case 6:let u=o.time-(r.pausedAt||0);return{...r,pausedAt:void 0,toasts:r.toasts.map(h=>({...h,pauseDuration:h.pauseDuration+u}))}}},ws=[],Ss={toasts:[],pausedAt:void 0},Rn=r=>{Ss=ia(Ss,r),ws.forEach(o=>{o(Ss)})},oj={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},lj=(r={})=>{let[o,a]=I.useState(Ss);I.useEffect(()=>(ws.push(a),()=>{let u=ws.indexOf(a);u>-1&&ws.splice(u,1)}),[o]);let d=o.toasts.map(u=>{var h,m;return{...r,...r[u.type],...u,duration:u.duration||((h=r[u.type])==null?void 0:h.duration)||(r==null?void 0:r.duration)||oj[u.type],style:{...r.style,...(m=r[u.type])==null?void 0:m.style,...u.style}}});return{...o,toasts:d}},aj=(r,o="blank",a)=>({createdAt:Date.now(),visible:!0,type:o,ariaProps:{role:"status","aria-live":"polite"},message:r,pauseDuration:0,...a,id:(a==null?void 0:a.id)||nj()}),sr=r=>(o,a)=>{let d=aj(o,r,a);return Rn({type:2,toast:d}),d.id},qe=(r,o)=>sr("blank")(r,o);qe.error=sr("error");qe.success=sr("success");qe.loading=sr("loading");qe.custom=sr("custom");qe.dismiss=r=>{Rn({type:3,toastId:r})};qe.remove=r=>Rn({type:4,toastId:r});qe.promise=(r,o,a)=>{let d=qe.loading(o.loading,{...a,...a==null?void 0:a.loading});return r.then(u=>(qe.success(Ps(o.success,u),{id:d,...a,...a==null?void 0:a.success}),u)).catch(u=>{qe.error(Ps(o.error,u),{id:d,...a,...a==null?void 0:a.error})}),r};var cj=(r,o)=>{Rn({type:1,toast:{id:r,height:o}})},dj=()=>{Rn({type:5,time:Date.now()})},uj=r=>{let{toasts:o,pausedAt:a}=lj(r);I.useEffect(()=>{if(a)return;let h=Date.now(),m=o.map(f=>{if(f.duration===1/0)return;let g=(f.duration||0)+f.pauseDuration-(h-f.createdAt);if(g<0){f.visible&&qe.dismiss(f.id);return}return setTimeout(()=>qe.dismiss(f.id),g)});return()=>{m.forEach(f=>f&&clearTimeout(f))}},[o,a]);let d=I.useCallback(()=>{a&&Rn({type:6,time:Date.now()})},[a]),u=I.useCallback((h,m)=>{let{reverseOrder:f=!1,gutter:g=8,defaultPosition:v}=m||{},y=o.filter(z=>(z.position||v)===(h.position||v)&&z.height),S=y.findIndex(z=>z.id===h.id),R=y.filter((z,L)=>L<S&&z.visible).length;return y.filter(z=>z.visible).slice(...f?[R+1]:[0,R]).reduce((z,L)=>z+(L.height||0)+g,0)},[o]);return{toasts:o,handlers:{updateHeight:cj,startPause:dj,endPause:d,calculateOffset:u}}},hj=zt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,pj=zt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,mj=zt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,fj=hn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${r=>r.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${hj} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${pj} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${r=>r.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${mj} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,xj=zt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,gj=hn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${r=>r.secondary||"#e0e0e0"};
  border-right-color: ${r=>r.primary||"#616161"};
  animation: ${xj} 1s linear infinite;
`,jj=zt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,vj=zt`
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
}`,yj=hn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${r=>r.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${jj} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${vj} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${r=>r.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,bj=hn("div")`
  position: absolute;
`,wj=hn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Sj=zt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ej=hn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Sj} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Cj=({toast:r})=>{let{icon:o,type:a,iconTheme:d}=r;return o!==void 0?typeof o=="string"?I.createElement(Ej,null,o):o:a==="blank"?null:I.createElement(wj,null,I.createElement(gj,{...d}),a!=="loading"&&I.createElement(bj,null,a==="error"?I.createElement(fj,{...d}):I.createElement(yj,{...d})))},kj=r=>`
0% {transform: translate3d(0,${r*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Tj=r=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${r*-150}%,-1px) scale(.6); opacity:0;}
`,Pj="0%{opacity:0;} 100%{opacity:1;}",Ij="0%{opacity:1;} 100%{opacity:0;}",Dj=hn("div")`
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
`,Aj=hn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Oj=(r,o)=>{let a=r.includes("top")?1:-1,[d,u]=Fh()?[Pj,Ij]:[kj(a),Tj(a)];return{animation:o?`${zt(d)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${zt(u)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Nj=I.memo(({toast:r,position:o,style:a,children:d})=>{let u=r.height?Oj(r.position||o||"top-center",r.visible):{opacity:0},h=I.createElement(Cj,{toast:r}),m=I.createElement(Aj,{...r.ariaProps},Ps(r.message,r));return I.createElement(Dj,{className:r.className,style:{...u,...a,...r.style}},typeof d=="function"?d({icon:h,message:m}):I.createElement(I.Fragment,null,h,m))});ej(I.createElement);var Rj=({id:r,className:o,style:a,onHeightUpdate:d,children:u})=>{let h=I.useCallback(m=>{if(m){let f=()=>{let g=m.getBoundingClientRect().height;d(r,g)};f(),new MutationObserver(f).observe(m,{subtree:!0,childList:!0,characterData:!0})}},[r,d]);return I.createElement("div",{ref:h,className:o,style:a},u)},Mj=(r,o)=>{let a=r.includes("top"),d=a?{top:0}:{bottom:0},u=r.includes("center")?{justifyContent:"center"}:r.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Fh()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${o*(a?1:-1)}px)`,...d,...u}},Lj=Ws`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,gs=16,Bj=({reverseOrder:r,position:o="top-center",toastOptions:a,gutter:d,children:u,containerStyle:h,containerClassName:m})=>{let{toasts:f,handlers:g}=uj(a);return I.createElement("div",{style:{position:"fixed",zIndex:9999,top:gs,left:gs,right:gs,bottom:gs,pointerEvents:"none",...h},className:m,onMouseEnter:g.startPause,onMouseLeave:g.endPause},f.map(v=>{let y=v.position||o,S=g.calculateOffset(v,{reverseOrder:r,gutter:d,defaultPosition:o}),R=Mj(y,S);return I.createElement(Rj,{id:v.id,key:v.id,onHeightUpdate:g.updateHeight,className:v.visible?Lj:"",style:R},v.type==="custom"?Ps(v.message,v):u?u(v):I.createElement(Nj,{toast:v,position:y}))}))},Hu=qe;const Wh="/assets/logo-D7vIHjWw.png";var Jh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vu=Ut.createContext&&Ut.createContext(Jh),Fj=["attr","size","title"];function Wj(r,o){if(r==null)return{};var a=Jj(r,o),d,u;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(u=0;u<h.length;u++)d=h[u],!(o.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(r,d)&&(a[d]=r[d])}return a}function Jj(r,o){if(r==null)return{};var a={};for(var d in r)if(Object.prototype.hasOwnProperty.call(r,d)){if(o.indexOf(d)>=0)continue;a[d]=r[d]}return a}function Is(){return Is=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(r[d]=a[d])}return r},Is.apply(this,arguments)}function Gu(r,o){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);o&&(d=d.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),a.push.apply(a,d)}return a}function Ds(r){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?Gu(Object(a),!0).forEach(function(d){Uj(r,d,a[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Gu(Object(a)).forEach(function(d){Object.defineProperty(r,d,Object.getOwnPropertyDescriptor(a,d))})}return r}function Uj(r,o,a){return o=zj(o),o in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r}function zj(r){var o=_j(r,"string");return typeof o=="symbol"?o:o+""}function _j(r,o){if(typeof r!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var d=a.call(r,o||"default");if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function Uh(r){return r&&r.map((o,a)=>Ut.createElement(o.tag,Ds({key:a},o.attr),Uh(o.child)))}function pn(r){return o=>Ut.createElement(qj,Is({attr:Ds({},r.attr)},o),Uh(r.child))}function qj(r){var o=a=>{var{attr:d,size:u,title:h}=r,m=Wj(r,Fj),f=u||a.size||"1em",g;return a.className&&(g=a.className),r.className&&(g=(g?g+" ":"")+r.className),Ut.createElement("svg",Is({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,d,m,{className:g,style:Ds(Ds({color:r.color||a.color},a.style),r.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),h&&Ut.createElement("title",null,h),r.children)};return Vu!==void 0?Ut.createElement(Vu.Consumer,null,a=>o(a)):o(Jh)}function Hj(r){return pn({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function zh(r){return pn({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(r)}function Vj(r){return pn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(r)}function Gj(r){return pn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(r)}function $j(r){return pn({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(r)}function _h(r){return pn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(r)}function Xj(r){return pn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function qh(r){return pn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"},child:[]},{tag:"path",attr:{d:"M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"},child:[]}]})(r)}function Kj(){const r=Nn(),[o,a]=I.useState({name:"",email:"",password:""}),d=async u=>{u.preventDefault();const{name:h,email:m,password:f}=o;try{const g=await ye.post("/register",{email:m,password:f,name:h});g.error?qe.error(g.error):(a({}),qe.success("Registration successful"),r("/login"))}catch(g){console.log(g)}};return e.jsxs("section",{className:"register",children:[e.jsxs(la,{to:"/",children:[" ",e.jsx("img",{src:Wh,alt:"",className:"logo"})]}),e.jsxs("div",{className:"register-container",children:[e.jsx("div",{className:"register-details",children:e.jsxs("h1",{children:["Become an Automation Engineer! ",e.jsx("br",{}),"Enroll now💚"]})}),e.jsxs("div",{className:"registration",children:[e.jsx("div",{className:"sign-up",children:e.jsx("h1",{className:"sign-up-head",children:"Create Your Account"})}),e.jsxs("button",{className:"google",children:["Continue with Google ",e.jsx(zh,{})]}),e.jsxs("form",{onSubmit:d,className:"sign-up-form",children:[e.jsxs("div",{className:"sign-up-name",children:[e.jsx("span",{children:e.jsx(Xj,{})}),e.jsx("input",{type:"text",placeholder:"Enter your name",value:o.name,onChange:u=>a({...o,name:u.target.value})})]}),e.jsxs("div",{className:"sign-up-mail",children:[e.jsx("span",{children:e.jsx(qh,{})}),e.jsx("input",{type:"email",placeholder:"Enter your email",value:o.email,onChange:u=>a({...o,email:u.target.value})})]}),e.jsxs("div",{className:"sign-up-password",children:[e.jsx("span",{children:e.jsx(_h,{})}),e.jsx("input",{type:"password",placeholder:"Enter your password",value:o.password,onChange:u=>a({...o,password:u.target.value})})]}),e.jsx("div",{className:"sign-up-links",children:e.jsx("label",{htmlFor:"",className:"forgot",children:"Forgot your password?"})}),e.jsx("button",{className:"signup",type:"submit",children:"Sign up"})]})]})]})]})}function Qj(){const r=Nn(),[o,a]=I.useState({email:"",password:""}),d=async u=>{u.preventDefault();const{email:h,password:m}=o;try{const{data:f}=await ye.post("/dashboard",{email:h,password:m});f.error?Hu.error(f.error):(a({}),Hu.success("Login successful"),r("/"))}catch{}};return e.jsxs("section",{className:"login",children:[e.jsx(la,{to:"/",children:e.jsx("img",{src:Wh,alt:"",className:"logo"})}),e.jsxs("div",{className:"login-container",children:[e.jsxs("h1",{className:"login-title",children:["Welcome back😀 ",e.jsx("br",{})," Please login using your credentials"]}),e.jsxs("div",{className:"login-content",children:[e.jsx("div",{className:"login-head",children:e.jsx("h1",{children:"Log in to your account"})}),e.jsxs("button",{className:"google1",children:["Continue with Google ",e.jsx(zh,{})]}),e.jsxs("form",{onSubmit:d,className:"login-form",children:[e.jsxs("div",{className:"login-mail",children:[e.jsx("span",{children:e.jsx(qh,{})}),e.jsx("input",{type:"email",placeholder:"Enter your email",value:o.email,onChange:u=>a({...o,email:u.target.value})})]}),e.jsxs("div",{className:"login-password",children:[e.jsx("span",{children:e.jsx(_h,{})}),e.jsx("input",{type:"password",placeholder:"Enter your password",value:o.password,onChange:u=>a({...o,password:u.target.value})})]}),e.jsx("div",{className:"login-links",children:e.jsx("label",{htmlFor:"",className:"forgot",children:"Forgot your password?"})}),e.jsx("button",{className:"signup",type:"submit",children:"Log In"})]})]})]})]})}function Yj(){const r=[{id:1,name:"Rakesh",dateCreated:"2/04/2023",status:"Active"},{id:1,name:"Manish",dateCreated:"2/04/2023",status:"Inactive"},{id:1,name:"Rohit",dateCreated:"2/04/2023",status:"Active"},{id:1,name:"Saurav",dateCreated:"2/04/2023",status:"Inactive"},{id:1,name:"Prince",dateCreated:"2/04/2023",status:"Inactive"}];return e.jsxs("div",{className:"dashboard",children:[e.jsx("h1",{children:"Dashboard"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Date created"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:r.map((o,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:a+1}),e.jsx("td",{children:o.name}),e.jsx("td",{children:o.dateCreated}),e.jsx("td",{children:o.status})]},o.id))})]})]})}const Zj="/assets/java1-BRFGGCGl.png",ev="/assets/java2-CbWgCtix.png",tv="/assets/java3-CDW33hWP.png",nv="/assets/java4-Cjm3AWYx.png";function iv(){return e.jsxs("div",{className:"Java",children:[e.jsx("h1",{children:"Presentation to Java"}),e.jsx("p",{children:"Java is an object-oriented, class-based high-level programming language that aims to have the fewest possible number of execution dependencies. It is a general-purpose language that seeks to let application developers type in once, and run anywhere (WORA), implying that compiled Java code can run on all platforms that support Java without the need for recompilation."}),e.jsx("h1",{children:"Overview"}),e.jsx("p",{children:"Initially designed by Sun Microsystems and released in 1995, it has since evolved significantly and is now maintained by Oracle Corporation. Simplicity, portability, stability, and security are some of the attributes making it a popular choice for building a variety of applications ranging from mobile apps to large-scale enterprise systems."}),e.jsx("h1",{children:"Key Highlights of Java"}),e.jsx("h4",{children:"Simple and Familiar"}),e.jsxs("p",{children:["The syntax of Java is mostly derived from C++ with simpler object-oriented facilities with fewer low-level features.",e.jsx("br",{}),"The language avoids complexities like those found in C++, such as pointers and operator overloading, making it easier to learn and use."]}),e.jsx("h4",{children:"Object-Oriented"}),e.jsxs("p",{children:["In Java everything is an object thus it is just purely object-oriented. This helps in arranging the program into a set of objects communicating via methods.",e.jsx("br",{}),"Key principles include encapsulation, inheritance, and polymorphism."]}),e.jsx("h4",{children:"Independence from a Particular Platform"}),e.jsxs("p",{children:["At both the source level and the binary level Java achieves independence from any particular platform.",e.jsx("br",{}),"For instance, Java compiler converts Java code into bytecode which can be executed on whatever platform through Java Virtual Machine (JVM) without minding about the underlying architecture."]}),e.jsx("h4",{children:"Robust and Secure"}),e.jsxs("p",{children:["In addition to having strong memory management system alongside automatic garbage collection feature, early checking for possible errors is also preferred in Java. ",e.jsx("br",{}),"Through this language, explicit pointer usage is avoided yielding a secure environment where inner JVM provides a robust security architecture for all java programs."]}),e.jsx("h4",{children:"Multithreaded"}),e.jsx("p",{children:"Multithreading support of java enables multiple threads of execution to run concurrently and enhance performance of applications especially those that are computationally intensive."}),e.jsx("h4",{children:"High Performance"}),e.jsxs("p",{children:["Though interpreted languages are generally slower than compiled ones, Java bytecode is almost native code in terms of performance. ",e.jsx("br",{}),"This involves converting bytecode to native machine code at runtime by Just-In-Time (JIT) compilers to optimize its performance."]}),e.jsx("h4",{children:"Distributed"}),e.jsx("p",{children:"Java TCP/IP and HTTP/FTP protocols are supported in full via abundant libraries, making distributed computing a reality."}),e.jsx("h4",{children:"Dynamic"}),e.jsx("p",{children:"Java is capable of dynamically linking new class libraries, methods, and objects that provide for its adaptability and extendibility."}),e.jsx("h1",{children:"Java Architecture"}),e.jsx("p",{children:"Java architecture details:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Java Development Kit (JDK)"}),e.jsx("p",{children:"The JDK is a feature-rich software development kit necessary for developing Java applications that comprise the Java Runtime Environment (JRE), an interpreter/loader (Java), a compiler (Javac), an archiver (Jar), a documentation generator (Javadoc), and other tools used in Java programming."}),e.jsx("li",{children:"Java Runtime Environment (JRE)"}),e.jsx("p",{children:"Libraries, and Java Virtual Machine (JVM) among others are some of the features that make JRE run Java programs without any need for special hardware, operating systems, or any other explicit support such as compilers or debuggers."}),e.jsx("li",{children:"Java Virtual Machine (JVM)"}),e.jsxs("p",{children:["JVM is an abstract computing machine enabling a computer to execute a computer program written in Java language; it has three notions: there is specification, implementation, and instance. ",e.jsx("br",{}),"It converts bytecode into machine code and provides the runtime environment needed for running Java applications."]})]}),e.jsx("h1",{children:"Different Versions of Java"}),e.jsx("p",{children:"Java has three main editions:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Java SE (Java Standard Edition)"}),e.jsx("p",{children:"The core aspects of the Java programming language are provided by Java SE. It is responsible for defining everything from low-level classes and objects that are used in network, security, database connection, graphical user interface (GUI) development, and XML parsing."}),e.jsx("li",{children:"Java EE (Java Enterprise Edition)"}),e.jsx("p",{children:"On top of Java SE, this provides an API and a runtime environment for building large-scale, multi-tiered, scalable, reliable, and secure internet applications."}),e.jsx("li",{children:"Java ME (Java Micro Edition)"}),e.jsx("p",{children:"This is a robust and flexible java platform for mobile devices and embedded systems. It is a subset of java SE that provides libraries and APIs specifically designed for use with embedded systems and mobile devices."})]}),e.jsx("h1",{children:"Important Concepts in Java"}),e.jsx("h4",{children:"Classes And Objects"}),e.jsxs("p",{children:["Classes act as blueprints for objects that contain data type structure plus operating methods. ",e.jsx("br",{})," Objects are created using the keyword ‘new’ as instances of classes."]}),e.jsx("h4",{children:"Inheritance"}),e.jsx("p",{children:"By inheriting properties and behaviours from another class, inheritance lets a new class be developed that enhances code reuse as well as the method overriding"}),e.jsx("h4",{children:"Polymorphism"}),e.jsx("p",{children:"With polymorphism, one interface can do many things for different types of objects; these actions are based on the situation."}),e.jsx("h4",{children:"Abstraction"}),e.jsx("p",{children:"Abstraction is all about hiding the intricate details and showing only relevant features of the object to reduce complexity. It has done using abstract classes and interfaces."}),e.jsx("h4",{children:"Encapsulation"}),e.jsx("p",{children:"Data (variables) and code (methods) are bound together as a single unit under encapsulation, whereby the data is made private and hence not visible to the outside world while it can be accessed through public methods."}),e.jsx("h1",{children:"Conclusion"}),e.jsx("p",{children:"Java is defying the odds as far as adaptability is concerned, and its position on this remains strong. No wonder it is one of the most portable, secure, and stable programming languages that enjoys widespread appeal for various applications. Java’s fundamental principles and functionalities should be understood by anyone who wishes to advance in computer programming or software development generally"})]})}const rv=()=>e.jsxs("div",{className:"JavaVariables",children:[e.jsx("h1",{children:"Types of Java Variables"}),e.jsx("p",{children:"Your browser type will tell you which programming language you are using. Java variables are not quite defined. In this way, they do much more than holding values of data; they are an integral part of the programming language. The kind of data that can be held in a particular variable is determined by its type."}),e.jsx("h2",{children:"Variable Types"}),e.jsx("p",{children:"Different groups have their role to play in the language, such as Variable types:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Local Variables"}),e.jsx("li",{children:"Instance Variables (Non-Static Fields)"}),e.jsx("li",{children:"Class Variables (Static Fields)"})]}),e.jsx("h2",{children:"Local Variables"}),e.jsx("p",{children:"Local variables are declared within methods, constructors, or blocks and are created when these entities are constructed but are lost once they are finished. Before using a local variable, it is important to assign it an initial value, as it does not have any default value."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:e.jsx("code",{children:`
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
`})}),e.jsx("p",{children:"Understanding Java variables and their scope is crucial for writing good code and ensuring correctness. The scope and behavior of each type of variable are essential for data storage and retrieval in Java programs."})]}),sv=()=>e.jsxs("div",{className:"dataTypes",children:[e.jsx("h1",{children:"Java Data Types"}),e.jsx("p",{children:"Java is a strictly typed language, which means that every variable must be declared before it can be used. Data types specify the size and type of values that can be stored in an identifier. In Java, data types are divided into two broad categories: primitive data types and reference (or non-primitive) data types."}),e.jsx("h2",{children:"A. Primitive Data Types"}),e.jsx("p",{children:"Java primitive data types are eight in number, each with its own purpose:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Byte"})," ",e.jsx("br",{}),"Size: 8-bit ",e.jsx("br",{}),"Range: -128 to 127 ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"byte byteVar = 100;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Short"})," ",e.jsx("br",{}),"Size: 16-bit ",e.jsx("br",{}),"Range: -32,768 to 32,767 ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"short shortVar = 10000;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Int"})," ",e.jsx("br",{}),"Size: 32-bit ",e.jsx("br",{}),"Range: -2^31 to 2^31 - 1 ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"int intVar = 100000;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Long"})," ",e.jsx("br",{}),"Size: 64-bit ",e.jsx("br",{}),"Range: -2^63 to 2^63 - 1 ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"long longVar = 100000L;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Float"})," ",e.jsx("br",{}),"Size: 32-bit floating point ",e.jsx("br",{}),"Range: ±3.40282347E+38F ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"float floatVar = 234.5f;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Double"})," ",e.jsx("br",{}),"Size: 64-bit floating point ",e.jsx("br",{}),"Range: ±1.79769313486231570E+308 ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"double doubleVar = 123.456;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boolean"})," ",e.jsx("br",{}),"Size: 1-bit ",e.jsx("br",{}),"Range: true or false ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"boolean boolVar = true;"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Char"})," ",e.jsx("br",{}),"Size: 16-bit Unicode character ",e.jsx("br",{}),"Range: '\\u0000' (0) to '\\uffff' (65,535) ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"char charVar = 'A';"})]})]}),e.jsx("h2",{children:"B. Non-Primitive Data Types"}),e.jsx("p",{children:"Reference data types refer to objects, and they include classes, interfaces, arrays, and strings among others."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Classes"})," ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:"MyClass myObject = new MyClass(10);"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Interfaces"})," ",e.jsx("br",{}),"Example: ",e.jsxs("code",{children:["interface MyInterface ","{"," void myMethod(); ","}"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arrays"})," ",e.jsx("br",{}),"Example: ",e.jsxs("code",{children:["int[] arrayVar = ","{1, 2, 3, 4, 5}",";"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Strings"})," ",e.jsx("br",{}),"Example: ",e.jsx("code",{children:'String stringVar = "Hello, World!";'})]})]}),e.jsx("h2",{children:"Program to Illustrate Primitive and Reference Data Types in Java"}),e.jsx("pre",{children:`public class DataTypeExample {
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
}`})]}),ov=()=>e.jsxs("div",{className:"javaOperators",children:[e.jsx("h1",{children:"Operators in Java"}),e.jsx("p",{children:"Java has special symbols known as operators that perform certain functions on values and variables. These are basic parts of any programming language, and they allow the manipulation of data as well as variables. There is a wide range of operation types (including arithmetic, and logical) that Java provides with its set of operators."}),e.jsx("h2",{children:"Types of Operators in Java"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Arithmetic Operator"}),e.jsx("li",{children:"Relational Operator"}),e.jsx("li",{children:"Logical Operator"}),e.jsx("li",{children:"Assignment Operator"}),e.jsx("li",{children:"Bitwise Operator"}),e.jsx("li",{children:"Unary Operator"}),e.jsx("li",{children:"Instance of Operator"}),e.jsx("li",{children:"Conditional Operator"})]}),e.jsx("h2",{children:"1. Arithmetic Operator"}),e.jsx("p",{children:"Arithmetic operators are used to perform basic arithmetic operations like addition, subtraction, multiplication, and division."}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Addition (+): ",e.jsx("code",{children:"a + b"})]}),e.jsxs("li",{children:["Subtraction (-): ",e.jsx("code",{children:"a - b"})]}),e.jsxs("li",{children:["Multiplication (*): ",e.jsx("code",{children:"a * b"})]}),e.jsxs("li",{children:["Division (/): ",e.jsx("code",{children:"a / b"})]}),e.jsxs("li",{children:["Modulus (%): ",e.jsx("code",{children:"a % b"})]}),e.jsxs("li",{children:["Increment (++): ",e.jsx("code",{children:"a++"})," or ",e.jsx("code",{children:"b++"})]}),e.jsxs("li",{children:["Decrement (--): ",e.jsx("code",{children:"a--"})," or ",e.jsx("code",{children:"b--"})]})]}),e.jsx("pre",{children:`Example:
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
System.out.println("max -> " + max); // 20`})]}),lv=()=>e.jsxs("div",{className:"javaStrings",children:[e.jsx("h1",{children:"Java Strings"}),e.jsx("p",{children:"Strings in Java are objects that represent a sequence of characters. Java provides the `String` class to create and manipulate strings. Strings are immutable, which means once a string is created, it cannot be changed."}),e.jsx("h2",{children:"Creating Strings"}),e.jsx("p",{children:"In Java, there are two main ways to create strings:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using string literals: ",e.jsx("code",{children:'String str = "Hello";'})]}),e.jsxs("li",{children:["Using the `new` keyword: ",e.jsx("code",{children:'String str = new String("Hello");'})]})]}),e.jsx("h2",{children:"Common String Methods"}),e.jsx("p",{children:"The `String` class provides many useful methods for working with strings. Some of the most commonly used methods are:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"length()"}),": Returns the length of the string. ",e.jsx("code",{children:"str.length()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"charAt()"}),": Returns the character at the specified index. ",e.jsx("code",{children:"str.charAt(0)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"substring()"}),": Returns a new string that is a substring of the original string. ",e.jsx("code",{children:"str.substring(1, 4)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"indexOf()"}),": Returns the index of the first occurrence of the specified character. ",e.jsx("code",{children:"str.indexOf('e')"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"toLowerCase()"}),": Converts all characters in the string to lowercase. ",e.jsx("code",{children:"str.toLowerCase()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"toUpperCase()"}),": Converts all characters in the string to uppercase. ",e.jsx("code",{children:"str.toUpperCase()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"trim()"}),": Removes any leading and trailing whitespace from the string. ",e.jsx("code",{children:"str.trim()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"replace()"}),": Replaces occurrences of a specified character or substring with another character or substring. ",e.jsx("code",{children:"str.replace('l', 'p')"})]})]}),e.jsx("h2",{children:"String Concatenation"}),e.jsxs("p",{children:["You can concatenate strings in Java using the ",e.jsx("code",{children:"+"})," operator or the ",e.jsx("code",{children:"concat()"})," method."]}),e.jsx("pre",{children:`String str1 = "Hello";
String str2 = "World";
String result = str1 + " " + str2;  // Hello World
String result2 = str1.concat(" ").concat(str2);  // Hello World`}),e.jsx("h2",{children:"Immutable Strings"}),e.jsx("p",{children:"As mentioned earlier, strings in Java are immutable. This means that whenever you modify a string, a new `String` object is created, and the original string remains unchanged. For example:"}),e.jsx("pre",{children:`String str = "Hello";
str = str + " World";  // A new String object is created with the value "Hello World"`}),e.jsx("h2",{children:"StringBuilder and StringBuffer"}),e.jsx("p",{children:"If you need to modify a string frequently, it's better to use `StringBuilder` or `StringBuffer`. These classes provide mutable strings."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"StringBuilder"}),": More efficient than `String` for concatenating strings, but it is not thread-safe."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"StringBuffer"}),": Similar to `StringBuilder` but is thread-safe, meaning it can be used in a multithreaded environment."]})]}),e.jsx("pre",{children:`StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb.toString());  // Hello World`}),e.jsx("h2",{children:"Comparing Strings"}),e.jsx("p",{children:"In Java, you can compare strings using the `equals()` method or the `compareTo()` method."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"equals()"}),": Compares two strings for equality. ",e.jsx("code",{children:'str.equals("Hello")'})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"compareTo()"}),": Compares two strings lexicographically. ",e.jsx("code",{children:'str.compareTo("Hello")'})]})]}),e.jsx("pre",{children:`String str1 = "Hello";
String str2 = "World";
boolean isEqual = str1.equals(str2);  // false
int comparison = str1.compareTo(str2);  // Negative if str1 is less than str2, 0 if equal, positive if greater`}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Strings are a fundamental part of Java programming. Understanding how to create and manipulate strings is essential for effective coding in Java. By using the provided methods, concatenation techniques, and tools like `StringBuilder` and `StringBuffer`, you can efficiently manage string operations in your Java applications."})]}),av=()=>e.jsxs("div",{className:"javaMethods",children:[e.jsx("h1",{children:"Java Methods"}),e.jsx("p",{children:"Methods in Java are small pieces of code that perform specific tasks. They are essential in Java programming as they help make the code reusable, modular, and maintainable."}),e.jsx("h2",{children:"Table of Contents"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Method Declaration"}),e.jsx("li",{children:"Method Invocation"}),e.jsx("li",{children:"Parameters and Return Values"}),e.jsx("li",{children:"Method Overloading"}),e.jsx("li",{children:"Static Methods"}),e.jsx("li",{children:"Recursive Methods"}),e.jsx("li",{children:"Access Modifiers"}),e.jsx("li",{children:"Return Type"}),e.jsx("li",{children:"Conclusion"})]}),e.jsx("h2",{children:"1. Method Declaration"}),e.jsx("p",{children:"A method declaration shows the return type, name, and parameters of the method. The body of the method contains instructions that will be executed when the method is called."}),e.jsx("pre",{children:`returnType methodName(parameters) {
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
}`}),e.jsx("h2",{children:"9. Conclusion"}),e.jsx("p",{children:"Methods in Java are vital for writing reusable and maintainable code. A solid understanding of how to declare, invoke, overload, and manage access to methods will significantly improve your Java programming."})]}),cv=()=>e.jsxs("div",{className:"javaArrays",children:[e.jsx("h1",{children:"Java Arrays"}),e.jsx("p",{children:"Java arrays are an important way of storing a sequential, fixed-size collection of elements of the same type. This guide discusses array basics such as declaration, initialization, accessing elements, and common operations."}),e.jsx("h2",{children:"Table of Contents"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Arrays",e.jsxs("ul",{children:[e.jsx("li",{children:"Declaration and Initialization"}),e.jsx("li",{children:"Accessing Elements of Array"}),e.jsx("li",{children:"Operations Performed on Arrays"})]})]}),e.jsxs("li",{children:["Multi-Dimensional Arrays",e.jsxs("ul",{children:[e.jsxs("li",{children:["Two-Dimensional",e.jsxs("ul",{children:[e.jsx("li",{children:"Declaration and Initialization"}),e.jsx("li",{children:"Accessing and Modifying Elements"}),e.jsx("li",{children:"Looping through a Two-Dimensional Array"})]})]}),e.jsxs("li",{children:["Three-Dimensional",e.jsx("ul",{children:e.jsx("li",{children:"Declaration and Initialization"})})]})]})]}),e.jsxs("li",{children:["ArrayList",e.jsxs("ul",{children:[e.jsx("li",{children:"Basic Operations on ArrayList"}),e.jsx("li",{children:"ArrayList Methods"}),e.jsx("li",{children:"Advantages"}),e.jsx("li",{children:"Disadvantages of ArrayList"}),e.jsx("li",{children:"Example of ArrayList"})]})]}),e.jsx("li",{children:"Conclusion"})]}),e.jsx("h2",{children:"1. Arrays"}),e.jsx("h3",{children:"Declaration and Initialization"}),e.jsx("p",{children:"There are various ways to declare and initialize arrays:"}),e.jsx("pre",{children:`int[] numbers;  // Preferred
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
fruits.add("Banana");`}),e.jsx("h3",{children:"Basic Operations on ArrayList"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Adding Elements:"})," ",e.jsx("code",{children:'fruits.add("Orange");'})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessing Elements:"})," ",e.jsx("code",{children:"fruits.get(0);"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Removing Elements:"})," ",e.jsx("code",{children:"fruits.remove(1);"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Checking Size:"})," ",e.jsx("code",{children:"fruits.size();"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Clearing:"})," ",e.jsx("code",{children:"fruits.clear();"})]})]}),e.jsx("h3",{children:"ArrayList Methods"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"isEmpty()"}),": Checks if the list is empty."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"contains()"}),": Checks if the list contains the specified element."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"indexOf()"}),": Returns the index of the first occurrence of the specified element."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"addAll()"}),": Adds all elements of a collection to the ArrayList."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"toArray()"}),": Converts ArrayList to an array of objects."]})]}),e.jsx("h2",{children:"4. Conclusion"}),e.jsx("p",{children:"Arrays and ArrayLists in Java are essential for managing collections of elements. Arrays are fixed in size, whereas ArrayLists are dynamic. Understanding the manipulation of these data structures is crucial for efficient Java programming."})]}),dv=()=>e.jsxs("div",{className:"javaAbstraction",children:[e.jsx("h1",{children:"Abstraction in Java"}),e.jsx("p",{children:"Abstraction is the process of hiding internal details and showing only the essential features of an object. It reduces complexity and allows the programmer to focus on interacting with objects rather than their inner workings."}),e.jsx("h2",{children:"Table of Contents"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Abstraction"}),e.jsx("li",{children:"Abstract Classes"}),e.jsx("li",{children:"Interfaces"}),e.jsx("li",{children:"Difference Between Interfaces and Abstract Classes"}),e.jsx("li",{children:"Key Features of Abstraction"}),e.jsx("li",{children:"Advantages of Abstraction"}),e.jsx("li",{children:"Disadvantages of Abstraction"}),e.jsx("li",{children:"When to Utilize Abstraction"}),e.jsx("li",{children:"Conclusion"})]}),e.jsx("h2",{children:"1. Abstraction"}),e.jsx("p",{children:"Abstraction allows you to focus on the what of an object rather than the how. It hides implementation details while exposing only necessary information."}),e.jsx("pre",{children:`// Abstract class
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
}`}),e.jsx("h2",{children:"4. Difference Between Abstract Classes and Interfaces"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Abstract Classes"}),e.jsx("th",{children:"Interfaces"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Can have both abstract and regular methods."}),e.jsx("td",{children:"Can only contain abstract methods (until Java 8 introduces default and static methods)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Can have instance variables."}),e.jsx("td",{children:"Cannot have instance variables, only constants."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Supports single inheritance."}),e.jsx("td",{children:"Supports multiple inheritance."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Allows constructors."}),e.jsx("td",{children:"Does not allow constructors."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Members can have any access modifier."}),e.jsx("td",{children:"Members are public by default."})]})]})]}),e.jsx("h2",{children:"5. Key Features of Abstraction"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Simplifies code by hiding complex implementation details."}),e.jsx("li",{children:"Improves flexibility by allowing changes in implementation without affecting the users of the class."}),e.jsx("li",{children:"Encourages code reusability across different parts of an application."}),e.jsx("li",{children:"Facilitates maintainability by separating concerns and reducing dependencies."})]}),e.jsx("h2",{children:"6. Advantages of Abstraction"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Helps secure programs by exposing only relevant details."}),e.jsx("li",{children:"Allows internal changes without affecting the user interface."}),e.jsx("li",{children:"Improves code maintainability and reuse."}),e.jsx("li",{children:"Offers modularity and easier debugging."}),e.jsx("li",{children:"Enhances security by preventing access to internal class details."})]}),e.jsx("h2",{children:"7. Disadvantages of Abstraction"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Can make understanding the system more difficult."}),e.jsx("li",{children:"Overuse can lead to increased complexity and performance issues."}),e.jsx("li",{children:"Debugging can be harder due to the layers of abstraction."})]}),e.jsx("h2",{children:"8. When to Utilize Abstraction"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use abstract classes when you want to provide a common base with default behavior."}),e.jsx("li",{children:"Use interfaces when you need multiple inheritance or to define a contract for a class without dictating its implementation."})]}),e.jsx("h2",{children:"9. Conclusion"}),e.jsx("p",{children:"Abstraction in Java simplifies complexity by separating interface from implementation. Abstract classes and interfaces are essential tools for managing code organization, flexibility, and reusability. Utilizing abstraction helps developers save time by focusing on high-level design rather than low-level implementation."})]}),uv=()=>e.jsxs("div",{className:"JavaConditions",children:[e.jsx("h1",{children:"Conditional Statements in Java"}),e.jsxs("section",{children:[e.jsx("h2",{children:"1. If Statement"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"if"})," statement executes a block of code if a specified condition is true."]}),e.jsx("pre",{children:e.jsx("code",{children:`int age = 18;
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
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Summary"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"If statement:"})," Executes a block of code if a condition is true."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"If-else statement:"})," Executes one block of code if the condition is true, and another block if false."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"If-else-if ladder:"})," Tests multiple conditions sequentially."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Nested if statement:"})," Allows checking multiple related conditions in nested form."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Switch statement:"})," Executes one block of code out of many based on the value of a variable or expression."]})]})]})]}),hv=()=>e.jsxs("div",{className:"javaApis",children:[e.jsx("h1",{children:"APIs in Java"}),e.jsx("p",{children:"A Java API (Application Programming Interface) is a collection of classes, methods, and interfaces supplied by a library that enables interaction with other programs. Java APIs can be used to connect with libraries or frameworks through web services, with one of the most frequent uses being the development of RESTful web services."}),e.jsx("h2",{children:"Key Concepts"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Endpoints:"})," URLs through which clients interact with the API."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HTTP Methods:"})," Actions performed on resources (GET, POST, PUT, DELETE)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Request and Response:"})," Data sent to and received from the server."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Status Codes:"})," Communicates the result of an HTTP request (e.g., 200 OK, 404 Not Found)."]})]}),e.jsx("h2",{children:"Java API Components"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Java Compiler:"})," Converts user-written code into bytecode."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Java Virtual Machine (JVM):"})," Processes bytecode and produces output."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Java API:"})," Provides pre-built software components for connecting with software platforms or components."]})]}),e.jsx("h2",{children:"Building a RESTful API in Java Using Spring Boot"}),e.jsx("h3",{children:"1. Set Up Your Development Environment"}),e.jsx("p",{children:"Ensure you have the following:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Java Development Kit (JDK):"})," Installed on your machine."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"IDE:"})," Like IntelliJ IDEA, Eclipse, or NetBeans."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Build Tool:"})," Maven or Gradle for dependency management."]})]}),e.jsx("h3",{children:"2. Generate a New Spring Boot Project"}),e.jsxs("p",{children:["Use ",e.jsx("a",{href:"https://start.spring.io/",children:"Spring Initializr"})," to generate a Spring Boot project:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Project: Maven Project"}),e.jsx("li",{children:"Language: Java"}),e.jsx("li",{children:"Spring Boot: Choose the latest stable version"}),e.jsx("li",{children:"Group: com.example"}),e.jsx("li",{children:"Artifact: demo"}),e.jsx("li",{children:'Dependencies: Add "Spring Web" for RESTful services'})]}),e.jsx("h3",{children:"3. Project Structure"}),e.jsx("pre",{children:`demo
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
}`}),e.jsx("h3",{children:"7. Run and Test the API"}),e.jsx("p",{children:"Run the application and test the API using Postman or curl:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"GET all users:"})," ",e.jsx("code",{children:"GET http://localhost:8080/api/users"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"GET user by ID:"})," ",e.jsx("code",{children:"GET http://localhost:8080/api/users"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"POST create user:"})," ",e.jsx("code",{children:"POST http://localhost:8080/api/users"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"PUT update user:"})," ",e.jsx("code",{children:"PUT http://localhost:8080/api/users"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DELETE user:"})," ",e.jsx("code",{children:"DELETE http://localhost:8080/api/users"})]})]}),e.jsx("h2",{children:"Advantages of Using Java APIs"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Expedites development by providing pre-defined classes and packages."}),e.jsx("li",{children:"Supports high automation levels, enabling efficient workflows."}),e.jsx("li",{children:"Flexible data access and seamless integration across platforms."}),e.jsx("li",{children:"Improves service delivery by reducing time-to-market."})]}),e.jsx("h2",{children:"Types of Java APIs"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Public Java APIs:"})," Part of the JDK and free to use."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Private Java APIs:"})," Developed internally by organizations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Partner Java APIs:"})," Available for authorized partners."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Composite Java APIs:"})," Combine different types of APIs, often for microservices."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Web Java APIs:"})," Enable browser-based applications via HTTP protocol."]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Developing a REST API with Java using Spring Boot is powerful and simple. The framework's annotations and conventions make it easy to build scalable RESTful web services. Although this example shows basic CRUD operations, you can extend it with validation, exception handling, and database integration as needed."})]}),pv=()=>e.jsxs("div",{className:"JavaConstructor",children:[e.jsx("h1",{children:"Java Constructors"}),e.jsx("h2",{children:"1. Constructors in Java"}),e.jsx("p",{children:"Constructors are special methods in Java used to initialize objects. They are called when an instance of a class is created and have no return type. The name of the constructor must match the class name."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
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
        `})]}),mv=()=>e.jsxs("div",{className:"DataTypeConversion",children:[e.jsx("h1",{children:"Conversion of Data Type in Java"}),e.jsx("p",{children:"Data type conversion is a process of altering data into another type. There are two types of type casting in Java: implicit and explicit."}),e.jsx("h2",{children:"1. Implicit Type Conversion (Widening)"}),e.jsx("p",{children:"This happens by default when the smaller data type is converted to a larger data type. This process is also known as widening conversion because the target data type can store all the values of the original."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Examples of Widening:"})," byte to short, int, long, float, or double; int to long, float, or double, etc."]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
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
        `}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Data type conversion is crucial in Java, especially when dealing with different types of data. Implicit and explicit conversions both play an important role in ensuring smooth type handling."})]}),fv=()=>e.jsxs("div",{className:"Encapsulation",children:[e.jsx("h1",{children:"Encapsulation in Java OOPS"}),e.jsx("h2",{children:"1. Encapsulation"}),e.jsx("p",{children:"Encapsulation is the process in which data is packaged together. It combines code with information and acts as a shelter that protects the data from other codes outside of it."}),e.jsx("p",{children:"For example, in an object-oriented program, encapsulation ensures that the variables or data in a class are not directly accessible from outside the class. Access is granted only through member functions of the class where the variables are declared."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
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
        `}),e.jsx("h2",{children:"5. Key Points"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Encapsulation"}),": Protects internal object details from external access."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Data Hiding"}),": Declaring variables private to restrict access."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Access Control"}),": Using public methods to control data access and validation."]})]}),e.jsx("h2",{children:"6. Conclusion"}),e.jsx("p",{children:"Encapsulation ensures the protection and correct usage of data, enabling programmers to create flexible, reusable, and safe code."})]}),xv=()=>e.jsxs("div",{className:"EnumInJava",children:[e.jsx("h1",{children:"Enum in Java"}),e.jsx("p",{children:"In Java, an Enum is a special data type that allows developers to define a set of constants with fixed values. These constant names can be used wherever predefined values are required."}),e.jsx("h2",{children:"Syntax and Usage"}),e.jsx("p",{children:"An enum is defined as:"}),e.jsx("pre",{children:`
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
        `}),e.jsx("h2",{children:"Advantages of Enums"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Readability and Maintainability"}),": Enums enhance code readability by using meaningful names for constants."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Type Safety"}),": Enums are type-safe, ensuring only valid constants are used."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Static Checking"}),": Compile-time checking prevents errors related to invalid constant values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Switch Statement Support"}),": Enums work well with Java's ",e.jsx("code",{children:"switch"})," statements, simplifying logic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Constants and Behaviours Together"}),": Enums can encapsulate data and behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Singleton-like Behavior"}),": Only one instance of each enum value exists in the JVM."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enum Sets and Maps"}),": Java provides efficient collections like ",e.jsx("code",{children:"EnumSet"})," and ",e.jsx("code",{children:"EnumMap"})," for working with Enums."]})]}),e.jsx("h2",{children:"Disadvantages of Enums"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Limited Extensibility"}),": Enum constants are fixed at compile time and cannot be changed at runtime."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Namespace Pollution"}),": A large number of constants may pollute the namespace."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memory Overhead"}),": Enums use more memory than simple constants."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not Suitable for Large Data Sets"}),": Enums are best suited for small, well-defined groups of constants."]})]}),e.jsx("h2",{children:"When to Use Enums"}),e.jsxs("ul",{children:[e.jsx("li",{children:"When you have a small, well-defined group of constants that are unlikely to change."}),e.jsx("li",{children:"When you want to improve code readability and type safety."}),e.jsx("li",{children:"When you want to use methods and fields along with constants."})]}),e.jsx("h2",{children:"When to Avoid Enums"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Avoid Enums for large or frequently changing data sets."}),e.jsx("li",{children:"Avoid Enums if the constant set is not clearly defined or may frequently change."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Java Enums are a powerful way to define fixed sets of constants with behaviors and fields. They improve code clarity, type safety, and maintainability, but should be used cautiously for cases where extensibility and memory efficiency are important."})]}),gv=()=>e.jsxs("div",{className:"ExceptionHandlingInJava",children:[e.jsx("h1",{children:"Exception Handling in Java"}),e.jsxs("p",{children:["Exception handling in Java is a mechanism that ensures the normal flow of the program, even when runtime errors occur. Five keywords: ",e.jsx("strong",{children:"try"}),", ",e.jsx("strong",{children:"catch"}),", ",e.jsx("strong",{children:"finally"}),", ",e.jsx("strong",{children:"throw"}),", and ",e.jsx("strong",{children:"throws"})," are used in exception handling."]}),e.jsx("h2",{children:"Keywords"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"try:"})," The code that may result in an exception being thrown is enclosed in the try block."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"catch:"})," This block deals with exceptions and should always follow a try clause."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"finally:"})," Irrespective of whether an exception occurs, this section runs certain cleanup codes such as closing files or releasing resources."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"throw:"})," It explicitly raises an error condition or extends the default behavior by throwing exceptions at runtime."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"throws:"})," Declares exceptions that a method can throw, reducing memory usage by defining potential exceptions during compilation."]})]}),e.jsx("h2",{children:"Example"}),e.jsx("pre",{children:`
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
        `}),e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["For robust and error-tolerant programming in Java, exception handling is essential. By using ",e.jsx("code",{children:"try"}),", ",e.jsx("code",{children:"catch"}),", ",e.jsx("code",{children:"finally"}),", ",e.jsx("code",{children:"throw"}),", and ",e.jsx("code",{children:"throws"}),", we can handle errors gracefully, ensuring smooth program execution even during unexpected events."]})]}),jv=()=>e.jsxs("div",{className:"FileHandlingInJava",children:[e.jsx("h1",{children:"File Handling in Java"}),e.jsxs("p",{children:["File handling in Java is a crucial part of several programs, which allows them to read and write files. The ",e.jsx("code",{children:"java.io"})," package has various classes and methods for file handling."]}),e.jsx("h2",{children:"Elements of Basic File Operations"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Creating a File"}),e.jsx("li",{children:"Writing to a File"}),e.jsx("li",{children:"Reading from a File"}),e.jsx("li",{children:"Appending to a File"}),e.jsx("li",{children:"Deleting Files"})]}),e.jsx("h2",{children:"1. Creating a File"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"File"})," class is the base for file handling in Java. It provides methods to create, delete, and get information about files and directories."]}),e.jsx("pre",{children:`
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
        `}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Java file handling is a powerful feature that allows applications to interact with the filesystem. Understanding these basic operations is key to managing files in Java programs."})]}),vv=()=>e.jsxs("div",{className:"InheritanceDocument",children:[e.jsx("h1",{children:"Inheritance"}),e.jsx("h2",{children:"1. Inheritance - Basic Concepts"}),e.jsx("p",{children:"In Java, OOP’s core concepts include inheritance. It enables a new class to have the properties and behaviors (fields and methods) of an existing class. The inherited-from class is referred to as the base class or parent class while the inheriting class is called derived or child class."}),e.jsx("p",{children:"Inheritance is used:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code Reusability: The code written in the Superclass is common to all subclasses. Child classes can directly use the parent class code."}),e.jsx("li",{children:"Method Overriding: Method Overriding is achievable only through Inheritance. It is one of the ways by which Java achieves Run Time Polymorphism."}),e.jsx("li",{children:"Abstraction: The concept of abstract where we do not have to provide all details, is achieved through inheritance. Abstraction only shows the functionality to the user."})]}),e.jsx("h2",{children:"2. Types of Inheritance"}),e.jsx("p",{children:"Java supports single inheritance and multilevel inheritance. Classes in Java do not support multiple inheritances to avoid confusion or complexities."}),e.jsx("h3",{children:"Single Inheritance:"}),e.jsx("p",{children:"A class inherits from only one superclass."}),e.jsx("p",{children:e.jsx("strong",{children:"Single Inheritance Example:"})}),e.jsx("pre",{children:`class Animal {
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
I can bark`}),e.jsx("h2",{children:"6. Conclusion"}),e.jsx("p",{children:"Inheritance is a powerful feature of Object-Oriented Programming (OOP) in Java that enables code reusability and method overriding, among other benefits. By understanding and implementing inheritance, developers can create more modular and maintainable code structures."})]}),yv=()=>e.jsxs("div",{className:"JavaIteration",children:[e.jsx("h1",{children:"Java Iteration Statements"}),e.jsx("p",{children:"Iteration statements are also called loops. These types of statements are used to perform a block of code repeatedly as long as a certain condition is true. Java offers different kinds of iteration statements for dealing with various looping requirements which are:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"For Loop"}),e.jsx("li",{children:"While Loop"}),e.jsx("li",{children:"Do-While Loop"}),e.jsx("li",{children:"Nested Loops"}),e.jsx("li",{children:"Break / Continue Statement"}),e.jsx("li",{children:"Conclusion"})]}),e.jsx("h2",{children:"1. For Loop"}),e.jsx("p",{children:"For loop is applied if you know how many iterations that will be done. It consists of three parts: initialization, condition and increment/decrement."}),e.jsx("h3",{children:"Syntax:"}),e.jsx("pre",{children:e.jsx("code",{children:`for (initialization; condition; increment/decrement) {
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
}`})}),e.jsx("h2",{children:"6. Conclusion"}),e.jsx("p",{children:"Iteration statements in Java are essential for performing repetitive tasks efficiently. Java provides a variety of loops to suit different scenarios, from fixed iteration counts to conditionally controlled loops."})]}),bv=()=>e.jsxs("div",{className:"Poi",children:[e.jsx("h1",{children:"POI in Java"}),e.jsx("p",{children:"POI in Java is usually associated with the Apache POI library, a powerful open-source offering from Apache Software Foundation that enables Java programs to create, read, and manipulate Microsoft Office documents such as Excel spreadsheets, Word documents, and PowerPoint presentations."}),e.jsx("h2",{children:"Apache POI Components"}),e.jsxs("ul",{children:[e.jsx("li",{children:"HSSF (Horrible Spreadsheet Format): Deals with Excel '97(-2007) file format (.xls)."}),e.jsx("li",{children:"XSSF (XML Spreadsheet Format): Handles Excel 2007 OOXML (.xlsx) file format."}),e.jsx("li",{children:"HWPF (Horrible Word Processor Format): Manages Word '97(-2007) file format (.doc)."}),e.jsx("li",{children:"XWPF (XML Word Processor Format): Handles Word 2007 OOXML (.docx) file format."}),e.jsx("li",{children:"HSLF (Horrible Slide Layout Format): Controls PowerPoint '97(-2007) file format (.ppt)."}),e.jsx("li",{children:"XSLF (XML Slide Layout Format): Handles PowerPoint 2007 OOXML (.pptx) file format."})]}),e.jsx("h2",{children:"Importance of POI in Java"}),e.jsx("h3",{children:"1. Microsoft Office Formats Handling"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Excel Manipulation:"})," POI enables Java applications to create, read, edit, and write Excel files (.xls and .xlsx)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Word and PowerPoint Integration:"})," POI also supports reading and writing Word documents (doc, docx) and PowerPoint presentations (ppt, pptx)."]})]}),e.jsx("h3",{children:"2. Integration with Java Ecosystem"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Seamless Integration:"})," POI works well with Java frameworks like Spring, Hibernate, and Java EE technologies."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cross-Platform Compatibility:"})," Java's platform independence ensures applications using POI can run on multiple operating systems."]})]}),e.jsx("h3",{children:"3. Automation and Reporting"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Automated Data Processing:"})," Repetitive tasks like data entry or report generation can be automated using POI."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Formatting and Customization:"})," POI allows developers to programmatically add formatting, formulas, and charts to Excel files."]})]}),e.jsx("h3",{children:"4. Community and Support"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Active Community:"})," POI has a large and active developer community that ensures continuous updates and improvements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Documentation and Resources:"})," Comprehensive APIs, tutorials, and examples make it easy for developers to use POI."]})]}),e.jsx("h3",{children:"5. Business Applications"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Enterprise Solutions:"})," Many enterprise applications rely on POI for managing and processing Office documents."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Compatibility and Standards:"})," POI ensures compatibility with Microsoft Office standards, making it a reliable choice for document management."]})]}),e.jsx("h2",{children:"Example of Apache POI in Java (XSSF for Excel)"}),e.jsx("p",{children:"To create a simple Excel spreadsheet using Apache POI (XSSF for .xlsx files):"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Add Apache POI Dependency:"})," Include the following dependencies in your Maven pom.xml:",e.jsx("pre",{children:`<dependency>
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
}`})]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Apache POI is an essential library for Java developers working with Microsoft Office documents, offering a flexible and comprehensive API for handling Excel, Word, and PowerPoint files. Despite some challenges, such as a long learning curve and memory consumption, it remains a popular choice due to its robustness, active community support, and wide adoption in enterprise applications."})]}),wv=()=>e.jsxs("div",{className:"Polymorphism",children:[e.jsx("h1",{children:"Polymorphism in Java"}),e.jsx("h2",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Polymorphism"}),e.jsx("li",{children:"Types of Polymorphism"}),e.jsx("li",{children:"Compile-Time Polymorphism"}),e.jsx("ul",{children:e.jsx("li",{children:"Sub-types of Compile-Time Polymorphism"})}),e.jsx("li",{children:"Run-Time Polymorphism"}),e.jsx("ul",{children:e.jsx("li",{children:"Sub-types of Run-Time Polymorphism"})}),e.jsx("li",{children:"Key features of Polymorphism"}),e.jsx("li",{children:"Using Polymorphism in Practice"}),e.jsx("li",{children:"Advantages of Polymorphism"}),e.jsx("li",{children:"Disadvantages of Polymorphism"}),e.jsx("li",{children:"Conclusion"})]}),e.jsx("h2",{children:"Polymorphism"}),e.jsx("p",{children:"Polymorphism in Java is a notable concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. By allowing methods to be defined in a superclass and overridden in subclasses, it provides the flexibility and expansibility necessary for software design."}),e.jsx("pre",{children:`// Animal.java 
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
}`}),e.jsx("h2",{children:"Key Features of Polymorphism"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code Reusability"}),e.jsx("li",{children:"Flexibility"}),e.jsx("li",{children:"Interface Implementation"})]}),e.jsx("h2",{children:"Advantages of Polymorphism"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Enhances code reusability"}),e.jsx("li",{children:"Reduces the amount of code written"}),e.jsx("li",{children:"Allows dynamic binding"}),e.jsx("li",{children:"Enables generic code"})]}),e.jsx("h2",{children:"Disadvantages of Polymorphism"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Difficult to determine the behavior of polymorphic objects"}),e.jsx("li",{children:"May result in performance issues"})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Polymorphism is a fundamental concept in object-oriented programming that allows objects to be treated as instances of their superclass or interface. It enhances code reuse, extensibility, and maintainability, making it a powerful tool for Java developers."})]}),Sv=()=>e.jsxs("div",{className:"SeleniumAlertsTheory",children:[e.jsx("h1",{children:"Handling Alerts in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsxs("p",{children:["Alerts in Selenium are pop-up messages that can appear during automation testing to get the user’s attention. Selenium provides an interface called ",e.jsx("strong",{children:"Alert"})," to interact with these alerts. There are different types of alerts that can be handled using Selenium, each serving a unique purpose."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Types of Alerts in Selenium"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Simple Alert:"})," Shows only a message with an ‘OK’ button."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confirmation Alert:"})," Displays a message with ‘OK’ and ‘Cancel’ options for the user to confirm or dismiss the action."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Prompt Alert:"})," Provides a message box with ‘OK’ and ‘Cancel’ options and allows users to input text."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Common Methods to Handle Alerts"}),e.jsxs("p",{children:["Selenium provides several methods to interact with alerts using the ",e.jsx("strong",{children:"Alert"})," interface:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"accept():"})," Clicks on the 'OK' button of the alert."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"dismiss():"})," Clicks on the 'Cancel' button of the alert."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"getText():"})," Retrieves the text from the alert box."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"sendKeys(String input):"})," Sends text input to the alert (used for prompt alerts)."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Steps to Handle Alerts"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Trigger the alert:"})," Perform the action that causes the alert to appear."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Switch to the alert:"})," Use ",e.jsx("code",{children:"switchTo().alert()"})," to focus on the alert."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Perform operations:"})," Use methods like ",e.jsx("code",{children:"accept()"}),", ",e.jsx("code",{children:"dismiss()"}),", ",e.jsx("code",{children:"getText()"}),", or ",e.jsx("code",{children:"sendKeys()"})," to interact with the alert."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Continue execution:"})," After handling the alert, proceed with the test script execution."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["Handling alerts in Selenium is crucial for automated web testing. By switching the context of the WebDriver to the alert, you can perform actions such as accepting or dismissing the alert, reading the alert text, or entering data into a prompt alert. Selenium’s ",e.jsx("strong",{children:"Alert"})," interface provides a simple way to handle various types of pop-ups such as JavaScript alerts, modal dialogs, and more."]})]})]}),Ev=()=>e.jsxs("div",{className:"CdpSeleniumTheory",children:[e.jsx("h1",{children:"CDP (Chrome DevTools Protocol) in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"The Chrome DevTools Protocol (CDP) is a set of tools that allows you to control, inspect, and debug Chromium-based browsers. In Selenium WebDriver, CDP is supported, enabling you to extend browser control beyond regular WebDriver actions. CDP features allow interception of network traffic, logging to the console, collecting performance metrics, and much more."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why Use CDP with Selenium?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Network Interception:"})," Modify network traffic and browse pages with ease."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Console Logs:"})," Record and analyze browser console logs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance Metrics:"})," Measure page load time and rendering performance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Emulating Conditions:"})," Simulate different conditions like offline mode or varying network speeds."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Screenshot and PDF Generation:"})," Capture images of web pages or create PDFs."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Setting Up CDP with Selenium"}),e.jsx("p",{children:"To use CDP with Selenium, a connection to the Chrome DevTools Protocol must be established. This allows commands to be issued to the browser and events to be received."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Install WebDriver and establish a connection for DevTools communication."}),e.jsx("li",{children:"Activate relevant domains such as Network or Performance."}),e.jsx("li",{children:"Control the browser using CDP commands and receive events."})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example: Network Interception Using CDP"}),e.jsx("p",{children:"Below is a simple example of using CDP to intercept network traffic:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.WebDriver;
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
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"CDP integration with Selenium enables advanced browser automation capabilities beyond what the regular WebDriver API offers. By utilizing CDP, testers can intercept network traffic, capture console logs, simulate network conditions, and gather performance metrics. This enhances the depth and flexibility of automated test scripts, making them more powerful for real-world testing scenarios."})]})]}),Cv=()=>e.jsxs("div",{className:"DataDrivenFramework",children:[e.jsx("h1",{children:"Data-Driven Framework in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"A Data-Driven Framework in Selenium allows running the same test cases multiple times with different sets of data. Instead of hardcoding test data into test scripts, data is stored externally in files like Excel, CSV, or databases. This increases test coverage and flexibility."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Description of Data-Driven Framework"}),e.jsx("p",{children:"Data-Driven Framework helps in reading test data from external sources like Excel, CSV, databases, XML, or JSON files. This approach enhances test reusability and allows easy management of test data without modifying the core test logic."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Sources of Data"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Excel Files:"})," Structured and easy to manage datasets."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CSV Files:"})," Simple format but lacks organization features."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Databases:"})," Suitable for large applications requiring data accuracy."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"XML Files:"})," Hierarchical data structure for complex data."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"JSON Files:"})," Ideal for web applications and APIs due to minimal structure."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reusability:"})," Test scripts are reusable with different inputs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Separation of Data:"})," Test data and scripts are kept apart."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scalability:"})," Easily scale by adding more data sources."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Improved Coverage:"})," Run more scenarios and edge cases with various datasets."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Maintainability:"})," Changes in test data do not require changes in test scripts."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Disadvantages"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Initial Setup:"})," Requires setting up logic to read from multiple external data sources."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance Overhead:"})," Opening large external files can slow down performance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Change in Data Structure:"})," Changing data format requires updating the data reading logic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Debugging:"})," Test failures can be harder to debug due to separation of data and test logic."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Implementation Example"}),e.jsx("p",{children:"Here is a sample implementation of a Data-Driven Framework using Selenium with Java:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.apache.poi.xssf.usermodel.XSSFWorkbook;
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
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"The Data-Driven Framework in Selenium enhances flexibility, reusability, and scalability in test automation by separating test data from test scripts. Using external data sources like Excel, CSV, or databases allows testers to execute the same test with multiple datasets, increasing test coverage and effectiveness."})]})]}),kv=()=>e.jsxs("div",{className:"DockerInSelenium",children:[e.jsx("h1",{children:"Docker in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Docker is a tool that simplifies the deployment of applications by packaging them in lightweight, portable containers. In Selenium testing, Docker containers allow tests to run in isolated environments with specific configurations, enabling better quality assurance. The containers contain the Selenium server and the browser being tested, offering a consistent environment for executing Selenium tests."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why Use Docker?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Transient Containers:"})," Containers are temporary and live within a predefined environment, which can be destroyed after the tests are done, ensuring a clean slate for every test run."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cross-Browser Testing:"})," Docker containers enable cross-browser testing, making it easy to run tests on multiple browser-OS combinations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parallel Testing:"})," Docker containers allow for parallel testing, reducing execution time and increasing testing efficiency."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Types of Docker Set-Up"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Single-Node Setup:"})," Runs a Selenium Hub and a browser in a single container, suitable for local testing environments."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Distributed Grid Setup:"})," Uses multiple Docker containers with a Selenium Grid Hub and browser nodes, allowing for large-scale testing across different browsers and operating systems."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages of Docker"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Seclusion:"})," Docker creates isolated containers that prevent changes from affecting other environments."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Uniformity:"})," Docker ensures a consistent environment for every test run."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flexibility:"})," Easily add or remove nodes for the Selenium Grid based on the target load."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessibility:"})," Docker containers can run on any platform that supports Docker."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Efficient Setup:"})," Test environments can be quickly set up and torn down, reducing time and resources."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Disadvantages of Docker"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Complexity:"})," Team members may require training to work with Docker containers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Resource Overhead:"})," Running multiple containers in parallel may lead to resource congestion."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Networking Issues:"})," Docker containers communicating across networks may experience delays or failures."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Limited GUI:"})," Debugging tests that require a graphical interface can be challenging in Docker containers."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Syntax and Basic Operations"}),e.jsx("h3",{children:"1. Installing Docker"}),e.jsx("p",{children:"Ensure that Docker is installed on your machine by following the instructions on the Docker website."}),e.jsx("h3",{children:"2. Commands to Set Up Selenium Grid"}),e.jsx("pre",{children:e.jsx("code",{children:"docker pull selenium/hub docker pull selenium/node-chrome docker pull selenium/node-firefox docker run -d -p 4444:4444 --name selenium-hub selenium/hub docker run -d --name chrome -e HUB_HOST=selenium-hub --link selenium-hub:hub selenium/node-chrome docker run -d --name firefox -e HUB_HOST=selenium-hub --link selenium-hub:hub selenium/node-firefox"})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example: Running Selenium Tests in Docker"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.WebDriver;
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
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Best Practices for Running Selenium Tests in Docker"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use containers as microservices to reduce their size and improve flexibility."}),e.jsx("li",{children:"Set up and tear down the test environment for each run to ensure clean and consistent results."}),e.jsx("li",{children:"Run tests in parallel to save time and fully utilize the underlying hardware."})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Docker in Selenium allows for scalable and efficient test automation by creating isolated and consistent test environments. While there is some learning curve and resource overhead, Docker's ability to enhance parallel testing, cross-browser testing, and environment setup makes it a powerful tool for Selenium-based frameworks."})]})]}),Tv=()=>e.jsxs("div",{className:"ExtentReportsInSelenium",children:[e.jsx("h1",{children:"Extent Reports in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Extent Reports is an open-source library for generating detailed, customizable test reports in automation testing. Widely used with Selenium, it provides enhanced features compared to standard reports, making it a preferred tool for many organizations. Extent Reports can be integrated with various frameworks like TestNG, JUnit, and more, offering features such as screenshots, logs, and theme customization."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages of Extent Reports"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Open Source:"})," Extent Reports is free to use."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pictorial Representation:"})," It provides a visual representation of test results."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Customization:"})," Reports can be tailored to specific requirements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Media Attachments:"})," Allows screenshots and logs to be added for detailed summaries."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Framework Integration:"})," Easily integrates with frameworks like JUnit, TestNG, and more."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CI Tool Support:"})," Can be configured with CI tools like Jenkins and Bamboo."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Types of Reports"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Basic HTML Reports:"})," Provide comprehensive test results, including test logs and execution details."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Interactive Reports:"})," Customized reports with themes like Dark and Standard, offering filters and tabs for results such as passed, failed, or skipped."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Real-Time Reports:"})," Display live updates during test execution, allowing you to monitor the progress in real-time."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages of Extent Reports"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Accurate Reporting:"})," Detailed insights on test steps, screenshots, and logs for each stage."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Customization and Themes:"})," Various styles and themes to customize reports to your needs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Framework Support:"})," Supports multiple frameworks like TestNG, JUnit, and Cucumber."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Media Support:"})," Includes support for screenshots and videos in reports."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Real-Time Data:"})," Offers live updates on test execution."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Disadvantages of Extent Reports"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Learning Curve:"})," Some features may be challenging for beginners to grasp."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance Overhead:"})," Generating extensive reports with logs and media attachments may slow down performance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Third-Party Dependency:"})," Requires external libraries for full functionality."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Configuration Time:"})," Initial setup and configuration can be time-consuming compared to simpler tools."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Using Extent Reports in Selenium"}),e.jsxs("p",{children:["The two main classes used in Extent Reports are ",e.jsx("strong",{children:"ExtentReports"})," and ",e.jsx("strong",{children:"ExtentTest"}),"."]}),e.jsx("pre",{children:e.jsx("code",{children:`ExtentReports reports = new ExtentReports("Path to store HTML report", true/false);
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
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Extent Reports is a highly flexible and powerful tool for generating detailed and interactive reports in Selenium automation projects. While it offers several advanced features, it may take some time to set up and configure. Nonetheless, the comprehensive and customizable reports it generates make it a valuable tool in any automation testing framework."})]})]}),Pv=()=>e.jsxs("div",{className:"HandlingWebElements",children:[e.jsx("h1",{children:"Handling Web Elements in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"What are Web Elements?"}),e.jsxs("p",{children:["Web elements are components on a web page, such as text boxes, checkboxes, buttons, dropdowns, radio buttons, web forms, and more. These elements can be identified by attributes like ",e.jsx("code",{children:"id"}),", ",e.jsx("code",{children:"className"}),", ",e.jsx("code",{children:"name"}),", or ",e.jsx("code",{children:"xpath"}),". With Selenium, tasks like clicking buttons or filling text boxes can be automated by interacting with these elements."]}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement element = driver.findElement(By.id("TextBox"));
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
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Selenium enables automation of browser actions by interacting with web elements like text boxes, buttons, and links. With proper locators, WebDriver commands, and wait mechanisms, you can effectively handle various elements on a web page to perform automated testing tasks."})]})]}),Iv=()=>e.jsxs("div",{className:"HandlingWindowInSelenium",children:[e.jsx("h1",{children:"Handling Windows in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Window handling in Selenium allows users to manage multiple browser windows or tabs within a web application. This functionality is essential when automating scenarios that require interacting with pop-ups, multiple tabs, or windows that require switching between them to perform actions."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why Window Handling is Important"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Multi-Window Scenarios:"})," Many web applications open new windows or tabs (e.g., for login, payments, etc.), where Selenium must switch focus to interact with these elements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Automation Tasks:"})," Automated scripts often deal with multiple active windows or tabs and need to switch between them to complete tasks."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Selenium WebDriver Methods for Window Handles"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"getWindowHandle():"})," Returns the unique window handle of the currently active window."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"getWindowHandles():"})," Returns all the window handles opened by the WebDriver."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"switchTo().window():"})," Switches the focus of WebDriver to a specified window using its window handle."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Basic Steps for Window Handling in Selenium"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Open the main window and perform actions."}),e.jsx("li",{children:"Trigger the new window/tab."}),e.jsxs("li",{children:["Retrieve the window handles using ",e.jsx("code",{children:"getWindowHandles()"}),"."]}),e.jsxs("li",{children:["Switch to the desired window using ",e.jsx("code",{children:"switchTo().window()"}),"."]}),e.jsx("li",{children:"Perform actions in the new window/tab."}),e.jsx("li",{children:"Close the window and switch back to the main window."})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example: Handling Multiple Windows in Selenium"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
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
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["Window handling is a vital feature in Selenium WebDriver when automating scenarios involving multiple browser windows or tabs. With methods like ",e.jsx("code",{children:"getWindowHandle()"}),", ",e.jsx("code",{children:"getWindowHandles()"}),", and ",e.jsx("code",{children:"switchTo().window()"}),", you can effectively switch between windows, perform operations, and navigate complex workflows with ease."]})]})]}),Dv=()=>e.jsxs("div",{className:"IsElementPresentInSelenium",children:[e.jsx("h1",{children:"isElementPresent in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"isElementPresent"})," method in Selenium is a custom function often defined in test automation scripts to verify the presence of elements on a webpage. While Selenium WebDriver doesn't include this method by default, developers create it to avoid errors like ",e.jsx("code",{children:"NoSuchElementException"}),", which occur when trying to interact with missing elements."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Main Objectives of isElementPresent"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Dynamic Content:"})," Helps handle elements that load asynchronously, avoiding exceptions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Conditional Actions:"})," Allows actions based on the presence or absence of elements (e.g., clicking a button only if it exists)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Robust Test Scripts:"})," Ensures scripts can handle various page states gracefully."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Approaches to Implement isElementPresent"}),e.jsx("p",{children:"The isElementPresent method can be implemented in two common ways:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Using findElements Method:"})," Uses a list to check for the presence of elements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using WebDriverWait with ExpectedConditions:"})," Waits for a specific condition to be met, such as element visibility."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"1. Using findElements Method"}),e.jsx("pre",{children:e.jsx("code",{children:`public boolean isElementPresent(By locator) {
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
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This method waits for an element to become present on the page, returning ",e.jsx("code",{children:"true"})," if it is found within the specified timeout period."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"isElementPresent"})," method in Selenium is useful for handling dynamic content, making scripts more robust and reducing errors like ",e.jsx("code",{children:"NoSuchElementException"}),". By using techniques like ",e.jsx("code",{children:"findElements"})," or ",e.jsx("code",{children:"WebDriverWait"})," with ",e.jsx("code",{children:"ExpectedConditions"}),", testers can ensure that their scripts interact only with elements that are present and ready for action, improving test reliability."]})]})]}),Av=()=>e.jsxs("div",{className:"HandlingIFramesInSelenium",children:[e.jsx("h1",{children:"Handling IFrames in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"IFrames (Inline Frames) are HTML documents embedded within another HTML document on the same web page. They are often used to display content like advertisements, videos, or web applications. Selenium WebDriver treats each iframe as a separate document, requiring switching the WebDriver’s focus to the iframe to interact with elements inside it."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Importance of Handling IFrames in Selenium"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Isolation:"})," IFrames allow embedding content that is not part of the main document."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Different Context:"})," When switching to an iframe, Selenium focuses on the iframe content, allowing interaction with the elements inside."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Switching Back to Main Document:"})," After interacting with the iframe, it’s crucial to switch back to the main document for further actions."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Ways to Handle IFrames in Selenium"}),e.jsx("p",{children:"There are three main ways to switch to an iframe:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"By Index:"})," Switch to an iframe using its index (zero-based)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"By Name or ID:"})," Switch to an iframe using its ",e.jsx("code",{children:"name"})," or ",e.jsx("code",{children:"id"})," attributes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"By WebElement:"})," Switch to an iframe using a ",e.jsx("code",{children:"WebElement"})," representing the iframe."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Example 1: Switching to an IFrame by Index"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
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
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This example handles nested iframes, switching from the parent to the child iframe, interacting with elements, and returning to the main document."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["Handling iframes in Selenium is essential when automating interactions with web pages containing embedded content. By using methods like ",e.jsx("code",{children:"switchTo().frame()"})," and ",e.jsx("code",{children:"switchTo().defaultContent()"}),", testers can seamlessly switch between iframes and the main document, ensuring comprehensive test coverage for complex web applications."]})]})]}),Ov=()=>e.jsxs("div",{className:"JavaScriptExecutorInSelenium",children:[e.jsx("h1",{children:"JavaScriptExecutor in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"JavaScriptExecutor is an interface in Selenium WebDriver that allows execution of JavaScript code within the browser context. It is particularly useful for performing tasks that are not supported directly by Selenium WebDriver, such as interacting with hidden elements, scrolling, and directly manipulating the DOM."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why Use JavaScriptExecutor in Selenium?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Bypass Limitations:"})," JavaScriptExecutor helps bypass limitations in WebDriver, such as interacting with hidden or inaccessible elements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Direct DOM Manipulation:"})," It allows direct interaction with the Document Object Model (DOM), providing more control over page elements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Faster Execution:"})," JavaScriptExecutor communicates directly with the browser’s JavaScript engine, often leading to faster performance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Advanced Scenarios:"})," Useful in scenarios that require advanced user interactions or script executions not possible with standard WebDriver commands."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"JavaScriptExecutor Interface Methods"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"executeScript(String script, Object... args):"})," Executes JavaScript code in the context of the current frame or window."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"executeAsyncScript(String script, Object... args):"})," Executes JavaScript asynchronously and blocks the WebDriver until the callback is returned."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Basic Syntax of JavaScriptExecutor in Selenium"}),e.jsx("pre",{children:e.jsx("code",{children:`JavascriptExecutor js = (JavascriptExecutor) driver;
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
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This script changes the background color of an element using JavaScriptExecutor."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"JavaScriptExecutor is an essential feature in Selenium WebDriver, offering advanced control over web page elements that may otherwise be inaccessible. It allows direct manipulation of the DOM, facilitates scrolling, clicks hidden elements, retrieves data, and executes custom JavaScript. By mastering JavaScriptExecutor, testers can create more robust, flexible, and efficient automation scripts."})]})]}),Nv=()=>e.jsxs("div",{className:"Log4jInSelenium",children:[e.jsx("h1",{children:"Log4j in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Log4j is a centralized logging framework used in Java applications. When combined with Selenium, Log4j allows for proper logging of actions and events during automation testing, making it easier to debug complex scenarios or failed tests."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Components of Log4j"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Logger:"})," Stores and captures all logging information during test execution."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Appenders:"})," Retrieves logging information from the logger and writes it to a specified file or console."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Layout:"})," Formats the log messages in a specific pattern, such as text, HTML, or XML."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Log Levels"}),e.jsx("p",{children:"Log4j provides various log levels to categorize log messages:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ALL:"})," Includes all log messages."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DEBUG:"})," Logs detailed debugging information."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"INFO:"})," Logs general information about the application's progress."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"WARN:"})," Logs warning messages about potential issues."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ERROR:"})," Logs error events that might not stop execution."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"FATAL:"})," Logs critical errors that may crash the application."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why Use Log4j with Selenium?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Debugging:"})," Assists in troubleshooting test failures and errors."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test Reports:"})," Logs can be used to generate detailed test reports."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Track Execution Flow:"})," Monitors the execution process of test cases."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Logging Levels:"})," Provides customizable logging levels such as INFO, DEBUG, and ERROR."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Log4j Setup with Selenium"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Add Log4j Dependency:"})," Add Log4j dependencies to the `pom.xml` if using Maven."]}),e.jsx("pre",{children:e.jsx("code",{children:`<dependency>
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
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," The example logs browser actions like launching, navigating, interacting with elements, and closing the browser. In case of errors, it logs an error message with the exception stack trace."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Log4j enhances Selenium test scripts by capturing detailed logs about test execution. It simplifies debugging, tracks test progress, and provides detailed error information, making automation testing more efficient and effective."})]})]}),Rv=()=>e.jsxs("div",{className:"PageObjectModelInSelenium",children:[e.jsx("h1",{children:"Page Object Model (POM) in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Selenium utilizes the Page Object Model (POM) as a pattern that enables the creation of a web elements’ object repository. It fosters test code segregation from UI interaction and provides a way of writing the code in a structured manner. With POM, all elements and actions of a page are bundled into a single class, making the code more understandable, reusable, and modifiable."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Types of POMs"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Basic POM:"})," A single class is designated for every web page, containing methods and properties for web elements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Factory POM:"})," Combines the Factory Design Pattern with POM, dynamically creating page objects based on conditions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fluent POM:"})," Uses fluent interfaces to make the API for web elements more readable and easier to use by chaining methods."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages of Page Object Model (POM)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Separation of Concerns:"})," Enhances project organization by separating webpage-specific code from test scripts."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reusability:"})," Promotes reusability by allowing different scenarios to use the same page objects."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ease of Maintenance:"})," Simplifies updates since only page object classes need to be modified if the UI changes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Improved Readability:"})," Reduces clutter in test scripts, making them easier to read and maintain."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Encapsulation:"})," Hides the internal logic of application interactions, wrapping all page-related actions in classes."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Disadvantages of Page Object Model (POM)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Initial Setup Overhead:"})," Requires significant effort to set up page classes compared to simpler automation approaches."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Complexity:"})," Managing many page classes can become complicated in large applications."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Maintenance of Page Objects:"})," Changes in web page design can necessitate updates to multiple page classes."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Syntax and Basic Operations with POM"}),e.jsx("h3",{children:"Create a Page Object Class"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
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
WebElement element;`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"The Page Object Model (POM) is a fundamental design pattern in Selenium test automation that significantly enhances the maintainability, scalability, and organization of test scripts. By creating dedicated classes for web pages, POM effectively separates test logic from UI interactions, making tests more robust and easier to maintain."})]})]}),Mv=()=>e.jsxs("div",{className:"RelativeLocatorsInSelenium",children:[e.jsx("h1",{children:"Relative Locators in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Relative Locators (or Friendly Locators) in Selenium allow you to find elements on a web page based on the position of other elements relative to them. Introduced in Selenium 4, this feature enhances the versatility of element location, making it easier for developers to understand and interact with the page structure visually."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why Use Relative Locators?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Improves Readability:"})," Provides clear positioning of elements with phrases like ‘above’ and ‘below’, enhancing code comprehension."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flexibility:"})," Detects elements based on visual layout, accommodating changes in IDs or classes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Better Handling of Dynamic Content:"})," Useful for elements generated dynamically whose relative positions remain constant."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Syntax of Relative Locators in Selenium with Java"}),e.jsxs("p",{children:["Relative locators are performed using the ",e.jsx("code",{children:"RelativeLocator"})," class with the following properties:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"above:"})," Locate an element positioned above another."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"below:"})," Locate an element positioned below another."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"toLeftOf:"})," Locate an element on the left of another."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"toRightOf:"})," Locate an element on the right of another."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"near:"})," Locate an element in proximity to another element (default is 50 pixels)."]})]}),e.jsx("p",{children:"Basic Syntax:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement element = driver.findElement(
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
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This example shows how to locate elements based on their positions relative to one another (to the left or right)."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Relative Locators enhance element location in Selenium by considering the proximity of elements. This feature is particularly beneficial for dynamic content and improves code readability. By employing relative locators, developers can create more understandable and flexible Selenium scripts."})]})]}),Lv=()=>e.jsxs("div",{className:"ReportNGInSelenium",children:[e.jsx("h1",{children:"ReportNG in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"ReportNG is a plugin that simplifies reporting in TestNG, a widely used testing framework in Java. It enhances standard TestNG reports by producing sophisticated and well-structured visual reports in HTML format, making it particularly useful for Selenium projects."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"ReportNG Overview"}),e.jsx("p",{children:"ReportNG is an extendable TestNG reporting plugin that offers an index structure similar to default index reports on HTML and XML. The goal is to produce reports that are easy to read and visually appealing."}),e.jsx("h3",{children:"Report Formats"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"HTML Reports:"})," A high-level overview of test results, including pass/fail counts, error messages, and stack traces."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"XML Reports:"})," A logical summary designed for use with CI tools or other programs."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages of ReportNG"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Improved Comprehensibility:"})," Generates more readable reports with bolded and organized details."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Easy to Incorporate:"})," Simple to deploy in existing TestNG projects with minimal configuration."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Customizable:"})," HTML reports can be altered to better present information."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Integration with CI/CD Tools:"})," XML reports enable integration with CI/CD tools like Jenkins and Bamboo."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Drawbacks of ReportNG"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Basic Features:"})," Offers limited reporting capabilities compared to tools like Extent Reports or Allure Reports."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Discontinued:"})," ReportNG is now obsolete and may not be compatible with newer versions of TestNG or Java."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Needs Extra Configuration:"})," Requires dependency and listener configuration in the TestNG XML file."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Lack of Native Embedded Screenshots:"})," Cannot integrate screenshots into reports like some modern tools."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Step by Step Guide to Use ReportNG with Selenium and TestNG"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Include ReportNG Dependencies:"})," Add the relevant dependencies to your Maven `pom.xml` or download the JAR files.",e.jsx("pre",{children:e.jsx("code",{children:`<dependencies>
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
}`})})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Output"}),e.jsx("p",{children:"Upon executing the `testng.xml` file, ReportNG generates HTML and XML reports inside the `test-output` folder of the project."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Report Location:"})," ",e.jsx("code",{children:"test-output/html/index.html"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"ReportNG enhances TestNG reports, providing clear and comprehensible summaries in HTML format. Although it may not have the extensive features of more advanced reporting tools, its ease of integration and readability make it suitable for small to medium-sized projects."})]})]}),Bv=()=>e.jsxs("div",{className:"ScreenshotsInSelenium",children:[e.jsx("h1",{children:"Screenshots in Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Taking screenshots is one of the most appreciated features of Selenium. It allows testers to capture a static image of the page actively being tested at any moment during automation testing. This feature is beneficial for debugging performance issues by providing visual evidence of the state of the web application at various times during its execution."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Which Screenshot Features Are Provided by Selenium?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Debugging and Troubleshooting:"})," Screenshots help trace the causes of failure when a test case fails."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Visual Validation:"})," Checks whether relevant objects are properly displayed on the interface."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reporting:"})," Enhances test reports by showing how screens appeared compared to expectations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Documentation:"})," Captures images of the automation design process and how it was structured and planned."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"How to Take Screenshots in Selenium"}),e.jsxs("p",{children:["In Selenium WebDriver, screenshots can be taken using the ",e.jsx("code",{children:"TakesScreenshot"})," interface. This interface has a method named ",e.jsx("code",{children:"getScreenshotAs()"})," that captures and writes the screenshot to a specified location."]}),e.jsx("pre",{children:e.jsx("code",{children:"File file = ((TakesScreenshot) driver);"})}),e.jsx("p",{children:"Some scenarios where screenshots are handy include:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"When the application crashes or behaves unexpectedly."}),e.jsx("li",{children:"When a test fails an assertion."}),e.jsx("li",{children:"When the test has trouble finding elements on a webpage."}),e.jsx("li",{children:"When the test times out waiting for elements to load."})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Basic Syntax for Taking Screenshots in Selenium"}),e.jsx("pre",{children:e.jsx("code",{children:`// Cast the WebDriver instance to TakesScreenshot
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
}`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," This example demonstrates how to capture a screenshot as a Base64 string, useful for reporting purposes or sending images over the network without writing to disk."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Taking screenshots in Selenium WebDriver is a powerful feature that enhances test automation by allowing testers to visually validate tests, improve workflows for fixing issues, and enhance reporting. Selenium provides capabilities to capture screenshots of entire pages, specific elements, or save them in various formats. This functionality is crucial for creating comprehensive automation scripts that effectively report on the state and behavior of the web UI."})]})]}),Fv=()=>e.jsxs("div",{className:"ActionAPIsInSelenium",children:[e.jsx("h1",{children:"APIs to Implement Action in Java Selenium"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Introduction"}),e.jsxs("p",{children:["Action APIs have been provided by Selenium to emulate complicated user interactions on the browser, such as keyboard input, mouse movements, hovering over elements, and drag-and-drop actions. These are part of Selenium’s Actions class, which is used to build and run a sequence of actions. The class is particularly useful for automating tasks that cannot be achieved using simple WebDriver commands like ",e.jsx("code",{children:"click()"})," and ",e.jsx("code",{children:"sendKeys()"}),"."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Important Methods Used in ‘Actions’ Class"}),e.jsx("p",{children:"Below are some frequently used methods in the Actions class:"}),e.jsx("h3",{children:"1. ClickAndHold(), Release()"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"clickAndHold()"})," method allows you to press down on an element, and ",e.jsx("code",{children:"release()"})," lets go of the mouse button. This is essential for dragging elements."]}),e.jsx("pre",{children:e.jsx("code",{children:`Actions actions = new Actions(driver);
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
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"In automating mouse and keyboard events of web applications with Selenium, the Actions class plays an essential role. It involves various methods like click, mouse hover, double-click, context click, and drag-and-drop, allowing for simulations performed by web elements. The Actions class enables interaction with webpages as if real-time users were testing or verifying complex interactions. This means software behavior can be monitored under real user conditions for verification and optimization of user experience."})]})]}),Wv=()=>e.jsxs("div",{className:"SeleniumGrid",children:[e.jsx("h1",{children:"Selenium Grid"}),e.jsx("section",{children:e.jsx("p",{children:"Selenium Grid is frequently used alongside Selenium to run tests on multiple machines and browsers. It proves useful for distributed testing, enabling testing across various platforms simultaneously, which enhances speed and efficiency. Selenium Grid facilitates the execution of Selenium tests on remote machines, utilizing a proxy server managed by a Selenium server. This setup allows the maintenance of different browser configurations centrally, enabling parallel testing against various browser versions, thus facilitating cross-browser testing. The architecture follows a client-server model, where the server is referred to as the Hub, and it interacts with multiple clients (Nodes)."})}),e.jsxs("section",{children:[e.jsx("h2",{children:"Types of Selenium Grid"}),e.jsx("h3",{children:"1. Standalone Mode"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Description:"})," Both Hub and Node services are merged into a single process.",e.jsx("br",{}),e.jsx("strong",{children:"Usage:"})," Ideal for basic test configurations or local testing, used when tests are not required to run on multiple machines simultaneously."]}),e.jsx("h3",{children:"2. Hub and Node Architecture"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Description:"})," The Hub acts as the central control unit for test execution, while Nodes are the machines being tested.",e.jsx("br",{}),e.jsx("strong",{children:"Usage:"})," Effective for extensive testing environments requiring tests on different browsers and machines."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Need for Selenium Grid"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Open Source:"})," Selenium Grid is open-source, allowing teams to use it free of charge."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Convenient for Cross Browser Testing:"})," Facilitates testing across multiple browsers, accommodating diverse user preferences."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Supports Different Versions of Browsers:"})," Easily set up multiple browser versions for thorough testing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Facilitates Parallel Testing:"})," Enables the execution of tests in parallel, reducing wait times for results and updates."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Elements of Selenium Grid"}),e.jsx("p",{children:"Some important features of Selenium Grid 4 include:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Architectural Support:"})," Supports six processes for various deployments, including Router, Distributor, Session Map, New Session Queue, Node, and Event Bus."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Different Grid Roles:"})," Can be set up in three configurations: Standalone, Classic Grid (Hub and Node), and Fully Distributed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Docker Support:"})," Full support for Docker, allowing easy containerization of tests."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scalability:"})," Manages resources across multiple sites, enhancing observability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"GraphQL Query Support:"})," Enables API queries for session, node, and grid details."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Support for Customizing a Node:"})," Nodes can be customized for specific test execution needs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Support for External Data Store:"})," Caches information from running sessions in external data stores."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Components of Grid"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Router:"})," Entry point for incoming requests, forwarding them to the appropriate components."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Event Bus:"})," Facilitates internal communication between components."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Distributor:"})," Manages Node registration, capabilities, and session requests."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Session Queue:"})," Holds incoming session requests in a FIFO manner."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Session Map:"})," Maps session IDs to Nodes for fast routing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Node:"})," Executes test cases in a distributed system."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Advantages of Grid"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Simultaneous or Parallel Execution:"})," Allows for various test cases to run on different machines simultaneously."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cross Platform Testing:"})," Ensures coverage of multiple browsers and operating systems."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use of Test Resources:"})," Optimizes resource utilization by engaging multiple machines."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scalability:"})," Easily extended by adding new nodes."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Disadvantages of Grid"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Installation Complexity:"})," Setting up a Grid can be complex and may require significant resources."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dependence on Network:"})," Execution can be hampered by communication issues between Hub and Nodes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hardware Costs:"})," Supporting multiple machines and installations can be costly."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Syntax and Basic Operations with Selenium Grid"}),e.jsx("h3",{children:"1. Setting Up Selenium Grid"}),e.jsx("p",{children:"To start the Hub and Nodes, use the following commands:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Start the Hub
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
}`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Selenium Grid is an extension for Selenium applications that enables the deployment and running of applications on different machines with various browsers simultaneously. This greatly speeds up the testing process and increases the overall efficiency of the testing system, allowing for tests across different environments."})]})]}),Jv=()=>e.jsxs("div",{className:"SeleniumSelect",children:[e.jsx("h1",{children:"What is Selenium Select Class?"}),e.jsxs("p",{children:["In Selenium WebDriver, the Select class is crucial for working with dropdown elements in web applications. It provides several methods to select and deselect options from a dropdown, simplifying the automation of form submissions or other user interactions. The Select class is part of the ",e.jsx("code",{children:"org.openqa.selenium.support.ui"})," package and is employed for managing HTML elements on web pages. It offers functions for selecting an option by its index, value, or visible text, getting all available options, and retrieving the selected option."]}),e.jsx("h2",{children:"How to Use the Select Class in Selenium?"}),e.jsx("p",{children:"Selenium's Select class allows you to choose values from a dropdown list. It supports selection based on text, index, value, and can handle selecting or deselecting multiple elements."}),e.jsx("h2",{children:"Selecting Multiple Items in a Dropdown"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"multiple"})," select attribute is a boolean expression that allows for selecting multiple options at once. Different operating systems have different keys for this:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"For Mac:"})," Hold down the COMMAND button to select more than one item."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For Windows:"})," Press the CTRL button to select multiple items."]})]}),e.jsxs("p",{children:["Use the ",e.jsx("code",{children:"isMultiple"})," method to determine if the dropdown allows multiple selections, returning true or false."]}),e.jsx("h2",{children:"Methods in the Select Class"}),e.jsx("h3",{children:"1. selectByVisibleText"}),e.jsxs("p",{children:["Selects an option based on the visible text. ",e.jsx("br",{}),e.jsx("code",{children:'dropdown.selectByVisibleText("Option Text");'})]}),e.jsx("h3",{children:"2. selectByIndex"}),e.jsxs("p",{children:["Selects an option based on its index. ",e.jsx("br",{}),e.jsx("code",{children:"dropdown.selectByIndex(1);"})]}),e.jsx("h3",{children:"3. selectByValue"}),e.jsxs("p",{children:["Selects an option based on its value attribute. ",e.jsx("br",{}),e.jsx("code",{children:'dropdown.selectByValue("optionValue");'})]}),e.jsx("h3",{children:"4. getOptions"}),e.jsxs("p",{children:["Retrieves all options in the element as a list of WebElements. ",e.jsx("br",{}),e.jsx("code",{children:"List options = dropdown.getOptions();"})]}),e.jsx("h3",{children:"5. getFirstSelectedOption"}),e.jsxs("p",{children:["Retrieves the currently selected option. ",e.jsx("br",{}),e.jsx("code",{children:"WebElement selectedOption = dropdown.getFirstSelectedOption();"})]}),e.jsx("h3",{children:"6. deselectAll"}),e.jsxs("p",{children:["Deselects all selected options if the dropdown allows multiple selections. ",e.jsx("br",{}),e.jsx("code",{children:"dropdown.deselectAll();"})]}),e.jsx("h2",{children:"Handling Dropdowns in Selenium"}),e.jsx("h3",{children:"Steps to Handle Dropdowns:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Import Necessary Packages"}),e.jsx("li",{children:"Set Up WebDriver"}),e.jsx("li",{children:"Locate the Dropdown Element"}),e.jsx("li",{children:"Create a Select Object"})]}),e.jsx("h3",{children:"Example of Using the Select Class"}),e.jsx("p",{children:"Here is an example demonstrating how to use the Select class in Selenium WebDriver with Java to handle a dropdown:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
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
}`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"The Select class is a powerful tool for handling dropdowns in Selenium. It provides several methods for selecting options from a dropdown menu. The appropriate method to handle dropdowns in Selenium depends on the specific requirements of the project."})]}),Uv=()=>e.jsxs("div",{className:"SeleniumWaits",children:[e.jsx("h1",{children:"Selenium Waits"}),e.jsx("p",{children:"Waits in Selenium are key components that execute test cases, functioning on commands that load a page. The idea behind Selenium waits is to make the pages less chatty and steadier, offering various wait options relevant to different conditions. This ensures that scripts do not fail during the automation testing process."}),e.jsx("h2",{children:"Why Use Waits in Selenium?"}),e.jsxs("p",{children:["Most modern front-end applications are built on Ajax or JavaScript frameworks, which take time to load elements on a web page. If you try to locate an element that hasn't loaded yet, you'll encounter an ",e.jsx("code",{children:"ElementNotVisibleException"}),". Waits are crucial for synchronizing test scripts with the behavior of web applications, helping to manage dynamic content and slow loading times."]}),e.jsx("p",{children:"Selenium provides three types of waits: Implicit Wait, Explicit Wait, and Fluent Wait, each serving different purposes."}),e.jsx("h2",{children:"When to Use Wait Commands?"}),e.jsx("p",{children:"Wait commands are essential for synchronizing automation scripts with dynamic web elements. Use them in the following scenarios:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Element Interaction:"})," Implement waits when clicking buttons, entering text, or selecting options to ensure actions occur only after elements are fully loaded."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Handling Asynchronous Calls:"})," Manage asynchronous requests like AJAX calls, allowing the script to pause until these requests are complete."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Post Page Navigation:"})," Use waits after page navigation commands, enabling elements to load entirely before proceeding."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Managing Dynamic Content:"})," Apply waits when dealing with dynamically generated elements or those that appear after specific events."]})]}),e.jsx("h2",{children:"Implicit Waits"}),e.jsxs("p",{children:["Implicit Wait instructs the WebDriver to wait for a specified duration before throwing a ",e.jsx("code",{children:"NoSuchElementException"}),". It is set globally and remains active throughout the WebDriver instance's lifecycle."]}),e.jsx("h3",{children:"How Does it Work?"}),e.jsx("p",{children:"When you initialize an Implicit Wait, Selenium waits for the defined duration during attempts to locate an element. If the element isn't found immediately, Selenium pauses the script for the stipulated time."}),e.jsx("h3",{children:"Why Use Implicit Wait?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Global Application:"})," Applies universally across the WebDriver instance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Preemptive Waiting:"})," Handles potential delays proactively, minimizing exceptions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Streamlined Scripting:"})," Simplifies scripting by automatically waiting for a specific period."]})]}),e.jsx("h4",{children:"Syntax:"}),e.jsx("p",{children:e.jsx("code",{children:"driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));"})}),e.jsx("h3",{children:"Example of Implicit Wait:"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.openqa.selenium.By;
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
}`})}),e.jsx("h2",{children:"Differences Between Implicit, Explicit, and Fluent Waits"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Scope"}),e.jsx("th",{children:"Flexibility"}),e.jsx("th",{children:"Use Case"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Implicit Wait"}),e.jsx("td",{children:"Applied to all elements in the script."}),e.jsx("td",{children:"Less flexible; waits for a certain time."}),e.jsx("td",{children:"Simple test cases without complications."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Explicit Wait"}),e.jsx("td",{children:"Used for specific elements and conditions."}),e.jsx("td",{children:"More flexible with specific conditions."}),e.jsx("td",{children:"Several steps before an object becomes visible."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Fluent Wait"}),e.jsx("td",{children:"Particular elements with customization."}),e.jsx("td",{children:"Most flexible with polling frequency."}),e.jsx("td",{children:"Better control over visibility conditions."})]})]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Selenium waits are essential for creating robust test scripts. They enable synchronization between scripts and dynamic web elements, reducing dependencies. Understanding and effectively utilizing Implicit, Explicit, and Fluent waits can significantly enhance the reliability of Selenium WebDriver test scripts in Java."})]}),zv=()=>e.jsxs("div",{className:"SeleniumXPath",children:[e.jsx("h1",{children:"Selenium XPath"}),e.jsx("p",{children:"XPath is a query language used for querying elements within XML and HTML documents. When other CSS locators (like ID, Class, etc.) that identify elements or unique attributes are not available, XPath becomes the preferred locator. Selenium XPath follows an XML path to navigate through the HTML structure of a web page."}),e.jsx("p",{children:"When a web page loads in a browser, it creates a Document Object Model (DOM) structure. To locate any dynamic web element among created DOMs, you can use an XPath expression/command."}),e.jsx("h2",{children:"Why Use Selenium XPath?"}),e.jsx("p",{children:"Automated testing has become a viable alternative to manual testing as the number of browser types and versions continues to rise. Selenium WebDriver provides a free set of open-source APIs for automating web application testing. The WebDriver code library offers a method for finding dynamic web elements using locators such as XPath, ID, class, or CSS selectors."}),e.jsx("h2",{children:"Syntax of XPath"}),e.jsx("p",{children:"XPath in Selenium provides many essential functions and axes to write effective XPath locators:"}),e.jsx("pre",{children:e.jsx("code",{children:"XPath = //tagname[@Attribute = 'Value']"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"//"}),": to select the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"tagname"}),": tag name of a specific node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"@"}),": to select the attribute."]}),e.jsxs("li",{children:[e.jsx("code",{children:"attribute"}),": the attribute name of the node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"value"}),": the value of the node."]})]}),e.jsx("h2",{children:"Different Types of XPath"}),e.jsx("h3",{children:"Absolute XPath"}),e.jsx("p",{children:"Absolute XPath locates an element starting from the root node (HTML) up to the desired element. However, if there is any change in the node or tag along the defined XPath expression, it may fail to find the element."}),e.jsx("h4",{children:"Absolute XPath Syntax:"}),e.jsx("pre",{children:e.jsx("code",{children:"Absolute XPath: /html/body/div[1]/div/div[2]/header/div/div[2]/a/img"})}),e.jsx("h4",{children:"Example of Absolute XPath:"}),e.jsx("pre",{children:e.jsx("code",{children:'WebElement element = driver.findElement(By.xpath("/html/body/div[2]/div/div[1]/h1"));'})}),e.jsx("h3",{children:"Relative XPath"}),e.jsx("p",{children:"Relative XPath does not need to start from the root node and is more robust against changes in the DOM structure."}),e.jsx("h4",{children:"Relative XPath Syntax:"}),e.jsx("pre",{children:e.jsx("code",{children:"Relative XPath: //*[contains(@id, 'block-perfecto-main-menu')]/ul/li[6]/a"})}),e.jsx("h4",{children:"Example of Relative XPath:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement element = driver.findElement(By.xpath("//div[@class='example']/h1"));`})}),e.jsx("h2",{children:"Differences Between Absolute and Relative XPaths"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Absolute XPath starts from the root and is specific, while Relative XPath begins from a specific point in the DOM."}),e.jsx("li",{children:"Absolute XPath is brittle; changes in the DOM can break it, whereas Relative XPath is more flexible and adaptable."}),e.jsx("li",{children:"Relative XPath is generally shorter and easier to maintain than Absolute XPath."})]}),e.jsx("h2",{children:"Chained XPath in Selenium"}),e.jsx("p",{children:"Chained XPath allows you to use multiple XPath expressions together to locate an element that cannot be uniquely identified with a single XPath."}),e.jsx("h4",{children:"Example of Chained XPath:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebDriver driver = new ChromeDriver();
driver.get("http://www.yourwebsite.com");
WebElement parentDiv = driver.findElement(By.xpath("//*[@id='parent']"));
WebElement submitButton = parentDiv.findElement(By.xpath(".//button[text()='Submit']"));
submitButton.click();`})}),e.jsx("h2",{children:"XPath Axes"}),e.jsx("p",{children:"XPath axes allow flexible navigation of elements in XML or HTML documents. They define relationships between the current node and other nodes in the document."}),e.jsx("h3",{children:"Common XPath Axes:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"ancestor"}),": Selects all ancestors of the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"child"}),": Selects all children of the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"descendant"}),": Selects all descendants of the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"following"}),": Selects everything after the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"preceding"}),": Selects all nodes that appear before the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"parent"}),": Selects the parent of the current node."]}),e.jsxs("li",{children:[e.jsx("code",{children:"self"}),": Selects the current node."]})]}),e.jsx("h3",{children:"Examples of XPath Axes:"}),e.jsx("h4",{children:"Using Ancestor Axis:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement ancestorElement = driver.findElement(By.xpath("//input[@id='username']/ancestor::div"));`})}),e.jsx("h4",{children:"Using Child Axis:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement childElement = driver.findElement(By.xpath("//div[@class='example']/child::h1"));`})}),e.jsx("h4",{children:"Using Descendant Axis:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement descendantElement = driver.findElement(By.xpath("//div[@class='example']/descendant::p"));`})}),e.jsx("h2",{children:"Types of XPath Locators"}),e.jsx("p",{children:"XPath locators are essential for identifying elements on a webpage. Common types include:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["By ID: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[@id='username']"));`})]}),e.jsxs("li",{children:["By Class Name: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[@class='login-button']"));`})]}),e.jsxs("li",{children:["By Name: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[@name='password']"));`})]}),e.jsxs("li",{children:["By Tag Name: ",e.jsx("code",{children:'driver.findElement(By.xpath("//p"));'})]}),e.jsxs("li",{children:["By Text: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[text()='Submit']"));`})]}),e.jsxs("li",{children:["Using Contains: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[contains(@href,'google.com')]"));`})]}),e.jsxs("li",{children:["Using Starts-with: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[starts-with(@id,'user')]"));`})]}),e.jsxs("li",{children:["Using Ends-with: ",e.jsx("code",{children:`driver.findElement(By.xpath("//*[ends-with(@id,'name')]"));`})]})]}),e.jsx("h2",{children:"Dynamic XPath in Selenium"}),e.jsx("p",{children:"Dynamic XPath refers to XPath expressions for dynamic WebElements whose attributes frequently change. These XPath locators are adaptable, eliminating the need for constant updates."}),e.jsx("h3",{children:"Examples of Dynamic XPath:"}),e.jsx("h4",{children:"Using Contains:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement element = driver.findElement(By.xpath("//input[contains(@id, 'user')]"));`})}),e.jsx("h4",{children:"Using Logical Operators:"}),e.jsx("pre",{children:e.jsx("code",{children:`WebElement elementOr = driver.findElement(By.xpath("//input[@id='username' or @name='username']"));`})}),e.jsx("h2",{children:"Best Practices for Using XPath"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use Relative XPath for flexibility and maintainability."}),e.jsx("li",{children:"Opt for meaningful attributes like ID and name."}),e.jsx("li",{children:"Avoid Absolute XPath to prevent brittleness."}),e.jsx("li",{children:"Keep XPath expressions simple and readable."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"By mastering XPath, you can create robust and maintainable Selenium test scripts that accurately interact with web elements. XPath provides the flexibility and power essential for effective web automation testing."})]}),_v=()=>e.jsxs("div",{className:"TestNGFramework",children:[e.jsx("h1",{children:"TestNG Framework in Selenium"}),e.jsx("p",{children:"TestNG is not merely an American invention; it was created by the same people behind JUnit and NUnit, but it is better. “NG” stands for ‘Next Generation’, signifying that this framework surpasses previous frameworks. Writing tests now extends beyond unit tests to include integration tests as part of Selenium automation testing in Java, which is why TestNG was created."}),e.jsx("h2",{children:"What is TestNG?"}),e.jsx("p",{children:"TestNG offers organized features like annotations, data-driven testing, test case organization, and parallel execution, which assist in managing and conducting your Selenium tests optimally."}),e.jsx("h2",{children:"Advantages of Using TestNG in Selenium"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Test cases can be organized into groups for easier handling of test suites."}),e.jsx("li",{children:"Concurrent testing reduces the time required to run the entire test suite."}),e.jsxs("li",{children:["Provides a variety of test annotations, such as ",e.jsx("code",{children:"@BeforeSuite"}),", ",e.jsx("code",{children:"@AfterSuite"}),", ",e.jsx("code",{children:"@BeforeTest"}),", ",e.jsx("code",{children:"@AfterTest"}),", ",e.jsx("code",{children:"@BeforeMethod"}),", ",e.jsx("code",{children:"@AfterMethod"}),", etc."]}),e.jsx("li",{children:"Allows independent execution of test cases with multiple test data parameters."}),e.jsx("li",{children:"Good reporting and logging capabilities assist in troubleshooting test issues."})]}),e.jsx("h2",{children:"Key Features of TestNG"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Annotations:"})," Simplifies test configuration with annotations like ",e.jsx("code",{children:"@Test"}),", ",e.jsx("code",{children:"@BeforeMethod"}),", ",e.jsx("code",{children:"@AfterMethod"}),", ",e.jsx("code",{children:"@BeforeClass"}),", ",e.jsx("code",{children:"@AfterClass"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test Configuration:"})," Allows definitions of tests using XML files."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test Suite:"})," Executes multiple tests within the same execution framework."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Data-Driven Testing:"})," Executes parameterized tests using data providers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reporting:"})," Generates standard reports in HTML or XML format without tester involvement."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assertions:"})," Provides various assertion types for testing purposes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Integration:"})," Easily integrates with build tools like Maven and Jenkins."]})]}),e.jsx("h2",{children:"Benefits of TestNG Compared to JUnit"}),e.jsxs("ul",{children:[e.jsx("li",{children:"TestNG allows configuration and execution in various ways, including parallel execution."}),e.jsx("li",{children:"Advanced features for report creation, grouping of tests, and non-sequential test execution with dependencies are available."}),e.jsx("li",{children:"DataProvider annotation in TestNG facilitates data-driven tests, unlike JUnit."}),e.jsx("li",{children:"TestNG provides detailed HTML reports summarizing test execution, while JUnit typically generates less informative text reports."}),e.jsxs("li",{children:["Offers advanced annotations like ",e.jsx("code",{children:"@BeforeSuite"}),", ",e.jsx("code",{children:"@AfterSuite"}),", ",e.jsx("code",{children:"@BeforeGroups"}),", and ",e.jsx("code",{children:"@AfterGroups"}),"."]})]}),e.jsx("h2",{children:"Need for TestNG with Selenium"}),e.jsx("p",{children:"Due to interdependencies, Selenium lacks a standard testing practice for results. The TestNG framework enables users to:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Adhere to a necessary report structure."}),e.jsx("li",{children:"State the total number of test cases executed, successes, failures, and untested cases."}),e.jsx("li",{children:"Organize test cases by converting them into a testing XML file."}),e.jsx("li",{children:"Utilize invocation count to perform multiple tests without writing loops."}),e.jsx("li",{children:"Facilitate cross-browser testing."}),e.jsx("li",{children:"Use easy-to-understand annotations."})]}),e.jsx("h2",{children:"TestNG Annotations"}),e.jsx("p",{children:"An annotation tag contains information about methods, classes, or suites and determines the execution strategy of test cases. Here’s a list of important annotations in TestNG:"}),e.jsx("h3",{children:"@Test"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"@Test"})," annotation encapsulates the test case logic and triggers the automation run."]}),e.jsx("pre",{children:e.jsx("code",{children:`@Test
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
</suite>`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"The TestNG framework simplifies Selenium automation tests through organized test cases, reduced execution time via parallel execution, and structured XML configurations. Its extensive features, such as annotations and reporting, make it an ideal choice for test automation in Selenium."})]});function ha(){const r=o=>{o.preventDefault()};return e.jsxs("footer",{className:"main-footer",children:[e.jsx("div",{className:"footer-top",children:e.jsxs("div",{className:"footer-container",children:[e.jsxs("div",{className:"newsletter-section",children:[e.jsx("h2",{children:"Stay Updated with Latest Tutorials"}),e.jsx("p",{children:"Get the latest automation testing tips and tutorials directly in your inbox"}),e.jsx("form",{onSubmit:r,className:"newsletter-form",children:e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"email",placeholder:"Enter your email"}),e.jsxs("button",{type:"submit",children:[e.jsx(hx,{size:20}),e.jsx("span",{children:"Subscribe"})]})]})})]}),e.jsxs("div",{className:"footer-content",children:[e.jsxs("div",{className:"footer-section",children:[e.jsx("h3",{children:"About Us"}),e.jsx("p",{children:"Empowering professionals with cutting-edge automation testing knowledge. Our platform offers comprehensive courses designed for all skill levels, from beginners to advanced practitioners."}),e.jsxs("div",{className:"social-links",children:[e.jsx("a",{href:"https://www.linkedin.com/in/hemant-gandhi254/",className:"social-btn",target:"_blank",rel:"noopener noreferrer",children:e.jsx(Vj,{})}),e.jsx("a",{href:"https://github.com/hemantgandhi1",className:"social-btn",target:"_blank",rel:"noopener noreferrer",children:e.jsx(Hj,{})}),e.jsx("a",{href:"https://x.com/Journeytoauto",className:"social-btn",target:"_blank",rel:"noopener noreferrer",children:e.jsx(Gj,{})}),e.jsx("a",{href:"https://www.youtube.com/@Journeytoautomation",className:"social-btn",target:"_blank",rel:"noopener noreferrer",children:e.jsx($j,{})})]})]}),e.jsxs("div",{className:"footer-section",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"quick-links",children:[e.jsxs("li",{children:[e.jsx(Ki,{size:16}),e.jsx("a",{href:"/",children:"Home"})]}),e.jsxs("li",{children:[e.jsx(Ki,{size:16}),e.jsx("a",{href:"https://courses.journeytoautomation.org/store",children:"Courses"})]}),e.jsxs("li",{children:[e.jsx(Ki,{size:16}),e.jsx("a",{href:"/",children:"Tutorials"})]}),e.jsxs("li",{children:[e.jsx(Ki,{size:16}),e.jsx("a",{href:"/",children:"Contact"})]})]})]}),e.jsxs("div",{className:"footer-section",children:[e.jsx("h3",{children:"Popular Courses"}),e.jsxs("ul",{className:"course-links",children:[e.jsx("li",{children:e.jsx("a",{href:"/selenium",children:"Selenium Master Course"})}),e.jsx("li",{children:e.jsx("a",{href:"/playwright",children:"Playwright Testing"})}),e.jsx("li",{children:e.jsx("a",{href:"/",children:"Cypress Automation"})}),e.jsx("li",{children:e.jsx("a",{href:"/",children:"API Testing"})})]})]}),e.jsxs("div",{className:"footer-section",children:[e.jsx("h3",{children:"Contact Us"}),e.jsxs("ul",{className:"contact-info",children:[e.jsxs("li",{children:[e.jsx(ax,{size:18}),e.jsx("span",{children:"New Delhi, 110001"})]}),e.jsxs("li",{children:[e.jsx(lx,{size:18}),e.jsx("a",{href:"mailto:gandhihemant10@gmail.com",children:"journeytoautomation@gmail.com"})]}),e.jsxs("li",{children:[e.jsx(cx,{size:18}),e.jsx("span",{children:"+91 XXX XXX XXXX"})]})]})]})]})]})}),e.jsx("div",{className:"footer-bottom",children:e.jsx("div",{className:"footer-container",children:e.jsxs("div",{className:"bottom-content",children:[e.jsx("div",{className:"copyright",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," JourneyToAutomation. All rights reserved."]})}),e.jsxs("div",{className:"bottom-links",children:[e.jsx("a",{href:"/privacy",children:"Privacy Policy"}),e.jsx("a",{href:"/terms",children:"Terms of Use"}),e.jsx("a",{href:"/faq",children:"FAQ"})]}),e.jsx("div",{className:"credits",children:e.jsxs("p",{children:["Developed/Designed by ",e.jsx("a",{href:"#",className:"developer-link",children:"JourneyToAutomation"})]})})]})})})]})}function qv(){const[r,o]=I.useState(0),[a,d]=I.useState(!1),u=Nn();I.useEffect(()=>{const v=()=>{d(window.innerWidth<=768)};return v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)}},[]);const h=["Intro","Java","Variables","DataTypes","JavaOperation","JavaStrings","JavaMethods","JavaArrays","JavaAbstraction","JavaConditions","JavaAPIs","JavaConstructor","DataTypeConversion","Encapsulation","EnumInJava","ExceptionHandlingInJava","FileHandlingInJava","InheritanceDocument","JavaIteration","Poi","Polymorphism","SeleniumAlertsTheory","CdpSeleniumTheory","DataDrivenFramework","DockerInSelenium","ExtentReportsInSelenium","HandlingWebElements","HandlingWindowInSelenium","IsElementPresentInSelenium","HandlingIFramesInSelenium","JavaScriptExecutorInSelenium","Log4jInSelenium","PageObjectModelInSelenium","RelativeLocatorsInSelenium","ReportNGInSelenium","ScreenshotsInSelenium","ActionAPIsInSelenium","SeleniumGrid","SeleniumSelect","SeleniumWaits","SeleniumXPath","TestNGFramework"],m=(v,y)=>{v.preventDefault(),o(y),u(`/Selenium/${h[y]}`),document.getElementById("main-page").scrollIntoView({behavior:"smooth"})},f=()=>{if(r<h.length-1){const v=r+1;o(v),u(`/Selenium/${h[v]}`)}},g=()=>{if(r>0){const v=r-1;o(v),u(`/Selenium/${h[v]}`)}};return e.jsxs("div",{children:[e.jsx(Os,{}),e.jsxs("div",{className:"main",children:[e.jsx("div",{className:`container-left ${a?"hidden":""}`,children:e.jsx("div",{className:"container-leftt",children:e.jsxs("div",{className:"container-links",children:[e.jsx("h1",{children:"Selenium With Java"}),h.map((v,y)=>e.jsx("a",{className:"links",href:`#${v}-section`,onClick:S=>m(S,y),children:v.replace(/([A-Z])/g," $1").trim()},y))]})})}),e.jsxs("div",{className:"main-container",children:[e.jsxs("div",{className:"container-head",children:[e.jsx("button",{className:"prev",onClick:g,children:"Prev"}),e.jsx("button",{className:"next",onClick:f,children:"Next"})]}),e.jsxs("div",{className:"main-page",id:"main-page",children:[r===0&&e.jsxs("div",{id:"Selenium-Java-Intro",className:"IntroJava",children:[e.jsx("h1",{children:"What is Selenium?"}),e.jsx("p",{children:"Selenium is a free (open source) automated testing framework used to validate web applications across different browsers. It offers a plethora of tools that are specially designed to cater to the automated testing of web applications. One of the best things about Selenium is that it supports a variety of programming languages like Java, C#, Python, Ruby, etc. So, developers can write their test scripts in any one of these languages."}),e.jsx("br",{}),e.jsx("h1",{children:"Why Choose Selenium with Java?"}),e.jsxs("p",{children:["Java is regarded as the most widely used and powerful programming language around the world due to its robustness, ease of use and it creates versatility. ",e.jsx("br",{}),e.jsxs("span",{style:{fontWeight:"bold"},children:["Advantages of using Java Selenium -"," "]}),e.jsx("br",{}),"Platform independence - Java code can execute on any device if that device supports the Java Virtual Machine (JVM). Extensive Documentation: Java comes with detailed documentation and a vast community that offers adequate resources to get support. Integration with Testing Frameworks Java seamlessly integrates standard testing frameworks (like JUnit and TestNG), that improve automation of test cases."]}),e.jsx("h1",{children:"Setting Up the Environment"}),e.jsx("p",{children:"First, we must prepare a development environment for testing Selenium tests."}),e.jsx("ul",{className:"list-items",children:"Installing Java"}),e.jsxs("li",{className:"list-item",children:["Downloading the newest JDK (Java Development Kit) from the"," ",e.jsx("a",{href:"https://www.oracle.com/in/java/technologies/downloads/",children:"Oracle website"})]}),e.jsx("li",{className:"list-item",children:"Install as per the instructions for your OS."}),e.jsx("li",{className:"list-item",children:"Set the environment variable JAVA_HOME to the JDK installation directory."}),e.jsx("li",{className:"list-item",children:"To confirm that Java has installed open command prompt and type java -version."}),e.jsx("ul",{className:"list-items",children:"Setting Up Eclipse IDE"}),e.jsxs("li",{className:"list-item",children:["To begin, download and install the Eclipse IDE for Java Developers from"," ",e.jsx("a",{href:"https://www.eclipse.org/downloads/packages/release/kepler/sr1/eclipse-ide-java-developers",children:"here"}),"."]}),e.jsx("li",{className:"list-item",children:"Open Eclipse 2. Create a new workspace."}),e.jsx("ul",{className:"list-items",children:"Adding Selenium Libraries"}),e.jsxs("li",{className:"list-item",children:["Good! The latest Selenium WebDriver Java client can be downloaded here from the official website of"," ",e.jsx("a",{href:"",children:"Selenium"}),"."]}),e.jsx("li",{className:"list-item",children:"Unzip the downloaded ZIP file and you will get some JAR files as part of this to include in your project using Eclipse."}),e.jsx("li",{className:"list-item",children:"Right-click on your project > Build Path > Configure Build Path."}),e.jsx("li",{className:"list-item",children:"Click on Add External JARs and select the Selenium JAR files."}),e.jsx("h1",{children:"Your First Selenium Test"}),e.jsx("h4",{children:"The basic structure of a Selenium Test"}),e.jsx("p",{children:"Generally, the steps that a typical Selenium test in Java makes are to"}),e.jsxs("ol",{className:"list-items",children:[e.jsx("li",{className:"list-item",children:"Set up the WebDriver."}),e.jsx("li",{className:"list-item",children:"Navigate to the target."}),e.jsx("li",{className:"list-item",children:"Do actions on web elements."}),e.jsx("li",{className:"list-item",children:"Validate the results."}),e.jsx("li",{className:"list-item",children:"Close the browser."})]}),e.jsx("h4",{children:"Example: Automating a Google Search"}),e.jsx("img",{className:"img-selenium",src:Zj,alt:""}),e.jsx("h1",{children:"Selenium WebDriver Basics"}),e.jsx("h4",{children:"Locating Web Elements"}),e.jsx("p",{children:"The Selenium locators are the various approaches that search or identify any element in a webpage."}),e.jsxs("ol",{className:"list-items",children:[e.jsx("li",{className:"list-item",children:"By.id"}),e.jsx("li",{className:"list-item",children:"By.name"}),e.jsx("li",{className:"list-item",children:"By.className"}),e.jsx("li",{className:"list-item",children:"By.tagName"}),e.jsx("li",{className:"list-item",children:"By.linkText"}),e.jsx("li",{className:"list-item",children:"By.partialLinkText"}),e.jsx("li",{className:"list-item",children:"By.xpath"}),e.jsx("li",{className:"list-item",children:"By.cssSelector"})]}),e.jsx("ul",{className:"list-items",children:"Performing Actions on Web Elements."}),e.jsx("li",{className:"list-item",children:"sendKeys(): To type text in an input field."}),e.jsx("li",{className:"list-item",children:"click (): The user clicks a button or link."}),e.jsx("li",{className:"list-item",children:"getText(): Get the text of an element."}),e.jsx("ul",{className:"list-items",children:"Handling WebDriver Exceptions"}),e.jsx("li",{className:"list-item",children:"Common exceptions include"}),e.jsx("li",{className:"list-item",children:"NoSuchElementException: No element was found"}),e.jsx("li",{className:"list-item",children:"TimeoutException: Operation timed out"}),e.jsx("li",{className:"list-item",children:"StaleElementReferenceException: Element is no longer attached to the DOM."}),e.jsx("h1",{children:"Advanced Selenium Concepts"}),e.jsx("h4",{children:"> Handling Alerts and Pop-ups"}),e.jsx("img",{className:"img-selenium",src:ev,alt:""}),e.jsx("h4",{children:"> Working with Multiple Windows and Frames"}),e.jsx("img",{className:"img-selenium",src:tv,alt:""}),e.jsx("h4",{children:"> Implicit and Explicit Waits"}),e.jsx("img",{className:"img-selenium",src:nv,alt:""}),e.jsx("h1",{children:"In the realm of Selenium Testing"}),e.jsxs("p",{children:["Page Object Model (POM)- Organize your tests as per interaction with the page relative to the logic of a test."," ",e.jsx("br",{}),e.jsx("span",{style:{fontWeight:"bold"},children:"Independence:"})," All tests should be independent of each other to prevent bad test-writing practices where a failure in one part causes several downstream failures. ",e.jsx("br",{}),e.jsx("span",{style:{fontWeight:"bold"},children:"Silent Waits:"})," Use practical wait strategies for dynamic content, such as setting Expected Wait or Page Load times.",e.jsx("br",{}),e.jsx("span",{style:{fontWeight:"bold"},children:"Assertions:"})," ","Validate test outputs using assertions to establish the significance and reliability of each test."]}),e.jsx("h1",{children:"Conclusion"}),e.jsx("p",{children:"There are other ways to do this also, e.g., using JSoup, but you can use the Selenium + Java combo for testing web applications; it is simple, a very powerful combination, and creating them at will in no time! Creating robust and maintainable test scripts by Misagh Moayyed Introduction. Written test automation is a great way to verify the expected behavior of an application. No matter whether you are only starting to learn Selenium or would like a comprehensive tutorial on mastering Selenium with Java."})]}),r===1&&e.jsx(iv,{}),r===2&&e.jsx(rv,{}),r===3&&e.jsx(sv,{}),r===4&&e.jsx(ov,{}),r===5&&e.jsx(lv,{}),r===6&&e.jsx(av,{}),r===7&&e.jsx(cv,{}),r===8&&e.jsx(dv,{}),r===9&&e.jsx(uv,{}),r===10&&e.jsx(hv,{}),r===11&&e.jsx(pv,{}),r===12&&e.jsx(mv,{}),r===13&&e.jsx(fv,{}),r===14&&e.jsx(xv,{}),r===15&&e.jsx(gv,{}),r===16&&e.jsx(jv,{}),r===17&&e.jsx(vv,{}),r===18&&e.jsx(yv,{}),r===19&&e.jsx(bv,{}),r===20&&e.jsx(wv,{}),r===21&&e.jsx(Sv,{}),r===22&&e.jsx(Ev,{}),r===23&&e.jsx(Cv,{}),r===24&&e.jsx(kv,{}),r===25&&e.jsx(Tv,{}),r===26&&e.jsx(Pv,{}),r===27&&e.jsx(Iv,{}),r===28&&e.jsx(Dv,{}),r===29&&e.jsx(Av,{}),r===30&&e.jsx(Ov,{}),r===31&&e.jsx(Nv,{}),r===32&&e.jsx(Rv,{}),r===33&&e.jsx(Mv,{}),r===34&&e.jsx(Lv,{}),r===35&&e.jsx(Bv,{}),r===36&&e.jsx(Fv,{}),r===37&&e.jsx(Wv,{}),r===38&&e.jsx(Jv,{}),r===39&&e.jsx(Uv,{}),r===40&&e.jsx(zv,{}),r===41&&e.jsx(_v,{})]})]})]}),e.jsx(ha,{})]})}const Hv=()=>e.jsxs("div",{className:"ArraysInJavaScript",children:[e.jsx("h1",{children:"Arrays in JavaScript"}),e.jsx("p",{children:"An array in JavaScript is a data structure that allows you to store multiple values in a single variable. Arrays can hold any data type and can dynamically resize. They are zero-indexed, meaning the first element is at index 0."}),e.jsx("h2",{children:"Creating Arrays"}),e.jsxs("p",{children:["Arrays can be created using square brackets ",e.jsx("code",{children:"[]"})," or the ",e.jsx("code",{children:"Array"})," constructor."]}),e.jsx("pre",{children:e.jsx("code",{children:`// Using square brackets
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
}`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Arrays in JavaScript are powerful and versatile data structures that allow you to store and manipulate collections of values efficiently. By using various array methods, you can perform operations like adding, removing, or transforming elements with ease."})]}),Vv=()=>e.jsxs("div",{className:"ClassOOPS",children:[e.jsx("h1",{children:"Class in JavaScript"}),e.jsx("p",{children:"A class in JavaScript can be regarded as a template for object creation. It contains the data (also called properties) and the functions (methods) that manipulate that data, allowing easier management as a single unit."}),e.jsx("p",{children:"JavaScript classes are better ways of creating objects and working with inheritance. Although classes in JavaScript resemble those in typical object-oriented programming languages such as Java or C++, the implementation does not use a class mechanism and is prototype-based."}),e.jsx("h2",{children:"Formulation of a Class"}),e.jsx("p",{children:"Understanding a class in JavaScript makes it easy to create components that can be utilized multiple times by grouping related methods and properties."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Constructor Method:"})," This is an instance function invoked whenever a new instance of the class is created."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Methods:"})," Operations executed in the context of an instance of that class."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inheritance:"})," Classes can inherit from parent classes, utilizing their methods and properties."]})]}),e.jsx("h2",{children:"Advantages of Classes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code Reusability: Multiple instances of a class can be created for reuse."}),e.jsx("li",{children:"Inheritance: Allows one object to gain properties of another."}),e.jsx("li",{children:"Encapsulation: Combines related data and functions under one class, improving modularity."}),e.jsx("li",{children:"Readability and Structure: Enhances the structure of JavaScript, aiding developers familiar with OOP."})]}),e.jsx("h2",{children:"Disadvantages of Classes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Complexity: Adds layers of complexity compared to simpler functions or object literals."}),e.jsxs("li",{children:["Limited Private Fields: JavaScript supports private methods/fields using ",e.jsx("code",{children:"#"}),", but it's still not widely adopted."]}),e.jsx("li",{children:"Performance: Classes may introduce performance overhead due to inheritance dependencies."})]}),e.jsx("h2",{children:"Example Class in JavaScript"}),e.jsx("pre",{children:e.jsx("code",{children:`class Car {
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
console.log(dog.speak()); // Output: Buddy barks.`})}),e.jsx("h2",{children:"Use Cases for Classes"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Creating multiple objects with shared properties (e.g., Car objects, User profiles)."}),e.jsx("li",{children:"Inheritance: Implementing parent-child class relationships (e.g., Animal-Dog)."}),e.jsx("li",{children:"Encapsulating logic: Separate logic in classes (e.g., Product class in an e-commerce application)."}),e.jsx("li",{children:"Component-Based UI Libraries: Classes are commonly used in frameworks like React for creating UI components."})]})]}),Gv=()=>e.jsxs("div",{className:"ConditionsInJavaScript",children:[e.jsx("h1",{children:"Conditions in JavaScript"}),e.jsx("p",{children:"Whenever conditions are incorporated in computer languages, they act as a control flow mechanism for how the program proceeds. Conditions allow the use of constructs such as if, else, else if, switch, and the ternary operator, enabling the execution of different blocks of code based on specified conditions."}),e.jsx("h2",{children:"1. if Statement"}),e.jsx("p",{children:"The if statement executes a block of code if a specified condition is true."}),e.jsx("pre",{children:e.jsx("code",{children:`if (condition) {
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
}`})}),e.jsxs("p",{children:["Output: ",e.jsx("code",{children:"Access granted."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"JavaScript conditions give developers the flexibility to control the flow of their programs by handling various scenarios based on logical comparisons."})]}),$v=()=>e.jsxs("div",{className:"EncapsulationInJavaScript",children:[e.jsx("h1",{children:"Encapsulation"}),e.jsx("p",{children:"Encapsulation in Object-Oriented Programming (OOP) is the concept of bounding data (i.e., attributes/properties) and methods (i.e., functions/behaviors) of an object in a single entity or class while forbidding the exposure of some components of the object. The object’s state is said to be encapsulated in such a way that it shields and hides its operational data while allowing only a small amount of it to be exposed to control interface interaction with that object."}),e.jsx("p",{children:"In JavaScript, encapsulation enables us to manage the availability of different properties of an object so that they can only be affected or altered by the methods of that object and not in any other manner."}),e.jsx("h2",{children:"Explanation of Encapsulation in JavaScript"}),e.jsx("p",{children:"Encapsulation can be implemented in such a way that certain properties and/or methods are private and are not accessible by any external means. Restricting access through public methods provides the necessary discipline to maintain the validity of the objects."}),e.jsx("p",{children:"Techniques to achieve encapsulation in JavaScript:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Closure-based encapsulation (before ES6)"}),e.jsxs("li",{children:["Private fields and methods using the ",e.jsx("code",{children:"#"})," syntax (ES6 and beyond)"]})]}),e.jsx("p",{children:"Encapsulation helps conceal the internal mechanisms of an object while providing only the necessary interface for interaction, ensuring that the process of data and code maintenance is simplified and improving the modularity of the designed object."}),e.jsx("h2",{children:"Key Concepts of Encapsulation"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Data Hiding:"})," Preventing certain properties of an object from being tampered with by not exposing them directly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Public Interface:"})," Exposing specific methods to interact with the object, controlling how and when properties can be accessed or modified."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Controlled Access:"})," Ensuring that internal data can only be modified in a controlled way, typically through setter and getter methods."]})]}),e.jsx("h2",{children:"Advantages of Encapsulation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Data Integrity: Unauthorized changes to the data are prevented, ensuring protection against data loss."}),e.jsx("li",{children:"Modularity: Encourages modular coding, making it easier to comprehend and maintain."}),e.jsx("li",{children:"Security: Protects information held in data members from unauthorized access or changes."}),e.jsx("li",{children:"Improved Maintenance: Simplifies maintenance as external code cannot alter internal implementation."}),e.jsx("li",{children:"Flexibility: Allows internal changes without affecting user interactions."})]}),e.jsx("h2",{children:"Disadvantages of Encapsulation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Increased Complexity: Can introduce complexity by requiring additional getter and setter methods."}),e.jsx("li",{children:"Performance Overhead: The cost of data hiding and access methods may impact performance."}),e.jsx("li",{children:"Complicated Debugging: Encapsulated elements may complicate error tracking due to limited visibility."}),e.jsx("li",{children:"Overhead for Small Projects: Encapsulation may be excessive for simple projects."})]}),e.jsx("h2",{children:"Implementation of Encapsulation in JavaScript"}),e.jsx("h3",{children:"A. Encapsulation Using Closures (Pre-ES6)"}),e.jsx("p",{children:"Before ES6, encapsulation was often achieved using closures. By defining variables inside the constructor function, properties are kept private."}),e.jsx("pre",{children:e.jsx("code",{children:`function BankAccount(initialBalance) {
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
console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class`})}),e.jsx("h2",{children:"Use Cases of Encapsulation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Banking Applications: Concealing sensitive data like account balance and transaction history."}),e.jsx("li",{children:"User Authentication Systems: Hiding user passwords and exposing methods for password hashing and validation."}),e.jsx("li",{children:"Component Libraries: Concealing internal state of components in UI frameworks like React."}),e.jsx("li",{children:"Data Validation: Ensuring data integrity by controlling how data can be modified."}),e.jsx("li",{children:"Game Development: Controlling player stats and attributes through specific operations."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Encapsulation in JavaScript is central to OOP, enhancing security, modularity, and code maintainability by limiting external access to object properties. By implementing encapsulation, developers can write secure, organized, and maintainable code that ensures consistent behavior of objects throughout an application's lifecycle."}),e.jsx("h3",{children:"Key Points:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Encapsulation is the practice of bundling data and methods into a single entity while hiding internal properties."}),e.jsx("li",{children:"It promotes data integrity, security, and better maintainability by controlling how external code interacts with object properties."}),e.jsx("li",{children:"JavaScript achieves encapsulation through closure-based methods and native private fields (using #)."}),e.jsx("li",{children:"While encapsulation adds complexity, it provides numerous benefits in larger, modular systems where data integrity and controlled access are essential."})]})]}),Xv=()=>e.jsxs("div",{className:"FunctionsInJavaScript",children:[e.jsx("h1",{children:"Functions in JavaScript"}),e.jsx("p",{children:"Functions are a fundamental feature of JavaScript, allowing you to encapsulate code for reuse, modularity, and better organization. Here’s a detailed look at functions in JavaScript, including their syntax, examples, output, and explanations."}),e.jsx("h2",{children:"1. Function Declaration"}),e.jsx("p",{children:e.jsx("strong",{children:"Syntax:"})}),e.jsx("pre",{children:e.jsx("code",{children:`function functionName(parameters) {
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
console.log(sum(1, 2, 3, 4));`})}),e.jsx("p",{children:e.jsx("strong",{children:"Output:"})}),e.jsx("pre",{children:e.jsx("code",{children:"10"})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Rest Parameters: ...numbers collect all arguments into an array."}),e.jsx("li",{children:"Using reduce: Calculates the sum of all numbers in the array."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Functions in JavaScript are crucial for organizing and reusing code efficiently. Function Declarations and Function Expressions provide flexibility in defining and assigning functions. Arrow Functions offer a concise syntax and are ideal for short functions, particularly as callbacks. Immediately Invoked Function Expressions (IIFEs) create a private scope and execute immediately, useful for encapsulating code. Default Parameters simplify handling of optional arguments, while Rest Parameters handle variable numbers of arguments elegantly. Mastery of these function types enhances code readability, maintainability, and functionality in JavaScript applications."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Function Declaration: Classic way to define functions, with functionName and parameters."}),e.jsx("li",{children:"Function Expression: Defines a function assigned to a variable."}),e.jsx("li",{children:"Arrow Function: Concise syntax, useful for callbacks, with implicit return."}),e.jsx("li",{children:"IIFE: Immediately invokes a function, creating a private scope."}),e.jsx("li",{children:"Default Parameters: Provides default values if arguments are not supplied."}),e.jsx("li",{children:"Rest Parameters: Collects multiple arguments into an array, useful for variable-length arguments."})]}),e.jsx("p",{children:"Understanding these various ways to define and use functions helps in writing flexible and maintainable JavaScript code."})]}),Kv=()=>e.jsxs("div",{className:"InheritanceInOOP",children:[e.jsx("h1",{children:"Inheritance in OOP"}),e.jsx("p",{children:"In Object-Oriented Programming (OOP), inheritance is the mechanism by which one class (called the child class or subclass) inherits properties and methods from another class (called the parent class or superclass). This allows for the reusability of code and promotes a hierarchical relationship between objects."}),e.jsx("p",{children:"In JavaScript, inheritance allows a subclass to access the properties and methods of a parent class, reducing redundancy by sharing common functionality across classes."}),e.jsx("h2",{children:"Explanation of Inheritance in JavaScript"}),e.jsxs("p",{children:["Inheritance in JavaScript enables one object (or class) to inherit the properties and methods of another. This is done using the ",e.jsx("code",{children:"extends"})," keyword in ES6 classes or using prototypal inheritance in earlier versions of JavaScript. Through inheritance, you can create a child class that extends a parent class, adding or modifying functionality without duplicating code."]}),e.jsx("p",{children:"JavaScript supports two primary forms of inheritance:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Class-based inheritance: Introduced in ES6, where classes extend other classes."}),e.jsx("li",{children:"Prototypal inheritance: A more flexible inheritance mechanism where objects inherit directly from other objects."})]}),e.jsx("h2",{children:"Types of Inheritance"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Single Inheritance: A subclass inherits from one superclass. This is the most common form of inheritance in JavaScript."}),e.jsx("li",{children:"Multilevel Inheritance: A subclass inherits from a superclass which also has a superclass, forming a vertical inheritance chain."}),e.jsx("li",{children:"Hierarchical Inheritance: Multiple subclasses inherit from a single parent class."}),e.jsx("li",{children:"Multiple Inheritance (Does Not apply In JavaScript): A subclass is allowed to have more than one superclass. This can be simulated using mixins."}),e.jsx("li",{children:"Hybrid Inheritance: A combination of multiple inheritance types (not directly supported in JavaScript but can be simulated)."})]}),e.jsx("h3",{children:"Advantages of Inheritance"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code Reusability: Child classes can reuse code from parent classes."}),e.jsx("li",{children:"Simplifies Maintenance: Changes in parent classes can propagate to child classes."}),e.jsx("li",{children:"Extensibility: Child classes can override parent methods and define new behaviors."}),e.jsx("li",{children:"Logical Hierarchy: Creates a clear structure that mirrors real-life relationships."})]}),e.jsx("h3",{children:"Disadvantages of Inheritance"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Increased Complexity: Can complicate class structures and relationships."}),e.jsx("li",{children:"Tight Coupling: Changes in parent classes can affect all child classes."}),e.jsx("li",{children:"Overridden Methods: Method overriding can introduce bugs if not managed carefully."}),e.jsx("li",{children:"Performance Overhead: Accessing inherited properties can be slower in deep inheritance chains."})]}),e.jsx("h2",{children:"Implementation of Inheritance in JavaScript"}),e.jsx("h3",{children:"A. ES6 Class-Based Inheritance"}),e.jsxs("p",{children:["In modern JavaScript, specifically ES6 and beyond, inheritance is present in the language in the form of classes and the ",e.jsx("code",{children:"extends"})," keyword."]}),e.jsx("pre",{children:e.jsx("code",{children:`class ParentClass {
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
console.log(dog.speak()); // Output: Buddy, the Golden Retriever, barks!`})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Prototype Chain: The Dog object inherits properties and methods from the Animal object."}),e.jsxs("li",{children:[e.jsx("code",{children:"call()"})," Method: Calls the Animal constructor, passing the name property to the Dog constructor."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.create()"}),": Creates a new object with Animal.prototype as its prototype, ensuring that Dog inherits the methods."]}),e.jsx("li",{children:"Method Overriding: The speak method in the Dog prototype overrides the speak method in Animal.prototype."})]}),e.jsx("h2",{children:"Use Cases of Inheritance in JavaScript"}),e.jsxs("ul",{children:[e.jsx("li",{children:"User Management System: A user class can handle attributes like username and email, while Admin and Member subclasses can inherit from the User class."}),e.jsx("li",{children:"E-commerce System: The Product class can define properties like name and price, while Electronics and Clothing subclasses can extend the Product class to add specific features."}),e.jsx("li",{children:"Game Development: The Entity class can define common characteristics, while Player and Enemy classes can inherit from Entity, defining unique attributes and actions."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Inheritance in JavaScript allows for the sharing of common properties and methods among classes, promoting code reuse and reducing redundancy. Understanding the different types of inheritance and their implementations enhances the design of object-oriented applications in JavaScript, making code more maintainable and logical."}),e.jsxs("ul",{children:[e.jsx("li",{children:"This mechanism allows the child class to inherit properties and methods from the parent class."}),e.jsx("li",{children:"Single Inheritance is the most common type of inheritance in JavaScript."})]})]}),Hh=()=>e.jsxs("div",{className:"JavaScriptOverview",children:[e.jsx("h1",{children:"JavaScript"}),e.jsx("p",{children:"JavaScript is a commonly used programming language based on prototyping and is also used for web page design. In both ways, the JavaScript program can be executed on the client side (in-browser) and the server side (like in Node.js). This language allows you to build interactive web pages by altering the Document Object Model (DOM), providing events, and sending requests to other servers via APIs."}),e.jsx("p",{children:"JavaScript is a high-level, interpreted programming language primarily used for building dynamic and interactive web applications. It was created by Brendan Eich in 1995 while working for Netscape, and it has since evolved into one of the core technologies of the web, alongside HTML and CSS."}),e.jsx("h2",{children:"Key Characteristics of JavaScript:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Client-Side Scripting: JavaScript enables interactive web pages and can manipulate the DOM, handle API events, and update content without reloading."}),e.jsx("li",{children:"Server-Side Scripting: With Node.js, JavaScript can also be used on the server to handle business logic and database management."}),e.jsx("li",{children:"Prototype-Based Object-Oriented Programming: JavaScript uses prototype-based inheritance instead of classical inheritance."}),e.jsx("li",{children:"Dynamic and Loosely Typed: Variables can change types, allowing flexibility in coding."}),e.jsx("li",{children:"First-Class Functions: Functions can be assigned to variables, passed as arguments, and returned from other functions."}),e.jsx("li",{children:"Asynchronous and Event Driven: JavaScript handles asynchronous requests using callbacks, promises, or async/await."}),e.jsx("li",{children:"Cross-Browser Functionality: JavaScript can run on all browsers and platforms, often using tools like Babel for transpilation."})]}),e.jsx("h2",{children:"Primary Components of JavaScript:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"DOM Modification:"})," JavaScript communicates with the DOM to dynamically change web pages.",e.jsx("pre",{children:e.jsx("code",{children:'document.getElementById("myElement").innerHTML = "Hello, JavaScript!";'})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Event Management:"})," JavaScript detects user actions like clicks and form submissions.",e.jsx("pre",{children:e.jsx("code",{children:`document.getElementById("myButton").addEventListener("click", function() {
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
myCar.start(); // "Toyota Corolla started"`})})]})]}),e.jsx("h2",{children:"Advantages of JavaScript:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Interactivity: Enables dynamic web pages with user interactions and animations."}),e.jsx("li",{children:"Cross-Platform: Works on all modern browsers and devices."}),e.jsx("li",{children:"Rich Ecosystem: Offers numerous libraries and frameworks (e.g., React, Angular, Vue.js)."}),e.jsx("li",{children:"Full-Stack: With Node.js, it can be used on both client and server sides."}),e.jsx("li",{children:"Huge Community: A large developer community provides ample resources and support."})]}),e.jsx("h2",{children:"Limitations of JavaScript:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Browser Dependence: Variability in execution across different browsers."}),e.jsx("li",{children:"Security: Client-side nature can expose applications to cross-site scripting vulnerabilities."}),e.jsx("li",{children:"Single-Threaded: Performance issues can arise for resource-intensive applications."})]}),e.jsx("h2",{children:"Use Cases:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Web Development: Creating dynamic websites with real-time updates."}),e.jsx("li",{children:"Mobile Apps: Frameworks like React Native enable mobile app development."}),e.jsx("li",{children:"Server-Side Programming: Node.js facilitates server-side JavaScript."}),e.jsx("li",{children:"Game Development: Libraries like Phaser.js enable web-based game development."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"JavaScript is a powerful and flexible language that has become indispensable for modern web development. Its ease of use, combined with powerful features for asynchronous programming, object-oriented design, and cross-platform execution, makes it an essential tool for developers. JavaScript is essential for building dynamic web applications, offering capabilities for everything from DOM manipulation and event handling to asynchronous programming and server-side logic. Understanding the basics will help you write more complex scripts as your knowledge expands."})]}),Qv=()=>e.jsxs("div",{className:"JavaScriptPrimitivesAndObjects",children:[e.jsx("h1",{children:"JavaScript Primitives and Objects"}),e.jsx("p",{children:"JavaScript classifies values into two categories: Primitives and Non-Primitives. These categories merit understanding because they differ in how they are stored, manipulated, and compared."}),e.jsx("h2",{children:"Primitives"}),e.jsx("p",{children:"Primitives are the first level and simplest type of data. They are fixed, meaning their values are constant and cannot be altered once they are created. However, the variable can be reassigned to a different primitive value."}),e.jsx("h3",{children:"Types of Primitive Values"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"String:"})," Characters grouped together.",e.jsx("pre",{children:e.jsx("code",{children:'let str = "Hello";'})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Number:"})," Both whole and decimal numbers.",e.jsx("pre",{children:e.jsx("code",{children:"let num = 42;"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boolean:"})," Logical values, true or false.",e.jsx("pre",{children:e.jsx("code",{children:"let isTrue = true;"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Null:"})," Represents an absent object.",e.jsx("pre",{children:e.jsx("code",{children:"let emptyValue = null;"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Undefined:"})," Declared variable without a value.",e.jsx("pre",{children:e.jsx("code",{children:"let uninitialized;"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"BigInt:"})," Whole numbers larger than the Number type can safely represent.",e.jsx("pre",{children:e.jsx("code",{children:"let bigNum = 123456789123456789123456789n;"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Symbol:"})," A unique identifier.",e.jsx("pre",{children:e.jsx("code",{children:"let uniqueKey = Symbol('id');"})})]})]}),e.jsx("h3",{children:"Characteristics of Primitives"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Immutable: Once created, primitive values cannot be changed."}),e.jsx("li",{children:"Stored by value: Retained in memory as the actual value."}),e.jsx("li",{children:"Copying: A primitive variable can be copied, resulting in independent variables."})]}),e.jsx("h2",{children:"Objects"}),e.jsx("p",{children:"Unlike primitives, objects are more complex data forms in JavaScript. Objects are mutable, meaning their properties can be altered. An object is a collection of one or more key-value pairs."}),e.jsx("h3",{children:"Types of Objects"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Object Literals:"})," The simplest form of JavaScript objects.",e.jsx("pre",{children:e.jsx("code",{children:'let person = { name: "John", age: 30 };'})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arrays:"})," Ordered collections of elements.",e.jsx("pre",{children:e.jsx("code",{children:"let arr = [1, 2, 3, 4];"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Functions:"})," First-class objects that can be assigned to variables.",e.jsx("pre",{children:e.jsx("code",{children:'function greet() { console.log("Hello!"); }'})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Date Objects:"})," For manipulating dates and times.",e.jsx("pre",{children:e.jsx("code",{children:"let today = new Date();"})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Custom Objects:"})," Created by specifying methods and properties.",e.jsx("pre",{children:e.jsx("code",{children:"function Car(make, model) { this.make = make; this.model = model; }"})})]})]}),e.jsx("h3",{children:"Characteristics of Objects"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Mutable: Properties can be changed after the object is created."}),e.jsx("li",{children:"Stored by reference: Objects are stored in memory as references."}),e.jsx("li",{children:"Copying: Copying an object variable does not duplicate the object but copies its reference."})]}),e.jsx("h2",{children:"Example with Explanation"}),e.jsx("h3",{children:"Primitives Example"}),e.jsx("pre",{children:e.jsx("code",{children:`let a = 10;
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
console.log(obj2.name); // Output: "Doe"`})}),e.jsx("h2",{children:"Difference Between Primitives and Objects"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Aspect"}),e.jsx("th",{children:"Primitives"}),e.jsx("th",{children:"Objects"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Data Type"}),e.jsx("td",{children:"String, Number, Boolean, Null, Undefined, BigInt, Symbol"}),e.jsx("td",{children:"Arrays, Functions, Custom objects, Date, Object literals"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Mutability"}),e.jsx("td",{children:"Immutable"}),e.jsx("td",{children:"Mutable"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Storage"}),e.jsx("td",{children:"Stored by value"}),e.jsx("td",{children:"Stored by reference"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Copying"}),e.jsx("td",{children:"Creates an independent copy"}),e.jsx("td",{children:"Copies the reference"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Size"}),e.jsx("td",{children:"Fixed-size"}),e.jsx("td",{children:"Dynamic size"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Operations"}),e.jsx("td",{children:"Creates a new value"}),e.jsx("td",{children:"Modifies the same object"})]})]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"In JavaScript, understanding the distinction between primitives and objects is crucial for effective coding."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Primitives are simple, immutable data types that are stored and copied by value."}),e.jsx("li",{children:"Objects are complex and mutable, stored and copied by reference, allowing multiple variables to point to the same object."})]}),e.jsx("p",{children:"In summary, primitives are ideal for representing simple, standalone values, while objects are essential for handling complex data, enabling efficient data manipulation and real-world modeling. Understanding when to use each type and how they behave is key to mastering JavaScript programming."})]}),Yv=()=>e.jsxs("div",{className:"JavaScriptLoops",children:[e.jsx("h1",{children:"Loops in JavaScript"}),e.jsx("p",{children:"In JavaScript, loops can be defined in several ways to carry out repetitive actions. Each type of loop has its own advantages and disadvantages in application."}),e.jsx("h2",{children:"1. for Loop"}),e.jsx("p",{children:"When the number of iterations can be counted prior, a for loop is most preferred. It consists of an initialization, a condition, and an update expression."}),e.jsx("pre",{children:e.jsx("code",{children:`for (initialization; condition; update) {
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
5`})}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Element: Each value in the array."}),e.jsx("li",{children:"Function: Executes once for each element in the array."})]}),e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["In JavaScript, loops are essential for executing repetitive tasks efficiently. The ",e.jsx("code",{children:"for"})," loop is ideal for known iteration counts, while the ",e.jsx("code",{children:"while"})," loop suits scenarios with uncertain iteration counts. The ",e.jsx("code",{children:"do...while"})," loop guarantees at least one execution before checking the condition. For iterating over object properties, use the ",e.jsx("code",{children:"for...in"})," loop, and for iterable collections like arrays, the ",e.jsx("code",{children:"for...of"})," loop is effective. Additionally, the ",e.jsx("code",{children:"forEach"})," method offers a streamlined way to iterate over array elements."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"for Loop:"})," Best when the number of iterations is known."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"while Loop:"})," Useful for loops where the number of iterations is not known in advance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"do...while Loop:"})," Ensures the loop block runs at least once."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for...in Loop:"})," Iterates over enumerable properties of objects."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for...of Loop:"})," Iterates over iterable objects like arrays and strings."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"forEach Method:"})," Provides a concise way to iterate over arrays."]})]}),e.jsx("p",{children:"Understanding these loops allows you to handle various programming tasks efficiently, from simple iterations to complex data processing."})]}),Zv=()=>e.jsxs("div",{className:"NodeInstallation",children:[e.jsx("h1",{children:"Node.js Installation Steps"}),e.jsx("p",{children:"Node.js is a server-side JavaScript environment that is fast and free. It is quite useful as it is based on the V8 engine developed by Chrome and is intended to develop network applications, APIs, and more. This article describes how to install Node.js on various operating systems, check the installation, and create a Node.js development environment."}),e.jsx("h2",{children:"Prerequisites"}),e.jsx("p",{children:"Before proceeding with the installation of Node.js, please check the following system requirements:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Operating System:"})," Windows 7 upwards, macOS 10.12 upwards, or any modern version of Linux."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Administrator Privileges:"})," Required for installing any program onto the system."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Internet:"})," A stable internet connection is required for downloading Node.js."]})]}),e.jsx("h2",{children:"How to Go About the Installation"}),e.jsx("p",{children:"There are a variety of procedures to install Node.js that depend on the user interface operating system. The two basic methods are:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Using the Official Installer downloaded from the official site."}),e.jsx("li",{children:"Using Node Version Manager (nvm)."})]}),e.jsx("h3",{children:"Using the Official Installer Downloaded from the Official Site"}),e.jsx("h4",{children:"Windows"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Download the Installer:"}),e.jsx("ul",{children:e.jsx("li",{children:"Download the Windows Installer (.msi) for the LTS (Long Term Support) version from the official Node.js download page."})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Run the Installer:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Double-click the downloaded .msi file."}),e.jsx("li",{children:"Follow the on-screen instructions:"}),e.jsx("li",{children:"License Agreement: Accept the terms."}),e.jsx("li",{children:"Destination Folder: Choose the installation path or use the default."}),e.jsx("li",{children:"Custom Setup: Select components to install (default options are usually sufficient)."}),e.jsx("li",{children:"Install: Proceed with the installation."})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Complete Installation:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Click Finish once the installation is complete."}),e.jsx("li",{children:"The installer may prompt you to install additional tools (like Chocolatey). You can choose to install them or skip them."})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Verify Installation:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Open Command Prompt or PowerShell."}),e.jsx("li",{children:"Run the following commands:"}),e.jsx("pre",{children:e.jsx("code",{children:`node -v
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
});`})})]})]}),e.jsx("h3",{children:"Troubleshooting Common Issues"}),e.jsx("p",{children:"1. Node or npm Commands Not Found:"}),e.jsx("p",{children:"2. Permission Issues When Installing Packages Globally:"}),e.jsx("p",{children:"3. Incompatible Node.js Version:"}),e.jsx("p",{children:"4. Network Issues During Installation:"}),e.jsx("h3",{children:"Additional Resources"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Official Node.js Documentation: ",e.jsx("a",{href:"https://nodejs.org/en/docs/",children:"Node.js Docs"})]}),e.jsxs("li",{children:["nvm GitHub Repository: ",e.jsx("a",{href:"https://github.com/nvm-sh/nvm",children:"nvm"})]}),e.jsxs("li",{children:["npm Documentation: ",e.jsx("a",{href:"https://docs.npmjs.com/",children:"npm Docs"})]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Installing Node.js is the first step toward developing powerful server-side applications using JavaScript. This guide provides the necessary steps to get you up and running, whether you choose the straightforward official installer or the flexible Node Version Manager (nvm). After installation, setting up a development environment will pave the way for efficient and effective development."})]}),ey=()=>e.jsxs("div",{className:"BuiltInObjects",children:[e.jsx("h1",{children:"Built-in Objects in JavaScript"}),e.jsx("p",{children:"JavaScript is equipped with ready-made objects that facilitate various operations without requiring much additional code. These include Date, Math, Number, String, Boolean, Array, Object, etc. Their main goal is to accommodate various data types and operations for the programmer's ease."}),e.jsx("h2",{children:"1. Date Object"}),e.jsx("p",{children:"The Date object in JavaScript allows for date and time operations. It enables getting and setting dates, times, and even performing arithmetic operations with dates."}),e.jsx("pre",{children:e.jsx("code",{children:`let date = new Date(); // Gets current date and time
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
console.log(reversed);`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Advantages:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Easy to collect and change information."}),e.jsx("li",{children:"Includes useful methods like map(), filter(), and reduce()."})]}),e.jsx("strong",{children:"Disadvantages:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Large arrays may lead to performance issues."}),e.jsx("li",{children:"No direct method to handle multidimensional arrays."})]})]}),e.jsx("h2",{children:"Summary Table"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Object"}),e.jsx("th",{children:"Purpose"}),e.jsx("th",{children:"Example"}),e.jsx("th",{children:"Advantages"}),e.jsx("th",{children:"Disadvantages"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Date"}),e.jsx("td",{children:"Working with dates and times"}),e.jsx("td",{children:e.jsx("code",{children:"new Date()"})}),e.jsx("td",{children:"Simplifies date and time handling"}),e.jsx("td",{children:"Date formatting is complex"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Math"}),e.jsx("td",{children:"Provides mathematical functions"}),e.jsx("td",{children:e.jsx("code",{children:"Math.round(7.5)"})}),e.jsx("td",{children:"Built-in math functions"}),e.jsx("td",{children:"Limited to basic math functions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Number"}),e.jsx("td",{children:"Handling numbers, formatting, and parsing"}),e.jsx("td",{children:e.jsx("code",{children:"Number.isInteger(5)"})}),e.jsx("td",{children:"Validates and formats numbers"}),e.jsx("td",{children:"Doesn’t handle large numbers well"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Boolean"}),e.jsx("td",{children:"Represents true or false values"}),e.jsx("td",{children:e.jsx("code",{children:"Boolean(1)"})}),e.jsx("td",{children:"Useful for conditional logic"}),e.jsx("td",{children:"Confusing truthy/falsy evaluation"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"String"}),e.jsx("td",{children:"Manipulating and formatting text"}),e.jsx("td",{children:e.jsx("code",{children:"toUpperCase()"})}),e.jsx("td",{children:"Versatile methods for string manipulation"}),e.jsx("td",{children:"Strings are immutable"})]})]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["JavaScript's built-in objects, such as ",e.jsx("code",{children:"Date"}),", ",e.jsx("code",{children:"Math"}),", ",e.jsx("code",{children:"Number"}),", ",e.jsx("code",{children:"Boolean"}),", ",e.jsx("code",{children:"String"}),", and ",e.jsx("code",{children:"Array"}),", provide essential functionality for handling various data types and operations. These objects simplify complex tasks and offer powerful methods, making coding more efficient. Despite some limitations, they are indispensable for effective programming."]})]}),ty=()=>e.jsxs("div",{className:"ObjectsInOOP",children:[e.jsx("h1",{children:"Objects in OOP"}),e.jsx("p",{children:"In programming languages that use object-oriented programming (OOP), an object is an instance of a class, similar to a physical (real-world) object that contains attributes (data/properties) and behaviors (methods/functions). JavaScript treats objects as an OOP language, enabling better relationships between code, functions, and data objects."}),e.jsx("h2",{children:"Objects in JavaScript"}),e.jsx("p",{children:"An object refers to a collection of properties, where each property is defined by a key-value pair. Object methods are functions bound to an object, allowing manipulation of its attributes."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Properties:"})," Characteristics of the object (e.g., Name, Age)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Methods:"})," Blocks of code that act on an object’s attributes (e.g., getName(), calculateAge())."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Encapsulation:"})," Objects bundle data and methods that modify that data together."]})]}),e.jsx("h2",{children:"Key Concepts"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Encapsulation:"})," Objects contain data along with methods that operate on that data."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reusability:"})," Objects can be reused in other parts of the codebase."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Abstraction:"})," Users can utilize objects without needing to understand their implementation."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inheritance:"})," Properties and methods can be inherited from other objects (prototypal inheritance)."]})]}),e.jsx("h2",{children:"Advantages of OOP Objects"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Modularity: Objects simplify complex systems into manageable units."}),e.jsx("li",{children:"Code Reusability: Objects can be reused across the codebase."}),e.jsx("li",{children:"Encapsulation: Objects encapsulate data and methods for cleaner code."}),e.jsx("li",{children:"Abstraction: Implementation details are hidden from users."}),e.jsx("li",{children:"Inheritance: Create more specific objects without rewriting code."})]}),e.jsx("h2",{children:"Disadvantages of Objects"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Performance Overhead: Accessing properties in deep hierarchies can incur overhead."}),e.jsx("li",{children:"Memory Usage: Creating too many objects increases memory consumption."}),e.jsx("li",{children:"Complexity in Large Applications: Managing numerous objects can become problematic."}),e.jsx("li",{children:"Prototypal Inheritance Complexity: Understanding prototypal inheritance may be challenging."})]}),e.jsx("h2",{children:"Implementation of Objects in JavaScript"}),e.jsx("h3",{children:"A. Object Literals"}),e.jsx("p",{children:"Constructing objects using the syntax of object literals:"}),e.jsx("pre",{children:e.jsx("code",{children:`const objectName = {
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
console.log(book1.returnBook()); // Output: The Great Gatsby has been returned.`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"In conclusion, object-oriented programming (OOP) in JavaScript provides a robust framework for building scalable and maintainable applications. By utilizing objects, developers can encapsulate data and functionality, promoting code reuse and modular design. JavaScript's prototypal inheritance allows for flexible object creation and extension, enabling developers to create complex hierarchies while maintaining performance. The use of ES6 classes further simplifies the syntax and enhances readability, making OOP concepts more accessible. Additionally, features like encapsulation and polymorphism foster better organization of code, facilitating collaboration among teams. Overall, mastering OOP in JavaScript not only enhances coding efficiency but also aligns with modern development practices, allowing for the creation of dynamic and interactive web applications."})]}),ny=()=>e.jsxs("div",{className:"OperatorsAndExpressions",children:[e.jsx("h1",{children:"Operators and Expressions in JavaScript"}),e.jsx("p",{children:"In JavaScript, operators are symbols or keywords used to perform operations on values (operands). Expressions are any valid combination of literals, variables, operators, and functions that can be evaluated to produce a value."}),e.jsx("h2",{children:"1. Arithmetic Operators"}),e.jsx("p",{children:"Arithmetic operators are used to perform basic mathematical operations."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Sign"}),e.jsx("th",{children:"Name"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"+"}),e.jsx("td",{children:"Addition"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"-"}),e.jsx("td",{children:"Subtraction"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"*"}),e.jsx("td",{children:"Multiplication"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/"}),e.jsx("td",{children:"Division"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"%"}),e.jsx("td",{children:"Modulus"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"**"}),e.jsx("td",{children:"Exponentiation"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"++"}),e.jsx("td",{children:"Increment"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"--"}),e.jsx("td",{children:"Decrement"})]})]})]}),e.jsx("pre",{children:e.jsx("code",{children:`let a = 10;
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
console.log(canVote); // Output: "Yes"`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Operators in JavaScript are vital for manipulating data and controlling logic within programs. They include arithmetic operators for calculations, assignment operators for combining assignments with arithmetic, and comparison operators for evaluating relationships between values. Logical operators handle complex conditions, while string operators manage text manipulation. The conditional (ternary) operator provides a compact way to implement conditional logic, and type operators help with type checking. Bitwise operators perform operations on binary data, and comma operators allow for evaluating multiple expressions. Mastering these operators is essential for creating dynamic and efficient JavaScript applications."}),e.jsx("p",{children:"Expressions in JavaScript are fundamental components that evaluate to produce values. They encompass a range of types, including primary expressions (literals and constants), arithmetic and string expressions for calculations and text manipulation, and logical and comparison expressions for decision-making and value comparison. Function expressions define reusable code blocks, while conditional (ternary) expressions offer concise conditional logic. Object and array expressions manage complex data structures, and assignment expressions combine value assignment with evaluation. Mastering these expressions enables you to build dynamic, efficient, and effective JavaScript applications by leveraging the language's versatile and powerful features."})]}),iy=()=>e.jsxs("div",{className:"Polymorphism",children:[e.jsx("h1",{children:"Polymorphism in OOP"}),e.jsx("p",{children:"Polymorphism in OOP means different objects respond to the same method in different manners. Simplifying these terms, polymorphism enables a single interface to work with many different forms (data types, classes, or functions). The term polymorphism means having many forms and hence polymorphism in OOP facilitates a class where a particular method can be implemented on multiple objects, where each of the objects behaves differently."}),e.jsx("h2",{children:"Kinds of Polymorphism"}),e.jsx("h3",{children:"1. Compile-time Polymorphism or Static Polymorphism"}),e.jsx("p",{children:"This aspect of object-oriented programming determines the parameter values during program compilation. Most of the time, it is achieved via method overloading (same name of the method but with different specifications of arguments). However, JavaScript does not allow such method overloading."}),e.jsx("h3",{children:"2. Run time Polymorphism or Dynamic Polymorphism"}),e.jsx("p",{children:"In this case, behavior is settled at run time. It is most often realized by employing overriding methods (the reimplementation of the base class function in the descendant class)."}),e.jsx("h2",{children:"Advantages of Polymorphism"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code Reusability: Encourages code accessibility and flexibility."}),e.jsx("li",{children:"Extensibility: Easier to add features without tampering with the superclass."}),e.jsx("li",{children:"Maintainability: Reduces the amount of code and simplifies control."}),e.jsx("li",{children:"Decoupling: Reduces dependency of classes on each other."})]}),e.jsx("h2",{children:"Disadvantages of Polymorphism"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Performance Overhead: May have performance overhead in determining the appropriate method at runtime."}),e.jsx("li",{children:"Complexity: Can lead to confusion about which method implementation is invoked."}),e.jsx("li",{children:"Debugging Difficulty: Errors are likely at runtime, making it hard to identify issues."})]}),e.jsx("h2",{children:"Implementation of Polymorphism"}),e.jsx("h3",{children:"A. Method Overriding (Runtime Polymorphism)"}),e.jsx("pre",{children:e.jsx("code",{children:`class Animal {
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
console.log(calc.calculate(5, 3, '-')); // Output: 2`})}),e.jsx("h2",{children:"Use Cases of Polymorphism in JavaScript"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"User Interface Components:"})," A component class defines common behavior, with subclasses implementing their render methods."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Data Processing System:"})," Different types of data can be processed with a common method that behaves differently for each data type."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Payment Gateway System:"})," Different payment classes redefine the processPayment method according to their specific payment method."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shape Rendering in Graphics:"})," Different shapes extend a base class and implement their draw methods to project themselves."]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Polymorphism in JavaScript allows for a more generalized method implementation, where the effect differs based on the object it is called upon. It enhances code design by encouraging method overriding and simulating method overloading, making it easier to write flexible, reusable, and maintainable code. By leveraging polymorphism, developers can design systems where new functionality can be easily added without modifying existing code, thereby adhering to the Open-Closed Principle in software design."}),e.jsx("h2",{children:"Key Points"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Polymorphism defines the ability to implement a single method in different forms depending on the type of object."}),e.jsx("li",{children:"Method Overriding (runtime polymorphism) allows child classes to provide specific implementations of a method inherited from a parent class."}),e.jsx("li",{children:"Method Overloading is not natively supported in JavaScript but can be simulated by handling arguments dynamically within a method."}),e.jsx("li",{children:"Advantages include code reusability, flexibility, and extensibility, while disadvantages include potential performance overhead and increased complexity."})]})]}),ry=()=>e.jsxs("div",{className:"StaticMethods",children:[e.jsx("h1",{children:"Static Methods in OOP"}),e.jsx("h2",{children:"Definition of Static Methods in OOP"}),e.jsxs("p",{children:["In Object-Oriented Programming (OOP), a static method is a type of method that is associated with the class itself, instead of being part of the instances of the class. This means that a static method does not require an instance of the class to be created; it can be called directly on the class itself. In JavaScript, static methods are defined using the ",e.jsx("code",{children:"static"})," keyword."]}),e.jsx("h2",{children:"Explanation of Static Methods in JavaScript"}),e.jsxs("p",{children:["A static method is invoked on a class rather than on an object instance. Static methods do not have access to instance variables (defined using ",e.jsx("code",{children:"this"}),") since they are purely class methods, not instance methods. They can be efficiently applied to utility methods where it is not necessary to create an instance of the class."]}),e.jsx("h2",{children:"Key Characteristics"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"No Access to Instance Data:"})," Static methods cannot access or alter properties that apply to instances of the class."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Over Class Level Usage:"})," They work at the class level and are used for housekeeping functions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessed via the Class Name:"})," You invoke a static method by the name of the class, not the name of its instance."]})]}),e.jsx("h2",{children:"Advantages of Static Methods"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Utility Functions: Ideal for utility or helper functions."}),e.jsx("li",{children:"No Creation of Object: Static methods are called without creating an instance of the class."}),e.jsx("li",{children:"Functionalities Of Class Level: They encapsulate functions logically related to a class."}),e.jsx("li",{children:"Reusable: Static methods can be reused across the application."})]}),e.jsx("h2",{children:"Disadvantages of Static Methods"}),e.jsxs("ul",{children:[e.jsx("li",{children:"No Access to Instance Data: They cannot access instance properties."}),e.jsx("li",{children:"No Extensibility: It can be tricky to modify behaviors in subclasses."}),e.jsx("li",{children:"May Lead to Tight Coupling: Too many static methods can create interdependencies."}),e.jsx("li",{children:"Global-Like Behavior: They behave like global functions since they do not require class instances."})]}),e.jsx("h2",{children:"Implementation of Static Methods in JavaScript"}),e.jsx("h3",{children:"A. Static Methods Definition in ES6 Class"}),e.jsx("pre",{children:e.jsx("code",{children:`class MathHelper {
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
console.log(Counter.getCount()); // Output: 2`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Static methods in JavaScript are useful for defining utility functions and class-level functionalities that do not require instance data. They enhance the modularity of code and encapsulate functions logically related to a class, facilitating a more organized and efficient code structure."}),e.jsx("h2",{children:"Key Points"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Static methods belong to the class itself and cannot access instance properties."}),e.jsx("li",{children:"They are ideal for utility functions, data validation, and class-level functionality."}),e.jsx("li",{children:"Static methods can be inherited by child classes, making them flexible for shared behaviors."}),e.jsx("li",{children:"Proper use of static methods helps in structuring code that is clean and maintainable."})]})]}),sy=()=>e.jsxs("div",{className:"StringsInJavaScript",children:[e.jsx("h1",{children:"Strings in JavaScript"}),e.jsx("h2",{children:"String Creation"}),e.jsx("h3",{children:"1. String Literals"}),e.jsxs("p",{children:["You can create a string using single quotes (",e.jsx("code",{children:"'"}),"), double quotes (",e.jsx("code",{children:'"'}),"), or backticks (",e.jsx("code",{children:"`"}),")."]}),e.jsx("pre",{children:e.jsx("code",{children:`let singleQuoteString = 'Hello, world!';
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
console.log(modified); // Output: "JavaScript Language"`})}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Strings in JavaScript are essential for handling text, offering a variety of methods to manipulate and analyze content. They can be created using literals or the String constructor, and are immutable, meaning operations on strings return new strings rather than modifying the original. Key methods include .length, .charAt(), .concat(), .indexOf(), .slice(), .split(), .toLowerCase(), .toUpperCase(), and .trim(). Template literals, using backticks, provide a powerful way to embed expressions and handle multi-line strings. Mastery of these string operations enhances text processing and dynamic content generation, making JavaScript programming more effective and flexible."})]}),oy=()=>e.jsxs("div",{className:"VariablesInJavaScript",children:[e.jsx("h1",{children:"Variables in JavaScript"}),e.jsx("p",{children:"Variables in JavaScript aid in holding a value that can be intentionally fetched and worked on in the inside code. A variable is a value that can be changed at runtime, which means it’s not a constant. JavaScript allows the creation of variables in different ways, and knowing how to do so improves the cleanliness and efficiency of your code."}),e.jsx("h2",{children:"Variable Declarations"}),e.jsxs("p",{children:["In JavaScript, three keywords are used to declare variables: ",e.jsx("code",{children:"var"}),", ",e.jsx("code",{children:"let"}),", and ",e.jsx("code",{children:"const"}),". Each has different rules regarding scope."]}),e.jsx("h3",{children:"Basic Structure for Declaration:"}),e.jsx("pre",{children:e.jsx("code",{children:`var variableName; // Variable declared using var
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
30`}),e.jsx("h2",{children:"Summary of Differences"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Feature"}),e.jsx("th",{children:"var"}),e.jsx("th",{children:"let"}),e.jsx("th",{children:"const"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Scope"}),e.jsx("td",{children:"Function-scoped or global"}),e.jsx("td",{children:"Block-scoped"}),e.jsx("td",{children:"Block-scoped"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Hoisting"}),e.jsx("td",{children:"Hoisted, initialized as undefined"}),e.jsx("td",{children:"Hoisted, but not initialized"}),e.jsx("td",{children:"Hoisted, but not initialized"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Reassignment"}),e.jsx("td",{children:"Can be reassigned and redeclared"}),e.jsx("td",{children:"Can be reassigned, not redeclared"}),e.jsx("td",{children:"Cannot be reassigned"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Initialization"}),e.jsx("td",{children:"Optional"}),e.jsx("td",{children:"Optional"}),e.jsx("td",{children:"Required"})]})]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsxs("p",{children:["In summary, ",e.jsx("code",{children:"var"})," has a function or global scope and allows redeclaration, which can lead to bugs. ",e.jsx("code",{children:"let"})," provides block scope and is safer because it doesn't allow redeclaration in the same scope. ",e.jsx("code",{children:"const"})," is also block-scoped but is used for variables that should not be reassigned, making it useful for constants or objects that you don’t want to overwrite. Understanding how to properly use ",e.jsx("code",{children:"var"}),", ",e.jsx("code",{children:"let"}),", and ",e.jsx("code",{children:"const"})," in JavaScript helps in managing variable scope, preventing bugs, and writing cleaner, more readable code."]})]}),ly=()=>e.jsxs("div",{className:"AbstractionInJavaScript",children:[e.jsx("h1",{children:"Abstraction"}),e.jsx("p",{children:"In Object-Oriented Programming (OOP), abstraction is the concept of hiding the internal implementation details of an object and exposing only the necessary functionality to the outside world. It focuses on providing a simplified interface to the user, keeping complexity hidden. This allows users to interact with the object without needing to understand its internal workings."}),e.jsx("p",{children:"In JavaScript, abstraction can be achieved by defining methods and properties that are necessary for external use while keeping internal logic hidden using closures or private fields (introduced in ES6+). By doing so, you separate the what (functionality exposed) from the how (internal implementation)."}),e.jsx("h2",{children:"Explanation of Abstraction in JavaScript"}),e.jsx("p",{children:"In JavaScript, abstraction can be implemented using several techniques:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Encapsulation (grouping related data and methods inside a class)."}),e.jsxs("li",{children:["Private methods and fields (using closures or ",e.jsx("code",{children:"#"})," in modern JavaScript)."]}),e.jsx("li",{children:"Public API (exposing only what the object wants the user to interact with)."})]}),e.jsx("p",{children:"Abstraction helps hide unnecessary details from the user and provides only the required interface. This improves the modularity and readability of the code while protecting the object’s integrity by preventing external tampering with internal data."}),e.jsx("h2",{children:"Types of Abstraction"}),e.jsx("p",{children:"There are two primary types of abstraction in OOP:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Data Abstraction:"})," Hides internal data structures or implementation details and provides access to only relevant data through controlled interfaces."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Control Abstraction:"})," Hides the logic or control flow behind high-level operations, exposing only essential behavior to the user."]})]}),e.jsx("h3",{children:"1. Data Abstraction"}),e.jsx("p",{children:"Data abstraction focuses on hiding the internal state and allowing access to data only through public methods. This is done by encapsulating the data and exposing only the necessary operations to manipulate the data."}),e.jsx("pre",{children:e.jsx("code",{children:`class Person {
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
console.log(myCar.#fuelLevel); // Error: Private field '#fuelLevel' must be declared in an enclosing class`})}),e.jsx("h2",{children:"Use Cases of Abstraction"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ATM:"})," An ATM allows users to withdraw cash or check their account balance without knowing how the transaction is processed internally."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Library Management System:"})," Users can borrow and return books without understanding the complexities of the underlying processes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Payment Gateway System:"})," Users can make payments without knowing the internal workings of the payment processing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Game Development:"})," Users can interact with the game without understanding the complex algorithms behind the scenes."]})]}),e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Abstraction in JavaScript is a crucial OOP concept that helps simplify complex systems by hiding internal implementation details and exposing only necessary methods and properties. By using techniques like closures or ES6 private fields, JavaScript can implement abstraction, ensuring that internal logic remains hidden while providing users with a clean, user-friendly interface to interact with. Abstraction helps developers build complex systems that are easier to use, secure, and maintainable while also protecting the internal state of the application."}),e.jsx("h3",{children:"Key Points:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Abstraction hides the implementation details and provides a simple interface for interacting with objects."}),e.jsx("li",{children:"It can be implemented in JavaScript using closures (before ES6) or private fields (ES6+)."}),e.jsx("li",{children:"It promotes modularity, security, and maintainability by separating the what from the how."}),e.jsx("li",{children:"In a real-world scenario like the Library Management System, abstraction makes it easier to interact with the system without exposing unnecessary complexities."})]})]}),$u=[{path:"JavaScriptOverview",component:e.jsx(Hh,{})},{path:"VariablesInJavaScript",component:e.jsx(oy,{})},{path:"StringsInJavaScript",component:e.jsx(sy,{})},{path:"ObjectsInOOP",component:e.jsx(ty,{})},{path:"BuiltInObjects",component:e.jsx(ey,{})},{path:"JavaScriptLoops",component:e.jsx(Yv,{})},{path:"JavaScriptPrimitivesAndObjects",component:e.jsx(Qv,{})},{path:"OperatorsAndExpressions",component:e.jsx(ny,{})},{path:"ConditionsInJavaScript",component:e.jsx(Gv,{})},{path:"EncapsulationInJavaScript",component:e.jsx($v,{})},{path:"FunctionsInJavaScript",component:e.jsx(Xv,{})},{path:"InheritanceInOOP",component:e.jsx(Kv,{})},{path:"AbstractionInJavaScript",component:e.jsx(ly,{})},{path:"ClassOOPS",component:e.jsx(Vv,{})},{path:"ArraysInJavaScript",component:e.jsx(Hv,{})},{path:"StaticMethods",component:e.jsx(ry,{})},{path:"Polymorphism",component:e.jsx(iy,{})},{path:"NodeInstallation",component:e.jsx(Zv,{})}];function ay(){const[r,o]=I.useState(!1);return nr(),I.useEffect(()=>{const a=()=>{o(window.innerWidth<=768)};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),e.jsxs("div",{className:"Playwright",children:[e.jsx(Os,{}),e.jsxs("div",{className:"main",children:[e.jsx("div",{className:`container-left ${r?"hidden":""}`,children:e.jsx("div",{className:"container-leftt",children:e.jsxs("div",{className:"container-links",children:[e.jsx("h1",{children:"Playwright"}),$u.map((a,d)=>e.jsx(la,{className:"links",to:a.path,children:a.path.replace(/([A-Z])/g," $1").trim()},d))]})})}),e.jsx("div",{className:"main-container",children:e.jsx("div",{className:"main-page",children:e.jsxs(ah,{children:[e.jsx(Dt,{path:"/",element:e.jsx(Hh,{})}),$u.map((a,d)=>e.jsx(Dt,{path:`/${a.path}`,element:a.component},d))]})})})]}),e.jsx(ha,{})]})}const cy="/assets/video1-B-Sfx63a.mp4",ql=[{id:1,name:"Sarthak Gupta",role:"QA Lead",text:"The Selenium Master course transformed our testing process. The practical examples and in-depth explanations made complex concepts easy to understand.",rating:5,course:"Selenium Master Course",type:"text"},{id:2,name:"Ujjwal Singh",role:"Senior Automation Tester",text:"I went from manual testing to automation expert in just 3 months. The Playwright course content is top-notch and always up-to-date with latest practices.",rating:5,course:"Playwright Testing",type:"text"},{id:3,name:"Rahul Kumar",role:"Test Automation Engineer",text:"The API testing course provided invaluable insights into modern testing practices. The hands-on projects really helped cement my understanding.",rating:5,course:"API Testing Masterclass",type:"text"},{id:4,name:"Vishvesh Kushwaha",role:"DevOps Engineer",text:"Cypress course was exactly what our team needed. Clear explanations, real-world examples, and excellent support from the instructors.",rating:5,course:"Cypress Automation",type:"text"},{id:5,name:"Ankita Sharma",role:"Automation Architect",videoUrl:cy,course:"Advanced Automation Strategies",type:"video"},{id:6,name:"Manoj Kumar",role:"Senior QA Engineer",videoUrl:"https://www.example.com/video2.mp4",course:"Load Testing Mastery",type:"video"}];function dy(){const[r,o]=I.useState(0),[a,d]=I.useState(!1),u=()=>{a||(d(!0),o(m=>m===0?ql.length-1:m-1),setTimeout(()=>d(!1),500))},h=()=>{a||(d(!0),o(m=>m===ql.length-1?0:m+1),setTimeout(()=>d(!1),500))};return e.jsx("section",{className:"testimonials-section",children:e.jsxs("div",{className:"testimonials-container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"What Our Students Say"}),e.jsx("p",{children:"Join thousands of successful automation engineers who transformed their careers with us"})]}),e.jsxs("div",{className:"testimonials-carousel",children:[e.jsx("button",{className:"nav-button prev",onClick:u,children:e.jsx(ix,{size:24})}),e.jsx("button",{className:"nav-button next",onClick:h,children:e.jsx(Ki,{size:24})}),e.jsx("div",{className:"testimonials-wrapper",children:ql.map((m,f)=>e.jsx("div",{className:`testimonial-card ${f===r?"active":""}`,style:{transform:`translateX(${(f-r)*100}%)`,opacity:f===r?1:0,zIndex:f===r?1:0},children:m.type==="text"?e.jsxs(e.Fragment,{children:[e.jsx(ux,{className:"quote-icon",size:40}),e.jsxs("div",{className:"testimonial-content",children:[e.jsx("p",{className:"testimonial-text",children:m.text}),e.jsx("div",{className:"rating",children:[...Array(m.rating)].map((g,v)=>e.jsx(px,{className:"star",size:16,fill:"#FFD700",color:"#FFD700"},v))}),e.jsx("div",{className:"course-tag",children:m.course})]}),e.jsx("div",{className:"testimonial-author",children:e.jsxs("div",{className:"author-info",children:[e.jsx("h4",{children:m.name}),e.jsx("p",{children:m.role})]})})]}):e.jsxs("div",{className:"video-testimonial",children:[e.jsxs("video",{controls:!0,className:"testimonial-video",children:[e.jsx("source",{src:m.videoUrl,type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsx("div",{className:"testimonial-author",children:e.jsxs("div",{className:"author-info",children:[e.jsx("h4",{children:m.name}),e.jsx("p",{children:m.role})]})})]})},m.id))})]})]})})}const uy=()=>{var v;const[r,o]=I.useState(null),[a,d]=I.useState({}),[u,h]=I.useState(""),m=[{id:1,title:"Java Fundamentals",icon:e.jsx($l,{size:32}),description:"Core Java concepts and programming fundamentals",questions:[{question:"What makes the Java platform independent?",answer:"Java works on the principle of writing once and running anywhere. Once a Java program is written, it is compiled into byte code, which can then be run on any Java Virtual Machine or JVM. Different operating systems and hardware architectures have JVMs custom-designed for themselves, making code agnostic to the underlying hardware and OS."},{question:"Explain the concept of OOP in Java.",answer:"Java is an Object-Oriented Programming (OOP) language that organizes data and behavior in objects. Key concepts include: Encapsulation (bundling data and methods), Abstraction (hiding complexity), Inheritance (allowing new classes to inherit properties), and Polymorphism (enabling objects to be treated as instances of their parent class)."}]},{id:2,title:"Selenium Basics",icon:e.jsx(uh,{size:32}),description:"Essential Selenium WebDriver concepts",questions:[{question:"What is Selenium and what are its components?",answer:"Selenium is a tool for automating web browser interactions. Components include: Selenium WebDriver (allows direct browser interaction), Selenium IDE (browser extension for record-and-playback), and Selenium Grid (distributes tests across multiple machines)."},{question:"Explain different locators in Selenium WebDriver.",answer:"Selenium WebDriver provides various locators: ID, Name, Class Name, Tag Name, Link Text, Partial Link Text, CSS Selector, and XPath. Each serves different purposes in identifying elements on a webpage."}]},{id:3,title:"Advanced Automation",icon:e.jsx(Qi,{size:32}),description:"Advanced testing frameworks and practices",questions:[{question:"What is the Page Object Model (POM)?",answer:"Page Object Model is a design pattern that creates object repositories for web UI elements. It reduces code duplication and improves test maintenance. Each web page has a corresponding Page Class containing web element locators and methods to interact with them."}]},{id:4,title:"JavaScript",icon:e.jsx(ox,{size:32}),description:"Modern JavaScript concepts and features",questions:[{question:"What are the different data types in JavaScript?",answer:"JavaScript has Primitive Types (String, Number, Boolean, Undefined, Null, Symbol, BigInt) and Non-Primitive Types (Object, which includes arrays and functions)."},{question:"Explain promises and async/await in JavaScript.",answer:"Promises represent a value that may be available now, in the future, or never. They handle asynchronous operations using .then() and .catch() methods. Async/await is a syntactic sugar over promises that makes asynchronous code look synchronous, making it easier to read and maintain."},{question:"What is event delegation in JavaScript?",answer:"Event delegation is a pattern where a single event listener is added to a parent element to handle events on multiple child elements. This improves performance by reducing the number of event listeners needed."}]},{id:5,title:"Playwright",icon:e.jsx(Qi,{size:32}),description:"Modern browser automation with Playwright",questions:[{question:"What is Playwright and why is it used?",answer:"Playwright is an open-source browser automation tool by Microsoft that enables end-to-end testing of web applications across multiple browsers (Chromium, Firefox, WebKit). It supports modern JavaScript frameworks and allows for cross-browser and cross-platform testing with a single API."},{question:"How do you handle different types of waits in Playwright?",answer:"Playwright has built-in automatic waiting for elements to be actionable. You can use explicit waits like page.waitForSelector() for elements, page.waitForTimeout() for time-based waits, and page.waitForLoadState() for network activity."},{question:"What are locators in Playwright and how do you use them?",answer:"Locators in Playwright are used to find and interact with elements on a page. They automatically handle waiting for elements to be actionable. Common locators include page.getByText(), page.getByRole(), page.getByLabel(), page.getByTestId(), and page.getByTitle()."}]}],f=y=>{d(S=>({...S,[y]:!S[y]}))},g=u?m.map(y=>({...y,questions:y.questions.filter(S=>S.question.toLowerCase().includes(u.toLowerCase())||S.answer.toLowerCase().includes(u.toLowerCase()))})).filter(y=>y.questions.length>0):m;return e.jsxs("span",{children:[e.jsx(Os,{}),e.jsx("div",{className:"interview-qa home",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"hero-section",children:e.jsxs("div",{className:"hero-content",children:[e.jsxs("h1",{children:["Technical Interview ",e.jsx("span",{className:"highlight",children:"Questions"})]}),e.jsx("p",{className:"subtitle",children:"Master your next technical interview with comprehensive Q&A"}),e.jsxs("div",{className:"search-bar",children:[e.jsx("input",{type:"text",placeholder:"Search questions...",value:u,onChange:y=>h(y.target.value)}),e.jsx(dh,{className:"search-icon"})]})]})}),e.jsx("div",{className:"topics-container",children:e.jsx("div",{className:"topics-scroll-wrapper",children:e.jsx("div",{className:"topics-grid",children:g.map(y=>e.jsxs("div",{className:`topic-card ${r===y.id?"selected":""}`,onClick:()=>o(y.id),children:[e.jsx("div",{className:"topic-icon",children:y.icon}),e.jsx("h2",{children:y.title}),e.jsx("p",{children:y.description})]},y.id))})})}),r&&e.jsxs("div",{className:"qa-section",children:[e.jsxs("div",{className:"section-header",children:[e.jsx(Qi,{className:"header-icon"}),e.jsx("h3",{children:"Interview Questions"})]}),e.jsx("div",{className:"questions-container",children:(v=g.find(y=>y.id===r))==null?void 0:v.questions.map((y,S)=>e.jsxs("div",{className:`qa-card ${a[S]?"expanded":""}`,onClick:()=>f(S),children:[e.jsxs("div",{className:"question-header",children:[e.jsx("h4",{children:y.question}),a[S]?e.jsx(rx,{className:"chevron-icon"}):e.jsx(nx,{className:"chevron-icon"})]}),a[S]&&e.jsx("div",{className:"answer",children:y.answer})]},S))})]})]})})]})};ye.defaults.baseURL="http://localhost:8000";ye.defaults.withCredentials=!0;function hy(){return e.jsxs("div",{className:"route",children:[e.jsx(Bj,{position:"bottom-right",toastOptions:{duration:3e3}}),e.jsxs(ah,{children:[e.jsx(Dt,{path:"/",element:e.jsx(py,{})}),e.jsx(Dt,{path:"/register",element:e.jsx(Kj,{})}),e.jsx(Dt,{path:"/login",element:e.jsx(Qj,{})}),e.jsx(Dt,{path:"/dashboard",element:e.jsx(Yj,{})}),e.jsx(Dt,{path:"/Selenium/*",element:e.jsx(qv,{})}),e.jsx(Dt,{path:"/Playwright/*",element:e.jsx(ay,{})}),e.jsx(Dt,{path:"/InterviewQuestions/*",element:e.jsx(uy,{})})]})]})}function py(){return e.jsxs("div",{className:"app",children:[e.jsx("div",{children:e.jsx(Os,{})}),e.jsx(jx,{}),e.jsx(dy,{}),e.jsx(ha,{})]})}Qm.createRoot(document.getElementById("root")).render(e.jsx(Ut.StrictMode,{children:e.jsx(Xf,{children:e.jsx(hy,{})})}));
