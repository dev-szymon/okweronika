const aboutMe = document.querySelector(".about-me");
const mainNav = document.querySelector(".main-nav");
const backgroundTop = document.querySelector(".top");
const header = document.querySelector("header");
const navMobDesk = document.querySelectorAll(".nav-mobile-desktop");
const bioBtn = document.querySelectorAll(".bio-btn");
const bioSection = document.querySelector("#bio");
const eduBtn = document.querySelectorAll(".edu-btn");
const eduSection = document.querySelector("#education");
const skillBtn = document.querySelectorAll(".skill-btn");
const skillSection = document.querySelector("#skills");
const expBtn = document.querySelectorAll(".exp-btn");
const expSection = document.querySelector("#experience");
const homeBtn = document.querySelectorAll(".home-btn");
const sectionsAll = document.querySelectorAll("section");
const btns = document.querySelectorAll(".btn");
const cmngSoon = document.querySelector(".comming-soon");

let isSectionOpen = false;

header.addEventListener("click", goHome);

cmngSoon.addEventListener("click", showSoon);

function showSoon() {
  window.scrollTo(0, 0);
  mainNav.classList.toggle("hidden-nav");
  header.classList.add("active-section");
  sectionsAll.forEach(e => e.classList.add("hidden"));
  navMobDesk.forEach(e => e.classList.add("hidden"));
  soonTab.classList.remove("hidden");
}

aboutMe.addEventListener("click", hideMainNav);

function hideMainNav() {
  window.scrollTo(0, 0);
  mainNav.classList.toggle("hidden-nav");
  backgroundTop.classList.add("opened-about");
  header.classList.add("active-section");
  sectionsAll.forEach(e => e.classList.add("hidden"));
  bioSection.classList.remove("hidden");
  navMobDesk.forEach(e => e.classList.remove("hidden"));
  btns.forEach(e => e.classList.remove("active-tab"));
  bioBtn.forEach(e => e.classList.add("active-tab"));
}

homeBtn.forEach(e => e.addEventListener("click", goHome));

function goHome() {
  mainNav.classList.toggle("hidden-nav");
  window.scrollTo(0, 0);
  backgroundTop.classList.remove("opened-about");
  header.classList.remove("active-section");
  sectionsAll.forEach(e => e.classList.add("hidden"));
  navMobDesk.forEach(e => e.classList.add("hidden"));
}

function resetTabs() {
  sectionsAll.forEach(e => e.classList.add("hidden"));
  window.scrollTo(0, 0);
  btns.forEach(e => e.classList.remove("active-tab"));
}

bioBtn.forEach(e => e.addEventListener("click", openBio));

function openBio() {
  resetTabs();
  bioSection.classList.remove("hidden");
  bioBtn.forEach(e => e.classList.add("active-tab"));
}

eduBtn.forEach(e => e.addEventListener("click", openEdu));

function openEdu() {
  resetTabs();
  eduSection.classList.remove("hidden");
  eduBtn.forEach(e => e.classList.add("active-tab"));
}

skillBtn.forEach(e => e.addEventListener("click", openSkill));

function openSkill() {
  resetTabs();
  skillSection.classList.remove("hidden");
  skillBtn.forEach(e => e.classList.add("active-tab"));
}

expBtn.forEach(e => e.addEventListener("click", openExp));

function openExp() {
  resetTabs();
  expSection.classList.remove("hidden");
  expBtn.forEach(e => e.classList.add("active-tab"));
}

// Soon tab and sections

const soonTab = document.querySelector("#commingsoon");
const slvkTab = document.querySelector("#slvk-tab");
const usaTab = document.querySelector("#usa-tab");
const espTab = document.querySelector("#esp-tab");
const gbTab = document.querySelector("#gb-tab");
const slvkBtn = document.querySelector("#slvk-btn");
const espBtn = document.querySelector("#esp-btn");
const usaBtn = document.querySelector("#usa-btn");
const gbBtn = document.querySelector("#gb-btn");

slvkBtn.addEventListener("click", showSlvkTab);
espBtn.addEventListener("click", showEspTab);
usaBtn.addEventListener("click", showUsaTab);
gbBtn.addEventListener("click", showGbTab);

function showSlvkTab() {
  resetTabs();
  slvkTab.classList.remove("hidden");
}

function showEspTab() {
  resetTabs();
  espTab.classList.remove("hidden");
}

function showUsaTab() {
  resetTabs();
  usaTab.classList.remove("hidden");
}

function showGbTab() {
  resetTabs();
  gbTab.classList.remove("hidden");
}
