// Lottie Animation for Hero Section
document.addEventListener("DOMContentLoaded", () => {
  const heroAnimation = lottie.loadAnimation({
    container: document.getElementById("hero-animation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "hero-animation.json", // Path to your animation file
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Testimonials Slider Auto-Slide
  const testimonialSlider = document.querySelector(".testimonial-slider");
  setInterval(() => {
    testimonialSlider.scrollBy({ left: 300, behavior: "smooth" });
  }, 3000);
});

document.querySelectorAll(".dropdown").forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    const menu = event.currentTarget.querySelector(".dropdown-menu");
    menu.classList.toggle("visible");
  });
});


let currentIndex = 0;

function showSlide(slides, index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function initSlider(sliderSelector) {
  const slider = document.querySelector(sliderSelector);
  const slides = slider.querySelectorAll(".slide");
  const nextButton = slider.querySelector(".next");
  const prevButton = slider.querySelector(".prev");

  showSlide(slides, currentIndex);

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(slides, currentIndex);
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(slides, currentIndex);
  });
}

// Initialize the slider
initSlider(".project-slider");


document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = event.target.querySelector("input[type='email']");
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    console.log("Email is valid. Form submitted!");
    emailInput.classList.remove("error");
  } else {
    console.error("Invalid email address.");
    emailInput.classList.add("error");
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("CTA Button Clicked:", button.textContent);

    // Send tracking data (e.g., Google Analytics)
    gtag("event", "cta_click", {
      event_category: "User Interaction",
      event_label: button.textContent,
    });
  });
});


document.querySelectorAll("img").forEach((img) => {
  if ("loading" in HTMLImageElement.prototype) {
    img.setAttribute("loading", "lazy");
  } else {
    console.warn("Browser does not support lazy loading.");
  }
});

document.querySelector("#load-more").addEventListener("click", () => {
  fetch("/more-content.html")
    .then((response) => response.text())
    .then((html) => {
      document.querySelector("#content").innerHTML += html;
    })
    .catch((error) => console.error("Error loading content:", error));
});


document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add("visible");
    }
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}


