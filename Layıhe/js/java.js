$(document).ready(function () {
    $('.custom-long').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      });

       
      $("#video-notice .video-icon ").on("click", function () {
        $(".getVideo").fadeToggle(300).css("display", "flex");
        
      });
      $(".getVideo ").on("click", function () {
        
        $(".getVideo").fadeToggle(300);
         
      });
      
})