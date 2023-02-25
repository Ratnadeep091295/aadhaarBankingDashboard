
        $(document).ready(function () {

            /*----------SIDEBAR------------*/
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });

/*----------START HEADER RIGHT------------*/

        const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
        });



/* ========================================== 
LOGIN SLIDER
========================================== */


    // $(function(){      
     

    //    $('.login-slider').jCarousel({
    //        type:'slidey-up',
    //       carsize: {carwidth:500,carheight:700},

    //    });
    // }); 




    $(document).ready(function(){
// invoke the carousel
    $('#myCarousel').carousel({
      interval:6000
    });

// scroll slides on mouse scroll 
$('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){

        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');
      
      
        }
        else{
            $(this).carousel('next');
      
        }
    });

//scroll slides on swipe for touch enabled devices 

  $("#myCarousel").on("touchstart", function(event){
 
        var yClick = event.originalEvent.touches[0].pageY;
      $(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});
    
});
//animated  carousel start
$(document).ready(function(){

//to add  start animation on load for first slide 
$(function(){
    $.fn.extend({
      animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass(animationName);
        });
      }
    });
       $('.item1.active img').animateCss('slideInDown');
       $('.item1.active h2').animateCss('zoomIn');
       $('.item1.active p').animateCss('fadeIn');
       
});
  
//to start animation on  mousescroll , click and swipe


 
     $("#myCarousel").on('slide.bs.carousel', function () {
    $.fn.extend({
      animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass(animationName);
        });
      }
    });
  
// add animation type  from animate.css on the element which you want to animate

    $('.item1 .carousel-heading').animateCss('slideInDown');
    $('.item1 h2').animateCss('zoomIn');
    $('.item1 p').animateCss('fadeIn');
    
    $('.item2 .carousel-heading').animateCss('zoomIn');
    $('.item2 h2').animateCss('swing');
    $('.item2 p').animateCss('fadeIn');
    
    $('.item3 .carousel-heading').animateCss('fadeInLeft');
    $('.item3 h2').animateCss('fadeInDown');
    $('.item3 p').animateCss('fadeIn');
    });
});


/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

// $(window).scroll(function(){
//     if ($(window).scrollTop() >= 300) {
//         $('.header').addClass('fixed-header');
//         $('fixed-header').style.transform = 'translateZ(0)';
      
//     }
//     else {
//         $('.header').removeClass('fixed-header');
       
//     }
// });


