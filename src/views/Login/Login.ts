import { defineComponent } from 'vue'

export default defineComponent({
  data: function () {
    return {
      registerActive: false,
      emailLogin: '',
      passwordLogin: '',
      emailReg: '',
      passwordReg: '',
      confirmReg: '',
      emptyFields: false,
      posts: null,
      errors: null,
    }
  },
  mounted() {
  },

  methods: {
    doLogin() {
      if (this.emailLogin === '' || this.passwordLogin === '') {
        this.emptyFields = true
      } else {
        alert('You are now logged in')
      }
    },

    doRegister() {
      if (this.emailReg === '' || this.passwordReg === '' || this.confirmReg === '') {
        this.emptyFields = true
      } else {
        alert('You are now registered')
      }
    }
  }
})