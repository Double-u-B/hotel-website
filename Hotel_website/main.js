import { offers, welcomeImgs, months, daysOfWeek } from "./js/data.js";
import { showMenuLinks, showSocialLinks } from "./js/Links.js";
import { shadow, greeting } from "./js/GreetingShadow.js";
import { checkWindowWidth } from "./js/Slider.js";
import { isValidEmail, error } from "./js/Validation.js";
import { showRooms } from "./js/ShowRooms.js";
import { checkConditionsLoop } from "./js/ConditionsLoop.js";

import {
  renderCalendar,
  date,
  heading,
  year,
  monthDays,
  weekdays,
  calendarCon,
  calendarCloseBtn,
  calendar,
  roomsCon,
  minusBtn,
  plusBtn,
  personsNbrCon,
  reservCon,
} from "./js/Calendar.js";

document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
document.body.scrollTop = 0; // For Safari

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/* Hotel Vars */

const nav = $("nav");

const logo = $(".logo img");
const socialNavIcons = $(".social");
const bookBtn = $(".book-online");
const showMenuBtn = $(".menu .fa-bars");
const hideMenuBtn = $(".menu .fa-times");
const sidebar = $(".sidebar");
const linksContainer = $(".header-links");
const menuLinksContainer = $(".menu-links");

const offersCon = $(".offers-container");
const nextOfferBtn = $(".next-offer .fa-long-arrow-alt-right");
const prevOfferBtn = $(".prev-offer .fa-long-arrow-alt-left");

const welcomeInfo = $(".welcome-info");
const welcomeImg = $(".welcome-img-container");
const restaurantInfo = $(".restaurant-info");
const restaurantImg = $(".restaurant-img-container");

const newsletterContainer = $(".newsletter");
const newsletterInput = $(".newsletter input");
const newsletterBtn = $(".newsletter .fa-envelope");
const socialFootIcons = $(".social-icons");

const modal = $(".modal-overlay");

/* Calendar Vars */

const reservForm = $(".reservation form");
const personNmbCon = $(".reservation .persons");
const gratitude = $(".reservation h2");

let nbrOfPer = 2;
let bookedDays = 0;

const inputArr = $("input[id=od]");
const inputArrLab = $("label[for=od]");
const inputDep = $("input[id=do]");
const inputDepLab = $("label[for=do]");

inputArr.value = "";
inputDep.value = "";
let firstSelect = "";
let lastSelect = "";

let counter = 0;

/* Greeting calendar */

calendarCon.innerHTML = `
 <div class="date-from">
                    <div class="date-day">
                        <p>${new Date().getDate()}</p>
                    </div>
                    <div class="date-month">
                        <p>${new Date().toLocaleString("default", {
                          month: "long",
                        })}
                        </p>
                        <p>${new Date().getFullYear()}</p>
                    </div>
                    <div class="date-icon"><img src="icons/calendar.png" alt=""></div>
                </div>
                <div class="date-to">
                    <div class="date-day">
                        <p>${new Date().getDate() + 2}</p>
                    </div>
                    <div class="date-month">
                        <p>${new Date().toLocaleString("default", {
                          month: "long",
                        })}</p>
                        <p>${new Date().getFullYear()}</p>
                    </div>
                    <div class="date-icon"><img src="icons/calendar.png" alt=""></div>
                </div>
                <button>book online</button>`;

linksContainer.innerHTML = showMenuLinks().join("");
menuLinksContainer.innerHTML = showMenuLinks().join("");
socialNavIcons.innerHTML = showSocialLinks().join("");
socialFootIcons.innerHTML = showSocialLinks().join("");

offersCon.innerHTML = offers
  .map((offer) => {
    const { img, title, board, length, desc } = offer;
    return ` <div class="offers activeSlide">
                <div class="offer-img">
                    <img src=${img} alt=${title}>
                </div>
                <div class="offer-title">
                    <h1>${title}</h1>
                    <div class="offer-details">
                        <p>${board}</p>
                        <p>${length}</p>
                    </div>
                    <p>${desc}</p>
                    <button class="offer-details-btn">Check details</button>
                </div>
            </div>`;
  })
  .join("");

/* Slider btns */
const offer = $$(".offers");

nextOfferBtn.addEventListener("click", () => {
  counter++;
  prevOfferBtn.classList.remove("hide-element");
  prevOfferBtn.classList.add("showBtn");
  // if (counter > offer.length - 2 && window.innerWidth >= 600) counter = 0;
  if (counter === offer.length - 2 && window.innerWidth >= 600)
    nextOfferBtn.classList.add("hide-element");
  if (counter === offer.length && window.innerWidth < 600) counter = 0;

  offer.forEach(
    (offer) =>
      (offer.style.transform = `translateX(-${counter * checkWindowWidth()}%)`)
  );
});

prevOfferBtn.addEventListener("click", () => {
  counter--;
  nextOfferBtn.classList.remove("hide-element");
  // if (counter < 0 && window.innerWidth >= 600) counter = offer.length - 2;
  // if (counter < 0 && window.innerWidth >= 600) return;
  if (counter === 0 && window.innerWidth >= 600)
    prevOfferBtn.classList.add("hide-element");
  if (counter < 0 && window.innerWidth < 600) counter = offer.length - 1;

  offer.forEach((offer) => {
    // if (counter < 0 && window.innerWidth >= 600) return;
    // if (counter < 0 && window.innerWidth < 600) counter = offer.length - 1;

    offer.style.transform = `translateX(-${counter * checkWindowWidth()}%)`;
  });
});

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > /* 360 */ /* 15 */ 0) {
    nav.classList.add("fixed-nav");
    socialNavIcons.classList.add("hide-element");
    bookBtn.classList.remove("hide-element");
  } else {
    nav.classList.remove("fixed-nav");
    socialNavIcons.classList.remove("hide-element");
    bookBtn.classList.add("hide-element");
  }

  sidebar.classList.contains("show-sidebar") && nav.classList.add("fixed-nav");

  if (scrollHeight > 850) {
    welcomeInfo.classList.add("show-info");
    welcomeImg.classList.add("show-info");
  }

  if (scrollHeight > 2110) {
    restaurantInfo.classList.add("show-info");
    restaurantImg.classList.add("show-info");
  }
});

/* Welcome images slider */
// connected with CSS keyframes
welcomeImg.innerHTML = `
<img src="img/welcome/${welcomeImgs[0]}.jpg" alt="${welcomeImgs[0]}">
<img src="img/welcome/${welcomeImgs[1]}.jpg" alt="${welcomeImgs[1]}">
<img src="img/welcome/${welcomeImgs[2]}.jpg" alt="${welcomeImgs[2]}">
<img src="img/welcome/${welcomeImgs[3]}.jpg" alt="${welcomeImgs[3]}">
<img src="img/welcome/${welcomeImgs[4]}.jpg" alt="${welcomeImgs[4]}">`;

/* scrollTo */
const scrollLinks = $$(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const headerHeight = nav.getBoundingClientRect().height;

    let position = element.offsetTop - headerHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

logo.addEventListener("click", () =>
  window.scrollTo({
    left: 0,
    top: 0,
  })
);

greeting.addEventListener(
  "mousemove",
  (e) => window.innerWidth > 900 && shadow(e)
);

newsletterBtn.addEventListener("click", () => {
  if (!isValidEmail(newsletterInput.value)) {
    error(newsletterInput);
  } else {
    newsletterInput.value = "";
    newsletterContainer.innerHTML = `<div class="thank-you"><h3>Thank you for signing up for our newsletter!</h3>
        <p>Hope to see you soon in our hotel!</p></div>`;
  }
});

window.addEventListener("resize", () => {
  if ($(".room") && window.innerWidth > 600) {
    roomsCon.style.overflowY = "hidden";
  } else {
    roomsCon.removeAttribute("style");
  }

  $(".width").innerText = `${window.innerWidth} PX`;
  if (window.innerWidth <= 900) {
    $(".menu").classList.remove("hide-element");
  } else {
    $(".menu").classList.add("hide-element");
    hideMenuBtn.classList.add("hide-element");
    showMenuBtn.classList.remove("hide-element");
    sidebar.classList.remove("show-sidebar");
  }
});

/* Menu Btns */
if (window.innerWidth <= 900) {
  $(".menu").classList.remove("hide-element");
} else {
  $(".menu").classList.add("hide-element");
  hideMenuBtn.classList.add("hide-element");
  showMenuBtn.classList.remove("hide-element");
  sidebar.classList.remove("show-sidebar");
}

showMenuBtn.addEventListener("click", () => {
  hideMenuBtn.classList.remove("hide-element");
  showMenuBtn.classList.add("hide-element");
  sidebar.classList.add("show-sidebar");
  nav.classList.add("fixed-nav");
  document.body.classList.add("no-scrolling");

  if (sidebar.classList.contains("show-sidebar")) nav.style.animation = "none";
});

hideMenuBtn.addEventListener("click", () => {
  hideMenuBtn.classList.add("hide-element");
  showMenuBtn.classList.remove("hide-element");
  sidebar.classList.remove("show-sidebar");
  document.body.classList.remove("no-scrolling");
});

scrollLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hideMenuBtn.classList.add("hide-element");
    showMenuBtn.classList.remove("hide-element");
    sidebar.classList.remove("show-sidebar");
    document.body.classList.remove("no-scrolling");
  });
});

window.onbeforeunload = () => window.scrollTo(0);

/* CALENDAR */
weekdays.innerHTML = daysOfWeek.map((day) => `<div>${day}</div>`).join("");

heading.innerHTML = `<h1>${months[date.getMonth()]}' <span class="small">${year
  .toString()
  .substr(-2)}</span></h1>
  <p>${new Date().toLocaleDateString("pl-PL", {
    month: "2-digit",
    year: "numeric",
    weekday: "long",
    day: "numeric",
  })}</p>`;

renderCalendar();

/* Open Reservation Con*/
calendarCon.addEventListener("click", () => {
  modal.classList.add("open-modal");
  document.body.classList.add("no-scrolling");
});
bookBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
  document.body.classList.add("no-scrolling");
});

inputArr.addEventListener("click", () => {
  calendar.classList.add("open-modal");
  calendar.classList.remove("right");
  calendar.classList.add("left");

  firstSelect = "";

  inputDepLab.classList.add("avoid-clicks");
  renderCalendar();
});

inputDep.addEventListener("click", () => {
  if (inputArr.value === "" && !firstSelect === "") return;

  if (firstSelect === "" && lastSelect === "") {
    inputArr.value = "";
    inputDep.value = "";
  }

  calendar.classList.remove("left");
  calendar.classList.add("right");

  lastSelect = "";
  renderCalendar();
  calendar.classList.add("open-modal");
});

/* Close Reservation Con */
calendarCloseBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
  calendar.classList.remove("open-modal");
  document.body.classList.remove("no-scrolling");
  reservForm.classList.remove("hide-element");
  personNmbCon.classList.remove("hide-element");
  gratitude.classList.add("hide-element");

  if (inputArr.value === "" && inputDep.value === "") {
    firstSelect = "";
    lastSelect = "";
    personsNbrCon.innerHTML = 2;
    roomsCon.innerHTML = "";
    reservCon.classList.remove("avoid-clicks");
  }
});

/* Close Calendar */
modal.addEventListener("click", (e) => {
  if (
    e.target !== inputArr &&
    e.target !== inputDep &&
    e.target.closest("div .calendar-container") !== calendar
  ) {
    if (firstSelect === "") {
      inputArr.value = "";
      roomsCon.innerHTML = "";
    }
    if (lastSelect === "") {
      inputDep.value = "";
      roomsCon.innerHTML = "";
    }
    calendar.classList.remove("open-modal");
  }
});

/* Change number of persons */

minusBtn.addEventListener("click", () => {
  if (firstSelect === "" || lastSelect === "") return;
  if (nbrOfPer < 2) return;
  nbrOfPer--;
  personsNbrCon.innerHTML = nbrOfPer;
  roomsCon.innerHTML = showRooms();
  checkConditionsLoop();
});
plusBtn.addEventListener("click", () => {
  if (firstSelect === "" || lastSelect === "") return;
  if (nbrOfPer > 4) return;
  nbrOfPer++;
  personsNbrCon.innerHTML = nbrOfPer;
  roomsCon.innerHTML = showRooms();
  checkConditionsLoop();
});

/* Select days of reservation */

monthDays.addEventListener("click", (e) => {
  let day = e.target.innerText;
  let month = date.getMonth() + 1;

  const checkInput = (input) => {
    e.target.classList.add("selected");
    calendar.classList.remove("open-modal");
    input = `${day < 10 ? "0" + day : day}.${
      month < 10 ? "0" + month : month
    }.${year}`;
    return input;
  };

  const countDays = () => {
    let days = Math.ceil(
      (new Date(lastSelect) - new Date(firstSelect)) / (1000 * 3600 * 24)
    );
    return days;
  };

  const checkClass = () => {
    if (
      !e.target.classList.contains("prev-date") &&
      !e.target.classList.contains("next-date")
    )
      return true;
  };

  if (
    firstSelect === "" &&
    lastSelect === "" &&
    lastSelect !== `${year},${month},${day}` &&
    new Date(`${year},${month},${day} 23:59:59`) >= new Date() &&
    checkClass()
  ) {
    inputArr.value = checkInput(inputArr.value);
    firstSelect = `${year},${month},${day}`;
    inputDepLab.classList.remove("avoid-clicks");
  } else if (
    firstSelect === "" &&
    lastSelect !== "" &&
    lastSelect !== `${year},${month},${day}` &&
    new Date(`${year},${month},${day} 23:59:59`) >= new Date() &&
    new Date(`${year},${month},${day} 23:59:00`) < new Date(lastSelect) &&
    checkClass()
  ) {
    inputArr.value = checkInput(inputArr.value);
    firstSelect = `${year},${month},${day}`;
    inputDepLab.classList.remove("avoid-clicks");
  }

  if (
    lastSelect === "" &&
    firstSelect !== `${year},${month},${day}` &&
    new Date(`${year},${month},${day}`) > new Date(firstSelect) &&
    checkClass()
  ) {
    inputDep.value = checkInput(inputArr.value);
    lastSelect = `${year},${month},${day}`;
  }

  bookedDays = countDays();

  if (firstSelect !== "" && lastSelect !== "") {
    roomsCon.innerHTML = showRooms();
    checkConditionsLoop();
  }

  return;
});

export {
  firstSelect,
  lastSelect,
  inputArr,
  inputDep,
  bookedDays,
  nbrOfPer,
  reservForm,
  personNmbCon,
  gratitude,
};
