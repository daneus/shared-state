<script lang="ts">
  import { globalCounter } from '../store';
  import { darkModeEnabled } from '../store';
  let counter = 0;
</script>

<div
  class="svelte-component-wrapper component-wrapper"
  style="background-color:{`${
    $darkModeEnabled ? '#111' : '#ddd'
  }`}; transition:all .3s linear;"
>
  <h1 class="svelte-component" style="color: #ff3e00">
    This is a Svelte Component
  </h1>
  <div class="buttons-wrapper">
    <button
      on:click={() => counter++}
      style="
          background-color: {`${$darkModeEnabled ? '#F0F0F0' : '#BFBFBF'}`};
          transition:all .3s linear;">Component counter: {counter}</button
    >
    <button
      on:click={() => globalCounter.set($globalCounter + 1)}
      style="
          background-color: {`${$darkModeEnabled ? '#F0F0F0' : '#BFBFBF'}`};
          transition:all .3s linear;"
      >Global counter: {$globalCounter}
    </button>
  </div>
</div>

<style>
  .svelte-component {
    font-size: clamp(1.4rem, 4vmin, 6rem);
  }
  .svelte-component-wrapper {
    border: 3px solid #ff3e00;
    box-shadow: 0 0 16px 0px #ff3e00, inset 0 0 16px 0px #ff3e00;
  }
  .buttons-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
  }
</style>
