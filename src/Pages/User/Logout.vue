<script setup>
import cookie from "vue-cookie";
cookie.set('admin-login', '' ,);
</script>

<template>
  <h4>你已登出成功!</h4>
  <p>將在2秒後自動導向至登入頁面...</p>
<meta http-equiv="refresh" content="2;url=/user/admin/login" />
</template>

<style scoped>

</style>