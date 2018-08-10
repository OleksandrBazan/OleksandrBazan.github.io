$(document).ready(function() {

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(" .carousel");
	owl.owlCarousel({
		loop : true,
		items: 1,
		autoplay: true,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        	}
    	},
		autoplayTimeout: 5000
	});
	owl.on( ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});
	
});