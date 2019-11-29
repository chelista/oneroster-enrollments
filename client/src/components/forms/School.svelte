<script>
    import {API_URL} from '../../config/const';
    import {createEventDispatcher} from 'svelte';

    let name = '';
    const dispatch = createEventDispatcher();

    function onSubmit(event) {
        event.preventDefault();

        if (name.trim() !== '') {
            let school = {name};

            fetch(API_URL + '/schools', {
                method: 'POST',
                body: JSON.stringify(school),
            }).then(res => {
                name = '';
                dispatch('schoolCreated', res.json());
            });
        }
    }
</script>

<div class="row">
    <form class="col s12" on:submit={onSubmit}>
        <div class="row">
            <div class="input-field inline col s4">
                <input id="name" type="text" class="validate" bind:value={name}>
                <label for="name">Name</label>
            </div>
            <div class="input-field inline col s2">
                <button type="submit" class="waves-effect waves-light btn">Add School</button>
            </div>
        </div>
    </form>
</div>
