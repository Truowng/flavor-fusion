const heroBanner = new Swiper("#homepage-banner .swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
  },
});

const aboutSlider = new Swiper("#homepage-about .swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    767: {
      loop: false,
    },
  },
});

const productSlider = new Swiper("#homepage-product .swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  initialSlide: 1,
  spaceBetween: 15,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: "#homepage-product .slider-button-next",
    prevEl: "#homepage-product .slider-button-prev",
  },
  breakpoints: {
    767: {
      spaceBetween: 0,
    },
  },
});

const servicesSlider = new Swiper("#homepage-service .swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const testimonialsSlider = new Swiper("#homepage-testimonials .swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
  },

  navigation: {
    nextEl: "#homepage-testimonials .slider-button-next",
    prevEl: "#homepage-testimonials .slider-button-prev",
  },

  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

const newsSlider = new Swiper("#homepage-news .swiper", {
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

const instagramSlider = new Swiper("#homepage-instagram .swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 32,

  navigation: {
    nextEl: "#homepage-instagram .slider-button-next",
  },

  breakpoints: {
    576: {
      slidesPerView: "auto",
      spaceBetween: 32,
    },
  },
});