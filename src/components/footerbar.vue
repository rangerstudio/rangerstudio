<template>
  <footer class="footer footer__bar">
    <img
      class="footer__icon"
      title="木目金心 Facebook"
      :src="facebook"
    />
    <img
      class="footer__icon"
      title="木目金心 Instagram"
      :src="instagram"
    />
    <strong>關於木目金心</strong>
    <strong>最新消息</strong>
    <strong>作品集</strong>
    <strong>聯絡我們</strong>
  </footer>
</template>

<script>
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
export default {
  data() {
    return {
      facebook,
      instagram
    }
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  &__bar {
    width: 100vw;
    height: 15vh;
  }
  &__icon {
    width: 2rem;
    height: 2rem;
  }
}
</style>