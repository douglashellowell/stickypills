<script lang="ts">
  export let options: Option[];
  export let selectedOptions: Option[] = [];
  export let colour: string;
  export let limit: number = 3;

  import { flip } from 'svelte/animate';
  import { quintOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';
  import { moveOption, Option } from './stores/options/options.utils';

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

<section class={`unselected ${colour}`}>
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

<section class={`selected ${colour}`}>
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
      border: 1px solid hsla(0, 0%, 0%, 0.197);
      padding: 3px 8px;
      border-radius: 4px;
      transition: all 70s;
    }

    &.unselected {
      &.reddish {
        background-color: hsla(0, 80%, 91%, 0.512);
        & > button {
          background-color: hsla(0, 80%, 85%, 1);
        }
      }
      &.washed {
        background-color: hsla(230, 13%, 91%, 0.512);
        & > button {
          background-color: hsla(230, 13%, 85%, 1);
        }
      }
      &.blueish {
        background-color: hsla(230, 80%, 91%, 0.512);
        & > button {
          background-color: hsla(230, 80%, 85%, 1);
        }
      }
    }
    &.selected {
      &.reddish {
        background-color: hsla(0, 80%, 91%, 0.812);
        & > button {
          background-color: hsla(0, 80%, 65%, 1);
        }
      }
      &.washed {
        background-color: hsla(230, 13%, 91%, 0.812);
        & > button {
          background-color: hsla(230, 13%, 65%, 1);
        }
      }
      &.blueish {
        background-color: hsla(230, 80%, 91%, 0.812);
        & > button {
          background-color: hsla(230, 80%, 65%, 1);
        }
      }
    }
  }
</style>
