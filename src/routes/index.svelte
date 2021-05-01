<script>
	import ContactModal from '../components/layout/ContactModal.svelte';
	let contactModal;
</script>

<svelte:head>
	<title>Index</title>
</svelte:head>


<main>
	<h1 class="green-text darken-2">Welcome to trevormakes</h1>

	<ContactModal />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		text-transform: lowercase;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
