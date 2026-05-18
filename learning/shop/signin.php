<?php
    session_start();
    include_once("./db.php");
    if(isset($_POST["email"]) && isset($_POST["password"])){

        $email = $_POST["email"];
        $password = $_POST["password"];

        $sql = "Select * from users WHERE email = '$email' AND password = '$password'";
        $stmt = $pdo->query($sql);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if($user){
            // print("<pre>");
            // print_r($user);
            // print("</pre>");
            $_SESSION["user_logged"] = $user;
            header("Location: ./index2.php");
        }else{
            print("noo user found");
        }
    }
?>

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            *{
                margin: 0;
                padding: 0;
                font-family: Arial, Helvetica, sans-serif;
            }
            form{
                display:flex;
                flex-direction: column;
                width: 40%;
                margin: 200px auto;
            }
            input{
                margin-bottom: 15px;
                
            }
        </style>
    </head>
    <body>
        
        <form action="#" method="POST">
            <label for="email">email</label>
            <input id="email" name="email" type="email" value ="Tavas@gmail.com"> 
            <label for="password">password</label>
            <input id="password" name="password" type="password" value="Tavas123">
            <input type="submit" value="login">
        </form>
    </body>
</html>