const filterBtn = document.querySelectorAll('.gallery__li');
const imgBtn = document.querySelectorAll('.gallery__img');
const popup = document.querySelector('.popup');
const img = document.querySelector('.popup__img');
const closeBtn = document.querySelector('.popup__btn--close');
const overlay = document.querySelector('.popup__overlay');
const btnLeft = document.querySelector('.popup__btn--left');
const btnRight = document.querySelector('.popup__btn--right');
const navBtnFixed = document.querySelector('.navigation');
/*FILTRIRANJE SLIKA U GALERIJI*/
filterBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        filterBtn.forEach(function (item) {
            item.classList.remove('active--filter');
        });
        item.classList.add('active--filter');
        // show images
        let values = item.textContent;
        imgBtn.forEach(function (show) {
            show.style.display = 'none';
            if (show.getAttribute("data-id") === values || values === 'Sve') {
                show.style.display = 'initial';
            };
        });
    });
});
/* CLICK NA SLIKU OTVARA POPUP */
imgBtn.forEach(function (item, index) {
    let i = index;
    item.addEventListener('click', function () {
        navBtnFixed.classList.add('hidden');
        popup.classList.remove('hidden');
        img.src = `img/PORTFOLIO/img-${[i + 1]}.jpg`;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        //sledeca slika
        btnRight.addEventListener('click', function () {
            if (i < imgBtn.length - 1) {
                i++;
                img.src = `img/PORTFOLIO/img-${i + 1}.jpg`;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        //prethodna slika
        btnLeft.addEventListener('click', function () {
            if (i > 0) {
                i--;
                img.src = `img/PORTFOLIO/img-${i + 1}.jpg`;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        /*CLOSE BTN */
        closeBtn.addEventListener('click', function () {
            popup.classList.add('hidden');
            i = 0;
            navBtnFixed.classList.remove('hidden');
        });
        /*CLOSE POPUP*/
        popup.addEventListener('click', function () {
            popup.classList.add('hidden');
            i = 0;
            navBtnFixed.classList.remove('hidden');

        });
        /*CLOSE ON ESC*/
        document.addEventListener('keydown', function (e) {
            if (e.keyCode === 27 && !popup.classList.contains('hidden')) {
                popup.classList.add('hidden');
                i = 0;
                navBtnFixed.classList.remove('hidden');

            }
        });
    });
});

img.addEventListener('click', function (event) {
    event.stopPropagation();
});
btnRight.addEventListener('click', function (event) {
    event.stopPropagation();

});
btnLeft.addEventListener('click', function (event) {
    event.stopPropagation();
});

