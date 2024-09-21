<script setup>
import { ref } from 'vue';
const success = ref("nan");
const USER = import.meta.env.VITE_ADMINUSERNAME;
const PWD = import.meta.env.VITE_ADMINPWD;
const Announce = () => {
  Annoounce.preventDefault();
  fetch('https://automation.yuanh.xyz/webhook-test/e8290778-734f-4ea6-81c1-858ec28273123ke-公告訊息輸入', {
    method: 'POST',
    body: JSON.stringify({
      key: 'e8290778we',
      username: USER,
      password: PWD,
      announcement: announceMsg.value,
    }),
  }).then(response => {
    if (response.contains === "Workflow was started" ) {
      const success = 'yes';
    } else {
      const success = 'no';
      console.log(response);
    }
  })
      .catch(() => {
        const success = 'no';
      });
}
</script>
<template>
  <form action="https://automation.yuanh.xyz/webhook/e8290778-734f-4ea6-81c1-858ec28273123ke-公告訊息輸入" method="POST">
    <input type="hidden" name="key" value="e8290778we">
    <input type="hidden" name="username" id="username" :value="USER">
    <input type="hidden" name="password" id="password" :Value="PWD">
    <br>
    <label for="announcement">公告訊息</label><br>
    <textarea name="announcement" id="announcement" cols="40" rows="10" :is="announceMsg"></textarea>
    <br>
    <button type="submit">送出</button>
  </form>
  <!--
  <form @submit="Announce">
    <label for="announcement">公告訊息</label><br>
    <textarea name="announcement" id="announcement" cols="40" rows="10"></textarea>
    <br>
    <button type="submit">送出</button>
    <p v-if="success === 'yes'">公告更改成功</p>
    <p v-else-if="success === 'no'">公告更改失敗</p>
    <p v-else-if="success === 'nan'"></p>

  </form>-->
</template>

<style scoped>
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
