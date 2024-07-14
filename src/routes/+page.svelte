<svelte:head>
  <title>TO DO LIST</title>
</svelte:head>

<script lang="ts">
 import dayjs from 'dayjs'
 
 let period = dayjs().format('a')=='am'?'morning':'evening';
</script>

<div class="p-14">
  <header class="flex justify-between">
    <div>
      <h1 class="text-4xl mb-2">Hi, Good {period} 👋</h1>
      <h2 class="text-lg"></h2>
      <h2 class="text-surface-500/80">
      Today, 
      {dayjs().format('dddd D MMM YYYY')}
      </h2>
    </div>
    <div class="bg-white w-32 h-14"></div>
  </header>
</div>
