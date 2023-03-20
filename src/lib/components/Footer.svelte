<script lang="ts">
  import { EmojiIcon, Link } from "../shared";
  import { SYMBOLS } from "../util/emoji";
</script>

<div class="footer">
  <span>Yakemoji v0.1</span>
  |
  <Link href="https://github.com/azzerial/yakemoji">Github</Link>
  |
  <span>
    Made with 
    <span class="heart-emoji">
      <EmojiIcon emoji={SYMBOLS.HEART} size={16} />
    </span>
    in 
    <Link href="https://svelte.dev">Svelte</Link> 
    &amp; 
    <Link href="https://deno.land">Deno</Link> 
  </span>
</div>

<style>
  .footer {
    height: 32px;
    background: #282B30;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }

  .heart-emoji {
    position: relative;
    bottom: -2px;
  }
</style>