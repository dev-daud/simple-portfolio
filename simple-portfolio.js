const menubtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".drawer-overlay");
const nav = document.querySelectorAll(".anchor a");
const btnLinks = document.querySelectorAll(".btn a[href^='#']");
const drawerLogo = document.querySelector(".tag");

// Function to open the drawer
function openDrawer() {
    document.body.classList.add("drawer-open");
}

// Function to close the drawer
function closeDrawer() {
    document.body.classList.remove("drawer-open");
}
// Event Listeners
menubtn.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);
drawerLogo.addEventListener("click", closeDrawer);

// Event Listeners for Navigation Links
nav.forEach((link) => {
    link.addEventListener("click", closeDrawer);
});

// Event Listeners for Button Links
btnLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
});

// Event Listener for Escape Key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("drawer-open")) {
        closeDrawer();
    }
});
