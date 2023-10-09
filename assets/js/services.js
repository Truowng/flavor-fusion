const servicesBlockSlider = new Swiper(
  "#services .services-block-2 .services-block-slider .swiper",
  {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
    breakpoints: {
      1399: {
        speed: 750,
        direction: "vertical",
      },
    },
  }
);

const newsSlider = new Swiper("#services-news .swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 26,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 26,
    },
  },
});

// SHOW IMAGES
const imagesArr = document.querySelectorAll(
  "#services .services-block-2 .services-slider-item img"
);
const bigImage = document.querySelector(
  "#services .services-block-2 .services-block-image"
);

imagesArr.forEach((image) => {
  image.addEventListener("click", () => {
    bigImage.style.backgroundImage = `url(${image.getAttribute("src")})`;
  });
});
