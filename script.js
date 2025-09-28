document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".section").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
        scrub: true, 
      },
    });
  });
});

let currentIndex = 0;
const images = document.querySelectorAll(".slider-image");

function changeImage() {
  images.forEach((image, index) => {
    image.style.opacity = 0; // Hide images
  });

  currentIndex = (currentIndex + 1) % images.length; 
  images[currentIndex].style.opacity = 1; 
}

setInterval(changeImage, 2000); 

//timeline sections

const circles = document.querySelectorAll(".timeline-circle");

circles.forEach((circle) => {
  circle.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(1.1)";
  });

  circle.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});
// Scroll animation for timeline sections
window.addEventListener("scroll", function () {
  const timelineSections = document.querySelectorAll(".timeline-detail-item");

  timelineSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = window.innerHeight / 1.3;

    if (sectionTop < sectionVisible) {
      section.classList.add("fade-in");
    } else {
      section.classList.remove("fade-in");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Function to animate the bars when the section comes into view
  function animateBarsOnScroll() {
    const graphSections = document.querySelectorAll(".graph-container");

    graphSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = window.innerHeight / 1.3;

      if (sectionTop < sectionVisible) {
        const bars = section.querySelectorAll(".bar");
        bars.forEach((bar) => {
          const percentage = bar.dataset.percentage;
          bar.style.height = `${percentage}%`;
        });
      }
    });
  }

  // Listen for the scroll event to trigger animations
  window.addEventListener("scroll", animateBarsOnScroll);

  // Initial check in case the section is already visible
  animateBarsOnScroll();
});

// Smooth Scroll to "Learn More" Section
document
  .querySelector(".learn-more-btn")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevents default anchor link behavior

    const targetSection = document.getElementById("farming-details"); 
    targetSection.scrollIntoView({
      behavior: "smooth", 
      block: "start", 
    });
  });

// Smooth Scroll to "Learn More" Section in Space Vision
document
  .querySelector(".learn-more-btn")
  .addEventListener("click", function (e) {
    e.preventDefault(); 

    const targetSection = document.getElementById("space-details"); // Target section ID
    targetSection.scrollIntoView({
      behavior: "smooth", 
      block: "start", 
    });
  });

// Smooth Scroll to "Learn More" Section in Future Vision
document
  .querySelector(".learn-more-btn")
  .addEventListener("click", function (e) {
    e.preventDefault(); 

    const targetSection = document.getElementById("future-details"); 
    targetSection.scrollIntoView({
      behavior: "smooth", 
      block: "start", 
    });
  });

// Smooth Scroll to "Learn More" Section in About
document
  .querySelector(".learn-more-btn")
  .addEventListener("click", function (e) {
    e.preventDefault(); 

    const targetSection = document.getElementById("about-details");
    targetSection.scrollIntoView({
      behavior: "smooth", 
      block: "start", 
    });
  });

// Smooth Scroll to Top
document
  .querySelector(".back-to-top-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const mobileNav = document.querySelector(".mobile-nav");
  const desktopNav = document.querySelector(".desktop-nav");

  function toggleNav() {
    if (window.innerWidth <= 768) {
      desktopNav.style.display = "none";
      mobileNav.style.display = "flex";
    } else {
      desktopNav.style.display = "flex";
      mobileNav.style.display = "none"; 
    }
  }

  // Run on page load
  toggleNav();

  // Run on window resize
  window.addEventListener("resize", toggleNav);
});
