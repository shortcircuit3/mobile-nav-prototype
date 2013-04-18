//= require_tree .

(function($) {

  var isSearchOpen = false;

  $('body').on('touchend', '.content', function(){
    if (isSearchOpen === true) {
      $('.blue-bar2').removeClass('inview');
    }
  });

  // Reveal the navigation menu
  $('body').on('touchend', '.hamburger', function(){
    if(isSearchOpen === true){
      $('.blue-bar2').removeClass('inview');
      $('.hamburger').removeClass('hidden');
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
    //$('.hamburger').addClass('hidden');
    $('.back').addClass('visible');
    // $('.search-field').focus();
    isSearchOpen = true;
  }

  // Reveal the search form
  $('body').on('touchend ', '.search', onSearchTouchEnd);

  // Hide the search form
  $('body').on('touchend', '.back', function(){

  });

})(jQuery);
