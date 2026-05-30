<?php
    session_start();
    include_once("db.php");
    if(isset($_SESSION["user_logged"])){
        $user_logged = $_SESSION["user_logged"];
        $user_logged_id = $user_logged["id"];
        
    }

    if(isset($_GET["product_to_remove"])){
        print("removing product number {$_GET['product_to_remove']}");
    }
    
    // displaying all orders of customer num : ....
    // $sql = "SELECT o.CustomerID, QuotedPrice, QuantityOrdered, ProductName, QuotedPrice * QuantityOrdered AS subtotal FROM orders AS o INNER JOIN order_details AS od ON o.OrderNumber = od.OrderNumber INNER JOIN products AS p ON od.ProductNumber = p.ProductNumber";
    $sql = "SELECT  o.CustomerID, QuotedPrice, QuantityOrdered, ProductName, p.ProductNumber, QuotedPrice * QuantityOrdered AS subtotal FROM orders  o INNER JOIN order_details  od ON o.OrderNumber = od.OrderNumber INNER JOIN products  p ON od.ProductNumber = p.ProductNumber WHERE o.CustomerID = $user_logged_id;";
    $stmt = $pdo->query($sql);
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    function displayProduct($arr){

        return "<tr>
                                <td class='product-img-div'>
                                    <img class='product-img' src='./images/product01.png'>
                                    <p>{$arr['ProductName']}</p>
                                </td>
                                <td>
                                    <p>{$arr['QuotedPrice']}</p>
                                </td>
                                <td>
                                    <input type='number'  value='{$arr['QuantityOrdered']}' >
                                </td>
                                <td>
                                    <p>{$arr['subtotal']}</p>
                                    
                                </td>
                                <td>
                                    <a href='./cart.php?product_to_remove={$arr['ProductNumber']}'>
                                        <img class='delete-img' src='./images/delete.png'>
                                    </a>
                                </td>
                            </tr>";
    }

    function getTotal($arr){
        $total = 0;
        foreach($arr as $pro){
            $total += $pro['subtotal'];
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
        <link rel='stylesheet' href='cart.css'> 
    </head>
    <body>
        <header>
            <div class="container">
                <div id="header">
                    <h1>Shopping Cart System</h1>
                    <div id="header-middle-div">
                        <p>Home</p>
                        <p>Products</p>
                    </div>
                    <div id="header-cart-container">
                        <img src="./images/grocery-store.png"/>
                        <span><?php print(sizeof($products));?></span>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <h2>Shopping Cart</h2>
            
            <div id="shopping-cart-div">
                <div id="cart-information">
                    <table>
                        <thead>
                            <tr>
                                <th>product</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>sub total</th>
                                <th>remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                foreach($products as $pro){
                                    print(displayProduct($pro));
                                }
                            ?>
                        </tbody>
                    </table>
                    <div class='total-div'>
                        <p>total <?php print(getTotal($products)); ?></p>
                    </div>
                    <div class='cart-btn-div'>
                        <button>Updated</button>
                        <button>Place Order</button>
                    </div>
                </div>
            </div>
        </main>
    </body>
</html>