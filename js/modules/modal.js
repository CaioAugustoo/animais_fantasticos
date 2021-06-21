import { ACTIVE_CLASSNAME } from "../constants.js";

function initModal() {
  const openModalButton = document.querySelector('[data-modal="open"]');
  const closeModalButton = document.querySelector('[data-modal="close"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  if (openModalButton && closeModalButton && modalContainer) {
    function openModal(e) {
      e.preventDefault();
      modalContainer.classList.add(ACTIVE_CLASSNAME);
    }

    function closeModal() {
      modalContainer.classList.remove(ACTIVE_CLASSNAME);
    }

    function outsideClick(e) {
      if (e.target === this) closeModal();
    }

    openModalButton.addEventListener("click", openModal);
    closeModalButton.addEventListener("click", closeModal);
    modalContainer.addEventListener("click", outsideClick);
  }
}
initModal();

export default initModal;
