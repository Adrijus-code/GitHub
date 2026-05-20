<?php
    include_once("db.php")


?>


<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .container{
                padding:.5em 1em
            }
            #header{
                display:flex;
                align-items:center;
                justify-content:space-between;
            }
            #header-cart-container > img{
                width: 25px;
            }
        </style>
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
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </body>
</html>