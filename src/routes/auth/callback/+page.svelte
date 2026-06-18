<script>
  import { initAuth } from "$lib/auth";
  import { onMount } from "svelte";

  onMount(() => {
    console.log("🔥 CALLBACK HIT");

    console.log("href:", window.location.href);
    console.log("search:", window.location.search);
    console.log("hash:", window.location.hash);

    const token = "TEST_TOKEN";
    localStorage.setItem("token", token);

    console.log("stored:", localStorage.getItem("token"));
  });
</script>
