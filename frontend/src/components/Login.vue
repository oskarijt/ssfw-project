<template>
  <div class="container">
    <h1>Login</h1>

    <input 
        class="form-control"
        type="text" 
        name="username"
        v-model="username"
        placeholder="username"
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
        @click="login">
        Login
        </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  // Component state
  data() {
    return {
      username: '',
      password: ''
      
    }
  },
  watch: {
      username (value) {
          console.log('Username changed value')
      }
  },
  methods: {
      async login () {
        try {
          const response = await AuthenticationService.login({
              username: this.username,
              password: this.password
          })
          const token = response.data.token
          const user = response.data.user

          localStorage.setItem('token', token)

          this.$store.dispatch('setToken', token)
          this.$store.dispatch('setUser', user)
          this.$router.push({
            name: 'posts'
          })
        } catch (error) {
          this.error = error.response.data.error
          console.log(this.error);
        }
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
