$(document).ready(function(){
	
	var sidebarNav    = $('.sidebar-navigation'),
		menuContainer = sidebarNav.find('.menu-container'),
		menuBtn       = sidebarNav.find('#sidebar-menu-btn'),
		hamburger     = menuBtn.find('.hamburger');

	menuBtn.on('click', function(evt) {
		evt.preventDefault();
		hamburger.toggleClass('active');
		menuContainer.toggleClass('opened');
		$('body').toggleClass('without-scroll');
	});


	var hold = $('.site-sections-wrapper'),
		siteSections = hold.find('.site-sections'),
		btn = siteSections.find('#services-btn'),
		services = hold.find('#services-list'),
		closeBtn = services.find('#services-close-btn');
	btn.on('click', function(evt) {
		evt.preventDefault();
		// setTimeout(function () {
			siteSections.addClass('clipped');
		// }, 10);
		services.animate({
			left: "0%"			
		},1000);
	});
	closeBtn.on('click', function(evt) {
		evt.preventDefault();
		siteSections.removeClass('clipped');
		services.animate({
			left: "100%"			
		},1000);
	});

	var controls = $('#section-about-slider-controls'),
		lArr = controls.find('.slider__controls_left-arrow'),
		rArr = controls.find('.slider__controls_right-arrow');

	$('#section-about-slider').slick({
		slidesToShow: '3',
		appendArrows: controls,
		prevArrow: lArr,
		nextArrow: rArr
	});




	var newAds = $('.new-ads'),
		newAdsItem = newAds.find('.new-ads__item');

	newAdsItem.each(function(i,el){
		var newAdsItemFavoritesBtn = $(el).find('.new-ads__favorites-btn'),
			newAdsSliderWrapper    = $(el).find('.new-ads__slider-wrapper'),
			newAdsImgSlider        = newAdsSliderWrapper.find('.new-ads__img-slider'),
			newAdsSliderControls   = newAdsSliderWrapper.find('.new-ads__slider-controls'),
			newAdsSliderLeftArr    = newAdsSliderControls.find('.new-ads__slider-controls_left-arrow'),
			newAdsSliderRightArr   = newAdsSliderControls.find('.new-ads__slider-controls_right-arrow');

		newAdsImgSlider.slick({
			infinite: false,
			appendArrows: newAdsSliderControls,
			prevArrow: newAdsSliderLeftArr,
			nextArrow: newAdsSliderRightArr
		});

		newAdsItemFavoritesBtn.on('click', function(evt){
			evt.preventDefault();
			$(el).toggleClass('in-favorites');
		})
	});



	var menu = $('.menu'),
		menuSections = menu.find('.menu__sections');

	menuSections.each(function(i,el){
		var btn = $(el).find('.menu__drop-down-btn'),
			dropDown = $(el).find('.menu__drop-down'),
			count = i;
		dropDown.slideUp();
		btn.on('click',function(evt){
			evt.preventDefault();
			menuSections.each(function(i,el){
				if(i!==count) {
					$(el).find('.menu__drop-down').slideUp();
				}
				$(el).find('.menu__drop-down-btn').removeClass('opened');
			})
			dropDown.slideToggle();
			$(this).toggleClass('opened');
		})

	});



	var header = $('.section-header.secondary-page'),
		dropDown = header.find('.drop-down'),
		dropDownItem = dropDown.find('.drop-down__item');

	dropDownItem.each(function(i,el){
		var dropDownBtn = $(el).find('.drop-down__btn'),
			dropDownList = $(el).find('.drop-down__list'),
			dropDownListHeight = dropDownList.outerHeight();

		dropDownList.on('mouseenter', function(){
			$(this).css({
				clip: 'rect(-10px , 9999px , '+dropDownListHeight+'px , 0)'
			})
		});
		dropDownList.on('mouseleave', function(){
			$(this).css({
				clip: 'rect(-10px , 9999px , -10px , 0)'
			})
		});
		dropDownBtn.on('mouseenter', function(){
			dropDownList.css({
				clip: 'rect(-10px , 9999px , '+dropDownListHeight+'px , 0)'
			});
		});
		dropDownBtn.on('mouseleave', function(){
			dropDownList.css({
				clip: 'rect(-10px , 9999px , -10px , 0)'
			});
		});
	});



	// var mainSlider = $('#main-slider'),
	// 	mainSliderControls = $('main-slider-controls'),
	// 	mainSliderControlsLeftArrow = mainSliderControls.find('.main-slider-controls__item_left-arrow'),
	// 	mainSliderControlsRightArrow = mainSliderControls.find('.main-slider-controls__item_right-arrow');
	// mainSlider.slick({
	// 	appendArrows: mainSliderControls,
	// 	prevArrow: mainSliderControlsLeftArrow,
	// 	nextArrow: mainSliderControlsRightArrow
	// });
});