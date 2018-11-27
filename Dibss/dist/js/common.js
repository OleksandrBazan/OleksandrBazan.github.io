$(document).ready(function() {


	/* ===== slick slider ===== */

    var $carousel = $('.slick');

	$carousel
	.slick({
		rtl: true,
		arrows: true,
		autoplay: true,
		adaptiveHeight: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
    {
      breakpoint: 993,
      settings: {
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 4

      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        slidesToShow: 3,
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 481,
      settings: {
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: 1
      }
    }
  ]
	});


	/* ===== POPUP ===== */

	$(".popup").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".slider__item").each(function(i) {
		$(this).find('a').attr("href", "#work_"+i);
		$(this).find('.slider__descr').attr("id", "work_" +i).click(function(){
			$(this).css("z-index", "1000");
		});
	});

	/* ===== Preloader ===== */

	$(window).on('load', function() {
		$('.loader-inner').fadeOut();
		$('.loader').delay(400).fadeOut('slow');
	});

	// mobile menu
	$('.toggle-btn').on('click', function() {
		$(this).toggleClass('on');
		$('.menu__wrapper').slideToggle();
		return false;
	});

});