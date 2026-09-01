<?php

session_start();

$_SESSION['username'] = $_POST['username'];
$_SESSION['font-size'] = $_POST['font-size'];

?>

<!-- Navigation -->

<a href="./session.php">Home</a>
<a href="./about.php">About</a>
<a href="./another-page.php">Another Page</a>

<br><br>

<?php

print "<h2>You are now logged in as: "
    . $_SESSION['username']
    . "</h2>";

print "<h2>You set the font size as: "
    . $_SESSION['font-size']
    . "px</h2>";

print "<h2>
    Go to the other pages to see how SESSION VARIABLES follow you!
</h2>";

?>