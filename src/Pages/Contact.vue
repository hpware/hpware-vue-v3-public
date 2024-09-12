<script setup>

</script>

<template>
  <h2>連絡</h2>
  <form>
    <input type="text" placeholder="姓名"><br>
    <input type="email" placeholder="電子郵件"><br>
    <textarea placeholder="訊息"></textarea><br>
    <button @onclick="">送出</button>
  </form>
</template>

<style scoped>
input{
  width: 60%;
  margin-bottom: 1em;
  background-color: burlywood;
}
</style>