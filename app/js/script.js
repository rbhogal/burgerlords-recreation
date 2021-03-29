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
    logo.classList.remove('fade-in-menu');
    logo.classList.remove('fade-in-home');
    logoImg.src ='../../images/burgerlords_oval.png';
    headerLinks.classList.remove('fade-in-links');
    headerLinks.classList.add('fade-out-links');

    return;
  }

  header.classList.add('open');
  btnHamburger.classList.add('fade-in-menu');
  overlay.classList.add('fade-in-menu');
  overlay.classList.remove('fade-out-menu');

  logo.classList.add('fade-in-menu');

  logoImg.src = '../../images/burgerlords_oval_white.png';

  headerLinks.classList.add('fade-in-links');
  headerLinks.classList.remove('fade-out-links');  
});
