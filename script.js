new WOW().init();

////////////////////////////////////

$(document).ready(function(){
	var width = $(window).width();
	if(width < 800) {
		$("#nav").css("background-color", "#1F1F1F");
		$(".logo").css("font-size", "40px");
		return;
	}

	var scroll = $(window).scrollTop();
	if (scroll > 200) {
		$("#nav").addClass("new");
	}

	$(window).scroll(function(){
	  var scroll = $(window).scrollTop();
	  var width = $(window).width();

	  if (scroll > 200) {
		$("#nav").addClass("new");
	  } else{
		$("#nav").removeClass("new");  	
	  }
	  })
})

/////////////////////////////////////////////////////////////

$(function(){  
    var i =0;
    var images = ['css/images/slider-img1.jpg','css/images/slider-img2.jpg', 'css/images/slider-img3.jpg'];
    var image = $('header');
    image.css('background-image', 'url(css/images/slider-img1.jpg)');
    setInterval(function(){  
        image.fadeOut(10, function () {
            image.css('background-image', 'url(' + images[i] +')');
            image.fadeIn(10);
        });
        if(i == (images.length - 1)){
            i = 0; 
        } else {
            i++;
        }
    }, 3000);
})

/////////////////////////////////////////////////////////////////

$(".toggle").on("click", function() {
	$(".toggle-nav").toggleClass("slide");
})

$(".nav-link").on("click", function() {
	$(".toggle-nav").toggleClass("slide");
})

////////////////////////////////////////////////////////////////

$(window).on('load', function() {
	$('.loader').fadeOut('slow');
});

////////////////////////////////////////////////////////////////

$(document).ready(function() {
	$(".button").click(function(e) {
		e.preventDefault();
		var name = $(this).attr("data-filter");
		if(name == "all") {
			$(".filter").show("1000");
		} else {
			$(".filter").not("."+name).hide("1000");
			$(".filter").filter("."+name).show("1000");
		}
	});
	$(".button").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
	});
});

///////////////////////////////////////////////////////////////

$(window).on('scroll',function() {
    		if (checkVisible($('#icons'))) {
        		
    			var count = 0;
	    		var counting = setInterval(function(){
	        		if(count < 11) {
	            		$('.years').text(count);
	            		count++
	        		} else {
	            		clearInterval(counting)
	        		}
	    		}, 100);

			    var count1 = 50;
			    var counting1 = setInterval(function(){
			        if(count1 < 151) {
			            $('.dishes').text(count1);
			            count1++
			        } else {
			            clearInterval(counting1)
			        }
			    }, 5);

			    var count2 = 9800;
			    var counting2 = setInterval(function(){
			        if(count2 < 10001) {
			            $('.customers').text(count2 + "+");
			            count2++
			        } else {
			            clearInterval(counting2)
			        }
			    }, 5);

        		$(window).off('scroll');
   	 		} else {
        		// do nothing
    		}
});

function checkVisible( elm, eval ) {
    		eval = eval || "object visible";
    		var viewportHeight = $(window).height(), // Viewport Height
        	scrolltop = $(window).scrollTop(), // Scroll Top
        	y = $(elm).offset().top,
        	elementHeight = $(elm).height();   
    
		    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
		    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
		}