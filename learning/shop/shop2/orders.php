<?php
    session_start();
    include_once('db.php');

    if(isset($_SESSION['user_logged'])){
        $user_logged = $_SESSION['user_logged'];
        $user_logged_id = $user_logged['id'];
    }

    $sql = "SELECT em.EMPFirstName,em.EMPLastName,o.OrderDate,o.ShipDate, TIMESTAMPDIFF(DAY, o.OrderDate, o.ShipDate) AS shipmentduration FROM orders o INNER JOIN Employees em ON o.EmployeeID = em.EmployeeID WHERE CustomerID = $user_logged_id;";
    $stmt = $pdo->query($sql);
    $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);

    print("<pre>");
    // print_r($orders);
    print("</pre>");
    // order date
    // ship date
    // shipment duration
    // employee who served him
    
    function displayOrder($arr){
        return "
                <tr>
                    <td>{$arr['EMPFirstName']}</td>
                    <td>{$arr['EMPLastName']}</td>
                    <td>{$arr['OrderDate']}</td>
                    <td>{$arr['ShipDate']}</td>
                    <td>{$arr['shipmentduration']}</td>
                </tr>";
    }

        $order_1 = [
            "EMPFirstName" => "Mary",
            "EMPLastName" => "Thompson",
            "OrderDate" => "2018-02-27",
            "ShipDate" => "2018-02-27",
            "shipmentduration" => 0
        ];

        // print(displayOrder($order_1));
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            th,td{
                text-align:center;
            }
            header img{
                width: 30px;
            }
        </style>
    </head>
    <body>
       
        <header>
            <header>
                <a href="cart.php">
                    <img src="./images/grocery-store.png" alt="">
                </a>
                <a href='logout.php'>
                    <img src='./images/logout.png' alt=''/>
                </a>
            </header>
        </header>
        <main>
            <table>
                <caption>Orders list</caption>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Lastname</th>
                        <th>Order date</th>
                        <th>Ship date</th>
                        <th>Shipment duration</th>
                    </tr>
                </thead>
                <tbody>
                    <?php 
                        foreach($orders as $order){
                            print(displayOrder($order));
                        }
                    ?>
                </tbody>
            </table>
        </main>
    </body>
</html>