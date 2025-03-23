  // Theme toggle functionality
  const toggle = document.getElementById("toggle");
  const htmlElement = document.documentElement;

  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlElement.setAttribute("data-theme", savedTheme);

  // Set initial toggle state based on saved theme
  if (savedTheme === "light") {
    toggle.checked = true;
  }

  // Toggle between themes
  toggle.addEventListener("change", () => {
    const newTheme = toggle.checked ? "light" : "dark";
    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Scroll to section function
  function scrollToSection(sectionId) {
    document
      .getElementById(sectionId)
      .scrollIntoView({ behavior: "smooth" });
  }

  // Theme Toggle Functionality
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle");
    const html = document.documentElement;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      html.setAttribute("data-theme", savedTheme);
      toggle.checked = savedTheme === "light";
    }

    // Toggle theme when the switch is clicked
    toggle.addEventListener("change", function () {
      if (this.checked) {
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      } else {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    });
  });

  // Smooth scrolling for anchor links
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  }

  // Attach event listeners for the Learn More button
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        if (targetId) {
          scrollToSection(targetId);
        }
      });
    });
  });

  // Add animation for benefit cards
  const benefitCards = document.querySelectorAll(".benefit-card");
  window.addEventListener("scroll", () => {
    benefitCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (cardPosition < screenPosition) {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }
    });
  });

  // Add hover effect for testimonial cards
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      testimonialCards.forEach((c) => {
        if (c !== card) {
          c.style.opacity = "0.7";
          c.style.transform = "scale(0.95)";
        }
      });
    });

    card.addEventListener("mouseleave", () => {
      testimonialCards.forEach((c) => {
        c.style.opacity = "1";
        c.style.transform = "scale(1)";
      });
    });
  });

  
    // Theme Toggle Functionality
    document.addEventListener("DOMContentLoaded", function () {
      const toggle = document.getElementById("toggle");
      const html = document.documentElement;
  
      // Check for saved theme preference
      const savedTheme = localStorage.getItem("theme") || "dark";
      html.setAttribute("data-theme", savedTheme);
      toggle.checked = savedTheme === "light";
  
      // Toggle theme when the switch is clicked
      toggle.addEventListener("change", function () {
        const newTheme = this.checked ? "light" : "dark";
        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
      });
  
      // Scroll Animation Logic
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });
  
      // Observe all animate-on-scroll elements
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });
  
      // Stagger Animation Logic
      document.querySelectorAll('.stagger-animation').forEach(container => {
        const children = container.children;
        Array.from(children).forEach((child, index) => {
          child.style.setProperty('--delay', `${index * 0.1}s`);
        });
      });
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    // Testimonial hover effect
    const testimonialCards1 = document.querySelectorAll('.testimonial-card');
    testimonialCards1.forEach(card => {
      card.addEventListener('mouseenter', () => {
        testimonialCards1.forEach(c => {
          if (c !== card) c.style.transform = 'scale(0.95)';
        });
      });
      
      card.addEventListener('mouseleave', () => {
        testimonialCards1.forEach(c => c.style.transform = 'scale(1)');
      });
    });

  