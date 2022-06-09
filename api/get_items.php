<?php
    Header("Content-Type: application/json");

    $data = array();

    for($i = 0; $i < 7; $i++) {
        array_push($data, array(
            "name" => "Test item",
            "description" => "A fun item I worked on",
            "image" => "https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg",
            "url" => "https://jackshaus.ddns.net/sven"
        ));
    }

    echo json_encode($data);
?>