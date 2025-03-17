// Mobile Menu Toggle
function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  menuLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}

// Smooth Scrolling for Navigation Links
document.addEventListener("DOMContentLoaded", function () {
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
        }
      }
    });
  });

  // Active section highlighting
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
});

// Contact Form Handling
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your public key
  (function () {
    emailjs.init("NmWVkDaZ_1QxNIcES"); // Public key
  })();

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Show sending indicator
      const submitButton = contactForm.querySelector("button[type='submit']");
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
          contactForm.reset();

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
    });
  }
});
