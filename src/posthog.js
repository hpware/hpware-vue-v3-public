import posthog from "posthog-js";
const api_key = import.meta.env.POSTHOG_API;

export default {
    install(app) {
        app.config.globalProperties.$posthog = posthog.init(
            api_key,
            {
                api_host: 'https://us.i.posthog.com',
            }
        );
    },
};