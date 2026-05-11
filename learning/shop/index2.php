<?php  
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $dbname = 'shopadr';


    try{
        $pdo = new PDO(
            "mysql:host=$host;dbname=$dbname;charset=utf8", 
            $user,
            $password
            );
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        print("connected the the db");
    }catch(PDOException $e){
        print("failed to log into the db");
    }

    $sql = "SELECT * FROM products";
    $stmt = $pdo->query($sql);
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    print_r($products);
?>
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
</html>