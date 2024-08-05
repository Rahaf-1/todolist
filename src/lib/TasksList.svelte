<script lang="ts">
 import dayjs from "dayjs";
 import {tasks} from "./stores/tasks";
 import relativeTime from 'dayjs/plugin/relativeTime';
 import TaskListItems from "$lib/TaskListItems.svelte";
import { fade } from "svelte/transition";

 dayjs.extend(relativeTime);
</script>

{#if $tasks.length == 0}
<div class ="flex flex-col items-center justify-center h-[50dvh]">
  <img src="/waiting.svg" class="w-32 h-32 pb-2 grayscale" alt="."/>
No Tasks Yet
</div>
{:else}
{#if $tasks.filter((task) => !task.isDone).length > 0}
<ol transition:fade class="flex flex-col gap-2">
  <h3>
      The remainning tasks:
  </h3>
  <TaskListItems doneTasks={false} />
</ol>
{/if}

{#if $tasks.filter((task) => task.isDone).length > 0}
<ol transition:fade class="flex flex-col gap-2">
  <h3>
      The completed tasks:
  </h3>
  <TaskListItems doneTasks={true} />
</ol>
{/if}
{/if}