"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelector(".show-modal");

const extraText0 = document.querySelector("#extra-text-0");
const extraText1 = document.querySelector("#extra-text-1");
const extraText2 = document.querySelector("#extra-text-2");

const btnReadMore0 = document.querySelector(".read-more-0");
const btnReadMore1 = document.querySelector(".read-more-1");
const btnReadMore2 = document.querySelector(".read-more-2");

const btnReadLess0 = document.querySelector(".read-less-0");
const btnReadLess1 = document.querySelector(".read-less-1");
const btnReadLess2 = document.querySelector(".read-less-2");

const btnHeart0 = document.querySelector(".heart-0");
const btnHeart1 = document.querySelector(".heart-1");
const btnHeart2 = document.querySelector(".heart-2");

const stars = document.querySelectorAll(".rate-star-3 i");

const closeModal = function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
};

const openModal = function () {
  modal.classList.remove("hide");
  overlay.classList.remove("hide");
};

btnShowModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hide")) {
    closeModal();
  }
});

btnReadMore0.addEventListener("click", function () {
  extraText0.classList.remove("hide");
  btnReadMore0.classList.add("hide");
});

btnReadMore1.addEventListener("click", function () {
  extraText1.classList.remove("hide");
  btnReadMore1.classList.add("hide");
});

btnReadMore2.addEventListener("click", function () {
  extraText2.classList.remove("hide");
  btnReadMore2.classList.add("hide");
});

btnReadLess0.addEventListener("click", function () {
  extraText0.classList.add("hide");
  btnReadMore0.classList.remove("hide");
});

btnReadLess1.addEventListener("click", function () {
  extraText1.classList.add("hide");
  btnReadMore1.classList.remove("hide");
});

btnReadLess2.addEventListener("click", function () {
  extraText2.classList.add("hide");
  btnReadMore2.classList.remove("hide");
});

btnHeart0.addEventListener("click", function () {
  btnHeart0.classList.add("heart-pressed");
  btnHeart0.classList.remove("heart-0");
});

btnHeart1.addEventListener("click", function () {
  btnHeart1.classList.add("heart-pressed");
  btnHeart1.classList.remove("heart-1");
});

btnHeart2.addEventListener("click", function () {
  btnHeart2.classList.add("heart-pressed");
  btnHeart2.classList.remove("heart-2");
});

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});
