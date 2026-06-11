<script lang="ts">
  let { data } = $props();
  import { goto } from "$app/navigation";
  import Levelcard from "$lib/components/levelcard.svelte";
</script>

<div class="flex justify-center">
  <button
    onclick={() => goto("/list/classic")}
    class="cursor-pointer m-2 bg-blue-500">Classic</button
  >
  <button
    onclick={() => goto("/list/challenge")}
    class="cursor-pointer m-2 bg-blue-500">Challenge</button
  >
  <button
    onclick={() => goto("/list/platformer")}
    class="cursor-pointer m-2 bg-blue-500">Platformer</button
  >
</div>

<div class="flex justify-center">
  <div class="flex flex-col">
    {#each data.levels as level}
      <Levelcard {level} />
    {/each}
  </div>
</div>
