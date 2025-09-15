(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function il(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ae={},qs=[],Gt=()=>{},gd=()=>!1,ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ol=t=>t.startsWith("onUpdate:"),pt=Object.assign,al=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},T_=Object.prototype.hasOwnProperty,Te=(t,e)=>T_.call(t,e),re=Array.isArray,zs=t=>_i(t)==="[object Map]",na=t=>_i(t)==="[object Set]",ih=t=>_i(t)==="[object Date]",ae=t=>typeof t=="function",$e=t=>typeof t=="string",tn=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",_d=t=>(Re(t)||ae(t))&&ae(t.then)&&ae(t.catch),yd=Object.prototype.toString,_i=t=>yd.call(t),I_=t=>_i(t).slice(8,-1),Ed=t=>_i(t)==="[object Object]",cl=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jr=il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},w_=/-\w/g,Dt=sa(t=>t.replace(w_,e=>e.slice(1).toUpperCase())),A_=/\B([A-Z])/g,ts=sa(t=>t.replace(A_,"-$1").toLowerCase()),ra=sa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xa=sa(t=>t?`on${ra(t)}`:""),Fn=(t,e)=>!Object.is(t,e),ao=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vd=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Io=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let oh;const ia=()=>oh||(oh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ll(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=$e(s)?C_(s):ll(s);if(r)for(const i in r)e[i]=r[i]}return e}else if($e(t)||Re(t))return t}const S_=/;(?![^(]*\))/g,b_=/:([^]+)/,R_=/\/\*[^]*?\*\//g;function C_(t){const e={};return t.replace(R_,"").split(S_).forEach(n=>{if(n){const s=n.split(b_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function er(t){let e="";if($e(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const s=er(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const P_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",k_=il(P_);function Td(t){return!!t||t===""}function V_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=oa(t[s],e[s]);return n}function oa(t,e){if(t===e)return!0;let n=ih(t),s=ih(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=tn(t),s=tn(e),n||s)return t===e;if(n=re(t),s=re(e),n||s)return n&&s?V_(t,e):!1;if(n=Re(t),s=Re(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!oa(t[a],e[a]))return!1}}return String(t)===String(e)}function D_(t,e){return t.findIndex(n=>oa(n,e))}const Id=t=>!!(t&&t.__v_isRef===!0),dt=t=>$e(t)?t:t==null?"":re(t)||Re(t)&&(t.toString===yd||!ae(t.toString))?Id(t)?dt(t.value):JSON.stringify(t,wd,2):String(t),wd=(t,e)=>Id(e)?wd(t,e.value):zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Za(s,i)+" =>"]=r,n),{})}:na(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Za(n))}:tn(e)?Za(e):Re(e)&&!re(e)&&!Ed(e)?String(e):e,Za=(t,e="")=>{var n;return tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ct;class Ad{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ct,!e&&ct&&(this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){++this._on===1&&(this.prevScope=ct,ct=this)}off(){this._on>0&&--this._on===0&&(ct=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Sd(t){return new Ad(t)}function bd(){return ct}function N_(t,e=!1){ct&&ct.cleanups.push(t)}let be;const ec=new WeakSet;class Rd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ct&&ct.active&&ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ec.has(this)&&(ec.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ah(this),kd(this);const e=be,n=xt;be=this,xt=!0;try{return this.fn()}finally{Vd(this),be=e,xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fl(e);this.deps=this.depsTail=void 0,ah(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ec.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tc(this)&&this.run()}get dirty(){return Tc(this)}}let Cd=0,Hr,qr;function Pd(t,e=!1){if(t.flags|=8,e){t.next=qr,qr=t;return}t.next=Hr,Hr=t}function ul(){Cd++}function hl(){if(--Cd>0)return;if(qr){let e=qr;for(qr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hr;){let e=Hr;for(Hr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function kd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vd(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),fl(s),O_(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Tc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Dd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Dd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===si)||(t.globalVersion=si,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Tc(t))))return;t.flags|=2;const e=t.dep,n=be,s=xt;be=t,xt=!0;try{kd(t);const r=t.fn(t._value);(e.version===0||Fn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{be=n,xt=s,Vd(t),t.flags&=-3}}function fl(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)fl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function O_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let xt=!0;const Nd=[];function _n(){Nd.push(xt),xt=!1}function yn(){const t=Nd.pop();xt=t===void 0?!0:t}function ah(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=be;be=void 0;try{e()}finally{be=n}}}let si=0;class L_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!be||!xt||be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==be)n=this.activeLink=new L_(be,this),be.deps?(n.prevDep=be.depsTail,be.depsTail.nextDep=n,be.depsTail=n):be.deps=be.depsTail=n,Od(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=be.depsTail,n.nextDep=void 0,be.depsTail.nextDep=n,be.depsTail=n,be.deps===n&&(be.deps=s)}return n}trigger(e){this.version++,si++,this.notify(e)}notify(e){ul();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hl()}}}function Od(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Od(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const wo=new WeakMap,vs=Symbol(""),Ic=Symbol(""),ri=Symbol("");function ut(t,e,n){if(xt&&be){let s=wo.get(t);s||wo.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new dl),r.map=s,r.key=n),r.track()}}function fn(t,e,n,s,r,i){const a=wo.get(t);if(!a){si++;return}const c=l=>{l&&l.trigger()};if(ul(),e==="clear")a.forEach(c);else{const l=re(t),h=l&&cl(n);if(l&&n==="length"){const d=Number(s);a.forEach((m,_)=>{(_==="length"||_===ri||!tn(_)&&_>=d)&&c(m)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(ri)),e){case"add":l?h&&c(a.get("length")):(c(a.get(vs)),zs(t)&&c(a.get(Ic)));break;case"delete":l||(c(a.get(vs)),zs(t)&&c(a.get(Ic)));break;case"set":zs(t)&&c(a.get(vs));break}}hl()}function M_(t,e){const n=wo.get(t);return n&&n.get(e)}function Ms(t){const e=ye(t);return e===t?e:(ut(e,"iterate",ri),Vt(t)?e:e.map(Ze))}function aa(t){return ut(t=ye(t),"iterate",ri),t}const x_={__proto__:null,[Symbol.iterator](){return tc(this,Symbol.iterator,Ze)},concat(...t){return Ms(this).concat(...t.map(e=>re(e)?Ms(e):e))},entries(){return tc(this,"entries",t=>(t[1]=Ze(t[1]),t))},every(t,e){return un(this,"every",t,e,void 0,arguments)},filter(t,e){return un(this,"filter",t,e,n=>n.map(Ze),arguments)},find(t,e){return un(this,"find",t,e,Ze,arguments)},findIndex(t,e){return un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return un(this,"findLast",t,e,Ze,arguments)},findLastIndex(t,e){return un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return un(this,"forEach",t,e,void 0,arguments)},includes(...t){return nc(this,"includes",t)},indexOf(...t){return nc(this,"indexOf",t)},join(t){return Ms(this).join(t)},lastIndexOf(...t){return nc(this,"lastIndexOf",t)},map(t,e){return un(this,"map",t,e,void 0,arguments)},pop(){return Nr(this,"pop")},push(...t){return Nr(this,"push",t)},reduce(t,...e){return ch(this,"reduce",t,e)},reduceRight(t,...e){return ch(this,"reduceRight",t,e)},shift(){return Nr(this,"shift")},some(t,e){return un(this,"some",t,e,void 0,arguments)},splice(...t){return Nr(this,"splice",t)},toReversed(){return Ms(this).toReversed()},toSorted(t){return Ms(this).toSorted(t)},toSpliced(...t){return Ms(this).toSpliced(...t)},unshift(...t){return Nr(this,"unshift",t)},values(){return tc(this,"values",Ze)}};function tc(t,e,n){const s=aa(t),r=s[e]();return s!==t&&!Vt(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const F_=Array.prototype;function un(t,e,n,s,r,i){const a=aa(t),c=a!==t&&!Vt(t),l=a[e];if(l!==F_[e]){const m=l.apply(t,i);return c?Ze(m):m}let h=n;a!==t&&(c?h=function(m,_){return n.call(this,Ze(m),_,t)}:n.length>2&&(h=function(m,_){return n.call(this,m,_,t)}));const d=l.call(a,h,s);return c&&r?r(d):d}function ch(t,e,n,s){const r=aa(t);let i=n;return r!==t&&(Vt(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,Ze(c),l,t)}),r[e](i,...s)}function nc(t,e,n){const s=ye(t);ut(s,"iterate",ri);const r=s[e](...n);return(r===-1||r===!1)&&gl(n[0])?(n[0]=ye(n[0]),s[e](...n)):r}function Nr(t,e,n=[]){_n(),ul();const s=ye(t)[e].apply(t,n);return hl(),yn(),s}const U_=il("__proto__,__v_isRef,__isVue"),Ld=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tn));function $_(t){tn(t)||(t=String(t));const e=ye(this);return ut(e,"has",t),e.hasOwnProperty(t)}class Md{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?J_:$d:i?Ud:Fd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=re(e);if(!r){let l;if(a&&(l=x_[n]))return l;if(n==="hasOwnProperty")return $_}const c=Reflect.get(e,n,De(e)?e:s);return(tn(n)?Ld.has(n):U_(n))||(r||ut(e,"get",n),i)?c:De(c)?a&&cl(n)?c:c.value:Re(c)?r?Bd(c):ca(c):c}}class xd extends Md{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=Wn(i);if(!Vt(s)&&!Wn(s)&&(i=ye(i),s=ye(s)),!re(e)&&De(i)&&!De(s))return l||(i.value=s),!0}const a=re(e)&&cl(n)?Number(n)<e.length:Te(e,n),c=Reflect.set(e,n,s,De(e)?e:r);return e===ye(r)&&(a?Fn(s,i)&&fn(e,"set",n,s):fn(e,"add",n,s)),c}deleteProperty(e,n){const s=Te(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&fn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!tn(n)||!Ld.has(n))&&ut(e,"has",n),s}ownKeys(e){return ut(e,"iterate",re(e)?"length":vs),Reflect.ownKeys(e)}}class B_ extends Md{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const j_=new xd,H_=new B_,q_=new xd(!0);const wc=t=>t,Ji=t=>Reflect.getPrototypeOf(t);function z_(t,e,n){return function(...s){const r=this.__v_raw,i=ye(r),a=zs(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=r[t](...s),d=n?wc:e?Ao:Ze;return!e&&ut(i,"iterate",l?Ic:vs),{next(){const{value:m,done:_}=h.next();return _?{value:m,done:_}:{value:c?[d(m[0]),d(m[1])]:d(m),done:_}},[Symbol.iterator](){return this}}}}function Yi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function K_(t,e){const n={get(r){const i=this.__v_raw,a=ye(i),c=ye(r);t||(Fn(r,c)&&ut(a,"get",r),ut(a,"get",c));const{has:l}=Ji(a),h=e?wc:t?Ao:Ze;if(l.call(a,r))return h(i.get(r));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(r)},get size(){const r=this.__v_raw;return!t&&ut(ye(r),"iterate",vs),r.size},has(r){const i=this.__v_raw,a=ye(i),c=ye(r);return t||(Fn(r,c)&&ut(a,"has",r),ut(a,"has",c)),r===c?i.has(r):i.has(r)||i.has(c)},forEach(r,i){const a=this,c=a.__v_raw,l=ye(c),h=e?wc:t?Ao:Ze;return!t&&ut(l,"iterate",vs),c.forEach((d,m)=>r.call(i,h(d),h(m),a))}};return pt(n,t?{add:Yi("add"),set:Yi("set"),delete:Yi("delete"),clear:Yi("clear")}:{add(r){!e&&!Vt(r)&&!Wn(r)&&(r=ye(r));const i=ye(this);return Ji(i).has.call(i,r)||(i.add(r),fn(i,"add",r,r)),this},set(r,i){!e&&!Vt(i)&&!Wn(i)&&(i=ye(i));const a=ye(this),{has:c,get:l}=Ji(a);let h=c.call(a,r);h||(r=ye(r),h=c.call(a,r));const d=l.call(a,r);return a.set(r,i),h?Fn(i,d)&&fn(a,"set",r,i):fn(a,"add",r,i),this},delete(r){const i=ye(this),{has:a,get:c}=Ji(i);let l=a.call(i,r);l||(r=ye(r),l=a.call(i,r)),c&&c.call(i,r);const h=i.delete(r);return l&&fn(i,"delete",r,void 0),h},clear(){const r=ye(this),i=r.size!==0,a=r.clear();return i&&fn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=z_(r,t,e)}),n}function pl(t,e){const n=K_(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Te(n,r)&&r in s?n:s,r,i)}const W_={get:pl(!1,!1)},G_={get:pl(!1,!0)},Q_={get:pl(!0,!1)};const Fd=new WeakMap,Ud=new WeakMap,$d=new WeakMap,J_=new WeakMap;function Y_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function X_(t){return t.__v_skip||!Object.isExtensible(t)?0:Y_(I_(t))}function ca(t){return Wn(t)?t:ml(t,!1,j_,W_,Fd)}function Z_(t){return ml(t,!1,q_,G_,Ud)}function Bd(t){return ml(t,!0,H_,Q_,$d)}function ml(t,e,n,s,r){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=X_(t);if(i===0)return t;const a=r.get(t);if(a)return a;const c=new Proxy(t,i===2?s:n);return r.set(t,c),c}function gn(t){return Wn(t)?gn(t.__v_raw):!!(t&&t.__v_isReactive)}function Wn(t){return!!(t&&t.__v_isReadonly)}function Vt(t){return!!(t&&t.__v_isShallow)}function gl(t){return t?!!t.__v_raw:!1}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function _l(t){return!Te(t,"__v_skip")&&Object.isExtensible(t)&&vd(t,"__v_skip",!0),t}const Ze=t=>Re(t)?ca(t):t,Ao=t=>Re(t)?Bd(t):t;function De(t){return t?t.__v_isRef===!0:!1}function Fe(t){return ey(t,!1)}function ey(t,e){return De(t)?t:new ty(t,e)}class ty{constructor(e,n){this.dep=new dl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ye(e),this._value=n?e:Ze(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Vt(e)||Wn(e);e=s?e:ye(e),Fn(e,n)&&(this._rawValue=e,this._value=s?e:Ze(e),this.dep.trigger())}}function ny(t){return De(t)?t.value:t}const sy={get:(t,e,n)=>e==="__v_raw"?t:ny(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return De(r)&&!De(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function jd(t){return gn(t)?t:new Proxy(t,sy)}function ry(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=Hd(t,n);return e}class iy{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return M_(ye(this._object),this._key)}}class oy{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function ay(t,e,n){return De(t)?t:ae(t)?new oy(t):Re(t)&&arguments.length>1?Hd(t,e,n):Fe(t)}function Hd(t,e,n){const s=t[e];return De(s)?s:new iy(t,e,n)}class cy{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new dl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Pd(this,!0),!0}get value(){const e=this.dep.track();return Dd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ly(t,e,n=!1){let s,r;return ae(t)?s=t:(s=t.get,r=t.set),new cy(s,r,n)}const Xi={},So=new WeakMap;let gs;function uy(t,e=!1,n=gs){if(n){let s=So.get(n);s||So.set(n,s=[]),s.push(t)}}function hy(t,e,n=Ae){const{immediate:s,deep:r,once:i,scheduler:a,augmentJob:c,call:l}=n,h=G=>r?G:Vt(G)||r===!1||r===0?dn(G,1):dn(G);let d,m,_,I,P=!1,L=!1;if(De(t)?(m=()=>t.value,P=Vt(t)):gn(t)?(m=()=>h(t),P=!0):re(t)?(L=!0,P=t.some(G=>gn(G)||Vt(G)),m=()=>t.map(G=>{if(De(G))return G.value;if(gn(G))return h(G);if(ae(G))return l?l(G,2):G()})):ae(t)?e?m=l?()=>l(t,2):t:m=()=>{if(_){_n();try{_()}finally{yn()}}const G=gs;gs=d;try{return l?l(t,3,[I]):t(I)}finally{gs=G}}:m=Gt,e&&r){const G=m,he=r===!0?1/0:r;m=()=>dn(G(),he)}const F=bd(),z=()=>{d.stop(),F&&F.active&&al(F.effects,d)};if(i&&e){const G=e;e=(...he)=>{G(...he),z()}}let W=L?new Array(t.length).fill(Xi):Xi;const Q=G=>{if(!(!(d.flags&1)||!d.dirty&&!G))if(e){const he=d.run();if(r||P||(L?he.some((Se,S)=>Fn(Se,W[S])):Fn(he,W))){_&&_();const Se=gs;gs=d;try{const S=[he,W===Xi?void 0:L&&W[0]===Xi?[]:W,I];W=he,l?l(e,3,S):e(...S)}finally{gs=Se}}}else d.run()};return c&&c(Q),d=new Rd(m),d.scheduler=a?()=>a(Q,!1):Q,I=G=>uy(G,!1,d),_=d.onStop=()=>{const G=So.get(d);if(G){if(l)l(G,4);else for(const he of G)he();So.delete(d)}},e?s?Q(!0):W=d.run():a?a(Q.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function dn(t,e=1/0,n){if(e<=0||!Re(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,De(t))dn(t.value,e,n);else if(re(t))for(let s=0;s<t.length;s++)dn(t[s],e,n);else if(na(t)||zs(t))t.forEach(s=>{dn(s,e,n)});else if(Ed(t)){for(const s in t)dn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&dn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yi(t,e,n,s){try{return s?t(...s):t()}catch(r){la(r,e,n)}}function nn(t,e,n,s){if(ae(t)){const r=yi(t,e,n,s);return r&&_d(r)&&r.catch(i=>{la(i,e,n)}),r}if(re(t)){const r=[];for(let i=0;i<t.length;i++)r.push(nn(t[i],e,n,s));return r}}function la(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](t,l,h)===!1)return}c=c.parent}if(i){_n(),yi(i,null,10,[t,l,h]),yn();return}}fy(t,n,r,s,a)}function fy(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Et=[];let Ht=-1;const Ks=[];let Vn=null,Fs=0;const qd=Promise.resolve();let bo=null;function yl(t){const e=bo||qd;return t?e.then(this?t.bind(this):t):e}function dy(t){let e=Ht+1,n=Et.length;for(;e<n;){const s=e+n>>>1,r=Et[s],i=ii(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function El(t){if(!(t.flags&1)){const e=ii(t),n=Et[Et.length-1];!n||!(t.flags&2)&&e>=ii(n)?Et.push(t):Et.splice(dy(e),0,t),t.flags|=1,zd()}}function zd(){bo||(bo=qd.then(Wd))}function py(t){re(t)?Ks.push(...t):Vn&&t.id===-1?Vn.splice(Fs+1,0,t):t.flags&1||(Ks.push(t),t.flags|=1),zd()}function lh(t,e,n=Ht+1){for(;n<Et.length;n++){const s=Et[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Et.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Kd(t){if(Ks.length){const e=[...new Set(Ks)].sort((n,s)=>ii(n)-ii(s));if(Ks.length=0,Vn){Vn.push(...e);return}for(Vn=e,Fs=0;Fs<Vn.length;Fs++){const n=Vn[Fs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Vn=null,Fs=0}}const ii=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wd(t){try{for(Ht=0;Ht<Et.length;Ht++){const e=Et[Ht];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ht<Et.length;Ht++){const e=Et[Ht];e&&(e.flags&=-2)}Ht=-1,Et.length=0,Kd(),bo=null,(Et.length||Ks.length)&&Wd()}}let St=null,Gd=null;function Ro(t){const e=St;return St=t,Gd=t&&t.type.__scopeId||null,e}function my(t,e=St,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&vh(-1);const i=Ro(e);let a;try{a=t(...r)}finally{Ro(i),s._d&&vh(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function Ye(t,e){if(St===null)return t;const n=da(St),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,a,c,l=Ae]=e[r];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&dn(a),s.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ps(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let a=0;a<r.length;a++){const c=r[a];i&&(c.oldValue=i[a].value);let l=c.dir[s];l&&(_n(),nn(l,n,8,[t.el,c,t,e]),yn())}}const gy=Symbol("_vte"),_y=t=>t.__isTeleport,yy=Symbol("_leaveCb");function vl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,vl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ns(t,e){return ae(t)?pt({name:t.name},e,{setup:t}):t}function Qd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Co=new WeakMap;function zr(t,e,n,s,r=!1){if(re(t)){t.forEach((P,L)=>zr(P,e&&(re(e)?e[L]:e),n,s,r));return}if(Kr(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&zr(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?da(s.component):s.el,a=r?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Ae?c.refs={}:c.refs,m=c.setupState,_=ye(m),I=m===Ae?gd:P=>Te(_,P);if(h!=null&&h!==l){if(uh(e),$e(h))d[h]=null,I(h)&&(m[h]=null);else if(De(h)){h.value=null;const P=e;P.k&&(d[P.k]=null)}}if(ae(l))yi(l,c,12,[a,d]);else{const P=$e(l),L=De(l);if(P||L){const F=()=>{if(t.f){const z=P?I(l)?m[l]:d[l]:l.value;if(r)re(z)&&al(z,i);else if(re(z))z.includes(i)||z.push(i);else if(P)d[l]=[i],I(l)&&(m[l]=d[l]);else{const W=[i];l.value=W,t.k&&(d[t.k]=W)}}else P?(d[l]=a,I(l)&&(m[l]=a)):L&&(l.value=a,t.k&&(d[t.k]=a))};if(a){const z=()=>{F(),Co.delete(t)};z.id=-1,Co.set(t,z),At(z,n)}else uh(t),F()}}}function uh(t){const e=Co.get(t);e&&(e.flags|=8,Co.delete(t))}ia().requestIdleCallback;ia().cancelIdleCallback;const Kr=t=>!!t.type.__asyncLoader,Jd=t=>t.type.__isKeepAlive;function Ey(t,e){Yd(t,"a",e)}function vy(t,e){Yd(t,"da",e)}function Yd(t,e,n=ft){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ua(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Jd(r.parent.vnode)&&Ty(s,e,n,r),r=r.parent}}function Ty(t,e,n,s){const r=ua(e,t,s,!0);Xd(()=>{al(s[e],r)},n)}function ua(t,e,n=ft,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{_n();const c=vi(n),l=nn(e,n,t,a);return c(),yn(),l});return s?r.unshift(i):r.push(i),i}}const wn=t=>(e,n=ft)=>{(!ai||t==="sp")&&ua(t,(...s)=>e(...s),n)},Iy=wn("bm"),Ei=wn("m"),wy=wn("bu"),Ay=wn("u"),Sy=wn("bum"),Xd=wn("um"),by=wn("sp"),Ry=wn("rtg"),Cy=wn("rtc");function Py(t,e=ft){ua("ec",t,e)}const ky="components";function Kt(t,e){return Dy(ky,t,!0,e)||t}const Vy=Symbol.for("v-ndc");function Dy(t,e,n=!0,s=!1){const r=St||ft;if(r){const i=r.type;{const c=TE(i,!1);if(c&&(c===e||c===Dt(e)||c===ra(Dt(e))))return i}const a=hh(r[t]||i[t],e)||hh(r.appContext[t],e);return!a&&s?i:a}}function hh(t,e){return t&&(t[e]||t[Dt(e)]||t[ra(Dt(e))])}function Wt(t,e,n,s){let r;const i=n,a=re(t);if(a||$e(t)){const c=a&&gn(t);let l=!1,h=!1;c&&(l=!Vt(t),h=Wn(t),t=aa(t)),r=new Array(t.length);for(let d=0,m=t.length;d<m;d++)r[d]=e(l?h?Ao(Ze(t[d])):Ze(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let c=0;c<t;c++)r[c]=e(c+1,c,void 0,i)}else if(Re(t))if(t[Symbol.iterator])r=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);r=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];r[l]=e(t[d],d,l,i)}}else r=[];return r}const Ac=t=>t?vp(t)?da(t):Ac(t.parent):null,Wr=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ac(t.parent),$root:t=>Ac(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ep(t),$forceUpdate:t=>t.f||(t.f=()=>{El(t.update)}),$nextTick:t=>t.n||(t.n=yl.bind(t.proxy)),$watch:t=>tE.bind(t)}),sc=(t,e)=>t!==Ae&&!t.__isScriptSetup&&Te(t,e),Ny={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const I=a[e];if(I!==void 0)switch(I){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(sc(s,e))return a[e]=1,s[e];if(r!==Ae&&Te(r,e))return a[e]=2,r[e];if((h=t.propsOptions[0])&&Te(h,e))return a[e]=3,i[e];if(n!==Ae&&Te(n,e))return a[e]=4,n[e];Sc&&(a[e]=0)}}const d=Wr[e];let m,_;if(d)return e==="$attrs"&&ut(t.attrs,"get",""),d(t);if((m=c.__cssModules)&&(m=m[e]))return m;if(n!==Ae&&Te(n,e))return a[e]=4,n[e];if(_=l.config.globalProperties,Te(_,e))return _[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return sc(r,e)?(r[e]=n,!0):s!==Ae&&Te(s,e)?(s[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:a}},c){let l,h;return!!(n[c]||t!==Ae&&c[0]!=="$"&&Te(t,c)||sc(e,c)||(l=i[0])&&Te(l,c)||Te(s,c)||Te(Wr,c)||Te(r.config.globalProperties,c)||(h=a.__cssModules)&&h[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fh(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sc=!0;function Oy(t){const e=ep(t),n=t.proxy,s=t.ctx;Sc=!1,e.beforeCreate&&dh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:m,mounted:_,beforeUpdate:I,updated:P,activated:L,deactivated:F,beforeDestroy:z,beforeUnmount:W,destroyed:Q,unmounted:G,render:he,renderTracked:Se,renderTriggered:S,errorCaptured:g,serverPrefetch:y,expose:T,inheritAttrs:w,components:b,directives:E,filters:gt}=e;if(h&&Ly(h,s,null),a)for(const le in a){const Ee=a[le];ae(Ee)&&(s[le]=Ee.bind(n))}if(r){const le=r.call(n,n);Re(le)&&(t.data=ca(le))}if(Sc=!0,i)for(const le in i){const Ee=i[le],Nt=ae(Ee)?Ee.bind(n,n):ae(Ee.get)?Ee.get.bind(n,n):Gt,as=!ae(Ee)&&ae(Ee.set)?Ee.set.bind(n):Gt,on=Ti({get:Nt,set:as});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>on.value,set:Be=>on.value=Be})}if(c)for(const le in c)Zd(c[le],s,n,le);if(l){const le=ae(l)?l.call(n):l;Reflect.ownKeys(le).forEach(Ee=>{By(Ee,le[Ee])})}d&&dh(d,t,"c");function Ve(le,Ee){re(Ee)?Ee.forEach(Nt=>le(Nt.bind(n))):Ee&&le(Ee.bind(n))}if(Ve(Iy,m),Ve(Ei,_),Ve(wy,I),Ve(Ay,P),Ve(Ey,L),Ve(vy,F),Ve(Py,g),Ve(Cy,Se),Ve(Ry,S),Ve(Sy,W),Ve(Xd,G),Ve(by,y),re(T))if(T.length){const le=t.exposed||(t.exposed={});T.forEach(Ee=>{Object.defineProperty(le,Ee,{get:()=>n[Ee],set:Nt=>n[Ee]=Nt,enumerable:!0})})}else t.exposed||(t.exposed={});he&&t.render===Gt&&(t.render=he),w!=null&&(t.inheritAttrs=w),b&&(t.components=b),E&&(t.directives=E),y&&Qd(t)}function Ly(t,e,n=Gt){re(t)&&(t=bc(t));for(const s in t){const r=t[s];let i;Re(r)?"default"in r?i=Gr(r.from||s,r.default,!0):i=Gr(r.from||s):i=Gr(r),De(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[s]=i}}function dh(t,e,n){nn(re(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zd(t,e,n,s){let r=s.includes(".")?dp(n,s):()=>n[s];if($e(t)){const i=e[t];ae(i)&&co(r,i)}else if(ae(t))co(r,t.bind(n));else if(Re(t))if(re(t))t.forEach(i=>Zd(i,e,n,s));else{const i=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(i)&&co(r,i,t)}}function ep(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(h=>Po(l,h,a,!0)),Po(l,e,a)),Re(e)&&i.set(e,l),l}function Po(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Po(t,i,n,!0),r&&r.forEach(a=>Po(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const c=My[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const My={data:ph,props:mh,emits:mh,methods:Lr,computed:Lr,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Lr,directives:Lr,watch:Fy,provide:ph,inject:xy};function ph(t,e){return e?t?function(){return pt(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function xy(t,e){return Lr(bc(t),bc(e))}function bc(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Lr(t,e){return t?pt(Object.create(null),t,e):e}function mh(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:pt(Object.create(null),fh(t),fh(e??{})):e}function Fy(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const s in e)n[s]=yt(t[s],e[s]);return n}function tp(){return{app:null,config:{isNativeTag:gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uy=0;function $y(t,e){return function(s,r=null){ae(s)||(s=pt({},s)),r!=null&&!Re(r)&&(r=null);const i=tp(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Uy++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:wE,get config(){return i.config},set config(d){},use(d,...m){return a.has(d)||(d&&ae(d.install)?(a.add(d),d.install(h,...m)):ae(d)&&(a.add(d),d(h,...m))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,m){return m?(i.components[d]=m,h):i.components[d]},directive(d,m){return m?(i.directives[d]=m,h):i.directives[d]},mount(d,m,_){if(!l){const I=h._ceVNode||tt(s,r);return I.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),t(I,d,_),l=!0,h._container=d,d.__vue_app__=h,da(I.component)}},onUnmount(d){c.push(d)},unmount(){l&&(nn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,m){return i.provides[d]=m,h},runWithContext(d){const m=Ts;Ts=h;try{return d()}finally{Ts=m}}};return h}}let Ts=null;function By(t,e){if(ft){let n=ft.provides;const s=ft.parent&&ft.parent.provides;s===n&&(n=ft.provides=Object.create(s)),n[t]=e}}function Gr(t,e,n=!1){const s=Ep();if(s||Ts){let r=Ts?Ts._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ae(e)?e.call(s&&s.proxy):e}}function jy(){return!!(Ep()||Ts)}const np={},sp=()=>Object.create(np),rp=t=>Object.getPrototypeOf(t)===np;function Hy(t,e,n,s=!1){const r={},i=sp();t.propsDefaults=Object.create(null),ip(t,e,r,i);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=s?r:Z_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function qy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:a}}=t,c=ye(r),[l]=t.propsOptions;let h=!1;if((s||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let _=d[m];if(ha(t.emitsOptions,_))continue;const I=e[_];if(l)if(Te(i,_))I!==i[_]&&(i[_]=I,h=!0);else{const P=Dt(_);r[P]=Rc(l,c,P,I,t,!1)}else I!==i[_]&&(i[_]=I,h=!0)}}}else{ip(t,e,r,i)&&(h=!0);let d;for(const m in c)(!e||!Te(e,m)&&((d=ts(m))===m||!Te(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(r[m]=Rc(l,c,m,void 0,t,!0)):delete r[m]);if(i!==c)for(const m in i)(!e||!Te(e,m))&&(delete i[m],h=!0)}h&&fn(t.attrs,"set","")}function ip(t,e,n,s){const[r,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(jr(l))continue;const h=e[l];let d;r&&Te(r,d=Dt(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:ha(t.emitsOptions,l)||(!(l in s)||h!==s[l])&&(s[l]=h,a=!0)}if(i){const l=ye(n),h=c||Ae;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Rc(r,l,m,h[m],t,!Te(h,m))}}return a}function Rc(t,e,n,s,r,i){const a=t[n];if(a!=null){const c=Te(a,"default");if(c&&s===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ae(l)){const{propsDefaults:h}=r;if(n in h)s=h[n];else{const d=vi(r);s=h[n]=l.call(null,e),d()}}else s=l;r.ce&&r.ce._setProp(n,s)}a[0]&&(i&&!c?s=!1:a[1]&&(s===""||s===ts(n))&&(s=!0))}return s}const zy=new WeakMap;function op(t,e,n=!1){const s=n?zy:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,a={},c=[];let l=!1;if(!ae(t)){const d=m=>{l=!0;const[_,I]=op(m,e,!0);pt(a,_),I&&c.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Re(t)&&s.set(t,qs),qs;if(re(i))for(let d=0;d<i.length;d++){const m=Dt(i[d]);gh(m)&&(a[m]=Ae)}else if(i)for(const d in i){const m=Dt(d);if(gh(m)){const _=i[d],I=a[m]=re(_)||ae(_)?{type:_}:pt({},_),P=I.type;let L=!1,F=!0;if(re(P))for(let z=0;z<P.length;++z){const W=P[z],Q=ae(W)&&W.name;if(Q==="Boolean"){L=!0;break}else Q==="String"&&(F=!1)}else L=ae(P)&&P.name==="Boolean";I[0]=L,I[1]=F,(L||Te(I,"default"))&&c.push(m)}}const h=[a,c];return Re(t)&&s.set(t,h),h}function gh(t){return t[0]!=="$"&&!jr(t)}const Tl=t=>t==="_"||t==="_ctx"||t==="$stable",Il=t=>re(t)?t.map(zt):[zt(t)],Ky=(t,e,n)=>{if(e._n)return e;const s=my((...r)=>Il(e(...r)),n);return s._c=!1,s},ap=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Tl(r))continue;const i=t[r];if(ae(i))e[r]=Ky(r,i,s);else if(i!=null){const a=Il(i);e[r]=()=>a}}},cp=(t,e)=>{const n=Il(e);t.slots.default=()=>n},lp=(t,e,n)=>{for(const s in e)(n||!Tl(s))&&(t[s]=e[s])},Wy=(t,e,n)=>{const s=t.slots=sp();if(t.vnode.shapeFlag&32){const r=e._;r?(lp(s,e,n),n&&vd(s,"_",r,!0)):ap(e,s)}else e&&cp(t,e)},Gy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,a=Ae;if(s.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:lp(r,e,n):(i=!e.$stable,ap(e,r)),a=e}else e&&(cp(t,e),a={default:1});if(i)for(const c in r)!Tl(c)&&a[c]==null&&delete r[c]},At=lE;function Qy(t){return Jy(t)}function Jy(t,e){const n=ia();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:m,nextSibling:_,setScopeId:I=Gt,insertStaticContent:P}=t,L=(v,A,k,M=null,N=null,O=null,H=void 0,$=null,U=!!A.dynamicChildren)=>{if(v===A)return;v&&!Or(v,A)&&(M=an(v),Be(v,N,O,!0),v=null),A.patchFlag===-2&&(U=!1,A.dynamicChildren=null);const{type:x,ref:Z,shapeFlag:q}=A;switch(x){case fa:F(v,A,k,M);break;case Gn:z(v,A,k,M);break;case ic:v==null&&W(A,k,M,H);break;case xe:b(v,A,k,M,N,O,H,$,U);break;default:q&1?he(v,A,k,M,N,O,H,$,U):q&6?E(v,A,k,M,N,O,H,$,U):(q&64||q&128)&&x.process(v,A,k,M,N,O,H,$,U,Bt)}Z!=null&&N?zr(Z,v&&v.ref,O,A||v,!A):Z==null&&v&&v.ref!=null&&zr(v.ref,null,O,v,!0)},F=(v,A,k,M)=>{if(v==null)s(A.el=c(A.children),k,M);else{const N=A.el=v.el;A.children!==v.children&&h(N,A.children)}},z=(v,A,k,M)=>{v==null?s(A.el=l(A.children||""),k,M):A.el=v.el},W=(v,A,k,M)=>{[v.el,v.anchor]=P(v.children,A,k,M,v.el,v.anchor)},Q=({el:v,anchor:A},k,M)=>{let N;for(;v&&v!==A;)N=_(v),s(v,k,M),v=N;s(A,k,M)},G=({el:v,anchor:A})=>{let k;for(;v&&v!==A;)k=_(v),r(v),v=k;r(A)},he=(v,A,k,M,N,O,H,$,U)=>{A.type==="svg"?H="svg":A.type==="math"&&(H="mathml"),v==null?Se(A,k,M,N,O,H,$,U):y(v,A,N,O,H,$,U)},Se=(v,A,k,M,N,O,H,$)=>{let U,x;const{props:Z,shapeFlag:q,transition:Y,dirs:se}=v;if(U=v.el=a(v.type,O,Z&&Z.is,Z),q&8?d(U,v.children):q&16&&g(v.children,U,null,M,N,rc(v,O),H,$),se&&ps(v,null,M,"created"),S(U,v,v.scopeId,H,M),Z){for(const ue in Z)ue!=="value"&&!jr(ue)&&i(U,ue,null,Z[ue],O,M);"value"in Z&&i(U,"value",null,Z.value,O),(x=Z.onVnodeBeforeMount)&&jt(x,M,v)}se&&ps(v,null,M,"beforeMount");const ee=Yy(N,Y);ee&&Y.beforeEnter(U),s(U,A,k),((x=Z&&Z.onVnodeMounted)||ee||se)&&At(()=>{x&&jt(x,M,v),ee&&Y.enter(U),se&&ps(v,null,M,"mounted")},N)},S=(v,A,k,M,N)=>{if(k&&I(v,k),M)for(let O=0;O<M.length;O++)I(v,M[O]);if(N){let O=N.subTree;if(A===O||mp(O.type)&&(O.ssContent===A||O.ssFallback===A)){const H=N.vnode;S(v,H,H.scopeId,H.slotScopeIds,N.parent)}}},g=(v,A,k,M,N,O,H,$,U=0)=>{for(let x=U;x<v.length;x++){const Z=v[x]=$?Dn(v[x]):zt(v[x]);L(null,Z,A,k,M,N,O,H,$)}},y=(v,A,k,M,N,O,H)=>{const $=A.el=v.el;let{patchFlag:U,dynamicChildren:x,dirs:Z}=A;U|=v.patchFlag&16;const q=v.props||Ae,Y=A.props||Ae;let se;if(k&&ms(k,!1),(se=Y.onVnodeBeforeUpdate)&&jt(se,k,A,v),Z&&ps(A,v,k,"beforeUpdate"),k&&ms(k,!0),(q.innerHTML&&Y.innerHTML==null||q.textContent&&Y.textContent==null)&&d($,""),x?T(v.dynamicChildren,x,$,k,M,rc(A,N),O):H||Ee(v,A,$,null,k,M,rc(A,N),O,!1),U>0){if(U&16)w($,q,Y,k,N);else if(U&2&&q.class!==Y.class&&i($,"class",null,Y.class,N),U&4&&i($,"style",q.style,Y.style,N),U&8){const ee=A.dynamicProps;for(let ue=0;ue<ee.length;ue++){const ge=ee[ue],We=q[ge],Ge=Y[ge];(Ge!==We||ge==="value")&&i($,ge,We,Ge,N,k)}}U&1&&v.children!==A.children&&d($,A.children)}else!H&&x==null&&w($,q,Y,k,N);((se=Y.onVnodeUpdated)||Z)&&At(()=>{se&&jt(se,k,A,v),Z&&ps(A,v,k,"updated")},M)},T=(v,A,k,M,N,O,H)=>{for(let $=0;$<A.length;$++){const U=v[$],x=A[$],Z=U.el&&(U.type===xe||!Or(U,x)||U.shapeFlag&198)?m(U.el):k;L(U,x,Z,null,M,N,O,H,!0)}},w=(v,A,k,M,N)=>{if(A!==k){if(A!==Ae)for(const O in A)!jr(O)&&!(O in k)&&i(v,O,A[O],null,N,M);for(const O in k){if(jr(O))continue;const H=k[O],$=A[O];H!==$&&O!=="value"&&i(v,O,$,H,N,M)}"value"in k&&i(v,"value",A.value,k.value,N)}},b=(v,A,k,M,N,O,H,$,U)=>{const x=A.el=v?v.el:c(""),Z=A.anchor=v?v.anchor:c("");let{patchFlag:q,dynamicChildren:Y,slotScopeIds:se}=A;se&&($=$?$.concat(se):se),v==null?(s(x,k,M),s(Z,k,M),g(A.children||[],k,Z,N,O,H,$,U)):q>0&&q&64&&Y&&v.dynamicChildren?(T(v.dynamicChildren,Y,k,N,O,H,$),(A.key!=null||N&&A===N.subTree)&&up(v,A,!0)):Ee(v,A,k,Z,N,O,H,$,U)},E=(v,A,k,M,N,O,H,$,U)=>{A.slotScopeIds=$,v==null?A.shapeFlag&512?N.ctx.activate(A,k,M,H,U):gt(A,k,M,N,O,H,U):$t(v,A,U)},gt=(v,A,k,M,N,O,H)=>{const $=v.component=gE(v,M,N);if(Jd(v)&&($.ctx.renderer=Bt),_E($,!1,H),$.asyncDep){if(N&&N.registerDep($,Ve,H),!v.el){const U=$.subTree=tt(Gn);z(null,U,A,k),v.placeholder=U.el}}else Ve($,v,A,k,N,O,H)},$t=(v,A,k)=>{const M=A.component=v.component;if(aE(v,A,k))if(M.asyncDep&&!M.asyncResolved){le(M,A,k);return}else M.next=A,M.update();else A.el=v.el,M.vnode=A},Ve=(v,A,k,M,N,O,H)=>{const $=()=>{if(v.isMounted){let{next:q,bu:Y,u:se,parent:ee,vnode:ue}=v;{const rt=hp(v);if(rt){q&&(q.el=ue.el,le(v,q,H)),rt.asyncDep.then(()=>{v.isUnmounted||$()});return}}let ge=q,We;ms(v,!1),q?(q.el=ue.el,le(v,q,H)):q=ue,Y&&ao(Y),(We=q.props&&q.props.onVnodeBeforeUpdate)&&jt(We,ee,q,ue),ms(v,!0);const Ge=yh(v),Ct=v.subTree;v.subTree=Ge,L(Ct,Ge,m(Ct.el),an(Ct),v,N,O),q.el=Ge.el,ge===null&&cE(v,Ge.el),se&&At(se,N),(We=q.props&&q.props.onVnodeUpdated)&&At(()=>jt(We,ee,q,ue),N)}else{let q;const{el:Y,props:se}=A,{bm:ee,m:ue,parent:ge,root:We,type:Ge}=v,Ct=Kr(A);ms(v,!1),ee&&ao(ee),!Ct&&(q=se&&se.onVnodeBeforeMount)&&jt(q,ge,A),ms(v,!0);{We.ce&&We.ce._def.shadowRoot!==!1&&We.ce._injectChildStyle(Ge);const rt=v.subTree=yh(v);L(null,rt,k,M,v,N,O),A.el=rt.el}if(ue&&At(ue,N),!Ct&&(q=se&&se.onVnodeMounted)){const rt=A;At(()=>jt(q,ge,rt),N)}(A.shapeFlag&256||ge&&Kr(ge.vnode)&&ge.vnode.shapeFlag&256)&&v.a&&At(v.a,N),v.isMounted=!0,A=k=M=null}};v.scope.on();const U=v.effect=new Rd($);v.scope.off();const x=v.update=U.run.bind(U),Z=v.job=U.runIfDirty.bind(U);Z.i=v,Z.id=v.uid,U.scheduler=()=>El(Z),ms(v,!0),x()},le=(v,A,k)=>{A.component=v;const M=v.vnode.props;v.vnode=A,v.next=null,qy(v,A.props,M,k),Gy(v,A.children,k),_n(),lh(v),yn()},Ee=(v,A,k,M,N,O,H,$,U=!1)=>{const x=v&&v.children,Z=v?v.shapeFlag:0,q=A.children,{patchFlag:Y,shapeFlag:se}=A;if(Y>0){if(Y&128){as(x,q,k,M,N,O,H,$,U);return}else if(Y&256){Nt(x,q,k,M,N,O,H,$,U);return}}se&8?(Z&16&&ls(x,N,O),q!==x&&d(k,q)):Z&16?se&16?as(x,q,k,M,N,O,H,$,U):ls(x,N,O,!0):(Z&8&&d(k,""),se&16&&g(q,k,M,N,O,H,$,U))},Nt=(v,A,k,M,N,O,H,$,U)=>{v=v||qs,A=A||qs;const x=v.length,Z=A.length,q=Math.min(x,Z);let Y;for(Y=0;Y<q;Y++){const se=A[Y]=U?Dn(A[Y]):zt(A[Y]);L(v[Y],se,k,null,N,O,H,$,U)}x>Z?ls(v,N,O,!0,!1,q):g(A,k,M,N,O,H,$,U,q)},as=(v,A,k,M,N,O,H,$,U)=>{let x=0;const Z=A.length;let q=v.length-1,Y=Z-1;for(;x<=q&&x<=Y;){const se=v[x],ee=A[x]=U?Dn(A[x]):zt(A[x]);if(Or(se,ee))L(se,ee,k,null,N,O,H,$,U);else break;x++}for(;x<=q&&x<=Y;){const se=v[q],ee=A[Y]=U?Dn(A[Y]):zt(A[Y]);if(Or(se,ee))L(se,ee,k,null,N,O,H,$,U);else break;q--,Y--}if(x>q){if(x<=Y){const se=Y+1,ee=se<Z?A[se].el:M;for(;x<=Y;)L(null,A[x]=U?Dn(A[x]):zt(A[x]),k,ee,N,O,H,$,U),x++}}else if(x>Y)for(;x<=q;)Be(v[x],N,O,!0),x++;else{const se=x,ee=x,ue=new Map;for(x=ee;x<=Y;x++){const Qe=A[x]=U?Dn(A[x]):zt(A[x]);Qe.key!=null&&ue.set(Qe.key,x)}let ge,We=0;const Ge=Y-ee+1;let Ct=!1,rt=0;const Sn=new Array(Ge);for(x=0;x<Ge;x++)Sn[x]=0;for(x=se;x<=q;x++){const Qe=v[x];if(We>=Ge){Be(Qe,N,O,!0);continue}let Pt;if(Qe.key!=null)Pt=ue.get(Qe.key);else for(ge=ee;ge<=Y;ge++)if(Sn[ge-ee]===0&&Or(Qe,A[ge])){Pt=ge;break}Pt===void 0?Be(Qe,N,O,!0):(Sn[Pt-ee]=x+1,Pt>=rt?rt=Pt:Ct=!0,L(Qe,A[Pt],k,null,N,O,H,$,U),We++)}const vr=Ct?Xy(Sn):qs;for(ge=vr.length-1,x=Ge-1;x>=0;x--){const Qe=ee+x,Pt=A[Qe],Oi=A[Qe+1],Vs=Qe+1<Z?Oi.el||Oi.placeholder:M;Sn[x]===0?L(null,Pt,k,Vs,N,O,H,$,U):Ct&&(ge<0||x!==vr[ge]?on(Pt,k,Vs,2):ge--)}}},on=(v,A,k,M,N=null)=>{const{el:O,type:H,transition:$,children:U,shapeFlag:x}=v;if(x&6){on(v.component.subTree,A,k,M);return}if(x&128){v.suspense.move(A,k,M);return}if(x&64){H.move(v,A,k,Bt);return}if(H===xe){s(O,A,k);for(let q=0;q<U.length;q++)on(U[q],A,k,M);s(v.anchor,A,k);return}if(H===ic){Q(v,A,k);return}if(M!==2&&x&1&&$)if(M===0)$.beforeEnter(O),s(O,A,k),At(()=>$.enter(O),N);else{const{leave:q,delayLeave:Y,afterLeave:se}=$,ee=()=>{v.ctx.isUnmounted?r(O):s(O,A,k)},ue=()=>{O._isLeaving&&O[yy](!0),q(O,()=>{ee(),se&&se()})};Y?Y(O,ee,ue):ue()}else s(O,A,k)},Be=(v,A,k,M=!1,N=!1)=>{const{type:O,props:H,ref:$,children:U,dynamicChildren:x,shapeFlag:Z,patchFlag:q,dirs:Y,cacheIndex:se}=v;if(q===-2&&(N=!1),$!=null&&(_n(),zr($,null,k,v,!0),yn()),se!=null&&(A.renderCache[se]=void 0),Z&256){A.ctx.deactivate(v);return}const ee=Z&1&&Y,ue=!Kr(v);let ge;if(ue&&(ge=H&&H.onVnodeBeforeUnmount)&&jt(ge,A,v),Z&6)cs(v.component,k,M);else{if(Z&128){v.suspense.unmount(k,M);return}ee&&ps(v,null,A,"beforeUnmount"),Z&64?v.type.remove(v,A,k,Bt,M):x&&!x.hasOnce&&(O!==xe||q>0&&q&64)?ls(x,A,k,!1,!0):(O===xe&&q&384||!N&&Z&16)&&ls(U,A,k),M&&je(v)}(ue&&(ge=H&&H.onVnodeUnmounted)||ee)&&At(()=>{ge&&jt(ge,A,v),ee&&ps(v,null,A,"unmounted")},k)},je=v=>{const{type:A,el:k,anchor:M,transition:N}=v;if(A===xe){xa(k,M);return}if(A===ic){G(v);return}const O=()=>{r(k),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(v.shapeFlag&1&&N&&!N.persisted){const{leave:H,delayLeave:$}=N,U=()=>H(k,O);$?$(v.el,O,U):U()}else O()},xa=(v,A)=>{let k;for(;v!==A;)k=_(v),r(v),v=k;r(A)},cs=(v,A,k)=>{const{bum:M,scope:N,job:O,subTree:H,um:$,m:U,a:x}=v;_h(U),_h(x),M&&ao(M),N.stop(),O&&(O.flags|=8,Be(H,v,A,k)),$&&At($,A),At(()=>{v.isUnmounted=!0},A)},ls=(v,A,k,M=!1,N=!1,O=0)=>{for(let H=O;H<v.length;H++)Be(v[H],A,k,M,N)},an=v=>{if(v.shapeFlag&6)return an(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const A=_(v.anchor||v.el),k=A&&A[gy];return k?_(k):A};let yr=!1;const Ni=(v,A,k)=>{v==null?A._vnode&&Be(A._vnode,null,null,!0):L(A._vnode||null,v,A,null,null,null,k),A._vnode=v,yr||(yr=!0,lh(),Kd(),yr=!1)},Bt={p:L,um:Be,m:on,r:je,mt:gt,mc:g,pc:Ee,pbc:T,n:an,o:t};return{render:Ni,hydrate:void 0,createApp:$y(Ni)}}function rc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ms({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Yy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function up(t,e,n=!1){const s=t.children,r=e.children;if(re(s)&&re(r))for(let i=0;i<s.length;i++){const a=s[i];let c=r[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[i]=Dn(r[i]),c.el=a.el),!n&&c.patchFlag!==-2&&up(a,c)),c.type===fa&&c.patchFlag!==-1&&(c.el=a.el),c.type===Gn&&!c.el&&(c.el=a.el)}}function Xy(t){const e=t.slice(),n=[0];let s,r,i,a,c;const l=t.length;for(s=0;s<l;s++){const h=t[s];if(h!==0){if(r=n[n.length-1],t[r]<h){e[s]=r,n.push(s);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function hp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hp(e)}function _h(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Zy=Symbol.for("v-scx"),eE=()=>Gr(Zy);function co(t,e,n){return fp(t,e,n)}function fp(t,e,n=Ae){const{immediate:s,deep:r,flush:i,once:a}=n,c=pt({},n),l=e&&s||!e&&i!=="post";let h;if(ai){if(i==="sync"){const I=eE();h=I.__watcherHandles||(I.__watcherHandles=[])}else if(!l){const I=()=>{};return I.stop=Gt,I.resume=Gt,I.pause=Gt,I}}const d=ft;c.call=(I,P,L)=>nn(I,d,P,L);let m=!1;i==="post"?c.scheduler=I=>{At(I,d&&d.suspense)}:i!=="sync"&&(m=!0,c.scheduler=(I,P)=>{P?I():El(I)}),c.augmentJob=I=>{e&&(I.flags|=4),m&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const _=hy(t,e,c);return ai&&(h?h.push(_):l&&_()),_}function tE(t,e,n){const s=this.proxy,r=$e(t)?t.includes(".")?dp(s,t):()=>s[t]:t.bind(s,s);let i;ae(e)?i=e:(i=e.handler,n=e);const a=vi(this),c=fp(r,i.bind(s),n);return a(),c}function dp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const nE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Dt(e)}Modifiers`]||t[`${ts(e)}Modifiers`];function sE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ae;let r=n;const i=e.startsWith("update:"),a=i&&nE(s,e.slice(7));a&&(a.trim&&(r=n.map(d=>$e(d)?d.trim():d)),a.number&&(r=n.map(Io)));let c,l=s[c=Xa(e)]||s[c=Xa(Dt(e))];!l&&i&&(l=s[c=Xa(ts(e))]),l&&nn(l,t,6,r);const h=s[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,nn(h,t,6,r)}}const rE=new WeakMap;function pp(t,e,n=!1){const s=n?rE:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let a={},c=!1;if(!ae(t)){const l=h=>{const d=pp(h,e,!0);d&&(c=!0,pt(a,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Re(t)&&s.set(t,null),null):(re(i)?i.forEach(l=>a[l]=null):pt(a,i),Re(t)&&s.set(t,a),a)}function ha(t,e){return!t||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,ts(e))||Te(t,e))}function yh(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:m,data:_,setupState:I,ctx:P,inheritAttrs:L}=t,F=Ro(t);let z,W;try{if(n.shapeFlag&4){const G=r||s,he=G;z=zt(h.call(he,G,d,m,I,_,P)),W=c}else{const G=e;z=zt(G.length>1?G(m,{attrs:c,slots:a,emit:l}):G(m,null)),W=e.props?c:iE(c)}}catch(G){Qr.length=0,la(G,t,1),z=tt(Gn)}let Q=z;if(W&&L!==!1){const G=Object.keys(W),{shapeFlag:he}=Q;G.length&&he&7&&(i&&G.some(ol)&&(W=oE(W,i)),Q=tr(Q,W,!1,!0))}return n.dirs&&(Q=tr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&vl(Q,n.transition),z=Q,Ro(F),z}const iE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ta(n))&&((e||(e={}))[n]=t[n]);return e},oE=(t,e)=>{const n={};for(const s in t)(!ol(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function aE(t,e,n){const{props:s,children:r,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Eh(s,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const _=d[m];if(a[_]!==s[_]&&!ha(h,_))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?Eh(s,a,h):!0:!!a;return!1}function Eh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ha(n,i))return!0}return!1}function cE({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const mp=t=>t.__isSuspense;function lE(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):py(t)}const xe=Symbol.for("v-fgt"),fa=Symbol.for("v-txt"),Gn=Symbol.for("v-cmt"),ic=Symbol.for("v-stc"),Qr=[];let bt=null;function oe(t=!1){Qr.push(bt=t?null:[])}function uE(){Qr.pop(),bt=Qr[Qr.length-1]||null}let oi=1;function vh(t,e=!1){oi+=t,t<0&&bt&&e&&(bt.hasOnce=!0)}function gp(t){return t.dynamicChildren=oi>0?bt||qs:null,uE(),oi>0&&bt&&bt.push(t),t}function fe(t,e,n,s,r,i){return gp(j(t,e,n,s,r,i,!0))}function ko(t,e,n,s,r){return gp(tt(t,e,n,s,r,!0))}function _p(t){return t?t.__v_isVNode===!0:!1}function Or(t,e){return t.type===e.type&&t.key===e.key}const yp=({key:t})=>t??null,lo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||De(t)||ae(t)?{i:St,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,s=0,r=null,i=t===xe?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yp(e),ref:e&&lo(e),scopeId:Gd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:St};return c?(wl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),oi>0&&!a&&bt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&bt.push(l),l}const tt=hE;function hE(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Vy)&&(t=Gn),_p(t)){const c=tr(t,e,!0);return n&&wl(c,n),oi>0&&!i&&bt&&(c.shapeFlag&6?bt[bt.indexOf(t)]=c:bt.push(c)),c.patchFlag=-2,c}if(IE(t)&&(t=t.__vccOpts),e){e=fE(e);let{class:c,style:l}=e;c&&!$e(c)&&(e.class=er(c)),Re(l)&&(gl(l)&&!re(l)&&(l=pt({},l)),e.style=ll(l))}const a=$e(t)?1:mp(t)?128:_y(t)?64:Re(t)?4:ae(t)?2:0;return j(t,e,n,s,r,a,i,!0)}function fE(t){return t?gl(t)||rp(t)?pt({},t):t:null}function tr(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?dE(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&yp(h),ref:e&&e.ref?n&&i?re(i)?i.concat(lo(e)):[i,lo(e)]:lo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tr(t.ssContent),ssFallback:t.ssFallback&&tr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&vl(d,l.clone(d)),d}function Vo(t=" ",e=0){return tt(fa,null,t,e)}function Un(t="",e=!1){return e?(oe(),ko(Gn,null,t)):tt(Gn,null,t)}function zt(t){return t==null||typeof t=="boolean"?tt(Gn):re(t)?tt(xe,null,t.slice()):_p(t)?Dn(t):tt(fa,null,String(t))}function Dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:tr(t)}function wl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),wl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!rp(e)?e._ctx=St:r===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:St},n=32):(e=String(e),s&64?(n=16,e=[Vo(e)]):n=8);t.children=e,t.shapeFlag|=n}function dE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=er([e.class,s.class]));else if(r==="style")e.style=ll([e.style,s.style]);else if(ta(r)){const i=e[r],a=s[r];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[r]=i?[].concat(i,a):a)}else r!==""&&(e[r]=s[r])}return e}function jt(t,e,n,s=null){nn(t,e,7,[n,s])}const pE=tp();let mE=0;function gE(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||pE,i={uid:mE++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ad(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:op(s,r),emitsOptions:pp(s,r),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sE.bind(null,i),t.ce&&t.ce(i),i}let ft=null;const Ep=()=>ft||St;let Do,Cc;{const t=ia(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(a=>a(i)):r[0](i)}};Do=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),Cc=e("__VUE_SSR_SETTERS__",n=>ai=n)}const vi=t=>{const e=ft;return Do(t),t.scope.on(),()=>{t.scope.off(),Do(e)}},Th=()=>{ft&&ft.scope.off(),Do(null)};function vp(t){return t.vnode.shapeFlag&4}let ai=!1;function _E(t,e=!1,n=!1){e&&Cc(e);const{props:s,children:r}=t.vnode,i=vp(t);Hy(t,s,i,e),Wy(t,r,n||e);const a=i?yE(t,e):void 0;return e&&Cc(!1),a}function yE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ny);const{setup:s}=n;if(s){_n();const r=t.setupContext=s.length>1?vE(t):null,i=vi(t),a=yi(s,t,0,[t.props,r]),c=_d(a);if(yn(),i(),(c||t.sp)&&!Kr(t)&&Qd(t),c){if(a.then(Th,Th),e)return a.then(l=>{Ih(t,l)}).catch(l=>{la(l,t,0)});t.asyncDep=a}else Ih(t,a)}else Tp(t)}function Ih(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=jd(e)),Tp(t)}function Tp(t,e,n){const s=t.type;t.render||(t.render=s.render||Gt);{const r=vi(t);_n();try{Oy(t)}finally{yn(),r()}}}const EE={get(t,e){return ut(t,"get",""),t[e]}};function vE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,EE),slots:t.slots,emit:t.emit,expose:e}}function da(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jd(_l(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wr)return Wr[n](t)},has(e,n){return n in e||n in Wr}})):t.proxy}function TE(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function IE(t){return ae(t)&&"__vccOpts"in t}const Ti=(t,e)=>ly(t,e,ai),wE="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pc;const wh=typeof window<"u"&&window.trustedTypes;if(wh)try{Pc=wh.createPolicy("vue",{createHTML:t=>t})}catch{}const Ip=Pc?t=>Pc.createHTML(t):t=>t,AE="http://www.w3.org/2000/svg",SE="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,Ah=hn&&hn.createElement("template"),bE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?hn.createElementNS(AE,t):e==="mathml"?hn.createElementNS(SE,t):n?hn.createElement(t,{is:n}):hn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>hn.createTextNode(t),createComment:t=>hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const a=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ah.innerHTML=Ip(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const c=Ah.content;if(s==="svg"||s==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},RE=Symbol("_vtc");function CE(t,e,n){const s=t[RE];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Sh=Symbol("_vod"),PE=Symbol("_vsh"),kE=Symbol(""),VE=/(?:^|;)\s*display\s*:/;function DE(t,e,n){const s=t.style,r=$e(n);let i=!1;if(n&&!r){if(e)if($e(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&uo(s,c,"")}else for(const a in e)n[a]==null&&uo(s,a,"");for(const a in n)a==="display"&&(i=!0),uo(s,a,n[a])}else if(r){if(e!==n){const a=s[kE];a&&(n+=";"+a),s.cssText=n,i=VE.test(n)}}else e&&t.removeAttribute("style");Sh in t&&(t[Sh]=i?s.display:"",t[PE]&&(s.display="none"))}const bh=/\s*!important$/;function uo(t,e,n){if(re(n))n.forEach(s=>uo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=NE(t,e);bh.test(n)?t.setProperty(ts(s),n.replace(bh,""),"important"):t[s]=n}}const Rh=["Webkit","Moz","ms"],oc={};function NE(t,e){const n=oc[e];if(n)return n;let s=Dt(e);if(s!=="filter"&&s in t)return oc[e]=s;s=ra(s);for(let r=0;r<Rh.length;r++){const i=Rh[r]+s;if(i in t)return oc[e]=i}return e}const Ch="http://www.w3.org/1999/xlink";function Ph(t,e,n,s,r,i=k_(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ch,e.slice(6,e.length)):t.setAttributeNS(Ch,e,n):n==null||i&&!Td(n)?t.removeAttribute(e):t.setAttribute(e,i?"":tn(n)?String(n):n)}function kh(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ip(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Td(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function ys(t,e,n,s){t.addEventListener(e,n,s)}function OE(t,e,n,s){t.removeEventListener(e,n,s)}const Vh=Symbol("_vei");function LE(t,e,n,s,r=null){const i=t[Vh]||(t[Vh]={}),a=i[e];if(s&&a)a.value=s;else{const[c,l]=ME(e);if(s){const h=i[e]=UE(s,r);ys(t,c,h,l)}else a&&(OE(t,c,a,l),i[e]=void 0)}}const Dh=/(?:Once|Passive|Capture)$/;function ME(t){let e;if(Dh.test(t)){e={};let s;for(;s=t.match(Dh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ts(t.slice(2)),e]}let ac=0;const xE=Promise.resolve(),FE=()=>ac||(xE.then(()=>ac=0),ac=Date.now());function UE(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;nn($E(s,n.value),e,5,[s])};return n.value=t,n.attached=FE(),n}function $E(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Nh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,BE=(t,e,n,s,r,i)=>{const a=r==="svg";e==="class"?CE(t,s,a):e==="style"?DE(t,n,s):ta(e)?ol(e)||LE(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jE(t,e,s,a))?(kh(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ph(t,e,s,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!$e(s))?kh(t,Dt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ph(t,e,s,a))};function jE(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nh(e)&&ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Nh(e)&&$e(n)?!1:e in t}const No=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>ao(e,n):e};function HE(t){t.target.composing=!0}function Oh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ws=Symbol("_assign"),vt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Ws]=No(r);const i=s||r.props&&r.props.type==="number";ys(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Io(c)),t[Ws](c)}),n&&ys(t,"change",()=>{t.value=t.value.trim()}),e||(ys(t,"compositionstart",HE),ys(t,"compositionend",Oh),ys(t,"change",Oh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},a){if(t[Ws]=No(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Io(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l))}},kc={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=na(e);ys(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?Io(Oo(a)):Oo(a));t[Ws](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,yl(()=>{t._assigning=!1})}),t[Ws]=No(s)},mounted(t,{value:e}){Lh(t,e)},beforeUpdate(t,e,n){t[Ws]=No(n)},updated(t,{value:e}){t._assigning||Lh(t,e)}};function Lh(t,e){const n=t.multiple,s=re(e);if(!(n&&!s&&!na(e))){for(let r=0,i=t.options.length;r<i;r++){const a=t.options[r],c=Oo(a);if(n)if(s){const l=typeof c;l==="string"||l==="number"?a.selected=e.some(h=>String(h)===String(c)):a.selected=D_(e,c)>-1}else a.selected=e.has(c);else if(oa(Oo(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Oo(t){return"_value"in t?t._value:t.value}const qE=["ctrl","shift","alt","meta"],zE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qE.some(n=>t[`${n}Key`]&&!e.includes(n))},Mr=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let a=0;a<e.length;a++){const c=zE[e[a]];if(c&&c(r,e))return}return t(r,...i)}))},KE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Mh=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=(r=>{if(!("key"in r))return;const i=ts(r.key);if(e.some(a=>a===i||KE[a]===i))return t(r)}))},WE=pt({patchProp:BE},bE);let xh;function GE(){return xh||(xh=Qy(WE))}const QE=((...t)=>{const e=GE().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=YE(s);if(!r)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,JE(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function JE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function YE(t){return $e(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let wp;const pa=t=>wp=t,Ap=Symbol();function Vc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Jr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Jr||(Jr={}));function XE(){const t=Sd(!0),e=t.run(()=>Fe({}));let n=[],s=[];const r=_l({install(i){pa(r),r._a=i,i.provide(Ap,r),i.config.globalProperties.$pinia=r,s.forEach(a=>n.push(a)),s=[]},use(i){return this._a?n.push(i):s.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Sp=()=>{};function Fh(t,e,n,s=Sp){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&bd()&&N_(r),r}function xs(t,...e){t.slice().forEach(n=>{n(...e)})}const ZE=t=>t(),Uh=Symbol(),cc=Symbol();function Dc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Vc(r)&&Vc(s)&&t.hasOwnProperty(n)&&!De(s)&&!gn(s)?t[n]=Dc(r,s):t[n]=s}return t}const ev=Symbol();function tv(t){return!Vc(t)||!Object.prototype.hasOwnProperty.call(t,ev)}const{assign:kn}=Object;function nv(t){return!!(De(t)&&t.effect)}function sv(t,e,n,s){const{state:r,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=r?r():{});const d=ry(n.state.value[t]);return kn(d,i,Object.keys(a||{}).reduce((m,_)=>(m[_]=_l(Ti(()=>{pa(n);const I=n._s.get(t);return a[_].call(I,I)})),m),{}))}return l=bp(t,h,e,n,s,!0),l}function bp(t,e,n={},s,r,i){let a;const c=kn({actions:{}},n),l={deep:!0};let h,d,m=[],_=[],I;const P=s.state.value[t];!i&&!P&&(s.state.value[t]={}),Fe({});let L;function F(g){let y;h=d=!1,typeof g=="function"?(g(s.state.value[t]),y={type:Jr.patchFunction,storeId:t,events:I}):(Dc(s.state.value[t],g),y={type:Jr.patchObject,payload:g,storeId:t,events:I});const T=L=Symbol();yl().then(()=>{L===T&&(h=!0)}),d=!0,xs(m,y,s.state.value[t])}const z=i?function(){const{state:y}=n,T=y?y():{};this.$patch(w=>{kn(w,T)})}:Sp;function W(){a.stop(),m=[],_=[],s._s.delete(t)}const Q=(g,y="")=>{if(Uh in g)return g[cc]=y,g;const T=function(){pa(s);const w=Array.from(arguments),b=[],E=[];function gt(le){b.push(le)}function $t(le){E.push(le)}xs(_,{args:w,name:T[cc],store:he,after:gt,onError:$t});let Ve;try{Ve=g.apply(this&&this.$id===t?this:he,w)}catch(le){throw xs(E,le),le}return Ve instanceof Promise?Ve.then(le=>(xs(b,le),le)).catch(le=>(xs(E,le),Promise.reject(le))):(xs(b,Ve),Ve)};return T[Uh]=!0,T[cc]=y,T},G={_p:s,$id:t,$onAction:Fh.bind(null,_),$patch:F,$reset:z,$subscribe(g,y={}){const T=Fh(m,g,y.detached,()=>w()),w=a.run(()=>co(()=>s.state.value[t],b=>{(y.flush==="sync"?d:h)&&g({storeId:t,type:Jr.direct,events:I},b)},kn({},l,y)));return T},$dispose:W},he=ca(G);s._s.set(t,he);const S=(s._a&&s._a.runWithContext||ZE)(()=>s._e.run(()=>(a=Sd()).run(()=>e({action:Q}))));for(const g in S){const y=S[g];if(De(y)&&!nv(y)||gn(y))i||(P&&tv(y)&&(De(y)?y.value=P[g]:Dc(y,P[g])),s.state.value[t][g]=y);else if(typeof y=="function"){const T=Q(y,g);S[g]=T,c.actions[g]=y}}return kn(he,S),kn(ye(he),S),Object.defineProperty(he,"$state",{get:()=>s.state.value[t],set:g=>{F(y=>{kn(y,g)})}}),s._p.forEach(g=>{kn(he,a.run(()=>g({store:he,app:s._a,pinia:s,options:c})))}),P&&i&&n.hydrate&&n.hydrate(he.$state,P),h=!0,d=!0,he}/*! #__NO_SIDE_EFFECTS__ */function rv(t,e,n){let s;const r=typeof e=="function";s=r?n:e;function i(a,c){const l=jy();return a=a||(l?Gr(Ap,null):null),a&&pa(a),a=wp,a._s.has(t)||(r?bp(t,e,s,a):sv(t,s,a)),a._s.get(t)}return i.$id=t,i}function iv(t){const e=ye(t),n={};for(const s in e){const r=e[s];r.effect?n[s]=Ti({get:()=>t[s],set(i){t[s]=i}}):(De(r)||gn(r))&&(n[s]=ay(t,s))}return n}const ov=()=>{};var $h={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},av=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],a=t[n++],c=t[n++],l=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Cp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],a=r+1<t.length,c=a?t[r+1]:0,l=r+2<t.length,h=l?t[r+2]:0,d=i>>2,m=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,I=h&63;l||(I=64,a||(_=64)),s.push(n[d],n[m],n[_],n[I])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):av(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const m=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||c==null||h==null||m==null)throw new cv;const _=i<<2|c>>4;if(s.push(_),h!==64){const I=c<<4&240|h>>2;if(s.push(I),m!==64){const P=h<<6&192|m;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lv=function(t){const e=Rp(t);return Cp.encodeByteArray(e,!0)},Lo=function(t){return lv(t).replace(/\./g,"")},Pp=function(t){try{return Cp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=()=>uv().__FIREBASE_DEFAULTS__,fv=()=>{if(typeof process>"u"||typeof $h>"u")return;const t=$h.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pp(t[1]);return e&&JSON.parse(e)},ma=()=>{try{return ov()||hv()||fv()||dv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kp=t=>ma()?.emulatorHosts?.[t],pv=t=>{const e=kp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Vp=()=>ma()?.config,Dp=t=>ma()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Np(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Lo(JSON.stringify(n)),Lo(JSON.stringify(a)),""].join(".")}const Yr={};function _v(){const t={prod:[],emulator:[]};for(const e of Object.keys(Yr))Yr[e]?t.emulator.push(e):t.prod.push(e);return t}function yv(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Bh=!1;function Op(t,e){if(typeof window>"u"||typeof document>"u"||!ur(window.location.host)||Yr[t]===e||Yr[t]||Bh)return;Yr[t]=e;function n(_){return`__firebase__banner__${_}`}const s="__firebase__banner",i=_v().prod.length>0;function a(){const _=document.getElementById(s);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,I){_.setAttribute("width","24"),_.setAttribute("id",I),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Bh=!0,a()},_}function d(_,I){_.setAttribute("id",I),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){const _=yv(s),I=n("text"),P=document.getElementById(I)||document.createElement("span"),L=n("learnmore"),F=document.getElementById(L)||document.createElement("a"),z=n("preprendIcon"),W=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const Q=_.element;c(Q),d(F,L);const G=h();l(W,z),Q.append(W,P,F,G),document.body.appendChild(Q)}i?(P.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ev(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function vv(){const t=ma()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Iv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Av(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sv(){return!vv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bv(){try{return typeof indexedDB=="object"}catch{return!1}}function Rv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="FirebaseError";class An extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Cv,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Pv(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new An(r,c,s)}}function Pv(t,e){return t.replace(kv,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const kv=/\{\$([^}]+)}/g;function Vv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Is(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],a=e[r];if(jh(i)&&jh(a)){if(!Is(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function jh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function xr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Fr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dv(t,e){const n=new Nv(t,e);return n.subscribe.bind(n)}class Nv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ov(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=lc),r.error===void 0&&(r.error=lc),r.complete===void 0&&(r.complete=lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ov(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class ws{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xv(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Mv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mv(t){return t===_s?void 0:t}function xv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const Uv={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},$v=de.INFO,Bv={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},jv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Bv[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Al{constructor(e){this.name=e,this._logLevel=$v,this._logHandler=jv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Hv=(t,e)=>e.some(n=>t instanceof n);let Hh,qh;function qv(){return Hh||(Hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zv(){return qh||(qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lp=new WeakMap,Nc=new WeakMap,Mp=new WeakMap,uc=new WeakMap,Sl=new WeakMap;function Kv(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n($n(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Lp.set(n,t)}).catch(()=>{}),Sl.set(e,t),e}function Wv(t){if(Nc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Nc.set(t,e)}let Oc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gv(t){Oc=t(Oc)}function Qv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(hc(this),e,...n);return Mp.set(s,e.sort?e.sort():[e]),$n(s)}:zv().includes(t)?function(...e){return t.apply(hc(this),e),$n(Lp.get(this))}:function(...e){return $n(t.apply(hc(this),e))}}function Jv(t){return typeof t=="function"?Qv(t):(t instanceof IDBTransaction&&Wv(t),Hv(t,qv())?new Proxy(t,Oc):t)}function $n(t){if(t instanceof IDBRequest)return Kv(t);if(uc.has(t))return uc.get(t);const e=Jv(t);return e!==t&&(uc.set(t,e),Sl.set(e,t)),e}const hc=t=>Sl.get(t);function Yv(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),c=$n(a);return s&&a.addEventListener("upgradeneeded",l=>{s($n(a.result),l.oldVersion,l.newVersion,$n(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Xv=["get","getKey","getAll","getAllKeys","count"],Zv=["put","add","delete","clear"],fc=new Map;function zh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Zv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Xv.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),r&&l.done]))[0]};return fc.set(e,i),i}Gv(t=>({...t,get:(e,n,s)=>zh(e,n)||t.get(e,n,s),has:(e,n)=>!!zh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tT(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tT(t){return t.getComponent()?.type==="VERSION"}const Lc="@firebase/app",Kh="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Al("@firebase/app"),nT="@firebase/app-compat",sT="@firebase/analytics-compat",rT="@firebase/analytics",iT="@firebase/app-check-compat",oT="@firebase/app-check",aT="@firebase/auth",cT="@firebase/auth-compat",lT="@firebase/database",uT="@firebase/data-connect",hT="@firebase/database-compat",fT="@firebase/functions",dT="@firebase/functions-compat",pT="@firebase/installations",mT="@firebase/installations-compat",gT="@firebase/messaging",_T="@firebase/messaging-compat",yT="@firebase/performance",ET="@firebase/performance-compat",vT="@firebase/remote-config",TT="@firebase/remote-config-compat",IT="@firebase/storage",wT="@firebase/storage-compat",AT="@firebase/firestore",ST="@firebase/ai",bT="@firebase/firestore-compat",RT="firebase",CT="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="[DEFAULT]",PT={[Lc]:"fire-core",[nT]:"fire-core-compat",[rT]:"fire-analytics",[sT]:"fire-analytics-compat",[oT]:"fire-app-check",[iT]:"fire-app-check-compat",[aT]:"fire-auth",[cT]:"fire-auth-compat",[lT]:"fire-rtdb",[uT]:"fire-data-connect",[hT]:"fire-rtdb-compat",[fT]:"fire-fn",[dT]:"fire-fn-compat",[pT]:"fire-iid",[mT]:"fire-iid-compat",[gT]:"fire-fcm",[_T]:"fire-fcm-compat",[yT]:"fire-perf",[ET]:"fire-perf-compat",[vT]:"fire-rc",[TT]:"fire-rc-compat",[IT]:"fire-gcs",[wT]:"fire-gcs-compat",[AT]:"fire-fst",[bT]:"fire-fst-compat",[ST]:"fire-vertex","fire-js":"fire-js",[RT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Map,kT=new Map,xc=new Map;function Wh(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nr(t){const e=t.name;if(xc.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;xc.set(e,t);for(const n of Mo.values())Wh(n,t);for(const n of kT.values())Wh(n,t);return!0}function bl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new Ii("app","Firebase",VT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=CT;function xp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Mc,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Bn.create("bad-app-name",{appName:String(r)});if(n||(n=Vp()),!n)throw Bn.create("no-options");const i=Mo.get(r);if(i){if(Is(n,i.options)&&Is(s,i.config))return i;throw Bn.create("duplicate-app",{appName:r})}const a=new Fv(r);for(const l of xc.values())a.addComponent(l);const c=new DT(n,s,a);return Mo.set(r,c),c}function Fp(t=Mc){const e=Mo.get(t);if(!e&&t===Mc&&Vp())return xp();if(!e)throw Bn.create("no-app",{appName:t});return e}function jn(t,e,n){let s=PT[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(a.join(" "));return}nr(new ws(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="firebase-heartbeat-database",OT=1,ci="firebase-heartbeat-store";let dc=null;function Up(){return dc||(dc=Yv(NT,OT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),dc}async function LT(t){try{const n=(await Up()).transaction(ci),s=await n.objectStore(ci).get($p(t));return await n.done,s}catch(e){if(e instanceof An)En.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e?.message});En.warn(n.message)}}}async function Gh(t,e){try{const s=(await Up()).transaction(ci,"readwrite");await s.objectStore(ci).put(e,$p(t)),await s.done}catch(n){if(n instanceof An)En.warn(n.message);else{const s=Bn.create("idb-set",{originalErrorMessage:n?.message});En.warn(s.message)}}}function $p(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=1024,xT=30;class FT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $T(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>xT){const r=BT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){En.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qh(),{heartbeatsToSend:n,unsentEntries:s}=UT(this._heartbeatsCache.heartbeats),r=Lo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return En.warn(e),""}}}function Qh(){return new Date().toISOString().substring(0,10)}function UT(t,e=MT){const n=[];let s=t.slice();for(const r of t){const i=n.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Jh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Jh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $T{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bv()?Rv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LT(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Gh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Gh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jh(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}function BT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(t){nr(new ws("platform-logger",e=>new eT(e),"PRIVATE")),nr(new ws("heartbeat",e=>new FT(e),"PRIVATE")),jn(Lc,Kh,t),jn(Lc,Kh,"esm2020"),jn("fire-js","")}jT("");function Bp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HT=Bp,jp=new Ii("auth","Firebase",Bp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Al("@firebase/auth");function qT(t,...e){xo.logLevel<=de.WARN&&xo.warn(`Auth (${hr}): ${t}`,...e)}function ho(t,...e){xo.logLevel<=de.ERROR&&xo.error(`Auth (${hr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,...e){throw Rl(t,...e)}function Qt(t,...e){return Rl(t,...e)}function Hp(t,e,n){const s={...HT(),[e]:n};return new Ii("auth","Firebase",s).create(e,{appName:t.name})}function Hn(t){return Hp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return jp.create(t,...e)}function te(t,e,...n){if(!t)throw Rl(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ho(e),new Error(e)}function vn(t,e){t||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){return typeof self<"u"&&self.location?.href||""}function zT(){return Yh()==="http:"||Yh()==="https:"}function Yh(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zT()||Iv()||"connection"in navigator)?navigator.onLine:!0}function WT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ev()||wv()}get(){return KT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JT=new Ai(3e4,6e4);function Cs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ss(t,e,n,s,r={}){return zp(t,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=wi({key:t.config.apiKey,...a}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return Tv()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ur(t.emulatorConfig.host)&&(h.credentials="include"),qp.fetch()(await Kp(t,t.config.apiHost,n,c),h)})}async function zp(t,e,n){t._canInitEmulator=!1;const s={...GT,...e};try{const r=new XT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Zi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Zi(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Zi(t,"user-disabled",a);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Hp(t,d,h);Ut(t,d)}}catch(r){if(r instanceof An)throw r;Ut(t,"network-request-failed",{message:String(r)})}}async function ga(t,e,n,s,r={}){const i=await ss(t,e,n,s,r);return"mfaPendingCredential"in i&&Ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Kp(t,e,n,s){const r=`${e}${n}?${s}`,i=t,a=i.config.emulator?Cl(t.config,r):`${t.config.apiScheme}://${r}`;return QT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function YT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qt(this.auth,"network-request-failed")),JT.get())})}}function Zi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Qt(t,e,s);return r.customData._tokenResponse=n,r}function Xh(t){return t!==void 0&&t.enterprise!==void 0}class ZT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eI(t,e){return ss(t,"GET","/v2/recaptchaConfig",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t,e){return ss(t,"POST","/v1/accounts:delete",e)}async function Fo(t,e){return ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nI(t,e=!1){const n=nt(t),s=await n.getIdToken(e),r=Pl(s);te(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i?.sign_in_provider;return{claims:r,token:s,authTime:Xr(pc(r.auth_time)),issuedAtTime:Xr(pc(r.iat)),expirationTime:Xr(pc(r.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function pc(t){return Number(t)*1e3}function Pl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const r=Pp(n);return r?JSON.parse(r):(ho("Failed to decode base64 JWT payload"),null)}catch(r){return ho("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Zh(t){const e=Pl(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof An&&sI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function sI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xr(this.lastLoginAt),this.creationTime=Xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t){const e=t.auth,n=await t.getIdToken(),s=await li(t,Fo(e,{idToken:n}));te(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?Wp(r.providerUserInfo):[],a=oI(t.providerData,i),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!a?.length,h=c?l:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Uc(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function iI(t){const e=nt(t);await Uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Wp(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e){const n=await zp(t,{},async()=>{const s=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,a=await Kp(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return t.emulatorConfig&&ur(t.emulatorConfig.host)&&(l.credentials="include"),qp.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cI(t,e){return ss(t,"POST","/v2/accounts:revokeToken",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Zh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await aI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,a=new Gs;return s&&(te(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(te(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mt{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new rI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Uc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nI(this,e)}reload(){return iI(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Uo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await li(this,tI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:m,emailVerified:_,isAnonymous:I,providerData:P,stsTokenManager:L}=n;te(m&&L,e,"internal-error");const F=Gs.fromJSON(this.name,L);te(typeof m=="string",e,"internal-error"),Pn(s,e.name),Pn(r,e.name),te(typeof _=="boolean",e,"internal-error"),te(typeof I=="boolean",e,"internal-error"),Pn(i,e.name),Pn(a,e.name),Pn(c,e.name),Pn(l,e.name),Pn(h,e.name),Pn(d,e.name);const z=new Mt({uid:m,auth:e,email:r,emailVerified:_,displayName:s,isAnonymous:I,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:F,createdAt:h,lastLoginAt:d});return P&&Array.isArray(P)&&(z.providerData=P.map(W=>({...W}))),l&&(z._redirectEventId=l),z}static async _fromIdTokenResponse(e,n,s=!1){const r=new Gs;r.updateFromServerResponse(n);const i=new Mt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Uo(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];te(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Wp(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!i?.length,c=new Gs;c.updateFromIdToken(s);const l=new Mt({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Uc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=new Map;function mn(t){vn(t instanceof Function,"Expected a class definition");let e=ef.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ef.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gp.type="NONE";const tf=Gp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class Qs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=fo(this.userKey,r.apiKey,i),this.fullPersistenceKey=fo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fo(this.auth,{idToken:e}).catch(()=>{});return n?Mt._fromGetAccountInfoResponse(this.auth,n,e):null}return Mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Qs(mn(tf),e,s);const r=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||mn(tf);const a=fo(s,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(a);if(d){let m;if(typeof d=="string"){const _=await Fo(e,{idToken:d}).catch(()=>{});if(!_)break;m=await Mt._fromGetAccountInfoResponse(e,_,d)}else m=Mt._fromJSON(e,d);h!==i&&(c=m),i=h;break}}catch{}const l=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Qs(i,e,s):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Qs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(em(e))return"Blackberry";if(tm(e))return"Webos";if(Jp(e))return"Safari";if((e.includes("chrome/")||Yp(e))&&!e.includes("edge/"))return"Chrome";if(Zp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Qp(t=mt()){return/firefox\//i.test(t)}function Jp(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yp(t=mt()){return/crios\//i.test(t)}function Xp(t=mt()){return/iemobile/i.test(t)}function Zp(t=mt()){return/android/i.test(t)}function em(t=mt()){return/blackberry/i.test(t)}function tm(t=mt()){return/webos/i.test(t)}function kl(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lI(t=mt()){return kl(t)&&!!window.navigator?.standalone}function uI(){return Av()&&document.documentMode===10}function nm(t=mt()){return kl(t)||Zp(t)||tm(t)||em(t)||/windows phone/i.test(t)||Xp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e=[]){let n;switch(t){case"Browser":n=nf(mt());break;case"Worker":n=`${nf(mt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(t,e={}){return ss(t,"GET","/v2/passwordPolicy",Cs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=6;class pI{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??dI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sf(this),this.idTokenSubscription=new sf(this),this.beforeStateQueue=new hI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fo(this,{idToken:e}),s=await Mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Lt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&c?.user&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(Hn(this));const n=e?nt(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fI(this),n=new pI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await cI(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&qT(`Error while retrieving App Check token: ${e.error}`),e?.token}}function fr(t){return nt(t)}class sf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dv(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gI(t){_a=t}function rm(t){return _a.loadJS(t)}function _I(){return _a.recaptchaEnterpriseScript}function yI(){return _a.gapiScript}function EI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class vI{constructor(){this.enterprise=new TI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class TI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const II="recaptcha-enterprise",im="NO_RECAPTCHA";class wI{constructor(e){this.type=II,this.auth=fr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{eI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new ZT(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function r(i,a,c){const l=window.grecaptcha;Xh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(im)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vI().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(c=>{if(!n&&Xh(window.grecaptcha))r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_I();l.length!==0&&(l+=c),rm(l).then(()=>{r(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function rf(t,e,n,s=!1,r=!1){const i=new wI(t);let a;if(r)a=im;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function of(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await rf(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await rf(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t,e){const n=bl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Is(i,e??{}))return r;Ut(r,"already-initialized")}return n.initialize({options:e})}function SI(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(mn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function bI(t,e,n){const s=fr(t);te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=om(e),{host:a,port:c}=RI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),te(Is(h,s.config.emulator)&&Is(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,ur(a)?(Np(`${i}//${a}${l}`),Op("Auth",!0)):CI()}function om(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RI(t){const e=om(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:af(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:af(a)}}}function af(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function CI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function PI(t,e){return ss(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(t,e){return ga(t,"POST","/v1/accounts:signInWithPassword",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",Cs(t,e))}async function DI(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Vl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ui(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ui(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return of(e,n,"signInWithPassword",kI);case"emailLink":return VI(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return of(e,s,"signUpPassword",PI);case"emailLink":return DI(e,{idToken:n,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t,e){return ga(t,"POST","/v1/accounts:signInWithIdp",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="http://localhost";class As extends Vl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const a=new As(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Js(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Js(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Js(e,n)}buildRequest(){const e={requestUri:NI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LI(t){const e=xr(Fr(t)).link,n=e?xr(Fr(e)).deep_link_id:null,s=xr(Fr(t)).deep_link_id;return(s?xr(Fr(s)).link:null)||s||n||e||t}class Dl{constructor(e){const n=xr(Fr(e)),s=n.apiKey??null,r=n.oobCode??null,i=OI(n.mode??null);te(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=LI(e);try{return new Dl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.providerId=dr.PROVIDER_ID}static credential(e,n){return ui._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Dl.parseLink(n);return te(s,"argument-error"),ui._fromEmailAndCode(e,s.code,s.tenantId)}}dr.PROVIDER_ID="password";dr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends am{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Si{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return As._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return On.credential(n,s)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Si{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Si{constructor(){super("twitter.com")}static credential(e,n){return As._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Mn.credential(n,s)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Mt._fromIdTokenResponse(e,s,r),a=cf(s);return new sr({user:i,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=cf(s);return new sr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function cf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends An{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,$o.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new $o(e,n,s,r)}}function cm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$o._fromErrorAndOperation(t,i,e,s):i})}async function MI(t,e,n=!1){const s=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sr._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(t,e,n=!1){const{auth:s}=t;if(Lt(s.app))return Promise.reject(Hn(s));const r="reauthenticate";try{const i=await li(t,cm(s,r,e,t),n);te(i.idToken,s,"internal-error");const a=Pl(i.idToken);te(a,s,"internal-error");const{sub:c}=a;return te(t.uid===c,s,"user-mismatch"),sr._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&Ut(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(t,e,n=!1){if(Lt(t.app))return Promise.reject(Hn(t));const s="signIn",r=await cm(t,s,e),i=await sr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function FI(t,e){return lm(fr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(t){const e=fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function $I(t,e,n){return Lt(t.app)?Promise.reject(Hn(t)):FI(nt(t),dr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&UI(t),s})}function BI(t,e,n,s){return nt(t).onIdTokenChanged(e,n,s)}function jI(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function HI(t,e,n,s){return nt(t).onAuthStateChanged(e,n,s)}function qI(t){return nt(t).signOut()}const Bo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bo,"1"),this.storage.removeItem(Bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=1e3,KI=10;class hm extends um{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);uI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,KI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hm.type="LOCAL";const WI=hm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm extends um{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fm.type="SESSION";const dm=fm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ya(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,a=this.handlersMap[r];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await GI(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ya.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Nl("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function JI(t){Jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function YI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XI(){return navigator?.serviceWorker?.controller||null}function ZI(){return pm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="firebaseLocalStorageDb",ew=1,jo="firebaseLocalStorage",gm="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ea(t,e){return t.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function tw(){const t=indexedDB.deleteDatabase(mm);return new bi(t).toPromise()}function $c(){const t=indexedDB.open(mm,ew);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(jo,{keyPath:gm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(jo)?e(s):(s.close(),await tw(),e(await $c()))})})}async function lf(t,e,n){const s=Ea(t,!0).put({[gm]:e,value:n});return new bi(s).toPromise()}async function nw(t,e){const n=Ea(t,!1).get(e),s=await new bi(n).toPromise();return s===void 0?null:s.value}function uf(t,e){const n=Ea(t,!0).delete(e);return new bi(n).toPromise()}const sw=800,rw=3;class _m{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>rw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ya._getInstance(ZI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await YI(),!this.activeServiceWorker)return;this.sender=new QI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $c();return await lf(e,Bo,"1"),await uf(e,Bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>lf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>nw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ea(r,!1).getAll();return new bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_m.type="LOCAL";const iw=_m;new Ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t,e){return e?mn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends Vl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aw(t){return lm(t.auth,new Ol(t),t.bypassAuthState)}function cw(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),xI(n,new Ol(t),t.bypassAuthState)}async function lw(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),MI(n,new Ol(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aw;case"linkViaPopup":case"linkViaRedirect":return lw;case"reauthViaPopup":case"reauthViaRedirect":return cw;default:Ut(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new Ai(2e3,1e4);class Hs extends ym{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Nl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uw.get())};e()}}Hs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="pendingRedirect",po=new Map;class fw extends ym{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const s=await dw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dw(t,e){const n=gw(e),s=mw(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function pw(t,e){po.set(t._key(),e)}function mw(t){return mn(t._redirectPersistence)}function gw(t){return fo(hw,t.config.apiKey,t.name)}async function _w(t,e,n=!1){if(Lt(t.app))return Promise.reject(Hn(t));const s=fr(t),r=ow(s,e),a=await new fw(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=600*1e3;class Ew{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Em(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yw&&this.cachedEventUids.clear(),this.cachedEventUids.has(hf(e))}saveEventToCache(e){this.cachedEventUids.add(hf(e)),this.lastProcessedEventTime=Date.now()}}function hf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Em({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function vw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Em(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(t,e={}){return ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ww=/^https?/;async function Aw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tw(t);for(const n of e)try{if(Sw(n))return}catch{}Ut(t,"unauthorized-domain")}function Sw(t){const e=Fc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!ww.test(n))return!1;if(Iw.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new Ai(3e4,6e4);function ff(){const t=Jt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Rw(t){return new Promise((e,n)=>{function s(){ff(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ff(),n(Qt(t,"network-request-failed"))},timeout:bw.get()})}if(Jt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Jt().gapi?.load)s();else{const r=EI("iframefcb");return Jt()[r]=()=>{gapi.load?s():n(Qt(t,"network-request-failed"))},rm(`${yI()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw mo=null,e})}let mo=null;function Cw(t){return mo=mo||Rw(t),mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=new Ai(5e3,15e3),kw="__/auth/iframe",Vw="emulator/auth/iframe",Dw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ow(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cl(e,Vw):`https://${t.config.authDomain}/${kw}`,s={apiKey:e.apiKey,appName:t.name,v:hr},r=Nw.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${wi(s).slice(1)}`}async function Lw(t){const e=await Cw(t),n=Jt().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:Ow(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dw,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=Qt(t,"network-request-failed"),c=Jt().setTimeout(()=>{i(a)},Pw.get());function l(){Jt().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xw=500,Fw=600,Uw="_blank",$w="http://localhost";class df{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bw(t,e,n,s=xw,r=Fw){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l={...Mw,width:s.toString(),height:r.toString(),top:i,left:a},h=mt().toLowerCase();n&&(c=Yp(h)?Uw:n),Qp(h)&&(e=e||$w,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[I,P])=>`${_}${I}=${P},`,"");if(lI(h)&&c!=="_self")return jw(e||"",c),new df(null);const m=window.open(e||"",c,d);te(m,t,"popup-blocked");try{m.focus()}catch{}return new df(m)}function jw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="__/auth/handler",qw="emulator/auth/handler",zw=encodeURIComponent("fac");async function pf(t,e,n,s,r,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:hr,eventId:r};if(e instanceof am){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Vv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))a[d]=m}if(e instanceof Si){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${zw}=${encodeURIComponent(l)}`:"";return`${Kw(t)}?${wi(c).slice(1)}${h}`}function Kw({config:t}){return t.emulator?Cl(t,qw):`https://${t.authDomain}/${Hw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="webStorageSupport";class Ww{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dm,this._completeRedirectFn=_w,this._overrideRedirectResult=pw}async _openPopup(e,n,s,r){vn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await pf(e,n,s,Fc(),r);return Bw(e,i,Nl())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await pf(e,n,s,Fc(),r);return JI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(vn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Lw(e),s=new Ew(e);return n.register("authEvent",r=>(te(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mc,{type:mc},r=>{const i=r?.[0]?.[mc];i!==void 0&&n(!!i),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Aw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nm()||Jp()||kl()}}const Gw=Ww;var mf="@firebase/auth",gf="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yw(t){nr(new ws("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sm(t)},h=new mI(s,r,i,l);return SI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),nr(new ws("auth-internal",e=>{const n=fr(e.getProvider("auth").getImmediate());return(s=>new Qw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(mf,gf,Jw(t)),jn(mf,gf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=300,Zw=Dp("authIdTokenMaxAge")||Xw;let _f=null;const eA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Zw)return;const r=n?.token;_f!==r&&(_f=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function vm(t=Fp()){const e=bl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AI(t,{popupRedirectResolver:Gw,persistence:[iw,WI,dm]}),s=Dp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=eA(i.toString());jI(n,a,()=>a(n.currentUser)),BI(n,c=>a(c))}}const r=kp("auth");return r&&bI(n,`http://${r}`),n}function tA(){return document.getElementsByTagName("head")?.[0]??document}gI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Qt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",tA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yw("Browser");const yf=(t,e="zh-CN")=>{if("speechSynthesis"in window){window.speechSynthesis.cancel();const n=new SpeechSynthesisUtterance(t);n.lang=e,n.rate=.9,window.speechSynthesis.speak(n)}else console.warn("Votre navigateur ne supporte pas la synthèse vocale.")},nA=ns({name:"HanziText",props:{text:{type:String,required:!0},showAudioButton:{type:Boolean,default:!1},buttonText:{type:String,default:""}},setup(t){return{processedText:Ti(()=>(t.text||"").split("")),speakChar:r=>{r.trim()!==""&&yf(r)},speakFullText:()=>{yf(t.text)}}}}),rs=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},sA={class:"hanzi-text-container"},rA={class:"hanzi-text"},iA=["onClick"];function oA(t,e,n,s,r,i){return oe(),fe("div",sA,[j("div",rA,[(oe(!0),fe(xe,null,Wt(t.processedText,(a,c)=>(oe(),fe("span",{key:c,onClick:Mr(l=>t.speakChar(a),["prevent","stop"]),class:er(["hanzi-char",{space:a===" "}])},dt(a),11,iA))),128))]),t.showAudioButton?(oe(),fe("span",{key:0,role:"button",tabindex:"0",class:er(["audio-btn",{inline:!t.buttonText}]),onClick:e[0]||(e[0]=Mr((...a)=>t.speakFullText&&t.speakFullText(...a),["stop","prevent"])),onKeydown:[e[1]||(e[1]=Mh(Mr((...a)=>t.speakFullText&&t.speakFullText(...a),["stop","prevent"]),["enter"])),e[2]||(e[2]=Mh(Mr((...a)=>t.speakFullText&&t.speakFullText(...a),["stop","prevent"]),["space"]))],"aria-label":"Lire le texte"},[e[3]||(e[3]=Vo(" 🔊 ",-1)),t.buttonText?(oe(),fe(xe,{key:0},[Vo(dt(t.buttonText),1)],64)):Un("",!0)],34)):Un("",!0)])}const Ll=rs(nA,[["render",oA],["__scopeId","data-v-2893f15d"]]),aA=ns({name:"Glossary",components:{HanziText:Ll},props:{items:{type:Array,required:!0},language:{type:String,default:"fr"}}}),cA={class:"glossary"},lA={class:"pinyin"},uA={class:"translation"};function hA(t,e,n,s,r,i){const a=Kt("HanziText");return oe(),fe("div",cA,[(oe(!0),fe(xe,null,Wt(t.items,(c,l)=>(oe(),fe("div",{key:l,class:"glossary-item"},[tt(a,{text:c.word,showAudioButton:!0},null,8,["text"]),j("span",lA,dt(c.pinyin),1),j("span",uA,dt(c.translation[t.language]),1)]))),128))])}const fA=rs(aA,[["render",hA],["__scopeId","data-v-085fbecb"]]);var dA="firebase",pA="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(dA,pA,"app");var Ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qn,Tm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,g){function y(){}y.prototype=g.prototype,S.D=g.prototype,S.prototype=new y,S.prototype.constructor=S,S.C=function(T,w,b){for(var E=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)E[gt-2]=arguments[gt];return g.prototype[w].apply(T,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,g,y){y||(y=0);var T=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)T[w]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(w=0;16>w;++w)T[w]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=S.g[0],y=S.g[1],w=S.g[2];var b=S.g[3],E=g+(b^y&(w^b))+T[0]+3614090360&4294967295;g=y+(E<<7&4294967295|E>>>25),E=b+(w^g&(y^w))+T[1]+3905402710&4294967295,b=g+(E<<12&4294967295|E>>>20),E=w+(y^b&(g^y))+T[2]+606105819&4294967295,w=b+(E<<17&4294967295|E>>>15),E=y+(g^w&(b^g))+T[3]+3250441966&4294967295,y=w+(E<<22&4294967295|E>>>10),E=g+(b^y&(w^b))+T[4]+4118548399&4294967295,g=y+(E<<7&4294967295|E>>>25),E=b+(w^g&(y^w))+T[5]+1200080426&4294967295,b=g+(E<<12&4294967295|E>>>20),E=w+(y^b&(g^y))+T[6]+2821735955&4294967295,w=b+(E<<17&4294967295|E>>>15),E=y+(g^w&(b^g))+T[7]+4249261313&4294967295,y=w+(E<<22&4294967295|E>>>10),E=g+(b^y&(w^b))+T[8]+1770035416&4294967295,g=y+(E<<7&4294967295|E>>>25),E=b+(w^g&(y^w))+T[9]+2336552879&4294967295,b=g+(E<<12&4294967295|E>>>20),E=w+(y^b&(g^y))+T[10]+4294925233&4294967295,w=b+(E<<17&4294967295|E>>>15),E=y+(g^w&(b^g))+T[11]+2304563134&4294967295,y=w+(E<<22&4294967295|E>>>10),E=g+(b^y&(w^b))+T[12]+1804603682&4294967295,g=y+(E<<7&4294967295|E>>>25),E=b+(w^g&(y^w))+T[13]+4254626195&4294967295,b=g+(E<<12&4294967295|E>>>20),E=w+(y^b&(g^y))+T[14]+2792965006&4294967295,w=b+(E<<17&4294967295|E>>>15),E=y+(g^w&(b^g))+T[15]+1236535329&4294967295,y=w+(E<<22&4294967295|E>>>10),E=g+(w^b&(y^w))+T[1]+4129170786&4294967295,g=y+(E<<5&4294967295|E>>>27),E=b+(y^w&(g^y))+T[6]+3225465664&4294967295,b=g+(E<<9&4294967295|E>>>23),E=w+(g^y&(b^g))+T[11]+643717713&4294967295,w=b+(E<<14&4294967295|E>>>18),E=y+(b^g&(w^b))+T[0]+3921069994&4294967295,y=w+(E<<20&4294967295|E>>>12),E=g+(w^b&(y^w))+T[5]+3593408605&4294967295,g=y+(E<<5&4294967295|E>>>27),E=b+(y^w&(g^y))+T[10]+38016083&4294967295,b=g+(E<<9&4294967295|E>>>23),E=w+(g^y&(b^g))+T[15]+3634488961&4294967295,w=b+(E<<14&4294967295|E>>>18),E=y+(b^g&(w^b))+T[4]+3889429448&4294967295,y=w+(E<<20&4294967295|E>>>12),E=g+(w^b&(y^w))+T[9]+568446438&4294967295,g=y+(E<<5&4294967295|E>>>27),E=b+(y^w&(g^y))+T[14]+3275163606&4294967295,b=g+(E<<9&4294967295|E>>>23),E=w+(g^y&(b^g))+T[3]+4107603335&4294967295,w=b+(E<<14&4294967295|E>>>18),E=y+(b^g&(w^b))+T[8]+1163531501&4294967295,y=w+(E<<20&4294967295|E>>>12),E=g+(w^b&(y^w))+T[13]+2850285829&4294967295,g=y+(E<<5&4294967295|E>>>27),E=b+(y^w&(g^y))+T[2]+4243563512&4294967295,b=g+(E<<9&4294967295|E>>>23),E=w+(g^y&(b^g))+T[7]+1735328473&4294967295,w=b+(E<<14&4294967295|E>>>18),E=y+(b^g&(w^b))+T[12]+2368359562&4294967295,y=w+(E<<20&4294967295|E>>>12),E=g+(y^w^b)+T[5]+4294588738&4294967295,g=y+(E<<4&4294967295|E>>>28),E=b+(g^y^w)+T[8]+2272392833&4294967295,b=g+(E<<11&4294967295|E>>>21),E=w+(b^g^y)+T[11]+1839030562&4294967295,w=b+(E<<16&4294967295|E>>>16),E=y+(w^b^g)+T[14]+4259657740&4294967295,y=w+(E<<23&4294967295|E>>>9),E=g+(y^w^b)+T[1]+2763975236&4294967295,g=y+(E<<4&4294967295|E>>>28),E=b+(g^y^w)+T[4]+1272893353&4294967295,b=g+(E<<11&4294967295|E>>>21),E=w+(b^g^y)+T[7]+4139469664&4294967295,w=b+(E<<16&4294967295|E>>>16),E=y+(w^b^g)+T[10]+3200236656&4294967295,y=w+(E<<23&4294967295|E>>>9),E=g+(y^w^b)+T[13]+681279174&4294967295,g=y+(E<<4&4294967295|E>>>28),E=b+(g^y^w)+T[0]+3936430074&4294967295,b=g+(E<<11&4294967295|E>>>21),E=w+(b^g^y)+T[3]+3572445317&4294967295,w=b+(E<<16&4294967295|E>>>16),E=y+(w^b^g)+T[6]+76029189&4294967295,y=w+(E<<23&4294967295|E>>>9),E=g+(y^w^b)+T[9]+3654602809&4294967295,g=y+(E<<4&4294967295|E>>>28),E=b+(g^y^w)+T[12]+3873151461&4294967295,b=g+(E<<11&4294967295|E>>>21),E=w+(b^g^y)+T[15]+530742520&4294967295,w=b+(E<<16&4294967295|E>>>16),E=y+(w^b^g)+T[2]+3299628645&4294967295,y=w+(E<<23&4294967295|E>>>9),E=g+(w^(y|~b))+T[0]+4096336452&4294967295,g=y+(E<<6&4294967295|E>>>26),E=b+(y^(g|~w))+T[7]+1126891415&4294967295,b=g+(E<<10&4294967295|E>>>22),E=w+(g^(b|~y))+T[14]+2878612391&4294967295,w=b+(E<<15&4294967295|E>>>17),E=y+(b^(w|~g))+T[5]+4237533241&4294967295,y=w+(E<<21&4294967295|E>>>11),E=g+(w^(y|~b))+T[12]+1700485571&4294967295,g=y+(E<<6&4294967295|E>>>26),E=b+(y^(g|~w))+T[3]+2399980690&4294967295,b=g+(E<<10&4294967295|E>>>22),E=w+(g^(b|~y))+T[10]+4293915773&4294967295,w=b+(E<<15&4294967295|E>>>17),E=y+(b^(w|~g))+T[1]+2240044497&4294967295,y=w+(E<<21&4294967295|E>>>11),E=g+(w^(y|~b))+T[8]+1873313359&4294967295,g=y+(E<<6&4294967295|E>>>26),E=b+(y^(g|~w))+T[15]+4264355552&4294967295,b=g+(E<<10&4294967295|E>>>22),E=w+(g^(b|~y))+T[6]+2734768916&4294967295,w=b+(E<<15&4294967295|E>>>17),E=y+(b^(w|~g))+T[13]+1309151649&4294967295,y=w+(E<<21&4294967295|E>>>11),E=g+(w^(y|~b))+T[4]+4149444226&4294967295,g=y+(E<<6&4294967295|E>>>26),E=b+(y^(g|~w))+T[11]+3174756917&4294967295,b=g+(E<<10&4294967295|E>>>22),E=w+(g^(b|~y))+T[2]+718787259&4294967295,w=b+(E<<15&4294967295|E>>>17),E=y+(b^(w|~g))+T[9]+3951481745&4294967295,S.g[0]=S.g[0]+g&4294967295,S.g[1]=S.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,S.g[2]=S.g[2]+w&4294967295,S.g[3]=S.g[3]+b&4294967295}s.prototype.u=function(S,g){g===void 0&&(g=S.length);for(var y=g-this.blockSize,T=this.B,w=this.h,b=0;b<g;){if(w==0)for(;b<=y;)r(this,S,b),b+=this.blockSize;if(typeof S=="string"){for(;b<g;)if(T[w++]=S.charCodeAt(b++),w==this.blockSize){r(this,T),w=0;break}}else for(;b<g;)if(T[w++]=S[b++],w==this.blockSize){r(this,T),w=0;break}}this.h=w,this.o+=g},s.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var g=1;g<S.length-8;++g)S[g]=0;var y=8*this.o;for(g=S.length-8;g<S.length;++g)S[g]=y&255,y/=256;for(this.u(S),S=Array(16),g=y=0;4>g;++g)for(var T=0;32>T;T+=8)S[y++]=this.g[g]>>>T&255;return S};function i(S,g){var y=c;return Object.prototype.hasOwnProperty.call(y,S)?y[S]:y[S]=g(S)}function a(S,g){this.h=g;for(var y=[],T=!0,w=S.length-1;0<=w;w--){var b=S[w]|0;T&&b==g||(y[w]=b,T=!1)}this.g=y}var c={};function l(S){return-128<=S&&128>S?i(S,function(g){return new a([g|0],0>g?-1:0)}):new a([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return m;if(0>S)return F(h(-S));for(var g=[],y=1,T=0;S>=y;T++)g[T]=S/y|0,y*=4294967296;return new a(g,0)}function d(S,g){if(S.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(S.charAt(0)=="-")return F(d(S.substring(1),g));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(g,8)),T=m,w=0;w<S.length;w+=8){var b=Math.min(8,S.length-w),E=parseInt(S.substring(w,w+b),g);8>b?(b=h(Math.pow(g,b)),T=T.j(b).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var m=l(0),_=l(1),I=l(16777216);t=a.prototype,t.m=function(){if(L(this))return-F(this).m();for(var S=0,g=1,y=0;y<this.g.length;y++){var T=this.i(y);S+=(0<=T?T:4294967296+T)*g,g*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(P(this))return"0";if(L(this))return"-"+F(this).toString(S);for(var g=h(Math.pow(S,6)),y=this,T="";;){var w=G(y,g).g;y=z(y,w.j(g));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(S);if(y=w,P(y))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function P(S){if(S.h!=0)return!1;for(var g=0;g<S.g.length;g++)if(S.g[g]!=0)return!1;return!0}function L(S){return S.h==-1}t.l=function(S){return S=z(this,S),L(S)?-1:P(S)?0:1};function F(S){for(var g=S.g.length,y=[],T=0;T<g;T++)y[T]=~S.g[T];return new a(y,~S.h).add(_)}t.abs=function(){return L(this)?F(this):this},t.add=function(S){for(var g=Math.max(this.g.length,S.g.length),y=[],T=0,w=0;w<=g;w++){var b=T+(this.i(w)&65535)+(S.i(w)&65535),E=(b>>>16)+(this.i(w)>>>16)+(S.i(w)>>>16);T=E>>>16,b&=65535,E&=65535,y[w]=E<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(S,g){return S.add(F(g))}t.j=function(S){if(P(this)||P(S))return m;if(L(this))return L(S)?F(this).j(F(S)):F(F(this).j(S));if(L(S))return F(this.j(F(S)));if(0>this.l(I)&&0>S.l(I))return h(this.m()*S.m());for(var g=this.g.length+S.g.length,y=[],T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<S.g.length;w++){var b=this.i(T)>>>16,E=this.i(T)&65535,gt=S.i(w)>>>16,$t=S.i(w)&65535;y[2*T+2*w]+=E*$t,W(y,2*T+2*w),y[2*T+2*w+1]+=b*$t,W(y,2*T+2*w+1),y[2*T+2*w+1]+=E*gt,W(y,2*T+2*w+1),y[2*T+2*w+2]+=b*gt,W(y,2*T+2*w+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new a(y,0)};function W(S,g){for(;(S[g]&65535)!=S[g];)S[g+1]+=S[g]>>>16,S[g]&=65535,g++}function Q(S,g){this.g=S,this.h=g}function G(S,g){if(P(g))throw Error("division by zero");if(P(S))return new Q(m,m);if(L(S))return g=G(F(S),g),new Q(F(g.g),F(g.h));if(L(g))return g=G(S,F(g)),new Q(F(g.g),g.h);if(30<S.g.length){if(L(S)||L(g))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=g;0>=T.l(S);)y=he(y),T=he(T);var w=Se(y,1),b=Se(T,1);for(T=Se(T,2),y=Se(y,2);!P(T);){var E=b.add(T);0>=E.l(S)&&(w=w.add(y),b=E),T=Se(T,1),y=Se(y,1)}return g=z(S,w.j(g)),new Q(w,g)}for(w=m;0<=S.l(g);){for(y=Math.max(1,Math.floor(S.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(y),E=b.j(g);L(E)||0<E.l(S);)y-=T,b=h(y),E=b.j(g);P(b)&&(b=_),w=w.add(b),S=z(S,E)}return new Q(w,S)}t.A=function(S){return G(this,S).h},t.and=function(S){for(var g=Math.max(this.g.length,S.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)&S.i(T);return new a(y,this.h&S.h)},t.or=function(S){for(var g=Math.max(this.g.length,S.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)|S.i(T);return new a(y,this.h|S.h)},t.xor=function(S){for(var g=Math.max(this.g.length,S.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)^S.i(T);return new a(y,this.h^S.h)};function he(S){for(var g=S.g.length+1,y=[],T=0;T<g;T++)y[T]=S.i(T)<<1|S.i(T-1)>>>31;return new a(y,S.h)}function Se(S,g){var y=g>>5;g%=32;for(var T=S.g.length-y,w=[],b=0;b<T;b++)w[b]=0<g?S.i(b+y)>>>g|S.i(b+y+1)<<32-g:S.i(b+y);return new a(w,S.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Tm=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,qn=a}).apply(typeof Ef<"u"?Ef:typeof self<"u"?self:typeof window<"u"?window:{});var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Im,Ur,wm,go,Bc,Am,Sm,bm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof eo=="object"&&eo];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=n(this);function r(o,u){if(u)e:{var f=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in f))break e;f=f[R]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,p=!1,R={next:function(){if(!p&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}r("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function m(o,u,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,_.apply(null,arguments)}function I(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,R,C){for(var B=Array(arguments.length-2),we=2;we<arguments.length;we++)B[we-2]=arguments[we];return u.prototype[R].apply(p,B)}}function L(o){const u=o.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function F(o,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(l(p)){const R=o.length||0,C=p.length||0;o.length=R+C;for(let B=0;B<C;B++)o[R+B]=p[B]}else o.push(p)}}class z{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function W(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function G(o){return G[" "](o),o}G[" "]=function(){};var he=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Se(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function S(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function g(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(f in p)o[f]=p[f];for(let C=0;C<y.length;C++)f=y[C],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function w(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function b(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Nt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class gt{constructor(){this.h=this.g=null}add(u,f){const p=$t.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var $t=new z(()=>new Ve,o=>o.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let le,Ee=!1,Nt=new gt,as=()=>{const o=c.Promise.resolve(void 0);le=()=>{o.then(on)}};var on=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){b(f)}var u=$t;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Ee=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var xa=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function cs(o,u){if(je.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(he){e:{try{G(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ls[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&cs.aa.h.call(this)}}P(cs,je);var ls={2:"touch",3:"pen",4:"mouse"};cs.prototype.h=function(){cs.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),yr=0;function Ni(o,u,f,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=R,this.key=++yr,this.da=this.fa=!1}function Bt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Er(o){this.src=o,this.g={},this.h=0}Er.prototype.add=function(o,u,f,p,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var B=A(o,u,p,R);return-1<B?(u=o[B],f||(u.fa=!1)):(u=new Ni(u,this.src,C,!!p,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var p=o.g[f],R=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(p,R,1),C&&(Bt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function A(o,u,f,p){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==p)return R}return-1}var k="closure_lm_"+(1e6*Math.random()|0),M={};function N(o,u,f,p,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)N(o,u[C],f,p,R);return null}return f=se(f),o&&o[an]?o.K(u,f,h(p)?!!p.capture:!1,R):O(o,u,f,!1,p,R)}function O(o,u,f,p,R,C){if(!u)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,we=q(o);if(we||(o[k]=we=new Er(o)),f=we.add(u,f,p,B,C),f.proxy)return f;if(p=H(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)xa||(R=B),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent(x(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function H(){function o(f){return u.call(o.src,o.listener,f)}const u=Z;return o}function $(o,u,f,p,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)$(o,u[C],f,p,R);else p=h(p)?!!p.capture:!!p,f=se(f),o&&o[an]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=A(C,f,p,R),-1<f&&(Bt(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=A(u,f,p,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[an])v(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(x(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=q(u))?(v(f,o),f.h==0&&(f.src=null,u[k]=null)):Bt(o)}}}function x(o){return o in M?M[o]:M[o]="on"+o}function Z(o,u){if(o.da)o=!0;else{u=new cs(u,this);var f=o.listener,p=o.ha||o.src;o.fa&&U(o),o=f.call(p,u)}return o}function q(o){return o=o[k],o instanceof Er?o:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(o){return typeof o=="function"?o:(o[Y]||(o[Y]=function(u){return o.handleEvent(u)}),o[Y])}function ee(){Be.call(this),this.i=new Er(this),this.M=this,this.F=null}P(ee,Be),ee.prototype[an]=!0,ee.prototype.removeEventListener=function(o,u,f,p){$(this,o,u,f,p)};function ue(o,u){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new je(u,o);else if(u instanceof je)u.target=u.target||o;else{var R=u;u=new je(p,o),T(u,R)}if(R=!0,f)for(var C=f.length-1;0<=C;C--){var B=u.g=f[C];R=ge(B,p,!0,u)&&R}if(B=u.g=o,R=ge(B,p,!0,u)&&R,R=ge(B,p,!1,u)&&R,f)for(C=0;C<f.length;C++)B=u.g=f[C],R=ge(B,p,!1,u)&&R}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],p=0;p<f.length;p++)Bt(f[p]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},ee.prototype.L=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function ge(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var B=u[C];if(B&&!B.da&&B.capture==f){var we=B.listener,Je=B.ha||B.src;B.fa&&v(o.i,B),R=we.call(Je,p)!==!1&&R}}return R&&!p.defaultPrevented}function We(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ge(o){o.g=We(()=>{o.g=null,o.i&&(o.i=!1,Ge(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ct extends Be{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(o){Be.call(this),this.h=o,this.g={}}P(rt,Be);var Sn=[];function vr(o){Se(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}rt.prototype.N=function(){rt.aa.N.call(this),vr(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,Pt=c.JSON.parse,Oi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Vs(){}Vs.prototype.h=null;function pu(o){return o.h||(o.h=o.i())}function mu(){}var Tr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fa(){je.call(this,"d")}P(Fa,je);function Ua(){je.call(this,"c")}P(Ua,je);var us={},gu=null;function Li(){return gu=gu||new ee}us.La="serverreachability";function _u(o){je.call(this,us.La,o)}P(_u,je);function Ir(o){const u=Li();ue(u,new _u(u))}us.STAT_EVENT="statevent";function yu(o,u){je.call(this,us.STAT_EVENT,o),this.stat=u}P(yu,je);function _t(o){const u=Li();ue(u,new yu(u,o))}us.Ma="timingevent";function Eu(o,u){je.call(this,us.Ma,o),this.size=u}P(Eu,je);function wr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Ar(){this.g=!0}Ar.prototype.xa=function(){this.g=!1};function Xg(o,u,f,p,R,C){o.info(function(){if(o.g)if(C)for(var B="",we=C.split("&"),Je=0;Je<we.length;Je++){var ve=we[Je].split("=");if(1<ve.length){var it=ve[0];ve=ve[1];var ot=it.split("_");B=2<=ot.length&&ot[1]=="type"?B+(it+"="+ve+"&"):B+(it+"=redacted&")}}else B=null;else B=C;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+f+`
`+B})}function Zg(o,u,f,p,R,C,B){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+B})}function Ds(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+t_(o,f)+(p?" "+p:"")})}function e_(o,u){o.info(function(){return"TIMEOUT: "+u})}Ar.prototype.info=function(){};function t_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Qe(f)}catch{return u}}var Mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$a;function xi(){}P(xi,Vs),xi.prototype.g=function(){return new XMLHttpRequest},xi.prototype.i=function(){return{}},$a=new xi;function bn(o,u,f,p){this.j=o,this.i=u,this.l=f,this.R=p||1,this.U=new rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tu}function Tu(){this.i=null,this.g="",this.h=!1}var Iu={},Ba={};function ja(o,u,f){o.L=1,o.v=Bi(cn(u)),o.m=f,o.P=!0,wu(o,null)}function wu(o,u){o.F=Date.now(),Fi(o),o.A=cn(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),xu(f.i,"t",p),o.C=0,f=o.j.J,o.h=new Tu,o.g=th(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Ct(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Sn[0]=R.toString()),R=Sn);for(var C=0;C<R.length;C++){var B=N(f,R[C],p||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ir(),Xg(o.i,o.u,o.A,o.l,o.R,o.m)}bn.prototype.ca=function(o){o=o.target;const u=this.M;u&&ln(o)==3?u.j():this.Y(o)},bn.prototype.Y=function(o){try{if(o==this.g)e:{const ot=ln(this.g);var u=this.g.Ba();const Ls=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||qu(this.g)))){this.J||ot!=4||u==7||(u==8||0>=Ls?Ir(3):Ir(2)),Ha(this);var f=this.g.Z();this.X=f;t:if(Au(this)){var p=qu(this.g);o="";var R=p.length,C=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hs(this),Sr(this);var B="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==R-1)});p.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,Zg(this.i,this.u,this.A,this.l,this.R,ot,f),this.o){if(this.T&&!this.K){t:{if(this.g){var we,Je=this.g;if((we=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(we)){var ve=we;break t}}ve=null}if(f=ve)Ds(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qa(this,f);else{this.o=!1,this.s=3,_t(12),hs(this),Sr(this);break e}}if(this.P){f=!0;let Ot;for(;!this.J&&this.C<B.length;)if(Ot=n_(this,B),Ot==Ba){ot==4&&(this.s=4,_t(14),f=!1),Ds(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==Iu){this.s=4,_t(15),Ds(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Ds(this.i,this.l,Ot,null),qa(this,Ot);if(Au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||B.length!=0||this.h.h||(this.s=1,_t(16),f=!1),this.o=this.o&&f,!f)Ds(this.i,this.l,B,"[Invalid Chunked Response]"),hs(this),Sr(this);else if(0<B.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ja(it),it.M=!0,_t(11))}}else Ds(this.i,this.l,B,null),qa(this,B);ot==4&&hs(this),this.o&&!this.J&&(ot==4?Yu(this.j,this):(this.o=!1,Fi(this)))}else E_(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),hs(this),Sr(this)}}}catch{}finally{}};function Au(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function n_(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?Ba:(f=Number(u.substring(f,p)),isNaN(f)?Iu:(p+=1,p+f>u.length?Ba:(u=u.slice(p,p+f),o.C=p+f,u)))}bn.prototype.cancel=function(){this.J=!0,hs(this)};function Fi(o){o.S=Date.now()+o.I,Su(o,o.I)}function Su(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=wr(_(o.ba,o),u)}function Ha(o){o.B&&(c.clearTimeout(o.B),o.B=null)}bn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(e_(this.i,this.A),this.L!=2&&(Ir(),_t(17)),hs(this),this.s=2,Sr(this)):Su(this,this.S-o)};function Sr(o){o.j.G==0||o.J||Yu(o.j,o)}function hs(o){Ha(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,vr(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function qa(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||za(f.h,o))){if(!o.K&&za(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Wi(f),zi(f);else break e;Qa(f),_t(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=wr(_(f.Za,f),6e3));if(1>=Cu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ds(f,11)}else if((o.K||f.g==o)&&Wi(f),!W(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let ve=R[u];if(f.T=ve[0],ve=ve[1],f.G==2)if(ve[0]=="c"){f.K=ve[1],f.ia=ve[2];const it=ve[3];it!=null&&(f.la=it,f.j.info("VER="+f.la));const ot=ve[4];ot!=null&&(f.Aa=ot,f.j.info("SVER="+f.Aa));const Ls=ve[5];Ls!=null&&typeof Ls=="number"&&0<Ls&&(p=1.5*Ls,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Ot=o.g;if(Ot){const Qi=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qi){var C=p.h;C.g||Qi.indexOf("spdy")==-1&&Qi.indexOf("quic")==-1&&Qi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ka(C,C.h),C.h=null))}if(p.D){const Ya=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Ya&&(p.ya=Ya,Ce(p.I,p.D,Ya))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var B=o;if(p.qa=eh(p,p.J?p.ia:null,p.W),B.K){Pu(p.h,B);var we=B,Je=p.L;Je&&(we.I=Je),we.B&&(Ha(we),Fi(we)),p.g=B}else Qu(p);0<f.i.length&&Ki(f)}else ve[0]!="stop"&&ve[0]!="close"||ds(f,7);else f.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?ds(f,7):Ga(f):ve[0]!="noop"&&f.l&&f.l.ta(ve),f.v=0)}}Ir(4)}catch{}}var s_=class{constructor(o,u){this.g=o,this.map=u}};function bu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ru(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Cu(o){return o.h?1:o.g?o.g.size:0}function za(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ka(o,u){o.g?o.g.add(u):o.h=u}function Pu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}bu.prototype.cancel=function(){if(this.i=ku(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ku(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return L(o.i)}function r_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,p=0;p<f;p++)u.push(o[p]);return u}u=[],f=0;for(p in o)u[f++]=o[p];return u}function i_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const p in o)u[f++]=p;return u}}}function Vu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=i_(o),p=r_(o),R=p.length,C=0;C<R;C++)u.call(void 0,p[C],f&&f[C],o)}var Du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function o_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),R=null;if(0<=p){var C=o[f].substring(0,p);R=o[f].substring(p+1)}else C=o[f];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function fs(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof fs){this.h=o.h,Ui(this,o.j),this.o=o.o,this.g=o.g,$i(this,o.s),this.l=o.l;var u=o.i,f=new Cr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Nu(this,f),this.m=o.m}else o&&(u=String(o).match(Du))?(this.h=!1,Ui(this,u[1]||"",!0),this.o=br(u[2]||""),this.g=br(u[3]||"",!0),$i(this,u[4]),this.l=br(u[5]||"",!0),Nu(this,u[6]||"",!0),this.m=br(u[7]||"")):(this.h=!1,this.i=new Cr(null,this.h))}fs.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Rr(u,Ou,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Rr(u,Ou,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Rr(f,f.charAt(0)=="/"?l_:c_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Rr(f,h_)),o.join("")};function cn(o){return new fs(o)}function Ui(o,u,f){o.j=f?br(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function $i(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Nu(o,u,f){u instanceof Cr?(o.i=u,f_(o.i,o.h)):(f||(u=Rr(u,u_)),o.i=new Cr(u,o.h))}function Ce(o,u,f){o.i.set(u,f)}function Bi(o){return Ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function br(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Rr(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,a_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function a_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ou=/[#\/\?@]/g,c_=/[#\?:]/g,l_=/[#\?]/g,u_=/[#\?@]/g,h_=/#/g;function Cr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Rn(o){o.g||(o.g=new Map,o.h=0,o.i&&o_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Cr.prototype,t.add=function(o,u){Rn(this),this.i=null,o=Ns(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Lu(o,u){Rn(o),u=Ns(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Mu(o,u){return Rn(o),u=Ns(o,u),o.g.has(u)}t.forEach=function(o,u){Rn(this),this.g.forEach(function(f,p){f.forEach(function(R){o.call(u,R,p,this)},this)},this)},t.na=function(){Rn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const R=o[p];for(let C=0;C<R.length;C++)f.push(u[p])}return f},t.V=function(o){Rn(this);let u=[];if(typeof o=="string")Mu(this,o)&&(u=u.concat(this.g.get(Ns(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return Rn(this),this.i=null,o=Ns(this,o),Mu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function xu(o,u,f){Lu(o,u),0<f.length&&(o.i=null,o.g.set(Ns(o,u),L(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const C=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var R=C;B[p]!==""&&(R+="="+encodeURIComponent(String(B[p]))),o.push(R)}}return this.i=o.join("&")};function Ns(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function f_(o,u){u&&!o.j&&(Rn(o),o.i=null,o.g.forEach(function(f,p){var R=p.toLowerCase();p!=R&&(Lu(this,p),xu(this,R,f))},o)),o.j=u}function d_(o,u){const f=new Ar;if(c.Image){const p=new Image;p.onload=I(Cn,f,"TestLoadImage: loaded",!0,u,p),p.onerror=I(Cn,f,"TestLoadImage: error",!1,u,p),p.onabort=I(Cn,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=I(Cn,f,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function p_(o,u){const f=new Ar,p=new AbortController,R=setTimeout(()=>{p.abort(),Cn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(R),C.ok?Cn(f,"TestPingServer: ok",!0,u):Cn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Cn(f,"TestPingServer: error",!1,u)})}function Cn(o,u,f,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(f)}catch{}}function m_(){this.g=new Oi}function g_(o,u,f){const p=f||"";try{Vu(o,function(R,C){let B=R;h(R)&&(B=Qe(R)),u.push(p+C+"="+encodeURIComponent(B))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function ji(o){this.l=o.Ub||null,this.j=o.eb||!1}P(ji,Vs),ji.prototype.g=function(){return new Hi(this.l,this.j)},ji.prototype.i=(function(o){return function(){return o}})({});function Hi(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Hi,ee),t=Hi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,kr(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Pr(this):kr(this),this.readyState==3&&Fu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Pr(this))},t.Qa=function(o){this.g&&(this.response=o,Pr(this))},t.ga=function(){this.g&&Pr(this)};function Pr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,kr(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function kr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Uu(o){let u="";return Se(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function Wa(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Uu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ce(o,u,f))}function Oe(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Oe,ee);var __=/^https?$/i,y_=["POST","PUT"];t=Oe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$a.g(),this.v=this.o?pu(this.o):pu($a),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){$u(this,C);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)f.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())f.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(y_,u,void 0))||p||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,B]of f)this.g.setRequestHeader(C,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){$u(this,C)}};function $u(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Bu(o),qi(o)}function Bu(o){o.A||(o.A=!0,ue(o,"complete"),ue(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ue(this,"complete"),ue(this,"abort"),qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ju(this):this.bb())},t.bb=function(){ju(this)};function ju(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ln(o)!=4||o.Z()!=2)){if(o.u&&ln(o)==4)We(o.Ea,0,o);else if(ue(o,"readystatechange"),ln(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=B===0){var R=String(o.D).match(Du)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),p=!__.test(R?R.toLowerCase():"")}f=p}if(f)ue(o,"complete"),ue(o,"success");else{o.m=6;try{var C=2<ln(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Bu(o)}}finally{qi(o)}}}}function qi(o,u){if(o.g){Hu(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ue(o,"ready");try{f.onreadystatechange=p}catch{}}}function Hu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function ln(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Pt(u)}};function qu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function E_(o){const u={};o=(o.g&&2<=ln(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(W(o[p]))continue;var f=w(o[p]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}S(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vr(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function zu(o){this.Aa=0,this.i=[],this.j=new Ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vr("baseRetryDelayMs",5e3,o),this.cb=Vr("retryDelaySeedMs",1e4,o),this.Wa=Vr("forwardChannelMaxRetries",2,o),this.wa=Vr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new bu(o&&o.concurrentRequestLimit),this.Da=new m_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,p){_t(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=eh(this,null,this.W),Ki(this)};function Ga(o){if(Ku(o),o.G==3){var u=o.U++,f=cn(o.I);if(Ce(f,"SID",o.K),Ce(f,"RID",u),Ce(f,"TYPE","terminate"),Dr(o,f),u=new bn(o,o.j,u),u.L=2,u.v=Bi(cn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=th(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Fi(u)}Zu(o)}function zi(o){o.g&&(Ja(o),o.g.cancel(),o.g=null)}function Ku(o){zi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Wi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ki(o){if(!Ru(o.h)&&!o.s){o.s=!0;var u=o.Ga;le||as(),Ee||(le(),Ee=!0),Nt.add(u,o),o.B=0}}function v_(o,u){return Cu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=wr(_(o.Ga,o,u),Xu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new bn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=g(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Gu(this,R,u),f=cn(this.I),Ce(f,"RID",o),Ce(f,"CVER",22),this.D&&Ce(f,"X-HTTP-Session-Id",this.D),Dr(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Uu(C)))+"&"+u:this.m&&Wa(f,this.m,C)),Ka(this.h,R),this.Ua&&Ce(f,"TYPE","init"),this.P?(Ce(f,"$req",u),Ce(f,"SID","null"),R.T=!0,ja(R,f,null)):ja(R,f,u),this.G=2}}else this.G==3&&(o?Wu(this,o):this.i.length==0||Ru(this.h)||Wu(this))};function Wu(o,u){var f;u?f=u.l:f=o.U++;const p=cn(o.I);Ce(p,"SID",o.K),Ce(p,"RID",f),Ce(p,"AID",o.T),Dr(o,p),o.m&&o.o&&Wa(p,o.m,o.o),f=new bn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Gu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ka(o.h,f),ja(f,p,u)}function Dr(o,u){o.H&&Se(o.H,function(f,p){Ce(u,p,f)}),o.l&&Vu({},function(f,p){Ce(u,p,f)})}function Gu(o,u,f){f=Math.min(o.i.length,f);var p=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const B=["count="+f];C==-1?0<f?(C=R[0].g,B.push("ofs="+C)):C=0:B.push("ofs="+C);let we=!0;for(let Je=0;Je<f;Je++){let ve=R[Je].g;const it=R[Je].map;if(ve-=C,0>ve)C=Math.max(0,R[Je].g-100),we=!1;else try{g_(it,B,"req"+ve+"_")}catch{p&&p(it)}}if(we){p=B.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,p}function Qu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;le||as(),Ee||(le(),Ee=!0),Nt.add(u,o),o.v=0}}function Qa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=wr(_(o.Fa,o),Xu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Ju(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=wr(_(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),zi(this),Ju(this))};function Ja(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Ju(o){o.g=new bn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=cn(o.qa);Ce(u,"RID","rpc"),Ce(u,"SID",o.K),Ce(u,"AID",o.T),Ce(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ce(u,"TO",o.ja),Ce(u,"TYPE","xmlhttp"),Dr(o,u),o.m&&o.o&&Wa(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Bi(cn(u)),f.m=null,f.P=!0,wu(f,o)}t.Za=function(){this.C!=null&&(this.C=null,zi(this),Qa(this),_t(19))};function Wi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Yu(o,u){var f=null;if(o.g==u){Wi(o),Ja(o),o.g=null;var p=2}else if(za(o.h,u))f=u.D,Pu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;p=Li(),ue(p,new Eu(p,f)),Ki(o)}else Qu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&v_(o,u)||p==2&&Qa(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:ds(o,5);break;case 4:ds(o,10);break;case 3:ds(o,6);break;default:ds(o,2)}}}function Xu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function ds(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),p=o.Xa;const R=!p;p=new fs(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ui(p,"https"),Bi(p),R?d_(p.toString(),f):p_(p.toString(),f)}else _t(2);o.G=0,o.l&&o.l.sa(u),Zu(o),Ku(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Zu(o){if(o.G=0,o.ka=[],o.l){const u=ku(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function eh(o,u,f){var p=f instanceof fs?cn(f):new fs(f);if(p.g!="")u&&(p.g=u+"."+p.g),$i(p,p.s);else{var R=c.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new fs(null);p&&Ui(C,p),u&&(C.g=u),R&&$i(C,R),f&&(C.l=f),p=C}return f=o.D,u=o.ya,f&&u&&Ce(p,f,u),Ce(p,"VER",o.la),Dr(o,p),p}function th(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Oe(new ji({eb:f})):new Oe(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function nh(){}t=nh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Gi(){}Gi.prototype.g=function(o,u){return new wt(o,u)};function wt(o,u){ee.call(this),this.g=new zu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!W(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!W(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Os(this)}P(wt,ee),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Ga(this.g)},wt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new s_(u.Ya++,o)),u.G==3&&Ki(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,Ga(this.g),delete this.g,wt.aa.N.call(this)};function sh(o){Fa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(sh,Fa);function rh(){Ua.call(this),this.status=1}P(rh,Ua);function Os(o){this.g=o}P(Os,nh),Os.prototype.ua=function(){ue(this.g,"a")},Os.prototype.ta=function(o){ue(this.g,new sh(o))},Os.prototype.sa=function(o){ue(this.g,new rh)},Os.prototype.ra=function(){ue(this.g,"b")},Gi.prototype.createWebChannel=Gi.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,bm=function(){return new Gi},Sm=function(){return Li()},Am=us,Bc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,go=Mi,vu.COMPLETE="complete",wm=vu,mu.EventType=Tr,Tr.OPEN="a",Tr.CLOSE="b",Tr.ERROR="c",Tr.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Ur=mu,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,Im=Oe}).apply(typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{});const vf="@firebase/firestore",Tf="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Al("@firebase/firestore");function Us(){return Ss.logLevel}function K(t,...e){if(Ss.logLevel<=de.DEBUG){const n=e.map(Ml);Ss.debug(`Firestore (${pr}): ${t}`,...n)}}function Tn(t,...e){if(Ss.logLevel<=de.ERROR){const n=e.map(Ml);Ss.error(`Firestore (${pr}): ${t}`,...n)}}function rr(t,...e){if(Ss.logLevel<=de.WARN){const n=e.map(Ml);Ss.warn(`Firestore (${pr}): ${t}`,...n)}}function Ml(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Rm(t,s,n)}function Rm(t,e,n){let s=`FIRESTORE (${pr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Tn(s),new Error(s)}function Ie(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||Rm(e,r,s)}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(lt.UNAUTHENTICATED)))}shutdown(){}}class gA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class _A{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0,42304);let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await r(this.currentUser)}))},c=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ie(typeof s.accessToken=="string",31837,{l:s}),new Cm(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class yA{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class EA{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new yA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(lt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class If{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Lt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ie(this.o===void 0,3512);const s=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new If(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ie(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new If(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=TA(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function pe(t,e){return t<e?-1:t>e?1:0}function jc(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),i=e.charAt(s);if(r!==i)return gc(r)===gc(i)?pe(r,i):gc(r)?1:-1}return pe(t.length,e.length)}const IA=55296,wA=57343;function gc(t){const e=t.charCodeAt(0);return e>=IA&&e<=wA}function ir(t,e,n){return t.length===e.length&&t.every(((s,r)=>n(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="__name__";class qt{constructor(e,n,s){n===void 0?n=0:n>e.length&&ne(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ne(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return qt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qt?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=qt.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return pe(e.length,n.length)}static compareSegments(e,n){const s=qt.isNumericId(e),r=qt.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?qt.extractNumericId(e).compare(qt.extractNumericId(n)):jc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qn.fromString(e.substring(4,e.length-2))}}class Pe extends qt{construct(e,n,s){return new Pe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new J(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new Pe(n)}static emptyPath(){return new Pe([])}}const AA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends qt{construct(e,n,s){return new et(e,n,s)}static isValidIdentifier(e){return AA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wf}static keyField(){return new et([wf])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new J(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new J(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new J(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Pe.fromString(e))}static fromName(e){return new X(Pe.fromString(e).popFirst(5))}static empty(){return new X(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t,e,n){if(!n)throw new J(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SA(t,e,n,s){if(e===!0&&s===!0)throw new J(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Af(t){if(!X.isDocumentKey(t))throw new J(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sf(t){if(X.isDocumentKey(t))throw new J(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function km(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Fl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne(12329,{type:typeof t})}function bs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fl(t);throw new J(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ri(t,e){if(!km(t))throw new J(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const a=t[s];if(r&&typeof a!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new J(D.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=-62135596800,Rf=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Rf);return new ke(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<bf)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rf}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ri(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:Ue("string",ke._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new ke(0,0))}static max(){return new ie(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=-1;function bA(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ie.fromTimestamp(s===1e9?new ke(n+1,0):new ke(n,s));return new Qn(r,X.empty(),e)}function RA(t){return new Qn(t.readTime,t.key,hi)}class Qn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Qn(ie.min(),X.empty(),hi)}static max(){return new Qn(ie.max(),X.empty(),hi)}}function CA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==PA)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):V.reject(n)}static resolve(e){return new V(((n,s)=>{n(e)}))}static reject(e){return new V(((n,s)=>{s(e)}))}static waitFor(e){return new V(((n,s)=>{let r=0,i=0,a=!1;e.forEach((c=>{++r,c.next((()=>{++i,a&&i===r&&n()}),(l=>s(l)))})),a=!0,i===r&&n()}))}static or(e){let n=V.resolve(!1);for(const s of e)n=n.next((r=>r?V.resolve(r):s()));return n}static forEach(e,n){const s=[];return e.forEach(((r,i)=>{s.push(n.call(this,r,i))})),this.waitFor(s)}static mapArray(e,n){return new V(((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next((d=>{a[h]=d,++c,c===i&&s(a)}),(d=>r(d)))}}))}static doWhile(e,n){return new V(((s,r)=>{const i=()=>{e()===!0?n().next((()=>{i()}),r):s()};i()}))}}function VA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}va.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=-1;function Ta(t){return t==null}function Ho(t){return t===0&&1/t==-1/0}function DA(t){return typeof t=="number"&&Number.isInteger(t)&&!Ho(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="";function NA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Cf(e)),e=OA(t.get(n),e);return Cf(e)}function OA(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case Vm:n+="";break;default:n+=i}}return n}function Cf(t){return t+Vm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Dm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=r??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Xe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Xe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kf(this.data.getIterator())}getIteratorFrom(e){return new kf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class kf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new qe(et.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ir(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nm("Invalid base64 string: "+i):i}})(e);return new st(n)}static fromUint8Array(e){const n=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const LA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(Ie(!!t,39018),typeof t=="string"){let e=0;const n=LA.exec(t);if(Ie(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yn(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="server_timestamp",Lm="__type__",Mm="__previous_value__",xm="__local_write_time__";function $l(t){return(t?.mapValue?.fields||{})[Lm]?.stringValue===Om}function Ia(t){const e=t.mapValue.fields[Mm];return $l(e)?Ia(e):e}function fi(t){const e=Jn(t.mapValue.fields[xm].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n,s,r,i,a,c,l,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const qo="(default)";class di{constructor(e,n){this.projectId=e,this.database=n||qo}static empty(){return new di("","")}get isDefaultDatabase(){return this.database===qo}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="__type__",xA="__max__",no={mapValue:{}},Um="__vector__",zo="value";function Xn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$l(t)?4:UA(t)?9007199254740991:FA(t)?10:11:ne(28295,{value:t})}function sn(t,e){if(t===e)return!0;const n=Xn(t);if(n!==Xn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fi(t).isEqual(fi(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Jn(r.timestampValue),c=Jn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(r,i){return Yn(r.bytesValue).isEqual(Yn(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)})(t,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=Le(r.doubleValue),c=Le(i.doubleValue);return a===c?Ho(a)===Ho(c):isNaN(a)&&isNaN(c)}return!1})(t,e);case 9:return ir(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(Pf(a)!==Pf(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!sn(a[l],c[l])))return!1;return!0})(t,e);default:return ne(52216,{left:t})}}function pi(t,e){return(t.values||[]).find((n=>sn(n,e)))!==void 0}function or(t,e){if(t===e)return 0;const n=Xn(t),s=Xn(e);if(n!==s)return pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Le(i.integerValue||i.doubleValue),l=Le(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return Vf(t.timestampValue,e.timestampValue);case 4:return Vf(fi(t),fi(e));case 5:return jc(t.stringValue,e.stringValue);case 6:return(function(i,a){const c=Yn(i),l=Yn(a);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=pe(c[h],l[h]);if(d!==0)return d}return pe(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=pe(Le(i.latitude),Le(a.latitude));return c!==0?c:pe(Le(i.longitude),Le(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Df(t.arrayValue,e.arrayValue);case 10:return(function(i,a){const c=i.fields||{},l=a.fields||{},h=c[zo]?.arrayValue,d=l[zo]?.arrayValue,m=pe(h?.values?.length||0,d?.values?.length||0);return m!==0?m:Df(h,d)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===no.mapValue&&a===no.mapValue)return 0;if(i===no.mapValue)return 1;if(a===no.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let m=0;m<l.length&&m<d.length;++m){const _=jc(l[m],d[m]);if(_!==0)return _;const I=or(c[l[m]],h[d[m]]);if(I!==0)return I}return pe(l.length,d.length)})(t.mapValue,e.mapValue);default:throw ne(23264,{he:n})}}function Vf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Jn(t),s=Jn(e),r=pe(n.seconds,s.seconds);return r!==0?r:pe(n.nanos,s.nanos)}function Df(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=or(n[r],s[r]);if(i)return i}return pe(n.length,s.length)}function ar(t){return Hc(t)}function Hc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Jn(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Yn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return X.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Hc(i);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${Hc(n.fields[a])}`;return r+"}"})(t.mapValue):ne(61005,{value:t})}function _o(t){switch(Xn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ia(t);return e?16+_o(e):16;case 5:return 2*t.stringValue.length;case 6:return Yn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+_o(i)),0)})(t.arrayValue);case 10:case 11:return(function(s){let r=0;return is(s.fields,((i,a)=>{r+=i.length+_o(a)})),r})(t.mapValue);default:throw ne(13486,{value:t})}}function qc(t){return!!t&&"integerValue"in t}function Bl(t){return!!t&&"arrayValue"in t}function Nf(t){return!!t&&"nullValue"in t}function Of(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yo(t){return!!t&&"mapValue"in t}function FA(t){return(t?.mapValue?.fields||{})[Fm]?.stringValue===Um}function Zr(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return is(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Zr(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zr(t.arrayValue.values[n]);return e}return{...t}}function UA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===xA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zr(n)}setAll(e){let n=et.emptyPath(),s={},r=[];e.forEach(((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=c.popLast()}a?s[c.lastSegment()]=Zr(a):r.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];yo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){is(n,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new It(Zr(this.value))}}function $m(t){const e=[];return is(t.fields,((n,s)=>{const r=new et([n]);if(yo(s)){const i=$m(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new Rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,s,r,i,a,c){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ht(e,0,ie.min(),ie.min(),ie.min(),It.empty(),0)}static newFoundDocument(e,n,s,r){return new ht(e,1,n,ie.min(),s,r,0)}static newNoDocument(e,n){return new ht(e,2,n,ie.min(),ie.min(),It.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,ie.min(),ie.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.position=e,this.inclusive=n}}function Lf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],a=t.position[r];if(i.field.isKeyField()?s=X.comparator(X.fromName(a.referenceValue),n.key):s=or(a,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n="asc"){this.field=e,this.dir=n}}function $A(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{}class He extends Bm{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new jA(e,n,s):n==="array-contains"?new zA(e,s):n==="in"?new KA(e,s):n==="not-in"?new WA(e,s):n==="array-contains-any"?new GA(e,s):new He(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new HA(e,s):new qA(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(or(n,this.value)):n!==null&&Xn(this.value)===Xn(n)&&this.matchesComparison(or(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends Bm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new rn(e,n)}matches(e){return jm(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function jm(t){return t.op==="and"}function Hm(t){return BA(t)&&jm(t)}function BA(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function zc(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+ar(t.value);if(Hm(t))return t.filters.map((e=>zc(e))).join(",");{const e=t.filters.map((n=>zc(n))).join(",");return`${t.op}(${e})`}}function qm(t,e){return t instanceof He?(function(s,r){return r instanceof He&&s.op===r.op&&s.field.isEqual(r.field)&&sn(s.value,r.value)})(t,e):t instanceof rn?(function(s,r){return r instanceof rn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,a,c)=>i&&qm(a,r.filters[c])),!0):!1})(t,e):void ne(19439)}function zm(t){return t instanceof He?(function(n){return`${n.field.canonicalString()} ${n.op} ${ar(n.value)}`})(t):t instanceof rn?(function(n){return n.op.toString()+" {"+n.getFilters().map(zm).join(" ,")+"}"})(t):"Filter"}class jA extends He{constructor(e,n,s){super(e,n,s),this.key=X.fromName(s.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class HA extends He{constructor(e,n){super(e,"in",n),this.keys=Km("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class qA extends He{constructor(e,n){super(e,"not-in",n),this.keys=Km("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Km(t,e){return(e.arrayValue?.values||[]).map((n=>X.fromName(n.referenceValue)))}class zA extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bl(n)&&pi(n.arrayValue,this.value)}}class KA extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pi(this.value.arrayValue,n)}}class WA extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!pi(this.value.arrayValue,n)}}class GA extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bl(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>pi(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function xf(t,e=null,n=[],s=[],r=null,i=null,a=null){return new QA(t,e,n,s,r,i,a)}function jl(t){const e=ce(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>zc(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Ta(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>ar(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>ar(s))).join(",")),e.Te=n}return e.Te}function Hl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$A(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mf(t.startAt,e.startAt)&&Mf(t.endAt,e.endAt)}function Kc(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n=null,s=[],r=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function JA(t,e,n,s,r,i,a,c){return new wa(t,e,n,s,r,i,a,c)}function Wm(t){return new wa(t)}function Ff(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function YA(t){return t.collectionGroup!==null}function ei(t){const e=ce(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new qe(et.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Wo(i,s))})),n.has(et.keyField().canonicalString())||e.Ie.push(new Wo(et.keyField(),s))}return e.Ie}function Yt(t){const e=ce(t);return e.Ee||(e.Ee=XA(e,ei(t))),e.Ee}function XA(t,e){if(t.limitType==="F")return xf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Wo(r.field,i)}));const n=t.endAt?new Ko(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Ko(t.startAt.position,t.startAt.inclusive):null;return xf(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Wc(t,e,n){return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Aa(t,e){return Hl(Yt(t),Yt(e))&&t.limitType===e.limitType}function Gm(t){return`${jl(Yt(t))}|lt:${t.limitType}`}function $s(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((r=>zm(r))).join(", ")}]`),Ta(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((r=>ar(r))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((r=>ar(r))).join(",")),`Target(${s})`})(Yt(t))}; limitType=${t.limitType})`}function Sa(t,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):X.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(t,e)&&(function(s,r){for(const i of ei(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(t,e)&&(function(s,r){return!(s.startAt&&!(function(a,c,l){const h=Lf(a,c,l);return a.inclusive?h<=0:h<0})(s.startAt,ei(s),r)||s.endAt&&!(function(a,c,l){const h=Lf(a,c,l);return a.inclusive?h>=0:h>0})(s.endAt,ei(s),r))})(t,e)}function ZA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qm(t){return(e,n)=>{let s=!1;for(const r of ei(t)){const i=eS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function eS(t,e,n){const s=t.field.isKeyField()?X.comparator(e.key,n.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?or(l,h):ne(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ne(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,((n,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Dm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=new Ne(X.comparator);function In(){return tS}const Jm=new Ne(X.comparator);function $r(...t){let e=Jm;for(const n of t)e=e.insert(n.key,n);return e}function Ym(t){let e=Jm;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Es(){return ti()}function Xm(){return ti()}function ti(){return new Ps((t=>t.toString()),((t,e)=>t.isEqual(e)))}const nS=new Ne(X.comparator),sS=new qe(X.comparator);function me(...t){let e=sS;for(const n of t)e=e.add(n);return e}const rS=new qe(pe);function iS(){return rS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ho(e)?"-0":e}}function Zm(t){return{integerValue:""+t}}function oS(t,e){return DA(e)?Zm(e):ql(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this._=void 0}}function aS(t,e,n){return t instanceof Go?(function(r,i){const a={fields:{[Lm]:{stringValue:Om},[xm]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&$l(i)&&(i=Ia(i)),i&&(a.fields[Mm]=i),{mapValue:a}})(n,e):t instanceof mi?tg(t,e):t instanceof gi?ng(t,e):(function(r,i){const a=eg(r,i),c=Uf(a)+Uf(r.Ae);return qc(a)&&qc(r.Ae)?Zm(c):ql(r.serializer,c)})(t,e)}function cS(t,e,n){return t instanceof mi?tg(t,e):t instanceof gi?ng(t,e):n}function eg(t,e){return t instanceof Qo?(function(s){return qc(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Go extends ba{}class mi extends ba{constructor(e){super(),this.elements=e}}function tg(t,e){const n=sg(e);for(const s of t.elements)n.some((r=>sn(r,s)))||n.push(s);return{arrayValue:{values:n}}}class gi extends ba{constructor(e){super(),this.elements=e}}function ng(t,e){let n=sg(e);for(const s of t.elements)n=n.filter((r=>!sn(r,s)));return{arrayValue:{values:n}}}class Qo extends ba{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Uf(t){return Le(t.integerValue||t.doubleValue)}function sg(t){return Bl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lS(t,e){return t.field.isEqual(e.field)&&(function(s,r){return s instanceof mi&&r instanceof mi||s instanceof gi&&r instanceof gi?ir(s.elements,r.elements,sn):s instanceof Qo&&r instanceof Qo?sn(s.Ae,r.Ae):s instanceof Go&&r instanceof Go})(t.transform,e.transform)}class uS{constructor(e,n){this.version=e,this.transformResults=n}}class Ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ra{}function rg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zl(t.key,Ft.none()):new Ci(t.key,t.data,Ft.none());{const n=t.data,s=It.empty();let r=new qe(et.comparator);for(let i of e.fields)if(!r.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new os(t.key,s,new Rt(r.toArray()),Ft.none())}}function hS(t,e,n){t instanceof Ci?(function(r,i,a){const c=r.value.clone(),l=Bf(r.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):t instanceof os?(function(r,i,a){if(!Eo(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Bf(r.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(ig(r)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function ni(t,e,n,s){return t instanceof Ci?(function(i,a,c,l){if(!Eo(i.precondition,a))return c;const h=i.value.clone(),d=jf(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(t,e,n,s):t instanceof os?(function(i,a,c,l){if(!Eo(i.precondition,a))return c;const h=jf(i.fieldTransforms,l,a),d=a.data;return d.setAll(ig(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(t,e,n,s):(function(i,a,c){return Eo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(t,e,n)}function fS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=eg(s.transform,r||null);i!=null&&(n===null&&(n=It.empty()),n.set(s.field,i))}return n||null}function $f(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&ir(s,r,((i,a)=>lS(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ci extends Ra{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class os extends Ra{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ig(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Bf(t,e,n){const s=new Map;Ie(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let r=0;r<n.length;r++){const i=t[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,cS(a,c,n[r]))}return s}function jf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,a=n.data.field(r.field);s.set(r.field,aS(i,a,e))}return s}class zl extends Ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dS extends Ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&hS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ni(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ni(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Xm();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(r.key)?null:c;const l=rg(a,c);l!==null&&s.set(r.key,l),a.isValidDocument()||a.convertToNoDocument(ie.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),me())}isEqual(e){return this.batchId===e.batchId&&ir(this.mutations,e.mutations,((n,s)=>$f(n,s)))&&ir(this.baseMutations,e.baseMutations,((n,s)=>$f(n,s)))}}class Kl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ie(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return nS})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new Kl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,_e;function _S(t){switch(t){case D.OK:return ne(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return ne(15467,{code:t})}}function og(t){if(t===void 0)return Tn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Me.OK:return D.OK;case Me.CANCELLED:return D.CANCELLED;case Me.UNKNOWN:return D.UNKNOWN;case Me.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Me.INTERNAL:return D.INTERNAL;case Me.UNAVAILABLE:return D.UNAVAILABLE;case Me.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Me.NOT_FOUND:return D.NOT_FOUND;case Me.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Me.ABORTED:return D.ABORTED;case Me.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Me.DATA_LOSS:return D.DATA_LOSS;default:return ne(39323,{code:t})}}(_e=Me||(Me={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=new qn([4294967295,4294967295],0);function Hf(t){const e=yS().encode(t),n=new Tm;return n.update(e),new Uint8Array(n.digest())}function qf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qn([n,s],0),new qn([r,i],0)]}class Wl{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Br(`Invalid padding: ${n}`);if(s<0)throw new Br(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Br(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Br(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=qn.fromNumber(this.ge)}ye(e,n,s){let r=e.add(n.multiply(qn.fromNumber(s)));return r.compare(ES)===1&&(r=new qn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Hf(e),[s,r]=qf(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Wl(i,r,n);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const n=Hf(e),[s,r]=qf(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.Se(a)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Br extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Pi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ca(ie.min(),r,new Ne(pe),In(),me())}}class Pi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Pi(s,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,s,r){this.be=e,this.removedTargetIds=n,this.key=s,this.De=r}}class ag{constructor(e,n){this.targetId=e,this.Ce=n}}class cg{constructor(e,n,s=st.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class zf{constructor(){this.ve=0,this.Fe=Kf(),this.Me=st.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=me(),n=me(),s=me();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ne(38017,{changeType:i})}})),new Pi(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=Kf()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class vS{constructor(e){this.Ge=e,this.ze=new Map,this.je=In(),this.Je=so(),this.He=so(),this.Ye=new Ne(pe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:ne(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,r)=>{this.rt(r)&&n(r)}))}st(e){const n=e.targetId,s=e.Ce.count,r=this.ot(n);if(r){const i=r.target;if(Kc(i))if(s===0){const a=new X(i.path);this.et(n,a,ht.newNoDocument(a,ie.min()))}else Ie(s===1,20013,{expectedCount:s});else{const a=this._t(n);if(a!==s){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let a,c;try{a=Yn(s).toUint8Array()}catch(l){if(l instanceof Nm)return rr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Wl(a,r,i)}catch(l){return rr(l instanceof Br?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let r=0;return s.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),r++)})),r}Tt(e){const n=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Kc(c.target)){const l=new X(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ht.newNoDocument(l,e))}i.Be&&(n.set(a,i.ke()),i.qe())}}));let s=me();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const r=new Ca(e,n,this.Ye,this.je,s);return this.je=In(),this.Je=so(),this.He=so(),this.Ye=new Ne(pe),r}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,n)?r.Qe(n,1):r.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new zf,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new qe(pe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new qe(pe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new zf),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function so(){return new Ne(X.comparator)}function Kf(){return new Ne(X.comparator)}const TS={asc:"ASCENDING",desc:"DESCENDING"},IS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wS={and:"AND",or:"OR"};class AS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gc(t,e){return t.useProto3Json||Ta(e)?e:{value:e}}function Jo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SS(t,e){return Jo(t,e.toTimestamp())}function Xt(t){return Ie(!!t,49232),ie.fromTimestamp((function(n){const s=Jn(n);return new ke(s.seconds,s.nanos)})(t))}function Gl(t,e){return Qc(t,e).canonicalString()}function Qc(t,e){const n=(function(r){return new Pe(["projects",r.projectId,"databases",r.database])})(t).child("documents");return e===void 0?n:n.child(e)}function ug(t){const e=Pe.fromString(t);return Ie(mg(e),10190,{key:e.toString()}),e}function Jc(t,e){return Gl(t.databaseId,e.path)}function _c(t,e){const n=ug(e);if(n.get(1)!==t.databaseId.projectId)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(fg(n))}function hg(t,e){return Gl(t.databaseId,e)}function bS(t){const e=ug(t);return e.length===4?Pe.emptyPath():fg(e)}function Yc(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fg(t){return Ie(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Wf(t,e,n){return{name:Jc(t,e),fields:n.value.mapValue.fields}}function RS(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Ie(d===void 0||typeof d=="string",58123),st.fromBase64String(d||"")):(Ie(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),st.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?D.UNKNOWN:og(h.code);return new J(d,h.message||"")})(a);n=new cg(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=_c(t,s.document.name),i=Xt(s.document.updateTime),a=s.document.createTime?Xt(s.document.createTime):ie.min(),c=new It({mapValue:{fields:s.document.fields}}),l=ht.newFoundDocument(r,i,a,c),h=s.targetIds||[],d=s.removedTargetIds||[];n=new vo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=_c(t,s.document),i=s.readTime?Xt(s.readTime):ie.min(),a=ht.newNoDocument(r,i),c=s.removedTargetIds||[];n=new vo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=_c(t,s.document),i=s.removedTargetIds||[];n=new vo([],i,r,null)}else{if(!("filter"in e))return ne(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new gS(r,i),c=s.targetId;n=new ag(c,a)}}return n}function CS(t,e){let n;if(e instanceof Ci)n={update:Wf(t,e.key,e.value)};else if(e instanceof zl)n={delete:Jc(t,e.key)};else if(e instanceof os)n={update:Wf(t,e.key,e.data),updateMask:xS(e.fieldMask)};else{if(!(e instanceof dS))return ne(16599,{Vt:e.type});n={verify:Jc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(i,a){const c=a.transform;if(c instanceof Go)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Qo)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ne(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:SS(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne(27497)})(t,e.precondition)),n}function PS(t,e){return t&&t.length>0?(Ie(e!==void 0,14353),t.map((n=>(function(r,i){let a=r.updateTime?Xt(r.updateTime):Xt(i);return a.isEqual(ie.min())&&(a=Xt(i)),new uS(a,r.transformResults||[])})(n,e)))):[]}function kS(t,e){return{documents:[hg(t,e.path)]}}function VS(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=hg(t,r);const i=(function(h){if(h.length!==0)return pg(rn.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(_){return{field:Bs(_.field),direction:OS(_.dir)}})(d)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Gc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:r}}function DS(t){let e=bS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ie(s===1,65062);const d=n.from[0];d.allDescendants?r=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(m){const _=dg(m);return _ instanceof rn&&Hm(_)?_.getFilters():[_]})(n.where));let a=[];n.orderBy&&(a=(function(m){return m.map((_=>(function(P){return new Wo(js(P.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(_)))})(n.orderBy));let c=null;n.limit&&(c=(function(m){let _;return _=typeof m=="object"?m.value:m,Ta(_)?null:_})(n.limit));let l=null;n.startAt&&(l=(function(m){const _=!!m.before,I=m.values||[];return new Ko(I,_)})(n.startAt));let h=null;return n.endAt&&(h=(function(m){const _=!m.before,I=m.values||[];return new Ko(I,_)})(n.endAt)),JA(e,r,a,i,c,"F",l,h)}function NS(t,e){const n=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:r})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dg(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=js(n.unaryFilter.field);return He.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=js(n.unaryFilter.field);return He.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=js(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=js(n.unaryFilter.field);return He.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}})(t):t.fieldFilter!==void 0?(function(n){return He.create(js(n.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return rn.create(n.compositeFilter.filters.map((s=>dg(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ne(1026)}})(n.compositeFilter.op))})(t):ne(30097,{filter:t})}function OS(t){return TS[t]}function LS(t){return IS[t]}function MS(t){return wS[t]}function Bs(t){return{fieldPath:t.canonicalString()}}function js(t){return et.fromServerFormat(t.fieldPath)}function pg(t){return t instanceof He?(function(n){if(n.op==="=="){if(Of(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NAN"}};if(Nf(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Of(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NOT_NAN"}};if(Nf(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bs(n.field),op:LS(n.op),value:n.value}}})(t):t instanceof rn?(function(n){const s=n.getFilters().map((r=>pg(r)));return s.length===1?s[0]:{compositeFilter:{op:MS(n.op),filters:s}}})(t):ne(54877,{filter:t})}function xS(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function mg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n,s,r,i=ie.min(),a=ie.min(),c=st.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.yt=e}}function US(t){const e=DS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(){this.Cn=new BS}addToCollectionParentIndex(e,n){return this.Cn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Qn.min())}updateCollectionGroup(e,n,s){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class BS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new qe(Pe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new qe(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gg=41943040;class Tt{static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(gg,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new cr(0)}static cr(){return new cr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="LruGarbageCollector",jS=1048576;function Jf([t,e],[n,s]){const r=pe(t,n);return r===0?pe(e,s):r}class HS{constructor(e){this.Ir=e,this.buffer=new qe(Jf),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Jf(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qS{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){K(Qf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gr(n)?K(Qf,"Ignoring IndexedDB error during garbage collection: ",n):await mr(n)}await this.Vr(3e5)}))}}class zS{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return V.resolve(va.ce);const s=new HS(n);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Gf)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gf):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,r,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),r=this.params.maximumSequenceNumbersToCollect):r=m,a=Date.now(),this.nthSequenceNumber(e,r)))).next((m=>(s=m,c=Date.now(),this.removeTargets(e,s,n)))).next((m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,s)))).next((m=>(h=Date.now(),Us()<=de.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:m}))))}}function KS(t,e){return new zS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(){this.changes=new Ps((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?V.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,n)))).next((r=>(s!==null&&ni(s.mutation,r,Rt.empty(),ke.now()),r)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,me()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=me()){const r=Es();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,s).next((i=>{let a=$r();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const s=Es();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,me())))}populateOverlays(e,n,s){const r=[];return s.forEach((i=>{n.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,c)=>{n.set(a,c)}))}))}computeViews(e,n,s,r){let i=In();const a=ti(),c=(function(){return ti()})();return n.forEach(((l,h)=>{const d=s.get(h.key);r.has(h.key)&&(d===void 0||d.mutation instanceof os)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ni(d.mutation,h,d.mutation.getFieldMask(),ke.now())):a.set(h.key,Rt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),n.forEach(((h,d)=>c.set(h,new GS(d,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,n){const s=ti();let r=new Ne(((a,c)=>a-c)),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let d=s.get(l)||Rt.empty();d=c.applyToLocalView(h,d),s.set(l,d);const m=(r.get(c.batchId)||me()).add(l);r=r.insert(c.batchId,m)}))})).next((()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,m=Xm();d.forEach((_=>{if(!i.has(_)){const I=rg(n.get(_),s.get(_));I!==null&&m.set(_,I),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return V.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,r){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):YA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):V.resolve(Es());let c=hi,l=i;return a.next((h=>V.forEach(h,((d,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{l=l.insert(d,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,me()))).next((d=>({batchId:c,changes:Ym(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next((s=>{let r=$r();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let a=$r();return this.indexManager.getCollectionParents(e,i).next((c=>V.forEach(c,(l=>{const h=(function(m,_){return new wa(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((d=>{d.forEach(((m,_)=>{a=a.insert(m,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ht.newInvalidDocument(d)))}));let c=$r();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&ni(d.mutation,h,Rt.empty(),ke.now()),Sa(n,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return V.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(r){return{id:r.id,version:r.version,createTime:Xt(r.createTime)}})(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(r){return{name:r.name,query:US(r.bundledQuery),readTime:Xt(r.readTime)}})(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.overlays=new Ne(X.comparator),this.qr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Es();return V.forEach(n,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((r,i)=>{this.St(e,n,i)})),V.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),V.resolve()}getOverlaysForCollection(e,n,s){const r=Es(),i=n.length+1,a=new X(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return V.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ne(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let d=i.get(h.largestBatchId);d===null&&(d=Es(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=Es(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=r)););return V.resolve(c)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new mS(n,s));let i=this.qr.get(n);i===void 0&&(i=me(),this.qr.set(n,i)),this.qr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this.Qr=new qe(ze.$r),this.Ur=new qe(ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new ze(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new ze(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new X(new Pe([])),s=new ze(n,e),r=new ze(n,e+1),i=[];return this.Ur.forEachInRange([s,r],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new X(new Pe([])),s=new ze(n,e),r=new ze(n,e+1);let i=me();return this.Ur.forEachInRange([s,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new ze(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return X.comparator(e.key,n.key)||pe(e.Yr,n.Yr)}static Kr(e,n){return pe(e.Yr,n.Yr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new qe(ze.$r)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new pS(i,n,s,r);this.mutationQueue.push(a);for(const c of r)this.Zr=this.Zr.add(new ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,n){return V.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ei(s),i=r<0?0:r;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Ul:this.tr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ze(n,0),r=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(a=>{const c=this.Xr(a.Yr);i.push(c)})),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new qe(pe);return n.forEach((r=>{const i=new ze(r,0),a=new ze(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{s=s.add(c.Yr)}))})),V.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;X.isDocumentKey(i)||(i=i.child(""));const a=new ze(new X(i),0);let c=new qe(pe);return this.Zr.forEachWhile((l=>{const h=l.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(c=c.add(l.Yr)),!0)}),a),V.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&n.push(r)})),n}removeMutationBatch(e,n){Ie(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return V.forEach(n.mutations,(r=>{const i=new ze(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new ze(n,0),r=this.Zr.firstAfterOrEqual(s);return V.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.ri=e,this.docs=(function(){return new Ne(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,a=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return V.resolve(s?s.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let s=In();return n.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ht.newInvalidDocument(r))})),V.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=In();const a=n.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||CA(RA(d),s)<=0||(r.has(d.key)||Sa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ne(9500)}ii(e,n){return V.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new tb(this)}getSize(e){return V.resolve(this.size)}}class tb extends WS{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?n.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),V.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.persistence=e,this.si=new Ps((n=>jl(n)),Hl),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.oi=0,this._i=new Ql,this.targetCount=0,this.ai=cr.ur()}forEachTarget(e,n){return this.si.forEach(((s,r)=>n(r))),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),V.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new cr(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Pr(n),V.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=n&&s.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),V.waitFor(i).next((()=>r))}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return V.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),V.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return V.resolve(s)}containsKey(e,n){return V.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n){this.ui={},this.overlays={},this.ci=new va(0),this.li=!1,this.li=!0,this.hi=new XS,this.referenceDelegate=e(this),this.Pi=new nb(this),this.indexManager=new $S,this.remoteDocumentCache=(function(r){return new eb(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new FS(n),this.Ii=new JS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new YS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new ZS(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){K("MemoryPersistence","Starting transaction:",e);const r=new sb(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,n){return V.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class sb extends kA{constructor(e){super(),this.currentSequenceNumber=e}}class Jl{constructor(e){this.persistence=e,this.Ri=new Ql,this.Vi=null}static mi(e){return new Jl(e)}get fi(){if(this.Vi)return this.Vi;throw ne(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),V.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,(s=>{const r=X.fromPath(s);return this.gi(e,r).next((i=>{i||n.removeEntry(r,ie.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Yo{constructor(e,n){this.persistence=e,this.pi=new Ps((s=>NA(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=KS(this,n)}static mi(e,n){return new Yo(e,n)}Ei(){}di(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((r=>s+r))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return V.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?V.resolve():n(r)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(a=>this.br(e,a,n).next((c=>{c||(s++,i.removeEntry(a,ie.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),V.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),V.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=_o(e.data.value)),n}br(e,n,s){return V.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.pi.get(n);return V.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=r}static As(e,n){let s=me(),r=me();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Yl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Sv()?8:VA(mt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ys(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,n,r,s).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new rb;return this.Ss(e,n,a).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,a,c.size)}))})).next((()=>i.result))}bs(e,n,s,r){return s.documentReadCount<this.fs?(Us()<=de.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",$s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(Us()<=de.DEBUG&&K("QueryEngine","Query:",$s(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(Us()<=de.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",$s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):V.resolve())}ys(e,n){if(Ff(n))return V.resolve(null);let s=Yt(n);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(n.limit!==null&&r===1&&(n=Wc(n,null,"F"),s=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const a=me(...i);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((l=>{const h=this.Ds(n,c);return this.Cs(n,h,a,l.readTime)?this.ys(e,Wc(n,null,"F")):this.vs(e,h,n,l)}))))})))))}ws(e,n,s,r){return Ff(n)||r.isEqual(ie.min())?V.resolve(null):this.ps.getDocuments(e,s).next((i=>{const a=this.Ds(n,i);return this.Cs(n,a,s,r)?V.resolve(null):(Us()<=de.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),$s(n)),this.vs(e,a,n,bA(r,hi)).next((c=>c)))}))}Ds(e,n){let s=new qe(Qm(e));return n.forEach(((r,i)=>{Sa(e,i)&&(s=s.add(i))})),s}Cs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,n,s){return Us()<=de.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",$s(n)),this.ps.getDocumentsMatchingQuery(e,n,Qn.min(),s)}vs(e,n,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="LocalStore",ob=3e8;class ab{constructor(e,n,s,r){this.persistence=e,this.Fs=n,this.serializer=r,this.Ms=new Ne(pe),this.xs=new Ps((i=>jl(i)),Hl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QS(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function cb(t,e,n,s){return new ab(t,e,n,s)}async function yg(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((i=>{const a=[],c=[];let l=me();for(const h of r){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(s,l).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function lb(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const m=h.batch,_=m.keys();let I=V.resolve();return _.forEach((P=>{I=I.next((()=>d.getEntry(l,P))).next((L=>{const F=h.docVersions.get(P);Ie(F!==null,48541),L.version.compareTo(F)<0&&(m.applyToRemoteDocument(L,h),L.isValidDocument()&&(L.setReadTime(h.commitVersion),d.addEntry(L)))}))})),I.next((()=>c.mutationQueue.removeMutationBatch(l,m)))})(n,s,e,i).next((()=>i.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let l=me();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(s,r)))}))}function Eg(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function ub(t,e){const n=ce(t),s=e.snapshotVersion;let r=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});r=n.Ms;const c=[];e.targetChanges.forEach(((d,m)=>{const _=r.get(m);if(!_)return;c.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,m).next((()=>n.Pi.addMatchingKeys(i,d.addedDocuments,m))));let I=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(st.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,s)),r=r.insert(m,I),(function(L,F,z){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=ob?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(_,I,d)&&c.push(n.Pi.updateTargetData(i,I))}));let l=In(),h=me();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(hb(i,a,e.documentUpdates).next((d=>{l=d.ks,h=d.qs}))),!s.isEqual(ie.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next((m=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));c.push(d)}return V.waitFor(c).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(n.Ms=r,i)))}function hb(t,e,n){let s=me(),r=me();return n.forEach((i=>s=s.add(i))),e.getEntries(t,s).next((i=>{let a=In();return n.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):K(Xl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{ks:a,qs:r}}))}function fb(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Ul),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function db(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return n.Pi.getTargetData(s,e).next((i=>i?(r=i,V.resolve(r)):n.Pi.allocateTargetId(s).next((a=>(r=new xn(e,a,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=n.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Xc(t,e,n){const s=ce(t),r=s.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!gr(a))throw a;K(Xl,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function Yf(t,e,n){const s=ce(t);let r=ie.min(),i=me();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const m=ce(l),_=m.xs.get(d);return _!==void 0?V.resolve(m.Ms.get(_)):m.Pi.getTargetData(h,d)})(s,a,Yt(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>s.Fs.getDocumentsMatchingQuery(a,e,n?r:ie.min(),n?i:me()))).next((c=>(pb(s,ZA(e),c),{documents:c,Qs:i})))))}function pb(t,e,n){let s=t.Os.get(e)||ie.min();n.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),t.Os.set(e,s)}class Xf{constructor(){this.activeTargetIds=iS()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mb{constructor(){this.Mo=new Xf,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Xf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="ConnectivityMonitor";class ed{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){K(Zf,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){K(Zf,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro=null;function Zc(){return ro===null?ro=(function(){return 268435456+Math.round(2147483648*Math.random())})():ro++,"0x"+ro.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="RestConnection",_b={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===qo?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,n,s,r,i){const a=Zc(),c=this.zo(e,n.toUriEncodedString());K(yc,`Sending RPC '${e}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,r,i);const{host:h}=new URL(c),d=ur(h);return this.Jo(e,c,l,s,d).then((m=>(K(yc,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw rr(yc,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",s),m}))}Ho(e,n,s,r,i,a){return this.Go(e,n,s,r,i)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+pr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,n){const s=_b[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class vb extends yb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,r,i){const a=Zc();return new Promise(((c,l)=>{const h=new Im;h.setWithCredentials(!0),h.listenOnce(wm.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case go.NO_ERROR:const m=h.getResponseJson();K(at,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case go.TIMEOUT:K(at,`RPC '${e}' ${a} timed out`),l(new J(D.DEADLINE_EXCEEDED,"Request time out"));break;case go.HTTP_ERROR:const _=h.getStatus();if(K(at,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const P=I?.error;if(P&&P.status&&P.message){const L=(function(z){const W=z.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(W)>=0?W:D.UNKNOWN})(P.status);l(new J(L,P.message))}else l(new J(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new J(D.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{K(at,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(r);K(at,`RPC '${e}' ${a} sending request:`,r),h.send(n,"POST",d,s,15)}))}T_(e,n,s){const r=Zc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=bm(),c=Sm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const d=i.join("");K(at,`Creating RPC '${e}' stream ${r}: ${d}`,l);const m=a.createWebChannel(d,l);this.I_(m);let _=!1,I=!1;const P=new Eb({Yo:F=>{I?K(at,`Not sending because RPC '${e}' stream ${r} is closed:`,F):(_||(K(at,`Opening RPC '${e}' stream ${r} transport.`),m.open(),_=!0),K(at,`RPC '${e}' stream ${r} sending:`,F),m.send(F))},Zo:()=>m.close()}),L=(F,z,W)=>{F.listen(z,(Q=>{try{W(Q)}catch(G){setTimeout((()=>{throw G}),0)}}))};return L(m,Ur.EventType.OPEN,(()=>{I||(K(at,`RPC '${e}' stream ${r} transport opened.`),P.o_())})),L(m,Ur.EventType.CLOSE,(()=>{I||(I=!0,K(at,`RPC '${e}' stream ${r} transport closed`),P.a_(),this.E_(m))})),L(m,Ur.EventType.ERROR,(F=>{I||(I=!0,rr(at,`RPC '${e}' stream ${r} transport errored. Name:`,F.name,"Message:",F.message),P.a_(new J(D.UNAVAILABLE,"The operation could not be completed")))})),L(m,Ur.EventType.MESSAGE,(F=>{if(!I){const z=F.data[0];Ie(!!z,16349);const W=z,Q=W?.error||W[0]?.error;if(Q){K(at,`RPC '${e}' stream ${r} received error:`,Q);const G=Q.status;let he=(function(g){const y=Me[g];if(y!==void 0)return og(y)})(G),Se=Q.message;he===void 0&&(he=D.INTERNAL,Se="Unknown error status: "+G+" with message "+Q.message),I=!0,P.a_(new J(he,Se)),m.close()}else K(at,`RPC '${e}' stream ${r} received:`,z),P.u_(z)}})),L(c,Am.STAT_EVENT,(F=>{F.stat===Bc.PROXY?K(at,`RPC '${e}' stream ${r} detected buffering proxy`):F.stat===Bc.NOPROXY&&K(at,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{P.__()}),0),P}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Ec(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){return new AS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&K("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="PersistentStream";class Tg{constructor(e,n,s,r,i,a,c,l){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new vg(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===n&&this.G_(s,r)}),(s=>{e((()=>{const r=new J(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return K(td,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(K(td,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Tb extends Tg{constructor(e,n,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,a),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=RS(this.serializer,e),s=(function(i){if(!("targetChange"in i))return ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?Xt(a.readTime):ie.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Yc(this.serializer),n.addTarget=(function(i,a){let c;const l=a.target;if(c=Kc(l)?{documents:kS(i,l)}:{query:VS(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=lg(i,a.resumeToken);const h=Gc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ie.min())>0){c.readTime=Jo(i,a.snapshotVersion.toTimestamp());const h=Gc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const s=NS(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Yc(this.serializer),n.removeTarget=e,this.q_(n)}}class Ib extends Tg{constructor(e,n,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=PS(e.writeResults,e.commitTime),s=Xt(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Yc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>CS(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{}class Ab extends wb{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,Qc(n,s),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(D.UNKNOWN,i.toString())}))}Ho(e,n,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,Qc(n,s),r,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J(D.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Sb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Tn(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="RemoteStore";class bb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{s.enqueueAndForget((async()=>{ks(this)&&(K(Rs,"Restarting streams for network reachability change."),await(async function(l){const h=ce(l);h.Ea.add(4),await ki(h),h.Ra.set("Unknown"),h.Ea.delete(4),await ka(h)})(this))}))})),this.Ra=new Sb(s,r)}}async function ka(t){if(ks(t))for(const e of t.da)await e(!0)}async function ki(t){for(const e of t.da)await e(!1)}function Ig(t,e){const n=ce(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),nu(n)?tu(n):_r(n).O_()&&eu(n,e))}function Zl(t,e){const n=ce(t),s=_r(n);n.Ia.delete(e),s.O_()&&wg(n,e),n.Ia.size===0&&(s.O_()?s.L_():ks(n)&&n.Ra.set("Unknown"))}function eu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_r(t).Y_(e)}function wg(t,e){t.Va.Ue(e),_r(t).Z_(e)}function tu(t){t.Va=new vS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),_r(t).start(),t.Ra.ua()}function nu(t){return ks(t)&&!_r(t).x_()&&t.Ia.size>0}function ks(t){return ce(t).Ea.size===0}function Ag(t){t.Va=void 0}async function Rb(t){t.Ra.set("Online")}async function Cb(t){t.Ia.forEach(((e,n)=>{eu(t,e)}))}async function Pb(t,e){Ag(t),nu(t)?(t.Ra.ha(e),tu(t)):t.Ra.set("Unknown")}async function kb(t,e,n){if(t.Ra.set("Online"),e instanceof cg&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const c of i.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ia.delete(c),r.Va.removeTarget(c))})(t,e)}catch(s){K(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xo(t,s)}else if(e instanceof vo?t.Va.Ze(e):e instanceof ag?t.Va.st(e):t.Va.tt(e),!n.isEqual(ie.min()))try{const s=await Eg(t.localStore);n.compareTo(s)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(h);d&&i.Ia.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(st.EMPTY_BYTE_STRING,d.snapshotVersion)),wg(i,l);const m=new xn(d.target,l,h,d.sequenceNumber);eu(i,m)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(s){K(Rs,"Failed to raise snapshot:",s),await Xo(t,s)}}async function Xo(t,e,n){if(!gr(e))throw e;t.Ea.add(1),await ki(t),t.Ra.set("Offline"),n||(n=()=>Eg(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{K(Rs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ka(t)}))}function Sg(t,e){return e().catch((n=>Xo(t,n,e)))}async function Va(t){const e=ce(t),n=Zn(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ul;for(;Vb(e);)try{const r=await fb(e.localStore,s);if(r===null){e.Ta.length===0&&n.L_();break}s=r.batchId,Db(e,r)}catch(r){await Xo(e,r)}bg(e)&&Rg(e)}function Vb(t){return ks(t)&&t.Ta.length<10}function Db(t,e){t.Ta.push(e);const n=Zn(t);n.O_()&&n.X_&&n.ea(e.mutations)}function bg(t){return ks(t)&&!Zn(t).x_()&&t.Ta.length>0}function Rg(t){Zn(t).start()}async function Nb(t){Zn(t).ra()}async function Ob(t){const e=Zn(t);for(const n of t.Ta)e.ea(n.mutations)}async function Lb(t,e,n){const s=t.Ta.shift(),r=Kl.from(s,e,n);await Sg(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Va(t)}async function Mb(t,e){e&&Zn(t).X_&&await(async function(s,r){if((function(a){return _S(a)&&a!==D.ABORTED})(r.code)){const i=s.Ta.shift();Zn(s).B_(),await Sg(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Va(s)}})(t,e),bg(t)&&Rg(t)}async function nd(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),K(Rs,"RemoteStore received new credentials");const s=ks(n);n.Ea.add(3),await ki(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ka(n)}async function xb(t,e){const n=ce(t);e?(n.Ea.delete(2),await ka(n)):e||(n.Ea.add(2),await ki(n),n.Ra.set("Unknown"))}function _r(t){return t.ma||(t.ma=(function(n,s,r){const i=ce(n);return i.sa(),new Tb(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:Rb.bind(null,t),t_:Cb.bind(null,t),r_:Pb.bind(null,t),H_:kb.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),nu(t)?tu(t):t.Ra.set("Unknown")):(await t.ma.stop(),Ag(t))}))),t.ma}function Zn(t){return t.fa||(t.fa=(function(n,s,r){const i=ce(n);return i.sa(),new Ib(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:Nb.bind(null,t),r_:Mb.bind(null,t),ta:Ob.bind(null,t),na:Lb.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await Va(t)):(await t.fa.stop(),t.Ta.length>0&&(K(Rs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const a=Date.now()+s,c=new su(e,n,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ru(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),gr(t))return new J(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{static emptySet(e){return new Ys(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||X.comparator(n.key,s.key):(n,s)=>X.comparator(n.key,s.key),this.keyedMap=$r(),this.sortedSet=new Ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ys;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.ga=new Ne(X.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ne(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class lr{constructor(e,n,s,r,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,s,r,i){const a=[];return n.forEach((c=>{a.push({type:0,doc:c})})),new lr(e,n,Ys.emptySet(n),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Ub{constructor(){this.queries=rd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const r=ce(n),i=r.queries;r.queries=rd(),i.forEach(((a,c)=>{for(const l of c.Sa)l.onError(s)}))})(this,new J(D.ABORTED,"Firestore shutting down"))}}function rd(){return new Ps((t=>Gm(t)),Aa)}async function $b(t,e){const n=ce(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new Fb,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await n.onListen(r,!0);break;case 1:i.wa=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(a){const c=ru(a,`Initialization of query '${$s(e.query)}' failed`);return void e.onError(c)}n.queries.set(r,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&iu(n)}async function Bb(t,e){const n=ce(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function jb(t,e){const n=ce(t);let s=!1;for(const r of e){const i=r.query,a=n.queries.get(i);if(a){for(const c of a.Sa)c.Fa(r)&&(s=!0);a.wa=r}}s&&iu(n)}function Hb(t,e,n){const s=ce(t),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(n);s.queries.delete(e)}function iu(t){t.Ca.forEach((e=>{e.next()}))}var el,id;(id=el||(el={})).Ma="default",id.Cache="cache";class qb{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new lr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==el.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.key=e}}class Pg{constructor(e){this.key=e}}class zb{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=me(),this.mutatedKeys=me(),this.eu=Qm(e),this.tu=new Ys(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new sd,r=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=r,c=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((d,m)=>{const _=r.get(d),I=Sa(this.query,m)?m:null,P=!!_&&this.mutatedKeys.has(_.key),L=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let F=!1;_&&I?_.data.isEqual(I.data)?P!==L&&(s.track({type:3,doc:I}),F=!0):this.su(_,I)||(s.track({type:2,doc:I}),F=!0,(l&&this.eu(I,l)>0||h&&this.eu(I,h)<0)&&(c=!0)):!_&&I?(s.track({type:0,doc:I}),F=!0):_&&!I&&(s.track({type:1,doc:_}),F=!0,(l||h)&&(c=!0)),F&&(I?(a=a.add(I),i=L?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{tu:a,iu:s,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((d,m)=>(function(I,P){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{Rt:F})}};return L(I)-L(P)})(d.type,m.type)||this.eu(d.doc,m.doc))),this.ou(s),r=r??!1;const c=n&&!r?this._u():[],l=this.Xa.size===0&&this.current&&!r?1:0,h=l!==this.Za;return this.Za=l,a.length!==0||h?{snapshot:new lr(this.query,e.tu,i,a,e.mutatedKeys,l===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new sd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=me(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new Pg(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new Cg(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=me();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return lr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ou="SyncEngine";class Kb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Wb{constructor(e){this.key=e,this.hu=!1}}class Gb{constructor(e,n,s,r,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ps((c=>Gm(c)),Aa),this.Iu=new Map,this.Eu=new Set,this.du=new Ne(X.comparator),this.Au=new Map,this.Ru=new Ql,this.Vu={},this.mu=new Map,this.fu=cr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Qb(t,e,n=!0){const s=Lg(t);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await kg(s,e,n,!0),r}async function Jb(t,e){const n=Lg(t);await kg(n,e,!0,!1)}async function kg(t,e,n,s){const r=await db(t.localStore,Yt(e)),i=r.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return s&&(c=await Yb(t,e,i,a==="current",r.resumeToken)),t.isPrimaryClient&&n&&Ig(t.remoteStore,r),c}async function Yb(t,e,n,s,r){t.pu=(m,_,I)=>(async function(L,F,z,W){let Q=F.view.ru(z);Q.Cs&&(Q=await Yf(L.localStore,F.query,!1).then((({documents:S})=>F.view.ru(S,Q))));const G=W&&W.targetChanges.get(F.targetId),he=W&&W.targetMismatches.get(F.targetId)!=null,Se=F.view.applyChanges(Q,L.isPrimaryClient,G,he);return ad(L,F.targetId,Se.au),Se.snapshot})(t,m,_,I);const i=await Yf(t.localStore,e,!0),a=new zb(e,i.Qs),c=a.ru(i.documents),l=Pi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),h=a.applyChanges(c,t.isPrimaryClient,l);ad(t,n,h.au);const d=new Kb(e,n,a);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function Xb(t,e,n){const s=ce(t),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((a=>!Aa(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Xc(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Zl(s.remoteStore,r.targetId),tl(s,r.targetId)})).catch(mr)):(tl(s,r.targetId),await Xc(s.localStore,r.targetId,!0))}async function Zb(t,e){const n=ce(t),s=n.Tu.get(e),r=n.Iu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Zl(n.remoteStore,s.targetId))}async function eR(t,e,n){const s=aR(t);try{const r=await(function(a,c){const l=ce(a),h=ke.now(),d=c.reduce(((I,P)=>I.add(P.key)),me());let m,_;return l.persistence.runTransaction("Locally write mutations","readwrite",(I=>{let P=In(),L=me();return l.Ns.getEntries(I,d).next((F=>{P=F,P.forEach(((z,W)=>{W.isValidDocument()||(L=L.add(z))}))})).next((()=>l.localDocuments.getOverlayedDocuments(I,P))).next((F=>{m=F;const z=[];for(const W of c){const Q=fS(W,m.get(W.key).overlayedDocument);Q!=null&&z.push(new os(W.key,Q,$m(Q.value.mapValue),Ft.exists(!0)))}return l.mutationQueue.addMutationBatch(I,h,z,c)})).next((F=>{_=F;const z=F.applyToLocalDocumentSet(m,L);return l.documentOverlayCache.saveOverlays(I,F.batchId,z)}))})).then((()=>({batchId:_.batchId,changes:Ym(m)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,c,l){let h=a.Vu[a.currentUser.toKey()];h||(h=new Ne(pe)),h=h.insert(c,l),a.Vu[a.currentUser.toKey()]=h})(s,r.batchId,n),await Vi(s,r.changes),await Va(s.remoteStore)}catch(r){const i=ru(r,"Failed to persist write");n.reject(i)}}async function Vg(t,e){const n=ce(t);try{const s=await ub(n.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=n.Au.get(i);a&&(Ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?Ie(a.hu,14607):r.removedDocuments.size>0&&(Ie(a.hu,42227),a.hu=!1))})),await Vi(n,s,e)}catch(s){await mr(s)}}function od(t,e,n){const s=ce(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(a,c){const l=ce(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,m)=>{for(const _ of m.Sa)_.va(c)&&(h=!0)})),h&&iu(l)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tR(t,e,n){const s=ce(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Au.get(e),i=r&&r.key;if(i){let a=new Ne(X.comparator);a=a.insert(i,ht.newNoDocument(i,ie.min()));const c=me().add(i),l=new Ca(ie.min(),new Map,new Ne(pe),a,c);await Vg(s,l),s.du=s.du.remove(i),s.Au.delete(e),au(s)}else await Xc(s.localStore,e,!1).then((()=>tl(s,e,n))).catch(mr)}async function nR(t,e){const n=ce(t),s=e.batch.batchId;try{const r=await lb(n.localStore,e);Ng(n,s,null),Dg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Vi(n,r)}catch(r){await mr(r)}}async function sR(t,e,n){const s=ce(t);try{const r=await(function(a,c){const l=ce(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((m=>(Ie(m!==null,37113),d=m.keys(),l.mutationQueue.removeMutationBatch(h,m)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(s.localStore,e);Ng(s,e,n),Dg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Vi(s,r)}catch(r){await mr(r)}}function Dg(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Ng(t,e,n){const s=ce(t);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function tl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((s=>{t.Ru.containsKey(s)||Og(t,s)}))}function Og(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Zl(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),au(t))}function ad(t,e,n){for(const s of n)s instanceof Cg?(t.Ru.addReference(s.key,e),rR(t,s)):s instanceof Pg?(K(ou,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||Og(t,s.key)):ne(19791,{wu:s})}function rR(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(K(ou,"New document in limbo: "+n),t.Eu.add(s),au(t))}function au(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new X(Pe.fromString(e)),s=t.fu.next();t.Au.set(s,new Wb(n)),t.du=t.du.insert(n,s),Ig(t.remoteStore,new xn(Yt(Wm(n.path)),s,"TargetPurposeLimboResolution",va.ce))}}async function Vi(t,e,n){const s=ce(t),r=[],i=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,l)=>{a.push(s.pu(l,e,n).then((h=>{if((h||n)&&s.isPrimaryClient){const d=h?!h.fromCache:n?.targetChanges.get(l.targetId)?.current;s.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(h){r.push(h);const d=Yl.As(l.targetId,h);i.push(d)}})))})),await Promise.all(a),s.Pu.H_(r),await(async function(l,h){const d=ce(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>V.forEach(h,(_=>V.forEach(_.Es,(I=>d.persistence.referenceDelegate.addReference(m,_.targetId,I))).next((()=>V.forEach(_.ds,(I=>d.persistence.referenceDelegate.removeReference(m,_.targetId,I)))))))))}catch(m){if(!gr(m))throw m;K(Xl,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const I=d.Ms.get(_),P=I.snapshotVersion,L=I.withLastLimboFreeSnapshotVersion(P);d.Ms=d.Ms.insert(_,L)}}})(s.localStore,i))}async function iR(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){K(ou,"User change. New user:",e.toKey());const s=await yg(n.localStore,e);n.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new J(D.CANCELLED,a))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Vi(n,s.Ls)}}function oR(t,e){const n=ce(t),s=n.Au.get(e);if(s&&s.hu)return me().add(s.key);{let r=me();const i=n.Iu.get(e);if(!i)return r;for(const a of i){const c=n.Tu.get(a);r=r.unionWith(c.view.nu)}return r}}function Lg(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tR.bind(null,e),e.Pu.H_=jb.bind(null,e.eventManager),e.Pu.yu=Hb.bind(null,e.eventManager),e}function aR(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sR.bind(null,e),e}class Zo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return cb(this.persistence,new ib,e.initialUser,this.serializer)}Cu(e){return new _g(Jl.mi,this.serializer)}Du(e){return new mb}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zo.provider={build:()=>new Zo};class cR extends Zo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ie(this.persistence.referenceDelegate instanceof Yo,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new qS(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new _g((s=>Yo.mi(s,n)),this.serializer)}}class nl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>od(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=iR.bind(null,this.syncEngine),await xb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Ub})()}createDatastore(e){const n=Pa(e.databaseInfo.databaseId),s=(function(i){return new vb(i)})(e.databaseInfo);return(function(i,a,c,l){return new Ab(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,r,i,a,c){return new bb(s,r,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>od(this.syncEngine,n,0)),(function(){return ed.v()?new ed:new gb})())}createSyncEngine(e,n){return(function(r,i,a,c,l,h,d){const m=new Gb(r,i,a,c,l,h);return d&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=ce(n);K(Rs,"RemoteStore shutting down."),s.Ea.add(5),await ki(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}nl.provider={build:()=>new nl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="FirestoreClient";class uR{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=lt.UNAUTHENTICATED,this.clientId=xl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async a=>{K(es,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(K(es,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ru(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function vc(t,e){t.asyncQueue.verifyOperationInProgress(),K(es,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async r=>{s.isEqual(r)||(await yg(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function cd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hR(t);K(es,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>nd(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,r)=>nd(e.remoteStore,r))),t._onlineComponents=e}async function hR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(es,"Using user provided OfflineComponentProvider");try{await vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(r){return r.name==="FirebaseError"?r.code===D.FAILED_PRECONDITION||r.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(n))throw n;rr("Error using user provided cache. Falling back to memory cache: "+n),await vc(t,new Zo)}}else K(es,"Using default OfflineComponentProvider"),await vc(t,new cR(void 0));return t._offlineComponents}async function Mg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(es,"Using user provided OnlineComponentProvider"),await cd(t,t._uninitializedComponentsProvider._online)):(K(es,"Using default OnlineComponentProvider"),await cd(t,new nl))),t._onlineComponents}function fR(t){return Mg(t).then((e=>e.syncEngine))}async function dR(t){const e=await Mg(t),n=e.eventManager;return n.onListen=Qb.bind(null,e.syncEngine),n.onUnlisten=Xb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Jb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Zb.bind(null,e.syncEngine),n}function pR(t,e,n={}){const s=new zn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new lR({next:_=>{d.Nu(),a.enqueueAndForget((()=>Bb(i,m))),_.fromCache&&l.source==="server"?h.reject(new J(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new qb(c,d,{includeMetadataChanges:!0,qa:!0});return $b(i,m)})(await dR(t),t.asyncQueue,e,n,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="firestore.googleapis.com",ud=!0;class hd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fg,this.ssl=ud}else this.host=e.host,this.ssl=e.ssl??ud;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jS)throw new J(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xg(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new J(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new J(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new J(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Da{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new mA;switch(s.type){case"firstParty":return new EA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new J(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=ld.get(n);s&&(K("ComponentProvider","Removing Datastore"),ld.delete(n),s.terminate())})(this),Promise.resolve()}}function mR(t,e,n,s={}){t=bs(t,Da);const r=ur(e),i=t._getSettings(),a={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;r&&(Np(`https://${c}`),Op("Firestore",!0)),i.host!==Fg&&i.host!==c&&rr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:r,emulatorOptions:s};if(!Is(l,a)&&(t._setSettings(l),s.mockUserToken)){let h,d;if(typeof s.mockUserToken=="string")h=s.mockUserToken,d=lt.MOCK_USER;else{h=gv(s.mockUserToken,t._app?.options.projectId);const m=s.mockUserToken.sub||s.mockUserToken.user_id;if(!m)throw new J(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new lt(m)}t._authCredentials=new gA(new Cm(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Na(this.firestore,e,this._query)}}class Ke{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Ri(n,Ke._jsonSchema))return new Ke(e,s||null,new X(Pe.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:Ue("string",Ke._jsonSchemaVersion),referencePath:Ue("string")};class Kn extends Na{constructor(e,n,s){super(e,n,Wm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new X(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function fd(t,e,...n){if(t=nt(t),Pm("collection","path",e),t instanceof Da){const s=Pe.fromString(e,...n);return Sf(s),new Kn(t,null,s)}{if(!(t instanceof Ke||t instanceof Kn))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return Sf(s),new Kn(t.firestore,null,s)}}function sl(t,e,...n){if(t=nt(t),arguments.length===1&&(e=xl.newId()),Pm("doc","path",e),t instanceof Da){const s=Pe.fromString(e,...n);return Af(s),new Ke(t,null,new X(s))}{if(!(t instanceof Ke||t instanceof Kn))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return Af(s),new Ke(t.firestore,t instanceof Kn?t.converter:null,new X(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="AsyncQueue";class pd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vg(this,"async_queue_retry"),this._c=()=>{const s=Ec();s&&K(dd,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new zn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gr(e))throw e;K(dd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Tn("INTERNAL UNHANDLED ERROR: ",md(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=su.createAndSchedule(this,e,n,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&ne(47125,{Pc:md(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function md(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Di extends Da{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new pd,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pd(e),this._firestoreClient=void 0,await e}}}function gR(t,e){const n=typeof t=="object"?t:Fp(),s=typeof t=="string"?t:qo,r=bl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=pv("firestore");i&&mR(r,...i)}return r}function Ug(t){if(t._terminated)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_R(t),t._firestoreClient}function _R(t){const e=t._freezeSettings(),n=(function(r,i,a,c){return new MA(r,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,xg(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new uR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(st.fromBase64String(e))}catch(n){throw new J(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kt(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ri(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:Ue("string",kt._jsonSchemaVersion),bytes:Ue("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(e){if(Ri(e,Zt._jsonSchema))return new Zt(e.latitude,e.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:Ue("string",Zt._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:en._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ri(e,en._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new en(e.vectorValues);throw new J(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}en._jsonSchemaVersion="firestore/vectorValue/1.0",en._jsonSchema={type:Ue("string",en._jsonSchemaVersion),vectorValues:Ue("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=/^__.*__$/;class ER{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ci(e,this.data,n,this.fieldTransforms)}}class $g{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new os(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Bg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{Ac:t})}}class lu{constructor(e,n,s,r,i,a){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new lu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ea(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Bg(this.Ac)&&yR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class vR{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Pa(e)}Cc(e,n,s,r=!1){return new lu({Ac:e,methodName:n,Dc:s,path:et.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jg(t){const e=t._freezeSettings(),n=Pa(t._databaseId);return new vR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TR(t,e,n,s,r,i={}){const a=t.Cc(i.merge||i.mergeFields?2:0,e,n,r);uu("Data must be an object, but it was:",a,s);const c=Hg(s,a);let l,h;if(i.merge)l=new Rt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const _=rl(e,m,n);if(!a.contains(_))throw new J(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);zg(d,_)||d.push(_)}l=new Rt(d),h=a.fieldTransforms.filter((m=>l.covers(m.field)))}else l=null,h=a.fieldTransforms;return new ER(new It(c),l,h)}class La extends cu{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof La}}function IR(t,e,n,s){const r=t.Cc(1,e,n);uu("Data must be an object, but it was:",r,s);const i=[],a=It.empty();is(s,((l,h)=>{const d=hu(e,l,n);h=nt(h);const m=r.yc(d);if(h instanceof La)i.push(d);else{const _=Ma(h,m);_!=null&&(i.push(d),a.set(d,_))}}));const c=new Rt(i);return new $g(a,c,r.fieldTransforms)}function wR(t,e,n,s,r,i){const a=t.Cc(1,e,n),c=[rl(e,s,n)],l=[r];if(i.length%2!=0)throw new J(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(rl(e,i[_])),l.push(i[_+1]);const h=[],d=It.empty();for(let _=c.length-1;_>=0;--_)if(!zg(h,c[_])){const I=c[_];let P=l[_];P=nt(P);const L=a.yc(I);if(P instanceof La)h.push(I);else{const F=Ma(P,L);F!=null&&(h.push(I),d.set(I,F))}}const m=new Rt(h);return new $g(d,m,a.fieldTransforms)}function Ma(t,e){if(qg(t=nt(t)))return uu("Unsupported field value:",e,t),Hg(t,e);if(t instanceof cu)return(function(s,r){if(!Bg(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let a=0;for(const c of s){let l=Ma(c,r.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(t,e)}return(function(s,r){if((s=nt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return oS(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=ke.fromDate(s);return{timestampValue:Jo(r.serializer,i)}}if(s instanceof ke){const i=new ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Jo(r.serializer,i)}}if(s instanceof Zt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof kt)return{bytesValue:lg(r.serializer,s._byteString)};if(s instanceof Ke){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gl(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof en)return(function(a,c){return{mapValue:{fields:{[Fm]:{stringValue:Um},[zo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return ql(c.serializer,h)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${Fl(s)}`)})(t,e)}function Hg(t,e){const n={};return Dm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):is(t,((s,r)=>{const i=Ma(r,e.mc(s));i!=null&&(n[s]=i)})),{mapValue:{fields:n}}}function qg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Zt||t instanceof kt||t instanceof Ke||t instanceof cu||t instanceof en)}function uu(t,e,n){if(!qg(n)||!km(n)){const s=Fl(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function rl(t,e,n){if((e=nt(e))instanceof Oa)return e._internalPath;if(typeof e=="string")return hu(t,e);throw ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const AR=new RegExp("[~\\*/\\[\\]]");function hu(t,e,n){if(e.search(AR)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oa(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ea(t,e,n,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${s}`),a&&(l+=` in document ${r}`),l+=")"),new J(D.INVALID_ARGUMENT,c+t+l)}function zg(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SR extends Kg{data(){return super.data()}}function Wg(t,e){return typeof e=="string"?hu(t,e):e instanceof Oa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class RR{convertValue(e,n="none"){switch(Xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return is(e,((r,i)=>{s[r]=this.convertValue(i,n)})),s}convertVectorValue(e){const n=e.fields?.[zo].arrayValue?.values?.map((s=>Le(s.doubleValue)));return new en(n)}convertGeoPoint(e){return new Zt(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ia(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fi(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Pe.fromString(e);Ie(mg(s),9688,{name:e});const r=new di(s.get(1),s.get(3)),i=new X(s.popFirst(5));return r.isEqual(n)||Tn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(t,e,n){let s;return s=t?t.toFirestore(e):e,s}class io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xs extends Kg{constructor(e,n,s,r,i,a){super(e,n,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Wg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Xs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Xs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xs._jsonSchema={type:Ue("string",Xs._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class To extends Xs{data(e={}){return super.data(e)}}class Zs{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new io(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new To(this._firestore,this._userDataWriter,s.key,s,new io(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((c=>{const l=new To(r._firestore,r._userDataWriter,c.doc.key,c.doc,new io(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new To(r._firestore,r._userDataWriter,c.doc.key,c.doc,new io(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:PR(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function PR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:t})}}Zs._jsonSchemaVersion="firestore/querySnapshot/1.0",Zs._jsonSchema={type:Ue("string",Zs._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class kR extends RR{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function VR(t){t=bs(t,Na);const e=bs(t.firestore,Di),n=Ug(e),s=new kR(e);return bR(t._query),pR(n,t._query).then((r=>new Zs(e,s,t,r)))}function DR(t,e,n,...s){t=bs(t,Ke);const r=bs(t.firestore,Di),i=jg(r);let a;return a=typeof(e=nt(e))=="string"||e instanceof Oa?wR(i,"updateDoc",t._key,e,n,s):IR(i,"updateDoc",t._key,e),fu(r,[a.toMutation(t._key,Ft.exists(!0))])}function NR(t){return fu(bs(t.firestore,Di),[new zl(t._key,Ft.none())])}function OR(t,e){const n=bs(t.firestore,Di),s=sl(t),r=CR(t.converter,e);return fu(n,[TR(jg(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ft.exists(!1))]).then((()=>s))}function fu(t,e){return(function(s,r){const i=new zn;return s.asyncQueue.enqueueAndForget((async()=>eR(await fR(s),r,i))),i.promise})(Ug(t),e)}(function(e,n=!0){(function(r){pr=r})(hr),nr(new ws("firestore",((s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new Di(new _A(s.getProvider("auth-internal")),new vA(a,s.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(h.options.projectId,d)})(a,r),a);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),jn(vf,Tf,e),jn(vf,Tf,"esm2020")})();const LR={apiKey:"AIzaSyCp5a3QmjANQKN70X8HLHaxZuAxIXURA1Y",authDomain:"xuezi-5d65e.firebaseapp.com",projectId:"xuezi-5d65e",storageBucket:"xuezi-5d65e.firebasestorage.app",messagingSenderId:"793165221683",appId:"1:793165221683:web:f43b9d4cd337f359137846",measurementId:"G-YPS7JE6TC7"},Gg=xp(LR),oo=gR(Gg);vm(Gg);const du=rv("lesson",()=>{const t=Fe([]),e=Fe(null),n=Fe(!1),s=Fe(null),r=async()=>{n.value=!0,s.value=null;try{const h=await VR(fd(oo,"lessons"));console.log("✅ Lessons fetched:",h.docs.length),t.value=h.docs.map(d=>({id:d.id,...d.data()}))}catch(h){s.value="Erreur lors du chargement des leçons",console.error(h)}finally{n.value=!1}};return{lessons:t,currentLesson:e,isLoading:n,error:s,fetchLessons:r,fetchLessonById:async h=>{n.value=!0,s.value=null;try{await r();const d=t.value.find(m=>m.id===h);d&&(e.value=d)}catch(d){s.value="Erreur lors du chargement de la leçon",console.error(d)}finally{n.value=!1}},addLesson:async h=>{try{const d=await OR(fd(oo,"lessons"),h);return await r(),d.id}catch(d){return s.value="Erreur lors de l'ajout de la leçon",console.error(d),null}},updateLesson:async(h,d)=>{try{await DR(sl(oo,"lessons",h),d),await r()}catch(m){s.value="Erreur lors de la mise à jour de la leçon",console.error(m)}},deleteLesson:async h=>{try{await NR(sl(oo,"lessons",h)),await r()}catch(d){s.value="Erreur lors de la suppression de la leçon",console.error(d)}}}}),Qg=["HSK1","HSK2","HSK3","HSK4","HSK5","HSK6","HSK7","HSK8","HSK9"],MR=ns({name:"LessonSelector",emits:["load"],setup(t,{emit:e}){const n=du(),{fetchLessons:s}=n,{lessons:r}=iv(n),i=Fe(""),a=Fe("");Ei(()=>{r.value.length||s()});const c=Qg,l=Ti(()=>r.value.filter(d=>!i.value||d.level===i.value).sort((d,m)=>(d.title?.fr||d.title?.zh||"").localeCompare(m.title?.fr||m.title?.zh||"")));return{selectedLevel:i,selectedLessonId:a,levels:c,filteredLessons:l,onLoad:()=>{const d=r.value.find(m=>m.id===a.value);d&&e("load",d)}}}}),xR={class:"lesson-selector"},FR={class:"filter-bar"},UR=["value"],$R=["value"],BR=["disabled"];function jR(t,e,n,s,r,i){return oe(),fe("div",xR,[j("div",FR,[Ye(j("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.selectedLevel=a),class:"select"},[e[3]||(e[3]=j("option",{value:""},"Tous les niveaux",-1)),(oe(!0),fe(xe,null,Wt(t.levels,a=>(oe(),fe("option",{key:a,value:a},dt(a),9,UR))),128))],512),[[kc,t.selectedLevel]]),Ye(j("select",{"onUpdate:modelValue":e[1]||(e[1]=a=>t.selectedLessonId=a),class:"select"},[e[4]||(e[4]=j("option",{value:""},"-- Sélectionner une leçon --",-1)),(oe(!0),fe(xe,null,Wt(t.filteredLessons,a=>(oe(),fe("option",{key:a.id,value:a.id},dt(a.level)+" - "+dt(a.title?.fr||a.title?.zh||"Sans titre"),9,$R))),128))],512),[[kc,t.selectedLessonId]]),j("button",{onClick:e[2]||(e[2]=(...a)=>t.onLoad&&t.onLoad(...a)),disabled:!t.selectedLessonId,class:"btn-primary"}," Charger ",8,BR)])])}const Jg=rs(MR,[["render",jR],["__scopeId","data-v-bd0f0614"]]),HR=ns({name:"Questions",components:{HanziText:Ll},props:{questions:{type:Array,required:!0}},setup(t){const e=Fe([]),n=Fe([]);return{selected:e,showResult:n,selectOption:(r,i)=>{e.value[r]=i,n.value[r]=!0}}}}),qR={class:"questions"},zR={class:"options"},KR=["onClick"],WR={key:0,class:"result"},GR={key:0,class:"correct-text"},QR={key:1,class:"wrong-text"};function JR(t,e,n,s,r,i){const a=Kt("HanziText");return oe(),fe("div",qR,[(oe(!0),fe(xe,null,Wt(t.questions,(c,l)=>(oe(),fe("div",{key:l,class:"question"},[tt(a,{text:c.question,class:"question-text","show-audio-button":!0},null,8,["text"]),j("div",zR,[(oe(!0),fe(xe,null,Wt(c.options,(h,d)=>(oe(),fe("button",{key:d,class:er(["option",{selected:t.selected[l]===d,correct:t.showResult[l]&&d+1===c.answer,wrong:t.showResult[l]&&t.selected[l]===d&&d+1!==c.answer}]),onClick:m=>t.selectOption(l,d)},[tt(a,{text:h,"show-audio-button":!0},null,8,["text"])],10,KR))),128))]),t.showResult[l]?(oe(),fe("div",WR,[t.selected[l]+1===c.answer?(oe(),fe("span",GR,"✅ Bonne réponse !")):(oe(),fe("span",QR,"❌ Mauvaise réponse. La bonne réponse était : "+dt(c.options[c.answer-1]),1))])):Un("",!0)]))),128))])}const YR=rs(HR,[["render",JR],["__scopeId","data-v-75bc716b"]]),XR=ns({name:"StudentView",components:{LessonSelector:Jg,HanziText:Ll,Glossary:fA,Questions:YR},setup(){const t=du(),{currentLesson:e,isLoading:n,error:s,fetchLessons:r,fetchLessonById:i}=t,a=Fe();return Ei(()=>{r()}),{loadedLesson:a,isLoading:n,error:s,loadLesson:l=>{a.value=l}}}}),ZR={class:"student-view"},eC={key:0,class:"loading"},tC={key:1,class:"error"},nC={key:2,class:"lesson-content"},sC={class:"level-badge"},rC={class:"glossary-section"},iC={class:"questions-section"},oC={key:3};function aC(t,e,n,s,r,i){const a=Kt("LessonSelector"),c=Kt("HanziText"),l=Kt("Glossary"),h=Kt("Questions");return oe(),fe("div",ZR,[tt(a,{onLoad:t.loadLesson},null,8,["onLoad"]),t.isLoading?(oe(),fe("div",eC,"Chargement en cours...")):Un("",!0),t.error?(oe(),fe("div",tC,dt(t.error),1)):Un("",!0),t.loadedLesson?(oe(),fe("div",nC,[j("h2",null,dt(t.loadedLesson.title?.fr),1),j("div",sC,dt(t.loadedLesson.level),1),tt(c,{text:t.loadedLesson.text,showAudioButton:!0,buttonText:"Lire le texte entier"},null,8,["text"]),j("div",rC,[e[0]||(e[0]=j("h3",null,"Glossaire",-1)),tt(l,{items:t.loadedLesson.glossary},null,8,["items"])]),j("div",iC,[tt(h,{questions:t.loadedLesson.questions},null,8,["questions"])])])):!t.isLoading&&!t.error?(oe(),fe("div",oC,[...e[1]||(e[1]=[j("p",null,"Sélectionnez une leçon pour commencer.",-1)])])):Un("",!0)])}const cC=rs(XR,[["render",aC],["__scopeId","data-v-eb6f0531"]]),lC=ns({name:"LessonEditor",props:{lesson:{type:Object,required:!0}},emits:["save","cancel"],setup(t,{emit:e}){const n=Fe(!t.lesson.id),s=Fe({...t.lesson,title:t.lesson.title||{zh:"",fr:"",en:"",es:""},glossary:t.lesson.glossary||[],questions:t.lesson.questions||[]});return{isNewLesson:n,editingLesson:s,addGlossaryItem:()=>{s.value.glossary.push({word:"",pinyin:"",translation:{fr:"",en:"",es:""}})},removeGlossaryItem:I=>{s.value.glossary.splice(I,1)},addQuestion:()=>{s.value.questions.push({question:"",options:["",""],answer:1})},removeQuestion:I=>{s.value.questions.splice(I,1)},addOption:I=>{s.value.questions[I].options.push("")},removeOption:(I,P)=>{s.value.questions[I].options.splice(P,1),s.value.questions[I].answer===P+1&&(s.value.questions[I].answer=1)},setCorrectAnswer:(I,P)=>{s.value.questions[I].answer=P+1},saveLesson:()=>{if(!s.value.title.zh.trim()||!s.value.title.fr.trim()){alert("Les titres en chinois et en français sont obligatoires");return}if(!s.value.text.trim()){alert("Le texte de la leçon est obligatoire");return}for(const I of s.value.questions){if(I.options.length<2){alert("Chaque question doit avoir au moins 2 options");return}if(I.answer<1||I.answer>I.options.length){alert("La bonne réponse doit être valide");return}}e("save",{...s.value})},cancelEdit:()=>{e("cancel")},levels:Qg}}}),uC={class:"lesson-editor"},hC={class:"editor-header"},fC={class:"editor-actions"},dC={class:"editor-section"},pC={class:"form-group"},mC={class:"form-group"},gC={class:"form-group"},_C={class:"form-group"},yC={class:"form-group"},EC=["value"],vC={class:"form-group"},TC={class:"editor-section"},IC={class:"glossary-list"},wC={class:"glossary-fields"},AC=["onUpdate:modelValue"],SC=["onUpdate:modelValue"],bC={class:"translation-group"},RC=["onUpdate:modelValue"],CC=["onUpdate:modelValue"],PC=["onUpdate:modelValue"],kC=["onClick"],VC={class:"editor-section"},DC={class:"questions-list"},NC={class:"question-header"},OC=["onUpdate:modelValue"],LC=["onClick"],MC={class:"options-list"},xC={class:"option-content"},FC=["onUpdate:modelValue"],UC={key:0,class:"correct-mark"},$C=["onClick"],BC=["onClick"],jC=["onClick"];function HC(t,e,n,s,r,i){return oe(),fe("div",uC,[j("div",hC,[j("h2",null,dt(t.isNewLesson?"Nouvelle leçon":"Éditer la leçon"),1),j("div",fC,[j("button",{onClick:e[0]||(e[0]=(...a)=>t.saveLesson&&t.saveLesson(...a)),class:"btn-save"},"Enregistrer"),j("button",{onClick:e[1]||(e[1]=(...a)=>t.cancelEdit&&t.cancelEdit(...a)),class:"btn-cancel"},"Annuler")])]),j("div",dC,[e[16]||(e[16]=j("h3",null,"Informations de base",-1)),j("div",pC,[e[10]||(e[10]=j("label",null,"Titre (Chinois)",-1)),Ye(j("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>t.editingLesson.title.zh=a),type:"text",placeholder:"Titre en chinois"},null,512),[[vt,t.editingLesson.title.zh]])]),j("div",mC,[e[11]||(e[11]=j("label",null,"Titre (Français)",-1)),Ye(j("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>t.editingLesson.title.fr=a),type:"text",placeholder:"Titre en français"},null,512),[[vt,t.editingLesson.title.fr]])]),j("div",gC,[e[12]||(e[12]=j("label",null,"Titre (Anglais)",-1)),Ye(j("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>t.editingLesson.title.en=a),type:"text",placeholder:"Titre en anglais"},null,512),[[vt,t.editingLesson.title.en]])]),j("div",_C,[e[13]||(e[13]=j("label",null,"Titre (Espagnol)",-1)),Ye(j("input",{"onUpdate:modelValue":e[5]||(e[5]=a=>t.editingLesson.title.es=a),type:"text",placeholder:"Titre en espagnol"},null,512),[[vt,t.editingLesson.title.es]])]),j("div",yC,[e[14]||(e[14]=j("label",null,"Niveau",-1)),Ye(j("select",{"onUpdate:modelValue":e[6]||(e[6]=a=>t.editingLesson.level=a)},[(oe(!0),fe(xe,null,Wt(t.levels,a=>(oe(),fe("option",{key:a,value:a},dt(a),9,EC))),128))],512),[[kc,t.editingLesson.level]])]),j("div",vC,[e[15]||(e[15]=j("label",null,"Texte de la leçon",-1)),Ye(j("textarea",{"onUpdate:modelValue":e[7]||(e[7]=a=>t.editingLesson.text=a),rows:"6",placeholder:"Texte chinois ici..."},null,512),[[vt,t.editingLesson.text]])])]),j("div",TC,[e[17]||(e[17]=j("h3",null,"Glossaire",-1)),j("div",IC,[(oe(!0),fe(xe,null,Wt(t.editingLesson.glossary,(a,c)=>(oe(),fe("div",{key:c,class:"glossary-item"},[j("div",wC,[Ye(j("input",{"onUpdate:modelValue":l=>a.word=l,placeholder:"Caractère chinois",class:"word-input"},null,8,AC),[[vt,a.word]]),Ye(j("input",{"onUpdate:modelValue":l=>a.pinyin=l,placeholder:"Pinyin",class:"pinyin-input"},null,8,SC),[[vt,a.pinyin]]),j("div",bC,[Ye(j("input",{"onUpdate:modelValue":l=>a.translation.fr=l,placeholder:"Français",class:"translation-input"},null,8,RC),[[vt,a.translation.fr]]),Ye(j("input",{"onUpdate:modelValue":l=>a.translation.en=l,placeholder:"Anglais",class:"translation-input"},null,8,CC),[[vt,a.translation.en]]),Ye(j("input",{"onUpdate:modelValue":l=>a.translation.es=l,placeholder:"Espagnol",class:"translation-input"},null,8,PC),[[vt,a.translation.es]])])]),j("button",{onClick:l=>t.removeGlossaryItem(c),class:"btn-remove"},"×",8,kC)]))),128))]),j("button",{onClick:e[8]||(e[8]=(...a)=>t.addGlossaryItem&&t.addGlossaryItem(...a)),class:"btn-add"},"+ Ajouter un terme")]),j("div",VC,[e[18]||(e[18]=j("h3",null,"Questions",-1)),j("div",DC,[(oe(!0),fe(xe,null,Wt(t.editingLesson.questions,(a,c)=>(oe(),fe("div",{key:c,class:"question-item"},[j("div",NC,[Ye(j("input",{"onUpdate:modelValue":l=>a.question=l,type:"text",placeholder:"Question...",class:"question-input"},null,8,OC),[[vt,a.question]]),j("button",{onClick:l=>t.removeQuestion(c),class:"btn-remove"},"×",8,LC)]),j("div",MC,[(oe(!0),fe(xe,null,Wt(a.options,(l,h)=>(oe(),fe("div",{key:h,class:"option-item"},[j("div",xC,[Ye(j("input",{"onUpdate:modelValue":d=>a.options[h]=d,type:"text",placeholder:"Option..."},null,8,FC),[[vt,a.options[h]]]),a.answer===h+1?(oe(),fe("span",UC,"✓")):Un("",!0)]),j("button",{onClick:d=>t.removeOption(c,h),class:"btn-remove-small"},"×",8,$C),j("button",{onClick:d=>t.setCorrectAnswer(c,h),class:"btn-correct"},dt(a.answer===h+1?"Bonne réponse":"Définir comme bonne"),9,BC)]))),128)),j("button",{onClick:l=>t.addOption(c),class:"btn-add-small"},"+ Ajouter une option",8,jC)])]))),128))]),j("button",{onClick:e[9]||(e[9]=(...a)=>t.addQuestion&&t.addQuestion(...a)),class:"btn-add"},"+ Ajouter une question")])])}const qC=rs(lC,[["render",HC],["__scopeId","data-v-9700b750"]]),zC=ns({name:"TeacherView",components:{LessonSelector:Jg,LessonEditor:qC},setup(){const t=du(),{fetchLessons:e,addLesson:n,updateLesson:s,deleteLesson:r}=t,i=Fe(null),a=Fe(""),c=Fe(null);return Ei(()=>{e()}),{editingLesson:i,newLesson:()=>{i.value={title:{zh:"",fr:"",en:"",es:""},level:"",text:"",questions:[],glossary:[]}},editLesson:I=>{i.value=JSON.parse(JSON.stringify(I)),a.value=I.id||""},saveLesson:async I=>{try{if(I.id){const{id:P,...L}=I;await s(P,L)}else await n(I);i.value=null}catch(P){console.error("Erreur lors de l'enregistrement :",P)}},cancelEdit:()=>{i.value=null},deleteLessonConfirmed:async()=>{a.value&&(await r(a.value),a.value="",i.value?.id===a.value&&(i.value=null))},selectedLessonId:a,selectorRef:c}}}),KC={class:"teacher-view"},WC={class:"actions"},GC=["disabled"];function QC(t,e,n,s,r,i){const a=Kt("LessonSelector"),c=Kt("LessonEditor");return oe(),fe("div",KC,[e[2]||(e[2]=j("h2",null,"Gestion des leçons",-1)),tt(a,{onLoad:t.editLesson,ref:"selectorRef"},null,8,["onLoad"]),j("div",WC,[j("button",{onClick:e[0]||(e[0]=(...l)=>t.newLesson&&t.newLesson(...l)),class:"btn-primary"},"Nouvelle leçon"),j("button",{onClick:e[1]||(e[1]=(...l)=>t.deleteLessonConfirmed&&t.deleteLessonConfirmed(...l)),class:"btn-danger",disabled:!t.selectedLessonId}," Supprimer ",8,GC)]),t.editingLesson?(oe(),ko(c,{key:0,lesson:t.editingLesson,onSave:t.saveLesson,onCancel:t.cancelEdit},null,8,["lesson","onSave","onCancel"])):Un("",!0)])}const JC=rs(zC,[["render",QC],["__scopeId","data-v-17ee7f53"]]),YC=ns({name:"App",components:{StudentView:cC,TeacherView:JC},setup(){const t=Fe(null),e=Fe(""),n=Fe(""),s=vm();return Ei(()=>{HI(s,a=>{t.value=a})}),{user:t,email:e,password:n,login:async()=>{try{const a=await $I(s,e.value,n.value);t.value=a.user}catch(a){console.error("Erreur de connexion:",a),alert("Email ou mot de passe incorrect")}},logout:async()=>{try{await qI(s),t.value=null,e.value="",n.value=""}catch(a){console.error("Erreur de déconnexion:",a)}}}}}),XC={id:"app"},ZC={class:"app-header"},eP={class:"user-info"},tP={key:0},nP={key:1};function sP(t,e,n,s,r,i){const a=Kt("StudentView"),c=Kt("TeacherView");return oe(),fe("div",XC,[j("header",ZC,[e[5]||(e[5]=j("h1",null,"Pratique lecture chinois",-1)),j("div",eP,[t.user?(oe(),fe("div",tP,[Vo(" Connecté en tant que: "+dt(t.user.email)+" ",1),j("button",{onClick:e[0]||(e[0]=(...l)=>t.logout&&t.logout(...l)),class:"btn-logout"},"Déconnexion")])):(oe(),fe("div",nP,[j("form",{onSubmit:e[3]||(e[3]=Mr((...l)=>t.login&&t.login(...l),["prevent"])),class:"login-form"},[Ye(j("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.email=l),type:"email",placeholder:"Email",required:""},null,512),[[vt,t.email]]),Ye(j("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>t.password=l),type:"password",placeholder:"Mot de passe",required:""},null,512),[[vt,t.password]]),e[4]||(e[4]=j("button",{type:"submit",class:"btn-login"},"Connexion professeur",-1))],32)]))])]),j("main",null,[t.user?(oe(),ko(c,{key:1})):(oe(),ko(a,{key:0}))])])}const rP=rs(YC,[["render",sP]]),Yg=QE(rP),iP=XE();Yg.use(iP);Yg.mount("#app");
