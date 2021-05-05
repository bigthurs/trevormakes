<script>
	import ProjectCarousel from '../components/carousels/ProjectCarousel.svelte';
</script>

<main>
	<div class="container">
		<div class="carousel">
			<ProjectCarousel />
		</div>
	</div>
</main>

<style>
	.container {
		margin-top: 2rem;
		width: 90vw;
		height: 90vh;
	}

	@media only screen and (min-width: 768px) {
		.carousel {
			max-width: 60rem;
			max-height: 60rem;
		}
	}

	main {
		z-index: -1;
	}
</style>
