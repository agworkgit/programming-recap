<?php
$shirts = array(
    'long sleeve',
    't-shirt',
    'sweater'
);

$bottoms = array(
    'trousers',
    'shorts',
    'shirt',
    'jeans'
);

$types = array(
    // top points to values in shirts
    'top' => $shirts,
    'bottom' => $bottoms
);

// value 2 in shirts is 'sweater' counting from 0
// when we access multi-dimensional arrays we need to use {} to enclose the expression
print "{$types['top'][2]}"; // sweater
