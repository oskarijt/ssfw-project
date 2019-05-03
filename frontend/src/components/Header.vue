<template>
  <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4">
          Reviewer
      </v-toolbar-title>

    <v-toolbar-items>
      <v-btn to="posts" flat dark>
        Reviews
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn to="myposts" flat dark v-if="$store.state.isUserLoggedIn">
        My Reviews
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn to="login" flat dark v-if="!$store.state.isUserLoggedIn">
          Login
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
        <v-btn to="register" flat dark v-if="!$store.state.isUserLoggedIn">
          Sign Up
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
        <v-btn to="logout" flat dark v-if="$store.state.isUserLoggedIn" @click="logout">
          Logout
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      localStorage.removeItem('token')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
