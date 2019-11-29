<script>
    import {API_URL} from './config/const';
    import {onMount} from 'svelte';
    import ClassForm from './components/forms/Class.svelte';

    let schools = [];
    let classes = [];
    let selSchool = null;

    onMount(async () => {
        const s = await fetch(API_URL + '/schools');
        schools = await s.json();

        await getClasses();

        const e = document.querySelector('#school-id');
        selSchool = M.FormSelect.init(e, schools)
    });

    async function getClasses() {
        const c = await fetch(API_URL + '/classes');
        classes = await c.json();
    }

    function deleteClass(id) {
        fetch(API_URL + '/classes/' + id, {method: 'DELETE'}).
                then(() => getClasses());
    }
</script>

<h4>Classes</h4>

<ClassForm {schools} on:classCreated={getClasses}/>

<table class="class">
    <thead>
    <tr class="user">
        <th class="user-creation-id">Creation ID</th>
        <th class="user-name">School</th>
        <th class="first-name">Class</th>
        <th>&nbsp;</th>
    </tr>
    </thead>

    <tbody>
    {#if classes.length === 0}
        No Classes Found
    {:else}
        {#each classes as class_}
            <tr class="user">
                <td class="user-creation-id">{class_.creation_id}</td>
                <td class="school-name">{class_.school.name}</td>
                <td class="name">{class_.name}</td>

                <td>
                    <button class="waves-effect waves-light red btn"
                       on:click={() => deleteClass(class_.id)}>Delete</button>
                </td>
            </tr>
        {/each}
    {/if}
    </tbody>
</table>
