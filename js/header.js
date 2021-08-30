$(document).ready(function () {
  $('.open-menu').click(function () {
    $('.menu-box').addClass('active');
  });
  $('.close-button').click(function () {
    $('.menu-box').removeClass('active');
  });
});

window.addEventListener('mouseup', function (event) {
  var menu = document.querySelector('.menu-box');
  if (event.target != menu && event.target.parentNode != menu) {
    menu.classList.remove('active');
  }
});
