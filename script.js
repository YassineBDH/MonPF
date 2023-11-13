// var app = document.querySelector('h1');
// var typewriter = new Typewriter(app,{
//     loop: true,
//     delay:105,
// });
// typewriter
// // .pauseFor(2500)
// .typeString('Yassine BOUDOUH <strong><span style="color:#24C6FB;">Developpeur</span></strong>')
// .pauseFor(300)
// .deletechars(12)
// .typeString('<strong><span style="color:#24C6FB;">Web</span></strong>')
// .pauseFor(300)
// .deletechars(4)
// .pauseFor(300)
// .start();

var app = document.querySelector('h1');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 105,
})

typewriter
//   .pauseFor(2500)
  .typeString('Yassine BOUDOUH <strong><br><span style="color:#24C6FB;">Developer</span></br></strong>')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<strong><br><span style="color:#24C6FB;">WEB</span></br></strong>')
  .pauseFor(1000)
  .deleteChars(4)
  .typeString('<strong><br><span style="color:#24C6FB;">Web Mobile</span></br></strong>')
  .pauseFor(1000)
  .deleteChars(11)
  .typeString('<strong><br><span style="color:#24C6FB;">Full-Stack</span></br></strong>')
  .pauseFor(1000)
 
  .start();

  let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};