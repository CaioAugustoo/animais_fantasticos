import { ACTIVE_CLASSNAME } from "../constants.js";

function initDropdownMenu() {}
export default initDropdownMenu;

const subMenu = document.querySelectorAll("[data-dropdown]");

function handleClick(e) {
  e.preventDefault();
  this.classList.toggle(ACTIVE_CLASSNAME);
}

subMenu.forEach(el =>
  ["touchstart", "click"].forEach(event =>
    el.addEventListener(event, handleClick)
  )
);
