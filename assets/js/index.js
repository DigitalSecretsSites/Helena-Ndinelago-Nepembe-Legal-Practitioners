// Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
  const typewriterElement = document.querySelector('.typewriter');
  
  // Reset animation to play on page load
  if (typewriterElement) {
    typewriterElement.style.animation = 'none';
    void typewriterElement.offsetWidth; // Trigger reflow
    typewriterElement.style.animation = null;
  }
  
  // Testimonial Slider
  const testimonialSlider = document.querySelector('.testimonial-slider');
  if (testimonialSlider) {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-card');
    const totalSlides = slides.length;
    
    function showSlide(index) {
      testimonialSlider.scrollTo({
        left: slides[index].offsetLeft,
        behavior: 'smooth'
      });
      currentSlide = index;
    }
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }, 5000);
  }
  
  // Scroll Reveal Animations for elements without AOS
  const scrollReveal = function() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translate(0)';
      }
    });
  };
  
  window.addEventListener('scroll', scrollReveal);
  window.addEventListener('load', scrollReveal);
  
  // Initialize elements with opacity 0 for scroll reveal
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  document.querySelectorAll('.slide-in-left').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-50px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  document.querySelectorAll('.slide-in-right').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(50px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
});