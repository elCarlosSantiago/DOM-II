// Your code goes here
// Nav Stuff
const header = document.querySelector(".main-navigation");
const nav = document.querySelector(".nav");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const funLogo = document.querySelector(".logo-heading");

navLinks.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    elem.style.color = "blue";
  });
});

navLinks.forEach((elem) => {
  elem.addEventListener("mouseleave", () => {
    elem.style.color = "black";
    event.preventDefault();
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
  funBus.style.borderRadius = "50%";
});

const welcome = document.querySelector(".intro h2");

welcome.addEventListener("copy", () => {
  welcome.style.color = "red";
});

const letGo = document.querySelector(".content-section .text-content");

document.addEventListener("keyup", (e) => {
  if (e.key === "Backspace") {
    letGo.textContent =
      "OH GOD YOU DELETED ALL MY TEXT OH MY GOD IT HURTS INSIDE!";
  }
});

const contImgs = document.querySelectorAll(".content-section img");

contImgs.forEach((elem) => {
  elem.addEventListener("mouseover", () => {
    elem.style.opacity = "0.5";
  });
});

const adv = document.querySelector(".inverse-content .text-content h2");

adv.addEventListener("cut", () => {
  adv.textContent = "Im too adventurous to be cut lmao leave sir";
});

const btns = document.querySelectorAll(".btn");

btns.forEach((elem) => {
  elem.addEventListener("click", () => {
    alert("YOU CANT REALLY SIGN UP SIR THIS PAGE IS FAKE");
    event.stopPropagation();
  });
});

const destination = document.querySelectorAll(".destination");

console.log(destination)

destination.forEach((elem) => {
  elem.addEventListener("click", () => {
      elem.style.backgroundColor = 'yellow';
  });
});
