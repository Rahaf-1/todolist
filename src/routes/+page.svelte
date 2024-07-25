<script lang="ts">
  import Header from "$lib/Header.svelte";
  import TaskInput from "$lib/TaskInput.svelte";
 import TaskList from "$lib/TasksList.svelte";
</script>

<svelte:head>
  <title>TO DO LIST</title>
</svelte:head>

<div
  class="p-2 sm:p-4 pt-8 md:p-8 lg:p-12 xl:16 flex flex-col gap-6 max-w-screen-lg mx-auto"
>
  <Header />
  <TaskInput />
  <TaskList />
</div>
