<template>
  <input
      :value="modelValue"
      @input="updateInput"
      class="BgGrayInput"
      type="text"
  />
</template>

<script>
export default {
  name: "bg-gray-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event){
      this.$emit("update:modelValue",event.target.value)
    }
  }
}
</script>

<style scoped>
  .BgGrayInput{
    margin-bottom: .5em;
    padding: .65em 1em;
    border: none;
    background: rgba(187, 187, 187, 0.36);
    outline: none;
    border-radius: .25em;
    transition: .25s;
  }
  .BgGrayInput:hover,
  .BgGrayInput:focus{
    background: rgba(187, 187, 187, 0.25);
  }
</style>