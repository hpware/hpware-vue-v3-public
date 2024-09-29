<script setup>
import { ref } from "vue";
const success = ref("nan");
const USER = import.meta.env.VITE_ADMINUSERNAME;
const PWD = import.meta.env.VITE_ADMINPWD;
</script>
<template>
  <form
    action="https://automation.yuanh.xyz/webhook/e8290778-734f-4ea6-81c1-858ec28273123ke-公告訊息輸入"
    method="POST"
  >
    <input type="hidden" name="key" value="e8290778we" />
    <input type="hidden" name="username" id="username" :value="USER" />
    <input type="hidden" name="password" id="password" :Value="PWD" />
    <br />
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
