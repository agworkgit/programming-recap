<?php
// Variables start with $var_name = value
$headline = "PHP Test Examples";
$int = 1;
$float = 2.2;
$string = "Hello World!";
?>

<h1><?= $headline ?></h1>
<h2><?= $string ?></h2>
<p>This is an int var: <?= $int ?></p>
<p>This is a float var: <?= $float ?></p>

<?php
$items = [
    "Print Item 1",
    "Print Item 2",
    "Print Item 3"
];
?>

<ul>
    <p>This is an underdered list:</p>
    <?php foreach ($items as $item): ?>
        <li><?= $item ?></li>
    <?php endforeach; ?>
</ul>