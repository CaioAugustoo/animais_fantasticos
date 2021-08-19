interface IOptions {
  block: string;
  behavior: string;
}

export class SmoothScroll {
  private readonly internalLinks: NodeListOf<HTMLLinkElement>;
  private readonly options: IOptions;

  constructor(links: string, options: IOptions) {
    this.internalLinks = document.querySelectorAll(links);
    this.options = options;

    this.init();
  }

  scrollToElement(event: Event) {
    event.preventDefault();
    const href = event!.currentTarget!.getAttribute("href");
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

  init() {
    this.bindEvents();
  }
}
