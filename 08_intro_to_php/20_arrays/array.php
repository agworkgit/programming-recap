<?php
// An array is a collection (list) of (indexed, 0 to length of list) items stored in a variable
$names = ["Bill", "Bob", "Jon", "Jenny", "Betsy", "Sue", "Dennise", "Frank", "Phil"];
$arrSize = sizeof($names);
$i = 0;

// String insertion from array
print "The size of the array is $arrSize";
print "\n";

while ($i < sizeof($names)) {
    print "$names[$i], at spot $i in the array, is coming to the party!";
    print "\n";
    $i++;
}

// Calculation on array

$nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
$sum = 0;
$j = 0;

while ($j < sizeof($nums)) {
    $sum += $nums[$j];
    print "Sum is now $sum";
    print "\n";
    $j++;
}

print "Total is: $sum"; // 55
