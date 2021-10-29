"use strict";

const investorLink = document.querySelector(".js-investor");
const entrepreneurLink = document.querySelector(".js-entrepreneur");
const entrepreneurList = document.querySelector(".js-entrepreneurServiceList");
const investorList = document.querySelector(".js-investorServiceList");

// entrepreneurList.style.display = "none";

const showInvestor = (e) => {
  e.preventDefault();
  investorList.style.transform = "translateX(0)";
  entrepreneurList.style.transform = "translateX(100%)";
};

const shownEtrepreneur = (e) => {
  e.preventDefault();
  investorList.style.transform = "translateX(-200%)";
  entrepreneurList.style.transform = "translateX(-100%)";
};

investorLink.addEventListener("click", showInvestor);
entrepreneurLink.addEventListener("click", shownEtrepreneur);
