<script setup>
// Pull URL variables and set to all lowercase
const page_content_URL = new URLSearchParams(location.search).get("page");
let page_content = `${page_content_URL.toLowerCase()}`;
// Import Error page and Vue Ref & defineAsyncComponent
import OopsError from "@/Pages/OopsError.vue";
import { ref, defineAsyncComponent } from "vue";
// Import Web pages.
const pages = {
  lovemusicasia: () => import("@/components/Projects/lovemusicasiasite.vue"),
  "site-v3": () => import("@/components/Projects/site-v3.vue"),
  "adguard-block-list": () =>
    import("@/components/Projects/AdGuardBlockList.vue"),
  "hwtw-cc": () => import("@/components/Projects/hwtw-cc.vue"),
  testconnectcenter: () =>
    import("@/components/Projects/testconnectcenter.vue"),
  linux安裝指令: () => import("@/components/Projects/Linux安裝指令.vue"),
};
const component = ref(null);
if (pages[page_content]) {
  component.value = defineAsyncComponent(pages[page_content]);
  var displaytitle = ref(true);
} else {
  component.value = OopsError;
  var displaytitle = ref(false);
}
</script>

<template>
  <h2 v-if="(displaytitle = true)">關於這個專案</h2>
  <div class="aboutthisproject" id="project">
    <component :is="component"></component>
  </div>
</template>

<style scoped>
div.aboutthisproject {
  body {
    font-size: 1em;
  }
}
</style>
