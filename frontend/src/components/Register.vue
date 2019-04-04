<template>
  <div class="container">
    <h1>Register</h1>

    <input 
        class="form-control"
        type="text" 
        name="email"
        v-model="email"
        placeholder="email"
         />

    <br>
    <input 
        class="form-control"
        type="password" 
        name="password"
        v-model="password"
        placeholder="password" />
    <br>
    <button 
        class="btn btn-primary"
        @click="register">
        Register
        </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  // Component state
  data() {
    return {
      email: '',
      password: ''
      
    }
  },
  watch: {
      email (value) {
          console.log('Email changed value')
      }
  },
  methods: {
      async register () {
          const response = await AuthenticationService.register({
              email: this.email,
              password: this.password
          })
      }
  },
  mounted () {
      setTimeout(() => {

      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
