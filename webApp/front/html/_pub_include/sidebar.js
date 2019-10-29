/**
* SideBar include
* ------------------
*/

(function(){
	var str='';
	str+='	<!-- ====================================== -->';
	str+='	<!-- Start of sidebar -->';
	str+='	<!-- ====================================== -->';
	str+='	<div class="sidebar" data-color="rose" data-background-color="white">';
	str+='		<button type="button" aria-label="sidebar Close" class="btn-sidebar-close"><i class="icon_close_white"></i></button>';

	str+='		<!-- sidebar-top -->'; //07.11 수정
	str+='		<div class="sidebar-top">';
	str+='			<div class="title-area">';
	str+='				<h1>My Health Record</h1>';
	str+='			</div>';
	str+='			<div class="btn-area">';
	str+='				<button type="button" class="btn btn-logout btn-round"><span class="blind">Log Out</span></button>';
	str+='			</div>';
	str+='			<div class="user">';
	str+='				<div class="photo">';
	str+='					<img src="../../assets/img/test/avatar.jpg">';
	str+='				</div>';
	str+='			</div>';
	str+='			<div class="relation-area">';
	str+='				<div class="form-group">';
	str+='						<label for="fc-sidebar-user-name" class="blind">Select user name</label>';
	str+='						<div class="form-wrap">';
	str+='							<div class="form-select">';
	str+='								<b class="caret-down"></b>';
	str+='								<select class="form-control" id="fc-sidebar-user-name">';
	str+='									<option>Noah</option>';
	str+='									<option>Jane</option>';
	str+='								</select>';
	str+='							</div>';
	str+='						</div>';
	str+='					</div>';
	str+='					<button type="button" class="btn btn-round btn-white btn-add-user"></button>';
	str+='			</div>';
	str+='		</div>';
	str+='		<!-- //sidebar-top -->';

	str+='		<!-- sidevar-wrapper -->';
	str+='		<div class="sidebar-wrapper">';
	str+='			<ul class="nav">';
	str+='				<li class="active">';
	str+='					<a href="javascript:void(0);" role="button" class="icon_records">';
	str+='						<span>Records</span>';
	str+='					</a>';
	str+='				</li>';
	str+='				<li>';
	str+='					<a href="javascript:void(0);" role="button" class="icon_collect"> <i id="motion-collection-side"></i>'; // 07.04
	str+='						<span>Selected Records</span>';
	str+='					</a>';
	str+='				</li>';
	str+='				<li>';
	str+='					<a href="javascript:void(0);" role="button" class="icon_circle">';
	str+='						<span>Care Circles</span>';
	str+='					</a>';
	str+='				</li>';
	str+='				<li>';
	str+='					<a href="javascript:void(0);" role="button" class="icon_sharelist">';
	str+='						<span>Share History</span>';
	str+='					</a>';
	str+='				</li>';
	str+='			</ul>';
	str+='			<!-- mo-show -->';
	str+='			<ul class="nav mo-show">';
	str+='				<li>';
	str+='					<a href="javascript:void(0);" role="button" class="icon_providers">';
	str+='						<span>My care providers</span>';
	str+='					</a>';
	str+='				</li>';
	str+='				<li>';
	str+='					<a href="javascript:void(0);" role="button" class="icon_profile">';
	str+='						<span>Profile</span>';
	str+='					</a>';
	str+='				</li>';
	str+='			</ul>';
	str+='			<!-- //mo-show -->';
	str+='			<!-- mo-show -->';
	str+='			<ul class="nav mo-show">';
	str+='				<li>';
	str+='					<a href="javascript:void(0);" role="button" class="icon_managedata">';
	str+='						<span>Manage data</span>';
	str+='					</a>';
	str+='				</li>';
	str+='			</ul>';
	str+='			<!-- //mo-show -->';
	str+='		</div>';
	str+='		<!-- //sidevar-wrapper -->';
	str+='		<!-- sidevar-footer -->';
	str+='		<div class="sidebar-footer">';
	str+='			<p class="version">Version 1.0.0</p>';
	str+='			Copyright© 1995-2019  <br>';
	str+='			SAMSUNG All Rights Reserved.';
	str+='		</div>';
	str+='		<!-- //sidevar-footer -->';
	str+='	</div>';
	str+='	<!-- ====================================== -->';
	str+='	<!-- //End of sidebar -->';
	str+='	<!-- ====================================== -->';


	document.write(str);
})();
