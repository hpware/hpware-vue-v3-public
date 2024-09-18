<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  const dateInput = document.getElementById('date');
  const now = new Date();
  const formattedDate = now.toISOString();
  dateInput.value = formattedDate;
});
</script>

<template>
  <h2>公告更改</h2>
  <form action="https://automation.yuanh.xyz/webhook/e8290778-734f-4ea6-81c1-858ec28273123ke-公告訊息輸入" method="POST">
    <input type="hidden" name="key" value="e8290778we">
    <label for="email">Email</label><br>
    <input type="email" name="email" placeholder="example@example.com" required>
    <br>
    <label for="username">使用者</label><br>
    <input type="username" name="username" id="username" placeholder="@example" required>
    <br>
    <label for="password">密碼</label><br>
    <input type="password" name="password" id="password" placeholder="" required>
    <br>
    <label for="announcement">公告訊息</label><br>
  <textarea name="announcement" id="announcement" cols="40" rows="10"></textarea>
    <br>
    <button type="submit">送出</button>
  </form>
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