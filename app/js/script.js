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

// Selectors
navLinks = document.querySelector('.header__links');
navLink = document.querySelector('.header__link');

// Event Selectors
navLinks.addEventListener('click', () => {
  console.log('link');
  // Remove active class
  // array.forEach(element => {

  // });

  // Add active class
  // navLink.classList.add('.active');
});

//////////////////////////////////////////////////////////////
// SCROLL ANIMATIONS

// Header animation
document.addEventListener(
  'scroll',
  () => {
    // header.classList.add('fade-out-scroll');
  },
  { passive: true }
);

// Title card animations

// scrollTop
