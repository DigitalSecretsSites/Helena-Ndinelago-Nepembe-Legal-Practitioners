document.addEventListener('DOMContentLoaded', function() {
  // Form input animations
  const formGroups = document.querySelectorAll('.form-group');
  
  formGroups.forEach(group => {
    const input = group.querySelector('input, select, textarea');
    
    if (input) {
      // Add focus class when input is focused
      input.addEventListener('focus', function() {
        group.classList.add('focused');
      });
      
      // Remove focus class when input loses focus
      input.addEventListener('blur', function() {
        if (!input.value) {
          group.classList.remove('focused');
        }
      });
      
      // Check if input has value on page load
      if (input.value) {
        group.classList.add('focused');
      }
    }
  });
  
  // Form submission handling
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const formValues = Object.fromEntries(formData.entries());
      
      // Here you would typically send the form data to your server
      // For demonstration, we'll just show a confirmation message
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      
      // Show loading state
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted with values:', formValues);
        
        // Show success message
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.backgroundColor = '#4CAF50';
        
        // Reset form after 3 seconds
        setTimeout(() => {
          this.reset();
          submitBtn.textContent = originalBtnText;
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
          
          // Remove focused class from all inputs
          formGroups.forEach(group => {
            group.classList.remove('focused');
          });
        }, 3000);
      }, 1500);
    });
  }
  
  // Map interaction
  const mapIframe = document.querySelector('.map-container iframe');
  if (mapIframe) {
    mapIframe.addEventListener('mouseenter', function() {
      this.style.opacity = '0.8';
    });
    
    mapIframe.addEventListener('mouseleave', function() {
      this.style.opacity = '1';
    });
  }
  
  // Emergency contact button pulse animation
  const emergencyBtn = document.querySelector('.emergency-phone .btn');
  if (emergencyBtn) {
    setInterval(() => {
      emergencyBtn.classList.toggle('pulse');
    }, 2000);
  }
});