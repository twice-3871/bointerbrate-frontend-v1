<script>
  import { initAuth } from "$lib/auth";
  import { onMount } from "svelte";

  onMount(async () => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (!token) return;

    localStorage.setItem("token", token);

    await initAuth();

    window.location.replace("/");
  });
</script>

<p>Logging you in...</p>
