<script>
  import { onMount } from "svelte";

  export const prerender = false;

  onMount(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (token) {
      localStorage.setItem("token", token);
      window.location.href = "/";
    }
  });
</script>

<p>Logging you in...</p>
