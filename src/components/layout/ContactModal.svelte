<div class="fixed-action-btn">
	<a href="#modal1" class="btn-floating green darken-2 modal-trigger">
		<i class="large material-icons">email</i>
	</a>
</div>

<div id="modal1" class="modal">
	<div class="modal-content">
		<h4 class="green-text darken-2">Reach out to me!</h4>
		<div class="row">
			<div class="input-field col s8">
				<input type="text" name="email" />
				<label for="email">Your Email</label>
			</div>
			<div class="col s2" />
			<div class="col s2">
				<a href="#!" class="modal-close waves-effect green darken-2 btn">Send</a>
			</div>
		</div>
		<div class="input-field">
			<textarea id="textarea1" class="materialize-textarea" />
			<label for="message">Message</label>
		</div>
	</div>
</div>

<style>
	.fixed-action-btn {
		top: 10%;
	}

	h4 {
		font-size: 2em;
	}

	.modal {
		left: 48%;
		max-width: 100%;
		max-height: 100%;
		width: 50%;
		height: 40%;
	}
</style>
