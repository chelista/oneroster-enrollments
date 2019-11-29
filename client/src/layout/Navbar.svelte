<script>
    import {Link} from 'svelte-routing';
</script>

<nav class=b>
    <div class="nav-wrapper">
        <div class="container">
            <Link to="/"><span class="brand-logo">OneRoster Enrollments</span></Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/schools">Schools</Link></li>
                <li><Link to="/classes">Classes</Link></li>
                <li><Link to="/teachers">Teachers</Link></li>
                <li><Link to="/students">Students</Link></li>
            </ul>
        </div>
    </div>
</nav>
