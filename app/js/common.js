$(document).ready(function(){

	initMenu();
	initSearchFormMovements();
	initMainPageSlider();
	initMainPageServicesSlideEffect();
	initNewAdsMovements();
	initAboutSlider();

	initHeaderDropDownLists();
	initFiltersFormMovements();
	initSelect();
	initInputClearBtns();

	initAnchorLinks();
	initAdsMovements();
	initObjectMovements();
	initArticleMovements();

	function initMenu() {
		var sidebarNav    = $('.sidebar-navigation'),
			menuContainer = sidebarNav.find('.menu-container'),
			menuBtn       = sidebarNav.find('#sidebar-menu-btn'),
			hamburger     = menuBtn.find('.hamburger'),
			menu          = $('.menu'),
			menuSections  = menu.find('.menu__sections');

		menuBtn.on('click', function(evt) {
			evt.preventDefault();
			hamburger.toggleClass('active');
			menuContainer.toggleClass('opened');
			$('body').toggleClass('without-scroll');
		});

		menuSections.each(function(i,el){
			var btn       = $(el).find('.menu__drop-down-btn'),
				dropDown  = $(el).find('.menu__drop-down'),
				count     = i;
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
			});
		});
	}
	function initSearchFormMovements() {
		var searchForm  = $('.search-form'),
			searchInput = searchForm.find('.search-input'),
			clearBtn    = searchForm.find('.clear-btn');
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
	}
	function initMainPageSlider() {
		var mainSliderWrapper            = $('.main-slider-wrapper'),
			mainSlider                   = mainSliderWrapper.find('#main-slider'),
			mainSliderControls           = mainSliderWrapper.find('#main-slider-controls'),
			mainSliderControlsLeftArrow  = mainSliderControls.find('.main-slider-controls__item_left-arrow'),
			mainSliderControlsRightArrow = mainSliderControls.find('.main-slider-controls__item_right-arrow');
		mainSlider.slick({
			autoplay: true,
			speed: '1000',
			appendArrows: mainSliderControls,
			prevArrow: mainSliderControlsLeftArrow,
			nextArrow: mainSliderControlsRightArrow
		});
	}
	function initMainPageServicesSlideEffect() {
		var hold         = $('.site-sections-wrapper'),
			siteSections = hold.find('.site-sections'),
			btn          = siteSections.find('#services-btn'),
			services     = hold.find('#services-list'),
			closeBtn     = services.find('#services-close-btn');
		btn.on('click', function(evt) {
			evt.preventDefault();
			siteSections.addClass('clipped');
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
	}
	function initNewAdsMovements() {
		var newAds     = $('.new-ads'),
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
	}
	function initAboutSlider() {
		var controls = $('#section-about-slider-controls'),
			lArr     = controls.find('.slider__controls_left-arrow'),
			rArr     = controls.find('.slider__controls_right-arrow');

		$('#section-about-slider').slick({
			slidesToShow: '3',
			appendArrows: controls,
			prevArrow: lArr,
			nextArrow: rArr
		});
	}
	function initHeaderDropDownLists() {
		var header       = $('.section-header.secondary-page'),
			dropDown     = header.find('.drop-down'),
			dropDownItem = dropDown.find('.drop-down__item');

		dropDownItem.each(function(i,el){
			var dropDownBtn        = $(el).find('.drop-down__btn'),
				dropDownList       = $(el).find('.drop-down__list'),
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
	}
	function initFiltersFormMovements() {
		var filtersForm        = $('.filters-form'),
			moreFiltersBtn     = filtersForm.find('.more-filters-btn'),
			moreFiltersBtnText = filtersForm.find('.more-filters-btn__text'),
			moreFiltersWrapper = filtersForm.find('.more-filters-wrapper');

		moreFiltersBtn.on('click', function(evt) {
			evt.preventDefault();
			moreFiltersBtnText.text(moreFiltersBtnText.text() == "Скрыть" ? "Ещё фильтры" : "Скрыть");
			moreFiltersBtn.toggleClass('opened');
			moreFiltersWrapper.slideToggle(500);
		});
	}
	function initSelect() {
		var select = $('.select');

		select.each(function(i,el) {
			var selectLabel      = $(el).find('.select__label'),
				selectLabelValue = selectLabel.find('.select__label-value'),
				selectInput      = $(el).find('.select__hidden-input'),
				selectList       = $(el).find('.select__list'),
				selectListFlag   = true,
				selectListHeight = selectList.outerHeight(),
				selectListItem   = selectList.find('.select__list-item'),
				closeSelect = function() {
					selectList.css({
						clip: 'rect(0, 9999px , 0, 0)'
					});
					selectListFlag=true;
				},
				openSelect = function() {
					selectList.css({
						clip: 'rect(0, 9999px , '+selectListHeight+'px , 0)'
					});
					selectListFlag=false;
				};

			selectLabel.on('click', function(evt) {
				evt.preventDefault();
				if (selectListFlag) {
					openSelect();
					selectLabel.addClass('opened');
				} else {
					closeSelect();
					selectLabel.removeClass('opened');
				};
			});

			selectListItem.each(function(i,el) {
				$(el).on('click', function(evt) {
					var value = $(el).attr('data-value'),
						text  = $(el).text();
					evt.preventDefault();
					selectInput.val(value);
					selectLabelValue.text(text);
					closeSelect();
					selectLabel.removeClass('opened');
				})
			})
		});
	}
	function initInputClearBtns() {
		var inputClearBtns = $('.input-clear-btn');
		inputClearBtns.each(function(i,el) {
			var parent = $(el).parent('div'),
				input  = parent.find('input');
			if (input.length == 0) {
				console.log('не нашёл')
				input  = parent.find('textarea');
			}
			input.on('keyup', function() {
				if(input.val()!=='') {
					$(el).addClass('show');
				} else {
					$(el).removeClass('show');
				}
			});
			$(el).on('click', function(evt) {
				evt.preventDefault();
				input.val('');
				$(el).removeClass('show');
			});
		});
	}
	function initAnchorLinks() {
		var anchorLinks     = $('.anchor-links'),
			anchorLinksLink = anchorLinks.find('.anchor-links__link');

		anchorLinksLink.each(function(i,el) {
			$(el).on("click", function (evt) {
		        evt.preventDefault();
		        var id  = $(this).attr('href'),
		            top = $(id).offset().top - 105;
		        $('body,html').animate({scrollTop: top}, 800);
		    });
		});
	}
	function initAdsMovements() {
		var adsWrapper = $('.ads-wrapper'),
			ads        = adsWrapper.find('.ads'),
			adsItem    = ads.find('.ads__item');

		// var	typeOfAds = adsWrapper.find('.type-of-ads'),
		// 	typeOfAdsItem = adsWrapper.find('.type-of-ads__item'),
		// 	typeOfAdsListBtn = adsWrapper.find('.type-of-ads__btn_type-list'),
		// 	typeOfAdsBlocksBtn = adsWrapper.find('.type-of-ads__btn_type-blocks');


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
	}
	function initObjectMovements() {
		$('.object').each(function(i,el){
			var objectSliderWrapper    = $(el).find('.object__slider-wrapper'),
				objectSlider           = objectSliderWrapper.find('.object__slider'),
				objectSliderControls   = objectSliderWrapper.find('.object__slider-controls'),
				objectSliderArrowLeft  = objectSliderControls.find('.object__slider-arrow_left'),
				objectSliderArrowRight = objectSliderControls.find('.object__slider-arrow_right'),
				objectFullscreenBtn    = objectSliderWrapper.find('.object__fullscreen-btn'),
				objectInFavoritesBtn   = $(el).find('.object__in-favorites-btn');

			objectSlider.slick({
				infinite: false,
				appendArrows: objectSliderControls,
				prevArrow: objectSliderArrowLeft,
				nextArrow: objectSliderArrowRight
			});

			objectInFavoritesBtn.on('click', function(evt) {
				evt.preventDefault();
				$(el).toggleClass('in-favorites');
			});
		});
	}
	function initArticleMovements() {
		var article = $('.article');

		article.each(function(i,el) {
			var articleImgSliderWrapper    = $(el).find('.article__img-slider-wrapper'),
				articleImgSlider           = articleImgSliderWrapper.find('.article__img-slider'),
				articleImgSliderControls   = articleImgSliderWrapper.find('.article__img-slider-controls'),
				articleImgSliderLeftArrow  = articleImgSliderControls.find('.article__img-slider-arrow_left'),
				articleImgSliderRightArrow = articleImgSliderControls.find('.article__img-slider-arrow_right');

			articleImgSlider.slick({
				infinite: false,
				appendArrows: articleImgSliderControls,
				prevArrow: articleImgSliderLeftArrow,
				nextArrow: articleImgSliderRightArrow
			});
		});
	}
	
	//Прелоад картинок
	// function readURL(input) {

	//     if (input.files && input.files[0]) {
	//         var reader = new FileReader();

	//         reader.onload = function (evt) {
	//             $('#image').attr('src', evt.target.result);
	//         };

	//         reader.readAsDataURL(input.files[0]);
	//     }
	// }

	// $("#images").change(function(){
	//     readURL(this);
	// });
});