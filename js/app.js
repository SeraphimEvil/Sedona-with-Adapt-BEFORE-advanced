'use strict';

let mobileMenuOpen = document.querySelector('.page-header__toggle');
let mobileMenuClose = document.querySelector('.main-nav__close');
let mobilemenu = document.querySelector('.main-nav');

mobileMenuOpen.addEventListener('click', function() {
  mobilemenu.style.top = "0px";
})

mobileMenuClose.addEventListener('click', function() {
  mobilemenu.style.top = "-250px";
})
