<script>
    import {API_URL} from './config/const';
    import {onMount} from 'svelte';
    import Stat from './components/Stat.svelte';

    let stats = [];
    async function getCounts() {
        const response = await fetch(API_URL + '/stats');
        stats = await response.json();
    }

    onMount(async () => {
        await getCounts();

        stats = [
            {
                color: 'green',
                title: 'Schools',
                count: stats.schools,
            }, {
                color: 'purple',
                title: 'Classes',
                count: stats.classes,
            }, {
                color: 'orange',
                title: 'Teachers',
                count: stats.teachers,
            }, {
                color: 'blue',
                title: 'Students',
                count: stats.students,
            }
        ];
    });

</script>

<style>
    .container {
        margin-top: 2em;
    }
</style>
<div class="container">
    <div class="row">
        {#if stats.length === 0}
            Loading...
        {:else}
            {#each stats as stat}
                <Stat {...stat}/>
            {/each}
        {/if}
    </div>
</div>
