/*! generator-frontman v0.1.2
*  by fronui team
*  (c) 2014-2016 www.frontpay.cn
* updated on 2016-07-19
*  Licensed under MIT
*/
 !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?exports.BrickPlus=e(require("jquery")):t.BrickPlus=e(t.jQuery)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t){var e=[].slice.call(arguments,1);return i(this).each(function(){var n=i(this),r=n.data("ui.alert");r||n.data("ui.alert",r=new a(this,t)),"string"==typeof t&&r[t].apply(i(this),e)})}var i=n(1),s=(n(2),n(3)),o='[data-dismiss="alert"]',a=function(t,e){var n=this;n.$el=i(t),this.iScroller=null,n.$el.is(".alert")&&n.scroller()};a.VERSION="{{VERSION}}",a.TRANSITION_DURATION=300,a.prototype.close=function(t,e){function n(){var t=s.data("ui.alert"),e=i.Event("closed.ui.alert",{relatedTarget:s});t&&t.iScroller&&t.iScroller.destroy(),s.trigger(e).detach().remove()}t&&t.preventDefault();var r=i(this),s=a.prototype._getParent(r);!e&&s.trigger(t=i.Event("close.ui.alert")),t.isDefaultPrevented()&&!e||(s.addClass("out"),i.support.transition?s.one("uiTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):s.fadeOut(a.TRANSITION_DURATION,n))},a.prototype._getParent=function(t){var e=i(t),n=e.attr("data-target");n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,""));var r=i(n);return r.length||(r=e.closest(".alert")),r},a.prototype.scroller=function(){var t=this.$el.find("ul");!!t.length&&(this.iScroller=new s(t))},i.fn.alert=r,i.fn.alert.Constructor=a,i(function(){i(".alert").alert(),i(document).on("click.ui.alert",o,function(t){a.prototype.close.call(t.target,t)})})},function(e,n){e.exports=t},function(t,e,n){function r(){var t=document.createElement("ui"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}var i=n(1);i.fn.emulateTransitionEnd=function(t){var e=!1,n=this;i(this).one("uiTransitionEnd",function(){e=!0});var r=function(){e||i(n).trigger(i.support.transition.end)};return setTimeout(r,t),this},i(function(){i.support.transition=r(),i.support.transition&&(i.event.special.uiTransitionEnd={bindType:i.support.transition.end,delegateType:i.support.transition.end,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})},function(t,e,n){function r(t){return i(this).each(function(){var e=i(this),n=e.data("ui.scroller");n||e.data("ui.scroller",n=new s(e,t)),"string"==typeof t&&n[t]()})}var i=n(1),s=function(t,e){this.$el=i(t),this.options=i.extend({},s.DEFUALTS,e),this.init()};s.prototype={constructor:s,init:function(){this.$items=this.$el.find(this.options.item),this.max=this.$items.length,this.max<=1||(this.$el.addClass("scroller"+(this.options.dir?"":" reverse")),this.$items.slice(1,this.max).addClass("ready"),this.controller=null,this.current=0,this.run())},run:function(){this.start(),this.$el.on("mouseenter",i.proxy(this.stop,this)),this.$el.on("mouseleave",i.proxy(this.start,this))},start:function(){this.controller=setInterval(i.proxy(this.interval,this),this.options.interval)},stop:function(){clearInterval(this.controller)},interval:function(){this.current=this.current>=this.max-1?0:++this.current;var t=this.getActiveIndexs();this.$items.eq(t[0]).removeClass("enter").addClass("leave").one("uiTransitionEnd",function(){i(this).removeClass("leave").addClass("ready")}).emulateTransitionEnd(this.options.timer),this.$items.eq(t[1]).addClass("enter")},getActiveIndexs:function(){return[this.current-1<0?this.max-1:this.current-1,this.current]},destroy:function(){return this.stop(),this.$el.detach().remove(),null}},s.DEFUALTS={timer:300,item:"li",interval:3e3,dir:1},i.fn.Scroller=r,i.fn.Scroller.constructor=s,t.exports=s}])});