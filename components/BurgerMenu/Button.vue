<template>
  <div class="menu_button" @click="handleClick">
    <div :style="getAnim('top')"></div>
    <div :style="getAnim('middle', '.2s', (state === 'open')? '' : '.2s')"></div>
    <div :style="getAnim('bottom')"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(["toggleMenu"]);
const state = ref("Null");

function getAnim(id: string, delay: string = '', duration: string = '.5s') {
  if (state.value === "Null") {
    return '';
  } else {
    return {
      animation: `${id}__${state.value}__anim ${duration} ${delay} ease-in forwards`
    };
  }
}

function handleClick() {
  if (state.value === "open" || state.value === "Null") {
    state.value = "close";
    emit("toggleMenu", true);
  } else {
    state.value = "open";
    emit("toggleMenu", false);
  }
}
</script>

<style lang="scss">
.menu_button {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  cursor: pointer;

  div {
    width: 8rem;
    height: 1rem;
    background: var(--on-background);
  }
}

@media only screen and (min-width: 920px) {
  .menu_button {
    display: none;
  }
}

@keyframes top__open__anim {
  0% {
    transform: translateY(3rem) rotateZ(45deg);
  }

  50% {
    transform: translateY(3rem) rotateZ(0);
  }

  100% {
    transform: translateY(0) rotateZ(0);
  }
}

@keyframes middle__open__anim {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

@keyframes bottom__open__anim {
  0% {
    transform: translateY(-3rem) rotateZ(-45deg);
  }

  50% {
    transform: translateY(-3rem) rotateZ(0);
  }

  100% {
    transform: translateY(0) rotateZ(0);
  }
}

@keyframes top__close__anim {
  0% {
    transform: translateY(0) rotateZ(0);
  }

  50% {
    transform: translateY(3rem) rotateZ(0);
  }

  100% {
    transform: translateY(3rem) rotateZ(45deg);
  }
}

@keyframes middle__close__anim {
  from {
    transform: scaleX(1);
  }

  to {
    transform: scaleX(0);
  }
}

@keyframes bottom__close__anim {
  0% {
    transform: translateY(0) rotateZ(0);
  }

  50% {
    transform: translateY(-3rem) rotateZ(0);
  }

  100% {
    transform: translateY(-3rem) rotateZ(-45deg);
  }
}
</style>
