const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add FAQ Section before CTA
const faqHtml = `
  <!-- FAQ Section -->
  <section class="faq-section" id="faq">
    <div class="container">
      <div class="section-header text-center reveal">
        <span class="section-label">FAQ</span>
        <h2 class="section-title text-gradient">Frequently Asked Questions</h2>
      </div>
      <div class="faq-grid reveal">
        <details class="faq-item">
          <summary>What should I expect during my first visit?</summary>
          <div class="faq-content">During your initial consultation, our experts will conduct a comprehensive assessment of your condition, discuss your medical history, and create a personalized treatment plan tailored to your specific needs and goals.</div>
        </details>
        <details class="faq-item">
          <summary>Do I need a doctor's referral?</summary>
          <div class="faq-content">While a doctor's referral is welcome, it is not always mandatory for beginning physiotherapy or occupational therapy at our clinic. You can book an appointment directly with us.</div>
        </details>
        <details class="faq-item">
          <summary>How long does each therapy session last?</summary>
          <div class="faq-content">A typical therapy session lasts between 45 to 60 minutes, depending on the complexity of your treatment plan and the specific modalities used during your visit.</div>
        </details>
        <details class="faq-item">
          <summary>What should I wear to my appointment?</summary>
          <div class="faq-content">Please wear loose, comfortable clothing that allows easy access to the area being treated and permits you to move freely during physical assessments.</div>
        </details>
      </div>
    </div>
  </section>
`;
html = html.replace('  <!-- CTA Section -->', faqHtml + '\n  <!-- CTA Section -->');

// 2. Change animate-fade-up to reveal
html = html.replace(/animate-fade-up/g, 'reveal');

// 3. Add reveal classes to elements
html = html.replace(/<div class="trust-strip(.*?)>/g, '<div class="trust-strip reveal">');
html = html.replace(/<div class="services-grid">/g, '<div class="services-grid reveal">');
html = html.replace(/<div class="about-image">/g, '<div class="about-image reveal">');
html = html.replace(/<div class="about-content">/g, '<div class="about-content reveal">');
html = html.replace(/<div class="features-grid">/g, '<div class="features-grid bento-grid reveal">');
html = html.replace(/<div class="testimonials-grid">/g, '<div class="testimonials-grid reveal">');
html = html.replace(/<div class="contact-info">/g, '<div class="contact-info reveal">');
html = html.replace(/<div class="contact-form-wrapper">/g, '<div class="contact-form-wrapper reveal">');
html = html.replace(/<div class="map-container">/g, '<div class="map-container reveal">');

// 4. Add Mobile Floating Booking Bar
const mobileBar = `
  <!-- Mobile Booking Bar -->
  <div class="mobile-booking-bar">
    <div class="price-hint">Consultation from <span>₹500</span></div>
    <a href="#contact" class="btn btn-primary">Book Now</a>
  </div>
`;
html = html.replace('</body>', mobileBar + '\n</body>');

// 5. Add Intersection Observer Script
const scriptAdd = `
    // Scroll Reveal Animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
`;
html = html.replace('</script>', scriptAdd + '\n  </script>');

fs.writeFileSync('index.html', html);
console.log('HTML updated.');
