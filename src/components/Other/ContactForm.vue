<script setup>
    // Import
    import { ref, onMounted } from "vue";
    import Hcaptcha from "@hcaptcha/vue3-hcaptcha";

    // Refs
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const completed = ref(false);

    // Captcha
    const onCaptchaVerified = (token) => {
            captchaToken.value = token;
    };

    // Submit Action
    async function submitForm() {
        
        if (!captchaToken.value) {
            alert("請先輸入驗證碼");
        } else { 
        const submitURL = await fetch("https://am.yuanhau.com/webhook", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: new URLSearchParams({
                "name": name.value,
                "email": email.value,
                "message": message.value,
            }),
    })
    completed.value === true;
}
}
</script>
<template>
    <div>
        <h2>詢問系統</h2>
        <div v-if="completed">
            <h3>成功！
            </h3>
        </div>
        <form @submit.prevent="submitForm" else>
            <label for="name" >姓名<span class="require">*</span></label>&nbsp;
            <input type="text" id="name" v-model="name" required /><br/><br/>
            <label for="email">電子郵件<span class="require">*</span></label>&nbsp;
            <input type="email" id="email" v-model="email" required/><br/>
            <label for="message" style="font-size:1em;">訊息<span class="require">*</span></label><br/>
            <textarea id="message" v-model="message" required></textarea><br/>
            <button type="submit">送出</button>
        </form>
        <br/>
        <p>必續完成驗證！</p>
        <hcaptcha
          sitekey="e5d8783a-6408-45fe-a696-26180600ba34"
          theme="dark"
          @verify="onCaptchaVerified"
        ></hcaptcha>
    </div>
</template>
<style scoped>
    label {
        font-size:0.5em;
    }
    input {
        border-radius: 8px;
        color:black;
        background-color: white;
        border: 1px solid #ccc;
        font-size: 1em;
    }
    textarea {
        font:message-box;
        border-radius: 8px;
        color:black;
        background-color: white;
        border: 1px solid #ccc;
        font-size: 0.6em;
        width: 350px;
        height: 200px
    }
    span.require {
        color:red;
        font-size: 0.8em;
    }
</style>