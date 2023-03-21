<template>
  <div>
    <def-modal v-model:show="visibleModal">
      <post-form @createPost="createPost" />
    </def-modal>

    <blue-button @click="showModal">Создать пост</blue-button>

    <br><br>
    <bg-gray-input
        v-model="searchQuery"
        placeholder="Поиск"
    />
    <br><br>

    <div class="pagination">
      <div v-for="page in totalPages" :key="page">
        <button @click="changePage(page)" :class="{'active': page === nowPage}">{{ page }}</button>
      </div>
    </div>

    <posts-list
        :posts="searchSort"
        @delete="deletePost"
    />
  </div>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import PostsList from "../components/PostsList.vue";
import DefModal from "../ui-components/DefModal.vue";
import BlueButton from "../ui-components/BlueButton.vue";
import axios from "axios";

export default {
  components: {
    BlueButton,
    DefModal,
    PostsList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      visibleModal: false,
      searchQuery: "",
      nowPage: 1,
      limitPostPage: 10,
      totalPages: 0,
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
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts",{
        params: {
          _page: this.nowPage,
          _limit: this.limitPostPage,
        }
      })
      this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limitPostPage)
      this.posts = res.data;
      console.log(res)
    },
    changePage(pageNum) {
      this.nowPage = pageNum;
      this.fetchPosts()
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    searchSort() {
      return this.posts.filter(elem => elem.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
}
</script>

<style scoped>
  .pagination{
    display: flex;
  }
  .pagination button{
    padding: .25em .5em;
    margin: 0 .15em;
    background: #008bff;
    border: 2px solid #008bff;
    color: white;
    border-radius: .25em;
  }
  .pagination button.active{
    background: none;
    color: #008bff;
  }
</style>