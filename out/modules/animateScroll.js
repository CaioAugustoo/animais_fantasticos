import { ACTIVE_CLASSNAME } from "../constants.js";
import { useDebounce } from "../utils/useDebounce.js";
export class AnimateScroll {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.halfWindow = window.innerHeight;
        this.init();
    }
    getDistance() {
        const distance = [...this.sections];
        distance.map(section => {
            const offset = section.offsetTop;
            return {
                element: section,
                offset: Math.floor(offset - this.halfWindow),
            };
        });
    }
    checkDistance() {
        var _a;
        (_a = this === null || this === void 0 ? void 0 : this.distance) === null || _a === void 0 ? void 0 : _a.forEach(item => {
            if (window.pageYOffset > item.offset) {
                item.element.classList.add(ACTIVE_CLASSNAME);
            }
            else {
                item.element.classList.add(ACTIVE_CLASSNAME);
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
