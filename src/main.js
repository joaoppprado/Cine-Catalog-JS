const menuButton = document.querySelector(".navigation__toggle");
const menu = document.querySelector(".navigation__menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    menu.classList.toggle("hidden", isOpen);
  });
}