function initTabNav() {
  const tabMenu = document.querySelectorAll(".animais-lista li");
  const tabContent = document.querySelectorAll(".animais-descricao section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("active");

    function activeTab(index) {
      tabContent.forEach(el => el.classList.remove("active"));
      tabContent[index].classList.add("active");
    }

    tabMenu.forEach((el, index) =>
      el.addEventListener("click", () => activeTab(index))
    );
  }
}
initTabNav();

function initAccordion() {
  const activeClassName = "active";

  const accordionList = document.querySelectorAll(".faq-lista dt");
  accordionList[0].nextElementSibling.classList.add(activeClassName);

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle(activeClassName);
      this.nextElementSibling.classList.toggle(activeClassName);
    }

    accordionList.forEach(el => {
      el.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function internalLinks() {
  const links = document.querySelectorAll('.menu a[href^="#"]');

  function animateScroll(e) {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    const selectedSection = document.querySelector(href);

    selectedSection.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  links.forEach(link => link.addEventListener("click", animateScroll));
}
internalLinks();
