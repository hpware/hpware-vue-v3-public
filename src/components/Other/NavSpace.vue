<script setup>
</script>

<template>
  <br class="mobile" />
  &nbsp;
</template>

<style scoped>
br.mobile {
  display: none;
}
span.mobile {
  display: none;
}
@media (max-width: 502px) {
  br.mobile {
    display: block;
  }
  br.desktop {
    display: none;
  }
  span.mobile {
    display: block;
  }
  span.desktop {
    display: none;
  }
}
</style>
