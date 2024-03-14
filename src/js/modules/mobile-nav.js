function mobileNav() {
  // Mobile nav button
  const navBtnOpen = document.querySelector("#mobile-nav-btn");
  const navBtnClose = document.querySelector("#close-mobile-nav");
  const mobileNavFade = document.querySelector(".mobile-nav-fade");
  const nav = document.querySelector(".mobile-nav");
  //   const menuIcon = document.querySelector(".nav-icon");

  navBtnOpen.onclick = function () {
    nav.classList.add("mobile-nav--open");
    // menuIcon.classList.toggle("nav-icon--active");
    mobileNavFade.classList.add("mobile-nav-fade--open");
    document.body.classList.toggle("no-scroll");
  };

  navBtnClose.onclick = closeMobileNav;

  mobileNavFade.onclick = closeMobileNav;

  function closeMobileNav() {
    nav.classList.remove("mobile-nav--open");
    mobileNavFade.classList.remove("mobile-nav-fade--open");
    document.body.classList.toggle("no-scroll");
  }

  // nav.addEventListener("click", function (e) {
  //   e.stopPropagation();
  // });
}

export default mobileNav;
