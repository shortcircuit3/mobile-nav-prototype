//= require_tree .

(function($) {

  // Reveal the navigation menu
  $('body').on('touchend', '.hamburger', function(){
    $('.dropdown').toggleClass('visible');
  });

  // Reveal the search form
  $('body').on('touchend ', '.search', function(e){
    e.preventDefault();
    if ($('.dropdown').hasClass('visible')){
      $('.dropdown').removeClass('visible');
      return false;
    }

    $('.blue-bar2').addClass('inview');
    $('.hamburger').addClass('hidden');
    $('.back').addClass('visible');
    // $('.search-field').focus();
  });

  // Hide the search form
  $('body').on('touchend', '.back', function(){
    $('.blue-bar2').removeClass('inview');
    $('.hamburger').removeClass('hidden');
    $('.back').removeClass('visible');
  });

})(jQuery);
