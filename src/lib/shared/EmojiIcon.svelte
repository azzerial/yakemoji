<script lang="ts">
  import type { Emoji } from "../types";
  import { getEmojiUrl } from "../util/emoji";

  export let emoji: Emoji;
  export let size = 32;
</script>

<img 
  width={size}
  height={size}
  src={getEmojiUrl(emoji)}
  alt={emoji.name}
  draggable={false}
/>

<style></style>