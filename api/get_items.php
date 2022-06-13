<?php
    include_once "db.php";
    Header("Content-Type: application/json");

    $data = array();

    foreach($db_conn->query("SELECT * FROM Things") as $row) {
        array_push($data, array(
            "name" => $row["name"],
            "description" => $row["description"],
            "image" => $row["image"],
            "url" => $row["url"]
        ));
    }

    echo json_encode($data);
?>