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
  const accordionList = document.querySelectorAll(".faq-lista dt");
  accordionList[0].nextElementSibling.classList.add("active");

  function activeAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }

  accordionList.forEach(el => {
    el.addEventListener("click", activeAccordion);
  });
}
initAccordion();
