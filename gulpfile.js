'use strict';

/**
* Gulp Setting
* --------------------------------------
* //기본 설치 프로그램
* 	1. node.js 설치	(LTS) 			- https://nodejs.org/
* 	2. ruby 설치(2.2.~) 					- http://rubyinstaller.org/downloads/
* 	3. Git Bash 설치 							- https://git-scm.com/downloads
* --------------------------------------
* //working dir
* 	xxxx 에서 작업
* --------------------------------------
* //전역 설치
* 	1. npm i -g gulp-cli
* 	2. npm i -g gulp
* 	3. npm i -g bower (* pl 그룹만 설정)
* --------------------------------------
* //의존 모듈 설치
*		1. npm install
* 	2. bower install (* pl 그룹만 설정)
* --------------------------------------
* // Sass Select
* 1 gulp-sass
* 	 npm install -g gulp-sass
* - npm install gulp-sass --save-dev
* 	// gulp-sass
* -	 var sass = require('gulp-sass') //sass plugin
* 2 node-sass
* 	 npm install -g node-sass
* - npm install node-sass --save-dev
*  3. RUBY 설치후 SASS 모듈 설치
* 		gem install sass				//ruby sass
* 		gem install compass		//compass
* 		gem install susy			//grid
* 		gem install breakpoint		//media query
* 		gem list
* --------------------------------------
* //작업 시작
* gulp 								//default 
* gulp worklist  	//worklist
* --------------------------------------

* --------------------------------------
* //Log
* --------------------------------------
* * cssLint :  npm install --save-dev gulp-csslint
*/



/**
* Option
* --------------------------------------
*/
var Option={
	// 'gulp-sass' or 'compass-sass'
	sassName : 'gulp-sass'
}

/**
* @import : config (환경설정)
* --------------------------------------
*/
var config ={
	worklist : require('./gulp_config/config.worklist')() //worklist
	, front : require('./gulp_config/config.front')() //web
}

/**
* @import plugin (모듈)
* --------------------------------------
*/
var del = require('del') //제거
	, runSequence = require('run-sequence') //실행순서
	, gulp = require('gulp') //Gulp

	//Gulp 유틸리티 모듈
	, size = require('gulp-size') //변경 사이즈 출력
	, watch = require('gulp-watch') //관찰
	, plumber = require('gulp-plumber') //오류 발생시에도 관찰 지속

	//Sass 관련 모듈
	// , compass = require('gulp-compass') //Ruby Sass
	, sass = require('gulp-sass') //Gulp sass
	, sourcemaps = require('gulp-sourcemaps')

	//Lint 관련
	// , csslint = require('gulp-csslint')

	//JS 관련 모듈
	, uglify = require('gulp-uglify') // 파일 압축 모듈
	, concat = require('gulp-concat') // 파일 병합 모듈

	//웹 서버
	, connect = require('gulp-connect-multi')
;

// sass.compiler = require('sass'); //sass complier:: node-sass  or sass

/**
* Gulp 기본 업무(Tasks) 정의
* --------------------------------------
* HMS(Default) : gulp
* worklist  : gulp worklist
*/
	gulp.task('default', [Option.sassName+':front', 'connect:front', 'watch:front']);
	gulp.task('worklist', [Option.sassName+':worklist', 'connect:worklist', 'watch:worklist']);


/**
* 공통
* --------------------------------------
* 제거 : clean
*/
	// gulp.task('clean', del.bind(null, config.pub.del));

	//[SERVER] ----------------------------------
	var frontServer = connect();
	var worklistServer = connect();
	gulp.task('connect:front', frontServer.server(config.front.server));
	gulp.task('connect:worklist', worklistServer.server(config.worklist.server));

/**
* front (Defualt)
* --------------------------------------
* 실행 : gulp
*/
	//[SASS]
	gulp.task('gulp-sass:front', function () {
		console.log("\n===== [gulp-sass:front Start] =========================");
		return gulp.src(config.front.sass.src)
			.pipe(sourcemaps.init())
			.pipe(sass.sync(config.front.gulp_sass_option).on('error', sass.logError))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest(config.front.sass.dest))
			.pipe(size({title: 'Gulp-Sass'}))
			.pipe(frontServer.reload())//브라우저 Refresh (? : 변경예정)
		;
	});

	//[WATCH]
	gulp.task('watch:front', function(){
		watch(config.front.html.src, function () {
			gulp.src(__filename)
				.pipe(frontServer.reload())
			;
			console.log("===== [Html watch End] =========================\n");
		});
		watch(config.front.sass.src, function() {
			gulp.start(Option.sassName+':front', function(){
				console.log("//===== ["+Option.sassName+":front watch End] =========\n");
			});
		});

		watch(config.front.js.src, function() {
			gulp.start('concat:front', function(){
				console.log("===== [concat:front watch End] ====================================\n");
			});
		});
	});

	//[JS]
	gulp.task('concat:front', function () {
		console.log("\n===== [concat:front Start] =====================");
		return gulp
			.src(config.front.js.srcFileList)
			.pipe(concat(config.front.js.destFileName))
			.pipe(uglify({
				mangle : true, //false : 알파벳 한 글자 압축 설정
				preserveComments : 'all' // all or some
			}))
			.pipe(gulp.dest(config.front.js.dest))
		;
	});






/**
* WORKLIST
* --------------------------------------
* 실행 : gulp workllist
*/
	//[SASS]
	gulp.task('gulp-sass:worklist', function () {
		console.log("\n===== [gulp-sass:worklist Start] =========================");
		return gulp.src(config.worklist.sass.src)
			.pipe(sourcemaps.init())
			.pipe(sass.sync(config.worklist.gulp_sass_option).on('error', sass.logError))
			.pipe(sourcemaps.write('./maps'))
			.pipe(gulp.dest(config.worklist.sass.dest))
			.pipe(size({title: 'Gulp-Sass'}))
			.pipe(worklistServer.reload())//브라우저 Refresh (? : 변경예정)
		;
	});

	//[WATCH]
	gulp.task('watch:worklist', function(){
		watch(config.worklist.html.src, function () {
			gulp.src(__filename)
				.pipe(worklistServer.reload())
			;
			console.log("===== [Html watch End] =========================\n");
		});
		watch(config.worklist.sass.src, function() {
			gulp.start(Option.sassName+':worklist', function(){
				console.log("//===== ["+Option.sassName+":worklist watch End] =========\n");
			});
		});
		/*watch(config.worklist.js.src, function() {
			gulp.start('concat:worklist', function(){
				console.log("===== [concat:worklist watch End] ====================================\n");
			});
		});*/
	});

	//[JS]
	gulp.task('concat:worklist', function () {
		console.log("\n===== [concat:worklist Start] =====================");
		return gulp
			.src(config.worklist.js.srcFileList)
			.pipe(concat(config.worklist.js.destFileName))
			.pipe(uglify())
			.pipe(gulp.dest(config.worklist.js.dest))
		;
	});




