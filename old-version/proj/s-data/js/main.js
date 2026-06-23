jQuery(function($){

  var mql = window.matchMedia('all and (min-width: 1000px)');
  if (mql.matches) {
    jQuery('.bl-scroll').scrollbar();
  }

  $('input[placeholder], textarea[placeholder]').placeholder();

  // add-open-class
  $('.cookies__close').click(function(){
    if($(this).parent().is('.cookies_opened')){
      $(this).parent().removeClass('cookies_opened');
    }else{
      $(this).parent().addClass('cookies_opened');
    }
  });

  // validate form
  $("#formSteps").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      select: {
        minlength: 1,
        required: true
      },
      year: {
        required: true,
        minlength: 2,
        maxlength: 3,
        number: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      },
      confirm_password: {
        required: true,
        minlength: 6,
        equalTo: "#password"
      }
    }, 
    messages: {
      check: {
        required: "(Please choose up to 3 answers)",
        minlength: "(PLEASE choose up to 3 answers)"
      }
    }
  });

  nextFormTabStep('#formSteps')

// next tab and steps classes
  function nextTab(wrapper) {
    var stepActiveBox = $(wrapper).find('.box.active')

    $(stepActiveBox)
      .removeClass('active')
      .addClass('box_hidden passed')
      .next()
        .removeClass('box_hidden')
        .addClass('active')
  };
  
  // nextFormTabStep
  function nextFormTabStep(wrapperElementSelector) {
    var wrapper = $(wrapperElementSelector)
  
    function isActiveBoxValidField() {
      var fields = $(wrapper).find('.box.active').find($('.validate'))
      
      if (fields.valid()) {
        return true
      }
  
      return false
    }
  
    $(wrapper).find('.tabs-next').click(function() {
      if (isActiveBoxValidField()) {
        nextTab(wrapper)
      }
    });
  
    $(wrapper).find('.tabs-next-novalidate').click(function() {
      nextTab(wrapper)
    });
  
    $(wrapper).find('.tabs-next-animation').click(function() {
      if (isActiveBoxValidField()) {
        nextTab(wrapper);
        $(this).parents('#formSteps').find('.box.active').addClass('box-animation');
        setTimeout(function() {
          nextTab(wrapper)
        }, 3000);
      }
    });
  
    $(wrapper).find('.box input').on("keydown", function(event) {
      if (event.keyCode === 13) {
        var findBoxLast = $(wrapper).find('.box').last();
  
        if (!findBoxLast.is('.active')) {
          event.preventDefault();
        }
        
        if (isActiveBoxValidField()) {
          nextTab(wrapper)
        }
      }
    });
  }

});


//Plugin placeholder
(function(b,f,i){function l(){b(this).find(c).each(j)}function m(a){for(var a=a.attributes,b={},c=/^jQuery\d+/,e=0;e<a.length;e++)if(a[e].specified&&!c.test(a[e].name))b[a[e].name]=a[e].value;return b}function j(){var a=b(this),d;a.is(":password")||(a.data("password")?(d=a.next().show().focus(),b("label[for="+a.attr("id")+"]").attr("for",d.attr("id")),a.remove()):a.realVal()==a.attr("placeholder")&&(a.val(""),a.removeClass("placeholder")))}function k(){var a=b(this),d,c;placeholder=a.attr("placeholder");
b.trim(a.val()).length>0||(a.is(":password")?(c=a.attr("id")+"-clone",d=b("<input/>").attr(b.extend(m(this),{type:"text",value:placeholder,"data-password":1,id:c})).addClass("placeholder"),a.before(d).hide(),b("label[for="+a.attr("id")+"]").attr("for",c)):(a.val(placeholder),a.addClass("placeholder")))}var g="placeholder"in f.createElement("input"),h="placeholder"in f.createElement("textarea"),c=":input[placeholder]";b.placeholder={input:g,textarea:h};!i&&g&&h?b.fn.placeholder=function(){}:(!i&&g&&
!h&&(c="textarea[placeholder]"),b.fn.realVal=b.fn.val,b.fn.val=function(){var a=b(this),d;if(arguments.length>0)return a.realVal.apply(this,arguments);d=a.realVal();a=a.attr("placeholder");return d==a?"":d},b.fn.placeholder=function(){this.filter(c).each(k);return this},b(function(a){var b=a(f);b.on("submit","form",l);b.on("focus",c,j);b.on("blur",c,k);a(c).placeholder()}))})(jQuery,document,window.debug);
