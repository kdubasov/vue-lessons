<template>
  <div v-if="posts.length" class="postsList">
    <h3>Список постов</h3>
    <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @delete="$emit('delete',post)"
    />
  </div>
  <h3 v-else style="opacity: .5">
    Список постов пуст
  </h3>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
  .postsList{
    margin-top: 1em;
  }
</style>