import { links, social} from "./data.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/* Links */
const showMenuLinks = () => {
  return links.map((link) => {
    const {
      url,
      title
    } = link;
    return `<li><a href=${url} class="scroll-link">${title}</a></li>`;
  });
};
const showSocialLinks = () => {
  return social.map((item) => {
    const {
      name,
      title,
      url
    } = item;
    return `<div class=${title}><a href=${url} target="blank"><i class="fab fa-${name}"></i></a></div>`;
  });
};

export { showMenuLinks, showSocialLinks };