<?php include('header.php'); ?>

<div id="main" class="contact">
		<section id="content-container">

			<div id="content">
				<h5>Get in touch.</h5>
				<form action="send_mail.php" method="post">
				<input type="text" name="name" value="" maxlength="100" placeholder="Your name"/>
				<input type="text" name="email_address" value="" maxlength="100" placeholder="Your email"/>
				<input type="text" name="phone" value="" maxlength="100" placeholder="Your phone number"/>
				<textarea rows="5" placeholder="Tell me something."></textarea>
				<input class="submit" type="submit" name="comments" value="Send" />
				</form>
			</div>

			<div id="tags">
			<h6><a href="mailto:emily@emilyflannery.com">emily (at) emilyflannery (dot) com</a></h6>
			<h6><em>434.989.6157</em></h6>
			<h5>Austin, TX</h5>
			</div>

	</section>
	</div>

<?php include('footer.php'); ?>