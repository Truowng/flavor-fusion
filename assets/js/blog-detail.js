const postSlider = new Swiper("#blog-detail-post .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 1,
  initialSlide: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
