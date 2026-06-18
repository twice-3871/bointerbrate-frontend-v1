<script>
  import { initAuth } from "$lib/auth";
  import { onMount } from "svelte";

  onMount(async () => {
    console.log("URL:", window.location.href);
    console.log("Search:", window.location.search);

    const params = new URLSearchParams(window.location.search);

    console.log("full query:", window.location.search);

    const token = params.get("token");
    console.log("token:", token);

    if (!token) return;

    localStorage.setItem("token", token);
    console.log("stored:", localStorage.getItem("token"));

    await initAuth();

    window.location.replace("/");
  });
</script>
