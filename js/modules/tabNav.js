import { ACTIVE_CLASSNAME } from "../constants.js";

export class TabNav {
  constructor(menu, content) {
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);

    this.init();
  }

  activeTab(index) {
    this.content.forEach(el => el.classList.remove(ACTIVE_CLASSNAME));
    this.content[index].classList.add(ACTIVE_CLASSNAME);
  }

  addEvent() {
    this.menu.forEach((el, index) =>
      el.addEventListener("click", () => this.activeTab(index))
    );
  }

  init() {
    this.activeTab(0);
    this.addEvent();
  }
}
