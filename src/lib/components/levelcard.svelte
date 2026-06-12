<script lang="ts">
  let { level } = $props();

  function getYoutubeThumbnail(url: string) {
    if (!url) return "/placeholder.png";
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);

    if (!match) return "/placeholder.png";

    return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  }
</script>

<div class="bg-blue-500 w-200 mb-5 p-5 text-3xl flex justify-left">
  <div class="w-64 h-36 mr-5 shrink-0">
    <img
      class="w-full h-full object-cover rounded"
      src={getYoutubeThumbnail(level.verification_url)}
      alt={level.level_name}
    />
  </div>

  <div class="flex items-start">
    <div class="flex flex-col font-sans">
      <h2 class="my-2 text-4xl">#{level.level_pos} - {level.level_name}</h2>
      <p class="my-2 text-base font-bold">Published by: {level.creator}</p>
    </div>
  </div>
</div>
