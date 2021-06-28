import { ACTIVE_CLASSNAME } from "../constants.js";
import { useDebounce } from "../utils/useDebounce.js";

export class AnimateScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.2;

    this.init();
  }

  getDistance() {
    this.distance = [...this.sections].map(section => {
      const offset = section.offsetTop;

      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow),
      };
    });
  }

  checkDistance() {
    this.distance.forEach(item => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(ACTIVE_CLASSNAME);
      } else {
        item.element.classList.remove(ACTIVE_CLASSNAME);
      }
    });
  }

  animateEvents() {
    window.addEventListener("scroll", this.checkDistance);
  }

  bindEvents() {
    this.checkDistance = useDebounce(this.checkDistance.bind(this));
  }

  init() {
    this.bindEvents();
    this.getDistance();
    this.animateEvents();
    this.checkDistance();
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
