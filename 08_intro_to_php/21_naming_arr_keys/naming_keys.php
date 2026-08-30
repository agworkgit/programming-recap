<?php
// So, for an array instead of having index 0,1,2,3 you can name these indexes based on what you store in them e.g. firstname for 0, last name for 1, email for 2, etc...

$info = array(
    // we want 'name' to be (=>) 'bob'
    'name' => 'bob',
    'city' => 'baltimore',
    'profession' => 'it'
);

print_r($info); // prints an array in human readable format

// print_r output:
// Array
// (
//     [name] => bob
//     [city] => baltimore
//     [profession] => it
// )

print "\n";
print $info['name'];

// This technique is useful for storing qualitative data as demonstrated