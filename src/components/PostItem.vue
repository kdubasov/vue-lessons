<template>
  <div class="post">
    <div class="content">
      <h3 class="title">{{post.title}}</h3>
      <p class="text">
        {{ post.text }}
      </p>
      <small>{{ post.date }}</small>
    </div>
    <div class="bts">
      <blue-button @click="$emit('delete',post)">Удалить</blue-button>
      <blue-button>Изменить</blue-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post{
  width: 50%;
  margin: .5em 0;
  padding: 1em;
  border: 2px solid #008bff;
  border-radius: 10px;
}

.post .bts{
  margin-top: .5em;
}
.post .bts button:first-child{
  margin-right: .5em;
}
</style>