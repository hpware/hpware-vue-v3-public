<script setup>
import NavSpace from '@/components/NavSpace.vue'
</script>
<template>
  <nav>
    <h1>吳元皓</h1>
    <a class=hide-nav></a>
    <RouterLink to="/">首頁</RouterLink><NavSpace/>
    <a href="/Go?l=blog">Blog</a><NavSpace/>
    <RouterLink to="/About">關於我</RouterLink><NavSpace/>
    <RouterLink to="/Projects">專案</RouterLink><span class="mobile">&nbsp;</span>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <br><br>
    <a href="/Go?l=gh" target="_blank" rel="noopener">GitHub</a>&nbsp;
    <a href="/Go/?l=ig" target="_blank" rel="noopener">Instagram</a>&nbsp;
    <a  href="/Go/?l=th" target="_blank" rel="noopener">Threads(脆)</a>&nbsp;
    <a href="/Go?l=oldsite" target="_blank" rel="noopener">舊網站</a>&nbsp;
    <a href="/Go?l=em" target="_blank" rel="noopener">信箱</a><br>
    <p>&copy; {{ new Date().getFullYear() }} 吳元皓</p>
  </footer>
</template>

<style scoped>
footer {
  a{
    color:aqua
  }
}
</style>
