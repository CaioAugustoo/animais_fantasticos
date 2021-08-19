import { ACTIVE_CLASSNAME } from "../constants.js";
import outsideClick from "./outsideClick.js";

export class DropdownMenu {
  private readonly menu: HTMLLIElement;

  constructor(menu: string) {
    this.menu = document.querySelector(menu) as HTMLLIElement;

    this.init();
  }

  handleClick(event: Event) {
    event.preventDefault();
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
