<script setup>
    import { ref, onMounted } from "vue";
    import fs from "fs";
    import path from "path";
    
    const blogs = ref([]);
    const error = ref(false);
    const errorText = ref("");
    const loading = ref(false);

    onMounted(() => {
        getBlogs();
    });
    
async function getBlogs() {
    loading.value = true;
        const dirPath = path.join(__dirname, "@/BlogPosts/");
        fs.readdir(dirPath, (err, files) => {
            console.log("Reading files from directory...");
            if (err) {
                error.value = true;
                errorText.value = "讀取文章時發生錯誤。";
                return;
            } 
            blogs.value = files.filter((file) => file.endsWith(".md"));
            console.log("Files received:", files);
            console.log("Filtered blogs:", blogs.value);
        });
        loading.value = false;
}
</script>

<template>
    <div>
        <div class="loading" v-if="loading">
            <!--Loading Gif Placement Here.-->
            <h3>Loading...</h3>
        </div>
        <div v-if="!loading">
        <h3 class="error" v-if="error">{{ errorText }}</h3>
        <div class="item" v-for="blog in blogs" :key="blog">
            <a :href="`/blog/${blog}`">
                <h4>{{ blog }}</h4>
            </a>
        </div>
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