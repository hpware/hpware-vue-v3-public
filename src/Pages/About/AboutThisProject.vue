<script setup type="module">
// Import Web pages.
import SiteV3 from '@/components/Projects/site-v3.vue';
import Lovemusicasiasite from '@/components/Projects/lovemusicasiasite.vue';
import AdGuardBlockList from '@/components/Projects/AdGuardBlockList.vue';
import hwtw_cc from '@/components/Projects/hwtw-cc.vue';
// Import OopsError
import OopsError from '@/Pages/OopsError.vue';
// Pull URL variables and set to all lowercase
const page_content_URL = new URLSearchParams(location.search).get("page");
let page_content = `${page_content_URL.toLowerCase()}`;
</script>

<template>
  <div v-if="page_content === 'lovemusicasiasite'">
    <Lovemusicasiasite />
  </div>
  <div v-else-if="page_content === 'site-v3'">
    <SiteV3 />
  </div>
  <div v-else-if="page_content === 'adguard-block-list'">
    <AdGuardBlockList />
  </div>
  <div v-else-if="page_content === 'hwtw-cc'">
    <hwtw_cc />
  </div>
  <div v-else>
    <OopsError />
  </div>
</template>

<style scoped>
p.text-error {
    font-size: 1.5em;
    margin-bottom: 0;
}
body {
  font-size: 1.0em;
}
</style>