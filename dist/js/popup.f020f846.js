(function(t){function e(e){for(var r,o,c=e[0],u=e[1],i=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,i||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],r=!0,c=1;c<s.length;c++){var u=s[c];0!==n[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},n={popup:0},a=[];function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(s,r,function(e){return t[e]}.bind(null,r));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=u;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("0a3d")},"07b1":function(t,e,s){},"0a3d":function(t,e,s){"use strict";s.r(e);var r=s("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",[t.message?e("div",[e("Message",{attrs:{message:t.message}})],1):t._e(),t.basket?e("div",{staticClass:"container"},t._l(t.basket.entries,(function(t){return e("Product",{key:t.sku,staticClass:"container__product",attrs:{product:t}})})),1):t._e(),t.basket?e("div",{staticClass:"total-sum"},[t._v("Total sum: "+t._s(t.basket.totalSum))]):t._e()])},a=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product"},[e("img",{staticClass:"product__photo",attrs:{src:t.product.photo,alt:t.product.name}}),e("div",{staticClass:"product__details"},[e("div",{staticClass:"product__name"},[t._v(t._s(t.product.name))]),e("div",{staticClass:"product__details-inner"},[e("div",{staticClass:"product__quantity-container"},[e("div",{staticClass:"product__sku"},[t._v("sku: "+t._s(t.product.sku))]),e("div",{staticClass:"product__quantity"},[t._v("Quantity: "+t._s(t.product.quantity))])]),e("div",{staticClass:"product__price-container"},[e("div",{staticClass:"product__price"},[t._v("Price: "+t._s(t.product.price))]),e("div",{staticClass:"product__total-price"},[t._v(" Total price: "+t._s(t.product.totalPrice)+" ")])])])])])},c=[],u={name:"Product",props:["product"]},i=u,l=(s("405a"),s("2877")),p=Object(l["a"])(i,o,c,!1,null,"248965f6",null),d=p.exports,f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"message"},[t._v(t._s(t.message))])},_=[],v={name:"Message",props:["message"]},b=v,g=(s("0d2c"),Object(l["a"])(b,f,_,!1,null,"2e7132f3",null)),m=g.exports,h={name:"App",components:{Product:d,Message:m},data:()=>({message:null,basket:null}),methods:{getBasket(t){this.message=t.message,this.basket=t.basket}},created(){chrome.extension.sendMessage("getBasket",this.getBasket)}},y=h,k=(s("2801"),Object(l["a"])(y,n,a,!1,null,null,null)),C=k.exports;new r["a"]({el:"#app",render:t=>t(C)})},"0d2c":function(t,e,s){"use strict";s("7b26")},2801:function(t,e,s){"use strict";s("07b1")},"405a":function(t,e,s){"use strict";s("56fb")},"56fb":function(t,e,s){},"7b26":function(t,e,s){}});
//# sourceMappingURL=popup.f020f846.js.map