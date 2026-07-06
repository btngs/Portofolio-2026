const hamburgerBtn = document.getElementById("hamburger-menu");
const menuList = document.getElementById("menu-list");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

const images = ["./assets/xpback.webp", "./assets/dolpin.webp"];
const heroSection = document.querySelector(".hero-section");
let currentIndex = 0;
let isTransitioning = false;

setInterval(() => {
    if (isTransitioning) return;

    isTransitioning = true;
    const nextIndex = (currentIndex + 1) % images.length;

    heroSection.style.setProperty("--hero-bg-next", `url("${images[nextIndex]}")`);
    heroSection.classList.add("is-transitioning");

    setTimeout(() => {
        heroSection.style.setProperty("--hero-bg-base", `url("${images[nextIndex]}")`);
        heroSection.classList.remove("is-transitioning");
        currentIndex = nextIndex;
        isTransitioning = false;
    }, 1000);
}, 6000);

hamburgerBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        menuList.classList.remove("active");
        navLinks.classList.remove("active");
    });
});
