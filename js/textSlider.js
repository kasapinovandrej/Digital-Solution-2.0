const btnLeft = document.querySelector('.textslider__btn--left');
const btnRight = document.querySelector('.textslider__btn--right');
const textSlides = document.querySelectorAll('.textslider__slide');

const forword = function () {
    const currentTextSlide = document.querySelector('.activeText');
    const nextTextSlide = currentTextSlide.nextElementSibling;
    currentTextSlide.classList.remove('activeText');
    if (nextTextSlide) {
        nextTextSlide.classList.add('activeText');
    } else {
        textSlides[0].classList.add('activeText');
    }
};
const backword = function () {
    const currentTextSlide = document.querySelector('.activeText');
    const prevTextSlide = currentTextSlide.previousElementSibling;
    currentTextSlide.classList.remove('activeText');
    if (prevTextSlide) {
        prevTextSlide.classList.add('activeText');
    } else {
        textSlides[textSlides.length - 1].classList.add('activeText');
    }
};
btnRight.addEventListener('click', forword);
btnLeft.addEventListener('click', backword);