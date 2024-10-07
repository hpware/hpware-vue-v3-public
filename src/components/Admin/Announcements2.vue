<script setup>
import { ref } from "vue";
const success = ref("no");
const USER = import.meta.env.VITE_ADMINUSERNAME;
const PWD = import.meta.env.VITE_ADMINPWDHASH;
const announceMsg = ref("");
const errorname = ref("");
async function sendAnnouncement(event) {
  event.preventDefault();
  try {
  const response = await fetch("https://automation.yuanh.xyz/webhook-test/deda467e-f407-48e2-8525-8ffe62208f3c-modify-announcements", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key: "e8290778we",
      username: USER,
      password: PWD,
      announcement: announceMsg.value,
    }),
  });
  success.value = "yes";
  } catch (error) {
    success.value = "no";
    errorname.value = error;
    console.log("Oops! Here is the error code: " + error);
  }
}
</script>
<template>
  <form
      @submit="sendAnnouncement"
      method="POST"
  >
    <label for="announcement">公告訊息</label><br />
    <textarea
      name="announcement"
      id="announcement"
      cols="40"
      rows="10"
      :is="announceMsg"
    ></textarea>
    <br />
    <button type="submit">送出</button>
  </form>
  <p v-if="success === 'yes'">公告已送出！</p>
  <p v-if="success === 'no'">ERR: {{errorname}}</p>
</template>

<style scoped>
input,
textarea {
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
}
input[type="text"] {
  width: 25em;
  font-family: Arial, Helvetica, sans-serif;
}
textarea {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
