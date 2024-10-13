<script setup>
// Default
import { ref } from "vue";
import cookie from "vue-cookie";
import CryptoJS from "crypto-js";
import AES from "crypto-js/aes";
import SHA256 from "crypto-js/sha256";
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";

import NavSpace from "@/components/Other/NavSpace.vue";
import Nav from "@/components/UserPanel/Nav.vue";
import Error from "@/components/UserPanel/Error.vue";
const user_account = cookie.get("user_account");
if (!user_account) {
  window.location.href='/user/login';
}
</script>

<template>
  <title>公車追蹤 | 吳元皓的網站 v3</title>
  <div v-if="user_account">
    <Nav />
  <div>
    <p>此功能未完成 ( •̯́ ^ •̯̀)</p>
    <br />
  </div>
  </div>
</template>

<style scoped></style>
