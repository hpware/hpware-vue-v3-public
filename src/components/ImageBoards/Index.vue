<script setup>
import { ref } from "vue";

const url = import.meta.url;
const path = new URL(url).pathname;
const ImageBoards = path.match(/\/components\/ImageBoards\/(.*)\.vue$/)[1];
const modules = ref([]);

for (const ImageBoard of ImageBoards) {
  if (ImageBoard !== "Index") {
    import(`@/components/ImageBoards/${ImageBoard}.vue`)
      .then((module) => {
        modules.value.push(module);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
</script>

<template>
  <div v-for="module in modules" :key="module.default.name">
    <component :is="module.default"></component>
  </div>
</template>

<style scoped></style>
