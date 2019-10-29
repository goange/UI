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

