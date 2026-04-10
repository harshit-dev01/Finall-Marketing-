// Initialize AOS (Animate On Scroll library)
AOS.init();

// Toggle info cards (accordion-like behavior)
function toggleInfo(card) {
  document.querySelectorAll('.process-card').forEach(c => {
    if (c !== card) c.classList.remove('active'); // collapse other cards
  });
  card.classList.toggle('active'); // toggle the clicked card
}

//for Testomonials

const testimonials = document.querySelectorAll(".testimonial-card");
let index = 0;

function showTestimonial() {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    if (i === index) t.classList.add("active");
  });
  index = (index + 1) % testimonials.length;
}

// Auto-change every 3 seconds
setInterval(showTestimonial, 3000);