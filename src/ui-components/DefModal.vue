<template>
  <div class="DefModal" v-if="show" @click="hideDialog">
    <div @click.stop class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'def-modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hideDialog(){
      this.$emit('update:show',false)
    }
  }
}
</script>

<style scoped>
  .DefModal{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .DefModal .content{
    min-width: 300px;
    min-height: 150px;
    background: white;
    border-radius: 5px;
    padding: 1em;
  }
</style>
