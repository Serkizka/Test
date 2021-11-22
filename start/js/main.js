$(function(){
      $('.team__inner').slick({
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          nextArrow: '<button type="button" class="slick-btn slick-next"><img type="button" src=\'images/arrow.png\'></button>',
          prevArrow: '<button type="button" class="slick-btn slick-prev"><img src=\'images/arrow.png\' class=\'rotateimg180\'></button>',
          
      });

      $('.projects__inner').slick({
        dots:true,
        slidesToShow:3,
        nextArrow: '<button type="button" class="slick-btn slick-next">1</button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev">2</button>',
      });

      
});



$(document).ready(function() {
    $(".language__btn").click(function () {
        $(".language__btn").removeClass("language__btn_activated");
        $(this).addClass("language__btn_activated");
    });
});


