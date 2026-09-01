<?php

session_start();

?>

<!-- Navigation -->

<a href="./session.php">Home</a>
<a href="./about.php">About</a>
<a href="./another-page.php">Another Page</a>
<a href="./logout-script.php">-Logout-</a>

<br><br>

<?php

if (isset($_SESSION['username'], $_SESSION['font-size'])) {

    print "<strong>" . $_SESSION['username'] . "</strong> is logged in!";

    print "<p style='font-size: " . $_SESSION['font-size'] . "px;'>
        This is ANOTHER PAGE.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Assumenda adipisci molestiae autem eos nulla exercitationem
        suscipit aut? Veritatis, dolore veniam.
    </p>";
} else {

    print "<p>You are not logged in.</p>";
}

?>