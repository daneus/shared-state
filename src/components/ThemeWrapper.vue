<template>
  <div
    class="wrapper"
    :style="{
      backgroundColor: `${$darkModeEnabled ? '#111' : '#DDD'}`,
      transition: 'all .3s linear',
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ThemeWrapper',
});
</script>

<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { darkModeEnabled } from '../store';
const $darkModeEnabled = useStore(darkModeEnabled);
</script>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}
</style>
