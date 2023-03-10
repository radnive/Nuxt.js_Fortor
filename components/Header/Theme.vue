<template>
  <div class="header_theme" @click="toggleTheme">
    <ClientOnly>
      <IconsTheme :theme="theme.preference" />
      {{ currentTheme }}

      <template #fallback>
        {{ $t("message.loading") }}
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const intl = useI18n();
const theme = useColorMode();

const currentTheme = computed(() => intl.t(`header.settings.${theme.preference}`));

function toggleTheme() {
  switch(theme.preference) {
    case "system":
      theme.preference = "light"
      break;
    case "light":
      theme.preference = "dark"
      break;
    case "dark":
      theme.preference = "system"
      break;
  }
}
</script>

<style scopped lang="scss">
.header_theme {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  color: var(--on-background);
  font-size: 11rem;
  font-weight: 700;
  cursor: pointer;

  svg {
    width: 11rem;

    path {
      fill: var(--on-background);
    }
  }
}

@media only screen and (min-width: 920px) {
  .header_theme {
    gap: 2rem;
    color: var(--subtitle);
    font-size: 5rem;
    font-weight: 500;
    transition: color .3s;

    svg {
      width: 7rem;
      
      path {
        fill: var(--subtitle);
        transition: fill .3s;
      }
    }

    &:hover {
      color: var(--on-background);

      svg path {
        fill: var(--on-background);
      }
    }
  }
}
</style>