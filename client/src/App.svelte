<script>
    import '../node_modules/materialize-css/dist/css/materialize.css';
    import '../node_modules/materialize-css/dist/js/materialize.min.js';

    import {Router, Route} from 'svelte-routing';
    import Navbar from './layout/Navbar.svelte';
    import Stats from './Stats.svelte';
</script>

<style>

</style>

<Router>
    <Navbar />
    <div class="container">
        <Route path="/" component={Stats}/>>
    </div>
</Router>


