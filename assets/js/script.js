// Typed text animation for hero section
document.addEventListener('DOMContentLoaded', function () {
  const roles = [
    'I am a Logo Designer',
    'I am a Banner Designer',
    'I am a Poster Designer',
    'I am a Graphic Designer',
    'I am an Illustrator',
    'I am an Identity Designer'
  ];
  const typedText = document.getElementById('typed-text');
  let roleIndex = 0, charIndex = 0, isDeleting = false;
  function type() {
    if (!typedText) return;
    const current = roles[roleIndex];
    if (isDeleting) {
      typedText.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 600);
      } else {
        setTimeout(type, 40);
      }
    } else {
      typedText.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        isDeleting = true;
        setTimeout(type, 1200);
      } else {
        setTimeout(type, 80);
      }
    }
  }
  if (typedText) type();

  // Mouse-move bubble effect
  let mouseBubble = document.querySelector('.mouse-bubble');
  if (!mouseBubble) {
    mouseBubble = document.createElement('div');
    mouseBubble.className = 'mouse-bubble';
    document.body.appendChild(mouseBubble);
  }
  document.addEventListener('mousemove', function (e) {
    mouseBubble.style.left = e.clientX + 'px';
    mouseBubble.style.top = e.clientY + 'px';
  });
});
'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}