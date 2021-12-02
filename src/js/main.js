// const bar = document.querySelector('#toggle');
// const menu = document.querySelector('.nav__content-devide');
// const nav = document.querySelector('.nav')




const navToggle = document.querySelector("#toggle");
const links = document.querySelector(".nav__content-devide");
const navLink = document.querySelector('.nav-item')
const header = document.querySelector('.header-content')
navToggle.addEventListener("click", function () {
  links.classList.toggle("active");
})
header.addEventListener('click', () => {
  links.classList.remove('active')
})

// SWIPER
var $st = $('.pagination');
var $slickEl = $('.center');

$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $st.text(i + ' of ' + slick.slideCount);
});

$slickEl.slick({
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 5,
  focusOnSelect: true,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '140px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1201,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '140px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 993,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '140px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '120px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 446,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 335,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 295,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    },
  ]
});

// tabs


// Test 
// Basic initialization is like this:
// $('.your-class').slick();

// I added some other properties to customize my slider
// Play around with the numbers and stuff to see
// how it works.
// $('.slick-carousel').slick({
//   infinite: true,
//   slidesToShow: 3, // Shows a three slides at a time
//   slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
//   arrows: true, // Adds arrows to sides of slider
//   dots: true // Adds the dots on the bottom
 
// });

// DEMO
$(document).ready(function(){
  $('.carousel').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    dots:true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,

      }

    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        
      }
    }]
  });
});

