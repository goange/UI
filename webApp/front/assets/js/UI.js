/**
* UI 
* -----------------------------------------
* @Start : 2019.10.23
* @Version : 0.00000000000000001
*/
!function(e){"use strict";var a=a||{};e.UI=a}(window),/**
* Template Function Guide 
* -----------------------------------------
*/
/*
UI.template = (function(){
	'use strict';

	var 변수명1, 변수명2;
	var 메서드1, init;

	메서드1 = function(){}

	init =function(){
		//초기 실행
	}

	return {
		init: init
	};
}());
*/
/**
* UI
* -----------------------------------------
* @param loginFlag : true (로그인후), false(로그인전)
* - jMap : jQuery Selector 
* - cMap : className 
* - vMap : Variable Definition
*/
UI=function(){"use strict";
//Global Variable
UI.jMap,UI.cMap,UI.vMap,UI.breakpoint;var e,a,i;//End of init
//End of setMap
//End of Page
return e=function(){UI.jMap={html:$("html"),body:$("body"),wrapper:$(".wrap"),header:$(".ui-header"),navbar:$(".ui-navbar "),leftbar:$(".ui-leftbar"),container:$(".ui-container"),content:$(".ui-content"),footer:$(".ui-footer")},UI.cMap={},UI.vMap={loginFlag:!1,testFlag:!0,is_modal:!1,page:{loadCnt:0,is_firstLoad:!0,is_main:!1}},UI.breakpoint={
//Bootstrap : xs : 576 , sm : 768 , md : 992 , lg : 1200
XS:576,SM:720,MD:990,LG:1600,is_mobile:!1,is_tablet:!1,is_pc:!1,is_under:!1,is_upper:!1}},a={init:function(){
//onLoad(초기 로드), cpLoad(contentPage 로드)
UI.jMap.html.hasClass("onLoad")?(UI.vMap.page.is_firstLoad=!1,UI.jMap.html.removeClass("cpLoad"+UI.vMap.page.loadCnt),UI.vMap.page.loadCnt++,UI.jMap.html.addClass("cpLoad"+UI.vMap.page.loadCnt)):UI.jMap.html.addClass("onLoad"),
//Page TYPE
UI.jMap.wrapper.hasClass("cate_main")&&(UI.vMap.page.is_main=!0)}},i=function(i){i&&(UI.vMap.loginFlag=i.loginFlag),e(),a.init(),UI.mediaQuery.init(),UI.plugin.init(),
// UI.layout.init();
UI.layout.leftFix.init(),UI.vMap.page.is_main},{init:i}}(),/**
* UI Util
* -----------------------------------------
*/
UI.util=function(){var e,a,i;return e=function(e){return null!=e&&void 0!=e&&""!==e&&"undefine"!=e},a=function(e){var a,i=0,t=0,n=!1,o=function(e){clearInterval(a),a=setInterval(function(){t==i&&(clearInterval(a),i=0,t=0,e&&e(),setTimeout(function(){n=!1},360)),t=i},200)};$(window).scroll(function(a){i++,n||(n=!0,o(e))})},i=function(e){var a,i=0,t=0,n=!1,o=function(){clearInterval(a),a=setInterval(function(){t==i&&(clearInterval(a),i=0,t=0,e&&e(),setTimeout(function(){return n=!1,!1},600)),t=i},360)};$(window).resize(function(e){i++,n||(n=!0,o())})},{isValid:e,scrollCheck:a,resizeCheck:i}}(),/**
* UI.mediaQuery
* -----------------------------------------
* import : assets/js/plugins/enquire.js - http://wicky.nillia.ms/enquire.js
* -----------------------------------------
*/
UI.mediaQuery=function(){return{init:function(){var e=(Number(UI.breakpoint.XS),Number(UI.breakpoint.SM)),a=Number(UI.breakpoint.MD),i=Number(UI.breakpoint.LG),t=a,n="screen and (min-width : 0) and (max-width :"+t+"px)",o="screen and (min-width : "+Number(t+1)+"px)",r="screen and (min-width : 0) and (max-width :"+e+"px)",l="screen and (min-width : "+Number(e+1)+"px) and (max-width :"+a+"px )",s="screen and (min-width : "+Number(a+1)+"px)",c="screen and (min-width : "+Number(i)+"px)";
//Responsive breakpoint
enquire.register(n,{match:function(){UI.jMap.html.removeClass("tablet-upper").addClass("tablet-under"),UI.breakpoint.is_under=!0,UI.breakpoint.is_upper=!1,UI.vMap.testFlag&&$("header").css("background","red")}}).register(o,{match:function(){UI.jMap.html.removeClass("tablet-under").addClass("tablet-upper"),UI.breakpoint.is_under=!1,UI.breakpoint.is_upper=!0,UI.vMap.testFlag&&$("header").css("background","skyblue")}}),
//xs~lg
enquire.register(r,{match:function(){UI.jMap.html.addClass("mo-size"),UI.jMap.html.removeClass("tablet-size").removeClass("pc-size"),UI.jMap.html.attr("data-breakpoint","xs"),UI.breakpoint.is_mobile=!0,UI.breakpoint.is_tablet=!1,UI.breakpoint.is_pc=!1},unmatch:function(){},destroy:function(){}}).register(l,{match:function(){UI.jMap.html.addClass("tablet-size"),UI.jMap.html.removeClass("pc-size").removeClass("mo-size"),UI.jMap.html.attr("data-breakpoint","sm"),UI.breakpoint.is_mobile=!1,UI.breakpoint.is_tablet=!0,UI.breakpoint.is_pc=!1}}).register(s,{match:function(){UI.jMap.html.addClass("pc-size"),UI.jMap.html.removeClass("mo-size").removeClass("tablet-size"),UI.jMap.html.attr("data-breakpoint","md"),UI.breakpoint.is_mobile=!1,UI.breakpoint.is_tablet=!1,UI.breakpoint.is_pc=!0}}).register(c,{match:function(){UI.jMap.html.attr("data-breakpoint","lg"),UI.jMap.html.addClass("lg-size")},unmatch:function(){UI.jMap.html.removeClass("lg-size")}})}}}(),/**
* UI.plugin
* -----------------------------------------
* import : assets/js/plugins/perfect-scrollbar.js
* -----------------------------------------
*/
UI.plugin=function(){var e,a;return e=function(){navigator.platform.indexOf("Win")>-1?($(".ui-sidebar .sidebar-wrap").perfectScrollbar(),$(".perfect-scroll").perfectScrollbar(),$(".modal-body").perfectScrollbar(),UI.jMap.html.addClass("perfect-scrollbar-on")):UI.jMap.html.addClass("perfect-scrollbar-off")},a=function(){UI.jMap.html.hasClass("desktop")&&e()},{init:a}}(),/**
* UI.layout
* -----------------------------------------
* import : UI
* Import : UI.mediaQuery
* -----------------------------------------
*/
UI.layout=function(){var e,a,i,t,n,o,r,l;//End of Init
//End of setMap
//End of leftbar
//End of rightbar
//End of leftbar
return n=function(){e={leftbarToggleBtn:$(".btn-leftbar-toggle"),rightbarToggleBtn:$(".btn-rightbar-toggle"),leftbarCloseBtn:$(".btn-leftbar-close"),rightbarCloseBtn:$(".btn-rightbar-close")},a={LEFTBAR_DIMM:$('<div class="leftbar-dimm"></div>')},i={MOBILE_INIT:"ui-mobile-init",LEFTBAR_CLOSE:"leftbar-close",LEFTBAR_DIMM:"leftbar-dimm",RIGHTBAR_CLOSE:"rightbar-close",RIGHTBAR_DIMM:"rightbar-dimm"},t={leftbarToggle:!0,rightbarToggle:!0,leftbarDimm:!0,rightbarDimm:!0}},o={init:function(){o.dimm(),o.handler(),o.watch()},dimm:function(){var e=$('<div class="'+i.LEFTBAR_DIMM+'"></div>');t.leftbarDimm&&e.appendTo(UI.jMap.body)},open:function(){if(UI.jMap.body.removeClass(i.LEFTBAR_CLOSE),UI.breakpoint.is_under){$("."+i.LEFTBAR_DIMM).addClass("visible")}},close:function(){if(UI.jMap.body.addClass(i.LEFTBAR_CLOSE),UI.breakpoint.is_under){$("."+i.LEFTBAR_DIMM).removeClass("visible")}},watch:function(){$(window).resize(function(){UI.breakpoint.is_under?o.close():t.leftbarToggle&&o.open()}).resize()},handler:function(){e.leftbarToggleBtn.click(function(){UI.breakpoint.is_upper&&(t.leftbarToggle=!t.leftbarToggle),UI.jMap.body.hasClass(i.LEFTBAR_CLOSE)?o.open():o.close()}),$("."+i.LEFTBAR_DIMM).click(function(){o.close()}),e.leftbarCloseBtn.click(function(){o.close()})}},rightbar2={init:function(){r.handler()},open:function(){UI.jMap.body.addClass(UI.cMap.RIGHTBAR_TOGGLE)},close:function(){UI.jMap.body.removeClass(UI.cMap.RIGHTBAR_TOGGLE)},handler:function(){e.rightbarCloseBtn.on("click",function(){r.close()})}},r={init:function(){r.dimm(),r.handler(),r.watch()},dimm:function(){var e=$('<div class="'+i.RIGHTBAR_DIMM+'"></div>');t.rightbarDimm&&e.appendTo(UI.jMap.body)},open:function(){if(UI.jMap.body.removeClass(i.RIGHTBAR_CLOSE),UI.breakpoint.is_under){$("."+i.RIGHTBAR_DIMM).addClass("visible")}},close:function(){if(UI.jMap.body.addClass(i.RIGHTBAR_CLOSE),UI.breakpoint.is_under){$("."+i.RIGHTBAR_DIMM).removeClass("visible")}},watch:function(){$(window).resize(function(){UI.breakpoint.is_under?r.close():t.rightbarToggle&&r.open()}).resize()},handler:function(){e.rightbarToggleBtn.click(function(){UI.breakpoint.is_upper&&(t.rightbarToggle=!t.rightbarToggle),UI.jMap.body.hasClass(i.RIGHTBAR_CLOSE)?r.open():r.close()}),$("."+i.RIGHTBAR_DIMM).click(function(){r.close()}),e.rightbarCloseBtn.click(function(){r.close()})}},l=function(e){n(),
//공통 & 최초 로드시
UI.vMap.page.is_firstLoad&&UI.jMap.leftbar.length>0&&(o.init(),r.init(),UI.jMap.body.removeClass(i.MOBILE_INIT))},{init:l,leftbar:o,rightbar:r}}(),/**
* UI.layout.leftFix
* -----------------------------------------
* import : UI
* Import : UI.mediaQuery
* -----------------------------------------
*/
UI.layout.leftFix=function(){var e,a,i,t,n,o,r,l,s;//End of Init
//End of setMap
//End of leftbar
//End of rightbar
//End of leftFix
return n=function(){e={leftbarToggleBtn:$(".btn-leftbar-toggle"),rightbarToggleBtn:$(".btn-rightbar-toggle"),leftbarCloseBtn:$(".btn-leftbar-close"),rightbarCloseBtn:$(".btn-rightbar-close")},a={LEFTBAR_DIMM:$('<div class="leftbar-dimm"></div>')},i={MOBILE_INIT:"ui-mobile-init",LEFTBAR_CLOSE:"leftbar-close",LEFTBAR_DIMM:"leftbar-dimm",RIGHTBAR_CLOSE:"rightbar-close",RIGHTBAR_DIMM:"rightbar-dimm"},t={leftbarToggle:!0,rightbarToggle:!0}},o={init:function(){o.dimm(),o.handler(),o.watch()},dimm:function(){$('<div class="'+i.LEFTBAR_DIMM+'"></div>').appendTo(UI.jMap.body)},open:function(){if(UI.jMap.body.removeClass(i.LEFTBAR_CLOSE),UI.breakpoint.is_under){$("."+i.LEFTBAR_DIMM).addClass("visible")}},close:function(){if(UI.jMap.body.addClass(i.LEFTBAR_CLOSE),UI.breakpoint.is_under){$("."+i.LEFTBAR_DIMM).removeClass("visible")}},watch:function(){$(window).resize(function(){UI.breakpoint.is_under?o.close():t.leftbarToggle&&o.open()}).resize()},handler:function(){e.leftbarToggleBtn.click(function(){UI.breakpoint.is_upper&&(t.leftbarToggle=!t.leftbarToggle),UI.jMap.body.hasClass(i.LEFTBAR_CLOSE)?o.open():o.close()}),$("."+i.LEFTBAR_DIMM).click(function(){o.close()}),e.leftbarCloseBtn.click(function(){o.close()})}},r={init:function(){r.dimm(),r.handler(),r.watch()},dimm:function(){$('<div class="'+i.RIGHTBAR_DIMM+'"></div>').appendTo(UI.jMap.body)},open:function(){if(UI.jMap.body.removeClass(i.RIGHTBAR_CLOSE),UI.breakpoint.is_under){$("."+i.RIGHTBAR_DIMM).addClass("visible")}},close:function(){if(UI.jMap.body.addClass(i.RIGHTBAR_CLOSE),UI.breakpoint.is_under){$("."+i.RIGHTBAR_DIMM).removeClass("visible")}},watch:function(){$(window).resize(function(){UI.breakpoint.is_under?r.close():t.rightbarToggle&&r.open()}).resize()},handler:function(){e.rightbarToggleBtn.click(function(){UI.breakpoint.is_upper&&(t.rightbarToggle=!t.rightbarToggle),UI.jMap.body.hasClass(i.RIGHTBAR_CLOSE)?r.open():r.close()}),$("."+i.RIGHTBAR_DIMM).click(function(){r.close()}),e.rightbarCloseBtn.click(function(){r.close()})}},s={init:function(e){t={leftbarToggle:!0,rightbarToggle:!1},UI.jMap.body.addClass(i.LEFTBAR_CLOSE),UI.jMap.body.addClass(i.RIGHTBAR_CLOSE)}},l=function(e){
//공통 & 최초 로드시
if(n(),UI.vMap.page.is_firstLoad&&UI.jMap.leftbar.length>0){o.init(),r.init(),s.init("cover"),UI.jMap.body.removeClass(i.MOBILE_INIT);var a=$("body").data("layout-option");
// console.log('layout : '+data[0], data[1]);
// console.log('layout : '+$('body').data('layout-option').type);
// console.log('layout : '+$('body').data('layout-option').nav_pc);
// console.log('layout : '+$('body').data('layout-option').mo_pc);
console.log("test :"+a.type),console.log("test :"+a.type)}},{init:l,leftbar:o,rightbar:r}}();