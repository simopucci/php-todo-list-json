<?php 

// costruisco la task modificata
$updated_task = [
    'text' => $_POST['text'],
    'done' => $_POST['done'] === 'true',
];

// recupero l'indice della task da modificare
$updated_task_index = (int) $_POST['index'];

// recupero il json e lo trasformo in array
$tasklist = json_decode(file_get_contents('../db/tasklist.json'), true);

// modifico la task
$tasklist[$updated_task_index] = $updated_task;

// trasformo array in json
$json_tasklist = json_encode($tasklist);

// lo salvo nel file json
file_put_contents('../db/tasklist.json', $json_tasklist);

header('Content-Type: application/json; charset=utf-8');

// stampo la lista aggiornata
echo $json_tasklist;


?>