"use strict";(self.webpackChunksijui_website=self.webpackChunksijui_website||[]).push([[8579],{69494:function(e,i,t){t.d(i,{Z:function(){return u}});t(69826),t(41539);var n=t(19755),a=t.n(n),r=t(56884);function s(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l,c,o,u=function(){function e(i){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.$wrapper=i,this.$wrapper.on("click",".page-menu__checkbox",this.handleToggle.bind(this)).on("click",".mobile-toggle-menu-button",this.handleMobileToggle.bind(this)),this.initMenu(),e.getSidebarSimpleBar()}var i,t,n;return i=e,n=[{key:"getSidebarSimpleBar",value:function(){if(!this.sidebarSimpleBar){var e=a()("div:not(.sd-mobile-sidebar) > .page-menu__wrapper .page-menu__scroll")[0];e&&(this.sidebarSimpleBar=new r.Z(e))}return this.sidebarSimpleBar}}],(t=[{key:"handleMobileToggle",value:function(e){a()(e.currentTarget).toggleClass("checked")}},{key:"handleToggle",value:function(i){var t=a()(i.currentTarget).siblings(".page-menu__sub-items"),n=t.siblings(".icon-arrow-wrapper");n.length&&n.is(":visible")&&(n.toggleClass("checked",t.is(":visible")),a()(i.currentTarget).toggleClass("arrow",t.is(":visible"))),t.slideToggle((function(){a()(i.currentTarget).toggleClass("checked",t.is(":visible")),a()(window).width()>=1200&&e.getSidebarSimpleBar()&&e.getSidebarSimpleBar().recalculate()})),a()(i.currentTarget).removeClass("unchecked")}},{key:"initMenu",value:function(){var e=this.$wrapper.find("#sub5").closest(".page-menu__sub-items"),i=e.parents(".page-menu__sub-items");a()(e).siblings(".submenu-toggle").removeClass("unchecked"),a()(i).siblings(".submenu-toggle").removeClass("unchecked")}}])&&s(i.prototype,t),n&&s(i,n),e}();o=null,(c="sidebarSimpleBar")in(l=u)?Object.defineProperty(l,c,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[c]=o},88579:function(e,i,t){t.d(i,{Z:function(){return s}});t(69826),t(41539),t(47042),t(57327);var n=t(19755),a=t.n(n),r=t(69494);function s(){var e=a()(".page-menu__item.active").offset()?a()(".page-menu__item.active").offset().top:0,i=a()(window).height(),t=!1;t||(t=!0,e+100>=i&&(i>=650?a()(".simplebar-content-wrapper").animate({scrollTop:e},1500):a()(".simplebar-content-wrapper").animate({scrollTop:e-200},1500))),editmode&&(a()(".page-menu__wrapper .move-to-see-more-menu-item-btn").on("click",(function(e){var i=a()(e.currentTarget),t=i.closest(".page-menu__item-link").find('.see-more-item-hide-checkbox-editable input[type="checkbox"]');i.toggleClass("active"),t.attr("checked",i.hasClass("active"))})),a()(".page-menu__wrapper .hide-menu-item-btn").on("click",(function(e){var i=a()(e.currentTarget),t=i.closest(".page-menu__item-link").find('.menu-item-hide-checkbox-editable input[type="checkbox"]');i.toggleClass("active"),t.attr("checked",i.hasClass("active"))}))),a()(".page-menu__wrapper").find(".see-more-item .see-item-link, .see-less-item .see-item-link").on("click",(function(e){e.preventDefault();var i=a()(e.currentTarget).closest("li"),t=i.closest("ul"),n=t.find("> .see-more-item"),s=t.find("> .see-less-item");if(i.hasClass("see-more-item")){n.hide();var l=t.find("> li").slice(n.index()+1,s.index()+1);editmode||(l=l.filter(":not(.hidden-menu-item)")),l.show()}else t.find("> li").slice(n.index()+1,s.index()+1).hide(),n.show();a()(window).width()>=1200&&r.Z.getSidebarSimpleBar()&&r.Z.getSidebarSimpleBar().recalculate()}))}}}]);