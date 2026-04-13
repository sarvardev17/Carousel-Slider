const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const slide = document.getElementById("slide");

let imgs = ["./images/bmw1.jpg", "./images/bmw2.jpg", "./images/bmw3.jpg"];

let active = 0;

btnRight.addEventListener("click", () => {
  active++;

  if (active >= imgs.length) {
    active = 0;
  }

  slide.src = imgs[active];
});

btnLeft.addEventListener("click", () => {
  active--;

  if (active < 0) {
    active = imgs.length - 1;
  }

  slide.src = imgs[active];
});