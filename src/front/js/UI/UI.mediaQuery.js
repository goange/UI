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
