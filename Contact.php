<?php
// Your email addresses
$to = "bmgglamhub@gmail.com, markbrian5368jay@gmail.com";

// Get data from the form
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$message = htmlspecialchars($_POST['message']);

// Email subject
$subject = "New Contact Form Message from $name";

// Build message body
$body = "
Name: $name
Email: $email
Phone: $phone

Message:
$message
";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    header("Location: thankyou.html");
    exit();
} else {
    echo "Message failed. Please try again.";
}
?>
