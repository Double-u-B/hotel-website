import { rooms } from "./data.js";
import { nbrOfPer, bookedDays } from "../main.js";

/* Show apartments during reservation */

const showRooms = () => {
  return rooms
    .map((room) => {
      const { img, title, deposit, board, price } = room;
      return `<div class="booking-room">
                    <div class="booking-room-img">
                        <img src="img/rooms/${img}.jpg" alt="${title}">
                    </div>
                    <div class="booking-room-info">
                        <h3>${title.toUpperCase()}</h3>
                        <div class="room-info-txt">
                            <p><img src="icons/shield.png" alt="">Covid-19 disinfection.
                            </p>
                            <p><img src="icons/decline.png" alt="">Nonrefundable offer</p>
                            <p><img src="icons/money.png" alt="">${deposit} deposit</p>
                            <p><img src="icons/breakfast.png" alt="">${board}</p>
                        </div>
                        <button><p>Read more</p></button>

                    </div>
                    <div class="booking-room-price">
                        <div class="booking-price">
                            <p>with Jumeirah Hotels <br/> Club discount</p>
                            <p>$${
                              nbrOfPer <= 2
                                ? Math.round(price - (price * 15) / 100) *
                                  bookedDays
                                : Math.round(
                                    (price - (price * 15) / 100) * bookedDays +
                                      (room.price - (price * 15) / 100) *
                                        bookedDays *
                                        (nbrOfPer / 10 + 0.25)
                                  )
                            }</p>
                            <p class="price">$${
                              nbrOfPer <= 2
                                ? price * bookedDays
                                : Math.round(
                                    price * bookedDays +
                                      price *
                                        bookedDays *
                                        (nbrOfPer / 10 + 0.25)
                                  )
                            }</p>
                        </div>
                        <button>book now</button>
                    </div>
                </div>`;
    })
    .join("");
};

export {showRooms};