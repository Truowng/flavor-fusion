const productsSlider = new Swiper("#fhm-products .swiper", {
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 22,
  loop: false,
  speed: 750,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: "#fhm-products .slider-button-next",
    prevEl: "#fhm-products .slider-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 4,
    },
  },
});

const productGroup = document.querySelector(".products-group.active");
const productItem = ` <div class="products-item">
                  <div class="image">
                    <img
                      src="./assets/images/products/pizza4.jpg"
                      alt="Pizza"
                      title="Pizza"
                    />
                  </div>
                  <a
                    href="#"
                    title="Seafood Spicy Tomato sauce with Smoked Cheese Pizza"
                    class="name"
                    >Seafood Spicy Tomato sauce with Smoked Cheese Pizza</a
                  >
                  <span class="price"> $29.00 </span>
                </div>
                 <div class="products-item">
                  <div class="image">
                    <img
                      src="./assets/images/products/pizza4.jpg"
                      alt="Pizza"
                      title="Pizza"
                    />
                  </div>
                  <a
                    href="#"
                    title="Seafood Spicy Tomato sauce with Smoked Cheese Pizza"
                    class="name"
                    >Seafood Spicy Tomato sauce with Smoked Cheese Pizza</a
                  >
                  <span class="price"> $29.00 </span>
                </div>
                 <div class="products-item">
                  <div class="image">
                    <img
                      src="./assets/images/products/pizza4.jpg"
                      alt="Pizza"
                      title="Pizza"
                    />
                  </div>
                  <a
                    href="#"
                    title="Seafood Spicy Tomato sauce with Smoked Cheese Pizza"
                    class="name"
                    >Seafood Spicy Tomato sauce with Smoked Cheese Pizza</a
                  >
                  <span class="price"> $29.00 </span>
                </div>`;
const loadMore = () => {
  productGroup.innerHTML += productItem;
};
