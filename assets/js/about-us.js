const teamSlider = new Swiper("#about-team .swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 45,
  loop: false,
  speed: 1000,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: "#about-team .slider-button-next",
    prevEl: "#about-team .slider-button-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
  },
});

const memorableYearSlider = new Swiper(
  "#about-memorable .memorable-years .swiper",
  {
    direction: "horizontal",
    slidesPerView: 1,
    loop: false,
    speed: 1000,
    breakpoints: {
      575: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  }
);

const memorableSlider = new Swiper(
  "#about-memorable .memorable-slider .swiper",
  {
    direction: "horizontal",
    slidesPerView: 1,
    loop: false,
    speed: 1000,
    navigation: {
      nextEl: "#about-memorable .slider-button-next",
      prevEl: "#about-memorable .slider-button-prev",
    },
    thumbs: {
      swiper: memorableYearSlider,
    },
  }
);

const valuesSlider = new Swiper("#about-values .swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: "#about-values .slider-button-next",
    prevEl: "#about-values .slider-button-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
  },
});
