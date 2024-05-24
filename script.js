const openModalButtons = document.querySelectorAll("[data-open-modal]");
const closeButtons = document.querySelectorAll("[data-close-modal]");

openModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-open-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  });
});

closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest("dialog");
    if (modal) {
      modal.close();
    }
  });
});