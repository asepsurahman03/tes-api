document.addEventListener("DOMContentLoaded", function () {
    // Hero section animation
    const heroText = document.querySelector(".hero h2");
    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(0)";
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
