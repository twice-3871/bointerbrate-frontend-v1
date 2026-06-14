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
          video_url,
        }),
      });

      success = true;
      level_id = "";
      progress = 0;
      video_url = "";
    } catch (e) {
      error = "Failed to submit record";
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

<div class="flex flex-col items-center gap-5 m-15">
  <form
    class="flex flex-col bg-blue-500 w-full max-w-4xl rounded-xl p-6 [&>h1]:font-bold"
    onsubmit={(e) => {
      e.preventDefault();
      submit();
    }}
  >
    <select bind:value={type_of_level}>
      <option value="classic">Classic</option>
      <option value="challenge">Challenge</option>
      <option value="platformer">Platformer</option>
    </select>

    <select bind:value={level_id}>
      <option value="">Select a level</option>

      {#each levels as level}
        <option value={level.level_id}>
          #{level.level_pos} - {level.level_name}
        </option>
      {/each}
    </select>

    <input bind:value={progress} placeholder="Progress" />
    <input bind:value={video_url} placeholder="Video URL" />

    <button disabled={loading} type="submit">
      {loading ? "Submitting..." : "Submit"}
    </button>
  </form>

  {#if error}
    <p>{error}</p>
  {/if}

  {#if success}
    <p>Submitted!</p>
    {(error = "")}
  {/if}
</div>
