<template>
  <NuxtPage />
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

<style>

</style>