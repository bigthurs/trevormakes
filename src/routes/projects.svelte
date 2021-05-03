<script>
	import ProjectCarousel from '../components/carousels/ProjectCarousel.svelte';
</script>


<main>
	<div class="container">
		<!-- <div class="section">
			A gallery of projects I've made! Check out the code repo or live version via the links, and reach out if you're interested in something similar.
		</div> -->
		<!-- <div class="section">
			<div class="row"> -->
				<ProjectCarousel />
			<!-- </div>
		</div> -->
	</div>
</main>

<style>
	.container {
		margin-top:2rem;
	}

	main {
		z-index: -1;
	}
</style>
