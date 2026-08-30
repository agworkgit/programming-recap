<?php
// use case: notifications
// note: attachements are more complicated

$to = "mail@billadong.com";
$subject = "this is a test";
// formatting can be adjusted
$message = "test from PHP script";
$headers = "From:Test@Test.com";

// for troubleshooting
$time = time();

// mail function
mail($to, $subject, $message, $headers);

// for troubleshooting
print "Script ran $time";

// test ran successfully on the server-side
// a corporate email account should block this kind of stuff, not exactly safe