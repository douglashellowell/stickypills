<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  let roomCodeInput: string = '';

  let usernameInput: string = '';

  let codeLength = 4;

  let placeholderText = 'ROOM';

  setInterval(() => {
    placeholderText = placeholderText === 'ROOM' ? 'CODE' : 'ROOM';
  }, 1000);
</script>

<h2>Join Room</h2>
<form
  on:submit|preventDefault={() =>
    dispatch('joinRoom', { usernameInput, roomCodeInput })}
>
  <label>
    name:
    <input type="text" name="username" id="username" />
  </label>
  <label id="room-code">
    <input
      type="text"
      name="roomCode"
      maxlength={codeLength}
      style="--codeLength:{codeLength}"
      value={roomCodeInput}
      placeholder={placeholderText}
      on:input={(e) => {
        roomCodeInput = e.currentTarget.value.toUpperCase();
      }}
    />
    <div id="character-flexer">
      {#each roomCodeInput.split('') as codeCharacter, i (i)}
        <p transition:slide>{codeCharacter}</p>
      {/each}
    </div>
  </label>
  <button type="submit">join</button>
</form>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
  }

  #room-code {
    font-family: 'Syne Mono', monospace;
    --inputHeight: 50px;
    height: var(--inputHeight);
    position: relative;
    & > input {
      font-family: 'Syne Mono', monospace;
      font-size: 1rem;
      position: relative;
      padding-left: 2ch;
      width: calc(1ch * calc(var(--codeLength) * 4));
      letter-spacing: 2ch;
      z-index: 2;
      height: var(--inputHeight);
      background-color: rgb(77, 137, 24);
      color: hsla(0, 0%, 0%, 0.304);
      box-shadow: inset 0 10px 10px hsla(92, 100%, 10%, 0.6);
      caret-color: hsla(92, 100%, 10%, 0.6);
      border: 4px groove hsla(92, 100%, 10%, 1.6);
      border-radius: 1rem 1rem 0 0;
      &:focus {
        outline: none;
      }
    }
    & > input::placeholder {
      font-family: 'Syne Mono', monospace;
      font-size: 1rem;
      letter-spacing: 2ch;
      text-indent: 1ch;
    }

    & > div#character-flexer {
      display: flex;
      flex-direction: row;
      position: relative;
      top: calc(var(--inputHeight) * -1);
      z-index: 3;
      margin-left: 2ch;
    }
  }

  p {
    position: relative;
    width: fit-content;
    text-shadow: 0px 0px 1px hsl(92, 100%, 44%),
      0px 0px 4px rgba(104, 224, 0, 0.6);
    color: hsl(92, 100%, 10%);
    letter-spacing: 2ch;
    padding-left: 2px;
    font-family: 'Courier New', Courier, monospace sans-serif;
  }
</style>
