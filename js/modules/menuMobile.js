import { ACTIVE_CLASSNAME } from "../constants.js";
import outsideClick from "./outsideClick.js";

function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  if (menuButton) {
    function openMenu() {
      menuList.classList.add(ACTIVE_CLASSNAME);
      menuButton.classList.add(ACTIVE_CLASSNAME);

      outsideClick(menuList, "click", () => {
        menuList.classList.remove(ACTIVE_CLASSNAME);
        menuButton.classList.remove(ACTIVE_CLASSNAME);
      });
    }

    menuButton.addEventListener("click", openMenu);
  }
}
export default initMenuMobile;
