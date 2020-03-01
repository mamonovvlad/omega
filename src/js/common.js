$(document).ready(function () {
	var mql = window.matchMedia('all and (max-width: 768px)');
	if (mql.matches) {
		if ($(".swiper-container_block_one").length > 0) {
			var swiper = new Swiper('.swiper-container_block_one', {
				slidesPerView: 'auto',
				spaceBetween: 11,
				freeMode: true,
				// loop: true,
				navigation: {
					nextEl: '.swiper-button-next_block_one',
					prevEl: '.swiper-button-prev_block_one',
				},
			});
			$('.remove').addClass('swiper-wrapper')
			$('.remove').removeClass('directions-list')
		}
	} else {
		// нет, размер окна более 479px 
	}


	if ($(".swiper-container1").length > 0) {
		var swiper1 = new Swiper('.swiper-container1', {
			effect: 'fade',
			navigation: {
				nextEl: '.swiper-button-next1',
				prevEl: '.swiper-button-prev1',
			},
			pagination: {
				el: '.swiper-pagination12',
				clickable: true,
			},
			pagination: {
				el: '.swiper-pagination11',
				type: 'fraction',
			},
		});

		$('.swiper-menu').on('click', '.swiper-menu__item', function () {
			const index = $(this).data('index');
			swiper1.slideTo(index);
		});

		swiper1.on('slideChange', function () {
			$('.swiper-menu__item').removeClass('active');
			var activeIndex = swiper1.activeIndex + "";
			$('.swiper-menu__item[data-index=' + activeIndex + ']').addClass('active');
		});

		var allSlides = $('.banner-slider .swiper-slide').length;

		for (var i = 0; i < allSlides; i++) {
			if (i === 0) {
				$('.swiper-menu').append('<li class="swiper-menu__item active" data-index="' + i + '"></li>')
			} else {
				$('.swiper-menu').append('<li class="swiper-menu__item" data-index="' + i + '"></li>')
			}
		}
	}

	if ($(".swiper-container2").length > 0) {
		var swiper = new Swiper('.swiper-container2', {
			spaceBetween: 160,
			navigation: {
				nextEl: '.swiper-button-next2',
				prevEl: '.swiper-button-prev2',
			},
		});
	}

	if ($(".swiper-container3").length > 0) {
		var swiper = new Swiper('.swiper-container3', {
			slidesPerView: 'auto',
			spaceBetween: 11,
			freeMode: true,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next3',
				prevEl: '.swiper-button-prev3',
			},
		});
	}

	if ($(".swiper-container4").length > 0) {
		var swiper = new Swiper('.swiper-container4', {
			navigation: {
				nextEl: '.swiper-button-next4',
				prevEl: '.swiper-button-prev4',
			},
			simulateTouch: false
		});
	}

	if ($(".gallery-thumbs").length > 0) {
		var galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 44,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			breakpoints: {
				700: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				400: {
					slidesPerView: 2,
					spaceBetween: 20
				},
			}
		});
		var galleryTop = new Swiper('.gallery-top', {
			autoHeight: true,
			navigation: {
				nextEl: '.swiper-button-next5',
				prevEl: '.swiper-button-prev5',
			},
			thumbs: {
				swiper: galleryThumbs
			}
		});
	}

	if ($(".swiper-container6").length > 0) {
		var swiper = new Swiper('.swiper-container6', {
			spaceBetween: 70,
			navigation: {
				nextEl: '.swiper-button-next6',
				prevEl: '.swiper-button-prev6',
			},
		});
	}

	//Попап менеджер FancyBox
	// data-fancybox="gallery" создание галереи
	// data-caption="<b>Подпись</b><br>"  Подпись картинки
	// data-width="2048" реальная ширина изображения
	// data-height="1365" реальная высота изображения
	// data-type="ajax" загрузка контента через ajax без перезагрузки
	// data-type="iframe" загрузка iframe (содержимое с другого сайта)
	$(".fancybox").fancybox({
		hideOnContentClick: true,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши. 
		loop: true, // Бесконечная навигация по галерее
		arrows: true, // Отображение навигационные стрелки
		infobar: true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar: true, // Отображение панели инструментов (кнопки вверху)
		buttons: [ // Отображение панели инструментов по отдельности (кнопки вверху)
			// 'slideShow',
			// 'fullScreen',
			// 'thumbs',
			// 'share',
			//'download',
			//'zoom',
			'close'
		],
		touch: false,
		animationEffect: "zoom", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
		transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
		animationDuration: 500, // Длительность в мс для анимации открытия / закрытия
		transitionDuration: 1366, // Длительность переключения слайдов
		slideClass: '', // Добавить свой класс слайдам

	});


	// Маска для формы телефона
	$("input[type='tel']").inputmask({
		"mask": "+7 (999) 999-9999"
	});
	// <input type="tel" placeholder="+7 (___) ___-____" name="tel">


	// аккордеон
	$(".open_toggle").on('click', function (e) {
		e.preventDefault();
		if ($(this).next("div").is(":visible")) {
			$(this).next("div").slideUp(200);
			$(this).removeClass("active");
		} else {
			$(".block_toggle").slideUp(200);
			$(this).next("div").slideDown(200);
			$(this).parents().siblings().children(".open_toggle").removeClass("active");
			$(this).addClass("active");
		}
	});

	// табы
	$('ul.tab_list a').click(function (e) {
		e.preventDefault();
		$('ul.tab_list .active').removeClass('active');
		$(this).addClass('active');
		var tab = $(this).attr('href');
		$('.block_content').not(tab).css({
			'display': 'none'
		});
		$(tab).fadeIn(400);
	});

	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {} else {
		document.body.classList.add('no-touch');
	}

	$(window).load(function () {
		$(".cases-item-img-wrap").twentytwenty({
			no_overlay: true
		});
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(document).ready(function () {
		$("#form1").submit(function () {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function () {
				$(this).find("input").val("");
				$("#form1").trigger("reset");
				$.fancybox.open($("#pop"));
				setTimeout(function () {
					$.fancybox.close();
				}, 1500);
			});
			return false;
		});
		$("#form2").submit(function () {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function () {
				$(this).find("input").val("");
				$("#form2").trigger("reset");
				$.fancybox.open($("#pop"));
				setTimeout(function () {
					$.fancybox.close();
				}, 1500);
			});
			return false;
		});
		$("#form3").submit(function () {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function () {
				$(this).find("input").val("");
				$("#form3").trigger("reset");
				$.fancybox.open($("#pop"));
				setTimeout(function () {
					$.fancybox.close();
				}, 1500);
			});
			return false;
		});
		$("#form4").submit(function () {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function () {
				$(this).find("input").val("");
				$("#form4").trigger("reset");
				$.fancybox.open($("#pop"));
				setTimeout(function () {
					$.fancybox.close();
				}, 1500);
			});
			return false;
		});
	});

	$('.main-header-toggle').on('click', function () {
		$('.main-header-menu').slideToggle();
	});

});