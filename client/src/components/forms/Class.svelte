<script>
    import {API_URL} from '../../config/const';
    import {createEventDispatcher} from 'svelte';
    import SelectSchool from '../SelectSchool.svelte';

    export let schools = [];

    let schoolId = '';
    let name = '';

    const dispatch = createEventDispatcher();

    function onSubmit(event) {
        event.preventDefault();

        if (schoolId !== '') {
            const class_ = {
                school_id: schoolId,
                name
            };

            fetch(API_URL + '/classes', {
                method: 'POST',
                body: JSON.stringify(class_),
            }).then(res => {
                name = '';
                schoolId = '';

                dispatch('classCreated', res.json());
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

            <div class="input-field inline col s4">
                <input id="name" type="text" class="validate"
                       bind:value={name}>
                <label for="name">Name</label>
            </div>

            <div class="input-field inline col s2">
                <button type="submit" class="waves-effect waves-light btn">Add Class</button>
            </div>
        </div>
    </form>
</div>

