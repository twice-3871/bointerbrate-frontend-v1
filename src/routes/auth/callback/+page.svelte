<script>
  import { initAuth } from "$lib/auth";
  import { onMount } from "svelte";

  onMount(async () => {
    const query = new URLSearchParams(window.location.search);

    const hash = new URLSearchParams(window.location.hash.replace("#", ""));

    const token = query.get("token") || hash.get("token");

    console.log("token:", token);

    if (!token) return;

    localStorage.setItem("token", token);

    await initAuth();
    window.location.replace("/");
  });
</script>
