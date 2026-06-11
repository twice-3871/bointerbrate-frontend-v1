<script>
  import { onMount } from "svelte";

  onMount(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, "", "/");
    }
  });
</script>

<p>Logging you in...</p>
