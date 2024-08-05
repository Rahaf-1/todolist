import {persisted} from 'svelte-persisted-store'

export const filter = persisted<'All Tasks' | 'Today’s Tasks'>('filter', 'All Tasks');