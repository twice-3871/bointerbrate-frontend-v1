<script lang="ts">
  let open = $state(false);
  import { user } from "$lib/auth";
  const API_URL = import.meta.env.VITE_API_URL;
</script>

<nav class="bg-blue-600 text-white px-4 py-3">
  <div class="flex justify-between items-center">
    <!-- Logo -->
    <div class="font-bold text-lg">Bointerbrate</div>

    <!-- Desktop links -->
    <div class="hidden md:flex gap-4">
      <a href="/">Home</a>
      <a href="/list/classic">List</a>
      <a href="/submit">Submit</a>
      {#if $user}
        <img
          src={`https://cdn.discordapp.com/avatars/${$user.id}/${$user.avatar}.png`}
          alt="avatar"
          class="w-15 h-15 rounded-full"
        />
      {:else}
        <a href={`${API_URL}/auth/login`}>Log In</a>
      {/if}
    </div>

    <!-- Mobile button -->
    <button class="md:hidden" onclick={() => (open = !open)}> ☰ </button>
  </div>

  <!-- Mobile menu -->
  {#if open}
    <div class="flex flex-col gap-3 mt-3 md:hidden">
      <a href="/" onclick={() => (open = false)}>Home</a>
      <a href="/list/classic" onclick={() => (open = false)}>List</a>
      <a href="/submit" onclick={() => (open = false)}>Submit</a>
      {#if $user}
        <img
          src={`https://cdn.discordapp.com/avatars/${$user.id}/${$user.avatar}.png`}
          alt="avatar"
          class="w-15 h-15 rounded-full"
        />
      {:else}
        <a href={`${API_URL}/auth/login`} onclick={() => (open = false)}
          >Log In</a
        >
      {/if}
    </div>
  {/if}
</nav>
