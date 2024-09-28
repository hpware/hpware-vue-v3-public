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
const passwdcreate = new URLSearchParams(location.search).get("pc");
const user_account = cookie.get("user_account");
const SHA256hash = ref("");

let hashcreated = ref("no");
const createHash = (event) => {
  event.preventDefault();
  SHA256hash.value = SHA256(password.value).toString();
  hashcreated.value = "yes";
};
const copyhash = () => {
  navigator.clipboard.writeText(SHA256hash.value);
  document.getElementById("clipboard").innerHTML =
    "<i class='bi bi-check'></i>";
  setTimeout(() => {
    document.getElementById("clipboard").innerHTML =
      "<i class='bi bi-clipboard'></i>";
  }, 300);
};
</script>
<template>
  <title>Hash 產生 | 吳元皓的網站 v3</title>
  <div v-if="user_account">
    <Nav />
    <h4 style="margin-bottom: 1em">更改密碼</h4>
    <form @submit="createHash">
      <input type="password" v-model="password" id="password" required /><br />
      <button type="submit">送出</button>
    </form>
    <div v-if="hashcreated === 'yes'">
      <span class="smalltext">SHA256 Hash: <br />{{ SHA256hash }}</span
      ><button
        class="not-a-button clipboard"
        @click="copyhash()"
        id="clipboard"
        alt="複製"
      >
        <i class="bi bi-clipboard"></i>
      </button>
      <div v-if="passwdcreate === '1'">
        <p class="smalltext margin">
          密碼請去<a href="https://vercel.app">Vercel</a>上更改
        </p>
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<style scoped>
input {
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  background: rgba(16, 165, 177, 0.76);
  color: white;
  width:300px;
}
.not-a-button {
  background-color: transparent;
  border: none;
  color: rgba(191, 191, 191, 0.7);
  font-size: 1em;
  cursor: pointer;
  border-radius: 50%;
}
.clipboard {
  transition: all 1s;
  font-size: 0.8em;
}
.smalltext {
  font-size: 0.8em;
}
.margin {
  margin-top: 0em;
}
</style>
