<script>
	export let project;
	const { name, img, description, repo, link, stack} = project
	const { frontend, backend, db, host } = stack

	let detailsRevealed = false;

	const toggleDetails = () =>
		detailsRevealed = !detailsRevealed

</script>


<section>
	<div class="card">
		<div class="container">
			{#if !detailsRevealed}
					<div class="row center">
						<btn on:click={() => toggleDetails()}><img class="circle responsive-img project-icon" src={img} /></btn>
					</div>
						<btn on:click={() => toggleDetails()}>
							<i class="material-icons right">more_vert</i>
						</btn>
					<div class="row">
						<btn  on:click={() => toggleDetails()}><span class="card-title grey-text text-darken-4"
							>{name}</span>
						</btn>
					</div>
					<div class="row">
						{description}
					</div>
			{:else}
				<btn class="col s1 offset-s11" on:click={() => toggleDetails()}><i class="material-icons">close</i></btn>
				<div class="details-revealed">
					<div class="center">
						<btn on:click={() => toggleDetails()}><span class="card-title grey-text text-darken-4"
							>{name}</span
						></btn>
					</div>
					<div class="row">
						<div class="left"><a target="_blank" href={repo}>Check out the repo!</a></div>
						<div class="right">
							{#if project.newTab}
								<a target="_blank" href={link}>Check it out live!</a>
							{:else}
								<a href={project.link}>Check it out live!</a>
							{/if}
						</div>
					</div>
					<h4 class="center">Tech Stack</h4>
					<p>Frontend: {frontend}</p>
					<p>Backend: {backend}</p>
					<p>Database: {db}</p>
					<p>Host: {host}</p>
				</div>
			{/if}
		</div>
	</div>
</section>



<style>
    btn:hover {
        cursor: pointer;
    }

	h4 {
		font-size: 1em;
	}

	.card {
		padding-top: 5em;
		padding-bottom: 5em;

	}
	
	.project-icon {
		background-color: #2e7d32 ;
		height: 160px;
		width: 125px;
	}

	img {
		height: 125px;
		width: 125px;
	}
</style>
