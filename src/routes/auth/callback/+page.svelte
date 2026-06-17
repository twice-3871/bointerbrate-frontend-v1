<script context="module">
  export const prerender = false;
</script>

<script>
  import { onMount } from "svelte";

  onMount(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (token) {
      localStorage.setItem("token", token);
      window.location.href = "/";
    }
  });
</script>

<p>Logging you in...</p>
