$(function(){
      $('.slider__inner').slick({
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          
          
          
          nextArrow: '<button type="button" class="slick-btn slick-next"><img type="button" ></button>',
          prevArrow: '<button type="button" class="slick-btn slick-prev"><img type="button" ></button>',

          responsive: [
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: NamedNodeMap,
              }
            },

              
                {
                  breakpoint: 840,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    arrows: NamedNodeMap,
                  }
                }
              ]
          
      });

      $(document).ready(function(){
        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'

        });

        

        $('.slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          asNavFor: '.slider-for',
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          

          nextArrow: '<button type="button" class="slick-btn slick-next"><img type="button" ></button>',
          prevArrow: '<button type="button" class="slick-btn slick-prev"><img type="button" ></button>',

          responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: NamedNodeMap,
              }
            },

            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                arrows: NamedNodeMap,
              }
            }
          ]
            
        });
      });

      
      $('.menu__btn').on('click', function(){
        $('.menu ul').toggleClass('menu__list--active')
      });
});







$(document).ready(function() {
    $(".language__btn").click(function () {
        $(".language__btn").removeClass("language__btn_activated");
        $(this).addClass("language__btn_activated");
    });
});


