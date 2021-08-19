import { ACTIVE_CLASSNAME } from "../constants.js";
import outsideClick from "./outsideClick.js";

export class MenuMobile {
  private readonly menuButton: HTMLButtonElement;
  private readonly menuList: HTMLElement;

  constructor(menuButton: string, menuList: string) {
    this.menuButton = document.querySelector(menuButton) as HTMLButtonElement;
    this.menuList = document.querySelector(menuList) as HTMLElement;

    this.init();
  }

  open() {
    this.menuList.classList.add(ACTIVE_CLASSNAME);
    this.menuButton.classList.add(ACTIVE_CLASSNAME);

    outsideClick(this.menuList, "click", () => {
      this.menuList.classList.remove(ACTIVE_CLASSNAME);
      this.menuButton.classList.remove(ACTIVE_CLASSNAME);
    });
  }

  addMenuEvents() {
    this.menuButton.addEventListener("click", this.open);
  }

  bindEvents() {
    this.open = this.open.bind(this);
  }

  init() {
    this.bindEvents();
    this.addMenuEvents();
  }
}
