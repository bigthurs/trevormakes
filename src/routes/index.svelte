<script>
	import ContactModal from '../components/layout/ContactModal.svelte';
	import { onMount } from 'svelte';
	import M from 'materialize-css/dist/js/materialize.min.js';
	import { browser } from '$app/env';

	onMount(() => {
		if (browser) {
			M.AutoInit();
		}
	});
</script>

<svelte:head>
	<title>Index</title>
</svelte:head>

<ContactModal />
<main>
	<h1 class="green-text darken-2">Welcome to trevormakes</h1>
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
