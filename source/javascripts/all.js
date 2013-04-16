//= require_tree .

(function($) {

  $('body').on('click', '.hamburger', function(){
    $('.dropdown').toggleClass('visible');
  });

})(jQuery);
