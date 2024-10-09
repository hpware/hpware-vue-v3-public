<script setup>
// Init
import NavSpace from "@/components/Other/NavSpace.vue";
import { ref, onMounted } from "vue";
import DiscordStatus from "@/components/HomePage/DiscordStatus.vue";
// Ref
const moreAbout = ref(false);
const handPickedImages = ref(false);
const name = ref("Default Name");
const otherCoolText = ref("Default Text");
// Picker
function abcdpicker() {
  const randomValue = Math.random();
  if (randomValue < 0.25) {
    return "D";
  } else if (randomValue < 0.5) {
    return "B";
  } else if (randomValue < 0.75) {
    return "C";
  } else {
    return "A";
  }
}
// Dynamic Name
//function abcdpicker1() {
// const randomValue = (Math.random() * 4);
// switch (randomValue) {
//    case 0:
//      return "D";
//    case 1:
//      return "B";
//    case 2:
//      return "C";
//    case 3:
//      return "A";
//  }
//}
const abtestvar = abcdpicker();
function updatename() {
  if (abtestvar === "A") {
    name.value = "Yuan-Hau Wu";
  } else if (abtestvar === "B") {
    name.value = "元皓";
  } else if (abtestvar === "C") {
    name.value = "Howard Wu";
  } else {
    name.value = "吳元皓";
  }
}
updatename();
// Dynamic Other Text aka I use some vim btw.
const dytextabcd = abcdpicker();
function dyothertext() {
  if (dytextabcd === "A") {
    return "HTML is not a programming language.";
  } else if (dytextabcd === "B") {
    return "Line 很爛";
  } else if (dytextabcd === "C") {
    return "I use some vim btw.";
  } else if (dytextabcd === "D") {
    return "WebStorm is my main IDE of choice.";
  }
}
onMounted (otherCoolText.value = dyothertext());
</script>
<template>
  <title>首頁 | 吳元皓的網站 v3</title>
  <meta property="og:title" content="首頁 | 吳元皓的網站 v3" />
  <meta property="og:site_name" content="首頁 | 吳元皓的網站 v3" />
  <div class="background">
    <section id="aboutme" class="about">
      <br />
      <img
        alt="hpware"
        class="pfp"
        src="https://utfs.io/f/CCLPSN5W2HD5ziRBkeSZ5pJYf32lWLvIK8uGb41xkHCUnXm7"
        draggable="false"
        style="margin-bottom: 0em"
      />
      <h2 style="margin-top: 0em; margin-bottom: 0em">
        <span style="margin-bottom:0em;" id="zhname">{{name}}</span>
      </h2>
      <DiscordStatus />
      <p style="margin-top: 0em; margin-bottom: 0em">
        嗨! 我是一個資訊工程的五專生，我對<a
          href="#photo"
          style="color: white"
          >攝影</a
        >與前端方面有興趣。 <br />習慣並熟悉使用 HTML, CSS , Vercel 與 Git &
        Debian(Ubuntu) Cli<br />
        <span>{{otherCoolText}}</span>
      </p>
      <h3>
          <a class="not-a-button profilebutton" @click="moreAbout = !moreAbout"
          >更多資訊</a
        > | <RouterLink
          to="/projects"
          style="text-decoration: none"
          class="not-a-button profilebutton"
          >我的專案</RouterLink
        >
      </h3>
      <div v-if="moreAbout" id="moreabout">
        <span style="color: rgba(255, 255, 255, 0.57)"
          >滑動螢幕或滑鼠<i class="bi bi-mouse-fill"></i
        ></span>
      </div>

      <br />
    </section>
  </div>
  <section id="moreabout">
    <Transition name="fade">
      <div v-if="moreAbout" class="experience">
        <div class="experience1">
          <h4>Web</h4>
          <p>
            小時候是我就喜歡用電腦，但我當時一點程式都不會寫。<br />
            我2020年時剛開始想要並使用自己的Wordpress的部落格
            <a href="https://hwweb.i234.me/wordpress">hwweb.i234.me/wordpress</a
            >， <br />但Synology 不讓我把Wordpress放在 Website Root
            裡面，所以我決定要改預設的檔案來讓使用者到部落格。
            <br />在Github上發現在我的舊帳號上有一個備份
            <a href="https://github.com/thehwtw/wncx">repo:thehwtw/wncx</a
            >&nbsp;
            <a href="https://old-hwweb-website.pages.dev/"
              >網站 (Page Archive)</a
            >
            <br />當時的我沒有放入< a > 的標籤，所以不是
            HyperLink，我當時也沒想太多就繼續使用著。
            <br />但我在這一年內增加了許多HTML &
            CSS的知識，讓我更有信心可以在學VueJS 或 ReactJS。
          </p>
          <h4><del>Python</del></h4>
          <p>
            我也在國中一年級時開始學習Python，這個也是我想學的語言，但我教學影片只看但10％的地方就放棄了。
            <br />黑歷史: <a href="https://github.com/thehwtw/hwpythontest1">舊py程式</a>
            <br />我也之後大多數都忘記了，連 if else
            每次都要查一下，因為我比較習慣用 JavaScript 的方式 if {} else if {}
            else {}。
          </p>
          <h4>IT</h4>
          <p>
            我在2019年時，發現2018年買的NAS可以放虛擬機器，剛開始只是跑 Windows
            7 而已，<br />
            但一段時間後我發現Linux，我也開始學一點Debain Cli
            (Ubuntu)來安裝服務。<br />
            主要學習的是 Nginx， Nginx 是一個比較 Flexible 的 Web Server，<br />
            最近也開始學一點 PHP 主要為簡單的<a
              href="https://github.com/hpware/php-plugins"
              >插件</a
            ><br />
            也終於學會如何安裝 PHP 與 Nginx，但我還是不會用 Composer。<br />
            我也對 Windows Server IIS 也有一點經驗，主要的原因是我在 Windows
            Server 2022 IIS 10.0 上讓我的爛網站跑起來，但最後還是跑回 Vercel
            了。
          </p>
          <hr />
          <h3>檢定通過</h3>
          <p>GEPT</p>
          <span>初級 (2021)</span><br />
          <span>中級聽讀 (2022)</span>
          <p>TOEIC</p>
          <span>Listening & Writing Score:745 (2023)</span>
          <hr />
          <h3>我想學的</h3>
          <span>VueJS</span>&nbsp; <span>Python</span>&nbsp;
          <span>mySQL</span>&nbsp; <span>NextJS</span>&nbsp;
          <span>Expo</span>&nbsp; <span>Bash</span>&nbsp;
          <span>ReactJS</span>
        </div>
      </div>
    </Transition>
  </section>
  <hr />
  <section id="tools">
    <h3><i class="bi bi-tools"></i>&nbsp;使用的工具</h3>
    <p>網頁: VSCode, Webstorm, Vim</p>
    <p>Python: VSCode, PyCharm</p>
    <br />
    <p>OS: Windows 11, <del>Ubuntu 24.01</del>, MacOS, Debian 12</p>
    <p>
      Self Host:<NavSpace /><a href="https://git.hwtw.cc">Git 伺服器 Gitea</a
      >&nbsp; <br class="mobilei" /><a href="https://zz.yuanhau.com"
        >檔案分享伺服器 Zipline</a
      ><NavSpace /> <a href="https://vd.yuanhau.com">使用者調查系統 Umami</a>
    </p>
  </section>
  <hr />
  <section id="stats" class="gitstats">
    <h3>GitHub 資料</h3>
    <img
      src="https://raw.githubusercontent.com/hpware/gitstats/master/generated/overview.svg#gh-dark-mode-only"
      alt="GitHub Stats Overview that displays what I have done in GitHub"
      draggable="false"
    />
    <img
      src="https://raw.githubusercontent.com/hpware/gitstats/master/generated/languages.svg#gh-dark-mode-only"
      alt="GitHub Stats Languages that displays what languages I have used on GitHub"
      draggable="false"
    />
  </section>
  <hr />
  <section id="photo">
    <h3>攝影</h3>
    <p>我喜歡拍照(但沒拍很好)</p>
    <a href="https://unsplash.com/@hwtw" target="blank" style="color: white"
      >Unsplash</a
    >&nbsp;<a
      @click="handPickedImages = !handPickedImages"
      style="color: white"
      class="not-a-button"
      ><u>我的照片</u></a
    >
    <Transition name="fade">
      <div class="photolist" v-if="handPickedImages">
        <a
          href="https://unsplash.com/photos/a-view-of-a-building-from-across-a-hedge-a8nTktTVmxI"
        >
          <img
            src="https://images.unsplash.com/photo-1721100152646-1bbfeb581505"
            draggable="false"
          />
        </a>
        <a href="https://unsplash.com/photos/9QlTkHc6O98">
          <img
            src="https://images.unsplash.com/photo-1710587526032-1077f7076543"
            draggable="false"
          />
        </a>
        <p style="font-size: 0.8em; margin-top: 0.5em">
          Free to use with the
          <a href="https://unsplash.com/license">Unsplash License</a>
        </p>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.background {
  background-image: url("https://utfs.io/f/CCLPSN5W2HD5Hjx9nW7XEuSOswWPIZ09j31aUTe7gopyNmnk");
  background-size: cover;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  margin-left: 1px;
  margin-right: 1px;
}
.about {
  text-align: center;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.38);
}
img.pfp {
  display: block;
  margin: 0 auto 2rem;
  transition: filter 300ms;
  align-items: center;
  border-radius: 50%;
}
img.pfp:hover {
  filter: drop-shadow(0 0 2em #444444aa);
}
section.gitstats {
  img {
    transition: filter 300ms;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  img:hover {
    filter: drop-shadow(0 0 2em #444444aa);
  }
}
br.mobilei {
  display: none;
}
@media (max-width: 1274px) {
  br.mobilei {
    display: none;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
div.experience {
  background-size: cover;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  animation: ease-in-out 100ms zoomIn;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  border-radius: 10px;
  padding: 0.2em;
}
@keyframes zoomIn {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
@keyframes zoomOut {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.5);
  }
}
div.experience1 {
  backdrop-filter: blur(10px);
  padding: 1em;
  border-radius: 5px;
}
.not-a-button {
  background-color: transparent;
  border: none;
  color: rgba(191, 191, 191, 0.7);
  font-size: 1em;
  cursor: pointer;
  margin-top: 0em;
  margin-bottom: 0em;
  margin-inside: 0em;
}
div.photolist {
  img {
    width: 40%;
    margin: 0.5em;
  }
  @media (max-width: 800px) {
    img {
      width: 90%;
    }
  }
  animation: ease-in-out 100ms zoomIn;
}
.profilebutton {
  color: rgb(201, 201, 201);
  transition: all 200ms;
}
.profilebutton:hover {
  color: rgba(154, 154, 154, 0.75);
}
@media (max-width: 800px) {
  .profilebutton {
  color: rgb(201, 201, 201);
  transition: all 200ms;
}
.profilebutton:hover {
  color: rgba(154, 154, 154, 0.75);
}
}
</style>
