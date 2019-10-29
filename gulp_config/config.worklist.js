module.exports = function() {

	/**
	* 경로 설정
	* --------------------------------------
	* js.srcFilseList 병합 파일 경로는 직접 적어주세요
	*/
	var source = 'src/worklist/'
		, webRoot = 'webApp/front/html/'

		, src = {
			root 		: 		source
			, js 		: 		source + 'js'
			, sass	 	: 		source + 'scss'
		}
		, dev = {
			root 		: 		webRoot
			, js 		: 		webRoot + '_pub_guide/resource/js'
			, css 		: 		webRoot + '_pub_guide/resource/css'
		}
	;

	return {
		html : {
			src : dev.root+ '_pub_guide/*.html'
		}
		, sass : {
			src : src.sass + '/**/*.{scss,sass}'
			, compassSrc : src.sass
			, dest : dev.css
		}
		, sass_option : { // compass sass 사용 옵션
			css: dev.css
			, sass: src.sass
			, sourcemap: true
			, style: 'compressed'// compass-sass Option : nested, expaned, compact, compressed
		}
		, gulp_sass_option : { // gulp-sass 사용 압축 옵션
			outputStyle  : 'compressed' //Gulp-sass Option
		}
		, js :{
			src : src.js + '**/*.js'
			, dest : dev.js
			, srcFileList : [//병합할 파일들
				src.js + '/jquery-1.12.0.min.js'
				, src.js + '/jquery.colorbox-min.js'
				, src.js + '/jquery.quicksearch.js'
				, src.js + '/worklist.util.js'
				, src.js + '/worklist.include.js'
				, src.js + '/worklist.js'
			]
			, destFileName : 'worklist.js' //병합 파일명
		}
		, server : {
			root : [webRoot, '../']
			, port : 9101
			, livereload : true
			, open : {
				file : 'index.html'
				, browser: 'Chrome' // chrome or (Google Chrome), iexplore, safari ...
			}
		}
	};
};
