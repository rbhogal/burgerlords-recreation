'use strict';

//////////////////////////////////////////////////////////////
// HAMBURGER MENU

// Selectors
const header = document.querySelector('.header');
const body = document.querySelector('body');
const btnHamburger = document.querySelector('.header__hamburger-menu');
const overlay = document.querySelector('.header__overlay');
const logo = document.querySelector('.header__logo');
const logoImg = document.getElementById('logo-img');
const headerLinks = document.querySelector('.header__menu');

btnHamburger.addEventListener('click', () => {
  header.classList.remove('fade-in-scroll');

  // Close hamburger menu
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    body.classList.remove('scroll-lock');
    overlay.classList.remove('fade-in-menu');
    overlay.classList.add('fade-out-menu');
    logo.classList.remove('fade-in-menu');
    logo.classList.remove('fade-in-home');
    logoImg.src = '../../images/burgerlords_oval.png';
    headerLinks.classList.remove('fade-in-links');
    headerLinks.classList.add('fade-out-links');

    return;
  }

  // Open hamburger menu
  header.classList.add('open');
  body.classList.add('scroll-lock');
  btnHamburger.classList.add('fade-in-menu');
  overlay.classList.add('fade-in-menu');
  overlay.classList.remove('fade-out-menu');

  logo.classList.add('fade-in-menu');

  logoImg.src = '../../images/burgerlords_oval_white.png';

  headerLinks.classList.add('fade-in-links');
  headerLinks.classList.remove('fade-out-links');
});

//////////////////////////////////////////////////////////////
// HEADER LINKS -- ACTIVE

// headerLinks.addEventListener('click', e => {
//   let activeLink = e.target;
//   sessionStorage.setItem('activeLinkKey', activeLink);

//   let activeLink = sessionStorage.getItem('activeLinkKey');
//   console.log(activeLinkKey);
// });

//////////////////////////////////////////////////////////////
// SCROLL ANIMATIONS

// Header scroll animations
let lastScroll = window.scrollY;

document.onscroll = function () {
  // Scroll down -- fade out
  if (lastScroll < window.scrollY) {
    header.classList.remove('fade-in-scroll');
    header.classList.add('fade-out-scroll');
    lastScroll = window.scrollY;
    return;
  }

  // Scroll up -- fade in
  if (lastScroll > window.scrollY) {
    header.classList.remove('fade-out-scroll');
    header.classList.add('fade-in-scroll');
    lastScroll = window.scrollY;
  }
};
