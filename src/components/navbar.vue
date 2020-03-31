<template>
  <b-navbar
    class="nav nav__bar"
    sticky>
    <div class="nav nav__option">
      <span class="nav nav__option__text">{{ 'about' }}</span>
    </div>
    <div class="nav nav__option">
      <span class="nav nav__option__text">{{ 'news' }}</span>
    </div>
    <div class="nav nav__option">
      <img
        class="nav nav__option__sign"
        :src="logo"
        alt="木目金心工作室"
      >
    </div>
    <div class="nav nav__option">
      <span class="nav nav__option__text">{{ 'portfolio' }}</span>
    </div>
    <div class="nav nav__option">
      <span class="nav nav__option__text">{{ 'contact' }}</span>
    </div>
  </b-navbar>
</template>

<script>
import logo from '../assets/logo.png';
export default {
  data() {
    return {
      logo
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
    position: sticky;
    background-color: rgba( 255, 255, 255, .3); 
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