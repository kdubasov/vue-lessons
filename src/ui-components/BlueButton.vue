<template>
  <button class="BlueButton">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "blue-button"
  }
</script>

<style scoped>
.BlueButton{
  cursor: pointer;
  background: #008bff;
  border: none;
  border-radius: .25em;
  color: #FFF;
  font-weight: 600;
  padding: .65em 1em;
  transition: .25s;
}
.BlueButton:hover{
  background: #0062b6;
}
</style>