<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    export let schools;
    export let id = '';

    function onChange(event) {
        dispatch('schoolSelected', event.params.value);
    }
</script>

<select {id} on:change={onChange}>
    <option value="">Select School</option>
    {#each schools as school}
        <option value={school.id}>{school.name}</option>
    {/each}
</select>
