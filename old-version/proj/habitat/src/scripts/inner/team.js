
import SplitType from 'split-type';

export default () => {

	gsap.registerPlugin(ScrollTrigger);
	const wrapper = document.querySelector('.wrapper');
	// let scroller;

			
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

	function fileInputMy() {
		const inputchenge1 = document.querySelectorAll('.file')
		inputchenge1.forEach(element => {
			$(".file").aksFileUpload({
				input:"#aksfileupload",
				fileUpload: "#uploadfile",
				maxSize: "1 GB",
				multiple: false,
			});
			const inputchenge = element.querySelector('.file input')
			inputchenge.addEventListener('change', function() {
				element.parentElement.classList.toggle('active');
			})
			
		});
	}

	ScrollTrigger.matchMedia({
		'(min-width: 1054px)': () => {
			let scroller = new LocomotiveScroll({
				el: document.querySelector('[data-scroll-container]'),
				smooth: true,
				lerp: 0.07, // Linear Interpolation, 0 > 1 // Try 0.01
				// multiplier: 1, // Effect Multiplier
				reloadOnContextChange: true,
				// touchMultiplier: 2,
				smoothMobile: true,
				// smartphone: {
				//     smooth: !0,
				// 		lerp: 0.1,
				// 		multiplier: 1,
				// 		inertia: 0,
				//     breakpoint: 767
				// },
				// tablet: {
				//     smooth: !1,
				// 		inertia: 0,
				// 		multiplier: 1,
				// 		lerp: 0.1,
				//     breakpoint: 1024
				// },
				// smartphone: {
				//     smooth: true,
				// 		lerp: 0.1,
				// 		multiplier: 1,
				// 		inertia: 0,
				//     breakpoint: 767
				// },
				mobile: {
						smooth: true,
						lerp: 0.1,
						multiplier: 1,
						inertia: 0,
						breakpoint: 767
				},
				tablet: {
						smooth: true,
						inertia: 0,
						multiplier: 1,
						lerp: 0.1,
						breakpoint: 1024
				},

			})

			scroller.on('scroll', ScrollTrigger.update)

			ScrollTrigger.scrollerProxy(
				wrapper, {
						scrollTop(value) {
								return arguments.length ?
								scroller.scrollTo(value, 0, 0) :
								scroller.scroll.instance.scroll.y
						},
						scrollLeft(value) {
							return arguments.length
								? scroller.scrollTo(value, 0, 0)
								: scroller.scroll.instance.scroll.x;
						},
						getBoundingClientRect() {
								return {
										left: 0, top: 0, 
										width: window.innerWidth,
										height: window.innerHeight
								}
						},
						// pinType: wrapper.style.transform ? "transform" : "fixed"
				}
			)

			ScrollTrigger.defaults({
				scroller: wrapper
			})


			// marker hover

			if (window.matchMedia("(min-width: 1054px)").matches) {
				function update(e){
					// var x = e.clientX || e.touches[0].clientX
					// var y = e.clientY || e.touches[0].clientY
					const box = document.querySelectorAll('.mark-boxes')
					box.forEach(element => {
						let x = e.pageX;
						// let y = e.pageY - document.body.scrollTop - document.documentElement.scrollTop - scroller.scroll.instance.scroll.y;
						// let y = e.pageY - scroller.scroll.instance.scroll.y;
						let y = e.pageY - (element.offsetTop - scroller.scroll.instance.scroll.y);
					
						document.documentElement.style.setProperty('--cursorX', x + 'px')
						document.documentElement.style.setProperty('--cursorY', y + 'px')
						
					});
				}
				
				document.addEventListener('mousemove',update)
				document.addEventListener('touchmove',update)
			}
			// end marker hover

				/**
			 * demo.js
			 * http://www.codrops.com
			 *
			 * Licensed under the MIT license.
			 * http://www.opensource.org/licenses/mit-license.php
			 * 
			 * Copyright 2018, Codrops
			 * http://www.codrops.com
			 */
				{
					// var bodyRect = document.body.getBoundingClientRect(),
					// elemRect = element.getBoundingClientRect(),
					// offset   = elemRect.top - bodyRect.top;

					function getOffset(el) {
							el = el.getBoundingClientRect();
							return {
									left: el.left + window.scrollX,
									top: el.top + window.scrollY
							}
					}

					// const txtBL = document.querySelectorAll('.txt-hover-box');
					// txtBL.forEach(elm => {
					// 		elm.addEventListener('mousemove', function(e) {
					// 				// getOffset(elm)
					// 				// console.log(getOffset(elm));

					// 				// var rect = elm.getBoundingClientRect();
					// 				// console.log( rect.x, rect.y, rect.width, rect.height);

					// 				// let x = e.pageX,
					// 				// 		y = e.pageY;

					// 				// console.log(`${x - elm.offsetLeft}:${y+scroller.scroll.instance.scroll.y-elm.offsetTop}`);
					// 				// console.log(e.pageY);
					// 				// console.log(elm.offsetTop);
									
					// 				console.log(scroller.scroll.instance.scroll.y);
					// 		})
					// });

					// alert('Element is ' + offset + ' vertical pixels from <body>');


					// console.log('Element is ' + offset + ' vertical pixels from <body>');
					const mapNumber = (X,A,B,C,D) => (X-A)*(D-C)/(B-A)+C;
				// from http://www.quirksmode.org/js/events_properties.html#position
					const getMousePos = (e) => {
							let posx = 0;
							let posy = 0;
							if (!e) e = window.event;
							if (e.pageX || e.pageY) {
									posx = e.pageX;
									posy = e.pageY;
							}
							else if (e.clientX || e.clientY) 	{
									posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
									posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
							}
							return { x : posx, y : posy }
					}
				// Generate a random float.
				const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

				/**
				 * One class per effect. 
				 * Lots of code is repeated, so that single effects can be easily used. 
				 */

				// Effect 3
				class HoverImgFx3 {
						constructor(el) {
								this.DOM = {el: el};
								this.DOM.reveal = document.createElement('div');
								this.DOM.reveal.className = 'hover-reveal';
								this.DOM.reveal.style.overflow = 'hidden';
								this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
								this.DOM.el.appendChild(this.DOM.reveal);
								this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
								this.DOM.revealInner.style.overflow = 'hidden';
								this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
							//   charming(this.DOM.el);
							//   this.DOM.letters = [...this.DOM.el.querySelectorAll('span')];
								this.initEvents();
						}
						initEvents() {
								this.positionElement = (ev) => {
										const mousePos = getMousePos(ev);
										const docScrolls = {
												left : document.body.scrollLeft + document.documentElement.scrollLeft, 
												top : document.body.scrollTop + document.documentElement.scrollTop - scroller.scroll.instance.scroll.y
										};
										this.DOM.reveal.style.top = `${mousePos.y+20-docScrolls.top}px`;
										this.DOM.reveal.style.left = `${mousePos.x+20-docScrolls.left}px`;
								};
								this.mouseenterFn = (ev) => {
										this.positionElement(ev);
										this.showImage();
									//   this.animateLetters();
								};
								this.mousemoveFn = ev => requestAnimationFrame(() => {
										this.positionElement(ev);
								});
								this.mouseleaveFn = () => {
										this.hideImage();
								};
								
								this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
								this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
								this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
						}
						showImage() {
								TweenMax.killTweensOf(this.DOM.revealInner);
								TweenMax.killTweensOf(this.DOM.revealImg);

								this.tl = new TimelineMax({
										onStart: () => {
												this.DOM.reveal.style.opacity = 1;
												TweenMax.set(this.DOM.el, {zIndex: 1000});
										}
								})
								.add('begin')
								.set([this.DOM.revealInner, this.DOM.revealImg], {transformOrigin: '50% 100%'})
								.add(new TweenMax(this.DOM.revealInner, 0.4, {
										ease: Expo.easeOut,
										startAt: {x: '50%', y: '120%', rotation: 50},
										x: '0%',
										y: '0%',
										rotation: 0
								}), 'begin')
								.add(new TweenMax(this.DOM.revealImg, 0.4, {
										ease: Expo.easeOut,
										startAt: {x: '-50%', y: '-120%', rotation: -50},
										x: '0%',
										y: '0%',
										rotation: 0
								}), 'begin')
								.add(new TweenMax(this.DOM.revealImg, 0.7, {
										ease: Expo.easeOut,
										startAt: {scale: 2},
										scale: 1
								}), 'begin');
						}
						hideImage() {
								TweenMax.killTweensOf(this.DOM.revealInner);
								TweenMax.killTweensOf(this.DOM.revealImg);

								this.tl = new TimelineMax({
										onStart: () => {
												TweenMax.set(this.DOM.el, {zIndex: 999});
										},
										onComplete: () => {
												TweenMax.set(this.DOM.el, {zIndex: ''});
												TweenMax.set(this.DOM.reveal, {opacity: 0});
										}
								})
								.add('begin')
								.add(new TweenMax(this.DOM.revealInner, 0.6, {
										ease: Expo.easeOut,
										y: '-120%',
										rotation: -5
								}), 'begin')
								.add(new TweenMax(this.DOM.revealImg, 0.6, {
										ease: Expo.easeOut,
										y: '120%',
										rotation: 5,
										scale: 1.2
								}), 'begin')
						}
						animateLetters() {
								TweenMax.killTweensOf(this.DOM.letters);
								TweenMax.set(this.DOM.letters, {opacity: 0});
								TweenMax.staggerTo(this.DOM.letters, 0.2, {
										ease: Expo.easeOut,
										startAt: {x: '100%'},
										x: '0%',
										opacity: 1
								}, 0.03);
						}
				}



				[...document.querySelectorAll('[data-fx="3"] > .txt-hover-img, .txt-hover-img[data-fx="3"]')].forEach(link => new HoverImgFx3(link));

				// Demo purspose only: Preload all the images in the page..
				//   const contentel = document.querySelector('.content');
				//   [...document.querySelectorAll('.block__title, .block__link, .content__text-link')].forEach((el) => {
				//       const imgsArr = el.dataset.img.split(',');
				//       for (let i = 0, len = imgsArr.length; i <= len-1; ++i ) {
				//           const imgel = document.createElement('img');
				//           imgel.style.visibility = 'hidden';
				//           imgel.style.width = 0;
				//           imgel.src = imgsArr[i];
				//           imgel.className = 'preload';
				//           contentel.appendChild(imgel);
				//       }
				//   });
				//   imagesLoaded(document.querySelectorAll('.preload'), () => document.body.classList.remove('loading'));
				}
			

				//accordion
				$(".acc-bl__cap").click(function(){
					if($(this).parent().hasClass("active")) {
						$(this).parent().removeClass("active").find(".acc-bl__body").slideUp();
					}
					else{
						$(".acc-bl").removeClass("active").find(".acc-bl__body").slideUp();
				
						$(this).parent().addClass("active").find(".acc-bl__body").slideDown();
					}

					setTimeout(() => {
						//REFRESH
						ScrollTrigger.addEventListener('refresh', () => scroller.update())
						// ScrollTrigger.refresh();
						// scroller.update();
						ScrollTrigger.refresh();
					}, 500);
				})


				// $("[data-refresh]").click(function(){

				// 	scroller.update();
				// 	ScrollTrigger.addEventListener('refresh', () => scroller.update())
				// 	// ScrollTrigger.refresh();
				// 	ScrollTrigger.refresh();
				// })



				function validates() {
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
								$(".contact-section-wrapp").addClass('send-form');
								scroller.update();
								// $(form).submit();
							}
						});
	
						$('.contact-end__tt a').hover(
							function() {
								$('.contact-end__tt').addClass('hover')
							}, function() {
								$('.contact-end__tt').removeClass('hover')
							}
						)
						
					});
					
				}


			//REFRESH
			ScrollTrigger.addEventListener('refresh', () => scroller.update())


			ScrollTrigger.refresh()


				// Listen for orientation changes
			window.addEventListener("resize", function() {

				ScrollTrigger.addEventListener('refresh', () => scroller.update())


				ScrollTrigger.refresh()
			}, false);


			// multi page emuljator
			$("[data-load-content]").click(function(){
				$(".wrapper").load("./_contacts.php",function () {
					$(this).unwrap();
					validates();
					fileInputMy();
					$("body").addClass('page-contacts');
					$("body").removeClass('page-home');
					$("body").removeClass('first-load');
					ScrollTrigger.addEventListener('refresh', () => scroller.update())
					ScrollTrigger.refresh()
					setTimeout(function() { 
						$("body").addClass('page-contacts_anim-hidden');
					}, 2000);
				});
			});
			// end multi page emuljator
			
		}, 
		

		//MAX WIDTH 1053
		'(max-width: 1053px)': () => {

			// multi page emuljator
				$("[data-load-content]").click(function(){
					$(".wrapper").load("./_contacts.php",function () {
						$(this).unwrap();
						validateMob();
						fileInputMy();
						$("body").addClass('page-contacts');
						// $("body").addClass('page-contacts_anim-hidden');
						$("body").removeClass('page-home');
						$("body").removeClass('first-load');
						ScrollTrigger.refresh()
						setTimeout(function() { 
							$("body").addClass('page-contacts_anim-hidden');
						}, 2000);
					});
					// setTimeout(() => {
					// 	$("body").addClass('page-contacts_anim-hidden');
					// }, 2000);
				});

			// end multi page emuljator
				//accordion
				$(".acc-bl__cap").click(function(){
					if($(this).parent().hasClass("active")) {
						$(this).parent().removeClass("active").find(".acc-bl__body").slideUp();
						setTimeout(() => {
							// scroller.update();
							//REFRESH
							// ScrollTrigger.addEventListener('refresh', () => scroller.update())
							ScrollTrigger.refresh();
							
						}, 500);
					}
					else{
						$(".acc-bl").removeClass("active").find(".acc-bl__body").slideUp();
				
						$(this).parent().addClass("active").find(".acc-bl__body").slideDown();
						setTimeout(() => {
							// scroller.update();
							//REFRESH
							// ScrollTrigger.addEventListener('refresh', () => scroller.update())
							ScrollTrigger.refresh();
							
						}, 500);
					}
				})

				function validateMob() {
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
								$(".contact-section-wrapp").addClass('send-form');
								// $(form).submit();
							}
						});
	
						$('.contact-end__tt a').hover(
							function() {
								$('.contact-end__tt').addClass('hover')
							}, function() {
								$('.contact-end__tt').removeClass('hover')
							}
						)
						
					});
				}


								/**
			 * demo.js
			 * http://www.codrops.com
			 *
			 * Licensed under the MIT license.
			 * http://www.opensource.org/licenses/mit-license.php
			 * 
			 * Copyright 2018, Codrops
			 * http://www.codrops.com
			 */
				{
				// var bodyRect = document.body.getBoundingClientRect(),
				// elemRect = element.getBoundingClientRect(),
				// offset   = elemRect.top - bodyRect.top;

				function getOffset(el) {
						el = el.getBoundingClientRect();
						return {
								left: el.left + window.scrollX,
								top: el.top + window.scrollY
						}
				}

				// const txtBL = document.querySelectorAll('.txt-hover-box');
				// txtBL.forEach(elm => {
				// 		elm.addEventListener('mousemove', function(e) {
				// 				// getOffset(elm)
				// 				// console.log(getOffset(elm));

				// 				// var rect = elm.getBoundingClientRect();
				// 				// console.log( rect.x, rect.y, rect.width, rect.height);

				// 				// let x = e.pageX,
				// 				// 		y = e.pageY;

				// 				// console.log(`${x - elm.offsetLeft}:${y+scroller.scroll.instance.scroll.y-elm.offsetTop}`);
				// 				// console.log(e.pageY);
				// 				// console.log(elm.offsetTop);
								
				// 				console.log(scroller.scroll.instance.scroll.y);
				// 		})
				// });

				// alert('Element is ' + offset + ' vertical pixels from <body>');


				// console.log('Element is ' + offset + ' vertical pixels from <body>');
				const mapNumber = (X,A,B,C,D) => (X-A)*(D-C)/(B-A)+C;
			// from http://www.quirksmode.org/js/events_properties.html#position
				const getMousePos = (e) => {
						let posx = 0;
						let posy = 0;
						if (!e) e = window.event;
						if (e.pageX || e.pageY) {
								posx = e.pageX;
								posy = e.pageY;
						}
						else if (e.clientX || e.clientY) 	{
								posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
								posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
						}
						return { x : posx, y : posy }
				}
			// Generate a random float.
			const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

			/**
			 * One class per effect. 
			 * Lots of code is repeated, so that single effects can be easily used. 
			 */

			// Effect 3
			class HoverImgFx3 {
					constructor(el) {
							this.DOM = {el: el};
							this.DOM.reveal = document.createElement('div');
							this.DOM.reveal.className = 'hover-reveal';
							this.DOM.reveal.style.overflow = 'hidden';
							this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
							this.DOM.el.appendChild(this.DOM.reveal);
							this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
							this.DOM.revealInner.style.overflow = 'hidden';
							this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
						//   charming(this.DOM.el);
						//   this.DOM.letters = [...this.DOM.el.querySelectorAll('span')];
							this.initEvents();
					}
					initEvents() {
							this.positionElement = (ev) => {
									const mousePos = getMousePos(ev);
									const docScrolls = {
											left : document.body.scrollLeft + document.documentElement.scrollLeft, 
											top : document.body.scrollTop + document.documentElement.scrollTop
									};
									this.DOM.reveal.style.top = `${mousePos.y+20-docScrolls.top}px`;
									this.DOM.reveal.style.left = `${mousePos.x+20-docScrolls.left}px`;
							};
							this.mouseenterFn = (ev) => {
									this.positionElement(ev);
									this.showImage();
								//   this.animateLetters();
							};
							this.mousemoveFn = ev => requestAnimationFrame(() => {
									this.positionElement(ev);
							});
							this.mouseleaveFn = () => {
									this.hideImage();
							};
							
							this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
							this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
							this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
					}
					showImage() {
							TweenMax.killTweensOf(this.DOM.revealInner);
							TweenMax.killTweensOf(this.DOM.revealImg);

							this.tl = new TimelineMax({
									onStart: () => {
											this.DOM.reveal.style.opacity = 1;
											TweenMax.set(this.DOM.el, {zIndex: 1000});
									}
							})
							.add('begin')
							.set([this.DOM.revealInner, this.DOM.revealImg], {transformOrigin: '50% 100%'})
							.add(new TweenMax(this.DOM.revealInner, 0.4, {
									ease: Expo.easeOut,
									startAt: {x: '50%', y: '120%', rotation: 50},
									x: '0%',
									y: '0%',
									rotation: 0
							}), 'begin')
							.add(new TweenMax(this.DOM.revealImg, 0.4, {
									ease: Expo.easeOut,
									startAt: {x: '-50%', y: '-120%', rotation: -50},
									x: '0%',
									y: '0%',
									rotation: 0
							}), 'begin')
							.add(new TweenMax(this.DOM.revealImg, 0.7, {
									ease: Expo.easeOut,
									startAt: {scale: 2},
									scale: 1
							}), 'begin');
					}
					hideImage() {
							TweenMax.killTweensOf(this.DOM.revealInner);
							TweenMax.killTweensOf(this.DOM.revealImg);

							this.tl = new TimelineMax({
									onStart: () => {
											TweenMax.set(this.DOM.el, {zIndex: 999});
									},
									onComplete: () => {
											TweenMax.set(this.DOM.el, {zIndex: ''});
											TweenMax.set(this.DOM.reveal, {opacity: 0});
									}
							})
							.add('begin')
							.add(new TweenMax(this.DOM.revealInner, 0.6, {
									ease: Expo.easeOut,
									y: '-120%',
									rotation: -5
							}), 'begin')
							.add(new TweenMax(this.DOM.revealImg, 0.6, {
									ease: Expo.easeOut,
									y: '120%',
									rotation: 5,
									scale: 1.2
							}), 'begin')
					}
					animateLetters() {
							TweenMax.killTweensOf(this.DOM.letters);
							TweenMax.set(this.DOM.letters, {opacity: 0});
							TweenMax.staggerTo(this.DOM.letters, 0.2, {
									ease: Expo.easeOut,
									startAt: {x: '100%'},
									x: '0%',
									opacity: 1
							}, 0.03);
					}
			}



			[...document.querySelectorAll('[data-fx="3"] > .txt-hover-img, .txt-hover-img[data-fx="3"]')].forEach(link => new HoverImgFx3(link));

			// Demo purspose only: Preload all the images in the page..
			//   const contentel = document.querySelector('.content');
			//   [...document.querySelectorAll('.block__title, .block__link, .content__text-link')].forEach((el) => {
			//       const imgsArr = el.dataset.img.split(',');
			//       for (let i = 0, len = imgsArr.length; i <= len-1; ++i ) {
			//           const imgel = document.createElement('img');
			//           imgel.style.visibility = 'hidden';
			//           imgel.style.width = 0;
			//           imgel.src = imgsArr[i];
			//           imgel.className = 'preload';
			//           contentel.appendChild(imgel);
			//       }
			//   });
			//   imagesLoaded(document.querySelectorAll('.preload'), () => document.body.classList.remove('loading'));
				}
							


			ScrollTrigger.defaults({
				scroller: document.body
			})



			// Listen for orientation changes
			window.addEventListener("resize", function() {
				ScrollTrigger.refresh()
			}, false);

		},
	});



	// setTimeout(() => {  
  //   scroller.destroy();
	// }, 0);
	// setTimeout(() => {  
	// 		scroller.init();
	// }, 50);
	// setTimeout(() => {  
	// 		scroller.update();
	// }, 1000);



	// const wrapper = document.querySelector(wrapper)

	// const showAnim = gsap.from('.header', { 
	// 	yPercent: -100,
	// 	paused: true,
	// 	duration: 0.2
	// }).progress(1);
	
	// ScrollTrigger.create({
	// 	trigger: wrapper,
	// 	start: "top top",
	// 	scroller: wrapper,
	// 	markers: true,
	// 	end: 99999,
	// 	toggleClass: 'active',
	// 	onUpdate: (wrapper) => {
	// 		wrapper.direction === -1 ? showAnim.play() : showAnim.reverse();
	// 		console.log("object");
	// 	}
	// });
	// const header = document.querySelector('.header')
	

// 	const header = document.getElementById('header');
// 	let hiddenMy = false,
// 			staticMy = true;

// // const scroll = new LocomotiveScroll(options);

// scroller.on('scroll', ()=>{
// 	let headerHeight = header.getBoundingClientRect().height;
// 	if(instance.direction === 'down' && staticMy){
// 		if(instance.scroll.y > headerHeight){
// 			header.classList.add('pinned');	  
// 			if(header.classList.contains('home')){
// 				header.classList.remove('navbar-light','bg-light');
// 				header.classList.add('navbar-dark','bg-dark');
// 			}
// 			staticMy = false;
// 		}
// 	}
// 	if(instance.direction === 'up' && !staticMy){
// 		if(instance.scroll.y <= headerHeight){
// 			header.classList.remove('pinned');
// 			if(header.classList.contains('home')){
// 				header.classList.remove('navbar-dark','bg-dark');
// 				header.classList.add('navbar-light','bg-light');
// 			}
// 			staticMy = true;
// 		}
// 	}
// 	if(instance.direction === 'down' && !hiddenMy){
// 		if(instance.scroll.y>(headerHeight+200)){
// 			//console.log('hiddenMy');
// 			header.classList.remove('pinned');
// 			header.classList.add('unpinned');
// 			hiddenMy = true;
// 		}
// 	}
// 	if(instance.direction === 'up' && hiddenMy){
// 		//console.log('show');
// 		header.classList.remove('unpinned');
// 		header.classList.add('pinned');
// 		hiddenMy = false;
// 	}
// });

	// document.querySelector('.hero-home__tt').addEventListener('mousemove', function (e) {
	// 	// console.log(document.querySelector('.hero-home__tt').scrollTo(target, options));


	// 	// console.log(scroller.scroll.instance.scroll.y);
	// })

	// locoScroll.on("scroll", ScrollTrigger.update);

	// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
	// ScrollTrigger.scrollerProxy(".smooth-scroll", {
	// 	scrollTop(value) {
	// 		return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
	// 	}, // we don't have to define a scrollLeft because we're only scrolling vertically.
	// 	getBoundingClientRect() {
	// 		return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
	// 	},
	// 	// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
	// 	pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
	// });




	// header fix
	// const wrapper = document.querySelector(wrapper);
	headerFix();
	function headerFix() {
		const header = document.querySelector('.header');
		ScrollTrigger.create({
			trigger: wrapper,
			start: () => "+=" + (10) + " top",
			// scroller: wrapper,
			// markers: true,
			// onUpdate: (self) => {
			// 	self.direction === -1 ? showAnim.play() : showAnim.reverse();
			// 	self.direction === -1 ? headerActive() : headerActiveRev();
			// },
			onEnter: () => {
				header.classList.add('visible')
				// header.classList.add('hidden')
			},
			onLeaveBack: () => {
				header.classList.remove('visible')
				// header.classList.remove('hidden')
			}
		});
	}
	// end header fix

	//SPLITING TEXT

	function splitting(el1, value) {
		el1.classList.add('splitting')

		var lines = new SplitType(el1, {
			tagName: 'div',
		});

		lines.split('lines');

		const line = el1.querySelectorAll('.word')

		gsap
		.fromTo(line, {
			yPercent: 100,
		}, {
			yPercent: 0,
			duration: 1,
			delay: value,
			ease: "power4",
			stagger: 0.05
		})
	}

	const designEl = document.querySelectorAll('.split-hero')
	designEl.forEach(el => {
		if (document.body.classList.contains('first-load')) {
			splitting(el, 4);
		} else {
			splitting(el, 0);
		}

	});

	const designElSecond = document.querySelectorAll('.split-hero-second')
	designElSecond.forEach(el => {

		if (document.body.classList.contains('first-load')) {
			splitting(el, 4.8);
		} else {
			splitting(el, 1);
		}

	});

	// SPLITING TEXT END

	//anim logo
	animLogotypes()
	function animLogotypes() {
		const animLogo = document.querySelectorAll('[data-anim-logos]')
		animLogo.forEach(i => {
			gsap
			.timeline({
					scrollTrigger: {
							trigger: i,
							// scroller: wrapper,
							toggleActions: "play none none none",
							start: "top bottom-=100px",
							end: "top top",
							toggleClass: "active",
					},
			})
		});
	}
	// end anim logo



	//anim card
	animCard()
	function animCard() {
		const animFadeY = document.querySelectorAll("[data-anim-fadey]");
		const animDuration = 0.9;
		const animToggleActions = "play none none none";
		const animStart = "top bottom-=100px";
		const animEnd = "top top";
		animFadeY.forEach((animFY) => {
			gsap
			.timeline({
					scrollTrigger: {
							trigger: animFY,
							// scroller: wrapper,
							toggleActions: animToggleActions,
							start: animStart,
							end: animEnd,
					},
			})
			.fromTo(animFY, {
					y: 64,
					opacity: 0,
			}, {
					y: 0,
					opacity: 1,
					duration: animDuration,
					delay: animFY.dataset.animFadey,
					ease: "Power3.easeInOut"
			})
		});
	}
	// end anim card


	// ScrollTrigger.create({
	// 		trigger: '.image-mask',
	// 		scroller: '.container',
	// 		start: 'top+=30% 50%',
	// 		end: 'bottom-=40% 50%',
	// 		animation: gsap.to('.image-mask', {backgroundSize: '120%'}),
	// 		scrub: 2,
	// 		// markers: true
	// })

	// let container = document.querySelector('.team-list')

	// const scrollBar = gsap.to('.scrollbar', { x: () => { return window.innerWidth - (150 + 20) }, ease: "none" })

	// ScrollTrigger.create({
	// 		trigger: ".team-list",
	// 		scroller: wrapper,
	// 		start: "top top",
	// 		end: () => (container.scrollWidth - window.innerWidth),
	// 		pin: true,
	// 		anticipatePin: 1,
	// 		scrub: scrubValue,
	// 		// animation: scrollBar,
	// 		invalidateOnRefresh: true,
	// })


	// TEAM SLIDER
	teamSlider();
	function teamSlider() {
		const $intro = document.querySelectorAll("[data-team-scroll-horyzontall]");
	
		$intro.forEach(intro => {
			const container = intro.querySelector(".team-slider");
			const h = document.querySelector('.header')
			let hH = h.offsetHeight;
			// console.log(hH);
			// gsap.to(container, {
			// 	// duration: 2,
			// 	x: () => -(container.scrollWidth - container.offsetWidth),
			// 	// x: -100,
			// 	ease: "none",
			// 	scrollTrigger: {
			// 		trigger: intro,
			// 		scroller: wrapper,
			// 		// start: () => "+=" + ((container.offsetHeight / 2) + (intro.offsetHeight - container.offsetHeight)) + " center",
			// 		// start: () => "+=" + (intro.offsetHeight / 2) + " center",
			// 		start: () => "+=" + (-hH) + " top",
			// 		// start: "top top",
			// 		// invalidateOnRefresh: true,
			// 		// markers: true,
			// 		scrub: true,
			// 		pin: true,
			// 		end: () => "+=" + (container.scrollWidth - container.offsetWidth)
			// 	}
			// })
	
			const tl1 = gsap.timeline()
			.to(container, {
				x: () => -(container.scrollWidth - container.offsetWidth),
				ease: "none",
			});
			const inner = intro.querySelector('.team-list__inner')

			if (window.matchMedia("(max-width: 767px)").matches) {
				sliderDesk()
			} else if ((window.matchMedia("(max-width: 1053px)").matches)) {
				sliderTabl()
			} else {
				sliderDesk()
			}
			function sliderTabl() {
				
				ScrollTrigger.create({  
					trigger: intro,
					// start: () => "+=" + (-hH) + " top",
					// start: () => "+=" + (-inner.offsetHeight / 2) + " top",
					// start: () => (-(inner.offsetHeight / 2)) + " top",
					start: () => "+=" + (inner.offsetHeight / 2) + " center",
					invalidateOnRefresh: true,
					// markers: true,
					scrub: true,
					pin: true,
					end: () => "+=" + (container.scrollWidth - container.offsetWidth),
					animation: tl1
				});
			}
			function sliderDesk() {
				
				ScrollTrigger.create({  
					trigger: intro,
					start: () => "+=" + (-hH) + " top",
					// start: () => "+=" + (-inner.offsetHeight / 2) + " top",
					// start: () => (-(inner.offsetHeight / 2)) + " top",
					// start: () => "+=" + (inner.offsetHeight / 2) + " center",
					invalidateOnRefresh: true,
					// markers: true,
					scrub: true,
					pin: true,
					end: () => "+=" + (container.scrollWidth - container.offsetWidth),
					animation: tl1
				});
			}
		});
		
	}





	// var tl;
	// function start() {
	// 	var sw = window.innerWidth / 2 - 50;
	// 	tl = new TimelineMax({repeat: -1});
	// 	...
	// }




	// SERVICE SLIDER IMAGE AND TEXT
	function serviceDesk() {
		const $service = document.querySelectorAll('[data-service-anim]');
		$service.forEach(service => {


			const card = service.querySelector('.service-card-grid');
			const container = service.querySelector('[data-desk-box]');
			const item = service.querySelector('[data-desk-box] .service-card');
			const h = document.querySelector('.header')
			let hH = h.offsetHeight;

			let scrollTween = gsap.to(card, {
				// xPercent: -100 * (sections.length - 1),
				// x: () => -(card.scrollWidth - (container.offsetWidth - card.offsetWidth) - item.clientWidth),
				x: () => -(card.scrollWidth - item.clientWidth),
				ease: "none",
			});
			const inner = service.querySelector('.service-box__inner')


			if (window.matchMedia("(max-width: 1053px)").matches) {
				scrolltrigerTablet()
			} else {
				scrolltrigerDesc()
			}
			function scrolltrigerTablet() {
				
				ScrollTrigger.create({
					trigger: service,
					// start: () => "+=" + ((container.offsetHeight / 2) + (service.offsetHeight - container.offsetHeight)) + " center",
					// start: () => "+=" + ((container.offsetHeight / 2) + (service.offsetHeight - container.offsetHeight)) + " center",
					// start: () => "+=" + (-hH) + " top",
					start: () => "+=" + (inner.offsetHeight / 2) + " center",
					pin: true,
					// pinReparent: true,
					invalidateOnRefresh: true,
					invalidateOnResize: true,
					scrub: true,
					end: () => "+=" + ((card.scrollWidth - item.clientWidth) * 2),
					animation: scrollTween,
					// onUpdate: ScrollTrigger.update
				});
			}
			function scrolltrigerDesc() {
				ScrollTrigger.create({
					trigger: service,
					// start: () => "+=" + ((container.offsetHeight / 2) + (service.offsetHeight - container.offsetHeight)) + " center",
					// start: () => "+=" + ((container.offsetHeight / 2) + (service.offsetHeight - container.offsetHeight)) + " center",
					start: () => "+=" + (-hH) + " top",
					// start: () => "+=" + (inner.offsetHeight / 2) + " center",
					pin: true,
					// pinReparent: true,
					invalidateOnRefresh: true,
					invalidateOnResize: true,
					scrub: true,
					end: () => "+=" + ((card.scrollWidth - item.clientWidth) * 2),
					animation: scrollTween,
					// onUpdate: ScrollTrigger.update
				});
				
			}
			// ScrollTrigger.create({
			// 	trigger: service,
			// 	// start: () => "+=" + ((container.offsetHeight / 2) + (service.offsetHeight - container.offsetHeight)) + " center",
			// 	// start: () => "+=" + ((container.offsetHeight / 2) + (service.offsetHeight - container.offsetHeight)) + " center",
			// 	// start: () => "+=" + (-hH) + " top",
			// 	start: () => "+=" + (inner.offsetHeight / 2) + " center",
			// 	pin: true,
			// 	// pinReparent: true,
			// 	invalidateOnRefresh: true,
			// 	invalidateOnResize: true,
			// 	scrub: true,
			// 	end: () => "+=" + ((card.scrollWidth - item.clientWidth) * 2),
			// 	animation: scrollTween,
			// 	// onUpdate: ScrollTrigger.update
			// });


			let itemActive = service.querySelectorAll('.service-card');

			itemActive.forEach(element => {

				const wrapBox = document.querySelector('.service-box-wrapp')
				const hwrapBox = wrapBox.offsetHeight
				//1
				function add(value) {
					if (element.dataset.cardValue === value) {
						element.classList.add('active');
					}
				}
				function rem(value) {
					if (element.dataset.cardValue === value) {
						element.classList.remove('active');
					}
				}
				const vlOne = "one",
					vlTwo = "two",
					vlThree = "three";

				ScrollTrigger.create({
					trigger: wrapBox,
					// markers: true,
					start: "top bottom",
					end: (hwrapBox / 3) + " center",
					toggleActions: "play none none reset",
					scrub: true,

					toggleClass: {targets: '.service-card__image[data-card-val='+vlOne+']', className: "active"},
					onEnter: () => {
						add(vlOne)
					},
					onLeave: () => {
						rem(vlOne)
					},
					onEnterBack: () => {
						add(vlOne)
					},
					onLeaveBack: () => {
						rem(vlOne)
					},
					// onUpdate: ScrollTrigger.update
				});

				//2
				ScrollTrigger.create({
					trigger: wrapBox,
					// markers: true,
					start: () =>  "+=" + (hwrapBox / 3) + " center",
					end: () => ((hwrapBox / 3) * 2) + " center",
					toggleActions: "play none none reset",
					scrub: true,

					// onToggle: () => console.log("toggled, isActive:", service.isActive),
					toggleClass: {targets: '.service-card__image[data-card-val='+vlTwo+']', className: "active"},
					onEnter: () => {
						add(vlTwo)
					},
					onLeave: () => {
						rem(vlTwo)
					},
					onEnterBack: () => {
						add(vlTwo)
					},
					onLeaveBack: () => {
						rem(vlTwo)
					},
					// onUpdate: ScrollTrigger.update
				});
				//3
				ScrollTrigger.create({
					trigger: wrapBox,
					// markers: true,
					start: () =>  "+=" + ((hwrapBox / 3) * 2) + " center",
					end: () => (hwrapBox) + " center",
					toggleActions: "play none none reset",
					scrub: true,
					toggleClass: {targets: '.service-card__image[data-card-val='+vlThree+']', className: "active"},
					onEnter: () => {
						add(vlThree)
					},
					onLeave: () => {
						rem(vlThree)
					},
					onEnterBack: () => {
						add(vlThree)
					},
					onLeaveBack: () => {
						rem(vlThree)
					},
					// onUpdate: ScrollTrigger.update
				});

				// var cardData = element.dataset.cardValue;
				
				// ScrollTrigger.create({
				// 	trigger: element,
				// 	// markers: true,
				// 	containerAnimation: scrollTween,
				// 	start: "left center",
				// 	end: "right center",
				// 	toggleActions: "play none none reset",
				// 	scrub: true,
				// 	// onRefresh: true,
        // // onRefresh: killScrub,
				// 	invalidateOnRefresh: true,
				// 	invalidateOnResize: true,
				// 	id: "1",

				// 	toggleClass: {targets: '.service-card__image[data-card-val='+cardData+']', className: "active"},
				// 	onEnter: () => {
				// 		element.classList.add('active');
				// 	},
				// 	onLeave: () => {
				// 		element.classList.remove('active');
				// 	},
				// 	onEnterBack: () => {
				// 		element.classList.add('active');
				// 	},
				// 	onLeaveBack: () => {
				// 		element.classList.remove('active');
				// 	},
        //   // onUpdate: ScrollTrigger.update
				// });

				
			});
		});
	}

	function serviceMob() {
		const $serviceMob = document.querySelectorAll('.service-card');
		$serviceMob.forEach(serviceMob => {
			gsap.from(serviceMob, {
				scrollTrigger: {
					start: 'top center',
					end: 'bottom center',
					trigger: serviceMob,
					// scroller: wrapper,
					// markers: true,
					toggleClass: 'active'
				}
			});
			
		});
	}

	ScrollTrigger.matchMedia({
		'(min-width: 768px)': () => {
			serviceDesk();
		}, 
		
		'(max-width: 767px)': () => {
			serviceMob();
		},
	});

	// end sevice



	// manifesto gsap
	manifesto();
	function manifesto() {
		const $manif = document.querySelectorAll('[data-scroll-manif] .txt-hover-box');
		$manif.forEach(manif => {
			gsap.from(manif, {
				scrollTrigger: {
					start: 'top center',
					end: 'bottom center',
					trigger: manif,
					// scroller: wrapper,
					// markers: true,
					toggleClass: 'active'
				}
			});
			
		});
	}
	

	// COUNTER VALUES
	counter()
	function counter() {
		const counterValue = document.querySelectorAll('.value-box__list-item')
		counterValue.forEach(element => {
	
			let item = element.querySelector('.value-box__number span')
			
			gsap.from(item, {
				// duration: 2,
				textContent: 1,
				duration: 3,
				ease: "Power1.easeIn",
				snap: { textContent: 1 },
				stagger: 1,
				// scrub: 1,
				scrollTrigger: {
					trigger: element,
					// scroller: wrapper,
					// start: () => "+=" + ((container.offsetHeight / 2) + (intro.offsetHeight - container.offsetHeight)) + " center",
					start: "top bottom",
					// invalidateOnRefresh: true,
					// markers: true,
					// scrub: 1,
					// pin: true,
					// end: () => "+=" + (container.scrollWidth - container.offsetWidth)
				}
			})
		});
		
	}
	// end COUNTER VALUES


	// FOOTER 

	function $footerDesc() {
		const $footer = document.querySelectorAll(".footer");
	
		$footer.forEach(footer => {
	
			const b = footer.querySelector('.footer__inner')
			// console.log(footer.offsetHeight);
			gsap
			.timeline({
					scrollTrigger: {
						trigger: footer,
						start: "top bottom",
						end: (footer.offsetHeight) + " bottom",
						
						// markers: true,
						scrub: true,
					},
			})
			.fromTo(b, {
					yPercent: -80,
			}, {
					yPercent: 0,
					ease: "none"
			});

			// const h = document.querySelector('.header')
			// scrollTrigger.create({
			// 	trigger: wrapper,
			// 	// scroller: wrapper,
			// 	start: "bottom top",
			// 	end: "bottom bottom",
			// 	markers: true,
			// 	// pin: true,
			// 	// scrub: true,
			// 	// end: "top top",

			// })
			const main = document.querySelector('.wrapper main')
			const mainHeight = footer.offsetHeight
			ScrollTrigger.create({
				trigger: main,
				start: "bottom +=150px",
				end: () => "+=" + (mainHeight / 1.5),
				toggleClass: {targets: '.header', className: "diference"},
			});
		});
	}

	$footerDesc();

	ScrollTrigger.refresh();



	// ScrollTrigger.matchMedia({
	// 	'(min-width: 768px)': () => {
	// 		$footerDesc();
	// 	}, 
		
	// 	// '(max-width: 767px)': () => {
	// 	// 	serviceMob();
	// 	// },
	// });


	// window.addEventListener("load", function(event) {
  //   ScrollTrigger.refresh();
  // });

	



}