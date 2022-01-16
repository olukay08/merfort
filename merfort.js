$(document).ready(function() {
    
	$(".bot").click(function(){
        $("html,body").animate({
            scrollTop:0} ,1000);
            
           });

	 $('.owl-carousel').owlCarousel({
    loop:true,
		autoplay:true,
    margin:20,
		autoplayTimeout:2000,
    autoplayHoverPause:true,
		

    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false,
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
        }
    }
	

		
});

	
			
})
		
	
	
	
	



	
	
	
	
	
	
	
	
	
