<script>
  import { initAuth } from "$lib/auth";
  import { onMount } from "svelte";

  onMount(async () => {
    console.log("🔥 CALLBACK HIT");

    const hash = window.location.hash; // raw string

    console.log("RAW HASH:", hash);

    let token = null;

    if (hash.startsWith("#token=")) {
      token = hash.replace("#token=", "");
    }

    console.log("EXTRACTED TOKEN:", token);

    if (!token) return;

    localStorage.setItem("token", token);

    console.log("stored:", localStorage.getItem("token"));

    await initAuth();
  });
</script>
