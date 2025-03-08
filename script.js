
//navbar mobile show-hidden//
function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show");
}


//change slide//

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(step) {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    slides[slideIndex].classList.add("active");
    updateImages(); 
}

//change desktop-picture to mobile-picture//

function updateImages() {
    const isMobile = window.innerWidth <= 768; 
    slides.forEach(slide => {
        const img = slide.querySelector("img");
        img.src = isMobile ? img.getAttribute("data-mobile") : img.getAttribute("src");
    });
}
window.addEventListener("resize", updateImages);
document.addEventListener("DOMContentLoaded", updateImages);

//overlay mobile//
document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector(".overlay");
    const menuButton = document.querySelector(".mobile-nav");
    const closeButton = document.querySelector(".close-btn"); 

    menuButton.addEventListener("click", function() {
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function() {
        overlay.classList.remove("active");
    });

    closeButton.addEventListener("click", function() {
        overlay.classList.remove("active");
    });
});

