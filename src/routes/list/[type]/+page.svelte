<script lang="ts">
  let { data } = $props();
  import { goto } from "$app/navigation";
  console.log(data.levels);
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
      <div class="bg-blue-500 w-200 mb-5 text-3xl flex justify-left">
        <div class="flex justify-center items-center h-40">
          <img class="mx-2 h-32" src="/placeholder.png" alt="placeholder" />
        </div>

        <div class="flex items-start">
          <div class="flex flex-col text-2xl font-mono">
            <h2 class="my-2">#{level.level_pos} - {level.level_name}</h2>
            <p class="my-2">Creator: {level.creator}</p>
            <p class="my-2">Level ID: {level.level_id}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
