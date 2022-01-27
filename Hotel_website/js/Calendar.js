import { months} from "./data.js";
import { inputArr, inputDep} from "../main.js";

const $ = document.querySelector.bind(document);

const date = new Date();
const heading = $(".date");
let year = date.getFullYear();

const leftArrow = $(".prev");
const rightArrow = $(".next");
const monthDays = $(".days");
const weekdays = $(".weekdays");

const calendarCon = $(".calendar-box");
const calendarCloseBtn = $(".close-btn");
const calendar = $(".calendar-container");
const roomsCon = $(".booking-rooms");
const reservCon = $(".reservation");
const minusBtn = $(".minus");
const plusBtn = $(".plus");

let personsNbrCon = $(".nbr-of-persons");


const renderCalendar = () => {
  let days = "";
  const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() - 1;

  const nextDays = 6 - lastDayIndex;

  heading.innerHTML = `<h1>${months[date.getMonth()]} <span class="small">'${year.toString().substr(-2)}</span></h1>
<p>${new Date().toLocaleDateString("en", {
    month: "2-digit",
    year: "numeric",
    weekday: "short",
    day: "numeric",
  })}</p>`;

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      ((i == inputArr.value.slice(0, 2) &&
          date.getMonth() == inputArr.value.slice(3, 5) - 1) ||
        (i == inputDep.value.slice(0, 2) &&
          date.getMonth() == inputDep.value.slice(3, 5) - 1)) &&
      (year == inputArr.value.slice(6) || year == inputDep.value.slice(6))
    ) {
      days += `<div class="selected">${i}</div>`;
    } else if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      year == new Date().getFullYear()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

/* Change Month */

leftArrow.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  if (date.getMonth() > 10) year = date.getFullYear();
  renderCalendar();
});

rightArrow.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  if (date.getMonth() < 1) year = date.getFullYear();
  renderCalendar();
});



export {
  renderCalendar,
  date,
  heading,
  year,
  leftArrow,
  rightArrow,
  monthDays,
  weekdays,
  calendarCon,
  calendarCloseBtn,
  calendar,
  reservCon,
  roomsCon,
  minusBtn,
  plusBtn,
  personsNbrCon,
};