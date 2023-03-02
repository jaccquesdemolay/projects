<?php

  //database connection
  include_once("dbconnection.php");


  //check if get is set
  if(empty($_GET['name']) && empty($_GET['county'])){
    $sql_event = mysqli_query($con, "SELECT * FROM events ORDER BY date ASC");
  }else if(isset($_GET['name']) && empty($_GET['county'])){

    $citylike = $_GET['name'];
    $sql_event = mysqli_query($con, "SELECT * FROM events WHERE city LIKE '%$citylike%' ");
    
  }else if(empty($_GET['name']) && isset($_GET['county'])){
    $sql_event = mysqli_query($con, "SELECT * FROM events WHERE county_id = '$_GET[county]' ORDER BY date ASC ");

  }else{
    echo "os dois";
  }

  //check fi there is any result
  if ($sql_event){              
    $rows = mysqli_num_rows($sql_event);
  }

  //if there is no result, do a general search taking all events to the page
  if($rows==0){
    $sql_event = mysqli_query($con, "SELECT * FROM events ORDER BY date ASC");
  }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!--fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600&family=Lato:wght@300;400&family=Open+Sans&family=Roboto:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    
    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="./images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon/favicon-16x16.png">
    <link rel="manifest" href="./images/favicon/site.webmanifest">

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Find your event in the UK</title>

    <!--css-->
    <link rel="stylesheet" href="./css/style.css" />

    <!--icons -->
    <script src="https://unpkg.com/phosphor-icons"></script>
  </head>
  <body>
    <header>
      <div class="content">
        <div class="top">
          <p>Things to do</p>
          <h1>
            Find the <span>upcoming events</span> around England
          </h1>
        </div>

        <form class="search" method="GET">
          <div class="search-field">
            <label for="name" class="sr-only">Search by name</label>
            <i class="ph-magnifying-glass-light"></i>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Search by city"
            />
          </div>

          <div class="search-field select">
            <label for="city" class="sr-only">Select the city</label>
            <i class="ph-map-pin-light"></i>
            <select name="county" id="city">
              <option value="">Select the county</option>
              <?php
                $sql_county = mysqli_query($con, "SELECT * FROM county ORDER BY name ASC");
                while($f = mysqli_fetch_array($sql_county)){
              ?>
                  <option value="<?php echo $f['id'] ?>"><?php echo $f['name'] ?></option>
              <?php
                }
              ?>
            </select>
            <i class="ph-caret-down-light"></i>
          </div>

          <button class="btn primary">Search</button>
        </form>
      </div>
    </header>

    <main>

      <div class="content">      
        
      <?php
        //message when the results be zero
        if($rows==0){
      ?>
        <div class="error">
          No results
        </div>
      <?php
        }
      ?>

        <section class="top">
          <h2>Latest events</h2>

          <div class="view">
            <button class="btn primary">List</button>
            <button class="btn secondary">Map</button>
          </div>
        </section>

        <section class="cards">


          <?php        
              //fecth the results from the query    
              while($fetch_event = mysqli_fetch_array($sql_event)){           
          ?>
              <div class="card">
                <div class="img" style="background: url(./<?php echo $fetch_event['image']; ?>) center center">
                <div class="overlay_effect"></div>
                </div> 

                <div class="content">
                  <h3><?php echo $fetch_event['title']; ?></h3>

                  <p>
                    <?php echo $fetch_event['text']; ?>
                  </p>
                



                  <div class="location">
                    <i class="ph-map-pin-light"></i> <?php echo $fetch_event['city']; ?> - 

                    <?php
                      //search for the county name on the county table
                      $sql_county = mysqli_query($con, "SELECT name FROM county WHERE id = '$fetch_event[county_id]'");
                      if($fetch_county = mysqli_fetch_array($sql_county)){
                        echo $fetch_county['name'];
                      }
                    ?>
    
                  </div>
                </div>
              </div>
          <?php
              }
          ?>

          
        </section>

        <div class="content">
          <ul class="listPage">
            <!-- <li class="active primary">1</li>
            <li class="secondary">2</li>
            <li class="secondary">3</li> -->
          </ul>
        </div>
      </div>
    </main>
  </body>

  <script src="js/pagination.js"></script>
</html>
