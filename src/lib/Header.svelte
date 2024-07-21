<script lang="ts">
  import {
    ListBox,
    ListBoxItem,
    popup,
    type PopupSettings,
  } from "@skeletonlabs/skeleton";
  import dayjs from "dayjs";

  let period = dayjs().format("a") == "am" ? "morning" : "evening";
  let checking = "";
  if (period == "morning") checking = "Are you ready to start your day?";
  else checking = "How’s your day going so far?, Keep up the  great work!";
  let comboboxValue: string = "all tasks";
  $: console.log(comboboxValue);
  const popupCombobox: PopupSettings = {
    event: "click",
    target: "popupCombobox",
    placement: "bottom",
    closeQuery: ".listbox-item",
  };
</script>

<header class="flex justify-between">
  <div>
    <h1 class="text-4xl mb-2">Hi, Good {period} 👋</h1>
    <h2 class="text-lg">{checking}</h2>
    <h2 class="text-surface-900">
      Today,
      {dayjs().format("dddd D MMM YYYY")}
    </h2>
  </div>
  <button
    class="btn variant-filled-secondary w-48 h-fit py-3 justify-between rounded-full"
    use:popup={popupCombobox}
  >
    <span class="capitalize">{comboboxValue}</span>
    <span>↓</span>
  </button>
  <div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
    <ListBox rounded="rounded-none" active="variant-filled-surface">
      <ListBoxItem bind:group={comboboxValue} name="medium" value="All Tasks"
        >All Tasks</ListBoxItem
      >
      <ListBoxItem bind:group={comboboxValue} name="medium" value="Today’s Tasks"
        >Today’s Tasks</ListBoxItem
      >
    </ListBox>
    <div class="arrow bg-surface-100-800-token" />
  </div>
</header>
