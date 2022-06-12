<script lang="ts">
  export let options: Option[];
  export let selectedOptions: Option[] = [];
  export let colour: string;
  export let limit: number = 3;

  import { darken, setLightness } from 'polished';
  import { flip } from 'svelte/animate';
  import { quintOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';
  import { moveOption, Option } from './stores/options/options.utils';

  //////////////// colours ////////////////
  const unselectedColour = colour;
  const unselectedButton = setLightness(0.75, colour);
  const selectedColour = darken(0.1, colour);
  const selectedButton = darken(0.5, colour);

  //////////////// animation ////////////////
  const [send, receive] = crossfade({
    duration: 200,
    easing: quintOut,

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;

      return {
        duration: 100,
        easing: quintOut,
        css: (t) => `
        transform: ${transform} scale(${t});
        opacity: ${t}
				`,
      };
    },
  });

  //////////////// methods ////////////////
  function selectOption(optionId: number) {
    const [newUnSelected, newSelected] = moveOption(
      options,
      selectedOptions,
      optionId
    );
    options = newUnSelected;
    selectedOptions = newSelected;
  }
  function unselectOption(optionId: number) {
    const [newSelected, newOptions] = moveOption(
      selectedOptions,
      options,
      optionId
    );
    options = newOptions;
    selectedOptions = newSelected;
  }
</script>

<section
  class="unselected"
  style="--unselected:{unselectedColour}; --unselected-btn:{unselectedButton};"
>
  {#each options as nameOption (nameOption.id)}
    <button
      in:receive={{ key: nameOption.id }}
      out:send={{ key: nameOption.id }}
      animate:flip
      disabled={selectedOptions.length >= limit}
      on:click={() => selectOption(nameOption.id)}
    >
      {nameOption.name}
    </button>
  {/each}
</section>

<section
  class="selected"
  style="--selected:{selectedColour}; --selected-btn:{selectedButton};"
>
  {#each selectedOptions as selected (selected.id)}
    <button
      in:receive={{ key: selected.id }}
      out:send={{ key: selected.id }}
      animate:flip
      on:click={() => unselectOption(selected.id)}
    >
      {selected.name}
    </button>
  {/each}
</section>

<style lang="scss">
  section {
    min-height: 50px;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    gap: 5px;

    & > button {
      flex-grow: 1;
      color: rgb(255, 255, 255);
      font-weight: 700;
      min-width: 50px;
      border: 1px solid hsla(0, 100%, 90%, 0.3);
      /* border: 1px solid hsla(0, 0%, 0%, 0.3); */
      padding: 3px 8px;
      border-radius: 4px;
      transition: all 70s;
    }

    &.unselected {
      background-color: var(--unselected);
      & > button {
        background-color: var(--unselected-btn);
      }
    }
    &.selected {
      background-color: var(--selected);
      & > button {
        background-color: var(--selected-btn);
      }
    }
  }
</style>
