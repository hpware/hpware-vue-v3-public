<script setup>
import Project from "@/components/Templates/ProjectDisplayTemplate.vue";
import "@/assets/main.css";
</script>
<template>
  <title>專案 | 吳元皓的網站 v3</title>
  <h2 class="pagetitle">所有專案</h2>
  <section id="current">
    <h3>現在開發、更新中的專案</h3>
    <Project
      name="Site-V3 網站"
      ai="help"
      repo="https://github.com/hpware/hpware-vue-v3"
      website="https://yuanh.xyz"
      about="Site-V3"
      between_projects="1"
    ></Project>
    <Project
      name="lovemusic.asia 網站"
      website="https://lovemusic.asia"
      about="lovemusicasia"
      between_projects="1"
    ></Project>
    <Project
      name="hwtw.cc 網站"
      website="https://hwtw.cc"
      about="hwtw-cc"
      between_projects="1"
    ></Project>
    <Project
      name="AdGuard Home Block & Allow lists"
      repo="https://github.com/hpware/AdGuard-Block-list"
      website="https://hpware.github.io/adguard-block-list/README"
      MoreText="<a href='https://hpware.github.io/adguard-block-list/README-zh'>繁體中文網頁</a>"
      about="AdGuard-Block-list"
      between_projects="1"
    ></Project>
    <Project
      name="Linux 安裝腳本"
      MoreText=" <a href='https://old.hwtw.cc/script/linux-install.txt'>安裝指令</a>"
      about="Linux安裝指令"
      between_projects="0"
    ></Project>
  </section>
  <hr />
  <section id="previous">
    <h3>舊或以取代的專案</h3>
    <Project
      name="舊 hwtw.cc 網站"
      ai="help"
      website="https://old.hwtw.cc"
      between_projects="1"
    ></Project>
    <Project
      name="TestConnectCenter"
      ai="make"
      about="testconnectcenter"
      repo="https://github.com/hpware/testconnectcenter"
      website="https://testconnectcenter.azurewebsites.net"
      between_projects="1"
    ></Project>
    <Project
      name="Site-V2"
      repo="https://github.com/hpware/site-v2"
      website="https://v2.yuanh.xyz"
      between_projects="1"
    ></Project>
    <Project
      name="Site-V1 (用別人做的)"
      repo="https://github.com/hpware/old-site"
      website="https://3002.hwtw.cc"
      between_projects="0"
    ></Project>
  </section>
</template>
<style scoped>
p {
  margin-top: 0.4em;
  margin-bottom: 0;
}
</style>
