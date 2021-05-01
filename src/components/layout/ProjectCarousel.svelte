<script>
    import ProjectCard from '../cards/ProjectCard.svelte'
    import projects from '../../data/projects'

    let currentProjectIndex = 0;

    export const next = () => 
        currentProjectIndex = (currentProjectIndex + 1) % projects.length

    export const prev = () =>
        (currentProjectIndex === 0) ?
            currentProjectIndex = projects.length -1 :
            currentProjectIndex = (currentProjectIndex - 1) % projects.length
</script>


<div class="section">
    <div class="center">
        <div class="index-display">
            <span class="green-text text-darken 2 text-large">{currentProjectIndex + 1} / {projects.length}</span>
        </div>
        <btn on:click={() => prev()}><i class="material-icons center">navigate_before</i></btn>
        <btn on:click={() => next()}><i class="material-icons center">navigate_next</i></btn>
    </div>
    {#each [projects[currentProjectIndex]] as project (currentProjectIndex)}
            <div class="carousel-item">
                <ProjectCard {project} />
            </div>  
    {/each}
</div>

<style>
    btn:hover {
        cursor: pointer;
    }

    .index-display {
        padding-top: 0;
    }

    .carousel-item {
        height: 60vh;
        margin-right: 0;
    }
</style>