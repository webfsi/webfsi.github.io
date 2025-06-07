
import team from "./inner/team.js";
import cursor from "./inner/cursor.js";
import preloader from "./inner/preloader.js";
import cookies from "./inner/cookies.js";
// import btn from "./inner/btn.js";
// preloader();




// if (!sessionStorage.isVisited) {

//   console.log(1);
// } else {
//   console.log(2);
// }

// if (!sessionStorage.isVisited) {
//   sessionStorage.isVisited = 'true'
//   // $(window).load(/* ... */)
//   console.log(3);
// } else {
//   console.log(4);
// }

cookies();


// preloader
var valueSession = false;
if (sessionStorage.getItem("autosave")) {
  valueSession = sessionStorage.getItem("autosave");
}

if (valueSession === false) {
  preloader();
  document.body.classList.add('first-load')
  window.addEventListener('load', () => {
    if (document.querySelector('.wrapper').classList.contains('wrapper_load')) {
      setTimeout(() => {
        document.querySelector('.wrapper').classList.remove('wrapper_load')
      }, 5500);
    }
  });
  valueSession = true;
  sessionStorage.setItem("autosave", valueSession);
} else {
  document.querySelector('[data-loader]').classList.add('hidden')
  document.querySelector('.wrapper').classList.remove('wrapper_load')
}
// end preloader





window.addEventListener('load', () => {
// $(document).ready(function(){
	// console.log('Congrats, ES6!!!');


  // var field = document.getElementById("field");

  // Проверяем наличие значения 'autosave'
  // (это может произойти только если страница будет случайно обновлена)

  // if (sessionStorage.getItem("autosave", "value")) {
  //   // Восстанавливаем содержимое текстового поля
  //   // field.value = sessionStorage.getItem("autosave");
  //   preloader();
  //   sessionstor = "ssss",
  //   sessionStorage.setItem("autosave", sessionstor)
  //   console.log(sessionStorage.getItem("autosave"));
  //   // sessionstor === true;
  // }

  // Отслеживаем все изменения в текстовом поле
  // field.addEventListener("change", function() {
  //   // И сохраняем их в объект session storage
    
  //   sessionStorage.setItem("autosave", true)
  // });

  // if('sessionStorage' in window && window.sessionStorage !== null) {
  //   document.getElementById('result').innerText = "Storage supported";
  // } else {
  //   document.getElementById('result').innerText = "Storage not supported";
  // }

  // sessionStorage.setItem('autosave', 'value');

  // var data = sessionStorage.getItem('key');

  // if (sessionStorage.getItem("autosave")) {
  //   console.log("öbject");
  // }

  // console.log(data);


  // emuljator multi page
  $("[data-btn-home]").click(function(){
    $(".wrapper").load("./_home-inner.php", function () {
      $(this).unwrap();
      team();
      $("body").addClass('page-home');
      $("body").removeClass('page-contacts');
      $("body").removeClass('page-contacts_anim-hidden');
    });
  });
  // end emuljator multi page
  
  cursor();
  team();

  

	// splitting();
	// btn();

	// //  validate form
  // const validateOption = {
  //   rules: {
  //     text: "required",
  //     text2: "required",
  //     text3: "required",
  //     text4: "required",
  //     name: "required",
  //     name2: "required",
  //     name3: "required",
  //     name4: "required",
  //     search: "required",
  //     select: {
  //       minlength: 1,
  //       required: true
  //     },
  //     select2: {
  //       minlength: 1,
  //       required: true
  //     },
  //     mail: {
  //       required: true,
  //       email: true
  //     },
  //     url: {
  //       required: true,
  //       url: true
  //     },
  //     phone: {
  //       required: true
  //     },
  //     password: {
  //       required: true,
  //       minlength: 5
  //     },
  //     password_confirm: {
  //         required: true,
  //         minlength: 5,
  //         equalTo: "#password"
  //     }
  //   }
  // }

  // const validateForm = document.querySelectorAll('[data-validate]')
  // validateForm.forEach(element => {

  //   $("[data-validate]").validate({
  //     messages: {
  //       email: {
  //         required: 'Oooops, that email address looks a bit weird',
  //         equalTo: 'sadasdas',
  //       }
  //     },
  //     submitHandler: function(form) {
  //       // form.submit();
  //       $(".contact-section-wrapp").addClass('send-form')
  //       // $(form).submit();
  //     }
  //   });

  //   $('.contact-end__tt a').hover(
  //     function() {
  //       $('.contact-end__tt').addClass('hover')
  //     }, function() {
  //       $('.contact-end__tt').removeClass('hover')
  //     }
  //   )
    
  // });


  //form elements
  // jcf.setOptions('File', {
  //   buttonText: 'Project details',
  //   placeholderText: 'Project description'
  // });
  
  // jcf.setOptions('Select', {
  //   wrapNative: false,
  //   multipleCompactStyle: true,
  //   maxVisibleItems: 6,
  //   fakeDropInBody: false,
  //   useCustomScroll: false
  // });
  
  // jcf.replaceAll();

	// const inputchenge1 = document.querySelectorAll('.file')
	// inputchenge1.forEach(element => {
  //   $(".file").aksFileUpload({
  //     input:"#aksfileupload",
  //     fileUpload: "#uploadfile",
  //     maxSize: "1 GB",
  //     multiple: false,
  //   });
	// 	const inputchenge = element.querySelector('.file input')
	// 	inputchenge.addEventListener('change', function() {
	// 		element.parentElement.classList.toggle('active');
	// 	})
		
	// });
		


})
