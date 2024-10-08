<script setup>
// Setup
import { onMounted, ref } from "vue";
async function fetchAnnouncements() {
  const fetchURL = await fetch("https://automation.yuanh.xyz/webhook/dad87a87-c270-49d3-ba5d-88c20246bd67-announcement");
  const data = await fetchURL.json();
}
const msgon = ref(false);
const msg = ref("");
const loading = ref(true);
async function getAnnouncement() {
  const pullURL = await fetch("https://automation.yuanh.xyz/webhook/de40c623-d72d-4b9a-9de6-088bd3c13472-2024-12-fetch-announcement-data");
  const pullData = await pullURL.json();
  msgon.value = pullData.onoff;
  if (msgon.value === true) {
    msg.value = pullData.msg;
    }
  loading.value = false;
}
onMounted(getAnnouncement());
</script>

<template>

</template>

<style scoped>

</style>