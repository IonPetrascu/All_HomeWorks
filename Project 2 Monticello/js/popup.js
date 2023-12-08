const images = document.querySelectorAll(".popup-img");

const popUp = document.querySelector(".popup");
const popUpContent = document.querySelector(".popup__content");

const popUpClose = document.querySelector(".popup__close");
const popImage = document.querySelector(".popup__image");

if (images.length > 0) {
  images.forEach((image) => {
    image.addEventListener("click", () => {
      popImage.src = image.src;
      popUp.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });
  removeClass();
}

function removeClass() {
  popUpClose.addEventListener("click", () => {
    popUp.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}
