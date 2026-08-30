<?php
$region = 2;

switch ($region) {
    case 1:
        print "One day shipping";
        break;
    case 2:
        print "Two day shipping";
        break;
    case 3:
        print "Three day shipping";
        break;
    default:
        print "We do not ship to you";
        print "\n";
        print "Please contact customer support";
        break;
}
