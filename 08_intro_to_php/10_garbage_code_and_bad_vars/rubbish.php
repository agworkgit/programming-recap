<?php
$string = "Hello World";
$int = 1;
$float = 2.2;
$rubbish = $float + $int;
$rubbish2 = $string + $int;

print "<h1>String</h1>";
print $string;
print "<h1>Int</h1>";
print $int;
print "<h1>Float</h1>";
print $float;
print "<h1>Rubbish (Capitalisation Error)</h1>";
print $rubbish;
print "<h1>Rubbish2 (Adding a String)</h1>";
print $rubbish2;
