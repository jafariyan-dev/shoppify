const sliderLayerEl = document.querySelector(".parent_slider");
const slide = document.querySelectorAll(".imageLink");
const next = document.querySelector(".slider_next");
const prev = document.querySelector(".slider_prev");
const mainImageEl = document.querySelector(".main_image");
const imgResponsiveEl = document.querySelectorAll(".img-responsive");

let currentIndex = -1;
let imgResposiveIndex = -1;
// update the visible slide
function showSlide(index) {
  if (index < 0) {
    currentIndex = slide.length - 1;
    imgResposiveIndex = imgResponsiveEl.length - 1;
    slide[imgResposiveIndex].display = "block";
    mainImageEl.src = imgResponsiveEl[imgResposiveIndex].src;

  } if (index >= slide.length) {
    currentIndex = 0;
    imgResposiveIndex = 0;
    slide[imgResposiveIndex].display = "block";
    mainImageEl.src = imgResponsiveEl[imgResposiveIndex].src;
  
  } else {
    currentIndex = index;
    imgResposiveIndex = index;
    slide[imgResposiveIndex].display = "block";
    mainImageEl.src = imgResponsiveEl[imgResposiveIndex].src;

  }
  // Shift slides
  sliderLayerEl.style.transform = `translateX(0%)`;
  slide[imgResposiveIndex].display = "none";


}

// Event listeners for navigation arrows

next.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});


prev.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

//Auto-play
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

