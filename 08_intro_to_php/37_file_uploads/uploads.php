<?php
// If you want file uploads to your server via HTML forms, they need to be enabled in PHP.ini
// Another very important setting is the max_file_size, what is the file size limit?
// Standard should be about 2MB
// The uploads folder needs the right set of write permissions (security)
// The tmp folder will store the initial upload, performs all the checks, and only after that the file will move to the uploads folder
// HTML form file upload > PHP script > PHP.ini (configs) > tmp folder > file uploads folder

// The folder the file gets dumped into
$dir = "./file-uploads/";

// Unique ID for the file name
$timestamp = time(); // as the seconds go by this number will be unique

// The filename that the file will be saved as, basename returns the base file name (grabs just the file name from the path)
$filename = $dir . $timestamp . basename($_FILES['upload']['name']); // stips anything but the file name

// Gives you all the info about a variable
var_dump($_FILES);
// Info Array of file:
// e.g. : array(1) { ["upload"]=> array(5) {["name"]=> string(13) "IMG_5440.jpeg" ["type"]=> string(10) "image/jpeg" ["tmp_name"]=> string(14) "/tmp/phpPuftLR" ["error"]=> int(0) ["size"]=> int(32887)}}

echo "<br><br>";

// Moving and renaming /tmp file to $filename path
if (move_uploaded_file($_FILES['upload']['tmp_name'], $filename)) {
    echo "<p>File was uploaded --> " . $_FILES['upload']['name'];
} else {
    echo "Upload failed" . $_FILES['upload']['name'];
}

echo "<p>Information about file from $_FILES array</p>";
echo "File name: " . $_FILES['upload']['name'] . "<br>";
echo "File type: " . $_FILES['upload']['type'] . "<br>";
echo "File size: " . $_FILES['upload']['size'] . "Kb <br>";
echo "<br><img src='$filename'><br>";

// Important: make sure to restart the services once you modify your php.ini file, or the phprc (via SSH)
// You can also restrict what type of file is allowed (e.g. PDF,JPEG, etc...)