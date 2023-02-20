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

  export default {
    components: {
      BlueButton,
      DefModal,
      PostsList,PostForm,
    },
    data() {
      return {
        posts: [
          {id:1, title: "JavaScript", text: "Статья о языке JavaScript", date: "11:25 12/02/2023"},
          {id:2, title: "TypeScript", text: "Статья о языке TypeScript", date: "17:21 11/02/2023"},
          {id:3, title: "GO", text: "Статья о языке GO", date: "23:16 11/12/2022"},
        ],
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
      }
    },
  }
</script>

<style>
  .App{
    padding: 1em;
  }
</style>
