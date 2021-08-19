import { ACTIVE_CLASSNAME } from "../constants.js";
export class Modal {
    constructor(openButton, closeButton, modal) {
        this.openButton = document.querySelector(openButton);
        this.closeButton = document.querySelector(closeButton);
        this.modal = document.querySelector(modal);
        this.init();
    }
    open(event) {
        event.preventDefault();
        this.modal.classList.add(ACTIVE_CLASSNAME);
    }
    close() {
        this.modal.classList.remove(ACTIVE_CLASSNAME);
    }
    outsideClick(event) {
        if (event.target === this.modal)
            this.close();
    }
    modalEvents() {
        this.openButton.addEventListener("click", event => this.open(event));
        this.closeButton.addEventListener("click", this.close);
        this.modal.addEventListener("click", event => this.outsideClick(event));
    }
    bindEvents() {
        this.close = this.close.bind(this);
    }
    init() {
        this.bindEvents();
        this.modalEvents();
    }
}
