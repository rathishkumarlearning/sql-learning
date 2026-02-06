(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))E(U);new MutationObserver(U=>{for(const J of U)if(J.type==="childList")for(const ne of J.addedNodes)ne.tagName==="LINK"&&ne.rel==="modulepreload"&&E(ne)}).observe(document,{childList:!0,subtree:!0});function V(U){const J={};return U.integrity&&(J.integrity=U.integrity),U.referrerPolicy&&(J.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?J.credentials="include":U.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function E(U){if(U.ep)return;U.ep=!0;const J=V(U);fetch(U.href,J)}})();var ss={exports:{}},Tu={};var Sd;function e0(){if(Sd)return Tu;Sd=1;var A=Symbol.for("react.transitional.element"),j=Symbol.for("react.fragment");function V(E,U,J){var ne=null;if(J!==void 0&&(ne=""+J),U.key!==void 0&&(ne=""+U.key),"key"in U){J={};for(var Re in U)Re!=="key"&&(J[Re]=U[Re])}else J=U;return U=J.ref,{$$typeof:A,type:E,key:ne,ref:U!==void 0?U:null,props:J}}return Tu.Fragment=j,Tu.jsx=V,Tu.jsxs=V,Tu}var vd;function t0(){return vd||(vd=1,ss.exports=e0()),ss.exports}var p=t0(),fs={exports:{}},Q={};var pd;function l0(){if(pd)return Q;pd=1;var A=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),O=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),me=Symbol.iterator;function Qe(o){return o===null||typeof o!="object"?null:(o=me&&o[me]||o["@@iterator"],typeof o=="function"?o:null)}var Ve={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,B={};function F(o,R,_){this.props=o,this.context=R,this.refs=B,this.updater=_||Ve}F.prototype.isReactComponent={},F.prototype.setState=function(o,R){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,R,"setState")},F.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function z(){}z.prototype=F.prototype;function Oe(o,R,_){this.props=o,this.context=R,this.refs=B,this.updater=_||Ve}var xe=Oe.prototype=new z;xe.constructor=Oe,D(xe,F.prototype),xe.isPureReactComponent=!0;var et=Array.isArray;function ae(){}var Y={H:null,A:null,T:null,S:null},Ae=Object.prototype.hasOwnProperty;function he(o,R,_){var C=_.ref;return{$$typeof:A,type:o,key:R,ref:C!==void 0?C:null,props:_}}function Mt(o,R){return he(o.type,R,o.props)}function rt(o){return typeof o=="object"&&o!==null&&o.$$typeof===A}function Xe(o){var R={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(_){return R[_]})}var Al=/\/+/g;function Ht(o,R){return typeof o=="object"&&o!==null&&o.key!=null?Xe(""+o.key):R.toString(36)}function Rt(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(ae,ae):(o.status="pending",o.then(function(R){o.status==="pending"&&(o.status="fulfilled",o.value=R)},function(R){o.status==="pending"&&(o.status="rejected",o.reason=R)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function S(o,R,_,C,X){var K=typeof o;(K==="undefined"||K==="boolean")&&(o=null);var ie=!1;if(o===null)ie=!0;else switch(K){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(o.$$typeof){case A:case j:ie=!0;break;case P:return ie=o._init,S(ie(o._payload),R,_,C,X)}}if(ie)return X=X(o),ie=C===""?"."+Ht(o,0):C,et(X)?(_="",ie!=null&&(_=ie.replace(Al,"$&/")+"/"),S(X,R,_,"",function(Ca){return Ca})):X!=null&&(rt(X)&&(X=Mt(X,_+(X.key==null||o&&o.key===X.key?"":(""+X.key).replace(Al,"$&/")+"/")+ie)),R.push(X)),1;ie=0;var Ze=C===""?".":C+":";if(et(o))for(var be=0;be<o.length;be++)C=o[be],K=Ze+Ht(C,be),ie+=S(C,R,_,K,X);else if(be=Qe(o),typeof be=="function")for(o=be.call(o),be=0;!(C=o.next()).done;)C=C.value,K=Ze+Ht(C,be++),ie+=S(C,R,_,K,X);else if(K==="object"){if(typeof o.then=="function")return S(Rt(o),R,_,C,X);throw R=String(o),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return ie}function b(o,R,_){if(o==null)return o;var C=[],X=0;return S(o,C,"","",function(K){return R.call(_,K,X++)}),C}function G(o){if(o._status===-1){var R=o._result;R=R(),R.then(function(_){(o._status===0||o._status===-1)&&(o._status=1,o._result=_)},function(_){(o._status===0||o._status===-1)&&(o._status=2,o._result=_)}),o._status===-1&&(o._status=0,o._result=R)}if(o._status===1)return o._result.default;throw o._result}var fe=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},Ee={map:b,forEach:function(o,R,_){b(o,function(){R.apply(this,arguments)},_)},count:function(o){var R=0;return b(o,function(){R++}),R},toArray:function(o){return b(o,function(R){return R})||[]},only:function(o){if(!rt(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return Q.Activity=x,Q.Children=Ee,Q.Component=F,Q.Fragment=V,Q.Profiler=U,Q.PureComponent=Oe,Q.StrictMode=E,Q.Suspense=L,Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,Q.__COMPILER_RUNTIME={__proto__:null,c:function(o){return Y.H.useMemoCache(o)}},Q.cache=function(o){return function(){return o.apply(null,arguments)}},Q.cacheSignal=function(){return null},Q.cloneElement=function(o,R,_){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var C=D({},o.props),X=o.key;if(R!=null)for(K in R.key!==void 0&&(X=""+R.key),R)!Ae.call(R,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&R.ref===void 0||(C[K]=R[K]);var K=arguments.length-2;if(K===1)C.children=_;else if(1<K){for(var ie=Array(K),Ze=0;Ze<K;Ze++)ie[Ze]=arguments[Ze+2];C.children=ie}return he(o.type,X,C)},Q.createContext=function(o){return o={$$typeof:ne,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:J,_context:o},o},Q.createElement=function(o,R,_){var C,X={},K=null;if(R!=null)for(C in R.key!==void 0&&(K=""+R.key),R)Ae.call(R,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(X[C]=R[C]);var ie=arguments.length-2;if(ie===1)X.children=_;else if(1<ie){for(var Ze=Array(ie),be=0;be<ie;be++)Ze[be]=arguments[be+2];X.children=Ze}if(o&&o.defaultProps)for(C in ie=o.defaultProps,ie)X[C]===void 0&&(X[C]=ie[C]);return he(o,K,X)},Q.createRef=function(){return{current:null}},Q.forwardRef=function(o){return{$$typeof:Re,render:o}},Q.isValidElement=rt,Q.lazy=function(o){return{$$typeof:P,_payload:{_status:-1,_result:o},_init:G}},Q.memo=function(o,R){return{$$typeof:O,type:o,compare:R===void 0?null:R}},Q.startTransition=function(o){var R=Y.T,_={};Y.T=_;try{var C=o(),X=Y.S;X!==null&&X(_,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(ae,fe)}catch(K){fe(K)}finally{R!==null&&_.types!==null&&(R.types=_.types),Y.T=R}},Q.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},Q.use=function(o){return Y.H.use(o)},Q.useActionState=function(o,R,_){return Y.H.useActionState(o,R,_)},Q.useCallback=function(o,R){return Y.H.useCallback(o,R)},Q.useContext=function(o){return Y.H.useContext(o)},Q.useDebugValue=function(){},Q.useDeferredValue=function(o,R){return Y.H.useDeferredValue(o,R)},Q.useEffect=function(o,R){return Y.H.useEffect(o,R)},Q.useEffectEvent=function(o){return Y.H.useEffectEvent(o)},Q.useId=function(){return Y.H.useId()},Q.useImperativeHandle=function(o,R,_){return Y.H.useImperativeHandle(o,R,_)},Q.useInsertionEffect=function(o,R){return Y.H.useInsertionEffect(o,R)},Q.useLayoutEffect=function(o,R){return Y.H.useLayoutEffect(o,R)},Q.useMemo=function(o,R){return Y.H.useMemo(o,R)},Q.useOptimistic=function(o,R){return Y.H.useOptimistic(o,R)},Q.useReducer=function(o,R,_){return Y.H.useReducer(o,R,_)},Q.useRef=function(o){return Y.H.useRef(o)},Q.useState=function(o){return Y.H.useState(o)},Q.useSyncExternalStore=function(o,R,_){return Y.H.useSyncExternalStore(o,R,_)},Q.useTransition=function(){return Y.H.useTransition()},Q.version="19.2.4",Q}var Td;function Es(){return Td||(Td=1,fs.exports=l0()),fs.exports}var Nt=Es(),os={exports:{}},Ru={},rs={exports:{}},ds={};var Rd;function a0(){return Rd||(Rd=1,(function(A){function j(S,b){var G=S.length;S.push(b);e:for(;0<G;){var fe=G-1>>>1,Ee=S[fe];if(0<U(Ee,b))S[fe]=b,S[G]=Ee,G=fe;else break e}}function V(S){return S.length===0?null:S[0]}function E(S){if(S.length===0)return null;var b=S[0],G=S.pop();if(G!==b){S[0]=G;e:for(var fe=0,Ee=S.length,o=Ee>>>1;fe<o;){var R=2*(fe+1)-1,_=S[R],C=R+1,X=S[C];if(0>U(_,G))C<Ee&&0>U(X,_)?(S[fe]=X,S[C]=G,fe=C):(S[fe]=_,S[R]=G,fe=R);else if(C<Ee&&0>U(X,G))S[fe]=X,S[C]=G,fe=C;else break e}}return b}function U(S,b){var G=S.sortIndex-b.sortIndex;return G!==0?G:S.id-b.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;A.unstable_now=function(){return J.now()}}else{var ne=Date,Re=ne.now();A.unstable_now=function(){return ne.now()-Re}}var L=[],O=[],P=1,x=null,me=3,Qe=!1,Ve=!1,D=!1,B=!1,F=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,Oe=typeof setImmediate<"u"?setImmediate:null;function xe(S){for(var b=V(O);b!==null;){if(b.callback===null)E(O);else if(b.startTime<=S)E(O),b.sortIndex=b.expirationTime,j(L,b);else break;b=V(O)}}function et(S){if(D=!1,xe(S),!Ve)if(V(L)!==null)Ve=!0,ae||(ae=!0,Xe());else{var b=V(O);b!==null&&Rt(et,b.startTime-S)}}var ae=!1,Y=-1,Ae=5,he=-1;function Mt(){return B?!0:!(A.unstable_now()-he<Ae)}function rt(){if(B=!1,ae){var S=A.unstable_now();he=S;var b=!0;try{e:{Ve=!1,D&&(D=!1,z(Y),Y=-1),Qe=!0;var G=me;try{t:{for(xe(S),x=V(L);x!==null&&!(x.expirationTime>S&&Mt());){var fe=x.callback;if(typeof fe=="function"){x.callback=null,me=x.priorityLevel;var Ee=fe(x.expirationTime<=S);if(S=A.unstable_now(),typeof Ee=="function"){x.callback=Ee,xe(S),b=!0;break t}x===V(L)&&E(L),xe(S)}else E(L);x=V(L)}if(x!==null)b=!0;else{var o=V(O);o!==null&&Rt(et,o.startTime-S),b=!1}}break e}finally{x=null,me=G,Qe=!1}b=void 0}}finally{b?Xe():ae=!1}}}var Xe;if(typeof Oe=="function")Xe=function(){Oe(rt)};else if(typeof MessageChannel<"u"){var Al=new MessageChannel,Ht=Al.port2;Al.port1.onmessage=rt,Xe=function(){Ht.postMessage(null)}}else Xe=function(){F(rt,0)};function Rt(S,b){Y=F(function(){S(A.unstable_now())},b)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(S){S.callback=null},A.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<S?Math.floor(1e3/S):5},A.unstable_getCurrentPriorityLevel=function(){return me},A.unstable_next=function(S){switch(me){case 1:case 2:case 3:var b=3;break;default:b=me}var G=me;me=b;try{return S()}finally{me=G}},A.unstable_requestPaint=function(){B=!0},A.unstable_runWithPriority=function(S,b){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var G=me;me=S;try{return b()}finally{me=G}},A.unstable_scheduleCallback=function(S,b,G){var fe=A.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?fe+G:fe):G=fe,S){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=G+Ee,S={id:P++,callback:b,priorityLevel:S,startTime:G,expirationTime:Ee,sortIndex:-1},G>fe?(S.sortIndex=G,j(O,S),V(L)===null&&S===V(O)&&(D?(z(Y),Y=-1):D=!0,Rt(et,G-fe))):(S.sortIndex=Ee,j(L,S),Ve||Qe||(Ve=!0,ae||(ae=!0,Xe()))),S},A.unstable_shouldYield=Mt,A.unstable_wrapCallback=function(S){var b=me;return function(){var G=me;me=b;try{return S.apply(this,arguments)}finally{me=G}}}})(ds)),ds}var Od;function u0(){return Od||(Od=1,rs.exports=a0()),rs.exports}var ms={exports:{}},we={};var Ad;function n0(){if(Ad)return we;Ad=1;var A=Es();function j(L){var O="https://react.dev/errors/"+L;if(1<arguments.length){O+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)O+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+L+"; visit "+O+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function V(){}var E={d:{f:V,r:function(){throw Error(j(522))},D:V,C:V,L:V,m:V,X:V,S:V,M:V},p:0,findDOMNode:null},U=Symbol.for("react.portal");function J(L,O,P){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:x==null?null:""+x,children:L,containerInfo:O,implementation:P}}var ne=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Re(L,O){if(L==="font")return"";if(typeof O=="string")return O==="use-credentials"?O:""}return we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,we.createPortal=function(L,O){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!O||O.nodeType!==1&&O.nodeType!==9&&O.nodeType!==11)throw Error(j(299));return J(L,O,null,P)},we.flushSync=function(L){var O=ne.T,P=E.p;try{if(ne.T=null,E.p=2,L)return L()}finally{ne.T=O,E.p=P,E.d.f()}},we.preconnect=function(L,O){typeof L=="string"&&(O?(O=O.crossOrigin,O=typeof O=="string"?O==="use-credentials"?O:"":void 0):O=null,E.d.C(L,O))},we.prefetchDNS=function(L){typeof L=="string"&&E.d.D(L)},we.preinit=function(L,O){if(typeof L=="string"&&O&&typeof O.as=="string"){var P=O.as,x=Re(P,O.crossOrigin),me=typeof O.integrity=="string"?O.integrity:void 0,Qe=typeof O.fetchPriority=="string"?O.fetchPriority:void 0;P==="style"?E.d.S(L,typeof O.precedence=="string"?O.precedence:void 0,{crossOrigin:x,integrity:me,fetchPriority:Qe}):P==="script"&&E.d.X(L,{crossOrigin:x,integrity:me,fetchPriority:Qe,nonce:typeof O.nonce=="string"?O.nonce:void 0})}},we.preinitModule=function(L,O){if(typeof L=="string")if(typeof O=="object"&&O!==null){if(O.as==null||O.as==="script"){var P=Re(O.as,O.crossOrigin);E.d.M(L,{crossOrigin:P,integrity:typeof O.integrity=="string"?O.integrity:void 0,nonce:typeof O.nonce=="string"?O.nonce:void 0})}}else O==null&&E.d.M(L)},we.preload=function(L,O){if(typeof L=="string"&&typeof O=="object"&&O!==null&&typeof O.as=="string"){var P=O.as,x=Re(P,O.crossOrigin);E.d.L(L,P,{crossOrigin:x,integrity:typeof O.integrity=="string"?O.integrity:void 0,nonce:typeof O.nonce=="string"?O.nonce:void 0,type:typeof O.type=="string"?O.type:void 0,fetchPriority:typeof O.fetchPriority=="string"?O.fetchPriority:void 0,referrerPolicy:typeof O.referrerPolicy=="string"?O.referrerPolicy:void 0,imageSrcSet:typeof O.imageSrcSet=="string"?O.imageSrcSet:void 0,imageSizes:typeof O.imageSizes=="string"?O.imageSizes:void 0,media:typeof O.media=="string"?O.media:void 0})}},we.preloadModule=function(L,O){if(typeof L=="string")if(O){var P=Re(O.as,O.crossOrigin);E.d.m(L,{as:typeof O.as=="string"&&O.as!=="script"?O.as:void 0,crossOrigin:P,integrity:typeof O.integrity=="string"?O.integrity:void 0})}else E.d.m(L)},we.requestFormReset=function(L){E.d.r(L)},we.unstable_batchedUpdates=function(L,O){return L(O)},we.useFormState=function(L,O,P){return ne.H.useFormState(L,O,P)},we.useFormStatus=function(){return ne.H.useHostTransitionStatus()},we.version="19.2.4",we}var bd;function i0(){if(bd)return ms.exports;bd=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(j){console.error(j)}}return A(),ms.exports=n0(),ms.exports}var _d;function c0(){if(_d)return Ru;_d=1;var A=u0(),j=Es(),V=i0();function E(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function J(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function ne(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Re(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L(e){if(J(e)!==e)throw Error(E(188))}function O(e){var t=e.alternate;if(!t){if(t=J(e),t===null)throw Error(E(188));return t!==e?null:e}for(var l=e,a=t;;){var u=l.return;if(u===null)break;var n=u.alternate;if(n===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===l)return L(u),e;if(n===a)return L(u),t;n=n.sibling}throw Error(E(188))}if(l.return!==a.return)l=u,a=n;else{for(var i=!1,c=u.child;c;){if(c===l){i=!0,l=u,a=n;break}if(c===a){i=!0,a=u,l=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===l){i=!0,l=n,a=u;break}if(c===a){i=!0,a=n,l=u;break}c=c.sibling}if(!i)throw Error(E(189))}}if(l.alternate!==a)throw Error(E(190))}if(l.tag!==3)throw Error(E(188));return l.stateNode.current===l?e:t}function P(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=P(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,me=Symbol.for("react.element"),Qe=Symbol.for("react.transitional.element"),Ve=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),Oe=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),Mt=Symbol.for("react.memo_cache_sentinel"),rt=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=rt&&e[rt]||e["@@iterator"],typeof e=="function"?e:null)}var Al=Symbol.for("react.client.reference");function Ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Al?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case F:return"Profiler";case B:return"StrictMode";case et:return"Suspense";case ae:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ve:return"Portal";case Oe:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:Ht(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return Ht(e(t))}catch{}}return null}var Rt=Array.isArray,S=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=V.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},fe=[],Ee=-1;function o(e){return{current:e}}function R(e){0>Ee||(e.current=fe[Ee],fe[Ee]=null,Ee--)}function _(e,t){Ee++,fe[Ee]=e.current,e.current=t}var C=o(null),X=o(null),K=o(null),ie=o(null);function Ze(e,t){switch(_(K,t),_(X,e),_(C,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Qr(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Qr(t),e=Vr(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}R(C),_(C,e)}function be(){R(C),R(X),R(K)}function Ca(e){e.memoizedState!==null&&_(ie,e);var t=C.current,l=Vr(t,e.type);t!==l&&(_(X,e),_(C,l))}function Au(e){X.current===e&&(R(C),R(X)),ie.current===e&&(R(ie),gu._currentValue=G)}var wn,ys;function bl(e){if(wn===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);wn=t&&t[1]||"",ys=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wn+e+ys}var Zn=!1;function Jn(e,t){if(!e||Zn)return"";Zn=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(h){var y=h}Reflect.construct(e,[],T)}else{try{T.call()}catch(h){y=h}e.call(T.prototype)}}else{try{throw Error()}catch(h){y=h}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(h){if(h&&y&&typeof h.stack=="string")return[h.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var s=i.split(`
`),m=c.split(`
`);for(u=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;u<m.length&&!m[u].includes("DetermineComponentFrameRoot");)u++;if(a===s.length||u===m.length)for(a=s.length-1,u=m.length-1;1<=a&&0<=u&&s[a]!==m[u];)u--;for(;1<=a&&0<=u;a--,u--)if(s[a]!==m[u]){if(a!==1||u!==1)do if(a--,u--,0>u||s[a]!==m[u]){var g=`
`+s[a].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=a&&0<=u);break}}}finally{Zn=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?bl(l):""}function Dd(e,t){switch(e.tag){case 26:case 27:case 5:return bl(e.type);case 16:return bl("Lazy");case 13:return e.child!==t&&t!==null?bl("Suspense Fallback"):bl("Suspense");case 19:return bl("SuspenseList");case 0:case 15:return Jn(e.type,!1);case 11:return Jn(e.type.render,!1);case 1:return Jn(e.type,!0);case 31:return bl("Activity");default:return""}}function hs(e){try{var t="",l=null;do t+=Dd(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Fn=Object.prototype.hasOwnProperty,Kn=A.unstable_scheduleCallback,Wn=A.unstable_cancelCallback,Ud=A.unstable_shouldYield,zd=A.unstable_requestPaint,tt=A.unstable_now,Hd=A.unstable_getCurrentPriorityLevel,gs=A.unstable_ImmediatePriority,Ss=A.unstable_UserBlockingPriority,bu=A.unstable_NormalPriority,xd=A.unstable_LowPriority,vs=A.unstable_IdlePriority,Bd=A.log,qd=A.unstable_setDisableYieldValue,Ma=null,lt=null;function Pt(e){if(typeof Bd=="function"&&qd(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(Ma,e)}catch{}}var at=Math.clz32?Math.clz32:jd,Yd=Math.log,Gd=Math.LN2;function jd(e){return e>>>=0,e===0?32:31-(Yd(e)/Gd|0)|0}var _u=256,Nu=262144,Cu=4194304;function _l(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mu(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var u=0,n=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?u=_l(a):(i&=c,i!==0?u=_l(i):l||(l=c&~e,l!==0&&(u=_l(l))))):(c=a&~n,c!==0?u=_l(c):i!==0?u=_l(i):l||(l=a&~e,l!==0&&(u=_l(l)))),u===0?0:t!==0&&t!==u&&(t&n)===0&&(n=u&-u,l=t&-t,n>=l||n===32&&(l&4194048)!==0)?t:u}function La(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ps(){var e=Cu;return Cu<<=1,(Cu&62914560)===0&&(Cu=4194304),e}function In(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Da(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vd(e,t,l,a,u,n){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,s=e.expirationTimes,m=e.hiddenUpdates;for(l=i&~l;0<l;){var g=31-at(l),T=1<<g;c[g]=0,s[g]=-1;var y=m[g];if(y!==null)for(m[g]=null,g=0;g<y.length;g++){var h=y[g];h!==null&&(h.lane&=-536870913)}l&=~T}a!==0&&Ts(e,a,0),n!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=n&~(i&~t))}function Ts(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-at(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Rs(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-at(l),u=1<<a;u&t|e[a]&t&&(e[a]|=t),l&=~u}}function Os(e,t){var l=t&-t;return l=(l&42)!==0?1:kn(l),(l&(e.suspendedLanes|t))!==0?0:l}function kn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $n(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function As(){var e=b.p;return e!==0?e:(e=window.event,e===void 0?32:rd(e.type))}function bs(e,t){var l=b.p;try{return b.p=e,t()}finally{b.p=l}}var el=Math.random().toString(36).slice(2),Be="__reactFiber$"+el,Fe="__reactProps$"+el,wl="__reactContainer$"+el,Pn="__reactEvents$"+el,Xd="__reactListeners$"+el,wd="__reactHandles$"+el,_s="__reactResources$"+el,Ua="__reactMarker$"+el;function ei(e){delete e[Be],delete e[Fe],delete e[Pn],delete e[Xd],delete e[wd]}function Zl(e){var t=e[Be];if(t)return t;for(var l=e.parentNode;l;){if(t=l[wl]||l[Be]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Wr(e);e!==null;){if(l=e[Be])return l;e=Wr(e)}return t}e=l,l=e.parentNode}return null}function Jl(e){if(e=e[Be]||e[wl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function za(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(E(33))}function Fl(e){var t=e[_s];return t||(t=e[_s]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ze(e){e[Ua]=!0}var Ns=new Set,Cs={};function Nl(e,t){Kl(e,t),Kl(e+"Capture",t)}function Kl(e,t){for(Cs[e]=t,e=0;e<t.length;e++)Ns.add(t[e])}var Zd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ms={},Ls={};function Jd(e){return Fn.call(Ls,e)?!0:Fn.call(Ms,e)?!1:Zd.test(e)?Ls[e]=!0:(Ms[e]=!0,!1)}function Lu(e,t,l){if(Jd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Du(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function xt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ds(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fd(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,n=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(i){l=""+i,n.call(this,i)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ti(e){if(!e._valueTracker){var t=Ds(e)?"checked":"value";e._valueTracker=Fd(e,t,""+e[t])}}function Us(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Ds(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Uu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kd=/[\n"\\]/g;function mt(e){return e.replace(Kd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function li(e,t,l,a,u,n,i,c){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?ai(e,i,dt(t)):l!=null?ai(e,i,dt(l)):a!=null&&e.removeAttribute("value"),u==null&&n!=null&&(e.defaultChecked=!!n),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+dt(c):e.removeAttribute("name")}function zs(e,t,l,a,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||l!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){ti(e);return}l=l!=null?""+dt(l):"",t=t!=null?""+dt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),ti(e)}function ai(e,t,l){t==="number"&&Uu(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Wl(e,t,l,a){if(e=e.options,t){t={};for(var u=0;u<l.length;u++)t["$"+l[u]]=!0;for(l=0;l<e.length;l++)u=t.hasOwnProperty("$"+e[l].value),e[l].selected!==u&&(e[l].selected=u),u&&a&&(e[l].defaultSelected=!0)}else{for(l=""+dt(l),t=null,u=0;u<e.length;u++){if(e[u].value===l){e[u].selected=!0,a&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Hs(e,t,l){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+dt(l):""}function xs(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(E(92));if(Rt(a)){if(1<a.length)throw Error(E(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=dt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),ti(e)}function Il(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Wd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bs(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Wd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function qs(e,t,l){if(t!=null&&typeof t!="object")throw Error(E(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var u in t)a=t[u],t.hasOwnProperty(u)&&l[u]!==a&&Bs(e,u,a)}else for(var n in t)t.hasOwnProperty(n)&&Bs(e,n,t[n])}function ui(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Id=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zu(e){return kd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bt(){}var ni=null;function ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kl=null,$l=null;function Ys(e){var t=Jl(e);if(t&&(e=t.stateNode)){var l=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(li(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var u=a[Fe]||null;if(!u)throw Error(E(90));li(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Us(a)}break e;case"textarea":Hs(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Wl(e,!!l.multiple,t,!1)}}}var ci=!1;function Gs(e,t,l){if(ci)return e(t,l);ci=!0;try{var a=e(t);return a}finally{if(ci=!1,(kl!==null||$l!==null)&&(Tn(),kl&&(t=kl,e=$l,$l=kl=null,Ys(t),e)))for(t=0;t<e.length;t++)Ys(e[t])}}function Ha(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Fe]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(E(231,t,typeof l));return l}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=!1;if(qt)try{var xa={};Object.defineProperty(xa,"passive",{get:function(){si=!0}}),window.addEventListener("test",xa,xa),window.removeEventListener("test",xa,xa)}catch{si=!1}var tl=null,fi=null,Hu=null;function js(){if(Hu)return Hu;var e,t=fi,l=t.length,a,u="value"in tl?tl.value:tl.textContent,n=u.length;for(e=0;e<l&&t[e]===u[e];e++);var i=l-e;for(a=1;a<=i&&t[l-a]===u[n-a];a++);return Hu=u.slice(e,1<a?1-a:void 0)}function xu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bu(){return!0}function Qs(){return!1}function Ke(e){function t(l,a,u,n,i){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Bu:Qs,this.isPropagationStopped=Qs,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Bu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Bu)},persist:function(){},isPersistent:Bu}),t}var Cl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qu=Ke(Cl),Ba=x({},Cl,{view:0,detail:0}),$d=Ke(Ba),oi,ri,qa,Yu=x({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qa&&(qa&&e.type==="mousemove"?(oi=e.screenX-qa.screenX,ri=e.screenY-qa.screenY):ri=oi=0,qa=e),oi)},movementY:function(e){return"movementY"in e?e.movementY:ri}}),Vs=Ke(Yu),Pd=x({},Yu,{dataTransfer:0}),em=Ke(Pd),tm=x({},Ba,{relatedTarget:0}),di=Ke(tm),lm=x({},Cl,{animationName:0,elapsedTime:0,pseudoElement:0}),am=Ke(lm),um=x({},Cl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nm=Ke(um),im=x({},Cl,{data:0}),Xs=Ke(im),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function om(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fm[e])?!!t[e]:!1}function mi(){return om}var rm=x({},Ba,{key:function(e){if(e.key){var t=cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(e){return e.type==="keypress"?xu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dm=Ke(rm),mm=x({},Yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ws=Ke(mm),Em=x({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),ym=Ke(Em),hm=x({},Cl,{propertyName:0,elapsedTime:0,pseudoElement:0}),gm=Ke(hm),Sm=x({},Yu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vm=Ke(Sm),pm=x({},Cl,{newState:0,oldState:0}),Tm=Ke(pm),Rm=[9,13,27,32],Ei=qt&&"CompositionEvent"in window,Ya=null;qt&&"documentMode"in document&&(Ya=document.documentMode);var Om=qt&&"TextEvent"in window&&!Ya,Zs=qt&&(!Ei||Ya&&8<Ya&&11>=Ya),Js=" ",Fs=!1;function Ks(e,t){switch(e){case"keyup":return Rm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pl=!1;function Am(e,t){switch(e){case"compositionend":return Ws(t);case"keypress":return t.which!==32?null:(Fs=!0,Js);case"textInput":return e=t.data,e===Js&&Fs?null:e;default:return null}}function bm(e,t){if(Pl)return e==="compositionend"||!Ei&&Ks(e,t)?(e=js(),Hu=fi=tl=null,Pl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zs&&t.locale!=="ko"?null:t.data;default:return null}}var _m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_m[e.type]:t==="textarea"}function ks(e,t,l,a){kl?$l?$l.push(a):$l=[a]:kl=a,t=Cn(t,"onChange"),0<t.length&&(l=new qu("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ga=null,ja=null;function Nm(e){xr(e,0)}function Gu(e){var t=za(e);if(Us(t))return e}function $s(e,t){if(e==="change")return t}var Ps=!1;if(qt){var yi;if(qt){var hi="oninput"in document;if(!hi){var ef=document.createElement("div");ef.setAttribute("oninput","return;"),hi=typeof ef.oninput=="function"}yi=hi}else yi=!1;Ps=yi&&(!document.documentMode||9<document.documentMode)}function tf(){Ga&&(Ga.detachEvent("onpropertychange",lf),ja=Ga=null)}function lf(e){if(e.propertyName==="value"&&Gu(ja)){var t=[];ks(t,ja,e,ii(e)),Gs(Nm,t)}}function Cm(e,t,l){e==="focusin"?(tf(),Ga=t,ja=l,Ga.attachEvent("onpropertychange",lf)):e==="focusout"&&tf()}function Mm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gu(ja)}function Lm(e,t){if(e==="click")return Gu(t)}function Dm(e,t){if(e==="input"||e==="change")return Gu(t)}function Um(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Um;function Qa(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!Fn.call(t,u)||!ut(e[u],t[u]))return!1}return!0}function af(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uf(e,t){var l=af(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=af(l)}}function nf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Uu(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Uu(e.document)}return t}function gi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zm=qt&&"documentMode"in document&&11>=document.documentMode,ea=null,Si=null,Va=null,vi=!1;function sf(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;vi||ea==null||ea!==Uu(a)||(a=ea,"selectionStart"in a&&gi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Va&&Qa(Va,a)||(Va=a,a=Cn(Si,"onSelect"),0<a.length&&(t=new qu("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ea)))}function Ml(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ta={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionrun:Ml("Transition","TransitionRun"),transitionstart:Ml("Transition","TransitionStart"),transitioncancel:Ml("Transition","TransitionCancel"),transitionend:Ml("Transition","TransitionEnd")},pi={},ff={};qt&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function Ll(e){if(pi[e])return pi[e];if(!ta[e])return e;var t=ta[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in ff)return pi[e]=t[l];return e}var of=Ll("animationend"),rf=Ll("animationiteration"),df=Ll("animationstart"),Hm=Ll("transitionrun"),xm=Ll("transitionstart"),Bm=Ll("transitioncancel"),mf=Ll("transitionend"),Ef=new Map,Ti="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ti.push("scrollEnd");function Ot(e,t){Ef.set(e,t),Nl(t,[e])}var ju=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],la=0,Ri=0;function Qu(){for(var e=la,t=Ri=la=0;t<e;){var l=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var u=Et[t];Et[t++]=null;var n=Et[t];if(Et[t++]=null,a!==null&&u!==null){var i=a.pending;i===null?u.next=u:(u.next=i.next,i.next=u),a.pending=u}n!==0&&yf(l,u,n)}}function Vu(e,t,l,a){Et[la++]=e,Et[la++]=t,Et[la++]=l,Et[la++]=a,Ri|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Oi(e,t,l,a){return Vu(e,t,l,a),Xu(e)}function Dl(e,t){return Vu(e,null,null,t),Xu(e)}function yf(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var u=!1,n=e.return;n!==null;)n.childLanes|=l,a=n.alternate,a!==null&&(a.childLanes|=l),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(u=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,u&&t!==null&&(u=31-at(l),e=n.hiddenUpdates,a=e[u],a===null?e[u]=[t]:a.push(t),t.lane=l|536870912),n):null}function Xu(e){if(50<ou)throw ou=0,Uc=null,Error(E(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var aa={};function qm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,l,a){return new qm(e,t,l,a)}function Ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,t){var l=e.alternate;return l===null?(l=nt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function hf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wu(e,t,l,a,u,n){var i=0;if(a=e,typeof e=="function")Ai(e)&&(i=1);else if(typeof e=="string")i=VE(e,l,C.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=nt(31,l,t,u),e.elementType=he,e.lanes=n,e;case D:return Ul(l.children,u,n,t);case B:i=8,u|=24;break;case F:return e=nt(12,l,t,u|2),e.elementType=F,e.lanes=n,e;case et:return e=nt(13,l,t,u),e.elementType=et,e.lanes=n,e;case ae:return e=nt(19,l,t,u),e.elementType=ae,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oe:i=10;break e;case z:i=9;break e;case xe:i=11;break e;case Y:i=14;break e;case Ae:i=16,a=null;break e}i=29,l=Error(E(130,e===null?"null":typeof e,"")),a=null}return t=nt(i,l,t,u),t.elementType=e,t.type=a,t.lanes=n,t}function Ul(e,t,l,a){return e=nt(7,e,a,t),e.lanes=l,e}function bi(e,t,l){return e=nt(6,e,null,t),e.lanes=l,e}function gf(e){var t=nt(18,null,null,0);return t.stateNode=e,t}function _i(e,t,l){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Sf=new WeakMap;function yt(e,t){if(typeof e=="object"&&e!==null){var l=Sf.get(e);return l!==void 0?l:(t={value:e,source:t,stack:hs(t)},Sf.set(e,t),t)}return{value:e,source:t,stack:hs(t)}}var ua=[],na=0,Zu=null,Xa=0,ht=[],gt=0,ll=null,Lt=1,Dt="";function Gt(e,t){ua[na++]=Xa,ua[na++]=Zu,Zu=e,Xa=t}function vf(e,t,l){ht[gt++]=Lt,ht[gt++]=Dt,ht[gt++]=ll,ll=e;var a=Lt;e=Dt;var u=32-at(a)-1;a&=~(1<<u),l+=1;var n=32-at(t)+u;if(30<n){var i=u-u%5;n=(a&(1<<i)-1).toString(32),a>>=i,u-=i,Lt=1<<32-at(t)+u|l<<u|a,Dt=n+e}else Lt=1<<n|l<<u|a,Dt=e}function Ni(e){e.return!==null&&(Gt(e,1),vf(e,1,0))}function Ci(e){for(;e===Zu;)Zu=ua[--na],ua[na]=null,Xa=ua[--na],ua[na]=null;for(;e===ll;)ll=ht[--gt],ht[gt]=null,Dt=ht[--gt],ht[gt]=null,Lt=ht[--gt],ht[gt]=null}function pf(e,t){ht[gt++]=Lt,ht[gt++]=Dt,ht[gt++]=ll,Lt=t.id,Dt=t.overflow,ll=e}var qe=null,ge=null,ee=!1,al=null,St=!1,Mi=Error(E(519));function ul(e){var t=Error(E(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wa(yt(t,e)),Mi}function Tf(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Be]=e,t[Fe]=a,l){case"dialog":I("cancel",t),I("close",t);break;case"iframe":case"object":case"embed":I("load",t);break;case"video":case"audio":for(l=0;l<du.length;l++)I(du[l],t);break;case"source":I("error",t);break;case"img":case"image":case"link":I("error",t),I("load",t);break;case"details":I("toggle",t);break;case"input":I("invalid",t),zs(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":I("invalid",t);break;case"textarea":I("invalid",t),xs(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Gr(t.textContent,l)?(a.popover!=null&&(I("beforetoggle",t),I("toggle",t)),a.onScroll!=null&&I("scroll",t),a.onScrollEnd!=null&&I("scrollend",t),a.onClick!=null&&(t.onclick=Bt),t=!0):t=!1,t||ul(e,!0)}function Rf(e){for(qe=e.return;qe;)switch(qe.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:qe=qe.return}}function ia(e){if(e!==qe)return!1;if(!ee)return Rf(e),ee=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Fc(e.type,e.memoizedProps)),l=!l),l&&ge&&ul(e),Rf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));ge=Kr(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));ge=Kr(e)}else t===27?(t=ge,Sl(e.type)?(e=$c,$c=null,ge=e):ge=t):ge=qe?pt(e.stateNode.nextSibling):null;return!0}function zl(){ge=qe=null,ee=!1}function Li(){var e=al;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),al=null),e}function wa(e){al===null?al=[e]:al.push(e)}var Di=o(null),Hl=null,jt=null;function nl(e,t,l){_(Di,t._currentValue),t._currentValue=l}function Qt(e){e._currentValue=Di.current,R(Di)}function Ui(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function zi(e,t,l,a){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;e:for(;n!==null;){var c=n;n=u;for(var s=0;s<t.length;s++)if(c.context===t[s]){n.lanes|=l,c=n.alternate,c!==null&&(c.lanes|=l),Ui(n.return,l,e),a||(i=null);break e}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(E(341));i.lanes|=l,n=i.alternate,n!==null&&(n.lanes|=l),Ui(i,l,e),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===e){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function ca(e,t,l,a){e=null;for(var u=t,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(E(387));if(i=i.memoizedProps,i!==null){var c=u.type;ut(u.pendingProps.value,i.value)||(e!==null?e.push(c):e=[c])}}else if(u===ie.current){if(i=u.alternate,i===null)throw Error(E(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(gu):e=[gu])}u=u.return}e!==null&&zi(t,e,l,a),t.flags|=262144}function Ju(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xl(e){Hl=e,jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ye(e){return Of(Hl,e)}function Fu(e,t){return Hl===null&&xl(e),Of(e,t)}function Of(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},jt===null){if(e===null)throw Error(E(308));jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else jt=jt.next=t;return l}var Ym=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Gm=A.unstable_scheduleCallback,jm=A.unstable_NormalPriority,Ce={$$typeof:Oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hi(){return{controller:new Ym,data:new Map,refCount:0}}function Za(e){e.refCount--,e.refCount===0&&Gm(jm,function(){e.controller.abort()})}var Ja=null,xi=0,sa=0,fa=null;function Qm(e,t){if(Ja===null){var l=Ja=[];xi=0,sa=Yc(),fa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return xi++,t.then(Af,Af),t}function Af(){if(--xi===0&&Ja!==null){fa!==null&&(fa.status="fulfilled");var e=Ja;Ja=null,sa=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Vm(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var u=0;u<l.length;u++)(0,l[u])(t)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var bf=S.S;S.S=function(e,t){fr=tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qm(e,t),bf!==null&&bf(e,t)};var Bl=o(null);function Bi(){var e=Bl.current;return e!==null?e:ye.pooledCache}function Ku(e,t){t===null?_(Bl,Bl.current):_(Bl,t.pool)}function _f(){var e=Bi();return e===null?null:{parent:Ce._currentValue,pool:e}}var oa=Error(E(460)),qi=Error(E(474)),Wu=Error(E(542)),Iu={then:function(){}};function Nf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cf(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Bt,Bt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Lf(e),e;default:if(typeof t.status=="string")t.then(Bt,Bt);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(E(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=a}},function(a){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Lf(e),e}throw Yl=t,oa}}function ql(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Yl=l,oa):l}}var Yl=null;function Mf(){if(Yl===null)throw Error(E(459));var e=Yl;return Yl=null,e}function Lf(e){if(e===oa||e===Wu)throw Error(E(483))}var ra=null,Fa=0;function ku(e){var t=Fa;return Fa+=1,ra===null&&(ra=[]),Cf(ra,e,t)}function Ka(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $u(e,t){throw t.$$typeof===me?Error(E(525)):(e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Df(e){function t(r,f){if(e){var d=r.deletions;d===null?(r.deletions=[f],r.flags|=16):d.push(f)}}function l(r,f){if(!e)return null;for(;f!==null;)t(r,f),f=f.sibling;return null}function a(r){for(var f=new Map;r!==null;)r.key!==null?f.set(r.key,r):f.set(r.index,r),r=r.sibling;return f}function u(r,f){return r=Yt(r,f),r.index=0,r.sibling=null,r}function n(r,f,d){return r.index=d,e?(d=r.alternate,d!==null?(d=d.index,d<f?(r.flags|=67108866,f):d):(r.flags|=67108866,f)):(r.flags|=1048576,f)}function i(r){return e&&r.alternate===null&&(r.flags|=67108866),r}function c(r,f,d,v){return f===null||f.tag!==6?(f=bi(d,r.mode,v),f.return=r,f):(f=u(f,d),f.return=r,f)}function s(r,f,d,v){var H=d.type;return H===D?g(r,f,d.props.children,v,d.key):f!==null&&(f.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ae&&ql(H)===f.type)?(f=u(f,d.props),Ka(f,d),f.return=r,f):(f=wu(d.type,d.key,d.props,null,r.mode,v),Ka(f,d),f.return=r,f)}function m(r,f,d,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==d.containerInfo||f.stateNode.implementation!==d.implementation?(f=_i(d,r.mode,v),f.return=r,f):(f=u(f,d.children||[]),f.return=r,f)}function g(r,f,d,v,H){return f===null||f.tag!==7?(f=Ul(d,r.mode,v,H),f.return=r,f):(f=u(f,d),f.return=r,f)}function T(r,f,d){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=bi(""+f,r.mode,d),f.return=r,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qe:return d=wu(f.type,f.key,f.props,null,r.mode,d),Ka(d,f),d.return=r,d;case Ve:return f=_i(f,r.mode,d),f.return=r,f;case Ae:return f=ql(f),T(r,f,d)}if(Rt(f)||Xe(f))return f=Ul(f,r.mode,d,null),f.return=r,f;if(typeof f.then=="function")return T(r,ku(f),d);if(f.$$typeof===Oe)return T(r,Fu(r,f),d);$u(r,f)}return null}function y(r,f,d,v){var H=f!==null?f.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return H!==null?null:c(r,f,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qe:return d.key===H?s(r,f,d,v):null;case Ve:return d.key===H?m(r,f,d,v):null;case Ae:return d=ql(d),y(r,f,d,v)}if(Rt(d)||Xe(d))return H!==null?null:g(r,f,d,v,null);if(typeof d.then=="function")return y(r,f,ku(d),v);if(d.$$typeof===Oe)return y(r,f,Fu(r,d),v);$u(r,d)}return null}function h(r,f,d,v,H){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return r=r.get(d)||null,c(f,r,""+v,H);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qe:return r=r.get(v.key===null?d:v.key)||null,s(f,r,v,H);case Ve:return r=r.get(v.key===null?d:v.key)||null,m(f,r,v,H);case Ae:return v=ql(v),h(r,f,d,v,H)}if(Rt(v)||Xe(v))return r=r.get(d)||null,g(f,r,v,H,null);if(typeof v.then=="function")return h(r,f,d,ku(v),H);if(v.$$typeof===Oe)return h(r,f,d,Fu(f,v),H);$u(f,v)}return null}function N(r,f,d,v){for(var H=null,te=null,M=f,Z=f=0,$=null;M!==null&&Z<d.length;Z++){M.index>Z?($=M,M=null):$=M.sibling;var le=y(r,M,d[Z],v);if(le===null){M===null&&(M=$);break}e&&M&&le.alternate===null&&t(r,M),f=n(le,f,Z),te===null?H=le:te.sibling=le,te=le,M=$}if(Z===d.length)return l(r,M),ee&&Gt(r,Z),H;if(M===null){for(;Z<d.length;Z++)M=T(r,d[Z],v),M!==null&&(f=n(M,f,Z),te===null?H=M:te.sibling=M,te=M);return ee&&Gt(r,Z),H}for(M=a(M);Z<d.length;Z++)$=h(M,r,Z,d[Z],v),$!==null&&(e&&$.alternate!==null&&M.delete($.key===null?Z:$.key),f=n($,f,Z),te===null?H=$:te.sibling=$,te=$);return e&&M.forEach(function(Ol){return t(r,Ol)}),ee&&Gt(r,Z),H}function q(r,f,d,v){if(d==null)throw Error(E(151));for(var H=null,te=null,M=f,Z=f=0,$=null,le=d.next();M!==null&&!le.done;Z++,le=d.next()){M.index>Z?($=M,M=null):$=M.sibling;var Ol=y(r,M,le.value,v);if(Ol===null){M===null&&(M=$);break}e&&M&&Ol.alternate===null&&t(r,M),f=n(Ol,f,Z),te===null?H=Ol:te.sibling=Ol,te=Ol,M=$}if(le.done)return l(r,M),ee&&Gt(r,Z),H;if(M===null){for(;!le.done;Z++,le=d.next())le=T(r,le.value,v),le!==null&&(f=n(le,f,Z),te===null?H=le:te.sibling=le,te=le);return ee&&Gt(r,Z),H}for(M=a(M);!le.done;Z++,le=d.next())le=h(M,r,Z,le.value,v),le!==null&&(e&&le.alternate!==null&&M.delete(le.key===null?Z:le.key),f=n(le,f,Z),te===null?H=le:te.sibling=le,te=le);return e&&M.forEach(function(PE){return t(r,PE)}),ee&&Gt(r,Z),H}function de(r,f,d,v){if(typeof d=="object"&&d!==null&&d.type===D&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Qe:e:{for(var H=d.key;f!==null;){if(f.key===H){if(H=d.type,H===D){if(f.tag===7){l(r,f.sibling),v=u(f,d.props.children),v.return=r,r=v;break e}}else if(f.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ae&&ql(H)===f.type){l(r,f.sibling),v=u(f,d.props),Ka(v,d),v.return=r,r=v;break e}l(r,f);break}else t(r,f);f=f.sibling}d.type===D?(v=Ul(d.props.children,r.mode,v,d.key),v.return=r,r=v):(v=wu(d.type,d.key,d.props,null,r.mode,v),Ka(v,d),v.return=r,r=v)}return i(r);case Ve:e:{for(H=d.key;f!==null;){if(f.key===H)if(f.tag===4&&f.stateNode.containerInfo===d.containerInfo&&f.stateNode.implementation===d.implementation){l(r,f.sibling),v=u(f,d.children||[]),v.return=r,r=v;break e}else{l(r,f);break}else t(r,f);f=f.sibling}v=_i(d,r.mode,v),v.return=r,r=v}return i(r);case Ae:return d=ql(d),de(r,f,d,v)}if(Rt(d))return N(r,f,d,v);if(Xe(d)){if(H=Xe(d),typeof H!="function")throw Error(E(150));return d=H.call(d),q(r,f,d,v)}if(typeof d.then=="function")return de(r,f,ku(d),v);if(d.$$typeof===Oe)return de(r,f,Fu(r,d),v);$u(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,f!==null&&f.tag===6?(l(r,f.sibling),v=u(f,d),v.return=r,r=v):(l(r,f),v=bi(d,r.mode,v),v.return=r,r=v),i(r)):l(r,f)}return function(r,f,d,v){try{Fa=0;var H=de(r,f,d,v);return ra=null,H}catch(M){if(M===oa||M===Wu)throw M;var te=nt(29,M,null,r.mode);return te.lanes=v,te.return=r,te}}}var Gl=Df(!0),Uf=Df(!1),il=!1;function Yi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ue&2)!==0){var u=a.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),a.pending=t,t=Xu(e),yf(e,null,l),t}return Vu(e,a,t,l),Xu(e)}function Wa(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Rs(e,l)}}function ji(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,n=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,l=l.next}while(l!==null);n===null?u=n=t:n=n.next=t}else u=n=t;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Qi=!1;function Ia(){if(Qi){var e=fa;if(e!==null)throw e}}function ka(e,t,l,a){Qi=!1;var u=e.updateQueue;il=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var s=c,m=s.next;s.next=null,i===null?n=m:i.next=m,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==i&&(c===null?g.firstBaseUpdate=m:c.next=m,g.lastBaseUpdate=s))}if(n!==null){var T=u.baseState;i=0,g=m=s=null,c=n;do{var y=c.lane&-536870913,h=y!==c.lane;if(h?(k&y)===y:(a&y)===y){y!==0&&y===sa&&(Qi=!0),g!==null&&(g=g.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var N=e,q=c;y=t;var de=l;switch(q.tag){case 1:if(N=q.payload,typeof N=="function"){T=N.call(de,T,y);break e}T=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=q.payload,y=typeof N=="function"?N.call(de,T,y):N,y==null)break e;T=x({},T,y);break e;case 2:il=!0}}y=c.callback,y!==null&&(e.flags|=64,h&&(e.flags|=8192),h=u.callbacks,h===null?u.callbacks=[y]:h.push(y))}else h={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(m=g=h,s=T):g=g.next=h,i|=y;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;h=c,c=h.next,h.next=null,u.lastBaseUpdate=h,u.shared.pending=null}}while(!0);g===null&&(s=T),u.baseState=s,u.firstBaseUpdate=m,u.lastBaseUpdate=g,n===null&&(u.shared.lanes=0),ml|=i,e.lanes=i,e.memoizedState=T}}function zf(e,t){if(typeof e!="function")throw Error(E(191,e));e.call(t)}function Hf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)zf(l[e],t)}var da=o(null),Pu=o(0);function xf(e,t){e=It,_(Pu,e),_(da,t),It=e|t.baseLanes}function Vi(){_(Pu,It),_(da,da.current)}function Xi(){It=Pu.current,R(da),R(Pu)}var it=o(null),vt=null;function fl(e){var t=e.alternate;_(_e,_e.current&1),_(it,e),vt===null&&(t===null||da.current!==null||t.memoizedState!==null)&&(vt=e)}function wi(e){_(_e,_e.current),_(it,e),vt===null&&(vt=e)}function Bf(e){e.tag===22?(_(_e,_e.current),_(it,e),vt===null&&(vt=e)):ol()}function ol(){_(_e,_e.current),_(it,it.current)}function ct(e){R(it),vt===e&&(vt=null),R(_e)}var _e=o(0);function en(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Ic(l)||kc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vt=0,w=null,oe=null,Me=null,tn=!1,ma=!1,jl=!1,ln=0,$a=0,Ea=null,Xm=0;function pe(){throw Error(E(321))}function Zi(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!ut(e[l],t[l]))return!1;return!0}function Ji(e,t,l,a,u,n){return Vt=n,w=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=e===null||e.memoizedState===null?po:cc,jl=!1,n=l(a,u),jl=!1,ma&&(n=Yf(t,l,a,u)),qf(e),n}function qf(e){S.H=tu;var t=oe!==null&&oe.next!==null;if(Vt=0,Me=oe=w=null,tn=!1,$a=0,Ea=null,t)throw Error(E(300));e===null||Le||(e=e.dependencies,e!==null&&Ju(e)&&(Le=!0))}function Yf(e,t,l,a){w=e;var u=0;do{if(ma&&(Ea=null),$a=0,ma=!1,25<=u)throw Error(E(301));if(u+=1,Me=oe=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}S.H=To,n=t(l,a)}while(ma);return n}function wm(){var e=S.H,t=e.useState()[0];return t=typeof t.then=="function"?Pa(t):t,e=e.useState()[0],(oe!==null?oe.memoizedState:null)!==e&&(w.flags|=1024),t}function Fi(){var e=ln!==0;return ln=0,e}function Ki(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Wi(e){if(tn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}tn=!1}Vt=0,Me=oe=w=null,ma=!1,$a=ln=0,Ea=null}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?w.memoizedState=Me=e:Me=Me.next=e,Me}function Ne(){if(oe===null){var e=w.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=Me===null?w.memoizedState:Me.next;if(t!==null)Me=t,oe=e;else{if(e===null)throw w.alternate===null?Error(E(467)):Error(E(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},Me===null?w.memoizedState=Me=e:Me=Me.next=e}return Me}function an(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(e){var t=$a;return $a+=1,Ea===null&&(Ea=[]),e=Cf(Ea,e,t),t=w,(Me===null?t.memoizedState:Me.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?po:cc),e}function un(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pa(e);if(e.$$typeof===Oe)return Ye(e)}throw Error(E(438,String(e)))}function Ii(e){var t=null,l=w.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=w.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=an(),w.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Mt;return t.index++,l}function Xt(e,t){return typeof t=="function"?t(e):t}function nn(e){var t=Ne();return ki(t,oe,e)}function ki(e,t,l){var a=e.queue;if(a===null)throw Error(E(311));a.lastRenderedReducer=l;var u=e.baseQueue,n=a.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}t.baseQueue=u=n,a.pending=null}if(n=e.baseState,u===null)e.memoizedState=n;else{t=u.next;var c=i=null,s=null,m=t,g=!1;do{var T=m.lane&-536870913;if(T!==m.lane?(k&T)===T:(Vt&T)===T){var y=m.revertLane;if(y===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),T===sa&&(g=!0);else if((Vt&y)===y){m=m.next,y===sa&&(g=!0);continue}else T={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=T,i=n):s=s.next=T,w.lanes|=y,ml|=y;T=m.action,jl&&l(n,T),n=m.hasEagerState?m.eagerState:l(n,T)}else y={lane:T,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=y,i=n):s=s.next=y,w.lanes|=T,ml|=T;m=m.next}while(m!==null&&m!==t);if(s===null?i=n:s.next=c,!ut(n,e.memoizedState)&&(Le=!0,g&&(l=fa,l!==null)))throw l;e.memoizedState=n,e.baseState=i,e.baseQueue=s,a.lastRenderedState=n}return u===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function $i(e){var t=Ne(),l=t.queue;if(l===null)throw Error(E(311));l.lastRenderedReducer=e;var a=l.dispatch,u=l.pending,n=t.memoizedState;if(u!==null){l.pending=null;var i=u=u.next;do n=e(n,i.action),i=i.next;while(i!==u);ut(n,t.memoizedState)||(Le=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),l.lastRenderedState=n}return[n,a]}function Gf(e,t,l){var a=w,u=Ne(),n=ee;if(n){if(l===void 0)throw Error(E(407));l=l()}else l=t();var i=!ut((oe||u).memoizedState,l);if(i&&(u.memoizedState=l,Le=!0),u=u.queue,tc(Vf.bind(null,a,u,e),[e]),u.getSnapshot!==t||i||Me!==null&&Me.memoizedState.tag&1){if(a.flags|=2048,ya(9,{destroy:void 0},Qf.bind(null,a,u,l,t),null),ye===null)throw Error(E(349));n||(Vt&127)!==0||jf(a,t,l)}return l}function jf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=w.updateQueue,t===null?(t=an(),w.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Qf(e,t,l,a){t.value=l,t.getSnapshot=a,Xf(t)&&wf(e)}function Vf(e,t,l){return l(function(){Xf(t)&&wf(e)})}function Xf(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!ut(e,l)}catch{return!0}}function wf(e){var t=Dl(e,2);t!==null&&Pe(t,e,2)}function Pi(e){var t=Je();if(typeof e=="function"){var l=e;if(e=l(),jl){Pt(!0);try{l()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function Zf(e,t,l,a){return e.baseState=l,ki(e,oe,typeof a=="function"?a:Xt)}function Zm(e,t,l,a,u){if(fn(e))throw Error(E(485));if(e=t.action,e!==null){var n={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};S.T!==null?l(!0):n.isTransition=!1,a(n),l=t.pending,l===null?(n.next=t.pending=n,Jf(t,n)):(n.next=l.next,t.pending=l.next=n)}}function Jf(e,t){var l=t.action,a=t.payload,u=e.state;if(t.isTransition){var n=S.T,i={};S.T=i;try{var c=l(u,a),s=S.S;s!==null&&s(i,c),Ff(e,t,c)}catch(m){ec(e,t,m)}finally{n!==null&&i.types!==null&&(n.types=i.types),S.T=n}}else try{n=l(u,a),Ff(e,t,n)}catch(m){ec(e,t,m)}}function Ff(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Kf(e,t,a)},function(a){return ec(e,t,a)}):Kf(e,t,l)}function Kf(e,t,l){t.status="fulfilled",t.value=l,Wf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Jf(e,l)))}function ec(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Wf(t),t=t.next;while(t!==a)}e.action=null}function Wf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function If(e,t){return t}function kf(e,t){if(ee){var l=ye.formState;if(l!==null){e:{var a=w;if(ee){if(ge){t:{for(var u=ge,n=St;u.nodeType!==8;){if(!n){u=null;break t}if(u=pt(u.nextSibling),u===null){u=null;break t}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){ge=pt(u.nextSibling),a=u.data==="F!";break e}}ul(a)}a=!1}a&&(t=l[0])}}return l=Je(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:If,lastRenderedState:t},l.queue=a,l=go.bind(null,w,a),a.dispatch=l,a=Pi(!1),n=ic.bind(null,w,!1,a.queue),a=Je(),u={state:t,dispatch:null,action:e,pending:null},a.queue=u,l=Zm.bind(null,w,u,n,l),u.dispatch=l,a.memoizedState=e,[t,l,!1]}function $f(e){var t=Ne();return Pf(t,oe,e)}function Pf(e,t,l){if(t=ki(e,t,If)[0],e=nn(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Pa(t)}catch(i){throw i===oa?Wu:i}else a=t;t=Ne();var u=t.queue,n=u.dispatch;return l!==t.memoizedState&&(w.flags|=2048,ya(9,{destroy:void 0},Jm.bind(null,u,l),null)),[a,n,e]}function Jm(e,t){e.action=t}function eo(e){var t=Ne(),l=oe;if(l!==null)return Pf(t,l,e);Ne(),t=t.memoizedState,l=Ne();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ya(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=w.updateQueue,t===null&&(t=an(),w.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function to(){return Ne().memoizedState}function cn(e,t,l,a){var u=Je();w.flags|=e,u.memoizedState=ya(1|t,{destroy:void 0},l,a===void 0?null:a)}function sn(e,t,l,a){var u=Ne();a=a===void 0?null:a;var n=u.memoizedState.inst;oe!==null&&a!==null&&Zi(a,oe.memoizedState.deps)?u.memoizedState=ya(t,n,l,a):(w.flags|=e,u.memoizedState=ya(1|t,n,l,a))}function lo(e,t){cn(8390656,8,e,t)}function tc(e,t){sn(2048,8,e,t)}function Fm(e){w.flags|=4;var t=w.updateQueue;if(t===null)t=an(),w.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function ao(e){var t=Ne().memoizedState;return Fm({ref:t,nextImpl:e}),function(){if((ue&2)!==0)throw Error(E(440));return t.impl.apply(void 0,arguments)}}function uo(e,t){return sn(4,2,e,t)}function no(e,t){return sn(4,4,e,t)}function io(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function co(e,t,l){l=l!=null?l.concat([e]):null,sn(4,4,io.bind(null,t,e),l)}function lc(){}function so(e,t){var l=Ne();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Zi(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function fo(e,t){var l=Ne();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Zi(t,a[1]))return a[0];if(a=e(),jl){Pt(!0);try{e()}finally{Pt(!1)}}return l.memoizedState=[a,t],a}function ac(e,t,l){return l===void 0||(Vt&1073741824)!==0&&(k&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=rr(),w.lanes|=e,ml|=e,l)}function oo(e,t,l,a){return ut(l,t)?l:da.current!==null?(e=ac(e,l,a),ut(e,t)||(Le=!0),e):(Vt&42)===0||(Vt&1073741824)!==0&&(k&261930)===0?(Le=!0,e.memoizedState=l):(e=rr(),w.lanes|=e,ml|=e,t)}function ro(e,t,l,a,u){var n=b.p;b.p=n!==0&&8>n?n:8;var i=S.T,c={};S.T=c,ic(e,!1,t,l);try{var s=u(),m=S.S;if(m!==null&&m(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var g=Vm(s,a);eu(e,t,g,ot(e))}else eu(e,t,a,ot(e))}catch(T){eu(e,t,{then:function(){},status:"rejected",reason:T},ot())}finally{b.p=n,i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}function Km(){}function uc(e,t,l,a){if(e.tag!==5)throw Error(E(476));var u=mo(e).queue;ro(e,u,t,G,l===null?Km:function(){return Eo(e),l(a)})}function mo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:G},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Eo(e){var t=mo(e);t.next===null&&(t=e.alternate.memoizedState),eu(e,t.next.queue,{},ot())}function nc(){return Ye(gu)}function yo(){return Ne().memoizedState}function ho(){return Ne().memoizedState}function Wm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ot();e=cl(l);var a=sl(t,e,l);a!==null&&(Pe(a,t,l),Wa(a,t,l)),t={cache:Hi()},e.payload=t;return}t=t.return}}function Im(e,t,l){var a=ot();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fn(e)?So(t,l):(l=Oi(e,t,l,a),l!==null&&(Pe(l,e,a),vo(l,t,a)))}function go(e,t,l){var a=ot();eu(e,t,l,a)}function eu(e,t,l,a){var u={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(fn(e))So(t,u);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var i=t.lastRenderedState,c=n(i,l);if(u.hasEagerState=!0,u.eagerState=c,ut(c,i))return Vu(e,t,u,0),ye===null&&Qu(),!1}catch{}if(l=Oi(e,t,u,a),l!==null)return Pe(l,e,a),vo(l,t,a),!0}return!1}function ic(e,t,l,a){if(a={lane:2,revertLane:Yc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fn(e)){if(t)throw Error(E(479))}else t=Oi(e,l,a,2),t!==null&&Pe(t,e,2)}function fn(e){var t=e.alternate;return e===w||t!==null&&t===w}function So(e,t){ma=tn=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function vo(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Rs(e,l)}}var tu={readContext:Ye,use:un,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useLayoutEffect:pe,useInsertionEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useSyncExternalStore:pe,useId:pe,useHostTransitionStatus:pe,useFormState:pe,useActionState:pe,useOptimistic:pe,useMemoCache:pe,useCacheRefresh:pe};tu.useEffectEvent=pe;var po={readContext:Ye,use:un,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:lo,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,cn(4194308,4,io.bind(null,t,e),l)},useLayoutEffect:function(e,t){return cn(4194308,4,e,t)},useInsertionEffect:function(e,t){cn(4,2,e,t)},useMemo:function(e,t){var l=Je();t=t===void 0?null:t;var a=e();if(jl){Pt(!0);try{e()}finally{Pt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Je();if(l!==void 0){var u=l(t);if(jl){Pt(!0);try{l(t)}finally{Pt(!1)}}}else u=t;return a.memoizedState=a.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},a.queue=e,e=e.dispatch=Im.bind(null,w,e),[a.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:function(e){e=Pi(e);var t=e.queue,l=go.bind(null,w,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:lc,useDeferredValue:function(e,t){var l=Je();return ac(l,e,t)},useTransition:function(){var e=Pi(!1);return e=ro.bind(null,w,e.queue,!0,!1),Je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=w,u=Je();if(ee){if(l===void 0)throw Error(E(407));l=l()}else{if(l=t(),ye===null)throw Error(E(349));(k&127)!==0||jf(a,t,l)}u.memoizedState=l;var n={value:l,getSnapshot:t};return u.queue=n,lo(Vf.bind(null,a,n,e),[e]),a.flags|=2048,ya(9,{destroy:void 0},Qf.bind(null,a,n,l,t),null),l},useId:function(){var e=Je(),t=ye.identifierPrefix;if(ee){var l=Dt,a=Lt;l=(a&~(1<<32-at(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ln++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Xm++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:nc,useFormState:kf,useActionState:kf,useOptimistic:function(e){var t=Je();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=ic.bind(null,w,!0,l),l.dispatch=t,[e,t]},useMemoCache:Ii,useCacheRefresh:function(){return Je().memoizedState=Wm.bind(null,w)},useEffectEvent:function(e){var t=Je(),l={impl:e};return t.memoizedState=l,function(){if((ue&2)!==0)throw Error(E(440));return l.impl.apply(void 0,arguments)}}},cc={readContext:Ye,use:un,useCallback:so,useContext:Ye,useEffect:tc,useImperativeHandle:co,useInsertionEffect:uo,useLayoutEffect:no,useMemo:fo,useReducer:nn,useRef:to,useState:function(){return nn(Xt)},useDebugValue:lc,useDeferredValue:function(e,t){var l=Ne();return oo(l,oe.memoizedState,e,t)},useTransition:function(){var e=nn(Xt)[0],t=Ne().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:Gf,useId:yo,useHostTransitionStatus:nc,useFormState:$f,useActionState:$f,useOptimistic:function(e,t){var l=Ne();return Zf(l,oe,e,t)},useMemoCache:Ii,useCacheRefresh:ho};cc.useEffectEvent=ao;var To={readContext:Ye,use:un,useCallback:so,useContext:Ye,useEffect:tc,useImperativeHandle:co,useInsertionEffect:uo,useLayoutEffect:no,useMemo:fo,useReducer:$i,useRef:to,useState:function(){return $i(Xt)},useDebugValue:lc,useDeferredValue:function(e,t){var l=Ne();return oe===null?ac(l,e,t):oo(l,oe.memoizedState,e,t)},useTransition:function(){var e=$i(Xt)[0],t=Ne().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:Gf,useId:yo,useHostTransitionStatus:nc,useFormState:eo,useActionState:eo,useOptimistic:function(e,t){var l=Ne();return oe!==null?Zf(l,oe,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Ii,useCacheRefresh:ho};To.useEffectEvent=ao;function sc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:x({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var fc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ot(),u=cl(a);u.payload=t,l!=null&&(u.callback=l),t=sl(e,u,a),t!==null&&(Pe(t,e,a),Wa(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ot(),u=cl(a);u.tag=1,u.payload=t,l!=null&&(u.callback=l),t=sl(e,u,a),t!==null&&(Pe(t,e,a),Wa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ot(),a=cl(l);a.tag=2,t!=null&&(a.callback=t),t=sl(e,a,l),t!==null&&(Pe(t,e,l),Wa(t,e,l))}};function Ro(e,t,l,a,u,n,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,n,i):t.prototype&&t.prototype.isPureReactComponent?!Qa(l,a)||!Qa(u,n):!0}function Oo(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function Ql(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=x({},l));for(var u in e)l[u]===void 0&&(l[u]=e[u])}return l}function Ao(e){ju(e)}function bo(e){console.error(e)}function _o(e){ju(e)}function on(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function No(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function oc(e,t,l){return l=cl(l),l.tag=3,l.payload={element:null},l.callback=function(){on(e,t)},l}function Co(e){return e=cl(e),e.tag=3,e}function Mo(e,t,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var n=a.value;e.payload=function(){return u(n)},e.callback=function(){No(t,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){No(t,l,a),typeof u!="function"&&(El===null?El=new Set([this]):El.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function km(e,t,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ca(t,l,u,!0),l=it.current,l!==null){switch(l.tag){case 31:case 13:return vt===null?Rn():l.alternate===null&&Te===0&&(Te=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===Iu?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),xc(e,a,u)),!1;case 22:return l.flags|=65536,a===Iu?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),xc(e,a,u)),!1}throw Error(E(435,l.tag))}return xc(e,a,u),Rn(),!1}if(ee)return t=it.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,a!==Mi&&(e=Error(E(422),{cause:a}),wa(yt(e,l)))):(a!==Mi&&(t=Error(E(423),{cause:a}),wa(yt(t,l))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,a=yt(a,l),u=oc(e.stateNode,a,u),ji(e,u),Te!==4&&(Te=2)),!1;var n=Error(E(520),{cause:a});if(n=yt(n,l),fu===null?fu=[n]:fu.push(n),Te!==4&&(Te=2),t===null)return!0;a=yt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=u&-u,l.lanes|=e,e=oc(l.stateNode,a,e),ji(l,e),!1;case 1:if(t=l.type,n=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(El===null||!El.has(n))))return l.flags|=65536,u&=-u,l.lanes|=u,u=Co(u),Mo(u,e,l,a),ji(l,u),!1}l=l.return}while(l!==null);return!1}var rc=Error(E(461)),Le=!1;function Ge(e,t,l,a){t.child=e===null?Uf(t,null,l,a):Gl(t,e.child,l,a)}function Lo(e,t,l,a,u){l=l.render;var n=t.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return xl(t),a=Ji(e,t,l,i,n,u),c=Fi(),e!==null&&!Le?(Ki(e,t,u),wt(e,t,u)):(ee&&c&&Ni(t),t.flags|=1,Ge(e,t,a,u),t.child)}function Do(e,t,l,a,u){if(e===null){var n=l.type;return typeof n=="function"&&!Ai(n)&&n.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=n,Uo(e,t,n,a,u)):(e=wu(l.type,null,a,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!vc(e,u)){var i=n.memoizedProps;if(l=l.compare,l=l!==null?l:Qa,l(i,a)&&e.ref===t.ref)return wt(e,t,u)}return t.flags|=1,e=Yt(n,a),e.ref=t.ref,e.return=t,t.child=e}function Uo(e,t,l,a,u){if(e!==null){var n=e.memoizedProps;if(Qa(n,a)&&e.ref===t.ref)if(Le=!1,t.pendingProps=a=n,vc(e,u))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,wt(e,t,u)}return dc(e,t,l,a,u)}function zo(e,t,l,a){var u=a.children,n=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|l:l,e!==null){for(a=t.child=e.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;a=u&~n}else a=0,t.child=null;return Ho(e,t,n,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ku(t,n!==null?n.cachePool:null),n!==null?xf(t,n):Vi(),Bf(t);else return a=t.lanes=536870912,Ho(e,t,n!==null?n.baseLanes|l:l,l,a)}else n!==null?(Ku(t,n.cachePool),xf(t,n),ol(),t.memoizedState=null):(e!==null&&Ku(t,null),Vi(),ol());return Ge(e,t,u,l),t.child}function lu(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ho(e,t,l,a,u){var n=Bi();return n=n===null?null:{parent:Ce._currentValue,pool:n},t.memoizedState={baseLanes:l,cachePool:n},e!==null&&Ku(t,null),Vi(),Bf(t),e!==null&&ca(e,t,a,!0),t.childLanes=u,null}function rn(e,t){return t=mn({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xo(e,t,l){return Gl(t,e.child,null,l),e=rn(t,t.pendingProps),e.flags|=2,ct(t),t.memoizedState=null,e}function $m(e,t,l){var a=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(a.mode==="hidden")return e=rn(t,a),t.lanes=536870912,lu(null,e);if(wi(t),(e=ge)?(e=Fr(e,St),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ll!==null?{id:Lt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},l=gf(e),l.return=t,t.child=l,qe=t,ge=null)):e=null,e===null)throw ul(t);return t.lanes=536870912,null}return rn(t,a)}var n=e.memoizedState;if(n!==null){var i=n.dehydrated;if(wi(t),u)if(t.flags&256)t.flags&=-257,t=xo(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(E(558));else if(Le||ca(e,t,l,!1),u=(l&e.childLanes)!==0,Le||u){if(a=ye,a!==null&&(i=Os(a,l),i!==0&&i!==n.retryLane))throw n.retryLane=i,Dl(e,i),Pe(a,e,i),rc;Rn(),t=xo(e,t,l)}else e=n.treeContext,ge=pt(i.nextSibling),qe=t,ee=!0,al=null,St=!1,e!==null&&pf(t,e),t=rn(t,a),t.flags|=4096;return t}return e=Yt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function dn(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(E(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function dc(e,t,l,a,u){return xl(t),l=Ji(e,t,l,a,void 0,u),a=Fi(),e!==null&&!Le?(Ki(e,t,u),wt(e,t,u)):(ee&&a&&Ni(t),t.flags|=1,Ge(e,t,l,u),t.child)}function Bo(e,t,l,a,u,n){return xl(t),t.updateQueue=null,l=Yf(t,a,l,u),qf(e),a=Fi(),e!==null&&!Le?(Ki(e,t,n),wt(e,t,n)):(ee&&a&&Ni(t),t.flags|=1,Ge(e,t,l,n),t.child)}function qo(e,t,l,a,u){if(xl(t),t.stateNode===null){var n=aa,i=l.contextType;typeof i=="object"&&i!==null&&(n=Ye(i)),n=new l(a,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=fc,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=a,n.state=t.memoizedState,n.refs={},Yi(t),i=l.contextType,n.context=typeof i=="object"&&i!==null?Ye(i):aa,n.state=t.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(sc(t,l,i,a),n.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&fc.enqueueReplaceState(n,n.state,null),ka(t,a,n,u),Ia(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){n=t.stateNode;var c=t.memoizedProps,s=Ql(l,c);n.props=s;var m=n.context,g=l.contextType;i=aa,typeof g=="object"&&g!==null&&(i=Ye(g));var T=l.getDerivedStateFromProps;g=typeof T=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,g||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||m!==i)&&Oo(t,n,a,i),il=!1;var y=t.memoizedState;n.state=y,ka(t,a,n,u),Ia(),m=t.memoizedState,c||y!==m||il?(typeof T=="function"&&(sc(t,l,T,a),m=t.memoizedState),(s=il||Ro(t,l,s,a,y,m,i))?(g||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=m),n.props=a,n.state=m,n.context=i,a=s):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{n=t.stateNode,Gi(e,t),i=t.memoizedProps,g=Ql(l,i),n.props=g,T=t.pendingProps,y=n.context,m=l.contextType,s=aa,typeof m=="object"&&m!==null&&(s=Ye(m)),c=l.getDerivedStateFromProps,(m=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==T||y!==s)&&Oo(t,n,a,s),il=!1,y=t.memoizedState,n.state=y,ka(t,a,n,u),Ia();var h=t.memoizedState;i!==T||y!==h||il||e!==null&&e.dependencies!==null&&Ju(e.dependencies)?(typeof c=="function"&&(sc(t,l,c,a),h=t.memoizedState),(g=il||Ro(t,l,g,a,y,h,s)||e!==null&&e.dependencies!==null&&Ju(e.dependencies))?(m||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,h,s),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,h,s)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=h),n.props=a,n.state=h,n.context=s,a=g):(typeof n.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),a=!1)}return n=a,dn(e,t),a=(t.flags&128)!==0,n||a?(n=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&a?(t.child=Gl(t,e.child,null,u),t.child=Gl(t,null,l,u)):Ge(e,t,l,u),t.memoizedState=n.state,e=t.child):e=wt(e,t,u),e}function Yo(e,t,l,a){return zl(),t.flags|=256,Ge(e,t,l,a),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ec(e){return{baseLanes:e,cachePool:_f()}}function yc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=ft),e}function Go(e,t,l){var a=t.pendingProps,u=!1,n=(t.flags&128)!==0,i;if((i=n)||(i=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),i&&(u=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(u?fl(t):ol(),(e=ge)?(e=Fr(e,St),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ll!==null?{id:Lt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},l=gf(e),l.return=t,t.child=l,qe=t,ge=null)):e=null,e===null)throw ul(t);return kc(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,u?(ol(),u=t.mode,c=mn({mode:"hidden",children:c},u),a=Ul(a,u,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=Ec(l),a.childLanes=yc(e,i,l),t.memoizedState=mc,lu(null,a)):(fl(t),hc(t,c))}var s=e.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(n)t.flags&256?(fl(t),t.flags&=-257,t=gc(e,t,l)):t.memoizedState!==null?(ol(),t.child=e.child,t.flags|=128,t=null):(ol(),c=a.fallback,u=t.mode,a=mn({mode:"visible",children:a.children},u),c=Ul(c,u,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,Gl(t,e.child,null,l),a=t.child,a.memoizedState=Ec(l),a.childLanes=yc(e,i,l),t.memoizedState=mc,t=lu(null,a));else if(fl(t),kc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,a=Error(E(419)),a.stack="",a.digest=i,wa({value:a,source:null,stack:null}),t=gc(e,t,l)}else if(Le||ca(e,t,l,!1),i=(l&e.childLanes)!==0,Le||i){if(i=ye,i!==null&&(a=Os(i,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,Dl(e,a),Pe(i,e,a),rc;Ic(c)||Rn(),t=gc(e,t,l)}else Ic(c)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,ge=pt(c.nextSibling),qe=t,ee=!0,al=null,St=!1,e!==null&&pf(t,e),t=hc(t,a.children),t.flags|=4096);return t}return u?(ol(),c=a.fallback,u=t.mode,s=e.child,m=s.sibling,a=Yt(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,m!==null?c=Yt(m,c):(c=Ul(c,u,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,lu(null,a),a=t.child,c=e.child.memoizedState,c===null?c=Ec(l):(u=c.cachePool,u!==null?(s=Ce._currentValue,u=u.parent!==s?{parent:s,pool:s}:u):u=_f(),c={baseLanes:c.baseLanes|l,cachePool:u}),a.memoizedState=c,a.childLanes=yc(e,i,l),t.memoizedState=mc,lu(e.child,a)):(fl(t),l=e.child,e=l.sibling,l=Yt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l)}function hc(e,t){return t=mn({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mn(e,t){return e=nt(22,e,null,t),e.lanes=0,e}function gc(e,t,l){return Gl(t,e.child,null,l),e=hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jo(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ui(e.return,t,l)}function Sc(e,t,l,a,u,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u,treeForkCount:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=u,i.treeForkCount=n)}function Qo(e,t,l){var a=t.pendingProps,u=a.revealOrder,n=a.tail;a=a.children;var i=_e.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,_(_e,i),Ge(e,t,a,l),a=ee?Xa:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jo(e,l,t);else if(e.tag===19)jo(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(l=t.child,u=null;l!==null;)e=l.alternate,e!==null&&en(e)===null&&(u=l),l=l.sibling;l=u,l===null?(u=t.child,t.child=null):(u=l.sibling,l.sibling=null),Sc(t,!1,u,l,n,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&en(e)===null){t.child=u;break}e=u.sibling,u.sibling=l,l=u,u=e}Sc(t,!0,l,null,n,a);break;case"together":Sc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function wt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),ml|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ca(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,l=Yt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Yt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function vc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ju(e)))}function Pm(e,t,l){switch(t.tag){case 3:Ze(t,t.stateNode.containerInfo),nl(t,Ce,e.memoizedState.cache),zl();break;case 27:case 5:Ca(t);break;case 4:Ze(t,t.stateNode.containerInfo);break;case 10:nl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wi(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(fl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Go(e,t,l):(fl(t),e=wt(e,t,l),e!==null?e.sibling:null);fl(t);break;case 19:var u=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ca(e,t,l,!1),a=(l&t.childLanes)!==0),u){if(a)return Qo(e,t,l);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_(_e,_e.current),a)break;return null;case 22:return t.lanes=0,zo(e,t,l,t.pendingProps);case 24:nl(t,Ce,e.memoizedState.cache)}return wt(e,t,l)}function Vo(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!vc(e,l)&&(t.flags&128)===0)return Le=!1,Pm(e,t,l);Le=(e.flags&131072)!==0}else Le=!1,ee&&(t.flags&1048576)!==0&&vf(t,Xa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ql(t.elementType),t.type=e,typeof e=="function")Ai(e)?(a=Ql(e,a),t.tag=1,t=qo(null,t,e,a,l)):(t.tag=0,t=dc(null,t,e,a,l));else{if(e!=null){var u=e.$$typeof;if(u===xe){t.tag=11,t=Lo(null,t,e,a,l);break e}else if(u===Y){t.tag=14,t=Do(null,t,e,a,l);break e}}throw t=Ht(e)||e,Error(E(306,t,""))}}return t;case 0:return dc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,u=Ql(a,t.pendingProps),qo(e,t,a,u,l);case 3:e:{if(Ze(t,t.stateNode.containerInfo),e===null)throw Error(E(387));a=t.pendingProps;var n=t.memoizedState;u=n.element,Gi(e,t),ka(t,a,null,l);var i=t.memoizedState;if(a=i.cache,nl(t,Ce,a),a!==n.cache&&zi(t,[Ce],l,!0),Ia(),a=i.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=Yo(e,t,a,l);break e}else if(a!==u){u=yt(Error(E(424)),t),wa(u),t=Yo(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ge=pt(e.firstChild),qe=t,ee=!0,al=null,St=!0,l=Uf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(zl(),a===u){t=wt(e,t,l);break e}Ge(e,t,a,l)}t=t.child}return t;case 26:return dn(e,t),e===null?(l=Pr(t.type,null,t.pendingProps,null))?t.memoizedState=l:ee||(l=t.type,e=t.pendingProps,a=Mn(K.current).createElement(l),a[Be]=t,a[Fe]=e,je(a,l,e),ze(a),t.stateNode=a):t.memoizedState=Pr(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ca(t),e===null&&ee&&(a=t.stateNode=Ir(t.type,t.pendingProps,K.current),qe=t,St=!0,u=ge,Sl(t.type)?($c=u,ge=pt(a.firstChild)):ge=u),Ge(e,t,t.pendingProps.children,l),dn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((u=a=ge)&&(a=ME(a,t.type,t.pendingProps,St),a!==null?(t.stateNode=a,qe=t,ge=pt(a.firstChild),St=!1,u=!0):u=!1),u||ul(t)),Ca(t),u=t.type,n=t.pendingProps,i=e!==null?e.memoizedProps:null,a=n.children,Fc(u,n)?a=null:i!==null&&Fc(u,i)&&(t.flags|=32),t.memoizedState!==null&&(u=Ji(e,t,wm,null,null,l),gu._currentValue=u),dn(e,t),Ge(e,t,a,l),t.child;case 6:return e===null&&ee&&((e=l=ge)&&(l=LE(l,t.pendingProps,St),l!==null?(t.stateNode=l,qe=t,ge=null,e=!0):e=!1),e||ul(t)),null;case 13:return Go(e,t,l);case 4:return Ze(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Gl(t,null,a,l):Ge(e,t,a,l),t.child;case 11:return Lo(e,t,t.type,t.pendingProps,l);case 7:return Ge(e,t,t.pendingProps,l),t.child;case 8:return Ge(e,t,t.pendingProps.children,l),t.child;case 12:return Ge(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,nl(t,t.type,a.value),Ge(e,t,a.children,l),t.child;case 9:return u=t.type._context,a=t.pendingProps.children,xl(t),u=Ye(u),a=a(u),t.flags|=1,Ge(e,t,a,l),t.child;case 14:return Do(e,t,t.type,t.pendingProps,l);case 15:return Uo(e,t,t.type,t.pendingProps,l);case 19:return Qo(e,t,l);case 31:return $m(e,t,l);case 22:return zo(e,t,l,t.pendingProps);case 24:return xl(t),a=Ye(Ce),e===null?(u=Bi(),u===null&&(u=ye,n=Hi(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=l),u=n),t.memoizedState={parent:a,cache:u},Yi(t),nl(t,Ce,u)):((e.lanes&l)!==0&&(Gi(e,t),ka(t,null,null,l),Ia()),u=e.memoizedState,n=t.memoizedState,u.parent!==a?(u={parent:a,cache:a},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),nl(t,Ce,a)):(a=n.cache,nl(t,Ce,a),a!==u.cache&&zi(t,[Ce],l,!0))),Ge(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(E(156,t.tag))}function Zt(e){e.flags|=4}function pc(e,t,l,a,u){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(yr())e.flags|=8192;else throw Yl=Iu,qi}else e.flags&=-16777217}function Xo(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ud(t))if(yr())e.flags|=8192;else throw Yl=Iu,qi}function En(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ps():536870912,e.lanes|=t,va|=t)}function au(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var u=e.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function eE(e,t,l){var a=t.pendingProps;switch(Ci(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Qt(Ce),be(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ia(t)?Zt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Li())),Se(t),null;case 26:var u=t.type,n=t.memoizedState;return e===null?(Zt(t),n!==null?(Se(t),Xo(t,n)):(Se(t),pc(t,u,null,a,l))):n?n!==e.memoizedState?(Zt(t),Se(t),Xo(t,n)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Zt(t),Se(t),pc(t,u,e,a,l)),null;case 27:if(Au(t),l=K.current,u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Zt(t);else{if(!a){if(t.stateNode===null)throw Error(E(166));return Se(t),null}e=C.current,ia(t)?Tf(t):(e=Ir(u,a,l),t.stateNode=e,Zt(t))}return Se(t),null;case 5:if(Au(t),u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Zt(t);else{if(!a){if(t.stateNode===null)throw Error(E(166));return Se(t),null}if(n=C.current,ia(t))Tf(t);else{var i=Mn(K.current);switch(n){case 1:n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?i.createElement(u,{is:a.is}):i.createElement(u)}}n[Be]=t,n[Fe]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=n;e:switch(je(n,u,a),u){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Zt(t)}}return Se(t),pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Zt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(E(166));if(e=K.current,ia(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,u=qe,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}e[Be]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Gr(e.nodeValue,l)),e||ul(t,!0)}else e=Mn(e).createTextNode(a),e[Be]=t,t.stateNode=e}return Se(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ia(t),l!==null){if(e===null){if(!a)throw Error(E(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(557));e[Be]=t}else zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else l=Li(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(ct(t),t):(ct(t),null);if((t.flags&128)!==0)throw Error(E(558))}return Se(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ia(t),a!==null&&a.dehydrated!==null){if(e===null){if(!u)throw Error(E(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(E(317));u[Be]=t}else zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),u=!1}else u=Li(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(ct(t),t):(ct(t),null)}return ct(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==u&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),En(t,t.updateQueue),Se(t),null);case 4:return be(),e===null&&Vc(t.stateNode.containerInfo),Se(t),null;case 10:return Qt(t.type),Se(t),null;case 19:if(R(_e),a=t.memoizedState,a===null)return Se(t),null;if(u=(t.flags&128)!==0,n=a.rendering,n===null)if(u)au(a,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=en(e),n!==null){for(t.flags|=128,au(a,!1),e=n.updateQueue,t.updateQueue=e,En(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)hf(l,e),l=l.sibling;return _(_e,_e.current&1|2),ee&&Gt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&tt()>vn&&(t.flags|=128,u=!0,au(a,!1),t.lanes=4194304)}else{if(!u)if(e=en(n),e!==null){if(t.flags|=128,u=!0,e=e.updateQueue,t.updateQueue=e,En(t,e),au(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!ee)return Se(t),null}else 2*tt()-a.renderingStartTime>vn&&l!==536870912&&(t.flags|=128,u=!0,au(a,!1),t.lanes=4194304);a.isBackwards?(n.sibling=t.child,t.child=n):(e=a.last,e!==null?e.sibling=n:t.child=n,a.last=n)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=tt(),e.sibling=null,l=_e.current,_(_e,u?l&1|2:l&1),ee&&Gt(t,a.treeForkCount),e):(Se(t),null);case 22:case 23:return ct(t),Xi(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),l=t.updateQueue,l!==null&&En(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&R(Bl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Qt(Ce),Se(t),null;case 25:return null;case 30:return null}throw Error(E(156,t.tag))}function tE(e,t){switch(Ci(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qt(Ce),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Au(t),null;case 31:if(t.memoizedState!==null){if(ct(t),t.alternate===null)throw Error(E(340));zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ct(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(_e),null;case 4:return be(),null;case 10:return Qt(t.type),null;case 22:case 23:return ct(t),Xi(),e!==null&&R(Bl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qt(Ce),null;case 25:return null;default:return null}}function wo(e,t){switch(Ci(t),t.tag){case 3:Qt(Ce),be();break;case 26:case 27:case 5:Au(t);break;case 4:be();break;case 31:t.memoizedState!==null&&ct(t);break;case 13:ct(t);break;case 19:R(_e);break;case 10:Qt(t.type);break;case 22:case 23:ct(t),Xi(),e!==null&&R(Bl);break;case 24:Qt(Ce)}}function uu(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&e)===e){a=void 0;var n=l.create,i=l.inst;a=n(),i.destroy=a}l=l.next}while(l!==u)}}catch(c){se(t,t.return,c)}}function rl(e,t,l){try{var a=t.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var n=u.next;a=n;do{if((a.tag&e)===e){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=t;var s=l,m=c;try{m()}catch(g){se(u,s,g)}}}a=a.next}while(a!==n)}}catch(g){se(t,t.return,g)}}function Zo(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Hf(t,l)}catch(a){se(e,e.return,a)}}}function Jo(e,t,l){l.props=Ql(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){se(e,t,a)}}function nu(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(u){se(e,t,u)}}function Ut(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){se(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){se(e,t,u)}else l.current=null}function Fo(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){se(e,e.return,u)}}function Tc(e,t,l){try{var a=e.stateNode;OE(a,e.type,l,t),a[Fe]=t}catch(u){se(e,e.return,u)}}function Ko(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sl(e.type)||e.tag===4}function Rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ko(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Bt));else if(a!==4&&(a===27&&Sl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Oc(e,t,l),e=e.sibling;e!==null;)Oc(e,t,l),e=e.sibling}function yn(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Sl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(yn(e,t,l),e=e.sibling;e!==null;)yn(e,t,l),e=e.sibling}function Wo(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);je(t,a,l),t[Be]=e,t[Fe]=l}catch(n){se(e,e.return,n)}}var Jt=!1,De=!1,Ac=!1,Io=typeof WeakSet=="function"?WeakSet:Set,He=null;function lE(e,t){if(e=e.containerInfo,Zc=Bn,e=cf(e),gi(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{l.nodeType,n.nodeType}catch{l=null;break e}var i=0,c=-1,s=-1,m=0,g=0,T=e,y=null;t:for(;;){for(var h;T!==l||u!==0&&T.nodeType!==3||(c=i+u),T!==n||a!==0&&T.nodeType!==3||(s=i+a),T.nodeType===3&&(i+=T.nodeValue.length),(h=T.firstChild)!==null;)y=T,T=h;for(;;){if(T===e)break t;if(y===l&&++m===u&&(c=i),y===n&&++g===a&&(s=i),(h=T.nextSibling)!==null)break;T=y,y=T.parentNode}T=h}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(Jc={focusedElem:e,selectionRange:l},Bn=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,n=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)u=e[l],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,l=t,u=n.memoizedProps,n=n.memoizedState,a=l.stateNode;try{var N=Ql(l.type,u);e=a.getSnapshotBeforeUpdate(N,n),a.__reactInternalSnapshotBeforeUpdate=e}catch(q){se(l,l.return,q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Wc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(E(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function ko(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Kt(e,l),a&4&&uu(5,l);break;case 1:if(Kt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(i){se(l,l.return,i)}else{var u=Ql(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){se(l,l.return,i)}}a&64&&Zo(l),a&512&&nu(l,l.return);break;case 3:if(Kt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Hf(e,t)}catch(i){se(l,l.return,i)}}break;case 27:t===null&&a&4&&Wo(l);case 26:case 5:Kt(e,l),t===null&&a&4&&Fo(l),a&512&&nu(l,l.return);break;case 12:Kt(e,l);break;case 31:Kt(e,l),a&4&&er(e,l);break;case 13:Kt(e,l),a&4&&tr(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=rE.bind(null,l),DE(e,l))));break;case 22:if(a=l.memoizedState!==null||Jt,!a){t=t!==null&&t.memoizedState!==null||De,u=Jt;var n=De;Jt=a,(De=t)&&!n?Wt(e,l,(l.subtreeFlags&8772)!==0):Kt(e,l),Jt=u,De=n}break;case 30:break;default:Kt(e,l)}}function $o(e){var t=e.alternate;t!==null&&(e.alternate=null,$o(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ei(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,We=!1;function Ft(e,t,l){for(l=l.child;l!==null;)Po(e,t,l),l=l.sibling}function Po(e,t,l){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Ma,l)}catch{}switch(l.tag){case 26:De||Ut(l,t),Ft(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:De||Ut(l,t);var a=ve,u=We;Sl(l.type)&&(ve=l.stateNode,We=!1),Ft(e,t,l),Eu(l.stateNode),ve=a,We=u;break;case 5:De||Ut(l,t);case 6:if(a=ve,u=We,ve=null,Ft(e,t,l),ve=a,We=u,ve!==null)if(We)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(l.stateNode)}catch(n){se(l,t,n)}else try{ve.removeChild(l.stateNode)}catch(n){se(l,t,n)}break;case 18:ve!==null&&(We?(e=ve,Zr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Na(e)):Zr(ve,l.stateNode));break;case 4:a=ve,u=We,ve=l.stateNode.containerInfo,We=!0,Ft(e,t,l),ve=a,We=u;break;case 0:case 11:case 14:case 15:rl(2,l,t),De||rl(4,l,t),Ft(e,t,l);break;case 1:De||(Ut(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Jo(l,t,a)),Ft(e,t,l);break;case 21:Ft(e,t,l);break;case 22:De=(a=De)||l.memoizedState!==null,Ft(e,t,l),De=a;break;default:Ft(e,t,l)}}function er(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Na(e)}catch(l){se(t,t.return,l)}}}function tr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Na(e)}catch(l){se(t,t.return,l)}}function aE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Io),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Io),t;default:throw Error(E(435,e.tag))}}function hn(e,t){var l=aE(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var u=dE.bind(null,e,a);a.then(u,u)}})}function Ie(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],n=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 27:if(Sl(c.type)){ve=c.stateNode,We=!1;break e}break;case 5:ve=c.stateNode,We=!1;break e;case 3:case 4:ve=c.stateNode.containerInfo,We=!0;break e}c=c.return}if(ve===null)throw Error(E(160));Po(n,i,u),ve=null,We=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)lr(t,e),t=t.sibling}var At=null;function lr(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ie(t,e),ke(e),a&4&&(rl(3,e,e.return),uu(3,e),rl(5,e,e.return));break;case 1:Ie(t,e),ke(e),a&512&&(De||l===null||Ut(l,l.return)),a&64&&Jt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=At;if(Ie(t,e),ke(e),a&512&&(De||l===null||Ut(l,l.return)),a&4){var n=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,u=u.ownerDocument||u;t:switch(a){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Ua]||n[Be]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(a),u.head.insertBefore(n,u.querySelector("head > title"))),je(n,a,l),n[Be]=e,ze(n),a=n;break e;case"link":var i=ld("link","href",u).get(a+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break t}}n=u.createElement(a),je(n,a,l),u.head.appendChild(n);break;case"meta":if(i=ld("meta","content",u).get(a+(l.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break t}}n=u.createElement(a),je(n,a,l),u.head.appendChild(n);break;default:throw Error(E(468,a))}n[Be]=e,ze(n),a=n}e.stateNode=a}else ad(u,e.type,e.stateNode);else e.stateNode=td(u,a,e.memoizedProps);else n!==a?(n===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):n.count--,a===null?ad(u,e.type,e.stateNode):td(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Tc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Ie(t,e),ke(e),a&512&&(De||l===null||Ut(l,l.return)),l!==null&&a&4&&Tc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Ie(t,e),ke(e),a&512&&(De||l===null||Ut(l,l.return)),e.flags&32){u=e.stateNode;try{Il(u,"")}catch(N){se(e,e.return,N)}}a&4&&e.stateNode!=null&&(u=e.memoizedProps,Tc(e,u,l!==null?l.memoizedProps:u)),a&1024&&(Ac=!0);break;case 6:if(Ie(t,e),ke(e),a&4){if(e.stateNode===null)throw Error(E(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(N){se(e,e.return,N)}}break;case 3:if(Un=null,u=At,At=Ln(t.containerInfo),Ie(t,e),At=u,ke(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Na(t.containerInfo)}catch(N){se(e,e.return,N)}Ac&&(Ac=!1,ar(e));break;case 4:a=At,At=Ln(e.stateNode.containerInfo),Ie(t,e),ke(e),At=a;break;case 12:Ie(t,e),ke(e);break;case 31:Ie(t,e),ke(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hn(e,a)));break;case 13:Ie(t,e),ke(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Sn=tt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hn(e,a)));break;case 22:u=e.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,m=Jt,g=De;if(Jt=m||u,De=g||s,Ie(t,e),De=g,Jt=m,ke(e),a&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(l===null||s||Jt||De||Vl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){s=l=t;try{if(n=s.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=s.stateNode;var T=s.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(N){se(s,s.return,N)}}}else if(t.tag===6){if(l===null){s=t;try{s.stateNode.nodeValue=u?"":s.memoizedProps}catch(N){se(s,s.return,N)}}}else if(t.tag===18){if(l===null){s=t;try{var h=s.stateNode;u?Jr(h,!0):Jr(s.stateNode,!1)}catch(N){se(s,s.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,hn(e,l))));break;case 19:Ie(t,e),ke(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hn(e,a)));break;case 30:break;case 21:break;default:Ie(t,e),ke(e)}}function ke(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Ko(a)){l=a;break}a=a.return}if(l==null)throw Error(E(160));switch(l.tag){case 27:var u=l.stateNode,n=Rc(e);yn(e,n,u);break;case 5:var i=l.stateNode;l.flags&32&&(Il(i,""),l.flags&=-33);var c=Rc(e);yn(e,c,i);break;case 3:case 4:var s=l.stateNode.containerInfo,m=Rc(e);Oc(e,m,s);break;default:throw Error(E(161))}}catch(g){se(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ar(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ar(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Kt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ko(e,t.alternate,t),t=t.sibling}function Vl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:rl(4,t,t.return),Vl(t);break;case 1:Ut(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Jo(t,t.return,l),Vl(t);break;case 27:Eu(t.stateNode);case 26:case 5:Ut(t,t.return),Vl(t);break;case 22:t.memoizedState===null&&Vl(t);break;case 30:Vl(t);break;default:Vl(t)}e=e.sibling}}function Wt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,u=e,n=t,i=n.flags;switch(n.tag){case 0:case 11:case 15:Wt(u,n,l),uu(4,n);break;case 1:if(Wt(u,n,l),a=n,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(m){se(a,a.return,m)}if(a=n,u=a.updateQueue,u!==null){var c=a.stateNode;try{var s=u.shared.hiddenCallbacks;if(s!==null)for(u.shared.hiddenCallbacks=null,u=0;u<s.length;u++)zf(s[u],c)}catch(m){se(a,a.return,m)}}l&&i&64&&Zo(n),nu(n,n.return);break;case 27:Wo(n);case 26:case 5:Wt(u,n,l),l&&a===null&&i&4&&Fo(n),nu(n,n.return);break;case 12:Wt(u,n,l);break;case 31:Wt(u,n,l),l&&i&4&&er(u,n);break;case 13:Wt(u,n,l),l&&i&4&&tr(u,n);break;case 22:n.memoizedState===null&&Wt(u,n,l),nu(n,n.return);break;case 30:break;default:Wt(u,n,l)}t=t.sibling}}function bc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Za(l))}function _c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e))}function bt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ur(e,t,l,a),t=t.sibling}function ur(e,t,l,a){var u=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t,l,a),u&2048&&uu(9,t);break;case 1:bt(e,t,l,a);break;case 3:bt(e,t,l,a),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e)));break;case 12:if(u&2048){bt(e,t,l,a),e=t.stateNode;try{var n=t.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){se(t,t.return,s)}}else bt(e,t,l,a);break;case 31:bt(e,t,l,a);break;case 13:bt(e,t,l,a);break;case 23:break;case 22:n=t.stateNode,i=t.alternate,t.memoizedState!==null?n._visibility&2?bt(e,t,l,a):iu(e,t):n._visibility&2?bt(e,t,l,a):(n._visibility|=2,ha(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),u&2048&&bc(i,t);break;case 24:bt(e,t,l,a),u&2048&&_c(t.alternate,t);break;default:bt(e,t,l,a)}}function ha(e,t,l,a,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=e,i=t,c=l,s=a,m=i.flags;switch(i.tag){case 0:case 11:case 15:ha(n,i,c,s,u),uu(8,i);break;case 23:break;case 22:var g=i.stateNode;i.memoizedState!==null?g._visibility&2?ha(n,i,c,s,u):iu(n,i):(g._visibility|=2,ha(n,i,c,s,u)),u&&m&2048&&bc(i.alternate,i);break;case 24:ha(n,i,c,s,u),u&&m&2048&&_c(i.alternate,i);break;default:ha(n,i,c,s,u)}t=t.sibling}}function iu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,u=a.flags;switch(a.tag){case 22:iu(l,a),u&2048&&bc(a.alternate,a);break;case 24:iu(l,a),u&2048&&_c(a.alternate,a);break;default:iu(l,a)}t=t.sibling}}var cu=8192;function ga(e,t,l){if(e.subtreeFlags&cu)for(e=e.child;e!==null;)nr(e,t,l),e=e.sibling}function nr(e,t,l){switch(e.tag){case 26:ga(e,t,l),e.flags&cu&&e.memoizedState!==null&&XE(l,At,e.memoizedState,e.memoizedProps);break;case 5:ga(e,t,l);break;case 3:case 4:var a=At;At=Ln(e.stateNode.containerInfo),ga(e,t,l),At=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=cu,cu=16777216,ga(e,t,l),cu=a):ga(e,t,l));break;default:ga(e,t,l)}}function ir(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function su(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];He=a,sr(a,e)}ir(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cr(e),e=e.sibling}function cr(e){switch(e.tag){case 0:case 11:case 15:su(e),e.flags&2048&&rl(9,e,e.return);break;case 3:su(e);break;case 12:su(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gn(e)):su(e);break;default:su(e)}}function gn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];He=a,sr(a,e)}ir(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:rl(8,t,t.return),gn(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,gn(t));break;default:gn(t)}e=e.sibling}}function sr(e,t){for(;He!==null;){var l=He;switch(l.tag){case 0:case 11:case 15:rl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,He=a;else e:for(l=e;He!==null;){a=He;var u=a.sibling,n=a.return;if($o(a),a===l){He=null;break e}if(u!==null){u.return=n,He=u;break e}He=n}}}var uE={getCacheForType:function(e){var t=Ye(Ce),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Ye(Ce).controller.signal}},nE=typeof WeakMap=="function"?WeakMap:Map,ue=0,ye=null,W=null,k=0,ce=0,st=null,dl=!1,Sa=!1,Nc=!1,It=0,Te=0,ml=0,Xl=0,Cc=0,ft=0,va=0,fu=null,$e=null,Mc=!1,Sn=0,fr=0,vn=1/0,pn=null,El=null,Ue=0,yl=null,pa=null,kt=0,Lc=0,Dc=null,or=null,ou=0,Uc=null;function ot(){return(ue&2)!==0&&k!==0?k&-k:S.T!==null?Yc():As()}function rr(){if(ft===0)if((k&536870912)===0||ee){var e=Nu;Nu<<=1,(Nu&3932160)===0&&(Nu=262144),ft=e}else ft=536870912;return e=it.current,e!==null&&(e.flags|=32),ft}function Pe(e,t,l){(e===ye&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(Ta(e,0),hl(e,k,ft,!1)),Da(e,l),((ue&2)===0||e!==ye)&&(e===ye&&((ue&2)===0&&(Xl|=l),Te===4&&hl(e,k,ft,!1)),zt(e))}function dr(e,t,l){if((ue&6)!==0)throw Error(E(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||La(e,t),u=a?sE(e,t):Hc(e,t,!0),n=a;do{if(u===0){Sa&&!a&&hl(e,t,0,!1);break}else{if(l=e.current.alternate,n&&!iE(l)){u=Hc(e,t,!1),n=!1;continue}if(u===2){if(n=t,e.errorRecoveryDisabledLanes&n)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var c=e;u=fu;var s=c.current.memoizedState.isDehydrated;if(s&&(Ta(c,i).flags|=256),i=Hc(c,i,!1),i!==2){if(Nc&&!s){c.errorRecoveryDisabledLanes|=n,Xl|=n,u=4;break e}n=$e,$e=u,n!==null&&($e===null?$e=n:$e.push.apply($e,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){Ta(e,0),hl(e,t,0,!0);break}e:{switch(a=e,n=u,n){case 0:case 1:throw Error(E(345));case 4:if((t&4194048)!==t)break;case 6:hl(a,t,ft,!dl);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(E(329))}if((t&62914560)===t&&(u=Sn+300-tt(),10<u)){if(hl(a,t,ft,!dl),Mu(a,0,!0)!==0)break e;kt=t,a.timeoutHandle=Xr(mr.bind(null,a,l,$e,pn,Mc,t,ft,Xl,va,dl,n,"Throttled",-0,0),u);break e}mr(a,l,$e,pn,Mc,t,ft,Xl,va,dl,n,null,-0,0)}}break}while(!0);zt(e)}function mr(e,t,l,a,u,n,i,c,s,m,g,T,y,h){if(e.timeoutHandle=-1,T=t.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bt},nr(t,n,T);var N=(n&62914560)===n?Sn-tt():(n&4194048)===n?fr-tt():0;if(N=wE(T,N),N!==null){kt=n,e.cancelPendingCommit=N(Tr.bind(null,e,t,n,l,a,u,i,c,s,g,T,null,y,h)),hl(e,n,i,!m);return}}Tr(e,t,n,l,a,u,i,c,s)}function iE(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],n=u.getSnapshot;u=u.value;try{if(!ut(n(),u))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hl(e,t,l,a){t&=~Cc,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var u=t;0<u;){var n=31-at(u),i=1<<n;a[n]=-1,u&=~i}l!==0&&Ts(e,l,t)}function Tn(){return(ue&6)===0?(ru(0),!1):!0}function zc(){if(W!==null){if(ce===0)var e=W.return;else e=W,jt=Hl=null,Wi(e),ra=null,Fa=0,e=W;for(;e!==null;)wo(e.alternate,e),e=e.return;W=null}}function Ta(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,_E(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),kt=0,zc(),ye=e,W=l=Yt(e.current,null),k=t,ce=0,st=null,dl=!1,Sa=La(e,t),Nc=!1,va=ft=Cc=Xl=ml=Te=0,$e=fu=null,Mc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var u=31-at(a),n=1<<u;t|=e[u],a&=~n}return It=t,Qu(),l}function Er(e,t){w=null,S.H=tu,t===oa||t===Wu?(t=Mf(),ce=3):t===qi?(t=Mf(),ce=4):ce=t===rc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,W===null&&(Te=1,on(e,yt(t,e.current)))}function yr(){var e=it.current;return e===null?!0:(k&4194048)===k?vt===null:(k&62914560)===k||(k&536870912)!==0?e===vt:!1}function hr(){var e=S.H;return S.H=tu,e===null?tu:e}function gr(){var e=S.A;return S.A=uE,e}function Rn(){Te=4,dl||(k&4194048)!==k&&it.current!==null||(Sa=!0),(ml&134217727)===0&&(Xl&134217727)===0||ye===null||hl(ye,k,ft,!1)}function Hc(e,t,l){var a=ue;ue|=2;var u=hr(),n=gr();(ye!==e||k!==t)&&(pn=null,Ta(e,t)),t=!1;var i=Te;e:do try{if(ce!==0&&W!==null){var c=W,s=st;switch(ce){case 8:zc(),i=6;break e;case 3:case 2:case 9:case 6:it.current===null&&(t=!0);var m=ce;if(ce=0,st=null,Ra(e,c,s,m),l&&Sa){i=0;break e}break;default:m=ce,ce=0,st=null,Ra(e,c,s,m)}}cE(),i=Te;break}catch(g){Er(e,g)}while(!0);return t&&e.shellSuspendCounter++,jt=Hl=null,ue=a,S.H=u,S.A=n,W===null&&(ye=null,k=0,Qu()),i}function cE(){for(;W!==null;)Sr(W)}function sE(e,t){var l=ue;ue|=2;var a=hr(),u=gr();ye!==e||k!==t?(pn=null,vn=tt()+500,Ta(e,t)):Sa=La(e,t);e:do try{if(ce!==0&&W!==null){t=W;var n=st;t:switch(ce){case 1:ce=0,st=null,Ra(e,t,n,1);break;case 2:case 9:if(Nf(n)){ce=0,st=null,vr(t);break}t=function(){ce!==2&&ce!==9||ye!==e||(ce=7),zt(e)},n.then(t,t);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:Nf(n)?(ce=0,st=null,vr(t)):(ce=0,st=null,Ra(e,t,n,7));break;case 5:var i=null;switch(W.tag){case 26:i=W.memoizedState;case 5:case 27:var c=W;if(i?ud(i):c.stateNode.complete){ce=0,st=null;var s=c.sibling;if(s!==null)W=s;else{var m=c.return;m!==null?(W=m,On(m)):W=null}break t}}ce=0,st=null,Ra(e,t,n,5);break;case 6:ce=0,st=null,Ra(e,t,n,6);break;case 8:zc(),Te=6;break e;default:throw Error(E(462))}}fE();break}catch(g){Er(e,g)}while(!0);return jt=Hl=null,S.H=a,S.A=u,ue=l,W!==null?0:(ye=null,k=0,Qu(),Te)}function fE(){for(;W!==null&&!Ud();)Sr(W)}function Sr(e){var t=Vo(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?On(e):W=t}function vr(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Bo(l,t,t.pendingProps,t.type,void 0,k);break;case 11:t=Bo(l,t,t.pendingProps,t.type.render,t.ref,k);break;case 5:Wi(t);default:wo(l,t),t=W=hf(t,It),t=Vo(l,t,It)}e.memoizedProps=e.pendingProps,t===null?On(e):W=t}function Ra(e,t,l,a){jt=Hl=null,Wi(t),ra=null,Fa=0;var u=t.return;try{if(km(e,u,t,l,k)){Te=1,on(e,yt(l,e.current)),W=null;return}}catch(n){if(u!==null)throw W=u,n;Te=1,on(e,yt(l,e.current)),W=null;return}t.flags&32768?(ee||a===1?e=!0:Sa||(k&536870912)!==0?e=!1:(dl=e=!0,(a===2||a===9||a===3||a===6)&&(a=it.current,a!==null&&a.tag===13&&(a.flags|=16384))),pr(t,e)):On(t)}function On(e){var t=e;do{if((t.flags&32768)!==0){pr(t,dl);return}e=t.return;var l=eE(t.alternate,t,It);if(l!==null){W=l;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Te===0&&(Te=5)}function pr(e,t){do{var l=tE(e.alternate,e);if(l!==null){l.flags&=32767,W=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=l}while(e!==null);Te=6,W=null}function Tr(e,t,l,a,u,n,i,c,s){e.cancelPendingCommit=null;do An();while(Ue!==0);if((ue&6)!==0)throw Error(E(327));if(t!==null){if(t===e.current)throw Error(E(177));if(n=t.lanes|t.childLanes,n|=Ri,Vd(e,l,n,i,c,s),e===ye&&(W=ye=null,k=0),pa=t,yl=e,kt=l,Lc=n,Dc=u,or=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mE(bu,function(){return _r(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,u=b.p,b.p=2,i=ue,ue|=4;try{lE(e,t,l)}finally{ue=i,b.p=u,S.T=a}}Ue=1,Rr(),Or(),Ar()}}function Rr(){if(Ue===1){Ue=0;var e=yl,t=pa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=S.T,S.T=null;var a=b.p;b.p=2;var u=ue;ue|=4;try{lr(t,e);var n=Jc,i=cf(e.containerInfo),c=n.focusedElem,s=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&nf(c.ownerDocument.documentElement,c)){if(s!==null&&gi(c)){var m=s.start,g=s.end;if(g===void 0&&(g=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(g,c.value.length);else{var T=c.ownerDocument||document,y=T&&T.defaultView||window;if(y.getSelection){var h=y.getSelection(),N=c.textContent.length,q=Math.min(s.start,N),de=s.end===void 0?q:Math.min(s.end,N);!h.extend&&q>de&&(i=de,de=q,q=i);var r=uf(c,q),f=uf(c,de);if(r&&f&&(h.rangeCount!==1||h.anchorNode!==r.node||h.anchorOffset!==r.offset||h.focusNode!==f.node||h.focusOffset!==f.offset)){var d=T.createRange();d.setStart(r.node,r.offset),h.removeAllRanges(),q>de?(h.addRange(d),h.extend(f.node,f.offset)):(d.setEnd(f.node,f.offset),h.addRange(d))}}}}for(T=[],h=c;h=h.parentNode;)h.nodeType===1&&T.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<T.length;c++){var v=T[c];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Bn=!!Zc,Jc=Zc=null}finally{ue=u,b.p=a,S.T=l}}e.current=t,Ue=2}}function Or(){if(Ue===2){Ue=0;var e=yl,t=pa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=S.T,S.T=null;var a=b.p;b.p=2;var u=ue;ue|=4;try{ko(e,t.alternate,t)}finally{ue=u,b.p=a,S.T=l}}Ue=3}}function Ar(){if(Ue===4||Ue===3){Ue=0,zd();var e=yl,t=pa,l=kt,a=or;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ue=5:(Ue=0,pa=yl=null,br(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(El=null),$n(l),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Ma,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=S.T,u=b.p,b.p=2,S.T=null;try{for(var n=e.onRecoverableError,i=0;i<a.length;i++){var c=a[i];n(c.value,{componentStack:c.stack})}}finally{S.T=t,b.p=u}}(kt&3)!==0&&An(),zt(e),u=e.pendingLanes,(l&261930)!==0&&(u&42)!==0?e===Uc?ou++:(ou=0,Uc=e):ou=0,ru(0)}}function br(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Za(t)))}function An(){return Rr(),Or(),Ar(),_r()}function _r(){if(Ue!==5)return!1;var e=yl,t=Lc;Lc=0;var l=$n(kt),a=S.T,u=b.p;try{b.p=32>l?32:l,S.T=null,l=Dc,Dc=null;var n=yl,i=kt;if(Ue=0,pa=yl=null,kt=0,(ue&6)!==0)throw Error(E(331));var c=ue;if(ue|=4,cr(n.current),ur(n,n.current,i,l),ue=c,ru(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Ma,n)}catch{}return!0}finally{b.p=u,S.T=a,br(e,t)}}function Nr(e,t,l){t=yt(l,t),t=oc(e.stateNode,t,2),e=sl(e,t,2),e!==null&&(Da(e,2),zt(e))}function se(e,t,l){if(e.tag===3)Nr(e,e,l);else for(;t!==null;){if(t.tag===3){Nr(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(El===null||!El.has(a))){e=yt(l,e),l=Co(2),a=sl(t,l,2),a!==null&&(Mo(l,a,t,e),Da(a,2),zt(a));break}}t=t.return}}function xc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new nE;var u=new Set;a.set(t,u)}else u=a.get(t),u===void 0&&(u=new Set,a.set(t,u));u.has(l)||(Nc=!0,u.add(l),e=oE.bind(null,e,t,l),t.then(e,e))}function oE(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ye===e&&(k&l)===l&&(Te===4||Te===3&&(k&62914560)===k&&300>tt()-Sn?(ue&2)===0&&Ta(e,0):Cc|=l,va===k&&(va=0)),zt(e)}function Cr(e,t){t===0&&(t=ps()),e=Dl(e,t),e!==null&&(Da(e,t),zt(e))}function rE(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Cr(e,l)}function dE(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,u=e.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(E(314))}a!==null&&a.delete(t),Cr(e,l)}function mE(e,t){return Kn(e,t)}var bn=null,Oa=null,Bc=!1,_n=!1,qc=!1,gl=0;function zt(e){e!==Oa&&e.next===null&&(Oa===null?bn=Oa=e:Oa=Oa.next=e),_n=!0,Bc||(Bc=!0,yE())}function ru(e,t){if(!qc&&_n){qc=!0;do for(var l=!1,a=bn;a!==null;){if(e!==0){var u=a.pendingLanes;if(u===0)var n=0;else{var i=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-at(42|e)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(l=!0,Ur(a,n))}else n=k,n=Mu(a,a===ye?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||La(a,n)||(l=!0,Ur(a,n));a=a.next}while(l);qc=!1}}function EE(){Mr()}function Mr(){_n=Bc=!1;var e=0;gl!==0&&bE()&&(e=gl);for(var t=tt(),l=null,a=bn;a!==null;){var u=a.next,n=Lr(a,t);n===0?(a.next=null,l===null?bn=u:l.next=u,u===null&&(Oa=l)):(l=a,(e!==0||(n&3)!==0)&&(_n=!0)),a=u}Ue!==0&&Ue!==5||ru(e),gl!==0&&(gl=0)}function Lr(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,u=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var i=31-at(n),c=1<<i,s=u[i];s===-1?((c&l)===0||(c&a)!==0)&&(u[i]=Qd(c,t)):s<=t&&(e.expiredLanes|=c),n&=~c}if(t=ye,l=k,l=Mu(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Wn(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||La(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Wn(a),$n(l)){case 2:case 8:l=Ss;break;case 32:l=bu;break;case 268435456:l=vs;break;default:l=bu}return a=Dr.bind(null,e),l=Kn(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Wn(a),e.callbackPriority=2,e.callbackNode=null,2}function Dr(e,t){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(An()&&e.callbackNode!==l)return null;var a=k;return a=Mu(e,e===ye?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(dr(e,a,t),Lr(e,tt()),e.callbackNode!=null&&e.callbackNode===l?Dr.bind(null,e):null)}function Ur(e,t){if(An())return null;dr(e,t,!0)}function yE(){NE(function(){(ue&6)!==0?Kn(gs,EE):Mr()})}function Yc(){if(gl===0){var e=sa;e===0&&(e=_u,_u<<=1,(_u&261888)===0&&(_u=256)),gl=e}return gl}function zr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zu(""+e)}function Hr(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function hE(e,t,l,a,u){if(t==="submit"&&l&&l.stateNode===u){var n=zr((u[Fe]||null).action),i=a.submitter;i&&(t=(t=i[Fe]||null)?zr(t.formAction):i.getAttribute("formAction"),t!==null&&(n=t,i=null));var c=new qu("action","action",null,a,u);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(gl!==0){var s=i?Hr(u,i):new FormData(u);uc(l,{pending:!0,data:s,method:u.method,action:n},null,s)}}else typeof n=="function"&&(c.preventDefault(),s=i?Hr(u,i):new FormData(u),uc(l,{pending:!0,data:s,method:u.method,action:n},n,s))},currentTarget:u}]})}}for(var Gc=0;Gc<Ti.length;Gc++){var jc=Ti[Gc],gE=jc.toLowerCase(),SE=jc[0].toUpperCase()+jc.slice(1);Ot(gE,"on"+SE)}Ot(of,"onAnimationEnd"),Ot(rf,"onAnimationIteration"),Ot(df,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Hm,"onTransitionRun"),Ot(xm,"onTransitionStart"),Ot(Bm,"onTransitionCancel"),Ot(mf,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),Nl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du));function xr(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],u=a.event;a=a.listeners;e:{var n=void 0;if(t)for(var i=a.length-1;0<=i;i--){var c=a[i],s=c.instance,m=c.currentTarget;if(c=c.listener,s!==n&&u.isPropagationStopped())break e;n=c,u.currentTarget=m;try{n(u)}catch(g){ju(g)}u.currentTarget=null,n=s}else for(i=0;i<a.length;i++){if(c=a[i],s=c.instance,m=c.currentTarget,c=c.listener,s!==n&&u.isPropagationStopped())break e;n=c,u.currentTarget=m;try{n(u)}catch(g){ju(g)}u.currentTarget=null,n=s}}}}function I(e,t){var l=t[Pn];l===void 0&&(l=t[Pn]=new Set);var a=e+"__bubble";l.has(a)||(Br(t,e,2,!1),l.add(a))}function Qc(e,t,l){var a=0;t&&(a|=4),Br(l,e,a,t)}var Nn="_reactListening"+Math.random().toString(36).slice(2);function Vc(e){if(!e[Nn]){e[Nn]=!0,Ns.forEach(function(l){l!=="selectionchange"&&(vE.has(l)||Qc(l,!1,e),Qc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nn]||(t[Nn]=!0,Qc("selectionchange",!1,t))}}function Br(e,t,l,a){switch(rd(t)){case 2:var u=FE;break;case 8:u=KE;break;default:u=as}l=u.bind(null,t,l,e),u=void 0,!si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),a?u!==void 0?e.addEventListener(t,l,{capture:!0,passive:u}):e.addEventListener(t,l,!0):u!==void 0?e.addEventListener(t,l,{passive:u}):e.addEventListener(t,l,!1)}function Xc(e,t,l,a,u){var n=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=a.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=Zl(c),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){a=n=i;continue e}c=c.parentNode}}a=a.return}Gs(function(){var m=n,g=ii(l),T=[];e:{var y=Ef.get(e);if(y!==void 0){var h=qu,N=e;switch(e){case"keypress":if(xu(l)===0)break e;case"keydown":case"keyup":h=dm;break;case"focusin":N="focus",h=di;break;case"focusout":N="blur",h=di;break;case"beforeblur":case"afterblur":h=di;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ym;break;case of:case rf:case df:h=am;break;case mf:h=gm;break;case"scroll":case"scrollend":h=$d;break;case"wheel":h=vm;break;case"copy":case"cut":case"paste":h=nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ws;break;case"toggle":case"beforetoggle":h=Tm}var q=(t&4)!==0,de=!q&&(e==="scroll"||e==="scrollend"),r=q?y!==null?y+"Capture":null:y;q=[];for(var f=m,d;f!==null;){var v=f;if(d=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||d===null||r===null||(v=Ha(f,r),v!=null&&q.push(mu(f,v,d))),de)break;f=f.return}0<q.length&&(y=new h(y,N,null,l,g),T.push({event:y,listeners:q}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",y&&l!==ni&&(N=l.relatedTarget||l.fromElement)&&(Zl(N)||N[wl]))break e;if((h||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,h?(N=l.relatedTarget||l.toElement,h=m,N=N?Zl(N):null,N!==null&&(de=J(N),q=N.tag,N!==de||q!==5&&q!==27&&q!==6)&&(N=null)):(h=null,N=m),h!==N)){if(q=Vs,v="onMouseLeave",r="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(q=ws,v="onPointerLeave",r="onPointerEnter",f="pointer"),de=h==null?y:za(h),d=N==null?y:za(N),y=new q(v,f+"leave",h,l,g),y.target=de,y.relatedTarget=d,v=null,Zl(g)===m&&(q=new q(r,f+"enter",N,l,g),q.target=d,q.relatedTarget=de,v=q),de=v,h&&N)t:{for(q=pE,r=h,f=N,d=0,v=r;v;v=q(v))d++;v=0;for(var H=f;H;H=q(H))v++;for(;0<d-v;)r=q(r),d--;for(;0<v-d;)f=q(f),v--;for(;d--;){if(r===f||f!==null&&r===f.alternate){q=r;break t}r=q(r),f=q(f)}q=null}else q=null;h!==null&&qr(T,y,h,q,!1),N!==null&&de!==null&&qr(T,de,N,q,!0)}}e:{if(y=m?za(m):window,h=y.nodeName&&y.nodeName.toLowerCase(),h==="select"||h==="input"&&y.type==="file")var te=$s;else if(Is(y))if(Ps)te=Dm;else{te=Mm;var M=Cm}else h=y.nodeName,!h||h.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?m&&ui(m.elementType)&&(te=$s):te=Lm;if(te&&(te=te(e,m))){ks(T,te,l,g);break e}M&&M(e,y,m),e==="focusout"&&m&&y.type==="number"&&m.memoizedProps.value!=null&&ai(y,"number",y.value)}switch(M=m?za(m):window,e){case"focusin":(Is(M)||M.contentEditable==="true")&&(ea=M,Si=m,Va=null);break;case"focusout":Va=Si=ea=null;break;case"mousedown":vi=!0;break;case"contextmenu":case"mouseup":case"dragend":vi=!1,sf(T,l,g);break;case"selectionchange":if(zm)break;case"keydown":case"keyup":sf(T,l,g)}var Z;if(Ei)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Pl?Ks(e,l)&&($="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&($="onCompositionStart");$&&(Zs&&l.locale!=="ko"&&(Pl||$!=="onCompositionStart"?$==="onCompositionEnd"&&Pl&&(Z=js()):(tl=g,fi="value"in tl?tl.value:tl.textContent,Pl=!0)),M=Cn(m,$),0<M.length&&($=new Xs($,e,null,l,g),T.push({event:$,listeners:M}),Z?$.data=Z:(Z=Ws(l),Z!==null&&($.data=Z)))),(Z=Om?Am(e,l):bm(e,l))&&($=Cn(m,"onBeforeInput"),0<$.length&&(M=new Xs("onBeforeInput","beforeinput",null,l,g),T.push({event:M,listeners:$}),M.data=Z)),hE(T,e,m,l,g)}xr(T,t)})}function mu(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Cn(e,t){for(var l=t+"Capture",a=[];e!==null;){var u=e,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=Ha(e,l),u!=null&&a.unshift(mu(e,u,n)),u=Ha(e,t),u!=null&&a.push(mu(e,u,n))),e.tag===3)return a;e=e.return}return[]}function pE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qr(e,t,l,a,u){for(var n=t._reactName,i=[];l!==null&&l!==a;){var c=l,s=c.alternate,m=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||m===null||(s=m,u?(m=Ha(l,n),m!=null&&i.unshift(mu(l,m,s))):u||(m=Ha(l,n),m!=null&&i.push(mu(l,m,s)))),l=l.return}i.length!==0&&e.push({event:t,listeners:i})}var TE=/\r\n?/g,RE=/\u0000|\uFFFD/g;function Yr(e){return(typeof e=="string"?e:""+e).replace(TE,`
`).replace(RE,"")}function Gr(e,t){return t=Yr(t),Yr(e)===t}function re(e,t,l,a,u,n){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Il(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Il(e,""+a);break;case"className":Du(e,"class",a);break;case"tabIndex":Du(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Du(e,l,a);break;case"style":qs(e,a,n);break;case"data":if(t!=="object"){Du(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=zu(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(l==="formAction"?(t!=="input"&&re(e,t,"name",u.name,u,null),re(e,t,"formEncType",u.formEncType,u,null),re(e,t,"formMethod",u.formMethod,u,null),re(e,t,"formTarget",u.formTarget,u,null)):(re(e,t,"encType",u.encType,u,null),re(e,t,"method",u.method,u,null),re(e,t,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=zu(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Bt);break;case"onScroll":a!=null&&I("scroll",e);break;case"onScrollEnd":a!=null&&I("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(E(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(E(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=zu(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":I("beforetoggle",e),I("toggle",e),Lu(e,"popover",a);break;case"xlinkActuate":xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":xt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":xt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":xt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":xt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Lu(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Id.get(l)||l,Lu(e,l,a))}}function wc(e,t,l,a,u,n){switch(l){case"style":qs(e,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(E(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(E(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Il(e,a):(typeof a=="number"||typeof a=="bigint")&&Il(e,""+a);break;case"onScroll":a!=null&&I("scroll",e);break;case"onScrollEnd":a!=null&&I("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Bt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cs.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),t=l.slice(2,u?l.length-7:void 0),n=e[Fe]||null,n=n!=null?n[l]:null,typeof n=="function"&&e.removeEventListener(t,n,u),typeof a=="function")){typeof n!="function"&&n!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,u);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Lu(e,l,a)}}}function je(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":I("error",e),I("load",e);var a=!1,u=!1,n;for(n in l)if(l.hasOwnProperty(n)){var i=l[n];if(i!=null)switch(n){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(E(137,t));default:re(e,t,n,i,l,null)}}u&&re(e,t,"srcSet",l.srcSet,l,null),a&&re(e,t,"src",l.src,l,null);return;case"input":I("invalid",e);var c=n=i=u=null,s=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var g=l[a];if(g!=null)switch(a){case"name":u=g;break;case"type":i=g;break;case"checked":s=g;break;case"defaultChecked":m=g;break;case"value":n=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(E(137,t));break;default:re(e,t,a,g,l,null)}}zs(e,n,c,s,m,i,u,!1);return;case"select":I("invalid",e),a=i=n=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:re(e,t,u,c,l,null)}t=n,l=i,e.multiple=!!a,t!=null?Wl(e,!!a,t,!1):l!=null&&Wl(e,!!a,l,!0);return;case"textarea":I("invalid",e),n=u=a=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(E(91));break;default:re(e,t,i,c,l,null)}xs(e,a,u,n);return;case"option":for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null)&&(s==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":re(e,t,s,a,l,null));return;case"dialog":I("beforetoggle",e),I("toggle",e),I("cancel",e),I("close",e);break;case"iframe":case"object":I("load",e);break;case"video":case"audio":for(a=0;a<du.length;a++)I(du[a],e);break;case"image":I("error",e),I("load",e);break;case"details":I("toggle",e);break;case"embed":case"source":case"link":I("error",e),I("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(E(137,t));default:re(e,t,m,a,l,null)}return;default:if(ui(t)){for(g in l)l.hasOwnProperty(g)&&(a=l[g],a!==void 0&&wc(e,t,g,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&re(e,t,c,a,l,null))}function OE(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,s=null,m=null,g=null;for(h in l){var T=l[h];if(l.hasOwnProperty(h)&&T!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":s=T;default:a.hasOwnProperty(h)||re(e,t,h,null,a,T)}}for(var y in a){var h=a[y];if(T=l[y],a.hasOwnProperty(y)&&(h!=null||T!=null))switch(y){case"type":n=h;break;case"name":u=h;break;case"checked":m=h;break;case"defaultChecked":g=h;break;case"value":i=h;break;case"defaultValue":c=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(E(137,t));break;default:h!==T&&re(e,t,y,h,a,T)}}li(e,i,c,s,m,g,n,u);return;case"select":h=i=c=y=null;for(n in l)if(s=l[n],l.hasOwnProperty(n)&&s!=null)switch(n){case"value":break;case"multiple":h=s;default:a.hasOwnProperty(n)||re(e,t,n,null,a,s)}for(u in a)if(n=a[u],s=l[u],a.hasOwnProperty(u)&&(n!=null||s!=null))switch(u){case"value":y=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==s&&re(e,t,u,n,a,s)}t=c,l=i,a=h,y!=null?Wl(e,!!l,y,!1):!!a!=!!l&&(t!=null?Wl(e,!!l,t,!0):Wl(e,!!l,l?[]:"",!1));return;case"textarea":h=y=null;for(c in l)if(u=l[c],l.hasOwnProperty(c)&&u!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:re(e,t,c,null,a,u)}for(i in a)if(u=a[i],n=l[i],a.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":y=u;break;case"defaultValue":h=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(E(91));break;default:u!==n&&re(e,t,i,u,a,n)}Hs(e,y,h);return;case"option":for(var N in l)y=l[N],l.hasOwnProperty(N)&&y!=null&&!a.hasOwnProperty(N)&&(N==="selected"?e.selected=!1:re(e,t,N,null,a,y));for(s in a)y=a[s],h=l[s],a.hasOwnProperty(s)&&y!==h&&(y!=null||h!=null)&&(s==="selected"?e.selected=y&&typeof y!="function"&&typeof y!="symbol":re(e,t,s,y,a,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in l)y=l[q],l.hasOwnProperty(q)&&y!=null&&!a.hasOwnProperty(q)&&re(e,t,q,null,a,y);for(m in a)if(y=a[m],h=l[m],a.hasOwnProperty(m)&&y!==h&&(y!=null||h!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(E(137,t));break;default:re(e,t,m,y,a,h)}return;default:if(ui(t)){for(var de in l)y=l[de],l.hasOwnProperty(de)&&y!==void 0&&!a.hasOwnProperty(de)&&wc(e,t,de,void 0,a,y);for(g in a)y=a[g],h=l[g],!a.hasOwnProperty(g)||y===h||y===void 0&&h===void 0||wc(e,t,g,y,a,h);return}}for(var r in l)y=l[r],l.hasOwnProperty(r)&&y!=null&&!a.hasOwnProperty(r)&&re(e,t,r,null,a,y);for(T in a)y=a[T],h=l[T],!a.hasOwnProperty(T)||y===h||y==null&&h==null||re(e,t,T,y,a,h)}function jr(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function AE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var u=l[a],n=u.transferSize,i=u.initiatorType,c=u.duration;if(n&&c&&jr(i)){for(i=0,c=u.responseEnd,a+=1;a<l.length;a++){var s=l[a],m=s.startTime;if(m>c)break;var g=s.transferSize,T=s.initiatorType;g&&jr(T)&&(s=s.responseEnd,i+=g*(s<c?1:(c-m)/(s-m)))}if(--a,t+=8*(n+i)/(u.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zc=null,Jc=null;function Mn(e){return e.nodeType===9?e:e.ownerDocument}function Qr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vr(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Fc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kc=null;function bE(){var e=window.event;return e&&e.type==="popstate"?e===Kc?!1:(Kc=e,!0):(Kc=null,!1)}var Xr=typeof setTimeout=="function"?setTimeout:void 0,_E=typeof clearTimeout=="function"?clearTimeout:void 0,wr=typeof Promise=="function"?Promise:void 0,NE=typeof queueMicrotask=="function"?queueMicrotask:typeof wr<"u"?function(e){return wr.resolve(null).then(e).catch(CE)}:Xr;function CE(e){setTimeout(function(){throw e})}function Sl(e){return e==="head"}function Zr(e,t){var l=t,a=0;do{var u=l.nextSibling;if(e.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(u),Na(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Eu(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Eu(l);for(var n=l.firstChild;n;){var i=n.nextSibling,c=n.nodeName;n[Ua]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||l.removeChild(n),n=i}}else l==="body"&&Eu(e.ownerDocument.body);l=u}while(l);Na(t)}function Jr(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Wc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Wc(l),ei(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function ME(e,t,l,a){for(;e.nodeType===1;){var u=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ua])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=pt(e.nextSibling),e===null)break}return null}function LE(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=pt(e.nextSibling),e===null))return null;return e}function Fr(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pt(e.nextSibling),e===null))return null;return e}function Ic(e){return e.data==="$?"||e.data==="$~"}function kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function DE(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var $c=null;function Kr(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return pt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Wr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Ir(e,t,l){switch(t=Mn(l),e){case"html":if(e=t.documentElement,!e)throw Error(E(452));return e;case"head":if(e=t.head,!e)throw Error(E(453));return e;case"body":if(e=t.body,!e)throw Error(E(454));return e;default:throw Error(E(451))}}function Eu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ei(e)}var Tt=new Map,kr=new Set;function Ln(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $t=b.d;b.d={f:UE,r:zE,D:HE,C:xE,L:BE,m:qE,X:GE,S:YE,M:jE};function UE(){var e=$t.f(),t=Tn();return e||t}function zE(e){var t=Jl(e);t!==null&&t.tag===5&&t.type==="form"?Eo(t):$t.r(e)}var Aa=typeof document>"u"?null:document;function $r(e,t,l){var a=Aa;if(a&&typeof t=="string"&&t){var u=mt(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),kr.has(u)||(kr.add(u),e={rel:e,crossOrigin:l,href:t},a.querySelector(u)===null&&(t=a.createElement("link"),je(t,"link",e),ze(t),a.head.appendChild(t)))}}function HE(e){$t.D(e),$r("dns-prefetch",e,null)}function xE(e,t){$t.C(e,t),$r("preconnect",e,t)}function BE(e,t,l){$t.L(e,t,l);var a=Aa;if(a&&e&&t){var u='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+mt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+mt(l.imageSizes)+'"]')):u+='[href="'+mt(e)+'"]';var n=u;switch(t){case"style":n=ba(e);break;case"script":n=_a(e)}Tt.has(n)||(e=x({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Tt.set(n,e),a.querySelector(u)!==null||t==="style"&&a.querySelector(yu(n))||t==="script"&&a.querySelector(hu(n))||(t=a.createElement("link"),je(t,"link",e),ze(t),a.head.appendChild(t)))}}function qE(e,t){$t.m(e,t);var l=Aa;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+mt(a)+'"][href="'+mt(e)+'"]',n=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=_a(e)}if(!Tt.has(n)&&(e=x({rel:"modulepreload",href:e},t),Tt.set(n,e),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(hu(n)))return}a=l.createElement("link"),je(a,"link",e),ze(a),l.head.appendChild(a)}}}function YE(e,t,l){$t.S(e,t,l);var a=Aa;if(a&&e){var u=Fl(a).hoistableStyles,n=ba(e);t=t||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(yu(n)))c.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Tt.get(n))&&Pc(e,l);var s=i=a.createElement("link");ze(s),je(s,"link",e),s._p=new Promise(function(m,g){s.onload=m,s.onerror=g}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Dn(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function GE(e,t){$t.X(e,t);var l=Aa;if(l&&e){var a=Fl(l).hoistableScripts,u=_a(e),n=a.get(u);n||(n=l.querySelector(hu(u)),n||(e=x({src:e,async:!0},t),(t=Tt.get(u))&&es(e,t),n=l.createElement("script"),ze(n),je(n,"link",e),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function jE(e,t){$t.M(e,t);var l=Aa;if(l&&e){var a=Fl(l).hoistableScripts,u=_a(e),n=a.get(u);n||(n=l.querySelector(hu(u)),n||(e=x({src:e,async:!0,type:"module"},t),(t=Tt.get(u))&&es(e,t),n=l.createElement("script"),ze(n),je(n,"link",e),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function Pr(e,t,l,a){var u=(u=K.current)?Ln(u):null;if(!u)throw Error(E(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=ba(l.href),l=Fl(u).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=ba(l.href);var n=Fl(u).hoistableStyles,i=n.get(e);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,i),(n=u.querySelector(yu(e)))&&!n._p&&(i.instance=n,i.state.loading=5),Tt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Tt.set(e,l),n||QE(u,e,l,i.state))),t&&a===null)throw Error(E(528,""));return i}if(t&&a!==null)throw Error(E(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_a(l),l=Fl(u).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(E(444,e))}}function ba(e){return'href="'+mt(e)+'"'}function yu(e){return'link[rel="stylesheet"]['+e+"]"}function ed(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function QE(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),je(t,"link",l),ze(t),e.head.appendChild(t))}function _a(e){return'[src="'+mt(e)+'"]'}function hu(e){return"script[async]"+e}function td(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+mt(l.href)+'"]');if(a)return t.instance=a,ze(a),a;var u=x({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ze(a),je(a,"style",u),Dn(a,l.precedence,e),t.instance=a;case"stylesheet":u=ba(l.href);var n=e.querySelector(yu(u));if(n)return t.state.loading|=4,t.instance=n,ze(n),n;a=ed(l),(u=Tt.get(u))&&Pc(a,u),n=(e.ownerDocument||e).createElement("link"),ze(n);var i=n;return i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),je(n,"link",a),t.state.loading|=4,Dn(n,l.precedence,e),t.instance=n;case"script":return n=_a(l.src),(u=e.querySelector(hu(n)))?(t.instance=u,ze(u),u):(a=l,(u=Tt.get(n))&&(a=x({},l),es(a,u)),e=e.ownerDocument||e,u=e.createElement("script"),ze(u),je(u,"link",a),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(E(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Dn(a,l.precedence,e));return t.instance}function Dn(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,n=u,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===t)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function es(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Un=null;function ld(e,t,l){if(Un===null){var a=new Map,u=Un=new Map;u.set(l,a)}else u=Un,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),u=0;u<l.length;u++){var n=l[u];if(!(n[Ua]||n[Be]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(t)||"";i=e+i;var c=a.get(i);c?c.push(n):a.set(i,[n])}}return a}function ad(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function VE(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ud(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function XE(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var u=ba(a.href),n=t.querySelector(yu(u));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zn.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=n,ze(n);return}n=t.ownerDocument||t,a=ed(a),(u=Tt.get(u))&&Pc(a,u),n=n.createElement("link"),ze(n);var i=n;i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),je(n,"link",a),l.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=zn.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var ts=0;function wE(e,t){return e.stylesheets&&e.count===0&&xn(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&xn(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+t);0<e.imgBytes&&ts===0&&(ts=62500*AE());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xn(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>ts?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(u)}}:null}function zn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hn=null;function xn(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hn=new Map,t.forEach(ZE,e),Hn=null,zn.call(e))}function ZE(e,t){if(!(t.state.loading&4)){var l=Hn.get(e);if(l)var a=l.get(null);else{l=new Map,Hn.set(e,l);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}u=t.instance,i=u.getAttribute("data-precedence"),n=l.get(i)||a,n===a&&l.set(null,u),l.set(i,u),this.count++,a=zn.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),n?n.parentNode.insertBefore(u,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var gu={$$typeof:Oe,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function JE(e,t,l,a,u,n,i,c,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=In(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.hiddenUpdates=In(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function nd(e,t,l,a,u,n,i,c,s,m,g,T){return e=new JE(e,t,l,i,s,m,g,T,c),t=1,n===!0&&(t|=24),n=nt(3,null,null,t),e.current=n,n.stateNode=e,t=Hi(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:a,isDehydrated:l,cache:t},Yi(n),e}function id(e){return e?(e=aa,e):aa}function cd(e,t,l,a,u,n){u=id(u),a.context===null?a.context=u:a.pendingContext=u,a=cl(t),a.payload={element:l},n=n===void 0?null:n,n!==null&&(a.callback=n),l=sl(e,a,t),l!==null&&(Pe(l,e,t),Wa(l,e,t))}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function ls(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function fd(e){if(e.tag===13||e.tag===31){var t=Dl(e,67108864);t!==null&&Pe(t,e,67108864),ls(e,67108864)}}function od(e){if(e.tag===13||e.tag===31){var t=ot();t=kn(t);var l=Dl(e,t);l!==null&&Pe(l,e,t),ls(e,t)}}var Bn=!0;function FE(e,t,l,a){var u=S.T;S.T=null;var n=b.p;try{b.p=2,as(e,t,l,a)}finally{b.p=n,S.T=u}}function KE(e,t,l,a){var u=S.T;S.T=null;var n=b.p;try{b.p=8,as(e,t,l,a)}finally{b.p=n,S.T=u}}function as(e,t,l,a){if(Bn){var u=us(a);if(u===null)Xc(e,t,a,qn,l),dd(e,a);else if(IE(u,e,t,l,a))a.stopPropagation();else if(dd(e,a),t&4&&-1<WE.indexOf(e)){for(;u!==null;){var n=Jl(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=_l(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var s=1<<31-at(i);c.entanglements[1]|=s,i&=~s}zt(n),(ue&6)===0&&(vn=tt()+500,ru(0))}}break;case 31:case 13:c=Dl(n,2),c!==null&&Pe(c,n,2),Tn(),ls(n,2)}if(n=us(a),n===null&&Xc(e,t,a,qn,l),n===u)break;u=n}u!==null&&a.stopPropagation()}else Xc(e,t,a,null,l)}}function us(e){return e=ii(e),ns(e)}var qn=null;function ns(e){if(qn=null,e=Zl(e),e!==null){var t=J(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=ne(t),e!==null)return e;e=null}else if(l===31){if(e=Re(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qn=e,null}function rd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hd()){case gs:return 2;case Ss:return 8;case bu:case xd:return 32;case vs:return 268435456;default:return 32}default:return 32}}var is=!1,vl=null,pl=null,Tl=null,Su=new Map,vu=new Map,Rl=[],WE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dd(e,t){switch(e){case"focusin":case"focusout":vl=null;break;case"dragenter":case"dragleave":pl=null;break;case"mouseover":case"mouseout":Tl=null;break;case"pointerover":case"pointerout":Su.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vu.delete(t.pointerId)}}function pu(e,t,l,a,u,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:n,targetContainers:[u]},t!==null&&(t=Jl(t),t!==null&&fd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function IE(e,t,l,a,u){switch(t){case"focusin":return vl=pu(vl,e,t,l,a,u),!0;case"dragenter":return pl=pu(pl,e,t,l,a,u),!0;case"mouseover":return Tl=pu(Tl,e,t,l,a,u),!0;case"pointerover":var n=u.pointerId;return Su.set(n,pu(Su.get(n)||null,e,t,l,a,u)),!0;case"gotpointercapture":return n=u.pointerId,vu.set(n,pu(vu.get(n)||null,e,t,l,a,u)),!0}return!1}function md(e){var t=Zl(e.target);if(t!==null){var l=J(t);if(l!==null){if(t=l.tag,t===13){if(t=ne(l),t!==null){e.blockedOn=t,bs(e.priority,function(){od(l)});return}}else if(t===31){if(t=Re(l),t!==null){e.blockedOn=t,bs(e.priority,function(){od(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=us(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);ni=a,l.target.dispatchEvent(a),ni=null}else return t=Jl(l),t!==null&&fd(t),e.blockedOn=l,!1;t.shift()}return!0}function Ed(e,t,l){Yn(e)&&l.delete(t)}function kE(){is=!1,vl!==null&&Yn(vl)&&(vl=null),pl!==null&&Yn(pl)&&(pl=null),Tl!==null&&Yn(Tl)&&(Tl=null),Su.forEach(Ed),vu.forEach(Ed)}function Gn(e,t){e.blockedOn===t&&(e.blockedOn=null,is||(is=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,kE)))}var jn=null;function yd(e){jn!==e&&(jn=e,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){jn===e&&(jn=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],u=e[t+2];if(typeof a!="function"){if(ns(a||l)===null)continue;break}var n=Jl(l);n!==null&&(e.splice(t,3),t-=3,uc(n,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function Na(e){function t(s){return Gn(s,e)}vl!==null&&Gn(vl,e),pl!==null&&Gn(pl,e),Tl!==null&&Gn(Tl,e),Su.forEach(t),vu.forEach(t);for(var l=0;l<Rl.length;l++){var a=Rl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Rl.length&&(l=Rl[0],l.blockedOn===null);)md(l),l.blockedOn===null&&Rl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],n=l[a+1],i=u[Fe]||null;if(typeof n=="function")i||yd(l);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Fe]||null)c=i.formAction;else if(ns(u)!==null)continue}else c=i.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),yd(l)}}}function hd(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(i){return u=i})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function cs(e){this._internalRoot=e}Qn.prototype.render=cs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));var l=t.current,a=ot();cd(l,a,e,t,null,null)},Qn.prototype.unmount=cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cd(e.current,2,null,e,null,null),Tn(),t[wl]=null}};function Qn(e){this._internalRoot=e}Qn.prototype.unstable_scheduleHydration=function(e){if(e){var t=As();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Rl.length&&t!==0&&t<Rl[l].priority;l++);Rl.splice(l,0,e),l===0&&md(e)}};var gd=j.version;if(gd!=="19.2.4")throw Error(E(527,gd,"19.2.4"));b.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=O(t),e=e!==null?P(e):null,e=e===null?null:e.stateNode,e};var $E={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vn.isDisabled&&Vn.supportsFiber)try{Ma=Vn.inject($E),lt=Vn}catch{}}return Ru.createRoot=function(e,t){if(!U(e))throw Error(E(299));var l=!1,a="",u=Ao,n=bo,i=_o;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=nd(e,1,!1,null,null,l,a,null,u,n,i,hd),e[wl]=t.current,Vc(e),new cs(t)},Ru.hydrateRoot=function(e,t,l){if(!U(e))throw Error(E(299));var a=!1,u="",n=Ao,i=bo,c=_o,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),t=nd(e,1,!0,t,l??null,a,u,s,n,i,c,hd),t.context=id(null),l=t.current,a=ot(),a=kn(a),u=cl(a),u.callback=null,sl(l,u,a),l=a,t.current.lanes=l,Da(t,l),zt(t),e[wl]=t.current,Vc(e),new Qn(t)},Ru.version="19.2.4",Ru}var Nd;function s0(){if(Nd)return os.exports;Nd=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(j){console.error(j)}}return A(),os.exports=c0(),os.exports}var f0=s0();const _t={chapters:[{id:1,title:"Database Fundamentals",description:"Understanding databases and data storage",lessons:[{id:"1-1",title:"What is a Database?",duration:"10 min",content:`
## Welcome to the World of Data! 📊

Every application you use stores data somewhere. Let's understand how!

### What is a Database?

A **database** is an organized collection of data that can be easily accessed, managed, and updated.

\`\`\`
Real-world examples:
📱 Your contacts app → Contact database
🛒 Amazon → Products, orders, users
📺 Netflix → Shows, users, watch history
🏦 Your bank → Accounts, transactions
\`\`\`

### Why Not Just Use Files?

| Feature | Files | Database |
|---------|-------|----------|
| **Search** | Slow (scan entire file) | Fast (indexed) |
| **Concurrency** | Conflicts | Handled |
| **Relationships** | Manual | Built-in |
| **Integrity** | None | Constraints |
| **Backup** | Manual | Automated |

### Types of Databases

| Type | Best For | Examples |
|------|----------|----------|
| **Relational (SQL)** | Structured data, relationships | PostgreSQL, MySQL |
| **Document (NoSQL)** | Flexible schemas | MongoDB, CouchDB |
| **Key-Value** | Caching, sessions | Redis, DynamoDB |
| **Graph** | Relationships | Neo4j |
| **Time-Series** | Metrics, logs | InfluxDB, TimescaleDB |

### Relational Databases

Data is organized in **tables** (like spreadsheets):

\`\`\`
Users Table:
┌────┬──────────┬─────────────────┬─────┐
│ id │ name     │ email           │ age │
├────┼──────────┼─────────────────┼─────┤
│ 1  │ Alice    │ alice@email.com │ 28  │
│ 2  │ Bob      │ bob@email.com   │ 34  │
│ 3  │ Charlie  │ charlie@mail.io │ 22  │
└────┴──────────┴─────────────────┴─────┘
\`\`\`

### Key Terms

| Term | Meaning |
|------|---------|
| **Table** | Collection of related data (like a spreadsheet) |
| **Row** | Single record (one user, one order) |
| **Column** | Attribute/field (name, email, age) |
| **Primary Key** | Unique identifier for each row |
| **Foreign Key** | Link to another table |
| **Schema** | Structure/blueprint of database |

### SQL — The Language of Databases

**SQL** (Structured Query Language) is how we talk to relational databases:

\`\`\`sql
-- Get all users
SELECT * FROM users;

-- Get users named Alice
SELECT * FROM users WHERE name = 'Alice';

-- Create a new user
INSERT INTO users (name, email, age) VALUES ('Dave', 'dave@email.com', 30);
\`\`\`

<tip>
💡 SQL is used by almost all relational databases. Learn it once, use it everywhere!
</tip>

### CRUD Operations

Every database application does these four things:

\`\`\`
C - Create  → INSERT
R - Read    → SELECT
U - Update  → UPDATE
D - Delete  → DELETE
\`\`\`

### Popular Database Systems

| Database | Type | Best For |
|----------|------|----------|
| **PostgreSQL** | Relational | Full-featured, complex queries |
| **MySQL** | Relational | Web apps, widely used |
| **SQLite** | Relational | Embedded, mobile apps |
| **MongoDB** | Document | Flexible data, rapid development |
| **Redis** | Key-Value | Caching, real-time data |

<warning>
⚠️ Choosing the right database is crucial! Consider: data structure, relationships, scale, and query patterns.
</warning>

Let's start learning SQL! 🚀
          `},{id:"1-2",title:"Setting Up Your Database",duration:"8 min",content:`
## Getting Started with PostgreSQL 🐘

Let's set up a real database to practice with!

### Installing PostgreSQL

**Mac (Homebrew):**
\`\`\`bash
brew install postgresql@15
brew services start postgresql@15
\`\`\`

**Ubuntu/Debian:**
\`\`\`bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
\`\`\`

**Windows:**
Download from postgresql.org and run the installer.

### Connecting to PostgreSQL

\`\`\`bash
# Connect as default user
psql postgres

# Or with specific user/database
psql -U username -d database_name
\`\`\`

### Basic psql Commands

\`\`\`sql
-- List databases
\\l

-- Connect to a database
\\c database_name

-- List tables
\\dt

-- Describe a table
\\d table_name

-- Quit
\\q

-- Help
\\?
\`\`\`

### Creating a Database

\`\`\`sql
-- Create a new database
CREATE DATABASE myapp;

-- Connect to it
\\c myapp

-- Drop a database (careful!)
DROP DATABASE myapp;
\`\`\`

### Creating Tables

\`\`\`sql
-- Create a users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- View the table structure
\\d users
\`\`\`

### Common Data Types

| Type | Description | Example |
|------|-------------|---------|
| \`INTEGER\` | Whole numbers | 42 |
| \`SERIAL\` | Auto-incrementing integer | 1, 2, 3... |
| \`VARCHAR(n)\` | Variable-length string | 'Hello' |
| \`TEXT\` | Unlimited string | Long text... |
| \`BOOLEAN\` | True/False | TRUE |
| \`DATE\` | Date | '2024-01-15' |
| \`TIMESTAMP\` | Date and time | '2024-01-15 10:30:00' |
| \`DECIMAL(p,s)\` | Precise numbers | 99.99 |
| \`JSON\` | JSON data | '{"key": "value"}' |

### Constraints

\`\`\`sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,           -- Auto ID, must be unique
    name VARCHAR(100) NOT NULL,       -- Cannot be empty
    email VARCHAR(255) UNIQUE,        -- Must be unique
    price DECIMAL(10,2) CHECK (price > 0),  -- Must be positive
    category_id INTEGER REFERENCES categories(id)  -- Foreign key
);
\`\`\`

| Constraint | Purpose |
|------------|---------|
| \`PRIMARY KEY\` | Unique identifier |
| \`NOT NULL\` | Cannot be empty |
| \`UNIQUE\` | No duplicates |
| \`CHECK\` | Custom validation |
| \`REFERENCES\` | Foreign key |
| \`DEFAULT\` | Default value |

<tip>
💡 Always use PRIMARY KEY on every table! It's essential for identifying and relating records.
</tip>

### Practice Database

Let's create a sample database:

\`\`\`sql
-- Create database
CREATE DATABASE shop;
\\c shop

-- Create tables
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category_id INTEGER REFERENCES categories(id),
    in_stock BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO categories (name) VALUES 
    ('Electronics'),
    ('Books'),
    ('Clothing');

INSERT INTO products (name, price, category_id) VALUES
    ('Laptop', 999.99, 1),
    ('Headphones', 79.99, 1),
    ('SQL Guide', 29.99, 2),
    ('T-Shirt', 19.99, 3);
\`\`\`

<warning>
⚠️ In production, never use default PostgreSQL passwords! Always configure secure authentication.
</warning>

You're ready to start querying! 🎉
          `}]},{id:2,title:"SELECT Fundamentals",description:"Retrieving data from databases",lessons:[{id:"2-1",title:"Basic SELECT Queries",duration:"12 min",content:`
## Reading Data with SELECT 📖

SELECT is the most used SQL command. Let's master it!

### The SELECT Statement

\`\`\`sql
SELECT column1, column2 FROM table_name;
\`\`\`

### Select All Columns

\`\`\`sql
-- Get everything from users table
SELECT * FROM users;

-- Result:
-- id | name    | email             | age
-- ---|---------|-------------------|----
-- 1  | Alice   | alice@email.com   | 28
-- 2  | Bob     | bob@email.com     | 34
-- 3  | Charlie | charlie@mail.io   | 22
\`\`\`

### Select Specific Columns

\`\`\`sql
-- Only get names and emails
SELECT name, email FROM users;

-- Result:
-- name    | email
-- --------|------------------
-- Alice   | alice@email.com
-- Bob     | bob@email.com
-- Charlie | charlie@mail.io
\`\`\`

<tip>
💡 Avoid SELECT * in production! It's slower and returns data you might not need. Be specific.
</tip>

### Column Aliases

\`\`\`sql
-- Rename columns in output
SELECT 
    name AS user_name,
    email AS contact_email
FROM users;

-- Result:
-- user_name | contact_email
-- ----------|------------------
-- Alice     | alice@email.com
\`\`\`

### WHERE Clause — Filtering Results

\`\`\`sql
-- Get users older than 25
SELECT * FROM users WHERE age > 25;

-- Get user with specific email
SELECT * FROM users WHERE email = 'alice@email.com';

-- Get users with age between 20 and 30
SELECT * FROM users WHERE age BETWEEN 20 AND 30;
\`\`\`

### Comparison Operators

| Operator | Meaning |
|----------|---------|
| \`=\` | Equal |
| \`<>\` or \`!=\` | Not equal |
| \`<\` | Less than |
| \`>\` | Greater than |
| \`<=\` | Less than or equal |
| \`>=\` | Greater than or equal |
| \`BETWEEN\` | Range (inclusive) |
| \`IN\` | Match any in list |
| \`LIKE\` | Pattern matching |
| \`IS NULL\` | Check for NULL |

### Multiple Conditions

\`\`\`sql
-- AND: Both conditions must be true
SELECT * FROM users 
WHERE age > 25 AND name = 'Bob';

-- OR: Either condition can be true
SELECT * FROM users 
WHERE age < 25 OR age > 30;

-- Combining with parentheses
SELECT * FROM products 
WHERE (category_id = 1 OR category_id = 2) 
  AND price < 100;
\`\`\`

### IN Operator

\`\`\`sql
-- Match any value in list
SELECT * FROM users 
WHERE name IN ('Alice', 'Bob', 'Charlie');

-- Equivalent to:
SELECT * FROM users 
WHERE name = 'Alice' 
   OR name = 'Bob' 
   OR name = 'Charlie';
\`\`\`

### LIKE — Pattern Matching

\`\`\`sql
-- % matches any characters
SELECT * FROM users WHERE name LIKE 'A%';     -- Starts with A
SELECT * FROM users WHERE email LIKE '%@gmail.com';  -- Gmail users
SELECT * FROM users WHERE name LIKE '%li%';   -- Contains 'li'

-- _ matches single character
SELECT * FROM products WHERE name LIKE 'T-____';  -- T-Shirt, T-Pants
\`\`\`

### NULL Values

\`\`\`sql
-- Find rows with NULL
SELECT * FROM users WHERE phone IS NULL;

-- Find rows without NULL
SELECT * FROM users WHERE phone IS NOT NULL;
\`\`\`

<warning>
⚠️ NULL is not equal to anything, not even itself! Use IS NULL, not = NULL.
</warning>

### DISTINCT — Remove Duplicates

\`\`\`sql
-- Get unique categories
SELECT DISTINCT category_id FROM products;

-- Count unique values
SELECT COUNT(DISTINCT category_id) FROM products;
\`\`\`

SELECT is your window into the data! 👁️
          `},{id:"2-2",title:"Sorting and Limiting Results",duration:"10 min",content:`
## Organizing Your Results 📋

Learn to sort, limit, and paginate data!

### ORDER BY — Sorting Results

\`\`\`sql
-- Sort by name (A-Z, ascending is default)
SELECT * FROM users ORDER BY name;

-- Sort by age (descending, highest first)
SELECT * FROM users ORDER BY age DESC;

-- Multiple columns
SELECT * FROM products 
ORDER BY category_id ASC, price DESC;
\`\`\`

### Sorting Direction

| Keyword | Meaning | Example |
|---------|---------|---------|
| \`ASC\` | Ascending (default) | A→Z, 1→100 |
| \`DESC\` | Descending | Z→A, 100→1 |

\`\`\`sql
-- Newest users first
SELECT * FROM users ORDER BY created_at DESC;

-- Cheapest products first
SELECT * FROM products ORDER BY price ASC;
\`\`\`

### LIMIT — Restrict Number of Rows

\`\`\`sql
-- Get only 5 users
SELECT * FROM users LIMIT 5;

-- Get top 10 most expensive products
SELECT * FROM products 
ORDER BY price DESC 
LIMIT 10;
\`\`\`

### OFFSET — Skip Rows (Pagination)

\`\`\`sql
-- Skip first 10, get next 10 (page 2)
SELECT * FROM products 
ORDER BY id 
LIMIT 10 OFFSET 10;

-- Page 3 (rows 21-30)
SELECT * FROM products 
ORDER BY id 
LIMIT 10 OFFSET 20;
\`\`\`

\`\`\`
Pagination Formula:
OFFSET = (page_number - 1) * page_size
LIMIT = page_size

Page 1: LIMIT 10 OFFSET 0
Page 2: LIMIT 10 OFFSET 10
Page 3: LIMIT 10 OFFSET 20
\`\`\`

<tip>
💡 Always use ORDER BY with LIMIT/OFFSET! Without ordering, the results are unpredictable.
</tip>

### Practical Examples

\`\`\`sql
-- Top 5 oldest users
SELECT name, age FROM users 
ORDER BY age DESC 
LIMIT 5;

-- Recently created products (last week)
SELECT * FROM products 
WHERE created_at > CURRENT_DATE - INTERVAL '7 days'
ORDER BY created_at DESC;

-- Search with pagination
SELECT * FROM products 
WHERE name LIKE '%laptop%' 
ORDER BY price ASC 
LIMIT 20 OFFSET 0;
\`\`\`

### NULL Sorting

\`\`\`sql
-- NULLs first
SELECT * FROM users ORDER BY phone NULLS FIRST;

-- NULLs last (default for ASC)
SELECT * FROM users ORDER BY phone NULLS LAST;
\`\`\`

### Combining Everything

\`\`\`sql
-- Full query example
SELECT 
    id,
    name,
    price,
    category_id
FROM products
WHERE 
    price < 100 
    AND in_stock = true
ORDER BY 
    category_id ASC,
    price DESC
LIMIT 20
OFFSET 0;
\`\`\`

### Query Execution Order

SQL doesn't execute in written order:

\`\`\`
Written:  SELECT → FROM → WHERE → ORDER BY → LIMIT
Executed: FROM → WHERE → SELECT → ORDER BY → LIMIT

1. FROM     - Get the table
2. WHERE    - Filter rows
3. SELECT   - Pick columns
4. ORDER BY - Sort results
5. LIMIT    - Restrict count
\`\`\`

<warning>
⚠️ For large datasets, OFFSET becomes slow because the database still has to scan all skipped rows. Consider cursor-based pagination for better performance!
</warning>

### Performance Tip

\`\`\`sql
-- Instead of OFFSET for pagination, use WHERE on indexed column:
-- Page 1
SELECT * FROM products WHERE id > 0 ORDER BY id LIMIT 10;

-- Page 2 (using last ID from page 1)
SELECT * FROM products WHERE id > 10 ORDER BY id LIMIT 10;
\`\`\`

Your queries are now organized! 🎯
          `}]},{id:3,title:"Aggregate Functions",description:"Calculating summaries and statistics",lessons:[{id:"3-1",title:"COUNT, SUM, AVG, MIN, MAX",duration:"12 min",content:`
## Crunching Numbers 🔢

Aggregate functions summarize data across multiple rows!

### The Big Five

| Function | Purpose | Example |
|----------|---------|---------|
| \`COUNT()\` | Count rows | Total users |
| \`SUM()\` | Add values | Total revenue |
| \`AVG()\` | Average | Average price |
| \`MIN()\` | Minimum value | Cheapest product |
| \`MAX()\` | Maximum value | Highest score |

### COUNT — Counting Rows

\`\`\`sql
-- Count all rows
SELECT COUNT(*) FROM users;
-- Result: 100

-- Count non-NULL values
SELECT COUNT(email) FROM users;

-- Count distinct values
SELECT COUNT(DISTINCT category_id) FROM products;
-- Result: 5 (unique categories)
\`\`\`

### SUM — Adding Values

\`\`\`sql
-- Total of all prices
SELECT SUM(price) FROM products;
-- Result: 5432.50

-- Total revenue (quantity × price)
SELECT SUM(quantity * price) AS total_revenue 
FROM order_items;
\`\`\`

### AVG — Calculating Averages

\`\`\`sql
-- Average product price
SELECT AVG(price) FROM products;
-- Result: 49.95

-- Average with rounding
SELECT ROUND(AVG(price), 2) AS avg_price 
FROM products;
-- Result: 49.95
\`\`\`

### MIN and MAX

\`\`\`sql
-- Cheapest and most expensive
SELECT 
    MIN(price) AS cheapest,
    MAX(price) AS most_expensive
FROM products;
-- Result: 9.99 | 999.99

-- First and last signup
SELECT 
    MIN(created_at) AS first_user,
    MAX(created_at) AS newest_user
FROM users;
\`\`\`

### Combining Aggregates

\`\`\`sql
SELECT 
    COUNT(*) AS total_products,
    SUM(price) AS total_value,
    AVG(price) AS average_price,
    MIN(price) AS min_price,
    MAX(price) AS max_price
FROM products
WHERE in_stock = true;
\`\`\`

### Aggregates with WHERE

\`\`\`sql
-- Count electronics only
SELECT COUNT(*) FROM products 
WHERE category_id = 1;

-- Average price of in-stock items
SELECT AVG(price) FROM products 
WHERE in_stock = true;

-- Total revenue this month
SELECT SUM(amount) FROM orders 
WHERE created_at >= DATE_TRUNC('month', CURRENT_DATE);
\`\`\`

<tip>
💡 Aggregates ignore NULL values (except COUNT(*)). This is usually what you want!
</tip>

### NULL Handling

\`\`\`sql
-- COUNT(*) counts all rows
SELECT COUNT(*) FROM users;  -- 100

-- COUNT(column) skips NULLs
SELECT COUNT(phone) FROM users;  -- 75 (25 have no phone)

-- AVG ignores NULLs
SELECT AVG(rating) FROM reviews;  -- Only averages non-NULL ratings
\`\`\`

### Conditional Counting

\`\`\`sql
-- Count by condition using FILTER
SELECT 
    COUNT(*) FILTER (WHERE status = 'completed') AS completed,
    COUNT(*) FILTER (WHERE status = 'pending') AS pending,
    COUNT(*) FILTER (WHERE status = 'cancelled') AS cancelled
FROM orders;

-- Or using CASE
SELECT 
    SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS completed,
    SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS pending
FROM orders;
\`\`\`

<warning>
⚠️ You can't mix aggregate and non-aggregate columns without GROUP BY! This will error: SELECT name, COUNT(*) FROM users;
</warning>

### Practical Examples

\`\`\`sql
-- Dashboard statistics
SELECT 
    COUNT(*) AS total_orders,
    SUM(amount) AS total_revenue,
    AVG(amount) AS avg_order_value,
    COUNT(DISTINCT customer_id) AS unique_customers
FROM orders
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days';

-- Product inventory summary
SELECT 
    COUNT(*) AS total_products,
    COUNT(*) FILTER (WHERE in_stock) AS in_stock,
    COUNT(*) FILTER (WHERE NOT in_stock) AS out_of_stock,
    SUM(price * quantity) AS inventory_value
FROM products;
\`\`\`

Aggregates turn rows into insights! 📊
          `},{id:"3-2",title:"GROUP BY and HAVING",duration:"12 min",content:`
## Grouping Data 📦

GROUP BY lets you aggregate within categories!

### GROUP BY Basics

\`\`\`sql
-- Count products per category
SELECT 
    category_id,
    COUNT(*) AS product_count
FROM products
GROUP BY category_id;

-- Result:
-- category_id | product_count
-- ------------|---------------
-- 1           | 25
-- 2           | 42
-- 3           | 18
\`\`\`

### How GROUP BY Works

\`\`\`
Before GROUP BY:
┌────┬──────────┬──────────────┐
│ id │ category │    price     │
├────┼──────────┼──────────────┤
│ 1  │ Books    │    29.99     │
│ 2  │ Books    │    19.99     │
│ 3  │ Tech     │   199.99     │
│ 4  │ Tech     │    49.99     │
│ 5  │ Books    │    39.99     │
└────┴──────────┴──────────────┘

After GROUP BY category:
┌──────────┬───────┬─────────────┐
│ category │ count │  avg_price  │
├──────────┼───────┼─────────────┤
│ Books    │   3   │    29.99    │
│ Tech     │   2   │   124.99    │
└──────────┴───────┴─────────────┘
\`\`\`

### Multiple Aggregates per Group

\`\`\`sql
SELECT 
    category_id,
    COUNT(*) AS count,
    SUM(price) AS total,
    AVG(price) AS average,
    MIN(price) AS cheapest,
    MAX(price) AS most_expensive
FROM products
GROUP BY category_id;
\`\`\`

### GROUP BY Multiple Columns

\`\`\`sql
-- Sales by year and month
SELECT 
    EXTRACT(YEAR FROM order_date) AS year,
    EXTRACT(MONTH FROM order_date) AS month,
    COUNT(*) AS order_count,
    SUM(amount) AS revenue
FROM orders
GROUP BY 
    EXTRACT(YEAR FROM order_date),
    EXTRACT(MONTH FROM order_date)
ORDER BY year, month;
\`\`\`

### HAVING — Filter Groups

WHERE filters rows BEFORE grouping.
HAVING filters groups AFTER grouping.

\`\`\`sql
-- Categories with more than 10 products
SELECT 
    category_id,
    COUNT(*) AS count
FROM products
GROUP BY category_id
HAVING COUNT(*) > 10;

-- Customers who spent over $1000
SELECT 
    customer_id,
    SUM(amount) AS total_spent
FROM orders
GROUP BY customer_id
HAVING SUM(amount) > 1000
ORDER BY total_spent DESC;
\`\`\`

### WHERE vs HAVING

\`\`\`sql
-- WHERE: filter rows before grouping
SELECT category_id, AVG(price)
FROM products
WHERE in_stock = true  -- Filter individual products
GROUP BY category_id;

-- HAVING: filter groups after aggregating
SELECT category_id, AVG(price)
FROM products
GROUP BY category_id
HAVING AVG(price) > 50;  -- Filter category averages

-- Combined
SELECT category_id, COUNT(*), AVG(price)
FROM products
WHERE in_stock = true           -- Only in-stock products
GROUP BY category_id
HAVING COUNT(*) > 5             -- Only categories with 5+ products
ORDER BY AVG(price) DESC;
\`\`\`

<tip>
💡 Remember: WHERE is for rows, HAVING is for groups. You can use both in the same query!
</tip>

### Common GROUP BY Patterns

\`\`\`sql
-- Most active users
SELECT 
    user_id,
    COUNT(*) AS post_count
FROM posts
GROUP BY user_id
ORDER BY post_count DESC
LIMIT 10;

-- Daily signups
SELECT 
    DATE(created_at) AS date,
    COUNT(*) AS signups
FROM users
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Revenue by product
SELECT 
    p.name,
    SUM(oi.quantity) AS units_sold,
    SUM(oi.quantity * oi.price) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
GROUP BY p.id, p.name
ORDER BY revenue DESC;
\`\`\`

<warning>
⚠️ Every non-aggregated column in SELECT must be in GROUP BY! This is a common error for beginners.
</warning>

### The Rule

\`\`\`sql
-- ❌ Error: name is not in GROUP BY
SELECT category_id, name, COUNT(*)
FROM products
GROUP BY category_id;

-- ✅ Correct: include name in GROUP BY
SELECT category_id, name, COUNT(*)
FROM products
GROUP BY category_id, name;

-- ✅ Or: only aggregate values
SELECT category_id, COUNT(*), MAX(name)
FROM products
GROUP BY category_id;
\`\`\`

GROUP BY unlocks powerful analytics! 📈
          `}]},{id:4,title:"JOIN Operations",description:"Combining data from multiple tables",lessons:[{id:"4-1",title:"Understanding JOINs",duration:"15 min",content:`
## Connecting Tables 🔗

JOINs combine data from multiple tables!

### Why JOINs?

Real databases split data across tables:

\`\`\`
orders table:             users table:
┌────┬─────────┬────────┐ ┌────┬─────────┐
│ id │ user_id │ amount │ │ id │  name   │
├────┼─────────┼────────┤ ├────┼─────────┤
│ 1  │    1    │  99.99 │ │ 1  │  Alice  │
│ 2  │    2    │  49.99 │ │ 2  │   Bob   │
│ 3  │    1    │  29.99 │ │ 3  │ Charlie │
└────┴─────────┴────────┘ └────┴─────────┘

JOIN result:
┌────┬─────────┬────────┬─────────┐
│ id │ user_id │ amount │  name   │
├────┼─────────┼────────┼─────────┤
│ 1  │    1    │  99.99 │  Alice  │
│ 2  │    2    │  49.99 │   Bob   │
│ 3  │    1    │  29.99 │  Alice  │
└────┴─────────┴────────┴─────────┘
\`\`\`

### INNER JOIN

Returns only matching rows from both tables:

\`\`\`sql
SELECT 
    orders.id,
    orders.amount,
    users.name
FROM orders
INNER JOIN users ON orders.user_id = users.id;
\`\`\`

### Using Aliases

\`\`\`sql
-- Table aliases make queries cleaner
SELECT 
    o.id AS order_id,
    o.amount,
    u.name AS customer_name
FROM orders o
INNER JOIN users u ON o.user_id = u.id;
\`\`\`

### Types of JOINs

\`\`\`
INNER JOIN:  Only matching rows
LEFT JOIN:   All left + matching right
RIGHT JOIN:  All right + matching left
FULL JOIN:   All rows from both tables
\`\`\`

\`\`\`
Table A    Table B       INNER JOIN    LEFT JOIN     RIGHT JOIN    FULL JOIN
┌───┐      ┌───┐         ┌───┐         ┌───┐         ┌───┐         ┌───┐
│ 1 │      │ 2 │         │ 2 │         │ 1 │         │ 2 │         │ 1 │
│ 2 │      │ 3 │         │ 3 │         │ 2 │         │ 3 │         │ 2 │
│ 3 │      │ 4 │         └───┘         │ 3 │         │ 4 │         │ 3 │
└───┘      └───┘                       └───┘         └───┘         │ 4 │
                                                                   └───┘
\`\`\`

### LEFT JOIN

Returns all rows from left table, matching rows from right:

\`\`\`sql
-- Get all users, even those without orders
SELECT 
    u.id,
    u.name,
    o.id AS order_id,
    o.amount
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- Result:
-- id | name    | order_id | amount
-- ---|---------|----------|-------
-- 1  | Alice   | 1        | 99.99
-- 1  | Alice   | 3        | 29.99
-- 2  | Bob     | 2        | 49.99
-- 3  | Charlie | NULL     | NULL  ← No orders!
\`\`\`

### RIGHT JOIN

Returns all rows from right table:

\`\`\`sql
-- Get all orders, even those with deleted users
SELECT 
    u.name,
    o.id AS order_id,
    o.amount
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;
\`\`\`

<tip>
💡 LEFT JOIN is much more common than RIGHT JOIN. You can always swap table order and use LEFT JOIN instead!
</tip>

### Finding Non-Matches

\`\`\`sql
-- Users who have never ordered
SELECT u.id, u.name
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;

-- Products never sold
SELECT p.id, p.name
FROM products p
LEFT JOIN order_items oi ON p.id = oi.product_id
WHERE oi.id IS NULL;
\`\`\`

### Multiple JOINs

\`\`\`sql
-- Orders with user and product details
SELECT 
    o.id AS order_id,
    u.name AS customer,
    p.name AS product,
    oi.quantity,
    oi.price
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.created_at >= CURRENT_DATE - INTERVAL '7 days';
\`\`\`

<warning>
⚠️ JOINs can be expensive on large tables! Always join on indexed columns (usually primary/foreign keys).
</warning>

### Self JOIN

Joining a table to itself:

\`\`\`sql
-- Find employees and their managers
SELECT 
    e.name AS employee,
    m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
\`\`\`

JOINs are essential for relational data! 🔗
          `},{id:"4-2",title:"Advanced JOIN Techniques",duration:"12 min",content:`
## Mastering JOINs 🎯

Let's explore advanced joining techniques!

### JOIN with Aggregates

\`\`\`sql
-- Total spending per customer
SELECT 
    u.id,
    u.name,
    COUNT(o.id) AS order_count,
    COALESCE(SUM(o.amount), 0) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
ORDER BY total_spent DESC;
\`\`\`

### COALESCE — Handle NULLs

\`\`\`sql
-- Replace NULL with default value
SELECT 
    u.name,
    COALESCE(SUM(o.amount), 0) AS total  -- 0 if NULL
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;
\`\`\`

### Joining on Multiple Conditions

\`\`\`sql
-- Join on multiple columns
SELECT *
FROM order_items oi
JOIN products p 
    ON oi.product_id = p.id 
    AND oi.warehouse_id = p.warehouse_id;

-- Join with date conditions
SELECT *
FROM subscriptions s
JOIN plans p ON s.plan_id = p.id
WHERE s.start_date <= CURRENT_DATE 
  AND (s.end_date IS NULL OR s.end_date > CURRENT_DATE);
\`\`\`

### Subqueries in JOINs

\`\`\`sql
-- Join with calculated data
SELECT 
    u.name,
    stats.order_count,
    stats.total_spent
FROM users u
JOIN (
    SELECT 
        user_id,
        COUNT(*) AS order_count,
        SUM(amount) AS total_spent
    FROM orders
    GROUP BY user_id
) stats ON u.id = stats.user_id;
\`\`\`

### CROSS JOIN

Every row with every row (Cartesian product):

\`\`\`sql
-- All combinations of sizes and colors
SELECT 
    s.size,
    c.color
FROM sizes s
CROSS JOIN colors c;

-- Result for 3 sizes × 4 colors = 12 rows
\`\`\`

<warning>
⚠️ CROSS JOIN can explode! 1000 rows × 1000 rows = 1,000,000 rows. Use carefully!
</warning>

### NATURAL JOIN

Automatically joins on matching column names:

\`\`\`sql
-- Joins on columns with same name
SELECT * FROM orders NATURAL JOIN users;

-- ⚠️ Risky! Better to be explicit:
SELECT * FROM orders o
JOIN users u ON o.user_id = u.id;
\`\`\`

### Practical Example: E-commerce Report

\`\`\`sql
-- Monthly sales report by category
SELECT 
    c.name AS category,
    DATE_TRUNC('month', o.created_at) AS month,
    COUNT(DISTINCT o.id) AS orders,
    SUM(oi.quantity) AS units_sold,
    SUM(oi.quantity * oi.price) AS revenue
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
JOIN categories c ON p.category_id = c.id
WHERE o.created_at >= '2024-01-01'
GROUP BY c.name, DATE_TRUNC('month', o.created_at)
ORDER BY month DESC, revenue DESC;
\`\`\`

### USING Clause

Shorthand when column names match:

\`\`\`sql
-- When join column has same name
SELECT * FROM orders
JOIN users USING (user_id);  -- Instead of ON orders.user_id = users.user_id
\`\`\`

### Performance Tips

\`\`\`sql
-- 1. Join on indexed columns
CREATE INDEX idx_orders_user_id ON orders(user_id);

-- 2. Filter early with WHERE
SELECT * FROM orders o
JOIN users u ON o.user_id = u.id
WHERE o.created_at >= '2024-01-01'  -- Reduces rows before join

-- 3. Select only needed columns
SELECT o.id, u.name  -- Not SELECT *

-- 4. Use EXPLAIN to analyze
EXPLAIN ANALYZE
SELECT * FROM orders o
JOIN users u ON o.user_id = u.id;
\`\`\`

<tip>
💡 When a query is slow, check if your JOIN columns have indexes! This is the #1 optimization.
</tip>

### Common JOIN Patterns

\`\`\`sql
-- Latest order per user
SELECT u.*, o.*
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN (
    SELECT user_id, MAX(created_at) AS max_date
    FROM orders
    GROUP BY user_id
) latest ON o.user_id = latest.user_id 
        AND o.created_at = latest.max_date;

-- Count with zero handling
SELECT 
    c.name,
    COUNT(p.id) AS product_count
FROM categories c
LEFT JOIN products p ON c.id = p.category_id
GROUP BY c.id, c.name;
\`\`\`

You're now a JOIN master! 🏆
          `}]},{id:5,title:"Data Modification",description:"INSERT, UPDATE, and DELETE operations",lessons:[{id:"5-1",title:"INSERT — Adding Data",duration:"10 min",content:`
## Creating New Records ✨

INSERT adds new rows to your tables!

### Basic INSERT

\`\`\`sql
-- Insert single row
INSERT INTO users (name, email, age) 
VALUES ('David', 'david@email.com', 25);

-- Insert with all columns (order matters!)
INSERT INTO users 
VALUES (DEFAULT, 'Eve', 'eve@email.com', 30, CURRENT_TIMESTAMP);
\`\`\`

### Insert Multiple Rows

\`\`\`sql
INSERT INTO products (name, price, category_id) VALUES
    ('Keyboard', 79.99, 1),
    ('Mouse', 29.99, 1),
    ('Monitor', 299.99, 1),
    ('USB Cable', 9.99, 1);
\`\`\`

### RETURNING Clause

Get back the inserted data:

\`\`\`sql
-- Get the new ID
INSERT INTO users (name, email) 
VALUES ('Frank', 'frank@email.com')
RETURNING id;
-- Result: 42

-- Get all inserted data
INSERT INTO users (name, email) 
VALUES ('Grace', 'grace@email.com')
RETURNING *;
\`\`\`

<tip>
💡 RETURNING is incredibly useful for getting auto-generated IDs after insert!
</tip>

### INSERT from SELECT

Copy data from another table:

\`\`\`sql
-- Backup old orders
INSERT INTO orders_archive (id, user_id, amount, created_at)
SELECT id, user_id, amount, created_at
FROM orders
WHERE created_at < '2023-01-01';

-- Create summary table
INSERT INTO monthly_stats (month, total_orders, revenue)
SELECT 
    DATE_TRUNC('month', created_at),
    COUNT(*),
    SUM(amount)
FROM orders
GROUP BY DATE_TRUNC('month', created_at);
\`\`\`

### Handling Duplicates

\`\`\`sql
-- Insert or ignore (PostgreSQL)
INSERT INTO users (email, name) 
VALUES ('existing@email.com', 'User')
ON CONFLICT (email) DO NOTHING;

-- Insert or update (upsert)
INSERT INTO users (email, name, last_login) 
VALUES ('user@email.com', 'User', NOW())
ON CONFLICT (email) 
DO UPDATE SET 
    name = EXCLUDED.name,
    last_login = EXCLUDED.last_login;
\`\`\`

### Default Values

\`\`\`sql
-- Using DEFAULT keyword
INSERT INTO products (name, price, in_stock) 
VALUES ('New Product', 19.99, DEFAULT);

-- Columns with defaults can be omitted
INSERT INTO products (name, price) 
VALUES ('Product', 29.99);
-- in_stock uses default (true), created_at uses default (NOW())
\`\`\`

<warning>
⚠️ Always validate data before inserting! Use application-level validation and database constraints.
</warning>

### Common INSERT Patterns

\`\`\`sql
-- Insert with subquery for foreign key
INSERT INTO orders (user_id, amount)
SELECT id, 99.99
FROM users
WHERE email = 'alice@email.com';

-- Bulk insert from application
INSERT INTO logs (level, message, created_at) VALUES
    ('INFO', 'User logged in', NOW()),
    ('DEBUG', 'Cache hit', NOW()),
    ('ERROR', 'Connection failed', NOW());
\`\`\`

### INSERT Performance

\`\`\`sql
-- Slow: many individual inserts
INSERT INTO table VALUES (1, 'a');
INSERT INTO table VALUES (2, 'b');
INSERT INTO table VALUES (3, 'c');

-- Fast: batch insert
INSERT INTO table VALUES 
    (1, 'a'),
    (2, 'b'),
    (3, 'c');

-- Even faster: COPY command (PostgreSQL)
COPY users (name, email) FROM '/path/to/data.csv' WITH CSV;
\`\`\`

INSERT is how data enters your database! 📥
          `},{id:"5-2",title:"UPDATE and DELETE",duration:"12 min",content:`
## Modifying and Removing Data ✏️

UPDATE changes existing data. DELETE removes it.

### Basic UPDATE

\`\`\`sql
-- Update single column
UPDATE users 
SET age = 26 
WHERE id = 1;

-- Update multiple columns
UPDATE users 
SET 
    name = 'Alice Smith',
    email = 'alice.smith@email.com',
    updated_at = NOW()
WHERE id = 1;
\`\`\`

<warning>
⚠️ NEVER forget the WHERE clause! Without it, UPDATE affects ALL rows!
</warning>

\`\`\`sql
-- ❌ DANGER: Updates every user!
UPDATE users SET status = 'inactive';

-- ✅ Safe: Updates only matching rows
UPDATE users SET status = 'inactive' WHERE last_login < '2023-01-01';
\`\`\`

### UPDATE with Calculations

\`\`\`sql
-- Increase all prices by 10%
UPDATE products 
SET price = price * 1.10 
WHERE category_id = 1;

-- Increment a counter
UPDATE posts 
SET view_count = view_count + 1 
WHERE id = 42;
\`\`\`

### UPDATE with RETURNING

\`\`\`sql
-- See what was updated
UPDATE products 
SET price = price * 0.9 
WHERE in_stock = false
RETURNING id, name, price;
\`\`\`

### UPDATE with Subquery

\`\`\`sql
-- Update based on another table
UPDATE products 
SET price = (
    SELECT AVG(price) 
    FROM products 
    WHERE category_id = products.category_id
)
WHERE price IS NULL;

-- Update from JOIN
UPDATE orders o
SET status = 'premium'
FROM users u
WHERE o.user_id = u.id AND u.tier = 'gold';
\`\`\`

### Basic DELETE

\`\`\`sql
-- Delete specific rows
DELETE FROM users WHERE id = 5;

-- Delete with conditions
DELETE FROM orders 
WHERE status = 'cancelled' 
  AND created_at < '2023-01-01';
\`\`\`

<warning>
⚠️ DELETE is permanent! There's no undo. Always WHERE clause!
</warning>

### DELETE with RETURNING

\`\`\`sql
-- See what was deleted
DELETE FROM sessions 
WHERE expires_at < NOW()
RETURNING id, user_id;
\`\`\`

### DELETE with Subquery

\`\`\`sql
-- Delete orders from inactive users
DELETE FROM orders
WHERE user_id IN (
    SELECT id FROM users WHERE status = 'deleted'
);

-- Delete orphaned records
DELETE FROM order_items
WHERE order_id NOT IN (SELECT id FROM orders);
\`\`\`

### TRUNCATE — Delete All Rows

\`\`\`sql
-- Fast delete all rows (resets auto-increment)
TRUNCATE TABLE logs;

-- Truncate with cascade
TRUNCATE TABLE orders CASCADE;
\`\`\`

| Command | Speed | Rollback | Triggers | Reset ID |
|---------|-------|----------|----------|----------|
| DELETE | Slow | Yes | Yes | No |
| TRUNCATE | Fast | Limited | No | Yes |

### Safe Update/Delete Practices

\`\`\`sql
-- 1. Test with SELECT first
SELECT * FROM users WHERE last_login < '2023-01-01';
-- Then:
DELETE FROM users WHERE last_login < '2023-01-01';

-- 2. Use transactions
BEGIN;
DELETE FROM orders WHERE status = 'test';
-- Check results...
ROLLBACK;  -- or COMMIT;

-- 3. Add LIMIT for safety
DELETE FROM logs 
WHERE created_at < '2023-01-01' 
LIMIT 1000;  -- Delete in batches
\`\`\`

### Soft Delete Pattern

\`\`\`sql
-- Instead of DELETE, mark as deleted
ALTER TABLE users ADD COLUMN deleted_at TIMESTAMP;

-- "Delete" a user
UPDATE users SET deleted_at = NOW() WHERE id = 5;

-- Query active users only
SELECT * FROM users WHERE deleted_at IS NULL;
\`\`\`

<tip>
💡 Soft deletes preserve data and allow recovery. Consider this pattern for important data!
</tip>

Modify your data with confidence! 💪
          `}]},{id:6,title:"Database Design",description:"Creating well-structured databases",lessons:[{id:"6-1",title:"Normalization",duration:"12 min",content:`
## Organizing Your Data 🗂️

Normalization eliminates redundancy and improves data integrity!

### Why Normalize?

\`\`\`
❌ Unnormalized (data repeated):
┌─────────┬────────────┬─────────────┬──────────────┐
│ order_id│ customer   │ customer_email│ product     │
├─────────┼────────────┼─────────────┼──────────────┤
│ 1       │ Alice      │ alice@mail  │ Laptop       │
│ 2       │ Alice      │ alice@mail  │ Mouse        │ ← Alice repeated!
│ 3       │ Bob        │ bob@mail    │ Keyboard     │
└─────────┴────────────┴─────────────┴──────────────┘

Problem: Update Alice's email = update multiple rows!

✅ Normalized (separate tables):
customers:              orders:
┌────┬───────┬──────────┐   ┌────┬─────────────┬─────────┐
│ id │ name  │ email    │   │ id │ customer_id │ product │
├────┼───────┼──────────┤   ├────┼─────────────┼─────────┤
│ 1  │ Alice │ alice@   │   │ 1  │ 1           │ Laptop  │
│ 2  │ Bob   │ bob@     │   │ 2  │ 1           │ Mouse   │
└────┴───────┴──────────┘   │ 3  │ 2           │ Keyboard│
                            └────┴─────────────┴─────────┘
\`\`\`

### Normal Forms

| Form | Rule | Purpose |
|------|------|---------|
| **1NF** | No repeating groups | Single values per cell |
| **2NF** | No partial dependencies | Every column relates to full key |
| **3NF** | No transitive dependencies | Columns only depend on key |

### First Normal Form (1NF)

Each cell has one value, no arrays:

\`\`\`sql
-- ❌ Violates 1NF (multiple values in one cell)
┌────┬──────────────────┐
│ id │ phone_numbers    │
├────┼──────────────────┤
│ 1  │ 555-1234, 555-5678│
└────┴──────────────────┘

-- ✅ 1NF compliant (separate rows)
┌────┬─────────┬──────────┐
│ id │ user_id │ phone    │
├────┼─────────┼──────────┤
│ 1  │ 1       │ 555-1234 │
│ 2  │ 1       │ 555-5678 │
└────┴─────────┴──────────┘
\`\`\`

### Second Normal Form (2NF)

Every non-key column depends on the entire primary key:

\`\`\`sql
-- ❌ Violates 2NF (product_name depends only on product_id)
orders: (order_id, product_id) → product_name, quantity
                   ↓
         product_name doesn't need order_id!

-- ✅ 2NF compliant (separate tables)
products: product_id → product_name
order_items: order_id, product_id → quantity
\`\`\`

### Third Normal Form (3NF)

No transitive dependencies:

\`\`\`sql
-- ❌ Violates 3NF
employees: id → name, department_id, department_name
           department_name depends on department_id, not id!

-- ✅ 3NF compliant
employees: id → name, department_id
departments: department_id → department_name
\`\`\`

### Practical Example

\`\`\`sql
-- Unnormalized order table
CREATE TABLE orders_bad (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100),
    customer_phone VARCHAR(20),
    product_1_name VARCHAR(100),
    product_1_price DECIMAL,
    product_1_qty INTEGER,
    product_2_name VARCHAR(100),  -- Repeating groups!
    product_2_price DECIMAL,
    product_2_qty INTEGER
);

-- Normalized design
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER,
    price DECIMAL(10,2)  -- Price at time of order
);
\`\`\`

<tip>
💡 Aim for 3NF in most cases. It's the sweet spot between normalization and usability.
</tip>

### When to Denormalize

Sometimes you add redundancy for performance:

\`\`\`sql
-- Denormalized for speed (cached totals)
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    item_count INTEGER,      -- Denormalized!
    total_amount DECIMAL     -- Denormalized!
);
\`\`\`

<warning>
⚠️ Denormalization trades disk space for speed, but you must keep redundant data in sync!
</warning>

Good design = good performance! 📐
          `},{id:"6-2",title:"Indexes & Performance",duration:"12 min",content:`
## Making Queries Fast ⚡

Indexes are the key to database performance!

### What is an Index?

Like a book index — find content without reading every page:

\`\`\`
Without index: Scan 1,000,000 rows (slow!)
With index: Jump directly to matching rows (fast!)

Book analogy:
- Table = book content
- Index = index at back of book
- Query = "find chapter on SQL"
\`\`\`

### Creating Indexes

\`\`\`sql
-- Create index on single column
CREATE INDEX idx_users_email ON users(email);

-- Create index on multiple columns
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- Unique index (enforces uniqueness)
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- Partial index (only certain rows)
CREATE INDEX idx_orders_pending ON orders(created_at)
WHERE status = 'pending';
\`\`\`

### When to Create Indexes

| Create Index When | Example |
|-------------------|---------|
| Column in WHERE | \`WHERE email = ?\` |
| Column in JOIN | \`ON orders.user_id = users.id\` |
| Column in ORDER BY | \`ORDER BY created_at\` |
| Column in GROUP BY | \`GROUP BY category_id\` |
| Unique constraint needed | email must be unique |

### Check Query Performance

\`\`\`sql
-- EXPLAIN shows the query plan
EXPLAIN SELECT * FROM users WHERE email = 'alice@email.com';

-- EXPLAIN ANALYZE actually runs the query
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'alice@email.com';

-- Look for:
-- "Seq Scan" = full table scan (usually slow)
-- "Index Scan" = using index (fast!)
\`\`\`

### Index Types

| Type | Best For | Example |
|------|----------|---------|
| **B-tree** | Equality, ranges | = < > BETWEEN |
| **Hash** | Equality only | = |
| **GIN** | Arrays, full-text | @> LIKE |
| **GiST** | Geometric, text | Spatial data |

\`\`\`sql
-- B-tree (default)
CREATE INDEX idx_users_email ON users(email);

-- GIN for array search
CREATE INDEX idx_posts_tags ON posts USING GIN(tags);

-- Full-text search
CREATE INDEX idx_articles_content ON articles 
USING GIN(to_tsvector('english', content));
\`\`\`

### Composite Indexes

\`\`\`sql
-- Order matters!
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- This index helps with:
WHERE user_id = 1                         ✅
WHERE user_id = 1 AND created_at > '...'  ✅
WHERE created_at > '...'                  ❌ (user_id not used)

-- Rule: leftmost columns can be used independently
\`\`\`

### Index Maintenance

\`\`\`sql
-- View index size
SELECT 
    indexname,
    pg_size_pretty(pg_relation_size(indexname::regclass)) AS size
FROM pg_indexes
WHERE tablename = 'orders';

-- Find unused indexes
SELECT 
    indexrelname,
    idx_scan
FROM pg_stat_user_indexes
WHERE idx_scan = 0;

-- Drop unused index
DROP INDEX idx_unused;

-- Rebuild index (if bloated)
REINDEX INDEX idx_users_email;
\`\`\`

<warning>
⚠️ Indexes slow down INSERT/UPDATE/DELETE! Don't over-index. Every write updates all relevant indexes.
</warning>

### Performance Best Practices

\`\`\`sql
-- 1. Avoid SELECT *
SELECT id, name FROM users;  -- Not SELECT *

-- 2. Use LIMIT
SELECT * FROM logs ORDER BY created_at DESC LIMIT 100;

-- 3. Avoid LIKE with leading wildcard
WHERE name LIKE 'john%'    ✅ Uses index
WHERE name LIKE '%john'    ❌ Can't use index

-- 4. Avoid functions on indexed columns
WHERE LOWER(email) = '...'        ❌
WHERE email = LOWER('...')        ✅

-- 5. Use EXISTS instead of IN for large subqueries
WHERE EXISTS (SELECT 1 FROM orders WHERE user_id = users.id)
\`\`\`

<tip>
💡 The general rule: index columns you search/filter/join on, but not too many. Monitor slow queries and add indexes as needed.
</tip>

Fast queries make happy users! 🚀
          `}]},{id:7,title:"Advanced SQL",description:"Window functions, CTEs, and more",lessons:[{id:"7-1",title:"Window Functions",duration:"15 min",content:`
## Analytics Power Tools 📊

Window functions perform calculations across rows!

### What are Window Functions?

Regular aggregates collapse rows. Window functions keep them:

\`\`\`sql
-- Regular aggregate: one result row
SELECT AVG(salary) FROM employees;
-- Result: 55000

-- Window function: every row with its calculation
SELECT 
    name, 
    salary,
    AVG(salary) OVER() AS avg_salary
FROM employees;
-- Result:
-- Alice  | 50000 | 55000
-- Bob    | 60000 | 55000
-- Carol  | 55000 | 55000
\`\`\`

### OVER Clause

\`\`\`sql
-- OVER() = entire table as window
SELECT name, salary, AVG(salary) OVER() FROM employees;

-- PARTITION BY = separate windows per group
SELECT 
    name, 
    department,
    salary,
    AVG(salary) OVER(PARTITION BY department) AS dept_avg
FROM employees;
\`\`\`

### Common Window Functions

| Function | Purpose | Example |
|----------|---------|---------|
| \`ROW_NUMBER()\` | Sequential number | 1, 2, 3... |
| \`RANK()\` | Rank with gaps | 1, 2, 2, 4... |
| \`DENSE_RANK()\` | Rank without gaps | 1, 2, 2, 3... |
| \`LAG()\` | Previous row value | Compare to yesterday |
| \`LEAD()\` | Next row value | Compare to tomorrow |
| \`FIRST_VALUE()\` | First in window | Top performer |
| \`LAST_VALUE()\` | Last in window | Bottom performer |
| \`SUM() OVER\` | Running total | Cumulative sum |

### ROW_NUMBER, RANK, DENSE_RANK

\`\`\`sql
SELECT 
    name,
    score,
    ROW_NUMBER() OVER(ORDER BY score DESC) AS row_num,
    RANK() OVER(ORDER BY score DESC) AS rank,
    DENSE_RANK() OVER(ORDER BY score DESC) AS dense_rank
FROM players;

-- Result:
-- name  | score | row_num | rank | dense_rank
-- Alice |  100  |    1    |  1   |     1
-- Bob   |  100  |    2    |  1   |     1
-- Carol |   90  |    3    |  3   |     2
-- Dave  |   85  |    4    |  4   |     3
\`\`\`

### Running Totals

\`\`\`sql
SELECT 
    date,
    amount,
    SUM(amount) OVER(ORDER BY date) AS running_total
FROM transactions;

-- Result:
-- date       | amount | running_total
-- 2024-01-01 | 100    | 100
-- 2024-01-02 | 50     | 150
-- 2024-01-03 | 75     | 225
\`\`\`

### LAG and LEAD

\`\`\`sql
-- Compare to previous/next value
SELECT 
    date,
    revenue,
    LAG(revenue) OVER(ORDER BY date) AS prev_day,
    revenue - LAG(revenue) OVER(ORDER BY date) AS change
FROM daily_sales;

-- Result:
-- date       | revenue | prev_day | change
-- 2024-01-01 | 1000    | NULL     | NULL
-- 2024-01-02 | 1200    | 1000     | 200
-- 2024-01-03 | 1100    | 1200     | -100
\`\`\`

### Window Frame

\`\`\`sql
-- 3-day moving average
SELECT 
    date,
    amount,
    AVG(amount) OVER(
        ORDER BY date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_3day
FROM sales;
\`\`\`

### Practical Examples

\`\`\`sql
-- Top 3 products per category
WITH ranked AS (
    SELECT 
        category_id,
        name,
        price,
        ROW_NUMBER() OVER(
            PARTITION BY category_id 
            ORDER BY price DESC
        ) AS rank
    FROM products
)
SELECT * FROM ranked WHERE rank <= 3;

-- Percentage of total
SELECT 
    category,
    revenue,
    revenue * 100.0 / SUM(revenue) OVER() AS pct_of_total
FROM category_sales;

-- Month-over-month growth
SELECT 
    month,
    revenue,
    LAG(revenue) OVER(ORDER BY month) AS prev_month,
    (revenue - LAG(revenue) OVER(ORDER BY month)) / 
        LAG(revenue) OVER(ORDER BY month) * 100 AS growth_pct
FROM monthly_sales;
\`\`\`

<tip>
💡 Window functions are game-changers for analytics! They solve problems that would otherwise require complex subqueries or multiple passes.
</tip>

Window functions = analytics superpowers! 🦸
          `},{id:"7-2",title:"CTEs and Subqueries",duration:"12 min",content:`
## Writing Clean, Complex Queries 🧩

CTEs make complex queries readable and reusable!

### What is a CTE?

**Common Table Expression** — a named temporary result set:

\`\`\`sql
-- CTE syntax
WITH cte_name AS (
    SELECT ...
)
SELECT * FROM cte_name;
\`\`\`

### CTE vs Subquery

\`\`\`sql
-- Subquery (harder to read)
SELECT *
FROM (
    SELECT user_id, SUM(amount) AS total
    FROM orders
    GROUP BY user_id
) AS user_totals
WHERE total > 1000;

-- CTE (cleaner!)
WITH user_totals AS (
    SELECT user_id, SUM(amount) AS total
    FROM orders
    GROUP BY user_id
)
SELECT * FROM user_totals WHERE total > 1000;
\`\`\`

### Multiple CTEs

\`\`\`sql
WITH 
active_users AS (
    SELECT id, name 
    FROM users 
    WHERE last_login > CURRENT_DATE - INTERVAL '30 days'
),
user_orders AS (
    SELECT user_id, COUNT(*) AS order_count
    FROM orders
    GROUP BY user_id
)
SELECT 
    au.name,
    COALESCE(uo.order_count, 0) AS orders
FROM active_users au
LEFT JOIN user_orders uo ON au.id = uo.user_id;
\`\`\`

### CTEs Reference Each Other

\`\`\`sql
WITH 
raw_data AS (
    SELECT * FROM sales WHERE year = 2024
),
monthly AS (
    SELECT 
        DATE_TRUNC('month', date) AS month,
        SUM(amount) AS total
    FROM raw_data
    GROUP BY DATE_TRUNC('month', date)
),
with_growth AS (
    SELECT 
        month,
        total,
        LAG(total) OVER(ORDER BY month) AS prev_month,
        total - LAG(total) OVER(ORDER BY month) AS growth
    FROM monthly
)
SELECT * FROM with_growth;
\`\`\`

### Recursive CTEs

For hierarchical data (trees, graphs):

\`\`\`sql
-- Employee hierarchy
WITH RECURSIVE org_chart AS (
    -- Base case: top-level employees
    SELECT id, name, manager_id, 1 AS level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive case: employees with managers
    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart ORDER BY level, name;
\`\`\`

### Subquery Types

\`\`\`sql
-- Scalar subquery (returns single value)
SELECT 
    name,
    salary,
    (SELECT AVG(salary) FROM employees) AS company_avg
FROM employees;

-- Row subquery (returns single row)
SELECT * FROM products
WHERE (category_id, price) = (
    SELECT category_id, MAX(price)
    FROM products
    GROUP BY category_id
    LIMIT 1
);

-- Table subquery (returns multiple rows)
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders WHERE amount > 100);
\`\`\`

### EXISTS vs IN

\`\`\`sql
-- IN: check if value is in list
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders);

-- EXISTS: check if subquery returns rows (often faster)
SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- NOT EXISTS: find non-matching
SELECT * FROM users u
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);
\`\`\`

<tip>
💡 EXISTS is often faster than IN for large subqueries because it stops at the first match.
</tip>

### Practical Examples

\`\`\`sql
-- Find customers who ordered every product
WITH product_count AS (
    SELECT COUNT(*) AS total FROM products
),
customer_products AS (
    SELECT 
        o.customer_id,
        COUNT(DISTINCT oi.product_id) AS products_ordered
    FROM orders o
    JOIN order_items oi ON o.id = oi.order_id
    GROUP BY o.customer_id
)
SELECT cp.customer_id
FROM customer_products cp, product_count pc
WHERE cp.products_ordered = pc.total;

-- Year-over-year comparison
WITH yearly AS (
    SELECT 
        EXTRACT(YEAR FROM date) AS year,
        SUM(amount) AS total
    FROM sales
    GROUP BY EXTRACT(YEAR FROM date)
)
SELECT 
    curr.year,
    curr.total AS current_year,
    prev.total AS previous_year,
    (curr.total - prev.total) / prev.total * 100 AS growth_pct
FROM yearly curr
LEFT JOIN yearly prev ON curr.year = prev.year + 1;
\`\`\`

<warning>
⚠️ Deeply nested subqueries can be hard to debug. When you have more than 2 levels, consider using CTEs instead!
</warning>

CTEs make complex queries manageable! 📝
          `}]},{id:8,title:"NoSQL & MongoDB",description:"Document databases basics",lessons:[{id:"8-1",title:"Introduction to MongoDB",duration:"12 min",content:`
## Beyond SQL: Document Databases 📄

MongoDB stores data as flexible JSON-like documents!

### SQL vs MongoDB

| SQL | MongoDB |
|-----|---------|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |
| Primary Key | _id |
| JOIN | Embedded / $lookup |

### Document Structure

\`\`\`javascript
// MongoDB document (JSON)
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "Alice",
  "email": "alice@email.com",
  "age": 28,
  "address": {
    "street": "123 Main St",
    "city": "Boston",
    "zip": "02101"
  },
  "tags": ["developer", "reader"],
  "created_at": ISODate("2024-01-15T10:30:00Z")
}
\`\`\`

### Why MongoDB?

| Use Case | MongoDB Strength |
|----------|-----------------|
| Rapid prototyping | Flexible schema |
| Varied data | Different fields per doc |
| Hierarchical data | Nested documents |
| Scaling | Built for horizontal scale |
| Read-heavy | Fast queries |

### Installing MongoDB

\`\`\`bash
# Mac
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Connect
mongosh
\`\`\`

### Basic Commands

\`\`\`javascript
// Show databases
show dbs

// Use/create database
use myapp

// Show collections
show collections

// Create collection
db.createCollection("users")
\`\`\`

### CRUD Operations

\`\`\`javascript
// Create (Insert)
db.users.insertOne({
  name: "Alice",
  email: "alice@email.com",
  age: 28
})

db.users.insertMany([
  { name: "Bob", email: "bob@email.com", age: 34 },
  { name: "Carol", email: "carol@email.com", age: 22 }
])

// Read (Find)
db.users.find()                          // All
db.users.findOne({ email: "alice@email.com" })  // One
db.users.find({ age: { $gt: 25 } })      // Filter

// Update
db.users.updateOne(
  { email: "alice@email.com" },
  { $set: { age: 29 } }
)

// Delete
db.users.deleteOne({ email: "bob@email.com" })
\`\`\`

### Query Operators

\`\`\`javascript
// Comparison
$eq   // Equal
$ne   // Not equal
$gt   // Greater than
$gte  // Greater than or equal
$lt   // Less than
$lte  // Less than or equal
$in   // In array
$nin  // Not in array

// Examples
db.users.find({ age: { $gte: 18, $lte: 65 } })
db.users.find({ status: { $in: ["active", "pending"] } })
db.products.find({ price: { $lt: 100 } })
\`\`\`

### Logical Operators

\`\`\`javascript
// AND (implicit)
db.users.find({ age: { $gt: 25 }, status: "active" })

// Explicit $and
db.users.find({
  $and: [
    { age: { $gt: 25 } },
    { status: "active" }
  ]
})

// OR
db.users.find({
  $or: [
    { age: { $lt: 18 } },
    { age: { $gt: 65 } }
  ]
})
\`\`\`

<tip>
💡 MongoDB is schema-less — different documents in the same collection can have different fields. This flexibility is powerful but requires discipline!
</tip>

### When to Use MongoDB

✅ Good fit:
- Content management, catalogs
- Real-time analytics
- Mobile/IoT data
- Rapid iteration

❌ Not ideal:
- Complex transactions
- Heavy JOINs needed
- Strict data integrity

<warning>
⚠️ MongoDB sacrifices some ACID guarantees for performance. For banking or critical transactions, consider SQL databases!
</warning>

Documents give you flexibility! 🌊
          `},{id:"8-2",title:"MongoDB Queries & Aggregation",duration:"12 min",content:`
## Advanced MongoDB 🔬

Let's explore querying and aggregation!

### Projection (Select Fields)

\`\`\`javascript
// Only return name and email
db.users.find({}, { name: 1, email: 1 })

// Exclude fields
db.users.find({}, { password: 0, internal_notes: 0 })
\`\`\`

### Sorting and Limiting

\`\`\`javascript
// Sort ascending (1) or descending (-1)
db.products.find().sort({ price: 1 })
db.users.find().sort({ created_at: -1 })

// Limit and skip (pagination)
db.products.find().sort({ price: 1 }).limit(10)
db.products.find().skip(10).limit(10)  // Page 2
\`\`\`

### Array Queries

\`\`\`javascript
// Match element in array
db.products.find({ tags: "electronics" })

// Match all elements
db.products.find({ tags: { $all: ["electronics", "sale"] } })

// Array size
db.products.find({ tags: { $size: 3 } })

// Query nested array objects
db.orders.find({ "items.product_id": "abc123" })
\`\`\`

### Aggregation Pipeline

Like SQL GROUP BY on steroids:

\`\`\`javascript
db.orders.aggregate([
  // Stage 1: Match (WHERE)
  { $match: { status: "completed" } },
  
  // Stage 2: Group (GROUP BY)
  { $group: {
      _id: "$customer_id",
      total_orders: { $sum: 1 },
      total_spent: { $sum: "$amount" },
      avg_order: { $avg: "$amount" }
  }},
  
  // Stage 3: Sort
  { $sort: { total_spent: -1 } },
  
  // Stage 4: Limit
  { $limit: 10 }
])
\`\`\`

### Common Aggregation Stages

| Stage | Purpose | SQL Equivalent |
|-------|---------|----------------|
| \`$match\` | Filter documents | WHERE |
| \`$group\` | Group and aggregate | GROUP BY |
| \`$sort\` | Order results | ORDER BY |
| \`$limit\` | Limit results | LIMIT |
| \`$skip\` | Skip results | OFFSET |
| \`$project\` | Shape output | SELECT |
| \`$lookup\` | Join collections | JOIN |
| \`$unwind\` | Flatten arrays | - |

### Lookup (JOIN)

\`\`\`javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "users",           // Collection to join
      localField: "user_id",   // Field in orders
      foreignField: "_id",     // Field in users
      as: "user"               // Output array name
    }
  },
  { $unwind: "$user" }  // Flatten the array
])
\`\`\`

### Practical Aggregation Example

\`\`\`javascript
// Monthly sales report
db.orders.aggregate([
  { $match: {
      created_at: {
        $gte: ISODate("2024-01-01"),
        $lt: ISODate("2025-01-01")
      }
  }},
  { $group: {
      _id: { $dateToString: { format: "%Y-%m", date: "$created_at" } },
      order_count: { $sum: 1 },
      revenue: { $sum: "$amount" },
      avg_order_value: { $avg: "$amount" }
  }},
  { $sort: { _id: 1 } },
  { $project: {
      month: "$_id",
      order_count: 1,
      revenue: { $round: ["$revenue", 2] },
      avg_order_value: { $round: ["$avg_order_value", 2] }
  }}
])
\`\`\`

### Indexes in MongoDB

\`\`\`javascript
// Create index
db.users.createIndex({ email: 1 })

// Compound index
db.orders.createIndex({ user_id: 1, created_at: -1 })

// Unique index
db.users.createIndex({ email: 1 }, { unique: true })

// Text index (full-text search)
db.articles.createIndex({ title: "text", content: "text" })

// View indexes
db.users.getIndexes()

// Explain query
db.users.find({ email: "test@email.com" }).explain("executionStats")
\`\`\`

<tip>
💡 Always index fields you filter or sort on frequently. MongoDB's performance depends heavily on proper indexing!
</tip>

### MongoDB vs PostgreSQL Summary

| Feature | PostgreSQL | MongoDB |
|---------|------------|---------|
| Schema | Fixed | Flexible |
| Transactions | Full ACID | Limited |
| Relationships | Native JOINs | Embedded/Reference |
| Query Language | SQL | MQL/Aggregation |
| Scaling | Vertical | Horizontal |
| Best For | Complex queries | Document data |

---

## Congratulations! 🎉

You've completed the SQL & Databases course! You now understand:

- Database fundamentals and SQL
- SELECT queries with filters, sorts, and limits
- Aggregate functions and GROUP BY
- JOIN operations for related tables
- INSERT, UPDATE, DELETE operations
- Database design and normalization
- Indexes and performance optimization
- Window functions and CTEs
- MongoDB document database basics

Keep practicing and building real projects! 🚀
          `}]}]};const Ld=(...A)=>A.filter((j,V,E)=>!!j&&j.trim()!==""&&E.indexOf(j)===V).join(" ").trim();const o0=A=>A.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const r0=A=>A.replace(/^([A-Z])|[\s-_]+(\w)/g,(j,V,E)=>E?E.toUpperCase():V.toLowerCase());const Cd=A=>{const j=r0(A);return j.charAt(0).toUpperCase()+j.slice(1)};var d0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const m0=A=>{for(const j in A)if(j.startsWith("aria-")||j==="role"||j==="title")return!0;return!1};const E0=Nt.forwardRef(({color:A="currentColor",size:j=24,strokeWidth:V=2,absoluteStrokeWidth:E,className:U="",children:J,iconNode:ne,...Re},L)=>Nt.createElement("svg",{ref:L,...d0,width:j,height:j,stroke:A,strokeWidth:E?Number(V)*24/Number(j):V,className:Ld("lucide",U),...!J&&!m0(Re)&&{"aria-hidden":"true"},...Re},[...ne.map(([O,P])=>Nt.createElement(O,P)),...Array.isArray(J)?J:[J]]));const Ct=(A,j)=>{const V=Nt.forwardRef(({className:E,...U},J)=>Nt.createElement(E0,{ref:J,iconNode:j,className:Ld(`lucide-${o0(Cd(A))}`,`lucide-${A}`,E),...U}));return V.displayName=Cd(A),V};const y0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],h0=Ct("book-open",y0);const g0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xn=Ct("chevron-right",g0);const S0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ou=Ct("circle-check",S0);const v0=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],p0=Ct("clock",v0);const T0=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Md=Ct("database",T0);const R0=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],O0=Ct("house",R0);const A0=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],b0=Ct("lightbulb",A0);const _0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],N0=Ct("menu",_0);const C0=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],M0=Ct("play",C0);const L0=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],D0=Ct("triangle-alert",L0);const U0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],z0=Ct("x",U0);function H0(){const[A,j]=Nt.useState(!1),[V,E]=Nt.useState("home"),[U,J]=Nt.useState(null),[ne,Re]=Nt.useState([]);Nt.useEffect(()=>{const D=localStorage.getItem("sql-progress");D&&Re(JSON.parse(D))},[]);const L=D=>{const B=[...ne,D];Re(B),localStorage.setItem("sql-progress",JSON.stringify(B))},O=_t.chapters.reduce((D,B)=>D+B.lessons.length,0),P=Math.round(ne.length/O*100),x=D=>{J(D),E("lesson"),j(!1),window.scrollTo(0,0)},me=()=>{if(!U)return null;for(let D=0;D<_t.chapters.length;D++){const B=_t.chapters[D];for(let F=0;F<B.lessons.length;F++)if(B.lessons[F].id===U.id){if(F<B.lessons.length-1)return B.lessons[F+1];if(D<_t.chapters.length-1)return _t.chapters[D+1].lessons[0]}}return null},Qe=()=>{if(!U)return null;for(let D=0;D<_t.chapters.length;D++){const B=_t.chapters[D];for(let F=0;F<B.lessons.length;F++)if(B.lessons[F].id===U.id){if(F>0)return B.lessons[F-1];if(D>0){const z=_t.chapters[D-1];return z.lessons[z.lessons.length-1]}}}return null},Ve=D=>{const B=D.trim().split(`
`),F=[];let z=0,Oe=!1,xe=[],et="";for(;z<B.length;){const ae=B[z];if(ae.startsWith("```")){Oe?(F.push(p.jsxs("div",{className:"code-block",children:[p.jsxs("div",{className:"code-header",children:[p.jsx("span",{className:"code-language",children:et}),p.jsx("button",{className:"code-copy",onClick:()=>navigator.clipboard.writeText(xe.join(`
`)),children:"Copy"})]}),p.jsx("div",{className:"code-content",children:p.jsx("pre",{children:xe.join(`
`)})})]},`code-${z}`)),Oe=!1):(Oe=!0,et=ae.slice(3).trim()||"text",xe=[]),z++;continue}if(Oe){xe.push(ae),z++;continue}if(ae.includes("<tip>")){let Y=[];for(z++;z<B.length&&!B[z].includes("</tip>");)Y.push(B[z]),z++;F.push(p.jsxs("div",{className:"tip-box",children:[p.jsxs("div",{className:"tip-box-header",children:[p.jsx(b0,{size:18}),p.jsx("span",{children:"Pro Tip"})]}),p.jsx("p",{children:Y.join(" ").replace("💡 ","")})]},`tip-${z}`)),z++;continue}if(ae.includes("<warning>")){let Y=[];for(z++;z<B.length&&!B[z].includes("</warning>");)Y.push(B[z]),z++;F.push(p.jsxs("div",{className:"warning-box",children:[p.jsxs("div",{className:"warning-box-header",children:[p.jsx(D0,{size:18}),p.jsx("span",{children:"Warning"})]}),p.jsx("p",{children:Y.join(" ").replace("⚠️ ","")})]},`warn-${z}`)),z++;continue}if(ae.startsWith("## ")){F.push(p.jsx("h2",{children:ae.slice(3)},`h2-${z}`)),z++;continue}if(ae.startsWith("### ")){F.push(p.jsx("h3",{children:ae.slice(4)},`h3-${z}`)),z++;continue}if(ae.includes("|")&&B[z+1]?.includes("---")){const Y=ae.split("|").filter(he=>he.trim()).map(he=>he.trim());z+=2;const Ae=[];for(;z<B.length&&B[z].includes("|");)Ae.push(B[z].split("|").filter(he=>he.trim()).map(he=>he.trim())),z++;F.push(p.jsx("div",{style:{overflowX:"auto",margin:"20px 0"},children:p.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",background:"var(--bg-card)",borderRadius:"12px",overflow:"hidden"},children:[p.jsx("thead",{children:p.jsx("tr",{children:Y.map((he,Mt)=>p.jsx("th",{style:{padding:"12px 16px",textAlign:"left",borderBottom:"1px solid var(--border-color)",color:"var(--accent-primary)"},children:he},Mt))})}),p.jsx("tbody",{children:Ae.map((he,Mt)=>p.jsx("tr",{children:he.map((rt,Xe)=>p.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:p.jsx("span",{dangerouslySetInnerHTML:{__html:rt.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g,'<code style="background:rgba(16,185,129,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>')}})},Xe))},Mt))})]})},`table-${z}`));continue}if(ae.startsWith("- ")||ae.startsWith("* ")){const Y=[];for(;z<B.length&&(B[z].startsWith("- ")||B[z].startsWith("* "));)Y.push(B[z].slice(2)),z++;F.push(p.jsx("ul",{children:Y.map((Ae,he)=>p.jsx("li",{dangerouslySetInnerHTML:{__html:Ae.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(16,185,129,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},he))},`ul-${z}`));continue}if(/^\d+\. /.test(ae)){const Y=[];for(;z<B.length&&/^\d+\. /.test(B[z]);)Y.push(B[z].replace(/^\d+\. /,"")),z++;F.push(p.jsx("ol",{children:Y.map((Ae,he)=>p.jsx("li",{dangerouslySetInnerHTML:{__html:Ae.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(16,185,129,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},he))},`ol-${z}`));continue}ae.trim()&&F.push(p.jsx("p",{dangerouslySetInnerHTML:{__html:ae.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(16,185,129,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" style="color:var(--accent-cyan)">$1</a>')}},`p-${z}`)),z++}return F};return p.jsxs("div",{className:"app-container",children:[p.jsx("div",{className:"bg-grid"}),p.jsx("div",{className:"bg-noise"}),p.jsx("div",{className:"gradient-orb orb-primary"}),p.jsx("div",{className:"gradient-orb orb-cyan"}),p.jsx("div",{className:"gradient-orb orb-purple"}),p.jsx("button",{className:"mobile-menu-btn",onClick:()=>j(!A),children:A?p.jsx(z0,{size:24}):p.jsx(N0,{size:24})}),p.jsx("div",{className:`sidebar-overlay ${A?"open":""}`,onClick:()=>j(!1)}),p.jsxs("aside",{className:`sidebar ${A?"open":""}`,children:[p.jsxs("div",{className:"sidebar-header",children:[p.jsx("div",{className:"sidebar-logo",children:p.jsx(Md,{size:24})}),p.jsx("span",{className:"sidebar-title",children:"SQL & Databases"})]}),p.jsxs("nav",{className:"sidebar-nav",children:[p.jsxs("div",{className:`nav-item ${V==="home"?"active":""}`,onClick:()=>{E("home"),j(!1)},children:[p.jsx(O0,{size:20,className:"nav-item-icon"}),p.jsx("span",{children:"Home"})]}),_t.chapters.map(D=>p.jsxs("div",{className:"nav-section",children:[p.jsxs("div",{className:"nav-section-title",children:["Ch ",D.id,": ",D.title]}),D.lessons.map(B=>p.jsxs("div",{className:`nav-item ${U?.id===B.id?"active":""}`,onClick:()=>x(B),children:[ne.includes(B.id)?p.jsx(Ou,{size:18,className:"nav-item-icon",style:{color:"var(--accent-green)"}}):p.jsx(h0,{size:18,className:"nav-item-icon"}),p.jsx("span",{children:B.title})]},B.id))]},D.id))]}),p.jsxs("div",{style:{marginTop:"auto",padding:"20px",borderTop:"1px solid var(--border-color)"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:[p.jsx("span",{children:"Progress"}),p.jsxs("span",{children:[P,"%"]})]}),p.jsx("div",{className:"progress-bar",children:p.jsx("div",{className:"progress-fill",style:{width:`${P}%`}})})]})]}),p.jsxs("main",{className:"main-content",children:[V==="home"&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"hero",children:[p.jsxs("div",{className:"hero-badge",children:[p.jsx(Md,{size:16}),p.jsx("span",{children:"Database Course"})]}),p.jsxs("h1",{className:"hero-title",children:["Learn",p.jsx("br",{}),p.jsx("span",{children:"SQL & Databases"})]}),p.jsx("p",{className:"hero-subtitle",children:"Master database design, SQL queries, and data management. From basic SELECT to advanced joins and optimization!"}),p.jsxs("button",{className:"nav-button primary",onClick:()=>x(_t.chapters[0].lessons[0]),style:{margin:"0 auto"},children:[p.jsx(M0,{size:20}),"Start Learning"]})]}),p.jsxs("div",{style:{marginBottom:"48px"},children:[p.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px"},children:"Course Chapters"}),_t.chapters.map(D=>{const B=D.lessons.filter(F=>ne.includes(F.id)).length;return p.jsxs("div",{className:"chapter-card",onClick:()=>x(D.lessons[0]),children:[p.jsx("div",{className:"chapter-number",children:D.id}),p.jsxs("div",{className:"chapter-info",children:[p.jsx("div",{className:"chapter-title",children:D.title}),p.jsxs("div",{className:"chapter-meta",children:[D.description," • ",D.lessons.length," lessons",B>0&&p.jsxs("span",{style:{color:"var(--accent-green)",marginLeft:"8px"},children:["(",B,"/",D.lessons.length," complete)"]})]})]}),p.jsx(Xn,{size:24,style:{color:"var(--text-muted)"}})]},D.id)})]}),p.jsxs("div",{className:"glass-card",style:{textAlign:"center"},children:[p.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px"},children:"What You'll Learn"}),p.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"By the end, you'll be able to design and query databases like a pro:"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:["SELECT Queries","JOINs & Relations","Indexes","Normalization","PostgreSQL","MongoDB Basics"].map(D=>p.jsxs("div",{style:{padding:"16px",background:"rgba(16, 185, 129, 0.1)",borderRadius:"12px",border:"1px solid rgba(16, 185, 129, 0.2)"},children:[p.jsx(Ou,{size:24,style:{color:"var(--accent-primary)",marginBottom:"8px"}}),p.jsx("div",{style:{fontWeight:"500"},children:D})]},D))})]})]}),V==="lesson"&&U&&p.jsxs("div",{className:"lesson-container",children:[p.jsxs("div",{className:"lesson-header",children:[p.jsxs("div",{className:"lesson-breadcrumb",children:[p.jsx("a",{href:"#",onClick:D=>{D.preventDefault(),E("home")},children:"Home"}),p.jsx(Xn,{size:16}),p.jsx("span",{children:U.title})]}),p.jsx("h1",{className:"lesson-title",children:U.title}),p.jsxs("div",{className:"lesson-meta",children:[p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[p.jsx(p0,{size:16}),U.duration]}),ne.includes(U.id)&&p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent-green)"},children:[p.jsx(Ou,{size:16}),"Completed"]})]})]}),p.jsx("div",{className:"lesson-content",children:Ve(U.content)}),!ne.includes(U.id)&&p.jsxs("button",{className:"nav-button primary",style:{width:"100%",justifyContent:"center",marginTop:"32px"},onClick:()=>L(U.id),children:[p.jsx(Ou,{size:20}),"Mark as Complete"]}),p.jsxs("div",{className:"lesson-nav",children:[Qe()?p.jsxs("button",{className:"nav-button",onClick:()=>x(Qe()),children:[p.jsx(Xn,{size:20,style:{transform:"rotate(180deg)"}}),"Previous"]}):p.jsx("div",{}),me()?p.jsxs("button",{className:"nav-button primary",onClick:()=>x(me()),children:["Next Lesson",p.jsx(Xn,{size:20})]}):p.jsxs("button",{className:"nav-button primary",onClick:()=>E("home"),children:["Finish Course",p.jsx(Ou,{size:20})]})]})]})]})]})}f0.createRoot(document.getElementById("root")).render(p.jsx(Nt.StrictMode,{children:p.jsx(H0,{})}));
