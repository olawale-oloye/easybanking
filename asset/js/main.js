AOS.init();

const arrow = document.querySelector(".ri-arrow-up-s-line");

window.addEventListener("scroll", function () {
  if (
    document.documentElement.scrollTop >= 60 ||
    document.body.scrollTop >= 60
  ) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});

arrow.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

const openNav = document.querySelector(".ri-menu-2-fill");
const closeNav = document.querySelector(".ri-close-circle-line");
const navList = document.querySelector("nav ul");

openNav.addEventListener("click", function () {
  navList.style.top = "30%";
  openNav.style.display = "none";
  closeNav.style.style.display = "block";
});

closeNav.addEventListener("click", function () {
  navList.style.top = "-50%";
  openNav.style.display = "block";
  closeNav.style.display = "none";
});

document.querySelectorAll("nav ul a").forEach((navLink) => {
  navLink.addEventListener("click", function () {
    navList.style.top = "-50%";
    openNav.style.display = "block";
    closeNav.style.display = "none";
  });
});
