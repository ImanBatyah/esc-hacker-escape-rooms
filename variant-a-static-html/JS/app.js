const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
const closeBtn = document.getElementById("mobileNavClose");

function openNav() {
  mobileNav.classList.add("mobile-nav--open");
  navToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("body--lock");
}

function closeNav() {
  mobileNav.classList.remove("mobile-nav--open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("body--lock");
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeNav();
  } else {
    openNav();
  }
});

closeBtn.addEventListener("click", closeNav);

mobileNav.addEventListener("click", (e) => {
  if (e.target === mobileNav) {
    closeNav();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeNav();
  }
});
