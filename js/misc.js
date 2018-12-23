$(document).ready(function(){

    var $nav = $('.navbar');//Caching element
    var prev = $(window).scrollTop();
    var temp;
    var count = 0;
    // hide .navbar first - you can also do this in css .nav{display:none;}

    // fade in .navbar
    $(window).scroll(function () {
        temp = $(this).scrollTop();
        //alert((prev - temp));
        if(prev - temp > 0){
            $nav.animate({top: "0px"}, 500);
        }else{
            if(count < 20){
                count++;
            }else{
                $nav.animate({top: "-100px"}, 500);
                count = 0; 
            }
        }
        prev = temp;

    });
   
});
