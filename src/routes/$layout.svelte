<script>
	import Footer from '../components/layout/Footer.svelte';
	import NavModal from '../components/modals/NavModal.svelte';
	import ContactModal from '../components/modals/ContactModal.svelte';
</script>

<main class="site">
	<NavModal />
	<ContactModal />
	<div class="site-body">
		<div class="container site-content">
			<slot />
		</div>
		<Footer />
	</div>
</main>

<style>
	.site {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}

	@media only screen and (min-width: 768px) {
		.site-body {
			align-self: center;
			width: 95vw;
			height: 95vh;
		}
	}

	.site-content {
		flex: 1 0 auto;
		justify-content: center;
	}
</style>
