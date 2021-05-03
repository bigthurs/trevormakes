<script>
    import ProjectCard from '../cards/ProjectCard.svelte'
    import PerspectiveCarousel from './PerspectiveCarousel.svelte'
    import ProjectPreviewCard from '../cards/ProjectPreviewCard.svelte'

    import projects from '../../data/projects'
  

    let currentProjectIndex = 0;

    const calcIndex = (direction) => {
        if (direction === 'prev') {
            if (currentProjectIndex === 0) {
                return projects.length -1
            } else {
                return (currentProjectIndex - 1) % projects.length
            }
        } else if (direction === 'next') {
            return (currentProjectIndex + 1) % projects.length
        }
    }

    const next = () => 
        currentProjectIndex = calcIndex('next')

    const prev = () =>     
        currentProjectIndex = calcIndex('prev')

    const fetchNextIndex = () => {
        return calcIndex('next')
    }

    const fetchPrevIndex = () => {
        return calcIndex('prev')
    }    
</script>


<div class="center">
    <div class="index-display">
        <span class="green-text text-darken 2 text-large">{currentProjectIndex + 1} / {projects.length}</span>
    </div>
</div>
    
<div class="section">
    <PerspectiveCarousel>
        {#each [projects[fetchPrevIndex()]] as project (currentProjectIndex)}
            <div class="carousel previous-card translate-left">
                <btn on:click={() => prev()}>
                    <ProjectPreviewCard {project} />
                </btn>
            </div>     
        {/each}
        {#each [projects[currentProjectIndex]] as project (currentProjectIndex)}
            <div class="carousel current-card">
                <ProjectCard {project} />
            </div>  
        {/each}
        {#each [projects[fetchNextIndex()]] as project (currentProjectIndex)}
            <div class="carousel next-card translate-right">
                <btn on:click={() => next()}>
                    <ProjectPreviewCard {project} />
                </btn>
            </div>  
        {/each}
    </PerspectiveCarousel>
</div>

<style>
    btn:hover {
        cursor: pointer;
    }

    .index-display {
        padding-top: 0;
    }

    .current-card {
        width: 100%;
        height: 100%;
    }
</style>