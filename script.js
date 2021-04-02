//hamburger and navbar fumctionality
const navBar = document.getElementById('nav-bar');
const menu = document.querySelector('.hamburger');
menu.addEventListener('click', () => {
  navBar.classList.toggle('appear');
});
