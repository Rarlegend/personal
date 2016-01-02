<?php

	//header('Access-Control-Allow-Origin: *');

	if (!empty($_POST)) {
	    $field_name = $_POST['cf_name'];
		$field_email = $_POST['cf_email'];
		$field_message = $_POST['cf_message'];

		$mail_to = 'akandola@college.harvard.edu';
		$subject = $_POST['cf_subject'];

		$body_message = 'From: '.$field_name."\n";
		$body_message .= 'E-mail: '.$field_email."\n";
		$body_message .= 'Message: '.$field_message;

		$headers = 'From: '.$field_email."\r\n";
		$headers .= 'Reply-To: '.$field_email."\r\n";

		$mail_status = mail($mail_to, $subject, $body_message, $headers);

		if ($mail_status) { 
			echo("success");
		}
		else { 
			echo ("error");
		}
	}
	else{
	    echo ("failed");
	}
?>