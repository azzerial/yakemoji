<script lang="ts">
  export let label: string;
  export let onClick: () => void;
  export let disabled = false;

  let button: HTMLButtonElement;

  const callback = () => {
    onClick();
    button.blur();
  };
</script>

<button 
  bind:this={button} 
  on:click={callback}
  {disabled}
>
  {label}
</button>

<style>
  button {
    padding: 8px 16px;
    background: #282B30;
    font-size: 16px;
    color: #F2F3F5;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover:not(:disabled) {
    border-color: #7289DA;
  }

  button:active {
    color: #7289DA;
  }

  button:focus,
  button:focus-visible {
    outline: 1px solid #7289DA;
    outline-offset: -1px;
  }

  button:disabled {
    color: #414349;
    cursor: not-allowed;
  }

</style>