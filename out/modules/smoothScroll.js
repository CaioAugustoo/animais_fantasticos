export class SmoothScroll {
    constructor(links, options) {
        this.internalLinks = document.querySelectorAll(links);
        this.options = options;
        this.init();
    }
    scrollToElement(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const selectedSection = document.querySelector(href);
        selectedSection.scrollIntoView(this.options);
    }
    addLinkEvents() {
        this.internalLinks.forEach(link => link.addEventListener("click", this.scrollToElement));
    }
    bindEvents() {
        this.addLinkEvents = this.addLinkEvents.bind(this);
    }
    init() {
        this.bindEvents();
    }
}
