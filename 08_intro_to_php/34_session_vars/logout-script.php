<?php

// Start the session so we can access it.
session_start();

// Remove all session variables.
session_unset();

// Destroy the session to save server resources
session_destroy();

?>

<h2>You have been logged out!</h2>

<br>

<a href="./session.php">Home</a>