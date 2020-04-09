<template>
  <div class="home">
    <div class="home home__gauze home__content">
      <div class="home home__content__introduction">
        <strong class="home__font">
          <p
            class="home__font__title"
            data-aos="fade-up"
          >{{ data.about.title }}</p>
          <p data-aos="fade-up" class="home__font__text">{{ data.about.text }}</p>
        </strong>
      </div>
      <div class="home home__content__picture">
        <img
          data-aos="fade-up"
          class="home__img"
          :src="about"
        />
      </div>
    </div>
    <div class="home home__gauze home__content">
      <b-carousel
        data-aos="fade-up"
        class="home home__content__picture"
        controls
        indicators
        @sliding-start="onSlidingStart"
        @sliding-end="onSlidingEnd">
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="home__img"
              :src="about"
            >
          </template>
          <h1>{{ 'Picture' }}</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="home__img"
              :src="about"
            >
          </template>
          <h1>{{ 'Picture' }}</h1>
        </b-carousel-slide>
      </b-carousel>
      <div class="home home__content__introduction">
        <strong :class="`home__font animated ${portfolioAnimate}`">
          <p
            class="home__font__title"
            data-aos="fade-up"
          >{{ portfolio.title }}</p>
          <p data-aos="fade-up" class="home__font__text">{{ portfolio.text }}</p>
          <button data-aos="fade-up" class="btn btn-success home__font__button">{{ 'more' }}</button>
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
import about from '../assets/about.jpg';
import data from '../jsons/home.json';
export default {
  name: 'home',
  data() {
    return {
      about,
      data,
      portfolioAnimate: "",
      portfolio: {
        title: "",
        text: "",
        link: ""
      }
    }
  },
  mounted() {
    this.portfolio = this.data.portfolios[0];
  },
  methods: {
    onSlidingStart(slide) {
      this.portfolioAnimate = "zoomOut";
    },
    onSlidingEnd(slide) {
      this.portfolioAnimate = "zoomIn";
      this.portfolio = data.portfolios[slide];
    }
  },
}
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &__gauze {
    background-color: rgba($color: white, $alpha: .3);
  }
  &__font {
    width: 70%;
    text-align: left;
    &__button {
      width: 20%;
    }
    &__title {
      font-size: 3rem;
      font-style: italic;
    }
    &__text {
      font-size: 2rem;
    }
  }
  &__content {
    width: 100vw;
    height: 85vh;
    padding: 3rem 2rem;
    &__introduction {
      width: 45%;
      height: 100%;
      white-space: pre;
      // background-color: burlywood;
    }
    &__picture {
      width: 55%;
      height: 100%;
      // background-color: brown;
    }
  }
  &__img {
    width: 90%;
    height: 70%;
  }
}
</style>