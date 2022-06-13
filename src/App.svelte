<script lang="ts">
  import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore';
  import db from './firebase/firebase';
  import HelpBar from './lib/HelpBar/HelpBar.svelte';
  import Selector from './lib/Selector.svelte';
  import type { Option } from './lib/stores/options/options.utils';
  import {
    generateOptions,
    getRandomCureMethod,
    getRandomNameFragment,
    getRandomSideEffect,
  } from './lib/stores/options/options.utils';
  import RoomTabs from './LoginSelect/RoomTabs.svelte';

  ///////////// state /////////////
  let username: null | string = 'bob';
  let roomData = [];
  /////////////////////////////////

  /////////////////ROUTING//////////////
  let page: string;
  let isHomePage: boolean;
  let roomCode: string;

  $: page = window.location.pathname;

  function navigateTo(path: string) {
    window.location.href = window.location.origin + path;
  }
  console.log(window.location);

  //////////////////////////////////////

  /////////// lifecycle ///////////

  ///////////////generateRoom//////////////////
  function generateRoomCode(): string {
    const lettersInAlphabet = 26;
    const unicodeOffset = 65;
    const codeLength = 4;

    let roomCode = '';
    for (let i = 0; i < codeLength; i++) {
      roomCode += String.fromCharCode(
        Math.floor(Math.random() * lettersInAlphabet) + unicodeOffset
      );
    }
    return roomCode;
  }
  ///////////create room ////////////////
  async function createRoom(roomCode: string) {
    try {
      const gamesRef = collection(db, 'games');
      await setDoc(doc(gamesRef, roomCode), {
        players: [],
      });
      console.log(`doc ${roomCode} written`);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
  //////////////////joinRoom/////////////////
  function joinRoom(username: string, roomCode: string) {
    // games
    // roomcode
    type Card = { type: string; text: string };
    const newUser: { name: string; cards: Card[] } = {
      name: username,
      cards: [],
    };

    const gamesRef = doc(db, 'games', roomCode);
    setDoc(gamesRef, {
      players: [newUser],
    });

    const unsub = onSnapshot(doc(db, 'games', roomCode), (doc) => {
      console.log('from live data: ', doc.data());
    });
  }

  const nameOptions = generateOptions(5, getRandomNameFragment);
  const cureOptions = generateOptions(3, getRandomCureMethod);
  const sideEffects = generateOptions(3, getRandomSideEffect);

  let selectedNameOptions: Option[] = [];
  let selectedCureOptions: Option[] = [];
  let selectedSideEffectOptions: Option[] = [];
</script>

<HelpBar />
<main>
  <!--

  <section>
    <h2>menu</h2>
    <ul>
      <li>play</li>
      <li>rules</li>
    </ul>
  </section>
  -->
  <RoomTabs />
  <!-- <JoinRoom on:joinRoom={(e) => console.log(e.detail)} /> -->

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
    width: min(95%, 500px);
  }
</style>
