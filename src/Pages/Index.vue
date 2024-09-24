<script setup>
// <head>
useHead({
  title: 'My awesome site',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'My awesome site',
    },
  ],
})


</script>
<template>
  <img alt="hpware" class="logo" src="https://utfs.io/f/CCLPSN5W2HD5ziRBkeSZ5pJYf32lWLvIK8uGb41xkHCUnXm7" draggable="false"/>
  <span>@hpware | @yh_.5_26 | @hwtw</span>
  <hr>
  <section id="me">
    <h3>使用的工具</h3>
    <p>網頁: VSCode, Webstorm, Vim </p>
    <p>Python: VSCode, PyCharm</p>
    <br>
    <p>OS: Windows 11, <del>Ubuntu 24.01</del>, MacOS, Debian 12</p>
    <p>Self Host:<NavSpace /><a href="https://git.hwtw.cc">Git 伺服器 Gitea</a>&nbsp;
      <br class="mobilei"><a href="https://zz.yuanhau.com">檔案分享伺服器 Zipline</a><NavSpace />
      <a href="https://vd.yuanhau.com">使用者調查系統 Umami</a></p>
  </section>
  <hr>
  <section id="learn">
    <h3>我想學的</h3>
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
    <img src="https://raw.githubusercontent.com/hpware/gitstats/master/generated/overview.svg#gh-dark-mode-only"
         alt="GitHub Stats Overview that displays what I have done in GitHub" draggable="false"/>
    <img src="https://raw.githubusercontent.com/hpware/gitstats/master/generated/languages.svg#gh-dark-mode-only"
         alt="GitHub Stats Languages that displays what languages I have used on GitHub" draggable="false"/>

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
section.gitstats {
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
    display: none;
  }
}
</style>