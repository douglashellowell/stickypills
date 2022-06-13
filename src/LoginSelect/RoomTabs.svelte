<script lang="ts">
  import { fly } from 'svelte/transition';
  import CreateRoom from './CreateRoom.svelte';
  import JoinRoom from './JoinRoom.svelte';

  let currentTab: 'join' | 'create' = 'join';

  function selectTab(tab: 'join' | 'create') {
    currentTab = tab;
  }
</script>

<div class="tab-group">
  <button
    class:active={currentTab === 'join'}
    on:click={() => selectTab('join')}
  >
    joinRoom
  </button>
  <button
    class:active={currentTab === 'create'}
    on:click={() => selectTab('create')}
  >
    createRoom
  </button>
</div>

<div class="animation-wrapper">
  <section class="background" />
  <section class="overlay">
    {#if currentTab === 'join'}
      <div
        class="tab-body"
        transition:fly={{ x: -600, duration: 1500, opacity: 9 }}
      >
        <p>{' Sticky Pills |'.repeat(5)}</p>
        <JoinRoom />
      </div>
    {:else}
      <div
        class="tab-body"
        transition:fly={{ x: 600, duration: 1500, opacity: 9 }}
      >
        <p>{' Sticky Pills |'.repeat(5)}</p>
        <CreateRoom />
      </div>
    {/if}
  </section>
</div>

<style lang="scss">
  div.tab-group {
    width: 100%;
    display: flex;
  }

  div.tab-body {
    position: absolute;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
  }
  p {
    background-color: #000;
    color: whitesmoke;
    font-weight: 600;
    padding: 8px 0;
  }
  button {
    &.active {
      background: rgb(255, 220, 244);
    }
    width: 50%;
    padding: 1rem;
  }

  div.animation-wrapper {
    position: relative;
  }
  section {
    height: 600px;
  }
  section.background {
    background-image: url('../assets/bottle.png');
  }
  section.overlay {
    position: absolute;
    top: 0;
    background-color: rgba(0, 255, 255, 0.139);
    width: 100%;
    height: 600px;
    z-index: 2;
  }
</style>
