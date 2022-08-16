export default () => {


	// marker hover

	if (window.matchMedia("(min-width: 1054px)").matches) {
    let curs = document.querySelector('.cursor');
  
    if (!curs) {
      return;
    }
  
    document.addEventListener('mousemove', (e) => {
      let x = e.pageX;
      let y = e.pageY;
      curs.style.left = (x - 9) + "px";
      curs.style.top = (y - 9) + "px";
      curs.classList.add('active');
      curs.classList.remove('hidden');
    });
  
    document.addEventListener('mouseleave', (e) => {
      let x = e.pageX;
      let y = e.pageY;
      curs.style.left = (x - 9) + "px";
      curs.style.top = (y - 9) + "px";
      curs.classList.add('hidden');
      curs.classList.remove('active');
    });
	}

  // document.querySelector('[data-loader]').classList.add('ready')

  // const arrImg = document.querySelector('[data-img-random]');
  // const arrImgData = arrImg.dataset.imgRandom;
  // let arr = arrImgData.split(' ', 20);
  // // console.log(splits);


  // // const arr = ['assets/img/load1.jpg', 'assets/img/load2.jpg', 'assets/img/load3.jpg', 'assets/img/load4.jpg', 'assets/img/load5.jpg'];

  // console.log(arr);

  // const random = arr[Math.floor(Math.random() * arr.length)];

  // // console.log(random); // 👉️ three
  // // console.log(arr[Math.floor(Math.random() * arr.length)], arr[Math.floor(Math.random() * arr.length)], arr[Math.floor(Math.random() * arr.length)]);

  // // var getMeRandomElements = function() {
  // // }
  // var result = [];
  // var array = [];
  // for (var i = 0; i < 3; i++) {
  //     result.push(arr.splice(arr.length * Math.random() | 0, 1)[0]);
  // }

  // // console.log(result[2]);

  // const itemsLoader = document.querySelectorAll('[data-loader] .loader__item img')

  // for (let i = 0; i < itemsLoader.length; i++) {
  //   const element = itemsLoader[i];
  //   // console.log(element);
  //   itemsLoader[i].src=result[i];
  // }

//   console.log(Math.floor(4.99)); // 👉️ 4
//   console.log(Math.floor(4.01)); // 👉️ 4
//   console.log(Math.floor(4)); // 👉️ 4

//   console.log(Math.random() * arr.length); // 👉️ 1.335...
// console.log(Math.random() * arr.length); // 👉️ 2.643...
// console.log(Math.random() * arr.length); // 👉️ 0.393...
// console.log(Math.random() * arr.length); // 👉️ 4.247...




	// let header = document.getElementById('header');
	// let oldScrollTopPosition = 1;
	// let scrollTopPosition = 1;

	// window.onscroll = () => {
	// 	scrollTopPosition = document.documentElement.scrollTop;
	// 	if (scrollTopPosition < oldScrollTopPosition) {
	// 		header.classList.add('header--fixed')
	// 		header.classList.remove('header--hide')

	// 	} else if (scrollTopPosition > oldScrollTopPosition) {
	// 		header.classList.remove('header--fixed')
	// 		header.classList.add('header--hide')
	// 	}
	// 	oldScrollTopPosition = scrollTopPosition;
	// 	if (scrollTopPosition === 0) {
	// 		header.classList.remove('header--fixed')
	// 		header.classList.remove('header--hide')
	// 	}
	// }


}