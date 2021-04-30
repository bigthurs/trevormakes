<script>
	import M from 'materialize-css/dist/js/materialize.min.js';
	import { onMount } from 'svelte';
	import projects from '../data/projects';
	import ProjectCard from '../components/cards/ProjectCard.svelte';

	onMount(() => {
		if (typeof window !== 'undefined') {
			M.AutoInit();
		}
	});
</script>

<div class="carousel center">
	{#each projects as project}
		<div class="carousel-item">
			<ProjectCard {project} />
		</div>
	{/each}
</div>

<style>
	.carousel-item {
		right: 0;
		min-width: 80%;
		min-height: 80%;
		padding-top: 5em;
	}
</style>
