<script setup>
// Pull URL variables and set to all lowercase
const page_content_URL = new URLSearchParams(location.search).get("page");
let page_content = `${page_content_URL.toLowerCase()}`;
// Import Error page and Vue Ref & defineAsyncComponent
import OopsError from "@/Pages/OopsError.vue";
import { ref, defineAsyncComponent } from "vue";
// Import Web pages.
const pages = {
  "lmsite-tw": () => import("@/components/GitHub-Orgs/lmsite-tw.vue"),
};
const component = ref(null);
if (pages[page_content]) {
  component.value = defineAsyncComponent(pages[page_content]);
} else {
  component.value = OopsError;
}
</script>
<template>
  <h2 v-if="(displaytitle = true)">關於這個GitHub組織</h2>
  <div class="aboutthisproject" id="project">
    <component :is="component"></component>
  </div>
  <title>關於這個GitHub組織 | 吳元皓的網站 v3</title>
</template>
