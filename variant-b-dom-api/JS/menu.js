function el(tag, options = {}) {
  const element = document.createElement(tag);
  const { classes = [], attrs = {}, html } = options;
  classes.forEach((c) => element.classList.add(c));
  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  if (html) element.innerHTML = html;
  return element;
}

const mount = document.getElementById("menuMount");

const navToggle = el("button", {
  classes: ["nav-toggle"],
  attrs: {
    id: "navToggle",
    "aria-label": "Open navigation",
    "aria-expanded": "false",
    "aria-controls": "mobileNav",
  },
});

const bar = el("span", { classes: ["nav-toggle__bar"] });
navToggle.appendChild(bar);
mount.appendChild(navToggle);

const mobileNav = el("div", {
  classes: ["mobile-nav"],
  attrs: { id: "mobileNav" },
});

const panel = el("div", { classes: ["mobile-nav__panel"] });

const closeBtn = el("button", {
  classes: ["mobile-nav__close"],
  attrs: { id: "mobileNavClose", "aria-label": "Close navigation" },
  html: "&times;",
});
panel.appendChild(closeBtn);

const list = el("ul", { classes: ["mobile-nav__list"] });
const items = [
  { href: "#play-online", label: "Play online" },
  { href: "#play-onsite", label: "Play on-site" },
  { href: "#story", label: "The story" },
  { href: "#contact", label: "Contact us" },
];

items.forEach((item) => {
  const li = el("li");
  const a = el("a", { attrs: { href: item.href }, html: item.label });
  li.appendChild(a);
  list.appendChild(li);
});

panel.appendChild(list);

const ctaWrapper = el("div", { classes: ["mobile-nav__cta"] });
const cta = el("a", {
  classes: ["btn", "btn--primary"],
  attrs: { href: "#contact" },
  html: "Book now",
});
ctaWrapper.appendChild(cta);
panel.appendChild(ctaWrapper);

mobileNav.appendChild(panel);
document.body.appendChild(mobileNav);

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
