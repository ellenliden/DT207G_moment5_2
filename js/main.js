/**
 * Main JavaScript för Street Bites publika webbplats
 * Hanterar navigation, scroll-effekter och allmän funktionalitet
 */

class StreetBitesApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupScrollEffects();
    this.setupContactForm();
    this.setupSmoothScrolling();
    this.setupHeroSlideshow();
  }

  setupHeroSlideshow() {
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;

    setInterval(() => {
      // Ta bort active från nuvarande slide
      slides[currentSlide].classList.remove("active");

      // Gå till nästa slide
      currentSlide = (currentSlide + 1) % slides.length;

      // Lägg till active på nya slide
      slides[currentSlide].classList.add("active");
    }, 3000); // Växlar var 3:e sekund
  }

  setupNavigation() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const navOverlay = document.getElementById("navOverlay");
    const navLinks = document.querySelectorAll(".nav-link");

    // Hamburger menu toggle
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navMenu.classList.toggle("open");
      navOverlay.classList.toggle("open");
      document.body.classList.toggle("nav-open");
    });

    // Close menu when clicking overlay
    navOverlay.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navMenu.classList.remove("open");
      navOverlay.classList.remove("open");
      document.body.classList.remove("nav-open");
    });

    // Close menu when clicking nav links
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navMenu.classList.remove("open");
        navOverlay.classList.remove("open");
        document.body.classList.remove("nav-open");
      });
    });

    // ESC key to close menu
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        hamburger.classList.remove("open");
        navMenu.classList.remove("open");
        navOverlay.classList.remove("open");
        document.body.classList.remove("nav-open");
      }
    });

    // Close menu on window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && navMenu.classList.contains("open")) {
        hamburger.classList.remove("open");
        navMenu.classList.remove("open");
        navOverlay.classList.remove("open");
        document.body.classList.remove("nav-open");
      }
    });

    // Active nav link on scroll
    window.addEventListener("scroll", () => {
      this.updateActiveNavLink();
    });
  }

  updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  setupScrollEffects() {
    // Fade in animation for sections
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(30px)";
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(section);
    });
  }

  setupContactForm() {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleContactForm(e);
      });
    }
  }

  handleContactForm(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Simulera skickande av formulär
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Skickar...";
    submitBtn.disabled = true;

    setTimeout(() => {
      alert("Tack för ditt meddelande! Vi återkommer snart.");
      e.target.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  }

  setupSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));

        if (target) {
          const offsetTop = target.offsetTop - 70; // Account for fixed navbar

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }
}

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new StreetBitesApp();
});
