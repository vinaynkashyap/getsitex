/* ===================


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

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
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