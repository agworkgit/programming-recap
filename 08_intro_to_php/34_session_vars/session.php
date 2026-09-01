<!-- Beware, this is an incredibly insecure way of passing around variables. -->

<?php

session_start();

?>

<!-- Navigation -->

<a href="./session.php">Home</a>
<a href="./about.php">About</a>
<a href="./another-page.php">Another Page</a>
<a href="./logout-script.php">-Logout-</a>

<br><br>

<h2>Please Log In:</h2>

<form action="login-script.php" method="post">

    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="font-size">Font Size:</label>
    <input type="number" id="font-size" name="font-size" min="8" max="72" required>

    <br><br>

    <input type="submit" value="Log In">

</form>

<?php

if (isset($_SESSION['username'], $_SESSION['font-size'])) {

    print "<strong>" . $_SESSION['username'] . "</strong> is logged in!";

    print "<p style='font-size: " . $_SESSION['font-size'] . "px;'>
        This is the text on the HOME PAGE.
        Look at what the SIZE is!!!
    </p>";
} else {

    print "<p>You are not currently logged in.</p>";
}

?>