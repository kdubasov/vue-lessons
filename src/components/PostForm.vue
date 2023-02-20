<template>
  <form class="add-post" @submit.prevent>
    <bg-gray-input
        v-model="formAdd.title"
        type="text"
        placeholder="Title"
    />
    <bg-gray-input
        v-model="formAdd.body"
        type="text"
        placeholder="Text"
    />

    <blue-button @click="createPost">Добавить</blue-button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      formAdd: {
        title: "",
        body: "",
      }
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.formAdd.title,
        body: this.formAdd.body,
        date: new Date(Date.now()).toLocaleDateString(),
      };
      this.$emit("createPost", newPost)
      this.formAdd = {title: "", body: "",};
    },
  }
}
</script>

<style scoped>
  form.add-post{
    width: 100%;
    padding: .5em;
    border-radius: .25em;
    border: 2px solid rgba(145, 143, 143, 0.36);
    display: flex;
    flex-direction: column;
  }
</style>
