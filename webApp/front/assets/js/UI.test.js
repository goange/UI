/**
* UI Test Script
* -----------------------------------------
* 퍼블리싱 페이지에서만 사용합니다.
* 개발시 해당 스크립트는 제외 바랍니다. 
*/

/**
* EventHandler
* ------------------
*/

$(document).ready(function() {
	//top > rightBar Close
	$(document).on('click', '.ui-rightbar .page-close-btn', function(){
			UI.layout.rightbar.close();
	});

	//sidebar.Close (is mobile)
	$(document).on('click', '.sidebar .nav > li >a', function(){
		UI.layout.sidebarClose();
	});
});


