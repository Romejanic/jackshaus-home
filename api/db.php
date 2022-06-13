<?php
    # read database credentials from file
    $db_json = file_get_contents("/home/jack/data/website-db.json");
    $db_info = json_decode($db_json, true);

    # open sql connection
    try {
        $db_host = $db_info["host"];
        $db_user = $db_info["user"];
        $db_pass = $db_info["password"];
        $db_name = $db_info["database"];
        $db_conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
        $db_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        die("Connection failed: ". $e->getMessage());
    }
?>