<template>
  <div class="App">
    <def-modal v-model:show="visibleModal">
      <post-form @createPost="createPost" />
    </def-modal>

    <blue-button @click="showModal">Создать пост</blue-button>

    <posts-list
        :posts="posts"
        @delete="deletePost"
    />
  </div>
</template>

<script>
  import PostForm from "./components/PostForm.vue";
  import PostsList from "./components/PostsList.vue";
  import DefModal from "./ui-components/DefModal.vue";
  import BlueButton from "./ui-components/BlueButton.vue";
  import axios from "axios";

  export default {
    components: {
      BlueButton,
      DefModal,
      PostsList,PostForm,
    },
    data() {
      return {
        posts: [],
        visibleModal: false,
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post);
        this.visibleModal = false;
      },
      deletePost(post){
        this.posts = this.posts.filter(postNow => postNow.id !== post.id)
      },
      showModal(){
        this.visibleModal = true;
      },
      async fetchPosts() {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        this.posts = res.data;
        console.log(res)
      }
    },
    mounted() {
      this.fetchPosts();
    }
  }
</script>

<style>
  .App{
    padding: 1em;
  }
</style>
