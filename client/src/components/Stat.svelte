<script>
    export let title;
    export let count;
    export let color;
</script>

<style>
    .stat {
        font-size: 4em;
    }
</style>

<div class="col s12 m6 stats">
    <div class="card {color}">
        <div class="card-content white-text">
            <span class="card-title">{title}</span>
            <p class="stat center">{count}</p>
        </div>
    </div>
</div>
