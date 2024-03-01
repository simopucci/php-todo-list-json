<?php

// costruisco la task nuova
$new_task = [
    "text" => $_POST['text'],
    "done" => $_POST['done'] === 'true',
];

// recupero il json e lo trasformo in array
$tasklist = json_decode(file_get_contents('../db/tasklist.json'), true);


// aggiungo la nuova task all'array tasklist
$tasklist [] = $new_task;

// trasformo array in json
$json_tasklist = json_encode($tasklist);

// lo salvo nel file json
file_put_contents('../db/tasklist.json', $json_tasklist);

header('Content-Type: application/json; charset=utf-8');

// stampo la lista aggiornata
echo $json_tasklist;

?>