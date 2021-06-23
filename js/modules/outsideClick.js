import { DATA_OUTSIDE } from "../constants.js";

function outsideClick(element, e, callback) {
  const html = document.documentElement;

  if (element.hasAttribute(DATA_OUTSIDE)) return;
  html.addEventListener(e, handleOutsideClick);
  element.setAttribute(DATA_OUTSIDE, "");

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(DATA_OUTSIDE);
      html.removeEventListener(e, handleOutsideClick);
      callback();
    }
  }
}
export default outsideClick;
