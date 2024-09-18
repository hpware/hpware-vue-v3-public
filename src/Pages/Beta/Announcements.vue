<script setup>
import { ref , onMounted } from 'vue';

const URL = 'https://automation.yuanh.xyz/webhook/e8290778-734f-4ea6-81c1-858ec28273123ke-公告訊息輸入';
const success = ref("nan");
onMounted(() => {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  fetch(URL, {
    method: 'POST',
    body: new FormData(form)
  }).then(response => {
    if (response.contains === "Workflow was started" ) {
      const success = 'yes';
    } else {
      const success = 'fail';
    }
  })
      .catch(() => {
        success.value = false;
      });
  });
});
</script>

<template>
  <h2>公告更改</h2>
  <p v-if="success === 'yes'">公告更改成功</p>
  <p v-else-if="success === 'fail'">公告更改失敗</p>
  <p v-else-if="success === 'nan'"></p>

  <form>
    <input type="hidden" name="key" value="e8290778-734f-4ea6-81c1-858ec28273123ke">
    <label for="email">Email</label><br>
    <input type="email" name="email" placeholder="example@example.com" required>
    <br><br>
    <label for="username">使用者</label><br>
    <input type="username" name="username" id="username" placeholder="@example" required>
    <br><br>
    <label for="password">密碼</label><br>
    <input type="password" name="password" id="password" placeholder="" required>
    <br><br>
    <label for="announcement">公告訊息</label><br>
    <input type="text" id="announcement" name="announcement" required>
    <br><br>
    <button type="submit">送出</button>
  </form>
</template>

<style scoped>

</style>