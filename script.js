const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const buyButtons = document.querySelectorAll(".buy-btn");

/* Menú móvil */
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  document.addEventListener("click", (e) => {
    const clickedInsideMenu = navLinks.contains(e.target);
    const clickedToggle = menuToggle.contains(e.target);

    if (!clickedInsideMenu && !clickedToggle) {
      navLinks.classList.remove("open");
    }
  });
}

/* Formulario de contacto */
if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    formMessage.textContent =
      "Mensaje enviado correctamente. Te responderemos lo antes posible.";
    contactForm.reset();
  });
}

/* Botón de compra */
if (buyButtons.length > 0) {
  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Próximamente disponible. Estamos preparando el proceso de compra.");
    });
  });
}
