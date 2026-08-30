<?php
// sets timezone
date_default_timezone_set('GMT');

$file = 'file.html';
$date = date("D M j G:i:s T Y"); // time() returns current time
$info = "Iteration: $date\n";

// write $info to file => path, data, append_to_file_end
file_put_contents($file, $info, FILE_APPEND);

// confirm script ran
print "Script ran at: $date";

// very useful for log files