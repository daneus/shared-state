<script lang="ts">
  import {globalCounter} from '../store'
  import {darkModeEnabled} from "../store"
  let counter = 0
</script>

<button on:click={()=>counter++}>{counter}</button>
<button on:click={()=>globalCounter.set($globalCounter+1)}>Global counter {$globalCounter}</button>
<div style="background-color:{`${$darkModeEnabled ? 'black':'white'}`}; transition:all .5s linear;">
  <h1 style="color:{`${$darkModeEnabled ? 'white' :'black'}`}">This is a Svelte Component</h1>
</div>

<style>
</style>
