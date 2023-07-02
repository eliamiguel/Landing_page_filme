$(document).ready(function() {

  $('.lancamentos__list').slick({
    autoplay: false,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="material-symbols-outlined">arrow_back_ios</button>',
    nextArrow: '<button type="button" class="material-symbols-outlined">arrow_forward_ios</button>',
    infinite: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
    
  });
})