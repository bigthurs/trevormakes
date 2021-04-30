<script>
	import TIcon from 'svelte-material-icons/AlphaTCircleOutline.svelte';
</script>

<nav class="green lighten-1">
	<div class="nav-wrapper container">
		<a href="/" class="brand-logo"><TIcon /></a>
		<ul id="nav-mobile" class="right hide-on-med-and-down">
			<li><a href="/about">About </a></li>
			<li><a href="/projects">Projects </a></li>
			<li><a href="/stuffILike">Stuff I Like </a></li>
		</ul>
	</div>
</nav>

<slot />

<style>
	nav {
		width: 100%;
	}
</style>
