<script setup></script>

<template>
  <title>Linux 安裝指令 | 吳元皓的網站 v3</title>
  <h3>Linux 安裝指令</h3>
  <p>
    Ubuntu 24.04 + Gnome<br />
    curl
    https://raw.githubusercontent.com/hpware/hpware/main/install/ubuntu-gnome.sh
    | bash<br />

    Non Gnome Ubuntu:<br />
    curl -fsSL
    https://raw.githubusercontent.com/hpware/hpware/main/install/ubuntu.sh |
    bash
    <br />
    Debian 12 + Gnome
    <br />curl -fsSL
    https://raw.githubusercontent.com/hpware/hpware/main/install/debian-gnome.sh
    | bash

    <br />Non Gnome Debian : <br />curl -fsSL
    https://raw.githubusercontent.com/hpware/hpware/main/install/debian.sh |
    bash

    <br />Backup PC: <br />curl -fsSL
    https://raw.githubusercontent.com/hpware/hpware/main/install/backup.sh |
    bash
  </p>
  <br />
  <a href="https://old.hwtw.cc/script/linux-install.txt"
    ><button>安裝指令 TXT</button></a
  >&nbsp;<a href="https://github.com/hpware/hpware/blob/main/install/"
    ><button>安裝指令 sh 檔案</button></a
  >
</template>

<style scoped></style>
