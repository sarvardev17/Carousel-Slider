const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const slide = document.getElementById("slide");
const showNumber = document.getElementById("show-number");
let input = document.querySelector("#input");
let searchBtn = document.querySelector("#searchBtn");
let text = document.querySelector("#text");

let imgs = [
  "./images/bmw1.jpg",
  "./images/bmw2.jpg",
  "./images/bmw3.jpg"
];

let active = 0;

slide.src = imgs[active];
showNumber.innerHTML = active + 1;

btnRight.addEventListener("click", () => {
  active++;

  if (active >= imgs.length) {
    active = 0;
  }

  updateSlider();
});

btnLeft.addEventListener("click", () => {
  active--;

  if (active < 0) {
    active = imgs.length - 1;
  }

  updateSlider();
});

setInterval(() => {
  active++;

  if (active >= imgs.length) {
    active = 0;
  }

  updateSlider();
}, 3000);

function updateSlider() {
  slide.src = imgs[active];
  showNumber.innerHTML = active + 1;
}


function showError() {
  text.textContent = "Bunday rasm yo'q";
  text.style.opacity = "1";

  setTimeout(() => {
    text.style.opacity = "0";
  }, 3000);
}
searchBtn.addEventListener("click", () => {
  let number = Number(input.value) - 1;

  if (imgs[number]) {
    active = number;
    updateSlider();
    text.style.opacity = "0";
  } else {
    showError();
  }

  input.value = "";
});














