$(document).ready(function(){
	initAdaptability();
	initMenu();
	initSearchFormMovements();
	initMainPageSlider();
	initMainPageServicesSlideEffect();
	initNewOffersMovements();
	initAboutSlider();
	initCallOrderPopup();

	initHeaderDropDownLists();
	initFiltersFormMovements();
	initSelect();
	initInputClearBtns();

	initAnchorLinks();
	initOffersMovements();
	initObjectMovements();
	initArticleMovements();

	function desktopTransform(typeOfDevice) {
		alert(typeOfDevice);
		if ($('.menu-container>.phone-wrapper')) {
			$('.menu-container>.phone-wrapper').appendTo($('.header-row'));
		}
	}
	function tabletTransform(typeOfDevice) {
		alert(typeOfDevice);
		if ($('.header-row>.phone-wrapper')) {
			$('.header-row>.phone-wrapper').insertBefore($('.menu'));
		}
	}
	function mobileTransform(typeOfDevice) {
		alert(typeOfDevice);
	}
	function initAdaptability() {
		var device = "",
			desktopResize = false,
			tabletResize = false,
			mobileResize = false,
			deviceDefinition = function() {
				var deviceWidth = window.innerWidth;

				if (deviceWidth>1310) {
					device = "desktop";
				} else if (deviceWidth<=1310 && deviceWidth>=768) {
					device = "tablet";
				} else if (deviceWidth<768) {
					device = "mobile";
				}
			},
			transform = function() {
				deviceDefinition();
				if (device === "desktop" && !desktopResize) {
					desktopTransform(device);
					desktopResize = true;
					tabletResize = false;
					mobileResize = false;
				} else if (device === "tablet" && !tabletResize) {
					tabletTransform(device);
					desktopResize = false;
					tabletResize = true;
					mobileResize = false;
				} else if (device === "mobile" && !mobileResize) {
					mobileTransform(device);
					desktopResize = false;
					tabletResize = false;
					mobileResize = true;
				}
			};

		transform();
		$(window).bind('resize', transform);
	}
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
			
			advancedSearch         = $('.advanced-search'),
			advancedSearchBtn      = advancedSearch.find('.advanced-search-btn'),
			advancedSearchCloseBtn = advancedSearch.find('.advanced-search-close-btn'),
			moreFiltersWrapper     = advancedSearch.find('.more-filters-wrapper'),
			btnsWrapper            = advancedSearch.find('.btns-wrapper'),
			moreFiltersBtnText     = advancedSearch.find('.more-filters-btn__text');

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
				transform: "translate(-"+hold.width()+"px, 0px)"			
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
	function initNewOffersMovements() {
		var newOffersWrapper              = $('.new-offers-wrapper'),
			newOffersMainSliderControls   = newOffersWrapper.find('.new-offers__primary-slider-controls'),
			newOffersMainSliderArrowLeft  = newOffersMainSliderControls.find('.new-offers__primary-slider-arrow_left'),
			newOffersMainSliderArrowRight = newOffersMainSliderControls.find('.new-offers__primary-slider-arrow_right'),
			newOffers                     = newOffersWrapper.find('.new-offers'),
			newOffersItem                 = newOffers.find('.new-offers__item');

		newOffersItem.each(function(i,el){
			var newOffersItemFavoritesBtn = $(el).find('.new-offers__favorites-btn'),
				newOffersSliderWrapper    = $(el).find('.new-offers__slider-wrapper'),
				newOffersImgSlider        = newOffersSliderWrapper.find('.new-offers__img-slider'),
				newOffersSliderControls   = newOffersSliderWrapper.find('.new-offers__slider-controls'),
				newOffersSliderLeftArr    = newOffersSliderControls.find('.new-offers__slider-controls_left-arrow'),
				newOffersSliderRightArr   = newOffersSliderControls.find('.new-offers__slider-controls_right-arrow');

			newOffersImgSlider.slick({
				infinite: false,
				appendArrows: newOffersSliderControls,
				prevArrow: newOffersSliderLeftArr,
				nextArrow: newOffersSliderRightArr
			});

			newOffersItemFavoritesBtn.on('click', function(evt){
				evt.preventDefault();
				$(el).toggleClass('in-favorites');
			})
		});

		newOffers.slick({
			infinite: false,
			swipe: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			appendArrows: newOffersMainSliderControls,
			prevArrow: newOffersMainSliderArrowLeft,
			nextArrow: newOffersMainSliderArrowRight
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
				},500);
			});
		});

		popupCloseBtn.on('click', function(evt) {
			evt.preventDefault();
			orderPopup.animate({
				opacity: '0'
			},500, 'swing', hidePopup);
		});
		
		orderPopup.on('click', function(evt) {
			evt.preventDefault();
			if ($(evt.target).is(orderPopup)) {
				orderPopup.animate({
					opacity: '0'
				},500, 'swing', hidePopup);
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
	function initOffersMovements() {
		var offersWrapper = $('.offers-wrapper'),
			offers        = offersWrapper.find('.offers'),
			offersItem    = offers.find('.offers__item');

		offersItem.each(function(i,el){
			var offersItemFavoritesBtn = $(el).find('.offers__favorites-btn'),
				offersSliderWrapper    = $(el).find('.offers__slider-wrapper'),
				offersImgSlider        = offersSliderWrapper.find('.offers__img-slider'),
				offersSliderControls   = offersSliderWrapper.find('.offers__slider-controls'),
				offersSliderLeftArr    = offersSliderControls.find('.offers__slider-controls_left-arrow'),
				offersSliderRightArr   = offersSliderControls.find('.offers__slider-controls_right-arrow'),
				offersPhoneBtn         = $(el).find('.offers__phone-btn');

			offersImgSlider.slick({
				infinite: false,
				appendArrows: offersSliderControls,
				prevArrow: offersSliderLeftArr,
				nextArrow: offersSliderRightArr
			});

			offersItemFavoritesBtn.on('click', function(evt){
				evt.preventDefault();
				$(el).toggleClass('in-favorites');
			})

			offersPhoneBtn.on('click', function(evt) {
				evt.preventDefault();
				offersPhoneBtn.toggleClass('phone-show');
			});
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