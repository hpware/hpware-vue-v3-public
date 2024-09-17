<script setup>
export default {
  props: {
    file: {
      type: String,
      required: true
    }
  }
}

</script>

<template>
  <a href={{file}}><img src={{file}} alt={{file}}></a>
</template>

<style scoped>

</style>