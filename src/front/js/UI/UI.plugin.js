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