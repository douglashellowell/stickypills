<script lang="ts">
  import HelpBar from './lib/HelpBar/HelpBar.svelte';
  import Selector from './lib/Selector.svelte';
  import type { Option } from './lib/stores/options/options.utils';
  import {
    generateOptions,
    getRandomCureMethod,
    getRandomNameFragment,
    getRandomSideEffect,
  } from './lib/stores/options/options.utils';

  const nameOptions = generateOptions(5, getRandomNameFragment);
  const cureOptions = generateOptions(3, getRandomCureMethod);
  const sideEffects = generateOptions(3, getRandomSideEffect);

  let selectedNameOptions: Option[] = [];
  let selectedCureOptions: Option[] = [];
  let selectedSideEffectOptions: Option[] = [];
</script>

<HelpBar />
<main>
  <h1>Sticky Pills</h1>
  <!--

  <section>
    <h2>menu</h2>
    <ul>
      <li>play</li>
      <li>rules</li>
    </ul>
  </section>
  -->

  <Selector
    options={nameOptions}
    bind:selectedOptions={selectedNameOptions}
    limit={3}
    colour="hsl(0, 80%, 91%)"
  />
  <Selector
    options={cureOptions}
    bind:selectedOptions={selectedCureOptions}
    limit={2}
    colour="hsl(230, 13%, 91%)"
  />
  <Selector
    options={sideEffects}
    bind:selectedOptions={selectedSideEffectOptions}
    limit={1}
    colour="hsl(230, 80%, 91%)"
  />
  <h2>you have selected</h2>
  {#each selectedNameOptions as selectedName}
    <p>{selectedName.name}</p>
  {/each}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  :global(*) {
    box-sizing: border-box;
  }
  main {
    margin: 0 auto;
  }
</style>
