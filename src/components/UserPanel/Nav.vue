<script setup>
import { ref } from "vue";
import NavSpace from "@/components/Other/NavSpace.vue";
import cookie from "vue-cookie";
const ENVusername = import.meta.env.VITE_ADMINUSERNAME;
</script>

<template>
  <button class="not-a-button">
    <a href="/user/accesspanel" class="button1"
      ><i class="bi bi-house"></i> 首頁</a
    >
  </button>
  <button class="not-a-button">
    <a href="/user/logout" class="button1"
      ><i class="bi bi-box-arrow-left"></i> 登出</a
    ></button
  ><br />
  <i class="bi bi-person-circle" style="font-size: 3em; color: #5ad9ef"></i
  ><br /><span style="color: #5ad9ef">{{ ENVusername }}</span
  ><br />
  <span class="user-tag"><i class="bi bi-tag"></i>&nbsp;管理員</span>
  <br />
</template>

<style scoped>
.not-a-button {
  background-color: transparent;
  border: none;
  color: rgba(191, 191, 191, 0.7);
  font-size: 1em;
  cursor: pointer;
  border-radius: 50%;
}
span.user-tag {
  background-color: #676767;
  color: white;
  border-radius: 3em;
  padding: 2px;
  font-size: 0.7em;
}
a.button1 {
  background-color: transparent;
  color: rgba(191, 191, 191, 0.7);
  text-decoration: none;
}
</style>
