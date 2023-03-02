<?php
    $servername = "localhost:3308";
    $database = "eventswebpg";
    $username = "root";
    $pwd = "123";

    $con = mysqli_connect($servername, $username, $pwd, $database) or die ("Error connecting to the database");

?>