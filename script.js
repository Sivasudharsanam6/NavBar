const hamburger = document.querySelector('.hamburger');
const NavBar = document.querySelector('ul');
hamburger.addEventListener('click',()=>{
    NavBar.classList.toggle('slide');
});
