<script lang="ts">
  let { data } = $props();

  console.log(data.level_data);

  const {
    level_data: { Level, Records },
  } = $derived(data);

  function getYoutubeThumbnail(url: string) {
    if (!url) return "/placeholder.png";
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);

    if (!match) return "/placeholder.png";

    return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  }
</script>

<div class="flex justify-center gap-5 m-15">
  <div class="flex flex-col bg-blue-500 w-full max-w-4xl rounded-xl p-6">
    <h1>
      #{Level.level_pos} - {Level.level_name}
    </h1>
  </div>
</div>
