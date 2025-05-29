document.addEventListener('DOMContentLoaded', function() {
  // Flip cards on click for mobile
  const associateCards = document.querySelectorAll('.associate-card');
  
  function setupCardFlip(card) {
    const btnFlip = card.querySelector('.btn-flip');
    const cardInner = card.querySelector('.card-inner');
    
    btnFlip.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      if (cardInner.style.transform === 'rotateY(180deg)') {
        cardInner.style.transform = 'rotateY(0deg)';
        btnFlip.textContent = 'View Profile';
      } else {
        cardInner.style.transform = 'rotateY(180deg)';
        if (btnFlip.classList.contains('back-btn')) {
          btnFlip.textContent = 'Back';
        }
      }
    });
  }
  
  // Only setup flip on click for mobile
  if (window.innerWidth <= 768) {
    associateCards.forEach(card => {
      const btnFlip = card.querySelector('.btn-flip');
      const backBtn = card.querySelector('.card-back .btn-flip');
      
      // Mark back button
      if (backBtn) {
        backBtn.classList.add('back-btn');
      }
      
      setupCardFlip(card);
    });
  }
  
  // For larger screens, flip on hover (handled by CSS)
  // Add click handler to flip back when clicking anywhere on the back card
  associateCards.forEach(card => {
    const cardBack = card.querySelector('.card-back');
    
    if (cardBack) {
      cardBack.addEventListener('click', function(e) {
        if (window.innerWidth > 768) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        const cardInner = card.querySelector('.card-inner');
        cardInner.style.transform = 'rotateY(0deg)';
      });
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    const cardInners = document.querySelectorAll('.card-inner');
    
    if (window.innerWidth <= 768) {
      // Mobile - reset all cards to front view
      cardInners.forEach(inner => {
        inner.style.transform = 'rotateY(0deg)';
      });
      
      // Setup click handlers
      associateCards.forEach(card => {
        setupCardFlip(card);
      });
    } else {
      // Desktop - remove click handlers and let CSS hover handle it
      associateCards.forEach(card => {
        const btnFlip = card.querySelector('.btn-flip');
        btnFlip.removeEventListener('click', setupCardFlip);
      });
    }
  });
});