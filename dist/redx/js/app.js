/* ===================


/* -----------------------------------------------
       Preloader
-----------------------------------------------*/

window.addEventListener("load", function() {
    const preloader = document.querySelector(".preloader")
    preloader.className += " hide";
});

// -----------------------------------------------
// Menu Toggle
// -----------------------------------------------


const navMain = document.getElementById('nav-main')
const toggleMenu = document.getElementById('toggle-menu-primary')

toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('active')
    navMain.classList.toggle('active')
})

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