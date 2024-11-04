<script setup>
import { ref, onMounted } from 'vue';

const blogs = ref([]);
const error = ref(false);
const errorText = ref("");
const loading = ref(false);

onMounted(() => {
    getBlogs();
});

async function getBlogs() {
    loading.value = true;
    try {
        blogs.value = response.data;
    } catch (err) {
        error.value = true;
        errorText.value = "讀取文章時發生錯誤。";
    } finally {
        loading.value = false;
    }
}
</script>

<template>
    <div>
        <div class="loading" v-if="loading">
            <!--Loading GIF Here-->
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