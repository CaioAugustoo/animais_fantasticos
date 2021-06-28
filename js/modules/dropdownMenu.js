import { ACTIVE_CLASSNAME } from "../constants.js";
import outsideClick from "./outsideClick.js";

export class DropdownMenu {
  constructor(menu) {
    this.menu = document.querySelector(menu);

    this.init();
  }

  handleClick(e) {
    e.preventDefault();
    this.menu.classList.add(ACTIVE_CLASSNAME);

    outsideClick(this.menu, "click", () =>
      this.menu.classList.remove(ACTIVE_CLASSNAME)
    );
  }

  addMenuEvents() {
    this.menu.addEventListener("touchstart", this.handleClick);
    this.menu.addEventListener("click", this.handleClick);
  }

  bindEvents() {
    this.handleClick = this.handleClick.bind(this);
  }

  init() {
    this.bindEvents();
    this.addMenuEvents();
  }
}
