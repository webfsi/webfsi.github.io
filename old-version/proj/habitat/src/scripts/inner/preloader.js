export default () => {
  // Preloader
  const loader = document.querySelectorAll('[data-loader]')
  loader.forEach(element => {
    const arrImg = document.querySelector('[data-img-random]');
    const arrImgData = arrImg.dataset.imgRandom;
    let arr = arrImgData.split(', ', 20);
    var result = [];
    for (var i = 0; i < 3; i++) {
        result.push(arr.splice(arr.length * Math.random() | 0, 1)[0]);
    }
    
    const itemsLoader = document.querySelectorAll('[data-loader] .loader__item img')
    
    for (let i = 0; i < itemsLoader.length; i++) {
      const element = itemsLoader[i];
      element.src=result[i];
    }
    
    window.addEventListener('load', () => {
      document.querySelector('[data-loader]').classList.add('ready')
      setTimeout(() => {
        document.querySelector('[data-loader]').classList.add('hidden')
      }, 4000);
    });
    
  });
  // Preloader end
}