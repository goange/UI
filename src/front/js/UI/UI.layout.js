/**
* UI.layout
* -----------------------------------------
* import : UI
* Import : UI.mediaQuery
* -----------------------------------------
*/

UI.layout = (function(){
	var jMap, hMap, cMap, vMap;
	var setMap, leftbar, rightbar, init;

	setMap = function(){
		jMap ={
			leftbarToggleBtn : $('.btn-leftbar-toggle')
			, rightbarToggleBtn : $('.btn-rightbar-toggle')
			, leftbarCloseBtn : $('.btn-leftbar-close')
			, rightbarCloseBtn : $('.btn-rightbar-close')
		}
		, hMap={
			LEFTBAR_DIMM : $('<div class="leftbar-dimm"></div>')
		}
		, cMap = {
			MOBILE_INIT : 'ui-mobile-init' //초기 모바일 튀는 현상 방지(ex. 네비게이션)
			, LEFTBAR_CLOSE : 'leftbar-close'
			, LEFTBAR_DIMM : 'leftbar-dimm'
			, RIGHTBAR_CLOSE : 'rightbar-close'
			, RIGHTBAR_DIMM : 'rightbar-dimm'
		}
		,vMap = {
			leftbarToggle : true
			, rightbarToggle : true
			// , leftbarToggle_mo : false
			, leftbarDimm : true
			, rightbarDimm : true
		}
	}//End of setMap

	leftbar = {
		init : function(){
			leftbar.dimm();
			leftbar.handler();
			leftbar.watch();
		}
		, dimm : function(){
			var $dimm = $('<div class="'+cMap.LEFTBAR_DIMM+'"></div>');
			if (vMap.leftbarDimm) {
				$dimm.appendTo(UI.jMap.body);
			}
		}
		, open : function(){
			UI.jMap.body.removeClass(cMap.LEFTBAR_CLOSE);
			if(UI.breakpoint.is_under){
				var $dimm = $('.'+cMap.LEFTBAR_DIMM);
				$dimm.addClass('visible');
			}
		}
		, close : function(){
			UI.jMap.body.addClass(cMap.LEFTBAR_CLOSE);
			if(UI.breakpoint.is_under){
				var $dimm = $('.'+cMap.LEFTBAR_DIMM);
				$dimm.removeClass('visible');
			}
		}
		, watch : function(){
			$(window).resize(function () {
				if(UI.breakpoint.is_under){
					leftbar.close();
				}else{
					if(vMap.leftbarToggle) leftbar.open();
				}
			}).resize();
		}
		, handler : function(){
			jMap.leftbarToggleBtn.click(function() {
				if(UI.breakpoint.is_upper){
					vMap.leftbarToggle = ! vMap.leftbarToggle; 
				}
				var toggle = UI.jMap.body.hasClass(cMap.LEFTBAR_CLOSE)
				if(toggle){
					leftbar.open();
				} else{
					leftbar.close();
				}
			});

			 $('.'+cMap.LEFTBAR_DIMM).click(function() {
				leftbar.close();
			});

			jMap.leftbarCloseBtn.click(function(){
				leftbar.close();
			});
		}
	}//End of leftbar

	rightbar2 ={
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

	rightbar = {
		init : function(){
			rightbar.dimm();
			rightbar.handler();
			rightbar.watch();
		}
		, dimm : function(){
			var $dimm = $('<div class="'+cMap.RIGHTBAR_DIMM+'"></div>');
			if (vMap.rightbarDimm) {
				$dimm.appendTo(UI.jMap.body);
			}
		}
		, open : function(){
			UI.jMap.body.removeClass(cMap.RIGHTBAR_CLOSE);
			if(UI.breakpoint.is_under){
				var $dimm = $('.'+cMap.RIGHTBAR_DIMM);
				$dimm.addClass('visible');
			}
		}
		, close : function(){
			UI.jMap.body.addClass(cMap.RIGHTBAR_CLOSE);
			if(UI.breakpoint.is_under){
				var $dimm = $('.'+cMap.RIGHTBAR_DIMM);
				$dimm.removeClass('visible');
			}
		}
		, watch : function(){
			$(window).resize(function () {
				if(UI.breakpoint.is_under){
					rightbar.close();
				}else{
					if(vMap.rightbarToggle) rightbar.open();
				}
			}).resize();
		}
		, handler : function(){
			jMap.rightbarToggleBtn.click(function() {
				if(UI.breakpoint.is_upper){
					vMap.rightbarToggle = ! vMap.rightbarToggle; 
				}
				var toggle = UI.jMap.body.hasClass(cMap.RIGHTBAR_CLOSE)
				if(toggle){
					rightbar.open();
				} else{
					rightbar.close();
				}
			});

			 $('.'+cMap.RIGHTBAR_DIMM).click(function() {
				rightbar.close();
			});

			jMap.rightbarCloseBtn.click(function(){
				rightbar.close();
			});
		}
	}//End of leftbar

	init = function(_param){
		setMap();

		//공통 & 최초 로드시
		if(UI.vMap.page.is_firstLoad){
			if(UI.jMap.leftbar.length >0) {
				leftbar.init();
				rightbar.init();

				UI.jMap.body.removeClass(cMap.MOBILE_INIT)
			}
		}
	}//End of Init

	return {
		init : init
		, leftbar : leftbar
		, rightbar : rightbar
	}
}());

