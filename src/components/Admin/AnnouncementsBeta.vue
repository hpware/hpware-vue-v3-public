<script setup>
import { ref } from "vue";
const success = ref("nan");
const USER = import.meta.env.VITE_ADMINUSERNAME;
const PWD = import.meta.env.VITE_ADMINPWD;
const Announce = (AnnounceMsg) => {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://automation.yuanh.xyz/webhook/e8290778-734f-4ea6-81c1-858ec28273123ke-公告訊息輸入", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
      JSON.stringify({
        key: "e8290778we",
        username: USER,
        password: PWD,
        announcement: announceMsg.value,
      }),
  );
};
</script>
<template>
  <br />
  <form @submit="Announce">
    <label for="announcement">公告訊息 {Beta}</label><br>
    <input type="text" name="announceMsg" id="announceMsg" v-model="announceMsg"></input>
    <br>
    <button type="submit">送出</button>
  </form>
  <p v-if="success === 'yes'">公告更改成功</p>
  <p v-else-if="success === 'no'">公告更改失敗</p>
  <p v-else-if="success === 'nan'"></p>
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
