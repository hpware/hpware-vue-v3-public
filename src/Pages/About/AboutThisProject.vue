<script setup type="module">
// Import Web pages.
import SiteV3 from '@/components/Projects/site-v3.vue';
import Lovemusicasiasite from '@/components/Projects/lovemusicasiasite.vue';
import AdGuardBlockList from '@/components/Projects/AdGuardBlockList.vue';
import hwtw_cc from '@/components/Projects/hwtw-cc.vue';
import LinuxInstallScript from '@/components/Projects/Linux安裝指令.vue';
import testconnectcenter from '@/components/Projects/testconnectcenter.vue';
// Import OopsError + CSS
import OopsError from '@/Pages/OopsError.vue';
// Pull URL variables and set to all lowercase
const page_content_URL = new URLSearchParams(location.search).get("page");
let page_content = `${page_content_URL.toLowerCase()}`;
</script>

<template>
  <div class="aboutthisproject">
  <div v-if="page_content === 'lovemusicasia'">
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
    <div v-else-if="page_content === 'testconnectcenter'">
      <testconnectcenter />
    </div>
    <div v-else-if="page_content === 'linux安裝指令' ">
      <LinuxInstallScript />
    </div>
  <div v-else>
    <OopsError />
  </div>
  </div>
</template>

<style scoped>
div.aboutthisproject {
  body {
    font-size: 1.0em;
  }
}
</style>