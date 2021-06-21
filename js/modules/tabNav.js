import { ACTIVE_CLASSNAME } from "../constants.js";

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

export default initTabNav;
