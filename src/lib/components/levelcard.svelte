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
  <a href={`/level/${level.level_id}`} class="block">
    <div class="bg-blue-500 w-200 mb-5 flex">
      <img
        src={getYoutubeThumbnail(level.verification_url)}
        class="w-56 h-32 object-cover"
        alt={level.level_name}
      />

      <div class="p-4">
        <h2>#{level.level_pos} - {level.level_name}</h2>
        <p>Creator: {level.creator}</p>
        <p>Level ID: {level.level_id}</p>
      </div>
    </div>
  </a>
</div>
