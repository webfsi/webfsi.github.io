export default () => {
  $( ".btn_anim" ).mousemove(function(e) {
    var parentOffset = $(this).offset(); 
   
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).find('.btn__anim').css({"left": relX, "top": relY });
    $(this).removeClass("btn_anim_hidden");
    $(this).addClass("btn_anim_active");
 
 });
 
 $( ".btn_anim" ).mouseleave(function(e) {
 
      var parentOffset = $(this).offset(); 
 
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).find('.btn__anim').css({"left": relX, "top": relY });
      $(this).addClass("btn_anim_hidden");
      $(this).removeClass("btn_anim_active");
 
 });
}