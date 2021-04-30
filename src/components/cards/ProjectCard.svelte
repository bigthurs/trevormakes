<script>
	export let project;
</script>

<div class="card">
	<div class="card-image waves-effect waves-block waves-light">
		<img class="activator" src={project.img} />
	</div>
	<div class="card-content" />
	<span class="card-title activator grey-text text-darken-4"
		>{project.name}<i class="material-icons right">more_vert</i></span
	>
	<div class="card-reveal">
		<span class="card-title grey-text text-darken-4"
			>{project.name}<i class="material-icons right">close</i></span
		>
		<div class="row">
			<div class="col s3"><a target="_blank" href={project.repo}>Check out the repo!</a></div>
			{#if project.newTab}
				<div class="col s3 offset-s6">
					<a target="_blank" href={project.link}>Check it out live!</a>
				</div>
			{:else}
				<div class="col s3 offset-s6"><a href={project.link}>Check it out live!</a></div>
			{/if}
		</div>

		<p>Description: {project.description}</p>
		<p>Stack: {project.stack}</p>
	</div>
</div>

<style>
	.card {
		padding-top: 5em;
		height: 100%;
	}

	img {
		height: 75px;
		width: 200px;
	}
</style>
