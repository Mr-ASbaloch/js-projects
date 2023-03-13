let slider = document.querySelectorAll(".slide");
// console.log(slider)

var counter = 0;
slider.forEach((slide, index) => {
  slide.style.left = `${index * 100}% `;
});

const slideimage = () => {
  slider.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
goNext = () => {
  counter++;
  slideimage();
};
goBack = () => {
  counter--;
  slideimage();
};
