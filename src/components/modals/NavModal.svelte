<script>
    import { fade, slide } from 'svelte/transition';
    import TIcon from 'svelte-material-icons/AlphaTCircleOutline.svelte'

    export let navExpanded = false;
    export const toggleNav = () => 
        navExpanded = !navExpanded

    let iconConfig = {
		color: "#2e7d32",
		size: "5em",
		width:"5em",
		height: "5em",
	}
</script>

<main>
    <a href="/" class="top left"><TIcon {...iconConfig}/></a>

    <div class="fixed-action-btn">
        <button on:click={() => toggleNav()} class="btn-floating green darken-3">
            {#if navExpanded}
                <i class="large material-icons">close</i>
            {:else}
                <i class="large material-icons">menu</i>
            {/if}
		</button>
    </div>

    {#if navExpanded}
    <div class="center">
        <ul transition:slide="{{ y: 600, duration: 1000 }}" class="nav-links" class:navExpanded>
            <div class="section">
                <li on:click={() => toggleNav()} transition:fade><a href="/" class="grey-text text-lighten-2">Home </a></li>
            </div>
            <div class="section">
                <li on:click={() => toggleNav()} transition:fade><a href="/about" class="grey-text text-lighten-2">About </a></li>
            </div>
            <div class="section">
                <li on:click={() => toggleNav()} transition:fade><a href="/projects" class="grey-text text-lighten-2">Projects</a></li>
            </div>
        </ul>
    </div>
    {/if}
</main>

<style>
    .fixed-action-btn {
        z-index: 2;
        top: 0%;
        opacity: 1;
    }

    .nav-links li {
        opacity: 0
    }

    .nav-links {
        margin-right: auto;
        margin-top: 0px;
        pointer-events: none;
        position: fixed;
        background-color: #2e7d32 ;
        height: 100vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(100px at 90% -10%);
        -webkit-clip-path: circle(100px at 90% -10%);
        transition: all 1s ease;
    }

    .navExpanded {
        pointer-events: all;
        clip-path: circle(1000px at 90% -10%);
        -webkit-clip-path: circle(1000px at 90% -10%);
    }

    .navExpanded li{
        font-size: 25px;
        opacity: 1;
    }

    .section {
        margin-top: 3em;
        justify-content: center;
        min-height: 33.3vh
    }

</style>