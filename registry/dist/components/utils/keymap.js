!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["utils/keymap"]=n():e["utils/keymap"]=n()}(self,(function(){return function(){var e,n,t={307:function(e,n,t){"use strict";t.d(n,{Nw:function(){return u},vN:function(){return l},$j:function(){return s},kW:function(){return d}});var i=coreApis.componentApis.video.playerAgent,r=t(407),o=t(269);const s=(e,n)=>{const{event:t}=n,i=new MouseEvent("click",{...lodash.pick(t,"ctrlKey","shiftKey","altKey","metaKey")});if("string"==typeof e){const n=dq(e);if(!n)return!1;n.dispatchEvent(i)}else{if(!e)return!1;e.dispatchEvent(i)}return!0},a=e=>n=>s(e,n),l=e=>()=>i.playerAgent.changeTime("number"==typeof e?e:e());let c;const d=async(e,n)=>{let t=dq(".keymap-tip");if(!t){const r=await i.playerAgent.query.playerArea();if(!r)return;r.insertAdjacentHTML("afterbegin",`\n      <div class="keymap-tip-container">\n        <i class="keymap-tip-icon mdi ${n}"></i>\n        <div class="keymap-tip">${e}</div>\n      </div>\n    `),t=dq(".keymap-tip")}t.innerHTML=e;const r=dq(".keymap-tip-container"),o=dq(r,".mdi");o.classList.remove(...o.classList.values()),o.classList.add("mdi",n),c&&clearTimeout(c),r.classList.add("show"),c=window.setTimeout((()=>{r.classList.remove("show")}),2e3)},p={fullscreen:{displayName:"全屏",run:()=>i.playerAgent.fullscreen()},webFullscreen:{displayName:"网页全屏",run:()=>i.playerAgent.webFullscreen()},wideScreen:{displayName:"宽屏",run:()=>i.playerAgent.widescreen()},volumeUp:{displayName:"增加音量",run:()=>{const e=i.playerAgent.changeVolume(10);return lodash.isNil(e)?e:(d(`${e}%`,"mdi-volume-high"),!0)}},volumeDown:{displayName:"降低音量",run:()=>{const e=i.playerAgent.changeVolume(-10);return lodash.isNil(e)?e:(0===e?d("静音","mdi-volume-off"):d(`${e}%`,"mdi-volume-high"),!0)}},mute:{displayName:"静音",run:()=>{const e=i.playerAgent.toggleMute();return lodash.isNil(e)?e:(i.playerAgent.isMute()?d("已静音","mdi-volume-off"):d("已取消静音","mdi-volume-high"),!0)}},pictureInPicture:{displayName:"画中画",run:()=>i.playerAgent.togglePip()},coin:{displayName:"投币",run:a(".video-toolbar .coin,.tool-bar .coin-info, .video-toolbar-module .coin-box, .play-options-ul > li:nth-child(2)")},favorite:{displayName:"收藏",run:a(".video-toolbar .collect, .video-toolbar-module .fav-box, .play-options-ul > li:nth-child(3)")},pause:{displayName:"暂停/播放",run:()=>i.playerAgent.togglePlay()},like:{displayName:"点赞",run:(()=>{let e=!0;return n=>{const{event:t}=n,i=dq(".video-toolbar .like, .tool-bar .like-info");if(!i)return!1;t.preventDefault();const r=(e,n)=>{const t=new CustomEvent(e,n);i.dispatchEvent(t)};return e=!0,setTimeout((()=>e=!1),200),r("mousedown",t),document.body.addEventListener("keyup",(n=>{n.preventDefault(),r("mouseup",n),e&&r("click",n)}),{once:!0}),!0}})()},danmaku:{displayName:"弹幕开关",run:()=>i.playerAgent.toggleDanmaku()},longJumpBackward:{displayName:"长倒退",run:()=>i.playerAgent.changeTime(-(0,r.getComponentSettings)("keymap").options.longJumpSeconds)},longJumpForward:{displayName:"长前进",run:()=>i.playerAgent.changeTime((0,r.getComponentSettings)("keymap").options.longJumpSeconds)},jumpBackward:{displayName:"倒退",run:()=>i.playerAgent.changeTime(-5)},jumpForward:{displayName:"前进",run:()=>i.playerAgent.changeTime(5)},playerMenu:{displayName:"播放器菜单",run:()=>{const e=i.playerAgent.query.video.container.sync();if(!e)return null;const n=e.getBoundingClientRect();return e.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,cancelable:!1,view:unsafeWindow,button:2,buttons:0,clientX:n.x+n.width/2-88.325,clientY:n.y+n.height/2-97})),!0}},seekBegin:{displayName:"回开头",run:()=>i.playerAgent.seek(0)},sendComment:{displayName:"发送评论",ignoreTyping:!1,run:()=>{const e=document.activeElement?.nextElementSibling;return e?(e.click(),!0):null}}},[u]=(0,o.registerAndGetData)("keymap.actions",p)},799:function(e,n,t){"use strict";t.d(n,{Wb:function(){return r},um:function(){return o}});var i=t(269);const r={fullscreen:"f",webFullscreen:"w",wideScreen:"t",volumeUp:"arrowUp",volumeDown:"arrowDown",mute:"m",pictureInPicture:"p",coin:"c",favorite:"s",pause:"space",like:"l",playerMenu:"`",longJumpForward:"j",longJumpBackward:"shift j",jumpBackward:"arrowLeft",jumpForward:"arrowRight",danmaku:"d",seekBegin:"0",sendComment:"ctrl enter"},[,o]=(0,i.registerAndGetData)("keymap.presets",r,{Default:{},YouTube:{like:"",pause:"space k",longJumpForward:"l",longJumpBackward:"j",seekBegin:"0 Home"},HTML5Player:{coin:"shift c",danmaku:"shift d",fullscreen:"enter",webFullscreen:"shift enter",pictureInPicture:"shift p",longJumpBackward:"ctrl arrowLeft",longJumpForward:"ctrl arrowRight"},PotPlayer:{coin:"shift c",danmaku:"shift d",fullscreen:"enter",webFullscreen:"6",longJumpBackward:"ctrl arrowLeft",longJumpForward:"ctrl arrowRight",seekBegin:"backspace"}})},450:function(e,n,t){"use strict";t.r(n),t.d(n,{loadKeymapSettings:function(){return o},toggleKeymapSettings:function(){return s}});var i=t(109);let r;const o=async e=>{if(r)return;const n=await Promise.resolve().then(t.bind(t,415)).then((e=>e.default));r=(0,i.mountVueComponent)(n),e&&(r.triggerElement=e),document.body.insertAdjacentElement("beforeend",r.$el)},s=async e=>{r||await o(e),r.popupOpen=!r.popupOpen}},376:function(e,n,t){var i=t(645)((function(e){return e[1]}));i.push([e.id,".keymap-extra-options {\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n  justify-content: center;\n}\n.keymap-extra-options .keymap-settings-button .be-icon {\n  margin-right: 8px;\n}",""]),e.exports=i},529:function(e,n,t){var i=t(645)((function(e){return e[1]}));i.push([e.id,".keymap-settings-popup {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136,136,136,0.13333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  transition: 0.2s ease-out;\n  width: 550px;\n  top: 50%;\n  left: 50%;\n  z-index: 100002;\n  transform: translateX(-50%) translateY(-50%) scale(0.9);\n  display: flex;\n  flex-direction: column;\n}\nbody.dark .keymap-settings-popup {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .keymap-settings-popup {\n  background-color: #282828;\n  color: #eee;\n}\nbody.dark .keymap-settings-popup {\n  background-color: #222;\n}\n.keymap-settings-popup.open {\n  transform: translateX(-50%) translateY(-50%) scale(1);\n}\n.keymap-settings {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  padding: 12px 12px 0 18px;\n}\n.keymap-settings-header {\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n  margin-bottom: 8px;\n}\n.keymap-settings-header-title {\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n  font-size: 18px;\n  font-weight: bold;\n}\n.keymap-settings-header-title .be-icon {\n  margin-right: 6px;\n}\n.keymap-settings-header-help, .keymap-settings-header-close {\n  display: flex;\n  padding: 6px;\n  cursor: pointer;\n  transition: 0.2s ease-out;\n  color: inherit;\n}\n.keymap-settings-header-help:hover, .keymap-settings-header-close:hover {\n  color: var(--theme-color);\n}\n.keymap-settings-content {\n  flex: 1 0 auto;\n  max-height: calc(100vh - 200px);\n  overflow: auto;\n  padding-bottom: 12px;\n}\n.keymap-settings-content .keymap-settings-grid .grid-header,\n.keymap-settings-content .keymap-settings-grid .grid-row {\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n  grid-gap: 8px;\n  gap: 8px;\n  justify-content: space-between;\n  height: 24px;\n  box-sizing: content-box;\n}\n.keymap-settings-content .keymap-settings-grid .grid-header > *,\n.keymap-settings-content .keymap-settings-grid .grid-row > * {\n  flex: 1 0 0;\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n}\n.keymap-settings-content .keymap-settings-grid .grid-header {\n  margin-bottom: 4px;\n  padding: 4px 0 6px 0;\n  border-bottom: 1px solid rgba(136,136,136,0.13333);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background-color: #fff;\n}\nbody.dark .keymap-settings-content .keymap-settings-grid .grid-header {\n  background-color: #222;\n}",""]),e.exports=i},519:function(e,n,t){var i=t(645)((function(e){return e[1]}));i.push([e.id,".keymap-settings-grid .grid-row {\n  padding: 2px 0;\n}\n.keymap-settings-grid .grid-row .row-name,\n.keymap-settings-grid .grid-row .row-default-binding,\n.keymap-settings-grid .grid-row .row-preset-binding {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.keymap-settings-grid .grid-row .row-name::-webkit-scrollbar,\n.keymap-settings-grid .grid-row .row-default-binding::-webkit-scrollbar,\n.keymap-settings-grid .grid-row .row-preset-binding::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.keymap-settings-grid .grid-row .row-name.not-set, .keymap-settings-grid .grid-row .row-name.overwritten,\n.keymap-settings-grid .grid-row .row-default-binding.not-set,\n.keymap-settings-grid .grid-row .row-default-binding.overwritten,\n.keymap-settings-grid .grid-row .row-preset-binding.not-set,\n.keymap-settings-grid .grid-row .row-preset-binding.overwritten {\n  opacity: 0.25;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .be-button {\n  padding: 4px;\n  margin-right: 4px;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .be-icon {\n  margin: 0;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .be-textbox {\n  margin-right: 6px;\n  flex: 1 0 auto;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .custom-binding-edit,\n.keymap-settings-grid .grid-row .row-custom-binding .custom-binding-add {\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n  flex: 1 0 auto;\n}",""]),e.exports=i},626:function(e,n,t){var i=t(645)((function(e){return e[1]}));i.push([e.id,".keymap-tip-container {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  padding: 8px 16px;\n  background-color: rgba(0,0,0,0.66667);\n  color: white;\n  pointer-events: none;\n  opacity: 0;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  font-size: 14pt;\n  border-radius: 4px;\n  transition: 0.2s ease-out;\n}\nbody.player-mode-blackmask .keymap-tip-container {\n  z-index: 10017;\n}\n.keymap-tip-container.show {\n  opacity: 1;\n}\n.keymap-tip-container i {\n  line-height: 1;\n  margin-right: 8px;\n  font-size: 18pt;\n}\n\n.bilibili-player .bilibili-player-area .bilibili-player-video-wrap .bilibili-player-volumeHint {\n  background-color: rgba(0,0,0,0.66667);\n  color: white;\n}\n.bilibili-player .bilibili-player-area .bilibili-player-video-wrap .bilibili-player-volumeHint-icon {\n  line-height: 1;\n}",""]),e.exports=i},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){
// eslint-disable-next-line prefer-destructuring
var s=this[o][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);i&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:function(e,n,t){"use strict";var i,r=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),s=[];function a(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},i=[],r=0;r<e.length;r++){var o=e[r],l=n.base?o[0]+n.base:o[0],c=t[l]||0,d="".concat(l," ").concat(c);t[l]=c+1;var p=a(d),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(s[p].references++,s[p].updater(u)):s.push({identifier:d,updater:y(u,n),references:1}),i.push(d)}return i}function c(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var d,p=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=p(n,r);else{var o=document.createTextNode(r),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(o,s[n]):e.appendChild(o)}}function g(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,f=0;function y(e,n){var t,i,r;if(n.singleton){var o=f++;t=m||(m=c(n)),i=u.bind(null,t,o,!1),r=u.bind(null,t,o,!0)}else t=c(n),i=g.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=a(t[i]);s[r].references--}for(var o=l(e,n),c=0;c<t.length;c++){var d=a(t[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}t=o}}}},373:function(e,n,t){var i=t(626);i&&i.__esModule&&(i=i.default),e.exports="string"==typeof i?i:i.toString()},500:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"keymap-extra-options"},[t("VButton",{ref:"button",staticClass:"keymap-settings-button",on:{mouseover:function(n){return e.loadSettings()},click:function(n){return e.toggleSettings()}}},[t("VIcon",{attrs:{icon:"mdi-keyboard-settings-outline",size:18}}),e._v("\n    快捷键设置\n  ")],1)],1)};i._withStripped=!0;var r=t(643),o=t(450),s=Vue.extend({components:{VButton:r.VButton,VIcon:r.VIcon},data:()=>({popupOpen:!1}),methods:{async loadSettings(){await(0,o.loadKeymapSettings)(this.$refs.button)},async toggleSettings(){await(0,o.toggleKeymapSettings)(this.$refs.button)}}}),a=t(379),l=t.n(a),c=t(376),d=t.n(c),p={insert:"head",singleton:!1},u=(l()(d(),p),d().locals,(0,t(900).Z)(s,i,[],!1,null,null,null));u.options.__file="registry/lib/components/utils/keymap/settings/ExtraOptions.vue";var g=u.exports},415:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("VPopup",{staticClass:"keymap-settings-popup be-settings-extra-options",attrs:{fixed:"","trigger-element":e.triggerElement},model:{value:e.popupOpen,callback:function(n){e.popupOpen=n},expression:"popupOpen"}},[t("div",{staticClass:"keymap-settings"},[t("div",{staticClass:"keymap-settings-header"},[t("div",{staticClass:"keymap-settings-header-title"},[t("VIcon",{attrs:{icon:"mdi-keyboard-settings-outline"}}),e._v("\n        快捷键设置\n      ")],1),e._v(" "),t("a",{staticClass:"keymap-settings-header-help",attrs:{href:"https://github.com/the1812/Bilibili-Evolved/blob/preview/registry/lib/components/utils/keymap/help.md",target:"_blank",title:"查看帮助"}},[t("VIcon",{attrs:{size:18,icon:"mdi-help-circle-outline"}})],1),e._v(" "),t("div",{staticClass:"keymap-settings-header-close",attrs:{title:"关闭"}},[t("VIcon",{attrs:{size:18,icon:"close"},on:{click:function(n){e.popupOpen=!1}}})],1)]),e._v(" "),t("div",{staticClass:"keymap-settings-content"},[t("div",{staticClass:"keymap-settings-grid"},[t("div",{staticClass:"grid-header"},[t("div",{staticClass:"header-name"},[e._v("\n            动作\n          ")]),e._v(" "),t("div",{staticClass:"header-default-binding"},[e._v("\n            默认按键\n          ")]),e._v(" "),t("div",{staticClass:"header-preset-binding"},[t("VDropdown",{attrs:{items:e.presetOptions,"key-mapper":function(e){return e}},scopedSlots:e._u([{key:"item",fn:function(n){var t=n.item;return[e._v("\n                "+e._s(t)+"\n              ")]}}]),model:{value:e.selectedPreset,callback:function(n){e.selectedPreset=n},expression:"selectedPreset"}})],1),e._v(" "),t("div",{staticClass:"header-custom-binding"},[e._v("\n            自定义按键\n          ")])]),e._v(" "),e._l(e.rows,(function(n){return t("KeymapSettingsRow",{key:n.name,attrs:{row:n,"selected-preset":e.selectedPreset}})}))],2)])])])};i._withStripped=!0;var r=t(407),o=t(643),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"grid-row"},[t("div",{staticClass:"row-name",attrs:{title:e.row.name}},[e._v("\n    "+e._s(e.row.displayName)+"\n  ")]),e._v(" "),t("div",{staticClass:"row-default-binding",class:{overwritten:e.isOverwrittern(e.presets[e.selectedPreset],e.customKeyBindings),"not-set":void 0===e.presetBase[e.row.name]}},[e._v("\n    "+e._s(e.showReadonlyKey(e.presetBase))+"\n  ")]),e._v(" "),t("div",{staticClass:"row-preset-binding",class:{overwritten:e.isOverwrittern(e.customKeyBindings),"not-set":void 0===e.presets[e.selectedPreset][e.row.name]}},[e._v("\n    "+e._s(e.showReadonlyKey(e.presets[e.selectedPreset]))+"\n  ")]),e._v(" "),t("div",{staticClass:"row-custom-binding"},[e.editable?t("div",{staticClass:"custom-binding-edit"},[t("TextBox",{ref:"customBindingTextBox",attrs:{placeholder:"禁用","change-on-blur":"",text:e.customKeyBindings[e.row.name]},on:{change:e.updateCustomBinding}}),e._v(" "),t("VButton",{attrs:{type:"transparent",title:"删除自定义键位"},on:{click:function(n){return e.removeCustomBinding()}}},[t("VIcon",{attrs:{icon:"mdi-trash-can-outline",size:16}})],1)],1):t("div",{staticClass:"custom-binding-add"},[t("VButton",{attrs:{type:"transparent",title:"添加自定义键位"},on:{click:function(n){return e.addCustomBinding()}}},[t("VIcon",{attrs:{icon:"mdi-plus",size:16}})],1)],1)])])};s._withStripped=!0;var a=t(799);const l=(0,r.getComponentSettings)("keymap").options;var c=Vue.extend({components:{TextBox:o.TextBox,VButton:o.VButton,VIcon:o.VIcon},props:{row:{type:Object,required:!0},selectedPreset:{type:String,required:!0}},data:()=>({presets:a.um,presetBase:a.Wb,customKeyBindings:l.customKeyBindings,editable:!1}),created(){this.checkEditable()},methods:{checkEditable(){this.editable=void 0!==this.customKeyBindings[this.row.name]},showReadonlyKey(e){const{name:n}=this.row,t=e[n];return void 0===t?"继承":""===t?"禁用":t},isOverwrittern(...e){const{name:n}=this.row;return e.some((e=>void 0!==e[n]))},async addCustomBinding(){const{name:e}=this.row;this.customKeyBindings[e]="",this.checkEditable(),await this.$nextTick(),this.$refs.customBindingTextBox.focus()},removeCustomBinding(){const{name:e}=this.row;delete this.customKeyBindings[e],this.checkEditable()},updateCustomBinding(e){console.log("update",e);const{name:n}=this.row;this.customKeyBindings[n]=e}}}),d=t(379),p=t.n(d),u=t(519),g=t.n(u),m={insert:"head",singleton:!1},f=(p()(g(),m),g().locals,t(900)),y=(0,f.Z)(c,s,[],!1,null,null,null);y.options.__file="registry/lib/components/utils/keymap/settings/KeymapSettingsRow.vue";var h=y.exports,v=t(307);const b=(0,r.getComponentSettings)("keymap").options;console.log(a.um,v.Nw,b.preset,b.customKeyBindings);var w=Vue.extend({components:{VIcon:o.VIcon,VDropdown:o.VDropdown,VPopup:o.VPopup,KeymapSettingsRow:h},props:{triggerElement:{type:HTMLElement,default:null}},data:()=>({popupOpen:!1,actions:v.Nw,presets:a.um,customKeyBindings:b.customKeyBindings}),computed:{selectedPreset:{get:()=>b.preset,set(e){b.preset=e}},rows(){return Object.entries(this.actions).map((([e,n])=>({name:e,...n})))},presetOptions(){return Object.keys(this.presets)}}}),k=t(529),x=t.n(k),_={insert:"head",singleton:!1},C=(p()(x(),_),x().locals,(0,f.Z)(w,i,[],!1,null,null,null));C.options.__file="registry/lib/components/utils/keymap/settings/KeymapSettings.vue";var B=C.exports},900:function(e,n,t){"use strict";function i(e,n,t,i,r,o,s,a){var l,c="function"==typeof e?e.options:e;if(n&&(c.render=n,c.staticRenderFns=t,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,n){return l.call(n),d(e,n)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:c}}t.d(n,{Z:function(){return i}})},269:function(e){"use strict";e.exports=coreApis.pluginApis.data},407:function(e){"use strict";e.exports=coreApis.settings},643:function(e){"use strict";e.exports=coreApis.ui},109:function(e){"use strict";e.exports=coreApis.utils}},i={};function r(e){var n=i[e];if(void 0!==n)return n.exports;var o=i[e]={id:e,exports:{}};return t[e](o,o.exports,r),o.exports}r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(t,i){if(1&i&&(t=this(t)),8&i)return t;if("object"==typeof t&&t){if(4&i&&t.__esModule)return t;if(16&i&&"function"==typeof t.then)return t}var o=Object.create(null);r.r(o);var s={};e=e||[null,n({}),n([]),n(n)];for(var a=2&i&&t;"object"==typeof a&&!~e.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(e){s[e]=function(){return t[e]}}));return s.default=function(){return t},r.d(o,s),o},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";r.d(o,{component:function(){return u}});var e=coreApis.componentApis.styledComponent,n=r(407),t=r(307),i=r(109),s=coreApis.utils.urls;const a=["shift","alt","ctrl","meta"],l=lodash.once((e=>{const n=s.watchlaterUrls.some((e=>(0,i.matchUrlPattern)(e))),r=s.mediaListUrls.some((e=>(0,i.matchUrlPattern)(e))),o={enable:!0,bindings:e};return document.body.addEventListener("keydown",(e=>{o.enable&&o.bindings.forEach((o=>{if(0===o.keys.length)return;if(!1!==o.action.ignoreTyping&&(0,i.isTyping)())return;const s=e.key.toLowerCase(),l=dq(".bilibili-player-sphere-control");if(null!==l&&"none"!==l.style.display&&["w","a","s","d"].includes(s))return;if(a.some((n=>{const t=o.keys.includes(n);if(o.keys.includes(`[${n}]`))return!1;return t!==e[`${n}Key`]})))return;const c=o.keys.filter((e=>!a.includes(e.toLowerCase()))).map((e=>e.toLowerCase()));if(!(c.includes(e.key.toLowerCase())||c.includes(e.code.toLowerCase())))return;const d=o.action.run({binding:o,isWatchlater:n,isMediaList:r,event:e,clickElement:t.$j,changeVideoTime:t.vN,showTip:t.kW}),p=!lodash.isNil(d);(o.action.prevent??p)&&(e.stopPropagation(),e.preventDefault())}))})),o}));var c=r(799);let d=null;const p=(0,e.styledComponentEntry)((()=>Promise.resolve().then(r.t.bind(r,373,23))),(async({settings:e})=>{const i=()=>{const n=e.options.preset,i=c.um[n]||{},r=(e=>Object.entries(e).map((([e,n])=>({keys:n.split(" ").filter((e=>""!==e)),action:t.Nw[e]||none}))))({...c.Wb,...i,...e.options.customKeyBindings});d?d.bindings=r:d=l(r)};(0,n.addComponentListener)("keymap.preset",i,!0),(0,n.addComponentListener)("keymap.customKeyBindings",i)})),u={name:"keymap",displayName:"快捷键扩展",tags:[componentsTags.video,componentsTags.utils],entry:p,unload:()=>{d&&(d.enable=!1)},reload:()=>{d&&(d.enable=!0)},description:{"zh-CN":"为脚本的功能和 b 站的功能启用键盘快捷键支持, 快捷键列表可在`快捷键设置`中查看和配置."},extraOptions:()=>Promise.resolve().then(r.bind(r,500)).then((e=>e.default)),options:{longJumpSeconds:{defaultValue:85,displayName:"长跳跃秒数"},customKeyBindings:{defaultValue:{},displayName:"自定义键位",hidden:!0},preset:{defaultValue:"Default",displayName:"预设",hidden:!0}},plugin:{displayName:"快捷键扩展 - 搜索支持",setup:({addData:e})=>{e("launchBar.actions",(e=>{e.push({name:"keymapSettings",getActions:async()=>[{name:"快捷键扩展设置",description:"Keymap Settings",icon:"mdi-keyboard-settings-outline",action:async()=>{const{toggleKeymapSettings:e}=await Promise.resolve().then(r.bind(r,450));e()}}]})}))}},commitHash:"d59d406e414cc2a6837f53f2463c7790c8ed2231",coreVersion:"2.1.8"}}(),o=o.component}()}));