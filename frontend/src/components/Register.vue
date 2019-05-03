<template>
  <div class="container">
    <h1>Register</h1>

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
    <input 
        class="form-control"
        type="password" 
        name="password2"
        v-model="password2"
        placeholder="password again" />
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
      username: '',
      password: '',
      password2: ''
      
    }
  },
  watch: {
      username (value) {
          console.log('Username changed value')
      }
  },
  methods: {
      async register () {
        try {
          const response = await AuthenticationService.register({
              username: this.username,
              password: this.password,
              password2: this.password2
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
          console.log(this.error)
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
