<script setup>
const page_content_URL = new URLSearchParams(location.search).get("page");
let page_content = `${page_content_URL.toLowerCase()}`;
// Import Content
import OopsError from '@/Pages/OopsError.vue';
import GitHubBot1 from '@/components/Bots-Pages/GitHub-Bot1.vue';
</script>

<template>
  <div v-if="page_content === 'github-bot1'">
    <GitHubBot1 />
  </div>
  <div v-else>
    <OopsError />
  </div>
</template>

<style scoped>

</style>