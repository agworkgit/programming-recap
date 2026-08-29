<!-- Better alternative to using print to render each individual html line -->

<h1>PHP Test Examples</h1>

<?php
$items = [
    "Print Item 1",
    "Print Item 2",
    "Print Item 3"
];
?>

<ul>
    <?php foreach ($items as $item): ?>
        <li><?= $item ?></li>
    <?php endforeach; ?>
</ul>