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

// Ref Logout

// Login Function
const login = ref("no");
const username = ref("");
const ENVusername = import.meta.env.VITE_ADMINUSERNAME;
const cookieUSERNAME = ref(import.meta.env.VITE_ADMINUSERNAME);

const pwd = ref("");
// const ENVpwd = SHA256(import.meta.env.VITE_ADMINPWD).toString();
const ENVpwdHASH = import.meta.env.VITE_ADMINPWDHASH;

// Captcha
const captchaToken = ref("");
const onCaptchaVerified = (token) => {
  captchaToken.value = token;
};

// Check Login Creds
if (cookie.get("admin-login") === `yes_${{ cookieUSERNAME }}`) {
  window.location.href = "/user/accesspanel";
}
const checkUser = (event) => {
  event.preventDefault();
  if (!captchaToken.value) {
    alert("請先完成不是機器人驗證");
    return;
  }
  const pwdHASH = SHA256(pwd.value).toString();
  if (pwdHASH === ENVpwdHASH && username.value === ENVusername) {
    cookie.set("admin-login", `yes_${{ username }}`, { expires: "1d" });
    cookie.set("user_account", `${{ username }})`, { expires: "1d" });
    login.value = "yes";
  } else {
    login.value = "failed";
  }
};
</script>

<template>
  <title>使用者 & 管理員登入系統 | 吳元皓的網站 v3</title>
  <div class="admin-page">
    <div class="logincool">
    <div v-if="login === 'no'" class="login-form">
      <p>使用者 & 管理員登入系統</p>
      <br />
      <form @submit="checkUser">
        <label for="username">使用者</label><br />
        <input type="text" id="username" v-model="username" required /><br />
        <label for="password">&nbsp;密碼</label><br />
        <input type="password" v-model="pwd" required />
        <br />
        <vue-hcaptcha
          sitekey="e5d8783a-6408-45fe-a696-26180600ba34"
          theme="dark"
          @verify="onCaptchaVerified"
        ></vue-hcaptcha>
        <br />
        <button type="submit">送出</button>
      </form>
    </div>
    </div>
    <div v-if="login === 'failed'">
      <Error />
    </div>
    <div v-if="login === 'yes'">
      <meta http-equiv="refresh" content="0;url=/user/accesspanel" />
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
  background: rgba(141, 141, 141, 0.36);
  color: white;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius:10px;
}
.not-a-button {
  background-color: transparent;
  border: none;
  color: rgba(191, 191, 191, 0.7);
  font-size: 1em;
  cursor: pointer;
  border-radius: 50%;
}
div.login-form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #5050503c;
  border-radius: 10px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  --webkit-box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
}
</style>
