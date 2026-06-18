<script lang="ts">
  let open = $state(false);
  import { user } from "$lib/auth";
  const API_URL = import.meta.env.VITE_API_URL;
</script>

<nav class="bg-blue-500 text-white px-4 py-3 flex items-center justify-between">
  <!-- Logo -->
  <img src="/bblogo.png" alt="Bointerbrate" class="h-10 object-contain" />

  <!-- Desktop links + auth (COMBINED) -->
  <div class="hidden md:flex items-center gap-4 text-xl">
    <a href="/" class="hover:opacity-80">Home</a>
    <a href="/list/classic" class="hover:opacity-80">List</a>
    <a href="/submit" class="hover:opacity-80">Submit</a>
    <a href="/rules" class="hover:opacity-80">Rules</a>

    <!-- Auth lives WITH links now -->
    {#if $user}
      <img
        src={`https://cdn.discordapp.com/avatars/${$user.id}/${$user.avatar}.png`}
        class="w-11 h-11 rounded-full ml-2"
        alt="avatar"
      />
    {:else}
      <a
        href={`${API_URL}/auth/login`}
        class="bg-white text-blue-600 px-4 py-1 rounded text-base font-medium ml-2"
      >
        Log In
      </a>
    {/if}
  </div>

  <!-- Mobile button -->
  <button class="md:hidden text-2xl" onclick={() => (open = !open)}> ☰ </button>
</nav>

<!-- Mobile menu -->
{#if open}
  <div class="md:hidden bg-blue-600 text-white px-4 py-3 flex flex-col gap-3">
    <a href="/" onclick={() => (open = false)}>Home</a>
    <a href="/list/classic" onclick={() => (open = false)}>List</a>
    <a href="/submit" onclick={() => (open = false)}>Submit</a>
    <a href="/rules" onclick={() => (open = false)}>Rules</a>

    <div class="border-t border-white/20 pt-3 mt-2">
      {#if $user}
        <div class="flex items-center gap-2">
          <img
            src={`https://cdn.discordapp.com/avatars/${$user.id}/${$user.avatar}.png`}
            class="w-9 h-9 rounded-full"
          />
          <span class="text-sm">{$user.username}</span>
        </div>
      {:else}
        <a
          href={`${API_URL}/auth/login`}
          class="bg-white text-blue-600 px-3 py-1 rounded inline-block"
          onclick={() => (open = false)}
        >
          Log In
        </a>
      {/if}
    </div>
  </div>
{/if}
