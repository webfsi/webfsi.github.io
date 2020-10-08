jQuery(function($){

  function debounce(fn, wait) {
    var timeout;
    return function() {
      clearTimeout(timeout);
      var args = arguments;
      timeout = setTimeout(function() {
        fn.apply(this, args);
      }, wait || 1);
    };
  }

  if ($(window).width() >= 1025) {
    $('.scroll-init').scrollbar();
  };

  if ($(window).width() >= 768) {
    $('.scroll-init-tabl').scrollbar();
  };
  
  $('.scroll-init-full').scrollbar();

  $(window).on(
    'resize',
    debounce(function(event) {
      if ($(window).width() >= 1025) {
        $('.scroll-init').scrollbar();
      } else {
        $('.scroll-init').scrollbar('destroy');
      }
    }, 50)
  );

  $(window).on(
    'resize',
    debounce(function(event) {
      if ($(window).width() >= 768) {
        $('.scroll-init-tabl').scrollbar();
      } else {
        $('.scroll-init-tabl').scrollbar('destroy');
      }
    }, 50)
  );

  // add-open-class
  $('.burger-menu').click(function(){
    if($(this).parent().is('.menu-burger--opened')){
      $(this).parent().removeClass('menu-burger--opened');
      $('body').removeClass('menu-open-wrapper-page');
    }else{
      $(this).parent().addClass('menu-burger--opened');
      $('body').addClass('menu-open-wrapper-page');
    }
  });

});
