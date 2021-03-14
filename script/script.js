$(document).ready(function() {
  if (window.matchMedia( "(max-width: 768px)" ).matches) {
    $(".header_menubar").on('click', function() {
      $(".header_nav").slideToggle();
    });
    }
});