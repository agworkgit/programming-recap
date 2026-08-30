<?php
// is processing the form.php data and displays it
$name = $_POST['name']; // accessing posted values in variables
$uniform_size = $_POST['uniform-size'];
$shift_1 = $_POST['shift-1'];
$shift_2 = $_POST['shift-2'];
$shift_3 = $_POST['shift-3'];
$active_shifts = [$shift_1, $shift_2, $shift_3];
$email = $_POST['email'];

// prep data for file log
$data_log = array(
    'name' => $name,
    'uniform_size' => $uniform_size,
    'shifts' => $active_shifts,
    'email' => $email
);

// print to screen
print "Your name is: $name";
print "<br>";
print "<br>";
print "Your uniform size is: $uniform_size";
print "<br>";
print "<br>";
foreach ($active_shifts as $shift) {
    if ($shift != null) {
        print "Your shift/s: $shift";
        print "<br>";
    }
}
print "<br>";
print "Your email is: $email";

// encode as JSON, then add a newline, otherwise it gets serialised and misinterpreted
$log_entry = json_encode($data_log) . "\n";

// log to file
$file = 'form_data_log.json';
file_put_contents($file, $log_entry, FILE_APPEND);
