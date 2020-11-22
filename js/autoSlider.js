'use strict';

const nextBtn = document.querySelector('.slider1__btn--right');
const prevBtn = document.querySelector('.slider1__btn--left');
const slides = document.querySelectorAll('.slider1__slide');
const auto = true;
const intervalTime = 5000;
let slideInterval;
const buttons = document.querySelectorAll('.slider1__btns--radio');
const dots = Array.from(buttons);
const pictures = document.querySelectorAll('.mid__box');
const img = Array.from(pictures);

const updateDots = function (currentDot, targetDot) {
    currentDot.classList.remove('active2');
    targetDot.classList.add('active2');
}

/*BUTTON FUNCTIONS*/
const nextSlide = function () {
    //Get current class
    const current = document.querySelector('.active1');
    const currentDot = document.querySelector('.active2');
    const nextDot = currentDot.nextElementSibling;
    //Remove current class
    current.classList.remove('active1');
    //Check for next slide
    if (current.nextElementSibling) {
        //Add current to next sibling
        current.nextElementSibling.classList.add('active1');
        //update DOTS
        updateDots(currentDot, nextDot);
    } else {
        //add current to start
        slides[0].classList.add('active1');
        dots[0].classList.add('active2');
    }
    setTimeout(() => {
        current.classList.remove('active1');
        currentDot.classList.remove('active2');
    });

};
const prevSlide = function () {
    //Get current class
    const current = document.querySelector('.active1');
    const currentDot = document.querySelector('.active2');
    const prevDot = currentDot.previousElementSibling;
    //Remove current class
    current.classList.remove('active1');
    //Check for prev slide
    if (current.previousElementSibling) {
        //Add current to next sibling
        current.previousElementSibling.classList.add('active1');
        //update DOTS
        updateDots(currentDot, prevDot);
    } else {
        //add current to start
        slides[slides.length - 1].classList.add('active1');
        dots[slides.length - 1].classList.add('active2');
    }
    setTimeout(() => {
        current.classList.remove('active1');
        currentDot.classList.remove('active2');
    });
};

/*BUTTON EVENTS*/
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

/*AUTO SLIDE*/
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}


/*RADIO BUTTONS*/
buttons.forEach(function (index) {
    index.addEventListener('click', function () {
        const current = document.querySelector('.active1');
        const currentDot = document.querySelector('.active2');
        const targetIndex = dots.findIndex(dot => dot === index);
        const targetSlide = slides[targetIndex];
        console.log(targetSlide);
        console.log(targetIndex);


        current.classList.remove('active1');
        slides[targetIndex].classList.add('active1');

        updateDots(currentDot, dots[targetIndex]);
    });
});


/*IMAGE BUTTONS*/
pictures.forEach(function (index) {
    index.addEventListener('click', function () {
        const current = document.querySelector('.active1');
        const currentDot = document.querySelector('.active2');
        const targetIndex = img.findIndex(dot => dot === index);
        const targetSlide = slides[targetIndex];
        console.log(targetSlide);
        console.log(targetIndex);


        current.classList.remove('active1');
        slides[targetIndex].classList.add('active1');

        updateDots(currentDot, dots[targetIndex]);
    });
});














