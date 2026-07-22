const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".drawer-overlay");
const drawerNavLinks = document.querySelectorAll(".anchor a");
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section");
const btnLinks = document.querySelectorAll(".btn a[href^='#']");
const drawerLogo = document.querySelector(".tag");

// Open drawer
function openDrawer() {
  document.body.classList.add("drawer-open");
}

// Close drawer
function closeDrawer() {
  document.body.classList.remove("drawer-open");
}

// Drawer event listeners
menuBtn?.addEventListener("click", openDrawer);
closeBtn?.addEventListener("click", closeDrawer);
overlay?.addEventListener("click", closeDrawer);
drawerLogo?.addEventListener("click", closeDrawer);

// Close drawer when navigation link is clicked
drawerNavLinks.forEach((link) => {
  link.addEventListener("click", closeDrawer);
});

// Close drawer when button link is clicked
btnLinks.forEach((link) => {
  link.addEventListener("click", closeDrawer);
});

// Close drawer using Escape key
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    document.body.classList.contains("drawer-open")
  ) {
    closeDrawer();
  }
});

// Activate nav link based on current section
function activeLinkOnScroll() {
  const scrollPosition = window.scrollY + 100;
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (scrollPosition >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// Activate clicked nav link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});

// Scroll event
window.addEventListener("scroll", activeLinkOnScroll, {
  passive: true,
});

// Initial active link
activeLinkOnScroll();