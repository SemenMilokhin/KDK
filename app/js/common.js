$(document).ready(function(){
	
	var sidebarNav = $('.sidebar-navigation'),
		menu       = sidebarNav.find('#menu'),
		menuBtn    = sidebarNav.find('#sidebar-menu-btn'),
		hamburger  = menuBtn.find('.hamburger');

	menuBtn.on('click', function(evt) {
		evt.preventDefault();
		hamburger.toggleClass('active');
		menu.toggleClass('opened');
	});


	var hold = $('.site-sections'),
		btn = hold.find('#services-btn'),
		list = hold.find('#services-list-item'),
		closeBtn = list.find('#services-close-btn');
	btn.on('click', function(evt) {
		evt.preventDefault();
		list.animate({
			left: "0%"			
		},1000);
		// hold.animate({
		// 	width: "0%"
		// },1000);
	});
	closeBtn.on('click', function(evt) {
		evt.preventDefault();
		list.animate({
			left: "100%"			
		},1000);
		// hold.animate({
		// 	width: "100%"
		// },1000);
	});
});