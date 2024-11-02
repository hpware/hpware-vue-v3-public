<script>
    import { ref, onMounted } from "vue";
    const pages = import.meta.glob("@/BlogPosts/**/*.vue");

    const routes = Object.keys(pages).map((path) => {
    const name = path.match(/\/BlogPosts\/(.*)\.md$/)[1];
    console.log(name);
    });
    console.log(routes);
</script>

<template>
    <div>

    </div>
</template>
