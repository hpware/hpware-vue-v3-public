<script setup>
const goLink = new URLSearchParams(window.location.search).get('l');
if (goLink === "ig") {
  window.location.href = "https://www.instagram.com/yh_.5_26/";
}
else if (goLink === "gh") {
  window.location.href = "https://github.com/hpware";
}
else if (goLink === "th") {
  window.location.href = "https://threads.net/yh_.5_26";
}
else if (goLink === "em") {
  window.location.href = "mailto:web@yuanhau.com";
}
else if (goLink === "old-site") {
  window.location.href = "https://3002.hwtw.cc"
}
else if (goLink === "gh-repo") {
  window.location.href = "https://github.com/hpware/hpware-vue-v3"
}
else if (goLink === "en-site") {
  window.location.href = "https://hwtw.cc";
}
else if (goLink === "analytics") {
  window.location.href= "https://vd.yuanhau.com"
}
else if (goLink === "blog") {
  const blogPost = new URLSearchParams(window.location.search).get('p');
  if (!blogPost) {
    window.location.href = "https://yuanhau.com";
  } else if (blogPost) {
    window.location.href = `https://yuanhau.com/?p=${blogPost}`;
  }
}
else if (goLink === "git") {
  const GitRepo = new URLSearchParams(window.location.search).get('repo');
  const Username = new URLSearchParams(window.location.search).get('user');
  if (!Username) {
    window.location.href = `https://git.hwtw.cc/howard/${GitRepo}`;
    } else if (Username) {
    if (repo) {
      window.location.href = `https://git.hwtw.cc/${Username}/${GitRepo}`;
    } else {
      window.location.href = "/OopsError";
    }
  } else {
    window.location.href = "/OopsError";
  }
}
else {
  window.location.href = "/OopsError";
}
</script>
<template>
  <h1 id="redirect">Redirecting...</h1>

</template>