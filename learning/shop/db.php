<?php
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $dbname = 'shopadr';


    try{
        $pdo = new PDO(
            "mysql:host=".$host."; dbname=".$dbname.";charset=utf8", 
            $user,
            $password
            );
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // print("connected the the db");
    }catch(PDOException $e){
        print("failed to log into the db");
    }


?>