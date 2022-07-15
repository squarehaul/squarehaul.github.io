"use strict";(self.webpackChunksijui_website=self.webpackChunksijui_website||[]).push([[5276],{23890:function(i,e,t){var r=t(19755),n=t.n(r);t(74916),t(4723),t(69826),t(41539),t(92222);function a(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}var d=function(){function i(e){var t=this;if(function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.$wrapper=e,this.$gridWrapper=this.$wrapper.children(".grid-container").children(".grid-wrapper"),this.gridId=this.$wrapper.data("grid-id"),this.isOldIE=window.navigator.userAgent.match(/(MSIE|Trident)/),this.isOldIE&&this.$gridWrapper.addClass("grid-wrapper-old-ie"),this.setUpItemsDirection(),this.initBackgroundColor(),n()(window).resize(this.setUpItemsDirection.bind(this)),editmode){this.initBackgroundColorSelect(),this.updateItemBasis();var r=this.$gridWrapper.children(".grid-item:not(.d-none)").last();this.setUpLastItem(r),this.$wrapper.on("change focusout",".panel-".concat(this.gridId," .grid-item-basis-editable input"),this.updateItemBasis.bind(this)).on("keyup",".panel-".concat(this.gridId," .grid-item-basis-editable input"),(function(i){return 13===i.which&&t.updateItemBasis()})).on("click",".panel-".concat(this.gridId," .add-grid-item-btn"),this.addGridItem.bind(this)).on("click",".panel-".concat(this.gridId," .remove-grid-item-btn"),this.handleClickRemoveGridItem.bind(this))}}var e,t,r;return e=i,t=[{key:"setUpItemsDirection",value:function(){var i=this;this.isOldIE&&this.setUpItemsMinWidth(),this.$wrapper.find(".grid-wrapper").each((function(e,t){var r=n()(t);r.removeClass("grid-row grid-column").addClass("grid-default"),r.find(".grid-wrapper").addClass("grid-default");var a=i.getFreePercents(r);if(a){var d=n()('<div class="grid-item"><div class="grid-item-content"></div></div>');d.css("flex-basis",a+"%"),d.css("min-width",a+"%"),r.append(d)}var s=r.width()+10,c=0;r.children(".grid-item").each((function(i,e){c+=n()(e).width()})),r.removeClass("grid-default"),r.find(".grid-wrapper").removeClass("grid-default"),a&&r.children(".grid-item").last().remove(),s>=c?r.addClass("grid-row"):r.addClass("grid-column")})),this.initBackgroundColor()}},{key:"setUpItemsMinWidth",value:function(){for(var i=function(i){var e=i.children(".grid-item:not(.d-none)").first().children(".grid-item-content"),t=parseInt(e.css("margin-left"))+parseInt(e.css("margin-right")),r=0;i.children(".grid-item:not(.d-none)").each((function(i,e){var a=0;n()(e).children(".grid-item-content").children(".pimcore_area_content").each((function(i,e){var r=n()(e).children(),d=parseInt(r.css("min-width"));r.hasClass("grid-editable-wrapper")&&(d-=t),d>a&&(a=d)})),a&&n()(e).css("min-width",a+t+"px"),a>r&&(r=a)})),r&&i.closest(".grid-editable-wrapper").css("min-width",r+t+"px")},e=this.$gridWrapper.find(".grid-wrapper"),t=e.length?e.last():this.$gridWrapper;1===t.length;)i(t),t=t.parent().closest(".grid-wrapper")}},{key:"initBackgroundColor",value:function(){n()("body").append('<div class="container grid-test-width-container" style="width: 100%;"></div>');var i=n()(".grid-test-width-container").first(),e=this.$wrapper.children(".grid-container").children(".background-color-block"),t=this.$wrapper.width(),r=i.width();i.remove(),t>=r-16?e.css("width",n()(window).width()+"px"):e.css("width","100%")}},{key:"updateItemBasis",value:function(){this.$wrapper.find(".panel-".concat(this.gridId," .grid-item-basis-editable input")).each((function(i,e){var t=n()(e),r=t.closest(".grid-item");r.css("flex-basis",t.val()+"%"),r.css("max-width",t.val()+"%")})),this.setUpItemsDirection()}},{key:"initBackgroundColorSelect",value:function(){var i=this,e=window.$(this.$wrapper).find(".bgc-select-wrapper-".concat(this.gridId," .background-color-select")),t=function(){var t=e.find("select"),r=function(i){return i.id?n()('\n                    <span style="display: flex; align-items: center">\n                        <div style="\n                            width: 20px;\n                            height: 20px;\n                            margin-right: 5px;\n                            border: 1px solid #BDC3C7;\n                            background-color: '.concat(i.text,';\n                        "></div> \n                        <div>').concat(i.text,"</div>\n                    </span>\n                ")):i.text};t.select2("destroy").select2({minimumResultsForSearch:-1,dropdownAutoWidth:!0,templateSelection:r,templateResult:r}),t.on("select2:select",(function(e){var t=e.params.data,r=i.$wrapper.children(".grid-container").children(".background-color-block"),n=r.closest(".grid-container");r.css("background-color",t.text),t.text&&"transparent"!==t.text?n.addClass("colored-background"):n.removeClass("colored-background")}))};e.hasClass("initialized")?t():e.on("initialized",(function(){return t()}))}},{key:"addGridItem",value:function(){var i=this.getFreePercents();if(i<.1){var e=this.$gridWrapper.children(".grid-item:not(.d-none)").last(),t=parseFloat(e.css("flex-basis"));i=t/2,e.find(".panel-".concat(this.gridId," .grid-item-basis-editable input")).val(t-i).trigger("change")}var r=this.$gridWrapper.children(".grid-item.d-none:first");r.removeClass("d-none").find(".panel-".concat(this.gridId," .grid-item-basis-editable input")).val(i).trigger("change"),this.setUpLastItem(r),this.setUpItemsDirection()}},{key:"handleClickRemoveGridItem",value:function(i){var e=n()(i.currentTarget).closest(".grid-item");e.addClass("d-none").find(".panel-".concat(this.gridId," .grid-item-basis-editable input")).val(0);var t=e.prev(),r=t.find(".panel-".concat(this.gridId," .grid-item-basis-editable input"));r.val(+r.val()+this.getFreePercents()).trigger("change"),this.setUpLastItem(t),this.setUpItemsDirection()}},{key:"setUpLastItem",value:function(i){this.$gridWrapper.find(".panel-".concat(this.gridId," .add-grid-item-btn")).addClass("d-none"),this.$gridWrapper.find(".panel-".concat(this.gridId," .remove-grid-item-btn")).addClass("d-none");var e=i.find(".panel-".concat(this.gridId," .add-grid-item-btn")),t=i.find(".panel-".concat(this.gridId," .remove-grid-item-btn"));0!==i.next().length&&e.removeClass("d-none");var r=this.$gridWrapper.children(".grid-item:not(.d-none)").length,n=i.find(".pimcore_area_content").length;r>1&&(t.removeClass("d-none"),0===n?t.prop("disabled",!1).attr("title",""):t.prop("disabled",!0).attr("title","Block should be empty"))}},{key:"getFreePercents",value:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;i||(i=this.$gridWrapper);var e=100;return i.children(".grid-item:not(.d-none)").each((function(i,t){e-=parseFloat(n()(t).css("flex-basis"))})),e>0?e:0}}],t&&a(e.prototype,t),r&&a(e,r),i}();n()(document).ready((function(){n()(".grid-editable-wrapper").each((function(i,e){return new d(n()(e))}))}))}},function(i){i.O(0,[9755,6055,1022,8760],(function(){return e=23890,i(i.s=e);var e}));i.O()}]);