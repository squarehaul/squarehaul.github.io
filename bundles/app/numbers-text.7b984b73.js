"use strict";(self.webpackChunksijui_website=self.webpackChunksijui_website||[]).push([[3996],{98809:function(e,i,n){n.d(i,{Z:function(){return r}});n(69826),n(41539),n(57327),n(73210),n(54747);var t=n(19755),o=n.n(t);n(27908),n(43511);function r(e){editmode||(o()('[data-slider="'.concat(e.id,'"]')).each((function(){var i=o()(this),n=new Array(e.options),t={maxSlides:1,adaptiveHeight:!0,preloadImages:"visible",touchEnabled:!0,oneToOneTouch:!0,swipeThreshold:100,pager:!0,controls:!0,infiniteLoop:!0,onSliderResize:function(){l()},onSliderLoad:function(){o()(".bx-clone").each((function(){o()(this).find("a").removeAttr("data-group")}))}},r=!!e.destroySlider&&e.destroySlider,s=!1,a=o()(this).children().filter((function(){return o().trim(o()(this).html())})).length,d=o()(".p-contact.old-template").length;function l(e){if(!r||window.innerWidth<=r.point){var a=window.innerWidth,d=o().extend({},t);n.length&&n[0].forEach((function(e){!isNaN(parseFloat(e.size))&&a>=parseFloat(e.size)&&(d=o().extend(d,e.props))})),s=s.reloadSlider?s:i.bxSlider(d),e<=1?s.destroySlider():s&&s.reloadSlider(d)}else s&&(s.destroySlider(),s=!1)}l(a),d>0&&setTimeout((function(){l(a)}),500),r&&o()(window).on("resize",(function(){l(a)})),i.on("reload-slider",l),i.find("img").one("load",(function(){i.parent().height()<i.height()&&i.parent().height(i.height())})),i.closest(".a-services__content-block").siblings(".a-services__tabs-container").find(".a-services__tabs-label").on("click",(function(e){var n=o()(this).data("slide-index");i.goToSlide(n),e.preventDefault(),e.stopPropagation()}))})),Waypoint.refreshAll())}},36027:function(e,i,n){var t=n(19755),o=n.n(t),r=n(98809);o()(document).ready((function(){(0,r.Z)({id:"numbersText",class:"b-overview__list",destroySlider:{point:767},options:[{size:0,props:{minSlides:1,maxSlides:1,pager:!0,controls:!1,adaptiveHeight:!1,moveSlides:1,slideWidth:769,slideMargin:16,touchEnabled:!0,responsive:!0}}]})}))},21249:function(e,i,n){var t=n(82109),o=n(42092).map;t({target:"Array",proto:!0,forced:!n(81194)("map")},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}},function(e){e.O(0,[9755,6055,1022,5306,6813,4603,8080,7908],(function(){return i=36027,e(e.s=i);var i}));e.O()}]);