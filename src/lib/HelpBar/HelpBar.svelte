<script lang="ts">
  //   import { fly } from 'svelte/transition';
  import { slide } from 'svelte/transition';
  let isOpen = false;

  function toggleSidebar() {
    isOpen = !isOpen;
  }

  //   $: helpBarClass = isOpen ? 'open' : 'closed';
  //   $: console.log(helpBarClass);
</script>

<button on:click={toggleSidebar}>help</button>

{#if isOpen}
  <section transition:slide={{ duration: 300 }}>
    <h2>How to play</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, vel
      non et facere labore nemo voluptates sapiente! Quasi cupiditate, animi
      labore nulla exercitationem iusto totam, sequi ratione optio explicabo
      alias. Saepe earum dicta atque velit, aliquam, quas enim error,
      voluptatibus quae voluptates maiores molestiae. Nobis ipsum quisquam enim
      totam incidunt. Dicta modi beatae in dignissimos minus eos, praesentium
      ullam ipsa! Iste optio cupiditate iure obcaecati voluptas recusandae,
      quaerat magnam? Tempora, voluptatum? Animi nesciunt expedita totam aliquam
      commodi consectetur, odit vel rerum architecto dolorem perferendis?
      Deleniti fugiat aspernatur cupiditate labore fuga. Accusantium eos fuga
      quidem eum praesentium mollitia maxime impedit qui fugit dolor vel quo
      repudiandae, minus repellat debitis illo. Enim est quidem, expedita
      eligendi incidunt placeat odit vitae unde amet. Sapiente soluta, saepe
      obcaecati nam quo similique dicta porro possimus eos magnam quas totam
      nisi fugiat autem perspiciatis est inventore aspernatur quae explicabo in.
      Quae nesciunt aliquid veritatis quasi molestias?
    </p>
  </section>
{/if}

<style>
  section {
    --bar-width: 300px;
    position: absolute;
    width: var(--bar-width);
    z-index: 998;
    top: 0;
    right: 0;
    height: 100vh;

    overflow-y: scroll;

    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.865);
    backdrop-filter: blur(3px);
  }

  button {
    position: absolute;
    right: 1rem;
    z-index: 999;
  }
</style>
