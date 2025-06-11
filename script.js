// Mobile Menu Toggle
function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  menuLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}

// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;
  const themeIcon = themeToggle.querySelector("i");

  // Always start with dark theme, but check if user has a saved preference
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    htmlElement.setAttribute("data-theme", "light");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    // Default to dark mode
    htmlElement.setAttribute("data-theme", "dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  }

  // Toggle theme on click
  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Update icon
    if (newTheme === "dark") {
      themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
      themeIcon.classList.replace("fa-sun", "fa-moon");
    }
  });
}

// Modal Functionality
function initModals() {
  // Get all modal trigger buttons
  const modalButtons = document.querySelectorAll(".open-modal-btn");

  // Add click event to each button
  modalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetModal = document.getElementById(
        this.getAttribute("data-target")
      );
      openModal(targetModal);
    });
  });

  // Get all close buttons
  const closeButtons = document.querySelectorAll(
    ".close-modal, .modal-close-btn"
  );

  // Add click event to each close button
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      closeModal(modal);
    });
  });

  // Close modal when clicking outside of modal content
  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
      closeModal(event.target);
    }
  });

  // Close modal with escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      const openModal = document.querySelector(".modal.show");
      if (openModal) {
        closeModal(openModal);
      }
    }
  });
}

// Open modal function
function openModal(modal) {
  if (modal) {
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";

    // Show the modal
    modal.classList.add("show");

    // Animate modal content after a brief delay
    setTimeout(() => {
      const modalContent = modal.querySelector(".modal-content");
      if (modalContent) {
        modalContent.style.opacity = "1";
        modalContent.style.transform = "translateY(0)";
      }

      // Apply staggered animation to modal sections
      const modalSections = modal.querySelectorAll(".modal-section");
      modalSections.forEach((section, index) => {
        setTimeout(() => {
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }, 100 + index * 100);
      });
    }, 50);

    // Focus trap for accessibility
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length) {
      setTimeout(() => {
        focusableElements[0].focus();
      }, 100);
    }
  }
}

// Close modal function
function closeModal(modal) {
  if (modal) {
    // Animate out
    const modalContent = modal.querySelector(".modal-content");
    if (modalContent) {
      modalContent.style.opacity = "0";
      modalContent.style.transform = "translateY(30px)";
    }

    // Hide modal after animation completes
    setTimeout(() => {
      // Restore body scrolling
      document.body.style.overflow = "";
      modal.classList.remove("show");

      // Reset modal section animations
      const modalSections = modal.querySelectorAll(".modal-section");
      modalSections.forEach((section) => {
        section.style.opacity = "";
        section.style.transform = "";
      });
    }, 300);
  }
}

// Scroll Animation for Elements
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeInObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  fadeElements.forEach((element) => {
    fadeInObserver.observe(element);
  });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only if the link points to an anchor on the same page
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Account for fixed header
          const headerHeight = document.querySelector("header").offsetHeight;
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          // If mobile menu is open, close it
          const menuLinks = document.querySelector(".menu-links");
          if (menuLinks && menuLinks.classList.contains("open")) {
            toggleMenu();
          }
        }
      }
    });
  });
}

// Active section highlighting
function initActiveNavHighlighting() {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href").substring(1) === current) {
        item.classList.add("active");
      }
    });
  });
}

// Initialize the progress bar for the 12 in 12 section
function initializeProgressBar() {
  const progressBar = document.getElementById("twelve-progress-bar");
  if (progressBar) {
    const completed = parseInt(progressBar.getAttribute("data-complete") || 0);
    const total = parseInt(progressBar.getAttribute("data-total") || 12);
    const percentage = (completed / total) * 100;

    // Set initial width to 0
    progressBar.style.width = "0%";

    // Progress indicators have been removed
    const progressContainer = document.querySelector(".progress-bar-container");

    // Use IntersectionObserver to trigger animation when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate progress bar with slight delay
            setTimeout(() => {
              progressBar.style.width = `${percentage}%`;
            }, 300);

            // Progress indicators have been removed

            // Add pulsing effect to the progress bar
            progressBar.classList.add("animated");

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(progressBar.parentElement);

    // Update the progress text if needed
    const progressText = document.querySelector(".progress-text");
    if (progressText) {
      progressText.textContent = `✅ ${completed} / ${total} Complete`;
    }
  }
}

// Contact Form Handling
function handleContactFormSubmit(e) {
  e.preventDefault();

  // Show sending indicator
  const submitButton = e.target.querySelector("button[type='submit']");
  const originalButtonText = submitButton.textContent;
  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  // Prepare template parameters
  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    from_email: document.getElementById("email").value,
    reply_to: document.getElementById("email").value,
    message: document.getElementById("message").value,
    to_name: "Khamari",
    to_email: "khamari11@gmail.com",
  };

  // Send email using EmailJS
  emailjs.send("service_8hm2hy5", "template_1dxg5k5", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      submitButton.textContent = "Message Sent!";
      e.target.reset();

      // Reset button after 3 seconds
      setTimeout(() => {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }, 3000);
    },
    function (error) {
      console.log("FAILED...", error);
      submitButton.textContent = "Failed to Send";

      // Reset button after 3 seconds
      setTimeout(() => {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }, 3000);
    }
  );
}

// Initialize all functionality on DOM content loaded
document.addEventListener("DOMContentLoaded", function () {
  // Theme toggling
  initThemeToggle();

  // Modals
  initModals();

  // Animations
  initScrollAnimations();

  // Navigation
  initSmoothScrolling();
  initActiveNavHighlighting();

  // Progress Bar
  initializeProgressBar();

  // Contact form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactFormSubmit);
  }

  // Initialize EmailJS
  if (typeof emailjs !== "undefined") {
    emailjs.init("NmWVkDaZ_1QxNIcES");
  }
});
