import Vue from "vue";
import router from './router'
import * as Sentry from "@sentry/vue";

Sentry.init({
    app,
    dsn: "https://6092c0bbe9603caeeaff9c3218a53ae9@o4507948895174656.ingest.us.sentry.io/4507948897992704",
    integrations: [
        Sentry.browserTracingIntegration({ router }),
        Sentry.replayIntegration(),
        Sentry.browserProfilingIntegration(),
    ],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    // Profiling
    profilesSampleRate: 1.0, // Profile 100% of the transactions. This value is relative to tracesSampleRate
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");