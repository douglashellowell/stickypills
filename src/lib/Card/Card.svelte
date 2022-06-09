<script lang="ts">
  import CureMethod from './sections/CureMethod.svelte';
  import DrugNameFragment from './sections/DrugNameFragment.svelte';
  import SideEffect from './sections/SideEffect.svelte';
</script>

<div>
  <DrugNameFragment />
  <CureMethod />
  <SideEffect />
</div>

<style>
  div {
    border: 1px solid grey;
  }
</style>
