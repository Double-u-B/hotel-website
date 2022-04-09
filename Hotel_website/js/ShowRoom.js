import { reservCon } from "./Calendar.js";


/* Show selected room during reservation */

const showRoom = (name, img, board, deposit) => {
  reservCon.classList.add("avoid-clicks");
  
  return `<div class="room">
                    <div class="move-back">
                        <button class="back-btn">
                            <img src="icons/left-arrow.png" alt="icon">
                        </button>
                    </div>
                    <div class="room-img">
                        <img src="${img}" alt="">
                    </div>
                    <div class="room-txt-one">
                        <h2>${name}</h2>
                        <p><img src="icons/shield.png" alt="">Covid-19 disinfection.</p>
                        <p><img src="icons/decline.png" alt="">Nonrefundable offer</p>
                        <p><img src="icons/money.png" alt="">${deposit}</p>
                        <p><img src="icons/breakfast.png" alt="">${board}</p>
                    </div>
                    <div class="room-txt-two">
                        <p>Overnight stay in a comfortable room with a balcony, air conditioning and kitchenette, 55” TV
                            and free wireless Internet.</p>
                        <p>Buffet breakfast includes hot dishes, such as scrambled eggs or sausages, as well as cold
                            ones – cheeses, cold cuts, fish, salads, vegetables, fruits, yoghurts, bread, cereals, dried
                            fruit – these are only some of the specialties that our guests will find in the morning
                            menu.</p>
                    </div>
                </div>`;
};

export { showRoom };