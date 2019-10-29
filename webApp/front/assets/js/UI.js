/**
* UI 
* -----------------------------------------
* @Start : 2019.10.23
* @Version : 0.00000000000000001
*/


(function(context) {
	"use strict";
	var UI = UI || {}
	context.UI = UI;
})(window);




/**
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
UI = (function(){
	'use strict';

	//Global Variable
	UI.jMap, UI.cMap, UI.vMap, UI.breakpoint

	var setMap, page, init;

	setMap = function(){
		UI.jMap = {
			html : $('html')
			, body : $('body')
			, wrapper : $('.wrap')
			, header : $('.ui-header')
			, navbar  : $('.ui-navbar ')
			, sidebar : $('.ui-sidebar')
			, container : $('.ui-container')
			, content : $('.ui-content')
			, footer : $('.ui-footer')
			// , modal : $('.modal')
			// , dimm : $('.dimm-layer.close-layer')
		}
		, UI.cMap = {
			RIGHTBAR_OPEN : 'rightbar-open'//x
			, RIGHTBAR_TOGGLE : 'rightbar-toggle'
			, RIGHTBAR_TOGGLE_MO : 'rightbar-toggle-mo'//x
		}
		, UI.vMap = {
			loginFlag : false
			, testFlag : true // 테스트 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
			, is_modal : false

			, page : {
				loadCnt : 0 //초기 Loaded 아닌  ajax Loaded 카운트 체크
				, is_firstLoad : true
				, is_main : false
			}
		}
		, UI.breakpoint = {
			//Bootstrap : xs : 576 , sm : 768 , md : 992 , lg : 1200
			xs : 576
			, sm : 720
			, md : 990
			, lg : 1600

			, is_mobileSize : false
			, is_tabletSize : false
			, is_pcSize : false
			, is_tabletUnder : false
			, is_tabletUpper : false
		}
	}//End of setMap


	page = {
		init : function(){
			//onLoad(초기 로드), cpLoad(contentPage 로드)
			if(UI.jMap.html.hasClass('onLoad')) {
				UI.vMap.page.is_firstLoad = false;
				UI.jMap.html.removeClass('cpLoad'+UI.vMap.page.loadCnt);
				UI.vMap.page.loadCnt ++;
				UI.jMap.html.addClass('cpLoad'+UI.vMap.page.loadCnt);
			} else {
				UI.jMap.html.addClass('onLoad');
			}
			//Page TYPE
			if(UI.jMap.wrapper.hasClass('cate_main')) UI.vMap.page.is_main = true;
		}
	}//End of Page

	init = function(_param){
		if(_param) UI.vMap.loginFlag  = _param.loginFlag;

		setMap();
		page.init();
		UI.mediaQuery.init();
		UI.plugin.init();
		UI.layout.init();

		//메인
		if(UI.vMap.page.is_main){

		}
		//서브 & 팝업
		else{
			//UI.main.init();
		}
	}//End of init

	return {
		init: init
	};
}());



/**
* UI Util
* -----------------------------------------
*/

UI.util = (function(){
	var isValid, scrollCheck, resizeCheck;

	isValid = function(variables) {
			if (variables == null || variables == undefined || variables === '' || variables == 'undefine') return false;
			else return true;
	}

	scrollCheck = function(_callback){
		var
			intervalID
			, cnt = 0
			, tmp = 0
			, flag = false
			, aniSpeed = 360
		;
		var scrollEndCheck=function(_callback){
			clearInterval(intervalID);
			intervalID=setInterval(function(){
				if(tmp == cnt){
					clearInterval(intervalID);
					cnt = 0;
					tmp = 0;
					if(_callback) _callback();
					setTimeout(function(){
						flag = false;
					}, aniSpeed);
				}
				tmp = cnt;
			},200);
		};
		$(window).scroll(function(event) {
			cnt++;
			if(!flag) {
				flag = true;
				scrollEndCheck(_callback);
			}
		});
	}

	resizeCheck = function(_callback){
		var
			intervalID
			, cnt = 0
			, tmp = 0
			, flag = false
			, delay = 600
		;
		var check=function(){
			clearInterval(intervalID);
			intervalID = setInterval(function(){
				if(tmp == cnt){
					clearInterval(intervalID);
					cnt=0;
					tmp=0;
					if(_callback) _callback();
					setTimeout(function(){
						flag = false;
						return false;
					}, delay);
				}
				tmp = cnt;
			},360);
		};
		$(window).resize(function(event) {
			cnt++;
			if(!flag) {
				flag = true;
				check();
			}
		});
	}

	return{
		isValid : isValid
		, scrollCheck : scrollCheck
		, resizeCheck : resizeCheck
	}
}());


/**
* UI.mediaQuery
* -----------------------------------------
* import : assets/js/plugins/enquire.js - http://wicky.nillia.ms/enquire.js
* -----------------------------------------
*/

UI.mediaQuery = (function(){
	var init = function(){
			var xs = Number(UI.breakpoint.xs)
				, sm = Number(UI.breakpoint.sm)
				, md = Number(UI.breakpoint.md)
				, lg = Number(UI.breakpoint.lg)
			;

			var query_breakpoint = "screen and (min-width : 0) and (max-width :"+ md +"px)";

			var query_xs = "screen and (min-width : 0) and (max-width :"+ sm +"px)"
				, query_sm = "screen and (min-width : "+ Number(sm + 1) +"px) and (max-width :"+ md +"px )"
				, query_md = "screen and (min-width : "+ Number(md + 1) +"px)"
				, query_lg = "screen and (min-width : "+ Number(lg) +"px)"
			;

			//Responsive breakpoint
			enquire
				.register(query_breakpoint, {
					match : function() {
						UI.jMap.html.removeClass('tablet-upper').addClass('tablet-under');
						UI.breakpoint.is_tabletUnder = true;
						UI.breakpoint.is_tabletUpper = false;
						if(UI.vMap.testFlag) $('header').css('background', 'red');
					}
					, unmatch : function() {
						UI.jMap.html.removeClass('tablet-under').addClass('tablet-upper');
						UI.breakpoint.is_tabletUnder = false;
						UI.breakpoint.is_tabletUpper = true;
						if(UI.vMap.testFlag) $('header').css('background', 'skyblue');
					}
					, destroy : function() {}
				})
			;

			//xs~lg
			enquire
				.register(query_xs, {
					match : function() {
						UI.jMap.html.addClass('mo-size');
						UI.jMap.html.removeClass('tablet-size').removeClass('pc-size');
						UI.jMap.html.attr('data-breakpoint', 'xs');
						UI.breakpoint.is_mobileSize = true;
						UI.breakpoint.is_tabletSize = false;
						UI.breakpoint.is_pcSize = false;
					}
					, unmatch : function() {}
					, destroy : function() {}
				})
				.register(query_sm, {
					match : function() {
						UI.jMap.html.addClass('tablet-size');
						UI.jMap.html.removeClass('pc-size').removeClass('mo-size');
						UI.jMap.html.attr('data-breakpoint', 'sm');
						UI.breakpoint.is_mobileSize = false;
						UI.breakpoint.is_tabletSize = true;
						UI.breakpoint.is_pcSize = false;
					}
				})
				.register(query_md, {
					match : function() {
						UI.jMap.html.addClass('pc-size');
						UI.jMap.html.removeClass('mo-size').removeClass('tablet-size');
						UI.jMap.html.attr('data-breakpoint', 'md');
						UI.breakpoint.is_mobileSize = false;
						UI.breakpoint.is_tabletSize = false;
						UI.breakpoint.is_pcSize = true;
					}
				})
				.register(query_lg, {
					match : function() {
						UI.jMap.html.attr('data-breakpoint', 'lg');
						UI.jMap.html.addClass('lg-size');
					}
					, unmatch : function() {
						UI.jMap.html.removeClass('lg-size');
					}
				})
			;
	}

	return{
		init : init
	}
}());

/**
* UI.plugin
* -----------------------------------------
* import : assets/js/plugins/perfect-scrollbar.js
* -----------------------------------------
*/

UI.plugin = (function(){
	var perfectScrollbar, init;

	perfectScrollbar = function(){
		var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
		if (isWindows) {
			$('.ui-sidebar .sidebar-wrap').perfectScrollbar();
			$('.perfect-scroll').perfectScrollbar();
			$('.modal-body').perfectScrollbar();
			UI.jMap.html.addClass('perfect-scrollbar-on');
		} else {
			UI.jMap.html.addClass('perfect-scrollbar-off');
		}
	}

	init = function(){
		if(UI.jMap.html.hasClass('desktop')) perfectScrollbar();
	}

	return {
		init : init
	}
}());
/**
* UI.layout
* -----------------------------------------
* import : UI
* Import : UI.mediaQuery
* -----------------------------------------
*/

UI.layout = (function(){
	var jMap, hMap, cMap, vMap;
	var setMap, sidebar, rightbar, init;

	setMap = function(){
		jMap ={
			sidebarToggleBtn : $('.layout-sidebar-toggle')
			, sidebarCloseBtn : $('.layout-sidebar-close')
			, rightbarCloseBtn : $('.layout-rightbar-close')
		}
		, hMap={
			SIDEBAR_DIMM : $('<div class="sidebar-dimm"></div>')
		}
		, cMap = {
			MOBILE_INIT : 'ui-mobile-init'
			, SIDEBAR_CLOSE : 'sidebar-close'
			, SIDEBAR_DIMM : 'sidebar-dimm'
		}
		,vMap = {
			sidebarToggle : true
			, sidebarToggle_mo : false
			, sidebarDimm : true
		}
	}//End of setMap

	sidebar = {
		init : function(){
			sidebar.dimm();
			sidebar.handler();
			sidebar.watch();
		}

		, dimm : function(){
			var $dimm = $('<div class="'+cMap.SIDEBAR_DIMM+'"></div>');
			if (vMap.sidebarDimm) {
				$dimm.appendTo(UI.jMap.body);
			}
		}
		, open : function(){
			UI.jMap.body.removeClass(cMap.SIDEBAR_CLOSE);
			if(UI.breakpoint.is_tabletUnder){
				var $dimm = $('.'+cMap.SIDEBAR_DIMM);
				$dimm.addClass('visible');
			}
		}
		, close : function(){
			UI.jMap.body.addClass(cMap.SIDEBAR_CLOSE);
			if(UI.breakpoint.is_tabletUnder){
				var $dimm = $('.'+cMap.SIDEBAR_DIMM);
				$dimm.removeClass('visible');
			}
		}
		, open_pc : function(){
			var $dimm = $('.'+cMap.SIDEBAR_DIMM);
			$dimm.addClass('visible');
			UI.jMap.body.removeClass(cMap.SIDEBAR_CLOSE);
		}
		, close_mo : function(){
			var $dimm = $('.'+cMap.SIDEBAR_DIMM);
			$dimm.removeClass('visible');
			UI.jMap.body.addClass(cMap.SIDEBAR_CLOSE);
		}
		, watch : function(){
			$(window).resize(function () {
				if(UI.breakpoint.is_tabletUnder){
					sidebar.close_mo();
				}else{
					if(vMap.sidebarToggle) sidebar.open_pc();
				}
			}).resize();
		}
		, handler : function(){
			jMap.sidebarToggleBtn.click(function() {
				/*if(UI.breakpoint.is_tabletUnder){

				}else{
					vMap.sidebarToggle = ! vMap.sidebarToggle; 
				}*/

				if(UI.breakpoint.is_tabletUpper){
					vMap.sidebarToggle = ! vMap.sidebarToggle; 
				}

				var toggle = UI.jMap.body.hasClass(cMap.SIDEBAR_CLOSE)
				if(toggle){
					sidebar.open();
				} else{
					sidebar.close();
				}
			});

			 $('.'+cMap.SIDEBAR_DIMM).click(function() {
				sidebar.close();
			});

			jMap.sidebarCloseBtn.click(function(){
				sidebar.close();
			});
		}
	}//End of sidebar

	rightbar ={
		init : function(){
			rightbar.handler();
		}
		, open : function(){
			UI.jMap.body.addClass(UI.cMap.RIGHTBAR_TOGGLE);
		}
		, close : function(){
			UI.jMap.body.removeClass(UI.cMap.RIGHTBAR_TOGGLE);
		}
		, handler : function(){
			jMap.rightbarCloseBtn.on('click', function(){
					rightbar.close();
			});
		}
	}//End of rightbar

	init = function(_param){
		setMap();

		//공통 & 최초 로드시
		if(UI.vMap.page.is_firstLoad){
			if(UI.jMap.sidebar.length >0) {
				sidebar.init();
				rightbar.init();
				UI.jMap.body.removeClass(cMap.MOBILE_INIT);
			}
		}
	}//End of Init

	return {
		init : init
		, rightbar : rightbar
	}
}());


/**
* Template Function Guide 
* -----------------------------------------
*/

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
