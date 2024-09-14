<script setup lang="ts">
import NavSpace from '@/components/NavSpace.vue'
</script>
<template>
  <img alt="hpware" class="logo" src="https://storage.hpware.hwtw.cc/img/index-pfp.png" />
  <span>@hpware | @yh_.5_26 | @hwtw</span>
  <hr>
  <section id="mytools">
    <h3>使用的工具</h3>
    <p>網頁: VSCode, Webstorm, Vim </p>
    <p>Python: VSCode, PyCharm</p>
    <p></p>
    <p>OS: Windows 11, <del>Ubuntu 24.01</del>, MacOS, Debian 12</p>
    <p>Self Host: <a href="https://git.hwtw.cc">Git 伺服器 Gitea</a><NavSpace />
      <br class="mobilei"><a href="https://zz.yuanhau.com">檔案分享伺服器 Zipline</a><NavSpace />
      <a href="https://vd.yuanhau.com">使用者調查系統 Umami</a></p>
  </section>
  <hr>
  <section id="learn">
    <h3>我想學的</h3>
    <span><del>C++(不想學)</del></span> <br class="mobilei">
    <span>VueJS</span> <br class="mobilei">
    <span>Python</span> <br class="mobilei">
    <span>mySQL</span> <br class="mobilei">
    <span>NextJS</span> <br class="mobilei">
    <span>Expo</span> <br class="mobilei">
    <span>Bash</span>
  </section>
  <hr>
  <section id="stats" class="gitstats">
    <h3>GitHub 資料</h3>
    <img src="https://raw.githubusercontent.com/hpware/gitstats/master/generated/overview.svg#gh-dark-mode-only" draggable="false"/>
    <img src="https://raw.githubusercontent.com/hpware/gitstats/master/generated/languages.svg#gh-dark-mode-only" draggable="false"/>

  </section>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
  transition: filter 300ms;
  align-items: center;
  border-radius: 50%;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #444444aa);
}
.gitstats {
  img{
    transition: filter 300ms;
  }
  img:hover {
    filter: drop-shadow(0 0 2em #444444aa);
  }
}
br.mobilei {
  display:none;
}
@media (max-width: 1274px) {
  br.mobilei{
    display: block;
  }
}
</style>