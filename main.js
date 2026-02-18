// ─── NAVBAR SCROLL ───
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

// ─── SET ACTIVE NAV LINK ───
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.classList.add("active");
  }
});

// ─── CONTACT MODAL ───
const modalOverlay = document.getElementById("contactModal");

function openContactModal() {
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// All contact trigger links/buttons
document.querySelectorAll("[data-contact]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    openContactModal();
  });
});

// Close on overlay click
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeContactModal();
  });
}

// Close button
const modalCloseBtn = document.getElementById("modalClose");
if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeContactModal);

// Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeContactModal();
});

// ─── CONTACT FORM SUBMIT ───
const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactForm.style.display = "none";
    successMsg.classList.add("show");
    setTimeout(() => {
      closeContactModal();
      contactForm.reset();
      contactForm.style.display = "block";
      successMsg.classList.remove("show");
    }, 3000);
  });
}

// ─── ORDER BUTTON ───
document.querySelectorAll("[data-order]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    openContactModal();
  });
});

// ─── REVEAL ON SCROLL ───
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

reveals.forEach((el) => observer.observe(el));

// ─── YEAR ───
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ─── HAMBURGER (mobile nav) ───
const hamburger = document.querySelector(".nav-hamburger");
const navLinks = document.querySelector(".nav-links");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.style.display === "flex";
    navLinks.style.display = isOpen ? "none" : "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "70px";
    navLinks.style.left = "0";
    navLinks.style.right = "0";
    navLinks.style.background = "rgba(26,26,20,0.98)";
    navLinks.style.padding = "20px 24px";
    navLinks.style.gap = "20px";
    navLinks.style.borderBottom = "1px solid rgba(201,168,76,0.15)";
  });
}
