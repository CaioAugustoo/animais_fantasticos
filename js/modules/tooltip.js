export class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.init();
  }

  onMouseOver({ currentTarget }) {
    this.createToolTipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  onMouseMove({ pageY, pageX }) {
    if (pageX + 240 > window.innerWidth) {
      return (this.tooltipBox.style.left = `${pageX - 150}px`);
    }

    this.tooltipBox.style.top = `${pageY + 20}px`;
    this.tooltipBox.style.left = `${pageX + 20}px`;
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  bindEvents() {
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  createToolTipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);

    this.tooltipBox = tooltipBox;
  }

  addTooltipsEvents() {
    this.tooltips.forEach(el =>
      el.addEventListener("mouseover", this.onMouseOver)
    );
  }

  init() {
    this.bindEvents();
    this.addTooltipsEvents();
  }
}
