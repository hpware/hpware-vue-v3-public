<script setup>
// Default
import { ref } from 'vue';
import NavSpace from '@/components/Other/NavSpace.vue';
// Login Function
const login = ref('no');
const username = ref('');
const ENVusername = import.meta.env.VITE_ADMINUSERNAME;
const pwd = ref('');
const ENVpwd = import.meta.env.VITE_ADMINPWD;
const checkUser = () => {
  if (pwd.value === ENVpwd && username.value === ENVusername) {
    login.value = 'yes';
  } else {
    login.value = 'failed';
  }
}
// Announcements
import Announcements from '@/components/Admin/Announcements.vue'
const AnnouncementsTransition = ref(false);
const toggleAnnouncements = () => {
  AnnouncementsTransition.value = !AnnouncementsTransition.value;
}
//
</script>

<template>
  <div class="admin-page">
    <div v-if="login === 'yes'">
      <h3>管理員系統 (Beta)</h3>
      <button @click="toggleAnnouncements();">更改公告</button>
      <Transition name="fade">
        <div v-if="AnnouncementsTransition">
          <Announcements />
        </div>
      </Transition>
    </div>
    <div v-if="login === 'no'">
      <h3>管理員登入系統 (Beta)</h3>
      <p>這個網頁必須登入才可使用</p><br>
      <form @submit="checkUser">
				<label for="username">使用者</label><br>
				<input type="user" v-model="username" required><br>
        <label for="password">密碼</label><br>
        <input type="password" v-model="pwd" required>
        <br>
        <button type="submit">送出</button>
      </form>
    </div>
    <div v-if="login === 'failed'">
      <h3>管理員登入系統 (Beta)</h3>
      <p>登入失敗☹️</p>
    </div>
  </div>
</template>

<style scoped>
  button {
    color: black;
  }
input, textarea {
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
}
textarea {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
