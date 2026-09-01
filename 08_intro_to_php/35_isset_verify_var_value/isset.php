<?php
// The isset function allows you to see if a variable has been set to any value at all.
$name = $_POST['name'];

if (isset($name)) {
    // if set print this
    echo "<h1>Hello {$name}</h1>";
} else {
    // else print this
    echo "<form action='isset.php' method='post'>";
    echo "<label for='name'>Your name?</label>";
    echo "<input type='text' name='name'>";
    echo "<input type='submit'>";
}
