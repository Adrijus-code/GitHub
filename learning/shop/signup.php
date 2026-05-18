<?php
    include_once("./db.php");
    if(
        isset($_POST["f_name"]) && 
        isset($_POST["l_name"]) && 
        isset($_POST["email"]) && 
        isset($_POST["password"]) && 
        isset($_POST["password_confirm"])  
        ){
            $f_name = $_POST["f_name"];
            $l_name = $_POST["l_name"];
            $email = $_POST["email"];
            $password = $_POST["password"];
            $password_confirm = $_POST["password_confirm"];
            //print("inserting into the db : {$f_name} {$l_name} with the following password :  {$password}");
            if($password != $password_confirm){
                print('Password does not match');
                return;
            }

            $sql = "INSERT INTO users(first_name, last_name, email, password) VALUES ('$f_name', '$l_name', '$email', '$password')";
            $stmt = $pdo->exec($sql);
            header("Location: ./signin.php");
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
            <label for="f_name">First name</label>
            <input id="f_name" name="f_name" type="text" required>
            
            <label for="f_name">Last name</label>
            <input id="l_name" name="l_name" type="text" required> 
            
            <label for="email">email</label>
            <input id="email" name="email" type="email" required>
            
            <label for="password">password</label>
            <input id="password" name="password" type="password" required>
            
            <label for="password_confirm">Confirm password</label>
            <input id="password_confirm" name="password_confirm" type="password" required>
            
            <input type="submit" value="create account">
        </form>
    </body>
</html>