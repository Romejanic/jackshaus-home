<?php
    include_once "db.php";
    Header("Content-Type: application/json");

    $data = array();

    foreach($db_conn->query("SELECT letter FROM Letters ORDER BY id DESC LIMIT 10") as $row) {
        array_push($data, $row["letter"]);
    }

    echo json_encode($data);
?>