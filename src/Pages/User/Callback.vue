<script setup>
import { ref } from 'vue';
import NavSpace from '@/components/Other/NavSpace.vue';
import cookie from 'vue-cookie';
import CryptoJS from 'crypto-js';
import AES from "crypto-js/aes";
import SHA256 from "crypto-js/sha256";

const importaction = new URLSearchParams(window.location.search).get('action');
// Callback action
if (importaction === '') {

}
</script>

<template>

</template>

<style scoped>

</style>