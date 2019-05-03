<template>
  <div class="container" v-if="$store.state.isUserLoggedIn">
    <h1>My Reviews</h1>
    Double click a review to delete it.
    <hr>
    <p class="error" v-if="error">{{ error }} </p>
    <div class="posts-container">
      <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
        <!-- {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}} -->
        <p class="text">{{ post.category }}</p>
        <img class="img-responsive" v-bind:src="post.thumbnailPath"/>
        <br>
        Title: {{ `${post.title}`}}
        <br>
        Description: {{ `${post.description}`}}
        <br>
        Rating: {{ `${post.rating}`}}

      </div>
    </div>
  
  </div>
</template>

<script>
import PostService from '../services/PostService';
import axios from 'axios';

// url to the posts file
// vaihto
//const API_URL = 'https://localhost:3000/posts/my';

const API_URL = 'https://reviewer.jelastic.metropolia.fi/posts/my';

export default {
  name: 'MyPosts',

  // Component state
  data() {
    return {
      posts: [],
      error: '',
    }
  },

  // When component is created/initialized
  async created() {

    try {
      this.posts = await PostService.myPosts();
    } catch(err) {
      this.error = err.message;
    }
  },

  // Custom methods that we create
  methods: {
    async deletePost(id) {
      await PostService.deletePost(id);

      try {
        this.posts = await PostService.myPosts();
      } catch(err) {
        this.error = err.message;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
