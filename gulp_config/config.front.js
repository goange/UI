module.exports = function() {

	/**
	* SET PATH
	* --------------------------------------
	*/
	var source = 'src/front/'
		, webRoot = 'webApp/front/'

		, src = {
			root 		: 		source
			, js 		: 			source + 'js/UI'
			, sass	 	: 	source + 'scss/'
		}
		, dev = {
			root 		: 		webRoot
			, js 		: 			webRoot + 'assets/js'
			, css 		: 		webRoot + 'assets/css/'
		}
	;

	return {
		html : {
			src : dev.root+ '**/*.html'
		}
		, sass : {
			src : src.sass + '/**/*.{scss,sass}'
			, compassSrc : src.sass
			, dest : dev.css
		}
		/*, sass_option : {
			css: dev.css
			, sass: src.sass
			, sourcemap: true
			, style: 'compressed'// Option : nested, expaned, compact, compressed (x)
		}*/
		, gulp_sass_option : {
			css: dev.css
			, sass: src.sass
			, sourcemap: true
			, outputStyle: 'compressed'// Option : nested, expaned, compact, compressed// Current ING
		}
		, js :{
			src : src.js + '**/*.js'
			, dest : dev.js
			, srcFileList : [//병합할 파일들
				src.js + '/UI.js'
				, src.js + '/UI.util.js'
				, src.js + '/UI.mediaQuery.js'
				, src.js + '/UI.plugin.js'
				, src.js + '/UI.layout.js'
				, src.js + '/UI.layout.leftFix.js'
				// , src.js + '/UI.template.js'
			]
			, destFileName : 'UI.js' //병합 파일명
		}
		, server : {
			root : [webRoot, '../']
			, port : 9100
			, livereload : true
			, open : {
				file : 'index.html'
				, browser: 'chrome' // chrome or (Google Chrome), iexplore, safari ...
			}
		}
	};
};
