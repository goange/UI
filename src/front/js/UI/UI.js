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
			XS : 576
			, SM : 720
			, MD : 990
			, LG : 1600
			//3단계 breakpoint
			, is_mobile : false
			, is_tablet : false
			, is_pc : false
			//2단게 breakpoint(ex : Navigation show hide )
			, is_under : false 
			, is_upper : false
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


