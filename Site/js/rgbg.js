const rgbg = [
    '../Site/img/rgbg1.jpg',
    '../Site/img/rgbg2.jpg',
    '../Site/img/rgbg3.jpg',
    '../Site/img/rgbg4.jpg',
    '../Site/img/rgbg5.jpg'
    ]

var readgame = document.getElementById('readgame');

function changeRGc(){
  // preloading
  readgame.style.backgroundImage = `url(${rgbg[0]})`
  document.querySelector('.hidden').src = rgbg[1]
  let i = 1
  setInterval(() => {
    readgame.style.backgroundImage = `url(${rgbg[i++]})`

    if (i === rgbg.length) i = 0
    else {
      // preload the next image, so that it transitions smoothly
      document.querySelector('.hidden').src = rgbg[i]
    }
  }, 10000)
}
changeRGc();