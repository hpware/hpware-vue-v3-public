<script setup>
// Setup
import { onMounted, ref } from "vue";
async function fetchAnnouncements() {
  const fetchURL = await fetch("https://api.github.com/repos/thecyberworld/web3-collaboration/commits?path=announcements.json");
  const data = await fetchURL.json();

}
</script>

<template>

</template>

<style scoped>

</style>