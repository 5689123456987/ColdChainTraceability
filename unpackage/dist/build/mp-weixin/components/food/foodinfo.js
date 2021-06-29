(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/food/foodinfo"],{"2c9a":function(n,t,o){"use strict";o.r(t);var e=o("8a21"),u=o.n(e);for(var c in e)"default"!==c&&function(n){o.d(t,n,(function(){return e[n]}))}(c);t["default"]=u.a},6183:function(n,t,o){},"63cf":function(n,t,o){"use strict";var e;o.d(t,"b",(function(){return u})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){return e}));var u=function(){var n=this,t=n.$createElement;n._self._c},c=[]},"8a21":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;e(o("358f"));function e(n){return n&&n.__esModule?n:{default:n}}var u={name:"foodinfo",data:function(){return{food:[]}},onShow:function(){console.log("show")},created:function(){var t=this;console.log("发送请求");for(var o=1;o<4;o++)n.request({url:"https://shencongqian.com/foodinformation/getInfo?FoodId=".concat(o),data:{text:"uni.request"},success:function(n){console.log(n.data),t.food.push(n.data),t.text="request success"}})},onLoad:function(){},components:{},methods:{}};t.default=u}).call(this,o("543d")["default"])},c993:function(n,t,o){"use strict";o.r(t);var e=o("63cf"),u=o("2c9a");for(var c in u)"default"!==c&&function(n){o.d(t,n,(function(){return u[n]}))}(c);o("f543");var a,f=o("f0c5"),r=Object(f["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],a);t["default"]=r.exports},f543:function(n,t,o){"use strict";var e=o("6183"),u=o.n(e);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/food/foodinfo-create-component',
    {
        'components/food/foodinfo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c993"))
        })
    },
    [['components/food/foodinfo-create-component']]
]);
