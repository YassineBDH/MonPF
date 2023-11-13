let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
const text = document.querySelector('.multiple-text')
const textload = () => {
    setTimeout(() =>{
        text.textContent='Developer';
    }, 0);
    setTimeout(() =>{
        text.textContent='Web';
    }, 4000);
    setTimeout(() =>{
        text.textContent='Web Mobile';
    }, 8000)
    setTimeout(() =>{
        text.textContent='FullStack';
    }, 12000)
}
textload();
setInterval(textload, 16000);