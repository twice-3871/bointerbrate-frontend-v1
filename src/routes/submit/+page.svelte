<script lang="ts">
  let data = $props();

  let level_name: string = "";
  let progress: number = 0;
  let video_url: string = "";

  console.log(data.levels);
</script>

<div class="flex flex-col items-center gap-5 m-15">
  <form class="bg-blue-500 w-full max-w-4xl rounded-xl p-6 [&>h1]:font-bold">
    <input bind:value={level_name} />
    <input bind:value={progress} />
    <input bind:value={video_url} />
  </form>
</div>
