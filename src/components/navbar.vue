<template>
  <b-navbar
    :class="`nav nav__bar ${navbar.status} animated ${navbar.animate}`"
    :sticky="navbar.sticky">
    <div
      :key="index"
      v-for="(menu, index) in menus"
      class="nav nav__option">
      <img
        v-if="menu.english === 'home'"
        class="nav nav__option__sign"
        :src="logo"
        :alt="menu.chinese"
        @click="goto(menu.english)"
      >
      <strong
        v-else
        class="nav nav__option__text"
        @click="goto(menu.english)"
      >{{ menu.chinese }}</strong>
    </div>
  </b-navbar>
</template>

<script>
import logo from '../assets/logo.png';
export default {
  name: 'navbar',
  props: {
    menus: Array
  },
  data() {
    return {
      logo,
      navbar: {
        animate: "",
        status: "gauze",
        sticky: false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.changeNavbarStatus);
  },
  methods: {
    changeNavbarStatus() {
      let vh = (window.innerHeight / 100);
      if (window.scrollY >= 15 * vh) {
        this.navbar.animate = "fadeIn";
        this.navbar.status = "nav__bar--fill";
        this.navbar.sticky = true;
      } else if(this.navbar.animate === "fadeIn") {
        this.navbar.animate = "slideInUp";
        this.navbar.status = "";
        this.navbar.sticky = false;
      }
    },
    goto(pageName) {
      if(pageName !== this.$route.name) {
        this.$router.push({ name: pageName });
      }
    }
  },
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
    &--fill {
      background-color: rgba( 255, 255, 255, .8); 
    }
  }
  &__option {
    width: 20%;
    height: 100%;
    position:relative;
    &__text {
      cursor: pointer;
      font-size: 1.8rem;
      background: linear-gradient(to right, #FFDA71 50%, #2c3e50 50%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200%;
      background-position: 100%;
      transition: 1s;
      &::after {
        content: "";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(135deg, rgba(#CC9976, .8) 50%, transparent 50%);
        z-index:-1;
        background-size: 245%;
        background-position: 100%;
        transition: 1.5s;
      }
      &:hover {
        background-position: 0;
        &::after {
          background-position: 0;
        }
      }
    }
    &__sign {
      cursor: pointer;
      height: 100%;
    }
  }
}
</style>