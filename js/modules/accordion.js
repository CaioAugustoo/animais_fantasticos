import { ACTIVE_CLASSNAME } from "../constants.js";

export class Accordion {
  constructor(selector) {
    this.list = document.querySelectorAll(selector);

    this.init();
  }

  activeAccordion(index) {
    this.list[index].nextElementSibling.classList.toggle(ACTIVE_CLASSNAME);
  }

  addLinkEvents() {
    this.list.forEach((el, index) => {
      el.addEventListener("click", () => this.activeAccordion(index));
    });
  }

  init() {
    this.addLinkEvents();
    this.activeAccordion(0);
  }
}
