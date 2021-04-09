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
const hamburgerMenu = document.querySelector('.header__menu');
const headerLinks = document.querySelector('.header__links');

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
    logoImg.src = '';
    logoImg.src = '../images/burgerlords_oval.png';
    hamburgerMenu.classList.remove('fade-in-links');
    hamburgerMenu.classList.add('fade-out-links');

    return;
  }

  // Open hamburger menu
  header.classList.add('open');
  body.classList.add('scroll-lock');
  btnHamburger.classList.add('fade-in-menu');
  overlay.classList.add('fade-in-menu');
  overlay.classList.remove('fade-out-menu');

  logo.classList.add('fade-in-menu');

  logoImg.src = '';
  logoImg.src = '../images/burgerlords_oval_white.png';

  hamburgerMenu.classList.add('fade-in-links');
  hamburgerMenu.classList.remove('fade-out-links');
});

//////////////////////////////////////////////////////////////
// HEADER LINKS -- ACTIVE

// const [Menu, Goldbelly, Story, Gallery, FAQ, Newsletter] = links;
// Get the active links values from storage and set classes

// convert that string to idk class... stuff

// add the appropriate class to active link

// headerLinks.addEventListener('click', e => {
// let activeLink = e.target.textContent;

// set value of active header link in storage
// sessionStorage.setItem('Header Link', e.target.textContent);

// set the class
//   let activeLink = sessionStorage.getItem('activeLinkKey');
//   console.log(activeLinkKey);
// });

//////////////////////////////////////////////////////////////
// SCROLL ANIMATIONS

// Selectors
const title = document.querySelector('.title');
const titleOverlay = document.querySelector('.title-card-overlay');

// Header scroll animations
let lastScroll = window.scrollY;

document.onscroll = function () {
  // Scroll down -- fade out
  if (lastScroll < window.scrollY) {
    header.classList.remove('fade-in-scroll');
    header.classList.add('fade-out-scroll');
    title.classList.remove('fade-in-scroll');
    title.classList.add('fade-out-scroll');
    titleOverlay.classList.remove('fade-in');
    titleOverlay.classList.add('fade-out');
    lastScroll = window.scrollY;
    return;
  }

  // Scroll up -- fade in
  if (lastScroll > window.scrollY) {
    header.classList.remove('fade-out-scroll');
    header.classList.add('fade-in-scroll');
    lastScroll = window.scrollY;
  }

  // Top of the page -- fade in
  if (lastScroll === 0) {
    title.classList.remove('fade-out-scroll');
    title.classList.add('fade-in-scroll');
    titleOverlay.classList.remove('fade-out');
    titleOverlay.classList.add('fade-in');
  }
};
