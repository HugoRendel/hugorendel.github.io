const images = [
    '../Site/img/Arken.jpg',
    '../Site/img/Alen.jpg',
    '../Site/img/Lalisa.jpg',
    '../Site/img/Saimon.jpg',
    '../Site/img/Sheeran.jpg'
    ]
    var container = document.getElementById('container');

    function changeBgImg(){
      // preloading
      container.style.backgroundImage = `url(${images[0]})`
      document.querySelector('.hidden').src = images[1]
      let i = 1
      setInterval(() => {
        container.style.backgroundImage = `url(${images[i++]})`

        if (i === images.length) i = 0
        else {
          // preload the next image, so that it transitions smoothly
          document.querySelector('.hidden').src = images[i]
        }
      }, 10000)
    }
    changeBgImg();

