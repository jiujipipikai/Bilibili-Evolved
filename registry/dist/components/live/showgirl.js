!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/showgirl"]=t():e["live/showgirl"]=t()}(self,(function(){return function(){"use strict";var e,t,n={163:function(e){e.exports=coreApis.style}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){c[e]=function(){return n[e]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){r.d(i,{component:function(){return o}});var e=coreApis.utils.urls;const t="dpi-live-showgirl",n=async()=>{const{addStyle:e}=await Promise.resolve().then(r.t.bind(r,163,23));null===document.getElementById(t)&&e(`\n      .haruna-ctnr,\n      .avatar-btn\n      {\n        transform: scale(${1/window.devicePixelRatio}) !important;\n      }\n    `,t)},o={name:"dpiLiveShowgirl",displayName:"直播看板娘高 DPI 适配",enabledByDefault:window.devicePixelRatio>1,description:{"zh-CN":"根据屏幕 DPI 缩放直播看板娘的大小, 避免像素锯齿."},tags:[componentsTags.live,componentsTags.style],entry:n,reload:n,unload:()=>{document.getElementById(t)?.remove()},urlInclude:e.liveUrls,commitHash:"d59d406e414cc2a6837f53f2463c7790c8ed2231",coreVersion:"2.1.8"}}(),i=i.component}()}));