<script setup>
import { ref } from "vue";
import NavSpace from "@/components/Other/NavSpace.vue";
import cookie from "vue-cookie";
const ENVusername = import.meta.env.VITE_ADMINUSERNAME;
// Change Password & Logout
const changePasswordAction = () => {
  window.location.href = "/user/area/hashcreate?changepwd";
};
const logoutAction = () => {
  window.location.href = "/user/logout";
};
const HomeAction = () => {
  window.location.href = "/user/AccessPanel";
};
</script>

<template>
  <button @click="HomeAction" class="not-a-button">
    <i class="bi bi-house"></i> 首頁
  </button>
  <button @click="logoutAction()" class="not-a-button">
    <i class="bi bi-box-arrow-left"></i>登出</button
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
</style>
