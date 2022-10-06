<template>
  <div
    class="vue-component-wrapper component-wrapper"
    :style="{
      backgroundColor: `${$darkModeEnabled ? '#111111' : '#dddddd'}`,
      transition: 'all .3s linear',
    }"
  >
    <h1 class="vue-component" :style="{ color: '#41b883' }">
      This is a Vue Component
    </h1>
    <div class="buttons-wrapper">
      <button
        @click="increment"
        :style="{
          backgroundColor: `${$darkModeEnabled ? '#F0F0F0' : '#BFBFBF'}`,
          transition: 'all .3s linear',
        }"
      >
        Component counter: {{ counter }}
      </button>
      <button
        @click="globalCounter.set($globalCounter + 1)"
        :style="{
          backgroundColor: `${$darkModeEnabled ? '#F0F0F0' : '#BFBFBF'}`,
          transition: 'all .3s linear',
        }"
      >
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
h1 {
  margin-bottom: 1.4rem;
  font-weight: 700;
  user-select: none;
  -webkit-text-stroke: 1.1px #111;
}
button {
  font-size: clamp(0.7rem, 1.8vmin, 2rem);
  user-select: none;
  padding: 0.3rem 1.3rem;
  border-radius: 0.5em;
  border: none;
}
button:focus {
  outline: none;
}
.vue-component {
  font-size: clamp(1.4rem, 4vmin, 6rem);
}
.vue-component-wrapper {
  border: 3px solid #41b883;
  box-shadow: 0 0 16px 0px #41b883, inset 0 0 16px 0px #41b883;
}
.buttons-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
}
</style>
