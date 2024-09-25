<script setup>
// Pull URL variables and set to all lowercase
const page_content_URL = new URLSearchParams(location.search).get("page");
let page_content = `${page_content_URL.toLowerCase()}`;
// Import Error page and Vue Ref & defineAsyncComponent
import OopsError from "@/Pages/OopsError.vue";
import { ref, defineAsyncComponent } from "vue";
const displaytitle = ref(false);
// Import Web pages
const pages = {
  "github-bot1": () => import("@/components/Bots-Pages/GitHub-Bot1.vue"),
};
const component = ref(null);
if (pages[page_content]) {
  component.value = defineAsyncComponent(pages[page_content]);
  const displaytitle = true;
} else {
  component.value = OopsError;
}
</script>
<template>
  <h2 v-if="(displaytitle = true)">關於這個機器人</h2>
  <div class="aboutthisproject" id="project">
    <component :is="component"></component>
  </div>
</template>
