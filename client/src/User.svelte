<script>
    import {API_URL} from './config/const';
    import {onMount} from 'svelte';
    import UserForm from './components/forms/User.svelte';

    export let type;

    let schools = [];
    let users = [];
    let selSchool = null;

    onMount(async () => {
        const s = await fetch(API_URL + '/schools');
        schools = await s.json();

        await getUsers();

        const e = document.querySelector('#school-id');
        selSchool = M.FormSelect.init(e, schools)
    });

    async function getUsers() {
        const t = await fetch(API_URL + '/' + type + 's');
        users = await t.json();
    }

    function deleteTeacher(id) {
        fetch(API_URL + '/'+ type +'s/' + id, {method: 'DELETE'}).
                then(() => getUsers());
    }

    function userLabel() {
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
</script>

<h4>{userLabel()}</h4>

<UserForm {schools} {type} on:userCreated={getUsers}/>

<table class="class">
    <thead>
    <tr class="user">
        <th class="user-creation-id">Creation ID</th>
        <th class="user-creation-id">School</th>
        <th class="user-name">User Name</th>
        <th class="first-name">First Name</th>
        <th class="last-name">Last Name</th>
    </tr>
    </thead>

    <tbody>
    {#if users.length === 0}
        No {type}s found
    {:else}
        {#each users as user}
            <tr class="user">
                <td class="user-name">{user.creation_id}</td>
                <td class="school-name">school</td>
                <td class="user-creation-id">{user.username}</td>
                <td class="first-name">{user.first_name}</td>
                <td class="last-name">{user.last_name}</td>

                <td>
                    <button class="waves-effect waves-light red btn"
                       on:click={() => deleteTeacher(user.id)}>Delete</button>
                </td>
            </tr>
        {/each}
    {/if}
    </tbody>
</table>
