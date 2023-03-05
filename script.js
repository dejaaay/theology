//Not sure if working 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function() {
  menu.classList.toggle('bx-menu');
  navbar.classList.toggle('open');
});
