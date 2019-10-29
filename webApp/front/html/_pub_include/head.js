/**
* Head include
* ------------------
* css & script 공통 include
*/


(function(){
	var str=''
	+'<!-- favicon -->'
	// +'<link rel="icon" type="image/png" sizes="16x16" href="../../assets/img/favicon/favicon_16.ico">'
	// +'<link rel="icon" type="image/png" sizes="32x32" href="../../assets/img/favicon/favicon_32.ico">'
	+'<!-- //favicon -->'

		+'<!-- CSS -->'
		+'<link href="../../assets/css/common.css?v=1.0.0" rel="stylesheet" />'
		+'<link href="../../assets/font/fontawesome/css/all.min.css?v=1.0.0" rel="stylesheet" />'
		+'<!-- JS : core -->'
		+'<script src="../../assets/js/plugins/modernizr/modernizr.js"></script>'
		+'<script src="../../assets/js/plugins/detectizr/detectizr.min.js"></script>'
		+'<script src="../../assets/js/plugins/jquery/jquery.min.js"></script>'
		+'<script src="../../assets/js/plugins/popper/popper.min.js"></script>'
		+'<script src="../../assets/js/plugins/bootstrap-material-design/bootstrap-material-design.js"></script>'
		+'<script src="../../assets/js/plugins/splitter/jquery.splitter.js"></script>'
		+'<!-- JS : plugins -->'
		+'<script src="../../assets/js/plugins/enquire/enquire.js"></script>'//js MediaQuery
		+'<script src="../../assets/js/plugins/perfect-scrollbar/perfect-scrollbar.jquery.min.js"></script>'//Scroll
		+'<script src="../../assets/js/plugins/bootstrap-notify/bootstrap-notify.js"></script>'//Toast
		+'<script src="../../assets/js/plugins/moment/moment.min.js"></script>'//datepicker
		+'<script src="../../assets/js/plugins/bootstrap-datetime/bootstrap-datetimepicker.min.js"></script>'//datepicker

		+'<!-- JS : motion -->' // 06.26 추가
		// +'<script src="../../assets/js/plugins/lottie/lottie.js"></script>'
		// +'<script src="../../assets/js/motion.js"></script>'

		+'<!-- JS : common -->'
		// +'<script src="../../assets/js/common.js"></script>'
		+'<script src="../../assets/js/UI.js"></script>'

		// +'<script src="../../assets/js/UI/UI.js"></script>'
		// +'<script src="../../assets/js/UI/UI.layout.js"></script>'
		// +'<script src="../../assets/js/UI/UI.breakpoint.js"></script>'
		// +'<script src="../../assets/js/UI/UI.plugin.js"></script>'
		// +'<script src="../../assets/js/UI/UI.util.js"></script>'

		+'<script src="../../assets/js/UI.test.js"></script>' //퍼블리싱 테스트용(개발시 제외)
	;

	document.write(str);
})();
