<script lang="ts">
  import { onDestroy } from "svelte";
  import type { Emoji, State, YakSection } from "../types";
  import { Button, EmojiIcon } from "../shared";
  import { appState } from "../stores/state";
  import { YAK_BASE } from "../util/entities";
  import EMOJIPEDIA from "../util/emoji";
  import { renderCanvas } from "../util/rendering";

  let state: State<YakSection>;
  const unsubscribe = appState.subscribe(value => state = value);

  const size = 42;
  let canvas: Emoji[][];

  const reset = () => {
    appState.update((value) => {
      value.background = EMOJIPEDIA.BLACK_LARGE_SQUARE,
      value.entity = { ...YAK_BASE };
      return value;
    });
  };

  const copy = () => {
    let s = "";

    for (let i = 0; i != canvas.length; i++) {
      for (const emoji of canvas[i]) {
        s += emoji.value;
      }
      if (i + 1 != canvas.length) {
        s += "\n";
      }
    }
    navigator.clipboard.writeText(s);
  };

  $: canvas = renderCanvas(state);

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="container">
  <div class="preview">
    <table>
      {#each canvas as row}
        <tr>
          {#each row as emoji}
            <td style:width="{size}px" style:height="{size}px">
              <EmojiIcon emoji={emoji} size={size} />
            </td>
          {/each}
        </tr>
      {/each}
    </table>
  </div>
  <div class="controls">
    <div class="group">
      <Button label="Reset" onClick={reset} />
      <Button label="Copy" onClick={copy} />
      <Button label="Share" onClick={() => {}} disabled />
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .preview {
    background: #282B30;
    border-radius: 8px;
    padding: 4px;
    cursor: default;
  }

  .controls {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .group {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  tr {
    display: flex;
  }

  td {
    padding: 0; 
    margin: 0.25px;
  }
</style>