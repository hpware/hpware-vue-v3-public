<script setup>
import cookie from "vue-cookie";
import Nav from "@/components/UserPanel/Nav.vue";
const user_account = cookie.get("user_account");
if (!user_account) {
  window.location.href='/user/login';
}
</script>

<template>
<div v-if="user_account">
  <Nav />
  <div>
    <p>此功能未完成 ( •̯́ ^ •̯̀)</p>
    <br />
  </div>
</div>
</template>

<style scoped>

</style>