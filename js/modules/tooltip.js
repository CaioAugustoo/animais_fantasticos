function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  if (tooltips) {
    function onMouseOver(e) {
      const tooltipBox = createToolTipBox(this);
      tooltipBox.style.top = `${e.pageY}px`;
      tooltipBox.style.left = `${e.pageX}px`;

      onMouseMove.tooltipBox = tooltipBox;
      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      this.addEventListener("mouseleave", onMouseLeave);
      this.addEventListener("mousemove", onMouseMove);
    }

    const onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener("mouseleave", onMouseLeave);
        this.element.removeEventListener("mousemove", onMouseMove);
      },
    };

    const onMouseMove = {
      handleEvent(e) {
        this.tooltipBox.style.top = `${e.pageY + 20}px`;
        this.tooltipBox.style.left = `${e.pageX + 20}px`;
      },
    };

    function createToolTipBox(element) {
      const tooltipBox = document.createElement("div");
      const text = element.getAttribute("aria-label");
      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);

      return tooltipBox;
    }
    tooltips.forEach(el => el.addEventListener("mouseover", onMouseOver));
  }
}

export default initTooltip;
