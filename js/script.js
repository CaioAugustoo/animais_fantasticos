import { ACTIVE_CLASSNAME } from "./constants.js";

function initTabNav() {
  const tabMenu = document.querySelectorAll(".animais-lista li");
  const tabContent = document.querySelectorAll(".animais-descricao section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(ACTIVE_CLASSNAME);

    function activeTab(index) {
      tabContent.forEach(el => el.classList.remove(ACTIVE_CLASSNAME));
      tabContent[index].classList.add(ACTIVE_CLASSNAME);
    }

    tabMenu.forEach((el, index) =>
      el.addEventListener("click", () => activeTab(index))
    );
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".faq-lista dt");
  accordionList[0].nextElementSibling.classList.add(ACTIVE_CLASSNAME);

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle(ACTIVE_CLASSNAME);
      this.nextElementSibling.classList.toggle(ACTIVE_CLASSNAME);
    }

    accordionList.forEach(el => {
      el.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function internalLinks() {
  const links = document.querySelectorAll('.menu a[href^="#"]');

  function scrollToElement(e) {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    const selectedSection = document.querySelector(href);

    selectedSection.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  links.forEach(link => link.addEventListener("click", scrollToElement));
}
internalLinks();

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
