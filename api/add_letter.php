<?php
    # check values are valid
    $letter = $_POST["letter"];
    $colour = $_POST["color"];

    if(!isset($letter) || !isset($colour) || strlen($letter) !== 1 || strlen($colour) > 8) {
        http_response_code(400);
        Header("Content-Type: application/json");
        echo json_encode(array(
            "success" => false,
            "error" => "One or more required params are missing or invalid"
        ));
        exit();
    }

    # create the database connection
    include_once "db.php";

    # get client IP address for logging
    # source: https://stackoverflow.com/a/55790
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }

    # execute the query to insert the data 
    try {
        $stmt = $db_conn->prepare("INSERT INTO Letters (letter,color,ip) VALUES (?,?,?)");
        $stmt->execute(array($letter, $colour, $ip));
        Header("Content-Type: application/json");
        echo json_encode(array(
            "success" => true
        ));
    } catch(PDOException $e) {
        http_response_code(500);
        Header("Content-Type: application/json");
        echo json_encode(array(
            "success" => false,
            "error" => "Error inserting letter into database"
        ));
    }
?>