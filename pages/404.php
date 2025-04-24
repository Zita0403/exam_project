<?php
http_response_code(404);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Az oldal nem található</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        body {
            background-color: #F0CA96;
            background-image: url("../assets/images/booking-bg.jpg");
            background-repeat: no-repeat;
            background-size: cover;
        }

        h1 {
            text-align: center;
            color: #4e3b2b;
            font-family: "Noto Serif Display", serif;
            font-weight: 800;
            font-size: 40px;
        }
    </style>
</head>
<body>
<?php print "<h1> 404 - Az oldal nem található </h1>";?>
</body>
</html>