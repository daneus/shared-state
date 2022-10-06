<script lang="ts">
  import { globalCounter } from '../store';
  import { darkModeEnabled } from '../store';
  let counter = 0;
</script>

<div
  class="svelte-component-wrapper"
  style="background-color:{`${
    $darkModeEnabled ? 'black' : 'white'
  }`}; transition:all .3s linear;"
>
  <h1
    class="svelte-component"
    style="color:{`${$darkModeEnabled ? 'white' : 'black'}`}"
  >
    This is a Svelte Component
  </h1>
  <div class="buttons-wrapper">
    <button on:click={() => counter++}>Component counter: {counter}</button>
    <button on:click={() => globalCounter.set($globalCounter + 1)}
      >Global counter: {$globalCounter}
    </button>
  </div>
</div>

<style>
  .svelte-component {
    font-size: clamp(1.8rem, 4vmin, 6rem);
  }
  .svelte-component-wrapper {
    border: 1px solid violet;
  }
  .buttons-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
  }
</style>
