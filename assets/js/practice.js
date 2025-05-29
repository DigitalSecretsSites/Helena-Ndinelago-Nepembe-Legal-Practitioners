document.addEventListener('DOMContentLoaded', function() {
  // Highlight active practice area if coming from hash link
  const highlightPracticeArea = function() {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement && targetElement.classList.contains('practice-card')) {
        // Scroll to the element with offset for fixed header
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 300);
        
        // Add highlight class
        targetElement.classList.add('highlight');
        
        // Remove highlight after 3 seconds
        setTimeout(() => {
          targetElement.classList.remove('highlight');
        }, 3000);
      }
    }
  };
  
  // Call on initial load
  highlightPracticeArea();
  
  // Also call if hash changes
  window.addEventListener('hashchange', highlightPracticeArea);
  
  // Animate steps when they come into view
  const steps = document.querySelectorAll('.step');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  steps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateX(-20px)';
    step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(step);
  });
  
  // Add hover effect to practice cards
  const practiceCards = document.querySelectorAll('.practice-card');
  practiceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.practice-icon').style.backgroundColor = 'var(--gold)';
      card.querySelector('.practice-icon').style.color = 'var(--navy-blue)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.querySelector('.practice-icon').style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
      card.querySelector('.practice-icon').style.color = 'var(--gold)';
    });
  });
});