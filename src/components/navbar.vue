<template>
  <nav class="nav nav__bar">
    <div class="nav nav__option">
      <span class="nav nav__option__text">{{ 'about' }}</span>
    </div>
    <div class="nav nav__option">
      <span class="nav nav__option__text">{{ 'news' }}</span>
    </div>
    <div class="nav nav__option">
      <img
        class="nav nav__option__sign"
        src=""
        alt="木目金心工作室"
      >
    </div>
    <div class="nav nav__option">
      <span class="nav nav__option__text">{{ 'portfolio' }}</span>
    </div>
    <div class="nav nav__option">
      <span class="nav nav__option__text">{{ 'contact' }}</span>
    </div>
  </nav>
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
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  &__bar {
    width: 100vw;
    height: 15vh;
    background-color: rgba( 255, 255, 255, .5); 
  }
  &__option {
    width: 20%;
    height: 100%;
    &__text {
      cursor: pointer;
      font-size: 1.8rem;
      &:hover {
        animation-duration: 3s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
      }
    }
    &__sign {
      height: 100%;
    }
  }
}
</style>