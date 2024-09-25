<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  infectReasonURL: {
    type: String,
    required: true,
  },
  infectReason: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  moreText: {
    type: String,
    required: false,
  },
  fix: {
    type: String,
    required: true,
  },
  foundDate: {
    type: String,
    required: true,
  },
  afterMath: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <section :id="props.name">
    <h4>
      {{ props.name }}&nbsp;<span v-if="props.fix === 'true'">(已修復)</span>
      <span v-if="props.fix === 'false'">(未修復)</span>
    </h4>
    <p>發現日期: {{ props.foundDate }}</p>
    <p>中毒原因: {{ props.infectReason }}</p>
    <p>
      解決：{{ props.afterMath }}
      <br />

      <span v-if="props.moreText" v-html="props.moreText"></span
      ><br v-if="props.moreText" />
      <a :href="props.infectReasonURL">更多資訊</a>
    </p>
  </section>
</template>

<style scoped>
p {
  margin-top: 0.4em;
  margin-bottom: 0.4em;
}
</style>
