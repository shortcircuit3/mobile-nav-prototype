//= require_tree .

(function($) {

  var isSearchOpen = false;

  $('body').on('touchend', '.content', function(e){
    e.preventDefault();
    if (isSearchOpen === true) {
      $('.search-field').blur();
      $('.blue-bar2').removeClass('inview');
    }
  });

  // Reveal the navigation menu
  $('body').on('touchend', '.hamburger', function(e){
    e.preventDefault();
    if(isSearchOpen === true){
      $('.blue-bar2').removeClass('inview');
      $('.hamburger').removeClass('hidden');
      $('.search-field').blur();
      isSearchOpen = false;
      return false;
    } else {
      $('.dropdown').toggleClass('visible');
    }

    // if ($('.blue-bar2').hasClass('inview')) {
    //   $('.blue-bar2').removeClass('inview');
    //   $('.hamburger').removeClass('hidden');
    //   $('.back').removeClass('visible');
    //   return false;
    // }
  });

  function onSearchTouchEnd(e){
    if (e) { e.preventDefault(); }

    if ($('.dropdown').hasClass('visible')){
      $('.dropdown').removeClass('visible');
      isSearchOpen = true;
      return false;
    }

    $('.blue-bar2').addClass('inview');
    $('.back').addClass('visible');
    isSearchOpen = true;
  }

  // Reveal the search form
  $('body').on('touchend ', '.search', onSearchTouchEnd);

})(jQuery);
