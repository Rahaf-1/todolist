<script lang="ts">
  import dayjs from "dayjs";
  import { tasks } from "$lib/stores/tasks";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
  import { slide } from 'svelte/transition';
  import {filter} from "$lib/stores/filter";
 
  dayjs.extend(relativeTime);	
  const modalStore = getModalStore();     
  

export let doneTasks: boolean;
function confirmDelete(task :Task){
  const modal: ModalSettings = {
	type: 'confirm',
	title: 'Are you sure you want to delete?',
	body:`The task :"${task.title}" will be deleted`,
	response: (r: boolean) =>{
    if (r) {
        tasks.update((currentTasks) => {
        let index = currentTasks.indexOf(task);
        currentTasks.splice(index, 1);
        return currentTasks;
      });
    }
  },
};
modalStore.trigger(modal);
}

function applyFilter(filter: typeof $filter, task: Task) : boolean {
  switch (filter){
    case "Today’s Tasks":
      return dayjs(task.assignedDate).unix() - dayjs().unix() <= 24*60*60;
    case "All Tasks":
    default:
      return true;

  }
}
</script>

{#each $tasks as task}
  {#if task.isDone == doneTasks && applyFilter($filter, task)}
    <li
      transition:slide = {{duration:200}}
      class="bg-secondary-500 p-2 rounded-lg flex justify-between items-center"
    >
      <div>
        <input
          bind:checked={task.isDone}
          class="checkbox h-6 w-6 rounded-md"
          type="checkbox"
        />
        <span class="ml-2"> {task.title}</span>
      </div>
      <div class="flex gap-1">
        <button class="btn variant-filled-surface hover:bg-gray-400/60">
          {dayjs(task.assignedDate).format("hh:mm")}
        </button>
        <button
          on:click={() => confirmDelete(task)}
          class="btn variant-filled-surface hover:bg-gray-400/60 p-[0.70rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
            /></svg
          >
        </button>
      </div>
    </li>
  {/if}
{/each}
