<template>
  <div class="home">
    <div class="home home__content">
      <div class="home__content__introduction"></div>
      <div class="home__content__picture">
        <img src="" />
      </div>
    </div>
    <div class="home home__content">
      <b-carousel
        class="home__content__picture">
        <b-carousel-slide>
          <h1>{{ 'Picture' }}</h1>
        </b-carousel-slide>
      </b-carousel>
      <div class="home__content__introduction">
        <div>{{ 'Introduction' }}</div>
        <button>{{ 'more' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &__content {
    width: 100vw;
    height: 85vh;
    &__introduction {
      width: 45%;
      height: 100%;
      background-color: burlywood;
    }
    &__picture {
      width: 55%;
      height: 100%;
      background-color: brown;
    }
  }
  &__about {
    
  }
  &__protfolio {
    &__introduction {}
    &__picture {}
  }
}
</style>