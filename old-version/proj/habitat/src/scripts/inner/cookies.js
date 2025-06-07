export default () => {

  var cookiesVar = false;
  if (sessionStorage.getItem("cookies")) {
    cookiesVar = sessionStorage.getItem("cookies");
  }
  
  if (cookiesVar === false) {
    $("[data-cookies]").each(function(i, el) {
      console.log($(this).find('.btn'));
      let s = $(this).find('.btn')
      s.click(function() {
        $(el).addClass('active');
        setTimeout(function () {
          $(el).addClass('hidden');
          cookiesVar = true;
          sessionStorage.setItem("cookies", cookiesVar);
        }, 600)
      });
    });
  } else {
    $("[data-cookies]").addClass('hidden');
  }
}