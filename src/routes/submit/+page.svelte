<script lang="ts">
  import { api } from "$lib/api";

  let level_id: string = $state("");
  let progress: number = $state(0);
  let video_url: string = $state("");

  let loading = $state(false);
  let error = $state("");
  let success = $state(false);

  let type_of_level = $state("classic");

  type Level = {
    level_id: number;
    level_name: string;
    level_pos: number;
  };

  let levels = $state(<Level[]>[]);

  async function submit() {
    loading = true;

    try {
      await api("submit", {
        method: "POST",
        body: JSON.stringify({
          level_id: Number(level_id),
          progress: Number(progress),
          video_url: String(video_url),
        }),
      });

      success = true;
      error = "";
      level_id = "";
      progress = 0;
      video_url = "";
    } catch (e) {
      error = "Failed to submit record";
      success = false;
    } finally {
      loading = false;
    }
  }

  async function loadLevels() {
    try {
      levels = await api(`levels/${type_of_level}/all`);
      level_id = "";
    } catch (e) {
      error = "Failed to load levels";
    }
  }

  $effect(() => {
    loadLevels();
  });
</script>

<div class="flex justify-center p-6">
  <form
    class="w-full max-w-2xl bg-blue-500 text-white rounded-2xl shadow-lg p-6 space-y-5"
    onsubmit={(e) => {
      e.preventDefault();
      submit();
    }}
  >
    <h1 class="text-2xl font-bold text-center">Submit Record</h1>

    <div class="flex flex-col gap-1">
      <label for="type-of-level" class="opacity-80">Level Type</label>
      <select
        id="type-of-level"
        class="p-2 rounded text-black"
        bind:value={type_of_level}
      >
        <option value="classic">Classic</option>
        <option value="challenge">Challenge</option>
        <option value="platformer">Platformer</option>
      </select>
    </div>

    <div class="flex flex-col gap-1">
      <label for="level-select" class="opacity-80">Level</label>
      <select
        id="level-select"
        class="p-2 rounded text-black"
        bind:value={level_id}
      >
        <option value="">Select a level</option>

        {#each levels as level}
          <option value={level.level_id}>
            #{level.level_pos} - {level.level_name}
          </option>
        {/each}
      </select>
    </div>

    <div class="flex flex-col gap-1">
      <label for="progress-input" class="opacity-80">Progress (%)</label>
      <input
        id="progress-input"
        class="p-2 rounded text-black"
        type="number"
        min="0"
        max="100"
        bind:value={progress}
        placeholder="e.g. 75"
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="video-url-input" class="opacity-80">Video URL</label>
      <input
        id="video-url-input"
        class="p-2 rounded text-black"
        type="url"
        bind:value={video_url}
        placeholder="https://youtube.com/..."
      />
    </div>

    <button
      class="w-full bg-white text-blue-600 font-semibold py-2 rounded hover:opacity-90 disabled:opacity-50"
      disabled={loading}
      type="submit"
      onclick={submit}
    >
      {loading ? "Submitting..." : "Submit Record"}
    </button>

    {#if error}
      <p class="text-red-200 text-sm text-center">{error}</p>
    {/if}

    {#if success}
      <p class="text-green-200 text-sm text-center">Submitted successfully!</p>
    {/if}
  </form>
</div>
