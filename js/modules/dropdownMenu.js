import { ACTIVE_CLASSNAME } from "../constants.js";

function initDropdownMenu() {}
export default initDropdownMenu;

const subMenu = document.querySelectorAll("[data-dropdown]");

function handleClick(e) {
  e.preventDefault();
  this.classList.toggle(ACTIVE_CLASSNAME);
}

subMenu.forEach(el => {
  el.addEventListener("touchstart", handleClick);
  el.addEventListener("click", handleClick);
});
