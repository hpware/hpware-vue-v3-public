<script setup>
import { ref, onMounted } from "vue";
const announcement = ref("");
const set = ref(false);
const onoff = ref("");

onMounted(getAnnouncement());

async function getAnnouncement() {
  const response = await fetch("https://automation.yuanh.xyz/webhook/dad87a87-c270-49d3-ba5d-88c20246bd67-announcement");
  const data = await response.json();
  const onoff = data[0].on_off;
  announcement.value = data[0].Annocement;
}
</script>

<template>
  <div class="a">
    <p v-if="onoff === true"><i class="bi bi-megaphone-fill"></i>&nbsp;<span>{{announcement}}</span></p>
  </div>
</template>
<style scoped>

.a {
  font-size: 0.6em;
  color: yellow;
}
a {
  color: rgba(255, 255, 0, 0.94);
}
a:hover {
  color: rgba(255, 255, 0, 0.87);
}
</style>