<script>
    import {API_URL} from '../../config/const';
    import {createEventDispatcher} from 'svelte';
    import SelectSchool from '../SelectSchool.svelte';

    export let schools = [];

    let schoolId = '';
    let firstName = '';
    let lastName = '';

    const dispatch = createEventDispatcher();

    function onSubmit(event) {
        event.preventDefault();

        if (firstName.trim() !== '' && lastName !== '') {
            let teacher = {
                first_name: firstName,
                last_name: lastName,
                school_id: schoolId,
                type: 'student',
            };

            fetch(API_URL + '/students', {
                method: 'POST',
                body: JSON.stringify(teacher),
            }).then(res => {
                schoolId = '';
                firstName = '';
                lastName = '';

                dispatch('studentCreated', res.json());
            });
        }
    }
</script>

<div class="row">
    <form class="col s12" on:submit={onSubmit}>
        <div class="row">
            <div class="input-field inline col s3">
                <SelectSchool {schools} id="school-id" on:SchoolSelected={id => schoolId = id}/>
            </div>

            <div class="input-field inline col s2">
                <input id="first-name" type="text" class="validate" bind:value={firstName}>
                <label for="first-name">First Name</label>
            </div>

            <div class="input-field inline col s2">
                <input id="last-name" type="text" class="validate" bind:value={lastName}>
                <label for="last-name">Last Name</label>
            </div>

            <div class="input-field inline col s2">
                <button class="waves-effect waves-light btn">Add Student</button>
            </div>
        </div>
    </form>
</div>
