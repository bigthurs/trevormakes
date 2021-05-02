<script>
	import ProjectCarousel from '../components/layout/ProjectCarousel.svelte';
</script>


<main>
	<div class="container">
		<div class="section">
			A gallery of projects I've made! Check out the code repo or live version via the links, and reach out if you're interested in something similar.
		</div>
		<div class="section">
			<div class="row">
				<ProjectCarousel />
			</div>
		</div>
	</div>
</main>

<style>
	main {
		z-index: 0;
	}
</style>
