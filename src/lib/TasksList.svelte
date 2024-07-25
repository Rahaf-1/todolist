<script lang="ts">
 import dayjs from "dayjs";
 import {tasks} from "$lib/stores/tasks";
 import relativeTime from 'dayjs/plugin/relativeTime';
 import TaskListItems from "./TaskListItems.svelte";

 dayjs.extend(relativeTime);
</script>
<ol class="flex flex-col gap-2">
  <h3>
      The remainning tasks:
  </h3>
  <TaskListItems doneTasks={false} />
</ol>
<ol class="flex flex-col gap-2">
  <h3>
      The completed tasks:
  </h3>
  <TaskListItems doneTasks={true} />
</ol>