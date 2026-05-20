<?php
    include_once('db.php');
    if(
        isset($_POST['f_name']) && 
        isset($_POST['l_name']) && 
        isset($_POST['email']) &&
        isset($_POST['password']) &&
        isset($_POST['password_confirm'])
    ){
        $f_name = $_POST['f_name'];
        $l_name = $_POST['l_name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $password_confirm = $_POST['password_confirm'];

        if($password != $password_confirm){
            return;
        }

        $sql = "INSERT INTO users (first_name, last_name, email, password) values (?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$f_name, $l_name, $email, $password]);
        header("Location: signin.php");
    }

?>

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            form{
                display: flex;
                flex-direction: column;
                width: 250px;
                
            }
            form > input{
                margin-bottom:15px;
            }
            body{
                display: flex;
                align-items:center;
                justify-content:center;
                border: 1px solid red;
                height: 70vh;
            }
        </style>
    </head>
    <body>
        <form action="#" method="POST">
            <label for="f_name">First name</label>
            <input type="text" id="f_name" name="f_name">
            <label for="l_name">Last name</label>
            <input type="text" id="l_name" name="l_name">
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
            <label for="password_confirm">Confirm password</label>
            <input type="password" id="password_confirm" name="password_confirm">
            <button>Submit</button>
        </form>
    </body>
</html>