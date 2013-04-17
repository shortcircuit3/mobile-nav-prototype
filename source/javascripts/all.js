//= require_tree .

(function($) {

  // Reveal the navigation menu
  $('body').on('click', '.hamburger', function(){
    $('.dropdown').toggleClass('visible');
  });

  // Reveal the search form
  $('body').on('click', '.search', function(){
    if ($('.dropdown').hasClass('visible')){
      $('.dropdown').removeClass('visible');
    }
    $('.logo').addClass('hidden');
    $('.toolbar-icons').addClass('hidden');
    $('.search-form').removeClass('hidden');

  });

  // Hide the search form
  $('body').on('click', '.cancel', function(){
    $('.logo').removeClass('hidden');
    $('.toolbar-icons').removeClass('hidden');
    $('.search-form').addClass('hidden');
  });

})(jQuery);
