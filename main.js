// const btnLeft = document.getElementById("btnLeft");
// const btnRight = document.getElementById("btnRight");
// const slide = document.getElementById("slide");
// const showNumber = document.getElementById("show-number");

// let imgs = ["./images/bmw1.jpg", "./images/bmw2.jpg", "./images/bmw3.jpg"];



// let active = 0;
// showNumber.innerHTML = active + 1; 
// btnRight.addEventListener("click", () => {
//   active++;

    

//   if (active >= imgs.length) {
//     active = 0;
//   }

//   slide.src = imgs[active];
//    showNumber.innerHTML = active + 1; 
// });

// btnLeft.addEventListener("click", () => {
//   active--;

//   if (active < 0) {
//     active = imgs.length - 1;
//   }

//   slide.src = imgs[active];
//   showNumber.innerHTML = active + 1;
// });

const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const slide = document.getElementById("slide");
const showNumber = document.getElementById("show-number");

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


