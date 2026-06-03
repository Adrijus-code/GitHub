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
            <h2>{$pro['ProductName']}</h2>
            <img src='./images/{$pro['product_img']}'/>
            <p>{$pro['RetailPrice']}</p>
            <p>{$stars}</p>
            <button>Add to cart</button>
        </div>";
    }

    function calculateAvg($arr){
        $total = 0;
        foreach($arr as $pro){
            $total += $pro['RetailPrice'];
        }
        return $total;
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
                margin:0;
                padding:0;
            }
            #container{
                display:flex;
                flex-wrap:wrap;
                align-items:center;
                justify-content:center;
                gap:20px
            }
            .product{
                border: 1px solid black;
                display:flex;
                flex-direction:column;
                align-items:center;
                text-align:center;

            }
            .product h2 {
                max-width:20ch;
                font-size:20px;
            }
            .product > img{
                width: 200px;
            }

            header img{
                width: 30px;
            }
            header {
                display:flex;
                justify-content:flex-end
            }
        </style>
    </head>
    <body>
        <header>
            <a href="orders.php"><span>Orders</span></a>
            <a href="cart.php">
                <img src="./images/grocery-store.png" alt="">
            </a>
            <a href='logout.php'>
                <img src='./images/logout.png' alt=''/>
            </a>
        </header>
        <?php
            // print('<pre>');
            // print_r($_SESSION['user_logged']);
            // print('</pre>');
        ?>
        <?php
            print('Welcome '.$_SESSION['user_logged']['id']."<br>");
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