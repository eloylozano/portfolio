const navbar = document.getElementById("navbar");
const mobileNav = document.getElementById("mobile-nav");
const indicator = document.getElementById("indicator");
const dropdown = document.getElementById("dropdown");

const settingsBtn = document.getElementById("settings-btn");
const hamburgerBtn = document.getElementById("hamburger-btn");

function moveIndicator(target) {
  const linkRect = target.getBoundingClientRect();
  const navRect = navbar.getBoundingClientRect();
  indicator.style.width = `${linkRect.width}px`;
  indicator.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
}

function setActiveLink(clickedLink) {
  const links = navbar.querySelectorAll("a");
  links.forEach(link => link.classList.remove("active"));
  clickedLink.classList.add("active");
  moveIndicator(clickedLink);
}

// Inicialización del indicador y eventos
function initNavbar() {
  if (!navbar || !indicator) return;
  const links = navbar.querySelectorAll("a");
  if (!links.length) return;

  links.forEach(link => {
    link.addEventListener("click", () => {
      setTimeout(() => setActiveLink(link), 100);
    });
  });

  window.addEventListener("load", () => {
    const hash = window.location.hash || links[0].getAttribute("href");
    const activeLink = Array.from(links).find(l => l.getAttribute("href") === hash) || links[0];
    setActiveLink(activeLink);
  });

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash;
    const activeLink = Array.from(links).find(l => l.getAttribute("href") === hash);
    if (activeLink) setActiveLink(activeLink);
  });

  window.addEventListener("resize", () => {
    const active = document.querySelector("a.active");
    if (active) moveIndicator(active);
  });
}

// Toggle dropdown y menú móvil
function initToggles() {
  if (settingsBtn && dropdown) {
    settingsBtn.addEventListener("click", () => dropdown.classList.toggle("show"));
  }
  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
      document.body.classList.toggle("menu-open", !mobileNav.classList.contains("hidden"));
    });
  }
  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.add("hidden");
        document.body.classList.remove("menu-open");
      });
    });
  }
  const dropdownCloseBtn = document.getElementById("dropdown-close-btn");
  const mobileCloseBtn = document.getElementById("mobile-close-btn");

  if (dropdownCloseBtn && dropdown) {
    dropdownCloseBtn.addEventListener("click", () => dropdown.classList.remove("show"));
  }
  if (mobileCloseBtn && mobileNav) {
    mobileCloseBtn.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
      document.body.classList.remove("menu-open");
    });
  }
}

// Ejecutar inicializaciones
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initToggles();
});
