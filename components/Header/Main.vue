<template>
  <header class="container header">
    <div class="header__logo">
      <IconsLogo />
      <BurgerMenuButton @toggle-menu="toggleMenu" />
    </div>

    <nav
      ref="navMenu"
      class="header__nav"
      :style="{maxHeight: `${navMenuMaxHeight}px`}">
      <ul class="header__menu header__menu__nav">
        <li class="menu__title">{{ $t("header.menu.title") }}</li>
        <li class="menu__item filled" :lang="$t('locale')">{{ $t("header.menu.home") }}</li>
        <li class="menu__item bordered" :lang="$t('locale')">{{ $t("header.menu.who_we_are") }}</li>
        <li class="menu__item bordered" :lang="$t('locale')">{{ $t("header.menu.donate") }}</li>
        <li class="menu__item bordered" :lang="$t('locale')">{{ $t("header.menu.contact_us") }}</li>
      </ul>

      <ul class="header__menu header__menu__settings">
        <li class="menu__title">{{ $t("header.settings.title") }}</li>
        <li><HeaderLanguage /></li>
        <li><HeaderTheme /></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const navMenu = ref(null);
const navMenuMaxHeight = ref(0);

function toggleMenu(isOpen: boolean) {
  if(isOpen) {
    navMenuMaxHeight.value = navMenu.value?.scrollHeight;
  } else {
    navMenuMaxHeight.value = 0;
  }
}
</script>

<style scopped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 7rem 0;

  &__logo {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &__nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15rem;
    overflow-y: hidden;
    transition: all 1s ease-in-out;
  }

  &__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: none;
    gap: 4rem;

    .menu__title {
      color: var(--subtitle);
      font-size: 6rem;
      font-weight: 500;
    }

    .menu__item {
      font-size: 11rem;
      font-weight: 700;
      cursor: pointer;
    }

    &__nav {
      padding: 18rem 0 0 0;
    }

    &__settings {
      padding: 0 0 18rem 0;
    }

    .filled {
      color: var(--on-background);
    }

    .bordered {
      color: var(--background);
      text-shadow: 1px 0 var(--on-background), -1px 0 var(--on-background), 0 1px var(--on-background), 0 -1px var(--on-background),
        1px 1px var(--on-background), -1px -1px var(--on-background), 1px -1px var(--on-background), -1px 1px var(--on-background);
    }
  }
}

@media only screen and (min-width: 680px) {
  .header {
    padding: 15rem 0;

    &__nav {
      flex-direction: row;
      gap: 45rem;
      justify-content: center;
    }

    &__menu {
      gap: 9rem;

      .menu__title {
        font-size: 7rem;
      }

      .menu__item {
        font-size: 15rem;
      }

      &__nav {
        padding: 30rem 0;
      }

      &__settings {
        padding: 30rem 0;
      }
    }
  }
}

@media only screen and (min-width: 920px) {
  .header {
    width: 100%;
    flex-direction: row;

    &__nav {
      align-items: center;
      gap: 18rem;
      padding: 0;
      max-height: unset !important;
      overflow-y: unset;
    }
    
    &__menu {
      flex-direction: row;
      align-items: center;
      gap: 18rem;

      .menu__title {
        display: none;
      }

      .menu__item {
        position: relative;
        width: max-content;
        font-size: 5rem;

        &::after {
          width: 33%;
          height: .8rem;
          position: absolute;
          content: "";
          transform: scaleX(0);
          background: var(--on-background);
          border-radius: 1rem;
          transition: transform .3s;
        }

        &:lang(en) {
          &::after {
            left: 0;
            bottom: -1.5rem;
            transform-origin: 0;
          }
        }

        &:lang(fa) {
          &::after {
            right: 0;
            bottom: -2rem;
            transform-origin: 100%;
          }
        }
      }

      &__nav {
        padding: 0;
      }

      &__settings {
        padding: 0;
      }

      .filled {
        color: var(--on-background);
        font-weight: 600;

        &::after {
          transform: scaleX(1);
        }
      }

      .bordered {
        color: var(--subtitle);
        font-weight: 500;
        text-shadow: none;
        transition: color .3s;

        &:hover {
          color: var(--on-background);

          &::after {
            transform: scaleX(1);
          }
        }
      }
    }
  }
}
</style>