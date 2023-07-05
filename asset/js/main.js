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

AOS.init();
