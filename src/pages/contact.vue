<template>
  <div class="contact">
    <div class="contact contact__content">
      <h1>地圖、地址、服務時間、聯絡電話與電子信箱</h1>
    </div>
    <div class="contact contact__content">
      <div class="contact contact__content__box contact__content__box--narrow">
        <div class="contact contact__content__community">Facebook</div>
        <div class="contact contact__content__community">Line</div>
      </div>
      <div class="contact contact__content__box contact__content__box--broad">
        <h1>聯絡表單</h1>
        <span class="contact contact__content__form">
          <label for="name"><span class="indispensable">*</span>您的姓名：</label>
          <div class="contact contact__content__form__name">
            <input type="text" id="name" v-model="form.name" />
            <input type="radio" name="gender" id="male" value="先生" v-model="form.gender"/><label for="male">先生</label>
            <input type="radio" name="gender" id="female" value="小姐" v-model="form.gender" /><label for="female">小姐</label>
          </div>
        </span>
        <span class="contact contact__content__form">
          <label for="type"><span class="indispensable">*</span>施作類型：</label>
          <input type="text" id="type" placeholder="木工、木頭飾品" v-model="form.type" />
        </span>
        <span class="contact contact__content__form">
          <label for="phone"><span class="indispensable">*</span>連絡電話：</label>
          <input type="text" id="phone" v-model="form.phone" />
        </span>
        <span class="contact contact__content__form">
          <label for="email"><span class="indispensable">*</span>連絡信箱：</label>
          <input type="text" id="email" v-model="form.email" />
        </span>
        <span class="contact contact__content__form contact__content__form__demand">
          <label for="demand"><span class="indispensable">*</span>需求說明：</label>
          <textarea id="demand" v-model="form.demand"></textarea>
        </span>
        <span class="contact contact__content__form contact__content__form__send">
          <button
            class="btn btn-success"
            @click="sendToGoogleForm"
          >傳送表單</button>
        </span>
      </div>
      <!-- <h1>我們的FB、LINE連結與聯絡表單</h1>
      <button
        class="btn btn-success"
        @click="sendToGoogleForm"
      >傳送表單</button> -->
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
        gender: '先生/小姐',
        type: new String(),
        phone: new String(),
        email: new String(),
        demand: new String()
      }
    }
  },
  mounted() {},
  methods: {
    sendToGoogleForm() {
      let params = new URLSearchParams();

      params.append('entry.719903190', `${this.form.name} ${this.form.gender}`);
      params.append('entry.1900503595', this.form.phone);
      params.append('entry.1024071780', this.form.email);
      params.append('entry.744131277', this.form.type);
      params.append('entry.1390726533', this.form.demand);

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
.indispensable {
  color: red;
}
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &__content {
    width: 100vw;
    height: 85vh;
    padding: 3rem 2rem;
    &__box {
      height: 90%;
      padding: 3rem 1.5rem;
      h1 {
        width: 100%;
        height: 20%;
      }
      &--narrow {
        width: 40%;
      }
      &--broad {
        width: 60%;
      }
    }
    &__community {
      width: 100%;
      height: 50%;
    }
    &__form {
      width: 50%;
      height: 15%;
      padding: 8px;
      font-weight: bold;
      justify-content: space-evenly;
      label {
        margin: 0;
      }
      input[type=text] {
        width: 70%;
        height: 100%;
      }
      &__name {
        width: 70%;
        height: 100%;
        input[type=text] {
          width: 57%;
          height: 100%;
        }
        input[type=radio] {
          width: 10%;
          height: 40%;
        }
      }
      &__demand {
        width: 100%;
        height: 35%;
        textarea {
          width: 85%;
          height: 100%;
          resize: none;
        }
      }
      &__send {
        width: 100%;
      }
    }
  }
}
</style>