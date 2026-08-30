<?php
$x = 1;

// check your condition well so that you don't enter infinite loops
while ($x <= 10) {
    print "Hello for the $x time.";
    print "\n";
    // very important! you need to iterate at the end
    $x++;
}
