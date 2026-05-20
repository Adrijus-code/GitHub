<?php
    session_start();
    include_once('db.php');

    $sql = "SELECT * FROM products";
    $stmt = $pdo->query($sql);
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

 
    // print("<pre>");
    // print_r($products);
    // print("</pre>");

    function displayProduct($pro){
        $stars = join("", array_fill(0, $pro['product_rating'], "⭐"));
        return "
        <div class='product'>
            <h2>{$pro['product_name']}</h2>
            <img src='./images/{$pro['product_image']}'/>
            <p>{$pro['product_price']}</p>
            <p>{$stars}</p>
        </div>";
    }

    function calculateAvg($arr){
        $total = 0;
        foreach($arr as $pro){
            $total += $pro['product_price'];
        }
        return $total/sizeof($arr);
    }

?>

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            #container{
                display:flex;
            }
            .product{
                border: 1px solid black;
                display:flex;
                flex-direction:column;
                align-items:center;

            }
            .product > img{
                width: 200px;
            }
        </style>
    </head>
    <body>
        <?php
            // print('<pre>');
            // print_r($_SESSION['user_logged']);
            // print('</pre>');
        ?>
        <?php
            print('Welcome '.$_SESSION['user_logged']['first_name']);
            print(calculateAvg($products));
        ?>
        <div id="container">
            <?php
                foreach($products as $product){
                    print(displayProduct($product));
                }
            ?>
        </div>
    </body>
</html>