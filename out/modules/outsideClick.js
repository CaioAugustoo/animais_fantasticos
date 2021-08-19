import { DATA_OUTSIDE } from "../constants.js";
function outsideClick(element, e, callback) {
    const html = document.documentElement;
    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(DATA_OUTSIDE);
            html.removeEventListener(e, handleOutsideClick);
            callback();
        }
    }
    if (element.hasAttribute(DATA_OUTSIDE))
        return;
    setTimeout(() => {
        html.addEventListener(e, handleOutsideClick);
    });
    element.setAttribute(DATA_OUTSIDE, "");
}
export default outsideClick;
