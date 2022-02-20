!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/dark-mode/schedule"]=t():e["style/dark-mode/schedule"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{component:function(){return u}});var i=coreApis.lifeCycle,n=coreApis.settings;function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class o{constructor(...e){if(r(this,"hour",void 0),r(this,"minute",void 0),0===e.length){const e=new Date;this.hour=e.getHours(),this.minute=e.getMinutes()}else if(1===e.length){const[t]=e;[this.hour,this.minute]=t.split(":").slice(0,2).map((e=>o.validatePart(e))),this.normalize()}else 2===e.length&&([this.hour,this.minute]=e)}normalize(){for(;this.minute<0;)this.minute+=60,this.hour-=1;for(;this.minute>=60;)this.minute-=60,this.hour+=1;for(;this.hour<0;)this.hour+=24;for(;this.hour>=24;)this.hour-=24}lessThan(e){return this.hour<e.hour||this.hour===e.hour&&this.minute<e.minute}greaterThan(e){return this.hour>e.hour||this.hour===e.hour&&this.minute>e.minute}equals(e){return this.hour===e.hour&&this.minute===e.minute}isInRange(e,t){if(e.equals(t))return!1;let i=this.greaterThan(e)&&this.lessThan(t);e.greaterThan(t)&&(i=this.greaterThan(e)||this.lessThan(t));return i||this.equals(e)}toString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}`}static validatePart(e){const t=parseInt(e);return!Number.isNaN(t)&&t>=0&&t<=59?t:null}static millisecondsBefore(e){const t=new o,i=(new Date).getSeconds(),n=1e3*(3600*t.hour+60*t.minute+i);let r=1e3*(3600*e.hour+60*e.minute)-n;return(t.greaterThan(e)||t.equals(e)&&0!==i)&&(r+=864e5),r}}const s=e=>{const t=new o(e.options.range.start),i=new o(e.options.range.end),r=(new o).isInRange(t,i),u=(0,n.getComponentSettings)("darkMode");u.enabled!==r&&(u.enabled=r);let l=0;l=r?o.millisecondsBefore(i):o.millisecondsBefore(t),0!==l&&setTimeout((()=>s(e)),l)},u={name:"darkModeSchedule",displayName:"夜间模式计划时段",description:"设置一个使用夜间模式的时间段, 进入 / 离开此时间段时, 会自动开启 / 关闭夜间模式. 结束时间小于起始时间时将视为次日, 如 `18:00` 至 `6:00` 表示晚上 18:00 到次日 6:00. 请勿和 `夜间模式跟随系统` 一同使用.",tags:[componentsTags.style,componentsTags.general],entry:({settings:e})=>(0,i.fullyLoaded)((()=>s(e))),urlExclude:["//member.bilibili.com/v2","//member.bilibili.com/video/upload.html","//member.bilibili.com/article-text/home","//www.bilibili.com/audio/submit/","//member.bilibili.com/studio/bs-editor/projects","//www.bilibili.com/s/video/","//member.bilibili.com/platform","//live.bilibili.com/p/html/live-lottery/anchor-join.html","//account.bilibili.com/subtitle/edit/#/editor","/york/allowance-charge","//cm.bilibili.com/quests/#/task"],options:{range:{defaultValue:{start:"18:00",end:"6:00"},displayName:"时间段",validator:e=>{const{start:t,end:i}=e,n=/^(\d{1,2}):(\d{1,2})$/;if(!n.test(t)||!n.test(i))return null;const r=new o(e.start),s=new o(e.end);return{start:r.toString(),end:s.toString()}}}},commitHash:"48b11bd02c1ca8de8fc6f30714a41779cbba12f3",coreVersion:"2.1.5"};return t=t.component}()}));