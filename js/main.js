// Grab dom elements
const shareIcon = document.querySelector('.share__icon');
const tooltip = document.querySelector('.tooltip');

// listen for click events
shareIcon.addEventListener('click', () => {
  tooltip.classList.toggle('active');
})