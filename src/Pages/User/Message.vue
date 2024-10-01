<script setup>
import { ref } from "vue";
import NavSpace from "@/components/Other/NavSpace.vue";
import cookie from "vue-cookie";
import Nav from "@/components/UserPanel/Nav.vue";
// Function
const ENVusername = import.meta.env.VITE_ADMINUSERNAME;
const logged_in = ref("no");
if (cookie.get("admin-login") === `yes_${{ ENVusername }}`) {
  logged_in.value = "yes";
}
// Message
const n8nURL = new URLSearchParams(window.location.search).get("n8n");
const n8n = ref(n8nURL);
</script>

<template>
  <Nav/>
<div v-if="n8n === setannocementsuccess">
  <p>Announcement created successfully.</p>
</div>
  <div v-else>
    <p>Error: Could not display message.</p>
  </div>
</template>

<style scoped>

</style>