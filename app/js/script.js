//////////////////////////////////////////////////////////////
// ORDER NOW - HOVER EFFECT

// Selectors
const order = document.querySelector('.hero__header');
const bgImg = document.querySelector('.hero__bg-img');
const subHeading = document.querySelector('.hero__subheader');
const bgOverlay = document.querySelector('.bg-overlay');

// Add background color and remove text shadows
order.addEventListener('mouseover', () => {
  // Remove classes
  bgOverlay.classList.remove('fade-out');
  order.classList.remove('show-shadow-header');
  subHeading.classList.remove('show-shadow-subheader');

  // Add classes
  bgOverlay.classList.add('fade-in');
  order.classList.add('hide-shadow');
  order.classList.add('hero__header--underline');
  subHeading.classList.add('hide-shadow');
});

// Remove background and add text shadows
order.addEventListener('mouseout', () => {
  // Remove classes
  bgOverlay.classList.remove('fade-in');
  order.classList.remove('hide-shadow');
  subHeading.classList.remove('hide-shadow');

  // Add classes
  bgOverlay.classList.add('fade-out');
  order.classList.add('show-shadow-header');
  subHeading.classList.add('show-shadow-subheader');
});

//////////////////////////////////////////////////////////////
// HAMBURGER MENU

// Selectors
const header = document.querySelector('.header');
const btnHamburger = document.querySelector('.header__hamburger-menu');
const overlay = document.querySelector('.header__overlay');
const logo = document.querySelector('.header__logo');
const logoImg = document.getElementById('logo-img');
const headerLinks = document.querySelector('.header__menu');

btnHamburger.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.remove('fade-in-menu');
    overlay.classList.add('fade-out-menu');
    logoImg.src ='../../images/burgerlords_oval.png';
    headerLinks.classList.remove('fade-in-menu');
    headerLinks.classList.add('fade-out-menu');

    return;
  }

  header.classList.add('open');
  btnHamburger.classList.add('fade-in-menu');
  overlay.classList.add('fade-in-menu');
  overlay.classList.remove('fade-out-menu');

  logo.classList.add('fade-in-menu');

  logoImg.src = '../../images/burgerlords_oval_white.png';

  headerLinks.classList.add('fade-in-menu');
  headerLinks.classList.remove('fade-out-menu');  
});
