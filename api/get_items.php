<?php
    Header("Content-Type: application/json");

    echo json_encode(array(
        array(
            "name" => "Test item",
            "description" => "A fun item I worked on",
            "image" => ""
        )
    ));
    echo "\n";
?>