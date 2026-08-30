<?php
$inventory = array(
    'shirts' => [
        't-shirt' => 10,
        'suit shirt' => 5,
        'blouse' => 8,
        'jumper' => 12,
        'hoodie' => 7
    ],
    'trousers' => [
        'shorts' => 15,
        'jeans' => 20,
        'chinos' => 10,
        'suit trouser' => 6,
        'cropped trousers' => 4
    ],
    'coats' => [
        'chore jacket' => 5,
        'leather jacket' => 3,
        'winter coat' => 8,
        'fur coat' => 2
    ]
);

print_r($inventory); // shirts, trousers, coats
print "\n";
ksort($inventory);
print_r($inventory); // coats, shirts, trousers
print $inventory['shirts']['t-shirt']; // 10
