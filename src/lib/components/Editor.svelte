<script lang="ts">
  import { onDestroy } from "svelte";
  import type { Emoji, Section, State, YakSection } from "../types";
  import { EmojiIcon } from "../shared";
  import { appState } from "../stores/state";
  import { BACKGROUND_POOL } from "../util/backgrounds";
  import { AngleDown, AngleRight } from "../util/icons";

  let state: State<YakSection>;
  const unsubscribe = appState.subscribe(value => state = value);

  const parts: Section[] = Object.keys(state.template)
    .filter((key) => !key.startsWith("_"))
    .map((key) => {
      return {
        name: key,
        pool: state.template[key].pool
      };
    });
  const openSection = new Array<Boolean>(parts.length + 1).fill(true);

  const setPart = (name: string, emoji: Emoji) => {
    if (name === "background") {
      if (state.background.value === emoji.value) {
        return;
      }
      appState.update((value) => {
        state.background = emoji;
        return value;
      });
      return;      
    }
    if (state.entity[name].value === emoji.value) {
      return;
    }
    appState.update((value) => {
      value.entity[name] = emoji;
      return value;
    });
  };

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="container">
  <div class="part">
    <div
      class="label" 
      on:click={() => openSection[0] = !openSection[0]}
    >
      BACKGROUND
      {#if openSection[0]}
        {@html AngleDown(12)}
      {:else}
        {@html AngleRight(12)}
      {/if}
    </div>
    {#if openSection[0]}
      <div class="pool">
        {#each BACKGROUND_POOL as emoji}
          <div class="emoji" on:click={() => {setPart("background", emoji)}}>
            <EmojiIcon emoji={emoji} size={36} />
          </div>
        {/each}
      </div>
    {/if}
  </div>
  {#each parts as part, i}
    <div class="part">
      <div
        class="label" 
        on:click={() => openSection[i + 1] = !openSection[i + 1]}
      >
        {part.name.toUpperCase()}
        {#if openSection[i + 1]}
          {@html AngleDown(12)}
        {:else}
          {@html AngleRight(12)}
        {/if}
      </div>
      {#if openSection[i + 1]}
        <div class="pool">
          {#each part.pool as emoji}
            <div class="emoji" on:click={() => {setPart(part.name, emoji)}}>
              <EmojiIcon emoji={emoji} size={36} />
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .container {
    width: 392px;
    height: 307.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: #282B30;
    border-radius: 8px;
    overflow-y: scroll;
  }

  .part {
    margin: 8px;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .label {
    font-size: 18px;
    font-weight: 700;
    margin-left: 4px;
    margin-bottom: 4px;
    cursor: pointer;
  }

  .pool {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .emoji {
    width: 46px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .emoji:hover {
    background: #414349;
    border-radius: 8px;
  }

  .blink-effect {
    animation: blink_effect 2s ease-in-out infinite;
  }

  @keyframes blink_effect {
    50% {
      opacity: 0.5;
    }
  }

  @media (max-width: 1080px) {
    .container {
      width: 607px;
      height: 250px;
    }
  }
</style>