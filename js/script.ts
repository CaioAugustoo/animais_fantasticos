import { SMOOTH_SCROLL_OPTIONS } from "./constants.js";

import { SmoothScroll } from "./modules/smoothScroll.js";
import { Accordion } from "./modules/accordion.js";
import { TabNav } from "./modules/tabNav.js";
import { Modal } from "./modules/modal.js";
import { Tooltip } from "./modules/tooltip.js";
import { DropdownMenu } from "./modules/dropdownMenu.js";
import { MenuMobile } from "./modules/menuMobile.js";

new SmoothScroll('.menu a[href^="#"]', SMOOTH_SCROLL_OPTIONS);
new Accordion(".faq-lista dt");
new TabNav(".animais-lista li", ".animais-descricao section");
new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
new Tooltip("[data-tooltip]");
new DropdownMenu("[data-dropdown]");
new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
