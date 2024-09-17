import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Sentry from "@sentry/vue";

const app = createApp(App)

Sentry.init({
    app,
    dsn: "https://76de269598297639e16a87e22e404f5d@o4507948895174656.ingest.us.sentry.io/4507948953698304",
    integrations: [
        Sentry.browserTracingIntegration({ router }),
        Sentry.replayIntegration(),
    ],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
console.log("%cThis is a browser feature intended for developers. Do not copy anything here.\n", "font-size: 20px; font-weight: bold; color: red;");
app.use(router)
app.mount('#app')