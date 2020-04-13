<template>
  <div class="content">
    <div class="contact contact__content">
      <h1>地圖、地址、服務時間、聯絡電話與電子信箱</h1>
    </div>
    <div class="contact contact__content">
      <h1>我們的FB、LINE連結與聯絡表單</h1>
      <button
        class="btn btn-success"
        @click="sendGoogleForm"
      >傳送表單</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      form: {
        name: new String(),
        phone: new String(),
        email: new String(),
        type: new String(),
        demand: new String()
      }
    }
  },
  mounted() {},
  methods: {
    sendGoogleForm() {
      let params = new URLSearchParams();

      params.append('entry.719903190', 'name');
      params.append('entry.1900503595', 'phone');
      params.append('entry.1024071780', 'email');
      params.append('entry.744131277', 'work type');
      params.append('entry.1390726533', 'demand');

      this.axios({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLScYkvri2pbYkY6p3HfoaVXRB__Yk6Wx9UjaC_Bvg_SoMEH8GQ/formResponse',
        method: 'POST',
        data: params
      })
      .then( response => alert('success') )
      .catch( error => console.log(error) );
    }
  },
}
</script>

<style lang="scss">
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  &__content {
    width: 100vw;
    height: 85vh;
  }
}
</style>