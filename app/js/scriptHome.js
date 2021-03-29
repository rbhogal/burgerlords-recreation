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
