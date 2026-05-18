<?php
    session_start();
    include_once('db.php');

    if(isset($_POST['email']) && isset($_POST['password'])){

        $email = $_POST['email'];
        $password = $_POST['password'];
        $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
        $stmt = $pdo->query($sql);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        //print_r($user);
        if($user){
            $_SESSION['user_logged'] = $user;
            header("Location: index2.php");
        }else{
            print("Credentials are wrong");
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
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
            <button>Log in</button>
        </form>
    </body>
</html>