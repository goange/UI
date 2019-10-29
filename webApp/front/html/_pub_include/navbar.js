/**
* Navbar include
* ------------------
*/

(function(){
	var str='';
	str+='		<!-- ====================================== -->';
	str+='		<!-- Start of navbar -->';
	str+='		<!-- ====================================== -->';
	str+='		<nav class="navbar navbar-expand-lg">';
	str+='			<div class="container-fluid">';
	str+='				<!-- navbar-wrapper -->';
	str+='				<div class="navbar-wrapper">';
	str+='					<div class="navbar-minimize">';
	str+='						<button type="button" id="sidebarToggleBtn" class="btn  btn-white btn-round btn-top-nav" aria-label="Toggle Nav"></button>';
	str+='					</div>';
	str+='					<div class="navbar-title"></div>';
	str+='				</div>';
	str+='				<div class="justify-content-end">';
	str+='					<ul class="navbar-nav">';
	str+='						<li class="nav-item">';
	str+='							<a class="nav-link btn-top-dictionary" href="javascript:void(0);"><span class="blind">dictionary</span></a>';
	str+='						</li>';
	str+='						<li class="nav-item">';
	str+='							<a class="nav-link btn-top-profile" href="javascript:void(0);"><span class="blind">profile</span></a>';
	str+='						</li>';
	str+='						<li class="nav-item">';
	str+='							<a class="nav-link btn-top-providers" href="javascript:void(0);"><span class="blind">providers</span></a>';
	str+='						</li>';
	str+='						<li class="nav-item">';
	str+='							<a class="nav-link btn-top-managedata" href="javascript:void(0);"><span class="blind">managedata</span></a>';
	str+='						</li>';
	str+='					</ul>';
	str+='				</div>';
	str+='				<!-- //navbar-wrapper -->';
	str+='			</div>';
	str+='		</nav>';
	str+='		<!-- ====================================== -->';
	str+='		<!-- //End of navbar -->';
	str+='		<!-- ====================================== -->';

	document.write(str);
})();
