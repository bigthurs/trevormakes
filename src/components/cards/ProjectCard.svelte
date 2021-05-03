<script>
	import {fade} from 'svelte/transition'

	export let project;
	const { name, img, description, repo, link, stack} = project

	let detailsRevealed = false;

	const toggleDetails = () =>
		detailsRevealed = !detailsRevealed

</script>


<section>
	{#if !detailsRevealed}
	<div class="card">
		<div class="container">
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
		</div>
	</div>
	{:else}		
	<div in:fade class="card details-revealed">
		<div class="container">
		<btn class="col s1 offset-s11" on:click={() => toggleDetails()}><i class="material-icons green-text text-darken-3">close</i></btn>
			<btn on:click={() => toggleDetails()}><span class="card-title grey-text text-darken-4"
				>{name}</span
			></btn>
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
		<h4>{description}</h4>
		<h4>{stack}</h4>
	</div>
</div>
	{/if}
</section>



<style>
	
	.details-revealed {
		margin-top: -5rem;
		background-color: #c8e6c9;
		z-index: 0;
	}

    btn:hover {
        cursor: pointer;
    }

	h4 {
		font-size: 1em;
	}

	.card.details-revealed {
		background-color: #c8e6c9;
	}

	.card {
		padding-top: 5em;
		padding-bottom: 5em;
		background-color: #c8e6c9;
		height: 100%;
	}
	
	.project-icon {
		background-color: #2e7d32 ;
		height: 160px;
		width: 125px;
	}

	img {
		height: 125px;
		width: 125px;
		border-color: white;
	}
</style>
