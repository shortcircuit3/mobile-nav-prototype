//= require_tree .

(function($) {

  var isSearchOpen = false;
  var isDropdownOpen = false;

  function onContentTouchEnd(e){
    if (isSearchOpen === true) {
      $('.search-field').blur();
      $('.blue-bar2').removeClass('inview');
      isSearchOpen = false;
    }
    if (isDropdownOpen === true) {
      $('.dropdown').removeClass('visible');
      isDropdownOpen = false;
    }
  }

  function onHamburgerTouchEnd(e){
    e.preventDefault();
    if (isSearchOpen === true){
      isSearchOpen = false;
      $('.blue-bar2').removeClass('inview');
      $('.search-field').blur();
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

    if (isDropdownOpen === false && isSearchOpen === true) {
      if (e) { e.preventDefault(); }
      $('.blue-bar2').removeClass('inview');
      isSearchOpen = false;
      return false;
    }

    if (isDropdownOpen === false && isSearchOpen === false){
      if (e) { e.preventDefault(); }
      $('.blue-bar2').addClass('inview');
      isSearchOpen = true;
    }
  }

  function onTransitionEnd (e) {
    console.log('focus');
    $('.search-field').click();
  }

  // When the transition is complete
  $('.blue-bar2').on('webkitTransitionEnd', onTransitionEnd);

  // When users taps the content area
  $('body').on('touchend', '.content', onContentTouchEnd);
  // $('body').on('touchend', 'header', onContentTouchEnd);

  // When user taps the hamburger icons
  $('body').on('touchend', '.hamburger', onHamburgerTouchEnd);

  // Reveal the search form
  $('body').on('touchend ', '.search', onSearchTouchEnd);




})(jQuery);
