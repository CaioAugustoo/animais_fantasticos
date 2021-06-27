export class SmoothScroll {
  constructor(links, options) {
    this.internalLinks = document.querySelectorAll(links);
    this.options = options;

    this.initApp();
  }

  scrollToElement(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const selectedSection = document.querySelector(href);
    selectedSection.scrollIntoView(this.options);
  }

  addLinkEvents() {
    this.internalLinks.forEach(link =>
      link.addEventListener("click", this.scrollToElement)
    );
  }

  bindEvents() {
    this.addLinkEvents = this.addLinkEvents.bind(this);
  }

  initApp() {
    this.bindEvents();
  }
}
