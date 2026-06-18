<script lang="ts">
  let open = $state(false);
</script>

<nav class="bg-blue-600 text-white px-4 py-3">
  <div class="flex justify-between items-center">
    <!-- Logo -->
    <div class="font-bold text-lg">Bointerbrate</div>

    <!-- Desktop links -->
    <div class="hidden md:flex gap-4">
      <a href="/">Home</a>
      <a href="/levels">Levels</a>
      <a href="/submit">Submit</a>
    </div>

    <!-- Mobile button -->
    <button class="md:hidden" onclick={() => (open = !open)}> ☰ </button>
  </div>

  <!-- Mobile menu -->
  {#if open}
    <div class="flex flex-col gap-3 mt-3 md:hidden">
      <a href="/" onclick={() => (open = false)}>Home</a>
      <a href="/levels" onclick={() => (open = false)}>Levels</a>
      <a href="/submit" onclick={() => (open = false)}>Submit</a>
    </div>
  {/if}
</nav>
