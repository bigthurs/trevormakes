<script>
	import {slide, fade} from 'svelte/transition'

	let email;
	let message;
	let name;

	let emailExpanded = false;
    const toggleEmail = () => 
        emailExpanded = !emailExpanded

	const sendEmail = () => {
		alert("Thanks! Email sent, I'll get back to you shortly!")
		email = '';
		message = '';
		name = ''
		toggleEmail()
	}
</script>

<main>
<div class="fixed-action-btn">
		{#if emailExpanded}
		<button on:click={() => toggleEmail()} class="btn-floating red darken-3">
			<i class="large material-icons">close</i>
		</button>
		{:else}
		<button on:click={() => toggleEmail()} class="btn-floating green darken-3">
			<i class="large material-icons">email</i>		
		</button>
		{/if}
	
</div>

{#if emailExpanded}
	<div class="email-form" transition:slide="{{ x: 500, duration: 1000 }}" class:emailExpanded>
		<div class="section-email container">
			<input class="white" bind:value={email} placeholder="your email"/>
			<input class="white" bind:value={name} placeholder="your name"/>
		</div>
		<div class="section-message container">
			<textarea class="white" bind:value={message} placeholder="your message"></textarea>
			<button on:click={() => sendEmail()} class="btn waves-effect waves-light white green-text text-darken-3 submit-button" type="submit" name="action">Submit
				<i class="material-icons right">send</i>
			</button>
		</div>	
	</div>
{/if}
</main>

<style>
	.fixed-action-btn {
		z-index: 2;
		top: 8%;
		size: 3rem;
	}

    .email-form {
		margin-top: 0px;
        margin-right: auto;
        pointer-events: none;
        position: fixed;
        background-color: #a5d6a7  ;
        height: 110vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(100px at 90% -10%);
        -webkit-clip-path: circle(100px at 90% -10%);
        transition: all 1s ease;
		opacity: 0
    }

    .emailExpanded {
        pointer-events: all;
        clip-path: circle(1000px at 90% -10%);
        -webkit-clip-path: circle(1000px at 90% -10%);
		opacity: 1;
		z-index: 1;
    }

	@media only screen and (min-width: 768px) {
	.emailExpanded {
		clip-path: circle(2000px at 90% -10%);
        -webkit-clip-path: circle(2000px at 90% -10%);;
  		}
	}

	.section-email {
        margin-top: 3em;
        justify-content: center;
        min-height: 10vh;
    }

	.section-message {
        justify-content: center;
        min-height: 50vh;
    }

	textarea {
		width: 100%;
		height: 200px;
	}

	.submit-button {
		margin-top: 2em;
	}
</style>