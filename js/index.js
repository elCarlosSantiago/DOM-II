// Your code goes here
// Nav Stuff
const header = document.querySelector(".main-navigation");
const nav = document.querySelector(".nav");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const funLogo = document.querySelector(".logo-heading");

navLinks.forEach((elem) => {
  elem.addEventListener("mouseover", () => {
    elem.style.color = "blue";
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    header.style.position = "static";
  }
});

document.addEventListener("wheel", () => {
  nav.style.backgroundColor = "red";
});

window.addEventListener("load", () => {
  funLogo.style.fontSize = "10rem";
});

// Container home main content

const funBus = document.querySelector(".intro img");

funBus.addEventListener("dblclick", (e) => {
    funBus.style.borderRadius = '50%';
});

const welcome = document.querySelector('.intro h2');

welcome.addEventListener('copy', () => {
    welcome.style.color = 'red';
})

const letGo = document.querySelector('.content-section .text-content');

document.addEventListener('keyup', (e) => {
   if (e.key === 'Backspace'){
       letGo.textContent = 'OH GOD YOU DELETED ALL MY TEXT OH MY GOD IT HURTS INSIDE!'
   }
})