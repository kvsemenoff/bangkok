

$(document).ready(function(){

	// Бургер 
	$(".burger").click(function(){
		$(".main-menu__style").slideDown(500);
		$(".fa-bars").css("display", "none");
	});
	$(".main-menu__closer").click(function(){
		$(".main-menu__style").slideUp(500);
		$(".fa-bars").css("display", "inline-block");
	});
	// END бургер 

	var owlcart = $("#slider-header");
	owlcart.owlCarousel({
		// loop:true,
		// nav:true,
		autoplay:true,
		smartSpeed:1000,
		margin:20,
		// mouseDrag:false,
		// touchDrag: false,
		// center:false,
		navText:['<span class="prev-left"></span>','<span class="next-right"></span>'],
		responsive:{
			0:{
				items:1
			},
			468:{
				items:2
			},
			750:{
				items:3
			},
			992:{
				items:5
			},
			1200:{
				items:6
			}
		}
	});

	$('.js-phone').mask("+7(999)999-99-99?");

});
