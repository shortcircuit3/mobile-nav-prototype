//= require_tree .

(function($) {

  var isSearchOpen = false;
  var isDropdownOpen = false;

  function onContentTouchEnd(e){
    e.preventDefault();
    if (isSearchOpen === true) {
      $('.search-field').blur();
      $('.blue-bar2').removeClass('inview');
      isSearchOpen = false;
    }
  }

  function onHamburgerTouchEnd(e){
    e.preventDefault();
    if (isSearchOpen === true){
      isSearchOpen = false;
      $('.blue-bar2').removeClass('inview');
      $('.search-field').blur();
      $('.dropdown').addClass('visible');
      isDropdownOpen = true;
    } else {
      if (isDropdownOpen === false) {
        $('.dropdown').addClass('visible');
        isDropdownOpen = true;
      } else {
        $('.dropdown').removeClass('visible');
        isDropdownOpen = false;
      }
    }
  }

  function onSearchTouchEnd(e){

    if (isDropdownOpen === true && isSearchOpen === false) {
      if (e) { e.preventDefault(); }
      $('.dropdown').removeClass('visible');
      isDropdownOpen = false;
      $('.blue-bar2').addClass('inview');
      isSearchOpen = true;
      return false;
    }

    if (isDropdownOpen === false && isSearchOpen === false){
      if (e) { e.preventDefault(); }
      $('.blue-bar2').addClass('inview');
      isSearchOpen = true;
    }

  }

  // When users taps the content area
  $('body').on('touchend', '.content', onContentTouchEnd);

  // When user taps the hamburger icons
  $('body').on('touchend', '.hamburger', onHamburgerTouchEnd);

  // Reveal the search form
  $('body').on('touchend ', '.search', onSearchTouchEnd);

})(jQuery);
