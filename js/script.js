// mobile menu

let menuToggle = document.querySelector('.nav-toggle');
let mobileNavContainer = document.querySelector('.nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('nav-toggle--active');
    mobileNavContainer.classList.toggle('nav--active');
}