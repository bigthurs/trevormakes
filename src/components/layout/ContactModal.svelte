<script>
	export let shown = false
	export function toggleShown() {
		shown = !shown
	}

	const sendEmail = () => {
		alert("Thanks! Email sent, I'll get back to you shortly!")
		toggleShown()
	}
</script>


<div class="fixed-action-btn">
	{#if shown}
		<button on:click={() => toggleShown()} class="btn-floating red darken-2">
			<i class="large material-icons">close</i>
		</button>
	{:else}
		<button on:click={() => toggleShown()} class="btn-floating green darken-2">
			<i class="large material-icons">email</i>
		</button>
	{/if}
</div>
{#if shown}
<div class="modal-wrapper">
	<div class="modal">
		<h4 class="green-text darken-2">Reach out to me!</h4>
		<div class="row">
			<div class="input-field col s8">
				<input type="text" name="email" />
				<label for="email">Your Email</label>
			</div>
			<div class="col s2 offset-s2">
				<a on:click={() => sendEmail()} class="green darken-2 btn">Send</a>
			</div>
		</div>
		<div class="input-field">
			<textarea id="textarea1" class="materialize-textarea" />
			<label for="message">Message</label>
		</div>
	</div>
</div>
{/if}


<style>
	.fixed-action-btn {
		top: 10%;
	}

	.modal-wrapper {
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.7);
		z-index: 1;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.modal {
		z-index: 0;
		opacity: 100%;
		display: block;
		background-color: white;
		max-width: 80vw;
		max-height: 80vw;
		padding: 1rem;
		margin: 15%;
	}

	.modal h4, .btn {
		opacity: 100%
	}
</style>
