require.config({
	paths: {
		"jquery": "jquery",
		//jquery默认加载
		"swiper": "swiper",
		"goto": "goToTop",
	}
})

require(['jquery', 'goto'], function($, goto) {
	$(window).scroll(function() {
		if (100 > $(window).scrollTop()) {
			$('.layout-fix .up').removeClass('active')
		} else {
			$('.layout-fix .up').addClass('active')
		}
	});
	$('.layout-fix .up').on('click', function() {
		goto.gotoTop();
	});

	$('.footer .top .pl20 h3').on('click', function() {
		if (window.innerWidth < 768) {
			$(this).siblings().slideToggle();
		}
	});
})
