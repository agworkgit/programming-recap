<?php
// foreach()

$names = array('bob', 'tim', 'tom', 'shelly', 'julia');

foreach ($names as $value) {
    print "$value\n";
}

print "\n";

sort($names);

// sorted names - alphabetically
foreach ($names as $value) {
    print "$value\n";
}
