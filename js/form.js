const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const image = document.querySelectorAll("img");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
      inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("acctive");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});


function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.image-${index}`);
  image.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("acctive"));
  this.classList.add("acctive");
}

bullets.forEach((bullets) => {
  bullets.addEventListener("click", moveSlider);
});

