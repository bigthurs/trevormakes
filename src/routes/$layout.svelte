<script>
	import Nav from '../components/layout/Nav.svelte';
	import Footer from '../components/layout/Footer.svelte';
</script>

<main class="site">
	<Nav />
	<div class="container site-content">
		<slot />
	</div>
	<Footer />
</main>

<style>
	.site {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}

	.site-content {
		flex: 1 0 auto;
	}
</style>
