<template>
  <button @click="increment">{{ counter }}</button>
  <button @click="globalCounter.set($globalCounter + 1)">
    Global counter {{ $globalCounter }}
  </button>
  <div
    :style="{
      backgroundColor: `${$darkModeEnabled ? 'black' : 'white'}`,
      transition: 'all .5s linear',
    }"
  >
    <h1 :style="{ color: `${$darkModeEnabled ? 'white' : 'black'}` }">
      This is a Vue Component
    </h1>
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

<style></style>
