document.addEventListener('DOMContentLoaded', function() {
  // Article card hover effects
  const articleCards = document.querySelectorAll('.article-card');
  
  articleCards.forEach(card => {
    const img = card.querySelector('.article-image img');
    
    card.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // Here you would typically send the email to your server
        // For demonstration, we'll just show an alert
        alert(`Thank you for subscribing with ${email}! You'll receive our next newsletter.`);
        emailInput.value = '';
      }
    });
  }
  
  // Lazy load YouTube iframes
  const mediaVideos = document.querySelectorAll('.media-video');
  
  function lazyLoadVideos() {
    mediaVideos.forEach(video => {
      if (video.getBoundingClientRect().top < window.innerHeight && !video.classList.contains('loaded')) {
        const iframe = video.querySelector('iframe');
        iframe.src = iframe.dataset.src;
        video.classList.add('loaded');
      }
    });
  }
  
  // Load videos that are initially in view
  lazyLoadVideos();
  
  // Load remaining videos as user scrolls
  window.addEventListener('scroll', lazyLoadVideos);
  
  // For better performance, you might want to throttle the scroll event
  // but for this example, we'll keep it simple
});