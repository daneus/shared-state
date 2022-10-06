<template>
  <div
    class="vue-component-wrapper"
    :style="{
      backgroundColor: `${$darkModeEnabled ? 'black' : 'white'}`,
      transition: 'all .3s linear',
    }"
  >
    <h1
      class="vue-component"
      :style="{ color: `${$darkModeEnabled ? 'white' : 'black'}` }"
    >
      This is a Vue Component
    </h1>
    <div class="buttons-wrapper">
      <button @click="increment">Component counter: {{ counter }}</button>
      <button @click="globalCounter.set($globalCounter + 1)">
        Global counter: {{ $globalCounter }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VueComponent',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
});
</script>

<script setup lang="ts">
import { globalCounter } from '../store';
import { useStore } from '@nanostores/vue';
import { darkModeEnabled } from '../store';
const $globalCounter = useStore(globalCounter);
const $darkModeEnabled = useStore(darkModeEnabled);
</script>

<style>
.vue-component {
  font-size: clamp(1.8rem, 4vmin, 6rem);
}
.vue-component-wrapper {
  border: 1px solid green;
}
.buttons-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
}
</style>
