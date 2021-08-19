import { ACTIVE_CLASSNAME } from "../constants.js";
import outsideClick from "./outsideClick.js";
export class MenuMobile {
    constructor(menuButton, menuList) {
        this.menuButton = document.querySelector(menuButton);
        this.menuList = document.querySelector(menuList);
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
