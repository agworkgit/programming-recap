<?php
// pulling values from a text file
// chdir was used to change the working dir, else PHP can't find the text file!
// this chdir hack is not required on the server side, only for local dev
chdir('/home/ag/Projects/Study/programming-recap/08_intro_to_php/28_turn_file_into_arr');
$file = file('arr_name.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

foreach ($file as $line_num => $line) {
    print "$line_num: $line";
    print "\n";
}

print "\n";

sort($file);

foreach ($file as $line_num => $line) {
    print "$line_num: $line";
    print "\n";
}
