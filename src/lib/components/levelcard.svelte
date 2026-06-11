<script>
  let { level } = $props();
</script>

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
