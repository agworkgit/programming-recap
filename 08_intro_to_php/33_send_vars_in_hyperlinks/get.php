<?php
// DO NOT USE! You're exposed to XSS attacks
// No usernames, passwords, tokens, etc...
// Also, do not use it to add/remove database records!
// very insecure for confidential info, the variables will show up in the URL!

$colour = isset($_GET['color']) ? htmlspecialchars($_GET['color']) : 'black';
$size = isset($_GET['size']) ? (int)$_GET['size'] : 16;

// Ensure size is within a reasonable range (e.g., min 12, max 36)
if ($size < 12) $size = 12;
if ($size > 36) $size = 36;
?>

<a href="?color=blue">Change Colour to BLUE</a><br>
<a href="?color=red">Change Colour to RED</a><br>

<h1>Example of Text Output</h1>
<p style="color: <?= htmlspecialchars($colour); ?>; font-size: <?= $size; ?>px;">
    This is the output text from GET hyperlinks
</p>