<script lang="ts">
  let { data } = $props();

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

<div class="flex justify-center m-10">
  <div class="w-full max-w-5xl space-y-6">
    <!-- LEVEL HEADER -->
    <div class="bg-blue-500 rounded-xl p-6 text-white shadow-lg">
      <div>
        <a href={`/list/${Level.type_of_level}`}>Back</a>
        <div>
          <h1 class="text-3xl font-bold">
            #{Level.level_pos} — {Level.level_name}
          </h1>

          <p class="opacity-80 mt-1">
            Created by <span class="font-semibold">{Level.creator}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- MAIN GRID -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- LEFT: VIDEO + SONG -->
      <div class="md:col-span-2 space-y-6">
        <!-- Verification Video -->
        <div class="bg-gray-800 rounded-xl overflow-hidden shadow">
          <img
            src={getYoutubeThumbnail(Level.verification_url)}
            class="w-full h-64 object-cover"
            alt="verification"
          />

          <div class="p-4 flex justify-between items-center">
            <p class="text-white font-medium">Verification</p>
            <a
              href={Level.verification_url}
              target="_blank"
              class="text-blue-400 hover:underline"
            >
              Watch →
            </a>
          </div>
        </div>

        <!-- Song -->
        <div class="bg-gray-800 text-white p-4 rounded-xl">
          <p class="text-sm opacity-70">Song</p>
          <p class="text-lg font-semibold">{Level.song}</p>
        </div>
      </div>

      <!-- RIGHT: STATS -->
      <div class="space-y-4">
        <div class="bg-gray-800 text-white p-4 rounded-xl">
          <p class="text-sm opacity-70">List Position</p>
          <p class="text-2xl font-bold">#{Level.level_pos}</p>
        </div>

        <div class="bg-gray-800 text-white p-4 rounded-xl">
          <p class="text-sm opacity-70">Records</p>
          <p class="text-2xl font-bold">{Records.length}</p>
        </div>

        <div class="bg-gray-800 text-white p-4 rounded-xl">
          <p class="text-sm opacity-70">Level Type</p>
          <p class="text-lg font-semibold">{Level.type_of_level}</p>
        </div>
      </div>
    </div>

    <!-- RECORDS SECTION -->
    <div class="bg-gray-900 text-white rounded-xl p-6">
      <h2 class="text-xl font-bold mb-4">Records</h2>

      {#if Records.length === 0}
        <p class="opacity-60">No records yet.</p>
      {:else}
        <div class="space-y-3">
          {#each Records as record}
            <div
              class="bg-gray-800 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <p class="font-semibold">
                  {record.username}
                  {record.progress}%
                </p>
                <p class="text-sm opacity-70">
                  {new Date(record.created_at).toLocaleDateString()}
                </p>
              </div>

              <a
                href={record.video_url}
                target="_blank"
                class="text-blue-400 hover:underline"
              >
                Link
              </a>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
