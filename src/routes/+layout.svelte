<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import Navbar from "$lib/components/navbar.svelte";
  import "$lib/assets/app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-[url('/rodwave.png')] bg-repeat-round h-1280">
  <Navbar />

  {@render children()}
</div>
