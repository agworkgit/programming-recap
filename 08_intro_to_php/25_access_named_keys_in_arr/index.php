<?php
$report_card = array(
    'Tim' => 'C',
    'Bob' => '-D',
    'Anne' => 'B+',
    'Frank' => 'A',
    'Marie' => 'C+'
);

foreach ($report_card as $names => $grades) {
    print "$names's grade is $grades\n";
}
