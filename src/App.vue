<template>
  <div class="App">
    <post-form @createPost="createPost" />
    <posts-list
        :posts="posts"
        @delete="deletePost"
    />
  </div>
</template>

<script>
  import PostForm from "./components/PostForm.vue";
  import PostsList from "./components/PostsList.vue";

  export default {
    components: {
      PostsList,PostForm,
    },
    data() {
      return {
        posts: [
          {id:1, title: "JavaScript", text: "Статья о языке JavaScript", date: "11:25 12/02/2023"},
          {id:2, title: "TypeScript", text: "Статья о языке TypeScript", date: "17:21 11/02/2023"},
          {id:3, title: "GO", text: "Статья о языке GO", date: "23:16 11/12/2022"},
        ],
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post);
      },
      deletePost(post){
        this.posts = this.posts.filter(postNow => postNow.id !== post.id)
      }
    },
  }
</script>

<style>
  .App{
    padding: 1em;
  }
</style>