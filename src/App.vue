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
      <div v-if="navmobile" style="  color: rgba(191, 191, 191, 0.7);">
        <RouterLink to="/">首頁</RouterLink><br>
        <RouterLink to="/Go?l=blog">Blog</RouterLink><br>
        <RouterLink to="/About">關於我</RouterLink><br>
        <RouterLink to="/Projects">專案</RouterLink>
      </div>
    </Transition>
    </div>
    <div class="nav-desktop">
    <RouterLink to="/">首頁</RouterLink>&nbsp;
    <RouterLink to="/Go?l=blog">Blog</RouterLink>&nbsp;
    <RouterLink to="/About">關於我</RouterLink>&nbsp;
    <RouterLink to="/Projects">專案</RouterLink>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <br><br>
    <a href="/Go?l=gh" target="_blank" rel="noopener">GitHub</a>&nbsp;
    <a href="/Go?l=ig" target="_blank" rel="noopener">Instagram</a>&nbsp;
    <a  href="/Go?l=th" target="_blank" rel="noopener">Threads(脆)</a>&nbsp;
    <a href="/Go?l=old-site" target="_blank" rel="noopener">舊網站</a>&nbsp;
    <a href="/Go?l=em" target="_blank" rel="noopener">信箱</a>&nbsp;
    <a href="/InfectedSites">已中毒的網站</a>
    <p>&copy; {{ new Date().getFullYear() }} 吳元皓</p>
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
