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

