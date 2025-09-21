// Image slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 3000);

// Form validation and submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service")?.value || "";
  const message = document.getElementById("message").value.trim();
  const confirmation = document.getElementById("confirmation");

  if (!name || !email.includes("@") || !service || !message) {
    alert("Please fill out all fields correctly.");
    return;
  }

  // Simulate form submission
  this.reset();
  confirmation.classList.remove("hidden");
  confirmation.style.color = "green";

  setTimeout(() => {
    confirmation.classList.add("hidden");
  }, 5000);
});

// Service Worker registration
window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("Service Worker registered:", reg))
      .catch((err) => console.error("Service Worker registration failed:", err));
  }
});
