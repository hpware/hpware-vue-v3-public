<script setup>
import { ref } from "vue";
const success = ref("nan");
const USER = import.meta.env.VITE_ADMINUSERNAME;
const PWD = import.meta.env.VITE_ADMINPWDHASH;
</script>

<template>
  <form
    action="https://automation.yuanh.xyz/webhook-test/16f0960e-10c2-4254-9491-480bfdf463d6-createblog"
    Method="POST"
  >
    <input type="hidden" name="key" value="16f0960ed6" />
    <input type="hidden" name="username" id="username" :value="USER" />
    <input type="hidden" name="password" id="password" :Value="PWD" />
    <br />
    <label for="title">文章標題</label><br />
    <input type="text" name="title" id="title" required style="width: 20em" />
    <br />
    <label for="announcement">新增文章</label><br />
    <textarea name="post" id="post" cols="40" rows="10" :is="post"></textarea>
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
textarea {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
