<script setup>
const goLink = new URLSearchParams(window.location.search).get("l");
if (goLink === "ig") {
  window.location.href = "https://www.instagram.com/yh_.5_26/?ref=yuanh.xyz";
} else if (goLink === "gh") {
  window.location.href = "https://github.com/hpware?ref=yuanh.xyz";
} else if (goLink === "th") {
  const PostURL = new URLSearchParams(window.location.search).get("post");
  if (!PostURL) {
    window.location.href = "https://threads.net/@yh_.5_26?ref=yuanh.xyz";
  } else if (PostURL) {
    window.location.href = `https://threads.net/@yh_.5_26/post/${PostURL}?ref=yuanh.xyz`;
  }
} else if (goLink === "em") {
  window.location.href = "mailto:web@yuanhau.com";
} else if (goLink === "old-site") {
  window.location.href = "https://v2.yuanh.xyz?ref=yuanh.xyz";
} else if (goLink === "dc") {
  window.location.href="https://discord.com/users/918723093646684180";
} else if (goLink === "gh-repo") {
  window.location.href =
    "https://github.com/hpware/hpware-vue-v3?ref=yuanh.xyz";
} else if (goLink === "en-site") {
  window.location.href = "https://hwtw.cc?ref=yuanh.xyz";
} else if (goLink === "analytics") {
  window.location.href = "https://vd.yuanhau.com?ref=yuanh.xyz";
} else if (goLink === "blog") {
  const blogPost = new URLSearchParams(window.location.search).get("p");
  if (!blogPost) {
    window.location.href = "https://yuanhau.com?ref=yuanh.xyz";
  } else if (blogPost) {
    window.location.href = `https://yuanhau.com/?p=${blogPost}?ref=yuanh.xyz`;
  }
} else if (goLink === "git") {
  const GitRepo = new URLSearchParams(window.location.search).get("repo");
  const Username = new URLSearchParams(window.location.search).get("user");
  if (!Username) {
    window.location.href = `https://git.hwtw.cc/howard/${GitRepo}?ref=yuanh.xyz`;
  } else if (Username) {
    if (repo) {
      window.location.href = `https://git.hwtw.cc/${Username}/${GitRepo}?ref=yuanh.xyz`;
    } else {
      window.location.href = "/OopsError";
    }
  } else {
    window.location.href = "/OopsError";
  }
} else if (goLink === "gitcode-cn") {
  window.location.href = "https://gitcode.com/yuanhau";
} else {
  window.location.href = "/OopsError?ref=redirectpage";
}
</script>
<template>
  <title>重新導向 | 吳元皓的網站 v3</title>
  <h1 id="redirect">Redirecting...</h1>
</template>
