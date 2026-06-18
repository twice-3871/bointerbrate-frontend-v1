<script lang="ts">
  import { api } from "$lib/api";
  import { user } from "$lib/auth";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let error = $state("");
  let loaded = $state(false);

  type Submission = {
    id: number;
    username: string;
    level_name: string;
    video_url: string;
    progress: number;
    status: string;
  };

  let submissions = $state<Submission[]>([]);

  async function loadRecordSubmissions() {
    try {
      const data = await api<Submission[]>(`submit`);

      submissions = data;
    } catch (e) {
      error = "Failed to load levels";
    }
  }

  async function approveSubmission(id: number) {
    try {
      await api(`submit/${id}/approve`, {
        method: "PATCH",
      });

      await loadRecordSubmissions();
    } catch (e) {
      console.error(e);
    }
  }

  async function rejectSubmission(id: number) {
    try {
      await api(`submit/${id}/reject`, {
        method: "PATCH",
      });

      await loadRecordSubmissions();
    } catch (e) {
      console.error(e);
    }
  }

  $effect(() => {
    if ($user?.is_allowed && !loaded) {
      loaded = true;
      loadRecordSubmissions();
      console.log("user:", $user);
    } else {
      goto("/");
    }
  });
</script>

<div class="flex justify-center gap-5 m-15">
  <table class="bg-blue-500 w-full max-w-4xl rounded-xl text-center">
    <thead>
      <tr>
        <th>Username</th>
        <th>Level</th>
        <th>Video url</th>
        <th>Progress%</th>
      </tr>
    </thead>
    <tbody>
      {#each submissions as submission}
        {#if submission.status === "pending"}
          <tr>
            <td>{submission.username}</td>
            <td>{submission.level_name}</td>
            <td><a href={submission.video_url}>Video</a></td>
            <td>{submission.progress}%</td>

            <td
              ><button onclick={() => approveSubmission(submission.id)}
                >Approve</button
              ></td
            >
            <td
              ><button onclick={() => rejectSubmission(submission.id)}
                >Reject</button
              ></td
            >
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>
