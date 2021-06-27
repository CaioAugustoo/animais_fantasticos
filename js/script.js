import { SMOOTH_SCROLL_OPTIONS } from "./constants.js";

import { SmoothScroll } from "./modules/smoothScroll.js";
import { Accordion } from "./modules/accordion.js";
import { TabNav } from "./modules/tabNav.js";

import initAnimateScroll from "./modules/animateScroll.js";
import initDropdownMenu from "./modules/dropdownMenu.js";

import initMenuMobile from "./modules/menuMobile.js";
import initModal from "./modules/modal.js";

import initTooltip from "./modules/tooltip.js";

new SmoothScroll('.menu a[href^="#"]', SMOOTH_SCROLL_OPTIONS);
new Accordion(".faq-lista dt");
new TabNav(".animais-lista li", ".animais-descricao section");

initAnimateScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
