"use strict";(self.webpackChunksijui_website=self.webpackChunksijui_website||[]).push([[5179],{29e3:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(19755),i=n.n(o);function a(){var e=i()(".page-menu__snippets").data("selector"),t=document.querySelector(e),n=document.querySelector(".page-menu__snippets"),o=document.querySelector(".sd-sidebar .page-menu__sub"),a=document.querySelector(".page-menu__sub");if(n&&t&&a){function e(){if(window.innerWidth<1200){var e=document.querySelector(".page-share");e?e.parentNode.insertBefore(n,e):t.appendChild(n)}else o?o.parentNode.insertBefore(n,o.nextSibling):a.parentNode.insertBefore(n,a.nextSibling)}e(),window.addEventListener("resize",(function(){e()}))}}},79920:function(e,t,n){var o=n(19755),i=n.n(o),a=(n(69826),n(41539),n(21249),n(69600),n(56884));function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$wrapper=t,this.maxBookmarkLevel=2,this.markLastBookmarkItem(),this.setUpBookmarkLevelButtons(),this.addSimpleBar(),editmode&&this.$wrapper.on("click",".link-move-top, .link-move-bottom",this.moveLink.bind(this)),this.$wrapper.on("click",".add-bookmark-btn",this.addNewBookmarkWysiwyg.bind(this)).on("click",".add-link-btn",this.addNewLinkEditable.bind(this))}var t,n,o;return t=e,(n=[{key:"addSimpleBar",value:function(){var e=this.$wrapper.find(".sidebar-content"),t=e.height(),n=function(){i()(window).width()>1024&&(e.height(t),new a.Z(e[0],{autoHide:!1}))};n(),i()(window).on("resize",n)}},{key:"addNewBookmarkWysiwyg",value:function(){var e=this.$wrapper.find(".bookmark-item:not(.d-none):last");(e.length?e.next(".bookmark-item.d-none"):this.$wrapper.find(".bookmark-item.d-none:first")).removeClass("d-none"),this.markLastBookmarkItem()}},{key:"markLastBookmarkItem",value:function(){if(editmode){var e=this.$wrapper.find(".bookmark-item:not(.d-none)");e.last().length&&(this.$wrapper.find(".bookmark-item").removeClass("last-bookmark"),e.last().addClass("last-bookmark")),1===e.length?e.addClass("no-border-bookmark"):e.removeClass("no-border-bookmark")}}},{key:"addNewLinkEditable",value:function(){var e=this.$wrapper.find(".link-item:not(.d-none):last");(e.length?e.next(".link-item.d-none"):this.$wrapper.find(".link-item.d-none:first")).removeClass("d-none")}},{key:"setUpBookmarkLevelButtons",value:function(){var e=this;this.$wrapper.find(".bookmark-item").each((function(t,n){var o=i()(n);e.updateBookmarkLevelState(o),o.find(".bookmark-to-left, .bookmark-to-right").on("click",(function(t){var n=i()(t.currentTarget),a=o.data("config");n.hasClass("bookmark-to-left")&&a.level>0&&(a.level-=1),n.hasClass("bookmark-to-right")&&a.level<e.maxBookmarkLevel&&(a.level+=1),e.setBookmarkConfig(o,a),e.updateBookmarkLevelState(o)}))}))}},{key:"updateBookmarkLevelState",value:function(e){e.data("config")||this.setBookmarkConfig(e,{level:0});var t=e.data("config"),n=e.find(".bookmark-to-left"),o=e.find(".bookmark-to-right"),i=e.find(".bookmark-point-wrapper");n.show(),o.show(),i.show(),0===t.level&&n.hide(),t.level>0&&i.hide(),t.level===this.maxBookmarkLevel&&o.hide(),e.find(".bookmark-item-offset").removeClass("level-0 level-1 level-2").addClass("level-"+t.level)}},{key:"setBookmarkConfig",value:function(e,t){e.data("config",t),editmode&&e.find(".bookmark-item-config").text(JSON.stringify(t))}},{key:"moveLink",value:function(e){var t=i()(e.currentTarget),n=t.closest(".link-item");if(!n.hasClass("d-none")){var o=n.prev(".link-item:not(.d-none)"),a=n.next(".link-item:not(.d-none)");if(t.hasClass("link-move-top")&&o.length)o.before(n);else{if(!t.hasClass("link-move-bottom")||!a.length)return;a.after(n)}var r=this.$wrapper.find(".link-items .link-item:not(.d-none)").map((function(e,t){return i()(t).data("item")})).get();this.$wrapper.find(".links-order-editable").text(r.join(","))}}}])&&r(t.prototype,n),o&&r(t,o),e}(),l=n(88579),k=n(29e3);i()(document).ready((function(){new s(i()(".info-commercial-page")),(0,l.Z)(),(0,k.Z)()}))},69600:function(e,t,n){var o=n(82109),i=n(1702),a=n(68361),r=n(45656),s=n(9341),l=i([].join),k=a!=Object,d=s("join",",");o({target:"Array",proto:!0,forced:k||!d},{join:function(e){return l(r(this),void 0===e?",":e)}})},21249:function(e,t,n){var o=n(82109),i=n(42092).map;o({target:"Array",proto:!0,forced:!n(81194)("map")},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})}},function(e){e.O(0,[9755,6055,1022,5306,6884,8484,8579],(function(){return t=79920,e(e.s=t);var t}));e.O()}]);