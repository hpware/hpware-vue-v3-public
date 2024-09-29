<script setup>
// Setup
import { onMounted, ref } from "vue";
onMounted (async () => {
  const source = await fetch("https://api.yuanh.xyz/api/announcements");
  const data = await source.json();
});
</script>

<template>

</template>

<style scoped>

</style>