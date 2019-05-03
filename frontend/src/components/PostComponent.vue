<template>
  <div class="container" v-if="$store.state.isUserLoggedIn">
    <h1>Latest Posts</h1>
    <!-- CREATE POST HERE -->
    <div class="create-post">

      <form @submit.prevent="createPost" enctype="multipart/form-data">
        <div class="form-group">
          <label for="title">
            Title
          </label>
          <input class="form-control" type="text" name="title" v-model="form.title"/>
        </div>
        <div class="form-group">
          <label for="category">
            Category
          </label>
          <input class="form-control" type="text" name="category" v-model="form.category"/>
        </div>
        <div class="form-group">
          <label for="description">
            Description
          </label>
          <input class="form-control" type="text" name="description" v-model="form.description"/>
        </div>
        <div class="form-group">
            <star-rating v-model="form.rating"></star-rating>
        </div>

        <input 
          type="file" 
          name="photo"
          ref="file"
          @change="selectFile"
        />
        <button class="btn btn-primary" type="submit">
          Upload Photo
        </button>
      </form>

    </div>
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
        {{ `${post.title}`}}
        <br>
        {{ `${post.description}`}}
        <br>
        {{ `${post.rating}`}}

      </div>
    </div>
  
  </div>
</template>

<script>
import PostService from '../services/PostService';
import axios from 'axios';

// url to the posts file
// vaihto
//const API_URL = 'https://localhost:3000/posts/';

const API_URL = 'https://reviewer.jelastic.metropolia.fi/posts/';

export default {
  name: 'PostComponent',

  // Component state
  data() {
    return {
      posts: [],
      error: '',
      form: {
        author: '',
        category: '',
        title: '',
        description: '',
        rating: 0,
        photo: '',
      }
    }
  },

  // When component is created/initialized
  async created() {

    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },

  // Custom methods that we create
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
      this.form.photo = this.file;
    },
    async createPost() {

      const url = `${API_URL}/upload`;

      const formData = new FormData();

      const user_id = localStorage.getItem('user_id').toString();

      console.log(user_id);

      formData.append('author', user_id);
      formData.append('category', this.form.category);
      formData.append('title', this.form.title);
      formData.append('description', this.form.description);
      formData.append('rating', this.form.rating);
      formData.append('photo', this.file);

      axios.post(url, formData).then(response => {
        console.log(response);
        try {
          this.posts = PostService.getPosts();
        } catch(err) {
          this.error = err.message;
        }
      })
      .catch(error => {
        alert(error);
      });
    },

    async deletePost(id) {
      await PostService.deletePost(id);

      try {
        this.posts = await PostService.getPosts();
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
