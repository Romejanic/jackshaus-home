<?php
    include_once "db.php";
    Header("Content-Type: application/json");

    $data = array();

    foreach($db_conn->query("SELECT letter,color FROM Letters ORDER BY id DESC LIMIT 10") as $row) {
        array_push($data, array(
            "letter" => $row["letter"],
            "color" => $row["color"]
        ));
    }

    echo json_encode($data);
?>