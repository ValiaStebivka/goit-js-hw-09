const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
let changeColorID;
function getRandomHexColor() {
    return`#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.start.addEventListener('click', onStartChangeColor);
function onStartChangeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  changeColorID = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;
}
refs.stop.addEventListener('click', onStopChangeColor);
function onStopChangeColor() {
  clearInterval(changeColorID);
  refs.start.disabled = false;
  refs.stop.disabled = true;
}
