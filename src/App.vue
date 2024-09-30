<script setup>
import { ref } from "vue";
const navmobile = ref(false);
import Announcement from "@/components/Announcement.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav>
    <h1 class="nametitle">
      yuanh.xyz<button
        @click="navmobile = !navmobile"
        class="not-a-button navkey"
      >
        <i class="bi bi-list"></i>
      </button>
    </h1>
    <Announcement />
    <div class="nav-mobile">
      <Transition name="fade">
        <div v-if="navmobile" style="color: rgba(191, 191, 191, 0.7)">
          <RouterLink to="/">首頁</RouterLink>&nbsp;
          <RouterLink to="/Projects">專案</RouterLink>&nbsp;
          <RouterLink to="/Other">其他</RouterLink>
        </div>
      </Transition>
    </div>

    <div class="nav-desktop">
      <RouterLink to="/">首頁</RouterLink>&nbsp;
      <RouterLink to="/Projects">專案</RouterLink>&nbsp;
      <RouterLink to="/Other">其他</RouterLink>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <br /><br />
    <a href="/Go?l=gh" target="_blank" rel="noopener"
      ><i class="bi bi-github"></i></a
    >&nbsp;
    <a href="/Go?l=ig" target="_blank" rel="noopener"
      ><i class="bi bi-instagram"></i></a
    >&nbsp;
    <a href="/Go?l=th" target="_blank" rel="noopener"
      ><i class="bi bi-threads"></i></a
    >&nbsp;
    <a href="/Go?l=em" target="_blank" rel="noopener"
      ><i class="bi bi-envelope"></i></a
    >&nbsp;
    <a href="/go?l=dc" target="_blank" rel="noopener"
      ><i class="bi bi-discord"></i></a
    >&nbsp;
    <p>&copy; {{ new Date().getFullYear() }} 吳元皓</p>
    <p style="font-size:0.6em;">想用Ai來掃描網站嗎? 請看<a href="/Scraper" style="font-size:1em;">這裡</a></p>
  </footer>
</template>

<style scoped>
footer {
  a {
    color: aqua;
  }
  p {
    font-size: 0.8em;
    margin-top: 0;
  }
}
div.nav-mobile {
  display: none;
}
.not-a-button {
  background-color: transparent;
  border: none;
  color: rgba(191, 191, 191, 0.7);
  font-size: 1em;
  cursor: pointer;
  border-radius: 50%;
}

div.nav-desktop {
  display: block;
}
@media (max-width: 600px) {
  div.nav-mobile {
    display: block;
  }
  div.nav-desktop {
    display: none;
  }
  h1 {
    font-size: 2em;
  }
}
.navkey {
  font-size: 0.5em;
  color: rgba(191, 191, 191, 0.7);
  margin-left: 0em;
  margin-right: 0em;
  margin-top: 0em;
}
@media (min-width: 600px) {
  .navkey {
    display: none;
  }
}
@media (max-width: 441px) {
  h1 {
    font-size: 1.5em;
  }
}
</style>
