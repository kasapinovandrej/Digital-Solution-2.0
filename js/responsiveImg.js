const responisveImg = document.querySelector('.responsive__img');
let responsiveImgIndex = 0;

const nextRespImg = function () {
    responsiveImgIndex++;
    responisveImg.src = `img/responsiveImg/${responsiveImgIndex}.png`
    if (responsiveImgIndex === 3) {
        responsiveImgIndex = 0
    }
}
slideInterval = setInterval(nextRespImg, intervalTime);