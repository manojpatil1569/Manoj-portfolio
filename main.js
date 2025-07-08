// Initialize Swiper with cube effect and mousewheel navigation
const swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    mousewheel: true,

    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
});

// Custom handler (optional – currently just logs slider instance)
swiper.sliderMove = function (s, e) {
    console.log(s); // You can customize this if needed
};

// Function to handle navigation and active link styling
function Navigate(indx) {
    // Remove active class from all links
    document.querySelectorAll(".Links li").forEach(li => {
        li.classList.remove("activeLink");
    });

    // Add active class to the clicked/targeted link
    const links = document.querySelectorAll(".Links li");
    if (links[indx]) {
        links[indx].classList.add("activeLink");
    }

    // Slide to the corresponding Swiper slide
    swiper.slideTo(indx, 1000, true);
}
