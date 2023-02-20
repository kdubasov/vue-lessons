<template>
  <div v-if="posts.length" class="postsList">
    <h3>Список постов</h3>
    <transition-group name="post-list-animation">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @delete="$emit('delete',post)"
      />
    </transition-group>
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

  .post-list-animation-item{
    display: inline-block;
    margin-right: 10px;
  }
  .post-list-animation-enter-active,
  .post-list-animation-leave-active{
    transition: all .3s ease;
  }
  .post-list-animation-enter-from,
  .post-list-animation-leave-to{
    opacity: 0;
    transform: translateX(30px);
  }
</style>