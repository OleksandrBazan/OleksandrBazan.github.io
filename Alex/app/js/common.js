$(document).ready(function() {

	
 	 $('#portfolio_grid').mixItUp();

	
	$('.s_portfolio li').click(function() {
		$('.s_portfolio li').removeClass('active');
		$(this).addClass('active');
	});

	$('.portfolio_item').each(function(i){
		$(this).find('a').attr('href', '#work_' + i);
		$(this).find('.portf_descr').attr('id', 'work_' + i);
	});

	// Validation
	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

	function hightDetect(){
	$('.main_head').css('height', $(window).height());
	};

	hightDetect();

	$(window).resize(function(){
		hightDetect();
	});

	$('.top_text h1').animated('fadeInDown', 'fadeDownUp');
	$('.top_text p, .section_header').animated('fadeInUp', 'fadeOutDown');
	$('.animate_1').animated('flipInY', 'fadeOutY');
	$('.animate_2').animated('fadeInLeft', 'fadeOutDown');
	$('.animate_3').animated('fadeInRight', 'fadeOutDown');

	$('.left .resume_item').animated('fadeInLeft', 'fadeOutDown');
	$('.right .resume_item').animated('fadeInRight', 'fadeOutDown');

	

	// $('.portfolio_item').each(function(i){
	// 	$(this).find('a').attr('href', '#work_' + i );
	// 	$(this).find('.portf_descr').attr('id', 'work_' + i);
	// });
		

	$(".toggle_menu").click(function() {
		$("#sandwich").toggleClass("active");
	});

	$('.top_menu ul a').click(function(){
		$('.top_menu').fadeOut(600);
		$("#sandwich").toggleClass("active");
		$('.top_text').removeClass('h_opacity');
	});

	$('.toggle_menu').click(function(){
		if ($('.top_menu').is(':hidden')){
			$('.top_menu').fadeIn(600);
			$('.top_menu ul a').addClass('fadeInUp animated');
			$('.top_text').addClass('h_opacity');
		} else{
			$('.top_menu').fadeOut(600);
			$('.top_text').removeClass('h_opacity');
		}
	});
	$('.popup').magnificPopup({type: 'image'});
	$('.popup_content').magnificPopup({type:'inline', midClick: true});

	$("a[href*='#']").mPageScroll2id();
	

});



$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});




