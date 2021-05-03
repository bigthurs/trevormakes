<script>
    export let project;
</script>

<div class="card">
    <div class="container">
        <img class="circle responsive-img project-icon" src={project.img} />
    </div>
</div>

<style>
    .card {
        padding-top: 5em;
        padding-bottom: 5em;
        background-color: #c8e6c9;
    }

    .project-icon {
		background-color: #2e7d32 ;
		height: 160px;
		width: 125px;
	}

	img {
		height: 125px;
		width: 125px;
        margin-left: 2rem;
	}
</style>
   
