const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav .nav-items');

hamburger.addEventListener('click', ()=> {
    if(nav.classList.contains('open')) {
        nav.classList.remove('open')
    } else {
        nav.classList.add('open')
    }
})