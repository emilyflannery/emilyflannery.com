<?php include('header.php'); ?>

<h1>Send Us Your Feedback!</h1>
<form action="send_mail.php" method="post">
<table>
<tr>
<td>Email Adress:</td>
<td>
<input type="text" name="email_address" value="" maxlength="100" />
</td>
</tr>
<tr>
<td>Comments:</td>
<td>
<textarea rows="10" cols="50" name="comments"></textarea>
</td>
</tr>
<tr><td>&nbsp;</td>
<td>
<input type="submit" value="Submit" />
</td>
</tr>
</table>
</form>

<?php include('footer.php'); ?>