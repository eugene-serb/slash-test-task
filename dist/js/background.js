(function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=1)})({1:function(e,t,r){e.exports=r("ac28")},ac28:function(e,t,r){"use strict";r.r(t);const o={merchantId:"eugene.serb",domain:"https://eugene-serb.github.io/",rules:{mode:"custom",url:"https://eugene-serb.github.io/"}};var n=o;const s={merchantId:"newlook",domain:"https://www.newlook.com/uk/",rules:{mode:"json",url:"https://www.newlook.com/uk/json/cart/currentCart.json",totalSum:["data","totalPriceWithTax","value"],list:["data","entries"],good:{sku:["product","sku"],name:["product","name"],price:["basePrice","value"],totalPrice:["totalPrice","value"],quantity:["quantity"],photo:["product","imageUrl"]}}};var u=s;const c={merchantId:"converse",domain:"https://www.converse.com/uk",rules:{mode:"html",url:"https://www.converse.com/uk/en/cart",totalPrice:".order-totals__highlight > .value--highlight",list:".cart__items",good:{self:".cart__item",sku:".product-mini__sku > span.value",name:".product-mini__name > a",price:".product-price--sales",totalPrice:".product-price--sales",quantity:".cart__item-qty > select > option[selected]",photo:".product-mini__image-url > img"}}};var a=c;const i=[n,u,a];var l=i;const h=async()=>new Promise((e,t)=>{chrome.tabs.query({active:!0,currentWindow:!0},async r=>{const[o]=r;o||t(null),e(o.url)})});var d=h;class p{constructor(e,t){this.entries=e,this.totalSum=t}}var m=p;class g{constructor(e,t,r,o,n,s){this.sku=e,this.name=t,this.price=r,this.totalPrice=o,this.quantity=n,this.photo=s}}var f=g;async function y(e){let t=0;const r=[];return await fetch(e.rules.url).then(e=>e.text()).then(e=>{const t=new DOMParser,r=t.parseFromString(e,"text/html");return r}).then(r=>{const o=r.querySelector(e.rules.list);return t=r.querySelector(e.rules.totalPrice).innerText.toString().slice(1),o}).then(t=>{const r=t.querySelectorAll(e.rules.good.self);return r}).then(t=>{t.forEach(t=>{r.push(new f(t.querySelector(e.rules.good.sku).innerText,t.querySelector(e.rules.good.name).innerText,t.querySelector(e.rules.good.price).innerText.toString().slice(1),t.querySelector(e.rules.good.totalPrice).innerText.toString().slice(1),+t.querySelector(e.rules.good.quantity).innerText,t.querySelector(e.rules.good.photo).src))})}).catch(e=>{console.error(e)}),new m(r,t)}var v=y;function w(e,t){let r=e;return t.forEach(e=>{r=JSON.parse(JSON.stringify(r[e]))}),r}var b=w;async function S(e){let t=0;const r=[];return await fetch(e.rules.url).then(e=>e.json()).then(r=>(t=b(r,e.rules.totalSum),b(r,e.rules.list))).then(t=>{t.forEach(t=>{r.push(new f(b(t,e.rules.good.sku),b(t,e.rules.good.name),b(t,e.rules.good.price),b(t,e.rules.good.totalPrice),b(t,e.rules.good.quantity),"https:"+b(t,e.rules.good.photo)))})}).catch(e=>{console.error(e)}),new m(r,t)}var _=S;async function k(e){let t=1337;const r=[];return r.push(new f(1,"Custom Good at "+e.merchantId,1337,1337,1,"https://eugene-serb.github.io/img/apple-touch-icon.png")),new m(r,t)}var q=k;const P={html:v,json:_,custom:q};function x(e){let t=null;return Object.keys(P).forEach(r=>{e==r&&(t=P[r])}),t}var j=x;async function O(e){let t={};const r=j(e.rules.mode);return t=await r(e),t}var T=O;const M=async()=>{const e=await d(),t=l.find(t=>e.includes(t.domain));if(!t)return{message:"Этот сайт не является партнером приложения"};const r=await T(t),o={};return r.entries.length?o.basket=r:o.message="Корзина пуста",o};var E=M;chrome.extension.onMessage.addListener(async(e,t,r)=>{if("getBasket"===e){const e=await E();r(e)}return!0})}});
//# sourceMappingURL=background.js.map