"use strict";(self.webpackChunkscnsoft_website=self.webpackChunkscnsoft_website||[]).push([[7673],{68470:function(t,n,e){var r=e(19755),i=e.n(r);e(69826),e(41539),e(66992),e(51532),e(78783),e(33948),e(91038),e(21249),e(54747),e(47042),e(68309),e(74916),e(82526),e(41817),e(32165);function o(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,f=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){f=!0,o=t},f:function(){try{u||null==e.return||e.return()}finally{if(f)throw o}}}}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(n){var e=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.$wrapper=n,this.initItemGroups(),this.setEqualHeightFields(),i()(window).on("resize",(function(){e.initItemGroups(),e.setEqualHeightFields()})),this.$wrapper.find("img").one("load",(function(){return e.setEqualHeightFields()}))}var n,e,r;return n=t,(e=[{key:"initItemGroups",value:function(){var t=i()(document).width(),n=new Map,e=t>=1024?3:2;this.$wrapper.find(".office-column").each((function(t,r){var o=Math.floor(t/e),a=n.get(o)?n.get(o):[];a.push(i()(r)),n.set(o,a)})),this.columnGroups=Array.from(n.values())}},{key:"setEqualHeightFields",value:function(){if(!editmode)if(i()(document).width()<=767)this.$wrapper.find(".office-row").css("height","auto");else{var t,n=o(this.columnGroups);try{for(n.s();!(t=n.n()).done;)for(var e=t.value,r=Math.max.apply(null,e.map((function(t){return t.find(".office-row").length}))),a=function(t){var n=Math.max.apply(null,e.map((function(n){var e=n.find(".office-row").eq(t);return e.css("height","auto"),e.height()})));n&&e.forEach((function(e){return e.find(".office-row").eq(t).height(n)}))},u=0;u<r;u++)a(u)}catch(t){n.e(t)}finally{n.f()}}}}])&&u(n.prototype,e),r&&u(n,r),t}();i()(document).ready((function(){i()(".offices-wrapper").each((function(t,n){return new f(i()(n))}))}))},21249:function(t,n,e){var r=e(82109),i=e(42092).map;r({target:"Array",proto:!0,forced:!e(81194)("map")},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}},function(t){t.O(0,[9755,6055,1022,8661,6378,1510],(function(){return n=68470,t(t.s=n);var n}));t.O()}]);