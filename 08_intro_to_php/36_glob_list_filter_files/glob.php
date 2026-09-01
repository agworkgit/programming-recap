<?php
// Allows you to read all the contents in a folder, and then filter them
// You can also use the media files in HTML tags to display a lot of image files, audio files, pdfs etc...very useful!
// You can also use it to create a search across files and display what's being searched.
$glob = glob("./*");

print_r($glob);

echo "\n";

foreach ($glob as $file) {
    echo "{$file}\n";
}

/* 
OUTPUT:

Array
(
    [0] => ./01_basic_js
    [1] => ./02_head_first_js
    [2] => ./03_think_like_a_programmer
    [3] => ./05_modern_cpp
    [4] => ./06_python_crash
    [5] => ./07_missing_semester
    [6] => ./08_intro_to_php
    [7] => ./readme.md
)

./01_basic_js
./02_head_first_js
./03_think_like_a_programmer
./05_modern_cpp
./06_python_crash
./07_missing_semester
./08_intro_to_php
./readme.md
*/