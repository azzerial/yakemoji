<script lang="ts">
  import { Editor, Footer, Title, Preview } from "./lib/components";
</script>

<main class="layout">
  <div class="title">
    <Title />
  </div>
  <div class="app">
    <Editor />
    <Preview />
  </div>
  <div class="footer">
    <Footer />
  </div>
</main>

<style>
  .layout {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    height: 0;
    translate: 0 32px;
  }

  .app {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  .footer {
    width: 100%;
  }

  @media (max-width: 1080px) {
    .title {
      height: unset;
      margin-top: 32px;
      translate: unset;
    }

    .app {
      flex-direction: column-reverse;
    }
  }

</style>