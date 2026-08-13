/**
 * Purelane Theme JavaScript
 * Handles hero slider and other interactive elements
 */

class PurelaneHero {
  constructor(section) {
    this.heroSection = section;
    if (!this.heroSection) return;

    this.hstage = this.heroSection.querySelector('.hstage');
    this.hslides = this.heroSection.querySelectorAll('.hslide');
    this.hdots = this.heroSection.querySelectorAll('.hdots button');
    this.currentSlide = 0;
    this.autoPlayInterval = null;

    this.init();
  }

  init() {
    // Initialize click handlers for dots
    this.hdots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.goToSlide(index);
      });
    });

    // Start autoplay
    this.startAutoPlay();

    // Pause on hover
    this.hstage.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.hstage.addEventListener('mouseleave', () => this.startAutoPlay());

    // Initialize reveal animations
    this.initRevealAnimations();
  }

  goToSlide(index) {
    if (index === this.currentSlide) return;

    // Remove active class from current slide
    this.hslides[this.currentSlide].classList.remove('on');
    this.hdots[this.currentSlide].classList.remove('on');

    // Set new slide
    this.currentSlide = index;

    // Add active class to new slide
    this.hslides[this.currentSlide].classList.add('on');
    this.hdots[this.currentSlide].classList.add('on');
  }

  nextSlide() {
    const next = (this.currentSlide + 1) % this.hslides.length;
    this.goToSlide(next);
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  initRevealAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, observerOptions);

    const revealElements = this.heroSection.querySelectorAll('.rv');
    revealElements.forEach(el => observer.observe(el));
  }
}

// Initialize all hero sections
function initPurelaneHeroes() {
  const heroSections = document.querySelectorAll('.purelane-hero');
  heroSections.forEach(section => new PurelaneHero(section));
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPurelaneHeroes);
} else {
  initPurelaneHeroes();
}