const fs = require('fs');

const cssToAdd = `
/* =========================================================================
   PREMIUM ADDITIONS: SCROLL REVEAL, BENTO GRID, FAQ & MOBILE BAR
   ========================================================================= */

/* Scroll Reveal Animations */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Bento Grid (Why Choose Us) */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 24px;
}
.bento-grid .feature-card {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}
.bento-grid .feature-card .feature-icon {
  margin: 0 0 24px 0;
}
/* Bento varying spans for a dynamic look */
.bento-grid .feature-card:nth-child(1) { grid-column: span 2; grid-row: span 2; background: var(--gradient-primary); color: white; }
.bento-grid .feature-card:nth-child(1) .feature-icon { background: rgba(255,255,255,0.1); color: var(--accent); }
.bento-grid .feature-card:nth-child(1) .feature-title { font-size: 1.8rem; color: white; }
.bento-grid .feature-card:nth-child(2) { grid-column: span 2; }
.bento-grid .feature-card:nth-child(3) { grid-column: span 1; }
.bento-grid .feature-card:nth-child(4) { grid-column: span 1; }
.bento-grid .feature-card:nth-child(5) { grid-column: span 4; display: flex; flex-direction: row; align-items: center; justify-content: space-between; }
.bento-grid .feature-card:nth-child(5) .feature-icon { margin: 0; }
.bento-grid .feature-card:nth-child(5) .feature-title { font-size: 1.5rem; }

/* FAQ Section */
.faq-section {
  padding: 160px 0;
  background: var(--bg-soft);
}
.faq-grid {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.faq-item {
  background: var(--bg-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: 24px 32px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}
.faq-item:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}
.faq-item summary {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--primary-color);
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.faq-item summary::after {
  content: '+';
  font-size: 1.5rem;
  color: var(--accent);
  transition: var(--transition);
}
.faq-item[open] summary::after {
  content: '-';
  transform: rotate(180deg);
}
.faq-content {
  margin-top: 20px;
  color: var(--secondary);
  font-size: 1.1rem;
  line-height: 1.7;
  padding-top: 16px;
  border-top: 1px solid rgba(226, 232, 240, 0.5);
  animation: fadeUp 0.4s ease forwards;
}

/* Mobile Booking Bar */
.mobile-booking-bar {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  padding: 16px 24px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.1);
  z-index: 9999;
  border-top: 1px solid var(--border-color);
}
.price-hint {
  font-size: 0.95rem;
  color: var(--text-gray);
  font-weight: 500;
}
.price-hint span {
  font-weight: 800;
  color: var(--primary-color);
  font-size: 1.2rem;
}

@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: 1fr 1fr;
  }
  .bento-grid .feature-card:nth-child(1),
  .bento-grid .feature-card:nth-child(2),
  .bento-grid .feature-card:nth-child(3),
  .bento-grid .feature-card:nth-child(4),
  .bento-grid .feature-card:nth-child(5) {
    grid-column: span 1;
    grid-row: span 1;
  }
  .bento-grid .feature-card:nth-child(5) {
    flex-direction: column;
    align-items: flex-start;
  }
  .bento-grid .feature-card:nth-child(5) .feature-icon { margin-bottom: 24px; }
}

@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .mobile-booking-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer {
    padding-bottom: 100px; /* Space for mobile bar */
  }
}
`;

fs.appendFileSync('style.css', cssToAdd);
console.log('CSS updated.');
