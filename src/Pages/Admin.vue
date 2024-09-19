<script setup>
// Default
import { ref } from 'vue';
import NavSpace from '@/components/Other/NavSpace.vue';
// Login Function
const login = ref('no');
// const username = ref('');
// const ENVusername = import.meta.env.VITE_ADMINUSERNAME;
const pwd = ref('');
const ENVpwd = import.meta.env.VITE_ADMINPWD;
const checkUser = () => {
  if (pwd.value === ENVpwd) {
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
      <h3>Admin Page</h3>
      <p>Panels:</p><br>
      <button @click="toggleAnnouncements();">公告更改</button>
      <Transition name="fade">
        <div v-if="AnnouncementsTransition">
          <Announcements />
        </div>
      </Transition>
    </div>
    <div v-if="login === 'no'">
      <h3>Admin Login Page</h3>
      <p>You are trying to access a password protected area.</p><br>
      <form @submit="checkUser">
				<!--<label for="username">User</label><br>
				<input type="user" v-model="username"><br>-->
        <label for="password">Password</label><br>
        <input type="password" v-model="pwd" required>
        <br>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div v-if="login === 'failed'">
      <h3>Admin Page</h3>
      <p>Failed to login</p>
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
