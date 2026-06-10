<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import Navbar from "$lib/components/navbar.svelte";
  import "$lib/assets/app.css";
  import { onMount } from "svelte";
  import { initializedAuth } from "$lib/auth";

  onMount(() => {
    initializedAuth();
  });

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-[url('/background.png')] bg-cover bg-center">
  <div
    class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"
  >
    <div class="relative z-10 backdrop-blur-sm">
      <Navbar />
      {@render children()}
    </div>
  </div>
</div>
