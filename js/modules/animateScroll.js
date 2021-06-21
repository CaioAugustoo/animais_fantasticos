import { ACTIVE_CLASSNAME } from "../constants.js";

function initAnimateScroll() {
  const sections = document.querySelectorAll(".section-scroll");
  const halfWindow = window.innerHeight * 0.2;

  if (sections.length) {
    function animeScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - halfWindow;
        const isSectionVisible = sectionTop - halfWindow < 0;

        if (isSectionVisible) section.classList.add(ACTIVE_CLASSNAME);
        else section.classList.remove(ACTIVE_CLASSNAME);
      });
    }
    animeScroll();

    window.addEventListener("scroll", animeScroll);
  }
}
initAnimateScroll();

export default initAnimateScroll;
