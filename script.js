let burger = document.querySelector('.burger__menu')
let body__scroll = document.querySelector('body')
let header = document.querySelector('.header__nav')
burger.addEventListener('click', function() {
    burger.classList.toggle('burger__menu__active')
    body__scroll.classList.toggle('body__active')
    header.classList.toggle('header__nav__active')
});