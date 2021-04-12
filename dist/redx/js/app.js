// (function () {
//   "use strict";





/* -----------------------------------------------
       Preloader
-----------------------------------------------*/

// window.addEventListener("load", function() {
//     const preloader = document.querySelector(".preloader")
//     preloader.className += " hide";
// });

// -----------------------------------------------
// Menu Toggle
// -----------------------------------------------


let navMain = document.getElementById('main-menu')
let toggleButtonPrimary = document.getElementById('toggle-btn-primary')
toggleButtonPrimary.addEventListener('click', () => {
  toggleButtonPrimary.classList.toggle('active')
  navMain.classList.toggle('active')
})


// -----------------------------------------------
// Swiper Sliders
// -----------------------------------------------


// Slider 1 -  Simple boxed slider
// -----------------------------------------------

// Slider 2 - Fullscreen slider
// -----------------------------------------------

const swiper1 = new Swiper('.ui-slider-1.swiper-container', {
  // autoplay: 500,
  speed: 1000,
  // autoplayDisableOnInteraction: true,
  autoplay: {
    delay: 3500,
  },
  autoplayDisableOnInteraction: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});




const swiper2 = new Swiper('.ui-slider-2 .swiper-container', {
  // autoplay: 500,
  speed: 1500,
  // autoplayDisableOnInteraction: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: '1',
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiper3 = new Swiper('.ui-slider-3 .swiper-container', {
  // autoplay: 500,
  speed: 1500,
  // autoplayDisableOnInteraction: true,
  autoplay: {
    delay: 5000,
  },
  pagination: '.swiper-pagination',
  paginationClickable: true,
  freeMode: false,
  loop: true,
  centeredSlides: false,
  breakpoints: {
    0: { /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 2,
      spaceBetween: 60,
    },
    767: { /* when window >= 767px - webflow tablet */
      slidesPerView: 3,
      spaceBetween: 100,
    },
    988: { /* when window >= 988px - webflow desktop */
      slidesPerView: 4,
      spaceBetween: 140,
    }
  },
});


const swiper4 = new Swiper('.ui-slider-4 .swiper-container', {
  // autoplay: 500,
  speed: 1500,
  // autoplayDisableOnInteraction: true,
  autoplay: {
    delay: 5000,
  },
  pagination: '.swiper-pagination',
  paginationClickable: true,
  freeMode: false,
  loop: true,
  centeredSlides: false,
  breakpoints: {
    0: { /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 2,
      spaceBetween: 40,
    },
    767: { /* when window >= 767px - webflow tablet */
      slidesPerView: 3,
      spaceBetween: 60,
    },
    988: { /* when window >= 988px - webflow desktop */
      slidesPerView: 4,
      spaceBetween: 80,
    }
  },
});


const swiper5 = new Swiper('.ui-slider-5 .swiper-container', {
  // autoplay: 500,
  speed: 1500,
  // autoplayDisableOnInteraction: true,
  autoplay: {
    delay: 5000,
  },
  pagination: '.swiper-pagination',
  paginationClickable: true,
  freeMode: false,
  loop: true,
  centeredSlides: false,
  breakpoints: {
    0: { /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 2,
      spaceBetween: 40,
    },
    767: { /* when window >= 767px - webflow tablet */
      slidesPerView: 3,
      spaceBetween: 60,
    },
    988: { /* when window >= 988px - webflow desktop */
      slidesPerView: 3,
      spaceBetween: 60,
    }
  },
});


const swiper6 = new Swiper('.ui-slider-6 .swiper-container', {
  // // autoplay: 500,
  // speed: 1000,
  // // autoplay: {
  // // delay: 3500,
  // // },
  // slidesPerView: 1,
  // centeredSlides: false,
  // spaceBetween: 100,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 1,
  autoHeight: false,
  autoWidth: false,
  loop: true,
  preloadImages: true,
  mousewheel: false,
  centeredSlides: false,
  grabCursor: true,
  initialSlide: 0,
  direction: "horizontal",
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});


// -----------------------------------------------
// Tabs
// -----------------------------------------------



const tabs = document.querySelectorAll('[data-tab]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(tab.dataset.tab)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// -----------------------------------------------
// Gallery Light box
// -----------------------------------------------

const images = document.querySelectorAll('.ui-lightbox-gallery figure img');
const lightboxBg = document.querySelector('.ui-lightbox');
var body = document.body;

images.forEach(image => {
  image.addEventListener('click', e => {

    // Activate Lightbox BG
    lightboxBg.classList.add('active');
    // Disable Body Scroll
    body.classList.add('overflow-hide');
    
    // Add clicked image to lightbox bg    
    const lightboxImg = document.querySelector('.ui-lihtbox-image');
    lightboxImg.src = '';
    lightboxImg.src = image.src;
    
    // Reset Lightbox 
    lightboxBg.addEventListener('click', () => {
      lightboxBg.classList.remove('active');
      body.classList.remove('overflow-hide');
    })

  })
});



// -----------------------------------------------
// Menu Toggle
// -----------------------------------------------

// Grab menu components

// let toggleBtn = document.getElementById('')
// let mainMenu = document.getElementById('')
// let menuItem = document.getElementById('')
// let subMenu = document.getElementById('')

// Listen to clicks on the page
// document.addEventListener('click', (event) => {
//     // Run when primary toggle button is clicked
//     if (!event.target.classList.contains('toggle-btn-primary')) return; {
//         toggleButtonPrimary.classList.toggle('active')
//         navMain.classList.toggle('active')
//         console.log('Toggle Menu')
//     }
// }, false);


// Reset menu 
// console.log('Reset Menu')
// toggleButtonPrimary.classList.remove('active')
// navMain.classList.remove('active')


// -----------------------------------------------
// Sub Menu
// -----------------------------------------------

// const parentMenu = document.querySelectorAll('.parent-menu')
// const subMenu = document.querySelector('.sub-menu')


// for (i = 0; i < parentMenu.length; i++) {
//     parentMenu[i].addEventListener('click', (event) => {
//         event.preventDefault();
//         subMenu.classList.toggle('active')
//     })

// }


// ------------------------------------------------


// var linkToggle = document.querySelectorAll('.js-toggle');

// for(i = 0; i < linkToggle.length; i++){

//   linkToggle[i].addEventListener('click', function(event){

//     event.preventDefault();

//     var container = document.getElementById(this.dataset.container);

//     if (!container.classList.contains('active')) {

//       container.classList.add('active');
//       container.style.height = 'auto';

//       var height = container.clientHeight + 'px';

//       container.style.height = '0px';

//       setTimeout(function () {
//         container.style.height = height;
//       }, 0);

//     } else {

//       container.style.height = '0px';

//       container.addEventListener('transitionend', function () {
//         container.classList.remove('active');
//       }, {
//         once: true
//       });

//     }

//   });

// }

// Use strict
// })();