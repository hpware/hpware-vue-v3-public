<script setup>
import { ref, defineAsyncComponent } from 'vue';
import OopsError from '@/Pages/OopsError.vue';

const page_content_URL = new URLSearchParams(location.search).get("page");
const page_content = page_content_URL ? page_content_URL.toLowerCase() : '';

const componentMap = {
  'lovemusicasia': () => import('@/components/Projects/lovemusicasiasite.vue'),
  'site-v3': () => import('@/components/Projects/site-v3.vue'),
  'adguard-block-list': () => import('@/components/Projects/AdGuardBlockList.vue'),
  'hwtw-cc': () => import('@/components/Projects/hwtw-cc.vue'),
  'testconnectcenter': () => import('@/components/Projects/testconnectcenter.vue'),
  'linux安裝指令': () => import('@/components/Projects/Linux安裝指令.vue')
};

const component = ref(null);

if (componentMap[page_content]) {
  component.value = defineAsyncComponent(componentMap[page_content]);
} else {
  component.value = OopsError;
}
</script>

<template>
  <h3>關於這個專案</h3>
  <div class="aboutthisproject">
    <component :is="component"></component>
  </div>
</template>

<style scoped>
div.aboutthisproject {
  body {
    font-size: 1.0em;
  }
}
</style>