"use strict";

const btnBar = document.querySelector(".js-bar");
const asideNav = document.querySelector(".js-main_mobile");
const btnMobile = document.querySelector(".js-mobile_bar");

function openAsideNav() {
  btnBar.style.opacity = 0;
  btnBar.style.transition = "0.5s linear";

  asideNav.style.transform = "translateY(0)";
  asideNav.style.opacity = 1;
}

function closeAsideNav() {
  btnBar.style.opacity = 1;
  asideNav.style.transform = "translateY(100%)";
  asideNav.style.opacity = 0;
}

btnBar.addEventListener("click", openAsideNav);
btnMobile.addEventListener("click", closeAsideNav);
