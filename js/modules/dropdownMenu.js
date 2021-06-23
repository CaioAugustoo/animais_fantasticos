import { ACTIVE_CLASSNAME } from "../constants.js";
import outsideClick from "./outsideClick.js";

function initDropdownMenu() {
  const subMenu = document.querySelectorAll("[data-dropdown]");

  function handleClick(e) {
    e.preventDefault();
    this.classList.add(ACTIVE_CLASSNAME);
    outsideClick(this, "click", () => this.classList.remove(ACTIVE_CLASSNAME));
  }

  subMenu.forEach(el => {
    el.addEventListener("touchstart", handleClick);
    el.addEventListener("click", handleClick);
  });
}
export default initDropdownMenu;
