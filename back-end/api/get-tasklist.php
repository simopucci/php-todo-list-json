<?php

$json_tacklist = file_get_contents('../db/tasklist.json');

header('Content-Type: application/json; charset=utf-8');
echo $json_tacklist;

?>