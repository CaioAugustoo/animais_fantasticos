function internalLinks() {
  const links = document.querySelectorAll('.menu a[href^="#"]');

  function scrollToElement(e) {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    const selectedSection = document.querySelector(href);

    selectedSection.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  links.forEach(link => link.addEventListener("click", scrollToElement));
}
internalLinks();

export default internalLinks;
