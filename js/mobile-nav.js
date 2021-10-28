"use strict";

const btnBar = document.querySelector(".js-bar");
const btnFooter = document.querySelector(".js-footer_bar");
const asideNav = document.querySelector(".js-main_mobile");
const asideFooterNav = document.querySelector(".js-footer_mobile");

const btnMobile = document.querySelector(".js-mobile_bar");
const btnMobileFooter = document.querySelector(".js-mobile_footer_bar");

const openTopNav = (e) => {
  btnBar.style.opacity = 0;
  btnBar.style.transition = "0.5s linear";

  asideNav.style.transform = "translateX(0)";
  asideNav.style.opacity = 1;

  if (window.innerWidth <= 992) {
    document.body.style.overflow = "hidden";
  }
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else {
    // старый IE
    document.selection.empty();
  }
};

const openFooterNav = (e) => {
  btnFooter.style.opacity = 0;
  btnFooter.style.transition = "0.5s linear";

  asideFooterNav.style.transform = "translateX(0)";
  asideFooterNav.style.opacity = 1;

  if (window.innerWidth <= 992) {
    document.body.style.overflow = "hidden";
  }
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else {
    // старый IE
    document.selection.empty();
  }
};

const closeTopNav = (e) => {
  btnBar.style.opacity = 1;
  asideNav.style.transform = "translateX(100%)";
  asideNav.style.opacity = 0;
  document.body.style.overflow = "";
};

const closeFooterNav = (e) => {
  btnFooter.style.opacity = 1;
  asideFooterNav.style.transform = "translateX(100%)";
  asideFooterNav.style.opacity = 0;
  document.body.style.overflow = "";
};

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  prevScrollpos < currentScrollPos
    ? (asideNav.style.transform = "translateY(-100%)")
    : (asideNav.style.transform = "translateY(0)");
};

btnBar.addEventListener("click", openTopNav);
btnFooter.addEventListener("click", openFooterNav);

btnMobile.addEventListener("click", closeTopNav);
btnMobileFooter.addEventListener("click", closeFooterNav);
