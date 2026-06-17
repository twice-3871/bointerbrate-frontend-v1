<script>
  // @ts-nocheck

  import { user } from "$lib/auth";

  const API_URL = import.meta.env.VITE_API_URL;
</script>

<nav class="bg-blue-500 flex items-center justify-between p-1">
  <img
    class="h-full w-128 object-cotain p-2"
    src="/bblogo.png"
    alt="Bointerbrate"
  />

  <div class="m-5 flex justify-center items-center gap-6 text-2xl text-white">
    <a href="/">Home</a>
    <a href="/list/classic">List</a>
    <a href="/rules">Rules</a>
    <a href="/submit">Submit</a>
    {#if $user}
      <img
        src={`https://cdn.discordapp.com/avatars/${$user.id}/${$user.avatar}.png`}
        alt="avatar"
        class="w-15 h-15 rounded-full"
      />
    {:else}
      <a href="{API_URL}/auth/login">Log In</a>
    {/if}
  </div>
</nav>
