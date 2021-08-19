import { ACTIVE_CLASSNAME } from "../constants.js";

export class Accordion {
  private readonly list: NodeListOf<Element>;

  constructor(selector: string) {
    this.list = document.querySelectorAll(selector);

    this.init();
  }

  activeAccordion(index: number) {
    this!.list[index].nextElementSibling!.classList.toggle(ACTIVE_CLASSNAME);
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
