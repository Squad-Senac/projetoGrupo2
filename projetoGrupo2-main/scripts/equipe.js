var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuActive() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}