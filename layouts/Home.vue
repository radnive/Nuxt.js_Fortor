<template>
  <div class="home_layout">
    <HeaderMain />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const intl = useI18n();

useHead({
  title: intl.t("app.title"),
  htmlAttrs: {
    lang: intl.locale
  }
});
</script>

<style scopped lang="scss">
.home_layout {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>