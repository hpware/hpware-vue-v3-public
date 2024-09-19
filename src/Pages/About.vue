<script setup>
</script>
<template>
  <h2 class="pagetitle">關於我</h2>
  <section id="aboutme">
    <h3>自我介紹</h3>
    <p>我是一個學生，在臺灣就讀有關資訊工程的五專。</p>
    <p>熟悉 HTML, CSS , Vercel 與 Git(Hub) </p>
    <p>我喜歡把 Prod 當測試環境。</p>
    <hr>
    </section>
    <section id="experience">
    <h3>經驗</h3>
    <h4>Web</h4>
    <p>小時候是我就喜歡用電腦，但我當時一點程式都不會寫。<br>
      我2020年時剛開始想要並使用自己的Wordpress的部落格 <a href="https://hwweb.i234.me/wordpress">hwweb.i234.me/wordpress</a>，
      <br>但Synology 不讓我把Wordpress放在 Website Root 裡面，所以我決定要改預設的檔案來讓使用者到部落格。
      <br>在Github上發現在我的舊帳號上有一個備份 <a href="https://github.com/thehwtw/wncx">github.com/thehwtw/wncx</a>&nbsp;
      <a href="https://old-hwweb-website.pages.dev/">網站 (Cloudflare Page Archive)</a>
      <br>當時的我沒有放入< a > 的標籤，所以不是 HyperLink，我當時也沒想太多就繼續使用著。
      <br>但我在這一年內增加了許多HTML & CSS的知識，讓我更有信心可以在學VueJS。
    </p>
    <h4><del>Python</del></h4>
    <p>
      我也在國中一年級時開始學習Python，這個也是我想學的語言，但我教學影片只看但10％的地方就放棄了。
      <br>我也之後大多數都忘記了，連 if else 每次都要查一下，因為我比較習慣用 JavaScript 的方式 if {} else if {} else {}。
    </p>
      <h4>IT</h4>
    <p>我在2019年時，發現2018年買的NAS可以放虛擬機器，剛開始只是跑 Windows 7 而已，<br>
		但一段時間後我發現Linux，我也開始學一點Debain Cli (Ubuntu)來安裝服務。<br>
      主要學習的是 Nginx， Nginx 是一個比較 Flexible 的 Web Server，<br>
      最近也開始學一點 PHP 主要為簡單的<a href="https://github.com/hpware/php-plugins">插件</a><br>
      也終於學會如何安裝 PHP 與 Nginx，但我還是不會用 Composer。<br>
      我也對 Windows Server IIS 也有一點經驗，主要的原因是我在 Windows Server 2022 IIS 10.0 上讓我的爛網站跑起來，但最後還是跑回 Vercel 了。
	  </p>
  </section>
  <br>
  <hr>
  <section id="certifications" class="certifications">
    <h3>檢定通過</h3>
    <p>GEPT</p>
    <span>初級 (2021)</span><br>
    <span>中級聽讀 (2022)</span>
    <p>TOEFL</p>
    <span>Junior Standard Test (2022)</span>
  </section>
</template>
<style scoped>
section.certifications {
  h4 {
    margin-bottom:0;
  }
p {
  font-size: 1.3em;
  padding-bottom: 0;
}
}
</style>