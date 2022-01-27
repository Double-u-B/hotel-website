const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const greeting = $(".greeting");
const greetingTxt = $(".slogan");

/* Greeting shadow */
const shadow = (e) => {
    const walk = 12;

    const {
        offsetWidth: width,
        offsetHeight: height
    } = greeting;
    let {
        offsetX: x,
        offsetY: y
    } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);

    greetingTxt.style.textShadow = `${xWalk * -1}px ${yWalk * -1}px 6px black`;
};

export {shadow, greeting};