(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{92:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(7),i=(n(92),function(e){var t=[];for(var n in e.ingredient)t.push({name:n,amount:e.ingredient[n]});var r=t.map(function(e){return o.a.createElement("span",{key:e.name},e.name,"  (",e.amount,")")});return o.a.createElement("div",{className:"Order"},o.a.createElement("p",null,"Ingredietns: ",r," "),o.a.createElement("p",null,"Price ",o.a.createElement("strong",null,e.price)))}),c=n(10),a=n(26),p=n(8);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,y(t).apply(this,arguments))}var n,u,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),n=t,(u=[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){return o.a.createElement("div",null,this.props.orde.map(function(e){return o.a.createElement(i,{key:e.id,ingredient:e.ingredient,price:e.price})}))}}])&&l(n.prototype,u),c&&l(n,c),t}();t.default=Object(u.b)(function(e){return{orde:e.orderReducer.order,token:e.authReducer.token,userId:e.authReducer.userId}},function(e){return{onFetchOrders:function(t,n){return e(p.e(t,n))}}})(Object(a.a)(b,c.a))}}]);
//# sourceMappingURL=3.bundle.js.map