const hamburgerButton = document.querySelector('.header__hamburger');
const menuWrapper = document.querySelector('.header__nav');
const menuOverlay = document.querySelector('.header__overlay');
const menuClose = document.querySelector('.header__close');

hamburgerButton.addEventListener('click', () => {
    menuWrapper.style.display = "block";
    menuOverlay.style.display = "block";
    menuClose.style.display = "block";
})

menuClose.addEventListener('click', () => {
    console.log('ok');
    menuWrapper.style.display = "none";
    menuOverlay.style.display = "none";
    menuClose.style.display = "none";
})

