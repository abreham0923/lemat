let menubar = document.querySelector("#menu-bar");
let nav = document.querySelector(".navbar");

menubar.onclick = () => {
  menubar.classList.toggle("fa-times");
  nav.classList.toggle("active");
};
window.onscroll = () => {
  menubar.classList.remove("fa-times");
  nav.classList.toggle("active");
};
document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


// const sr = ScrollReveal({
//   distance: "45px",
//   duration: 2700,
//   reset: true,
// });
// sr.reveal(".myimageabout", { delay: 350, origin: "left" });
// sr.reveal(".about-text-content", { delay: 350, origin: "right" });
// sr.reveal(".home-image", { delay: 350, origin: "left" });
// sr.reveal(".home-text-content", { delay: 350, origin: "right" });

// sr.reveal(".quality-content", { delay: 350, origin: "left" });
// sr.reveal(".quality-image", { delay: 350, origin: "right" });
// sr.reveal(".gallery-image", { delay: 350, origin: "top" });
// sr.reveal(".menu-food-content", { delay: 350, origin: "top" });
// sr.reveal(".menu-food-text", { delay: 350, origin: "bottom" });

// document.addEventListener("DOMContentLoaded", function () {
//   const menuImages = document.querySelectorAll(".menu-food-content img");

//   function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   function handleScroll() {
//     menuImages.forEach((image) => {
//       if (isInViewport(image) && !image.classList.contains("fade-in")) {
//         image.classList.add("fade-in");
//       }
//     });
//   }

//   // Initial check on page load
//   handleScroll();

//   // Listen for scroll events
//   window.addEventListener("scroll", handleScroll);
// });
