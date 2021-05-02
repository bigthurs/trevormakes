<script>;
	import Footer from '../components/layout/Footer.svelte';
	import NavModal from '../components/layout/NavModal.svelte'
	import ContactModal from "../components/layout/ContactModal.svelte"
</script>

<main class="site">
	<NavModal />
	<ContactModal />
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
