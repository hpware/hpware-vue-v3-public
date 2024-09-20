import posthog from "posthog-js";

export default {
    install(app) {
        app.config.globalProperties.$posthog = posthog.init(
            'phc_dToRUD1SemEsKLy3DEQlXxWoqsr6t1y12Fdwx164IeG',
            {
                api_host: 'https://us.i.posthog.com',
            }
        );
    },
};