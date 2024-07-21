<svelte:head>
  <title>TO DO LIST</title>
</svelte:head>

<script lang="ts">
import Header from "$lib/Header.svelte";
import {tasks} from '$lib/stores/tasks';
import dayjs from "dayjs";

let title="";
function addTask() {
 tasks.update((currentTasks) => {
 currentTasks.push({
  title,
  assignedDate: dayjs(),
  isDone: false,
  });
  return currentTasks;
 });
 title="";
}
</script>

<div class="p-14 flex flex-col gap-6">
  <Header />
  <div class="input-group input-group-divider flex justify-between rounded-full">
    <input bind:value={title} class ="flex-1 !bg-white" type="search" placeholder="Task..." />
    <button on:click={addTask} class="variant-soft-tertiary">Add</button>
   </div>
</div>
