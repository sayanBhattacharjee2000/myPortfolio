function showSideBar() {
  let sideBar = document.querySelector("#side-bar");
  let menuIcon1 = document.querySelector(".menu-icon1");
  menuIcon1.addEventListener("click", function () {
    sideBar.style.display = "flex";
  });
}
showSideBar();

function hideSideBar() {
  let sideBar = document.querySelector("#side-bar");
  let menuIcon2 = document.querySelector(".menu-icon2");
  menuIcon2.addEventListener("click", function () {
    sideBar.style.display = "none";
  });
}
hideSideBar();

function changeBackgroundColor_forLargeScreen() {
  let toggle = document.querySelector(".forLargeScreen");
  let body = document.querySelector("body");
  let table = document.querySelector("table");

  toggle.addEventListener("click", function () {
    this.classList.toggle("ri-moon-fill");

    if (this.classList.toggle("ri-sun-fill")) {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      body.style.transition = "1s";

      if (table) table.style.border = "3px solid black";
      document.querySelectorAll("table td, table th").forEach(cell => {
        cell.style.border = "1px solid black";
      });
    } else {
      body.style.backgroundColor = "black";
      body.style.color = "white";
      body.style.transition = "1s";

      if (typeof sideBarMenuIcon !== "undefined") {
        sideBarMenuIcon.style.border = "2px solid white";
      }

      if (table) table.style.border = "3px solid white";
      document.querySelectorAll("table td, table th").forEach(cell => {
        cell.style.border = "1px solid white";
      });
    }
  });
}
changeBackgroundColor_forLargeScreen();


function changeBackgroundColor_forSmallScreen() {
  let toggle = document.querySelector(".forSmallScreen");
  let body = document.querySelector("body");
  let sideBarMenuIcon = document.querySelector(".menu-icon2");
  let table = document.querySelector("table");

  toggle.addEventListener("click", function () {
    this.classList.toggle("ri-moon-fill");

    if (this.classList.toggle("ri-sun-fill")) {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      body.style.transition = "1s";

      if (table) table.style.border = "3px solid black";
      document.querySelectorAll("table td, table th").forEach(cell => {
        cell.style.border = "1px solid black";
      });
    } else {
      body.style.backgroundColor = "black";
      body.style.color = "white";
      body.style.transition = "1s";

      sideBarMenuIcon.style.border = "2px solid white";

      if (table) table.style.border = "3px solid white";
      document.querySelectorAll("table td, table th").forEach(cell => {
        cell.style.border = "1px solid white";
      });
    }
  });
}
changeBackgroundColor_forSmallScreen();


function animationOfNavbar() {
  let navBarAnimation = gsap.timeline();
  navBarAnimation.from(".nav-bar_part-1 h3", {
    opacity: 0,
    duration: 1,
    y: -20,
    repeat: -1,
    yoyo: true,
  });
  navBarAnimation.from(".nav-bar_part-2 a h3", {
    opacity: 0,
    duration: 1,
    y: -20,
  });
}
animationOfNavbar();

function animationOfText() {
  gsap.from(".text .first-text .name", {
    opacity: 0,
    duration: 2,
    x: -30,
    delay: 0.3,
  });
  gsap.from(".text .second-text", {
    opacity: 0,
    duration: 2,
    x: 30,
    delay: 0.3,
  });
}
animationOfText();

document.addEventListener("contextmenu", function(e){
  e.preventDefault();
})
