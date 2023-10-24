const hotNewsThumbSlider = new Swiper(
  "#fhm-blog-hot-news .hot-news-thumb .swiper",
  {
    direction: "vertical",
    slidesPerView: 3,
    loop: false,
    speed: 1000,
    spaceBetween: 25,
  }
);

const hotNewsContentSlider = new Swiper(
  "#fhm-blog-hot-news .hot-news-content .swiper",
  {
    direction: "horizontal",
    slidesPerView: 1,
    loop: false,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },

    thumbs: {
      swiper: hotNewsThumbSlider,
    },

    breakpoints: {
      575: {
        direction: "vertical",
      },
    },
  }
);

const newsGroup = document.querySelector(".latest-news-group.active");
const newsItem = ` <div class="news-item">
                <div class="news-item-image">
                  <img
                    src="./assets/images/news/news.jpg"
                    alt="News"
                    title="News"
                  />
                </div>
                <p class="news-item-date">29.Jun.2021</p>
                <a
                  href="#"
                  title="Lily Allen Has Two New Songs on ‘Pan’ Soundtrack"
                  class="news-item-title"
                  >Lily Allen Has Two New Songs on ‘Pan’ Soundtrack</a
                >
                <p class="news-item-desc">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
              </div>
              <div class="news-item">
                <div class="news-item-image">
                  <img
                    src="./assets/images/news/news.jpg"
                    alt="News"
                    title="News"
                  />
                </div>
                <p class="news-item-date">29.Jun.2021</p>
                <a
                  href="#"
                  title="Lily Allen Has Two New Songs on ‘Pan’ Soundtrack"
                  class="news-item-title"
                  >Lily Allen Has Two New Songs on ‘Pan’ Soundtrack</a
                >
                <p class="news-item-desc">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
              </div>
              <div class="news-item">
                <div class="news-item-image">
                  <img
                    src="./assets/images/news/news.jpg"
                    alt="News"
                    title="News"
                  />
                </div>
                <p class="news-item-date">29.Jun.2021</p>
                <a
                  href="#"
                  title="Lily Allen Has Two New Songs on ‘Pan’ Soundtrack"
                  class="news-item-title"
                  >Lily Allen Has Two New Songs on ‘Pan’ Soundtrack</a
                >
                <p class="news-item-desc">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
              </div>
              <div class="news-item">
                <div class="news-item-image">
                  <img
                    src="./assets/images/news/news.jpg"
                    alt="News"
                    title="News"
                  />
                </div>
                <p class="news-item-date">29.Jun.2021</p>
                <a
                  href="#"
                  title="Lily Allen Has Two New Songs on ‘Pan’ Soundtrack"
                  class="news-item-title"
                  >Lily Allen Has Two New Songs on ‘Pan’ Soundtrack</a
                >
                <p class="news-item-desc">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
              </div>`;
const loadMore = () => {
  newsGroup.innerHTML += newsItem;
};
