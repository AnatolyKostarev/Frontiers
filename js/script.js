"use strict";

const investorLink = document.querySelector(".js-investor");
const entrepreneurLink = document.querySelector(".js-entrepreneur");
const entrepreneurList = document.querySelector(".js-entrepreneurServiceList");
const investorList = document.querySelector(".js-investorServiceList");

entrepreneurList.style.display = "none";

const showInvestor = (e) => {
  e.preventDefault();
  investorList.style.display = "grid";
  entrepreneurList.style.display = "none";
};

const shownEtrepreneur = (e) => {
  e.preventDefault();
  investorList.style.display = "none";
  entrepreneurList.style.display = "grid";
};

investorLink.addEventListener("click", showInvestor);
entrepreneurLink.addEventListener("click", shownEtrepreneur);
