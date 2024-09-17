<script setup>
import { ref } from 'vue';
import Index from '@/components/ImageBoards/Index.vue';

const page_content_URL = new URLSearchParams(location.search).get("page");
const page_content = page_content_URL ? page_content_URL.toLowerCase() : 'index';
const modules = ref([]);

const ImageBoards = path.match(/\/components\/ImageBoards\/(.*)\.vue$/)[1];

ImageBoards.forEach(ImageBoard => {
  if (ImageBoard.toLowerCase() !== 'index') {
    import(`@/components/ImageBoards/${ImageBoard}.vue`).then(module => {
      if (module.default.name.toLowerCase() === page_content) {
        modules.value.push(module.default);
      }
    }).catch(err => {
      console.error(`Failed to load component ${ImageBoard}:`, err);
    });
  }
});
</script>

<template>
  <h2>照片集</h2>
  <div v-if="page_content === 'index'">
    <Index />
  </div>
  <div v-else>
    <component v-for="module in modules" :is="module" :key="module.name"></component>
  </div>
</template>

<style scoped>
</style>