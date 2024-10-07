<script setup>
import { ref } from "vue";
const success = ref("");
const errormsg = ref("");
const USER = import.meta.env.VITE_ADMINUSERNAME;
const PWD = import.meta.env.VITE_ADMINPWDHASH;
const title = ref("");
const post = ref("");
async function submit(event) {
  event.preventDefault();
  try {
    const Request = await fetch("https://automation.yuanh.xyz/webhook-test/16f0960e-10c2-4254-9491-480bfdf463d6-createblog",
        {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            key: '16f0960ed6',
            username: USER,
            password: PWD,
            title: title.value,
            post: post.value,
          })
        })
    success.value = "yes";
  } catch (error) {
    errormsg.value = error;
    success.value = "no";
  }

}
</script>

<template>
  <br/>
  <form
    @submit.prevent="submit();"
    Method="POST"
  >
    <label for="title">文章標題</label><br />
    <input type="text" name="title" id="title" required style="width: 20em" />
    <br />
    <label for="announcement">新增文章</label><br />
    <textarea name="post" id="post" cols="40" rows="10" :is="post"></textarea>
    <br />
    <button type="submit">送出</button>
  </form>
  <p v-if="success === 'yes'">文章已送出！</p>
  <p v-if="success === 'no'">ERR: {{errormsg}}</p>
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
