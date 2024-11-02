<script>
    import { ref, onMounted } from "vue";
    import fs from "fs";
    import path from "path";
    
    const blogs = ref([]);
    const error = ref(false);
    const errorText = ref("");

    onMounted(() => {
        const dirPath = path.join(__dirname, "@/BlogPosts/");
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                error.value = true;
                errorText.value = "讀取 Blog 文章時發生錯誤。";
                return;
            } 
            blogs.value = files.filter((file) => file.endsWith(".md"));
        });
    });
</script>

<template>
    <div>
        <h3 class="error" v-if="error">{{ errorText }}</h3>
        <div class="item" v-for="blog in blogs" :key="blog">
            <router-link :to="`/blog/${blog}`">
                <h4>{{ blog }}</h4>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
    h3.error {
        color: red;
    }
    div.item {

    }
</style>