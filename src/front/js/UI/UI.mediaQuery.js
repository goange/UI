/**
* UI.mediaQuery
* -----------------------------------------
* import : assets/js/plugins/enquire.js - http://wicky.nillia.ms/enquire.js
* -----------------------------------------
*/

UI.mediaQuery = (function(){
	var init = function(){
			var xs = Number(UI.breakpoint.XS)
				, sm = Number(UI.breakpoint.SM)
				, md = Number(UI.breakpoint.MD)
				, lg = Number(UI.breakpoint.LG)
				, breakpoint = md
			;

			var query_breakpoint_under = "screen and (min-width : 0) and (max-width :"+ breakpoint +"px)";
			var query_breakpoint_upper = "screen and (min-width : "+ Number(breakpoint + 1) +"px)"

			var query_xs = "screen and (min-width : 0) and (max-width :"+ sm +"px)"
				, query_sm = "screen and (min-width : "+ Number(sm + 1) +"px) and (max-width :"+ md +"px )"
				, query_md = "screen and (min-width : "+ Number(md + 1) +"px)"
				, query_lg = "screen and (min-width : "+ Number(lg) +"px)"
			;

			//Responsive breakpoint
			enquire
				.register(query_breakpoint_under, {
					match : function() {
						UI.jMap.html.removeClass('tablet-upper').addClass('tablet-under');
						UI.breakpoint.is_under = true;
						UI.breakpoint.is_upper = false;
						if(UI.vMap.testFlag) $('header').css('background', 'red');
					}
				})
				.register(query_breakpoint_upper, {
					match : function() {
						UI.jMap.html.removeClass('tablet-under').addClass('tablet-upper');
						UI.breakpoint.is_under = false;
						UI.breakpoint.is_upper = true;
						if(UI.vMap.testFlag) $('header').css('background', 'skyblue');
					}
				})
			;

			//xs~lg
			enquire
				.register(query_xs, {
					match : function() {
						UI.jMap.html.addClass('mo-size');
						UI.jMap.html.removeClass('tablet-size').removeClass('pc-size');
						UI.jMap.html.attr('data-breakpoint', 'xs');
						UI.breakpoint.is_mobile = true;
						UI.breakpoint.is_tablet = false;
						UI.breakpoint.is_pc = false;
					}
					, unmatch : function() {}
					, destroy : function() {}
				})
				.register(query_sm, {
					match : function() {
						UI.jMap.html.addClass('tablet-size');
						UI.jMap.html.removeClass('pc-size').removeClass('mo-size');
						UI.jMap.html.attr('data-breakpoint', 'sm');
						UI.breakpoint.is_mobile = false;
						UI.breakpoint.is_tablet = true;
						UI.breakpoint.is_pc = false;
					}
				})
				.register(query_md, {
					match : function() {
						UI.jMap.html.addClass('pc-size');
						UI.jMap.html.removeClass('mo-size').removeClass('tablet-size');
						UI.jMap.html.attr('data-breakpoint', 'md');
						UI.breakpoint.is_mobile = false;
						UI.breakpoint.is_tablet = false;
						UI.breakpoint.is_pc = true;
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
