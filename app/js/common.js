$(document).ready(function(){
	initMenu();
	initSearchFormMovements();
	initMainPageSlider();
	initMainPageServicesSlideEffect();
	initNewAdsMovements();
	initAboutSlider();
	initCallOrderPopup();

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
			menuContainerFlag = true,
			menuBtn       = sidebarNav.find('#sidebar-menu-btn'),
			hamburger     = menuBtn.find('.hamburger'),
			menu          = $('.menu'),
			menuSections  = menu.find('.menu__sections'),
			removeClass   = function() {
				menuContainer.removeClass('opened');
			}
			openMenu      = function() {
				menuContainer.addClass('opened').animate({
					opacity: '1'
				},300);
				menuContainerFlag = false;
			},
			closeMenu     = function() {
				menuContainer.animate({
					opacity: '0'
				},300,'swing',removeClass);
				menuContainerFlag = true;
			};

		menuBtn.on('click', function(evt) {
			evt.preventDefault();
			hamburger.toggleClass('active');
			$('body').toggleClass('without-scroll');
			if(menuContainerFlag) {
				openMenu();
			} else {
				closeMenu();
			}
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
		var searchForm             = $('.search-form'),
			searchInput            = searchForm.find('.search-input'),
			clearBtn               = searchForm.find('.clear-btn'),
			advancedSearch         = searchForm.find('.advanced-search'),
			advancedSearchBtn      = searchForm.find('.advanced-search-btn'),
			advancedSearchCloseBtn = searchForm.find('.advanced-search-close-btn'),
			moreFiltersWrapper     = searchForm.find('.more-filters-wrapper'),
			btnsWrapper            = searchForm.find('.btns-wrapper'),
			moreFiltersBtnText     = searchForm.find('.more-filters-btn__text');

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
		searchInput.on('focusin', function() {
			advancedSearchBtn.css({
				transform: "translate(0, 18px)"
			});
		});
		searchInput.on('focusout', function() {
			setTimeout(function () {
				advancedSearchBtn.css({
					transform: "translate(0, 0)"
				});
			}, 10);
		});
		advancedSearchBtn.on('click', function(evt) {
			evt.preventDefault();
			advancedSearch.css({
				transform: "translate(0, 171px)"
			});
			setTimeout(function () {
				advancedSearchCloseBtn.css({
					transform: 'translate(31px, 0)'
				});
			}, 300);
		});
		advancedSearchCloseBtn.on('click', function(evt) {
			evt.preventDefault();
			advancedSearchCloseBtn.css({
				transform: 'translate(0, 0)'
			});
			moreFiltersWrapper.slideUp();
			btnsWrapper.removeClass('more-pb');
			moreFiltersBtnText.text('Ещё фильтры');
			setTimeout(function () {
				advancedSearch.css({
					transform: "translate(0, 0)"
				});
			}, 300);
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
			services.css({
				transform: "translate(-1140px, 0px)"			
			});
		});
		closeBtn.on('click', function(evt) {
			evt.preventDefault();
			siteSections.removeClass('clipped');
			services.css({
				transform: "translate(0px, 0px)"			
			});
		});
	}
	function initNewAdsMovements() {
		var newAdsWrapper              = $('.new-ads-wrapper'),
			newAdsMainSliderControls   = newAdsWrapper.find('.new-ads__primary-slider-controls'),
			newAdsMainSliderArrowLeft  = newAdsMainSliderControls.find('.new-ads__primary-slider-arrow_left'),
			newAdsMainSliderArrowRight = newAdsMainSliderControls.find('.new-ads__primary-slider-arrow_right'),
			newAds                     = newAdsWrapper.find('.new-ads'),
			newAdsItem                 = newAds.find('.new-ads__item');

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

		newAds.slick({
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 2,
			appendArrows: newAdsMainSliderControls,
			prevArrow: newAdsMainSliderArrowLeft,
			nextArrow: newAdsMainSliderArrowRight
		});
	}
	function initAboutSlider() {
		var controls = $('#section-about-slider-controls'),
			lArr     = controls.find('.slider__controls_left-arrow'),
			rArr     = controls.find('.slider__controls_right-arrow');

		$('#section-about-slider').slick({
			slidesToShow: 3,
			appendArrows: controls,
			prevArrow: lArr,
			nextArrow: rArr
		});
	}
	function initCallOrderPopup() {
		var orderPopup = $('.order-popup'),
			popupCloseBtn = orderPopup.find('.popup-close-btn'),
			callOrderBtn = $('.call-order-button'),
			showPopup = function() {
				orderPopup.addClass('show');
			},
			hidePopup = function() {
				orderPopup.removeClass('show');
			};

		callOrderBtn.each(function(i,el) {
			$(el).on('click', function(evt) {
				evt.preventDefault();
				showPopup();
				orderPopup.animate({
					opacity: '1'
				},1000);
			});
		});

		popupCloseBtn.on('click', function(evt) {
			evt.preventDefault();
			orderPopup.animate({
				opacity: '0'
			},1000, 'swing', hidePopup);
		});
		
		orderPopup.on('click', function(evt) {
			evt.preventDefault();
			if ($(evt.target).is(orderPopup)) {
				orderPopup.animate({
					opacity: '0'
				},1000, 'swing', hidePopup);
			}
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
		var form               = $('form'),
			moreFiltersBtn     = form.find('.more-filters-btn'),
			moreFiltersBtnText = form.find('.more-filters-btn__text'),
			moreFiltersWrapper = form.find('.more-filters-wrapper'),
			btnsWrapper        = form.find('.btns-wrapper');

		moreFiltersBtn.on('click', function(evt) {
			evt.preventDefault();
			moreFiltersBtnText.text(moreFiltersBtnText.text() == "Скрыть" ? "Ещё фильтры" : "Скрыть");
			moreFiltersBtn.toggleClass('opened');
			btnsWrapper.toggleClass('more-pb');
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

				objectFullScreenSliderWrapper    = $(el).find('.object__fullscreen-slider-wrapper'),
				objectFullScreenSlider           = objectFullScreenSliderWrapper.find('.object__fullscreen-slider'),
				objectFullScreenSliderControls   = objectFullScreenSliderWrapper.find('.object__fullscreen-slider-controls'),
				objectFullScreenSliderArrowLeft  = objectFullScreenSliderControls.find('.object__fullscreen-slider-arrow_left'),
				objectFullScreenSliderArrowRight = objectFullScreenSliderControls.find('.object__fullscreen-slider-arrow_right'),
				objectFullscreenCloseBtn         = objectFullScreenSliderWrapper.find('.object__fullscreen-close-btn'),

				objectInFavoritesBtn   = $(el).find('.object__in-favorites-btn'),
				objectPhoneBtn         = $(el).find('.object__phone-btn');

			objectSlider.slick({
				infinite: false,
				appendArrows: objectSliderControls,
				prevArrow: objectSliderArrowLeft,
				nextArrow: objectSliderArrowRight,
				asNavFor: objectFullScreenSlider
			});

			objectFullScreenSlider.slick({
				infinite: false,
				appendArrows: objectFullScreenSliderControls,
				prevArrow: objectFullScreenSliderArrowLeft,
				nextArrow: objectFullScreenSliderArrowRight,
				asNavFor: objectSlider
			});

			objectInFavoritesBtn.on('click', function(evt) {
				evt.preventDefault();
				$(el).toggleClass('in-favorites');
			});

			objectPhoneBtn.on('click', function(evt) {
				evt.preventDefault();
				objectPhoneBtn.toggleClass('phone-show');
			});

			objectFullscreenBtn.on('click', function(evt) {
				evt.preventDefault();
				$('body').addClass('without-scroll');
				objectSliderWrapper.animate({opacity: '0'},500);
				objectFullScreenSliderWrapper.css({zIndex: '30'}).animate({
					opacity: '1'
				},500);
			});

			objectFullscreenCloseBtn.on('click', function(evt) {
				evt.preventDefault();
				$('body').removeClass('without-scroll');
				objectSliderWrapper.animate({opacity: '1'},500);
				objectFullScreenSliderWrapper.animate({
					opacity: '0'
				},500);
				setTimeout(function () {
					objectFullScreenSliderWrapper.css({zIndex: '-1'});
				}, 500);
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
});