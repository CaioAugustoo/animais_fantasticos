import { ACTIVE_CLASSNAME } from "../constants.js";

export class Modal {
  private readonly openButton: HTMLButtonElement;
  private readonly closeButton: HTMLButtonElement;
  private readonly modal: HTMLDivElement;

  constructor(openButton: string, closeButton: string, modal: string) {
    this.openButton = document.querySelector(openButton) as HTMLButtonElement;
    this.closeButton = document.querySelector(closeButton) as HTMLButtonElement;
    this.modal = document.querySelector(modal) as HTMLDivElement;

    this.init();
  }

  open(event: MouseEvent) {
    event.preventDefault();
    this.modal.classList.add(ACTIVE_CLASSNAME);
  }

  close() {
    this.modal.classList.remove(ACTIVE_CLASSNAME);
  }

  outsideClick(event: MouseEvent) {
    if (event.target === this.modal) this.close();
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
