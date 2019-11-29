<script>
    import {API_URL} from './config/const';
    import {onMount} from 'svelte';
    import SchoolForm from './components/forms/School.svelte';

    let schools = [];

    onMount(() => {
        getSchools();
    });

    function getSchools() {
        fetch(API_URL + '/schools').then(res => {
            schools = res.json();
        });
    }

    function deleteSchool(id) {
        fetch(API_URL + '/schools/' + id, {method: 'DELETE'}).
                then(() => getSchools());
    }
</script>

<h4>Schools</h4>

<SchoolForm on:schoolCreated={getSchools}/>

<table class="class">
    <thead>
    <tr class="user">
        <th class="user-creation-id">Creation ID</th>
        <th class="user-name">Name</th>
        <th>&nbsp;</th>
    </tr>
    </thead>

    <tbody>
    {#await schools}
        Loading schools
    {:then schools}
        {#each schools as school}
            <tr class="user">
                <td class="user-creation-id">{school.creation_id}</td>
                <td class="first-name">{school.name}</td>
                <td>
                    <a href="/" class="waves-effect waves-light red btn"
                       on:click={() => deleteSchool(school.id)}>Delete</a>
                </td>
            </tr>
        {/each}
    {/await}
    </tbody>
</table>
