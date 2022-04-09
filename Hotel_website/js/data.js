/* Hotel */
const offers = [
  {
    img: "img/offers/all_inclusive.webp",
    title: "HOLIDAYS ALL INCLUSIVE",
    board: "FB - Full Board",
    length: "min. 2 nights",
    desc: "In a healthy body, healthy mind. Choose active relaxation with energetic meals by the sea and strengthen  immunity. Validity period: 04.01-31.03.2021",
  },
  {
    img: "img/offers/vocations.webp",
    title: "Holidays by the sea",
    board: "Breakfast and Dinner",
    length: "min. 2 nights",
    desc: "In a healthy body, healthy mind. Choose active relaxation with energetic meals by the sea and strengthen your immunity. Validity period: 04.01-31.03.2021",
  },
  {
    img: "img/offers/family.webp",
    title: "Sports Active",
    board: "FB - Full Board",
    length: "min. 5 nights",
    desc: "In a healthy body, healthy mind. Choose active relaxation with energetic meals by the sea and strengthen  immunity. Validity period: 04.01-31.03.2021",
  },
  {
    img: "img/offers/spa.webp",
    title: "SPA for everyone",
    board: "Breakfast and Dinner",
    length: "min. 3 nights",
    desc: "In a healthy body, healthy mind. Choose active relaxation with energetic meals by the sea and strengthen  immunity. Validity period: 04.01-31.03.2021",
  },
];

const rooms = [
  {
    title: "deluxe double",
    img: "deluxe_double",
    size: 45,
    persons: 3,
    price: 170,
    deposit: "50%",
    board: "All Inclusive",
  },
  {
    title: "superior",
    img: "superior",
    size: 27,
    persons: 4,
    price: 130,
    deposit: "40%",
    board: "Breakfast and Dinner Included",
  },
  {
    title: "standard double",
    img: "standard_double",
    size: 33,
    persons: 2,
    price: 100,
    deposit: "30%",
    board: "Breakfast Included",
  },
];

const welcomeImgs = ["lobby", "breakfast", "dinner", "evening", "room-view"];

const links = [
  { title: "Hotel", url: "#welcome" },
  { title: "Rooms", url: "#rooms" },
  { title: "Special offers", url: "#special-offers" },
  { title: "Wellness & SPA", url: "#spa" },
  { title: "Restaurant", url: "#restaurant" },
  { title: "Contact", url: "#contact" },
];

const social = [
  { name: "facebook", title: "faceb", url: "https://www.facebook.com" },
  { name: "instagram", title: "insta", url: "https://www.instagram.com" },
];

/* Calendar */

const months = [
  /*   "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień", */
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const daysOfWeek = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export { offers, rooms, welcomeImgs, links, social, months, daysOfWeek };
