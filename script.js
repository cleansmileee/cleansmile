const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const buyButtons = document.querySelectorAll(".buy-btn");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    formMessage.textContent =
      "Mensaje enviado correctamente. Te responderemos lo antes posible.";
    contactForm.reset();
  });
}

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product || "producto";
    alert(`Has seleccionado: ${product}. Aquí puedes enlazar el proceso de compra.`);
  });
});
