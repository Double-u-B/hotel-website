import { rooms } from "./data.js";
const $ = document.querySelector.bind(document);

const roomsImgCon = $(".rooms-img-container");
let roomImgCounter = 0;

roomsImgCon.innerHTML = `
<div class="rooms-img">
<img src="img/rooms/deluxe_double.jpg" alt="">
<div class="rooms-title">
<h1>Deluxe Twin</h1>
<div class="rooms-properties">
<p><i class="fas fa-expand-arrows-alt"></i> 45m<sup>2</sup></p>
<p><i class="far fa-user"></i> max 2</p>
</div>
<button class="room-check">Check it out</button>
</div>
</div>
<div class="rooms-btns">
<button class="prev-room">
<i class="fas fa-long-arrow-alt-left"></i>
</button>
<button class="next-room">
<i class="fas fa-long-arrow-alt-right"></i>
</button>
</div>`;

const roomImg = $(".rooms-img");
const nextRoomBtn = $(".rooms-btns .next-room");
const prevRoomBtn = $(".rooms-btns .prev-room");

/* Room img slider */
const roomImgSlide = () => {
  if (roomImgCounter === rooms.length) roomImgCounter = 0;
  if (roomImgCounter < 0) roomImgCounter = rooms.length - 1;

  roomImg.innerHTML = `
       <img src="img/rooms/${rooms[roomImgCounter].img}.jpg" alt="${rooms[roomImgCounter].title}" />
        <div class="rooms-title">
                    <h1>${rooms[roomImgCounter].title}</h1>
                    <div class="rooms-properties">
                        <p><i class="fas fa-expand-arrows-alt"></i> ${rooms[roomImgCounter].size}m<sup>2</sup></p>
                        <p><i class="far fa-user"></i> max ${rooms[roomImgCounter].persons}</p>
                    </div>
                    <button class="room-check">Check it out</button>
                </div>
                `;
};

nextRoomBtn.addEventListener("click", () => {
  roomImgCounter++;
  roomImgSlide();
});

prevRoomBtn.addEventListener("click", () => {
  roomImgCounter--;
  roomImgSlide();
});

/* Slider scroll width */
const checkWindowWidth = () => {
  let moveSize;
  const width = window.innerWidth;

  if (width >= 1600 && width < 1670) moveSize = 104.6;
  if (width >= 1528 && width < 1600) moveSize = 104.8;
  if (width >= 1468 && width < 1528) moveSize = 105.1;
  if (width >= 1400 && width < 1468) moveSize = 105.25;
  if (width >= 1364 && width < 1400) moveSize = 105.6;
  if (width >= 1249 && width < 1364) moveSize = 106.1;
  if (width >= 1135 && width < 1249) moveSize = 107.4;
  if (width >= 1024 && width < 1135) moveSize = 108;
  if (width >= 900 && width < 1024) moveSize = 108.4;
  if (width >= 767 && width < 900) moveSize = 109.2;
  if (width >= 700 && width < 767) moveSize = 109.6;
  if (width >= 600 && width < 700) moveSize = 111.2;
  if (width >= 550 && width < 600) moveSize = 106.25;
  if (width >= 481 && width < 550) moveSize = 107.4;
  if (width >= 430 && width < 481) moveSize = 108.2;
  if (width >= 395 && width < 430) moveSize = 109.2;
  if (width >= 360 && width < 395) moveSize = 110.5;
  if (width >= 340 && width < 360) moveSize = 111;
  if (width >= 320 && width < 340) moveSize = 111.5;
  return moveSize;
};

export { roomImgSlide, checkWindowWidth };
