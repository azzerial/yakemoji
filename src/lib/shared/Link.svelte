<script lang="ts">
  export let href: string;
</script>

<a href={href} target="_blank">
  <slot />
</a>

<style>
  a {
    color: #F2F3F5;
    text-decoration: underline;
  }
  
  a:hover {
    color: #7289DA;
  }

  a:focus,
  a:focus-visible {
    border-radius: 2px;
    outline: 1px dashed #7289DA;
    outline-offset: 2px;
  }
</style>

