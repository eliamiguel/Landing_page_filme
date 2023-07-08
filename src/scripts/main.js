$(document).ready(function() {

  $('.lancamentos__container__list').slick({
    autoplay: false,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="material-symbols-outlined">arrow_back_ios</button>',
    nextArrow: '<button type="button" class="material-symbols-outlined">arrow_forward_ios</button>',
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1082,
        settings: {
          slidesToShow: 2.5
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2.5
        }
      }
    ]
  });
  $('.mais__filmes__list').slick({
    autoplay: false,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="material-symbols-outlined">arrow_back_ios</button>',
    nextArrow: '<button type="button" class="material-symbols-outlined">arrow_forward_ios</button>',
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1082,
        settings: {
          slidesToShow: 2.5
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2.5
        }
      }
    ]
  });
  


})
document.addEventListener('DOMContentLoaded', function(){
  const filmes =document.getElementById('filmes')
  filmes.addEventListener('click', function(){
AparecerDesaparecer();
  })
  

  })
  
  function AparecerDesaparecer(){
    const mais__filmes =document.querySelector('.mais__filmes')
    if (mais__filmes.style.display ==="none"){
      mais__filmes.style.display = "block";
      
     } else {
       mais__filmes.style.display = "none";
      
     }
  }
  
