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

aboutMe.addEventListener("click", hideMainNav);

function hideMainNav() {
  mainNav.classList.toggle("hidden-nav");
  backgroundTop.classList.add("opened-about");
  header.classList.add("active-section");
  bioSection.classList.remove("hidden");
  navMobDesk.forEach(e => e.classList.remove("hidden"));
  bioBtn.classList.add("active-tab");
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

bioBtn.forEach(e => e.addEventListener("click", openBio));

function openBio() {
  sectionsAll.forEach(e => e.classList.add("hidden"));
  window.scrollTo(0, 0);
  bioSection.classList.remove("hidden");
  btns.forEach(e => e.classList.remove("active-tab"));
  bioBtn.forEach(e => e.classList.add("active-tab"));
}

eduBtn.forEach(e => e.addEventListener("click", openEdu));

function openEdu() {
  sectionsAll.forEach(e => e.classList.add("hidden"));
  window.scrollTo(0, 0);
  eduSection.classList.remove("hidden");
  btns.forEach(e => e.classList.remove("active-tab"));
  eduBtn.forEach(e => e.classList.add("active-tab"));
}

skillBtn.forEach(e => e.addEventListener("click", openSkill));

function openSkill() {
  sectionsAll.forEach(e => e.classList.add("hidden"));
  window.scrollTo(0, 0);
  skillSection.classList.remove("hidden");
  btns.forEach(e => e.classList.remove("active-tab"));
  skillBtn.forEach(e => e.classList.add("active-tab"));
}

expBtn.forEach(e => e.addEventListener("click", openExp));

function openExp() {
  sectionsAll.forEach(e => e.classList.add("hidden"));
  window.scrollTo(0, 0);
  expSection.classList.remove("hidden");
  btns.forEach(e => e.classList.remove("active-tab"));
  expBtn.forEach(e => e.classList.add("active-tab"));
}
