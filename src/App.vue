<script setup>
import {ref} from 'vue';
const navmobile = ref(false);
import Announcement from '@/components/Announcement.vue'
</script>
<template>
  <nav>
    <h1 class="nametitle">吳元皓</h1>
    <Announcement />
    <div class="nav-mobile">
    <button @click="navmobile = !navmobile;" class="not-a-button">選單</button>
      <Transition name="fade">
      <div v-if="navmobile" style="color: rgba(191, 191, 191, 0.7);">
        <RouterLink to="/">首頁</RouterLink><br>
        <RouterLink to="/Go?l=blog">Blog</RouterLink><br>
        <RouterLink to="/About">關於我</RouterLink><br>
        <RouterLink to="/Projects">專案</RouterLink><br>
        <RouterLink to="/Other">其他</RouterLink>
      </div>
    </Transition>
    </div>
    <div class="nav-desktop">
    <RouterLink to="/">首頁</RouterLink>&nbsp;
    <RouterLink to="/Go?l=blog">Blog</RouterLink>&nbsp;
    <RouterLink to="/About">關於我</RouterLink>&nbsp;
    <RouterLink to="/Projects">專案</RouterLink>&nbsp;
      <RouterLink to="/Other">其他</RouterLink>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <br><br>
    <a href="/Go?l=gh" target="_blank" rel="noopener"><i class="bi bi-github"></i></a>&nbsp;
    <a href="/Go?l=ig" target="_blank" rel="noopener"><i class="bi bi-instagram"></i></a>&nbsp;
    <a  href="/Go?l=th" target="_blank" rel="noopener"><i class="bi bi-threads"></i></a>&nbsp;
    <a href="/Go?l=em" target="_blank" rel="noopener"><i class="bi bi-envelope"></i></a>&nbsp;
    <p>&copy; {{ new Date().getFullYear() }} 吳元皓</p>
    <p style="font-size: 0.6em;">Made for&nbsp;<i class="bi bi-browser-chrome"></i>&nbsp;<i class="bi bi-browser-firefox"></i>&nbsp;<i class="bi bi-browser-safari"></i></p>
  </footer>
</template>

<style scoped>
footer {
  a{
    color:aqua
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
  font-size: 1.0em;
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
}
</style>
