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
					$(el).find('.menu__drop-down-btn').removeClass('opened');
				}
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
	});



	var mainSliderWrapper = $('.main-slider-wrapper'),
		mainSlider = mainSliderWrapper.find('#main-slider'),
		mainSliderControls = mainSliderWrapper.find('#main-slider-controls'),
		mainSliderControlsLeftArrow = mainSliderControls.find('.main-slider-controls__item_left-arrow'),
		mainSliderControlsRightArrow = mainSliderControls.find('.main-slider-controls__item_right-arrow');
	mainSlider.slick({
		autoplay: true,
		speed: '1000',
		appendArrows: mainSliderControls,
		prevArrow: mainSliderControlsLeftArrow,
		nextArrow: mainSliderControlsRightArrow
	});


	var searchForm = $('.search-form'),
		searchInput = searchForm.find('.search-input'),
		clearBtn = searchForm.find('.clear-btn');
	clearBtn.on('click', function() {
		clearBtn.removeClass('show');
	});
	searchInput.on('keyup', function() {
		if(searchInput.val()!=='') {
			clearBtn.addClass('show');
		} else {
			clearBtn.removeClass('show');
		}
	});

	var filtersForm = $('.filters-form'),
		select = filtersForm.find('.select'),
		moreFiltersBtn = filtersForm.find('.more-filters-btn'),
		moreFiltersBtnText = filtersForm.find('.more-filters-btn__text'),
		moreFiltersWrapper = filtersForm.find('.more-filters-wrapper');

	moreFiltersBtn.on('click', function(evt) {
		evt.preventDefault();
		moreFiltersBtnText.text(moreFiltersBtnText.text() == "Скрыть" ? "Ещё фильтры" : "Скрыть");
		moreFiltersBtn.toggleClass('opened');
		moreFiltersWrapper.slideToggle(500);
	});

	select.each(function(i,el) {
		var selectLabel = $(el).find('.select__label'),
			selectLabelValue = selectLabel.find('.select__label-value'),
			selectInput = $(el).find('.select__hidden-input'),
			selectList = $(el).find('.select__list'),
			selectListHeight = selectList.outerHeight(),
			selectListItem = selectList.find('.select__list-item');

		selectLabel.on('mouseenter', function(){
			selectList.css({
				clip: 'rect(0, 9999px , '+selectListHeight+'px , 0)'
			});
		});
		selectLabel.on('mouseleave', function(){
			selectList.css({
				clip: 'rect(0, 9999px , 0, 0)'
			});
		});
		selectList.on('mouseenter', function(){
			$(this).css({
				clip: 'rect(0, 9999px , '+selectListHeight+'px , 0)'
			})
		});
		selectList.on('mouseleave', function(){
			$(this).css({
				clip: 'rect(0 , 9999px , 0 , 0)'
			})
		});

		selectListItem.each(function(i,el) {
			$(el).on('click', function(evt) {
				var value = $(el).attr('data-value'),
					text = $(el).text();
				evt.preventDefault();
				selectInput.val(value);
				selectLabelValue.text(text);
			})
		})
	});




	var adsWrapper = $('.ads-wrapper'),
		ads = adsWrapper.find('.ads'),
		adsItem = ads.find('.ads__item'),
		typeOfAds = adsWrapper.find('.type-of-ads'),
		typeOfAdsItem = adsWrapper.find('.type-of-ads__item'),
		typeOfAdsListBtn = adsWrapper.find('.type-of-ads__btn_type-list'),
		typeOfAdsBlocksBtn = adsWrapper.find('.type-of-ads__btn_type-blocks');


	// typeOfAdsListBtn.on('click', function(evt) {
	// 	evt.preventDefault();
	// 	typeOfAdsItem.each(function(i,el){
	// 		$(el).removeClass('selected');
	// 	});
	// 	typeOfAdsListBtn.parent('li').addClass('selected');
	// 	ads.removeClass('type-blocks');
	// 	ads.addClass('type-list');
	// });
	// typeOfAdsBlocksBtn.on('click', function(evt) {
	// 	evt.preventDefault();
	// 	typeOfAdsItem.each(function(i,el){
	// 		$(el).removeClass('selected');
	// 	});
	// 	typeOfAdsBlocksBtn.parent('li').addClass('selected');
	// 	ads.removeClass('type-list');
	// 	ads.addClass('type-blocks');
	// });


	adsItem.each(function(i,el){
		var adsItemFavoritesBtn = $(el).find('.ads__favorites-btn'),
			adsSliderWrapper    = $(el).find('.ads__slider-wrapper'),
			adsImgSlider        = adsSliderWrapper.find('.ads__img-slider'),
			adsSliderControls   = adsSliderWrapper.find('.ads__slider-controls'),
			adsSliderLeftArr    = adsSliderControls.find('.ads__slider-controls_left-arrow'),
			adsSliderRightArr   = adsSliderControls.find('.ads__slider-controls_right-arrow');

		adsImgSlider.slick({
			infinite: false,
			appendArrows: adsSliderControls,
			prevArrow: adsSliderLeftArr,
			nextArrow: adsSliderRightArr
		});

		adsItemFavoritesBtn.on('click', function(evt){
			evt.preventDefault();
			$(el).toggleClass('in-favorites');
		})
	});
});