document.addEventListener('DOMContentLoaded', function() {
  // Timeline Animation
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  function animateTimeline() {
    timelineItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }
  
  // Initialize timeline items with opacity 0
  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Animate when timeline is in view
  const timelineSection = document.querySelector('.timeline-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateTimeline();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  if (timelineSection) {
    observer.observe(timelineSection);
  }
  
  // Image hover effects
  const images = document.querySelectorAll('.overview-image img, .founder-image img');
  images.forEach(img => {
    img.parentElement.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
    });
    img.parentElement.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
});