import { ACTIVE_CLASSNAME } from "../constants.js";

function initAccordion() {
  const accordionList = document.querySelectorAll(".faq-lista dt");
  accordionList[0].nextElementSibling.classList.add(ACTIVE_CLASSNAME);

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle(ACTIVE_CLASSNAME);
      this.nextElementSibling.classList.toggle(ACTIVE_CLASSNAME);
    }

    accordionList.forEach(el => {
      el.addEventListener("click", activeAccordion);
    });
  }
}

export default initAccordion;
