<script lang="ts">
  export let value = "";
  export let placeholder = "";
  export let pattern = "";
  export let disabled = false;
  export let readonly = false;
</script>

<input 
  type="text"
  value={value}
  placeholder={placeholder}
  pattern={pattern}
  disabled={disabled}
  readonly={readonly}
/>

<style>
  input {
    padding: 8px 16px;
    background: #282B30;
    color: #F2F3F5;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: text;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: #7289DA;
  }

  button:focus,
  button:focus-visible {
    outline: 1px solid #7289DA;
    outline-offset: -1px;
  }
</style>