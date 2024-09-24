<script setup>
// Default
'use server';
import { ref } from 'vue';
import NavSpace from '@/components/Other/NavSpace.vue';
import cookie from 'vue-cookie';
import CryptoJS from 'crypto-js';
import AES from "crypto-js/aes";
import SHA256 from "crypto-js/sha256";
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
// Ref Logout

// Login Function
const login = ref('no');
const username = ref('');
const ENVusername = import.meta.env.VITE_ADMINUSERNAME;
const cookieUSERNAME = ref(import.meta.env.VITE_ADMINUSERNAME);

const pwd = ref('');
// const ENVpwd = SHA256(import.meta.env.VITE_ADMINPWD).toString();
const ENVpwdHASH = import.meta.env.VITE_ADMINPWDHASH;

// Check Login Creds
if (cookie.get('admin-login') === `yes_${{cookieUSERNAME}}`) {
  window.location.href="/user/admin/panel";
}
const checkUser = () => {
  const pwdHASH = SHA256(pwd.value).toString();
  if (pwdHASH === ENVpwdHASH && username.value === ENVusername) {
    cookie.set('admin-login', `yes_${{username}}` , { expires: '1d' }, );
    login.value = 'yes';
  } else {
    login.value = 'failed';
  }
}

</script>


<template>
  <title>使用者 & 管理員登入系統 | 吳元皓的網站 v3</title>
  <div class="admin-page">
    <div v-if="login === 'no'">
      <p>使用者 & 管理員登入系統</p><br>
      <form @submit="checkUser">
        <label for="username">使用者</label><br>
        <input type="text" id="username" v-model="username" required><br>
        <label for="password">&nbsp;密碼</label><br>
        <input type="password" v-model="pwd" required>
        <br>
        <vue-hcaptcha sitekey="e5d8783a-6408-45fe-a696-26180600ba34" theme="dark" ></vue-hcaptcha>
        <br>
        <button type="submit">送出</button>
      </form>
    </div>
    <div v-if="login === 'failed'">
      <i class="bi bi-person-circle" style="font-size: 3em; color: red;"></i>
      <p>密碼錯誤或使用者不存在  ( •̯́ ^ •̯̀)</p><br>
      <button onclick="window.location.href=window.location.href" style="background-color:khaki">重試</button>
    </div>
    <div v-if="login === 'yes'">
      <meta http-equiv="refresh" content="0;url=/user/admin/panel" />
    </div>
  </div>
</template>

<style scoped>
button {
  color: black;
}
input {
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  color: blue;
}
.not-a-button {
  background-color: transparent;
  border: none;
  color: rgba(191, 191, 191, 0.7);
  font-size: 1.0em;
  cursor: pointer;
  border-radius: 50%;
}
</style>
