<script setup>
const golink = new URLSearchParams(window.location.search).get('l');
if (golink == "ig") {
  window.location.href = "https://www.instagram.com/yh_.5_26/";
}
else if (golink == "gh") {
  window.location.href = "https://github.com/hpware";
}
else if (golink == "th") {
  window.location.href = "https://threads.net/yh_.5_26";
}
else if (golink == "em") {
  window.location.href = "mailto:hw@hwtw.cc"
}
else if (golink == "oldsite") {
  window.location.href = "https://3002.hwtw.cc"
}
else if (golink == "vercelcom") {
  window.location.href = "https://vercel.com"
}
else if (golink == "gh-repo") {
  window.location.href = "https://github.com/hpware/hpware-vue-v3"
}
else if (golink == "vitejsdev") {
  window.location.href = "https://vitejs.dev"
}
else if (goLink == "blog") {
  const blogPost = new URLSearchParams(window.location.search).get('p');
  if (!blogPost) {
    window.location.href= `https://yuanhau.com/`;
  }
  else {
    window.location.href = `https://yuanhau.com/?p=${blogPost}`;
  }
}
else if (goLink == "git") {
  const GitRepo = new URLSearchParams(window.location.search).get('repo');
  if (!Usernane) {
    var Username = "howard";
  } else if (Username) {
    if (repo) {
      window.location.href = `https://git.hwtw.cc/${Username}/${GitRepo}`;
    } else {
      getelementbyid("redirect").innerHTML = "錯誤! 未知的連結";
    }
  } else {
    getelementbyid("redirect").innerHTML = "錯誤! 未知的連結";
  }
}
else {
  getelementbyid("redirect").innerHTML = "錯誤! 未知的連結";
}
</script>
<template>
  <h1 id="redirect">Redirecting...</h1>

</template>