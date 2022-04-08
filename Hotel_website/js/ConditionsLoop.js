import { reservCon, roomsCon } from "./Calendar.js";
import { summary } from "./Summary.js";
import { showRooms } from "./ShowRooms.js";
import { showRoom } from "./ShowRoom.js";
import { error, isValidEmail } from "./Validation.js";
import {
  inputArr,
  inputDep,
  reservForm,
  personNmbCon,
  gratitude,
} from "../main.js";
import { rooms } from "./data.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const checkConditionsLoop = () => {
  let readMoreBtns = $$(".booking-room-info button");
  let bookNowBtns = $$(".booking-room-price button");

  readMoreBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      let img = e.target
        .closest(".booking-room-info")
        .previousElementSibling.children[0].getAttribute("src");
      let name = e.target.closest(".booking-room-info").children[0].innerText;
      let board =
        e.target.parentElement.previousElementSibling.children[3].innerText;
      let deposit =
        e.target.parentElement.previousElementSibling.children[2].innerText;

      roomsCon.innerHTML = showRoom(name, img, board, deposit);
      if ($(".room") && window.innerWidth > 600) {
        roomsCon.style.overflowY = "hidden";
      }
      roomsCon.scrollTo(0, 0);
      const backBtn = $(".back-btn");

      backBtn.addEventListener("click", () => {
        reservCon.classList.remove("avoid-clicks");
        roomsCon.removeAttribute("style");
        roomsCon.innerHTML = showRooms();
        checkConditionsLoop();
      });
    })
  );

  bookNowBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      let name = e.target.closest(".booking-room-price").previousElementSibling
        .children[0].innerText;
      let total =
        e.target.previousElementSibling.children[2].innerText.slice(1);
      let deposit =
        e.target.parentElement.previousElementSibling.children[1].children[2].innerText.slice(
          0,
          2
        );

      roomsCon.innerHTML = summary(name, total, deposit);

      const backBtn = $(".back-btn");
      const nameInput = $("input[id=name]");
      const surnameInput = $("input[id=surname]");
      const emailInput = $("input[id=email]");
      const phoneInput = $("input[id=phone]");
      const termsInput = $("input[id=terms");
      const termsInputLabel = $("label[for=terms]");

      // const reservForm = $(".reservation form");
      // const personNmbCon = $(".reservation .persons");
      // const gratitude = $(".reservation h2");

      const confResBtn = $(".sum-payment button");

      confResBtn.addEventListener("click", () => {
        if (
          // nameInput.value.match(/^[a-zA-Z-'. ]+$/) &&
          // surnameInput.value.match(/^[a-zA-Z-'. ]+$/) &&
          !(
            nameInput.value.match(/^[^a-z]+$/i) ||
            nameInput.value.match(/\d/) ||
            nameInput.value === ""
          ) &&
          !(
            surnameInput.value.match(/^[^a-z]+$/i) ||
            surnameInput.value.match(/\d/) ||
            surnameInput.value === ""
          ) &&
          phoneInput.value.match(/^[0-9]+$/) &&
          isValidEmail(emailInput.value) &&
          termsInput.checked
        ) {
          reservForm.classList.add("hide-element");
          personNmbCon.classList.add("hide-element");
          gratitude.classList.remove("hide-element");
          inputArr.value = "";
          inputDep.value = "";

          roomsCon.innerHTML = `<div class="sum-gratitude">

                    <p>Thank you for your reservation!</p>
                    <p>Until we receive a deposit transfer the reservation will be active only for 12 hours.</p>
                    <p>We are looking forward to see you soon in our hotel!</p>
                </div>`;
        } else {
          (nameInput.value.match(/^[^a-z]+$/i) ||
            nameInput.value.match(/\d/) ||
            nameInput.value === "") &&
            error(nameInput);
          (surnameInput.value.match(/^[^a-z]+$/i) ||
            surnameInput.value.match(/\d/) ||
            surnameInput.value === "") &&
            error(surnameInput);
          !phoneInput.value.match(/^[0-9]+$/) && error(phoneInput);
          !isValidEmail(emailInput.value) && error(emailInput);

          if (!termsInput.checked) {
            termsInputLabel.classList.add("error");
            setTimeout(() => {
              termsInputLabel.classList.remove("error");
            }, 1500);
          }
        }
      });

      backBtn.addEventListener("click", () => {
        reservCon.classList.remove("avoid-clicks");
        roomsCon.innerHTML = showRooms();
        checkConditionsLoop();
      });
    })
  );
};

export { checkConditionsLoop };
