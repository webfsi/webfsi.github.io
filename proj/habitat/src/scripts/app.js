
import team from "./inner/team.js";
import cursor from "./inner/cursor.js";
import preloader from "./inner/preloader.js";
// import splitting from "./inner/splitting.js";
// import btn from "./inner/btn.js";
preloader();


window.addEventListener('load', () => {
	// document.querySelector('[data-loader]').classList.add('ready')

});

$(document).ready(function(){
	console.log('Congrats, ES6!!!');
  
  cursor();
  team();

	// splitting();
	// btn();

	//  validate form
  const validateOption = {
    rules: {
      text: "required",
      text2: "required",
      text3: "required",
      text4: "required",
      name: "required",
      name2: "required",
      name3: "required",
      name4: "required",
      search: "required",
      select: {
        minlength: 1,
        required: true
      },
      select2: {
        minlength: 1,
        required: true
      },
      mail: {
        required: true,
        email: true
      },
      url: {
        required: true,
        url: true
      },
      phone: {
        required: true
      },
      password: {
        required: true,
        minlength: 5
      },
      password_confirm: {
          required: true,
          minlength: 5,
          equalTo: "#password"
      }
    }
  }

  const validateForm = document.querySelectorAll('[data-validate]')
  validateForm.forEach(element => {

    $("[data-validate]").validate({
      messages: {
        email: {
          required: 'Oooops, that email address looks a bit weird',
          equalTo: 'sadasdas',
        }
      },
      submitHandler: function(form) {
        // form.submit();
        $("[data-validate]").addClass('active')
        // $(form).submit();
      }
    });
    
  });


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

	const inputchenge1 = document.querySelectorAll('.file')
	inputchenge1.forEach(element => {

    $(".file").aksFileUpload({
      input:"#aksfileupload",
      fileUpload: "#uploadfile",
      // dragDrop: true,
      maxSize: "1 GB",
      multiple: false,
      // maxFile: 50
    });
		const inputchenge = element.querySelector('.file input')
		inputchenge.addEventListener('change', function() {
			element.parentElement.classList.toggle('active');
      // closeBtn.addEventListener('click', function() {
      //   element.parentElement.classList.remove('active');
      // })
      // const closeBtn = element.querySelector('.aks-file-upload-delete')
      // closeBtn.addEventListener('click', function() {
      //   element.parentElement.classList.remove('active');
      // })
		})
		// const inputchenge2 = element.parentElement
		// inputchenge2.addEventListener('click', function() {
		// 	// element.parentElement.classList.toggle('ssss');
    //   const closeBtn = element.querySelector('.aks-file-upload-delete')
    //   closeBtn.addEventListener('click', function() {
    //     element.parentElement.classList.remove('active');
    //   })
		// })
    // const closeBtn = element.querySelector('.aks-file-upload-delete')
    // closeBtn.addEventListener('click', function() {
    //   element.parentElement.classList.remove('active');
    // })
		
	});
		


})
